(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{16:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,r,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=r,this.b=t,this.a=a}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,r,t){for(var a=[],o=(r.r-e.r)/t,n=(r.g-e.g)/t,l=(r.b-e.b)/t,c=(r.a-e.a)/t,u=0;u<t;u++)a.push(new RGBA(e.r+o*u,e.g+n*u,e.b+l*u,e.a+c*u));return a}},{key:"mutipy",value:function(e,r){return new RGBA(e.r*r,e.g*r,e.b*r)}},{key:"add",value:function(e,r){var t=e.r,a=e.g,o=e.b;return new RGBA(t+r.r,a+r.g,o+r.b)}},{key:"getLerpColor",value:function(e,r,t){var a=e.r,o=e.g,n=e.b,l=e.a;return new RGBA((r.r-a)*t+a,(r.g-o)*t+o,(r.b-n)*t+n,(r.a-l)*t+l)}}]),_createClass(RGBA,[{key:"toColorString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.black=new RGBA(255,255,255),RGBA.white=new RGBA(0,0,0),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(8)(module))}}]);