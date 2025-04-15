function CI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function t0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var df={exports:{}},sl={},ff={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xy;function PI(){if(Xy)return xe;Xy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,B={};function b(L,W,ge){this.props=L,this.context=W,this.refs=B,this.updater=ge||N}b.prototype.isReactComponent={},b.prototype.setState=function(L,W){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,W,"setState")},b.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function H(){}H.prototype=b.prototype;function J(L,W,ge){this.props=L,this.context=W,this.refs=B,this.updater=ge||N}var K=J.prototype=new H;K.constructor=J,U(K,b.prototype),K.isPureReactComponent=!0;var ee=Array.isArray,le=Object.prototype.hasOwnProperty,re={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function I(L,W,ge){var Ae,Ce={},Pe=null,De=null;if(W!=null)for(Ae in W.ref!==void 0&&(De=W.ref),W.key!==void 0&&(Pe=""+W.key),W)le.call(W,Ae)&&!A.hasOwnProperty(Ae)&&(Ce[Ae]=W[Ae]);var Ne=arguments.length-2;if(Ne===1)Ce.children=ge;else if(1<Ne){for(var Ve=Array(Ne),ot=0;ot<Ne;ot++)Ve[ot]=arguments[ot+2];Ce.children=Ve}if(L&&L.defaultProps)for(Ae in Ne=L.defaultProps,Ne)Ce[Ae]===void 0&&(Ce[Ae]=Ne[Ae]);return{$$typeof:n,type:L,key:Pe,ref:De,props:Ce,_owner:re.current}}function C(L,W){return{$$typeof:n,type:L.type,key:W,ref:L.ref,props:L.props,_owner:L._owner}}function x(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function O(L){var W={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return W[ge]})}var V=/\/+/g;function P(L,W){return typeof L=="object"&&L!==null&&L.key!=null?O(""+L.key):W.toString(36)}function tt(L,W,ge,Ae,Ce){var Pe=typeof L;(Pe==="undefined"||Pe==="boolean")&&(L=null);var De=!1;if(L===null)De=!0;else switch(Pe){case"string":case"number":De=!0;break;case"object":switch(L.$$typeof){case n:case e:De=!0}}if(De)return De=L,Ce=Ce(De),L=Ae===""?"."+P(De,0):Ae,ee(Ce)?(ge="",L!=null&&(ge=L.replace(V,"$&/")+"/"),tt(Ce,W,ge,"",function(ot){return ot})):Ce!=null&&(x(Ce)&&(Ce=C(Ce,ge+(!Ce.key||De&&De.key===Ce.key?"":(""+Ce.key).replace(V,"$&/")+"/")+L)),W.push(Ce)),1;if(De=0,Ae=Ae===""?".":Ae+":",ee(L))for(var Ne=0;Ne<L.length;Ne++){Pe=L[Ne];var Ve=Ae+P(Pe,Ne);De+=tt(Pe,W,ge,Ve,Ce)}else if(Ve=S(L),typeof Ve=="function")for(L=Ve.call(L),Ne=0;!(Pe=L.next()).done;)Pe=Pe.value,Ve=Ae+P(Pe,Ne++),De+=tt(Pe,W,ge,Ve,Ce);else if(Pe==="object")throw W=String(L),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return De}function Rt(L,W,ge){if(L==null)return L;var Ae=[],Ce=0;return tt(L,Ae,"","",function(Pe){return W.call(ge,Pe,Ce++)}),Ae}function At(L){if(L._status===-1){var W=L._result;W=W(),W.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=W)}if(L._status===1)return L._result.default;throw L._result}var je={current:null},se={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:se,ReactCurrentOwner:re};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Rt,forEach:function(L,W,ge){Rt(L,function(){W.apply(this,arguments)},ge)},count:function(L){var W=0;return Rt(L,function(){W++}),W},toArray:function(L){return Rt(L,function(W){return W})||[]},only:function(L){if(!x(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xe.Component=b,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=J,xe.StrictMode=i,xe.Suspense=p,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,xe.act=oe,xe.cloneElement=function(L,W,ge){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ae=U({},L.props),Ce=L.key,Pe=L.ref,De=L._owner;if(W!=null){if(W.ref!==void 0&&(Pe=W.ref,De=re.current),W.key!==void 0&&(Ce=""+W.key),L.type&&L.type.defaultProps)var Ne=L.type.defaultProps;for(Ve in W)le.call(W,Ve)&&!A.hasOwnProperty(Ve)&&(Ae[Ve]=W[Ve]===void 0&&Ne!==void 0?Ne[Ve]:W[Ve])}var Ve=arguments.length-2;if(Ve===1)Ae.children=ge;else if(1<Ve){Ne=Array(Ve);for(var ot=0;ot<Ve;ot++)Ne[ot]=arguments[ot+2];Ae.children=Ne}return{$$typeof:n,type:L.type,key:Ce,ref:Pe,props:Ae,_owner:De}},xe.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},xe.createElement=I,xe.createFactory=function(L){var W=I.bind(null,L);return W.type=L,W},xe.createRef=function(){return{current:null}},xe.forwardRef=function(L){return{$$typeof:d,render:L}},xe.isValidElement=x,xe.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:At}},xe.memo=function(L,W){return{$$typeof:y,type:L,compare:W===void 0?null:W}},xe.startTransition=function(L){var W=se.transition;se.transition={};try{L()}finally{se.transition=W}},xe.unstable_act=oe,xe.useCallback=function(L,W){return je.current.useCallback(L,W)},xe.useContext=function(L){return je.current.useContext(L)},xe.useDebugValue=function(){},xe.useDeferredValue=function(L){return je.current.useDeferredValue(L)},xe.useEffect=function(L,W){return je.current.useEffect(L,W)},xe.useId=function(){return je.current.useId()},xe.useImperativeHandle=function(L,W,ge){return je.current.useImperativeHandle(L,W,ge)},xe.useInsertionEffect=function(L,W){return je.current.useInsertionEffect(L,W)},xe.useLayoutEffect=function(L,W){return je.current.useLayoutEffect(L,W)},xe.useMemo=function(L,W){return je.current.useMemo(L,W)},xe.useReducer=function(L,W,ge){return je.current.useReducer(L,W,ge)},xe.useRef=function(L){return je.current.useRef(L)},xe.useState=function(L){return je.current.useState(L)},xe.useSyncExternalStore=function(L,W,ge){return je.current.useSyncExternalStore(L,W,ge)},xe.useTransition=function(){return je.current.useTransition()},xe.version="18.3.1",xe}var Jy;function Sp(){return Jy||(Jy=1,ff.exports=PI()),ff.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zy;function kI(){if(Zy)return sl;Zy=1;var n=Sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,E={},S=null,N=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(N=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(E[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)E[v]===void 0&&(E[v]=p[v]);return{$$typeof:e,type:d,key:S,ref:N,props:E,_owner:o.current}}return sl.Fragment=t,sl.jsx=c,sl.jsxs=c,sl}var e_;function xI(){return e_||(e_=1,df.exports=kI()),df.exports}var q=xI(),Y=Sp();const Jn=t0(Y),NI=CI({__proto__:null,default:Jn},[Y]);var pc={},pf={exports:{}},hn={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function DI(){return t_||(t_=1,function(n){function e(se,de){var oe=se.length;se.push(de);e:for(;0<oe;){var L=oe-1>>>1,W=se[L];if(0<o(W,de))se[L]=de,se[oe]=W,oe=L;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var de=se[0],oe=se.pop();if(oe!==de){se[0]=oe;e:for(var L=0,W=se.length,ge=W>>>1;L<ge;){var Ae=2*(L+1)-1,Ce=se[Ae],Pe=Ae+1,De=se[Pe];if(0>o(Ce,oe))Pe<W&&0>o(De,Ce)?(se[L]=De,se[Pe]=oe,L=Pe):(se[L]=Ce,se[Ae]=oe,L=Ae);else if(Pe<W&&0>o(De,oe))se[L]=De,se[Pe]=oe,L=Pe;else break e}}return de}function o(se,de){var oe=se.sortIndex-de.sortIndex;return oe!==0?oe:se.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,E=null,S=3,N=!1,U=!1,B=!1,b=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(se){for(var de=t(y);de!==null;){if(de.callback===null)i(y);else if(de.startTime<=se)i(y),de.sortIndex=de.expirationTime,e(p,de);else break;de=t(y)}}function ee(se){if(B=!1,K(se),!U)if(t(p)!==null)U=!0,At(le);else{var de=t(y);de!==null&&je(ee,de.startTime-se)}}function le(se,de){U=!1,B&&(B=!1,H(I),I=-1),N=!0;var oe=S;try{for(K(de),E=t(p);E!==null&&(!(E.expirationTime>de)||se&&!O());){var L=E.callback;if(typeof L=="function"){E.callback=null,S=E.priorityLevel;var W=L(E.expirationTime<=de);de=n.unstable_now(),typeof W=="function"?E.callback=W:E===t(p)&&i(p),K(de)}else i(p);E=t(p)}if(E!==null)var ge=!0;else{var Ae=t(y);Ae!==null&&je(ee,Ae.startTime-de),ge=!1}return ge}finally{E=null,S=oe,N=!1}}var re=!1,A=null,I=-1,C=5,x=-1;function O(){return!(n.unstable_now()-x<C)}function V(){if(A!==null){var se=n.unstable_now();x=se;var de=!0;try{de=A(!0,se)}finally{de?P():(re=!1,A=null)}}else re=!1}var P;if(typeof J=="function")P=function(){J(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Rt=tt.port2;tt.port1.onmessage=V,P=function(){Rt.postMessage(null)}}else P=function(){b(V,0)};function At(se){A=se,re||(re=!0,P())}function je(se,de){I=b(function(){se(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){U||N||(U=!0,At(le))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(S){case 1:case 2:case 3:var de=3;break;default:de=S}var oe=S;S=de;try{return se()}finally{S=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,de){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var oe=S;S=se;try{return de()}finally{S=oe}},n.unstable_scheduleCallback=function(se,de,oe){var L=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,se){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=oe+W,se={id:v++,callback:de,priorityLevel:se,startTime:oe,expirationTime:W,sortIndex:-1},oe>L?(se.sortIndex=oe,e(y,se),t(p)===null&&se===t(y)&&(B?(H(I),I=-1):B=!0,je(ee,oe-L))):(se.sortIndex=W,e(p,se),U||N||(U=!0,At(le))),se},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(se){var de=S;return function(){var oe=S;S=de;try{return se.apply(this,arguments)}finally{S=oe}}}}(gf)),gf}var n_;function OI(){return n_||(n_=1,mf.exports=DI()),mf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function bI(){if(r_)return hn;r_=1;var n=Sp(),e=OI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function S(r){return p.call(E,r)?!0:p.call(v,r)?!1:y.test(r)?E[r]=!0:(v[r]=!0,!1)}function N(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function U(r,s,a,h){if(s===null||typeof s>"u"||N(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function B(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new B(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new B(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new B(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new B(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new B(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new B(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new B(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new B(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new B(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,J);b[s]=new B(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,J);b[s]=new B(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,J);b[s]=new B(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new B(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,a,h){var f=b.hasOwnProperty(s)?b[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(U(s,a,f,h)&&(a=null),h||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ee=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),re=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),se=Symbol.iterator;function de(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,L;function W(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var ge=!1;function Ae(r,s){if(!r||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var k=`
`+f[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=R);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?W(r):""}function Ce(r){switch(r.tag){case 5:return W(r.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case A:return"Fragment";case re:return"Portal";case C:return"Profiler";case I:return"StrictMode";case P:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case x:return(r._context.displayName||"Context")+".Provider";case V:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Rt:return s=r.displayName||null,s!==null?s:Pe(r.type)||"Memo";case At:s=r._payload,r=r._init;try{return Pe(r(s))}catch{}}return null}function De(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ve(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ot(r){var s=Ve(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function nn(r){r._valueTracker||(r._valueTracker=ot(r))}function Yt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Ve(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function ni(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ki(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function zs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ne(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ha(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function da(r,s){ha(r,s);var a=Ne(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?$s(r,s.type,a):s.hasOwnProperty("defaultValue")&&$s(r,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Zl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function $s(r,s,a){(s!=="number"||ni(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Rr=Array.isArray;function Ar(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ne(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function fa(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function qs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Rr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ne(a)}}function Ws(r,s){var a=Ne(s.value),h=Ne(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function pa(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Cr,ma=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Cr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function ri(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qi=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(r){Qi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Gi[s]=Gi[r]})});function ga(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Gi.hasOwnProperty(r)&&Gi[r]?(""+s).trim():s+"px"}function ya(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=ga(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var _a=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(r,s){if(s){if(_a[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function wa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=null;function Hs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ks=null,Rn=null,sr=null;function Gs(r){if(r=qa(r)){if(typeof Ks!="function")throw Error(t(280));var s=r.stateNode;s&&(s=ku(s),Ks(r.stateNode,r.type,s))}}function or(r){Rn?sr?sr.push(r):sr=[r]:Rn=r}function Ea(){if(Rn){var r=Rn,s=sr;if(sr=Rn=null,Gs(r),s)for(r=0;r<s.length;r++)Gs(s[r])}}function Xi(r,s){return r(s)}function Ta(){}var Pr=!1;function Ia(r,s,a){if(Pr)return r(s,a);Pr=!0;try{return Xi(r,s,a)}finally{Pr=!1,(Rn!==null||sr!==null)&&(Ta(),Ea())}}function ct(r,s){var a=r.stateNode;if(a===null)return null;var h=ku(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Qs=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Qs=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Qs=!1}function Ji(r,s,a,h,f,g,w,R,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var Zi=!1,Ys=null,Un=!1,Sa=null,Fh={onError:function(r){Zi=!0,Ys=r}};function Xs(r,s,a,h,f,g,w,R,k){Zi=!1,Ys=null,Ji.apply(Fh,arguments)}function eu(r,s,a,h,f,g,w,R,k){if(Xs.apply(this,arguments),Zi){if(Zi){var z=Ys;Zi=!1,Ys=null}else throw Error(t(198));Un||(Un=!0,Sa=z)}}function Fn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function es(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jn(r){if(Fn(r)!==r)throw Error(t(188))}function tu(r){var s=r.alternate;if(!s){if(s=Fn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return jn(f),r;if(g===h)return jn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===a){w=!0,a=f,h=g;break}if(R===h){w=!0,h=f,a=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===a){w=!0,a=g,h=f;break}if(R===h){w=!0,h=g,a=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function Ra(r){return r=tu(r),r!==null?Js(r):null}function Js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Js(r);if(s!==null)return s;r=r.sibling}return null}var Zs=e.unstable_scheduleCallback,Aa=e.unstable_cancelCallback,nu=e.unstable_shouldYield,jh=e.unstable_requestPaint,Ke=e.unstable_now,ru=e.unstable_getCurrentPriorityLevel,ts=e.unstable_ImmediatePriority,ii=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Ca=e.unstable_LowPriority,iu=e.unstable_IdlePriority,ns=null,mn=null;function su(r){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(ns,r,void 0,(r.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:au,Pa=Math.log,ou=Math.LN2;function au(r){return r>>>=0,r===0?32:31-(Pa(r)/ou|0)|0}var eo=64,to=4194304;function si(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function rs(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var R=w&~f;R!==0?h=si(R):(g&=w,g!==0&&(h=si(g)))}else w=a&~f,w!==0?h=si(w):g!==0&&(h=si(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Xt(s),f=1<<a,h|=r[a],s&=~f;return h}function Bh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Xt(g),R=1<<w,k=f[w];k===-1?((R&a)===0||(R&h)!==0)&&(f[w]=Bh(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function gn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function is(){var r=eo;return eo<<=1,(eo&4194240)===0&&(eo=64),r}function oi(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ai(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Xt(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Xt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function li(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Xt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var be=0;function ui(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var lu,no,uu,cu,hu,ka=!1,ar=[],Ot=null,Bn=null,zn=null,ci=new Map,Cn=new Map,lr=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function du(r,s){switch(r){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(s.pointerId)}}function rn(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=qa(s),s!==null&&no(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function $h(r,s,a,h,f){switch(s){case"focusin":return Ot=rn(Ot,r,s,a,h,f),!0;case"dragenter":return Bn=rn(Bn,r,s,a,h,f),!0;case"mouseover":return zn=rn(zn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return ci.set(g,rn(ci.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Cn.set(g,rn(Cn.get(g)||null,r,s,a,h,f)),!0}return!1}function fu(r){var s=us(r.target);if(s!==null){var a=Fn(s);if(a!==null){if(s=a.tag,s===13){if(s=es(a),s!==null){r.blockedOn=s,hu(r.priority,function(){uu(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function xr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=ro(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Yi=h,a.target.dispatchEvent(h),Yi=null}else return s=qa(a),s!==null&&no(s),r.blockedOn=a,!1;s.shift()}return!0}function ss(r,s,a){xr(r)&&a.delete(s)}function pu(){ka=!1,Ot!==null&&xr(Ot)&&(Ot=null),Bn!==null&&xr(Bn)&&(Bn=null),zn!==null&&xr(zn)&&(zn=null),ci.forEach(ss),Cn.forEach(ss)}function $n(r,s){r.blockedOn===s&&(r.blockedOn=null,ka||(ka=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pu)))}function qn(r){function s(f){return $n(f,r)}if(0<ar.length){$n(ar[0],r);for(var a=1;a<ar.length;a++){var h=ar[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Ot!==null&&$n(Ot,r),Bn!==null&&$n(Bn,r),zn!==null&&$n(zn,r),ci.forEach(s),Cn.forEach(s),a=0;a<lr.length;a++)h=lr[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)fu(a),a.blockedOn===null&&lr.shift()}var Nr=ee.ReactCurrentBatchConfig,hi=!0;function Ze(r,s,a,h){var f=be,g=Nr.transition;Nr.transition=null;try{be=1,xa(r,s,a,h)}finally{be=f,Nr.transition=g}}function qh(r,s,a,h){var f=be,g=Nr.transition;Nr.transition=null;try{be=4,xa(r,s,a,h)}finally{be=f,Nr.transition=g}}function xa(r,s,a,h){if(hi){var f=ro(r,s,a,h);if(f===null)td(r,s,h,os,a),du(r,h);else if($h(f,r,s,a,h))h.stopPropagation();else if(du(r,h),s&4&&-1<zh.indexOf(r)){for(;f!==null;){var g=qa(f);if(g!==null&&lu(g),g=ro(r,s,a,h),g===null&&td(r,s,h,os,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else td(r,s,h,null,a)}}var os=null;function ro(r,s,a,h){if(os=null,r=Hs(h),r=us(r),r!==null)if(s=Fn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=es(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return os=r,null}function Na(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ru()){case ts:return 1;case ii:return 4;case An:case Ca:return 16;case iu:return 536870912;default:return 16}default:return 16}}var yn=null,io=null,sn=null;function Da(){if(sn)return sn;var r,s=io,a=s.length,h,f="value"in yn?yn.value:yn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return sn=f.slice(r,1<h?1-h:void 0)}function so(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ur(){return!0}function Oa(){return!1}function bt(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ur:Oa,this.isPropagationStopped=Oa,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=bt(Wn),cr=oe({},Wn,{view:0,detail:0}),Wh=bt(cr),ao,Dr,di,as=oe({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==di&&(di&&r.type==="mousemove"?(ao=r.screenX-di.screenX,Dr=r.screenY-di.screenY):Dr=ao=0,di=r),ao)},movementY:function(r){return"movementY"in r?r.movementY:Dr}}),lo=bt(as),ba=oe({},as,{dataTransfer:0}),mu=bt(ba),uo=oe({},cr,{relatedTarget:0}),co=bt(uo),gu=oe({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Or=bt(gu),yu=oe({},Wn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),_u=bt(yu),vu=oe({},Wn,{data:0}),La=bt(vu),ho={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=wu[r])?!!s[r]:!1}function hr(){return Eu}var u=oe({},cr,{key:function(r){if(r.key){var s=ho[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=so(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Jt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(r){return r.type==="keypress"?so(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?so(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=bt(u),_=oe({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=bt(_),M=oe({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),$=bt(M),ie=oe({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qe=bt(ie),Et=oe({},as,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=bt(Et),Ct=[9,13,27,32],pt=d&&"CompositionEvent"in window,Pn=null;d&&"documentMode"in document&&(Pn=document.documentMode);var _n=d&&"TextEvent"in window&&!Pn,ls=d&&(!pt||Pn&&8<Pn&&11>=Pn),fo=" ",Wm=!1;function Hm(r,s){switch(r){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var po=!1;function ST(r,s){switch(r){case"compositionend":return Km(s);case"keypress":return s.which!==32?null:(Wm=!0,fo);case"textInput":return r=s.data,r===fo&&Wm?null:r;default:return null}}function RT(r,s){if(po)return r==="compositionend"||!pt&&Hm(r,s)?(r=Da(),sn=io=yn=null,po=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ls&&s.locale!=="ko"?null:s.data;default:return null}}var AT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!AT[r.type]:s==="textarea"}function Qm(r,s,a,h){or(h),s=Au(s,"onChange"),0<s.length&&(a=new oo("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Va=null,Ma=null;function CT(r){fg(r,0)}function Tu(r){var s=vo(r);if(Yt(s))return r}function PT(r,s){if(r==="change")return s}var Ym=!1;if(d){var Hh;if(d){var Kh="oninput"in document;if(!Kh){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Kh=typeof Xm.oninput=="function"}Hh=Kh}else Hh=!1;Ym=Hh&&(!document.documentMode||9<document.documentMode)}function Jm(){Va&&(Va.detachEvent("onpropertychange",Zm),Ma=Va=null)}function Zm(r){if(r.propertyName==="value"&&Tu(Ma)){var s=[];Qm(s,Ma,r,Hs(r)),Ia(CT,s)}}function kT(r,s,a){r==="focusin"?(Jm(),Va=s,Ma=a,Va.attachEvent("onpropertychange",Zm)):r==="focusout"&&Jm()}function xT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Tu(Ma)}function NT(r,s){if(r==="click")return Tu(s)}function DT(r,s){if(r==="input"||r==="change")return Tu(s)}function OT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:OT;function Ua(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function eg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tg(r,s){var a=eg(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=eg(a)}}function ng(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?ng(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function rg(){for(var r=window,s=ni();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ni(r.document)}return s}function Gh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function bT(r){var s=rg(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&ng(a.ownerDocument.documentElement,a)){if(h!==null&&Gh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=tg(a,g);var w=tg(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var LT=d&&"documentMode"in document&&11>=document.documentMode,mo=null,Qh=null,Fa=null,Yh=!1;function ig(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yh||mo==null||mo!==ni(h)||(h=mo,"selectionStart"in h&&Gh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Fa&&Ua(Fa,h)||(Fa=h,h=Au(Qh,"onSelect"),0<h.length&&(s=new oo("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=mo)))}function Iu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var go={animationend:Iu("Animation","AnimationEnd"),animationiteration:Iu("Animation","AnimationIteration"),animationstart:Iu("Animation","AnimationStart"),transitionend:Iu("Transition","TransitionEnd")},Xh={},sg={};d&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function Su(r){if(Xh[r])return Xh[r];if(!go[r])return r;var s=go[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in sg)return Xh[r]=s[a];return r}var og=Su("animationend"),ag=Su("animationiteration"),lg=Su("animationstart"),ug=Su("transitionend"),cg=new Map,hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fi(r,s){cg.set(r,s),l(s,[r])}for(var Jh=0;Jh<hg.length;Jh++){var Zh=hg[Jh],VT=Zh.toLowerCase(),MT=Zh[0].toUpperCase()+Zh.slice(1);fi(VT,"on"+MT)}fi(og,"onAnimationEnd"),fi(ag,"onAnimationIteration"),fi(lg,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(ug,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ja));function dg(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,eu(h,s,void 0,r),r.currentTarget=null}function fg(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],k=R.instance,z=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;dg(f,R,z),g=k}else for(w=0;w<h.length;w++){if(R=h[w],k=R.instance,z=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;dg(f,R,z),g=k}}}if(Un)throw r=Sa,Un=!1,Sa=null,r}function Qe(r,s){var a=s[ad];a===void 0&&(a=s[ad]=new Set);var h=r+"__bubble";a.has(h)||(pg(s,r,2,!1),a.add(h))}function ed(r,s,a){var h=0;s&&(h|=4),pg(a,r,h,s)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function Ba(r){if(!r[Ru]){r[Ru]=!0,i.forEach(function(a){a!=="selectionchange"&&(UT.has(a)||ed(a,!1,r),ed(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Ru]||(s[Ru]=!0,ed("selectionchange",!1,s))}}function pg(r,s,a,h){switch(Na(s)){case 1:var f=Ze;break;case 4:f=qh;break;default:f=xa}a=f.bind(null,s,a,r),f=void 0,!Qs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function td(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;w=w.return}for(;R!==null;){if(w=us(R),w===null)return;if(k=w.tag,k===5||k===6){h=g=w;continue e}R=R.parentNode}}h=h.return}Ia(function(){var z=g,X=Hs(a),te=[];e:{var Q=cg.get(r);if(Q!==void 0){var ae=oo,he=r;switch(r){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":ae=m;break;case"focusin":he="focus",ae=co;break;case"focusout":he="blur",ae=co;break;case"beforeblur":case"afterblur":ae=co;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=$;break;case og:case ag:case lg:ae=Or;break;case ug:ae=qe;break;case"scroll":ae=Wh;break;case"wheel":ae=Me;break;case"copy":case"cut":case"paste":ae=_u;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=T}var fe=(s&4)!==0,ht=!fe&&r==="scroll",F=fe?Q!==null?Q+"Capture":null:Q;fe=[];for(var D=z,j;D!==null;){j=D;var ne=j.stateNode;if(j.tag===5&&ne!==null&&(j=ne,F!==null&&(ne=ct(D,F),ne!=null&&fe.push(za(D,ne,j)))),ht)break;D=D.return}0<fe.length&&(Q=new ae(Q,he,null,a,X),te.push({event:Q,listeners:fe}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",Q&&a!==Yi&&(he=a.relatedTarget||a.fromElement)&&(us(he)||he[br]))break e;if((ae||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(he=a.relatedTarget||a.toElement,ae=z,he=he?us(he):null,he!==null&&(ht=Fn(he),he!==ht||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=z),ae!==he)){if(fe=lo,ne="onMouseLeave",F="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(fe=T,ne="onPointerLeave",F="onPointerEnter",D="pointer"),ht=ae==null?Q:vo(ae),j=he==null?Q:vo(he),Q=new fe(ne,D+"leave",ae,a,X),Q.target=ht,Q.relatedTarget=j,ne=null,us(X)===z&&(fe=new fe(F,D+"enter",he,a,X),fe.target=j,fe.relatedTarget=ht,ne=fe),ht=ne,ae&&he)t:{for(fe=ae,F=he,D=0,j=fe;j;j=yo(j))D++;for(j=0,ne=F;ne;ne=yo(ne))j++;for(;0<D-j;)fe=yo(fe),D--;for(;0<j-D;)F=yo(F),j--;for(;D--;){if(fe===F||F!==null&&fe===F.alternate)break t;fe=yo(fe),F=yo(F)}fe=null}else fe=null;ae!==null&&mg(te,Q,ae,fe,!1),he!==null&&ht!==null&&mg(te,ht,he,fe,!0)}}e:{if(Q=z?vo(z):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var me=PT;else if(Gm(Q))if(Ym)me=DT;else{me=xT;var _e=kT}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(me=NT);if(me&&(me=me(r,z))){Qm(te,me,a,X);break e}_e&&_e(r,Q,z),r==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&$s(Q,"number",Q.value)}switch(_e=z?vo(z):window,r){case"focusin":(Gm(_e)||_e.contentEditable==="true")&&(mo=_e,Qh=z,Fa=null);break;case"focusout":Fa=Qh=mo=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,ig(te,a,X);break;case"selectionchange":if(LT)break;case"keydown":case"keyup":ig(te,a,X)}var ve;if(pt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else po?Hm(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ls&&a.locale!=="ko"&&(po||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&po&&(ve=Da()):(yn=X,io="value"in yn?yn.value:yn.textContent,po=!0)),_e=Au(z,Ee),0<_e.length&&(Ee=new La(Ee,r,null,a,X),te.push({event:Ee,listeners:_e}),ve?Ee.data=ve:(ve=Km(a),ve!==null&&(Ee.data=ve)))),(ve=_n?ST(r,a):RT(r,a))&&(z=Au(z,"onBeforeInput"),0<z.length&&(X=new La("onBeforeInput","beforeinput",null,a,X),te.push({event:X,listeners:z}),X.data=ve))}fg(te,s)})}function za(r,s,a){return{instance:r,listener:s,currentTarget:a}}function Au(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ct(r,a),g!=null&&h.unshift(za(r,g,f)),g=ct(r,s),g!=null&&h.push(za(r,g,f))),r=r.return}return h}function yo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mg(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var R=a,k=R.alternate,z=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&z!==null&&(R=z,f?(k=ct(a,g),k!=null&&w.unshift(za(a,k,R))):f||(k=ct(a,g),k!=null&&w.push(za(a,k,R)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var FT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function gg(r){return(typeof r=="string"?r:""+r).replace(FT,`
`).replace(jT,"")}function Cu(r,s,a){if(s=gg(s),gg(r)!==s&&a)throw Error(t(425))}function Pu(){}var nd=null,rd=null;function id(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,BT=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,zT=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(r){return yg.resolve(null).then(r).catch($T)}:sd;function $T(r){setTimeout(function(){throw r})}function od(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),qn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);qn(s)}function pi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function _g(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var _o=Math.random().toString(36).slice(2),dr="__reactFiber$"+_o,$a="__reactProps$"+_o,br="__reactContainer$"+_o,ad="__reactEvents$"+_o,qT="__reactListeners$"+_o,WT="__reactHandles$"+_o;function us(r){var s=r[dr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[br]||a[dr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=_g(r);r!==null;){if(a=r[dr])return a;r=_g(r)}return s}r=a,a=r.parentNode}return null}function qa(r){return r=r[dr]||r[br],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function vo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function ku(r){return r[$a]||null}var ld=[],wo=-1;function mi(r){return{current:r}}function Ye(r){0>wo||(r.current=ld[wo],ld[wo]=null,wo--)}function Ge(r,s){wo++,ld[wo]=r.current,r.current=s}var gi={},Bt=mi(gi),on=mi(!1),cs=gi;function Eo(r,s){var a=r.type.contextTypes;if(!a)return gi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function an(r){return r=r.childContextTypes,r!=null}function xu(){Ye(on),Ye(Bt)}function vg(r,s,a){if(Bt.current!==gi)throw Error(t(168));Ge(Bt,s),Ge(on,a)}function wg(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,De(r)||"Unknown",f));return oe({},a,h)}function Nu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||gi,cs=Bt.current,Ge(Bt,r),Ge(on,on.current),!0}function Eg(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=wg(r,s,cs),h.__reactInternalMemoizedMergedChildContext=r,Ye(on),Ye(Bt),Ge(Bt,r)):Ye(on),Ge(on,a)}var Lr=null,Du=!1,ud=!1;function Tg(r){Lr===null?Lr=[r]:Lr.push(r)}function HT(r){Du=!0,Tg(r)}function yi(){if(!ud&&Lr!==null){ud=!0;var r=0,s=be;try{var a=Lr;for(be=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Lr=null,Du=!1}catch(f){throw Lr!==null&&(Lr=Lr.slice(r+1)),Zs(ts,yi),f}finally{be=s,ud=!1}}return null}var To=[],Io=0,Ou=null,bu=0,kn=[],xn=0,hs=null,Vr=1,Mr="";function ds(r,s){To[Io++]=bu,To[Io++]=Ou,Ou=r,bu=s}function Ig(r,s,a){kn[xn++]=Vr,kn[xn++]=Mr,kn[xn++]=hs,hs=r;var h=Vr;r=Mr;var f=32-Xt(h)-1;h&=~(1<<f),a+=1;var g=32-Xt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Vr=1<<32-Xt(s)+f|a<<f|h,Mr=g+r}else Vr=1<<g|a<<f|h,Mr=r}function cd(r){r.return!==null&&(ds(r,1),Ig(r,1,0))}function hd(r){for(;r===Ou;)Ou=To[--Io],To[Io]=null,bu=To[--Io],To[Io]=null;for(;r===hs;)hs=kn[--xn],kn[xn]=null,Mr=kn[--xn],kn[xn]=null,Vr=kn[--xn],kn[xn]=null}var vn=null,wn=null,et=!1,Kn=null;function Sg(r,s){var a=bn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Rg(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,vn=r,wn=pi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,vn=r,wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=hs!==null?{id:Vr,overflow:Mr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=bn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,vn=r,wn=null,!0):!1;default:return!1}}function dd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function fd(r){if(et){var s=wn;if(s){var a=s;if(!Rg(r,s)){if(dd(r))throw Error(t(418));s=pi(a.nextSibling);var h=vn;s&&Rg(r,s)?Sg(h,a):(r.flags=r.flags&-4097|2,et=!1,vn=r)}}else{if(dd(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,vn=r}}}function Ag(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;vn=r}function Lu(r){if(r!==vn)return!1;if(!et)return Ag(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!id(r.type,r.memoizedProps)),s&&(s=wn)){if(dd(r))throw Cg(),Error(t(418));for(;s;)Sg(r,s),s=pi(s.nextSibling)}if(Ag(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){wn=pi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}wn=null}}else wn=vn?pi(r.stateNode.nextSibling):null;return!0}function Cg(){for(var r=wn;r;)r=pi(r.nextSibling)}function So(){wn=vn=null,et=!1}function pd(r){Kn===null?Kn=[r]:Kn.push(r)}var KT=ee.ReactCurrentBatchConfig;function Wa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Pg(r){var s=r._init;return s(r._payload)}function kg(r){function s(F,D){if(r){var j=F.deletions;j===null?(F.deletions=[D],F.flags|=16):j.push(D)}}function a(F,D){if(!r)return null;for(;D!==null;)s(F,D),D=D.sibling;return null}function h(F,D){for(F=new Map;D!==null;)D.key!==null?F.set(D.key,D):F.set(D.index,D),D=D.sibling;return F}function f(F,D){return F=Ri(F,D),F.index=0,F.sibling=null,F}function g(F,D,j){return F.index=j,r?(j=F.alternate,j!==null?(j=j.index,j<D?(F.flags|=2,D):j):(F.flags|=2,D)):(F.flags|=1048576,D)}function w(F){return r&&F.alternate===null&&(F.flags|=2),F}function R(F,D,j,ne){return D===null||D.tag!==6?(D=of(j,F.mode,ne),D.return=F,D):(D=f(D,j),D.return=F,D)}function k(F,D,j,ne){var me=j.type;return me===A?X(F,D,j.props.children,ne,j.key):D!==null&&(D.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===At&&Pg(me)===D.type)?(ne=f(D,j.props),ne.ref=Wa(F,D,j),ne.return=F,ne):(ne=oc(j.type,j.key,j.props,null,F.mode,ne),ne.ref=Wa(F,D,j),ne.return=F,ne)}function z(F,D,j,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==j.containerInfo||D.stateNode.implementation!==j.implementation?(D=af(j,F.mode,ne),D.return=F,D):(D=f(D,j.children||[]),D.return=F,D)}function X(F,D,j,ne,me){return D===null||D.tag!==7?(D=ws(j,F.mode,ne,me),D.return=F,D):(D=f(D,j),D.return=F,D)}function te(F,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return D=of(""+D,F.mode,j),D.return=F,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case le:return j=oc(D.type,D.key,D.props,null,F.mode,j),j.ref=Wa(F,null,D),j.return=F,j;case re:return D=af(D,F.mode,j),D.return=F,D;case At:var ne=D._init;return te(F,ne(D._payload),j)}if(Rr(D)||de(D))return D=ws(D,F.mode,j,null),D.return=F,D;Vu(F,D)}return null}function Q(F,D,j,ne){var me=D!==null?D.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return me!==null?null:R(F,D,""+j,ne);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case le:return j.key===me?k(F,D,j,ne):null;case re:return j.key===me?z(F,D,j,ne):null;case At:return me=j._init,Q(F,D,me(j._payload),ne)}if(Rr(j)||de(j))return me!==null?null:X(F,D,j,ne,null);Vu(F,j)}return null}function ae(F,D,j,ne,me){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return F=F.get(j)||null,R(D,F,""+ne,me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case le:return F=F.get(ne.key===null?j:ne.key)||null,k(D,F,ne,me);case re:return F=F.get(ne.key===null?j:ne.key)||null,z(D,F,ne,me);case At:var _e=ne._init;return ae(F,D,j,_e(ne._payload),me)}if(Rr(ne)||de(ne))return F=F.get(j)||null,X(D,F,ne,me,null);Vu(D,ne)}return null}function he(F,D,j,ne){for(var me=null,_e=null,ve=D,Ee=D=0,xt=null;ve!==null&&Ee<j.length;Ee++){ve.index>Ee?(xt=ve,ve=null):xt=ve.sibling;var Be=Q(F,ve,j[Ee],ne);if(Be===null){ve===null&&(ve=xt);break}r&&ve&&Be.alternate===null&&s(F,ve),D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be,ve=xt}if(Ee===j.length)return a(F,ve),et&&ds(F,Ee),me;if(ve===null){for(;Ee<j.length;Ee++)ve=te(F,j[Ee],ne),ve!==null&&(D=g(ve,D,Ee),_e===null?me=ve:_e.sibling=ve,_e=ve);return et&&ds(F,Ee),me}for(ve=h(F,ve);Ee<j.length;Ee++)xt=ae(ve,F,Ee,j[Ee],ne),xt!==null&&(r&&xt.alternate!==null&&ve.delete(xt.key===null?Ee:xt.key),D=g(xt,D,Ee),_e===null?me=xt:_e.sibling=xt,_e=xt);return r&&ve.forEach(function(Ai){return s(F,Ai)}),et&&ds(F,Ee),me}function fe(F,D,j,ne){var me=de(j);if(typeof me!="function")throw Error(t(150));if(j=me.call(j),j==null)throw Error(t(151));for(var _e=me=null,ve=D,Ee=D=0,xt=null,Be=j.next();ve!==null&&!Be.done;Ee++,Be=j.next()){ve.index>Ee?(xt=ve,ve=null):xt=ve.sibling;var Ai=Q(F,ve,Be.value,ne);if(Ai===null){ve===null&&(ve=xt);break}r&&ve&&Ai.alternate===null&&s(F,ve),D=g(Ai,D,Ee),_e===null?me=Ai:_e.sibling=Ai,_e=Ai,ve=xt}if(Be.done)return a(F,ve),et&&ds(F,Ee),me;if(ve===null){for(;!Be.done;Ee++,Be=j.next())Be=te(F,Be.value,ne),Be!==null&&(D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be);return et&&ds(F,Ee),me}for(ve=h(F,ve);!Be.done;Ee++,Be=j.next())Be=ae(ve,F,Ee,Be.value,ne),Be!==null&&(r&&Be.alternate!==null&&ve.delete(Be.key===null?Ee:Be.key),D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be);return r&&ve.forEach(function(AI){return s(F,AI)}),et&&ds(F,Ee),me}function ht(F,D,j,ne){if(typeof j=="object"&&j!==null&&j.type===A&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case le:e:{for(var me=j.key,_e=D;_e!==null;){if(_e.key===me){if(me=j.type,me===A){if(_e.tag===7){a(F,_e.sibling),D=f(_e,j.props.children),D.return=F,F=D;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===At&&Pg(me)===_e.type){a(F,_e.sibling),D=f(_e,j.props),D.ref=Wa(F,_e,j),D.return=F,F=D;break e}a(F,_e);break}else s(F,_e);_e=_e.sibling}j.type===A?(D=ws(j.props.children,F.mode,ne,j.key),D.return=F,F=D):(ne=oc(j.type,j.key,j.props,null,F.mode,ne),ne.ref=Wa(F,D,j),ne.return=F,F=ne)}return w(F);case re:e:{for(_e=j.key;D!==null;){if(D.key===_e)if(D.tag===4&&D.stateNode.containerInfo===j.containerInfo&&D.stateNode.implementation===j.implementation){a(F,D.sibling),D=f(D,j.children||[]),D.return=F,F=D;break e}else{a(F,D);break}else s(F,D);D=D.sibling}D=af(j,F.mode,ne),D.return=F,F=D}return w(F);case At:return _e=j._init,ht(F,D,_e(j._payload),ne)}if(Rr(j))return he(F,D,j,ne);if(de(j))return fe(F,D,j,ne);Vu(F,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,D!==null&&D.tag===6?(a(F,D.sibling),D=f(D,j),D.return=F,F=D):(a(F,D),D=of(j,F.mode,ne),D.return=F,F=D),w(F)):a(F,D)}return ht}var Ro=kg(!0),xg=kg(!1),Mu=mi(null),Uu=null,Ao=null,md=null;function gd(){md=Ao=Uu=null}function yd(r){var s=Mu.current;Ye(Mu),r._currentValue=s}function _d(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Co(r,s){Uu=r,md=Ao=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(ln=!0),r.firstContext=null)}function Nn(r){var s=r._currentValue;if(md!==r)if(r={context:r,memoizedValue:s,next:null},Ao===null){if(Uu===null)throw Error(t(308));Ao=r,Uu.dependencies={lanes:0,firstContext:r}}else Ao=Ao.next=r;return s}var fs=null;function vd(r){fs===null?fs=[r]:fs.push(r)}function Ng(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,vd(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ur(r,h)}function Ur(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var _i=!1;function wd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Fr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function vi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Fe&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Ur(r,a)}return f=h.interleaved,f===null?(s.next=s,vd(h)):(s.next=f.next,f.next=s),h.interleaved=s,Ur(r,a)}function Fu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,li(r,a)}}function Og(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function ju(r,s,a,h){var f=r.updateQueue;_i=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,z=k.next;k.next=null,w===null?g=z:w.next=z,w=k;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==w&&(R===null?X.firstBaseUpdate=z:R.next=z,X.lastBaseUpdate=k))}if(g!==null){var te=f.baseState;w=0,X=z=k=null,R=g;do{var Q=R.lane,ae=R.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:ae,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var he=r,fe=R;switch(Q=s,ae=a,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){te=he.call(ae,te,Q);break e}te=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,Q=typeof he=="function"?he.call(ae,te,Q):he,Q==null)break e;te=oe({},te,Q);break e;case 2:_i=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[R]:Q.push(R))}else ae={eventTime:ae,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(z=X=ae,k=te):X=X.next=ae,w|=Q;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(X===null&&(k=te),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);gs|=w,r.lanes=w,r.memoizedState=te}}function bg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ha={},fr=mi(Ha),Ka=mi(Ha),Ga=mi(Ha);function ps(r){if(r===Ha)throw Error(t(174));return r}function Ed(r,s){switch(Ge(Ga,s),Ge(Ka,r),Ge(fr,Ha),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:wt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=wt(s,r)}Ye(fr),Ge(fr,s)}function Po(){Ye(fr),Ye(Ka),Ye(Ga)}function Lg(r){ps(Ga.current);var s=ps(fr.current),a=wt(s,r.type);s!==a&&(Ge(Ka,r),Ge(fr,a))}function Td(r){Ka.current===r&&(Ye(fr),Ye(Ka))}var nt=mi(0);function Bu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Id=[];function Sd(){for(var r=0;r<Id.length;r++)Id[r]._workInProgressVersionPrimary=null;Id.length=0}var zu=ee.ReactCurrentDispatcher,Rd=ee.ReactCurrentBatchConfig,ms=0,rt=null,Tt=null,Pt=null,$u=!1,Qa=!1,Ya=0,GT=0;function zt(){throw Error(t(321))}function Ad(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Hn(r[a],s[a]))return!1;return!0}function Cd(r,s,a,h,f,g){if(ms=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,zu.current=r===null||r.memoizedState===null?JT:ZT,r=a(h,f),Qa){g=0;do{if(Qa=!1,Ya=0,25<=g)throw Error(t(301));g+=1,Pt=Tt=null,s.updateQueue=null,zu.current=eI,r=a(h,f)}while(Qa)}if(zu.current=Hu,s=Tt!==null&&Tt.next!==null,ms=0,Pt=Tt=rt=null,$u=!1,s)throw Error(t(300));return r}function Pd(){var r=Ya!==0;return Ya=0,r}function pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?rt.memoizedState=Pt=r:Pt=Pt.next=r,Pt}function Dn(){if(Tt===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Tt.next;var s=Pt===null?rt.memoizedState:Pt.next;if(s!==null)Pt=s,Tt=r;else{if(r===null)throw Error(t(310));Tt=r,r={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?rt.memoizedState=Pt=r:Pt=Pt.next=r}return Pt}function Xa(r,s){return typeof s=="function"?s(r):s}function kd(r){var s=Dn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=Tt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,k=null,z=g;do{var X=z.lane;if((ms&X)===X)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var te={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(R=k=te,w=h):k=k.next=te,rt.lanes|=X,gs|=X}z=z.next}while(z!==null&&z!==g);k===null?w=h:k.next=R,Hn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,gs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function xd(r){var s=Dn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Hn(g,s.memoizedState)||(ln=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Vg(){}function Mg(r,s){var a=rt,h=Dn(),f=s(),g=!Hn(h.memoizedState,f);if(g&&(h.memoizedState=f,ln=!0),h=h.queue,Nd(jg.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Pt!==null&&Pt.memoizedState.tag&1){if(a.flags|=2048,Ja(9,Fg.bind(null,a,h,f,s),void 0,null),kt===null)throw Error(t(349));(ms&30)!==0||Ug(a,s,f)}return f}function Ug(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Fg(r,s,a,h){s.value=a,s.getSnapshot=h,Bg(s)&&zg(r)}function jg(r,s,a){return a(function(){Bg(s)&&zg(r)})}function Bg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Hn(r,a)}catch{return!0}}function zg(r){var s=Ur(r,1);s!==null&&Xn(s,r,1,-1)}function $g(r){var s=pr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:r},s.queue=r,r=r.dispatch=XT.bind(null,rt,r),[s.memoizedState,r]}function Ja(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function qg(){return Dn().memoizedState}function qu(r,s,a,h){var f=pr();rt.flags|=r,f.memoizedState=Ja(1|s,a,void 0,h===void 0?null:h)}function Wu(r,s,a,h){var f=Dn();h=h===void 0?null:h;var g=void 0;if(Tt!==null){var w=Tt.memoizedState;if(g=w.destroy,h!==null&&Ad(h,w.deps)){f.memoizedState=Ja(s,a,g,h);return}}rt.flags|=r,f.memoizedState=Ja(1|s,a,g,h)}function Wg(r,s){return qu(8390656,8,r,s)}function Nd(r,s){return Wu(2048,8,r,s)}function Hg(r,s){return Wu(4,2,r,s)}function Kg(r,s){return Wu(4,4,r,s)}function Gg(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Qg(r,s,a){return a=a!=null?a.concat([r]):null,Wu(4,4,Gg.bind(null,s,r),a)}function Dd(){}function Yg(r,s){var a=Dn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Ad(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Xg(r,s){var a=Dn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Ad(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Jg(r,s,a){return(ms&21)===0?(r.baseState&&(r.baseState=!1,ln=!0),r.memoizedState=a):(Hn(a,s)||(a=is(),rt.lanes|=a,gs|=a,r.baseState=!0),s)}function QT(r,s){var a=be;be=a!==0&&4>a?a:4,r(!0);var h=Rd.transition;Rd.transition={};try{r(!1),s()}finally{be=a,Rd.transition=h}}function Zg(){return Dn().memoizedState}function YT(r,s,a){var h=Ii(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},ey(r))ty(s,a);else if(a=Ng(r,s,a,h),a!==null){var f=en();Xn(a,r,h,f),ny(a,s,h)}}function XT(r,s,a){var h=Ii(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(ey(r))ty(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,a);if(f.hasEagerState=!0,f.eagerState=R,Hn(R,w)){var k=s.interleaved;k===null?(f.next=f,vd(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=Ng(r,s,f,h),a!==null&&(f=en(),Xn(a,r,h,f),ny(a,s,h))}}function ey(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function ty(r,s){Qa=$u=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function ny(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,li(r,a)}}var Hu={readContext:Nn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},JT={readContext:Nn,useCallback:function(r,s){return pr().memoizedState=[r,s===void 0?null:s],r},useContext:Nn,useEffect:Wg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,qu(4194308,4,Gg.bind(null,s,r),a)},useLayoutEffect:function(r,s){return qu(4194308,4,r,s)},useInsertionEffect:function(r,s){return qu(4,2,r,s)},useMemo:function(r,s){var a=pr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=pr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=YT.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=pr();return r={current:r},s.memoizedState=r},useState:$g,useDebugValue:Dd,useDeferredValue:function(r){return pr().memoizedState=r},useTransition:function(){var r=$g(!1),s=r[0];return r=QT.bind(null,r[1]),pr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=rt,f=pr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));(ms&30)!==0||Ug(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Wg(jg.bind(null,h,g,r),[r]),h.flags|=2048,Ja(9,Fg.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=pr(),s=kt.identifierPrefix;if(et){var a=Mr,h=Vr;a=(h&~(1<<32-Xt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ya++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=GT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},ZT={readContext:Nn,useCallback:Yg,useContext:Nn,useEffect:Nd,useImperativeHandle:Qg,useInsertionEffect:Hg,useLayoutEffect:Kg,useMemo:Xg,useReducer:kd,useRef:qg,useState:function(){return kd(Xa)},useDebugValue:Dd,useDeferredValue:function(r){var s=Dn();return Jg(s,Tt.memoizedState,r)},useTransition:function(){var r=kd(Xa)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:Vg,useSyncExternalStore:Mg,useId:Zg,unstable_isNewReconciler:!1},eI={readContext:Nn,useCallback:Yg,useContext:Nn,useEffect:Nd,useImperativeHandle:Qg,useInsertionEffect:Hg,useLayoutEffect:Kg,useMemo:Xg,useReducer:xd,useRef:qg,useState:function(){return xd(Xa)},useDebugValue:Dd,useDeferredValue:function(r){var s=Dn();return Tt===null?s.memoizedState=r:Jg(s,Tt.memoizedState,r)},useTransition:function(){var r=xd(Xa)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:Vg,useSyncExternalStore:Mg,useId:Zg,unstable_isNewReconciler:!1};function Gn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Od(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ku={isMounted:function(r){return(r=r._reactInternals)?Fn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ii(r),g=Fr(h,f);g.payload=s,a!=null&&(g.callback=a),s=vi(r,g,f),s!==null&&(Xn(s,r,f,h),Fu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ii(r),g=Fr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=vi(r,g,f),s!==null&&(Xn(s,r,f,h),Fu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=en(),h=Ii(r),f=Fr(a,h);f.tag=2,s!=null&&(f.callback=s),s=vi(r,f,h),s!==null&&(Xn(s,r,h,a),Fu(s,r,h))}};function ry(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!Ua(a,h)||!Ua(f,g):!0}function iy(r,s,a){var h=!1,f=gi,g=s.contextType;return typeof g=="object"&&g!==null?g=Nn(g):(f=an(s)?cs:Bt.current,h=s.contextTypes,g=(h=h!=null)?Eo(r,f):gi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ku,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function sy(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Ku.enqueueReplaceState(s,s.state,null)}function bd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},wd(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Nn(g):(g=an(s)?cs:Bt.current,f.context=Eo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Od(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ju(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function ko(r,s){try{var a="",h=s;do a+=Ce(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Ld(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Vd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var tI=typeof WeakMap=="function"?WeakMap:Map;function oy(r,s,a){a=Fr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){ec||(ec=!0,Xd=h),Vd(r,s)},a}function ay(r,s,a){a=Fr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){Vd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Vd(r,s),typeof h!="function"&&(Ei===null?Ei=new Set([this]):Ei.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function ly(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new tI;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=mI.bind(null,r,s,a),s.then(r,r))}function uy(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function cy(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Fr(-1,1),s.tag=2,vi(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var nI=ee.ReactCurrentOwner,ln=!1;function Zt(r,s,a,h){s.child=r===null?xg(s,null,a,h):Ro(s,r.child,a,h)}function hy(r,s,a,h,f){a=a.render;var g=s.ref;return Co(s,f),h=Cd(r,s,a,h,g,f),a=Pd(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(et&&a&&cd(s),s.flags|=1,Zt(r,s,h,f),s.child)}function dy(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!sf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,fy(r,s,g,h,f)):(r=oc(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(w,h)&&r.ref===s.ref)return jr(r,s,f)}return s.flags|=1,r=Ri(g,h),r.ref=s.ref,r.return=s,s.child=r}function fy(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(Ua(g,h)&&r.ref===s.ref)if(ln=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(ln=!0);else return s.lanes=r.lanes,jr(r,s,f)}return Md(r,s,a,h,f)}function py(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(No,En),En|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(No,En),En|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Ge(No,En),En|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Ge(No,En),En|=h;return Zt(r,s,f,a),s.child}function my(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Md(r,s,a,h,f){var g=an(a)?cs:Bt.current;return g=Eo(s,g),Co(s,f),a=Cd(r,s,a,h,g,f),h=Pd(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,jr(r,s,f)):(et&&h&&cd(s),s.flags|=1,Zt(r,s,a,f),s.child)}function gy(r,s,a,h,f){if(an(a)){var g=!0;Nu(s)}else g=!1;if(Co(s,f),s.stateNode===null)Qu(r,s),iy(s,a,h),bd(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var k=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=Nn(z):(z=an(a)?cs:Bt.current,z=Eo(s,z));var X=a.getDerivedStateFromProps,te=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||k!==z)&&sy(s,w,h,z),_i=!1;var Q=s.memoizedState;w.state=Q,ju(s,h,w,f),k=s.memoizedState,R!==h||Q!==k||on.current||_i?(typeof X=="function"&&(Od(s,a,X,h),k=s.memoizedState),(R=_i||ry(s,a,R,h,Q,k,z))?(te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),w.props=h,w.state=k,w.context=z,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Dg(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Gn(s.type,R),w.props=z,te=s.pendingProps,Q=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Nn(k):(k=an(a)?cs:Bt.current,k=Eo(s,k));var ae=a.getDerivedStateFromProps;(X=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==te||Q!==k)&&sy(s,w,h,k),_i=!1,Q=s.memoizedState,w.state=Q,ju(s,h,w,f);var he=s.memoizedState;R!==te||Q!==he||on.current||_i?(typeof ae=="function"&&(Od(s,a,ae,h),he=s.memoizedState),(z=_i||ry(s,a,z,h,Q,he,k)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=he),w.props=h,w.state=he,w.context=k,h=z):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),h=!1)}return Ud(r,s,a,h,g,f)}function Ud(r,s,a,h,f,g){my(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Eg(s,a,!1),jr(r,s,g);h=s.stateNode,nI.current=s;var R=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Ro(s,r.child,null,g),s.child=Ro(s,null,R,g)):Zt(r,s,R,g),s.memoizedState=h.state,f&&Eg(s,a,!0),s.child}function yy(r){var s=r.stateNode;s.pendingContext?vg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&vg(r,s.context,!1),Ed(r,s.containerInfo)}function _y(r,s,a,h,f){return So(),pd(f),s.flags|=256,Zt(r,s,a,h),s.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function jd(r){return{baseLanes:r,cachePool:null,transitions:null}}function vy(r,s,a){var h=s.pendingProps,f=nt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ge(nt,f&1),r===null)return fd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=ac(w,h,0,null),r=ws(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=jd(a),s.memoizedState=Fd,r):Bd(s,w));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return rI(r,s,w,h,R,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Ri(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=Ri(R,g):(g=ws(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?jd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=Fd,h}return g=r.child,r=g.sibling,h=Ri(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function Bd(r,s){return s=ac({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Gu(r,s,a,h){return h!==null&&pd(h),Ro(s,r.child,null,a),r=Bd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function rI(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=Ld(Error(t(422))),Gu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=ac({mode:"visible",children:h.children},f,0,null),g=ws(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Ro(s,r.child,null,w),s.child.memoizedState=jd(w),s.memoizedState=Fd,g);if((s.mode&1)===0)return Gu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Ld(g,h,void 0),Gu(r,s,w,h)}if(R=(w&r.childLanes)!==0,ln||R){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ur(r,f),Xn(h,r,f,-1))}return rf(),h=Ld(Error(t(421))),Gu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=gI.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,wn=pi(f.nextSibling),vn=s,et=!0,Kn=null,r!==null&&(kn[xn++]=Vr,kn[xn++]=Mr,kn[xn++]=hs,Vr=r.id,Mr=r.overflow,hs=s),s=Bd(s,h.children),s.flags|=4096,s)}function wy(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),_d(r.return,s,a)}function zd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Ey(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Zt(r,s,h.children,a),h=nt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wy(r,a,s);else if(r.tag===19)wy(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ge(nt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Bu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),zd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Bu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}zd(s,!0,a,null,g);break;case"together":zd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Qu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function jr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),gs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Ri(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Ri(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function iI(r,s,a){switch(s.tag){case 3:yy(s),So();break;case 5:Lg(s);break;case 1:an(s.type)&&Nu(s);break;case 4:Ed(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ge(Mu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ge(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?vy(r,s,a):(Ge(nt,nt.current&1),r=jr(r,s,a),r!==null?r.sibling:null);Ge(nt,nt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return Ey(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,py(r,s,a)}return jr(r,s,a)}var Ty,$d,Iy,Sy;Ty=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$d=function(){},Iy=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ps(fr.current);var g=null;switch(a){case"input":f=Ki(r,f),h=Ki(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=fa(r,f),h=fa(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Pu)}va(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var R=f[z];for(w in R)R.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var k=h[z];if(R=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&k!==R&&(k!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&R[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Qe("scroll",r),g||R===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Sy=function(r,s,a,h){a!==h&&(s.flags|=4)};function Za(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function $t(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function sI(r,s,a){var h=s.pendingProps;switch(hd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return an(s.type)&&xu(),$t(s),null;case 3:return h=s.stateNode,Po(),Ye(on),Ye(Bt),Sd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Lu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Kn!==null&&(ef(Kn),Kn=null))),$d(r,s),$t(s),null;case 5:Td(s);var f=ps(Ga.current);if(a=s.type,r!==null&&s.stateNode!=null)Iy(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(r=ps(fr.current),Lu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[dr]=s,h[$a]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(f=0;f<ja.length;f++)Qe(ja[f],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":zs(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":qs(h,g),Qe("invalid",h)}va(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Cu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Cu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&Qe("scroll",h)}switch(a){case"input":nn(h),Zl(h,g,!0);break;case"textarea":nn(h),pa(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Pu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[dr]=s,r[$a]=h,Ty(r,s,!1,!1),s.stateNode=r;e:{switch(w=wa(a,h),a){case"dialog":Qe("cancel",r),Qe("close",r),f=h;break;case"iframe":case"object":case"embed":Qe("load",r),f=h;break;case"video":case"audio":for(f=0;f<ja.length;f++)Qe(ja[f],r);f=h;break;case"source":Qe("error",r),f=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=h;break;case"details":Qe("toggle",r),f=h;break;case"input":zs(r,h),f=Ki(r,h),Qe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":qs(r,h),f=fa(r,h),Qe("invalid",r);break;default:f=h}va(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?ya(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ma(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ri(r,k):typeof k=="number"&&ri(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Qe("scroll",r):k!=null&&K(r,g,k,w))}switch(a){case"input":nn(r),Zl(r,h,!1);break;case"textarea":nn(r),pa(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ne(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Ar(r,!!h.multiple,g,!1):h.defaultValue!=null&&Ar(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Pu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(r&&s.stateNode!=null)Sy(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ps(Ga.current),ps(fr.current),Lu(s)){if(h=s.stateNode,a=s.memoizedProps,h[dr]=s,(g=h.nodeValue!==a)&&(r=vn,r!==null))switch(r.tag){case 3:Cu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Cu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[dr]=s,s.stateNode=h}return $t(s),null;case 13:if(Ye(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Cg(),So(),s.flags|=98560,g=!1;else if(g=Lu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[dr]=s}else So(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),g=!1}else Kn!==null&&(ef(Kn),Kn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?It===0&&(It=3):rf())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return Po(),$d(r,s),r===null&&Ba(s.stateNode.containerInfo),$t(s),null;case 10:return yd(s.type._context),$t(s),null;case 17:return an(s.type)&&xu(),$t(s),null;case 19:if(Ye(nt),g=s.memoizedState,g===null)return $t(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)Za(g,!1);else{if(It!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=Bu(r),w!==null){for(s.flags|=128,Za(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ke()>Do&&(s.flags|=128,h=!0,Za(g,!1),s.lanes=4194304)}else{if(!h)if(r=Bu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Za(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!et)return $t(s),null}else 2*Ke()-g.renderingStartTime>Do&&a!==1073741824&&(s.flags|=128,h=!0,Za(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ke(),s.sibling=null,a=nt.current,Ge(nt,h?a&1|2:a&1),s):($t(s),null);case 22:case 23:return nf(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(En&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function oI(r,s){switch(hd(s),s.tag){case 1:return an(s.type)&&xu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return Po(),Ye(on),Ye(Bt),Sd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Td(s),null;case 13:if(Ye(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));So()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(nt),null;case 4:return Po(),null;case 10:return yd(s.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var Yu=!1,qt=!1,aI=typeof WeakSet=="function"?WeakSet:Set,ue=null;function xo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){at(r,s,h)}else a.current=null}function qd(r,s,a){try{a()}catch(h){at(r,s,h)}}var Ry=!1;function lI(r,s){if(nd=hi,r=rg(),Gh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,R=-1,k=-1,z=0,X=0,te=r,Q=null;t:for(;;){for(var ae;te!==a||f!==0&&te.nodeType!==3||(R=w+f),te!==g||h!==0&&te.nodeType!==3||(k=w+h),te.nodeType===3&&(w+=te.nodeValue.length),(ae=te.firstChild)!==null;)Q=te,te=ae;for(;;){if(te===r)break t;if(Q===a&&++z===f&&(R=w),Q===g&&++X===h&&(k=w),(ae=te.nextSibling)!==null)break;te=Q,Q=te.parentNode}te=ae}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(rd={focusedElem:r,selectionRange:a},hi=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,ht=he.memoizedState,F=s.stateNode,D=F.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Gn(s.type,fe),ht);F.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var j=s.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){at(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return he=Ry,Ry=!1,he}function el(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&qd(s,a,g)}f=f.next}while(f!==h)}}function Xu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Ay(r){var s=r.alternate;s!==null&&(r.alternate=null,Ay(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[dr],delete s[$a],delete s[ad],delete s[qT],delete s[WT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Cy(r){return r.tag===5||r.tag===3||r.tag===4}function Py(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Cy(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Hd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Pu));else if(h!==4&&(r=r.child,r!==null))for(Hd(r,s,a),r=r.sibling;r!==null;)Hd(r,s,a),r=r.sibling}function Kd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Kd(r,s,a),r=r.sibling;r!==null;)Kd(r,s,a),r=r.sibling}var Lt=null,Qn=!1;function wi(r,s,a){for(a=a.child;a!==null;)ky(r,s,a),a=a.sibling}function ky(r,s,a){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(ns,a)}catch{}switch(a.tag){case 5:qt||xo(a,s);case 6:var h=Lt,f=Qn;Lt=null,wi(r,s,a),Lt=h,Qn=f,Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?od(r.parentNode,a):r.nodeType===1&&od(r,a),qn(r)):od(Lt,a.stateNode));break;case 4:h=Lt,f=Qn,Lt=a.stateNode.containerInfo,Qn=!0,wi(r,s,a),Lt=h,Qn=f;break;case 0:case 11:case 14:case 15:if(!qt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&qd(a,s,w),f=f.next}while(f!==h)}wi(r,s,a);break;case 1:if(!qt&&(xo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){at(a,s,R)}wi(r,s,a);break;case 21:wi(r,s,a);break;case 22:a.mode&1?(qt=(h=qt)||a.memoizedState!==null,wi(r,s,a),qt=h):wi(r,s,a);break;default:wi(r,s,a)}}function xy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new aI),s.forEach(function(h){var f=yI.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Yn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Lt=R.stateNode,Qn=!1;break e;case 3:Lt=R.stateNode.containerInfo,Qn=!0;break e;case 4:Lt=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(Lt===null)throw Error(t(160));ky(g,w,f),Lt=null,Qn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){at(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ny(s,r),s=s.sibling}function Ny(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yn(s,r),mr(r),h&4){try{el(3,r,r.return),Xu(3,r)}catch(fe){at(r,r.return,fe)}try{el(5,r,r.return)}catch(fe){at(r,r.return,fe)}}break;case 1:Yn(s,r),mr(r),h&512&&a!==null&&xo(a,a.return);break;case 5:if(Yn(s,r),mr(r),h&512&&a!==null&&xo(a,a.return),r.flags&32){var f=r.stateNode;try{ri(f,"")}catch(fe){at(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&ha(f,g),wa(R,w);var z=wa(R,g);for(w=0;w<k.length;w+=2){var X=k[w],te=k[w+1];X==="style"?ya(f,te):X==="dangerouslySetInnerHTML"?ma(f,te):X==="children"?ri(f,te):K(f,X,te,z)}switch(R){case"input":da(f,g);break;case"textarea":Ws(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ae=g.value;ae!=null?Ar(f,!!g.multiple,ae,!1):Q!==!!g.multiple&&(g.defaultValue!=null?Ar(f,!!g.multiple,g.defaultValue,!0):Ar(f,!!g.multiple,g.multiple?[]:"",!1))}f[$a]=g}catch(fe){at(r,r.return,fe)}}break;case 6:if(Yn(s,r),mr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){at(r,r.return,fe)}}break;case 3:if(Yn(s,r),mr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{qn(s.containerInfo)}catch(fe){at(r,r.return,fe)}break;case 4:Yn(s,r),mr(r);break;case 13:Yn(s,r),mr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Yd=Ke())),h&4&&xy(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(qt=(z=qt)||X,Yn(s,r),qt=z):Yn(s,r),mr(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(ue=r,X=r.child;X!==null;){for(te=ue=X;ue!==null;){switch(Q=ue,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:el(4,Q,Q.return);break;case 1:xo(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){h=Q,a=Q.return;try{s=h,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){at(h,a,fe)}}break;case 5:xo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){by(te);continue}}ae!==null?(ae.return=Q,ue=ae):by(te)}X=X.sibling}e:for(X=null,te=r;;){if(te.tag===5){if(X===null){X=te;try{f=te.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=te.stateNode,k=te.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=ga("display",w))}catch(fe){at(r,r.return,fe)}}}else if(te.tag===6){if(X===null)try{te.stateNode.nodeValue=z?"":te.memoizedProps}catch(fe){at(r,r.return,fe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;X===te&&(X=null),te=te.return}X===te&&(X=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:Yn(s,r),mr(r),h&4&&xy(r);break;case 21:break;default:Yn(s,r),mr(r)}}function mr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Cy(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(ri(f,""),h.flags&=-33);var g=Py(r);Kd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=Py(r);Hd(r,R,w);break;default:throw Error(t(161))}}catch(k){at(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function uI(r,s,a){ue=r,Dy(r)}function Dy(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Yu;if(!w){var R=f.alternate,k=R!==null&&R.memoizedState!==null||qt;R=Yu;var z=qt;if(Yu=w,(qt=k)&&!z)for(ue=f;ue!==null;)w=ue,k=w.child,w.tag===22&&w.memoizedState!==null?Ly(f):k!==null?(k.return=w,ue=k):Ly(f);for(;g!==null;)ue=g,Dy(g),g=g.sibling;ue=f,Yu=R,qt=z}Oy(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ue=g):Oy(r)}}function Oy(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:qt||Xu(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!qt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Gn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&bg(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}bg(s,w,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var te=X.dehydrated;te!==null&&qn(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}qt||s.flags&512&&Wd(s)}catch(Q){at(s,s.return,Q)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function by(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Ly(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Xu(4,s)}catch(k){at(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){at(s,f,k)}}var g=s.return;try{Wd(s)}catch(k){at(s,g,k)}break;case 5:var w=s.return;try{Wd(s)}catch(k){at(s,w,k)}}}catch(k){at(s,s.return,k)}if(s===r){ue=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ue=R;break}ue=s.return}}var cI=Math.ceil,Ju=ee.ReactCurrentDispatcher,Gd=ee.ReactCurrentOwner,On=ee.ReactCurrentBatchConfig,Fe=0,kt=null,mt=null,Vt=0,En=0,No=mi(0),It=0,tl=null,gs=0,Zu=0,Qd=0,nl=null,un=null,Yd=0,Do=1/0,Br=null,ec=!1,Xd=null,Ei=null,tc=!1,Ti=null,nc=0,rl=0,Jd=null,rc=-1,ic=0;function en(){return(Fe&6)!==0?Ke():rc!==-1?rc:rc=Ke()}function Ii(r){return(r.mode&1)===0?1:(Fe&2)!==0&&Vt!==0?Vt&-Vt:KT.transition!==null?(ic===0&&(ic=is()),ic):(r=be,r!==0||(r=window.event,r=r===void 0?16:Na(r.type)),r)}function Xn(r,s,a,h){if(50<rl)throw rl=0,Jd=null,Error(t(185));ai(r,a,h),((Fe&2)===0||r!==kt)&&(r===kt&&((Fe&2)===0&&(Zu|=a),It===4&&Si(r,Vt)),cn(r,h),a===1&&Fe===0&&(s.mode&1)===0&&(Do=Ke()+500,Du&&yi()))}function cn(r,s){var a=r.callbackNode;kr(r,s);var h=rs(r,r===kt?Vt:0);if(h===0)a!==null&&Aa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&Aa(a),s===1)r.tag===0?HT(My.bind(null,r)):Tg(My.bind(null,r)),zT(function(){(Fe&6)===0&&yi()}),a=null;else{switch(ui(h)){case 1:a=ts;break;case 4:a=ii;break;case 16:a=An;break;case 536870912:a=iu;break;default:a=An}a=Wy(a,Vy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Vy(r,s){if(rc=-1,ic=0,(Fe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Oo()&&r.callbackNode!==a)return null;var h=rs(r,r===kt?Vt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=sc(r,h);else{s=h;var f=Fe;Fe|=2;var g=Fy();(kt!==r||Vt!==s)&&(Br=null,Do=Ke()+500,_s(r,s));do try{fI();break}catch(R){Uy(r,R)}while(!0);gd(),Ju.current=g,Fe=f,mt!==null?s=0:(kt=null,Vt=0,s=It)}if(s!==0){if(s===2&&(f=gn(r),f!==0&&(h=f,s=Zd(r,f))),s===1)throw a=tl,_s(r,0),Si(r,h),cn(r,Ke()),a;if(s===6)Si(r,h);else{if(f=r.current.alternate,(h&30)===0&&!hI(f)&&(s=sc(r,h),s===2&&(g=gn(r),g!==0&&(h=g,s=Zd(r,g))),s===1))throw a=tl,_s(r,0),Si(r,h),cn(r,Ke()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:vs(r,un,Br);break;case 3:if(Si(r,h),(h&130023424)===h&&(s=Yd+500-Ke(),10<s)){if(rs(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){en(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=sd(vs.bind(null,r,un,Br),s);break}vs(r,un,Br);break;case 4:if(Si(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Xt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=Ke()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*cI(h/1960))-h,10<h){r.timeoutHandle=sd(vs.bind(null,r,un,Br),h);break}vs(r,un,Br);break;case 5:vs(r,un,Br);break;default:throw Error(t(329))}}}return cn(r,Ke()),r.callbackNode===a?Vy.bind(null,r):null}function Zd(r,s){var a=nl;return r.current.memoizedState.isDehydrated&&(_s(r,s).flags|=256),r=sc(r,s),r!==2&&(s=un,un=a,s!==null&&ef(s)),r}function ef(r){un===null?un=r:un.push.apply(un,r)}function hI(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Hn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Si(r,s){for(s&=~Qd,s&=~Zu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Xt(s),h=1<<a;r[a]=-1,s&=~h}}function My(r){if((Fe&6)!==0)throw Error(t(327));Oo();var s=rs(r,0);if((s&1)===0)return cn(r,Ke()),null;var a=sc(r,s);if(r.tag!==0&&a===2){var h=gn(r);h!==0&&(s=h,a=Zd(r,h))}if(a===1)throw a=tl,_s(r,0),Si(r,s),cn(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,vs(r,un,Br),cn(r,Ke()),null}function tf(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Do=Ke()+500,Du&&yi())}}function ys(r){Ti!==null&&Ti.tag===0&&(Fe&6)===0&&Oo();var s=Fe;Fe|=1;var a=On.transition,h=be;try{if(On.transition=null,be=1,r)return r()}finally{be=h,On.transition=a,Fe=s,(Fe&6)===0&&yi()}}function nf(){En=No.current,Ye(No)}function _s(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,BT(a)),mt!==null)for(a=mt.return;a!==null;){var h=a;switch(hd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&xu();break;case 3:Po(),Ye(on),Ye(Bt),Sd();break;case 5:Td(h);break;case 4:Po();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:yd(h.type._context);break;case 22:case 23:nf()}a=a.return}if(kt=r,mt=r=Ri(r.current,null),Vt=En=s,It=0,tl=null,Qd=Zu=gs=0,un=nl=null,fs!==null){for(s=0;s<fs.length;s++)if(a=fs[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}fs=null}return r}function Uy(r,s){do{var a=mt;try{if(gd(),zu.current=Hu,$u){for(var h=rt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}$u=!1}if(ms=0,Pt=Tt=rt=null,Qa=!1,Ya=0,Gd.current=null,a===null||a.return===null){It=1,tl=s,mt=null;break}e:{var g=r,w=a.return,R=a,k=s;if(s=Vt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,X=R,te=X.tag;if((X.mode&1)===0&&(te===0||te===11||te===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ae=uy(w);if(ae!==null){ae.flags&=-257,cy(ae,w,R,g,s),ae.mode&1&&ly(g,z,s),s=ae,k=z;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(k),s.updateQueue=fe}else he.add(k);break e}else{if((s&1)===0){ly(g,z,s),rf();break e}k=Error(t(426))}}else if(et&&R.mode&1){var ht=uy(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),cy(ht,w,R,g,s),pd(ko(k,R));break e}}g=k=ko(k,R),It!==4&&(It=2),nl===null?nl=[g]:nl.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var F=oy(g,k,s);Og(g,F);break e;case 1:R=k;var D=g.type,j=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ei===null||!Ei.has(j)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=ay(g,R,s);Og(g,ne);break e}}g=g.return}while(g!==null)}By(a)}catch(me){s=me,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Fy(){var r=Ju.current;return Ju.current=Hu,r===null?Hu:r}function rf(){(It===0||It===3||It===2)&&(It=4),kt===null||(gs&268435455)===0&&(Zu&268435455)===0||Si(kt,Vt)}function sc(r,s){var a=Fe;Fe|=2;var h=Fy();(kt!==r||Vt!==s)&&(Br=null,_s(r,s));do try{dI();break}catch(f){Uy(r,f)}while(!0);if(gd(),Fe=a,Ju.current=h,mt!==null)throw Error(t(261));return kt=null,Vt=0,It}function dI(){for(;mt!==null;)jy(mt)}function fI(){for(;mt!==null&&!nu();)jy(mt)}function jy(r){var s=qy(r.alternate,r,En);r.memoizedProps=r.pendingProps,s===null?By(r):mt=s,Gd.current=null}function By(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=sI(a,s,En),a!==null){mt=a;return}}else{if(a=oI(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{It=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);It===0&&(It=5)}function vs(r,s,a){var h=be,f=On.transition;try{On.transition=null,be=1,pI(r,s,a,h)}finally{On.transition=f,be=h}return null}function pI(r,s,a,h){do Oo();while(Ti!==null);if((Fe&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===kt&&(mt=kt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tc||(tc=!0,Wy(An,function(){return Oo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=On.transition,On.transition=null;var w=be;be=1;var R=Fe;Fe|=4,Gd.current=null,lI(r,a),Ny(a,r),bT(rd),hi=!!nd,rd=nd=null,r.current=a,uI(a),jh(),Fe=R,be=w,On.transition=g}else r.current=a;if(tc&&(tc=!1,Ti=r,nc=f),g=r.pendingLanes,g===0&&(Ei=null),su(a.stateNode),cn(r,Ke()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(ec)throw ec=!1,r=Xd,Xd=null,r;return(nc&1)!==0&&r.tag!==0&&Oo(),g=r.pendingLanes,(g&1)!==0?r===Jd?rl++:(rl=0,Jd=r):rl=0,yi(),null}function Oo(){if(Ti!==null){var r=ui(nc),s=On.transition,a=be;try{if(On.transition=null,be=16>r?16:r,Ti===null)var h=!1;else{if(r=Ti,Ti=null,nc=0,(Fe&6)!==0)throw Error(t(331));var f=Fe;for(Fe|=4,ue=r.current;ue!==null;){var g=ue,w=g.child;if((ue.flags&16)!==0){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var z=R[k];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:el(8,X,g)}var te=X.child;if(te!==null)te.return=X,ue=te;else for(;ue!==null;){X=ue;var Q=X.sibling,ae=X.return;if(Ay(X),X===z){ue=null;break}if(Q!==null){Q.return=ae,ue=Q;break}ue=ae}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var ht=fe.sibling;fe.sibling=null,fe=ht}while(fe!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:el(9,g,g.return)}var F=g.sibling;if(F!==null){F.return=g.return,ue=F;break e}ue=g.return}}var D=r.current;for(ue=D;ue!==null;){w=ue;var j=w.child;if((w.subtreeFlags&2064)!==0&&j!==null)j.return=w,ue=j;else e:for(w=D;ue!==null;){if(R=ue,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:Xu(9,R)}}catch(me){at(R,R.return,me)}if(R===w){ue=null;break e}var ne=R.sibling;if(ne!==null){ne.return=R.return,ue=ne;break e}ue=R.return}}if(Fe=f,yi(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(ns,r)}catch{}h=!0}return h}finally{be=a,On.transition=s}}return!1}function zy(r,s,a){s=ko(a,s),s=oy(r,s,1),r=vi(r,s,1),s=en(),r!==null&&(ai(r,1,s),cn(r,s))}function at(r,s,a){if(r.tag===3)zy(r,r,a);else for(;s!==null;){if(s.tag===3){zy(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ei===null||!Ei.has(h))){r=ko(a,r),r=ay(s,r,1),s=vi(s,r,1),r=en(),s!==null&&(ai(s,1,r),cn(s,r));break}}s=s.return}}function mI(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=en(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Vt&a)===a&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Ke()-Yd?_s(r,0):Qd|=a),cn(r,s)}function $y(r,s){s===0&&((r.mode&1)===0?s=1:(s=to,to<<=1,(to&130023424)===0&&(to=4194304)));var a=en();r=Ur(r,s),r!==null&&(ai(r,s,a),cn(r,a))}function gI(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),$y(r,a)}function yI(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),$y(r,a)}var qy;qy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return ln=!1,iI(r,s,a);ln=(r.flags&131072)!==0}else ln=!1,et&&(s.flags&1048576)!==0&&Ig(s,bu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Qu(r,s),r=s.pendingProps;var f=Eo(s,Bt.current);Co(s,a),f=Cd(null,s,h,r,f,a);var g=Pd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(g=!0,Nu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,wd(s),f.updater=Ku,s.stateNode=f,f._reactInternals=s,bd(s,h,r,a),s=Ud(null,s,h,!0,g,a)):(s.tag=0,et&&g&&cd(s),Zt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Qu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=vI(h),r=Gn(h,r),f){case 0:s=Md(null,s,h,r,a);break e;case 1:s=gy(null,s,h,r,a);break e;case 11:s=hy(null,s,h,r,a);break e;case 14:s=dy(null,s,h,Gn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Md(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),gy(r,s,h,f,a);case 3:e:{if(yy(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Dg(r,s),ju(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=ko(Error(t(423)),s),s=_y(r,s,h,a,f);break e}else if(h!==f){f=ko(Error(t(424)),s),s=_y(r,s,h,a,f);break e}else for(wn=pi(s.stateNode.containerInfo.firstChild),vn=s,et=!0,Kn=null,a=xg(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(So(),h===f){s=jr(r,s,a);break e}Zt(r,s,h,a)}s=s.child}return s;case 5:return Lg(s),r===null&&fd(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,id(h,f)?w=null:g!==null&&id(h,g)&&(s.flags|=32),my(r,s),Zt(r,s,w,a),s.child;case 6:return r===null&&fd(s),null;case 13:return vy(r,s,a);case 4:return Ed(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Ro(s,null,h,a):Zt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),hy(r,s,h,f,a);case 7:return Zt(r,s,s.pendingProps,a),s.child;case 8:return Zt(r,s,s.pendingProps.children,a),s.child;case 12:return Zt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Ge(Mu,h._currentValue),h._currentValue=w,g!==null)if(Hn(g.value,w)){if(g.children===f.children&&!on.current){s=jr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Fr(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?k.next=k:(k.next=X.next,X.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),_d(g.return,a,s),R.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,R=w.alternate,R!==null&&(R.lanes|=a),_d(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Zt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Co(s,a),f=Nn(f),h=h(f),s.flags|=1,Zt(r,s,h,a),s.child;case 14:return h=s.type,f=Gn(h,s.pendingProps),f=Gn(h.type,f),dy(r,s,h,f,a);case 15:return fy(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Qu(r,s),s.tag=1,an(h)?(r=!0,Nu(s)):r=!1,Co(s,a),iy(s,h,f),bd(s,h,f,a),Ud(null,s,h,!0,r,a);case 19:return Ey(r,s,a);case 22:return py(r,s,a)}throw Error(t(156,s.tag))};function Wy(r,s){return Zs(r,s)}function _I(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(r,s,a,h){return new _I(r,s,a,h)}function sf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function vI(r){if(typeof r=="function")return sf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===V)return 11;if(r===Rt)return 14}return 2}function Ri(r,s){var a=r.alternate;return a===null?(a=bn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function oc(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")sf(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case A:return ws(a.children,f,g,s);case I:w=8,f|=8;break;case C:return r=bn(12,a,s,f|2),r.elementType=C,r.lanes=g,r;case P:return r=bn(13,a,s,f),r.elementType=P,r.lanes=g,r;case tt:return r=bn(19,a,s,f),r.elementType=tt,r.lanes=g,r;case je:return ac(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case x:w=10;break e;case O:w=9;break e;case V:w=11;break e;case Rt:w=14;break e;case At:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=bn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function ws(r,s,a,h){return r=bn(7,r,h,s),r.lanes=a,r}function ac(r,s,a,h){return r=bn(22,r,h,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function of(r,s,a){return r=bn(6,r,null,s),r.lanes=a,r}function af(r,s,a){return s=bn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function wI(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function lf(r,s,a,h,f,g,w,R,k){return r=new wI(r,s,a,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=bn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wd(g),r}function EI(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Hy(r){if(!r)return gi;r=r._reactInternals;e:{if(Fn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(an(a))return wg(r,a,s)}return s}function Ky(r,s,a,h,f,g,w,R,k){return r=lf(a,h,!0,r,f,g,w,R,k),r.context=Hy(null),a=r.current,h=en(),f=Ii(a),g=Fr(h,f),g.callback=s??null,vi(a,g,f),r.current.lanes=f,ai(r,f,h),cn(r,h),r}function lc(r,s,a,h){var f=s.current,g=en(),w=Ii(f);return a=Hy(a),s.context===null?s.context=a:s.pendingContext=a,s=Fr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=vi(f,s,w),r!==null&&(Xn(r,f,w,g),Fu(r,f,w)),w}function uc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gy(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function uf(r,s){Gy(r,s),(r=r.alternate)&&Gy(r,s)}function TI(){return null}var Qy=typeof reportError=="function"?reportError:function(r){console.error(r)};function cf(r){this._internalRoot=r}cc.prototype.render=cf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));lc(r,s,null,null)},cc.prototype.unmount=cf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ys(function(){lc(null,r,null,null)}),s[br]=null}};function cc(r){this._internalRoot=r}cc.prototype.unstable_scheduleHydration=function(r){if(r){var s=cu();r={blockedOn:null,target:r,priority:s};for(var a=0;a<lr.length&&s!==0&&s<lr[a].priority;a++);lr.splice(a,0,r),a===0&&fu(r)}};function hf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function hc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yy(){}function II(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=uc(w);g.call(z)}}var w=Ky(s,h,r,0,null,!1,!1,"",Yy);return r._reactRootContainer=w,r[br]=w.current,Ba(r.nodeType===8?r.parentNode:r),ys(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var z=uc(k);R.call(z)}}var k=lf(r,0,!1,null,null,!1,!1,"",Yy);return r._reactRootContainer=k,r[br]=k.current,Ba(r.nodeType===8?r.parentNode:r),ys(function(){lc(s,k,a,h)}),k}function dc(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var k=uc(w);R.call(k)}}lc(s,w,r,f)}else w=II(a,s,r,f,h);return uc(w)}lu=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=si(s.pendingLanes);a!==0&&(li(s,a|1),cn(s,Ke()),(Fe&6)===0&&(Do=Ke()+500,yi()))}break;case 13:ys(function(){var h=Ur(r,1);if(h!==null){var f=en();Xn(h,r,1,f)}}),uf(r,1)}},no=function(r){if(r.tag===13){var s=Ur(r,134217728);if(s!==null){var a=en();Xn(s,r,134217728,a)}uf(r,134217728)}},uu=function(r){if(r.tag===13){var s=Ii(r),a=Ur(r,s);if(a!==null){var h=en();Xn(a,r,s,h)}uf(r,s)}},cu=function(){return be},hu=function(r,s){var a=be;try{return be=r,s()}finally{be=a}},Ks=function(r,s,a){switch(s){case"input":if(da(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=ku(h);if(!f)throw Error(t(90));Yt(h),da(h,f)}}}break;case"textarea":Ws(r,a);break;case"select":s=a.value,s!=null&&Ar(r,!!a.multiple,s,!1)}},Xi=tf,Ta=ys;var SI={usingClientEntryPoint:!1,Events:[qa,vo,ku,or,Ea,tf]},il={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RI={bundleType:il.bundleType,version:il.version,rendererPackageName:il.rendererPackageName,rendererConfig:il.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ra(r),r===null?null:r.stateNode},findFiberByHostInstance:il.findFiberByHostInstance||TI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ns=fc.inject(RI),mn=fc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI,hn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hf(s))throw Error(t(200));return EI(r,s,null,a)},hn.createRoot=function(r,s){if(!hf(r))throw Error(t(299));var a=!1,h="",f=Qy;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=lf(r,1,!1,null,null,a,!1,h,f),r[br]=s.current,Ba(r.nodeType===8?r.parentNode:r),new cf(s)},hn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Ra(s),r=r===null?null:r.stateNode,r},hn.flushSync=function(r){return ys(r)},hn.hydrate=function(r,s,a){if(!hc(s))throw Error(t(200));return dc(null,r,s,!0,a)},hn.hydrateRoot=function(r,s,a){if(!hf(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=Qy;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Ky(s,null,r,1,a??null,f,!1,g,w),r[br]=s.current,Ba(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new cc(s)},hn.render=function(r,s,a){if(!hc(s))throw Error(t(200));return dc(null,r,s,!1,a)},hn.unmountComponentAtNode=function(r){if(!hc(r))throw Error(t(40));return r._reactRootContainer?(ys(function(){dc(null,null,r,!1,function(){r._reactRootContainer=null,r[br]=null})}),!0):!1},hn.unstable_batchedUpdates=tf,hn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!hc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return dc(r,s,a,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var i_;function n0(){if(i_)return pf.exports;i_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),pf.exports=bI(),pf.exports}var s_;function LI(){if(s_)return pc;s_=1;var n=n0();return pc.createRoot=n.createRoot,pc.hydrateRoot=n.hydrateRoot,pc}var VI=LI();const MI=t0(VI);n0();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rl(){return Rl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Rl.apply(this,arguments)}var Oi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Oi||(Oi={}));const o_="popstate";function UI(n){n===void 0&&(n={});function e(o,l){let{pathname:c="/",search:d="",hash:p=""}=Us(o.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Ff("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let c=o.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");d=y===-1?p:p.slice(0,y)}return d+"#"+(typeof l=="string"?l:Fc(l))}function i(o,l){Rp(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return jI(e,t,i,n)}function ft(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Rp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FI(){return Math.random().toString(36).substr(2,8)}function a_(n,e){return{usr:n.state,key:n.key,idx:e}}function Ff(n,e,t,i){return t===void 0&&(t=null),Rl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Us(e):e,{state:t,key:e&&e.key||i||FI()})}function Fc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Us(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function jI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d=Oi.Pop,p=null,y=v();y==null&&(y=0,c.replaceState(Rl({},c.state,{idx:y}),""));function v(){return(c.state||{idx:null}).idx}function E(){d=Oi.Pop;let b=v(),H=b==null?null:b-y;y=b,p&&p({action:d,location:B.location,delta:H})}function S(b,H){d=Oi.Push;let J=Ff(B.location,b,H);t&&t(J,b),y=v()+1;let K=a_(J,y),ee=B.createHref(J);try{c.pushState(K,"",ee)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ee)}l&&p&&p({action:d,location:B.location,delta:1})}function N(b,H){d=Oi.Replace;let J=Ff(B.location,b,H);t&&t(J,b),y=v();let K=a_(J,y),ee=B.createHref(J);c.replaceState(K,"",ee),l&&p&&p({action:d,location:B.location,delta:0})}function U(b){let H=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof b=="string"?b:Fc(b);return J=J.replace(/ $/,"%20"),ft(H,"No window.location.(origin|href) available to create URL for href: "+J),new URL(J,H)}let B={get action(){return d},get location(){return n(o,c)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(o_,E),p=b,()=>{o.removeEventListener(o_,E),p=null}},createHref(b){return e(o,b)},createURL:U,encodeLocation(b){let H=U(b);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:N,go(b){return c.go(b)}};return B}var l_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(l_||(l_={}));function BI(n,e,t){return t===void 0&&(t="/"),zI(n,e,t)}function zI(n,e,t,i){let o=typeof e=="string"?Us(e):e,l=Ap(o.pathname||"/",t);if(l==null)return null;let c=r0(n);$I(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=t1(l);d=JI(c[p],y)}return d}function r0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ft(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Li([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(ft(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),r0(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:YI(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of i0(l.path))o(l,c,p)}),e}function i0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=i0(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function $I(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:XI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const qI=/^:[\w-]+$/,WI=3,HI=2,KI=1,GI=10,QI=-2,u_=n=>n==="*";function YI(n,e){let t=n.split("/"),i=t.length;return t.some(u_)&&(i+=QI),e&&(i+=HI),t.filter(o=>!u_(o)).reduce((o,l)=>o+(qI.test(l)?WI:l===""?KI:GI),i)}function XI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function JI(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=ZI({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),S=p.route;if(!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Li([l,E.pathname]),pathnameBase:s1(Li([l,E.pathnameBase])),route:S}),E.pathnameBase!=="/"&&(l=Li([l,E.pathnameBase]))}return c}function ZI(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=e1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,v,E)=>{let{paramName:S,isOptional:N}=v;if(S==="*"){let B=d[E]||"";c=l.slice(0,l.length-B.length).replace(/(.)\/+$/,"$1")}const U=d[E];return N&&!U?y[S]=void 0:y[S]=(U||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function e1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Rp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function t1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Rp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ap(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function n1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Us(n):n;return{pathname:t?t.startsWith("/")?t:r1(t,e):e,search:o1(i),hash:a1(o)}}function r1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yf(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Cp(n,e){let t=i1(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Pp(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Us(n):(o=Rl({},n),ft(!o.pathname||!o.pathname.includes("?"),yf("?","pathname","search",o)),ft(!o.pathname||!o.pathname.includes("#"),yf("#","pathname","hash",o)),ft(!o.search||!o.search.includes("#"),yf("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let S=c.split("/");for(;S[0]==="..";)S.shift(),E-=1;o.pathname=S.join("/")}d=E>=0?e[E]:"/"}let p=n1(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const Li=n=>n.join("/").replace(/\/\/+/g,"/"),s1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),o1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,a1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function l1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const s0=["post","put","patch","delete"];new Set(s0);const u1=["get",...s0];new Set(u1);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Al.apply(this,arguments)}const kp=Y.createContext(null),c1=Y.createContext(null),Wi=Y.createContext(null),hh=Y.createContext(null),Jr=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),o0=Y.createContext(null);function h1(n,e){let{relative:t}=e===void 0?{}:e;ra()||ft(!1);let{basename:i,navigator:o}=Y.useContext(Wi),{hash:l,pathname:c,search:d}=l0(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Li([i,c])),o.createHref({pathname:p,search:d,hash:l})}function ra(){return Y.useContext(hh)!=null}function Ul(){return ra()||ft(!1),Y.useContext(hh).location}function a0(n){Y.useContext(Wi).static||Y.useLayoutEffect(n)}function ia(){let{isDataRoute:n}=Y.useContext(Jr);return n?A1():d1()}function d1(){ra()||ft(!1);let n=Y.useContext(kp),{basename:e,future:t,navigator:i}=Y.useContext(Wi),{matches:o}=Y.useContext(Jr),{pathname:l}=Ul(),c=JSON.stringify(Cp(o,t.v7_relativeSplatPath)),d=Y.useRef(!1);return a0(()=>{d.current=!0}),Y.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let E=Pp(y,JSON.parse(c),l,v.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Li([e,E.pathname])),(v.replace?i.replace:i.push)(E,v.state,v)},[e,i,c,l,n])}const f1=Y.createContext(null);function p1(n){let e=Y.useContext(Jr).outlet;return e&&Y.createElement(f1.Provider,{value:n},e)}function l0(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Y.useContext(Wi),{matches:o}=Y.useContext(Jr),{pathname:l}=Ul(),c=JSON.stringify(Cp(o,i.v7_relativeSplatPath));return Y.useMemo(()=>Pp(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function m1(n,e){return g1(n,e)}function g1(n,e,t,i){ra()||ft(!1);let{navigator:o,static:l}=Y.useContext(Wi),{matches:c}=Y.useContext(Jr),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let y=d?d.pathnameBase:"/";d&&d.route;let v=Ul(),E;if(e){var S;let H=typeof e=="string"?Us(e):e;y==="/"||(S=H.pathname)!=null&&S.startsWith(y)||ft(!1),E=H}else E=v;let N=E.pathname||"/",U=N;if(y!=="/"){let H=y.replace(/^\//,"").split("/");U="/"+N.replace(/^\//,"").split("/").slice(H.length).join("/")}let B=BI(n,{pathname:U}),b=E1(B&&B.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:Li([y,o.encodeLocation?o.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?y:Li([y,o.encodeLocation?o.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),c,t,i);return e&&b?Y.createElement(hh.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Oi.Pop}},b):b}function y1(){let n=R1(),e=l1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,null)}const _1=Y.createElement(y1,null);class v1 extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Y.createElement(Jr.Provider,{value:this.props.routeContext},Y.createElement(o0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w1(n){let{routeContext:e,match:t,children:i}=n,o=Y.useContext(kp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(Jr.Provider,{value:e},i)}function E1(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=c.findIndex(E=>E.route.id&&(d==null?void 0:d[E.route.id])!==void 0);v>=0||ft(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<c.length;v++){let E=c[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=v),E.route.id){let{loaderData:S,errors:N}=t,U=E.route.loader&&S[E.route.id]===void 0&&(!N||N[E.route.id]===void 0);if(E.route.lazy||U){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((v,E,S)=>{let N,U=!1,B=null,b=null;t&&(N=d&&E.route.id?d[E.route.id]:void 0,B=E.route.errorElement||_1,p&&(y<0&&S===0?(C1("route-fallback"),U=!0,b=null):y===S&&(U=!0,b=E.route.hydrateFallbackElement||null)));let H=e.concat(c.slice(0,S+1)),J=()=>{let K;return N?K=B:U?K=b:E.route.Component?K=Y.createElement(E.route.Component,null):E.route.element?K=E.route.element:K=v,Y.createElement(w1,{match:E,routeContext:{outlet:v,matches:H,isDataRoute:t!=null},children:K})};return t&&(E.route.ErrorBoundary||E.route.errorElement||S===0)?Y.createElement(v1,{location:t.location,revalidation:t.revalidation,component:B,error:N,children:J(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):J()},null)}var u0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(u0||{}),c0=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(c0||{});function T1(n){let e=Y.useContext(kp);return e||ft(!1),e}function I1(n){let e=Y.useContext(c1);return e||ft(!1),e}function S1(n){let e=Y.useContext(Jr);return e||ft(!1),e}function h0(n){let e=S1(),t=e.matches[e.matches.length-1];return t.route.id||ft(!1),t.route.id}function R1(){var n;let e=Y.useContext(o0),t=I1(),i=h0();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function A1(){let{router:n}=T1(u0.UseNavigateStable),e=h0(c0.UseNavigateStable),t=Y.useRef(!1);return a0(()=>{t.current=!0}),Y.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,Al({fromRouteId:e},l)))},[n,e])}const c_={};function C1(n,e,t){c_[n]||(c_[n]=!0)}function P1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function k1(n){let{to:e,replace:t,state:i,relative:o}=n;ra()||ft(!1);let{future:l,static:c}=Y.useContext(Wi),{matches:d}=Y.useContext(Jr),{pathname:p}=Ul(),y=ia(),v=Pp(e,Cp(d,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(v);return Y.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function x1(n){return p1(n.context)}function Lo(n){ft(!1)}function N1(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Oi.Pop,navigator:l,static:c=!1,future:d}=n;ra()&&ft(!1);let p=e.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:l,static:c,future:Al({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=Us(i));let{pathname:v="/",search:E="",hash:S="",state:N=null,key:U="default"}=i,B=Y.useMemo(()=>{let b=Ap(v,p);return b==null?null:{location:{pathname:b,search:E,hash:S,state:N,key:U},navigationType:o}},[p,v,E,S,N,U,o]);return B==null?null:Y.createElement(Wi.Provider,{value:y},Y.createElement(hh.Provider,{children:t,value:B}))}function D1(n){let{children:e,location:t}=n;return m1(jf(e),t)}new Promise(()=>{});function jf(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,o)=>{if(!Y.isValidElement(i))return;let l=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,jf(i.props.children,l));return}i.type!==Lo&&ft(!1),!i.props.index||!i.props.children||ft(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=jf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bf(){return Bf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Bf.apply(this,arguments)}function O1(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function b1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function L1(n,e){return n.button===0&&(!e||e==="_self")&&!b1(n)}const V1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],M1="6";try{window.__reactRouterVersion=M1}catch{}const U1="startTransition",h_=NI[U1];function F1(n){let{basename:e,children:t,future:i,window:o}=n,l=Y.useRef();l.current==null&&(l.current=UI({window:o,v5Compat:!0}));let c=l.current,[d,p]=Y.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},v=Y.useCallback(E=>{y&&h_?h_(()=>p(E)):p(E)},[p,y]);return Y.useLayoutEffect(()=>c.listen(v),[c,v]),Y.useEffect(()=>P1(i),[i]),Y.createElement(N1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const j1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",B1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jc=Y.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:E}=e,S=O1(e,V1),{basename:N}=Y.useContext(Wi),U,B=!1;if(typeof y=="string"&&B1.test(y)&&(U=y,j1))try{let K=new URL(window.location.href),ee=y.startsWith("//")?new URL(K.protocol+y):new URL(y),le=Ap(ee.pathname,N);ee.origin===K.origin&&le!=null?y=le+ee.search+ee.hash:B=!0}catch{}let b=h1(y,{relative:o}),H=z1(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:E});function J(K){i&&i(K),K.defaultPrevented||H(K)}return Y.createElement("a",Bf({},S,{href:U||b,onClick:B||l?i:J,ref:t,target:p}))});var d_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(d_||(d_={}));var f_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(f_||(f_={}));function z1(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,p=ia(),y=Ul(),v=l0(n,{relative:c});return Y.useCallback(E=>{if(L1(E,t)){E.preventDefault();let S=i!==void 0?i:Fc(y)===Fc(v);p(n,{replace:S,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[y,p,v,i,o,t,n,l,c,d])}var Gt=function(){return Gt=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Gt.apply(this,arguments)};function Cl(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Xe="-ms-",ml="-moz-",$e="-webkit-",d0="comm",dh="rule",xp="decl",$1="@import",f0="@keyframes",q1="@layer",p0=Math.abs,Np=String.fromCharCode,zf=Object.assign;function W1(n,e){return Dt(n,0)^45?(((e<<2^Dt(n,0))<<2^Dt(n,1))<<2^Dt(n,2))<<2^Dt(n,3):0}function m0(n){return n.trim()}function zr(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function Sc(n,e,t){return n.indexOf(e,t)}function Dt(n,e){return n.charCodeAt(e)|0}function qo(n,e,t){return n.slice(e,t)}function gr(n){return n.length}function g0(n){return n.length}function ll(n,e){return e.push(n),n}function H1(n,e){return n.map(e).join("")}function p_(n,e){return n.filter(function(t){return!zr(t,e)})}var fh=1,Wo=1,y0=0,Ln=0,yt=0,sa="";function ph(n,e,t,i,o,l,c,d){return{value:n,root:e,parent:t,type:i,props:o,children:l,line:fh,column:Wo,length:c,return:"",siblings:d}}function Pi(n,e){return zf(ph("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function bo(n){for(;n.root;)n=Pi(n.root,{children:[n]});ll(n,n.siblings)}function K1(){return yt}function G1(){return yt=Ln>0?Dt(sa,--Ln):0,Wo--,yt===10&&(Wo=1,fh--),yt}function er(){return yt=Ln<y0?Dt(sa,Ln++):0,Wo++,yt===10&&(Wo=1,fh++),yt}function As(){return Dt(sa,Ln)}function Rc(){return Ln}function mh(n,e){return qo(sa,n,e)}function $f(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Q1(n){return fh=Wo=1,y0=gr(sa=n),Ln=0,[]}function Y1(n){return sa="",n}function _f(n){return m0(mh(Ln-1,qf(n===91?n+2:n===40?n+1:n)))}function X1(n){for(;(yt=As())&&yt<33;)er();return $f(n)>2||$f(yt)>3?"":" "}function J1(n,e){for(;--e&&er()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return mh(n,Rc()+(e<6&&As()==32&&er()==32))}function qf(n){for(;er();)switch(yt){case n:return Ln;case 34:case 39:n!==34&&n!==39&&qf(yt);break;case 40:n===41&&qf(n);break;case 92:er();break}return Ln}function Z1(n,e){for(;er()&&n+yt!==57;)if(n+yt===84&&As()===47)break;return"/*"+mh(e,Ln-1)+"*"+Np(n===47?n:er())}function eS(n){for(;!$f(As());)er();return mh(n,Ln)}function tS(n){return Y1(Ac("",null,null,null,[""],n=Q1(n),0,[0],n))}function Ac(n,e,t,i,o,l,c,d,p){for(var y=0,v=0,E=c,S=0,N=0,U=0,B=1,b=1,H=1,J=0,K="",ee=o,le=l,re=i,A=K;b;)switch(U=J,J=er()){case 40:if(U!=108&&Dt(A,E-1)==58){Sc(A+=ke(_f(J),"&","&\f"),"&\f",p0(y?d[y-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:A+=_f(J);break;case 9:case 10:case 13:case 32:A+=X1(U);break;case 92:A+=J1(Rc()-1,7);continue;case 47:switch(As()){case 42:case 47:ll(nS(Z1(er(),Rc()),e,t,p),p);break;default:A+="/"}break;case 123*B:d[y++]=gr(A)*H;case 125*B:case 59:case 0:switch(J){case 0:case 125:b=0;case 59+v:H==-1&&(A=ke(A,/\f/g,"")),N>0&&gr(A)-E&&ll(N>32?g_(A+";",i,t,E-1,p):g_(ke(A," ","")+";",i,t,E-2,p),p);break;case 59:A+=";";default:if(ll(re=m_(A,e,t,y,v,o,d,K,ee=[],le=[],E,l),l),J===123)if(v===0)Ac(A,e,re,re,ee,l,E,d,le);else switch(S===99&&Dt(A,3)===110?100:S){case 100:case 108:case 109:case 115:Ac(n,re,re,i&&ll(m_(n,re,re,0,0,o,d,K,o,ee=[],E,le),le),o,le,E,d,i?ee:le);break;default:Ac(A,re,re,re,[""],le,0,d,le)}}y=v=N=0,B=H=1,K=A="",E=c;break;case 58:E=1+gr(A),N=U;default:if(B<1){if(J==123)--B;else if(J==125&&B++==0&&G1()==125)continue}switch(A+=Np(J),J*B){case 38:H=v>0?1:(A+="\f",-1);break;case 44:d[y++]=(gr(A)-1)*H,H=1;break;case 64:As()===45&&(A+=_f(er())),S=As(),v=E=gr(K=A+=eS(Rc())),J++;break;case 45:U===45&&gr(A)==2&&(B=0)}}return l}function m_(n,e,t,i,o,l,c,d,p,y,v,E){for(var S=o-1,N=o===0?l:[""],U=g0(N),B=0,b=0,H=0;B<i;++B)for(var J=0,K=qo(n,S+1,S=p0(b=c[B])),ee=n;J<U;++J)(ee=m0(b>0?N[J]+" "+K:ke(K,/&\f/g,N[J])))&&(p[H++]=ee);return ph(n,e,t,o===0?dh:d,p,y,v,E)}function nS(n,e,t,i){return ph(n,e,t,d0,Np(K1()),qo(n,2,-2),0,i)}function g_(n,e,t,i,o){return ph(n,e,t,xp,qo(n,0,i),qo(n,i+1,-1),i,o)}function _0(n,e,t){switch(W1(n,e)){case 5103:return $e+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+n+n;case 4789:return ml+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+n+ml+n+Xe+n+n;case 5936:switch(Dt(n,e+11)){case 114:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return $e+n+Xe+n+n;case 6165:return $e+n+Xe+"flex-"+n+n;case 5187:return $e+n+ke(n,/(\w+).+(:[^]+)/,$e+"box-$1$2"+Xe+"flex-$1$2")+n;case 5443:return $e+n+Xe+"flex-item-"+ke(n,/flex-|-self/g,"")+(zr(n,/flex-|baseline/)?"":Xe+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return $e+n+Xe+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return $e+n+Xe+ke(n,"shrink","negative")+n;case 5292:return $e+n+Xe+ke(n,"basis","preferred-size")+n;case 6060:return $e+"box-"+ke(n,"-grow","")+$e+n+Xe+ke(n,"grow","positive")+n;case 4554:return $e+ke(n,/([^-])(transform)/g,"$1"+$e+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+n+n;case 4200:if(!zr(n,/flex-|baseline/))return Xe+"grid-column-align"+qo(n,e)+n;break;case 2592:case 3360:return Xe+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,zr(i.props,/grid-\w+-end/)})?~Sc(n+(t=t[e].value),"span",0)?n:Xe+ke(n,"-start","")+n+Xe+"grid-row-span:"+(~Sc(t,"span",0)?zr(t,/\d+/):+zr(t,/\d+/)-+zr(n,/\d+/))+";":Xe+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return zr(i.props,/grid-\w+-start/)})?n:Xe+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,$e+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gr(n)-1-e>6)switch(Dt(n,e+1)){case 109:if(Dt(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+ml+(Dt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Sc(n,"stretch",0)?_0(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,c,d,p,y){return Xe+o+":"+l+y+(c?Xe+o+"-span:"+(d?p:+p-+l)+y:"")+n});case 4949:if(Dt(n,e+6)===121)return ke(n,":",":"+$e)+n;break;case 6444:switch(Dt(n,Dt(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Dt(n,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+Xe+"$2box$3")+n;case 100:return ke(n,":",":"+Xe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Bc(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function rS(n,e,t,i){switch(n.type){case q1:if(n.children.length)break;case $1:case xp:return n.return=n.return||n.value;case d0:return"";case f0:return n.return=n.value+"{"+Bc(n.children,i)+"}";case dh:if(!gr(n.value=n.props.join(",")))return""}return gr(t=Bc(n.children,i))?n.return=n.value+"{"+t+"}":""}function iS(n){var e=g0(n);return function(t,i,o,l){for(var c="",d=0;d<e;d++)c+=n[d](t,i,o,l)||"";return c}}function sS(n){return function(e){e.root||(e=e.return)&&n(e)}}function oS(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case xp:n.return=_0(n.value,n.length,t);return;case f0:return Bc([Pi(n,{value:ke(n.value,"@","@"+$e)})],i);case dh:if(n.length)return H1(t=n.props,function(o){switch(zr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":bo(Pi(n,{props:[ke(o,/:(read-\w+)/,":"+ml+"$1")]})),bo(Pi(n,{props:[o]})),zf(n,{props:p_(t,i)});break;case"::placeholder":bo(Pi(n,{props:[ke(o,/:(plac\w+)/,":"+$e+"input-$1")]})),bo(Pi(n,{props:[ke(o,/:(plac\w+)/,":"+ml+"$1")]})),bo(Pi(n,{props:[ke(o,/:(plac\w+)/,Xe+"input-$1")]})),bo(Pi(n,{props:[o]})),zf(n,{props:p_(t,i)});break}return""})}}var aS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tn={},Ho=typeof process<"u"&&Tn!==void 0&&(Tn.REACT_APP_SC_ATTR||Tn.SC_ATTR)||"data-styled",v0="active",w0="data-styled-version",gh="6.1.17",Dp=`/*!sc*/
`,zc=typeof window<"u"&&"HTMLElement"in window,lS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==""?Tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.SC_DISABLE_SPEEDY!==void 0&&Tn.SC_DISABLE_SPEEDY!==""&&Tn.SC_DISABLE_SPEEDY!=="false"&&Tn.SC_DISABLE_SPEEDY),uS={},yh=Object.freeze([]),Ko=Object.freeze({});function E0(n,e,t){return t===void 0&&(t=Ko),n.theme!==t.theme&&n.theme||e||t.theme}var T0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hS=/(^-|-$)/g;function y_(n){return n.replace(cS,"-").replace(hS,"")}var dS=/(a)(d)/gi,mc=52,__=function(n){return String.fromCharCode(n+(n>25?39:97))};function Wf(n){var e,t="";for(e=Math.abs(n);e>mc;e=e/mc|0)t=__(e%mc)+t;return(__(e%mc)+t).replace(dS,"$1-$2")}var vf,I0=5381,Fo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},S0=function(n){return Fo(I0,n)};function R0(n){return Wf(S0(n)>>>0)}function fS(n){return n.displayName||n.name||"Component"}function wf(n){return typeof n=="string"&&!0}var A0=typeof Symbol=="function"&&Symbol.for,C0=A0?Symbol.for("react.memo"):60115,pS=A0?Symbol.for("react.forward_ref"):60112,mS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},P0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yS=((vf={})[pS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vf[C0]=P0,vf);function v_(n){return("type"in(e=n)&&e.type.$$typeof)===C0?P0:"$$typeof"in n?yS[n.$$typeof]:mS;var e}var _S=Object.defineProperty,vS=Object.getOwnPropertyNames,w_=Object.getOwnPropertySymbols,wS=Object.getOwnPropertyDescriptor,ES=Object.getPrototypeOf,E_=Object.prototype;function k0(n,e,t){if(typeof e!="string"){if(E_){var i=ES(e);i&&i!==E_&&k0(n,i,t)}var o=vS(e);w_&&(o=o.concat(w_(e)));for(var l=v_(n),c=v_(e),d=0;d<o.length;++d){var p=o[d];if(!(p in gS||t&&t[p]||c&&p in c||l&&p in l)){var y=wS(e,p);try{_S(n,p,y)}catch{}}}}return n}function Go(n){return typeof n=="function"}function Op(n){return typeof n=="object"&&"styledComponentId"in n}function Ts(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Hf(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Pl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Kf(n,e,t){if(t===void 0&&(t=!1),!t&&!Pl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Kf(n[i],e[i]);else if(Pl(e))for(var i in e)n[i]=Kf(n[i],e[i]);return n}function bp(n,e){Object.defineProperty(n,"toString",{value:e})}function Fl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var TS=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;e>=l;)if((l<<=1)<0)throw Fl(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,t.length);c<p;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),l=o+i,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(Dp);return t},n}(),Cc=new Map,$c=new Map,Pc=1,gc=function(n){if(Cc.has(n))return Cc.get(n);for(;$c.has(Pc);)Pc++;var e=Pc++;return Cc.set(n,e),$c.set(e,n),e},IS=function(n,e){Pc=e+1,Cc.set(n,e),$c.set(e,n)},SS="style[".concat(Ho,"][").concat(w0,'="').concat(gh,'"]'),RS=new RegExp("^".concat(Ho,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),AS=function(n,e,t){for(var i,o=t.split(","),l=0,c=o.length;l<c;l++)(i=o[l])&&n.registerName(e,i)},CS=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Dp),o=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(RS);if(p){var y=0|parseInt(p[1],10),v=p[2];y!==0&&(IS(v,y),AS(n,v,p[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(d)}}},T_=function(n){for(var e=document.querySelectorAll(SS),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(Ho)!==v0&&(CS(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function PS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var x0=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Ho,"]")));return p[p.length-1]}(t),l=o!==void 0?o.nextSibling:null;i.setAttribute(Ho,v0),i.setAttribute(w0,gh);var c=PS();return c&&i.setAttribute("nonce",c),t.insertBefore(i,l),i},kS=function(){function n(e){this.element=x0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var c=i[o];if(c.ownerNode===t)return c}throw Fl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),xS=function(){function n(e){this.element=x0(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),NS=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),I_=zc,DS={isServer:!zc,useCSSOMInjection:!lS},qc=function(){function n(e,t,i){e===void 0&&(e=Ko),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},DS),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&zc&&I_&&(I_=!1,T_(this)),bp(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",y=function(E){var S=function(H){return $c.get(H)}(E);if(S===void 0)return"continue";var N=l.names.get(S),U=c.getGroup(E);if(N===void 0||!N.size||U.length===0)return"continue";var B="".concat(Ho,".g").concat(E,'[id="').concat(S,'"]'),b="";N!==void 0&&N.forEach(function(H){H.length>0&&(b+="".concat(H,","))}),p+="".concat(U).concat(B,'{content:"').concat(b,'"}').concat(Dp)},v=0;v<d;v++)y(v);return p}(o)})}return n.registerId=function(e){return gc(e)},n.prototype.rehydrate=function(){!this.server&&zc&&T_(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new NS(o):i?new kS(o):new xS(o)}(this.options),new TS(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(gc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(gc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(gc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),OS=/&/g,bS=/^\s*\/\/.*$/gm;function N0(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=N0(t.children,e)),t})}function LS(n){var e,t,i,o=Ko,l=o.options,c=l===void 0?Ko:l,d=o.plugins,p=d===void 0?yh:d,y=function(S,N,U){return U.startsWith(t)&&U.endsWith(t)&&U.replaceAll(t,"").length>0?".".concat(e):S},v=p.slice();v.push(function(S){S.type===dh&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(OS,t).replace(i,y))}),c.prefix&&v.push(oS),v.push(rS);var E=function(S,N,U,B){N===void 0&&(N=""),U===void 0&&(U=""),B===void 0&&(B="&"),e=B,t=N,i=new RegExp("\\".concat(t,"\\b"),"g");var b=S.replace(bS,""),H=tS(U||N?"".concat(U," ").concat(N," { ").concat(b," }"):b);c.namespace&&(H=N0(H,c.namespace));var J=[];return Bc(H,iS(v.concat(sS(function(K){return J.push(K)})))),J};return E.hash=p.length?p.reduce(function(S,N){return N.name||Fl(15),Fo(S,N.name)},I0).toString():"",E}var VS=new qc,Gf=LS(),D0=Jn.createContext({shouldForwardProp:void 0,styleSheet:VS,stylis:Gf});D0.Consumer;Jn.createContext(void 0);function Qf(){return Y.useContext(D0)}var MS=function(){function n(e,t){var i=this;this.inject=function(o,l){l===void 0&&(l=Gf);var c=i.name+l.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,bp(this,function(){throw Fl(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Gf),this.name+e.hash},n}(),US=function(n){return n>="A"&&n<="Z"};function S_(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;US(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var O0=function(n){return n==null||n===!1||n===""},b0=function(n){var e,t,i=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!O0(l)&&(Array.isArray(l)&&l.isCss||Go(l)?i.push("".concat(S_(o),":"),l,";"):Pl(l)?i.push.apply(i,Cl(Cl(["".concat(o," {")],b0(l),!1),["}"],!1)):i.push("".concat(S_(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in aS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Vi(n,e,t,i){if(O0(n))return[];if(Op(n))return[".".concat(n.styledComponentId)];if(Go(n)){if(!Go(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return Vi(o,e,t,i)}var l;return n instanceof MS?t?(n.inject(t,i),[n.getName(i)]):[n]:Pl(n)?b0(n):Array.isArray(n)?Array.prototype.concat.apply(yh,n.map(function(c){return Vi(c,e,t,i)})):[n.toString()]}function L0(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Go(t)&&!Op(t))return!1}return!0}var FS=S0(gh),jS=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&L0(e),this.componentId=t,this.baseHash=Fo(FS,t),this.baseStyle=i,qc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Ts(o,this.staticRulesId);else{var l=Hf(Vi(this.rules,e,t,i)),c=Wf(Fo(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}o=Ts(o,c),this.staticRulesId=c}else{for(var p=Fo(this.baseHash,i.hash),y="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")y+=E;else if(E){var S=Hf(Vi(E,e,t,i));p=Fo(p,S+v),y+=S}}if(y){var N=Wf(p>>>0);t.hasNameForId(this.componentId,N)||t.insertRules(this.componentId,N,i(y,".".concat(N),void 0,this.componentId)),o=Ts(o,N)}}return o},n}(),Lp=Jn.createContext(void 0);Lp.Consumer;var Ef={};function BS(n,e,t){var i=Op(n),o=n,l=!wf(n),c=e.attrs,d=c===void 0?yh:c,p=e.componentId,y=p===void 0?function(ee,le){var re=typeof ee!="string"?"sc":y_(ee);Ef[re]=(Ef[re]||0)+1;var A="".concat(re,"-").concat(R0(gh+re+Ef[re]));return le?"".concat(le,"-").concat(A):A}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(ee){return wf(ee)?"styled.".concat(ee):"Styled(".concat(fS(ee),")")}(n):v,S=e.displayName&&e.componentId?"".concat(y_(e.displayName),"-").concat(e.componentId):e.componentId||y,N=i&&o.attrs?o.attrs.concat(d).filter(Boolean):d,U=e.shouldForwardProp;if(i&&o.shouldForwardProp){var B=o.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;U=function(ee,le){return B(ee,le)&&b(ee,le)}}else U=B}var H=new jS(t,S,i?o.componentStyle:void 0);function J(ee,le){return function(re,A,I){var C=re.attrs,x=re.componentStyle,O=re.defaultProps,V=re.foldedComponentIds,P=re.styledComponentId,tt=re.target,Rt=Jn.useContext(Lp),At=Qf(),je=re.shouldForwardProp||At.shouldForwardProp,se=E0(A,Rt,O)||Ko,de=function(Ce,Pe,De){for(var Ne,Ve=Gt(Gt({},Pe),{className:void 0,theme:De}),ot=0;ot<Ce.length;ot+=1){var nn=Go(Ne=Ce[ot])?Ne(Ve):Ne;for(var Yt in nn)Ve[Yt]=Yt==="className"?Ts(Ve[Yt],nn[Yt]):Yt==="style"?Gt(Gt({},Ve[Yt]),nn[Yt]):nn[Yt]}return Pe.className&&(Ve.className=Ts(Ve.className,Pe.className)),Ve}(C,A,se),oe=de.as||tt,L={};for(var W in de)de[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&de.theme===se||(W==="forwardedAs"?L.as=de.forwardedAs:je&&!je(W,oe)||(L[W]=de[W]));var ge=function(Ce,Pe){var De=Qf(),Ne=Ce.generateAndInjectStyles(Pe,De.styleSheet,De.stylis);return Ne}(x,de),Ae=Ts(V,P);return ge&&(Ae+=" "+ge),de.className&&(Ae+=" "+de.className),L[wf(oe)&&!T0.has(oe)?"class":"className"]=Ae,I&&(L.ref=I),Y.createElement(oe,L)}(K,ee,le)}J.displayName=E;var K=Jn.forwardRef(J);return K.attrs=N,K.componentStyle=H,K.displayName=E,K.shouldForwardProp=U,K.foldedComponentIds=i?Ts(o.foldedComponentIds,o.styledComponentId):"",K.styledComponentId=S,K.target=i?o.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=i?function(le){for(var re=[],A=1;A<arguments.length;A++)re[A-1]=arguments[A];for(var I=0,C=re;I<C.length;I++)Kf(le,C[I],!0);return le}({},o.defaultProps,ee):ee}}),bp(K,function(){return".".concat(K.styledComponentId)}),l&&k0(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function R_(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var A_=function(n){return Object.assign(n,{isCss:!0})};function Vp(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Go(n)||Pl(n))return A_(Vi(R_(yh,Cl([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Vi(i):A_(Vi(R_(i,e)))}function Yf(n,e,t){if(t===void 0&&(t=Ko),!e)throw Fl(1,e);var i=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return n(e,t,Vp.apply(void 0,Cl([o],l,!1)))};return i.attrs=function(o){return Yf(n,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return Yf(n,e,Gt(Gt({},t),o))},i}var V0=function(n){return Yf(BS,n)},Re=V0;T0.forEach(function(n){Re[n]=V0(n)});var zS=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=L0(e),qc.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,i,o){var l=o(Hf(Vi(this.rules,t,i,o)),""),c=this.componentId+e;i.insertRules(c,c,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,i,o){e>2&&qc.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,t,i,o)},n}();function M0(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=Vp.apply(void 0,Cl([n],e,!1)),o="sc-global-".concat(R0(JSON.stringify(i))),l=new zS(i,o),c=function(p){var y=Qf(),v=Jn.useContext(Lp),E=Jn.useRef(y.styleSheet.allocateGSInstance(o)).current;return y.styleSheet.server&&d(E,p,y.styleSheet,v,y.stylis),Jn.useLayoutEffect(function(){if(!y.styleSheet.server)return d(E,p,y.styleSheet,v,y.stylis),function(){return l.removeStyles(E,y.styleSheet)}},[E,p,y.styleSheet,v,y.stylis]),null};function d(p,y,v,E,S){if(l.isStatic)l.renderStyles(p,uS,v,S);else{var N=Gt(Gt({},y),{theme:E0(y,E,c.defaultProps)});l.renderStyles(p,N,v,S)}}return Jn.memo(c)}var C_={};/**
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
 */const U0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$S=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},F0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,N=y&63;p||(N=64,c||(S=64)),i.push(t[v],t[E],t[S],t[N])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(U0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$S(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||E==null)throw new qS;const S=l<<2|d>>4;if(i.push(S),y!==64){const N=d<<4&240|y>>2;if(i.push(N),E!==64){const U=y<<6&192|E;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WS=function(n){const e=U0(n);return F0.encodeByteArray(e,!0)},Wc=function(n){return WS(n).replace(/\./g,"")},j0=function(n){try{return F0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KS=()=>HS().__FIREBASE_DEFAULTS__,GS=()=>{if(typeof process>"u"||typeof C_>"u")return;const n=C_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},QS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&j0(n[1]);return e&&JSON.parse(e)},_h=()=>{try{return KS()||GS()||QS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},B0=n=>{var e,t;return(t=(e=_h())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},z0=n=>{const e=B0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},$0=()=>{var n;return(n=_h())===null||n===void 0?void 0:n.config},q0=n=>{var e;return(e=_h())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class YS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function W0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wc(JSON.stringify(t)),Wc(JSON.stringify(c)),""].join(".")}/**
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
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function JS(){var n;const e=(n=_h())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nR(){const n=Qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function rR(){return!JS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iR(){try{return typeof indexedDB=="object"}catch{return!1}}function sR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const oR="FirebaseError";class pn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=oR,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jl.prototype.create)}}class jl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?aR(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new pn(o,d,i)}}function aR(n,e){return n.replace(lR,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const lR=/\{\$([^}]+)}/g;function uR(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(P_(l)&&P_(c)){if(!Hc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function P_(n){return n!==null&&typeof n=="object"}/**
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
 */function Bl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ul(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function cl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cR(n,e){const t=new hR(n,e);return t.subscribe.bind(t)}class hR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");dR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Tf),o.error===void 0&&(o.error=Tf),o.complete===void 0&&(o.complete=Tf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Tf(){}/**
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
 */function it(n){return n&&n._delegate?n._delegate:n}class Bi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class fR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new YS;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mR(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:pR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pR(n){return n===Es?void 0:n}function mR(n){return n.instantiationMode==="EAGER"}/**
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
 */class gR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const yR={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},_R=Le.INFO,vR={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},wR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=vR[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mp{constructor(e){this.name=e,this._logLevel=_R,this._logHandler=wR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const ER=(n,e)=>e.some(t=>n instanceof t);let k_,x_;function TR(){return k_||(k_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function IR(){return x_||(x_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H0=new WeakMap,Xf=new WeakMap,K0=new WeakMap,If=new WeakMap,Up=new WeakMap;function SR(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Mi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&H0.set(t,n)}).catch(()=>{}),Up.set(e,n),e}function RR(n){if(Xf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Xf.set(n,e)}let Jf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||K0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function AR(n){Jf=n(Jf)}function CR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Sf(this),e,...t);return K0.set(i,e.sort?e.sort():[e]),Mi(i)}:IR().includes(n)?function(...e){return n.apply(Sf(this),e),Mi(H0.get(this))}:function(...e){return Mi(n.apply(Sf(this),e))}}function PR(n){return typeof n=="function"?CR(n):(n instanceof IDBTransaction&&RR(n),ER(n,TR())?new Proxy(n,Jf):n)}function Mi(n){if(n instanceof IDBRequest)return SR(n);if(If.has(n))return If.get(n);const e=PR(n);return e!==n&&(If.set(n,e),Up.set(e,n)),e}const Sf=n=>Up.get(n);function kR(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Mi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Mi(c.result),p.oldVersion,p.newVersion,Mi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const xR=["get","getKey","getAll","getAllKeys","count"],NR=["put","add","delete","clear"],Rf=new Map;function N_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=NR.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||xR.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Rf.set(e,l),l}AR(n=>({...n,get:(e,t,i)=>N_(e,t)||n.get(e,t,i),has:(e,t)=>!!N_(e,t)||n.has(e,t)}));/**
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
 */class DR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(OR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function OR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zf="@firebase/app",D_="0.10.13";/**
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
 */const Gr=new Mp("@firebase/app"),bR="@firebase/app-compat",LR="@firebase/analytics-compat",VR="@firebase/analytics",MR="@firebase/app-check-compat",UR="@firebase/app-check",FR="@firebase/auth",jR="@firebase/auth-compat",BR="@firebase/database",zR="@firebase/data-connect",$R="@firebase/database-compat",qR="@firebase/functions",WR="@firebase/functions-compat",HR="@firebase/installations",KR="@firebase/installations-compat",GR="@firebase/messaging",QR="@firebase/messaging-compat",YR="@firebase/performance",XR="@firebase/performance-compat",JR="@firebase/remote-config",ZR="@firebase/remote-config-compat",eA="@firebase/storage",tA="@firebase/storage-compat",nA="@firebase/firestore",rA="@firebase/vertexai-preview",iA="@firebase/firestore-compat",sA="firebase",oA="10.14.1";/**
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
 */const ep="[DEFAULT]",aA={[Zf]:"fire-core",[bR]:"fire-core-compat",[VR]:"fire-analytics",[LR]:"fire-analytics-compat",[UR]:"fire-app-check",[MR]:"fire-app-check-compat",[FR]:"fire-auth",[jR]:"fire-auth-compat",[BR]:"fire-rtdb",[zR]:"fire-data-connect",[$R]:"fire-rtdb-compat",[qR]:"fire-fn",[WR]:"fire-fn-compat",[HR]:"fire-iid",[KR]:"fire-iid-compat",[GR]:"fire-fcm",[QR]:"fire-fcm-compat",[YR]:"fire-perf",[XR]:"fire-perf-compat",[JR]:"fire-rc",[ZR]:"fire-rc-compat",[eA]:"fire-gcs",[tA]:"fire-gcs-compat",[nA]:"fire-fst",[iA]:"fire-fst-compat",[rA]:"fire-vertex","fire-js":"fire-js",[sA]:"fire-js-all"};/**
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
 */const Kc=new Map,lA=new Map,tp=new Map;function O_(n,e){try{n.container.addComponent(e)}catch(t){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xs(n){const e=n.name;if(tp.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;tp.set(e,n);for(const t of Kc.values())O_(t,n);for(const t of lA.values())O_(t,n);return!0}function vh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n.settings!==void 0}/**
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
 */const uA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ui=new jl("app","Firebase",uA);/**
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
 */class cA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ui.create("app-deleted",{appName:this._name})}}/**
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
 */const Fs=oA;function G0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:ep,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ui.create("bad-app-name",{appName:String(o)});if(t||(t=$0()),!t)throw Ui.create("no-options");const l=Kc.get(o);if(l){if(Hc(t,l.options)&&Hc(i,l.config))return l;throw Ui.create("duplicate-app",{appName:o})}const c=new gR(o);for(const p of tp.values())c.addComponent(p);const d=new cA(t,i,c);return Kc.set(o,d),d}function Fp(n=ep){const e=Kc.get(n);if(!e&&n===ep&&$0())return G0();if(!e)throw Ui.create("no-app",{appName:n});return e}function _r(n,e,t){var i;let o=(i=aA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(d.join(" "));return}xs(new Bi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const hA="firebase-heartbeat-database",dA=1,kl="firebase-heartbeat-store";let Af=null;function Q0(){return Af||(Af=kR(hA,dA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kl)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ui.create("idb-open",{originalErrorMessage:n.message})})),Af}async function fA(n){try{const t=(await Q0()).transaction(kl),i=await t.objectStore(kl).get(Y0(n));return await t.done,i}catch(e){if(e instanceof pn)Gr.warn(e.message);else{const t=Ui.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(t.message)}}}async function b_(n,e){try{const i=(await Q0()).transaction(kl,"readwrite");await i.objectStore(kl).put(e,Y0(n)),await i.done}catch(t){if(t instanceof pn)Gr.warn(t.message);else{const i=Ui.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gr.warn(i.message)}}}function Y0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pA=1024,mA=30*24*60*60*1e3;class gA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _A(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=L_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=mA}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Gr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=L_(),{heartbeatsToSend:i,unsentEntries:o}=yA(this._heartbeatsCache.heartbeats),l=Wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Gr.warn(t),""}}}function L_(){return new Date().toISOString().substring(0,10)}function yA(n,e=pA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),V_(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),V_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class _A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iR()?sR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return b_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return b_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function V_(n){return Wc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function vA(n){xs(new Bi("platform-logger",e=>new DR(e),"PRIVATE")),xs(new Bi("heartbeat",e=>new gA(e),"PRIVATE")),_r(Zf,D_,n),_r(Zf,D_,"esm2017"),_r("fire-js","")}vA("");var wA="firebase",EA="10.14.1";/**
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
 */_r(wA,EA,"app");function jp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function X0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TA=X0,J0=new jl("auth","Firebase",X0());/**
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
 */const Gc=new Mp("@firebase/auth");function IA(n,...e){Gc.logLevel<=Le.WARN&&Gc.warn(`Auth (${Fs}): ${n}`,...e)}function kc(n,...e){Gc.logLevel<=Le.ERROR&&Gc.error(`Auth (${Fs}): ${n}`,...e)}/**
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
 */function Vn(n,...e){throw zp(n,...e)}function tr(n,...e){return zp(n,...e)}function Bp(n,e,t){const i=Object.assign(Object.assign({},TA()),{[e]:t});return new jl("auth","Firebase",i).create(e,{appName:n.name})}function Kr(n){return Bp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function SA(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Vn(n,"argument-error"),Bp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return J0.create(n,...e)}function we(n,e,...t){if(!n)throw zp(e,...t)}function qr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kc(e),new Error(e)}function Qr(n,e){n||qr(e)}/**
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
 */function np(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function RA(){return M_()==="http:"||M_()==="https:"}function M_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function AA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RA()||eR()||"connection"in navigator)?navigator.onLine:!0}function CA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class zl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qr(t>e,"Short delay should be less than long delay!"),this.isMobile=XS()||tR()}get(){return AA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $p(n,e){Qr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Z0{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kA=new zl(3e4,6e4);function Zr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Sr(n,e,t,i,o={}){return ew(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Bl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return ZS()||(y.referrerPolicy="no-referrer"),Z0.fetch()(tw(n,n.config.apiHost,t,d),y)})}async function ew(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},PA),e);try{const o=new NA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw yc(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw yc(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw yc(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw yc(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Bp(n,v,y);Vn(n,v)}}catch(o){if(o instanceof pn)throw o;Vn(n,"network-request-failed",{message:String(o)})}}async function $l(n,e,t,i,o={}){const l=await Sr(n,e,t,i,o);return"mfaPendingCredential"in l&&Vn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function tw(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?$p(n.config,o):`${n.config.apiScheme}://${o}`}function xA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tr(this.auth,"network-request-failed")),kA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yc(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=tr(n,e,i);return o.customData._tokenResponse=t,o}function U_(n){return n!==void 0&&n.enterprise!==void 0}class DA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return xA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function OA(n,e){return Sr(n,"GET","/v2/recaptchaConfig",Zr(n,e))}/**
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
 */async function bA(n,e){return Sr(n,"POST","/v1/accounts:delete",e)}async function nw(n,e){return Sr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LA(n,e=!1){const t=it(n),i=await t.getIdToken(e),o=qp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:gl(Cf(o.auth_time)),issuedAtTime:gl(Cf(o.iat)),expirationTime:gl(Cf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Cf(n){return Number(n)*1e3}function qp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=j0(t);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function F_(n){const e=qp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof pn&&VA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function VA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class MA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Qo(n,nw(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?rw(l.providerUserInfo):[],d=FA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new rp(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function UA(n){const e=it(n);await Qc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function rw(n){return n.map(e=>{var{providerId:t}=e,i=jp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function jA(n,e){const t=await ew(n,{},async()=>{const i=Bl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=tw(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Z0.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function BA(n,e){return Sr(n,"POST","/v2/accounts:revokeToken",Zr(n,e))}/**
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
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=F_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await jA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new jo;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return qr("not implemented")}}/**
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
 */function Ci(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=jp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new rp(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return LA(this,e)}reload(){return UA(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Qc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Kr(this.auth));const e=await this.getIdToken();return await Qo(this,bA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:K,emailVerified:ee,isAnonymous:le,providerData:re,stsTokenManager:A}=t;we(K&&A,e,"internal-error");const I=jo.fromJSON(this.name,A);we(typeof K=="string",e,"internal-error"),Ci(E,e.name),Ci(S,e.name),we(typeof ee=="boolean",e,"internal-error"),we(typeof le=="boolean",e,"internal-error"),Ci(N,e.name),Ci(U,e.name),Ci(B,e.name),Ci(b,e.name),Ci(H,e.name),Ci(J,e.name);const C=new Wr({uid:K,auth:e,email:S,emailVerified:ee,displayName:E,isAnonymous:le,photoURL:U,phoneNumber:N,tenantId:B,stsTokenManager:I,createdAt:H,lastLoginAt:J});return re&&Array.isArray(re)&&(C.providerData=re.map(x=>Object.assign({},x))),b&&(C._redirectEventId=b),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new jo;o.updateFromServerResponse(t);const l=new Wr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Qc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?rw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new jo;d.updateFromIdToken(i);const p=new Wr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new rp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const j_=new Map;function Hr(n){Qr(n instanceof Function,"Expected a class definition");let e=j_.get(n);return e?(Qr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,j_.set(n,e),e)}/**
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
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}iw.type="NONE";const B_=iw;/**
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
 */function xc(n,e,t){return`firebase:${n}:${e}:${t}`}class Bo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=xc(this.userKey,o.apiKey,l),this.fullPersistenceKey=xc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Bo(Hr(B_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Hr(B_);const c=xc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const E=Wr._fromJSON(e,v);y!==l&&(d=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Bo(l,e,i))}}/**
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
 */function z_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cw(e))return"Blackberry";if(hw(e))return"Webos";if(ow(e))return"Safari";if((e.includes("chrome/")||aw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sw(n=Qt()){return/firefox\//i.test(n)}function ow(n=Qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aw(n=Qt()){return/crios\//i.test(n)}function lw(n=Qt()){return/iemobile/i.test(n)}function uw(n=Qt()){return/android/i.test(n)}function cw(n=Qt()){return/blackberry/i.test(n)}function hw(n=Qt()){return/webos/i.test(n)}function Wp(n=Qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function zA(n=Qt()){var e;return Wp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $A(){return nR()&&document.documentMode===10}function dw(n=Qt()){return Wp(n)||uw(n)||hw(n)||cw(n)||/windows phone/i.test(n)||lw(n)}/**
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
 */function fw(n,e=[]){let t;switch(n){case"Browser":t=z_(Qt());break;case"Worker":t=`${z_(Qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Fs}/${i}`}/**
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
 */class qA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function WA(n,e={}){return Sr(n,"GET","/v2/passwordPolicy",Zr(n,e))}/**
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
 */const HA=6;class KA{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:HA,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class GA{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $_(this),this.idTokenSubscription=new $_(this),this.beforeStateQueue=new qA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Hr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nw(this,{idToken:e}),i=await Wr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Kr(this));const t=e?it(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WA(this),t=new KA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await BA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Hr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[Hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&IA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ei(n){return it(n)}class $_{constructor(e){this.auth=e,this.observer=null,this.addObserver=cR(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QA(n){wh=n}function pw(n){return wh.loadJS(n)}function YA(){return wh.recaptchaEnterpriseScript}function XA(){return wh.gapiScript}function JA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ZA="recaptcha-enterprise",eC="NO_RECAPTCHA";class tC{constructor(e){this.type=ZA,this.auth=ei(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{OA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new DA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;U_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(eC)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&U_(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=YA();p.length!==0&&(p+=d),pw(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function q_(n,e,t,i=!1){const o=new tC(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Yc(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await q_(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await q_(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
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
 */function nC(n,e){const t=vh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Hc(l,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function rC(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function iC(n,e,t){const i=ei(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=mw(e),{host:c,port:d}=sC(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),oC()}function mw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function sC(n){const e=mw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:W_(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:W_(c)}}}function W_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function oC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qr("not implemented")}_getIdTokenResponse(e){return qr("not implemented")}_linkToIdToken(e,t){return qr("not implemented")}_getReauthenticationResolver(e){return qr("not implemented")}}async function aC(n,e){return Sr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function lC(n,e){return $l(n,"POST","/v1/accounts:signInWithPassword",Zr(n,e))}async function uC(n,e){return Sr(n,"POST","/v1/accounts:sendOobCode",Zr(n,e))}async function cC(n,e){return uC(n,e)}/**
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
 */async function hC(n,e){return $l(n,"POST","/v1/accounts:signInWithEmailLink",Zr(n,e))}async function dC(n,e){return $l(n,"POST","/v1/accounts:signInWithEmailLink",Zr(n,e))}/**
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
 */class xl extends Hp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new xl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new xl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yc(e,t,"signInWithPassword",lC);case"emailLink":return hC(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yc(e,i,"signUpPassword",aC);case"emailLink":return dC(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zo(n,e){return $l(n,"POST","/v1/accounts:signInWithIdp",Zr(n,e))}/**
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
 */const fC="http://localhost";class Ns extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=jp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ns(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return zo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,zo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zo(e,t)}buildRequest(){const e={requestUri:fC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Bl(t)}return e}}/**
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
 */function pC(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mC(n){const e=ul(cl(n)).link,t=e?ul(cl(e)).deep_link_id:null,i=ul(cl(n)).deep_link_id;return(i?ul(cl(i)).link:null)||i||t||e||n}class Kp{constructor(e){var t,i,o,l,c,d;const p=ul(cl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,E=pC((o=p.mode)!==null&&o!==void 0?o:null);we(y&&v&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=mC(e);try{return new Kp(t)}catch{return null}}}/**
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
 */class oa{constructor(){this.providerId=oa.PROVIDER_ID}static credential(e,t){return xl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Kp.parseLink(t);return we(i,"argument-error"),xl._fromEmailAndCode(e,i.code,i.tenantId)}}oa.PROVIDER_ID="password";oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ql extends Gp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ki extends ql{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.FACEBOOK_SIGN_IN_METHOD="facebook.com";ki.PROVIDER_ID="facebook.com";/**
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
 */class xi extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ns._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xi.credentialFromTaggedObject(e)}static credentialFromError(e){return xi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xi.credential(t,i)}catch{return null}}}xi.GOOGLE_SIGN_IN_METHOD="google.com";xi.PROVIDER_ID="google.com";/**
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
 */class $r extends ql{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
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
 */class Ni extends ql{constructor(){super("twitter.com")}static credential(e,t){return Ns._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ni.credential(t,i)}catch{return null}}}Ni.TWITTER_SIGN_IN_METHOD="twitter.com";Ni.PROVIDER_ID="twitter.com";/**
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
 */async function gC(n,e){return $l(n,"POST","/v1/accounts:signUp",Zr(n,e))}/**
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
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Wr._fromIdTokenResponse(e,i,o),c=H_(i);return new Ds({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=H_(i);return new Ds({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function H_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Xc extends pn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Xc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Xc(e,t,i,o)}}function gw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Xc._fromErrorAndOperation(n,l,e,i):l})}async function yC(n,e,t=!1){const i=await Qo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ds._forOperation(n,"link",i)}/**
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
 */async function _C(n,e,t=!1){const{auth:i}=n;if(Zn(i.app))return Promise.reject(Kr(i));const o="reauthenticate";try{const l=await Qo(n,gw(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=qp(l.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),Ds._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Vn(i,"user-mismatch"),l}}/**
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
 */async function yw(n,e,t=!1){if(Zn(n.app))return Promise.reject(Kr(n));const i="signIn",o=await gw(n,i,e),l=await Ds._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function vC(n,e){return yw(ei(n),e)}/**
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
 */async function _w(n){const e=ei(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vw(n,e,t){const i=ei(n);await Yc(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",cC)}async function wC(n,e,t){if(Zn(n.app))return Promise.reject(Kr(n));const i=ei(n),c=await Yc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gC).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&_w(n),p}),d=await Ds._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function EC(n,e,t){return Zn(n.app)?Promise.reject(Kr(n)):vC(it(n),oa.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&_w(n),i})}/**
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
 */async function TC(n,e){return Sr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function ip(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=it(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Qo(i,TC(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function IC(n,e,t,i){return it(n).onIdTokenChanged(e,t,i)}function SC(n,e,t){return it(n).beforeAuthStateChanged(e,t)}const Jc="__sak";/**
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
 */class ww{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RC=1e3,AC=10;class Ew extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);$A()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,AC):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ew.type="LOCAL";const CC=Ew;/**
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
 */class Tw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tw.type="SESSION";const Iw=Tw;/**
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
 */function PC(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Eh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await PC(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
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
 */function Qp(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=Qp("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const S=E;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function vr(){return window}function xC(n){vr().location.href=n}/**
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
 */function Sw(){return typeof vr().WorkerGlobalScope<"u"&&typeof vr().importScripts=="function"}async function NC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function OC(){return Sw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",bC=1,Zc="firebaseLocalStorage",Aw="fbase_key";class Wl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Th(n,e){return n.transaction([Zc],e?"readwrite":"readonly").objectStore(Zc)}function LC(){const n=indexedDB.deleteDatabase(Rw);return new Wl(n).toPromise()}function sp(){const n=indexedDB.open(Rw,bC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Zc,{keyPath:Aw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Zc)?e(i):(i.close(),await LC(),e(await sp()))})})}async function K_(n,e,t){const i=Th(n,!0).put({[Aw]:e,value:t});return new Wl(i).toPromise()}async function VC(n,e){const t=Th(n,!1).get(e),i=await new Wl(t).toPromise();return i===void 0?null:i.value}function G_(n,e){const t=Th(n,!0).delete(e);return new Wl(t).toPromise()}const MC=800,UC=3;class Cw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>UC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(OC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await NC(),!this.activeServiceWorker)return;this.sender=new kC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sp();return await K_(e,Jc,"1"),await G_(e,Jc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>K_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>VC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>G_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Th(o,!1).getAll();return new Wl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cw.type="LOCAL";const FC=Cw;new zl(3e4,6e4);/**
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
 */function Pw(n,e){return e?Hr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jC(n){return yw(n.auth,new Yp(n),n.bypassAuthState)}function BC(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),_C(t,new Yp(n),n.bypassAuthState)}async function zC(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),yC(t,new Yp(n),n.bypassAuthState)}/**
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
 */class kw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return zC;case"reauthViaPopup":case"reauthViaRedirect":return BC;default:Vn(this.auth,"internal-error")}}resolve(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $C=new zl(2e3,1e4);async function qC(n,e,t){if(Zn(n.app))return Promise.reject(tr(n,"operation-not-supported-in-this-environment"));const i=ei(n);SA(n,e,Gp);const o=Pw(i,t);return new Is(i,"signInViaPopup",e,o).executeNotNull()}class Is extends kw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Is.currentPopupAction&&Is.currentPopupAction.cancel(),Is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Qr(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$C.get())};e()}}Is.currentPopupAction=null;/**
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
 */const WC="pendingRedirect",Nc=new Map;class HC extends kw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Nc.get(this.auth._key());if(!e){try{const i=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Nc.set(this.auth._key(),e)}return this.bypassAuthState||Nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(n,e){const t=YC(e),i=QC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function GC(n,e){Nc.set(n._key(),e)}function QC(n){return Hr(n._redirectPersistence)}function YC(n){return xc(WC,n.config.apiKey,n.name)}async function XC(n,e,t=!1){if(Zn(n.app))return Promise.reject(Kr(n));const i=ei(n),o=Pw(i,e),c=await new HC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const JC=10*60*1e3;class ZC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!xw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q_(e))}saveEventToCache(e){this.cachedEventUids.add(Q_(e)),this.lastProcessedEventTime=Date.now()}}function Q_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xw(n);default:return!1}}/**
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
 */async function tP(n,e={}){return Sr(n,"GET","/v1/projects",e)}/**
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
 */const nP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rP=/^https?/;async function iP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await tP(n);for(const t of e)try{if(sP(t))return}catch{}Vn(n,"unauthorized-domain")}function sP(n){const e=np(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!rP.test(t))return!1;if(nP.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const oP=new zl(3e4,6e4);function Y_(){const n=vr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function aP(n){return new Promise((e,t)=>{var i,o,l;function c(){Y_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Y_(),t(tr(n,"network-request-failed"))},timeout:oP.get()})}if(!((o=(i=vr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=vr().gapi)===null||l===void 0)&&l.load)c();else{const d=JA("iframefcb");return vr()[d]=()=>{gapi.load?c():t(tr(n,"network-request-failed"))},pw(`${XA()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Dc=null,e})}let Dc=null;function lP(n){return Dc=Dc||aP(n),Dc}/**
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
 */const uP=new zl(5e3,15e3),cP="__/auth/iframe",hP="emulator/auth/iframe",dP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pP(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$p(e,hP):`https://${n.config.authDomain}/${cP}`,i={apiKey:e.apiKey,appName:n.name,v:Fs},o=fP.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Bl(i).slice(1)}`}async function mP(n){const e=await lP(n),t=vr().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:pP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dP,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=tr(n,"network-request-failed"),d=vr().setTimeout(()=>{l(c)},uP.get());function p(){vr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const gP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yP=500,_P=600,vP="_blank",wP="http://localhost";class X_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EP(n,e,t,i=yP,o=_P){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},gP),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Qt().toLowerCase();t&&(d=aw(y)?vP:t),sw(y)&&(e=e||wP,p.scrollbars="yes");const v=Object.entries(p).reduce((S,[N,U])=>`${S}${N}=${U},`,"");if(zA(y)&&d!=="_self")return TP(e||"",d),new X_(null);const E=window.open(e||"",d,v);we(E,n,"popup-blocked");try{E.focus()}catch{}return new X_(E)}function TP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const IP="__/auth/handler",SP="emulator/auth/handler",RP=encodeURIComponent("fac");async function J_(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Fs,eventId:o};if(e instanceof Gp){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",uR(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof ql){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${RP}=${encodeURIComponent(p)}`:"";return`${AP(n)}?${Bl(d).slice(1)}${y}`}function AP({config:n}){return n.emulator?$p(n,SP):`https://${n.authDomain}/${IP}`}/**
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
 */const Pf="webStorageSupport";class CP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iw,this._completeRedirectFn=XC,this._overrideRedirectResult=GC}async _openPopup(e,t,i,o){var l;Qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await J_(e,t,i,np(),o);return EP(e,c,Qp())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await J_(e,t,i,np(),o);return xC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await mP(e),i=new ZC(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pf,{type:Pf},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Pf];c!==void 0&&t(!!c),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dw()||ow()||Wp()}}const PP=CP;var Z_="@firebase/auth",ev="1.7.9";/**
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
 */class kP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NP(n){xs(new Bi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fw(n)},y=new GA(i,o,l,p);return rC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xs(new Bi("auth-internal",e=>{const t=ei(e.getProvider("auth").getImmediate());return(i=>new kP(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(Z_,ev,xP(n)),_r(Z_,ev,"esm2017")}/**
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
 */const DP=5*60,OP=q0("authIdTokenMaxAge")||DP;let tv=null;const bP=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>OP)return;const o=t==null?void 0:t.token;tv!==o&&(tv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function LP(n=Fp()){const e=vh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=nC(n,{popupRedirectResolver:PP,persistence:[FC,CC,Iw]}),i=q0("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bP(l.toString());SC(t,c,()=>c(t.currentUser)),IC(t,d=>c(d))}}const o=B0("auth");return o&&iC(t,`http://${o}`),t}function VP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}QA({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=tr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",VP().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NP("Browser");var nv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,Nw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,I){function C(){}C.prototype=I.prototype,A.D=I.prototype,A.prototype=new C,A.prototype.constructor=A,A.C=function(x,O,V){for(var P=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)P[tt-2]=arguments[tt];return I.prototype[O].apply(x,P)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(A,I,C){C||(C=0);var x=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)x[O]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(O=0;16>O;++O)x[O]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=A.g[0],C=A.g[1],O=A.g[2];var V=A.g[3],P=I+(V^C&(O^V))+x[0]+3614090360&4294967295;I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[1]+3905402710&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[2]+606105819&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[3]+3250441966&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[4]+4118548399&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[5]+1200080426&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[6]+2821735955&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[7]+4249261313&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[8]+1770035416&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[9]+2336552879&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[10]+4294925233&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[11]+2304563134&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(V^C&(O^V))+x[12]+1804603682&4294967295,I=C+(P<<7&4294967295|P>>>25),P=V+(O^I&(C^O))+x[13]+4254626195&4294967295,V=I+(P<<12&4294967295|P>>>20),P=O+(C^V&(I^C))+x[14]+2792965006&4294967295,O=V+(P<<17&4294967295|P>>>15),P=C+(I^O&(V^I))+x[15]+1236535329&4294967295,C=O+(P<<22&4294967295|P>>>10),P=I+(O^V&(C^O))+x[1]+4129170786&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[6]+3225465664&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[11]+643717713&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[0]+3921069994&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[5]+3593408605&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[10]+38016083&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[15]+3634488961&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[4]+3889429448&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[9]+568446438&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[14]+3275163606&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[3]+4107603335&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[8]+1163531501&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(O^V&(C^O))+x[13]+2850285829&4294967295,I=C+(P<<5&4294967295|P>>>27),P=V+(C^O&(I^C))+x[2]+4243563512&4294967295,V=I+(P<<9&4294967295|P>>>23),P=O+(I^C&(V^I))+x[7]+1735328473&4294967295,O=V+(P<<14&4294967295|P>>>18),P=C+(V^I&(O^V))+x[12]+2368359562&4294967295,C=O+(P<<20&4294967295|P>>>12),P=I+(C^O^V)+x[5]+4294588738&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[8]+2272392833&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[11]+1839030562&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[14]+4259657740&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[1]+2763975236&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[4]+1272893353&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[7]+4139469664&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[10]+3200236656&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[13]+681279174&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[0]+3936430074&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[3]+3572445317&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[6]+76029189&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(C^O^V)+x[9]+3654602809&4294967295,I=C+(P<<4&4294967295|P>>>28),P=V+(I^C^O)+x[12]+3873151461&4294967295,V=I+(P<<11&4294967295|P>>>21),P=O+(V^I^C)+x[15]+530742520&4294967295,O=V+(P<<16&4294967295|P>>>16),P=C+(O^V^I)+x[2]+3299628645&4294967295,C=O+(P<<23&4294967295|P>>>9),P=I+(O^(C|~V))+x[0]+4096336452&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[7]+1126891415&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[14]+2878612391&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[5]+4237533241&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[12]+1700485571&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[3]+2399980690&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[10]+4293915773&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[1]+2240044497&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[8]+1873313359&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[15]+4264355552&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[6]+2734768916&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[13]+1309151649&4294967295,C=O+(P<<21&4294967295|P>>>11),P=I+(O^(C|~V))+x[4]+4149444226&4294967295,I=C+(P<<6&4294967295|P>>>26),P=V+(C^(I|~O))+x[11]+3174756917&4294967295,V=I+(P<<10&4294967295|P>>>22),P=O+(I^(V|~C))+x[2]+718787259&4294967295,O=V+(P<<15&4294967295|P>>>17),P=C+(V^(O|~I))+x[9]+3951481745&4294967295,A.g[0]=A.g[0]+I&4294967295,A.g[1]=A.g[1]+(O+(P<<21&4294967295|P>>>11))&4294967295,A.g[2]=A.g[2]+O&4294967295,A.g[3]=A.g[3]+V&4294967295}i.prototype.u=function(A,I){I===void 0&&(I=A.length);for(var C=I-this.blockSize,x=this.B,O=this.h,V=0;V<I;){if(O==0)for(;V<=C;)o(this,A,V),V+=this.blockSize;if(typeof A=="string"){for(;V<I;)if(x[O++]=A.charCodeAt(V++),O==this.blockSize){o(this,x),O=0;break}}else for(;V<I;)if(x[O++]=A[V++],O==this.blockSize){o(this,x),O=0;break}}this.h=O,this.o+=I},i.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var I=1;I<A.length-8;++I)A[I]=0;var C=8*this.o;for(I=A.length-8;I<A.length;++I)A[I]=C&255,C/=256;for(this.u(A),A=Array(16),I=C=0;4>I;++I)for(var x=0;32>x;x+=8)A[C++]=this.g[I]>>>x&255;return A};function l(A,I){var C=d;return Object.prototype.hasOwnProperty.call(C,A)?C[A]:C[A]=I(A)}function c(A,I){this.h=I;for(var C=[],x=!0,O=A.length-1;0<=O;O--){var V=A[O]|0;x&&V==I||(C[O]=V,x=!1)}this.g=C}var d={};function p(A){return-128<=A&&128>A?l(A,function(I){return new c([I|0],0>I?-1:0)}):new c([A|0],0>A?-1:0)}function y(A){if(isNaN(A)||!isFinite(A))return E;if(0>A)return b(y(-A));for(var I=[],C=1,x=0;A>=C;x++)I[x]=A/C|0,C*=4294967296;return new c(I,0)}function v(A,I){if(A.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A.charAt(0)=="-")return b(v(A.substring(1),I));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(I,8)),x=E,O=0;O<A.length;O+=8){var V=Math.min(8,A.length-O),P=parseInt(A.substring(O,O+V),I);8>V?(V=y(Math.pow(I,V)),x=x.j(V).add(y(P))):(x=x.j(C),x=x.add(y(P)))}return x}var E=p(0),S=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(B(this))return-b(this).m();for(var A=0,I=1,C=0;C<this.g.length;C++){var x=this.i(C);A+=(0<=x?x:4294967296+x)*I,I*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(U(this))return"0";if(B(this))return"-"+b(this).toString(A);for(var I=y(Math.pow(A,6)),C=this,x="";;){var O=ee(C,I).g;C=H(C,O.j(I));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(A);if(C=O,U(C))return V+x;for(;6>V.length;)V="0"+V;x=V+x}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function U(A){if(A.h!=0)return!1;for(var I=0;I<A.g.length;I++)if(A.g[I]!=0)return!1;return!0}function B(A){return A.h==-1}n.l=function(A){return A=H(this,A),B(A)?-1:U(A)?0:1};function b(A){for(var I=A.g.length,C=[],x=0;x<I;x++)C[x]=~A.g[x];return new c(C,~A.h).add(S)}n.abs=function(){return B(this)?b(this):this},n.add=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],x=0,O=0;O<=I;O++){var V=x+(this.i(O)&65535)+(A.i(O)&65535),P=(V>>>16)+(this.i(O)>>>16)+(A.i(O)>>>16);x=P>>>16,V&=65535,P&=65535,C[O]=P<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function H(A,I){return A.add(b(I))}n.j=function(A){if(U(this)||U(A))return E;if(B(this))return B(A)?b(this).j(b(A)):b(b(this).j(A));if(B(A))return b(this.j(b(A)));if(0>this.l(N)&&0>A.l(N))return y(this.m()*A.m());for(var I=this.g.length+A.g.length,C=[],x=0;x<2*I;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var O=0;O<A.g.length;O++){var V=this.i(x)>>>16,P=this.i(x)&65535,tt=A.i(O)>>>16,Rt=A.i(O)&65535;C[2*x+2*O]+=P*Rt,J(C,2*x+2*O),C[2*x+2*O+1]+=V*Rt,J(C,2*x+2*O+1),C[2*x+2*O+1]+=P*tt,J(C,2*x+2*O+1),C[2*x+2*O+2]+=V*tt,J(C,2*x+2*O+2)}for(x=0;x<I;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=I;x<2*I;x++)C[x]=0;return new c(C,0)};function J(A,I){for(;(A[I]&65535)!=A[I];)A[I+1]+=A[I]>>>16,A[I]&=65535,I++}function K(A,I){this.g=A,this.h=I}function ee(A,I){if(U(I))throw Error("division by zero");if(U(A))return new K(E,E);if(B(A))return I=ee(b(A),I),new K(b(I.g),b(I.h));if(B(I))return I=ee(A,b(I)),new K(b(I.g),I.h);if(30<A.g.length){if(B(A)||B(I))throw Error("slowDivide_ only works with positive integers.");for(var C=S,x=I;0>=x.l(A);)C=le(C),x=le(x);var O=re(C,1),V=re(x,1);for(x=re(x,2),C=re(C,2);!U(x);){var P=V.add(x);0>=P.l(A)&&(O=O.add(C),V=P),x=re(x,1),C=re(C,1)}return I=H(A,O.j(I)),new K(O,I)}for(O=E;0<=A.l(I);){for(C=Math.max(1,Math.floor(A.m()/I.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),V=y(C),P=V.j(I);B(P)||0<P.l(A);)C-=x,V=y(C),P=V.j(I);U(V)&&(V=S),O=O.add(V),A=H(A,P)}return new K(O,A)}n.A=function(A){return ee(this,A).h},n.and=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)&A.i(x);return new c(C,this.h&A.h)},n.or=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)|A.i(x);return new c(C,this.h|A.h)},n.xor=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],x=0;x<I;x++)C[x]=this.i(x)^A.i(x);return new c(C,this.h^A.h)};function le(A){for(var I=A.g.length+1,C=[],x=0;x<I;x++)C[x]=A.i(x)<<1|A.i(x-1)>>>31;return new c(C,A.h)}function re(A,I){var C=I>>5;I%=32;for(var x=A.g.length-C,O=[],V=0;V<x;V++)O[V]=0<I?A.i(V+C)>>>I|A.i(V+C+1)<<32-I:A.i(V+C);return new c(O,A.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Nw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Cs=c}).apply(typeof nv<"u"?nv:typeof self<"u"?self:typeof window<"u"?window:{});var _c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dw,hl,Ow,Oc,op,bw,Lw,Vw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof _c=="object"&&_c];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var M=u[T];if(!(M in _))break e;_=_[M]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,M={next:function(){if(!T&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function E(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,T),u.apply(m,M)}}return function(){return u.apply(m,arguments)}}function S(u,m,_){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,S.apply(null,arguments)}function N(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function U(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,M,$){for(var ie=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)ie[qe-2]=arguments[qe];return m.prototype[M].apply(T,ie)}}function B(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function b(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const M=u.length||0,$=T.length||0;u.length=M+$;for(let ie=0;ie<$;ie++)u[M+ie]=T[ie]}else u.push(T)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ee(u){return ee[" "](u),u}ee[" "]=function(){};var le=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function re(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function A(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(u,m){let _,T;for(let M=1;M<arguments.length;M++){T=arguments[M];for(_ in T)u[_]=T[_];for(let $=0;$<C.length;$++)_=C[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){d.setTimeout(()=>{throw u},0)}function P(){var u=de;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,_){const T=Rt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Rt=new H(()=>new At,u=>u.reset());class At{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,se=!1,de=new tt,oe=()=>{const u=d.Promise.resolve(void 0);je=()=>{u.then(L)}};var L=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(_){V(_)}var m=Rt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Ce(u,m){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(le){e:{try{ee(m.nodeName);var M=!0;break e}catch{}M=!1}M||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Pe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}U(Ce,ge);var Pe={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Ve(u,m,_,T,M){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=M,this.key=++Ne,this.da=this.fa=!1}function ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function nn(u){this.src=u,this.g={},this.h=0}nn.prototype.add=function(u,m,_,T,M){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ie=ni(u,m,T,M);return-1<ie?(m=u[ie],_||(m.fa=!1)):(m=new Ve(m,this.src,$,!!T,M),m.fa=_,u.push(m)),m};function Yt(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],M=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=M)&&Array.prototype.splice.call(T,M,1),$&&(ot(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ni(u,m,_,T){for(var M=0;M<u.length;++M){var $=u[M];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==T)return M}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),zs={};function ha(u,m,_,T,M){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ha(u,m[$],_,T,M);return null}return _=pa(_),u&&u[De]?u.K(m,_,y(T)?!!T.capture:!1,M):da(u,m,_,!1,T,M)}function da(u,m,_,T,M,$){if(!m)throw Error("Invalid event type");var ie=y(M)?!!M.capture:!!M,qe=qs(u);if(qe||(u[Ki]=qe=new nn(u)),_=qe.add(m,_,T,ie,$),_.proxy)return _;if(T=Zl(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Ae||(M=ie),M===void 0&&(M=!1),u.addEventListener(m.toString(),T,M);else if(u.attachEvent)u.attachEvent(Ar(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Zl(){function u(_){return m.call(u.src,u.listener,_)}const m=fa;return u}function $s(u,m,_,T,M){if(Array.isArray(m))for(var $=0;$<m.length;$++)$s(u,m[$],_,T,M);else T=y(T)?!!T.capture:!!T,_=pa(_),u&&u[De]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=ni($,_,T,M),-1<_&&(ot($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=qs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ni(m,_,T,M)),(_=-1<u?m[u]:null)&&Rr(_))}function Rr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[De])Yt(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Ar(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=qs(m))?(Yt(_,u),_.h==0&&(_.src=null,m[Ki]=null)):ot(u)}}}function Ar(u){return u in zs?zs[u]:zs[u]="on"+u}function fa(u,m){if(u.da)u=!0;else{m=new Ce(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Rr(u),u=_.call(T,m)}return u}function qs(u){return u=u[Ki],u instanceof nn?u:null}var Ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function pa(u){return typeof u=="function"?u:(u[Ws]||(u[Ws]=function(m){return u.handleEvent(m)}),u[Ws])}function vt(){W.call(this),this.i=new nn(this),this.M=this,this.F=null}U(vt,W),vt.prototype[De]=!0,vt.prototype.removeEventListener=function(u,m,_,T){$s(this,u,m,_,T)};function wt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new ge(m,u);else if(m instanceof ge)m.target=m.target||u;else{var M=m;m=new ge(T,u),x(m,M)}if(M=!0,_)for(var $=_.length-1;0<=$;$--){var ie=m.g=_[$];M=Cr(ie,T,!0,m)&&M}if(ie=m.g=u,M=Cr(ie,T,!0,m)&&M,M=Cr(ie,T,!1,m)&&M,_)for($=0;$<_.length;$++)ie=m.g=_[$],M=Cr(ie,T,!1,m)&&M}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)ot(_[T]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},vt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function Cr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var M=!0,$=0;$<m.length;++$){var ie=m[$];if(ie&&!ie.da&&ie.capture==_){var qe=ie.listener,Et=ie.ha||ie.src;ie.fa&&Yt(u.i,ie),M=qe.call(Et,T)!==!1&&M}}return M&&!T.defaultPrevented}function ma(u,m,_){if(typeof u=="function")_&&(u=S(u,_));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function ri(u){u.g=ma(()=>{u.g=null,u.i&&(u.i=!1,ri(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Gi extends W{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qi(u){W.call(this),this.h=u,this.g={}}U(Qi,W);var ga=[];function ya(u){re(u.g,function(m,_){this.g.hasOwnProperty(_)&&Rr(m)},u),u.g={}}Qi.prototype.N=function(){Qi.aa.N.call(this),ya(this)},Qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _a=d.JSON.stringify,va=d.JSON.parse,wa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Yi(){}Yi.prototype.h=null;function Hs(u){return u.h||(u.h=u.i())}function Ks(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){ge.call(this,"d")}U(sr,ge);function Gs(){ge.call(this,"c")}U(Gs,ge);var or={},Ea=null;function Xi(){return Ea=Ea||new vt}or.La="serverreachability";function Ta(u){ge.call(this,or.La,u)}U(Ta,ge);function Pr(u){const m=Xi();wt(m,new Ta(m))}or.STAT_EVENT="statevent";function Ia(u,m){ge.call(this,or.STAT_EVENT,u),this.stat=m}U(Ia,ge);function ct(u){const m=Xi();wt(m,new Ia(m,u))}or.Ma="timingevent";function Qs(u,m){ge.call(this,or.Ma,u),this.size=m}U(Qs,ge);function Mn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Ji(){this.g=!0}Ji.prototype.xa=function(){this.g=!1};function Zi(u,m,_,T,M,$){u.info(function(){if(u.g)if($)for(var ie="",qe=$.split("&"),Et=0;Et<qe.length;Et++){var Me=qe[Et].split("=");if(1<Me.length){var Ct=Me[0];Me=Me[1];var pt=Ct.split("_");ie=2<=pt.length&&pt[1]=="type"?ie+(Ct+"="+Me+"&"):ie+(Ct+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+T+") [attempt "+M+"]: "+m+`
`+_+`
`+ie})}function Ys(u,m,_,T,M,$,ie){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+M+"]: "+m+`
`+_+`
`+$+" "+ie})}function Un(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Fh(u,_)+(T?" "+T:"")})}function Sa(u,m){u.info(function(){return"TIMEOUT: "+m})}Ji.prototype.info=function(){};function Fh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var M=T[1];if(Array.isArray(M)&&!(1>M.length)){var $=M[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<M.length;ie++)M[ie]=""}}}}return _a(_)}catch{return m}}var Xs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fn;function es(){}U(es,Yi),es.prototype.g=function(){return new XMLHttpRequest},es.prototype.i=function(){return{}},Fn=new es;function jn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var Ra={},Js={};function Zs(u,m,_){u.L=1,u.v=li(gn(m)),u.m=_,u.P=!0,Aa(u,null)}function Aa(u,m){u.F=Date.now(),Ke(u),u.A=gn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),ci(_.i,"t",T),u.C=0,_=u.j.J,u.h=new tu,u.g=vu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Gi(S(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var M="readystatechange";Array.isArray(M)||(M&&(ga[0]=M.toString()),M=ga);for(var $=0;$<M.length;$++){var ie=ha(_,M[$],T||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Pr(),Zi(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const m=this.M;m&&sn(u)==3?m.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const pt=sn(this.g);var m=this.g.Ba();const Pn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Da(this.g)))){this.J||pt!=4||m==7||(m==8||0>=Pn?Pr(3):Pr(2)),ts(this);var _=this.g.Z();this.X=_;t:if(nu(this)){var T=Da(this.g);u="";var M=T.length,$=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),ii(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<M;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==M-1)});T.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Ys(this.i,this.u,this.A,this.l,this.R,pt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Et=this.g;if((qe=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(qe)){var Me=qe;break t}}Me=null}if(_=Me)Un(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ca(this,_);else{this.o=!1,this.s=3,ct(12),An(this),ii(this);break e}}if(this.P){_=!0;let _n;for(;!this.J&&this.C<ie.length;)if(_n=jh(this,ie),_n==Js){pt==4&&(this.s=4,ct(14),_=!1),Un(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==Ra){this.s=4,ct(15),Un(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Un(this.i,this.l,_n,null),Ca(this,_n);if(nu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),_=!1),this.o=this.o&&_,!_)Un(this.i,this.l,ie,"[Invalid Chunked Response]"),An(this),ii(this);else if(0<ie.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),ba(Ct),Ct.M=!0,ct(11))}}else Un(this.i,this.l,ie,null),Ca(this,ie);pt==4&&An(this),this.o&&!this.J&&(pt==4?co(this.j,this):(this.o=!1,Ke(this)))}else so(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),An(this),ii(this)}}}catch{}finally{}};function nu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jh(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?Js:(_=Number(m.substring(_,T)),isNaN(_)?Ra:(T+=1,T+_>m.length?Js:(m=m.slice(T,T+_),u.C=T+_,m)))}jn.prototype.cancel=function(){this.J=!0,An(this)};function Ke(u){u.S=Date.now()+u.I,ru(u,u.I)}function ru(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Mn(S(u.ba,u),m)}function ts(u){u.B&&(d.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Sa(this.i,this.A),this.L!=2&&(Pr(),ct(17)),An(this),this.s=2,ii(this)):ru(this,this.S-u)};function ii(u){u.j.G==0||u.J||co(u.j,u)}function An(u){ts(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,ya(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Ca(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Xt(_.h,u))){if(!u.K&&Xt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var M=T;if(M[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)uo(_),Wn(_);else break e;lo(_),ct(18)}}else _.za=M[1],0<_.za-_.T&&37500>M[2]&&_.F&&_.v==0&&!_.C&&(_.C=Mn(S(_.Za,_),6e3));if(1>=su(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Or(_,11)}else if((u.K||_.g==u)&&uo(_),!J(m))for(M=_.Da.g.parse(m),m=0;m<M.length;m++){let Me=M[m];if(_.T=Me[0],Me=Me[1],_.G==2)if(Me[0]=="c"){_.K=Me[1],_.ia=Me[2];const Ct=Me[3];Ct!=null&&(_.la=Ct,_.j.info("VER="+_.la));const pt=Me[4];pt!=null&&(_.Aa=pt,_.j.info("SVER="+_.Aa));const Pn=Me[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(T=1.5*Pn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const _n=u.g;if(_n){const ls=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ls){var $=T.h;$.g||ls.indexOf("spdy")==-1&&ls.indexOf("quic")==-1&&ls.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Pa($,$.h),$.h=null))}if(T.D){const fo=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(T.ya=fo,He(T.I,T.D,fo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ie=u;if(T.qa=_u(T,T.J?T.ia:null,T.W),ie.K){ou(T.h,ie);var qe=ie,Et=T.L;Et&&(qe.I=Et),qe.B&&(ts(qe),Ke(qe)),T.g=ie}else as(T);0<_.i.length&&cr(_)}else Me[0]!="stop"&&Me[0]!="close"||Or(_,7);else _.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Or(_,7):bt(_):Me[0]!="noop"&&_.l&&_.l.ta(Me),_.v=0)}}Pr(4)}catch{}}var iu=class{constructor(u,m){this.g=u,this.map=m}};function ns(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function su(u){return u.h?1:u.g?u.g.size:0}function Xt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Pa(u,m){u.g?u.g.add(m):u.h=m}function ou(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ns.prototype.cancel=function(){if(this.i=au(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function au(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return B(u.i)}function eo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function to(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function si(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=to(u),T=eo(u),M=T.length,$=0;$<M;$++)m.call(void 0,T[$],_&&_[$],u)}var rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),M=null;if(0<=T){var $=u[_].substring(0,T);M=u[_].substring(T+1)}else $=u[_];m($,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function kr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof kr){this.h=u.h,is(this,u.j),this.o=u.o,this.g=u.g,oi(this,u.s),this.l=u.l;var m=u.i,_=new ar;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ai(this,_),this.m=u.m}else u&&(m=String(u).match(rs))?(this.h=!1,is(this,m[1]||"",!0),this.o=be(m[2]||""),this.g=be(m[3]||"",!0),oi(this,m[4]),this.l=be(m[5]||"",!0),ai(this,m[6]||"",!0),this.m=be(m[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}kr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ui(m,no,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ui(m,no,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ui(_,_.charAt(0)=="/"?cu:uu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ui(_,ka)),u.join("")};function gn(u){return new kr(u)}function is(u,m,_){u.j=_?be(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function oi(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ai(u,m,_){m instanceof ar?(u.i=m,lr(u.i,u.h)):(_||(m=ui(m,hu)),u.i=new ar(m,u.h))}function He(u,m,_){u.i.set(m,_)}function li(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function be(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ui(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,lu),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function lu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var no=/[#\/\?@]/g,uu=/[#\?:]/g,cu=/[#\?]/g,hu=/[#\?@]/g,ka=/#/g;function ar(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Ot(u){u.g||(u.g=new Map,u.h=0,u.i&&Bh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=ar.prototype,n.add=function(u,m){Ot(this),this.i=null,u=Cn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Bn(u,m){Ot(u),m=Cn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zn(u,m){return Ot(u),m=Cn(u,m),u.g.has(m)}n.forEach=function(u,m){Ot(this),this.g.forEach(function(_,T){_.forEach(function(M){u.call(m,M,T,this)},this)},this)},n.na=function(){Ot(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const M=u[T];for(let $=0;$<M.length;$++)_.push(m[T])}return _},n.V=function(u){Ot(this);let m=[];if(typeof u=="string")zn(this,u)&&(m=m.concat(this.g.get(Cn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Ot(this),this.i=null,u=Cn(this,u),zn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function ci(u,m,_){Bn(u,m),0<_.length&&(u.i=null,u.g.set(Cn(u,m),B(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const $=encodeURIComponent(String(T)),ie=this.V(T);for(T=0;T<ie.length;T++){var M=$;ie[T]!==""&&(M+="="+encodeURIComponent(String(ie[T]))),u.push(M)}}return this.i=u.join("&")};function Cn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function lr(u,m){m&&!u.j&&(Ot(u),u.i=null,u.g.forEach(function(_,T){var M=T.toLowerCase();T!=M&&(Bn(this,T),ci(this,M,_))},u)),u.j=m}function zh(u,m){const _=new Ji;if(d.Image){const T=new Image;T.onload=N(rn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=N(rn,_,"TestLoadImage: error",!1,m,T),T.onabort=N(rn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=N(rn,_,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function du(u,m){const _=new Ji,T=new AbortController,M=setTimeout(()=>{T.abort(),rn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(M),$.ok?rn(_,"TestPingServer: ok",!0,m):rn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(M),rn(_,"TestPingServer: error",!1,m)})}function rn(u,m,_,T,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),T(_)}catch{}}function $h(){this.g=new wa}function fu(u,m,_){const T=_||"";try{si(u,function(M,$){let ie=M;y(M)&&(ie=_a(M)),m.push(T+$+"="+encodeURIComponent(ie))})}catch(M){throw m.push(T+"type="+encodeURIComponent("_badmap")),M}}function xr(u){this.l=u.Ub||null,this.j=u.eb||!1}U(xr,Yi),xr.prototype.g=function(){return new ss(this.l,this.j)},xr.prototype.i=function(u){return function(){return u}}({});function ss(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(ss,vt),n=ss.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,qn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,qn(this)),this.g&&(this.readyState=3,qn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function pu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):qn(this),this.readyState==3&&pu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},n.Qa=function(u){this.g&&(this.response=u,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,qn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function qn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Nr(u){let m="";return re(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function hi(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=Nr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,m,_))}function Ze(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ze,vt);var qh=/^https?$/i,xa=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fn.g(),this.v=this.o?Hs(this.o):Hs(Fn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){os(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var M in T)_.set(M,T[M]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),M=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(xa,m,void 0))||T||M||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of _)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{io(this),this.u=!0,this.g.send(u),this.u=!1}catch($){os(this,$)}};function os(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,ro(u),yn(u)}function ro(u){u.A||(u.A=!0,wt(u,"complete"),wt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,wt(this,"complete"),wt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Na(this):this.bb())},n.bb=function(){Na(this)};function Na(u){if(u.h&&typeof c<"u"&&(!u.v[1]||sn(u)!=4||u.Z()!=2)){if(u.u&&sn(u)==4)ma(u.Ea,0,u);else if(wt(u,"readystatechange"),sn(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ie===0){var M=String(u.D).match(rs)[1]||null;!M&&d.self&&d.self.location&&(M=d.self.location.protocol.slice(0,-1)),T=!qh.test(M?M.toLowerCase():"")}_=T}if(_)wt(u,"complete"),wt(u,"success");else{u.m=6;try{var $=2<sn(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",ro(u)}}finally{yn(u)}}}}function yn(u,m){if(u.g){io(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||wt(u,"ready");try{_.onreadystatechange=T}catch{}}}function io(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function sn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),va(m)}};function Da(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function so(u){const m={};u=(u.g&&2<=sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(J(u[T]))continue;var _=O(u[T]);const M=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[M]||[];m[M]=$,$.push(_)}A(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Oa(u){this.Aa=0,this.i=[],this.j=new Ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ns(u&&u.concurrentRequestLimit),this.Da=new $h,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Oa.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){ct(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=_u(this,null,this.W),cr(this)};function bt(u){if(oo(u),u.G==3){var m=u.U++,_=gn(u.I);if(He(_,"SID",u.K),He(_,"RID",m),He(_,"TYPE","terminate"),Dr(u,_),m=new jn(u,u.j,m),m.L=2,m.v=li(gn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=vu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ke(m)}yu(u)}function Wn(u){u.g&&(ba(u),u.g.cancel(),u.g=null)}function oo(u){Wn(u),u.u&&(d.clearTimeout(u.u),u.u=null),uo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function cr(u){if(!mn(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||oe(),se||(je(),se=!0),de.add(m,u),u.B=0}}function Wh(u,m){return su(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Mn(S(u.Ga,u,m),gu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const M=new jn(this,this.j,u);let $=this.o;if(this.S&&($?($=I($),x($,this.S)):$=this.S),this.m!==null||this.O||(M.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=di(this,M,m),_=gn(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Dr(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(Nr($)))+"&"+m:this.m&&hi(_,this.m,$)),Pa(this.h,M),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",m),He(_,"SID","null"),M.T=!0,Zs(M,_,null)):Zs(M,_,m),this.G=2}}else this.G==3&&(u?ao(this,u):this.i.length==0||mn(this.h)||ao(this))};function ao(u,m){var _;m?_=m.l:_=u.U++;const T=gn(u.I);He(T,"SID",u.K),He(T,"RID",_),He(T,"AID",u.T),Dr(u,T),u.m&&u.o&&hi(T,u.m,u.o),_=new jn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=di(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Pa(u.h,_),Zs(_,T,m)}function Dr(u,m){u.H&&re(u.H,function(_,T){He(m,T,_)}),u.l&&si({},function(_,T){He(m,T,_)})}function di(u,m,_){_=Math.min(u.i.length,_);var T=u.l?S(u.l.Na,u.l,u):null;e:{var M=u.i;let $=-1;for(;;){const ie=["count="+_];$==-1?0<_?($=M[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let qe=!0;for(let Et=0;Et<_;Et++){let Me=M[Et].g;const Ct=M[Et].map;if(Me-=$,0>Me)$=Math.max(0,M[Et].g-100),qe=!1;else try{fu(Ct,ie,"req"+Me+"_")}catch{T&&T(Ct)}}if(qe){T=ie.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function as(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||oe(),se||(je(),se=!0),de.add(m,u),u.v=0}}function lo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Mn(S(u.Fa,u),gu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Mn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Wn(this),mu(this))};function ba(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function mu(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=gn(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),Dr(u,m),u.m&&u.o&&hi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=li(gn(m)),_.m=null,_.P=!0,Aa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,Wn(this),lo(this),ct(19))};function uo(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function co(u,m){var _=null;if(u.g==m){uo(u),ba(u),u.g=null;var T=2}else if(Xt(u.h,m))_=m.D,ou(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var M=u.B;T=Xi(),wt(T,new Qs(T,_)),cr(u)}else as(u);else if(M=m.s,M==3||M==0&&0<m.X||!(T==1&&Wh(u,m)||T==2&&lo(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),M){case 1:Or(u,5);break;case 4:Or(u,10);break;case 3:Or(u,6);break;default:Or(u,2)}}}function gu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Or(u,m){if(u.j.info("Error code "+m),m==2){var _=S(u.fb,u),T=u.Xa;const M=!T;T=new kr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||is(T,"https"),li(T),M?zh(T.toString(),_):du(T.toString(),_)}else ct(2);u.G=0,u.l&&u.l.sa(m),yu(u),oo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function yu(u){if(u.G=0,u.ka=[],u.l){const m=au(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,B(u.i),u.i.length=0),u.l.ra()}}function _u(u,m,_){var T=_ instanceof kr?gn(_):new kr(_);if(T.g!="")m&&(T.g=m+"."+T.g),oi(T,T.s);else{var M=d.location;T=M.protocol,m=m?m+"."+M.hostname:M.hostname,M=+M.port;var $=new kr(null);T&&is($,T),m&&($.g=m),M&&oi($,M),_&&($.l=_),T=$}return _=u.D,m=u.ya,_&&m&&He(T,_,m),He(T,"VER",u.la),Dr(u,T),T}function vu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new xr({eb:_})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function La(){}n=La.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ho(){}ho.prototype.g=function(u,m){return new Jt(u,m)};function Jt(u,m){vt.call(this),this.g=new Oa(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new hr(this)}U(Jt,vt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){bt(this.g)},Jt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=_a(u),u=_);m.i.push(new iu(m.Ya++,u)),m.G==3&&cr(m)},Jt.prototype.N=function(){this.g.l=null,delete this.j,bt(this.g),delete this.g,Jt.aa.N.call(this)};function wu(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}U(wu,sr);function Eu(){Gs.call(this),this.status=1}U(Eu,Gs);function hr(u){this.g=u}U(hr,La),hr.prototype.ua=function(){wt(this.g,"a")},hr.prototype.ta=function(u){wt(this.g,new wu(u))},hr.prototype.sa=function(u){wt(this.g,new Eu)},hr.prototype.ra=function(){wt(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,Vw=function(){return new ho},Lw=function(){return Xi()},bw=or,op={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xs.NO_ERROR=0,Xs.TIMEOUT=8,Xs.HTTP_ERROR=6,Oc=Xs,eu.COMPLETE="complete",Ow=eu,Ks.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,hl=Ks,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Dw=Ze}).apply(typeof _c<"u"?_c:typeof self<"u"?self:typeof window<"u"?window:{});const rv="@firebase/firestore";/**
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
 */let aa="10.14.0";/**
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
 */const Os=new Mp("@firebase/firestore");function ol(){return Os.logLevel}function pe(n,...e){if(Os.logLevel<=Le.DEBUG){const t=e.map(Xp);Os.debug(`Firestore (${aa}): ${n}`,...t)}}function Yr(n,...e){if(Os.logLevel<=Le.ERROR){const t=e.map(Xp);Os.error(`Firestore (${aa}): ${n}`,...t)}}function Yo(n,...e){if(Os.logLevel<=Le.WARN){const t=e.map(Xp);Os.warn(`Firestore (${aa}): ${n}`,...t)}}function Xp(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${aa}) INTERNAL ASSERTION FAILED: `+n;throw Yr(e),new Error(e)}function We(n,e){n||Te()}function Se(n,e){return n}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends pn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Mw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ht.UNAUTHENTICATED))}shutdown(){}}class UP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class FP{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){We(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Fi,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Fi)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(We(typeof i.accessToken=="string"),new Mw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Ht(e)}}class jP{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BP{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new jP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $P{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){We(this.o===void 0);const i=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(We(typeof t.token=="string"),this.R=t.token,new zP(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=qP(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function ze(n,e){return n<e?-1:n>e?1:0}function Xo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class St{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ce(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new St(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Nl{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Nl.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nl?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends Nl{construct(e,t,i){return new Je(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const WP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends Nl{construct(e,t,i){return new Ut(e,t,i)}static isValidIdentifier(e){return WP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(t)}static emptyPath(){return new Ut([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}function HP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new St(t+1,0):new St(t,i));return new zi(o,ye.empty(),e)}function KP(n){return new zi(n.readTime,n.key,-1)}class zi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new zi(Ie.min(),ye.empty(),-1)}static max(){return new zi(Ie.max(),ye.empty(),-1)}}function GP(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
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
 */const QP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hl(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==QP)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,i)=>{t(e)})}static reject(e){return new Z((t,i)=>{i(e)})}static waitFor(e){return new Z((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Z.resolve(!1);for(const i of e)t=t.next(o=>o?Z.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Z((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Z((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function XP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jp.oe=-1;function Ih(n){return n==null}function eh(n){return n===0&&1/n==-1/0}function JP(n){return typeof n=="number"&&Number.isInteger(n)&&!eh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function iv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function js(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class st{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vc(this.root,e,this.comparator,!1)}getReverseIterator(){return new vc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vc(this.root,e,this.comparator,!0)}}class vc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Mt.RED,this.left=o??Mt.EMPTY,this.right=l??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Mt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ft{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sv(this.data.getIterator())}getIteratorFrom(e){return new sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(Ut.comparator)}static empty(){return new In([])}unionWith(e){let t=new Ft(Ut.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Xo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class jw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new jw("Invalid base64 string: "+l):l}}(e);return new jt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const ZP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $i(n){if(We(!!n),typeof n=="string"){let e=0;const t=ZP.exec(n);if(We(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function bs(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */function Zp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function em(n){const e=n.mapValue.fields.__previous_value__;return Zp(e)?em(e):e}function Dl(n){const e=$i(n.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
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
 */class ek{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class Ol{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ol("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ol&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wc={mapValue:{}};function Ls(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zp(n)?4:nk(n)?9007199254740991:tk(n)?10:11:Te()}function Ir(n,e){if(n===e)return!0;const t=Ls(n);if(t!==Ls(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Dl(n).isEqual(Dl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=$i(o.timestampValue),d=$i(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return bs(o.bytesValue).isEqual(bs(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=dt(o.doubleValue),d=dt(l.doubleValue);return c===d?eh(c)===eh(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Xo(n.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(iv(c)!==iv(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Ir(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function bl(n,e){return(n.values||[]).find(t=>Ir(t,e))!==void 0}function Jo(n,e){if(n===e)return 0;const t=Ls(n),i=Ls(e);if(t!==i)return ze(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=dt(l.integerValue||l.doubleValue),p=dt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return ov(n.timestampValue,e.timestampValue);case 4:return ov(Dl(n),Dl(e));case 5:return ze(n.stringValue,e.stringValue);case 6:return function(l,c){const d=bs(l),p=bs(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=ze(d[y],p[y]);if(v!==0)return v}return ze(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=ze(dt(l.latitude),dt(c.latitude));return d!==0?d:ze(dt(l.longitude),dt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return av(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const E=l.fields||{},S=c.fields||{},N=(d=E.value)===null||d===void 0?void 0:d.arrayValue,U=(p=S.value)===null||p===void 0?void 0:p.arrayValue,B=ze(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0);return B!==0?B:av(N,U)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===wc.mapValue&&c===wc.mapValue)return 0;if(l===wc.mapValue)return 1;if(c===wc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const S=ze(p[E],v[E]);if(S!==0)return S;const N=Jo(d[p[E]],y[v[E]]);if(N!==0)return N}return ze(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function ov(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=$i(n),i=$i(e),o=ze(t.seconds,i.seconds);return o!==0?o:ze(t.nanos,i.nanos)}function av(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Jo(t[o],i[o]);if(l)return l}return ze(t.length,i.length)}function Zo(n){return ap(n)}function ap(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=$i(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return bs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=ap(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${ap(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function lv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lp(n){return!!n&&"integerValue"in n}function tm(n){return!!n&&"arrayValue"in n}function uv(n){return!!n&&"nullValue"in n}function cv(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function bc(n){return!!n&&"mapValue"in n}function tk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function yl(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return js(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=yl(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yl(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!bc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(t)}setAll(e){let t=Ut.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=yl(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());bc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];bc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){js(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new dn(yl(this.value))}}function Bw(n){const e=[];return js(n.fields,(t,i)=>{const o=new Ut([t]);if(bc(i)){const l=Bw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new In(e)}/**
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
 */class th{constructor(e,t){this.position=e,this.inclusive=t}}function hv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Jo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function dv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ir(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function rk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zw{}class _t extends zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new sk(e,t,i):t==="array-contains"?new lk(e,i):t==="in"?new uk(e,i):t==="not-in"?new ck(e,i):t==="array-contains-any"?new hk(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ok(e,i):new ak(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Jo(t,this.value)):t!==null&&Ls(this.value)===Ls(t)&&this.matchesComparison(Jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends zw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rr(e,t)}matches(e){return $w(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $w(n){return n.op==="and"}function qw(n){return ik(n)&&$w(n)}function ik(n){for(const e of n.filters)if(e instanceof rr)return!1;return!0}function up(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+Zo(n.value);if(qw(n))return n.filters.map(e=>up(e)).join(",");{const e=n.filters.map(t=>up(t)).join(",");return`${n.op}(${e})`}}function Ww(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&Ir(i.value,o.value)}(n,e):n instanceof rr?function(i,o){return o instanceof rr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&Ww(c,o.filters[d]),!0):!1}(n,e):void Te()}function Hw(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${Zo(t.value)}`}(n):n instanceof rr?function(t){return t.op.toString()+" {"+t.getFilters().map(Hw).join(" ,")+"}"}(n):"Filter"}class sk extends _t{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class ok extends _t{constructor(e,t){super(e,"in",t),this.keys=Kw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ak extends _t{constructor(e,t){super(e,"not-in",t),this.keys=Kw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Kw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class lk extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return tm(t)&&bl(t.arrayValue,this.value)}}class uk extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bl(this.value.arrayValue,t)}}class ck extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!bl(this.value.arrayValue,t)}}class hk extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!tm(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>bl(this.value.arrayValue,i))}}/**
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
 */class dk{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function fv(n,e=null,t=[],i=[],o=null,l=null,c=null){return new dk(n,e,t,i,o,l,c)}function nm(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>up(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Ih(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Zo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Zo(i)).join(",")),e.ue=t}return e.ue}function rm(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ww(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!dv(n.startAt,e.startAt)&&dv(n.endAt,e.endAt)}function cp(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class la{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fk(n,e,t,i,o,l,c,d){return new la(n,e,t,i,o,l,c,d)}function im(n){return new la(n)}function pv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gw(n){return n.collectionGroup!==null}function _l(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ft(Ut.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Ll(l,i))}),t.has(Ut.keyField().canonicalString())||e.ce.push(new Ll(Ut.keyField(),i))}return e.ce}function wr(n){const e=Se(n);return e.le||(e.le=pk(e,_l(n))),e.le}function pk(n,e){if(n.limitType==="F")return fv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Ll(o.field,l)});const t=n.endAt?new th(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new th(n.startAt.position,n.startAt.inclusive):null;return fv(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function hp(n,e){const t=n.filters.concat([e]);return new la(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function nh(n,e,t){return new la(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Sh(n,e){return rm(wr(n),wr(e))&&n.limitType===e.limitType}function Qw(n){return`${nm(wr(n))}|lt:${n.limitType}`}function Vo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Hw(o)).join(", ")}]`),Ih(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Zo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Zo(o)).join(",")),`Target(${i})`}(wr(n))}; limitType=${n.limitType})`}function Rh(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of _l(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=hv(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,_l(i),o)||i.endAt&&!function(c,d,p){const y=hv(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,_l(i),o))}(n,e)}function mk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Yw(n){return(e,t)=>{let i=!1;for(const o of _l(n)){const l=gk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function gk(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Jo(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class ua{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
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
 */const yk=new st(ye.comparator);function Xr(){return yk}const Xw=new st(ye.comparator);function dl(...n){let e=Xw;for(const t of n)e=e.insert(t.key,t);return e}function Jw(n){let e=Xw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ss(){return vl()}function Zw(){return vl()}function vl(){return new ua(n=>n.toString(),(n,e)=>n.isEqual(e))}const _k=new st(ye.comparator),vk=new Ft(ye.comparator);function Oe(...n){let e=vk;for(const t of n)e=e.add(t);return e}const wk=new Ft(ze);function Ek(){return wk}/**
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
 */function sm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(e)?"-0":e}}function eE(n){return{integerValue:""+n}}function Tk(n,e){return JP(e)?eE(e):sm(n,e)}/**
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
 */class Ah{constructor(){this._=void 0}}function Ik(n,e,t){return n instanceof rh?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Zp(l)&&(l=em(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof Vl?nE(n,e):n instanceof Ml?rE(n,e):function(o,l){const c=tE(o,l),d=mv(c)+mv(o.Pe);return lp(c)&&lp(o.Pe)?eE(d):sm(o.serializer,d)}(n,e)}function Sk(n,e,t){return n instanceof Vl?nE(n,e):n instanceof Ml?rE(n,e):t}function tE(n,e){return n instanceof ih?function(i){return lp(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class rh extends Ah{}class Vl extends Ah{constructor(e){super(),this.elements=e}}function nE(n,e){const t=iE(e);for(const i of n.elements)t.some(o=>Ir(o,i))||t.push(i);return{arrayValue:{values:t}}}class Ml extends Ah{constructor(e){super(),this.elements=e}}function rE(n,e){let t=iE(e);for(const i of n.elements)t=t.filter(o=>!Ir(o,i));return{arrayValue:{values:t}}}class ih extends Ah{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function mv(n){return dt(n.integerValue||n.doubleValue)}function iE(n){return tm(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Rk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Vl&&o instanceof Vl||i instanceof Ml&&o instanceof Ml?Xo(i.elements,o.elements,Ir):i instanceof ih&&o instanceof ih?Ir(i.Pe,o.Pe):i instanceof rh&&o instanceof rh}(n.transform,e.transform)}class Ak{constructor(e,t){this.version=e,this.transformResults=t}}class nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ch{}function sE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new om(n.key,nr.none()):new Gl(n.key,n.data,nr.none());{const t=n.data,i=dn.empty();let o=new Ft(Ut.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Hi(n.key,i,new In(o.toArray()),nr.none())}}function Ck(n,e,t){n instanceof Gl?function(o,l,c){const d=o.value.clone(),p=yv(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Hi?function(o,l,c){if(!Lc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=yv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(oE(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function wl(n,e,t,i){return n instanceof Gl?function(l,c,d,p){if(!Lc(l.precondition,c))return d;const y=l.value.clone(),v=_v(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Hi?function(l,c,d,p){if(!Lc(l.precondition,c))return d;const y=_v(l.fieldTransforms,p,c),v=c.data;return v.setAll(oE(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(l,c,d){return Lc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function Pk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=tE(i.transform,o||null);l!=null&&(t===null&&(t=dn.empty()),t.set(i.field,l))}return t||null}function gv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Xo(i,o,(l,c)=>Rk(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Gl extends Ch{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hi extends Ch{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function oE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function yv(n,e,t){const i=new Map;We(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,Sk(c,d,t[o]))}return i}function _v(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,Ik(l,c,e))}return i}class om extends Ch{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kk extends Ch{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Ck(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=wl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=wl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Zw();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=sE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Xo(this.mutations,e.mutations,(t,i)=>gv(t,i))&&Xo(this.baseMutations,e.baseMutations,(t,i)=>gv(t,i))}}class am{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){We(e.mutations.length===i.length);let o=function(){return _k}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new am(e,t,i,o)}}/**
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
 */class Nk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Dk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var gt,Ue;function Ok(n){switch(n){default:return Te();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function aE(n){if(n===void 0)return Yr("GRPC error has no .code"),G.UNKNOWN;switch(n){case gt.OK:return G.OK;case gt.CANCELLED:return G.CANCELLED;case gt.UNKNOWN:return G.UNKNOWN;case gt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case gt.INTERNAL:return G.INTERNAL;case gt.UNAVAILABLE:return G.UNAVAILABLE;case gt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case gt.NOT_FOUND:return G.NOT_FOUND;case gt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case gt.ABORTED:return G.ABORTED;case gt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case gt.DATA_LOSS:return G.DATA_LOSS;default:return Te()}}(Ue=gt||(gt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function bk(){return new TextEncoder}/**
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
 */const Lk=new Cs([4294967295,4294967295],0);function vv(n){const e=bk().encode(n),t=new Nw;return t.update(e),new Uint8Array(t.digest())}function wv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Cs([t,i],0),new Cs([o,l],0)]}class lm{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new fl(`Invalid padding: ${t}`);if(i<0)throw new fl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new fl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new fl(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Cs.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(Cs.fromNumber(i)));return o.compare(Lk)===1&&(o=new Cs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=vv(e),[i,o]=wv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new lm(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ie===0)return;const t=vv(e),[i,o]=wv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class fl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ph{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ph(Ie.min(),o,new st(ze),Xr(),Oe())}}class Ql{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ql(i,t,Oe(),Oe(),Oe())}}/**
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
 */class Vc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class lE{constructor(e,t){this.targetId=e,this.me=t}}class uE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Ev{constructor(){this.fe=0,this.ge=Iv(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Oe(),t=Oe(),i=Oe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new Ql(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Iv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Vk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xr(),this.qe=Tv(),this.Qe=new st(ze)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(cp(l))if(i===0){const c=new ye(l.path);this.Ue(t,c,Kt.newNoDocument(c,Ie.min()))}else We(i===1);else{const c=this.Ye(t);if(c!==i){const d=this.Ze(e),p=d?this.Xe(d,e,c):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=bs(i).toUint8Array()}catch(p){if(p instanceof jw)return Yo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new lm(c,o,l)}catch(p){return Yo(p instanceof fl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.tt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Je(c);if(d){if(l.current&&cp(d.target)){const p=new ye(d.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,Kt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=Oe();this.qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Ph(e,t,this.Qe,this.ke,i);return this.ke=Xr(),this.qe=Tv(),this.Qe=new st(ze),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ev,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ft(ze),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ev),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Tv(){return new st(ye.comparator)}function Iv(){return new st(ye.comparator)}const Mk={asc:"ASCENDING",desc:"DESCENDING"},Uk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fk={and:"AND",or:"OR"};class jk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function dp(n,e){return n.useProto3Json||Ih(e)?e:{value:e}}function sh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bk(n,e){return sh(n,e.toTimestamp())}function Er(n){return We(!!n),Ie.fromTimestamp(function(t){const i=$i(t);return new St(i.seconds,i.nanos)}(n))}function um(n,e){return fp(n,e).canonicalString()}function fp(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hE(n){const e=Je.fromString(n);return We(gE(e)),e}function pp(n,e){return um(n.databaseId,e.path)}function kf(n,e){const t=hE(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(fE(t))}function dE(n,e){return um(n.databaseId,e)}function zk(n){const e=hE(n);return e.length===4?Je.emptyPath():fE(e)}function mp(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fE(n){return We(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Sv(n,e,t){return{name:pp(n,e),fields:t.value.mapValue.fields}}function $k(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(We(v===void 0||typeof v=="string"),jt.fromBase64String(v||"")):(We(v===void 0||v instanceof Buffer||v instanceof Uint8Array),jt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?G.UNKNOWN:aE(y.code);return new ce(v,y.message||"")}(c);t=new uE(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=kf(n,i.document.name),l=Er(i.document.updateTime),c=i.document.createTime?Er(i.document.createTime):Ie.min(),d=new dn({mapValue:{fields:i.document.fields}}),p=Kt.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new Vc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=kf(n,i.document),l=i.readTime?Er(i.readTime):Ie.min(),c=Kt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new Vc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=kf(n,i.document),l=i.removedTargetIds||[];t=new Vc([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new Dk(o,l),d=i.targetId;t=new lE(d,c)}}return t}function qk(n,e){let t;if(e instanceof Gl)t={update:Sv(n,e.key,e.value)};else if(e instanceof om)t={delete:pp(n,e.key)};else if(e instanceof Hi)t={update:Sv(n,e.key,e.data),updateMask:Zk(e.fieldMask)};else{if(!(e instanceof kk))return Te();t={verify:pp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof rh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Vl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ml)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ih)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Bk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function Wk(n,e){return n&&n.length>0?(We(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?Er(o.updateTime):Er(l);return c.isEqual(Ie.min())&&(c=Er(l)),new Ak(c,o.transformResults||[])}(t,e))):[]}function Hk(n,e){return{documents:[dE(n,e.path)]}}function Kk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=dE(n,o);const l=function(y){if(y.length!==0)return mE(rr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(S){return{field:Mo(S.field),direction:Yk(S.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=dp(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:t,parent:o}}function Gk(n){let e=zk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){We(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(E){const S=pE(E);return S instanceof rr&&qw(S)?S.getFilters():[S]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(S=>function(U){return new Ll(Uo(U.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(E){let S;return S=typeof E=="object"?E.value:E,Ih(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(E){const S=!!E.before,N=E.values||[];return new th(N,S)}(t.startAt));let y=null;return t.endAt&&(y=function(E){const S=!E.before,N=E.values||[];return new th(N,S)}(t.endAt)),fk(e,o,c,l,d,"F",p,y)}function Qk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Uo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Uo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Uo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Uo(t.unaryFilter.field);return _t.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Uo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return rr.create(t.compositeFilter.filters.map(i=>pE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function Yk(n){return Mk[n]}function Xk(n){return Uk[n]}function Jk(n){return Fk[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Uo(n){return Ut.fromServerFormat(n.fieldPath)}function mE(n){return n instanceof _t?function(t){if(t.op==="=="){if(cv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(uv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(uv(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:Xk(t.op),value:t.value}}}(n):n instanceof rr?function(t){const i=t.getFilters().map(o=>mE(o));return i.length===1?i[0]:{compositeFilter:{op:Jk(t.op),filters:i}}}(n):Te()}function Zk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function gE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class bi{constructor(e,t,i,o,l=Ie.min(),c=Ie.min(),d=jt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new bi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class ex{constructor(e){this.ct=e}}function tx(n){const e=Gk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?nh(e,e.limit,"L"):e}/**
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
 */class nx{constructor(){this.un=new rx}addToCollectionParentIndex(e,t){return this.un.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(zi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(zi.min())}updateCollectionGroup(e,t,i){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class rx{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Ft(Je.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Ft(Je.comparator)).toArray()}}/**
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
 */class ea{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ea(0)}static kn(){return new ea(-1)}}/**
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
 */class ix{constructor(){this.changes=new ua(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ox{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&wl(i.mutation,o,In.empty(),St.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Oe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Ss();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=dl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ss();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Oe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Xr();const c=vl(),d=function(){return vl()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Hi)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),wl(v.mutation,y,v.mutation.getFieldMask(),St.now())):c.set(y.key,In.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var E;return d.set(y,new sx(v,(E=c.get(y))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=vl();let o=new st((c,d)=>c-d),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||In.empty();v=d.applyToLocalView(y,v),i.set(p,v);const E=(o.get(d.batchId)||Oe()).add(p);o=o.insert(d.batchId,E)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,E=Zw();v.forEach(S=>{if(!l.has(S)){const N=sE(t.get(S),i.get(S));N!==null&&E.set(S,N),l=l.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return Z.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Z.resolve(Ss());let d=-1,p=l;return c.next(y=>Z.forEach(y,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(S=>{p=p.insert(v,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Oe())).next(v=>({batchId:d,changes:Jw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=dl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=dl();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,p=>{const y=function(E,S){return new la(S,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((E,S)=>{c=c.insert(E,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Kt.newInvalidDocument(v)))});let d=dl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&wl(v.mutation,y,In.empty(),St.now()),Rh(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class ax{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Z.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Er(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:tx(o.bundledQuery),readTime:Er(o.readTime)}}(t)),Z.resolve()}}/**
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
 */class lx{constructor(){this.overlays=new st(ye.comparator),this.Ir=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ss();return Z.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),Z.resolve()}getOverlaysForCollection(e,t,i){const o=Ss(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new st((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Ss(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Z.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Nk(t,i));let l=this.Ir.get(t);l===void 0&&(l=Oe(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
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
 */class ux{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class cm{constructor(){this.Tr=new Ft(Nt.Er),this.dr=new Ft(Nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new Nt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new Nt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ye(new Je([])),i=new Nt(t,e),o=new Nt(t,e+1),l=[];return this.dr.forEachInRange([i,o],c=>{this.Vr(c),l.push(c.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new Je([])),i=new Nt(t,e),o=new Nt(t,e+1);let l=Oe();return this.dr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Nt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Nt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||ze(e.wr,t.wr)}static Ar(e,t){return ze(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
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
 */class cx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ft(Nt.Er)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new xk(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.br=this.br.add(new Nt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],c=>{const d=this.Dr(c.wr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ft(ze);return t.forEach(o=>{const l=new Nt(o,0),c=new Nt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],d=>{i=i.add(d.wr)})}),Z.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new Nt(new ye(l),0);let d=new Ft(ze);return this.br.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.wr)),!0)},c),Z.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){We(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Z.forEach(t.mutations,o=>{const l=new Nt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new Nt(t,0),o=this.br.firstAfterOrEqual(i);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class hx{constructor(e){this.Mr=e,this.docs=function(){return new st(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Z.resolve(i?i.document.mutableCopy():Kt.newInvalidDocument(t))}getEntries(e,t){let i=Xr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Kt.newInvalidDocument(o))}),Z.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Xr();const c=t.path,d=new ye(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||GP(KP(v),i)<=0||(o.has(v.key)||Rh(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return Z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new dx(this)}getSize(e){return Z.resolve(this.size)}}class dx extends ix{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),Z.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class fx{constructor(e){this.persistence=e,this.Nr=new ua(t=>nm(t),rm),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cm,this.targetCount=0,this.kr=ea.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Z.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ea(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Kn(t),Z.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Z.waitFor(l).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Z.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Z.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Z.resolve(i)}containsKey(e,t){return Z.resolve(this.Br.containsKey(t))}}/**
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
 */class px{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Jp(0),this.Kr=!1,this.Kr=!0,this.$r=new ux,this.referenceDelegate=e(this),this.Ur=new fx(this),this.indexManager=new nx,this.remoteDocumentCache=function(o){return new hx(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new ex(t),this.Gr=new ax(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new lx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new cx(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){pe("MemoryPersistence","Starting transaction:",e);const o=new mx(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Z.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class mx extends YP{constructor(e){super(),this.currentSequenceNumber=e}}class hm{constructor(e){this.persistence=e,this.Jr=new cm,this.Yr=null}static Zr(e){return new hm(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Z.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Xr,i=>{const o=ye.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Z.or([()=>Z.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class dm{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new dm(e,t.fromCache,i,o)}}/**
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
 */class gx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rR()?8:XP(Qt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new gx;return this.Xi(e,t,c).next(d=>{if(l.result=d,this.zi)return this.es(e,t,c,d.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(ol()<=Le.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Vo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Z.resolve()):(ol()<=Le.DEBUG&&pe("QueryEngine","Query:",Vo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(ol()<=Le.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Vo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wr(t))):Z.resolve())}Yi(e,t){if(pv(t))return Z.resolve(null);let i=wr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=nh(t,null,"F"),i=wr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Oe(...l);return this.Ji.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.ts(t,d);return this.ns(t,y,c,p.readTime)?this.Yi(e,nh(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,i,o){return pv(t)||o.isEqual(Ie.min())?Z.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?Z.resolve(null):(ol()<=Le.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Vo(t)),this.rs(e,c,t,HP(o,-1)).next(d=>d))})}ts(e,t){let i=new Ft(Yw(e));return t.forEach((o,l)=>{Rh(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return ol()<=Le.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Vo(t)),this.Ji.getDocumentsMatchingQuery(e,t,zi.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */class _x{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new st(ze),this._s=new ua(l=>nm(l),rm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ox(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function vx(n,e,t,i){return new _x(n,e,t,i)}async function yE(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Oe();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({hs:y,removedBatchIds:c,addedBatchIds:d}))})})}function wx(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const E=y.batch,S=E.keys();let N=Z.resolve();return S.forEach(U=>{N=N.next(()=>v.getEntry(p,U)).next(B=>{const b=y.docVersions.get(U);We(b!==null),B.version.compareTo(b)<0&&(E.applyToRemoteDocument(B,y),B.isValidDocument()&&(B.setReadTime(y.commitVersion),v.addEntry(B)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Oe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function _E(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Ex(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach((v,E)=>{const S=o.get(E);if(!S)return;d.push(t.Ur.removeMatchingKeys(l,v.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(l,v.addedDocuments,E)));let N=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?N=N.withResumeToken(jt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):v.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(v.resumeToken,i)),o=o.insert(E,N),function(B,b,H){return B.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(S,N,v)&&d.push(t.Ur.updateTargetData(l,N))});let p=Xr(),y=Oe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(Tx(l,c,e.documentUpdates).next(v=>{p=v.Ps,y=v.Is})),!i.isEqual(Ie.min())){const v=t.Ur.getLastRemoteSnapshotVersion(l).next(E=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.os=o,l))}function Tx(n,e,t){let i=Oe(),o=Oe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Xr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):pe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Ps:c,Is:o}})}function Ix(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Sx(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,Z.resolve(o)):t.Ur.allocateTargetId(i).next(c=>(o=new bi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function gp(n,e,t){const i=Se(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Kl(c))throw c;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function Rv(n,e,t){const i=Se(n);let o=Ie.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const E=Se(p),S=E._s.get(v);return S!==void 0?Z.resolve(E.os.get(S)):E.Ur.getTargetData(y,v)}(i,c,wr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Ie.min(),t?l:Oe())).next(d=>(Rx(i,mk(e),d),{documents:d,Ts:l})))}function Rx(n,e,t){let i=n.us.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class Av{constructor(){this.activeTargetIds=Ek()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ax{constructor(){this.so=new Av,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Av,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Cx{_o(e){}shutdown(){}}/**
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
 */class Cv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ec=null;function xf(){return Ec===null?Ec=function(){return 268435456+Math.round(2147483648*Math.random())}():Ec++,"0x"+Ec.toString(16)}/**
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
 */const Px={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Wt="WebChannelConnection";class xx extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const d=xf(),p=this.xo(t,i.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,c),this.No(t,p,y,o).then(v=>(pe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Yo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}Lo(t,i,o,l,c,d){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+aa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}xo(t,i){const o=Px[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=xf();return new Promise((c,d)=>{const p=new Dw;p.setWithCredentials(!0),p.listenOnce(Ow.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Oc.NO_ERROR:const v=p.getResponseJson();pe(Wt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case Oc.TIMEOUT:pe(Wt,`RPC '${e}' ${l} timed out`),d(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case Oc.HTTP_ERROR:const E=p.getStatus();if(pe(Wt,`RPC '${e}' ${l} failed with status:`,E,"response text:",p.getResponseText()),E>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const U=function(b){const H=b.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(H)>=0?H:G.UNKNOWN}(N.status);d(new ce(U,N.message))}else d(new ce(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ce(G.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{pe(Wt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);pe(Wt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Bo(e,t,i){const o=xf(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Vw(),d=Lw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");pe(Wt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const E=c.createWebChannel(v,p);let S=!1,N=!1;const U=new kx({Io:b=>{N?pe(Wt,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(S||(pe(Wt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),S=!0),pe(Wt,`RPC '${e}' stream ${o} sending:`,b),E.send(b))},To:()=>E.close()}),B=(b,H,J)=>{b.listen(H,K=>{try{J(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return B(E,hl.EventType.OPEN,()=>{N||(pe(Wt,`RPC '${e}' stream ${o} transport opened.`),U.yo())}),B(E,hl.EventType.CLOSE,()=>{N||(N=!0,pe(Wt,`RPC '${e}' stream ${o} transport closed`),U.So())}),B(E,hl.EventType.ERROR,b=>{N||(N=!0,Yo(Wt,`RPC '${e}' stream ${o} transport errored:`,b),U.So(new ce(G.UNAVAILABLE,"The operation could not be completed")))}),B(E,hl.EventType.MESSAGE,b=>{var H;if(!N){const J=b.data[0];We(!!J);const K=J,ee=K.error||((H=K[0])===null||H===void 0?void 0:H.error);if(ee){pe(Wt,`RPC '${e}' stream ${o} received error:`,ee);const le=ee.status;let re=function(C){const x=gt[C];if(x!==void 0)return aE(x)}(le),A=ee.message;re===void 0&&(re=G.INTERNAL,A="Unknown error status: "+le+" with message "+ee.message),N=!0,U.So(new ce(re,A)),E.close()}else pe(Wt,`RPC '${e}' stream ${o} received:`,J),U.bo(J)}}),B(d,bw.STAT_EVENT,b=>{b.stat===op.PROXY?pe(Wt,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===op.NOPROXY&&pe(Wt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.wo()},0),U}}function Nf(){return typeof document<"u"?document:null}/**
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
 */function kh(n){return new jk(n,!0)}/**
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
 */class vE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wE{constructor(e,t,i,o,l,c,d,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vE(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Yr(t.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nx extends wE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=$k(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?Er(c.readTime):Ie.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=mp(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=cp(p)?{documents:Hk(l,p)}:{query:Kk(l,p)._t},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=cE(l,c.resumeToken);const y=dp(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=sh(l,c.snapshotVersion.toTimestamp());const y=dp(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=Qk(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=mp(this.serializer),t.removeTarget=e,this.a_(t)}}class Dx extends wE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Wk(e.writeResults,e.commitTime),i=Er(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=mp(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>qk(this.serializer,i))};this.a_(t)}}/**
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
 */class Ox extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Mo(e,fp(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(G.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Lo(e,fp(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(G.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class bx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yr(t),this.D_=!1):pe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Lx{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(c=>{i.enqueueAndForget(async()=>{Bs(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.L_.add(4),await Yl(y),y.q_.set("Unknown"),y.L_.delete(4),await xh(y)}(this))})}),this.q_=new bx(i,o)}}async function xh(n){if(Bs(n))for(const e of n.B_)await e(!0)}async function Yl(n){for(const e of n.B_)await e(!1)}function EE(n,e){const t=Se(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),gm(t)?mm(t):ca(t).r_()&&pm(t,e))}function fm(n,e){const t=Se(n),i=ca(t);t.N_.delete(e),i.r_()&&TE(t,e),t.N_.size===0&&(i.r_()?i.o_():Bs(t)&&t.q_.set("Unknown"))}function pm(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ca(n).A_(e)}function TE(n,e){n.Q_.xe(e),ca(n).R_(e)}function mm(n){n.Q_=new Vk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ca(n).start(),n.q_.v_()}function gm(n){return Bs(n)&&!ca(n).n_()&&n.N_.size>0}function Bs(n){return Se(n).L_.size===0}function IE(n){n.Q_=void 0}async function Vx(n){n.q_.set("Online")}async function Mx(n){n.N_.forEach((e,t)=>{pm(n,e)})}async function Ux(n,e){IE(n),gm(n)?(n.q_.M_(e),mm(n)):n.q_.set("Unknown")}async function Fx(n,e,t){if(n.q_.set("Online"),e instanceof uE&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.N_.delete(d),o.Q_.removeTarget(d))}(n,e)}catch(i){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await oh(n,i)}else if(e instanceof Vc?n.Q_.Ke(e):e instanceof lE?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Ie.min()))try{const i=await _E(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.Q_.rt(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.N_.get(y);v&&l.N_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.N_.get(p);if(!v)return;l.N_.set(p,v.withResumeToken(jt.EMPTY_BYTE_STRING,v.snapshotVersion)),TE(l,p);const E=new bi(v.target,p,y,v.sequenceNumber);pm(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){pe("RemoteStore","Failed to raise snapshot:",i),await oh(n,i)}}async function oh(n,e,t){if(!Kl(e))throw e;n.L_.add(1),await Yl(n),n.q_.set("Offline"),t||(t=()=>_E(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await xh(n)})}function SE(n,e){return e().catch(t=>oh(n,t,e))}async function Nh(n){const e=Se(n),t=qi(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;jx(e);)try{const o=await Ix(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,Bx(e,o)}catch(o){await oh(e,o)}RE(e)&&AE(e)}function jx(n){return Bs(n)&&n.O_.length<10}function Bx(n,e){n.O_.push(e);const t=qi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function RE(n){return Bs(n)&&!qi(n).n_()&&n.O_.length>0}function AE(n){qi(n).start()}async function zx(n){qi(n).p_()}async function $x(n){const e=qi(n);for(const t of n.O_)e.m_(t.mutations)}async function qx(n,e,t){const i=n.O_.shift(),o=am.from(i,e,t);await SE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Nh(n)}async function Wx(n,e){e&&qi(n).V_&&await async function(i,o){if(function(c){return Ok(c)&&c!==G.ABORTED}(o.code)){const l=i.O_.shift();qi(i).s_(),await SE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Nh(i)}}(n,e),RE(n)&&AE(n)}async function Pv(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const i=Bs(t);t.L_.add(3),await Yl(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await xh(t)}async function Hx(n,e){const t=Se(n);e?(t.L_.delete(2),await xh(t)):e||(t.L_.add(2),await Yl(t),t.q_.set("Unknown"))}function ca(n){return n.K_||(n.K_=function(t,i,o){const l=Se(t);return l.w_(),new Nx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Vx.bind(null,n),Ro:Mx.bind(null,n),mo:Ux.bind(null,n),d_:Fx.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),gm(n)?mm(n):n.q_.set("Unknown")):(await n.K_.stop(),IE(n))})),n.K_}function qi(n){return n.U_||(n.U_=function(t,i,o){const l=Se(t);return l.w_(),new Dx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:zx.bind(null,n),mo:Wx.bind(null,n),f_:$x.bind(null,n),g_:qx.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Nh(n)):(await n.U_.stop(),n.O_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class ym{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new ym(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _m(n,e){if(Yr("AsyncQueue",`${e}: ${n}`),Kl(n))return new ce(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class $o{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=dl(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new $o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof $o)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new $o;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class kv{constructor(){this.W_=new st(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ta{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new ta(e,t,$o.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class Kx{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Gx{constructor(){this.queries=xv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=xv(),l.forEach((c,d)=>{for(const p of d.j_)p.onError(i)})})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function xv(){return new ua(n=>Qw(n),Sh)}async function CE(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new Kx,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=_m(c,`Initialization of query '${Vo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&vm(t)}async function PE(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Qx(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.j_)d.X_(o)&&(i=!0);c.z_=o}}i&&vm(t)}function Yx(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function vm(n){n.Y_.forEach(e=>{e.next()})}var yp,Nv;(Nv=yp||(yp={})).ea="default",Nv.Cache="cache";class kE{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new ta(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=ta.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==yp.Cache}}/**
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
 */class xE{constructor(e){this.key=e}}class NE{constructor(e){this.key=e}}class Xx{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Oe(),this.mutatedKeys=Oe(),this.Aa=Yw(e),this.Ra=new $o(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new kv,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,E)=>{const S=o.get(v),N=Rh(this.query,E)?E:null,U=!!S&&this.mutatedKeys.has(S.key),B=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let b=!1;S&&N?S.data.isEqual(N.data)?U!==B&&(i.track({type:3,doc:N}),b=!0):this.ga(S,N)||(i.track({type:2,doc:N}),b=!0,(p&&this.Aa(N,p)>0||y&&this.Aa(N,y)<0)&&(d=!0)):!S&&N?(i.track({type:0,doc:N}),b=!0):S&&!N&&(i.track({type:1,doc:S}),b=!0,(p||y)&&(d=!0)),b&&(N?(c=c.add(N),l=B?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:d,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((v,E)=>function(N,U){const B=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return B(N)-B(U)}(v.type,E.type)||this.Aa(v.doc,E.doc)),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,c.length!==0||y?{snapshot:new ta(this.query,e.Ra,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new kv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Oe(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new NE(i))}),this.da.forEach(i=>{e.has(i)||t.push(new xE(i))}),t}ba(e){this.Ta=e.Ts,this.da=Oe();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return ta.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Jx{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Zx{constructor(e){this.key=e,this.va=!1}}class eN{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new ua(d=>Qw(d),Sh),this.Ma=new Map,this.xa=new Set,this.Oa=new st(ye.comparator),this.Na=new Map,this.La=new cm,this.Ba={},this.ka=new Map,this.qa=ea.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function tN(n,e,t=!0){const i=ME(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await DE(i,e,t,!0),o}async function nN(n,e){const t=ME(n);await DE(t,e,!0,!1)}async function DE(n,e,t,i){const o=await Sx(n.localStore,wr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await rN(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&EE(n.remoteStore,o),d}async function rN(n,e,t,i,o){n.Ka=(E,S,N)=>async function(B,b,H,J){let K=b.view.ma(H);K.ns&&(K=await Rv(B.localStore,b.query,!1).then(({documents:A})=>b.view.ma(A,K)));const ee=J&&J.targetChanges.get(b.targetId),le=J&&J.targetMismatches.get(b.targetId)!=null,re=b.view.applyChanges(K,B.isPrimaryClient,ee,le);return Ov(B,b.targetId,re.wa),re.snapshot}(n,E,S,N);const l=await Rv(n.localStore,e,!0),c=new Xx(e,l.Ts),d=c.ma(l.documents),p=Ql.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);Ov(n,t,y.wa);const v=new Jx(e,t,c);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function iN(n,e,t){const i=Se(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(c=>!Sh(c,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await gp(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&fm(i.remoteStore,o.targetId),_p(i,o.targetId)}).catch(Hl)):(_p(i,o.targetId),await gp(i.localStore,o.targetId,!0))}async function sN(n,e){const t=Se(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),fm(t.remoteStore,i.targetId))}async function oN(n,e,t){const i=fN(n);try{const o=await function(c,d){const p=Se(c),y=St.now(),v=d.reduce((N,U)=>N.add(U.key),Oe());let E,S;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let U=Xr(),B=Oe();return p.cs.getEntries(N,v).next(b=>{U=b,U.forEach((H,J)=>{J.isValidDocument()||(B=B.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,U)).next(b=>{E=b;const H=[];for(const J of d){const K=Pk(J,E.get(J.key).overlayedDocument);K!=null&&H.push(new Hi(J.key,K,Bw(K.value.mapValue),nr.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,H,d)}).next(b=>{S=b;const H=b.applyToLocalDocumentSet(E,B);return p.documentOverlayCache.saveOverlays(N,b.batchId,H)})}).then(()=>({batchId:S.batchId,changes:Jw(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Ba[c.currentUser.toKey()];y||(y=new st(ze)),y=y.insert(d,p),c.Ba[c.currentUser.toKey()]=y}(i,o.batchId,t),await Xl(i,o.changes),await Nh(i.remoteStore)}catch(o){const l=_m(o,"Failed to persist write");t.reject(l)}}async function OE(n,e){const t=Se(n);try{const i=await Ex(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Na.get(l);c&&(We(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?We(c.va):o.removedDocuments.size>0&&(We(c.va),c.va=!1))}),await Xl(t,i,e)}catch(i){await Hl(i)}}function Dv(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,c)=>{const d=c.view.Z_(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Se(c);p.onlineState=d;let y=!1;p.queries.forEach((v,E)=>{for(const S of E.j_)S.Z_(d)&&(y=!0)}),y&&vm(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function aN(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new st(ye.comparator);c=c.insert(l,Kt.newNoDocument(l,Ie.min()));const d=Oe().add(l),p=new Ph(Ie.min(),new Map,new st(ze),c,d);await OE(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),wm(i)}else await gp(i.localStore,e,!1).then(()=>_p(i,e,t)).catch(Hl)}async function lN(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await wx(t.localStore,e);LE(t,i,null),bE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Xl(t,o)}catch(o){await Hl(o)}}async function uN(n,e,t){const i=Se(n);try{const o=await function(c,d){const p=Se(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(E=>(We(E!==null),v=E.keys(),p.mutationQueue.removeMutationBatch(y,E))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);LE(i,e,t),bE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Xl(i,o)}catch(o){await Hl(o)}}function bE(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function LE(n,e,t){const i=Se(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function _p(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||VE(n,i)})}function VE(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(fm(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),wm(n))}function Ov(n,e,t){for(const i of t)i instanceof xE?(n.La.addReference(i.key,e),cN(n,i)):i instanceof NE?(pe("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||VE(n,i.key)):Te()}function cN(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(pe("SyncEngine","New document in limbo: "+t),n.xa.add(i),wm(n))}function wm(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(Je.fromString(e)),i=n.qa.next();n.Na.set(i,new Zx(t)),n.Oa=n.Oa.insert(t,i),EE(n.remoteStore,new bi(wr(im(t.path)),i,"TargetPurposeLimboResolution",Jp.oe))}}async function Xl(n,e,t){const i=Se(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach((d,p)=>{c.push(i.Ka(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=dm.Wi(p.targetId,y);l.push(E)}}))}),await Promise.all(c),i.Ca.d_(o),await async function(p,y){const v=Se(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Z.forEach(y,S=>Z.forEach(S.$i,N=>v.persistence.referenceDelegate.addReference(E,S.targetId,N)).next(()=>Z.forEach(S.Ui,N=>v.persistence.referenceDelegate.removeReference(E,S.targetId,N)))))}catch(E){if(!Kl(E))throw E;pe("LocalStore","Failed to update sequence numbers: "+E)}for(const E of y){const S=E.targetId;if(!E.fromCache){const N=v.os.get(S),U=N.snapshotVersion,B=N.withLastLimboFreeSnapshotVersion(U);v.os=v.os.insert(S,B)}}}(i.localStore,l))}async function hN(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const i=await yE(t.localStore,e);t.currentUser=e,function(l,c){l.ka.forEach(d=>{d.forEach(p=>{p.reject(new ce(G.CANCELLED,c))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Xl(t,i.hs)}}function dN(n,e){const t=Se(n),i=t.Na.get(e);if(i&&i.va)return Oe().add(i.key);{let o=Oe();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const d=t.Fa.get(c);o=o.unionWith(d.view.Va)}return o}}function ME(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=OE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aN.bind(null,e),e.Ca.d_=Qx.bind(null,e.eventManager),e.Ca.$a=Yx.bind(null,e.eventManager),e}function fN(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uN.bind(null,e),e}class ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=kh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return vx(this.persistence,new yx,e.initialUser,this.serializer)}Ga(e){return new px(hm.Zr,this.serializer)}Wa(e){return new Ax}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ah.provider={build:()=>new ah};class vp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Dv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=hN.bind(null,this.syncEngine),await Hx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gx}()}createDatastore(e){const t=kh(e.databaseInfo.databaseId),i=function(l){return new xx(l)}(e.databaseInfo);return function(l,c,d,p){return new Ox(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new Lx(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>Dv(this.syncEngine,t,0),function(){return Cv.D()?new Cv:new Cx}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const E=new eN(o,l,c,d,p,y);return v&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);pe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Yl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vp.provider={build:()=>new vp};/**
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
 */class UE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class pN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=Uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{pe("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(pe("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=_m(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Df(n,e){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await yE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mN(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Pv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Pv(e.remoteStore,o)),n._onlineComponents=e}async function mN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Df(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Yo("Error using user provided cache. Falling back to memory cache: "+t),await Df(n,new ah)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),await Df(n,new ah);return n._offlineComponents}async function FE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),await bv(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),await bv(n,new vp))),n._onlineComponents}function gN(n){return FE(n).then(e=>e.syncEngine)}async function wp(n){const e=await FE(n),t=e.eventManager;return t.onListen=tN.bind(null,e.syncEngine),t.onUnlisten=iN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=nN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=sN.bind(null,e.syncEngine),t}function yN(n,e,t={}){const i=new Fi;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new UE({next:S=>{v.Za(),c.enqueueAndForget(()=>PE(l,E)),S.fromCache&&p.source==="server"?y.reject(new ce(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),E=new kE(d,v,{includeMetadataChanges:!0,_a:!0});return CE(l,E)}(await wp(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function jE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Lv=new Map;/**
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
 */function BE(n,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function _N(n,e,t,i){if(e===!0&&i===!0)throw new ce(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Vv(n){if(!ye.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Mv(n){if(ye.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dh(n);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Uv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new MP;switch(i.type){case"firstParty":return new BP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Lv.get(t);i&&(pe("ComponentProvider","Removing Datastore"),Lv.delete(t),i.terminate())}(this),Promise.resolve()}}function vN(n,e,t,i={}){var o;const l=(n=Tr(n,Oh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ht.MOCK_USER;else{d=W0(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ht(y)}n._authCredentials=new UP(new Mw(d,p))}}/**
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
 */class ti{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class fn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ji(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class ji extends ti{constructor(e,t,i){super(e,t,im(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ye(e))}withConverter(e){return new ji(this.firestore,e,this._path)}}function El(n,e,...t){if(n=it(n),BE("collection","path",e),n instanceof Oh){const i=Je.fromString(e,...t);return Mv(i),new ji(n,null,i)}{if(!(n instanceof fn||n instanceof ji))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return Mv(i),new ji(n.firestore,null,i)}}function Ep(n,e,...t){if(n=it(n),arguments.length===1&&(e=Uw.newId()),BE("doc","path",e),n instanceof Oh){const i=Je.fromString(e,...t);return Vv(i),new fn(n,null,new ye(i))}{if(!(n instanceof fn||n instanceof ji))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return Vv(i),new fn(n.firestore,n instanceof ji?n.converter:null,new ye(i))}}/**
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
 */class Fv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vE(this,"async_queue_retry"),this.Vu=()=>{const i=Nf();i&&pe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Nf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Nf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Fi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Kl(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Yr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=ym.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function jv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Vs extends Oh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Fv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fv(e),this._firestoreClient=void 0,await e}}}function wN(n,e){const t=typeof n=="object"?n:Fp(),i=typeof n=="string"?n:"(default)",o=vh(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=z0("firestore");l&&vN(o,...l)}return o}function Em(n){if(n._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||EN(n),n._firestoreClient}function EN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new ek(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,jE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new pN(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class na{constructor(e){this._byteString=e}static fromBase64String(e){try{return new na(jt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new na(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class bh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Tm{constructor(e){this._methodName=e}}/**
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
 */class Im{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
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
 */class Sm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const TN=/^__.*__$/;class IN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Gl(e,this.data,t,this.fieldTransforms)}}class zE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $E(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Rm{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return lh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($E(this.Cu)&&TN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class SN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||kh(e)}Qu(e,t,i,o=!1){return new Rm({Cu:e,methodName:t,qu:i,path:Ut.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Am(n){const e=n._freezeSettings(),t=kh(n._databaseId);return new SN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function RN(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);Cm("Data must be an object, but it was:",c,i);const d=qE(i,c);let p,y;if(l.merge)p=new In(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const S=Tp(e,E,t);if(!c.contains(S))throw new ce(G.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);HE(v,S)||v.push(S)}p=new In(v),y=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,y=c.fieldTransforms;return new IN(new dn(d),p,y)}class Lh extends Tm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lh}}function AN(n,e,t,i){const o=n.Qu(1,e,t);Cm("Data must be an object, but it was:",o,i);const l=[],c=dn.empty();js(i,(p,y)=>{const v=Pm(e,p,t);y=it(y);const E=o.Nu(v);if(y instanceof Lh)l.push(v);else{const S=Jl(y,E);S!=null&&(l.push(v),c.set(v,S))}});const d=new In(l);return new zE(c,d,o.fieldTransforms)}function CN(n,e,t,i,o,l){const c=n.Qu(1,e,t),d=[Tp(e,i,t)],p=[o];if(l.length%2!=0)throw new ce(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Tp(e,l[S])),p.push(l[S+1]);const y=[],v=dn.empty();for(let S=d.length-1;S>=0;--S)if(!HE(y,d[S])){const N=d[S];let U=p[S];U=it(U);const B=c.Nu(N);if(U instanceof Lh)y.push(N);else{const b=Jl(U,B);b!=null&&(y.push(N),v.set(N,b))}}const E=new In(y);return new zE(v,E,c.fieldTransforms)}function PN(n,e,t,i=!1){return Jl(t,n.Qu(i?4:3,e))}function Jl(n,e){if(WE(n=it(n)))return Cm("Unsupported field value:",e,n),qE(n,e);if(n instanceof Tm)return function(i,o){if(!$E(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=Jl(d,o.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Tk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=St.fromDate(i);return{timestampValue:sh(o.serializer,l)}}if(i instanceof St){const l=new St(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:sh(o.serializer,l)}}if(i instanceof Im)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof na)return{bytesValue:cE(o.serializer,i._byteString)};if(i instanceof fn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:um(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Sm)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.Bu("VectorValues must only contain numeric values.");return sm(d.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${Dh(i)}`)}(n,e)}function qE(n,e){const t={};return Fw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(n,(i,o)=>{const l=Jl(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function WE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof Im||n instanceof na||n instanceof fn||n instanceof Tm||n instanceof Sm)}function Cm(n,e,t){if(!WE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Dh(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Tp(n,e,t){if((e=it(e))instanceof bh)return e._internalPath;if(typeof e=="string")return Pm(n,e);throw lh("Field path arguments must be of type string or ",n,!1,void 0,t)}const kN=new RegExp("[~\\*/\\[\\]]");function Pm(n,e,t){if(e.search(kN)>=0)throw lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new bh(...e.split("."))._internalPath}catch{throw lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function lh(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ce(G.INVALID_ARGUMENT,d+n+p)}function HE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class KE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xN extends KE{data(){return super.data()}}function Vh(n,e){return typeof e=="string"?Pm(n,e):e instanceof bh?e._internalPath:e._delegate._internalPath}/**
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
 */function GE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class km{}class xm extends km{}function Mc(n,e,...t){let i=[];e instanceof km&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof Nm).length,d=l.filter(p=>p instanceof Mh).length;if(c>1||c>0&&d>0)throw new ce(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Mh extends xm{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Mh(e,t,i)}_apply(e){const t=this._parse(e);return XE(e._query,t),new ti(e.firestore,e.converter,hp(e._query,t))}_parse(e){const t=Am(e.firestore);return function(l,c,d,p,y,v,E){let S;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ce(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){zv(E,v);const N=[];for(const U of E)N.push(Bv(p,l,U));S={arrayValue:{values:N}}}else S=Bv(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||zv(E,v),S=PN(d,c,E,v==="in"||v==="not-in");return _t.create(y,v,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Of(n,e,t){const i=e,o=Vh("where",n);return Mh._create(o,i,t)}class Nm extends km{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:rr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)XE(c,p),c=hp(c,p)}(e._query,t),new ti(e.firestore,e.converter,hp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dm extends xm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Dm(e,t)}_apply(e){const t=function(o,l,c){if(o.startAt!==null)throw new ce(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ll(l,c)}(e._query,this._field,this._direction);return new ti(e.firestore,e.converter,function(o,l){const c=o.explicitOrderBy.concat([l]);return new la(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function QE(n,e="asc"){const t=e,i=Vh("orderBy",n);return Dm._create(i,t)}class Om extends xm{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Om(e,t,i)}_apply(e){return new ti(e.firestore,e.converter,nh(e._query,this._limit,this._limitType))}}function YE(n){return Om._create("limit",n,"F")}function Bv(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ce(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gw(e)&&t.indexOf("/")!==-1)throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Je.fromString(t));if(!ye.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return lv(n,new ye(i))}if(t instanceof fn)return lv(n,t._key);throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Dh(t)}.`)}function zv(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XE(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NN{convertValue(e,t="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return js(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>dt(c.doubleValue));return new Sm(l)}convertGeoPoint(e){return new Im(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=em(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Dl(e));default:return null}}convertTimestamp(e){const t=$i(e);return new St(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Je.fromString(e);We(gE(i));const o=new Ol(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Yr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function DN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class pl{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JE extends KE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Vh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Uc extends JE{data(e={}){return super.data(e)}}class ZE{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new pl(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Uc(this._firestore,this._userDataWriter,i.key,i,new pl(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new Uc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new pl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Uc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new pl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:ON(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ON(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class bm extends NN{constructor(e){super(),this.firestore=e}convertBytes(e){return new na(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function bf(n){n=Tr(n,ti);const e=Tr(n.firestore,Vs),t=Em(e),i=new bm(e);return GE(n._query),yN(t,n._query).then(o=>new ZE(e,i,n,o))}function uh(n,e,t,...i){n=Tr(n,fn);const o=Tr(n.firestore,Vs),l=Am(o);let c;return c=typeof(e=it(e))=="string"||e instanceof bh?CN(l,"updateDoc",n._key,e,t,i):AN(l,"updateDoc",n._key,e),Lm(o,[c.toMutation(n._key,nr.exists(!0))])}function bN(n){return Lm(Tr(n.firestore,Vs),[new om(n._key,nr.none())])}function LN(n,e){const t=Tr(n.firestore,Vs),i=Ep(n),o=DN(n.converter,e);return Lm(t,[RN(Am(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,nr.exists(!1))]).then(()=>i)}function VN(n,...e){var t,i,o;n=it(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||jv(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(jv(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,v;if(n instanceof fn)y=Tr(n.firestore,Vs),v=im(n._key.path),p={next:E=>{e[c]&&e[c](MN(y,n,E))},error:e[c+1],complete:e[c+2]};else{const E=Tr(n,ti);y=Tr(E.firestore,Vs),v=E._query;const S=new bm(y);p={next:N=>{e[c]&&e[c](new ZE(y,S,E,N))},error:e[c+1],complete:e[c+2]},GE(n._query)}return function(S,N,U,B){const b=new UE(B),H=new kE(N,b,U);return S.asyncQueue.enqueueAndForget(async()=>CE(await wp(S),H)),()=>{b.Za(),S.asyncQueue.enqueueAndForget(async()=>PE(await wp(S),H))}}(Em(y),v,d,p)}function Lm(n,e){return function(i,o){const l=new Fi;return i.asyncQueue.enqueueAndForget(async()=>oN(await gN(i),o,l)),l.promise}(Em(n),e)}function MN(n,e,t){const i=t.docs.get(e._key),o=new bm(n);return new JE(n,o,e._key,i,new pl(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){aa=o})(Fs),xs(new Bi("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Vs(new FP(i.getProvider("auth-internal")),new $P(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ol(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),_r(rv,"4.7.3",e),_r(rv,"4.7.3","esm2017")})();/**
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
 */const eT="firebasestorage.googleapis.com",tT="storageBucket",UN=2*60*1e3,FN=10*60*1e3;/**
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
 */class ut extends pn{constructor(e,t,i=0){super(Lf(e),`Firebase Storage: ${t} (${Lf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function Lf(n){return"storage/"+n}function Vm(){const n="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,n)}function jN(n){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function BN(n){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zN(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,n)}function $N(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qN(n){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function WN(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HN(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function KN(n){return new ut(lt.INVALID_URL,"Invalid URL '"+n+"'.")}function GN(n){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function QN(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tT+"' property when initializing the app?")}function YN(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XN(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JN(n){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ip(n){return new ut(lt.INVALID_ARGUMENT,n)}function nT(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function ZN(n){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Tl(n,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function al(n){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Sn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Sn.makeFromUrl(e,t)}catch{return new Sn(e,"")}if(i.path==="")return i;throw GN(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ee){ee.path.charAt(ee.path.length-1)==="/"&&(ee.path_=ee.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ee){ee.path_=decodeURIComponent(ee.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",N=new RegExp(`^https?://${E}/${v}/b/${o}/o${S}`,"i"),U={bucket:1,path:3},B=t===eT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",H=new RegExp(`^https?://${B}/${o}/${b}`,"i"),K=[{regex:d,indices:p,postModify:l},{regex:N,indices:U,postModify:y},{regex:H,indices:{bucket:1,path:2},postModify:y}];for(let ee=0;ee<K.length;ee++){const le=K[ee],re=le.regex.exec(e);if(re){const A=re[le.indices.bucket];let I=re[le.indices.path];I||(I=""),i=new Sn(A,I),le.postModify(i);break}}if(i==null)throw KN(e);return i}}class eD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tD(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...b){y||(y=!0,e.apply(null,b))}function E(b){o=setTimeout(()=>{o=null,n(N,p())},b)}function S(){l&&clearTimeout(l)}function N(b,...H){if(y){S();return}if(b){S(),v.call(null,b,...H);return}if(p()||c){S(),v.call(null,b,...H);return}i<64&&(i*=2);let K;d===1?(d=2,K=0):K=(i+Math.random())*1e3,E(K)}let U=!1;function B(b){U||(U=!0,S(),!y&&(o!==null?(b||(d=2),clearTimeout(o),E(0)):b||(d=1)))}return E(0),l=setTimeout(()=>{c=!0,B(!0)},t),B}function nD(n){n(!1)}/**
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
 */function rD(n){return n!==void 0}function iD(n){return typeof n=="object"&&!Array.isArray(n)}function Mm(n){return typeof n=="string"||n instanceof String}function $v(n){return Um()&&n instanceof Blob}function Um(){return typeof Blob<"u"}function qv(n,e,t,i){if(i<e)throw Ip(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Ip(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Uh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function rT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ps;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ps||(Ps={}));/**
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
 */function sD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class oD{constructor(e,t,i,o,l,c,d,p,y,v,E,S=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,U)=>{this.resolve_=N,this.reject_=U,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Tc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ps.NO_ERROR,p=l.getStatus();if(!d||sD(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ps.ABORT;i(!1,new Tc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Tc(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());rD(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Vm();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?nT():HN();c(p)}else{const p=WN();c(p)}};this.canceled_?t(!1,new Tc(!1,null,!0)):this.backoffId_=tD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Tc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function aD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function lD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uD(n,e){e&&(n["X-Firebase-GMPID"]=e)}function cD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function hD(n,e,t,i,o,l,c=!0){const d=rT(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return uD(y,e),aD(y,t),lD(y,l),cD(y,i),new oD(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function dD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fD(...n){const e=dD();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Um())return new Blob(n);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function mD(n){if(typeof atob>"u")throw JN("base-64");return atob(n)}/**
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
 */const yr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vf{constructor(e,t){this.data=e,this.contentType=t||null}}function gD(n,e){switch(n){case yr.RAW:return new Vf(iT(e));case yr.BASE64:case yr.BASE64URL:return new Vf(sT(n,e));case yr.DATA_URL:return new Vf(_D(e),vD(e))}throw Vm()}function iT(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function yD(n){let e;try{e=decodeURIComponent(n)}catch{throw Tl(yr.DATA_URL,"Malformed data URL.")}return iT(e)}function sT(n,e){switch(n){case yr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Tl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case yr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Tl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=mD(e)}catch(o){throw o.message.includes("polyfill")?o:Tl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class oT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Tl(yr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=wD(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function _D(n){const e=new oT(n);return e.base64?sT(yr.BASE64,e.rest):yD(e.rest)}function vD(n){return new oT(n).contentType}function wD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Di{constructor(e,t){let i=0,o="";$v(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if($v(this.data_)){const i=this.data_,o=pD(i,e,t);return o===null?null:new Di(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Di(i,!0)}}static getBlob(...e){if(Um()){const t=e.map(i=>i instanceof Di?i.data_:i);return new Di(fD.apply(null,t))}else{const t=e.map(c=>Mm(c)?gD(yr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Di(o,!0)}}uploadData(){return this.data_}}/**
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
 */function aT(n){let e;try{e=JSON.parse(n)}catch{return null}return iD(e)?e:null}/**
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
 */function ED(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function TD(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function lT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function ID(n,e){return e}class tn{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||ID}}let Ic=null;function SD(n){return!Mm(n)||n.length<2?n:lT(n)}function uT(){if(Ic)return Ic;const n=[];n.push(new tn("bucket")),n.push(new tn("generation")),n.push(new tn("metageneration")),n.push(new tn("name","fullPath",!0));function e(l,c){return SD(c)}const t=new tn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new tn("size");return o.xform=i,n.push(o),n.push(new tn("timeCreated")),n.push(new tn("updated")),n.push(new tn("md5Hash",null,!0)),n.push(new tn("cacheControl",null,!0)),n.push(new tn("contentDisposition",null,!0)),n.push(new tn("contentEncoding",null,!0)),n.push(new tn("contentLanguage",null,!0)),n.push(new tn("contentType",null,!0)),n.push(new tn("metadata","customMetadata",!0)),Ic=n,Ic}function RD(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Sn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function AD(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return RD(i,n),i}function cT(n,e,t){const i=aT(e);return i===null?null:AD(n,i,t)}function CD(n,e,t,i){const o=aT(e);if(o===null||!Mm(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,E=n.fullPath,S="/b/"+c(v)+"/o/"+c(E),N=Uh(S,t,i),U=rT({alt:"media",token:y});return N+U})[0]}function PD(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class Fm{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function hT(n){if(!n)throw Vm()}function kD(n,e){function t(i,o){const l=cT(n,o,e);return hT(l!==null),l}return t}function xD(n,e){function t(i,o){const l=cT(n,o,e);return hT(l!==null),CD(l,o,n.host,n._protocol)}return t}function dT(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=$N():o=zN():t.getStatus()===402?o=BN(n.bucket):t.getStatus()===403?o=qN(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function fT(n){const e=dT(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=jN(n.path)),l.serverResponse=o.serverResponse,l}return t}function ND(n,e,t){const i=e.fullServerUrl(),o=Uh(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new Fm(o,l,xD(n,t),c);return d.errorHandler=fT(e),d}function DD(n,e){const t=e.fullServerUrl(),i=Uh(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function c(p,y){}const d=new Fm(i,o,c,l);return d.successCodes=[200,204],d.errorHandler=fT(e),d}function OD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function bD(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=OD(null,e)),i}function LD(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let ee=0;ee<2;ee++)K=K+Math.random().toString().slice(2);return K}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=bD(e,i,o),v=PD(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,S=`\r
--`+p+"--",N=Di.getBlob(E,i,S);if(N===null)throw YN();const U={name:y.fullPath},B=Uh(l,n.host,n._protocol),b="POST",H=n.maxUploadRetryTime,J=new Fm(B,b,kD(n,t),H);return J.urlParams=U,J.headers=c,J.body=N.uploadData(),J.errorHandler=dT(e),J}class VD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ps.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ps.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ps.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw al("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw al("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw al("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw al("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw al("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class MD extends VD{initXhr(){this.xhr_.responseType="text"}}function jm(){return new MD}/**
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
 */class Ms{constructor(e,t){this._service=e,t instanceof Sn?this._location=t:this._location=Sn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ms(e,t)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lT(this._location.path)}get storage(){return this._service}get parent(){const e=ED(this._location.path);if(e===null)return null;const t=new Sn(this._location.bucket,e);return new Ms(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ZN(e)}}function UD(n,e,t){n._throwIfRoot("uploadBytes");const i=LD(n.storage,n._location,uT(),new Di(e,!0),t);return n.storage.makeRequestWithTokens(i,jm).then(o=>({metadata:o,ref:n}))}function FD(n){n._throwIfRoot("getDownloadURL");const e=ND(n.storage,n._location,uT());return n.storage.makeRequestWithTokens(e,jm).then(t=>{if(t===null)throw XN();return t})}function jD(n){n._throwIfRoot("deleteObject");const e=DD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,jm)}function BD(n,e){const t=TD(n._location.path,e),i=new Sn(n._location.bucket,t);return new Ms(n.storage,i)}/**
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
 */function zD(n){return/^[A-Za-z]+:\/\//.test(n)}function $D(n,e){return new Ms(n,e)}function pT(n,e){if(n instanceof Bm){const t=n;if(t._bucket==null)throw QN();const i=new Ms(t,t._bucket);return e!=null?pT(i,e):i}else return e!==void 0?BD(n,e):n}function qD(n,e){if(e&&zD(e)){if(n instanceof Bm)return $D(n,e);throw Ip("To use ref(service, url), the first argument must be a Storage instance.")}else return pT(n,e)}function Wv(n,e){const t=e==null?void 0:e[tT];return t==null?null:Sn.makeFromBucketSpec(t,n)}function WD(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:W0(o,n.app.options.projectId))}class Bm{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=eT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UN,this._maxUploadRetryTime=FN,this._requests=new Set,o!=null?this._bucket=Sn.makeFromBucketSpec(o,this._host):this._bucket=Wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=Wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){qv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ms(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new eD(nT());{const c=hD(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const Hv="@firebase/storage",Kv="0.13.2";/**
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
 */const mT="storage";function zm(n,e,t){return n=it(n),UD(n,e,t)}function $m(n){return n=it(n),FD(n)}function Gv(n){return n=it(n),jD(n)}function Il(n,e){return n=it(n),qD(n,e)}function HD(n=Fp(),e){n=it(n);const i=vh(n,mT).getImmediate({identifier:e}),o=z0("storage");return o&&KD(i,...o),i}function KD(n,e,t,i={}){WD(n,e,t,i)}function GD(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Bm(t,i,o,e,Fs)}function QD(){xs(new Bi(mT,GD,"PUBLIC").setMultipleInstances(!0)),_r(Hv,Kv,""),_r(Hv,Kv,"esm2017")}QD();const YD={apiKey:"AIzaSyD3inNnBFoe9P-QiseO8ihe1bg_x4avjnE",authDomain:"hwitter-reloaded-8b74b.firebaseapp.com",projectId:"hwitter-reloaded-8b74b",storageBucket:"hwitter-reloaded-8b74b.firebasestorage.app",messagingSenderId:"11116758234",appId:"1:11116758234:web:6c92511c31914d4de0d1e3"},qm=G0(YD),ir=LP(qm),Sl=HD(qm),ks=wN(qm),XD=Re.div`
  max-width: 860px;
`,JD=Re.div`
  position: fixed;
  width: 100%;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background-color: #07111F;
`,ZD=Re.img`
  height: 50px;
  cursor: pointer;
`,eO=Re.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 7fr;
  height: 100%;
  padding: 90px 0px 50px;
  width: 100%;
`,tO=Re.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Mf=Re.div`
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
    border-color: #FC4E00;
    svg {
      fill: #FC4E00;
    }
  }
`;function nO(){const n=ia(),e=async()=>{confirm("Are you sure you want to log out?")&&(await ir.signOut(),n("/login"))};return q.jsxs(XD,{children:[q.jsx(JD,{children:q.jsx(ZD,{src:"/htweetx/img/h_logo.png",onClick:()=>{typeof window.scrollToTimelineTop=="function"&&window.scrollToTimelineTop()}})}),q.jsxs(eO,{children:[q.jsxs(tO,{children:[q.jsx(jc,{to:"/",children:q.jsx(Mf,{children:q.jsx("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",width:"40",height:"40",children:q.jsx("g",{transform:"translate(10.000000,90.000000) scale(0.100000,-0.100000)",fill:"#currentColor",stroke:"none",children:q.jsx("path",{fill:"#ffffff",d:`M575 768 c-295 -49 -395 -82 -475 -154 -50 -45 -70 -87 -70 -145 0\r
                  -37 6 -48 50 -92 53 -53 67 -57 50 -13 -43 114 61 248 218 281 l33 7 -20 -41\r
                  c-12 -22 -57 -122 -101 -222 -89 -203 -112 -239 -180 -281 -34 -21 -52 -41\r
                  -63 -69 -15 -38 -15 -39 6 -34 12 2 90 16 172 30 323 55 359 66 410 127 30 36\r
                  89 158 80 166 -12 13 -56 -16 -87 -58 -52 -69 -84 -85 -218 -110 -117 -22\r
                  -145 -32 -115 -43 17 -7 217 26 260 42 l30 12 -20 -20 c-22 -22 -78 -37 -285\r
                  -76 -195 -36 -212 -34 -137 20 22 17 55 48 72 70 33 45 205 431 205 463 0 11\r
                  -12 30 -26 41 l-25 20 38 9 c21 6 70 15 108 21 39 7 105 19 148 28 42 9 80 14\r
                  83 10 4 -3 9 -28 12 -54 l5 -48 -24 22 c-52 48 -132 57 -173 21 -13 -13 -41\r
                  -61 -61 -106 -50 -114 -57 -138 -39 -153 21 -17 18 -25 -21 -47 -23 -14 -44\r
                  -41 -64 -81 -17 -33 -51 -83 -76 -111 -25 -28 -45 -53 -45 -56 0 -3 18 5 39\r
                  17 46 25 89 81 121 156 13 31 29 53 38 53 8 0 43 5 76 11 58 10 62 12 78 50 9\r
                  21 13 39 10 39 -4 -1 -36 -7 -72 -15 -36 -8 -68 -14 -72 -15 -3 0 18 53 47\r
                  118 47 104 57 118 84 126 54 16 92 -3 126 -62 44 -75 61 -67 56 28 -1 41 -6\r
                  91 -9 111 l-7 35 -170 -28z m-335 -115 c0 -5 -16 -18 -35 -31 -46 -29 -93 -95\r
                  -107 -149 -11 -47 -23 -55 -33 -22 -20 61 34 141 125 186 51 26 50 25 50 16z`})})})})}),q.jsx(jc,{to:"/profile",children:q.jsx(Mf,{children:q.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:q.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),q.jsx(Mf,{onClick:e,className:"log-out",children:q.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[q.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),q.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),q.jsx(x1,{})]})]})}const rO=Re.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,iO=Re.textarea`
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
`,sO=Re.label`
	padding: 10px 0px;
	color: #1d9bf0;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #1d9bf0;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`,oO=Re.input`
	display: none;
`,aO=Re.input`
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
`,lO=Re.div`
  font-size: 14px;
  align-self: flex-end;
  color: ${n=>n.full?"#FF4444":"#aaa"};
  font-weight: ${n=>n.full?"bold":"normal"};
  transition: all 0.2s ease-in-out;
  animation: ${n=>n.full?"shake 0.3s":"none"};

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
`;function uO(){const[n,e]=Y.useState(!1),[t,i]=Y.useState(""),[o,l]=Y.useState(null),c=y=>{i(y.target.value)},d=y=>{const{files:v}=y.target;if(v&&v.length===1){const E=v[0];if(E.size>512e3){alert("Only files smaller than 500KB are allowed for upload."),y.target.value="",l(null);return}l(E)}},p=async y=>{y.preventDefault();const v=ir.currentUser;if(!(!v||n||t===""||t.length>180))try{e(!0);const E=await LN(El(ks,"tweets"),{tweet:t,createdAt:Date.now(),username:v.displayName||"Anonymous",userId:v.uid,avatar:v.photoURL??null});if(o){const S=Il(Sl,`tweets/${v.uid}-${v.displayName}/${E.id}`),N=await zm(S,o),U=await $m(N.ref);await uh(E,{photo:U})}i(""),l(null)}catch(E){console.log(E)}finally{e(!1)}};return q.jsxs(rO,{onSubmit:p,children:[q.jsx(iO,{rows:5,maxLength:180,onChange:c,value:t,placeholder:"오늘의 한화이글스는 어땠나요?",required:!0}),q.jsxs(lO,{full:t.length===180,children:[t.length,"/180"]}),q.jsx(sO,{htmlFor:"file",children:o?"Photo added ✅":"Add photo"}),q.jsx(oO,{onChange:d,type:"file",id:"file",accept:"image/*"}),q.jsx(aO,{type:"submit",value:n?"Posting...":"Post Tweet"})]})}const cO=Re.div`
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`,Uf=Re.div`
	&:last-child {
		place-self: end;
	}
`,Qv=Re.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`,hO=Re.span`
  font-weight: 600;
  font-size: 15px;
	margin-bottom: 5px;
`,dO=Re.p`
  margin: 10px 0px;
  font-size: 18px;
	line-height: 1.4;
	white-space: pre-wrap; /* \n 줄바꿈 유지 */
  word-break: normal;           /* 기본 단어 단위 줄바꿈 */
  overflow-wrap: break-word;    /* 너무 길면 단어 단위로 줄바꿈 */
`,Yv=Re.button`
	background-color: #FC4E00;
	color: white;
	font-weight: 600;
	border: 0;
	font-size: 12px;
	padding: 5px 10px;
	text-transform: uppercase;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
`,Xv=Re.button`
	background-color: darkgray;
	color: white;
	font-weight: 600;
	border: 0;
	font-size: 12px;
	padding: 5px 10px;
	text-transform: uppercase;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
`,fO=Re.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,pO=Re.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,mO=Re.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,gO=n=>{const e=new Date(n);return`${e.getFullYear()}.${e.getMonth()+1}.${e.getDate()}`};function gT({username:n,photo:e,tweet:t,userId:i,id:o,avatar:l,createdAt:c}){const d=ir.currentUser,[p,y]=Y.useState(!1),[v,E]=Y.useState(!1),[S,N]=Y.useState(t),[U,B]=Y.useState(null),[b,H]=Y.useState(e),J=async()=>{if(!(!confirm("R U sure u wanna delete this tweet?")||(d==null?void 0:d.uid)!==i))try{if(await bN(Ep(ks,"tweets",o)),e){const A=Il(Sl,`tweets/${d.uid}/${o}`);await Gv(A)}}catch(A){console.log(A)}finally{}},K=re=>{var I;const A=(I=re.target.files)==null?void 0:I[0];A&&(B(A),H(URL.createObjectURL(A)))},ee=async()=>{y(!0);try{const re=Ep(ks,"tweets",o),A={tweet:S};if(U){if(e){const O=Il(Sl,`tweets/${d==null?void 0:d.uid}/${o}`);await Gv(O)}const I=Il(Sl,`tweets/${d==null?void 0:d.uid}/${o}`),C=await zm(I,U),x=await $m(C.ref);A.photo=x}await uh(re,A),E(!1)}catch(re){console.log(re)}finally{y(!1)}},le=()=>{N(t),B(null),H(e),E(!1)};return q.jsxs(cO,{children:[q.jsxs(Uf,{children:[q.jsxs(pO,{children:[l&&q.jsx(mO,{src:l,alt:"profile"}),q.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[q.jsx(hO,{children:n}),q.jsx("span",{style:{fontSize:"12px",opacity:.7},children:gO(c)})]})]}),v?q.jsxs(q.Fragment,{children:[q.jsx("input",{type:"text",value:S,onChange:re=>N(re.target.value),style:{fontSize:"16px",margin:"10px 0",padding:"5px",width:"100%"}}),q.jsx("input",{type:"file",accept:"image/*",onChange:K}),b&&q.jsx(Qv,{src:b}),p?q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginTop:"10px"},children:[q.jsx(fO,{}),q.jsx("span",{style:{fontSize:"14px",fontStyle:"italic"},children:"Saving..."})]}):q.jsxs("div",{style:{display:"flex",gap:"5px"},children:[q.jsx(Xv,{onClick:ee,children:"Save"}),q.jsx(Yv,{onClick:le,children:"Cancel"})]})]}):q.jsx(dO,{children:t})]}),q.jsx(Uf,{children:e?q.jsx(Qv,{src:e}):null}),(d==null?void 0:d.uid)===i?q.jsxs(Uf,{style:{display:"flex",gap:"5px"},children:[!v&&q.jsx(Xv,{onClick:()=>E(!0),children:"Edit"}),q.jsx(Yv,{onClick:J,children:"Delete"})]}):null]})}const yO=Re.div`
	display: flex;
	gap: 10px;
	flex-direction: column;	
`;function _O(){const[n,e]=Y.useState([]),t=Y.useRef(null);return Y.useEffect(()=>{let i=null;return(async()=>{const l=Mc(El(ks,"tweets"),QE("createdAt","desc"),YE(25));i=await VN(l,c=>{const d=c.docs.map(p=>{const{tweet:y,createdAt:v,userId:E,username:S,photo:N,avatar:U}=p.data();return{tweet:y,createdAt:v,userId:E,username:S,photo:N,avatar:U,id:p.id}});e(d)})})(),()=>{i&&i()}},[]),Y.useEffect(()=>{window.scrollToTimelineTop=()=>{var i;(i=t.current)==null||i.scrollIntoView({behavior:"smooth"})}},[]),q.jsx(yO,{ref:t,children:n.map(i=>q.jsx(gT,{...i},i.id))})}const vO=Re.div`
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
`;function wO(){return q.jsxs(vO,{children:[q.jsx(uO,{}),q.jsx(_O,{})]})}const EO=Re.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,TO=Re.label`
  width: 200px;
  overflow: hidden;
  height: 200px;
  border-radius: 50%;
  background-color: #FC4E00;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`,IO=Re.img`
  width: 100%;
`,SO=Re.input`
  display: none;
`,RO=Re.span`
  font-size: 22px;
`,Jv=Re.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,AO=Re.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`,CO=Re.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  &:hover {
    opacity: 0.8;
  }
`;function PO(){const n=ir.currentUser,e=n==null?void 0:n.metadata.creationTime,t=n==null?void 0:n.metadata.lastSignInTime,[i,o]=Y.useState(n==null?void 0:n.photoURL),[l,c]=Y.useState([]),[d,p]=Y.useState(!1),[y,v]=Y.useState(!1),[E,S]=Y.useState((n==null?void 0:n.displayName)??""),[N,U]=Y.useState(!1),B=K=>{if(!K)return"";const ee=new Date(K);return`${ee.getFullYear()}년 ${ee.getMonth()+1}월 ${ee.getDate()}일`},b=async K=>{const{files:ee}=K.target;if(n&&ee&&ee.length===1){p(!0);try{const le=ee[0],re=Il(Sl,`avatars/${n==null?void 0:n.uid}`),A=await zm(re,le),I=await $m(A.ref);o(I),await ip(n,{photoURL:I});const C=Mc(El(ks,"tweets"),Of("userId","==",n.uid)),O=(await bf(C)).docs.map(V=>uh(V.ref,{avatar:I}));await Promise.all(O)}catch(le){console.error(le)}finally{p(!1)}}},H=async()=>{if(!(!n||E.trim()==="")){U(!0);try{await ip(n,{displayName:E});const K=Mc(El(ks,"tweets"),Of("userId","==",n.uid)),le=(await bf(K)).docs.map(re=>uh(re.ref,{username:E}));await Promise.all(le),v(!1)}catch(K){console.error(K)}finally{U(!1)}}},J=async()=>{const K=Mc(El(ks,"tweets"),Of("userId","==",n==null?void 0:n.uid),QE("createdAt","desc"),YE(25)),le=(await bf(K)).docs.map(re=>{const{tweet:A,createdAt:I,userId:C,username:x,photo:O}=re.data();return{tweet:A,createdAt:I,userId:C,username:x,photo:O,id:re.id}});c(le)};return Y.useEffect(()=>{J()},[]),q.jsxs(EO,{children:[q.jsx(TO,{htmlFor:"avatar",children:d?q.jsx(Jv,{}):i?q.jsx(IO,{src:i}):q.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:q.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})}),q.jsx(SO,{id:"avatar",type:"file",accept:"image/*",onChange:b}),y?q.jsxs(q.Fragment,{children:[q.jsx("input",{value:E,onChange:K=>S(K.target.value),style:{fontSize:"18px",padding:"5px",borderRadius:"5px",border:"1px solid #ccc"}}),N?q.jsx(Jv,{}):q.jsxs("div",{style:{display:"flex",gap:"5px"},children:[q.jsx("button",{onClick:H,children:"Save"}),q.jsx("button",{onClick:()=>v(!1),children:"Cancel"})]})]}):q.jsxs(q.Fragment,{children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[q.jsx(RO,{children:(n==null?void 0:n.displayName)??"Anonymous"}),q.jsx(CO,{onClick:()=>v(!0),"aria-label":"Edit name",children:q.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:q.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})})]}),q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px"},children:[q.jsxs("span",{style:{fontSize:"14px",color:"#ccc"},children:["가입일: ",B(e)]}),q.jsxs("span",{style:{fontSize:"14px",color:"#ccc"},children:["마지막 로그인: ",B(t)]})]})]}),q.jsx(AO,{children:l.map(K=>q.jsx(gT,{...K},K.id))})]})}const yT=Re.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,_T=Re.h1`
  font-size: 42px;
`,vT=Re.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,Rs=Re.input`
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
`,wT=Re.span`
  font-weight: 600;
  color: tomato;
`,ch=Re.span`
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
`,kO=Re.span`
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
`,xO=Re.img`
  height: 25px;
`;function ET(){const n=ia(),e=async()=>{try{const t=new $r;await qC(ir,t),n("/")}catch(t){console.error(t)}};return q.jsxs(kO,{onClick:e,children:[q.jsx(xO,{src:"/htweetx/img/github-logo.svg"}),"Continue with Github"]})}function NO(){const n=ia(),[e,t]=Y.useState(!1),[i,o]=Y.useState(""),[l,c]=Y.useState(""),[d,p]=Y.useState(""),[y,v]=Y.useState(""),E=U=>{const{target:{name:B,value:b}}=U;B==="email"?o(b):B==="password"&&c(b)},S=async U=>{if(U.preventDefault(),p(""),!(e||i===""||l===""))try{t(!0),await EC(ir,i,l),n("/")}catch(B){B instanceof pn&&p(B.message),console.log(B)}finally{t(!1)}},N=async()=>{if(p(""),v(""),!i){p("Please enter your email to reset password.");return}try{await vw(ir,i),v("Password reset email sent")}catch(U){U instanceof pn&&p(U.message)}};return q.jsxs(yT,{children:[q.jsx(_T,{children:"Log into 𝕏"}),q.jsxs(vT,{onSubmit:S,children:[q.jsx(Rs,{onChange:E,name:"email",value:i,placeholder:"Email",type:"email",required:!0}),q.jsx(Rs,{onChange:E,value:l,name:"password",placeholder:"Password",type:"password",required:!0}),q.jsx(Rs,{type:"submit",value:e?"Loading...":"Log in"})]}),d!==""?q.jsx(wT,{children:d}):null,y&&q.jsx("span",{style:{color:"lightgreen"},children:y}),q.jsxs(ch,{children:["Don't have an account?",q.jsx(jc,{to:"/create-account",children:"Create one →"})]}),q.jsxs(ch,{children:["Forgot your password?",q.jsx("button",{onClick:N,children:"Reset Password →"})]}),q.jsx(ET,{})]})}function DO(){const n=ia(),[e,t]=Y.useState(!1),[i,o]=Y.useState(""),[l,c]=Y.useState(""),[d,p]=Y.useState(""),[y,v]=Y.useState(""),[E,S]=Y.useState(""),N=b=>{const{target:{name:H,value:J}}=b;H==="name"?o(J):H==="email"?c(J):H==="password"&&p(J)},U=async b=>{if(b.preventDefault(),v(""),!(e||i===""||l===""||d===""))try{t(!0);const H=await wC(ir,l,d);await ip(H.user,{displayName:i}),n("/")}catch(H){H instanceof pn&&v(H.message),console.log(H)}finally{t(!1)}},B=async()=>{if(v(""),S(""),!l){v("Please enter your email to reset password.");return}try{await vw(ir,l),S("Password reset email sent")}catch(b){b instanceof pn&&v(b.message)}};return q.jsxs(yT,{children:[q.jsx(_T,{children:"Join 𝕏"}),q.jsxs(vT,{onSubmit:U,children:[q.jsx(Rs,{onChange:N,name:"name",value:i,placeholder:"Name",type:"text",required:!0}),q.jsx(Rs,{onChange:N,name:"email",value:l,placeholder:"Email",type:"email",required:!0}),q.jsx(Rs,{onChange:N,value:d,name:"password",placeholder:"Password",type:"password",required:!0}),q.jsx(Rs,{type:"submit",value:e?"Loading...":"Create Account"})]}),y!==""?q.jsx(wT,{children:y}):null,E&&q.jsx("span",{style:{color:"lightgreen"},children:E}),q.jsxs(ch,{children:["Already have an account?"," ",q.jsx(jc,{to:"/login",children:"Log in →"})]}),q.jsxs(ch,{children:["Forgot your password?",q.jsx("button",{onClick:B,children:"Reset Password →"})]}),q.jsx(ET,{})]})}var TT=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},IT=Vp(Zv||(Zv=TT([`
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
`])));M0(e0||(e0=TT(["",""],["",""])),IT);var Zv,e0;const OO=Re.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,bO=Re.span`
  font-size: 24px;
`;function LO(){return q.jsx(OO,{children:q.jsx(bO,{children:"Loading..."})})}function VO({children:n}){return ir.currentUser==null?q.jsx(k1,{to:"/login"}):n}const MO=M0`
  ${IT};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07111F;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,UO=Re.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 5vw;
`;function FO(){const[n,e]=Y.useState(!0),t=async()=>{await ir.authStateReady(),e(!1)};return Y.useEffect(()=>{t()},[]),q.jsxs(UO,{children:[q.jsx(MO,{}),n?q.jsx(LO,{}):q.jsx(F1,{children:q.jsxs(D1,{children:[q.jsxs(Lo,{path:"/",element:q.jsx(VO,{children:q.jsx(nO,{})}),children:[q.jsx(Lo,{index:!0,element:q.jsx(wO,{})}),q.jsx(Lo,{path:"profile",element:q.jsx(PO,{})})]}),q.jsx(Lo,{path:"/login",element:q.jsx(NO,{})}),q.jsx(Lo,{path:"/create-account",element:q.jsx(DO,{})})]})})]})}const jO=MI.createRoot(document.getElementById("root"));jO.render(q.jsx(Jn.StrictMode,{children:q.jsx(FO,{})}));
