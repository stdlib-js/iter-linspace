// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function o(d,m,l){var f,u,v,a,p,h,j;if(!r(d)||t(d))throw new TypeError(i("0PH49",d));if(!r(m)||t(m))throw new TypeError(i("0PH4A",m));if(arguments.length>2){if(!n(l))throw new TypeError(i("0PH2m",l));p=l}else p=100;return u=(f=m-d)/(h=p-1),j=-1,e(v={},"next",(function(){var e;if(j+=1,a||j>=p)return{done:!0};if(0===j)return{value:d,done:!1};if(j===h)return{value:m,done:!1};e=0===u?j/h*f+d:j*u+d;return{value:e,done:!1}})),e(v,"return",(function(e){if(a=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),s&&e(v,s,(function(){return o(d,m,p)})),v}export{o as default};
//# sourceMappingURL=index.mjs.map
