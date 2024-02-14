import*as e from"@dropins/elsie/event-bus.js";import*as r from"@dropins/elsie/fetch-graphql.js";import*as t from"@dropins/elsie/preact-compat.js";import*as n from"@dropins/elsie/preact-hooks.js";import*as o from"@dropins/elsie/preact-jsx-runtime.js";import*as i from"@dropins/elsie/preact.js";export const id=340;export const ids=[340];export const modules={304:(e,r,t)=>{t.d(r,{_:()=>q,i:()=>V});var n=t(2532),o=t(2460),i=t(4944),s=t(5450),a=t(6668),l=t(8340),u=function(){return(0,l.jsx)(a.W,{className:"bill-to-shipping-address__skeleton",children:(0,l.jsx)(a.K,{variant:"row",size:"small"})})},c=t(5536),d=t.n(c),f=t(7008),p=t.n(f),m=t(1496),b=t.n(m),v=t(9836),y=t.n(v),g=t(9904),h=t.n(g),j=t(4192),O=t.n(j),S=t(1336),x={};x.styleTagTransform=O(),x.setAttributes=y(),x.insert=b().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=h();d()(S.c,x);S.c&&S.c.locals&&S.c.locals;function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}var C=["className","isInitialized","checked"];function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){I(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function I(e,r,t){var n;return n=function(e,r){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==k(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var E=function(e){var r=e.className,t=e.isInitialized,n=void 0===t||t,a=e.checked,c=void 0===a||a,d=_(e,C);return n?(0,l.jsx)("div",{className:"checkout-bill-to-shipping-address",children:(0,l.jsx)(s.y,P({"data-testid":"bill-to-shipping-checkbox",className:(0,i.i)(["checkout-bill-to-shipping-address__checkbox",r]),checked:c,name:"checkout-bill-to-shipping-address__checkbox",label:(0,l.jsx)(o.a,{id:"Checkout.BillToShippingAddress.title"})},d))}):(0,l.jsx)(u,{})},A=t(2256),M=t(1244),N=t(5668),B=t(2288),R=t(40),F=t(2236),T=["className","children"];function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function z(e,r,t){var n;return n=function(e,r){if("object"!=J(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==J(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function L(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function H(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,s,a=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return U(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return U(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function J(e){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J(e)}function V(e,r,t){return!r&&!t||!(!r||!t)&&e.every((function(e){var n=e.code;return function(e,r,t){var n=e[t],o=r[t];return void 0===n&&void 0===o||null===n&&null===o||("object"===J(n)&&"object"===J(o)?JSON.stringify(n)===JSON.stringify(o):n===o)}(r,t,n)}))}var q=function(e){var r=e.className,t=(e.children,L(e,T)),o=(0,A.o3)().cartId,i=(0,M.sJ)().isBillToShipping,s=function(e){var r,t=e.isBillToShipping,n=H((0,B.useState)(!1),2),o=n[0],i=n[1],s=(0,F.q)().fields,a=N.s.value.data,l=!!a,u=null==a?void 0:a.billing_address,c=null==a||null===(r=a.shipping_addresses)||void 0===r?void 0:r[0];return(0,B.useEffect)((function(){if(s){var e=localStorage.getItem(R.c);if(!o&&e)return i(!0),void(t.value={checked:"true"===e,setByUser:!1});if(!o&&l){i(!0);var r=V(s,u,c);t.value={checked:null!=a&&a.billing_address?r:t.value.checked,setByUser:!1}}}}),[u,null==a?void 0:a.billing_address,s,l,t,o,c]),{isInitialized:o}}({isBillToShipping:i}),a=s.isInitialized;return(0,l.jsx)(E,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){z(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:r,checked:i.value.checked,isInitialized:a,onChange:function(e){var r,t=e.target.checked,s=N.s.value.data,l=Boolean(null==s||null===(r=s.shipping_addresses)||void 0===r?void 0:r[0]);if(i.value={checked:t,setByUser:!0},localStorage.setItem(R.c,i.value.checked.toString()),a&&t&&l){var u=new AbortController;return(0,n.W)({signal:u.signal,cartId:o,input:{same_as_shipping:!0}}).catch((function(e){console.error(e)})),function(){u.abort()}}},disabled:N.s.value.pending},t))}},40:(e,r,t)=>{t.d(r,{c:()=>n});var n="is_bill_to_shipping_address"},2872:(e,r,t)=>{t.d(r,{M:()=>m});var n=t(2532),o=t(5124),i=t(9734),s=t(304),a=t(6476),l=t(2256),u=t(1244),c=t(2236),d=t(5668),f=t(2288),p=t(8340),m=function(){var e=(0,l.o3)().cartId,r=(0,c.q)().fields,t=(0,u.sJ)().isBillToShipping,m=(0,f.useRef)(null),b=!t.value.checked,v=(0,f.useCallback)((function(r){return(0,n.W)({signal:r.signal,cartId:e,input:{address:t.value.checked?void 0:(0,o.ek)(r.address),same_as_shipping:t.value.checked}})}),[e,t.value]),y=(0,f.useCallback)((function(){var e,t=d.s.value.data;return!(0,s.i)(r,null==t||null===(e=t.shipping_addresses)||void 0===e?void 0:e[0],null==t?void 0:t.billing_address)}),[r]);return(0,f.useEffect)((function(){var e=t.value,r=e.checked;if(e.setByUser){var n=new AbortController;return r||m.current.triggerSaveAddress(n.signal),function(){n.abort()}}}),[t.value]),(0,p.jsx)(i.i,{"data-testid":"billing-form",ref:m,name:a.M,addressType:"billing_address",headingId:"Checkout.BillingAddress.title",saveAddressHandler:v,shouldAutoFillForm:y,style:{display:b?"block":"none"},className:"checkout-billing-address-form"})}},6476:(e,r,t)=>{t.d(r,{M:()=>n});var n="billing_address"},3084:(e,r,t)=>{t.d(r,{Mh:()=>o.M,Mx:()=>n.M,cp:()=>n.M});var n=t(2872),o=t(6476)},1336:(e,r,t)=>{t.d(r,{c:()=>a});var n=t(6008),o=t.n(n),i=t(2076),s=t.n(i)()(o());s.push([e.id,".checkout-bill-to-shipping-address{\n  display:grid;\n}\n\n.checkout-bill-to-shipping-address label{\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  gap:0;\n}\n",""]);const a=s},1996:(r,t,n)=>{r.exports=(e=>{var r={};return n.d(r,e),r})({events:()=>e.events})},4720:(e,t,n)=>{e.exports=(e=>{var r={};return n.d(r,e),r})({FetchGraphQL:()=>r.FetchGraphQL})},2288:(e,r,n)=>{e.exports=(e=>{var r={};return n.d(r,e),r})({createContext:()=>t.createContext,forwardRef:()=>t.forwardRef,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useEffect:()=>t.useEffect,useImperativeHandle:()=>t.useImperativeHandle,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState})},5456:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},9992:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},2576:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import s from"../runtime.js";import*as a from"../456.js";s.C(a);import*as l from"../856.js";s.C(l);import*as u from"../644.js";s.C(u);import*as c from"../984.js";s.C(c);import*as d from"../940.js";s.C(d);import*as f from"../872.js";s.C(f);import*as p from"../28.js";s.C(p);import*as m from"../304.js";s.C(m);import*as b from"../212.js";s.C(b);import*as v from"./BillingForm.js";s.C(v);var y,g=(y=3084,s(s.s=y)),h=g.Mh,j=g.Mx,O=g.cp;export{h as BILLING_FORM_NAME,j as BillingForm,O as default};