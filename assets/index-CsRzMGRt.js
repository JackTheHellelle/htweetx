function tI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Nv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tf={exports:{}},rl={},nf={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky;function nI(){if(ky)return ke;ky=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,B={};function b(L,W,me){this.props=L,this.context=W,this.refs=B,this.updater=me||O}b.prototype.isReactComponent={},b.prototype.setState=function(L,W){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,W,"setState")},b.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function q(){}q.prototype=b.prototype;function X(L,W,me){this.props=L,this.context=W,this.refs=B,this.updater=me||O}var Y=X.prototype=new q;Y.constructor=X,F(Y,b.prototype),Y.isPureReactComponent=!0;var te=Array.isArray,ge=Object.prototype.hasOwnProperty,ae={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(L,W,me){var Re,Ae={},Pe=null,xe=null;if(W!=null)for(Re in W.ref!==void 0&&(xe=W.ref),W.key!==void 0&&(Pe=""+W.key),W)ge.call(W,Re)&&!P.hasOwnProperty(Re)&&(Ae[Re]=W[Re]);var Ne=arguments.length-2;if(Ne===1)Ae.children=me;else if(1<Ne){for(var Le=Array(Ne),st=0;st<Ne;st++)Le[st]=arguments[st+2];Ae.children=Le}if(L&&L.defaultProps)for(Re in Ne=L.defaultProps,Ne)Ae[Re]===void 0&&(Ae[Re]=Ne[Re]);return{$$typeof:n,type:L,key:Pe,ref:xe,props:Ae,_owner:ae.current}}function C(L,W){return{$$typeof:n,type:L.type,key:W,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function D(L){var W={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(me){return W[me]})}var V=/\/+/g;function A(L,W){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):W.toString(36)}function tt(L,W,me,Re,Ae){var Pe=typeof L;(Pe==="undefined"||Pe==="boolean")&&(L=null);var xe=!1;if(L===null)xe=!0;else switch(Pe){case"string":case"number":xe=!0;break;case"object":switch(L.$$typeof){case n:case e:xe=!0}}if(xe)return xe=L,Ae=Ae(xe),L=Re===""?"."+A(xe,0):Re,te(Ae)?(me="",L!=null&&(me=L.replace(V,"$&/")+"/"),tt(Ae,W,me,"",function(st){return st})):Ae!=null&&(N(Ae)&&(Ae=C(Ae,me+(!Ae.key||xe&&xe.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+L)),W.push(Ae)),1;if(xe=0,Re=Re===""?".":Re+":",te(L))for(var Ne=0;Ne<L.length;Ne++){Pe=L[Ne];var Le=Re+A(Pe,Ne);xe+=tt(Pe,W,me,Le,Ae)}else if(Le=S(L),typeof Le=="function")for(L=Le.call(L),Ne=0;!(Pe=L.next()).done;)Pe=Pe.value,Le=Re+A(Pe,Ne++),xe+=tt(Pe,W,me,Le,Ae);else if(Pe==="object")throw W=String(L),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return xe}function Rt(L,W,me){if(L==null)return L;var Re=[],Ae=0;return tt(L,Re,"","",function(Pe){return W.call(me,Pe,Ae++)}),Re}function At(L){if(L._status===-1){var W=L._result;W=W(),W.then(function(me){(L._status===0||L._status===-1)&&(L._status=1,L._result=me)},function(me){(L._status===0||L._status===-1)&&(L._status=2,L._result=me)}),L._status===-1&&(L._status=0,L._result=W)}if(L._status===1)return L._result.default;throw L._result}var Fe={current:null},ie={transition:null},he={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:ae};function se(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Rt,forEach:function(L,W,me){Rt(L,function(){W.apply(this,arguments)},me)},count:function(L){var W=0;return Rt(L,function(){W++}),W},toArray:function(L){return Rt(L,function(W){return W})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ke.Component=b,ke.Fragment=t,ke.Profiler=o,ke.PureComponent=X,ke.StrictMode=i,ke.Suspense=p,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,ke.act=se,ke.cloneElement=function(L,W,me){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Re=F({},L.props),Ae=L.key,Pe=L.ref,xe=L._owner;if(W!=null){if(W.ref!==void 0&&(Pe=W.ref,xe=ae.current),W.key!==void 0&&(Ae=""+W.key),L.type&&L.type.defaultProps)var Ne=L.type.defaultProps;for(Le in W)ge.call(W,Le)&&!P.hasOwnProperty(Le)&&(Re[Le]=W[Le]===void 0&&Ne!==void 0?Ne[Le]:W[Le])}var Le=arguments.length-2;if(Le===1)Re.children=me;else if(1<Le){Ne=Array(Le);for(var st=0;st<Le;st++)Ne[st]=arguments[st+2];Re.children=Ne}return{$$typeof:n,type:L.type,key:Ae,ref:Pe,props:Re,_owner:xe}},ke.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},ke.createElement=I,ke.createFactory=function(L){var W=I.bind(null,L);return W.type=L,W},ke.createRef=function(){return{current:null}},ke.forwardRef=function(L){return{$$typeof:d,render:L}},ke.isValidElement=N,ke.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:At}},ke.memo=function(L,W){return{$$typeof:y,type:L,compare:W===void 0?null:W}},ke.startTransition=function(L){var W=ie.transition;ie.transition={};try{L()}finally{ie.transition=W}},ke.unstable_act=se,ke.useCallback=function(L,W){return Fe.current.useCallback(L,W)},ke.useContext=function(L){return Fe.current.useContext(L)},ke.useDebugValue=function(){},ke.useDeferredValue=function(L){return Fe.current.useDeferredValue(L)},ke.useEffect=function(L,W){return Fe.current.useEffect(L,W)},ke.useId=function(){return Fe.current.useId()},ke.useImperativeHandle=function(L,W,me){return Fe.current.useImperativeHandle(L,W,me)},ke.useInsertionEffect=function(L,W){return Fe.current.useInsertionEffect(L,W)},ke.useLayoutEffect=function(L,W){return Fe.current.useLayoutEffect(L,W)},ke.useMemo=function(L,W){return Fe.current.useMemo(L,W)},ke.useReducer=function(L,W,me){return Fe.current.useReducer(L,W,me)},ke.useRef=function(L){return Fe.current.useRef(L)},ke.useState=function(L){return Fe.current.useState(L)},ke.useSyncExternalStore=function(L,W,me){return Fe.current.useSyncExternalStore(L,W,me)},ke.useTransition=function(){return Fe.current.useTransition()},ke.version="18.3.1",ke}var Ny;function up(){return Ny||(Ny=1,nf.exports=nI()),nf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function rI(){if(xy)return rl;xy=1;var n=up(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,E={},S=null,O=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(O=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(E[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)E[v]===void 0&&(E[v]=p[v]);return{$$typeof:e,type:d,key:S,ref:O,props:E,_owner:o.current}}return rl.Fragment=t,rl.jsx=c,rl.jsxs=c,rl}var Oy;function iI(){return Oy||(Oy=1,tf.exports=rI()),tf.exports}var re=iI(),ee=up();const Jn=Nv(ee),sI=tI({__proto__:null,default:Jn},[ee]);var cc={},rf={exports:{}},hn={},sf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy;function oI(){return Dy||(Dy=1,function(n){function e(ie,he){var se=ie.length;ie.push(he);e:for(;0<se;){var L=se-1>>>1,W=ie[L];if(0<o(W,he))ie[L]=he,ie[se]=W,se=L;else break e}}function t(ie){return ie.length===0?null:ie[0]}function i(ie){if(ie.length===0)return null;var he=ie[0],se=ie.pop();if(se!==he){ie[0]=se;e:for(var L=0,W=ie.length,me=W>>>1;L<me;){var Re=2*(L+1)-1,Ae=ie[Re],Pe=Re+1,xe=ie[Pe];if(0>o(Ae,se))Pe<W&&0>o(xe,Ae)?(ie[L]=xe,ie[Pe]=se,L=Pe):(ie[L]=Ae,ie[Re]=se,L=Re);else if(Pe<W&&0>o(xe,se))ie[L]=xe,ie[Pe]=se,L=Pe;else break e}}return he}function o(ie,he){var se=ie.sortIndex-he.sortIndex;return se!==0?se:ie.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,E=null,S=3,O=!1,F=!1,B=!1,b=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(ie){for(var he=t(y);he!==null;){if(he.callback===null)i(y);else if(he.startTime<=ie)i(y),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(y)}}function te(ie){if(B=!1,Y(ie),!F)if(t(p)!==null)F=!0,At(ge);else{var he=t(y);he!==null&&Fe(te,he.startTime-ie)}}function ge(ie,he){F=!1,B&&(B=!1,q(I),I=-1),O=!0;var se=S;try{for(Y(he),E=t(p);E!==null&&(!(E.expirationTime>he)||ie&&!D());){var L=E.callback;if(typeof L=="function"){E.callback=null,S=E.priorityLevel;var W=L(E.expirationTime<=he);he=n.unstable_now(),typeof W=="function"?E.callback=W:E===t(p)&&i(p),Y(he)}else i(p);E=t(p)}if(E!==null)var me=!0;else{var Re=t(y);Re!==null&&Fe(te,Re.startTime-he),me=!1}return me}finally{E=null,S=se,O=!1}}var ae=!1,P=null,I=-1,C=5,N=-1;function D(){return!(n.unstable_now()-N<C)}function V(){if(P!==null){var ie=n.unstable_now();N=ie;var he=!0;try{he=P(!0,ie)}finally{he?A():(ae=!1,P=null)}}else ae=!1}var A;if(typeof X=="function")A=function(){X(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Rt=tt.port2;tt.port1.onmessage=V,A=function(){Rt.postMessage(null)}}else A=function(){b(V,0)};function At(ie){P=ie,ae||(ae=!0,A())}function Fe(ie,he){I=b(function(){ie(n.unstable_now())},he)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){F||O||(F=!0,At(ge))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(ie){switch(S){case 1:case 2:case 3:var he=3;break;default:he=S}var se=S;S=he;try{return ie()}finally{S=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,he){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var se=S;S=ie;try{return he()}finally{S=se}},n.unstable_scheduleCallback=function(ie,he,se){var L=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,ie){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=se+W,ie={id:v++,callback:he,priorityLevel:ie,startTime:se,expirationTime:W,sortIndex:-1},se>L?(ie.sortIndex=se,e(y,ie),t(p)===null&&ie===t(y)&&(B?(q(I),I=-1):B=!0,Fe(te,se-L))):(ie.sortIndex=W,e(p,ie),F||O||(F=!0,At(ge))),ie},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ie){var he=S;return function(){var se=S;S=he;try{return ie.apply(this,arguments)}finally{S=se}}}}(of)),of}var by;function aI(){return by||(by=1,sf.exports=oI()),sf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ly;function lI(){if(Ly)return hn;Ly=1;var n=up(),e=aI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(r){return p.call(E,r)?!0:p.call(v,r)?!1:y.test(r)?E[r]=!0:(v[r]=!0,!1)}function O(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function F(r,s,a,h){if(s===null||typeof s>"u"||O(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function X(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,X);b[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,X);b[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,X);b[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function Y(r,s,a,h){var f=b.hasOwnProperty(s)?b[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(F(s,a,f,h)&&(a=null),h||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var te=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ge=Symbol.for("react.element"),ae=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function he(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,L;function W(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var me=!1;function Re(r,s){if(!r||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var k=`
`+f[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=R);break}}}finally{me=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?W(r):""}function Ae(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case ae:return"Portal";case C:return"Profiler";case I:return"StrictMode";case A:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Rt:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case At:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}function xe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Le(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function st(r){var s=Le(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function nn(r){r._valueTracker||(r._valueTracker=st(r))}function Yt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Le(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function ei(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wi(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function js(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ne(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ua(r,s){s=s.checked,s!=null&&Y(r,"checked",s,!1)}function ca(r,s){ua(r,s);var a=Ne(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Bs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Bs(r,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ql(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Bs(r,s,a){(s!=="number"||ei(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Ir=Array.isArray;function Sr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ne(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ha(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function zs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ne(a)}}function $s(r,s){var a=Ne(s.value),h=Ne(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function da(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Rr,fa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Rr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ti(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hi=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(r){Hi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),qi[s]=qi[r]})});function pa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||qi.hasOwnProperty(r)&&qi[r]?(""+s).trim():s+"px"}function ma(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=pa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var ga=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ya(r,s){if(s){if(ga[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function _a(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function Ws(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var qs=null,Rn=null,rr=null;function Hs(r){if(r=za(r)){if(typeof qs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=Ru(s),qs(r.stateNode,r.type,s))}}function ir(r){Rn?rr?rr.push(r):rr=[r]:Rn=r}function va(){if(Rn){var r=Rn,s=rr;if(rr=Rn=null,Hs(r),s)for(r=0;r<s.length;r++)Hs(s[r])}}function Gi(r,s){return r(s)}function wa(){}var Ar=!1;function Ea(r,s,a){if(Ar)return r(s,a);Ar=!0;try{return Gi(r,s,a)}finally{Ar=!1,(Rn!==null||rr!==null)&&(wa(),va())}}function ct(r,s){var a=r.stateNode;if(a===null)return null;var h=Ru(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ks=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Ks=!1}function Qi(r,s,a,h,f,g,w,R,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(G){this.onError(G)}}var Yi=!1,Gs=null,Un=!1,Ta=null,kh={onError:function(r){Yi=!0,Gs=r}};function Qs(r,s,a,h,f,g,w,R,k){Yi=!1,Gs=null,Qi.apply(kh,arguments)}function Yl(r,s,a,h,f,g,w,R,k){if(Qs.apply(this,arguments),Yi){if(Yi){var z=Gs;Yi=!1,Gs=null}else throw Error(t(198));Un||(Un=!0,Ta=z)}}function Fn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Xi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jn(r){if(Fn(r)!==r)throw Error(t(188))}function Xl(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return jn(f),r;if(g===h)return jn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===a){w=!0,a=f,h=g;break}if(R===h){w=!0,h=f,a=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===a){w=!0,a=g,h=f;break}if(R===h){w=!0,h=g,a=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ia(r){return r=Xl(r),r!==null?Ys(r):null}function Ys(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ys(r);if(s!==null)return s;r=r.sibling}return null}var Xs=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,Jl=e.unstable_shouldYield,Nh=e.unstable_requestPaint,Ke=e.unstable_now,Zl=e.unstable_getCurrentPriorityLevel,Ji=e.unstable_ImmediatePriority,ni=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Ra=e.unstable_LowPriority,eu=e.unstable_IdlePriority,Zi=null,mn=null;function tu(r){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Zi,r,void 0,(r.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:ru,Aa=Math.log,nu=Math.LN2;function ru(r){return r>>>=0,r===0?32:31-(Aa(r)/nu|0)|0}var Js=64,Zs=4194304;function ri(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function es(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var R=w&~f;R!==0?h=ri(R):(g&=w,g!==0&&(h=ri(g)))}else w=a&~f,w!==0?h=ri(w):g!==0&&(h=ri(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Xt(s),f=1<<a,h|=r[a],s&=~f;return h}function xh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Xt(g),R=1<<w,k=f[w];k===-1?((R&a)===0||(R&h)!==0)&&(f[w]=xh(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function gn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function ts(){var r=Js;return Js<<=1,(Js&4194240)===0&&(Js=64),r}function ii(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function si(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Xt(s),r[s]=a}function qe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Xt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function oi(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Xt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var De=0;function ai(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var iu,eo,su,ou,au,Pa=!1,sr=[],Dt=null,Bn=null,zn=null,li=new Map,Pn=new Map,or=[],Oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lu(r,s){switch(r){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":li.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(s.pointerId)}}function rn(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=za(s),s!==null&&eo(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Dh(r,s,a,h,f){switch(s){case"focusin":return Dt=rn(Dt,r,s,a,h,f),!0;case"dragenter":return Bn=rn(Bn,r,s,a,h,f),!0;case"mouseover":return zn=rn(zn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return li.set(g,rn(li.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Pn.set(g,rn(Pn.get(g)||null,r,s,a,h,f)),!0}return!1}function uu(r){var s=os(r.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=Xi(a),s!==null){r.blockedOn=s,au(r.priority,function(){su(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Cr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=to(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Ki=h,a.target.dispatchEvent(h),Ki=null}else return s=za(a),s!==null&&eo(s),r.blockedOn=a,!1;s.shift()}return!0}function ns(r,s,a){Cr(r)&&a.delete(s)}function cu(){Pa=!1,Dt!==null&&Cr(Dt)&&(Dt=null),Bn!==null&&Cr(Bn)&&(Bn=null),zn!==null&&Cr(zn)&&(zn=null),li.forEach(ns),Pn.forEach(ns)}function $n(r,s){r.blockedOn===s&&(r.blockedOn=null,Pa||(Pa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cu)))}function Wn(r){function s(f){return $n(f,r)}if(0<sr.length){$n(sr[0],r);for(var a=1;a<sr.length;a++){var h=sr[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Dt!==null&&$n(Dt,r),Bn!==null&&$n(Bn,r),zn!==null&&$n(zn,r),li.forEach(s),Pn.forEach(s),a=0;a<or.length;a++)h=or[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)uu(a),a.blockedOn===null&&or.shift()}var kr=te.ReactCurrentBatchConfig,ui=!0;function Ze(r,s,a,h){var f=De,g=kr.transition;kr.transition=null;try{De=1,Ca(r,s,a,h)}finally{De=f,kr.transition=g}}function bh(r,s,a,h){var f=De,g=kr.transition;kr.transition=null;try{De=4,Ca(r,s,a,h)}finally{De=f,kr.transition=g}}function Ca(r,s,a,h){if(ui){var f=to(r,s,a,h);if(f===null)qh(r,s,h,rs,a),lu(r,h);else if(Dh(f,r,s,a,h))h.stopPropagation();else if(lu(r,h),s&4&&-1<Oh.indexOf(r)){for(;f!==null;){var g=za(f);if(g!==null&&iu(g),g=to(r,s,a,h),g===null&&qh(r,s,h,rs,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else qh(r,s,h,null,a)}}var rs=null;function to(r,s,a,h){if(rs=null,r=Ws(h),r=os(r),r!==null)if(s=Fn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Xi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return rs=r,null}function ka(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zl()){case Ji:return 1;case ni:return 4;case An:case Ra:return 16;case eu:return 536870912;default:return 16}default:return 16}}var yn=null,no=null,sn=null;function Na(){if(sn)return sn;var r,s=no,a=s.length,h,f="value"in yn?yn.value:yn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return sn=f.slice(r,1<h?1-h:void 0)}function ro(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ar(){return!0}function xa(){return!1}function bt(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ar:xa,this.isPropagationStopped=xa,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ar)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ar)},persist:function(){},isPersistent:ar}),s}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},io=bt(qn),lr=se({},qn,{view:0,detail:0}),Lh=bt(lr),so,Nr,ci,is=se({},lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ci&&(ci&&r.type==="mousemove"?(so=r.screenX-ci.screenX,Nr=r.screenY-ci.screenY):Nr=so=0,ci=r),so)},movementY:function(r){return"movementY"in r?r.movementY:Nr}}),oo=bt(is),Oa=se({},is,{dataTransfer:0}),hu=bt(Oa),ao=se({},lr,{relatedTarget:0}),lo=bt(ao),du=se({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),xr=bt(du),fu=se({},qn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),pu=bt(fu),mu=se({},qn,{data:0}),Da=bt(mu),uo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=gu[r])?!!s[r]:!1}function ur(){return yu}var u=se({},lr,{key:function(r){if(r.key){var s=uo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=ro(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Jt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(r){return r.type==="keypress"?ro(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ro(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=bt(u),_=se({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=bt(_),M=se({},lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),$=bt(M),ne=se({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=bt(ne),Et=se({},is,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=bt(Et),Pt=[9,13,27,32],pt=d&&"CompositionEvent"in window,Cn=null;d&&"documentMode"in document&&(Cn=document.documentMode);var _n=d&&"TextEvent"in window&&!Cn,ss=d&&(!pt||Cn&&8<Cn&&11>=Cn),co=" ",Im=!1;function Sm(r,s){switch(r){case"keyup":return Pt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ho=!1;function JE(r,s){switch(r){case"compositionend":return Rm(s);case"keypress":return s.which!==32?null:(Im=!0,co);case"textInput":return r=s.data,r===co&&Im?null:r;default:return null}}function ZE(r,s){if(ho)return r==="compositionend"||!pt&&Sm(r,s)?(r=Na(),sn=no=yn=null,ho=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ss&&s.locale!=="ko"?null:s.data;default:return null}}var eT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Am(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!eT[r.type]:s==="textarea"}function Pm(r,s,a,h){ir(h),s=Tu(s,"onChange"),0<s.length&&(a=new io("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ba=null,La=null;function tT(r){qm(r,0)}function _u(r){var s=yo(r);if(Yt(s))return r}function nT(r,s){if(r==="change")return s}var Cm=!1;if(d){var Vh;if(d){var Mh="oninput"in document;if(!Mh){var km=document.createElement("div");km.setAttribute("oninput","return;"),Mh=typeof km.oninput=="function"}Vh=Mh}else Vh=!1;Cm=Vh&&(!document.documentMode||9<document.documentMode)}function Nm(){ba&&(ba.detachEvent("onpropertychange",xm),La=ba=null)}function xm(r){if(r.propertyName==="value"&&_u(La)){var s=[];Pm(s,La,r,Ws(r)),Ea(tT,s)}}function rT(r,s,a){r==="focusin"?(Nm(),ba=s,La=a,ba.attachEvent("onpropertychange",xm)):r==="focusout"&&Nm()}function iT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return _u(La)}function sT(r,s){if(r==="click")return _u(s)}function oT(r,s){if(r==="input"||r==="change")return _u(s)}function aT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:aT;function Va(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function Om(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Dm(r,s){var a=Om(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Om(a)}}function bm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?bm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Lm(){for(var r=window,s=ei();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ei(r.document)}return s}function Uh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function lT(r){var s=Lm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&bm(a.ownerDocument.documentElement,a)){if(h!==null&&Uh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Dm(a,g);var w=Dm(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var uT=d&&"documentMode"in document&&11>=document.documentMode,fo=null,Fh=null,Ma=null,jh=!1;function Vm(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jh||fo==null||fo!==ei(h)||(h=fo,"selectionStart"in h&&Uh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ma&&Va(Ma,h)||(Ma=h,h=Tu(Fh,"onSelect"),0<h.length&&(s=new io("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=fo)))}function vu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var po={animationend:vu("Animation","AnimationEnd"),animationiteration:vu("Animation","AnimationIteration"),animationstart:vu("Animation","AnimationStart"),transitionend:vu("Transition","TransitionEnd")},Bh={},Mm={};d&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function wu(r){if(Bh[r])return Bh[r];if(!po[r])return r;var s=po[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Mm)return Bh[r]=s[a];return r}var Um=wu("animationend"),Fm=wu("animationiteration"),jm=wu("animationstart"),Bm=wu("transitionend"),zm=new Map,$m="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(r,s){zm.set(r,s),l(s,[r])}for(var zh=0;zh<$m.length;zh++){var $h=$m[zh],cT=$h.toLowerCase(),hT=$h[0].toUpperCase()+$h.slice(1);hi(cT,"on"+hT)}hi(Um,"onAnimationEnd"),hi(Fm,"onAnimationIteration"),hi(jm,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(Bm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Wm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Yl(h,s,void 0,r),r.currentTarget=null}function qm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],k=R.instance,z=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;Wm(f,R,z),g=k}else for(w=0;w<h.length;w++){if(R=h[w],k=R.instance,z=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;Wm(f,R,z),g=k}}}if(Un)throw r=Ta,Un=!1,Ta=null,r}function Qe(r,s){var a=s[Xh];a===void 0&&(a=s[Xh]=new Set);var h=r+"__bubble";a.has(h)||(Hm(s,r,2,!1),a.add(h))}function Wh(r,s,a){var h=0;s&&(h|=4),Hm(a,r,h,s)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function Fa(r){if(!r[Eu]){r[Eu]=!0,i.forEach(function(a){a!=="selectionchange"&&(dT.has(a)||Wh(a,!1,r),Wh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Eu]||(s[Eu]=!0,Wh("selectionchange",!1,s))}}function Hm(r,s,a,h){switch(ka(s)){case 1:var f=Ze;break;case 4:f=bh;break;default:f=Ca}a=f.bind(null,s,a,r),f=void 0,!Ks||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function qh(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;w=w.return}for(;R!==null;){if(w=os(R),w===null)return;if(k=w.tag,k===5||k===6){h=g=w;continue e}R=R.parentNode}}h=h.return}Ea(function(){var z=g,G=Ws(a),J=[];e:{var K=zm.get(r);if(K!==void 0){var oe=io,ce=r;switch(r){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":ce="focus",oe=lo;break;case"focusout":ce="blur",oe=lo;break;case"beforeblur":case"afterblur":oe=lo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=hu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=$;break;case Um:case Fm:case jm:oe=xr;break;case Bm:oe=$e;break;case"scroll":oe=Lh;break;case"wheel":oe=Ve;break;case"copy":case"cut":case"paste":oe=pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=T}var de=(s&4)!==0,ht=!de&&r==="scroll",U=de?K!==null?K+"Capture":null:K;de=[];for(var x=z,j;x!==null;){j=x;var Z=j.stateNode;if(j.tag===5&&Z!==null&&(j=Z,U!==null&&(Z=ct(x,U),Z!=null&&de.push(ja(x,Z,j)))),ht)break;x=x.return}0<de.length&&(K=new oe(K,ce,null,a,G),J.push({event:K,listeners:de}))}}if((s&7)===0){e:{if(K=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",K&&a!==Ki&&(ce=a.relatedTarget||a.fromElement)&&(os(ce)||ce[Or]))break e;if((oe||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,oe?(ce=a.relatedTarget||a.toElement,oe=z,ce=ce?os(ce):null,ce!==null&&(ht=Fn(ce),ce!==ht||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=z),oe!==ce)){if(de=oo,Z="onMouseLeave",U="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(de=T,Z="onPointerLeave",U="onPointerEnter",x="pointer"),ht=oe==null?K:yo(oe),j=ce==null?K:yo(ce),K=new de(Z,x+"leave",oe,a,G),K.target=ht,K.relatedTarget=j,Z=null,os(G)===z&&(de=new de(U,x+"enter",ce,a,G),de.target=j,de.relatedTarget=ht,Z=de),ht=Z,oe&&ce)t:{for(de=oe,U=ce,x=0,j=de;j;j=mo(j))x++;for(j=0,Z=U;Z;Z=mo(Z))j++;for(;0<x-j;)de=mo(de),x--;for(;0<j-x;)U=mo(U),j--;for(;x--;){if(de===U||U!==null&&de===U.alternate)break t;de=mo(de),U=mo(U)}de=null}else de=null;oe!==null&&Km(J,K,oe,de,!1),ce!==null&&ht!==null&&Km(J,ht,ce,de,!0)}}e:{if(K=z?yo(z):window,oe=K.nodeName&&K.nodeName.toLowerCase(),oe==="select"||oe==="input"&&K.type==="file")var pe=nT;else if(Am(K))if(Cm)pe=oT;else{pe=iT;var _e=rT}else(oe=K.nodeName)&&oe.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(pe=sT);if(pe&&(pe=pe(r,z))){Pm(J,pe,a,G);break e}_e&&_e(r,K,z),r==="focusout"&&(_e=K._wrapperState)&&_e.controlled&&K.type==="number"&&Bs(K,"number",K.value)}switch(_e=z?yo(z):window,r){case"focusin":(Am(_e)||_e.contentEditable==="true")&&(fo=_e,Fh=z,Ma=null);break;case"focusout":Ma=Fh=fo=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,Vm(J,a,G);break;case"selectionchange":if(uT)break;case"keydown":case"keyup":Vm(J,a,G)}var ve;if(pt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ho?Sm(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ss&&a.locale!=="ko"&&(ho||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ho&&(ve=Na()):(yn=G,no="value"in yn?yn.value:yn.textContent,ho=!0)),_e=Tu(z,Ee),0<_e.length&&(Ee=new Da(Ee,r,null,a,G),J.push({event:Ee,listeners:_e}),ve?Ee.data=ve:(ve=Rm(a),ve!==null&&(Ee.data=ve)))),(ve=_n?JE(r,a):ZE(r,a))&&(z=Tu(z,"onBeforeInput"),0<z.length&&(G=new Da("onBeforeInput","beforeinput",null,a,G),J.push({event:G,listeners:z}),G.data=ve))}qm(J,s)})}function ja(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Tu(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ct(r,a),g!=null&&h.unshift(ja(r,g,f)),g=ct(r,s),g!=null&&h.push(ja(r,g,f))),r=r.return}return h}function mo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Km(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var R=a,k=R.alternate,z=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&z!==null&&(R=z,f?(k=ct(a,g),k!=null&&w.unshift(ja(a,k,R))):f||(k=ct(a,g),k!=null&&w.push(ja(a,k,R)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var fT=/\r\n?/g,pT=/\u0000|\uFFFD/g;function Gm(r){return(typeof r=="string"?r:""+r).replace(fT,`
`).replace(pT,"")}function Iu(r,s,a){if(s=Gm(s),Gm(r)!==s&&a)throw Error(t(425))}function Su(){}var Hh=null,Kh=null;function Gh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,mT=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,gT=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(r){return Qm.resolve(null).then(r).catch(yT)}:Qh;function yT(r){setTimeout(function(){throw r})}function Yh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Wn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Wn(s)}function di(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Ym(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var go=Math.random().toString(36).slice(2),cr="__reactFiber$"+go,Ba="__reactProps$"+go,Or="__reactContainer$"+go,Xh="__reactEvents$"+go,_T="__reactListeners$"+go,vT="__reactHandles$"+go;function os(r){var s=r[cr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Or]||a[cr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Ym(r);r!==null;){if(a=r[cr])return a;r=Ym(r)}return s}r=a,a=r.parentNode}return null}function za(r){return r=r[cr]||r[Or],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function yo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Ru(r){return r[Ba]||null}var Jh=[],_o=-1;function fi(r){return{current:r}}function Ye(r){0>_o||(r.current=Jh[_o],Jh[_o]=null,_o--)}function Ge(r,s){_o++,Jh[_o]=r.current,r.current=s}var pi={},Bt=fi(pi),on=fi(!1),as=pi;function vo(r,s){var a=r.type.contextTypes;if(!a)return pi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function an(r){return r=r.childContextTypes,r!=null}function Au(){Ye(on),Ye(Bt)}function Xm(r,s,a){if(Bt.current!==pi)throw Error(t(168));Ge(Bt,s),Ge(on,a)}function Jm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,xe(r)||"Unknown",f));return se({},a,h)}function Pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||pi,as=Bt.current,Ge(Bt,r),Ge(on,on.current),!0}function Zm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Jm(r,s,as),h.__reactInternalMemoizedMergedChildContext=r,Ye(on),Ye(Bt),Ge(Bt,r)):Ye(on),Ge(on,a)}var Dr=null,Cu=!1,Zh=!1;function eg(r){Dr===null?Dr=[r]:Dr.push(r)}function wT(r){Cu=!0,eg(r)}function mi(){if(!Zh&&Dr!==null){Zh=!0;var r=0,s=De;try{var a=Dr;for(De=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Dr=null,Cu=!1}catch(f){throw Dr!==null&&(Dr=Dr.slice(r+1)),Xs(Ji,mi),f}finally{De=s,Zh=!1}}return null}var wo=[],Eo=0,ku=null,Nu=0,kn=[],Nn=0,ls=null,br=1,Lr="";function us(r,s){wo[Eo++]=Nu,wo[Eo++]=ku,ku=r,Nu=s}function tg(r,s,a){kn[Nn++]=br,kn[Nn++]=Lr,kn[Nn++]=ls,ls=r;var h=br;r=Lr;var f=32-Xt(h)-1;h&=~(1<<f),a+=1;var g=32-Xt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,br=1<<32-Xt(s)+f|a<<f|h,Lr=g+r}else br=1<<g|a<<f|h,Lr=r}function ed(r){r.return!==null&&(us(r,1),tg(r,1,0))}function td(r){for(;r===ku;)ku=wo[--Eo],wo[Eo]=null,Nu=wo[--Eo],wo[Eo]=null;for(;r===ls;)ls=kn[--Nn],kn[Nn]=null,Lr=kn[--Nn],kn[Nn]=null,br=kn[--Nn],kn[Nn]=null}var vn=null,wn=null,et=!1,Kn=null;function ng(r,s){var a=bn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function rg(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,vn=r,wn=di(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,vn=r,wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ls!==null?{id:br,overflow:Lr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=bn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,vn=r,wn=null,!0):!1;default:return!1}}function nd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function rd(r){if(et){var s=wn;if(s){var a=s;if(!rg(r,s)){if(nd(r))throw Error(t(418));s=di(a.nextSibling);var h=vn;s&&rg(r,s)?ng(h,a):(r.flags=r.flags&-4097|2,et=!1,vn=r)}}else{if(nd(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,vn=r}}}function ig(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;vn=r}function xu(r){if(r!==vn)return!1;if(!et)return ig(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Gh(r.type,r.memoizedProps)),s&&(s=wn)){if(nd(r))throw sg(),Error(t(418));for(;s;)ng(r,s),s=di(s.nextSibling)}if(ig(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){wn=di(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}wn=null}}else wn=vn?di(r.stateNode.nextSibling):null;return!0}function sg(){for(var r=wn;r;)r=di(r.nextSibling)}function To(){wn=vn=null,et=!1}function id(r){Kn===null?Kn=[r]:Kn.push(r)}var ET=te.ReactCurrentBatchConfig;function $a(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Ou(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function og(r){var s=r._init;return s(r._payload)}function ag(r){function s(U,x){if(r){var j=U.deletions;j===null?(U.deletions=[x],U.flags|=16):j.push(x)}}function a(U,x){if(!r)return null;for(;x!==null;)s(U,x),x=x.sibling;return null}function h(U,x){for(U=new Map;x!==null;)x.key!==null?U.set(x.key,x):U.set(x.index,x),x=x.sibling;return U}function f(U,x){return U=Ii(U,x),U.index=0,U.sibling=null,U}function g(U,x,j){return U.index=j,r?(j=U.alternate,j!==null?(j=j.index,j<x?(U.flags|=2,x):j):(U.flags|=2,x)):(U.flags|=1048576,x)}function w(U){return r&&U.alternate===null&&(U.flags|=2),U}function R(U,x,j,Z){return x===null||x.tag!==6?(x=Qd(j,U.mode,Z),x.return=U,x):(x=f(x,j),x.return=U,x)}function k(U,x,j,Z){var pe=j.type;return pe===P?G(U,x,j.props.children,Z,j.key):x!==null&&(x.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===At&&og(pe)===x.type)?(Z=f(x,j.props),Z.ref=$a(U,x,j),Z.return=U,Z):(Z=nc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=$a(U,x,j),Z.return=U,Z)}function z(U,x,j,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==j.containerInfo||x.stateNode.implementation!==j.implementation?(x=Yd(j,U.mode,Z),x.return=U,x):(x=f(x,j.children||[]),x.return=U,x)}function G(U,x,j,Z,pe){return x===null||x.tag!==7?(x=ys(j,U.mode,Z,pe),x.return=U,x):(x=f(x,j),x.return=U,x)}function J(U,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Qd(""+x,U.mode,j),x.return=U,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ge:return j=nc(x.type,x.key,x.props,null,U.mode,j),j.ref=$a(U,null,x),j.return=U,j;case ae:return x=Yd(x,U.mode,j),x.return=U,x;case At:var Z=x._init;return J(U,Z(x._payload),j)}if(Ir(x)||he(x))return x=ys(x,U.mode,j,null),x.return=U,x;Ou(U,x)}return null}function K(U,x,j,Z){var pe=x!==null?x.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return pe!==null?null:R(U,x,""+j,Z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ge:return j.key===pe?k(U,x,j,Z):null;case ae:return j.key===pe?z(U,x,j,Z):null;case At:return pe=j._init,K(U,x,pe(j._payload),Z)}if(Ir(j)||he(j))return pe!==null?null:G(U,x,j,Z,null);Ou(U,j)}return null}function oe(U,x,j,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return U=U.get(j)||null,R(x,U,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case ge:return U=U.get(Z.key===null?j:Z.key)||null,k(x,U,Z,pe);case ae:return U=U.get(Z.key===null?j:Z.key)||null,z(x,U,Z,pe);case At:var _e=Z._init;return oe(U,x,j,_e(Z._payload),pe)}if(Ir(Z)||he(Z))return U=U.get(j)||null,G(x,U,Z,pe,null);Ou(x,Z)}return null}function ce(U,x,j,Z){for(var pe=null,_e=null,ve=x,Ee=x=0,Nt=null;ve!==null&&Ee<j.length;Ee++){ve.index>Ee?(Nt=ve,ve=null):Nt=ve.sibling;var je=K(U,ve,j[Ee],Z);if(je===null){ve===null&&(ve=Nt);break}r&&ve&&je.alternate===null&&s(U,ve),x=g(je,x,Ee),_e===null?pe=je:_e.sibling=je,_e=je,ve=Nt}if(Ee===j.length)return a(U,ve),et&&us(U,Ee),pe;if(ve===null){for(;Ee<j.length;Ee++)ve=J(U,j[Ee],Z),ve!==null&&(x=g(ve,x,Ee),_e===null?pe=ve:_e.sibling=ve,_e=ve);return et&&us(U,Ee),pe}for(ve=h(U,ve);Ee<j.length;Ee++)Nt=oe(ve,U,Ee,j[Ee],Z),Nt!==null&&(r&&Nt.alternate!==null&&ve.delete(Nt.key===null?Ee:Nt.key),x=g(Nt,x,Ee),_e===null?pe=Nt:_e.sibling=Nt,_e=Nt);return r&&ve.forEach(function(Si){return s(U,Si)}),et&&us(U,Ee),pe}function de(U,x,j,Z){var pe=he(j);if(typeof pe!="function")throw Error(t(150));if(j=pe.call(j),j==null)throw Error(t(151));for(var _e=pe=null,ve=x,Ee=x=0,Nt=null,je=j.next();ve!==null&&!je.done;Ee++,je=j.next()){ve.index>Ee?(Nt=ve,ve=null):Nt=ve.sibling;var Si=K(U,ve,je.value,Z);if(Si===null){ve===null&&(ve=Nt);break}r&&ve&&Si.alternate===null&&s(U,ve),x=g(Si,x,Ee),_e===null?pe=Si:_e.sibling=Si,_e=Si,ve=Nt}if(je.done)return a(U,ve),et&&us(U,Ee),pe;if(ve===null){for(;!je.done;Ee++,je=j.next())je=J(U,je.value,Z),je!==null&&(x=g(je,x,Ee),_e===null?pe=je:_e.sibling=je,_e=je);return et&&us(U,Ee),pe}for(ve=h(U,ve);!je.done;Ee++,je=j.next())je=oe(ve,U,Ee,je.value,Z),je!==null&&(r&&je.alternate!==null&&ve.delete(je.key===null?Ee:je.key),x=g(je,x,Ee),_e===null?pe=je:_e.sibling=je,_e=je);return r&&ve.forEach(function(eI){return s(U,eI)}),et&&us(U,Ee),pe}function ht(U,x,j,Z){if(typeof j=="object"&&j!==null&&j.type===P&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case ge:e:{for(var pe=j.key,_e=x;_e!==null;){if(_e.key===pe){if(pe=j.type,pe===P){if(_e.tag===7){a(U,_e.sibling),x=f(_e,j.props.children),x.return=U,U=x;break e}}else if(_e.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===At&&og(pe)===_e.type){a(U,_e.sibling),x=f(_e,j.props),x.ref=$a(U,_e,j),x.return=U,U=x;break e}a(U,_e);break}else s(U,_e);_e=_e.sibling}j.type===P?(x=ys(j.props.children,U.mode,Z,j.key),x.return=U,U=x):(Z=nc(j.type,j.key,j.props,null,U.mode,Z),Z.ref=$a(U,x,j),Z.return=U,U=Z)}return w(U);case ae:e:{for(_e=j.key;x!==null;){if(x.key===_e)if(x.tag===4&&x.stateNode.containerInfo===j.containerInfo&&x.stateNode.implementation===j.implementation){a(U,x.sibling),x=f(x,j.children||[]),x.return=U,U=x;break e}else{a(U,x);break}else s(U,x);x=x.sibling}x=Yd(j,U.mode,Z),x.return=U,U=x}return w(U);case At:return _e=j._init,ht(U,x,_e(j._payload),Z)}if(Ir(j))return ce(U,x,j,Z);if(he(j))return de(U,x,j,Z);Ou(U,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,x!==null&&x.tag===6?(a(U,x.sibling),x=f(x,j),x.return=U,U=x):(a(U,x),x=Qd(j,U.mode,Z),x.return=U,U=x),w(U)):a(U,x)}return ht}var Io=ag(!0),lg=ag(!1),Du=fi(null),bu=null,So=null,sd=null;function od(){sd=So=bu=null}function ad(r){var s=Du.current;Ye(Du),r._currentValue=s}function ld(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Ro(r,s){bu=r,sd=So=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(ln=!0),r.firstContext=null)}function xn(r){var s=r._currentValue;if(sd!==r)if(r={context:r,memoizedValue:s,next:null},So===null){if(bu===null)throw Error(t(308));So=r,bu.dependencies={lanes:0,firstContext:r}}else So=So.next=r;return s}var cs=null;function ud(r){cs===null?cs=[r]:cs.push(r)}function ug(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,ud(s)):(a.next=f.next,f.next=a),s.interleaved=a,Vr(r,h)}function Vr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var gi=!1;function cd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function yi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Vr(r,a)}return f=h.interleaved,f===null?(s.next=s,ud(h)):(s.next=f.next,f.next=s),h.interleaved=s,Vr(r,a)}function Lu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,oi(r,a)}}function hg(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Vu(r,s,a,h){var f=r.updateQueue;gi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,z=k.next;k.next=null,w===null?g=z:w.next=z,w=k;var G=r.alternate;G!==null&&(G=G.updateQueue,R=G.lastBaseUpdate,R!==w&&(R===null?G.firstBaseUpdate=z:R.next=z,G.lastBaseUpdate=k))}if(g!==null){var J=f.baseState;w=0,G=z=k=null,R=g;do{var K=R.lane,oe=R.eventTime;if((h&K)===K){G!==null&&(G=G.next={eventTime:oe,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var ce=r,de=R;switch(K=s,oe=a,de.tag){case 1:if(ce=de.payload,typeof ce=="function"){J=ce.call(oe,J,K);break e}J=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=de.payload,K=typeof ce=="function"?ce.call(oe,J,K):ce,K==null)break e;J=se({},J,K);break e;case 2:gi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,K=f.effects,K===null?f.effects=[R]:K.push(R))}else oe={eventTime:oe,lane:K,tag:R.tag,payload:R.payload,callback:R.callback,next:null},G===null?(z=G=oe,k=J):G=G.next=oe,w|=K;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;K=R,R=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);if(G===null&&(k=J),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=G,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);fs|=w,r.lanes=w,r.memoizedState=J}}function dg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Wa={},hr=fi(Wa),qa=fi(Wa),Ha=fi(Wa);function hs(r){if(r===Wa)throw Error(t(174));return r}function hd(r,s){switch(Ge(Ha,s),Ge(qa,r),Ge(hr,Wa),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:wt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=wt(s,r)}Ye(hr),Ge(hr,s)}function Ao(){Ye(hr),Ye(qa),Ye(Ha)}function fg(r){hs(Ha.current);var s=hs(hr.current),a=wt(s,r.type);s!==a&&(Ge(qa,r),Ge(hr,a))}function dd(r){qa.current===r&&(Ye(hr),Ye(qa))}var nt=fi(0);function Mu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var fd=[];function pd(){for(var r=0;r<fd.length;r++)fd[r]._workInProgressVersionPrimary=null;fd.length=0}var Uu=te.ReactCurrentDispatcher,md=te.ReactCurrentBatchConfig,ds=0,rt=null,Tt=null,Ct=null,Fu=!1,Ka=!1,Ga=0,TT=0;function zt(){throw Error(t(321))}function gd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Hn(r[a],s[a]))return!1;return!0}function yd(r,s,a,h,f,g){if(ds=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Uu.current=r===null||r.memoizedState===null?AT:PT,r=a(h,f),Ka){g=0;do{if(Ka=!1,Ga=0,25<=g)throw Error(t(301));g+=1,Ct=Tt=null,s.updateQueue=null,Uu.current=CT,r=a(h,f)}while(Ka)}if(Uu.current=zu,s=Tt!==null&&Tt.next!==null,ds=0,Ct=Tt=rt=null,Fu=!1,s)throw Error(t(300));return r}function _d(){var r=Ga!==0;return Ga=0,r}function dr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function On(){if(Tt===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Tt.next;var s=Ct===null?rt.memoizedState:Ct.next;if(s!==null)Ct=s,Tt=r;else{if(r===null)throw Error(t(310));Tt=r,r={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function Qa(r,s){return typeof s=="function"?s(r):s}function vd(r){var s=On(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=Tt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,k=null,z=g;do{var G=z.lane;if((ds&G)===G)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var J={lane:G,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(R=k=J,w=h):k=k.next=J,rt.lanes|=G,fs|=G}z=z.next}while(z!==null&&z!==g);k===null?w=h:k.next=R,Hn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,fs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function wd(r){var s=On(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Hn(g,s.memoizedState)||(ln=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function pg(){}function mg(r,s){var a=rt,h=On(),f=s(),g=!Hn(h.memoizedState,f);if(g&&(h.memoizedState=f,ln=!0),h=h.queue,Ed(_g.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,Ya(9,yg.bind(null,a,h,f,s),void 0,null),kt===null)throw Error(t(349));(ds&30)!==0||gg(a,s,f)}return f}function gg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function yg(r,s,a,h){s.value=a,s.getSnapshot=h,vg(s)&&wg(r)}function _g(r,s,a){return a(function(){vg(s)&&wg(r)})}function vg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Hn(r,a)}catch{return!0}}function wg(r){var s=Vr(r,1);s!==null&&Xn(s,r,1,-1)}function Eg(r){var s=dr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:r},s.queue=r,r=r.dispatch=RT.bind(null,rt,r),[s.memoizedState,r]}function Ya(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Tg(){return On().memoizedState}function ju(r,s,a,h){var f=dr();rt.flags|=r,f.memoizedState=Ya(1|s,a,void 0,h===void 0?null:h)}function Bu(r,s,a,h){var f=On();h=h===void 0?null:h;var g=void 0;if(Tt!==null){var w=Tt.memoizedState;if(g=w.destroy,h!==null&&gd(h,w.deps)){f.memoizedState=Ya(s,a,g,h);return}}rt.flags|=r,f.memoizedState=Ya(1|s,a,g,h)}function Ig(r,s){return ju(8390656,8,r,s)}function Ed(r,s){return Bu(2048,8,r,s)}function Sg(r,s){return Bu(4,2,r,s)}function Rg(r,s){return Bu(4,4,r,s)}function Ag(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Pg(r,s,a){return a=a!=null?a.concat([r]):null,Bu(4,4,Ag.bind(null,s,r),a)}function Td(){}function Cg(r,s){var a=On();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&gd(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function kg(r,s){var a=On();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&gd(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Ng(r,s,a){return(ds&21)===0?(r.baseState&&(r.baseState=!1,ln=!0),r.memoizedState=a):(Hn(a,s)||(a=ts(),rt.lanes|=a,fs|=a,r.baseState=!0),s)}function IT(r,s){var a=De;De=a!==0&&4>a?a:4,r(!0);var h=md.transition;md.transition={};try{r(!1),s()}finally{De=a,md.transition=h}}function xg(){return On().memoizedState}function ST(r,s,a){var h=Ei(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Og(r))Dg(s,a);else if(a=ug(r,s,a,h),a!==null){var f=en();Xn(a,r,h,f),bg(a,s,h)}}function RT(r,s,a){var h=Ei(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Og(r))Dg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,a);if(f.hasEagerState=!0,f.eagerState=R,Hn(R,w)){var k=s.interleaved;k===null?(f.next=f,ud(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=ug(r,s,f,h),a!==null&&(f=en(),Xn(a,r,h,f),bg(a,s,h))}}function Og(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function Dg(r,s){Ka=Fu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function bg(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,oi(r,a)}}var zu={readContext:xn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},AT={readContext:xn,useCallback:function(r,s){return dr().memoizedState=[r,s===void 0?null:s],r},useContext:xn,useEffect:Ig,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,ju(4194308,4,Ag.bind(null,s,r),a)},useLayoutEffect:function(r,s){return ju(4194308,4,r,s)},useInsertionEffect:function(r,s){return ju(4,2,r,s)},useMemo:function(r,s){var a=dr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=dr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=ST.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=dr();return r={current:r},s.memoizedState=r},useState:Eg,useDebugValue:Td,useDeferredValue:function(r){return dr().memoizedState=r},useTransition:function(){var r=Eg(!1),s=r[0];return r=IT.bind(null,r[1]),dr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=rt,f=dr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));(ds&30)!==0||gg(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Ig(_g.bind(null,h,g,r),[r]),h.flags|=2048,Ya(9,yg.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=dr(),s=kt.identifierPrefix;if(et){var a=Lr,h=br;a=(h&~(1<<32-Xt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ga++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=TT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},PT={readContext:xn,useCallback:Cg,useContext:xn,useEffect:Ed,useImperativeHandle:Pg,useInsertionEffect:Sg,useLayoutEffect:Rg,useMemo:kg,useReducer:vd,useRef:Tg,useState:function(){return vd(Qa)},useDebugValue:Td,useDeferredValue:function(r){var s=On();return Ng(s,Tt.memoizedState,r)},useTransition:function(){var r=vd(Qa)[0],s=On().memoizedState;return[r,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:xg,unstable_isNewReconciler:!1},CT={readContext:xn,useCallback:Cg,useContext:xn,useEffect:Ed,useImperativeHandle:Pg,useInsertionEffect:Sg,useLayoutEffect:Rg,useMemo:kg,useReducer:wd,useRef:Tg,useState:function(){return wd(Qa)},useDebugValue:Td,useDeferredValue:function(r){var s=On();return Tt===null?s.memoizedState=r:Ng(s,Tt.memoizedState,r)},useTransition:function(){var r=wd(Qa)[0],s=On().memoizedState;return[r,s]},useMutableSource:pg,useSyncExternalStore:mg,useId:xg,unstable_isNewReconciler:!1};function Gn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Id(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var $u={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ei(r),g=Mr(h,f);g.payload=s,a!=null&&(g.callback=a),s=yi(r,g,f),s!==null&&(Xn(s,r,f,h),Lu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ei(r),g=Mr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=yi(r,g,f),s!==null&&(Xn(s,r,f,h),Lu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=en(),h=Ei(r),f=Mr(a,h);f.tag=2,s!=null&&(f.callback=s),s=yi(r,f,h),s!==null&&(Xn(s,r,h,a),Lu(s,r,h))}};function Lg(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Va(a,h)||!Va(f,g):!0}function Vg(r,s,a){var h=!1,f=pi,g=s.contextType;return typeof g=="object"&&g!==null?g=xn(g):(f=an(s)?as:Bt.current,h=s.contextTypes,g=(h=h!=null)?vo(r,f):pi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=$u,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Mg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&$u.enqueueReplaceState(s,s.state,null)}function Sd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},cd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=xn(g):(g=an(s)?as:Bt.current,f.context=vo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Id(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&$u.enqueueReplaceState(f,f.state,null),Vu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Po(r,s){try{var a="",h=s;do a+=Ae(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Rd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Ad(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var kT=typeof WeakMap=="function"?WeakMap:Map;function Ug(r,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Yu||(Yu=!0,Bd=h),Ad(r,s)},a}function Fg(r,s,a){a=Mr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Ad(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Ad(r,s),typeof h!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function jg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new kT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=$T.bind(null,r,s,a),s.then(r,r))}function Bg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function zg(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,yi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var NT=te.ReactCurrentOwner,ln=!1;function Zt(r,s,a,h){s.child=r===null?lg(s,null,a,h):Io(s,r.child,a,h)}function $g(r,s,a,h,f){a=a.render;var g=s.ref;return Ro(s,f),h=yd(r,s,a,h,g,f),a=_d(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ur(r,s,f)):(et&&a&&ed(s),s.flags|=1,Zt(r,s,h,f),s.child)}function Wg(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!Gd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,qg(r,s,g,h,f)):(r=nc(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Va,a(w,h)&&r.ref===s.ref)return Ur(r,s,f)}return s.flags|=1,r=Ii(g,h),r.ref=s.ref,r.return=s,s.child=r}function qg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Va(g,h)&&r.ref===s.ref)if(ln=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(ln=!0);else return s.lanes=r.lanes,Ur(r,s,f)}return Pd(r,s,a,h,f)}function Hg(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(ko,En),En|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(ko,En),En|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Ge(ko,En),En|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Ge(ko,En),En|=h;return Zt(r,s,f,a),s.child}function Kg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Pd(r,s,a,h,f){var g=an(a)?as:Bt.current;return g=vo(s,g),Ro(s,f),a=yd(r,s,a,h,g,f),h=_d(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Ur(r,s,f)):(et&&h&&ed(s),s.flags|=1,Zt(r,s,a,f),s.child)}function Gg(r,s,a,h,f){if(an(a)){var g=!0;Pu(s)}else g=!1;if(Ro(s,f),s.stateNode===null)qu(r,s),Vg(s,a,h),Sd(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var k=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=xn(z):(z=an(a)?as:Bt.current,z=vo(s,z));var G=a.getDerivedStateFromProps,J=typeof G=="function"||typeof w.getSnapshotBeforeUpdate=="function";J||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||k!==z)&&Mg(s,w,h,z),gi=!1;var K=s.memoizedState;w.state=K,Vu(s,h,w,f),k=s.memoizedState,R!==h||K!==k||on.current||gi?(typeof G=="function"&&(Id(s,a,G,h),k=s.memoizedState),(R=gi||Lg(s,a,R,h,K,k,z))?(J||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),w.props=h,w.state=k,w.context=z,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,cg(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Gn(s.type,R),w.props=z,J=s.pendingProps,K=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=xn(k):(k=an(a)?as:Bt.current,k=vo(s,k));var oe=a.getDerivedStateFromProps;(G=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==J||K!==k)&&Mg(s,w,h,k),gi=!1,K=s.memoizedState,w.state=K,Vu(s,h,w,f);var ce=s.memoizedState;R!==J||K!==ce||on.current||gi?(typeof oe=="function"&&(Id(s,a,oe,h),ce=s.memoizedState),(z=gi||Lg(s,a,z,h,K,ce,k)||!1)?(G||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,ce,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,ce,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=ce),w.props=h,w.state=ce,w.context=k,h=z):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),h=!1)}return Cd(r,s,a,h,g,f)}function Cd(r,s,a,h,f,g){Kg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Zm(s,a,!1),Ur(r,s,g);h=s.stateNode,NT.current=s;var R=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Io(s,r.child,null,g),s.child=Io(s,null,R,g)):Zt(r,s,R,g),s.memoizedState=h.state,f&&Zm(s,a,!0),s.child}function Qg(r){var s=r.stateNode;s.pendingContext?Xm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Xm(r,s.context,!1),hd(r,s.containerInfo)}function Yg(r,s,a,h,f){return To(),id(f),s.flags|=256,Zt(r,s,a,h),s.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Nd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Xg(r,s,a){var h=s.pendingProps,f=nt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ge(nt,f&1),r===null)return rd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=rc(w,h,0,null),r=ys(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Nd(a),s.memoizedState=kd,r):xd(s,w));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return xT(r,s,w,h,R,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Ii(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=Ii(R,g):(g=ys(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?Nd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=kd,h}return g=r.child,r=g.sibling,h=Ii(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function xd(r,s){return s=rc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Wu(r,s,a,h){return h!==null&&id(h),Io(s,r.child,null,a),r=xd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function xT(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=Rd(Error(t(422))),Wu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=rc({mode:"visible",children:h.children},f,0,null),g=ys(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Io(s,r.child,null,w),s.child.memoizedState=Nd(w),s.memoizedState=kd,g);if((s.mode&1)===0)return Wu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Rd(g,h,void 0),Wu(r,s,w,h)}if(R=(w&r.childLanes)!==0,ln||R){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Vr(r,f),Xn(h,r,f,-1))}return Kd(),h=Rd(Error(t(421))),Wu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=WT.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,wn=di(f.nextSibling),vn=s,et=!0,Kn=null,r!==null&&(kn[Nn++]=br,kn[Nn++]=Lr,kn[Nn++]=ls,br=r.id,Lr=r.overflow,ls=s),s=xd(s,h.children),s.flags|=4096,s)}function Jg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),ld(r.return,s,a)}function Od(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Zg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Zt(r,s,h.children,a),h=nt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Jg(r,a,s);else if(r.tag===19)Jg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ge(nt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Mu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Od(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Mu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Od(s,!0,a,null,g);break;case"together":Od(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function qu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Ur(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),fs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ii(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ii(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function OT(r,s,a){switch(s.tag){case 3:Qg(s),To();break;case 5:fg(s);break;case 1:an(s.type)&&Pu(s);break;case 4:hd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ge(Du,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ge(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Xg(r,s,a):(Ge(nt,nt.current&1),r=Ur(r,s,a),r!==null?r.sibling:null);Ge(nt,nt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Zg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,Hg(r,s,a)}return Ur(r,s,a)}var ey,Dd,ty,ny;ey=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Dd=function(){},ty=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,hs(hr.current);var g=null;switch(a){case"input":f=Wi(r,f),h=Wi(r,h),g=[];break;case"select":f=se({},f,{value:void 0}),h=se({},h,{value:void 0}),g=[];break;case"textarea":f=ha(r,f),h=ha(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Su)}ya(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var R=f[z];for(w in R)R.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var k=h[z];if(R=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&k!==R&&(k!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&R[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Qe("scroll",r),g||R===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},ny=function(r,s,a,h){a!==h&&(s.flags|=4)};function Xa(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function $t(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function DT(r,s,a){var h=s.pendingProps;switch(td(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return an(s.type)&&Au(),$t(s),null;case 3:return h=s.stateNode,Ao(),Ye(on),Ye(Bt),pd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(xu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Kn!==null&&(Wd(Kn),Kn=null))),Dd(r,s),$t(s),null;case 5:dd(s);var f=hs(Ha.current);if(a=s.type,r!==null&&s.stateNode!=null)ty(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(r=hs(hr.current),xu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[cr]=s,h[Ba]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(f=0;f<Ua.length;f++)Qe(Ua[f],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":js(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":zs(h,g),Qe("invalid",h)}ya(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Iu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Iu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&Qe("scroll",h)}switch(a){case"input":nn(h),Ql(h,g,!0);break;case"textarea":nn(h),da(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Su)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[cr]=s,r[Ba]=h,ey(r,s,!1,!1),s.stateNode=r;e:{switch(w=_a(a,h),a){case"dialog":Qe("cancel",r),Qe("close",r),f=h;break;case"iframe":case"object":case"embed":Qe("load",r),f=h;break;case"video":case"audio":for(f=0;f<Ua.length;f++)Qe(Ua[f],r);f=h;break;case"source":Qe("error",r),f=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=h;break;case"details":Qe("toggle",r),f=h;break;case"input":js(r,h),f=Wi(r,h),Qe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=se({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":zs(r,h),f=ha(r,h),Qe("invalid",r);break;default:f=h}ya(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?ma(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&fa(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ti(r,k):typeof k=="number"&&ti(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Qe("scroll",r):k!=null&&Y(r,g,k,w))}switch(a){case"input":nn(r),Ql(r,h,!1);break;case"textarea":nn(r),da(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ne(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Sr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Sr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Su)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(r&&s.stateNode!=null)ny(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=hs(Ha.current),hs(hr.current),xu(s)){if(h=s.stateNode,a=s.memoizedProps,h[cr]=s,(g=h.nodeValue!==a)&&(r=vn,r!==null))switch(r.tag){case 3:Iu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Iu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[cr]=s,s.stateNode=h}return $t(s),null;case 13:if(Ye(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)sg(),To(),s.flags|=98560,g=!1;else if(g=xu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[cr]=s}else To(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),g=!1}else Kn!==null&&(Wd(Kn),Kn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?It===0&&(It=3):Kd())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return Ao(),Dd(r,s),r===null&&Fa(s.stateNode.containerInfo),$t(s),null;case 10:return ad(s.type._context),$t(s),null;case 17:return an(s.type)&&Au(),$t(s),null;case 19:if(Ye(nt),g=s.memoizedState,g===null)return $t(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Xa(g,!1);else{if(It!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Mu(r),w!==null){for(s.flags|=128,Xa(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ke()>No&&(s.flags|=128,h=!0,Xa(g,!1),s.lanes=4194304)}else{if(!h)if(r=Mu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Xa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!et)return $t(s),null}else 2*Ke()-g.renderingStartTime>No&&a!==1073741824&&(s.flags|=128,h=!0,Xa(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ke(),s.sibling=null,a=nt.current,Ge(nt,h?a&1|2:a&1),s):($t(s),null);case 22:case 23:return Hd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(En&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function bT(r,s){switch(td(s),s.tag){case 1:return an(s.type)&&Au(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Ao(),Ye(on),Ye(Bt),pd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return dd(s),null;case 13:if(Ye(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));To()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(nt),null;case 4:return Ao(),null;case 10:return ad(s.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var Hu=!1,Wt=!1,LT=typeof WeakSet=="function"?WeakSet:Set,le=null;function Co(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){ot(r,s,h)}else a.current=null}function bd(r,s,a){try{a()}catch(h){ot(r,s,h)}}var ry=!1;function VT(r,s){if(Hh=ui,r=Lm(),Uh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,R=-1,k=-1,z=0,G=0,J=r,K=null;t:for(;;){for(var oe;J!==a||f!==0&&J.nodeType!==3||(R=w+f),J!==g||h!==0&&J.nodeType!==3||(k=w+h),J.nodeType===3&&(w+=J.nodeValue.length),(oe=J.firstChild)!==null;)K=J,J=oe;for(;;){if(J===r)break t;if(K===a&&++z===f&&(R=w),K===g&&++G===h&&(k=w),(oe=J.nextSibling)!==null)break;J=K,K=J.parentNode}J=oe}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kh={focusedElem:r,selectionRange:a},ui=!1,le=s;le!==null;)if(s=le,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,le=r;else for(;le!==null;){s=le;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var de=ce.memoizedProps,ht=ce.memoizedState,U=s.stateNode,x=U.getSnapshotBeforeUpdate(s.elementType===s.type?de:Gn(s.type,de),ht);U.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){ot(s,s.return,Z)}if(r=s.sibling,r!==null){r.return=s.return,le=r;break}le=s.return}return ce=ry,ry=!1,ce}function Ja(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&bd(s,a,g)}f=f.next}while(f!==h)}}function Ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Ld(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function iy(r){var s=r.alternate;s!==null&&(r.alternate=null,iy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[cr],delete s[Ba],delete s[Xh],delete s[_T],delete s[vT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function sy(r){return r.tag===5||r.tag===3||r.tag===4}function oy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||sy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Vd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Su));else if(h!==4&&(r=r.child,r!==null))for(Vd(r,s,a),r=r.sibling;r!==null;)Vd(r,s,a),r=r.sibling}function Md(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Md(r,s,a),r=r.sibling;r!==null;)Md(r,s,a),r=r.sibling}var Lt=null,Qn=!1;function _i(r,s,a){for(a=a.child;a!==null;)ay(r,s,a),a=a.sibling}function ay(r,s,a){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Zi,a)}catch{}switch(a.tag){case 5:Wt||Co(a,s);case 6:var h=Lt,f=Qn;Lt=null,_i(r,s,a),Lt=h,Qn=f,Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?Yh(r.parentNode,a):r.nodeType===1&&Yh(r,a),Wn(r)):Yh(Lt,a.stateNode));break;case 4:h=Lt,f=Qn,Lt=a.stateNode.containerInfo,Qn=!0,_i(r,s,a),Lt=h,Qn=f;break;case 0:case 11:case 14:case 15:if(!Wt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&bd(a,s,w),f=f.next}while(f!==h)}_i(r,s,a);break;case 1:if(!Wt&&(Co(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){ot(a,s,R)}_i(r,s,a);break;case 21:_i(r,s,a);break;case 22:a.mode&1?(Wt=(h=Wt)||a.memoizedState!==null,_i(r,s,a),Wt=h):_i(r,s,a);break;default:_i(r,s,a)}}function ly(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new LT),s.forEach(function(h){var f=qT.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Yn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Lt=R.stateNode,Qn=!1;break e;case 3:Lt=R.stateNode.containerInfo,Qn=!0;break e;case 4:Lt=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(Lt===null)throw Error(t(160));ay(g,w,f),Lt=null,Qn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){ot(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)uy(s,r),s=s.sibling}function uy(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yn(s,r),fr(r),h&4){try{Ja(3,r,r.return),Ku(3,r)}catch(de){ot(r,r.return,de)}try{Ja(5,r,r.return)}catch(de){ot(r,r.return,de)}}break;case 1:Yn(s,r),fr(r),h&512&&a!==null&&Co(a,a.return);break;case 5:if(Yn(s,r),fr(r),h&512&&a!==null&&Co(a,a.return),r.flags&32){var f=r.stateNode;try{ti(f,"")}catch(de){ot(r,r.return,de)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&ua(f,g),_a(R,w);var z=_a(R,g);for(w=0;w<k.length;w+=2){var G=k[w],J=k[w+1];G==="style"?ma(f,J):G==="dangerouslySetInnerHTML"?fa(f,J):G==="children"?ti(f,J):Y(f,G,J,z)}switch(R){case"input":ca(f,g);break;case"textarea":$s(f,g);break;case"select":var K=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Sr(f,!!g.multiple,oe,!1):K!==!!g.multiple&&(g.defaultValue!=null?Sr(f,!!g.multiple,g.defaultValue,!0):Sr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ba]=g}catch(de){ot(r,r.return,de)}}break;case 6:if(Yn(s,r),fr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(de){ot(r,r.return,de)}}break;case 3:if(Yn(s,r),fr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(de){ot(r,r.return,de)}break;case 4:Yn(s,r),fr(r);break;case 13:Yn(s,r),fr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(jd=Ke())),h&4&&ly(r);break;case 22:if(G=a!==null&&a.memoizedState!==null,r.mode&1?(Wt=(z=Wt)||G,Yn(s,r),Wt=z):Yn(s,r),fr(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!G&&(r.mode&1)!==0)for(le=r,G=r.child;G!==null;){for(J=le=G;le!==null;){switch(K=le,oe=K.child,K.tag){case 0:case 11:case 14:case 15:Ja(4,K,K.return);break;case 1:Co(K,K.return);var ce=K.stateNode;if(typeof ce.componentWillUnmount=="function"){h=K,a=K.return;try{s=h,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(de){ot(h,a,de)}}break;case 5:Co(K,K.return);break;case 22:if(K.memoizedState!==null){dy(J);continue}}oe!==null?(oe.return=K,le=oe):dy(J)}G=G.sibling}e:for(G=null,J=r;;){if(J.tag===5){if(G===null){G=J;try{f=J.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=J.stateNode,k=J.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=pa("display",w))}catch(de){ot(r,r.return,de)}}}else if(J.tag===6){if(G===null)try{J.stateNode.nodeValue=z?"":J.memoizedProps}catch(de){ot(r,r.return,de)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===r)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===r)break e;for(;J.sibling===null;){if(J.return===null||J.return===r)break e;G===J&&(G=null),J=J.return}G===J&&(G=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Yn(s,r),fr(r),h&4&&ly(r);break;case 21:break;default:Yn(s,r),fr(r)}}function fr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(sy(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(ti(f,""),h.flags&=-33);var g=oy(r);Md(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=oy(r);Vd(r,R,w);break;default:throw Error(t(161))}}catch(k){ot(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function MT(r,s,a){le=r,cy(r)}function cy(r,s,a){for(var h=(r.mode&1)!==0;le!==null;){var f=le,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Hu;if(!w){var R=f.alternate,k=R!==null&&R.memoizedState!==null||Wt;R=Hu;var z=Wt;if(Hu=w,(Wt=k)&&!z)for(le=f;le!==null;)w=le,k=w.child,w.tag===22&&w.memoizedState!==null?fy(f):k!==null?(k.return=w,le=k):fy(f);for(;g!==null;)le=g,cy(g),g=g.sibling;le=f,Hu=R,Wt=z}hy(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,le=g):hy(r)}}function hy(r){for(;le!==null;){var s=le;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Wt||Ku(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Wt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Gn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&dg(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}dg(s,w,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var G=z.memoizedState;if(G!==null){var J=G.dehydrated;J!==null&&Wn(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wt||s.flags&512&&Ld(s)}catch(K){ot(s,s.return,K)}}if(s===r){le=null;break}if(a=s.sibling,a!==null){a.return=s.return,le=a;break}le=s.return}}function dy(r){for(;le!==null;){var s=le;if(s===r){le=null;break}var a=s.sibling;if(a!==null){a.return=s.return,le=a;break}le=s.return}}function fy(r){for(;le!==null;){var s=le;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ku(4,s)}catch(k){ot(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){ot(s,f,k)}}var g=s.return;try{Ld(s)}catch(k){ot(s,g,k)}break;case 5:var w=s.return;try{Ld(s)}catch(k){ot(s,w,k)}}}catch(k){ot(s,s.return,k)}if(s===r){le=null;break}var R=s.sibling;if(R!==null){R.return=s.return,le=R;break}le=s.return}}var UT=Math.ceil,Gu=te.ReactCurrentDispatcher,Ud=te.ReactCurrentOwner,Dn=te.ReactCurrentBatchConfig,Ue=0,kt=null,mt=null,Vt=0,En=0,ko=fi(0),It=0,Za=null,fs=0,Qu=0,Fd=0,el=null,un=null,jd=0,No=1/0,Fr=null,Yu=!1,Bd=null,vi=null,Xu=!1,wi=null,Ju=0,tl=0,zd=null,Zu=-1,ec=0;function en(){return(Ue&6)!==0?Ke():Zu!==-1?Zu:Zu=Ke()}function Ei(r){return(r.mode&1)===0?1:(Ue&2)!==0&&Vt!==0?Vt&-Vt:ET.transition!==null?(ec===0&&(ec=ts()),ec):(r=De,r!==0||(r=window.event,r=r===void 0?16:ka(r.type)),r)}function Xn(r,s,a,h){if(50<tl)throw tl=0,zd=null,Error(t(185));si(r,a,h),((Ue&2)===0||r!==kt)&&(r===kt&&((Ue&2)===0&&(Qu|=a),It===4&&Ti(r,Vt)),cn(r,h),a===1&&Ue===0&&(s.mode&1)===0&&(No=Ke()+500,Cu&&mi()))}function cn(r,s){var a=r.callbackNode;Pr(r,s);var h=es(r,r===kt?Vt:0);if(h===0)a!==null&&Sa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&Sa(a),s===1)r.tag===0?wT(my.bind(null,r)):eg(my.bind(null,r)),gT(function(){(Ue&6)===0&&mi()}),a=null;else{switch(ai(h)){case 1:a=Ji;break;case 4:a=ni;break;case 16:a=An;break;case 536870912:a=eu;break;default:a=An}a=Iy(a,py.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function py(r,s){if(Zu=-1,ec=0,(Ue&6)!==0)throw Error(t(327));var a=r.callbackNode;if(xo()&&r.callbackNode!==a)return null;var h=es(r,r===kt?Vt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=tc(r,h);else{s=h;var f=Ue;Ue|=2;var g=yy();(kt!==r||Vt!==s)&&(Fr=null,No=Ke()+500,ms(r,s));do try{BT();break}catch(R){gy(r,R)}while(!0);od(),Gu.current=g,Ue=f,mt!==null?s=0:(kt=null,Vt=0,s=It)}if(s!==0){if(s===2&&(f=gn(r),f!==0&&(h=f,s=$d(r,f))),s===1)throw a=Za,ms(r,0),Ti(r,h),cn(r,Ke()),a;if(s===6)Ti(r,h);else{if(f=r.current.alternate,(h&30)===0&&!FT(f)&&(s=tc(r,h),s===2&&(g=gn(r),g!==0&&(h=g,s=$d(r,g))),s===1))throw a=Za,ms(r,0),Ti(r,h),cn(r,Ke()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:gs(r,un,Fr);break;case 3:if(Ti(r,h),(h&130023424)===h&&(s=jd+500-Ke(),10<s)){if(es(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){en(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Qh(gs.bind(null,r,un,Fr),s);break}gs(r,un,Fr);break;case 4:if(Ti(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Xt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=Ke()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*UT(h/1960))-h,10<h){r.timeoutHandle=Qh(gs.bind(null,r,un,Fr),h);break}gs(r,un,Fr);break;case 5:gs(r,un,Fr);break;default:throw Error(t(329))}}}return cn(r,Ke()),r.callbackNode===a?py.bind(null,r):null}function $d(r,s){var a=el;return r.current.memoizedState.isDehydrated&&(ms(r,s).flags|=256),r=tc(r,s),r!==2&&(s=un,un=a,s!==null&&Wd(s)),r}function Wd(r){un===null?un=r:un.push.apply(un,r)}function FT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Hn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ti(r,s){for(s&=~Fd,s&=~Qu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Xt(s),h=1<<a;r[a]=-1,s&=~h}}function my(r){if((Ue&6)!==0)throw Error(t(327));xo();var s=es(r,0);if((s&1)===0)return cn(r,Ke()),null;var a=tc(r,s);if(r.tag!==0&&a===2){var h=gn(r);h!==0&&(s=h,a=$d(r,h))}if(a===1)throw a=Za,ms(r,0),Ti(r,s),cn(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,gs(r,un,Fr),cn(r,Ke()),null}function qd(r,s){var a=Ue;Ue|=1;try{return r(s)}finally{Ue=a,Ue===0&&(No=Ke()+500,Cu&&mi())}}function ps(r){wi!==null&&wi.tag===0&&(Ue&6)===0&&xo();var s=Ue;Ue|=1;var a=Dn.transition,h=De;try{if(Dn.transition=null,De=1,r)return r()}finally{De=h,Dn.transition=a,Ue=s,(Ue&6)===0&&mi()}}function Hd(){En=ko.current,Ye(ko)}function ms(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,mT(a)),mt!==null)for(a=mt.return;a!==null;){var h=a;switch(td(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Au();break;case 3:Ao(),Ye(on),Ye(Bt),pd();break;case 5:dd(h);break;case 4:Ao();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:ad(h.type._context);break;case 22:case 23:Hd()}a=a.return}if(kt=r,mt=r=Ii(r.current,null),Vt=En=s,It=0,Za=null,Fd=Qu=fs=0,un=el=null,cs!==null){for(s=0;s<cs.length;s++)if(a=cs[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}cs=null}return r}function gy(r,s){do{var a=mt;try{if(od(),Uu.current=zu,Fu){for(var h=rt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Fu=!1}if(ds=0,Ct=Tt=rt=null,Ka=!1,Ga=0,Ud.current=null,a===null||a.return===null){It=1,Za=s,mt=null;break}e:{var g=r,w=a.return,R=a,k=s;if(s=Vt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,G=R,J=G.tag;if((G.mode&1)===0&&(J===0||J===11||J===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var oe=Bg(w);if(oe!==null){oe.flags&=-257,zg(oe,w,R,g,s),oe.mode&1&&jg(g,z,s),s=oe,k=z;var ce=s.updateQueue;if(ce===null){var de=new Set;de.add(k),s.updateQueue=de}else ce.add(k);break e}else{if((s&1)===0){jg(g,z,s),Kd();break e}k=Error(t(426))}}else if(et&&R.mode&1){var ht=Bg(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),zg(ht,w,R,g,s),id(Po(k,R));break e}}g=k=Po(k,R),It!==4&&(It=2),el===null?el=[g]:el.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Ug(g,k,s);hg(g,U);break e;case 1:R=k;var x=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(vi===null||!vi.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var Z=Fg(g,R,s);hg(g,Z);break e}}g=g.return}while(g!==null)}vy(a)}catch(pe){s=pe,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function yy(){var r=Gu.current;return Gu.current=zu,r===null?zu:r}function Kd(){(It===0||It===3||It===2)&&(It=4),kt===null||(fs&268435455)===0&&(Qu&268435455)===0||Ti(kt,Vt)}function tc(r,s){var a=Ue;Ue|=2;var h=yy();(kt!==r||Vt!==s)&&(Fr=null,ms(r,s));do try{jT();break}catch(f){gy(r,f)}while(!0);if(od(),Ue=a,Gu.current=h,mt!==null)throw Error(t(261));return kt=null,Vt=0,It}function jT(){for(;mt!==null;)_y(mt)}function BT(){for(;mt!==null&&!Jl();)_y(mt)}function _y(r){var s=Ty(r.alternate,r,En);r.memoizedProps=r.pendingProps,s===null?vy(r):mt=s,Ud.current=null}function vy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=DT(a,s,En),a!==null){mt=a;return}}else{if(a=bT(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{It=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);It===0&&(It=5)}function gs(r,s,a){var h=De,f=Dn.transition;try{Dn.transition=null,De=1,zT(r,s,a,h)}finally{Dn.transition=f,De=h}return null}function zT(r,s,a,h){do xo();while(wi!==null);if((Ue&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(qe(r,g),r===kt&&(mt=kt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xu||(Xu=!0,Iy(An,function(){return xo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Dn.transition,Dn.transition=null;var w=De;De=1;var R=Ue;Ue|=4,Ud.current=null,VT(r,a),uy(a,r),lT(Kh),ui=!!Hh,Kh=Hh=null,r.current=a,MT(a),Nh(),Ue=R,De=w,Dn.transition=g}else r.current=a;if(Xu&&(Xu=!1,wi=r,Ju=f),g=r.pendingLanes,g===0&&(vi=null),tu(a.stateNode),cn(r,Ke()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Yu)throw Yu=!1,r=Bd,Bd=null,r;return(Ju&1)!==0&&r.tag!==0&&xo(),g=r.pendingLanes,(g&1)!==0?r===zd?tl++:(tl=0,zd=r):tl=0,mi(),null}function xo(){if(wi!==null){var r=ai(Ju),s=Dn.transition,a=De;try{if(Dn.transition=null,De=16>r?16:r,wi===null)var h=!1;else{if(r=wi,wi=null,Ju=0,(Ue&6)!==0)throw Error(t(331));var f=Ue;for(Ue|=4,le=r.current;le!==null;){var g=le,w=g.child;if((le.flags&16)!==0){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var z=R[k];for(le=z;le!==null;){var G=le;switch(G.tag){case 0:case 11:case 15:Ja(8,G,g)}var J=G.child;if(J!==null)J.return=G,le=J;else for(;le!==null;){G=le;var K=G.sibling,oe=G.return;if(iy(G),G===z){le=null;break}if(K!==null){K.return=oe,le=K;break}le=oe}}}var ce=g.alternate;if(ce!==null){var de=ce.child;if(de!==null){ce.child=null;do{var ht=de.sibling;de.sibling=null,de=ht}while(de!==null)}}le=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,le=w;else e:for(;le!==null;){if(g=le,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ja(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,le=U;break e}le=g.return}}var x=r.current;for(le=x;le!==null;){w=le;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,le=j;else e:for(w=x;le!==null;){if(R=le,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Ku(9,R)}}catch(pe){ot(R,R.return,pe)}if(R===w){le=null;break e}var Z=R.sibling;if(Z!==null){Z.return=R.return,le=Z;break e}le=R.return}}if(Ue=f,mi(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Zi,r)}catch{}h=!0}return h}finally{De=a,Dn.transition=s}}return!1}function wy(r,s,a){s=Po(a,s),s=Ug(r,s,1),r=yi(r,s,1),s=en(),r!==null&&(si(r,1,s),cn(r,s))}function ot(r,s,a){if(r.tag===3)wy(r,r,a);else for(;s!==null;){if(s.tag===3){wy(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(vi===null||!vi.has(h))){r=Po(a,r),r=Fg(s,r,1),s=yi(s,r,1),r=en(),s!==null&&(si(s,1,r),cn(s,r));break}}s=s.return}}function $T(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=en(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Vt&a)===a&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Ke()-jd?ms(r,0):Fd|=a),cn(r,s)}function Ey(r,s){s===0&&((r.mode&1)===0?s=1:(s=Zs,Zs<<=1,(Zs&130023424)===0&&(Zs=4194304)));var a=en();r=Vr(r,s),r!==null&&(si(r,s,a),cn(r,a))}function WT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Ey(r,a)}function qT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Ey(r,a)}var Ty;Ty=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return ln=!1,OT(r,s,a);ln=(r.flags&131072)!==0}else ln=!1,et&&(s.flags&1048576)!==0&&tg(s,Nu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;qu(r,s),r=s.pendingProps;var f=vo(s,Bt.current);Ro(s,a),f=yd(null,s,h,r,f,a);var g=_d();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(g=!0,Pu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,cd(s),f.updater=$u,s.stateNode=f,f._reactInternals=s,Sd(s,h,r,a),s=Cd(null,s,h,!0,g,a)):(s.tag=0,et&&g&&ed(s),Zt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(qu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=KT(h),r=Gn(h,r),f){case 0:s=Pd(null,s,h,r,a);break e;case 1:s=Gg(null,s,h,r,a);break e;case 11:s=$g(null,s,h,r,a);break e;case 14:s=Wg(null,s,h,Gn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Pd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Gg(r,s,h,f,a);case 3:e:{if(Qg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,cg(r,s),Vu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Po(Error(t(423)),s),s=Yg(r,s,h,a,f);break e}else if(h!==f){f=Po(Error(t(424)),s),s=Yg(r,s,h,a,f);break e}else for(wn=di(s.stateNode.containerInfo.firstChild),vn=s,et=!0,Kn=null,a=lg(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(To(),h===f){s=Ur(r,s,a);break e}Zt(r,s,h,a)}s=s.child}return s;case 5:return fg(s),r===null&&rd(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,Gh(h,f)?w=null:g!==null&&Gh(h,g)&&(s.flags|=32),Kg(r,s),Zt(r,s,w,a),s.child;case 6:return r===null&&rd(s),null;case 13:return Xg(r,s,a);case 4:return hd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Io(s,null,h,a):Zt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),$g(r,s,h,f,a);case 7:return Zt(r,s,s.pendingProps,a),s.child;case 8:return Zt(r,s,s.pendingProps.children,a),s.child;case 12:return Zt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Ge(Du,h._currentValue),h._currentValue=w,g!==null)if(Hn(g.value,w)){if(g.children===f.children&&!on.current){s=Ur(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Mr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var G=z.pending;G===null?k.next=k:(k.next=G.next,G.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),ld(g.return,a,s),R.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,R=w.alternate,R!==null&&(R.lanes|=a),ld(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Zt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Ro(s,a),f=xn(f),h=h(f),s.flags|=1,Zt(r,s,h,a),s.child;case 14:return h=s.type,f=Gn(h,s.pendingProps),f=Gn(h.type,f),Wg(r,s,h,f,a);case 15:return qg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),qu(r,s),s.tag=1,an(h)?(r=!0,Pu(s)):r=!1,Ro(s,a),Vg(s,h,f),Sd(s,h,f,a),Cd(null,s,h,!0,r,a);case 19:return Zg(r,s,a);case 22:return Hg(r,s,a)}throw Error(t(156,s.tag))};function Iy(r,s){return Xs(r,s)}function HT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(r,s,a,h){return new HT(r,s,a,h)}function Gd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function KT(r){if(typeof r=="function")return Gd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Rt)return 14}return 2}function Ii(r,s){var a=r.alternate;return a===null?(a=bn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function nc(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")Gd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return ys(a.children,f,g,s);case I:w=8,f|=8;break;case C:return r=bn(12,a,s,f|2),r.elementType=C,r.lanes=g,r;case A:return r=bn(13,a,s,f),r.elementType=A,r.lanes=g,r;case tt:return r=bn(19,a,s,f),r.elementType=tt,r.lanes=g,r;case Fe:return rc(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:w=10;break e;case D:w=9;break e;case V:w=11;break e;case Rt:w=14;break e;case At:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=bn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ys(r,s,a,h){return r=bn(7,r,h,s),r.lanes=a,r}function rc(r,s,a,h){return r=bn(22,r,h,s),r.elementType=Fe,r.lanes=a,r.stateNode={isHidden:!1},r}function Qd(r,s,a){return r=bn(6,r,null,s),r.lanes=a,r}function Yd(r,s,a){return s=bn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function GT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Xd(r,s,a,h,f,g,w,R,k){return r=new GT(r,s,a,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=bn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cd(g),r}function QT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Sy(r){if(!r)return pi;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(an(a))return Jm(r,a,s)}return s}function Ry(r,s,a,h,f,g,w,R,k){return r=Xd(a,h,!0,r,f,g,w,R,k),r.context=Sy(null),a=r.current,h=en(),f=Ei(a),g=Mr(h,f),g.callback=s??null,yi(a,g,f),r.current.lanes=f,si(r,f,h),cn(r,h),r}function ic(r,s,a,h){var f=s.current,g=en(),w=Ei(f);return a=Sy(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=yi(f,s,w),r!==null&&(Xn(r,f,w,g),Lu(r,f,w)),w}function sc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Ay(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Jd(r,s){Ay(r,s),(r=r.alternate)&&Ay(r,s)}function YT(){return null}var Py=typeof reportError=="function"?reportError:function(r){console.error(r)};function Zd(r){this._internalRoot=r}oc.prototype.render=Zd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ic(r,s,null,null)},oc.prototype.unmount=Zd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ps(function(){ic(null,r,null,null)}),s[Or]=null}};function oc(r){this._internalRoot=r}oc.prototype.unstable_scheduleHydration=function(r){if(r){var s=ou();r={blockedOn:null,target:r,priority:s};for(var a=0;a<or.length&&s!==0&&s<or[a].priority;a++);or.splice(a,0,r),a===0&&uu(r)}};function ef(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ac(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Cy(){}function XT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=sc(w);g.call(z)}}var w=Ry(s,h,r,0,null,!1,!1,"",Cy);return r._reactRootContainer=w,r[Or]=w.current,Fa(r.nodeType===8?r.parentNode:r),ps(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var z=sc(k);R.call(z)}}var k=Xd(r,0,!1,null,null,!1,!1,"",Cy);return r._reactRootContainer=k,r[Or]=k.current,Fa(r.nodeType===8?r.parentNode:r),ps(function(){ic(s,k,a,h)}),k}function lc(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var k=sc(w);R.call(k)}}ic(s,w,r,f)}else w=XT(a,s,r,f,h);return sc(w)}iu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ri(s.pendingLanes);a!==0&&(oi(s,a|1),cn(s,Ke()),(Ue&6)===0&&(No=Ke()+500,mi()))}break;case 13:ps(function(){var h=Vr(r,1);if(h!==null){var f=en();Xn(h,r,1,f)}}),Jd(r,1)}},eo=function(r){if(r.tag===13){var s=Vr(r,134217728);if(s!==null){var a=en();Xn(s,r,134217728,a)}Jd(r,134217728)}},su=function(r){if(r.tag===13){var s=Ei(r),a=Vr(r,s);if(a!==null){var h=en();Xn(a,r,s,h)}Jd(r,s)}},ou=function(){return De},au=function(r,s){var a=De;try{return De=r,s()}finally{De=a}},qs=function(r,s,a){switch(s){case"input":if(ca(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=Ru(h);if(!f)throw Error(t(90));Yt(h),ca(h,f)}}}break;case"textarea":$s(r,a);break;case"select":s=a.value,s!=null&&Sr(r,!!a.multiple,s,!1)}},Gi=qd,wa=ps;var JT={usingClientEntryPoint:!1,Events:[za,yo,Ru,ir,va,qd]},nl={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZT={bundleType:nl.bundleType,version:nl.version,rendererPackageName:nl.rendererPackageName,rendererConfig:nl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ia(r),r===null?null:r.stateNode},findFiberByHostInstance:nl.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{Zi=uc.inject(ZT),mn=uc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JT,hn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(s))throw Error(t(200));return QT(r,s,null,a)},hn.createRoot=function(r,s){if(!ef(r))throw Error(t(299));var a=!1,h="",f=Py;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Xd(r,1,!1,null,null,a,!1,h,f),r[Or]=s.current,Fa(r.nodeType===8?r.parentNode:r),new Zd(s)},hn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ia(s),r=r===null?null:r.stateNode,r},hn.flushSync=function(r){return ps(r)},hn.hydrate=function(r,s,a){if(!ac(s))throw Error(t(200));return lc(null,r,s,!0,a)},hn.hydrateRoot=function(r,s,a){if(!ef(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=Py;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Ry(s,null,r,1,a??null,f,!1,g,w),r[Or]=s.current,Fa(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new oc(s)},hn.render=function(r,s,a){if(!ac(s))throw Error(t(200));return lc(null,r,s,!1,a)},hn.unmountComponentAtNode=function(r){if(!ac(r))throw Error(t(40));return r._reactRootContainer?(ps(function(){lc(null,null,r,!1,function(){r._reactRootContainer=null,r[Or]=null})}),!0):!1},hn.unstable_batchedUpdates=qd,hn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!ac(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return lc(r,s,a,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var Vy;function xv(){if(Vy)return rf.exports;Vy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rf.exports=lI(),rf.exports}var My;function uI(){if(My)return cc;My=1;var n=xv();return cc.createRoot=n.createRoot,cc.hydrateRoot=n.hydrateRoot,cc}var cI=uI();const hI=Nv(cI);xv();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},wl.apply(this,arguments)}var xi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(xi||(xi={}));const Uy="popstate";function dI(n){n===void 0&&(n={});function e(o,l){let{pathname:c="/",search:d="",hash:p=""}=Ls(o.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Af("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let c=o.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");d=y===-1?p:p.slice(0,y)}return d+"#"+(typeof l=="string"?l:bc(l))}function i(o,l){cp(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return pI(e,t,i,n)}function ft(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function cp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function fI(){return Math.random().toString(36).substr(2,8)}function Fy(n,e){return{usr:n.state,key:n.key,idx:e}}function Af(n,e,t,i){return t===void 0&&(t=null),wl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ls(e):e,{state:t,key:e&&e.key||i||fI()})}function bc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Ls(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function pI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d=xi.Pop,p=null,y=v();y==null&&(y=0,c.replaceState(wl({},c.state,{idx:y}),""));function v(){return(c.state||{idx:null}).idx}function E(){d=xi.Pop;let b=v(),q=b==null?null:b-y;y=b,p&&p({action:d,location:B.location,delta:q})}function S(b,q){d=xi.Push;let X=Af(B.location,b,q);t&&t(X,b),y=v()+1;let Y=Fy(X,y),te=B.createHref(X);try{c.pushState(Y,"",te)}catch(ge){if(ge instanceof DOMException&&ge.name==="DataCloneError")throw ge;o.location.assign(te)}l&&p&&p({action:d,location:B.location,delta:1})}function O(b,q){d=xi.Replace;let X=Af(B.location,b,q);t&&t(X,b),y=v();let Y=Fy(X,y),te=B.createHref(X);c.replaceState(Y,"",te),l&&p&&p({action:d,location:B.location,delta:0})}function F(b){let q=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof b=="string"?b:bc(b);return X=X.replace(/ $/,"%20"),ft(q,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,q)}let B={get action(){return d},get location(){return n(o,c)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Uy,E),p=b,()=>{o.removeEventListener(Uy,E),p=null}},createHref(b){return e(o,b)},createURL:F,encodeLocation(b){let q=F(b);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:S,replace:O,go(b){return c.go(b)}};return B}var jy;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(jy||(jy={}));function mI(n,e,t){return t===void 0&&(t="/"),gI(n,e,t)}function gI(n,e,t,i){let o=typeof e=="string"?Ls(e):e,l=hp(o.pathname||"/",t);if(l==null)return null;let c=Ov(n);yI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=kI(l);d=AI(c[p],y)}return d}function Ov(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ft(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Di([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(ft(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Ov(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:SI(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of Dv(l.path))o(l,c,p)}),e}function Dv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=Dv(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function yI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:RI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const _I=/^:[\w-]+$/,vI=3,wI=2,EI=1,TI=10,II=-2,By=n=>n==="*";function SI(n,e){let t=n.split("/"),i=t.length;return t.some(By)&&(i+=II),e&&(i+=wI),t.filter(o=>!By(o)).reduce((o,l)=>o+(_I.test(l)?vI:l===""?EI:TI),i)}function RI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function AI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=PI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),S=p.route;if(!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Di([l,E.pathname]),pathnameBase:DI(Di([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=Di([l,E.pathnameBase]))}return c}function PI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=CI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,v,E)=>{let{paramName:S,isOptional:O}=v;if(S==="*"){let B=d[E]||"";c=l.slice(0,l.length-B.length).replace(/(.)\/+$/,"$1")}const F=d[E];return O&&!F?y[S]=void 0:y[S]=(F||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function CI(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),cp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function kI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return cp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function hp(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function NI(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Ls(n):n;return{pathname:t?t.startsWith("/")?t:xI(t,e):e,search:bI(i),hash:LI(o)}}function xI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function af(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function dp(n,e){let t=OI(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function fp(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Ls(n):(o=wl({},n),ft(!o.pathname||!o.pathname.includes("?"),af("?","pathname","search",o)),ft(!o.pathname||!o.pathname.includes("#"),af("#","pathname","hash",o)),ft(!o.search||!o.search.includes("#"),af("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),E-=1;o.pathname=S.join("/")}d=E>=0?e[E]:"/"}let p=NI(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const Di=n=>n.join("/").replace(/\/\/+/g,"/"),DI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),bI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,LI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function VI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const bv=["post","put","patch","delete"];new Set(bv);const MI=["get",...bv];new Set(MI);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},El.apply(this,arguments)}const pp=ee.createContext(null),UI=ee.createContext(null),zi=ee.createContext(null),ih=ee.createContext(null),Xr=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),Lv=ee.createContext(null);function FI(n,e){let{relative:t}=e===void 0?{}:e;ta()||ft(!1);let{basename:i,navigator:o}=ee.useContext(zi),{hash:l,pathname:c,search:d}=Mv(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Di([i,c])),o.createHref({pathname:p,search:d,hash:l})}function ta(){return ee.useContext(ih)!=null}function bl(){return ta()||ft(!1),ee.useContext(ih).location}function Vv(n){ee.useContext(zi).static||ee.useLayoutEffect(n)}function na(){let{isDataRoute:n}=ee.useContext(Xr);return n?eS():jI()}function jI(){ta()||ft(!1);let n=ee.useContext(pp),{basename:e,future:t,navigator:i}=ee.useContext(zi),{matches:o}=ee.useContext(Xr),{pathname:l}=bl(),c=JSON.stringify(dp(o,t.v7_relativeSplatPath)),d=ee.useRef(!1);return Vv(()=>{d.current=!0}),ee.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let E=fp(y,JSON.parse(c),l,v.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Di([e,E.pathname])),(v.replace?i.replace:i.push)(E,v.state,v)},[e,i,c,l,n])}const BI=ee.createContext(null);function zI(n){let e=ee.useContext(Xr).outlet;return e&&ee.createElement(BI.Provider,{value:n},e)}function Mv(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=ee.useContext(zi),{matches:o}=ee.useContext(Xr),{pathname:l}=bl(),c=JSON.stringify(dp(o,i.v7_relativeSplatPath));return ee.useMemo(()=>fp(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function $I(n,e){return WI(n,e)}function WI(n,e,t,i){ta()||ft(!1);let{navigator:o,static:l}=ee.useContext(zi),{matches:c}=ee.useContext(Xr),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let y=d?d.pathnameBase:"/";d&&d.route;let v=bl(),E;if(e){var S;let q=typeof e=="string"?Ls(e):e;y==="/"||(S=q.pathname)!=null&&S.startsWith(y)||ft(!1),E=q}else E=v;let O=E.pathname||"/",F=O;if(y!=="/"){let q=y.replace(/^\//,"").split("/");F="/"+O.replace(/^\//,"").split("/").slice(q.length).join("/")}let B=mI(n,{pathname:F}),b=QI(B&&B.map(q=>Object.assign({},q,{params:Object.assign({},p,q.params),pathname:Di([y,o.encodeLocation?o.encodeLocation(q.pathname).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?y:Di([y,o.encodeLocation?o.encodeLocation(q.pathnameBase).pathname:q.pathnameBase])})),c,t,i);return e&&b?ee.createElement(ih.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:xi.Pop}},b):b}function qI(){let n=ZI(),e=VI(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),t?ee.createElement("pre",{style:o},t):null,null)}const HI=ee.createElement(qI,null);class KI extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ee.createElement(Xr.Provider,{value:this.props.routeContext},ee.createElement(Lv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GI(n){let{routeContext:e,match:t,children:i}=n,o=ee.useContext(pp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ee.createElement(Xr.Provider,{value:e},i)}function QI(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=c.findIndex(E=>E.route.id&&(d==null?void 0:d[E.route.id])!==void 0);v>=0||ft(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<c.length;v++){let E=c[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=v),E.route.id){let{loaderData:S,errors:O}=t,F=E.route.loader&&S[E.route.id]===void 0&&(!O||O[E.route.id]===void 0);if(E.route.lazy||F){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((v,E,S)=>{let O,F=!1,B=null,b=null;t&&(O=d&&E.route.id?d[E.route.id]:void 0,B=E.route.errorElement||HI,p&&(y<0&&S===0?(tS("route-fallback"),F=!0,b=null):y===S&&(F=!0,b=E.route.hydrateFallbackElement||null)));let q=e.concat(c.slice(0,S+1)),X=()=>{let Y;return O?Y=B:F?Y=b:E.route.Component?Y=ee.createElement(E.route.Component,null):E.route.element?Y=E.route.element:Y=v,ee.createElement(GI,{match:E,routeContext:{outlet:v,matches:q,isDataRoute:t!=null},children:Y})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?ee.createElement(KI,{location:t.location,revalidation:t.revalidation,component:B,error:O,children:X(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):X()},null)}var Uv=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Uv||{}),Fv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Fv||{});function YI(n){let e=ee.useContext(pp);return e||ft(!1),e}function XI(n){let e=ee.useContext(UI);return e||ft(!1),e}function JI(n){let e=ee.useContext(Xr);return e||ft(!1),e}function jv(n){let e=JI(),t=e.matches[e.matches.length-1];return t.route.id||ft(!1),t.route.id}function ZI(){var n;let e=ee.useContext(Lv),t=XI(),i=jv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function eS(){let{router:n}=YI(Uv.UseNavigateStable),e=jv(Fv.UseNavigateStable),t=ee.useRef(!1);return Vv(()=>{t.current=!0}),ee.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,El({fromRouteId:e},l)))},[n,e])}const zy={};function tS(n,e,t){zy[n]||(zy[n]=!0)}function nS(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function rS(n){let{to:e,replace:t,state:i,relative:o}=n;ta()||ft(!1);let{future:l,static:c}=ee.useContext(zi),{matches:d}=ee.useContext(Xr),{pathname:p}=bl(),y=na(),v=fp(e,dp(d,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(v);return ee.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function iS(n){return zI(n.context)}function Do(n){ft(!1)}function sS(n){let{basename:e="/",children:t=null,location:i,navigationType:o=xi.Pop,navigator:l,static:c=!1,future:d}=n;ta()&&ft(!1);let p=e.replace(/^\/*/,"/"),y=ee.useMemo(()=>({basename:p,navigator:l,static:c,future:El({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=Ls(i));let{pathname:v="/",search:E="",hash:S="",state:O=null,key:F="default"}=i,B=ee.useMemo(()=>{let b=hp(v,p);return b==null?null:{location:{pathname:b,search:E,hash:S,state:O,key:F},navigationType:o}},[p,v,E,S,O,F,o]);return B==null?null:ee.createElement(zi.Provider,{value:y},ee.createElement(ih.Provider,{children:t,value:B}))}function oS(n){let{children:e,location:t}=n;return $I(Pf(e),t)}new Promise(()=>{});function Pf(n,e){e===void 0&&(e=[]);let t=[];return ee.Children.forEach(n,(i,o)=>{if(!ee.isValidElement(i))return;let l=[...e,o];if(i.type===ee.Fragment){t.push.apply(t,Pf(i.props.children,l));return}i.type!==Do&&ft(!1),!i.props.index||!i.props.children||ft(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Pf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cf(){return Cf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Cf.apply(this,arguments)}function aS(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function lS(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function uS(n,e){return n.button===0&&(!e||e==="_self")&&!lS(n)}const cS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hS="6";try{window.__reactRouterVersion=hS}catch{}const dS="startTransition",$y=sI[dS];function fS(n){let{basename:e,children:t,future:i,window:o}=n,l=ee.useRef();l.current==null&&(l.current=dI({window:o,v5Compat:!0}));let c=l.current,[d,p]=ee.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},v=ee.useCallback(E=>{y&&$y?$y(()=>p(E)):p(E)},[p,y]);return ee.useLayoutEffect(()=>c.listen(v),[c,v]),ee.useEffect(()=>nS(i),[i]),ee.createElement(sS,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const pS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lc=ee.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:E}=e,S=aS(e,cS),{basename:O}=ee.useContext(zi),F,B=!1;if(typeof y=="string"&&mS.test(y)&&(F=y,pS))try{let Y=new URL(window.location.href),te=y.startsWith("//")?new URL(Y.protocol+y):new URL(y),ge=hp(te.pathname,O);te.origin===Y.origin&&ge!=null?y=ge+te.search+te.hash:B=!0}catch{}let b=FI(y,{relative:o}),q=gS(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:E});function X(Y){i&&i(Y),Y.defaultPrevented||q(Y)}return ee.createElement("a",Cf({},S,{href:F||b,onClick:B||l?i:X,ref:t,target:p}))});var Wy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Wy||(Wy={}));var qy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(qy||(qy={}));function gS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,p=na(),y=bl(),v=Mv(n,{relative:c});return ee.useCallback(E=>{if(uS(E,t)){E.preventDefault();let S=i!==void 0?i:bc(y)===bc(v);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[y,p,v,i,o,t,n,l,c,d])}var Gt=function(){return Gt=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Gt.apply(this,arguments)};function Tl(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Xe="-ms-",fl="-moz-",ze="-webkit-",Bv="comm",sh="rule",mp="decl",yS="@import",zv="@keyframes",_S="@layer",$v=Math.abs,gp=String.fromCharCode,kf=Object.assign;function vS(n,e){return Ot(n,0)^45?(((e<<2^Ot(n,0))<<2^Ot(n,1))<<2^Ot(n,2))<<2^Ot(n,3):0}function Wv(n){return n.trim()}function jr(n,e){return(n=e.exec(n))?n[0]:n}function Ce(n,e,t){return n.replace(e,t)}function wc(n,e,t){return n.indexOf(e,t)}function Ot(n,e){return n.charCodeAt(e)|0}function zo(n,e,t){return n.slice(e,t)}function pr(n){return n.length}function qv(n){return n.length}function ol(n,e){return e.push(n),n}function wS(n,e){return n.map(e).join("")}function Hy(n,e){return n.filter(function(t){return!jr(t,e)})}var oh=1,$o=1,Hv=0,Ln=0,yt=0,ra="";function ah(n,e,t,i,o,l,c,d){return{value:n,root:e,parent:t,type:i,props:o,children:l,line:oh,column:$o,length:c,return:"",siblings:d}}function Ai(n,e){return kf(ah("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Oo(n){for(;n.root;)n=Ai(n.root,{children:[n]});ol(n,n.siblings)}function ES(){return yt}function TS(){return yt=Ln>0?Ot(ra,--Ln):0,$o--,yt===10&&($o=1,oh--),yt}function er(){return yt=Ln<Hv?Ot(ra,Ln++):0,$o++,yt===10&&($o=1,oh++),yt}function Is(){return Ot(ra,Ln)}function Ec(){return Ln}function lh(n,e){return zo(ra,n,e)}function Nf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IS(n){return oh=$o=1,Hv=pr(ra=n),Ln=0,[]}function SS(n){return ra="",n}function lf(n){return Wv(lh(Ln-1,xf(n===91?n+2:n===40?n+1:n)))}function RS(n){for(;(yt=Is())&&yt<33;)er();return Nf(n)>2||Nf(yt)>3?"":" "}function AS(n,e){for(;--e&&er()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return lh(n,Ec()+(e<6&&Is()==32&&er()==32))}function xf(n){for(;er();)switch(yt){case n:return Ln;case 34:case 39:n!==34&&n!==39&&xf(yt);break;case 40:n===41&&xf(n);break;case 92:er();break}return Ln}function PS(n,e){for(;er()&&n+yt!==57;)if(n+yt===84&&Is()===47)break;return"/*"+lh(e,Ln-1)+"*"+gp(n===47?n:er())}function CS(n){for(;!Nf(Is());)er();return lh(n,Ln)}function kS(n){return SS(Tc("",null,null,null,[""],n=IS(n),0,[0],n))}function Tc(n,e,t,i,o,l,c,d,p){for(var y=0,v=0,E=c,S=0,O=0,F=0,B=1,b=1,q=1,X=0,Y="",te=o,ge=l,ae=i,P=Y;b;)switch(F=X,X=er()){case 40:if(F!=108&&Ot(P,E-1)==58){wc(P+=Ce(lf(X),"&","&\f"),"&\f",$v(y?d[y-1]:0))!=-1&&(q=-1);break}case 34:case 39:case 91:P+=lf(X);break;case 9:case 10:case 13:case 32:P+=RS(F);break;case 92:P+=AS(Ec()-1,7);continue;case 47:switch(Is()){case 42:case 47:ol(NS(PS(er(),Ec()),e,t,p),p);break;default:P+="/"}break;case 123*B:d[y++]=pr(P)*q;case 125*B:case 59:case 0:switch(X){case 0:case 125:b=0;case 59+v:q==-1&&(P=Ce(P,/\f/g,"")),O>0&&pr(P)-E&&ol(O>32?Gy(P+";",i,t,E-1,p):Gy(Ce(P," ","")+";",i,t,E-2,p),p);break;case 59:P+=";";default:if(ol(ae=Ky(P,e,t,y,v,o,d,Y,te=[],ge=[],E,l),l),X===123)if(v===0)Tc(P,e,ae,ae,te,l,E,d,ge);else switch(S===99&&Ot(P,3)===110?100:S){case 100:case 108:case 109:case 115:Tc(n,ae,ae,i&&ol(Ky(n,ae,ae,0,0,o,d,Y,o,te=[],E,ge),ge),o,ge,E,d,i?te:ge);break;default:Tc(P,ae,ae,ae,[""],ge,0,d,ge)}}y=v=O=0,B=q=1,Y=P="",E=c;break;case 58:E=1+pr(P),O=F;default:if(B<1){if(X==123)--B;else if(X==125&&B++==0&&TS()==125)continue}switch(P+=gp(X),X*B){case 38:q=v>0?1:(P+="\f",-1);break;case 44:d[y++]=(pr(P)-1)*q,q=1;break;case 64:Is()===45&&(P+=lf(er())),S=Is(),v=E=pr(Y=P+=CS(Ec())),X++;break;case 45:F===45&&pr(P)==2&&(B=0)}}return l}function Ky(n,e,t,i,o,l,c,d,p,y,v,E){for(var S=o-1,O=o===0?l:[""],F=qv(O),B=0,b=0,q=0;B<i;++B)for(var X=0,Y=zo(n,S+1,S=$v(b=c[B])),te=n;X<F;++X)(te=Wv(b>0?O[X]+" "+Y:Ce(Y,/&\f/g,O[X])))&&(p[q++]=te);return ah(n,e,t,o===0?sh:d,p,y,v,E)}function NS(n,e,t,i){return ah(n,e,t,Bv,gp(ES()),zo(n,2,-2),0,i)}function Gy(n,e,t,i,o){return ah(n,e,t,mp,zo(n,0,i),zo(n,i+1,-1),i,o)}function Kv(n,e,t){switch(vS(n,e)){case 5103:return ze+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ze+n+n;case 4789:return fl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ze+n+fl+n+Xe+n+n;case 5936:switch(Ot(n,e+11)){case 114:return ze+n+Xe+Ce(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ze+n+Xe+Ce(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ze+n+Xe+Ce(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ze+n+Xe+n+n;case 6165:return ze+n+Xe+"flex-"+n+n;case 5187:return ze+n+Ce(n,/(\w+).+(:[^]+)/,ze+"box-$1$2"+Xe+"flex-$1$2")+n;case 5443:return ze+n+Xe+"flex-item-"+Ce(n,/flex-|-self/g,"")+(jr(n,/flex-|baseline/)?"":Xe+"grid-row-"+Ce(n,/flex-|-self/g,""))+n;case 4675:return ze+n+Xe+"flex-line-pack"+Ce(n,/align-content|flex-|-self/g,"")+n;case 5548:return ze+n+Xe+Ce(n,"shrink","negative")+n;case 5292:return ze+n+Xe+Ce(n,"basis","preferred-size")+n;case 6060:return ze+"box-"+Ce(n,"-grow","")+ze+n+Xe+Ce(n,"grow","positive")+n;case 4554:return ze+Ce(n,/([^-])(transform)/g,"$1"+ze+"$2")+n;case 6187:return Ce(Ce(Ce(n,/(zoom-|grab)/,ze+"$1"),/(image-set)/,ze+"$1"),n,"")+n;case 5495:case 3959:return Ce(n,/(image-set\([^]*)/,ze+"$1$`$1");case 4968:return Ce(Ce(n,/(.+:)(flex-)?(.*)/,ze+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ze+n+n;case 4200:if(!jr(n,/flex-|baseline/))return Xe+"grid-column-align"+zo(n,e)+n;break;case 2592:case 3360:return Xe+Ce(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,jr(i.props,/grid-\w+-end/)})?~wc(n+(t=t[e].value),"span",0)?n:Xe+Ce(n,"-start","")+n+Xe+"grid-row-span:"+(~wc(t,"span",0)?jr(t,/\d+/):+jr(t,/\d+/)-+jr(n,/\d+/))+";":Xe+Ce(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return jr(i.props,/grid-\w+-start/)})?n:Xe+Ce(Ce(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ce(n,/(.+)-inline(.+)/,ze+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pr(n)-1-e>6)switch(Ot(n,e+1)){case 109:if(Ot(n,e+4)!==45)break;case 102:return Ce(n,/(.+:)(.+)-([^]+)/,"$1"+ze+"$2-$3$1"+fl+(Ot(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~wc(n,"stretch",0)?Kv(Ce(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ce(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,c,d,p,y){return Xe+o+":"+l+y+(c?Xe+o+"-span:"+(d?p:+p-+l)+y:"")+n});case 4949:if(Ot(n,e+6)===121)return Ce(n,":",":"+ze)+n;break;case 6444:switch(Ot(n,Ot(n,14)===45?18:11)){case 120:return Ce(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ze+(Ot(n,14)===45?"inline-":"")+"box$3$1"+ze+"$2$3$1"+Xe+"$2box$3")+n;case 100:return Ce(n,":",":"+Xe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(n,"scroll-","scroll-snap-")+n}return n}function Vc(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function xS(n,e,t,i){switch(n.type){case _S:if(n.children.length)break;case yS:case mp:return n.return=n.return||n.value;case Bv:return"";case zv:return n.return=n.value+"{"+Vc(n.children,i)+"}";case sh:if(!pr(n.value=n.props.join(",")))return""}return pr(t=Vc(n.children,i))?n.return=n.value+"{"+t+"}":""}function OS(n){var e=qv(n);return function(t,i,o,l){for(var c="",d=0;d<e;d++)c+=n[d](t,i,o,l)||"";return c}}function DS(n){return function(e){e.root||(e=e.return)&&n(e)}}function bS(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case mp:n.return=Kv(n.value,n.length,t);return;case zv:return Vc([Ai(n,{value:Ce(n.value,"@","@"+ze)})],i);case sh:if(n.length)return wS(t=n.props,function(o){switch(jr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oo(Ai(n,{props:[Ce(o,/:(read-\w+)/,":"+fl+"$1")]})),Oo(Ai(n,{props:[o]})),kf(n,{props:Hy(t,i)});break;case"::placeholder":Oo(Ai(n,{props:[Ce(o,/:(plac\w+)/,":"+ze+"input-$1")]})),Oo(Ai(n,{props:[Ce(o,/:(plac\w+)/,":"+fl+"$1")]})),Oo(Ai(n,{props:[Ce(o,/:(plac\w+)/,Xe+"input-$1")]})),Oo(Ai(n,{props:[o]})),kf(n,{props:Hy(t,i)});break}return""})}}var LS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tn={},Wo=typeof process<"u"&&Tn!==void 0&&(Tn.REACT_APP_SC_ATTR||Tn.SC_ATTR)||"data-styled",Gv="active",Qv="data-styled-version",uh="6.1.17",yp=`/*!sc*/
`,Mc=typeof window<"u"&&"HTMLElement"in window,VS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==""?Tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.SC_DISABLE_SPEEDY!==void 0&&Tn.SC_DISABLE_SPEEDY!==""&&Tn.SC_DISABLE_SPEEDY!=="false"&&Tn.SC_DISABLE_SPEEDY),MS={},ch=Object.freeze([]),qo=Object.freeze({});function Yv(n,e,t){return t===void 0&&(t=qo),n.theme!==t.theme&&n.theme||e||t.theme}var Xv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),US=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FS=/(^-|-$)/g;function Qy(n){return n.replace(US,"-").replace(FS,"")}var jS=/(a)(d)/gi,hc=52,Yy=function(n){return String.fromCharCode(n+(n>25?39:97))};function Of(n){var e,t="";for(e=Math.abs(n);e>hc;e=e/hc|0)t=Yy(e%hc)+t;return(Yy(e%hc)+t).replace(jS,"$1-$2")}var uf,Jv=5381,Mo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Zv=function(n){return Mo(Jv,n)};function ew(n){return Of(Zv(n)>>>0)}function BS(n){return n.displayName||n.name||"Component"}function cf(n){return typeof n=="string"&&!0}var tw=typeof Symbol=="function"&&Symbol.for,nw=tw?Symbol.for("react.memo"):60115,zS=tw?Symbol.for("react.forward_ref"):60112,$S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qS=((uf={})[zS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},uf[nw]=rw,uf);function Xy(n){return("type"in(e=n)&&e.type.$$typeof)===nw?rw:"$$typeof"in n?qS[n.$$typeof]:$S;var e}var HS=Object.defineProperty,KS=Object.getOwnPropertyNames,Jy=Object.getOwnPropertySymbols,GS=Object.getOwnPropertyDescriptor,QS=Object.getPrototypeOf,Zy=Object.prototype;function iw(n,e,t){if(typeof e!="string"){if(Zy){var i=QS(e);i&&i!==Zy&&iw(n,i,t)}var o=KS(e);Jy&&(o=o.concat(Jy(e)));for(var l=Xy(n),c=Xy(e),d=0;d<o.length;++d){var p=o[d];if(!(p in WS||t&&t[p]||c&&p in c||l&&p in l)){var y=GS(e,p);try{HS(n,p,y)}catch{}}}}return n}function Ho(n){return typeof n=="function"}function _p(n){return typeof n=="object"&&"styledComponentId"in n}function vs(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Df(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Il(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function bf(n,e,t){if(t===void 0&&(t=!1),!t&&!Il(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=bf(n[i],e[i]);else if(Il(e))for(var i in e)n[i]=bf(n[i],e[i]);return n}function vp(n,e){Object.defineProperty(n,"toString",{value:e})}function Ll(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var YS=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;e>=l;)if((l<<=1)<0)throw Ll(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,t.length);c<p;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),l=o+i,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(yp);return t},n}(),Ic=new Map,Uc=new Map,Sc=1,dc=function(n){if(Ic.has(n))return Ic.get(n);for(;Uc.has(Sc);)Sc++;var e=Sc++;return Ic.set(n,e),Uc.set(e,n),e},XS=function(n,e){Sc=e+1,Ic.set(n,e),Uc.set(e,n)},JS="style[".concat(Wo,"][").concat(Qv,'="').concat(uh,'"]'),ZS=new RegExp("^".concat(Wo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eR=function(n,e,t){for(var i,o=t.split(","),l=0,c=o.length;l<c;l++)(i=o[l])&&n.registerName(e,i)},tR=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(yp),o=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(ZS);if(p){var y=0|parseInt(p[1],10),v=p[2];y!==0&&(XS(v,y),eR(n,v,p[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(d)}}},e_=function(n){for(var e=document.querySelectorAll(JS),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(Wo)!==Gv&&(tR(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function nR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sw=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Wo,"]")));return p[p.length-1]}(t),l=o!==void 0?o.nextSibling:null;i.setAttribute(Wo,Gv),i.setAttribute(Qv,uh);var c=nR();return c&&i.setAttribute("nonce",c),t.insertBefore(i,l),i},rR=function(){function n(e){this.element=sw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var c=i[o];if(c.ownerNode===t)return c}throw Ll(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),iR=function(){function n(e){this.element=sw(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),sR=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),t_=Mc,oR={isServer:!Mc,useCSSOMInjection:!VS},Fc=function(){function n(e,t,i){e===void 0&&(e=qo),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},oR),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Mc&&t_&&(t_=!1,e_(this)),vp(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",y=function(E){var S=function(q){return Uc.get(q)}(E);if(S===void 0)return"continue";var O=l.names.get(S),F=c.getGroup(E);if(O===void 0||!O.size||F.length===0)return"continue";var B="".concat(Wo,".g").concat(E,'[id="').concat(S,'"]'),b="";O!==void 0&&O.forEach(function(q){q.length>0&&(b+="".concat(q,","))}),p+="".concat(F).concat(B,'{content:"').concat(b,'"}').concat(yp)},v=0;v<d;v++)y(v);return p}(o)})}return n.registerId=function(e){return dc(e)},n.prototype.rehydrate=function(){!this.server&&Mc&&e_(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new sR(o):i?new rR(o):new iR(o)}(this.options),new YS(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(dc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(dc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(dc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),aR=/&/g,lR=/^\s*\/\/.*$/gm;function ow(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=ow(t.children,e)),t})}function uR(n){var e,t,i,o=qo,l=o.options,c=l===void 0?qo:l,d=o.plugins,p=d===void 0?ch:d,y=function(S,O,F){return F.startsWith(t)&&F.endsWith(t)&&F.replaceAll(t,"").length>0?".".concat(e):S},v=p.slice();v.push(function(S){S.type===sh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(aR,t).replace(i,y))}),c.prefix&&v.push(bS),v.push(xS);var E=function(S,O,F,B){O===void 0&&(O=""),F===void 0&&(F=""),B===void 0&&(B="&"),e=B,t=O,i=new RegExp("\\".concat(t,"\\b"),"g");var b=S.replace(lR,""),q=kS(F||O?"".concat(F," ").concat(O," { ").concat(b," }"):b);c.namespace&&(q=ow(q,c.namespace));var X=[];return Vc(q,OS(v.concat(DS(function(Y){return X.push(Y)})))),X};return E.hash=p.length?p.reduce(function(S,O){return O.name||Ll(15),Mo(S,O.name)},Jv).toString():"",E}var cR=new Fc,Lf=uR(),aw=Jn.createContext({shouldForwardProp:void 0,styleSheet:cR,stylis:Lf});aw.Consumer;Jn.createContext(void 0);function Vf(){return ee.useContext(aw)}var hR=function(){function n(e,t){var i=this;this.inject=function(o,l){l===void 0&&(l=Lf);var c=i.name+l.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,vp(this,function(){throw Ll(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Lf),this.name+e.hash},n}(),dR=function(n){return n>="A"&&n<="Z"};function n_(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;dR(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var lw=function(n){return n==null||n===!1||n===""},uw=function(n){var e,t,i=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!lw(l)&&(Array.isArray(l)&&l.isCss||Ho(l)?i.push("".concat(n_(o),":"),l,";"):Il(l)?i.push.apply(i,Tl(Tl(["".concat(o," {")],uw(l),!1),["}"],!1)):i.push("".concat(n_(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in LS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function bi(n,e,t,i){if(lw(n))return[];if(_p(n))return[".".concat(n.styledComponentId)];if(Ho(n)){if(!Ho(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return bi(o,e,t,i)}var l;return n instanceof hR?t?(n.inject(t,i),[n.getName(i)]):[n]:Il(n)?uw(n):Array.isArray(n)?Array.prototype.concat.apply(ch,n.map(function(c){return bi(c,e,t,i)})):[n.toString()]}function cw(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Ho(t)&&!_p(t))return!1}return!0}var fR=Zv(uh),pR=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&cw(e),this.componentId=t,this.baseHash=Mo(fR,t),this.baseStyle=i,Fc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=vs(o,this.staticRulesId);else{var l=Df(bi(this.rules,e,t,i)),c=Of(Mo(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}o=vs(o,c),this.staticRulesId=c}else{for(var p=Mo(this.baseHash,i.hash),y="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")y+=E;else if(E){var S=Df(bi(E,e,t,i));p=Mo(p,S+v),y+=S}}if(y){var O=Of(p>>>0);t.hasNameForId(this.componentId,O)||t.insertRules(this.componentId,O,i(y,".".concat(O),void 0,this.componentId)),o=vs(o,O)}}return o},n}(),wp=Jn.createContext(void 0);wp.Consumer;var hf={};function mR(n,e,t){var i=_p(n),o=n,l=!cf(n),c=e.attrs,d=c===void 0?ch:c,p=e.componentId,y=p===void 0?function(te,ge){var ae=typeof te!="string"?"sc":Qy(te);hf[ae]=(hf[ae]||0)+1;var P="".concat(ae,"-").concat(ew(uh+ae+hf[ae]));return ge?"".concat(ge,"-").concat(P):P}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(te){return cf(te)?"styled.".concat(te):"Styled(".concat(BS(te),")")}(n):v,S=e.displayName&&e.componentId?"".concat(Qy(e.displayName),"-").concat(e.componentId):e.componentId||y,O=i&&o.attrs?o.attrs.concat(d).filter(Boolean):d,F=e.shouldForwardProp;if(i&&o.shouldForwardProp){var B=o.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;F=function(te,ge){return B(te,ge)&&b(te,ge)}}else F=B}var q=new pR(t,S,i?o.componentStyle:void 0);function X(te,ge){return function(ae,P,I){var C=ae.attrs,N=ae.componentStyle,D=ae.defaultProps,V=ae.foldedComponentIds,A=ae.styledComponentId,tt=ae.target,Rt=Jn.useContext(wp),At=Vf(),Fe=ae.shouldForwardProp||At.shouldForwardProp,ie=Yv(P,Rt,D)||qo,he=function(Ae,Pe,xe){for(var Ne,Le=Gt(Gt({},Pe),{className:void 0,theme:xe}),st=0;st<Ae.length;st+=1){var nn=Ho(Ne=Ae[st])?Ne(Le):Ne;for(var Yt in nn)Le[Yt]=Yt==="className"?vs(Le[Yt],nn[Yt]):Yt==="style"?Gt(Gt({},Le[Yt]),nn[Yt]):nn[Yt]}return Pe.className&&(Le.className=vs(Le.className,Pe.className)),Le}(C,P,ie),se=he.as||tt,L={};for(var W in he)he[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&he.theme===ie||(W==="forwardedAs"?L.as=he.forwardedAs:Fe&&!Fe(W,se)||(L[W]=he[W]));var me=function(Ae,Pe){var xe=Vf(),Ne=Ae.generateAndInjectStyles(Pe,xe.styleSheet,xe.stylis);return Ne}(N,he),Re=vs(V,A);return me&&(Re+=" "+me),he.className&&(Re+=" "+he.className),L[cf(se)&&!Xv.has(se)?"class":"className"]=Re,I&&(L.ref=I),ee.createElement(se,L)}(Y,te,ge)}X.displayName=E;var Y=Jn.forwardRef(X);return Y.attrs=O,Y.componentStyle=q,Y.displayName=E,Y.shouldForwardProp=F,Y.foldedComponentIds=i?vs(o.foldedComponentIds,o.styledComponentId):"",Y.styledComponentId=S,Y.target=i?o.target:n,Object.defineProperty(Y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=i?function(ge){for(var ae=[],P=1;P<arguments.length;P++)ae[P-1]=arguments[P];for(var I=0,C=ae;I<C.length;I++)bf(ge,C[I],!0);return ge}({},o.defaultProps,te):te}}),vp(Y,function(){return".".concat(Y.styledComponentId)}),l&&iw(Y,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Y}function r_(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var i_=function(n){return Object.assign(n,{isCss:!0})};function Ep(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ho(n)||Il(n))return i_(bi(r_(ch,Tl([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?bi(i):i_(bi(r_(i,e)))}function Mf(n,e,t){if(t===void 0&&(t=qo),!e)throw Ll(1,e);var i=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return n(e,t,Ep.apply(void 0,Tl([o],l,!1)))};return i.attrs=function(o){return Mf(n,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Mf(n,e,Gt(Gt({},t),o))},i}var hw=function(n){return Mf(mR,n)},He=hw;Xv.forEach(function(n){He[n]=hw(n)});var gR=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=cw(e),Fc.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,i,o){var l=o(Df(bi(this.rules,t,i,o)),""),c=this.componentId+e;i.insertRules(c,c,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,i,o){e>2&&Fc.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,t,i,o)},n}();function dw(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=Ep.apply(void 0,Tl([n],e,!1)),o="sc-global-".concat(ew(JSON.stringify(i))),l=new gR(i,o),c=function(p){var y=Vf(),v=Jn.useContext(wp),E=Jn.useRef(y.styleSheet.allocateGSInstance(o)).current;return y.styleSheet.server&&d(E,p,y.styleSheet,v,y.stylis),Jn.useLayoutEffect(function(){if(!y.styleSheet.server)return d(E,p,y.styleSheet,v,y.stylis),function(){return l.removeStyles(E,y.styleSheet)}},[E,p,y.styleSheet,v,y.stylis]),null};function d(p,y,v,E,S){if(l.isStatic)l.renderStyles(p,MS,v,S);else{var O=Gt(Gt({},y),{theme:Yv(y,E,c.defaultProps)});l.renderStyles(p,O,v,S)}}return Jn.memo(c)}var s_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},yR=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,O=y&63;p||(O=64,c||(S=64)),i.push(t[v],t[E],t[S],t[O])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(fw(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||E==null)throw new _R;const S=l<<2|d>>4;if(i.push(S),y!==64){const O=d<<4&240|y>>2;if(i.push(O),E!==64){const F=y<<6&192|E;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vR=function(n){const e=fw(n);return pw.encodeByteArray(e,!0)},jc=function(n){return vR(n).replace(/\./g,"")},mw=function(n){try{return pw.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=()=>wR().__FIREBASE_DEFAULTS__,TR=()=>{if(typeof process>"u"||typeof s_>"u")return;const n=s_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},IR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&mw(n[1]);return e&&JSON.parse(e)},hh=()=>{try{return ER()||TR()||IR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gw=n=>{var e,t;return(t=(e=hh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},yw=n=>{const e=gw(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_w=()=>{var n;return(n=hh())===null||n===void 0?void 0:n.config},vw=n=>{var e;return(e=hh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jc(JSON.stringify(t)),jc(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function AR(){var n;const e=(n=hh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NR(){const n=Qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function xR(){return!AR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function OR(){try{return typeof indexedDB=="object"}catch{return!1}}function DR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="FirebaseError";class pn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=bR,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vl.prototype.create)}}class Vl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?LR(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new pn(o,d,i)}}function LR(n,e){return n.replace(VR,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const VR=/\{\$([^}]+)}/g;function MR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(o_(l)&&o_(c)){if(!Bc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function o_(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function al(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function ll(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function UR(n,e){const t=new FR(n,e);return t.subscribe.bind(t)}class FR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=df),o.error===void 0&&(o.error=df),o.complete===void 0&&(o.complete=df);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function df(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n){return n&&n._delegate?n._delegate:n}class Ui{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new SR;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($R(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zR(n){return n===_s?void 0:n}function $R(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const qR={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},HR=be.INFO,KR={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},GR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=KR[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tp{constructor(e){this.name=e,this._logLevel=HR,this._logHandler=GR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const QR=(n,e)=>e.some(t=>n instanceof t);let a_,l_;function YR(){return a_||(a_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XR(){return l_||(l_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ew=new WeakMap,Uf=new WeakMap,Tw=new WeakMap,ff=new WeakMap,Ip=new WeakMap;function JR(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Li(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Ew.set(t,n)}).catch(()=>{}),Ip.set(e,n),e}function ZR(n){if(Uf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Uf.set(n,e)}let Ff={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Uf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Tw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Li(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function e1(n){Ff=n(Ff)}function t1(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(pf(this),e,...t);return Tw.set(i,e.sort?e.sort():[e]),Li(i)}:XR().includes(n)?function(...e){return n.apply(pf(this),e),Li(Ew.get(this))}:function(...e){return Li(n.apply(pf(this),e))}}function n1(n){return typeof n=="function"?t1(n):(n instanceof IDBTransaction&&ZR(n),QR(n,YR())?new Proxy(n,Ff):n)}function Li(n){if(n instanceof IDBRequest)return JR(n);if(ff.has(n))return ff.get(n);const e=n1(n);return e!==n&&(ff.set(n,e),Ip.set(e,n)),e}const pf=n=>Ip.get(n);function r1(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Li(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Li(c.result),p.oldVersion,p.newVersion,Li(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const i1=["get","getKey","getAll","getAllKeys","count"],s1=["put","add","delete","clear"],mf=new Map;function u_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=s1.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||i1.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return mf.set(e,l),l}e1(n=>({...n,get:(e,t,i)=>u_(e,t)||n.get(e,t,i),has:(e,t)=>!!u_(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(a1(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function a1(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jf="@firebase/app",c_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Tp("@firebase/app"),l1="@firebase/app-compat",u1="@firebase/analytics-compat",c1="@firebase/analytics",h1="@firebase/app-check-compat",d1="@firebase/app-check",f1="@firebase/auth",p1="@firebase/auth-compat",m1="@firebase/database",g1="@firebase/data-connect",y1="@firebase/database-compat",_1="@firebase/functions",v1="@firebase/functions-compat",w1="@firebase/installations",E1="@firebase/installations-compat",T1="@firebase/messaging",I1="@firebase/messaging-compat",S1="@firebase/performance",R1="@firebase/performance-compat",A1="@firebase/remote-config",P1="@firebase/remote-config-compat",C1="@firebase/storage",k1="@firebase/storage-compat",N1="@firebase/firestore",x1="@firebase/vertexai-preview",O1="@firebase/firestore-compat",D1="firebase",b1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="[DEFAULT]",L1={[jf]:"fire-core",[l1]:"fire-core-compat",[c1]:"fire-analytics",[u1]:"fire-analytics-compat",[d1]:"fire-app-check",[h1]:"fire-app-check-compat",[f1]:"fire-auth",[p1]:"fire-auth-compat",[m1]:"fire-rtdb",[g1]:"fire-data-connect",[y1]:"fire-rtdb-compat",[_1]:"fire-fn",[v1]:"fire-fn-compat",[w1]:"fire-iid",[E1]:"fire-iid-compat",[T1]:"fire-fcm",[I1]:"fire-fcm-compat",[S1]:"fire-perf",[R1]:"fire-perf-compat",[A1]:"fire-rc",[P1]:"fire-rc-compat",[C1]:"fire-gcs",[k1]:"fire-gcs-compat",[N1]:"fire-fst",[O1]:"fire-fst-compat",[x1]:"fire-vertex","fire-js":"fire-js",[D1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new Map,V1=new Map,zf=new Map;function h_(n,e){try{n.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cs(n){const e=n.name;if(zf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;zf.set(e,n);for(const t of zc.values())h_(t,n);for(const t of V1.values())h_(t,n);return!0}function dh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vi=new Vl("app","Firebase",M1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ui("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=b1;function Iw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Bf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Vi.create("bad-app-name",{appName:String(o)});if(t||(t=_w()),!t)throw Vi.create("no-options");const l=zc.get(o);if(l){if(Bc(t,l.options)&&Bc(i,l.config))return l;throw Vi.create("duplicate-app",{appName:o})}const c=new WR(o);for(const p of zf.values())c.addComponent(p);const d=new U1(t,i,c);return zc.set(o,d),d}function Sp(n=Bf){const e=zc.get(n);if(!e&&n===Bf&&_w())return Iw();if(!e)throw Vi.create("no-app",{appName:n});return e}function gr(n,e,t){var i;let o=(i=L1[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(d.join(" "));return}Cs(new Ui(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="firebase-heartbeat-database",j1=1,Sl="firebase-heartbeat-store";let gf=null;function Sw(){return gf||(gf=r1(F1,j1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Sl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vi.create("idb-open",{originalErrorMessage:n.message})})),gf}async function B1(n){try{const t=(await Sw()).transaction(Sl),i=await t.objectStore(Sl).get(Rw(n));return await t.done,i}catch(e){if(e instanceof pn)Hr.warn(e.message);else{const t=Vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function d_(n,e){try{const i=(await Sw()).transaction(Sl,"readwrite");await i.objectStore(Sl).put(e,Rw(n)),await i.done}catch(t){if(t instanceof pn)Hr.warn(t.message);else{const i=Vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function Rw(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=1024,$1=30*24*60*60*1e3;class W1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new H1(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=f_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=$1}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=f_(),{heartbeatsToSend:i,unsentEntries:o}=q1(this._heartbeatsCache.heartbeats),l=jc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function f_(){return new Date().toISOString().substring(0,10)}function q1(n,e=z1){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),p_(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),p_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class H1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return OR()?DR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await B1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return d_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return d_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function p_(n){return jc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(n){Cs(new Ui("platform-logger",e=>new o1(e),"PRIVATE")),Cs(new Ui("heartbeat",e=>new W1(e),"PRIVATE")),gr(jf,c_,n),gr(jf,c_,"esm2017"),gr("fire-js","")}K1("");var G1="firebase",Q1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(G1,Q1,"app");function Rp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Y1=Aw,Pw=new Vl("auth","Firebase",Aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Tp("@firebase/auth");function X1(n,...e){$c.logLevel<=be.WARN&&$c.warn(`Auth (${Vs}): ${n}`,...e)}function Rc(n,...e){$c.logLevel<=be.ERROR&&$c.error(`Auth (${Vs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n,...e){throw Pp(n,...e)}function tr(n,...e){return Pp(n,...e)}function Ap(n,e,t){const i=Object.assign(Object.assign({},Y1()),{[e]:t});return new Vl("auth","Firebase",i).create(e,{appName:n.name})}function qr(n){return Ap(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function J1(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Vn(n,"argument-error"),Ap(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Pw.create(n,...e)}function we(n,e,...t){if(!n)throw Pp(e,...t)}function zr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rc(e),new Error(e)}function Kr(n,e){n||zr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Z1(){return m_()==="http:"||m_()==="https:"}function m_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Z1()||CR()||"connection"in navigator)?navigator.onLine:!0}function tA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kr(t>e,"Short delay should be less than long delay!"),this.isMobile=RR()||kR()}get(){return eA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(n,e){Kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=new Ul(3e4,6e4);function Jr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tr(n,e,t,i,o={}){return kw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Ml(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return PR()||(y.referrerPolicy="no-referrer"),Cw.fetch()(Nw(n,n.config.apiHost,t,d),y)})}async function kw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},nA),e);try{const o=new sA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw fc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw fc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw fc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw fc(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Ap(n,v,y);Vn(n,v)}}catch(o){if(o instanceof pn)throw o;Vn(n,"network-request-failed",{message:String(o)})}}async function Fl(n,e,t,i,o={}){const l=await Tr(n,e,t,i,o);return"mfaPendingCredential"in l&&Vn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Nw(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Cp(n.config,o):`${n.config.apiScheme}://${o}`}function iA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tr(this.auth,"network-request-failed")),rA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=tr(n,e,i);return o.customData._tokenResponse=t,o}function g_(n){return n!==void 0&&n.enterprise!==void 0}class oA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return iA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aA(n,e){return Tr(n,"GET","/v2/recaptchaConfig",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(n,e){return Tr(n,"POST","/v1/accounts:delete",e)}async function xw(n,e){return Tr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uA(n,e=!1){const t=at(n),i=await t.getIdToken(e),o=kp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:pl(yf(o.auth_time)),issuedAtTime:pl(yf(o.iat)),expirationTime:pl(yf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function yf(n){return Number(n)*1e3}function kp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=mw(t);return o?JSON.parse(o):(Rc("Failed to decode base64 JWT payload"),null)}catch(o){return Rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function y_(n){const e=kp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof pn&&cA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function cA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pl(this.lastLoginAt),this.creationTime=pl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Ko(n,xw(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Ow(l.providerUserInfo):[],d=fA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Wf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function dA(n){const e=at(n);await Wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ow(n){return n.map(e=>{var{providerId:t}=e,i=Rp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(n,e){const t=await kw(n,{},async()=>{const i=Ml({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=Nw(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Cw.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function mA(n,e){return Tr(n,"POST","/v2/accounts:revokeToken",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):y_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=y_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await pA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new Uo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Uo,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $r{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Wf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uA(this,e)}reload(){return dA(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await Ko(this,lA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:Y,emailVerified:te,isAnonymous:ge,providerData:ae,stsTokenManager:P}=t;we(Y&&P,e,"internal-error");const I=Uo.fromJSON(this.name,P);we(typeof Y=="string",e,"internal-error"),Ri(E,e.name),Ri(S,e.name),we(typeof te=="boolean",e,"internal-error"),we(typeof ge=="boolean",e,"internal-error"),Ri(O,e.name),Ri(F,e.name),Ri(B,e.name),Ri(b,e.name),Ri(q,e.name),Ri(X,e.name);const C=new $r({uid:Y,auth:e,email:S,emailVerified:te,displayName:E,isAnonymous:ge,photoURL:F,phoneNumber:O,tenantId:B,stsTokenManager:I,createdAt:q,lastLoginAt:X});return ae&&Array.isArray(ae)&&(C.providerData=ae.map(N=>Object.assign({},N))),b&&(C._redirectEventId=b),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new Uo;o.updateFromServerResponse(t);const l=new $r({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Wc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ow(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new Uo;d.updateFromIdToken(i);const p=new $r({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Wf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Map;function Wr(n){Kr(n instanceof Function,"Expected a class definition");let e=__.get(n);return e?(Kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,__.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Dw.type="NONE";const v_=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e,t){return`firebase:${n}:${e}:${t}`}class Fo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ac("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Fo(Wr(v_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Wr(v_);const c=Ac(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const E=$r._fromJSON(e,v);y!==l&&(d=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Fo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Fo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fw(e))return"Blackberry";if(jw(e))return"Webos";if(Lw(e))return"Safari";if((e.includes("chrome/")||Vw(e))&&!e.includes("edge/"))return"Chrome";if(Uw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function bw(n=Qt()){return/firefox\//i.test(n)}function Lw(n=Qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vw(n=Qt()){return/crios\//i.test(n)}function Mw(n=Qt()){return/iemobile/i.test(n)}function Uw(n=Qt()){return/android/i.test(n)}function Fw(n=Qt()){return/blackberry/i.test(n)}function jw(n=Qt()){return/webos/i.test(n)}function Np(n=Qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function gA(n=Qt()){var e;return Np(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yA(){return NR()&&document.documentMode===10}function Bw(n=Qt()){return Np(n)||Uw(n)||jw(n)||Fw(n)||/windows phone/i.test(n)||Mw(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(n,e=[]){let t;switch(n){case"Browser":t=w_(Qt());break;case"Worker":t=`${w_(Qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Vs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(n,e={}){return Tr(n,"GET","/v2/passwordPolicy",Jr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=6;class EA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:wA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new E_(this),this.idTokenSubscription=new E_(this),this.beforeStateQueue=new _A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Fo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xw(this,{idToken:e}),i=await $r._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(qr(this));const t=e?at(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vA(this),t=new EA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await mA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Fo.create(this,[Wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&X1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zr(n){return at(n)}class E_{constructor(e){this.auth=e,this.observer=null,this.addObserver=UR(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IA(n){fh=n}function $w(n){return fh.loadJS(n)}function SA(){return fh.recaptchaEnterpriseScript}function RA(){return fh.gapiScript}function AA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const PA="recaptcha-enterprise",CA="NO_RECAPTCHA";class kA{constructor(e){this.type=PA,this.auth=Zr(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{aA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new oA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;g_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(CA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&g_(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=SA();p.length!==0&&(p+=d),$w(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function T_(n,e,t,i=!1){const o=new kA(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function qc(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await T_(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await T_(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n,e){const t=dh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Bc(l,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function xA(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function OA(n,e,t){const i=Zr(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Ww(e),{host:c,port:d}=DA(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),bA()}function Ww(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function DA(n){const e=Ww(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:I_(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:I_(c)}}}function I_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function bA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,t){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function LA(n,e){return Tr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,e){return Fl(n,"POST","/v1/accounts:signInWithPassword",Jr(n,e))}async function MA(n,e){return Tr(n,"POST","/v1/accounts:sendOobCode",Jr(n,e))}async function UA(n,e){return MA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FA(n,e){return Fl(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}async function jA(n,e){return Fl(n,"POST","/v1/accounts:signInWithEmailLink",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends xp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Rl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Rl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,t,"signInWithPassword",VA);case"emailLink":return FA(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,i,"signUpPassword",LA);case"emailLink":return jA(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n,e){return Fl(n,"POST","/v1/accounts:signInWithIdp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="http://localhost";class ks extends xp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ks(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Rp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new ks(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return jo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,jo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jo(e,t)}buildRequest(){const e={requestUri:BA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ml(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $A(n){const e=al(ll(n)).link,t=e?al(ll(e)).deep_link_id:null,i=al(ll(n)).deep_link_id;return(i?al(ll(i)).link:null)||i||t||e||n}class Op{constructor(e){var t,i,o,l,c,d;const p=al(ll(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,E=zA((o=p.mode)!==null&&o!==void 0?o:null);we(y&&v&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=$A(e);try{return new Op(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.providerId=ia.PROVIDER_ID}static credential(e,t){return Rl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Op.parseLink(t);return we(i,"argument-error"),Rl._fromEmailAndCode(e,i.code,i.tenantId)}}ia.PROVIDER_ID="password";ia.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ia.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Dp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends jl{constructor(){super("facebook.com")}static credential(e){return ks._fromParams({providerId:Pi.PROVIDER_ID,signInMethod:Pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pi.credentialFromTaggedObject(e)}static credentialFromError(e){return Pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pi.credential(e.oauthAccessToken)}catch{return null}}}Pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ks._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ci.credential(t,i)}catch{return null}}}Ci.GOOGLE_SIGN_IN_METHOD="google.com";Ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends jl{constructor(){super("github.com")}static credential(e){return ks._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends jl{constructor(){super("twitter.com")}static credential(e,t){return ks._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ki.credential(t,i)}catch{return null}}}ki.TWITTER_SIGN_IN_METHOD="twitter.com";ki.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e){return Fl(n,"POST","/v1/accounts:signUp",Jr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $r._fromIdTokenResponse(e,i,o),c=S_(i);return new Ns({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=S_(i);return new Ns({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function S_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends pn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Hc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Hc(e,t,i,o)}}function qw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Hc._fromErrorAndOperation(n,l,e,i):l})}async function qA(n,e,t=!1){const i=await Ko(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ns._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n,e,t=!1){const{auth:i}=n;if(Zn(i.app))return Promise.reject(qr(i));const o="reauthenticate";try{const l=await Ko(n,qw(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=kp(l.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),Ns._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Vn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e,t=!1){if(Zn(n.app))return Promise.reject(qr(n));const i="signIn",o=await qw(n,i,e),l=await Ns._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function KA(n,e){return Hw(Zr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kw(n){const e=Zr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gw(n,e,t){const i=Zr(n);await qc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",UA)}async function GA(n,e,t){if(Zn(n.app))return Promise.reject(qr(n));const i=Zr(n),c=await qc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Kw(n),p}),d=await Ns._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function QA(n,e,t){return Zn(n.app)?Promise.reject(qr(n)):KA(at(n),ia.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Kw(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(n,e){return Tr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=at(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Ko(i,YA(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function JA(n,e,t,i){return at(n).onIdTokenChanged(e,t,i)}function ZA(n,e,t){return at(n).beforeAuthStateChanged(e,t)}const Kc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kc,"1"),this.storage.removeItem(Kc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=1e3,tP=10;class Yw extends Qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);yA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,tP):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},eP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yw.type="LOCAL";const nP=Yw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw extends Qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xw.type="SESSION";const Jw=Xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new ph(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await rP(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=bp("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(){return window}function sP(n){yr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function oP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function lP(){return Zw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0="firebaseLocalStorageDb",uP=1,Gc="firebaseLocalStorage",t0="fbase_key";class Bl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mh(n,e){return n.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function cP(){const n=indexedDB.deleteDatabase(e0);return new Bl(n).toPromise()}function qf(){const n=indexedDB.open(e0,uP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Gc,{keyPath:t0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Gc)?e(i):(i.close(),await cP(),e(await qf()))})})}async function R_(n,e,t){const i=mh(n,!0).put({[t0]:e,value:t});return new Bl(i).toPromise()}async function hP(n,e){const t=mh(n,!1).get(e),i=await new Bl(t).toPromise();return i===void 0?null:i.value}function A_(n,e){const t=mh(n,!0).delete(e);return new Bl(t).toPromise()}const dP=800,fP=3;class n0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>fP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(lP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oP(),!this.activeServiceWorker)return;this.sender=new iP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await R_(e,Kc,"1"),await A_(e,Kc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>R_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>hP(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>A_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=mh(o,!1).getAll();return new Bl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}n0.type="LOCAL";const pP=n0;new Ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(n,e){return e?Wr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends xp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mP(n){return Hw(n.auth,new Lp(n),n.bypassAuthState)}function gP(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),HA(t,new Lp(n),n.bypassAuthState)}async function yP(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),qA(t,new Lp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mP;case"linkViaPopup":case"linkViaRedirect":return yP;case"reauthViaPopup":case"reauthViaRedirect":return gP;default:Vn(this.auth,"internal-error")}}resolve(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new Ul(2e3,1e4);async function vP(n,e,t){if(Zn(n.app))return Promise.reject(tr(n,"operation-not-supported-in-this-environment"));const i=Zr(n);J1(n,e,Dp);const o=r0(i,t);return new ws(i,"signInViaPopup",e,o).executeNotNull()}class ws extends i0{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Kr(this.filter.length===1,"Popup operations only handle one event");const e=bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_P.get())};e()}}ws.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP="pendingRedirect",Pc=new Map;class EP extends i0{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Pc.get(this.auth._key());if(!e){try{const i=await TP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Pc.set(this.auth._key(),e)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TP(n,e){const t=RP(e),i=SP(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function IP(n,e){Pc.set(n._key(),e)}function SP(n){return Wr(n._redirectPersistence)}function RP(n){return Ac(wP,n.config.apiKey,n.name)}async function AP(n,e,t=!1){if(Zn(n.app))return Promise.reject(qr(n));const i=Zr(n),o=r0(i,e),c=await new EP(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=10*60*1e3;class CP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!s0(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PP&&this.cachedEventUids.clear(),this.cachedEventUids.has(P_(e))}saveEventToCache(e){this.cachedEventUids.add(P_(e)),this.lastProcessedEventTime=Date.now()}}function P_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function s0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return s0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(n,e={}){return Tr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function DP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NP(n);for(const t of e)try{if(bP(t))return}catch{}Vn(n,"unauthorized-domain")}function bP(n){const e=$f(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!OP.test(t))return!1;if(xP.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new Ul(3e4,6e4);function C_(){const n=yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VP(n){return new Promise((e,t)=>{var i,o,l;function c(){C_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{C_(),t(tr(n,"network-request-failed"))},timeout:LP.get()})}if(!((o=(i=yr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=yr().gapi)===null||l===void 0)&&l.load)c();else{const d=AA("iframefcb");return yr()[d]=()=>{gapi.load?c():t(tr(n,"network-request-failed"))},$w(`${RA()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function MP(n){return Cc=Cc||VP(n),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new Ul(5e3,15e3),FP="__/auth/iframe",jP="emulator/auth/iframe",BP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Cp(e,jP):`https://${n.config.authDomain}/${FP}`,i={apiKey:e.apiKey,appName:n.name,v:Vs},o=zP.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Ml(i).slice(1)}`}async function WP(n){const e=await MP(n),t=yr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:$P(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BP,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=tr(n,"network-request-failed"),d=yr().setTimeout(()=>{l(c)},UP.get());function p(){yr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HP=500,KP=600,GP="_blank",QP="http://localhost";class k_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YP(n,e,t,i=HP,o=KP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},qP),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Qt().toLowerCase();t&&(d=Vw(y)?GP:t),bw(y)&&(e=e||QP,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[O,F])=>`${S}${O}=${F},`,"");if(gA(y)&&d!=="_self")return XP(e||"",d),new k_(null);const E=window.open(e||"",d,v);we(E,n,"popup-blocked");try{E.focus()}catch{}return new k_(E)}function XP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP="__/auth/handler",ZP="emulator/auth/handler",eC=encodeURIComponent("fac");async function N_(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Vs,eventId:o};if(e instanceof Dp){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",MR(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof jl){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${eC}=${encodeURIComponent(p)}`:"";return`${tC(n)}?${Ml(d).slice(1)}${y}`}function tC({config:n}){return n.emulator?Cp(n,ZP):`https://${n.authDomain}/${JP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="webStorageSupport";class nC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jw,this._completeRedirectFn=AP,this._overrideRedirectResult=IP}async _openPopup(e,t,i,o){var l;Kr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await N_(e,t,i,$f(),o);return YP(e,c,bp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await N_(e,t,i,$f(),o);return sP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Kr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await WP(e),i=new CP(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_f,{type:_f},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[_f];c!==void 0&&t(!!c),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Bw()||Lw()||Np()}}const rC=nC;var x_="@firebase/auth",O_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oC(n){Cs(new Ui("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zw(n)},y=new TA(i,o,l,p);return xA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Cs(new Ui("auth-internal",e=>{const t=Zr(e.getProvider("auth").getImmediate());return(i=>new iC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(x_,O_,sC(n)),gr(x_,O_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=5*60,lC=vw("authIdTokenMaxAge")||aC;let D_=null;const uC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>lC)return;const o=t==null?void 0:t.token;D_!==o&&(D_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function cC(n=Sp()){const e=dh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NA(n,{popupRedirectResolver:rC,persistence:[pP,nP,Jw]}),i=vw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=uC(l.toString());ZA(t,c,()=>c(t.currentUser)),JA(t,d=>c(d))}}const o=gw("auth");return o&&OA(t,`http://${o}`),t}function hC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}IA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=tr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",hC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oC("Browser");var b_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ss,o0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function C(){}C.prototype=I.prototype,P.D=I.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(N,D,V){for(var A=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)A[tt-2]=arguments[tt];return I.prototype[D].apply(N,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,C){C||(C=0);var N=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)N[D]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(D=0;16>D;++D)N[D]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=P.g[0],C=P.g[1],D=P.g[2];var V=P.g[3],A=I+(V^C&(D^V))+N[0]+3614090360&4294967295;I=C+(A<<7&4294967295|A>>>25),A=V+(D^I&(C^D))+N[1]+3905402710&4294967295,V=I+(A<<12&4294967295|A>>>20),A=D+(C^V&(I^C))+N[2]+606105819&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(I^D&(V^I))+N[3]+3250441966&4294967295,C=D+(A<<22&4294967295|A>>>10),A=I+(V^C&(D^V))+N[4]+4118548399&4294967295,I=C+(A<<7&4294967295|A>>>25),A=V+(D^I&(C^D))+N[5]+1200080426&4294967295,V=I+(A<<12&4294967295|A>>>20),A=D+(C^V&(I^C))+N[6]+2821735955&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(I^D&(V^I))+N[7]+4249261313&4294967295,C=D+(A<<22&4294967295|A>>>10),A=I+(V^C&(D^V))+N[8]+1770035416&4294967295,I=C+(A<<7&4294967295|A>>>25),A=V+(D^I&(C^D))+N[9]+2336552879&4294967295,V=I+(A<<12&4294967295|A>>>20),A=D+(C^V&(I^C))+N[10]+4294925233&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(I^D&(V^I))+N[11]+2304563134&4294967295,C=D+(A<<22&4294967295|A>>>10),A=I+(V^C&(D^V))+N[12]+1804603682&4294967295,I=C+(A<<7&4294967295|A>>>25),A=V+(D^I&(C^D))+N[13]+4254626195&4294967295,V=I+(A<<12&4294967295|A>>>20),A=D+(C^V&(I^C))+N[14]+2792965006&4294967295,D=V+(A<<17&4294967295|A>>>15),A=C+(I^D&(V^I))+N[15]+1236535329&4294967295,C=D+(A<<22&4294967295|A>>>10),A=I+(D^V&(C^D))+N[1]+4129170786&4294967295,I=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(I^C))+N[6]+3225465664&4294967295,V=I+(A<<9&4294967295|A>>>23),A=D+(I^C&(V^I))+N[11]+643717713&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^I&(D^V))+N[0]+3921069994&4294967295,C=D+(A<<20&4294967295|A>>>12),A=I+(D^V&(C^D))+N[5]+3593408605&4294967295,I=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(I^C))+N[10]+38016083&4294967295,V=I+(A<<9&4294967295|A>>>23),A=D+(I^C&(V^I))+N[15]+3634488961&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^I&(D^V))+N[4]+3889429448&4294967295,C=D+(A<<20&4294967295|A>>>12),A=I+(D^V&(C^D))+N[9]+568446438&4294967295,I=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(I^C))+N[14]+3275163606&4294967295,V=I+(A<<9&4294967295|A>>>23),A=D+(I^C&(V^I))+N[3]+4107603335&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^I&(D^V))+N[8]+1163531501&4294967295,C=D+(A<<20&4294967295|A>>>12),A=I+(D^V&(C^D))+N[13]+2850285829&4294967295,I=C+(A<<5&4294967295|A>>>27),A=V+(C^D&(I^C))+N[2]+4243563512&4294967295,V=I+(A<<9&4294967295|A>>>23),A=D+(I^C&(V^I))+N[7]+1735328473&4294967295,D=V+(A<<14&4294967295|A>>>18),A=C+(V^I&(D^V))+N[12]+2368359562&4294967295,C=D+(A<<20&4294967295|A>>>12),A=I+(C^D^V)+N[5]+4294588738&4294967295,I=C+(A<<4&4294967295|A>>>28),A=V+(I^C^D)+N[8]+2272392833&4294967295,V=I+(A<<11&4294967295|A>>>21),A=D+(V^I^C)+N[11]+1839030562&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^I)+N[14]+4259657740&4294967295,C=D+(A<<23&4294967295|A>>>9),A=I+(C^D^V)+N[1]+2763975236&4294967295,I=C+(A<<4&4294967295|A>>>28),A=V+(I^C^D)+N[4]+1272893353&4294967295,V=I+(A<<11&4294967295|A>>>21),A=D+(V^I^C)+N[7]+4139469664&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^I)+N[10]+3200236656&4294967295,C=D+(A<<23&4294967295|A>>>9),A=I+(C^D^V)+N[13]+681279174&4294967295,I=C+(A<<4&4294967295|A>>>28),A=V+(I^C^D)+N[0]+3936430074&4294967295,V=I+(A<<11&4294967295|A>>>21),A=D+(V^I^C)+N[3]+3572445317&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^I)+N[6]+76029189&4294967295,C=D+(A<<23&4294967295|A>>>9),A=I+(C^D^V)+N[9]+3654602809&4294967295,I=C+(A<<4&4294967295|A>>>28),A=V+(I^C^D)+N[12]+3873151461&4294967295,V=I+(A<<11&4294967295|A>>>21),A=D+(V^I^C)+N[15]+530742520&4294967295,D=V+(A<<16&4294967295|A>>>16),A=C+(D^V^I)+N[2]+3299628645&4294967295,C=D+(A<<23&4294967295|A>>>9),A=I+(D^(C|~V))+N[0]+4096336452&4294967295,I=C+(A<<6&4294967295|A>>>26),A=V+(C^(I|~D))+N[7]+1126891415&4294967295,V=I+(A<<10&4294967295|A>>>22),A=D+(I^(V|~C))+N[14]+2878612391&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~I))+N[5]+4237533241&4294967295,C=D+(A<<21&4294967295|A>>>11),A=I+(D^(C|~V))+N[12]+1700485571&4294967295,I=C+(A<<6&4294967295|A>>>26),A=V+(C^(I|~D))+N[3]+2399980690&4294967295,V=I+(A<<10&4294967295|A>>>22),A=D+(I^(V|~C))+N[10]+4293915773&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~I))+N[1]+2240044497&4294967295,C=D+(A<<21&4294967295|A>>>11),A=I+(D^(C|~V))+N[8]+1873313359&4294967295,I=C+(A<<6&4294967295|A>>>26),A=V+(C^(I|~D))+N[15]+4264355552&4294967295,V=I+(A<<10&4294967295|A>>>22),A=D+(I^(V|~C))+N[6]+2734768916&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~I))+N[13]+1309151649&4294967295,C=D+(A<<21&4294967295|A>>>11),A=I+(D^(C|~V))+N[4]+4149444226&4294967295,I=C+(A<<6&4294967295|A>>>26),A=V+(C^(I|~D))+N[11]+3174756917&4294967295,V=I+(A<<10&4294967295|A>>>22),A=D+(I^(V|~C))+N[2]+718787259&4294967295,D=V+(A<<15&4294967295|A>>>17),A=C+(V^(D|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,P.g[2]=P.g[2]+D&4294967295,P.g[3]=P.g[3]+V&4294967295}i.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var C=I-this.blockSize,N=this.B,D=this.h,V=0;V<I;){if(D==0)for(;V<=C;)o(this,P,V),V+=this.blockSize;if(typeof P=="string"){for(;V<I;)if(N[D++]=P.charCodeAt(V++),D==this.blockSize){o(this,N),D=0;break}}else for(;V<I;)if(N[D++]=P[V++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=I},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var C=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=C&255,C/=256;for(this.u(P),P=Array(16),I=C=0;4>I;++I)for(var N=0;32>N;N+=8)P[C++]=this.g[I]>>>N&255;return P};function l(P,I){var C=d;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=I(P)}function c(P,I){this.h=I;for(var C=[],N=!0,D=P.length-1;0<=D;D--){var V=P[D]|0;N&&V==I||(C[D]=V,N=!1)}this.g=C}var d={};function p(P){return-128<=P&&128>P?l(P,function(I){return new c([I|0],0>I?-1:0)}):new c([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return E;if(0>P)return b(y(-P));for(var I=[],C=1,N=0;P>=C;N++)I[N]=P/C|0,C*=4294967296;return new c(I,0)}function v(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return b(v(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(I,8)),N=E,D=0;D<P.length;D+=8){var V=Math.min(8,P.length-D),A=parseInt(P.substring(D,D+V),I);8>V?(V=y(Math.pow(I,V)),N=N.j(V).add(y(A))):(N=N.j(C),N=N.add(y(A)))}return N}var E=p(0),S=p(1),O=p(16777216);n=c.prototype,n.m=function(){if(B(this))return-b(this).m();for(var P=0,I=1,C=0;C<this.g.length;C++){var N=this.i(C);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(F(this))return"0";if(B(this))return"-"+b(this).toString(P);for(var I=y(Math.pow(P,6)),C=this,N="";;){var D=te(C,I).g;C=q(C,D.j(I));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=D,F(C))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function F(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function B(P){return P.h==-1}n.l=function(P){return P=q(this,P),B(P)?-1:F(P)?0:1};function b(P){for(var I=P.g.length,C=[],N=0;N<I;N++)C[N]=~P.g[N];return new c(C,~P.h).add(S)}n.abs=function(){return B(this)?b(this):this},n.add=function(P){for(var I=Math.max(this.g.length,P.g.length),C=[],N=0,D=0;D<=I;D++){var V=N+(this.i(D)&65535)+(P.i(D)&65535),A=(V>>>16)+(this.i(D)>>>16)+(P.i(D)>>>16);N=A>>>16,V&=65535,A&=65535,C[D]=A<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function q(P,I){return P.add(b(I))}n.j=function(P){if(F(this)||F(P))return E;if(B(this))return B(P)?b(this).j(b(P)):b(b(this).j(P));if(B(P))return b(this.j(b(P)));if(0>this.l(O)&&0>P.l(O))return y(this.m()*P.m());for(var I=this.g.length+P.g.length,C=[],N=0;N<2*I;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<P.g.length;D++){var V=this.i(N)>>>16,A=this.i(N)&65535,tt=P.i(D)>>>16,Rt=P.i(D)&65535;C[2*N+2*D]+=A*Rt,X(C,2*N+2*D),C[2*N+2*D+1]+=V*Rt,X(C,2*N+2*D+1),C[2*N+2*D+1]+=A*tt,X(C,2*N+2*D+1),C[2*N+2*D+2]+=V*tt,X(C,2*N+2*D+2)}for(N=0;N<I;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=I;N<2*I;N++)C[N]=0;return new c(C,0)};function X(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function Y(P,I){this.g=P,this.h=I}function te(P,I){if(F(I))throw Error("division by zero");if(F(P))return new Y(E,E);if(B(P))return I=te(b(P),I),new Y(b(I.g),b(I.h));if(B(I))return I=te(P,b(I)),new Y(b(I.g),I.h);if(30<P.g.length){if(B(P)||B(I))throw Error("slowDivide_ only works with positive integers.");for(var C=S,N=I;0>=N.l(P);)C=ge(C),N=ge(N);var D=ae(C,1),V=ae(N,1);for(N=ae(N,2),C=ae(C,2);!F(N);){var A=V.add(N);0>=A.l(P)&&(D=D.add(C),V=A),N=ae(N,1),C=ae(C,1)}return I=q(P,D.j(I)),new Y(D,I)}for(D=E;0<=P.l(I);){for(C=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=y(C),A=V.j(I);B(A)||0<A.l(P);)C-=N,V=y(C),A=V.j(I);F(V)&&(V=S),D=D.add(V),P=q(P,A)}return new Y(D,P)}n.A=function(P){return te(this,P).h},n.and=function(P){for(var I=Math.max(this.g.length,P.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)&P.i(N);return new c(C,this.h&P.h)},n.or=function(P){for(var I=Math.max(this.g.length,P.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)|P.i(N);return new c(C,this.h|P.h)},n.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)^P.i(N);return new c(C,this.h^P.h)};function ge(P){for(var I=P.g.length+1,C=[],N=0;N<I;N++)C[N]=P.i(N)<<1|P.i(N-1)>>>31;return new c(C,P.h)}function ae(P,I){var C=I>>5;I%=32;for(var N=P.g.length-C,D=[],V=0;V<N;V++)D[V]=0<I?P.i(V+C)>>>I|P.i(V+C+1)<<32-I:P.i(V+C);return new c(D,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,o0=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Ss=c}).apply(typeof b_<"u"?b_:typeof self<"u"?self:typeof window<"u"?window:{});var pc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var a0,ul,l0,kc,Hf,u0,c0,h0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof pc=="object"&&pc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function E(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function O(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,$){for(var ne=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)ne[$e-2]=arguments[$e];return m.prototype[M].apply(T,ne)}}function B(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const M=u.length||0,$=T.length||0;u.length=M+$;for(let ne=0;ne<$;ne++)u[M+ne]=T[ne]}else u.push(T)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function Y(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function te(u){return te[" "](u),u}te[" "]=function(){};var ge=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function ae(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let $=0;$<C.length;$++)_=C[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){d.setTimeout(()=>{throw u},0)}function A(){var u=he;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,_){const T=Rt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Rt=new q(()=>new At,u=>u.reset());class At{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,ie=!1,he=new tt,se=()=>{const u=d.Promise.resolve(void 0);Fe=()=>{u.then(L)}};var L=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(_){V(_)}var m=Rt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}ie=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(me.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(ge){e:{try{te(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}F(Ae,me);var Pe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Le(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Ne,this.da=this.fa=!1}function st(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function nn(u){this.src=u,this.g={},this.h=0}nn.prototype.add=function(u,m,_,T,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ne=ei(u,m,T,M);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new Le(m,this.src,$,!!T,M),m.fa=_,u.push(m)),m};function Yt(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=M)&&Array.prototype.splice.call(T,M,1),$&&(st(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ei(u,m,_,T){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==T)return M}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),js={};function ua(u,m,_,T,M){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ua(u,m[$],_,T,M);return null}return _=da(_),u&&u[xe]?u.K(m,_,y(T)?!!T.capture:!1,M):ca(u,m,_,!1,T,M)}function ca(u,m,_,T,M,$){if(!m)throw Error("Invalid event type");var ne=y(M)?!!M.capture:!!M,$e=zs(u);if($e||(u[Wi]=$e=new nn(u)),_=$e.add(m,_,T,ne,$),_.proxy)return _;if(T=Ql(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Re||(M=ne),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Sr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ql(){function u(_){return m.call(u.src,u.listener,_)}const m=ha;return u}function Bs(u,m,_,T,M){if(Array.isArray(m))for(var $=0;$<m.length;$++)Bs(u,m[$],_,T,M);else T=y(T)?!!T.capture:!!T,_=da(_),u&&u[xe]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=ei($,_,T,M),-1<_&&(st($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=zs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ei(m,_,T,M)),(_=-1<u?m[u]:null)&&Ir(_))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[xe])Yt(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Sr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=zs(m))?(Yt(_,u),_.h==0&&(_.src=null,m[Wi]=null)):st(u)}}}function Sr(u){return u in js?js[u]:js[u]="on"+u}function ha(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Ir(u),u=_.call(T,m)}return u}function zs(u){return u=u[Wi],u instanceof nn?u:null}var $s="__closure_events_fn_"+(1e9*Math.random()>>>0);function da(u){return typeof u=="function"?u:(u[$s]||(u[$s]=function(m){return u.handleEvent(m)}),u[$s])}function vt(){W.call(this),this.i=new nn(this),this.M=this,this.F=null}F(vt,W),vt.prototype[xe]=!0,vt.prototype.removeEventListener=function(u,m,_,T){Bs(this,u,m,_,T)};function wt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new me(m,u);else if(m instanceof me)m.target=m.target||u;else{var M=m;m=new me(T,u),N(m,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var ne=m.g=_[$];M=Rr(ne,T,!0,m)&&M}if(ne=m.g=u,M=Rr(ne,T,!0,m)&&M,M=Rr(ne,T,!1,m)&&M,_)for($=0;$<_.length;$++)ne=m.g=_[$],M=Rr(ne,T,!1,m)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)st(_[T]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},vt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Rr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,$=0;$<m.length;++$){var ne=m[$];if(ne&&!ne.da&&ne.capture==_){var $e=ne.listener,Et=ne.ha||ne.src;ne.fa&&Yt(u.i,ne),M=$e.call(Et,T)!==!1&&M}}return M&&!T.defaultPrevented}function fa(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function ti(u){u.g=fa(()=>{u.g=null,u.i&&(u.i=!1,ti(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class qi extends W{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hi(u){W.call(this),this.h=u,this.g={}}F(Hi,W);var pa=[];function ma(u){ae(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ir(m)},u),u.g={}}Hi.prototype.N=function(){Hi.aa.N.call(this),ma(this)},Hi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ga=d.JSON.stringify,ya=d.JSON.parse,_a=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Ki(){}Ki.prototype.h=null;function Ws(u){return u.h||(u.h=u.i())}function qs(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rr(){me.call(this,"d")}F(rr,me);function Hs(){me.call(this,"c")}F(Hs,me);var ir={},va=null;function Gi(){return va=va||new vt}ir.La="serverreachability";function wa(u){me.call(this,ir.La,u)}F(wa,me);function Ar(u){const m=Gi();wt(m,new wa(m))}ir.STAT_EVENT="statevent";function Ea(u,m){me.call(this,ir.STAT_EVENT,u),this.stat=m}F(Ea,me);function ct(u){const m=Gi();wt(m,new Ea(m,u))}ir.Ma="timingevent";function Ks(u,m){me.call(this,ir.Ma,u),this.size=m}F(Ks,me);function Mn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Qi(){this.g=!0}Qi.prototype.xa=function(){this.g=!1};function Yi(u,m,_,T,M,$){u.info(function(){if(u.g)if($)for(var ne="",$e=$.split("&"),Et=0;Et<$e.length;Et++){var Ve=$e[Et].split("=");if(1<Ve.length){var Pt=Ve[0];Ve=Ve[1];var pt=Pt.split("_");ne=2<=pt.length&&pt[1]=="type"?ne+(Pt+"="+Ve+"&"):ne+(Pt+"=redacted&")}}else ne=null;else ne=$;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+ne})}function Gs(u,m,_,T,M,$,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+$+" "+ne})}function Un(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+kh(u,_)+(T?" "+T:"")})}function Ta(u,m){u.info(function(){return"TIMEOUT: "+m})}Qi.prototype.info=function(){};function kh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var ne=1;ne<M.length;ne++)M[ne]=""}}}}return ga(_)}catch{return m}}var Qs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function Xi(){}F(Xi,Ki),Xi.prototype.g=function(){return new XMLHttpRequest},Xi.prototype.i=function(){return{}},Fn=new Xi;function jn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Hi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xl}function Xl(){this.i=null,this.g="",this.h=!1}var Ia={},Ys={};function Xs(u,m,_){u.L=1,u.v=oi(gn(m)),u.m=_,u.P=!0,Sa(u,null)}function Sa(u,m){u.F=Date.now(),Ke(u),u.A=gn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),li(_.i,"t",T),u.C=0,_=u.j.J,u.h=new Xl,u.g=mu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new qi(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(pa[0]=M.toString()),M=pa);for(var $=0;$<M.length;$++){var ne=ua(_,M[$],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Ar(),Yi(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const m=this.M;m&&sn(u)==3?m.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const pt=sn(this.g);var m=this.g.Ba();const Cn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Na(this.g)))){this.J||pt!=4||m==7||(m==8||0>=Cn?Ar(3):Ar(2)),Ji(this);var _=this.g.Z();this.X=_;t:if(Jl(this)){var T=Na(this.g);u="";var M=T.length,$=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),ni(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==M-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Gs(this.i,this.u,this.A,this.l,this.R,pt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,Et=this.g;if(($e=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X($e)){var Ve=$e;break t}}Ve=null}if(_=Ve)Un(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ra(this,_);else{this.o=!1,this.s=3,ct(12),An(this),ni(this);break e}}if(this.P){_=!0;let _n;for(;!this.J&&this.C<ne.length;)if(_n=Nh(this,ne),_n==Ys){pt==4&&(this.s=4,ct(14),_=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Ia){this.s=4,ct(15),Un(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else Un(this.i,this.l,_n,null),Ra(this,_n);if(Jl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||ne.length!=0||this.h.h||(this.s=1,ct(16),_=!1),this.o=this.o&&_,!_)Un(this.i,this.l,ne,"[Invalid Chunked Response]"),An(this),ni(this);else if(0<ne.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Oa(Pt),Pt.M=!0,ct(11))}}else Un(this.i,this.l,ne,null),Ra(this,ne);pt==4&&An(this),this.o&&!this.J&&(pt==4?lo(this.j,this):(this.o=!1,Ke(this)))}else ro(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),An(this),ni(this)}}}catch{}finally{}};function Jl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Nh(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Ys:(_=Number(m.substring(_,T)),isNaN(_)?Ia:(T+=1,T+_>m.length?Ys:(m=m.slice(T,T+_),u.C=T+_,m)))}jn.prototype.cancel=function(){this.J=!0,An(this)};function Ke(u){u.S=Date.now()+u.I,Zl(u,u.I)}function Zl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Mn(S(u.ba,u),m)}function Ji(u){u.B&&(d.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ta(this.i,this.A),this.L!=2&&(Ar(),ct(17)),An(this),this.s=2,ni(this)):Zl(this,this.S-u)};function ni(u){u.j.G==0||u.J||lo(u.j,u)}function An(u){Ji(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ma(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ra(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Xt(_.h,u))){if(!u.K&&Xt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ao(_),qn(_);else break e;oo(_),ct(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Mn(S(_.Za,_),6e3));if(1>=tu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else xr(_,11)}else if((u.K||_.g==u)&&ao(_),!X(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Ve=M[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Pt=Ve[3];Pt!=null&&(_.la=Pt,_.j.info("VER="+_.la));const pt=Ve[4];pt!=null&&(_.Aa=pt,_.j.info("SVER="+_.Aa));const Cn=Ve[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(T=1.5*Cn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const _n=u.g;if(_n){const ss=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ss){var $=T.h;$.g||ss.indexOf("spdy")==-1&&ss.indexOf("quic")==-1&&ss.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Aa($,$.h),$.h=null))}if(T.D){const co=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;co&&(T.ya=co,qe(T.I,T.D,co))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ne=u;if(T.qa=pu(T,T.J?T.ia:null,T.W),ne.K){nu(T.h,ne);var $e=ne,Et=T.L;Et&&($e.I=Et),$e.B&&(Ji($e),Ke($e)),T.g=ne}else is(T);0<_.i.length&&lr(_)}else Ve[0]!="stop"&&Ve[0]!="close"||xr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?xr(_,7):bt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Ar(4)}catch{}}var eu=class{constructor(u,m){this.g=u,this.map=m}};function Zi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function tu(u){return u.h?1:u.g?u.g.size:0}function Xt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Aa(u,m){u.g?u.g.add(m):u.h=m}function nu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Zi.prototype.cancel=function(){if(this.i=ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function ru(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return B(u.i)}function Js(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function Zs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function ri(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Zs(u),T=Js(u),M=T.length,$=0;$<M;$++)m.call(void 0,T[$],_&&_[$],u)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var $=u[_].substring(0,T);M=u[_].substring(T+1)}else $=u[_];m($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Pr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Pr){this.h=u.h,ts(this,u.j),this.o=u.o,this.g=u.g,ii(this,u.s),this.l=u.l;var m=u.i,_=new sr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),si(this,_),this.m=u.m}else u&&(m=String(u).match(es))?(this.h=!1,ts(this,m[1]||"",!0),this.o=De(m[2]||""),this.g=De(m[3]||"",!0),ii(this,m[4]),this.l=De(m[5]||"",!0),si(this,m[6]||"",!0),this.m=De(m[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}Pr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ai(m,eo,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ai(m,eo,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ai(_,_.charAt(0)=="/"?ou:su,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ai(_,Pa)),u.join("")};function gn(u){return new Pr(u)}function ts(u,m,_){u.j=_?De(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ii(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function si(u,m,_){m instanceof sr?(u.i=m,or(u.i,u.h)):(_||(m=ai(m,au)),u.i=new sr(m,u.h))}function qe(u,m,_){u.i.set(m,_)}function oi(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function De(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ai(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,iu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function iu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var eo=/[#\/\?@]/g,su=/[#\?:]/g,ou=/[#\?]/g,au=/[#\?@]/g,Pa=/#/g;function sr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Dt(u){u.g||(u.g=new Map,u.h=0,u.i&&xh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=sr.prototype,n.add=function(u,m){Dt(this),this.i=null,u=Pn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Bn(u,m){Dt(u),m=Pn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zn(u,m){return Dt(u),m=Pn(u,m),u.g.has(m)}n.forEach=function(u,m){Dt(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)},n.na=function(){Dt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const M=u[T];for(let $=0;$<M.length;$++)_.push(m[T])}return _},n.V=function(u){Dt(this);let m=[];if(typeof u=="string")zn(this,u)&&(m=m.concat(this.g.get(Pn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Dt(this),this.i=null,u=Pn(this,u),zn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function li(u,m,_){Bn(u,m),0<_.length&&(u.i=null,u.g.set(Pn(u,m),B(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const $=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var M=$;ne[T]!==""&&(M+="="+encodeURIComponent(String(ne[T]))),u.push(M)}}return this.i=u.join("&")};function Pn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function or(u,m){m&&!u.j&&(Dt(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(Bn(this,T),li(this,M,_))},u)),u.j=m}function Oh(u,m){const _=new Qi;if(d.Image){const T=new Image;T.onload=O(rn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=O(rn,_,"TestLoadImage: error",!1,m,T),T.onabort=O(rn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=O(rn,_,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function lu(u,m){const _=new Qi,T=new AbortController,M=setTimeout(()=>{T.abort(),rn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(M),$.ok?rn(_,"TestPingServer: ok",!0,m):rn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),rn(_,"TestPingServer: error",!1,m)})}function rn(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function Dh(){this.g=new _a}function uu(u,m,_){const T=_||"";try{ri(u,function(M,$){let ne=M;y(M)&&(ne=ga(M)),m.push(T+$+"="+encodeURIComponent(ne))})}catch(M){throw m.push(T+"type="+encodeURIComponent("_badmap")),M}}function Cr(u){this.l=u.Ub||null,this.j=u.eb||!1}F(Cr,Ki),Cr.prototype.g=function(){return new ns(this.l,this.j)},Cr.prototype.i=function(u){return function(){return u}}({});function ns(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(ns,vt),n=ns.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function cu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Wn(this),this.readyState==3&&cu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},n.Qa=function(u){this.g&&(this.response=u,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function kr(u){let m="";return ae(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function ui(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=kr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):qe(u,m,_))}function Ze(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ze,vt);var bh=/^https?$/i,Ca=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?Ws(this.o):Ws(Fn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){rs(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ca,m,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ne]of _)this.g.setRequestHeader($,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{no(this),this.u=!0,this.g.send(u),this.u=!1}catch($){rs(this,$)}};function rs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,to(u),yn(u)}function to(u){u.A||(u.A=!0,wt(u,"complete"),wt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,wt(this,"complete"),wt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ka(this):this.bb())},n.bb=function(){ka(this)};function ka(u){if(u.h&&typeof c<"u"&&(!u.v[1]||sn(u)!=4||u.Z()!=2)){if(u.u&&sn(u)==4)fa(u.Ea,0,u);else if(wt(u,"readystatechange"),sn(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ne===0){var M=String(u.D).match(es)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),T=!bh.test(M?M.toLowerCase():"")}_=T}if(_)wt(u,"complete"),wt(u,"success");else{u.m=6;try{var $=2<sn(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",to(u)}}finally{yn(u)}}}}function yn(u,m){if(u.g){no(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||wt(u,"ready");try{_.onreadystatechange=T}catch{}}}function no(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function sn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ya(m)}};function Na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function ro(u){const m={};u=(u.g&&2<=sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(X(u[T]))continue;var _=D(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[M]||[];m[M]=$,$.push(_)}P(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function xa(u){this.Aa=0,this.i=[],this.j=new Qi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ar("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ar("baseRetryDelayMs",5e3,u),this.cb=ar("retryDelaySeedMs",1e4,u),this.Wa=ar("forwardChannelMaxRetries",2,u),this.wa=ar("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Zi(u&&u.concurrentRequestLimit),this.Da=new Dh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){ct(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=pu(this,null,this.W),lr(this)};function bt(u){if(io(u),u.G==3){var m=u.U++,_=gn(u.I);if(qe(_,"SID",u.K),qe(_,"RID",m),qe(_,"TYPE","terminate"),Nr(u,_),m=new jn(u,u.j,m),m.L=2,m.v=oi(gn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=mu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ke(m)}fu(u)}function qn(u){u.g&&(Oa(u),u.g.cancel(),u.g=null)}function io(u){qn(u),u.u&&(d.clearTimeout(u.u),u.u=null),ao(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function lr(u){if(!mn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Fe||se(),ie||(Fe(),ie=!0),he.add(m,u),u.B=0}}function Lh(u,m){return tu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Mn(S(u.Ga,u,m),du(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new jn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),N($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ci(this,M,m),_=gn(this.I),qe(_,"RID",u),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),Nr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(kr($)))+"&"+m:this.m&&ui(_,this.m,$)),Aa(this.h,M),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",m),qe(_,"SID","null"),M.T=!0,Xs(M,_,null)):Xs(M,_,m),this.G=2}}else this.G==3&&(u?so(this,u):this.i.length==0||mn(this.h)||so(this))};function so(u,m){var _;m?_=m.l:_=u.U++;const T=gn(u.I);qe(T,"SID",u.K),qe(T,"RID",_),qe(T,"AID",u.T),Nr(u,T),u.m&&u.o&&ui(T,u.m,u.o),_=new jn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ci(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Aa(u.h,_),Xs(_,T,m)}function Nr(u,m){u.H&&ae(u.H,function(_,T){qe(m,T,_)}),u.l&&ri({},function(_,T){qe(m,T,_)})}function ci(u,m,_){_=Math.min(u.i.length,_);var T=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const ne=["count="+_];$==-1?0<_?($=M[0].g,ne.push("ofs="+$)):$=0:ne.push("ofs="+$);let $e=!0;for(let Et=0;Et<_;Et++){let Ve=M[Et].g;const Pt=M[Et].map;if(Ve-=$,0>Ve)$=Math.max(0,M[Et].g-100),$e=!1;else try{uu(Pt,ne,"req"+Ve+"_")}catch{T&&T(Pt)}}if($e){T=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function is(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Fe||se(),ie||(Fe(),ie=!0),he.add(m,u),u.v=0}}function oo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Mn(S(u.Fa,u),du(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,hu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Mn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),qn(this),hu(this))};function Oa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function hu(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=gn(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),Nr(u,m),u.m&&u.o&&ui(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=oi(gn(m)),_.m=null,_.P=!0,Sa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),oo(this),ct(19))};function ao(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function lo(u,m){var _=null;if(u.g==m){ao(u),Oa(u),u.g=null;var T=2}else if(Xt(u.h,m))_=m.D,nu(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;T=Gi(),wt(T,new Ks(T,_)),lr(u)}else is(u);else if(M=m.s,M==3||M==0&&0<m.X||!(T==1&&Lh(u,m)||T==2&&oo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:xr(u,5);break;case 4:xr(u,10);break;case 3:xr(u,6);break;default:xr(u,2)}}}function du(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function xr(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),T=u.Xa;const M=!T;T=new Pr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ts(T,"https"),oi(T),M?Oh(T.toString(),_):lu(T.toString(),_)}else ct(2);u.G=0,u.l&&u.l.sa(m),fu(u),io(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function fu(u){if(u.G=0,u.ka=[],u.l){const m=ru(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function pu(u,m,_){var T=_ instanceof Pr?gn(_):new Pr(_);if(T.g!="")m&&(T.g=m+"."+T.g),ii(T,T.s);else{var M=d.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var $=new Pr(null);T&&ts($,T),m&&($.g=m),M&&ii($,M),_&&($.l=_),T=$}return _=u.D,m=u.ya,_&&m&&qe(T,_,m),qe(T,"VER",u.la),Nr(u,T),T}function mu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new Cr({eb:_})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Da(){}n=Da.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function uo(){}uo.prototype.g=function(u,m){return new Jt(u,m)};function Jt(u,m){vt.call(this),this.g=new xa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ur(this)}F(Jt,vt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){bt(this.g)},Jt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=ga(u),u=_);m.i.push(new eu(m.Ya++,u)),m.G==3&&lr(m)},Jt.prototype.N=function(){this.g.l=null,delete this.j,bt(this.g),delete this.g,Jt.aa.N.call(this)};function gu(u){rr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(gu,rr);function yu(){Hs.call(this),this.status=1}F(yu,Hs);function ur(u){this.g=u}F(ur,Da),ur.prototype.ua=function(){wt(this.g,"a")},ur.prototype.ta=function(u){wt(this.g,new gu(u))},ur.prototype.sa=function(u){wt(this.g,new yu)},ur.prototype.ra=function(){wt(this.g,"b")},uo.prototype.createWebChannel=uo.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,h0=function(){return new uo},c0=function(){return Gi()},u0=ir,Hf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qs.NO_ERROR=0,Qs.TIMEOUT=8,Qs.HTTP_ERROR=6,kc=Qs,Yl.COMPLETE="complete",l0=Yl,qs.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,ul=qs,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,a0=Ze}).apply(typeof pc<"u"?pc:typeof self<"u"?self:typeof window<"u"?window:{});const L_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new Tp("@firebase/firestore");function il(){return xs.logLevel}function fe(n,...e){if(xs.logLevel<=be.DEBUG){const t=e.map(Vp);xs.debug(`Firestore (${sa}): ${n}`,...t)}}function Gr(n,...e){if(xs.logLevel<=be.ERROR){const t=e.map(Vp);xs.error(`Firestore (${sa}): ${n}`,...t)}}function Go(n,...e){if(xs.logLevel<=be.WARN){const t=e.map(Vp);xs.warn(`Firestore (${sa}): ${n}`,...t)}}function Vp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${sa}) INTERNAL ASSERTION FAILED: `+n;throw Gr(e),new Error(e)}function We(n,e){n||Te()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ht.UNAUTHENTICATED))}shutdown(){}}class fC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class pC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Rs,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Rs)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(We(typeof i.accessToken=="string"),new d0(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Ht(e)}}class mC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new mC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const i=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string"),this.R=t.token,new yC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=vC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Be(n,e){return n<e?-1:n>e?1:0}function Qo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new St(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new St(0,0))}static max(){return new Ie(new St(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Al.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Al?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends Al{construct(e,t,i){return new Je(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ue(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const wC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Al{construct(e,t,i){return new Ut(e,t,i)}static isValidIdentifier(e){return wC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ue(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ue(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ue(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ue(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}function EC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new St(t+1,0):new St(t,i));return new Fi(o,ye.empty(),e)}function TC(n){return new Fi(n.readTime,n.key,-1)}class Fi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Fi(Ie.min(),ye.empty(),-1)}static max(){return new Fi(Ie.max(),ye.empty(),-1)}}function IC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==SC)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function AC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $l(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mp.oe=-1;function gh(n){return n==null}function Qc(n){return n===0&&1/n==-1/0}function PC(n){return typeof n=="number"&&Number.isInteger(n)&&!Qc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ms(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function p0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new it(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mc(this.root,e,this.comparator,!1)}getReverseIterator(){return new mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mc(this.root,e,this.comparator,!0)}}class mc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Mt.RED,this.left=o??Mt.EMPTY,this.right=l??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Mt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new M_(this.data.getIterator())}getIteratorFrom(e){return new M_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class M_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new In([])}unionWith(e){let t=new Ft(Ut.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new m0("Invalid base64 string: "+l):l}}(e);return new jt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const CC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(n){if(We(!!n),typeof n=="string"){let e=0;const t=CC.exec(n);if(We(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Os(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fp(n){const e=n.mapValue.fields.__previous_value__;return Up(e)?Fp(e):e}function Pl(n){const e=ji(n.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class Cl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc={mapValue:{}};function Ds(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Up(n)?4:xC(n)?9007199254740991:NC(n)?10:11:Te()}function Er(n,e){if(n===e)return!0;const t=Ds(n);if(t!==Ds(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pl(n).isEqual(Pl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=ji(o.timestampValue),d=ji(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Os(o.bytesValue).isEqual(Os(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=dt(o.doubleValue),d=dt(l.doubleValue);return c===d?Qc(c)===Qc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Qo(n.arrayValue.values||[],e.arrayValue.values||[],Er);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(V_(c)!==V_(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Er(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function kl(n,e){return(n.values||[]).find(t=>Er(t,e))!==void 0}function Yo(n,e){if(n===e)return 0;const t=Ds(n),i=Ds(e);if(t!==i)return Be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=dt(l.integerValue||l.doubleValue),p=dt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return U_(n.timestampValue,e.timestampValue);case 4:return U_(Pl(n),Pl(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Os(l),p=Os(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=Be(d[y],p[y]);if(v!==0)return v}return Be(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Be(dt(l.latitude),dt(c.latitude));return d!==0?d:Be(dt(l.longitude),dt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return F_(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const E=l.fields||{},S=c.fields||{},O=(d=E.value)===null||d===void 0?void 0:d.arrayValue,F=(p=S.value)===null||p===void 0?void 0:p.arrayValue,B=Be(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0);return B!==0?B:F_(O,F)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===gc.mapValue&&c===gc.mapValue)return 0;if(l===gc.mapValue)return 1;if(c===gc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=Be(p[E],v[E]);if(S!==0)return S;const O=Yo(d[p[E]],y[v[E]]);if(O!==0)return O}return Be(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function U_(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=ji(n),i=ji(e),o=Be(t.seconds,i.seconds);return o!==0?o:Be(t.nanos,i.nanos)}function F_(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Yo(t[o],i[o]);if(l)return l}return Be(t.length,i.length)}function Xo(n){return Kf(n)}function Kf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=ji(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Os(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=Kf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${Kf(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function j_(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Gf(n){return!!n&&"integerValue"in n}function jp(n){return!!n&&"arrayValue"in n}function B_(n){return!!n&&"nullValue"in n}function z_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nc(n){return!!n&&"mapValue"in n}function NC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ml(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ms(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ml(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ml(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ml(t)}setAll(e){let t=Ut.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ml(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Er(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Ms(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new dn(ml(this.value))}}function g0(n){const e=[];return Ms(n.fields,(t,i)=>{const o=new Ut([t]);if(Nc(i)){const l=g0(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new In(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Kt(e,0,Ie.min(),Ie.min(),Ie.min(),dn.empty(),0)}static newFoundDocument(e,t,i,o){return new Kt(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Kt(e,2,t,Ie.min(),Ie.min(),dn.empty(),0)}static newUnknownDocument(e,t){return new Kt(e,3,t,Ie.min(),Ie.min(),dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.position=e,this.inclusive=t}}function $_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Yo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function W_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Er(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t="asc"){this.field=e,this.dir=t}}function OC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{}class _t extends y0{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new bC(e,t,i):t==="array-contains"?new MC(e,i):t==="in"?new UC(e,i):t==="not-in"?new FC(e,i):t==="array-contains-any"?new jC(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new LC(e,i):new VC(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Yo(t,this.value)):t!==null&&Ds(this.value)===Ds(t)&&this.matchesComparison(Yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends y0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new nr(e,t)}matches(e){return _0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _0(n){return n.op==="and"}function v0(n){return DC(n)&&_0(n)}function DC(n){for(const e of n.filters)if(e instanceof nr)return!1;return!0}function Qf(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Xo(n.value);if(v0(n))return n.filters.map(e=>Qf(e)).join(",");{const e=n.filters.map(t=>Qf(t)).join(",");return`${n.op}(${e})`}}function w0(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&Er(i.value,o.value)}(n,e):n instanceof nr?function(i,o){return o instanceof nr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&w0(c,o.filters[d]),!0):!1}(n,e):void Te()}function E0(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Xo(t.value)}`}(n):n instanceof nr?function(t){return t.op.toString()+" {"+t.getFilters().map(E0).join(" ,")+"}"}(n):"Filter"}class bC extends _t{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class LC extends _t{constructor(e,t){super(e,"in",t),this.keys=T0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class VC extends _t{constructor(e,t){super(e,"not-in",t),this.keys=T0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function T0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class MC extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jp(t)&&kl(t.arrayValue,this.value)}}class UC extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&kl(this.value.arrayValue,t)}}class FC extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!kl(this.value.arrayValue,t)}}class jC extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>kl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function q_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new BC(n,e,t,i,o,l,c)}function Bp(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Qf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),gh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Xo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Xo(i)).join(",")),e.ue=t}return e.ue}function zp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!w0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!W_(n.startAt,e.startAt)&&W_(n.endAt,e.endAt)}function Yf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zC(n,e,t,i,o,l,c,d){return new oa(n,e,t,i,o,l,c,d)}function $p(n){return new oa(n)}function H_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function I0(n){return n.collectionGroup!==null}function gl(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ft(Ut.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Nl(l,i))}),t.has(Ut.keyField().canonicalString())||e.ce.push(new Nl(Ut.keyField(),i))}return e.ce}function _r(n){const e=Se(n);return e.le||(e.le=$C(e,gl(n))),e.le}function $C(n,e){if(n.limitType==="F")return q_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Nl(o.field,l)});const t=n.endAt?new Yc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Yc(n.startAt.position,n.startAt.inclusive):null;return q_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Xf(n,e){const t=n.filters.concat([e]);return new oa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Jf(n,e,t){return new oa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yh(n,e){return zp(_r(n),_r(e))&&n.limitType===e.limitType}function S0(n){return`${Bp(_r(n))}|lt:${n.limitType}`}function bo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>E0(o)).join(", ")}]`),gh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Xo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Xo(o)).join(",")),`Target(${i})`}(_r(n))}; limitType=${n.limitType})`}function _h(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of gl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=$_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,gl(i),o)||i.endAt&&!function(c,d,p){const y=$_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,gl(i),o))}(n,e)}function WC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function R0(n){return(e,t)=>{let i=!1;for(const o of gl(n)){const l=qC(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function qC(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Yo(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new it(ye.comparator);function Qr(){return HC}const A0=new it(ye.comparator);function cl(...n){let e=A0;for(const t of n)e=e.insert(t.key,t);return e}function P0(n){let e=A0;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return yl()}function C0(){return yl()}function yl(){return new aa(n=>n.toString(),(n,e)=>n.isEqual(e))}const KC=new it(ye.comparator),GC=new Ft(ye.comparator);function Oe(...n){let e=GC;for(const t of n)e=e.add(t);return e}const QC=new Ft(Be);function YC(){return QC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qc(e)?"-0":e}}function k0(n){return{integerValue:""+n}}function XC(n,e){return PC(e)?k0(e):Wp(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this._=void 0}}function JC(n,e,t){return n instanceof Xc?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Up(l)&&(l=Fp(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof xl?x0(n,e):n instanceof Ol?O0(n,e):function(o,l){const c=N0(o,l),d=K_(c)+K_(o.Pe);return Gf(c)&&Gf(o.Pe)?k0(d):Wp(o.serializer,d)}(n,e)}function ZC(n,e,t){return n instanceof xl?x0(n,e):n instanceof Ol?O0(n,e):t}function N0(n,e){return n instanceof Jc?function(i){return Gf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Xc extends vh{}class xl extends vh{constructor(e){super(),this.elements=e}}function x0(n,e){const t=D0(e);for(const i of n.elements)t.some(o=>Er(o,i))||t.push(i);return{arrayValue:{values:t}}}class Ol extends vh{constructor(e){super(),this.elements=e}}function O0(n,e){let t=D0(e);for(const i of n.elements)t=t.filter(o=>!Er(o,i));return{arrayValue:{values:t}}}class Jc extends vh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function K_(n){return dt(n.integerValue||n.doubleValue)}function D0(n){return jp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ek(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof xl&&o instanceof xl||i instanceof Ol&&o instanceof Ol?Qo(i.elements,o.elements,Er):i instanceof Jc&&o instanceof Jc?Er(i.Pe,o.Pe):i instanceof Xc&&o instanceof Xc}(n.transform,e.transform)}class tk{constructor(e,t){this.version=e,this.transformResults=t}}class vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new vr}static exists(e){return new vr(void 0,e)}static updateTime(e){return new vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wh{}function b0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new V0(n.key,vr.none()):new Wl(n.key,n.data,vr.none());{const t=n.data,i=dn.empty();let o=new Ft(Ut.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new $i(n.key,i,new In(o.toArray()),vr.none())}}function nk(n,e,t){n instanceof Wl?function(o,l,c){const d=o.value.clone(),p=Q_(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof $i?function(o,l,c){if(!xc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Q_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(L0(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function _l(n,e,t,i){return n instanceof Wl?function(l,c,d,p){if(!xc(l.precondition,c))return d;const y=l.value.clone(),v=Y_(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof $i?function(l,c,d,p){if(!xc(l.precondition,c))return d;const y=Y_(l.fieldTransforms,p,c),v=c.data;return v.setAll(L0(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(l,c,d){return xc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function rk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=N0(i.transform,o||null);l!=null&&(t===null&&(t=dn.empty()),t.set(i.field,l))}return t||null}function G_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Qo(i,o,(l,c)=>ek(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wl extends wh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class $i extends wh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function L0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Q_(n,e,t){const i=new Map;We(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,ZC(c,d,t[o]))}return i}function Y_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,JC(l,c,e))}return i}class V0 extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ik extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&nk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=_l(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=_l(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=C0();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=b0(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(t,i)=>G_(t,i))&&Qo(this.baseMutations,e.baseMutations,(t,i)=>G_(t,i))}}class qp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){We(e.mutations.length===i.length);let o=function(){return KC}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new qp(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,Me;function lk(n){switch(n){default:return Te();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function M0(n){if(n===void 0)return Gr("GRPC error has no .code"),H.UNKNOWN;switch(n){case gt.OK:return H.OK;case gt.CANCELLED:return H.CANCELLED;case gt.UNKNOWN:return H.UNKNOWN;case gt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case gt.INTERNAL:return H.INTERNAL;case gt.UNAVAILABLE:return H.UNAVAILABLE;case gt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case gt.NOT_FOUND:return H.NOT_FOUND;case gt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case gt.ABORTED:return H.ABORTED;case gt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case gt.DATA_LOSS:return H.DATA_LOSS;default:return Te()}}(Me=gt||(gt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new Ss([4294967295,4294967295],0);function X_(n){const e=uk().encode(n),t=new o0;return t.update(e),new Uint8Array(t.digest())}function J_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ss([t,i],0),new Ss([o,l],0)]}class Hp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new hl(`Invalid padding: ${t}`);if(i<0)throw new hl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new hl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new hl(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ss.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(Ss.fromNumber(i)));return o.compare(ck)===1&&(o=new Ss([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=X_(e),[i,o]=J_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new Hp(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ie===0)return;const t=X_(e),[i,o]=J_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class hl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Eh(Ie.min(),o,new it(Be),Qr(),Oe())}}class ql{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ql(i,t,Oe(),Oe(),Oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class U0{constructor(e,t){this.targetId=e,this.me=t}}class F0{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Z_{constructor(){this.fe=0,this.ge=tv(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),t=Oe(),i=Oe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new ql(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=tv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class hk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qr(),this.qe=ev(),this.Qe=new it(Be)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(Yf(l))if(i===0){const c=new ye(l.path);this.Ue(t,c,Kt.newNoDocument(c,Ie.min()))}else We(i===1);else{const c=this.Ye(t);if(c!==i){const d=this.Ze(e),p=d?this.Xe(d,e,c):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Os(i).toUint8Array()}catch(p){if(p instanceof m0)return Go("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Hp(c,o,l)}catch(p){return Go(p instanceof hl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.tt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Je(c);if(d){if(l.current&&Yf(d.target)){const p=new ye(d.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,Kt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Oe();this.qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Eh(e,t,this.Qe,this.ke,i);return this.ke=Qr(),this.qe=ev(),this.Qe=new it(Be),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Z_,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ft(Be),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Z_),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ev(){return new it(ye.comparator)}function tv(){return new it(ye.comparator)}const dk={asc:"ASCENDING",desc:"DESCENDING"},fk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pk={and:"AND",or:"OR"};class mk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zf(n,e){return n.useProto3Json||gh(e)?e:{value:e}}function Zc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function j0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function gk(n,e){return Zc(n,e.toTimestamp())}function wr(n){return We(!!n),Ie.fromTimestamp(function(t){const i=ji(t);return new St(i.seconds,i.nanos)}(n))}function Kp(n,e){return ep(n,e).canonicalString()}function ep(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function B0(n){const e=Je.fromString(n);return We(H0(e)),e}function tp(n,e){return Kp(n.databaseId,e.path)}function vf(n,e){const t=B0(e);if(t.get(1)!==n.databaseId.projectId)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye($0(t))}function z0(n,e){return Kp(n.databaseId,e)}function yk(n){const e=B0(n);return e.length===4?Je.emptyPath():$0(e)}function np(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function $0(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function nv(n,e,t){return{name:tp(n,e),fields:t.value.mapValue.fields}}function _k(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(We(v===void 0||typeof v=="string"),jt.fromBase64String(v||"")):(We(v===void 0||v instanceof Buffer||v instanceof Uint8Array),jt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?H.UNKNOWN:M0(y.code);return new ue(v,y.message||"")}(c);t=new F0(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=vf(n,i.document.name),l=wr(i.document.updateTime),c=i.document.createTime?wr(i.document.createTime):Ie.min(),d=new dn({mapValue:{fields:i.document.fields}}),p=Kt.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new Oc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=vf(n,i.document),l=i.readTime?wr(i.readTime):Ie.min(),c=Kt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new Oc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=vf(n,i.document),l=i.removedTargetIds||[];t=new Oc([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new ak(o,l),d=i.targetId;t=new U0(d,c)}}return t}function vk(n,e){let t;if(e instanceof Wl)t={update:nv(n,e.key,e.value)};else if(e instanceof V0)t={delete:tp(n,e.key)};else if(e instanceof $i)t={update:nv(n,e.key,e.data),updateMask:Ck(e.fieldMask)};else{if(!(e instanceof ik))return Te();t={verify:tp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Xc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof xl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ol)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Jc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:gk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function wk(n,e){return n&&n.length>0?(We(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?wr(o.updateTime):wr(l);return c.isEqual(Ie.min())&&(c=wr(l)),new tk(c,o.transformResults||[])}(t,e))):[]}function Ek(n,e){return{documents:[z0(n,e.path)]}}function Tk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=z0(n,o);const l=function(y){if(y.length!==0)return q0(nr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(S){return{field:Lo(S.field),direction:Rk(S.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Zf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:t,parent:o}}function Ik(n){let e=yk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){We(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(E){const S=W0(E);return S instanceof nr&&v0(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(S=>function(F){return new Nl(Vo(F.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(E){let S;return S=typeof E=="object"?E.value:E,gh(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(E){const S=!!E.before,O=E.values||[];return new Yc(O,S)}(t.startAt));let y=null;return t.endAt&&(y=function(E){const S=!E.before,O=E.values||[];return new Yc(O,S)}(t.endAt)),zC(e,o,c,l,d,"F",p,y)}function Sk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function W0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Vo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Vo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Vo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Vo(t.unaryFilter.field);return _t.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Vo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nr.create(t.compositeFilter.filters.map(i=>W0(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function Rk(n){return dk[n]}function Ak(n){return fk[n]}function Pk(n){return pk[n]}function Lo(n){return{fieldPath:n.canonicalString()}}function Vo(n){return Ut.fromServerFormat(n.fieldPath)}function q0(n){return n instanceof _t?function(t){if(t.op==="=="){if(z_(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NAN"}};if(B_(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(z_(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NOT_NAN"}};if(B_(t.value))return{unaryFilter:{field:Lo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lo(t.field),op:Ak(t.op),value:t.value}}}(n):n instanceof nr?function(t){const i=t.getFilters().map(o=>q0(o));return i.length===1?i[0]:{compositeFilter:{op:Pk(t.op),filters:i}}}(n):Te()}function Ck(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function H0(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),d=jt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Oi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Oi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.ct=e}}function Nk(n){const e=Ik({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.un=new Ok}addToCollectionParentIndex(e,t){return this.un.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Fi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Fi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class Ok{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Ft(Je.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Ft(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Jo(0)}static kn(){return new Jo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.changes=new aa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&_l(i.mutation,o,In.empty(),St.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Oe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=cl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Oe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Qr();const c=yl(),d=function(){return yl()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof $i)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),_l(v.mutation,y,v.mutation.getFieldMask(),St.now())):c.set(y.key,In.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var E;return d.set(y,new bk(v,(E=c.get(y))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=yl();let o=new it((c,d)=>c-d),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||In.empty();v=d.applyToLocalView(y,v),i.set(p,v);const E=(o.get(d.batchId)||Oe()).add(p);o=o.insert(d.batchId,E)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,E=C0();v.forEach(S=>{if(!l.has(S)){const O=b0(t.get(S),i.get(S));O!==null&&E.set(S,O),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return Q.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):I0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(Es());let d=-1,p=l;return c.next(y=>Q.forEach(y,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{p=p.insert(v,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Oe())).next(v=>({batchId:d,changes:P0(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=cl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=cl();return this.indexManager.getCollectionParents(e,l).next(d=>Q.forEach(d,p=>{const y=function(E,S){return new oa(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((E,S)=>{c=c.insert(E,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Kt.newInvalidDocument(v)))});let d=cl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&_l(v.mutation,y,In.empty(),St.now()),_h(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Q.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:wr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:Nk(o.bundledQuery),readTime:wr(o.readTime)}}(t)),Q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(){this.overlays=new it(ye.comparator),this.Ir=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new it((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Es(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Es(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Q.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new ok(t,i));let l=this.Ir.get(t);l===void 0&&(l=Oe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.Tr=new Ft(xt.Er),this.dr=new Ft(xt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new xt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new xt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ye(new Je([])),i=new xt(t,e),o=new xt(t,e+1),l=[];return this.dr.forEachInRange([i,o],c=>{this.Vr(c),l.push(c.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new Je([])),i=new xt(t,e),o=new xt(t,e+1);let l=Oe();return this.dr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new xt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class xt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||Be(e.wr,t.wr)}static Ar(e,t){return Be(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ft(xt.Er)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new sk(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.br=this.br.add(new xt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],c=>{const d=this.Dr(c.wr);l.push(d)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ft(Be);return t.forEach(o=>{const l=new xt(o,0),c=new xt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],d=>{i=i.add(d.wr)})}),Q.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new xt(new ye(l),0);let d=new Ft(Be);return this.br.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.wr)),!0)},c),Q.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){We(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Q.forEach(t.mutations,o=>{const l=new xt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new xt(t,0),o=this.br.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.Mr=e,this.docs=function(){return new it(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Kt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Kt.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const c=t.path,d=new ye(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||IC(TC(v),i)<=0||(o.has(v.key)||_h(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Bk(this)}getSize(e){return Q.resolve(this.size)}}class Bk extends Dk{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.persistence=e,this.Nr=new aa(t=>Bp(t),zp),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Gp,this.targetCount=0,this.kr=Jo.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Q.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Kn(t),Q.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Mp(0),this.Kr=!1,this.Kr=!0,this.$r=new Uk,this.referenceDelegate=e(this),this.Ur=new zk(this),this.indexManager=new xk,this.remoteDocumentCache=function(o){return new jk(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new kk(t),this.Gr=new Vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new Fk(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const o=new Wk(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Q.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class Wk extends RC{constructor(e){super(),this.currentSequenceNumber=e}}class Qp{constructor(e){this.persistence=e,this.Jr=new Gp,this.Yr=null}static Zr(e){return new Qp(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Xr,i=>{const o=ye.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Q.or([()=>Q.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Yp(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return xR()?8:AC(Qt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new qk;return this.Xi(e,t,c).next(d=>{if(l.result=d,this.zi)return this.es(e,t,c,d.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(il()<=be.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Q.resolve()):(il()<=be.DEBUG&&fe("QueryEngine","Query:",bo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(il()<=be.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):Q.resolve())}Yi(e,t){if(H_(t))return Q.resolve(null);let i=_r(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Jf(t,null,"F"),i=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Oe(...l);return this.Ji.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.ts(t,d);return this.ns(t,y,c,p.readTime)?this.Yi(e,Jf(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,i,o){return H_(t)||o.isEqual(Ie.min())?Q.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?Q.resolve(null):(il()<=be.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),bo(t)),this.rs(e,c,t,EC(o,-1)).next(d=>d))})}ts(e,t){let i=new Ft(R0(e));return t.forEach((o,l)=>{_h(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return il()<=be.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",bo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Fi.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new it(Be),this._s=new aa(l=>Bp(l),zp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Gk(n,e,t,i){return new Kk(n,e,t,i)}async function K0(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Oe();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({hs:y,removedBatchIds:c,addedBatchIds:d}))})})}function Qk(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const E=y.batch,S=E.keys();let O=Q.resolve();return S.forEach(F=>{O=O.next(()=>v.getEntry(p,F)).next(B=>{const b=y.docVersions.get(F);We(b!==null),B.version.compareTo(b)<0&&(E.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),v.addEntry(B)))})}),O.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Oe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function G0(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Yk(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach((v,E)=>{const S=o.get(E);if(!S)return;d.push(t.Ur.removeMatchingKeys(l,v.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(l,v.addedDocuments,E)));let O=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?O=O.withResumeToken(jt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(v.resumeToken,i)),o=o.insert(E,O),function(B,b,q){return B.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(S,O,v)&&d.push(t.Ur.updateTargetData(l,O))});let p=Qr(),y=Oe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(Xk(l,c,e.documentUpdates).next(v=>{p=v.Ps,y=v.Is})),!i.isEqual(Ie.min())){const v=t.Ur.getLastRemoteSnapshotVersion(l).next(E=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Q.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.os=o,l))}function Xk(n,e,t){let i=Oe(),o=Oe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Qr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):fe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Ps:c,Is:o}})}function Jk(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Zk(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,Q.resolve(o)):t.Ur.allocateTargetId(i).next(c=>(o=new Oi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function rp(n,e,t){const i=Se(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!$l(c))throw c;fe("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function rv(n,e,t){const i=Se(n);let o=Ie.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const E=Se(p),S=E._s.get(v);return S!==void 0?Q.resolve(E.os.get(S)):E.Ur.getTargetData(y,v)}(i,c,_r(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Oe())).next(d=>(eN(i,WC(e),d),{documents:d,Ts:l})))}function eN(n,e,t){let i=n.us.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class iv{constructor(){this.activeTargetIds=YC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tN{constructor(){this.so=new iv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new iv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){fe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){fe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yc=null;function wf(){return yc===null?yc=function(){return 268435456+Math.round(2147483648*Math.random())}():yc++,"0x"+yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class sN extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const d=wf(),p=this.xo(t,i.toUriEncodedString());fe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,c),this.No(t,p,y,o).then(v=>(fe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Go("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}Lo(t,i,o,l,c,d){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+sa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}xo(t,i){const o=rN[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=wf();return new Promise((c,d)=>{const p=new a0;p.setWithCredentials(!0),p.listenOnce(l0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case kc.NO_ERROR:const v=p.getResponseJson();fe(qt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case kc.TIMEOUT:fe(qt,`RPC '${e}' ${l} timed out`),d(new ue(H.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const E=p.getStatus();if(fe(qt,`RPC '${e}' ${l} failed with status:`,E,"response text:",p.getResponseText()),E>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const O=S==null?void 0:S.error;if(O&&O.status&&O.message){const F=function(b){const q=b.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(q)>=0?q:H.UNKNOWN}(O.status);d(new ue(F,O.message))}else d(new ue(H.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ue(H.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{fe(qt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);fe(qt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Bo(e,t,i){const o=wf(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=h0(),d=c0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");fe(qt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const E=c.createWebChannel(v,p);let S=!1,O=!1;const F=new iN({Io:b=>{O?fe(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(S||(fe(qt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),fe(qt,`RPC '${e}' stream ${o} sending:`,b),E.send(b))},To:()=>E.close()}),B=(b,q,X)=>{b.listen(q,Y=>{try{X(Y)}catch(te){setTimeout(()=>{throw te},0)}})};return B(E,ul.EventType.OPEN,()=>{O||(fe(qt,`RPC '${e}' stream ${o} transport opened.`),F.yo())}),B(E,ul.EventType.CLOSE,()=>{O||(O=!0,fe(qt,`RPC '${e}' stream ${o} transport closed`),F.So())}),B(E,ul.EventType.ERROR,b=>{O||(O=!0,Go(qt,`RPC '${e}' stream ${o} transport errored:`,b),F.So(new ue(H.UNAVAILABLE,"The operation could not be completed")))}),B(E,ul.EventType.MESSAGE,b=>{var q;if(!O){const X=b.data[0];We(!!X);const Y=X,te=Y.error||((q=Y[0])===null||q===void 0?void 0:q.error);if(te){fe(qt,`RPC '${e}' stream ${o} received error:`,te);const ge=te.status;let ae=function(C){const N=gt[C];if(N!==void 0)return M0(N)}(ge),P=te.message;ae===void 0&&(ae=H.INTERNAL,P="Unknown error status: "+ge+" with message "+te.message),O=!0,F.So(new ue(ae,P)),E.close()}else fe(qt,`RPC '${e}' stream ${o} received:`,X),F.bo(X)}}),B(d,u0.STAT_EVENT,b=>{b.stat===Hf.PROXY?fe(qt,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===Hf.NOPROXY&&fe(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.wo()},0),F}}function Ef(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){return new mk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&fe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,i,o,l,c,d,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Q0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new ue(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return fe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(fe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oN extends Y0{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=_k(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?wr(c.readTime):Ie.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=np(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Yf(p)?{documents:Ek(l,p)}:{query:Tk(l,p)._t},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=j0(l,c.resumeToken);const y=Zf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Zc(l,c.snapshotVersion.toTimestamp());const y=Zf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=Sk(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=np(this.serializer),t.removeTarget=e,this.a_(t)}}class aN extends Y0{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=wk(e.writeResults,e.commitTime),i=wr(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=np(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>vk(this.serializer,i))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Mo(e,ep(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ue(H.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Lo(e,ep(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ue(H.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class uN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Gr(t),this.D_=!1):fe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(c=>{i.enqueueAndForget(async()=>{Us(this)&&(fe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.L_.add(4),await Hl(y),y.q_.set("Unknown"),y.L_.delete(4),await Ih(y)}(this))})}),this.q_=new uN(i,o)}}async function Ih(n){if(Us(n))for(const e of n.B_)await e(!0)}async function Hl(n){for(const e of n.B_)await e(!1)}function X0(n,e){const t=Se(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),em(t)?Zp(t):la(t).r_()&&Jp(t,e))}function Xp(n,e){const t=Se(n),i=la(t);t.N_.delete(e),i.r_()&&J0(t,e),t.N_.size===0&&(i.r_()?i.o_():Us(t)&&t.q_.set("Unknown"))}function Jp(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}la(n).A_(e)}function J0(n,e){n.Q_.xe(e),la(n).R_(e)}function Zp(n){n.Q_=new hk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),la(n).start(),n.q_.v_()}function em(n){return Us(n)&&!la(n).n_()&&n.N_.size>0}function Us(n){return Se(n).L_.size===0}function Z0(n){n.Q_=void 0}async function hN(n){n.q_.set("Online")}async function dN(n){n.N_.forEach((e,t)=>{Jp(n,e)})}async function fN(n,e){Z0(n),em(n)?(n.q_.M_(e),Zp(n)):n.q_.set("Unknown")}async function pN(n,e,t){if(n.q_.set("Online"),e instanceof F0&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.N_.delete(d),o.Q_.removeTarget(d))}(n,e)}catch(i){fe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await eh(n,i)}else if(e instanceof Oc?n.Q_.Ke(e):e instanceof U0?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ie.min()))try{const i=await G0(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.Q_.rt(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.N_.get(y);v&&l.N_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.N_.get(p);if(!v)return;l.N_.set(p,v.withResumeToken(jt.EMPTY_BYTE_STRING,v.snapshotVersion)),J0(l,p);const E=new Oi(v.target,p,y,v.sequenceNumber);Jp(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){fe("RemoteStore","Failed to raise snapshot:",i),await eh(n,i)}}async function eh(n,e,t){if(!$l(e))throw e;n.L_.add(1),await Hl(n),n.q_.set("Offline"),t||(t=()=>G0(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ih(n)})}function eE(n,e){return e().catch(t=>eh(n,t,e))}async function Sh(n){const e=Se(n),t=Bi(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;mN(e);)try{const o=await Jk(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,gN(e,o)}catch(o){await eh(e,o)}tE(e)&&nE(e)}function mN(n){return Us(n)&&n.O_.length<10}function gN(n,e){n.O_.push(e);const t=Bi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function tE(n){return Us(n)&&!Bi(n).n_()&&n.O_.length>0}function nE(n){Bi(n).start()}async function yN(n){Bi(n).p_()}async function _N(n){const e=Bi(n);for(const t of n.O_)e.m_(t.mutations)}async function vN(n,e,t){const i=n.O_.shift(),o=qp.from(i,e,t);await eE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Sh(n)}async function wN(n,e){e&&Bi(n).V_&&await async function(i,o){if(function(c){return lk(c)&&c!==H.ABORTED}(o.code)){const l=i.O_.shift();Bi(i).s_(),await eE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Sh(i)}}(n,e),tE(n)&&nE(n)}async function ov(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),fe("RemoteStore","RemoteStore received new credentials");const i=Us(t);t.L_.add(3),await Hl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ih(t)}async function EN(n,e){const t=Se(n);e?(t.L_.delete(2),await Ih(t)):e||(t.L_.add(2),await Hl(t),t.q_.set("Unknown"))}function la(n){return n.K_||(n.K_=function(t,i,o){const l=Se(t);return l.w_(),new oN(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:hN.bind(null,n),Ro:dN.bind(null,n),mo:fN.bind(null,n),d_:pN.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),em(n)?Zp(n):n.q_.set("Unknown")):(await n.K_.stop(),Z0(n))})),n.K_}function Bi(n){return n.U_||(n.U_=function(t,i,o){const l=Se(t);return l.w_(),new aN(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:yN.bind(null,n),mo:wN.bind(null,n),f_:_N.bind(null,n),g_:vN.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Sh(n)):(await n.U_.stop(),n.O_.length>0&&(fe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new tm(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nm(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),$l(n))return new ue(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=cl(),this.sortedSet=new it(this.comparator)}static emptySet(e){return new Bo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.W_=new it(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Zo{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Zo(e,t,Bo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class IN{constructor(){this.queries=lv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=lv(),l.forEach((c,d)=>{for(const p of d.j_)p.onError(i)})})(this,new ue(H.ABORTED,"Firestore shutting down"))}}function lv(){return new aa(n=>S0(n),yh)}async function SN(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new TN,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=nm(c,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&rm(t)}async function RN(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function AN(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.j_)d.X_(o)&&(i=!0);c.z_=o}}i&&rm(t)}function PN(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function rm(n){n.Y_.forEach(e=>{e.next()})}var ip,uv;(uv=ip||(ip={})).ea="default",uv.Cache="cache";class CN{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ip.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.key=e}}class iE{constructor(e){this.key=e}}class kN{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Oe(),this.mutatedKeys=Oe(),this.Aa=R0(e),this.Ra=new Bo(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new av,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,E)=>{const S=o.get(v),O=_h(this.query,E)?E:null,F=!!S&&this.mutatedKeys.has(S.key),B=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let b=!1;S&&O?S.data.isEqual(O.data)?F!==B&&(i.track({type:3,doc:O}),b=!0):this.ga(S,O)||(i.track({type:2,doc:O}),b=!0,(p&&this.Aa(O,p)>0||y&&this.Aa(O,y)<0)&&(d=!0)):!S&&O?(i.track({type:0,doc:O}),b=!0):S&&!O&&(i.track({type:1,doc:S}),b=!0,(p||y)&&(d=!0)),b&&(O?(c=c.add(O),l=B?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:d,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((v,E)=>function(O,F){const B=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return B(O)-B(F)}(v.type,E.type)||this.Aa(v.doc,E.doc)),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,c.length!==0||y?{snapshot:new Zo(this.query,e.Ra,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new av,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Oe(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new iE(i))}),this.da.forEach(i=>{e.has(i)||t.push(new rE(i))}),t}ba(e){this.Ta=e.Ts,this.da=Oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Zo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class NN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class xN{constructor(e){this.key=e,this.va=!1}}class ON{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new aa(d=>S0(d),yh),this.Ma=new Map,this.xa=new Set,this.Oa=new it(ye.comparator),this.Na=new Map,this.La=new Gp,this.Ba={},this.ka=new Map,this.qa=Jo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function DN(n,e,t=!0){const i=cE(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await sE(i,e,t,!0),o}async function bN(n,e){const t=cE(n);await sE(t,e,!0,!1)}async function sE(n,e,t,i){const o=await Zk(n.localStore,_r(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await LN(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&X0(n.remoteStore,o),d}async function LN(n,e,t,i,o){n.Ka=(E,S,O)=>async function(B,b,q,X){let Y=b.view.ma(q);Y.ns&&(Y=await rv(B.localStore,b.query,!1).then(({documents:P})=>b.view.ma(P,Y)));const te=X&&X.targetChanges.get(b.targetId),ge=X&&X.targetMismatches.get(b.targetId)!=null,ae=b.view.applyChanges(Y,B.isPrimaryClient,te,ge);return hv(B,b.targetId,ae.wa),ae.snapshot}(n,E,S,O);const l=await rv(n.localStore,e,!0),c=new kN(e,l.Ts),d=c.ma(l.documents),p=ql.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);hv(n,t,y.wa);const v=new NN(e,t,c);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function VN(n,e,t){const i=Se(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(c=>!yh(c,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await rp(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Xp(i.remoteStore,o.targetId),sp(i,o.targetId)}).catch(zl)):(sp(i,o.targetId),await rp(i.localStore,o.targetId,!0))}async function MN(n,e){const t=Se(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xp(t.remoteStore,i.targetId))}async function UN(n,e,t){const i=qN(n);try{const o=await function(c,d){const p=Se(c),y=St.now(),v=d.reduce((O,F)=>O.add(F.key),Oe());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let F=Qr(),B=Oe();return p.cs.getEntries(O,v).next(b=>{F=b,F.forEach((q,X)=>{X.isValidDocument()||(B=B.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,F)).next(b=>{E=b;const q=[];for(const X of d){const Y=rk(X,E.get(X.key).overlayedDocument);Y!=null&&q.push(new $i(X.key,Y,g0(Y.value.mapValue),vr.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,q,d)}).next(b=>{S=b;const q=b.applyToLocalDocumentSet(E,B);return p.documentOverlayCache.saveOverlays(O,b.batchId,q)})}).then(()=>({batchId:S.batchId,changes:P0(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Ba[c.currentUser.toKey()];y||(y=new it(Be)),y=y.insert(d,p),c.Ba[c.currentUser.toKey()]=y}(i,o.batchId,t),await Kl(i,o.changes),await Sh(i.remoteStore)}catch(o){const l=nm(o,"Failed to persist write");t.reject(l)}}async function oE(n,e){const t=Se(n);try{const i=await Yk(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Na.get(l);c&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?We(c.va):o.removedDocuments.size>0&&(We(c.va),c.va=!1))}),await Kl(t,i,e)}catch(i){await zl(i)}}function cv(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,c)=>{const d=c.view.Z_(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((v,E)=>{for(const S of E.j_)S.Z_(d)&&(y=!0)}),y&&rm(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function FN(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new it(ye.comparator);c=c.insert(l,Kt.newNoDocument(l,Ie.min()));const d=Oe().add(l),p=new Eh(Ie.min(),new Map,new it(Be),c,d);await oE(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),im(i)}else await rp(i.localStore,e,!1).then(()=>sp(i,e,t)).catch(zl)}async function jN(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await Qk(t.localStore,e);lE(t,i,null),aE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Kl(t,o)}catch(o){await zl(o)}}async function BN(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(E=>(We(E!==null),v=E.keys(),p.mutationQueue.removeMutationBatch(y,E))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);lE(i,e,t),aE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Kl(i,o)}catch(o){await zl(o)}}function aE(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function lE(n,e,t){const i=Se(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function sp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||uE(n,i)})}function uE(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Xp(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),im(n))}function hv(n,e,t){for(const i of t)i instanceof rE?(n.La.addReference(i.key,e),zN(n,i)):i instanceof iE?(fe("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||uE(n,i.key)):Te()}function zN(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(fe("SyncEngine","New document in limbo: "+t),n.xa.add(i),im(n))}function im(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(Je.fromString(e)),i=n.qa.next();n.Na.set(i,new xN(t)),n.Oa=n.Oa.insert(t,i),X0(n.remoteStore,new Oi(_r($p(t.path)),i,"TargetPurposeLimboResolution",Mp.oe))}}async function Kl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach((d,p)=>{c.push(i.Ka(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=Yp.Wi(p.targetId,y);l.push(E)}}))}),await Promise.all(c),i.Ca.d_(o),await async function(p,y){const v=Se(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Q.forEach(y,S=>Q.forEach(S.$i,O=>v.persistence.referenceDelegate.addReference(E,S.targetId,O)).next(()=>Q.forEach(S.Ui,O=>v.persistence.referenceDelegate.removeReference(E,S.targetId,O)))))}catch(E){if(!$l(E))throw E;fe("LocalStore","Failed to update sequence numbers: "+E)}for(const E of y){const S=E.targetId;if(!E.fromCache){const O=v.os.get(S),F=O.snapshotVersion,B=O.withLastLimboFreeSnapshotVersion(F);v.os=v.os.insert(S,B)}}}(i.localStore,l))}async function $N(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){fe("SyncEngine","User change. New user:",e.toKey());const i=await K0(t.localStore,e);t.currentUser=e,function(l,c){l.ka.forEach(d=>{d.forEach(p=>{p.reject(new ue(H.CANCELLED,c))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Kl(t,i.hs)}}function WN(n,e){const t=Se(n),i=t.Na.get(e);if(i&&i.va)return Oe().add(i.key);{let o=Oe();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const d=t.Fa.get(c);o=o.unionWith(d.view.Va)}return o}}function cE(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=oE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FN.bind(null,e),e.Ca.d_=AN.bind(null,e.eventManager),e.Ca.$a=PN.bind(null,e.eventManager),e}function qN(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BN.bind(null,e),e}class th{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Gk(this.persistence,new Hk,e.initialUser,this.serializer)}Ga(e){return new $k(Qp.Zr,this.serializer)}Wa(e){return new tN}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}th.provider={build:()=>new th};class op{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>cv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=$N.bind(null,this.syncEngine),await EN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IN}()}createDatastore(e){const t=Th(e.databaseInfo.databaseId),i=function(l){return new sN(l)}(e.databaseInfo);return function(l,c,d,p){return new lN(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new cN(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>cv(this.syncEngine,t,0),function(){return sv.D()?new sv:new nN}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const E=new ON(o,l,c,d,p,y);return v&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);fe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Hl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}op.provider={build:()=>new op};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=f0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{fe("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(fe("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=nm(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Tf(n,e){n.asyncQueue.verifyOperationInProgress(),fe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await K0(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GN(n);fe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>ov(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>ov(e.remoteStore,o)),n._onlineComponents=e}async function GN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Tf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Go("Error using user provided cache. Falling back to memory cache: "+t),await Tf(n,new th)}}else fe("FirestoreClient","Using default OfflineComponentProvider"),await Tf(n,new th);return n._offlineComponents}async function hE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe("FirestoreClient","Using user provided OnlineComponentProvider"),await dv(n,n._uninitializedComponentsProvider._online)):(fe("FirestoreClient","Using default OnlineComponentProvider"),await dv(n,new op))),n._onlineComponents}function QN(n){return hE(n).then(e=>e.syncEngine)}async function fv(n){const e=await hE(n),t=e.eventManager;return t.onListen=DN.bind(null,e.syncEngine),t.onUnlisten=VN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MN.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n,e,t){if(!t)throw new ue(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function YN(n,e,t,i){if(e===!0&&i===!0)throw new ue(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mv(n){if(!ye.isDocumentKey(n))throw new ue(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gv(n){if(ye.isDocumentKey(n))throw new ue(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Rh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function As(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ue(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Rh(n);throw new ue(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new dC;switch(i.type){case"firstParty":return new gC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ue(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=pv.get(t);i&&(fe("ComponentProvider","Removing Datastore"),pv.delete(t),i.terminate())}(this),Promise.resolve()}}function XN(n,e,t,i={}){var o;const l=(n=As(n,Ah))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ht.MOCK_USER;else{d=ww(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ue(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ht(y)}n._authCredentials=new fC(new d0(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Fs(this.firestore,e,this._query)}}class fn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class Mi extends Fs{constructor(e,t,i){super(e,t,$p(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ye(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function pE(n,e,...t){if(n=at(n),fE("collection","path",e),n instanceof Ah){const i=Je.fromString(e,...t);return gv(i),new Mi(n,null,i)}{if(!(n instanceof fn||n instanceof Mi))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return gv(i),new Mi(n.firestore,null,i)}}function JN(n,e,...t){if(n=at(n),arguments.length===1&&(e=f0.newId()),fE("doc","path",e),n instanceof Ah){const i=Je.fromString(e,...t);return mv(i),new fn(n,null,new ye(i))}{if(!(n instanceof fn||n instanceof Mi))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return mv(i),new fn(n.firestore,n instanceof Mi?n.converter:null,new ye(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Q0(this,"async_queue_retry"),this.Vu=()=>{const i=Ef();i&&fe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Ef();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ef();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Rs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$l(e))throw e;fe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Gr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=tm.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function vv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Dl extends Ah{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new _v,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _v(e),this._firestoreClient=void 0,await e}}}function ZN(n,e){const t=typeof n=="object"?n:Sp(),i=typeof n=="string"?n:"(default)",o=dh(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=yw("firestore");l&&XN(o,...l)}return o}function mE(n){if(n._terminated)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ex(n),n._firestoreClient}function ex(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new kC(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,dE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new KN(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ea(jt.fromBase64String(e))}catch(t){throw new ue(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ea(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=/^__.*__$/;class nx{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wl(e,this.data,t,this.fieldTransforms)}}class gE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new $i(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class lm{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new lm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return nh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yE(this.Cu)&&tx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class rx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Th(e)}Qu(e,t,i,o=!1){return new lm({Cu:e,methodName:t,qu:i,path:Ut.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function um(n){const e=n._freezeSettings(),t=Th(n._databaseId);return new rx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ix(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);cm("Data must be an object, but it was:",c,i);const d=_E(i,c);let p,y;if(l.merge)p=new In(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const S=ap(e,E,t);if(!c.contains(S))throw new ue(H.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);wE(v,S)||v.push(S)}p=new In(v),y=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,y=c.fieldTransforms;return new nx(new dn(d),p,y)}class Ch extends sm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ch}}function sx(n,e,t,i){const o=n.Qu(1,e,t);cm("Data must be an object, but it was:",o,i);const l=[],c=dn.empty();Ms(i,(p,y)=>{const v=hm(e,p,t);y=at(y);const E=o.Nu(v);if(y instanceof Ch)l.push(v);else{const S=Gl(y,E);S!=null&&(l.push(v),c.set(v,S))}});const d=new In(l);return new gE(c,d,o.fieldTransforms)}function ox(n,e,t,i,o,l){const c=n.Qu(1,e,t),d=[ap(e,i,t)],p=[o];if(l.length%2!=0)throw new ue(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(ap(e,l[S])),p.push(l[S+1]);const y=[],v=dn.empty();for(let S=d.length-1;S>=0;--S)if(!wE(y,d[S])){const O=d[S];let F=p[S];F=at(F);const B=c.Nu(O);if(F instanceof Ch)y.push(O);else{const b=Gl(F,B);b!=null&&(y.push(O),v.set(O,b))}}const E=new In(y);return new gE(v,E,c.fieldTransforms)}function ax(n,e,t,i=!1){return Gl(t,n.Qu(i?4:3,e))}function Gl(n,e){if(vE(n=at(n)))return cm("Unsupported field value:",e,n),_E(n,e);if(n instanceof sm)return function(i,o){if(!yE(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=Gl(d,o.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=at(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return XC(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=St.fromDate(i);return{timestampValue:Zc(o.serializer,l)}}if(i instanceof St){const l=new St(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Zc(o.serializer,l)}}if(i instanceof om)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ea)return{bytesValue:j0(o.serializer,i._byteString)};if(i instanceof fn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Kp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof am)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.Bu("VectorValues must only contain numeric values.");return Wp(d.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${Rh(i)}`)}(n,e)}function _E(n,e){const t={};return p0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(n,(i,o)=>{const l=Gl(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function vE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof om||n instanceof ea||n instanceof fn||n instanceof sm||n instanceof am)}function cm(n,e,t){if(!vE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Rh(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function ap(n,e,t){if((e=at(e))instanceof Ph)return e._internalPath;if(typeof e=="string")return hm(n,e);throw nh("Field path arguments must be of type string or ",n,!1,void 0,t)}const lx=new RegExp("[~\\*/\\[\\]]");function hm(n,e,t){if(e.search(lx)>=0)throw nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ph(...e.split("."))._internalPath}catch{throw nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function nh(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ue(H.INVALID_ARGUMENT,d+n+p)}function wE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ux(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(dm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ux extends EE{data(){return super.data()}}function dm(n,e){return typeof e=="string"?hm(n,e):e instanceof Ph?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ue(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fm{}class TE extends fm{}function hx(n,e,...t){let i=[];e instanceof fm&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof mm).length,d=l.filter(p=>p instanceof pm).length;if(c>1||c>0&&d>0)throw new ue(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class pm extends TE{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new pm(e,t,i)}_apply(e){const t=this._parse(e);return IE(e._query,t),new Fs(e.firestore,e.converter,Xf(e._query,t))}_parse(e){const t=um(e.firestore);return function(l,c,d,p,y,v,E){let S;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ue(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Ev(E,v);const O=[];for(const F of E)O.push(wv(p,l,F));S={arrayValue:{values:O}}}else S=wv(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Ev(E,v),S=ax(d,c,E,v==="in"||v==="not-in");return _t.create(y,v,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mm extends fm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:nr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)IE(c,p),c=Xf(c,p)}(e._query,t),new Fs(e.firestore,e.converter,Xf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gm extends TE{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new gm(e,t)}_apply(e){const t=function(o,l,c){if(o.startAt!==null)throw new ue(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ue(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Nl(l,c)}(e._query,this._field,this._direction);return new Fs(e.firestore,e.converter,function(o,l){const c=o.explicitOrderBy.concat([l]);return new oa(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function dx(n,e="asc"){const t=e,i=dm("orderBy",n);return gm._create(i,t)}function wv(n,e,t){if(typeof(t=at(t))=="string"){if(t==="")throw new ue(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!I0(e)&&t.indexOf("/")!==-1)throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Je.fromString(t));if(!ye.isDocumentKey(i))throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return j_(n,new ye(i))}if(t instanceof fn)return j_(n,t._key);throw new ue(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(t)}.`)}function Ev(n,e){if(!Array.isArray(n)||n.length===0)throw new ue(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IE(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ue(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ue(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class fx{convertValue(e,t="none"){switch(Ds(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ms(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>dt(c.doubleValue));return new am(l)}convertGeoPoint(e){return new om(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fp(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Pl(e));default:return null}}convertTimestamp(e){const t=ji(e);return new St(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Je.fromString(e);We(H0(i));const o=new Cl(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SE extends EE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(dm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Dc extends SE{data(e={}){return super.data(e)}}class mx{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new dl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Dc(this._firestore,this._userDataWriter,i.key,i,new dl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new Dc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new dl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Dc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new dl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:gx(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class RE extends fx{constructor(e){super(),this.firestore=e}convertBytes(e){return new ea(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function yx(n,e,t,...i){n=As(n,fn);const o=As(n.firestore,Dl),l=um(o);let c;return c=typeof(e=at(e))=="string"||e instanceof Ph?ox(l,"updateDoc",n._key,e,t,i):sx(l,"updateDoc",n._key,e),AE(o,[c.toMutation(n._key,vr.exists(!0))])}function _x(n,e){const t=As(n.firestore,Dl),i=JN(n),o=px(n.converter,e);return AE(t,[ix(um(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,vr.exists(!1))]).then(()=>i)}function vx(n,...e){var t,i,o;n=at(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||vv(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(vv(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,v;if(n instanceof fn)y=As(n.firestore,Dl),v=$p(n._key.path),p={next:E=>{e[c]&&e[c](wx(y,n,E))},error:e[c+1],complete:e[c+2]};else{const E=As(n,Fs);y=As(E.firestore,Dl),v=E._query;const S=new RE(y);p={next:O=>{e[c]&&e[c](new mx(y,S,E,O))},error:e[c+1],complete:e[c+2]},cx(n._query)}return function(S,O,F,B){const b=new HN(B),q=new CN(O,b,F);return S.asyncQueue.enqueueAndForget(async()=>SN(await fv(S),q)),()=>{b.Za(),S.asyncQueue.enqueueAndForget(async()=>RN(await fv(S),q))}}(mE(y),v,d,p)}function AE(n,e){return function(i,o){const l=new Rs;return i.asyncQueue.enqueueAndForget(async()=>UN(await QN(i),o,l)),l.promise}(mE(n),e)}function wx(n,e,t){const i=t.docs.get(e._key),o=new RE(n);return new SE(n,o,e._key,i,new dl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){sa=o})(Vs),Cs(new Ui("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Dl(new pC(i.getProvider("auth-internal")),new _C(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ue(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),gr(L_,"4.7.3",e),gr(L_,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firebasestorage.googleapis.com",CE="storageBucket",Ex=2*60*1e3,Tx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends pn{constructor(e,t,i=0){super(If(e),`Firebase Storage: ${t} (${If(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return If(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function If(n){return"storage/"+n}function ym(){const n="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,n)}function Ix(n){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Sx(n){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Rx(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,n)}function Ax(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Px(n){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Cx(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kx(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function Nx(n){return new ut(lt.INVALID_URL,"Invalid URL '"+n+"'.")}function xx(n){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ox(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+CE+"' property when initializing the app?")}function Dx(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bx(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Lx(n){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lp(n){return new ut(lt.INVALID_ARGUMENT,n)}function kE(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function Vx(n){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vl(n,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function sl(n){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Sn.makeFromUrl(e,t)}catch{return new Sn(e,"")}if(i.path==="")return i;throw xx(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(te){te.path.charAt(te.path.length-1)==="/"&&(te.path_=te.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(te){te.path_=decodeURIComponent(te.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${E}/${v}/b/${o}/o${S}`,"i"),F={bucket:1,path:3},B=t===PE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",q=new RegExp(`^https?://${B}/${o}/${b}`,"i"),Y=[{regex:d,indices:p,postModify:l},{regex:O,indices:F,postModify:y},{regex:q,indices:{bucket:1,path:2},postModify:y}];for(let te=0;te<Y.length;te++){const ge=Y[te],ae=ge.regex.exec(e);if(ae){const P=ae[ge.indices.bucket];let I=ae[ge.indices.path];I||(I=""),i=new Sn(P,I),ge.postModify(i);break}}if(i==null)throw Nx(e);return i}}class Mx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...b){y||(y=!0,e.apply(null,b))}function E(b){o=setTimeout(()=>{o=null,n(O,p())},b)}function S(){l&&clearTimeout(l)}function O(b,...q){if(y){S();return}if(b){S(),v.call(null,b,...q);return}if(p()||c){S(),v.call(null,b,...q);return}i<64&&(i*=2);let Y;d===1?(d=2,Y=0):Y=(i+Math.random())*1e3,E(Y)}let F=!1;function B(b){F||(F=!0,S(),!y&&(o!==null?(b||(d=2),clearTimeout(o),E(0)):b||(d=1)))}return E(0),l=setTimeout(()=>{c=!0,B(!0)},t),B}function Fx(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(n){return n!==void 0}function Bx(n){return typeof n=="object"&&!Array.isArray(n)}function _m(n){return typeof n=="string"||n instanceof String}function Tv(n){return vm()&&n instanceof Blob}function vm(){return typeof Blob<"u"}function Iv(n,e,t,i){if(i<e)throw lp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw lp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function NE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ps;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,t,i,o,l,c,d,p,y,v,E,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,F)=>{this.resolve_=O,this.reject_=F,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new _c(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ps.NO_ERROR,p=l.getStatus();if(!d||zx(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ps.ABORT;i(!1,new _c(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new _c(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());jx(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=ym();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?kE():kx();c(p)}else{const p=Cx();c(p)}};this.canceled_?t(!1,new _c(!1,null,!0)):this.backoffId_=Ux(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Fx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _c{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Wx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function qx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Kx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Gx(n,e,t,i,o,l,c=!0){const d=NE(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return Hx(y,e),Wx(y,t),qx(y,l),Kx(y,i),new $x(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Yx(...n){const e=Qx();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(vm())return new Blob(n);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Xx(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(n){if(typeof atob>"u")throw Lx("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Sf{constructor(e,t){this.data=e,this.contentType=t||null}}function Zx(n,e){switch(n){case mr.RAW:return new Sf(xE(e));case mr.BASE64:case mr.BASE64URL:return new Sf(OE(n,e));case mr.DATA_URL:return new Sf(tO(e),nO(e))}throw ym()}function xE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function eO(n){let e;try{e=decodeURIComponent(n)}catch{throw vl(mr.DATA_URL,"Malformed data URL.")}return xE(e)}function OE(n,e){switch(n){case mr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw vl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case mr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw vl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Jx(e)}catch(o){throw o.message.includes("polyfill")?o:vl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class DE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw vl(mr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=rO(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function tO(n){const e=new DE(n);return e.base64?OE(mr.BASE64,e.rest):eO(e.rest)}function nO(n){return new DE(n).contentType}function rO(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){let i=0,o="";Tv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Tv(this.data_)){const i=this.data_,o=Xx(i,e,t);return o===null?null:new Ni(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ni(i,!0)}}static getBlob(...e){if(vm()){const t=e.map(i=>i instanceof Ni?i.data_:i);return new Ni(Yx.apply(null,t))}else{const t=e.map(c=>_m(c)?Zx(mr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Ni(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(n){let e;try{e=JSON.parse(n)}catch{return null}return Bx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sO(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function LE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(n,e){return e}class tn{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||oO}}let vc=null;function aO(n){return!_m(n)||n.length<2?n:LE(n)}function VE(){if(vc)return vc;const n=[];n.push(new tn("bucket")),n.push(new tn("generation")),n.push(new tn("metageneration")),n.push(new tn("name","fullPath",!0));function e(l,c){return aO(c)}const t=new tn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new tn("size");return o.xform=i,n.push(o),n.push(new tn("timeCreated")),n.push(new tn("updated")),n.push(new tn("md5Hash",null,!0)),n.push(new tn("cacheControl",null,!0)),n.push(new tn("contentDisposition",null,!0)),n.push(new tn("contentEncoding",null,!0)),n.push(new tn("contentLanguage",null,!0)),n.push(new tn("contentType",null,!0)),n.push(new tn("metadata","customMetadata",!0)),vc=n,vc}function lO(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Sn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function uO(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return lO(i,n),i}function ME(n,e,t){const i=bE(e);return i===null?null:uO(n,i,t)}function cO(n,e,t,i){const o=bE(e);if(o===null||!_m(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,E=n.fullPath,S="/b/"+c(v)+"/o/"+c(E),O=wm(S,t,i),F=NE({alt:"media",token:y});return O+F})[0]}function hO(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class UE{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){if(!n)throw ym()}function dO(n,e){function t(i,o){const l=ME(n,o,e);return FE(l!==null),l}return t}function fO(n,e){function t(i,o){const l=ME(n,o,e);return FE(l!==null),cO(l,o,n.host,n._protocol)}return t}function jE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Ax():o=Rx():t.getStatus()===402?o=Sx(n.bucket):t.getStatus()===403?o=Px(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function pO(n){const e=jE(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Ix(n.path)),l.serverResponse=o.serverResponse,l}return t}function mO(n,e,t){const i=e.fullServerUrl(),o=wm(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new UE(o,l,fO(n,t),c);return d.errorHandler=pO(e),d}function gO(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function yO(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=gO(null,e)),i}function _O(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let Y="";for(let te=0;te<2;te++)Y=Y+Math.random().toString().slice(2);return Y}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=yO(e,i,o),v=hO(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",O=Ni.getBlob(E,i,S);if(O===null)throw Dx();const F={name:y.fullPath},B=wm(l,n.host,n._protocol),b="POST",q=n.maxUploadRetryTime,X=new UE(B,b,dO(n,t),q);return X.urlParams=F,X.headers=c,X.body=O.uploadData(),X.errorHandler=jE(e),X}class vO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw sl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wO extends vO{initXhr(){this.xhr_.responseType="text"}}function BE(){return new wO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t){this._service=e,t instanceof Sn?this._location=t:this._location=Sn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new bs(e,t)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LE(this._location.path)}get storage(){return this._service}get parent(){const e=iO(this._location.path);if(e===null)return null;const t=new Sn(this._location.bucket,e);return new bs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Vx(e)}}function EO(n,e,t){n._throwIfRoot("uploadBytes");const i=_O(n.storage,n._location,VE(),new Ni(e,!0),t);return n.storage.makeRequestWithTokens(i,BE).then(o=>({metadata:o,ref:n}))}function TO(n){n._throwIfRoot("getDownloadURL");const e=mO(n.storage,n._location,VE());return n.storage.makeRequestWithTokens(e,BE).then(t=>{if(t===null)throw bx();return t})}function IO(n,e){const t=sO(n._location.path,e),i=new Sn(n._location.bucket,t);return new bs(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(n){return/^[A-Za-z]+:\/\//.test(n)}function RO(n,e){return new bs(n,e)}function zE(n,e){if(n instanceof Em){const t=n;if(t._bucket==null)throw Ox();const i=new bs(t,t._bucket);return e!=null?zE(i,e):i}else return e!==void 0?IO(n,e):n}function AO(n,e){if(e&&SO(e)){if(n instanceof Em)return RO(n,e);throw lp("To use ref(service, url), the first argument must be a Storage instance.")}else return zE(n,e)}function Sv(n,e){const t=e==null?void 0:e[CE];return t==null?null:Sn.makeFromBucketSpec(t,n)}function PO(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:ww(o,n.app.options.projectId))}class Em{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=PE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ex,this._maxUploadRetryTime=Tx,this._requests=new Set,o!=null?this._bucket=Sn.makeFromBucketSpec(o,this._host):this._bucket=Sv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=Sv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Mx(kE());{const c=Gx(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Rv="@firebase/storage",Av="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E="storage";function CO(n,e,t){return n=at(n),EO(n,e,t)}function kO(n){return n=at(n),TO(n)}function NO(n,e){return n=at(n),AO(n,e)}function xO(n=Sp(),e){n=at(n);const i=dh(n,$E).getImmediate({identifier:e}),o=yw("storage");return o&&OO(i,...o),i}function OO(n,e,t,i={}){PO(n,e,t,i)}function DO(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Em(t,i,o,e,Vs)}function bO(){Cs(new Ui($E,DO,"PUBLIC").setMultipleInstances(!0)),gr(Rv,Av,""),gr(Rv,Av,"esm2017")}bO();const LO={apiKey:"AIzaSyD3inNnBFoe9P-QiseO8ihe1bg_x4avjnE",authDomain:"hwitter-reloaded-8b74b.firebaseapp.com",projectId:"hwitter-reloaded-8b74b",storageBucket:"hwitter-reloaded-8b74b.firebasestorage.app",messagingSenderId:"11116758234",appId:"1:11116758234:web:6c92511c31914d4de0d1e3"},Tm=Iw(LO),Yr=cC(Tm),VO=xO(Tm),WE=ZN(Tm),MO=He.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,UO=He.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Rf=He.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  svg {
    width: 30px;
    fill: white;
  }
  &.log-out {
    border-color: tomato;
    svg {
      fill: tomato;
    }
  }
`;function FO(){const n=na(),e=async()=>{confirm("Are you sure you want to log out?")&&(await Yr.signOut(),n("/login"))};return re.jsxs(MO,{children:[re.jsxs(UO,{children:[re.jsx(Lc,{to:"/",children:re.jsx(Rf,{children:re.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:re.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),re.jsx(Lc,{to:"/profile",children:re.jsx(Rf,{children:re.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:re.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),re.jsx(Rf,{onClick:e,className:"log-out",children:re.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[re.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),re.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),re.jsx(iS,{})]})}const jO=He.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,BO=He.textarea`
	border: 2px solid white;
	padding: 20px;
	border-radius: 20px;
	font-size: 16px;
	color: white;
	background-color: black;
	width: 100%;
	resize: none;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	&::placeholder {
		font-size: 16px;
	}
	&:focus {
		outline: none;
		border-color: #1d9bf0;
	}
`,zO=He.label`
	padding: 10px 0px;
	color: #1d9bf0;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #1d9bf0;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`,$O=He.input`
	display: none;
`,WO=He.input`
	background-color: #1d9bf0;
	color: white;
	border: none;
	padding: 10px 0px;
	border-radius: 20px;
	font-size: 16px;
	cursor: pointer;
	&:hover,
	&:active {
			opacity: 0.9;
	}
`;function qO(){const[n,e]=ee.useState(!1),[t,i]=ee.useState(""),[o,l]=ee.useState(null),c=y=>{i(y.target.value)},d=y=>{const{files:v}=y.target;if(v&&v.length===1){const E=v[0];if(E.size>512e3){alert("Only files smaller than 500KB are allowed for upload."),y.target.value="",l(null);return}l(E)}},p=async y=>{y.preventDefault();const v=Yr.currentUser;if(!(!v||n||t===""||t.length>180))try{e(!0);const E=await _x(pE(WE,"tweets"),{tweet:t,createdAt:Date.now(),username:v.displayName||"Anonymous",userId:v.uid});if(o){const S=NO(VO,`tweets/${v.uid}-${v.displayName}/${E.id}`),O=await CO(S,o),F=await kO(O.ref);await yx(E,{photo:F})}i(""),l(null)}catch(E){console.log(E)}finally{e(!1)}};return re.jsxs(jO,{onSubmit:p,children:[re.jsx(BO,{rows:5,maxLength:180,onChange:c,value:t,placeholder:"What is happening?!"}),re.jsx(zO,{htmlFor:"file",children:o?"Photo added ✅":"Add photo"}),re.jsx($O,{onChange:d,type:"file",id:"file",accept:"image/*"}),re.jsx(WO,{type:"submit",value:n?"Posting...":"Post Tweet"})]})}const HO=He.div`
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`,Pv=He.div`
	&:last-child {
		place-self: end;
	}
`,KO=He.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`,GO=He.span`
  font-weight: 600;
  font-size: 15px;
`,QO=He.p`
  margin: 10px 0px;
  font-size: 18px;
`;function YO({username:n,photo:e,tweet:t}){return re.jsxs(HO,{children:[re.jsxs(Pv,{children:[re.jsx(GO,{children:n}),re.jsx(QO,{children:t})]}),re.jsx(Pv,{children:e?re.jsx(KO,{src:e}):null})]})}const XO=He.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
`;function JO(){const[n,e]=ee.useState([]);return ee.useEffect(()=>{let t=null;return(async()=>{const o=hx(pE(WE,"tweets"),dx("createdAt","desc"));t=await vx(o,l=>{const c=l.docs.map(d=>{const{tweet:p,createdAt:y,userId:v,username:E,photo:S}=d.data();return{tweet:p,createdAt:y,userId:v,username:E,photo:S,id:d.id}});e(c)})})(),()=>{t&&t()}},[]),re.jsx(XO,{children:n.map(t=>re.jsx(YO,{...t},t.id))})}const ZO=He.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 50px;
  overflow-y: scroll;
  /* Scrollbar styling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 transparent; /* For Firefox */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;function eD(){return re.jsxs(ZO,{children:[re.jsx(qO,{}),re.jsx(JO,{})]})}function tD(){return re.jsx("h1",{children:"Profile"})}const qE=He.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,HE=He.h1`
  font-size: 42px;
`,KE=He.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,Ts=He.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    background-color: #1d9bf0;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`,GE=He.span`
  font-weight: 600;
  color: tomato;
`,rh=He.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }
  button {
    color: #1d9bf0;
    text-decoration: underline;
    background-color: transparent;
    border: none;
  }
`,nD=He.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,rD=He.img`
  height: 25px;
`;function QE(){const n=na(),e=async()=>{try{const t=new Br;await vP(Yr,t),n("/")}catch(t){console.error(t)}};return re.jsxs(nD,{onClick:e,children:[re.jsx(rD,{src:"/img/github-logo.svg"}),"Continue with Github"]})}function iD(){const n=na(),[e,t]=ee.useState(!1),[i,o]=ee.useState(""),[l,c]=ee.useState(""),[d,p]=ee.useState(""),[y,v]=ee.useState(""),E=F=>{const{target:{name:B,value:b}}=F;B==="email"?o(b):B==="password"&&c(b)},S=async F=>{if(F.preventDefault(),p(""),!(e||i===""||l===""))try{t(!0),await QA(Yr,i,l),n("/")}catch(B){B instanceof pn&&p(B.message),console.log(B)}finally{t(!1)}},O=async()=>{if(p(""),v(""),!i){p("Please enter your email to reset password.");return}try{await Gw(Yr,i),v("Password reset email sent")}catch(F){F instanceof pn&&p(F.message)}};return re.jsxs(qE,{children:[re.jsx(HE,{children:"Log into 𝕏"}),re.jsxs(KE,{onSubmit:S,children:[re.jsx(Ts,{onChange:E,name:"email",value:i,placeholder:"Email",type:"email",required:!0}),re.jsx(Ts,{onChange:E,value:l,name:"password",placeholder:"Password",type:"password",required:!0}),re.jsx(Ts,{type:"submit",value:e?"Loading...":"Log in"})]}),d!==""?re.jsx(GE,{children:d}):null,y&&re.jsx("span",{style:{color:"lightgreen"},children:y}),re.jsxs(rh,{children:["Don't have an account?",re.jsx(Lc,{to:"/create-account",children:"Create one →"})]}),re.jsxs(rh,{children:["Forgot your password?",re.jsx("button",{onClick:O,children:"Reset Password →"})]}),re.jsx(QE,{})]})}function sD(){const n=na(),[e,t]=ee.useState(!1),[i,o]=ee.useState(""),[l,c]=ee.useState(""),[d,p]=ee.useState(""),[y,v]=ee.useState(""),[E,S]=ee.useState(""),O=b=>{const{target:{name:q,value:X}}=b;q==="name"?o(X):q==="email"?c(X):q==="password"&&p(X)},F=async b=>{if(b.preventDefault(),v(""),!(e||i===""||l===""||d===""))try{t(!0);const q=await GA(Yr,l,d);await XA(q.user,{displayName:i}),n("/")}catch(q){q instanceof pn&&v(q.message),console.log(q)}finally{t(!1)}},B=async()=>{if(v(""),S(""),!l){v("Please enter your email to reset password.");return}try{await Gw(Yr,l),S("Password reset email sent")}catch(b){b instanceof pn&&v(b.message)}};return re.jsxs(qE,{children:[re.jsx(HE,{children:"Join 𝕏"}),re.jsxs(KE,{onSubmit:F,children:[re.jsx(Ts,{onChange:O,name:"name",value:i,placeholder:"Name",type:"text",required:!0}),re.jsx(Ts,{onChange:O,name:"email",value:l,placeholder:"Email",type:"email",required:!0}),re.jsx(Ts,{onChange:O,value:d,name:"password",placeholder:"Password",type:"password",required:!0}),re.jsx(Ts,{type:"submit",value:e?"Loading...":"Create Account"})]}),y!==""?re.jsx(GE,{children:y}):null,E&&re.jsx("span",{style:{color:"lightgreen"},children:E}),re.jsxs(rh,{children:["Already have an account?"," ",re.jsx(Lc,{to:"/login",children:"Log in →"})]}),re.jsxs(rh,{children:["Forgot your password?",re.jsx("button",{onClick:B,children:"Reset Password →"})]}),re.jsx(QE,{})]})}var YE=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},XE=Ep(Cv||(Cv=YE([`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`],[`
/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`])));dw(kv||(kv=YE(["",""],["",""])),XE);var Cv,kv;const oD=He.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,aD=He.span`
  font-size: 24px;
`;function lD(){return re.jsx(oD,{children:re.jsx(aD,{children:"Loading..."})})}function uD({children:n}){return Yr.currentUser==null?re.jsx(rS,{to:"/login"}):n}const cD=dw`
  ${XE};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07111F;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,hD=He.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function dD(){const[n,e]=ee.useState(!0),t=async()=>{await Yr.authStateReady(),e(!1)};return ee.useEffect(()=>{t()},[]),re.jsxs(hD,{children:[re.jsx(cD,{}),n?re.jsx(lD,{}):re.jsx(fS,{children:re.jsxs(oS,{children:[re.jsxs(Do,{path:"/",element:re.jsx(uD,{children:re.jsx(FO,{})}),children:[re.jsx(Do,{index:!0,element:re.jsx(eD,{})}),re.jsx(Do,{path:"profile",element:re.jsx(tD,{})})]}),re.jsx(Do,{path:"/login",element:re.jsx(iD,{})}),re.jsx(Do,{path:"/create-account",element:re.jsx(sD,{})})]})})]})}const fD=hI.createRoot(document.getElementById("root"));fD.render(re.jsx(Jn.StrictMode,{children:re.jsx(dD,{})}));
