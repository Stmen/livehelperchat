(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a.n(n),i=a(1),r=a.n(i),l=a(0),s=a.n(l),o=a(28),u=a.n(o),d=a(48);var f=function(e,t){var a=Object(l.useRef)();Object(l.useEffect)((function(){a.current=e}),[e]),Object(l.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])};function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t){switch(t.type){case"attr":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=v({},e.chats[n],{},t.value),e=v({},e));case"attr_remove":return-1===(n=e.chats.findIndex((function(e){return e[t.attr]==t.id})))?e:(e.chats[n]=v({},e.chats[n],{},t.value),e=v({},e));case"update":return v({},e,{},t.value);case"add":return-1===(n=e.chats.findIndex((function(e){return e.id==t.value.id})))?e.chats.unshift(t.value):(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),v({},e);case"remove":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats.splice(n,1),v({},e));case"update_chat":return-1===(n=e.chats.findIndex((function(e){return e.id==t.id})))?e:(e.chats[n]=v({},e.chats[n],{},t.value),v({},e));case"msg_received":if(-1===(n=e.chats.findIndex((function(e){return e.id==t.id}))))return e;e.chats[n].msg=t.value.msg;var a=document.getElementById("chat-tab-link-"+t.id);return null!==a&&a.classList.contains("active")?e.chats[n].active=!0:e.chats[n].active=!1,e.chats[n].mn=0==e.chats[n].active?e.chats[n].mn?e.chats[n].mn+t.value.mn:t.value.mn:0,e.chats.splice(0,0,e.chats.splice(n,1)[0]),v({},e);case"refocus":var n;if(-1!==(n=e.chats.findIndex((function(e){return 1==e.active})))){if(t.id==e.chats[n].id)return e;e.chats[n].active=!1}return-1!==(n=e.chats.findIndex((function(e){return e.id==t.id})))&&(e.chats[n].active=!0,e.chats[n].mn=0,e.chats[n].support_chat=!1),v({},e);case"group_offline":return e.group_offline=t.value,v({},e);default:throw new Error("Unknown action!")}}t.default=function(e){var t=Object(l.useReducer)(h,{chats:[],call:{},inCall:!1}),a=c()(t,2),n=a[0],i=a[1],r=Object(l.useRef)(n);Object(l.useEffect)((function(){r.current=n}),[n]);Object(l.useEffect)((function(){return u.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){i({type:"update",value:{call:e.data}})})),function(){}}),[]);var o=Object(d.a)("voice_call"),m=(o.t,o.i18n,function(t){u.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/"+e.initParams.hash+"/(action)/"+t).then((function(e){i({type:"update",value:{call:e.data}})}))});f((function(){u.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id).then((function(e){i({type:"update",value:{call:e.data}})}))}),2!=n.call.status?2e3:null);var v=function(){u.a.post(WWW_DIR_JAVASCRIPT+"voicevideo/joinop/"+e.initParams.id+"/(action)/join").then((function(e){i({type:"update",value:{call:e.data}})}))};return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"d-flex flex-row flex-grow-1 pt-2"},s.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex"},s.a.createElement("div",{className:"align-self-center mx-auto font-weight-bold text-muted"},"Waiting for participats to join a call!"))),s.a.createElement("div",{className:"row header-chat desktop-header"},s.a.createElement("div",{className:"p-2 text-center mx-auto btn-group"},1==n.call.vi_status&&s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return m("letvisitorin")}},s.a.createElement("span",{className:"material-icons"},"face"),"Let visitor in"),2==n.call.vi_status&&s.a.createElement("span",null,"Visitor has joined a call"),1==n.call.op_status&&s.a.createElement("button",{title:"Leave a call. Visitor still remain on the call",className:"btn btn-sm btn-outline-secondary",onClick:function(){return m("leave")}},s.a.createElement("span",{className:"material-icons"},"call_end"),"Leave a call"),1==n.call.op_status&&s.a.createElement("button",{title:"Call for the visitor also will end.",className:"btn btn-sm btn-outline-secondary",onClick:function(){return m("end")}},s.a.createElement("span",{className:"material-icons"},"call_end"),"End a call"),0==n.call.op_status&&s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return v()}},s.a.createElement("span",{className:"material-icons"},"call"),"Join with audio"),s.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:function(){return v()}},s.a.createElement("span",{className:"material-icons"},"video_call"),"Join with audio & video")))))}}}]);
//# sourceMappingURL=2.fa40eaf59476e2a4779a.js.map