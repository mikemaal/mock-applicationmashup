!function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),SimpleCallback=exports.SimpleCallback=function(){function SimpleCallback(){_classCallCheck(this,SimpleCallback),this.calls=[]}return _createClass(SimpleCallback,[{key:"setSpies",value:function(){window.spyOn(this,"registerCallback").and.callThrough()}},{key:"reset",value:function(){this.registerCallback.calls.reset()}},{key:"resetData",value:function(){this.calls=[]}},{key:"registerCallback",value:function(f){this.calls=[].concat(_toConsumableArray(this.calls),[f])}},{key:"simulate",value:function(){for(var _len=arguments.length,args=Array(_len),_key=0;_len>_key;_key++)args[_key]=arguments[_key];this.calls.forEach(function(f){return f.apply(void 0,args)})}}]),SimpleCallback}();exports.MultipleCallback=function(){function MultipleCallback(){_classCallCheck(this,MultipleCallback),this.calls={}}return _createClass(MultipleCallback,[{key:"setSpies",value:function(){window.spyOn(this,"registerCallback").and.callThrough()}},{key:"registerCallback",value:function(name,f){void 0!==f&&f instanceof Function&&(void 0===this.calls[name]&&(this.calls[name]=new SimpleCallback),this.calls[name].registerCallback(f))}},{key:"simulate",value:function(name){if(void 0!==this.calls[name]){for(var _calls$name,_len2=arguments.length,args=Array(_len2>1?_len2-1:0),_key2=1;_len2>_key2;_key2++)args[_key2-1]=arguments[_key2];(_calls$name=this.calls[name]).simulate.apply(_calls$name,args)}}}]),MultipleCallback}()},{}],2:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Callback=require("./Callback"),spyOn=window.spyOn,Context=function(_SimpleCallback){function Context(){var context=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,Context);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Context).call(this));return _this._defaultcontext=context,_this.context={},_this.setSpies(),_this}return _inherits(Context,_SimpleCallback),_createClass(Context,[{key:"setSpies",value:function(){spyOn(this,"get").and.callThrough(),spyOn(this,"getAvailableContext").and.callThrough(),spyOn(this,"registerCallback").and.callThrough()}},{key:"reset",value:function(){this.get.calls.reset(),this.getAvailableContext.calls.reset(),this.registerCallback.calls.reset()}},{key:"resetData",value:function(){this.context=this._defaultcontext||{}}},{key:"get",value:function(name){return this.context[name]}},{key:"getAvailableContext",value:function(){return this.context}},{key:"setContext",value:function(context){this.context=context}},{key:"setDefaultContext",value:function(context){this._defaultcontext=context,this.context=context}}]),Context}(_Callback.SimpleCallback);exports["default"]=Context},{"./Callback":1}],3:[function(require,module,exports){"use strict";function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Callback=require("./Callback"),spyOn=window.spyOn,Endpoint=function(_SimpleCallback){function Endpoint(){_classCallCheck(this,Endpoint);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Endpoint).call(this));return _this.setSpies(),_this.resetData(),_this}return _inherits(Endpoint,_SimpleCallback),_createClass(Endpoint,[{key:"setSpies",value:function(){spyOn(this,"connect").and.callThrough(),spyOn(this,"disconnect").and.callThrough(),spyOn(this,"pushEvent").and.callThrough()}},{key:"reset",value:function(){this.connect.calls.reset(),this.disconnect.calls.reset(),this.pushEvent.calls.reset()}},{key:"resetData",value:function(){this._connections=[]}},{key:"connect",value:function(endp){this._connections=[].concat(_toConsumableArray(this._connections),[endp])}},{key:"disconnect",value:function(endp){void 0===endp?this._connections=[]:this._connections=this._connections.filter(function(x){return x!==endp})}},{key:"pushEvent",value:function(data){this._connections.forEach(function(x){return x.simulate(data)})}},{key:"connected",get:function(){return this._connections.length>0}}]),Endpoint}(_Callback.SimpleCallback);exports["default"]=Endpoint},{"./Callback":1}],4:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),spyOn=window.spyOn,Http=function(){function Http(){_classCallCheck(this,Http),this.resetData(),this.setSpies()}return _createClass(Http,[{key:"setSpies",value:function(){spyOn(this,"buildProxyURL").and.callThrough(),spyOn(this,"makeRequest").and.callThrough()}},{key:"reset",value:function(){this.buildProxyURL.calls.reset(),this.makeRequest.calls.reset()}},{key:"resetData",value:function(){this.answers={get:{},post:{},put:{},"delete":{}}}},{key:"addAnswer",value:function(method,url,code){var body=arguments.length<=3||void 0===arguments[3]?"":arguments[3],fnBody=arguments.length<=4||void 0===arguments[4]?function(){return""}:arguments[4];this.answers[method.toLowerCase()]&&(this.answers[method.toLowerCase()][url]={code:code,body:body,fnBody:fnBody})}},{key:"buildProxyURL",value:function(url){return url}},{key:"makeRequest",value:function(url){var options=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],method=(options.method||"POST").toLowerCase();if(this.answers[method]&&this.answers[method][url]){var _answers$method$url=this.answers[method][url],code=_answers$method$url.code,body=_answers$method$url.body,fnBody=_answers$method$url.fnBody,response=fnBody(options.postBody||"")||body;200===code&&options.onSuccess?options.onSuccess(response):200!==code&&options.onFailure&&options.onFailure(response)}else options.onFailure&&options.onFailure("Not given an answer to "+method+":"+url);options.onComplete&&options.onComplete()}}]),Http}();exports["default"]=Http},{}],5:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Context=require("./Context"),_Context2=_interopRequireDefault(_Context),_Operator=require("./Operator"),_Operator2=_interopRequireDefault(_Operator),_Widget=require("./Widget"),_Widget2=_interopRequireDefault(_Widget),spyOn=window.spyOn,Mashup=function(){function Mashup(){_classCallCheck(this,Mashup),this.context=new _Context2["default"],this.setSpies()}return _createClass(Mashup,[{key:"setSpies",value:function(){spyOn(this,"addWidget").and.callThrough(),spyOn(this,"addOperator").and.callThrough(),spyOn(this,"createWorkspace").and.callThrough()}},{key:"reset",value:function(){this.addWidget.calls.reset(),this.addOperator.calls.reset(),this.createWorkspace.calls.reset(),this.context.reset()}},{key:"resetData",value:function(){this.context.resetData()}},{key:"addWidget",value:function(ref){var options=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new _Widget2["default"](options,this.addWidget.configure)}},{key:"addOperator",value:function(ref){var options=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new _Operator2["default"](options,this.addOperator.configure)}},{key:"createWorkspace",value:function(){}}]),Mashup}();exports["default"]=Mashup},{"./Context":2,"./Operator":7,"./Widget":9}],6:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Context=require("./Context"),_Context2=_interopRequireDefault(_Context),_Mashup=require("./Mashup"),_Mashup2=_interopRequireDefault(_Mashup),_Preferences=require("./Preferences"),_Preferences2=_interopRequireDefault(_Preferences),_Operator=require("./Operator"),_Operator2=_interopRequireDefault(_Operator),_Wiring=require("./Wiring"),_Wiring2=_interopRequireDefault(_Wiring),_Http=require("./Http"),_Http2=_interopRequireDefault(_Http),_Widget=require("./Widget"),_Widget2=_interopRequireDefault(_Widget),MockMP=function(){function MockMP(){var options=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,MockMP),this.http=new _Http2["default"],this.prefs=new _Preferences2["default"],this.mashup=new _Mashup2["default"],this.wiring=new _Wiring2["default"],this.context=new _Context2["default"],this.log={ERROR:0,WARN:1,INFO:2};var obj=void 0;"type"in options&&"operator"===options.type?(this.operator=new _Operator2["default"],this.__allReseteable=[this.operator],obj=this.operator):(this.widget=new _Widget2["default"],this.__allReseteable=[this.widget],obj=this.widget),"inputs"in options&&(this.wiring.setDefaultInputEndpoints(options.inputs),obj.setDefaultInputEndpoints(options.inputs)),"outputs"in options&&(this.wiring.setDefaultOutputEndpoints(options.outputs),obj.setDefaultOutputEndpoints(options.outputs)),"prefs"in options&&this.prefs.setDefaultPreferences(options.prefs),"context"in options&&this.context.setDefaultContext(options.context),this.__allReseteable=[].concat(_toConsumableArray(this.__allReseteable),[this.http,this.prefs,this.mashup,this.wiring,this.context])}return _createClass(MockMP,[{key:"reset",value:function(){this.__allReseteable.forEach(function(x){return x.reset()})}},{key:"resetData",value:function(){this.__allReseteable.forEach(function(x){return x.resetData()})}},{key:"resetAll",value:function(){this.__allReseteable.forEach(function(x){x.reset(),x.resetData()})}}]),MockMP}();exports["default"]=MockMP,window.MockMP=MockMP},{"./Context":2,"./Http":4,"./Mashup":5,"./Operator":7,"./Preferences":8,"./Widget":9,"./Wiring":10}],7:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Context=require("./Context"),_Context2=_interopRequireDefault(_Context),_Endpoint=require("./Endpoint"),_Endpoint2=_interopRequireDefault(_Endpoint),spyOn=window.spyOn,Operator=function(){function Operator(){var extra=(arguments.length<=0||void 0===arguments[0]?{}:arguments[0],arguments.length<=1||void 0===arguments[1]?{}:arguments[1]);_classCallCheck(this,Operator),this._extra=extra,this.context=new _Context2["default"],this.resetData(),this.setSpies()}return _createClass(Operator,[{key:"setSpies",value:function(){spyOn(this,"createInputEndpoint").and.callThrough(),spyOn(this,"createOutputEndpoint").and.callThrough(),spyOn(this,"log").and.callThrough()}},{key:"reset",value:function(){this.createInputEndpoint.calls.reset(),this.createOutputEndpoint.calls.reset(),this.log.calls.reset()}},{key:"resetData",value:function(){this.id=this._extra.id||"",void 0!==this._extra.inputs?this.inputs=this._createEndpointFromNames(this._extra.inputs):this.inputs={},void 0!==this._extra.outputs?this.outputs=this._createEndpointFromNames(this._extra.outputs):this.outputs={}}},{key:"createInputEndpoint",value:function(){}},{key:"createOutputEndpoint",value:function(){}},{key:"log",value:function(msg,level){window.console.log(msg,level)}},{key:"_createEndpointFromNames",value:function(names){return names.map(function(x){return{name:x,value:new _Endpoint2["default"](x)}}).reduce(function(acc,ac){return acc[ac.name]=ac.value,acc},{})}},{key:"setId",value:function(){var id=arguments.length<=0||void 0===arguments[0]?"":arguments[0];this.id=id}},{key:"setInputEndpoints",value:function(endps){this.inputs=this._createEndpointFromNames(endps)}},{key:"setDefaultInputEndpoints",value:function(endps){this._extra.inputs=endps,this.setInputEndpoints(endps)}},{key:"setOutputEndpoints",value:function(endps){this.outputs=this._createEndpointFromNames(endps)}},{key:"setDefaultOutputEndpoints",value:function(endps){this._extra.outputs=endps,this.setOutputEndpoints(endps)}}]),Operator}();exports["default"]=Operator},{"./Context":2,"./Endpoint":3}],8:[function(require,module,exports){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function get(object,property,receiver){null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0===desc){var parent=Object.getPrototypeOf(object);return null===parent?void 0:get(parent,property,receiver)}if("value"in desc)return desc.value;var getter=desc.get;if(void 0!==getter)return getter.call(receiver)},_Callback=require("./Callback"),spyOn=window.spyOn,PreferenceDoesNotExistError=function(_Error){function PreferenceDoesNotExistError(message){_classCallCheck(this,PreferenceDoesNotExistError);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(PreferenceDoesNotExistError).call(this,message));return _this.message=message,_this.name="PreferenceDoesNotExistError",_this}return _inherits(PreferenceDoesNotExistError,_Error),PreferenceDoesNotExistError}(Error),Preferences=function(_SimpleCallback){function Preferences(){_classCallCheck(this,Preferences);var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(Preferences).call(this));return _this2.PreferenceDoesNotExistError=PreferenceDoesNotExistError,_this2.resetData(),_this2.setSpies(),_this2}return _inherits(Preferences,_SimpleCallback),_createClass(Preferences,[{key:"setSpies",value:function(){spyOn(this,"set").and.callThrough(),spyOn(this,"get").and.callThrough(),spyOn(this,"registerCallback").and.callThrough()}},{key:"reset",value:function(){this.set.calls.reset(),this.get.calls.reset(),this.registerCallback.calls.reset()}},{key:"resetData",value:function(){this.prefs=this._defaultprefs||{}}},{key:"set",value:function(name,value){this.prefs[name]=value}},{key:"get",value:function(name){if(void 0===this.prefs[name])throw new PreferenceDoesNotExistError("Preference "+name+" does not exist");return this.prefs[name]}},{key:"simulate",value:function(obj){var k=void 0,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=Object.keys(obj)[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)k=_step.value,this.set(k,obj[k])}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}_get(Object.getPrototypeOf(Preferences.prototype),"simulate",this).call(this,obj)}},{key:"setPreferences",value:function(prefs){this.prefs=prefs}},{key:"setDefaultPreferences",value:function(prefs){this._defaultprefs=prefs,this.setPreferences(prefs)}}]),Preferences}(_Callback.SimpleCallback);exports["default"]=Preferences},{"./Callback":1}],9:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i["return"]&&_i["return"]()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Context=require("./Context"),_Context2=_interopRequireDefault(_Context),_Endpoint=require("./Endpoint"),_Endpoint2=_interopRequireDefault(_Endpoint),spyOn=window.spyOn,Variable=function(){function Variable(name,value){_classCallCheck(this,Variable),this.name=name,this.value=value}return _createClass(Variable,[{key:"get",value:function(){return this.value}},{key:"set",value:function(val){this.value=val}}]),Variable}(),Widget=function(){function Widget(){var extra=(arguments.length<=0||void 0===arguments[0]?{}:arguments[0],arguments.length<=1||void 0===arguments[1]?{}:arguments[1]);_classCallCheck(this,Widget),this.context=new _Context2["default"],this._extra=extra,this.resetData(),this.setSpies()}return _createClass(Widget,[{key:"setSpies",value:function(){spyOn(this,"createInputEndpoint").and.callThrough(),spyOn(this,"createOutputEndpoint").and.callThrough(),spyOn(this,"getVariable").and.callThrough(),spyOn(this,"drawAttention").and.callThrough(),spyOn(this,"log").and.callThrough()}},{key:"reset",value:function(){this.createInputEndpoint.calls.reset(),this.createOutputEndpoint.calls.reset(),this.getVariable.calls.reset(),this.drawAttention.calls.reset(),this.log.calls.reset()}},{key:"resetData",value:function(){this.id=this._extra.id||"",void 0!==this._extra.inputs?this.inputs=this._createEndpointFromNames(this._extra.inputs):this.inputs={},void 0!==this._extra.outputs?this.outputs=this._createEndpointFromNames(this._extra.outputs):this.outputs={},void 0!==this._extra.variables?this.variables=this._createVariablesFromValues(this._extra.variables):this.variables={}}},{key:"createInputEndpoint",value:function(){}},{key:"createOutputEndpoint",value:function(){}},{key:"getVariable",value:function(name){return void 0===this.variables[name]&&(this.variables[name]=new Variable("")),this.variables[name]}},{key:"drawAttention",value:function(){}},{key:"log",value:function(msg){return msg}},{key:"_createEndpointFromNames",value:function(names){return names.map(function(x){return{name:x,value:new _Endpoint2["default"](x)}}).reduce(function(acc,ac){return acc[ac.name]=ac.value,acc},{})}},{key:"_createVariablesFromValues",value:function(values){var variables={},k=void 0,v=void 0,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=Object.entries(values)[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var _step$value=_slicedToArray(_step.value,2);k=_step$value[0],v=_step$value[1],variables[k]=new Variable(k,v)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}return variables}},{key:"setId",value:function(){var id=arguments.length<=0||void 0===arguments[0]?"":arguments[0];this.id=id}},{key:"setInputEndpoints",value:function(endps){this.inputs=this._createEndpointFromNames(endps)}},{key:"setDefaultInputEndpoints",value:function(endps){this._extra.inputs=endps,this.setInputEndpoints(endps)}},{key:"setOutputEndpoints",value:function(endps){this.outputs=this._createEndpointFromNames(endps)}},{key:"setDefaultOutputEndpoints",value:function(endps){this._extra.outputs=endps,this.setOutputEndpoints(endps)}},{key:"setVariable",value:function(name,value){this.getVariable(name).set(value)}}]),Widget}();exports["default"]=Widget},{"./Context":2,"./Endpoint":3}],10:[function(require,module,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_Callback=require("./Callback"),_Endpoint=require("./Endpoint"),_Endpoint2=_interopRequireDefault(_Endpoint),spyOn=window.spyOn,EndpointTypeError=function(_Error){function EndpointTypeError(){var message=arguments.length<=0||void 0===arguments[0]?"":arguments[0];_classCallCheck(this,EndpointTypeError);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(EndpointTypeError).call(this,message));return _this.message=message,_this.name="EndpointTypeError",_this}return _inherits(EndpointTypeError,_Error),EndpointTypeError}(Error),EndpointValueError=function(_Error2){function EndpointValueError(){var message=arguments.length<=0||void 0===arguments[0]?"":arguments[0];_classCallCheck(this,EndpointValueError);var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(EndpointValueError).call(this,message));return _this2.message=message,_this2.name="EndpointValueError",_this2}return _inherits(EndpointValueError,_Error2),EndpointValueError}(Error),EndpointDoesNotExistError=function(_Error3){function EndpointDoesNotExistError(){var message=arguments.length<=0||void 0===arguments[0]?"":arguments[0];_classCallCheck(this,EndpointDoesNotExistError);var _this3=_possibleConstructorReturn(this,Object.getPrototypeOf(EndpointDoesNotExistError).call(this,message));return _this3.message=message,_this3.name="EndpointDoesNotExistError",_this3}return _inherits(EndpointDoesNotExistError,_Error3),EndpointDoesNotExistError}(Error),Wiring=function(){function Wiring(){_classCallCheck(this,Wiring),this.EndpointTypeError=EndpointTypeError,this.EndpointValueError=EndpointValueError,this.EndpointDoesNotExistError=EndpointDoesNotExistError,this._statuscalls=new _Callback.SimpleCallback,this._defaultIns=[],this._defaultOuts=[],this.setSpies(),this.resetData()}return _createClass(Wiring,[{key:"setSpies",value:function(){spyOn(this,"hasInputConnections").and.callThrough(),spyOn(this,"hasOutputConnections").and.callThrough(),spyOn(this,"pushEvent").and.callThrough(),spyOn(this,"registerCallback").and.callThrough(),spyOn(this,"registerStatusCallback").and.callThrough(),this._statuscalls.setSpies()}},{key:"reset",value:function(){this.hasInputConnections.calls.reset(),this.hasOutputConnections.calls.reset(),this.pushEvent.calls.reset(),this.registerCallback.calls.reset(),this.registerStatusCallback.calls.reset(),this._statuscalls.reset()}},{key:"resetData",value:function(){this.ins={},void 0!==this._defaultIns&&this.setInputEndpoints(this._defaultIns),this.outs={},void 0!==this._defaultOuts&&this.setOutputEndpoints(this._defaultOuts),this._statuscalls.resetData()}},{key:"hasInputConnections",value:function(name){if(void 0===this.ins[name])throw new EndpointDoesNotExistError;return this.ins[name].connected}},{key:"hasOutputConnections",value:function(name){if(void 0===this.outs[name])throw new EndpointDoesNotExistError;return this.outs[name].connected}},{key:"pushEvent",value:function(name,data){if(void 0===this.outs[name])throw new EndpointDoesNotExistError;this.outs[name].pushEvent(data)}},{key:"registerCallback",value:function(name,f){if(void 0===this.ins[name])throw new EndpointDoesNotExistError;this.ins[name].registerCallback(f)}},{key:"registerStatusCallback",value:function(f){this._statuscalls.registerCallback(f)}},{key:"simulate",value:function(name){var _ins$name;if(void 0===this.ins[name])return void window.console.log("Input endpoint "+name+" does not exist");for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_len>_key;_key++)args[_key-1]=arguments[_key];
(_ins$name=this.ins[name]).simulate.apply(_ins$name,args)}},{key:"setInputEndpoints",value:function(enps){var x=void 0,_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=enps[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)x=_step.value,this.ins[x]=new _Endpoint2["default"]}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}}},{key:"setDefaultInputEndpoints",value:function(enps){this._defaultIns=enps,this.setInputEndpoints(enps)}},{key:"setOutputEndpoints",value:function(enps){var x=void 0,_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_iterator2=enps[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0)x=_step2.value,this.outs[x]=new _Endpoint2["default"]}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2["return"]&&_iterator2["return"]()}finally{if(_didIteratorError2)throw _iteratorError2}}}},{key:"setDefaultOutputEndpoints",value:function(enps){this._defaultOuts=enps,this.setOutputEndpoints(enps)}},{key:"connectInput",value:function(name,endp){if(void 0===this.ins[name])throw new EndpointDoesNotExistError;this.ins[name].connect(endp),this._statuscalls.simulate()}},{key:"connectOutput",value:function(name,endp){if(void 0===this.outs[name])throw new EndpointDoesNotExistError;this.outs[name].connect(endp),this._statuscalls.simulate()}},{key:"disconnectInput",value:function(name){if(void 0===this.ins[name])throw new EndpointDoesNotExistError;this.ins[name].disconnect(),this._statuscalls.simulate()}},{key:"disconnectOutput",value:function(name){if(void 0===this.outs[name])throw new EndpointDoesNotExistError;this.outs[name].disconnect(),this._statuscalls.simulate()}}]),Wiring}();exports["default"]=Wiring},{"./Callback":1,"./Endpoint":3}]},{},[6]);