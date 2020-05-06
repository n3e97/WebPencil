(window.webpackJsonp=window.webpackJsonp||[]).push([[0,8,14],{18:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"RGBA",(function(){return RGBA})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},RGBA=function(){function RGBA(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;_classCallCheck(this,RGBA),this.r=e,this.g=t,this.b=r,this.a=n}return _createClass(RGBA,null,[{key:"Lerp",value:function(e,t,r){for(var n=[],o=(t.r-e.r)/r,a=(t.g-e.g)/r,i=(t.b-e.b)/r,l=(t.a-e.a)/r,s=0;s<r;s++)n.push(new RGBA(e.r+o*s,e.g+a*s,e.b+i*s,e.a+l*s));return n}},{key:"mutipy",value:function(e,t){return new RGBA(e.r*t,e.g*t,e.b*t)}},{key:"add",value:function(e,t){var r=e.r,n=e.g,o=e.b;return new RGBA(r+t.r,n+t.g,o+t.b)}},{key:"getLerpColor",value:function(e,t,r){var n=e.r,o=e.g,a=e.b,i=e.a;return new RGBA((t.r-n)*r+n,(t.g-o)*r+o,(t.b-a)*r+a,(t.a-i)*r+i)}}]),_createClass(RGBA,[{key:"toRGBAString",value:function(){return"rgba(".concat(this.r,",").concat(this.g,",").concat(this.b,",").concat(this.a,")")}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),RGBA}(),reactHotLoader,leaveModule;RGBA.BLACK=new RGBA(0,0,0),RGBA.WHITE=new RGBA(255,255,255),reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(RGBA,"RGBA","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\color-selector\\rgba.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(10)(module))},20:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"PCanvasController",(function(){return PCanvasController}));var _decorators_emiterble__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66),_tool_item_brush__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_pcanvas_layer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(22),_dec,_class,_temp,enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _applyDecoratedDescriptor(e,t,r,n,o){var a={};return Object.keys(n).forEach((function(e){a[e]=n[e]})),a.enumerable=!!a.enumerable,a.configurable=!!a.configurable,("value"in a||a.initializer)&&(a.writable=!0),a=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),a),o&&void 0!==a.initializer&&(a.value=a.initializer?a.initializer.call(o):void 0,a.initializer=void 0),void 0===a.initializer&&(Object.defineProperty(e,t,a),a=null),a}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},pointEvent2BrunshStatus=function(e){var t=e.x,r=e.y,n=e.tiltX,o=e.tiltY,a=e.pressure;return console.log("event2BrunshStatus:",t,r,n,o,a),new _tool_item_brush__WEBPACK_IMPORTED_MODULE_1__.BrushStatus(t,r,n,o,a)},PCanvasControllerOrg=(_dec=Object(_decorators_emiterble__WEBPACK_IMPORTED_MODULE_0__.a)("colorchange"),_temp=function(){function PCanvasControllerOrg(){_classCallCheck(this,PCanvasControllerOrg),this.context=void 0,this.layerManager=void 0}return _createClass(PCanvasControllerOrg,[{key:"setColor",value:function(e){}},{key:"init",value:function(e,t){this.layerManager=new _pcanvas_layer__WEBPACK_IMPORTED_MODULE_2__.PcanvasLayers(e,t.contens.layers)}},{key:"setBrush",value:function(e){this.context.brush=e}},{key:"onPointerDown",value:function(e){this.context.brush.onStart(pointEvent2BrunshStatus(e),this.context)}},{key:"onPointerMove",value:function(e){var t;t="getCoalescedEvents"in e?e.getCoalescedEvents():[e],this.context.brush.onDraw(t.map((function(e){return pointEvent2BrunshStatus(e)})),this.context)}},{key:"onPointerUp",value:function(e){this.context.brush.onEnd(pointEvent2BrunshStatus(e),this.context)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PCanvasControllerOrg}(),_class=_temp,_applyDecoratedDescriptor(_class.prototype,"setColor",[_dec],Object.getOwnPropertyDescriptor(_class.prototype,"setColor"),_class.prototype),_class),PCanvasController=Object(_decorators_emiterble__WEBPACK_IMPORTED_MODULE_0__.b)()(PCanvasControllerOrg),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(pointEvent2BrunshStatus,"pointEvent2BrunshStatus","D:\\code\\WebPencil\\src\\pages\\paint\\p-canvas\\pcnvas.controller.ts"),reactHotLoader.register(PCanvasControllerOrg,"PCanvasControllerOrg","D:\\code\\WebPencil\\src\\pages\\paint\\p-canvas\\pcnvas.controller.ts"),reactHotLoader.register(PCanvasController,"PCanvasController","D:\\code\\WebPencil\\src\\pages\\paint\\p-canvas\\pcnvas.controller.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(10)(module))},22:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__.d(__webpack_exports__,"PcanvasLayers",(function(){return PcanvasLayers}));var _workStorage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(49),enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},PcanvasLayers=function(){function PcanvasLayers(e,t){_classCallCheck(this,PcanvasLayers),this.wrap=e,this.layers=t,this.tempcover=void 0;for(var r=t.length-1;r>=0;r--){var n=this.layers[r],o=n.canvas,a=n.layerId,i=n.type,l=n.visible;o.setAttribute("layerid",a),e.insertBefore(o,null),l||(o.className="unvisible"),i===_workStorage__WEBPACK_IMPORTED_MODULE_0__.a.TEMP_COVER&&(this.tempcover=o)}}return _createClass(PcanvasLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),PcanvasLayers}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&reactHotLoader.register(PcanvasLayers,"PcanvasLayers","D:\\code\\WebPencil\\src\\pages\\paint\\p-canvas\\pcanvas.layer.ts"),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(10)(module))},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}__webpack_require__.d(__webpack_exports__,"BrushStatus",(function(){return BrushStatus})),__webpack_require__.d(__webpack_exports__,"BrushType",(function(){return BrushType})),__webpack_require__.d(__webpack_exports__,"Brush",(function(){return Brush})),enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},BrushStatus=function(){function BrushStatus(e,t,r,n,o){_classCallCheck(this,BrushStatus),this.x=e,this.y=t,this.pressuer=r,this.tiltX=n,this.tiltY=o}return _createClass(BrushStatus,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),BrushStatus}(),BrushType;!function(e){e[e.pen=1]="pen",e[e.selector=2]="selector"}(BrushType||(BrushType={}));var Brush=function(){function Brush(){_classCallCheck(this,Brush),this.type=BrushType.pen,this.name="default"}return _createClass(Brush,[{key:"onStart",value:function(e,t){}},{key:"onDraw",value:function(e,t){}},{key:"onEnd",value:function(e,t){}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Brush}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(BrushStatus,"BrushStatus","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\brush\\index.tsx"),reactHotLoader.register(Brush,"Brush","D:\\code\\WebPencil\\src\\pages\\paint\\tool-item\\brush\\index.tsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}.call(this,__webpack_require__(10)(module))},49:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"c",(function(){return WorkInfo})),__webpack_require__.d(__webpack_exports__,"b",(function(){return WorkDetail})),__webpack_require__.d(__webpack_exports__,"a",(function(){return LayerDetailType})),__webpack_require__.d(__webpack_exports__,"d",(function(){return WorkStorage}));var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),_pages_paint_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),_canvas_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(51),enterModule;function asyncGeneratorStep(e,t,r,n,o,a,i){try{var l=e[a](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,n,o,i,l,"next",e)}function l(e){asyncGeneratorStep(a,n,o,i,l,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},WorkInfo=function(){function WorkInfo(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Date.now(),a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Date.now(),i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("work_".concat(Date.now(),"_"));_classCallCheck(this,WorkInfo),this.width=e,this.height=t,this.name=r,this.thumbnail=n,this.createTime=o,this.updateTime=a,this.workId=i}return _createClass(WorkInfo,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),WorkInfo}(),WorkDetail=function(){function WorkDetail(e,t){_classCallCheck(this,WorkDetail),this.workInfo=e,this.contens=t}return _createClass(WorkDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"createEmpty",value:function(e,t,r){var n=new WorkInfo(e,t,"new work",Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(e,t,r)),o=new WorkLayers;return WorkLayers.addLayer(o,n,LayerDetail.create(n,_pages_paint_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE)),WorkLayers.addLayer(o,n,LayerDetail.create(n,void 0,LayerDetailType.TEMP_COVER)),new WorkDetail(n,o)}}]),WorkDetail}(),LayerDetailType;!function(e){e[e.TEMP_COVER=1]="TEMP_COVER",e[e.NORMAL=2]="NORMAL"}(LayerDetailType||(LayerDetailType={}));var LayerDetail=function(){function LayerDetail(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:LayerDetailType.NORMAL,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("layer-".concat(Date.now(),"-"));_classCallCheck(this,LayerDetail),this.canvas=e,this.type=t,this.visible=r,this.layerId=n}return _createClass(LayerDetail,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"create",value:function(e,t,r){var n=e.width,o=e.height;return new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(n,o,t),r)}}]),LayerDetail}(),WorkLayers=function(){function WorkLayers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()("worklayer-".concat(Date.now(),"-"));_classCallCheck(this,WorkLayers),this.workLayersId=e,this.layers=[]}return _createClass(WorkLayers,[{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}],[{key:"addLayer",value:function(e,t,r){var n=t.width,o=t.height;r||(r=new LayerDetail(Object(_canvas_util__WEBPACK_IMPORTED_MODULE_2__.a)(n,o))),e.layers.unshift(r)}}]),WorkLayers}(),WorkStorage=function(){function e(){_classCallCheck(this,e)}var t,r,n,o,a,i;return _createClass(e,null,[{key:"addWork",value:(i=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return i.apply(this,arguments)})},{key:"removeWork",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)})},{key:"updateWorkInfo",value:(o=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e){return o.apply(this,arguments)})},{key:"batchUpdateLayerDetail",value:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)})},{key:"getWorkDetail",value:(r=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",WorkDetail.createEmpty(2048,2048,_pages_paint_tool_item_color_selector_rgba__WEBPACK_IMPORTED_MODULE_1__.RGBA.WHITE));case 1:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})},{key:"getWorkList",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",[]);case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),e}(),reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(WorkInfo,"WorkInfo","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(WorkDetail,"WorkDetail","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(LayerDetail,"LayerDetail","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(WorkLayers,"WorkLayers","D:\\code\\WebPencil\\src\\workStorage\\index.ts"),reactHotLoader.register(WorkStorage,"WorkStorage","D:\\code\\WebPencil\\src\\workStorage\\index.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(10)(module))},51:function(e,t,r){"use strict";(function(e){var n;r.d(t,"a",(function(){return i})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,a,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n=document.createElement("canvas");if(n.width=e,n.height=t,r){var o=n.getContext("2d");o&&(o.fillStyle=r.toRGBAString(),o.fillRect(0,0,e,t))}return n};(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(i,"createCanvas","D:\\code\\WebPencil\\src\\workStorage\\canvas.util.ts"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,r(10)(e))},66:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"b",(function(){return emitterble})),__webpack_require__.d(__webpack_exports__,"a",(function(){return emitAfter}));var events__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),events__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__),enterModule;function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},emitterble=function emitterble(){return function(constructor){var _temp;return _temp=function(_constructor){function Emitterble(){var e,t;_classCallCheck(this,Emitterble);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=_possibleConstructorReturn(this,(e=_getPrototypeOf(Emitterble)).call.apply(e,[this].concat(n)))).eventEmitterDec=new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter,t}return _inherits(Emitterble,_constructor),_createClass(Emitterble,[{key:"addListener",value:function(e,t){return this.eventEmitterDec.addListener(e,t)}},{key:"removeListener",value:function(e,t){return this.eventEmitterDec.removeListener(e,t)}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Emitterble}(constructor),_temp}},emitAfter=function(e){return function(t,r,n){var o=t[r];if("function"!=typeof o)throw"the property [".concat(r,"] should be function!");n.value=function(){var t,r=this.eventEmitterDec;if(!r)throw"".concat(this," should be decorate by  emitterble!");for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var l=(t=o).call.apply(t,[this].concat(a));try{r.emit.apply(r,[e].concat(a))}catch(e){console.error(e)}return l}}},reactHotLoader,leaveModule;reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(emitterble,"emitterble","D:\\code\\WebPencil\\src\\decorators\\emiterble.ts"),reactHotLoader.register(emitAfter,"emitAfter","D:\\code\\WebPencil\\src\\decorators\\emiterble.ts")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(10)(module))},67:function(e,t,r){"use strict";var n,o="object"==typeof Reflect?Reflect:null,a=o&&"function"==typeof o.apply?o.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function l(){l.init.call(this)}e.exports=l,l.EventEmitter=l,l.prototype._events=void 0,l.prototype._eventsCount=0,l.prototype._maxListeners=void 0;var s=10;function _(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?l.defaultMaxListeners:e._maxListeners}function u(e,t,r,n){var o,a,i,l;if(_(r),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,r.listener?r.listener:r),a=e._events),i=a[t]),void 0===i)i=a[t]=r,++e._eventsCount;else if("function"==typeof i?i=a[t]=n?[r,i]:[i,r]:n?i.unshift(r):i.push(r),(o=c(e))>0&&i.length>o&&!i.warned){i.warned=!0;var s=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=e,s.type=t,s.count=i.length,l=s,console&&console.warn&&console.warn(l)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r},o=d.bind(n);return o.listener=r,n.wrapFn=o,o}function p(e,t,r){var n=e._events;if(void 0===n)return[];var o=n[t];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(e){for(var t=new Array(e.length),r=0;r<t.length;++r)t[r]=e[r].listener||e[r];return t}(o):y(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var r=t[e];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(e,t){for(var r=new Array(t),n=0;n<t;++n)r[n]=e[n];return r}Object.defineProperty(l,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),l.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},l.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},l.prototype.getMaxListeners=function(){return c(this)},l.prototype.emit=function(e){for(var t=[],r=1;r<arguments.length;r++)t.push(arguments[r]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var l=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw l.context=i,l}var s=o[e];if(void 0===s)return!1;if("function"==typeof s)a(s,this,t);else{var _=s.length,c=y(s,_);for(r=0;r<_;++r)a(c[r],this,t)}return!0},l.prototype.addListener=function(e,t){return u(this,e,t,!1)},l.prototype.on=l.prototype.addListener,l.prototype.prependListener=function(e,t){return u(this,e,t,!0)},l.prototype.once=function(e,t){return _(t),this.on(e,f(this,e,t)),this},l.prototype.prependOnceListener=function(e,t){return _(t),this.prependListener(e,f(this,e,t)),this},l.prototype.removeListener=function(e,t){var r,n,o,a,i;if(_(t),void 0===(n=this._events))return this;if(void 0===(r=n[e]))return this;if(r===t||r.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,r.listener||t));else if("function"!=typeof r){for(o=-1,a=r.length-1;a>=0;a--)if(r[a]===t||r[a].listener===t){i=r[a].listener,o=a;break}if(o<0)return this;0===o?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(r,o),1===r.length&&(n[e]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",e,i||t)}return this},l.prototype.off=l.prototype.removeListener,l.prototype.removeAllListeners=function(e){var t,r,n;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e]),this;if(0===arguments.length){var o,a=Object.keys(r);for(n=0;n<a.length;++n)"removeListener"!==(o=a[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=r[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},l.prototype.listeners=function(e){return p(this,e,!0)},l.prototype.rawListeners=function(e){return p(this,e,!1)},l.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},l.prototype.listenerCount=v,l.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}}}]);