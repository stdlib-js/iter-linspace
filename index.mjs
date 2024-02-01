// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function m(d,o,a){var u,l,v,g,h,j,p;if(!n(d)||t(d))throw new TypeError(i("invalid argument. First argument must be a number. Value: `%s`.",d));if(!n(o)||t(o))throw new TypeError(i("invalid argument. Second argument must be a number. Value: `%s`.",o));if(arguments.length>2){if(!r(a))throw new TypeError(i("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",a));h=a}else h=100;return l=(u=o-d)/(j=h-1),p=-1,e(v={},"next",f),e(v,"return",b),s&&e(v,s,c),v;function f(){return p+=1,g||p>=h?{done:!0}:0===p?{value:d,done:!1}:p===j?{value:o,done:!1}:{value:0===l?p/j*u+d:p*l+d,done:!1}}function b(e){return g=!0,arguments.length?{value:e,done:!0}:{done:!0}}function c(){return m(d,o,h)}}export{m as default};
//# sourceMappingURL=index.mjs.map
