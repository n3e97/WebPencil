(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17,25],{20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=o}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var o=[],n=(t.r-e.r)/r,a=(t.g-e.g)/r,i=(t.b-e.b)/r,c=(t.a-e.a)/r,l=0;l<r;l++)o.push(new RGBA(e.r+n*l,e.g+a*l,e.b+i*l,e.a+c*l));return o}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,o=e.g,n=e.b;return new RGBA(r+t.r,o+t.g,n+t.b)}},{key:"mix",value:function(e,t,r){return new RGBA(e.r+(t.r-e.r)*r,e.g+(t.g-e.g)*r,e.b+(t.b-e.b)*r)}},{key:"getLerpColor",value:function(e,t,r){var o=e.r,n=e.g,a=e.b,i=e.a;return new RGBA((t.r-o)*r+o,(t.g-n)*r+n,(t.b-a)*r+a,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(12)(module))},22:function(e,t,r){"use strict";r.r(t),function(e){var o,n=r(53),a=r.n(n),i=r(0),c=r.n(i),l=r(31),u=r.n(l),s=r(20);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var r=[],o=!0,n=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(n)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);var v,y,h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},x=function(e,t,r){var o=t.pixX,n=t.pixY,a=t.pixR,i=t.pixWidth,c=t.start,l=t.end,u=a-i,s={x:o+Math.cos(c)*u,y:n+Math.sin(c)*u},f={x:o+Math.cos(c)*a,y:n+Math.sin(c)*a},p={x:o+Math.cos(l)*u,y:n+Math.sin(l)*u},d=r.toRGBAString();e.beginPath(),e.fillStyle=d,e.strokeStyle=d,e.moveTo(s.x,s.y),e.lineTo(f.x,f.y),e.arc(o,n,a,c,l),e.lineTo(p.x,p.y),e.arc(o,n,u,l,c,!0),e.closePath(),e.fill(),e.stroke()},g=function(e,t){for(var r=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],o=2*Math.PI/6,n=0;n<r.length-1;n++)for(var a=s.RGBA.Lerp(r[n],r[n+1],255),i=n*o,c=((n+1)*o-i)/a.length,l=0;l<a.length-1;l++)x(e,d({},t,{start:i+c*l,end:i+c*(l+1)}),a[l])},w=function(e,t,r){var o=t.pixX,n=t.pixY,a=t.pixR,i=t.pixWidth,c=Math.sin(.25*Math.PI)*(a-i),l=2*c;e.clearRect(o-c,n-c,l,l);var u=e.createLinearGradient(o-c,n+c,o-c,n-c);u.addColorStop(0,r),u.addColorStop(1,"white"),e.fillStyle=u,e.fillRect(o-c,n-c,l,l);var s=e.createLinearGradient(o-c,n-c,o+c,n-c);s.addColorStop(0,"black"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.fillRect(o-c,n-c,l,l)},m=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,i=Math.sin(.25*Math.PI)*(a-n),c=r-i,l=r+i,u=o-i,s=o+i;return e.x>c&&e.x<l&&e.y>u&&e.y<s},G=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,i=Math.pow(e.x-r,2)+Math.pow(e.y-o,2),c=Math.pow(a,2);return i>Math.pow(a-n,2)&&i<c?"circle":m(e,t)?"round":null},_=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r-.5*n,i=e.x-r,c=e.y-o,l=Math.sqrt(Math.pow(i,2)+Math.pow(c,2));return{x:r+i*a/l,y:o+c*a/l}},P=function(e,t){var r=t.x,o=t.y,n=t.width,a=t.r,i=(Math.sin(.25*Math.PI),e.x-r),c=e.y-o;Math.sqrt(Math.pow(i,2)+Math.pow(c,2));if(m(e,t))return e},R=function(e,t){for(var r=t.x,o=t.y,n=e.x-r,a=o-e.y,i=Math.atan2(a,n),c=1-(i>=0?i:i+2*Math.PI)/(2*Math.PI),l=[new s.RGBA(255,0,0),new s.RGBA(255,255,0),new s.RGBA(0,255,0),new s.RGBA(0,255,255),new s.RGBA(0,0,255),new s.RGBA(255,0,255),new s.RGBA(255,0,0)],u=0;u<6;u++){var f=u*(1/6),p=(u+1)*(1/6);if(c>f&&c<p)return s.RGBA.getLerpColor(l[u],l[u+1],1-(p-c)/(1/6));if(c===f)return l[u];if(c===p)return l[u+1]}return s.RGBA.BLACK},A=function(e,t,r,o,n){var a=r-n,i=o-n,c=2*n,l=1-Math.max(Math.min((e.y-i)/c,1),0),u=Math.max(Math.min((e.x-a)/c,1),0);return s.RGBA.mix(s.RGBA.mix(t,s.RGBA.WHITE,l),s.RGBA.BLACK,1-u)},B=a()((function(e,t,r,o){var n=R(t,{x:o.x,y:o.y}),a=Math.cos(.25*Math.PI)*o.r-o.width;e&&e(A(r,n,o.x,o.y,a))}),200),M=function(e){var t=e.value,r=e.onChange,o=f(Object(i.useState)({x:0,y:0}),2),n=o[0],a=o[1],l=f(Object(i.useState)({x:0,y:0}),2),s=l[0],p=l[1],d=f(Object(i.useState)(null),2),b=d[0],v=d[1],y=f(Object(i.useState)(),2),h=y[0],x=y[1],m=f(Object(i.useState)(),2),A=m[0],M=m[1],S=Object(i.useRef)({isSelecting:!1}),O=Object(i.useRef)(null);Object(i.useEffect)((function(){console.log(t)}),[t]),Object(i.useEffect)((function(){if(O.current){var e=O.current.getContext("2d"),t=O.current.clientWidth*devicePixelRatio;if(O.current.width=t,O.current.height=t,e){M(e);var r=.5*O.current.clientWidth,o=.5*O.current.width,n={x:r,y:r,r:r-10,width:30,pixX:o,pixY:o,pixR:o-10*devicePixelRatio,pixWidth:30*devicePixelRatio};w(e,n,"rgb(255,0,0)"),g(e,n),x(n),a({x:r+n.r,y:r}),p({x:r,y:r})}}}),[O.current]);return Object(i.useMemo)((function(){return h&&B(r,n,s,h)}),[n,s]),c.a.createElement("div",{className:u.a.colorPannelWrap},c.a.createElement("canvas",{ref:O,className:u.a.colorPannel}),c.a.createElement("div",{className:u.a.circlePoint,style:{transform:"translate3d(".concat(n.x-5,"px, ").concat(n.y-5,"px, 0)")}}),c.a.createElement("div",{style:{transform:"translate3d(".concat(s.x-5,"px, ").concat(s.y-5,"px, 0)")},className:u.a.selectPoint}),c.a.createElement("div",{className:u.a.canvasCover,style:{height:"".concat(h&&2*h.x,"px")},onPointerDown:function(e){var t=e.nativeEvent,r=t.offsetX,o=t.offsetY;if(h){S.current.isSelecting=!0,v(G({x:r,y:o},h));var n=G({x:r,y:o},h);"circle"===n&&a(_({x:r,y:o},h)),"round"===n&&p({x:r,y:o})}},onPointerUp:function(){S.current.isSelecting=!1,v(null)},onPointerMove:function(e){var t=e.nativeEvent,r=t.offsetX,o=t.offsetY;if(S.current.isSelecting&&h&&b){if("circle"===b&&A){a(_({x:r,y:o},h));var n=R({x:r,y:o},{x:h.x,y:h.y});w(A,h,n.toRGBAString())}if("round"===b){var i=P({x:r,y:o},h);i&&p(i)}}}}))};h(M,"useState{[circlePoint, setCirclePoint]({x: 0, y:0})}\nuseState{[ selectPoint, setSelectPoint ]({x: 0, y:0})}\nuseState{[ pointType,  setPointType ](null)}\nuseState{[cirleInfo, setCircleInfo ]}\nuseState{[ctx, setCtx]}\nuseRef{operateInfo}\nuseRef{canvas}\nuseEffect{}\nuseEffect{}\nuseMemo{}"),t.default=M,(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(x,"drawCircleFragment","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(g,"drawCircle","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(w,"drawSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(m,"isInSelectArea","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(G,"getPointType","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(_,"getCirclePosition","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(P,"getSelectPoint","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(R,"getStandardColor","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(A,"getSelectColor","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(B,"handleChange","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx"),v.register(M,"default","D:\\code\\WebPencil\\src\\pages\\paint\\top-tool-bar\\tool-item\\color-selector\\color-pannel.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}.call(this,r(12)(e))},31:function(e,t,r){e.exports={colorBar:"colorBar_22b99",colorPannelWrap:"colorPannelWrap_94f56",colorPannel:"colorPannel_02c11",circlePoint:"circlePoint_0a8ba",selectPoint:"selectPoint_5aa22",canvasCover:"canvasCover_4958d"}},40:function(e,t,r){var o=r(42),n="object"==typeof self&&self&&self.Object===Object&&self,a=o||n||Function("return this")();e.exports=a},42:function(e,t,r){(function(t){var r="object"==typeof t&&t&&t.Object===Object&&t;e.exports=r}).call(this,r(43))},43:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},53:function(e,t,r){var o=r(54),n=r(55),a=r(56),i=Math.max,c=Math.min;e.exports=function(e,t,r){var l,u,s,f,p,d,b=0,v=!1,y=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var r=l,o=u;return l=u=void 0,b=t,f=e.apply(o,r)}function g(e){return b=e,p=setTimeout(m,t),v?x(e):f}function w(e){var r=e-d;return void 0===d||r>=t||r<0||y&&e-b>=s}function m(){var e=n();if(w(e))return G(e);p=setTimeout(m,function(e){var r=t-(e-d);return y?c(r,s-(e-b)):r}(e))}function G(e){return p=void 0,h&&l?x(e):(l=u=void 0,f)}function _(){var e=n(),r=w(e);if(l=arguments,u=this,d=e,r){if(void 0===p)return g(d);if(y)return clearTimeout(p),p=setTimeout(m,t),x(d)}return void 0===p&&(p=setTimeout(m,t)),f}return t=a(t)||0,o(r)&&(v=!!r.leading,s=(y="maxWait"in r)?i(a(r.maxWait)||0,t):s,h="trailing"in r?!!r.trailing:h),_.cancel=function(){void 0!==p&&clearTimeout(p),b=0,l=d=u=p=void 0},_.flush=function(){return void 0===p?f:G(n())},_}},54:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},55:function(e,t,r){var o=r(40);e.exports=function(){return o.Date.now()}},56:function(e,t){e.exports=function(e){return e}}}]);