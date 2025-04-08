function h_(n,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function op(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rf={exports:{}},dl={},sf={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function IT(){if(hy)return $e;hy=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),T=Symbol.iterator;function R(M){return M===null||typeof M!="object"?null:(M=T&&M[T]||M["@@iterator"],typeof M=="function"?M:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function F(M,q,ve){this.props=M,this.context=q,this.refs=z,this.updater=ve||N}F.prototype.isReactComponent={},F.prototype.setState=function(M,q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,q,"setState")},F.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function X(){}X.prototype=F.prototype;function G(M,q,ve){this.props=M,this.context=q,this.refs=z,this.updater=ve||N}var Z=G.prototype=new X;Z.constructor=G,V(Z,F.prototype),Z.isPureReactComponent=!0;var ne=Array.isArray,de=Object.prototype.hasOwnProperty,ce={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function S(M,q,ve){var xe,Re={},Oe=null,Ve=null;if(q!=null)for(xe in q.ref!==void 0&&(Ve=q.ref),q.key!==void 0&&(Oe=""+q.key),q)de.call(q,xe)&&!E.hasOwnProperty(xe)&&(Re[xe]=q[xe]);var Ue=arguments.length-2;if(Ue===1)Re.children=ve;else if(1<Ue){for(var Ge=Array(Ue),vt=0;vt<Ue;vt++)Ge[vt]=arguments[vt+2];Re.children=Ge}if(M&&M.defaultProps)for(xe in Ue=M.defaultProps,Ue)Re[xe]===void 0&&(Re[xe]=Ue[xe]);return{$$typeof:n,type:M,key:Oe,ref:Ve,props:Re,_owner:ce.current}}function A(M,q){return{$$typeof:n,type:M.type,key:q,ref:M.ref,props:M.props,_owner:M._owner}}function k(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function O(M){var q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ve){return q[ve]})}var L=/\/+/g;function C(M,q){return typeof M=="object"&&M!==null&&M.key!=null?O(""+M.key):q.toString(36)}function Be(M,q,ve,xe,Re){var Oe=typeof M;(Oe==="undefined"||Oe==="boolean")&&(M=null);var Ve=!1;if(M===null)Ve=!0;else switch(Oe){case"string":case"number":Ve=!0;break;case"object":switch(M.$$typeof){case n:case e:Ve=!0}}if(Ve)return Ve=M,Re=Re(Ve),M=xe===""?"."+C(Ve,0):xe,ne(Re)?(ve="",M!=null&&(ve=M.replace(L,"$&/")+"/"),Be(Re,q,ve,"",function(vt){return vt})):Re!=null&&(k(Re)&&(Re=A(Re,ve+(!Re.key||Ve&&Ve.key===Re.key?"":(""+Re.key).replace(L,"$&/")+"/")+M)),q.push(Re)),1;if(Ve=0,xe=xe===""?".":xe+":",ne(M))for(var Ue=0;Ue<M.length;Ue++){Oe=M[Ue];var Ge=xe+C(Oe,Ue);Ve+=Be(Oe,q,ve,Ge,Re)}else if(Ge=R(M),typeof Ge=="function")for(M=Ge.call(M),Ue=0;!(Oe=M.next()).done;)Oe=Oe.value,Ge=xe+C(Oe,Ue++),Ve+=Be(Oe,q,ve,Ge,Re);else if(Oe==="object")throw q=String(M),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Ve}function ct(M,q,ve){if(M==null)return M;var xe=[],Re=0;return Be(M,xe,"","",function(Oe){return q.call(ve,Oe,Re++)}),xe}function Tt(M){if(M._status===-1){var q=M._result;q=q(),q.then(function(ve){(M._status===0||M._status===-1)&&(M._status=1,M._result=ve)},function(ve){(M._status===0||M._status===-1)&&(M._status=2,M._result=ve)}),M._status===-1&&(M._status=0,M._result=q)}if(M._status===1)return M._result.default;throw M._result}var He={current:null},te={transition:null},me={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:te,ReactCurrentOwner:ce};function ue(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:ct,forEach:function(M,q,ve){ct(M,function(){q.apply(this,arguments)},ve)},count:function(M){var q=0;return ct(M,function(){q++}),q},toArray:function(M){return ct(M,function(q){return q})||[]},only:function(M){if(!k(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},$e.Component=F,$e.Fragment=t,$e.Profiler=o,$e.PureComponent=G,$e.StrictMode=s,$e.Suspense=p,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,$e.act=ue,$e.cloneElement=function(M,q,ve){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var xe=V({},M.props),Re=M.key,Oe=M.ref,Ve=M._owner;if(q!=null){if(q.ref!==void 0&&(Oe=q.ref,Ve=ce.current),q.key!==void 0&&(Re=""+q.key),M.type&&M.type.defaultProps)var Ue=M.type.defaultProps;for(Ge in q)de.call(q,Ge)&&!E.hasOwnProperty(Ge)&&(xe[Ge]=q[Ge]===void 0&&Ue!==void 0?Ue[Ge]:q[Ge])}var Ge=arguments.length-2;if(Ge===1)xe.children=ve;else if(1<Ge){Ue=Array(Ge);for(var vt=0;vt<Ge;vt++)Ue[vt]=arguments[vt+2];xe.children=Ue}return{$$typeof:n,type:M.type,key:Re,ref:Oe,props:xe,_owner:Ve}},$e.createContext=function(M){return M={$$typeof:h,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},$e.createElement=S,$e.createFactory=function(M){var q=S.bind(null,M);return q.type=M,q},$e.createRef=function(){return{current:null}},$e.forwardRef=function(M){return{$$typeof:f,render:M}},$e.isValidElement=k,$e.lazy=function(M){return{$$typeof:w,_payload:{_status:-1,_result:M},_init:Tt}},$e.memo=function(M,q){return{$$typeof:y,type:M,compare:q===void 0?null:q}},$e.startTransition=function(M){var q=te.transition;te.transition={};try{M()}finally{te.transition=q}},$e.unstable_act=ue,$e.useCallback=function(M,q){return He.current.useCallback(M,q)},$e.useContext=function(M){return He.current.useContext(M)},$e.useDebugValue=function(){},$e.useDeferredValue=function(M){return He.current.useDeferredValue(M)},$e.useEffect=function(M,q){return He.current.useEffect(M,q)},$e.useId=function(){return He.current.useId()},$e.useImperativeHandle=function(M,q,ve){return He.current.useImperativeHandle(M,q,ve)},$e.useInsertionEffect=function(M,q){return He.current.useInsertionEffect(M,q)},$e.useLayoutEffect=function(M,q){return He.current.useLayoutEffect(M,q)},$e.useMemo=function(M,q){return He.current.useMemo(M,q)},$e.useReducer=function(M,q,ve){return He.current.useReducer(M,q,ve)},$e.useRef=function(M){return He.current.useRef(M)},$e.useState=function(M){return He.current.useState(M)},$e.useSyncExternalStore=function(M,q,ve){return He.current.useSyncExternalStore(M,q,ve)},$e.useTransition=function(){return He.current.useTransition()},$e.version="18.3.1",$e}var dy;function ap(){return dy||(dy=1,sf.exports=IT()),sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function ST(){if(fy)return dl;fy=1;var n=ap(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var w,T={},R=null,N=null;y!==void 0&&(R=""+y),p.key!==void 0&&(R=""+p.key),p.ref!==void 0&&(N=p.ref);for(w in p)s.call(p,w)&&!l.hasOwnProperty(w)&&(T[w]=p[w]);if(f&&f.defaultProps)for(w in p=f.defaultProps,p)T[w]===void 0&&(T[w]=p[w]);return{$$typeof:e,type:f,key:R,ref:N,props:T,_owner:o.current}}return dl.Fragment=t,dl.jsx=h,dl.jsxs=h,dl}var py;function RT(){return py||(py=1,rf.exports=ST()),rf.exports}var ye=RT(),Q=ap();const Vr=op(Q),AT=h_({__proto__:null,default:Vr},[Q]);var ac={},of={exports:{}},Bn={},af={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function PT(){return my||(my=1,function(n){function e(te,me){var ue=te.length;te.push(me);e:for(;0<ue;){var M=ue-1>>>1,q=te[M];if(0<o(q,me))te[M]=me,te[ue]=q,ue=M;else break e}}function t(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var me=te[0],ue=te.pop();if(ue!==me){te[0]=ue;e:for(var M=0,q=te.length,ve=q>>>1;M<ve;){var xe=2*(M+1)-1,Re=te[xe],Oe=xe+1,Ve=te[Oe];if(0>o(Re,ue))Oe<q&&0>o(Ve,Re)?(te[M]=Ve,te[Oe]=ue,M=Oe):(te[M]=Re,te[xe]=ue,M=xe);else if(Oe<q&&0>o(Ve,ue))te[M]=Ve,te[Oe]=ue,M=Oe;else break e}}return me}function o(te,me){var ue=te.sortIndex-me.sortIndex;return ue!==0?ue:te.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var p=[],y=[],w=1,T=null,R=3,N=!1,V=!1,z=!1,F=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Z(te){for(var me=t(y);me!==null;){if(me.callback===null)s(y);else if(me.startTime<=te)s(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ne(te){if(z=!1,Z(te),!V)if(t(p)!==null)V=!0,Tt(de);else{var me=t(y);me!==null&&He(ne,me.startTime-te)}}function de(te,me){V=!1,z&&(z=!1,X(S),S=-1),N=!0;var ue=R;try{for(Z(me),T=t(p);T!==null&&(!(T.expirationTime>me)||te&&!O());){var M=T.callback;if(typeof M=="function"){T.callback=null,R=T.priorityLevel;var q=M(T.expirationTime<=me);me=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(p)&&s(p),Z(me)}else s(p);T=t(p)}if(T!==null)var ve=!0;else{var xe=t(y);xe!==null&&He(ne,xe.startTime-me),ve=!1}return ve}finally{T=null,R=ue,N=!1}}var ce=!1,E=null,S=-1,A=5,k=-1;function O(){return!(n.unstable_now()-k<A)}function L(){if(E!==null){var te=n.unstable_now();k=te;var me=!0;try{me=E(!0,te)}finally{me?C():(ce=!1,E=null)}}else ce=!1}var C;if(typeof G=="function")C=function(){G(L)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,ct=Be.port2;Be.port1.onmessage=L,C=function(){ct.postMessage(null)}}else C=function(){F(L,0)};function Tt(te){E=te,ce||(ce=!0,C())}function He(te,me){S=F(function(){te(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(te){te.callback=null},n.unstable_continueExecution=function(){V||N||(V=!0,Tt(de))},n.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<te?Math.floor(1e3/te):5},n.unstable_getCurrentPriorityLevel=function(){return R},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(te){switch(R){case 1:case 2:case 3:var me=3;break;default:me=R}var ue=R;R=me;try{return te()}finally{R=ue}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(te,me){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var ue=R;R=te;try{return me()}finally{R=ue}},n.unstable_scheduleCallback=function(te,me,ue){var M=n.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?M+ue:M):ue=M,te){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ue+q,te={id:w++,callback:me,priorityLevel:te,startTime:ue,expirationTime:q,sortIndex:-1},ue>M?(te.sortIndex=ue,e(y,te),t(p)===null&&te===t(y)&&(z?(X(S),S=-1):z=!0,He(ne,ue-M))):(te.sortIndex=q,e(p,te),V||N||(V=!0,Tt(de))),te},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(te){var me=R;return function(){var ue=R;R=me;try{return te.apply(this,arguments)}finally{R=ue}}}}(lf)),lf}var gy;function CT(){return gy||(gy=1,af.exports=PT()),af.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function kT(){if(yy)return Bn;yy=1;var n=ap(),e=CT();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){h(r,i),h(r+"Capture",i)}function h(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},T={};function R(r){return p.call(T,r)?!0:p.call(w,r)?!1:y.test(r)?T[r]=!0:(w[r]=!0,!1)}function N(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,i,a,c){if(i===null||typeof i>"u"||N(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function z(r,i,a,c,d,g,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=g,this.removeEmptyString=_}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new z(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];F[i]=new z(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new z(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new z(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new z(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new z(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new z(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new z(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new z(r,5,!1,r.toLowerCase(),null,!1,!1)});var X=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(X,G);F[i]=new z(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(X,G);F[i]=new z(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(X,G);F[i]=new z(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new z(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new z(r,1,!1,r.toLowerCase(),null,!0,!0)});function Z(r,i,a,c){var d=F.hasOwnProperty(i)?F[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(V(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,de=Symbol.for("react.element"),ce=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Be=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),te=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var ue=Object.assign,M;function q(r){if(M===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+r}var ve=!1;function xe(r,i){if(!r||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(W){var c=W}Reflect.construct(r,[],i)}else{try{i.call()}catch(W){c=W}r.call(i.prototype)}else{try{throw Error()}catch(W){c=W}r()}}catch(W){if(W&&c&&typeof W.stack=="string"){for(var d=W.stack.split(`
`),g=c.stack.split(`
`),_=d.length-1,P=g.length-1;1<=_&&0<=P&&d[_]!==g[P];)P--;for(;1<=_&&0<=P;_--,P--)if(d[_]!==g[P]){if(_!==1||P!==1)do if(_--,P--,0>P||d[_]!==g[P]){var D=`
`+d[_].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=_&&0<=P);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Re(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=xe(r.type,!1),r;case 11:return r=xe(r.type.render,!1),r;case 1:return r=xe(r.type,!0),r;default:return""}}function Oe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case E:return"Fragment";case ce:return"Portal";case A:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Be:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ct:return i=r.displayName||null,i!==null?i:Oe(r.type)||"Memo";case Tt:i=r._payload,r=r._init;try{return Oe(r(i))}catch{}}return null}function Ve(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ge(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(r){var i=Ge(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,g.call(this,_)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function hn(r){r._valueTracker||(r._valueTracker=vt(r))}function it(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=Ge(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function Sn(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Br(r,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Bi(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ue(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Wn(r,i){i=i.checked,i!=null&&Z(r,"checked",i,!1)}function Ls(r,i){Wn(r,i);var a=Ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?di(r,i.type,a):i.hasOwnProperty("defaultValue")&&di(r,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Po(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function di(r,i,a){(i!=="number"||Sn(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var _r=Array.isArray;function wr(r,i,a,c){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function Ms(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function zi(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_r(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Ue(a)}}function xn(r,i){var a=Ue(i.value),c=Ue(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Er(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function Ct(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function It(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?Ct(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var qt,Rn=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,d)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(qt=qt||document.createElement("div"),qt.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=qt.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Tr(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fi=["Webkit","ms","Moz","O"];Object.keys(or).forEach(function(r){fi.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),or[i]=or[r]})});function Nn(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||or.hasOwnProperty(r)&&or[r]?(""+i).trim():i+"px"}function $i(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Nn(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var Hi=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(r,i){if(i){if(Hi[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Vs(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zr=null;function Ir(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var pi=null,dn=null,Dn=null;function Ki(r){if(r=Xa(r)){if(typeof pi!="function")throw Error(t(280));var i=r.stateNode;i&&(i=Tu(i),pi(r.stateNode,r.type,i))}}function Kn(r){dn?Dn?Dn.push(r):Dn=[r]:dn=r}function Us(){if(dn){var r=dn,i=Dn;if(Dn=dn=null,Ki(r),i)for(r=0;r<i.length;r++)Ki(i[r])}}function $r(r,i){return r(i)}function Hr(){}var On=!1;function Fs(r,i,a){if(On)return r(i,a);On=!0;try{return $r(r,i,a)}finally{On=!1,(dn!==null||Dn!==null)&&(Hr(),Us())}}function St(r,i){var a=r.stateNode;if(a===null)return null;var c=Tu(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var x=!1;if(f)try{var U={};Object.defineProperty(U,"passive",{get:function(){x=!0}}),window.addEventListener("test",U,U),window.removeEventListener("test",U,U)}catch{x=!1}function H(r,i,a,c,d,g,_,P,D){var W=Array.prototype.slice.call(arguments,3);try{i.apply(a,W)}catch(ee){this.onError(ee)}}var Y=!1,le=null,_e=!1,Pe=null,we={onError:function(r){Y=!0,le=r}};function ge(r,i,a,c,d,g,_,P,D){Y=!1,le=null,H.apply(we,arguments)}function fe(r,i,a,c,d,g,_,P,D){if(ge.apply(this,arguments),Y){if(Y){var W=le;Y=!1,le=null}else throw Error(t(198));_e||(_e=!0,Pe=W)}}function pe(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Ne(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Me(r){if(pe(r)!==r)throw Error(t(188))}function kt(r){var i=r.alternate;if(!i){if(i=pe(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Me(d),r;if(g===c)return Me(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var _=!1,P=d.child;P;){if(P===a){_=!0,a=d,c=g;break}if(P===c){_=!0,c=d,a=g;break}P=P.sibling}if(!_){for(P=g.child;P;){if(P===a){_=!0,a=g,c=d;break}if(P===c){_=!0,c=g,a=d;break}P=P.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function nt(r){return r=kt(r),r!==null?ze(r):null}function ze(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=ze(r);if(i!==null)return i;r=r.sibling}return null}var at=e.unstable_scheduleCallback,ar=e.unstable_cancelCallback,Wr=e.unstable_shouldYield,qn=e.unstable_requestPaint,We=e.unstable_now,qi=e.unstable_getCurrentPriorityLevel,Gn=e.unstable_ImmediatePriority,fn=e.unstable_UserBlockingPriority,nn=e.unstable_NormalPriority,Kr=e.unstable_LowPriority,Ke=e.unstable_IdlePriority,st=null,Vt=null;function qr(r){if(Vt&&typeof Vt.onCommitFiberRoot=="function")try{Vt.onCommitFiberRoot(st,r,void 0,(r.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Co,lr=Math.log,js=Math.LN2;function Co(r){return r>>>=0,r===0?32:31-(lr(r)/js|0)|0}var ko=64,xo=4194304;function Gi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bs(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,_=a&268435455;if(_!==0){var P=_&~d;P!==0?c=Gi(P):(g&=_,g!==0&&(c=Gi(g)))}else _=a&~d,_!==0?c=Gi(_):g!==0&&(c=Gi(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-Qe(i),d=1<<a,c|=r[a],i&=~d;return c}function Oh(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mi(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var _=31-Qe(g),P=1<<_,D=d[_];D===-1?((P&a)===0||(P&c)!==0)&&(d[_]=Oh(P,i)):D<=i&&(r.expiredLanes|=P),g&=~P}}function Qn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function zs(){var r=ko;return ko<<=1,(ko&4194240)===0&&(ko=64),r}function Qi(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function Yi(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Qe(i),r[i]=a}function ht(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Qe(a),g=1<<d;i[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Xi(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-Qe(a),d=1<<c;d&i|r[c]&i&&(r[c]|=i),a&=~d}}var Ye=0;function Ji(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var tu,No,nu,ru,iu,Ma=!1,Gr=[],rn=null,Sr=null,Rr=null,Zi=new Map,ur=new Map,Qr=[],bh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(r,i){switch(r){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Zi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(i.pointerId)}}function bn(r,i,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Xa(i),i!==null&&No(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function Lh(r,i,a,c,d){switch(i){case"focusin":return rn=bn(rn,r,i,a,c,d),!0;case"dragenter":return Sr=bn(Sr,r,i,a,c,d),!0;case"mouseover":return Rr=bn(Rr,r,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Zi.set(g,bn(Zi.get(g)||null,r,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ur.set(g,bn(ur.get(g)||null,r,i,a,c,d)),!0}return!1}function ou(r){var i=qs(r.target);if(i!==null){var a=pe(i);if(a!==null){if(i=a.tag,i===13){if(i=Ne(a),i!==null){r.blockedOn=i,iu(r.priority,function(){nu(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function gi(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=Do(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);zr=c,a.target.dispatchEvent(c),zr=null}else return i=Xa(a),i!==null&&No(i),r.blockedOn=a,!1;i.shift()}return!0}function $s(r,i,a){gi(r)&&a.delete(i)}function au(){Ma=!1,rn!==null&&gi(rn)&&(rn=null),Sr!==null&&gi(Sr)&&(Sr=null),Rr!==null&&gi(Rr)&&(Rr=null),Zi.forEach($s),ur.forEach($s)}function Ar(r,i){r.blockedOn===i&&(r.blockedOn=null,Ma||(Ma=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,au)))}function Pr(r){function i(d){return Ar(d,r)}if(0<Gr.length){Ar(Gr[0],r);for(var a=1;a<Gr.length;a++){var c=Gr[a];c.blockedOn===r&&(c.blockedOn=null)}}for(rn!==null&&Ar(rn,r),Sr!==null&&Ar(Sr,r),Rr!==null&&Ar(Rr,r),Zi.forEach(i),ur.forEach(i),a=0;a<Qr.length;a++)c=Qr[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Qr.length&&(a=Qr[0],a.blockedOn===null);)ou(a),a.blockedOn===null&&Qr.shift()}var yi=ne.ReactCurrentBatchConfig,es=!0;function _t(r,i,a,c){var d=Ye,g=yi.transition;yi.transition=null;try{Ye=1,Va(r,i,a,c)}finally{Ye=d,yi.transition=g}}function Mh(r,i,a,c){var d=Ye,g=yi.transition;yi.transition=null;try{Ye=4,Va(r,i,a,c)}finally{Ye=d,yi.transition=g}}function Va(r,i,a,c){if(es){var d=Do(r,i,a,c);if(d===null)qh(r,i,c,Hs,a),su(r,c);else if(Lh(d,r,i,a,c))c.stopPropagation();else if(su(r,c),i&4&&-1<bh.indexOf(r)){for(;d!==null;){var g=Xa(d);if(g!==null&&tu(g),g=Do(r,i,a,c),g===null&&qh(r,i,c,Hs,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else qh(r,i,c,null,a)}}var Hs=null;function Do(r,i,a,c){if(Hs=null,r=Ir(c),r=qs(r),r!==null)if(i=pe(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Ne(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Hs=r,null}function Ua(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qi()){case Gn:return 1;case fn:return 4;case nn:case Kr:return 16;case Ke:return 536870912;default:return 16}default:return 16}}var Yn=null,Oo=null,Ln=null;function Fa(){if(Ln)return Ln;var r,i=Oo,a=i.length,c,d="value"in Yn?Yn.value:Yn.textContent,g=d.length;for(r=0;r<a&&i[r]===d[r];r++);var _=a-r;for(c=1;c<=_&&i[a-c]===d[g-c];c++);return Ln=d.slice(r,1<c?1-c:void 0)}function bo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Yr(){return!0}function ja(){return!1}function sn(r){function i(a,c,d,g,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(a=r[P],this[P]=a?a(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yr:ja,this.isPropagationStopped=ja,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),i}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=sn(Cr),Xr=ue({},Cr,{view:0,detail:0}),Vh=sn(Xr),Mo,vi,ts,Ws=ue({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jr,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ts&&(ts&&r.type==="mousemove"?(Mo=r.screenX-ts.screenX,vi=r.screenY-ts.screenY):vi=Mo=0,ts=r),Mo)},movementY:function(r){return"movementY"in r?r.movementY:vi}}),Vo=sn(Ws),Ba=ue({},Ws,{dataTransfer:0}),lu=sn(Ba),Uo=ue({},Xr,{relatedTarget:0}),Fo=sn(Uo),uu=ue({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),_i=sn(uu),cu=ue({},Cr,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),hu=sn(cu),du=ue({},Cr,{data:0}),za=sn(du),jo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},An={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pu(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=fu[r])?!!i[r]:!1}function Jr(){return pu}var u=ue({},Xr,{key:function(r){if(r.key){var i=jo[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=bo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?An[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jr,charCode:function(r){return r.type==="keypress"?bo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?bo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=sn(u),v=ue({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),I=sn(v),j=ue({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jr}),K=sn(j),ae=ue({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lt=sn(ae),Ht=ue({},Ws,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ze=sn(Ht),Gt=[9,13,27,32],Ut=f&&"CompositionEvent"in window,cr=null;f&&"documentMode"in document&&(cr=document.documentMode);var Xn=f&&"TextEvent"in window&&!cr,Ks=f&&(!Ut||cr&&8<cr&&11>=cr),Bo=" ",sm=!1;function om(r,i){switch(r){case"keyup":return Gt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var zo=!1;function wE(r,i){switch(r){case"compositionend":return am(i);case"keypress":return i.which!==32?null:(sm=!0,Bo);case"textInput":return r=i.data,r===Bo&&sm?null:r;default:return null}}function EE(r,i){if(zo)return r==="compositionend"||!Ut&&om(r,i)?(r=Fa(),Ln=Oo=Yn=null,zo=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ks&&i.locale!=="ko"?null:i.data;default:return null}}var TE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lm(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!TE[r.type]:i==="textarea"}function um(r,i,a,c){Kn(c),i=_u(i,"onChange"),0<i.length&&(a=new Lo("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var $a=null,Ha=null;function IE(r){Pm(r,0)}function mu(r){var i=qo(r);if(it(i))return r}function SE(r,i){if(r==="change")return i}var cm=!1;if(f){var Uh;if(f){var Fh="oninput"in document;if(!Fh){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Fh=typeof hm.oninput=="function"}Uh=Fh}else Uh=!1;cm=Uh&&(!document.documentMode||9<document.documentMode)}function dm(){$a&&($a.detachEvent("onpropertychange",fm),Ha=$a=null)}function fm(r){if(r.propertyName==="value"&&mu(Ha)){var i=[];um(i,Ha,r,Ir(r)),Fs(IE,i)}}function RE(r,i,a){r==="focusin"?(dm(),$a=i,Ha=a,$a.attachEvent("onpropertychange",fm)):r==="focusout"&&dm()}function AE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return mu(Ha)}function PE(r,i){if(r==="click")return mu(i)}function CE(r,i){if(r==="input"||r==="change")return mu(i)}function kE(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var kr=typeof Object.is=="function"?Object.is:kE;function Wa(r,i){if(kr(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!kr(r[d],i[d]))return!1}return!0}function pm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function mm(r,i){var a=pm(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pm(a)}}function gm(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?gm(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function ym(){for(var r=window,i=Sn();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=Sn(r.document)}return i}function jh(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function xE(r){var i=ym(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&gm(a.ownerDocument.documentElement,a)){if(c!==null&&jh(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=mm(a,g);var _=mm(a,c);d&&_&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(i),r.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var NE=f&&"documentMode"in document&&11>=document.documentMode,$o=null,Bh=null,Ka=null,zh=!1;function vm(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;zh||$o==null||$o!==Sn(c)||(c=$o,"selectionStart"in c&&jh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ka&&Wa(Ka,c)||(Ka=c,c=_u(Bh,"onSelect"),0<c.length&&(i=new Lo("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=$o)))}function gu(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Ho={animationend:gu("Animation","AnimationEnd"),animationiteration:gu("Animation","AnimationIteration"),animationstart:gu("Animation","AnimationStart"),transitionend:gu("Transition","TransitionEnd")},$h={},_m={};f&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete Ho.animationend.animation,delete Ho.animationiteration.animation,delete Ho.animationstart.animation),"TransitionEvent"in window||delete Ho.transitionend.transition);function yu(r){if($h[r])return $h[r];if(!Ho[r])return r;var i=Ho[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in _m)return $h[r]=i[a];return r}var wm=yu("animationend"),Em=yu("animationiteration"),Tm=yu("animationstart"),Im=yu("transitionend"),Sm=new Map,Rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ns(r,i){Sm.set(r,i),l(i,[r])}for(var Hh=0;Hh<Rm.length;Hh++){var Wh=Rm[Hh],DE=Wh.toLowerCase(),OE=Wh[0].toUpperCase()+Wh.slice(1);ns(DE,"on"+OE)}ns(wm,"onAnimationEnd"),ns(Em,"onAnimationIteration"),ns(Tm,"onAnimationStart"),ns("dblclick","onDoubleClick"),ns("focusin","onFocus"),ns("focusout","onBlur"),ns(Im,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function Am(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,fe(c,i,void 0,r),r.currentTarget=null}function Pm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var _=c.length-1;0<=_;_--){var P=c[_],D=P.instance,W=P.currentTarget;if(P=P.listener,D!==g&&d.isPropagationStopped())break e;Am(d,P,W),g=D}else for(_=0;_<c.length;_++){if(P=c[_],D=P.instance,W=P.currentTarget,P=P.listener,D!==g&&d.isPropagationStopped())break e;Am(d,P,W),g=D}}}if(_e)throw r=Pe,_e=!1,Pe=null,r}function mt(r,i){var a=i[Zh];a===void 0&&(a=i[Zh]=new Set);var c=r+"__bubble";a.has(c)||(Cm(i,r,2,!1),a.add(c))}function Kh(r,i,a){var c=0;i&&(c|=4),Cm(a,r,c,i)}var vu="_reactListening"+Math.random().toString(36).slice(2);function Ga(r){if(!r[vu]){r[vu]=!0,s.forEach(function(a){a!=="selectionchange"&&(bE.has(a)||Kh(a,!1,r),Kh(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[vu]||(i[vu]=!0,Kh("selectionchange",!1,i))}}function Cm(r,i,a,c){switch(Ua(i)){case 1:var d=_t;break;case 4:d=Mh;break;default:d=Va}a=d.bind(null,i,a,r),d=void 0,!x||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function qh(r,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var P=c.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var D=_.tag;if((D===3||D===4)&&(D=_.stateNode.containerInfo,D===d||D.nodeType===8&&D.parentNode===d))return;_=_.return}for(;P!==null;){if(_=qs(P),_===null)return;if(D=_.tag,D===5||D===6){c=g=_;continue e}P=P.parentNode}}c=c.return}Fs(function(){var W=g,ee=Ir(a),re=[];e:{var J=Sm.get(r);if(J!==void 0){var he=Lo,Te=r;switch(r){case"keypress":if(bo(a)===0)break e;case"keydown":case"keyup":he=m;break;case"focusin":Te="focus",he=Fo;break;case"focusout":Te="blur",he=Fo;break;case"beforeblur":case"afterblur":he=Fo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=K;break;case wm:case Em:case Tm:he=_i;break;case Im:he=lt;break;case"scroll":he=Vh;break;case"wheel":he=Ze;break;case"copy":case"cut":case"paste":he=hu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=I}var Ie=(i&4)!==0,bt=!Ie&&r==="scroll",B=Ie?J!==null?J+"Capture":null:J;Ie=[];for(var b=W,$;b!==null;){$=b;var oe=$.stateNode;if($.tag===5&&oe!==null&&($=oe,B!==null&&(oe=St(b,B),oe!=null&&Ie.push(Qa(b,oe,$)))),bt)break;b=b.return}0<Ie.length&&(J=new he(J,Te,null,a,ee),re.push({event:J,listeners:Ie}))}}if((i&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",he=r==="mouseout"||r==="pointerout",J&&a!==zr&&(Te=a.relatedTarget||a.fromElement)&&(qs(Te)||Te[wi]))break e;if((he||J)&&(J=ee.window===ee?ee:(J=ee.ownerDocument)?J.defaultView||J.parentWindow:window,he?(Te=a.relatedTarget||a.toElement,he=W,Te=Te?qs(Te):null,Te!==null&&(bt=pe(Te),Te!==bt||Te.tag!==5&&Te.tag!==6)&&(Te=null)):(he=null,Te=W),he!==Te)){if(Ie=Vo,oe="onMouseLeave",B="onMouseEnter",b="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=I,oe="onPointerLeave",B="onPointerEnter",b="pointer"),bt=he==null?J:qo(he),$=Te==null?J:qo(Te),J=new Ie(oe,b+"leave",he,a,ee),J.target=bt,J.relatedTarget=$,oe=null,qs(ee)===W&&(Ie=new Ie(B,b+"enter",Te,a,ee),Ie.target=$,Ie.relatedTarget=bt,oe=Ie),bt=oe,he&&Te)t:{for(Ie=he,B=Te,b=0,$=Ie;$;$=Wo($))b++;for($=0,oe=B;oe;oe=Wo(oe))$++;for(;0<b-$;)Ie=Wo(Ie),b--;for(;0<$-b;)B=Wo(B),$--;for(;b--;){if(Ie===B||B!==null&&Ie===B.alternate)break t;Ie=Wo(Ie),B=Wo(B)}Ie=null}else Ie=null;he!==null&&km(re,J,he,Ie,!1),Te!==null&&bt!==null&&km(re,bt,Te,Ie,!0)}}e:{if(J=W?qo(W):window,he=J.nodeName&&J.nodeName.toLowerCase(),he==="select"||he==="input"&&J.type==="file")var Se=SE;else if(lm(J))if(cm)Se=CE;else{Se=AE;var Ce=RE}else(he=J.nodeName)&&he.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(Se=PE);if(Se&&(Se=Se(r,W))){um(re,Se,a,ee);break e}Ce&&Ce(r,J,W),r==="focusout"&&(Ce=J._wrapperState)&&Ce.controlled&&J.type==="number"&&di(J,"number",J.value)}switch(Ce=W?qo(W):window,r){case"focusin":(lm(Ce)||Ce.contentEditable==="true")&&($o=Ce,Bh=W,Ka=null);break;case"focusout":Ka=Bh=$o=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,vm(re,a,ee);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":vm(re,a,ee)}var ke;if(Ut)e:{switch(r){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else zo?om(r,a)&&(Le="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Ks&&a.locale!=="ko"&&(zo||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&zo&&(ke=Fa()):(Yn=ee,Oo="value"in Yn?Yn.value:Yn.textContent,zo=!0)),Ce=_u(W,Le),0<Ce.length&&(Le=new za(Le,r,null,a,ee),re.push({event:Le,listeners:Ce}),ke?Le.data=ke:(ke=am(a),ke!==null&&(Le.data=ke)))),(ke=Xn?wE(r,a):EE(r,a))&&(W=_u(W,"onBeforeInput"),0<W.length&&(ee=new za("onBeforeInput","beforeinput",null,a,ee),re.push({event:ee,listeners:W}),ee.data=ke))}Pm(re,i)})}function Qa(r,i,a){return{instance:r,listener:i,currentTarget:a}}function _u(r,i){for(var a=i+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=St(r,a),g!=null&&c.unshift(Qa(r,g,d)),g=St(r,i),g!=null&&c.push(Qa(r,g,d))),r=r.return}return c}function Wo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function km(r,i,a,c,d){for(var g=i._reactName,_=[];a!==null&&a!==c;){var P=a,D=P.alternate,W=P.stateNode;if(D!==null&&D===c)break;P.tag===5&&W!==null&&(P=W,d?(D=St(a,g),D!=null&&_.unshift(Qa(a,D,P))):d||(D=St(a,g),D!=null&&_.push(Qa(a,D,P)))),a=a.return}_.length!==0&&r.push({event:i,listeners:_})}var LE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function xm(r){return(typeof r=="string"?r:""+r).replace(LE,`
`).replace(ME,"")}function wu(r,i,a){if(i=xm(i),xm(r)!==i&&a)throw Error(t(425))}function Eu(){}var Gh=null,Qh=null;function Yh(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xh=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(r){return Nm.resolve(null).then(r).catch(FE)}:Xh;function FE(r){setTimeout(function(){throw r})}function Jh(r,i){var a=i,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Pr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Pr(i)}function rs(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function Dm(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Zr="__reactFiber$"+Ko,Ya="__reactProps$"+Ko,wi="__reactContainer$"+Ko,Zh="__reactEvents$"+Ko,jE="__reactListeners$"+Ko,BE="__reactHandles$"+Ko;function qs(r){var i=r[Zr];if(i)return i;for(var a=r.parentNode;a;){if(i=a[wi]||a[Zr]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=Dm(r);r!==null;){if(a=r[Zr])return a;r=Dm(r)}return i}r=a,a=r.parentNode}return null}function Xa(r){return r=r[Zr]||r[wi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function qo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Tu(r){return r[Ya]||null}var ed=[],Go=-1;function is(r){return{current:r}}function gt(r){0>Go||(r.current=ed[Go],ed[Go]=null,Go--)}function ft(r,i){Go++,ed[Go]=r.current,r.current=i}var ss={},pn=is(ss),Mn=is(!1),Gs=ss;function Qo(r,i){var a=r.type.contextTypes;if(!a)return ss;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Vn(r){return r=r.childContextTypes,r!=null}function Iu(){gt(Mn),gt(pn)}function Om(r,i,a){if(pn.current!==ss)throw Error(t(168));ft(pn,i),ft(Mn,a)}function bm(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ve(r)||"Unknown",d));return ue({},a,c)}function Su(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ss,Gs=pn.current,ft(pn,r),ft(Mn,Mn.current),!0}function Lm(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=bm(r,i,Gs),c.__reactInternalMemoizedMergedChildContext=r,gt(Mn),gt(pn),ft(pn,r)):gt(Mn),ft(Mn,a)}var Ei=null,Ru=!1,td=!1;function Mm(r){Ei===null?Ei=[r]:Ei.push(r)}function zE(r){Ru=!0,Mm(r)}function os(){if(!td&&Ei!==null){td=!0;var r=0,i=Ye;try{var a=Ei;for(Ye=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ei=null,Ru=!1}catch(d){throw Ei!==null&&(Ei=Ei.slice(r+1)),at(Gn,os),d}finally{Ye=i,td=!1}}return null}var Yo=[],Xo=0,Au=null,Pu=0,hr=[],dr=0,Qs=null,Ti=1,Ii="";function Ys(r,i){Yo[Xo++]=Pu,Yo[Xo++]=Au,Au=r,Pu=i}function Vm(r,i,a){hr[dr++]=Ti,hr[dr++]=Ii,hr[dr++]=Qs,Qs=r;var c=Ti;r=Ii;var d=32-Qe(c)-1;c&=~(1<<d),a+=1;var g=32-Qe(i)+d;if(30<g){var _=d-d%5;g=(c&(1<<_)-1).toString(32),c>>=_,d-=_,Ti=1<<32-Qe(i)+d|a<<d|c,Ii=g+r}else Ti=1<<g|a<<d|c,Ii=r}function nd(r){r.return!==null&&(Ys(r,1),Vm(r,1,0))}function rd(r){for(;r===Au;)Au=Yo[--Xo],Yo[Xo]=null,Pu=Yo[--Xo],Yo[Xo]=null;for(;r===Qs;)Qs=hr[--dr],hr[dr]=null,Ii=hr[--dr],hr[dr]=null,Ti=hr[--dr],hr[dr]=null}var Jn=null,Zn=null,wt=!1,xr=null;function Um(r,i){var a=gr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function Fm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Jn=r,Zn=rs(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Jn=r,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Qs!==null?{id:Ti,overflow:Ii}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gr(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Jn=r,Zn=null,!0):!1;default:return!1}}function id(r){return(r.mode&1)!==0&&(r.flags&128)===0}function sd(r){if(wt){var i=Zn;if(i){var a=i;if(!Fm(r,i)){if(id(r))throw Error(t(418));i=rs(a.nextSibling);var c=Jn;i&&Fm(r,i)?Um(c,a):(r.flags=r.flags&-4097|2,wt=!1,Jn=r)}}else{if(id(r))throw Error(t(418));r.flags=r.flags&-4097|2,wt=!1,Jn=r}}}function jm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Jn=r}function Cu(r){if(r!==Jn)return!1;if(!wt)return jm(r),wt=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Yh(r.type,r.memoizedProps)),i&&(i=Zn)){if(id(r))throw Bm(),Error(t(418));for(;i;)Um(r,i),i=rs(i.nextSibling)}if(jm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Zn=rs(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Zn=null}}else Zn=Jn?rs(r.stateNode.nextSibling):null;return!0}function Bm(){for(var r=Zn;r;)r=rs(r.nextSibling)}function Jo(){Zn=Jn=null,wt=!1}function od(r){xr===null?xr=[r]:xr.push(r)}var $E=ne.ReactCurrentBatchConfig;function Ja(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(_){var P=d.refs;_===null?delete P[g]:P[g]=_},i._stringRef=g,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ku(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function zm(r){var i=r._init;return i(r._payload)}function $m(r){function i(B,b){if(r){var $=B.deletions;$===null?(B.deletions=[b],B.flags|=16):$.push(b)}}function a(B,b){if(!r)return null;for(;b!==null;)i(B,b),b=b.sibling;return null}function c(B,b){for(B=new Map;b!==null;)b.key!==null?B.set(b.key,b):B.set(b.index,b),b=b.sibling;return B}function d(B,b){return B=ps(B,b),B.index=0,B.sibling=null,B}function g(B,b,$){return B.index=$,r?($=B.alternate,$!==null?($=$.index,$<b?(B.flags|=2,b):$):(B.flags|=2,b)):(B.flags|=1048576,b)}function _(B){return r&&B.alternate===null&&(B.flags|=2),B}function P(B,b,$,oe){return b===null||b.tag!==6?(b=Xd($,B.mode,oe),b.return=B,b):(b=d(b,$),b.return=B,b)}function D(B,b,$,oe){var Se=$.type;return Se===E?ee(B,b,$.props.children,oe,$.key):b!==null&&(b.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===Tt&&zm(Se)===b.type)?(oe=d(b,$.props),oe.ref=Ja(B,b,$),oe.return=B,oe):(oe=Zu($.type,$.key,$.props,null,B.mode,oe),oe.ref=Ja(B,b,$),oe.return=B,oe)}function W(B,b,$,oe){return b===null||b.tag!==4||b.stateNode.containerInfo!==$.containerInfo||b.stateNode.implementation!==$.implementation?(b=Jd($,B.mode,oe),b.return=B,b):(b=d(b,$.children||[]),b.return=B,b)}function ee(B,b,$,oe,Se){return b===null||b.tag!==7?(b=io($,B.mode,oe,Se),b.return=B,b):(b=d(b,$),b.return=B,b)}function re(B,b,$){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Xd(""+b,B.mode,$),b.return=B,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case de:return $=Zu(b.type,b.key,b.props,null,B.mode,$),$.ref=Ja(B,null,b),$.return=B,$;case ce:return b=Jd(b,B.mode,$),b.return=B,b;case Tt:var oe=b._init;return re(B,oe(b._payload),$)}if(_r(b)||me(b))return b=io(b,B.mode,$,null),b.return=B,b;ku(B,b)}return null}function J(B,b,$,oe){var Se=b!==null?b.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Se!==null?null:P(B,b,""+$,oe);if(typeof $=="object"&&$!==null){switch($.$$typeof){case de:return $.key===Se?D(B,b,$,oe):null;case ce:return $.key===Se?W(B,b,$,oe):null;case Tt:return Se=$._init,J(B,b,Se($._payload),oe)}if(_r($)||me($))return Se!==null?null:ee(B,b,$,oe,null);ku(B,$)}return null}function he(B,b,$,oe,Se){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return B=B.get($)||null,P(b,B,""+oe,Se);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case de:return B=B.get(oe.key===null?$:oe.key)||null,D(b,B,oe,Se);case ce:return B=B.get(oe.key===null?$:oe.key)||null,W(b,B,oe,Se);case Tt:var Ce=oe._init;return he(B,b,$,Ce(oe._payload),Se)}if(_r(oe)||me(oe))return B=B.get($)||null,ee(b,B,oe,Se,null);ku(b,oe)}return null}function Te(B,b,$,oe){for(var Se=null,Ce=null,ke=b,Le=b=0,Xt=null;ke!==null&&Le<$.length;Le++){ke.index>Le?(Xt=ke,ke=null):Xt=ke.sibling;var rt=J(B,ke,$[Le],oe);if(rt===null){ke===null&&(ke=Xt);break}r&&ke&&rt.alternate===null&&i(B,ke),b=g(rt,b,Le),Ce===null?Se=rt:Ce.sibling=rt,Ce=rt,ke=Xt}if(Le===$.length)return a(B,ke),wt&&Ys(B,Le),Se;if(ke===null){for(;Le<$.length;Le++)ke=re(B,$[Le],oe),ke!==null&&(b=g(ke,b,Le),Ce===null?Se=ke:Ce.sibling=ke,Ce=ke);return wt&&Ys(B,Le),Se}for(ke=c(B,ke);Le<$.length;Le++)Xt=he(ke,B,Le,$[Le],oe),Xt!==null&&(r&&Xt.alternate!==null&&ke.delete(Xt.key===null?Le:Xt.key),b=g(Xt,b,Le),Ce===null?Se=Xt:Ce.sibling=Xt,Ce=Xt);return r&&ke.forEach(function(ms){return i(B,ms)}),wt&&Ys(B,Le),Se}function Ie(B,b,$,oe){var Se=me($);if(typeof Se!="function")throw Error(t(150));if($=Se.call($),$==null)throw Error(t(151));for(var Ce=Se=null,ke=b,Le=b=0,Xt=null,rt=$.next();ke!==null&&!rt.done;Le++,rt=$.next()){ke.index>Le?(Xt=ke,ke=null):Xt=ke.sibling;var ms=J(B,ke,rt.value,oe);if(ms===null){ke===null&&(ke=Xt);break}r&&ke&&ms.alternate===null&&i(B,ke),b=g(ms,b,Le),Ce===null?Se=ms:Ce.sibling=ms,Ce=ms,ke=Xt}if(rt.done)return a(B,ke),wt&&Ys(B,Le),Se;if(ke===null){for(;!rt.done;Le++,rt=$.next())rt=re(B,rt.value,oe),rt!==null&&(b=g(rt,b,Le),Ce===null?Se=rt:Ce.sibling=rt,Ce=rt);return wt&&Ys(B,Le),Se}for(ke=c(B,ke);!rt.done;Le++,rt=$.next())rt=he(ke,B,Le,rt.value,oe),rt!==null&&(r&&rt.alternate!==null&&ke.delete(rt.key===null?Le:rt.key),b=g(rt,b,Le),Ce===null?Se=rt:Ce.sibling=rt,Ce=rt);return r&&ke.forEach(function(TT){return i(B,TT)}),wt&&Ys(B,Le),Se}function bt(B,b,$,oe){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case de:e:{for(var Se=$.key,Ce=b;Ce!==null;){if(Ce.key===Se){if(Se=$.type,Se===E){if(Ce.tag===7){a(B,Ce.sibling),b=d(Ce,$.props.children),b.return=B,B=b;break e}}else if(Ce.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===Tt&&zm(Se)===Ce.type){a(B,Ce.sibling),b=d(Ce,$.props),b.ref=Ja(B,Ce,$),b.return=B,B=b;break e}a(B,Ce);break}else i(B,Ce);Ce=Ce.sibling}$.type===E?(b=io($.props.children,B.mode,oe,$.key),b.return=B,B=b):(oe=Zu($.type,$.key,$.props,null,B.mode,oe),oe.ref=Ja(B,b,$),oe.return=B,B=oe)}return _(B);case ce:e:{for(Ce=$.key;b!==null;){if(b.key===Ce)if(b.tag===4&&b.stateNode.containerInfo===$.containerInfo&&b.stateNode.implementation===$.implementation){a(B,b.sibling),b=d(b,$.children||[]),b.return=B,B=b;break e}else{a(B,b);break}else i(B,b);b=b.sibling}b=Jd($,B.mode,oe),b.return=B,B=b}return _(B);case Tt:return Ce=$._init,bt(B,b,Ce($._payload),oe)}if(_r($))return Te(B,b,$,oe);if(me($))return Ie(B,b,$,oe);ku(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,b!==null&&b.tag===6?(a(B,b.sibling),b=d(b,$),b.return=B,B=b):(a(B,b),b=Xd($,B.mode,oe),b.return=B,B=b),_(B)):a(B,b)}return bt}var Zo=$m(!0),Hm=$m(!1),xu=is(null),Nu=null,ea=null,ad=null;function ld(){ad=ea=Nu=null}function ud(r){var i=xu.current;gt(xu),r._currentValue=i}function cd(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function ta(r,i){Nu=r,ad=ea=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Un=!0),r.firstContext=null)}function fr(r){var i=r._currentValue;if(ad!==r)if(r={context:r,memoizedValue:i,next:null},ea===null){if(Nu===null)throw Error(t(308));ea=r,Nu.dependencies={lanes:0,firstContext:r}}else ea=ea.next=r;return i}var Xs=null;function hd(r){Xs===null?Xs=[r]:Xs.push(r)}function Wm(r,i,a,c){var d=i.interleaved;return d===null?(a.next=a,hd(i)):(a.next=d.next,d.next=a),i.interleaved=a,Si(r,c)}function Si(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var as=!1;function dd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Km(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Ri(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function ls(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(tt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Si(r,a)}return d=c.interleaved,d===null?(i.next=i,hd(c)):(i.next=d.next,d.next=i),c.interleaved=i,Si(r,a)}function Du(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Xi(r,a)}}function qm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=_:g=g.next=_,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function Ou(r,i,a,c){var d=r.updateQueue;as=!1;var g=d.firstBaseUpdate,_=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var D=P,W=D.next;D.next=null,_===null?g=W:_.next=W,_=D;var ee=r.alternate;ee!==null&&(ee=ee.updateQueue,P=ee.lastBaseUpdate,P!==_&&(P===null?ee.firstBaseUpdate=W:P.next=W,ee.lastBaseUpdate=D))}if(g!==null){var re=d.baseState;_=0,ee=W=D=null,P=g;do{var J=P.lane,he=P.eventTime;if((c&J)===J){ee!==null&&(ee=ee.next={eventTime:he,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Te=r,Ie=P;switch(J=i,he=a,Ie.tag){case 1:if(Te=Ie.payload,typeof Te=="function"){re=Te.call(he,re,J);break e}re=Te;break e;case 3:Te.flags=Te.flags&-65537|128;case 0:if(Te=Ie.payload,J=typeof Te=="function"?Te.call(he,re,J):Te,J==null)break e;re=ue({},re,J);break e;case 2:as=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,J=d.effects,J===null?d.effects=[P]:J.push(P))}else he={eventTime:he,lane:J,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ee===null?(W=ee=he,D=re):ee=ee.next=he,_|=J;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;J=P,P=J.next,J.next=null,d.lastBaseUpdate=J,d.shared.pending=null}}while(!0);if(ee===null&&(D=re),d.baseState=D,d.firstBaseUpdate=W,d.lastBaseUpdate=ee,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);eo|=_,r.lanes=_,r.memoizedState=re}}function Gm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Za={},ei=is(Za),el=is(Za),tl=is(Za);function Js(r){if(r===Za)throw Error(t(174));return r}function fd(r,i){switch(ft(tl,i),ft(el,r),ft(ei,Za),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:It(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=It(i,r)}gt(ei),ft(ei,i)}function na(){gt(ei),gt(el),gt(tl)}function Qm(r){Js(tl.current);var i=Js(ei.current),a=It(i,r.type);i!==a&&(ft(el,r),ft(ei,a))}function pd(r){el.current===r&&(gt(ei),gt(el))}var Rt=is(0);function bu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var md=[];function gd(){for(var r=0;r<md.length;r++)md[r]._workInProgressVersionPrimary=null;md.length=0}var Lu=ne.ReactCurrentDispatcher,yd=ne.ReactCurrentBatchConfig,Zs=0,At=null,Wt=null,Qt=null,Mu=!1,nl=!1,rl=0,HE=0;function mn(){throw Error(t(321))}function vd(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!kr(r[a],i[a]))return!1;return!0}function _d(r,i,a,c,d,g){if(Zs=g,At=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Lu.current=r===null||r.memoizedState===null?GE:QE,r=a(c,d),nl){g=0;do{if(nl=!1,rl=0,25<=g)throw Error(t(301));g+=1,Qt=Wt=null,i.updateQueue=null,Lu.current=YE,r=a(c,d)}while(nl)}if(Lu.current=Fu,i=Wt!==null&&Wt.next!==null,Zs=0,Qt=Wt=At=null,Mu=!1,i)throw Error(t(300));return r}function wd(){var r=rl!==0;return rl=0,r}function ti(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?At.memoizedState=Qt=r:Qt=Qt.next=r,Qt}function pr(){if(Wt===null){var r=At.alternate;r=r!==null?r.memoizedState:null}else r=Wt.next;var i=Qt===null?At.memoizedState:Qt.next;if(i!==null)Qt=i,Wt=r;else{if(r===null)throw Error(t(310));Wt=r,r={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Qt===null?At.memoizedState=Qt=r:Qt=Qt.next=r}return Qt}function il(r,i){return typeof i=="function"?i(r):i}function Ed(r){var i=pr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=Wt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var _=d.next;d.next=g.next,g.next=_}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var P=_=null,D=null,W=g;do{var ee=W.lane;if((Zs&ee)===ee)D!==null&&(D=D.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),c=W.hasEagerState?W.eagerState:r(c,W.action);else{var re={lane:ee,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};D===null?(P=D=re,_=c):D=D.next=re,At.lanes|=ee,eo|=ee}W=W.next}while(W!==null&&W!==g);D===null?_=c:D.next=P,kr(c,i.memoizedState)||(Un=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=D,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,At.lanes|=g,eo|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Td(r){var i=pr(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do g=r(g,_.action),_=_.next;while(_!==d);kr(g,i.memoizedState)||(Un=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Ym(){}function Xm(r,i){var a=At,c=pr(),d=i(),g=!kr(c.memoizedState,d);if(g&&(c.memoizedState=d,Un=!0),c=c.queue,Id(eg.bind(null,a,c,r),[r]),c.getSnapshot!==i||g||Qt!==null&&Qt.memoizedState.tag&1){if(a.flags|=2048,sl(9,Zm.bind(null,a,c,d,i),void 0,null),Yt===null)throw Error(t(349));(Zs&30)!==0||Jm(a,i,d)}return d}function Jm(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=At.updateQueue,i===null?(i={lastEffect:null,stores:null},At.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Zm(r,i,a,c){i.value=a,i.getSnapshot=c,tg(i)&&ng(r)}function eg(r,i,a){return a(function(){tg(i)&&ng(r)})}function tg(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!kr(r,a)}catch{return!0}}function ng(r){var i=Si(r,1);i!==null&&br(i,r,1,-1)}function rg(r){var i=ti();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:r},i.queue=r,r=r.dispatch=qE.bind(null,At,r),[i.memoizedState,r]}function sl(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=At.updateQueue,i===null?(i={lastEffect:null,stores:null},At.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function ig(){return pr().memoizedState}function Vu(r,i,a,c){var d=ti();At.flags|=r,d.memoizedState=sl(1|i,a,void 0,c===void 0?null:c)}function Uu(r,i,a,c){var d=pr();c=c===void 0?null:c;var g=void 0;if(Wt!==null){var _=Wt.memoizedState;if(g=_.destroy,c!==null&&vd(c,_.deps)){d.memoizedState=sl(i,a,g,c);return}}At.flags|=r,d.memoizedState=sl(1|i,a,g,c)}function sg(r,i){return Vu(8390656,8,r,i)}function Id(r,i){return Uu(2048,8,r,i)}function og(r,i){return Uu(4,2,r,i)}function ag(r,i){return Uu(4,4,r,i)}function lg(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function ug(r,i,a){return a=a!=null?a.concat([r]):null,Uu(4,4,lg.bind(null,i,r),a)}function Sd(){}function cg(r,i){var a=pr();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vd(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function hg(r,i){var a=pr();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vd(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function dg(r,i,a){return(Zs&21)===0?(r.baseState&&(r.baseState=!1,Un=!0),r.memoizedState=a):(kr(a,i)||(a=zs(),At.lanes|=a,eo|=a,r.baseState=!0),i)}function WE(r,i){var a=Ye;Ye=a!==0&&4>a?a:4,r(!0);var c=yd.transition;yd.transition={};try{r(!1),i()}finally{Ye=a,yd.transition=c}}function fg(){return pr().memoizedState}function KE(r,i,a){var c=ds(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},pg(r))mg(i,a);else if(a=Wm(r,i,a,c),a!==null){var d=Cn();br(a,r,c,d),gg(a,i,c)}}function qE(r,i,a){var c=ds(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(pg(r))mg(i,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var _=i.lastRenderedState,P=g(_,a);if(d.hasEagerState=!0,d.eagerState=P,kr(P,_)){var D=i.interleaved;D===null?(d.next=d,hd(i)):(d.next=D.next,D.next=d),i.interleaved=d;return}}catch{}finally{}a=Wm(r,i,d,c),a!==null&&(d=Cn(),br(a,r,c,d),gg(a,i,c))}}function pg(r){var i=r.alternate;return r===At||i!==null&&i===At}function mg(r,i){nl=Mu=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function gg(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Xi(r,a)}}var Fu={readContext:fr,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},GE={readContext:fr,useCallback:function(r,i){return ti().memoizedState=[r,i===void 0?null:i],r},useContext:fr,useEffect:sg,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,Vu(4194308,4,lg.bind(null,i,r),a)},useLayoutEffect:function(r,i){return Vu(4194308,4,r,i)},useInsertionEffect:function(r,i){return Vu(4,2,r,i)},useMemo:function(r,i){var a=ti();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=ti();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=KE.bind(null,At,r),[c.memoizedState,r]},useRef:function(r){var i=ti();return r={current:r},i.memoizedState=r},useState:rg,useDebugValue:Sd,useDeferredValue:function(r){return ti().memoizedState=r},useTransition:function(){var r=rg(!1),i=r[0];return r=WE.bind(null,r[1]),ti().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=At,d=ti();if(wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Yt===null)throw Error(t(349));(Zs&30)!==0||Jm(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,sg(eg.bind(null,c,g,r),[r]),c.flags|=2048,sl(9,Zm.bind(null,c,g,a,i),void 0,null),a},useId:function(){var r=ti(),i=Yt.identifierPrefix;if(wt){var a=Ii,c=Ti;a=(c&~(1<<32-Qe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=rl++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=HE++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},QE={readContext:fr,useCallback:cg,useContext:fr,useEffect:Id,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:hg,useReducer:Ed,useRef:ig,useState:function(){return Ed(il)},useDebugValue:Sd,useDeferredValue:function(r){var i=pr();return dg(i,Wt.memoizedState,r)},useTransition:function(){var r=Ed(il)[0],i=pr().memoizedState;return[r,i]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:fg,unstable_isNewReconciler:!1},YE={readContext:fr,useCallback:cg,useContext:fr,useEffect:Id,useImperativeHandle:ug,useInsertionEffect:og,useLayoutEffect:ag,useMemo:hg,useReducer:Td,useRef:ig,useState:function(){return Td(il)},useDebugValue:Sd,useDeferredValue:function(r){var i=pr();return Wt===null?i.memoizedState=r:dg(i,Wt.memoizedState,r)},useTransition:function(){var r=Td(il)[0],i=pr().memoizedState;return[r,i]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:fg,unstable_isNewReconciler:!1};function Nr(r,i){if(r&&r.defaultProps){i=ue({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function Rd(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ju={isMounted:function(r){return(r=r._reactInternals)?pe(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Cn(),d=ds(r),g=Ri(c,d);g.payload=i,a!=null&&(g.callback=a),i=ls(r,g,d),i!==null&&(br(i,r,d,c),Du(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Cn(),d=ds(r),g=Ri(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ls(r,g,d),i!==null&&(br(i,r,d,c),Du(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Cn(),c=ds(r),d=Ri(a,c);d.tag=2,i!=null&&(d.callback=i),i=ls(r,d,c),i!==null&&(br(i,r,c,a),Du(i,r,c))}};function yg(r,i,a,c,d,g,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,_):i.prototype&&i.prototype.isPureReactComponent?!Wa(a,c)||!Wa(d,g):!0}function vg(r,i,a){var c=!1,d=ss,g=i.contextType;return typeof g=="object"&&g!==null?g=fr(g):(d=Vn(i)?Gs:pn.current,c=i.contextTypes,g=(c=c!=null)?Qo(r,d):ss),i=new i(a,g),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ju,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),i}function _g(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&ju.enqueueReplaceState(i,i.state,null)}function Ad(r,i,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},dd(r);var g=i.contextType;typeof g=="object"&&g!==null?d.context=fr(g):(g=Vn(i)?Gs:pn.current,d.context=Qo(r,g)),d.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Rd(r,i,g,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ju.enqueueReplaceState(d,d.state,null),Ou(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ra(r,i){try{var a="",c=i;do a+=Re(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:i,stack:d,digest:null}}function Pd(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function Cd(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var XE=typeof WeakMap=="function"?WeakMap:Map;function wg(r,i,a){a=Ri(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){qu||(qu=!0,$d=c),Cd(r,i)},a}function Eg(r,i,a){a=Ri(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Cd(r,i)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Cd(r,i),typeof c!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Tg(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new XE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),r=hT.bind(null,r,i,a),i.then(r,r))}function Ig(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Sg(r,i,a,c,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ri(-1,1),i.tag=2,ls(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var JE=ne.ReactCurrentOwner,Un=!1;function Pn(r,i,a,c){i.child=r===null?Hm(i,null,a,c):Zo(i,r.child,a,c)}function Rg(r,i,a,c,d){a=a.render;var g=i.ref;return ta(i,d),c=_d(r,i,a,c,g,d),a=wd(),r!==null&&!Un?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Ai(r,i,d)):(wt&&a&&nd(i),i.flags|=1,Pn(r,i,c,d),i.child)}function Ag(r,i,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Yd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Pg(r,i,g,c,d)):(r=Zu(a.type,null,c,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(g=r.child,(r.lanes&d)===0){var _=g.memoizedProps;if(a=a.compare,a=a!==null?a:Wa,a(_,c)&&r.ref===i.ref)return Ai(r,i,d)}return i.flags|=1,r=ps(g,c),r.ref=i.ref,r.return=i,i.child=r}function Pg(r,i,a,c,d){if(r!==null){var g=r.memoizedProps;if(Wa(g,c)&&r.ref===i.ref)if(Un=!1,i.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Un=!0);else return i.lanes=r.lanes,Ai(r,i,d)}return kd(r,i,a,c,d)}function Cg(r,i,a){var c=i.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(sa,er),er|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,ft(sa,er),er|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,ft(sa,er),er|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,ft(sa,er),er|=c;return Pn(r,i,d,a),i.child}function kg(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kd(r,i,a,c,d){var g=Vn(a)?Gs:pn.current;return g=Qo(i,g),ta(i,d),a=_d(r,i,a,c,g,d),c=wd(),r!==null&&!Un?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,Ai(r,i,d)):(wt&&c&&nd(i),i.flags|=1,Pn(r,i,a,d),i.child)}function xg(r,i,a,c,d){if(Vn(a)){var g=!0;Su(i)}else g=!1;if(ta(i,d),i.stateNode===null)zu(r,i),vg(i,a,c),Ad(i,a,c,d),c=!0;else if(r===null){var _=i.stateNode,P=i.memoizedProps;_.props=P;var D=_.context,W=a.contextType;typeof W=="object"&&W!==null?W=fr(W):(W=Vn(a)?Gs:pn.current,W=Qo(i,W));var ee=a.getDerivedStateFromProps,re=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function";re||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==c||D!==W)&&_g(i,_,c,W),as=!1;var J=i.memoizedState;_.state=J,Ou(i,c,_,d),D=i.memoizedState,P!==c||J!==D||Mn.current||as?(typeof ee=="function"&&(Rd(i,a,ee,c),D=i.memoizedState),(P=as||yg(i,a,P,c,J,D,W))?(re||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=D),_.props=c,_.state=D,_.context=W,c=P):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,Km(r,i),P=i.memoizedProps,W=i.type===i.elementType?P:Nr(i.type,P),_.props=W,re=i.pendingProps,J=_.context,D=a.contextType,typeof D=="object"&&D!==null?D=fr(D):(D=Vn(a)?Gs:pn.current,D=Qo(i,D));var he=a.getDerivedStateFromProps;(ee=typeof he=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(P!==re||J!==D)&&_g(i,_,c,D),as=!1,J=i.memoizedState,_.state=J,Ou(i,c,_,d);var Te=i.memoizedState;P!==re||J!==Te||Mn.current||as?(typeof he=="function"&&(Rd(i,a,he,c),Te=i.memoizedState),(W=as||yg(i,a,W,c,J,Te,D)||!1)?(ee||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,Te,D),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,Te,D)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||P===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Te),_.props=c,_.state=Te,_.context=D,c=W):(typeof _.componentDidUpdate!="function"||P===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),c=!1)}return xd(r,i,a,c,g,d)}function xd(r,i,a,c,d,g){kg(r,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&Lm(i,a,!1),Ai(r,i,g);c=i.stateNode,JE.current=i;var P=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&_?(i.child=Zo(i,r.child,null,g),i.child=Zo(i,null,P,g)):Pn(r,i,P,g),i.memoizedState=c.state,d&&Lm(i,a,!0),i.child}function Ng(r){var i=r.stateNode;i.pendingContext?Om(r,i.pendingContext,i.pendingContext!==i.context):i.context&&Om(r,i.context,!1),fd(r,i.containerInfo)}function Dg(r,i,a,c,d){return Jo(),od(d),i.flags|=256,Pn(r,i,a,c),i.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Dd(r){return{baseLanes:r,cachePool:null,transitions:null}}function Og(r,i,a){var c=i.pendingProps,d=Rt.current,g=!1,_=(i.flags&128)!==0,P;if((P=_)||(P=r!==null&&r.memoizedState===null?!1:(d&2)!==0),P?(g=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),ft(Rt,d&1),r===null)return sd(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,r=c.fallback,g?(c=i.mode,g=i.child,_={mode:"hidden",children:_},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=_):g=ec(_,c,0,null),r=io(r,c,a,null),g.return=i,r.return=i,g.sibling=r,i.child=g,i.child.memoizedState=Dd(a),i.memoizedState=Nd,r):Od(i,_));if(d=r.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return ZE(r,i,_,c,P,d,a);if(g){g=c.fallback,_=i.mode,d=r.child,P=d.sibling;var D={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=D,i.deletions=null):(c=ps(d,D),c.subtreeFlags=d.subtreeFlags&14680064),P!==null?g=ps(P,g):(g=io(g,_,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,_=r.child.memoizedState,_=_===null?Dd(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},g.memoizedState=_,g.childLanes=r.childLanes&~a,i.memoizedState=Nd,c}return g=r.child,r=g.sibling,c=ps(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function Od(r,i){return i=ec({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Bu(r,i,a,c){return c!==null&&od(c),Zo(i,r.child,null,a),r=Od(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function ZE(r,i,a,c,d,g,_){if(a)return i.flags&256?(i.flags&=-257,c=Pd(Error(t(422))),Bu(r,i,_,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=ec({mode:"visible",children:c.children},d,0,null),g=io(g,d,_,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Zo(i,r.child,null,_),i.child.memoizedState=Dd(_),i.memoizedState=Nd,g);if((i.mode&1)===0)return Bu(r,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var P=c.dgst;return c=P,g=Error(t(419)),c=Pd(g,c,void 0),Bu(r,i,_,c)}if(P=(_&r.childLanes)!==0,Un||P){if(c=Yt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Si(r,d),br(c,r,d,-1))}return Qd(),c=Pd(Error(t(421))),Bu(r,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=dT.bind(null,r),d._reactRetry=i,null):(r=g.treeContext,Zn=rs(d.nextSibling),Jn=i,wt=!0,xr=null,r!==null&&(hr[dr++]=Ti,hr[dr++]=Ii,hr[dr++]=Qs,Ti=r.id,Ii=r.overflow,Qs=i),i=Od(i,c.children),i.flags|=4096,i)}function bg(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),cd(r.return,i,a)}function bd(r,i,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Lg(r,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(Pn(r,i,c.children,a),c=Rt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bg(r,a,i);else if(r.tag===19)bg(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(ft(Rt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&bu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),bd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&bu(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}bd(i,!0,a,null,g);break;case"together":bd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zu(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function Ai(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),eo|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ps(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ps(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function eT(r,i,a){switch(i.tag){case 3:Ng(i),Jo();break;case 5:Qm(i);break;case 1:Vn(i.type)&&Su(i);break;case 4:fd(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;ft(xu,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(ft(Rt,Rt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Og(r,i,a):(ft(Rt,Rt.current&1),r=Ai(r,i,a),r!==null?r.sibling:null);ft(Rt,Rt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Lg(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ft(Rt,Rt.current),c)break;return null;case 22:case 23:return i.lanes=0,Cg(r,i,a)}return Ai(r,i,a)}var Mg,Ld,Vg,Ug;Mg=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ld=function(){},Vg=function(r,i,a,c){var d=r.memoizedProps;if(d!==c){r=i.stateNode,Js(ei.current);var g=null;switch(a){case"input":d=Br(r,d),c=Br(r,c),g=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),g=[];break;case"textarea":d=Ms(r,d),c=Ms(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Eu)}Wi(a,c);var _;a=null;for(W in d)if(!c.hasOwnProperty(W)&&d.hasOwnProperty(W)&&d[W]!=null)if(W==="style"){var P=d[W];for(_ in P)P.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?g||(g=[]):(g=g||[]).push(W,null));for(W in c){var D=c[W];if(P=d!=null?d[W]:void 0,c.hasOwnProperty(W)&&D!==P&&(D!=null||P!=null))if(W==="style")if(P){for(_ in P)!P.hasOwnProperty(_)||D&&D.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in D)D.hasOwnProperty(_)&&P[_]!==D[_]&&(a||(a={}),a[_]=D[_])}else a||(g||(g=[]),g.push(W,a)),a=D;else W==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(g=g||[]).push(W,D)):W==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(W,""+D):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(D!=null&&W==="onScroll"&&mt("scroll",r),g||P===D||(g=[])):(g=g||[]).push(W,D))}a&&(g=g||[]).push("style",a);var W=g;(i.updateQueue=W)&&(i.flags|=4)}},Ug=function(r,i,a,c){a!==c&&(i.flags|=4)};function ol(r,i){if(!wt)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function gn(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function tT(r,i,a){var c=i.pendingProps;switch(rd(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Vn(i.type)&&Iu(),gn(i),null;case 3:return c=i.stateNode,na(),gt(Mn),gt(pn),gd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Cu(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xr!==null&&(Kd(xr),xr=null))),Ld(r,i),gn(i),null;case 5:pd(i);var d=Js(tl.current);if(a=i.type,r!==null&&i.stateNode!=null)Vg(r,i,a,c,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(r=Js(ei.current),Cu(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Zr]=i,c[Ya]=g,r=(i.mode&1)!==0,a){case"dialog":mt("cancel",c),mt("close",c);break;case"iframe":case"object":case"embed":mt("load",c);break;case"video":case"audio":for(d=0;d<qa.length;d++)mt(qa[d],c);break;case"source":mt("error",c);break;case"img":case"image":case"link":mt("error",c),mt("load",c);break;case"details":mt("toggle",c);break;case"input":Bi(c,g),mt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},mt("invalid",c);break;case"textarea":zi(c,g),mt("invalid",c)}Wi(a,g),d=null;for(var _ in g)if(g.hasOwnProperty(_)){var P=g[_];_==="children"?typeof P=="string"?c.textContent!==P&&(g.suppressHydrationWarning!==!0&&wu(c.textContent,P,r),d=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(g.suppressHydrationWarning!==!0&&wu(c.textContent,P,r),d=["children",""+P]):o.hasOwnProperty(_)&&P!=null&&_==="onScroll"&&mt("scroll",c)}switch(a){case"input":hn(c),Po(c,g,!0);break;case"textarea":hn(c),Er(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Eu)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Ct(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[Zr]=i,r[Ya]=c,Mg(r,i,!1,!1),i.stateNode=r;e:{switch(_=Vs(a,c),a){case"dialog":mt("cancel",r),mt("close",r),d=c;break;case"iframe":case"object":case"embed":mt("load",r),d=c;break;case"video":case"audio":for(d=0;d<qa.length;d++)mt(qa[d],r);d=c;break;case"source":mt("error",r),d=c;break;case"img":case"image":case"link":mt("error",r),mt("load",r),d=c;break;case"details":mt("toggle",r),d=c;break;case"input":Bi(r,c),d=Br(r,c),mt("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),mt("invalid",r);break;case"textarea":zi(r,c),d=Ms(r,c),mt("invalid",r);break;default:d=c}Wi(a,d),P=d;for(g in P)if(P.hasOwnProperty(g)){var D=P[g];g==="style"?$i(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Rn(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Tr(r,D):typeof D=="number"&&Tr(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&mt("scroll",r):D!=null&&Z(r,g,D,_))}switch(a){case"input":hn(r),Po(r,c,!1);break;case"textarea":hn(r),Er(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?wr(r,!!c.multiple,g,!1):c.defaultValue!=null&&wr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Eu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(r&&i.stateNode!=null)Ug(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Js(tl.current),Js(ei.current),Cu(i)){if(c=i.stateNode,a=i.memoizedProps,c[Zr]=i,(g=c.nodeValue!==a)&&(r=Jn,r!==null))switch(r.tag){case 3:wu(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&wu(c.nodeValue,a,(r.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Zr]=i,i.stateNode=c}return gn(i),null;case 13:if(gt(Rt),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(wt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bm(),Jo(),i.flags|=98560,g=!1;else if(g=Cu(i),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Zr]=i}else Jo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),g=!1}else xr!==null&&(Kd(xr),xr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Rt.current&1)!==0?Kt===0&&(Kt=3):Qd())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return na(),Ld(r,i),r===null&&Ga(i.stateNode.containerInfo),gn(i),null;case 10:return ud(i.type._context),gn(i),null;case 17:return Vn(i.type)&&Iu(),gn(i),null;case 19:if(gt(Rt),g=i.memoizedState,g===null)return gn(i),null;if(c=(i.flags&128)!==0,_=g.rendering,_===null)if(c)ol(g,!1);else{if(Kt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(_=bu(r),_!==null){for(i.flags|=128,ol(g,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,r=c,g.flags&=14680066,_=g.alternate,_===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=_.childLanes,g.lanes=_.lanes,g.child=_.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=_.memoizedProps,g.memoizedState=_.memoizedState,g.updateQueue=_.updateQueue,g.type=_.type,r=_.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return ft(Rt,Rt.current&1|2),i.child}r=r.sibling}g.tail!==null&&We()>oa&&(i.flags|=128,c=!0,ol(g,!1),i.lanes=4194304)}else{if(!c)if(r=bu(_),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ol(g,!0),g.tail===null&&g.tailMode==="hidden"&&!_.alternate&&!wt)return gn(i),null}else 2*We()-g.renderingStartTime>oa&&a!==1073741824&&(i.flags|=128,c=!0,ol(g,!1),i.lanes=4194304);g.isBackwards?(_.sibling=i.child,i.child=_):(a=g.last,a!==null?a.sibling=_:i.child=_,g.last=_)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=We(),i.sibling=null,a=Rt.current,ft(Rt,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Gd(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(er&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nT(r,i){switch(rd(i),i.tag){case 1:return Vn(i.type)&&Iu(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return na(),gt(Mn),gt(pn),gd(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return pd(i),null;case 13:if(gt(Rt),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Jo()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return gt(Rt),null;case 4:return na(),null;case 10:return ud(i.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var $u=!1,yn=!1,rT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ia(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){xt(r,i,c)}else a.current=null}function Md(r,i,a){try{a()}catch(c){xt(r,i,c)}}var Fg=!1;function iT(r,i){if(Gh=es,r=ym(),jh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var _=0,P=-1,D=-1,W=0,ee=0,re=r,J=null;t:for(;;){for(var he;re!==a||d!==0&&re.nodeType!==3||(P=_+d),re!==g||c!==0&&re.nodeType!==3||(D=_+c),re.nodeType===3&&(_+=re.nodeValue.length),(he=re.firstChild)!==null;)J=re,re=he;for(;;){if(re===r)break t;if(J===a&&++W===d&&(P=_),J===g&&++ee===c&&(D=_),(he=re.nextSibling)!==null)break;re=J,J=re.parentNode}re=he}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qh={focusedElem:r,selectionRange:a},es=!1,Ee=i;Ee!==null;)if(i=Ee,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,Ee=r;else for(;Ee!==null;){i=Ee;try{var Te=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Te!==null){var Ie=Te.memoizedProps,bt=Te.memoizedState,B=i.stateNode,b=B.getSnapshotBeforeUpdate(i.elementType===i.type?Ie:Nr(i.type,Ie),bt);B.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(oe){xt(i,i.return,oe)}if(r=i.sibling,r!==null){r.return=i.return,Ee=r;break}Ee=i.return}return Te=Fg,Fg=!1,Te}function al(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&Md(i,a,g)}d=d.next}while(d!==c)}}function Hu(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Vd(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function jg(r){var i=r.alternate;i!==null&&(r.alternate=null,jg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[Zr],delete i[Ya],delete i[Zh],delete i[jE],delete i[BE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Bg(r){return r.tag===5||r.tag===3||r.tag===4}function zg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Bg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ud(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Eu));else if(c!==4&&(r=r.child,r!==null))for(Ud(r,i,a),r=r.sibling;r!==null;)Ud(r,i,a),r=r.sibling}function Fd(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Fd(r,i,a),r=r.sibling;r!==null;)Fd(r,i,a),r=r.sibling}var on=null,Dr=!1;function us(r,i,a){for(a=a.child;a!==null;)$g(r,i,a),a=a.sibling}function $g(r,i,a){if(Vt&&typeof Vt.onCommitFiberUnmount=="function")try{Vt.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 5:yn||ia(a,i);case 6:var c=on,d=Dr;on=null,us(r,i,a),on=c,Dr=d,on!==null&&(Dr?(r=on,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):on.removeChild(a.stateNode));break;case 18:on!==null&&(Dr?(r=on,a=a.stateNode,r.nodeType===8?Jh(r.parentNode,a):r.nodeType===1&&Jh(r,a),Pr(r)):Jh(on,a.stateNode));break;case 4:c=on,d=Dr,on=a.stateNode.containerInfo,Dr=!0,us(r,i,a),on=c,Dr=d;break;case 0:case 11:case 14:case 15:if(!yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,_=g.destroy;g=g.tag,_!==void 0&&((g&2)!==0||(g&4)!==0)&&Md(a,i,_),d=d.next}while(d!==c)}us(r,i,a);break;case 1:if(!yn&&(ia(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){xt(a,i,P)}us(r,i,a);break;case 21:us(r,i,a);break;case 22:a.mode&1?(yn=(c=yn)||a.memoizedState!==null,us(r,i,a),yn=c):us(r,i,a);break;default:us(r,i,a)}}function Hg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new rT),i.forEach(function(c){var d=fT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Or(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,_=i,P=_;e:for(;P!==null;){switch(P.tag){case 5:on=P.stateNode,Dr=!1;break e;case 3:on=P.stateNode.containerInfo,Dr=!0;break e;case 4:on=P.stateNode.containerInfo,Dr=!0;break e}P=P.return}if(on===null)throw Error(t(160));$g(g,_,d),on=null,Dr=!1;var D=d.alternate;D!==null&&(D.return=null),d.return=null}catch(W){xt(d,i,W)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wg(i,r),i=i.sibling}function Wg(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Or(i,r),ni(r),c&4){try{al(3,r,r.return),Hu(3,r)}catch(Ie){xt(r,r.return,Ie)}try{al(5,r,r.return)}catch(Ie){xt(r,r.return,Ie)}}break;case 1:Or(i,r),ni(r),c&512&&a!==null&&ia(a,a.return);break;case 5:if(Or(i,r),ni(r),c&512&&a!==null&&ia(a,a.return),r.flags&32){var d=r.stateNode;try{Tr(d,"")}catch(Ie){xt(r,r.return,Ie)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,_=a!==null?a.memoizedProps:g,P=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{P==="input"&&g.type==="radio"&&g.name!=null&&Wn(d,g),Vs(P,_);var W=Vs(P,g);for(_=0;_<D.length;_+=2){var ee=D[_],re=D[_+1];ee==="style"?$i(d,re):ee==="dangerouslySetInnerHTML"?Rn(d,re):ee==="children"?Tr(d,re):Z(d,ee,re,W)}switch(P){case"input":Ls(d,g);break;case"textarea":xn(d,g);break;case"select":var J=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var he=g.value;he!=null?wr(d,!!g.multiple,he,!1):J!==!!g.multiple&&(g.defaultValue!=null?wr(d,!!g.multiple,g.defaultValue,!0):wr(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ya]=g}catch(Ie){xt(r,r.return,Ie)}}break;case 6:if(Or(i,r),ni(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(Ie){xt(r,r.return,Ie)}}break;case 3:if(Or(i,r),ni(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(i.containerInfo)}catch(Ie){xt(r,r.return,Ie)}break;case 4:Or(i,r),ni(r);break;case 13:Or(i,r),ni(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(zd=We())),c&4&&Hg(r);break;case 22:if(ee=a!==null&&a.memoizedState!==null,r.mode&1?(yn=(W=yn)||ee,Or(i,r),yn=W):Or(i,r),ni(r),c&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!ee&&(r.mode&1)!==0)for(Ee=r,ee=r.child;ee!==null;){for(re=Ee=ee;Ee!==null;){switch(J=Ee,he=J.child,J.tag){case 0:case 11:case 14:case 15:al(4,J,J.return);break;case 1:ia(J,J.return);var Te=J.stateNode;if(typeof Te.componentWillUnmount=="function"){c=J,a=J.return;try{i=c,Te.props=i.memoizedProps,Te.state=i.memoizedState,Te.componentWillUnmount()}catch(Ie){xt(c,a,Ie)}}break;case 5:ia(J,J.return);break;case 22:if(J.memoizedState!==null){Gg(re);continue}}he!==null?(he.return=J,Ee=he):Gg(re)}ee=ee.sibling}e:for(ee=null,re=r;;){if(re.tag===5){if(ee===null){ee=re;try{d=re.stateNode,W?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(P=re.stateNode,D=re.memoizedProps.style,_=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Nn("display",_))}catch(Ie){xt(r,r.return,Ie)}}}else if(re.tag===6){if(ee===null)try{re.stateNode.nodeValue=W?"":re.memoizedProps}catch(Ie){xt(r,r.return,Ie)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===r)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===r)break e;for(;re.sibling===null;){if(re.return===null||re.return===r)break e;ee===re&&(ee=null),re=re.return}ee===re&&(ee=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:Or(i,r),ni(r),c&4&&Hg(r);break;case 21:break;default:Or(i,r),ni(r)}}function ni(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(Bg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Tr(d,""),c.flags&=-33);var g=zg(r);Fd(r,g,d);break;case 3:case 4:var _=c.stateNode.containerInfo,P=zg(r);Ud(r,P,_);break;default:throw Error(t(161))}}catch(D){xt(r,r.return,D)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function sT(r,i,a){Ee=r,Kg(r)}function Kg(r,i,a){for(var c=(r.mode&1)!==0;Ee!==null;){var d=Ee,g=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||$u;if(!_){var P=d.alternate,D=P!==null&&P.memoizedState!==null||yn;P=$u;var W=yn;if($u=_,(yn=D)&&!W)for(Ee=d;Ee!==null;)_=Ee,D=_.child,_.tag===22&&_.memoizedState!==null?Qg(d):D!==null?(D.return=_,Ee=D):Qg(d);for(;g!==null;)Ee=g,Kg(g),g=g.sibling;Ee=d,$u=P,yn=W}qg(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ee=g):qg(r)}}function qg(r){for(;Ee!==null;){var i=Ee;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Hu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Nr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Gm(i,g,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Gm(i,_,a)}break;case 5:var P=i.stateNode;if(a===null&&i.flags&4){a=P;var D=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var W=i.alternate;if(W!==null){var ee=W.memoizedState;if(ee!==null){var re=ee.dehydrated;re!==null&&Pr(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&Vd(i)}catch(J){xt(i,i.return,J)}}if(i===r){Ee=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ee=a;break}Ee=i.return}}function Gg(r){for(;Ee!==null;){var i=Ee;if(i===r){Ee=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ee=a;break}Ee=i.return}}function Qg(r){for(;Ee!==null;){var i=Ee;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Hu(4,i)}catch(D){xt(i,a,D)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(D){xt(i,d,D)}}var g=i.return;try{Vd(i)}catch(D){xt(i,g,D)}break;case 5:var _=i.return;try{Vd(i)}catch(D){xt(i,_,D)}}}catch(D){xt(i,i.return,D)}if(i===r){Ee=null;break}var P=i.sibling;if(P!==null){P.return=i.return,Ee=P;break}Ee=i.return}}var oT=Math.ceil,Wu=ne.ReactCurrentDispatcher,jd=ne.ReactCurrentOwner,mr=ne.ReactCurrentBatchConfig,tt=0,Yt=null,Ft=null,an=0,er=0,sa=is(0),Kt=0,ll=null,eo=0,Ku=0,Bd=0,ul=null,Fn=null,zd=0,oa=1/0,Pi=null,qu=!1,$d=null,cs=null,Gu=!1,hs=null,Qu=0,cl=0,Hd=null,Yu=-1,Xu=0;function Cn(){return(tt&6)!==0?We():Yu!==-1?Yu:Yu=We()}function ds(r){return(r.mode&1)===0?1:(tt&2)!==0&&an!==0?an&-an:$E.transition!==null?(Xu===0&&(Xu=zs()),Xu):(r=Ye,r!==0||(r=window.event,r=r===void 0?16:Ua(r.type)),r)}function br(r,i,a,c){if(50<cl)throw cl=0,Hd=null,Error(t(185));Yi(r,a,c),((tt&2)===0||r!==Yt)&&(r===Yt&&((tt&2)===0&&(Ku|=a),Kt===4&&fs(r,an)),jn(r,c),a===1&&tt===0&&(i.mode&1)===0&&(oa=We()+500,Ru&&os()))}function jn(r,i){var a=r.callbackNode;mi(r,i);var c=Bs(r,r===Yt?an:0);if(c===0)a!==null&&ar(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&ar(a),i===1)r.tag===0?zE(Xg.bind(null,r)):Mm(Xg.bind(null,r)),UE(function(){(tt&6)===0&&os()}),a=null;else{switch(Ji(c)){case 1:a=Gn;break;case 4:a=fn;break;case 16:a=nn;break;case 536870912:a=Ke;break;default:a=nn}a=sy(a,Yg.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Yg(r,i){if(Yu=-1,Xu=0,(tt&6)!==0)throw Error(t(327));var a=r.callbackNode;if(aa()&&r.callbackNode!==a)return null;var c=Bs(r,r===Yt?an:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Ju(r,c);else{i=c;var d=tt;tt|=2;var g=Zg();(Yt!==r||an!==i)&&(Pi=null,oa=We()+500,no(r,i));do try{uT();break}catch(P){Jg(r,P)}while(!0);ld(),Wu.current=g,tt=d,Ft!==null?i=0:(Yt=null,an=0,i=Kt)}if(i!==0){if(i===2&&(d=Qn(r),d!==0&&(c=d,i=Wd(r,d))),i===1)throw a=ll,no(r,0),fs(r,c),jn(r,We()),a;if(i===6)fs(r,c);else{if(d=r.current.alternate,(c&30)===0&&!aT(d)&&(i=Ju(r,c),i===2&&(g=Qn(r),g!==0&&(c=g,i=Wd(r,g))),i===1))throw a=ll,no(r,0),fs(r,c),jn(r,We()),a;switch(r.finishedWork=d,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ro(r,Fn,Pi);break;case 3:if(fs(r,c),(c&130023424)===c&&(i=zd+500-We(),10<i)){if(Bs(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Cn(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Xh(ro.bind(null,r,Fn,Pi),i);break}ro(r,Fn,Pi);break;case 4:if(fs(r,c),(c&4194240)===c)break;for(i=r.eventTimes,d=-1;0<c;){var _=31-Qe(c);g=1<<_,_=i[_],_>d&&(d=_),c&=~g}if(c=d,c=We()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*oT(c/1960))-c,10<c){r.timeoutHandle=Xh(ro.bind(null,r,Fn,Pi),c);break}ro(r,Fn,Pi);break;case 5:ro(r,Fn,Pi);break;default:throw Error(t(329))}}}return jn(r,We()),r.callbackNode===a?Yg.bind(null,r):null}function Wd(r,i){var a=ul;return r.current.memoizedState.isDehydrated&&(no(r,i).flags|=256),r=Ju(r,i),r!==2&&(i=Fn,Fn=a,i!==null&&Kd(i)),r}function Kd(r){Fn===null?Fn=r:Fn.push.apply(Fn,r)}function aT(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!kr(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fs(r,i){for(i&=~Bd,i&=~Ku,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-Qe(i),c=1<<a;r[a]=-1,i&=~c}}function Xg(r){if((tt&6)!==0)throw Error(t(327));aa();var i=Bs(r,0);if((i&1)===0)return jn(r,We()),null;var a=Ju(r,i);if(r.tag!==0&&a===2){var c=Qn(r);c!==0&&(i=c,a=Wd(r,c))}if(a===1)throw a=ll,no(r,0),fs(r,i),jn(r,We()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,ro(r,Fn,Pi),jn(r,We()),null}function qd(r,i){var a=tt;tt|=1;try{return r(i)}finally{tt=a,tt===0&&(oa=We()+500,Ru&&os())}}function to(r){hs!==null&&hs.tag===0&&(tt&6)===0&&aa();var i=tt;tt|=1;var a=mr.transition,c=Ye;try{if(mr.transition=null,Ye=1,r)return r()}finally{Ye=c,mr.transition=a,tt=i,(tt&6)===0&&os()}}function Gd(){er=sa.current,gt(sa)}function no(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,VE(a)),Ft!==null)for(a=Ft.return;a!==null;){var c=a;switch(rd(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Iu();break;case 3:na(),gt(Mn),gt(pn),gd();break;case 5:pd(c);break;case 4:na();break;case 13:gt(Rt);break;case 19:gt(Rt);break;case 10:ud(c.type._context);break;case 22:case 23:Gd()}a=a.return}if(Yt=r,Ft=r=ps(r.current,null),an=er=i,Kt=0,ll=null,Bd=Ku=eo=0,Fn=ul=null,Xs!==null){for(i=0;i<Xs.length;i++)if(a=Xs[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var _=g.next;g.next=d,c.next=_}a.pending=c}Xs=null}return r}function Jg(r,i){do{var a=Ft;try{if(ld(),Lu.current=Fu,Mu){for(var c=At.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Mu=!1}if(Zs=0,Qt=Wt=At=null,nl=!1,rl=0,jd.current=null,a===null||a.return===null){Kt=1,ll=i,Ft=null;break}e:{var g=r,_=a.return,P=a,D=i;if(i=an,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var W=D,ee=P,re=ee.tag;if((ee.mode&1)===0&&(re===0||re===11||re===15)){var J=ee.alternate;J?(ee.updateQueue=J.updateQueue,ee.memoizedState=J.memoizedState,ee.lanes=J.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var he=Ig(_);if(he!==null){he.flags&=-257,Sg(he,_,P,g,i),he.mode&1&&Tg(g,W,i),i=he,D=W;var Te=i.updateQueue;if(Te===null){var Ie=new Set;Ie.add(D),i.updateQueue=Ie}else Te.add(D);break e}else{if((i&1)===0){Tg(g,W,i),Qd();break e}D=Error(t(426))}}else if(wt&&P.mode&1){var bt=Ig(_);if(bt!==null){(bt.flags&65536)===0&&(bt.flags|=256),Sg(bt,_,P,g,i),od(ra(D,P));break e}}g=D=ra(D,P),Kt!==4&&(Kt=2),ul===null?ul=[g]:ul.push(g),g=_;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var B=wg(g,D,i);qm(g,B);break e;case 1:P=D;var b=g.type,$=g.stateNode;if((g.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(cs===null||!cs.has($)))){g.flags|=65536,i&=-i,g.lanes|=i;var oe=Eg(g,P,i);qm(g,oe);break e}}g=g.return}while(g!==null)}ty(a)}catch(Se){i=Se,Ft===a&&a!==null&&(Ft=a=a.return);continue}break}while(!0)}function Zg(){var r=Wu.current;return Wu.current=Fu,r===null?Fu:r}function Qd(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),Yt===null||(eo&268435455)===0&&(Ku&268435455)===0||fs(Yt,an)}function Ju(r,i){var a=tt;tt|=2;var c=Zg();(Yt!==r||an!==i)&&(Pi=null,no(r,i));do try{lT();break}catch(d){Jg(r,d)}while(!0);if(ld(),tt=a,Wu.current=c,Ft!==null)throw Error(t(261));return Yt=null,an=0,Kt}function lT(){for(;Ft!==null;)ey(Ft)}function uT(){for(;Ft!==null&&!Wr();)ey(Ft)}function ey(r){var i=iy(r.alternate,r,er);r.memoizedProps=r.pendingProps,i===null?ty(r):Ft=i,jd.current=null}function ty(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=tT(a,i,er),a!==null){Ft=a;return}}else{if(a=nT(a,i),a!==null){a.flags&=32767,Ft=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Kt=6,Ft=null;return}}if(i=i.sibling,i!==null){Ft=i;return}Ft=i=r}while(i!==null);Kt===0&&(Kt=5)}function ro(r,i,a){var c=Ye,d=mr.transition;try{mr.transition=null,Ye=1,cT(r,i,a,c)}finally{mr.transition=d,Ye=c}return null}function cT(r,i,a,c){do aa();while(hs!==null);if((tt&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ht(r,g),r===Yt&&(Ft=Yt=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Gu||(Gu=!0,sy(nn,function(){return aa(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=mr.transition,mr.transition=null;var _=Ye;Ye=1;var P=tt;tt|=4,jd.current=null,iT(r,a),Wg(a,r),xE(Qh),es=!!Gh,Qh=Gh=null,r.current=a,sT(a),qn(),tt=P,Ye=_,mr.transition=g}else r.current=a;if(Gu&&(Gu=!1,hs=r,Qu=d),g=r.pendingLanes,g===0&&(cs=null),qr(a.stateNode),jn(r,We()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(qu)throw qu=!1,r=$d,$d=null,r;return(Qu&1)!==0&&r.tag!==0&&aa(),g=r.pendingLanes,(g&1)!==0?r===Hd?cl++:(cl=0,Hd=r):cl=0,os(),null}function aa(){if(hs!==null){var r=Ji(Qu),i=mr.transition,a=Ye;try{if(mr.transition=null,Ye=16>r?16:r,hs===null)var c=!1;else{if(r=hs,hs=null,Qu=0,(tt&6)!==0)throw Error(t(331));var d=tt;for(tt|=4,Ee=r.current;Ee!==null;){var g=Ee,_=g.child;if((Ee.flags&16)!==0){var P=g.deletions;if(P!==null){for(var D=0;D<P.length;D++){var W=P[D];for(Ee=W;Ee!==null;){var ee=Ee;switch(ee.tag){case 0:case 11:case 15:al(8,ee,g)}var re=ee.child;if(re!==null)re.return=ee,Ee=re;else for(;Ee!==null;){ee=Ee;var J=ee.sibling,he=ee.return;if(jg(ee),ee===W){Ee=null;break}if(J!==null){J.return=he,Ee=J;break}Ee=he}}}var Te=g.alternate;if(Te!==null){var Ie=Te.child;if(Ie!==null){Te.child=null;do{var bt=Ie.sibling;Ie.sibling=null,Ie=bt}while(Ie!==null)}}Ee=g}}if((g.subtreeFlags&2064)!==0&&_!==null)_.return=g,Ee=_;else e:for(;Ee!==null;){if(g=Ee,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:al(9,g,g.return)}var B=g.sibling;if(B!==null){B.return=g.return,Ee=B;break e}Ee=g.return}}var b=r.current;for(Ee=b;Ee!==null;){_=Ee;var $=_.child;if((_.subtreeFlags&2064)!==0&&$!==null)$.return=_,Ee=$;else e:for(_=b;Ee!==null;){if(P=Ee,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Hu(9,P)}}catch(Se){xt(P,P.return,Se)}if(P===_){Ee=null;break e}var oe=P.sibling;if(oe!==null){oe.return=P.return,Ee=oe;break e}Ee=P.return}}if(tt=d,os(),Vt&&typeof Vt.onPostCommitFiberRoot=="function")try{Vt.onPostCommitFiberRoot(st,r)}catch{}c=!0}return c}finally{Ye=a,mr.transition=i}}return!1}function ny(r,i,a){i=ra(a,i),i=wg(r,i,1),r=ls(r,i,1),i=Cn(),r!==null&&(Yi(r,1,i),jn(r,i))}function xt(r,i,a){if(r.tag===3)ny(r,r,a);else for(;i!==null;){if(i.tag===3){ny(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cs===null||!cs.has(c))){r=ra(a,r),r=Eg(i,r,1),i=ls(i,r,1),r=Cn(),i!==null&&(Yi(i,1,r),jn(i,r));break}}i=i.return}}function hT(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Cn(),r.pingedLanes|=r.suspendedLanes&a,Yt===r&&(an&a)===a&&(Kt===4||Kt===3&&(an&130023424)===an&&500>We()-zd?no(r,0):Bd|=a),jn(r,i)}function ry(r,i){i===0&&((r.mode&1)===0?i=1:(i=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var a=Cn();r=Si(r,i),r!==null&&(Yi(r,i,a),jn(r,a))}function dT(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),ry(r,a)}function fT(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),ry(r,a)}var iy;iy=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Mn.current)Un=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Un=!1,eT(r,i,a);Un=(r.flags&131072)!==0}else Un=!1,wt&&(i.flags&1048576)!==0&&Vm(i,Pu,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;zu(r,i),r=i.pendingProps;var d=Qo(i,pn.current);ta(i,a),d=_d(null,i,c,r,d,a);var g=wd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Vn(c)?(g=!0,Su(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,dd(i),d.updater=ju,i.stateNode=d,d._reactInternals=i,Ad(i,c,r,a),i=xd(null,i,c,!0,g,a)):(i.tag=0,wt&&g&&nd(i),Pn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(zu(r,i),r=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=mT(c),r=Nr(c,r),d){case 0:i=kd(null,i,c,r,a);break e;case 1:i=xg(null,i,c,r,a);break e;case 11:i=Rg(null,i,c,r,a);break e;case 14:i=Ag(null,i,c,Nr(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nr(c,d),kd(r,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nr(c,d),xg(r,i,c,d,a);case 3:e:{if(Ng(i),r===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Km(r,i),Ou(i,c,null,a);var _=i.memoizedState;if(c=_.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=ra(Error(t(423)),i),i=Dg(r,i,c,a,d);break e}else if(c!==d){d=ra(Error(t(424)),i),i=Dg(r,i,c,a,d);break e}else for(Zn=rs(i.stateNode.containerInfo.firstChild),Jn=i,wt=!0,xr=null,a=Hm(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jo(),c===d){i=Ai(r,i,a);break e}Pn(r,i,c,a)}i=i.child}return i;case 5:return Qm(i),r===null&&sd(i),c=i.type,d=i.pendingProps,g=r!==null?r.memoizedProps:null,_=d.children,Yh(c,d)?_=null:g!==null&&Yh(c,g)&&(i.flags|=32),kg(r,i),Pn(r,i,_,a),i.child;case 6:return r===null&&sd(i),null;case 13:return Og(r,i,a);case 4:return fd(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=Zo(i,null,c,a):Pn(r,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nr(c,d),Rg(r,i,c,d,a);case 7:return Pn(r,i,i.pendingProps,a),i.child;case 8:return Pn(r,i,i.pendingProps.children,a),i.child;case 12:return Pn(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,_=d.value,ft(xu,c._currentValue),c._currentValue=_,g!==null)if(kr(g.value,_)){if(g.children===d.children&&!Mn.current){i=Ai(r,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var P=g.dependencies;if(P!==null){_=g.child;for(var D=P.firstContext;D!==null;){if(D.context===c){if(g.tag===1){D=Ri(-1,a&-a),D.tag=2;var W=g.updateQueue;if(W!==null){W=W.shared;var ee=W.pending;ee===null?D.next=D:(D.next=ee.next,ee.next=D),W.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),cd(g.return,a,i),P.lanes|=a;break}D=D.next}}else if(g.tag===10)_=g.type===i.type?null:g.child;else if(g.tag===18){if(_=g.return,_===null)throw Error(t(341));_.lanes|=a,P=_.alternate,P!==null&&(P.lanes|=a),cd(_,a,i),_=g.sibling}else _=g.child;if(_!==null)_.return=g;else for(_=g;_!==null;){if(_===i){_=null;break}if(g=_.sibling,g!==null){g.return=_.return,_=g;break}_=_.return}g=_}Pn(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ta(i,a),d=fr(d),c=c(d),i.flags|=1,Pn(r,i,c,a),i.child;case 14:return c=i.type,d=Nr(c,i.pendingProps),d=Nr(c.type,d),Ag(r,i,c,d,a);case 15:return Pg(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Nr(c,d),zu(r,i),i.tag=1,Vn(c)?(r=!0,Su(i)):r=!1,ta(i,a),vg(i,c,d),Ad(i,c,d,a),xd(null,i,c,!0,r,a);case 19:return Lg(r,i,a);case 22:return Cg(r,i,a)}throw Error(t(156,i.tag))};function sy(r,i){return at(r,i)}function pT(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(r,i,a,c){return new pT(r,i,a,c)}function Yd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function mT(r){if(typeof r=="function")return Yd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===ct)return 14}return 2}function ps(r,i){var a=r.alternate;return a===null?(a=gr(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Zu(r,i,a,c,d,g){var _=2;if(c=r,typeof r=="function")Yd(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case E:return io(a.children,d,g,i);case S:_=8,d|=8;break;case A:return r=gr(12,a,i,d|2),r.elementType=A,r.lanes=g,r;case C:return r=gr(13,a,i,d),r.elementType=C,r.lanes=g,r;case Be:return r=gr(19,a,i,d),r.elementType=Be,r.lanes=g,r;case He:return ec(a,d,g,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:_=10;break e;case O:_=9;break e;case L:_=11;break e;case ct:_=14;break e;case Tt:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=gr(_,a,i,d),i.elementType=r,i.type=c,i.lanes=g,i}function io(r,i,a,c){return r=gr(7,r,c,i),r.lanes=a,r}function ec(r,i,a,c){return r=gr(22,r,c,i),r.elementType=He,r.lanes=a,r.stateNode={isHidden:!1},r}function Xd(r,i,a){return r=gr(6,r,null,i),r.lanes=a,r}function Jd(r,i,a){return i=gr(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function gT(r,i,a,c,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zd(r,i,a,c,d,g,_,P,D){return r=new gT(r,i,a,P,D),i===1?(i=1,g===!0&&(i|=8)):i=0,g=gr(3,null,null,i),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(g),r}function yT(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function oy(r){if(!r)return ss;r=r._reactInternals;e:{if(pe(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Vn(a))return bm(r,a,i)}return i}function ay(r,i,a,c,d,g,_,P,D){return r=Zd(a,c,!0,r,d,g,_,P,D),r.context=oy(null),a=r.current,c=Cn(),d=ds(a),g=Ri(c,d),g.callback=i??null,ls(a,g,d),r.current.lanes=d,Yi(r,d,c),jn(r,c),r}function tc(r,i,a,c){var d=i.current,g=Cn(),_=ds(d);return a=oy(a),i.context===null?i.context=a:i.pendingContext=a,i=Ri(g,_),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=ls(d,i,_),r!==null&&(br(r,d,_,g),Du(r,d,_)),_}function nc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function ly(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function ef(r,i){ly(r,i),(r=r.alternate)&&ly(r,i)}function vT(){return null}var uy=typeof reportError=="function"?reportError:function(r){console.error(r)};function tf(r){this._internalRoot=r}rc.prototype.render=tf.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));tc(r,i,null,null)},rc.prototype.unmount=tf.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;to(function(){tc(null,r,null,null)}),i[wi]=null}};function rc(r){this._internalRoot=r}rc.prototype.unstable_scheduleHydration=function(r){if(r){var i=ru();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Qr.length&&i!==0&&i<Qr[a].priority;a++);Qr.splice(a,0,r),a===0&&ou(r)}};function nf(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ic(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function cy(){}function _T(r,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var W=nc(_);g.call(W)}}var _=ay(i,c,r,0,null,!1,!1,"",cy);return r._reactRootContainer=_,r[wi]=_.current,Ga(r.nodeType===8?r.parentNode:r),to(),_}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var P=c;c=function(){var W=nc(D);P.call(W)}}var D=Zd(r,0,!1,null,null,!1,!1,"",cy);return r._reactRootContainer=D,r[wi]=D.current,Ga(r.nodeType===8?r.parentNode:r),to(function(){tc(i,D,a,c)}),D}function sc(r,i,a,c,d){var g=a._reactRootContainer;if(g){var _=g;if(typeof d=="function"){var P=d;d=function(){var D=nc(_);P.call(D)}}tc(i,_,r,d)}else _=_T(a,i,r,d,c);return nc(_)}tu=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gi(i.pendingLanes);a!==0&&(Xi(i,a|1),jn(i,We()),(tt&6)===0&&(oa=We()+500,os()))}break;case 13:to(function(){var c=Si(r,1);if(c!==null){var d=Cn();br(c,r,1,d)}}),ef(r,1)}},No=function(r){if(r.tag===13){var i=Si(r,134217728);if(i!==null){var a=Cn();br(i,r,134217728,a)}ef(r,134217728)}},nu=function(r){if(r.tag===13){var i=ds(r),a=Si(r,i);if(a!==null){var c=Cn();br(a,r,i,c)}ef(r,i)}},ru=function(){return Ye},iu=function(r,i){var a=Ye;try{return Ye=r,i()}finally{Ye=a}},pi=function(r,i,a){switch(i){case"input":if(Ls(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var d=Tu(c);if(!d)throw Error(t(90));it(c),Ls(c,d)}}}break;case"textarea":xn(r,a);break;case"select":i=a.value,i!=null&&wr(r,!!a.multiple,i,!1)}},$r=qd,Hr=to;var wT={usingClientEntryPoint:!1,Events:[Xa,qo,Tu,Kn,Us,qd]},hl={findFiberByHostInstance:qs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ET={bundleType:hl.bundleType,version:hl.version,rendererPackageName:hl.rendererPackageName,rendererConfig:hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=nt(r),r===null?null:r.stateNode},findFiberByHostInstance:hl.findFiberByHostInstance||vT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{st=oc.inject(ET),Vt=oc}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT,Bn.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(i))throw Error(t(200));return yT(r,i,null,a)},Bn.createRoot=function(r,i){if(!nf(r))throw Error(t(299));var a=!1,c="",d=uy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Zd(r,1,!1,null,null,a,!1,c,d),r[wi]=i.current,Ga(r.nodeType===8?r.parentNode:r),new tf(i)},Bn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=nt(i),r=r===null?null:r.stateNode,r},Bn.flushSync=function(r){return to(r)},Bn.hydrate=function(r,i,a){if(!ic(i))throw Error(t(200));return sc(null,r,i,!0,a)},Bn.hydrateRoot=function(r,i,a){if(!nf(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",_=uy;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=ay(i,null,r,1,a??null,d,!1,g,_),r[wi]=i.current,Ga(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new rc(i)},Bn.render=function(r,i,a){if(!ic(i))throw Error(t(200));return sc(null,r,i,!1,a)},Bn.unmountComponentAtNode=function(r){if(!ic(r))throw Error(t(40));return r._reactRootContainer?(to(function(){sc(null,null,r,!1,function(){r._reactRootContainer=null,r[wi]=null})}),!0):!1},Bn.unstable_batchedUpdates=qd,Bn.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!ic(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return sc(r,i,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var vy;function d_(){if(vy)return of.exports;vy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),of.exports=kT(),of.exports}var _y;function xT(){if(_y)return ac;_y=1;var n=d_();return ac.createRoot=n.createRoot,ac.hydrateRoot=n.hydrateRoot,ac}var NT=xT();const DT=op(NT);var f_=d_();const OT=op(f_),bT=h_({__proto__:null,default:OT},[f_]);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Et(){return Et=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Et.apply(this,arguments)}var Bt;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Bt||(Bt={}));const wy="popstate";function LT(n){n===void 0&&(n={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Nl("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:vo(o)}return VT(e,t,null,n)}function qe(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ga(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MT(){return Math.random().toString(36).substr(2,8)}function Ey(n,e){return{usr:n.state,key:n.key,idx:e}}function Nl(n,e,t,s){return t===void 0&&(t=null),Et({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Ds(e):e,{state:t,key:e&&e.key||s||MT()})}function vo(n){let{pathname:e="/",search:t="",hash:s=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ds(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substr(s),n=n.substr(0,s)),n&&(e.pathname=n)}return e}function VT(n,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=Bt.Pop,p=null,y=w();y==null&&(y=0,h.replaceState(Et({},h.state,{idx:y}),""));function w(){return(h.state||{idx:null}).idx}function T(){f=Bt.Pop;let F=w(),X=F==null?null:F-y;y=F,p&&p({action:f,location:z.location,delta:X})}function R(F,X){f=Bt.Push;let G=Nl(z.location,F,X);y=w()+1;let Z=Ey(G,y),ne=z.createHref(G);try{h.pushState(Z,"",ne)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;o.location.assign(ne)}l&&p&&p({action:f,location:z.location,delta:1})}function N(F,X){f=Bt.Replace;let G=Nl(z.location,F,X);y=w();let Z=Ey(G,y),ne=z.createHref(G);h.replaceState(Z,"",ne),l&&p&&p({action:f,location:z.location,delta:0})}function V(F){let X=o.location.origin!=="null"?o.location.origin:o.location.href,G=typeof F=="string"?F:vo(F);return G=G.replace(/ $/,"%20"),qe(X,"No window.location.(origin|href) available to create URL for href: "+G),new URL(G,X)}let z={get action(){return f},get location(){return n(o,h)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(wy,T),p=F,()=>{o.removeEventListener(wy,T),p=null}},createHref(F){return e(o,F)},createURL:V,encodeLocation(F){let X=V(F);return{pathname:X.pathname,search:X.search,hash:X.hash}},push:R,replace:N,go(F){return h.go(F)}};return z}var ut;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(ut||(ut={}));const UT=new Set(["lazy","caseSensitive","path","id","index","children"]);function FT(n){return n.index===!0}function Dc(n,e,t,s){return t===void 0&&(t=[]),s===void 0&&(s={}),n.map((o,l)=>{let h=[...t,String(l)],f=typeof o.id=="string"?o.id:h.join("-");if(qe(o.index!==!0||!o.children,"Cannot specify children on an index route"),qe(!s[f],'Found a route id collision on id "'+f+`".  Route id's must be globally unique within Data Router usages`),FT(o)){let p=Et({},o,e(o),{id:f});return s[f]=p,p}else{let p=Et({},o,e(o),{id:f,children:void 0});return s[f]=p,o.children&&(p.children=Dc(o.children,e,h,s)),p}})}function oo(n,e,t){return t===void 0&&(t="/"),_c(n,e,t,!1)}function _c(n,e,t,s){let o=typeof e=="string"?Ds(e):e,l=Ca(o.pathname||"/",t);if(l==null)return null;let h=p_(n);BT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=JT(l);f=YT(h[p],y,s)}return f}function jT(n,e){let{route:t,pathname:s,params:o}=n;return{id:t.id,pathname:s,params:o,data:e[t.id],handle:t.handle}}function p_(n,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(qe(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(s.length));let y=Oi([s,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(qe(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),p_(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:GT(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of m_(l.path))o(l,h,p)}),e}function m_(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=m_(s.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>n.startsWith("/")&&p===""?"/":p)}function BT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:QT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const zT=/^:[\w-]+$/,$T=3,HT=2,WT=1,KT=10,qT=-2,Ty=n=>n==="*";function GT(n,e){let t=n.split("/"),s=t.length;return t.some(Ty)&&(s+=qT),e&&(s+=HT),t.filter(o=>!Ty(o)).reduce((o,l)=>o+(zT.test(l)?$T:l===""?WT:KT),s)}function QT(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function YT(n,e,t){t===void 0&&(t=!1);let{routesMeta:s}=n,o={},l="/",h=[];for(let f=0;f<s.length;++f){let p=s[f],y=f===s.length-1,w=l==="/"?e:e.slice(l.length)||"/",T=Iy({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),R=p.route;if(!T&&y&&t&&!s[s.length-1].route.index&&(T=Iy({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:Oi([l,T.pathname]),pathnameBase:tI(Oi([l,T.pathnameBase])),route:R}),T.pathnameBase!=="/"&&(l=Oi([l,T.pathnameBase]))}return h}function Iy(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=XT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,w,T)=>{let{paramName:R,isOptional:N}=w;if(R==="*"){let z=f[T]||"";h=l.slice(0,l.length-z.length).replace(/(.)\/+$/,"$1")}const V=f[T];return N&&!V?y[R]=void 0:y[R]=(V||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function XT(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),ga(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function JT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ga(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ca(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function ZT(n,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Ds(n):n;return{pathname:t?t.startsWith("/")?t:eI(t,e):e,search:nI(s),hash:rI(o)}}function eI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function uf(n,e,t,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function g_(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function lh(n,e){let t=g_(n);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function uh(n,e,t,s){s===void 0&&(s=!1);let o;typeof n=="string"?o=Ds(n):(o=Et({},n),qe(!o.pathname||!o.pathname.includes("?"),uf("?","pathname","search",o)),qe(!o.pathname||!o.pathname.includes("#"),uf("#","pathname","hash",o)),qe(!o.search||!o.search.includes("#"),uf("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),T-=1;o.pathname=R.join("/")}f=T>=0?e[T]:"/"}let p=ZT(o,f),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}const Oi=n=>n.join("/").replace(/\/\/+/g,"/"),tI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),nI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,rI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class Oc{constructor(e,t,s,o){o===void 0&&(o=!1),this.status=e,this.statusText=t||"",this.internal=o,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}}function Dl(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const y_=["post","put","patch","delete"],iI=new Set(y_),sI=["get",...y_],oI=new Set(sI),aI=new Set([301,302,303,307,308]),lI=new Set([307,308]),cf={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},uI={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cI=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),v_="remix-router-transitions";function hI(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",s=!t;qe(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(n.mapRouteProperties)o=n.mapRouteProperties;else if(n.detectErrorBoundary){let x=n.detectErrorBoundary;o=U=>({hasErrorBoundary:x(U)})}else o=cI;let l={},h=Dc(n.routes,o,void 0,l),f,p=n.basename||"/",y=n.dataStrategy||mI,w=n.patchRoutesOnNavigation,T=Et({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},n.future),R=null,N=new Set,V=null,z=null,F=null,X=n.hydrationData!=null,G=oo(h,n.history.location,p),Z=!1,ne=null;if(G==null&&!w){let x=zn(404,{pathname:n.history.location.pathname}),{matches:U,route:H}=by(h);G=U,ne={[H.id]:x}}G&&!n.hydrationData&&Hr(G,h,n.history.location.pathname).active&&(G=null);let de;if(G)if(G.some(x=>x.route.lazy))de=!1;else if(!G.some(x=>x.route.loader))de=!0;else if(T.v7_partialHydration){let x=n.hydrationData?n.hydrationData.loaderData:null,U=n.hydrationData?n.hydrationData.errors:null;if(U){let H=G.findIndex(Y=>U[Y.route.id]!==void 0);de=G.slice(0,H+1).every(Y=>!xf(Y.route,x,U))}else de=G.every(H=>!xf(H.route,x,U))}else de=n.hydrationData!=null;else if(de=!1,G=[],T.v7_partialHydration){let x=Hr(null,h,n.history.location.pathname);x.active&&x.matches&&(Z=!0,G=x.matches)}let ce,E={historyAction:n.history.action,location:n.history.location,matches:G,initialized:de,navigation:cf,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||ne,fetchers:new Map,blockers:new Map},S=Bt.Pop,A=!1,k,O=!1,L=new Map,C=null,Be=!1,ct=!1,Tt=[],He=new Set,te=new Map,me=0,ue=-1,M=new Map,q=new Set,ve=new Map,xe=new Map,Re=new Set,Oe=new Map,Ve=new Map,Ue;function Ge(){if(R=n.history.listen(x=>{let{action:U,location:H,delta:Y}=x;if(Ue){Ue(),Ue=void 0;return}ga(Ve.size===0||Y!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=pi({currentLocation:E.location,nextLocation:H,historyAction:U});if(le&&Y!=null){let _e=new Promise(Pe=>{Ue=Pe});n.history.go(Y*-1),Ir(le,{state:"blocked",location:H,proceed(){Ir(le,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),_e.then(()=>n.history.go(Y))},reset(){let Pe=new Map(E.blockers);Pe.set(le,fl),it({blockers:Pe})}});return}return Wn(U,H)}),t){kI(e,L);let x=()=>xI(e,L);e.addEventListener("pagehide",x),C=()=>e.removeEventListener("pagehide",x)}return E.initialized||Wn(Bt.Pop,E.location,{initialHydration:!0}),ce}function vt(){R&&R(),C&&C(),N.clear(),k&&k.abort(),E.fetchers.forEach((x,U)=>or(U)),E.blockers.forEach((x,U)=>zr(U))}function hn(x){return N.add(x),()=>N.delete(x)}function it(x,U){U===void 0&&(U={}),E=Et({},E,x);let H=[],Y=[];T.v7_fetcherPersist&&E.fetchers.forEach((le,_e)=>{le.state==="idle"&&(Re.has(_e)?Y.push(_e):H.push(_e))}),Re.forEach(le=>{!E.fetchers.has(le)&&!te.has(le)&&Y.push(le)}),[...N].forEach(le=>le(E,{deletedFetchers:Y,viewTransitionOpts:U.viewTransitionOpts,flushSync:U.flushSync===!0})),T.v7_fetcherPersist?(H.forEach(le=>E.fetchers.delete(le)),Y.forEach(le=>or(le))):Y.forEach(le=>Re.delete(le))}function Sn(x,U,H){var Y,le;let{flushSync:_e}=H===void 0?{}:H,Pe=E.actionData!=null&&E.navigation.formMethod!=null&&Lr(E.navigation.formMethod)&&E.navigation.state==="loading"&&((Y=x.state)==null?void 0:Y._isRedirect)!==!0,we;U.actionData?Object.keys(U.actionData).length>0?we=U.actionData:we=null:Pe?we=E.actionData:we=null;let ge=U.loaderData?Dy(E.loaderData,U.loaderData,U.matches||[],U.errors):E.loaderData,fe=E.blockers;fe.size>0&&(fe=new Map(fe),fe.forEach((Me,kt)=>fe.set(kt,fl)));let pe=A===!0||E.navigation.formMethod!=null&&Lr(E.navigation.formMethod)&&((le=x.state)==null?void 0:le._isRedirect)!==!0;f&&(h=f,f=void 0),Be||S===Bt.Pop||(S===Bt.Push?n.history.push(x,x.state):S===Bt.Replace&&n.history.replace(x,x.state));let Ne;if(S===Bt.Pop){let Me=L.get(E.location.pathname);Me&&Me.has(x.pathname)?Ne={currentLocation:E.location,nextLocation:x}:L.has(x.pathname)&&(Ne={currentLocation:x,nextLocation:E.location})}else if(O){let Me=L.get(E.location.pathname);Me?Me.add(x.pathname):(Me=new Set([x.pathname]),L.set(E.location.pathname,Me)),Ne={currentLocation:E.location,nextLocation:x}}it(Et({},U,{actionData:we,loaderData:ge,historyAction:S,location:x,initialized:!0,navigation:cf,revalidation:"idle",restoreScrollPosition:$r(x,U.matches||E.matches),preventScrollReset:pe,blockers:fe}),{viewTransitionOpts:Ne,flushSync:_e===!0}),S=Bt.Pop,A=!1,O=!1,Be=!1,ct=!1,Tt=[]}async function Br(x,U){if(typeof x=="number"){n.history.go(x);return}let H=kf(E.location,E.matches,p,T.v7_prependBasename,x,T.v7_relativeSplatPath,U==null?void 0:U.fromRouteId,U==null?void 0:U.relative),{path:Y,submission:le,error:_e}=Sy(T.v7_normalizeFormMethod,!1,H,U),Pe=E.location,we=Nl(E.location,Y,U&&U.state);we=Et({},we,n.history.encodeLocation(we));let ge=U&&U.replace!=null?U.replace:void 0,fe=Bt.Push;ge===!0?fe=Bt.Replace:ge===!1||le!=null&&Lr(le.formMethod)&&le.formAction===E.location.pathname+E.location.search&&(fe=Bt.Replace);let pe=U&&"preventScrollReset"in U?U.preventScrollReset===!0:void 0,Ne=(U&&U.flushSync)===!0,Me=pi({currentLocation:Pe,nextLocation:we,historyAction:fe});if(Me){Ir(Me,{state:"blocked",location:we,proceed(){Ir(Me,{state:"proceeding",proceed:void 0,reset:void 0,location:we}),Br(x,U)},reset(){let kt=new Map(E.blockers);kt.set(Me,fl),it({blockers:kt})}});return}return await Wn(fe,we,{submission:le,pendingError:_e,preventScrollReset:pe,replace:U&&U.replace,enableViewTransition:U&&U.viewTransition,flushSync:Ne})}function Bi(){if(It(),it({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){Wn(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}Wn(S||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:O===!0})}}async function Wn(x,U,H){k&&k.abort(),k=null,S=x,Be=(H&&H.startUninterruptedRevalidation)===!0,Us(E.location,E.matches),A=(H&&H.preventScrollReset)===!0,O=(H&&H.enableViewTransition)===!0;let Y=f||h,le=H&&H.overrideNavigation,_e=H!=null&&H.initialHydration&&E.matches&&E.matches.length>0&&!Z?E.matches:oo(Y,U,p),Pe=(H&&H.flushSync)===!0;if(_e&&E.initialized&&!ct&&EI(E.location,U)&&!(H&&H.submission&&Lr(H.submission.formMethod))){Sn(U,{matches:_e},{flushSync:Pe});return}let we=Hr(_e,Y,U.pathname);if(we.active&&we.matches&&(_e=we.matches),!_e){let{error:nt,notFoundMatches:ze,route:at}=dn(U.pathname);Sn(U,{matches:ze,loaderData:{},errors:{[at.id]:nt}},{flushSync:Pe});return}k=new AbortController;let ge=la(n.history,U,k.signal,H&&H.submission),fe;if(H&&H.pendingError)fe=[ao(_e).route.id,{type:ut.error,error:H.pendingError}];else if(H&&H.submission&&Lr(H.submission.formMethod)){let nt=await Ls(ge,U,H.submission,_e,we.active,{replace:H.replace,flushSync:Pe});if(nt.shortCircuited)return;if(nt.pendingActionResult){let[ze,at]=nt.pendingActionResult;if(nr(at)&&Dl(at.error)&&at.error.status===404){k=null,Sn(U,{matches:nt.matches,loaderData:{},errors:{[ze]:at.error}});return}}_e=nt.matches||_e,fe=nt.pendingActionResult,le=hf(U,H.submission),Pe=!1,we.active=!1,ge=la(n.history,ge.url,ge.signal)}let{shortCircuited:pe,matches:Ne,loaderData:Me,errors:kt}=await Po(ge,U,_e,we.active,le,H&&H.submission,H&&H.fetcherSubmission,H&&H.replace,H&&H.initialHydration===!0,Pe,fe);pe||(k=null,Sn(U,Et({matches:Ne||_e},Oy(fe),{loaderData:Me,errors:kt})))}async function Ls(x,U,H,Y,le,_e){_e===void 0&&(_e={}),It();let Pe=PI(U,H);if(it({navigation:Pe},{flushSync:_e.flushSync===!0}),le){let fe=await On(Y,U.pathname,x.signal);if(fe.type==="aborted")return{shortCircuited:!0};if(fe.type==="error"){let pe=ao(fe.partialMatches).route.id;return{matches:fe.partialMatches,pendingActionResult:[pe,{type:ut.error,error:fe.error}]}}else if(fe.matches)Y=fe.matches;else{let{notFoundMatches:pe,error:Ne,route:Me}=dn(U.pathname);return{matches:pe,pendingActionResult:[Me.id,{type:ut.error,error:Ne}]}}}let we,ge=_l(Y,U);if(!ge.route.action&&!ge.route.lazy)we={type:ut.error,error:zn(405,{method:x.method,pathname:U.pathname,routeId:ge.route.id})};else if(we=(await Er("action",E,x,[ge],Y,null))[ge.route.id],x.signal.aborted)return{shortCircuited:!0};if(lo(we)){let fe;return _e&&_e.replace!=null?fe=_e.replace:fe=ky(we.response.headers.get("Location"),new URL(x.url),p)===E.location.pathname+E.location.search,await xn(x,we,!0,{submission:H,replace:fe}),{shortCircuited:!0}}if(Is(we))throw zn(400,{type:"defer-action"});if(nr(we)){let fe=ao(Y,ge.route.id);return(_e&&_e.replace)!==!0&&(S=Bt.Push),{matches:Y,pendingActionResult:[fe.route.id,we]}}return{matches:Y,pendingActionResult:[ge.route.id,we]}}async function Po(x,U,H,Y,le,_e,Pe,we,ge,fe,pe){let Ne=le||hf(U,_e),Me=_e||Pe||My(Ne),kt=!Be&&(!T.v7_partialHydration||!ge);if(Y){if(kt){let st=di(pe);it(Et({navigation:Ne},st!==void 0?{actionData:st}:{}),{flushSync:fe})}let Ke=await On(H,U.pathname,x.signal);if(Ke.type==="aborted")return{shortCircuited:!0};if(Ke.type==="error"){let st=ao(Ke.partialMatches).route.id;return{matches:Ke.partialMatches,loaderData:{},errors:{[st]:Ke.error}}}else if(Ke.matches)H=Ke.matches;else{let{error:st,notFoundMatches:Vt,route:qr}=dn(U.pathname);return{matches:Vt,loaderData:{},errors:{[qr.id]:st}}}}let nt=f||h,[ze,at]=Ay(n.history,E,H,Me,U,T.v7_partialHydration&&ge===!0,T.v7_skipActionErrorRevalidation,ct,Tt,He,Re,ve,q,nt,p,pe);if(Dn(Ke=>!(H&&H.some(st=>st.route.id===Ke))||ze&&ze.some(st=>st.route.id===Ke)),ue=++me,ze.length===0&&at.length===0){let Ke=Hi();return Sn(U,Et({matches:H,loaderData:{},errors:pe&&nr(pe[1])?{[pe[0]]:pe[1].error}:null},Oy(pe),Ke?{fetchers:new Map(E.fetchers)}:{}),{flushSync:fe}),{shortCircuited:!0}}if(kt){let Ke={};if(!Y){Ke.navigation=Ne;let st=di(pe);st!==void 0&&(Ke.actionData=st)}at.length>0&&(Ke.fetchers=_r(at)),it(Ke,{flushSync:fe})}at.forEach(Ke=>{Nn(Ke.key),Ke.controller&&te.set(Ke.key,Ke.controller)});let ar=()=>at.forEach(Ke=>Nn(Ke.key));k&&k.signal.addEventListener("abort",ar);let{loaderResults:Wr,fetcherResults:qn}=await Ct(E,H,ze,at,x);if(x.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",ar),at.forEach(Ke=>te.delete(Ke.key));let We=lc(Wr);if(We)return await xn(x,We.result,!0,{replace:we}),{shortCircuited:!0};if(We=lc(qn),We)return q.add(We.key),await xn(x,We.result,!0,{replace:we}),{shortCircuited:!0};let{loaderData:qi,errors:Gn}=Ny(E,H,Wr,pe,at,qn,Oe);Oe.forEach((Ke,st)=>{Ke.subscribe(Vt=>{(Vt||Ke.done)&&Oe.delete(st)})}),T.v7_partialHydration&&ge&&E.errors&&(Gn=Et({},E.errors,Gn));let fn=Hi(),nn=Wi(ue),Kr=fn||nn||at.length>0;return Et({matches:H,loaderData:qi,errors:Gn},Kr?{fetchers:new Map(E.fetchers)}:{})}function di(x){if(x&&!nr(x[1]))return{[x[0]]:x[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function _r(x){return x.forEach(U=>{let H=E.fetchers.get(U.key),Y=pl(void 0,H?H.data:void 0);E.fetchers.set(U.key,Y)}),new Map(E.fetchers)}function wr(x,U,H,Y){if(s)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Nn(x);let le=(Y&&Y.flushSync)===!0,_e=f||h,Pe=kf(E.location,E.matches,p,T.v7_prependBasename,H,T.v7_relativeSplatPath,U,Y==null?void 0:Y.relative),we=oo(_e,Pe,p),ge=Hr(we,_e,Pe);if(ge.active&&ge.matches&&(we=ge.matches),!we){Rn(x,U,zn(404,{pathname:Pe}),{flushSync:le});return}let{path:fe,submission:pe,error:Ne}=Sy(T.v7_normalizeFormMethod,!0,Pe,Y);if(Ne){Rn(x,U,Ne,{flushSync:le});return}let Me=_l(we,fe),kt=(Y&&Y.preventScrollReset)===!0;if(pe&&Lr(pe.formMethod)){Ms(x,U,fe,Me,we,ge.active,le,kt,pe);return}ve.set(x,{routeId:U,path:fe}),zi(x,U,fe,Me,we,ge.active,le,kt,pe)}async function Ms(x,U,H,Y,le,_e,Pe,we,ge){It(),ve.delete(x);function fe(Qe){if(!Qe.route.action&&!Qe.route.lazy){let lr=zn(405,{method:ge.formMethod,pathname:H,routeId:U});return Rn(x,U,lr,{flushSync:Pe}),!0}return!1}if(!_e&&fe(Y))return;let pe=E.fetchers.get(x);qt(x,CI(ge,pe),{flushSync:Pe});let Ne=new AbortController,Me=la(n.history,H,Ne.signal,ge);if(_e){let Qe=await On(le,new URL(Me.url).pathname,Me.signal,x);if(Qe.type==="aborted")return;if(Qe.type==="error"){Rn(x,U,Qe.error,{flushSync:Pe});return}else if(Qe.matches){if(le=Qe.matches,Y=_l(le,H),fe(Y))return}else{Rn(x,U,zn(404,{pathname:H}),{flushSync:Pe});return}}te.set(x,Ne);let kt=me,ze=(await Er("action",E,Me,[Y],le,x))[Y.route.id];if(Me.signal.aborted){te.get(x)===Ne&&te.delete(x);return}if(T.v7_fetcherPersist&&Re.has(x)){if(lo(ze)||nr(ze)){qt(x,ys(void 0));return}}else{if(lo(ze))if(te.delete(x),ue>kt){qt(x,ys(void 0));return}else return q.add(x),qt(x,pl(ge)),xn(Me,ze,!1,{fetcherSubmission:ge,preventScrollReset:we});if(nr(ze)){Rn(x,U,ze.error);return}}if(Is(ze))throw zn(400,{type:"defer-action"});let at=E.navigation.location||E.location,ar=la(n.history,at,Ne.signal),Wr=f||h,qn=E.navigation.state!=="idle"?oo(Wr,E.navigation.location,p):E.matches;qe(qn,"Didn't find any matches after fetcher action");let We=++me;M.set(x,We);let qi=pl(ge,ze.data);E.fetchers.set(x,qi);let[Gn,fn]=Ay(n.history,E,qn,ge,at,!1,T.v7_skipActionErrorRevalidation,ct,Tt,He,Re,ve,q,Wr,p,[Y.route.id,ze]);fn.filter(Qe=>Qe.key!==x).forEach(Qe=>{let lr=Qe.key,js=E.fetchers.get(lr),Co=pl(void 0,js?js.data:void 0);E.fetchers.set(lr,Co),Nn(lr),Qe.controller&&te.set(lr,Qe.controller)}),it({fetchers:new Map(E.fetchers)});let nn=()=>fn.forEach(Qe=>Nn(Qe.key));Ne.signal.addEventListener("abort",nn);let{loaderResults:Kr,fetcherResults:Ke}=await Ct(E,qn,Gn,fn,ar);if(Ne.signal.aborted)return;Ne.signal.removeEventListener("abort",nn),M.delete(x),te.delete(x),fn.forEach(Qe=>te.delete(Qe.key));let st=lc(Kr);if(st)return xn(ar,st.result,!1,{preventScrollReset:we});if(st=lc(Ke),st)return q.add(st.key),xn(ar,st.result,!1,{preventScrollReset:we});let{loaderData:Vt,errors:qr}=Ny(E,qn,Kr,void 0,fn,Ke,Oe);if(E.fetchers.has(x)){let Qe=ys(ze.data);E.fetchers.set(x,Qe)}Wi(We),E.navigation.state==="loading"&&We>ue?(qe(S,"Expected pending action"),k&&k.abort(),Sn(E.navigation.location,{matches:qn,loaderData:Vt,errors:qr,fetchers:new Map(E.fetchers)})):(it({errors:qr,loaderData:Dy(E.loaderData,Vt,qn,qr),fetchers:new Map(E.fetchers)}),ct=!1)}async function zi(x,U,H,Y,le,_e,Pe,we,ge){let fe=E.fetchers.get(x);qt(x,pl(ge,fe?fe.data:void 0),{flushSync:Pe});let pe=new AbortController,Ne=la(n.history,H,pe.signal);if(_e){let ze=await On(le,new URL(Ne.url).pathname,Ne.signal,x);if(ze.type==="aborted")return;if(ze.type==="error"){Rn(x,U,ze.error,{flushSync:Pe});return}else if(ze.matches)le=ze.matches,Y=_l(le,H);else{Rn(x,U,zn(404,{pathname:H}),{flushSync:Pe});return}}te.set(x,pe);let Me=me,nt=(await Er("loader",E,Ne,[Y],le,x))[Y.route.id];if(Is(nt)&&(nt=await up(nt,Ne.signal,!0)||nt),te.get(x)===pe&&te.delete(x),!Ne.signal.aborted){if(Re.has(x)){qt(x,ys(void 0));return}if(lo(nt))if(ue>Me){qt(x,ys(void 0));return}else{q.add(x),await xn(Ne,nt,!1,{preventScrollReset:we});return}if(nr(nt)){Rn(x,U,nt.error);return}qe(!Is(nt),"Unhandled fetcher deferred data"),qt(x,ys(nt.data))}}async function xn(x,U,H,Y){let{submission:le,fetcherSubmission:_e,preventScrollReset:Pe,replace:we}=Y===void 0?{}:Y;U.response.headers.has("X-Remix-Revalidate")&&(ct=!0);let ge=U.response.headers.get("Location");qe(ge,"Expected a Location header on the redirect Response"),ge=ky(ge,new URL(x.url),p);let fe=Nl(E.location,ge,{_isRedirect:!0});if(t){let ze=!1;if(U.response.headers.has("X-Remix-Reload-Document"))ze=!0;else if(lp.test(ge)){const at=n.history.createURL(ge);ze=at.origin!==e.location.origin||Ca(at.pathname,p)==null}if(ze){we?e.location.replace(ge):e.location.assign(ge);return}}k=null;let pe=we===!0||U.response.headers.has("X-Remix-Replace")?Bt.Replace:Bt.Push,{formMethod:Ne,formAction:Me,formEncType:kt}=E.navigation;!le&&!_e&&Ne&&Me&&kt&&(le=My(E.navigation));let nt=le||_e;if(lI.has(U.response.status)&&nt&&Lr(nt.formMethod))await Wn(pe,fe,{submission:Et({},nt,{formAction:ge}),preventScrollReset:Pe||A,enableViewTransition:H?O:void 0});else{let ze=hf(fe,le);await Wn(pe,fe,{overrideNavigation:ze,fetcherSubmission:_e,preventScrollReset:Pe||A,enableViewTransition:H?O:void 0})}}async function Er(x,U,H,Y,le,_e){let Pe,we={};try{Pe=await gI(y,x,U,H,Y,le,_e,l,o)}catch(ge){return Y.forEach(fe=>{we[fe.route.id]={type:ut.error,error:ge}}),we}for(let[ge,fe]of Object.entries(Pe))if(TI(fe)){let pe=fe.result;we[ge]={type:ut.redirect,response:_I(pe,H,ge,le,p,T.v7_relativeSplatPath)}}else we[ge]=await vI(fe);return we}async function Ct(x,U,H,Y,le){let _e=x.matches,Pe=Er("loader",x,le,H,U,null),we=Promise.all(Y.map(async pe=>{if(pe.matches&&pe.match&&pe.controller){let Me=(await Er("loader",x,la(n.history,pe.path,pe.controller.signal),[pe.match],pe.matches,pe.key))[pe.match.route.id];return{[pe.key]:Me}}else return Promise.resolve({[pe.key]:{type:ut.error,error:zn(404,{pathname:pe.path})}})})),ge=await Pe,fe=(await we).reduce((pe,Ne)=>Object.assign(pe,Ne),{});return await Promise.all([RI(U,ge,le.signal,_e,x.loaderData),AI(U,fe,Y)]),{loaderResults:ge,fetcherResults:fe}}function It(){ct=!0,Tt.push(...Dn()),ve.forEach((x,U)=>{te.has(U)&&He.add(U),Nn(U)})}function qt(x,U,H){H===void 0&&(H={}),E.fetchers.set(x,U),it({fetchers:new Map(E.fetchers)},{flushSync:(H&&H.flushSync)===!0})}function Rn(x,U,H,Y){Y===void 0&&(Y={});let le=ao(E.matches,U);or(x),it({errors:{[le.route.id]:H},fetchers:new Map(E.fetchers)},{flushSync:(Y&&Y.flushSync)===!0})}function Tr(x){return xe.set(x,(xe.get(x)||0)+1),Re.has(x)&&Re.delete(x),E.fetchers.get(x)||uI}function or(x){let U=E.fetchers.get(x);te.has(x)&&!(U&&U.state==="loading"&&M.has(x))&&Nn(x),ve.delete(x),M.delete(x),q.delete(x),T.v7_fetcherPersist&&Re.delete(x),He.delete(x),E.fetchers.delete(x)}function fi(x){let U=(xe.get(x)||0)-1;U<=0?(xe.delete(x),Re.add(x),T.v7_fetcherPersist||or(x)):xe.set(x,U),it({fetchers:new Map(E.fetchers)})}function Nn(x){let U=te.get(x);U&&(U.abort(),te.delete(x))}function $i(x){for(let U of x){let H=Tr(U),Y=ys(H.data);E.fetchers.set(U,Y)}}function Hi(){let x=[],U=!1;for(let H of q){let Y=E.fetchers.get(H);qe(Y,"Expected fetcher: "+H),Y.state==="loading"&&(q.delete(H),x.push(H),U=!0)}return $i(x),U}function Wi(x){let U=[];for(let[H,Y]of M)if(Y<x){let le=E.fetchers.get(H);qe(le,"Expected fetcher: "+H),le.state==="loading"&&(Nn(H),M.delete(H),U.push(H))}return $i(U),U.length>0}function Vs(x,U){let H=E.blockers.get(x)||fl;return Ve.get(x)!==U&&Ve.set(x,U),H}function zr(x){E.blockers.delete(x),Ve.delete(x)}function Ir(x,U){let H=E.blockers.get(x)||fl;qe(H.state==="unblocked"&&U.state==="blocked"||H.state==="blocked"&&U.state==="blocked"||H.state==="blocked"&&U.state==="proceeding"||H.state==="blocked"&&U.state==="unblocked"||H.state==="proceeding"&&U.state==="unblocked","Invalid blocker state transition: "+H.state+" -> "+U.state);let Y=new Map(E.blockers);Y.set(x,U),it({blockers:Y})}function pi(x){let{currentLocation:U,nextLocation:H,historyAction:Y}=x;if(Ve.size===0)return;Ve.size>1&&ga(!1,"A router only supports one blocker at a time");let le=Array.from(Ve.entries()),[_e,Pe]=le[le.length-1],we=E.blockers.get(_e);if(!(we&&we.state==="proceeding")&&Pe({currentLocation:U,nextLocation:H,historyAction:Y}))return _e}function dn(x){let U=zn(404,{pathname:x}),H=f||h,{matches:Y,route:le}=by(H);return Dn(),{notFoundMatches:Y,route:le,error:U}}function Dn(x){let U=[];return Oe.forEach((H,Y)=>{(!x||x(Y))&&(H.cancel(),U.push(Y),Oe.delete(Y))}),U}function Ki(x,U,H){if(V=x,F=U,z=H||null,!X&&E.navigation===cf){X=!0;let Y=$r(E.location,E.matches);Y!=null&&it({restoreScrollPosition:Y})}return()=>{V=null,F=null,z=null}}function Kn(x,U){return z&&z(x,U.map(Y=>jT(Y,E.loaderData)))||x.key}function Us(x,U){if(V&&F){let H=Kn(x,U);V[H]=F()}}function $r(x,U){if(V){let H=Kn(x,U),Y=V[H];if(typeof Y=="number")return Y}return null}function Hr(x,U,H){if(w)if(x){if(Object.keys(x[0].params).length>0)return{active:!0,matches:_c(U,H,p,!0)}}else return{active:!0,matches:_c(U,H,p,!0)||[]};return{active:!1,matches:null}}async function On(x,U,H,Y){if(!w)return{type:"success",matches:x};let le=x;for(;;){let _e=f==null,Pe=f||h,we=l;try{await w({signal:H,path:U,matches:le,fetcherKey:Y,patch:(pe,Ne)=>{H.aborted||Cy(pe,Ne,Pe,we,o)}})}catch(pe){return{type:"error",error:pe,partialMatches:le}}finally{_e&&!H.aborted&&(h=[...h])}if(H.aborted)return{type:"aborted"};let ge=oo(Pe,U,p);if(ge)return{type:"success",matches:ge};let fe=_c(Pe,U,p,!0);if(!fe||le.length===fe.length&&le.every((pe,Ne)=>pe.route.id===fe[Ne].route.id))return{type:"success",matches:null};le=fe}}function Fs(x){l={},f=Dc(x,o,void 0,l)}function St(x,U){let H=f==null;Cy(x,U,f||h,l,o),H&&(h=[...h],it({}))}return ce={get basename(){return p},get future(){return T},get state(){return E},get routes(){return h},get window(){return e},initialize:Ge,subscribe:hn,enableScrollRestoration:Ki,navigate:Br,fetch:wr,revalidate:Bi,createHref:x=>n.history.createHref(x),encodeLocation:x=>n.history.encodeLocation(x),getFetcher:Tr,deleteFetcher:fi,dispose:vt,getBlocker:Vs,deleteBlocker:zr,patchRoutes:St,_internalFetchControllers:te,_internalActiveDeferreds:Oe,_internalSetRoutes:Fs},ce}function dI(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function kf(n,e,t,s,o,l,h,f){let p,y;if(h){p=[];for(let T of e)if(p.push(T),T.route.id===h){y=T;break}}else p=e,y=e[e.length-1];let w=uh(o||".",lh(p,l),Ca(n.pathname,t)||n.pathname,f==="path");if(o==null&&(w.search=n.search,w.hash=n.hash),(o==null||o===""||o===".")&&y){let T=cp(w.search);if(y.route.index&&!T)w.search=w.search?w.search.replace(/^\?/,"?index&"):"?index";else if(!y.route.index&&T){let R=new URLSearchParams(w.search),N=R.getAll("index");R.delete("index"),N.filter(z=>z).forEach(z=>R.append("index",z));let V=R.toString();w.search=V?"?"+V:""}}return s&&t!=="/"&&(w.pathname=w.pathname==="/"?t:Oi([t,w.pathname])),vo(w)}function Sy(n,e,t,s){if(!s||!dI(s))return{path:t};if(s.formMethod&&!SI(s.formMethod))return{path:t,error:zn(405,{method:s.formMethod})};let o=()=>({path:t,error:zn(400,{type:"invalid-body"})}),l=s.formMethod||"get",h=n?l.toUpperCase():l.toLowerCase(),f=E_(t);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!Lr(h))return o();let R=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((N,V)=>{let[z,F]=V;return""+N+z+"="+F+`
`},""):String(s.body);return{path:t,submission:{formMethod:h,formAction:f,formEncType:s.formEncType,formData:void 0,json:void 0,text:R}}}else if(s.formEncType==="application/json"){if(!Lr(h))return o();try{let R=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:t,submission:{formMethod:h,formAction:f,formEncType:s.formEncType,formData:void 0,json:R,text:void 0}}}catch{return o()}}}qe(typeof FormData=="function","FormData is not available in this environment");let p,y;if(s.formData)p=Nf(s.formData),y=s.formData;else if(s.body instanceof FormData)p=Nf(s.body),y=s.body;else if(s.body instanceof URLSearchParams)p=s.body,y=xy(p);else if(s.body==null)p=new URLSearchParams,y=new FormData;else try{p=new URLSearchParams(s.body),y=xy(p)}catch{return o()}let w={formMethod:h,formAction:f,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:y,json:void 0,text:void 0};if(Lr(w.formMethod))return{path:t,submission:w};let T=Ds(t);return e&&T.search&&cp(T.search)&&p.append("index",""),T.search="?"+p,{path:vo(T),submission:w}}function Ry(n,e,t){t===void 0&&(t=!1);let s=n.findIndex(o=>o.route.id===e);return s>=0?n.slice(0,t?s+1:s):n}function Ay(n,e,t,s,o,l,h,f,p,y,w,T,R,N,V,z){let F=z?nr(z[1])?z[1].error:z[1].data:void 0,X=n.createURL(e.location),G=n.createURL(o),Z=t;l&&e.errors?Z=Ry(t,Object.keys(e.errors)[0],!0):z&&nr(z[1])&&(Z=Ry(t,z[0]));let ne=z?z[1].statusCode:void 0,de=h&&ne&&ne>=400,ce=Z.filter((S,A)=>{let{route:k}=S;if(k.lazy)return!0;if(k.loader==null)return!1;if(l)return xf(k,e.loaderData,e.errors);if(fI(e.loaderData,e.matches[A],S)||p.some(C=>C===S.route.id))return!0;let O=e.matches[A],L=S;return Py(S,Et({currentUrl:X,currentParams:O.params,nextUrl:G,nextParams:L.params},s,{actionResult:F,actionStatus:ne,defaultShouldRevalidate:de?!1:f||X.pathname+X.search===G.pathname+G.search||X.search!==G.search||__(O,L)}))}),E=[];return T.forEach((S,A)=>{if(l||!t.some(Be=>Be.route.id===S.routeId)||w.has(A))return;let k=oo(N,S.path,V);if(!k){E.push({key:A,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let O=e.fetchers.get(A),L=_l(k,S.path),C=!1;R.has(A)?C=!1:y.has(A)?(y.delete(A),C=!0):O&&O.state!=="idle"&&O.data===void 0?C=f:C=Py(L,Et({currentUrl:X,currentParams:e.matches[e.matches.length-1].params,nextUrl:G,nextParams:t[t.length-1].params},s,{actionResult:F,actionStatus:ne,defaultShouldRevalidate:de?!1:f})),C&&E.push({key:A,routeId:S.routeId,path:S.path,matches:k,match:L,controller:new AbortController})}),[ce,E]}function xf(n,e,t){if(n.lazy)return!0;if(!n.loader)return!1;let s=e!=null&&e[n.id]!==void 0,o=t!=null&&t[n.id]!==void 0;return!s&&o?!1:typeof n.loader=="function"&&n.loader.hydrate===!0?!0:!s&&!o}function fI(n,e,t){let s=!e||t.route.id!==e.route.id,o=n[t.route.id]===void 0;return s||o}function __(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function Py(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}function Cy(n,e,t,s,o){var l;let h;if(n){let y=s[n];qe(y,"No route found to patch children into: routeId = "+n),y.children||(y.children=[]),h=y.children}else h=t;let f=e.filter(y=>!h.some(w=>w_(y,w))),p=Dc(f,o,[n||"_","patch",String(((l=h)==null?void 0:l.length)||"0")],s);h.push(...p)}function w_(n,e){return"id"in n&&"id"in e&&n.id===e.id?!0:n.index===e.index&&n.path===e.path&&n.caseSensitive===e.caseSensitive?(!n.children||n.children.length===0)&&(!e.children||e.children.length===0)?!0:n.children.every((t,s)=>{var o;return(o=e.children)==null?void 0:o.some(l=>w_(t,l))}):!1}async function pI(n,e,t){if(!n.lazy)return;let s=await n.lazy();if(!n.lazy)return;let o=t[n.id];qe(o,"No route found in manifest");let l={};for(let h in s){let p=o[h]!==void 0&&h!=="hasErrorBoundary";ga(!p,'Route "'+o.id+'" has a static property "'+h+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+h+'" will be ignored.')),!p&&!UT.has(h)&&(l[h]=s[h])}Object.assign(o,l),Object.assign(o,Et({},e(o),{lazy:void 0}))}async function mI(n){let{matches:e}=n,t=e.filter(o=>o.shouldLoad);return(await Promise.all(t.map(o=>o.resolve()))).reduce((o,l,h)=>Object.assign(o,{[t[h].route.id]:l}),{})}async function gI(n,e,t,s,o,l,h,f,p,y){let w=l.map(N=>N.route.lazy?pI(N.route,p,f):void 0),T=l.map((N,V)=>{let z=w[V],F=o.some(G=>G.route.id===N.route.id);return Et({},N,{shouldLoad:F,resolve:async G=>(G&&s.method==="GET"&&(N.route.lazy||N.route.loader)&&(F=!0),F?yI(e,s,N,z,G,y):Promise.resolve({type:ut.data,result:void 0}))})}),R=await n({matches:T,request:s,params:l[0].params,fetcherKey:h,context:y});try{await Promise.all(w)}catch{}return R}async function yI(n,e,t,s,o,l){let h,f,p=y=>{let w,T=new Promise((V,z)=>w=z);f=()=>w(),e.signal.addEventListener("abort",f);let R=V=>typeof y!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+t.route.id+"]"))):y({request:e,params:t.params,context:l},...V!==void 0?[V]:[]),N=(async()=>{try{return{type:"data",result:await(o?o(z=>R(z)):R())}}catch(V){return{type:"error",result:V}}})();return Promise.race([N,T])};try{let y=t.route[n];if(s)if(y){let w,[T]=await Promise.all([p(y).catch(R=>{w=R}),s]);if(w!==void 0)throw w;h=T}else if(await s,y=t.route[n],y)h=await p(y);else if(n==="action"){let w=new URL(e.url),T=w.pathname+w.search;throw zn(405,{method:e.method,pathname:T,routeId:t.route.id})}else return{type:ut.data,result:void 0};else if(y)h=await p(y);else{let w=new URL(e.url),T=w.pathname+w.search;throw zn(404,{pathname:T})}qe(h.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(y){return{type:ut.error,result:y}}finally{f&&e.signal.removeEventListener("abort",f)}return h}async function vI(n){let{result:e,type:t}=n;if(T_(e)){let T;try{let R=e.headers.get("Content-Type");R&&/\bapplication\/json\b/.test(R)?e.body==null?T=null:T=await e.json():T=await e.text()}catch(R){return{type:ut.error,error:R}}return t===ut.error?{type:ut.error,error:new Oc(e.status,e.statusText,T),statusCode:e.status,headers:e.headers}:{type:ut.data,data:T,statusCode:e.status,headers:e.headers}}if(t===ut.error){if(Ly(e)){var s,o;if(e.data instanceof Error){var l,h;return{type:ut.error,error:e.data,statusCode:(l=e.init)==null?void 0:l.status,headers:(h=e.init)!=null&&h.headers?new Headers(e.init.headers):void 0}}return{type:ut.error,error:new Oc(((s=e.init)==null?void 0:s.status)||500,void 0,e.data),statusCode:Dl(e)?e.status:void 0,headers:(o=e.init)!=null&&o.headers?new Headers(e.init.headers):void 0}}return{type:ut.error,error:e,statusCode:Dl(e)?e.status:void 0}}if(II(e)){var f,p;return{type:ut.deferred,deferredData:e,statusCode:(f=e.init)==null?void 0:f.status,headers:((p=e.init)==null?void 0:p.headers)&&new Headers(e.init.headers)}}if(Ly(e)){var y,w;return{type:ut.data,data:e.data,statusCode:(y=e.init)==null?void 0:y.status,headers:(w=e.init)!=null&&w.headers?new Headers(e.init.headers):void 0}}return{type:ut.data,data:e}}function _I(n,e,t,s,o,l){let h=n.headers.get("Location");if(qe(h,"Redirects returned/thrown from loaders/actions must have a Location header"),!lp.test(h)){let f=s.slice(0,s.findIndex(p=>p.route.id===t)+1);h=kf(new URL(e.url),f,o,!0,h,l),n.headers.set("Location",h)}return n}function ky(n,e,t){if(lp.test(n)){let s=n,o=s.startsWith("//")?new URL(e.protocol+s):new URL(s),l=Ca(o.pathname,t)!=null;if(o.origin===e.origin&&l)return o.pathname+o.search+o.hash}return n}function la(n,e,t,s){let o=n.createURL(E_(e)).toString(),l={signal:t};if(s&&Lr(s.formMethod)){let{formMethod:h,formEncType:f}=s;l.method=h.toUpperCase(),f==="application/json"?(l.headers=new Headers({"Content-Type":f}),l.body=JSON.stringify(s.json)):f==="text/plain"?l.body=s.text:f==="application/x-www-form-urlencoded"&&s.formData?l.body=Nf(s.formData):l.body=s.formData}return new Request(o,l)}function Nf(n){let e=new URLSearchParams;for(let[t,s]of n.entries())e.append(t,typeof s=="string"?s:s.name);return e}function xy(n){let e=new FormData;for(let[t,s]of n.entries())e.append(t,s);return e}function wI(n,e,t,s,o){let l={},h=null,f,p=!1,y={},w=t&&nr(t[1])?t[1].error:void 0;return n.forEach(T=>{if(!(T.route.id in e))return;let R=T.route.id,N=e[R];if(qe(!lo(N),"Cannot handle redirect results in processLoaderData"),nr(N)){let V=N.error;w!==void 0&&(V=w,w=void 0),h=h||{};{let z=ao(n,R);h[z.route.id]==null&&(h[z.route.id]=V)}l[R]=void 0,p||(p=!0,f=Dl(N.error)?N.error.status:500),N.headers&&(y[R]=N.headers)}else Is(N)?(s.set(R,N.deferredData),l[R]=N.deferredData.data,N.statusCode!=null&&N.statusCode!==200&&!p&&(f=N.statusCode),N.headers&&(y[R]=N.headers)):(l[R]=N.data,N.statusCode&&N.statusCode!==200&&!p&&(f=N.statusCode),N.headers&&(y[R]=N.headers))}),w!==void 0&&t&&(h={[t[0]]:w},l[t[0]]=void 0),{loaderData:l,errors:h,statusCode:f||200,loaderHeaders:y}}function Ny(n,e,t,s,o,l,h){let{loaderData:f,errors:p}=wI(e,t,s,h);return o.forEach(y=>{let{key:w,match:T,controller:R}=y,N=l[w];if(qe(N,"Did not find corresponding fetcher result"),!(R&&R.signal.aborted))if(nr(N)){let V=ao(n.matches,T==null?void 0:T.route.id);p&&p[V.route.id]||(p=Et({},p,{[V.route.id]:N.error})),n.fetchers.delete(w)}else if(lo(N))qe(!1,"Unhandled fetcher revalidation redirect");else if(Is(N))qe(!1,"Unhandled fetcher deferred data");else{let V=ys(N.data);n.fetchers.set(w,V)}}),{loaderData:f,errors:p}}function Dy(n,e,t,s){let o=Et({},e);for(let l of t){let h=l.route.id;if(e.hasOwnProperty(h)?e[h]!==void 0&&(o[h]=e[h]):n[h]!==void 0&&l.route.loader&&(o[h]=n[h]),s&&s.hasOwnProperty(h))break}return o}function Oy(n){return n?nr(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function ao(n,e){return(e?n.slice(0,n.findIndex(s=>s.route.id===e)+1):[...n]).reverse().find(s=>s.route.hasErrorBoundary===!0)||n[0]}function by(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function zn(n,e){let{pathname:t,routeId:s,method:o,type:l,message:h}=e===void 0?{}:e,f="Unknown Server Error",p="Unknown @remix-run/router error";return n===400?(f="Bad Request",o&&t&&s?p="You made a "+o+' request to "'+t+'" but '+('did not provide a `loader` for route "'+s+'", ')+"so there is no way to handle the request.":l==="defer-action"?p="defer() is not supported in actions":l==="invalid-body"&&(p="Unable to encode submission body")):n===403?(f="Forbidden",p='Route "'+s+'" does not match URL "'+t+'"'):n===404?(f="Not Found",p='No route matches URL "'+t+'"'):n===405&&(f="Method Not Allowed",o&&t&&s?p="You made a "+o.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+s+'", ')+"so there is no way to handle the request.":o&&(p='Invalid request method "'+o.toUpperCase()+'"')),new Oc(n||500,f,new Error(p),!0)}function lc(n){let e=Object.entries(n);for(let t=e.length-1;t>=0;t--){let[s,o]=e[t];if(lo(o))return{key:s,result:o}}}function E_(n){let e=typeof n=="string"?Ds(n):n;return vo(Et({},e,{hash:""}))}function EI(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function TI(n){return T_(n.result)&&aI.has(n.result.status)}function Is(n){return n.type===ut.deferred}function nr(n){return n.type===ut.error}function lo(n){return(n&&n.type)===ut.redirect}function Ly(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function II(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function T_(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function SI(n){return oI.has(n.toLowerCase())}function Lr(n){return iI.has(n.toLowerCase())}async function RI(n,e,t,s,o){let l=Object.entries(e);for(let h=0;h<l.length;h++){let[f,p]=l[h],y=n.find(R=>(R==null?void 0:R.route.id)===f);if(!y)continue;let w=s.find(R=>R.route.id===y.route.id),T=w!=null&&!__(w,y)&&(o&&o[y.route.id])!==void 0;Is(p)&&T&&await up(p,t,!1).then(R=>{R&&(e[f]=R)})}}async function AI(n,e,t){for(let s=0;s<t.length;s++){let{key:o,routeId:l,controller:h}=t[s],f=e[o];n.find(y=>(y==null?void 0:y.route.id)===l)&&Is(f)&&(qe(h,"Expected an AbortController for revalidating fetcher deferred result"),await up(f,h.signal,!0).then(y=>{y&&(e[o]=y)}))}}async function up(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:ut.data,data:n.deferredData.unwrappedData}}catch(o){return{type:ut.error,error:o}}return{type:ut.data,data:n.deferredData.data}}}function cp(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function _l(n,e){let t=typeof e=="string"?Ds(e).search:e.search;if(n[n.length-1].route.index&&cp(t||""))return n[n.length-1];let s=g_(n);return s[s.length-1]}function My(n){let{formMethod:e,formAction:t,formEncType:s,text:o,formData:l,json:h}=n;if(!(!e||!t||!s)){if(o!=null)return{formMethod:e,formAction:t,formEncType:s,formData:void 0,json:void 0,text:o};if(l!=null)return{formMethod:e,formAction:t,formEncType:s,formData:l,json:void 0,text:void 0};if(h!==void 0)return{formMethod:e,formAction:t,formEncType:s,formData:void 0,json:h,text:void 0}}}function hf(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function PI(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function pl(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function CI(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function ys(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function kI(n,e){try{let t=n.sessionStorage.getItem(v_);if(t){let s=JSON.parse(t);for(let[o,l]of Object.entries(s||{}))l&&Array.isArray(l)&&e.set(o,new Set(l||[]))}}catch{}}function xI(n,e){if(e.size>0){let t={};for(let[s,o]of e)t[s]=[...o];try{n.sessionStorage.setItem(v_,JSON.stringify(t))}catch(s){ga(!1,"Failed to save applied view transitions in sessionStorage ("+s+").")}}}/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},bc.apply(this,arguments)}const ch=Q.createContext(null),I_=Q.createContext(null),Os=Q.createContext(null),hp=Q.createContext(null),Ui=Q.createContext({outlet:null,matches:[],isDataRoute:!1}),S_=Q.createContext(null);function NI(n,e){let{relative:t}=e===void 0?{}:e;ka()||qe(!1);let{basename:s,navigator:o}=Q.useContext(Os),{hash:l,pathname:h,search:f}=A_(n,{relative:t}),p=h;return s!=="/"&&(p=h==="/"?s:Oi([s,h])),o.createHref({pathname:p,search:f,hash:l})}function ka(){return Q.useContext(hp)!=null}function Hl(){return ka()||qe(!1),Q.useContext(hp).location}function R_(n){Q.useContext(Os).static||Q.useLayoutEffect(n)}function xa(){let{isDataRoute:n}=Q.useContext(Ui);return n?WI():DI()}function DI(){ka()||qe(!1);let n=Q.useContext(ch),{basename:e,future:t,navigator:s}=Q.useContext(Os),{matches:o}=Q.useContext(Ui),{pathname:l}=Hl(),h=JSON.stringify(lh(o,t.v7_relativeSplatPath)),f=Q.useRef(!1);return R_(()=>{f.current=!0}),Q.useCallback(function(y,w){if(w===void 0&&(w={}),!f.current)return;if(typeof y=="number"){s.go(y);return}let T=uh(y,JSON.parse(h),l,w.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:Oi([e,T.pathname])),(w.replace?s.replace:s.push)(T,w.state,w)},[e,s,h,l,n])}const OI=Q.createContext(null);function bI(n){let e=Q.useContext(Ui).outlet;return e&&Q.createElement(OI.Provider,{value:n},e)}function A_(n,e){let{relative:t}=e===void 0?{}:e,{future:s}=Q.useContext(Os),{matches:o}=Q.useContext(Ui),{pathname:l}=Hl(),h=JSON.stringify(lh(o,s.v7_relativeSplatPath));return Q.useMemo(()=>uh(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function LI(n,e,t,s){ka()||qe(!1);let{navigator:o,static:l}=Q.useContext(Os),{matches:h}=Q.useContext(Ui),f=h[h.length-1],p=f?f.params:{};f&&f.pathname;let y=f?f.pathnameBase:"/";f&&f.route;let w=Hl(),T;T=w;let R=T.pathname||"/",N=R;if(y!=="/"){let F=y.replace(/^\//,"").split("/");N="/"+R.replace(/^\//,"").split("/").slice(F.length).join("/")}let V=!l&&t&&t.matches&&t.matches.length>0?t.matches:oo(n,{pathname:N});return jI(V&&V.map(F=>Object.assign({},F,{params:Object.assign({},p,F.params),pathname:Oi([y,o.encodeLocation?o.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?y:Oi([y,o.encodeLocation?o.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),h,t,s)}function MI(){let n=HI(),e=Dl(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:o},t):null,null)}const VI=Q.createElement(MI,null);class UI extends Q.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Q.createElement(Ui.Provider,{value:this.props.routeContext},Q.createElement(S_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FI(n){let{routeContext:e,match:t,children:s}=n,o=Q.useContext(ch);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Q.createElement(Ui.Provider,{value:e},s)}function jI(n,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),n==null){var l;if(!t)return null;if(t.errors)n=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let w=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);w>=0||qe(!1),h=h.slice(0,Math.min(h.length,w+1))}let p=!1,y=-1;if(t&&s&&s.v7_partialHydration)for(let w=0;w<h.length;w++){let T=h[w];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=w),T.route.id){let{loaderData:R,errors:N}=t,V=T.route.loader&&R[T.route.id]===void 0&&(!N||N[T.route.id]===void 0);if(T.route.lazy||V){p=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}}return h.reduceRight((w,T,R)=>{let N,V=!1,z=null,F=null;t&&(N=f&&T.route.id?f[T.route.id]:void 0,z=T.route.errorElement||VI,p&&(y<0&&R===0?(KI("route-fallback"),V=!0,F=null):y===R&&(V=!0,F=T.route.hydrateFallbackElement||null)));let X=e.concat(h.slice(0,R+1)),G=()=>{let Z;return N?Z=z:V?Z=F:T.route.Component?Z=Q.createElement(T.route.Component,null):T.route.element?Z=T.route.element:Z=w,Q.createElement(FI,{match:T,routeContext:{outlet:w,matches:X,isDataRoute:t!=null},children:Z})};return t&&(T.route.ErrorBoundary||T.route.errorElement||R===0)?Q.createElement(UI,{location:t.location,revalidation:t.revalidation,component:z,error:N,children:G(),routeContext:{outlet:null,matches:X,isDataRoute:!0}}):G()},null)}var P_=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(P_||{}),C_=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(C_||{});function BI(n){let e=Q.useContext(ch);return e||qe(!1),e}function zI(n){let e=Q.useContext(I_);return e||qe(!1),e}function $I(n){let e=Q.useContext(Ui);return e||qe(!1),e}function k_(n){let e=$I(),t=e.matches[e.matches.length-1];return t.route.id||qe(!1),t.route.id}function HI(){var n;let e=Q.useContext(S_),t=zI(),s=k_();return e!==void 0?e:(n=t.errors)==null?void 0:n[s]}function WI(){let{router:n}=BI(P_.UseNavigateStable),e=k_(C_.UseNavigateStable),t=Q.useRef(!1);return R_(()=>{t.current=!0}),Q.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,bc({fromRouteId:e},l)))},[n,e])}const Vy={};function KI(n,e,t){Vy[n]||(Vy[n]=!0)}function qI(n,e){n==null||n.v7_startTransition,(n==null?void 0:n.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function GI(n){let{to:e,replace:t,state:s,relative:o}=n;ka()||qe(!1);let{future:l,static:h}=Q.useContext(Os),{matches:f}=Q.useContext(Ui),{pathname:p}=Hl(),y=xa(),w=uh(e,lh(f,l.v7_relativeSplatPath),p,o==="path"),T=JSON.stringify(w);return Q.useEffect(()=>y(JSON.parse(T),{replace:t,state:s,relative:o}),[y,T,o,t,s]),null}function QI(n){return bI(n.context)}function YI(n){let{basename:e="/",children:t=null,location:s,navigationType:o=Bt.Pop,navigator:l,static:h=!1,future:f}=n;ka()&&qe(!1);let p=e.replace(/^\/*/,"/"),y=Q.useMemo(()=>({basename:p,navigator:l,static:h,future:bc({v7_relativeSplatPath:!1},f)}),[p,f,l,h]);typeof s=="string"&&(s=Ds(s));let{pathname:w="/",search:T="",hash:R="",state:N=null,key:V="default"}=s,z=Q.useMemo(()=>{let F=Ca(w,p);return F==null?null:{location:{pathname:F,search:T,hash:R,state:N,key:V},navigationType:o}},[p,w,T,R,N,V,o]);return z==null?null:Q.createElement(Os.Provider,{value:y},Q.createElement(hp.Provider,{children:t,value:z}))}new Promise(()=>{});function XI(n){let e={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(e,{element:Q.createElement(n.Component),Component:void 0}),n.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:Q.createElement(n.HydrateFallback),HydrateFallback:void 0}),n.ErrorBoundary&&Object.assign(e,{errorElement:Q.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},Ol.apply(this,arguments)}function JI(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function ZI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function eS(n,e){return n.button===0&&(!e||e==="_self")&&!ZI(n)}const tS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nS="6";try{window.__reactRouterVersion=nS}catch{}function rS(n,e){return hI({basename:e==null?void 0:e.basename,future:Ol({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:LT({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||iS(),routes:n,mapRouteProperties:XI,dataStrategy:e==null?void 0:e.dataStrategy,patchRoutesOnNavigation:e==null?void 0:e.patchRoutesOnNavigation,window:e==null?void 0:e.window}).initialize()}function iS(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=Ol({},e,{errors:sS(e.errors)})),e}function sS(n){if(!n)return null;let e=Object.entries(n),t={};for(let[s,o]of e)if(o&&o.__type==="RouteErrorResponse")t[s]=new Oc(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let l=window[o.__subType];if(typeof l=="function")try{let h=new l(o.message);h.stack="",t[s]=h}catch{}}if(t[s]==null){let l=new Error(o.message);l.stack="",t[s]=l}}else t[s]=o;return t}const oS=Q.createContext({isTransitioning:!1}),aS=Q.createContext(new Map),lS="startTransition",Uy=AT[lS],uS="flushSync",Fy=bT[uS];function cS(n){Uy?Uy(n):n()}function ml(n){Fy?Fy(n):n()}let hS=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",e(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",t(s))}})}};function dS(n){let{fallbackElement:e,router:t,future:s}=n,[o,l]=Q.useState(t.state),[h,f]=Q.useState(),[p,y]=Q.useState({isTransitioning:!1}),[w,T]=Q.useState(),[R,N]=Q.useState(),[V,z]=Q.useState(),F=Q.useRef(new Map),{v7_startTransition:X}=s||{},G=Q.useCallback(S=>{X?cS(S):S()},[X]),Z=Q.useCallback((S,A)=>{let{deletedFetchers:k,flushSync:O,viewTransitionOpts:L}=A;S.fetchers.forEach((Be,ct)=>{Be.data!==void 0&&F.current.set(ct,Be.data)}),k.forEach(Be=>F.current.delete(Be));let C=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!L||C){O?ml(()=>l(S)):G(()=>l(S));return}if(O){ml(()=>{R&&(w&&w.resolve(),R.skipTransition()),y({isTransitioning:!0,flushSync:!0,currentLocation:L.currentLocation,nextLocation:L.nextLocation})});let Be=t.window.document.startViewTransition(()=>{ml(()=>l(S))});Be.finished.finally(()=>{ml(()=>{T(void 0),N(void 0),f(void 0),y({isTransitioning:!1})})}),ml(()=>N(Be));return}R?(w&&w.resolve(),R.skipTransition(),z({state:S,currentLocation:L.currentLocation,nextLocation:L.nextLocation})):(f(S),y({isTransitioning:!0,flushSync:!1,currentLocation:L.currentLocation,nextLocation:L.nextLocation}))},[t.window,R,w,F,G]);Q.useLayoutEffect(()=>t.subscribe(Z),[t,Z]),Q.useEffect(()=>{p.isTransitioning&&!p.flushSync&&T(new hS)},[p]),Q.useEffect(()=>{if(w&&h&&t.window){let S=h,A=w.promise,k=t.window.document.startViewTransition(async()=>{G(()=>l(S)),await A});k.finished.finally(()=>{T(void 0),N(void 0),f(void 0),y({isTransitioning:!1})}),N(k)}},[G,h,w,t.window]),Q.useEffect(()=>{w&&h&&o.location.key===h.location.key&&w.resolve()},[w,R,o.location,h]),Q.useEffect(()=>{!p.isTransitioning&&V&&(f(V.state),y({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}),z(void 0))},[p.isTransitioning,V]),Q.useEffect(()=>{},[]);let ne=Q.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:S=>t.navigate(S),push:(S,A,k)=>t.navigate(S,{state:A,preventScrollReset:k==null?void 0:k.preventScrollReset}),replace:(S,A,k)=>t.navigate(S,{replace:!0,state:A,preventScrollReset:k==null?void 0:k.preventScrollReset})}),[t]),de=t.basename||"/",ce=Q.useMemo(()=>({router:t,navigator:ne,static:!1,basename:de}),[t,ne,de]),E=Q.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return Q.useEffect(()=>qI(s,t.future),[s,t.future]),Q.createElement(Q.Fragment,null,Q.createElement(ch.Provider,{value:ce},Q.createElement(I_.Provider,{value:o},Q.createElement(aS.Provider,{value:F.current},Q.createElement(oS.Provider,{value:p},Q.createElement(YI,{basename:de,location:o.location,navigationType:o.historyAction,navigator:ne,future:E},o.initialized||t.future.v7_partialHydration?Q.createElement(fS,{routes:t.routes,future:t.future,state:o}):e))))),null)}const fS=Q.memo(pS);function pS(n){let{routes:e,future:t,state:s}=n;return LI(e,void 0,s,t)}const mS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lc=Q.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:w,viewTransition:T}=e,R=JI(e,tS),{basename:N}=Q.useContext(Os),V,z=!1;if(typeof y=="string"&&gS.test(y)&&(V=y,mS))try{let Z=new URL(window.location.href),ne=y.startsWith("//")?new URL(Z.protocol+y):new URL(y),de=Ca(ne.pathname,N);ne.origin===Z.origin&&de!=null?y=de+ne.search+ne.hash:z=!0}catch{}let F=NI(y,{relative:o}),X=yS(y,{replace:h,state:f,target:p,preventScrollReset:w,relative:o,viewTransition:T});function G(Z){s&&s(Z),Z.defaultPrevented||X(Z)}return Q.createElement("a",Ol({},R,{href:V||F,onClick:z||l?s:G,ref:t,target:p}))});var jy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(jy||(jy={}));var By;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(By||(By={}));function yS(n,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:h,viewTransition:f}=e===void 0?{}:e,p=xa(),y=Hl(),w=A_(n,{relative:h});return Q.useCallback(T=>{if(eS(T,t)){T.preventDefault();let R=s!==void 0?s:vo(y)===vo(w);p(n,{replace:R,state:o,preventScrollReset:l,relative:h,viewTransition:f})}},[y,p,w,s,o,t,n,l,h,f])}var En=function(){return En=Object.assign||function(e){for(var t,s=1,o=arguments.length;s<o;s++){t=arguments[s];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},En.apply(this,arguments)};function bl(n,e,t){if(t||arguments.length===2)for(var s=0,o=e.length,l;s<o;s++)(l||!(s in e))&&(l||(l=Array.prototype.slice.call(e,0,s)),l[s]=e[s]);return n.concat(l||Array.prototype.slice.call(e))}var yt="-ms-",Sl="-moz-",ot="-webkit-",x_="comm",hh="rule",dp="decl",vS="@import",N_="@keyframes",_S="@layer",D_=Math.abs,fp=String.fromCharCode,Df=Object.assign;function wS(n,e){return Zt(n,0)^45?(((e<<2^Zt(n,0))<<2^Zt(n,1))<<2^Zt(n,2))<<2^Zt(n,3):0}function O_(n){return n.trim()}function Ci(n,e){return(n=e.exec(n))?n[0]:n}function Fe(n,e,t){return n.replace(e,t)}function wc(n,e,t){return n.indexOf(e,t)}function Zt(n,e){return n.charCodeAt(e)|0}function ya(n,e,t){return n.slice(e,t)}function ri(n){return n.length}function b_(n){return n.length}function wl(n,e){return e.push(n),n}function ES(n,e){return n.map(e).join("")}function zy(n,e){return n.filter(function(t){return!Ci(t,e)})}var dh=1,va=1,L_=0,yr=0,zt=0,Na="";function fh(n,e,t,s,o,l,h,f){return{value:n,root:e,parent:t,type:s,props:o,children:l,line:dh,column:va,length:h,return:"",siblings:f}}function vs(n,e){return Df(fh("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ua(n){for(;n.root;)n=vs(n.root,{children:[n]});wl(n,n.siblings)}function TS(){return zt}function IS(){return zt=yr>0?Zt(Na,--yr):0,va--,zt===10&&(va=1,dh--),zt}function Fr(){return zt=yr<L_?Zt(Na,yr++):0,va++,zt===10&&(va=1,dh++),zt}function po(){return Zt(Na,yr)}function Ec(){return yr}function ph(n,e){return ya(Na,n,e)}function Of(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SS(n){return dh=va=1,L_=ri(Na=n),yr=0,[]}function RS(n){return Na="",n}function df(n){return O_(ph(yr-1,bf(n===91?n+2:n===40?n+1:n)))}function AS(n){for(;(zt=po())&&zt<33;)Fr();return Of(n)>2||Of(zt)>3?"":" "}function PS(n,e){for(;--e&&Fr()&&!(zt<48||zt>102||zt>57&&zt<65||zt>70&&zt<97););return ph(n,Ec()+(e<6&&po()==32&&Fr()==32))}function bf(n){for(;Fr();)switch(zt){case n:return yr;case 34:case 39:n!==34&&n!==39&&bf(zt);break;case 40:n===41&&bf(n);break;case 92:Fr();break}return yr}function CS(n,e){for(;Fr()&&n+zt!==57;)if(n+zt===84&&po()===47)break;return"/*"+ph(e,yr-1)+"*"+fp(n===47?n:Fr())}function kS(n){for(;!Of(po());)Fr();return ph(n,yr)}function xS(n){return RS(Tc("",null,null,null,[""],n=SS(n),0,[0],n))}function Tc(n,e,t,s,o,l,h,f,p){for(var y=0,w=0,T=h,R=0,N=0,V=0,z=1,F=1,X=1,G=0,Z="",ne=o,de=l,ce=s,E=Z;F;)switch(V=G,G=Fr()){case 40:if(V!=108&&Zt(E,T-1)==58){wc(E+=Fe(df(G),"&","&\f"),"&\f",D_(y?f[y-1]:0))!=-1&&(X=-1);break}case 34:case 39:case 91:E+=df(G);break;case 9:case 10:case 13:case 32:E+=AS(V);break;case 92:E+=PS(Ec()-1,7);continue;case 47:switch(po()){case 42:case 47:wl(NS(CS(Fr(),Ec()),e,t,p),p);break;default:E+="/"}break;case 123*z:f[y++]=ri(E)*X;case 125*z:case 59:case 0:switch(G){case 0:case 125:F=0;case 59+w:X==-1&&(E=Fe(E,/\f/g,"")),N>0&&ri(E)-T&&wl(N>32?Hy(E+";",s,t,T-1,p):Hy(Fe(E," ","")+";",s,t,T-2,p),p);break;case 59:E+=";";default:if(wl(ce=$y(E,e,t,y,w,o,f,Z,ne=[],de=[],T,l),l),G===123)if(w===0)Tc(E,e,ce,ce,ne,l,T,f,de);else switch(R===99&&Zt(E,3)===110?100:R){case 100:case 108:case 109:case 115:Tc(n,ce,ce,s&&wl($y(n,ce,ce,0,0,o,f,Z,o,ne=[],T,de),de),o,de,T,f,s?ne:de);break;default:Tc(E,ce,ce,ce,[""],de,0,f,de)}}y=w=N=0,z=X=1,Z=E="",T=h;break;case 58:T=1+ri(E),N=V;default:if(z<1){if(G==123)--z;else if(G==125&&z++==0&&IS()==125)continue}switch(E+=fp(G),G*z){case 38:X=w>0?1:(E+="\f",-1);break;case 44:f[y++]=(ri(E)-1)*X,X=1;break;case 64:po()===45&&(E+=df(Fr())),R=po(),w=T=ri(Z=E+=kS(Ec())),G++;break;case 45:V===45&&ri(E)==2&&(z=0)}}return l}function $y(n,e,t,s,o,l,h,f,p,y,w,T){for(var R=o-1,N=o===0?l:[""],V=b_(N),z=0,F=0,X=0;z<s;++z)for(var G=0,Z=ya(n,R+1,R=D_(F=h[z])),ne=n;G<V;++G)(ne=O_(F>0?N[G]+" "+Z:Fe(Z,/&\f/g,N[G])))&&(p[X++]=ne);return fh(n,e,t,o===0?hh:f,p,y,w,T)}function NS(n,e,t,s){return fh(n,e,t,x_,fp(TS()),ya(n,2,-2),0,s)}function Hy(n,e,t,s,o){return fh(n,e,t,dp,ya(n,0,s),ya(n,s+1,-1),s,o)}function M_(n,e,t){switch(wS(n,e)){case 5103:return ot+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ot+n+n;case 4789:return Sl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return ot+n+Sl+n+yt+n+n;case 5936:switch(Zt(n,e+11)){case 114:return ot+n+yt+Fe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return ot+n+yt+Fe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return ot+n+yt+Fe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return ot+n+yt+n+n;case 6165:return ot+n+yt+"flex-"+n+n;case 5187:return ot+n+Fe(n,/(\w+).+(:[^]+)/,ot+"box-$1$2"+yt+"flex-$1$2")+n;case 5443:return ot+n+yt+"flex-item-"+Fe(n,/flex-|-self/g,"")+(Ci(n,/flex-|baseline/)?"":yt+"grid-row-"+Fe(n,/flex-|-self/g,""))+n;case 4675:return ot+n+yt+"flex-line-pack"+Fe(n,/align-content|flex-|-self/g,"")+n;case 5548:return ot+n+yt+Fe(n,"shrink","negative")+n;case 5292:return ot+n+yt+Fe(n,"basis","preferred-size")+n;case 6060:return ot+"box-"+Fe(n,"-grow","")+ot+n+yt+Fe(n,"grow","positive")+n;case 4554:return ot+Fe(n,/([^-])(transform)/g,"$1"+ot+"$2")+n;case 6187:return Fe(Fe(Fe(n,/(zoom-|grab)/,ot+"$1"),/(image-set)/,ot+"$1"),n,"")+n;case 5495:case 3959:return Fe(n,/(image-set\([^]*)/,ot+"$1$`$1");case 4968:return Fe(Fe(n,/(.+:)(flex-)?(.*)/,ot+"box-pack:$3"+yt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ot+n+n;case 4200:if(!Ci(n,/flex-|baseline/))return yt+"grid-column-align"+ya(n,e)+n;break;case 2592:case 3360:return yt+Fe(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(s,o){return e=o,Ci(s.props,/grid-\w+-end/)})?~wc(n+(t=t[e].value),"span",0)?n:yt+Fe(n,"-start","")+n+yt+"grid-row-span:"+(~wc(t,"span",0)?Ci(t,/\d+/):+Ci(t,/\d+/)-+Ci(n,/\d+/))+";":yt+Fe(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(s){return Ci(s.props,/grid-\w+-start/)})?n:yt+Fe(Fe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Fe(n,/(.+)-inline(.+)/,ot+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ri(n)-1-e>6)switch(Zt(n,e+1)){case 109:if(Zt(n,e+4)!==45)break;case 102:return Fe(n,/(.+:)(.+)-([^]+)/,"$1"+ot+"$2-$3$1"+Sl+(Zt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~wc(n,"stretch",0)?M_(Fe(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Fe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,l,h,f,p,y){return yt+o+":"+l+y+(h?yt+o+"-span:"+(f?p:+p-+l)+y:"")+n});case 4949:if(Zt(n,e+6)===121)return Fe(n,":",":"+ot)+n;break;case 6444:switch(Zt(n,Zt(n,14)===45?18:11)){case 120:return Fe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ot+(Zt(n,14)===45?"inline-":"")+"box$3$1"+ot+"$2$3$1"+yt+"$2box$3")+n;case 100:return Fe(n,":",":"+yt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(n,"scroll-","scroll-snap-")+n}return n}function Mc(n,e){for(var t="",s=0;s<n.length;s++)t+=e(n[s],s,n,e)||"";return t}function DS(n,e,t,s){switch(n.type){case _S:if(n.children.length)break;case vS:case dp:return n.return=n.return||n.value;case x_:return"";case N_:return n.return=n.value+"{"+Mc(n.children,s)+"}";case hh:if(!ri(n.value=n.props.join(",")))return""}return ri(t=Mc(n.children,s))?n.return=n.value+"{"+t+"}":""}function OS(n){var e=b_(n);return function(t,s,o,l){for(var h="",f=0;f<e;f++)h+=n[f](t,s,o,l)||"";return h}}function bS(n){return function(e){e.root||(e=e.return)&&n(e)}}function LS(n,e,t,s){if(n.length>-1&&!n.return)switch(n.type){case dp:n.return=M_(n.value,n.length,t);return;case N_:return Mc([vs(n,{value:Fe(n.value,"@","@"+ot)})],s);case hh:if(n.length)return ES(t=n.props,function(o){switch(Ci(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ua(vs(n,{props:[Fe(o,/:(read-\w+)/,":"+Sl+"$1")]})),ua(vs(n,{props:[o]})),Df(n,{props:zy(t,s)});break;case"::placeholder":ua(vs(n,{props:[Fe(o,/:(plac\w+)/,":"+ot+"input-$1")]})),ua(vs(n,{props:[Fe(o,/:(plac\w+)/,":"+Sl+"$1")]})),ua(vs(n,{props:[Fe(o,/:(plac\w+)/,yt+"input-$1")]})),ua(vs(n,{props:[o]})),Df(n,{props:zy(t,s)});break}return""})}}var MS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tr={},_a=typeof process<"u"&&tr!==void 0&&(tr.REACT_APP_SC_ATTR||tr.SC_ATTR)||"data-styled",V_="active",U_="data-styled-version",mh="6.1.17",pp=`/*!sc*/
`,Vc=typeof window<"u"&&"HTMLElement"in window,VS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&tr!==void 0&&tr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&tr.REACT_APP_SC_DISABLE_SPEEDY!==""?tr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&tr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&tr!==void 0&&tr.SC_DISABLE_SPEEDY!==void 0&&tr.SC_DISABLE_SPEEDY!==""&&tr.SC_DISABLE_SPEEDY!=="false"&&tr.SC_DISABLE_SPEEDY),US={},gh=Object.freeze([]),wa=Object.freeze({});function F_(n,e,t){return t===void 0&&(t=wa),n.theme!==t.theme&&n.theme||e||t.theme}var j_=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),FS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jS=/(^-|-$)/g;function Wy(n){return n.replace(FS,"-").replace(jS,"")}var BS=/(a)(d)/gi,uc=52,Ky=function(n){return String.fromCharCode(n+(n>25?39:97))};function Lf(n){var e,t="";for(e=Math.abs(n);e>uc;e=e/uc|0)t=Ky(e%uc)+t;return(Ky(e%uc)+t).replace(BS,"$1-$2")}var ff,B_=5381,ha=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},z_=function(n){return ha(B_,n)};function $_(n){return Lf(z_(n)>>>0)}function zS(n){return n.displayName||n.name||"Component"}function pf(n){return typeof n=="string"&&!0}var H_=typeof Symbol=="function"&&Symbol.for,W_=H_?Symbol.for("react.memo"):60115,$S=H_?Symbol.for("react.forward_ref"):60112,HS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},K_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},KS=((ff={})[$S]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ff[W_]=K_,ff);function qy(n){return("type"in(e=n)&&e.type.$$typeof)===W_?K_:"$$typeof"in n?KS[n.$$typeof]:HS;var e}var qS=Object.defineProperty,GS=Object.getOwnPropertyNames,Gy=Object.getOwnPropertySymbols,QS=Object.getOwnPropertyDescriptor,YS=Object.getPrototypeOf,Qy=Object.prototype;function q_(n,e,t){if(typeof e!="string"){if(Qy){var s=YS(e);s&&s!==Qy&&q_(n,s,t)}var o=GS(e);Gy&&(o=o.concat(Gy(e)));for(var l=qy(n),h=qy(e),f=0;f<o.length;++f){var p=o[f];if(!(p in WS||t&&t[p]||h&&p in h||l&&p in l)){var y=QS(e,p);try{qS(n,p,y)}catch{}}}}return n}function Ea(n){return typeof n=="function"}function mp(n){return typeof n=="object"&&"styledComponentId"in n}function uo(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Mf(n,e){if(n.length===0)return"";for(var t=n[0],s=1;s<n.length;s++)t+=n[s];return t}function Ll(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Vf(n,e,t){if(t===void 0&&(t=!1),!t&&!Ll(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)n[s]=Vf(n[s],e[s]);else if(Ll(e))for(var s in e)n[s]=Vf(n[s],e[s]);return n}function gp(n,e){Object.defineProperty(n,"toString",{value:e})}function Wl(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var XS=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,s=0;s<e;s++)t+=this.groupSizes[s];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,l=o;e>=l;)if((l<<=1)<0)throw Wl(16,"".concat(e));this.groupSizes=new Uint32Array(l),this.groupSizes.set(s),this.length=l;for(var h=o;h<l;h++)this.groupSizes[h]=0}for(var f=this.indexOfGroup(e+1),p=(h=0,t.length);h<p;h++)this.tag.insertRule(f,t[h])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],s=this.indexOfGroup(e),o=s+t;this.groupSizes[e]=0;for(var l=s;l<o;l++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var s=this.groupSizes[e],o=this.indexOfGroup(e),l=o+s,h=o;h<l;h++)t+="".concat(this.tag.getRule(h)).concat(pp);return t},n}(),Ic=new Map,Uc=new Map,Sc=1,cc=function(n){if(Ic.has(n))return Ic.get(n);for(;Uc.has(Sc);)Sc++;var e=Sc++;return Ic.set(n,e),Uc.set(e,n),e},JS=function(n,e){Sc=e+1,Ic.set(n,e),Uc.set(e,n)},ZS="style[".concat(_a,"][").concat(U_,'="').concat(mh,'"]'),e1=new RegExp("^".concat(_a,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t1=function(n,e,t){for(var s,o=t.split(","),l=0,h=o.length;l<h;l++)(s=o[l])&&n.registerName(e,s)},n1=function(n,e){for(var t,s=((t=e.textContent)!==null&&t!==void 0?t:"").split(pp),o=[],l=0,h=s.length;l<h;l++){var f=s[l].trim();if(f){var p=f.match(e1);if(p){var y=0|parseInt(p[1],10),w=p[2];y!==0&&(JS(w,y),t1(n,w,p[3]),n.getTag().insertRules(y,o)),o.length=0}else o.push(f)}}},Yy=function(n){for(var e=document.querySelectorAll(ZS),t=0,s=e.length;t<s;t++){var o=e[t];o&&o.getAttribute(_a)!==V_&&(n1(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function r1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G_=function(n){var e=document.head,t=n||e,s=document.createElement("style"),o=function(f){var p=Array.from(f.querySelectorAll("style[".concat(_a,"]")));return p[p.length-1]}(t),l=o!==void 0?o.nextSibling:null;s.setAttribute(_a,V_),s.setAttribute(U_,mh);var h=r1();return h&&s.setAttribute("nonce",h),t.insertBefore(s,l),s},i1=function(){function n(e){this.element=G_(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var h=s[o];if(h.ownerNode===t)return h}throw Wl(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),s1=function(){function n(e){this.element=G_(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var s=document.createTextNode(t);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),o1=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Xy=Vc,a1={isServer:!Vc,useCSSOMInjection:!VS},Fc=function(){function n(e,t,s){e===void 0&&(e=wa),t===void 0&&(t={});var o=this;this.options=En(En({},a1),e),this.gs=t,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Vc&&Xy&&(Xy=!1,Yy(this)),gp(this,function(){return function(l){for(var h=l.getTag(),f=h.length,p="",y=function(T){var R=function(X){return Uc.get(X)}(T);if(R===void 0)return"continue";var N=l.names.get(R),V=h.getGroup(T);if(N===void 0||!N.size||V.length===0)return"continue";var z="".concat(_a,".g").concat(T,'[id="').concat(R,'"]'),F="";N!==void 0&&N.forEach(function(X){X.length>0&&(F+="".concat(X,","))}),p+="".concat(V).concat(z,'{content:"').concat(F,'"}').concat(pp)},w=0;w<f;w++)y(w);return p}(o)})}return n.registerId=function(e){return cc(e)},n.prototype.rehydrate=function(){!this.server&&Vc&&Yy(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(En(En({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var s=t.useCSSOMInjection,o=t.target;return t.isServer?new o1(o):s?new i1(o):new s1(o)}(this.options),new XS(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(cc(e),this.names.has(e))this.names.get(e).add(t);else{var s=new Set;s.add(t),this.names.set(e,s)}},n.prototype.insertRules=function(e,t,s){this.registerName(e,t),this.getTag().insertRules(cc(e),s)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(cc(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),l1=/&/g,u1=/^\s*\/\/.*$/gm;function Q_(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Q_(t.children,e)),t})}function c1(n){var e,t,s,o=wa,l=o.options,h=l===void 0?wa:l,f=o.plugins,p=f===void 0?gh:f,y=function(R,N,V){return V.startsWith(t)&&V.endsWith(t)&&V.replaceAll(t,"").length>0?".".concat(e):R},w=p.slice();w.push(function(R){R.type===hh&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(l1,t).replace(s,y))}),h.prefix&&w.push(LS),w.push(DS);var T=function(R,N,V,z){N===void 0&&(N=""),V===void 0&&(V=""),z===void 0&&(z="&"),e=z,t=N,s=new RegExp("\\".concat(t,"\\b"),"g");var F=R.replace(u1,""),X=xS(V||N?"".concat(V," ").concat(N," { ").concat(F," }"):F);h.namespace&&(X=Q_(X,h.namespace));var G=[];return Mc(X,OS(w.concat(bS(function(Z){return G.push(Z)})))),G};return T.hash=p.length?p.reduce(function(R,N){return N.name||Wl(15),ha(R,N.name)},B_).toString():"",T}var h1=new Fc,Uf=c1(),Y_=Vr.createContext({shouldForwardProp:void 0,styleSheet:h1,stylis:Uf});Y_.Consumer;Vr.createContext(void 0);function Ff(){return Q.useContext(Y_)}var d1=function(){function n(e,t){var s=this;this.inject=function(o,l){l===void 0&&(l=Uf);var h=s.name+l.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,l(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,gp(this,function(){throw Wl(12,String(s.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Uf),this.name+e.hash},n}(),f1=function(n){return n>="A"&&n<="Z"};function Jy(n){for(var e="",t=0;t<n.length;t++){var s=n[t];if(t===1&&s==="-"&&n[0]==="-")return n;f1(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var X_=function(n){return n==null||n===!1||n===""},J_=function(n){var e,t,s=[];for(var o in n){var l=n[o];n.hasOwnProperty(o)&&!X_(l)&&(Array.isArray(l)&&l.isCss||Ea(l)?s.push("".concat(Jy(o),":"),l,";"):Ll(l)?s.push.apply(s,bl(bl(["".concat(o," {")],J_(l),!1),["}"],!1)):s.push("".concat(Jy(o),": ").concat((e=o,(t=l)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in MS||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return s};function Ss(n,e,t,s){if(X_(n))return[];if(mp(n))return[".".concat(n.styledComponentId)];if(Ea(n)){if(!Ea(l=n)||l.prototype&&l.prototype.isReactComponent||!e)return[n];var o=n(e);return Ss(o,e,t,s)}var l;return n instanceof d1?t?(n.inject(t,s),[n.getName(s)]):[n]:Ll(n)?J_(n):Array.isArray(n)?Array.prototype.concat.apply(gh,n.map(function(h){return Ss(h,e,t,s)})):[n.toString()]}function Z_(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Ea(t)&&!mp(t))return!1}return!0}var p1=z_(mh),m1=function(){function n(e,t,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Z_(e),this.componentId=t,this.baseHash=ha(p1,t),this.baseStyle=s,Fc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))o=uo(o,this.staticRulesId);else{var l=Mf(Ss(this.rules,e,t,s)),h=Lf(ha(this.baseHash,l)>>>0);if(!t.hasNameForId(this.componentId,h)){var f=s(l,".".concat(h),void 0,this.componentId);t.insertRules(this.componentId,h,f)}o=uo(o,h),this.staticRulesId=h}else{for(var p=ha(this.baseHash,s.hash),y="",w=0;w<this.rules.length;w++){var T=this.rules[w];if(typeof T=="string")y+=T;else if(T){var R=Mf(Ss(T,e,t,s));p=ha(p,R+w),y+=R}}if(y){var N=Lf(p>>>0);t.hasNameForId(this.componentId,N)||t.insertRules(this.componentId,N,s(y,".".concat(N),void 0,this.componentId)),o=uo(o,N)}}return o},n}(),yp=Vr.createContext(void 0);yp.Consumer;var mf={};function g1(n,e,t){var s=mp(n),o=n,l=!pf(n),h=e.attrs,f=h===void 0?gh:h,p=e.componentId,y=p===void 0?function(ne,de){var ce=typeof ne!="string"?"sc":Wy(ne);mf[ce]=(mf[ce]||0)+1;var E="".concat(ce,"-").concat($_(mh+ce+mf[ce]));return de?"".concat(de,"-").concat(E):E}(e.displayName,e.parentComponentId):p,w=e.displayName,T=w===void 0?function(ne){return pf(ne)?"styled.".concat(ne):"Styled(".concat(zS(ne),")")}(n):w,R=e.displayName&&e.componentId?"".concat(Wy(e.displayName),"-").concat(e.componentId):e.componentId||y,N=s&&o.attrs?o.attrs.concat(f).filter(Boolean):f,V=e.shouldForwardProp;if(s&&o.shouldForwardProp){var z=o.shouldForwardProp;if(e.shouldForwardProp){var F=e.shouldForwardProp;V=function(ne,de){return z(ne,de)&&F(ne,de)}}else V=z}var X=new m1(t,R,s?o.componentStyle:void 0);function G(ne,de){return function(ce,E,S){var A=ce.attrs,k=ce.componentStyle,O=ce.defaultProps,L=ce.foldedComponentIds,C=ce.styledComponentId,Be=ce.target,ct=Vr.useContext(yp),Tt=Ff(),He=ce.shouldForwardProp||Tt.shouldForwardProp,te=F_(E,ct,O)||wa,me=function(Re,Oe,Ve){for(var Ue,Ge=En(En({},Oe),{className:void 0,theme:Ve}),vt=0;vt<Re.length;vt+=1){var hn=Ea(Ue=Re[vt])?Ue(Ge):Ue;for(var it in hn)Ge[it]=it==="className"?uo(Ge[it],hn[it]):it==="style"?En(En({},Ge[it]),hn[it]):hn[it]}return Oe.className&&(Ge.className=uo(Ge.className,Oe.className)),Ge}(A,E,te),ue=me.as||Be,M={};for(var q in me)me[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&me.theme===te||(q==="forwardedAs"?M.as=me.forwardedAs:He&&!He(q,ue)||(M[q]=me[q]));var ve=function(Re,Oe){var Ve=Ff(),Ue=Re.generateAndInjectStyles(Oe,Ve.styleSheet,Ve.stylis);return Ue}(k,me),xe=uo(L,C);return ve&&(xe+=" "+ve),me.className&&(xe+=" "+me.className),M[pf(ue)&&!j_.has(ue)?"class":"className"]=xe,S&&(M.ref=S),Q.createElement(ue,M)}(Z,ne,de)}G.displayName=T;var Z=Vr.forwardRef(G);return Z.attrs=N,Z.componentStyle=X,Z.displayName=T,Z.shouldForwardProp=V,Z.foldedComponentIds=s?uo(o.foldedComponentIds,o.styledComponentId):"",Z.styledComponentId=R,Z.target=s?o.target:n,Object.defineProperty(Z,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ne){this._foldedDefaultProps=s?function(de){for(var ce=[],E=1;E<arguments.length;E++)ce[E-1]=arguments[E];for(var S=0,A=ce;S<A.length;S++)Vf(de,A[S],!0);return de}({},o.defaultProps,ne):ne}}),gp(Z,function(){return".".concat(Z.styledComponentId)}),l&&q_(Z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),Z}function Zy(n,e){for(var t=[n[0]],s=0,o=e.length;s<o;s+=1)t.push(e[s],n[s+1]);return t}var ev=function(n){return Object.assign(n,{isCss:!0})};function vp(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Ea(n)||Ll(n))return ev(Ss(Zy(gh,bl([n],e,!0))));var s=n;return e.length===0&&s.length===1&&typeof s[0]=="string"?Ss(s):ev(Ss(Zy(s,e)))}function jf(n,e,t){if(t===void 0&&(t=wa),!e)throw Wl(1,e);var s=function(o){for(var l=[],h=1;h<arguments.length;h++)l[h-1]=arguments[h];return n(e,t,vp.apply(void 0,bl([o],l,!1)))};return s.attrs=function(o){return jf(n,e,En(En({},t),{attrs:Array.prototype.concat(t.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return jf(n,e,En(En({},t),o))},s}var e0=function(n){return jf(g1,n)},Mt=e0;j_.forEach(function(n){Mt[n]=e0(n)});var y1=function(){function n(e,t){this.rules=e,this.componentId=t,this.isStatic=Z_(e),Fc.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,t,s,o){var l=o(Mf(Ss(this.rules,t,s,o)),""),h=this.componentId+e;s.insertRules(h,h,l)},n.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,t,s,o){e>2&&Fc.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,t,s,o)},n}();function t0(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var s=vp.apply(void 0,bl([n],e,!1)),o="sc-global-".concat($_(JSON.stringify(s))),l=new y1(s,o),h=function(p){var y=Ff(),w=Vr.useContext(yp),T=Vr.useRef(y.styleSheet.allocateGSInstance(o)).current;return y.styleSheet.server&&f(T,p,y.styleSheet,w,y.stylis),Vr.useLayoutEffect(function(){if(!y.styleSheet.server)return f(T,p,y.styleSheet,w,y.stylis),function(){return l.removeStyles(T,y.styleSheet)}},[T,p,y.styleSheet,w,y.stylis]),null};function f(p,y,w,T,R){if(l.isStatic)l.renderStyles(p,US,w,R);else{var N=En(En({},y),{theme:F_(y,T,h.defaultProps)});l.renderStyles(p,N,w,R)}}return Vr.memo(h)}var tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},v1=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},r0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,T=(l&3)<<4|f>>4;let R=(f&15)<<2|y>>6,N=y&63;p||(N=64,h||(R=64)),s.push(t[w],t[T],t[R],t[N])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(n0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):v1(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new _1;const R=l<<2|f>>4;if(s.push(R),y!==64){const N=f<<4&240|y>>2;if(s.push(N),T!==64){const V=y<<6&192|T;s.push(V)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w1=function(n){const e=n0(n);return r0.encodeByteArray(e,!0)},jc=function(n){return w1(n).replace(/\./g,"")},i0=function(n){try{return r0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function E1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const T1=()=>E1().__FIREBASE_DEFAULTS__,I1=()=>{if(typeof process>"u"||typeof tv>"u")return;const n=tv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},S1=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&i0(n[1]);return e&&JSON.parse(e)},yh=()=>{try{return T1()||I1()||S1()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},s0=n=>{var e,t;return(t=(e=yh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},o0=n=>{const e=s0(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},a0=()=>{var n;return(n=yh())===null||n===void 0?void 0:n.config},l0=n=>{var e;return(e=yh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function u0(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[jc(JSON.stringify(t)),jc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(In())}function P1(){var n;const e=(n=yh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k1(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function x1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N1(){const n=In();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function D1(){return!P1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function O1(){try{return typeof indexedDB=="object"}catch{return!1}}function b1(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="FirebaseError";class $n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=L1,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kl.prototype.create)}}class Kl{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?M1(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new $n(o,f,s)}}function M1(n,e){return n.replace(V1,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const V1=/\{\$([^}]+)}/g;function U1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bc(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],h=e[o];if(nv(l)&&nv(h)){if(!Bc(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function nv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function El(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Tl(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function F1(n,e){const t=new j1(n,e);return t.subscribe.bind(t)}class j1{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");B1(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=gf),o.error===void 0&&(o.error=gf),o.complete===void 0&&(o.complete=gf);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function gf(){}/**
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
 */function $t(n){return n&&n._delegate?n._delegate:n}class Cs{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const so="[DEFAULT]";/**
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
 */class z1{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new R1;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(H1(e))try{this.getOrInitializeService({instanceIdentifier:so})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=so){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=so){return this.instances.has(e)}getOptions(e=so){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$1(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=so){return this.component?this.component.multipleInstances?e:so:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $1(n){return n===so?void 0:n}function H1(n){return n.instantiationMode==="EAGER"}/**
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
 */class W1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new z1(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Xe||(Xe={}));const K1={debug:Xe.DEBUG,verbose:Xe.VERBOSE,info:Xe.INFO,warn:Xe.WARN,error:Xe.ERROR,silent:Xe.SILENT},q1=Xe.INFO,G1={[Xe.DEBUG]:"log",[Xe.VERBOSE]:"log",[Xe.INFO]:"info",[Xe.WARN]:"warn",[Xe.ERROR]:"error"},Q1=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=G1[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _p{constructor(e){this.name=e,this._logLevel=q1,this._logHandler=Q1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?K1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Xe.DEBUG,...e),this._logHandler(this,Xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Xe.VERBOSE,...e),this._logHandler(this,Xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Xe.INFO,...e),this._logHandler(this,Xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Xe.WARN,...e),this._logHandler(this,Xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Xe.ERROR,...e),this._logHandler(this,Xe.ERROR,...e)}}const Y1=(n,e)=>e.some(t=>n instanceof t);let rv,iv;function X1(){return rv||(rv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function J1(){return iv||(iv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c0=new WeakMap,Bf=new WeakMap,h0=new WeakMap,yf=new WeakMap,wp=new WeakMap;function Z1(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Rs(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&c0.set(t,n)}).catch(()=>{}),wp.set(e,n),e}function eR(n){if(Bf.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Bf.set(n,e)}let zf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||h0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function tR(n){zf=n(zf)}function nR(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(vf(this),e,...t);return h0.set(s,e.sort?e.sort():[e]),Rs(s)}:J1().includes(n)?function(...e){return n.apply(vf(this),e),Rs(c0.get(this))}:function(...e){return Rs(n.apply(vf(this),e))}}function rR(n){return typeof n=="function"?nR(n):(n instanceof IDBTransaction&&eR(n),Y1(n,X1())?new Proxy(n,zf):n)}function Rs(n){if(n instanceof IDBRequest)return Z1(n);if(yf.has(n))return yf.get(n);const e=rR(n);return e!==n&&(yf.set(n,e),wp.set(e,n)),e}const vf=n=>wp.get(n);function iR(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Rs(h);return s&&h.addEventListener("upgradeneeded",p=>{s(Rs(h.result),p.oldVersion,p.newVersion,Rs(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const sR=["get","getKey","getAll","getAllKeys","count"],oR=["put","add","delete","clear"],_f=new Map;function sv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_f.get(e))return _f.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=oR.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sR.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return _f.set(e,l),l}tR(n=>({...n,get:(e,t,s)=>sv(e,t)||n.get(e,t,s),has:(e,t)=>!!sv(e,t)||n.has(e,t)}));/**
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
 */class aR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lR(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lR(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $f="@firebase/app",ov="0.10.13";/**
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
 */const Li=new _p("@firebase/app"),uR="@firebase/app-compat",cR="@firebase/analytics-compat",hR="@firebase/analytics",dR="@firebase/app-check-compat",fR="@firebase/app-check",pR="@firebase/auth",mR="@firebase/auth-compat",gR="@firebase/database",yR="@firebase/data-connect",vR="@firebase/database-compat",_R="@firebase/functions",wR="@firebase/functions-compat",ER="@firebase/installations",TR="@firebase/installations-compat",IR="@firebase/messaging",SR="@firebase/messaging-compat",RR="@firebase/performance",AR="@firebase/performance-compat",PR="@firebase/remote-config",CR="@firebase/remote-config-compat",kR="@firebase/storage",xR="@firebase/storage-compat",NR="@firebase/firestore",DR="@firebase/vertexai-preview",OR="@firebase/firestore-compat",bR="firebase",LR="10.14.1";/**
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
 */const Hf="[DEFAULT]",MR={[$f]:"fire-core",[uR]:"fire-core-compat",[hR]:"fire-analytics",[cR]:"fire-analytics-compat",[fR]:"fire-app-check",[dR]:"fire-app-check-compat",[pR]:"fire-auth",[mR]:"fire-auth-compat",[gR]:"fire-rtdb",[yR]:"fire-data-connect",[vR]:"fire-rtdb-compat",[_R]:"fire-fn",[wR]:"fire-fn-compat",[ER]:"fire-iid",[TR]:"fire-iid-compat",[IR]:"fire-fcm",[SR]:"fire-fcm-compat",[RR]:"fire-perf",[AR]:"fire-perf-compat",[PR]:"fire-rc",[CR]:"fire-rc-compat",[kR]:"fire-gcs",[xR]:"fire-gcs-compat",[NR]:"fire-fst",[OR]:"fire-fst-compat",[DR]:"fire-vertex","fire-js":"fire-js",[bR]:"fire-js-all"};/**
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
 */const zc=new Map,VR=new Map,Wf=new Map;function av(n,e){try{n.container.addComponent(e)}catch(t){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _o(n){const e=n.name;if(Wf.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;Wf.set(e,n);for(const t of zc.values())av(t,n);for(const t of VR.values())av(t,n);return!0}function vh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ur(n){return n.settings!==void 0}/**
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
 */const UR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new Kl("app","Firebase",UR);/**
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
 */class FR{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
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
 */const Ao=LR;function d0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hf,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw As.create("bad-app-name",{appName:String(o)});if(t||(t=a0()),!t)throw As.create("no-options");const l=zc.get(o);if(l){if(Bc(t,l.options)&&Bc(s,l.config))return l;throw As.create("duplicate-app",{appName:o})}const h=new W1(o);for(const p of Wf.values())h.addComponent(p);const f=new FR(t,s,h);return zc.set(o,f),f}function Ep(n=Hf){const e=zc.get(n);if(!e&&n===Hf&&a0())return d0();if(!e)throw As.create("no-app",{appName:n});return e}function si(n,e,t){var s;let o=(s=MR[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(f.join(" "));return}_o(new Cs(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const jR="firebase-heartbeat-database",BR=1,Ml="firebase-heartbeat-store";let wf=null;function f0(){return wf||(wf=iR(jR,BR,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ml)}catch(t){console.warn(t)}}}}).catch(n=>{throw As.create("idb-open",{originalErrorMessage:n.message})})),wf}async function zR(n){try{const t=(await f0()).transaction(Ml),s=await t.objectStore(Ml).get(p0(n));return await t.done,s}catch(e){if(e instanceof $n)Li.warn(e.message);else{const t=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Li.warn(t.message)}}}async function lv(n,e){try{const s=(await f0()).transaction(Ml,"readwrite");await s.objectStore(Ml).put(e,p0(n)),await s.done}catch(t){if(t instanceof $n)Li.warn(t.message);else{const s=As.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Li.warn(s.message)}}}function p0(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $R=1024,HR=30*24*60*60*1e3;class WR{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qR(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=uv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=HR}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Li.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=uv(),{heartbeatsToSend:s,unsentEntries:o}=KR(this._heartbeatsCache.heartbeats),l=jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Li.warn(t),""}}}function uv(){return new Date().toISOString().substring(0,10)}function KR(n,e=$R){const t=[];let s=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),cv(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),cv(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class qR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return O1()?b1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zR(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return lv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function cv(n){return jc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function GR(n){_o(new Cs("platform-logger",e=>new aR(e),"PRIVATE")),_o(new Cs("heartbeat",e=>new WR(e),"PRIVATE")),si($f,ov,n),si($f,ov,"esm2017"),si("fire-js","")}GR("");var QR="firebase",YR="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si(QR,YR,"app");function Tp(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function m0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XR=m0,g0=new Kl("auth","Firebase",m0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new _p("@firebase/auth");function JR(n,...e){$c.logLevel<=Xe.WARN&&$c.warn(`Auth (${Ao}): ${n}`,...e)}function Rc(n,...e){$c.logLevel<=Xe.ERROR&&$c.error(`Auth (${Ao}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n,...e){throw Sp(n,...e)}function jr(n,...e){return Sp(n,...e)}function Ip(n,e,t){const s=Object.assign(Object.assign({},XR()),{[e]:t});return new Kl("auth","Firebase",s).create(e,{appName:n.name})}function bi(n){return Ip(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ZR(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&vr(n,"argument-error"),Ip(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sp(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return g0.create(n,...e)}function be(n,e,...t){if(!n)throw Sp(e,...t)}function xi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rc(e),new Error(e)}function Mi(n,e){n||xi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function eA(){return hv()==="http:"||hv()==="https:"}function hv(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eA()||k1()||"connection"in navigator)?navigator.onLine:!0}function nA(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mi(t>e,"Short delay should be less than long delay!"),this.isMobile=A1()||x1()}get(){return tA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e){Mi(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new Gl(3e4,6e4);function Fi(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hi(n,e,t,s,o={}){return v0(n,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=ql(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return C1()||(y.referrerPolicy="no-referrer"),y0.fetch()(_0(n,n.config.apiHost,t,f),y)})}async function v0(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},rA),e);try{const o=new oA(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw hc(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hc(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw hc(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw hc(n,"user-disabled",h);const w=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Ip(n,w,y);vr(n,w)}}catch(o){if(o instanceof $n)throw o;vr(n,"network-request-failed",{message:String(o)})}}async function Ql(n,e,t,s,o={}){const l=await hi(n,e,t,s,o);return"mfaPendingCredential"in l&&vr(n,"multi-factor-auth-required",{_serverResponse:l}),l}function _0(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Rp(n.config,o):`${n.config.apiScheme}://${o}`}function sA(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(jr(this.auth,"network-request-failed")),iA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hc(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=jr(n,e,s);return o.customData._tokenResponse=t,o}function dv(n){return n!==void 0&&n.enterprise!==void 0}class aA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return sA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function lA(n,e){return hi(n,"GET","/v2/recaptchaConfig",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(n,e){return hi(n,"POST","/v1/accounts:delete",e)}async function w0(n,e){return hi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cA(n,e=!1){const t=$t(n),s=await t.getIdToken(e),o=Ap(s);be(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Rl(Ef(o.auth_time)),issuedAtTime:Rl(Ef(o.iat)),expirationTime:Rl(Ef(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ef(n){return Number(n)*1e3}function Ap(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Rc("JWT malformed, contained fewer than 3 sections"),null;try{const o=i0(t);return o?JSON.parse(o):(Rc("Failed to decode base64 JWT payload"),null)}catch(o){return Rc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function fv(n){const e=Ap(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof $n&&hA(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function hA({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hc(n){var e;const t=n.auth,s=await n.getIdToken(),o=await Ta(n,w0(t,{idToken:s}));be(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?E0(l.providerUserInfo):[],f=pA(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),w=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new qf(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,T)}async function fA(n){const e=$t(n);await Hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pA(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function E0(n){return n.map(e=>{var{providerId:t}=e,s=Tp(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(n,e){const t=await v0(n,{},async()=>{const s=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=_0(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",y0.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function gA(n,e){return hi(n,"POST","/v2/accounts:revokeToken",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=fv(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await mA(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new da;return s&&(be(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(be(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(be(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new da,this.toJSON())}_performRefresh(){return xi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ni{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Tp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new qf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ta(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cA(this,e)}reload(){return fA(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Hc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ur(this.auth.app))return Promise.reject(bi(this.auth));const e=await this.getIdToken();return await Ta(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,p,y,w;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(h=t.photoURL)!==null&&h!==void 0?h:void 0,z=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,X=(y=t.createdAt)!==null&&y!==void 0?y:void 0,G=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:Z,emailVerified:ne,isAnonymous:de,providerData:ce,stsTokenManager:E}=t;be(Z&&E,e,"internal-error");const S=da.fromJSON(this.name,E);be(typeof Z=="string",e,"internal-error"),gs(T,e.name),gs(R,e.name),be(typeof ne=="boolean",e,"internal-error"),be(typeof de=="boolean",e,"internal-error"),gs(N,e.name),gs(V,e.name),gs(z,e.name),gs(F,e.name),gs(X,e.name),gs(G,e.name);const A=new Ni({uid:Z,auth:e,email:R,emailVerified:ne,displayName:T,isAnonymous:de,photoURL:V,phoneNumber:N,tenantId:z,stsTokenManager:S,createdAt:X,lastLoginAt:G});return ce&&Array.isArray(ce)&&(A.providerData=ce.map(k=>Object.assign({},k))),F&&(A._redirectEventId=F),A}static async _fromIdTokenResponse(e,t,s=!1){const o=new da;o.updateFromServerResponse(t);const l=new Ni({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Hc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];be(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?E0(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new da;f.updateFromIdToken(s);const p=new Ni({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new qf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new Map;function Di(n){Mi(n instanceof Function,"Expected a class definition");let e=pv.get(n);return e?(Mi(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,pv.set(n,e),e)}/**
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
 */class T0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}T0.type="NONE";const mv=T0;/**
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
 */function Ac(n,e,t){return`firebase:${n}:${e}:${t}`}class fa{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Ac(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ac("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fa(Di(mv),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Di(mv);const h=Ac(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const w=await y._get(h);if(w){const T=Ni._fromJSON(e,w);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new fa(l,e,s):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new fa(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(A0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(C0(e))return"Blackberry";if(k0(e))return"Webos";if(S0(e))return"Safari";if((e.includes("chrome/")||R0(e))&&!e.includes("edge/"))return"Chrome";if(P0(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function I0(n=In()){return/firefox\//i.test(n)}function S0(n=In()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R0(n=In()){return/crios\//i.test(n)}function A0(n=In()){return/iemobile/i.test(n)}function P0(n=In()){return/android/i.test(n)}function C0(n=In()){return/blackberry/i.test(n)}function k0(n=In()){return/webos/i.test(n)}function Pp(n=In()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function yA(n=In()){var e;return Pp(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vA(){return N1()&&document.documentMode===10}function x0(n=In()){return Pp(n)||P0(n)||k0(n)||C0(n)||/windows phone/i.test(n)||A0(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(n,e=[]){let t;switch(n){case"Browser":t=gv(In());break;case"Worker":t=`${gv(In())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
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
 */class _A{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function wA(n,e={}){return hi(n,"GET","/v2/passwordPolicy",Fi(n,e))}/**
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
 */const EA=6;class TA{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:EA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yv(this),this.idTokenSubscription=new yv(this),this.beforeStateQueue=new _A(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=g0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Di(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await fa.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await w0(this,{idToken:e}),s=await Ni._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ur(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ur(this.app))return Promise.reject(bi(this));const t=e?$t(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ur(this.app)?Promise.reject(bi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ur(this.app)?Promise.reject(bi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Di(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wA(this),t=new TA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Kl("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await gA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Di(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await fa.create(this,[Di(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&JR(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ji(n){return $t(n)}class yv{constructor(e){this.auth=e,this.observer=null,this.addObserver=F1(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function SA(n){_h=n}function D0(n){return _h.loadJS(n)}function RA(){return _h.recaptchaEnterpriseScript}function AA(){return _h.gapiScript}function PA(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const CA="recaptcha-enterprise",kA="NO_RECAPTCHA";class xA{constructor(e){this.type=CA,this.auth=ji(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{lA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new aA(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;dv(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(kA)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&dv(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=RA();p.length!==0&&(p+=f),D0(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function vv(n,e,t,s=!1){const o=new xA(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const h=Object.assign({},e);return s?Object.assign(h,{captchaResp:l}):Object.assign(h,{captchaResponse:l}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Wc(n,e,t,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await vv(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await vv(n,e,t,t==="getOobCode");return s(n,h)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n,e){const t=vh(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Bc(l,e??{}))return o;vr(o,"already-initialized")}return t.initialize({options:e})}function DA(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Di);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function OA(n,e,t){const s=ji(n);be(s._canInitEmulator,s,"emulator-config-failed"),be(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=O0(e),{host:h,port:f}=bA(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),LA()}function O0(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bA(n){const e=O0(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:_v(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:_v(h)}}}function _v(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LA(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xi("not implemented")}_getIdTokenResponse(e){return xi("not implemented")}_linkToIdToken(e,t){return xi("not implemented")}_getReauthenticationResolver(e){return xi("not implemented")}}async function MA(n,e){return hi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(n,e){return Ql(n,"POST","/v1/accounts:signInWithPassword",Fi(n,e))}async function UA(n,e){return hi(n,"POST","/v1/accounts:sendOobCode",Fi(n,e))}async function FA(n,e){return UA(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(n,e){return Ql(n,"POST","/v1/accounts:signInWithEmailLink",Fi(n,e))}async function BA(n,e){return Ql(n,"POST","/v1/accounts:signInWithEmailLink",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends Cp{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Vl(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Vl(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,t,"signInWithPassword",VA);case"emailLink":return jA(e,{email:this._email,oobCode:this._password});default:vr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,s,"signUpPassword",MA);case"emailLink":return BA(e,{idToken:t,email:this._email,oobCode:this._password});default:vr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(n,e){return Ql(n,"POST","/v1/accounts:signInWithIdp",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="http://localhost";class wo extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Tp(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new wo(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return pa(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,pa(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,pa(e,t)}buildRequest(){const e={requestUri:zA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ql(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HA(n){const e=El(Tl(n)).link,t=e?El(Tl(e)).deep_link_id:null,s=El(Tl(n)).deep_link_id;return(s?El(Tl(s)).link:null)||s||t||e||n}class kp{constructor(e){var t,s,o,l,h,f;const p=El(Tl(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(s=p.oobCode)!==null&&s!==void 0?s:null,T=$A((o=p.mode)!==null&&o!==void 0?o:null);be(y&&w&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=HA(e);try{return new kp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.providerId=Da.PROVIDER_ID}static credential(e,t){return Vl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=kp.parseLink(t);return be(s,"argument-error"),Vl._fromEmailAndCode(e,s.code,s.tenantId)}}Da.PROVIDER_ID="password";Da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yl extends xp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Yl{constructor(){super("facebook.com")}static credential(e){return wo._fromParams({providerId:_s.PROVIDER_ID,signInMethod:_s.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _s.credentialFromTaggedObject(e)}static credentialFromError(e){return _s.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _s.credential(e.oauthAccessToken)}catch{return null}}}_s.FACEBOOK_SIGN_IN_METHOD="facebook.com";_s.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wo._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ws.credential(t,s)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends Yl{constructor(){super("github.com")}static credential(e){return wo._fromParams({providerId:ki.PROVIDER_ID,signInMethod:ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ki.credentialFromTaggedObject(e)}static credentialFromError(e){return ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ki.credential(e.oauthAccessToken)}catch{return null}}}ki.GITHUB_SIGN_IN_METHOD="github.com";ki.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Yl{constructor(){super("twitter.com")}static credential(e,t){return wo._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Es.credential(t,s)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(n,e){return Ql(n,"POST","/v1/accounts:signUp",Fi(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Ni._fromIdTokenResponse(e,s,o),h=wv(s);return new Eo({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=wv(s);return new Eo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function wv(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc extends $n{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Kc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Kc(e,t,s,o)}}function b0(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Kc._fromErrorAndOperation(n,l,e,s):l})}async function KA(n,e,t=!1){const s=await Ta(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Eo._forOperation(n,"link",s)}/**
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
 */async function qA(n,e,t=!1){const{auth:s}=n;if(Ur(s.app))return Promise.reject(bi(s));const o="reauthenticate";try{const l=await Ta(n,b0(s,o,e,n),t);be(l.idToken,s,"internal-error");const h=Ap(l.idToken);be(h,s,"internal-error");const{sub:f}=h;return be(n.uid===f,s,"user-mismatch"),Eo._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&vr(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(n,e,t=!1){if(Ur(n.app))return Promise.reject(bi(n));const s="signIn",o=await b0(n,s,e),l=await Eo._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function GA(n,e){return L0(ji(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(n){const e=ji(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V0(n,e,t){const s=ji(n);await Wc(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",FA)}async function QA(n,e,t){if(Ur(n.app))return Promise.reject(bi(n));const s=ji(n),h=await Wc(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&M0(n),p}),f=await Eo._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function YA(n,e,t){return Ur(n.app)?Promise.reject(bi(n)):GA($t(n),Da.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&M0(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(n,e){return hi(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=$t(n),l={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await Ta(s,XA(s.auth,l));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const f=s.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=s.displayName,f.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function ZA(n,e,t,s){return $t(n).onIdTokenChanged(e,t,s)}function eP(n,e,t){return $t(n).beforeAuthStateChanged(e,t)}const qc="__sak";/**
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
 */class U0{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qc,"1"),this.storage.removeItem(qc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=1e3,nP=10;class F0 extends U0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=x0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);vA()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,nP):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},tP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}F0.type="LOCAL";const rP=F0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0 extends U0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}j0.type="SESSION";const B0=j0;/**
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
 */function iP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new wh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await iP(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=Np("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const R=T;if(R.data.eventId===y)switch(R.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(R.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return window}function oP(n){oi().location.href=n}/**
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
 */function z0(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function aP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uP(){return z0()?self:null}/**
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
 */const $0="firebaseLocalStorageDb",cP=1,Gc="firebaseLocalStorage",H0="fbase_key";class Xl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Eh(n,e){return n.transaction([Gc],e?"readwrite":"readonly").objectStore(Gc)}function hP(){const n=indexedDB.deleteDatabase($0);return new Xl(n).toPromise()}function Gf(){const n=indexedDB.open($0,cP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Gc,{keyPath:H0})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Gc)?e(s):(s.close(),await hP(),e(await Gf()))})})}async function Ev(n,e,t){const s=Eh(n,!0).put({[H0]:e,value:t});return new Xl(s).toPromise()}async function dP(n,e){const t=Eh(n,!1).get(e),s=await new Xl(t).toPromise();return s===void 0?null:s.value}function Tv(n,e){const t=Eh(n,!0).delete(e);return new Xl(t).toPromise()}const fP=800,pP=3;class W0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>pP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return z0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wh._getInstance(uP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aP(),!this.activeServiceWorker)return;this.sender=new sP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await Ev(e,qc,"1"),await Tv(e,qc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ev(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>dP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tv(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Eh(o,!1).getAll();return new Xl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}W0.type="LOCAL";const mP=W0;new Gl(3e4,6e4);/**
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
 */function K0(n,e){return e?Di(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Dp extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gP(n){return L0(n.auth,new Dp(n),n.bypassAuthState)}function yP(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),qA(t,new Dp(n),n.bypassAuthState)}async function vP(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),KA(t,new Dp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gP;case"linkViaPopup":case"linkViaRedirect":return vP;case"reauthViaPopup":case"reauthViaRedirect":return yP;default:vr(this.auth,"internal-error")}}resolve(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=new Gl(2e3,1e4);async function wP(n,e,t){if(Ur(n.app))return Promise.reject(jr(n,"operation-not-supported-in-this-environment"));const s=ji(n);ZR(n,e,xp);const o=K0(s,t);return new co(s,"signInViaPopup",e,o).executeNotNull()}class co extends q0{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,co.currentPopupAction&&co.currentPopupAction.cancel(),co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Mi(this.filter.length===1,"Popup operations only handle one event");const e=Np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_P.get())};e()}}co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="pendingRedirect",Pc=new Map;class TP extends q0{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pc.get(this.auth._key());if(!e){try{const s=await IP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pc.set(this.auth._key(),e)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IP(n,e){const t=AP(e),s=RP(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function SP(n,e){Pc.set(n._key(),e)}function RP(n){return Di(n._redirectPersistence)}function AP(n){return Ac(EP,n.config.apiKey,n.name)}async function PP(n,e,t=!1){if(Ur(n.app))return Promise.reject(bi(n));const s=ji(n),o=K0(s,e),h=await new TP(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=10*60*1e3;class kP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!G0(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(jr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Iv(e))}saveEventToCache(e){this.cachedEventUids.add(Iv(e)),this.lastProcessedEventTime=Date.now()}}function Iv(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function G0({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G0(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(n,e={}){return hi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,OP=/^https?/;async function bP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await NP(n);for(const t of e)try{if(LP(t))return}catch{}vr(n,"unauthorized-domain")}function LP(n){const e=Kf(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!OP.test(t))return!1;if(DP.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const MP=new Gl(3e4,6e4);function Sv(){const n=oi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VP(n){return new Promise((e,t)=>{var s,o,l;function h(){Sv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sv(),t(jr(n,"network-request-failed"))},timeout:MP.get()})}if(!((o=(s=oi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=oi().gapi)===null||l===void 0)&&l.load)h();else{const f=PA("iframefcb");return oi()[f]=()=>{gapi.load?h():t(jr(n,"network-request-failed"))},D0(`${AA()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Cc=null,e})}let Cc=null;function UP(n){return Cc=Cc||VP(n),Cc}/**
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
 */const FP=new Gl(5e3,15e3),jP="__/auth/iframe",BP="emulator/auth/iframe",zP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$P=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HP(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Rp(e,BP):`https://${n.config.authDomain}/${jP}`,s={apiKey:e.apiKey,appName:n.name,v:Ao},o=$P.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${ql(s).slice(1)}`}async function WP(n){const e=await UP(n),t=oi().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:HP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zP,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=jr(n,"network-request-failed"),f=oi().setTimeout(()=>{l(h)},FP.get());function p(){oi().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(h)})}))}/**
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
 */const KP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,GP=600,QP="_blank",YP="http://localhost";class Rv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XP(n,e,t,s=qP,o=GP){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},KP),{width:s.toString(),height:o.toString(),top:l,left:h}),y=In().toLowerCase();t&&(f=R0(y)?QP:t),I0(y)&&(e=e||YP,p.scrollbars="yes");const w=Object.entries(p).reduce((R,[N,V])=>`${R}${N}=${V},`,"");if(yA(y)&&f!=="_self")return JP(e||"",f),new Rv(null);const T=window.open(e||"",f,w);be(T,n,"popup-blocked");try{T.focus()}catch{}return new Rv(T)}function JP(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const ZP="__/auth/handler",eC="emulator/auth/handler",tC=encodeURIComponent("fac");async function Av(n,e,t,s,o,l){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof xp){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",U1(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,T]of Object.entries({}))h[w]=T}if(e instanceof Yl){const w=e.getScopes().filter(T=>T!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const p=await n._getAppCheckToken(),y=p?`#${tC}=${encodeURIComponent(p)}`:"";return`${nC(n)}?${ql(f).slice(1)}${y}`}function nC({config:n}){return n.emulator?Rp(n,eC):`https://${n.authDomain}/${ZP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf="webStorageSupport";class rC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=B0,this._completeRedirectFn=PP,this._overrideRedirectResult=SP}async _openPopup(e,t,s,o){var l;Mi((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await Av(e,t,s,Kf(),o);return XP(e,h,Np())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await Av(e,t,s,Kf(),o);return oP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mi(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await WP(e),s=new kP(e);return t.register("authEvent",o=>(be(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Tf,{type:Tf},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Tf];h!==void 0&&t(!!h),vr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return x0()||S0()||Pp()}}const iC=rC;var Pv="@firebase/auth",Cv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aC(n){_o(new Cs("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;be(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N0(n)},y=new IA(s,o,l,p);return DA(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),_o(new Cs("auth-internal",e=>{const t=ji(e.getProvider("auth").getImmediate());return(s=>new sC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),si(Pv,Cv,oC(n)),si(Pv,Cv,"esm2017")}/**
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
 */const lC=5*60,uC=l0("authIdTokenMaxAge")||lC;let kv=null;const cC=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>uC)return;const o=t==null?void 0:t.token;kv!==o&&(kv=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function hC(n=Ep()){const e=vh(n,"auth");if(e.isInitialized())return e.getImmediate();const t=NA(n,{popupRedirectResolver:iC,persistence:[mP,rP,B0]}),s=l0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=cC(l.toString());eP(t,h,()=>h(t.currentUser)),ZA(t,f=>h(f))}}const o=s0("auth");return o&&OA(t,`http://${o}`),t}function dC(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}SA({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=jr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",dC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aC("Browser");var xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,S){function A(){}A.prototype=S.prototype,E.D=S.prototype,E.prototype=new A,E.prototype.constructor=E,E.C=function(k,O,L){for(var C=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)C[Be-2]=arguments[Be];return S.prototype[O].apply(k,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(E,S,A){A||(A=0);var k=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)k[O]=S.charCodeAt(A++)|S.charCodeAt(A++)<<8|S.charCodeAt(A++)<<16|S.charCodeAt(A++)<<24;else for(O=0;16>O;++O)k[O]=S[A++]|S[A++]<<8|S[A++]<<16|S[A++]<<24;S=E.g[0],A=E.g[1],O=E.g[2];var L=E.g[3],C=S+(L^A&(O^L))+k[0]+3614090360&4294967295;S=A+(C<<7&4294967295|C>>>25),C=L+(O^S&(A^O))+k[1]+3905402710&4294967295,L=S+(C<<12&4294967295|C>>>20),C=O+(A^L&(S^A))+k[2]+606105819&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(S^O&(L^S))+k[3]+3250441966&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(L^A&(O^L))+k[4]+4118548399&4294967295,S=A+(C<<7&4294967295|C>>>25),C=L+(O^S&(A^O))+k[5]+1200080426&4294967295,L=S+(C<<12&4294967295|C>>>20),C=O+(A^L&(S^A))+k[6]+2821735955&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(S^O&(L^S))+k[7]+4249261313&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(L^A&(O^L))+k[8]+1770035416&4294967295,S=A+(C<<7&4294967295|C>>>25),C=L+(O^S&(A^O))+k[9]+2336552879&4294967295,L=S+(C<<12&4294967295|C>>>20),C=O+(A^L&(S^A))+k[10]+4294925233&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(S^O&(L^S))+k[11]+2304563134&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(L^A&(O^L))+k[12]+1804603682&4294967295,S=A+(C<<7&4294967295|C>>>25),C=L+(O^S&(A^O))+k[13]+4254626195&4294967295,L=S+(C<<12&4294967295|C>>>20),C=O+(A^L&(S^A))+k[14]+2792965006&4294967295,O=L+(C<<17&4294967295|C>>>15),C=A+(S^O&(L^S))+k[15]+1236535329&4294967295,A=O+(C<<22&4294967295|C>>>10),C=S+(O^L&(A^O))+k[1]+4129170786&4294967295,S=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(S^A))+k[6]+3225465664&4294967295,L=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(L^S))+k[11]+643717713&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^S&(O^L))+k[0]+3921069994&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^L&(A^O))+k[5]+3593408605&4294967295,S=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(S^A))+k[10]+38016083&4294967295,L=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(L^S))+k[15]+3634488961&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^S&(O^L))+k[4]+3889429448&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^L&(A^O))+k[9]+568446438&4294967295,S=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(S^A))+k[14]+3275163606&4294967295,L=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(L^S))+k[3]+4107603335&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^S&(O^L))+k[8]+1163531501&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(O^L&(A^O))+k[13]+2850285829&4294967295,S=A+(C<<5&4294967295|C>>>27),C=L+(A^O&(S^A))+k[2]+4243563512&4294967295,L=S+(C<<9&4294967295|C>>>23),C=O+(S^A&(L^S))+k[7]+1735328473&4294967295,O=L+(C<<14&4294967295|C>>>18),C=A+(L^S&(O^L))+k[12]+2368359562&4294967295,A=O+(C<<20&4294967295|C>>>12),C=S+(A^O^L)+k[5]+4294588738&4294967295,S=A+(C<<4&4294967295|C>>>28),C=L+(S^A^O)+k[8]+2272392833&4294967295,L=S+(C<<11&4294967295|C>>>21),C=O+(L^S^A)+k[11]+1839030562&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^S)+k[14]+4259657740&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^L)+k[1]+2763975236&4294967295,S=A+(C<<4&4294967295|C>>>28),C=L+(S^A^O)+k[4]+1272893353&4294967295,L=S+(C<<11&4294967295|C>>>21),C=O+(L^S^A)+k[7]+4139469664&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^S)+k[10]+3200236656&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^L)+k[13]+681279174&4294967295,S=A+(C<<4&4294967295|C>>>28),C=L+(S^A^O)+k[0]+3936430074&4294967295,L=S+(C<<11&4294967295|C>>>21),C=O+(L^S^A)+k[3]+3572445317&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^S)+k[6]+76029189&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(A^O^L)+k[9]+3654602809&4294967295,S=A+(C<<4&4294967295|C>>>28),C=L+(S^A^O)+k[12]+3873151461&4294967295,L=S+(C<<11&4294967295|C>>>21),C=O+(L^S^A)+k[15]+530742520&4294967295,O=L+(C<<16&4294967295|C>>>16),C=A+(O^L^S)+k[2]+3299628645&4294967295,A=O+(C<<23&4294967295|C>>>9),C=S+(O^(A|~L))+k[0]+4096336452&4294967295,S=A+(C<<6&4294967295|C>>>26),C=L+(A^(S|~O))+k[7]+1126891415&4294967295,L=S+(C<<10&4294967295|C>>>22),C=O+(S^(L|~A))+k[14]+2878612391&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~S))+k[5]+4237533241&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~L))+k[12]+1700485571&4294967295,S=A+(C<<6&4294967295|C>>>26),C=L+(A^(S|~O))+k[3]+2399980690&4294967295,L=S+(C<<10&4294967295|C>>>22),C=O+(S^(L|~A))+k[10]+4293915773&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~S))+k[1]+2240044497&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~L))+k[8]+1873313359&4294967295,S=A+(C<<6&4294967295|C>>>26),C=L+(A^(S|~O))+k[15]+4264355552&4294967295,L=S+(C<<10&4294967295|C>>>22),C=O+(S^(L|~A))+k[6]+2734768916&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~S))+k[13]+1309151649&4294967295,A=O+(C<<21&4294967295|C>>>11),C=S+(O^(A|~L))+k[4]+4149444226&4294967295,S=A+(C<<6&4294967295|C>>>26),C=L+(A^(S|~O))+k[11]+3174756917&4294967295,L=S+(C<<10&4294967295|C>>>22),C=O+(S^(L|~A))+k[2]+718787259&4294967295,O=L+(C<<15&4294967295|C>>>17),C=A+(L^(O|~S))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+S&4294967295,E.g[1]=E.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+O&4294967295,E.g[3]=E.g[3]+L&4294967295}s.prototype.u=function(E,S){S===void 0&&(S=E.length);for(var A=S-this.blockSize,k=this.B,O=this.h,L=0;L<S;){if(O==0)for(;L<=A;)o(this,E,L),L+=this.blockSize;if(typeof E=="string"){for(;L<S;)if(k[O++]=E.charCodeAt(L++),O==this.blockSize){o(this,k),O=0;break}}else for(;L<S;)if(k[O++]=E[L++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=S},s.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var S=1;S<E.length-8;++S)E[S]=0;var A=8*this.o;for(S=E.length-8;S<E.length;++S)E[S]=A&255,A/=256;for(this.u(E),E=Array(16),S=A=0;4>S;++S)for(var k=0;32>k;k+=8)E[A++]=this.g[S]>>>k&255;return E};function l(E,S){var A=f;return Object.prototype.hasOwnProperty.call(A,E)?A[E]:A[E]=S(E)}function h(E,S){this.h=S;for(var A=[],k=!0,O=E.length-1;0<=O;O--){var L=E[O]|0;k&&L==S||(A[O]=L,k=!1)}this.g=A}var f={};function p(E){return-128<=E&&128>E?l(E,function(S){return new h([S|0],0>S?-1:0)}):new h([E|0],0>E?-1:0)}function y(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return F(y(-E));for(var S=[],A=1,k=0;E>=A;k++)S[k]=E/A|0,A*=4294967296;return new h(S,0)}function w(E,S){if(E.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(E.charAt(0)=="-")return F(w(E.substring(1),S));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=y(Math.pow(S,8)),k=T,O=0;O<E.length;O+=8){var L=Math.min(8,E.length-O),C=parseInt(E.substring(O,O+L),S);8>L?(L=y(Math.pow(S,L)),k=k.j(L).add(y(C))):(k=k.j(A),k=k.add(y(C)))}return k}var T=p(0),R=p(1),N=p(16777216);n=h.prototype,n.m=function(){if(z(this))return-F(this).m();for(var E=0,S=1,A=0;A<this.g.length;A++){var k=this.i(A);E+=(0<=k?k:4294967296+k)*S,S*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(z(this))return"-"+F(this).toString(E);for(var S=y(Math.pow(E,6)),A=this,k="";;){var O=ne(A,S).g;A=X(A,O.j(S));var L=((0<A.g.length?A.g[0]:A.h)>>>0).toString(E);if(A=O,V(A))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var S=0;S<E.g.length;S++)if(E.g[S]!=0)return!1;return!0}function z(E){return E.h==-1}n.l=function(E){return E=X(this,E),z(E)?-1:V(E)?0:1};function F(E){for(var S=E.g.length,A=[],k=0;k<S;k++)A[k]=~E.g[k];return new h(A,~E.h).add(R)}n.abs=function(){return z(this)?F(this):this},n.add=function(E){for(var S=Math.max(this.g.length,E.g.length),A=[],k=0,O=0;O<=S;O++){var L=k+(this.i(O)&65535)+(E.i(O)&65535),C=(L>>>16)+(this.i(O)>>>16)+(E.i(O)>>>16);k=C>>>16,L&=65535,C&=65535,A[O]=C<<16|L}return new h(A,A[A.length-1]&-2147483648?-1:0)};function X(E,S){return E.add(F(S))}n.j=function(E){if(V(this)||V(E))return T;if(z(this))return z(E)?F(this).j(F(E)):F(F(this).j(E));if(z(E))return F(this.j(F(E)));if(0>this.l(N)&&0>E.l(N))return y(this.m()*E.m());for(var S=this.g.length+E.g.length,A=[],k=0;k<2*S;k++)A[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<E.g.length;O++){var L=this.i(k)>>>16,C=this.i(k)&65535,Be=E.i(O)>>>16,ct=E.i(O)&65535;A[2*k+2*O]+=C*ct,G(A,2*k+2*O),A[2*k+2*O+1]+=L*ct,G(A,2*k+2*O+1),A[2*k+2*O+1]+=C*Be,G(A,2*k+2*O+1),A[2*k+2*O+2]+=L*Be,G(A,2*k+2*O+2)}for(k=0;k<S;k++)A[k]=A[2*k+1]<<16|A[2*k];for(k=S;k<2*S;k++)A[k]=0;return new h(A,0)};function G(E,S){for(;(E[S]&65535)!=E[S];)E[S+1]+=E[S]>>>16,E[S]&=65535,S++}function Z(E,S){this.g=E,this.h=S}function ne(E,S){if(V(S))throw Error("division by zero");if(V(E))return new Z(T,T);if(z(E))return S=ne(F(E),S),new Z(F(S.g),F(S.h));if(z(S))return S=ne(E,F(S)),new Z(F(S.g),S.h);if(30<E.g.length){if(z(E)||z(S))throw Error("slowDivide_ only works with positive integers.");for(var A=R,k=S;0>=k.l(E);)A=de(A),k=de(k);var O=ce(A,1),L=ce(k,1);for(k=ce(k,2),A=ce(A,2);!V(k);){var C=L.add(k);0>=C.l(E)&&(O=O.add(A),L=C),k=ce(k,1),A=ce(A,1)}return S=X(E,O.j(S)),new Z(O,S)}for(O=T;0<=E.l(S);){for(A=Math.max(1,Math.floor(E.m()/S.m())),k=Math.ceil(Math.log(A)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=y(A),C=L.j(S);z(C)||0<C.l(E);)A-=k,L=y(A),C=L.j(S);V(L)&&(L=R),O=O.add(L),E=X(E,C)}return new Z(O,E)}n.A=function(E){return ne(this,E).h},n.and=function(E){for(var S=Math.max(this.g.length,E.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)&E.i(k);return new h(A,this.h&E.h)},n.or=function(E){for(var S=Math.max(this.g.length,E.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)|E.i(k);return new h(A,this.h|E.h)},n.xor=function(E){for(var S=Math.max(this.g.length,E.g.length),A=[],k=0;k<S;k++)A[k]=this.i(k)^E.i(k);return new h(A,this.h^E.h)};function de(E){for(var S=E.g.length+1,A=[],k=0;k<S;k++)A[k]=E.i(k)<<1|E.i(k-1)>>>31;return new h(A,E.h)}function ce(E,S){var A=S>>5;S%=32;for(var k=E.g.length-A,O=[],L=0;L<k;L++)O[L]=0<S?E.i(L+A)>>>S|E.i(L+A+1)<<32-S:E.i(L+A);return new h(O,E.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,Q0=h}).apply(typeof xv<"u"?xv:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Y0,Il,X0,kc,Qf,J0,Z0,ew;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var v=s;u=u.split(".");for(var I=0;I<u.length-1;I++){var j=u[I];if(!(j in v))break e;v=v[j]}u=u[u.length-1],I=v[u],m=m(I),m!=I&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,I=!1,j={next:function(){if(!I&&v<u.length){var K=v++;return{value:m(K,u[K]),done:!1}}return I=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,v){return u.call.apply(u.bind,arguments)}function T(u,m,v){if(!u)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,I),u.apply(m,j)}}return function(){return u.apply(m,arguments)}}function R(u,m,v){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:T,R.apply(null,arguments)}function N(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),u.apply(this,I)}}function V(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(I,j,K){for(var ae=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)ae[lt-2]=arguments[lt];return m.prototype[j].apply(I,ae)}}function z(u){const m=u.length;if(0<m){const v=Array(m);for(let I=0;I<m;I++)v[I]=u[I];return v}return[]}function F(u,m){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(p(I)){const j=u.length||0,K=I.length||0;u.length=j+K;for(let ae=0;ae<K;ae++)u[j+ae]=I[ae]}else u.push(I)}}class X{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function Z(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ne(u){return ne[" "](u),u}ne[" "]=function(){};var de=Z().indexOf("Gecko")!=-1&&!(Z().toLowerCase().indexOf("webkit")!=-1&&Z().indexOf("Edge")==-1)&&!(Z().indexOf("Trident")!=-1||Z().indexOf("MSIE")!=-1)&&Z().indexOf("Edge")==-1;function ce(u,m,v){for(const I in u)m.call(v,u[I],I,u)}function E(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function S(u){const m={};for(const v in u)m[v]=u[v];return m}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let v,I;for(let j=1;j<arguments.length;j++){I=arguments[j];for(v in I)u[v]=I[v];for(let K=0;K<A.length;K++)v=A[K],Object.prototype.hasOwnProperty.call(I,v)&&(u[v]=I[v])}}function O(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function L(u){f.setTimeout(()=>{throw u},0)}function C(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Be{constructor(){this.h=this.g=null}add(m,v){const I=ct.get();I.set(m,v),this.h?this.h.next=I:this.g=I,this.h=I}}var ct=new X(()=>new Tt,u=>u.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let He,te=!1,me=new Be,ue=()=>{const u=f.Promise.resolve(void 0);He=()=>{u.then(M)}};var M=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){L(v)}var m=ct;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}te=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return u}();function Re(u,m){if(ve.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,I=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(de){e:{try{ne(m.nodeName);var j=!0;break e}catch{}j=!1}j||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Oe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Re.aa.h.call(this)}}V(Re,ve);var Oe={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Ge(u,m,v,I,j){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!I,this.ha=j,this.key=++Ue,this.da=this.fa=!1}function vt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function hn(u){this.src=u,this.g={},this.h=0}hn.prototype.add=function(u,m,v,I,j){var K=u.toString();u=this.g[K],u||(u=this.g[K]=[],this.h++);var ae=Sn(u,m,I,j);return-1<ae?(m=u[ae],v||(m.fa=!1)):(m=new Ge(m,this.src,K,!!I,j),m.fa=v,u.push(m)),m};function it(u,m){var v=m.type;if(v in u.g){var I=u.g[v],j=Array.prototype.indexOf.call(I,m,void 0),K;(K=0<=j)&&Array.prototype.splice.call(I,j,1),K&&(vt(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function Sn(u,m,v,I){for(var j=0;j<u.length;++j){var K=u[j];if(!K.da&&K.listener==m&&K.capture==!!v&&K.ha==I)return j}return-1}var Br="closure_lm_"+(1e6*Math.random()|0),Bi={};function Wn(u,m,v,I,j){if(Array.isArray(m)){for(var K=0;K<m.length;K++)Wn(u,m[K],v,I,j);return null}return v=Er(v),u&&u[Ve]?u.K(m,v,y(I)?!!I.capture:!1,j):Ls(u,m,v,!1,I,j)}function Ls(u,m,v,I,j,K){if(!m)throw Error("Invalid event type");var ae=y(j)?!!j.capture:!!j,lt=zi(u);if(lt||(u[Br]=lt=new hn(u)),v=lt.add(m,v,I,ae,K),v.proxy)return v;if(I=Po(),v.proxy=I,I.src=u,I.listener=v,u.addEventListener)xe||(j=ae),j===void 0&&(j=!1),u.addEventListener(m.toString(),I,j);else if(u.attachEvent)u.attachEvent(wr(m.toString()),I);else if(u.addListener&&u.removeListener)u.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Po(){function u(v){return m.call(u.src,u.listener,v)}const m=Ms;return u}function di(u,m,v,I,j){if(Array.isArray(m))for(var K=0;K<m.length;K++)di(u,m[K],v,I,j);else I=y(I)?!!I.capture:!!I,v=Er(v),u&&u[Ve]?(u=u.i,m=String(m).toString(),m in u.g&&(K=u.g[m],v=Sn(K,v,I,j),-1<v&&(vt(K[v]),Array.prototype.splice.call(K,v,1),K.length==0&&(delete u.g[m],u.h--)))):u&&(u=zi(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Sn(m,v,I,j)),(v=-1<u?m[u]:null)&&_r(v))}function _r(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Ve])it(m.i,u);else{var v=u.type,I=u.proxy;m.removeEventListener?m.removeEventListener(v,I,u.capture):m.detachEvent?m.detachEvent(wr(v),I):m.addListener&&m.removeListener&&m.removeListener(I),(v=zi(m))?(it(v,u),v.h==0&&(v.src=null,m[Br]=null)):vt(u)}}}function wr(u){return u in Bi?Bi[u]:Bi[u]="on"+u}function Ms(u,m){if(u.da)u=!0;else{m=new Re(m,this);var v=u.listener,I=u.ha||u.src;u.fa&&_r(u),u=v.call(I,m)}return u}function zi(u){return u=u[Br],u instanceof hn?u:null}var xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Er(u){return typeof u=="function"?u:(u[xn]||(u[xn]=function(m){return u.handleEvent(m)}),u[xn])}function Ct(){q.call(this),this.i=new hn(this),this.M=this,this.F=null}V(Ct,q),Ct.prototype[Ve]=!0,Ct.prototype.removeEventListener=function(u,m,v,I){di(this,u,m,v,I)};function It(u,m){var v,I=u.F;if(I)for(v=[];I;I=I.F)v.push(I);if(u=u.M,I=m.type||m,typeof m=="string")m=new ve(m,u);else if(m instanceof ve)m.target=m.target||u;else{var j=m;m=new ve(I,u),k(m,j)}if(j=!0,v)for(var K=v.length-1;0<=K;K--){var ae=m.g=v[K];j=qt(ae,I,!0,m)&&j}if(ae=m.g=u,j=qt(ae,I,!0,m)&&j,j=qt(ae,I,!1,m)&&j,v)for(K=0;K<v.length;K++)ae=m.g=v[K],j=qt(ae,I,!1,m)&&j}Ct.prototype.N=function(){if(Ct.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],I=0;I<v.length;I++)vt(v[I]);delete u.g[m],u.h--}}this.F=null},Ct.prototype.K=function(u,m,v,I){return this.i.add(String(u),m,!1,v,I)},Ct.prototype.L=function(u,m,v,I){return this.i.add(String(u),m,!0,v,I)};function qt(u,m,v,I){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var j=!0,K=0;K<m.length;++K){var ae=m[K];if(ae&&!ae.da&&ae.capture==v){var lt=ae.listener,Ht=ae.ha||ae.src;ae.fa&&it(u.i,ae),j=lt.call(Ht,I)!==!1&&j}}return j&&!I.defaultPrevented}function Rn(u,m,v){if(typeof u=="function")v&&(u=R(u,v));else if(u&&typeof u.handleEvent=="function")u=R(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Tr(u){u.g=Rn(()=>{u.g=null,u.i&&(u.i=!1,Tr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class or extends q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Tr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(u){q.call(this),this.h=u,this.g={}}V(fi,q);var Nn=[];function $i(u){ce(u.g,function(m,v){this.g.hasOwnProperty(v)&&_r(m)},u),u.g={}}fi.prototype.N=function(){fi.aa.N.call(this),$i(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=f.JSON.stringify,Wi=f.JSON.parse,Vs=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function zr(){}zr.prototype.h=null;function Ir(u){return u.h||(u.h=u.i())}function pi(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dn(){ve.call(this,"d")}V(Dn,ve);function Ki(){ve.call(this,"c")}V(Ki,ve);var Kn={},Us=null;function $r(){return Us=Us||new Ct}Kn.La="serverreachability";function Hr(u){ve.call(this,Kn.La,u)}V(Hr,ve);function On(u){const m=$r();It(m,new Hr(m))}Kn.STAT_EVENT="statevent";function Fs(u,m){ve.call(this,Kn.STAT_EVENT,u),this.stat=m}V(Fs,ve);function St(u){const m=$r();It(m,new Fs(m,u))}Kn.Ma="timingevent";function x(u,m){ve.call(this,Kn.Ma,u),this.size=m}V(x,ve);function U(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function H(){this.g=!0}H.prototype.xa=function(){this.g=!1};function Y(u,m,v,I,j,K){u.info(function(){if(u.g)if(K)for(var ae="",lt=K.split("&"),Ht=0;Ht<lt.length;Ht++){var Ze=lt[Ht].split("=");if(1<Ze.length){var Gt=Ze[0];Ze=Ze[1];var Ut=Gt.split("_");ae=2<=Ut.length&&Ut[1]=="type"?ae+(Gt+"="+Ze+"&"):ae+(Gt+"=redacted&")}}else ae=null;else ae=K;return"XMLHTTP REQ ("+I+") [attempt "+j+"]: "+m+`
`+v+`
`+ae})}function le(u,m,v,I,j,K,ae){u.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+j+"]: "+m+`
`+v+`
`+K+" "+ae})}function _e(u,m,v,I){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+we(u,v)+(I?" "+I:"")})}function Pe(u,m){u.info(function(){return"TIMEOUT: "+m})}H.prototype.info=function(){};function we(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var I=v[u];if(!(2>I.length)){var j=I[1];if(Array.isArray(j)&&!(1>j.length)){var K=j[0];if(K!="noop"&&K!="stop"&&K!="close")for(var ae=1;ae<j.length;ae++)j[ae]=""}}}}return Hi(v)}catch{return m}}var ge={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fe={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pe;function Ne(){}V(Ne,zr),Ne.prototype.g=function(){return new XMLHttpRequest},Ne.prototype.i=function(){return{}},pe=new Ne;function Me(u,m,v,I){this.j=u,this.i=m,this.l=v,this.R=I||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new kt}function kt(){this.i=null,this.g="",this.h=!1}var nt={},ze={};function at(u,m,v){u.L=1,u.v=Xi(Qn(m)),u.m=v,u.P=!0,ar(u,null)}function ar(u,m){u.F=Date.now(),We(u),u.A=Qn(u.v);var v=u.A,I=u.R;Array.isArray(I)||(I=[String(I)]),Zi(v.i,"t",I),u.C=0,v=u.j.J,u.h=new kt,u.g=du(u.j,v?m:null,!u.m),0<u.O&&(u.M=new or(R(u.Y,u,u.g),u.O)),m=u.U,v=u.g,I=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(Nn[0]=j.toString()),j=Nn);for(var K=0;K<j.length;K++){var ae=Wn(v,j[K],I||m.handleEvent,!1,m.h||m);if(!ae)break;m.g[ae.key]=ae}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),On(),Y(u.i,u.u,u.A,u.l,u.R,u.m)}Me.prototype.ca=function(u){u=u.target;const m=this.M;m&&Ln(u)==3?m.j():this.Y(u)},Me.prototype.Y=function(u){try{if(u==this.g)e:{const Ut=Ln(this.g);var m=this.g.Ba();const cr=this.g.Z();if(!(3>Ut)&&(Ut!=3||this.g&&(this.h.h||this.g.oa()||Fa(this.g)))){this.J||Ut!=4||m==7||(m==8||0>=cr?On(3):On(2)),Gn(this);var v=this.g.Z();this.X=v;t:if(Wr(this)){var I=Fa(this.g);u="";var j=I.length,K=Ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),fn(this);var ae="";break t}this.h.i=new f.TextDecoder}for(m=0;m<j;m++)this.h.h=!0,u+=this.h.i.decode(I[m],{stream:!(K&&m==j-1)});I.length=0,this.h.g+=u,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,le(this.i,this.u,this.A,this.l,this.R,Ut,v),this.o){if(this.T&&!this.K){t:{if(this.g){var lt,Ht=this.g;if((lt=Ht.g?Ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(lt)){var Ze=lt;break t}}Ze=null}if(v=Ze)_e(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Kr(this,v);else{this.o=!1,this.s=3,St(12),nn(this),fn(this);break e}}if(this.P){v=!0;let Xn;for(;!this.J&&this.C<ae.length;)if(Xn=qn(this,ae),Xn==ze){Ut==4&&(this.s=4,St(14),v=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Xn==nt){this.s=4,St(15),_e(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else _e(this.i,this.l,Xn,null),Kr(this,Xn);if(Wr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ut!=4||ae.length!=0||this.h.h||(this.s=1,St(16),v=!1),this.o=this.o&&v,!v)_e(this.i,this.l,ae,"[Invalid Chunked Response]"),nn(this),fn(this);else if(0<ae.length&&!this.W){this.W=!0;var Gt=this.j;Gt.g==this&&Gt.ba&&!Gt.M&&(Gt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Ba(Gt),Gt.M=!0,St(11))}}else _e(this.i,this.l,ae,null),Kr(this,ae);Ut==4&&nn(this),this.o&&!this.J&&(Ut==4?Fo(this.j,this):(this.o=!1,We(this)))}else bo(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),nn(this),fn(this)}}}catch{}finally{}};function Wr(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function qn(u,m){var v=u.C,I=m.indexOf(`
`,v);return I==-1?ze:(v=Number(m.substring(v,I)),isNaN(v)?nt:(I+=1,I+v>m.length?ze:(m=m.slice(I,I+v),u.C=I+v,m)))}Me.prototype.cancel=function(){this.J=!0,nn(this)};function We(u){u.S=Date.now()+u.I,qi(u,u.I)}function qi(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=U(R(u.ba,u),m)}function Gn(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Me.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Pe(this.i,this.A),this.L!=2&&(On(),St(17)),nn(this),this.s=2,fn(this)):qi(this,this.S-u)};function fn(u){u.j.G==0||u.J||Fo(u.j,u)}function nn(u){Gn(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,$i(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Kr(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Qe(v.h,u))){if(!u.K&&Qe(v.h,u)&&v.G==3){try{var I=v.Da.g.parse(m)}catch{I=null}if(Array.isArray(I)&&I.length==3){var j=I;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Uo(v),Cr(v);else break e;Vo(v),St(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=U(R(v.Za,v),6e3));if(1>=qr(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else _i(v,11)}else if((u.K||v.g==u)&&Uo(v),!G(m))for(j=v.Da.g.parse(m),m=0;m<j.length;m++){let Ze=j[m];if(v.T=Ze[0],Ze=Ze[1],v.G==2)if(Ze[0]=="c"){v.K=Ze[1],v.ia=Ze[2];const Gt=Ze[3];Gt!=null&&(v.la=Gt,v.j.info("VER="+v.la));const Ut=Ze[4];Ut!=null&&(v.Aa=Ut,v.j.info("SVER="+v.Aa));const cr=Ze[5];cr!=null&&typeof cr=="number"&&0<cr&&(I=1.5*cr,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const Xn=u.g;if(Xn){const Ks=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ks){var K=I.h;K.g||Ks.indexOf("spdy")==-1&&Ks.indexOf("quic")==-1&&Ks.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(lr(K,K.h),K.h=null))}if(I.D){const Bo=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bo&&(I.ya=Bo,ht(I.I,I.D,Bo))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var ae=u;if(I.qa=hu(I,I.J?I.ia:null,I.W),ae.K){js(I.h,ae);var lt=ae,Ht=I.L;Ht&&(lt.I=Ht),lt.B&&(Gn(lt),We(lt)),I.g=ae}else Ws(I);0<v.i.length&&Xr(v)}else Ze[0]!="stop"&&Ze[0]!="close"||_i(v,7);else v.G==3&&(Ze[0]=="stop"||Ze[0]=="close"?Ze[0]=="stop"?_i(v,7):sn(v):Ze[0]!="noop"&&v.l&&v.l.ta(Ze),v.v=0)}}On(4)}catch{}}var Ke=class{constructor(u,m){this.g=u,this.map=m}};function st(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vt(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function qr(u){return u.h?1:u.g?u.g.size:0}function Qe(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function lr(u,m){u.g?u.g.add(m):u.h=m}function js(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}st.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Co(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return z(u.i)}function ko(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,I=0;I<v;I++)m.push(u[I]);return m}m=[],v=0;for(I in u)m[v++]=u[I];return m}function xo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const I in u)m[v++]=I;return m}}}function Gi(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=xo(u),I=ko(u),j=I.length,K=0;K<j;K++)m.call(void 0,I[K],v&&v[K],u)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oh(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var I=u[v].indexOf("="),j=null;if(0<=I){var K=u[v].substring(0,I);j=u[v].substring(I+1)}else K=u[v];m(K,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function mi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mi){this.h=u.h,zs(this,u.j),this.o=u.o,this.g=u.g,Qi(this,u.s),this.l=u.l;var m=u.i,v=new Gr;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Yi(this,v),this.m=u.m}else u&&(m=String(u).match(Bs))?(this.h=!1,zs(this,m[1]||"",!0),this.o=Ye(m[2]||""),this.g=Ye(m[3]||"",!0),Qi(this,m[4]),this.l=Ye(m[5]||"",!0),Yi(this,m[6]||"",!0),this.m=Ye(m[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}mi.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Ji(m,No,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Ji(m,No,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Ji(v,v.charAt(0)=="/"?ru:nu,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Ji(v,Ma)),u.join("")};function Qn(u){return new mi(u)}function zs(u,m,v){u.j=v?Ye(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Qi(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Yi(u,m,v){m instanceof Gr?(u.i=m,Qr(u.i,u.h)):(v||(m=Ji(m,iu)),u.i=new Gr(m,u.h))}function ht(u,m,v){u.i.set(m,v)}function Xi(u){return ht(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ye(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ji(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,tu),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var No=/[#\/\?@]/g,nu=/[#\?:]/g,ru=/[#\?]/g,iu=/[#\?@]/g,Ma=/#/g;function Gr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function rn(u){u.g||(u.g=new Map,u.h=0,u.i&&Oh(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Gr.prototype,n.add=function(u,m){rn(this),this.i=null,u=ur(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Sr(u,m){rn(u),m=ur(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Rr(u,m){return rn(u),m=ur(u,m),u.g.has(m)}n.forEach=function(u,m){rn(this),this.g.forEach(function(v,I){v.forEach(function(j){u.call(m,j,I,this)},this)},this)},n.na=function(){rn(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let I=0;I<m.length;I++){const j=u[I];for(let K=0;K<j.length;K++)v.push(m[I])}return v},n.V=function(u){rn(this);let m=[];if(typeof u=="string")Rr(this,u)&&(m=m.concat(this.g.get(ur(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return rn(this),this.i=null,u=ur(this,u),Rr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Zi(u,m,v){Sr(u,m),0<v.length&&(u.i=null,u.g.set(ur(u,m),z(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var I=m[v];const K=encodeURIComponent(String(I)),ae=this.V(I);for(I=0;I<ae.length;I++){var j=K;ae[I]!==""&&(j+="="+encodeURIComponent(String(ae[I]))),u.push(j)}}return this.i=u.join("&")};function ur(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Qr(u,m){m&&!u.j&&(rn(u),u.i=null,u.g.forEach(function(v,I){var j=I.toLowerCase();I!=j&&(Sr(this,I),Zi(this,j,v))},u)),u.j=m}function bh(u,m){const v=new H;if(f.Image){const I=new Image;I.onload=N(bn,v,"TestLoadImage: loaded",!0,m,I),I.onerror=N(bn,v,"TestLoadImage: error",!1,m,I),I.onabort=N(bn,v,"TestLoadImage: abort",!1,m,I),I.ontimeout=N(bn,v,"TestLoadImage: timeout",!1,m,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=u}else m(!1)}function su(u,m){const v=new H,I=new AbortController,j=setTimeout(()=>{I.abort(),bn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:I.signal}).then(K=>{clearTimeout(j),K.ok?bn(v,"TestPingServer: ok",!0,m):bn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(j),bn(v,"TestPingServer: error",!1,m)})}function bn(u,m,v,I,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),I(v)}catch{}}function Lh(){this.g=new Vs}function ou(u,m,v){const I=v||"";try{Gi(u,function(j,K){let ae=j;y(j)&&(ae=Hi(j)),m.push(I+K+"="+encodeURIComponent(ae))})}catch(j){throw m.push(I+"type="+encodeURIComponent("_badmap")),j}}function gi(u){this.l=u.Ub||null,this.j=u.eb||!1}V(gi,zr),gi.prototype.g=function(){return new $s(this.l,this.j)},gi.prototype.i=function(u){return function(){return u}}({});function $s(u,m){Ct.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V($s,Ct),n=$s.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Pr(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Pr(this)),this.g&&(this.readyState=3,Pr(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;au(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function au(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Ar(this):Pr(this),this.readyState==3&&au(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ar(this))},n.Qa=function(u){this.g&&(this.response=u,Ar(this))},n.ga=function(){this.g&&Ar(this)};function Ar(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Pr(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Pr(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty($s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yi(u){let m="";return ce(u,function(v,I){m+=I,m+=":",m+=v,m+=`\r
`}),m}function es(u,m,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=yi(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):ht(u,m,v))}function _t(u){Ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(_t,Ct);var Mh=/^https?$/i,Va=["POST","PUT"];n=_t.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pe.g(),this.v=this.o?Ir(this.o):Ir(pe),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(K){Hs(this,K);return}if(u=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var j in I)v.set(j,I[j]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const K of I.keys())v.set(K,I.get(K));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(K=>K.toLowerCase()=="content-type"),j=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Va,m,void 0))||I||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,ae]of v)this.g.setRequestHeader(K,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oo(this),this.u=!0,this.g.send(u),this.u=!1}catch(K){Hs(this,K)}};function Hs(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Do(u),Yn(u)}function Do(u){u.A||(u.A=!0,It(u,"complete"),It(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,It(this,"complete"),It(this,"abort"),Yn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yn(this,!0)),_t.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ua(this):this.bb())},n.bb=function(){Ua(this)};function Ua(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Ln(u)!=4||u.Z()!=2)){if(u.u&&Ln(u)==4)Rn(u.Ea,0,u);else if(It(u,"readystatechange"),Ln(u)==4){u.h=!1;try{const ae=u.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var I;if(I=ae===0){var j=String(u.D).match(Bs)[1]||null;!j&&f.self&&f.self.location&&(j=f.self.location.protocol.slice(0,-1)),I=!Mh.test(j?j.toLowerCase():"")}v=I}if(v)It(u,"complete"),It(u,"success");else{u.m=6;try{var K=2<Ln(u)?u.g.statusText:""}catch{K=""}u.l=K+" ["+u.Z()+"]",Do(u)}}finally{Yn(u)}}}}function Yn(u,m){if(u.g){Oo(u);const v=u.g,I=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||It(u,"ready");try{v.onreadystatechange=I}catch{}}}function Oo(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Ln(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Ln(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),Wi(m)}};function Fa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function bo(u){const m={};u=(u.g&&2<=Ln(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<u.length;I++){if(G(u[I]))continue;var v=O(u[I]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const K=m[j]||[];m[j]=K,K.push(v)}E(m,function(I){return I.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yr(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ja(u){this.Aa=0,this.i=[],this.j=new H,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yr("baseRetryDelayMs",5e3,u),this.cb=Yr("retryDelaySeedMs",1e4,u),this.Wa=Yr("forwardChannelMaxRetries",2,u),this.wa=Yr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new st(u&&u.concurrentRequestLimit),this.Da=new Lh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ja.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,I){St(0),this.W=u,this.H=m||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=hu(this,null,this.W),Xr(this)};function sn(u){if(Lo(u),u.G==3){var m=u.U++,v=Qn(u.I);if(ht(v,"SID",u.K),ht(v,"RID",m),ht(v,"TYPE","terminate"),vi(u,v),m=new Me(u,u.j,m),m.L=2,m.v=Xi(Qn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.v,v=!0),v||(m.g=du(m.j,null),m.g.ea(m.v)),m.F=Date.now(),We(m)}cu(u)}function Cr(u){u.g&&(Ba(u),u.g.cancel(),u.g=null)}function Lo(u){Cr(u),u.u&&(f.clearTimeout(u.u),u.u=null),Uo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Xr(u){if(!Vt(u.h)&&!u.s){u.s=!0;var m=u.Ga;He||ue(),te||(He(),te=!0),me.add(m,u),u.B=0}}function Vh(u,m){return qr(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=U(R(u.Ga,u,m),uu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new Me(this,this.j,u);let K=this.o;if(this.S&&(K?(K=S(K),k(K,this.S)):K=this.S),this.m!==null||this.O||(j.H=K,K=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(m+=I,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=ts(this,j,m),v=Qn(this.I),ht(v,"RID",u),ht(v,"CVER",22),this.D&&ht(v,"X-HTTP-Session-Id",this.D),vi(this,v),K&&(this.O?m="headers="+encodeURIComponent(String(yi(K)))+"&"+m:this.m&&es(v,this.m,K)),lr(this.h,j),this.Ua&&ht(v,"TYPE","init"),this.P?(ht(v,"$req",m),ht(v,"SID","null"),j.T=!0,at(j,v,null)):at(j,v,m),this.G=2}}else this.G==3&&(u?Mo(this,u):this.i.length==0||Vt(this.h)||Mo(this))};function Mo(u,m){var v;m?v=m.l:v=u.U++;const I=Qn(u.I);ht(I,"SID",u.K),ht(I,"RID",v),ht(I,"AID",u.T),vi(u,I),u.m&&u.o&&es(I,u.m,u.o),v=new Me(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ts(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),lr(u.h,v),at(v,I,m)}function vi(u,m){u.H&&ce(u.H,function(v,I){ht(m,I,v)}),u.l&&Gi({},function(v,I){ht(m,I,v)})}function ts(u,m,v){v=Math.min(u.i.length,v);var I=u.l?R(u.l.Na,u.l,u):null;e:{var j=u.i;let K=-1;for(;;){const ae=["count="+v];K==-1?0<v?(K=j[0].g,ae.push("ofs="+K)):K=0:ae.push("ofs="+K);let lt=!0;for(let Ht=0;Ht<v;Ht++){let Ze=j[Ht].g;const Gt=j[Ht].map;if(Ze-=K,0>Ze)K=Math.max(0,j[Ht].g-100),lt=!1;else try{ou(Gt,ae,"req"+Ze+"_")}catch{I&&I(Gt)}}if(lt){I=ae.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,I}function Ws(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;He||ue(),te||(He(),te=!0),me.add(m,u),u.v=0}}function Vo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=U(R(u.Fa,u),uu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,lu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=U(R(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),Cr(this),lu(this))};function Ba(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function lu(u){u.g=new Me(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=Qn(u.qa);ht(m,"RID","rpc"),ht(m,"SID",u.K),ht(m,"AID",u.T),ht(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&ht(m,"TO",u.ja),ht(m,"TYPE","xmlhttp"),vi(u,m),u.m&&u.o&&es(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Xi(Qn(m)),v.m=null,v.P=!0,ar(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Cr(this),Vo(this),St(19))};function Uo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Fo(u,m){var v=null;if(u.g==m){Uo(u),Ba(u),u.g=null;var I=2}else if(Qe(u.h,m))v=m.D,js(u.h,m),I=1;else return;if(u.G!=0){if(m.o)if(I==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var j=u.B;I=$r(),It(I,new x(I,v)),Xr(u)}else Ws(u);else if(j=m.s,j==3||j==0&&0<m.X||!(I==1&&Vh(u,m)||I==2&&Vo(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),j){case 1:_i(u,5);break;case 4:_i(u,10);break;case 3:_i(u,6);break;default:_i(u,2)}}}function uu(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function _i(u,m){if(u.j.info("Error code "+m),m==2){var v=R(u.fb,u),I=u.Xa;const j=!I;I=new mi(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||zs(I,"https"),Xi(I),j?bh(I.toString(),v):su(I.toString(),v)}else St(2);u.G=0,u.l&&u.l.sa(m),cu(u),Lo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function cu(u){if(u.G=0,u.ka=[],u.l){const m=Co(u.h);(m.length!=0||u.i.length!=0)&&(F(u.ka,m),F(u.ka,u.i),u.h.i.length=0,z(u.i),u.i.length=0),u.l.ra()}}function hu(u,m,v){var I=v instanceof mi?Qn(v):new mi(v);if(I.g!="")m&&(I.g=m+"."+I.g),Qi(I,I.s);else{var j=f.location;I=j.protocol,m=m?m+"."+j.hostname:j.hostname,j=+j.port;var K=new mi(null);I&&zs(K,I),m&&(K.g=m),j&&Qi(K,j),v&&(K.l=v),I=K}return v=u.D,m=u.ya,v&&m&&ht(I,v,m),ht(I,"VER",u.la),vi(u,I),I}function du(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new _t(new gi({eb:v})):new _t(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function za(){}n=za.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function jo(){}jo.prototype.g=function(u,m){return new An(u,m)};function An(u,m){Ct.call(this),this.g=new ja(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Jr(this)}V(An,Ct),An.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},An.prototype.close=function(){sn(this.g)},An.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=Hi(u),u=v);m.i.push(new Ke(m.Ya++,u)),m.G==3&&Xr(m)},An.prototype.N=function(){this.g.l=null,delete this.j,sn(this.g),delete this.g,An.aa.N.call(this)};function fu(u){Dn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(fu,Dn);function pu(){Ki.call(this),this.status=1}V(pu,Ki);function Jr(u){this.g=u}V(Jr,za),Jr.prototype.ua=function(){It(this.g,"a")},Jr.prototype.ta=function(u){It(this.g,new fu(u))},Jr.prototype.sa=function(u){It(this.g,new pu)},Jr.prototype.ra=function(){It(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,An.prototype.send=An.prototype.o,An.prototype.open=An.prototype.m,An.prototype.close=An.prototype.close,ew=function(){return new jo},Z0=function(){return $r()},J0=Kn,Qf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,kc=ge,fe.COMPLETE="complete",X0=fe,pi.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",Ct.prototype.listen=Ct.prototype.K,Il=pi,_t.prototype.listenOnce=_t.prototype.L,_t.prototype.getLastError=_t.prototype.Ka,_t.prototype.getLastErrorCode=_t.prototype.Ba,_t.prototype.getStatus=_t.prototype.Z,_t.prototype.getResponseJson=_t.prototype.Oa,_t.prototype.getResponseText=_t.prototype.oa,_t.prototype.send=_t.prototype.ea,_t.prototype.setWithCredentials=_t.prototype.Ha,Y0=_t}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const Nv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_n.UNAUTHENTICATED=new _n(null),_n.GOOGLE_CREDENTIALS=new _n("google-credentials-uid"),_n.FIRST_PARTY=new _n("first-party-uid"),_n.MOCK_USER=new _n("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new _p("@firebase/firestore");function gl(){return To.logLevel}function Ae(n,...e){if(To.logLevel<=Xe.DEBUG){const t=e.map(Op);To.debug(`Firestore (${Oa}): ${n}`,...t)}}function Io(n,...e){if(To.logLevel<=Xe.ERROR){const t=e.map(Op);To.error(`Firestore (${Oa}): ${n}`,...t)}}function Qc(n,...e){if(To.logLevel<=Xe.WARN){const t=e.map(Op);To.warn(`Firestore (${Oa}): ${n}`,...t)}}function Op(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Je(n="Unexpected state"){const e=`FIRESTORE (${Oa}) INTERNAL ASSERTION FAILED: `+n;throw Io(e),new Error(e)}function Lt(n,e){n||Je()}function pt(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class De extends $n{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class fC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_n.UNAUTHENTICATED))}shutdown(){}}class pC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class mC{constructor(e){this.t=e,this.currentUser=_n.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Lt(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new mo;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new mo,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{Ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(Ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new mo)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Lt(typeof s.accessToken=="string"),new tw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Lt(e===null||typeof e=="string"),new _n(e)}}class gC{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=_n.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yC{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new gC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_n.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _C{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Lt(this.o===void 0);const s=l=>{l.error!=null&&Ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,Ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{Ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):Ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Lt(typeof t.token=="string"),this.R=t.token,new vC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=wC(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function dt(n,e){return n<e?-1:n>e?1:0}function Ia(n,e,t){return n.length===e.length&&n.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new De(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new De(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new De(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new De(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tn.fromMillis(Date.now())}static fromDate(e){return tn.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new tn(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?dt(this.nanoseconds,e.nanoseconds):dt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Pt(e)}static min(){return new Pt(new tn(0,0))}static max(){return new Pt(new tn(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,t,s){t===void 0?t=0:t>e.length&&Je(),s===void 0?s=e.length-t:s>e.length-t&&Je(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ul.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ul?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Nt extends Ul{construct(e,t,s){return new Nt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new De(se.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Nt(t)}static emptyPath(){return new Nt([])}}const EC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class cn extends Ul{construct(e,t,s){return new cn(e,t,s)}static isValidIdentifier(e){return EC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),cn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new cn(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new De(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new De(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new De(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new De(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new cn(t)}static emptyPath(){return new cn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.path=e}static fromPath(e){return new je(Nt.fromString(e))}static fromName(e){return new je(Nt.fromString(e).popFirst(5))}static empty(){return new je(Nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Nt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new je(new Nt(e.slice()))}}function TC(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Pt.fromTimestamp(s===1e9?new tn(t+1,0):new tn(t,s));return new ks(o,je.empty(),e)}function IC(n){return new ks(n.readTime,n.key,-1)}class ks{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new ks(Pt.min(),je.empty(),-1)}static max(){return new ks(Pt.max(),je.empty(),-1)}}function SC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=je.comparator(n.documentKey,e.documentKey),t!==0?t:dt(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(n){if(n.code!==se.FAILED_PRECONDITION||n.message!==RC)throw n;Ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Je(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ie((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ie?t:ie.resolve(t)}catch(t){return ie.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ie.reject(t)}static resolve(e){return new ie((t,s)=>{t(e)})}static reject(e){return new ie((t,s)=>{s(e)})}static waitFor(e){return new ie((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>s(p))}),h=!0,l===o&&t()})}static or(e){let t=ie.resolve(!1);for(const s of e)t=t.next(o=>o?ie.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new ie((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++f,f===l&&s(h)},w=>o(w))}})}static doWhile(e,t){return new ie((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function PC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Th(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class iw{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}iw.oe=-1;function bp(n){return n==null}function Yc(n){return n===0&&1/n==-1/0}function CC(n){return typeof n=="number"&&Number.isInteger(n)&&!Yc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ba(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.comparator=e,this.root=t||ln.EMPTY}insert(e,t){return new Hn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ln.BLACK,null,null))}remove(e){return new Hn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ln{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??ln.RED,this.left=o??ln.EMPTY,this.right=l??ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new ln(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return ln.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Je();const e=this.left.check();if(e!==this.right.check())throw Je();return e+(this.isRed()?0:1)}}ln.EMPTY=null,ln.RED=!0,ln.BLACK=!1;ln.EMPTY=new class{constructor(){this.size=0}get key(){throw Je()}get value(){throw Je()}get color(){throw Je()}get left(){throw Je()}get right(){throw Je()}copy(e,t,s,o,l){return this}insert(e,t,s){return new ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.comparator=e,this.data=new Hn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ov(this.data.getIterator())}getIteratorFrom(e){return new Ov(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Tn(this.comparator);return t.data=e,t}}class Ov{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.fields=e,e.sort(cn.comparator)}static empty(){return new ir([])}unionWith(e){let t=new Tn(cn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new ir(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ia(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class kC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new kC("Invalid base64 string: "+l):l}}(e);return new ui(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new ui(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return dt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ui.EMPTY_BYTE_STRING=new ui("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function So(n){if(Lt(!!n),typeof n=="string"){let e=0;const t=xC.exec(n);if(Lt(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:un(n.seconds),nanos:un(n.nanos)}}function un(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fl(n){return typeof n=="string"?ui.fromBase64String(n):ui.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ow(n){const e=n.mapValue.fields.__previous_value__;return Lp(e)?ow(e):e}function Xc(n){const e=So(n.mapValue.fields.__local_write_time__.timestampValue);return new tn(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,t,s,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class Jc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Jc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={mapValue:{}};function Sa(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Lp(n)?4:OC(n)?9007199254740991:DC(n)?10:11:Je()}function ci(n,e){if(n===e)return!0;const t=Sa(n);if(t!==Sa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xc(n).isEqual(Xc(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=So(o.timestampValue),f=So(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Fl(o.bytesValue).isEqual(Fl(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return un(o.geoPointValue.latitude)===un(l.geoPointValue.latitude)&&un(o.geoPointValue.longitude)===un(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return un(o.integerValue)===un(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=un(o.doubleValue),f=un(l.doubleValue);return h===f?Yc(h)===Yc(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return Ia(n.arrayValue.values||[],e.arrayValue.values||[],ci);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Dv(h)!==Dv(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ci(h[p],f[p])))return!1;return!0}(n,e);default:return Je()}}function jl(n,e){return(n.values||[]).find(t=>ci(t,e))!==void 0}function Ra(n,e){if(n===e)return 0;const t=Sa(n),s=Sa(e);if(t!==s)return dt(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return dt(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=un(l.integerValue||l.doubleValue),p=un(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(n,e);case 3:return bv(n.timestampValue,e.timestampValue);case 4:return bv(Xc(n),Xc(e));case 5:return dt(n.stringValue,e.stringValue);case 6:return function(l,h){const f=Fl(l),p=Fl(h);return f.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const w=dt(f[y],p[y]);if(w!==0)return w}return dt(f.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=dt(un(l.latitude),un(h.latitude));return f!==0?f:dt(un(l.longitude),un(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Lv(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,w;const T=l.fields||{},R=h.fields||{},N=(f=T.value)===null||f===void 0?void 0:f.arrayValue,V=(p=R.value)===null||p===void 0?void 0:p.arrayValue,z=dt(((y=N==null?void 0:N.values)===null||y===void 0?void 0:y.length)||0,((w=V==null?void 0:V.values)===null||w===void 0?void 0:w.length)||0);return z!==0?z:Lv(N,V)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===pc.mapValue&&h===pc.mapValue)return 0;if(l===pc.mapValue)return 1;if(h===pc.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let T=0;T<p.length&&T<w.length;++T){const R=dt(p[T],w[T]);if(R!==0)return R;const N=Ra(f[p[T]],y[w[T]]);if(N!==0)return N}return dt(p.length,w.length)}(n.mapValue,e.mapValue);default:throw Je()}}function bv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return dt(n,e);const t=So(n),s=So(e),o=dt(t.seconds,s.seconds);return o!==0?o:dt(t.nanos,s.nanos)}function Lv(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Ra(t[o],s[o]);if(l)return l}return dt(t.length,s.length)}function Aa(n){return Yf(n)}function Yf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=So(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fl(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return je.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Yf(l);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Yf(t.fields[h])}`;return o+"}"}(n.mapValue):Je()}function Xf(n){return!!n&&"integerValue"in n}function Mp(n){return!!n&&"arrayValue"in n}function xc(n){return!!n&&"mapValue"in n}function DC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Al(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ba(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Al(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Al(n.arrayValue.values[t]);return e}return Object.assign({},n)}function OC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.value=e}static empty(){return new rr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!xc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Al(t)}setAll(e){let t=cn.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Al(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());xc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ci(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];xc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ba(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new rr(Al(this.value))}}function aw(n){const e=[];return ba(n.fields,(t,s)=>{const o=new cn([t]);if(xc(s)){const l=aw(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new ir(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Mr(e,0,Pt.min(),Pt.min(),Pt.min(),rr.empty(),0)}static newFoundDocument(e,t,s,o){return new Mr(e,1,t,Pt.min(),s,o,0)}static newNoDocument(e,t){return new Mr(e,2,t,Pt.min(),Pt.min(),rr.empty(),0)}static newUnknownDocument(e,t){return new Mr(e,3,t,Pt.min(),Pt.min(),rr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Pt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zc{constructor(e,t){this.position=e,this.inclusive=t}}function Mv(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?s=je.comparator(je.fromName(h.referenceValue),t.key):s=Ra(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Vv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ci(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class eh{constructor(e,t="asc"){this.field=e,this.dir=t}}function bC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lw{}class en extends lw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new MC(e,t,s):t==="array-contains"?new FC(e,s):t==="in"?new jC(e,s):t==="not-in"?new BC(e,s):t==="array-contains-any"?new zC(e,s):new en(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new VC(e,s):new UC(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ra(t,this.value)):t!==null&&Sa(this.value)===Sa(t)&&this.matchesComparison(Ra(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Je()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xs extends lw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new xs(e,t)}matches(e){return uw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uw(n){return n.op==="and"}function cw(n){return LC(n)&&uw(n)}function LC(n){for(const e of n.filters)if(e instanceof xs)return!1;return!0}function Jf(n){if(n instanceof en)return n.field.canonicalString()+n.op.toString()+Aa(n.value);if(cw(n))return n.filters.map(e=>Jf(e)).join(",");{const e=n.filters.map(t=>Jf(t)).join(",");return`${n.op}(${e})`}}function hw(n,e){return n instanceof en?function(s,o){return o instanceof en&&s.op===o.op&&s.field.isEqual(o.field)&&ci(s.value,o.value)}(n,e):n instanceof xs?function(s,o){return o instanceof xs&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&hw(h,o.filters[f]),!0):!1}(n,e):void Je()}function dw(n){return n instanceof en?function(t){return`${t.field.canonicalString()} ${t.op} ${Aa(t.value)}`}(n):n instanceof xs?function(t){return t.op.toString()+" {"+t.getFilters().map(dw).join(" ,")+"}"}(n):"Filter"}class MC extends en{constructor(e,t,s){super(e,t,s),this.key=je.fromName(s.referenceValue)}matches(e){const t=je.comparator(e.key,this.key);return this.matchesComparison(t)}}class VC extends en{constructor(e,t){super(e,"in",t),this.keys=fw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class UC extends en{constructor(e,t){super(e,"not-in",t),this.keys=fw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function fw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>je.fromName(s.referenceValue))}class FC extends en{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mp(t)&&jl(t.arrayValue,this.value)}}class jC extends en{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&jl(this.value.arrayValue,t)}}class BC extends en{constructor(e,t){super(e,"not-in",t)}matches(e){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!jl(this.value.arrayValue,t)}}class zC extends en{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>jl(this.value.arrayValue,s))}}/**
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
 */class $C{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function Uv(n,e=null,t=[],s=[],o=null,l=null,h=null){return new $C(n,e,t,s,o,l,h)}function Vp(n){const e=pt(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Jf(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),bp(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Aa(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Aa(s)).join(",")),e.ue=t}return e.ue}function Up(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Vv(n.startAt,e.startAt)&&Vv(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HC(n,e,t,s,o,l,h,f){return new Ih(n,e,t,s,o,l,h,f)}function WC(n){return new Ih(n)}function Fv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function KC(n){return n.collectionGroup!==null}function Pl(n){const e=pt(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new Tn(cn.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new eh(l,s))}),t.has(cn.keyField().canonicalString())||e.ce.push(new eh(cn.keyField(),s))}return e.ce}function go(n){const e=pt(n);return e.le||(e.le=qC(e,Pl(n))),e.le}function qC(n,e){if(n.limitType==="F")return Uv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new eh(o.field,l)});const t=n.endAt?new Zc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Zc(n.startAt.position,n.startAt.inclusive):null;return Uv(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Zf(n,e,t){return new Ih(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pw(n,e){return Up(go(n),go(e))&&n.limitType===e.limitType}function mw(n){return`${Vp(go(n))}|lt:${n.limitType}`}function yl(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>dw(o)).join(", ")}]`),bp(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Aa(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Aa(o)).join(",")),`Target(${s})`}(go(n))}; limitType=${n.limitType})`}function Fp(n,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):je.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(n,e)&&function(s,o){for(const l of Pl(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(s,o){return!(s.startAt&&!function(h,f,p){const y=Mv(h,f,p);return h.inclusive?y<=0:y<0}(s.startAt,Pl(s),o)||s.endAt&&!function(h,f,p){const y=Mv(h,f,p);return h.inclusive?y>=0:y>0}(s.endAt,Pl(s),o))}(n,e)}function GC(n){return(e,t)=>{let s=!1;for(const o of Pl(n)){const l=QC(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function QC(n,e,t){const s=n.field.isKeyField()?je.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Ra(p,y):Je()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Je()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ba(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Hn(je.comparator);function th(){return YC}const gw=new Hn(je.comparator);function mc(...n){let e=gw;for(const t of n)e=e.insert(t.key,t);return e}function yw(n){let e=gw;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ho(){return Cl()}function vw(){return Cl()}function Cl(){return new La(n=>n.toString(),(n,e)=>n.isEqual(e))}const XC=new Hn(je.comparator),JC=new Tn(je.comparator);function wn(...n){let e=JC;for(const t of n)e=e.add(t);return e}const ZC=new Tn(dt);function ek(){return ZC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yc(e)?"-0":e}}function _w(n){return{integerValue:""+n}}function tk(n,e){return CC(e)?_w(e):jp(n,e)}/**
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
 */class Sh{constructor(){this._=void 0}}function nk(n,e,t){return n instanceof nh?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Lp(l)&&(l=ow(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof Bl?Ew(n,e):n instanceof zl?Tw(n,e):function(o,l){const h=ww(o,l),f=jv(h)+jv(o.Pe);return Xf(h)&&Xf(o.Pe)?_w(f):jp(o.serializer,f)}(n,e)}function rk(n,e,t){return n instanceof Bl?Ew(n,e):n instanceof zl?Tw(n,e):t}function ww(n,e){return n instanceof rh?function(s){return Xf(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class nh extends Sh{}class Bl extends Sh{constructor(e){super(),this.elements=e}}function Ew(n,e){const t=Iw(e);for(const s of n.elements)t.some(o=>ci(o,s))||t.push(s);return{arrayValue:{values:t}}}class zl extends Sh{constructor(e){super(),this.elements=e}}function Tw(n,e){let t=Iw(e);for(const s of n.elements)t=t.filter(o=>!ci(o,s));return{arrayValue:{values:t}}}class rh extends Sh{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function jv(n){return un(n.integerValue||n.doubleValue)}function Iw(n){return Mp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ik(n,e){return n.field.isEqual(e.field)&&function(s,o){return s instanceof Bl&&o instanceof Bl||s instanceof zl&&o instanceof zl?Ia(s.elements,o.elements,ci):s instanceof rh&&o instanceof rh?ci(s.Pe,o.Pe):s instanceof nh&&o instanceof nh}(n.transform,e.transform)}class sk{constructor(e,t){this.version=e,this.transformResults=t}}class ai{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ai}static exists(e){return new ai(void 0,e)}static updateTime(e){return new ai(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rh{}function Sw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Aw(n.key,ai.none()):new Jl(n.key,n.data,ai.none());{const t=n.data,s=rr.empty();let o=new Tn(cn.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new bs(n.key,s,new ir(o.toArray()),ai.none())}}function ok(n,e,t){n instanceof Jl?function(o,l,h){const f=o.value.clone(),p=zv(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof bs?function(o,l,h){if(!Nc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=zv(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(Rw(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function kl(n,e,t,s){return n instanceof Jl?function(l,h,f,p){if(!Nc(l.precondition,h))return f;const y=l.value.clone(),w=$v(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,s):n instanceof bs?function(l,h,f,p){if(!Nc(l.precondition,h))return f;const y=$v(l.fieldTransforms,p,h),w=h.data;return w.setAll(Rw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,s):function(l,h,f){return Nc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function ak(n,e){let t=null;for(const s of n.fieldTransforms){const o=e.data.field(s.field),l=ww(s.transform,o||null);l!=null&&(t===null&&(t=rr.empty()),t.set(s.field,l))}return t||null}function Bv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ia(s,o,(l,h)=>ik(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jl extends Rh{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class bs extends Rh{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Rw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function zv(n,e,t){const s=new Map;Lt(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,rk(h,f,t[o]))}return s}function $v(n,e,t){const s=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);s.set(o.field,nk(l,h,e))}return s}class Aw extends Rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lk extends Rh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&ok(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=kl(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=kl(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=vw();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=Sw(h,f);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Pt.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),wn())}isEqual(e){return this.batchId===e.batchId&&Ia(this.mutations,e.mutations,(t,s)=>Bv(t,s))&&Ia(this.baseMutations,e.baseMutations,(t,s)=>Bv(t,s))}}class Bp{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Lt(e.mutations.length===s.length);let o=function(){return XC}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new Bp(e,t,s,o)}}/**
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
 */class ck{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var jt,et;function hk(n){switch(n){default:return Je();case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0}}function dk(n){if(n===void 0)return Io("GRPC error has no .code"),se.UNKNOWN;switch(n){case jt.OK:return se.OK;case jt.CANCELLED:return se.CANCELLED;case jt.UNKNOWN:return se.UNKNOWN;case jt.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case jt.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case jt.INTERNAL:return se.INTERNAL;case jt.UNAVAILABLE:return se.UNAVAILABLE;case jt.UNAUTHENTICATED:return se.UNAUTHENTICATED;case jt.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case jt.NOT_FOUND:return se.NOT_FOUND;case jt.ALREADY_EXISTS:return se.ALREADY_EXISTS;case jt.PERMISSION_DENIED:return se.PERMISSION_DENIED;case jt.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case jt.ABORTED:return se.ABORTED;case jt.OUT_OF_RANGE:return se.OUT_OF_RANGE;case jt.UNIMPLEMENTED:return se.UNIMPLEMENTED;case jt.DATA_LOSS:return se.DATA_LOSS;default:return Je()}}(et=jt||(jt={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Q0([4294967295,4294967295],0);class fk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ep(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pk(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mk(n,e){return ep(n,e.toTimestamp())}function ma(n){return Lt(!!n),Pt.fromTimestamp(function(t){const s=So(t);return new tn(s.seconds,s.nanos)}(n))}function Pw(n,e){return tp(n,e).canonicalString()}function tp(n,e){const t=function(o){return new Nt(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function gk(n){const e=Nt.fromString(n);return Lt(Sk(e)),e}function np(n,e){return Pw(n.databaseId,e.path)}function yk(n){const e=gk(n);return e.length===4?Nt.emptyPath():_k(e)}function vk(n){return new Nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _k(n){return Lt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hv(n,e,t){return{name:np(n,e),fields:t.value.mapValue.fields}}function wk(n,e){let t;if(e instanceof Jl)t={update:Hv(n,e.key,e.value)};else if(e instanceof Aw)t={delete:np(n,e.key)};else if(e instanceof bs)t={update:Hv(n,e.key,e.data),updateMask:Ik(e.fieldMask)};else{if(!(e instanceof lk))return Je();t={verify:np(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof nh)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Bl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof zl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof rh)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Je()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:mk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Je()}(n,e.precondition)),t}function Ek(n,e){return n&&n.length>0?(Lt(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?ma(o.updateTime):ma(l);return h.isEqual(Pt.min())&&(h=ma(l)),new sk(h,o.transformResults||[])}(t,e))):[]}function Tk(n){let e=yk(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Lt(s===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(T){const R=Cw(T);return R instanceof xs&&cw(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(R=>function(V){return new eh(ca(V.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(R))}(t.orderBy));let f=null;t.limit&&(f=function(T){let R;return R=typeof T=="object"?T.value:T,bp(R)?null:R}(t.limit));let p=null;t.startAt&&(p=function(T){const R=!!T.before,N=T.values||[];return new Zc(N,R)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const R=!T.before,N=T.values||[];return new Zc(N,R)}(t.endAt)),HC(e,o,h,l,f,"F",p,y)}function Cw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=ca(t.unaryFilter.field);return en.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=ca(t.unaryFilter.field);return en.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ca(t.unaryFilter.field);return en.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ca(t.unaryFilter.field);return en.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Je()}}(n):n.fieldFilter!==void 0?function(t){return en.create(ca(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Je()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return xs.create(t.compositeFilter.filters.map(s=>Cw(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Je()}}(t.compositeFilter.op))}(n):Je()}function ca(n){return cn.fromServerFormat(n.fieldPath)}function Ik(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sk(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e){this.ct=e}}function Ak(n){const e=Tk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zf(e,e.limit,"L"):e}/**
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
 */class Pk{constructor(){this.un=new Ck}addToCollectionParentIndex(e,t){return this.un.add(t),ie.resolve()}getCollectionParents(e,t){return ie.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return ie.resolve()}deleteFieldIndex(e,t){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,t){return ie.resolve()}getDocumentsMatchingTarget(e,t){return ie.resolve(null)}getIndexType(e,t){return ie.resolve(0)}getFieldIndexes(e,t){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,t){return ie.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,t){return ie.resolve(ks.min())}updateCollectionGroup(e,t,s){return ie.resolve()}updateIndexEntries(e,t){return ie.resolve()}}class Ck{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Tn(Nt.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Tn(Nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Pa(0)}static kn(){return new Pa(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.changes=new La(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ie.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&kl(s.mutation,o,ir.empty(),tn.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,wn()).next(()=>s))}getLocalViewOfDocuments(e,t,s=wn()){const o=ho();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=mc();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ho();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,wn()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=th();const h=Cl(),f=function(){return Cl()}();return t.forEach((p,y)=>{const w=s.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof bs)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),kl(w.mutation,y,w.mutation.getFieldMask(),tn.now())):h.set(y.key,ir.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var T;return f.set(y,new xk(w,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Cl();let o=new Hn((h,f)=>h-f),l=wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=s.get(p)||ir.empty();w=f.applyToLocalView(y,w),s.set(p,w);const T=(o.get(f.batchId)||wn()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,w=p.value,T=vw();w.forEach(R=>{if(!l.has(R)){const N=Sw(t.get(R),s.get(R));N!==null&&T.set(R,N),l=l.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return ie.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return je.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):KC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):ie.resolve(ho());let f=-1,p=l;return h.next(y=>ie.forEach(y,(w,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(w)?ie.resolve():this.remoteDocumentCache.getEntry(e,w).next(R=>{p=p.insert(w,R)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,wn())).next(w=>({batchId:f,changes:yw(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new je(t)).next(s=>{let o=mc();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=mc();return this.indexManager.getCollectionParents(e,l).next(f=>ie.forEach(f,p=>{const y=function(T,R){return new Ih(R,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(w=>{w.forEach((T,R)=>{h=h.insert(T,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Mr.newInvalidDocument(w)))});let f=mc();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&kl(w.mutation,y,ir.empty(),tn.now()),Fp(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return ie.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ma(o.createTime)}}(t)),ie.resolve()}getNamedQuery(e,t){return ie.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(o){return{name:o.name,query:Ak(o.bundledQuery),readTime:ma(o.readTime)}}(t)),ie.resolve()}}/**
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
 */class Ok{constructor(){this.overlays=new Hn(je.comparator),this.Ir=new Map}getOverlay(e,t){return ie.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ho();return ie.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.ht(e,t,l)}),ie.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Ir.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Ir.delete(s)),ie.resolve()}getOverlaysForCollection(e,t,s){const o=ho(),l=t.length+1,h=new je(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return ie.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new Hn((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let w=l.get(y.largestBatchId);w===null&&(w=ho(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const f=ho(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>f.set(y,w)),!(f.size()>=o)););return ie.resolve(f)}ht(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Ir.get(o.largestBatchId).delete(s.key);this.Ir.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new ck(t,s));let l=this.Ir.get(t);l===void 0&&(l=wn(),this.Ir.set(t,l)),this.Ir.set(t,l.add(s.key))}}/**
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
 */class bk{constructor(){this.sessionToken=ui.EMPTY_BYTE_STRING}getSessionToken(e){return ie.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ie.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.Tr=new Tn(Jt.Er),this.dr=new Tn(Jt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const s=new Jt(e,t);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Vr(new Jt(e,t))}mr(e,t){e.forEach(s=>this.removeReference(s,t))}gr(e){const t=new je(new Nt([])),s=new Jt(t,e),o=new Jt(t,e+1),l=[];return this.dr.forEachInRange([s,o],h=>{this.Vr(h),l.push(h.key)}),l}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new je(new Nt([])),s=new Jt(t,e),o=new Jt(t,e+1);let l=wn();return this.dr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Jt(e,0),s=this.Tr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Jt{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return je.comparator(e.key,t.key)||dt(e.wr,t.wr)}static Ar(e,t){return dt(e.wr,t.wr)||je.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Tn(Jt.Er)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new uk(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.br=this.br.add(new Jt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ie.resolve(h)}lookupMutationBatch(e,t){return ie.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.vr(s),l=o<0?0:o;return ie.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Jt(t,0),o=new Jt(t,Number.POSITIVE_INFINITY),l=[];return this.br.forEachInRange([s,o],h=>{const f=this.Dr(h.wr);l.push(f)}),ie.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tn(dt);return t.forEach(o=>{const l=new Jt(o,0),h=new Jt(o,Number.POSITIVE_INFINITY);this.br.forEachInRange([l,h],f=>{s=s.add(f.wr)})}),ie.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;je.isDocumentKey(l)||(l=l.child(""));const h=new Jt(new je(l),0);let f=new Tn(dt);return this.br.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.wr)),!0)},h),ie.resolve(this.Cr(f))}Cr(e){const t=[];return e.forEach(s=>{const o=this.Dr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Lt(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return ie.forEach(t.mutations,o=>{const l=new Jt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,t){const s=new Jt(t,0),o=this.br.firstAfterOrEqual(s);return ie.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.Mr=e,this.docs=function(){return new Hn(je.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Mr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ie.resolve(s?s.document.mutableCopy():Mr.newInvalidDocument(t))}getEntries(e,t){let s=th();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Mr.newInvalidDocument(o))}),ie.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=th();const h=t.path,f=new je(h.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||SC(IC(w),s)<=0||(o.has(w.key)||Fp(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return ie.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Je()}Or(e,t){return ie.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Vk(this)}getSize(e){return ie.resolve(this.size)}}class Vk extends kk{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.cr.addEntry(e,o)):this.cr.removeEntry(s)}),ie.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.persistence=e,this.Nr=new La(t=>Vp(t),Up),this.lastRemoteSnapshotVersion=Pt.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zp,this.targetCount=0,this.kr=Pa.Bn()}forEachTarget(e,t){return this.Nr.forEach((s,o)=>t(o)),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Lr&&(this.Lr=t),ie.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new Pa(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,ie.resolve()}updateTargetData(e,t){return this.Kn(t),ie.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Nr.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Nr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),ie.waitFor(l).next(()=>o)}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,t){const s=this.Nr.get(t)||null;return ie.resolve(s)}addMatchingKeys(e,t,s){return this.Br.Rr(t,s),ie.resolve()}removeMatchingKeys(e,t,s){this.Br.mr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),ie.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),ie.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Br.yr(t);return ie.resolve(s)}containsKey(e,t){return ie.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(e,t){this.qr={},this.overlays={},this.Qr=new iw(0),this.Kr=!1,this.Kr=!0,this.$r=new bk,this.referenceDelegate=e(this),this.Ur=new Uk(this),this.indexManager=new Pk,this.remoteDocumentCache=function(o){return new Mk(o)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new Rk(t),this.Gr=new Dk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ok,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.qr[e.toKey()];return s||(s=new Lk(t,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,s){Ae("MemoryPersistence","Starting transaction:",e);const o=new jk(this.Qr.next());return this.referenceDelegate.zr(),s(o).next(l=>this.referenceDelegate.jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Hr(e,t){return ie.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,t)))}}class jk extends AC{constructor(e){super(),this.currentSequenceNumber=e}}class $p{constructor(e){this.persistence=e,this.Jr=new zp,this.Yr=null}static Zr(e){return new $p(e)}get Xr(){if(this.Yr)return this.Yr;throw Je()}addReference(e,t,s){return this.Jr.addReference(s,t),this.Xr.delete(s.toString()),ie.resolve()}removeReference(e,t,s){return this.Jr.removeReference(s,t),this.Xr.add(s.toString()),ie.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),ie.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(o=>this.Xr.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.Xr.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.Xr,s=>{const o=je.fromPath(s);return this.ei(e,o).next(l=>{l||t.removeEntry(o,Pt.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(s=>{s?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return ie.or([()=>ie.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.$i=s,this.Ui=o}static Wi(e,t){let s=wn(),o=wn();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Hp(e,t.fromCache,s,o)}}/**
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
 */class Bk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return D1()?8:PC(In())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Yi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.Zi(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new Bk;return this.Xi(e,t,h).next(f=>{if(l.result=f,this.zi)return this.es(e,t,h,f.size)})}).next(()=>l.result)}es(e,t,s,o){return s.documentReadCount<this.ji?(gl()<=Xe.DEBUG&&Ae("QueryEngine","SDK will not create cache indexes for query:",yl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),ie.resolve()):(gl()<=Xe.DEBUG&&Ae("QueryEngine","Query:",yl(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Hi*o?(gl()<=Xe.DEBUG&&Ae("QueryEngine","The SDK decides to create cache indexes for query:",yl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,go(t))):ie.resolve())}Yi(e,t){if(Fv(t))return ie.resolve(null);let s=go(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Zf(t,null,"F"),s=go(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=wn(...l);return this.Ji.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.ts(t,f);return this.ns(t,y,h,p.readTime)?this.Yi(e,Zf(t,null,"F")):this.rs(e,y,t,p)}))})))}Zi(e,t,s,o){return Fv(t)||o.isEqual(Pt.min())?ie.resolve(null):this.Ji.getDocuments(e,s).next(l=>{const h=this.ts(t,l);return this.ns(t,h,s,o)?ie.resolve(null):(gl()<=Xe.DEBUG&&Ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),yl(t)),this.rs(e,h,t,TC(o,-1)).next(f=>f))})}ts(e,t){let s=new Tn(GC(e));return t.forEach((o,l)=>{Fp(e,l)&&(s=s.add(l))}),s}ns(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}Xi(e,t,s){return gl()<=Xe.DEBUG&&Ae("QueryEngine","Using full collection scan to execute query:",yl(t)),this.Ji.getDocumentsMatchingQuery(e,t,ks.min(),s)}rs(e,t,s,o){return this.Ji.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,t,s,o){this.persistence=e,this.ss=t,this.serializer=o,this.os=new Hn(dt),this._s=new La(l=>Vp(l),Up),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Nk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Hk(n,e,t,s){return new $k(n,e,t,s)}async function kw(n,e){const t=pt(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.ls(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let p=wn();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){f.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(s,p).next(y=>({hs:y,removedBatchIds:h,addedBatchIds:f}))})})}function Wk(n,e){const t=pt(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.cs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,w){const T=y.batch,R=T.keys();let N=ie.resolve();return R.forEach(V=>{N=N.next(()=>w.getEntry(p,V)).next(z=>{const F=y.docVersions.get(V);Lt(F!==null),z.version.compareTo(F)<0&&(T.applyToRemoteDocument(z,y),z.isValidDocument()&&(z.setReadTime(y.commitVersion),w.addEntry(z)))})}),N.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=wn();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Kk(n){const e=pt(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function qk(n,e){const t=pt(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Wv{constructor(){this.activeTargetIds=ek()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gk{constructor(){this.so=new Wv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,s){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Wv,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Qk{_o(e){}shutdown(){}}/**
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
 */class Kv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let gc=null;function If(){return gc===null?gc=function(){return 268435456+Math.round(2147483648*Math.random())}():gc++,"0x"+gc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="WebChannelConnection";class Jk extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+t.host,this.vo=`projects/${o}/databases/${l}`,this.Co=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}get Fo(){return!1}Mo(t,s,o,l,h){const f=If(),p=this.xo(t,s.toUriEncodedString());Ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(y,l,h),this.No(t,p,y,o).then(w=>(Ae("RestConnection",`Received RPC '${t}' ${f}: `,w),w),w=>{throw Qc("RestConnection",`RPC '${t}' ${f} failed with error: `,w,"url: ",p,"request:",o),w})}Lo(t,s,o,l,h,f){return this.Mo(t,s,o,l,h)}Oo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}xo(t,s){const o=Yk[t];return`${this.Do}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,s,o){const l=If();return new Promise((h,f)=>{const p=new Y0;p.setWithCredentials(!0),p.listenOnce(X0.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case kc.NO_ERROR:const w=p.getResponseJson();Ae(vn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case kc.TIMEOUT:Ae(vn,`RPC '${e}' ${l} timed out`),f(new De(se.DEADLINE_EXCEEDED,"Request time out"));break;case kc.HTTP_ERROR:const T=p.getStatus();if(Ae(vn,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let R=p.getResponseJson();Array.isArray(R)&&(R=R[0]);const N=R==null?void 0:R.error;if(N&&N.status&&N.message){const V=function(F){const X=F.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(X)>=0?X:se.UNKNOWN}(N.status);f(new De(V,N.message))}else f(new De(se.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new De(se.UNAVAILABLE,"Connection failed."));break;default:Je()}}finally{Ae(vn,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);Ae(vn,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,s,15)})}Bo(e,t,s){const o=If(),l=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ew(),f=Z0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Oo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const w=l.join("");Ae(vn,`Creating RPC '${e}' stream ${o}: ${w}`,p);const T=h.createWebChannel(w,p);let R=!1,N=!1;const V=new Xk({Io:F=>{N?Ae(vn,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(R||(Ae(vn,`Opening RPC '${e}' stream ${o} transport.`),T.open(),R=!0),Ae(vn,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},To:()=>T.close()}),z=(F,X,G)=>{F.listen(X,Z=>{try{G(Z)}catch(ne){setTimeout(()=>{throw ne},0)}})};return z(T,Il.EventType.OPEN,()=>{N||(Ae(vn,`RPC '${e}' stream ${o} transport opened.`),V.yo())}),z(T,Il.EventType.CLOSE,()=>{N||(N=!0,Ae(vn,`RPC '${e}' stream ${o} transport closed`),V.So())}),z(T,Il.EventType.ERROR,F=>{N||(N=!0,Qc(vn,`RPC '${e}' stream ${o} transport errored:`,F),V.So(new De(se.UNAVAILABLE,"The operation could not be completed")))}),z(T,Il.EventType.MESSAGE,F=>{var X;if(!N){const G=F.data[0];Lt(!!G);const Z=G,ne=Z.error||((X=Z[0])===null||X===void 0?void 0:X.error);if(ne){Ae(vn,`RPC '${e}' stream ${o} received error:`,ne);const de=ne.status;let ce=function(A){const k=jt[A];if(k!==void 0)return dk(k)}(de),E=ne.message;ce===void 0&&(ce=se.INTERNAL,E="Unknown error status: "+de+" with message "+ne.message),N=!0,V.So(new De(ce,E)),T.close()}else Ae(vn,`RPC '${e}' stream ${o} received:`,G),V.bo(G)}}),z(f,J0.STAT_EVENT,F=>{F.stat===Qf.PROXY?Ae(vn,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===Qf.NOPROXY&&Ae(vn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Sf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n){return new fk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,s=1e3,o=1.5,l=6e4){this.ui=e,this.timerId=t,this.ko=s,this.qo=o,this.Qo=l,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),o=Math.max(0,t-s);o>0&&Ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,o,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,t,s,o,l,h,f,p){this.ui=e,this.Ho=s,this.Jo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xw(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===se.RESOURCE_EXHAUSTED?(Io(t.toString()),Io("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Yo===t&&this.P_(s,o)},s=>{e(()=>{const o=new De(se.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(o)})})}P_(e,t){const s=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(o=>{s(()=>this.I_(o))}),this.stream.onMessage(o=>{s(()=>++this.e_==1?this.E_(o):this.onNext(o))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(Ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ex extends Zk{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Lt(!!e.streamToken),this.lastStreamToken=e.streamToken,Lt(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Lt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=Ek(e.writeResults,e.commitTime),s=ma(e.commitTime);return this.listener.g_(s,t)}p_(){const e={};e.database=vk(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>wk(this.serializer,s))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.y_=!1}w_(){if(this.y_)throw new De(se.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Mo(e,tp(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new De(se.UNKNOWN,l.toString())})}Lo(e,t,s,o,l){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Lo(e,tp(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new De(se.UNKNOWN,h.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class nx{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Io(t),this.D_=!1):Ae("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=l,this.k_._o(h=>{s.enqueueAndForget(async()=>{eu(this)&&(Ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=pt(p);y.L_.add(4),await Zl(y),y.q_.set("Unknown"),y.L_.delete(4),await Ph(y)}(this))})}),this.q_=new nx(s,o)}}async function Ph(n){if(eu(n))for(const e of n.B_)await e(!0)}async function Zl(n){for(const e of n.B_)await e(!1)}function eu(n){return pt(n).L_.size===0}async function Nw(n,e,t){if(!Th(e))throw e;n.L_.add(1),await Zl(n),n.q_.set("Offline"),t||(t=()=>Kk(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Ae("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ph(n)})}function Dw(n,e){return e().catch(t=>Nw(n,t,e))}async function Ch(n){const e=pt(n),t=Ns(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ix(e);)try{const o=await qk(e.localStore,s);if(o===null){e.O_.length===0&&t.o_();break}s=o.batchId,sx(e,o)}catch(o){await Nw(e,o)}Ow(e)&&bw(e)}function ix(n){return eu(n)&&n.O_.length<10}function sx(n,e){n.O_.push(e);const t=Ns(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Ow(n){return eu(n)&&!Ns(n).n_()&&n.O_.length>0}function bw(n){Ns(n).start()}async function ox(n){Ns(n).p_()}async function ax(n){const e=Ns(n);for(const t of n.O_)e.m_(t.mutations)}async function lx(n,e,t){const s=n.O_.shift(),o=Bp.from(s,e,t);await Dw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Ch(n)}async function ux(n,e){e&&Ns(n).V_&&await async function(s,o){if(function(h){return hk(h)&&h!==se.ABORTED}(o.code)){const l=s.O_.shift();Ns(s).s_(),await Dw(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Ch(s)}}(n,e),Ow(n)&&bw(n)}async function qv(n,e){const t=pt(n);t.asyncQueue.verifyOperationInProgress(),Ae("RemoteStore","RemoteStore received new credentials");const s=eu(t);t.L_.add(3),await Zl(t),s&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ph(t)}async function cx(n,e){const t=pt(n);e?(t.L_.delete(2),await Ph(t)):e||(t.L_.add(2),await Zl(t),t.q_.set("Unknown"))}function Ns(n){return n.U_||(n.U_=function(t,s,o){const l=pt(t);return l.w_(),new ex(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ox.bind(null,n),mo:ux.bind(null,n),f_:ax.bind(null,n),g_:lx.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ch(n)):(await n.U_.stop(),n.O_.length>0&&(Ae("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new mo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Wp(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new De(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lw(n,e){if(Io("AsyncQueue",`${e}: ${n}`),Th(n))return new De(se.UNAVAILABLE,`${e}: ${n}`);throw n}class hx{constructor(){this.queries=Gv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,s){const o=pt(t),l=o.queries;o.queries=Gv(),l.forEach((h,f)=>{for(const p of f.j_)p.onError(s)})})(this,new De(se.ABORTED,"Firestore shutting down"))}}function Gv(){return new La(n=>mw(n),pw)}function dx(n){n.Y_.forEach(e=>{e.next()})}var Qv,Yv;(Yv=Qv||(Qv={})).ea="default",Yv.Cache="cache";class fx{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ca={},this.Fa=new La(f=>mw(f),pw),this.Ma=new Map,this.xa=new Set,this.Oa=new Hn(je.comparator),this.Na=new Map,this.La=new zp,this.Ba={},this.ka=new Map,this.qa=Pa.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function px(n,e,t){const s=vx(n);try{const o=await function(h,f){const p=pt(h),y=tn.now(),w=f.reduce((N,V)=>N.add(V.key),wn());let T,R;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let V=th(),z=wn();return p.cs.getEntries(N,w).next(F=>{V=F,V.forEach((X,G)=>{G.isValidDocument()||(z=z.add(X))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,V)).next(F=>{T=F;const X=[];for(const G of f){const Z=ak(G,T.get(G.key).overlayedDocument);Z!=null&&X.push(new bs(G.key,Z,aw(Z.value.mapValue),ai.exists(!0)))}return p.mutationQueue.addMutationBatch(N,y,X,f)}).next(F=>{R=F;const X=F.applyToLocalDocumentSet(T,z);return p.documentOverlayCache.saveOverlays(N,F.batchId,X)})}).then(()=>({batchId:R.batchId,changes:yw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.Ba[h.currentUser.toKey()];y||(y=new Hn(dt)),y=y.insert(f,p),h.Ba[h.currentUser.toKey()]=y}(s,o.batchId,t),await kh(s,o.changes),await Ch(s.remoteStore)}catch(o){const l=Lw(o,"Failed to persist write");t.reject(l)}}function Xv(n,e,t){const s=pt(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.Fa.forEach((l,h)=>{const f=h.view.Z_(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=pt(h);p.onlineState=f;let y=!1;p.queries.forEach((w,T)=>{for(const R of T.j_)R.Z_(f)&&(y=!0)}),y&&dx(p)}(s.eventManager,e),o.length&&s.Ca.d_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function mx(n,e){const t=pt(n),s=e.batch.batchId;try{const o=await Wk(t.localStore,e);Vw(t,s,null),Mw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await kh(t,o)}catch(o){await rw(o)}}async function gx(n,e,t){const s=pt(n);try{const o=await function(h,f){const p=pt(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Lt(T!==null),w=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(s.localStore,e);Vw(s,e,t),Mw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await kh(s,o)}catch(o){await rw(o)}}function Mw(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Vw(n,e,t){const s=pt(n);let o=s.Ba[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.Ba[s.currentUser.toKey()]=o}}async function kh(n,e,t){const s=pt(n),o=[],l=[],h=[];s.Fa.isEmpty()||(s.Fa.forEach((f,p)=>{h.push(s.Ka(p,e,t).then(y=>{var w;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(w=void 0)===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Hp.Wi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),s.Ca.d_(o),await async function(p,y){const w=pt(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>ie.forEach(y,R=>ie.forEach(R.$i,N=>w.persistence.referenceDelegate.addReference(T,R.targetId,N)).next(()=>ie.forEach(R.Ui,N=>w.persistence.referenceDelegate.removeReference(T,R.targetId,N)))))}catch(T){if(!Th(T))throw T;Ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const R=T.targetId;if(!T.fromCache){const N=w.os.get(R),V=N.snapshotVersion,z=N.withLastLimboFreeSnapshotVersion(V);w.os=w.os.insert(R,z)}}}(s.localStore,l))}async function yx(n,e){const t=pt(n);if(!t.currentUser.isEqual(e)){Ae("SyncEngine","User change. New user:",e.toKey());const s=await kw(t.localStore,e);t.currentUser=e,function(l,h){l.ka.forEach(f=>{f.forEach(p=>{p.reject(new De(se.CANCELLED,h))})}),l.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await kh(t,s.hs)}}function vx(n){const e=pt(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gx.bind(null,e),e}class ih{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Hk(this.persistence,new zk,e.initialUser,this.serializer)}Ga(e){return new Fk($p.Zr,this.serializer)}Wa(e){return new Gk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ih.provider={build:()=>new ih};class rp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yx.bind(null,this.syncEngine),await cx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hx}()}createDatastore(e){const t=Ah(e.databaseInfo.databaseId),s=function(l){return new Jk(l)}(e.databaseInfo);return function(l,h,f,p){return new tx(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new rx(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Xv(this.syncEngine,t,0),function(){return Kv.D()?new Kv:new Qk}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,w){const T=new fx(o,l,h,f,p,y);return w&&(T.Qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=pt(o);Ae("RemoteStore","RemoteStore shutting down."),l.L_.add(5),await Zl(l),l.k_.shutdown(),l.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}rp.provider={build:()=>new rp};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=_n.UNAUTHENTICATED,this.clientId=nw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{Ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(Ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Lw(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Rf(n,e){n.asyncQueue.verifyOperationInProgress(),Ae("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await kw(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Jv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await wx(n);Ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>qv(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>qv(e.remoteStore,o)),n._onlineComponents=e}async function wx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===se.FAILED_PRECONDITION||o.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Qc("Error using user provided cache. Falling back to memory cache: "+t),await Rf(n,new ih)}}else Ae("FirestoreClient","Using default OfflineComponentProvider"),await Rf(n,new ih);return n._offlineComponents}async function Ex(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Ae("FirestoreClient","Using user provided OnlineComponentProvider"),await Jv(n,n._uninitializedComponentsProvider._online)):(Ae("FirestoreClient","Using default OnlineComponentProvider"),await Jv(n,new rp))),n._onlineComponents}function Tx(n){return Ex(n).then(e=>e.syncEngine)}/**
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
 */function Uw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(n,e,t){if(!t)throw new De(se.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ix(n,e,t,s){if(e===!0&&s===!0)throw new De(se.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function e_(n){if(!je.isDocumentKey(n))throw new De(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function t_(n){if(je.isDocumentKey(n))throw new De(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Kp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Je()}function sh(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new De(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kp(n);throw new De(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new De(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new De(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ix("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new De(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new De(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new De(se.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xh{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new De(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new De(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new fC;switch(s.type){case"firstParty":return new yC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new De(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Zv.get(t);s&&(Ae("ComponentProvider","Removing Datastore"),Zv.delete(t),s.terminate())}(this),Promise.resolve()}}function Sx(n,e,t,s={}){var o;const l=(n=sh(n,xh))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Qc("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=_n.MOCK_USER;else{f=u0(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new De(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new _n(y)}n._authCredentials=new pC(new tw(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new qp(this.firestore,e,this._query)}}class li{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new li(this.firestore,e,this._key)}}class Ps extends qp{constructor(e,t,s){super(e,t,WC(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new li(this.firestore,null,new je(e))}withConverter(e){return new Ps(this.firestore,e,this._path)}}function Rx(n,e,...t){if(n=$t(n),Fw("collection","path",e),n instanceof xh){const s=Nt.fromString(e,...t);return t_(s),new Ps(n,null,s)}{if(!(n instanceof li||n instanceof Ps))throw new De(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(e,...t));return t_(s),new Ps(n.firestore,null,s)}}function Ax(n,e,...t){if(n=$t(n),arguments.length===1&&(e=nw.newId()),Fw("doc","path",e),n instanceof xh){const s=Nt.fromString(e,...t);return e_(s),new li(n,null,new je(s))}{if(!(n instanceof li||n instanceof Ps))throw new De(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Nt.fromString(e,...t));return e_(s),new li(n.firestore,n instanceof Ps?n.converter:null,new je(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xw(this,"async_queue_retry"),this.Vu=()=>{const s=Sf();s&&Ae("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const t=Sf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Sf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new mo;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Th(e))throw e;Ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Io("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.du=!1,s))));return this.mu=t,t}enqueueAfterDelay(e,t,s){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const o=Wp.createAndSchedule(this,e,t,s,l=>this.yu(l));return this.Tu.push(o),o}fu(){this.Eu&&Je()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Gp extends xh{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new r_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r_(e),this._firestoreClient=void 0,await e}}}function Px(n,e){const t=typeof n=="object"?n:Ep(),s=typeof n=="string"?n:"(default)",o=vh(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=o0("firestore");l&&Sx(o,...l)}return o}function Cx(n){if(n._terminated)throw new De(se.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kx(n),n._firestoreClient}function kx(n){var e,t,s;const o=n._freezeSettings(),l=function(f,p,y,w){return new NC(f,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Uw(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new _x(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $l(ui.fromBase64String(e))}catch(t){throw new De(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $l(ui.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new De(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new cn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new De(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new De(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return dt(this._lat,e._lat)||dt(this._long,e._long)}}/**
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
 */class Bw{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xx=/^__.*__$/;class Nx{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new bs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jl(e,this.data,t,this.fieldTransforms)}}class zw{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new bs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $w(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Je()}}class Xp{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.vu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.Ou(e),o}Nu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Fu({path:s,xu:!1});return o.vu(),o}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return oh(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if($w(this.Cu)&&xx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Dx{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Ah(e)}Qu(e,t,s,o=!1){return new Xp({Cu:e,methodName:t,qu:s,path:cn.emptyPath(),xu:!1,ku:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hw(n){const e=n._freezeSettings(),t=Ah(n._databaseId);return new Dx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ox(n,e,t,s,o,l={}){const h=n.Qu(l.merge||l.mergeFields?2:0,e,t,o);Jp("Data must be an object, but it was:",h,s);const f=Ww(s,h);let p,y;if(l.merge)p=new ir(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const T of l.mergeFields){const R=ip(e,T,t);if(!h.contains(R))throw new De(se.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Gw(w,R)||w.push(R)}p=new ir(w),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new Nx(new rr(f),p,y)}class Nh extends Yp{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nh}}function bx(n,e,t,s){const o=n.Qu(1,e,t);Jp("Data must be an object, but it was:",o,s);const l=[],h=rr.empty();ba(s,(p,y)=>{const w=qw(e,p,t);y=$t(y);const T=o.Nu(w);if(y instanceof Nh)l.push(w);else{const R=Dh(y,T);R!=null&&(l.push(w),h.set(w,R))}});const f=new ir(l);return new zw(h,f,o.fieldTransforms)}function Lx(n,e,t,s,o,l){const h=n.Qu(1,e,t),f=[ip(e,s,t)],p=[o];if(l.length%2!=0)throw new De(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<l.length;R+=2)f.push(ip(e,l[R])),p.push(l[R+1]);const y=[],w=rr.empty();for(let R=f.length-1;R>=0;--R)if(!Gw(y,f[R])){const N=f[R];let V=p[R];V=$t(V);const z=h.Nu(N);if(V instanceof Nh)y.push(N);else{const F=Dh(V,z);F!=null&&(y.push(N),w.set(N,F))}}const T=new ir(y);return new zw(w,T,h.fieldTransforms)}function Dh(n,e){if(Kw(n=$t(n)))return Jp("Unsupported field value:",e,n),Ww(n,e);if(n instanceof Yp)return function(s,o){if(!$w(o.Cu))throw o.Bu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Bu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let p=Dh(f,o.Lu(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(s,o){if((s=$t(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return tk(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=tn.fromDate(s);return{timestampValue:ep(o.serializer,l)}}if(s instanceof tn){const l=new tn(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ep(o.serializer,l)}}if(s instanceof jw)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $l)return{bytesValue:pk(o.serializer,s._byteString)};if(s instanceof li){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.Bu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Pw(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Bw)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.Bu("VectorValues must only contain numeric values.");return jp(f.serializer,p)})}}}}}}(s,o);throw o.Bu(`Unsupported field value: ${Kp(s)}`)}(n,e)}function Ww(n,e){const t={};return sw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ba(n,(s,o)=>{const l=Dh(o,e.Mu(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Kw(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tn||n instanceof jw||n instanceof $l||n instanceof li||n instanceof Yp||n instanceof Bw)}function Jp(n,e,t){if(!Kw(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Kp(t);throw s==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+s)}}function ip(n,e,t){if((e=$t(e))instanceof Qp)return e._internalPath;if(typeof e=="string")return qw(n,e);throw oh("Field path arguments must be of type string or ",n,!1,void 0,t)}const Mx=new RegExp("[~\\*/\\[\\]]");function qw(n,e,t){if(e.search(Mx)>=0)throw oh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qp(...e.split("."))._internalPath}catch{throw oh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function oh(n,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new De(se.INVALID_ARGUMENT,f+n+p)}function Gw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(n,e,t){let s;return s=n?n.toFirestore(e):e,s}function Ux(n,e,t,...s){n=sh(n,li);const o=sh(n.firestore,Gp),l=Hw(o);let h;return h=typeof(e=$t(e))=="string"||e instanceof Qp?Lx(l,"updateDoc",n._key,e,t,s):bx(l,"updateDoc",n._key,e),Qw(o,[h.toMutation(n._key,ai.exists(!0))])}function Fx(n,e){const t=sh(n.firestore,Gp),s=Ax(n),o=Vx(n.converter,e);return Qw(t,[Ox(Hw(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,ai.exists(!1))]).then(()=>s)}function Qw(n,e){return function(s,o){const l=new mo;return s.asyncQueue.enqueueAndForget(async()=>px(await Tx(s),o,l)),l.promise}(Cx(n),e)}(function(e,t=!0){(function(o){Oa=o})(Ao),_o(new Cs("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Gp(new mC(s.getProvider("auth-internal")),new _C(s.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new De(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jc(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),si(Nv,"4.7.3",e),si(Nv,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebasestorage.googleapis.com",Xw="storageBucket",jx=2*60*1e3,Bx=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends $n{constructor(e,t,s=0){super(Af(e),`Firebase Storage: ${t} (${Af(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ot.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dt||(Dt={}));function Af(n){return"storage/"+n}function Zp(){const n="An unknown error occurred, please check the error payload for server response.";return new Ot(Dt.UNKNOWN,n)}function zx(n){return new Ot(Dt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function $x(n){return new Ot(Dt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hx(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ot(Dt.UNAUTHENTICATED,n)}function Wx(){return new Ot(Dt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Kx(n){return new Ot(Dt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function qx(){return new Ot(Dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Gx(){return new Ot(Dt.CANCELED,"User canceled the upload/download.")}function Qx(n){return new Ot(Dt.INVALID_URL,"Invalid URL '"+n+"'.")}function Yx(n){return new Ot(Dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Xx(){return new Ot(Dt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Xw+"' property when initializing the app?")}function Jx(){return new Ot(Dt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Zx(){return new Ot(Dt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function eN(n){return new Ot(Dt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sp(n){return new Ot(Dt.INVALID_ARGUMENT,n)}function Jw(){return new Ot(Dt.APP_DELETED,"The Firebase app was deleted.")}function tN(n){return new Ot(Dt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function xl(n,e){return new Ot(Dt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function vl(n){throw new Ot(Dt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=sr.makeFromUrl(e,t)}catch{return new sr(e,"")}if(s.path==="")return s;throw Yx(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),p={bucket:1,path:3};function y(ne){ne.path_=decodeURIComponent(ne.path)}const w="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",N=new RegExp(`^https?://${T}/${w}/b/${o}/o${R}`,"i"),V={bucket:1,path:3},z=t===Yw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",X=new RegExp(`^https?://${z}/${o}/${F}`,"i"),Z=[{regex:f,indices:p,postModify:l},{regex:N,indices:V,postModify:y},{regex:X,indices:{bucket:1,path:2},postModify:y}];for(let ne=0;ne<Z.length;ne++){const de=Z[ne],ce=de.regex.exec(e);if(ce){const E=ce[de.indices.bucket];let S=ce[de.indices.path];S||(S=""),s=new sr(E,S),de.postModify(s);break}}if(s==null)throw Qx(e);return s}}class nN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(n,e,t){let s=1,o=null,l=null,h=!1,f=0;function p(){return f===2}let y=!1;function w(...F){y||(y=!0,e.apply(null,F))}function T(F){o=setTimeout(()=>{o=null,n(N,p())},F)}function R(){l&&clearTimeout(l)}function N(F,...X){if(y){R();return}if(F){R(),w.call(null,F,...X);return}if(p()||h){R(),w.call(null,F,...X);return}s<64&&(s*=2);let Z;f===1?(f=2,Z=0):Z=(s+Math.random())*1e3,T(Z)}let V=!1;function z(F){V||(V=!0,R(),!y&&(o!==null?(F||(f=2),clearTimeout(o),T(0)):F||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,z(!0)},t),z}function iN(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(n){return n!==void 0}function oN(n){return typeof n=="object"&&!Array.isArray(n)}function em(n){return typeof n=="string"||n instanceof String}function i_(n){return tm()&&n instanceof Blob}function tm(){return typeof Blob<"u"}function s_(n,e,t,s){if(s<e)throw sp(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw sp(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function Zw(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}var yo;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(yo||(yo={}));/**
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
 */function aN(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,t,s,o,l,h,f,p,y,w,T,R=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=w,this.connectionFactory_=T,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,V)=>{this.resolve_=N,this.reject_=V,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new yc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const p=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===yo.NO_ERROR,p=l.getStatus();if(!f||aN(p,this.additionalRetryCodes_)&&this.retry){const w=l.getErrorCode()===yo.ABORT;s(!1,new yc(!1,null,w));return}const y=this.successCodes_.indexOf(p)!==-1;s(!0,new yc(y,l))})},t=(s,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());sN(p)?l(p):l()}catch(p){h(p)}else if(f!==null){const p=Zp();p.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,p)):h(p)}else if(o.canceled){const p=this.appDelete_?Jw():Gx();h(p)}else{const p=qx();h(p)}};this.canceled_?t(!1,new yc(!1,null,!0)):this.backoffId_=rN(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yc{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function uN(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function cN(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hN(n,e){e&&(n["X-Firebase-GMPID"]=e)}function dN(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function fN(n,e,t,s,o,l,h=!0){const f=Zw(n.urlParams),p=n.url+f,y=Object.assign({},n.headers);return hN(y,e),uN(y,t),cN(y,l),dN(y,s),new lN(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function mN(...n){const e=pN();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(tm())return new Blob(n);throw new Ot(Dt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function gN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function yN(n){if(typeof atob>"u")throw eN("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pf{constructor(e,t){this.data=e,this.contentType=t||null}}function vN(n,e){switch(n){case ii.RAW:return new Pf(eE(e));case ii.BASE64:case ii.BASE64URL:return new Pf(tE(n,e));case ii.DATA_URL:return new Pf(wN(e),EN(e))}throw Zp()}function eE(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,h=n.charCodeAt(++t);s=65536|(l&1023)<<10|h&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _N(n){let e;try{e=decodeURIComponent(n)}catch{throw xl(ii.DATA_URL,"Malformed data URL.")}return eE(e)}function tE(n,e){switch(n){case ii.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw xl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case ii.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw xl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=yN(e)}catch(o){throw o.message.includes("polyfill")?o:xl(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class nE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw xl(ii.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=TN(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wN(n){const e=new nE(n);return e.base64?tE(ii.BASE64,e.rest):_N(e.rest)}function EN(n){return new nE(n).contentType}function TN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t){let s=0,o="";i_(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(i_(this.data_)){const s=this.data_,o=gN(s,e,t);return o===null?null:new Ts(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Ts(s,!0)}}static getBlob(...e){if(tm()){const t=e.map(s=>s instanceof Ts?s.data_:s);return new Ts(mN.apply(null,t))}else{const t=e.map(h=>em(h)?vN(ii.RAW,h).data:h.data_);let s=0;t.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new Ts(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n){let e;try{e=JSON.parse(n)}catch{return null}return oN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function SN(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function iE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(n,e){return e}class kn{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||RN}}let vc=null;function AN(n){return!em(n)||n.length<2?n:iE(n)}function sE(){if(vc)return vc;const n=[];n.push(new kn("bucket")),n.push(new kn("generation")),n.push(new kn("metageneration")),n.push(new kn("name","fullPath",!0));function e(l,h){return AN(h)}const t=new kn("name");t.xform=e,n.push(t);function s(l,h){return h!==void 0?Number(h):h}const o=new kn("size");return o.xform=s,n.push(o),n.push(new kn("timeCreated")),n.push(new kn("updated")),n.push(new kn("md5Hash",null,!0)),n.push(new kn("cacheControl",null,!0)),n.push(new kn("contentDisposition",null,!0)),n.push(new kn("contentEncoding",null,!0)),n.push(new kn("contentLanguage",null,!0)),n.push(new kn("contentType",null,!0)),n.push(new kn("metadata","customMetadata",!0)),vc=n,vc}function PN(n,e){function t(){const s=n.bucket,o=n.fullPath,l=new sr(s,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function CN(n,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];s[h.local]=h.xform(s,e[h.server])}return PN(s,n),s}function oE(n,e,t){const s=rE(e);return s===null?null:CN(n,s,t)}function kN(n,e,t,s){const o=rE(e);if(o===null||!em(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const w=n.bucket,T=n.fullPath,R="/b/"+h(w)+"/o/"+h(T),N=nm(R,t,s),V=Zw({alt:"media",token:y});return N+V})[0]}function xN(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class aE{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(n){if(!n)throw Zp()}function NN(n,e){function t(s,o){const l=oE(n,o,e);return lE(l!==null),l}return t}function DN(n,e){function t(s,o){const l=oE(n,o,e);return lE(l!==null),kN(l,o,n.host,n._protocol)}return t}function uE(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Wx():o=Hx():t.getStatus()===402?o=$x(n.bucket):t.getStatus()===403?o=Kx(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function ON(n){const e=uE(n);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=zx(n.path)),l.serverResponse=o.serverResponse,l}return t}function bN(n,e,t){const s=e.fullServerUrl(),o=nm(s,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new aE(o,l,DN(n,t),h);return f.errorHandler=ON(e),f}function LN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function MN(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=LN(null,e)),s}function VN(n,e,t,s,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let Z="";for(let ne=0;ne<2;ne++)Z=Z+Math.random().toString().slice(2);return Z}const p=f();h["Content-Type"]="multipart/related; boundary="+p;const y=MN(e,s,o),w=xN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+w+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,R=`\r
--`+p+"--",N=Ts.getBlob(T,s,R);if(N===null)throw Jx();const V={name:y.fullPath},z=nm(l,n.host,n._protocol),F="POST",X=n.maxUploadRetryTime,G=new aE(z,F,NN(n,t),X);return G.urlParams=V,G.headers=h,G.body=N.uploadData(),G.errorHandler=uE(e),G}class UN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=yo.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=yo.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=yo.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o){if(this.sent_)throw vl("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vl("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vl("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vl("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vl("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FN extends UN{initXhr(){this.xhr_.responseType="text"}}function cE(){return new FN}/**
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
 */class Ro{constructor(e,t){this._service=e,t instanceof sr?this._location=t:this._location=sr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ro(e,t)}get root(){const e=new sr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iE(this._location.path)}get storage(){return this._service}get parent(){const e=IN(this._location.path);if(e===null)return null;const t=new sr(this._location.bucket,e);return new Ro(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw tN(e)}}function jN(n,e,t){n._throwIfRoot("uploadBytes");const s=VN(n.storage,n._location,sE(),new Ts(e,!0),t);return n.storage.makeRequestWithTokens(s,cE).then(o=>({metadata:o,ref:n}))}function BN(n){n._throwIfRoot("getDownloadURL");const e=bN(n.storage,n._location,sE());return n.storage.makeRequestWithTokens(e,cE).then(t=>{if(t===null)throw Zx();return t})}function zN(n,e){const t=SN(n._location.path,e),s=new sr(n._location.bucket,t);return new Ro(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(n){return/^[A-Za-z]+:\/\//.test(n)}function HN(n,e){return new Ro(n,e)}function hE(n,e){if(n instanceof rm){const t=n;if(t._bucket==null)throw Xx();const s=new Ro(t,t._bucket);return e!=null?hE(s,e):s}else return e!==void 0?zN(n,e):n}function WN(n,e){if(e&&$N(e)){if(n instanceof rm)return HN(n,e);throw sp("To use ref(service, url), the first argument must be a Storage instance.")}else return hE(n,e)}function o_(n,e){const t=e==null?void 0:e[Xw];return t==null?null:sr.makeFromBucketSpec(t,n)}function KN(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=s;o&&(n._overrideAuthToken=typeof o=="string"?o:u0(o,n.app.options.projectId))}class rm{constructor(e,t,s,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=Yw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jx,this._maxUploadRetryTime=Bx,this._requests=new Set,o!=null?this._bucket=sr.makeFromBucketSpec(o,this._host):this._bucket=o_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=sr.makeFromBucketSpec(this._url,e):this._bucket=o_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ro(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new nN(Jw());{const h=fN(e,this._appId,s,o,t,this._firebaseVersion,l);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const a_="@firebase/storage",l_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="storage";function qN(n,e,t){return n=$t(n),jN(n,e,t)}function GN(n){return n=$t(n),BN(n)}function QN(n,e){return n=$t(n),WN(n,e)}function YN(n=Ep(),e){n=$t(n);const s=vh(n,dE).getImmediate({identifier:e}),o=o0("storage");return o&&XN(s,...o),s}function XN(n,e,t,s={}){KN(n,e,t,s)}function JN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new rm(t,s,o,e,Ao)}function ZN(){_o(new Cs(dE,JN,"PUBLIC").setMultipleInstances(!0)),si(a_,l_,""),si(a_,l_,"esm2017")}ZN();const eD={apiKey:"AIzaSyD3inNnBFoe9P-QiseO8ihe1bg_x4avjnE",authDomain:"hwitter-reloaded-8b74b.firebaseapp.com",projectId:"hwitter-reloaded-8b74b",storageBucket:"hwitter-reloaded-8b74b.firebasestorage.app",messagingSenderId:"11116758234",appId:"1:11116758234:web:6c92511c31914d4de0d1e3"},im=d0(eD),Vi=hC(im),tD=YN(im),nD=Px(im),rD=Mt.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 4fr;
  height: 100%;
  padding: 50px 0px;
  width: 100%;
  max-width: 860px;
`,iD=Mt.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Cf=Mt.div`
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
`;function sD(){const n=xa(),e=async()=>{confirm("Are you sure you want to log out?")&&(await Vi.signOut(),n("/login"))};return ye.jsxs(rD,{children:[ye.jsxs(iD,{children:[ye.jsx(Lc,{to:"/",children:ye.jsx(Cf,{children:ye.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:ye.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"})})})}),ye.jsx(Lc,{to:"/profile",children:ye.jsx(Cf,{children:ye.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:ye.jsx("path",{d:"M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"})})})}),ye.jsx(Cf,{onClick:e,className:"log-out",children:ye.jsxs("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:[ye.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"}),ye.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"})]})})]}),ye.jsx(QI,{})]})}const oD=Mt.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`,aD=Mt.textarea`
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
`,lD=Mt.label`
	padding: 10px 0px;
	color: #1d9bf0;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #1d9bf0;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`,uD=Mt.input`
	display: none;
`,cD=Mt.input`
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
`;function hD(){const[n,e]=Q.useState(!1),[t,s]=Q.useState(""),[o,l]=Q.useState(null),h=y=>{s(y.target.value)},f=y=>{const{files:w}=y.target;if(w&&w.length===1){const T=w[0];if(T.size>512e3){alert("Only files smaller than 500KB are allowed for upload."),y.target.value="",l(null);return}l(T)}},p=async y=>{y.preventDefault();const w=Vi.currentUser;if(!(!w||n||t===""||t.length>180))try{e(!0);const T=await Fx(Rx(nD,"tweets"),{tweet:t,createdAt:Date.now(),username:w.displayName||"Anonymous",userId:w.uid});if(o){const R=QN(tD,`tweets/${w.uid}-${w.displayName}/${T.id}`),N=await qN(R,o),V=await GN(N.ref);await Ux(T,{photo:V})}s(""),l(null)}catch(T){console.log(T)}finally{e(!1)}};return ye.jsxs(oD,{onSubmit:p,children:[ye.jsx(aD,{rows:5,maxLength:180,onChange:h,value:t,placeholder:"What is happening?!"}),ye.jsx(lD,{htmlFor:"file",children:o?"Photo added ✅":"Add photo"}),ye.jsx(uD,{onChange:f,type:"file",id:"file",accept:"image/*"}),ye.jsx(cD,{type:"submit",value:n?"Posting...":"Post Tweet"})]})}const dD=Mt.div``;function fD(){return ye.jsx(dD,{children:ye.jsx(hD,{})})}function pD(){return ye.jsx("h1",{children:"Profile"})}const fE=Mt.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`,pE=Mt.h1`
  font-size: 42px;
`,mE=Mt.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`,fo=Mt.input`
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
`,gE=Mt.span`
  font-weight: 600;
  color: tomato;
`,ah=Mt.span`
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
`,mD=Mt.span`
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
`,gD=Mt.img`
  height: 25px;
`;function yE(){const n=xa(),e=async()=>{try{const t=new ki;await wP(Vi,t),n("/")}catch(t){console.error(t)}};return ye.jsxs(mD,{onClick:e,children:[ye.jsx(gD,{src:"github-logo.svg"}),"Continue with Github"]})}function yD(){const n=xa(),[e,t]=Q.useState(!1),[s,o]=Q.useState(""),[l,h]=Q.useState(""),[f,p]=Q.useState(""),[y,w]=Q.useState(""),T=V=>{const{target:{name:z,value:F}}=V;z==="email"?o(F):z==="password"&&h(F)},R=async V=>{if(V.preventDefault(),p(""),!(e||s===""||l===""))try{t(!0),await YA(Vi,s,l),n("/")}catch(z){z instanceof $n&&p(z.message),console.log(z)}finally{t(!1)}},N=async()=>{if(p(""),w(""),!s){p("Please enter your email to reset password.");return}try{await V0(Vi,s),w("Password reset email sent")}catch(V){V instanceof $n&&p(V.message)}};return ye.jsxs(fE,{children:[ye.jsx(pE,{children:"Log into 𝕏"}),ye.jsxs(mE,{onSubmit:R,children:[ye.jsx(fo,{onChange:T,name:"email",value:s,placeholder:"Email",type:"email",required:!0}),ye.jsx(fo,{onChange:T,value:l,name:"password",placeholder:"Password",type:"password",required:!0}),ye.jsx(fo,{type:"submit",value:e?"Loading...":"Log in"})]}),f!==""?ye.jsx(gE,{children:f}):null,y&&ye.jsx("span",{style:{color:"lightgreen"},children:y}),ye.jsxs(ah,{children:["Don't have an account?",ye.jsx(Lc,{to:"/create-account",children:"Create one →"})]}),ye.jsxs(ah,{children:["Forgot your password?",ye.jsx("button",{onClick:N,children:"Reset Password →"})]}),ye.jsx(yE,{})]})}function vD(){const n=xa(),[e,t]=Q.useState(!1),[s,o]=Q.useState(""),[l,h]=Q.useState(""),[f,p]=Q.useState(""),[y,w]=Q.useState(""),[T,R]=Q.useState(""),N=F=>{const{target:{name:X,value:G}}=F;X==="name"?o(G):X==="email"?h(G):X==="password"&&p(G)},V=async F=>{if(F.preventDefault(),w(""),!(e||s===""||l===""||f===""))try{t(!0);const X=await QA(Vi,l,f);await JA(X.user,{displayName:s}),n("/")}catch(X){X instanceof $n&&w(X.message),console.log(X)}finally{t(!1)}},z=async()=>{if(w(""),R(""),!l){w("Please enter your email to reset password.");return}try{await V0(Vi,l),R("Password reset email sent")}catch(F){F instanceof $n&&w(F.message)}};return ye.jsxs(fE,{children:[ye.jsx(pE,{children:"Join 𝕏"}),ye.jsxs(mE,{onSubmit:V,children:[ye.jsx(fo,{onChange:N,name:"name",value:s,placeholder:"Name",type:"text",required:!0}),ye.jsx(fo,{onChange:N,name:"email",value:l,placeholder:"Email",type:"email",required:!0}),ye.jsx(fo,{onChange:N,value:f,name:"password",placeholder:"Password",type:"password",required:!0}),ye.jsx(fo,{type:"submit",value:e?"Loading...":"Create Account"})]}),y!==""?ye.jsx(gE,{children:y}):null,T&&ye.jsx("span",{style:{color:"lightgreen"},children:T}),ye.jsxs(ah,{children:["Already have an account?"," ",ye.jsx(Lc,{to:"/login",children:"Log in →"})]}),ye.jsxs(ah,{children:["Forgot your password?",ye.jsx("button",{onClick:z,children:"Reset Password →"})]}),ye.jsx(yE,{})]})}var vE=function(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n},_E=vp(u_||(u_=vE([`
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
`])));t0(c_||(c_=vE(["",""],["",""])),_E);var u_,c_;const _D=Mt.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,wD=Mt.span`
  font-size: 24px;
`;function ED(){return ye.jsx(_D,{children:ye.jsx(wD,{children:"Loading..."})})}function TD({children:n}){return Vi.currentUser==null?ye.jsx(GI,{to:"/login"}):n}const ID=rS([{path:"/",element:ye.jsx(TD,{children:ye.jsx(sD,{})}),children:[{path:"",element:ye.jsx(fD,{})},{path:"profile",element:ye.jsx(pD,{})}]},{path:"/login",element:ye.jsx(yD,{})},{path:"/create-account",element:ye.jsx(vD,{})}],{basename:"/htweetx"}),SD=t0`
  ${_E};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #07111F;
    color:white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`,RD=Mt.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;function AD(){const[n,e]=Q.useState(!0),t=async()=>{await Vi.authStateReady(),e(!1)};return Q.useEffect(()=>{t()},[]),ye.jsxs(RD,{children:[ye.jsx(SD,{}),n?ye.jsx(ED,{}):ye.jsx(dS,{router:ID})]})}const PD=DT.createRoot(document.getElementById("root"));PD.render(ye.jsx(Vr.StrictMode,{children:ye.jsx(AD,{})}));
