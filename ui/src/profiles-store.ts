import { CellClient } from '@holochain-open-dev/cell-client';
import {
  AgentPubKeyB64,
  Dictionary,
  serializeHash,
} from '@holochain-open-dev/core-types';
import merge from 'lodash-es/merge';

import { ProfilesService } from './profiles-service';
import { AgentProfile, Profile } from './types';
import { writable, Writable, derived, Readable, get } from 'svelte/store';
import { defaultConfig, ProfilesConfig } from './config';

export class ProfilesStore {
  /** Private */
  private _service: ProfilesService;
  private _knownProfilesStore: Writable<Dictionary<Profile>> = writable({});

  /** Static info */
  public myAgentPubKey: AgentPubKeyB64;

  /** Readable stores */
  public knownProfiles: Readable<Dictionary<Profile>> = derived(
    this._knownProfilesStore,
    i => i
  );
  public myProfile: Readable<Profile> = derived(
    this._knownProfilesStore,
    profiles => profiles[this.myAgentPubKey]
  );

  profileOf(agentPubKey: AgentPubKeyB64): Readable<Profile> {
    return derived(this._knownProfilesStore, profiles => profiles[agentPubKey]);
  }

  config: ProfilesConfig;

  constructor(
    protected cellClient: CellClient,
    config: Partial<ProfilesConfig> = {}
  ) {
    this.config = merge(defaultConfig, config);
    this._service = new ProfilesService(cellClient, this.config.zomeName);
    this.myAgentPubKey = serializeHash(cellClient.cellId[1]);
  }

  /** Actions */
  async fetchAllProfiles(): Promise<void> {
    const allProfiles = await this._service.getAllProfiles();

    this._knownProfilesStore.update(profiles => {
      for (const profile of allProfiles) {
        profiles[profile.agent_pub_key] = profile.profile;
      }
      return profiles;
    });
  }

  async fetchAgentProfile(agentPubKey: AgentPubKeyB64): Promise<Profile> {
    // For now, optimistic return of the cached profile
    // TODO: implement cache invalidation

    const knownProfiles = get(this._knownProfilesStore);

    if (knownProfiles[agentPubKey]) return knownProfiles[agentPubKey];

    const profile = await this._service.getAgentProfile(agentPubKey);

    this._knownProfilesStore.update(profiles => {
      profiles[profile.agent_pub_key] = profile.profile;
      return profiles;
    });
    return profile.profile;
  }

  async fetchAgentsProfiles(agentPubKeys: AgentPubKeyB64[]): Promise<void> {
    // For now, optimistic return of the cached profile
    // TODO: implement cache invalidation

    const knownProfiles = get(this._knownProfilesStore);

    const profilesToFetch = Object.keys(knownProfiles).filter(
      pubKey => !agentPubKeys.includes(pubKey)
    );

    if (profilesToFetch.length === 0) {
      return;
    }

    const fetchedProfiles = await this._service.getAgentsProfiles(
      profilesToFetch
    );

    this._knownProfilesStore.update(profiles => {
      for (const fetchedProfile of fetchedProfiles) {
        profiles[fetchedProfile.agent_pub_key] = fetchedProfile.profile;
      }
      return profiles;
    });
  }

  async fetchMyProfile(): Promise<void> {
    const profile = await this._service.getMyProfile();
    if (profile) {
      this._knownProfilesStore.update(profiles => {
        profiles[profile.agent_pub_key] = profile.profile;
        return profiles;
      });
    }
  }

  async searchProfiles(nicknamePrefix: string): Promise<AgentProfile[]> {
    const searchedProfiles = await this._service.searchProfiles(nicknamePrefix);

    this._knownProfilesStore.update(profiles => {
      for (const profile of searchedProfiles) {
        profiles[profile.agent_pub_key] = profile.profile;
      }
      return profiles;
    });
    return searchedProfiles;
  }

  async createProfile(profile: Profile): Promise<void> {
    await this._service.createProfile(profile);

    this._knownProfilesStore.update(profiles => {
      profiles[this.myAgentPubKey] = profile;
      return profiles;
    });
  }
}