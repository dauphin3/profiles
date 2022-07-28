import { hashToString } from 'holochain-ui-test-utils';

export class ProfilesMock {
  constructor() {
    this.agents = [];
  }

  create_profile({ username }, provenance) {
    const agent = {
      agent_pub_key: hashToString(provenance),
      profile: { username, fields: {} },
    };
    this.agents.push(agent);

    return agent;
  }

  search_profiles({ username_prefix }) {
    return this.agents
      .filter(a => a.profile.username.startsWith(username_prefix.slice(0, 3)))
      .map(a => ({
        agent_pub_key: a.agent_pub_key,
        ...a,
      }));
  }

  get_my_profile(_, provenance) {
    const agent = this.findAgent(hashToString(provenance));

    if (!agent)
      return {
        agent_pub_key: hashToString(provenance),
      };
    return {
      agent_pub_key: agent.agent_pub_key,
      profile: agent ? agent.profile : undefined,
    };
  }

  get_agent_profile({ agent_address }) {
    const agent = this.findAgent(agent_address);
    return agent ? agent.username : undefined;
  }

  findAgent(agent_address) {
    return this.agents.find(user => user.agent_pub_key === agent_address);
  }
}
