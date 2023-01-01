// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__;var a=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,a){var c,f,y,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(i.call(t,e)||l.call(t,e)?(c=t.__proto__,t.__proto__=r,delete t[e],t[e]=a.value,t.__proto__=c):t[e]=a.value),y="get"in a,b="set"in a,f&&(y||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,a.get),b&&u&&u.call(t,e,a.set),t};function c(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var p=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&v.call(t,e)}var _="function"==typeof Symbol?Symbol.toStringTag:"";var s=b()?function(t){var e,r,n;if(null==t)return p.call(t);r=t[_],e=m(t,_);try{t[_]=void 0}catch(e){return p.call(t)}return n=p.call(t),e?t[_]=r:delete t[_],n}:function(t){return p.call(t)},d=Number,g=d.prototype.toString;var S=b();function j(t){return"object"==typeof t&&(t instanceof d||(S?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===s(t)))}function h(t){return f(t)||j(t)}function w(t){return t!=t}c(h,"isPrimitive",f),c(h,"isObject",j);var O=Number.POSITIVE_INFINITY,T=d.NEGATIVE_INFINITY,I=Math.floor;function E(t){return t<O&&t>T&&I(e=t)===e;var e}function N(t){return f(t)&&E(t)}function P(t){return j(t)&&E(t.valueOf())}function C(t){return N(t)||P(t)}function Y(t){return N(t)&&t>=0}function V(t){return P(t)&&t.valueOf()>=0}function x(t){return Y(t)||V(t)}c(C,"isPrimitive",N),c(C,"isObject",P),c(x,"isPrimitive",Y),c(x,"isObject",V);var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function F(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}function G(t,e,r){var n,o,u,i,l,a,y;if(!f(t)||w(t))throw new TypeError(F("0CY4M",t));if(!f(e)||w(e))throw new TypeError(F("0CY4N",e));if(arguments.length>2){if(!Y(r))throw new TypeError(F("0CY2y",r));l=r}else l=100;return o=(n=e-t)/(a=l-1),y=-1,c(u={},"next",b),c(u,"return",p),A&&c(u,A,v),u;function b(){return y+=1,i||y>=l?{done:!0}:0===y?{value:t,done:!1}:y===a?{value:e,done:!1}:{value:0===o?y/a*n+t:y*o+t,done:!1}}function p(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function v(){return G(t,e,l)}}export{G as default};
//# sourceMappingURL=mod.js.map