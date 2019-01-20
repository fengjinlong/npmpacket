!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=5)}([function(e,t){e.exports=function(e,t,n,r,a,o){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var u="function"==typeof s?s.options:s;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a);var d;if(o?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=d):r&&(d=r),d){var l=u.functional,h=l?u.render:u.beforeCreate;l?(u._injectStyles=d,u.render=function(e,t){return d.call(t),h(e,t)}):u.beforeCreate=h?[].concat(h,d):[d]}return{esModule:i,exports:s,options:u}}},function(e,t,n){"use strict";function r(e){var t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regExp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object"}[t.call(e)]}function a(e){var t=r(e),n=void 0;if("array"===t)n=[];else{if("object"!==t)return e;n={}}if("array"===t)for(var o=0;o<e.length;o++)n.push(a(e[o]));else if("object"===t)for(var i in e)n[i]=a(e[i]);return n}function o(e,t){for(var n=e.$parent,r=n.$options.name;n&&(!r||[t].indexOf(r)<0);)(n=n.$parent)&&(r=n.$options.name);return n}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},function(e,t,n){"use strict";var r=n(7),a=n(1);t.a={name:"Tree",components:{TreeNode:r.a},props:{data:{type:Array,default:function(){return[]}},showCheckbox:{type:Boolean,default:!1}},data:function(){return{cloneData:[],currentIdArr:[]}},created:function(){this.rebuildData()},watch:{data:function(){this.rebuildData()}},methods:{rebuildData:function(){this.cloneData=Object(a.a)(this.data)},getAllChecked:function(e){var t=this;e.forEach(function(e){e.checked&&t.currentIdArr.push(e.id),void 0!==e.children&&e.children.length>0&&t.getAllChecked(e.children)})},emitEvent:function(e,t){var n=this;if("on-check-change"===e){this.currentIdArr=[];var r=t.id;this.$nextTick(function(){n.getAllChecked(n.cloneData),n.$emit(e,r,n.currentIdArr)})}else this.$emit(e,t,this.cloneData)}}}},function(e,t,n){"use strict";var r=n(13),a=n(1);t.a={name:"TreeNode",components:{iCheckbox:r.a},props:{data:{type:Object,default:function(){return{}}},showCheckbox:{type:Boolean,default:!1}},data:function(){return{tree:Object(a.b)(this,"Tree")}},methods:{handleExpand:function(e){void 0!=e&&e.length>0&&(this.$set(this.data,"expand",!this.data.expand),this.tree&&this.tree.emitEvent("on-toggle-expand",this.data))},handleCheck:function(e){this.updateTreeDown(this.data,e),this.tree&&this.tree.emitEvent("on-check-change",this.data)},updateTreeDown:function(e,t){var n=this;this.$set(e,"checked",t),e.children&&e.children.length&&e.children.forEach(function(e){n.updateTreeDown(e,t)})}},watch:{"data.children":{handler:function(e){if(e){var t=e.every(function(e){return e.checked});this.$set(this.data,"checked",t)}},deep:!0}}}},function(e,t,n){"use strict";var r=n(14),a=n(1);t.a={mixins:[r.a],name:"JCheckbox",props:{label:{type:[String,Number,Boolean]},disabled:{type:Boolean,default:!1},value:{type:[String,Number,Boolean],default:!1},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1}},data:function(){return{currentValue:this.value,model:[],group:!1,parent:null}},mounted:function(){this.parent=Object(a.b)(this,"JCheckboxGroup"),this.parent&&(this.group=!0),this.group?this.parent.updateModel(!0):this.updateModel()},methods:{change:function(e){if(this.disabled)return!1;var t=e.target.checked;this.currentValue=t;var n=t?this.trueValue:this.falseValue;this.$emit("input",n),this.group?this.parent.change(this.model):(this.$emit("on-change",n),this.dispatch("iFormItem","on-form-change",n))},updateModel:function(){this.currentValue=this.value===this.trueValue}},watch:{value:function(e){if(e!==this.trueValue&&e!==this.falseValue)throw"Value should be trueValue or falseValue.";this.updateModel()}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);t.default=r.a},function(e,t,n){"use strict";var r=n(2),a=n(17),o=n(0),i=o(r.a,a.a,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";function r(e){n(8)}var a=n(3),o=n(16),i=n(0),s=r,c=i(a.a,o.a,!1,s,null,null);t.a=c.exports},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(11)("57236ef0",r,!0,{})},function(e,t,n){t=e.exports=n(10)(!1),t.push([e.i,".tree-li,.tree-ul{list-style:none;padding-left:10px}.tree-expand{cursor:pointer}",""])},function(e,t){function n(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));d[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function o(e){var t,n,r=document.querySelector("style["+b+'~="'+e.id+'"]');if(r){if(p)return v;r.parentNode.removeChild(r)}if(g){var o=f++;r=h||(h=a()),t=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),m.ssrId&&e.setAttribute(b,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(12),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),h=null,f=0,p=!1,v=function(){},m=null,b="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,a){p=n,m=a||{};var o=u(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=d[i.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},a=0;a<t.length;a++){var o=t[a],i=o[0],s=o[1],c=o[2],u=o[3],d={id:e+":"+a,css:s,media:c,sourceMap:u};r[i]?r[i].parts.push(d):n.push(r[i]={id:i,parts:[d]})}return n}},function(e,t,n){"use strict";var r=n(4),a=n(15),o=n(0),i=o(r.a,a.a,!1,null,null,null);t.a=i.exports},function(e,t,n){"use strict";function r(e,t,n){this.$children.forEach(function(a){a.$options.name===e?a.$emit.apply(a,[t].concat(n)):r.apply(a,[e,t].concat([n]))})}t.a={methods:{dispatch:function(e,t,n){for(var r=this.$parent||this.$root,a=r.$options.name;r&&(!a||a!==e);)(r=r.$parent)&&(a=r.$options.name);r&&r.$emit.apply(r,[t].concat(n))},broadcast:function(e,t,n){r.call(this,e,t,n)}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",[e.group?n("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],attrs:{type:"checkbox",disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var n=e.model,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=e.label,i=e._i(n,o);r.checked?i<0&&(e.model=n.concat([o])):i>-1&&(e.model=n.slice(0,i).concat(n.slice(i+1)))}else e.model=a},e.change]}}):n("input",{attrs:{type:"checkbox",disabled:e.disabled},domProps:{checked:e.currentValue},on:{change:e.change}})]),e._v(" "),e._t("default")],2)},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"tree-ul"},[n("li",{staticClass:"tree-li"},[n("span",{staticClass:"tree-expand",on:{click:function(t){e.handleExpand(e.data.children)}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.data.children&&e.data.children.length&&!e.data.expand,expression:"data.children&&data.children.length&&!data.expand"}]},[e._v("+")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.data.children&&e.data.children.length&&e.data.expand,expression:"data.children&&data.children.length&&data.expand"}]},[e._v("-")])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.data.children||!e.data.children.length,expression:"!data.children || !data.children.length"}],staticStyle:{color:"transparent"}},[e._v("+")]),e._v(" "),n("i-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.showCheckbox,expression:"showCheckbox"}],attrs:{value:e.data.checked},on:{input:e.handleCheck}}),e._v(" "),n("span",[e._v(e._s(e.data.title))]),e._v(" "),e._l(e.data.children,function(t,r){return n("tree-node",{directives:[{name:"show",rawName:"v-show",value:e.data.expand,expression:"data.expand"}],key:r,attrs:{data:t,"show-checkbox":e.showCheckbox}})})],2)])},a=[],o={render:r,staticRenderFns:a};t.a=o},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.cloneData,function(t,r){return n("tree-node",{key:r,attrs:{data:t,"show-checkbox":e.showCheckbox}})}),1)},a=[],o={render:r,staticRenderFns:a};t.a=o}])});