function UI(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function d0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _f={exports:{}},ul={},vf={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function jI(){if(s_)return xe;s_=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),E=Symbol.iterator;function I(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,j={};function O(L,q,ge){this.props=L,this.context=q,this.refs=j,this.updater=ge||x}O.prototype.isReactComponent={},O.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},O.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function H(){}H.prototype=O.prototype;function J(L,q,ge){this.props=L,this.context=q,this.refs=j,this.updater=ge||x}var K=J.prototype=new H;K.constructor=J,V(K,O.prototype),K.isPureReactComponent=!0;var ee=Array.isArray,le=Object.prototype.hasOwnProperty,re={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function S(L,q,ge){var Ae,Pe={},Ce=null,De=null;if(q!=null)for(Ae in q.ref!==void 0&&(De=q.ref),q.key!==void 0&&(Ce=""+q.key),q)le.call(q,Ae)&&!A.hasOwnProperty(Ae)&&(Pe[Ae]=q[Ae]);var Ne=arguments.length-2;if(Ne===1)Pe.children=ge;else if(1<Ne){for(var Ve=Array(Ne),ot=0;ot<Ne;ot++)Ve[ot]=arguments[ot+2];Pe.children=Ve}if(L&&L.defaultProps)for(Ae in Ne=L.defaultProps,Ne)Pe[Ae]===void 0&&(Pe[Ae]=Ne[Ae]);return{$$typeof:n,type:L,key:Ce,ref:De,props:Pe,_owner:re.current}}function P(L,q){return{$$typeof:n,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function N(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function b(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ge){return q[ge]})}var M=/\/+/g;function C(L,q){return typeof L=="object"&&L!==null&&L.key!=null?b(""+L.key):q.toString(36)}function tt(L,q,ge,Ae,Pe){var Ce=typeof L;(Ce==="undefined"||Ce==="boolean")&&(L=null);var De=!1;if(L===null)De=!0;else switch(Ce){case"string":case"number":De=!0;break;case"object":switch(L.$$typeof){case n:case e:De=!0}}if(De)return De=L,Pe=Pe(De),L=Ae===""?"."+C(De,0):Ae,ee(Pe)?(ge="",L!=null&&(ge=L.replace(M,"$&/")+"/"),tt(Pe,q,ge,"",function(ot){return ot})):Pe!=null&&(N(Pe)&&(Pe=P(Pe,ge+(!Pe.key||De&&De.key===Pe.key?"":(""+Pe.key).replace(M,"$&/")+"/")+L)),q.push(Pe)),1;if(De=0,Ae=Ae===""?".":Ae+":",ee(L))for(var Ne=0;Ne<L.length;Ne++){Ce=L[Ne];var Ve=Ae+C(Ce,Ne);De+=tt(Ce,q,ge,Ve,Pe)}else if(Ve=I(L),typeof Ve=="function")for(L=Ve.call(L),Ne=0;!(Ce=L.next()).done;)Ce=Ce.value,Ve=Ae+C(Ce,Ne++),De+=tt(Ce,q,ge,Ve,Pe);else if(Ce==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return De}function Rt(L,q,ge){if(L==null)return L;var Ae=[],Pe=0;return tt(L,Ae,"","",function(Ce){return q.call(ge,Ce,Pe++)}),Ae}function At(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(ge){(L._status===0||L._status===-1)&&(L._status=1,L._result=ge)},function(ge){(L._status===0||L._status===-1)&&(L._status=2,L._result=ge)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var je={current:null},se={transition:null},de={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:se,ReactCurrentOwner:re};function oe(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Rt,forEach:function(L,q,ge){Rt(L,function(){q.apply(this,arguments)},ge)},count:function(L){var q=0;return Rt(L,function(){q++}),q},toArray:function(L){return Rt(L,function(q){return q})||[]},only:function(L){if(!N(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xe.Component=O,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=J,xe.StrictMode=i,xe.Suspense=p,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,xe.act=oe,xe.cloneElement=function(L,q,ge){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ae=V({},L.props),Pe=L.key,Ce=L.ref,De=L._owner;if(q!=null){if(q.ref!==void 0&&(Ce=q.ref,De=re.current),q.key!==void 0&&(Pe=""+q.key),L.type&&L.type.defaultProps)var Ne=L.type.defaultProps;for(Ve in q)le.call(q,Ve)&&!A.hasOwnProperty(Ve)&&(Ae[Ve]=q[Ve]===void 0&&Ne!==void 0?Ne[Ve]:q[Ve])}var Ve=arguments.length-2;if(Ve===1)Ae.children=ge;else if(1<Ve){Ne=Array(Ve);for(var ot=0;ot<Ve;ot++)Ne[ot]=arguments[ot+2];Ae.children=Ne}return{$$typeof:n,type:L.type,key:Pe,ref:Ce,props:Ae,_owner:De}},xe.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},xe.createElement=S,xe.createFactory=function(L){var q=S.bind(null,L);return q.type=L,q},xe.createRef=function(){return{current:null}},xe.forwardRef=function(L){return{$$typeof:d,render:L}},xe.isValidElement=N,xe.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:At}},xe.memo=function(L,q){return{$$typeof:y,type:L,compare:q===void 0?null:q}},xe.startTransition=function(L){var q=se.transition;se.transition={};try{L()}finally{se.transition=q}},xe.unstable_act=oe,xe.useCallback=function(L,q){return je.current.useCallback(L,q)},xe.useContext=function(L){return je.current.useContext(L)},xe.useDebugValue=function(){},xe.useDeferredValue=function(L){return je.current.useDeferredValue(L)},xe.useEffect=function(L,q){return je.current.useEffect(L,q)},xe.useId=function(){return je.current.useId()},xe.useImperativeHandle=function(L,q,ge){return je.current.useImperativeHandle(L,q,ge)},xe.useInsertionEffect=function(L,q){return je.current.useInsertionEffect(L,q)},xe.useLayoutEffect=function(L,q){return je.current.useLayoutEffect(L,q)},xe.useMemo=function(L,q){return je.current.useMemo(L,q)},xe.useReducer=function(L,q,ge){return je.current.useReducer(L,q,ge)},xe.useRef=function(L){return je.current.useRef(L)},xe.useState=function(L){return je.current.useState(L)},xe.useSyncExternalStore=function(L,q,ge){return je.current.useSyncExternalStore(L,q,ge)},xe.useTransition=function(){return je.current.useTransition()},xe.version="18.3.1",xe}var o_;function xp(){return o_||(o_=1,vf.exports=jI()),vf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function BI(){if(a_)return ul;a_=1;var n=xp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,E={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(E[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)E[v]===void 0&&(E[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:x,props:E,_owner:o.current}}return ul.Fragment=t,ul.jsx=c,ul.jsxs=c,ul}var l_;function zI(){return l_||(l_=1,_f.exports=BI()),_f.exports}var W=zI(),Y=xp();const Jn=d0(Y),$I=UI({__proto__:null,default:Jn},[Y]);var _c={},wf={exports:{}},hn={},Ef={exports:{}},Tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function WI(){return u_||(u_=1,function(n){function e(se,de){var oe=se.length;se.push(de);e:for(;0<oe;){var L=oe-1>>>1,q=se[L];if(0<o(q,de))se[L]=de,se[oe]=q,oe=L;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var de=se[0],oe=se.pop();if(oe!==de){se[0]=oe;e:for(var L=0,q=se.length,ge=q>>>1;L<ge;){var Ae=2*(L+1)-1,Pe=se[Ae],Ce=Ae+1,De=se[Ce];if(0>o(Pe,oe))Ce<q&&0>o(De,Pe)?(se[L]=De,se[Ce]=oe,L=Ce):(se[L]=Pe,se[Ae]=oe,L=Ae);else if(Ce<q&&0>o(De,oe))se[L]=De,se[Ce]=oe,L=Ce;else break e}}return de}function o(se,de){var oe=se.sortIndex-de.sortIndex;return oe!==0?oe:se.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,E=null,I=3,x=!1,V=!1,j=!1,O=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(se){for(var de=t(y);de!==null;){if(de.callback===null)i(y);else if(de.startTime<=se)i(y),de.sortIndex=de.expirationTime,e(p,de);else break;de=t(y)}}function ee(se){if(j=!1,K(se),!V)if(t(p)!==null)V=!0,At(le);else{var de=t(y);de!==null&&je(ee,de.startTime-se)}}function le(se,de){V=!1,j&&(j=!1,H(S),S=-1),x=!0;var oe=I;try{for(K(de),E=t(p);E!==null&&(!(E.expirationTime>de)||se&&!b());){var L=E.callback;if(typeof L=="function"){E.callback=null,I=E.priorityLevel;var q=L(E.expirationTime<=de);de=n.unstable_now(),typeof q=="function"?E.callback=q:E===t(p)&&i(p),K(de)}else i(p);E=t(p)}if(E!==null)var ge=!0;else{var Ae=t(y);Ae!==null&&je(ee,Ae.startTime-de),ge=!1}return ge}finally{E=null,I=oe,x=!1}}var re=!1,A=null,S=-1,P=5,N=-1;function b(){return!(n.unstable_now()-N<P)}function M(){if(A!==null){var se=n.unstable_now();N=se;var de=!0;try{de=A(!0,se)}finally{de?C():(re=!1,A=null)}}else re=!1}var C;if(typeof J=="function")C=function(){J(M)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Rt=tt.port2;tt.port1.onmessage=M,C=function(){Rt.postMessage(null)}}else C=function(){O(M,0)};function At(se){A=se,re||(re=!0,C())}function je(se,de){S=O(function(){se(n.unstable_now())},de)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){V||x||(V=!0,At(le))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(I){case 1:case 2:case 3:var de=3;break;default:de=I}var oe=I;I=de;try{return se()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,de){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var oe=I;I=se;try{return de()}finally{I=oe}},n.unstable_scheduleCallback=function(se,de,oe){var L=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,se){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=oe+q,se={id:v++,callback:de,priorityLevel:se,startTime:oe,expirationTime:q,sortIndex:-1},oe>L?(se.sortIndex=oe,e(y,se),t(p)===null&&se===t(y)&&(j?(H(S),S=-1):j=!0,je(ee,oe-L))):(se.sortIndex=q,e(p,se),V||x||(V=!0,At(le))),se},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(se){var de=I;return function(){var oe=I;I=de;try{return se.apply(this,arguments)}finally{I=oe}}}}(Tf)),Tf}var c_;function qI(){return c_||(c_=1,Ef.exports=WI()),Ef.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function HI(){if(h_)return hn;h_=1;var n=xp(),e=qI();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},E={};function I(r){return p.call(E,r)?!0:p.call(v,r)?!1:y.test(r)?E[r]=!0:(v[r]=!0,!1)}function x(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,h){if(s===null||typeof s>"u"||x(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function j(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var O={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){O[r]=new j(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];O[s]=new j(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){O[r]=new j(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){O[r]=new j(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){O[r]=new j(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){O[r]=new j(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){O[r]=new j(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){O[r]=new j(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){O[r]=new j(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(H,J);O[s]=new j(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(H,J);O[s]=new j(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(H,J);O[s]=new j(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){O[r]=new j(r,1,!1,r.toLowerCase(),null,!1,!1)}),O.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){O[r]=new j(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,s,a,h){var f=O.hasOwnProperty(s)?O[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ee=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),re=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),b=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Rt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),se=Symbol.iterator;function de(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,L;function q(r){if(L===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);L=s&&s[1]||""}return`
`+L+r}var ge=!1;function Ae(r,s){if(!r||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(z){var h=z}Reflect.construct(r,[],s)}else{try{s.call()}catch(z){h=z}r.call(s.prototype)}else{try{throw Error()}catch(z){h=z}r()}}catch(z){if(z&&h&&typeof z.stack=="string"){for(var f=z.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,R=g.length-1;1<=w&&0<=R&&f[w]!==g[R];)R--;for(;1<=w&&0<=R;w--,R--)if(f[w]!==g[R]){if(w!==1||R!==1)do if(w--,R--,0>R||f[w]!==g[R]){var k=`
`+f[w].replace(" at new "," at ");return r.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",r.displayName)),k}while(1<=w&&0<=R);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Pe(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function Ce(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case A:return"Fragment";case re:return"Portal";case P:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case b:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Rt:return s=r.displayName||null,s!==null?s:Ce(r.type)||"Memo";case At:s=r._payload,r=r._init;try{return Ce(r(s))}catch{}}return null}function De(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ve(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ot(r){var s=Ve(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function nn(r){r._valueTracker||(r._valueTracker=ot(r))}function Yt(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=Ve(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function ii(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Yi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function qs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Ne(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ma(r,s){s=s.checked,s!=null&&K(r,"checked",s,!1)}function ga(r,s){ma(r,s);var a=Ne(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Hs(r,s.type,a):s.hasOwnProperty("defaultValue")&&Hs(r,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function ru(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Hs(r,s,a){(s!=="number"||ii(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Pr=Array.isArray;function Cr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Ne(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ya(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ks(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Pr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ne(a)}}function Gs(r,s){var a=Ne(s.value),h=Ne(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function _a(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function vt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?vt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var kr,va=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(kr=kr||document.createElement("div"),kr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=kr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function si(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ji=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(r){Ji.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Xi[s]=Xi[r]})});function wa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Xi.hasOwnProperty(r)&&Xi[r]?(""+s).trim():s+"px"}function Ea(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=wa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var Ta=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ia(r,s){if(s){if(Ta[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Sa(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zi=null;function Qs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ys=null,Rn=null,sr=null;function Xs(r){if(r=Ga(r)){if(typeof Ys!="function")throw Error(t(280));var s=r.stateNode;s&&(s=bu(s),Ys(r.stateNode,r.type,s))}}function or(r){Rn?sr?sr.push(r):sr=[r]:Rn=r}function Ra(){if(Rn){var r=Rn,s=sr;if(sr=Rn=null,Xs(r),s)for(r=0;r<s.length;r++)Xs(s[r])}}function es(r,s){return r(s)}function Aa(){}var xr=!1;function Pa(r,s,a){if(xr)return r(s,a);xr=!0;try{return es(r,s,a)}finally{xr=!1,(Rn!==null||sr!==null)&&(Aa(),Ra())}}function ct(r,s){var a=r.stateNode;if(a===null)return null;var h=bu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Js=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Js=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Js=!1}function ts(r,s,a,h,f,g,w,R,k){var z=Array.prototype.slice.call(arguments,3);try{s.apply(a,z)}catch(X){this.onError(X)}}var ns=!1,Zs=null,Fn=!1,Ca=null,qh={onError:function(r){ns=!0,Zs=r}};function eo(r,s,a,h,f,g,w,R,k){ns=!1,Zs=null,ts.apply(qh,arguments)}function iu(r,s,a,h,f,g,w,R,k){if(eo.apply(this,arguments),ns){if(ns){var z=Zs;ns=!1,Zs=null}else throw Error(t(198));Fn||(Fn=!0,Ca=z)}}function Un(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function rs(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function jn(r){if(Un(r)!==r)throw Error(t(188))}function su(r){var s=r.alternate;if(!s){if(s=Un(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return jn(f),r;if(g===h)return jn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,R=f.child;R;){if(R===a){w=!0,a=f,h=g;break}if(R===h){w=!0,h=f,a=g;break}R=R.sibling}if(!w){for(R=g.child;R;){if(R===a){w=!0,a=g,h=f;break}if(R===h){w=!0,h=g,a=f;break}R=R.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ka(r){return r=su(r),r!==null?to(r):null}function to(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=to(r);if(s!==null)return s;r=r.sibling}return null}var no=e.unstable_scheduleCallback,xa=e.unstable_cancelCallback,ou=e.unstable_shouldYield,Hh=e.unstable_requestPaint,Ke=e.unstable_now,au=e.unstable_getCurrentPriorityLevel,is=e.unstable_ImmediatePriority,oi=e.unstable_UserBlockingPriority,An=e.unstable_NormalPriority,Na=e.unstable_LowPriority,lu=e.unstable_IdlePriority,ss=null,mn=null;function uu(r){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(ss,r,void 0,(r.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:hu,Da=Math.log,cu=Math.LN2;function hu(r){return r>>>=0,r===0?32:31-(Da(r)/cu|0)|0}var ro=64,io=4194304;function ai(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function os(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var R=w&~f;R!==0?h=ai(R):(g&=w,g!==0&&(h=ai(g)))}else w=a&~f,w!==0?h=ai(w):g!==0&&(h=ai(g));if(h===0)return 0;if(s!==0&&s!==h&&(s&f)===0&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if((h&4)!==0&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Xt(s),f=1<<a,h|=r[a],s&=~f;return h}function Kh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nr(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Xt(g),R=1<<w,k=f[w];k===-1?((R&a)===0||(R&h)!==0)&&(f[w]=Kh(R,s)):k<=s&&(r.expiredLanes|=R),g&=~R}}function gn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function as(){var r=ro;return ro<<=1,(ro&4194240)===0&&(ro=64),r}function li(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ui(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Xt(s),r[s]=a}function He(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Xt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function ci(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Xt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Oe=0;function hi(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var du,so,fu,pu,mu,ba=!1,ar=[],bt=null,Bn=null,zn=null,di=new Map,Pn=new Map,lr=[],Gh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gu(r,s){switch(r){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":di.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pn.delete(s.pointerId)}}function rn(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ga(s),s!==null&&so(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function Qh(r,s,a,h,f){switch(s){case"focusin":return bt=rn(bt,r,s,a,h,f),!0;case"dragenter":return Bn=rn(Bn,r,s,a,h,f),!0;case"mouseover":return zn=rn(zn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return di.set(g,rn(di.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Pn.set(g,rn(Pn.get(g)||null,r,s,a,h,f)),!0}return!1}function yu(r){var s=ds(r.target);if(s!==null){var a=Un(s);if(a!==null){if(s=a.tag,s===13){if(s=rs(a),s!==null){r.blockedOn=s,mu(r.priority,function(){fu(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Dr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=oo(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Zi=h,a.target.dispatchEvent(h),Zi=null}else return s=Ga(a),s!==null&&so(s),r.blockedOn=a,!1;s.shift()}return!0}function ls(r,s,a){Dr(r)&&a.delete(s)}function _u(){ba=!1,bt!==null&&Dr(bt)&&(bt=null),Bn!==null&&Dr(Bn)&&(Bn=null),zn!==null&&Dr(zn)&&(zn=null),di.forEach(ls),Pn.forEach(ls)}function $n(r,s){r.blockedOn===s&&(r.blockedOn=null,ba||(ba=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_u)))}function Wn(r){function s(f){return $n(f,r)}if(0<ar.length){$n(ar[0],r);for(var a=1;a<ar.length;a++){var h=ar[a];h.blockedOn===r&&(h.blockedOn=null)}}for(bt!==null&&$n(bt,r),Bn!==null&&$n(Bn,r),zn!==null&&$n(zn,r),di.forEach(s),Pn.forEach(s),a=0;a<lr.length;a++)h=lr[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)yu(a),a.blockedOn===null&&lr.shift()}var br=ee.ReactCurrentBatchConfig,fi=!0;function Ze(r,s,a,h){var f=Oe,g=br.transition;br.transition=null;try{Oe=1,Oa(r,s,a,h)}finally{Oe=f,br.transition=g}}function Yh(r,s,a,h){var f=Oe,g=br.transition;br.transition=null;try{Oe=4,Oa(r,s,a,h)}finally{Oe=f,br.transition=g}}function Oa(r,s,a,h){if(fi){var f=oo(r,s,a,h);if(f===null)ad(r,s,h,us,a),gu(r,h);else if(Qh(f,r,s,a,h))h.stopPropagation();else if(gu(r,h),s&4&&-1<Gh.indexOf(r)){for(;f!==null;){var g=Ga(f);if(g!==null&&du(g),g=oo(r,s,a,h),g===null&&ad(r,s,h,us,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else ad(r,s,h,null,a)}}var us=null;function oo(r,s,a,h){if(us=null,r=Qs(h),r=ds(r),r!==null)if(s=Un(r),s===null)r=null;else if(a=s.tag,a===13){if(r=rs(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return us=r,null}function La(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(au()){case is:return 1;case oi:return 4;case An:case Na:return 16;case lu:return 536870912;default:return 16}default:return 16}}var yn=null,ao=null,sn=null;function Va(){if(sn)return sn;var r,s=ao,a=s.length,h,f="value"in yn?yn.value:yn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return sn=f.slice(r,1<h?1-h:void 0)}function lo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function ur(){return!0}function Ma(){return!1}function Ot(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var R in r)r.hasOwnProperty(R)&&(a=r[R],this[R]=a?a(g):g[R]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ur:Ma,this.isPropagationStopped=Ma,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),s}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uo=Ot(qn),cr=oe({},qn,{view:0,detail:0}),Xh=Ot(cr),co,Or,pi,cs=oe({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==pi&&(pi&&r.type==="mousemove"?(co=r.screenX-pi.screenX,Or=r.screenY-pi.screenY):Or=co=0,pi=r),co)},movementY:function(r){return"movementY"in r?r.movementY:Or}}),ho=Ot(cs),Fa=oe({},cs,{dataTransfer:0}),vu=Ot(Fa),fo=oe({},cr,{relatedTarget:0}),po=Ot(fo),wu=oe({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Lr=Ot(wu),Eu=oe({},qn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Tu=Ot(Eu),Iu=oe({},qn,{data:0}),Ua=Ot(Iu),mo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ru(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Su[r])?!!s[r]:!1}function hr(){return Ru}var u=oe({},cr,{key:function(r){if(r.key){var s=mo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=lo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Jt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(r){return r.type==="keypress"?lo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?lo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Ot(u),_=oe({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Ot(_),F=oe({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),$=Ot(F),ie=oe({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),We=Ot(ie),Et=oe({},cs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Me=Ot(Et),Pt=[9,13,27,32],pt=d&&"CompositionEvent"in window,Cn=null;d&&"documentMode"in document&&(Cn=document.documentMode);var _n=d&&"TextEvent"in window&&!Cn,hs=d&&(!pt||Cn&&8<Cn&&11>=Cn),go=" ",Zm=!1;function eg(r,s){switch(r){case"keyup":return Pt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var yo=!1;function VT(r,s){switch(r){case"compositionend":return tg(s);case"keypress":return s.which!==32?null:(Zm=!0,go);case"textInput":return r=s.data,r===go&&Zm?null:r;default:return null}}function MT(r,s){if(yo)return r==="compositionend"||!pt&&eg(r,s)?(r=Va(),sn=ao=yn=null,yo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return hs&&s.locale!=="ko"?null:s.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!FT[r.type]:s==="textarea"}function rg(r,s,a,h){or(h),s=xu(s,"onChange"),0<s.length&&(a=new uo("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var ja=null,Ba=null;function UT(r){Eg(r,0)}function Au(r){var s=To(r);if(Yt(s))return r}function jT(r,s){if(r==="change")return s}var ig=!1;if(d){var Jh;if(d){var Zh="oninput"in document;if(!Zh){var sg=document.createElement("div");sg.setAttribute("oninput","return;"),Zh=typeof sg.oninput=="function"}Jh=Zh}else Jh=!1;ig=Jh&&(!document.documentMode||9<document.documentMode)}function og(){ja&&(ja.detachEvent("onpropertychange",ag),Ba=ja=null)}function ag(r){if(r.propertyName==="value"&&Au(Ba)){var s=[];rg(s,Ba,r,Qs(r)),Pa(UT,s)}}function BT(r,s,a){r==="focusin"?(og(),ja=s,Ba=a,ja.attachEvent("onpropertychange",ag)):r==="focusout"&&og()}function zT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Au(Ba)}function $T(r,s){if(r==="click")return Au(s)}function WT(r,s){if(r==="input"||r==="change")return Au(s)}function qT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Hn=typeof Object.is=="function"?Object.is:qT;function za(r,s){if(Hn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!Hn(r[f],s[f]))return!1}return!0}function lg(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function ug(r,s){var a=lg(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lg(a)}}function cg(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?cg(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function hg(){for(var r=window,s=ii();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=ii(r.document)}return s}function ed(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function HT(r){var s=hg(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&cg(a.ownerDocument.documentElement,a)){if(h!==null&&ed(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=ug(a,g);var w=ug(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var KT=d&&"documentMode"in document&&11>=document.documentMode,_o=null,td=null,$a=null,nd=!1;function dg(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nd||_o==null||_o!==ii(h)||(h=_o,"selectionStart"in h&&ed(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),$a&&za($a,h)||($a=h,h=xu(td,"onSelect"),0<h.length&&(s=new uo("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=_o)))}function Pu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var vo={animationend:Pu("Animation","AnimationEnd"),animationiteration:Pu("Animation","AnimationIteration"),animationstart:Pu("Animation","AnimationStart"),transitionend:Pu("Transition","TransitionEnd")},rd={},fg={};d&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function Cu(r){if(rd[r])return rd[r];if(!vo[r])return r;var s=vo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in fg)return rd[r]=s[a];return r}var pg=Cu("animationend"),mg=Cu("animationiteration"),gg=Cu("animationstart"),yg=Cu("transitionend"),_g=new Map,vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mi(r,s){_g.set(r,s),l(s,[r])}for(var id=0;id<vg.length;id++){var sd=vg[id],GT=sd.toLowerCase(),QT=sd[0].toUpperCase()+sd.slice(1);mi(GT,"on"+QT)}mi(pg,"onAnimationEnd"),mi(mg,"onAnimationIteration"),mi(gg,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(yg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function wg(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,iu(h,s,void 0,r),r.currentTarget=null}function Eg(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var R=h[w],k=R.instance,z=R.currentTarget;if(R=R.listener,k!==g&&f.isPropagationStopped())break e;wg(f,R,z),g=k}else for(w=0;w<h.length;w++){if(R=h[w],k=R.instance,z=R.currentTarget,R=R.listener,k!==g&&f.isPropagationStopped())break e;wg(f,R,z),g=k}}}if(Fn)throw r=Ca,Fn=!1,Ca=null,r}function Qe(r,s){var a=s[fd];a===void 0&&(a=s[fd]=new Set);var h=r+"__bubble";a.has(h)||(Tg(s,r,2,!1),a.add(h))}function od(r,s,a){var h=0;s&&(h|=4),Tg(a,r,h,s)}var ku="_reactListening"+Math.random().toString(36).slice(2);function qa(r){if(!r[ku]){r[ku]=!0,i.forEach(function(a){a!=="selectionchange"&&(YT.has(a)||od(a,!1,r),od(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ku]||(s[ku]=!0,od("selectionchange",!1,s))}}function Tg(r,s,a,h){switch(La(s)){case 1:var f=Ze;break;case 4:f=Yh;break;default:f=Oa}a=f.bind(null,s,a,r),f=void 0,!Js||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function ad(r,s,a,h,f){var g=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var R=h.stateNode.containerInfo;if(R===f||R.nodeType===8&&R.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;w=w.return}for(;R!==null;){if(w=ds(R),w===null)return;if(k=w.tag,k===5||k===6){h=g=w;continue e}R=R.parentNode}}h=h.return}Pa(function(){var z=g,X=Qs(a),te=[];e:{var Q=_g.get(r);if(Q!==void 0){var ae=uo,he=r;switch(r){case"keypress":if(lo(a)===0)break e;case"keydown":case"keyup":ae=m;break;case"focusin":he="focus",ae=po;break;case"focusout":he="blur",ae=po;break;case"beforeblur":case"afterblur":ae=po;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=ho;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=$;break;case pg:case mg:case gg:ae=Lr;break;case yg:ae=We;break;case"scroll":ae=Xh;break;case"wheel":ae=Me;break;case"copy":case"cut":case"paste":ae=Tu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=T}var fe=(s&4)!==0,ht=!fe&&r==="scroll",U=fe?Q!==null?Q+"Capture":null:Q;fe=[];for(var D=z,B;D!==null;){B=D;var ne=B.stateNode;if(B.tag===5&&ne!==null&&(B=ne,U!==null&&(ne=ct(D,U),ne!=null&&fe.push(Ha(D,ne,B)))),ht)break;D=D.return}0<fe.length&&(Q=new ae(Q,he,null,a,X),te.push({event:Q,listeners:fe}))}}if((s&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",Q&&a!==Zi&&(he=a.relatedTarget||a.fromElement)&&(ds(he)||he[Vr]))break e;if((ae||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(he=a.relatedTarget||a.toElement,ae=z,he=he?ds(he):null,he!==null&&(ht=Un(he),he!==ht||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=z),ae!==he)){if(fe=ho,ne="onMouseLeave",U="onMouseEnter",D="mouse",(r==="pointerout"||r==="pointerover")&&(fe=T,ne="onPointerLeave",U="onPointerEnter",D="pointer"),ht=ae==null?Q:To(ae),B=he==null?Q:To(he),Q=new fe(ne,D+"leave",ae,a,X),Q.target=ht,Q.relatedTarget=B,ne=null,ds(X)===z&&(fe=new fe(U,D+"enter",he,a,X),fe.target=B,fe.relatedTarget=ht,ne=fe),ht=ne,ae&&he)t:{for(fe=ae,U=he,D=0,B=fe;B;B=wo(B))D++;for(B=0,ne=U;ne;ne=wo(ne))B++;for(;0<D-B;)fe=wo(fe),D--;for(;0<B-D;)U=wo(U),B--;for(;D--;){if(fe===U||U!==null&&fe===U.alternate)break t;fe=wo(fe),U=wo(U)}fe=null}else fe=null;ae!==null&&Ig(te,Q,ae,fe,!1),he!==null&&ht!==null&&Ig(te,ht,he,fe,!0)}}e:{if(Q=z?To(z):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var me=jT;else if(ng(Q))if(ig)me=WT;else{me=zT;var _e=BT}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(me=$T);if(me&&(me=me(r,z))){rg(te,me,a,X);break e}_e&&_e(r,Q,z),r==="focusout"&&(_e=Q._wrapperState)&&_e.controlled&&Q.type==="number"&&Hs(Q,"number",Q.value)}switch(_e=z?To(z):window,r){case"focusin":(ng(_e)||_e.contentEditable==="true")&&(_o=_e,td=z,$a=null);break;case"focusout":$a=td=_o=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,dg(te,a,X);break;case"selectionchange":if(KT)break;case"keydown":case"keyup":dg(te,a,X)}var ve;if(pt)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else yo?eg(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(hs&&a.locale!=="ko"&&(yo||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&yo&&(ve=Va()):(yn=X,ao="value"in yn?yn.value:yn.textContent,yo=!0)),_e=xu(z,Ee),0<_e.length&&(Ee=new Ua(Ee,r,null,a,X),te.push({event:Ee,listeners:_e}),ve?Ee.data=ve:(ve=tg(a),ve!==null&&(Ee.data=ve)))),(ve=_n?VT(r,a):MT(r,a))&&(z=xu(z,"onBeforeInput"),0<z.length&&(X=new Ua("onBeforeInput","beforeinput",null,a,X),te.push({event:X,listeners:z}),X.data=ve))}Eg(te,s)})}function Ha(r,s,a){return{instance:r,listener:s,currentTarget:a}}function xu(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ct(r,a),g!=null&&h.unshift(Ha(r,g,f)),g=ct(r,s),g!=null&&h.push(Ha(r,g,f))),r=r.return}return h}function wo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Ig(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var R=a,k=R.alternate,z=R.stateNode;if(k!==null&&k===h)break;R.tag===5&&z!==null&&(R=z,f?(k=ct(a,g),k!=null&&w.unshift(Ha(a,k,R))):f||(k=ct(a,g),k!=null&&w.push(Ha(a,k,R)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var XT=/\r\n?/g,JT=/\u0000|\uFFFD/g;function Sg(r){return(typeof r=="string"?r:""+r).replace(XT,`
`).replace(JT,"")}function Nu(r,s,a){if(s=Sg(s),Sg(r)!==s&&a)throw Error(t(425))}function Du(){}var ld=null,ud=null;function cd(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,ZT=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,eI=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(r){return Rg.resolve(null).then(r).catch(tI)}:hd;function tI(r){setTimeout(function(){throw r})}function dd(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Wn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Wn(s)}function gi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function Ag(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),dr="__reactFiber$"+Eo,Ka="__reactProps$"+Eo,Vr="__reactContainer$"+Eo,fd="__reactEvents$"+Eo,nI="__reactListeners$"+Eo,rI="__reactHandles$"+Eo;function ds(r){var s=r[dr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Vr]||a[dr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=Ag(r);r!==null;){if(a=r[dr])return a;r=Ag(r)}return s}r=a,a=r.parentNode}return null}function Ga(r){return r=r[dr]||r[Vr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function To(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function bu(r){return r[Ka]||null}var pd=[],Io=-1;function yi(r){return{current:r}}function Ye(r){0>Io||(r.current=pd[Io],pd[Io]=null,Io--)}function Ge(r,s){Io++,pd[Io]=r.current,r.current=s}var _i={},Bt=yi(_i),on=yi(!1),fs=_i;function So(r,s){var a=r.type.contextTypes;if(!a)return _i;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function an(r){return r=r.childContextTypes,r!=null}function Ou(){Ye(on),Ye(Bt)}function Pg(r,s,a){if(Bt.current!==_i)throw Error(t(168));Ge(Bt,s),Ge(on,a)}function Cg(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,De(r)||"Unknown",f));return oe({},a,h)}function Lu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||_i,fs=Bt.current,Ge(Bt,r),Ge(on,on.current),!0}function kg(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=Cg(r,s,fs),h.__reactInternalMemoizedMergedChildContext=r,Ye(on),Ye(Bt),Ge(Bt,r)):Ye(on),Ge(on,a)}var Mr=null,Vu=!1,md=!1;function xg(r){Mr===null?Mr=[r]:Mr.push(r)}function iI(r){Vu=!0,xg(r)}function vi(){if(!md&&Mr!==null){md=!0;var r=0,s=Oe;try{var a=Mr;for(Oe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}Mr=null,Vu=!1}catch(f){throw Mr!==null&&(Mr=Mr.slice(r+1)),no(is,vi),f}finally{Oe=s,md=!1}}return null}var Ro=[],Ao=0,Mu=null,Fu=0,kn=[],xn=0,ps=null,Fr=1,Ur="";function ms(r,s){Ro[Ao++]=Fu,Ro[Ao++]=Mu,Mu=r,Fu=s}function Ng(r,s,a){kn[xn++]=Fr,kn[xn++]=Ur,kn[xn++]=ps,ps=r;var h=Fr;r=Ur;var f=32-Xt(h)-1;h&=~(1<<f),a+=1;var g=32-Xt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Fr=1<<32-Xt(s)+f|a<<f|h,Ur=g+r}else Fr=1<<g|a<<f|h,Ur=r}function gd(r){r.return!==null&&(ms(r,1),Ng(r,1,0))}function yd(r){for(;r===Mu;)Mu=Ro[--Ao],Ro[Ao]=null,Fu=Ro[--Ao],Ro[Ao]=null;for(;r===ps;)ps=kn[--xn],kn[xn]=null,Ur=kn[--xn],kn[xn]=null,Fr=kn[--xn],kn[xn]=null}var vn=null,wn=null,et=!1,Kn=null;function Dg(r,s){var a=On(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function bg(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,vn=r,wn=gi(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,vn=r,wn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=ps!==null?{id:Fr,overflow:Ur}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=On(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,vn=r,wn=null,!0):!1;default:return!1}}function _d(r){return(r.mode&1)!==0&&(r.flags&128)===0}function vd(r){if(et){var s=wn;if(s){var a=s;if(!bg(r,s)){if(_d(r))throw Error(t(418));s=gi(a.nextSibling);var h=vn;s&&bg(r,s)?Dg(h,a):(r.flags=r.flags&-4097|2,et=!1,vn=r)}}else{if(_d(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,vn=r}}}function Og(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;vn=r}function Uu(r){if(r!==vn)return!1;if(!et)return Og(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!cd(r.type,r.memoizedProps)),s&&(s=wn)){if(_d(r))throw Lg(),Error(t(418));for(;s;)Dg(r,s),s=gi(s.nextSibling)}if(Og(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){wn=gi(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}wn=null}}else wn=vn?gi(r.stateNode.nextSibling):null;return!0}function Lg(){for(var r=wn;r;)r=gi(r.nextSibling)}function Po(){wn=vn=null,et=!1}function wd(r){Kn===null?Kn=[r]:Kn.push(r)}var sI=ee.ReactCurrentBatchConfig;function Qa(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var R=f.refs;w===null?delete R[g]:R[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ju(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Vg(r){var s=r._init;return s(r._payload)}function Mg(r){function s(U,D){if(r){var B=U.deletions;B===null?(U.deletions=[D],U.flags|=16):B.push(D)}}function a(U,D){if(!r)return null;for(;D!==null;)s(U,D),D=D.sibling;return null}function h(U,D){for(U=new Map;D!==null;)D.key!==null?U.set(D.key,D):U.set(D.index,D),D=D.sibling;return U}function f(U,D){return U=Pi(U,D),U.index=0,U.sibling=null,U}function g(U,D,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<D?(U.flags|=2,D):B):(U.flags|=2,D)):(U.flags|=1048576,D)}function w(U){return r&&U.alternate===null&&(U.flags|=2),U}function R(U,D,B,ne){return D===null||D.tag!==6?(D=df(B,U.mode,ne),D.return=U,D):(D=f(D,B),D.return=U,D)}function k(U,D,B,ne){var me=B.type;return me===A?X(U,D,B.props.children,ne,B.key):D!==null&&(D.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===At&&Vg(me)===D.type)?(ne=f(D,B.props),ne.ref=Qa(U,D,B),ne.return=U,ne):(ne=cc(B.type,B.key,B.props,null,U.mode,ne),ne.ref=Qa(U,D,B),ne.return=U,ne)}function z(U,D,B,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==B.containerInfo||D.stateNode.implementation!==B.implementation?(D=ff(B,U.mode,ne),D.return=U,D):(D=f(D,B.children||[]),D.return=U,D)}function X(U,D,B,ne,me){return D===null||D.tag!==7?(D=Is(B,U.mode,ne,me),D.return=U,D):(D=f(D,B),D.return=U,D)}function te(U,D,B){if(typeof D=="string"&&D!==""||typeof D=="number")return D=df(""+D,U.mode,B),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case le:return B=cc(D.type,D.key,D.props,null,U.mode,B),B.ref=Qa(U,null,D),B.return=U,B;case re:return D=ff(D,U.mode,B),D.return=U,D;case At:var ne=D._init;return te(U,ne(D._payload),B)}if(Pr(D)||de(D))return D=Is(D,U.mode,B,null),D.return=U,D;ju(U,D)}return null}function Q(U,D,B,ne){var me=D!==null?D.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return me!==null?null:R(U,D,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case le:return B.key===me?k(U,D,B,ne):null;case re:return B.key===me?z(U,D,B,ne):null;case At:return me=B._init,Q(U,D,me(B._payload),ne)}if(Pr(B)||de(B))return me!==null?null:X(U,D,B,ne,null);ju(U,B)}return null}function ae(U,D,B,ne,me){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return U=U.get(B)||null,R(D,U,""+ne,me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case le:return U=U.get(ne.key===null?B:ne.key)||null,k(D,U,ne,me);case re:return U=U.get(ne.key===null?B:ne.key)||null,z(D,U,ne,me);case At:var _e=ne._init;return ae(U,D,B,_e(ne._payload),me)}if(Pr(ne)||de(ne))return U=U.get(B)||null,X(D,U,ne,me,null);ju(D,ne)}return null}function he(U,D,B,ne){for(var me=null,_e=null,ve=D,Ee=D=0,xt=null;ve!==null&&Ee<B.length;Ee++){ve.index>Ee?(xt=ve,ve=null):xt=ve.sibling;var Be=Q(U,ve,B[Ee],ne);if(Be===null){ve===null&&(ve=xt);break}r&&ve&&Be.alternate===null&&s(U,ve),D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be,ve=xt}if(Ee===B.length)return a(U,ve),et&&ms(U,Ee),me;if(ve===null){for(;Ee<B.length;Ee++)ve=te(U,B[Ee],ne),ve!==null&&(D=g(ve,D,Ee),_e===null?me=ve:_e.sibling=ve,_e=ve);return et&&ms(U,Ee),me}for(ve=h(U,ve);Ee<B.length;Ee++)xt=ae(ve,U,Ee,B[Ee],ne),xt!==null&&(r&&xt.alternate!==null&&ve.delete(xt.key===null?Ee:xt.key),D=g(xt,D,Ee),_e===null?me=xt:_e.sibling=xt,_e=xt);return r&&ve.forEach(function(Ci){return s(U,Ci)}),et&&ms(U,Ee),me}function fe(U,D,B,ne){var me=de(B);if(typeof me!="function")throw Error(t(150));if(B=me.call(B),B==null)throw Error(t(151));for(var _e=me=null,ve=D,Ee=D=0,xt=null,Be=B.next();ve!==null&&!Be.done;Ee++,Be=B.next()){ve.index>Ee?(xt=ve,ve=null):xt=ve.sibling;var Ci=Q(U,ve,Be.value,ne);if(Ci===null){ve===null&&(ve=xt);break}r&&ve&&Ci.alternate===null&&s(U,ve),D=g(Ci,D,Ee),_e===null?me=Ci:_e.sibling=Ci,_e=Ci,ve=xt}if(Be.done)return a(U,ve),et&&ms(U,Ee),me;if(ve===null){for(;!Be.done;Ee++,Be=B.next())Be=te(U,Be.value,ne),Be!==null&&(D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be);return et&&ms(U,Ee),me}for(ve=h(U,ve);!Be.done;Ee++,Be=B.next())Be=ae(ve,U,Ee,Be.value,ne),Be!==null&&(r&&Be.alternate!==null&&ve.delete(Be.key===null?Ee:Be.key),D=g(Be,D,Ee),_e===null?me=Be:_e.sibling=Be,_e=Be);return r&&ve.forEach(function(FI){return s(U,FI)}),et&&ms(U,Ee),me}function ht(U,D,B,ne){if(typeof B=="object"&&B!==null&&B.type===A&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case le:e:{for(var me=B.key,_e=D;_e!==null;){if(_e.key===me){if(me=B.type,me===A){if(_e.tag===7){a(U,_e.sibling),D=f(_e,B.props.children),D.return=U,U=D;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===At&&Vg(me)===_e.type){a(U,_e.sibling),D=f(_e,B.props),D.ref=Qa(U,_e,B),D.return=U,U=D;break e}a(U,_e);break}else s(U,_e);_e=_e.sibling}B.type===A?(D=Is(B.props.children,U.mode,ne,B.key),D.return=U,U=D):(ne=cc(B.type,B.key,B.props,null,U.mode,ne),ne.ref=Qa(U,D,B),ne.return=U,U=ne)}return w(U);case re:e:{for(_e=B.key;D!==null;){if(D.key===_e)if(D.tag===4&&D.stateNode.containerInfo===B.containerInfo&&D.stateNode.implementation===B.implementation){a(U,D.sibling),D=f(D,B.children||[]),D.return=U,U=D;break e}else{a(U,D);break}else s(U,D);D=D.sibling}D=ff(B,U.mode,ne),D.return=U,U=D}return w(U);case At:return _e=B._init,ht(U,D,_e(B._payload),ne)}if(Pr(B))return he(U,D,B,ne);if(de(B))return fe(U,D,B,ne);ju(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,D!==null&&D.tag===6?(a(U,D.sibling),D=f(D,B),D.return=U,U=D):(a(U,D),D=df(B,U.mode,ne),D.return=U,U=D),w(U)):a(U,D)}return ht}var Co=Mg(!0),Fg=Mg(!1),Bu=yi(null),zu=null,ko=null,Ed=null;function Td(){Ed=ko=zu=null}function Id(r){var s=Bu.current;Ye(Bu),r._currentValue=s}function Sd(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function xo(r,s){zu=r,Ed=ko=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(ln=!0),r.firstContext=null)}function Nn(r){var s=r._currentValue;if(Ed!==r)if(r={context:r,memoizedValue:s,next:null},ko===null){if(zu===null)throw Error(t(308));ko=r,zu.dependencies={lanes:0,firstContext:r}}else ko=ko.next=r;return s}var gs=null;function Rd(r){gs===null?gs=[r]:gs.push(r)}function Ug(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Rd(s)):(a.next=f.next,f.next=a),s.interleaved=a,jr(r,h)}function jr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var wi=!1;function Ad(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Br(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Ei(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,(Ue&2)!==0){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,jr(r,a)}return f=h.interleaved,f===null?(s.next=s,Rd(h)):(s.next=f.next,f.next=s),h.interleaved=s,jr(r,a)}function $u(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ci(r,a)}}function Bg(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Wu(r,s,a,h){var f=r.updateQueue;wi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var k=R,z=k.next;k.next=null,w===null?g=z:w.next=z,w=k;var X=r.alternate;X!==null&&(X=X.updateQueue,R=X.lastBaseUpdate,R!==w&&(R===null?X.firstBaseUpdate=z:R.next=z,X.lastBaseUpdate=k))}if(g!==null){var te=f.baseState;w=0,X=z=k=null,R=g;do{var Q=R.lane,ae=R.eventTime;if((h&Q)===Q){X!==null&&(X=X.next={eventTime:ae,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var he=r,fe=R;switch(Q=s,ae=a,fe.tag){case 1:if(he=fe.payload,typeof he=="function"){te=he.call(ae,te,Q);break e}te=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=fe.payload,Q=typeof he=="function"?he.call(ae,te,Q):he,Q==null)break e;te=oe({},te,Q);break e;case 2:wi=!0}}R.callback!==null&&R.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[R]:Q.push(R))}else ae={eventTime:ae,lane:Q,tag:R.tag,payload:R.payload,callback:R.callback,next:null},X===null?(z=X=ae,k=te):X=X.next=ae,w|=Q;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;Q=R,R=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(X===null&&(k=te),f.baseState=k,f.firstBaseUpdate=z,f.lastBaseUpdate=X,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);vs|=w,r.lanes=w,r.memoizedState=te}}function zg(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Ya={},fr=yi(Ya),Xa=yi(Ya),Ja=yi(Ya);function ys(r){if(r===Ya)throw Error(t(174));return r}function Pd(r,s){switch(Ge(Ja,s),Ge(Xa,r),Ge(fr,Ya),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:wt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=wt(s,r)}Ye(fr),Ge(fr,s)}function No(){Ye(fr),Ye(Xa),Ye(Ja)}function $g(r){ys(Ja.current);var s=ys(fr.current),a=wt(s,r.type);s!==a&&(Ge(Xa,r),Ge(fr,a))}function Cd(r){Xa.current===r&&(Ye(fr),Ye(Xa))}var nt=yi(0);function qu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var kd=[];function xd(){for(var r=0;r<kd.length;r++)kd[r]._workInProgressVersionPrimary=null;kd.length=0}var Hu=ee.ReactCurrentDispatcher,Nd=ee.ReactCurrentBatchConfig,_s=0,rt=null,Tt=null,Ct=null,Ku=!1,Za=!1,el=0,oI=0;function zt(){throw Error(t(321))}function Dd(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Hn(r[a],s[a]))return!1;return!0}function bd(r,s,a,h,f,g){if(_s=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Hu.current=r===null||r.memoizedState===null?cI:hI,r=a(h,f),Za){g=0;do{if(Za=!1,el=0,25<=g)throw Error(t(301));g+=1,Ct=Tt=null,s.updateQueue=null,Hu.current=dI,r=a(h,f)}while(Za)}if(Hu.current=Yu,s=Tt!==null&&Tt.next!==null,_s=0,Ct=Tt=rt=null,Ku=!1,s)throw Error(t(300));return r}function Od(){var r=el!==0;return el=0,r}function pr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function Dn(){if(Tt===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Tt.next;var s=Ct===null?rt.memoizedState:Ct.next;if(s!==null)Ct=s,Tt=r;else{if(r===null)throw Error(t(310));Tt=r,r={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ct===null?rt.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}function tl(r,s){return typeof s=="function"?s(r):s}function Ld(r){var s=Dn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=Tt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var R=w=null,k=null,z=g;do{var X=z.lane;if((_s&X)===X)k!==null&&(k=k.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),h=z.hasEagerState?z.eagerState:r(h,z.action);else{var te={lane:X,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};k===null?(R=k=te,w=h):k=k.next=te,rt.lanes|=X,vs|=X}z=z.next}while(z!==null&&z!==g);k===null?w=h:k.next=R,Hn(h,s.memoizedState)||(ln=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=k,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,vs|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Vd(r){var s=Dn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);Hn(g,s.memoizedState)||(ln=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Wg(){}function qg(r,s){var a=rt,h=Dn(),f=s(),g=!Hn(h.memoizedState,f);if(g&&(h.memoizedState=f,ln=!0),h=h.queue,Md(Gg.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,nl(9,Kg.bind(null,a,h,f,s),void 0,null),kt===null)throw Error(t(349));(_s&30)!==0||Hg(a,s,f)}return f}function Hg(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Kg(r,s,a,h){s.value=a,s.getSnapshot=h,Qg(s)&&Yg(r)}function Gg(r,s,a){return a(function(){Qg(s)&&Yg(r)})}function Qg(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Hn(r,a)}catch{return!0}}function Yg(r){var s=jr(r,1);s!==null&&Xn(s,r,1,-1)}function Xg(r){var s=pr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:tl,lastRenderedState:r},s.queue=r,r=r.dispatch=uI.bind(null,rt,r),[s.memoizedState,r]}function nl(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Jg(){return Dn().memoizedState}function Gu(r,s,a,h){var f=pr();rt.flags|=r,f.memoizedState=nl(1|s,a,void 0,h===void 0?null:h)}function Qu(r,s,a,h){var f=Dn();h=h===void 0?null:h;var g=void 0;if(Tt!==null){var w=Tt.memoizedState;if(g=w.destroy,h!==null&&Dd(h,w.deps)){f.memoizedState=nl(s,a,g,h);return}}rt.flags|=r,f.memoizedState=nl(1|s,a,g,h)}function Zg(r,s){return Gu(8390656,8,r,s)}function Md(r,s){return Qu(2048,8,r,s)}function ey(r,s){return Qu(4,2,r,s)}function ty(r,s){return Qu(4,4,r,s)}function ny(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function ry(r,s,a){return a=a!=null?a.concat([r]):null,Qu(4,4,ny.bind(null,s,r),a)}function Fd(){}function iy(r,s){var a=Dn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Dd(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function sy(r,s){var a=Dn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Dd(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function oy(r,s,a){return(_s&21)===0?(r.baseState&&(r.baseState=!1,ln=!0),r.memoizedState=a):(Hn(a,s)||(a=as(),rt.lanes|=a,vs|=a,r.baseState=!0),s)}function aI(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var h=Nd.transition;Nd.transition={};try{r(!1),s()}finally{Oe=a,Nd.transition=h}}function ay(){return Dn().memoizedState}function lI(r,s,a){var h=Ri(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},ly(r))uy(s,a);else if(a=Ug(r,s,a,h),a!==null){var f=en();Xn(a,r,h,f),cy(a,s,h)}}function uI(r,s,a){var h=Ri(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(ly(r))uy(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,R=g(w,a);if(f.hasEagerState=!0,f.eagerState=R,Hn(R,w)){var k=s.interleaved;k===null?(f.next=f,Rd(s)):(f.next=k.next,k.next=f),s.interleaved=f;return}}catch{}finally{}a=Ug(r,s,f,h),a!==null&&(f=en(),Xn(a,r,h,f),cy(a,s,h))}}function ly(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function uy(r,s){Za=Ku=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function cy(r,s,a){if((a&4194240)!==0){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ci(r,a)}}var Yu={readContext:Nn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},cI={readContext:Nn,useCallback:function(r,s){return pr().memoizedState=[r,s===void 0?null:s],r},useContext:Nn,useEffect:Zg,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Gu(4194308,4,ny.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Gu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Gu(4,2,r,s)},useMemo:function(r,s){var a=pr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=pr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=lI.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=pr();return r={current:r},s.memoizedState=r},useState:Xg,useDebugValue:Fd,useDeferredValue:function(r){return pr().memoizedState=r},useTransition:function(){var r=Xg(!1),s=r[0];return r=aI.bind(null,r[1]),pr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=rt,f=pr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));(_s&30)!==0||Hg(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Zg(Gg.bind(null,h,g,r),[r]),h.flags|=2048,nl(9,Kg.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=pr(),s=kt.identifierPrefix;if(et){var a=Ur,h=Fr;a=(h&~(1<<32-Xt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=el++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=oI++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},hI={readContext:Nn,useCallback:iy,useContext:Nn,useEffect:Md,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Ld,useRef:Jg,useState:function(){return Ld(tl)},useDebugValue:Fd,useDeferredValue:function(r){var s=Dn();return oy(s,Tt.memoizedState,r)},useTransition:function(){var r=Ld(tl)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:Wg,useSyncExternalStore:qg,useId:ay,unstable_isNewReconciler:!1},dI={readContext:Nn,useCallback:iy,useContext:Nn,useEffect:Md,useImperativeHandle:ry,useInsertionEffect:ey,useLayoutEffect:ty,useMemo:sy,useReducer:Vd,useRef:Jg,useState:function(){return Vd(tl)},useDebugValue:Fd,useDeferredValue:function(r){var s=Dn();return Tt===null?s.memoizedState=r:oy(s,Tt.memoizedState,r)},useTransition:function(){var r=Vd(tl)[0],s=Dn().memoizedState;return[r,s]},useMutableSource:Wg,useSyncExternalStore:qg,useId:ay,unstable_isNewReconciler:!1};function Gn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Ud(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Xu={isMounted:function(r){return(r=r._reactInternals)?Un(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ri(r),g=Br(h,f);g.payload=s,a!=null&&(g.callback=a),s=Ei(r,g,f),s!==null&&(Xn(s,r,f,h),$u(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=en(),f=Ri(r),g=Br(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=Ei(r,g,f),s!==null&&(Xn(s,r,f,h),$u(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=en(),h=Ri(r),f=Br(a,h);f.tag=2,s!=null&&(f.callback=s),s=Ei(r,f,h),s!==null&&(Xn(s,r,h,a),$u(s,r,h))}};function hy(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!za(a,h)||!za(f,g):!0}function dy(r,s,a){var h=!1,f=_i,g=s.contextType;return typeof g=="object"&&g!==null?g=Nn(g):(f=an(s)?fs:Bt.current,h=s.contextTypes,g=(h=h!=null)?So(r,f):_i),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function fy(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&Xu.enqueueReplaceState(s,s.state,null)}function jd(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Ad(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Nn(g):(g=an(s)?fs:Bt.current,f.context=So(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Ud(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Xu.enqueueReplaceState(f,f.state,null),Wu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Do(r,s){try{var a="",h=s;do a+=Pe(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Bd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function zd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var fI=typeof WeakMap=="function"?WeakMap:Map;function py(r,s,a){a=Br(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){ic||(ic=!0,rf=h),zd(r,s)},a}function my(r,s,a){a=Br(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){zd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){zd(r,s),typeof h!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function gy(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new fI;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=PI.bind(null,r,s,a),s.then(r,r))}function yy(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function _y(r,s,a,h,f){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Br(-1,1),s.tag=2,Ei(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var pI=ee.ReactCurrentOwner,ln=!1;function Zt(r,s,a,h){s.child=r===null?Fg(s,null,a,h):Co(s,r.child,a,h)}function vy(r,s,a,h,f){a=a.render;var g=s.ref;return xo(s,f),h=bd(r,s,a,h,g,f),a=Od(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(et&&a&&gd(s),s.flags|=1,Zt(r,s,h,f),s.child)}function wy(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!hf(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Ey(r,s,g,h,f)):(r=cc(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&f)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:za,a(w,h)&&r.ref===s.ref)return zr(r,s,f)}return s.flags|=1,r=Pi(g,h),r.ref=s.ref,r.return=s,s.child=r}function Ey(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(za(g,h)&&r.ref===s.ref)if(ln=!1,s.pendingProps=h=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(ln=!0);else return s.lanes=r.lanes,zr(r,s,f)}return $d(r,s,a,h,f)}function Ty(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ge(Oo,En),En|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ge(Oo,En),En|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Ge(Oo,En),En|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Ge(Oo,En),En|=h;return Zt(r,s,f,a),s.child}function Iy(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function $d(r,s,a,h,f){var g=an(a)?fs:Bt.current;return g=So(s,g),xo(s,f),a=bd(r,s,a,h,g,f),h=Od(),r!==null&&!ln?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,zr(r,s,f)):(et&&h&&gd(s),s.flags|=1,Zt(r,s,a,f),s.child)}function Sy(r,s,a,h,f){if(an(a)){var g=!0;Lu(s)}else g=!1;if(xo(s,f),s.stateNode===null)Zu(r,s),dy(s,a,h),jd(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,R=s.memoizedProps;w.props=R;var k=w.context,z=a.contextType;typeof z=="object"&&z!==null?z=Nn(z):(z=an(a)?fs:Bt.current,z=So(s,z));var X=a.getDerivedStateFromProps,te=typeof X=="function"||typeof w.getSnapshotBeforeUpdate=="function";te||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==h||k!==z)&&fy(s,w,h,z),wi=!1;var Q=s.memoizedState;w.state=Q,Wu(s,h,w,f),k=s.memoizedState,R!==h||Q!==k||on.current||wi?(typeof X=="function"&&(Ud(s,a,X,h),k=s.memoizedState),(R=wi||hy(s,a,R,h,Q,k,z))?(te||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=k),w.props=h,w.state=k,w.context=z,h=R):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,jg(r,s),R=s.memoizedProps,z=s.type===s.elementType?R:Gn(s.type,R),w.props=z,te=s.pendingProps,Q=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Nn(k):(k=an(a)?fs:Bt.current,k=So(s,k));var ae=a.getDerivedStateFromProps;(X=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(R!==te||Q!==k)&&fy(s,w,h,k),wi=!1,Q=s.memoizedState,w.state=Q,Wu(s,h,w,f);var he=s.memoizedState;R!==te||Q!==he||on.current||wi?(typeof ae=="function"&&(Ud(s,a,ae,h),he=s.memoizedState),(z=wi||hy(s,a,z,h,Q,he,k)||!1)?(X||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,he,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,he,k)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=he),w.props=h,w.state=he,w.context=k,h=z):(typeof w.componentDidUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||R===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),h=!1)}return Wd(r,s,a,h,g,f)}function Wd(r,s,a,h,f,g){Iy(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&kg(s,a,!1),zr(r,s,g);h=s.stateNode,pI.current=s;var R=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=Co(s,r.child,null,g),s.child=Co(s,null,R,g)):Zt(r,s,R,g),s.memoizedState=h.state,f&&kg(s,a,!0),s.child}function Ry(r){var s=r.stateNode;s.pendingContext?Pg(r,s.pendingContext,s.pendingContext!==s.context):s.context&&Pg(r,s.context,!1),Pd(r,s.containerInfo)}function Ay(r,s,a,h,f){return Po(),wd(f),s.flags|=256,Zt(r,s,a,h),s.child}var qd={dehydrated:null,treeContext:null,retryLane:0};function Hd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Py(r,s,a){var h=s.pendingProps,f=nt.current,g=!1,w=(s.flags&128)!==0,R;if((R=w)||(R=r!==null&&r.memoizedState===null?!1:(f&2)!==0),R?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ge(nt,f&1),r===null)return vd(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},(h&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=hc(w,h,0,null),r=Is(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Hd(a),s.memoizedState=qd,r):Kd(s,w));if(f=r.memoizedState,f!==null&&(R=f.dehydrated,R!==null))return mI(r,s,w,h,R,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,R=f.sibling;var k={mode:"hidden",children:h.children};return(w&1)===0&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=k,s.deletions=null):(h=Pi(f,k),h.subtreeFlags=f.subtreeFlags&14680064),R!==null?g=Pi(R,g):(g=Is(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?Hd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=qd,h}return g=r.child,r=g.sibling,h=Pi(g,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function Kd(r,s){return s=hc({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ju(r,s,a,h){return h!==null&&wd(h),Co(s,r.child,null,a),r=Kd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function mI(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=Bd(Error(t(422))),Ju(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=hc({mode:"visible",children:h.children},f,0,null),g=Is(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,(s.mode&1)!==0&&Co(s,r.child,null,w),s.child.memoizedState=Hd(w),s.memoizedState=qd,g);if((s.mode&1)===0)return Ju(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var R=h.dgst;return h=R,g=Error(t(419)),h=Bd(g,h,void 0),Ju(r,s,w,h)}if(R=(w&r.childLanes)!==0,ln||R){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(h.suspendedLanes|w))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,jr(r,f),Xn(h,r,f,-1))}return cf(),h=Bd(Error(t(421))),Ju(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=CI.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,wn=gi(f.nextSibling),vn=s,et=!0,Kn=null,r!==null&&(kn[xn++]=Fr,kn[xn++]=Ur,kn[xn++]=ps,Fr=r.id,Ur=r.overflow,ps=s),s=Kd(s,h.children),s.flags|=4096,s)}function Cy(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Sd(r.return,s,a)}function Gd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function ky(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Zt(r,s,h.children,a),h=nt.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&Cy(r,a,s);else if(r.tag===19)Cy(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ge(nt,h),(s.mode&1)===0)s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&qu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),Gd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&qu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}Gd(s,!0,a,null,g);break;case"together":Gd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Zu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function zr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),vs|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=Pi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Pi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function gI(r,s,a){switch(s.tag){case 3:Ry(s),Po();break;case 5:$g(s);break;case 1:an(s.type)&&Lu(s);break;case 4:Pd(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ge(Bu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ge(nt,nt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?Py(r,s,a):(Ge(nt,nt.current&1),r=zr(r,s,a),r!==null?r.sibling:null);Ge(nt,nt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,(r.flags&128)!==0){if(h)return ky(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ge(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,Ty(r,s,a)}return zr(r,s,a)}var xy,Qd,Ny,Dy;xy=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qd=function(){},Ny=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,ys(fr.current);var g=null;switch(a){case"input":f=Yi(r,f),h=Yi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ya(r,f),h=ya(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=Du)}Ia(a,h);var w;a=null;for(z in f)if(!h.hasOwnProperty(z)&&f.hasOwnProperty(z)&&f[z]!=null)if(z==="style"){var R=f[z];for(w in R)R.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in h){var k=h[z];if(R=f!=null?f[z]:void 0,h.hasOwnProperty(z)&&k!==R&&(k!=null||R!=null))if(z==="style")if(R){for(w in R)!R.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&R[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(g||(g=[]),g.push(z,a)),a=k;else z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,R=R?R.__html:void 0,k!=null&&R!==k&&(g=g||[]).push(z,k)):z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(z,""+k):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(k!=null&&z==="onScroll"&&Qe("scroll",r),g||R===k||(g=[])):(g=g||[]).push(z,k))}a&&(g=g||[]).push("style",a);var z=g;(s.updateQueue=z)&&(s.flags|=4)}},Dy=function(r,s,a,h){a!==h&&(s.flags|=4)};function rl(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function $t(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function yI(r,s,a){var h=s.pendingProps;switch(yd(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(s),null;case 1:return an(s.type)&&Ou(),$t(s),null;case 3:return h=s.stateNode,No(),Ye(on),Ye(Bt),xd(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(Uu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Kn!==null&&(af(Kn),Kn=null))),Qd(r,s),$t(s),null;case 5:Cd(s);var f=ys(Ja.current);if(a=s.type,r!==null&&s.stateNode!=null)Ny(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return $t(s),null}if(r=ys(fr.current),Uu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[dr]=s,h[Ka]=g,r=(s.mode&1)!==0,a){case"dialog":Qe("cancel",h),Qe("close",h);break;case"iframe":case"object":case"embed":Qe("load",h);break;case"video":case"audio":for(f=0;f<Wa.length;f++)Qe(Wa[f],h);break;case"source":Qe("error",h);break;case"img":case"image":case"link":Qe("error",h),Qe("load",h);break;case"details":Qe("toggle",h);break;case"input":qs(h,g),Qe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Qe("invalid",h);break;case"textarea":Ks(h,g),Qe("invalid",h)}Ia(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var R=g[w];w==="children"?typeof R=="string"?h.textContent!==R&&(g.suppressHydrationWarning!==!0&&Nu(h.textContent,R,r),f=["children",R]):typeof R=="number"&&h.textContent!==""+R&&(g.suppressHydrationWarning!==!0&&Nu(h.textContent,R,r),f=["children",""+R]):o.hasOwnProperty(w)&&R!=null&&w==="onScroll"&&Qe("scroll",h)}switch(a){case"input":nn(h),ru(h,g,!0);break;case"textarea":nn(h),_a(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=Du)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=vt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[dr]=s,r[Ka]=h,xy(r,s,!1,!1),s.stateNode=r;e:{switch(w=Sa(a,h),a){case"dialog":Qe("cancel",r),Qe("close",r),f=h;break;case"iframe":case"object":case"embed":Qe("load",r),f=h;break;case"video":case"audio":for(f=0;f<Wa.length;f++)Qe(Wa[f],r);f=h;break;case"source":Qe("error",r),f=h;break;case"img":case"image":case"link":Qe("error",r),Qe("load",r),f=h;break;case"details":Qe("toggle",r),f=h;break;case"input":qs(r,h),f=Yi(r,h),Qe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Qe("invalid",r);break;case"textarea":Ks(r,h),f=ya(r,h),Qe("invalid",r);break;default:f=h}Ia(a,f),R=f;for(g in R)if(R.hasOwnProperty(g)){var k=R[g];g==="style"?Ea(r,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&va(r,k)):g==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&si(r,k):typeof k=="number"&&si(r,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Qe("scroll",r):k!=null&&K(r,g,k,w))}switch(a){case"input":nn(r),ru(r,h,!1);break;case"textarea":nn(r),_a(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Ne(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Cr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Cr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Du)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return $t(s),null;case 6:if(r&&s.stateNode!=null)Dy(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=ys(Ja.current),ys(fr.current),Uu(s)){if(h=s.stateNode,a=s.memoizedProps,h[dr]=s,(g=h.nodeValue!==a)&&(r=vn,r!==null))switch(r.tag){case 3:Nu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Nu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[dr]=s,s.stateNode=h}return $t(s),null;case 13:if(Ye(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&wn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Lg(),Po(),s.flags|=98560,g=!1;else if(g=Uu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[dr]=s}else Po(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;$t(s),g=!1}else Kn!==null&&(af(Kn),Kn=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(nt.current&1)!==0?It===0&&(It=3):cf())),s.updateQueue!==null&&(s.flags|=4),$t(s),null);case 4:return No(),Qd(r,s),r===null&&qa(s.stateNode.containerInfo),$t(s),null;case 10:return Id(s.type._context),$t(s),null;case 17:return an(s.type)&&Ou(),$t(s),null;case 19:if(Ye(nt),g=s.memoizedState,g===null)return $t(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)rl(g,!1);else{if(It!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(w=qu(r),w!==null){for(s.flags|=128,rl(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ge(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&Ke()>Lo&&(s.flags|=128,h=!0,rl(g,!1),s.lanes=4194304)}else{if(!h)if(r=qu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),rl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!et)return $t(s),null}else 2*Ke()-g.renderingStartTime>Lo&&a!==1073741824&&(s.flags|=128,h=!0,rl(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=Ke(),s.sibling=null,a=nt.current,Ge(nt,h?a&1|2:a&1),s):($t(s),null);case 22:case 23:return uf(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(En&1073741824)!==0&&($t(s),s.subtreeFlags&6&&(s.flags|=8192)):$t(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function _I(r,s){switch(yd(s),s.tag){case 1:return an(s.type)&&Ou(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return No(),Ye(on),Ye(Bt),xd(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Cd(s),null;case 13:if(Ye(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Po()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(nt),null;case 4:return No(),null;case 10:return Id(s.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var ec=!1,Wt=!1,vI=typeof WeakSet=="function"?WeakSet:Set,ue=null;function bo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){at(r,s,h)}else a.current=null}function Yd(r,s,a){try{a()}catch(h){at(r,s,h)}}var by=!1;function wI(r,s){if(ld=fi,r=hg(),ed(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,R=-1,k=-1,z=0,X=0,te=r,Q=null;t:for(;;){for(var ae;te!==a||f!==0&&te.nodeType!==3||(R=w+f),te!==g||h!==0&&te.nodeType!==3||(k=w+h),te.nodeType===3&&(w+=te.nodeValue.length),(ae=te.firstChild)!==null;)Q=te,te=ae;for(;;){if(te===r)break t;if(Q===a&&++z===f&&(R=w),Q===g&&++X===h&&(k=w),(ae=te.nextSibling)!==null)break;te=Q,Q=te.parentNode}te=ae}a=R===-1||k===-1?null:{start:R,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(ud={focusedElem:r,selectionRange:a},fi=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var he=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var fe=he.memoizedProps,ht=he.memoizedState,U=s.stateNode,D=U.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Gn(s.type,fe),ht);U.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){at(s,s.return,ne)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return he=by,by=!1,he}function il(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Yd(s,a,g)}f=f.next}while(f!==h)}}function tc(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function Xd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Oy(r){var s=r.alternate;s!==null&&(r.alternate=null,Oy(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[dr],delete s[Ka],delete s[fd],delete s[nI],delete s[rI])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ly(r){return r.tag===5||r.tag===3||r.tag===4}function Vy(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ly(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Jd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=Du));else if(h!==4&&(r=r.child,r!==null))for(Jd(r,s,a),r=r.sibling;r!==null;)Jd(r,s,a),r=r.sibling}function Zd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Zd(r,s,a),r=r.sibling;r!==null;)Zd(r,s,a),r=r.sibling}var Lt=null,Qn=!1;function Ti(r,s,a){for(a=a.child;a!==null;)My(r,s,a),a=a.sibling}function My(r,s,a){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 5:Wt||bo(a,s);case 6:var h=Lt,f=Qn;Lt=null,Ti(r,s,a),Lt=h,Qn=f,Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Qn?(r=Lt,a=a.stateNode,r.nodeType===8?dd(r.parentNode,a):r.nodeType===1&&dd(r,a),Wn(r)):dd(Lt,a.stateNode));break;case 4:h=Lt,f=Qn,Lt=a.stateNode.containerInfo,Qn=!0,Ti(r,s,a),Lt=h,Qn=f;break;case 0:case 11:case 14:case 15:if(!Wt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&Yd(a,s,w),f=f.next}while(f!==h)}Ti(r,s,a);break;case 1:if(!Wt&&(bo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(R){at(a,s,R)}Ti(r,s,a);break;case 21:Ti(r,s,a);break;case 22:a.mode&1?(Wt=(h=Wt)||a.memoizedState!==null,Ti(r,s,a),Wt=h):Ti(r,s,a);break;default:Ti(r,s,a)}}function Fy(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new vI),s.forEach(function(h){var f=kI.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Yn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,R=w;e:for(;R!==null;){switch(R.tag){case 5:Lt=R.stateNode,Qn=!1;break e;case 3:Lt=R.stateNode.containerInfo,Qn=!0;break e;case 4:Lt=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(Lt===null)throw Error(t(160));My(g,w,f),Lt=null,Qn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(z){at(f,s,z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Uy(s,r),s=s.sibling}function Uy(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yn(s,r),mr(r),h&4){try{il(3,r,r.return),tc(3,r)}catch(fe){at(r,r.return,fe)}try{il(5,r,r.return)}catch(fe){at(r,r.return,fe)}}break;case 1:Yn(s,r),mr(r),h&512&&a!==null&&bo(a,a.return);break;case 5:if(Yn(s,r),mr(r),h&512&&a!==null&&bo(a,a.return),r.flags&32){var f=r.stateNode;try{si(f,"")}catch(fe){at(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,R=r.type,k=r.updateQueue;if(r.updateQueue=null,k!==null)try{R==="input"&&g.type==="radio"&&g.name!=null&&ma(f,g),Sa(R,w);var z=Sa(R,g);for(w=0;w<k.length;w+=2){var X=k[w],te=k[w+1];X==="style"?Ea(f,te):X==="dangerouslySetInnerHTML"?va(f,te):X==="children"?si(f,te):K(f,X,te,z)}switch(R){case"input":ga(f,g);break;case"textarea":Gs(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ae=g.value;ae!=null?Cr(f,!!g.multiple,ae,!1):Q!==!!g.multiple&&(g.defaultValue!=null?Cr(f,!!g.multiple,g.defaultValue,!0):Cr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ka]=g}catch(fe){at(r,r.return,fe)}}break;case 6:if(Yn(s,r),mr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){at(r,r.return,fe)}}break;case 3:if(Yn(s,r),mr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Wn(s.containerInfo)}catch(fe){at(r,r.return,fe)}break;case 4:Yn(s,r),mr(r);break;case 13:Yn(s,r),mr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(nf=Ke())),h&4&&Fy(r);break;case 22:if(X=a!==null&&a.memoizedState!==null,r.mode&1?(Wt=(z=Wt)||X,Yn(s,r),Wt=z):Yn(s,r),mr(r),h&8192){if(z=r.memoizedState!==null,(r.stateNode.isHidden=z)&&!X&&(r.mode&1)!==0)for(ue=r,X=r.child;X!==null;){for(te=ue=X;ue!==null;){switch(Q=ue,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:il(4,Q,Q.return);break;case 1:bo(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){h=Q,a=Q.return;try{s=h,he.props=s.memoizedProps,he.state=s.memoizedState,he.componentWillUnmount()}catch(fe){at(h,a,fe)}}break;case 5:bo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){zy(te);continue}}ae!==null?(ae.return=Q,ue=ae):zy(te)}X=X.sibling}e:for(X=null,te=r;;){if(te.tag===5){if(X===null){X=te;try{f=te.stateNode,z?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(R=te.stateNode,k=te.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,R.style.display=wa("display",w))}catch(fe){at(r,r.return,fe)}}}else if(te.tag===6){if(X===null)try{te.stateNode.nodeValue=z?"":te.memoizedProps}catch(fe){at(r,r.return,fe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;X===te&&(X=null),te=te.return}X===te&&(X=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:Yn(s,r),mr(r),h&4&&Fy(r);break;case 21:break;default:Yn(s,r),mr(r)}}function mr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ly(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(si(f,""),h.flags&=-33);var g=Vy(r);Zd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,R=Vy(r);Jd(r,R,w);break;default:throw Error(t(161))}}catch(k){at(r,r.return,k)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function EI(r,s,a){ue=r,jy(r)}function jy(r,s,a){for(var h=(r.mode&1)!==0;ue!==null;){var f=ue,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||ec;if(!w){var R=f.alternate,k=R!==null&&R.memoizedState!==null||Wt;R=ec;var z=Wt;if(ec=w,(Wt=k)&&!z)for(ue=f;ue!==null;)w=ue,k=w.child,w.tag===22&&w.memoizedState!==null?$y(f):k!==null?(k.return=w,ue=k):$y(f);for(;g!==null;)ue=g,jy(g),g=g.sibling;ue=f,ec=R,Wt=z}By(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ue=g):By(r)}}function By(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Wt||tc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Wt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Gn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&zg(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}zg(s,w,a)}break;case 5:var R=s.stateNode;if(a===null&&s.flags&4){a=R;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var z=s.alternate;if(z!==null){var X=z.memoizedState;if(X!==null){var te=X.dehydrated;te!==null&&Wn(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Wt||s.flags&512&&Xd(s)}catch(Q){at(s,s.return,Q)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function zy(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function $y(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{tc(4,s)}catch(k){at(s,a,k)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(k){at(s,f,k)}}var g=s.return;try{Xd(s)}catch(k){at(s,g,k)}break;case 5:var w=s.return;try{Xd(s)}catch(k){at(s,w,k)}}}catch(k){at(s,s.return,k)}if(s===r){ue=null;break}var R=s.sibling;if(R!==null){R.return=s.return,ue=R;break}ue=s.return}}var TI=Math.ceil,nc=ee.ReactCurrentDispatcher,ef=ee.ReactCurrentOwner,bn=ee.ReactCurrentBatchConfig,Ue=0,kt=null,mt=null,Vt=0,En=0,Oo=yi(0),It=0,sl=null,vs=0,rc=0,tf=0,ol=null,un=null,nf=0,Lo=1/0,$r=null,ic=!1,rf=null,Ii=null,sc=!1,Si=null,oc=0,al=0,sf=null,ac=-1,lc=0;function en(){return(Ue&6)!==0?Ke():ac!==-1?ac:ac=Ke()}function Ri(r){return(r.mode&1)===0?1:(Ue&2)!==0&&Vt!==0?Vt&-Vt:sI.transition!==null?(lc===0&&(lc=as()),lc):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:La(r.type)),r)}function Xn(r,s,a,h){if(50<al)throw al=0,sf=null,Error(t(185));ui(r,a,h),((Ue&2)===0||r!==kt)&&(r===kt&&((Ue&2)===0&&(rc|=a),It===4&&Ai(r,Vt)),cn(r,h),a===1&&Ue===0&&(s.mode&1)===0&&(Lo=Ke()+500,Vu&&vi()))}function cn(r,s){var a=r.callbackNode;Nr(r,s);var h=os(r,r===kt?Vt:0);if(h===0)a!==null&&xa(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&xa(a),s===1)r.tag===0?iI(qy.bind(null,r)):xg(qy.bind(null,r)),eI(function(){(Ue&6)===0&&vi()}),a=null;else{switch(hi(h)){case 1:a=is;break;case 4:a=oi;break;case 16:a=An;break;case 536870912:a=lu;break;default:a=An}a=Zy(a,Wy.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Wy(r,s){if(ac=-1,lc=0,(Ue&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Vo()&&r.callbackNode!==a)return null;var h=os(r,r===kt?Vt:0);if(h===0)return null;if((h&30)!==0||(h&r.expiredLanes)!==0||s)s=uc(r,h);else{s=h;var f=Ue;Ue|=2;var g=Ky();(kt!==r||Vt!==s)&&($r=null,Lo=Ke()+500,Es(r,s));do try{RI();break}catch(R){Hy(r,R)}while(!0);Td(),nc.current=g,Ue=f,mt!==null?s=0:(kt=null,Vt=0,s=It)}if(s!==0){if(s===2&&(f=gn(r),f!==0&&(h=f,s=of(r,f))),s===1)throw a=sl,Es(r,0),Ai(r,h),cn(r,Ke()),a;if(s===6)Ai(r,h);else{if(f=r.current.alternate,(h&30)===0&&!II(f)&&(s=uc(r,h),s===2&&(g=gn(r),g!==0&&(h=g,s=of(r,g))),s===1))throw a=sl,Es(r,0),Ai(r,h),cn(r,Ke()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:Ts(r,un,$r);break;case 3:if(Ai(r,h),(h&130023424)===h&&(s=nf+500-Ke(),10<s)){if(os(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){en(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=hd(Ts.bind(null,r,un,$r),s);break}Ts(r,un,$r);break;case 4:if(Ai(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Xt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=Ke()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*TI(h/1960))-h,10<h){r.timeoutHandle=hd(Ts.bind(null,r,un,$r),h);break}Ts(r,un,$r);break;case 5:Ts(r,un,$r);break;default:throw Error(t(329))}}}return cn(r,Ke()),r.callbackNode===a?Wy.bind(null,r):null}function of(r,s){var a=ol;return r.current.memoizedState.isDehydrated&&(Es(r,s).flags|=256),r=uc(r,s),r!==2&&(s=un,un=a,s!==null&&af(s)),r}function af(r){un===null?un=r:un.push.apply(un,r)}function II(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!Hn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ai(r,s){for(s&=~tf,s&=~rc,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Xt(s),h=1<<a;r[a]=-1,s&=~h}}function qy(r){if((Ue&6)!==0)throw Error(t(327));Vo();var s=os(r,0);if((s&1)===0)return cn(r,Ke()),null;var a=uc(r,s);if(r.tag!==0&&a===2){var h=gn(r);h!==0&&(s=h,a=of(r,h))}if(a===1)throw a=sl,Es(r,0),Ai(r,s),cn(r,Ke()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,Ts(r,un,$r),cn(r,Ke()),null}function lf(r,s){var a=Ue;Ue|=1;try{return r(s)}finally{Ue=a,Ue===0&&(Lo=Ke()+500,Vu&&vi())}}function ws(r){Si!==null&&Si.tag===0&&(Ue&6)===0&&Vo();var s=Ue;Ue|=1;var a=bn.transition,h=Oe;try{if(bn.transition=null,Oe=1,r)return r()}finally{Oe=h,bn.transition=a,Ue=s,(Ue&6)===0&&vi()}}function uf(){En=Oo.current,Ye(Oo)}function Es(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,ZT(a)),mt!==null)for(a=mt.return;a!==null;){var h=a;switch(yd(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ou();break;case 3:No(),Ye(on),Ye(Bt),xd();break;case 5:Cd(h);break;case 4:No();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:Id(h.type._context);break;case 22:case 23:uf()}a=a.return}if(kt=r,mt=r=Pi(r.current,null),Vt=En=s,It=0,sl=null,tf=rc=vs=0,un=ol=null,gs!==null){for(s=0;s<gs.length;s++)if(a=gs[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}gs=null}return r}function Hy(r,s){do{var a=mt;try{if(Td(),Hu.current=Yu,Ku){for(var h=rt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Ku=!1}if(_s=0,Ct=Tt=rt=null,Za=!1,el=0,ef.current=null,a===null||a.return===null){It=1,sl=s,mt=null;break}e:{var g=r,w=a.return,R=a,k=s;if(s=Vt,R.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var z=k,X=R,te=X.tag;if((X.mode&1)===0&&(te===0||te===11||te===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ae=yy(w);if(ae!==null){ae.flags&=-257,_y(ae,w,R,g,s),ae.mode&1&&gy(g,z,s),s=ae,k=z;var he=s.updateQueue;if(he===null){var fe=new Set;fe.add(k),s.updateQueue=fe}else he.add(k);break e}else{if((s&1)===0){gy(g,z,s),cf();break e}k=Error(t(426))}}else if(et&&R.mode&1){var ht=yy(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),_y(ht,w,R,g,s),wd(Do(k,R));break e}}g=k=Do(k,R),It!==4&&(It=2),ol===null?ol=[g]:ol.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=py(g,k,s);Bg(g,U);break e;case 1:R=k;var D=g.type,B=g.stateNode;if((g.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(Ii===null||!Ii.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ne=my(g,R,s);Bg(g,ne);break e}}g=g.return}while(g!==null)}Qy(a)}catch(me){s=me,mt===a&&a!==null&&(mt=a=a.return);continue}break}while(!0)}function Ky(){var r=nc.current;return nc.current=Yu,r===null?Yu:r}function cf(){(It===0||It===3||It===2)&&(It=4),kt===null||(vs&268435455)===0&&(rc&268435455)===0||Ai(kt,Vt)}function uc(r,s){var a=Ue;Ue|=2;var h=Ky();(kt!==r||Vt!==s)&&($r=null,Es(r,s));do try{SI();break}catch(f){Hy(r,f)}while(!0);if(Td(),Ue=a,nc.current=h,mt!==null)throw Error(t(261));return kt=null,Vt=0,It}function SI(){for(;mt!==null;)Gy(mt)}function RI(){for(;mt!==null&&!ou();)Gy(mt)}function Gy(r){var s=Jy(r.alternate,r,En);r.memoizedProps=r.pendingProps,s===null?Qy(r):mt=s,ef.current=null}function Qy(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=yI(a,s,En),a!==null){mt=a;return}}else{if(a=_I(a,s),a!==null){a.flags&=32767,mt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{It=6,mt=null;return}}if(s=s.sibling,s!==null){mt=s;return}mt=s=r}while(s!==null);It===0&&(It=5)}function Ts(r,s,a){var h=Oe,f=bn.transition;try{bn.transition=null,Oe=1,AI(r,s,a,h)}finally{bn.transition=f,Oe=h}return null}function AI(r,s,a,h){do Vo();while(Si!==null);if((Ue&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(He(r,g),r===kt&&(mt=kt=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sc||(sc=!0,Zy(An,function(){return Vo(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=bn.transition,bn.transition=null;var w=Oe;Oe=1;var R=Ue;Ue|=4,ef.current=null,wI(r,a),Uy(a,r),HT(ud),fi=!!ld,ud=ld=null,r.current=a,EI(a),Hh(),Ue=R,Oe=w,bn.transition=g}else r.current=a;if(sc&&(sc=!1,Si=r,oc=f),g=r.pendingLanes,g===0&&(Ii=null),uu(a.stateNode),cn(r,Ke()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(ic)throw ic=!1,r=rf,rf=null,r;return(oc&1)!==0&&r.tag!==0&&Vo(),g=r.pendingLanes,(g&1)!==0?r===sf?al++:(al=0,sf=r):al=0,vi(),null}function Vo(){if(Si!==null){var r=hi(oc),s=bn.transition,a=Oe;try{if(bn.transition=null,Oe=16>r?16:r,Si===null)var h=!1;else{if(r=Si,Si=null,oc=0,(Ue&6)!==0)throw Error(t(331));var f=Ue;for(Ue|=4,ue=r.current;ue!==null;){var g=ue,w=g.child;if((ue.flags&16)!==0){var R=g.deletions;if(R!==null){for(var k=0;k<R.length;k++){var z=R[k];for(ue=z;ue!==null;){var X=ue;switch(X.tag){case 0:case 11:case 15:il(8,X,g)}var te=X.child;if(te!==null)te.return=X,ue=te;else for(;ue!==null;){X=ue;var Q=X.sibling,ae=X.return;if(Oy(X),X===z){ue=null;break}if(Q!==null){Q.return=ae,ue=Q;break}ue=ae}}}var he=g.alternate;if(he!==null){var fe=he.child;if(fe!==null){he.child=null;do{var ht=fe.sibling;fe.sibling=null,fe=ht}while(fe!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,ue=w;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:il(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ue=U;break e}ue=g.return}}var D=r.current;for(ue=D;ue!==null;){w=ue;var B=w.child;if((w.subtreeFlags&2064)!==0&&B!==null)B.return=w,ue=B;else e:for(w=D;ue!==null;){if(R=ue,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:tc(9,R)}}catch(me){at(R,R.return,me)}if(R===w){ue=null;break e}var ne=R.sibling;if(ne!==null){ne.return=R.return,ue=ne;break e}ue=R.return}}if(Ue=f,vi(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(ss,r)}catch{}h=!0}return h}finally{Oe=a,bn.transition=s}}return!1}function Yy(r,s,a){s=Do(a,s),s=py(r,s,1),r=Ei(r,s,1),s=en(),r!==null&&(ui(r,1,s),cn(r,s))}function at(r,s,a){if(r.tag===3)Yy(r,r,a);else for(;s!==null;){if(s.tag===3){Yy(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ii===null||!Ii.has(h))){r=Do(a,r),r=my(s,r,1),s=Ei(s,r,1),r=en(),s!==null&&(ui(s,1,r),cn(s,r));break}}s=s.return}}function PI(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=en(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Vt&a)===a&&(It===4||It===3&&(Vt&130023424)===Vt&&500>Ke()-nf?Es(r,0):tf|=a),cn(r,s)}function Xy(r,s){s===0&&((r.mode&1)===0?s=1:(s=io,io<<=1,(io&130023424)===0&&(io=4194304)));var a=en();r=jr(r,s),r!==null&&(ui(r,s,a),cn(r,a))}function CI(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Xy(r,a)}function kI(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Xy(r,a)}var Jy;Jy=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||on.current)ln=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return ln=!1,gI(r,s,a);ln=(r.flags&131072)!==0}else ln=!1,et&&(s.flags&1048576)!==0&&Ng(s,Fu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Zu(r,s),r=s.pendingProps;var f=So(s,Bt.current);xo(s,a),f=bd(null,s,h,r,f,a);var g=Od();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,an(h)?(g=!0,Lu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ad(s),f.updater=Xu,s.stateNode=f,f._reactInternals=s,jd(s,h,r,a),s=Wd(null,s,h,!0,g,a)):(s.tag=0,et&&g&&gd(s),Zt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Zu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=NI(h),r=Gn(h,r),f){case 0:s=$d(null,s,h,r,a);break e;case 1:s=Sy(null,s,h,r,a);break e;case 11:s=vy(null,s,h,r,a);break e;case 14:s=wy(null,s,h,Gn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),$d(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Sy(r,s,h,f,a);case 3:e:{if(Ry(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,jg(r,s),Wu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Do(Error(t(423)),s),s=Ay(r,s,h,a,f);break e}else if(h!==f){f=Do(Error(t(424)),s),s=Ay(r,s,h,a,f);break e}else for(wn=gi(s.stateNode.containerInfo.firstChild),vn=s,et=!0,Kn=null,a=Fg(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Po(),h===f){s=zr(r,s,a);break e}Zt(r,s,h,a)}s=s.child}return s;case 5:return $g(s),r===null&&vd(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,cd(h,f)?w=null:g!==null&&cd(h,g)&&(s.flags|=32),Iy(r,s),Zt(r,s,w,a),s.child;case 6:return r===null&&vd(s),null;case 13:return Py(r,s,a);case 4:return Pd(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=Co(s,null,h,a):Zt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),vy(r,s,h,f,a);case 7:return Zt(r,s,s.pendingProps,a),s.child;case 8:return Zt(r,s,s.pendingProps.children,a),s.child;case 12:return Zt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Ge(Bu,h._currentValue),h._currentValue=w,g!==null)if(Hn(g.value,w)){if(g.children===f.children&&!on.current){s=zr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var R=g.dependencies;if(R!==null){w=g.child;for(var k=R.firstContext;k!==null;){if(k.context===h){if(g.tag===1){k=Br(-1,a&-a),k.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var X=z.pending;X===null?k.next=k:(k.next=X.next,X.next=k),z.pending=k}}g.lanes|=a,k=g.alternate,k!==null&&(k.lanes|=a),Sd(g.return,a,s),R.lanes|=a;break}k=k.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,R=w.alternate,R!==null&&(R.lanes|=a),Sd(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Zt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,xo(s,a),f=Nn(f),h=h(f),s.flags|=1,Zt(r,s,h,a),s.child;case 14:return h=s.type,f=Gn(h,s.pendingProps),f=Gn(h.type,f),wy(r,s,h,f,a);case 15:return Ey(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Gn(h,f),Zu(r,s),s.tag=1,an(h)?(r=!0,Lu(s)):r=!1,xo(s,a),dy(s,h,f),jd(s,h,f,a),Wd(null,s,h,!0,r,a);case 19:return ky(r,s,a);case 22:return Ty(r,s,a)}throw Error(t(156,s.tag))};function Zy(r,s){return no(r,s)}function xI(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(r,s,a,h){return new xI(r,s,a,h)}function hf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function NI(r){if(typeof r=="function")return hf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===Rt)return 14}return 2}function Pi(r,s){var a=r.alternate;return a===null?(a=On(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function cc(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")hf(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case A:return Is(a.children,f,g,s);case S:w=8,f|=8;break;case P:return r=On(12,a,s,f|2),r.elementType=P,r.lanes=g,r;case C:return r=On(13,a,s,f),r.elementType=C,r.lanes=g,r;case tt:return r=On(19,a,s,f),r.elementType=tt,r.lanes=g,r;case je:return hc(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:w=10;break e;case b:w=9;break e;case M:w=11;break e;case Rt:w=14;break e;case At:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=On(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function Is(r,s,a,h){return r=On(7,r,h,s),r.lanes=a,r}function hc(r,s,a,h){return r=On(22,r,h,s),r.elementType=je,r.lanes=a,r.stateNode={isHidden:!1},r}function df(r,s,a){return r=On(6,r,null,s),r.lanes=a,r}function ff(r,s,a){return s=On(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function DI(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pf(r,s,a,h,f,g,w,R,k){return r=new DI(r,s,a,R,k),s===1?(s=1,g===!0&&(s|=8)):s=0,g=On(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ad(g),r}function bI(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function e_(r){if(!r)return _i;r=r._reactInternals;e:{if(Un(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(an(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(an(a))return Cg(r,a,s)}return s}function t_(r,s,a,h,f,g,w,R,k){return r=pf(a,h,!0,r,f,g,w,R,k),r.context=e_(null),a=r.current,h=en(),f=Ri(a),g=Br(h,f),g.callback=s??null,Ei(a,g,f),r.current.lanes=f,ui(r,f,h),cn(r,h),r}function dc(r,s,a,h){var f=s.current,g=en(),w=Ri(f);return a=e_(a),s.context===null?s.context=a:s.pendingContext=a,s=Br(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=Ei(f,s,w),r!==null&&(Xn(r,f,w,g),$u(r,f,w)),w}function fc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function n_(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function mf(r,s){n_(r,s),(r=r.alternate)&&n_(r,s)}function OI(){return null}var r_=typeof reportError=="function"?reportError:function(r){console.error(r)};function gf(r){this._internalRoot=r}pc.prototype.render=gf.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));dc(r,s,null,null)},pc.prototype.unmount=gf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ws(function(){dc(null,r,null,null)}),s[Vr]=null}};function pc(r){this._internalRoot=r}pc.prototype.unstable_scheduleHydration=function(r){if(r){var s=pu();r={blockedOn:null,target:r,priority:s};for(var a=0;a<lr.length&&s!==0&&s<lr[a].priority;a++);lr.splice(a,0,r),a===0&&yu(r)}};function yf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function mc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function i_(){}function LI(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var z=fc(w);g.call(z)}}var w=t_(s,h,r,0,null,!1,!1,"",i_);return r._reactRootContainer=w,r[Vr]=w.current,qa(r.nodeType===8?r.parentNode:r),ws(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var R=h;h=function(){var z=fc(k);R.call(z)}}var k=pf(r,0,!1,null,null,!1,!1,"",i_);return r._reactRootContainer=k,r[Vr]=k.current,qa(r.nodeType===8?r.parentNode:r),ws(function(){dc(s,k,a,h)}),k}function gc(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var R=f;f=function(){var k=fc(w);R.call(k)}}dc(s,w,r,f)}else w=LI(a,s,r,f,h);return fc(w)}du=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ai(s.pendingLanes);a!==0&&(ci(s,a|1),cn(s,Ke()),(Ue&6)===0&&(Lo=Ke()+500,vi()))}break;case 13:ws(function(){var h=jr(r,1);if(h!==null){var f=en();Xn(h,r,1,f)}}),mf(r,1)}},so=function(r){if(r.tag===13){var s=jr(r,134217728);if(s!==null){var a=en();Xn(s,r,134217728,a)}mf(r,134217728)}},fu=function(r){if(r.tag===13){var s=Ri(r),a=jr(r,s);if(a!==null){var h=en();Xn(a,r,s,h)}mf(r,s)}},pu=function(){return Oe},mu=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Ys=function(r,s,a){switch(s){case"input":if(ga(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=bu(h);if(!f)throw Error(t(90));Yt(h),ga(h,f)}}}break;case"textarea":Gs(r,a);break;case"select":s=a.value,s!=null&&Cr(r,!!a.multiple,s,!1)}},es=lf,Aa=ws;var VI={usingClientEntryPoint:!1,Events:[Ga,To,bu,or,Ra,lf]},ll={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},MI={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ka(r),r===null?null:r.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||OI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{ss=yc.inject(MI),mn=yc}catch{}}return hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VI,hn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yf(s))throw Error(t(200));return bI(r,s,null,a)},hn.createRoot=function(r,s){if(!yf(r))throw Error(t(299));var a=!1,h="",f=r_;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=pf(r,1,!1,null,null,a,!1,h,f),r[Vr]=s.current,qa(r.nodeType===8?r.parentNode:r),new gf(s)},hn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ka(s),r=r===null?null:r.stateNode,r},hn.flushSync=function(r){return ws(r)},hn.hydrate=function(r,s,a){if(!mc(s))throw Error(t(200));return gc(null,r,s,!0,a)},hn.hydrateRoot=function(r,s,a){if(!yf(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=r_;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=t_(s,null,r,1,a??null,f,!1,g,w),r[Vr]=s.current,qa(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new pc(s)},hn.render=function(r,s,a){if(!mc(s))throw Error(t(200));return gc(null,r,s,!1,a)},hn.unmountComponentAtNode=function(r){if(!mc(r))throw Error(t(40));return r._reactRootContainer?(ws(function(){gc(null,null,r,!1,function(){r._reactRootContainer=null,r[Vr]=null})}),!0):!1},hn.unstable_batchedUpdates=lf,hn.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!mc(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return gc(r,s,a,!1,h)},hn.version="18.3.1-next-f1338f8080-20240426",hn}var d_;function f0(){if(d_)return wf.exports;d_=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),wf.exports=HI(),wf.exports}var f_;function KI(){if(f_)return _c;f_=1;var n=f0();return _c.createRoot=n.createRoot,_c.hydrateRoot=n.hydrateRoot,_c}var GI=KI();const QI=d0(GI);f0();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},kl.apply(this,arguments)}var Li;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Li||(Li={}));const p_="popstate";function YI(n){n===void 0&&(n={});function e(o,l){let{pathname:c="/",search:d="",hash:p=""}=Bs(o.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),qf("",{pathname:c,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let c=o.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=o.location.href,y=p.indexOf("#");d=y===-1?p:p.slice(0,y)}return d+"#"+(typeof l=="string"?l:qc(l))}function i(o,l){Np(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return JI(e,t,i,n)}function ft(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Np(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XI(){return Math.random().toString(36).substr(2,8)}function m_(n,e){return{usr:n.state,key:n.key,idx:e}}function qf(n,e,t,i){return t===void 0&&(t=null),kl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Bs(e):e,{state:t,key:e&&e.key||i||XI()})}function qc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bs(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function JI(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d=Li.Pop,p=null,y=v();y==null&&(y=0,c.replaceState(kl({},c.state,{idx:y}),""));function v(){return(c.state||{idx:null}).idx}function E(){d=Li.Pop;let O=v(),H=O==null?null:O-y;y=O,p&&p({action:d,location:j.location,delta:H})}function I(O,H){d=Li.Push;let J=qf(j.location,O,H);t&&t(J,O),y=v()+1;let K=m_(J,y),ee=j.createHref(J);try{c.pushState(K,"",ee)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;o.location.assign(ee)}l&&p&&p({action:d,location:j.location,delta:1})}function x(O,H){d=Li.Replace;let J=qf(j.location,O,H);t&&t(J,O),y=v();let K=m_(J,y),ee=j.createHref(J);c.replaceState(K,"",ee),l&&p&&p({action:d,location:j.location,delta:0})}function V(O){let H=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof O=="string"?O:qc(O);return J=J.replace(/ $/,"%20"),ft(H,"No window.location.(origin|href) available to create URL for href: "+J),new URL(J,H)}let j={get action(){return d},get location(){return n(o,c)},listen(O){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(p_,E),p=O,()=>{o.removeEventListener(p_,E),p=null}},createHref(O){return e(o,O)},createURL:V,encodeLocation(O){let H=V(O);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:I,replace:x,go(O){return c.go(O)}};return j}var g_;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(g_||(g_={}));function ZI(n,e,t){return t===void 0&&(t="/"),e1(n,e,t)}function e1(n,e,t,i){let o=typeof e=="string"?Bs(e):e,l=Dp(o.pathname||"/",t);if(l==null)return null;let c=p0(n);t1(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=f1(l);d=c1(c[p],y)}return d}function p0(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(ft(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let y=Mi([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(ft(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),p0(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:l1(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of m0(l.path))o(l,c,p)}),e}function m0(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=m0(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function t1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:u1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const n1=/^:[\w-]+$/,r1=3,i1=2,s1=1,o1=10,a1=-2,y_=n=>n==="*";function l1(n,e){let t=n.split("/"),i=t.length;return t.some(y_)&&(i+=a1),e&&(i+=i1),t.filter(o=>!y_(o)).reduce((o,l)=>o+(n1.test(l)?r1:l===""?s1:o1),i)}function u1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function c1(n,e,t){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",E=h1({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!E)return null;Object.assign(o,E.params),c.push({params:o,pathname:Mi([l,E.pathname]),pathnameBase:y1(Mi([l,E.pathnameBase])),route:I}),E.pathnameBase!=="/"&&(l=Mi([l,E.pathnameBase]))}return c}function h1(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=d1(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,v,E)=>{let{paramName:I,isOptional:x}=v;if(I==="*"){let j=d[E]||"";c=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const V=d[E];return x&&!V?y[I]=void 0:y[I]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function d1(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Np(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function f1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Np(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Dp(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function p1(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Bs(n):n;return{pathname:t?t.startsWith("/")?t:m1(t,e):e,search:_1(i),hash:v1(o)}}function m1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function If(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bp(n,e){let t=g1(n);return e?t.map((i,o)=>o===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Op(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=Bs(n):(o=kl({},n),ft(!o.pathname||!o.pathname.includes("?"),If("?","pathname","search",o)),ft(!o.pathname||!o.pathname.includes("#"),If("#","pathname","hash",o)),ft(!o.search||!o.search.includes("#"),If("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let E=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),E-=1;o.pathname=I.join("/")}d=E>=0?e[E]:"/"}let p=p1(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}const Mi=n=>n.join("/").replace(/\/\/+/g,"/"),y1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),_1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,v1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function w1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const g0=["post","put","patch","delete"];new Set(g0);const E1=["get",...g0];new Set(E1);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xl(){return xl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},xl.apply(this,arguments)}const Lp=Y.createContext(null),T1=Y.createContext(null),Gi=Y.createContext(null),yh=Y.createContext(null),ei=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),y0=Y.createContext(null);function I1(n,e){let{relative:t}=e===void 0?{}:e;aa()||ft(!1);let{basename:i,navigator:o}=Y.useContext(Gi),{hash:l,pathname:c,search:d}=v0(n,{relative:t}),p=c;return i!=="/"&&(p=c==="/"?i:Mi([i,c])),o.createHref({pathname:p,search:d,hash:l})}function aa(){return Y.useContext(yh)!=null}function zl(){return aa()||ft(!1),Y.useContext(yh).location}function _0(n){Y.useContext(Gi).static||Y.useLayoutEffect(n)}function la(){let{isDataRoute:n}=Y.useContext(ei);return n?F1():S1()}function S1(){aa()||ft(!1);let n=Y.useContext(Lp),{basename:e,future:t,navigator:i}=Y.useContext(Gi),{matches:o}=Y.useContext(ei),{pathname:l}=zl(),c=JSON.stringify(bp(o,t.v7_relativeSplatPath)),d=Y.useRef(!1);return _0(()=>{d.current=!0}),Y.useCallback(function(y,v){if(v===void 0&&(v={}),!d.current)return;if(typeof y=="number"){i.go(y);return}let E=Op(y,JSON.parse(c),l,v.relative==="path");n==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Mi([e,E.pathname])),(v.replace?i.replace:i.push)(E,v.state,v)},[e,i,c,l,n])}const R1=Y.createContext(null);function A1(n){let e=Y.useContext(ei).outlet;return e&&Y.createElement(R1.Provider,{value:n},e)}function v0(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Y.useContext(Gi),{matches:o}=Y.useContext(ei),{pathname:l}=zl(),c=JSON.stringify(bp(o,i.v7_relativeSplatPath));return Y.useMemo(()=>Op(n,JSON.parse(c),l,t==="path"),[n,c,l,t])}function P1(n,e){return C1(n,e)}function C1(n,e,t,i){aa()||ft(!1);let{navigator:o,static:l}=Y.useContext(Gi),{matches:c}=Y.useContext(ei),d=c[c.length-1],p=d?d.params:{};d&&d.pathname;let y=d?d.pathnameBase:"/";d&&d.route;let v=zl(),E;if(e){var I;let H=typeof e=="string"?Bs(e):e;y==="/"||(I=H.pathname)!=null&&I.startsWith(y)||ft(!1),E=H}else E=v;let x=E.pathname||"/",V=x;if(y!=="/"){let H=y.replace(/^\//,"").split("/");V="/"+x.replace(/^\//,"").split("/").slice(H.length).join("/")}let j=ZI(n,{pathname:V}),O=b1(j&&j.map(H=>Object.assign({},H,{params:Object.assign({},p,H.params),pathname:Mi([y,o.encodeLocation?o.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?y:Mi([y,o.encodeLocation?o.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),c,t,i);return e&&O?Y.createElement(yh.Provider,{value:{location:xl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:Li.Pop}},O):O}function k1(){let n=M1(),e=w1(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,null)}const x1=Y.createElement(k1,null);class N1 extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Y.createElement(ei.Provider,{value:this.props.routeContext},Y.createElement(y0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function D1(n){let{routeContext:e,match:t,children:i}=n,o=Y.useContext(Lp);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(ei.Provider,{value:e},i)}function b1(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let c=n,d=(o=t)==null?void 0:o.errors;if(d!=null){let v=c.findIndex(E=>E.route.id&&(d==null?void 0:d[E.route.id])!==void 0);v>=0||ft(!1),c=c.slice(0,Math.min(c.length,v+1))}let p=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let v=0;v<c.length;v++){let E=c[v];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=v),E.route.id){let{loaderData:I,errors:x}=t,V=E.route.loader&&I[E.route.id]===void 0&&(!x||x[E.route.id]===void 0);if(E.route.lazy||V){p=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((v,E,I)=>{let x,V=!1,j=null,O=null;t&&(x=d&&E.route.id?d[E.route.id]:void 0,j=E.route.errorElement||x1,p&&(y<0&&I===0?(U1("route-fallback"),V=!0,O=null):y===I&&(V=!0,O=E.route.hydrateFallbackElement||null)));let H=e.concat(c.slice(0,I+1)),J=()=>{let K;return x?K=j:V?K=O:E.route.Component?K=Y.createElement(E.route.Component,null):E.route.element?K=E.route.element:K=v,Y.createElement(D1,{match:E,routeContext:{outlet:v,matches:H,isDataRoute:t!=null},children:K})};return t&&(E.route.ErrorBoundary||E.route.errorElement||I===0)?Y.createElement(N1,{location:t.location,revalidation:t.revalidation,component:j,error:x,children:J(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):J()},null)}var w0=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(w0||{}),E0=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(E0||{});function O1(n){let e=Y.useContext(Lp);return e||ft(!1),e}function L1(n){let e=Y.useContext(T1);return e||ft(!1),e}function V1(n){let e=Y.useContext(ei);return e||ft(!1),e}function T0(n){let e=V1(),t=e.matches[e.matches.length-1];return t.route.id||ft(!1),t.route.id}function M1(){var n;let e=Y.useContext(y0),t=L1(),i=T0();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function F1(){let{router:n}=O1(w0.UseNavigateStable),e=T0(E0.UseNavigateStable),t=Y.useRef(!1);return _0(()=>{t.current=!0}),Y.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,xl({fromRouteId:e},l)))},[n,e])}const __={};function U1(n,e,t){__[n]||(__[n]=!0)}function j1(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function B1(n){let{to:e,replace:t,state:i,relative:o}=n;aa()||ft(!1);let{future:l,static:c}=Y.useContext(Gi),{matches:d}=Y.useContext(ei),{pathname:p}=zl(),y=la(),v=Op(e,bp(d,l.v7_relativeSplatPath),p,o==="path"),E=JSON.stringify(v);return Y.useEffect(()=>y(JSON.parse(E),{replace:t,state:i,relative:o}),[y,E,o,t,i]),null}function z1(n){return A1(n.context)}function Fo(n){ft(!1)}function $1(n){let{basename:e="/",children:t=null,location:i,navigationType:o=Li.Pop,navigator:l,static:c=!1,future:d}=n;aa()&&ft(!1);let p=e.replace(/^\/*/,"/"),y=Y.useMemo(()=>({basename:p,navigator:l,static:c,future:xl({v7_relativeSplatPath:!1},d)}),[p,d,l,c]);typeof i=="string"&&(i=Bs(i));let{pathname:v="/",search:E="",hash:I="",state:x=null,key:V="default"}=i,j=Y.useMemo(()=>{let O=Dp(v,p);return O==null?null:{location:{pathname:O,search:E,hash:I,state:x,key:V},navigationType:o}},[p,v,E,I,x,V,o]);return j==null?null:Y.createElement(Gi.Provider,{value:y},Y.createElement(yh.Provider,{children:t,value:j}))}function W1(n){let{children:e,location:t}=n;return P1(Hf(e),t)}new Promise(()=>{});function Hf(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,o)=>{if(!Y.isValidElement(i))return;let l=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,Hf(i.props.children,l));return}i.type!==Fo&&ft(!1),!i.props.index||!i.props.children||ft(!1);let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Hf(i.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kf(){return Kf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Kf.apply(this,arguments)}function q1(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function H1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function K1(n,e){return n.button===0&&(!e||e==="_self")&&!H1(n)}const G1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Q1="6";try{window.__reactRouterVersion=Q1}catch{}const Y1="startTransition",v_=$I[Y1];function X1(n){let{basename:e,children:t,future:i,window:o}=n,l=Y.useRef();l.current==null&&(l.current=YI({window:o,v5Compat:!0}));let c=l.current,[d,p]=Y.useState({action:c.action,location:c.location}),{v7_startTransition:y}=i||{},v=Y.useCallback(E=>{y&&v_?v_(()=>p(E)):p(E)},[p,y]);return Y.useLayoutEffect(()=>c.listen(v),[c,v]),Y.useEffect(()=>j1(i),[i]),Y.createElement($1,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:i})}const J1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Z1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hc=Y.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:E}=e,I=q1(e,G1),{basename:x}=Y.useContext(Gi),V,j=!1;if(typeof y=="string"&&Z1.test(y)&&(V=y,J1))try{let K=new URL(window.location.href),ee=y.startsWith("//")?new URL(K.protocol+y):new URL(y),le=Dp(ee.pathname,x);ee.origin===K.origin&&le!=null?y=le+ee.search+ee.hash:j=!0}catch{}let O=I1(y,{relative:o}),H=eS(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:E});function J(K){i&&i(K),K.defaultPrevented||H(K)}return Y.createElement("a",Kf({},I,{href:V||O,onClick:j||l?i:J,ref:t,target:p}))});var w_;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(w_||(w_={}));var E_;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(E_||(E_={}));function eS(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,p=la(),y=zl(),v=v0(n,{relative:c});return Y.useCallback(E=>{if(K1(E,t)){E.preventDefault();let I=i!==void 0?i:qc(y)===qc(v);p(n,{replace:I,state:o,preventScrollReset:l,relative:c,viewTransition:d})}},[y,p,v,i,o,t,n,l,c,d])}var Gt=function(){return Gt=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Gt.apply(this,arguments)};function Nl(n,e,t){if(t||arguments.length===2)for(var i=0,o=e.length,l;i<o;i++)(l||!(i in e))&&(l||(l=Array.prototype.slice.call(e,0,i)),l[i]=e[i]);return n.concat(l||Array.prototype.slice.call(e))}var Xe="-ms-",vl="-moz-",$e="-webkit-",I0="comm",_h="rule",Vp="decl",tS="@import",S0="@keyframes",nS="@layer",R0=Math.abs,Mp=String.fromCharCode,Gf=Object.assign;function rS(n,e){return Dt(n,0)^45?(((e<<2^Dt(n,0))<<2^Dt(n,1))<<2^Dt(n,2))<<2^Dt(n,3):0}function A0(n){return n.trim()}function Wr(n,e){return(n=e.exec(n))?n[0]:n}function ke(n,e,t){return n.replace(e,t)}function kc(n,e,t){return n.indexOf(e,t)}function Dt(n,e){return n.charCodeAt(e)|0}function Go(n,e,t){return n.slice(e,t)}function gr(n){return n.length}function P0(n){return n.length}function dl(n,e){return e.push(n),n}function iS(n,e){return n.map(e).join("")}function T_(n,e){return n.filter(function(t){return!Wr(t,e)})}var vh=1,Qo=1,C0=0,Ln=0,yt=0,ua="";function wh(n,e,t,i,o,l,c,d){return{value:n,root:e,parent:t,type:i,props:o,children:l,line:vh,column:Qo,length:c,return:"",siblings:d}}function xi(n,e){return Gf(wh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function Mo(n){for(;n.root;)n=xi(n.root,{children:[n]});dl(n,n.siblings)}function sS(){return yt}function oS(){return yt=Ln>0?Dt(ua,--Ln):0,Qo--,yt===10&&(Qo=1,vh--),yt}function er(){return yt=Ln<C0?Dt(ua,Ln++):0,Qo++,yt===10&&(Qo=1,vh++),yt}function ks(){return Dt(ua,Ln)}function xc(){return Ln}function Eh(n,e){return Go(ua,n,e)}function Qf(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function aS(n){return vh=Qo=1,C0=gr(ua=n),Ln=0,[]}function lS(n){return ua="",n}function Sf(n){return A0(Eh(Ln-1,Yf(n===91?n+2:n===40?n+1:n)))}function uS(n){for(;(yt=ks())&&yt<33;)er();return Qf(n)>2||Qf(yt)>3?"":" "}function cS(n,e){for(;--e&&er()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return Eh(n,xc()+(e<6&&ks()==32&&er()==32))}function Yf(n){for(;er();)switch(yt){case n:return Ln;case 34:case 39:n!==34&&n!==39&&Yf(yt);break;case 40:n===41&&Yf(n);break;case 92:er();break}return Ln}function hS(n,e){for(;er()&&n+yt!==57;)if(n+yt===84&&ks()===47)break;return"/*"+Eh(e,Ln-1)+"*"+Mp(n===47?n:er())}function dS(n){for(;!Qf(ks());)er();return Eh(n,Ln)}function fS(n){return lS(Nc("",null,null,null,[""],n=aS(n),0,[0],n))}function Nc(n,e,t,i,o,l,c,d,p){for(var y=0,v=0,E=c,I=0,x=0,V=0,j=1,O=1,H=1,J=0,K="",ee=o,le=l,re=i,A=K;O;)switch(V=J,J=er()){case 40:if(V!=108&&Dt(A,E-1)==58){kc(A+=ke(Sf(J),"&","&\f"),"&\f",R0(y?d[y-1]:0))!=-1&&(H=-1);break}case 34:case 39:case 91:A+=Sf(J);break;case 9:case 10:case 13:case 32:A+=uS(V);break;case 92:A+=cS(xc()-1,7);continue;case 47:switch(ks()){case 42:case 47:dl(pS(hS(er(),xc()),e,t,p),p);break;default:A+="/"}break;case 123*j:d[y++]=gr(A)*H;case 125*j:case 59:case 0:switch(J){case 0:case 125:O=0;case 59+v:H==-1&&(A=ke(A,/\f/g,"")),x>0&&gr(A)-E&&dl(x>32?S_(A+";",i,t,E-1,p):S_(ke(A," ","")+";",i,t,E-2,p),p);break;case 59:A+=";";default:if(dl(re=I_(A,e,t,y,v,o,d,K,ee=[],le=[],E,l),l),J===123)if(v===0)Nc(A,e,re,re,ee,l,E,d,le);else switch(I===99&&Dt(A,3)===110?100:I){case 100:case 108:case 109:case 115:Nc(n,re,re,i&&dl(I_(n,re,re,0,0,o,d,K,o,ee=[],E,le),le),o,le,E,d,i?ee:le);break;default:Nc(A,re,re,re,[""],le,0,d,le)}}y=v=x=0,j=H=1,K=A="",E=c;break;case 58:E=1+gr(A),x=V;default:if(j<1){if(J==123)--j;else if(J==125&&j++==0&&oS()==125)continue}switch(A+=Mp(J),J*j){case 38:H=v>0?1:(A+="\f",-1);break;case 44:d[y++]=(gr(A)-1)*H,H=1;break;case 64:ks()===45&&(A+=Sf(er())),I=ks(),v=E=gr(K=A+=dS(xc())),J++;break;case 45:V===45&&gr(A)==2&&(j=0)}}return l}function I_(n,e,t,i,o,l,c,d,p,y,v,E){for(var I=o-1,x=o===0?l:[""],V=P0(x),j=0,O=0,H=0;j<i;++j)for(var J=0,K=Go(n,I+1,I=R0(O=c[j])),ee=n;J<V;++J)(ee=A0(O>0?x[J]+" "+K:ke(K,/&\f/g,x[J])))&&(p[H++]=ee);return wh(n,e,t,o===0?_h:d,p,y,v,E)}function pS(n,e,t,i){return wh(n,e,t,I0,Mp(sS()),Go(n,2,-2),0,i)}function S_(n,e,t,i,o){return wh(n,e,t,Vp,Go(n,0,i),Go(n,i+1,-1),i,o)}function k0(n,e,t){switch(rS(n,e)){case 5103:return $e+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+n+n;case 4789:return vl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+n+vl+n+Xe+n+n;case 5936:switch(Dt(n,e+11)){case 114:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return $e+n+Xe+ke(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return $e+n+Xe+n+n;case 6165:return $e+n+Xe+"flex-"+n+n;case 5187:return $e+n+ke(n,/(\w+).+(:[^]+)/,$e+"box-$1$2"+Xe+"flex-$1$2")+n;case 5443:return $e+n+Xe+"flex-item-"+ke(n,/flex-|-self/g,"")+(Wr(n,/flex-|baseline/)?"":Xe+"grid-row-"+ke(n,/flex-|-self/g,""))+n;case 4675:return $e+n+Xe+"flex-line-pack"+ke(n,/align-content|flex-|-self/g,"")+n;case 5548:return $e+n+Xe+ke(n,"shrink","negative")+n;case 5292:return $e+n+Xe+ke(n,"basis","preferred-size")+n;case 6060:return $e+"box-"+ke(n,"-grow","")+$e+n+Xe+ke(n,"grow","positive")+n;case 4554:return $e+ke(n,/([^-])(transform)/g,"$1"+$e+"$2")+n;case 6187:return ke(ke(ke(n,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),n,"")+n;case 5495:case 3959:return ke(n,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return ke(ke(n,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+Xe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+n+n;case 4200:if(!Wr(n,/flex-|baseline/))return Xe+"grid-column-align"+Go(n,e)+n;break;case 2592:case 3360:return Xe+ke(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,o){return e=o,Wr(i.props,/grid-\w+-end/)})?~kc(n+(t=t[e].value),"span",0)?n:Xe+ke(n,"-start","")+n+Xe+"grid-row-span:"+(~kc(t,"span",0)?Wr(t,/\d+/):+Wr(t,/\d+/)-+Wr(n,/\d+/))+";":Xe+ke(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Wr(i.props,/grid-\w+-start/)})?n:Xe+ke(ke(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ke(n,/(.+)-inline(.+)/,$e+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gr(n)-1-e>6)switch(Dt(n,e+1)){case 109:if(Dt(n,e+4)!==45)break;case 102:return ke(n,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+vl+(Dt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~kc(n,"stretch",0)?k0(ke(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return ke(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,o,l,c,d,p,y){return Xe+o+":"+l+y+(c?Xe+o+"-span:"+(d?p:+p-+l)+y:"")+n});case 4949:if(Dt(n,e+6)===121)return ke(n,":",":"+$e)+n;break;case 6444:switch(Dt(n,Dt(n,14)===45?18:11)){case 120:return ke(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(Dt(n,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+Xe+"$2box$3")+n;case 100:return ke(n,":",":"+Xe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(n,"scroll-","scroll-snap-")+n}return n}function Kc(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function mS(n,e,t,i){switch(n.type){case nS:if(n.children.length)break;case tS:case Vp:return n.return=n.return||n.value;case I0:return"";case S0:return n.return=n.value+"{"+Kc(n.children,i)+"}";case _h:if(!gr(n.value=n.props.join(",")))return""}return gr(t=Kc(n.children,i))?n.return=n.value+"{"+t+"}":""}function gS(n){var e=P0(n);return function(t,i,o,l){for(var c="",d=0;d<e;d++)c+=n[d](t,i,o,l)||"";return c}}function yS(n){return function(e){e.root||(e=e.return)&&n(e)}}function _S(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case Vp:n.return=k0(n.value,n.length,t);return;case S0:return Kc([xi(n,{value:ke(n.value,"@","@"+$e)})],i);case _h:if(n.length)return iS(t=n.props,function(o){switch(Wr(o,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Mo(xi(n,{props:[ke(o,/:(read-\w+)/,":"+vl+"$1")]})),Mo(xi(n,{props:[o]})),Gf(n,{props:T_(t,i)});break;case"::placeholder":Mo(xi(n,{props:[ke(o,/:(plac\w+)/,":"+$e+"input-$1")]})),Mo(xi(n,{props:[ke(o,/:(plac\w+)/,":"+vl+"$1")]})),Mo(xi(n,{props:[ke(o,/:(plac\w+)/,Xe+"input-$1")]})),Mo(xi(n,{props:[o]})),Gf(n,{props:T_(t,i)});break}return""})}}var vS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tn={},Yo=typeof process<"u"&&Tn!==void 0&&(Tn.REACT_APP_SC_ATTR||Tn.SC_ATTR)||"data-styled",x0="active",N0="data-styled-version",Th="6.1.17",Fp=`/*!sc*/
`,Gc=typeof window<"u"&&"HTMLElement"in window,wS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tn.REACT_APP_SC_DISABLE_SPEEDY!==""?Tn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tn!==void 0&&Tn.SC_DISABLE_SPEEDY!==void 0&&Tn.SC_DISABLE_SPEEDY!==""&&Tn.SC_DISABLE_SPEEDY!=="false"&&Tn.SC_DISABLE_SPEEDY),ES={},Ih=Object.freeze([]),Xo=Object.freeze({});function D0(n,e,t){return t===void 0&&(t=Xo),n.theme!==t.theme&&n.theme||e||t.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),TS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,IS=/(^-|-$)/g;function R_(n){return n.replace(TS,"-").replace(IS,"")}var SS=/(a)(d)/gi,vc=52,A_=function(n){return String.fromCharCode(n+(n>25?39:97))};function Xf(n){var e,t="";for(e=Math.abs(n);e>vc;e=e/vc|0)t=A_(e%vc)+t;return(A_(e%vc)+t).replace(SS,"$1-$2")}var Rf,O0=5381,zo=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},L0=function(n){return zo(O0,n)};function V0(n){return Xf(L0(n)>>>0)}function RS(n){return n.displayName||n.name||"Component"}function Af(n){return typeof n=="string"&&!0}var M0=typeof Symbol=="function"&&Symbol.for,F0=M0?Symbol.for("react.memo"):60115,AS=M0?Symbol.for("react.forward_ref"):60112,PS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},CS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},U0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},kS=((Rf={})[AS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rf[F0]=U0,Rf);function P_(n){return("type"in(e=n)&&e.type.$$typeof)===F0?U0:"$$typeof"in n?kS[n.$$typeof]:PS;var e}var xS=Object.defineProperty,NS=Object.getOwnPropertyNames,C_=Object.getOwnPropertySymbols,DS=Object.getOwnPropertyDescriptor,bS=Object.getPrototypeOf,k_=Object.prototype;function j0(n,e,t){if(typeof e!="string"){if(k_){var i=bS(e);i&&i!==k_&&j0(n,i,t)}var o=NS(e);C_&&(o=o.concat(C_(e)));for(var l=P_(n),c=P_(e),d=0;d<o.length;++d){var p=o[d];if(!(p in CS||t&&t[p]||c&&p in c||l&&p in l)){var y=DS(e,p);try{xS(n,p,y)}catch{}}}}return n}function Jo(n){return typeof n=="function"}function Up(n){return typeof n=="object"&&"styledComponentId"in n}function Rs(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Jf(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Dl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Zf(n,e,t){if(t===void 0&&(t=!1),!t&&!Dl(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=Zf(n[i],e[i]);else if(Dl(e))for(var i in e)n[i]=Zf(n[i],e[i]);return n}function jp(n,e){Object.defineProperty(n,"toString",{value:e})}function $l(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var OS=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;e>=l;)if((l<<=1)<0)throw $l(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=o;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(e+1),p=(c=0,t.length);c<p;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[e]++,d++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),o=i+t;this.groupSizes[e]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],o=this.indexOfGroup(e),l=o+i,c=o;c<l;c++)t+="".concat(this.tag.getRule(c)).concat(Fp);return t},n}(),Dc=new Map,Qc=new Map,bc=1,wc=function(n){if(Dc.has(n))return Dc.get(n);for(;Qc.has(bc);)bc++;var e=bc++;return Dc.set(n,e),Qc.set(e,n),e},LS=function(n,e){bc=e+1,Dc.set(n,e),Qc.set(e,n)},VS="style[".concat(Yo,"][").concat(N0,'="').concat(Th,'"]'),MS=new RegExp("^".concat(Yo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),FS=function(n,e,t){for(var i,o=t.split(","),l=0,c=o.length;l<c;l++)(i=o[l])&&n.registerName(e,i)},US=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Fp),o=[],l=0,c=i.length;l<c;l++){var d=i[l].trim();if(d){var p=d.match(MS);if(p){var y=0|parseInt(p[1],10),v=p[2];y!==0&&(LS(v,y),FS(n,v,p[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(d)}}},x_=function(n){for(var e=document.querySelectorAll(VS),t=0,i=e.length;t<i;t++){var o=e[t];o&&o.getAttribute(Yo)!==x0&&(US(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function jS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var B0=function(n){var e=document.head,t=n||e,i=document.createElement("style"),o=function(d){var p=Array.from(d.querySelectorAll("style[".concat(Yo,"]")));return p[p.length-1]}(t),l=o!==void 0?o.nextSibling:null;i.setAttribute(Yo,x0),i.setAttribute(N0,Th);var c=jS();return c&&i.setAttribute("nonce",c),t.insertBefore(i,l),i},BS=function(){function n(e){this.element=B0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,o=0,l=i.length;o<l;o++){var c=i[o];if(c.ownerNode===t)return c}throw $l(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),zS=function(){function n(e){this.element=B0(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),$S=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),N_=Gc,WS={isServer:!Gc,useCSSOMInjection:!wS},Yc=function(){function n(e,t,i){e===void 0&&(e=Xo),t===void 0&&(t={});var o=this;this.options=Gt(Gt({},WS),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Gc&&N_&&(N_=!1,x_(this)),jp(this,function(){return function(l){for(var c=l.getTag(),d=c.length,p="",y=function(E){var I=function(H){return Qc.get(H)}(E);if(I===void 0)return"continue";var x=l.names.get(I),V=c.getGroup(E);if(x===void 0||!x.size||V.length===0)return"continue";var j="".concat(Yo,".g").concat(E,'[id="').concat(I,'"]'),O="";x!==void 0&&x.forEach(function(H){H.length>0&&(O+="".concat(H,","))}),p+="".concat(V).concat(j,'{content:"').concat(O,'"}').concat(Fp)},v=0;v<d;v++)y(v);return p}(o)})}return n.registerId=function(e){return wc(e)},n.prototype.rehydrate=function(){!this.server&&Gc&&x_(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Gt(Gt({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,o=t.target;return t.isServer?new $S(o):i?new BS(o):new zS(o)}(this.options),new OS(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(wc(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(wc(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(wc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),qS=/&/g,HS=/^\s*\/\/.*$/gm;function z0(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=z0(t.children,e)),t})}function KS(n){var e,t,i,o=Xo,l=o.options,c=l===void 0?Xo:l,d=o.plugins,p=d===void 0?Ih:d,y=function(I,x,V){return V.startsWith(t)&&V.endsWith(t)&&V.replaceAll(t,"").length>0?".".concat(e):I},v=p.slice();v.push(function(I){I.type===_h&&I.value.includes("&")&&(I.props[0]=I.props[0].replace(qS,t).replace(i,y))}),c.prefix&&v.push(_S),v.push(mS);var E=function(I,x,V,j){x===void 0&&(x=""),V===void 0&&(V=""),j===void 0&&(j="&"),e=j,t=x,i=new RegExp("\\".concat(t,"\\b"),"g");var O=I.replace(HS,""),H=fS(V||x?"".concat(V," ").concat(x," { ").concat(O," }"):O);c.namespace&&(H=z0(H,c.namespace));var J=[];return Kc(H,gS(v.concat(yS(function(K){return J.push(K)})))),J};return E.hash=p.length?p.reduce(function(I,x){return x.name||$l(15),zo(I,x.name)},O0).toString():"",E}var GS=new Yc,ep=KS(),$0=Jn.createContext({shouldForwardProp:void 0,styleSheet:GS,stylis:ep});$0.Consumer;Jn.createContext(void 0);function tp(){return Y.useContext($0)}var QS=function(){function n(e,t){var i=this;this.inject=function(o,l){l===void 0&&(l=ep);var c=i.name+l.hash;o.hasNameForId(i.id,c)||o.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jp(this,function(){throw $l(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=ep),this.name+e.hash},n}(),YS=function(n){return n>="A"&&n<="Z"};function D_(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;YS(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var W0=function(n){return n==null||n===!1||n===""},q0=function(n){var e,t,i=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!W0(l)&&(Array.isArray(l)&&l.isCss||Jo(l)?i.push("".concat(D_(o),":"),l,";"):Dl(l)?i.push.apply(i,Nl(Nl(["".concat(o," {")],q0(l),!1),["}"],!1)):i.push("".concat(D_(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in vS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Fi(n,e,t,i){if(W0(n))return[];if(Up(n))return[".".concat(n.styledComponentId)];if(Jo(n)){if(!Jo(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return Fi(o,e,t,i)}var l;return n instanceof QS?t?(n.inject(t,i),[n.getName(i)]):[n]:Dl(n)?q0(n):Array.isArray(n)?Array.prototype.concat.apply(Ih,n.map(function(c){return Fi(c,e,t,i)})):[n.toString()]}function H0(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Jo(t)&&!Up(t))return!1}return!0}var XS=L0(Th),JS=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&H0(e),this.componentId=t,this.baseHash=zo(XS,t),this.baseStyle=i,Yc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=Rs(o,this.staticRulesId);else{var l=Jf(Fi(this.rules,e,t,i)),c=Xf(zo(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=i(l,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}o=Rs(o,c),this.staticRulesId=c}else{for(var p=zo(this.baseHash,i.hash),y="",v=0;v<this.rules.length;v++){var E=this.rules[v];if(typeof E=="string")y+=E;else if(E){var I=Jf(Fi(E,e,t,i));p=zo(p,I+v),y+=I}}if(y){var x=Xf(p>>>0);t.hasNameForId(this.componentId,x)||t.insertRules(this.componentId,x,i(y,".".concat(x),void 0,this.componentId)),o=Rs(o,x)}}return o},n}(),Bp=Jn.createContext(void 0);Bp.Consumer;var Pf={};function ZS(n,e,t){var i=Up(n),o=n,l=!Af(n),c=e.attrs,d=c===void 0?Ih:c,p=e.componentId,y=p===void 0?function(ee,le){var re=typeof ee!="string"?"sc":R_(ee);Pf[re]=(Pf[re]||0)+1;var A="".concat(re,"-").concat(V0(Th+re+Pf[re]));return le?"".concat(le,"-").concat(A):A}(e.displayName,e.parentComponentId):p,v=e.displayName,E=v===void 0?function(ee){return Af(ee)?"styled.".concat(ee):"Styled(".concat(RS(ee),")")}(n):v,I=e.displayName&&e.componentId?"".concat(R_(e.displayName),"-").concat(e.componentId):e.componentId||y,x=i&&o.attrs?o.attrs.concat(d).filter(Boolean):d,V=e.shouldForwardProp;if(i&&o.shouldForwardProp){var j=o.shouldForwardProp;if(e.shouldForwardProp){var O=e.shouldForwardProp;V=function(ee,le){return j(ee,le)&&O(ee,le)}}else V=j}var H=new JS(t,I,i?o.componentStyle:void 0);function J(ee,le){return function(re,A,S){var P=re.attrs,N=re.componentStyle,b=re.defaultProps,M=re.foldedComponentIds,C=re.styledComponentId,tt=re.target,Rt=Jn.useContext(Bp),At=tp(),je=re.shouldForwardProp||At.shouldForwardProp,se=D0(A,Rt,b)||Xo,de=function(Pe,Ce,De){for(var Ne,Ve=Gt(Gt({},Ce),{className:void 0,theme:De}),ot=0;ot<Pe.length;ot+=1){var nn=Jo(Ne=Pe[ot])?Ne(Ve):Ne;for(var Yt in nn)Ve[Yt]=Yt==="className"?Rs(Ve[Yt],nn[Yt]):Yt==="style"?Gt(Gt({},Ve[Yt]),nn[Yt]):nn[Yt]}return Ce.className&&(Ve.className=Rs(Ve.className,Ce.className)),Ve}(P,A,se),oe=de.as||tt,L={};for(var q in de)de[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&de.theme===se||(q==="forwardedAs"?L.as=de.forwardedAs:je&&!je(q,oe)||(L[q]=de[q]));var ge=function(Pe,Ce){var De=tp(),Ne=Pe.generateAndInjectStyles(Ce,De.styleSheet,De.stylis);return Ne}(N,de),Ae=Rs(M,C);return ge&&(Ae+=" "+ge),de.className&&(Ae+=" "+de.className),L[Af(oe)&&!b0.has(oe)?"class":"className"]=Ae,S&&(L.ref=S),Y.createElement(oe,L)}(K,ee,le)}J.displayName=E;var K=Jn.forwardRef(J);return K.attrs=x,K.componentStyle=H,K.displayName=E,K.shouldForwardProp=V,K.foldedComponentIds=i?Rs(o.foldedComponentIds,o.styledComponentId):"",K.styledComponentId=I,K.target=i?o.target:n,Object.defineProperty(K,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=i?function(le){for(var re=[],A=1;A<arguments.length;A++)re[A-1]=arguments[A];for(var S=0,P=re;S<P.length;S++)Zf(le,P[S],!0);return le}({},o.defaultProps,ee):ee}}),jp(K,function(){return".".concat(K.styledComponentId)}),l&&j0(K,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),K}function b_(n,e){for(var t=[n[0]],i=0,o=e.length;i<o;i+=1)t.push(e[i],n[i+1]);return t}var O_=function(n){return Object.assign(n,{isCss:!0})};function zp(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Jo(n)||Dl(n))return O_(Fi(b_(Ih,Nl([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?Fi(i):O_(Fi(b_(i,e)))}function np(n,e,t){if(t===void 0&&(t=Xo),!e)throw $l(1,e);var i=function(o){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return n(e,t,zp.apply(void 0,Nl([o],l,!1)))};return i.attrs=function(o){return np(n,e,Gt(Gt({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},i.withConfig=function(o){return np(n,e,Gt(Gt({},t),o))},i}var K0=function(n){return np(ZS,n)},Ie=K0;b0.forEach(function(n){Ie[n]=K0(n)});var eR=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=H0(e),Yc.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,i,o){var l=o(Jf(Fi(this.rules,t,i,o)),""),c=this.componentId+e;i.insertRules(c,c,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,i,o){e>2&&Yc.registerId(this.componentId+e),this.removeStyles(e,i),this.createStyles(e,t,i,o)},n}();function G0(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=zp.apply(void 0,Nl([n],e,!1)),o="sc-global-".concat(V0(JSON.stringify(i))),l=new eR(i,o),c=function(p){var y=tp(),v=Jn.useContext(Bp),E=Jn.useRef(y.styleSheet.allocateGSInstance(o)).current;return y.styleSheet.server&&d(E,p,y.styleSheet,v,y.stylis),Jn.useLayoutEffect(function(){if(!y.styleSheet.server)return d(E,p,y.styleSheet,v,y.stylis),function(){return l.removeStyles(E,y.styleSheet)}},[E,p,y.styleSheet,v,y.stylis]),null};function d(p,y,v,E,I){if(l.isStatic)l.renderStyles(p,ES,v,I);else{var x=Gt(Gt({},y),{theme:D0(y,E,c.defaultProps)});l.renderStyles(p,x,v,I)}}return Jn.memo(c)}var L_={};/**
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
 */const Q0=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},tR=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Y0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,E=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[v],t[E],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Q0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):tR(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const E=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||E==null)throw new nR;const I=l<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),E!==64){const V=y<<6&192|E;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rR=function(n){const e=Q0(n);return Y0.encodeByteArray(e,!0)},Xc=function(n){return rR(n).replace(/\./g,"")},X0=function(n){try{return Y0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sR=()=>iR().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof L_>"u")return;const n=L_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},aR=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&X0(n[1]);return e&&JSON.parse(e)},Sh=()=>{try{return sR()||oR()||aR()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},J0=n=>{var e,t;return(t=(e=Sh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Z0=n=>{const e=J0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ew=()=>{var n;return(n=Sh())===null||n===void 0?void 0:n.config},tw=n=>{var e;return(e=Sh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class lR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function nw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xc(JSON.stringify(t)),Xc(JSON.stringify(c)),""].join(".")}/**
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
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function cR(){var n;const e=(n=Sh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dR(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pR(){const n=Qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mR(){return!cR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gR(){try{return typeof indexedDB=="object"}catch{return!1}}function yR(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const _R="FirebaseError";class pn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_R,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wl.prototype.create)}}class Wl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?vR(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new pn(o,d,i)}}function vR(n,e){return n.replace(wR,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const wR=/\{\$([^}]+)}/g;function ER(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jc(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(V_(l)&&V_(c)){if(!Jc(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function V_(n){return n!==null&&typeof n=="object"}/**
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
 */function ql(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function fl(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function pl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function TR(n,e){const t=new IR(n,e);return t.subscribe.bind(t)}class IR{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Cf),o.error===void 0&&(o.error=Cf),o.complete===void 0&&(o.complete=Cf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cf(){}/**
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
 */function it(n){return n&&n._delegate?n._delegate:n}class $i{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ss="[DEFAULT]";/**
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
 */class RR{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new lR;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PR(e))try{this.getOrInitializeService({instanceIdentifier:Ss})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ss){return this.instances.has(e)}getOptions(e=Ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AR(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ss){return this.component?this.component.multipleInstances?e:Ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AR(n){return n===Ss?void 0:n}function PR(n){return n.instantiationMode==="EAGER"}/**
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
 */class CR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new RR(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const kR={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},xR=Le.INFO,NR={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},DR=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=NR[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $p{constructor(e){this.name=e,this._logLevel=xR,this._logHandler=DR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const bR=(n,e)=>e.some(t=>n instanceof t);let M_,F_;function OR(){return M_||(M_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LR(){return F_||(F_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rw=new WeakMap,rp=new WeakMap,iw=new WeakMap,kf=new WeakMap,Wp=new WeakMap;function VR(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Ui(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&rw.set(t,n)}).catch(()=>{}),Wp.set(e,n),e}function MR(n){if(rp.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});rp.set(n,e)}let ip={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iw.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ui(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function FR(n){ip=n(ip)}function UR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(xf(this),e,...t);return iw.set(i,e.sort?e.sort():[e]),Ui(i)}:LR().includes(n)?function(...e){return n.apply(xf(this),e),Ui(rw.get(this))}:function(...e){return Ui(n.apply(xf(this),e))}}function jR(n){return typeof n=="function"?UR(n):(n instanceof IDBTransaction&&MR(n),bR(n,OR())?new Proxy(n,ip):n)}function Ui(n){if(n instanceof IDBRequest)return VR(n);if(kf.has(n))return kf.get(n);const e=jR(n);return e!==n&&(kf.set(n,e),Wp.set(e,n)),e}const xf=n=>Wp.get(n);function BR(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Ui(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ui(c.result),p.oldVersion,p.newVersion,Ui(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const zR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],Nf=new Map;function U_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nf.get(e))return Nf.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=$R.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||zR.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Nf.set(e,l),l}FR(n=>({...n,get:(e,t,i)=>U_(e,t)||n.get(e,t,i),has:(e,t)=>!!U_(e,t)||n.has(e,t)}));/**
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
 */class WR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(qR(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function qR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sp="@firebase/app",j_="0.10.13";/**
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
 */const Yr=new $p("@firebase/app"),HR="@firebase/app-compat",KR="@firebase/analytics-compat",GR="@firebase/analytics",QR="@firebase/app-check-compat",YR="@firebase/app-check",XR="@firebase/auth",JR="@firebase/auth-compat",ZR="@firebase/database",eA="@firebase/data-connect",tA="@firebase/database-compat",nA="@firebase/functions",rA="@firebase/functions-compat",iA="@firebase/installations",sA="@firebase/installations-compat",oA="@firebase/messaging",aA="@firebase/messaging-compat",lA="@firebase/performance",uA="@firebase/performance-compat",cA="@firebase/remote-config",hA="@firebase/remote-config-compat",dA="@firebase/storage",fA="@firebase/storage-compat",pA="@firebase/firestore",mA="@firebase/vertexai-preview",gA="@firebase/firestore-compat",yA="firebase",_A="10.14.1";/**
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
 */const op="[DEFAULT]",vA={[sp]:"fire-core",[HR]:"fire-core-compat",[GR]:"fire-analytics",[KR]:"fire-analytics-compat",[YR]:"fire-app-check",[QR]:"fire-app-check-compat",[XR]:"fire-auth",[JR]:"fire-auth-compat",[ZR]:"fire-rtdb",[eA]:"fire-data-connect",[tA]:"fire-rtdb-compat",[nA]:"fire-fn",[rA]:"fire-fn-compat",[iA]:"fire-iid",[sA]:"fire-iid-compat",[oA]:"fire-fcm",[aA]:"fire-fcm-compat",[lA]:"fire-perf",[uA]:"fire-perf-compat",[cA]:"fire-rc",[hA]:"fire-rc-compat",[dA]:"fire-gcs",[fA]:"fire-gcs-compat",[pA]:"fire-fst",[gA]:"fire-fst-compat",[mA]:"fire-vertex","fire-js":"fire-js",[yA]:"fire-js-all"};/**
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
 */const Zc=new Map,wA=new Map,ap=new Map;function B_(n,e){try{n.container.addComponent(e)}catch(t){Yr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bs(n){const e=n.name;if(ap.has(e))return Yr.debug(`There were multiple attempts to register component ${e}.`),!1;ap.set(e,n);for(const t of Zc.values())B_(t,n);for(const t of wA.values())B_(t,n);return!0}function Rh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Zn(n){return n.settings!==void 0}/**
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
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ji=new Wl("app","Firebase",EA);/**
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
 */class TA{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ji.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=_A;function sw(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:op,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw ji.create("bad-app-name",{appName:String(o)});if(t||(t=ew()),!t)throw ji.create("no-options");const l=Zc.get(o);if(l){if(Jc(t,l.options)&&Jc(i,l.config))return l;throw ji.create("duplicate-app",{appName:o})}const c=new CR(o);for(const p of ap.values())c.addComponent(p);const d=new TA(t,i,c);return Zc.set(o,d),d}function qp(n=op){const e=Zc.get(n);if(!e&&n===op&&ew())return sw();if(!e)throw ji.create("no-app",{appName:n});return e}function wr(n,e,t){var i;let o=(i=vA[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yr.warn(d.join(" "));return}bs(new $i(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const IA="firebase-heartbeat-database",SA=1,bl="firebase-heartbeat-store";let Df=null;function ow(){return Df||(Df=BR(IA,SA,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bl)}catch(t){console.warn(t)}}}}).catch(n=>{throw ji.create("idb-open",{originalErrorMessage:n.message})})),Df}async function RA(n){try{const t=(await ow()).transaction(bl),i=await t.objectStore(bl).get(aw(n));return await t.done,i}catch(e){if(e instanceof pn)Yr.warn(e.message);else{const t=ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yr.warn(t.message)}}}async function z_(n,e){try{const i=(await ow()).transaction(bl,"readwrite");await i.objectStore(bl).put(e,aw(n)),await i.done}catch(t){if(t instanceof pn)Yr.warn(t.message);else{const i=ji.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Yr.warn(i.message)}}}function aw(n){return`${n.name}!${n.options.appId}`}/**
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
 */const AA=1024,PA=30*24*60*60*1e3;class CA{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xA(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=$_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=PA}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Yr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$_(),{heartbeatsToSend:i,unsentEntries:o}=kA(this._heartbeatsCache.heartbeats),l=Xc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Yr.warn(t),""}}}function $_(){return new Date().toISOString().substring(0,10)}function kA(n,e=AA){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),W_(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),W_(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class xA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gR()?yR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await RA(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return z_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function W_(n){return Xc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function NA(n){bs(new $i("platform-logger",e=>new WR(e),"PRIVATE")),bs(new $i("heartbeat",e=>new CA(e),"PRIVATE")),wr(sp,j_,n),wr(sp,j_,"esm2017"),wr("fire-js","")}NA("");var DA="firebase",bA="10.14.1";/**
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
 */wr(DA,bA,"app");function Hp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function lw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=lw,uw=new Wl("auth","Firebase",lw());/**
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
 */const eh=new $p("@firebase/auth");function LA(n,...e){eh.logLevel<=Le.WARN&&eh.warn(`Auth (${zs}): ${n}`,...e)}function Oc(n,...e){eh.logLevel<=Le.ERROR&&eh.error(`Auth (${zs}): ${n}`,...e)}/**
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
 */function Vn(n,...e){throw Gp(n,...e)}function tr(n,...e){return Gp(n,...e)}function Kp(n,e,t){const i=Object.assign(Object.assign({},OA()),{[e]:t});return new Wl("auth","Firebase",i).create(e,{appName:n.name})}function Qr(n){return Kp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function VA(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Vn(n,"argument-error"),Kp(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gp(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return uw.create(n,...e)}function we(n,e,...t){if(!n)throw Gp(e,...t)}function Hr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oc(e),new Error(e)}function Xr(n,e){n||Hr(e)}/**
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
 */function lp(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function MA(){return q_()==="http:"||q_()==="https:"}function q_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function FA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MA()||dR()||"connection"in navigator)?navigator.onLine:!0}function UA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xr(t>e,"Short delay should be less than long delay!"),this.isMobile=uR()||fR()}get(){return FA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qp(n,e){Xr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cw{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BA=new Hl(3e4,6e4);function ti(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ar(n,e,t,i,o={}){return hw(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=ql(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return hR()||(y.referrerPolicy="no-referrer"),cw.fetch()(dw(n,n.config.apiHost,t,d),y)})}async function hw(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},jA),e);try{const o=new $A(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Ec(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ec(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ec(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ec(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Kp(n,v,y);Vn(n,v)}}catch(o){if(o instanceof pn)throw o;Vn(n,"network-request-failed",{message:String(o)})}}async function Kl(n,e,t,i,o={}){const l=await Ar(n,e,t,i,o);return"mfaPendingCredential"in l&&Vn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function dw(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Qp(n.config,o):`${n.config.apiScheme}://${o}`}function zA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $A{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tr(this.auth,"network-request-failed")),BA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ec(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=tr(n,e,i);return o.customData._tokenResponse=t,o}function H_(n){return n!==void 0&&n.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qA(n,e){return Ar(n,"GET","/v2/recaptchaConfig",ti(n,e))}/**
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
 */async function HA(n,e){return Ar(n,"POST","/v1/accounts:delete",e)}async function fw(n,e){return Ar(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function wl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KA(n,e=!1){const t=it(n),i=await t.getIdToken(e),o=Yp(i);we(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:wl(bf(o.auth_time)),issuedAtTime:wl(bf(o.iat)),expirationTime:wl(bf(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function bf(n){return Number(n)*1e3}function Yp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Oc("JWT malformed, contained fewer than 3 sections"),null;try{const o=X0(t);return o?JSON.parse(o):(Oc("Failed to decode base64 JWT payload"),null)}catch(o){return Oc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function K_(n){const e=Yp(n);return we(e,"internal-error"),we(typeof e.exp<"u","internal-error"),we(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof pn&&GA(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function GA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class QA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class up{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wl(this.lastLoginAt),this.creationTime=wl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function th(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Zo(n,fw(t,{idToken:i}));we(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?pw(l.providerUserInfo):[],d=XA(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new up(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,E)}async function YA(n){const e=it(n);await th(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function pw(n){return n.map(e=>{var{providerId:t}=e,i=Hp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function JA(n,e){const t=await hw(n,{},async()=>{const i=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=dw(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",cw.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ZA(n,e){return Ar(n,"POST","/v2/accounts:revokeToken",ti(n,e))}/**
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
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){we(e.idToken,"internal-error"),we(typeof e.idToken<"u","internal-error"),we(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){we(e.length!==0,"internal-error");const t=K_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(we(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await JA(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new $o;return i&&(we(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(we(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(we(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return Hr("not implemented")}}/**
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
 */function ki(n,e){we(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Hp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new up(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return we(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KA(this,e)}reload(){return YA(this)}_assign(e){this!==e&&(we(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){we(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await th(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Qr(this.auth));const e=await this.getIdToken();return await Zo(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,O=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,H=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:K,emailVerified:ee,isAnonymous:le,providerData:re,stsTokenManager:A}=t;we(K&&A,e,"internal-error");const S=$o.fromJSON(this.name,A);we(typeof K=="string",e,"internal-error"),ki(E,e.name),ki(I,e.name),we(typeof ee=="boolean",e,"internal-error"),we(typeof le=="boolean",e,"internal-error"),ki(x,e.name),ki(V,e.name),ki(j,e.name),ki(O,e.name),ki(H,e.name),ki(J,e.name);const P=new Kr({uid:K,auth:e,email:I,emailVerified:ee,displayName:E,isAnonymous:le,photoURL:V,phoneNumber:x,tenantId:j,stsTokenManager:S,createdAt:H,lastLoginAt:J});return re&&Array.isArray(re)&&(P.providerData=re.map(N=>Object.assign({},N))),O&&(P._redirectEventId=O),P}static async _fromIdTokenResponse(e,t,i=!1){const o=new $o;o.updateFromServerResponse(t);const l=new Kr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await th(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];we(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?pw(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new $o;d.updateFromIdToken(i);const p=new Kr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new up(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const G_=new Map;function Gr(n){Xr(n instanceof Function,"Expected a class definition");let e=G_.get(n);return e?(Xr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,G_.set(n,e),e)}/**
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
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mw.type="NONE";const Q_=mw;/**
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
 */function Lc(n,e,t){return`firebase:${n}:${e}:${t}`}class Wo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Lc(this.userKey,o.apiKey,l),this.fullPersistenceKey=Lc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Wo(Gr(Q_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Gr(Q_);const c=Lc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const E=Kr._fromJSON(e,v);y!==l&&(d=E),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Wo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Wo(l,e,i))}}/**
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
 */function Y_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Tw(e))return"Webos";if(yw(e))return"Safari";if((e.includes("chrome/")||_w(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function gw(n=Qt()){return/firefox\//i.test(n)}function yw(n=Qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _w(n=Qt()){return/crios\//i.test(n)}function vw(n=Qt()){return/iemobile/i.test(n)}function ww(n=Qt()){return/android/i.test(n)}function Ew(n=Qt()){return/blackberry/i.test(n)}function Tw(n=Qt()){return/webos/i.test(n)}function Xp(n=Qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eP(n=Qt()){var e;return Xp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tP(){return pR()&&document.documentMode===10}function Iw(n=Qt()){return Xp(n)||ww(n)||Tw(n)||Ew(n)||/windows phone/i.test(n)||vw(n)}/**
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
 */function Sw(n,e=[]){let t;switch(n){case"Browser":t=Y_(Qt());break;case"Worker":t=`${Y_(Qt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zs}/${i}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function rP(n,e={}){return Ar(n,"GET","/v2/passwordPolicy",ti(n,e))}/**
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
 */const iP=6;class sP{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:iP,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class oP{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X_(this),this.idTokenSubscription=new X_(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Wo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await fw(this,{idToken:e}),i=await Kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return we(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await th(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Qr(this));const t=e?it(e):null;return t&&we(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&we(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rP(this),t=new sP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ZA(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gr(e)||this._popupRedirectResolver;we(t,this,"argument-error"),this.redirectPersistenceManager=await Wo.create(this,[Gr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(we(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return we(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&LA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ni(n){return it(n)}class X_{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(t=>this.observer=t)}get next(){return we(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ah={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aP(n){Ah=n}function Rw(n){return Ah.loadJS(n)}function lP(){return Ah.recaptchaEnterpriseScript}function uP(){return Ah.gapiScript}function cP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const hP="recaptcha-enterprise",dP="NO_RECAPTCHA";class fP{constructor(e){this.type=hP,this.auth=ni(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{qA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new WA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;H_(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(dP)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&H_(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=lP();p.length!==0&&(p+=d),Rw(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function J_(n,e,t,i=!1){const o=new fP(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function nh(n,e,t,i){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await J_(n,e,t,t==="getOobCode");return i(n,l)}else return i(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await J_(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(l)})}/**
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
 */function pP(n,e){const t=Rh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Jc(l,e??{}))return o;Vn(o,"already-initialized")}return t.initialize({options:e})}function mP(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Gr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gP(n,e,t){const i=ni(n);we(i._canInitEmulator,i,"emulator-config-failed"),we(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Aw(e),{host:c,port:d}=yP(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),_P()}function Aw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yP(n){const e=Aw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:Z_(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Z_(c)}}}function Z_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _P(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Hr("not implemented")}_getIdTokenResponse(e){return Hr("not implemented")}_linkToIdToken(e,t){return Hr("not implemented")}_getReauthenticationResolver(e){return Hr("not implemented")}}async function vP(n,e){return Ar(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function wP(n,e){return Kl(n,"POST","/v1/accounts:signInWithPassword",ti(n,e))}async function EP(n,e){return Ar(n,"POST","/v1/accounts:sendOobCode",ti(n,e))}async function TP(n,e){return EP(n,e)}/**
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
 */async function IP(n,e){return Kl(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}async function SP(n,e){return Kl(n,"POST","/v1/accounts:signInWithEmailLink",ti(n,e))}/**
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
 */class Ol extends Jp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ol(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ol(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nh(e,t,"signInWithPassword",wP);case"emailLink":return IP(e,{email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nh(e,i,"signUpPassword",vP);case"emailLink":return SP(e,{idToken:t,email:this._email,oobCode:this._password});default:Vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function qo(n,e){return Kl(n,"POST","/v1/accounts:signInWithIdp",ti(n,e))}/**
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
 */const RP="http://localhost";class Os extends Jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Hp(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Os(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return qo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,qo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qo(e,t)}buildRequest(){const e={requestUri:RP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ql(t)}return e}}/**
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
 */function AP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(n){const e=fl(pl(n)).link,t=e?fl(pl(e)).deep_link_id:null,i=fl(pl(n)).deep_link_id;return(i?fl(pl(i)).link:null)||i||t||e||n}class Zp{constructor(e){var t,i,o,l,c,d;const p=fl(pl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,E=AP((o=p.mode)!==null&&o!==void 0?o:null);we(y&&v&&E,"argument-error"),this.apiKey=y,this.operation=E,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=PP(e);try{return new Zp(t)}catch{return null}}}/**
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
 */class ca{constructor(){this.providerId=ca.PROVIDER_ID}static credential(e,t){return Ol._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Zp.parseLink(t);return we(i,"argument-error"),Ol._fromEmailAndCode(e,i.code,i.tenantId)}}ca.PROVIDER_ID="password";ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class em{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gl extends em{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ni extends Gl{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
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
 */class Di extends Gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Os._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Di.credentialFromTaggedObject(e)}static credentialFromError(e){return Di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Di.credential(t,i)}catch{return null}}}Di.GOOGLE_SIGN_IN_METHOD="google.com";Di.PROVIDER_ID="google.com";/**
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
 */class qr extends Gl{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class bi extends Gl{constructor(){super("twitter.com")}static credential(e,t){return Os._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return bi.credentialFromTaggedObject(e)}static credentialFromError(e){return bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return bi.credential(t,i)}catch{return null}}}bi.TWITTER_SIGN_IN_METHOD="twitter.com";bi.PROVIDER_ID="twitter.com";/**
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
 */async function CP(n,e){return Kl(n,"POST","/v1/accounts:signUp",ti(n,e))}/**
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
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Kr._fromIdTokenResponse(e,i,o),c=ev(i);return new Ls({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=ev(i);return new Ls({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function ev(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class rh extends pn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new rh(e,t,i,o)}}function Pw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(n,l,e,i):l})}async function kP(n,e,t=!1){const i=await Zo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ls._forOperation(n,"link",i)}/**
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
 */async function xP(n,e,t=!1){const{auth:i}=n;if(Zn(i.app))return Promise.reject(Qr(i));const o="reauthenticate";try{const l=await Zo(n,Pw(i,o,e,n),t);we(l.idToken,i,"internal-error");const c=Yp(l.idToken);we(c,i,"internal-error");const{sub:d}=c;return we(n.uid===d,i,"user-mismatch"),Ls._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Vn(i,"user-mismatch"),l}}/**
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
 */async function Cw(n,e,t=!1){if(Zn(n.app))return Promise.reject(Qr(n));const i="signIn",o=await Pw(n,i,e),l=await Ls._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function NP(n,e){return Cw(ni(n),e)}/**
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
 */async function kw(n){const e=ni(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xw(n,e,t){const i=ni(n);await nh(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",TP)}async function DP(n,e,t){if(Zn(n.app))return Promise.reject(Qr(n));const i=ni(n),c=await nh(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CP).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&kw(n),p}),d=await Ls._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function bP(n,e,t){return Zn(n.app)?Promise.reject(Qr(n)):NP(it(n),ca.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&kw(n),i})}/**
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
 */async function OP(n,e){return Ar(n,"POST","/v1/accounts:update",e)}/**
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
 */async function cp(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=it(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Zo(i,OP(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function LP(n,e,t,i){return it(n).onIdTokenChanged(e,t,i)}function VP(n,e,t){return it(n).beforeAuthStateChanged(e,t)}const ih="__sak";/**
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
 */class Nw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ih,"1"),this.storage.removeItem(ih),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const MP=1e3,FP=10;class Dw extends Nw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);tP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,FP):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dw.type="LOCAL";const UP=Dw;/**
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
 */class bw extends Nw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bw.type="SESSION";const Ow=bw;/**
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
 */function jP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Ph(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await jP(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ph.receivers=[];/**
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
 */function tm(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class BP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=tm("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(E){const I=E;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Er(){return window}function zP(n){Er().location.href=n}/**
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
 */function Lw(){return typeof Er().WorkerGlobalScope<"u"&&typeof Er().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qP(){return Lw()?self:null}/**
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
 */const Vw="firebaseLocalStorageDb",HP=1,sh="firebaseLocalStorage",Mw="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ch(n,e){return n.transaction([sh],e?"readwrite":"readonly").objectStore(sh)}function KP(){const n=indexedDB.deleteDatabase(Vw);return new Ql(n).toPromise()}function hp(){const n=indexedDB.open(Vw,HP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(sh,{keyPath:Mw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(sh)?e(i):(i.close(),await KP(),e(await hp()))})})}async function tv(n,e,t){const i=Ch(n,!0).put({[Mw]:e,value:t});return new Ql(i).toPromise()}async function GP(n,e){const t=Ch(n,!1).get(e),i=await new Ql(t).toPromise();return i===void 0?null:i.value}function nv(n,e){const t=Ch(n,!0).delete(e);return new Ql(t).toPromise()}const QP=800,YP=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hp(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>YP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ph._getInstance(qP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new BP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hp();return await tv(e,ih,"1"),await nv(e,ih),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>tv(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>GP(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Ch(o,!1).getAll();return new Ql(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const XP=Fw;new Hl(3e4,6e4);/**
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
 */function Uw(n,e){return e?Gr(e):(we(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class nm extends Jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function JP(n){return Cw(n.auth,new nm(n),n.bypassAuthState)}function ZP(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),xP(t,new nm(n),n.bypassAuthState)}async function eC(n){const{auth:e,user:t}=n;return we(t,e,"internal-error"),kP(t,new nm(n),n.bypassAuthState)}/**
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
 */class jw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JP;case"linkViaPopup":case"linkViaRedirect":return eC;case"reauthViaPopup":case"reauthViaRedirect":return ZP;default:Vn(this.auth,"internal-error")}}resolve(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tC=new Hl(2e3,1e4);async function nC(n,e,t){if(Zn(n.app))return Promise.reject(tr(n,"operation-not-supported-in-this-environment"));const i=ni(n);VA(n,e,em);const o=Uw(i,t);return new As(i,"signInViaPopup",e,o).executeNotNull()}class As extends jw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return we(e,this.auth,"internal-error"),e}async onExecution(){Xr(this.filter.length===1,"Popup operations only handle one event");const e=tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tC.get())};e()}}As.currentPopupAction=null;/**
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
 */const rC="pendingRedirect",Vc=new Map;class iC extends jw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Vc.get(this.auth._key());if(!e){try{const i=await sC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Vc.set(this.auth._key(),e)}return this.bypassAuthState||Vc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sC(n,e){const t=lC(e),i=aC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function oC(n,e){Vc.set(n._key(),e)}function aC(n){return Gr(n._redirectPersistence)}function lC(n){return Lc(rC,n.config.apiKey,n.name)}async function uC(n,e,t=!1){if(Zn(n.app))return Promise.reject(Qr(n));const i=ni(n),o=Uw(i,e),c=await new iC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const cC=10*60*1e3;class hC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Bw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cC&&this.cachedEventUids.clear(),this.cachedEventUids.has(rv(e))}saveEventToCache(e){this.cachedEventUids.add(rv(e)),this.lastProcessedEventTime=Date.now()}}function rv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(n);default:return!1}}/**
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
 */async function fC(n,e={}){return Ar(n,"GET","/v1/projects",e)}/**
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
 */const pC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function gC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await fC(n);for(const t of e)try{if(yC(t))return}catch{}Vn(n,"unauthorized-domain")}function yC(n){const e=lp(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!mC.test(t))return!1;if(pC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const _C=new Hl(3e4,6e4);function iv(){const n=Er().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function vC(n){return new Promise((e,t)=>{var i,o,l;function c(){iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{iv(),t(tr(n,"network-request-failed"))},timeout:_C.get()})}if(!((o=(i=Er().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=Er().gapi)===null||l===void 0)&&l.load)c();else{const d=cP("iframefcb");return Er()[d]=()=>{gapi.load?c():t(tr(n,"network-request-failed"))},Rw(`${uP()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Mc=null,e})}let Mc=null;function wC(n){return Mc=Mc||vC(n),Mc}/**
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
 */const EC=new Hl(5e3,15e3),TC="__/auth/iframe",IC="emulator/auth/iframe",SC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AC(n){const e=n.config;we(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qp(e,IC):`https://${n.config.authDomain}/${TC}`,i={apiKey:e.apiKey,appName:n.name,v:zs},o=RC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ql(i).slice(1)}`}async function PC(n){const e=await wC(n),t=Er().gapi;return we(t,n,"internal-error"),e.open({where:document.body,url:AC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=tr(n,"network-request-failed"),d=Er().setTimeout(()=>{l(c)},EC.get());function p(){Er().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const CC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kC=500,xC=600,NC="_blank",DC="http://localhost";class sv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bC(n,e,t,i=kC,o=xC){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},CC),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Qt().toLowerCase();t&&(d=_w(y)?NC:t),gw(y)&&(e=e||DC,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[x,V])=>`${I}${x}=${V},`,"");if(eP(y)&&d!=="_self")return OC(e||"",d),new sv(null);const E=window.open(e||"",d,v);we(E,n,"popup-blocked");try{E.focus()}catch{}return new sv(E)}function OC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const LC="__/auth/handler",VC="emulator/auth/handler",MC=encodeURIComponent("fac");async function ov(n,e,t,i,o,l){we(n.config.authDomain,n,"auth-domain-config-required"),we(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:zs,eventId:o};if(e instanceof em){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",ER(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries({}))c[v]=E}if(e instanceof Gl){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${MC}=${encodeURIComponent(p)}`:"";return`${FC(n)}?${ql(d).slice(1)}${y}`}function FC({config:n}){return n.emulator?Qp(n,VC):`https://${n.authDomain}/${LC}`}/**
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
 */const Of="webStorageSupport";class UC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ow,this._completeRedirectFn=uC,this._overrideRedirectResult=oC}async _openPopup(e,t,i,o){var l;Xr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await ov(e,t,i,lp(),o);return bC(e,c,tm())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await ov(e,t,i,lp(),o);return zP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Xr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await PC(e),i=new hC(e);return t.register("authEvent",o=>(we(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Of,{type:Of},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Of];c!==void 0&&t(!!c),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=gC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||yw()||Xp()}}const jC=UC;var av="@firebase/auth",lv="1.7.9";/**
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
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){we(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $C(n){bs(new $i("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;we(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sw(n)},y=new oP(i,o,l,p);return mP(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),bs(new $i("auth-internal",e=>{const t=ni(e.getProvider("auth").getImmediate());return(i=>new BC(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wr(av,lv,zC(n)),wr(av,lv,"esm2017")}/**
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
 */const WC=5*60,qC=tw("authIdTokenMaxAge")||WC;let uv=null;const HC=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>qC)return;const o=t==null?void 0:t.token;uv!==o&&(uv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function KC(n=qp()){const e=Rh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=pP(n,{popupRedirectResolver:jC,persistence:[XP,UP,Ow]}),i=tw("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=HC(l.toString());VP(t,c,()=>c(t.currentUser)),LP(t,d=>c(d))}}const o=J0("auth");return o&&gP(t,`http://${o}`),t}function GC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}aP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=tr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",GC().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$C("Browser");var cv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xs,zw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,S){function P(){}P.prototype=S.prototype,A.D=S.prototype,A.prototype=new P,A.prototype.constructor=A,A.C=function(N,b,M){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return S.prototype[b].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(A,S,P){P||(P=0);var N=Array(16);if(typeof S=="string")for(var b=0;16>b;++b)N[b]=S.charCodeAt(P++)|S.charCodeAt(P++)<<8|S.charCodeAt(P++)<<16|S.charCodeAt(P++)<<24;else for(b=0;16>b;++b)N[b]=S[P++]|S[P++]<<8|S[P++]<<16|S[P++]<<24;S=A.g[0],P=A.g[1],b=A.g[2];var M=A.g[3],C=S+(M^P&(b^M))+N[0]+3614090360&4294967295;S=P+(C<<7&4294967295|C>>>25),C=M+(b^S&(P^b))+N[1]+3905402710&4294967295,M=S+(C<<12&4294967295|C>>>20),C=b+(P^M&(S^P))+N[2]+606105819&4294967295,b=M+(C<<17&4294967295|C>>>15),C=P+(S^b&(M^S))+N[3]+3250441966&4294967295,P=b+(C<<22&4294967295|C>>>10),C=S+(M^P&(b^M))+N[4]+4118548399&4294967295,S=P+(C<<7&4294967295|C>>>25),C=M+(b^S&(P^b))+N[5]+1200080426&4294967295,M=S+(C<<12&4294967295|C>>>20),C=b+(P^M&(S^P))+N[6]+2821735955&4294967295,b=M+(C<<17&4294967295|C>>>15),C=P+(S^b&(M^S))+N[7]+4249261313&4294967295,P=b+(C<<22&4294967295|C>>>10),C=S+(M^P&(b^M))+N[8]+1770035416&4294967295,S=P+(C<<7&4294967295|C>>>25),C=M+(b^S&(P^b))+N[9]+2336552879&4294967295,M=S+(C<<12&4294967295|C>>>20),C=b+(P^M&(S^P))+N[10]+4294925233&4294967295,b=M+(C<<17&4294967295|C>>>15),C=P+(S^b&(M^S))+N[11]+2304563134&4294967295,P=b+(C<<22&4294967295|C>>>10),C=S+(M^P&(b^M))+N[12]+1804603682&4294967295,S=P+(C<<7&4294967295|C>>>25),C=M+(b^S&(P^b))+N[13]+4254626195&4294967295,M=S+(C<<12&4294967295|C>>>20),C=b+(P^M&(S^P))+N[14]+2792965006&4294967295,b=M+(C<<17&4294967295|C>>>15),C=P+(S^b&(M^S))+N[15]+1236535329&4294967295,P=b+(C<<22&4294967295|C>>>10),C=S+(b^M&(P^b))+N[1]+4129170786&4294967295,S=P+(C<<5&4294967295|C>>>27),C=M+(P^b&(S^P))+N[6]+3225465664&4294967295,M=S+(C<<9&4294967295|C>>>23),C=b+(S^P&(M^S))+N[11]+643717713&4294967295,b=M+(C<<14&4294967295|C>>>18),C=P+(M^S&(b^M))+N[0]+3921069994&4294967295,P=b+(C<<20&4294967295|C>>>12),C=S+(b^M&(P^b))+N[5]+3593408605&4294967295,S=P+(C<<5&4294967295|C>>>27),C=M+(P^b&(S^P))+N[10]+38016083&4294967295,M=S+(C<<9&4294967295|C>>>23),C=b+(S^P&(M^S))+N[15]+3634488961&4294967295,b=M+(C<<14&4294967295|C>>>18),C=P+(M^S&(b^M))+N[4]+3889429448&4294967295,P=b+(C<<20&4294967295|C>>>12),C=S+(b^M&(P^b))+N[9]+568446438&4294967295,S=P+(C<<5&4294967295|C>>>27),C=M+(P^b&(S^P))+N[14]+3275163606&4294967295,M=S+(C<<9&4294967295|C>>>23),C=b+(S^P&(M^S))+N[3]+4107603335&4294967295,b=M+(C<<14&4294967295|C>>>18),C=P+(M^S&(b^M))+N[8]+1163531501&4294967295,P=b+(C<<20&4294967295|C>>>12),C=S+(b^M&(P^b))+N[13]+2850285829&4294967295,S=P+(C<<5&4294967295|C>>>27),C=M+(P^b&(S^P))+N[2]+4243563512&4294967295,M=S+(C<<9&4294967295|C>>>23),C=b+(S^P&(M^S))+N[7]+1735328473&4294967295,b=M+(C<<14&4294967295|C>>>18),C=P+(M^S&(b^M))+N[12]+2368359562&4294967295,P=b+(C<<20&4294967295|C>>>12),C=S+(P^b^M)+N[5]+4294588738&4294967295,S=P+(C<<4&4294967295|C>>>28),C=M+(S^P^b)+N[8]+2272392833&4294967295,M=S+(C<<11&4294967295|C>>>21),C=b+(M^S^P)+N[11]+1839030562&4294967295,b=M+(C<<16&4294967295|C>>>16),C=P+(b^M^S)+N[14]+4259657740&4294967295,P=b+(C<<23&4294967295|C>>>9),C=S+(P^b^M)+N[1]+2763975236&4294967295,S=P+(C<<4&4294967295|C>>>28),C=M+(S^P^b)+N[4]+1272893353&4294967295,M=S+(C<<11&4294967295|C>>>21),C=b+(M^S^P)+N[7]+4139469664&4294967295,b=M+(C<<16&4294967295|C>>>16),C=P+(b^M^S)+N[10]+3200236656&4294967295,P=b+(C<<23&4294967295|C>>>9),C=S+(P^b^M)+N[13]+681279174&4294967295,S=P+(C<<4&4294967295|C>>>28),C=M+(S^P^b)+N[0]+3936430074&4294967295,M=S+(C<<11&4294967295|C>>>21),C=b+(M^S^P)+N[3]+3572445317&4294967295,b=M+(C<<16&4294967295|C>>>16),C=P+(b^M^S)+N[6]+76029189&4294967295,P=b+(C<<23&4294967295|C>>>9),C=S+(P^b^M)+N[9]+3654602809&4294967295,S=P+(C<<4&4294967295|C>>>28),C=M+(S^P^b)+N[12]+3873151461&4294967295,M=S+(C<<11&4294967295|C>>>21),C=b+(M^S^P)+N[15]+530742520&4294967295,b=M+(C<<16&4294967295|C>>>16),C=P+(b^M^S)+N[2]+3299628645&4294967295,P=b+(C<<23&4294967295|C>>>9),C=S+(b^(P|~M))+N[0]+4096336452&4294967295,S=P+(C<<6&4294967295|C>>>26),C=M+(P^(S|~b))+N[7]+1126891415&4294967295,M=S+(C<<10&4294967295|C>>>22),C=b+(S^(M|~P))+N[14]+2878612391&4294967295,b=M+(C<<15&4294967295|C>>>17),C=P+(M^(b|~S))+N[5]+4237533241&4294967295,P=b+(C<<21&4294967295|C>>>11),C=S+(b^(P|~M))+N[12]+1700485571&4294967295,S=P+(C<<6&4294967295|C>>>26),C=M+(P^(S|~b))+N[3]+2399980690&4294967295,M=S+(C<<10&4294967295|C>>>22),C=b+(S^(M|~P))+N[10]+4293915773&4294967295,b=M+(C<<15&4294967295|C>>>17),C=P+(M^(b|~S))+N[1]+2240044497&4294967295,P=b+(C<<21&4294967295|C>>>11),C=S+(b^(P|~M))+N[8]+1873313359&4294967295,S=P+(C<<6&4294967295|C>>>26),C=M+(P^(S|~b))+N[15]+4264355552&4294967295,M=S+(C<<10&4294967295|C>>>22),C=b+(S^(M|~P))+N[6]+2734768916&4294967295,b=M+(C<<15&4294967295|C>>>17),C=P+(M^(b|~S))+N[13]+1309151649&4294967295,P=b+(C<<21&4294967295|C>>>11),C=S+(b^(P|~M))+N[4]+4149444226&4294967295,S=P+(C<<6&4294967295|C>>>26),C=M+(P^(S|~b))+N[11]+3174756917&4294967295,M=S+(C<<10&4294967295|C>>>22),C=b+(S^(M|~P))+N[2]+718787259&4294967295,b=M+(C<<15&4294967295|C>>>17),C=P+(M^(b|~S))+N[9]+3951481745&4294967295,A.g[0]=A.g[0]+S&4294967295,A.g[1]=A.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+M&4294967295}i.prototype.u=function(A,S){S===void 0&&(S=A.length);for(var P=S-this.blockSize,N=this.B,b=this.h,M=0;M<S;){if(b==0)for(;M<=P;)o(this,A,M),M+=this.blockSize;if(typeof A=="string"){for(;M<S;)if(N[b++]=A.charCodeAt(M++),b==this.blockSize){o(this,N),b=0;break}}else for(;M<S;)if(N[b++]=A[M++],b==this.blockSize){o(this,N),b=0;break}}this.h=b,this.o+=S},i.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var S=1;S<A.length-8;++S)A[S]=0;var P=8*this.o;for(S=A.length-8;S<A.length;++S)A[S]=P&255,P/=256;for(this.u(A),A=Array(16),S=P=0;4>S;++S)for(var N=0;32>N;N+=8)A[P++]=this.g[S]>>>N&255;return A};function l(A,S){var P=d;return Object.prototype.hasOwnProperty.call(P,A)?P[A]:P[A]=S(A)}function c(A,S){this.h=S;for(var P=[],N=!0,b=A.length-1;0<=b;b--){var M=A[b]|0;N&&M==S||(P[b]=M,N=!1)}this.g=P}var d={};function p(A){return-128<=A&&128>A?l(A,function(S){return new c([S|0],0>S?-1:0)}):new c([A|0],0>A?-1:0)}function y(A){if(isNaN(A)||!isFinite(A))return E;if(0>A)return O(y(-A));for(var S=[],P=1,N=0;A>=P;N++)S[N]=A/P|0,P*=4294967296;return new c(S,0)}function v(A,S){if(A.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(A.charAt(0)=="-")return O(v(A.substring(1),S));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(S,8)),N=E,b=0;b<A.length;b+=8){var M=Math.min(8,A.length-b),C=parseInt(A.substring(b,b+M),S);8>M?(M=y(Math.pow(S,M)),N=N.j(M).add(y(C))):(N=N.j(P),N=N.add(y(C)))}return N}var E=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(j(this))return-O(this).m();for(var A=0,S=1,P=0;P<this.g.length;P++){var N=this.i(P);A+=(0<=N?N:4294967296+N)*S,S*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(V(this))return"0";if(j(this))return"-"+O(this).toString(A);for(var S=y(Math.pow(A,6)),P=this,N="";;){var b=ee(P,S).g;P=H(P,b.j(S));var M=((0<P.g.length?P.g[0]:P.h)>>>0).toString(A);if(P=b,V(P))return M+N;for(;6>M.length;)M="0"+M;N=M+N}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function V(A){if(A.h!=0)return!1;for(var S=0;S<A.g.length;S++)if(A.g[S]!=0)return!1;return!0}function j(A){return A.h==-1}n.l=function(A){return A=H(this,A),j(A)?-1:V(A)?0:1};function O(A){for(var S=A.g.length,P=[],N=0;N<S;N++)P[N]=~A.g[N];return new c(P,~A.h).add(I)}n.abs=function(){return j(this)?O(this):this},n.add=function(A){for(var S=Math.max(this.g.length,A.g.length),P=[],N=0,b=0;b<=S;b++){var M=N+(this.i(b)&65535)+(A.i(b)&65535),C=(M>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);N=C>>>16,M&=65535,C&=65535,P[b]=C<<16|M}return new c(P,P[P.length-1]&-2147483648?-1:0)};function H(A,S){return A.add(O(S))}n.j=function(A){if(V(this)||V(A))return E;if(j(this))return j(A)?O(this).j(O(A)):O(O(this).j(A));if(j(A))return O(this.j(O(A)));if(0>this.l(x)&&0>A.l(x))return y(this.m()*A.m());for(var S=this.g.length+A.g.length,P=[],N=0;N<2*S;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var b=0;b<A.g.length;b++){var M=this.i(N)>>>16,C=this.i(N)&65535,tt=A.i(b)>>>16,Rt=A.i(b)&65535;P[2*N+2*b]+=C*Rt,J(P,2*N+2*b),P[2*N+2*b+1]+=M*Rt,J(P,2*N+2*b+1),P[2*N+2*b+1]+=C*tt,J(P,2*N+2*b+1),P[2*N+2*b+2]+=M*tt,J(P,2*N+2*b+2)}for(N=0;N<S;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=S;N<2*S;N++)P[N]=0;return new c(P,0)};function J(A,S){for(;(A[S]&65535)!=A[S];)A[S+1]+=A[S]>>>16,A[S]&=65535,S++}function K(A,S){this.g=A,this.h=S}function ee(A,S){if(V(S))throw Error("division by zero");if(V(A))return new K(E,E);if(j(A))return S=ee(O(A),S),new K(O(S.g),O(S.h));if(j(S))return S=ee(A,O(S)),new K(O(S.g),S.h);if(30<A.g.length){if(j(A)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var P=I,N=S;0>=N.l(A);)P=le(P),N=le(N);var b=re(P,1),M=re(N,1);for(N=re(N,2),P=re(P,2);!V(N);){var C=M.add(N);0>=C.l(A)&&(b=b.add(P),M=C),N=re(N,1),P=re(P,1)}return S=H(A,b.j(S)),new K(b,S)}for(b=E;0<=A.l(S);){for(P=Math.max(1,Math.floor(A.m()/S.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),M=y(P),C=M.j(S);j(C)||0<C.l(A);)P-=N,M=y(P),C=M.j(S);V(M)&&(M=I),b=b.add(M),A=H(A,C)}return new K(b,A)}n.A=function(A){return ee(this,A).h},n.and=function(A){for(var S=Math.max(this.g.length,A.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)&A.i(N);return new c(P,this.h&A.h)},n.or=function(A){for(var S=Math.max(this.g.length,A.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)|A.i(N);return new c(P,this.h|A.h)},n.xor=function(A){for(var S=Math.max(this.g.length,A.g.length),P=[],N=0;N<S;N++)P[N]=this.i(N)^A.i(N);return new c(P,this.h^A.h)};function le(A){for(var S=A.g.length+1,P=[],N=0;N<S;N++)P[N]=A.i(N)<<1|A.i(N-1)>>>31;return new c(P,A.h)}function re(A,S){var P=S>>5;S%=32;for(var N=A.g.length-P,b=[],M=0;M<N;M++)b[M]=0<S?A.i(M+P)>>>S|A.i(M+P+1)<<32-S:A.i(M+P);return new c(b,A.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,zw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,xs=c}).apply(typeof cv<"u"?cv:typeof self<"u"?self:typeof window<"u"?window:{});var Tc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $w,ml,Ww,Fc,dp,qw,Hw,Kw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Tc=="object"&&Tc];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var F=u[T];if(!(F in _))break e;_=_[F]}u=u[u.length-1],T=_[u],m=m(T),m!=T&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,T=!1,F={next:function(){if(!T&&_<u.length){var $=_++;return{value:m($,u[$]),done:!1}}return T=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function E(u,m,_){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,T),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:E,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var T=_.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function V(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(T,F,$){for(var ie=Array(arguments.length-2),We=2;We<arguments.length;We++)ie[We-2]=arguments[We];return m.prototype[F].apply(T,ie)}}function j(u){const m=u.length;if(0<m){const _=Array(m);for(let T=0;T<m;T++)_[T]=u[T];return _}return[]}function O(u,m){for(let _=1;_<arguments.length;_++){const T=arguments[_];if(p(T)){const F=u.length||0,$=T.length||0;u.length=F+$;for(let ie=0;ie<$;ie++)u[F+ie]=T[ie]}else u.push(T)}}class H{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ee(u){return ee[" "](u),u}ee[" "]=function(){};var le=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function re(u,m,_){for(const T in u)m.call(_,u[T],T,u)}function A(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let _,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(_ in T)u[_]=T[_];for(let $=0;$<P.length;$++)_=P[$],Object.prototype.hasOwnProperty.call(T,_)&&(u[_]=T[_])}}function b(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function C(){var u=de;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class tt{constructor(){this.h=this.g=null}add(m,_){const T=Rt.get();T.set(m,_),this.h?this.h.next=T:this.g=T,this.h=T}}var Rt=new H(()=>new At,u=>u.reset());class At{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let je,se=!1,de=new tt,oe=()=>{const u=d.Promise.resolve(void 0);je=()=>{u.then(L)}};var L=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){M(_)}var m=Rt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Pe(u,m){if(ge.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(le){e:{try{ee(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ce[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Pe.aa.h.call(this)}}V(Pe,ge);var Ce={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Ve(u,m,_,T,F){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!T,this.ha=F,this.key=++Ne,this.da=this.fa=!1}function ot(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function nn(u){this.src=u,this.g={},this.h=0}nn.prototype.add=function(u,m,_,T,F){var $=u.toString();u=this.g[$],u||(u=this.g[$]=[],this.h++);var ie=ii(u,m,T,F);return-1<ie?(m=u[ie],_||(m.fa=!1)):(m=new Ve(m,this.src,$,!!T,F),m.fa=_,u.push(m)),m};function Yt(u,m){var _=m.type;if(_ in u.g){var T=u.g[_],F=Array.prototype.indexOf.call(T,m,void 0),$;($=0<=F)&&Array.prototype.splice.call(T,F,1),$&&(ot(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function ii(u,m,_,T){for(var F=0;F<u.length;++F){var $=u[F];if(!$.da&&$.listener==m&&$.capture==!!_&&$.ha==T)return F}return-1}var Yi="closure_lm_"+(1e6*Math.random()|0),qs={};function ma(u,m,_,T,F){if(Array.isArray(m)){for(var $=0;$<m.length;$++)ma(u,m[$],_,T,F);return null}return _=_a(_),u&&u[De]?u.K(m,_,y(T)?!!T.capture:!1,F):ga(u,m,_,!1,T,F)}function ga(u,m,_,T,F,$){if(!m)throw Error("Invalid event type");var ie=y(F)?!!F.capture:!!F,We=Ks(u);if(We||(u[Yi]=We=new nn(u)),_=We.add(m,_,T,ie,$),_.proxy)return _;if(T=ru(),_.proxy=T,T.src=u,T.listener=_,u.addEventListener)Ae||(F=ie),F===void 0&&(F=!1),u.addEventListener(m.toString(),T,F);else if(u.attachEvent)u.attachEvent(Cr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return _}function ru(){function u(_){return m.call(u.src,u.listener,_)}const m=ya;return u}function Hs(u,m,_,T,F){if(Array.isArray(m))for(var $=0;$<m.length;$++)Hs(u,m[$],_,T,F);else T=y(T)?!!T.capture:!!T,_=_a(_),u&&u[De]?(u=u.i,m=String(m).toString(),m in u.g&&($=u.g[m],_=ii($,_,T,F),-1<_&&(ot($[_]),Array.prototype.splice.call($,_,1),$.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ks(u))&&(m=u.g[m.toString()],u=-1,m&&(u=ii(m,_,T,F)),(_=-1<u?m[u]:null)&&Pr(_))}function Pr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[De])Yt(m.i,u);else{var _=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(_,T,u.capture):m.detachEvent?m.detachEvent(Cr(_),T):m.addListener&&m.removeListener&&m.removeListener(T),(_=Ks(m))?(Yt(_,u),_.h==0&&(_.src=null,m[Yi]=null)):ot(u)}}}function Cr(u){return u in qs?qs[u]:qs[u]="on"+u}function ya(u,m){if(u.da)u=!0;else{m=new Pe(m,this);var _=u.listener,T=u.ha||u.src;u.fa&&Pr(u),u=_.call(T,m)}return u}function Ks(u){return u=u[Yi],u instanceof nn?u:null}var Gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(u){return typeof u=="function"?u:(u[Gs]||(u[Gs]=function(m){return u.handleEvent(m)}),u[Gs])}function vt(){q.call(this),this.i=new nn(this),this.M=this,this.F=null}V(vt,q),vt.prototype[De]=!0,vt.prototype.removeEventListener=function(u,m,_,T){Hs(this,u,m,_,T)};function wt(u,m){var _,T=u.F;if(T)for(_=[];T;T=T.F)_.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new ge(m,u);else if(m instanceof ge)m.target=m.target||u;else{var F=m;m=new ge(T,u),N(m,F)}if(F=!0,_)for(var $=_.length-1;0<=$;$--){var ie=m.g=_[$];F=kr(ie,T,!0,m)&&F}if(ie=m.g=u,F=kr(ie,T,!0,m)&&F,F=kr(ie,T,!1,m)&&F,_)for($=0;$<_.length;$++)ie=m.g=_[$],F=kr(ie,T,!1,m)&&F}vt.prototype.N=function(){if(vt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],T=0;T<_.length;T++)ot(_[T]);delete u.g[m],u.h--}}this.F=null},vt.prototype.K=function(u,m,_,T){return this.i.add(String(u),m,!1,_,T)},vt.prototype.L=function(u,m,_,T){return this.i.add(String(u),m,!0,_,T)};function kr(u,m,_,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,$=0;$<m.length;++$){var ie=m[$];if(ie&&!ie.da&&ie.capture==_){var We=ie.listener,Et=ie.ha||ie.src;ie.fa&&Yt(u.i,ie),F=We.call(Et,T)!==!1&&F}}return F&&!T.defaultPrevented}function va(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function si(u){u.g=va(()=>{u.g=null,u.i&&(u.i=!1,si(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Xi extends q{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ji(u){q.call(this),this.h=u,this.g={}}V(Ji,q);var wa=[];function Ea(u){re(u.g,function(m,_){this.g.hasOwnProperty(_)&&Pr(m)},u),u.g={}}Ji.prototype.N=function(){Ji.aa.N.call(this),Ea(this)},Ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ta=d.JSON.stringify,Ia=d.JSON.parse,Sa=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Zi(){}Zi.prototype.h=null;function Qs(u){return u.h||(u.h=u.i())}function Ys(){}var Rn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sr(){ge.call(this,"d")}V(sr,ge);function Xs(){ge.call(this,"c")}V(Xs,ge);var or={},Ra=null;function es(){return Ra=Ra||new vt}or.La="serverreachability";function Aa(u){ge.call(this,or.La,u)}V(Aa,ge);function xr(u){const m=es();wt(m,new Aa(m))}or.STAT_EVENT="statevent";function Pa(u,m){ge.call(this,or.STAT_EVENT,u),this.stat=m}V(Pa,ge);function ct(u){const m=es();wt(m,new Pa(m,u))}or.Ma="timingevent";function Js(u,m){ge.call(this,or.Ma,u),this.size=m}V(Js,ge);function Mn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function ns(u,m,_,T,F,$){u.info(function(){if(u.g)if($)for(var ie="",We=$.split("&"),Et=0;Et<We.length;Et++){var Me=We[Et].split("=");if(1<Me.length){var Pt=Me[0];Me=Me[1];var pt=Pt.split("_");ie=2<=pt.length&&pt[1]=="type"?ie+(Pt+"="+Me+"&"):ie+(Pt+"=redacted&")}}else ie=null;else ie=$;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+m+`
`+_+`
`+ie})}function Zs(u,m,_,T,F,$,ie){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+m+`
`+_+`
`+$+" "+ie})}function Fn(u,m,_,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+qh(u,_)+(T?" "+T:"")})}function Ca(u,m){u.info(function(){return"TIMEOUT: "+m})}ts.prototype.info=function(){};function qh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var T=_[u];if(!(2>T.length)){var F=T[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return Ta(_)}catch{return m}}var eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Un;function rs(){}V(rs,Zi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},Un=new rs;function jn(u,m,_,T){this.j=u,this.i=m,this.l=_,this.R=T||1,this.U=new Ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var ka={},to={};function no(u,m,_){u.L=1,u.v=ci(gn(m)),u.m=_,u.P=!0,xa(u,null)}function xa(u,m){u.F=Date.now(),Ke(u),u.A=gn(u.v);var _=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),di(_.i,"t",T),u.C=0,_=u.j.J,u.h=new su,u.g=Iu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Xi(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,T=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(wa[0]=F.toString()),F=wa);for(var $=0;$<F.length;$++){var ie=ma(_,F[$],T||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),xr(),ns(u.i,u.u,u.A,u.l,u.R,u.m)}jn.prototype.ca=function(u){u=u.target;const m=this.M;m&&sn(u)==3?m.j():this.Y(u)},jn.prototype.Y=function(u){try{if(u==this.g)e:{const pt=sn(this.g);var m=this.g.Ba();const Cn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Va(this.g)))){this.J||pt!=4||m==7||(m==8||0>=Cn?xr(3):xr(2)),is(this);var _=this.g.Z();this.X=_;t:if(ou(this)){var T=Va(this.g);u="";var F=T.length,$=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){An(this),oi(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!($&&m==F-1)});T.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Zs(this.i,this.u,this.A,this.l,this.R,pt,_),this.o){if(this.T&&!this.K){t:{if(this.g){var We,Et=this.g;if((We=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(We)){var Me=We;break t}}Me=null}if(_=Me)Fn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Na(this,_);else{this.o=!1,this.s=3,ct(12),An(this),oi(this);break e}}if(this.P){_=!0;let _n;for(;!this.J&&this.C<ie.length;)if(_n=Hh(this,ie),_n==to){pt==4&&(this.s=4,ct(14),_=!1),Fn(this.i,this.l,null,"[Incomplete Response]");break}else if(_n==ka){this.s=4,ct(15),Fn(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Fn(this.i,this.l,_n,null),Na(this,_n);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),_=!1),this.o=this.o&&_,!_)Fn(this.i,this.l,ie,"[Invalid Chunked Response]"),An(this),oi(this);else if(0<ie.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Fa(Pt),Pt.M=!0,ct(11))}}else Fn(this.i,this.l,ie,null),Na(this,ie);pt==4&&An(this),this.o&&!this.J&&(pt==4?po(this.j,this):(this.o=!1,Ke(this)))}else lo(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),An(this),oi(this)}}}catch{}finally{}};function ou(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Hh(u,m){var _=u.C,T=m.indexOf(`
`,_);return T==-1?to:(_=Number(m.substring(_,T)),isNaN(_)?ka:(T+=1,T+_>m.length?to:(m=m.slice(T,T+_),u.C=T+_,m)))}jn.prototype.cancel=function(){this.J=!0,An(this)};function Ke(u){u.S=Date.now()+u.I,au(u,u.I)}function au(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Mn(I(u.ba,u),m)}function is(u){u.B&&(d.clearTimeout(u.B),u.B=null)}jn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ca(this.i,this.A),this.L!=2&&(xr(),ct(17)),An(this),this.s=2,oi(this)):au(this,this.S-u)};function oi(u){u.j.G==0||u.J||po(u.j,u)}function An(u){is(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Ea(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Na(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Xt(_.h,u))){if(!u.K&&Xt(_.h,u)&&_.G==3){try{var T=_.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)fo(_),qn(_);else break e;ho(_),ct(18)}}else _.za=F[1],0<_.za-_.T&&37500>F[2]&&_.F&&_.v==0&&!_.C&&(_.C=Mn(I(_.Za,_),6e3));if(1>=uu(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Lr(_,11)}else if((u.K||_.g==u)&&fo(_),!J(m))for(F=_.Da.g.parse(m),m=0;m<F.length;m++){let Me=F[m];if(_.T=Me[0],Me=Me[1],_.G==2)if(Me[0]=="c"){_.K=Me[1],_.ia=Me[2];const Pt=Me[3];Pt!=null&&(_.la=Pt,_.j.info("VER="+_.la));const pt=Me[4];pt!=null&&(_.Aa=pt,_.j.info("SVER="+_.Aa));const Cn=Me[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(T=1.5*Cn,_.L=T,_.j.info("backChannelRequestTimeoutMs_="+T)),T=_;const _n=u.g;if(_n){const hs=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var $=T.h;$.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Da($,$.h),$.h=null))}if(T.D){const go=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;go&&(T.ya=go,He(T.I,T.D,go))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),T=_;var ie=u;if(T.qa=Tu(T,T.J?T.ia:null,T.W),ie.K){cu(T.h,ie);var We=ie,Et=T.L;Et&&(We.I=Et),We.B&&(is(We),Ke(We)),T.g=ie}else cs(T);0<_.i.length&&cr(_)}else Me[0]!="stop"&&Me[0]!="close"||Lr(_,7);else _.G==3&&(Me[0]=="stop"||Me[0]=="close"?Me[0]=="stop"?Lr(_,7):Ot(_):Me[0]!="noop"&&_.l&&_.l.ta(Me),_.v=0)}}xr(4)}catch{}}var lu=class{constructor(u,m){this.g=u,this.map=m}};function ss(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function mn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function uu(u){return u.h?1:u.g?u.g.size:0}function Xt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Da(u,m){u.g?u.g.add(m):u.h=m}function cu(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ss.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function hu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return j(u.i)}function ro(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,T=0;T<_;T++)m.push(u[T]);return m}m=[],_=0;for(T in u)m[_++]=u[T];return m}function io(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const T in u)m[_++]=T;return m}}}function ai(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=io(u),T=ro(u),F=T.length,$=0;$<F;$++)m.call(void 0,T[$],_&&_[$],u)}var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var T=u[_].indexOf("="),F=null;if(0<=T){var $=u[_].substring(0,T);F=u[_].substring(T+1)}else $=u[_];m($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Nr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Nr){this.h=u.h,as(this,u.j),this.o=u.o,this.g=u.g,li(this,u.s),this.l=u.l;var m=u.i,_=new ar;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ui(this,_),this.m=u.m}else u&&(m=String(u).match(os))?(this.h=!1,as(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),li(this,m[4]),this.l=Oe(m[5]||"",!0),ui(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Nr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(hi(m,so,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(hi(m,so,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(hi(_,_.charAt(0)=="/"?pu:fu,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",hi(_,ba)),u.join("")};function gn(u){return new Nr(u)}function as(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function li(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ui(u,m,_){m instanceof ar?(u.i=m,lr(u.i,u.h)):(_||(m=hi(m,mu)),u.i=new ar(m,u.h))}function He(u,m,_){u.i.set(m,_)}function ci(u){return He(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function hi(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,du),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function du(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var so=/[#\/\?@]/g,fu=/[#\?:]/g,pu=/[#\?]/g,mu=/[#\?@]/g,ba=/#/g;function ar(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&Kh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=ar.prototype,n.add=function(u,m){bt(this),this.i=null,u=Pn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Bn(u,m){bt(u),m=Pn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function zn(u,m){return bt(u),m=Pn(u,m),u.g.has(m)}n.forEach=function(u,m){bt(this),this.g.forEach(function(_,T){_.forEach(function(F){u.call(m,F,T,this)},this)},this)},n.na=function(){bt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let T=0;T<m.length;T++){const F=u[T];for(let $=0;$<F.length;$++)_.push(m[T])}return _},n.V=function(u){bt(this);let m=[];if(typeof u=="string")zn(this,u)&&(m=m.concat(this.g.get(Pn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return bt(this),this.i=null,u=Pn(this,u),zn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function di(u,m,_){Bn(u,m),0<_.length&&(u.i=null,u.g.set(Pn(u,m),j(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var T=m[_];const $=encodeURIComponent(String(T)),ie=this.V(T);for(T=0;T<ie.length;T++){var F=$;ie[T]!==""&&(F+="="+encodeURIComponent(String(ie[T]))),u.push(F)}}return this.i=u.join("&")};function Pn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function lr(u,m){m&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(_,T){var F=T.toLowerCase();T!=F&&(Bn(this,T),di(this,F,_))},u)),u.j=m}function Gh(u,m){const _=new ts;if(d.Image){const T=new Image;T.onload=x(rn,_,"TestLoadImage: loaded",!0,m,T),T.onerror=x(rn,_,"TestLoadImage: error",!1,m,T),T.onabort=x(rn,_,"TestLoadImage: abort",!1,m,T),T.ontimeout=x(rn,_,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function gu(u,m){const _=new ts,T=new AbortController,F=setTimeout(()=>{T.abort(),rn(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then($=>{clearTimeout(F),$.ok?rn(_,"TestPingServer: ok",!0,m):rn(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),rn(_,"TestPingServer: error",!1,m)})}function rn(u,m,_,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(_)}catch{}}function Qh(){this.g=new Sa}function yu(u,m,_){const T=_||"";try{ai(u,function(F,$){let ie=F;y(F)&&(ie=Ta(F)),m.push(T+$+"="+encodeURIComponent(ie))})}catch(F){throw m.push(T+"type="+encodeURIComponent("_badmap")),F}}function Dr(u){this.l=u.Ub||null,this.j=u.eb||!1}V(Dr,Zi),Dr.prototype.g=function(){return new ls(this.l,this.j)},Dr.prototype.i=function(u){return function(){return u}}({});function ls(u,m){vt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(ls,vt),n=ls.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Wn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$n(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wn(this)),this.g&&(this.readyState=3,Wn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;_u(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function _u(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?$n(this):Wn(this),this.readyState==3&&_u(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,$n(this))},n.Qa=function(u){this.g&&(this.response=u,$n(this))},n.ga=function(){this.g&&$n(this)};function $n(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Wn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function br(u){let m="";return re(u,function(_,T){m+=T,m+=":",m+=_,m+=`\r
`}),m}function fi(u,m,_){e:{for(T in _){var T=!1;break e}T=!0}T||(_=br(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):He(u,m,_))}function Ze(u){vt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ze,vt);var Yh=/^https?$/i,Oa=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Un.g(),this.v=this.o?Qs(this.o):Qs(Un),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch($){us(this,$);return}if(u=_||"",_=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)_.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const $ of T.keys())_.set($,T.get($));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(_.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Oa,m,void 0))||T||F||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,ie]of _)this.g.setRequestHeader($,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ao(this),this.u=!0,this.g.send(u),this.u=!1}catch($){us(this,$)}};function us(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,oo(u),yn(u)}function oo(u){u.A||(u.A=!0,wt(u,"complete"),wt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,wt(this,"complete"),wt(this,"abort"),yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?La(this):this.bb())},n.bb=function(){La(this)};function La(u){if(u.h&&typeof c<"u"&&(!u.v[1]||sn(u)!=4||u.Z()!=2)){if(u.u&&sn(u)==4)va(u.Ea,0,u);else if(wt(u,"readystatechange"),sn(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var T;if(T=ie===0){var F=String(u.D).match(os)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),T=!Yh.test(F?F.toLowerCase():"")}_=T}if(_)wt(u,"complete"),wt(u,"success");else{u.m=6;try{var $=2<sn(u)?u.g.statusText:""}catch{$=""}u.l=$+" ["+u.Z()+"]",oo(u)}}finally{yn(u)}}}}function yn(u,m){if(u.g){ao(u);const _=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||wt(u,"ready");try{_.onreadystatechange=T}catch{}}}function ao(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function sn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Ia(m)}};function Va(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function lo(u){const m={};u=(u.g&&2<=sn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(J(u[T]))continue;var _=b(u[T]);const F=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const $=m[F]||[];m[F]=$,$.push(_)}A(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ur(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ma(u){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ur("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ur("baseRetryDelayMs",5e3,u),this.cb=ur("retryDelaySeedMs",1e4,u),this.Wa=ur("forwardChannelMaxRetries",2,u),this.wa=ur("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ss(u&&u.concurrentRequestLimit),this.Da=new Qh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ma.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,T){ct(0),this.W=u,this.H=m||{},_&&T!==void 0&&(this.H.OSID=_,this.H.OAID=T),this.F=this.X,this.I=Tu(this,null,this.W),cr(this)};function Ot(u){if(uo(u),u.G==3){var m=u.U++,_=gn(u.I);if(He(_,"SID",u.K),He(_,"RID",m),He(_,"TYPE","terminate"),Or(u,_),m=new jn(u,u.j,m),m.L=2,m.v=ci(gn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=Iu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Ke(m)}Eu(u)}function qn(u){u.g&&(Fa(u),u.g.cancel(),u.g=null)}function uo(u){qn(u),u.u&&(d.clearTimeout(u.u),u.u=null),fo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function cr(u){if(!mn(u.h)&&!u.s){u.s=!0;var m=u.Ga;je||oe(),se||(je(),se=!0),de.add(m,u),u.B=0}}function Xh(u,m){return uu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Mn(I(u.Ga,u,m),wu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new jn(this,this.j,u);let $=this.o;if(this.S&&($?($=S($),N($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var T=this.i[_];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=pi(this,F,m),_=gn(this.I),He(_,"RID",u),He(_,"CVER",22),this.D&&He(_,"X-HTTP-Session-Id",this.D),Or(this,_),$&&(this.O?m="headers="+encodeURIComponent(String(br($)))+"&"+m:this.m&&fi(_,this.m,$)),Da(this.h,F),this.Ua&&He(_,"TYPE","init"),this.P?(He(_,"$req",m),He(_,"SID","null"),F.T=!0,no(F,_,null)):no(F,_,m),this.G=2}}else this.G==3&&(u?co(this,u):this.i.length==0||mn(this.h)||co(this))};function co(u,m){var _;m?_=m.l:_=u.U++;const T=gn(u.I);He(T,"SID",u.K),He(T,"RID",_),He(T,"AID",u.T),Or(u,T),u.m&&u.o&&fi(T,u.m,u.o),_=new jn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=pi(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Da(u.h,_),no(_,T,m)}function Or(u,m){u.H&&re(u.H,function(_,T){He(m,T,_)}),u.l&&ai({},function(_,T){He(m,T,_)})}function pi(u,m,_){_=Math.min(u.i.length,_);var T=u.l?I(u.l.Na,u.l,u):null;e:{var F=u.i;let $=-1;for(;;){const ie=["count="+_];$==-1?0<_?($=F[0].g,ie.push("ofs="+$)):$=0:ie.push("ofs="+$);let We=!0;for(let Et=0;Et<_;Et++){let Me=F[Et].g;const Pt=F[Et].map;if(Me-=$,0>Me)$=Math.max(0,F[Et].g-100),We=!1;else try{yu(Pt,ie,"req"+Me+"_")}catch{T&&T(Pt)}}if(We){T=ie.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,T}function cs(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;je||oe(),se||(je(),se=!0),de.add(m,u),u.v=0}}function ho(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Mn(I(u.Fa,u),wu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Mn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),qn(this),vu(this))};function Fa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function vu(u){u.g=new jn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=gn(u.qa);He(m,"RID","rpc"),He(m,"SID",u.K),He(m,"AID",u.T),He(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&He(m,"TO",u.ja),He(m,"TYPE","xmlhttp"),Or(u,m),u.m&&u.o&&fi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ci(gn(m)),_.m=null,_.P=!0,xa(_,u)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),ho(this),ct(19))};function fo(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function po(u,m){var _=null;if(u.g==m){fo(u),Fa(u),u.g=null;var T=2}else if(Xt(u.h,m))_=m.D,cu(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;T=es(),wt(T,new Js(T,_)),cr(u)}else cs(u);else if(F=m.s,F==3||F==0&&0<m.X||!(T==1&&Xh(u,m)||T==2&&ho(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),F){case 1:Lr(u,5);break;case 4:Lr(u,10);break;case 3:Lr(u,6);break;default:Lr(u,2)}}}function wu(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Lr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),T=u.Xa;const F=!T;T=new Nr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||as(T,"https"),ci(T),F?Gh(T.toString(),_):gu(T.toString(),_)}else ct(2);u.G=0,u.l&&u.l.sa(m),Eu(u),uo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Eu(u){if(u.G=0,u.ka=[],u.l){const m=hu(u.h);(m.length!=0||u.i.length!=0)&&(O(u.ka,m),O(u.ka,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.ra()}}function Tu(u,m,_){var T=_ instanceof Nr?gn(_):new Nr(_);if(T.g!="")m&&(T.g=m+"."+T.g),li(T,T.s);else{var F=d.location;T=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var $=new Nr(null);T&&as($,T),m&&($.g=m),F&&li($,F),_&&($.l=_),T=$}return _=u.D,m=u.ya,_&&m&&He(T,_,m),He(T,"VER",u.la),Or(u,T),T}function Iu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new Dr({eb:_})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ua(){}n=Ua.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function mo(){}mo.prototype.g=function(u,m){return new Jt(u,m)};function Jt(u,m){vt.call(this),this.g=new Ma(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new hr(this)}V(Jt,vt),Jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Jt.prototype.close=function(){Ot(this.g)},Jt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=Ta(u),u=_);m.i.push(new lu(m.Ya++,u)),m.G==3&&cr(m)},Jt.prototype.N=function(){this.g.l=null,delete this.j,Ot(this.g),delete this.g,Jt.aa.N.call(this)};function Su(u){sr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Su,sr);function Ru(){Xs.call(this),this.status=1}V(Ru,Xs);function hr(u){this.g=u}V(hr,Ua),hr.prototype.ua=function(){wt(this.g,"a")},hr.prototype.ta=function(u){wt(this.g,new Su(u))},hr.prototype.sa=function(u){wt(this.g,new Ru)},hr.prototype.ra=function(){wt(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,Jt.prototype.send=Jt.prototype.o,Jt.prototype.open=Jt.prototype.m,Jt.prototype.close=Jt.prototype.close,Kw=function(){return new mo},Hw=function(){return es()},qw=or,dp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eo.NO_ERROR=0,eo.TIMEOUT=8,eo.HTTP_ERROR=6,Fc=eo,iu.COMPLETE="complete",Ww=iu,Ys.EventType=Rn,Rn.OPEN="a",Rn.CLOSE="b",Rn.ERROR="c",Rn.MESSAGE="d",vt.prototype.listen=vt.prototype.K,ml=Ys,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,$w=Ze}).apply(typeof Tc<"u"?Tc:typeof self<"u"?self:typeof window<"u"?window:{});const hv="@firebase/firestore";/**
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
 */let ha="10.14.0";/**
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
 */const Vs=new $p("@firebase/firestore");function cl(){return Vs.logLevel}function pe(n,...e){if(Vs.logLevel<=Le.DEBUG){const t=e.map(rm);Vs.debug(`Firestore (${ha}): ${n}`,...t)}}function Jr(n,...e){if(Vs.logLevel<=Le.ERROR){const t=e.map(rm);Vs.error(`Firestore (${ha}): ${n}`,...t)}}function ea(n,...e){if(Vs.logLevel<=Le.WARN){const t=e.map(rm);Vs.warn(`Firestore (${ha}): ${n}`,...t)}}function rm(n){if(typeof n=="string")return n;try{/**
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
 */function Te(n="Unexpected state"){const e=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+n;throw Jr(e),new Error(e)}function qe(n,e){n||Te()}function Re(n,e){return n}/**
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
 */class Bi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Gw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ht.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){qe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Bi,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Bi)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(qe(typeof i.accessToken=="string"),new Gw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string"),new Ht(e)}}class JC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new JC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ek{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){qe(this.o===void 0);const i=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(qe(typeof t.token=="string"),this.R=t.token,new ek(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Qw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=nk(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function ze(n,e){return n<e?-1:n>e?1:0}function ta(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class Se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Se(e)}static min(){return new Se(new St(0,0))}static max(){return new Se(new St(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ll{constructor(e,t,i){t===void 0?t=0:t>e.length&&Te(),i===void 0?i=e.length-t:i>e.length-t&&Te(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ll.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ll?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),c=t.get(o);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Je extends Ll{construct(e,t,i){return new Je(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ce(G.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const rk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Ll{construct(e,t,i){return new Ft(e,t,i)}static isValidIdentifier(e){return rk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ce(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ce(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new ce(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(t)}static emptyPath(){return new Ft([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}function ik(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(i===1e9?new St(t+1,0):new St(t,i));return new Wi(o,ye.empty(),e)}function sk(n){return new Wi(n.readTime,n.key,-1)}class Wi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Wi(Se.min(),ye.empty(),-1)}static max(){return new Wi(Se.max(),ye.empty(),-1)}}function ok(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
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
 */const ak="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yl(n){if(n.code!==G.FAILED_PRECONDITION||n.message!==ak)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Z.reject(t)}static resolve(e){return new Z((t,i)=>{t(e)})}static reject(e){return new Z((t,i)=>{i(e)})}static waitFor(e){return new Z((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Z.resolve(!1);for(const i of e)t=t.next(o=>o?Z.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Z((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Z((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function uk(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class im{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}im.oe=-1;function kh(n){return n==null}function oh(n){return n===0&&1/n==-1/0}function ck(n){return typeof n=="number"&&Number.isInteger(n)&&!oh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function dv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $s(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class st{constructor(e,t){this.comparator=e,this.root=t||Mt.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ic(this.root,e,this.comparator,!0)}}class Ic{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Mt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Mt.RED,this.left=o??Mt.EMPTY,this.right=l??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Mt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Mt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Te();const e=this.left.check();if(e!==this.right.check())throw Te();return e+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te()}get value(){throw Te()}get color(){throw Te()}get left(){throw Te()}get right(){throw Te()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Mt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fv(this.data.getIterator())}getIteratorFrom(e){return new fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ut(this.comparator);return t.data=e,t}}class fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class In{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new In([])}unionWith(e){let t=new Ut(Ft.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ta(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Xw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Xw("Invalid base64 string: "+l):l}}(e);return new jt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new jt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qi(n){if(qe(!!n),typeof n=="string"){let e=0;const t=hk.exec(n);if(qe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ms(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */function sm(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function om(n){const e=n.mapValue.fields.__previous_value__;return sm(e)?om(e):e}function Vl(n){const e=qi(n.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
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
 */class dk{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class Ml{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ml&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sc={mapValue:{}};function Fs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sm(n)?4:pk(n)?9007199254740991:fk(n)?10:11:Te()}function Rr(n,e){if(n===e)return!0;const t=Fs(n);if(t!==Fs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vl(n).isEqual(Vl(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=qi(o.timestampValue),d=qi(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Ms(o.bytesValue).isEqual(Ms(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=dt(o.doubleValue),d=dt(l.doubleValue);return c===d?oh(c)===oh(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return ta(n.arrayValue.values||[],e.arrayValue.values||[],Rr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(dv(c)!==dv(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Rr(c[p],d[p])))return!1;return!0}(n,e);default:return Te()}}function Fl(n,e){return(n.values||[]).find(t=>Rr(t,e))!==void 0}function na(n,e){if(n===e)return 0;const t=Fs(n),i=Fs(e);if(t!==i)return ze(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=dt(l.integerValue||l.doubleValue),p=dt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return pv(n.timestampValue,e.timestampValue);case 4:return pv(Vl(n),Vl(e));case 5:return ze(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Ms(l),p=Ms(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=ze(d[y],p[y]);if(v!==0)return v}return ze(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=ze(dt(l.latitude),dt(c.latitude));return d!==0?d:ze(dt(l.longitude),dt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return mv(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const E=l.fields||{},I=c.fields||{},x=(d=E.value)===null||d===void 0?void 0:d.arrayValue,V=(p=I.value)===null||p===void 0?void 0:p.arrayValue,j=ze(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((v=V==null?void 0:V.values)===null||v===void 0?void 0:v.length)||0);return j!==0?j:mv(x,V)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===Sc.mapValue&&c===Sc.mapValue)return 0;if(l===Sc.mapValue)return 1;if(c===Sc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let E=0;E<p.length&&E<v.length;++E){const I=ze(p[E],v[E]);if(I!==0)return I;const x=na(d[p[E]],y[v[E]]);if(x!==0)return x}return ze(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Te()}}function pv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=qi(n),i=qi(e),o=ze(t.seconds,i.seconds);return o!==0?o:ze(t.nanos,i.nanos)}function mv(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=na(t[o],i[o]);if(l)return l}return ze(t.length,i.length)}function ra(n){return fp(n)}function fp(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=qi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ms(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=fp(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${fp(t.fields[c])}`;return o+"}"}(n.mapValue):Te()}function gv(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function pp(n){return!!n&&"integerValue"in n}function am(n){return!!n&&"arrayValue"in n}function yv(n){return!!n&&"nullValue"in n}function _v(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Uc(n){return!!n&&"mapValue"in n}function fk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function El(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $s(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=El(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=El(n.arrayValue.values[t]);return e}return Object.assign({},n)}function pk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Uc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=El(t)}setAll(e){let t=Ft.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=El(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());Uc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];Uc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){$s(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new dn(El(this.value))}}function Jw(n){const e=[];return $s(n.fields,(t,i)=>{const o=new Ft([t]);if(Uc(i)){const l=Jw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new In(e)}/**
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
 */class Kt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Kt(e,0,Se.min(),Se.min(),Se.min(),dn.empty(),0)}static newFoundDocument(e,t,i,o){return new Kt(e,1,t,Se.min(),i,o,0)}static newNoDocument(e,t){return new Kt(e,2,t,Se.min(),Se.min(),dn.empty(),0)}static newUnknownDocument(e,t){return new Kt(e,3,t,Se.min(),Se.min(),dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ah{constructor(e,t){this.position=e,this.inclusive=t}}function vv(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=na(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function wv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Rr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ul{constructor(e,t="asc"){this.field=e,this.dir=t}}function mk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zw{}class _t extends Zw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new yk(e,t,i):t==="array-contains"?new wk(e,i):t==="in"?new Ek(e,i):t==="not-in"?new Tk(e,i):t==="array-contains-any"?new Ik(e,i):new _t(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new _k(e,i):new vk(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(na(t,this.value)):t!==null&&Fs(this.value)===Fs(t)&&this.matchesComparison(na(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rr extends Zw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rr(e,t)}matches(e){return eE(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eE(n){return n.op==="and"}function tE(n){return gk(n)&&eE(n)}function gk(n){for(const e of n.filters)if(e instanceof rr)return!1;return!0}function mp(n){if(n instanceof _t)return n.field.canonicalString()+n.op.toString()+ra(n.value);if(tE(n))return n.filters.map(e=>mp(e)).join(",");{const e=n.filters.map(t=>mp(t)).join(",");return`${n.op}(${e})`}}function nE(n,e){return n instanceof _t?function(i,o){return o instanceof _t&&i.op===o.op&&i.field.isEqual(o.field)&&Rr(i.value,o.value)}(n,e):n instanceof rr?function(i,o){return o instanceof rr&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&nE(c,o.filters[d]),!0):!1}(n,e):void Te()}function rE(n){return n instanceof _t?function(t){return`${t.field.canonicalString()} ${t.op} ${ra(t.value)}`}(n):n instanceof rr?function(t){return t.op.toString()+" {"+t.getFilters().map(rE).join(" ,")+"}"}(n):"Filter"}class yk extends _t{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class _k extends _t{constructor(e,t){super(e,"in",t),this.keys=iE("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vk extends _t{constructor(e,t){super(e,"not-in",t),this.keys=iE("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function iE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class wk extends _t{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return am(t)&&Fl(t.arrayValue,this.value)}}class Ek extends _t{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fl(this.value.arrayValue,t)}}class Tk extends _t{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Fl(this.value.arrayValue,t)}}class Ik extends _t{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!am(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Fl(this.value.arrayValue,i))}}/**
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
 */class Sk{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function Ev(n,e=null,t=[],i=[],o=null,l=null,c=null){return new Sk(n,e,t,i,o,l,c)}function lm(n){const e=Re(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>mp(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),kh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>ra(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>ra(i)).join(",")),e.ue=t}return e.ue}function um(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!wv(n.startAt,e.startAt)&&wv(n.endAt,e.endAt)}function gp(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class da{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rk(n,e,t,i,o,l,c,d){return new da(n,e,t,i,o,l,c,d)}function cm(n){return new da(n)}function Tv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sE(n){return n.collectionGroup!==null}function Tl(n){const e=Re(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ut(Ft.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Ul(l,i))}),t.has(Ft.keyField().canonicalString())||e.ce.push(new Ul(Ft.keyField(),i))}return e.ce}function Tr(n){const e=Re(n);return e.le||(e.le=Ak(e,Tl(n))),e.le}function Ak(n,e){if(n.limitType==="F")return Ev(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Ul(o.field,l)});const t=n.endAt?new ah(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ah(n.startAt.position,n.startAt.inclusive):null;return Ev(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function yp(n,e){const t=n.filters.concat([e]);return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lh(n,e,t){return new da(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xh(n,e){return um(Tr(n),Tr(e))&&n.limitType===e.limitType}function oE(n){return`${lm(Tr(n))}|lt:${n.limitType}`}function Uo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>rE(o)).join(", ")}]`),kh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>ra(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>ra(o)).join(",")),`Target(${i})`}(Tr(n))}; limitType=${n.limitType})`}function Nh(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Tl(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=vv(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,Tl(i),o)||i.endAt&&!function(c,d,p){const y=vv(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,Tl(i),o))}(n,e)}function Pk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function aE(n){return(e,t)=>{let i=!1;for(const o of Tl(n)){const l=Ck(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function Ck(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?na(p,y):Te()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Te()}}/**
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
 */class fa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){$s(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
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
 */const kk=new st(ye.comparator);function Zr(){return kk}const lE=new st(ye.comparator);function gl(...n){let e=lE;for(const t of n)e=e.insert(t.key,t);return e}function uE(n){let e=lE;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ps(){return Il()}function cE(){return Il()}function Il(){return new fa(n=>n.toString(),(n,e)=>n.isEqual(e))}const xk=new st(ye.comparator),Nk=new Ut(ye.comparator);function be(...n){let e=Nk;for(const t of n)e=e.add(t);return e}const Dk=new Ut(ze);function bk(){return Dk}/**
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
 */function hm(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oh(e)?"-0":e}}function hE(n){return{integerValue:""+n}}function Ok(n,e){return ck(e)?hE(e):hm(n,e)}/**
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
 */class Dh{constructor(){this._=void 0}}function Lk(n,e,t){return n instanceof uh?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&sm(l)&&(l=om(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof jl?fE(n,e):n instanceof Bl?pE(n,e):function(o,l){const c=dE(o,l),d=Iv(c)+Iv(o.Pe);return pp(c)&&pp(o.Pe)?hE(d):hm(o.serializer,d)}(n,e)}function Vk(n,e,t){return n instanceof jl?fE(n,e):n instanceof Bl?pE(n,e):t}function dE(n,e){return n instanceof ch?function(i){return pp(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class uh extends Dh{}class jl extends Dh{constructor(e){super(),this.elements=e}}function fE(n,e){const t=mE(e);for(const i of n.elements)t.some(o=>Rr(o,i))||t.push(i);return{arrayValue:{values:t}}}class Bl extends Dh{constructor(e){super(),this.elements=e}}function pE(n,e){let t=mE(e);for(const i of n.elements)t=t.filter(o=>!Rr(o,i));return{arrayValue:{values:t}}}class ch extends Dh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Iv(n){return dt(n.integerValue||n.doubleValue)}function mE(n){return am(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Mk(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof jl&&o instanceof jl||i instanceof Bl&&o instanceof Bl?ta(i.elements,o.elements,Rr):i instanceof ch&&o instanceof ch?Rr(i.Pe,o.Pe):i instanceof uh&&o instanceof uh}(n.transform,e.transform)}class Fk{constructor(e,t){this.version=e,this.transformResults=t}}class nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nr}static exists(e){return new nr(void 0,e)}static updateTime(e){return new nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class bh{}function gE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dm(n.key,nr.none()):new Jl(n.key,n.data,nr.none());{const t=n.data,i=dn.empty();let o=new Ut(Ft.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Qi(n.key,i,new In(o.toArray()),nr.none())}}function Uk(n,e,t){n instanceof Jl?function(o,l,c){const d=o.value.clone(),p=Rv(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Qi?function(o,l,c){if(!jc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Rv(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(yE(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Sl(n,e,t,i){return n instanceof Jl?function(l,c,d,p){if(!jc(l.precondition,c))return d;const y=l.value.clone(),v=Av(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Qi?function(l,c,d,p){if(!jc(l.precondition,c))return d;const y=Av(l.fieldTransforms,p,c),v=c.data;return v.setAll(yE(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(l,c,d){return jc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function jk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=dE(i.transform,o||null);l!=null&&(t===null&&(t=dn.empty()),t.set(i.field,l))}return t||null}function Sv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&ta(i,o,(l,c)=>Mk(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jl extends bh{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qi extends bh{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function yE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Rv(n,e,t){const i=new Map;qe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,Vk(c,d,t[o]))}return i}function Av(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,Lk(l,c,e))}return i}class dm extends bh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bk extends bh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Uk(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Sl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Sl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=cE();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=gE(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Se.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),be())}isEqual(e){return this.batchId===e.batchId&&ta(this.mutations,e.mutations,(t,i)=>Sv(t,i))&&ta(this.baseMutations,e.baseMutations,(t,i)=>Sv(t,i))}}class fm{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){qe(e.mutations.length===i.length);let o=function(){return xk}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new fm(e,t,i,o)}}/**
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
 */class $k{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var gt,Fe;function qk(n){switch(n){default:return Te();case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0}}function _E(n){if(n===void 0)return Jr("GRPC error has no .code"),G.UNKNOWN;switch(n){case gt.OK:return G.OK;case gt.CANCELLED:return G.CANCELLED;case gt.UNKNOWN:return G.UNKNOWN;case gt.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case gt.INTERNAL:return G.INTERNAL;case gt.UNAVAILABLE:return G.UNAVAILABLE;case gt.UNAUTHENTICATED:return G.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case gt.NOT_FOUND:return G.NOT_FOUND;case gt.ALREADY_EXISTS:return G.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return G.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case gt.ABORTED:return G.ABORTED;case gt.OUT_OF_RANGE:return G.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return G.UNIMPLEMENTED;case gt.DATA_LOSS:return G.DATA_LOSS;default:return Te()}}(Fe=gt||(gt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Hk(){return new TextEncoder}/**
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
 */const Kk=new xs([4294967295,4294967295],0);function Pv(n){const e=Hk().encode(n),t=new zw;return t.update(e),new Uint8Array(t.digest())}function Cv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new xs([t,i],0),new xs([o,l],0)]}class pm{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new yl(`Invalid padding: ${t}`);if(i<0)throw new yl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new yl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new yl(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xs.fromNumber(this.Ie)}Ee(e,t,i){let o=e.add(t.multiply(xs.fromNumber(i)));return o.compare(Kk)===1&&(o=new xs([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Pv(e),[i,o]=Cv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new pm(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ie===0)return;const t=Pv(e),[i,o]=Cv(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class yl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Oh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Zl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Oh(Se.min(),o,new st(ze),Zr(),be())}}class Zl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Zl(i,t,be(),be(),be())}}/**
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
 */class Bc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class vE{constructor(e,t){this.targetId=e,this.me=t}}class wE{constructor(e,t,i=jt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class kv{constructor(){this.fe=0,this.ge=Nv(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),t=be(),i=be();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Te()}}),new Zl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Nv()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,qe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Gk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zr(),this.qe=xv(),this.Qe=new st(ze)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:Te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.ze(o)&&t(o)})}He(e){const t=e.targetId,i=e.me.count,o=this.Je(t);if(o){const l=o.target;if(gp(l))if(i===0){const c=new ye(l.path);this.Ue(t,c,Kt.newNoDocument(c,Se.min()))}else qe(i===1);else{const c=this.Ye(t);if(c!==i){const d=this.Ze(e),p=d?this.Xe(d,e,c):1;if(p!==0){this.je(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,y)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Ms(i).toUint8Array()}catch(p){if(p instanceof Xw)return ea("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new pm(c,o,l)}catch(p){return ea(p instanceof yl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ie===0?null:d}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Le.tt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Ue(t,l,null),o++)}),o}rt(e){const t=new Map;this.Be.forEach((l,c)=>{const d=this.Je(c);if(d){if(l.current&&gp(d.target)){const p=new ye(d.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,Kt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=be();this.qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Je(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Oh(e,t,this.Qe,this.ke,i);return this.ke=Zr(),this.qe=xv(),this.Qe=new st(ze),o}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const o=this.Ge(e);this.it(e,t)?o.Fe(t,1):o.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new kv,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ut(ze),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||pe("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kv),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function xv(){return new st(ye.comparator)}function Nv(){return new st(ye.comparator)}const Qk={asc:"ASCENDING",desc:"DESCENDING"},Yk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xk={and:"AND",or:"OR"};class Jk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function _p(n,e){return n.useProto3Json||kh(e)?e:{value:e}}function hh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function EE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zk(n,e){return hh(n,e.toTimestamp())}function Ir(n){return qe(!!n),Se.fromTimestamp(function(t){const i=qi(t);return new St(i.seconds,i.nanos)}(n))}function mm(n,e){return vp(n,e).canonicalString()}function vp(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function TE(n){const e=Je.fromString(n);return qe(PE(e)),e}function wp(n,e){return mm(n.databaseId,e.path)}function Lf(n,e){const t=TE(e);if(t.get(1)!==n.databaseId.projectId)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ce(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(SE(t))}function IE(n,e){return mm(n.databaseId,e)}function ex(n){const e=TE(n);return e.length===4?Je.emptyPath():SE(e)}function Ep(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function SE(n){return qe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Dv(n,e,t){return{name:wp(n,e),fields:t.value.mapValue.fields}}function tx(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Te()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(qe(v===void 0||typeof v=="string"),jt.fromBase64String(v||"")):(qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array),jt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?G.UNKNOWN:_E(y.code);return new ce(v,y.message||"")}(c);t=new wE(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Lf(n,i.document.name),l=Ir(i.document.updateTime),c=i.document.createTime?Ir(i.document.createTime):Se.min(),d=new dn({mapValue:{fields:i.document.fields}}),p=Kt.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new Bc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Lf(n,i.document),l=i.readTime?Ir(i.readTime):Se.min(),c=Kt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new Bc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Lf(n,i.document),l=i.removedTargetIds||[];t=new Bc([],l,o,null)}else{if(!("filter"in e))return Te();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new Wk(o,l),d=i.targetId;t=new vE(d,c)}}return t}function nx(n,e){let t;if(e instanceof Jl)t={update:Dv(n,e.key,e.value)};else if(e instanceof dm)t={delete:wp(n,e.key)};else if(e instanceof Qi)t={update:Dv(n,e.key,e.data),updateMask:hx(e.fieldMask)};else{if(!(e instanceof Bk))return Te();t={verify:wp(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof uh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof jl)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Bl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof ch)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Te()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Zk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te()}(n,e.precondition)),t}function rx(n,e){return n&&n.length>0?(qe(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?Ir(o.updateTime):Ir(l);return c.isEqual(Se.min())&&(c=Ir(l)),new Fk(c,o.transformResults||[])}(t,e))):[]}function ix(n,e){return{documents:[IE(n,e.path)]}}function sx(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=IE(n,o);const l=function(y){if(y.length!==0)return AE(rr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:jo(I.field),direction:lx(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=_p(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{_t:t,parent:o}}function ox(n){let e=ex(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){qe(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(E){const I=RE(E);return I instanceof rr&&tE(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(E){return E.map(I=>function(V){return new Ul(Bo(V.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(E){let I;return I=typeof E=="object"?E.value:E,kh(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(E){const I=!!E.before,x=E.values||[];return new ah(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(E){const I=!E.before,x=E.values||[];return new ah(x,I)}(t.endAt)),Rk(e,o,c,l,d,"F",p,y)}function ax(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function RE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Bo(t.unaryFilter.field);return _t.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Bo(t.unaryFilter.field);return _t.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Bo(t.unaryFilter.field);return _t.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Bo(t.unaryFilter.field);return _t.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Te()}}(n):n.fieldFilter!==void 0?function(t){return _t.create(Bo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return rr.create(t.compositeFilter.filters.map(i=>RE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Te()}}(t.compositeFilter.op))}(n):Te()}function lx(n){return Qk[n]}function ux(n){return Yk[n]}function cx(n){return Xk[n]}function jo(n){return{fieldPath:n.canonicalString()}}function Bo(n){return Ft.fromServerFormat(n.fieldPath)}function AE(n){return n instanceof _t?function(t){if(t.op==="=="){if(_v(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NAN"}};if(yv(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_v(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NAN"}};if(yv(t.value))return{unaryFilter:{field:jo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jo(t.field),op:ux(t.op),value:t.value}}}(n):n instanceof rr?function(t){const i=t.getFilters().map(o=>AE(o));return i.length===1?i[0]:{compositeFilter:{op:cx(t.op),filters:i}}}(n):Te()}function hx(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function PE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Vi{constructor(e,t,i,o,l=Se.min(),c=Se.min(),d=jt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dx{constructor(e){this.ct=e}}function fx(n){const e=ox({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lh(e,e.limit,"L"):e}/**
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
 */class px{constructor(){this.un=new mx}addToCollectionParentIndex(e,t){return this.un.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(Wi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(Wi.min())}updateCollectionGroup(e,t,i){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class mx{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new Ut(Je.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new Ut(Je.comparator)).toArray()}}/**
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
 */class ia{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ia(0)}static kn(){return new ia(-1)}}/**
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
 */class gx{constructor(){this.changes=new fa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Kt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Z.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class yx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class _x{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&Sl(i.mutation,o,In.empty(),St.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,be()).next(()=>i))}getLocalViewOfDocuments(e,t,i=be()){const o=Ps();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=gl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ps();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,be()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Zr();const c=Il(),d=function(){return Il()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Qi)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),Sl(v.mutation,y,v.mutation.getFieldMask(),St.now())):c.set(y.key,In.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var E;return d.set(y,new yx(v,(E=c.get(y))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Il();let o=new st((c,d)=>c-d),l=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||In.empty();v=d.applyToLocalView(y,v),i.set(p,v);const E=(o.get(d.batchId)||be()).add(p);o=o.insert(d.batchId,E)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,E=cE();v.forEach(I=>{if(!l.has(I)){const x=gE(t.get(I),i.get(I));x!==null&&E.set(I,x),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,E))}return Z.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Z.resolve(Ps());let d=-1,p=l;return c.next(y=>Z.forEach(y,(v,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(v)?Z.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,be())).next(v=>({batchId:d,changes:uE(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=gl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=gl();return this.indexManager.getCollectionParents(e,l).next(d=>Z.forEach(d,p=>{const y=function(E,I){return new da(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((E,I)=>{c=c.insert(E,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Kt.newInvalidDocument(v)))});let d=gl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&Sl(v.mutation,y,In.empty(),St.now()),Nh(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class vx{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Z.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Ir(o.createTime)}}(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:fx(o.bundledQuery),readTime:Ir(o.readTime)}}(t)),Z.resolve()}}/**
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
 */class wx{constructor(){this.overlays=new st(ye.comparator),this.Ir=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ps();return Z.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.ht(e,t,l)}),Z.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Ir.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(i)),Z.resolve()}getOverlaysForCollection(e,t,i){const o=Ps(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Z.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new st((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Ps(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Ps(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Z.resolve(d)}ht(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Ir.get(o.largestBatchId).delete(i.key);this.Ir.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new $k(t,i));let l=this.Ir.get(t);l===void 0&&(l=be(),this.Ir.set(t,l)),this.Ir.set(t,l.add(i.key))}}/**
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
 */class Ex{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}/**
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
 */class gm{constructor(){this.Tr=new Ut(Nt.Er),this.dr=new Ut(Nt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new Nt(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new Nt(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new ye(new Je([])),i=new Nt(t,e),o=new Nt(t,e+1),l=[];return this.dr.forEachInRange([i,o],c=>{this.Vr(c),l.push(c.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new ye(new Je([])),i=new Nt(t,e),o=new Nt(t,e+1);let l=be();return this.dr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Nt(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Nt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return ye.comparator(e.key,t.key)||ze(e.wr,t.wr)}static Ar(e,t){return ze(e.wr,t.wr)||ye.comparator(e.key,t.key)}}/**
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
 */class Tx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ut(Nt.Er)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new zk(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.br=this.br.add(new Nt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Z.resolve(c)}lookupMutationBatch(e,t){return Z.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.vr(i),l=o<0?0:o;return Z.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Nt(t,0),o=new Nt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([i,o],c=>{const d=this.Dr(c.wr);l.push(d)}),Z.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ut(ze);return t.forEach(o=>{const l=new Nt(o,0),c=new Nt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,c],d=>{i=i.add(d.wr)})}),Z.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new Nt(new ye(l),0);let d=new Ut(ze);return this.br.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.wr)),!0)},c),Z.resolve(this.Cr(d))}Cr(e){const t=[];return e.forEach(i=>{const o=this.Dr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){qe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return Z.forEach(t.mutations,o=>{const l=new Nt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new Nt(t,0),o=this.br.firstAfterOrEqual(i);return Z.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ix{constructor(e){this.Mr=e,this.docs=function(){return new st(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Z.resolve(i?i.document.mutableCopy():Kt.newInvalidDocument(t))}getEntries(e,t){let i=Zr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Kt.newInvalidDocument(o))}),Z.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Zr();const c=t.path,d=new ye(c.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||ok(sk(v),i)<=0||(o.has(v.key)||Nh(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Z.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Te()}Or(e,t){return Z.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Sx(this)}getSize(e){return Z.resolve(this.size)}}class Sx extends gx{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(i)}),Z.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class Rx{constructor(e){this.persistence=e,this.Nr=new fa(t=>lm(t),um),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gm,this.targetCount=0,this.kr=ia.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,o)=>t(o)),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),Z.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ia(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.Kn(t),Z.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Nr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Nr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Z.waitFor(l).next(()=>o)}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return Z.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),Z.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Z.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return Z.resolve(i)}containsKey(e,t){return Z.resolve(this.Br.containsKey(t))}}/**
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
 */class Ax{constructor(e,t){this.qr={},this.overlays={},this.Qr=new im(0),this.Kr=!1,this.Kr=!0,this.$r=new Ex,this.referenceDelegate=e(this),this.Ur=new Rx(this),this.indexManager=new px,this.remoteDocumentCache=function(o){return new Ix(o)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new dx(t),this.Gr=new vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new wx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new Tx(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){pe("MemoryPersistence","Starting transaction:",e);const o=new Px(this.Qr.next());return this.referenceDelegate.zr(),i(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Z.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class Px extends lk{constructor(e){super(),this.currentSequenceNumber=e}}class ym{constructor(e){this.persistence=e,this.Jr=new gm,this.Yr=null}static Zr(e){return new ym(e)}get Xr(){if(this.Yr)return this.Yr;throw Te()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),Z.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.Xr,i=>{const o=ye.fromPath(i);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Se.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Z.or([()=>Z.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class _m{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=o}static Wi(e,t){let i=be(),o=be();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new _m(e,t.fromCache,i,o)}}/**
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
 */class Cx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class kx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return mR()?8:uk(Qt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Yi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.Zi(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new Cx;return this.Xi(e,t,c).next(d=>{if(l.result=d,this.zi)return this.es(e,t,c,d.size)})}).next(()=>l.result)}es(e,t,i,o){return i.documentReadCount<this.ji?(cl()<=Le.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Z.resolve()):(cl()<=Le.DEBUG&&pe("QueryEngine","Query:",Uo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Hi*o?(cl()<=Le.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tr(t))):Z.resolve())}Yi(e,t){if(Tv(t))return Z.resolve(null);let i=Tr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=lh(t,null,"F"),i=Tr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=be(...l);return this.Ji.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.ts(t,d);return this.ns(t,y,c,p.readTime)?this.Yi(e,lh(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,i,o){return Tv(t)||o.isEqual(Se.min())?Z.resolve(null):this.Ji.getDocuments(e,i).next(l=>{const c=this.ts(t,l);return this.ns(t,c,i,o)?Z.resolve(null):(cl()<=Le.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Uo(t)),this.rs(e,c,t,ik(o,-1)).next(d=>d))})}ts(e,t){let i=new Ut(aE(e));return t.forEach((o,l)=>{Nh(e,l)&&(i=i.add(l))}),i}ns(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,i){return cl()<=Le.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Uo(t)),this.Ji.getDocumentsMatchingQuery(e,t,Wi.min(),i)}rs(e,t,i,o){return this.Ji.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */class xx{constructor(e,t,i,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new st(ze),this._s=new fa(l=>lm(l),um),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _x(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Nx(n,e,t,i){return new xx(n,e,t,i)}async function CE(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=be();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({hs:y,removedBatchIds:c,addedBatchIds:d}))})})}function Dx(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const E=y.batch,I=E.keys();let x=Z.resolve();return I.forEach(V=>{x=x.next(()=>v.getEntry(p,V)).next(j=>{const O=y.docVersions.get(V);qe(O!==null),j.version.compareTo(O)<0&&(E.applyToRemoteDocument(j,y),j.isValidDocument()&&(j.setReadTime(y.commitVersion),v.addEntry(j)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=be();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function kE(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function bx(n,e){const t=Re(n),i=e.snapshotVersion;let o=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});o=t.os;const d=[];e.targetChanges.forEach((v,E)=>{const I=o.get(E);if(!I)return;d.push(t.Ur.removeMatchingKeys(l,v.removedDocuments,E).next(()=>t.Ur.addMatchingKeys(l,v.addedDocuments,E)));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?x=x.withResumeToken(jt.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(E,x),function(j,O,H){return j.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,x,v)&&d.push(t.Ur.updateTargetData(l,x))});let p=Zr(),y=be();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(Ox(l,c,e.documentUpdates).next(v=>{p=v.Ps,y=v.Is})),!i.isEqual(Se.min())){const v=t.Ur.getLastRemoteSnapshotVersion(l).next(E=>t.Ur.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Z.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.os=o,l))}function Ox(n,e,t){let i=be(),o=be();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Zr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Se.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):pe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Ps:c,Is:o}})}function Lx(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Vx(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Ur.getTargetData(i,e).next(l=>l?(o=l,Z.resolve(o)):t.Ur.allocateTargetId(i).next(c=>(o=new Vi(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.os.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function Tp(n,e,t){const i=Re(n),o=i.os.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Xl(c))throw c;pe("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.os=i.os.remove(e),i._s.delete(o.target)}function bv(n,e,t){const i=Re(n);let o=Se.min(),l=be();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const E=Re(p),I=E._s.get(v);return I!==void 0?Z.resolve(E.os.get(I)):E.Ur.getTargetData(y,v)}(i,c,Tr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.ss.getDocumentsMatchingQuery(c,e,t?o:Se.min(),t?l:be())).next(d=>(Mx(i,Pk(e),d),{documents:d,Ts:l})))}function Mx(n,e,t){let i=n.us.get(e)||Se.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.us.set(e,i)}class Ov{constructor(){this.activeTargetIds=bk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Fx{constructor(){this.so=new Ov,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ov,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ux{_o(e){}shutdown(){}}/**
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
 */class Lv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rc=null;function Vf(){return Rc===null?Rc=function(){return 268435456+Math.round(2147483648*Math.random())}():Rc++,"0x"+Rc.toString(16)}/**
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
 */const jx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Bx{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const qt="WebChannelConnection";class zx extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,i,o,l,c){const d=Vf(),p=this.xo(t,i.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,c),this.No(t,p,y,o).then(v=>(pe("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw ea("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}Lo(t,i,o,l,c,d){return this.Mo(t,i,o,l,c)}Oo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ha}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}xo(t,i){const o=jx[t];return`${this.Do}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,o){const l=Vf();return new Promise((c,d)=>{const p=new $w;p.setWithCredentials(!0),p.listenOnce(Ww.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Fc.NO_ERROR:const v=p.getResponseJson();pe(qt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case Fc.TIMEOUT:pe(qt,`RPC '${e}' ${l} timed out`),d(new ce(G.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const E=p.getStatus();if(pe(qt,`RPC '${e}' ${l} failed with status:`,E,"response text:",p.getResponseText()),E>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const V=function(O){const H=O.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(H)>=0?H:G.UNKNOWN}(x.status);d(new ce(V,x.message))}else d(new ce(G.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new ce(G.UNAVAILABLE,"Connection failed."));break;default:Te()}}finally{pe(qt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);pe(qt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Bo(e,t,i){const o=Vf(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Kw(),d=Hw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");pe(qt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const E=c.createWebChannel(v,p);let I=!1,x=!1;const V=new Bx({Io:O=>{x?pe(qt,`Not sending because RPC '${e}' stream ${o} is closed:`,O):(I||(pe(qt,`Opening RPC '${e}' stream ${o} transport.`),E.open(),I=!0),pe(qt,`RPC '${e}' stream ${o} sending:`,O),E.send(O))},To:()=>E.close()}),j=(O,H,J)=>{O.listen(H,K=>{try{J(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return j(E,ml.EventType.OPEN,()=>{x||(pe(qt,`RPC '${e}' stream ${o} transport opened.`),V.yo())}),j(E,ml.EventType.CLOSE,()=>{x||(x=!0,pe(qt,`RPC '${e}' stream ${o} transport closed`),V.So())}),j(E,ml.EventType.ERROR,O=>{x||(x=!0,ea(qt,`RPC '${e}' stream ${o} transport errored:`,O),V.So(new ce(G.UNAVAILABLE,"The operation could not be completed")))}),j(E,ml.EventType.MESSAGE,O=>{var H;if(!x){const J=O.data[0];qe(!!J);const K=J,ee=K.error||((H=K[0])===null||H===void 0?void 0:H.error);if(ee){pe(qt,`RPC '${e}' stream ${o} received error:`,ee);const le=ee.status;let re=function(P){const N=gt[P];if(N!==void 0)return _E(N)}(le),A=ee.message;re===void 0&&(re=G.INTERNAL,A="Unknown error status: "+le+" with message "+ee.message),x=!0,V.So(new ce(re,A)),E.close()}else pe(qt,`RPC '${e}' stream ${o} received:`,J),V.bo(J)}}),j(d,qw.STAT_EVENT,O=>{O.stat===dp.PROXY?pe(qt,`RPC '${e}' stream ${o} detected buffering proxy`):O.stat===dp.NOPROXY&&pe(qt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Mf(){return typeof document<"u"?document:null}/**
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
 */function Lh(n){return new Jk(n,!0)}/**
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
 */class xE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-i);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class NE{constructor(e,t,i,o,l,c,d,p){this.ui=e,this.Ho=i,this.Jo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xE(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Jr(t.toString()),Jr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Yo===t&&this.P_(i,o)},i=>{e(()=>{const o=new ce(G.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(o)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{i(()=>this.I_(o))}),this.stream.onMessage(o=>{i(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $x extends NE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=tx(this.serializer,e),i=function(l){if(!("targetChange"in l))return Se.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Se.min():c.readTime?Ir(c.readTime):Se.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=Ep(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=gp(p)?{documents:ix(l,p)}:{query:sx(l,p)._t},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=EE(l,c.resumeToken);const y=_p(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Se.min())>0){d.readTime=hh(l,c.snapshotVersion.toTimestamp());const y=_p(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=ax(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=Ep(this.serializer),t.removeTarget=e,this.a_(t)}}class Wx extends NE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return qe(!!e.streamToken),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){qe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=rx(e.writeResults,e.commitTime),i=Ir(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=Ep(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>nx(this.serializer,i))};this.a_(t)}}/**
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
 */class qx extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Mo(e,vp(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ce(G.UNKNOWN,l.toString())})}Lo(e,t,i,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Lo(e,vp(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ce(G.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Hx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Jr(t),this.D_=!1):pe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Kx{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(c=>{i.enqueueAndForget(async()=>{Ws(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Re(p);y.L_.add(4),await eu(y),y.q_.set("Unknown"),y.L_.delete(4),await Vh(y)}(this))})}),this.q_=new Hx(i,o)}}async function Vh(n){if(Ws(n))for(const e of n.B_)await e(!0)}async function eu(n){for(const e of n.B_)await e(!1)}function DE(n,e){const t=Re(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Tm(t)?Em(t):pa(t).r_()&&wm(t,e))}function vm(n,e){const t=Re(n),i=pa(t);t.N_.delete(e),i.r_()&&bE(t,e),t.N_.size===0&&(i.r_()?i.o_():Ws(t)&&t.q_.set("Unknown"))}function wm(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}pa(n).A_(e)}function bE(n,e){n.Q_.xe(e),pa(n).R_(e)}function Em(n){n.Q_=new Gk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),pa(n).start(),n.q_.v_()}function Tm(n){return Ws(n)&&!pa(n).n_()&&n.N_.size>0}function Ws(n){return Re(n).L_.size===0}function OE(n){n.Q_=void 0}async function Gx(n){n.q_.set("Online")}async function Qx(n){n.N_.forEach((e,t)=>{wm(n,e)})}async function Yx(n,e){OE(n),Tm(n)?(n.q_.M_(e),Em(n)):n.q_.set("Unknown")}async function Xx(n,e,t){if(n.q_.set("Online"),e instanceof wE&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.N_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.N_.delete(d),o.Q_.removeTarget(d))}(n,e)}catch(i){pe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await dh(n,i)}else if(e instanceof Bc?n.Q_.Ke(e):e instanceof vE?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Se.min()))try{const i=await kE(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.Q_.rt(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.N_.get(y);v&&l.N_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.N_.get(p);if(!v)return;l.N_.set(p,v.withResumeToken(jt.EMPTY_BYTE_STRING,v.snapshotVersion)),bE(l,p);const E=new Vi(v.target,p,y,v.sequenceNumber);wm(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){pe("RemoteStore","Failed to raise snapshot:",i),await dh(n,i)}}async function dh(n,e,t){if(!Xl(e))throw e;n.L_.add(1),await eu(n),n.q_.set("Offline"),t||(t=()=>kE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Vh(n)})}function LE(n,e){return e().catch(t=>dh(n,t,e))}async function Mh(n){const e=Re(n),t=Hi(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Jx(e);)try{const o=await Lx(e.localStore,i);if(o===null){e.O_.length===0&&t.o_();break}i=o.batchId,Zx(e,o)}catch(o){await dh(e,o)}VE(e)&&ME(e)}function Jx(n){return Ws(n)&&n.O_.length<10}function Zx(n,e){n.O_.push(e);const t=Hi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function VE(n){return Ws(n)&&!Hi(n).n_()&&n.O_.length>0}function ME(n){Hi(n).start()}async function eN(n){Hi(n).p_()}async function tN(n){const e=Hi(n);for(const t of n.O_)e.m_(t.mutations)}async function nN(n,e,t){const i=n.O_.shift(),o=fm.from(i,e,t);await LE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Mh(n)}async function rN(n,e){e&&Hi(n).V_&&await async function(i,o){if(function(c){return qk(c)&&c!==G.ABORTED}(o.code)){const l=i.O_.shift();Hi(i).s_(),await LE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Mh(i)}}(n,e),VE(n)&&ME(n)}async function Vv(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const i=Ws(t);t.L_.add(3),await eu(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Vh(t)}async function iN(n,e){const t=Re(n);e?(t.L_.delete(2),await Vh(t)):e||(t.L_.add(2),await eu(t),t.q_.set("Unknown"))}function pa(n){return n.K_||(n.K_=function(t,i,o){const l=Re(t);return l.w_(),new $x(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:Gx.bind(null,n),Ro:Qx.bind(null,n),mo:Yx.bind(null,n),d_:Xx.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),Tm(n)?Em(n):n.q_.set("Unknown")):(await n.K_.stop(),OE(n))})),n.K_}function Hi(n){return n.U_||(n.U_=function(t,i,o){const l=Re(t);return l.w_(),new Wx(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eN.bind(null,n),mo:rN.bind(null,n),f_:tN.bind(null,n),g_:nN.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Mh(n)):(await n.U_.stop(),n.O_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Im{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new Im(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sm(n,e){if(Jr("AsyncQueue",`${e}: ${n}`),Xl(n))return new ce(G.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ho{constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=gl(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new Ho(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ho;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class Mv{constructor(){this.W_=new st(ye.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Te():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class sa{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new sa(e,t,Ho.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class sN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oN{constructor(){this.queries=Fv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const o=Re(t),l=o.queries;o.queries=Fv(),l.forEach((c,d)=>{for(const p of d.j_)p.onError(i)})})(this,new ce(G.ABORTED,"Firestore shutting down"))}}function Fv(){return new fa(n=>oE(n),xh)}async function FE(n,e){const t=Re(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.H_()&&e.J_()&&(i=2):(l=new sN,i=e.J_()?0:1);try{switch(i){case 0:l.z_=await t.onListen(o,!0);break;case 1:l.z_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Sm(c,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.j_.push(e),e.Z_(t.onlineState),l.z_&&e.X_(l.z_)&&Rm(t)}async function UE(n,e){const t=Re(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.j_.indexOf(e);c>=0&&(l.j_.splice(c,1),l.j_.length===0?o=e.J_()?0:1:!l.H_()&&e.J_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function aN(n,e){const t=Re(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.j_)d.X_(o)&&(i=!0);c.z_=o}}i&&Rm(t)}function lN(n,e,t){const i=Re(n),o=i.queries.get(e);if(o)for(const l of o.j_)l.onError(t);i.queries.delete(e)}function Rm(n){n.Y_.forEach(e=>{e.next()})}var Ip,Uv;(Uv=Ip||(Ip={})).ea="default",Uv.Cache="cache";class jE{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new sa(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=sa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ip.Cache}}/**
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
 */class BE{constructor(e){this.key=e}}class zE{constructor(e){this.key=e}}class uN{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=be(),this.mutatedKeys=be(),this.Aa=aE(e),this.Ra=new Ho(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new Mv,o=t?t.Ra:this.Ra;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,E)=>{const I=o.get(v),x=Nh(this.query,E)?E:null,V=!!I&&this.mutatedKeys.has(I.key),j=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let O=!1;I&&x?I.data.isEqual(x.data)?V!==j&&(i.track({type:3,doc:x}),O=!0):this.ga(I,x)||(i.track({type:2,doc:x}),O=!0,(p&&this.Aa(x,p)>0||y&&this.Aa(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),O=!0):I&&!x&&(i.track({type:1,doc:I}),O=!0,(p||y)&&(d=!0)),O&&(x?(c=c.add(x),l=j?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ra:c,fa:i,ns:d,mutatedKeys:l}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((v,E)=>function(x,V){const j=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te()}};return j(x)-j(V)}(v.type,E.type)||this.Aa(v.doc,E.doc)),this.pa(i),o=o!=null&&o;const d=t&&!o?this.ya():[],p=this.da.size===0&&this.current&&!o?1:0,y=p!==this.Ea;return this.Ea=p,c.length!==0||y?{snapshot:new sa(this.query,e.Ra,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:d}:{wa:d}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Mv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=be(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new zE(i))}),this.da.forEach(i=>{e.has(i)||t.push(new BE(i))}),t}ba(e){this.Ta=e.Ts,this.da=be();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return sa.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cN{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class hN{constructor(e){this.key=e,this.va=!1}}class dN{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new fa(d=>oE(d),xh),this.Ma=new Map,this.xa=new Set,this.Oa=new st(ye.comparator),this.Na=new Map,this.La=new gm,this.Ba={},this.ka=new Map,this.qa=ia.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fN(n,e,t=!0){const i=GE(n);let o;const l=i.Fa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Da()):o=await $E(i,e,t,!0),o}async function pN(n,e){const t=GE(n);await $E(t,e,!0,!1)}async function $E(n,e,t,i){const o=await Vx(n.localStore,Tr(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await mN(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&DE(n.remoteStore,o),d}async function mN(n,e,t,i,o){n.Ka=(E,I,x)=>async function(j,O,H,J){let K=O.view.ma(H);K.ns&&(K=await bv(j.localStore,O.query,!1).then(({documents:A})=>O.view.ma(A,K)));const ee=J&&J.targetChanges.get(O.targetId),le=J&&J.targetMismatches.get(O.targetId)!=null,re=O.view.applyChanges(K,j.isPrimaryClient,ee,le);return Bv(j,O.targetId,re.wa),re.snapshot}(n,E,I,x);const l=await bv(n.localStore,e,!0),c=new uN(e,l.Ts),d=c.ma(l.documents),p=Zl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);Bv(n,t,y.wa);const v=new cN(e,t,c);return n.Fa.set(e,v),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),y.snapshot}async function gN(n,e,t){const i=Re(n),o=i.Fa.get(e),l=i.Ma.get(o.targetId);if(l.length>1)return i.Ma.set(o.targetId,l.filter(c=>!xh(c,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Tp(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&vm(i.remoteStore,o.targetId),Sp(i,o.targetId)}).catch(Yl)):(Sp(i,o.targetId),await Tp(i.localStore,o.targetId,!0))}async function yN(n,e){const t=Re(n),i=t.Fa.get(e),o=t.Ma.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),vm(t.remoteStore,i.targetId))}async function _N(n,e,t){const i=RN(n);try{const o=await function(c,d){const p=Re(c),y=St.now(),v=d.reduce((x,V)=>x.add(V.key),be());let E,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let V=Zr(),j=be();return p.cs.getEntries(x,v).next(O=>{V=O,V.forEach((H,J)=>{J.isValidDocument()||(j=j.add(H))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,V)).next(O=>{E=O;const H=[];for(const J of d){const K=jk(J,E.get(J.key).overlayedDocument);K!=null&&H.push(new Qi(J.key,K,Jw(K.value.mapValue),nr.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,H,d)}).next(O=>{I=O;const H=O.applyToLocalDocumentSet(E,j);return p.documentOverlayCache.saveOverlays(x,O.batchId,H)})}).then(()=>({batchId:I.batchId,changes:uE(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Ba[c.currentUser.toKey()];y||(y=new st(ze)),y=y.insert(d,p),c.Ba[c.currentUser.toKey()]=y}(i,o.batchId,t),await tu(i,o.changes),await Mh(i.remoteStore)}catch(o){const l=Sm(o,"Failed to persist write");t.reject(l)}}async function WE(n,e){const t=Re(n);try{const i=await bx(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Na.get(l);c&&(qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.va=!0:o.modifiedDocuments.size>0?qe(c.va):o.removedDocuments.size>0&&(qe(c.va),c.va=!1))}),await tu(t,i,e)}catch(i){await Yl(i)}}function jv(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Fa.forEach((l,c)=>{const d=c.view.Z_(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Re(c);p.onlineState=d;let y=!1;p.queries.forEach((v,E)=>{for(const I of E.j_)I.Z_(d)&&(y=!0)}),y&&Rm(p)}(i.eventManager,e),o.length&&i.Ca.d_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function vN(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Na.get(e),l=o&&o.key;if(l){let c=new st(ye.comparator);c=c.insert(l,Kt.newNoDocument(l,Se.min()));const d=be().add(l),p=new Oh(Se.min(),new Map,new st(ze),c,d);await WE(i,p),i.Oa=i.Oa.remove(l),i.Na.delete(e),Am(i)}else await Tp(i.localStore,e,!1).then(()=>Sp(i,e,t)).catch(Yl)}async function wN(n,e){const t=Re(n),i=e.batch.batchId;try{const o=await Dx(t.localStore,e);HE(t,i,null),qE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await tu(t,o)}catch(o){await Yl(o)}}async function EN(n,e,t){const i=Re(n);try{const o=await function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(E=>(qe(E!==null),v=E.keys(),p.mutationQueue.removeMutationBatch(y,E))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);HE(i,e,t),qE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await tu(i,o)}catch(o){await Yl(o)}}function qE(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function HE(n,e,t){const i=Re(n);let o=i.Ba[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ba[i.currentUser.toKey()]=o}}function Sp(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||KE(n,i)})}function KE(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(vm(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),Am(n))}function Bv(n,e,t){for(const i of t)i instanceof BE?(n.La.addReference(i.key,e),TN(n,i)):i instanceof zE?(pe("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||KE(n,i.key)):Te()}function TN(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(pe("SyncEngine","New document in limbo: "+t),n.xa.add(i),Am(n))}function Am(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new ye(Je.fromString(e)),i=n.qa.next();n.Na.set(i,new hN(t)),n.Oa=n.Oa.insert(t,i),DE(n.remoteStore,new Vi(Tr(cm(t.path)),i,"TargetPurposeLimboResolution",im.oe))}}async function tu(n,e,t){const i=Re(n),o=[],l=[],c=[];i.Fa.isEmpty()||(i.Fa.forEach((d,p)=>{c.push(i.Ka(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const E=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(y){o.push(y);const E=_m.Wi(p.targetId,y);l.push(E)}}))}),await Promise.all(c),i.Ca.d_(o),await async function(p,y){const v=Re(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>Z.forEach(y,I=>Z.forEach(I.$i,x=>v.persistence.referenceDelegate.addReference(E,I.targetId,x)).next(()=>Z.forEach(I.Ui,x=>v.persistence.referenceDelegate.removeReference(E,I.targetId,x)))))}catch(E){if(!Xl(E))throw E;pe("LocalStore","Failed to update sequence numbers: "+E)}for(const E of y){const I=E.targetId;if(!E.fromCache){const x=v.os.get(I),V=x.snapshotVersion,j=x.withLastLimboFreeSnapshotVersion(V);v.os=v.os.insert(I,j)}}}(i.localStore,l))}async function IN(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const i=await CE(t.localStore,e);t.currentUser=e,function(l,c){l.ka.forEach(d=>{d.forEach(p=>{p.reject(new ce(G.CANCELLED,c))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await tu(t,i.hs)}}function SN(n,e){const t=Re(n),i=t.Na.get(e);if(i&&i.va)return be().add(i.key);{let o=be();const l=t.Ma.get(e);if(!l)return o;for(const c of l){const d=t.Fa.get(c);o=o.unionWith(d.view.Va)}return o}}function GE(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=WE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vN.bind(null,e),e.Ca.d_=aN.bind(null,e.eventManager),e.Ca.$a=lN.bind(null,e.eventManager),e}function RN(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EN.bind(null,e),e}class fh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Lh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Nx(this.persistence,new kx,e.initialUser,this.serializer)}Ga(e){return new Ax(ym.Zr,this.serializer)}Wa(e){return new Fx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fh.provider={build:()=>new fh};class Rp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>jv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const t=Lh(e.databaseInfo.databaseId),i=function(l){return new zx(l)}(e.databaseInfo);return function(l,c,d,p){return new qx(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new Kx(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>jv(this.syncEngine,t,0),function(){return Lv.D()?new Lv:new Ux}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const E=new dN(o,l,c,d,p,y);return v&&(E.Qa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Re(o);pe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await eu(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Rp.provider={build:()=>new Rp};/**
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
 */class QE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Jr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class AN{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ht.UNAUTHENTICATED,this.clientId=Qw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{pe("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(pe("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Sm(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ff(n,e){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await CE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function zv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await PN(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Vv(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>Vv(e.remoteStore,o)),n._onlineComponents=e}async function PN(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ff(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;ea("Error using user provided cache. Falling back to memory cache: "+t),await Ff(n,new fh)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),await Ff(n,new fh);return n._offlineComponents}async function YE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),await zv(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),await zv(n,new Rp))),n._onlineComponents}function CN(n){return YE(n).then(e=>e.syncEngine)}async function Ap(n){const e=await YE(n),t=e.eventManager;return t.onListen=fN.bind(null,e.syncEngine),t.onUnlisten=gN.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=yN.bind(null,e.syncEngine),t}function kN(n,e,t={}){const i=new Bi;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new QE({next:I=>{v.Za(),c.enqueueAndForget(()=>UE(l,E)),I.fromCache&&p.source==="server"?y.reject(new ce(G.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),E=new jE(d,v,{includeMetadataChanges:!0,_a:!0});return FE(l,E)}(await Ap(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function XE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const $v=new Map;/**
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
 */function JE(n,e,t){if(!t)throw new ce(G.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function xN(n,e,t,i){if(e===!0&&i===!0)throw new ce(G.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Wv(n){if(!ye.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qv(n){if(ye.isDocumentKey(n))throw new ce(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Te()}function Sr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ce(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fh(n);throw new ce(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Hv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ce(G.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Uh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new QC;switch(i.type){case"firstParty":return new ZC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ce(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=$v.get(t);i&&(pe("ComponentProvider","Removing Datastore"),$v.delete(t),i.terminate())}(this),Promise.resolve()}}function NN(n,e,t,i={}){var o;const l=(n=Sr(n,Uh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ht.MOCK_USER;else{d=nw(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new ce(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ht(y)}n._authCredentials=new YC(new Gw(d,p))}}/**
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
 */class ri{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ri(this.firestore,e,this._query)}}class fn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class zi extends ri{constructor(e,t,i){super(e,t,cm(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new ye(e))}withConverter(e){return new zi(this.firestore,e,this._path)}}function Rl(n,e,...t){if(n=it(n),JE("collection","path",e),n instanceof Uh){const i=Je.fromString(e,...t);return qv(i),new zi(n,null,i)}{if(!(n instanceof fn||n instanceof zi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return qv(i),new zi(n.firestore,null,i)}}function Pp(n,e,...t){if(n=it(n),arguments.length===1&&(e=Qw.newId()),JE("doc","path",e),n instanceof Uh){const i=Je.fromString(e,...t);return Wv(i),new fn(n,null,new ye(i))}{if(!(n instanceof fn||n instanceof zi))throw new ce(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return Wv(i),new fn(n.firestore,n instanceof zi?n.converter:null,new ye(i))}}/**
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
 */class Kv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xE(this,"async_queue_retry"),this.Vu=()=>{const i=Mf();i&&pe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=Mf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Mf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Bi;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xl(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Jr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Im.createAndSchedule(this,e,t,i,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Te()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Gv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Us extends Uh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new Kv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kv(e),this._firestoreClient=void 0,await e}}}function DN(n,e){const t=typeof n=="object"?n:qp(),i=typeof n=="string"?n:"(default)",o=Rh(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=Z0("firestore");l&&NN(o,...l)}return o}function Pm(n){if(n._terminated)throw new ce(G.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bN(n),n._firestoreClient}function bN(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new dk(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,XE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new AN(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class oa{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oa(jt.fromBase64String(e))}catch(t){throw new ce(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new oa(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class jh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ce(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cm{constructor(e){this._methodName=e}}/**
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
 */class km{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ce(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ce(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
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
 */class xm{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const ON=/^__.*__$/;class LN{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jl(e,this.data,t,this.fieldTransforms)}}class ZE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Qi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function eT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te()}}class Nm{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.Ou(e),o}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:i,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ph(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(eT(this.Cu)&&ON.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class VN{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Lh(e)}Qu(e,t,i,o=!1){return new Nm({Cu:e,methodName:t,qu:i,path:Ft.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(n){const e=n._freezeSettings(),t=Lh(n._databaseId);return new VN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function MN(n,e,t,i,o,l={}){const c=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);bm("Data must be an object, but it was:",c,i);const d=tT(i,c);let p,y;if(l.merge)p=new In(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const E of l.mergeFields){const I=Cp(e,E,t);if(!c.contains(I))throw new ce(G.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);rT(v,I)||v.push(I)}p=new In(v),y=c.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,y=c.fieldTransforms;return new LN(new dn(d),p,y)}class Bh extends Cm{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bh}}function FN(n,e,t,i){const o=n.Qu(1,e,t);bm("Data must be an object, but it was:",o,i);const l=[],c=dn.empty();$s(i,(p,y)=>{const v=Om(e,p,t);y=it(y);const E=o.Nu(v);if(y instanceof Bh)l.push(v);else{const I=nu(y,E);I!=null&&(l.push(v),c.set(v,I))}});const d=new In(l);return new ZE(c,d,o.fieldTransforms)}function UN(n,e,t,i,o,l){const c=n.Qu(1,e,t),d=[Cp(e,i,t)],p=[o];if(l.length%2!=0)throw new ce(G.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Cp(e,l[I])),p.push(l[I+1]);const y=[],v=dn.empty();for(let I=d.length-1;I>=0;--I)if(!rT(y,d[I])){const x=d[I];let V=p[I];V=it(V);const j=c.Nu(x);if(V instanceof Bh)y.push(x);else{const O=nu(V,j);O!=null&&(y.push(x),v.set(x,O))}}const E=new In(y);return new ZE(v,E,c.fieldTransforms)}function jN(n,e,t,i=!1){return nu(t,n.Qu(i?4:3,e))}function nu(n,e){if(nT(n=it(n)))return bm("Unsupported field value:",e,n),tT(n,e);if(n instanceof Cm)return function(i,o){if(!eT(o.Cu))throw o.Bu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=nu(d,o.Lu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=it(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Ok(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=St.fromDate(i);return{timestampValue:hh(o.serializer,l)}}if(i instanceof St){const l=new St(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:hh(o.serializer,l)}}if(i instanceof km)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof oa)return{bytesValue:EE(o.serializer,i._byteString)};if(i instanceof fn){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Bu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:mm(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof xm)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.Bu("VectorValues must only contain numeric values.");return hm(d.serializer,p)})}}}}}}(i,o);throw o.Bu(`Unsupported field value: ${Fh(i)}`)}(n,e)}function tT(n,e){const t={};return Yw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$s(n,(i,o)=>{const l=nu(o,e.Mu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function nT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof km||n instanceof oa||n instanceof fn||n instanceof Cm||n instanceof xm)}function bm(n,e,t){if(!nT(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Fh(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function Cp(n,e,t){if((e=it(e))instanceof jh)return e._internalPath;if(typeof e=="string")return Om(n,e);throw ph("Field path arguments must be of type string or ",n,!1,void 0,t)}const BN=new RegExp("[~\\*/\\[\\]]");function Om(n,e,t){if(e.search(BN)>=0)throw ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jh(...e.split("."))._internalPath}catch{throw ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ph(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new ce(G.INVALID_ARGUMENT,d+n+p)}function rT(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class iT{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zN extends iT{data(){return super.data()}}function zh(n,e){return typeof e=="string"?Om(n,e):e instanceof jh?e._internalPath:e._delegate._internalPath}/**
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
 */function sT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ce(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lm{}class Vm extends Lm{}function zc(n,e,...t){let i=[];e instanceof Lm&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof Mm).length,d=l.filter(p=>p instanceof $h).length;if(c>1||c>0&&d>0)throw new ce(G.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class $h extends Vm{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new $h(e,t,i)}_apply(e){const t=this._parse(e);return lT(e._query,t),new ri(e.firestore,e.converter,yp(e._query,t))}_parse(e){const t=Dm(e.firestore);return function(l,c,d,p,y,v,E){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ce(G.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){Yv(E,v);const x=[];for(const V of E)x.push(Qv(p,l,V));I={arrayValue:{values:x}}}else I=Qv(p,l,E)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||Yv(E,v),I=jN(d,c,E,v==="in"||v==="not-in");return _t.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Uf(n,e,t){const i=e,o=zh("where",n);return $h._create(o,i,t)}class Mm extends Lm{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Mm(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:rr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)lT(c,p),c=yp(c,p)}(e._query,t),new ri(e.firestore,e.converter,yp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fm extends Vm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Fm(e,t)}_apply(e){const t=function(o,l,c){if(o.startAt!==null)throw new ce(G.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new ce(G.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ul(l,c)}(e._query,this._field,this._direction);return new ri(e.firestore,e.converter,function(o,l){const c=o.explicitOrderBy.concat([l]);return new da(o.path,o.collectionGroup,c,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function oT(n,e="asc"){const t=e,i=zh("orderBy",n);return Fm._create(i,t)}class Um extends Vm{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new Um(e,t,i)}_apply(e){return new ri(e.firestore,e.converter,lh(e._query,this._limit,this._limitType))}}function aT(n){return Um._create("limit",n,"F")}function Qv(n,e,t){if(typeof(t=it(t))=="string"){if(t==="")throw new ce(G.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sE(e)&&t.indexOf("/")!==-1)throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Je.fromString(t));if(!ye.isDocumentKey(i))throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gv(n,new ye(i))}if(t instanceof fn)return gv(n,t._key);throw new ce(G.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fh(t)}.`)}function Yv(n,e){if(!Array.isArray(n)||n.length===0)throw new ce(G.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lT(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(G.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $N{convertValue(e,t="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return $s(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>dt(c.doubleValue));return new xm(l)}convertGeoPoint(e){return new km(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=om(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Vl(e));default:return null}}convertTimestamp(e){const t=qi(e);return new St(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Je.fromString(e);qe(PE(i));const o=new Ml(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Jr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function WN(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class _l{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uT extends iT{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(zh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class $c extends uT{data(e={}){return super.data(e)}}class cT{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new _l(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new $c(this._firestore,this._userDataWriter,i.key,i,new _l(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ce(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new $c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new $c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new _l(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:qN(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function qN(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te()}}class jm extends $N{constructor(e){super(),this.firestore=e}convertBytes(e){return new oa(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fn(this.firestore,null,t)}}function jf(n){n=Sr(n,ri);const e=Sr(n.firestore,Us),t=Pm(e),i=new jm(e);return sT(n._query),kN(t,n._query).then(o=>new cT(e,i,n,o))}function mh(n,e,t,...i){n=Sr(n,fn);const o=Sr(n.firestore,Us),l=Dm(o);let c;return c=typeof(e=it(e))=="string"||e instanceof jh?UN(l,"updateDoc",n._key,e,t,i):FN(l,"updateDoc",n._key,e),Bm(o,[c.toMutation(n._key,nr.exists(!0))])}function HN(n){return Bm(Sr(n.firestore,Us),[new dm(n._key,nr.none())])}function KN(n,e){const t=Sr(n.firestore,Us),i=Pp(n),o=WN(n.converter,e);return Bm(t,[MN(Dm(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,nr.exists(!1))]).then(()=>i)}function GN(n,...e){var t,i,o;n=it(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Gv(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Gv(e[c])){const E=e[c];e[c]=(t=E.next)===null||t===void 0?void 0:t.bind(E),e[c+1]=(i=E.error)===null||i===void 0?void 0:i.bind(E),e[c+2]=(o=E.complete)===null||o===void 0?void 0:o.bind(E)}let p,y,v;if(n instanceof fn)y=Sr(n.firestore,Us),v=cm(n._key.path),p={next:E=>{e[c]&&e[c](QN(y,n,E))},error:e[c+1],complete:e[c+2]};else{const E=Sr(n,ri);y=Sr(E.firestore,Us),v=E._query;const I=new jm(y);p={next:x=>{e[c]&&e[c](new cT(y,I,E,x))},error:e[c+1],complete:e[c+2]},sT(n._query)}return function(I,x,V,j){const O=new QE(j),H=new jE(x,O,V);return I.asyncQueue.enqueueAndForget(async()=>FE(await Ap(I),H)),()=>{O.Za(),I.asyncQueue.enqueueAndForget(async()=>UE(await Ap(I),H))}}(Pm(y),v,d,p)}function Bm(n,e){return function(i,o){const l=new Bi;return i.asyncQueue.enqueueAndForget(async()=>_N(await CN(i),o,l)),l.promise}(Pm(n),e)}function QN(n,e,t){const i=t.docs.get(e._key),o=new jm(n);return new uT(n,o,e._key,i,new _l(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){ha=o})(zs),bs(new $i("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Us(new XC(i.getProvider("auth-internal")),new tk(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ce(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),wr(hv,"4.7.3",e),wr(hv,"4.7.3","esm2017")})();/**
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
 */const hT="firebasestorage.googleapis.com",dT="storageBucket",YN=2*60*1e3,XN=10*60*1e3;/**
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
 */class ut extends pn{constructor(e,t,i=0){super(Bf(e),`Firebase Storage: ${t} (${Bf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function Bf(n){return"storage/"+n}function zm(){const n="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,n)}function JN(n){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function ZN(n){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eD(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,n)}function tD(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nD(n){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function rD(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iD(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function sD(n){return new ut(lt.INVALID_URL,"Invalid URL '"+n+"'.")}function oD(n){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aD(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+dT+"' property when initializing the app?")}function lD(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uD(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cD(n){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kp(n){return new ut(lt.INVALID_ARGUMENT,n)}function fT(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function hD(n){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Al(n,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function hl(n){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Sn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Sn.makeFromUrl(e,t)}catch{return new Sn(e,"")}if(i.path==="")return i;throw oD(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ee){ee.path.charAt(ee.path.length-1)==="/"&&(ee.path_=ee.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ee){ee.path_=decodeURIComponent(ee.path)}const v="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",x=new RegExp(`^https?://${E}/${v}/b/${o}/o${I}`,"i"),V={bucket:1,path:3},j=t===hT?"(?:storage.googleapis.com|storage.cloud.google.com)":t,O="([^?#]*)",H=new RegExp(`^https?://${j}/${o}/${O}`,"i"),K=[{regex:d,indices:p,postModify:l},{regex:x,indices:V,postModify:y},{regex:H,indices:{bucket:1,path:2},postModify:y}];for(let ee=0;ee<K.length;ee++){const le=K[ee],re=le.regex.exec(e);if(re){const A=re[le.indices.bucket];let S=re[le.indices.path];S||(S=""),i=new Sn(A,S),le.postModify(i);break}}if(i==null)throw sD(e);return i}}class dD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fD(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...O){y||(y=!0,e.apply(null,O))}function E(O){o=setTimeout(()=>{o=null,n(x,p())},O)}function I(){l&&clearTimeout(l)}function x(O,...H){if(y){I();return}if(O){I(),v.call(null,O,...H);return}if(p()||c){I(),v.call(null,O,...H);return}i<64&&(i*=2);let K;d===1?(d=2,K=0):K=(i+Math.random())*1e3,E(K)}let V=!1;function j(O){V||(V=!0,I(),!y&&(o!==null?(O||(d=2),clearTimeout(o),E(0)):O||(d=1)))}return E(0),l=setTimeout(()=>{c=!0,j(!0)},t),j}function pD(n){n(!1)}/**
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
 */function mD(n){return n!==void 0}function gD(n){return typeof n=="object"&&!Array.isArray(n)}function $m(n){return typeof n=="string"||n instanceof String}function Xv(n){return Wm()&&n instanceof Blob}function Wm(){return typeof Blob<"u"}function Jv(n,e,t,i){if(i<e)throw kp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw kp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Wh(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function pT(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ns;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ns||(Ns={}));/**
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
 */function yD(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class _D{constructor(e,t,i,o,l,c,d,p,y,v,E,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=E,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,V)=>{this.resolve_=x,this.reject_=V,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Ac(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ns.NO_ERROR,p=l.getStatus();if(!d||yD(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ns.ABORT;i(!1,new Ac(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new Ac(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());mD(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=zm();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?fT():iD();c(p)}else{const p=rD();c(p)}};this.canceled_?t(!1,new Ac(!1,null,!0)):this.backoffId_=fD(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function vD(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function wD(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function ED(n,e){e&&(n["X-Firebase-GMPID"]=e)}function TD(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ID(n,e,t,i,o,l,c=!0){const d=pT(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return ED(y,e),vD(y,t),wD(y,l),TD(y,i),new _D(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function SD(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RD(...n){const e=SD();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Wm())return new Blob(n);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function AD(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function PD(n){if(typeof atob>"u")throw cD("base-64");return atob(n)}/**
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
 */const vr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zf{constructor(e,t){this.data=e,this.contentType=t||null}}function CD(n,e){switch(n){case vr.RAW:return new zf(mT(e));case vr.BASE64:case vr.BASE64URL:return new zf(gT(n,e));case vr.DATA_URL:return new zf(xD(e),ND(e))}throw zm()}function mT(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function kD(n){let e;try{e=decodeURIComponent(n)}catch{throw Al(vr.DATA_URL,"Malformed data URL.")}return mT(e)}function gT(n,e){switch(n){case vr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Al(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case vr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Al(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=PD(e)}catch(o){throw o.message.includes("polyfill")?o:Al(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class yT{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Al(vr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=DD(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function xD(n){const e=new yT(n);return e.base64?gT(vr.BASE64,e.rest):kD(e.rest)}function ND(n){return new yT(n).contentType}function DD(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Oi{constructor(e,t){let i=0,o="";Xv(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(Xv(this.data_)){const i=this.data_,o=AD(i,e,t);return o===null?null:new Oi(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Oi(i,!0)}}static getBlob(...e){if(Wm()){const t=e.map(i=>i instanceof Oi?i.data_:i);return new Oi(RD.apply(null,t))}else{const t=e.map(c=>$m(c)?CD(vr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Oi(o,!0)}}uploadData(){return this.data_}}/**
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
 */function _T(n){let e;try{e=JSON.parse(n)}catch{return null}return gD(e)?e:null}/**
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
 */function bD(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function OD(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function vT(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function LD(n,e){return e}class tn{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||LD}}let Pc=null;function VD(n){return!$m(n)||n.length<2?n:vT(n)}function wT(){if(Pc)return Pc;const n=[];n.push(new tn("bucket")),n.push(new tn("generation")),n.push(new tn("metageneration")),n.push(new tn("name","fullPath",!0));function e(l,c){return VD(c)}const t=new tn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new tn("size");return o.xform=i,n.push(o),n.push(new tn("timeCreated")),n.push(new tn("updated")),n.push(new tn("md5Hash",null,!0)),n.push(new tn("cacheControl",null,!0)),n.push(new tn("contentDisposition",null,!0)),n.push(new tn("contentEncoding",null,!0)),n.push(new tn("contentLanguage",null,!0)),n.push(new tn("contentType",null,!0)),n.push(new tn("metadata","customMetadata",!0)),Pc=n,Pc}function MD(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Sn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function FD(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return MD(i,n),i}function ET(n,e,t){const i=_T(e);return i===null?null:FD(n,i,t)}function UD(n,e,t,i){const o=_T(e);if(o===null||!$m(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,E=n.fullPath,I="/b/"+c(v)+"/o/"+c(E),x=Wh(I,t,i),V=pT({alt:"media",token:y});return x+V})[0]}function jD(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class qm{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function TT(n){if(!n)throw zm()}function BD(n,e){function t(i,o){const l=ET(n,o,e);return TT(l!==null),l}return t}function zD(n,e){function t(i,o){const l=ET(n,o,e);return TT(l!==null),UD(l,o,n.host,n._protocol)}return t}function IT(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=tD():o=eD():t.getStatus()===402?o=ZN(n.bucket):t.getStatus()===403?o=nD(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function ST(n){const e=IT(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=JN(n.path)),l.serverResponse=o.serverResponse,l}return t}function $D(n,e,t){const i=e.fullServerUrl(),o=Wh(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new qm(o,l,zD(n,t),c);return d.errorHandler=ST(e),d}function WD(n,e){const t=e.fullServerUrl(),i=Wh(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function c(p,y){}const d=new qm(i,o,c,l);return d.successCodes=[200,204],d.errorHandler=ST(e),d}function qD(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function HD(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=qD(null,e)),i}function KD(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let K="";for(let ee=0;ee<2;ee++)K=K+Math.random().toString().slice(2);return K}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=HD(e,i,o),v=jD(y,t),E="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",x=Oi.getBlob(E,i,I);if(x===null)throw lD();const V={name:y.fullPath},j=Wh(l,n.host,n._protocol),O="POST",H=n.maxUploadRetryTime,J=new qm(j,O,BD(n,t),H);return J.urlParams=V,J.headers=c,J.body=x.uploadData(),J.errorHandler=IT(e),J}class GD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ns.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ns.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ns.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw hl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QD extends GD{initXhr(){this.xhr_.responseType="text"}}function Hm(){return new QD}/**
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
 */class js{constructor(e,t){this._service=e,t instanceof Sn?this._location=t:this._location=Sn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new js(e,t)}get root(){const e=new Sn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vT(this._location.path)}get storage(){return this._service}get parent(){const e=bD(this._location.path);if(e===null)return null;const t=new Sn(this._location.bucket,e);return new js(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw hD(e)}}function YD(n,e,t){n._throwIfRoot("uploadBytes");const i=KD(n.storage,n._location,wT(),new Oi(e,!0),t);return n.storage.makeRequestWithTokens(i,Hm).then(o=>({metadata:o,ref:n}))}function XD(n){n._throwIfRoot("getDownloadURL");const e=$D(n.storage,n._location,wT());return n.storage.makeRequestWithTokens(e,Hm).then(t=>{if(t===null)throw uD();return t})}function JD(n){n._throwIfRoot("deleteObject");const e=WD(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Hm)}function ZD(n,e){const t=OD(n._location.path,e),i=new Sn(n._location.bucket,t);return new js(n.storage,i)}/**
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
 */function eb(n){return/^[A-Za-z]+:\/\//.test(n)}function tb(n,e){return new js(n,e)}function RT(n,e){if(n instanceof Km){const t=n;if(t._bucket==null)throw aD();const i=new js(t,t._bucket);return e!=null?RT(i,e):i}else return e!==void 0?ZD(n,e):n}function nb(n,e){if(e&&eb(e)){if(n instanceof Km)return tb(n,e);throw kp("To use ref(service, url), the first argument must be a Storage instance.")}else return RT(n,e)}function Zv(n,e){const t=e==null?void 0:e[dT];return t==null?null:Sn.makeFromBucketSpec(t,n)}function rb(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:nw(o,n.app.options.projectId))}class Km{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=hT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=YN,this._maxUploadRetryTime=XN,this._requests=new Set,o!=null?this._bucket=Sn.makeFromBucketSpec(o,this._host):this._bucket=Zv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Sn.makeFromBucketSpec(this._url,e):this._bucket=Zv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new js(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new dD(fT());{const c=ID(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const e0="@firebase/storage",t0="0.13.2";/**
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
 */const AT="storage";function Gm(n,e,t){return n=it(n),YD(n,e,t)}function Qm(n){return n=it(n),XD(n)}function n0(n){return n=it(n),JD(n)}function Pl(n,e){return n=it(n),nb(n,e)}function ib(n=qp(),e){n=it(n);const i=Rh(n,AT).getImmediate({identifier:e}),o=Z0("storage");return o&&sb(i,...o),i}function sb(n,e,t,i={}){rb(n,e,t,i)}function ob(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Km(t,i,o,e,zs)}function ab(){bs(new $i(AT,ob,"PUBLIC").setMultipleInstances(!0)),wr(e0,t0,""),wr(e0,t0,"esm2017")}ab();const lb={apiKey:"AIzaSyD3inNnBFoe9P-QiseO8ihe1bg_x4avjnE",authDomain:"hwitter-reloaded-8b74b.firebaseapp.com",projectId:"hwitter-reloaded-8b74b",storageBucket:"hwitter-reloaded-8b74b.firebasestorage.app",messagingSenderId:"11116758234",appId:"1:11116758234:web:6c92511c31914d4de0d1e3"},Ym=sw(lb),ir=KC(Ym),Cl=ib(Ym),Ds=DN(Ym),ub=Ie.div`
  max-width: 860px;
`,cb=Ie.div`
  position: fixed;
  width: 100%;
  top: 0; left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background-color: #07111F;
`,hb=Ie.img`
  height: 50px;
  cursor: pointer;
`,db=Ie.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 7fr;
  height: 100%;
  padding: 90px 0px 50px;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
    padding-bottom: 100px; /* 하단 메뉴 공간 확보 */
  }
`,fb=Ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #07111F;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
    z-index: 999;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 10px);
  }
`,$f=Ie.div`
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

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    svg {
      width: 24px;
    }
  }
`;function pb(){const n=la(),e=async()=>{confirm("Are you sure you want to log out?")&&(await ir.signOut(),n("/login"))};return W.jsxs(ub,{children:[W.jsx(cb,{children:W.jsx(hb,{src:"/img/h_logo.png",onClick:()=>{typeof window.scrollToTimelineTop=="function"&&window.scrollToTimelineTop()}})}),W.jsxs(db,{children:[W.jsxs(fb,{children:[W.jsx(Hc,{to:"/",children:W.jsx($f,{children:W.jsx("svg",{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor","aria-hidden":"true",width:"40",height:"40",children:W.jsx("g",{transform:"translate(10.000000,90.000000) scale(0.100000,-0.100000)",fill:"#currentColor",stroke:"none",children:W.jsx("path",{fill:"#ffffff",d:`M575 768 c-295 -49 -395 -82 -475 -154 -50 -45 -70 -87 -70 -145 0\r
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
                  -107 -149 -11 -47 -23 -55 -33 -22 -20 61 34 141 125 186 51 26 50 25 50 16z`})})})})}),W.jsx(Hc,{to:"/profile",children:W.jsx($f,{children:W.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:W.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),W.jsx($f,{onClick:e,className:"log-out",children:W.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[W.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),W.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),W.jsx(z1,{})]})]})}const mb=Ie.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,gb=Ie.textarea`
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
		border-color: #FC4E00;
	}
`,yb=Ie.label`
	padding: 10px 0px;
	color: #FC4E00;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #FC4E00;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`,_b=Ie.input`
	display: none;
`,vb=Ie.input`
	background-color: #FC4E00;
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
`,wb=Ie.div.withConfig({shouldForwardProp:n=>n!=="full"})`
  font-size: 14px;
  align-self: flex-end;
  color: ${n=>n.full?"#FF4444":"#aaa"};
  font-weight: ${n=>n.full?"bold":"normal"};
  animation: ${n=>n.full?"shake 0.3s":"none"};
  transition: all 0.2s ease-in-out;

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
`;function Eb(){const[n,e]=Y.useState(!1),[t,i]=Y.useState(""),[o,l]=Y.useState(null),c=y=>{i(y.target.value)},d=y=>{const{files:v}=y.target;if(v&&v.length===1){const E=v[0];if(E.size>512e3){alert("Only files smaller than 500KB are allowed for upload."),y.target.value="",l(null);return}l(E)}},p=async y=>{y.preventDefault();const v=ir.currentUser;if(!(!v||n||t===""||t.length>180))try{e(!0);const E=await KN(Rl(Ds,"tweets"),{tweet:t,createdAt:Date.now(),username:v.displayName||"Anonymous",userId:v.uid,avatar:v.photoURL??null});if(o){const I=Pl(Cl,`tweets/${v.uid}-${v.displayName}/${E.id}`),x=await Gm(I,o),V=await Qm(x.ref);await mh(E,{photo:V})}i(""),l(null)}catch(E){console.log(E)}finally{e(!1)}};return W.jsxs(mb,{onSubmit:p,children:[W.jsx(gb,{rows:5,maxLength:180,onChange:c,value:t,placeholder:"오늘의 한화이글스는 어땠나요?",required:!0}),W.jsxs(wb,{full:t.length===180,children:[t.length,"/180"]}),W.jsx(yb,{htmlFor:"file",children:o?"Photo added ✅":"Add photo"}),W.jsx(_b,{onChange:d,type:"file",id:"file",accept:"image/*"}),W.jsx(vb,{type:"submit",value:n?"Posting...":"Post Tweet"})]})}const Cc=43200,r0=1440,i0=Symbol.for("constructDateFrom");function Xm(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&i0 in n?n[i0](e):n instanceof Date?new n.constructor(e):new Date(e)}function Ki(n,e){return Xm(n,n)}let Tb={};function Ib(){return Tb}function s0(n){const e=Ki(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function Jm(n,...e){const t=Xm.bind(null,n||e.find(i=>typeof i=="object"));return e.map(t)}function Wc(n,e){const t=+Ki(n)-+Ki(e);return t<0?-1:t>0?1:t}function Sb(n){return Xm(n,Date.now())}function Rb(n,e,t){const[i,o]=Jm(t==null?void 0:t.in,n,e),l=i.getFullYear()-o.getFullYear(),c=i.getMonth()-o.getMonth();return l*12+c}function Ab(n){return e=>{const i=(n?Math[n]:Math.trunc)(e);return i===0?0:i}}function Pb(n,e){return+Ki(n)-+Ki(e)}function Cb(n,e){const t=Ki(n);return t.setHours(23,59,59,999),t}function kb(n,e){const t=Ki(n),i=t.getMonth();return t.setFullYear(t.getFullYear(),i+1,0),t.setHours(23,59,59,999),t}function xb(n,e){const t=Ki(n);return+Cb(t)==+kb(t)}function Nb(n,e,t){const[i,o,l]=Jm(t==null?void 0:t.in,n,n,e),c=Wc(o,l),d=Math.abs(Rb(o,l));if(d<1)return 0;o.getMonth()===1&&o.getDate()>27&&o.setDate(30),o.setMonth(o.getMonth()-c*d);let p=Wc(o,l)===-c;xb(i)&&d===1&&Wc(i,l)===1&&(p=!1);const y=c*(d-+p);return y===0?0:y}function Db(n,e,t){const i=Pb(n,e)/1e3;return Ab(t==null?void 0:t.roundingMethod)(i)}const bb={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ob=(n,e,t)=>{let i;const o=bb[n];return typeof o=="string"?i=o:e===1?i=o.one:i=o.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i};function Ko(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const Lb={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Vb={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Mb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Fb={date:Ko({formats:Lb,defaultWidth:"full"}),time:Ko({formats:Vb,defaultWidth:"full"}),dateTime:Ko({formats:Mb,defaultWidth:"full"})},Ub={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},jb=(n,e,t,i)=>Ub[n];function yr(n){return(e,t)=>{const i=t!=null&&t.context?String(t.context):"standalone";let o;if(i==="formatting"&&n.formattingValues){const c=n.defaultFormattingWidth||n.defaultWidth,d=t!=null&&t.width?String(t.width):c;o=n.formattingValues[d]||n.formattingValues[c]}else{const c=n.defaultWidth,d=t!=null&&t.width?String(t.width):n.defaultWidth;o=n.values[d]||n.values[c]}const l=n.argumentCallback?n.argumentCallback(e):e;return o[l]}}const Bb={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},zb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},$b={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Wb={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Hb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Kb=(n,e)=>{const t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Gb={ordinalNumber:Kb,era:yr({values:Bb,defaultWidth:"wide"}),quarter:yr({values:zb,defaultWidth:"wide",argumentCallback:n=>n-1}),month:yr({values:$b,defaultWidth:"wide"}),day:yr({values:Wb,defaultWidth:"wide"}),dayPeriod:yr({values:qb,defaultWidth:"wide",formattingValues:Hb,defaultFormattingWidth:"wide"})};function _r(n){return(e,t={})=>{const i=t.width,o=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],l=e.match(o);if(!l)return null;const c=l[0],d=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],p=Array.isArray(d)?Yb(d,E=>E.test(c)):Qb(d,E=>E.test(c));let y;y=n.valueCallback?n.valueCallback(p):p,y=t.valueCallback?t.valueCallback(y):y;const v=e.slice(c.length);return{value:y,rest:v}}}function Qb(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function Yb(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function PT(n){return(e,t={})=>{const i=e.match(n.matchPattern);if(!i)return null;const o=i[0],l=e.match(n.parsePattern);if(!l)return null;let c=n.valueCallback?n.valueCallback(l[0]):l[0];c=t.valueCallback?t.valueCallback(c):c;const d=e.slice(o.length);return{value:c,rest:d}}}const Xb=/^(\d+)(th|st|nd|rd)?/i,Jb=/\d+/i,Zb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},eO={any:[/^b/i,/^(a|c)/i]},tO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},nO={any:[/1/i,/2/i,/3/i,/4/i]},rO={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},iO={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},sO={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},oO={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},aO={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},lO={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},uO={ordinalNumber:PT({matchPattern:Xb,parsePattern:Jb,valueCallback:n=>parseInt(n,10)}),era:_r({matchPatterns:Zb,defaultMatchWidth:"wide",parsePatterns:eO,defaultParseWidth:"any"}),quarter:_r({matchPatterns:tO,defaultMatchWidth:"wide",parsePatterns:nO,defaultParseWidth:"any",valueCallback:n=>n+1}),month:_r({matchPatterns:rO,defaultMatchWidth:"wide",parsePatterns:iO,defaultParseWidth:"any"}),day:_r({matchPatterns:sO,defaultMatchWidth:"wide",parsePatterns:oO,defaultParseWidth:"any"}),dayPeriod:_r({matchPatterns:aO,defaultMatchWidth:"any",parsePatterns:lO,defaultParseWidth:"any"})},cO={code:"en-US",formatDistance:Ob,formatLong:Fb,formatRelative:jb,localize:Gb,match:uO,options:{weekStartsOn:0,firstWeekContainsDate:1}};function hO(n,e,t){const i=Ib(),o=(t==null?void 0:t.locale)??i.locale??cO,l=2520,c=Wc(n,e);if(isNaN(c))throw new RangeError("Invalid time value");const d=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:c}),[p,y]=Jm(t==null?void 0:t.in,...c>0?[e,n]:[n,e]),v=Db(y,p),E=(s0(y)-s0(p))/1e3,I=Math.round((v-E)/60);let x;if(I<2)return t!=null&&t.includeSeconds?v<5?o.formatDistance("lessThanXSeconds",5,d):v<10?o.formatDistance("lessThanXSeconds",10,d):v<20?o.formatDistance("lessThanXSeconds",20,d):v<40?o.formatDistance("halfAMinute",0,d):v<60?o.formatDistance("lessThanXMinutes",1,d):o.formatDistance("xMinutes",1,d):I===0?o.formatDistance("lessThanXMinutes",1,d):o.formatDistance("xMinutes",I,d);if(I<45)return o.formatDistance("xMinutes",I,d);if(I<90)return o.formatDistance("aboutXHours",1,d);if(I<r0){const V=Math.round(I/60);return o.formatDistance("aboutXHours",V,d)}else{if(I<l)return o.formatDistance("xDays",1,d);if(I<Cc){const V=Math.round(I/r0);return o.formatDistance("xDays",V,d)}else if(I<Cc*2)return x=Math.round(I/Cc),o.formatDistance("aboutXMonths",x,d)}if(x=Nb(y,p),x<12){const V=Math.round(I/Cc);return o.formatDistance("xMonths",V,d)}else{const V=x%12,j=Math.trunc(x/12);return V<3?o.formatDistance("aboutXYears",j,d):V<9?o.formatDistance("overXYears",j,d):o.formatDistance("almostXYears",j+1,d)}}function dO(n,e){return hO(n,Sb(n),e)}const fO={lessThanXSeconds:{one:"1초 미만",other:"{{count}}초 미만"},xSeconds:{one:"1초",other:"{{count}}초"},halfAMinute:"30초",lessThanXMinutes:{one:"1분 미만",other:"{{count}}분 미만"},xMinutes:{one:"1분",other:"{{count}}분"},aboutXHours:{one:"약 1시간",other:"약 {{count}}시간"},xHours:{one:"1시간",other:"{{count}}시간"},xDays:{one:"1일",other:"{{count}}일"},aboutXWeeks:{one:"약 1주",other:"약 {{count}}주"},xWeeks:{one:"1주",other:"{{count}}주"},aboutXMonths:{one:"약 1개월",other:"약 {{count}}개월"},xMonths:{one:"1개월",other:"{{count}}개월"},aboutXYears:{one:"약 1년",other:"약 {{count}}년"},xYears:{one:"1년",other:"{{count}}년"},overXYears:{one:"1년 이상",other:"{{count}}년 이상"},almostXYears:{one:"거의 1년",other:"거의 {{count}}년"}},pO=(n,e,t)=>{let i;const o=fO[n];return typeof o=="string"?i=o:e===1?i=o.one:i=o.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?i+" 후":i+" 전":i},mO={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},gO={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yO={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},_O={date:Ko({formats:mO,defaultWidth:"full"}),time:Ko({formats:gO,defaultWidth:"full"}),dateTime:Ko({formats:yO,defaultWidth:"full"})},vO={lastWeek:"'지난' eeee p",yesterday:"'어제' p",today:"'오늘' p",tomorrow:"'내일' p",nextWeek:"'다음' eeee p",other:"P"},wO=(n,e,t,i)=>vO[n],EO={narrow:["BC","AD"],abbreviated:["BC","AD"],wide:["기원전","서기"]},TO={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1분기","2분기","3분기","4분기"]},IO={narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],wide:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},SO={narrow:["일","월","화","수","목","금","토"],short:["일","월","화","수","목","금","토"],abbreviated:["일","월","화","수","목","금","토"],wide:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]},RO={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},AO={narrow:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},abbreviated:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"},wide:{am:"오전",pm:"오후",midnight:"자정",noon:"정오",morning:"아침",afternoon:"오후",evening:"저녁",night:"밤"}},PO=(n,e)=>{const t=Number(n);switch(String(e==null?void 0:e.unit)){case"minute":case"second":return String(t);case"date":return t+"일";default:return t+"번째"}},CO={ordinalNumber:PO,era:yr({values:EO,defaultWidth:"wide"}),quarter:yr({values:TO,defaultWidth:"wide",argumentCallback:n=>n-1}),month:yr({values:IO,defaultWidth:"wide"}),day:yr({values:SO,defaultWidth:"wide"}),dayPeriod:yr({values:RO,defaultWidth:"wide",formattingValues:AO,defaultFormattingWidth:"wide"})},kO=/^(\d+)(일|번째)?/i,xO=/\d+/i,NO={narrow:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(기원전|서기)/i},DO={any:[/^(bc|기원전)/i,/^(ad|서기)/i]},bO={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]사?분기/i},OO={any:[/1/i,/2/i,/3/i,/4/i]},LO={narrow:/^(1[012]|[123456789])/,abbreviated:/^(1[012]|[123456789])월/i,wide:/^(1[012]|[123456789])월/i},VO={any:[/^1월?$/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},MO={narrow:/^[일월화수목금토]/,short:/^[일월화수목금토]/,abbreviated:/^[일월화수목금토]/,wide:/^[일월화수목금토]요일/},FO={any:[/^일/,/^월/,/^화/,/^수/,/^목/,/^금/,/^토/]},UO={any:/^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i},jO={any:{am:/^(am|오전)/i,pm:/^(pm|오후)/i,midnight:/^자정/i,noon:/^정오/i,morning:/^아침/i,afternoon:/^오후/i,evening:/^저녁/i,night:/^밤/i}},BO={ordinalNumber:PT({matchPattern:kO,parsePattern:xO,valueCallback:n=>parseInt(n,10)}),era:_r({matchPatterns:NO,defaultMatchWidth:"wide",parsePatterns:DO,defaultParseWidth:"any"}),quarter:_r({matchPatterns:bO,defaultMatchWidth:"wide",parsePatterns:OO,defaultParseWidth:"any",valueCallback:n=>n+1}),month:_r({matchPatterns:LO,defaultMatchWidth:"wide",parsePatterns:VO,defaultParseWidth:"any"}),day:_r({matchPatterns:MO,defaultMatchWidth:"wide",parsePatterns:FO,defaultParseWidth:"any"}),dayPeriod:_r({matchPatterns:UO,defaultMatchWidth:"any",parsePatterns:jO,defaultParseWidth:"any"})},zO={code:"ko",formatDistance:pO,formatLong:_O,formatRelative:wO,localize:CO,match:BO,options:{weekStartsOn:0,firstWeekContainsDate:1}},$O=Ie.div`
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`,Wf=Ie.div`
	&:last-child {
		place-self: end;
	}
`,o0=Ie.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`,WO=Ie.span`
  font-weight: 600;
  font-size: 15px;
	margin-bottom: 5px;
`,qO=Ie.p`
  margin: 10px 0px;
  font-size: 18px;
	line-height: 1.4;
	white-space: pre-wrap; /* \n 줄바꿈 유지 */
  word-break: normal;           /* 기본 단어 단위 줄바꿈 */
  overflow-wrap: break-word;    /* 너무 길면 단어 단위로 줄바꿈 */
`,a0=Ie.button`
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
`,l0=Ie.button`
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
`,HO=Ie.div`
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
`,KO=Ie.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,GO=Ie.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`,QO=Ie.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  color: #07111F;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`,YO=Ie.textarea`
	margin: 10px 0;
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
		border-color: #FC4E00;
	}
`,XO=n=>dO(new Date(n),{addSuffix:!0,locale:zO});function CT({username:n,photo:e,tweet:t,userId:i,id:o,avatar:l,createdAt:c}){const d=ir.currentUser,[p,y]=Y.useState(!1),[v,E]=Y.useState(!1),[I,x]=Y.useState(t),[V,j]=Y.useState(null),[O,H]=Y.useState(e),J=async()=>{if(!(!confirm("R U sure u wanna delete this tweet?")||(d==null?void 0:d.uid)!==i))try{if(await HN(Pp(Ds,"tweets",o)),e){const A=Pl(Cl,`tweets/${d.uid}/${o}`);await n0(A)}}catch(A){console.log(A)}finally{}},K=re=>{var S;const A=(S=re.target.files)==null?void 0:S[0];A&&(j(A),H(URL.createObjectURL(A)))},ee=async()=>{y(!0);try{const re=Pp(Ds,"tweets",o),A={tweet:I};if(V){if(e){const b=Pl(Cl,`tweets/${d==null?void 0:d.uid}/${o}`);await n0(b)}const S=Pl(Cl,`tweets/${d==null?void 0:d.uid}/${o}`),P=await Gm(S,V),N=await Qm(P.ref);A.photo=N}await mh(re,A),E(!1)}catch(re){console.log(re)}finally{y(!1)}},le=()=>{x(t),j(null),H(e),E(!1)};return W.jsxs($O,{children:[W.jsxs(Wf,{children:[W.jsxs(KO,{children:[l?W.jsx(GO,{src:l,alt:"profile"}):W.jsx(QO,{children:n==null?void 0:n.charAt(0)}),W.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[W.jsx(WO,{children:n}),W.jsx("span",{style:{fontSize:"12px",opacity:.7},children:XO(c)})]})]}),v?W.jsxs(W.Fragment,{children:[W.jsx(YO,{value:I,onChange:re=>x(re.target.value)}),W.jsx("input",{type:"file",accept:"image/*",onChange:K}),O&&W.jsx(o0,{src:O}),p?W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",marginTop:"10px"},children:[W.jsx(HO,{}),W.jsx("span",{style:{fontSize:"14px",fontStyle:"italic"},children:"Saving..."})]}):W.jsxs("div",{style:{display:"flex",gap:"5px",marginBottom:"10px"},children:[W.jsx(l0,{onClick:ee,children:"Save"}),W.jsx(a0,{onClick:le,children:"Cancel"})]})]}):W.jsx(qO,{children:t})]}),W.jsx(Wf,{children:e?W.jsx(o0,{src:e}):null}),(d==null?void 0:d.uid)===i?W.jsxs(Wf,{style:{display:"flex",gap:"5px"},children:[!v&&W.jsx(l0,{onClick:()=>E(!0),children:"Edit"}),W.jsx(a0,{onClick:J,children:"Delete"})]}):null]})}const JO=Ie.div`
	display: flex;
	gap: 10px;
	flex-direction: column;	
`;function ZO(){const[n,e]=Y.useState([]),t=Y.useRef(null);return Y.useEffect(()=>{let i=null;return(async()=>{const l=zc(Rl(Ds,"tweets"),oT("createdAt","desc"),aT(25));i=await GN(l,c=>{const d=c.docs.map(p=>{const{tweet:y,createdAt:v,userId:E,username:I,photo:x,avatar:V}=p.data();return{tweet:y,createdAt:v,userId:E,username:I,photo:x,avatar:V,id:p.id}});e(d)})})(),()=>{i&&i()}},[]),Y.useEffect(()=>{window.scrollToTimelineTop=()=>{var i;(i=t.current)==null||i.scrollIntoView({behavior:"smooth"})}},[]),W.jsx(JO,{ref:t,children:n.map(i=>W.jsx(CT,{...i},i.id))})}const e2=Ie.div`
  display: flex;
  flex-direction: column;
  gap: 50px;  
`;function t2(){return W.jsxs(e2,{children:[W.jsx(Eb,{}),W.jsx(ZO,{})]})}const n2=Ie.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`,r2=Ie.label`
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
`,i2=Ie.img`
  width: 100%;
`,s2=Ie.input`
  display: none;
`,o2=Ie.span`
  font-size: 22px;
`,u0=Ie.div`
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
`,a2=Ie.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`,l2=Ie.button`
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
`;function u2(){const n=ir.currentUser,e=n==null?void 0:n.metadata.creationTime,t=n==null?void 0:n.metadata.lastSignInTime,[i,o]=Y.useState(n==null?void 0:n.photoURL),[l,c]=Y.useState([]),[d,p]=Y.useState(!1),[y,v]=Y.useState(!1),[E,I]=Y.useState((n==null?void 0:n.displayName)??""),[x,V]=Y.useState(!1),j=K=>{if(!K)return"";const ee=new Date(K);return`${ee.getFullYear()}년 ${ee.getMonth()+1}월 ${ee.getDate()}일`},O=async K=>{const{files:ee}=K.target;if(n&&ee&&ee.length===1){p(!0);try{const le=ee[0],re=Pl(Cl,`avatars/${n==null?void 0:n.uid}`),A=await Gm(re,le),S=await Qm(A.ref);o(S),await cp(n,{photoURL:S});const P=zc(Rl(Ds,"tweets"),Uf("userId","==",n.uid)),b=(await jf(P)).docs.map(M=>mh(M.ref,{avatar:S}));await Promise.all(b)}catch(le){console.error(le)}finally{p(!1)}}},H=async()=>{if(!(!n||E.trim()==="")){V(!0);try{await cp(n,{displayName:E});const K=zc(Rl(Ds,"tweets"),Uf("userId","==",n.uid)),le=(await jf(K)).docs.map(re=>mh(re.ref,{username:E}));await Promise.all(le),v(!1)}catch(K){console.error(K)}finally{V(!1)}}},J=async()=>{const K=zc(Rl(Ds,"tweets"),Uf("userId","==",n==null?void 0:n.uid),oT("createdAt","desc"),aT(25)),le=(await jf(K)).docs.map(re=>{const{tweet:A,createdAt:S,userId:P,username:N,photo:b}=re.data();return{tweet:A,createdAt:S,userId:P,username:N,photo:b,id:re.id}});c(le)};return Y.useEffect(()=>{J()},[]),W.jsxs(n2,{children:[W.jsx(r2,{htmlFor:"avatar",children:d?W.jsx(u0,{}):i?W.jsx(i2,{src:i}):W.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:W.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})}),W.jsx(s2,{id:"avatar",type:"file",accept:"image/*",onChange:O}),y?W.jsxs(W.Fragment,{children:[W.jsx("input",{value:E,onChange:K=>I(K.target.value),style:{fontSize:"18px",padding:"5px",borderRadius:"5px",border:"1px solid #ccc"}}),x?W.jsx(u0,{}):W.jsxs("div",{style:{display:"flex",gap:"5px"},children:[W.jsx("button",{onClick:H,children:"Save"}),W.jsx("button",{onClick:()=>v(!1),children:"Cancel"})]})]}):W.jsxs(W.Fragment,{children:[W.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[W.jsx(o2,{children:(n==null?void 0:n.displayName)??"Anonymous"}),W.jsx(l2,{onClick:()=>v(!0),"aria-label":"Edit name",children:W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:W.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487Zm0 0L19.5 7.125"})})})]}),W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"10px"},children:[W.jsxs("span",{style:{fontSize:"14px",color:"#ccc"},children:["가입일: ",j(e)]}),W.jsxs("span",{style:{fontSize:"14px",color:"#ccc"},children:["마지막 로그인: ",j(t)]})]})]}),W.jsx(a2,{children:l.map(K=>W.jsx(CT,{...K},K.id))})]})}const kT=Ie.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,xT=Ie.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  .sub {
    font-size: 40px;
    font-weight: 500;
    margin-top: 3vw;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 10vw;
    letter-spacing: -0.1vw;
    .sub {
      font-size: 6vw;
    }
  }
`,NT=Ie.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,Cs=Ie.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    background-color: #FC4E00;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`,DT=Ie.span`
  font-weight: 600;
  color: tomato;
`,gh=Ie.span`
  margin-top: 20px;
  a {
    color: #FC4E00;
  }
  button {
    color: #FC4E00;
    text-decoration: underline;
    background-color: transparent;
    border: none;
  }
`,c2=Ie.span`
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
`,h2=Ie.img`
  height: 25px;
`;function bT(){const n=la(),e=async()=>{try{const t=new qr;await nC(ir,t),n("/")}catch(t){console.error(t)}};return W.jsxs(c2,{onClick:e,children:[W.jsx(h2,{src:"/img/github-logo.svg"}),"Continue with Github"]})}function d2(){const n=la(),[e,t]=Y.useState(!1),[i,o]=Y.useState(""),[l,c]=Y.useState(""),[d,p]=Y.useState(""),[y,v]=Y.useState(""),E=V=>{const{target:{name:j,value:O}}=V;j==="email"?o(O):j==="password"&&c(O)},I=async V=>{if(V.preventDefault(),p(""),!(e||i===""||l===""))try{t(!0),await bP(ir,i,l),n("/")}catch(j){j instanceof pn&&p(j.message),console.log(j)}finally{t(!1)}},x=async()=>{if(p(""),v(""),!i){p("Please enter your email to reset password.");return}try{await xw(ir,i),v("Password reset email sent")}catch(V){V instanceof pn&&p(V.message)}};return W.jsxs(kT,{children:[W.jsxs(xT,{children:["RIDE THE STORM",W.jsx("p",{className:"sub",children:"Log into 𝕏"})]}),W.jsxs(NT,{onSubmit:I,children:[W.jsx(Cs,{onChange:E,name:"email",value:i,placeholder:"Email",type:"email",required:!0}),W.jsx(Cs,{onChange:E,value:l,name:"password",placeholder:"Password",type:"password",required:!0}),W.jsx(Cs,{type:"submit",value:e?"Loading...":"Log in"})]}),d!==""?W.jsx(DT,{children:d}):null,y&&W.jsx("span",{style:{color:"lightgreen"},children:y}),W.jsxs(gh,{children:["Don't have an account?"," ",W.jsx(Hc,{to:"/create-account",children:"Create one →"})]}),W.jsxs(gh,{children:["Forgot your password?",W.jsx("button",{onClick:x,children:"Reset Password →"})]}),W.jsx(bT,{})]})}function f2(){const n=la(),[e,t]=Y.useState(!1),[i,o]=Y.useState(""),[l,c]=Y.useState(""),[d,p]=Y.useState(""),[y,v]=Y.useState(""),[E,I]=Y.useState(""),x=O=>{const{target:{name:H,value:J}}=O;H==="name"?o(J):H==="email"?c(J):H==="password"&&p(J)},V=async O=>{if(O.preventDefault(),v(""),!(e||i===""||l===""||d===""))try{t(!0);const H=await DP(ir,l,d);await cp(H.user,{displayName:i}),n("/")}catch(H){H instanceof pn&&v(H.message),console.log(H)}finally{t(!1)}},j=async()=>{if(v(""),I(""),!l){v("Please enter your email to reset password.");return}try{await xw(ir,l),I("Password reset email sent")}catch(O){O instanceof pn&&v(O.message)}};return W.jsxs(kT,{children:[W.jsxs(xT,{children:["RIDE THE STORM",W.jsx("p",{className:"sub",children:"JOIN US"})]}),W.jsxs(NT,{onSubmit:V,children:[W.jsx(Cs,{onChange:x,name:"name",value:i,placeholder:"Name",type:"text",required:!0}),W.jsx(Cs,{onChange:x,name:"email",value:l,placeholder:"Email",type:"email",required:!0}),W.jsx(Cs,{onChange:x,value:d,name:"password",placeholder:"Password",type:"password",required:!0}),W.jsx(Cs,{type:"submit",value:e?"Loading...":"Create Account"})]}),y!==""?W.jsx(DT,{children:y}):null,E&&W.jsx("span",{style:{color:"lightgreen"},children:E}),W.jsxs(gh,{children:["Already have an account?"," ",W.jsx(Hc,{to:"/login",children:"Log in →"})]}),W.jsxs(gh,{children:["Forgot your password?",W.jsx("button",{onClick:j,children:"Reset Password →"})]}),W.jsx(bT,{})]})}var OT=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},LT=zp(c0||(c0=OT([`
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
`])));G0(h0||(h0=OT(["",""],["",""])),LT);var c0,h0;const p2=Ie.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,m2=Ie.span`
  font-size: 24px;
`;function g2(){return W.jsx(p2,{children:W.jsx(m2,{children:"Loading..."})})}function y2({children:n}){return ir.currentUser==null?W.jsx(B1,{to:"/login"}):n}const _2=G0`
  ${LT};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07111F;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,v2=Ie.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0 5vw;
  overflow-y: auto;
`;function w2(){const[n,e]=Y.useState(!0),t=async()=>{await ir.authStateReady(),e(!1)};return Y.useEffect(()=>{t()},[]),W.jsxs(v2,{children:[W.jsx(_2,{}),n?W.jsx(g2,{}):W.jsx(X1,{children:W.jsxs(W1,{children:[W.jsxs(Fo,{path:"/",element:W.jsx(y2,{children:W.jsx(pb,{})}),children:[W.jsx(Fo,{index:!0,element:W.jsx(t2,{})}),W.jsx(Fo,{path:"profile",element:W.jsx(u2,{})})]}),W.jsx(Fo,{path:"/login",element:W.jsx(d2,{})}),W.jsx(Fo,{path:"/create-account",element:W.jsx(f2,{})})]})})]})}const E2=QI.createRoot(document.getElementById("root"));E2.render(W.jsx(Jn.StrictMode,{children:W.jsx(w2,{})}));
