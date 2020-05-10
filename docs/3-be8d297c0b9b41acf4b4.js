(window.webpackJsonp=window.webpackJsonp||[]).push([[3,6,11,15,22,23],{19:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=o}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var o=[],n=(t.r-e.r)/r,a=(t.g-e.g)/r,c=(t.b-e.b)/r,i=(t.a-e.a)/r,l=0;l<r;l++)o.push(new RGBA(e.r+n*l,e.g+a*l,e.b+c*l,e.a+i*l));return o}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,o=e.g,n=e.b;return new RGBA(r+t.r,o+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var o=e.r,n=e.g,a=e.b,c=e.a;return new RGBA((t.r-o)*r+o,(t.g-n)*r+n,(t.b-a)*r+a,(t.a-c)*r+c)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(11)(module))},20:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(47),a=r.n(n),c=r(0),i=r.n(c),l=r(30),u=r.n(l),s=r(19);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],o=!0,n=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var v,y,h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=function(e,t,r){var o=t.pixX,n=t.pixY,a=t.pixR,c=t.pixWidth,i=t.start,l=t.end,u=a-c,s={x:o+Math.cos(i)*u,y:n+Math.sin(i)*u},f={x:o+Math.cos(i)*a,y:n+Math.sin(i)*a},d={x:o+Math.cos(l)*u,y:n+Math.sin(l)*u},p=r.toRGBAString();e.beginPath(),e.fillStyle=p,e.strokeStyle=p,e.moveTo(s.x,s.y),e.lineTo(f.x,f.y),e.arc(o,n,a,i,l),e.lineTo(d.x,d.y),e.arc(o,n,u,l,i,!0),e.closePath(),e.fill(),e.stroke()},x=function(e,t){for(var r=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],o=2*Math.PI/6,n=0;n<r.length-1;n++)for(var a=s.RGBA.Lerp(r[n],r[n+1],255),c=n*o,i=((n+1)*o-c)/a.length,l=0;l<a.length-1;l++)g(e,p({},t,{start:c+i*l,end:c+i*(l+1)}),a[l])},w=function(e,t,r){var o=t.pixX,n=t.pixY,a=t.pixR,c=t.pixWidth,i=Math.sin(.25*Math.PI)*(a-c),l=2*i;e.clearRect(o-i,n-i,l,l);var u=e.createLinearGradient(o-i,n+i,o-i,n-i);u.addColorStop(0,r),u.addColorStop(1,"white"),e.fillStyle=u,e.fillRect(o-i,n-i,l,l);var s=e.createLinearGradient(o-i,n-i,o+i,n-i);s.addColorStop(0,"black"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect(o-i,n-i,l,l)},G=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,c=Math.sin(.25*Math.PI)*(a-n),i=r-c,l=r+c,u=o-c,s=o+c;return e.x>i&&e.x<l&&e.y>u&&e.y<s},m=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,c=Math.pow(e.x-r,2)+Math.pow(e.y-o,2),i=Math.pow(a,2);return c>Math.pow(a-n,2)&&c<i?"circle":G(e,t)?"round":null},P=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r-.5*n,c=e.x-r,i=e.y-o,l=Math.sqrt(Math.pow(c,2)+Math.pow(i,2));return{x:r+c*a/l,y:o+i*a/l}},_=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,c=(Math.sin(.25*Math.PI),e.x-r),i=e.y-o;Math.sqrt(Math.pow(c,2)+Math.pow(i,2));if(G(e,t))return e},A=function(e,t){for(var r=t.x,o=t.y,n=e.x-r,a=o-e.y,c=Math.atan2(a,n),i=1-(c>=0?c:c+2*Math.PI)/(2*Math.PI),l=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],u=0;u<6;u++){var f=u*(1/6),d=(u+1)*(1/6);if(i>f&&i<d)return s.RGBA.getLerpColor(l[u],l[u+1],1-(d-i)/(1/6));if(i===f)return l[u];if(i===d)return l[u+1]}return s.RGBA.BLACK},B=function(e,t,r,o,n){var a=r-n,c=o-n,i=2*n,l=1-Math.max(Math.min((e.y-c)/i,1),0),u=Math.max(Math.min((e.x-a)/i,1),0);return s.RGBA.mix(s.RGBA.mix(t,s.RGBA.WHITE,l),s.RGBA.BLACK,1-u)},R=a()((function(e,t,r,o){var n=A(t,{x:o.x,y:o.y}),a=Math.cos(.25*Math.PI)*o.r-o.width;e&&e(B(r,n,o.x,o.y,a))}),200),M=function(e){var t=e.value,r=e.onChange,o=f(Object(c.useState)({x:0,y:0}),2),n=o[0],a=o[1],l=f(Object(c.useState)({x:0,y:0}),2),s=l[0],d=l[1],p=f(Object(c.useState)(null),2),b=p[0],v=p[1],y=f(Object(c.useState)(),2),h=y[0],g=y[1],G=f(Object(c.useState)(),2),B=G[0],M=G[1],L=Object(c.useRef)({isSelecting:!1}),S=Object(c.useRef)(null);Object(c.useEffect)((function(){console.log(t)}),[t]),Object(c.useEffect)((function(){if(S.current){var e=S.current.getContext("2d"),t=S.current.clientWidth*devicePixelRatio;if(S.current.width=t,S.current.height=t,e){M(e);var r=.5*S.current.clientWidth,o=.5*S.current.width,n={x:r,y:r,r:r-10,width:30,pixX:o,pixY:o,pixR:o-10*devicePixelRatio,pixWidth:30*devicePixelRatio};w(e,n,"rgb(255,0,0)"),x(e,n),g(n),a({x:r+n.r,y:r}),d({x:r,y:r})}}}),[S.current]);return Object(c.useMemo)((function(){return h&&R(r,n,s,h)}),[n,s]),i.a.createElement("div",{className:u.a.colorPannelWrap},i.a.createElement("canvas",{ref:S,className:u.a.colorPannel}),i.a.createElement("div",{className:u.a.circlePoint,style:{transform:"translate3d(".concat(n.x-5,"px, ").concat(n.y-5,"px, 0)")}}),i.a.createElement("div",{style:{transform:"translate3d(".concat(s.x-5,"px, ").concat(s.y-5,"px, 0)")},className:u.a.selectPoint}),i.a.createElement("div",{className:u.a.canvasCover,style:{height:"".concat(h&&2*h.x,"px")},onPointerDown:function(e){var t=e.nativeEvent,r=t.offsetX,o=t.offsetY;if(h){L.current.isSelecting=!0,v(m({x:r,y:o},h));var n=m({x:r,y:o},h);"circle"===n&&a(P({x:r,y:o},h)),"round"===n&&d({x:r,y:o})}},onPointerUp:function(){L.current.isSelecting=!1,v(null)},onPointerMove:function(e){var t=e.nativeEvent,r=t.offsetX,o=t.offsetY;if(L.current.isSelecting&&h&&b){if("circle"===b&&B){a(P({x:r,y:o},h));var n=A({x:r,y:o},{x:h.x,y:h.y});w(B,h,n.toRGBAString())}if("round"===b){var c=_({x:r,y:o},h);c&&d(c)}}}}))};h(M,"useState{[circlePoint, setCirclePoint]({x: 0, y:0})}\nuseState{[ selectPoint, setSelectPoint ]({x: 0, y:0})}\nuseState{[ pointType,  setPointType ](null)}\nuseState{[cirleInfo, setCircleInfo ]}\nuseState{[ctx, setCtx]}\nuseRef{operateInfo}\nuseRef{canvas}\nuseEffect{}\nuseEffect{}\nuseMemo{}"),t.default=M,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"drawCircleFragment","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(x,"drawCircle","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(w,"drawSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(G,"isInSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(m,"getPointType","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(P,"getCirclePosition","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(_,"getSelectPoint","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(A,"getStandardColor","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(B,"getSelectColor","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(R,"handleChange","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx"),v.register(M,"default","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\color-pannel.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(11)(e))},30:function(e,t,r){e.exports={colorBar:"colorBar_ca9ba",colorPannelWrap:"colorPannelWrap_958de",colorPannel:"colorPannel_5cd66",circlePoint:"circlePoint_73c37",selectPoint:"selectPoint_9bef5",canvasCover:"canvasCover_d4f17"}},34:function(e,t,r){e.exports={topToolBar:"topToolBar_7b6e5"}},38:function(e,t,r){var o=r(39),n="object"==typeof self&&self&&self.Object===Object&&self,a=o||n||Function("return this")();e.exports=a},39:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(40))},4:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),c=r(30),i=r.n(c),l=r(1),u=r(20),s=r(19);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],o=!0,n=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==i.return||i.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var d,p,b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=function(e){var t=e.value,r=e.onChange,o=e.defaultValue,c=f(Object(n.useState)(!1),2),d=c[0],p=c[1],b=f(Object(n.useState)(o||s.RGBA.BLACK),2),v=b[0],y=b[1];Object(n.useEffect)((function(){t&&y(t)}),[t]);var h=function(){p((function(e){return!e}))};return a.a.createElement(n.Fragment,null,a.a.createElement("div",{style:{backgroundColor:v.toRGBAString()},className:i.a.colorBar,onClick:h}),a.a.createElement(l.Drawer,{title:"colors",visible:d,onClose:h},a.a.createElement(u.default,{value:v,onChange:function(e){y(e),r&&r(e)}})))};b(v,"useState{[showColorPanel, setShowColorPannel](false)}\nuseState{[rgba, setRGBA](defaultValue|| RGBA.BLACK)}\nuseEffect{}"),t.default=v,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(v,"default","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\index.tsx"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}.call(this,r(11)(e))},40:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},47:function(e,t,r){var o=r(48),n=r(49),a=r(50),c=Math.max,i=Math.min;e.exports=function(e,t,r){var l,u,s,f,d,p,b=0,v=!1,y=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=l,o=u;return l=u=void 0,b=t,f=e.apply(o,r)}function x(e){return b=e,d=setTimeout(G,t),v?g(e):f}function w(e){var r=e-p;return void 0===p||r>=t||r<0||y&&e-b>=s}function G(){var e=n();if(w(e))return m(e);d=setTimeout(G,function(e){var r=t-(e-p);return y?i(r,s-(e-b)):r}(e))}function m(e){return d=void 0,h&&l?g(e):(l=u=void 0,f)}function P(){var e=n(),r=w(e);if(l=arguments,u=this,p=e,r){if(void 0===d)return x(p);if(y)return clearTimeout(d),d=setTimeout(G,t),g(p)}return void 0===d&&(d=setTimeout(G,t)),f}return t=a(t)||0,o(r)&&(v=!!r.leading,s=(y="maxWait"in r)?c(a(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),P.cancel=function(){void 0!==d&&clearTimeout(d),b=0,l=p=u=d=void 0},P.flush=function(){return void 0===d?f:m(n())},P}},48:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},49:function(e,t,r){var o=r(38);e.exports=function(){return o.Date.now()}},50:function(e,t){e.exports=function(e){return e}},8:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(0),a=r.n(n),c=r(4),i=r(34),l=r.n(i);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,s,f=function(e){var t=e.pCanvasController;return a.a.createElement("div",{className:l.a.topToolBar},a.a.createElement(c.default,{onChange:function(e){t&&t.setColor(e)}}))};t.default=f,(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&u.register(f,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\index.tsx"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}.call(this,r(11)(e))}}]);