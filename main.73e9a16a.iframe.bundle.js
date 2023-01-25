(self.webpackChunk_holochain_open_dev_profiles_dev=self.webpackChunk_holochain_open_dev_profiles_dev||[]).push([[179],{"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});var dist=__webpack_require__("./node_modules/@storybook/web-components/dist/index.mjs");const custom_elements_namespaceObject=JSON.parse('{"schemaVersion":"1.0.0","readme":"","modules":[{"kind":"javascript-module","path":"src/config.ts","declarations":[{"kind":"variable","name":"defaultConfig","type":{"text":"ProfilesConfig"},"default":"{\\n  avatarMode: \'avatar-optional\',\\n  additionalFields: [],\\n  minNicknameLength: 3,\\n}"}],"exports":[{"kind":"js","name":"defaultConfig","declaration":{"name":"defaultConfig","module":"src/config.ts"}}]},{"kind":"javascript-module","path":"src/context.ts","declarations":[{"kind":"variable","name":"profilesStoreContext"}],"exports":[{"kind":"js","name":"profilesStoreContext","declaration":{"name":"profilesStoreContext","module":"src/context.ts"}}]},{"kind":"javascript-module","path":"src/index.ts","declarations":[],"exports":[{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./types\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./context\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/create-profile\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/update-profile\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/my-profile\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/search-agent\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/profiles-context\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/profile-prompt\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/list-profiles\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/agent-avatar\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./elements/profile-detail\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./profiles-client\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./profiles-store\\""}},{"kind":"js","name":"*","declaration":{"name":"*","package":"\\"./config\\""}}]},{"kind":"javascript-module","path":"src/mocks.ts","declarations":[{"kind":"function","name":"demoProfiles","return":{"type":{"text":"AgentPubKeyMap<Record>"}}},{"kind":"class","description":"","name":"ProfilesZomeMock","members":[{"kind":"method","name":"create_profile","return":{"type":{"text":"Promise<Record>"}},"parameters":[{"name":"profile","type":{"text":"Profile"}}]},{"kind":"method","name":"update_profile","return":{"type":{"text":"Promise<Record>"}},"parameters":[{"name":"profile","type":{"text":"Profile"}}]},{"kind":"method","name":"search_agents","parameters":[{"name":"{ nickname_filter }","type":{"text":"{ nickname_filter: string }"}}]},{"kind":"method","name":"get_agent_profile","parameters":[{"name":"agent_address","type":{"text":"AgentPubKey"}}]},{"kind":"method","name":"get_agents_with_profile"}],"superclass":{"name":"ZomeMock","package":"@holochain-open-dev/utils"}}],"exports":[{"kind":"js","name":"demoProfiles","declaration":{"name":"demoProfiles","module":"src/mocks.ts"}},{"kind":"js","name":"ProfilesZomeMock","declaration":{"name":"ProfilesZomeMock","module":"src/mocks.ts"}}]},{"kind":"javascript-module","path":"src/profiles-client.ts","declarations":[{"kind":"class","description":"","name":"ProfilesClient","members":[{"kind":"field","name":"emitter","type":{"text":"Emittery<ProfilesEvents>"},"default":"new Emittery()"},{"kind":"method","name":"on","return":{"type":{"text":"UnsubscribeFunction"}},"parameters":[{"name":"eventName","type":{"text":"Name | readonly Name[]"}},{"name":"listener","type":{"text":"(eventData: ProfilesEvents[Name]) => void | Promise<void>"}}]},{"kind":"method","name":"getAgentProfile","return":{"type":{"text":""}},"parameters":[{"name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"the agent to get the profile for"}],"description":"Get the profile for the given agent, if they have created it"},{"kind":"method","name":"searchAgents","return":{"type":{"text":""}},"parameters":[{"name":"nicknameFilter","type":{"text":"string"},"description":"must be of at least 3 characters"}],"description":"Search profiles that start with nicknameFilter"},{"kind":"method","name":"getAgentsWithProfile","return":{"type":{"text":""}},"description":"Get all the agents in the DHT that have created a profile"},{"kind":"method","name":"createProfile","return":{"type":{"text":"Promise<void>"}},"parameters":[{"name":"profile","type":{"text":"Profile"},"description":"the profile to create"}],"description":"Create my profile"},{"kind":"method","name":"updateProfile","return":{"type":{"text":"Promise<void>"}},"parameters":[{"name":"profile","type":{"text":"Profile"},"description":"the profile to create"}],"description":"Update my profile"},{"kind":"method","name":"callZome","privacy":"private","parameters":[{"name":"fn_name","type":{"text":"string"}},{"name":"payload","type":{"text":"any"}}]}]}],"exports":[{"kind":"js","name":"ProfilesClient","declaration":{"name":"ProfilesClient","module":"src/profiles-client.ts"}}]},{"kind":"javascript-module","path":"src/profiles-store.ts","declarations":[{"kind":"class","description":"","name":"ProfilesStore","members":[{"kind":"field","name":"config","type":{"text":"ProfilesConfig"}},{"kind":"field","name":"agentsWithProfile","description":"Fetches all the agents that have created a profile in the DHT"},{"kind":"field","name":"allProfiles","description":"Fetches the profiles for all agents in the DHT\\n\\nThis will get slower as the number of agents in the DHT increases"},{"kind":"field","name":"agentsProfiles","default":"new LazyHoloHashMap((agent: AgentPubKey) =>\\n    asyncReadable<Profile | undefined>(async (set) => {\\n      const profile = await this.client.getAgentProfile(agent);\\n      set(profile);\\n\\n      return this.client.on(\\"profile-created\\", (profile) => {\\n        if (this.client.client.myPubKey.toString() === agent.toString()) {\\n          set(profile);\\n        }\\n      });\\n    })\\n  )"},{"kind":"field","name":"myProfile"},{"kind":"method","name":"searchProfiles","return":{"type":{"text":""}},"parameters":[{"name":"nicknameFilter","type":{"text":"string"},"description":"must be of at least 3 characters"}],"description":"Search the profiles for the agent with nicknames starting with the given nicknamePrefix"}]}],"exports":[{"kind":"js","name":"ProfilesStore","declaration":{"name":"ProfilesStore","module":"src/profiles-store.ts"}}]},{"kind":"javascript-module","path":"src/types.ts","declarations":[],"exports":[]},{"kind":"javascript-module","path":"src/definitions/agent-avatar.ts","declarations":[{"kind":"class","description":"","name":"AA","superclass":{"name":"AgentAvatar","module":"/src/elements/agent-avatar"},"tagName":"agent-avatar","customElement":true,"attributes":[{"name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. The public key identifying the agent whose profile is going to be shown.","fieldName":"agentPubKey","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}},{"name":"size","type":{"text":"number"},"default":"32","description":"Size of the avatar image in pixels.","fieldName":"size","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}}],"members":[{"kind":"field","name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. The public key identifying the agent whose profile is going to be shown.","attribute":"agentPubKey","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}},{"kind":"field","name":"size","type":{"text":"number"},"default":"32","description":"Size of the avatar image in pixels.","attribute":"size","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}},{"kind":"field","name":"_agentProfile","privacy":"private","default":"new StoreSubscriber(this, () =>\\n    this._store.agentsProfiles.get(this.agentPubKey)\\n  )","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}},{"kind":"method","name":"renderIdenticon","inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}},{"kind":"method","name":"renderProfile","parameters":[{"name":"profile","type":{"text":"Profile | undefined"}}],"inheritedFrom":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"agent-avatar","declaration":{"name":"AA","module":"src/definitions/agent-avatar.ts"}}]},{"kind":"javascript-module","path":"src/definitions/create-profile.ts","declarations":[{"kind":"class","description":"","name":"CP","superclass":{"name":"CreateProfile","module":"/src/elements/create-profile"},"tagName":"create-profile","customElement":true,"members":[{"kind":"method","name":"createProfile","parameters":[{"name":"profile","type":{"text":"Profile"}}],"description":"Private properties","inheritedFrom":{"name":"CreateProfile","module":"src/elements/create-profile.ts"}}],"events":[{"name":"profile-created","type":{"text":"CustomEvent"},"description":"Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }","inheritedFrom":{"name":"CreateProfile","module":"src/elements/create-profile.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"create-profile","declaration":{"name":"CP","module":"src/definitions/create-profile.ts"}}]},{"kind":"javascript-module","path":"src/definitions/list-profiles.ts","declarations":[{"kind":"class","description":"","name":"LP","superclass":{"name":"ListProfiles","module":"/src/elements/list-profiles"},"tagName":"list-profiles","customElement":true,"members":[{"kind":"method","name":"initials","return":{"type":{"text":"string"}},"parameters":[{"name":"nickname","type":{"text":"string"}}],"inheritedFrom":{"name":"ListProfiles","module":"src/elements/list-profiles.ts"}},{"kind":"method","name":"fireAgentSelected","parameters":[{"name":"agentPubKey","type":{"text":"AgentPubKey"}}],"inheritedFrom":{"name":"ListProfiles","module":"src/elements/list-profiles.ts"}},{"kind":"method","name":"renderList","parameters":[{"name":"profiles","type":{"text":"ReadonlyMap<AgentPubKey, Profile>"}}],"inheritedFrom":{"name":"ListProfiles","module":"src/elements/list-profiles.ts"}}],"events":[{"name":"agent-selected","type":{"text":"CustomEvent"},"description":"Fired when the user selects an agent from the list. Detail will have this shape: { agentPubKey: <AGENT_PUB_KEY as Uint8Array> }","inheritedFrom":{"name":"ListProfiles","module":"src/elements/list-profiles.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"list-profiles","declaration":{"name":"LP","module":"src/definitions/list-profiles.ts"}}]},{"kind":"javascript-module","path":"src/definitions/my-profile.ts","declarations":[{"kind":"class","description":"","name":"MP","superclass":{"name":"MyProfile","module":"/src/elements/my-profile"},"tagName":"my-profile","customElement":true}],"exports":[{"kind":"custom-element-definition","name":"my-profile","declaration":{"name":"MP","module":"src/definitions/my-profile.ts"}}]},{"kind":"javascript-module","path":"src/definitions/profile-detail.ts","declarations":[{"kind":"class","description":"","name":"PD","superclass":{"name":"ProfileDetail","module":"/src/elements/profile-detail"},"tagName":"profile-detail","customElement":true,"attributes":[{"name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. Public key identifying the agent for which the profile should be shown","fieldName":"agentPubKey","inheritedFrom":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}}],"members":[{"kind":"field","name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. Public key identifying the agent for which the profile should be shown","attribute":"agentPubKey","inheritedFrom":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}},{"kind":"method","name":"getAdditionalFields","return":{"type":{"text":"Record<string, string>"}},"parameters":[{"name":"profile","type":{"text":"Profile"}}],"inheritedFrom":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}},{"kind":"method","name":"renderAdditionalField","parameters":[{"name":"fieldId","type":{"text":"string"}},{"name":"fieldValue","type":{"text":"string"}}],"inheritedFrom":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}},{"kind":"method","name":"renderProfile","parameters":[{"name":"profile","type":{"text":"Profile | undefined"}}],"inheritedFrom":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"profile-detail","declaration":{"name":"PD","module":"src/definitions/profile-detail.ts"}}]},{"kind":"javascript-module","path":"src/definitions/profile-prompt.ts","declarations":[{"kind":"class","description":"","name":"PP","superclass":{"name":"ProfilePrompt","module":"/src/elements/profile-prompt"},"tagName":"profile-prompt","customElement":true,"members":[{"kind":"method","name":"renderPrompt","parameters":[{"name":"myProfile","type":{"text":"Profile | undefined"}}],"inheritedFrom":{"name":"ProfilePrompt","module":"src/elements/profile-prompt.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"profile-prompt","declaration":{"name":"PP","module":"src/definitions/profile-prompt.ts"}}]},{"kind":"javascript-module","path":"src/definitions/profiles-context.ts","declarations":[{"kind":"class","description":"","name":"PC","superclass":{"name":"ProfilesContext","module":"/src/elements/profiles-context"},"tagName":"profiles-context","customElement":true,"attributes":[{"name":"store","type":{"text":"ProfilesStore"},"fieldName":"store","inheritedFrom":{"name":"ProfilesContext","module":"src/elements/profiles-context.ts"}}],"members":[{"kind":"field","name":"store","type":{"text":"ProfilesStore"},"attribute":"store","inheritedFrom":{"name":"ProfilesContext","module":"src/elements/profiles-context.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"profiles-context","declaration":{"name":"PC","module":"src/definitions/profiles-context.ts"}}]},{"kind":"javascript-module","path":"src/definitions/search-agent.ts","declarations":[{"kind":"class","description":"","name":"SA","superclass":{"name":"SearchAgent","module":"/src/elements/search-agent"},"tagName":"search-agent","customElement":true,"attributes":[{"name":"clear-on-select","type":{"text":"boolean"},"default":"false","description":"Whether to clear the field when an agent is selected.","fieldName":"clearOnSelect","attribute":"clear-on-select","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"name":"include-myself","type":{"text":"boolean"},"default":"false","description":"Whether to include my own agent as a possible agent to select.","fieldName":"includeMyself","attribute":"include-myself","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"name":"field-label","type":{"text":"string"},"description":"Label for the agent searching field.","fieldName":"fieldLabel","attribute":"field-label","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}}],"members":[{"kind":"field","name":"clearOnSelect","type":{"text":"boolean"},"default":"false","description":"Whether to clear the field when an agent is selected.","attribute":"clear-on-select","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"kind":"field","name":"includeMyself","type":{"text":"boolean"},"default":"false","description":"Whether to include my own agent as a possible agent to select.","attribute":"include-myself","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"kind":"field","name":"fieldLabel","type":{"text":"string"},"description":"Label for the agent searching field.","attribute":"field-label","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"kind":"method","name":"onFilterChange","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"kind":"method","name":"onUsernameSelected","parameters":[{"name":"[agentPubKey, profile]","type":{"text":"[AgentPubKey, Profile]"}}],"inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}},{"kind":"method","name":"renderAgentList","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}}],"events":[{"name":"agent-selected","type":{"text":"CustomEvent"},"description":"Fired when the user selects some agent. Detail will have this shape: { agentPubKey: HoloHash }","inheritedFrom":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"search-agent","declaration":{"name":"SA","module":"src/definitions/search-agent.ts"}}]},{"kind":"javascript-module","path":"src/definitions/update-profile.ts","declarations":[{"kind":"class","description":"","name":"UP","superclass":{"name":"UpdateProfile","module":"/src/elements/update-profile"},"tagName":"update-profile","customElement":true,"members":[{"kind":"method","name":"updateProfile","parameters":[{"name":"profile","type":{"text":"Profile"}}],"inheritedFrom":{"name":"UpdateProfile","module":"src/elements/update-profile.ts"}}],"events":[{"name":"profile-updated","type":{"text":"CustomEvent"},"description":"Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }","inheritedFrom":{"name":"UpdateProfile","module":"src/elements/update-profile.ts"}}]}],"exports":[{"kind":"custom-element-definition","name":"update-profile","declaration":{"name":"UP","module":"src/definitions/update-profile.ts"}}]},{"kind":"javascript-module","path":"src/elements/agent-avatar.ts","declarations":[{"kind":"class","description":"","name":"AgentAvatar","members":[{"kind":"field","name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. The public key identifying the agent whose profile is going to be shown.","attribute":"agentPubKey"},{"kind":"field","name":"size","type":{"text":"number"},"default":"32","description":"Size of the avatar image in pixels.","attribute":"size"},{"kind":"field","name":"_agentProfile","privacy":"private","default":"new StoreSubscriber(this, () =>\\n    this._store.agentsProfiles.get(this.agentPubKey)\\n  )"},{"kind":"method","name":"renderIdenticon"},{"kind":"method","name":"renderProfile","parameters":[{"name":"profile","type":{"text":"Profile | undefined"}}]}],"attributes":[{"name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. The public key identifying the agent whose profile is going to be shown.","fieldName":"agentPubKey"},{"name":"size","type":{"text":"number"},"default":"32","description":"Size of the avatar image in pixels.","fieldName":"size"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"customElement":true}],"exports":[{"kind":"js","name":"AgentAvatar","declaration":{"name":"AgentAvatar","module":"src/elements/agent-avatar.ts"}}]},{"kind":"javascript-module","path":"src/elements/create-profile.ts","declarations":[{"kind":"class","description":"A custom element that fires event on value change.","name":"CreateProfile","members":[{"kind":"method","name":"createProfile","parameters":[{"name":"profile","type":{"text":"Profile"}}],"description":"Private properties"}],"events":[{"name":"profile-created","type":{"text":"CustomEvent"},"description":"Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"create-profile","customElement":true}],"exports":[{"kind":"js","name":"CreateProfile","declaration":{"name":"CreateProfile","module":"src/elements/create-profile.ts"}}]},{"kind":"javascript-module","path":"src/elements/edit-profile.ts","declarations":[{"kind":"class","description":"","name":"EditProfile","members":[{"kind":"field","name":"profile","type":{"text":"Profile | undefined"},"description":"The profile to be edited.","attribute":"profile"},{"kind":"field","name":"saveProfileLabel","type":{"text":"string | undefined"},"description":"Label for the save profile button.","attribute":"save-profile-label"},{"kind":"field","name":"allowCancel","type":{"text":"boolean"},"default":"false","attribute":"allowCancel"},{"kind":"method","name":"onAvatarUploaded"},{"kind":"method","name":"avatarMode"},{"kind":"method","name":"renderAvatar"},{"kind":"method","name":"shouldSaveButtonBeEnabled"},{"kind":"method","name":"textfieldToFieldId","return":{"type":{"text":"string"}},"parameters":[{"name":"field","type":{"text":"TextField"}}]},{"kind":"method","name":"getAdditionalFieldsValues","return":{"type":{"text":"Record<string, string>"}}},{"kind":"method","name":"getAdditionalTextFields","return":{"type":{"text":"Record<string, TextField>"}}},{"kind":"method","name":"fireSaveProfile"},{"kind":"method","name":"fireCancel"},{"kind":"method","name":"renderField","parameters":[{"name":"fieldName","type":{"text":"string"}}]}],"events":[{"name":"save-profile","type":{"text":"CustomEvent"},"description":"Fired when the save profile button is clicked"},{"name":"cancel-edit-profile","type":{"text":"CustomEvent"}}],"attributes":[{"name":"profile","type":{"text":"Profile | undefined"},"description":"The profile to be edited.","fieldName":"profile"},{"name":"save-profile-label","type":{"text":"string | undefined"},"description":"Label for the save profile button.","fieldName":"saveProfileLabel"},{"name":"allowCancel","type":{"text":"boolean"},"default":"false","fieldName":"allowCancel"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"edit-profile","customElement":true}],"exports":[{"kind":"js","name":"EditProfile","declaration":{"name":"EditProfile","module":"src/elements/edit-profile.ts"}}]},{"kind":"javascript-module","path":"src/elements/list-profiles.ts","declarations":[{"kind":"class","description":"","name":"ListProfiles","members":[{"kind":"method","name":"initials","return":{"type":{"text":"string"}},"parameters":[{"name":"nickname","type":{"text":"string"}}]},{"kind":"method","name":"fireAgentSelected","parameters":[{"name":"agentPubKey","type":{"text":"AgentPubKey"}}]},{"kind":"method","name":"renderList","parameters":[{"name":"profiles","type":{"text":"ReadonlyMap<AgentPubKey, Profile>"}}]}],"events":[{"name":"agent-selected","type":{"text":"CustomEvent"},"description":"Fired when the user selects an agent from the list. Detail will have this shape: { agentPubKey: <AGENT_PUB_KEY as Uint8Array> }"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"list-profiles","customElement":true}],"exports":[{"kind":"js","name":"ListProfiles","declaration":{"name":"ListProfiles","module":"src/elements/list-profiles.ts"}}]},{"kind":"javascript-module","path":"src/elements/my-profile.ts","declarations":[{"kind":"class","description":"","name":"MyProfile","members":[],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"profile-detail","customElement":true}],"exports":[{"kind":"js","name":"MyProfile","declaration":{"name":"MyProfile","module":"src/elements/my-profile.ts"}}]},{"kind":"javascript-module","path":"src/elements/profile-detail.ts","declarations":[{"kind":"class","description":"","name":"ProfileDetail","members":[{"kind":"field","name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. Public key identifying the agent for which the profile should be shown","attribute":"agentPubKey"},{"kind":"method","name":"getAdditionalFields","return":{"type":{"text":"Record<string, string>"}},"parameters":[{"name":"profile","type":{"text":"Profile"}}]},{"kind":"method","name":"renderAdditionalField","parameters":[{"name":"fieldId","type":{"text":"string"}},{"name":"fieldValue","type":{"text":"string"}}]},{"kind":"method","name":"renderProfile","parameters":[{"name":"profile","type":{"text":"Profile | undefined"}}]}],"attributes":[{"name":"agentPubKey","type":{"text":"AgentPubKey"},"description":"REQUIRED. Public key identifying the agent for which the profile should be shown","fieldName":"agentPubKey"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"profile-detail","customElement":true}],"exports":[{"kind":"js","name":"ProfileDetail","declaration":{"name":"ProfileDetail","module":"src/elements/profile-detail.ts"}}]},{"kind":"javascript-module","path":"src/elements/profile-prompt.ts","declarations":[{"kind":"class","description":"","name":"ProfilePrompt","slots":[{"description":"Will be displayed above the create-profile form when the user is prompted with it","name":"hero"}],"members":[{"kind":"method","name":"renderPrompt","parameters":[{"name":"myProfile","type":{"text":"Profile | undefined"}}]}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"profile-prompt","customElement":true}],"exports":[{"kind":"js","name":"ProfilePrompt","declaration":{"name":"ProfilePrompt","module":"src/elements/profile-prompt.ts"}}]},{"kind":"javascript-module","path":"src/elements/profiles-context.ts","declarations":[{"kind":"class","description":"","name":"ProfilesContext","members":[{"kind":"field","name":"store","type":{"text":"ProfilesStore"},"attribute":"store"}],"attributes":[{"name":"store","type":{"text":"ProfilesStore"},"fieldName":"store"}],"superclass":{"name":"LitElement","package":"lit"},"customElement":true}],"exports":[{"kind":"js","name":"ProfilesContext","declaration":{"name":"ProfilesContext","module":"src/elements/profiles-context.ts"}}]},{"kind":"javascript-module","path":"src/elements/search-agent.ts","declarations":[{"kind":"class","description":"","name":"SearchAgent","members":[{"kind":"field","name":"clearOnSelect","type":{"text":"boolean"},"default":"false","description":"Whether to clear the field when an agent is selected.","attribute":"clear-on-select"},{"kind":"field","name":"includeMyself","type":{"text":"boolean"},"default":"false","description":"Whether to include my own agent as a possible agent to select.","attribute":"include-myself"},{"kind":"field","name":"fieldLabel","type":{"text":"string"},"description":"Label for the agent searching field.","attribute":"field-label"},{"kind":"method","name":"onFilterChange"},{"kind":"method","name":"onUsernameSelected","parameters":[{"name":"[agentPubKey, profile]","type":{"text":"[AgentPubKey, Profile]"}}]},{"kind":"method","name":"renderAgentList"}],"events":[{"name":"agent-selected","type":{"text":"CustomEvent"},"description":"Fired when the user selects some agent. Detail will have this shape: { agentPubKey: HoloHash }"}],"attributes":[{"name":"clear-on-select","type":{"text":"boolean"},"default":"false","description":"Whether to clear the field when an agent is selected.","fieldName":"clearOnSelect","attribute":"clear-on-select"},{"name":"include-myself","type":{"text":"boolean"},"default":"false","description":"Whether to include my own agent as a possible agent to select.","fieldName":"includeMyself","attribute":"include-myself"},{"name":"field-label","type":{"text":"string"},"description":"Label for the agent searching field.","fieldName":"fieldLabel","attribute":"field-label"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"search-agent","customElement":true}],"exports":[{"kind":"js","name":"SearchAgent","declaration":{"name":"SearchAgent","module":"src/elements/search-agent.ts"}}]},{"kind":"javascript-module","path":"src/elements/update-profile.ts","declarations":[{"kind":"class","description":"","name":"UpdateProfile","members":[{"kind":"method","name":"updateProfile","parameters":[{"name":"profile","type":{"text":"Profile"}}]}],"events":[{"name":"profile-updated","type":{"text":"CustomEvent"},"description":"Fired after the profile has been created. Detail will have this shape: { profile: { nickname, fields } }"}],"mixins":[{"name":"ScopedElementsMixin","package":"@open-wc/scoped-elements"}],"superclass":{"name":"LitElement","package":"lit"},"tagName":"update-profile","customElement":true}],"exports":[{"kind":"js","name":"UpdateProfile","declaration":{"name":"UpdateProfile","module":"src/elements/update-profile.ts"}}]},{"kind":"javascript-module","path":"test/mocks/index.js","declarations":[{"kind":"function","name":"getAppWebsocket"}],"exports":[{"kind":"js","name":"getAppWebsocket","declaration":{"name":"getAppWebsocket","module":"test/mocks/index.js"}}]},{"kind":"javascript-module","path":"test/mocks/profiles.mock.js","declarations":[{"kind":"class","description":"","name":"ProfilesMock","members":[{"kind":"method","name":"create_profile","parameters":[{"name":"{ username }"},{"name":"provenance"}]},{"kind":"method","name":"search_profiles","parameters":[{"name":"{ username_prefix }"}]},{"kind":"method","name":"get_my_profile","parameters":[{"name":"_"},{"name":"provenance"}]},{"kind":"method","name":"get_agent_profile","parameters":[{"name":"{ agent_address }"}]},{"kind":"method","name":"findAgent","parameters":[{"name":"agent_address"}]},{"kind":"field","name":"agents","type":{"text":"array"},"default":"[]"}]}],"exports":[{"kind":"js","name":"ProfilesMock","declaration":{"name":"ProfilesMock","module":"test/mocks/profiles.mock.js"}}]},{"kind":"javascript-module","path":"src/elements/utils/image.ts","declarations":[{"kind":"function","name":"resizeAndExport","parameters":[{"name":"img","type":{"text":"HTMLImageElement"}}]}],"exports":[{"kind":"js","name":"resizeAndExport","declaration":{"name":"resizeAndExport","module":"src/elements/utils/image.ts"}}]},{"kind":"javascript-module","path":"src/elements/utils/shared-styles.ts","declarations":[{"kind":"variable","name":"sharedStyles","default":"css`\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n  }\\n  .column {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n  .small-margin {\\n    margin-top: 6px;\\n  }\\n  .big-margin {\\n    margin-top: 23px;\\n  }\\n\\n  .fill {\\n    flex: 1;\\n    height: 100%;\\n  }\\n\\n  .title {\\n    font-size: 20px;\\n  }\\n\\n  .center-content {\\n    align-items: center;\\n    justify-content: center;\\n  }\\n\\n  .placeholder {\\n    color: rgba(0, 0, 0, 0.7);\\n  }\\n\\n  .label {\\n    color: var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6));\\n    font-family: var(\\n      --mdc-typography-caption-font-family,\\n      var(--mdc-typography-font-family, Roboto, sans-serif)\\n    );\\n    font-size: var(--mdc-typography-caption-font-size, 0.79rem);\\n    font-weight: var(--mdc-typography-caption-font-weight, 400);\\n  }\\n\\n  .flex-scrollable-parent {\\n    position: relative;\\n    display: flex;\\n    flex: 1;\\n  }\\n\\n  .flex-scrollable-container {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n  }\\n\\n  .flex-scrollable-x {\\n    max-width: 100%;\\n    overflow-x: auto;\\n  }\\n  .flex-scrollable-y {\\n    max-height: 100%;\\n    overflow-y: auto;\\n  }\\n`"}],"exports":[{"kind":"js","name":"sharedStyles","declaration":{"name":"sharedStyles","module":"src/elements/utils/shared-styles.ts"}}]}]}');(0,dist.Bs)(custom_elements_namespaceObject);const parameters={controls:{}},__namedExportsOrder=["parameters"]},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,importers=[async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:stories(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(10);return __webpack_require__("./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const{SERVER_CHANNEL_URL}=dist.global,channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/web-components/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./.storybook/preview.js")])})},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./1.introduction.mdx":["./stories/1.introduction.mdx",48,666],"./backend-setup.mdx":["./stories/backend-setup.mdx",48,459],"./coordinator.mdx":["./stories/coordinator.mdx",48,662],"./frontend-setup.mdx":["./stories/frontend-setup.mdx",48,501],"./integrity.mdx":["./stories/integrity.mdx",48,932],"./template-setup.mdx":["./stories/template-setup.mdx",48,414]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackAsyncContext},"./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./agent-avatar.stories":["./stories/agent-avatar.stories.js",345,440,554],"./agent-avatar.stories.js":["./stories/agent-avatar.stories.js",345,440,554],"./create-profile.stories":["./stories/create-profile.stories.js",345,440,634],"./create-profile.stories.js":["./stories/create-profile.stories.js",345,440,634],"./list-profiles.stories":["./stories/list-profiles.stories.js",345,440,433],"./list-profiles.stories.js":["./stories/list-profiles.stories.js",345,440,433],"./my-profile.stories":["./stories/my-profile.stories.js",345,440,31],"./my-profile.stories.js":["./stories/my-profile.stories.js",345,440,31],"./profile-detail.stories":["./stories/profile-detail.stories.js",345,440,947],"./profile-detail.stories.js":["./stories/profile-detail.stories.js",345,440,947],"./profile-prompt.stories":["./stories/profile-prompt.stories.js",345,440,240],"./profile-prompt.stories.js":["./stories/profile-prompt.stories.js",345,440,240],"./search-agent.stories":["./stories/search-agent.stories.js",345,440,588],"./search-agent.stories.js":["./stories/search-agent.stories.js",345,440,588],"./update-profile.stories":["./stories/update-profile.stories.js",345,440,490],"./update-profile.stories.js":["./stories/update-profile.stories.js",345,440,490]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./stories lazy recursive ^\\.\\/.*$ include: (?:\\/stories(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[53],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);