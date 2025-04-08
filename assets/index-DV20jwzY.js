function CE(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Rv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lf={exports:{}},za={},bf={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function NE(){if(Fg)return Ae;Fg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function k(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,$={};function V(D,H,de){this.props=D,this.context=H,this.refs=$,this.updater=de||F}V.prototype.isReactComponent={},V.prototype.setState=function(D,H){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,H,"setState")},V.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function W(){}W.prototype=V.prototype;function J(D,H,de){this.props=D,this.context=H,this.refs=$,this.updater=de||F}var X=J.prototype=new W;X.constructor=J,j(X,V.prototype),X.isPureReactComponent=!0;var te=Array.isArray,me=Object.prototype.hasOwnProperty,ae={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(D,H,de){var Ee,Te={},Ie=null,ke=null;if(H!=null)for(Ee in H.ref!==void 0&&(ke=H.ref),H.key!==void 0&&(Ie=""+H.key),H)me.call(H,Ee)&&!P.hasOwnProperty(Ee)&&(Te[Ee]=H[Ee]);var Pe=arguments.length-2;if(Pe===1)Te.children=de;else if(1<Pe){for(var Oe=Array(Pe),et=0;et<Pe;et++)Oe[et]=arguments[et+2];Te.children=Oe}if(D&&D.defaultProps)for(Ee in Pe=D.defaultProps,Pe)Te[Ee]===void 0&&(Te[Ee]=Pe[Ee]);return{$$typeof:n,type:D,key:Ie,ref:ke,props:Te,_owner:ae.current}}function A(D,H){return{$$typeof:n,type:D.type,key:H,ref:D.ref,props:D.props,_owner:D._owner}}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function O(D){var H={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(de){return H[de]})}var L=/\/+/g;function R(D,H){return typeof D=="object"&&D!==null&&D.key!=null?O(""+D.key):H.toString(36)}function Xe(D,H,de,Ee,Te){var Ie=typeof D;(Ie==="undefined"||Ie==="boolean")&&(D=null);var ke=!1;if(D===null)ke=!0;else switch(Ie){case"string":case"number":ke=!0;break;case"object":switch(D.$$typeof){case n:case e:ke=!0}}if(ke)return ke=D,Te=Te(ke),D=Ee===""?"."+R(ke,0):Ee,te(Te)?(de="",D!=null&&(de=D.replace(L,"$&/")+"/"),Xe(Te,H,de,"",function(et){return et})):Te!=null&&(N(Te)&&(Te=A(Te,de+(!Te.key||ke&&ke.key===Te.key?"":(""+Te.key).replace(L,"$&/")+"/")+D)),H.push(Te)),1;if(ke=0,Ee=Ee===""?".":Ee+":",te(D))for(var Pe=0;Pe<D.length;Pe++){Ie=D[Pe];var Oe=Ee+R(Ie,Pe);ke+=Xe(Ie,H,de,Oe,Te)}else if(Oe=k(D),typeof Oe=="function")for(D=Oe.call(D),Pe=0;!(Ie=D.next()).done;)Ie=Ie.value,Oe=Ee+R(Ie,Pe++),ke+=Xe(Ie,H,de,Oe,Te);else if(Ie==="object")throw H=String(D),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ke}function wt(D,H,de){if(D==null)return D;var Ee=[],Te=0;return Xe(D,Ee,"","",function(Ie){return H.call(de,Ie,Te++)}),Ee}function Et(D){if(D._status===-1){var H=D._result;H=H(),H.then(function(de){(D._status===0||D._status===-1)&&(D._status=1,D._result=de)},function(de){(D._status===0||D._status===-1)&&(D._status=2,D._result=de)}),D._status===-1&&(D._status=0,D._result=H)}if(D._status===1)return D._result.default;throw D._result}var Me={current:null},re={transition:null},ce={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:re,ReactCurrentOwner:ae};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:wt,forEach:function(D,H,de){wt(D,function(){H.apply(this,arguments)},de)},count:function(D){var H=0;return wt(D,function(){H++}),H},toArray:function(D){return wt(D,function(H){return H})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ae.Component=V,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=J,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=ie,Ae.cloneElement=function(D,H,de){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ee=j({},D.props),Te=D.key,Ie=D.ref,ke=D._owner;if(H!=null){if(H.ref!==void 0&&(Ie=H.ref,ke=ae.current),H.key!==void 0&&(Te=""+H.key),D.type&&D.type.defaultProps)var Pe=D.type.defaultProps;for(Oe in H)me.call(H,Oe)&&!P.hasOwnProperty(Oe)&&(Ee[Oe]=H[Oe]===void 0&&Pe!==void 0?Pe[Oe]:H[Oe])}var Oe=arguments.length-2;if(Oe===1)Ee.children=de;else if(1<Oe){Pe=Array(Oe);for(var et=0;et<Oe;et++)Pe[et]=arguments[et+2];Ee.children=Pe}return{$$typeof:n,type:D.type,key:Te,ref:Ie,props:Ee,_owner:ke}},Ae.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Ae.createElement=I,Ae.createFactory=function(D){var H=I.bind(null,D);return H.type=D,H},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(D){return{$$typeof:p,render:D}},Ae.isValidElement=N,Ae.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:Et}},Ae.memo=function(D,H){return{$$typeof:v,type:D,compare:H===void 0?null:H}},Ae.startTransition=function(D){var H=re.transition;re.transition={};try{D()}finally{re.transition=H}},Ae.unstable_act=ie,Ae.useCallback=function(D,H){return Me.current.useCallback(D,H)},Ae.useContext=function(D){return Me.current.useContext(D)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(D){return Me.current.useDeferredValue(D)},Ae.useEffect=function(D,H){return Me.current.useEffect(D,H)},Ae.useId=function(){return Me.current.useId()},Ae.useImperativeHandle=function(D,H,de){return Me.current.useImperativeHandle(D,H,de)},Ae.useInsertionEffect=function(D,H){return Me.current.useInsertionEffect(D,H)},Ae.useLayoutEffect=function(D,H){return Me.current.useLayoutEffect(D,H)},Ae.useMemo=function(D,H){return Me.current.useMemo(D,H)},Ae.useReducer=function(D,H,de){return Me.current.useReducer(D,H,de)},Ae.useRef=function(D){return Me.current.useRef(D)},Ae.useState=function(D){return Me.current.useState(D)},Ae.useSyncExternalStore=function(D,H,de){return Me.current.useSyncExternalStore(D,H,de)},Ae.useTransition=function(){return Me.current.useTransition()},Ae.version="18.3.1",Ae}var jg;function Ld(){return jg||(jg=1,bf.exports=NE()),bf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function xE(){if(Bg)return za;Bg=1;var n=Ld(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,v){var E,T={},k=null,F=null;v!==void 0&&(k=""+v),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:p,key:k,ref:F,props:T,_owner:o.current}}return za.Fragment=t,za.jsx=h,za.jsxs=h,za}var zg;function OE(){return zg||(zg=1,Lf.exports=xE()),Lf.exports}var se=OE(),ee=Ld();const Xn=Rv(ee),DE=CE({__proto__:null,default:Xn},[ee]);var Bu={},Mf={exports:{}},ln={},Vf={exports:{}},Uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function LE(){return $g||($g=1,function(n){function e(re,ce){var ie=re.length;re.push(ce);e:for(;0<ie;){var D=ie-1>>>1,H=re[D];if(0<o(H,ce))re[D]=ce,re[ie]=H,ie=D;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var ce=re[0],ie=re.pop();if(ie!==ce){re[0]=ie;e:for(var D=0,H=re.length,de=H>>>1;D<de;){var Ee=2*(D+1)-1,Te=re[Ee],Ie=Ee+1,ke=re[Ie];if(0>o(Te,ie))Ie<H&&0>o(ke,Te)?(re[D]=ke,re[Ie]=ie,D=Ie):(re[D]=Te,re[Ee]=ie,D=Ee);else if(Ie<H&&0>o(ke,ie))re[D]=ke,re[Ie]=ie,D=Ie;else break e}}return ce}function o(re,ce){var ie=re.sortIndex-ce.sortIndex;return ie!==0?ie:re.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,p=h.now();n.unstable_now=function(){return h.now()-p}}var g=[],v=[],E=1,T=null,k=3,F=!1,j=!1,$=!1,V=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(re){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=re)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function te(re){if($=!1,X(re),!j)if(t(g)!==null)j=!0,Et(me);else{var ce=t(v);ce!==null&&Me(te,ce.startTime-re)}}function me(re,ce){j=!1,$&&($=!1,W(I),I=-1),F=!0;var ie=k;try{for(X(ce),T=t(g);T!==null&&(!(T.expirationTime>ce)||re&&!O());){var D=T.callback;if(typeof D=="function"){T.callback=null,k=T.priorityLevel;var H=D(T.expirationTime<=ce);ce=n.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),X(ce)}else s(g);T=t(g)}if(T!==null)var de=!0;else{var Ee=t(v);Ee!==null&&Me(te,Ee.startTime-ce),de=!1}return de}finally{T=null,k=ie,F=!1}}var ae=!1,P=null,I=-1,A=5,N=-1;function O(){return!(n.unstable_now()-N<A)}function L(){if(P!==null){var re=n.unstable_now();N=re;var ce=!0;try{ce=P(!0,re)}finally{ce?R():(ae=!1,P=null)}}else ae=!1}var R;if(typeof J=="function")R=function(){J(L)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,wt=Xe.port2;Xe.port1.onmessage=L,R=function(){wt.postMessage(null)}}else R=function(){V(L,0)};function Et(re){P=re,ae||(ae=!0,R())}function Me(re,ce){I=V(function(){re(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){j||F||(j=!0,Et(me))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(re){switch(k){case 1:case 2:case 3:var ce=3;break;default:ce=k}var ie=k;k=ce;try{return re()}finally{k=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,ce){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ie=k;k=re;try{return ce()}finally{k=ie}},n.unstable_scheduleCallback=function(re,ce,ie){var D=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?D+ie:D):ie=D,re){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ie+H,re={id:E++,callback:ce,priorityLevel:re,startTime:ie,expirationTime:H,sortIndex:-1},ie>D?(re.sortIndex=ie,e(v,re),t(g)===null&&re===t(v)&&($?(W(I),I=-1):$=!0,Me(te,ie-D))):(re.sortIndex=H,e(g,re),j||F||(j=!0,Et(me))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var ce=k;return function(){var ie=k;k=ce;try{return re.apply(this,arguments)}finally{k=ie}}}}(Uf)),Uf}var Hg;function bE(){return Hg||(Hg=1,Vf.exports=LE()),Vf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function ME(){if(Wg)return ln;Wg=1;var n=Ld(),e=bE();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){h(r,i),h(r+"Capture",i)}function h(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function k(r){return g.call(T,r)?!0:g.call(E,r)?!1:v.test(r)?T[r]=!0:(E[r]=!0,!1)}function F(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function j(r,i,a,c){if(i===null||typeof i>"u"||F(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(r,i,a,c,f,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];V[i]=new $(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(W,J);V[i]=new $(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(W,J);V[i]=new $(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(W,J);V[i]=new $(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function X(r,i,a,c){var f=V.hasOwnProperty(i)?V[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(j(i,a,f,c)&&(a=null),c||f===null?k(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var te=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),ae=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),Xe=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),re=Symbol.iterator;function ce(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var ie=Object.assign,D;function H(r){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+r}var de=!1;function Ee(r,i){if(!r||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var c=B}Reflect.construct(r,[],i)}else{try{i.call()}catch(B){c=B}r.call(i.prototype)}else{try{throw Error()}catch(B){c=B}r()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var f=B.stack.split(`
`),m=c.stack.split(`
`),_=f.length-1,S=m.length-1;1<=_&&0<=S&&f[_]!==m[S];)S--;for(;1<=_&&0<=S;_--,S--)if(f[_]!==m[S]){if(_!==1||S!==1)do if(_--,S--,0>S||f[_]!==m[S]){var C=`
`+f[_].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=_&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?H(r):""}function Te(r){switch(r.tag){case 5:return H(r.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return r=Ee(r.type,!1),r;case 11:return r=Ee(r.type.render,!1),r;case 1:return r=Ee(r.type,!0),r;default:return""}}function Ie(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case ae:return"Portal";case A:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case Xe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case wt:return i=r.displayName||null,i!==null?i:Ie(r.type)||"Memo";case Et:i=r._payload,r=r._init;try{return Ie(r(i))}catch{}}return null}function ke(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ie(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Oe(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(r){var i=Oe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function Zt(r){r._valueTracker||(r._valueTracker=et(r))}function Kt(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=Oe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Qr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ui(r,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ns(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Pe(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Go(r,i){i=i.checked,i!=null&&X(r,"checked",i,!1)}function Qo(r,i){Go(r,i);var a=Pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?xs(r,i.type,a):i.hasOwnProperty("defaultValue")&&xs(r,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Al(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function xs(r,i,a){(i!=="number"||Qr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var wr=Array.isArray;function Er(r,i,a,c){if(r=r.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=i.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function Xo(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Os(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(wr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Pe(a)}}function Ds(r,i){var a=Pe(i.value),c=Pe(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Yo(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function mt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?mt(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Tr,Jo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,f)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(Tr=Tr||document.createElement("div"),Tr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Tr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Xr(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ji=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(r){ji.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Fi[i]=Fi[r]})});function Zo(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Fi.hasOwnProperty(r)&&Fi[r]?(""+i).trim():i+"px"}function ea(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var ta=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function na(r,i){if(i){if(ta[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ra(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bi=null;function Ls(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var bs=null,Tn=null,er=null;function Ms(r){if(r=Pa(r)){if(typeof bs!="function")throw Error(t(280));var i=r.stateNode;i&&(i=nu(i),bs(r.stateNode,r.type,i))}}function tr(r){Tn?er?er.push(r):er=[r]:Tn=r}function ia(){if(Tn){var r=Tn,i=er;if(er=Tn=null,Ms(r),i)for(r=0;r<i.length;r++)Ms(i[r])}}function zi(r,i){return r(i)}function sa(){}var Ir=!1;function oa(r,i,a){if(Ir)return r(i,a);Ir=!0;try{return zi(r,i,a)}finally{Ir=!1,(Tn!==null||er!==null)&&(sa(),ia())}}function st(r,i){var a=r.stateNode;if(a===null)return null;var c=nu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Vs=!1;if(p)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Vs=!1}function $i(r,i,a,c,f,m,_,S,C){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(K){this.onError(K)}}var Hi=!1,Us=null,bn=!1,aa=null,ah={onError:function(r){Hi=!0,Us=r}};function Fs(r,i,a,c,f,m,_,S,C){Hi=!1,Us=null,$i.apply(ah,arguments)}function Pl(r,i,a,c,f,m,_,S,C){if(Fs.apply(this,arguments),Hi){if(Hi){var B=Us;Hi=!1,Us=null}else throw Error(t(198));bn||(bn=!0,aa=B)}}function Mn(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Wi(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Vn(r){if(Mn(r)!==r)throw Error(t(188))}function kl(r){var i=r.alternate;if(!i){if(i=Mn(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return Vn(f),r;if(m===c)return Vn(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var _=!1,S=f.child;S;){if(S===a){_=!0,a=f,c=m;break}if(S===c){_=!0,c=f,a=m;break}S=S.sibling}if(!_){for(S=m.child;S;){if(S===a){_=!0,a=m,c=f;break}if(S===c){_=!0,c=m,a=f;break}S=S.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function la(r){return r=kl(r),r!==null?js(r):null}function js(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=js(r);if(i!==null)return i;r=r.sibling}return null}var Bs=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,Cl=e.unstable_shouldYield,lh=e.unstable_requestPaint,ze=e.unstable_now,Nl=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,Yr=e.unstable_UserBlockingPriority,In=e.unstable_NormalPriority,ca=e.unstable_LowPriority,xl=e.unstable_IdlePriority,Ki=null,hn=null;function Ol(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ki,r,void 0,(r.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Ll,ha=Math.log,Dl=Math.LN2;function Ll(r){return r>>>=0,r===0?32:31-(ha(r)/Dl|0)|0}var zs=64,$s=4194304;function Jr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Gi(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,m=r.pingedLanes,_=a&268435455;if(_!==0){var S=_&~f;S!==0?c=Jr(S):(m&=_,m!==0&&(c=Jr(m)))}else _=a&~f,_!==0?c=Jr(_):m!==0&&(c=Jr(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Gt(i),f=1<<a,c|=r[a],i&=~f;return c}function uh(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sr(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,m=r.pendingLanes;0<m;){var _=31-Gt(m),S=1<<_,C=f[_];C===-1?((S&a)===0||(S&c)!==0)&&(f[_]=uh(S,i)):C<=i&&(r.expiredLanes|=S),m&=~S}}function fn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Qi(){var r=zs;return zs<<=1,(zs&4194240)===0&&(zs=64),r}function Zr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ei(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Gt(i),r[i]=a}function je(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Gt(a),m=1<<f;i[f]=0,c[f]=-1,r[f]=-1,a&=~m}}function ti(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Gt(a),f=1<<c;f&i|r[c]&i&&(r[c]|=i),a&=~f}}var Ce=0;function ni(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var bl,Hs,Ml,Vl,Ul,fa=!1,nr=[],Nt=null,Un=null,Fn=null,ri=new Map,Sn=new Map,rr=[],ch="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fl(r,i){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":ri.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(i.pointerId)}}function en(r,i,a,c,f,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Pa(i),i!==null&&Hs(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function hh(r,i,a,c,f){switch(i){case"focusin":return Nt=en(Nt,r,i,a,c,f),!0;case"dragenter":return Un=en(Un,r,i,a,c,f),!0;case"mouseover":return Fn=en(Fn,r,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return ri.set(m,en(ri.get(m)||null,r,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Sn.set(m,en(Sn.get(m)||null,r,i,a,c,f)),!0}return!1}function jl(r){var i=es(r.target);if(i!==null){var a=Mn(i);if(a!==null){if(i=a.tag,i===13){if(i=Wi(a),i!==null){r.blockedOn=i,Ul(r.priority,function(){Ml(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Rr(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Ws(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Bi=c,a.target.dispatchEvent(c),Bi=null}else return i=Pa(a),i!==null&&Hs(i),r.blockedOn=a,!1;i.shift()}return!0}function Xi(r,i,a){Rr(r)&&a.delete(i)}function Bl(){fa=!1,Nt!==null&&Rr(Nt)&&(Nt=null),Un!==null&&Rr(Un)&&(Un=null),Fn!==null&&Rr(Fn)&&(Fn=null),ri.forEach(Xi),Sn.forEach(Xi)}function jn(r,i){r.blockedOn===i&&(r.blockedOn=null,fa||(fa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Bl)))}function Bn(r){function i(f){return jn(f,r)}if(0<nr.length){jn(nr[0],r);for(var a=1;a<nr.length;a++){var c=nr[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Nt!==null&&jn(Nt,r),Un!==null&&jn(Un,r),Fn!==null&&jn(Fn,r),ri.forEach(i),Sn.forEach(i),a=0;a<rr.length;a++)c=rr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)jl(a),a.blockedOn===null&&rr.shift()}var Ar=te.ReactCurrentBatchConfig,ii=!0;function Ge(r,i,a,c){var f=Ce,m=Ar.transition;Ar.transition=null;try{Ce=1,da(r,i,a,c)}finally{Ce=f,Ar.transition=m}}function fh(r,i,a,c){var f=Ce,m=Ar.transition;Ar.transition=null;try{Ce=4,da(r,i,a,c)}finally{Ce=f,Ar.transition=m}}function da(r,i,a,c){if(ii){var f=Ws(r,i,a,c);if(f===null)Ih(r,i,c,Yi,a),Fl(r,c);else if(hh(f,r,i,a,c))c.stopPropagation();else if(Fl(r,c),i&4&&-1<ch.indexOf(r)){for(;f!==null;){var m=Pa(f);if(m!==null&&bl(m),m=Ws(r,i,a,c),m===null&&Ih(r,i,c,Yi,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ih(r,i,c,null,a)}}var Yi=null;function Ws(r,i,a,c){if(Yi=null,r=Ls(c),r=es(r),r!==null)if(i=Mn(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Wi(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Yi=r,null}function pa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nl()){case qi:return 1;case Yr:return 4;case In:case ca:return 16;case xl:return 536870912;default:return 16}default:return 16}}var dn=null,qs=null,tn=null;function ma(){if(tn)return tn;var r,i=qs,a=i.length,c,f="value"in dn?dn.value:dn.textContent,m=f.length;for(r=0;r<a&&i[r]===f[r];r++);var _=a-r;for(c=1;c<=_&&i[a-c]===f[m-c];c++);return tn=f.slice(r,1<c?1-c:void 0)}function Ks(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function ir(){return!0}function ga(){return!1}function xt(r){function i(a,c,f,m,_){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ir:ga,this.isPropagationStopped=ga,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ir)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ir)},persist:function(){},isPersistent:ir}),i}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gs=xt(zn),sr=ie({},zn,{view:0,detail:0}),dh=xt(sr),Qs,Pr,si,Ji=ie({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==si&&(si&&r.type==="mousemove"?(Qs=r.screenX-si.screenX,Pr=r.screenY-si.screenY):Pr=Qs=0,si=r),Qs)},movementY:function(r){return"movementY"in r?r.movementY:Pr}}),Xs=xt(Ji),ya=ie({},Ji,{dataTransfer:0}),zl=xt(ya),Ys=ie({},sr,{relatedTarget:0}),Js=xt(Ys),$l=ie({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),kr=xt($l),Hl=ie({},zn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Wl=xt(Hl),ql=ie({},zn,{data:0}),va=xt(ql),Zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gl(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Kl[r])?!!i[r]:!1}function or(){return Gl}var u=ie({},sr,{key:function(r){if(r.key){var i=Zs[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Ks(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(r){return r.type==="keypress"?Ks(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ks(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),d=xt(u),y=ie({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=xt(y),b=ie({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),z=xt(b),ne=ie({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=xt(ne),yt=ie({},Ji,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),De=xt(yt),Tt=[9,13,27,32],ct=p&&"CompositionEvent"in window,Rn=null;p&&"documentMode"in document&&(Rn=document.documentMode);var pn=p&&"TextEvent"in window&&!Rn,Zi=p&&(!ct||Rn&&8<Rn&&11>=Rn),eo=" ",Dp=!1;function Lp(r,i){switch(r){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var to=!1;function Aw(r,i){switch(r){case"compositionend":return bp(i);case"keypress":return i.which!==32?null:(Dp=!0,eo);case"textInput":return r=i.data,r===eo&&Dp?null:r;default:return null}}function Pw(r,i){if(to)return r==="compositionend"||!ct&&Lp(r,i)?(r=ma(),tn=qs=dn=null,to=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Zi&&i.locale!=="ko"?null:i.data;default:return null}}var kw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!kw[r.type]:i==="textarea"}function Vp(r,i,a,c){tr(c),i=Zl(i,"onChange"),0<i.length&&(a=new Gs("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var _a=null,wa=null;function Cw(r){tm(r,0)}function Ql(r){var i=oo(r);if(Kt(i))return r}function Nw(r,i){if(r==="change")return i}var Up=!1;if(p){var ph;if(p){var mh="oninput"in document;if(!mh){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),mh=typeof Fp.oninput=="function"}ph=mh}else ph=!1;Up=ph&&(!document.documentMode||9<document.documentMode)}function jp(){_a&&(_a.detachEvent("onpropertychange",Bp),wa=_a=null)}function Bp(r){if(r.propertyName==="value"&&Ql(wa)){var i=[];Vp(i,wa,r,Ls(r)),oa(Cw,i)}}function xw(r,i,a){r==="focusin"?(jp(),_a=i,wa=a,_a.attachEvent("onpropertychange",Bp)):r==="focusout"&&jp()}function Ow(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ql(wa)}function Dw(r,i){if(r==="click")return Ql(i)}function Lw(r,i){if(r==="input"||r==="change")return Ql(i)}function bw(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var $n=typeof Object.is=="function"?Object.is:bw;function Ea(r,i){if($n(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!g.call(i,f)||!$n(r[f],i[f]))return!1}return!0}function zp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function $p(r,i){var a=zp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zp(a)}}function Hp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Hp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Wp(){for(var r=window,i=Qr();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Qr(r.document)}return i}function gh(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function Mw(r){var i=Wp(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&Hp(a.ownerDocument.documentElement,a)){if(c!==null&&gh(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!r.extend&&m>c&&(f=c,c=m,m=f),f=$p(a,m);var _=$p(a,c);f&&_&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),r.removeAllRanges(),m>c?(r.addRange(i),r.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Vw=p&&"documentMode"in document&&11>=document.documentMode,no=null,yh=null,Ta=null,vh=!1;function qp(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vh||no==null||no!==Qr(c)||(c=no,"selectionStart"in c&&gh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ta&&Ea(Ta,c)||(Ta=c,c=Zl(yh,"onSelect"),0<c.length&&(i=new Gs("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=no)))}function Xl(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ro={animationend:Xl("Animation","AnimationEnd"),animationiteration:Xl("Animation","AnimationIteration"),animationstart:Xl("Animation","AnimationStart"),transitionend:Xl("Transition","TransitionEnd")},_h={},Kp={};p&&(Kp=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Yl(r){if(_h[r])return _h[r];if(!ro[r])return r;var i=ro[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Kp)return _h[r]=i[a];return r}var Gp=Yl("animationend"),Qp=Yl("animationiteration"),Xp=Yl("animationstart"),Yp=Yl("transitionend"),Jp=new Map,Zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function oi(r,i){Jp.set(r,i),l(i,[r])}for(var wh=0;wh<Zp.length;wh++){var Eh=Zp[wh],Uw=Eh.toLowerCase(),Fw=Eh[0].toUpperCase()+Eh.slice(1);oi(Uw,"on"+Fw)}oi(Gp,"onAnimationEnd"),oi(Qp,"onAnimationIteration"),oi(Xp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(Yp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function em(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,Pl(c,i,void 0,r),r.currentTarget=null}function tm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var S=c[_],C=S.instance,B=S.currentTarget;if(S=S.listener,C!==m&&f.isPropagationStopped())break e;em(f,S,B),m=C}else for(_=0;_<c.length;_++){if(S=c[_],C=S.instance,B=S.currentTarget,S=S.listener,C!==m&&f.isPropagationStopped())break e;em(f,S,B),m=C}}}if(bn)throw r=aa,bn=!1,aa=null,r}function We(r,i){var a=i[Ch];a===void 0&&(a=i[Ch]=new Set);var c=r+"__bubble";a.has(c)||(nm(i,r,2,!1),a.add(c))}function Th(r,i,a){var c=0;i&&(c|=4),nm(a,r,c,i)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function Sa(r){if(!r[Jl]){r[Jl]=!0,s.forEach(function(a){a!=="selectionchange"&&(jw.has(a)||Th(a,!1,r),Th(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Jl]||(i[Jl]=!0,Th("selectionchange",!1,i))}}function nm(r,i,a,c){switch(pa(i)){case 1:var f=Ge;break;case 4:f=fh;break;default:f=da}a=f.bind(null,i,a,r),f=void 0,!Vs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(i,a,{capture:!0,passive:f}):r.addEventListener(i,a,!0):f!==void 0?r.addEventListener(i,a,{passive:f}):r.addEventListener(i,a,!1)}function Ih(r,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var S=c.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var C=_.tag;if((C===3||C===4)&&(C=_.stateNode.containerInfo,C===f||C.nodeType===8&&C.parentNode===f))return;_=_.return}for(;S!==null;){if(_=es(S),_===null)return;if(C=_.tag,C===5||C===6){c=m=_;continue e}S=S.parentNode}}c=c.return}oa(function(){var B=m,K=Ls(a),G=[];e:{var q=Jp.get(r);if(q!==void 0){var oe=Gs,ue=r;switch(r){case"keypress":if(Ks(a)===0)break e;case"keydown":case"keyup":oe=d;break;case"focusin":ue="focus",oe=Js;break;case"focusout":ue="blur",oe=Js;break;case"beforeblur":case"afterblur":oe=Js;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Xs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=zl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=z;break;case Gp:case Qp:case Xp:oe=kr;break;case Yp:oe=Fe;break;case"scroll":oe=dh;break;case"wheel":oe=De;break;case"copy":case"cut":case"paste":oe=Wl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=w}var he=(i&4)!==0,ot=!he&&r==="scroll",M=he?q!==null?q+"Capture":null:q;he=[];for(var x=B,U;x!==null;){U=x;var Z=U.stateNode;if(U.tag===5&&Z!==null&&(U=Z,M!==null&&(Z=st(x,M),Z!=null&&he.push(Ra(x,Z,U)))),ot)break;x=x.return}0<he.length&&(q=new oe(q,ue,null,a,K),G.push({event:q,listeners:he}))}}if((i&7)===0){e:{if(q=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",q&&a!==Bi&&(ue=a.relatedTarget||a.fromElement)&&(es(ue)||ue[Cr]))break e;if((oe||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,oe?(ue=a.relatedTarget||a.toElement,oe=B,ue=ue?es(ue):null,ue!==null&&(ot=Mn(ue),ue!==ot||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(oe=null,ue=B),oe!==ue)){if(he=Xs,Z="onMouseLeave",M="onMouseEnter",x="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,Z="onPointerLeave",M="onPointerEnter",x="pointer"),ot=oe==null?q:oo(oe),U=ue==null?q:oo(ue),q=new he(Z,x+"leave",oe,a,K),q.target=ot,q.relatedTarget=U,Z=null,es(K)===B&&(he=new he(M,x+"enter",ue,a,K),he.target=U,he.relatedTarget=ot,Z=he),ot=Z,oe&&ue)t:{for(he=oe,M=ue,x=0,U=he;U;U=io(U))x++;for(U=0,Z=M;Z;Z=io(Z))U++;for(;0<x-U;)he=io(he),x--;for(;0<U-x;)M=io(M),U--;for(;x--;){if(he===M||M!==null&&he===M.alternate)break t;he=io(he),M=io(M)}he=null}else he=null;oe!==null&&rm(G,q,oe,he,!1),ue!==null&&ot!==null&&rm(G,ot,ue,he,!0)}}e:{if(q=B?oo(B):window,oe=q.nodeName&&q.nodeName.toLowerCase(),oe==="select"||oe==="input"&&q.type==="file")var fe=Nw;else if(Mp(q))if(Up)fe=Lw;else{fe=Ow;var ge=xw}else(oe=q.nodeName)&&oe.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(fe=Dw);if(fe&&(fe=fe(r,B))){Vp(G,fe,a,K);break e}ge&&ge(r,q,B),r==="focusout"&&(ge=q._wrapperState)&&ge.controlled&&q.type==="number"&&xs(q,"number",q.value)}switch(ge=B?oo(B):window,r){case"focusin":(Mp(ge)||ge.contentEditable==="true")&&(no=ge,yh=B,Ta=null);break;case"focusout":Ta=yh=no=null;break;case"mousedown":vh=!0;break;case"contextmenu":case"mouseup":case"dragend":vh=!1,qp(G,a,K);break;case"selectionchange":if(Vw)break;case"keydown":case"keyup":qp(G,a,K)}var ye;if(ct)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else to?Lp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Zi&&a.locale!=="ko"&&(to||we!=="onCompositionStart"?we==="onCompositionEnd"&&to&&(ye=ma()):(dn=K,qs="value"in dn?dn.value:dn.textContent,to=!0)),ge=Zl(B,we),0<ge.length&&(we=new va(we,r,null,a,K),G.push({event:we,listeners:ge}),ye?we.data=ye:(ye=bp(a),ye!==null&&(we.data=ye)))),(ye=pn?Aw(r,a):Pw(r,a))&&(B=Zl(B,"onBeforeInput"),0<B.length&&(K=new va("onBeforeInput","beforeinput",null,a,K),G.push({event:K,listeners:B}),K.data=ye))}tm(G,i)})}function Ra(r,i,a){return{instance:r,listener:i,currentTarget:a}}function Zl(r,i){for(var a=i+"Capture",c=[];r!==null;){var f=r,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=st(r,a),m!=null&&c.unshift(Ra(r,m,f)),m=st(r,i),m!=null&&c.push(Ra(r,m,f))),r=r.return}return c}function io(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function rm(r,i,a,c,f){for(var m=i._reactName,_=[];a!==null&&a!==c;){var S=a,C=S.alternate,B=S.stateNode;if(C!==null&&C===c)break;S.tag===5&&B!==null&&(S=B,f?(C=st(a,m),C!=null&&_.unshift(Ra(a,C,S))):f||(C=st(a,m),C!=null&&_.push(Ra(a,C,S)))),a=a.return}_.length!==0&&r.push({event:i,listeners:_})}var Bw=/\r\n?/g,zw=/\u0000|\uFFFD/g;function im(r){return(typeof r=="string"?r:""+r).replace(Bw,`
`).replace(zw,"")}function eu(r,i,a){if(i=im(i),im(r)!==i&&a)throw Error(t(425))}function tu(){}var Sh=null,Rh=null;function Ah(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ph=typeof setTimeout=="function"?setTimeout:void 0,$w=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,Hw=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(r){return sm.resolve(null).then(r).catch(Ww)}:Ph;function Ww(r){setTimeout(function(){throw r})}function kh(r,i){var a=i,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),Bn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Bn(i)}function ai(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function om(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var so=Math.random().toString(36).slice(2),ar="__reactFiber$"+so,Aa="__reactProps$"+so,Cr="__reactContainer$"+so,Ch="__reactEvents$"+so,qw="__reactListeners$"+so,Kw="__reactHandles$"+so;function es(r){var i=r[ar];if(i)return i;for(var a=r.parentNode;a;){if(i=a[Cr]||a[ar]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=om(r);r!==null;){if(a=r[ar])return a;r=om(r)}return i}r=a,a=r.parentNode}return null}function Pa(r){return r=r[ar]||r[Cr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function oo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function nu(r){return r[Aa]||null}var Nh=[],ao=-1;function li(r){return{current:r}}function qe(r){0>ao||(r.current=Nh[ao],Nh[ao]=null,ao--)}function $e(r,i){ao++,Nh[ao]=r.current,r.current=i}var ui={},Vt=li(ui),nn=li(!1),ts=ui;function lo(r,i){var a=r.type.contextTypes;if(!a)return ui;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=f),f}function rn(r){return r=r.childContextTypes,r!=null}function ru(){qe(nn),qe(Vt)}function am(r,i,a){if(Vt.current!==ui)throw Error(t(168));$e(Vt,i),$e(nn,a)}function lm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ke(r)||"Unknown",f));return ie({},a,c)}function iu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ui,ts=Vt.current,$e(Vt,r),$e(nn,nn.current),!0}function um(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=lm(r,i,ts),c.__reactInternalMemoizedMergedChildContext=r,qe(nn),qe(Vt),$e(Vt,r)):qe(nn),$e(nn,a)}var Nr=null,su=!1,xh=!1;function cm(r){Nr===null?Nr=[r]:Nr.push(r)}function Gw(r){su=!0,cm(r)}function ci(){if(!xh&&Nr!==null){xh=!0;var r=0,i=Ce;try{var a=Nr;for(Ce=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Nr=null,su=!1}catch(f){throw Nr!==null&&(Nr=Nr.slice(r+1)),Bs(qi,ci),f}finally{Ce=i,xh=!1}}return null}var uo=[],co=0,ou=null,au=0,An=[],Pn=0,ns=null,xr=1,Or="";function rs(r,i){uo[co++]=au,uo[co++]=ou,ou=r,au=i}function hm(r,i,a){An[Pn++]=xr,An[Pn++]=Or,An[Pn++]=ns,ns=r;var c=xr;r=Or;var f=32-Gt(c)-1;c&=~(1<<f),a+=1;var m=32-Gt(i)+f;if(30<m){var _=f-f%5;m=(c&(1<<_)-1).toString(32),c>>=_,f-=_,xr=1<<32-Gt(i)+f|a<<f|c,Or=m+r}else xr=1<<m|a<<f|c,Or=r}function Oh(r){r.return!==null&&(rs(r,1),hm(r,1,0))}function Dh(r){for(;r===ou;)ou=uo[--co],uo[co]=null,au=uo[--co],uo[co]=null;for(;r===ns;)ns=An[--Pn],An[Pn]=null,Or=An[--Pn],An[Pn]=null,xr=An[--Pn],An[Pn]=null}var mn=null,gn=null,Qe=!1,Hn=null;function fm(r,i){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function dm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,mn=r,gn=ai(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,mn=r,gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ns!==null?{id:xr,overflow:Or}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,mn=r,gn=null,!0):!1;default:return!1}}function Lh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function bh(r){if(Qe){var i=gn;if(i){var a=i;if(!dm(r,i)){if(Lh(r))throw Error(t(418));i=ai(a.nextSibling);var c=mn;i&&dm(r,i)?fm(c,a):(r.flags=r.flags&-4097|2,Qe=!1,mn=r)}}else{if(Lh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Qe=!1,mn=r}}}function pm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mn=r}function lu(r){if(r!==mn)return!1;if(!Qe)return pm(r),Qe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Ah(r.type,r.memoizedProps)),i&&(i=gn)){if(Lh(r))throw mm(),Error(t(418));for(;i;)fm(r,i),i=ai(i.nextSibling)}if(pm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){gn=ai(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}gn=null}}else gn=mn?ai(r.stateNode.nextSibling):null;return!0}function mm(){for(var r=gn;r;)r=ai(r.nextSibling)}function ho(){gn=mn=null,Qe=!1}function Mh(r){Hn===null?Hn=[r]:Hn.push(r)}var Qw=te.ReactCurrentBatchConfig;function ka(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,m=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var S=f.refs;_===null?delete S[m]:S[m]=_},i._stringRef=m,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function uu(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function gm(r){var i=r._init;return i(r._payload)}function ym(r){function i(M,x){if(r){var U=M.deletions;U===null?(M.deletions=[x],M.flags|=16):U.push(x)}}function a(M,x){if(!r)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function f(M,x){return M=vi(M,x),M.index=0,M.sibling=null,M}function m(M,x,U){return M.index=U,r?(U=M.alternate,U!==null?(U=U.index,U<x?(M.flags|=2,x):U):(M.flags|=2,x)):(M.flags|=1048576,x)}function _(M){return r&&M.alternate===null&&(M.flags|=2),M}function S(M,x,U,Z){return x===null||x.tag!==6?(x=kf(U,M.mode,Z),x.return=M,x):(x=f(x,U),x.return=M,x)}function C(M,x,U,Z){var fe=U.type;return fe===P?K(M,x,U.props.children,Z,U.key):x!==null&&(x.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Et&&gm(fe)===x.type)?(Z=f(x,U.props),Z.ref=ka(M,x,U),Z.return=M,Z):(Z=Du(U.type,U.key,U.props,null,M.mode,Z),Z.ref=ka(M,x,U),Z.return=M,Z)}function B(M,x,U,Z){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=Cf(U,M.mode,Z),x.return=M,x):(x=f(x,U.children||[]),x.return=M,x)}function K(M,x,U,Z,fe){return x===null||x.tag!==7?(x=hs(U,M.mode,Z,fe),x.return=M,x):(x=f(x,U),x.return=M,x)}function G(M,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return x=kf(""+x,M.mode,U),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case me:return U=Du(x.type,x.key,x.props,null,M.mode,U),U.ref=ka(M,null,x),U.return=M,U;case ae:return x=Cf(x,M.mode,U),x.return=M,x;case Et:var Z=x._init;return G(M,Z(x._payload),U)}if(wr(x)||ce(x))return x=hs(x,M.mode,U,null),x.return=M,x;uu(M,x)}return null}function q(M,x,U,Z){var fe=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return fe!==null?null:S(M,x,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case me:return U.key===fe?C(M,x,U,Z):null;case ae:return U.key===fe?B(M,x,U,Z):null;case Et:return fe=U._init,q(M,x,fe(U._payload),Z)}if(wr(U)||ce(U))return fe!==null?null:K(M,x,U,Z,null);uu(M,U)}return null}function oe(M,x,U,Z,fe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return M=M.get(U)||null,S(x,M,""+Z,fe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case me:return M=M.get(Z.key===null?U:Z.key)||null,C(x,M,Z,fe);case ae:return M=M.get(Z.key===null?U:Z.key)||null,B(x,M,Z,fe);case Et:var ge=Z._init;return oe(M,x,U,ge(Z._payload),fe)}if(wr(Z)||ce(Z))return M=M.get(U)||null,K(x,M,Z,fe,null);uu(x,Z)}return null}function ue(M,x,U,Z){for(var fe=null,ge=null,ye=x,we=x=0,Rt=null;ye!==null&&we<U.length;we++){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var Ve=q(M,ye,U[we],Z);if(Ve===null){ye===null&&(ye=Rt);break}r&&ye&&Ve.alternate===null&&i(M,ye),x=m(Ve,x,we),ge===null?fe=Ve:ge.sibling=Ve,ge=Ve,ye=Rt}if(we===U.length)return a(M,ye),Qe&&rs(M,we),fe;if(ye===null){for(;we<U.length;we++)ye=G(M,U[we],Z),ye!==null&&(x=m(ye,x,we),ge===null?fe=ye:ge.sibling=ye,ge=ye);return Qe&&rs(M,we),fe}for(ye=c(M,ye);we<U.length;we++)Rt=oe(ye,M,we,U[we],Z),Rt!==null&&(r&&Rt.alternate!==null&&ye.delete(Rt.key===null?we:Rt.key),x=m(Rt,x,we),ge===null?fe=Rt:ge.sibling=Rt,ge=Rt);return r&&ye.forEach(function(_i){return i(M,_i)}),Qe&&rs(M,we),fe}function he(M,x,U,Z){var fe=ce(U);if(typeof fe!="function")throw Error(t(150));if(U=fe.call(U),U==null)throw Error(t(151));for(var ge=fe=null,ye=x,we=x=0,Rt=null,Ve=U.next();ye!==null&&!Ve.done;we++,Ve=U.next()){ye.index>we?(Rt=ye,ye=null):Rt=ye.sibling;var _i=q(M,ye,Ve.value,Z);if(_i===null){ye===null&&(ye=Rt);break}r&&ye&&_i.alternate===null&&i(M,ye),x=m(_i,x,we),ge===null?fe=_i:ge.sibling=_i,ge=_i,ye=Rt}if(Ve.done)return a(M,ye),Qe&&rs(M,we),fe;if(ye===null){for(;!Ve.done;we++,Ve=U.next())Ve=G(M,Ve.value,Z),Ve!==null&&(x=m(Ve,x,we),ge===null?fe=Ve:ge.sibling=Ve,ge=Ve);return Qe&&rs(M,we),fe}for(ye=c(M,ye);!Ve.done;we++,Ve=U.next())Ve=oe(ye,M,we,Ve.value,Z),Ve!==null&&(r&&Ve.alternate!==null&&ye.delete(Ve.key===null?we:Ve.key),x=m(Ve,x,we),ge===null?fe=Ve:ge.sibling=Ve,ge=Ve);return r&&ye.forEach(function(kE){return i(M,kE)}),Qe&&rs(M,we),fe}function ot(M,x,U,Z){if(typeof U=="object"&&U!==null&&U.type===P&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case me:e:{for(var fe=U.key,ge=x;ge!==null;){if(ge.key===fe){if(fe=U.type,fe===P){if(ge.tag===7){a(M,ge.sibling),x=f(ge,U.props.children),x.return=M,M=x;break e}}else if(ge.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Et&&gm(fe)===ge.type){a(M,ge.sibling),x=f(ge,U.props),x.ref=ka(M,ge,U),x.return=M,M=x;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}U.type===P?(x=hs(U.props.children,M.mode,Z,U.key),x.return=M,M=x):(Z=Du(U.type,U.key,U.props,null,M.mode,Z),Z.ref=ka(M,x,U),Z.return=M,M=Z)}return _(M);case ae:e:{for(ge=U.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){a(M,x.sibling),x=f(x,U.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else i(M,x);x=x.sibling}x=Cf(U,M.mode,Z),x.return=M,M=x}return _(M);case Et:return ge=U._init,ot(M,x,ge(U._payload),Z)}if(wr(U))return ue(M,x,U,Z);if(ce(U))return he(M,x,U,Z);uu(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,x!==null&&x.tag===6?(a(M,x.sibling),x=f(x,U),x.return=M,M=x):(a(M,x),x=kf(U,M.mode,Z),x.return=M,M=x),_(M)):a(M,x)}return ot}var fo=ym(!0),vm=ym(!1),cu=li(null),hu=null,po=null,Vh=null;function Uh(){Vh=po=hu=null}function Fh(r){var i=cu.current;qe(cu),r._currentValue=i}function jh(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function mo(r,i){hu=r,Vh=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(sn=!0),r.firstContext=null)}function kn(r){var i=r._currentValue;if(Vh!==r)if(r={context:r,memoizedValue:i,next:null},po===null){if(hu===null)throw Error(t(308));po=r,hu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return i}var is=null;function Bh(r){is===null?is=[r]:is.push(r)}function _m(r,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Bh(i)):(a.next=f.next,f.next=a),i.interleaved=a,Dr(r,c)}function Dr(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var hi=!1;function zh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Lr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function fi(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Dr(r,a)}return f=c.interleaved,f===null?(i.next=i,Bh(c)):(i.next=f.next,f.next=i),c.interleaved=i,Dr(r,a)}function fu(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ti(r,a)}}function Em(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function du(r,i,a,c){var f=r.updateQueue;hi=!1;var m=f.firstBaseUpdate,_=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var C=S,B=C.next;C.next=null,_===null?m=B:_.next=B,_=C;var K=r.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==_&&(S===null?K.firstBaseUpdate=B:S.next=B,K.lastBaseUpdate=C))}if(m!==null){var G=f.baseState;_=0,K=B=C=null,S=m;do{var q=S.lane,oe=S.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=r,he=S;switch(q=i,oe=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){G=ue.call(oe,G,q);break e}G=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,q=typeof ue=="function"?ue.call(oe,G,q):ue,q==null)break e;G=ie({},G,q);break e;case 2:hi=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,q=f.effects,q===null?f.effects=[S]:q.push(S))}else oe={eventTime:oe,lane:q,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(B=K=oe,C=G):K=K.next=oe,_|=q;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;q=S,S=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);if(K===null&&(C=G),f.baseState=C,f.firstBaseUpdate=B,f.lastBaseUpdate=K,i=f.shared.interleaved,i!==null){f=i;do _|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);as|=_,r.lanes=_,r.memoizedState=G}}function Tm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ca={},lr=li(Ca),Na=li(Ca),xa=li(Ca);function ss(r){if(r===Ca)throw Error(t(174));return r}function $h(r,i){switch($e(xa,i),$e(Na,r),$e(lr,Ca),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:gt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=gt(i,r)}qe(lr),$e(lr,i)}function go(){qe(lr),qe(Na),qe(xa)}function Im(r){ss(xa.current);var i=ss(lr.current),a=gt(i,r.type);i!==a&&($e(Na,r),$e(lr,a))}function Hh(r){Na.current===r&&(qe(lr),qe(Na))}var Ye=li(0);function pu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Wh=[];function qh(){for(var r=0;r<Wh.length;r++)Wh[r]._workInProgressVersionPrimary=null;Wh.length=0}var mu=te.ReactCurrentDispatcher,Kh=te.ReactCurrentBatchConfig,os=0,Je=null,vt=null,It=null,gu=!1,Oa=!1,Da=0,Xw=0;function Ut(){throw Error(t(321))}function Gh(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!$n(r[a],i[a]))return!1;return!0}function Qh(r,i,a,c,f,m){if(os=m,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,mu.current=r===null||r.memoizedState===null?eE:tE,r=a(c,f),Oa){m=0;do{if(Oa=!1,Da=0,25<=m)throw Error(t(301));m+=1,It=vt=null,i.updateQueue=null,mu.current=nE,r=a(c,f)}while(Oa)}if(mu.current=_u,i=vt!==null&&vt.next!==null,os=0,It=vt=Je=null,gu=!1,i)throw Error(t(300));return r}function Xh(){var r=Da!==0;return Da=0,r}function ur(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Je.memoizedState=It=r:It=It.next=r,It}function Cn(){if(vt===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var i=It===null?Je.memoizedState:It.next;if(i!==null)It=i,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},It===null?Je.memoizedState=It=r:It=It.next=r}return It}function La(r,i){return typeof i=="function"?i(r):i}function Yh(r){var i=Cn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=vt,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var _=f.next;f.next=m.next,m.next=_}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var S=_=null,C=null,B=m;do{var K=B.lane;if((os&K)===K)C!==null&&(C=C.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:r(c,B.action);else{var G={lane:K,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};C===null?(S=C=G,_=c):C=C.next=G,Je.lanes|=K,as|=K}B=B.next}while(B!==null&&B!==m);C===null?_=c:C.next=S,$n(c,i.memoizedState)||(sn=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=C,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do m=f.lane,Je.lanes|=m,as|=m,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Jh(r){var i=Cn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do m=r(m,_.action),_=_.next;while(_!==f);$n(m,i.memoizedState)||(sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Sm(){}function Rm(r,i){var a=Je,c=Cn(),f=i(),m=!$n(c.memoizedState,f);if(m&&(c.memoizedState=f,sn=!0),c=c.queue,Zh(km.bind(null,a,c,r),[r]),c.getSnapshot!==i||m||It!==null&&It.memoizedState.tag&1){if(a.flags|=2048,ba(9,Pm.bind(null,a,c,f,i),void 0,null),St===null)throw Error(t(349));(os&30)!==0||Am(a,i,f)}return f}function Am(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Pm(r,i,a,c){i.value=a,i.getSnapshot=c,Cm(i)&&Nm(r)}function km(r,i,a){return a(function(){Cm(i)&&Nm(r)})}function Cm(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!$n(r,a)}catch{return!0}}function Nm(r){var i=Dr(r,1);i!==null&&Gn(i,r,1,-1)}function xm(r){var i=ur();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},i.queue=r,r=r.dispatch=Zw.bind(null,Je,r),[i.memoizedState,r]}function ba(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Om(){return Cn().memoizedState}function yu(r,i,a,c){var f=ur();Je.flags|=r,f.memoizedState=ba(1|i,a,void 0,c===void 0?null:c)}function vu(r,i,a,c){var f=Cn();c=c===void 0?null:c;var m=void 0;if(vt!==null){var _=vt.memoizedState;if(m=_.destroy,c!==null&&Gh(c,_.deps)){f.memoizedState=ba(i,a,m,c);return}}Je.flags|=r,f.memoizedState=ba(1|i,a,m,c)}function Dm(r,i){return yu(8390656,8,r,i)}function Zh(r,i){return vu(2048,8,r,i)}function Lm(r,i){return vu(4,2,r,i)}function bm(r,i){return vu(4,4,r,i)}function Mm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Vm(r,i,a){return a=a!=null?a.concat([r]):null,vu(4,4,Mm.bind(null,i,r),a)}function ef(){}function Um(r,i){var a=Cn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gh(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function Fm(r,i){var a=Cn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Gh(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function jm(r,i,a){return(os&21)===0?(r.baseState&&(r.baseState=!1,sn=!0),r.memoizedState=a):($n(a,i)||(a=Qi(),Je.lanes|=a,as|=a,r.baseState=!0),i)}function Yw(r,i){var a=Ce;Ce=a!==0&&4>a?a:4,r(!0);var c=Kh.transition;Kh.transition={};try{r(!1),i()}finally{Ce=a,Kh.transition=c}}function Bm(){return Cn().memoizedState}function Jw(r,i,a){var c=gi(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},zm(r))$m(i,a);else if(a=_m(r,i,a,c),a!==null){var f=Yt();Gn(a,r,c,f),Hm(a,i,c)}}function Zw(r,i,a){var c=gi(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(zm(r))$m(i,f);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,S=m(_,a);if(f.hasEagerState=!0,f.eagerState=S,$n(S,_)){var C=i.interleaved;C===null?(f.next=f,Bh(i)):(f.next=C.next,C.next=f),i.interleaved=f;return}}catch{}finally{}a=_m(r,i,f,c),a!==null&&(f=Yt(),Gn(a,r,c,f),Hm(a,i,c))}}function zm(r){var i=r.alternate;return r===Je||i!==null&&i===Je}function $m(r,i){Oa=gu=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function Hm(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,ti(r,a)}}var _u={readContext:kn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},eE={readContext:kn,useCallback:function(r,i){return ur().memoizedState=[r,i===void 0?null:i],r},useContext:kn,useEffect:Dm,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,yu(4194308,4,Mm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return yu(4194308,4,r,i)},useInsertionEffect:function(r,i){return yu(4,2,r,i)},useMemo:function(r,i){var a=ur();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=ur();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=Jw.bind(null,Je,r),[c.memoizedState,r]},useRef:function(r){var i=ur();return r={current:r},i.memoizedState=r},useState:xm,useDebugValue:ef,useDeferredValue:function(r){return ur().memoizedState=r},useTransition:function(){var r=xm(!1),i=r[0];return r=Yw.bind(null,r[1]),ur().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=Je,f=ur();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),St===null)throw Error(t(349));(os&30)!==0||Am(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,Dm(km.bind(null,c,m,r),[r]),c.flags|=2048,ba(9,Pm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var r=ur(),i=St.identifierPrefix;if(Qe){var a=Or,c=xr;a=(c&~(1<<32-Gt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Xw++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},tE={readContext:kn,useCallback:Um,useContext:kn,useEffect:Zh,useImperativeHandle:Vm,useInsertionEffect:Lm,useLayoutEffect:bm,useMemo:Fm,useReducer:Yh,useRef:Om,useState:function(){return Yh(La)},useDebugValue:ef,useDeferredValue:function(r){var i=Cn();return jm(i,vt.memoizedState,r)},useTransition:function(){var r=Yh(La)[0],i=Cn().memoizedState;return[r,i]},useMutableSource:Sm,useSyncExternalStore:Rm,useId:Bm,unstable_isNewReconciler:!1},nE={readContext:kn,useCallback:Um,useContext:kn,useEffect:Zh,useImperativeHandle:Vm,useInsertionEffect:Lm,useLayoutEffect:bm,useMemo:Fm,useReducer:Jh,useRef:Om,useState:function(){return Jh(La)},useDebugValue:ef,useDeferredValue:function(r){var i=Cn();return vt===null?i.memoizedState=r:jm(i,vt.memoizedState,r)},useTransition:function(){var r=Jh(La)[0],i=Cn().memoizedState;return[r,i]},useMutableSource:Sm,useSyncExternalStore:Rm,useId:Bm,unstable_isNewReconciler:!1};function Wn(r,i){if(r&&r.defaultProps){i=ie({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function tf(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var wu={isMounted:function(r){return(r=r._reactInternals)?Mn(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Yt(),f=gi(r),m=Lr(c,f);m.payload=i,a!=null&&(m.callback=a),i=fi(r,m,f),i!==null&&(Gn(i,r,f,c),fu(i,r,f))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Yt(),f=gi(r),m=Lr(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=fi(r,m,f),i!==null&&(Gn(i,r,f,c),fu(i,r,f))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Yt(),c=gi(r),f=Lr(a,c);f.tag=2,i!=null&&(f.callback=i),i=fi(r,f,c),i!==null&&(Gn(i,r,c,a),fu(i,r,c))}};function Wm(r,i,a,c,f,m,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(f,m):!0}function qm(r,i,a){var c=!1,f=ui,m=i.contextType;return typeof m=="object"&&m!==null?m=kn(m):(f=rn(i)?ts:Vt.current,c=i.contextTypes,m=(c=c!=null)?lo(r,f):ui),i=new i(a,m),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wu,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=m),i}function Km(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&wu.enqueueReplaceState(i,i.state,null)}function nf(r,i,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},zh(r);var m=i.contextType;typeof m=="object"&&m!==null?f.context=kn(m):(m=rn(i)?ts:Vt.current,f.context=lo(r,m)),f.state=r.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(tf(r,i,m,a),f.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&wu.enqueueReplaceState(f,f.state,null),du(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function yo(r,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:i,stack:f,digest:null}}function rf(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function sf(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var rE=typeof WeakMap=="function"?WeakMap:Map;function Gm(r,i,a){a=Lr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Pu||(Pu=!0,wf=c),sf(r,i)},a}function Qm(r,i,a){a=Lr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){sf(r,i)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){sf(r,i),typeof c!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Xm(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new rE;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),r=yE.bind(null,r,i,a),i.then(r,r))}function Ym(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Jm(r,i,a,c,f){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Lr(-1,1),i.tag=2,fi(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var iE=te.ReactCurrentOwner,sn=!1;function Xt(r,i,a,c){i.child=r===null?vm(i,null,a,c):fo(i,r.child,a,c)}function Zm(r,i,a,c,f){a=a.render;var m=i.ref;return mo(i,f),c=Qh(r,i,a,c,m,f),a=Xh(),r!==null&&!sn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~f,br(r,i,f)):(Qe&&a&&Oh(i),i.flags|=1,Xt(r,i,c,f),i.child)}function eg(r,i,a,c,f){if(r===null){var m=a.type;return typeof m=="function"&&!Pf(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,tg(r,i,m,c,f)):(r=Du(a.type,null,c,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,(r.lanes&f)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(_,c)&&r.ref===i.ref)return br(r,i,f)}return i.flags|=1,r=vi(m,c),r.ref=i.ref,r.return=i,i.child=r}function tg(r,i,a,c,f){if(r!==null){var m=r.memoizedProps;if(Ea(m,c)&&r.ref===i.ref)if(sn=!1,i.pendingProps=c=m,(r.lanes&f)!==0)(r.flags&131072)!==0&&(sn=!0);else return i.lanes=r.lanes,br(r,i,f)}return of(r,i,a,c,f)}function ng(r,i,a){var c=i.pendingProps,f=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(_o,yn),yn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,$e(_o,yn),yn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,$e(_o,yn),yn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,$e(_o,yn),yn|=c;return Xt(r,i,f,a),i.child}function rg(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function of(r,i,a,c,f){var m=rn(a)?ts:Vt.current;return m=lo(i,m),mo(i,f),a=Qh(r,i,a,c,m,f),c=Xh(),r!==null&&!sn?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~f,br(r,i,f)):(Qe&&c&&Oh(i),i.flags|=1,Xt(r,i,a,f),i.child)}function ig(r,i,a,c,f){if(rn(a)){var m=!0;iu(i)}else m=!1;if(mo(i,f),i.stateNode===null)Tu(r,i),qm(i,a,c),nf(i,a,c,f),c=!0;else if(r===null){var _=i.stateNode,S=i.memoizedProps;_.props=S;var C=_.context,B=a.contextType;typeof B=="object"&&B!==null?B=kn(B):(B=rn(a)?ts:Vt.current,B=lo(i,B));var K=a.getDerivedStateFromProps,G=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";G||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==c||C!==B)&&Km(i,_,c,B),hi=!1;var q=i.memoizedState;_.state=q,du(i,c,_,f),C=i.memoizedState,S!==c||q!==C||nn.current||hi?(typeof K=="function"&&(tf(i,a,K,c),C=i.memoizedState),(S=hi||Wm(i,a,S,c,q,C,B))?(G||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=C),_.props=c,_.state=C,_.context=B,c=S):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,wm(r,i),S=i.memoizedProps,B=i.type===i.elementType?S:Wn(i.type,S),_.props=B,G=i.pendingProps,q=_.context,C=a.contextType,typeof C=="object"&&C!==null?C=kn(C):(C=rn(a)?ts:Vt.current,C=lo(i,C));var oe=a.getDerivedStateFromProps;(K=typeof oe=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(S!==G||q!==C)&&Km(i,_,c,C),hi=!1,q=i.memoizedState,_.state=q,du(i,c,_,f);var ue=i.memoizedState;S!==G||q!==ue||nn.current||hi?(typeof oe=="function"&&(tf(i,a,oe,c),ue=i.memoizedState),(B=hi||Wm(i,a,B,c,q,ue,C)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ue,C),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ue,C)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),_.props=c,_.state=ue,_.context=C,c=B):(typeof _.componentDidUpdate!="function"||S===r.memoizedProps&&q===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&q===r.memoizedState||(i.flags|=1024),c=!1)}return af(r,i,a,c,m,f)}function af(r,i,a,c,f,m){rg(r,i);var _=(i.flags&128)!==0;if(!c&&!_)return f&&um(i,a,!1),br(r,i,m);c=i.stateNode,iE.current=i;var S=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&_?(i.child=fo(i,r.child,null,m),i.child=fo(i,null,S,m)):Xt(r,i,S,m),i.memoizedState=c.state,f&&um(i,a,!0),i.child}function sg(r){var i=r.stateNode;i.pendingContext?am(r,i.pendingContext,i.pendingContext!==i.context):i.context&&am(r,i.context,!1),$h(r,i.containerInfo)}function og(r,i,a,c,f){return ho(),Mh(f),i.flags|=256,Xt(r,i,a,c),i.child}var lf={dehydrated:null,treeContext:null,retryLane:0};function uf(r){return{baseLanes:r,cachePool:null,transitions:null}}function ag(r,i,a){var c=i.pendingProps,f=Ye.current,m=!1,_=(i.flags&128)!==0,S;if((S=_)||(S=r!==null&&r.memoizedState===null?!1:(f&2)!==0),S?(m=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),$e(Ye,f&1),r===null)return bh(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,r=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=Lu(_,c,0,null),r=hs(r,c,a,null),m.return=i,r.return=i,m.sibling=r,i.child=m,i.child.memoizedState=uf(a),i.memoizedState=lf,r):cf(i,_));if(f=r.memoizedState,f!==null&&(S=f.dehydrated,S!==null))return sE(r,i,_,c,S,f,a);if(m){m=c.fallback,_=i.mode,f=r.child,S=f.sibling;var C={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=C,i.deletions=null):(c=vi(f,C),c.subtreeFlags=f.subtreeFlags&14680064),S!==null?m=vi(S,m):(m=hs(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=r.child.memoizedState,_=_===null?uf(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=r.childLanes&~a,i.memoizedState=lf,c}return m=r.child,r=m.sibling,c=vi(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function cf(r,i){return i=Lu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Eu(r,i,a,c){return c!==null&&Mh(c),fo(i,r.child,null,a),r=cf(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function sE(r,i,a,c,f,m,_){if(a)return i.flags&256?(i.flags&=-257,c=rf(Error(t(422))),Eu(r,i,_,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Lu({mode:"visible",children:c.children},f,0,null),m=hs(m,f,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&fo(i,r.child,null,_),i.child.memoizedState=uf(_),i.memoizedState=lf,m);if((i.mode&1)===0)return Eu(r,i,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=rf(m,c,void 0),Eu(r,i,_,c)}if(S=(_&r.childLanes)!==0,sn||S){if(c=St,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|_))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Dr(r,f),Gn(c,r,f,-1))}return Af(),c=rf(Error(t(421))),Eu(r,i,_,c)}return f.data==="$?"?(i.flags|=128,i.child=r.child,i=vE.bind(null,r),f._reactRetry=i,null):(r=m.treeContext,gn=ai(f.nextSibling),mn=i,Qe=!0,Hn=null,r!==null&&(An[Pn++]=xr,An[Pn++]=Or,An[Pn++]=ns,xr=r.id,Or=r.overflow,ns=i),i=cf(i,c.children),i.flags|=4096,i)}function lg(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),jh(r.return,i,a)}function hf(r,i,a,c,f){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function ug(r,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Xt(r,i,c.children,a),c=Ye.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&lg(r,a,i);else if(r.tag===19)lg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if($e(Ye,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)r=a.alternate,r!==null&&pu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),hf(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&pu(r)===null){i.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}hf(i,!0,a,null,m);break;case"together":hf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Tu(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function br(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),as|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=vi(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=vi(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function oE(r,i,a){switch(i.tag){case 3:sg(i),ho();break;case 5:Im(i);break;case 1:rn(i.type)&&iu(i);break;case 4:$h(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;$e(cu,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?($e(Ye,Ye.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?ag(r,i,a):($e(Ye,Ye.current&1),r=br(r,i,a),r!==null?r.sibling:null);$e(Ye,Ye.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return ug(r,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$e(Ye,Ye.current),c)break;return null;case 22:case 23:return i.lanes=0,ng(r,i,a)}return br(r,i,a)}var cg,ff,hg,fg;cg=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ff=function(){},hg=function(r,i,a,c){var f=r.memoizedProps;if(f!==c){r=i.stateNode,ss(lr.current);var m=null;switch(a){case"input":f=Ui(r,f),c=Ui(r,c),m=[];break;case"select":f=ie({},f,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":f=Xo(r,f),c=Xo(r,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=tu)}na(a,c);var _;a=null;for(B in f)if(!c.hasOwnProperty(B)&&f.hasOwnProperty(B)&&f[B]!=null)if(B==="style"){var S=f[B];for(_ in S)S.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in c){var C=c[B];if(S=f!=null?f[B]:void 0,c.hasOwnProperty(B)&&C!==S&&(C!=null||S!=null))if(B==="style")if(S){for(_ in S)!S.hasOwnProperty(_)||C&&C.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in C)C.hasOwnProperty(_)&&S[_]!==C[_]&&(a||(a={}),a[_]=C[_])}else a||(m||(m=[]),m.push(B,a)),a=C;else B==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,S=S?S.__html:void 0,C!=null&&S!==C&&(m=m||[]).push(B,C)):B==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(B,""+C):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(C!=null&&B==="onScroll"&&We("scroll",r),m||S===C||(m=[])):(m=m||[]).push(B,C))}a&&(m=m||[]).push("style",a);var B=m;(i.updateQueue=B)&&(i.flags|=4)}},fg=function(r,i,a,c){a!==c&&(i.flags|=4)};function Ma(r,i){if(!Qe)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function aE(r,i,a){var c=i.pendingProps;switch(Dh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(i),null;case 1:return rn(i.type)&&ru(),Ft(i),null;case 3:return c=i.stateNode,go(),qe(nn),qe(Vt),qh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(lu(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hn!==null&&(If(Hn),Hn=null))),ff(r,i),Ft(i),null;case 5:Hh(i);var f=ss(xa.current);if(a=i.type,r!==null&&i.stateNode!=null)hg(r,i,a,c,f),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ft(i),null}if(r=ss(lr.current),lu(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[ar]=i,c[Aa]=m,r=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(f=0;f<Ia.length;f++)We(Ia[f],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Ns(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":Os(c,m),We("invalid",c)}na(a,m),f=null;for(var _ in m)if(m.hasOwnProperty(_)){var S=m[_];_==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&eu(c.textContent,S,r),f=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&eu(c.textContent,S,r),f=["children",""+S]):o.hasOwnProperty(_)&&S!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":Zt(c),Al(c,m,!0);break;case"textarea":Zt(c),Yo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=tu)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=mt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[ar]=i,r[Aa]=c,cg(r,i,!1,!1),i.stateNode=r;e:{switch(_=ra(a,c),a){case"dialog":We("cancel",r),We("close",r),f=c;break;case"iframe":case"object":case"embed":We("load",r),f=c;break;case"video":case"audio":for(f=0;f<Ia.length;f++)We(Ia[f],r);f=c;break;case"source":We("error",r),f=c;break;case"img":case"image":case"link":We("error",r),We("load",r),f=c;break;case"details":We("toggle",r),f=c;break;case"input":Ns(r,c),f=Ui(r,c),We("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=ie({},c,{value:void 0}),We("invalid",r);break;case"textarea":Os(r,c),f=Xo(r,c),We("invalid",r);break;default:f=c}na(a,f),S=f;for(m in S)if(S.hasOwnProperty(m)){var C=S[m];m==="style"?ea(r,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Jo(r,C)):m==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Xr(r,C):typeof C=="number"&&Xr(r,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?C!=null&&m==="onScroll"&&We("scroll",r):C!=null&&X(r,m,C,_))}switch(a){case"input":Zt(r),Al(r,c,!1);break;case"textarea":Zt(r),Yo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Pe(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?Er(r,!!c.multiple,m,!1):c.defaultValue!=null&&Er(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=tu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ft(i),null;case 6:if(r&&i.stateNode!=null)fg(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ss(xa.current),ss(lr.current),lu(i)){if(c=i.stateNode,a=i.memoizedProps,c[ar]=i,(m=c.nodeValue!==a)&&(r=mn,r!==null))switch(r.tag){case 3:eu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&eu(c.nodeValue,a,(r.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ar]=i,i.stateNode=c}return Ft(i),null;case 13:if(qe(Ye),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)mm(),ho(),i.flags|=98560,m=!1;else if(m=lu(i),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ar]=i}else ho(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ft(i),m=!1}else Hn!==null&&(If(Hn),Hn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ye.current&1)!==0?_t===0&&(_t=3):Af())),i.updateQueue!==null&&(i.flags|=4),Ft(i),null);case 4:return go(),ff(r,i),r===null&&Sa(i.stateNode.containerInfo),Ft(i),null;case 10:return Fh(i.type._context),Ft(i),null;case 17:return rn(i.type)&&ru(),Ft(i),null;case 19:if(qe(Ye),m=i.memoizedState,m===null)return Ft(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)Ma(m,!1);else{if(_t!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(_=pu(r),_!==null){for(i.flags|=128,Ma(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,r=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,r=_.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return $e(Ye,Ye.current&1|2),i.child}r=r.sibling}m.tail!==null&&ze()>wo&&(i.flags|=128,c=!0,Ma(m,!1),i.lanes=4194304)}else{if(!c)if(r=pu(_),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Qe)return Ft(i),null}else 2*ze()-m.renderingStartTime>wo&&a!==1073741824&&(i.flags|=128,c=!0,Ma(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ze(),i.sibling=null,a=Ye.current,$e(Ye,c?a&1|2:a&1),i):(Ft(i),null);case 22:case 23:return Rf(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(yn&1073741824)!==0&&(Ft(i),i.subtreeFlags&6&&(i.flags|=8192)):Ft(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lE(r,i){switch(Dh(i),i.tag){case 1:return rn(i.type)&&ru(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return go(),qe(nn),qe(Vt),qh(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Hh(i),null;case 13:if(qe(Ye),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ho()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return qe(Ye),null;case 4:return go(),null;case 10:return Fh(i.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var Iu=!1,jt=!1,uE=typeof WeakSet=="function"?WeakSet:Set,le=null;function vo(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,i,c)}else a.current=null}function df(r,i,a){try{a()}catch(c){tt(r,i,c)}}var dg=!1;function cE(r,i){if(Sh=ii,r=Wp(),gh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,S=-1,C=-1,B=0,K=0,G=r,q=null;t:for(;;){for(var oe;G!==a||f!==0&&G.nodeType!==3||(S=_+f),G!==m||c!==0&&G.nodeType!==3||(C=_+c),G.nodeType===3&&(_+=G.nodeValue.length),(oe=G.firstChild)!==null;)q=G,G=oe;for(;;){if(G===r)break t;if(q===a&&++B===f&&(S=_),q===m&&++K===c&&(C=_),(oe=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=oe}a=S===-1||C===-1?null:{start:S,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rh={focusedElem:r,selectionRange:a},ii=!1,le=i;le!==null;)if(i=le,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,le=r;else for(;le!==null;){i=le;try{var ue=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,ot=ue.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?he:Wn(i.type,he),ot);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Z){tt(i,i.return,Z)}if(r=i.sibling,r!==null){r.return=i.return,le=r;break}le=i.return}return ue=dg,dg=!1,ue}function Va(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var m=f.destroy;f.destroy=void 0,m!==void 0&&df(i,a,m)}f=f.next}while(f!==c)}}function Su(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function pf(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function pg(r){var i=r.alternate;i!==null&&(r.alternate=null,pg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[ar],delete i[Aa],delete i[Ch],delete i[qw],delete i[Kw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function mg(r){return r.tag===5||r.tag===3||r.tag===4}function gg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||mg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function mf(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=tu));else if(c!==4&&(r=r.child,r!==null))for(mf(r,i,a),r=r.sibling;r!==null;)mf(r,i,a),r=r.sibling}function gf(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(gf(r,i,a),r=r.sibling;r!==null;)gf(r,i,a),r=r.sibling}var Ot=null,qn=!1;function di(r,i,a){for(a=a.child;a!==null;)yg(r,i,a),a=a.sibling}function yg(r,i,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ki,a)}catch{}switch(a.tag){case 5:jt||vo(a,i);case 6:var c=Ot,f=qn;Ot=null,di(r,i,a),Ot=c,qn=f,Ot!==null&&(qn?(r=Ot,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ot.removeChild(a.stateNode));break;case 18:Ot!==null&&(qn?(r=Ot,a=a.stateNode,r.nodeType===8?kh(r.parentNode,a):r.nodeType===1&&kh(r,a),Bn(r)):kh(Ot,a.stateNode));break;case 4:c=Ot,f=qn,Ot=a.stateNode.containerInfo,qn=!0,di(r,i,a),Ot=c,qn=f;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&df(a,i,_),f=f.next}while(f!==c)}di(r,i,a);break;case 1:if(!jt&&(vo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}di(r,i,a);break;case 21:di(r,i,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,di(r,i,a),jt=c):di(r,i,a);break;default:di(r,i,a)}}function vg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new uE),i.forEach(function(c){var f=_E.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Kn(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=r,_=i,S=_;e:for(;S!==null;){switch(S.tag){case 5:Ot=S.stateNode,qn=!1;break e;case 3:Ot=S.stateNode.containerInfo,qn=!0;break e;case 4:Ot=S.stateNode.containerInfo,qn=!0;break e}S=S.return}if(Ot===null)throw Error(t(160));yg(m,_,f),Ot=null,qn=!1;var C=f.alternate;C!==null&&(C.return=null),f.return=null}catch(B){tt(f,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)_g(i,r),i=i.sibling}function _g(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Kn(i,r),cr(r),c&4){try{Va(3,r,r.return),Su(3,r)}catch(he){tt(r,r.return,he)}try{Va(5,r,r.return)}catch(he){tt(r,r.return,he)}}break;case 1:Kn(i,r),cr(r),c&512&&a!==null&&vo(a,a.return);break;case 5:if(Kn(i,r),cr(r),c&512&&a!==null&&vo(a,a.return),r.flags&32){var f=r.stateNode;try{Xr(f,"")}catch(he){tt(r,r.return,he)}}if(c&4&&(f=r.stateNode,f!=null)){var m=r.memoizedProps,_=a!==null?a.memoizedProps:m,S=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Go(f,m),ra(S,_);var B=ra(S,m);for(_=0;_<C.length;_+=2){var K=C[_],G=C[_+1];K==="style"?ea(f,G):K==="dangerouslySetInnerHTML"?Jo(f,G):K==="children"?Xr(f,G):X(f,K,G,B)}switch(S){case"input":Qo(f,m);break;case"textarea":Ds(f,m);break;case"select":var q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var oe=m.value;oe!=null?Er(f,!!m.multiple,oe,!1):q!==!!m.multiple&&(m.defaultValue!=null?Er(f,!!m.multiple,m.defaultValue,!0):Er(f,!!m.multiple,m.multiple?[]:"",!1))}f[Aa]=m}catch(he){tt(r,r.return,he)}}break;case 6:if(Kn(i,r),cr(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,m=r.memoizedProps;try{f.nodeValue=m}catch(he){tt(r,r.return,he)}}break;case 3:if(Kn(i,r),cr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Bn(i.containerInfo)}catch(he){tt(r,r.return,he)}break;case 4:Kn(i,r),cr(r);break;case 13:Kn(i,r),cr(r),f=r.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(_f=ze())),c&4&&vg(r);break;case 22:if(K=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(B=jt)||K,Kn(i,r),jt=B):Kn(i,r),cr(r),c&8192){if(B=r.memoizedState!==null,(r.stateNode.isHidden=B)&&!K&&(r.mode&1)!==0)for(le=r,K=r.child;K!==null;){for(G=le=K;le!==null;){switch(q=le,oe=q.child,q.tag){case 0:case 11:case 14:case 15:Va(4,q,q.return);break;case 1:vo(q,q.return);var ue=q.stateNode;if(typeof ue.componentWillUnmount=="function"){c=q,a=q.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(he){tt(c,a,he)}}break;case 5:vo(q,q.return);break;case 22:if(q.memoizedState!==null){Tg(G);continue}}oe!==null?(oe.return=q,le=oe):Tg(G)}K=K.sibling}e:for(K=null,G=r;;){if(G.tag===5){if(K===null){K=G;try{f=G.stateNode,B?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=G.stateNode,C=G.memoizedProps.style,_=C!=null&&C.hasOwnProperty("display")?C.display:null,S.style.display=Zo("display",_))}catch(he){tt(r,r.return,he)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=B?"":G.memoizedProps}catch(he){tt(r,r.return,he)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===r)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===r)break e;for(;G.sibling===null;){if(G.return===null||G.return===r)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Kn(i,r),cr(r),c&4&&vg(r);break;case 21:break;default:Kn(i,r),cr(r)}}function cr(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(mg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Xr(f,""),c.flags&=-33);var m=gg(r);gf(r,m,f);break;case 3:case 4:var _=c.stateNode.containerInfo,S=gg(r);mf(r,S,_);break;default:throw Error(t(161))}}catch(C){tt(r,r.return,C)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function hE(r,i,a){le=r,wg(r)}function wg(r,i,a){for(var c=(r.mode&1)!==0;le!==null;){var f=le,m=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||Iu;if(!_){var S=f.alternate,C=S!==null&&S.memoizedState!==null||jt;S=Iu;var B=jt;if(Iu=_,(jt=C)&&!B)for(le=f;le!==null;)_=le,C=_.child,_.tag===22&&_.memoizedState!==null?Ig(f):C!==null?(C.return=_,le=C):Ig(f);for(;m!==null;)le=m,wg(m),m=m.sibling;le=f,Iu=S,jt=B}Eg(r)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,le=m):Eg(r)}}function Eg(r){for(;le!==null;){var i=le;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:jt||Su(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!jt)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:Wn(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Tm(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Tm(i,_,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var C=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var K=B.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&Bn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||i.flags&512&&pf(i)}catch(q){tt(i,i.return,q)}}if(i===r){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function Tg(r){for(;le!==null;){var i=le;if(i===r){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function Ig(r){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Su(4,i)}catch(C){tt(i,a,C)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(C){tt(i,f,C)}}var m=i.return;try{pf(i)}catch(C){tt(i,m,C)}break;case 5:var _=i.return;try{pf(i)}catch(C){tt(i,_,C)}}}catch(C){tt(i,i.return,C)}if(i===r){le=null;break}var S=i.sibling;if(S!==null){S.return=i.return,le=S;break}le=i.return}}var fE=Math.ceil,Ru=te.ReactCurrentDispatcher,yf=te.ReactCurrentOwner,Nn=te.ReactCurrentBatchConfig,be=0,St=null,ht=null,Dt=0,yn=0,_o=li(0),_t=0,Ua=null,as=0,Au=0,vf=0,Fa=null,on=null,_f=0,wo=1/0,Mr=null,Pu=!1,wf=null,pi=null,ku=!1,mi=null,Cu=0,ja=0,Ef=null,Nu=-1,xu=0;function Yt(){return(be&6)!==0?ze():Nu!==-1?Nu:Nu=ze()}function gi(r){return(r.mode&1)===0?1:(be&2)!==0&&Dt!==0?Dt&-Dt:Qw.transition!==null?(xu===0&&(xu=Qi()),xu):(r=Ce,r!==0||(r=window.event,r=r===void 0?16:pa(r.type)),r)}function Gn(r,i,a,c){if(50<ja)throw ja=0,Ef=null,Error(t(185));ei(r,a,c),((be&2)===0||r!==St)&&(r===St&&((be&2)===0&&(Au|=a),_t===4&&yi(r,Dt)),an(r,c),a===1&&be===0&&(i.mode&1)===0&&(wo=ze()+500,su&&ci()))}function an(r,i){var a=r.callbackNode;Sr(r,i);var c=Gi(r,r===St?Dt:0);if(c===0)a!==null&&ua(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&ua(a),i===1)r.tag===0?Gw(Rg.bind(null,r)):cm(Rg.bind(null,r)),Hw(function(){(be&6)===0&&ci()}),a=null;else{switch(ni(c)){case 1:a=qi;break;case 4:a=Yr;break;case 16:a=In;break;case 536870912:a=xl;break;default:a=In}a=Dg(a,Sg.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Sg(r,i){if(Nu=-1,xu=0,(be&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Eo()&&r.callbackNode!==a)return null;var c=Gi(r,r===St?Dt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Ou(r,c);else{i=c;var f=be;be|=2;var m=Pg();(St!==r||Dt!==i)&&(Mr=null,wo=ze()+500,us(r,i));do try{mE();break}catch(S){Ag(r,S)}while(!0);Uh(),Ru.current=m,be=f,ht!==null?i=0:(St=null,Dt=0,i=_t)}if(i!==0){if(i===2&&(f=fn(r),f!==0&&(c=f,i=Tf(r,f))),i===1)throw a=Ua,us(r,0),yi(r,c),an(r,ze()),a;if(i===6)yi(r,c);else{if(f=r.current.alternate,(c&30)===0&&!dE(f)&&(i=Ou(r,c),i===2&&(m=fn(r),m!==0&&(c=m,i=Tf(r,m))),i===1))throw a=Ua,us(r,0),yi(r,c),an(r,ze()),a;switch(r.finishedWork=f,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:cs(r,on,Mr);break;case 3:if(yi(r,c),(c&130023424)===c&&(i=_f+500-ze(),10<i)){if(Gi(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Yt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Ph(cs.bind(null,r,on,Mr),i);break}cs(r,on,Mr);break;case 4:if(yi(r,c),(c&4194240)===c)break;for(i=r.eventTimes,f=-1;0<c;){var _=31-Gt(c);m=1<<_,_=i[_],_>f&&(f=_),c&=~m}if(c=f,c=ze()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fE(c/1960))-c,10<c){r.timeoutHandle=Ph(cs.bind(null,r,on,Mr),c);break}cs(r,on,Mr);break;case 5:cs(r,on,Mr);break;default:throw Error(t(329))}}}return an(r,ze()),r.callbackNode===a?Sg.bind(null,r):null}function Tf(r,i){var a=Fa;return r.current.memoizedState.isDehydrated&&(us(r,i).flags|=256),r=Ou(r,i),r!==2&&(i=on,on=a,i!==null&&If(i)),r}function If(r){on===null?on=r:on.push.apply(on,r)}function dE(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!$n(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yi(r,i){for(i&=~vf,i&=~Au,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Gt(i),c=1<<a;r[a]=-1,i&=~c}}function Rg(r){if((be&6)!==0)throw Error(t(327));Eo();var i=Gi(r,0);if((i&1)===0)return an(r,ze()),null;var a=Ou(r,i);if(r.tag!==0&&a===2){var c=fn(r);c!==0&&(i=c,a=Tf(r,c))}if(a===1)throw a=Ua,us(r,0),yi(r,i),an(r,ze()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,cs(r,on,Mr),an(r,ze()),null}function Sf(r,i){var a=be;be|=1;try{return r(i)}finally{be=a,be===0&&(wo=ze()+500,su&&ci())}}function ls(r){mi!==null&&mi.tag===0&&(be&6)===0&&Eo();var i=be;be|=1;var a=Nn.transition,c=Ce;try{if(Nn.transition=null,Ce=1,r)return r()}finally{Ce=c,Nn.transition=a,be=i,(be&6)===0&&ci()}}function Rf(){yn=_o.current,qe(_o)}function us(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,$w(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(Dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ru();break;case 3:go(),qe(nn),qe(Vt),qh();break;case 5:Hh(c);break;case 4:go();break;case 13:qe(Ye);break;case 19:qe(Ye);break;case 10:Fh(c.type._context);break;case 22:case 23:Rf()}a=a.return}if(St=r,ht=r=vi(r.current,null),Dt=yn=i,_t=0,Ua=null,vf=Au=as=0,on=Fa=null,is!==null){for(i=0;i<is.length;i++)if(a=is[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=f,c.next=_}a.pending=c}is=null}return r}function Ag(r,i){do{var a=ht;try{if(Uh(),mu.current=_u,gu){for(var c=Je.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}gu=!1}if(os=0,It=vt=Je=null,Oa=!1,Da=0,yf.current=null,a===null||a.return===null){_t=1,Ua=i,ht=null;break}e:{var m=r,_=a.return,S=a,C=i;if(i=Dt,S.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var B=C,K=S,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var oe=Ym(_);if(oe!==null){oe.flags&=-257,Jm(oe,_,S,m,i),oe.mode&1&&Xm(m,B,i),i=oe,C=B;var ue=i.updateQueue;if(ue===null){var he=new Set;he.add(C),i.updateQueue=he}else ue.add(C);break e}else{if((i&1)===0){Xm(m,B,i),Af();break e}C=Error(t(426))}}else if(Qe&&S.mode&1){var ot=Ym(_);if(ot!==null){(ot.flags&65536)===0&&(ot.flags|=256),Jm(ot,_,S,m,i),Mh(yo(C,S));break e}}m=C=yo(C,S),_t!==4&&(_t=2),Fa===null?Fa=[m]:Fa.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=Gm(m,C,i);Em(m,M);break e;case 1:S=C;var x=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(pi===null||!pi.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var Z=Qm(m,S,i);Em(m,Z);break e}}m=m.return}while(m!==null)}Cg(a)}catch(fe){i=fe,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Pg(){var r=Ru.current;return Ru.current=_u,r===null?_u:r}function Af(){(_t===0||_t===3||_t===2)&&(_t=4),St===null||(as&268435455)===0&&(Au&268435455)===0||yi(St,Dt)}function Ou(r,i){var a=be;be|=2;var c=Pg();(St!==r||Dt!==i)&&(Mr=null,us(r,i));do try{pE();break}catch(f){Ag(r,f)}while(!0);if(Uh(),be=a,Ru.current=c,ht!==null)throw Error(t(261));return St=null,Dt=0,_t}function pE(){for(;ht!==null;)kg(ht)}function mE(){for(;ht!==null&&!Cl();)kg(ht)}function kg(r){var i=Og(r.alternate,r,yn);r.memoizedProps=r.pendingProps,i===null?Cg(r):ht=i,yf.current=null}function Cg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=aE(a,i,yn),a!==null){ht=a;return}}else{if(a=lE(a,i),a!==null){a.flags&=32767,ht=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{_t=6,ht=null;return}}if(i=i.sibling,i!==null){ht=i;return}ht=i=r}while(i!==null);_t===0&&(_t=5)}function cs(r,i,a){var c=Ce,f=Nn.transition;try{Nn.transition=null,Ce=1,gE(r,i,a,c)}finally{Nn.transition=f,Ce=c}return null}function gE(r,i,a,c){do Eo();while(mi!==null);if((be&6)!==0)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(r,m),r===St&&(ht=St=null,Dt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ku||(ku=!0,Dg(In,function(){return Eo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Nn.transition,Nn.transition=null;var _=Ce;Ce=1;var S=be;be|=4,yf.current=null,cE(r,a),_g(a,r),Mw(Rh),ii=!!Sh,Rh=Sh=null,r.current=a,hE(a),lh(),be=S,Ce=_,Nn.transition=m}else r.current=a;if(ku&&(ku=!1,mi=r,Cu=f),m=r.pendingLanes,m===0&&(pi=null),Ol(a.stateNode),an(r,ze()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(Pu)throw Pu=!1,r=wf,wf=null,r;return(Cu&1)!==0&&r.tag!==0&&Eo(),m=r.pendingLanes,(m&1)!==0?r===Ef?ja++:(ja=0,Ef=r):ja=0,ci(),null}function Eo(){if(mi!==null){var r=ni(Cu),i=Nn.transition,a=Ce;try{if(Nn.transition=null,Ce=16>r?16:r,mi===null)var c=!1;else{if(r=mi,mi=null,Cu=0,(be&6)!==0)throw Error(t(331));var f=be;for(be|=4,le=r.current;le!==null;){var m=le,_=m.child;if((le.flags&16)!==0){var S=m.deletions;if(S!==null){for(var C=0;C<S.length;C++){var B=S[C];for(le=B;le!==null;){var K=le;switch(K.tag){case 0:case 11:case 15:Va(8,K,m)}var G=K.child;if(G!==null)G.return=K,le=G;else for(;le!==null;){K=le;var q=K.sibling,oe=K.return;if(pg(K),K===B){le=null;break}if(q!==null){q.return=oe,le=q;break}le=oe}}}var ue=m.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var ot=he.sibling;he.sibling=null,he=ot}while(he!==null)}}le=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,le=_;else e:for(;le!==null;){if(m=le,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Va(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,le=M;break e}le=m.return}}var x=r.current;for(le=x;le!==null;){_=le;var U=_.child;if((_.subtreeFlags&2064)!==0&&U!==null)U.return=_,le=U;else e:for(_=x;le!==null;){if(S=le,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:Su(9,S)}}catch(fe){tt(S,S.return,fe)}if(S===_){le=null;break e}var Z=S.sibling;if(Z!==null){Z.return=S.return,le=Z;break e}le=S.return}}if(be=f,ci(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ki,r)}catch{}c=!0}return c}finally{Ce=a,Nn.transition=i}}return!1}function Ng(r,i,a){i=yo(a,i),i=Gm(r,i,1),r=fi(r,i,1),i=Yt(),r!==null&&(ei(r,1,i),an(r,i))}function tt(r,i,a){if(r.tag===3)Ng(r,r,a);else for(;i!==null;){if(i.tag===3){Ng(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pi===null||!pi.has(c))){r=yo(a,r),r=Qm(i,r,1),i=fi(i,r,1),r=Yt(),i!==null&&(ei(i,1,r),an(i,r));break}}i=i.return}}function yE(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Yt(),r.pingedLanes|=r.suspendedLanes&a,St===r&&(Dt&a)===a&&(_t===4||_t===3&&(Dt&130023424)===Dt&&500>ze()-_f?us(r,0):vf|=a),an(r,i)}function xg(r,i){i===0&&((r.mode&1)===0?i=1:(i=$s,$s<<=1,($s&130023424)===0&&($s=4194304)));var a=Yt();r=Dr(r,i),r!==null&&(ei(r,i,a),an(r,a))}function vE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),xg(r,a)}function _E(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xg(r,a)}var Og;Og=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||nn.current)sn=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return sn=!1,oE(r,i,a);sn=(r.flags&131072)!==0}else sn=!1,Qe&&(i.flags&1048576)!==0&&hm(i,au,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Tu(r,i),r=i.pendingProps;var f=lo(i,Vt.current);mo(i,a),f=Qh(null,i,c,r,f,a);var m=Xh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,rn(c)?(m=!0,iu(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,zh(i),f.updater=wu,i.stateNode=f,f._reactInternals=i,nf(i,c,r,a),i=af(null,i,c,!0,m,a)):(i.tag=0,Qe&&m&&Oh(i),Xt(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Tu(r,i),r=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=EE(c),r=Wn(c,r),f){case 0:i=of(null,i,c,r,a);break e;case 1:i=ig(null,i,c,r,a);break e;case 11:i=Zm(null,i,c,r,a);break e;case 14:i=eg(null,i,c,Wn(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wn(c,f),of(r,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wn(c,f),ig(r,i,c,f,a);case 3:e:{if(sg(i),r===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,wm(r,i),du(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=yo(Error(t(423)),i),i=og(r,i,c,a,f);break e}else if(c!==f){f=yo(Error(t(424)),i),i=og(r,i,c,a,f);break e}else for(gn=ai(i.stateNode.containerInfo.firstChild),mn=i,Qe=!0,Hn=null,a=vm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ho(),c===f){i=br(r,i,a);break e}Xt(r,i,c,a)}i=i.child}return i;case 5:return Im(i),r===null&&bh(i),c=i.type,f=i.pendingProps,m=r!==null?r.memoizedProps:null,_=f.children,Ah(c,f)?_=null:m!==null&&Ah(c,m)&&(i.flags|=32),rg(r,i),Xt(r,i,_,a),i.child;case 6:return r===null&&bh(i),null;case 13:return ag(r,i,a);case 4:return $h(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=fo(i,null,c,a):Xt(r,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wn(c,f),Zm(r,i,c,f,a);case 7:return Xt(r,i,i.pendingProps,a),i.child;case 8:return Xt(r,i,i.pendingProps.children,a),i.child;case 12:return Xt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,_=f.value,$e(cu,c._currentValue),c._currentValue=_,m!==null)if($n(m.value,_)){if(m.children===f.children&&!nn.current){i=br(r,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){_=m.child;for(var C=S.firstContext;C!==null;){if(C.context===c){if(m.tag===1){C=Lr(-1,a&-a),C.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var K=B.pending;K===null?C.next=C:(C.next=K.next,K.next=C),B.pending=C}}m.lanes|=a,C=m.alternate,C!==null&&(C.lanes|=a),jh(m.return,a,i),S.lanes|=a;break}C=C.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,S=_.alternate,S!==null&&(S.lanes|=a),jh(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Xt(r,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,mo(i,a),f=kn(f),c=c(f),i.flags|=1,Xt(r,i,c,a),i.child;case 14:return c=i.type,f=Wn(c,i.pendingProps),f=Wn(c.type,f),eg(r,i,c,f,a);case 15:return tg(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Wn(c,f),Tu(r,i),i.tag=1,rn(c)?(r=!0,iu(i)):r=!1,mo(i,a),qm(i,c,f),nf(i,c,f,a),af(null,i,c,!0,r,a);case 19:return ug(r,i,a);case 22:return ng(r,i,a)}throw Error(t(156,i.tag))};function Dg(r,i){return Bs(r,i)}function wE(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(r,i,a,c){return new wE(r,i,a,c)}function Pf(r){return r=r.prototype,!(!r||!r.isReactComponent)}function EE(r){if(typeof r=="function")return Pf(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===wt)return 14}return 2}function vi(r,i){var a=r.alternate;return a===null?(a=xn(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Du(r,i,a,c,f,m){var _=2;if(c=r,typeof r=="function")Pf(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case P:return hs(a.children,f,m,i);case I:_=8,f|=8;break;case A:return r=xn(12,a,i,f|2),r.elementType=A,r.lanes=m,r;case R:return r=xn(13,a,i,f),r.elementType=R,r.lanes=m,r;case Xe:return r=xn(19,a,i,f),r.elementType=Xe,r.lanes=m,r;case Me:return Lu(a,f,m,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:_=10;break e;case O:_=9;break e;case L:_=11;break e;case wt:_=14;break e;case Et:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=xn(_,a,i,f),i.elementType=r,i.type=c,i.lanes=m,i}function hs(r,i,a,c){return r=xn(7,r,c,i),r.lanes=a,r}function Lu(r,i,a,c){return r=xn(22,r,c,i),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function kf(r,i,a){return r=xn(6,r,null,i),r.lanes=a,r}function Cf(r,i,a){return i=xn(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function TE(r,i,a,c,f){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zr(0),this.expirationTimes=Zr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Nf(r,i,a,c,f,m,_,S,C){return r=new TE(r,i,a,S,C),i===1?(i=1,m===!0&&(i|=8)):i=0,m=xn(3,null,null,i),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zh(m),r}function IE(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ae,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Lg(r){if(!r)return ui;r=r._reactInternals;e:{if(Mn(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(rn(a))return lm(r,a,i)}return i}function bg(r,i,a,c,f,m,_,S,C){return r=Nf(a,c,!0,r,f,m,_,S,C),r.context=Lg(null),a=r.current,c=Yt(),f=gi(a),m=Lr(c,f),m.callback=i??null,fi(a,m,f),r.current.lanes=f,ei(r,f,c),an(r,c),r}function bu(r,i,a,c){var f=i.current,m=Yt(),_=gi(f);return a=Lg(a),i.context===null?i.context=a:i.pendingContext=a,i=Lr(m,_),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=fi(f,i,_),r!==null&&(Gn(r,f,_,m),fu(r,f,_)),_}function Mu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Mg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function xf(r,i){Mg(r,i),(r=r.alternate)&&Mg(r,i)}function SE(){return null}var Vg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Of(r){this._internalRoot=r}Vu.prototype.render=Of.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));bu(r,i,null,null)},Vu.prototype.unmount=Of.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;ls(function(){bu(null,r,null,null)}),i[Cr]=null}};function Vu(r){this._internalRoot=r}Vu.prototype.unstable_scheduleHydration=function(r){if(r){var i=Vl();r={blockedOn:null,target:r,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,r),a===0&&jl(r)}};function Df(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Uu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Ug(){}function RE(r,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var B=Mu(_);m.call(B)}}var _=bg(i,c,r,0,null,!1,!1,"",Ug);return r._reactRootContainer=_,r[Cr]=_.current,Sa(r.nodeType===8?r.parentNode:r),ls(),_}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var S=c;c=function(){var B=Mu(C);S.call(B)}}var C=Nf(r,0,!1,null,null,!1,!1,"",Ug);return r._reactRootContainer=C,r[Cr]=C.current,Sa(r.nodeType===8?r.parentNode:r),ls(function(){bu(i,C,a,c)}),C}function Fu(r,i,a,c,f){var m=a._reactRootContainer;if(m){var _=m;if(typeof f=="function"){var S=f;f=function(){var C=Mu(_);S.call(C)}}bu(i,_,r,f)}else _=RE(a,i,r,f,c);return Mu(_)}bl=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Jr(i.pendingLanes);a!==0&&(ti(i,a|1),an(i,ze()),(be&6)===0&&(wo=ze()+500,ci()))}break;case 13:ls(function(){var c=Dr(r,1);if(c!==null){var f=Yt();Gn(c,r,1,f)}}),xf(r,1)}},Hs=function(r){if(r.tag===13){var i=Dr(r,134217728);if(i!==null){var a=Yt();Gn(i,r,134217728,a)}xf(r,134217728)}},Ml=function(r){if(r.tag===13){var i=gi(r),a=Dr(r,i);if(a!==null){var c=Yt();Gn(a,r,i,c)}xf(r,i)}},Vl=function(){return Ce},Ul=function(r,i){var a=Ce;try{return Ce=r,i()}finally{Ce=a}},bs=function(r,i,a){switch(i){case"input":if(Qo(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var f=nu(c);if(!f)throw Error(t(90));Kt(c),Qo(c,f)}}}break;case"textarea":Ds(r,a);break;case"select":i=a.value,i!=null&&Er(r,!!a.multiple,i,!1)}},zi=Sf,sa=ls;var AE={usingClientEntryPoint:!1,Events:[Pa,oo,nu,tr,ia,Sf]},Ba={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PE={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:te.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=la(r),r===null?null:r.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||SE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ju=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ju.isDisabled&&ju.supportsFiber)try{Ki=ju.inject(PE),hn=ju}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AE,ln.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(i))throw Error(t(200));return IE(r,i,null,a)},ln.createRoot=function(r,i){if(!Df(r))throw Error(t(299));var a=!1,c="",f=Vg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Nf(r,1,!1,null,null,a,!1,c,f),r[Cr]=i.current,Sa(r.nodeType===8?r.parentNode:r),new Of(i)},ln.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=la(i),r=r===null?null:r.stateNode,r},ln.flushSync=function(r){return ls(r)},ln.hydrate=function(r,i,a){if(!Uu(i))throw Error(t(200));return Fu(null,r,i,!0,a)},ln.hydrateRoot=function(r,i,a){if(!Df(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",_=Vg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=bg(i,null,r,1,a??null,f,!1,m,_),r[Cr]=i.current,Sa(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Vu(i)},ln.render=function(r,i,a){if(!Uu(i))throw Error(t(200));return Fu(null,r,i,!1,a)},ln.unmountComponentAtNode=function(r){if(!Uu(r))throw Error(t(40));return r._reactRootContainer?(ls(function(){Fu(null,null,r,!1,function(){r._reactRootContainer=null,r[Cr]=null})}),!0):!1},ln.unstable_batchedUpdates=Sf,ln.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!Uu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Fu(r,i,a,!1,c)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var qg;function Av(){if(qg)return Mf.exports;qg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Mf.exports=ME(),Mf.exports}var Kg;function VE(){if(Kg)return Bu;Kg=1;var n=Av();return Bu.createRoot=n.createRoot,Bu.hydrateRoot=n.hydrateRoot,Bu}var UE=VE();const FE=Rv(UE);Av();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},rl.apply(this,arguments)}var Ai;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ai||(Ai={}));const Gg="popstate";function jE(n){n===void 0&&(n={});function e(o,l){let{pathname:h="/",search:p="",hash:g=""}=ks(o.location.hash.substr(1));return!h.startsWith("/")&&!h.startsWith(".")&&(h="/"+h),rd("",{pathname:h,search:p,hash:g},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let h=o.document.querySelector("base"),p="";if(h&&h.getAttribute("href")){let g=o.location.href,v=g.indexOf("#");p=v===-1?g:g.slice(0,v)}return p+"#"+(typeof l=="string"?l:cc(l))}function s(o,l){bd(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return zE(e,t,s,n)}function at(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function bd(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function BE(){return Math.random().toString(36).substr(2,8)}function Qg(n,e){return{usr:n.state,key:n.key,idx:e}}function rd(n,e,t,s){return t===void 0&&(t=null),rl({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:t,key:e&&e.key||s||BE()})}function cc(n){let{pathname:e="/",search:t="",hash:s=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function ks(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substr(s),n=n.substr(0,s)),n&&(e.pathname=n)}return e}function zE(n,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,p=Ai.Pop,g=null,v=E();v==null&&(v=0,h.replaceState(rl({},h.state,{idx:v}),""));function E(){return(h.state||{idx:null}).idx}function T(){p=Ai.Pop;let V=E(),W=V==null?null:V-v;v=V,g&&g({action:p,location:$.location,delta:W})}function k(V,W){p=Ai.Push;let J=rd($.location,V,W);t&&t(J,V),v=E()+1;let X=Qg(J,v),te=$.createHref(J);try{h.pushState(X,"",te)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;o.location.assign(te)}l&&g&&g({action:p,location:$.location,delta:1})}function F(V,W){p=Ai.Replace;let J=rd($.location,V,W);t&&t(J,V),v=E();let X=Qg(J,v),te=$.createHref(J);h.replaceState(X,"",te),l&&g&&g({action:p,location:$.location,delta:0})}function j(V){let W=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof V=="string"?V:cc(V);return J=J.replace(/ $/,"%20"),at(W,"No window.location.(origin|href) available to create URL for href: "+J),new URL(J,W)}let $={get action(){return p},get location(){return n(o,h)},listen(V){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Gg,T),g=V,()=>{o.removeEventListener(Gg,T),g=null}},createHref(V){return e(o,V)},createURL:j,encodeLocation(V){let W=j(V);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:k,replace:F,go(V){return h.go(V)}};return $}var Xg;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Xg||(Xg={}));function $E(n,e,t){return t===void 0&&(t="/"),HE(n,e,t)}function HE(n,e,t,s){let o=typeof e=="string"?ks(e):e,l=Md(o.pathname||"/",t);if(l==null)return null;let h=Pv(n);WE(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let v=rT(l);p=eT(h[g],v)}return p}function Pv(n,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,p)=>{let g={relativePath:p===void 0?l.path||"":p,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(at(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let v=Pi([s,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(at(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+v+'".')),Pv(l.children,e,E,v)),!(l.path==null&&!l.index)&&e.push({path:v,score:JE(v,l.index),routesMeta:E})};return n.forEach((l,h)=>{var p;if(l.path===""||!((p=l.path)!=null&&p.includes("?")))o(l,h);else for(let g of kv(l.path))o(l,h,g)}),e}function kv(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=kv(s.join("/")),p=[];return p.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&p.push(...h),p.map(g=>n.startsWith("/")&&g===""?"/":g)}function WE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ZE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const qE=/^:[\w-]+$/,KE=3,GE=2,QE=1,XE=10,YE=-2,Yg=n=>n==="*";function JE(n,e){let t=n.split("/"),s=t.length;return t.some(Yg)&&(s+=YE),e&&(s+=GE),t.filter(o=>!Yg(o)).reduce((o,l)=>o+(qE.test(l)?KE:l===""?QE:XE),s)}function ZE(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function eT(n,e,t){let{routesMeta:s}=n,o={},l="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],v=p===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=tT({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},E),k=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Pi([l,T.pathname]),pathnameBase:aT(Pi([l,T.pathnameBase])),route:k}),T.pathnameBase!=="/"&&(l=Pi([l,T.pathnameBase]))}return h}function tT(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=nT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((v,E,T)=>{let{paramName:k,isOptional:F}=E;if(k==="*"){let $=p[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const j=p[T];return F&&!j?v[k]=void 0:v[k]=(j||"").replace(/%2F/g,"/"),v},{}),pathname:l,pathnameBase:h,pattern:n}}function nT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),bd(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function rT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return bd(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Md(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function iT(n,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?ks(n):n;return{pathname:t?t.startsWith("/")?t:sT(t,e):e,search:lT(s),hash:uT(o)}}function sT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Ff(n,e,t,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function oT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Vd(n,e){let t=oT(n);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Ud(n,e,t,s){s===void 0&&(s=!1);let o;typeof n=="string"?o=ks(n):(o=rl({},n),at(!o.pathname||!o.pathname.includes("?"),Ff("?","pathname","search",o)),at(!o.pathname||!o.pathname.includes("#"),Ff("#","pathname","hash",o)),at(!o.search||!o.search.includes("#"),Ff("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,p;if(h==null)p=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),T-=1;o.pathname=k.join("/")}p=T>=0?e[T]:"/"}let g=iT(o,p),v=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||E)&&(g.pathname+="/"),g}const Pi=n=>n.join("/").replace(/\/\/+/g,"/"),aT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),lT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,uT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function cT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Cv=["post","put","patch","delete"];new Set(Cv);const hT=["get",...Cv];new Set(hT);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},il.apply(this,arguments)}const Fd=ee.createContext(null),fT=ee.createContext(null),Mi=ee.createContext(null),Uc=ee.createContext(null),qr=ee.createContext({outlet:null,matches:[],isDataRoute:!1}),Nv=ee.createContext(null);function dT(n,e){let{relative:t}=e===void 0?{}:e;Bo()||at(!1);let{basename:s,navigator:o}=ee.useContext(Mi),{hash:l,pathname:h,search:p}=Ov(n,{relative:t}),g=h;return s!=="/"&&(g=h==="/"?s:Pi([s,h])),o.createHref({pathname:g,search:p,hash:l})}function Bo(){return ee.useContext(Uc)!=null}function ml(){return Bo()||at(!1),ee.useContext(Uc).location}function xv(n){ee.useContext(Mi).static||ee.useLayoutEffect(n)}function zo(){let{isDataRoute:n}=ee.useContext(qr);return n?kT():pT()}function pT(){Bo()||at(!1);let n=ee.useContext(Fd),{basename:e,future:t,navigator:s}=ee.useContext(Mi),{matches:o}=ee.useContext(qr),{pathname:l}=ml(),h=JSON.stringify(Vd(o,t.v7_relativeSplatPath)),p=ee.useRef(!1);return xv(()=>{p.current=!0}),ee.useCallback(function(v,E){if(E===void 0&&(E={}),!p.current)return;if(typeof v=="number"){s.go(v);return}let T=Ud(v,JSON.parse(h),l,E.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Pi([e,T.pathname])),(E.replace?s.replace:s.push)(T,E.state,E)},[e,s,h,l,n])}const mT=ee.createContext(null);function gT(n){let e=ee.useContext(qr).outlet;return e&&ee.createElement(mT.Provider,{value:n},e)}function Ov(n,e){let{relative:t}=e===void 0?{}:e,{future:s}=ee.useContext(Mi),{matches:o}=ee.useContext(qr),{pathname:l}=ml(),h=JSON.stringify(Vd(o,s.v7_relativeSplatPath));return ee.useMemo(()=>Ud(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function yT(n,e){return vT(n,e)}function vT(n,e,t,s){Bo()||at(!1);let{navigator:o,static:l}=ee.useContext(Mi),{matches:h}=ee.useContext(qr),p=h[h.length-1],g=p?p.params:{};p&&p.pathname;let v=p?p.pathnameBase:"/";p&&p.route;let E=ml(),T;if(e){var k;let W=typeof e=="string"?ks(e):e;v==="/"||(k=W.pathname)!=null&&k.startsWith(v)||at(!1),T=W}else T=E;let F=T.pathname||"/",j=F;if(v!=="/"){let W=v.replace(/^\//,"").split("/");j="/"+F.replace(/^\//,"").split("/").slice(W.length).join("/")}let $=$E(n,{pathname:j}),V=IT($&&$.map(W=>Object.assign({},W,{params:Object.assign({},g,W.params),pathname:Pi([v,o.encodeLocation?o.encodeLocation(W.pathname).pathname:W.pathname]),pathnameBase:W.pathnameBase==="/"?v:Pi([v,o.encodeLocation?o.encodeLocation(W.pathnameBase).pathname:W.pathnameBase])})),h,t,s);return e&&V?ee.createElement(Uc.Provider,{value:{location:il({pathname:"/",search:"",hash:"",state:null,key:"default"},T),navigationType:Ai.Pop}},V):V}function _T(){let n=PT(),e=cT(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),t?ee.createElement("pre",{style:o},t):null,null)}const wT=ee.createElement(_T,null);class ET extends ee.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ee.createElement(qr.Provider,{value:this.props.routeContext},ee.createElement(Nv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function TT(n){let{routeContext:e,match:t,children:s}=n,o=ee.useContext(Fd);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ee.createElement(qr.Provider,{value:e},s)}function IT(n,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,p=(o=t)==null?void 0:o.errors;if(p!=null){let E=h.findIndex(T=>T.route.id&&(p==null?void 0:p[T.route.id])!==void 0);E>=0||at(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,v=-1;if(t&&s&&s.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(v=E),T.route.id){let{loaderData:k,errors:F}=t,j=T.route.loader&&k[T.route.id]===void 0&&(!F||F[T.route.id]===void 0);if(T.route.lazy||j){g=!0,v>=0?h=h.slice(0,v+1):h=[h[0]];break}}}return h.reduceRight((E,T,k)=>{let F,j=!1,$=null,V=null;t&&(F=p&&T.route.id?p[T.route.id]:void 0,$=T.route.errorElement||wT,g&&(v<0&&k===0?(CT("route-fallback"),j=!0,V=null):v===k&&(j=!0,V=T.route.hydrateFallbackElement||null)));let W=e.concat(h.slice(0,k+1)),J=()=>{let X;return F?X=$:j?X=V:T.route.Component?X=ee.createElement(T.route.Component,null):T.route.element?X=T.route.element:X=E,ee.createElement(TT,{match:T,routeContext:{outlet:E,matches:W,isDataRoute:t!=null},children:X})};return t&&(T.route.ErrorBoundary||T.route.errorElement||k===0)?ee.createElement(ET,{location:t.location,revalidation:t.revalidation,component:$,error:F,children:J(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):J()},null)}var Dv=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Dv||{}),Lv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Lv||{});function ST(n){let e=ee.useContext(Fd);return e||at(!1),e}function RT(n){let e=ee.useContext(fT);return e||at(!1),e}function AT(n){let e=ee.useContext(qr);return e||at(!1),e}function bv(n){let e=AT(),t=e.matches[e.matches.length-1];return t.route.id||at(!1),t.route.id}function PT(){var n;let e=ee.useContext(Nv),t=RT(),s=bv();return e!==void 0?e:(n=t.errors)==null?void 0:n[s]}function kT(){let{router:n}=ST(Dv.UseNavigateStable),e=bv(Lv.UseNavigateStable),t=ee.useRef(!1);return xv(()=>{t.current=!0}),ee.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,il({fromRouteId:e},l)))},[n,e])}const Jg={};function CT(n,e,t){Jg[n]||(Jg[n]=!0)}function NT(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function xT(n){let{to:e,replace:t,state:s,relative:o}=n;Bo()||at(!1);let{future:l,static:h}=ee.useContext(Mi),{matches:p}=ee.useContext(qr),{pathname:g}=ml(),v=zo(),E=Ud(e,Vd(p,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(E);return ee.useEffect(()=>v(JSON.parse(T),{replace:t,state:s,relative:o}),[v,T,o,t,s]),null}function OT(n){return gT(n.context)}function Io(n){at(!1)}function DT(n){let{basename:e="/",children:t=null,location:s,navigationType:o=Ai.Pop,navigator:l,static:h=!1,future:p}=n;Bo()&&at(!1);let g=e.replace(/^\/*/,"/"),v=ee.useMemo(()=>({basename:g,navigator:l,static:h,future:il({v7_relativeSplatPath:!1},p)}),[g,p,l,h]);typeof s=="string"&&(s=ks(s));let{pathname:E="/",search:T="",hash:k="",state:F=null,key:j="default"}=s,$=ee.useMemo(()=>{let V=Md(E,g);return V==null?null:{location:{pathname:V,search:T,hash:k,state:F,key:j},navigationType:o}},[g,E,T,k,F,j,o]);return $==null?null:ee.createElement(Mi.Provider,{value:v},ee.createElement(Uc.Provider,{children:t,value:$}))}function LT(n){let{children:e,location:t}=n;return yT(id(e),t)}new Promise(()=>{});function id(n,e){e===void 0&&(e=[]);let t=[];return ee.Children.forEach(n,(s,o)=>{if(!ee.isValidElement(s))return;let l=[...e,o];if(s.type===ee.Fragment){t.push.apply(t,id(s.props.children,l));return}s.type!==Io&&at(!1),!s.props.index||!s.props.children||at(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=id(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sd(){return sd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},sd.apply(this,arguments)}function bT(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function MT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function VT(n,e){return n.button===0&&(!e||e==="_self")&&!MT(n)}const UT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],FT="6";try{window.__reactRouterVersion=FT}catch{}const jT="startTransition",Zg=DE[jT];function BT(n){let{basename:e,children:t,future:s,window:o}=n,l=ee.useRef();l.current==null&&(l.current=jE({window:o,v5Compat:!0}));let h=l.current,[p,g]=ee.useState({action:h.action,location:h.location}),{v7_startTransition:v}=s||{},E=ee.useCallback(T=>{v&&Zg?Zg(()=>g(T)):g(T)},[g,v]);return ee.useLayoutEffect(()=>h.listen(E),[h,E]),ee.useEffect(()=>NT(s),[s]),ee.createElement(DT,{basename:e,children:t,location:p.location,navigationType:p.action,navigator:h,future:s})}const zT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hc=ee.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:p,target:g,to:v,preventScrollReset:E,viewTransition:T}=e,k=bT(e,UT),{basename:F}=ee.useContext(Mi),j,$=!1;if(typeof v=="string"&&$T.test(v)&&(j=v,zT))try{let X=new URL(window.location.href),te=v.startsWith("//")?new URL(X.protocol+v):new URL(v),me=Md(te.pathname,F);te.origin===X.origin&&me!=null?v=me+te.search+te.hash:$=!0}catch{}let V=dT(v,{relative:o}),W=HT(v,{replace:h,state:p,target:g,preventScrollReset:E,relative:o,viewTransition:T});function J(X){s&&s(X),X.defaultPrevented||W(X)}return ee.createElement("a",sd({},k,{href:j||V,onClick:$||l?s:J,ref:t,target:g}))});var ey;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(ey||(ey={}));var ty;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(ty||(ty={}));function HT(n,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:p}=e===void 0?{}:e,g=zo(),v=ml(),E=Ov(n,{relative:h});return ee.useCallback(T=>{if(VT(T,t)){T.preventDefault();let k=s!==void 0?s:cc(v)===cc(E);g(n,{replace:k,state:o,preventScrollReset:l,relative:h,viewTransition:p})}},[v,g,E,s,o,t,n,l,h,p])}var Ht=function(){return Ht=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Ht.apply(this,arguments)};function sl(n,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,l;s<o;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return n.concat(l||Array.prototype.slice.call(e))}var Ke="-ms-",Xa="-moz-",Ue="-webkit-",Mv="comm",Fc="rule",jd="decl",WT="@import",Vv="@keyframes",qT="@layer",Uv=Math.abs,Bd=String.fromCharCode,od=Object.assign;function KT(n,e){return Pt(n,0)^45?(((e<<2^Pt(n,0))<<2^Pt(n,1))<<2^Pt(n,2))<<2^Pt(n,3):0}function Fv(n){return n.trim()}function Vr(n,e){return(n=e.exec(n))?n[0]:n}function Se(n,e,t){return n.replace(e,t)}function Ju(n,e,t){return n.indexOf(e,t)}function Pt(n,e){return n.charCodeAt(e)|0}function No(n,e,t){return n.slice(e,t)}function hr(n){return n.length}function jv(n){return n.length}function qa(n,e){return e.push(n),n}function GT(n,e){return n.map(e).join("")}function ny(n,e){return n.filter(function(t){return!Vr(t,e)})}var jc=1,xo=1,Bv=0,On=0,dt=0,$o="";function Bc(n,e,t,s,o,l,h,p){return{value:n,root:e,parent:t,type:s,props:o,children:l,line:jc,column:xo,length:h,return:"",siblings:p}}function Ei(n,e){return od(Bc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function To(n){for(;n.root;)n=Ei(n.root,{children:[n]});qa(n,n.siblings)}function QT(){return dt}function XT(){return dt=On>0?Pt($o,--On):0,xo--,dt===10&&(xo=1,jc--),dt}function Jn(){return dt=On<Bv?Pt($o,On++):0,xo++,dt===10&&(xo=1,jc++),dt}function ys(){return Pt($o,On)}function Zu(){return On}function zc(n,e){return No($o,n,e)}function ad(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YT(n){return jc=xo=1,Bv=hr($o=n),On=0,[]}function JT(n){return $o="",n}function jf(n){return Fv(zc(On-1,ld(n===91?n+2:n===40?n+1:n)))}function ZT(n){for(;(dt=ys())&&dt<33;)Jn();return ad(n)>2||ad(dt)>3?"":" "}function eI(n,e){for(;--e&&Jn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return zc(n,Zu()+(e<6&&ys()==32&&Jn()==32))}function ld(n){for(;Jn();)switch(dt){case n:return On;case 34:case 39:n!==34&&n!==39&&ld(dt);break;case 40:n===41&&ld(n);break;case 92:Jn();break}return On}function tI(n,e){for(;Jn()&&n+dt!==57;)if(n+dt===84&&ys()===47)break;return"/*"+zc(e,On-1)+"*"+Bd(n===47?n:Jn())}function nI(n){for(;!ad(ys());)Jn();return zc(n,On)}function rI(n){return JT(ec("",null,null,null,[""],n=YT(n),0,[0],n))}function ec(n,e,t,s,o,l,h,p,g){for(var v=0,E=0,T=h,k=0,F=0,j=0,$=1,V=1,W=1,J=0,X="",te=o,me=l,ae=s,P=X;V;)switch(j=J,J=Jn()){case 40:if(j!=108&&Pt(P,T-1)==58){Ju(P+=Se(jf(J),"&","&\f"),"&\f",Uv(v?p[v-1]:0))!=-1&&(W=-1);break}case 34:case 39:case 91:P+=jf(J);break;case 9:case 10:case 13:case 32:P+=ZT(j);break;case 92:P+=eI(Zu()-1,7);continue;case 47:switch(ys()){case 42:case 47:qa(iI(tI(Jn(),Zu()),e,t,g),g);break;default:P+="/"}break;case 123*$:p[v++]=hr(P)*W;case 125*$:case 59:case 0:switch(J){case 0:case 125:V=0;case 59+E:W==-1&&(P=Se(P,/\f/g,"")),F>0&&hr(P)-T&&qa(F>32?iy(P+";",s,t,T-1,g):iy(Se(P," ","")+";",s,t,T-2,g),g);break;case 59:P+=";";default:if(qa(ae=ry(P,e,t,v,E,o,p,X,te=[],me=[],T,l),l),J===123)if(E===0)ec(P,e,ae,ae,te,l,T,p,me);else switch(k===99&&Pt(P,3)===110?100:k){case 100:case 108:case 109:case 115:ec(n,ae,ae,s&&qa(ry(n,ae,ae,0,0,o,p,X,o,te=[],T,me),me),o,me,T,p,s?te:me);break;default:ec(P,ae,ae,ae,[""],me,0,p,me)}}v=E=F=0,$=W=1,X=P="",T=h;break;case 58:T=1+hr(P),F=j;default:if($<1){if(J==123)--$;else if(J==125&&$++==0&&XT()==125)continue}switch(P+=Bd(J),J*$){case 38:W=E>0?1:(P+="\f",-1);break;case 44:p[v++]=(hr(P)-1)*W,W=1;break;case 64:ys()===45&&(P+=jf(Jn())),k=ys(),E=T=hr(X=P+=nI(Zu())),J++;break;case 45:j===45&&hr(P)==2&&($=0)}}return l}function ry(n,e,t,s,o,l,h,p,g,v,E,T){for(var k=o-1,F=o===0?l:[""],j=jv(F),$=0,V=0,W=0;$<s;++$)for(var J=0,X=No(n,k+1,k=Uv(V=h[$])),te=n;J<j;++J)(te=Fv(V>0?F[J]+" "+X:Se(X,/&\f/g,F[J])))&&(g[W++]=te);return Bc(n,e,t,o===0?Fc:p,g,v,E,T)}function iI(n,e,t,s){return Bc(n,e,t,Mv,Bd(QT()),No(n,2,-2),0,s)}function iy(n,e,t,s,o){return Bc(n,e,t,jd,No(n,0,s),No(n,s+1,-1),s,o)}function zv(n,e,t){switch(KT(n,e)){case 5103:return Ue+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ue+n+n;case 4789:return Xa+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+n+Xa+n+Ke+n+n;case 5936:switch(Pt(n,e+11)){case 114:return Ue+n+Ke+Se(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ue+n+Ke+Se(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ue+n+Ke+Se(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ue+n+Ke+n+n;case 6165:return Ue+n+Ke+"flex-"+n+n;case 5187:return Ue+n+Se(n,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Ke+"flex-$1$2")+n;case 5443:return Ue+n+Ke+"flex-item-"+Se(n,/flex-|-self/g,"")+(Vr(n,/flex-|baseline/)?"":Ke+"grid-row-"+Se(n,/flex-|-self/g,""))+n;case 4675:return Ue+n+Ke+"flex-line-pack"+Se(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ue+n+Ke+Se(n,"shrink","negative")+n;case 5292:return Ue+n+Ke+Se(n,"basis","preferred-size")+n;case 6060:return Ue+"box-"+Se(n,"-grow","")+Ue+n+Ke+Se(n,"grow","positive")+n;case 4554:return Ue+Se(n,/([^-])(transform)/g,"$1"+Ue+"$2")+n;case 6187:return Se(Se(Se(n,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),n,"")+n;case 5495:case 3959:return Se(n,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Se(Se(n,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ue+n+n;case 4200:if(!Vr(n,/flex-|baseline/))return Ke+"grid-column-align"+No(n,e)+n;break;case 2592:case 3360:return Ke+Se(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,Vr(s.props,/grid-\w+-end/)})?~Ju(n+(t=t[e].value),"span",0)?n:Ke+Se(n,"-start","")+n+Ke+"grid-row-span:"+(~Ju(t,"span",0)?Vr(t,/\d+/):+Vr(t,/\d+/)-+Vr(n,/\d+/))+";":Ke+Se(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(s){return Vr(s.props,/grid-\w+-start/)})?n:Ke+Se(Se(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Se(n,/(.+)-inline(.+)/,Ue+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hr(n)-1-e>6)switch(Pt(n,e+1)){case 109:if(Pt(n,e+4)!==45)break;case 102:return Se(n,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+Xa+(Pt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ju(n,"stretch",0)?zv(Se(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Se(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,h,p,g,v){return Ke+o+":"+l+v+(h?Ke+o+"-span:"+(p?g:+g-+l)+v:"")+n});case 4949:if(Pt(n,e+6)===121)return Se(n,":",":"+Ue)+n;break;case 6444:switch(Pt(n,Pt(n,14)===45?18:11)){case 120:return Se(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(Pt(n,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Ke+"$2box$3")+n;case 100:return Se(n,":",":"+Ke)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Se(n,"scroll-","scroll-snap-")+n}return n}function fc(n,e){for(var t="",s=0;s<n.length;s++)t+=e(n[s],s,n,e)||"";return t}function sI(n,e,t,s){switch(n.type){case qT:if(n.children.length)break;case WT:case jd:return n.return=n.return||n.value;case Mv:return"";case Vv:return n.return=n.value+"{"+fc(n.children,s)+"}";case Fc:if(!hr(n.value=n.props.join(",")))return""}return hr(t=fc(n.children,s))?n.return=n.value+"{"+t+"}":""}function oI(n){var e=jv(n);return function(t,s,o,l){for(var h="",p=0;p<e;p++)h+=n[p](t,s,o,l)||"";return h}}function aI(n){return function(e){e.root||(e=e.return)&&n(e)}}function lI(n,e,t,s){if(n.length>-1&&!n.return)switch(n.type){case jd:n.return=zv(n.value,n.length,t);return;case Vv:return fc([Ei(n,{value:Se(n.value,"@","@"+Ue)})],s);case Fc:if(n.length)return GT(t=n.props,function(o){switch(Vr(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":To(Ei(n,{props:[Se(o,/:(read-\w+)/,":"+Xa+"$1")]})),To(Ei(n,{props:[o]})),od(n,{props:ny(t,s)});break;case"::placeholder":To(Ei(n,{props:[Se(o,/:(plac\w+)/,":"+Ue+"input-$1")]})),To(Ei(n,{props:[Se(o,/:(plac\w+)/,":"+Xa+"$1")]})),To(Ei(n,{props:[Se(o,/:(plac\w+)/,Ke+"input-$1")]})),To(Ei(n,{props:[o]})),od(n,{props:ny(t,s)});break}return""})}}var uI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vn={},Oo=typeof process<"u"&&vn!==void 0&&(vn.REACT_APP_SC_ATTR||vn.SC_ATTR)||"data-styled",$v="active",Hv="data-styled-version",$c="6.1.17",zd=`/*!sc*/
`,dc=typeof window<"u"&&"HTMLElement"in window,cI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vn.REACT_APP_SC_DISABLE_SPEEDY!==""?vn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vn!==void 0&&vn.SC_DISABLE_SPEEDY!==void 0&&vn.SC_DISABLE_SPEEDY!==""&&vn.SC_DISABLE_SPEEDY!=="false"&&vn.SC_DISABLE_SPEEDY),hI={},Hc=Object.freeze([]),Do=Object.freeze({});function Wv(n,e,t){return t===void 0&&(t=Do),n.theme!==t.theme&&n.theme||e||t.theme}var qv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dI=/(^-|-$)/g;function sy(n){return n.replace(fI,"-").replace(dI,"")}var pI=/(a)(d)/gi,zu=52,oy=function(n){return String.fromCharCode(n+(n>25?39:97))};function ud(n){var e,t="";for(e=Math.abs(n);e>zu;e=e/zu|0)t=oy(e%zu)+t;return(oy(e%zu)+t).replace(pI,"$1-$2")}var Bf,Kv=5381,Ro=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Gv=function(n){return Ro(Kv,n)};function Qv(n){return ud(Gv(n)>>>0)}function mI(n){return n.displayName||n.name||"Component"}function zf(n){return typeof n=="string"&&!0}var Xv=typeof Symbol=="function"&&Symbol.for,Yv=Xv?Symbol.for("react.memo"):60115,gI=Xv?Symbol.for("react.forward_ref"):60112,yI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_I=((Bf={})[gI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bf[Yv]=Jv,Bf);function ay(n){return("type"in(e=n)&&e.type.$$typeof)===Yv?Jv:"$$typeof"in n?_I[n.$$typeof]:yI;var e}var wI=Object.defineProperty,EI=Object.getOwnPropertyNames,ly=Object.getOwnPropertySymbols,TI=Object.getOwnPropertyDescriptor,II=Object.getPrototypeOf,uy=Object.prototype;function Zv(n,e,t){if(typeof e!="string"){if(uy){var s=II(e);s&&s!==uy&&Zv(n,s,t)}var o=EI(e);ly&&(o=o.concat(ly(e)));for(var l=ay(n),h=ay(e),p=0;p<o.length;++p){var g=o[p];if(!(g in vI||t&&t[g]||h&&g in h||l&&g in l)){var v=TI(e,g);try{wI(n,g,v)}catch{}}}}return n}function Lo(n){return typeof n=="function"}function $d(n){return typeof n=="object"&&"styledComponentId"in n}function ds(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function cd(n,e){if(n.length===0)return"";for(var t=n[0],s=1;s<n.length;s++)t+=n[s];return t}function ol(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function hd(n,e,t){if(t===void 0&&(t=!1),!t&&!ol(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)n[s]=hd(n[s],e[s]);else if(ol(e))for(var s in e)n[s]=hd(n[s],e[s]);return n}function Hd(n,e){Object.defineProperty(n,"toString",{value:e})}function gl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var SI=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;e>=l;)if((l<<=1)<0)throw gl(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var h=o;h<l;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(e+1),g=(h=0,t.length);h<g;h++)this.tag.insertRule(p,t[h])&&(this.groupSizes[e]++,p++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),l=o+s,h=o;h<l;h++)t+="".concat(this.tag.getRule(h)).concat(zd);return t},n}(),tc=new Map,pc=new Map,nc=1,$u=function(n){if(tc.has(n))return tc.get(n);for(;pc.has(nc);)nc++;var e=nc++;return tc.set(n,e),pc.set(e,n),e},RI=function(n,e){nc=e+1,tc.set(n,e),pc.set(e,n)},AI="style[".concat(Oo,"][").concat(Hv,'="').concat($c,'"]'),PI=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kI=function(n,e,t){for(var s,o=t.split(","),l=0,h=o.length;l<h;l++)(s=o[l])&&n.registerName(e,s)},CI=function(n,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(zd),o=[],l=0,h=s.length;l<h;l++){var p=s[l].trim();if(p){var g=p.match(PI);if(g){var v=0|parseInt(g[1],10),E=g[2];v!==0&&(RI(E,v),kI(n,E,g[3]),n.getTag().insertRules(v,o)),o.length=0}else o.push(p)}}},cy=function(n){for(var e=document.querySelectorAll(AI),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(Oo)!==$v&&(CI(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function NI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var e_=function(n){var e=document.head,t=n||e,s=document.createElement("style"),o=function(p){var g=Array.from(p.querySelectorAll("style[".concat(Oo,"]")));return g[g.length-1]}(t),l=o!==void 0?o.nextSibling:null;s.setAttribute(Oo,$v),s.setAttribute(Hv,$c);var h=NI();return h&&s.setAttribute("nonce",h),t.insertBefore(s,l),s},xI=function(){function n(e){this.element=e_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var h=s[o];if(h.ownerNode===t)return h}throw gl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),OI=function(){function n(e){this.element=e_(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),DI=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),hy=dc,LI={isServer:!dc,useCSSOMInjection:!cI},mc=function(){function n(e,t,s){e===void 0&&(e=Do),t===void 0&&(t={});var o=this;this.options=Ht(Ht({},LI),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&dc&&hy&&(hy=!1,cy(this)),Hd(this,function(){return function(l){for(var h=l.getTag(),p=h.length,g="",v=function(T){var k=function(W){return pc.get(W)}(T);if(k===void 0)return"continue";var F=l.names.get(k),j=h.getGroup(T);if(F===void 0||!F.size||j.length===0)return"continue";var $="".concat(Oo,".g").concat(T,'[id="').concat(k,'"]'),V="";F!==void 0&&F.forEach(function(W){W.length>0&&(V+="".concat(W,","))}),g+="".concat(j).concat($,'{content:"').concat(V,'"}').concat(zd)},E=0;E<p;E++)v(E);return g}(o)})}return n.registerId=function(e){return $u(e)},n.prototype.rehydrate=function(){!this.server&&dc&&cy(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Ht(Ht({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new DI(o):s?new xI(o):new OI(o)}(this.options),new SI(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if($u(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},n.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules($u(e),s)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup($u(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),bI=/&/g,MI=/^\s*\/\/.*$/gm;function t_(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=t_(t.children,e)),t})}function VI(n){var e,t,s,o=Do,l=o.options,h=l===void 0?Do:l,p=o.plugins,g=p===void 0?Hc:p,v=function(k,F,j){return j.startsWith(t)&&j.endsWith(t)&&j.replaceAll(t,"").length>0?".".concat(e):k},E=g.slice();E.push(function(k){k.type===Fc&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(bI,t).replace(s,v))}),h.prefix&&E.push(lI),E.push(sI);var T=function(k,F,j,$){F===void 0&&(F=""),j===void 0&&(j=""),$===void 0&&($="&"),e=$,t=F,s=new RegExp("\\".concat(t,"\\b"),"g");var V=k.replace(MI,""),W=rI(j||F?"".concat(j," ").concat(F," { ").concat(V," }"):V);h.namespace&&(W=t_(W,h.namespace));var J=[];return fc(W,oI(E.concat(aI(function(X){return J.push(X)})))),J};return T.hash=g.length?g.reduce(function(k,F){return F.name||gl(15),Ro(k,F.name)},Kv).toString():"",T}var UI=new mc,fd=VI(),n_=Xn.createContext({shouldForwardProp:void 0,styleSheet:UI,stylis:fd});n_.Consumer;Xn.createContext(void 0);function dd(){return ee.useContext(n_)}var FI=function(){function n(e,t){var s=this;this.inject=function(o,l){l===void 0&&(l=fd);var h=s.name+l.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,l(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Hd(this,function(){throw gl(12,String(s.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=fd),this.name+e.hash},n}(),jI=function(n){return n>="A"&&n<="Z"};function fy(n){for(var e="",t=0;t<n.length;t++){var s=n[t];if(t===1&&s==="-"&&n[0]==="-")return n;jI(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var r_=function(n){return n==null||n===!1||n===""},i_=function(n){var e,t,s=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!r_(l)&&(Array.isArray(l)&&l.isCss||Lo(l)?s.push("".concat(fy(o),":"),l,";"):ol(l)?s.push.apply(s,sl(sl(["".concat(o," {")],i_(l),!1),["}"],!1)):s.push("".concat(fy(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in uI||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function ki(n,e,t,s){if(r_(n))return[];if($d(n))return[".".concat(n.styledComponentId)];if(Lo(n)){if(!Lo(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return ki(o,e,t,s)}var l;return n instanceof FI?t?(n.inject(t,s),[n.getName(s)]):[n]:ol(n)?i_(n):Array.isArray(n)?Array.prototype.concat.apply(Hc,n.map(function(h){return ki(h,e,t,s)})):[n.toString()]}function s_(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Lo(t)&&!$d(t))return!1}return!0}var BI=Gv($c),zI=function(){function n(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&s_(e),this.componentId=t,this.baseHash=Ro(BI,t),this.baseStyle=s,mc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=ds(o,this.staticRulesId);else{var l=cd(ki(this.rules,e,t,s)),h=ud(Ro(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,h)){var p=s(l,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,p)}o=ds(o,h),this.staticRulesId=h}else{for(var g=Ro(this.baseHash,s.hash),v="",E=0;E<this.rules.length;E++){var T=this.rules[E];if(typeof T=="string")v+=T;else if(T){var k=cd(ki(T,e,t,s));g=Ro(g,k+E),v+=k}}if(v){var F=ud(g>>>0);t.hasNameForId(this.componentId,F)||t.insertRules(this.componentId,F,s(v,".".concat(F),void 0,this.componentId)),o=ds(o,F)}}return o},n}(),Wd=Xn.createContext(void 0);Wd.Consumer;var $f={};function $I(n,e,t){var s=$d(n),o=n,l=!zf(n),h=e.attrs,p=h===void 0?Hc:h,g=e.componentId,v=g===void 0?function(te,me){var ae=typeof te!="string"?"sc":sy(te);$f[ae]=($f[ae]||0)+1;var P="".concat(ae,"-").concat(Qv($c+ae+$f[ae]));return me?"".concat(me,"-").concat(P):P}(e.displayName,e.parentComponentId):g,E=e.displayName,T=E===void 0?function(te){return zf(te)?"styled.".concat(te):"Styled(".concat(mI(te),")")}(n):E,k=e.displayName&&e.componentId?"".concat(sy(e.displayName),"-").concat(e.componentId):e.componentId||v,F=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,j=e.shouldForwardProp;if(s&&o.shouldForwardProp){var $=o.shouldForwardProp;if(e.shouldForwardProp){var V=e.shouldForwardProp;j=function(te,me){return $(te,me)&&V(te,me)}}else j=$}var W=new zI(t,k,s?o.componentStyle:void 0);function J(te,me){return function(ae,P,I){var A=ae.attrs,N=ae.componentStyle,O=ae.defaultProps,L=ae.foldedComponentIds,R=ae.styledComponentId,Xe=ae.target,wt=Xn.useContext(Wd),Et=dd(),Me=ae.shouldForwardProp||Et.shouldForwardProp,re=Wv(P,wt,O)||Do,ce=function(Te,Ie,ke){for(var Pe,Oe=Ht(Ht({},Ie),{className:void 0,theme:ke}),et=0;et<Te.length;et+=1){var Zt=Lo(Pe=Te[et])?Pe(Oe):Pe;for(var Kt in Zt)Oe[Kt]=Kt==="className"?ds(Oe[Kt],Zt[Kt]):Kt==="style"?Ht(Ht({},Oe[Kt]),Zt[Kt]):Zt[Kt]}return Ie.className&&(Oe.className=ds(Oe.className,Ie.className)),Oe}(A,P,re),ie=ce.as||Xe,D={};for(var H in ce)ce[H]===void 0||H[0]==="$"||H==="as"||H==="theme"&&ce.theme===re||(H==="forwardedAs"?D.as=ce.forwardedAs:Me&&!Me(H,ie)||(D[H]=ce[H]));var de=function(Te,Ie){var ke=dd(),Pe=Te.generateAndInjectStyles(Ie,ke.styleSheet,ke.stylis);return Pe}(N,ce),Ee=ds(L,R);return de&&(Ee+=" "+de),ce.className&&(Ee+=" "+ce.className),D[zf(ie)&&!qv.has(ie)?"class":"className"]=Ee,I&&(D.ref=I),ee.createElement(ie,D)}(X,te,me)}J.displayName=T;var X=Xn.forwardRef(J);return X.attrs=F,X.componentStyle=W,X.displayName=T,X.shouldForwardProp=j,X.foldedComponentIds=s?ds(o.foldedComponentIds,o.styledComponentId):"",X.styledComponentId=k,X.target=s?o.target:n,Object.defineProperty(X,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(te){this._foldedDefaultProps=s?function(me){for(var ae=[],P=1;P<arguments.length;P++)ae[P-1]=arguments[P];for(var I=0,A=ae;I<A.length;I++)hd(me,A[I],!0);return me}({},o.defaultProps,te):te}}),Hd(X,function(){return".".concat(X.styledComponentId)}),l&&Zv(X,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),X}function dy(n,e){for(var t=[n[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],n[s+1]);return t}var py=function(n){return Object.assign(n,{isCss:!0})};function qd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Lo(n)||ol(n))return py(ki(dy(Hc,sl([n],e,!0))));var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?ki(s):py(ki(dy(s,e)))}function pd(n,e,t){if(t===void 0&&(t=Do),!e)throw gl(1,e);var s=function(o){for(var l=[],h=1;h<arguments.length;h++)l[h-1]=arguments[h];return n(e,t,qd.apply(void 0,sl([o],l,!1)))};return s.attrs=function(o){return pd(n,e,Ht(Ht({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return pd(n,e,Ht(Ht({},t),o))},s}var o_=function(n){return pd($I,n)},ut=o_;qv.forEach(function(n){ut[n]=o_(n)});var HI=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=s_(e),mc.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,s,o){var l=o(cd(ki(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,s,o){e>2&&mc.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},n}();function a_(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=qd.apply(void 0,sl([n],e,!1)),o="sc-global-".concat(Qv(JSON.stringify(s))),l=new HI(s,o),h=function(g){var v=dd(),E=Xn.useContext(Wd),T=Xn.useRef(v.styleSheet.allocateGSInstance(o)).current;return v.styleSheet.server&&p(T,g,v.styleSheet,E,v.stylis),Xn.useLayoutEffect(function(){if(!v.styleSheet.server)return p(T,g,v.styleSheet,E,v.stylis),function(){return l.removeStyles(T,v.styleSheet)}},[T,g,v.styleSheet,E,v.stylis]),null};function p(g,v,E,T,k){if(l.isStatic)l.renderStyles(g,hI,E,k);else{var F=Ht(Ht({},v),{theme:Wv(v,T,h.defaultProps)});l.renderStyles(g,F,E,k)}}return Xn.memo(h)}var my={};/**
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
 */const l_=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},WI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],p=n[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],h=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,p=h?n[o+1]:0,g=o+2<n.length,v=g?n[o+2]:0,E=l>>2,T=(l&3)<<4|p>>4;let k=(p&15)<<2|v>>6,F=v&63;g||(F=64,h||(k=64)),s.push(t[E],t[T],t[k],t[F])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(l_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):WI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],p=o<n.length?t[n.charAt(o)]:0;++o;const v=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||p==null||v==null||T==null)throw new qI;const k=l<<2|p>>4;if(s.push(k),v!==64){const F=p<<4&240|v>>2;if(s.push(F),T!==64){const j=v<<6&192|T;s.push(j)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const KI=function(n){const e=l_(n);return u_.encodeByteArray(e,!0)},gc=function(n){return KI(n).replace(/\./g,"")},c_=function(n){try{return u_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const QI=()=>GI().__FIREBASE_DEFAULTS__,XI=()=>{if(typeof process>"u"||typeof my>"u")return;const n=my.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},YI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&c_(n[1]);return e&&JSON.parse(e)},Wc=()=>{try{return QI()||XI()||YI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},h_=n=>{var e,t;return(t=(e=Wc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},f_=n=>{const e=h_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},d_=()=>{var n;return(n=Wc())===null||n===void 0?void 0:n.config},p_=n=>{var e;return(e=Wc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class JI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function m_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[gc(JSON.stringify(t)),gc(JSON.stringify(h)),""].join(".")}/**
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
 */function qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qt())}function eS(){var n;const e=(n=Wc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function rS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iS(){const n=qt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sS(){return!eS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oS(){try{return typeof indexedDB=="object"}catch{return!1}}function aS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const lS="FirebaseError";class un extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=lS,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?uS(l,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new un(o,p,s)}}function uS(n,e){return n.replace(cS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const cS=/\{\$([^}]+)}/g;function hS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yc(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],h=e[o];if(gy(l)&&gy(h)){if(!yc(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function gy(n){return n!==null&&typeof n=="object"}/**
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
 */function vl(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ka(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ga(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fS(n,e){const t=new dS(n,e);return t.subscribe.bind(t)}class dS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");pS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Hf),o.error===void 0&&(o.error=Hf),o.complete===void 0&&(o.complete=Hf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Hf(){}/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fs="[DEFAULT]";/**
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
 */class mS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new JI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yS(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(l);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(n){return n===fs?void 0:n}function yS(n){return n.instantiationMode==="EAGER"}/**
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
 */class vS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new mS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const _S={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},wS=Ne.INFO,ES={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},TS=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=ES[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=wS,this._logHandler=TS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_S[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const IS=(n,e)=>e.some(t=>n instanceof t);let yy,vy;function SS(){return yy||(yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RS(){return vy||(vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const g_=new WeakMap,md=new WeakMap,y_=new WeakMap,Wf=new WeakMap,Gd=new WeakMap;function AS(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ci(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&g_.set(t,n)}).catch(()=>{}),Gd.set(e,n),e}function PS(n){if(md.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});md.set(n,e)}let gd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return md.get(n);if(e==="objectStoreNames")return n.objectStoreNames||y_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ci(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function kS(n){gd=n(gd)}function CS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(qf(this),e,...t);return y_.set(s,e.sort?e.sort():[e]),Ci(s)}:RS().includes(n)?function(...e){return n.apply(qf(this),e),Ci(g_.get(this))}:function(...e){return Ci(n.apply(qf(this),e))}}function NS(n){return typeof n=="function"?CS(n):(n instanceof IDBTransaction&&PS(n),IS(n,SS())?new Proxy(n,gd):n)}function Ci(n){if(n instanceof IDBRequest)return AS(n);if(Wf.has(n))return Wf.get(n);const e=NS(n);return e!==n&&(Wf.set(n,e),Gd.set(e,n)),e}const qf=n=>Gd.get(n);function xS(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),p=Ci(h);return s&&h.addEventListener("upgradeneeded",g=>{s(Ci(h.result),g.oldVersion,g.newVersion,Ci(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const OS=["get","getKey","getAll","getAllKeys","count"],DS=["put","add","delete","clear"],Kf=new Map;function _y(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Kf.get(e))return Kf.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=DS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||OS.includes(t)))return;const l=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&g.done]))[0]};return Kf.set(e,l),l}kS(n=>({...n,get:(e,t,s)=>_y(e,t)||n.get(e,t,s),has:(e,t)=>!!_y(e,t)||n.has(e,t)}));/**
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
 */class LS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function bS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",wy="0.10.13";/**
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
 */const $r=new Kd("@firebase/app"),MS="@firebase/app-compat",VS="@firebase/analytics-compat",US="@firebase/analytics",FS="@firebase/app-check-compat",jS="@firebase/app-check",BS="@firebase/auth",zS="@firebase/auth-compat",$S="@firebase/database",HS="@firebase/data-connect",WS="@firebase/database-compat",qS="@firebase/functions",KS="@firebase/functions-compat",GS="@firebase/installations",QS="@firebase/installations-compat",XS="@firebase/messaging",YS="@firebase/messaging-compat",JS="@firebase/performance",ZS="@firebase/performance-compat",e1="@firebase/remote-config",t1="@firebase/remote-config-compat",n1="@firebase/storage",r1="@firebase/storage-compat",i1="@firebase/firestore",s1="@firebase/vertexai-preview",o1="@firebase/firestore-compat",a1="firebase",l1="10.14.1";/**
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
 */const vd="[DEFAULT]",u1={[yd]:"fire-core",[MS]:"fire-core-compat",[US]:"fire-analytics",[VS]:"fire-analytics-compat",[jS]:"fire-app-check",[FS]:"fire-app-check-compat",[BS]:"fire-auth",[zS]:"fire-auth-compat",[$S]:"fire-rtdb",[HS]:"fire-data-connect",[WS]:"fire-rtdb-compat",[qS]:"fire-fn",[KS]:"fire-fn-compat",[GS]:"fire-iid",[QS]:"fire-iid-compat",[XS]:"fire-fcm",[YS]:"fire-fcm-compat",[JS]:"fire-perf",[ZS]:"fire-perf-compat",[e1]:"fire-rc",[t1]:"fire-rc-compat",[n1]:"fire-gcs",[r1]:"fire-gcs-compat",[i1]:"fire-fst",[o1]:"fire-fst-compat",[s1]:"fire-vertex","fire-js":"fire-js",[a1]:"fire-js-all"};/**
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
 */const vc=new Map,c1=new Map,_d=new Map;function Ey(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Es(n){const e=n.name;if(_d.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,n);for(const t of vc.values())Ey(t,n);for(const t of c1.values())Ey(t,n);return!0}function qc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Yn(n){return n.settings!==void 0}/**
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
 */const h1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new yl("app","Firebase",h1);/**
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
 */class f1{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=l1;function v_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw Ni.create("bad-app-name",{appName:String(o)});if(t||(t=d_()),!t)throw Ni.create("no-options");const l=vc.get(o);if(l){if(yc(t,l.options)&&yc(s,l.config))return l;throw Ni.create("duplicate-app",{appName:o})}const h=new vS(o);for(const g of _d.values())h.addComponent(g);const p=new f1(t,s,h);return vc.set(o,p),p}function Qd(n=vd){const e=vc.get(n);if(!e&&n===vd&&d_())return v_();if(!e)throw Ni.create("no-app",{appName:n});return e}function dr(n,e,t){var s;let o=(s=u1[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const p=[`Unable to register library "${o}" with version "${e}":`];l&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(p.join(" "));return}Es(new Oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const d1="firebase-heartbeat-database",p1=1,al="firebase-heartbeat-store";let Gf=null;function __(){return Gf||(Gf=xS(d1,p1,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(al)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ni.create("idb-open",{originalErrorMessage:n.message})})),Gf}async function m1(n){try{const t=(await __()).transaction(al),s=await t.objectStore(al).get(w_(n));return await t.done,s}catch(e){if(e instanceof un)$r.warn(e.message);else{const t=Ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function Ty(n,e){try{const s=(await __()).transaction(al,"readwrite");await s.objectStore(al).put(e,w_(n)),await s.done}catch(t){if(t instanceof un)$r.warn(t.message);else{const s=Ni.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(s.message)}}}function w_(n){return`${n.name}!${n.options.appId}`}/**
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
 */const g1=1024,y1=30*24*60*60*1e3;class v1{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new w1(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Iy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=y1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){$r.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Iy(),{heartbeatsToSend:s,unsentEntries:o}=_1(this._heartbeatsCache.heartbeats),l=gc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return $r.warn(t),""}}}function Iy(){return new Date().toISOString().substring(0,10)}function _1(n,e=g1){const t=[];let s=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Sy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Sy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class w1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oS()?aS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await m1(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ty(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Ty(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Sy(n){return gc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function E1(n){Es(new Oi("platform-logger",e=>new LS(e),"PRIVATE")),Es(new Oi("heartbeat",e=>new v1(e),"PRIVATE")),dr(yd,wy,n),dr(yd,wy,"esm2017"),dr("fire-js","")}E1("");var T1="firebase",I1="10.14.1";/**
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
 */dr(T1,I1,"app");function Xd(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function E_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S1=E_,T_=new yl("auth","Firebase",E_());/**
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
 */const _c=new Kd("@firebase/auth");function R1(n,...e){_c.logLevel<=Ne.WARN&&_c.warn(`Auth (${Cs}): ${n}`,...e)}function rc(n,...e){_c.logLevel<=Ne.ERROR&&_c.error(`Auth (${Cs}): ${n}`,...e)}/**
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
 */function Dn(n,...e){throw Jd(n,...e)}function Zn(n,...e){return Jd(n,...e)}function Yd(n,e,t){const s=Object.assign(Object.assign({},S1()),{[e]:t});return new yl("auth","Firebase",s).create(e,{appName:n.name})}function zr(n){return Yd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function A1(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Dn(n,"argument-error"),Yd(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jd(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return T_.create(n,...e)}function _e(n,e,...t){if(!n)throw Jd(e,...t)}function Fr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rc(e),new Error(e)}function Hr(n,e){n||Fr(e)}/**
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
 */function wd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function P1(){return Ry()==="http:"||Ry()==="https:"}function Ry(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P1()||nS()||"connection"in navigator)?navigator.onLine:!0}function C1(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _l{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hr(t>e,"Short delay should be less than long delay!"),this.isMobile=ZI()||rS()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(n,e){Hr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class I_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const N1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const x1=new _l(3e4,6e4);function Kr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _r(n,e,t,s,o={}){return S_(n,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const p=vl(Object.assign({key:n.config.apiKey},h)).slice(1),g=await n._getAdditionalHeaders();g["Content-Type"]="application/json",n.languageCode&&(g["X-Firebase-Locale"]=n.languageCode);const v=Object.assign({method:e,headers:g},l);return tS()||(v.referrerPolicy="no-referrer"),I_.fetch()(R_(n,n.config.apiHost,t,p),v)})}async function S_(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},N1),e);try{const o=new D1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Hu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const p=l.ok?h.errorMessage:h.error.message,[g,v]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hu(n,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Hu(n,"email-already-in-use",h);if(g==="USER_DISABLED")throw Hu(n,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Yd(n,E,v);Dn(n,E)}}catch(o){if(o instanceof un)throw o;Dn(n,"network-request-failed",{message:String(o)})}}async function wl(n,e,t,s,o={}){const l=await _r(n,e,t,s,o);return"mfaPendingCredential"in l&&Dn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function R_(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Zd(n.config,o):`${n.config.apiScheme}://${o}`}function O1(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class D1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),x1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hu(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(n,e,s);return o.customData._tokenResponse=t,o}function Ay(n){return n!==void 0&&n.enterprise!==void 0}class L1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return O1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function b1(n,e){return _r(n,"GET","/v2/recaptchaConfig",Kr(n,e))}/**
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
 */async function M1(n,e){return _r(n,"POST","/v1/accounts:delete",e)}async function A_(n,e){return _r(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V1(n,e=!1){const t=pt(n),s=await t.getIdToken(e),o=ep(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ya(Qf(o.auth_time)),issuedAtTime:Ya(Qf(o.iat)),expirationTime:Ya(Qf(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Qf(n){return Number(n)*1e3}function ep(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=c_(t);return o?JSON.parse(o):(rc("Failed to decode base64 JWT payload"),null)}catch(o){return rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Py(n){const e=ep(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof un&&U1(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function U1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class F1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ed{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wc(n){var e;const t=n.auth,s=await n.getIdToken(),o=await bo(n,A_(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?P_(l.providerUserInfo):[],p=B1(n.providerData,h),g=n.isAnonymous,v=!(n.email&&l.passwordHash)&&!(p!=null&&p.length),E=g?v:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:p,metadata:new Ed(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function j1(n){const e=pt(n);await wc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function B1(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function P_(n){return n.map(e=>{var{providerId:t}=e,s=Xd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function z1(n,e){const t=await S_(n,{},async()=>{const s=vl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=R_(n,o,"/v1/token",`key=${l}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",I_.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function $1(n,e){return _r(n,"POST","/v2/accounts:revokeToken",Kr(n,e))}/**
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
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await z1(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new Ao;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Fr("not implemented")}}/**
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
 */function wi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class jr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new F1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ed(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await bo(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return V1(this,e)}reload(){return j1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await wc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(zr(this.auth));const e=await this.getIdToken();return await bo(this,M1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,p,g,v,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,j=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(p=t.tenantId)!==null&&p!==void 0?p:void 0,V=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,W=(v=t.createdAt)!==null&&v!==void 0?v:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:X,emailVerified:te,isAnonymous:me,providerData:ae,stsTokenManager:P}=t;_e(X&&P,e,"internal-error");const I=Ao.fromJSON(this.name,P);_e(typeof X=="string",e,"internal-error"),wi(T,e.name),wi(k,e.name),_e(typeof te=="boolean",e,"internal-error"),_e(typeof me=="boolean",e,"internal-error"),wi(F,e.name),wi(j,e.name),wi($,e.name),wi(V,e.name),wi(W,e.name),wi(J,e.name);const A=new jr({uid:X,auth:e,email:k,emailVerified:te,displayName:T,isAnonymous:me,photoURL:j,phoneNumber:F,tenantId:$,stsTokenManager:I,createdAt:W,lastLoginAt:J});return ae&&Array.isArray(ae)&&(A.providerData=ae.map(N=>Object.assign({},N))),V&&(A._redirectEventId=V),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new Ao;o.updateFromServerResponse(t);const l=new jr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await wc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?P_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),p=new Ao;p.updateFromIdToken(s);const g=new jr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ed(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,v),g}}/**
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
 */const ky=new Map;function Br(n){Hr(n instanceof Function,"Expected a class definition");let e=ky.get(n);return e?(Hr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ky.set(n,e),e)}/**
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
 */class k_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}k_.type="NONE";const Cy=k_;/**
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
 */function ic(n,e,t){return`firebase:${n}:${e}:${t}`}class Po{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=ic(this.userKey,o.apiKey,l),this.fullPersistenceKey=ic("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Po(Br(Cy),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=o[0]||Br(Cy);const h=ic(s,e.config.apiKey,e.name);let p=null;for(const v of t)try{const E=await v._get(h);if(E){const T=jr._fromJSON(e,E);v!==l&&(p=T),l=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new Po(l,e,s):(l=g[0],p&&await l._set(h,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==l)try{await v._remove(h)}catch{}})),new Po(l,e,s))}}/**
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
 */function Ny(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(O_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(C_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(L_(e))return"Blackberry";if(b_(e))return"Webos";if(N_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(D_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function C_(n=qt()){return/firefox\//i.test(n)}function N_(n=qt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(n=qt()){return/crios\//i.test(n)}function O_(n=qt()){return/iemobile/i.test(n)}function D_(n=qt()){return/android/i.test(n)}function L_(n=qt()){return/blackberry/i.test(n)}function b_(n=qt()){return/webos/i.test(n)}function tp(n=qt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function H1(n=qt()){var e;return tp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W1(){return iS()&&document.documentMode===10}function M_(n=qt()){return tp(n)||D_(n)||b_(n)||L_(n)||/windows phone/i.test(n)||O_(n)}/**
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
 */function V_(n,e=[]){let t;switch(n){case"Browser":t=Ny(qt());break;case"Worker":t=`${Ny(qt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cs}/${s}`}/**
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
 */class q1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,p)=>{try{const g=e(l);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function K1(n,e={}){return _r(n,"GET","/v2/passwordPolicy",Kr(n,e))}/**
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
 */const G1=6;class Q1{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:G1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class X1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xy(this),this.idTokenSubscription=new xy(this),this.beforeStateQueue=new q1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Br(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await A_(this,{idToken:e}),s=await jr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(zr(this));const t=e?pt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(zr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(zr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K1(this),t=new Q1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await $1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Br(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Br(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(p,this,"internal-error"),p.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&R1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gr(n){return pt(n)}class xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fS(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y1(n){Kc=n}function U_(n){return Kc.loadJS(n)}function J1(){return Kc.recaptchaEnterpriseScript}function Z1(){return Kc.gapiScript}function eR(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const tR="recaptcha-enterprise",nR="NO_RECAPTCHA";class rR{constructor(e){this.type=tR,this.auth=Gr(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,p)=>{b1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new L1(g);return l.tenantId==null?l._agentRecaptchaConfig=v:l._tenantRecaptchaConfigs[l.tenantId]=v,h(v.siteKey)}}).catch(g=>{p(g)})})}function o(l,h,p){const g=window.grecaptcha;Ay(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(v=>{h(v)}).catch(()=>{h(nR)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{s(this.auth).then(p=>{if(!t&&Ay(window.grecaptcha))o(p,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=J1();g.length!==0&&(g+=p),U_(g).then(()=>{o(p,l,h)}).catch(v=>{h(v)})}}).catch(p=>{h(p)})})}}async function Oy(n,e,t,s=!1){const o=new rR(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Ec(n,e,t,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Oy(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await Oy(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(l)})}/**
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
 */function iR(n,e){const t=qc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(yc(l,e??{}))return o;Dn(o,"already-initialized")}return t.initialize({options:e})}function sR(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Br);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function oR(n,e,t){const s=Gr(n);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=F_(e),{host:h,port:p}=aR(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${l}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),lR()}function F_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aR(n){const e=F_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Dy(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Dy(h)}}}function Dy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class np{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fr("not implemented")}_getIdTokenResponse(e){return Fr("not implemented")}_linkToIdToken(e,t){return Fr("not implemented")}_getReauthenticationResolver(e){return Fr("not implemented")}}async function uR(n,e){return _r(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cR(n,e){return wl(n,"POST","/v1/accounts:signInWithPassword",Kr(n,e))}async function hR(n,e){return _r(n,"POST","/v1/accounts:sendOobCode",Kr(n,e))}async function fR(n,e){return hR(n,e)}/**
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
 */async function dR(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}async function pR(n,e){return wl(n,"POST","/v1/accounts:signInWithEmailLink",Kr(n,e))}/**
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
 */class ll extends np{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ll(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ll(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ec(e,t,"signInWithPassword",cR);case"emailLink":return dR(e,{email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ec(e,s,"signUpPassword",uR);case"emailLink":return pR(e,{idToken:t,email:this._email,oobCode:this._password});default:Dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ko(n,e){return wl(n,"POST","/v1/accounts:signInWithIdp",Kr(n,e))}/**
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
 */const mR="http://localhost";class Ts extends np{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Dn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Xd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new Ts(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ko(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ko(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ko(e,t)}buildRequest(){const e={requestUri:mR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vl(t)}return e}}/**
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
 */function gR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yR(n){const e=Ka(Ga(n)).link,t=e?Ka(Ga(e)).deep_link_id:null,s=Ka(Ga(n)).deep_link_id;return(s?Ka(Ga(s)).link:null)||s||t||e||n}class rp{constructor(e){var t,s,o,l,h,p;const g=Ka(Ga(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,T=gR((o=g.mode)!==null&&o!==void 0?o:null);_e(v&&E&&T,"argument-error"),this.apiKey=v,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=yR(e);try{return new rp(t)}catch{return null}}}/**
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
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,t){return ll._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rp.parseLink(t);return _e(s,"argument-error"),ll._fromEmailAndCode(e,s.code,s.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ip{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class El extends ip{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ti extends El{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ti.PROVIDER_ID="facebook.com";/**
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
 */class Ii extends El{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ii.credential(t,s)}catch{return null}}}Ii.GOOGLE_SIGN_IN_METHOD="google.com";Ii.PROVIDER_ID="google.com";/**
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
 */class Ur extends El{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
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
 */class Si extends El{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Si.credential(t,s)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
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
 */async function vR(n,e){return wl(n,"POST","/v1/accounts:signUp",Kr(n,e))}/**
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
 */class Is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await jr._fromIdTokenResponse(e,s,o),h=Ly(s);return new Is({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Ly(s);return new Is({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Ly(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Tc extends un{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Tc(e,t,s,o)}}function j_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,s):l})}async function _R(n,e,t=!1){const s=await bo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Is._forOperation(n,"link",s)}/**
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
 */async function wR(n,e,t=!1){const{auth:s}=n;if(Yn(s.app))return Promise.reject(zr(s));const o="reauthenticate";try{const l=await bo(n,j_(s,o,e,n),t);_e(l.idToken,s,"internal-error");const h=ep(l.idToken);_e(h,s,"internal-error");const{sub:p}=h;return _e(n.uid===p,s,"user-mismatch"),Is._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Dn(s,"user-mismatch"),l}}/**
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
 */async function B_(n,e,t=!1){if(Yn(n.app))return Promise.reject(zr(n));const s="signIn",o=await j_(n,s,e),l=await Is._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function ER(n,e){return B_(Gr(n),e)}/**
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
 */async function z_(n){const e=Gr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $_(n,e,t){const s=Gr(n);await Ec(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",fR)}async function TR(n,e,t){if(Yn(n.app))return Promise.reject(zr(n));const s=Gr(n),h=await Ec(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&z_(n),g}),p=await Is._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function IR(n,e,t){return Yn(n.app)?Promise.reject(zr(n)):ER(pt(n),Ho.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&z_(n),s})}/**
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
 */async function SR(n,e){return _r(n,"POST","/v1/accounts:update",e)}/**
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
 */async function RR(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=pt(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await bo(s,SR(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:g})=>g==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function AR(n,e,t,s){return pt(n).onIdTokenChanged(e,t,s)}function PR(n,e,t){return pt(n).beforeAuthStateChanged(e,t)}const Ic="__sak";/**
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
 */class H_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kR=1e3,CR=10;class W_ extends H_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=M_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);W1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,CR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},kR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}W_.type="LOCAL";const NR=W_;/**
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
 */class q_ extends H_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}q_.type="SESSION";const K_=q_;/**
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
 */function xR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Gc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Gc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async v=>v(t.origin,l)),g=await xR(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gc.receivers=[];/**
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
 */function sp(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class OR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((p,g)=>{const v=sp("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const k=T;if(k.data.eventId===v)switch(k.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),p(k.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function pr(){return window}function DR(n){pr().location.href=n}/**
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
 */function G_(){return typeof pr().WorkerGlobalScope<"u"&&typeof pr().importScripts=="function"}async function LR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MR(){return G_()?self:null}/**
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
 */const Q_="firebaseLocalStorageDb",VR=1,Sc="firebaseLocalStorage",X_="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qc(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function UR(){const n=indexedDB.deleteDatabase(Q_);return new Tl(n).toPromise()}function Td(){const n=indexedDB.open(Q_,VR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Sc,{keyPath:X_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Sc)?e(s):(s.close(),await UR(),e(await Td()))})})}async function by(n,e,t){const s=Qc(n,!0).put({[X_]:e,value:t});return new Tl(s).toPromise()}async function FR(n,e){const t=Qc(n,!1).get(e),s=await new Tl(t).toPromise();return s===void 0?null:s.value}function My(n,e){const t=Qc(n,!0).delete(e);return new Tl(t).toPromise()}const jR=800,BR=3;class Y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>BR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gc._getInstance(MR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await LR(),!this.activeServiceWorker)return;this.sender=new OR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await by(e,Ic,"1"),await My(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>by(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>FR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>My(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Qc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y_.type="LOCAL";const zR=Y_;new _l(3e4,6e4);/**
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
 */function J_(n,e){return e?Br(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class op extends np{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $R(n){return B_(n.auth,new op(n),n.bypassAuthState)}function HR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),wR(t,new op(n),n.bypassAuthState)}async function WR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),_R(t,new op(n),n.bypassAuthState)}/**
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
 */class Z_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $R;case"linkViaPopup":case"linkViaRedirect":return WR;case"reauthViaPopup":case"reauthViaRedirect":return HR;default:Dn(this.auth,"internal-error")}}resolve(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qR=new _l(2e3,1e4);async function KR(n,e,t){if(Yn(n.app))return Promise.reject(Zn(n,"operation-not-supported-in-this-environment"));const s=Gr(n);A1(n,e,ip);const o=J_(s,t);return new ps(s,"signInViaPopup",e,o).executeNotNull()}class ps extends Z_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,ps.currentPopupAction&&ps.currentPopupAction.cancel(),ps.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Hr(this.filter.length===1,"Popup operations only handle one event");const e=sp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ps.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qR.get())};e()}}ps.currentPopupAction=null;/**
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
 */const GR="pendingRedirect",sc=new Map;class QR extends Z_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=sc.get(this.auth._key());if(!e){try{const s=await XR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}sc.set(this.auth._key(),e)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XR(n,e){const t=ZR(e),s=JR(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function YR(n,e){sc.set(n._key(),e)}function JR(n){return Br(n._redirectPersistence)}function ZR(n){return ic(GR,n.config.apiKey,n.name)}async function eA(n,e,t=!1){if(Yn(n.app))return Promise.reject(zr(n));const s=Gr(n),o=J_(s,e),h=await new QR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const tA=10*60*1e3;class nA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!e0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vy(e))}saveEventToCache(e){this.cachedEventUids.add(Vy(e)),this.lastProcessedEventTime=Date.now()}}function Vy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function e0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e0(n);default:return!1}}/**
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
 */async function iA(n,e={}){return _r(n,"GET","/v1/projects",e)}/**
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
 */const sA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oA=/^https?/;async function aA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await iA(n);for(const t of e)try{if(lA(t))return}catch{}Dn(n,"unauthorized-domain")}function lA(n){const e=wd(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!oA.test(t))return!1;if(sA.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const uA=new _l(3e4,6e4);function Uy(){const n=pr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function cA(n){return new Promise((e,t)=>{var s,o,l;function h(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),t(Zn(n,"network-request-failed"))},timeout:uA.get()})}if(!((o=(s=pr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=pr().gapi)===null||l===void 0)&&l.load)h();else{const p=eR("iframefcb");return pr()[p]=()=>{gapi.load?h():t(Zn(n,"network-request-failed"))},U_(`${Z1()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw oc=null,e})}let oc=null;function hA(n){return oc=oc||cA(n),oc}/**
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
 */const fA=new _l(5e3,15e3),dA="__/auth/iframe",pA="emulator/auth/iframe",mA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zd(e,pA):`https://${n.config.authDomain}/${dA}`,s={apiKey:e.apiKey,appName:n.name,v:Cs},o=gA.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${vl(s).slice(1)}`}async function vA(n){const e=await hA(n),t=pr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:yA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mA,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(n,"network-request-failed"),p=pr().setTimeout(()=>{l(h)},fA.get());function g(){pr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
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
 */const _A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wA=500,EA=600,TA="_blank",IA="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SA(n,e,t,s=wA,o=EA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},_A),{width:s.toString(),height:o.toString(),top:l,left:h}),v=qt().toLowerCase();t&&(p=x_(v)?TA:t),C_(v)&&(e=e||IA,g.scrollbars="yes");const E=Object.entries(g).reduce((k,[F,j])=>`${k}${F}=${j},`,"");if(H1(v)&&p!=="_self")return RA(e||"",p),new Fy(null);const T=window.open(e||"",p,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new Fy(T)}function RA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const AA="__/auth/handler",PA="emulator/auth/handler",kA=encodeURIComponent("fac");async function jy(n,e,t,s,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Cs,eventId:o};if(e instanceof ip){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",hS(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof El){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await n._getAppCheckToken(),v=g?`#${kA}=${encodeURIComponent(g)}`:"";return`${CA(n)}?${vl(p).slice(1)}${v}`}function CA({config:n}){return n.emulator?Zd(n,PA):`https://${n.authDomain}/${AA}`}/**
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
 */const Xf="webStorageSupport";class NA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=K_,this._completeRedirectFn=eA,this._overrideRedirectResult=YR}async _openPopup(e,t,s,o){var l;Hr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await jy(e,t,s,wd(),o);return SA(e,h,sp())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await jy(e,t,s,wd(),o);return DR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Hr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await vA(e),s=new nA(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xf,{type:Xf},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Xf];h!==void 0&&t(!!h),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return M_()||N_()||tp()}}const xA=NA;var By="@firebase/auth",zy="1.7.9";/**
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
 */class OA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function DA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LA(n){Es(new Oi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(n)},v=new X1(s,o,l,g);return sR(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Es(new Oi("auth-internal",e=>{const t=Gr(e.getProvider("auth").getImmediate());return(s=>new OA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(By,zy,DA(n)),dr(By,zy,"esm2017")}/**
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
 */const bA=5*60,MA=p_("authIdTokenMaxAge")||bA;let $y=null;const VA=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>MA)return;const o=t==null?void 0:t.token;$y!==o&&($y=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function UA(n=Qd()){const e=qc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iR(n,{popupRedirectResolver:xA,persistence:[zR,NR,K_]}),s=p_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=VA(l.toString());PR(t,h,()=>h(t.currentUser)),AR(t,p=>h(p))}}const o=h_("auth");return o&&oR(t,`http://${o}`),t}function FA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Y1({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=Zn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",FA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LA("Browser");var Hy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var t0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,I){function A(){}A.prototype=I.prototype,P.D=I.prototype,P.prototype=new A,P.prototype.constructor=P,P.C=function(N,O,L){for(var R=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)R[Xe-2]=arguments[Xe];return I.prototype[O].apply(N,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,I,A){A||(A=0);var N=Array(16);if(typeof I=="string")for(var O=0;16>O;++O)N[O]=I.charCodeAt(A++)|I.charCodeAt(A++)<<8|I.charCodeAt(A++)<<16|I.charCodeAt(A++)<<24;else for(O=0;16>O;++O)N[O]=I[A++]|I[A++]<<8|I[A++]<<16|I[A++]<<24;I=P.g[0],A=P.g[1],O=P.g[2];var L=P.g[3],R=I+(L^A&(O^L))+N[0]+3614090360&4294967295;I=A+(R<<7&4294967295|R>>>25),R=L+(O^I&(A^O))+N[1]+3905402710&4294967295,L=I+(R<<12&4294967295|R>>>20),R=O+(A^L&(I^A))+N[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(I^O&(L^I))+N[3]+3250441966&4294967295,A=O+(R<<22&4294967295|R>>>10),R=I+(L^A&(O^L))+N[4]+4118548399&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(O^I&(A^O))+N[5]+1200080426&4294967295,L=I+(R<<12&4294967295|R>>>20),R=O+(A^L&(I^A))+N[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(I^O&(L^I))+N[7]+4249261313&4294967295,A=O+(R<<22&4294967295|R>>>10),R=I+(L^A&(O^L))+N[8]+1770035416&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(O^I&(A^O))+N[9]+2336552879&4294967295,L=I+(R<<12&4294967295|R>>>20),R=O+(A^L&(I^A))+N[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(I^O&(L^I))+N[11]+2304563134&4294967295,A=O+(R<<22&4294967295|R>>>10),R=I+(L^A&(O^L))+N[12]+1804603682&4294967295,I=A+(R<<7&4294967295|R>>>25),R=L+(O^I&(A^O))+N[13]+4254626195&4294967295,L=I+(R<<12&4294967295|R>>>20),R=O+(A^L&(I^A))+N[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=A+(I^O&(L^I))+N[15]+1236535329&4294967295,A=O+(R<<22&4294967295|R>>>10),R=I+(O^L&(A^O))+N[1]+4129170786&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(I^A))+N[6]+3225465664&4294967295,L=I+(R<<9&4294967295|R>>>23),R=O+(I^A&(L^I))+N[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(O^L))+N[0]+3921069994&4294967295,A=O+(R<<20&4294967295|R>>>12),R=I+(O^L&(A^O))+N[5]+3593408605&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(I^A))+N[10]+38016083&4294967295,L=I+(R<<9&4294967295|R>>>23),R=O+(I^A&(L^I))+N[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(O^L))+N[4]+3889429448&4294967295,A=O+(R<<20&4294967295|R>>>12),R=I+(O^L&(A^O))+N[9]+568446438&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(I^A))+N[14]+3275163606&4294967295,L=I+(R<<9&4294967295|R>>>23),R=O+(I^A&(L^I))+N[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(O^L))+N[8]+1163531501&4294967295,A=O+(R<<20&4294967295|R>>>12),R=I+(O^L&(A^O))+N[13]+2850285829&4294967295,I=A+(R<<5&4294967295|R>>>27),R=L+(A^O&(I^A))+N[2]+4243563512&4294967295,L=I+(R<<9&4294967295|R>>>23),R=O+(I^A&(L^I))+N[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=A+(L^I&(O^L))+N[12]+2368359562&4294967295,A=O+(R<<20&4294967295|R>>>12),R=I+(A^O^L)+N[5]+4294588738&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^O)+N[8]+2272392833&4294967295,L=I+(R<<11&4294967295|R>>>21),R=O+(L^I^A)+N[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^I)+N[14]+4259657740&4294967295,A=O+(R<<23&4294967295|R>>>9),R=I+(A^O^L)+N[1]+2763975236&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^O)+N[4]+1272893353&4294967295,L=I+(R<<11&4294967295|R>>>21),R=O+(L^I^A)+N[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^I)+N[10]+3200236656&4294967295,A=O+(R<<23&4294967295|R>>>9),R=I+(A^O^L)+N[13]+681279174&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^O)+N[0]+3936430074&4294967295,L=I+(R<<11&4294967295|R>>>21),R=O+(L^I^A)+N[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^I)+N[6]+76029189&4294967295,A=O+(R<<23&4294967295|R>>>9),R=I+(A^O^L)+N[9]+3654602809&4294967295,I=A+(R<<4&4294967295|R>>>28),R=L+(I^A^O)+N[12]+3873151461&4294967295,L=I+(R<<11&4294967295|R>>>21),R=O+(L^I^A)+N[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=A+(O^L^I)+N[2]+3299628645&4294967295,A=O+(R<<23&4294967295|R>>>9),R=I+(O^(A|~L))+N[0]+4096336452&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~O))+N[7]+1126891415&4294967295,L=I+(R<<10&4294967295|R>>>22),R=O+(I^(L|~A))+N[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~I))+N[5]+4237533241&4294967295,A=O+(R<<21&4294967295|R>>>11),R=I+(O^(A|~L))+N[12]+1700485571&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~O))+N[3]+2399980690&4294967295,L=I+(R<<10&4294967295|R>>>22),R=O+(I^(L|~A))+N[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~I))+N[1]+2240044497&4294967295,A=O+(R<<21&4294967295|R>>>11),R=I+(O^(A|~L))+N[8]+1873313359&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~O))+N[15]+4264355552&4294967295,L=I+(R<<10&4294967295|R>>>22),R=O+(I^(L|~A))+N[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~I))+N[13]+1309151649&4294967295,A=O+(R<<21&4294967295|R>>>11),R=I+(O^(A|~L))+N[4]+4149444226&4294967295,I=A+(R<<6&4294967295|R>>>26),R=L+(A^(I|~O))+N[11]+3174756917&4294967295,L=I+(R<<10&4294967295|R>>>22),R=O+(I^(L|~A))+N[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=A+(L^(O|~I))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+I&4294967295,P.g[1]=P.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,P.g[2]=P.g[2]+O&4294967295,P.g[3]=P.g[3]+L&4294967295}s.prototype.u=function(P,I){I===void 0&&(I=P.length);for(var A=I-this.blockSize,N=this.B,O=this.h,L=0;L<I;){if(O==0)for(;L<=A;)o(this,P,L),L+=this.blockSize;if(typeof P=="string"){for(;L<I;)if(N[O++]=P.charCodeAt(L++),O==this.blockSize){o(this,N),O=0;break}}else for(;L<I;)if(N[O++]=P[L++],O==this.blockSize){o(this,N),O=0;break}}this.h=O,this.o+=I},s.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var I=1;I<P.length-8;++I)P[I]=0;var A=8*this.o;for(I=P.length-8;I<P.length;++I)P[I]=A&255,A/=256;for(this.u(P),P=Array(16),I=A=0;4>I;++I)for(var N=0;32>N;N+=8)P[A++]=this.g[I]>>>N&255;return P};function l(P,I){var A=p;return Object.prototype.hasOwnProperty.call(A,P)?A[P]:A[P]=I(P)}function h(P,I){this.h=I;for(var A=[],N=!0,O=P.length-1;0<=O;O--){var L=P[O]|0;N&&L==I||(A[O]=L,N=!1)}this.g=A}var p={};function g(P){return-128<=P&&128>P?l(P,function(I){return new h([I|0],0>I?-1:0)}):new h([P|0],0>P?-1:0)}function v(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return V(v(-P));for(var I=[],A=1,N=0;P>=A;N++)I[N]=P/A|0,A*=4294967296;return new h(I,0)}function E(P,I){if(P.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(P.charAt(0)=="-")return V(E(P.substring(1),I));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=v(Math.pow(I,8)),N=T,O=0;O<P.length;O+=8){var L=Math.min(8,P.length-O),R=parseInt(P.substring(O,O+L),I);8>L?(L=v(Math.pow(I,L)),N=N.j(L).add(v(R))):(N=N.j(A),N=N.add(v(R)))}return N}var T=g(0),k=g(1),F=g(16777216);n=h.prototype,n.m=function(){if($(this))return-V(this).m();for(var P=0,I=1,A=0;A<this.g.length;A++){var N=this.i(A);P+=(0<=N?N:4294967296+N)*I,I*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(j(this))return"0";if($(this))return"-"+V(this).toString(P);for(var I=v(Math.pow(P,6)),A=this,N="";;){var O=te(A,I).g;A=W(A,O.j(I));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(P);if(A=O,j(A))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function j(P){if(P.h!=0)return!1;for(var I=0;I<P.g.length;I++)if(P.g[I]!=0)return!1;return!0}function $(P){return P.h==-1}n.l=function(P){return P=W(this,P),$(P)?-1:j(P)?0:1};function V(P){for(var I=P.g.length,A=[],N=0;N<I;N++)A[N]=~P.g[N];return new h(A,~P.h).add(k)}n.abs=function(){return $(this)?V(this):this},n.add=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0,O=0;O<=I;O++){var L=N+(this.i(O)&65535)+(P.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(P.i(O)>>>16);N=R>>>16,L&=65535,R&=65535,A[O]=R<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function W(P,I){return P.add(V(I))}n.j=function(P){if(j(this)||j(P))return T;if($(this))return $(P)?V(this).j(V(P)):V(V(this).j(P));if($(P))return V(this.j(V(P)));if(0>this.l(F)&&0>P.l(F))return v(this.m()*P.m());for(var I=this.g.length+P.g.length,A=[],N=0;N<2*I;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<P.g.length;O++){var L=this.i(N)>>>16,R=this.i(N)&65535,Xe=P.i(O)>>>16,wt=P.i(O)&65535;A[2*N+2*O]+=R*wt,J(A,2*N+2*O),A[2*N+2*O+1]+=L*wt,J(A,2*N+2*O+1),A[2*N+2*O+1]+=R*Xe,J(A,2*N+2*O+1),A[2*N+2*O+2]+=L*Xe,J(A,2*N+2*O+2)}for(N=0;N<I;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=I;N<2*I;N++)A[N]=0;return new h(A,0)};function J(P,I){for(;(P[I]&65535)!=P[I];)P[I+1]+=P[I]>>>16,P[I]&=65535,I++}function X(P,I){this.g=P,this.h=I}function te(P,I){if(j(I))throw Error("division by zero");if(j(P))return new X(T,T);if($(P))return I=te(V(P),I),new X(V(I.g),V(I.h));if($(I))return I=te(P,V(I)),new X(V(I.g),I.h);if(30<P.g.length){if($(P)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var A=k,N=I;0>=N.l(P);)A=me(A),N=me(N);var O=ae(A,1),L=ae(N,1);for(N=ae(N,2),A=ae(A,2);!j(N);){var R=L.add(N);0>=R.l(P)&&(O=O.add(A),L=R),N=ae(N,1),A=ae(A,1)}return I=W(P,O.j(I)),new X(O,I)}for(O=T;0<=P.l(I);){for(A=Math.max(1,Math.floor(P.m()/I.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=v(A),R=L.j(I);$(R)||0<R.l(P);)A-=N,L=v(A),R=L.j(I);j(L)&&(L=k),O=O.add(L),P=W(P,R)}return new X(O,P)}n.A=function(P){return te(this,P).h},n.and=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)&P.i(N);return new h(A,this.h&P.h)},n.or=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)|P.i(N);return new h(A,this.h|P.h)},n.xor=function(P){for(var I=Math.max(this.g.length,P.g.length),A=[],N=0;N<I;N++)A[N]=this.i(N)^P.i(N);return new h(A,this.h^P.h)};function me(P){for(var I=P.g.length+1,A=[],N=0;N<I;N++)A[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(A,P.h)}function ae(P,I){var A=I>>5;I%=32;for(var N=P.g.length-A,O=[],L=0;L<N;L++)O[L]=0<I?P.i(L+A)>>>I|P.i(L+A+1)<<32-I:P.i(L+A);return new h(O,P.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,t0=h}).apply(typeof Hy<"u"?Hy:typeof self<"u"?self:typeof window<"u"?window:{});var Wu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var n0,Qa,r0,ac,Id,i0,s0,o0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,y){return u==Array.prototype||u==Object.prototype||(u[d]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Wu=="object"&&Wu];for(var d=0;d<u.length;++d){var y=u[d];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,d){if(d)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var b=u[w];if(!(b in y))break e;y=y[b]}u=u[u.length-1],w=y[u],d=d(w),d!=w&&d!=null&&e(y,u,{configurable:!0,writable:!0,value:d})}}function l(u,d){u instanceof String&&(u+="");var y=0,w=!1,b={next:function(){if(!w&&y<u.length){var z=y++;return{value:d(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(d,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function v(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function E(u,d,y){return u.call.apply(u.bind,arguments)}function T(u,d,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),u.apply(d,b)}}return function(){return u.apply(d,arguments)}}function k(u,d,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,k.apply(null,arguments)}function F(u,d){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function j(u,d){function y(){}y.prototype=d.prototype,u.aa=d.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,b,z){for(var ne=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)ne[Fe-2]=arguments[Fe];return d.prototype[b].apply(w,ne)}}function $(u){const d=u.length;if(0<d){const y=Array(d);for(let w=0;w<d;w++)y[w]=u[w];return y}return[]}function V(u,d){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const b=u.length||0,z=w.length||0;u.length=b+z;for(let ne=0;ne<z;ne++)u[b+ne]=w[ne]}else u.push(w)}}class W{constructor(d,y){this.i=d,this.j=y,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function J(u){return/^[\s\xa0]*$/.test(u)}function X(){var u=p.navigator;return u&&(u=u.userAgent)?u:""}function te(u){return te[" "](u),u}te[" "]=function(){};var me=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ae(u,d,y){for(const w in u)d.call(y,u[w],w,u)}function P(u,d){for(const y in u)d.call(void 0,u[y],y,u)}function I(u){const d={};for(const y in u)d[y]=u[y];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,d){let y,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(y in w)u[y]=w[y];for(let z=0;z<A.length;z++)y=A[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function O(u){var d=1;u=u.split(":");const y=[];for(;0<d&&u.length;)y.push(u.shift()),d--;return u.length&&y.push(u.join(":")),y}function L(u){p.setTimeout(()=>{throw u},0)}function R(){var u=ce;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Xe{constructor(){this.h=this.g=null}add(d,y){const w=wt.get();w.set(d,y),this.h?this.h.next=w:this.g=w,this.h=w}}var wt=new W(()=>new Et,u=>u.reset());class Et{constructor(){this.next=this.g=this.h=null}set(d,y){this.h=d,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,re=!1,ce=new Xe,ie=()=>{const u=p.Promise.resolve(void 0);Me=()=>{u.then(D)}};var D=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){L(y)}var d=wt;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}re=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};p.addEventListener("test",y,d),p.removeEventListener("test",y,d)}catch{}return u}();function Te(u,d){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(me){e:{try{te(d.nodeName);var b=!0;break e}catch{}b=!1}b||(d=null)}}else y=="mouseover"?d=u.fromElement:y=="mouseout"&&(d=u.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ie[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Te.aa.h.call(this)}}j(Te,de);var Ie={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Oe(u,d,y,w,b){this.listener=u,this.proxy=null,this.src=d,this.type=y,this.capture=!!w,this.ha=b,this.key=++Pe,this.da=this.fa=!1}function et(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Zt(u){this.src=u,this.g={},this.h=0}Zt.prototype.add=function(u,d,y,w,b){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var ne=Qr(u,d,w,b);return-1<ne?(d=u[ne],y||(d.fa=!1)):(d=new Oe(d,this.src,z,!!w,b),d.fa=y,u.push(d)),d};function Kt(u,d){var y=d.type;if(y in u.g){var w=u.g[y],b=Array.prototype.indexOf.call(w,d,void 0),z;(z=0<=b)&&Array.prototype.splice.call(w,b,1),z&&(et(d),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Qr(u,d,y,w){for(var b=0;b<u.length;++b){var z=u[b];if(!z.da&&z.listener==d&&z.capture==!!y&&z.ha==w)return b}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Ns={};function Go(u,d,y,w,b){if(Array.isArray(d)){for(var z=0;z<d.length;z++)Go(u,d[z],y,w,b);return null}return y=Yo(y),u&&u[ke]?u.K(d,y,v(w)?!!w.capture:!1,b):Qo(u,d,y,!1,w,b)}function Qo(u,d,y,w,b,z){if(!d)throw Error("Invalid event type");var ne=v(b)?!!b.capture:!!b,Fe=Os(u);if(Fe||(u[Ui]=Fe=new Zt(u)),y=Fe.add(d,y,w,ne,z),y.proxy)return y;if(w=Al(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Ee||(b=ne),b===void 0&&(b=!1),u.addEventListener(d.toString(),w,b);else if(u.attachEvent)u.attachEvent(Er(d.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Al(){function u(y){return d.call(u.src,u.listener,y)}const d=Xo;return u}function xs(u,d,y,w,b){if(Array.isArray(d))for(var z=0;z<d.length;z++)xs(u,d[z],y,w,b);else w=v(w)?!!w.capture:!!w,y=Yo(y),u&&u[ke]?(u=u.i,d=String(d).toString(),d in u.g&&(z=u.g[d],y=Qr(z,y,w,b),-1<y&&(et(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[d],u.h--)))):u&&(u=Os(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Qr(d,y,w,b)),(y=-1<u?d[u]:null)&&wr(y))}function wr(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[ke])Kt(d.i,u);else{var y=u.type,w=u.proxy;d.removeEventListener?d.removeEventListener(y,w,u.capture):d.detachEvent?d.detachEvent(Er(y),w):d.addListener&&d.removeListener&&d.removeListener(w),(y=Os(d))?(Kt(y,u),y.h==0&&(y.src=null,d[Ui]=null)):et(u)}}}function Er(u){return u in Ns?Ns[u]:Ns[u]="on"+u}function Xo(u,d){if(u.da)u=!0;else{d=new Te(d,this);var y=u.listener,w=u.ha||u.src;u.fa&&wr(u),u=y.call(w,d)}return u}function Os(u){return u=u[Ui],u instanceof Zt?u:null}var Ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(u){return typeof u=="function"?u:(u[Ds]||(u[Ds]=function(d){return u.handleEvent(d)}),u[Ds])}function mt(){H.call(this),this.i=new Zt(this),this.M=this,this.F=null}j(mt,H),mt.prototype[ke]=!0,mt.prototype.removeEventListener=function(u,d,y,w){xs(this,u,d,y,w)};function gt(u,d){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=d.type||d,typeof d=="string")d=new de(d,u);else if(d instanceof de)d.target=d.target||u;else{var b=d;d=new de(w,u),N(d,b)}if(b=!0,y)for(var z=y.length-1;0<=z;z--){var ne=d.g=y[z];b=Tr(ne,w,!0,d)&&b}if(ne=d.g=u,b=Tr(ne,w,!0,d)&&b,b=Tr(ne,w,!1,d)&&b,y)for(z=0;z<y.length;z++)ne=d.g=y[z],b=Tr(ne,w,!1,d)&&b}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var y=u.g[d],w=0;w<y.length;w++)et(y[w]);delete u.g[d],u.h--}}this.F=null},mt.prototype.K=function(u,d,y,w){return this.i.add(String(u),d,!1,y,w)},mt.prototype.L=function(u,d,y,w){return this.i.add(String(u),d,!0,y,w)};function Tr(u,d,y,w){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var b=!0,z=0;z<d.length;++z){var ne=d[z];if(ne&&!ne.da&&ne.capture==y){var Fe=ne.listener,yt=ne.ha||ne.src;ne.fa&&Kt(u.i,ne),b=Fe.call(yt,w)!==!1&&b}}return b&&!w.defaultPrevented}function Jo(u,d,y){if(typeof u=="function")y&&(u=k(u,y));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:p.setTimeout(u,d||0)}function Xr(u){u.g=Jo(()=>{u.g=null,u.i&&(u.i=!1,Xr(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class Fi extends H{constructor(d,y){super(),this.m=d,this.l=y,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Xr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ji(u){H.call(this),this.h=u,this.g={}}j(ji,H);var Zo=[];function ea(u){ae(u.g,function(d,y){this.g.hasOwnProperty(y)&&wr(d)},u),u.g={}}ji.prototype.N=function(){ji.aa.N.call(this),ea(this)},ji.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ta=p.JSON.stringify,na=p.JSON.parse,ra=class{stringify(u){return p.JSON.stringify(u,void 0)}parse(u){return p.JSON.parse(u,void 0)}};function Bi(){}Bi.prototype.h=null;function Ls(u){return u.h||(u.h=u.i())}function bs(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function er(){de.call(this,"d")}j(er,de);function Ms(){de.call(this,"c")}j(Ms,de);var tr={},ia=null;function zi(){return ia=ia||new mt}tr.La="serverreachability";function sa(u){de.call(this,tr.La,u)}j(sa,de);function Ir(u){const d=zi();gt(d,new sa(d))}tr.STAT_EVENT="statevent";function oa(u,d){de.call(this,tr.STAT_EVENT,u),this.stat=d}j(oa,de);function st(u){const d=zi();gt(d,new oa(d,u))}tr.Ma="timingevent";function Vs(u,d){de.call(this,tr.Ma,u),this.size=d}j(Vs,de);function Ln(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){u()},d)}function $i(){this.g=!0}$i.prototype.xa=function(){this.g=!1};function Hi(u,d,y,w,b,z){u.info(function(){if(u.g)if(z)for(var ne="",Fe=z.split("&"),yt=0;yt<Fe.length;yt++){var De=Fe[yt].split("=");if(1<De.length){var Tt=De[0];De=De[1];var ct=Tt.split("_");ne=2<=ct.length&&ct[1]=="type"?ne+(Tt+"="+De+"&"):ne+(Tt+"=redacted&")}}else ne=null;else ne=z;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+d+`
`+y+`
`+ne})}function Us(u,d,y,w,b,z,ne){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+d+`
`+y+`
`+z+" "+ne})}function bn(u,d,y,w){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+ah(u,y)+(w?" "+w:"")})}function aa(u,d){u.info(function(){return"TIMEOUT: "+d})}$i.prototype.info=function(){};function ah(u,d){if(!u.g)return d;if(!d)return null;try{var y=JSON.parse(d);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var z=b[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ne=1;ne<b.length;ne++)b[ne]=""}}}}return ta(y)}catch{return d}}var Fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Mn;function Wi(){}j(Wi,Bi),Wi.prototype.g=function(){return new XMLHttpRequest},Wi.prototype.i=function(){return{}},Mn=new Wi;function Vn(u,d,y,w){this.j=u,this.i=d,this.l=y,this.R=w||1,this.U=new ji(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var la={},js={};function Bs(u,d,y){u.L=1,u.v=ti(fn(d)),u.m=y,u.P=!0,ua(u,null)}function ua(u,d){u.F=Date.now(),ze(u),u.A=fn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),ri(y.i,"t",w),u.C=0,y=u.j.J,u.h=new kl,u.g=ql(u.j,y?d:null,!u.m),0<u.O&&(u.M=new Fi(k(u.Y,u,u.g),u.O)),d=u.U,y=u.g,w=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(Zo[0]=b.toString()),b=Zo);for(var z=0;z<b.length;z++){var ne=Go(y,b[z],w||d.handleEvent,!1,d.h||d);if(!ne)break;d.g[ne.key]=ne}d=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Ir(),Hi(u.i,u.u,u.A,u.l,u.R,u.m)}Vn.prototype.ca=function(u){u=u.target;const d=this.M;d&&tn(u)==3?d.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=tn(this.g);var d=this.g.Ba();const Rn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ma(this.g)))){this.J||ct!=4||d==7||(d==8||0>=Rn?Ir(3):Ir(2)),qi(this);var y=this.g.Z();this.X=y;t:if(Cl(this)){var w=ma(this.g);u="";var b=w.length,z=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){In(this),Yr(this);var ne="";break t}this.h.i=new p.TextDecoder}for(d=0;d<b;d++)this.h.h=!0,u+=this.h.i.decode(w[d],{stream:!(z&&d==b-1)});w.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,Us(this.i,this.u,this.A,this.l,this.R,ct,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,yt=this.g;if((Fe=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Fe)){var De=Fe;break t}}De=null}if(y=De)bn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ca(this,y);else{this.o=!1,this.s=3,st(12),In(this),Yr(this);break e}}if(this.P){y=!0;let pn;for(;!this.J&&this.C<ne.length;)if(pn=lh(this,ne),pn==js){ct==4&&(this.s=4,st(14),y=!1),bn(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==la){this.s=4,st(15),bn(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else bn(this.i,this.l,pn,null),ca(this,pn);if(Cl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||ne.length!=0||this.h.h||(this.s=1,st(16),y=!1),this.o=this.o&&y,!y)bn(this.i,this.l,ne,"[Invalid Chunked Response]"),In(this),Yr(this);else if(0<ne.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ya(Tt),Tt.M=!0,st(11))}}else bn(this.i,this.l,ne,null),ca(this,ne);ct==4&&In(this),this.o&&!this.J&&(ct==4?Js(this.j,this):(this.o=!1,ze(this)))}else Ks(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),In(this),Yr(this)}}}catch{}finally{}};function Cl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function lh(u,d){var y=u.C,w=d.indexOf(`
`,y);return w==-1?js:(y=Number(d.substring(y,w)),isNaN(y)?la:(w+=1,w+y>d.length?js:(d=d.slice(w,w+y),u.C=w+y,d)))}Vn.prototype.cancel=function(){this.J=!0,In(this)};function ze(u){u.S=Date.now()+u.I,Nl(u,u.I)}function Nl(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Ln(k(u.ba,u),d)}function qi(u){u.B&&(p.clearTimeout(u.B),u.B=null)}Vn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(aa(this.i,this.A),this.L!=2&&(Ir(),st(17)),In(this),this.s=2,Yr(this)):Nl(this,this.S-u)};function Yr(u){u.j.G==0||u.J||Js(u.j,u)}function In(u){qi(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,ea(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function ca(u,d){try{var y=u.j;if(y.G!=0&&(y.g==u||Gt(y.h,u))){if(!u.K&&Gt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ys(y),zn(y);else break e;Xs(y),st(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=Ln(k(y.Za,y),6e3));if(1>=Ol(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else kr(y,11)}else if((u.K||y.g==u)&&Ys(y),!J(d))for(b=y.Da.g.parse(d),d=0;d<b.length;d++){let De=b[d];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const Tt=De[3];Tt!=null&&(y.la=Tt,y.j.info("VER="+y.la));const ct=De[4];ct!=null&&(y.Aa=ct,y.j.info("SVER="+y.Aa));const Rn=De[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(w=1.5*Rn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const pn=u.g;if(pn){const Zi=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var z=w.h;z.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(ha(z,z.h),z.h=null))}if(w.D){const eo=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(w.ya=eo,je(w.I,w.D,eo))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ne=u;if(w.qa=Wl(w,w.J?w.ia:null,w.W),ne.K){Dl(w.h,ne);var Fe=ne,yt=w.L;yt&&(Fe.I=yt),Fe.B&&(qi(Fe),ze(Fe)),w.g=ne}else Ji(w);0<y.i.length&&sr(y)}else De[0]!="stop"&&De[0]!="close"||kr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?kr(y,7):xt(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}Ir(4)}catch{}}var xl=class{constructor(u,d){this.g=u,this.map=d}};function Ki(u){this.l=u||10,p.PerformanceNavigationTiming?(u=p.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ol(u){return u.h?1:u.g?u.g.size:0}function Gt(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function ha(u,d){u.g?u.g.add(d):u.h=d}function Dl(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}Ki.prototype.cancel=function(){if(this.i=Ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ll(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const y of u.g.values())d=d.concat(y.D);return d}return $(u.i)}function zs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var d=[],y=u.length,w=0;w<y;w++)d.push(u[w]);return d}d=[],y=0;for(w in u)d[y++]=u[w];return d}function $s(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var d=[];u=u.length;for(var y=0;y<u;y++)d.push(y);return d}d=[],y=0;for(const w in u)d[y++]=w;return d}}}function Jr(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var y=$s(u),w=zs(u),b=w.length,z=0;z<b;z++)d.call(void 0,w[z],y&&y[z],u)}var Gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uh(u,d){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),b=null;if(0<=w){var z=u[y].substring(0,w);b=u[y].substring(w+1)}else z=u[y];d(z,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Sr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Sr){this.h=u.h,Qi(this,u.j),this.o=u.o,this.g=u.g,Zr(this,u.s),this.l=u.l;var d=u.i,y=new nr;y.i=d.i,d.g&&(y.g=new Map(d.g),y.h=d.h),ei(this,y),this.m=u.m}else u&&(d=String(u).match(Gi))?(this.h=!1,Qi(this,d[1]||"",!0),this.o=Ce(d[2]||""),this.g=Ce(d[3]||"",!0),Zr(this,d[4]),this.l=Ce(d[5]||"",!0),ei(this,d[6]||"",!0),this.m=Ce(d[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Sr.prototype.toString=function(){var u=[],d=this.j;d&&u.push(ni(d,Hs,!0),":");var y=this.g;return(y||d=="file")&&(u.push("//"),(d=this.o)&&u.push(ni(d,Hs,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(ni(y,y.charAt(0)=="/"?Vl:Ml,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",ni(y,fa)),u.join("")};function fn(u){return new Sr(u)}function Qi(u,d,y){u.j=y?Ce(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Zr(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function ei(u,d,y){d instanceof nr?(u.i=d,rr(u.i,u.h)):(y||(d=ni(d,Ul)),u.i=new nr(d,u.h))}function je(u,d,y){u.i.set(d,y)}function ti(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ce(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ni(u,d,y){return typeof u=="string"?(u=encodeURI(u).replace(d,bl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function bl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Hs=/[#\/\?@]/g,Ml=/[#\?:]/g,Vl=/[#\?]/g,Ul=/[#\?@]/g,fa=/#/g;function nr(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&uh(u.i,function(d,y){u.add(decodeURIComponent(d.replace(/\+/g," ")),y)}))}n=nr.prototype,n.add=function(u,d){Nt(this),this.i=null,u=Sn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(d),this.h+=1,this};function Un(u,d){Nt(u),d=Sn(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Fn(u,d){return Nt(u),d=Sn(u,d),u.g.has(d)}n.forEach=function(u,d){Nt(this),this.g.forEach(function(y,w){y.forEach(function(b){u.call(d,b,w,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),y=[];for(let w=0;w<d.length;w++){const b=u[w];for(let z=0;z<b.length;z++)y.push(d[w])}return y},n.V=function(u){Nt(this);let d=[];if(typeof u=="string")Fn(this,u)&&(d=d.concat(this.g.get(Sn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)d=d.concat(u[y])}return d},n.set=function(u,d){return Nt(this),this.i=null,u=Sn(this,u),Fn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},n.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function ri(u,d,y){Un(u,d),0<y.length&&(u.i=null,u.g.set(Sn(u,d),$(y)),u.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var y=0;y<d.length;y++){var w=d[y];const z=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var b=z;ne[w]!==""&&(b+="="+encodeURIComponent(String(ne[w]))),u.push(b)}}return this.i=u.join("&")};function Sn(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function rr(u,d){d&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(y,w){var b=w.toLowerCase();w!=b&&(Un(this,w),ri(this,b,y))},u)),u.j=d}function ch(u,d){const y=new $i;if(p.Image){const w=new Image;w.onload=F(en,y,"TestLoadImage: loaded",!0,d,w),w.onerror=F(en,y,"TestLoadImage: error",!1,d,w),w.onabort=F(en,y,"TestLoadImage: abort",!1,d,w),w.ontimeout=F(en,y,"TestLoadImage: timeout",!1,d,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else d(!1)}function Fl(u,d){const y=new $i,w=new AbortController,b=setTimeout(()=>{w.abort(),en(y,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(b),z.ok?en(y,"TestPingServer: ok",!0,d):en(y,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),en(y,"TestPingServer: error",!1,d)})}function en(u,d,y,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(y)}catch{}}function hh(){this.g=new ra}function jl(u,d,y){const w=y||"";try{Jr(u,function(b,z){let ne=b;v(b)&&(ne=ta(b)),d.push(w+z+"="+encodeURIComponent(ne))})}catch(b){throw d.push(w+"type="+encodeURIComponent("_badmap")),b}}function Rr(u){this.l=u.Ub||null,this.j=u.eb||!1}j(Rr,Bi),Rr.prototype.g=function(){return new Xi(this.l,this.j)},Rr.prototype.i=function(u){return function(){return u}}({});function Xi(u,d){mt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}j(Xi,mt),n=Xi.prototype,n.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||p).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?jn(this):Bn(this),this.readyState==3&&Bl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,jn(this))},n.Qa=function(u){this.g&&(this.response=u,jn(this))},n.ga=function(){this.g&&jn(this)};function jn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Bn(u)}n.setRequestHeader=function(u,d){this.u.append(u,d)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var y=d.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=d.next();return u.join(`\r
`)};function Bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ar(u){let d="";return ae(u,function(y,w){d+=w,d+=":",d+=y,d+=`\r
`}),d}function ii(u,d,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=Ar(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):je(u,d,y))}function Ge(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}j(Ge,mt);var fh=/^https?$/i,da=["POST","PUT"];n=Ge.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,d,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Mn.g(),this.v=this.o?Ls(this.o):Ls(Mn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(z){Yi(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)y.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),b=p.FormData&&u instanceof p.FormData,!(0<=Array.prototype.indexOf.call(da,d,void 0))||w||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ne]of y)this.g.setRequestHeader(z,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){Yi(this,z)}};function Yi(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,Ws(u),dn(u)}function Ws(u){u.A||(u.A=!0,gt(u,"complete"),gt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,gt(this,"complete"),gt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?pa(this):this.bb())},n.bb=function(){pa(this)};function pa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||tn(u)!=4||u.Z()!=2)){if(u.u&&tn(u)==4)Jo(u.Ea,0,u);else if(gt(u,"readystatechange"),tn(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var y;if(!(y=d)){var w;if(w=ne===0){var b=String(u.D).match(Gi)[1]||null;!b&&p.self&&p.self.location&&(b=p.self.location.protocol.slice(0,-1)),w=!fh.test(b?b.toLowerCase():"")}y=w}if(y)gt(u,"complete"),gt(u,"success");else{u.m=6;try{var z=2<tn(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",Ws(u)}}finally{dn(u)}}}}function dn(u,d){if(u.g){qs(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||gt(u,"ready");try{y.onreadystatechange=w}catch{}}}function qs(u){u.I&&(p.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function tn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),na(d)}};function ma(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ks(u){const d={};u=(u.g&&2<=tn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(J(u[w]))continue;var y=O(u[w]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=d[b]||[];d[b]=z,z.push(y)}P(d,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(u,d,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||d}function ga(u){this.Aa=0,this.i=[],this.j=new $i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,u),this.cb=ir("retryDelaySeedMs",1e4,u),this.Wa=ir("forwardChannelMaxRetries",2,u),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ki(u&&u.concurrentRequestLimit),this.Da=new hh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ga.prototype,n.la=8,n.G=1,n.connect=function(u,d,y,w){st(0),this.W=u,this.H=d||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=Wl(this,null,this.W),sr(this)};function xt(u){if(Gs(u),u.G==3){var d=u.U++,y=fn(u.I);if(je(y,"SID",u.K),je(y,"RID",d),je(y,"TYPE","terminate"),Pr(u,y),d=new Vn(u,u.j,d),d.L=2,d.v=ti(fn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(d.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=d.v,y=!0),y||(d.g=ql(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ze(d)}Hl(u)}function zn(u){u.g&&(ya(u),u.g.cancel(),u.g=null)}function Gs(u){zn(u),u.u&&(p.clearTimeout(u.u),u.u=null),Ys(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&p.clearTimeout(u.s),u.s=null)}function sr(u){if(!hn(u.h)&&!u.s){u.s=!0;var d=u.Ga;Me||ie(),re||(Me(),re=!0),ce.add(d,u),u.B=0}}function dh(u,d){return Ol(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Ln(k(u.Ga,u,d),$l(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new Vn(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(b.H=z,z=null),this.P)e:{for(var d=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=y;break e}if(d===4096||y===this.i.length-1){d=y+1;break e}}d=1e3}else d=1e3;d=si(this,b,d),y=fn(this.I),je(y,"RID",u),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),Pr(this,y),z&&(this.O?d="headers="+encodeURIComponent(String(Ar(z)))+"&"+d:this.m&&ii(y,this.m,z)),ha(this.h,b),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",d),je(y,"SID","null"),b.T=!0,Bs(b,y,null)):Bs(b,y,d),this.G=2}}else this.G==3&&(u?Qs(this,u):this.i.length==0||hn(this.h)||Qs(this))};function Qs(u,d){var y;d?y=d.l:y=u.U++;const w=fn(u.I);je(w,"SID",u.K),je(w,"RID",y),je(w,"AID",u.T),Pr(u,w),u.m&&u.o&&ii(w,u.m,u.o),y=new Vn(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),d&&(u.i=d.D.concat(u.i)),d=si(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ha(u.h,y),Bs(y,w,d)}function Pr(u,d){u.H&&ae(u.H,function(y,w){je(d,w,y)}),u.l&&Jr({},function(y,w){je(d,w,y)})}function si(u,d,y){y=Math.min(u.i.length,y);var w=u.l?k(u.l.Na,u.l,u):null;e:{var b=u.i;let z=-1;for(;;){const ne=["count="+y];z==-1?0<y?(z=b[0].g,ne.push("ofs="+z)):z=0:ne.push("ofs="+z);let Fe=!0;for(let yt=0;yt<y;yt++){let De=b[yt].g;const Tt=b[yt].map;if(De-=z,0>De)z=Math.max(0,b[yt].g-100),Fe=!1;else try{jl(Tt,ne,"req"+De+"_")}catch{w&&w(Tt)}}if(Fe){w=ne.join("&");break e}}}return u=u.i.splice(0,y),d.D=u,w}function Ji(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Me||ie(),re||(Me(),re=!0),ce.add(d,u),u.v=0}}function Xs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Ln(k(u.Fa,u),$l(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,zl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Ln(k(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),zn(this),zl(this))};function ya(u){u.A!=null&&(p.clearTimeout(u.A),u.A=null)}function zl(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=fn(u.qa);je(d,"RID","rpc"),je(d,"SID",u.K),je(d,"AID",u.T),je(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(d,"TO",u.ja),je(d,"TYPE","xmlhttp"),Pr(u,d),u.m&&u.o&&ii(d,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=ti(fn(d)),y.m=null,y.P=!0,ua(y,u)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),Xs(this),st(19))};function Ys(u){u.C!=null&&(p.clearTimeout(u.C),u.C=null)}function Js(u,d){var y=null;if(u.g==d){Ys(u),ya(u),u.g=null;var w=2}else if(Gt(u.h,d))y=d.D,Dl(u.h,d),w=1;else return;if(u.G!=0){if(d.o)if(w==1){y=d.m?d.m.length:0,d=Date.now()-d.F;var b=u.B;w=zi(),gt(w,new Vs(w,y)),sr(u)}else Ji(u);else if(b=d.s,b==3||b==0&&0<d.X||!(w==1&&dh(u,d)||w==2&&Xs(u)))switch(y&&0<y.length&&(d=u.h,d.i=d.i.concat(y)),b){case 1:kr(u,5);break;case 4:kr(u,10);break;case 3:kr(u,6);break;default:kr(u,2)}}}function $l(u,d){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*d}function kr(u,d){if(u.j.info("Error code "+d),d==2){var y=k(u.fb,u),w=u.Xa;const b=!w;w=new Sr(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Qi(w,"https"),ti(w),b?ch(w.toString(),y):Fl(w.toString(),y)}else st(2);u.G=0,u.l&&u.l.sa(d),Hl(u),Gs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Hl(u){if(u.G=0,u.ka=[],u.l){const d=Ll(u.h);(d.length!=0||u.i.length!=0)&&(V(u.ka,d),V(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Wl(u,d,y){var w=y instanceof Sr?fn(y):new Sr(y);if(w.g!="")d&&(w.g=d+"."+w.g),Zr(w,w.s);else{var b=p.location;w=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;var z=new Sr(null);w&&Qi(z,w),d&&(z.g=d),b&&Zr(z,b),y&&(z.l=y),w=z}return y=u.D,d=u.ya,y&&d&&je(w,y,d),je(w,"VER",u.la),Pr(u,w),w}function ql(u,d,y){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ge(new Rr({eb:y})):new Ge(u.pa),d.Ha(u.J),d}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function va(){}n=va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zs(){}Zs.prototype.g=function(u,d){return new Qt(u,d)};function Qt(u,d){mt.call(this),this.g=new ga(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!J(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!J(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new or(this)}j(Qt,mt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){xt(this.g)},Qt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=ta(u),u=y);d.i.push(new xl(d.Ya++,u)),d.G==3&&sr(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Qt.aa.N.call(this)};function Kl(u){er.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const y in d){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}j(Kl,er);function Gl(){Ms.call(this),this.status=1}j(Gl,Ms);function or(u){this.g=u}j(or,va),or.prototype.ua=function(){gt(this.g,"a")},or.prototype.ta=function(u){gt(this.g,new Kl(u))},or.prototype.sa=function(u){gt(this.g,new Gl)},or.prototype.ra=function(){gt(this.g,"b")},Zs.prototype.createWebChannel=Zs.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,o0=function(){return new Zs},s0=function(){return zi()},i0=tr,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fs.NO_ERROR=0,Fs.TIMEOUT=8,Fs.HTTP_ERROR=6,ac=Fs,Pl.COMPLETE="complete",r0=Pl,bs.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Qa=bs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,n0=Ge}).apply(typeof Wu<"u"?Wu:typeof self<"u"?self:typeof window<"u"?window:{});const Wy="@firebase/firestore";/**
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
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
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
 */let Wo="10.14.0";/**
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
 */const Ss=new Kd("@firebase/firestore");function $a(){return Ss.logLevel}function pe(n,...e){if(Ss.logLevel<=Ne.DEBUG){const t=e.map(ap);Ss.debug(`Firestore (${Wo}): ${n}`,...t)}}function Rs(n,...e){if(Ss.logLevel<=Ne.ERROR){const t=e.map(ap);Ss.error(`Firestore (${Wo}): ${n}`,...t)}}function Rc(n,...e){if(Ss.logLevel<=Ne.WARN){const t=e.map(ap);Ss.warn(`Firestore (${Wo}): ${n}`,...t)}}function ap(n){if(typeof n=="string")return n;try{/**
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
 */function xe(n="Unexpected state"){const e=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: `+n;throw Rs(e),new Error(e)}function lt(n,e){n||xe()}function He(n,e){return n}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ve extends un{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class a0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class BA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zA{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){lt(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vs,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{pe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(pe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vs)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(pe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(lt(typeof s.accessToken=="string"),new a0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return lt(e===null||typeof e=="string"),new zt(e)}}class $A{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HA{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new $A(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){lt(this.o===void 0);const s=l=>{l.error!=null&&pe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,pe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{pe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):pe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(lt(typeof t.token=="string"),this.R=t.token,new WA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function KA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class l0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=KA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function Be(n,e){return n<e?-1:n>e?1:0}function Mo(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
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
 */class Ct{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ve(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ve(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ve(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ve(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ct.fromMillis(Date.now())}static fromDate(e){return Ct.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Ct(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ze{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ze(e)}static min(){return new Ze(new Ct(0,0))}static max(){return new Ze(new Ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ul{constructor(e,t,s){t===void 0?t=0:t>e.length&&xe(),s===void 0?s=e.length-t:s>e.length-t&&xe(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class nt extends ul{construct(e,t,s){return new nt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ve(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new nt(t)}static emptyPath(){return new nt([])}}const GA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends ul{construct(e,t,s){return new Mt(e,t,s)}static isValidIdentifier(e){return GA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new ve(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ve(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ve(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(l(),o++)}if(l(),h)throw new ve(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Mt(t)}static emptyPath(){return new Mt([])}}/**
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
 */class Re{constructor(e){this.path=e}static fromPath(e){return new Re(nt.fromString(e))}static fromName(e){return new Re(nt.fromString(e).popFirst(5))}static empty(){return new Re(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Re(new nt(e.slice()))}}function QA(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Ze.fromTimestamp(s===1e9?new Ct(t+1,0):new Ct(t,s));return new Di(o,Re.empty(),e)}function XA(n){return new Di(n.readTime,n.key,-1)}class Di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Di(Ze.min(),Re.empty(),-1)}static max(){return new Di(Ze.max(),Re.empty(),-1)}}function YA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Re.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
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
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function u0(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==JA)throw n;pe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,s)=>{t(e)})}static reject(e){return new Q((t,s)=>{s(e)})}static waitFor(e){return new Q((t,s)=>{let o=0,l=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const s of e)t=t.next(o=>o?Q.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new Q((s,o)=>{const l=e.length,h=new Array(l);let p=0;for(let g=0;g<l;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++p,p===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new Q((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function eP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xc(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class c0{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}c0.oe=-1;function lp(n){return n==null}function Ac(n){return n===0&&1/n==-1/0}function tP(n){return typeof n=="number"&&Number.isInteger(n)&&!Ac(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function qy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qo(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function h0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class cn{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new cn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new cn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qu(this.root,e,this.comparator,!1)}getReverseIterator(){return new qu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qu(this.root,e,this.comparator,!0)}}class qu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Lt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();const e=this.left.check();if(e!==this.right.check())throw xe();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Wt{constructor(e){this.comparator=e,this.data=new cn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ky(this.data.getIterator())}getIteratorFrom(e){return new Ky(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Wt(this.comparator);return t.data=e,t}}class Ky{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wn{constructor(e){this.fields=e,e.sort(Mt.comparator)}static empty(){return new wn([])}unionWith(e){let t=new Wt(Mt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class nP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class yr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new nP("Invalid base64 string: "+l):l}}(e);return new yr(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new yr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}yr.EMPTY_BYTE_STRING=new yr("");const rP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function As(n){if(lt(!!n),typeof n=="string"){let e=0;const t=rP.exec(n);if(lt(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(n.seconds),nanos:bt(n.nanos)}}function bt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function cl(n){return typeof n=="string"?yr.fromBase64String(n):yr.fromUint8Array(n)}/**
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
 */function up(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function f0(n){const e=n.mapValue.fields.__previous_value__;return up(e)?f0(e):e}function Pc(n){const e=As(n.mapValue.fields.__local_write_time__.timestampValue);return new Ct(e.seconds,e.nanos)}/**
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
 */class iP{constructor(e,t,s,o,l,h,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=v}}class kc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new kc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ku={mapValue:{}};function Vo(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?up(n)?4:oP(n)?9007199254740991:sP(n)?10:11:xe()}function vr(n,e){if(n===e)return!0;const t=Vo(n);if(t!==Vo(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pc(n).isEqual(Pc(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=As(o.timestampValue),p=As(l.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return cl(o.bytesValue).isEqual(cl(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return bt(o.geoPointValue.latitude)===bt(l.geoPointValue.latitude)&&bt(o.geoPointValue.longitude)===bt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return bt(o.integerValue)===bt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=bt(o.doubleValue),p=bt(l.doubleValue);return h===p?Ac(h)===Ac(p):isNaN(h)&&isNaN(p)}return!1}(n,e);case 9:return Mo(n.arrayValue.values||[],e.arrayValue.values||[],vr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},p=l.mapValue.fields||{};if(qy(h)!==qy(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!vr(h[g],p[g])))return!1;return!0}(n,e);default:return xe()}}function hl(n,e){return(n.values||[]).find(t=>vr(t,e))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Vo(n),s=Vo(e);if(t!==s)return Be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(l,h){const p=bt(l.integerValue||l.doubleValue),g=bt(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(n,e);case 3:return Gy(n.timestampValue,e.timestampValue);case 4:return Gy(Pc(n),Pc(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(l,h){const p=cl(l),g=cl(h);return p.compareTo(g)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const p=l.split("/"),g=h.split("/");for(let v=0;v<p.length&&v<g.length;v++){const E=Be(p[v],g[v]);if(E!==0)return E}return Be(p.length,g.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const p=Be(bt(l.latitude),bt(h.latitude));return p!==0?p:Be(bt(l.longitude),bt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Qy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var p,g,v,E;const T=l.fields||{},k=h.fields||{},F=(p=T.value)===null||p===void 0?void 0:p.arrayValue,j=(g=k.value)===null||g===void 0?void 0:g.arrayValue,$=Be(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((E=j==null?void 0:j.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Qy(F,j)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Ku.mapValue&&h===Ku.mapValue)return 0;if(l===Ku.mapValue)return 1;if(h===Ku.mapValue)return-1;const p=l.fields||{},g=Object.keys(p),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const k=Be(g[T],E[T]);if(k!==0)return k;const F=Uo(p[g[T]],v[E[T]]);if(F!==0)return F}return Be(g.length,E.length)}(n.mapValue,e.mapValue);default:throw xe()}}function Gy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=As(n),s=As(e),o=Be(t.seconds,s.seconds);return o!==0?o:Be(t.nanos,s.nanos)}function Qy(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Uo(t[o],s[o]);if(l)return l}return Be(t.length,s.length)}function Fo(n){return Sd(n)}function Sd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=As(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return cl(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Re.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Sd(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Sd(t.fields[h])}`;return o+"}"}(n.mapValue):xe()}function Rd(n){return!!n&&"integerValue"in n}function cp(n){return!!n&&"arrayValue"in n}function lc(n){return!!n&&"mapValue"in n}function sP(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qo(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ja(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function oP(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _n{constructor(e){this.value=e}static empty(){return new _n({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!lc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=Mt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ja(h):o.push(p.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());lc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];lc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){qo(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new _n(Ja(this.value))}}function d0(n){const e=[];return qo(n.fields,(t,s)=>{const o=new Mt([t]);if(lc(s)){const l=d0(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new wn(e)}/**
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
 */class Qn{constructor(e,t,s,o,l,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Qn(e,0,Ze.min(),Ze.min(),Ze.min(),_n.empty(),0)}static newFoundDocument(e,t,s,o){return new Qn(e,1,t,Ze.min(),s,o,0)}static newNoDocument(e,t){return new Qn(e,2,t,Ze.min(),Ze.min(),_n.empty(),0)}static newUnknownDocument(e,t){return new Qn(e,3,t,Ze.min(),Ze.min(),_n.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_n.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_n.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(e,t){this.position=e,this.inclusive=t}}function Xy(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?s=Re.comparator(Re.fromName(h.referenceValue),t.key):s=Uo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Yy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!vr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function aP(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class p0{}class kt extends p0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new uP(e,t,s):t==="array-contains"?new fP(e,s):t==="in"?new dP(e,s):t==="not-in"?new pP(e,s):t==="array-contains-any"?new mP(e,s):new kt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new cP(e,s):new hP(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Vo(this.value)===Vo(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Li extends p0{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Li(e,t)}matches(e){return m0(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function m0(n){return n.op==="and"}function g0(n){return lP(n)&&m0(n)}function lP(n){for(const e of n.filters)if(e instanceof Li)return!1;return!0}function Ad(n){if(n instanceof kt)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(g0(n))return n.filters.map(e=>Ad(e)).join(",");{const e=n.filters.map(t=>Ad(t)).join(",");return`${n.op}(${e})`}}function y0(n,e){return n instanceof kt?function(s,o){return o instanceof kt&&s.op===o.op&&s.field.isEqual(o.field)&&vr(s.value,o.value)}(n,e):n instanceof Li?function(s,o){return o instanceof Li&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,p)=>l&&y0(h,o.filters[p]),!0):!1}(n,e):void xe()}function v0(n){return n instanceof kt?function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`}(n):n instanceof Li?function(t){return t.op.toString()+" {"+t.getFilters().map(v0).join(" ,")+"}"}(n):"Filter"}class uP extends kt{constructor(e,t,s){super(e,t,s),this.key=Re.fromName(s.referenceValue)}matches(e){const t=Re.comparator(e.key,this.key);return this.matchesComparison(t)}}class cP extends kt{constructor(e,t){super(e,"in",t),this.keys=_0("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class hP extends kt{constructor(e,t){super(e,"not-in",t),this.keys=_0("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function _0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Re.fromName(s.referenceValue))}class fP extends kt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return cp(t)&&hl(t.arrayValue,this.value)}}class dP extends kt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hl(this.value.arrayValue,t)}}class pP extends kt{constructor(e,t){super(e,"not-in",t)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hl(this.value.arrayValue,t)}}class mP extends kt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!cp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>hl(this.value.arrayValue,s))}}/**
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
 */class gP{constructor(e,t=null,s=[],o=[],l=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=p,this.ue=null}}function Jy(n,e=null,t=[],s=[],o=null,l=null,h=null){return new gP(n,e,t,s,o,l,h)}function hp(n){const e=He(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ad(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),lp(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Fo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Fo(s)).join(",")),e.ue=t}return e.ue}function fp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!aP(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!y0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yy(n.startAt,e.startAt)&&Yy(n.endAt,e.endAt)}/**
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
 */class Yc{constructor(e,t=null,s=[],o=[],l=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function yP(n,e,t,s,o,l,h,p){return new Yc(n,e,t,s,o,l,h,p)}function vP(n){return new Yc(n)}function Zy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _P(n){return n.collectionGroup!==null}function Za(n){const e=He(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Wt(Mt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Nc(l,s))}),t.has(Mt.keyField().canonicalString())||e.ce.push(new Nc(Mt.keyField(),s))}return e.ce}function _s(n){const e=He(n);return e.le||(e.le=wP(e,Za(n))),e.le}function wP(n,e){if(n.limitType==="F")return Jy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Nc(o.field,l)});const t=n.endAt?new Cc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Cc(n.startAt.position,n.startAt.inclusive):null;return Jy(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Pd(n,e,t){return new Yc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function w0(n,e){return fp(_s(n),_s(e))&&n.limitType===e.limitType}function E0(n){return`${hp(_s(n))}|lt:${n.limitType}`}function Ha(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>v0(o)).join(", ")}]`),lp(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Fo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Fo(o)).join(",")),`Target(${s})`}(_s(n))}; limitType=${n.limitType})`}function dp(n,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Re.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,o){for(const l of Za(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const v=Xy(h,p,g);return h.inclusive?v<=0:v<0}(s.startAt,Za(s),o)||s.endAt&&!function(h,p,g){const v=Xy(h,p,g);return h.inclusive?v>=0:v>0}(s.endAt,Za(s),o))}(n,e)}function EP(n){return(e,t)=>{let s=!1;for(const o of Za(n)){const l=TP(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function TP(n,e,t){const s=n.field.isKeyField()?Re.comparator(e.key,t.key):function(l,h,p){const g=h.data.field(l),v=p.data.field(l);return g!==null&&v!==null?Uo(g,v):xe()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return xe()}}/**
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
 */class Ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){qo(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return h0(this.inner)}size(){return this.innerSize}}/**
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
 */const IP=new cn(Re.comparator);function xc(){return IP}const T0=new cn(Re.comparator);function Gu(...n){let e=T0;for(const t of n)e=e.insert(t.key,t);return e}function I0(n){let e=T0;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ms(){return el()}function S0(){return el()}function el(){return new Ko(n=>n.toString(),(n,e)=>n.isEqual(e))}const SP=new cn(Re.comparator),RP=new Wt(Re.comparator);function $t(...n){let e=RP;for(const t of n)e=e.add(t);return e}const AP=new Wt(Be);function PP(){return AP}/**
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
 */function pp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ac(e)?"-0":e}}function R0(n){return{integerValue:""+n}}function kP(n,e){return tP(e)?R0(e):pp(n,e)}/**
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
 */class Jc{constructor(){this._=void 0}}function CP(n,e,t){return n instanceof Oc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&up(l)&&(l=f0(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof fl?P0(n,e):n instanceof dl?k0(n,e):function(o,l){const h=A0(o,l),p=ev(h)+ev(o.Pe);return Rd(h)&&Rd(o.Pe)?R0(p):pp(o.serializer,p)}(n,e)}function NP(n,e,t){return n instanceof fl?P0(n,e):n instanceof dl?k0(n,e):t}function A0(n,e){return n instanceof Dc?function(s){return Rd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Oc extends Jc{}class fl extends Jc{constructor(e){super(),this.elements=e}}function P0(n,e){const t=C0(e);for(const s of n.elements)t.some(o=>vr(o,s))||t.push(s);return{arrayValue:{values:t}}}class dl extends Jc{constructor(e){super(),this.elements=e}}function k0(n,e){let t=C0(e);for(const s of n.elements)t=t.filter(o=>!vr(o,s));return{arrayValue:{values:t}}}class Dc extends Jc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ev(n){return bt(n.integerValue||n.doubleValue)}function C0(n){return cp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xP(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof fl&&o instanceof fl||s instanceof dl&&o instanceof dl?Mo(s.elements,o.elements,vr):s instanceof Dc&&o instanceof Dc?vr(s.Pe,o.Pe):s instanceof Oc&&o instanceof Oc}(n.transform,e.transform)}class OP{constructor(e,t){this.version=e,this.transformResults=t}}class mr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mr}static exists(e){return new mr(void 0,e)}static updateTime(e){return new mr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Zc{}function N0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new O0(n.key,mr.none()):new Il(n.key,n.data,mr.none());{const t=n.data,s=_n.empty();let o=new Wt(Mt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Vi(n.key,s,new wn(o.toArray()),mr.none())}}function DP(n,e,t){n instanceof Il?function(o,l,h){const p=o.value.clone(),g=nv(o.fieldTransforms,l,h.transformResults);p.setAll(g),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):n instanceof Vi?function(o,l,h){if(!uc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const p=nv(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(x0(o)),g.setAll(p),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function tl(n,e,t,s){return n instanceof Il?function(l,h,p,g){if(!uc(l.precondition,h))return p;const v=l.value.clone(),E=rv(l.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(n,e,t,s):n instanceof Vi?function(l,h,p,g){if(!uc(l.precondition,h))return p;const v=rv(l.fieldTransforms,g,h),E=h.data;return E.setAll(x0(l)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,h,p){return uc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(n,e,t)}function LP(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=A0(s.transform,o||null);l!=null&&(t===null&&(t=_n.empty()),t.set(s.field,l))}return t||null}function tv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Mo(s,o,(l,h)=>xP(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Il extends Zc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Vi extends Zc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function x0(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function nv(n,e,t){const s=new Map;lt(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,p=e.data.field(l.field);s.set(l.field,NP(h,p,t[o]))}return s}function rv(n,e,t){const s=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);s.set(o.field,CP(l,h,e))}return s}class O0 extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bP extends Zc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class MP{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&DP(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=tl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=tl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=S0();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let p=this.applyToLocalView(h,l.mutatedFields);p=t.has(o.key)?null:p;const g=N0(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ze.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$t())}isEqual(e){return this.batchId===e.batchId&&Mo(this.mutations,e.mutations,(t,s)=>tv(t,s))&&Mo(this.baseMutations,e.baseMutations,(t,s)=>tv(t,s))}}class mp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){lt(e.mutations.length===s.length);let o=function(){return SP}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new mp(e,t,s,o)}}/**
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
 */class VP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ft,Le;function UP(n){switch(n){default:return xe();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function FP(n){if(n===void 0)return Rs("GRPC error has no .code"),Y.UNKNOWN;switch(n){case ft.OK:return Y.OK;case ft.CANCELLED:return Y.CANCELLED;case ft.UNKNOWN:return Y.UNKNOWN;case ft.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ft.INTERNAL:return Y.INTERNAL;case ft.UNAVAILABLE:return Y.UNAVAILABLE;case ft.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ft.NOT_FOUND:return Y.NOT_FOUND;case ft.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ft.ABORTED:return Y.ABORTED;case ft.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ft.DATA_LOSS:return Y.DATA_LOSS;default:return xe()}}(Le=ft||(ft={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new t0([4294967295,4294967295],0);class jP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function BP(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zP(n,e){return kd(n,e.toTimestamp())}function Co(n){return lt(!!n),Ze.fromTimestamp(function(t){const s=As(t);return new Ct(s.seconds,s.nanos)}(n))}function D0(n,e){return Cd(n,e).canonicalString()}function Cd(n,e){const t=function(o){return new nt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function $P(n){const e=nt.fromString(n);return lt(YP(e)),e}function Nd(n,e){return D0(n.databaseId,e.path)}function HP(n){const e=$P(n);return e.length===4?nt.emptyPath():qP(e)}function WP(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qP(n){return lt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function iv(n,e,t){return{name:Nd(n,e),fields:t.value.mapValue.fields}}function KP(n,e){let t;if(e instanceof Il)t={update:iv(n,e.key,e.value)};else if(e instanceof O0)t={delete:Nd(n,e.key)};else if(e instanceof Vi)t={update:iv(n,e.key,e.data),updateMask:XP(e.fieldMask)};else{if(!(e instanceof bP))return xe();t={verify:Nd(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const p=h.transform;if(p instanceof Oc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof fl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Dc)return{fieldPath:h.field.canonicalString(),increment:p.Pe};throw xe()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:zP(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:xe()}(n,e.precondition)),t}function GP(n,e){return n&&n.length>0?(lt(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?Co(o.updateTime):Co(l);return h.isEqual(Ze.min())&&(h=Co(l)),new OP(h,o.transformResults||[])}(t,e))):[]}function QP(n){let e=HP(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){lt(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const k=L0(T);return k instanceof Li&&g0(k)?k.getFilters():[k]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(k=>function(j){return new Nc(So(j.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(j.direction))}(k))}(t.orderBy));let p=null;t.limit&&(p=function(T){let k;return k=typeof T=="object"?T.value:T,lp(k)?null:k}(t.limit));let g=null;t.startAt&&(g=function(T){const k=!!T.before,F=T.values||[];return new Cc(F,k)}(t.startAt));let v=null;return t.endAt&&(v=function(T){const k=!T.before,F=T.values||[];return new Cc(F,k)}(t.endAt)),yP(e,o,h,l,p,"F",g,v)}function L0(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=So(t.unaryFilter.field);return kt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=So(t.unaryFilter.field);return kt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=So(t.unaryFilter.field);return kt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=So(t.unaryFilter.field);return kt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(n):n.fieldFilter!==void 0?function(t){return kt.create(So(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Li.create(t.compositeFilter.filters.map(s=>L0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return xe()}}(t.compositeFilter.op))}(n):xe()}function So(n){return Mt.fromServerFormat(n.fieldPath)}function XP(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function YP(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class JP{constructor(e){this.ct=e}}function ZP(n){const e=QP({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Pd(e,e.limit,"L"):e}/**
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
 */class ek{constructor(){this.un=new tk}addToCollectionParentIndex(e,t){return this.un.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Di.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Di.min())}updateCollectionGroup(e,t,s){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class tk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Wt(nt.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Wt(nt.comparator)).toArray()}}/**
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
 */class jo{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new jo(0)}static kn(){return new jo(-1)}}/**
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
 */class nk{constructor(){this.changes=new Ko(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Qn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Q.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class rk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ik{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&tl(s.mutation,o,wn.empty(),Ct.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,$t()).next(()=>s))}getLocalViewOfDocuments(e,t,s=$t()){const o=ms();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Gu();return l.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ms();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,$t()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let l=xc();const h=el(),p=function(){return el()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof Vi)?l=l.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),tl(E.mutation,v,E.mutation.getFieldMask(),Ct.now())):h.set(v.key,wn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var T;return p.set(v,new rk(E,(T=h.get(v))!==null&&T!==void 0?T:null))}),p))}recalculateAndSaveOverlays(e,t){const s=el();let o=new cn((h,p)=>h-p),l=$t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||wn.empty();E=p.applyToLocalView(v,E),s.set(g,E);const T=(o.get(p.batchId)||$t()).add(g);o=o.insert(p.batchId,T)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),v=g.key,E=g.value,T=S0();E.forEach(k=>{if(!l.has(k)){const F=N0(t.get(k),s.get(k));F!==null&&T.set(k,F),l=l.add(k)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,T))}return Q.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return Re.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_P(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):Q.resolve(ms());let p=-1,g=l;return h.next(v=>Q.forEach(v,(E,T)=>(p<T.largestBatchId&&(p=T.largestBatchId),l.get(E)?Q.resolve():this.remoteDocumentCache.getEntry(e,E).next(k=>{g=g.insert(E,k)}))).next(()=>this.populateOverlays(e,v,l)).next(()=>this.computeViews(e,g,v,$t())).next(E=>({batchId:p,changes:I0(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Re(t)).next(s=>{let o=Gu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Gu();return this.indexManager.getCollectionParents(e,l).next(p=>Q.forEach(p,g=>{const v=function(T,k){return new Yc(k,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((T,k)=>{h=h.insert(T,k)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Qn.newInvalidDocument(E)))});let p=Gu();return h.forEach((g,v)=>{const E=l.get(g);E!==void 0&&tl(E.mutation,v,wn.empty(),Ct.now()),dp(t,v)&&(p=p.insert(g,v))}),p})}}/**
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
 */class sk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Q.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Co(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:ZP(o.bundledQuery),readTime:Co(o.readTime)}}(t)),Q.resolve()}}/**
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
 */class ok{constructor(){this.overlays=new cn(Re.comparator),this.Ir=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ms();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.ht(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(s)),Q.resolve()}getOverlaysForCollection(e,t,s){const o=ms(),l=t.length+1,h=new Re(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new cn((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=l.get(v.largestBatchId);E===null&&(E=ms(),l=l.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const p=ms(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>p.set(v,E)),!(p.size()>=o)););return Q.resolve(p)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new VP(t,s));let l=this.Ir.get(t);l===void 0&&(l=$t(),this.Ir.set(t,l)),this.Ir.set(t,l.add(s.key))}}/**
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
 */class ak{constructor(){this.sessionToken=yr.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class gp{constructor(){this.Tr=new Wt(At.Er),this.dr=new Wt(At.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new At(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new At(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new Re(new nt([])),s=new At(t,e),o=new At(t,e+1),l=[];return this.dr.forEachInRange([s,o],h=>{this.Vr(h),l.push(h.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new Re(new nt([])),s=new At(t,e),o=new At(t,e+1);let l=$t();return this.dr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new At(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class At{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return Re.comparator(e.key,t.key)||Be(e.wr,t.wr)}static Ar(e,t){return Be(e.wr,t.wr)||Re.comparator(e.key,t.key)}}/**
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
 */class lk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Wt(At.Er)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new MP(l,t,s,o);this.mutationQueue.push(h);for(const p of o)this.br=this.br.add(new At(p.key,l)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return Q.resolve(h)}lookupMutationBatch(e,t){return Q.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new At(t,0),o=new At(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([s,o],h=>{const p=this.Dr(h.wr);l.push(p)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Wt(Be);return t.forEach(o=>{const l=new At(o,0),h=new At(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],p=>{s=s.add(p.wr)})}),Q.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;Re.isDocumentKey(l)||(l=l.child(""));const h=new At(new Re(l),0);let p=new Wt(Be);return this.br.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(p=p.add(g.wr)),!0)},h),Q.resolve(this.Cr(p))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){lt(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return Q.forEach(t.mutations,o=>{const l=new At(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new At(t,0),o=this.br.firstAfterOrEqual(s);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uk{constructor(e){this.Mr=e,this.docs=function(){return new cn(Re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Q.resolve(s?s.document.mutableCopy():Qn.newInvalidDocument(t))}getEntries(e,t){let s=xc();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Qn.newInvalidDocument(o))}),Q.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=xc();const h=t.path,p=new Re(h.child("")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||YA(XA(E),s)<=0||(o.has(E.key)||dp(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,s,o){xe()}Or(e,t){return Q.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new ck(this)}getSize(e){return Q.resolve(this.size)}}class ck extends nk{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),Q.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class hk{constructor(e){this.persistence=e,this.Nr=new Ko(t=>hp(t),fp),this.lastRemoteSnapshotVersion=Ze.min(),this.highestTargetId=0,this.Lr=0,this.Br=new gp,this.targetCount=0,this.kr=jo.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),Q.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Kn(t),Q.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Nr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return Q.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),Q.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return Q.resolve(s)}containsKey(e,t){return Q.resolve(this.Br.containsKey(t))}}/**
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
 */class fk{constructor(e,t){this.qr={},this.overlays={},this.Qr=new c0(0),this.Kr=!1,this.Kr=!0,this.$r=new ak,this.referenceDelegate=e(this),this.Ur=new hk(this),this.indexManager=new ek,this.remoteDocumentCache=function(o){return new uk(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new JP(t),this.Gr=new sk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new lk(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){pe("MemoryPersistence","Starting transaction:",e);const o=new dk(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return Q.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class dk extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class yp{constructor(e){this.persistence=e,this.Jr=new gp,this.Yr=null}static Zr(e){return new yp(e)}get Xr(){if(this.Yr)return this.Yr;throw xe()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),Q.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Xr,s=>{const o=Re.fromPath(s);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Ze.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return Q.or([()=>Q.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class vp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=$t(),o=$t();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new vp(e,t.fromCache,s,o)}}/**
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
 */class pk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sS()?8:eP(qt())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Yi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Zi(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new pk;return this.Xi(e,t,h).next(p=>{if(l.result=p,this.zi)return this.es(e,t,h,p.size)})}).next(()=>l.result)}es(e,t,s,o){return s.documentReadCount<this.ji?($a()<=Ne.DEBUG&&pe("QueryEngine","SDK will not create cache indexes for query:",Ha(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Q.resolve()):($a()<=Ne.DEBUG&&pe("QueryEngine","Query:",Ha(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?($a()<=Ne.DEBUG&&pe("QueryEngine","The SDK decides to create cache indexes for query:",Ha(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_s(t))):Q.resolve())}Yi(e,t){if(Zy(t))return Q.resolve(null);let s=_s(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Pd(t,null,"F"),s=_s(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=$t(...l);return this.Ji.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.ts(t,p);return this.ns(t,v,h,g.readTime)?this.Yi(e,Pd(t,null,"F")):this.rs(e,v,t,g)}))})))}Zi(e,t,s,o){return Zy(t)||o.isEqual(Ze.min())?Q.resolve(null):this.Ji.getDocuments(e,s).next(l=>{const h=this.ts(t,l);return this.ns(t,h,s,o)?Q.resolve(null):($a()<=Ne.DEBUG&&pe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ha(t)),this.rs(e,h,t,QA(o,-1)).next(p=>p))})}ts(e,t){let s=new Wt(EP(e));return t.forEach((o,l)=>{dp(e,l)&&(s=s.add(l))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,s){return $a()<=Ne.DEBUG&&pe("QueryEngine","Using full collection scan to execute query:",Ha(t)),this.Ji.getDocumentsMatchingQuery(e,t,Di.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
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
 */class gk{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new cn(Be),this._s=new Ko(l=>hp(l),fp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ik(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function yk(n,e,t,s){return new gk(n,e,t,s)}async function b0(n,e){const t=He(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],p=[];let g=$t();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of l){p.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({hs:v,removedBatchIds:h,addedBatchIds:p}))})})}function vk(n,e){const t=He(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(p,g,v,E){const T=v.batch,k=T.keys();let F=Q.resolve();return k.forEach(j=>{F=F.next(()=>E.getEntry(g,j)).next($=>{const V=v.docVersions.get(j);lt(V!==null),$.version.compareTo(V)<0&&(T.applyToRemoteDocument($,v),$.isValidDocument()&&($.setReadTime(v.commitVersion),E.addEntry($)))})}),F.next(()=>p.mutationQueue.removeMutationBatch(g,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=$t();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(g=g.add(p.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function _k(n){const e=He(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function wk(n,e){const t=He(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class sv{constructor(){this.activeTargetIds=PP()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this.so=new sv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new sv,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Tk{_o(e){}shutdown(){}}/**
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
 */class ov{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){pe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){pe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qu=null;function Yf(){return Qu===null?Qu=function(){return 268435456+Math.round(2147483648*Math.random())}():Qu++,"0x"+Qu.toString(16)}/**
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
 */const Ik={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Bt="WebChannelConnection";class Rk extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,s,o,l,h){const p=Yf(),g=this.xo(t,s.toUriEncodedString());pe("RestConnection",`Sending RPC '${t}' ${p}:`,g,o);const v={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(v,l,h),this.No(t,g,v,o).then(E=>(pe("RestConnection",`Received RPC '${t}' ${p}: `,E),E),E=>{throw Rc("RestConnection",`RPC '${t}' ${p} failed with error: `,E,"url: ",g,"request:",o),E})}Lo(t,s,o,l,h,p){return this.Mo(t,s,o,l,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}xo(t,s){const o=Ik[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const l=Yf();return new Promise((h,p)=>{const g=new n0;g.setWithCredentials(!0),g.listenOnce(r0.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ac.NO_ERROR:const E=g.getResponseJson();pe(Bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case ac.TIMEOUT:pe(Bt,`RPC '${e}' ${l} timed out`),p(new ve(Y.DEADLINE_EXCEEDED,"Request time out"));break;case ac.HTTP_ERROR:const T=g.getStatus();if(pe(Bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",g.getResponseText()),T>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const F=k==null?void 0:k.error;if(F&&F.status&&F.message){const j=function(V){const W=V.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(W)>=0?W:Y.UNKNOWN}(F.status);p(new ve(j,F.message))}else p(new ve(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ve(Y.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{pe(Bt,`RPC '${e}' ${l} completed.`)}});const v=JSON.stringify(o);pe(Bt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",v,s,15)})}Bo(e,t,s){const o=Yf(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=o0(),p=s0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Oo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");pe(Bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);let k=!1,F=!1;const j=new Sk({Io:V=>{F?pe(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(k||(pe(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),k=!0),pe(Bt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},To:()=>T.close()}),$=(V,W,J)=>{V.listen(W,X=>{try{J(X)}catch(te){setTimeout(()=>{throw te},0)}})};return $(T,Qa.EventType.OPEN,()=>{F||(pe(Bt,`RPC '${e}' stream ${o} transport opened.`),j.yo())}),$(T,Qa.EventType.CLOSE,()=>{F||(F=!0,pe(Bt,`RPC '${e}' stream ${o} transport closed`),j.So())}),$(T,Qa.EventType.ERROR,V=>{F||(F=!0,Rc(Bt,`RPC '${e}' stream ${o} transport errored:`,V),j.So(new ve(Y.UNAVAILABLE,"The operation could not be completed")))}),$(T,Qa.EventType.MESSAGE,V=>{var W;if(!F){const J=V.data[0];lt(!!J);const X=J,te=X.error||((W=X[0])===null||W===void 0?void 0:W.error);if(te){pe(Bt,`RPC '${e}' stream ${o} received error:`,te);const me=te.status;let ae=function(A){const N=ft[A];if(N!==void 0)return FP(N)}(me),P=te.message;ae===void 0&&(ae=Y.INTERNAL,P="Unknown error status: "+me+" with message "+te.message),F=!0,j.So(new ve(ae,P)),T.close()}else pe(Bt,`RPC '${e}' stream ${o} received:`,J),j.bo(J)}}),$(p,i0.STAT_EVENT,V=>{V.stat===Id.PROXY?pe(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===Id.NOPROXY&&pe(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{j.wo()},0),j}}function Jf(){return typeof document<"u"?document:null}/**
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
 */function eh(n){return new jP(n,!0)}/**
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
 */class M0{constructor(e,t,s=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&pe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ak{constructor(e,t,s,o,l,h,p,g){this.ui=e,this.Ho=s,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new M0(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Rs(t.toString()),Rs("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new ve(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return pe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(pe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pk extends Ak{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return lt(!!e.streamToken),this.lastStreamToken=e.streamToken,lt(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=GP(e.writeResults,e.commitTime),s=Co(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=WP(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>KP(this.serializer,s))};this.a_(t)}}/**
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
 */class kk extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new ve(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Mo(e,Cd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ve(Y.UNKNOWN,l.toString())})}Lo(e,t,s,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Lo(e,Cd(t,s),o,h,p,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ve(Y.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Ck{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rs(t),this.D_=!1):pe("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class Nk{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(h=>{s.enqueueAndForget(async()=>{Rl(this)&&(pe("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=He(g);v.L_.add(4),await Sl(v),v.q_.set("Unknown"),v.L_.delete(4),await th(v)}(this))})}),this.q_=new Ck(s,o)}}async function th(n){if(Rl(n))for(const e of n.B_)await e(!0)}async function Sl(n){for(const e of n.B_)await e(!1)}function Rl(n){return He(n).L_.size===0}async function V0(n,e,t){if(!Xc(e))throw e;n.L_.add(1),await Sl(n),n.q_.set("Offline"),t||(t=()=>_k(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{pe("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await th(n)})}function U0(n,e){return e().catch(t=>V0(n,t,e))}async function nh(n){const e=He(n),t=bi(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xk(e);)try{const o=await wk(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,Ok(e,o)}catch(o){await V0(e,o)}F0(e)&&j0(e)}function xk(n){return Rl(n)&&n.O_.length<10}function Ok(n,e){n.O_.push(e);const t=bi(n);t.r_()&&t.V_&&t.m_(e.mutations)}function F0(n){return Rl(n)&&!bi(n).n_()&&n.O_.length>0}function j0(n){bi(n).start()}async function Dk(n){bi(n).p_()}async function Lk(n){const e=bi(n);for(const t of n.O_)e.m_(t.mutations)}async function bk(n,e,t){const s=n.O_.shift(),o=mp.from(s,e,t);await U0(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await nh(n)}async function Mk(n,e){e&&bi(n).V_&&await async function(s,o){if(function(h){return UP(h)&&h!==Y.ABORTED}(o.code)){const l=s.O_.shift();bi(s).s_(),await U0(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await nh(s)}}(n,e),F0(n)&&j0(n)}async function av(n,e){const t=He(n);t.asyncQueue.verifyOperationInProgress(),pe("RemoteStore","RemoteStore received new credentials");const s=Rl(t);t.L_.add(3),await Sl(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await th(t)}async function Vk(n,e){const t=He(n);e?(t.L_.delete(2),await th(t)):e||(t.L_.add(2),await Sl(t),t.q_.set("Unknown"))}function bi(n){return n.U_||(n.U_=function(t,s,o){const l=He(t);return l.w_(),new Pk(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Dk.bind(null,n),mo:Mk.bind(null,n),f_:Lk.bind(null,n),g_:bk.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await nh(n)):(await n.U_.stop(),n.O_.length>0&&(pe("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class _p{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,p=new _p(e,t,h,o,l);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ve(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function B0(n,e){if(Rs("AsyncQueue",`${e}: ${n}`),Xc(n))return new ve(Y.UNAVAILABLE,`${e}: ${n}`);throw n}class Uk{constructor(){this.queries=lv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=He(t),l=o.queries;o.queries=lv(),l.forEach((h,p)=>{for(const g of p.j_)g.onError(s)})})(this,new ve(Y.ABORTED,"Firestore shutting down"))}}function lv(){return new Ko(n=>E0(n),w0)}function Fk(n){n.Y_.forEach(e=>{e.next()})}var uv,cv;(cv=uv||(uv={})).ea="default",cv.Cache="cache";class jk{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new Ko(p=>E0(p),w0),this.Ma=new Map,this.xa=new Set,this.Oa=new cn(Re.comparator),this.Na=new Map,this.La=new gp,this.Ba={},this.ka=new Map,this.qa=jo.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bk(n,e,t){const s=Wk(n);try{const o=await function(h,p){const g=He(h),v=Ct.now(),E=p.reduce((F,j)=>F.add(j.key),$t());let T,k;return g.persistence.runTransaction("Locally write mutations","readwrite",F=>{let j=xc(),$=$t();return g.cs.getEntries(F,E).next(V=>{j=V,j.forEach((W,J)=>{J.isValidDocument()||($=$.add(W))})}).next(()=>g.localDocuments.getOverlayedDocuments(F,j)).next(V=>{T=V;const W=[];for(const J of p){const X=LP(J,T.get(J.key).overlayedDocument);X!=null&&W.push(new Vi(J.key,X,d0(X.value.mapValue),mr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,v,W,p)}).next(V=>{k=V;const W=V.applyToLocalDocumentSet(T,$);return g.documentOverlayCache.saveOverlays(F,V.batchId,W)})}).then(()=>({batchId:k.batchId,changes:I0(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let v=h.Ba[h.currentUser.toKey()];v||(v=new cn(Be)),v=v.insert(p,g),h.Ba[h.currentUser.toKey()]=v}(s,o.batchId,t),await rh(s,o.changes),await nh(s.remoteStore)}catch(o){const l=B0(o,"Failed to persist write");t.reject(l)}}function hv(n,e,t){const s=He(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((l,h)=>{const p=h.view.Z_(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=He(h);g.onlineState=p;let v=!1;g.queries.forEach((E,T)=>{for(const k of T.j_)k.Z_(p)&&(v=!0)}),v&&Fk(g)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zk(n,e){const t=He(n),s=e.batch.batchId;try{const o=await vk(t.localStore,e);$0(t,s,null),z0(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await rh(t,o)}catch(o){await u0(o)}}async function $k(n,e,t){const s=He(n);try{const o=await function(h,p){const g=He(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return g.mutationQueue.lookupMutationBatch(v,p).next(T=>(lt(T!==null),E=T.keys(),g.mutationQueue.removeMutationBatch(v,T))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>g.localDocuments.getDocuments(v,E))})}(s.localStore,e);$0(s,e,t),z0(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await rh(s,o)}catch(o){await u0(o)}}function z0(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function $0(n,e,t){const s=He(n);let o=s.Ba[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}async function rh(n,e,t){const s=He(n),o=[],l=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((p,g)=>{h.push(s.Ka(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const T=v?!v.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(v){o.push(v);const T=vp.Wi(g.targetId,v);l.push(T)}}))}),await Promise.all(h),s.Ca.d_(o),await async function(g,v){const E=He(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(v,k=>Q.forEach(k.$i,F=>E.persistence.referenceDelegate.addReference(T,k.targetId,F)).next(()=>Q.forEach(k.Ui,F=>E.persistence.referenceDelegate.removeReference(T,k.targetId,F)))))}catch(T){if(!Xc(T))throw T;pe("LocalStore","Failed to update sequence numbers: "+T)}for(const T of v){const k=T.targetId;if(!T.fromCache){const F=E.os.get(k),j=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(j);E.os=E.os.insert(k,$)}}}(s.localStore,l))}async function Hk(n,e){const t=He(n);if(!t.currentUser.isEqual(e)){pe("SyncEngine","User change. New user:",e.toKey());const s=await b0(t.localStore,e);t.currentUser=e,function(l,h){l.ka.forEach(p=>{p.forEach(g=>{g.reject(new ve(Y.CANCELLED,h))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await rh(t,s.hs)}}function Wk(n){const e=He(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=zk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class Lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return yk(this.persistence,new mk,e.initialUser,this.serializer)}Ga(e){return new fk(yp.Zr,this.serializer)}Wa(e){return new Ek}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lc.provider={build:()=>new Lc};class xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>hv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await Vk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Uk}()}createDatastore(e){const t=eh(e.databaseInfo.databaseId),s=function(l){return new Rk(l)}(e.databaseInfo);return function(l,h,p,g){return new kk(l,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,p){return new Nk(s,o,l,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>hv(this.syncEngine,t,0),function(){return ov.D()?new ov:new Tk}())}createSyncEngine(e,t){return function(o,l,h,p,g,v,E){const T=new jk(o,l,h,p,g,v);return E&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=He(o);pe("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Sl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xd.provider={build:()=>new xd};/**
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
 */class qk{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=l0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{pe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(pe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=B0(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zf(n,e){n.asyncQueue.verifyOperationInProgress(),pe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await b0(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function fv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Kk(n);pe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>av(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>av(e.remoteStore,o)),n._onlineComponents=e}async function Kk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){pe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Rc("Error using user provided cache. Falling back to memory cache: "+t),await Zf(n,new Lc)}}else pe("FirestoreClient","Using default OfflineComponentProvider"),await Zf(n,new Lc);return n._offlineComponents}async function Gk(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(pe("FirestoreClient","Using user provided OnlineComponentProvider"),await fv(n,n._uninitializedComponentsProvider._online)):(pe("FirestoreClient","Using default OnlineComponentProvider"),await fv(n,new xd))),n._onlineComponents}function Qk(n){return Gk(n).then(e=>e.syncEngine)}/**
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
 */function H0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const dv=new Map;/**
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
 */function W0(n,e,t){if(!t)throw new ve(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Xk(n,e,t,s){if(e===!0&&s===!0)throw new ve(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pv(n){if(!Re.isDocumentKey(n))throw new ve(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mv(n){if(Re.isDocumentKey(n))throw new ve(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":xe()}function bc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ve(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wp(n);throw new ve(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class gv{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ve(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ve(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H0((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ve(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ih{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ve(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ve(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new jA;switch(s.type){case"firstParty":return new HA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ve(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=dv.get(t);s&&(pe("ComponentProvider","Removing Datastore"),dv.delete(t),s.terminate())}(this),Promise.resolve()}}function Yk(n,e,t,s={}){var o;const l=(n=bc(n,ih))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Rc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=zt.MOCK_USER;else{p=m_(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ve(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new zt(v)}n._authCredentials=new BA(new a0(p,g))}}/**
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
 */class Ep{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ep(this.firestore,e,this._query)}}class gr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gr(this.firestore,e,this._key)}}class xi extends Ep{constructor(e,t,s){super(e,t,vP(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gr(this.firestore,null,new Re(e))}withConverter(e){return new xi(this.firestore,e,this._path)}}function Jk(n,e,...t){if(n=pt(n),W0("collection","path",e),n instanceof ih){const s=nt.fromString(e,...t);return mv(s),new xi(n,null,s)}{if(!(n instanceof gr||n instanceof xi))throw new ve(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(nt.fromString(e,...t));return mv(s),new xi(n.firestore,null,s)}}function Zk(n,e,...t){if(n=pt(n),arguments.length===1&&(e=l0.newId()),W0("doc","path",e),n instanceof ih){const s=nt.fromString(e,...t);return pv(s),new gr(n,null,new Re(s))}{if(!(n instanceof gr||n instanceof xi))throw new ve(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(nt.fromString(e,...t));return pv(s),new gr(n.firestore,n instanceof xi?n.converter:null,new Re(s))}}/**
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
 */class yv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new M0(this,"async_queue_retry"),this.Vu=()=>{const s=Jf();s&&pe("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Jf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Jf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new vs;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xc(e))throw e;pe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw Rs("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=_p.createAndSchedule(this,e,t,s,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&xe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Tp extends ih{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yv(e),this._firestoreClient=void 0,await e}}}function eC(n,e){const t=typeof n=="object"?n:Qd(),s=typeof n=="string"?n:"(default)",o=qc(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=f_("firestore");l&&Yk(o,...l)}return o}function tC(n){if(n._terminated)throw new ve(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nC(n),n._firestoreClient}function nC(n){var e,t,s;const o=n._freezeSettings(),l=function(p,g,v,E){return new iP(p,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,H0(E.experimentalLongPollingOptions),E.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new qk(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(n._componentsProvider))}/**
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
 */class pl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pl(yr.fromBase64String(e))}catch(t){throw new ve(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pl(yr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ip{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ve(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Sp{constructor(e){this._methodName=e}}/**
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
 */class q0{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ve(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ve(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
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
 */class K0{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const rC=/^__.*__$/;class iC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}class G0{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Vi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Q0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}class Rp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Mc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Q0(this.Cu)&&rC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class sC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||eh(e)}Qu(e,t,s,o=!1){return new Rp({Cu:e,methodName:t,qu:s,path:Mt.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function X0(n){const e=n._freezeSettings(),t=eh(n._databaseId);return new sC(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oC(n,e,t,s,o,l={}){const h=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);Ap("Data must be an object, but it was:",h,s);const p=Y0(s,h);let g,v;if(l.merge)g=new wn(h.fieldMask),v=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const k=Od(e,T,t);if(!h.contains(k))throw new ve(Y.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);ew(E,k)||E.push(k)}g=new wn(E),v=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,v=h.fieldTransforms;return new iC(new _n(p),g,v)}class sh extends Sp{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sh}}function aC(n,e,t,s){const o=n.Qu(1,e,t);Ap("Data must be an object, but it was:",o,s);const l=[],h=_n.empty();qo(s,(g,v)=>{const E=Z0(e,g,t);v=pt(v);const T=o.Nu(E);if(v instanceof sh)l.push(E);else{const k=oh(v,T);k!=null&&(l.push(E),h.set(E,k))}});const p=new wn(l);return new G0(h,p,o.fieldTransforms)}function lC(n,e,t,s,o,l){const h=n.Qu(1,e,t),p=[Od(e,s,t)],g=[o];if(l.length%2!=0)throw new ve(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)p.push(Od(e,l[k])),g.push(l[k+1]);const v=[],E=_n.empty();for(let k=p.length-1;k>=0;--k)if(!ew(v,p[k])){const F=p[k];let j=g[k];j=pt(j);const $=h.Nu(F);if(j instanceof sh)v.push(F);else{const V=oh(j,$);V!=null&&(v.push(F),E.set(F,V))}}const T=new wn(v);return new G0(E,T,h.fieldTransforms)}function oh(n,e){if(J0(n=pt(n)))return Ap("Unsupported field value:",e,n),Y0(n,e);if(n instanceof Sp)return function(s,o){if(!Q0(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const p of s){let g=oh(p,o.Lu(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(n,e)}return function(s,o){if((s=pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return kP(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=Ct.fromDate(s);return{timestampValue:kd(o.serializer,l)}}if(s instanceof Ct){const l=new Ct(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kd(o.serializer,l)}}if(s instanceof q0)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof pl)return{bytesValue:BP(o.serializer,s._byteString)};if(s instanceof gr){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:D0(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof K0)return function(h,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Bu("VectorValues must only contain numeric values.");return pp(p.serializer,g)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${wp(s)}`)}(n,e)}function Y0(n,e){const t={};return h0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qo(n,(s,o)=>{const l=oh(o,e.Mu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function J0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ct||n instanceof q0||n instanceof pl||n instanceof gr||n instanceof Sp||n instanceof K0)}function Ap(n,e,t){if(!J0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=wp(t);throw s==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+s)}}function Od(n,e,t){if((e=pt(e))instanceof Ip)return e._internalPath;if(typeof e=="string")return Z0(n,e);throw Mc("Field path arguments must be of type string or ",n,!1,void 0,t)}const uC=new RegExp("[~\\*/\\[\\]]");function Z0(n,e,t){if(e.search(uC)>=0)throw Mc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ip(...e.split("."))._internalPath}catch{throw Mc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mc(n,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ve(Y.INVALID_ARGUMENT,p+n+g)}function ew(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */function cC(n,e,t){let s;return s=n?n.toFirestore(e):e,s}function hC(n,e,t,...s){n=bc(n,gr);const o=bc(n.firestore,Tp),l=X0(o);let h;return h=typeof(e=pt(e))=="string"||e instanceof Ip?lC(l,"updateDoc",n._key,e,t,s):aC(l,"updateDoc",n._key,e),tw(o,[h.toMutation(n._key,mr.exists(!0))])}function fC(n,e){const t=bc(n.firestore,Tp),s=Zk(n),o=cC(n.converter,e);return tw(t,[oC(X0(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,mr.exists(!1))]).then(()=>s)}function tw(n,e){return function(s,o){const l=new vs;return s.asyncQueue.enqueueAndForget(async()=>Bk(await Qk(s),o,l)),l.promise}(tC(n),e)}(function(e,t=!0){(function(o){Wo=o})(Cs),Es(new Oi("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),p=new Tp(new zA(s.getProvider("auth-internal")),new qA(s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ve(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kc(v.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),p._setSettings(l),p},"PUBLIC").setMultipleInstances(!0)),dr(Wy,"4.7.3",e),dr(Wy,"4.7.3","esm2017")})();/**
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
 */const nw="firebasestorage.googleapis.com",rw="storageBucket",dC=2*60*1e3,pC=10*60*1e3;/**
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
 */class it extends un{constructor(e,t,s=0){super(ed(e),`Firebase Storage: ${t} (${ed(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ed(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function ed(n){return"storage/"+n}function Pp(){const n="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,n)}function mC(n){return new it(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function gC(n){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yC(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,n)}function vC(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _C(n){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wC(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EC(){return new it(rt.CANCELED,"User canceled the upload/download.")}function TC(n){return new it(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function IC(n){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function SC(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rw+"' property when initializing the app?")}function RC(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AC(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PC(n){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Dd(n){return new it(rt.INVALID_ARGUMENT,n)}function iw(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function kC(n){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nl(n,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Wa(n){throw new it(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class En{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=En.makeFromUrl(e,t)}catch{return new En(e,"")}if(s.path==="")return s;throw IC(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(te){te.path.charAt(te.path.length-1)==="/"&&(te.path_=te.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),g={bucket:1,path:3};function v(te){te.path_=decodeURIComponent(te.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),k="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${E}/b/${o}/o${k}`,"i"),j={bucket:1,path:3},$=t===nw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",W=new RegExp(`^https?://${$}/${o}/${V}`,"i"),X=[{regex:p,indices:g,postModify:l},{regex:F,indices:j,postModify:v},{regex:W,indices:{bucket:1,path:2},postModify:v}];for(let te=0;te<X.length;te++){const me=X[te],ae=me.regex.exec(e);if(ae){const P=ae[me.indices.bucket];let I=ae[me.indices.path];I||(I=""),s=new En(P,I),me.postModify(s);break}}if(s==null)throw TC(e);return s}}class CC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function NC(n,e,t){let s=1,o=null,l=null,h=!1,p=0;function g(){return p===2}let v=!1;function E(...V){v||(v=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,n(F,g())},V)}function k(){l&&clearTimeout(l)}function F(V,...W){if(v){k();return}if(V){k(),E.call(null,V,...W);return}if(g()||h){k(),E.call(null,V,...W);return}s<64&&(s*=2);let X;p===1?(p=2,X=0):X=(s+Math.random())*1e3,T(X)}let j=!1;function $(V){j||(j=!0,k(),!v&&(o!==null?(V||(p=2),clearTimeout(o),T(0)):V||(p=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function xC(n){n(!1)}/**
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
 */function OC(n){return n!==void 0}function DC(n){return typeof n=="object"&&!Array.isArray(n)}function kp(n){return typeof n=="string"||n instanceof String}function vv(n){return Cp()&&n instanceof Blob}function Cp(){return typeof Blob<"u"}function _v(n,e,t,s){if(s<e)throw Dd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Dd(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Np(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function sw(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var ws;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ws||(ws={}));/**
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
 */function LC(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class bC{constructor(e,t,s,o,l,h,p,g,v,E,T,k=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=g,this.timeout_=v,this.progressCallback_=E,this.connectionFactory_=T,this.retry=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((F,j)=>{this.resolve_=F,this.reject_=j,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Xu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=p=>{const g=p.loaded,v=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,v)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const p=l.getErrorCode()===ws.NO_ERROR,g=l.getStatus();if(!p||LC(g,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===ws.ABORT;s(!1,new Xu(!1,null,E));return}const v=this.successCodes_.indexOf(g)!==-1;s(!0,new Xu(v,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());OC(g)?l(g):l()}catch(g){h(g)}else if(p!==null){const g=Pp();g.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,g)):h(g)}else if(o.canceled){const g=this.appDelete_?iw():EC();h(g)}else{const g=wC();h(g)}};this.canceled_?t(!1,new Xu(!1,null,!0)):this.backoffId_=NC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xu{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function MC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function VC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function UC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function FC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jC(n,e,t,s,o,l,h=!0){const p=sw(n.urlParams),g=n.url+p,v=Object.assign({},n.headers);return UC(v,e),MC(v,t),VC(v,l),FC(v,s),new bC(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
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
 */function BC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zC(...n){const e=BC();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Cp())return new Blob(n);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function $C(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function HC(n){if(typeof atob>"u")throw PC("base-64");return atob(n)}/**
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
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class td{constructor(e,t){this.data=e,this.contentType=t||null}}function WC(n,e){switch(n){case fr.RAW:return new td(ow(e));case fr.BASE64:case fr.BASE64URL:return new td(aw(n,e));case fr.DATA_URL:return new td(KC(e),GC(e))}throw Pp()}function ow(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=n.charCodeAt(++t);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function qC(n){let e;try{e=decodeURIComponent(n)}catch{throw nl(fr.DATA_URL,"Malformed data URL.")}return ow(e)}function aw(n,e){switch(n){case fr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw nl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw nl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=HC(e)}catch(o){throw o.message.includes("polyfill")?o:nl(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class lw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw nl(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=QC(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function KC(n){const e=new lw(n);return e.base64?aw(fr.BASE64,e.rest):qC(e.rest)}function GC(n){return new lw(n).contentType}function QC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ri{constructor(e,t){let s=0,o="";vv(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(vv(this.data_)){const s=this.data_,o=$C(s,e,t);return o===null?null:new Ri(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ri(s,!0)}}static getBlob(...e){if(Cp()){const t=e.map(s=>s instanceof Ri?s.data_:s);return new Ri(zC.apply(null,t))}else{const t=e.map(h=>kp(h)?WC(fr.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(h=>{for(let p=0;p<h.length;p++)o[l++]=h[p]}),new Ri(o,!0)}}uploadData(){return this.data_}}/**
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
 */function uw(n){let e;try{e=JSON.parse(n)}catch{return null}return DC(e)?e:null}/**
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
 */function XC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function YC(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function cw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function JC(n,e){return e}class Jt{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||JC}}let Yu=null;function ZC(n){return!kp(n)||n.length<2?n:cw(n)}function hw(){if(Yu)return Yu;const n=[];n.push(new Jt("bucket")),n.push(new Jt("generation")),n.push(new Jt("metageneration")),n.push(new Jt("name","fullPath",!0));function e(l,h){return ZC(h)}const t=new Jt("name");t.xform=e,n.push(t);function s(l,h){return h!==void 0?Number(h):h}const o=new Jt("size");return o.xform=s,n.push(o),n.push(new Jt("timeCreated")),n.push(new Jt("updated")),n.push(new Jt("md5Hash",null,!0)),n.push(new Jt("cacheControl",null,!0)),n.push(new Jt("contentDisposition",null,!0)),n.push(new Jt("contentEncoding",null,!0)),n.push(new Jt("contentLanguage",null,!0)),n.push(new Jt("contentType",null,!0)),n.push(new Jt("metadata","customMetadata",!0)),Yu=n,Yu}function eN(n,e){function t(){const s=n.bucket,o=n.fullPath,l=new En(s,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function tN(n,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];s[h.local]=h.xform(s,e[h.server])}return eN(s,n),s}function fw(n,e,t){const s=uw(e);return s===null?null:tN(n,s,t)}function nN(n,e,t,s){const o=uw(e);if(o===null||!kp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(v=>{const E=n.bucket,T=n.fullPath,k="/b/"+h(E)+"/o/"+h(T),F=Np(k,t,s),j=sw({alt:"media",token:v});return F+j})[0]}function rN(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class dw{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function pw(n){if(!n)throw Pp()}function iN(n,e){function t(s,o){const l=fw(n,o,e);return pw(l!==null),l}return t}function sN(n,e){function t(s,o){const l=fw(n,o,e);return pw(l!==null),nN(l,o,n.host,n._protocol)}return t}function mw(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=vC():o=yC():t.getStatus()===402?o=gC(n.bucket):t.getStatus()===403?o=_C(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function oN(n){const e=mw(n);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=mC(n.path)),l.serverResponse=o.serverResponse,l}return t}function aN(n,e,t){const s=e.fullServerUrl(),o=Np(s,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,p=new dw(o,l,sN(n,t),h);return p.errorHandler=oN(e),p}function lN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function uN(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=lN(null,e)),s}function cN(n,e,t,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function p(){let X="";for(let te=0;te<2;te++)X=X+Math.random().toString().slice(2);return X}const g=p();h["Content-Type"]="multipart/related; boundary="+g;const v=uN(e,s,o),E=rN(v,t),T="--"+g+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+g+`\r
Content-Type: `+v.contentType+`\r
\r
`,k=`\r
--`+g+"--",F=Ri.getBlob(T,s,k);if(F===null)throw RC();const j={name:v.fullPath},$=Np(l,n.host,n._protocol),V="POST",W=n.maxUploadRetryTime,J=new dw($,V,iN(n,t),W);return J.urlParams=j,J.headers=h,J.body=F.uploadData(),J.errorHandler=mw(e),J}class hN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ws.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ws.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ws.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o){if(this.sent_)throw Wa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Wa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Wa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Wa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Wa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fN extends hN{initXhr(){this.xhr_.responseType="text"}}function gw(){return new fN}/**
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
 */class Ps{constructor(e,t){this._service=e,t instanceof En?this._location=t:this._location=En.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ps(e,t)}get root(){const e=new En(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cw(this._location.path)}get storage(){return this._service}get parent(){const e=XC(this._location.path);if(e===null)return null;const t=new En(this._location.bucket,e);return new Ps(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw kC(e)}}function dN(n,e,t){n._throwIfRoot("uploadBytes");const s=cN(n.storage,n._location,hw(),new Ri(e,!0),t);return n.storage.makeRequestWithTokens(s,gw).then(o=>({metadata:o,ref:n}))}function pN(n){n._throwIfRoot("getDownloadURL");const e=aN(n.storage,n._location,hw());return n.storage.makeRequestWithTokens(e,gw).then(t=>{if(t===null)throw AC();return t})}function mN(n,e){const t=YC(n._location.path,e),s=new En(n._location.bucket,t);return new Ps(n.storage,s)}/**
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
 */function gN(n){return/^[A-Za-z]+:\/\//.test(n)}function yN(n,e){return new Ps(n,e)}function yw(n,e){if(n instanceof xp){const t=n;if(t._bucket==null)throw SC();const s=new Ps(t,t._bucket);return e!=null?yw(s,e):s}else return e!==void 0?mN(n,e):n}function vN(n,e){if(e&&gN(e)){if(n instanceof xp)return yN(n,e);throw Dd("To use ref(service, url), the first argument must be a Storage instance.")}else return yw(n,e)}function wv(n,e){const t=e==null?void 0:e[rw];return t==null?null:En.makeFromBucketSpec(t,n)}function _N(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=s;o&&(n._overrideAuthToken=typeof o=="string"?o:m_(o,n.app.options.projectId))}class xp{constructor(e,t,s,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=nw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dC,this._maxUploadRetryTime=pC,this._requests=new Set,o!=null?this._bucket=En.makeFromBucketSpec(o,this._host):this._bucket=wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=En.makeFromBucketSpec(this._url,e):this._bucket=wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_v("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ps(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new CC(iw());{const h=jC(e,this._appId,s,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const Ev="@firebase/storage",Tv="0.13.2";/**
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
 */const vw="storage";function wN(n,e,t){return n=pt(n),dN(n,e,t)}function EN(n){return n=pt(n),pN(n)}function TN(n,e){return n=pt(n),vN(n,e)}function IN(n=Qd(),e){n=pt(n);const s=qc(n,vw).getImmediate({identifier:e}),o=f_("storage");return o&&SN(s,...o),s}function SN(n,e,t,s={}){_N(n,e,t,s)}function RN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new xp(t,s,o,e,Cs)}function AN(){Es(new Oi(vw,RN,"PUBLIC").setMultipleInstances(!0)),dr(Ev,Tv,""),dr(Ev,Tv,"esm2017")}AN();const PN={apiKey:"AIzaSyD3inNnBFoe9P-QiseO8ihe1bg_x4avjnE",authDomain:"hwitter-reloaded-8b74b.firebaseapp.com",projectId:"hwitter-reloaded-8b74b",storageBucket:"hwitter-reloaded-8b74b.firebasestorage.app",messagingSenderId:"11116758234",appId:"1:11116758234:web:6c92511c31914d4de0d1e3"},Op=v_(PN),Wr=UA(Op),kN=IN(Op),CN=eC(Op),NN=ut.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,xN=ut.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,nd=ut.div`
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
`;function ON(){const n=zo(),e=async()=>{confirm("Are you sure you want to log out?")&&(await Wr.signOut(),n("/login"))};return se.jsxs(NN,{children:[se.jsxs(xN,{children:[se.jsx(hc,{to:"/",children:se.jsx(nd,{children:se.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:se.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),se.jsx(hc,{to:"/profile",children:se.jsx(nd,{children:se.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:se.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),se.jsx(nd,{onClick:e,className:"log-out",children:se.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[se.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),se.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),se.jsx(OT,{})]})}const DN=ut.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,LN=ut.textarea`
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
`,bN=ut.label`
	padding: 10px 0px;
	color: #1d9bf0;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #1d9bf0;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`,MN=ut.input`
	display: none;
`,VN=ut.input`
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
`;function UN(){const[n,e]=ee.useState(!1),[t,s]=ee.useState(""),[o,l]=ee.useState(null),h=v=>{s(v.target.value)},p=v=>{const{files:E}=v.target;if(E&&E.length===1){const T=E[0];if(T.size>512e3){alert("Only files smaller than 500KB are allowed for upload."),v.target.value="",l(null);return}l(T)}},g=async v=>{v.preventDefault();const E=Wr.currentUser;if(!(!E||n||t===""||t.length>180))try{e(!0);const T=await fC(Jk(CN,"tweets"),{tweet:t,createdAt:Date.now(),username:E.displayName||"Anonymous",userId:E.uid});if(o){const k=TN(kN,`tweets/${E.uid}-${E.displayName}/${T.id}`),F=await wN(k,o),j=await EN(F.ref);await hC(T,{photo:j})}s(""),l(null)}catch(T){console.log(T)}finally{e(!1)}};return se.jsxs(DN,{onSubmit:g,children:[se.jsx(LN,{rows:5,maxLength:180,onChange:h,value:t,placeholder:"What is happening?!"}),se.jsx(bN,{htmlFor:"file",children:o?"Photo added ✅":"Add photo"}),se.jsx(MN,{onChange:p,type:"file",id:"file",accept:"image/*"}),se.jsx(VN,{type:"submit",value:n?"Posting...":"Post Tweet"})]})}const FN=ut.div``;function jN(){return se.jsx(FN,{children:se.jsx(UN,{})})}function BN(){return se.jsx("h1",{children:"Profile"})}const _w=ut.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,ww=ut.h1`
  font-size: 42px;
`,Ew=ut.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,gs=ut.input`
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
`,Tw=ut.span`
  font-weight: 600;
  color: tomato;
`,Vc=ut.span`
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
`,zN=ut.span`
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
`,$N=ut.img`
  height: 25px;
`;function Iw(){const n=zo(),e=async()=>{try{const t=new Ur;await KR(Wr,t),n("/")}catch(t){console.error(t)}};return se.jsxs(zN,{onClick:e,children:[se.jsx($N,{src:"github-logo.svg"}),"Continue with Github"]})}function HN(){const n=zo(),[e,t]=ee.useState(!1),[s,o]=ee.useState(""),[l,h]=ee.useState(""),[p,g]=ee.useState(""),[v,E]=ee.useState(""),T=j=>{const{target:{name:$,value:V}}=j;$==="email"?o(V):$==="password"&&h(V)},k=async j=>{if(j.preventDefault(),g(""),!(e||s===""||l===""))try{t(!0),await IR(Wr,s,l),n("/")}catch($){$ instanceof un&&g($.message),console.log($)}finally{t(!1)}},F=async()=>{if(g(""),E(""),!s){g("Please enter your email to reset password.");return}try{await $_(Wr,s),E("Password reset email sent")}catch(j){j instanceof un&&g(j.message)}};return se.jsxs(_w,{children:[se.jsx(ww,{children:"Log into 𝕏"}),se.jsxs(Ew,{onSubmit:k,children:[se.jsx(gs,{onChange:T,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),se.jsx(gs,{onChange:T,value:l,name:"password",placeholder:"Password",type:"password",required:!0}),se.jsx(gs,{type:"submit",value:e?"Loading...":"Log in"})]}),p!==""?se.jsx(Tw,{children:p}):null,v&&se.jsx("span",{style:{color:"lightgreen"},children:v}),se.jsxs(Vc,{children:["Don't have an account?",se.jsx(hc,{to:"/create-account",children:"Create one →"})]}),se.jsxs(Vc,{children:["Forgot your password?",se.jsx("button",{onClick:F,children:"Reset Password →"})]}),se.jsx(Iw,{})]})}function WN(){const n=zo(),[e,t]=ee.useState(!1),[s,o]=ee.useState(""),[l,h]=ee.useState(""),[p,g]=ee.useState(""),[v,E]=ee.useState(""),[T,k]=ee.useState(""),F=V=>{const{target:{name:W,value:J}}=V;W==="name"?o(J):W==="email"?h(J):W==="password"&&g(J)},j=async V=>{if(V.preventDefault(),E(""),!(e||s===""||l===""||p===""))try{t(!0);const W=await TR(Wr,l,p);await RR(W.user,{displayName:s}),n("/")}catch(W){W instanceof un&&E(W.message),console.log(W)}finally{t(!1)}},$=async()=>{if(E(""),k(""),!l){E("Please enter your email to reset password.");return}try{await $_(Wr,l),k("Password reset email sent")}catch(V){V instanceof un&&E(V.message)}};return se.jsxs(_w,{children:[se.jsx(ww,{children:"Join 𝕏"}),se.jsxs(Ew,{onSubmit:j,children:[se.jsx(gs,{onChange:F,name:"name",value:s,placeholder:"Name",type:"text",required:!0}),se.jsx(gs,{onChange:F,name:"email",value:l,placeholder:"Email",type:"email",required:!0}),se.jsx(gs,{onChange:F,value:p,name:"password",placeholder:"Password",type:"password",required:!0}),se.jsx(gs,{type:"submit",value:e?"Loading...":"Create Account"})]}),v!==""?se.jsx(Tw,{children:v}):null,T&&se.jsx("span",{style:{color:"lightgreen"},children:T}),se.jsxs(Vc,{children:["Already have an account?"," ",se.jsx(hc,{to:"/login",children:"Log in →"})]}),se.jsxs(Vc,{children:["Forgot your password?",se.jsx("button",{onClick:$,children:"Reset Password →"})]}),se.jsx(Iw,{})]})}var Sw=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},Rw=qd(Iv||(Iv=Sw([`
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
`])));a_(Sv||(Sv=Sw(["",""],["",""])),Rw);var Iv,Sv;const qN=ut.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,KN=ut.span`
  font-size: 24px;
`;function GN(){return se.jsx(qN,{children:se.jsx(KN,{children:"Loading..."})})}function QN({children:n}){return Wr.currentUser==null?se.jsx(xT,{to:"/login"}):n}const XN=a_`
  ${Rw};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07111F;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,YN=ut.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function JN(){const[n,e]=ee.useState(!0),t=async()=>{await Wr.authStateReady(),e(!1)};return ee.useEffect(()=>{t()},[]),se.jsxs(YN,{children:[se.jsx(XN,{}),n?se.jsx(GN,{}):se.jsx(BT,{children:se.jsxs(LT,{children:[se.jsxs(Io,{path:"/",element:se.jsx(QN,{children:se.jsx(ON,{})}),children:[se.jsx(Io,{index:!0,element:se.jsx(jN,{})}),se.jsx(Io,{path:"profile",element:se.jsx(BN,{})})]}),se.jsx(Io,{path:"/login",element:se.jsx(HN,{})}),se.jsx(Io,{path:"/create-account",element:se.jsx(WN,{})})]})})]})}const ZN=FE.createRoot(document.getElementById("root"));ZN.render(se.jsx(Xn.StrictMode,{children:se.jsx(JN,{})}));
