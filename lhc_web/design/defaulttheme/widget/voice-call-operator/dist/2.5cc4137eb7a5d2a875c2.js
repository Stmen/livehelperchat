(window.webpackJsonpLHCVoiceCallAPP=window.webpackJsonpLHCVoiceCallAPP||[]).push([[2],{47:function(t,e,n){"use strict";n.r(e);var a=n(14),c=n.n(a),i=n(1),r=n.n(i),s=n(0),u=n.n(s),o=n(28),l=n.n(o),d=n(48);var f=function(t,e){var n=Object(s.useRef)();Object(s.useEffect)((function(){n.current=t}),[t]),Object(s.useEffect)((function(){if(null!==e){var t=setInterval((function(){n.current()}),e);return function(){return clearInterval(t)}}}),[e])};function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){switch(e.type){case"attr":return-1===(a=t.chats.findIndex((function(t){return t.id==e.id})))?t:(t.chats[a]=v({},t.chats[a],{},e.value),t=v({},t));case"attr_remove":return-1===(a=t.chats.findIndex((function(t){return t[e.attr]==e.id})))?t:(t.chats[a]=v({},t.chats[a],{},e.value),t=v({},t));case"update":return v({},t,{},e.value);case"add":return-1===(a=t.chats.findIndex((function(t){return t.id==e.value.id})))?t.chats.unshift(e.value):(t.chats[a].active=!0,t.chats[a].mn=0,t.chats[a].support_chat=!1),v({},t);case"remove":return-1===(a=t.chats.findIndex((function(t){return t.id==e.id})))?t:(t.chats.splice(a,1),v({},t));case"update_chat":return-1===(a=t.chats.findIndex((function(t){return t.id==e.id})))?t:(t.chats[a]=v({},t.chats[a],{},e.value),v({},t));case"msg_received":if(-1===(a=t.chats.findIndex((function(t){return t.id==e.id}))))return t;t.chats[a].msg=e.value.msg;var n=document.getElementById("chat-tab-link-"+e.id);return null!==n&&n.classList.contains("active")?t.chats[a].active=!0:t.chats[a].active=!1,t.chats[a].mn=0==t.chats[a].active?t.chats[a].mn?t.chats[a].mn+e.value.mn:e.value.mn:0,t.chats.splice(0,0,t.chats.splice(a,1)[0]),v({},t);case"refocus":var a;if(-1!==(a=t.chats.findIndex((function(t){return 1==t.active})))){if(e.id==t.chats[a].id)return t;t.chats[a].active=!1}return-1!==(a=t.chats.findIndex((function(t){return t.id==e.id})))&&(t.chats[a].active=!0,t.chats[a].mn=0,t.chats[a].support_chat=!1),v({},t);case"group_offline":return t.group_offline=e.value,v({},t);default:throw new Error("Unknown action!")}}e.default=function(t){var e=Object(s.useReducer)(m,{chats:[],call:{},inCall:!1}),n=c()(e,2),a=n[0],i=n[1],r=Object(s.useRef)(a);Object(s.useEffect)((function(){r.current=a}),[a]);Object(s.useEffect)((function(){return l.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+t.initParams.id+"/"+t.initParams.hash).then((function(t){i({type:"update",value:{call:t.data}})})),function(){}}),[]);var o=Object(d.a)("voice_call"),h=(o.t,o.i18n,function(){l.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+t.initParams.id+"/"+t.initParams.hash+"/(action)/cancel").then((function(t){i({type:"update",value:{call:t.data}})}))});f((function(){l.a.get(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+t.initParams.id+"/"+t.initParams.hash).then((function(t){i({type:"update",value:{call:t.data}})}))}),1==a.call.vi_status?2e3:null);var v=function(){l.a.post(WWW_DIR_JAVASCRIPT+"voicevideo/join/"+t.initParams.id+"/"+t.initParams.hash+"/(action)/request",{type:document.getElementById("inlineFormCheck1").checked?"audiovideo":"audio"}).then((function(t){i({type:"update",value:{call:t.data}})}))};return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"d-flex flex-row flex-grow-1 pt-2"},u.a.createElement("div",{className:"col bg-light mx-1 align-middle text-center d-flex"},u.a.createElement("div",{className:"align-self-center mx-auto "},"Waiting participats to join a call"))),u.a.createElement("div",{className:"row header-chat desktop-header"},u.a.createElement("div",{className:"p-2 text-center mx-auto"},1==a.call.vi_status&&u.a.createElement("button",{className:"btn btn-primary w-100",onClick:function(){return h()}},"Let visitor in"),2==a.call.vi_status&&u.a.createElement("button",{className:"btn btn-primary",onClick:function(){return h()}},"Visitor has joined a call"),1==a.call.op_status&&u.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return v()}},"Leave a call"),0==a.call.op_status&&u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return v()}},"Join with audio"),u.a.createElement("button",{className:"btn btn-secondary",onClick:function(){return v()}},"Join with audio & video")))))}}}]);
//# sourceMappingURL=2.5cc4137eb7a5d2a875c2.js.map