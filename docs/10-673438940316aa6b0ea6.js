(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{18:function(e,t,r){"use strict";r.r(t),function(e){r.d(t,"FileMenu",(function(){return m}));var n,o=r(0),a=r.n(o),i=r(1);function u(e,t,r,n,o,a,i){try{var u=e[a](i),l=u.value}catch(e){return void r(e)}u.done?t(l):Promise.resolve(l).then(n,o)}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);var c,s,d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},m=function(e){var t=e.className,r=void 0===t?"":t,n=e.isVisibale,o=e.onComplete,c=l(i.Form.useForm(),1)[0],s=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.validateFields();case 2:t=e.sent,o&&o(t);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){u(a,n,o,i,l,"next",e)}function l(e){u(a,n,o,i,l,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),d=function(e){return"".concat(e||0,"px")},m=function(e){return(e||"").replace("px","")};return a.a.createElement("div",null,a.a.createElement(i.Form,{form:c,initialValues:{width:2048,height:2048}},a.a.createElement(i.Modal,{visible:n,title:"创建",className:r,okButtonProps:{onClick:s}},a.a.createElement(i.Form.Item,{name:"width",label:"宽度",rules:[{required:!0,message:"请填写画布宽度"}]},a.a.createElement(i.InputNumber,{min:1,max:4096,precision:0,formatter:d,parser:m})),a.a.createElement(i.Form.Item,{name:"height",label:"高度",rules:[{required:!0,message:"请填写画布高度"}]},a.a.createElement(i.InputNumber,{min:1,max:4096,precision:0,formatter:d,parser:m})))))};d(m,"useForm{[form]}"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(m,"FileMenu","D:\\code\\WebPencil\\src\\pages\\home\\FileMenu.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(8)(e))}}]);