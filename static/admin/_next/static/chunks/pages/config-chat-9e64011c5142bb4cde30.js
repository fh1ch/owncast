(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{12028:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var a=t(87462),c=t(4942),r=t(67294),i=t(29439),l=t(44925),s=t(94184),o=t.n(s),d=t(21770),u=t(15105),f=r.forwardRef((function(e,n){var t,a=e.prefixCls,s=void 0===a?"rc-switch":a,f=e.className,h=e.checked,p=e.defaultChecked,m=e.disabled,v=e.loadingIcon,b=e.checkedChildren,g=e.unCheckedChildren,C=e.onClick,x=e.onChange,y=e.onKeyDown,N=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,d.Z)(!1,{value:h,defaultValue:p}),k=(0,i.Z)(j,2),O=k[0],w=k[1];function Z(e,n){var t=O;return m||(w(t=e),null===x||void 0===x||x(t,n)),t}var E=o()(s,f,(t={},(0,c.Z)(t,"".concat(s,"-checked"),O),(0,c.Z)(t,"".concat(s,"-disabled"),m),t));return r.createElement("button",Object.assign({},N,{type:"button",role:"switch","aria-checked":O,disabled:m,className:E,ref:n,onKeyDown:function(e){e.which===u.Z.LEFT?Z(!1,e):e.which===u.Z.RIGHT&&Z(!0,e),null===y||void 0===y||y(e)},onClick:function(e){var n=Z(!O,e);null===C||void 0===C||C(n,e)}}),v,r.createElement("span",{className:"".concat(s,"-inner")},O?b:g))}));f.displayName="Switch";var h=f,p=t(7085),m=t(97202),v=t(65632),b=t(97647),g=t(21687),C=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},x=r.forwardRef((function(e,n){var t,i=e.prefixCls,l=e.size,s=e.loading,d=e.className,u=void 0===d?"":d,f=e.disabled,x=C(e,["prefixCls","size","loading","className","disabled"]);(0,g.Z)("checked"in x||!("value"in x),"Switch","`value` is not a valid prop, do you mean `checked`?");var y=r.useContext(v.E_),N=y.getPrefixCls,j=y.direction,k=r.useContext(b.Z),O=N("switch",i),w=r.createElement("div",{className:"".concat(O,"-handle")},s&&r.createElement(p.Z,{className:"".concat(O,"-loading-icon")})),Z=o()((t={},(0,c.Z)(t,"".concat(O,"-small"),"small"===(l||k)),(0,c.Z)(t,"".concat(O,"-loading"),s),(0,c.Z)(t,"".concat(O,"-rtl"),"rtl"===j),t),u);return r.createElement(m.Z,{insertExtraNode:!0},r.createElement(h,(0,a.Z)({},x,{prefixCls:O,className:Z,disabled:f||s,ref:n,loadingIcon:w})))}));x.__ANT_SWITCH=!0,x.displayName="Switch";var y=x},60331:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var a=t(4942),c=t(87462),r=t(29439),i=t(67294),l=t(94184),s=t.n(l),o=t(98423),d=t(54549),u=t(65632),f=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},h=function(e){var n,t=e.prefixCls,r=e.className,l=e.checked,o=e.onChange,d=e.onClick,h=f(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,i.useContext(u.E_).getPrefixCls)("tag",t),m=s()(p,(n={},(0,a.Z)(n,"".concat(p,"-checkable"),!0),(0,a.Z)(n,"".concat(p,"-checkable-checked"),l),n),r);return i.createElement("span",(0,c.Z)({},h,{className:m,onClick:function(e){null===o||void 0===o||o(!l),null===d||void 0===d||d(e)}}))},p=t(98787),m=t(97202),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)n.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(t[a[c]]=e[a[c]])}return t},b=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(p.E.join("|"),")$")),C=function(e,n){var t,l=e.prefixCls,f=e.className,h=e.style,p=e.children,C=e.icon,x=e.color,y=e.onClose,N=e.closeIcon,j=e.closable,k=void 0!==j&&j,O=v(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=i.useContext(u.E_),Z=w.getPrefixCls,E=w.direction,P=i.useState(!0),S=(0,r.Z)(P,2),D=S[0],I=S[1];i.useEffect((function(){"visible"in O&&I(O.visible)}),[O.visible]);var _=function(){return!!x&&(b.test(x)||g.test(x))},T=(0,c.Z)({backgroundColor:x&&!_()?x:void 0},h),U=_(),F=Z("tag",l),R=s()(F,(t={},(0,a.Z)(t,"".concat(F,"-").concat(x),U),(0,a.Z)(t,"".concat(F,"-has-color"),x&&!U),(0,a.Z)(t,"".concat(F,"-hidden"),!D),(0,a.Z)(t,"".concat(F,"-rtl"),"rtl"===E),t),f),z=function(e){e.stopPropagation(),null===y||void 0===y||y(e),e.defaultPrevented||"visible"in O||I(!1)},L="onClick"in O||p&&"a"===p.type,M=(0,o.Z)(O,["visible"]),J=C||null,K=J?i.createElement(i.Fragment,null,J,i.createElement("span",null,p)):p,X=i.createElement("span",(0,c.Z)({},M,{ref:n,className:R,style:T}),K,k?N?i.createElement("span",{className:"".concat(F,"-close-icon"),onClick:z},N):i.createElement(d.Z,{className:"".concat(F,"-close-icon"),onClick:z}):null);return L?i.createElement(m.Z,null,X):X},x=i.forwardRef(C);x.displayName="Tag",x.CheckableTag=h;var y=x},80750:function(e,n,t){"use strict";t.d(n,{Q:function(){return o},Z:function(){return d}});var a=t(67294),c=t(4525),r=t(60331),i=t(60764),l=t(85893),s=c.Z.Title,o="#5a67d8";function d(e){var n=(0,a.useState)(""),t=n[0],c=n[1],d=e.title,u=e.description,f=e.placeholder,h=e.maxLength,p=e.values,m=e.handleDeleteIndex,v=e.handleCreateString,b=e.submitStatus;return(0,l.jsxs)("div",{className:"edit-string-array-container",children:[(0,l.jsx)(s,{level:3,className:"section-title",children:d}),(0,l.jsx)("p",{className:"description",children:u}),(0,l.jsx)("div",{className:"edit-current-strings",children:p.map((function(e,n){return(0,l.jsx)(r.Z,{closable:!0,onClose:function(){m(n)},color:o,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,l.jsx)("div",{className:"add-new-string-section",children:(0,l.jsx)(i.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;c(n)},onPressEnter:function(){var e=t.trim();v(e),c("")},maxLength:h,placeholder:f,status:b})})]})}d.defaultProps={maxLength:50,description:null,submitStatus:null}},10610:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(15861),c=t(87757),r=t.n(c),i=t(67294),l=t(12028),s=t(74071),o=t(91486),d=t(95828),u=t(60293),f=t(85893);function h(e){var n=(0,i.useState)(null),t=n[0],c=n[1],h=null,p=((0,i.useContext)(u.aC)||{}).setFieldInConfigState,m=e.apiPath,v=e.checked,b=e.reversed,g=void 0!==b&&b,C=e.configPath,x=void 0===C?"":C,y=e.disabled,N=void 0!==y&&y,j=e.fieldName,k=e.label,O=e.tip,w=e.useSubmit,Z=e.onChange,E=function(){c(null),clearTimeout(h),h=null},P=function(){var e=(0,a.Z)(r().mark((function e(n){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w){e.next=6;break}return c((0,s.kg)(s.Jk)),t=g?!n:n,e.next=5,(0,d.Si)({apiPath:m,data:{value:t},onSuccess:function(){p({fieldName:j,value:t,path:x}),c((0,s.kg)(s.zv))},onError:function(e){c((0,s.kg)(s.Un,"There was an error: ".concat(e)))}});case 5:h=setTimeout(E,d.sI);case 6:Z&&Z(n);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=null!==t&&t.type===s.Jk;return(0,f.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[k&&(0,f.jsx)("div",{className:"label-side",children:(0,f.jsx)("span",{className:"formfield-label",children:k})}),(0,f.jsxs)("div",{className:"input-side",children:[(0,f.jsxs)("div",{className:"input-group",children:[(0,f.jsx)(l.Z,{className:"switch field-".concat(j),loading:S,onChange:P,defaultChecked:v,checked:v,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:N}),(0,f.jsx)(o.Z,{status:t})]}),(0,f.jsx)("p",{className:"field-tip",children:O})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},36402:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var a=t(4942),c=t(4525),r=t(67294),i=t(60764),l=t(65517),s=t(10610),o=t(80750),d=t(74071),u=t(95828),f=t(60293),h=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(){var e=c.Z.Title,n=(0,r.useState)(null),t=n[0],p=n[1],v=(0,r.useState)(null),b=v[0],g=v[1],C=(0,r.useContext)(f.aC)||{},x=C.serverConfig,y=C.setFieldInConfigState,N=x.chatDisabled,j=x.forbiddenUsernames,k=x.instanceDetails.welcomeMessage,O=function(e){var n=e.fieldName,c=e.value;p(m(m({},t),{},(0,a.Z)({},n,c)))};function w(){g(null)}function Z(){(0,u.Si)({apiPath:u.CJ,data:{value:t.forbiddenUsernames},onSuccess:function(){y({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),g(d.zv),setTimeout(w,u.sI)},onError:function(e){g((0,d.kg)(d.Un,e)),setTimeout(w,u.sI)}})}return(0,r.useEffect)((function(){p({chatDisabled:N,forbiddenUsernames:j,welcomeMessage:k})}),[x]),t?(0,h.jsxs)("div",{className:"config-server-details-form",children:[(0,h.jsx)(e,{children:"Chat Settings"}),(0,h.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,h.jsx)(s.Z,m(m({fieldName:"chatDisabled"},u.yj),{},{checked:!t.chatDisabled,reversed:!0,onChange:function(e){O({fieldName:"chatDisabled",value:!e})}})),(0,h.jsx)(l.ZP,m(m({fieldName:"welcomeMessage"},u.IX),{},{type:i.Sk,value:t.welcomeMessage,initialValue:k,onChange:O})),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)(o.Z,{title:u.Dg.label,placeholder:u.Dg.placeholder,description:u.Dg.tip,values:t.forbiddenUsernames,handleDeleteIndex:function(e){t.forbiddenUsernames.splice(e,1),Z()},handleCreateString:function(e){t.forbiddenUsernames.push(e),O({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),Z()},submitStatus:(0,d.kg)(b)})]})]}):null}},44716:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-chat",function(){return t(36402)}])}},function(e){e.O(0,[774,888,179],(function(){return n=44716,e(e.s=n);var n}));var n=e.O();_N_E=n}]);