"use strict";(self.webpackChunk_holochain_open_dev_profiles_dev=self.webpackChunk_holochain_open_dev_profiles_dev||[]).push([[947],{"./stories/profile-detail.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>profile_detail_stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),profile_detail=__webpack_require__("./ui/dist/elements/profile-detail.js");let PD=class PD extends profile_detail.w{};PD=(0,tslib_es6.gn)([(0,decorators.Mo)("profile-detail")],PD);__webpack_require__("./ui/dist/definitions/profiles-context.js");var mocks=__webpack_require__("./ui/dist/mocks.js"),dist=__webpack_require__("./ui/dist/index.js");const mock=new mocks.M,profile_detail_stories={title:"Frontend/Elements/profile-detail",tags:["autodocs"],component:"profile-detail",render:args=>lit_html.dy` <profiles-context
      .store=${new dist._p(new dist.Y3(mock))}
    >
      <profile-detail
        .agentPubKey=${Array.from(mock.agentsProfiles.keys())[0]}
      />
    </profiles-context>`},Demo={};Demo.parameters={...Demo.parameters,docs:{...Demo.parameters?.docs,source:{originalSource:"{}",...Demo.parameters?.docs?.source}}};const __namedExportsOrder=["Demo"]}}]);
//# sourceMappingURL=profile-detail-stories.6b33af1f.iframe.bundle.js.map