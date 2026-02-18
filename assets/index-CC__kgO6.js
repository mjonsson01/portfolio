(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function hb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kd={exports:{}},Xl={};var Qv;function db(){if(Qv)return Xl;Qv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return Xl.Fragment=t,Xl.jsx=n,Xl.jsxs=n,Xl}var Jv;function pb(){return Jv||(Jv=1,kd.exports=db()),kd.exports}var fn=pb(),Xd={exports:{}},re={};var $v;function mb(){if($v)return re;$v=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(B,tt,_t){this.props=B,this.context=tt,this.refs=M,this.updater=_t||T}x.prototype.isReactComponent={},x.prototype.setState=function(B,tt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,tt,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function C(){}C.prototype=x.prototype;function U(B,tt,_t){this.props=B,this.context=tt,this.refs=M,this.updater=_t||T}var R=U.prototype=new C;R.constructor=U,E(R,x.prototype),R.isPureReactComponent=!0;var L=Array.isArray;function z(){}var O={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function A(B,tt,_t){var Mt=_t.ref;return{$$typeof:o,type:B,key:tt,ref:Mt!==void 0?Mt:null,props:_t}}function N(B,tt){return A(B.type,tt,B.props)}function V(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function Z(B){var tt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(_t){return tt[_t]})}var K=/\/+/g;function rt(B,tt){return typeof B=="object"&&B!==null&&B.key!=null?Z(""+B.key):tt.toString(36)}function lt(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(tt){B.status==="pending"&&(B.status="fulfilled",B.value=tt)},function(tt){B.status==="pending"&&(B.status="rejected",B.reason=tt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,tt,_t,Mt,Dt){var it=typeof B;(it==="undefined"||it==="boolean")&&(B=null);var dt=!1;if(B===null)dt=!0;else switch(it){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(B.$$typeof){case o:case t:dt=!0;break;case _:return dt=B._init,F(dt(B._payload),tt,_t,Mt,Dt)}}if(dt)return Dt=Dt(B),dt=Mt===""?"."+rt(B,0):Mt,L(Dt)?(_t="",dt!=null&&(_t=dt.replace(K,"$&/")+"/"),F(Dt,tt,_t,"",function(Ht){return Ht})):Dt!=null&&(V(Dt)&&(Dt=N(Dt,_t+(Dt.key==null||B&&B.key===Dt.key?"":(""+Dt.key).replace(K,"$&/")+"/")+dt)),tt.push(Dt)),1;dt=0;var At=Mt===""?".":Mt+":";if(L(B))for(var Vt=0;Vt<B.length;Vt++)Mt=B[Vt],it=At+rt(Mt,Vt),dt+=F(Mt,tt,_t,it,Dt);else if(Vt=y(B),typeof Vt=="function")for(B=Vt.call(B),Vt=0;!(Mt=B.next()).done;)Mt=Mt.value,it=At+rt(Mt,Vt++),dt+=F(Mt,tt,_t,it,Dt);else if(it==="object"){if(typeof B.then=="function")return F(lt(B),tt,_t,Mt,Dt);throw tt=String(B),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return dt}function H(B,tt,_t){if(B==null)return B;var Mt=[],Dt=0;return F(B,Mt,"","",function(it){return tt.call(_t,it,Dt++)}),Mt}function J(B){if(B._status===-1){var tt=B._result;tt=tt(),tt.then(function(_t){(B._status===0||B._status===-1)&&(B._status=1,B._result=_t)},function(_t){(B._status===0||B._status===-1)&&(B._status=2,B._result=_t)}),B._status===-1&&(B._status=0,B._result=tt)}if(B._status===1)return B._result.default;throw B._result}var St=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},xt={map:H,forEach:function(B,tt,_t){H(B,function(){tt.apply(this,arguments)},_t)},count:function(B){var tt=0;return H(B,function(){tt++}),tt},toArray:function(B){return H(B,function(tt){return tt})||[]},only:function(B){if(!V(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return re.Activity=g,re.Children=xt,re.Component=x,re.Fragment=n,re.Profiler=s,re.PureComponent=U,re.StrictMode=a,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(B){return O.H.useMemoCache(B)}},re.cache=function(B){return function(){return B.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(B,tt,_t){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Mt=E({},B.props),Dt=B.key;if(tt!=null)for(it in tt.key!==void 0&&(Dt=""+tt.key),tt)!G.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(Mt[it]=tt[it]);var it=arguments.length-2;if(it===1)Mt.children=_t;else if(1<it){for(var dt=Array(it),At=0;At<it;At++)dt[At]=arguments[At+2];Mt.children=dt}return A(B.type,Dt,Mt)},re.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:u,_context:B},B},re.createElement=function(B,tt,_t){var Mt,Dt={},it=null;if(tt!=null)for(Mt in tt.key!==void 0&&(it=""+tt.key),tt)G.call(tt,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Dt[Mt]=tt[Mt]);var dt=arguments.length-2;if(dt===1)Dt.children=_t;else if(1<dt){for(var At=Array(dt),Vt=0;Vt<dt;Vt++)At[Vt]=arguments[Vt+2];Dt.children=At}if(B&&B.defaultProps)for(Mt in dt=B.defaultProps,dt)Dt[Mt]===void 0&&(Dt[Mt]=dt[Mt]);return A(B,it,Dt)},re.createRef=function(){return{current:null}},re.forwardRef=function(B){return{$$typeof:f,render:B}},re.isValidElement=V,re.lazy=function(B){return{$$typeof:_,_payload:{_status:-1,_result:B},_init:J}},re.memo=function(B,tt){return{$$typeof:d,type:B,compare:tt===void 0?null:tt}},re.startTransition=function(B){var tt=O.T,_t={};O.T=_t;try{var Mt=B(),Dt=O.S;Dt!==null&&Dt(_t,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(z,St)}catch(it){St(it)}finally{tt!==null&&_t.types!==null&&(tt.types=_t.types),O.T=tt}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(B){return O.H.use(B)},re.useActionState=function(B,tt,_t){return O.H.useActionState(B,tt,_t)},re.useCallback=function(B,tt){return O.H.useCallback(B,tt)},re.useContext=function(B){return O.H.useContext(B)},re.useDebugValue=function(){},re.useDeferredValue=function(B,tt){return O.H.useDeferredValue(B,tt)},re.useEffect=function(B,tt){return O.H.useEffect(B,tt)},re.useEffectEvent=function(B){return O.H.useEffectEvent(B)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(B,tt,_t){return O.H.useImperativeHandle(B,tt,_t)},re.useInsertionEffect=function(B,tt){return O.H.useInsertionEffect(B,tt)},re.useLayoutEffect=function(B,tt){return O.H.useLayoutEffect(B,tt)},re.useMemo=function(B,tt){return O.H.useMemo(B,tt)},re.useOptimistic=function(B,tt){return O.H.useOptimistic(B,tt)},re.useReducer=function(B,tt,_t){return O.H.useReducer(B,tt,_t)},re.useRef=function(B){return O.H.useRef(B)},re.useState=function(B){return O.H.useState(B)},re.useSyncExternalStore=function(B,tt,_t){return O.H.useSyncExternalStore(B,tt,_t)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.4",re}var tx;function Xm(){return tx||(tx=1,Xd.exports=mb()),Xd.exports}var Cn=Xm();const As=hb(Cn);var Wd={exports:{}},Wl={},qd={exports:{}},Yd={};var ex;function _b(){return ex||(ex=1,(function(o){function t(F,H){var J=F.length;F.push(H);t:for(;0<J;){var St=J-1>>>1,xt=F[St];if(0<s(xt,H))F[St]=H,F[J]=xt,J=St;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],J=F.pop();if(J!==H){F[0]=J;t:for(var St=0,xt=F.length,B=xt>>>1;St<B;){var tt=2*(St+1)-1,_t=F[tt],Mt=tt+1,Dt=F[Mt];if(0>s(_t,J))Mt<xt&&0>s(Dt,_t)?(F[St]=Dt,F[Mt]=J,St=Mt):(F[St]=_t,F[tt]=J,St=tt);else if(Mt<xt&&0>s(Dt,J))F[St]=Dt,F[Mt]=J,St=Mt;else break t}}return H}function s(F,H){var J=F.sortIndex-H.sortIndex;return J!==0?J:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,y=!1,T=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function L(F){if(E=!1,R(F),!T)if(n(p)!==null)T=!0,z||(z=!0,Z());else{var H=n(d);H!==null&&lt(L,H.startTime-F)}}var z=!1,O=-1,G=5,A=-1;function N(){return M?!0:!(o.unstable_now()-A<G)}function V(){if(M=!1,z){var F=o.unstable_now();A=F;var H=!0;try{t:{T=!1,E&&(E=!1,C(O),O=-1),y=!0;var J=v;try{e:{for(R(F),g=n(p);g!==null&&!(g.expirationTime>F&&N());){var St=g.callback;if(typeof St=="function"){g.callback=null,v=g.priorityLevel;var xt=St(g.expirationTime<=F);if(F=o.unstable_now(),typeof xt=="function"){g.callback=xt,R(F),H=!0;break e}g===n(p)&&a(p),R(F)}else a(p);g=n(p)}if(g!==null)H=!0;else{var B=n(d);B!==null&&lt(L,B.startTime-F),H=!1}}break t}finally{g=null,v=J,y=!1}H=void 0}}finally{H?Z():z=!1}}}var Z;if(typeof U=="function")Z=function(){U(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,rt=K.port2;K.port1.onmessage=V,Z=function(){rt.postMessage(null)}}else Z=function(){x(V,0)};function lt(F,H){O=x(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(F){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var J=v;v=H;try{return F()}finally{v=J}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=v;v=F;try{return H()}finally{v=J}},o.unstable_scheduleCallback=function(F,H,J){var St=o.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?St+J:St):J=St,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=J+xt,F={id:_++,callback:H,priorityLevel:F,startTime:J,expirationTime:xt,sortIndex:-1},J>St?(F.sortIndex=J,t(d,F),n(p)===null&&F===n(d)&&(E?(C(O),O=-1):E=!0,lt(L,J-St))):(F.sortIndex=xt,t(p,F),T||y||(T=!0,z||(z=!0,Z()))),F},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(F){var H=v;return function(){var J=v;v=H;try{return F.apply(this,arguments)}finally{v=J}}}})(Yd)),Yd}var nx;function gb(){return nx||(nx=1,qd.exports=_b()),qd.exports}var jd={exports:{}},kn={};var ix;function vb(){if(ix)return kn;ix=1;var o=Xm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,_)},kn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,y=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},kn.requestFormReset=function(p){a.d.r(p)},kn.unstable_batchedUpdates=function(p,d){return p(d)},kn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.2.4",kn}var ax;function xb(){if(ax)return jd.exports;ax=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jd.exports=vb(),jd.exports}var rx;function Sb(){if(rx)return Wl;rx=1;var o=gb(),t=Xm(),n=xb();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var b=!1,w=h.child;w;){if(w===r){b=!0,r=h,l=m;break}if(w===l){b=!0,l=h,r=m;break}w=w.sibling}if(!b){for(w=m.child;w;){if(w===r){b=!0,r=m,l=h;break}if(w===l){b=!0,l=m,r=h;break}w=w.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),U=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case R:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:rt(e.type)||"Memo";case G:i=e._payload,e=e._init;try{return rt(e(i))}catch{}}return null}var lt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},St=[],xt=-1;function B(e){return{current:e}}function tt(e){0>xt||(e.current=St[xt],St[xt]=null,xt--)}function _t(e,i){xt++,St[xt]=e.current,e.current=i}var Mt=B(null),Dt=B(null),it=B(null),dt=B(null);function At(e,i){switch(_t(it,i),_t(Dt,e),_t(Mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Sv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Sv(i),e=yv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Mt),_t(Mt,e)}function Vt(){tt(Mt),tt(Dt),tt(it)}function Ht(e){e.memoizedState!==null&&_t(dt,e);var i=Mt.current,r=yv(i,e.type);i!==r&&(_t(Dt,e),_t(Mt,r))}function he(e){Dt.current===e&&(tt(Mt),tt(Dt)),dt.current===e&&(tt(dt),Hl._currentValue=J)}var Ke,pe;function de(e){if(Ke===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",pe=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+pe}var Ee=!1;function ie(e,i){if(!e||Ee)return"";Ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ft){ot=ft}e.call(gt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],w=m[1];if(b&&w){var k=b.split(`
`),nt=w.split(`
`);for(h=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(l===k.length||h===nt.length)for(l=k.length-1,h=nt.length-1;1<=l&&0<=h&&k[l]!==nt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(k[l]!==nt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||k[l]!==nt[h]){var pt=`
`+k[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=h);break}}}finally{Ee=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?de(r):""}function Qe(e,i){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==i&&i!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return ie(e.type,!1);case 11:return ie(e.type.render,!1);case 1:return ie(e.type,!0);case 31:return de("Activity");default:return""}}function X(e){try{var i="",r=null;do i+=Qe(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ke=Object.prototype.hasOwnProperty,xe=o.unstable_scheduleCallback,be=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,P=o.unstable_requestPaint,S=o.unstable_now,I=o.unstable_getCurrentPriorityLevel,Q=o.unstable_ImmediatePriority,ht=o.unstable_UserBlockingPriority,at=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Gt=o.log,Qt=o.unstable_setDisableYieldValue,Et=null,bt=null;function Bt(e){if(typeof Gt=="function"&&Qt(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var zt=Math.clz32?Math.clz32:q,wt=Math.log,le=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(wt(e)/le|0)|0}var Lt=256,Tt=262144,Ft=4194304;function yt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?h=yt(l):(b&=w,b!==0?h=yt(b):r||(r=w&~e,r!==0&&(h=yt(r))))):(w=l&~m,w!==0?h=yt(w):b!==0?h=yt(b):r||(r=l&~e,r!==0&&(h=yt(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Ct(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ee(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Vn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yi(e,i,r,l,h,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,k=e.expirationTimes,nt=e.hiddenUpdates;for(r=b&~r;0<r;){var pt=31-zt(r),gt=1<<pt;w[pt]=0,k[pt]=-1;var ot=nt[pt];if(ot!==null)for(nt[pt]=null,pt=0;pt<ot.length;pt++){var ft=ot[pt];ft!==null&&(ft.lane&=-536870913)}r&=~gt}l!==0&&Ru(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function Ru(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-zt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Jo(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-zt(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Os(e,i){var r=i&-i;return r=(r&42)!==0?1:$o(r),(r&(e.suspendedLanes|i))!==0?0:r}function $o(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ps(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tl(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Xv(e.type))}function ua(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var wi=Math.random().toString(36).slice(2),pn="__reactFiber$"+wi,Dn="__reactProps$"+wi,ji="__reactContainer$"+wi,zs="__reactEvents$"+wi,Fs="__reactListeners$"+wi,Cu="__reactHandles$"+wi,el="__reactResources$"+wi,Yr="__reactMarker$"+wi;function nl(e){delete e[pn],delete e[Dn],delete e[zs],delete e[Fs],delete e[Cu]}function ir(e){var i=e[pn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[ji]||r[pn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Cv(e);e!==null;){if(r=e[pn])return r;e=Cv(e)}return i}e=r,r=e.parentNode}return null}function ar(e){if(e=e[pn]||e[ji]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function jr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function rr(e){var i=e[el];return i||(i=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function D(e){e[Yr]=!0}var Y=new Set,ct={};function st(e,i){$(e,i),$(e+"Capture",i)}function $(e,i){for(ct[e]=i,e=0;e<i.length;e++)Y.add(i[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Nt={};function kt(e){return ke.call(Nt,e)?!0:ke.call(It,e)?!1:Ut.test(e)?Nt[e]=!0:(It[e]=!0,!1)}function qt(e,i,r){if(kt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Jt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Yt(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=De(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Oe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=De(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ae(e){return e.replace(Ue,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,r,l,h,m,b,w){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$t(i)):e.value!==""+$t(i)&&(e.value=""+$t(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Ln(e,b,$t(i)):r!=null?Ln(e,b,$t(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+$t(w):e.removeAttribute("name")}function Ta(e,i,r,l,h,m,b,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ye(e);return}r=r!=null?""+$t(r):"",i=i!=null?""+$t(i):r,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ye(e)}function Ln(e,i,r){i==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Di(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+$t(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function ze(e,i,r){if(i!=null&&(i=""+$t(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+$t(r):""}function Nn(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(lt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=$t(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ye(e)}function Mn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||On.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Bs(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&Pn(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&Pn(e,m,i[m])}function Zi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lM=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uM=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wu(e){return uM.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Aa(){}var Hf=null;function Gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Hs=null;function x_(e){var i=ar(e);if(i&&(e=i.stateNode)){var r=e[Dn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ae(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[Dn]||null;if(!h)throw Error(a(90));Un(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Oe(l)}break t;case"textarea":ze(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Di(e,!!r.multiple,i,!1)}}}var Vf=!1;function S_(e,i,r){if(Vf)return e(i,r);Vf=!0;try{var l=e(i);return l}finally{if(Vf=!1,(Is!==null||Hs!==null)&&(_c(),Is&&(i=Is,e=Hs,Hs=Is=null,x_(i),e)))for(i=0;i<e.length;i++)x_(e[i])}}function il(e,i){var r=e.stateNode;if(r===null)return null;var l=r[Dn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kf=!1;if(Ra)try{var al={};Object.defineProperty(al,"passive",{get:function(){kf=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{kf=!1}var sr=null,Xf=null,Du=null;function y_(){if(Du)return Du;var e,i=Xf,r=i.length,l,h="value"in sr?sr.value:sr.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var b=r-e;for(l=1;l<=b&&i[r-l]===h[m-l];l++);return Du=h.slice(e,1<l?1-l:void 0)}function Uu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Lu(){return!0}function M_(){return!1}function Jn(e){function i(r,l,h,m,b){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Lu:M_,this.isPropagationStopped=M_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Lu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Lu)},persist:function(){},isPersistent:Lu}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=Jn(Zr),rl=g({},Zr,{view:0,detail:0}),cM=Jn(rl),Wf,qf,sl,Ou=g({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sl&&(sl&&e.type==="mousemove"?(Wf=e.screenX-sl.screenX,qf=e.screenY-sl.screenY):qf=Wf=0,sl=e),Wf)},movementY:function(e){return"movementY"in e?e.movementY:qf}}),E_=Jn(Ou),fM=g({},Ou,{dataTransfer:0}),hM=Jn(fM),dM=g({},rl,{relatedTarget:0}),Yf=Jn(dM),pM=g({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),mM=Jn(pM),_M=g({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gM=Jn(_M),vM=g({},Zr,{data:0}),b_=Jn(vM),xM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function MM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=yM[e])?!!i[e]:!1}function jf(){return MM}var EM=g({},rl,{key:function(e){if(e.key){var i=xM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Uu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(e){return e.type==="keypress"?Uu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Uu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bM=Jn(EM),TM=g({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T_=Jn(TM),AM=g({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),RM=Jn(AM),CM=g({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wM=Jn(CM),DM=g({},Ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),UM=Jn(DM),LM=g({},Zr,{newState:0,oldState:0}),NM=Jn(LM),OM=[9,13,27,32],Zf=Ra&&"CompositionEvent"in window,ol=null;Ra&&"documentMode"in document&&(ol=document.documentMode);var PM=Ra&&"TextEvent"in window&&!ol,A_=Ra&&(!Zf||ol&&8<ol&&11>=ol),R_=" ",C_=!1;function w_(e,i){switch(e){case"keyup":return OM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D_(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function zM(e,i){switch(e){case"compositionend":return D_(i);case"keypress":return i.which!==32?null:(C_=!0,R_);case"textInput":return e=i.data,e===R_&&C_?null:e;default:return null}}function FM(e,i){if(Gs)return e==="compositionend"||!Zf&&w_(e,i)?(e=y_(),Du=Xf=sr=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return A_&&i.locale!=="ko"?null:i.data;default:return null}}var BM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function U_(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!BM[e.type]:i==="textarea"}function L_(e,i,r,l){Is?Hs?Hs.push(l):Hs=[l]:Is=l,i=Ec(i,"onChange"),0<i.length&&(r=new Nu("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var ll=null,ul=null;function IM(e){pv(e,0)}function Pu(e){var i=jr(e);if(Oe(i))return e}function N_(e,i){if(e==="change")return i}var O_=!1;if(Ra){var Kf;if(Ra){var Qf="oninput"in document;if(!Qf){var P_=document.createElement("div");P_.setAttribute("oninput","return;"),Qf=typeof P_.oninput=="function"}Kf=Qf}else Kf=!1;O_=Kf&&(!document.documentMode||9<document.documentMode)}function z_(){ll&&(ll.detachEvent("onpropertychange",F_),ul=ll=null)}function F_(e){if(e.propertyName==="value"&&Pu(ul)){var i=[];L_(i,ul,e,Gf(e)),S_(IM,i)}}function HM(e,i,r){e==="focusin"?(z_(),ll=i,ul=r,ll.attachEvent("onpropertychange",F_)):e==="focusout"&&z_()}function GM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pu(ul)}function VM(e,i){if(e==="click")return Pu(i)}function kM(e,i){if(e==="input"||e==="change")return Pu(i)}function XM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hi=typeof Object.is=="function"?Object.is:XM;function cl(e,i){if(hi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!ke.call(i,h)||!hi(e[h],i[h]))return!1}return!0}function B_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function I_(e,i){var r=B_(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=B_(r)}}function H_(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?H_(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function G_(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Zt(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Zt(e.document)}return i}function Jf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var WM=Ra&&"documentMode"in document&&11>=document.documentMode,Vs=null,$f=null,fl=null,th=!1;function V_(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;th||Vs==null||Vs!==Zt(l)||(l=Vs,"selectionStart"in l&&Jf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fl&&cl(fl,l)||(fl=l,l=Ec($f,"onSelect"),0<l.length&&(i=new Nu("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Vs)))}function Kr(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var ks={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionrun:Kr("Transition","TransitionRun"),transitionstart:Kr("Transition","TransitionStart"),transitioncancel:Kr("Transition","TransitionCancel"),transitionend:Kr("Transition","TransitionEnd")},eh={},k_={};Ra&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Qr(e){if(eh[e])return eh[e];if(!ks[e])return e;var i=ks[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in k_)return eh[e]=i[r];return e}var X_=Qr("animationend"),W_=Qr("animationiteration"),q_=Qr("animationstart"),qM=Qr("transitionrun"),YM=Qr("transitionstart"),jM=Qr("transitioncancel"),Y_=Qr("transitionend"),j_=new Map,nh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nh.push("scrollEnd");function Ki(e,i){j_.set(e,i),st(i,[e])}var zu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],Xs=0,ih=0;function Fu(){for(var e=Xs,i=ih=Xs=0;i<e;){var r=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var h=Ui[i];Ui[i++]=null;var m=Ui[i];if(Ui[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}m!==0&&Z_(r,h,m)}}function Bu(e,i,r,l){Ui[Xs++]=e,Ui[Xs++]=i,Ui[Xs++]=r,Ui[Xs++]=l,ih|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function ah(e,i,r,l){return Bu(e,i,r,l),Iu(e)}function Jr(e,i){return Bu(e,null,null,i),Iu(e)}function Z_(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-zt(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Iu(e){if(50<Nl)throw Nl=0,dd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ws={};function ZM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,i,r,l){return new ZM(e,i,r,l)}function rh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ca(e,i){var r=e.alternate;return r===null?(r=di(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function K_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Hu(e,i,r,l,h,m){var b=0;if(l=e,typeof e=="function")rh(e)&&(b=1);else if(typeof e=="string")b=tb(e,r,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=di(31,r,i,h),e.elementType=A,e.lanes=m,e;case E:return $r(r.children,h,m,i);case M:b=8,h|=24;break;case x:return e=di(12,r,i,h|2),e.elementType=x,e.lanes=m,e;case L:return e=di(13,r,i,h),e.elementType=L,e.lanes=m,e;case z:return e=di(19,r,i,h),e.elementType=z,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:b=10;break t;case C:b=9;break t;case R:b=11;break t;case O:b=14;break t;case G:b=16,l=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=di(b,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function $r(e,i,r,l){return e=di(7,e,l,i),e.lanes=r,e}function sh(e,i,r){return e=di(6,e,null,i),e.lanes=r,e}function Q_(e){var i=di(18,null,null,0);return i.stateNode=e,i}function oh(e,i,r){return i=di(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var J_=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var r=J_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:X(i)},J_.set(e,i),i)}return{value:e,source:i,stack:X(i)}}var qs=[],Ys=0,Gu=null,hl=0,Ni=[],Oi=0,or=null,ca=1,fa="";function wa(e,i){qs[Ys++]=hl,qs[Ys++]=Gu,Gu=e,hl=i}function $_(e,i,r){Ni[Oi++]=ca,Ni[Oi++]=fa,Ni[Oi++]=or,or=e;var l=ca;e=fa;var h=32-zt(l)-1;l&=~(1<<h),r+=1;var m=32-zt(i)+h;if(30<m){var b=h-h%5;m=(l&(1<<b)-1).toString(32),l>>=b,h-=b,ca=1<<32-zt(i)+h|r<<h|l,fa=m+e}else ca=1<<m|r<<h|l,fa=e}function lh(e){e.return!==null&&(wa(e,1),$_(e,1,0))}function uh(e){for(;e===Gu;)Gu=qs[--Ys],qs[Ys]=null,hl=qs[--Ys],qs[Ys]=null;for(;e===or;)or=Ni[--Oi],Ni[Oi]=null,fa=Ni[--Oi],Ni[Oi]=null,ca=Ni[--Oi],Ni[Oi]=null}function t0(e,i){Ni[Oi++]=ca,Ni[Oi++]=fa,Ni[Oi++]=or,ca=i.id,fa=i.overflow,or=e}var zn=null,je=null,Se=!1,lr=null,Pi=!1,ch=Error(a(519));function ur(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dl(Li(i,e)),ch}function e0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[pn]=e,i[Dn]=l,r){case"dialog":_e("cancel",i),_e("close",i);break;case"iframe":case"object":case"embed":_e("load",i);break;case"video":case"audio":for(r=0;r<Pl.length;r++)_e(Pl[r],i);break;case"source":_e("error",i);break;case"img":case"image":case"link":_e("error",i),_e("load",i);break;case"details":_e("toggle",i);break;case"input":_e("invalid",i),Ta(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":_e("invalid",i);break;case"textarea":_e("invalid",i),Nn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||vv(i.textContent,r)?(l.popover!=null&&(_e("beforetoggle",i),_e("toggle",i)),l.onScroll!=null&&_e("scroll",i),l.onScrollEnd!=null&&_e("scrollend",i),l.onClick!=null&&(i.onclick=Aa),i=!0):i=!1,i||ur(e,!0)}function n0(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:zn=zn.return}}function js(e){if(e!==zn)return!1;if(!Se)return n0(e),Se=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Cd(e.type,e.memoizedProps)),r=!r),r&&je&&ur(e),n0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=Rv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=Rv(e)}else i===27?(i=je,Er(e.type)?(e=Nd,Nd=null,je=e):je=i):je=zn?Fi(e.stateNode.nextSibling):null;return!0}function ts(){je=zn=null,Se=!1}function fh(){var e=lr;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),lr=null),e}function dl(e){lr===null?lr=[e]:lr.push(e)}var hh=B(null),es=null,Da=null;function cr(e,i,r){_t(hh,i._currentValue),i._currentValue=r}function Ua(e){e._currentValue=hh.current,tt(hh)}function dh(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function ph(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var w=m;m=h;for(var k=0;k<i.length;k++)if(w.context===i[k]){m.lanes|=r,w=m.alternate,w!==null&&(w.lanes|=r),dh(m.return,r,e),l||(b=null);break t}m=w.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),dh(b,r,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function Zs(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var w=h.type;hi(h.pendingProps.value,b.value)||(e!==null?e.push(w):e=[w])}}else if(h===dt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}h=h.return}e!==null&&ph(i,e,r,l),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ns(e){es=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fn(e){return i0(es,e)}function ku(e,i){return es===null&&ns(e),i0(e,i)}function i0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Da===null){if(e===null)throw Error(a(308));Da=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Da=Da.next=i;return r}var KM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},QM=o.unstable_scheduleCallback,JM=o.unstable_NormalPriority,mn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mh(){return{controller:new KM,data:new Map,refCount:0}}function pl(e){e.refCount--,e.refCount===0&&QM(JM,function(){e.controller.abort()})}var ml=null,_h=0,Ks=0,Qs=null;function $M(e,i){if(ml===null){var r=ml=[];_h=0,Ks=xd(),Qs={status:"pending",value:void 0,then:function(l){r.push(l)}}}return _h++,i.then(a0,a0),i}function a0(){if(--_h===0&&ml!==null){Qs!==null&&(Qs.status="fulfilled");var e=ml;ml=null,Ks=0,Qs=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function tE(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var r0=F.S;F.S=function(e,i){Vg=S(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&$M(e,i),r0!==null&&r0(e,i)};var is=B(null);function gh(){var e=is.current;return e!==null?e:Xe.pooledCache}function Xu(e,i){i===null?_t(is,is.current):_t(is,i.pool)}function s0(){var e=gh();return e===null?null:{parent:mn._currentValue,pool:e}}var Js=Error(a(460)),vh=Error(a(474)),Wu=Error(a(542)),qu={then:function(){}};function o0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function l0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Aa,Aa),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,c0(e),e;default:if(typeof i.status=="string")i.then(Aa,Aa);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,c0(e),e}throw rs=i,Js}}function as(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(rs=r,Js):r}}var rs=null;function u0(){if(rs===null)throw Error(a(459));var e=rs;return rs=null,e}function c0(e){if(e===Js||e===Wu)throw Error(a(483))}var $s=null,_l=0;function Yu(e){var i=_l;return _l+=1,$s===null&&($s=[]),l0($s,e,i)}function gl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function f0(e){function i(j,W){if(e){var et=j.deletions;et===null?(j.deletions=[W],j.flags|=16):et.push(W)}}function r(j,W){if(!e)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function h(j,W){return j=Ca(j,W),j.index=0,j.sibling=null,j}function m(j,W,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<W?(j.flags|=67108866,W):et):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function b(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function w(j,W,et,mt){return W===null||W.tag!==6?(W=sh(et,j.mode,mt),W.return=j,W):(W=h(W,et),W.return=j,W)}function k(j,W,et,mt){var Kt=et.type;return Kt===E?pt(j,W,et.props.children,mt,et.key):W!==null&&(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===G&&as(Kt)===W.type)?(W=h(W,et.props),gl(W,et),W.return=j,W):(W=Hu(et.type,et.key,et.props,null,j.mode,mt),gl(W,et),W.return=j,W)}function nt(j,W,et,mt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=oh(et,j.mode,mt),W.return=j,W):(W=h(W,et.children||[]),W.return=j,W)}function pt(j,W,et,mt,Kt){return W===null||W.tag!==7?(W=$r(et,j.mode,mt,Kt),W.return=j,W):(W=h(W,et),W.return=j,W)}function gt(j,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=sh(""+W,j.mode,et),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return et=Hu(W.type,W.key,W.props,null,j.mode,et),gl(et,W),et.return=j,et;case T:return W=oh(W,j.mode,et),W.return=j,W;case G:return W=as(W),gt(j,W,et)}if(lt(W)||Z(W))return W=$r(W,j.mode,et,null),W.return=j,W;if(typeof W.then=="function")return gt(j,Yu(W),et);if(W.$$typeof===U)return gt(j,ku(j,W),et);ju(j,W)}return null}function ot(j,W,et,mt){var Kt=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Kt!==null?null:w(j,W,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case y:return et.key===Kt?k(j,W,et,mt):null;case T:return et.key===Kt?nt(j,W,et,mt):null;case G:return et=as(et),ot(j,W,et,mt)}if(lt(et)||Z(et))return Kt!==null?null:pt(j,W,et,mt,null);if(typeof et.then=="function")return ot(j,W,Yu(et),mt);if(et.$$typeof===U)return ot(j,W,ku(j,et),mt);ju(j,et)}return null}function ft(j,W,et,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return j=j.get(et)||null,w(W,j,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case y:return j=j.get(mt.key===null?et:mt.key)||null,k(W,j,mt,Kt);case T:return j=j.get(mt.key===null?et:mt.key)||null,nt(W,j,mt,Kt);case G:return mt=as(mt),ft(j,W,et,mt,Kt)}if(lt(mt)||Z(mt))return j=j.get(et)||null,pt(W,j,mt,Kt,null);if(typeof mt.then=="function")return ft(j,W,et,Yu(mt),Kt);if(mt.$$typeof===U)return ft(j,W,et,ku(W,mt),Kt);ju(W,mt)}return null}function Xt(j,W,et,mt){for(var Kt=null,Re=null,jt=W,ue=W=0,ve=null;jt!==null&&ue<et.length;ue++){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var Ce=ot(j,jt,et[ue],mt);if(Ce===null){jt===null&&(jt=ve);break}e&&jt&&Ce.alternate===null&&i(j,jt),W=m(Ce,W,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,jt=ve}if(ue===et.length)return r(j,jt),Se&&wa(j,ue),Kt;if(jt===null){for(;ue<et.length;ue++)jt=gt(j,et[ue],mt),jt!==null&&(W=m(jt,W,ue),Re===null?Kt=jt:Re.sibling=jt,Re=jt);return Se&&wa(j,ue),Kt}for(jt=l(jt);ue<et.length;ue++)ve=ft(jt,j,ue,et[ue],mt),ve!==null&&(e&&ve.alternate!==null&&jt.delete(ve.key===null?ue:ve.key),W=m(ve,W,ue),Re===null?Kt=ve:Re.sibling=ve,Re=ve);return e&&jt.forEach(function(Cr){return i(j,Cr)}),Se&&wa(j,ue),Kt}function te(j,W,et,mt){if(et==null)throw Error(a(151));for(var Kt=null,Re=null,jt=W,ue=W=0,ve=null,Ce=et.next();jt!==null&&!Ce.done;ue++,Ce=et.next()){jt.index>ue?(ve=jt,jt=null):ve=jt.sibling;var Cr=ot(j,jt,Ce.value,mt);if(Cr===null){jt===null&&(jt=ve);break}e&&jt&&Cr.alternate===null&&i(j,jt),W=m(Cr,W,ue),Re===null?Kt=Cr:Re.sibling=Cr,Re=Cr,jt=ve}if(Ce.done)return r(j,jt),Se&&wa(j,ue),Kt;if(jt===null){for(;!Ce.done;ue++,Ce=et.next())Ce=gt(j,Ce.value,mt),Ce!==null&&(W=m(Ce,W,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return Se&&wa(j,ue),Kt}for(jt=l(jt);!Ce.done;ue++,Ce=et.next())Ce=ft(jt,j,ue,Ce.value,mt),Ce!==null&&(e&&Ce.alternate!==null&&jt.delete(Ce.key===null?ue:Ce.key),W=m(Ce,W,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return e&&jt.forEach(function(fb){return i(j,fb)}),Se&&wa(j,ue),Kt}function Ve(j,W,et,mt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case y:t:{for(var Kt=et.key;W!==null;){if(W.key===Kt){if(Kt=et.type,Kt===E){if(W.tag===7){r(j,W.sibling),mt=h(W,et.props.children),mt.return=j,j=mt;break t}}else if(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===G&&as(Kt)===W.type){r(j,W.sibling),mt=h(W,et.props),gl(mt,et),mt.return=j,j=mt;break t}r(j,W);break}else i(j,W);W=W.sibling}et.type===E?(mt=$r(et.props.children,j.mode,mt,et.key),mt.return=j,j=mt):(mt=Hu(et.type,et.key,et.props,null,j.mode,mt),gl(mt,et),mt.return=j,j=mt)}return b(j);case T:t:{for(Kt=et.key;W!==null;){if(W.key===Kt)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){r(j,W.sibling),mt=h(W,et.children||[]),mt.return=j,j=mt;break t}else{r(j,W);break}else i(j,W);W=W.sibling}mt=oh(et,j.mode,mt),mt.return=j,j=mt}return b(j);case G:return et=as(et),Ve(j,W,et,mt)}if(lt(et))return Xt(j,W,et,mt);if(Z(et)){if(Kt=Z(et),typeof Kt!="function")throw Error(a(150));return et=Kt.call(et),te(j,W,et,mt)}if(typeof et.then=="function")return Ve(j,W,Yu(et),mt);if(et.$$typeof===U)return Ve(j,W,ku(j,et),mt);ju(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(r(j,W.sibling),mt=h(W,et),mt.return=j,j=mt):(r(j,W),mt=sh(et,j.mode,mt),mt.return=j,j=mt),b(j)):r(j,W)}return function(j,W,et,mt){try{_l=0;var Kt=Ve(j,W,et,mt);return $s=null,Kt}catch(jt){if(jt===Js||jt===Wu)throw jt;var Re=di(29,jt,null,j.mode);return Re.lanes=mt,Re.return=j,Re}}}var ss=f0(!0),h0=f0(!1),fr=!1;function xh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function dr(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Le&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Iu(e),Z_(e,null,r),i}return Bu(e,l,i,r),Iu(e)}function vl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Jo(e,r)}}function yh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Mh=!1;function xl(){if(Mh){var e=Qs;if(e!==null)throw e}}function Sl(e,i,r,l){Mh=!1;var h=e.updateQueue;fr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,w=h.shared.pending;if(w!==null){h.shared.pending=null;var k=w,nt=k.next;k.next=null,b===null?m=nt:b.next=nt,b=k;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==b&&(w===null?pt.firstBaseUpdate=nt:w.next=nt,pt.lastBaseUpdate=k))}if(m!==null){var gt=h.baseState;b=0,pt=nt=k=null,w=m;do{var ot=w.lane&-536870913,ft=ot!==w.lane;if(ft?(ge&ot)===ot:(l&ot)===ot){ot!==0&&ot===Ks&&(Mh=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Xt=e,te=w;ot=i;var Ve=r;switch(te.tag){case 1:if(Xt=te.payload,typeof Xt=="function"){gt=Xt.call(Ve,gt,ot);break t}gt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=te.payload,ot=typeof Xt=="function"?Xt.call(Ve,gt,ot):Xt,ot==null)break t;gt=g({},gt,ot);break t;case 2:fr=!0}}ot=w.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=h.callbacks,ft===null?h.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(nt=pt=ft,k=gt):pt=pt.next=ft,b|=ot;if(w=w.next,w===null){if(w=h.shared.pending,w===null)break;ft=w,w=ft.next,ft.next=null,h.lastBaseUpdate=ft,h.shared.pending=null}}while(!0);pt===null&&(k=gt),h.baseState=k,h.firstBaseUpdate=nt,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),vr|=b,e.lanes=b,e.memoizedState=gt}}function d0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function p0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)d0(r[e],i)}var to=B(null),Zu=B(0);function m0(e,i){e=Ha,_t(Zu,e),_t(to,i),Ha=e|i.baseLanes}function Eh(){_t(Zu,Ha),_t(to,to.current)}function bh(){Ha=Zu.current,tt(to),tt(Zu)}var pi=B(null),zi=null;function pr(e){var i=e.alternate;_t(un,un.current&1),_t(pi,e),zi===null&&(i===null||to.current!==null||i.memoizedState!==null)&&(zi=e)}function Th(e){_t(un,un.current),_t(pi,e),zi===null&&(zi=e)}function _0(e){e.tag===22?(_t(un,un.current),_t(pi,e),zi===null&&(zi=e)):mr()}function mr(){_t(un,un.current),_t(pi,pi.current)}function mi(e){tt(pi),zi===e&&(zi=null),tt(un)}var un=B(0);function Ku(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ud(r)||Ld(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var La=0,oe=null,He=null,_n=null,Qu=!1,eo=!1,os=!1,Ju=0,yl=0,no=null,eE=0;function rn(){throw Error(a(321))}function Ah(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!hi(e[r],i[r]))return!1;return!0}function Rh(e,i,r,l,h,m){return La=m,oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?$0:Vh,os=!1,m=r(l,h),os=!1,eo&&(m=v0(i,r,l,h)),g0(e),m}function g0(e){F.H=bl;var i=He!==null&&He.next!==null;if(La=0,_n=He=oe=null,Qu=!1,yl=0,no=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&Vu(e)&&(gn=!0))}function v0(e,i,r,l){oe=e;var h=0;do{if(eo&&(no=null),yl=0,eo=!1,25<=h)throw Error(a(301));if(h+=1,_n=He=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=tg,m=i(r,l)}while(eo);return m}function nE(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Ml(i):i,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(oe.flags|=1024),i}function Ch(){var e=Ju!==0;return Ju=0,e}function wh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Dh(e){if(Qu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Qu=!1}La=0,_n=He=oe=null,eo=!1,yl=Ju=0,no=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?oe.memoizedState=_n=e:_n=_n.next=e,_n}function cn(){if(He===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var i=_n===null?oe.memoizedState:_n.next;if(i!==null)_n=i,He=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},_n===null?oe.memoizedState=_n=e:_n=_n.next=e}return _n}function $u(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var i=yl;return yl+=1,no===null&&(no=[]),e=l0(no,e,i),i=oe,(_n===null?i.memoizedState:_n.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?$0:Vh),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===U)return Fn(e)}throw Error(a(438,String(e)))}function Uh(e){var i=null,r=oe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=oe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=$u(),oe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=N;return i.index++,r}function Na(e,i){return typeof i=="function"?i(e):i}function ec(e){var i=cn();return Lh(i,He,e)}function Lh(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var w=b=null,k=null,nt=i,pt=!1;do{var gt=nt.lane&-536870913;if(gt!==nt.lane?(ge&gt)===gt:(La&gt)===gt){var ot=nt.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),gt===Ks&&(pt=!0);else if((La&ot)===ot){nt=nt.next,ot===Ks&&(pt=!0);continue}else gt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(w=k=gt,b=m):k=k.next=gt,oe.lanes|=ot,vr|=ot;gt=nt.action,os&&r(m,gt),m=nt.hasEagerState?nt.eagerState:r(m,gt)}else ot={lane:gt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},k===null?(w=k=ot,b=m):k=k.next=ot,oe.lanes|=gt,vr|=gt;nt=nt.next}while(nt!==null&&nt!==i);if(k===null?b=m:k.next=w,!hi(m,e.memoizedState)&&(gn=!0,pt&&(r=Qs,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=k,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Nh(e){var i=cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);hi(m,i.memoizedState)||(gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function x0(e,i,r){var l=oe,h=cn(),m=Se;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!hi((He||h).memoizedState,r);if(b&&(h.memoizedState=r,gn=!0),h=h.queue,zh(M0.bind(null,l,h,e),[e]),h.getSnapshot!==i||b||_n!==null&&_n.memoizedState.tag&1){if(l.flags|=2048,io(9,{destroy:void 0},y0.bind(null,l,h,r,i),null),Xe===null)throw Error(a(349));m||(La&127)!==0||S0(l,i,r)}return r}function S0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=oe.updateQueue,i===null?(i=$u(),oe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function y0(e,i,r,l){i.value=r,i.getSnapshot=l,E0(i)&&b0(e)}function M0(e,i,r){return r(function(){E0(i)&&b0(e)})}function E0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!hi(e,r)}catch{return!0}}function b0(e){var i=Jr(e,2);i!==null&&ii(i,e,2)}function Oh(e){var i=jn();if(typeof e=="function"){var r=e;if(e=r(),os){Bt(!0);try{r()}finally{Bt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},i}function T0(e,i,r,l){return e.baseState=r,Lh(e,He,typeof l=="function"?l:Na)}function iE(e,i,r,l,h){if(ac(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};F.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,A0(i,m)):(m.next=r.next,i.pending=r.next=m)}}function A0(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=F.T,b={};F.T=b;try{var w=r(h,l),k=F.S;k!==null&&k(b,w),R0(e,i,w)}catch(nt){Ph(e,i,nt)}finally{m!==null&&b.types!==null&&(m.types=b.types),F.T=m}}else try{m=r(h,l),R0(e,i,m)}catch(nt){Ph(e,i,nt)}}function R0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){C0(e,i,l)},function(l){return Ph(e,i,l)}):C0(e,i,r)}function C0(e,i,r){i.status="fulfilled",i.value=r,w0(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,A0(e,r)))}function Ph(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,w0(i),i=i.next;while(i!==l)}e.action=null}function w0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function D0(e,i){return i}function U0(e,i){if(Se){var r=Xe.formState;if(r!==null){t:{var l=oe;if(Se){if(je){e:{for(var h=je,m=Pi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Fi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){je=Fi(h.nextSibling),l=h.data==="F!";break t}}ur(l)}l=!1}l&&(i=r[0])}}return r=jn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:i},r.queue=l,r=K0.bind(null,oe,l),l.dispatch=r,l=Oh(!1),m=Gh.bind(null,oe,!1,l.queue),l=jn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=iE.bind(null,oe,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function L0(e){var i=cn();return N0(i,He,e)}function N0(e,i,r){if(i=Lh(e,i,D0)[0],e=ec(Na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ml(i)}catch(b){throw b===Js?Wu:b}else l=i;i=cn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(oe.flags|=2048,io(9,{destroy:void 0},aE.bind(null,h,r),null)),[l,m,e]}function aE(e,i){e.action=i}function O0(e){var i=cn(),r=He;if(r!==null)return N0(i,r,e);cn(),i=i.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function io(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=oe.updateQueue,i===null&&(i=$u(),oe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function P0(){return cn().memoizedState}function nc(e,i,r,l){var h=jn();oe.flags|=e,h.memoizedState=io(1|i,{destroy:void 0},r,l===void 0?null:l)}function ic(e,i,r,l){var h=cn();l=l===void 0?null:l;var m=h.memoizedState.inst;He!==null&&l!==null&&Ah(l,He.memoizedState.deps)?h.memoizedState=io(i,m,r,l):(oe.flags|=e,h.memoizedState=io(1|i,m,r,l))}function z0(e,i){nc(8390656,8,e,i)}function zh(e,i){ic(2048,8,e,i)}function rE(e){oe.flags|=4;var i=oe.updateQueue;if(i===null)i=$u(),oe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function F0(e){var i=cn().memoizedState;return rE({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function B0(e,i){return ic(4,2,e,i)}function I0(e,i){return ic(4,4,e,i)}function H0(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function G0(e,i,r){r=r!=null?r.concat([e]):null,ic(4,4,H0.bind(null,i,e),r)}function Fh(){}function V0(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Ah(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function k0(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Ah(i,l[1]))return l[0];if(l=e(),os){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,i],l}function Bh(e,i,r){return r===void 0||(La&1073741824)!==0&&(ge&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Xg(),oe.lanes|=e,vr|=e,r)}function X0(e,i,r,l){return hi(r,i)?r:to.current!==null?(e=Bh(e,r,l),hi(e,i)||(gn=!0),e):(La&42)===0||(La&1073741824)!==0&&(ge&261930)===0?(gn=!0,e.memoizedState=r):(e=Xg(),oe.lanes|=e,vr|=e,i)}function W0(e,i,r,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var b=F.T,w={};F.T=w,Gh(e,!1,i,r);try{var k=h(),nt=F.S;if(nt!==null&&nt(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var pt=tE(k,l);El(e,i,pt,vi(e))}else El(e,i,l,vi(e))}catch(gt){El(e,i,{then:function(){},status:"rejected",reason:gt},vi())}finally{H.p=m,b!==null&&w.types!==null&&(b.types=w.types),F.T=b}}function sE(){}function Ih(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=q0(e).queue;W0(e,h,i,J,r===null?sE:function(){return Y0(e),r(l)})}function q0(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:J},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Y0(e){var i=q0(e);i.next===null&&(i=e.alternate.memoizedState),El(e,i.next.queue,{},vi())}function Hh(){return Fn(Hl)}function j0(){return cn().memoizedState}function Z0(){return cn().memoizedState}function oE(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=vi();e=hr(r);var l=dr(i,e,r);l!==null&&(ii(l,i,r),vl(l,i,r)),i={cache:mh()},e.payload=i;return}i=i.return}}function lE(e,i,r){var l=vi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ac(e)?Q0(i,r):(r=ah(e,i,r,l),r!==null&&(ii(r,e,l),J0(r,i,l)))}function K0(e,i,r){var l=vi();El(e,i,r,l)}function El(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ac(e))Q0(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,w=m(b,r);if(h.hasEagerState=!0,h.eagerState=w,hi(w,b))return Bu(e,i,h,0),Xe===null&&Fu(),!1}catch{}if(r=ah(e,i,h,l),r!==null)return ii(r,e,l),J0(r,i,l),!0}return!1}function Gh(e,i,r,l){if(l={lane:2,revertLane:xd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(i)throw Error(a(479))}else i=ah(e,r,l,2),i!==null&&ii(i,e,2)}function ac(e){var i=e.alternate;return e===oe||i!==null&&i===oe}function Q0(e,i){eo=Qu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function J0(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Jo(e,r)}}var bl={readContext:Fn,use:tc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};bl.useEffectEvent=rn;var $0={readContext:Fn,use:tc,useCallback:function(e,i){return jn().memoizedState=[e,i===void 0?null:i],e},useContext:Fn,useEffect:z0,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,nc(4194308,4,H0.bind(null,i,e),r)},useLayoutEffect:function(e,i){return nc(4194308,4,e,i)},useInsertionEffect:function(e,i){nc(4,2,e,i)},useMemo:function(e,i){var r=jn();i=i===void 0?null:i;var l=e();if(os){Bt(!0);try{e()}finally{Bt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=jn();if(r!==void 0){var h=r(i);if(os){Bt(!0);try{r(i)}finally{Bt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=lE.bind(null,oe,e),[l.memoizedState,e]},useRef:function(e){var i=jn();return e={current:e},i.memoizedState=e},useState:function(e){e=Oh(e);var i=e.queue,r=K0.bind(null,oe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Fh,useDeferredValue:function(e,i){var r=jn();return Bh(r,e,i)},useTransition:function(){var e=Oh(!1);return e=W0.bind(null,oe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=oe,h=jn();if(Se){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Xe===null)throw Error(a(349));(ge&127)!==0||S0(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,z0(M0.bind(null,l,m,e),[e]),l.flags|=2048,io(9,{destroy:void 0},y0.bind(null,l,m,r,i),null),r},useId:function(){var e=jn(),i=Xe.identifierPrefix;if(Se){var r=fa,l=ca;r=(l&~(1<<32-zt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Ju++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=eE++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Hh,useFormState:U0,useActionState:U0,useOptimistic:function(e){var i=jn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Gh.bind(null,oe,!0,r),r.dispatch=i,[e,i]},useMemoCache:Uh,useCacheRefresh:function(){return jn().memoizedState=oE.bind(null,oe)},useEffectEvent:function(e){var i=jn(),r={impl:e};return i.memoizedState=r,function(){if((Le&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Vh={readContext:Fn,use:tc,useCallback:V0,useContext:Fn,useEffect:zh,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:I0,useMemo:k0,useReducer:ec,useRef:P0,useState:function(){return ec(Na)},useDebugValue:Fh,useDeferredValue:function(e,i){var r=cn();return X0(r,He.memoizedState,e,i)},useTransition:function(){var e=ec(Na)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Ml(e),i]},useSyncExternalStore:x0,useId:j0,useHostTransitionStatus:Hh,useFormState:L0,useActionState:L0,useOptimistic:function(e,i){var r=cn();return T0(r,He,e,i)},useMemoCache:Uh,useCacheRefresh:Z0};Vh.useEffectEvent=F0;var tg={readContext:Fn,use:tc,useCallback:V0,useContext:Fn,useEffect:zh,useImperativeHandle:G0,useInsertionEffect:B0,useLayoutEffect:I0,useMemo:k0,useReducer:Nh,useRef:P0,useState:function(){return Nh(Na)},useDebugValue:Fh,useDeferredValue:function(e,i){var r=cn();return He===null?Bh(r,e,i):X0(r,He.memoizedState,e,i)},useTransition:function(){var e=Nh(Na)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:Ml(e),i]},useSyncExternalStore:x0,useId:j0,useHostTransitionStatus:Hh,useFormState:O0,useActionState:O0,useOptimistic:function(e,i){var r=cn();return He!==null?T0(r,He,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Uh,useCacheRefresh:Z0};tg.useEffectEvent=F0;function kh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xh={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=vi(),h=hr(l);h.payload=i,r!=null&&(h.callback=r),i=dr(e,h,l),i!==null&&(ii(i,e,l),vl(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=vi(),h=hr(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=dr(e,h,l),i!==null&&(ii(i,e,l),vl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=vi(),l=hr(r);l.tag=2,i!=null&&(l.callback=i),i=dr(e,l,r),i!==null&&(ii(i,e,r),vl(i,e,r))}};function eg(e,i,r,l,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!cl(r,l)||!cl(h,m):!0}function ng(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Xh.enqueueReplaceState(i,i.state,null)}function ls(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function ig(e){zu(e)}function ag(e){console.error(e)}function rg(e){zu(e)}function rc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function sg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Wh(e,i,r){return r=hr(r),r.tag=3,r.payload={element:null},r.callback=function(){rc(e,i)},r}function og(e){return e=hr(e),e.tag=3,e}function lg(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){sg(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){sg(i,r,l),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function uE(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Zs(i,r,h,!0),r=pi.current,r!==null){switch(r.tag){case 31:case 13:return zi===null?gc():r.alternate===null&&sn===0&&(sn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===qu?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),_d(e,l,h)),!1;case 22:return r.flags|=65536,l===qu?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),_d(e,l,h)),!1}throw Error(a(435,r.tag))}return _d(e,l,h),gc(),!1}if(Se)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ch&&(e=Error(a(422),{cause:l}),dl(Li(e,r)))):(l!==ch&&(i=Error(a(423),{cause:l}),dl(Li(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Li(l,r),h=Wh(e.stateNode,l,h),yh(e,h),sn!==4&&(sn=2)),!1;var m=Error(a(520),{cause:l});if(m=Li(m,r),Ll===null?Ll=[m]:Ll.push(m),sn!==4&&(sn=2),i===null)return!0;l=Li(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Wh(r.stateNode,l,e),yh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(xr===null||!xr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=og(h),lg(h,e,r,l),yh(r,h),!1}r=r.return}while(r!==null);return!1}var qh=Error(a(461)),gn=!1;function Bn(e,i,r,l){i.child=e===null?h0(i,null,r,l):ss(i,e.child,r,l)}function ug(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;return ns(i),l=Rh(e,i,r,b,m,h),w=Ch(),e!==null&&!gn?(wh(e,i,h),Oa(e,i,h)):(Se&&w&&lh(i),i.flags|=1,Bn(e,i,l,h),i.child)}function cg(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!rh(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,fg(e,i,m,l,h)):(e=Hu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!td(e,h)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:cl,r(b,l)&&e.ref===i.ref)return Oa(e,i,h)}return i.flags|=1,e=Ca(m,l),e.ref=i.ref,e.return=i,i.child=e}function fg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(cl(m,l)&&e.ref===i.ref)if(gn=!1,i.pendingProps=l=m,td(e,h))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,Oa(e,i,h)}return Yh(e,i,r,l,h)}function hg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return dg(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Xu(i,m!==null?m.cachePool:null),m!==null?m0(i,m):Eh(),_0(i);else return l=i.lanes=536870912,dg(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Xu(i,m.cachePool),m0(i,m),mr(),i.memoizedState=null):(e!==null&&Xu(i,null),Eh(),mr());return Bn(e,i,h,r),i.child}function Tl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function dg(e,i,r,l,h){var m=gh();return m=m===null?null:{parent:mn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Xu(i,null),Eh(),_0(i),e!==null&&Zs(e,i,l,!0),i.childLanes=h,null}function sc(e,i){return i=lc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function pg(e,i,r){return ss(i,e.child,null,r),e=sc(i,i.pendingProps),e.flags|=2,mi(i),i.memoizedState=null,e}function cE(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(l.mode==="hidden")return e=sc(i,l),i.lanes=536870912,Tl(null,e);if(Th(i),(e=je)?(e=Av(e,Pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:or!==null?{id:ca,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},r=Q_(e),r.return=i,i.child=r,zn=i,je=null)):e=null,e===null)throw ur(i);return i.lanes=536870912,null}return sc(i,l)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(Th(i),h)if(i.flags&256)i.flags&=-257,i=pg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(gn||Zs(e,i,r,!1),h=(r&e.childLanes)!==0,gn||h){if(l=Xe,l!==null&&(b=Os(l,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,Jr(e,b),ii(l,e,b),qh;gc(),i=pg(e,i,r)}else e=m.treeContext,je=Fi(b.nextSibling),zn=i,Se=!0,lr=null,Pi=!1,e!==null&&t0(i,e),i=sc(i,l),i.flags|=4096;return i}return e=Ca(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function oc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Yh(e,i,r,l,h){return ns(i),r=Rh(e,i,r,l,void 0,h),l=Ch(),e!==null&&!gn?(wh(e,i,h),Oa(e,i,h)):(Se&&l&&lh(i),i.flags|=1,Bn(e,i,r,h),i.child)}function mg(e,i,r,l,h,m){return ns(i),i.updateQueue=null,r=v0(i,l,r,h),g0(e),l=Ch(),e!==null&&!gn?(wh(e,i,m),Oa(e,i,m)):(Se&&l&&lh(i),i.flags|=1,Bn(e,i,r,m),i.child)}function _g(e,i,r,l,h){if(ns(i),i.stateNode===null){var m=Ws,b=r.contextType;typeof b=="object"&&b!==null&&(m=Fn(b)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Xh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},xh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Fn(b):Ws,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(kh(i,r,b,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Xh.enqueueReplaceState(m,m.state,null),Sl(i,l,m,h),xl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var w=i.memoizedProps,k=ls(r,w);m.props=k;var nt=m.context,pt=r.contextType;b=Ws,typeof pt=="object"&&pt!==null&&(b=Fn(pt));var gt=r.getDerivedStateFromProps;pt=typeof gt=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||nt!==b)&&ng(i,m,l,b),fr=!1;var ot=i.memoizedState;m.state=ot,Sl(i,l,m,h),xl(),nt=i.memoizedState,w||ot!==nt||fr?(typeof gt=="function"&&(kh(i,r,gt,l),nt=i.memoizedState),(k=fr||eg(i,r,k,l,ot,nt,b))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),m.props=l,m.state=nt,m.context=b,l=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,Sh(e,i),b=i.memoizedProps,pt=ls(r,b),m.props=pt,gt=i.pendingProps,ot=m.context,nt=r.contextType,k=Ws,typeof nt=="object"&&nt!==null&&(k=Fn(nt)),w=r.getDerivedStateFromProps,(nt=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==gt||ot!==k)&&ng(i,m,l,k),fr=!1,ot=i.memoizedState,m.state=ot,Sl(i,l,m,h),xl();var ft=i.memoizedState;b!==gt||ot!==ft||fr||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof w=="function"&&(kh(i,r,w,l),ft=i.memoizedState),(pt=fr||eg(i,r,pt,l,ot,ft,k)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ft,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ft,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),m.props=l,m.state=ft,m.context=k,l=pt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,oc(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=ss(i,e.child,null,h),i.child=ss(i,null,r,h)):Bn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Oa(e,i,h),e}function gg(e,i,r,l){return ts(),i.flags|=256,Bn(e,i,r,l),i.child}var jh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zh(e){return{baseLanes:e,cachePool:s0()}}function Kh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=gi),e}function vg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(h?pr(i):mr(),(e=je)?(e=Av(e,Pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:or!==null?{id:ca,overflow:fa}:null,retryLane:536870912,hydrationErrors:null},r=Q_(e),r.return=i,i.child=r,zn=i,je=null)):e=null,e===null)throw ur(i);return Ld(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,h?(mr(),h=i.mode,w=lc({mode:"hidden",children:w},h),l=$r(l,h,r,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Zh(r),l.childLanes=Kh(e,b,r),i.memoizedState=jh,Tl(null,l)):(pr(i),Qh(i,w))}var k=e.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(m)i.flags&256?(pr(i),i.flags&=-257,i=Jh(e,i,r)):i.memoizedState!==null?(mr(),i.child=e.child,i.flags|=128,i=null):(mr(),w=l.fallback,h=i.mode,l=lc({mode:"visible",children:l.children},h),w=$r(w,h,r,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,ss(i,e.child,null,r),l=i.child,l.memoizedState=Zh(r),l.childLanes=Kh(e,b,r),i.memoizedState=jh,i=Tl(null,l));else if(pr(i),Ld(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var nt=b.dgst;b=nt,l=Error(a(419)),l.stack="",l.digest=b,dl({value:l,source:null,stack:null}),i=Jh(e,i,r)}else if(gn||Zs(e,i,r,!1),b=(r&e.childLanes)!==0,gn||b){if(b=Xe,b!==null&&(l=Os(b,r),l!==0&&l!==k.retryLane))throw k.retryLane=l,Jr(e,l),ii(b,e,l),qh;Ud(w)||gc(),i=Jh(e,i,r)}else Ud(w)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,je=Fi(w.nextSibling),zn=i,Se=!0,lr=null,Pi=!1,e!==null&&t0(i,e),i=Qh(i,l.children),i.flags|=4096);return i}return h?(mr(),w=l.fallback,h=i.mode,k=e.child,nt=k.sibling,l=Ca(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,nt!==null?w=Ca(nt,w):(w=$r(w,h,r,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Tl(null,l),l=i.child,w=e.child.memoizedState,w===null?w=Zh(r):(h=w.cachePool,h!==null?(k=mn._currentValue,h=h.parent!==k?{parent:k,pool:k}:h):h=s0(),w={baseLanes:w.baseLanes|r,cachePool:h}),l.memoizedState=w,l.childLanes=Kh(e,b,r),i.memoizedState=jh,Tl(e.child,l)):(pr(i),r=e.child,e=r.sibling,r=Ca(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Qh(e,i){return i=lc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function lc(e,i){return e=di(22,e,null,i),e.lanes=0,e}function Jh(e,i,r){return ss(i,e.child,null,r),e=Qh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function xg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),dh(e.return,i,r)}function $h(e,i,r,l,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=h,b.treeForkCount=m)}function Sg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var b=un.current,w=(b&2)!==0;if(w?(b=b&1|2,i.flags|=128):b&=1,_t(un,b),Bn(e,i,l,r),l=Se?hl:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xg(e,r,i);else if(e.tag===19)xg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Ku(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),$h(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ku(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}$h(i,!0,r,null,m,l);break;case"together":$h(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Oa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),vr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Zs(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ca(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ca(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function td(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function fE(e,i,r){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),cr(i,mn,e.memoizedState.cache),ts();break;case 27:case 5:Ht(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:cr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Th(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(pr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?vg(e,i,r):(pr(i),e=Oa(e,i,r),e!==null?e.sibling:null);pr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Zs(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return Sg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),_t(un,un.current),l)break;return null;case 22:return i.lanes=0,hg(e,i,r,i.pendingProps);case 24:cr(i,mn,e.memoizedState.cache)}return Oa(e,i,r)}function yg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!td(e,r)&&(i.flags&128)===0)return gn=!1,fE(e,i,r);gn=(e.flags&131072)!==0}else gn=!1,Se&&(i.flags&1048576)!==0&&$_(i,hl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=as(i.elementType),i.type=e,typeof e=="function")rh(e)?(l=ls(e,l),i.tag=1,i=_g(null,i,e,l,r)):(i.tag=0,i=Yh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===R){i.tag=11,i=ug(null,i,e,l,r);break t}else if(h===O){i.tag=14,i=cg(null,i,e,l,r);break t}}throw i=rt(e)||e,Error(a(306,i,""))}}return i;case 0:return Yh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=ls(l,i.pendingProps),_g(e,i,l,h,r);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,Sh(e,i),Sl(i,l,null,r);var b=i.memoizedState;if(l=b.cache,cr(i,mn,l),l!==m.cache&&ph(i,[mn],r,!0),xl(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=gg(e,i,l,r);break t}else if(l!==h){h=Li(Error(a(424)),i),dl(h),i=gg(e,i,l,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=Fi(e.firstChild),zn=i,Se=!0,lr=null,Pi=!0,r=h0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ts(),l===h){i=Oa(e,i,r);break t}Bn(e,i,l,r)}i=i.child}return i;case 26:return oc(e,i),e===null?(r=Lv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Se||(r=i.type,e=i.pendingProps,l=bc(it.current).createElement(r),l[pn]=i,l[Dn]=e,In(l,r,e),D(l),i.stateNode=l):i.memoizedState=Lv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Ht(i),e===null&&Se&&(l=i.stateNode=wv(i.type,i.pendingProps,it.current),zn=i,Pi=!0,h=je,Er(i.type)?(Nd=h,je=Fi(l.firstChild)):je=h),Bn(e,i,i.pendingProps.children,r),oc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((h=l=je)&&(l=GE(l,i.type,i.pendingProps,Pi),l!==null?(i.stateNode=l,zn=i,je=Fi(l.firstChild),Pi=!1,h=!0):h=!1),h||ur(i)),Ht(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,Cd(h,m)?l=null:b!==null&&Cd(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=Rh(e,i,nE,null,null,r),Hl._currentValue=h),oc(e,i),Bn(e,i,l,r),i.child;case 6:return e===null&&Se&&((e=r=je)&&(r=VE(r,i.pendingProps,Pi),r!==null?(i.stateNode=r,zn=i,je=null,e=!0):e=!1),e||ur(i)),null;case 13:return vg(e,i,r);case 4:return At(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ss(i,null,l,r):Bn(e,i,l,r),i.child;case 11:return ug(e,i,i.type,i.pendingProps,r);case 7:return Bn(e,i,i.pendingProps,r),i.child;case 8:return Bn(e,i,i.pendingProps.children,r),i.child;case 12:return Bn(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,cr(i,i.type,l.value),Bn(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ns(i),h=Fn(h),l=l(h),i.flags|=1,Bn(e,i,l,r),i.child;case 14:return cg(e,i,i.type,i.pendingProps,r);case 15:return fg(e,i,i.type,i.pendingProps,r);case 19:return Sg(e,i,r);case 31:return cE(e,i,r);case 22:return hg(e,i,r,i.pendingProps);case 24:return ns(i),l=Fn(mn),e===null?(h=gh(),h===null&&(h=Xe,m=mh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},xh(i),cr(i,mn,h)):((e.lanes&r)!==0&&(Sh(e,i),Sl(i,null,null,r),xl()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),cr(i,mn,l)):(l=m.cache,cr(i,mn,l),l!==h.cache&&ph(i,[mn],r,!0))),Bn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Pa(e){e.flags|=4}function ed(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(jg())e.flags|=8192;else throw rs=qu,vh}else e.flags&=-16777217}function Mg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fv(i))if(jg())e.flags|=8192;else throw rs=qu,vh}function uc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Pe():536870912,e.lanes|=i,oo|=i)}function Al(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function hE(e,i,r){var l=i.pendingProps;switch(uh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ua(mn),Vt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(js(i)?Pa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,fh())),Ze(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Pa(i),m!==null?(Ze(i),Mg(i,m)):(Ze(i),ed(i,h,null,l,r))):m?m!==e.memoizedState?(Pa(i),Ze(i),Mg(i,m)):(Ze(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Pa(i),Ze(i),ed(i,h,e,l,r)),null;case 27:if(he(i),r=it.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}e=Mt.current,js(i)?e0(i):(e=wv(h,l,r),i.stateNode=e,Pa(i))}return Ze(i),null;case 5:if(he(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Pa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ze(i),null}if(m=Mt.current,js(i))e0(i);else{var b=bc(it.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(h,{is:l.is}):b.createElement(h)}}m[pn]=i,m[Dn]=l;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(In(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Pa(i)}}return Ze(i),ed(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Pa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=it.current,js(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=zn,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[pn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||vv(e.nodeValue,r)),e||ur(i,!0)}else e=bc(e).createTextNode(l),e[pn]=i,i.stateNode=e}return Ze(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=js(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[pn]=i}else ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),e=!1}else r=fh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(mi(i),i):(mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ze(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=js(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[pn]=i}else ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),h=!1}else h=fh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(mi(i),i):(mi(i),null)}return mi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),uc(i,i.updateQueue),Ze(i),null);case 4:return Vt(),e===null&&Ed(i.stateNode.containerInfo),Ze(i),null;case 10:return Ua(i.type),Ze(i),null;case 19:if(tt(un),l=i.memoizedState,l===null)return Ze(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Al(l,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Ku(e),m!==null){for(i.flags|=128,Al(l,!1),e=m.updateQueue,i.updateQueue=e,uc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)K_(r,e),r=r.sibling;return _t(un,un.current&1|2),Se&&wa(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&S()>pc&&(i.flags|=128,h=!0,Al(l,!1),i.lanes=4194304)}else{if(!h)if(e=Ku(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,uc(i,e),Al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Se)return Ze(i),null}else 2*S()-l.renderingStartTime>pc&&r!==536870912&&(i.flags|=128,h=!0,Al(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=S(),e.sibling=null,r=un.current,_t(un,h?r&1|2:r&1),Se&&wa(i,l.treeForkCount),e):(Ze(i),null);case 22:case 23:return mi(i),bh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),r=i.updateQueue,r!==null&&uc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&tt(is),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Ua(mn),Ze(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function dE(e,i){switch(uh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ua(mn),Vt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return he(i),null;case 31:if(i.memoizedState!==null){if(mi(i),i.alternate===null)throw Error(a(340));ts()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ts()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(un),null;case 4:return Vt(),null;case 10:return Ua(i.type),null;case 22:case 23:return mi(i),bh(),e!==null&&tt(is),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ua(mn),null;case 25:return null;default:return null}}function Eg(e,i){switch(uh(i),i.tag){case 3:Ua(mn),Vt();break;case 26:case 27:case 5:he(i);break;case 4:Vt();break;case 31:i.memoizedState!==null&&mi(i);break;case 13:mi(i);break;case 19:tt(un);break;case 10:Ua(i.type);break;case 22:case 23:mi(i),bh(),e!==null&&tt(is);break;case 24:Ua(mn)}}function Rl(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,b=r.inst;l=m(),b.destroy=l}r=r.next}while(r!==h)}}catch(w){Be(i,i.return,w)}}function _r(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var b=l.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,h=i;var k=r,nt=w;try{nt()}catch(pt){Be(h,k,pt)}}}l=l.next}while(l!==m)}}catch(pt){Be(i,i.return,pt)}}function bg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{p0(i,r)}catch(l){Be(e,e.return,l)}}}function Tg(e,i,r){r.props=ls(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){Be(e,i,l)}}function Cl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){Be(e,i,h)}}function ha(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){Be(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Be(e,i,h)}else r.current=null}function Ag(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){Be(e,e.return,h)}}function nd(e,i,r){try{var l=e.stateNode;PE(l,e.type,r,i),l[Dn]=i}catch(h){Be(e,e.return,h)}}function Rg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function id(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Rg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ad(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Aa));else if(l!==4&&(l===27&&Er(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(ad(e,i,r),e=e.sibling;e!==null;)ad(e,i,r),e=e.sibling}function cc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Er(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(cc(e,i,r),e=e.sibling;e!==null;)cc(e,i,r),e=e.sibling}function Cg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);In(i,l,r),i[pn]=e,i[Dn]=r}catch(m){Be(e,e.return,m)}}var za=!1,vn=!1,rd=!1,wg=typeof WeakSet=="function"?WeakSet:Set,An=null;function pE(e,i){if(e=e.containerInfo,Ad=Uc,e=G_(e),Jf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,w=-1,k=-1,nt=0,pt=0,gt=e,ot=null;e:for(;;){for(var ft;gt!==r||h!==0&&gt.nodeType!==3||(w=b+h),gt!==m||l!==0&&gt.nodeType!==3||(k=b+l),gt.nodeType===3&&(b+=gt.nodeValue.length),(ft=gt.firstChild)!==null;)ot=gt,gt=ft;for(;;){if(gt===e)break e;if(ot===r&&++nt===h&&(w=b),ot===m&&++pt===l&&(k=b),(ft=gt.nextSibling)!==null)break;gt=ot,ot=gt.parentNode}gt=ft}r=w===-1||k===-1?null:{start:w,end:k}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rd={focusedElem:e,selectionRange:r},Uc=!1,An=i;An!==null;)if(i=An,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,An=e;else for(;An!==null;){switch(i=An,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Xt=ls(r.type,h);e=l.getSnapshotBeforeUpdate(Xt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(r,r.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Dd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,An=e;break}An=i.return}}function Dg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:Ba(e,r),l&4&&Rl(5,r);break;case 1:if(Ba(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){Be(r,r.return,b)}else{var h=ls(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Be(r,r.return,b)}}l&64&&bg(r),l&512&&Cl(r,r.return);break;case 3:if(Ba(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{p0(e,i)}catch(b){Be(r,r.return,b)}}break;case 27:i===null&&l&4&&Cg(r);case 26:case 5:Ba(e,r),i===null&&l&4&&Ag(r),l&512&&Cl(r,r.return);break;case 12:Ba(e,r);break;case 31:Ba(e,r),l&4&&Ng(e,r);break;case 13:Ba(e,r),l&4&&Og(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=EE.bind(null,r),kE(e,r))));break;case 22:if(l=r.memoizedState!==null||za,!l){i=i!==null&&i.memoizedState!==null||vn,h=za;var m=vn;za=l,(vn=i)&&!m?Ia(e,r,(r.subtreeFlags&8772)!==0):Ba(e,r),za=h,vn=m}break;case 30:break;default:Ba(e,r)}}function Ug(e){var i=e.alternate;i!==null&&(e.alternate=null,Ug(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&nl(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,$n=!1;function Fa(e,i,r){for(r=r.child;r!==null;)Lg(e,i,r),r=r.sibling}function Lg(e,i,r){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:vn||ha(r,i),Fa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vn||ha(r,i);var l=$e,h=$n;Er(r.type)&&($e=r.stateNode,$n=!1),Fa(e,i,r),Fl(r.stateNode),$e=l,$n=h;break;case 5:vn||ha(r,i);case 6:if(l=$e,h=$n,$e=null,Fa(e,i,r),$e=l,$n=h,$e!==null)if($n)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(r.stateNode)}catch(m){Be(r,i,m)}else try{$e.removeChild(r.stateNode)}catch(m){Be(r,i,m)}break;case 18:$e!==null&&($n?(e=$e,bv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),_o(e)):bv($e,r.stateNode));break;case 4:l=$e,h=$n,$e=r.stateNode.containerInfo,$n=!0,Fa(e,i,r),$e=l,$n=h;break;case 0:case 11:case 14:case 15:_r(2,r,i),vn||_r(4,r,i),Fa(e,i,r);break;case 1:vn||(ha(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Tg(r,i,l)),Fa(e,i,r);break;case 21:Fa(e,i,r);break;case 22:vn=(l=vn)||r.memoizedState!==null,Fa(e,i,r),vn=l;break;default:Fa(e,i,r)}}function Ng(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{_o(e)}catch(r){Be(i,i.return,r)}}}function Og(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{_o(e)}catch(r){Be(i,i.return,r)}}function mE(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new wg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new wg),i;default:throw Error(a(435,e.tag))}}function fc(e,i){var r=mE(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=bE.bind(null,e,l);l.then(h,h)}})}function ti(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,b=i,w=b;t:for(;w!==null;){switch(w.tag){case 27:if(Er(w.type)){$e=w.stateNode,$n=!1;break t}break;case 5:$e=w.stateNode,$n=!1;break t;case 3:case 4:$e=w.stateNode.containerInfo,$n=!0;break t}w=w.return}if($e===null)throw Error(a(160));Lg(m,b,h),$e=null,$n=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Pg(i,e),i=i.sibling}var Qi=null;function Pg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(i,e),ei(e),l&4&&(_r(3,e,e.return),Rl(3,e),_r(5,e,e.return));break;case 1:ti(i,e),ei(e),l&512&&(vn||r===null||ha(r,r.return)),l&64&&za&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Qi;if(ti(i,e),ei(e),l&512&&(vn||r===null||ha(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Yr]||m[pn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),In(m,l,r),m[pn]=e,D(m),l=m;break t;case"link":var b=Pv("link","href",h).get(l+(r.href||""));if(b){for(var w=0;w<b.length;w++)if(m=b[w],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(w,1);break e}}m=h.createElement(l),In(m,l,r),h.head.appendChild(m);break;case"meta":if(b=Pv("meta","content",h).get(l+(r.content||""))){for(w=0;w<b.length;w++)if(m=b[w],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(w,1);break e}}m=h.createElement(l),In(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[pn]=e,D(m),l=m}e.stateNode=l}else zv(h,e.type,e.stateNode);else e.stateNode=Ov(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?zv(h,e.type,e.stateNode):Ov(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&nd(e,e.memoizedProps,r.memoizedProps)}break;case 27:ti(i,e),ei(e),l&512&&(vn||r===null||ha(r,r.return)),r!==null&&l&4&&nd(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ti(i,e),ei(e),l&512&&(vn||r===null||ha(r,r.return)),e.flags&32){h=e.stateNode;try{Mn(h,"")}catch(Xt){Be(e,e.return,Xt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,nd(e,h,r!==null?r.memoizedProps:h)),l&1024&&(rd=!0);break;case 6:if(ti(i,e),ei(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Xt){Be(e,e.return,Xt)}}break;case 3:if(Rc=null,h=Qi,Qi=Tc(i.containerInfo),ti(i,e),Qi=h,ei(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{_o(i.containerInfo)}catch(Xt){Be(e,e.return,Xt)}rd&&(rd=!1,zg(e));break;case 4:l=Qi,Qi=Tc(e.stateNode.containerInfo),ti(i,e),ei(e),Qi=l;break;case 12:ti(i,e),ei(e);break;case 31:ti(i,e),ei(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 13:ti(i,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(dc=S()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:h=e.memoizedState!==null;var k=r!==null&&r.memoizedState!==null,nt=za,pt=vn;if(za=nt||h,vn=pt||k,ti(i,e),vn=pt,za=nt,ei(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||k||za||vn||us(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){k=r=i;try{if(m=k.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=k.stateNode;var gt=k.memoizedProps.style,ot=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;w.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Xt){Be(k,k.return,Xt)}}}else if(i.tag===6){if(r===null){k=i;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(Xt){Be(k,k.return,Xt)}}}else if(i.tag===18){if(r===null){k=i;try{var ft=k.stateNode;h?Tv(ft,!0):Tv(k.stateNode,!1)}catch(Xt){Be(k,k.return,Xt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,fc(e,r))));break;case 19:ti(i,e),ei(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:ti(i,e),ei(e)}}function ei(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Rg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=id(e);cc(e,m,h);break;case 5:var b=r.stateNode;r.flags&32&&(Mn(b,""),r.flags&=-33);var w=id(e);cc(e,w,b);break;case 3:case 4:var k=r.stateNode.containerInfo,nt=id(e);ad(e,nt,k);break;default:throw Error(a(161))}}catch(pt){Be(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function zg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;zg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ba(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Dg(e,i.alternate,i),i=i.sibling}function us(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:_r(4,i,i.return),us(i);break;case 1:ha(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Tg(i,i.return,r),us(i);break;case 27:Fl(i.stateNode);case 26:case 5:ha(i,i.return),us(i);break;case 22:i.memoizedState===null&&us(i);break;case 30:us(i);break;default:us(i)}e=e.sibling}}function Ia(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(h,m,r),Rl(4,m);break;case 1:if(Ia(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Be(l,l.return,nt)}if(l=m,h=l.updateQueue,h!==null){var w=l.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)d0(k[h],w)}catch(nt){Be(l,l.return,nt)}}r&&b&64&&bg(m),Cl(m,m.return);break;case 27:Cg(m);case 26:case 5:Ia(h,m,r),r&&l===null&&b&4&&Ag(m),Cl(m,m.return);break;case 12:Ia(h,m,r);break;case 31:Ia(h,m,r),r&&b&4&&Ng(h,m);break;case 13:Ia(h,m,r),r&&b&4&&Og(h,m);break;case 22:m.memoizedState===null&&Ia(h,m,r),Cl(m,m.return);break;case 30:break;default:Ia(h,m,r)}i=i.sibling}}function sd(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&pl(r))}function od(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&pl(e))}function Ji(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Fg(e,i,r,l),i=i.sibling}function Fg(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ji(e,i,r,l),h&2048&&Rl(9,i);break;case 1:Ji(e,i,r,l);break;case 3:Ji(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&pl(e)));break;case 12:if(h&2048){Ji(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,w=m.onPostCommit;typeof w=="function"&&w(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Be(i,i.return,k)}}else Ji(e,i,r,l);break;case 31:Ji(e,i,r,l);break;case 13:Ji(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ji(e,i,r,l):wl(e,i):m._visibility&2?Ji(e,i,r,l):(m._visibility|=2,ao(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&sd(b,i);break;case 24:Ji(e,i,r,l),h&2048&&od(i.alternate,i);break;default:Ji(e,i,r,l)}}function ao(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,w=r,k=l,nt=b.flags;switch(b.tag){case 0:case 11:case 15:ao(m,b,w,k,h),Rl(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?ao(m,b,w,k,h):wl(m,b):(pt._visibility|=2,ao(m,b,w,k,h)),h&&nt&2048&&sd(b.alternate,b);break;case 24:ao(m,b,w,k,h),h&&nt&2048&&od(b.alternate,b);break;default:ao(m,b,w,k,h)}i=i.sibling}}function wl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:wl(r,l),h&2048&&sd(l.alternate,l);break;case 24:wl(r,l),h&2048&&od(l.alternate,l);break;default:wl(r,l)}i=i.sibling}}var Dl=8192;function ro(e,i,r){if(e.subtreeFlags&Dl)for(e=e.child;e!==null;)Bg(e,i,r),e=e.sibling}function Bg(e,i,r){switch(e.tag){case 26:ro(e,i,r),e.flags&Dl&&e.memoizedState!==null&&eb(r,Qi,e.memoizedState,e.memoizedProps);break;case 5:ro(e,i,r);break;case 3:case 4:var l=Qi;Qi=Tc(e.stateNode.containerInfo),ro(e,i,r),Qi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Dl,Dl=16777216,ro(e,i,r),Dl=l):ro(e,i,r));break;default:ro(e,i,r)}}function Ig(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ul(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];An=l,Gg(l,e)}Ig(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hg(e),e=e.sibling}function Hg(e){switch(e.tag){case 0:case 11:case 15:Ul(e),e.flags&2048&&_r(9,e,e.return);break;case 3:Ul(e);break;case 12:Ul(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,hc(e)):Ul(e);break;default:Ul(e)}}function hc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];An=l,Gg(l,e)}Ig(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:_r(8,i,i.return),hc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,hc(i));break;default:hc(i)}e=e.sibling}}function Gg(e,i){for(;An!==null;){var r=An;switch(r.tag){case 0:case 11:case 15:_r(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:pl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,An=l;else t:for(r=e;An!==null;){l=An;var h=l.sibling,m=l.return;if(Ug(l),l===r){An=null;break t}if(h!==null){h.return=m,An=h;break t}An=m}}}var _E={getCacheForType:function(e){var i=Fn(mn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Fn(mn).controller.signal}},gE=typeof WeakMap=="function"?WeakMap:Map,Le=0,Xe=null,me=null,ge=0,Fe=0,_i=null,gr=!1,so=!1,ld=!1,Ha=0,sn=0,vr=0,cs=0,ud=0,gi=0,oo=0,Ll=null,ni=null,cd=!1,dc=0,Vg=0,pc=1/0,mc=null,xr=null,En=0,Sr=null,lo=null,Ga=0,fd=0,hd=null,kg=null,Nl=0,dd=null;function vi(){return(Le&2)!==0&&ge!==0?ge&-ge:F.T!==null?xd():tl()}function Xg(){if(gi===0)if((ge&536870912)===0||Se){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),gi=e}else gi=536870912;return e=pi.current,e!==null&&(e.flags|=32),gi}function ii(e,i,r){(e===Xe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(uo(e,0),yr(e,ge,gi,!1)),Vn(e,r),((Le&2)===0||e!==Xe)&&(e===Xe&&((Le&2)===0&&(cs|=r),sn===4&&yr(e,ge,gi,!1)),da(e))}function Wg(e,i,r){if((Le&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Ct(e,i),h=l?SE(e,i):md(e,i,!0),m=l;do{if(h===0){so&&!l&&yr(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!vE(r)){h=md(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var w=e;h=Ll;var k=w.current.memoizedState.isDehydrated;if(k&&(uo(w,b).flags|=256),b=md(w,b,!1),b!==2){if(ld&&!k){w.errorRecoveryDisabledLanes|=m,cs|=m,h=4;break t}m=ni,ni=h,m!==null&&(ni===null?ni=m:ni.push.apply(ni,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){uo(e,0),yr(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,gi,!gr);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=dc+300-S(),10<h)){if(yr(l,i,gi,!gr),vt(l,0,!0)!==0)break t;Ga=i,l.timeoutHandle=Mv(qg.bind(null,l,r,ni,mc,cd,i,gi,cs,oo,gr,m,"Throttled",-0,0),h);break t}qg(l,r,ni,mc,cd,i,gi,cs,oo,gr,m,null,-0,0)}}break}while(!0);da(e)}function qg(e,i,r,l,h,m,b,w,k,nt,pt,gt,ot,ft){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Aa},Bg(i,m,gt);var Xt=(m&62914560)===m?dc-S():(m&4194048)===m?Vg-S():0;if(Xt=nb(gt,Xt),Xt!==null){Ga=m,e.cancelPendingCommit=Xt(tv.bind(null,e,i,m,r,l,h,b,w,k,pt,gt,null,ot,ft)),yr(e,m,b,!nt);return}}tv(e,i,m,r,l,h,b,w,k)}function vE(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!hi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,r,l){i&=~ud,i&=~cs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-zt(h),b=1<<m;l[m]=-1,h&=~b}r!==0&&Ru(e,r,i)}function _c(){return(Le&6)===0?(Ol(0),!1):!0}function pd(){if(me!==null){if(Fe===0)var e=me.return;else e=me,Da=es=null,Dh(e),$s=null,_l=0,e=me;for(;e!==null;)Eg(e.alternate,e),e=e.return;me=null}}function uo(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,BE(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ga=0,pd(),Xe=e,me=r=Ca(e.current,null),ge=i,Fe=0,_i=null,gr=!1,so=Ct(e,i),ld=!1,oo=gi=ud=cs=vr=sn=0,ni=Ll=null,cd=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-zt(l),m=1<<h;i|=e[h],l&=~m}return Ha=i,Fu(),r}function Yg(e,i){oe=null,F.H=bl,i===Js||i===Wu?(i=u0(),Fe=3):i===vh?(i=u0(),Fe=4):Fe=i===qh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,_i=i,me===null&&(sn=1,rc(e,Li(i,e.current)))}function jg(){var e=pi.current;return e===null?!0:(ge&4194048)===ge?zi===null:(ge&62914560)===ge||(ge&536870912)!==0?e===zi:!1}function Zg(){var e=F.H;return F.H=bl,e===null?bl:e}function Kg(){var e=F.A;return F.A=_E,e}function gc(){sn=4,gr||(ge&4194048)!==ge&&pi.current!==null||(so=!0),(vr&134217727)===0&&(cs&134217727)===0||Xe===null||yr(Xe,ge,gi,!1)}function md(e,i,r){var l=Le;Le|=2;var h=Zg(),m=Kg();(Xe!==e||ge!==i)&&(mc=null,uo(e,i)),i=!1;var b=sn;t:do try{if(Fe!==0&&me!==null){var w=me,k=_i;switch(Fe){case 8:pd(),b=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var nt=Fe;if(Fe=0,_i=null,co(e,w,k,nt),r&&so){b=0;break t}break;default:nt=Fe,Fe=0,_i=null,co(e,w,k,nt)}}xE(),b=sn;break}catch(pt){Yg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Da=es=null,Le=l,F.H=h,F.A=m,me===null&&(Xe=null,ge=0,Fu()),b}function xE(){for(;me!==null;)Qg(me)}function SE(e,i){var r=Le;Le|=2;var l=Zg(),h=Kg();Xe!==e||ge!==i?(mc=null,pc=S()+500,uo(e,i)):so=Ct(e,i);t:do try{if(Fe!==0&&me!==null){i=me;var m=_i;e:switch(Fe){case 1:Fe=0,_i=null,co(e,i,m,1);break;case 2:case 9:if(o0(m)){Fe=0,_i=null,Jg(i);break}i=function(){Fe!==2&&Fe!==9||Xe!==e||(Fe=7),da(e)},m.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:o0(m)?(Fe=0,_i=null,Jg(i)):(Fe=0,_i=null,co(e,i,m,7));break;case 5:var b=null;switch(me.tag){case 26:b=me.memoizedState;case 5:case 27:var w=me;if(b?Fv(b):w.stateNode.complete){Fe=0,_i=null;var k=w.sibling;if(k!==null)me=k;else{var nt=w.return;nt!==null?(me=nt,vc(nt)):me=null}break e}}Fe=0,_i=null,co(e,i,m,5);break;case 6:Fe=0,_i=null,co(e,i,m,6);break;case 8:pd(),sn=6;break t;default:throw Error(a(462))}}yE();break}catch(pt){Yg(e,pt)}while(!0);return Da=es=null,F.H=l,F.A=h,Le=r,me!==null?0:(Xe=null,ge=0,Fu(),sn)}function yE(){for(;me!==null&&!Wt();)Qg(me)}function Qg(e){var i=yg(e.alternate,e,Ha);e.memoizedProps=e.pendingProps,i===null?vc(e):me=i}function Jg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=mg(r,i,i.pendingProps,i.type,void 0,ge);break;case 11:i=mg(r,i,i.pendingProps,i.type.render,i.ref,ge);break;case 5:Dh(i);default:Eg(r,i),i=me=K_(i,Ha),i=yg(r,i,Ha)}e.memoizedProps=e.pendingProps,i===null?vc(e):me=i}function co(e,i,r,l){Da=es=null,Dh(i),$s=null,_l=0;var h=i.return;try{if(uE(e,h,i,r,ge)){sn=1,rc(e,Li(r,e.current)),me=null;return}}catch(m){if(h!==null)throw me=h,m;sn=1,rc(e,Li(r,e.current)),me=null;return}i.flags&32768?(Se||l===1?e=!0:so||(ge&536870912)!==0?e=!1:(gr=e=!0,(l===2||l===9||l===3||l===6)&&(l=pi.current,l!==null&&l.tag===13&&(l.flags|=16384))),$g(i,e)):vc(i)}function vc(e){var i=e;do{if((i.flags&32768)!==0){$g(i,gr);return}e=i.return;var r=hE(i.alternate,i,Ha);if(r!==null){me=r;return}if(i=i.sibling,i!==null){me=i;return}me=i=e}while(i!==null);sn===0&&(sn=5)}function $g(e,i){do{var r=dE(e.alternate,e);if(r!==null){r.flags&=32767,me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){me=e;return}me=e=r}while(e!==null);sn=6,me=null}function tv(e,i,r,l,h,m,b,w,k){e.cancelPendingCommit=null;do xc();while(En!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=ih,Yi(e,r,m,b,w,k),e===Xe&&(me=Xe=null,ge=0),lo=i,Sr=e,Ga=r,fd=m,hd=h,kg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,TE(at,function(){return rv(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=H.p,H.p=2,b=Le,Le|=4;try{pE(e,i,r)}finally{Le=b,H.p=h,F.T=l}}En=1,ev(),nv(),iv()}}function ev(){if(En===1){En=0;var e=Sr,i=lo,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var h=Le;Le|=4;try{Pg(i,e);var m=Rd,b=G_(e.containerInfo),w=m.focusedElem,k=m.selectionRange;if(b!==w&&w&&w.ownerDocument&&H_(w.ownerDocument.documentElement,w)){if(k!==null&&Jf(w)){var nt=k.start,pt=k.end;if(pt===void 0&&(pt=nt),"selectionStart"in w)w.selectionStart=nt,w.selectionEnd=Math.min(pt,w.value.length);else{var gt=w.ownerDocument||document,ot=gt&&gt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Xt=w.textContent.length,te=Math.min(k.start,Xt),Ve=k.end===void 0?te:Math.min(k.end,Xt);!ft.extend&&te>Ve&&(b=Ve,Ve=te,te=b);var j=I_(w,te),W=I_(w,Ve);if(j&&W&&(ft.rangeCount!==1||ft.anchorNode!==j.node||ft.anchorOffset!==j.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var et=gt.createRange();et.setStart(j.node,j.offset),ft.removeAllRanges(),te>Ve?(ft.addRange(et),ft.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ft.addRange(et))}}}}for(gt=[],ft=w;ft=ft.parentNode;)ft.nodeType===1&&gt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<gt.length;w++){var mt=gt[w];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Uc=!!Ad,Rd=Ad=null}finally{Le=h,H.p=l,F.T=r}}e.current=i,En=2}}function nv(){if(En===2){En=0;var e=Sr,i=lo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var h=Le;Le|=4;try{Dg(e,i.alternate,i)}finally{Le=h,H.p=l,F.T=r}}En=3}}function iv(){if(En===4||En===3){En=0,P();var e=Sr,i=lo,r=Ga,l=kg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?En=5:(En=0,lo=Sr=null,av(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(xr=null),Ps(r),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=H.p,H.p=2,F.T=null;try{for(var m=e.onRecoverableError,b=0;b<l.length;b++){var w=l[b];m(w.value,{componentStack:w.stack})}}finally{F.T=i,H.p=h}}(Ga&3)!==0&&xc(),da(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===dd?Nl++:(Nl=0,dd=e):Nl=0,Ol(0)}}function av(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,pl(i)))}function xc(){return ev(),nv(),iv(),rv()}function rv(){if(En!==5)return!1;var e=Sr,i=fd;fd=0;var r=Ps(Ga),l=F.T,h=H.p;try{H.p=32>r?32:r,F.T=null,r=hd,hd=null;var m=Sr,b=Ga;if(En=0,lo=Sr=null,Ga=0,(Le&6)!==0)throw Error(a(331));var w=Le;if(Le|=4,Hg(m.current),Fg(m,m.current,b,r),Le=w,Ol(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,m)}catch{}return!0}finally{H.p=h,F.T=l,av(e,i)}}function sv(e,i,r){i=Li(r,i),i=Wh(e.stateNode,i,2),e=dr(e,i,2),e!==null&&(Vn(e,2),da(e))}function Be(e,i,r){if(e.tag===3)sv(e,e,r);else for(;i!==null;){if(i.tag===3){sv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(xr===null||!xr.has(l))){e=Li(r,e),r=og(2),l=dr(i,r,2),l!==null&&(lg(r,l,i,e),Vn(l,2),da(l));break}}i=i.return}}function _d(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new gE;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(ld=!0,h.add(r),e=ME.bind(null,e,i,r),i.then(e,e))}function ME(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(ge&r)===r&&(sn===4||sn===3&&(ge&62914560)===ge&&300>S()-dc?(Le&2)===0&&uo(e,0):ud|=r,oo===ge&&(oo=0)),da(e)}function ov(e,i){i===0&&(i=Pe()),e=Jr(e,i),e!==null&&(Vn(e,i),da(e))}function EE(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),ov(e,r)}function bE(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),ov(e,r)}function TE(e,i){return xe(e,i)}var Sc=null,fo=null,gd=!1,yc=!1,vd=!1,Mr=0;function da(e){e!==fo&&e.next===null&&(fo===null?Sc=fo=e:fo=fo.next=e),yc=!0,gd||(gd=!0,RE())}function Ol(e,i){if(!vd&&yc){vd=!0;do for(var r=!1,l=Sc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var b=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-zt(42|e)+1)-1,m&=h&~(b&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,fv(l,m))}else m=ge,m=vt(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ct(l,m)||(r=!0,fv(l,m));l=l.next}while(r);vd=!1}}function AE(){lv()}function lv(){yc=gd=!1;var e=0;Mr!==0&&FE()&&(e=Mr);for(var i=S(),r=null,l=Sc;l!==null;){var h=l.next,m=uv(l,i);m===0?(l.next=null,r===null?Sc=h:r.next=h,h===null&&(fo=r)):(r=l,(e!==0||(m&3)!==0)&&(yc=!0)),l=h}En!==0&&En!==5||Ol(e),Mr!==0&&(Mr=0)}function uv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-zt(m),w=1<<b,k=h[b];k===-1?((w&r)===0||(w&l)!==0)&&(h[b]=ee(w,i)):k<=i&&(e.expiredLanes|=w),m&=~w}if(i=Xe,r=ge,r=vt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&be(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Ct(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&be(l),Ps(r)){case 2:case 8:r=ht;break;case 32:r=at;break;case 268435456:r=Rt;break;default:r=at}return l=cv.bind(null,e),r=xe(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&be(l),e.callbackPriority=2,e.callbackNode=null,2}function cv(e,i){if(En!==0&&En!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(xc()&&e.callbackNode!==r)return null;var l=ge;return l=vt(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Wg(e,l,i),uv(e,S()),e.callbackNode!=null&&e.callbackNode===r?cv.bind(null,e):null)}function fv(e,i){if(xc())return null;Wg(e,i,!0)}function RE(){IE(function(){(Le&6)!==0?xe(Q,AE):lv()})}function xd(){if(Mr===0){var e=Ks;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Mr=e}return Mr}function hv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wu(""+e)}function dv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function CE(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=hv((h[Dn]||null).action),b=l.submitter;b&&(i=(i=b[Dn]||null)?hv(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var w=new Nu("action","action",null,l,h);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Mr!==0){var k=b?dv(h,b):new FormData(h);Ih(r,{pending:!0,data:k,method:h.method,action:m},null,k)}}else typeof m=="function"&&(w.preventDefault(),k=b?dv(h,b):new FormData(h),Ih(r,{pending:!0,data:k,method:h.method,action:m},m,k))},currentTarget:h}]})}}for(var Sd=0;Sd<nh.length;Sd++){var yd=nh[Sd],wE=yd.toLowerCase(),DE=yd[0].toUpperCase()+yd.slice(1);Ki(wE,"on"+DE)}Ki(X_,"onAnimationEnd"),Ki(W_,"onAnimationIteration"),Ki(q_,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(qM,"onTransitionRun"),Ki(YM,"onTransitionStart"),Ki(jM,"onTransitionCancel"),Ki(Y_,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pl));function pv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var w=l[b],k=w.instance,nt=w.currentTarget;if(w=w.listener,k!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=nt;try{m(h)}catch(pt){zu(pt)}h.currentTarget=null,m=k}else for(b=0;b<l.length;b++){if(w=l[b],k=w.instance,nt=w.currentTarget,w=w.listener,k!==m&&h.isPropagationStopped())break t;m=w,h.currentTarget=nt;try{m(h)}catch(pt){zu(pt)}h.currentTarget=null,m=k}}}}function _e(e,i){var r=i[zs];r===void 0&&(r=i[zs]=new Set);var l=e+"__bubble";r.has(l)||(mv(i,e,2,!1),r.add(l))}function Md(e,i,r){var l=0;i&&(l|=4),mv(r,e,l,i)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Ed(e){if(!e[Mc]){e[Mc]=!0,Y.forEach(function(r){r!=="selectionchange"&&(UE.has(r)||Md(r,!1,e),Md(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Mc]||(i[Mc]=!0,Md("selectionchange",!1,i))}}function mv(e,i,r,l){switch(Xv(i)){case 2:var h=rb;break;case 8:h=sb;break;default:h=Bd}r=h.bind(null,i,r,e),h=void 0,!kf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function bd(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===h)break;if(b===4)for(b=l.return;b!==null;){var k=b.tag;if((k===3||k===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;w!==null;){if(b=ir(w),b===null)return;if(k=b.tag,k===5||k===6||k===26||k===27){l=m=b;continue t}w=w.parentNode}}l=l.return}S_(function(){var nt=m,pt=Gf(r),gt=[];t:{var ot=j_.get(e);if(ot!==void 0){var ft=Nu,Xt=e;switch(e){case"keypress":if(Uu(r)===0)break t;case"keydown":case"keyup":ft=bM;break;case"focusin":Xt="focus",ft=Yf;break;case"focusout":Xt="blur",ft=Yf;break;case"beforeblur":case"afterblur":ft=Yf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=E_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=hM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=RM;break;case X_:case W_:case q_:ft=mM;break;case Y_:ft=wM;break;case"scroll":case"scrollend":ft=cM;break;case"wheel":ft=UM;break;case"copy":case"cut":case"paste":ft=gM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=T_;break;case"toggle":case"beforetoggle":ft=NM}var te=(i&4)!==0,Ve=!te&&(e==="scroll"||e==="scrollend"),j=te?ot!==null?ot+"Capture":null:ot;te=[];for(var W=nt,et;W!==null;){var mt=W;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||j===null||(mt=il(W,j),mt!=null&&te.push(zl(W,mt,et))),Ve)break;W=W.return}0<te.length&&(ot=new ft(ot,Xt,null,r,pt),gt.push({event:ot,listeners:te}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&r!==Hf&&(Xt=r.relatedTarget||r.fromElement)&&(ir(Xt)||Xt[ji]))break t;if((ft||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Xt=r.relatedTarget||r.toElement,ft=nt,Xt=Xt?ir(Xt):null,Xt!==null&&(Ve=u(Xt),te=Xt.tag,Xt!==Ve||te!==5&&te!==27&&te!==6)&&(Xt=null)):(ft=null,Xt=nt),ft!==Xt)){if(te=E_,mt="onMouseLeave",j="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=T_,mt="onPointerLeave",j="onPointerEnter",W="pointer"),Ve=ft==null?ot:jr(ft),et=Xt==null?ot:jr(Xt),ot=new te(mt,W+"leave",ft,r,pt),ot.target=Ve,ot.relatedTarget=et,mt=null,ir(pt)===nt&&(te=new te(j,W+"enter",Xt,r,pt),te.target=et,te.relatedTarget=Ve,mt=te),Ve=mt,ft&&Xt)e:{for(te=LE,j=ft,W=Xt,et=0,mt=j;mt;mt=te(mt))et++;mt=0;for(var Kt=W;Kt;Kt=te(Kt))mt++;for(;0<et-mt;)j=te(j),et--;for(;0<mt-et;)W=te(W),mt--;for(;et--;){if(j===W||W!==null&&j===W.alternate){te=j;break e}j=te(j),W=te(W)}te=null}else te=null;ft!==null&&_v(gt,ot,ft,te,!1),Xt!==null&&Ve!==null&&_v(gt,Ve,Xt,te,!0)}}t:{if(ot=nt?jr(nt):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Re=N_;else if(U_(ot))if(O_)Re=kM;else{Re=GM;var jt=HM}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&Zi(nt.elementType)&&(Re=N_):Re=VM;if(Re&&(Re=Re(e,nt))){L_(gt,Re,r,pt);break t}jt&&jt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&Ln(ot,"number",ot.value)}switch(jt=nt?jr(nt):window,e){case"focusin":(U_(jt)||jt.contentEditable==="true")&&(Vs=jt,$f=nt,fl=null);break;case"focusout":fl=$f=Vs=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,V_(gt,r,pt);break;case"selectionchange":if(WM)break;case"keydown":case"keyup":V_(gt,r,pt)}var ue;if(Zf)t:{switch(e){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Gs?w_(e,r)&&(ve="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ve="onCompositionStart");ve&&(A_&&r.locale!=="ko"&&(Gs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Gs&&(ue=y_()):(sr=pt,Xf="value"in sr?sr.value:sr.textContent,Gs=!0)),jt=Ec(nt,ve),0<jt.length&&(ve=new b_(ve,e,null,r,pt),gt.push({event:ve,listeners:jt}),ue?ve.data=ue:(ue=D_(r),ue!==null&&(ve.data=ue)))),(ue=PM?zM(e,r):FM(e,r))&&(ve=Ec(nt,"onBeforeInput"),0<ve.length&&(jt=new b_("onBeforeInput","beforeinput",null,r,pt),gt.push({event:jt,listeners:ve}),jt.data=ue)),CE(gt,e,nt,r,pt)}pv(gt,i)})}function zl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Ec(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=il(e,r),h!=null&&l.unshift(zl(e,h,m)),h=il(e,i),h!=null&&l.push(zl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function LE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _v(e,i,r,l,h){for(var m=i._reactName,b=[];r!==null&&r!==l;){var w=r,k=w.alternate,nt=w.stateNode;if(w=w.tag,k!==null&&k===l)break;w!==5&&w!==26&&w!==27||nt===null||(k=nt,h?(nt=il(r,m),nt!=null&&b.unshift(zl(r,nt,k))):h||(nt=il(r,m),nt!=null&&b.push(zl(r,nt,k)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var NE=/\r\n?/g,OE=/\u0000|\uFFFD/g;function gv(e){return(typeof e=="string"?e:""+e).replace(NE,`
`).replace(OE,"")}function vv(e,i){return i=gv(i),gv(e)===i}function Ge(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Mn(e,""+l);break;case"className":Jt(e,"class",l);break;case"tabIndex":Jt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,r,l);break;case"style":Bs(e,l,m);break;case"data":if(i!=="object"){Jt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=wu(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ge(e,i,"name",h.name,h,null),Ge(e,i,"formEncType",h.formEncType,h,null),Ge(e,i,"formMethod",h.formMethod,h,null),Ge(e,i,"formTarget",h.formTarget,h,null)):(Ge(e,i,"encType",h.encType,h,null),Ge(e,i,"method",h.method,h,null),Ge(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=wu(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Aa);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=wu(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":_e("beforetoggle",e),_e("toggle",e),qt(e,"popover",l);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":qt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=lM.get(r)||r,qt(e,r,l))}}function Td(e,i,r,l,h,m){switch(r){case"style":Bs(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Mn(e,l):(typeof l=="number"||typeof l=="bigint")&&Mn(e,""+l);break;case"onScroll":l!=null&&_e("scroll",e);break;case"onScrollEnd":l!=null&&_e("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Dn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):qt(e,r,l)}}}function In(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",e),_e("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,m,b,r,null)}}h&&Ge(e,i,"srcSet",r.srcSet,r,null),l&&Ge(e,i,"src",r.src,r,null);return;case"input":_e("invalid",e);var w=m=b=h=null,k=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":h=pt;break;case"type":b=pt;break;case"checked":k=pt;break;case"defaultChecked":nt=pt;break;case"value":m=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Ge(e,i,l,pt,r,null)}}Ta(e,m,w,k,nt,b,h,!1);return;case"select":_e("invalid",e),l=b=m=null;for(h in r)if(r.hasOwnProperty(h)&&(w=r[h],w!=null))switch(h){case"value":m=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:Ge(e,i,h,w,r,null)}i=m,r=b,e.multiple=!!l,i!=null?Di(e,!!l,i,!1):r!=null&&Di(e,!!l,r,!0);return;case"textarea":_e("invalid",e),m=h=l=null;for(b in r)if(r.hasOwnProperty(b)&&(w=r[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":h=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ge(e,i,b,w,r,null)}Nn(e,l,h,m);return;case"option":for(k in r)r.hasOwnProperty(k)&&(l=r[k],l!=null)&&(k==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ge(e,i,k,l,r,null));return;case"dialog":_e("beforetoggle",e),_e("toggle",e),_e("cancel",e),_e("close",e);break;case"iframe":case"object":_e("load",e);break;case"video":case"audio":for(l=0;l<Pl.length;l++)_e(Pl[l],e);break;case"image":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"embed":case"source":case"link":_e("error",e),_e("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(e,i,nt,l,r,null)}return;default:if(Zi(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&Td(e,i,pt,l,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(l=r[w],l!=null&&Ge(e,i,w,l,r,null))}function PE(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,w=null,k=null,nt=null,pt=null;for(ft in r){var gt=r[ft];if(r.hasOwnProperty(ft)&&gt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":k=gt;default:l.hasOwnProperty(ft)||Ge(e,i,ft,null,l,gt)}}for(var ot in l){var ft=l[ot];if(gt=r[ot],l.hasOwnProperty(ot)&&(ft!=null||gt!=null))switch(ot){case"type":m=ft;break;case"name":h=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":b=ft;break;case"defaultValue":w=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==gt&&Ge(e,i,ot,ft,l,gt)}}Un(e,b,w,k,nt,pt,m,h);return;case"select":ft=b=w=ot=null;for(m in r)if(k=r[m],r.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ft=k;default:l.hasOwnProperty(m)||Ge(e,i,m,null,l,k)}for(h in l)if(m=l[h],k=r[h],l.hasOwnProperty(h)&&(m!=null||k!=null))switch(h){case"value":ot=m;break;case"defaultValue":w=m;break;case"multiple":b=m;default:m!==k&&Ge(e,i,h,m,l,k)}i=w,r=b,l=ft,ot!=null?Di(e,!!r,ot,!1):!!l!=!!r&&(i!=null?Di(e,!!r,i,!0):Di(e,!!r,r?[]:"",!1));return;case"textarea":ft=ot=null;for(w in r)if(h=r[w],r.hasOwnProperty(w)&&h!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(e,i,w,null,l,h)}for(b in l)if(h=l[b],m=r[b],l.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":ot=h;break;case"defaultValue":ft=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ge(e,i,b,h,l,m)}ze(e,ot,ft);return;case"option":for(var Xt in r)ot=r[Xt],r.hasOwnProperty(Xt)&&ot!=null&&!l.hasOwnProperty(Xt)&&(Xt==="selected"?e.selected=!1:Ge(e,i,Xt,null,l,ot));for(k in l)ot=l[k],ft=r[k],l.hasOwnProperty(k)&&ot!==ft&&(ot!=null||ft!=null)&&(k==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ge(e,i,k,ot,l,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in r)ot=r[te],r.hasOwnProperty(te)&&ot!=null&&!l.hasOwnProperty(te)&&Ge(e,i,te,null,l,ot);for(nt in l)if(ot=l[nt],ft=r[nt],l.hasOwnProperty(nt)&&ot!==ft&&(ot!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ge(e,i,nt,ot,l,ft)}return;default:if(Zi(i)){for(var Ve in r)ot=r[Ve],r.hasOwnProperty(Ve)&&ot!==void 0&&!l.hasOwnProperty(Ve)&&Td(e,i,Ve,void 0,l,ot);for(pt in l)ot=l[pt],ft=r[pt],!l.hasOwnProperty(pt)||ot===ft||ot===void 0&&ft===void 0||Td(e,i,pt,ot,l,ft);return}}for(var j in r)ot=r[j],r.hasOwnProperty(j)&&ot!=null&&!l.hasOwnProperty(j)&&Ge(e,i,j,null,l,ot);for(gt in l)ot=l[gt],ft=r[gt],!l.hasOwnProperty(gt)||ot===ft||ot==null&&ft==null||Ge(e,i,gt,ot,l,ft)}function xv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function zE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,b=h.initiatorType,w=h.duration;if(m&&w&&xv(b)){for(b=0,w=h.responseEnd,l+=1;l<r.length;l++){var k=r[l],nt=k.startTime;if(nt>w)break;var pt=k.transferSize,gt=k.initiatorType;pt&&xv(gt)&&(k=k.responseEnd,b+=pt*(k<w?1:(w-nt)/(k-nt)))}if(--l,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ad=null,Rd=null;function bc(e){return e.nodeType===9?e:e.ownerDocument}function Sv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Cd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var wd=null;function FE(){var e=window.event;return e&&e.type==="popstate"?e===wd?!1:(wd=e,!0):(wd=null,!1)}var Mv=typeof setTimeout=="function"?setTimeout:void 0,BE=typeof clearTimeout=="function"?clearTimeout:void 0,Ev=typeof Promise=="function"?Promise:void 0,IE=typeof queueMicrotask=="function"?queueMicrotask:typeof Ev<"u"?function(e){return Ev.resolve(null).then(e).catch(HE)}:Mv;function HE(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function bv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),_o(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Fl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Fl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,w=m.nodeName;m[Yr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Fl(e.ownerDocument.body);r=h}while(r);_o(i)}function Tv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Dd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Dd(r),nl(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function GE(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Yr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function VE(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Fi(e.nextSibling),e===null))return null;return e}function Av(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Fi(e.nextSibling),e===null))return null;return e}function Ud(e){return e.data==="$?"||e.data==="$~"}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kE(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Nd=null;function Rv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Cv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function wv(e,i,r){switch(i=bc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Fl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);nl(e)}var Bi=new Map,Dv=new Set;function Tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Va=H.d;H.d={f:XE,r:WE,D:qE,C:YE,L:jE,m:ZE,X:QE,S:KE,M:JE};function XE(){var e=Va.f(),i=_c();return e||i}function WE(e){var i=ar(e);i!==null&&i.tag===5&&i.type==="form"?Y0(i):Va.r(e)}var ho=typeof document>"u"?null:document;function Uv(e,i,r){var l=ho;if(l&&typeof i=="string"&&i){var h=ae(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Dv.has(h)||(Dv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),In(i,"link",e),D(i),l.head.appendChild(i)))}}function qE(e){Va.D(e),Uv("dns-prefetch",e,null)}function YE(e,i){Va.C(e,i),Uv("preconnect",e,i)}function jE(e,i,r){Va.L(e,i,r);var l=ho;if(l&&e&&i){var h='link[rel="preload"][as="'+ae(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+ae(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+ae(r.imageSizes)+'"]')):h+='[href="'+ae(e)+'"]';var m=h;switch(i){case"style":m=po(e);break;case"script":m=mo(e)}Bi.has(m)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),Bi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(Bl(m))||i==="script"&&l.querySelector(Il(m))||(i=l.createElement("link"),In(i,"link",e),D(i),l.head.appendChild(i)))}}function ZE(e,i){Va.m(e,i);var r=ho;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ae(l)+'"][href="'+ae(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=mo(e)}if(!Bi.has(m)&&(e=g({rel:"modulepreload",href:e},i),Bi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Il(m)))return}l=r.createElement("link"),In(l,"link",e),D(l),r.head.appendChild(l)}}}function KE(e,i,r){Va.S(e,i,r);var l=ho;if(l&&e){var h=rr(l).hoistableStyles,m=po(e);i=i||"default";var b=h.get(m);if(!b){var w={loading:0,preload:null};if(b=l.querySelector(Bl(m)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=Bi.get(m))&&Od(e,r);var k=b=l.createElement("link");D(k),In(k,"link",e),k._p=new Promise(function(nt,pt){k.onload=nt,k.onerror=pt}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ac(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:w},h.set(m,b)}}}function QE(e,i){Va.X(e,i);var r=ho;if(r&&e){var l=rr(r).hoistableScripts,h=mo(e),m=l.get(h);m||(m=r.querySelector(Il(h)),m||(e=g({src:e,async:!0},i),(i=Bi.get(h))&&Pd(e,i),m=r.createElement("script"),D(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function JE(e,i){Va.M(e,i);var r=ho;if(r&&e){var l=rr(r).hoistableScripts,h=mo(e),m=l.get(h);m||(m=r.querySelector(Il(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Bi.get(h))&&Pd(e,i),m=r.createElement("script"),D(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Lv(e,i,r,l){var h=(h=it.current)?Tc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=po(r.href),r=rr(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=po(r.href);var m=rr(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(Bl(e)))&&!m._p&&(b.instance=m,b.state.loading=5),Bi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Bi.set(e,r),m||$E(h,e,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=mo(r),r=rr(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function po(e){return'href="'+ae(e)+'"'}function Bl(e){return'link[rel="stylesheet"]['+e+"]"}function Nv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function $E(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),In(i,"link",r),D(i),e.head.appendChild(i))}function mo(e){return'[src="'+ae(e)+'"]'}function Il(e){return"script[async]"+e}function Ov(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ae(r.href)+'"]');if(l)return i.instance=l,D(l),l;var h=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),D(l),In(l,"style",h),Ac(l,r.precedence,e),i.instance=l;case"stylesheet":h=po(r.href);var m=e.querySelector(Bl(h));if(m)return i.state.loading|=4,i.instance=m,D(m),m;l=Nv(r),(h=Bi.get(h))&&Od(l,h),m=(e.ownerDocument||e).createElement("link"),D(m);var b=m;return b._p=new Promise(function(w,k){b.onload=w,b.onerror=k}),In(m,"link",l),i.state.loading|=4,Ac(m,r.precedence,e),i.instance=m;case"script":return m=mo(r.src),(h=e.querySelector(Il(m)))?(i.instance=h,D(h),h):(l=r,(h=Bi.get(m))&&(l=g({},r),Pd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),D(h),In(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ac(l,r.precedence,e));return i.instance}function Ac(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===i)m=w;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Od(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Pd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Rc=null;function Pv(e,i,r){if(Rc===null){var l=new Map,h=Rc=new Map;h.set(r,l)}else h=Rc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Yr]||m[pn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var w=l.get(b);w?w.push(m):l.set(b,[m])}}return l}function zv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function tb(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Fv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function eb(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=po(l.href),m=i.querySelector(Bl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Cc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,D(m);return}m=i.ownerDocument||i,l=Nv(l),(h=Bi.get(h))&&Od(l,h),m=m.createElement("link"),D(m);var b=m;b._p=new Promise(function(w,k){b.onload=w,b.onerror=k}),In(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Cc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var zd=0;function nb(e,i){return e.stylesheets&&e.count===0&&Dc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Dc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&zd===0&&(zd=62500*zE());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>zd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wc=null;function Dc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wc=new Map,i.forEach(ib,e),wc=null,Cc.call(e))}function ib(e,i){if(!(i.state.loading&4)){var r=wc.get(e);if(r)var l=r.get(null);else{r=new Map,wc.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),m=r.get(b)||l,m===l&&r.set(null,h),r.set(b,h),this.count++,l=Cc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Hl={$$typeof:U,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function ab(e,i,r,l,h,m,b,w,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Bv(e,i,r,l,h,m,b,w,k,nt,pt,gt){return e=new ab(e,i,r,b,k,nt,pt,gt,w),i=1,m===!0&&(i|=24),m=di(3,null,null,i),e.current=m,m.stateNode=e,i=mh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},xh(m),e}function Iv(e){return e?(e=Ws,e):Ws}function Hv(e,i,r,l,h,m){h=Iv(h),l.context===null?l.context=h:l.pendingContext=h,l=hr(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=dr(e,l,i),r!==null&&(ii(r,e,i),vl(r,e,i))}function Gv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Fd(e,i){Gv(e,i),(e=e.alternate)&&Gv(e,i)}function Vv(e){if(e.tag===13||e.tag===31){var i=Jr(e,67108864);i!==null&&ii(i,e,67108864),Fd(e,67108864)}}function kv(e){if(e.tag===13||e.tag===31){var i=vi();i=$o(i);var r=Jr(e,i);r!==null&&ii(r,e,i),Fd(e,i)}}var Uc=!0;function rb(e,i,r,l){var h=F.T;F.T=null;var m=H.p;try{H.p=2,Bd(e,i,r,l)}finally{H.p=m,F.T=h}}function sb(e,i,r,l){var h=F.T;F.T=null;var m=H.p;try{H.p=8,Bd(e,i,r,l)}finally{H.p=m,F.T=h}}function Bd(e,i,r,l){if(Uc){var h=Id(l);if(h===null)bd(e,i,l,Lc,r),Wv(e,l);else if(lb(h,e,i,r,l))l.stopPropagation();else if(Wv(e,l),i&4&&-1<ob.indexOf(e)){for(;h!==null;){var m=ar(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=yt(m.pendingLanes);if(b!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var k=1<<31-zt(b);w.entanglements[1]|=k,b&=~k}da(m),(Le&6)===0&&(pc=S()+500,Ol(0))}}break;case 31:case 13:w=Jr(m,2),w!==null&&ii(w,m,2),_c(),Fd(m,2)}if(m=Id(l),m===null&&bd(e,i,l,Lc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else bd(e,i,l,null,r)}}function Id(e){return e=Gf(e),Hd(e)}var Lc=null;function Hd(e){if(Lc=null,e=ir(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Lc=e,null}function Xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(I()){case Q:return 2;case ht:return 8;case at:case Pt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Gd=!1,br=null,Tr=null,Ar=null,Gl=new Map,Vl=new Map,Rr=[],ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wv(e,i){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Gl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vl.delete(i.pointerId)}}function kl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ar(i),i!==null&&Vv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function lb(e,i,r,l,h){switch(i){case"focusin":return br=kl(br,e,i,r,l,h),!0;case"dragenter":return Tr=kl(Tr,e,i,r,l,h),!0;case"mouseover":return Ar=kl(Ar,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Gl.set(m,kl(Gl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Vl.set(m,kl(Vl.get(m)||null,e,i,r,l,h)),!0}return!1}function qv(e){var i=ir(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,ua(e.priority,function(){kv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,ua(e.priority,function(){kv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Id(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Hf=l,r.target.dispatchEvent(l),Hf=null}else return i=ar(r),i!==null&&Vv(i),e.blockedOn=r,!1;i.shift()}return!0}function Yv(e,i,r){Nc(e)&&r.delete(i)}function ub(){Gd=!1,br!==null&&Nc(br)&&(br=null),Tr!==null&&Nc(Tr)&&(Tr=null),Ar!==null&&Nc(Ar)&&(Ar=null),Gl.forEach(Yv),Vl.forEach(Yv)}function Oc(e,i){e.blockedOn===i&&(e.blockedOn=null,Gd||(Gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ub)))}var Pc=null;function jv(e){Pc!==e&&(Pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Hd(l||r)===null)continue;break}var m=ar(r);m!==null&&(e.splice(i,3),i-=3,Ih(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function _o(e){function i(k){return Oc(k,e)}br!==null&&Oc(br,e),Tr!==null&&Oc(Tr,e),Ar!==null&&Oc(Ar,e),Gl.forEach(i),Vl.forEach(i);for(var r=0;r<Rr.length;r++){var l=Rr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Rr.length&&(r=Rr[0],r.blockedOn===null);)qv(r),r.blockedOn===null&&Rr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],b=h[Dn]||null;if(typeof m=="function")b||jv(r);else if(b){var w=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[Dn]||null)w=b.formAction;else if(Hd(h)!==null)continue}else w=b.action;typeof w=="function"?r[l+1]=w:(r.splice(l,3),l-=3),jv(r)}}}function Zv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Vd(e){this._internalRoot=e}zc.prototype.render=Vd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=vi();Hv(r,l,e,i,null,null)},zc.prototype.unmount=Vd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Hv(e.current,2,null,e,null,null),_c(),i[ji]=null}};function zc(e){this._internalRoot=e}zc.prototype.unstable_scheduleHydration=function(e){if(e){var i=tl();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Rr.length&&i!==0&&i<Rr[r].priority;r++);Rr.splice(r,0,e),r===0&&qv(e)}};var Kv=t.version;if(Kv!=="19.2.4")throw Error(a(527,Kv,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var cb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fc.isDisabled&&Fc.supportsFiber)try{Et=Fc.inject(cb),bt=Fc}catch{}}return Wl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=ig,m=ag,b=rg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Bv(e,1,!1,null,null,r,l,null,h,m,b,Zv),e[ji]=i.current,Ed(e),new Vd(i)},Wl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=ig,b=ag,w=rg,k=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(k=r.formState)),i=Bv(e,1,!0,i,r??null,l,h,k,m,b,w,Zv),i.context=Iv(null),r=i.current,l=vi(),l=$o(l),h=hr(l),h.callback=null,dr(r,h,l),r=l,i.current.lanes=r,Vn(i,r),da(i),e[ji]=i.current,Ed(e),new zc(i)},Wl.version="19.2.4",Wl}var sx;function yb(){if(sx)return Wd.exports;sx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wd.exports=Sb(),Wd.exports}var Mb=yb();function ja(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function AS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Io={duration:.5,overwrite:!1,delay:0},Wm,Gn,tn,ki=1e8,qe=1/ki,Pp=Math.PI*2,Eb=Pp/4,bb=0,RS=Math.sqrt,Tb=Math.cos,Ab=Math.sin,wn=function(t){return typeof t=="string"},ln=function(t){return typeof t=="function"},$a=function(t){return typeof t=="number"},qm=function(t){return typeof t>"u"},ya=function(t){return typeof t=="object"},ri=function(t){return t!==!1},Ym=function(){return typeof window<"u"},Bc=function(t){return ln(t)||wn(t)},CS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Yn=Array.isArray,Rb=/random\([^)]+\)/g,Cb=/,\s*/g,ox=/(?:-?\.?\d|\.)+/gi,wS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DS=/[+-]=-?[.\d]+/,wb=/[^,'"\[\]\s]+/gi,Db=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,ma,zp,jm,Ri={},vf={},US,LS=function(t){return(vf=Ho(t,Ri))&&fi},Zm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},cu=function(t,n){return!n&&console.warn(t)},NS=function(t,n){return t&&(Ri[t]=n)&&vf&&(vf[t]=n)||Ri},fu=function(){return 0},Ub={suppressEvents:!0,isStart:!0,kill:!1},uf={suppressEvents:!0,kill:!1},Lb={suppressEvents:!0},Km={},Hr=[],Fp={},OS,yi={},Kd={},lx=30,cf=[],Qm="",Jm=function(t){var n=t[0],a,s;if(ya(n)||ln(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=cf.length;s--&&!cf[s].targetTest(n););a=cf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new ay(t[s],a)))||t.splice(s,1);return t},Rs=function(t){return t._gsap||Jm(Xi(t))[0]._gsap},PS=function(t,n,a){return(a=t[n])&&ln(a)?t[n]():qm(a)&&t.getAttribute&&t.getAttribute(n)||a},si=function(t,n){return(t=t.split(",")).forEach(n)||t},hn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},Oo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},Nb=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},xf=function(){var t=Hr.length,n=Hr.slice(0),a,s;for(Fp={},Hr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},$m=function(t){return!!(t._initted||t._startAt||t.add)},zS=function(t,n,a,s){Hr.length&&!Gn&&xf(),t.render(n,a,!!(Gn&&n<0&&$m(t))),Hr.length&&!Gn&&xf()},FS=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(wb).length<2?n:wn(t)?t.trim():t},BS=function(t){return t},Ci=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},Ob=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},Ho=function(t,n){for(var a in n)t[a]=n[a];return t},ux=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=ya(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},Sf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},ou=function(t){var n=t.parent||nn,a=t.keyframes?Ob(Yn(t.keyframes)):Ci;if(ri(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},Pb=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},IS=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Nf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},Vr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Cs=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},zb=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Bp=function(t,n,a,s){return t._startAt&&(Gn?t._startAt.revert(uf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},Fb=function o(t){return!t||t._ts&&o(t.parent)},cx=function(t){return t._repeat?Go(t._tTime,t=t.duration()+t._rDelay)*t:0},Go=function(t,n){var a=Math.floor(t=en(t/n));return t&&a===t?a-1:a},yf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Of=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||qe)||0))},Pf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=en(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Of(t),a._dirty||Cs(a,t)),t},HS=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=yf(t.rawTime(),n),(!n._dur||yu(0,n.totalDuration(),a)-n._tTime>qe)&&n.render(a,!0)),Cs(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-qe}},ga=function(t,n,a,s){return n.parent&&Vr(n),n._start=en(($a(a)?a:a||t!==nn?Hi(t,a,n):t._time)+n._delay),n._end=en(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),IS(t,n,"_first","_last",t._sort?"_start":0),Ip(n)||(t._recent=n),s||HS(t,n),t._ts<0&&Pf(t,t._tTime),t},GS=function(t,n){return(Ri.ScrollTrigger||Zm("scrollTrigger",n))&&Ri.ScrollTrigger.create(n,t)},VS=function(t,n,a,s,u){if(e_(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!Gn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&OS!==Mi.frame)return Hr.push(t),t._lazy=[u,s],1},Bb=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Ip=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},Ib=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&Bb(t)&&!(!t._initted&&Ip(t))||(t._ts<0||t._dp._ts<0)&&!Ip(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=yu(0,t._tDur,n),_=Go(p,f),t._yoyo&&_&1&&(c=1-c),_!==Go(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||Gn||s||t._zTime===qe||!n&&t._zTime){if(!t._initted&&VS(t,n,s,a,p))return;for(g=t._zTime,t._zTime=n||(a?qe:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Bp(t,n,a,!0),t._onUpdate&&!a&&Ei(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Ei(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Vr(t,1),!a&&!Gn&&(Ei(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},Hb=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Vo=function(t,n,a,s){var u=t._repeat,c=en(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:en(c*(u+1)+t._rDelay*u):c,f>0&&!s&&Pf(t,t._tTime=t._tDur*f),t.parent&&Of(t),a||Cs(t.parent,t),t},fx=function(t){return t instanceof Kn?Cs(t):Vo(t,t._dur)},Gb={_start:0,endTime:fu,totalDuration:fu},Hi=function o(t,n,a){var s=t.labels,u=t._recent||Gb,c=t.duration()>=ki?u.endTime(!1):t._dur,f,p,d;return wn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Yn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},lu=function(t,n,a){var s=$a(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ri(p.vars.inherit)&&p.parent;c.immediateRender=ri(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new Sn(n[0],c,n[u+1])},qr=function(t,n){return t||t===0?n(t):n},yu=function(t,n,a){return a<t?t:a>n?n:a},qn=function(t,n){return!wn(t)||!(n=Db.exec(t))?"":n[1]},Vb=function(t,n,a){return qr(a,function(s){return yu(t,n,s)})},Hp=[].slice,kS=function(t,n){return t&&ya(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ya(t[0]))&&!t.nodeType&&t!==ma},kb=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return wn(s)&&!n||kS(s,1)?(u=a).push.apply(u,Xi(s)):a.push(s)})||a},Xi=function(t,n,a){return tn&&!n&&tn.selector?tn.selector(t):wn(t)&&!a&&(zp||!ko())?Hp.call((n||jm).querySelectorAll(t),0):Yn(t)?kb(t,a):kS(t)?Hp.call(t,0):t?[t]:[]},Gp=function(t){return t=Xi(t)[0]||cu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Xi(n,a.querySelectorAll?a:a===t?cu("Invalid scope")||jm.createElement("div"):t)}},XS=function(t){return t.sort(function(){return .5-Math.random()})},WS=function(t){if(ln(t))return t;var n=ya(t)?t:{each:t},a=ws(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,g=s;return wn(s)?_=g={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],g=s[1]),function(v,y,T){var E=(T||n).length,M=c[E],x,C,U,R,L,z,O,G,A;if(!M){if(A=n.grid==="auto"?0:(n.grid||[1,ki])[1],!A){for(O=-ki;O<(O=T[A++].getBoundingClientRect().left)&&A<E;);A<E&&A--}for(M=c[E]=[],x=p?Math.min(A,E)*_-.5:s%A,C=A===ki?0:p?E*g/A-.5:s/A|0,O=0,G=ki,z=0;z<E;z++)U=z%A-x,R=C-(z/A|0),M[z]=L=d?Math.abs(d==="y"?R:U):RS(U*U+R*R),L>O&&(O=L),L<G&&(G=L);s==="random"&&XS(M),M.max=O-G,M.min=G,M.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(A>E?E-1:d?d==="y"?E/A:A:Math.max(A,E/A))||0)*(s==="edges"?-1:1),M.b=E<0?u-E:u,M.u=qn(n.amount||n.each)||0,a=a&&E<0?ey(a):a}return E=(M[v]-M.min)/M.max||0,en(M.b+(a?a(E):E)*M.v)+M.u}},Vp=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=en(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+($a(a)?0:qn(a))}},qS=function(t,n){var a=Yn(t),s,u;return!a&&ya(t)&&(s=a=t.radius||ki,t.values?(t=Xi(t.values),(u=!$a(t[0]))&&(s*=s)):t=Vp(t.increment)),qr(n,a?ln(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),p=parseFloat(u?c.y:0),d=ki,_=0,g=t.length,v,y;g--;)u?(v=t[g].x-f,y=t[g].y-p,v=v*v+y*y):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!s||d<=s?t[_]:c,u||_===c||$a(c)?_:_+qn(c)}:Vp(t))},YS=function(t,n,a,s){return qr(Yn(t)?!n:a===!0?!!(a=0):!s,function(){return Yn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},Xb=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},Wb=function(t,n){return function(a){return t(parseFloat(a))+(n||qn(a))}},qb=function(t,n,a){return ZS(t,n,0,1,a)},jS=function(t,n,a){return qr(a,function(s){return t[~~n(s)]})},Yb=function o(t,n,a){var s=n-t;return Yn(t)?jS(t,o(0,t.length),n):qr(a,function(u){return(s+(u-t)%s)%s+t})},jb=function o(t,n,a){var s=n-t,u=s*2;return Yn(t)?jS(t,o(0,t.length-1),n):qr(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},hu=function(t){return t.replace(Rb,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(Cb);return YS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},ZS=function(t,n,a,s,u){var c=n-t,f=s-a;return qr(u,function(p){return a+((p-t)/c*f||0)})},Zb=function o(t,n,a,s){var u=isNaN(t+n)?0:function(y){return(1-y)*t+y*n};if(!u){var c=wn(t),f={},p,d,_,g,v;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Yn(t)&&!Yn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(o(t[d-1],t[d]));g--,u=function(T){T*=g;var E=Math.min(v,~~T);return _[E](T-E)},a=n}else s||(t=Ho(Yn(t)?[]:{},t));if(!_){for(p in n)t_.call(f,t,p,"get",n[p]);u=function(T){return a_(T,f)||(c?t.p:t)}}}return qr(a,u)},hx=function(t,n,a){var s=t.labels,u=ki,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(p=c,u=f);return p},Ei=function(t,n,a){var s=t.vars,u=s[n],c=tn,f=t._ctx,p,d,_;if(u)return p=s[n+"Params"],d=s.callbackScope||t,a&&Hr.length&&xf(),f&&(tn=f),_=p?u.apply(d,p):u.call(d),tn=c,_},eu=function(t){return Vr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Gn),t.progress()<1&&Ei(t,"onInterrupt"),t},No,KS=[],QS=function(t){if(t)if(t=!t.name&&t.default||t,Ym()||t.headless){var n=t.name,a=ln(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:fu,render:a_,add:t_,kill:fT,modifier:cT,rawVars:0},c={targetTest:0,get:0,getSetter:i_,aliases:{},register:0};if(ko(),t!==s){if(yi[n])return;Ci(s,Ci(Sf(t,u),c)),Ho(s.prototype,Ho(u,Sf(t,c))),yi[s.prop=n]=s,t.targetTest&&(cf.push(s),Km[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}NS(n,s),t.register&&t.register(fi,s,oi)}else KS.push(t)},We=255,nu={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Qd=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*We+.5|0},JS=function(t,n,a){var s=t?$a(t)?[t>>16,t>>8&We,t&We]:0:nu.black,u,c,f,p,d,_,g,v,y,T;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),nu[t])s=nu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&We,s&We,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&We,t&We]}else if(t.substr(0,3)==="hsl"){if(s=T=t.match(ox),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=Qd(p+1/3,u,c),s[1]=Qd(p,u,c),s[2]=Qd(p-1/3,u,c);else if(~t.indexOf("="))return s=t.match(wS),a&&s.length<4&&(s[3]=1),s}else s=t.match(ox)||nu.transparent;s=s.map(Number)}return n&&!T&&(u=s[0]/We,c=s[1]/We,f=s[2]/We,g=Math.max(u,c,f),v=Math.min(u,c,f),_=(g+v)/2,g===v?p=d=0:(y=g-v,d=_>.5?y/(2-g-v):y/(g+v),p=g===u?(c-f)/y+(c<f?6:0):g===c?(f-u)/y+2:(u-c)/y+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},$S=function(t){var n=[],a=[],s=-1;return t.split(Gr).forEach(function(u){var c=u.match(Lo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},dx=function(t,n,a){var s="",u=(t+s).match(Gr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!u)return t;if(u=u.map(function(v){return(v=JS(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=$S(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Gr,"1").split(Lo),g=d.length-1;f<g;f++)s+=d[f]+(~p.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!d)for(d=t.split(Gr),g=d.length-1;f<g;f++)s+=d[f]+u[f];return s+d[g]},Gr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in nu)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),Kb=/hsl[a]?\(/,ty=function(t){var n=t.join(" "),a;if(Gr.lastIndex=0,Gr.test(n))return a=Kb.test(n),t[1]=dx(t[1],a),t[0]=dx(t[0],a,$S(t[1])),!0},du,Mi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],p,d,_,g,v,y,T=function E(M){var x=o()-s,C=M===!0,U,R,L,z;if((x>t||x<0)&&(a+=x-n),s+=x,L=s-a,U=L-c,(U>0||C)&&(z=++g.frame,v=L-g.time*1e3,g.time=L=L/1e3,c+=U+(U>=u?4:u-U),R=1),C||(p=d(E)),R)for(y=0;y<f.length;y++)f[y](L,v,z,M)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(M){return v/(1e3/(M||60))},wake:function(){US&&(!zp&&Ym()&&(ma=zp=window,jm=ma.document||{},Ri.gsap=fi,(ma.gsapVersions||(ma.gsapVersions=[])).push(fi.version),LS(vf||ma.GreenSockGlobals||!ma.gsap&&ma||{}),KS.forEach(QS)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(M){return setTimeout(M,c-g.time*1e3+1|0)},du=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),du=0,d=fu},lagSmoothing:function(M,x){t=M||1/0,n=Math.min(x||33,t)},fps:function(M){u=1e3/(M||240),c=g.time*1e3+u},add:function(M,x,C){var U=x?function(R,L,z,O){M(R,L,z,O),g.remove(U)}:M;return g.remove(M),f[C?"unshift":"push"](U),ko(),U},remove:function(M,x){~(x=f.indexOf(M))&&f.splice(x,1)&&y>=x&&y--},_listeners:f},g})(),ko=function(){return!du&&Mi.wake()},Me={},Qb=/^[\d.\-M][\d.\-,\s]/,Jb=/["']/g,$b=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,p,d;u<c;u++)p=a[u],f=u!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(Jb,"").trim():+d,s=p.substr(f+1).trim();return n},tT=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},eT=function(t){var n=(t+"").split("("),a=Me[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[$b(n[1])]:tT(t).split(",").map(FS)):Me._CE&&Qb.test(t)?Me._CE("",t):a},ey=function(t){return function(n){return 1-t(1-n)}},ny=function o(t,n){for(var a=t._first,s;a;)a instanceof Kn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},ws=function(t,n){return t&&(ln(t)?t:Me[t]||eT(t))||n},Ns=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return si(t,function(f){Me[f]=Ri[f]=u,Me[c=f.toLowerCase()]=a;for(var p in u)Me[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Me[f+"."+p]=u[p]}),u},iy=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Jd=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/Pp*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*Ab((_-c)*u)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:iy(f);return u=Pp/u,p.config=function(d,_){return o(t,d,_)},p},$d=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:iy(a);return s.config=function(u){return o(t,u)},s};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Ns(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;Ns("Elastic",Jd("in"),Jd("out"),Jd());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Ns("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Ns("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Ns("Circ",function(o){return-(RS(1-o*o)-1)});Ns("Sine",function(o){return o===1?1:-Tb(o*Eb)+1});Ns("Back",$d("in"),$d("out"),$d());Me.SteppedEase=Me.steps=Ri.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-qe;return function(f){return((s*yu(0,c,f)|0)+u)*a}}};Io.ease=Me["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Qm+=o+","+o+"Params,"});var ay=function(t,n){this.id=bb++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:PS,this.set=n?n.getSetter:i_},pu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Vo(this,+n.duration,1,1),this.data=n.data,tn&&(this._ctx=tn,tn.data.push(this)),du||Mi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(ko(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Pf(this,a),!u._dp||u.parent||HS(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ga(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===qe||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),zS(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+cx(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+cx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?Go(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?yf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-qe?0:this._rts,this.totalTime(yu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),Of(this),zb(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ko(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=en(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ga(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ri(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?yf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=Lb);var s=Gn;return Gn=a,$m(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Gn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,fx(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,fx(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Hi(this,a),ri(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ri(s)),this._dur||(this._zTime=-qe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-qe)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(c){var f=ln(a)?a:BS,p=function(){var _=s.then;s.then=null,u&&u(),ln(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=_),c(f),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){eu(this)},o})();Ci(pu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Kn=(function(o){AS(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=ri(a.sortChildren),nn&&ga(a.parent||nn,ja(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&GS(ja(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return lu(0,arguments,this),this},n.from=function(s,u,c){return lu(1,arguments,this),this},n.fromTo=function(s,u,c,f){return lu(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,ou(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new Sn(s,u,Hi(this,c),1),this},n.call=function(s,u,c){return ga(this,Sn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,p,d,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new Sn(s,c,Hi(this,p)),this},n.staggerFrom=function(s,u,c,f,p,d,_){return c.runBackwards=1,ou(c).immediateRender=ri(c.immediateRender),this.staggerTo(s,u,c,f,p,d,_)},n.staggerFromTo=function(s,u,c,f,p,d,_,g){return f.startAt=c,ou(f).immediateRender=ri(f.immediateRender),this.staggerTo(s,u,f,p,d,_,g)},n.render=function(s,u,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:en(s),g=this._zTime<0!=s<0&&(this._initted||!d),v,y,T,E,M,x,C,U,R,L,z,O;if(this!==nn&&_>p&&s>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),v=_,R=this._start,U=this._ts,x=!U,g&&(d||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(z=this._yoyo,M=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(M*100+s,u,c);if(v=en(_%M),_===p?(E=this._repeat,v=d):(L=en(_/M),E=~~L,E&&E===L&&(v=d,E--),v>d&&(v=d)),L=Go(this._tTime,M),!f&&this._tTime&&L!==E&&this._tTime-L*M-this._dur<=0&&(L=E),z&&E&1&&(v=d-v,O=1),E!==L&&!this._lock){var G=z&&L&1,A=G===(z&&E&1);if(E<L&&(G=!G),f=G?0:_%d?d:_,this._lock=1,this.render(f||(O?0:en(E*M)),u,!d)._lock=0,this._tTime=_,!u&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,L=E),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,A&&(this._lock=2,f=G?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;ny(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=Hb(this,en(f),en(v)),C&&(_-=v-(v=C._start))),this._tTime=_,this._time=v,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&d&&!u&&!L&&(Ei(this,"onStart"),this._tTime!==_))return this;if(v>=f&&s>=0)for(y=this._first;y;){if(T=y._next,(y._act||v>=y._start)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,u,c);if(y.render(y._ts>0?(v-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(v-y._start)*y._ts,u,c),v!==this._time||!this._ts&&!x){C=0,T&&(_+=this._zTime=-qe);break}}y=T}else{y=this._last;for(var N=s<0?s:v;y;){if(T=y._prev,(y._act||N<=y._end)&&y._ts&&C!==y){if(y.parent!==this)return this.render(s,u,c);if(y.render(y._ts>0?(N-y._start)*y._ts:(y._dirty?y.totalDuration():y._tDur)+(N-y._start)*y._ts,u,c||Gn&&$m(y)),v!==this._time||!this._ts&&!x){C=0,T&&(_+=this._zTime=N?-qe:qe);break}}y=T}}if(C&&!u&&(this.pause(),C.render(v>=f?0:-qe)._zTime=v>=f?1:-1,this._ts))return this._start=R,Of(this),this.render(s,u,c);this._onUpdate&&!u&&Ei(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(R===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Vr(this,1),!u&&!(s<0&&!f)&&(_||f||!p)&&(Ei(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if($a(u)||(u=Hi(this,u,s)),!(s instanceof pu)){if(Yn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(wn(s))return this.addLabel(s,u);if(ln(s))s=Sn.delayedCall(0,s);else return this}return this!==s?ga(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-ki);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Sn?u&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,u,c)))),d=d._next;return p},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return wn(s)?this.removeLabel(s):ln(s)?this.killTweensOf(s):(s.parent===this&&Nf(this,s),s===this._recent&&(this._recent=this._last),Cs(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Mi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=Hi(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=Sn.delayedCall(0,u||fu,c);return f.data="isPause",this._hasPause=1,ga(this,f,Hi(this,s))},n.removePause=function(s){var u=this._first;for(s=Hi(this,s);u;)u._start===s&&u.data==="isPause"&&Vr(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)zr!==f[p]&&f[p].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=Xi(s),p=this._first,d=$a(u),_;p;)p instanceof Sn?Nb(p._targets,f)&&(d?(!zr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&c.push(p):(_=p.getTweensOf(f,u)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=Hi(c,s),p=u,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,y,T=Sn.to(c,Ci({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||qe,onStart:function(){if(c.pause(),!y){var M=u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==M&&Vo(T,M,0,1).render(T._time,!0,!0),y=1}_&&_.apply(T,g||[])}},u));return v?T.render(0):T},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,Ci({startAt:{time:Hi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),hx(this,Hi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),hx(this,Hi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+qe)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(s=en(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(d in p)p[d]>=c&&(p[d]+=s);return Cs(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Cs(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,p=ki,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ga(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(u-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=en(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>u&&f._ts&&(u=f._end),f=d;Vo(c,c===nn&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(nn._ts&&(zS(nn,yf(s,nn)),OS=Mi.frame),Mi.frame>=lx){lx+=Ai.autoSleep||120;var u=nn._first;if((!u||!u._ts)&&Ai.autoSleep&&Mi._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Mi.sleep()}}},t})(pu);Ci(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nT=function(t,n,a,s,u,c,f){var p=new oi(this._pt,t,n,0,1,cy,null,u),d=0,_=0,g,v,y,T,E,M,x,C;for(p.b=a,p.e=s,a+="",s+="",(x=~s.indexOf("random("))&&(s=hu(s)),c&&(C=[a,s],c(C,t,n),a=C[0],s=C[1]),v=a.match(Zd)||[];g=Zd.exec(s);)T=g[0],E=s.substring(d,g.index),y?y=(y+1)%5:E.substr(-5)==="rgba("&&(y=1),T!==v[_++]&&(M=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:M,c:T.charAt(1)==="="?Oo(M,T)-M:parseFloat(T)-M,m:y&&y<4?Math.round:0},d=Zd.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(DS.test(s)||x)&&(p.e=0),this._pt=p,p},t_=function(t,n,a,s,u,c,f,p,d,_){ln(s)&&(s=s(u||0,t,c));var g=t[n],v=a!=="get"?a:ln(g)?d?t[n.indexOf("set")||!ln(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,y=ln(g)?d?oT:ly:n_,T;if(wn(s)&&(~s.indexOf("random(")&&(s=hu(s)),s.charAt(1)==="="&&(T=Oo(v,s)+(qn(v)||0),(T||T===0)&&(s=T))),!_||v!==s||kp)return!isNaN(v*s)&&s!==""?(T=new oi(this._pt,t,n,+v||0,s-(v||0),typeof g=="boolean"?uT:uy,0,y),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&Zm(n,s),nT.call(this,t,n,v,s,y,p||Ai.stringFilter,d))},iT=function(t,n,a,s,u){if(ln(t)&&(t=uu(t,u,n,a,s)),!ya(t)||t.style&&t.nodeType||Yn(t)||CS(t))return wn(t)?uu(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=uu(t[f],u,n,a,s);return c},ry=function(t,n,a,s,u,c){var f,p,d,_;if(yi[t]&&(f=new yi[t]).init(u,f.rawVars?n[t]:iT(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=p=new oi(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==No))for(d=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)d[f._props[_]]=p;return f},zr,kp,e_=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,g=s.yoyoEase,v=s.keyframes,y=s.autoRevert,T=t._dur,E=t._startAt,M=t._targets,x=t.parent,C=x&&x.data==="nested"?x.vars.targets:M,U=t._overwrite==="auto"&&!Wm,R=t.timeline,L,z,O,G,A,N,V,Z,K,rt,lt,F,H;if(R&&(!v||!u)&&(u="none"),t._ease=ws(u,Io.ease),t._yEase=g?ey(ws(g===!0?u:g,Io.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!R&&!!s.runBackwards,!R||v&&!s.stagger){if(Z=M[0]?Rs(M[0]).harness:0,F=Z&&s[Z.prop],L=Sf(s,Km),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!y?E.render(-1,!0):E.revert(_&&T?uf:Ub),E._lazy=0),c){if(Vr(t._startAt=Sn.set(M,Ci({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!E&&ri(p),startAt:null,delay:0,onUpdate:d&&function(){return Ei(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Gn||!f&&!y)&&t._startAt.revert(uf),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!E){if(n&&(f=!1),O=Ci({overwrite:!1,data:"isFromStart",lazy:f&&!E&&ri(p),immediateRender:f,stagger:0,parent:x},L),F&&(O[Z.prop]=F),Vr(t._startAt=Sn.set(M,O)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Gn?t._startAt.revert(uf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,qe,qe);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&ri(p)||p&&!T,z=0;z<M.length;z++){if(A=M[z],V=A._gsap||Jm(M)[z]._gsap,t._ptLookup[z]=rt={},Fp[V.id]&&Hr.length&&xf(),lt=C===M?z:C.indexOf(A),Z&&(K=new Z).init(A,F||L,t,lt,C)!==!1&&(t._pt=G=new oi(t._pt,A,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(J){rt[J]=G}),K.priority&&(N=1)),!Z||F)for(O in L)yi[O]&&(K=ry(O,L,t,lt,A,C))?K.priority&&(N=1):rt[O]=G=t_.call(t,A,O,"get",L[O],lt,C,0,s.stringFilter);t._op&&t._op[z]&&t.kill(A,t._op[z]),U&&t._pt&&(zr=t,nn.killTweensOf(A,rt,t.globalTime(n)),H=!t.parent,zr=0),t._pt&&p&&(Fp[V.id]=1)}N&&fy(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!H,v&&n<=0&&R.render(ki,!0,!0)},aT=function(t,n,a,s,u,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,y;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,y=t._targets.length;y--;){if(_=v[y][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return kp=1,t.vars[n]="+=0",e_(t,f),kp=0,p?cu(n+" not eligible for reset"):1;d.push(_)}for(y=d.length;y--;)g=d[y],_=g._pt||g,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=hn(a)+qn(g.e)),g.b&&(g.b=_.s+qn(g.b))},rT=function(t,n){var a=t[0]?Rs(t[0]).harness:0,s=a&&a.aliases,u,c,f,p;if(!s)return n;u=Ho({},n);for(c in s)if(c in u)for(p=s[c].split(","),f=p.length;f--;)u[p[f]]=u[c];return u},sT=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Yn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},uu=function(t,n,a,s,u){return ln(t)?t.call(n,a,s,u):wn(t)&&~t.indexOf("random(")?hu(t):t},sy=Qm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",oy={};si(sy+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return oy[o]=1});var Sn=(function(o){AS(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:ou(s))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,y=p.overwrite,T=p.keyframes,E=p.defaults,M=p.scrollTrigger,x=p.yoyoEase,C=s.parent||nn,U=(Yn(a)||CS(a)?$a(a[0]):"length"in s)?[a]:Xi(a),R,L,z,O,G,A,N,V;if(f._targets=U.length?Jm(U):cu("GSAP target "+a+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=y,T||v||Bc(d)||Bc(_)){if(s=f.vars,R=f.timeline=new Kn({data:"nested",defaults:E||{},targets:C&&C.data==="nested"?C.vars.targets:U}),R.kill(),R.parent=R._dp=ja(f),R._start=0,v||Bc(d)||Bc(_)){if(O=U.length,N=v&&WS(v),ya(v))for(G in v)~sy.indexOf(G)&&(V||(V={}),V[G]=v[G]);for(L=0;L<O;L++)z=Sf(s,oy),z.stagger=0,x&&(z.yoyoEase=x),V&&Ho(z,V),A=U[L],z.duration=+uu(d,ja(f),L,A,U),z.delay=(+uu(_,ja(f),L,A,U)||0)-f._delay,!v&&O===1&&z.delay&&(f._delay=_=z.delay,f._start+=_,z.delay=0),R.to(A,z,N?N(L,A,U):0),R._ease=Me.none;R.duration()?d=_=0:f.timeline=0}else if(T){ou(Ci(R.vars.defaults,{ease:"none"})),R._ease=ws(T.ease||s.ease||"none");var Z=0,K,rt,lt;if(Yn(T))T.forEach(function(F){return R.to(U,F,">")}),R.duration();else{z={};for(G in T)G==="ease"||G==="easeEach"||sT(G,T[G],z,T.easeEach);for(G in z)for(K=z[G].sort(function(F,H){return F.t-H.t}),Z=0,L=0;L<K.length;L++)rt=K[L],lt={ease:rt.e,duration:(rt.t-(L?K[L-1].t:0))/100*d},lt[G]=rt.v,R.to(U,lt,Z),Z+=lt.duration;R.duration()<d&&R.to({},{duration:d-R.duration()})}}d||f.duration(d=R.duration())}else f.timeline=0;return y===!0&&!Wm&&(zr=ja(f),nn.killTweensOf(U),zr=0),ga(C,ja(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(g||!d&&!T&&f._start===en(C._time)&&ri(g)&&Fb(ja(f))&&C.data!=="nested")&&(f._tTime=-qe,f.render(Math.max(0,-_)||0)),M&&GS(ja(f),M),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,g=s>p-qe&&!_?p:s<qe?0:s,v,y,T,E,M,x,C,U,R;if(!d)Ib(this,s,u,c);else if(g!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,U=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,c);if(v=en(g%E),g===p?(T=this._repeat,v=d):(M=en(g/E),T=~~M,T&&T===M?(v=d,T--):v>d&&(v=d)),x=this._yoyo&&T&1,x&&(R=this._yEase,v=d-v),M=Go(this._tTime,E),v===f&&!c&&this._initted&&T===M)return this._tTime=g,this;T!==M&&(U&&this._yEase&&ny(U,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==E&&this._initted&&(this._lock=c=1,this.render(en(E*T),!0).invalidate()._lock=0))}if(!this._initted){if(VS(this,_?s:v,c,u,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==M))return this;if(d!==this._dur)return this.render(s,u,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(R||this._ease)(v/d),this._from&&(this.ratio=C=1-C),!f&&g&&!u&&!M&&(Ei(this,"onStart"),this._tTime!==g))return this;for(y=this._pt;y;)y.r(C,y.d),y=y._next;U&&U.render(s<0?s:U._dur*U._ease(v/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&Bp(this,s,u,c),Ei(this,"onUpdate")),this._repeat&&T!==M&&this.vars.onRepeat&&!u&&this.parent&&Ei(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&Bp(this,s,!0,!0),(s||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Vr(this,1),!u&&!(_&&!f)&&(g||f||x)&&(Ei(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,p){du||Mi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||e_(this,d),_=this._ease(d/this._dur),aT(this,s,u,c,f,_,d,p)?this.resetTo(s,u,c,f,1):(Pf(this,0),this.parent||IS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?eu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,zr&&zr.vars.overwrite!==!0)._first||eu(this),this.parent&&c!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?Xi(s):f,d=this._ptLookup,_=this._pt,g,v,y,T,E,M,x;if((!u||u==="all")&&Pb(f,p))return u==="all"&&(this._pt=0),eu(this);for(g=this._op=this._op||[],u!=="all"&&(wn(u)&&(E={},si(u,function(C){return E[C]=1}),u=E),u=rT(f,u)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],u==="all"?(g[x]=u,T=v,y={}):(y=g[x]=g[x]||{},T=u);for(E in T)M=v&&v[E],M&&((!("kill"in M.d)||M.d.kill(E)===!0)&&Nf(this,M,"_pt"),delete v[E]),y!=="all"&&(y[E]=1)}return this._initted&&!this._pt&&_&&eu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return lu(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return lu(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return nn.killTweensOf(s,u,c)},t})(pu);Ci(Sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(o){Sn[o]=function(){var t=new Kn,n=Hp.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var n_=function(t,n,a){return t[n]=a},ly=function(t,n,a){return t[n](a)},oT=function(t,n,a,s){return t[n](s.fp,a)},lT=function(t,n,a){return t.setAttribute(n,a)},i_=function(t,n){return ln(t[n])?ly:qm(t[n])&&t.setAttribute?lT:n_},uy=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},uT=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},cy=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},a_=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},cT=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},fT=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Nf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},hT=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},fy=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},oi=(function(){function o(n,a,s,u,c,f,p,d,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||uy,this.d=p||this,this.set=d||n_,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=hT,this.m=a,this.mt=u,this.tween=s},o})();si(Qm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Km[o]=1});Ri.TweenMax=Ri.TweenLite=Sn;Ri.TimelineLite=Ri.TimelineMax=Kn;nn=new Kn({sortChildren:!1,defaults:Io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=ty;var Ds=[],ff={},dT=[],px=0,pT=0,tp=function(t){return(ff[t]||dT).map(function(n){return n()})},Xp=function(){var t=Date.now(),n=[];t-px>2&&(tp("matchMediaInit"),Ds.forEach(function(a){var s=a.queries,u=a.conditions,c,f,p,d;for(f in s)c=ma.matchMedia(s[f]).matches,c&&(p=1),c!==u[f]&&(u[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),tp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),px=t,tp("matchMedia"))},hy=(function(){function o(n,a){this.selector=a&&Gp(a),this.data=[],this._r=[],this.isReverted=!1,this.id=pT++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){ln(a)&&(u=s,s=a,a=ln);var c=this,f=function(){var d=tn,_=c.selector,g;return d&&d!==c&&d.data.push(c),u&&(c.selector=Gp(u)),tn=c,g=s.apply(c,arguments),ln(g)&&c._r.push(g),tn=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===ln?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=tn;tn=null,a(this),tn=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof Sn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),p=u.data.length,d;p--;)d=u.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)d=u.data[p],d instanceof Kn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Sn)&&d.revert&&d.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ds.length;c--;)Ds[c].id===this.id&&Ds.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),mT=(function(){function o(n){this.contexts=[],this.scope=n,tn&&tn.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){ya(a)||(a={matches:a});var c=new hy(0,u||this.scope),f=c.conditions={},p,d,_;tn&&!c.selector&&(c.selector=tn.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=ma.matchMedia(a[d]),p&&(Ds.indexOf(c)<0&&Ds.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Xp):p.addEventListener("change",Xp)));return _&&s(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),Mf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return QS(s)})},timeline:function(t){return new Kn(t)},getTweensOf:function(t,n){return nn.getTweensOf(t,n)},getProperty:function(t,n,a,s){wn(t)&&(t=Xi(t)[0]);var u=Rs(t||{}).get,c=a?BS:FS;return a==="native"&&(a=""),t&&(n?c((yi[n]&&yi[n].get||u)(t,n,a,s)):function(f,p,d){return c((yi[f]&&yi[f].get||u)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Xi(t),t.length>1){var s=t.map(function(_){return fi.quickSetter(_,n,a)}),u=s.length;return function(_){for(var g=u;g--;)s[g](_)}}t=t[0]||{};var c=yi[n],f=Rs(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;No._pt=0,g.init(t,a?_+a:_,No,0,[t]),g.render(1,g),No._pt&&a_(1,No)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=fi.to(t,Ci((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return u.resetTo(n,p,d,_)};return c.tween=u,c},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ws(t.ease,Io.ease)),ux(Io,t||{})},config:function(t){return ux(Ai,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!yi[f]&&!Ri[f]&&cu(n+" effect requires "+f+" plugin.")}),Kd[n]=function(f,p,d){return a(Xi(f),Ci(p||{},u),d)},c&&(Kn.prototype[n]=function(f,p,d){return this.add(Kd[n](f,ya(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Me[t]=ws(n)},parseEase:function(t,n){return arguments.length?ws(t,n):Me},getById:function(t){return nn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Kn(t),s,u;for(a.smoothChildTiming=ri(t.smoothChildTiming),nn.remove(a),a._dp=0,a._time=a._tTime=nn._time,s=nn._first;s;)u=s._next,(n||!(!s._dur&&s instanceof Sn&&s.vars.onComplete===s._targets[0]))&&ga(a,s,s._start-s._delay),s=u;return ga(nn,a,0),a},context:function(t,n){return t?new hy(t,n):tn},matchMedia:function(t){return new mT(t)},matchMediaRefresh:function(){return Ds.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Xp()},addEventListener:function(t,n){var a=ff[t]||(ff[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=ff[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:Yb,wrapYoyo:jb,distribute:WS,random:YS,snap:qS,normalize:qb,getUnit:qn,clamp:Vb,splitColor:JS,toArray:Xi,selector:Gp,mapRange:ZS,pipe:Xb,unitize:Wb,interpolate:Zb,shuffle:XS},install:LS,effects:Kd,ticker:Mi,updateRoot:Kn.updateRoot,plugins:yi,globalTimeline:nn,core:{PropTween:oi,globals:NS,Tween:Sn,Timeline:Kn,Animation:pu,getCache:Rs,_removeLinkedListItem:Nf,reverting:function(){return Gn},context:function(t){return t&&tn&&(tn.data.push(t),t._ctx=tn),tn},suppressOverwrites:function(t){return Wm=t}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Mf[o]=Sn[o]});Mi.add(Kn.updateRoot);No=Mf.to({},{duration:0});var _T=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},gT=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=_T(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},ep=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var p,d;if(wn(u)&&(p={},si(u,function(_){return p[_]=1}),u=p),n){p={};for(d in u)p[d]=n(u[d]);u=p}gT(f,u)}}}},fi=Mf.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Gn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},ep("roundProps",Vp),ep("modifiers"),ep("snap",qS))||Mf;Sn.version=Kn.version=fi.version="3.14.2";US=1;Ym()&&ko();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;var mx,Fr,Po,r_,Es,_x,s_,vT=function(){return typeof window<"u"},tr={},xs=180/Math.PI,zo=Math.PI/180,go=Math.atan2,gx=1e8,o_=/([A-Z])/g,xT=/(left|right|width|margin|padding|x)/i,ST=/[\s,\(]\S/,va={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wp=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},yT=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},MT=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},ET=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},bT=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},dy=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},py=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},TT=function(t,n,a){return t.style[n]=a},AT=function(t,n,a){return t.style.setProperty(n,a)},RT=function(t,n,a){return t._gsap[n]=a},CT=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},wT=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},DT=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},an="transform",li=an+"Origin",UT=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in tr&&u){if(this.tfm=this.tfm||{},t!=="transform")t=va[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Za(s,f)}):this.tfm[t]=c.x?c[t]:Za(s,t),t===li&&(this.tfm.zOrigin=c.zOrigin);else return va.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(an)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(li,n,"")),t=an}(u||n)&&this.props.push(t,n,u[t])},my=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},LT=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(o_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=s_(),(!u||!u.isStart)&&!a[an]&&(my(a),s.zOrigin&&a[li]&&(a[li]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},_y=function(t,n){var a={target:t,props:[],revert:LT,save:UT};return t._gsap||fi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},gy,qp=function(t,n){var a=Fr.createElementNS?Fr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Fr.createElement(t);return a&&a.style?a:Fr.createElement(t)},bi=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(o_,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Xo(n)||n,1)||""},vx="O,Moz,ms,Ms,Webkit".split(","),Xo=function(t,n,a){var s=n||Es,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(vx[c]+t in u););return c<0?null:(c===3?"ms":c>=0?vx[c]:"")+t},Yp=function(){vT()&&window.document&&(mx=window,Fr=mx.document,Po=Fr.documentElement,Es=qp("div")||{style:{}},qp("div"),an=Xo(an),li=an+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gy=!!Xo("perspective"),s_=fi.core.reverting,r_=1)},xx=function(t){var n=t.ownerSVGElement,a=qp("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Po.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Po.removeChild(a),u},Sx=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},vy=function(t){var n,a;try{n=t.getBBox()}catch{n=xx(t),a=1}return n&&(n.width||n.height)||a||(n=xx(t)),n&&!n.width&&!n.x&&!n.y?{x:+Sx(t,["x","cx","x1"])||0,y:+Sx(t,["y","cy","y1"])||0,width:0,height:0}:n},xy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&vy(t))},kr=function(t,n){if(n){var a=t.style,s;n in tr&&n!==li&&(n=an),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(o_,"-$1").toLowerCase())):a.removeAttribute(n)}},Br=function(t,n,a,s,u,c){var f=new oi(t._pt,n,a,0,1,c?py:dy);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},yx={deg:1,rad:1,turn:1},NT={grid:1,flex:1},Xr=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=Es.style,p=xT.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=s==="px",y=s==="%",T,E,M,x;if(s===c||!u||yx[s]||yx[c])return u;if(c!=="px"&&!v&&(u=o(t,n,a,"px")),x=t.getCTM&&xy(t),(y||c==="%")&&(tr[n]||~n.indexOf("adius")))return T=x?t.getBBox()[p?"width":"height"]:t[_],hn(y?u/T*g:u/100*T);if(f[p?"width":"height"]=g+(v?c:s),E=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Fr||!E.appendChild)&&(E=Fr.body),M=E._gsap,M&&y&&M.width&&p&&M.time===Mi.time&&!M.uncache)return hn(u/M.width*g);if(y&&(n==="height"||n==="width")){var C=t.style[n];t.style[n]=g+s,T=t[_],C?t.style[n]=C:kr(t,n)}else(y||c==="%")&&!NT[bi(E,"display")]&&(f.position=bi(t,"position")),E===t&&(f.position="static"),E.appendChild(Es),T=Es[_],E.removeChild(Es),f.position="absolute";return p&&y&&(M=Rs(E),M.time=Mi.time,M.width=E[_]),hn(v?T*u/g:T&&u?g/T*u:0)},Za=function(t,n,a,s){var u;return r_||Yp(),n in va&&n!=="transform"&&(n=va[n],~n.indexOf(",")&&(n=n.split(",")[0])),tr[n]&&n!=="transform"?(u=_u(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:bf(bi(t,li))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=Ef[n]&&Ef[n](t,n,a)||bi(t,n)||PS(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Xr(t,n,u,a)+a:u},OT=function(t,n,a,s){if(!a||a==="none"){var u=Xo(n,t,1),c=u&&bi(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=bi(t,"borderTopColor"))}var f=new oi(this._pt,t.style,n,0,1,cy),p=0,d=0,_,g,v,y,T,E,M,x,C,U,R,L;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=bi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[n],t.style[n]=s,s=bi(t,n)||s,E?t.style[n]=E:kr(t,n)),_=[a,s],ty(_),a=_[0],s=_[1],v=a.match(Lo)||[],L=s.match(Lo)||[],L.length){for(;g=Lo.exec(s);)M=g[0],C=s.substring(p,g.index),T?T=(T+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(T=1),M!==(E=v[d++]||"")&&(y=parseFloat(E)||0,R=E.substr((y+"").length),M.charAt(1)==="="&&(M=Oo(y,M)+R),x=parseFloat(M),U=M.substr((x+"").length),p=Lo.lastIndex-U.length,U||(U=U||Ai.units[n]||R,p===s.length&&(s+=U,f.e+=U)),R!==U&&(y=Xr(t,n,E,U)||0),f._pt={_next:f._pt,p:C||d===1?C:",",s:y,c:x-y,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?py:dy;return DS.test(s)&&(f.e=0),this._pt=f,f},Mx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PT=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=Mx[a]||a,n[1]=Mx[s]||s,n.join(" ")},zT=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,p,d;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),d=u.length;--d>-1;)f=u[d],tr[f]&&(p=1,f=f==="transformOrigin"?li:an),kr(a,f);p&&(kr(a,an),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",_u(a,1),c.uncache=1,my(s)))}},Ef={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new oi(t._pt,n,a,0,0,zT);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},mu=[1,0,0,1,0,0],Sy={},yy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ex=function(t){var n=bi(t,an);return yy(n)?mu:n.substr(7).match(wS).map(hn)},l_=function(t,n){var a=t._gsap||Rs(t),s=t.style,u=Ex(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?mu:u):(u===mu&&!t.offsetParent&&t!==Po&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Po.appendChild(t)),u=Ex(t),p?s.display=p:kr(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Po.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},jp=function(t,n,a,s,u,c){var f=t._gsap,p=u||l_(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,y=p[0],T=p[1],E=p[2],M=p[3],x=p[4],C=p[5],U=n.split(" "),R=parseFloat(U[0])||0,L=parseFloat(U[1])||0,z,O,G,A;a?p!==mu&&(O=y*M-T*E)&&(G=R*(M/O)+L*(-E/O)+(E*C-M*x)/O,A=R*(-T/O)+L*(y/O)-(y*C-T*x)/O,R=G,L=A):(z=vy(t),R=z.x+(~U[0].indexOf("%")?R/100*z.width:R),L=z.y+(~(U[1]||U[0]).indexOf("%")?L/100*z.height:L)),s||s!==!1&&f.smooth?(x=R-d,C=L-_,f.xOffset=g+(x*y+C*E)-x,f.yOffset=v+(x*T+C*M)-C):f.xOffset=f.yOffset=0,f.xOrigin=R,f.yOrigin=L,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[li]="0px 0px",c&&(Br(c,f,"xOrigin",d,R),Br(c,f,"yOrigin",_,L),Br(c,f,"xOffset",g,f.xOffset),Br(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",R+" "+L)},_u=function(t,n){var a=t._gsap||new ay(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=bi(t,li)||"0",_,g,v,y,T,E,M,x,C,U,R,L,z,O,G,A,N,V,Z,K,rt,lt,F,H,J,St,xt,B,tt,_t,Mt,Dt;return _=g=v=E=M=x=C=U=R=0,y=T=1,a.svg=!!(t.getCTM&&xy(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[an]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[an]!=="none"?p[an]:"")),s.scale=s.rotate=s.translate="none"),O=l_(t,a.svg),a.svg&&(a.uncache?(J=t.getBBox(),d=a.xOrigin-J.x+"px "+(a.yOrigin-J.y)+"px",H=""):H=!n&&t.getAttribute("data-svg-origin"),jp(t,H||d,!!H||a.originIsAbsolute,a.smooth!==!1,O)),L=a.xOrigin||0,z=a.yOrigin||0,O!==mu&&(V=O[0],Z=O[1],K=O[2],rt=O[3],_=lt=O[4],g=F=O[5],O.length===6?(y=Math.sqrt(V*V+Z*Z),T=Math.sqrt(rt*rt+K*K),E=V||Z?go(Z,V)*xs:0,C=K||rt?go(K,rt)*xs+E:0,C&&(T*=Math.abs(Math.cos(C*zo))),a.svg&&(_-=L-(L*V+z*K),g-=z-(L*Z+z*rt))):(Dt=O[6],_t=O[7],xt=O[8],B=O[9],tt=O[10],Mt=O[11],_=O[12],g=O[13],v=O[14],G=go(Dt,tt),M=G*xs,G&&(A=Math.cos(-G),N=Math.sin(-G),H=lt*A+xt*N,J=F*A+B*N,St=Dt*A+tt*N,xt=lt*-N+xt*A,B=F*-N+B*A,tt=Dt*-N+tt*A,Mt=_t*-N+Mt*A,lt=H,F=J,Dt=St),G=go(-K,tt),x=G*xs,G&&(A=Math.cos(-G),N=Math.sin(-G),H=V*A-xt*N,J=Z*A-B*N,St=K*A-tt*N,Mt=rt*N+Mt*A,V=H,Z=J,K=St),G=go(Z,V),E=G*xs,G&&(A=Math.cos(G),N=Math.sin(G),H=V*A+Z*N,J=lt*A+F*N,Z=Z*A-V*N,F=F*A-lt*N,V=H,lt=J),M&&Math.abs(M)+Math.abs(E)>359.9&&(M=E=0,x=180-x),y=hn(Math.sqrt(V*V+Z*Z+K*K)),T=hn(Math.sqrt(F*F+Dt*Dt)),G=go(lt,F),C=Math.abs(G)>2e-4?G*xs:0,R=Mt?1/(Mt<0?-Mt:Mt):0),a.svg&&(H=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!yy(bi(t,an)),H&&t.setAttribute("transform",H))),Math.abs(C)>90&&Math.abs(C)<270&&(u?(y*=-1,C+=E<=0?180:-180,E+=E<=0?180:-180):(T*=-1,C+=C<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=hn(y),a.scaleY=hn(T),a.rotation=hn(E)+f,a.rotationX=hn(M)+f,a.rotationY=hn(x)+f,a.skewX=C+f,a.skewY=U+f,a.transformPerspective=R+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[li]=bf(d)),a.xOffset=a.yOffset=0,a.force3D=Ai.force3D,a.renderTransform=a.svg?BT:gy?My:FT,a.uncache=0,a},bf=function(t){return(t=t.split(" "))[0]+" "+t[1]},np=function(t,n,a){var s=qn(n);return hn(parseFloat(n)+parseFloat(Xr(t,"x",a+"px",s)))+s},FT=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,My(t,n)},fs="0deg",ql="0px",hs=") ",My=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,y=a.skewY,T=a.scaleX,E=a.scaleY,M=a.transformPerspective,x=a.force3D,C=a.target,U=a.zOrigin,R="",L=x==="auto"&&t&&t!==1||x===!0;if(U&&(g!==fs||_!==fs)){var z=parseFloat(_)*zo,O=Math.sin(z),G=Math.cos(z),A;z=parseFloat(g)*zo,A=Math.cos(z),c=np(C,c,O*A*-U),f=np(C,f,-Math.sin(z)*-U),p=np(C,p,G*A*-U+U)}M!==ql&&(R+="perspective("+M+hs),(s||u)&&(R+="translate("+s+"%, "+u+"%) "),(L||c!==ql||f!==ql||p!==ql)&&(R+=p!==ql||L?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+hs),d!==fs&&(R+="rotate("+d+hs),_!==fs&&(R+="rotateY("+_+hs),g!==fs&&(R+="rotateX("+g+hs),(v!==fs||y!==fs)&&(R+="skew("+v+", "+y+hs),(T!==1||E!==1)&&(R+="scale("+T+", "+E+hs),C.style[an]=R||"translate(0, 0)"},BT=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,y=a.target,T=a.xOrigin,E=a.yOrigin,M=a.xOffset,x=a.yOffset,C=a.forceCSS,U=parseFloat(c),R=parseFloat(f),L,z,O,G,A;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=zo,d*=zo,L=Math.cos(p)*g,z=Math.sin(p)*g,O=Math.sin(p-d)*-v,G=Math.cos(p-d)*v,d&&(_*=zo,A=Math.tan(d-_),A=Math.sqrt(1+A*A),O*=A,G*=A,_&&(A=Math.tan(_),A=Math.sqrt(1+A*A),L*=A,z*=A)),L=hn(L),z=hn(z),O=hn(O),G=hn(G)):(L=g,G=v,z=O=0),(U&&!~(c+"").indexOf("px")||R&&!~(f+"").indexOf("px"))&&(U=Xr(y,"x",c,"px"),R=Xr(y,"y",f,"px")),(T||E||M||x)&&(U=hn(U+T-(T*L+E*O)+M),R=hn(R+E-(T*z+E*G)+x)),(s||u)&&(A=y.getBBox(),U=hn(U+s/100*A.width),R=hn(R+u/100*A.height)),A="matrix("+L+","+z+","+O+","+G+","+U+","+R+")",y.setAttribute("transform",A),C&&(y.style[an]=A)},IT=function(t,n,a,s,u){var c=360,f=wn(u),p=parseFloat(u)*(f&&~u.indexOf("rad")?xs:1),d=p-s,_=s+d+"deg",g,v;return f&&(g=u.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*gx)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*gx)%c-~~(d/c)*c)),t._pt=v=new oi(t._pt,n,a,s,d,yT),v.e=_,v.u="deg",t._props.push(a),v},bx=function(t,n){for(var a in n)t[a]=n[a];return t},HT=function(t,n,a){var s=bx({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,y,T;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[an]=n,f=_u(a,1),kr(a,an),a.setAttribute("transform",d)):(d=getComputedStyle(a)[an],c[an]=n,f=_u(a,1),c[an]=d);for(p in tr)d=s[p],_=f[p],d!==_&&u.indexOf(p)<0&&(y=qn(d),T=qn(_),g=y!==T?Xr(a,p,d,T):parseFloat(d),v=parseFloat(_),t._pt=new oi(t._pt,f,p,g,v-g,Wp),t._pt.u=T||0,t._props.push(p));bx(f,s)};si("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});Ef[t>1?"border"+o:o]=function(f,p,d,_,g){var v,y;if(arguments.length<4)return v=c.map(function(T){return Za(f,T,d)}),y=v.join(" "),y.split(v[0]).length===5?v[0]:y;v=(_+"").split(" "),y={},c.forEach(function(T,E){return y[T]=v[E]=v[E]||v[(E-1)/2|0]}),f.init(p,y,g)}});var Ey={name:"css",register:Yp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,y,T,E,M,x,C,U,R,L,z,O,G,A;r_||Yp(),this.styles=this.styles||_y(t),G=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(yi[E]&&ry(E,n,a,s,t,u)))){if(y=typeof _,T=Ef[E],y==="function"&&(_=_.call(a,s,t,u),y=typeof _),y==="string"&&~_.indexOf("random(")&&(_=hu(_)),T)T(this,t,E,_,a)&&(O=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Gr.lastIndex=0,Gr.test(d)||(M=qn(d),x=qn(_),x?M!==x&&(d=Xr(t,E,d,x)+x):M&&(_+=M)),this.add(f,"setProperty",d,_,s,u,0,0,E),c.push(E),G.push(E,0,f[E]);else if(y!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,s,t,u):p[E],wn(d)&&~d.indexOf("random(")&&(d=hu(d)),qn(d+"")||d==="auto"||(d+=Ai.units[E]||qn(Za(t,E))||""),(d+"").charAt(1)==="="&&(d=Za(t,E))):d=Za(t,E),v=parseFloat(d),C=y==="string"&&_.charAt(1)==="="&&_.substr(0,2),C&&(_=_.substr(2)),g=parseFloat(_),E in va&&(E==="autoAlpha"&&(v===1&&Za(t,"visibility")==="hidden"&&g&&(v=0),G.push("visibility",0,f.visibility),Br(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),E!=="scale"&&E!=="transform"&&(E=va[E],~E.indexOf(",")&&(E=E.split(",")[0]))),U=E in tr,U){if(this.styles.save(E),A=_,y==="string"&&_.substring(0,6)==="var(--"){if(_=bi(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var N=t.style.perspective;t.style.perspective=_,_=bi(t,"perspective"),N?t.style.perspective=N:kr(t,"perspective")}g=parseFloat(_)}if(R||(L=t._gsap,L.renderTransform&&!n.parseTransform||_u(t,n.parseTransform),z=n.smoothOrigin!==!1&&L.smooth,R=this._pt=new oi(this._pt,f,an,0,1,L.renderTransform,L,0,-1),R.dep=1),E==="scale")this._pt=new oi(this._pt,L,"scaleY",L.scaleY,(C?Oo(L.scaleY,C+g):g)-L.scaleY||0,Wp),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){G.push(li,0,f[li]),_=PT(_),L.svg?jp(t,_,0,z,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==L.zOrigin&&Br(this,L,"zOrigin",L.zOrigin,x),Br(this,f,E,bf(d),bf(_)));continue}else if(E==="svgOrigin"){jp(t,_,1,z,0,this);continue}else if(E in Sy){IT(this,L,E,v,C?Oo(v,C+_):_);continue}else if(E==="smoothOrigin"){Br(this,L,"smooth",L.smooth,_);continue}else if(E==="force3D"){L[E]=_;continue}else if(E==="transform"){HT(this,_,t);continue}}else E in f||(E=Xo(E)||E);if(U||(g||g===0)&&(v||v===0)&&!ST.test(_)&&E in f)M=(d+"").substr((v+"").length),g||(g=0),x=qn(_)||(E in Ai.units?Ai.units[E]:M),M!==x&&(v=Xr(t,E,d,x)),this._pt=new oi(this._pt,U?L:f,E,v,(C?Oo(v,C+g):g)-v,!U&&(x==="px"||E==="zIndex")&&n.autoRound!==!1?bT:Wp),this._pt.u=x||0,U&&A!==_?(this._pt.b=d,this._pt.e=A,this._pt.r=ET):M!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=MT);else if(E in f)OT.call(this,t,E,d,C?C+_:_);else if(E in t)this.add(t,E,d||t[E],C?C+_:_,s,u);else if(E!=="parseTransform"){Zm(E,_);continue}U||(E in f?G.push(E,0,f[E]):typeof t[E]=="function"?G.push(E,2,t[E]()):G.push(E,1,d||t[E])),c.push(E)}}O&&fy(this)},render:function(t,n){if(n.tween._time||!s_())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Za,aliases:va,getSetter:function(t,n,a){var s=va[n];return s&&s.indexOf(",")<0&&(n=s),n in tr&&n!==li&&(t._gsap.x||Za(t,"x"))?a&&_x===a?n==="scale"?CT:RT:(_x=a||{})&&(n==="scale"?wT:DT):t.style&&!qm(t.style[n])?TT:~n.indexOf("-")?AT:i_(t,n)},core:{_removeProperty:kr,_getMatrix:l_}};fi.utils.checkPrefix=Xo;fi.core.getStyleSaver=_y;(function(o,t,n,a){var s=si(o+","+t+","+n,function(u){tr[u]=1});si(t,function(u){Ai.units[u]="deg",Sy[u]=1}),va[s[13]]=o+","+t,si(a,function(u){var c=u.split(":");va[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ai.units[o]="px"});fi.registerPlugin(Ey);var iu=fi.registerPlugin(Ey)||fi;iu.core.Tween;var by={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Tx=As.createContext&&As.createContext(by),GT=["attr","size","title"];function VT(o,t){if(o==null)return{};var n=kT(o,t),a,s;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(o);for(s=0;s<u.length;s++)a=u[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(o,a)&&(n[a]=o[a])}return n}function kT(o,t){if(o==null)return{};var n={};for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)){if(t.indexOf(a)>=0)continue;n[a]=o[a]}return n}function Tf(){return Tf=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o[a]=n[a])}return o},Tf.apply(this,arguments)}function Ax(o,t){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(o,s).enumerable})),n.push.apply(n,a)}return n}function Af(o){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ax(Object(n),!0).forEach(function(a){XT(o,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):Ax(Object(n)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(n,a))})}return o}function XT(o,t,n){return t=WT(t),t in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}function WT(o){var t=qT(o,"string");return typeof t=="symbol"?t:t+""}function qT(o,t){if(typeof o!="object"||!o)return o;var n=o[Symbol.toPrimitive];if(n!==void 0){var a=n.call(o,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(o)}function Ty(o){return o&&o.map((t,n)=>As.createElement(t.tag,Af({key:n},t.attr),Ty(t.child)))}function YT(o){return t=>As.createElement(jT,Tf({attr:Af({},o.attr)},t),Ty(o.child))}function jT(o){var t=n=>{var{attr:a,size:s,title:u}=o,c=VT(o,GT),f=s||n.size||"1em",p;return n.className&&(p=n.className),o.className&&(p=(p?p+" ":"")+o.className),As.createElement("svg",Tf({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:p,style:Af(Af({color:o.color||n.color},n.style),o.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&As.createElement("title",null,u),o.children)};return Tx!==void 0?As.createElement(Tx.Consumer,null,n=>t(n)):t(by)}function ZT(o){return YT({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"},child:[]}]})(o)}const KT=({items:o,className:t="",ease:n="power3.out",baseColor:a="#fff",menuColor:s,buttonBgColor:u,buttonTextColor:c})=>{const[f,p]=Cn.useState(!1),[d,_]=Cn.useState(!1),g=Cn.useRef(null),v=Cn.useRef([]),y=Cn.useRef(null),T=()=>{const C=g.current;if(!C)return 260;if(window.matchMedia("(max-width: 768px)").matches){const R=C.querySelector(".card-nav-content");if(R){const L=R.style.visibility,z=R.style.pointerEvents,O=R.style.position,G=R.style.height;R.style.visibility="visible",R.style.pointerEvents="auto",R.style.position="static",R.style.height="auto",R.offsetHeight;const A=60,N=16,V=R.scrollHeight;return R.style.visibility=L,R.style.pointerEvents=z,R.style.position=O,R.style.height=G,A+V+N}}return 260},E=()=>{const C=g.current;if(!C)return null;iu.set(C,{height:60,overflow:"hidden"}),iu.set(v.current,{y:50,opacity:0});const U=iu.timeline({paused:!0});return U.to(C,{height:T,duration:.4,ease:n}),U.to(v.current,{y:0,opacity:1,duration:.4,ease:n,stagger:.08},"-=0.1"),U};Cn.useLayoutEffect(()=>{const C=E();return y.current=C,()=>{C?.kill(),y.current=null}},[n,o]),Cn.useLayoutEffect(()=>{const C=()=>{if(y.current)if(d){const U=T();iu.set(g.current,{height:U}),y.current.kill();const R=E();R&&(R.progress(1),y.current=R)}else{y.current.kill();const U=E();U&&(y.current=U)}};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[d]);const M=()=>{const C=y.current;C&&(d?(p(!1),C.eventCallback("onReverseComplete",()=>_(!1)),C.reverse()):(p(!0),_(!0),C.play(0)))},x=C=>U=>{U&&(v.current[C]=U)};return fn.jsx("div",{className:`card-nav-container ${t}`,children:fn.jsxs("nav",{ref:g,className:`card-nav ${d?"open":""}`,style:{backgroundColor:a},children:[fn.jsx("div",{className:"card-nav-top",children:fn.jsxs("div",{className:`hamburger-menu ${f?"open":""}`,onClick:M,role:"button","aria-label":d?"Close menu":"Open menu",tabIndex:0,style:{color:s||"#000"},children:[fn.jsx("div",{className:"hamburger-line"}),fn.jsx("div",{className:"hamburger-line"})]})}),fn.jsx("div",{className:"card-nav-content","aria-hidden":!d,children:(o||[]).slice(0,3).map((C,U)=>fn.jsxs("div",{className:"nav-card",ref:x(U),style:{backgroundColor:C.bgColor,color:C.textColor},children:[fn.jsx("div",{className:"nav-card-label",children:C.label}),fn.jsx("div",{className:"nav-card-links",children:C.links?.map((R,L)=>fn.jsxs("a",{className:"nav-card-link",href:R.href,"aria-label":R.ariaLabel,children:[fn.jsx(ZT,{className:"nav-card-link-icon","aria-hidden":"true"}),R.label]},`${R.label}-${L}`))})]},`${C.label}-${U}`))})]})})};const u_="182",QT=0,Rx=1,JT=2,hf=1,$T=2,au=3,Wr=0,ui=1,Ka=2,Qa=0,Fo=1,Zp=2,Cx=3,wx=4,t1=5,ys=100,e1=101,n1=102,i1=103,a1=104,r1=200,s1=201,o1=202,l1=203,Kp=204,Qp=205,u1=206,c1=207,f1=208,h1=209,d1=210,p1=211,m1=212,_1=213,g1=214,Jp=0,$p=1,tm=2,Wo=3,em=4,nm=5,im=6,am=7,Ay=0,v1=1,x1=2,Sa=0,Ry=1,Cy=2,wy=3,Dy=4,Uy=5,Ly=6,Ny=7,Oy=300,Ls=301,qo=302,rm=303,sm=304,zf=306,om=1e3,Ti=1001,lm=1002,Hn=1003,S1=1004,Ic=1005,yn=1006,ip=1007,bs=1008,Vi=1009,Py=1010,zy=1011,gu=1012,c_=1013,Ma=1014,aa=1015,Ea=1016,f_=1017,h_=1018,vu=1020,Fy=35902,By=35899,Iy=1021,Hy=1022,Wi=1023,er=1026,Ts=1027,Gy=1028,d_=1029,Yo=1030,p_=1031,m_=1033,df=33776,pf=33777,mf=33778,_f=33779,um=35840,cm=35841,fm=35842,hm=35843,dm=36196,pm=37492,mm=37496,_m=37488,gm=37489,vm=37490,xm=37491,Sm=37808,ym=37809,Mm=37810,Em=37811,bm=37812,Tm=37813,Am=37814,Rm=37815,Cm=37816,wm=37817,Dm=37818,Um=37819,Lm=37820,Nm=37821,Om=36492,Pm=36494,zm=36495,Fm=36283,Bm=36284,Im=36285,Hm=36286,y1=3200,M1=0,E1=1,Pr="",Gi="srgb",jo="srgb-linear",Rf="linear",Ie="srgb",vo=7680,Dx=519,b1=512,T1=513,A1=514,__=515,R1=516,C1=517,g_=518,w1=519,Ux=35044,Lx="300 es",xa=2e3,Cf=2001;function Vy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function wf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function D1(){const o=wf("canvas");return o.style.display="block",o}const Nx={};function Ox(...o){const t="THREE."+o.shift();console.log(t,...o)}function ne(...o){const t="THREE."+o.shift();console.warn(t,...o)}function we(...o){const t="THREE."+o.shift();console.error(t,...o)}function xu(...o){const t=o.join(" ");t in Nx||(Nx[t]=!0,ne(...o))}function U1(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}class Ko{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=Math.PI/180,Gm=180/Math.PI;function Mu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Xn[o&255]+Xn[o>>8&255]+Xn[o>>16&255]+Xn[o>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]).toLowerCase()}function ye(o,t,n){return Math.max(t,Math.min(n,o))}function L1(o,t){return(o%t+t)%t}function rp(o,t,n){return(1-n)*o+n*t}function Yl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ai(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class se{constructor(t=0,n=0){se.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Eu{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],g=a[s+3],v=u[c+0],y=u[c+1],T=u[c+2],E=u[c+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=y,t[n+2]=T,t[n+3]=E;return}if(g!==E||p!==v||d!==y||_!==T){let M=p*v+d*y+_*T+g*E;M<0&&(v=-v,y=-y,T=-T,E=-E,M=-M);let x=1-f;if(M<.9995){const C=Math.acos(M),U=Math.sin(C);x=Math.sin(x*C)/U,f=Math.sin(f*C)/U,p=p*x+v*f,d=d*x+y*f,_=_*x+T*f,g=g*x+E*f}else{p=p*x+v*f,d=d*x+y*f,_=_*x+T*f,g=g*x+E*f;const C=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=C,d*=C,_*=C,g*=C}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],g=u[c],v=u[c+1],y=u[c+2],T=u[c+3];return t[n]=f*T+_*g+p*y-d*v,t[n+1]=p*T+_*v+d*g-f*y,t[n+2]=d*T+_*y+f*v-p*g,t[n+3]=_*T-f*g-p*v-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),g=f(u/2),v=p(a/2),y=p(s/2),T=p(u/2);switch(c){case"XYZ":this._x=v*_*g+d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g-v*y*T;break;case"YXZ":this._x=v*_*g+d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g+v*y*T;break;case"ZXY":this._x=v*_*g-d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g-v*y*T;break;case"ZYX":this._x=v*_*g-d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g+v*y*T;break;case"YZX":this._x=v*_*g+d*y*T,this._y=d*y*g+v*_*T,this._z=d*_*T-v*y*g,this._w=d*_*g-v*y*T;break;case"XZY":this._x=v*_*g-d*y*T,this._y=d*y*g-v*_*T,this._z=d*_*T+v*y*g,this._w=d*_*g+v*y*T;break;default:ne("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(u-d)*y,this._z=(c-s)*y}else if(a>f&&a>g){const y=2*Math.sqrt(1+a-f-g);this._w=(_-p)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(u+d)/y}else if(f>g){const y=2*Math.sqrt(1+f-a-g);this._w=(u-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+g-a-f);this._w=(c-s)/y,this._x=(u+d)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-u*p,this._y=s*_+c*p+u*f-a*d,this._z=u*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-u*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,s=t._y,u=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,u=-u,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,n=0,a=0){ut.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Px.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Px.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-u*s),g=2*(u*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-u*g,this.z=s+p*g+u*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-u*f,this.y=u*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return sp.copy(this).projectOnVector(t),this.sub(sp)}reflect(t){return this.sub(sp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sp=new ut,Px=new Eu;class ce{constructor(t,n,a,s,u,c,f,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d)}set(t,n,a,s,u,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],y=a[5],T=a[8],E=s[0],M=s[3],x=s[6],C=s[1],U=s[4],R=s[7],L=s[2],z=s[5],O=s[8];return u[0]=c*E+f*C+p*L,u[3]=c*M+f*U+p*z,u[6]=c*x+f*R+p*O,u[1]=d*E+_*C+g*L,u[4]=d*M+_*U+g*z,u[7]=d*x+_*R+g*O,u[2]=v*E+y*C+T*L,u[5]=v*M+y*U+T*z,u[8]=v*x+y*R+T*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*u*_+a*f*p+s*u*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*u,y=d*u-c*p,T=n*g+a*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=g*E,t[1]=(s*d-_*a)*E,t[2]=(f*a-s*c)*E,t[3]=v*E,t[4]=(_*n-s*p)*E,t[5]=(s*u-f*n)*E,t[6]=y*E,t[7]=(a*p-d*n)*E,t[8]=(c*n-a*u)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(op.makeScale(t,n)),this}rotate(t){return this.premultiply(op.makeRotation(-t)),this}translate(t,n){return this.premultiply(op.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const op=new ce,zx=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fx=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N1(){const o={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(s,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ie&&(s.r=Ja(s.r),s.g=Ja(s.g),s.b=Ja(s.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(s.r=Bo(s.r),s.g=Bo(s.g),s.b=Bo(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pr?Rf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,c){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return xu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return xu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[jo]:{primaries:t,whitePoint:a,transfer:Rf,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gi},outputColorSpaceConfig:{drawingBufferColorSpace:Gi}},[Gi]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:zx,fromXYZ:Fx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gi}}}),o}const Ae=N1();function Ja(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xo;class O1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{xo===void 0&&(xo=wf("canvas")),xo.width=t.width,xo.height=t.height;const s=xo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=xo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=wf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=Ja(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ja(n[a]/255)*255):n[a]=Ja(n[a]);return{data:n,width:t.width,height:t.height}}else return ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let P1=0;class v_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Mu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(lp(s[c].image)):u.push(lp(s[c]))}else u=lp(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function lp(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?O1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ne("Texture: Unable to serialize Texture."),{})}let z1=0;const up=new ut;class Qn extends Ko{constructor(t=Qn.DEFAULT_IMAGE,n=Qn.DEFAULT_MAPPING,a=Ti,s=Ti,u=yn,c=bs,f=Wi,p=Vi,d=Qn.DEFAULT_ANISOTROPY,_=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Mu(),this.name="",this.source=new v_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(up).x}get height(){return this.source.getSize(up).y}get depth(){return this.source.getSize(up).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ne(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case om:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case lm:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case om:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case lm:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=Oy;Qn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,n=0,a=0,s=1){on.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],y=p[5],T=p[9],E=p[2],M=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-E)<.01&&Math.abs(T-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+E)<.1&&Math.abs(T+M)<.1&&Math.abs(d+y+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,R=(y+1)/2,L=(x+1)/2,z=(_+v)/4,O=(g+E)/4,G=(T+M)/4;return U>R&&U>L?U<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(U),s=z/a,u=O/a):R>L?R<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(R),a=z/s,u=G/s):L<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(L),a=O/u,s=G/u),this.set(a,s,u,n),this}let C=Math.sqrt((M-T)*(M-T)+(g-E)*(g-E)+(v-_)*(v-_));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(g-E)/C,this.z=(v-_)/C,this.w=Math.acos((d+y+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F1 extends Ko{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new on(0,0,t,n),this.scissorTest=!1,this.viewport=new on(0,0,t,n);const s={width:t,height:n,depth:a.depth},u=new Qn(s);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new v_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends F1{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ky extends Qn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class B1 extends Qn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu{constructor(t=new ut(1/0,1/0,1/0),n=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint($i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint($i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=$i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,$i):$i.fromBufferAttribute(u,c),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Hc.copy(a.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jl),Gc.subVectors(this.max,jl),So.subVectors(t.a,jl),yo.subVectors(t.b,jl),Mo.subVectors(t.c,jl),wr.subVectors(yo,So),Dr.subVectors(Mo,yo),ds.subVectors(So,Mo);let n=[0,-wr.z,wr.y,0,-Dr.z,Dr.y,0,-ds.z,ds.y,wr.z,0,-wr.x,Dr.z,0,-Dr.x,ds.z,0,-ds.x,-wr.y,wr.x,0,-Dr.y,Dr.x,0,-ds.y,ds.x,0];return!cp(n,So,yo,Mo,Gc)||(n=[1,0,0,0,1,0,0,0,1],!cp(n,So,yo,Mo,Gc))?!1:(Vc.crossVectors(wr,Dr),n=[Vc.x,Vc.y,Vc.z],cp(n,So,yo,Mo,Gc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ka=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],$i=new ut,Hc=new bu,So=new ut,yo=new ut,Mo=new ut,wr=new ut,Dr=new ut,ds=new ut,jl=new ut,Gc=new ut,Vc=new ut,ps=new ut;function cp(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){ps.fromArray(o,u);const f=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),p=t.dot(ps),d=n.dot(ps),_=a.dot(ps);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const I1=new bu,Zl=new ut,fp=new ut;class Ff{constructor(t=new ut,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):I1.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zl.subVectors(t,this.center);const n=Zl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Zl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zl.copy(t.center).add(fp)),this.expandByPoint(Zl.copy(t.center).sub(fp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xa=new ut,hp=new ut,kc=new ut,Ur=new ut,dp=new ut,Xc=new ut,pp=new ut;class Xy{constructor(t=new ut,n=new ut(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Xa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Xa.copy(this.origin).addScaledVector(this.direction,n),Xa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){hp.copy(t).add(n).multiplyScalar(.5),kc.copy(n).sub(t).normalize(),Ur.copy(this.origin).sub(hp);const u=t.distanceTo(n)*.5,c=-this.direction.dot(kc),f=Ur.dot(this.direction),p=-Ur.dot(kc),d=Ur.lengthSq(),_=Math.abs(1-c*c);let g,v,y,T;if(_>0)if(g=c*p-f,v=c*f-p,T=u*_,g>=0)if(v>=-T)if(v<=T){const E=1/_;g*=E,v*=E,y=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v=-u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*u+f)),v=g>0?-u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-u,-p),u),y=v*(v+2*p)+d):(g=Math.max(0,-(c*u+f)),v=g>0?u:Math.min(Math.max(-u,-p),u),y=-g*g+v*(v+2*p)+d);else v=c>0?-u:u,g=Math.max(0,-(c*v+f)),y=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(hp).addScaledVector(kc,v),y}intersectSphere(t,n){Xa.subVectors(t.center,this.origin);const a=Xa.dot(this.direction),s=Xa.dot(Xa)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,s=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,s=(t.min.x-v.x)*d),_>=0?(u=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Xa)!==null}intersectTriangle(t,n,a,s,u){dp.subVectors(n,t),Xc.subVectors(a,t),pp.crossVectors(dp,Xc);let c=this.direction.dot(pp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ur.subVectors(this.origin,t);const p=f*this.direction.dot(Xc.crossVectors(Ur,Xc));if(p<0)return null;const d=f*this.direction.dot(dp.cross(Ur));if(d<0||p+d>c)return null;const _=-f*Ur.dot(pp);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(t,n,a,s,u,c,f,p,d,_,g,v,y,T,E,M){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d,_,g,v,y,T,E,M)}set(t,n,a,s,u,c,f,p,d,_,g,v,y,T,E,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=s,x[1]=u,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=y,x[7]=T,x[11]=E,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/Eo.setFromMatrixColumn(t,0).length(),u=1/Eo.setFromMatrixColumn(t,1).length(),c=1/Eo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const v=c*_,y=c*g,T=f*_,E=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=y+T*d,n[5]=v-E*d,n[9]=-f*p,n[2]=E-v*d,n[6]=T+y*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,y=p*g,T=d*_,E=d*g;n[0]=v+E*f,n[4]=T*f-y,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=y*f-T,n[6]=E+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,y=p*g,T=d*_,E=d*g;n[0]=v-E*f,n[4]=-c*g,n[8]=T+y*f,n[1]=y+T*f,n[5]=c*_,n[9]=E-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,y=c*g,T=f*_,E=f*g;n[0]=p*_,n[4]=T*d-y,n[8]=v*d+E,n[1]=p*g,n[5]=E*d+v,n[9]=y*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,y=c*d,T=f*p,E=f*d;n[0]=p*_,n[4]=E-v*g,n[8]=T*g+y,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=y*g+T,n[10]=v-E*g}else if(t.order==="XZY"){const v=c*p,y=c*d,T=f*p,E=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+E,n[5]=c*_,n[9]=y*g-T,n[2]=T*g-y,n[6]=f*_,n[10]=E*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(H1,t,G1)}lookAt(t,n,a){const s=this.elements;return xi.subVectors(t,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Lr.crossVectors(a,xi),Lr.lengthSq()===0&&(Math.abs(a.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Lr.crossVectors(a,xi)),Lr.normalize(),Wc.crossVectors(xi,Lr),s[0]=Lr.x,s[4]=Wc.x,s[8]=xi.x,s[1]=Lr.y,s[5]=Wc.y,s[9]=xi.y,s[2]=Lr.z,s[6]=Wc.z,s[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],y=a[13],T=a[2],E=a[6],M=a[10],x=a[14],C=a[3],U=a[7],R=a[11],L=a[15],z=s[0],O=s[4],G=s[8],A=s[12],N=s[1],V=s[5],Z=s[9],K=s[13],rt=s[2],lt=s[6],F=s[10],H=s[14],J=s[3],St=s[7],xt=s[11],B=s[15];return u[0]=c*z+f*N+p*rt+d*J,u[4]=c*O+f*V+p*lt+d*St,u[8]=c*G+f*Z+p*F+d*xt,u[12]=c*A+f*K+p*H+d*B,u[1]=_*z+g*N+v*rt+y*J,u[5]=_*O+g*V+v*lt+y*St,u[9]=_*G+g*Z+v*F+y*xt,u[13]=_*A+g*K+v*H+y*B,u[2]=T*z+E*N+M*rt+x*J,u[6]=T*O+E*V+M*lt+x*St,u[10]=T*G+E*Z+M*F+x*xt,u[14]=T*A+E*K+M*H+x*B,u[3]=C*z+U*N+R*rt+L*J,u[7]=C*O+U*V+R*lt+L*St,u[11]=C*G+U*Z+R*F+L*xt,u[15]=C*A+U*K+R*H+L*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],y=t[14],T=t[3],E=t[7],M=t[11],x=t[15],C=p*y-d*v,U=f*y-d*g,R=f*v-p*g,L=c*y-d*_,z=c*v-p*_,O=c*g-f*_;return n*(E*C-M*U+x*R)-a*(T*C-M*L+x*z)+s*(T*U-E*L+x*O)-u*(T*R-E*z+M*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],y=t[11],T=t[12],E=t[13],M=t[14],x=t[15],C=g*M*d-E*v*d+E*p*y-f*M*y-g*p*x+f*v*x,U=T*v*d-_*M*d-T*p*y+c*M*y+_*p*x-c*v*x,R=_*E*d-T*g*d+T*f*y-c*E*y-_*f*x+c*g*x,L=T*g*p-_*E*p-T*f*v+c*E*v+_*f*M-c*g*M,z=n*C+a*U+s*R+u*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return t[0]=C*O,t[1]=(E*v*u-g*M*u-E*s*y+a*M*y+g*s*x-a*v*x)*O,t[2]=(f*M*u-E*p*u+E*s*d-a*M*d-f*s*x+a*p*x)*O,t[3]=(g*p*u-f*v*u-g*s*d+a*v*d+f*s*y-a*p*y)*O,t[4]=U*O,t[5]=(_*M*u-T*v*u+T*s*y-n*M*y-_*s*x+n*v*x)*O,t[6]=(T*p*u-c*M*u-T*s*d+n*M*d+c*s*x-n*p*x)*O,t[7]=(c*v*u-_*p*u+_*s*d-n*v*d-c*s*y+n*p*y)*O,t[8]=R*O,t[9]=(T*g*u-_*E*u-T*a*y+n*E*y+_*a*x-n*g*x)*O,t[10]=(c*E*u-T*f*u+T*a*d-n*E*d-c*a*x+n*f*x)*O,t[11]=(_*f*u-c*g*u-_*a*d+n*g*d+c*a*y-n*f*y)*O,t[12]=L*O,t[13]=(_*E*s-T*g*s+T*a*v-n*E*v-_*a*M+n*g*M)*O,t[14]=(T*f*s-c*E*s-T*a*p+n*E*p+c*a*M-n*f*M)*O,t[15]=(c*g*s-_*f*s+_*a*p-n*g*p-c*a*v+n*f*v)*O,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,p=t.z,d=u*c,_=u*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,d=u+u,_=c+c,g=f+f,v=u*d,y=u*_,T=u*g,E=c*_,M=c*g,x=f*g,C=p*d,U=p*_,R=p*g,L=a.x,z=a.y,O=a.z;return s[0]=(1-(E+x))*L,s[1]=(y+R)*L,s[2]=(T-U)*L,s[3]=0,s[4]=(y-R)*z,s[5]=(1-(v+x))*z,s[6]=(M+C)*z,s[7]=0,s[8]=(T+U)*O,s[9]=(M-C)*O,s[10]=(1-(v+E))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let u=Eo.set(s[0],s[1],s[2]).length();const c=Eo.set(s[4],s[5],s[6]).length(),f=Eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(u=-u),ta.copy(this);const d=1/u,_=1/c,g=1/f;return ta.elements[0]*=d,ta.elements[1]*=d,ta.elements[2]*=d,ta.elements[4]*=_,ta.elements[5]*=_,ta.elements[6]*=_,ta.elements[8]*=g,ta.elements[9]*=g,ta.elements[10]*=g,n.setFromRotationMatrix(ta),a.x=u,a.y=c,a.z=f,this}makePerspective(t,n,a,s,u,c,f=xa,p=!1){const d=this.elements,_=2*u/(n-t),g=2*u/(a-s),v=(n+t)/(n-t),y=(a+s)/(a-s);let T,E;if(p)T=u/(c-u),E=c*u/(c-u);else if(f===xa)T=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(f===Cf)T=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=xa,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-s),v=-(n+t)/(n-t),y=-(a+s)/(a-s);let T,E;if(p)T=1/(c-u),E=c/(c-u);else if(f===xa)T=-2/(c-u),E=-(c+u)/(c-u);else if(f===Cf)T=-1/(c-u),E=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=T,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Eo=new ut,ta=new dn,H1=new ut(0,0,0),G1=new ut(1,1,1),Lr=new ut,Wc=new ut,xi=new ut,Bx=new dn,Ix=new Eu;class nr{constructor(t=0,n=0,a=0,s=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],g=s[2],v=s[6],y=s[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ix.setFromEuler(this),this.setFromQuaternion(Ix,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class Wy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V1=0;const Hx=new ut,bo=new Eu,Wa=new dn,qc=new ut,Kl=new ut,k1=new ut,X1=new Eu,Gx=new ut(1,0,0),Vx=new ut(0,1,0),kx=new ut(0,0,1),Xx={type:"added"},W1={type:"removed"},To={type:"childadded",child:null},mp={type:"childremoved",child:null};class ci extends Ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Mu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new ut,n=new nr,a=new Eu,s=new ut(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dn},normalMatrix:{value:new ce}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,n){return bo.setFromAxisAngle(t,n),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(Gx,t)}rotateY(t){return this.rotateOnAxis(Vx,t)}rotateZ(t){return this.rotateOnAxis(kx,t)}translateOnAxis(t,n){return Hx.copy(t).applyQuaternion(this.quaternion),this.position.add(Hx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Gx,t)}translateY(t){return this.translateOnAxis(Vx,t)}translateZ(t){return this.translateOnAxis(kx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?qc.copy(t):qc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Kl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Kl,qc,this.up):Wa.lookAt(qc,Kl,this.up),this.quaternion.setFromRotationMatrix(Wa),s&&(Wa.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(Wa),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xx),To.child=t,this.dispatchEvent(To),To.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(W1),mp.child=t,this.dispatchEvent(mp),mp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xx),To.child=t,this.dispatchEvent(To),To.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,t,k1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kl,X1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(u(t.materials,this.material[p]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(u(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),y=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),y.length>0&&(a.animations=y),T.length>0&&(a.nodes=T)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}ci.DEFAULT_UP=new ut(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ea=new ut,qa=new ut,_p=new ut,Ya=new ut,Ao=new ut,Ro=new ut,Wx=new ut,gp=new ut,vp=new ut,xp=new ut,Sp=new on,yp=new on,Mp=new on;class ia{constructor(t=new ut,n=new ut,a=new ut){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),ea.subVectors(t,n),s.cross(ea);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){ea.subVectors(s,n),qa.subVectors(a,n),_p.subVectors(t,n);const c=ea.dot(ea),f=ea.dot(qa),p=ea.dot(_p),d=qa.dot(qa),_=qa.dot(_p),g=c*d-f*f;if(g===0)return u.set(0,0,0),null;const v=1/g,y=(d*p-f*_)*v,T=(c*_-f*p)*v;return u.set(1-y-T,T,y)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Ya)===null?!1:Ya.x>=0&&Ya.y>=0&&Ya.x+Ya.y<=1}static getInterpolation(t,n,a,s,u,c,f,p){return this.getBarycoord(t,n,a,s,Ya)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ya.x),p.addScaledVector(c,Ya.y),p.addScaledVector(f,Ya.z),p)}static getInterpolatedAttribute(t,n,a,s,u,c){return Sp.setScalar(0),yp.setScalar(0),Mp.setScalar(0),Sp.fromBufferAttribute(t,n),yp.fromBufferAttribute(t,a),Mp.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Sp,u.x),c.addScaledVector(yp,u.y),c.addScaledVector(Mp,u.z),c}static isFrontFacing(t,n,a,s){return ea.subVectors(a,n),qa.subVectors(t,n),ea.cross(qa).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ea.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),ea.cross(qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ia.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ia.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return ia.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return ia.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ia.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;Ao.subVectors(s,a),Ro.subVectors(u,a),gp.subVectors(t,a);const p=Ao.dot(gp),d=Ro.dot(gp);if(p<=0&&d<=0)return n.copy(a);vp.subVectors(t,s);const _=Ao.dot(vp),g=Ro.dot(vp);if(_>=0&&g<=_)return n.copy(s);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Ao,c);xp.subVectors(t,u);const y=Ao.dot(xp),T=Ro.dot(xp);if(T>=0&&y<=T)return n.copy(u);const E=y*d-p*T;if(E<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(Ro,f);const M=_*T-y*g;if(M<=0&&g-_>=0&&y-T>=0)return Wx.subVectors(u,s),f=(g-_)/(g-_+(y-T)),n.copy(s).addScaledVector(Wx,f);const x=1/(M+E+v);return c=E*x,f=v*x,n.copy(a).addScaledVector(Ao,c).addScaledVector(Ro,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Yc={h:0,s:0,l:0};function Ep(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Ne{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ae.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ae.workingColorSpace){if(t=L1(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=Ep(c,u,t+1/3),this.g=Ep(c,u,t),this.b=Ep(c,u,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,n=Gi){function a(u){u!==void 0&&parseFloat(u)<1&&ne("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:ne("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);ne("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Gi){const a=qy[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ne("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Gi){return Ae.workingToColorSpace(Wn.copy(this),t),Math.round(ye(Wn.r*255,0,255))*65536+Math.round(ye(Wn.g*255,0,255))*256+Math.round(ye(Wn.b*255,0,255))}getHexString(t=Gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Wn.copy(this),n);const a=Wn.r,s=Wn.g,u=Wn.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(s-u)/g+(s<u?6:0);break;case s:p=(u-a)/g+2;break;case u:p=(a-s)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Wn.copy(this),n),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Gi){Ae.workingToColorSpace(Wn.copy(this),t);const n=Wn.r,a=Wn.g,s=Wn.b;return t!==Gi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Nr),this.setHSL(Nr.h+t,Nr.s+n,Nr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Nr),t.getHSL(Yc);const a=rp(Nr.h,Yc.h,n),s=rp(Nr.s,Yc.s,n),u=rp(Nr.l,Yc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ne;Ne.NAMES=qy;let q1=0;class Tu extends Ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Mu(),this.name="",this.type="Material",this.blending=Fo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kp,this.blendDst=Qp,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ne(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(a.blending=this.blending),this.side!==Wr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Kp&&(a.blendSrc=this.blendSrc),this.blendDst!==Qp&&(a.blendDst=this.blendDst),this.blendEquation!==ys&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yy extends Tu{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=Ay,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new ut,jc=new se;let Y1=0;class sa{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Ux,this.updateRanges=[],this.gpuType=aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)jc.fromBufferAttribute(this,n),jc.applyMatrix3(t),this.setXY(n,jc.x,jc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Yl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ai(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Yl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Yl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Yl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Yl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ai(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),s=ai(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=ai(n,this.array),a=ai(a,this.array),s=ai(s,this.array),u=ai(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ux&&(t.usage=this.usage),t}}class jy extends sa{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Zy extends sa{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class oa extends sa{constructor(t,n,a){super(new Float32Array(t),n,a)}}let j1=0;const Ii=new dn,bp=new ci,Co=new ut,Si=new bu,Ql=new bu,Rn=new ut;class la extends Ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Mu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vy(t)?Zy:jy)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ce().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,n,a){return Ii.makeTranslation(t,n,a),this.applyMatrix4(Ii),this}scale(t,n,a){return Ii.makeScale(t,n,a),this.applyMatrix4(Ii),this}lookAt(t){return bp.lookAt(t),bp.updateMatrix(),this.applyMatrix4(bp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new oa(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const u=t[s];n.setXYZ(s,u.x,u.y,u.z||0)}t.length>n.count&&ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];Si.setFromBufferAttribute(u),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ff);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];Ql.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(Si.min,Ql.min),Si.expandByPoint(Rn),Rn.addVectors(Si.max,Ql.max),Si.expandByPoint(Rn)):(Si.expandByPoint(Ql.min),Si.expandByPoint(Ql.max))}Si.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)Rn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(Rn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Rn.fromBufferAttribute(f,d),p&&(Co.fromBufferAttribute(t,d),Rn.add(Co)),s=Math.max(s,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sa(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let G=0;G<a.count;G++)f[G]=new ut,p[G]=new ut;const d=new ut,_=new ut,g=new ut,v=new se,y=new se,T=new se,E=new ut,M=new ut;function x(G,A,N){d.fromBufferAttribute(a,G),_.fromBufferAttribute(a,A),g.fromBufferAttribute(a,N),v.fromBufferAttribute(u,G),y.fromBufferAttribute(u,A),T.fromBufferAttribute(u,N),_.sub(d),g.sub(d),y.sub(v),T.sub(v);const V=1/(y.x*T.y-T.x*y.y);isFinite(V)&&(E.copy(_).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(V),M.copy(g).multiplyScalar(y.x).addScaledVector(_,-T.x).multiplyScalar(V),f[G].add(E),f[A].add(E),f[N].add(E),p[G].add(M),p[A].add(M),p[N].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let G=0,A=C.length;G<A;++G){const N=C[G],V=N.start,Z=N.count;for(let K=V,rt=V+Z;K<rt;K+=3)x(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const U=new ut,R=new ut,L=new ut,z=new ut;function O(G){L.fromBufferAttribute(s,G),z.copy(L);const A=f[G];U.copy(A),U.sub(L.multiplyScalar(L.dot(A))).normalize(),R.crossVectors(z,A);const V=R.dot(p[G])<0?-1:1;c.setXYZW(G,U.x,U.y,U.z,V)}for(let G=0,A=C.length;G<A;++G){const N=C[G],V=N.start,Z=N.count;for(let K=V,rt=V+Z;K<rt;K+=3)O(t.getX(K+0)),O(t.getX(K+1)),O(t.getX(K+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new sa(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,y=a.count;v<y;v++)a.setXYZ(v,0,0,0);const s=new ut,u=new ut,c=new ut,f=new ut,p=new ut,d=new ut,_=new ut,g=new ut;if(t)for(let v=0,y=t.count;v<y;v+=3){const T=t.getX(v+0),E=t.getX(v+1),M=t.getX(v+2);s.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,M),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,M),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,y=n.count;v<y;v+=3)s.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,u),g.subVectors(s,u),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let y=0,T=0;for(let E=0,M=p.length;E<M;E++){f.isInterleavedBufferAttribute?y=p[E]*f.data.stride+f.offset:y=p[E]*_;for(let x=0;x<_;x++)v[T++]=d[y++]}return new sa(v,_,g)}if(this.index===null)return ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new la,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const u=this.morphAttributes;for(const f in u){const p=[],d=u[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],y=t(v,a);p.push(y)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const y=d[g];_.push(y.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const u=t.morphAttributes;for(const d in u){const _=[],g=u[d];for(let v=0,y=g.length;v<y;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qx=new dn,ms=new Xy,Zc=new Ff,Yx=new ut,Kc=new ut,Qc=new ut,Jc=new ut,Tp=new ut,$c=new ut,jx=new ut,tf=new ut;class qi extends ci{constructor(t=new la,n=new Yy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){$c.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const _=f[p],g=u[p];_!==0&&(Tp.fromBufferAttribute(g,t),c?$c.addScaledVector(Tp,_):$c.addScaledVector(Tp.sub(n),_))}n.add($c)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Zc.copy(a.boundingSphere),Zc.applyMatrix4(u),ms.copy(t.ray).recast(t.near),!(Zc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Zc,Yx)===null||ms.origin.distanceToSquared(Yx)>(t.far-t.near)**2))&&(qx.copy(u).invert(),ms.copy(t.ray).applyMatrix4(qx),!(a.boundingBox!==null&&ms.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,ms)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,v=u.groups,y=u.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,E=v.length;T<E;T++){const M=v[T],x=c[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(f.count,Math.min(M.start+M.count,y.start+y.count));for(let R=C,L=U;R<L;R+=3){const z=f.getX(R),O=f.getX(R+1),G=f.getX(R+2);s=ef(this,x,t,a,d,_,g,z,O,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=M.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),E=Math.min(f.count,y.start+y.count);for(let M=T,x=E;M<x;M+=3){const C=f.getX(M),U=f.getX(M+1),R=f.getX(M+2);s=ef(this,c,t,a,d,_,g,C,U,R),s&&(s.faceIndex=Math.floor(M/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,E=v.length;T<E;T++){const M=v[T],x=c[M.materialIndex],C=Math.max(M.start,y.start),U=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let R=C,L=U;R<L;R+=3){const z=R,O=R+1,G=R+2;s=ef(this,x,t,a,d,_,g,z,O,G),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=M.materialIndex,n.push(s))}}else{const T=Math.max(0,y.start),E=Math.min(p.count,y.start+y.count);for(let M=T,x=E;M<x;M+=3){const C=M,U=M+1,R=M+2;s=ef(this,c,t,a,d,_,g,C,U,R),s&&(s.faceIndex=Math.floor(M/3),n.push(s))}}}}function Z1(o,t,n,a,s,u,c,f){let p;if(t.side===ui?p=a.intersectTriangle(c,u,s,!0,f):p=a.intersectTriangle(s,u,c,t.side===Wr,f),p===null)return null;tf.copy(f),tf.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(tf);return d<n.near||d>n.far?null:{distance:d,point:tf.clone(),object:o}}function ef(o,t,n,a,s,u,c,f,p,d){o.getVertexPosition(f,Kc),o.getVertexPosition(p,Qc),o.getVertexPosition(d,Jc);const _=Z1(o,t,n,a,Kc,Qc,Jc,jx);if(_){const g=new ut;ia.getBarycoord(jx,Kc,Qc,Jc,g),s&&(_.uv=ia.getInterpolatedAttribute(s,f,p,d,g,new se)),u&&(_.uv1=ia.getInterpolatedAttribute(u,f,p,d,g,new se)),c&&(_.normal=ia.getInterpolatedAttribute(c,f,p,d,g,new ut),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ut,materialIndex:0};ia.getNormal(Kc,Qc,Jc,v.normal),_.face=v,_.barycoord=g}return _}class Au extends la{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,a,n,t,c,u,0),T("z","y","x",1,-1,a,n,-t,c,u,1),T("x","z","y",1,1,t,a,n,s,c,2),T("x","z","y",1,-1,t,a,-n,s,c,3),T("x","y","z",1,-1,t,n,a,s,u,4),T("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new oa(d,3)),this.setAttribute("normal",new oa(_,3)),this.setAttribute("uv",new oa(g,2));function T(E,M,x,C,U,R,L,z,O,G,A){const N=R/O,V=L/G,Z=R/2,K=L/2,rt=z/2,lt=O+1,F=G+1;let H=0,J=0;const St=new ut;for(let xt=0;xt<F;xt++){const B=xt*V-K;for(let tt=0;tt<lt;tt++){const _t=tt*N-Z;St[E]=_t*C,St[M]=B*U,St[x]=rt,d.push(St.x,St.y,St.z),St[E]=0,St[M]=0,St[x]=z>0?1:-1,_.push(St.x,St.y,St.z),g.push(tt/O),g.push(1-xt/G),H+=1}}for(let xt=0;xt<G;xt++)for(let B=0;B<O;B++){const tt=v+B+lt*xt,_t=v+B+lt*(xt+1),Mt=v+(B+1)+lt*(xt+1),Dt=v+(B+1)+lt*xt;p.push(tt,_t,Dt),p.push(_t,Mt,Dt),J+=6}f.addGroup(y,J,A),y+=J,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Zn(o){const t={};for(let n=0;n<o.length;n++){const a=Zo(o[n]);for(const s in a)t[s]=a[s]}return t}function K1(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function Ky(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Q1={clone:Zo,merge:Zn};var J1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ba extends Tu{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J1,this.fragmentShader=$1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zo(t.uniforms),this.uniformsGroups=K1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Df extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new ut,Zx=new se,Kx=new se;class na extends Df{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ap*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gm*2*Math.atan(Math.tan(ap*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-t/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Or.x,Or.y).multiplyScalar(-t/Or.z)}getViewSize(t,n){return this.getViewBounds(t,Zx,Kx),n.subVectors(Kx,Zx)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ap*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wo=-90,Do=1;class tA extends ci{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new na(wo,Do,t,n);s.layers=this.layers,this.add(s);const u=new na(wo,Do,t,n);u.layers=this.layers,this.add(u);const c=new na(wo,Do,t,n);c.layers=this.layers,this.add(c);const f=new na(wo,Do,t,n);f.layers=this.layers,this.add(f);const p=new na(wo,Do,t,n);p.layers=this.layers,this.add(p);const d=new na(wo,Do,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,p]=n;for(const d of n)this.remove(d);if(t===xa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Cf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,s),t.render(n,u),t.setRenderTarget(a,1,s),t.render(n,c),t.setRenderTarget(a,2,s),t.render(n,f),t.setRenderTarget(a,3,s),t.render(n,p),t.setRenderTarget(a,4,s),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),t.render(n,_),t.setRenderTarget(g,v,y),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class Qy extends Qn{constructor(t=[],n=Ls,a,s,u,c,f,p,d,_){super(t,n,a,s,u,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jy extends ra{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new Qy(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Au(5,5,5),u=new ba({name:"CubemapFromEquirect",uniforms:Zo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ui,blending:Qa});u.uniforms.tEquirect.value=n;const c=new qi(s,u),f=n.minFilter;return n.minFilter===bs&&(n.minFilter=yn),new tA(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}class nf extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eA={type:"move"};class Ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const M=n.getJointPose(E,a),x=this._getHandJoint(d,E);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),y=.02,T=.005;d.inputState.pinching&&v>y+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=y-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(eA)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new nf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Qx extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $y extends Qn{constructor(t=null,n=1,a=1,s,u,c,f,p,d=Hn,_=Hn,g,v){super(null,c,f,p,d,_,s,u,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rp=new ut,nA=new ut,iA=new ce;class Ss{constructor(t=new ut(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Rp.subVectors(a,n).cross(nA.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Rp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||iA.getNormalMatrix(t),s=this.coplanarPoint(Rp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new Ff,aA=new se(.5,.5),af=new ut;class tM{constructor(t=new Ss,n=new Ss,a=new Ss,s=new Ss,u=new Ss,c=new Ss){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=xa,a=!1){const s=this.planes,u=t.elements,c=u[0],f=u[1],p=u[2],d=u[3],_=u[4],g=u[5],v=u[6],y=u[7],T=u[8],E=u[9],M=u[10],x=u[11],C=u[12],U=u[13],R=u[14],L=u[15];if(s[0].setComponents(d-c,y-_,x-T,L-C).normalize(),s[1].setComponents(d+c,y+_,x+T,L+C).normalize(),s[2].setComponents(d+f,y+g,x+E,L+U).normalize(),s[3].setComponents(d-f,y-g,x-E,L-U).normalize(),a)s[4].setComponents(p,v,M,R).normalize(),s[5].setComponents(d-p,y-v,x-M,L-R).normalize();else if(s[4].setComponents(d-p,y-v,x-M,L-R).normalize(),n===xa)s[5].setComponents(d+p,y+v,x+M,L+R).normalize();else if(n===Cf)s[5].setComponents(p,v,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const n=aA.distanceTo(t.center);return _s.radius=.7071067811865476+n,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(af.x=s.normal.x>0?t.max.x:t.min.x,af.y=s.normal.y>0?t.max.y:t.min.y,af.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(af)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rA extends Tu{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Uf=new ut,Lf=new ut,Jx=new dn,Jl=new Xy,rf=new Ff,Cp=new ut,$x=new ut;class sA extends ci{constructor(t=new la,n=new rA){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,u=n.count;s<u;s++)Uf.fromBufferAttribute(n,s-1),Lf.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=Uf.distanceTo(Lf);t.setAttribute("lineDistance",new oa(a,1))}else ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,u=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),rf.copy(a.boundingSphere),rf.applyMatrix4(s),rf.radius+=u,t.ray.intersectsSphere(rf)===!1)return;Jx.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(Jx);const f=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=this.isLineSegments?2:1,_=a.index,v=a.attributes.position;if(_!==null){const y=Math.max(0,c.start),T=Math.min(_.count,c.start+c.count);for(let E=y,M=T-1;E<M;E+=d){const x=_.getX(E),C=_.getX(E+1),U=sf(this,t,Jl,p,x,C,E);U&&n.push(U)}if(this.isLineLoop){const E=_.getX(T-1),M=_.getX(y),x=sf(this,t,Jl,p,E,M,T-1);x&&n.push(x)}}else{const y=Math.max(0,c.start),T=Math.min(v.count,c.start+c.count);for(let E=y,M=T-1;E<M;E+=d){const x=sf(this,t,Jl,p,E,E+1,E);x&&n.push(x)}if(this.isLineLoop){const E=sf(this,t,Jl,p,T-1,y,T-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}}function sf(o,t,n,a,s,u,c){const f=o.geometry.attributes.position;if(Uf.fromBufferAttribute(f,s),Lf.fromBufferAttribute(f,u),n.distanceSqToSegment(Uf,Lf,Cp,$x)>a)return;Cp.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(Cp);if(!(d<t.near||d>t.far))return{distance:d,point:$x.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const tS=new ut,eS=new ut;class oA extends sA{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let s=0,u=n.count;s<u;s+=2)tS.fromBufferAttribute(n,s),eS.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+tS.distanceTo(eS);t.setAttribute("lineDistance",new oa(a,1))}else ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Su extends Qn{constructor(t,n,a=Ma,s,u,c,f=Hn,p=Hn,d,_=er,g=1){if(_!==er&&_!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,s,u,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new v_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lA extends Su{constructor(t,n=Ma,a=Ls,s,u,c=Hn,f=Hn,p,d=er){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,s,u,c,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class eM extends Qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Us extends la{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,g=t/f,v=n/p,y=[],T=[],E=[],M=[];for(let x=0;x<_;x++){const C=x*v-c;for(let U=0;U<d;U++){const R=U*g-u;T.push(R,-C,0),E.push(0,0,1),M.push(U/f),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<f;C++){const U=C+d*x,R=C+d*(x+1),L=C+1+d*(x+1),z=C+1+d*x;y.push(U,R,z),y.push(R,L,z)}this.setIndex(y),this.setAttribute("position",new oa(T,3)),this.setAttribute("normal",new oa(E,3)),this.setAttribute("uv",new oa(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Us(t.width,t.height,t.widthSegments,t.heightSegments)}}class ru extends ba{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uA extends Tu{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cA extends Tu{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nM extends Df{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class fA extends na{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hA{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function nS(o,t,n,a){const s=dA(a);switch(n){case Iy:return o*t;case Gy:return o*t/s.components*s.byteLength;case d_:return o*t/s.components*s.byteLength;case Yo:return o*t*2/s.components*s.byteLength;case p_:return o*t*2/s.components*s.byteLength;case Hy:return o*t*3/s.components*s.byteLength;case Wi:return o*t*4/s.components*s.byteLength;case m_:return o*t*4/s.components*s.byteLength;case df:case pf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mf:case _f:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case cm:case hm:return Math.max(o,16)*Math.max(t,8)/4;case um:case fm:return Math.max(o,8)*Math.max(t,8)/2;case dm:case pm:case _m:case gm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mm:case vm:case xm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Sm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ym:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Mm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Em:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case bm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Tm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Am:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Rm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Cm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case wm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Dm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Um:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Lm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Nm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Om:case Pm:case zm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Fm:case Bm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Im:case Hm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dA(o){switch(o){case Vi:case Py:return{byteLength:1,components:1};case gu:case zy:case Ea:return{byteLength:2,components:1};case f_:case h_:return{byteLength:2,components:4};case Ma:case c_:case aa:return{byteLength:4,components:1};case Fy:case By:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:u_}}));typeof window<"u"&&(window.__THREE__?ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=u_);function iM(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function pA(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=o.createBuffer();o.bindBuffer(p,v),o.bufferData(p,d,_),f.onUploadCallback();let y;if(d instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=o.SHORT;else if(d instanceof Uint32Array)y=o.UNSIGNED_INT;else if(d instanceof Int32Array)y=o.INT;else if(d instanceof Int8Array)y=o.BYTE;else if(d instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(o.bindBuffer(d,f),g.length===0)o.bufferSubData(d,0,_);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],E=g[y];E.start<=T.start+T.count+1?T.count=Math.max(T.count,E.start+E.count-T.start):(++v,g[v]=E)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const E=g[y];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:u,update:c}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_A=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,BA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,IA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dR=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_R=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ER=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,BR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$R=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,d2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,y2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,N2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,q2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:mA,alphahash_pars_fragment:_A,alphamap_fragment:gA,alphamap_pars_fragment:vA,alphatest_fragment:xA,alphatest_pars_fragment:SA,aomap_fragment:yA,aomap_pars_fragment:MA,batching_pars_vertex:EA,batching_vertex:bA,begin_vertex:TA,beginnormal_vertex:AA,bsdfs:RA,iridescence_fragment:CA,bumpmap_pars_fragment:wA,clipping_planes_fragment:DA,clipping_planes_pars_fragment:UA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:NA,color_fragment:OA,color_pars_fragment:PA,color_pars_vertex:zA,color_vertex:FA,common:BA,cube_uv_reflection_fragment:IA,defaultnormal_vertex:HA,displacementmap_pars_vertex:GA,displacementmap_vertex:VA,emissivemap_fragment:kA,emissivemap_pars_fragment:XA,colorspace_fragment:WA,colorspace_pars_fragment:qA,envmap_fragment:YA,envmap_common_pars_fragment:jA,envmap_pars_fragment:ZA,envmap_pars_vertex:KA,envmap_physical_pars_fragment:oR,envmap_vertex:QA,fog_vertex:JA,fog_pars_vertex:$A,fog_fragment:tR,fog_pars_fragment:eR,gradientmap_pars_fragment:nR,lightmap_pars_fragment:iR,lights_lambert_fragment:aR,lights_lambert_pars_fragment:rR,lights_pars_begin:sR,lights_toon_fragment:lR,lights_toon_pars_fragment:uR,lights_phong_fragment:cR,lights_phong_pars_fragment:fR,lights_physical_fragment:hR,lights_physical_pars_fragment:dR,lights_fragment_begin:pR,lights_fragment_maps:mR,lights_fragment_end:_R,logdepthbuf_fragment:gR,logdepthbuf_pars_fragment:vR,logdepthbuf_pars_vertex:xR,logdepthbuf_vertex:SR,map_fragment:yR,map_pars_fragment:MR,map_particle_fragment:ER,map_particle_pars_fragment:bR,metalnessmap_fragment:TR,metalnessmap_pars_fragment:AR,morphinstance_vertex:RR,morphcolor_vertex:CR,morphnormal_vertex:wR,morphtarget_pars_vertex:DR,morphtarget_vertex:UR,normal_fragment_begin:LR,normal_fragment_maps:NR,normal_pars_fragment:OR,normal_pars_vertex:PR,normal_vertex:zR,normalmap_pars_fragment:FR,clearcoat_normal_fragment_begin:BR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:HR,iridescence_pars_fragment:GR,opaque_fragment:VR,packing:kR,premultiplied_alpha_fragment:XR,project_vertex:WR,dithering_fragment:qR,dithering_pars_fragment:YR,roughnessmap_fragment:jR,roughnessmap_pars_fragment:ZR,shadowmap_pars_fragment:KR,shadowmap_pars_vertex:QR,shadowmap_vertex:JR,shadowmask_pars_fragment:$R,skinbase_vertex:t2,skinning_pars_vertex:e2,skinning_vertex:n2,skinnormal_vertex:i2,specularmap_fragment:a2,specularmap_pars_fragment:r2,tonemapping_fragment:s2,tonemapping_pars_fragment:o2,transmission_fragment:l2,transmission_pars_fragment:u2,uv_pars_fragment:c2,uv_pars_vertex:f2,uv_vertex:h2,worldpos_vertex:d2,background_vert:p2,background_frag:m2,backgroundCube_vert:_2,backgroundCube_frag:g2,cube_vert:v2,cube_frag:x2,depth_vert:S2,depth_frag:y2,distance_vert:M2,distance_frag:E2,equirect_vert:b2,equirect_frag:T2,linedashed_vert:A2,linedashed_frag:R2,meshbasic_vert:C2,meshbasic_frag:w2,meshlambert_vert:D2,meshlambert_frag:U2,meshmatcap_vert:L2,meshmatcap_frag:N2,meshnormal_vert:O2,meshnormal_frag:P2,meshphong_vert:z2,meshphong_frag:F2,meshphysical_vert:B2,meshphysical_frag:I2,meshtoon_vert:H2,meshtoon_frag:G2,points_vert:V2,points_frag:k2,shadow_vert:X2,shadow_frag:W2,sprite_vert:q2,sprite_frag:Y2},Ot={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},_a={basic:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Zn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Zn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Zn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ne(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Zn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Zn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Zn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Zn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Zn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Zn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Zn([Ot.lights,Ot.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};_a.physical={uniforms:Zn([_a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const of={r:0,b:0,g:0},gs=new nr,j2=new dn;function Z2(o,t,n,a,s,u,c){const f=new Ne(0);let p=u===!0?0:1,d,_,g=null,v=0,y=null;function T(U){let R=U.isScene===!0?U.background:null;return R&&R.isTexture&&(R=(U.backgroundBlurriness>0?n:t).get(R)),R}function E(U){let R=!1;const L=T(U);L===null?x(f,p):L&&L.isColor&&(x(L,1),R=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?a.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(o.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(U,R){const L=T(R);L&&(L.isCubeTexture||L.mapping===zf)?(_===void 0&&(_=new qi(new Au(1,1,1),new ba({name:"BackgroundCubeMaterial",uniforms:Zo(_a.backgroundCube.uniforms),vertexShader:_a.backgroundCube.vertexShader,fragmentShader:_a.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,O,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(_)),gs.copy(R.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),_.material.uniforms.envMap.value=L,_.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(j2.makeRotationFromEuler(gs)),_.material.toneMapped=Ae.getTransfer(L.colorSpace)!==Ie,(g!==L||v!==L.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=L,v=L.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new qi(new Us(2,2),new ba({name:"BackgroundMaterial",uniforms:Zo(_a.background.uniforms),vertexShader:_a.background.vertexShader,fragmentShader:_a.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=Ae.getTransfer(L.colorSpace)!==Ie,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||v!==L.version||y!==o.toneMapping)&&(d.material.needsUpdate=!0,g=L,v=L.version,y=o.toneMapping),d.layers.enableAll(),U.unshift(d,d.geometry,d.material,0,0,null))}function x(U,R){U.getRGB(of,Ky(o)),a.buffers.color.setClear(of.r,of.g,of.b,R,c)}function C(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,R=1){f.set(U),p=R,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(f,p)},render:E,addToRenderList:M,dispose:C}}function K2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=v(null);let u=s,c=!1;function f(N,V,Z,K,rt){let lt=!1;const F=g(K,Z,V);u!==F&&(u=F,d(u.object)),lt=y(N,K,Z,rt),lt&&T(N,K,Z,rt),rt!==null&&t.update(rt,o.ELEMENT_ARRAY_BUFFER),(lt||c)&&(c=!1,R(N,V,Z,K),rt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function p(){return o.createVertexArray()}function d(N){return o.bindVertexArray(N)}function _(N){return o.deleteVertexArray(N)}function g(N,V,Z){const K=Z.wireframe===!0;let rt=a[N.id];rt===void 0&&(rt={},a[N.id]=rt);let lt=rt[V.id];lt===void 0&&(lt={},rt[V.id]=lt);let F=lt[K];return F===void 0&&(F=v(p()),lt[K]=F),F}function v(N){const V=[],Z=[],K=[];for(let rt=0;rt<n;rt++)V[rt]=0,Z[rt]=0,K[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:K,object:N,attributes:{},index:null}}function y(N,V,Z,K){const rt=u.attributes,lt=V.attributes;let F=0;const H=Z.getAttributes();for(const J in H)if(H[J].location>=0){const xt=rt[J];let B=lt[J];if(B===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(B=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(B=N.instanceColor)),xt===void 0||xt.attribute!==B||B&&xt.data!==B.data)return!0;F++}return u.attributesNum!==F||u.index!==K}function T(N,V,Z,K){const rt={},lt=V.attributes;let F=0;const H=Z.getAttributes();for(const J in H)if(H[J].location>=0){let xt=lt[J];xt===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor));const B={};B.attribute=xt,xt&&xt.data&&(B.data=xt.data),rt[J]=B,F++}u.attributes=rt,u.attributesNum=F,u.index=K}function E(){const N=u.newAttributes;for(let V=0,Z=N.length;V<Z;V++)N[V]=0}function M(N){x(N,0)}function x(N,V){const Z=u.newAttributes,K=u.enabledAttributes,rt=u.attributeDivisors;Z[N]=1,K[N]===0&&(o.enableVertexAttribArray(N),K[N]=1),rt[N]!==V&&(o.vertexAttribDivisor(N,V),rt[N]=V)}function C(){const N=u.newAttributes,V=u.enabledAttributes;for(let Z=0,K=V.length;Z<K;Z++)V[Z]!==N[Z]&&(o.disableVertexAttribArray(Z),V[Z]=0)}function U(N,V,Z,K,rt,lt,F){F===!0?o.vertexAttribIPointer(N,V,Z,rt,lt):o.vertexAttribPointer(N,V,Z,K,rt,lt)}function R(N,V,Z,K){E();const rt=K.attributes,lt=Z.getAttributes(),F=V.defaultAttributeValues;for(const H in lt){const J=lt[H];if(J.location>=0){let St=rt[H];if(St===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),St!==void 0){const xt=St.normalized,B=St.itemSize,tt=t.get(St);if(tt===void 0)continue;const _t=tt.buffer,Mt=tt.type,Dt=tt.bytesPerElement,it=Mt===o.INT||Mt===o.UNSIGNED_INT||St.gpuType===c_;if(St.isInterleavedBufferAttribute){const dt=St.data,At=dt.stride,Vt=St.offset;if(dt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<J.locationSize;Ht++)x(J.location+Ht,dt.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Ht=0;Ht<J.locationSize;Ht++)M(J.location+Ht);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let Ht=0;Ht<J.locationSize;Ht++)U(J.location+Ht,B/J.locationSize,Mt,xt,At*Dt,(Vt+B/J.locationSize*Ht)*Dt,it)}else{if(St.isInstancedBufferAttribute){for(let dt=0;dt<J.locationSize;dt++)x(J.location+dt,St.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let dt=0;dt<J.locationSize;dt++)M(J.location+dt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let dt=0;dt<J.locationSize;dt++)U(J.location+dt,B/J.locationSize,Mt,xt,B*Dt,B/J.locationSize*dt*Dt,it)}}else if(F!==void 0){const xt=F[H];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(J.location,xt);break;case 3:o.vertexAttrib3fv(J.location,xt);break;case 4:o.vertexAttrib4fv(J.location,xt);break;default:o.vertexAttrib1fv(J.location,xt)}}}}C()}function L(){G();for(const N in a){const V=a[N];for(const Z in V){const K=V[Z];for(const rt in K)_(K[rt].object),delete K[rt];delete V[Z]}delete a[N]}}function z(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const Z in V){const K=V[Z];for(const rt in K)_(K[rt].object),delete K[rt];delete V[Z]}delete a[N.id]}function O(N){for(const V in a){const Z=a[V];if(Z[N.id]===void 0)continue;const K=Z[N.id];for(const rt in K)_(K[rt].object),delete K[rt];delete Z[N.id]}}function G(){A(),c=!0,u!==s&&(u=s,d(u.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:G,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:M,disableUnusedAttributes:C}}function Q2(o,t,n){let a;function s(d){a=d}function u(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(o.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let y=0;for(let T=0;T<g;T++)y+=_[T];n.update(y,a,1)}function p(d,_,g,v){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let E=0;E<g;E++)T+=_[E]*v[E];n.update(T,a,1)}}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function J2(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(O){return!(O!==Wi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const G=O===Ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Vi&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==aa&&!G)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(ne("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=o.getParameter(o.MAX_SAMPLES),z=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:E,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:C,maxVaryings:U,maxFragmentUniforms:R,maxSamples:L,samples:z}}function $2(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new Ss,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||a!==0||s;return s=v,a=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,E=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!s||T===null||T.length===0||u&&!M)u?_(null):d();else{const C=u?0:a,U=C*4;let R=x.clippingState||null;p.value=R,R=_(T,v,U,y);for(let L=0;L!==U;++L)R[L]=n[L];x.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,y,T){const E=g!==null?g.length:0;let M=null;if(E!==0){if(M=p.value,T!==!0||M===null){const x=y+E*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,R=y;U!==E;++U,R+=4)c.copy(g[U]).applyMatrix4(C,f),c.normal.toArray(M,R),M[R+3]=c.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,M}}function tC(o){let t=new WeakMap;function n(c,f){return f===rm?c.mapping=Ls:f===sm&&(c.mapping=qo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===rm||f===sm)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new Jy(p.height);return d.fromEquirectangularTexture(o,c),t.set(c,d),c.addEventListener("dispose",s),n(d.texture,c.mapping)}else return null}}return c}function s(c){const f=c.target;f.removeEventListener("dispose",s);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}const Ir=4,iS=[.125,.215,.35,.446,.526,.582],Ms=20,eC=256,$l=new nM,aS=new Ne;let wp=null,Dp=0,Up=0,Lp=!1;const nC=new ut;class rS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,u={}){const{size:c=256,position:f=nC}=u;wp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wp,Dp,Up),this._renderer.xr.enabled=Lp,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ls||t.mapping===qo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wp=this._renderer.getRenderTarget(),Dp=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Lp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ea,format:Wi,colorSpace:jo,depthBuffer:!1},s=sS(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sS(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iC(u)),this._blurMaterial=rC(u,t,n),this._ggxMaterial=aC(u,t,n)}return s}_compileMaterial(t){const n=new qi(new la,t);this._renderer.compile(n,$l)}_sceneToCubeUV(t,n,a,s,u){const p=new na(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(aS),g.toneMapping=Sa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new Au,new Yy({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,M=E.material;let x=!1;const C=t.background;C?C.isColor&&(M.color.copy(C),t.background=null,x=!0):(M.color.copy(aS),x=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[U],u.y,u.z)):R===1?(p.up.set(0,0,d[U]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[U],u.z)):(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[U]));const L=this._cubeSize;Uo(s,R*L,U>2?L:0,L,L),g.setRenderTarget(s),x&&g.render(E,p),g.render(t,p)}g.toneMapping=y,g.autoClear=v,t.background=C}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Ls||t.mapping===qo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oS());const u=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const f=u.uniforms;f.envMap.value=t;const p=this._cubeSize;Uo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,$l)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let u=1;u<s;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,y=g*v,{_lodMax:T}=this,E=this._sizeLods[a],M=3*E*(a>T-Ir?a-T+Ir:0),x=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=y,p.mipInt.value=T-n,Uo(u,M,x,3*E,2*E),s.setRenderTarget(u),s.render(f,$l),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=T-a,Uo(t,M,x,3*E,2*E),s.setRenderTarget(t),s.render(f,$l)}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[s];g.material=d;const v=d.uniforms,y=this._sizeLods[a]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),E=u/T,M=isFinite(u)?1+Math.floor(_*E):Ms;M>Ms&&ne(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const x=[];let C=0;for(let O=0;O<Ms;++O){const G=O/E,A=Math.exp(-G*G/2);x.push(A),O===0?C+=A:O<M&&(C+=2*A)}for(let O=0;O<x.length;O++)x[O]=x[O]/C;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-a;const R=this._sizeLods[s],L=3*R*(s>U-Ir?s-U+Ir:0),z=4*(this._cubeSize-R);Uo(n,L,z,3*R,2*R),p.setRenderTarget(n),p.render(g,$l)}}function iC(o){const t=[],n=[],a=[];let s=o;const u=o-Ir+1+iS.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>o-Ir?p=iS[c-o+Ir-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,T=6,E=3,M=2,x=1,C=new Float32Array(E*T*y),U=new Float32Array(M*T*y),R=new Float32Array(x*T*y);for(let z=0;z<y;z++){const O=z%3*2/3-1,G=z>2?0:-1,A=[O,G,0,O+2/3,G,0,O+2/3,G+1,0,O,G,0,O+2/3,G+1,0,O,G+1,0];C.set(A,E*T*z),U.set(v,M*T*z);const N=[z,z,z,z,z,z];R.set(N,x*T*z)}const L=new la;L.setAttribute("position",new sa(C,E)),L.setAttribute("uv",new sa(U,M)),L.setAttribute("faceIndex",new sa(R,x)),a.push(new qi(L,null)),s>Ir&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function sS(o,t,n){const a=new ra(o,t,n);return a.texture.mapping=zf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Uo(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function aC(o,t,n){return new ba({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function rC(o,t,n){const a=new Float32Array(Ms),s=new ut(0,1,0);return new ba({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function oS(){return new ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function lS(){return new ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sC(o){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===rm||p===sm,_=p===Ls||p===qo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new rS(o)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const y=f.image;return d&&y&&y.height>0||_&&y&&s(y)?(n===null&&(n=new rS(o)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function s(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function u(f){const p=f.target;p.removeEventListener("dispose",u);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function oC(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&xu("WebGLRenderer: "+a+" extension not supported."),s}}}function lC(o,t,n,a){const s={},u=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete s[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return s[v.id]===!0||(v.addEventListener("dispose",c),s[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const y in v)t.update(v[y],o.ARRAY_BUFFER)}function d(g){const v=[],y=g.index,T=g.attributes.position;let E=0;if(y!==null){const C=y.array;E=y.version;for(let U=0,R=C.length;U<R;U+=3){const L=C[U+0],z=C[U+1],O=C[U+2];v.push(L,z,z,O,O,L)}}else if(T!==void 0){const C=T.array;E=T.version;for(let U=0,R=C.length/3-1;U<R;U+=3){const L=U+0,z=U+1,O=U+2;v.push(L,z,z,O,O,L)}}else return;const M=new(Vy(v)?Zy:jy)(v,1);M.version=E;const x=u.get(g);x&&t.remove(x),u.set(g,M)}function _(g){const v=u.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&d(g)}else d(g);return u.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function uC(o,t,n){let a;function s(v){a=v}let u,c;function f(v){u=v.type,c=v.bytesPerElement}function p(v,y){o.drawElements(a,y,u,v*c),n.update(y,a,1)}function d(v,y,T){T!==0&&(o.drawElementsInstanced(a,y,u,v*c,T),n.update(y,a,T))}function _(v,y,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,u,v,0,T);let M=0;for(let x=0;x<T;x++)M+=y[x];n.update(M,a,1)}function g(v,y,T,E){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/c,y[x],E[x]);else{M.multiDrawElementsInstancedWEBGL(a,y,0,u,v,0,E,0,T);let x=0;for(let C=0;C<T;C++)x+=y[C]*E[C];n.update(x,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function cC(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:we("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function fC(o,t,n){const a=new WeakMap,s=new on;function u(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let N=function(){G.dispose(),a.delete(f),f.removeEventListener("dispose",N)};var y=N;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),E===!0&&(R=2),M===!0&&(R=3);let L=f.attributes.position.count*R,z=1;L>t.maxTextureSize&&(z=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const O=new Float32Array(L*z*4*g),G=new ky(O,L,z,g);G.type=aa,G.needsUpdate=!0;const A=R*4;for(let V=0;V<g;V++){const Z=x[V],K=C[V],rt=U[V],lt=L*z*4*V;for(let F=0;F<Z.count;F++){const H=F*A;T===!0&&(s.fromBufferAttribute(Z,F),O[lt+H+0]=s.x,O[lt+H+1]=s.y,O[lt+H+2]=s.z,O[lt+H+3]=0),E===!0&&(s.fromBufferAttribute(K,F),O[lt+H+4]=s.x,O[lt+H+5]=s.y,O[lt+H+6]=s.z,O[lt+H+7]=0),M===!0&&(s.fromBufferAttribute(rt,F),O[lt+H+8]=s.x,O[lt+H+9]=s.y,O[lt+H+10]=s.z,O[lt+H+11]=rt.itemSize===4?s.w:1)}}v={count:g,texture:G,size:new se(L,z)},a.set(f,v),f.addEventListener("dispose",N)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let T=0;for(let M=0;M<d.length;M++)T+=d[M];const E=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function hC(o,t,n,a){let s=new WeakMap;function u(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(s.get(g)!==d&&(t.update(g),s.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),s.get(p)!==d&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return g}function c(){s=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:u,dispose:c}}const dC={[Ry]:"LINEAR_TONE_MAPPING",[Cy]:"REINHARD_TONE_MAPPING",[wy]:"CINEON_TONE_MAPPING",[Dy]:"ACES_FILMIC_TONE_MAPPING",[Ly]:"AGX_TONE_MAPPING",[Ny]:"NEUTRAL_TONE_MAPPING",[Uy]:"CUSTOM_TONE_MAPPING"};function pC(o,t,n,a,s){const u=new ra(t,n,{type:o,depthBuffer:a,stencilBuffer:s}),c=new ra(t,n,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),f=new la;f.setAttribute("position",new oa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new oa([0,2,0,0,2,0],2));const p=new ru({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qi(f,p),_=new nM(-1,1,1,-1,0,1);let g=null,v=null,y=!1,T,E=null,M=[],x=!1;this.setSize=function(C,U){u.setSize(C,U),c.setSize(C,U);for(let R=0;R<M.length;R++){const L=M[R];L.setSize&&L.setSize(C,U)}},this.setEffects=function(C){M=C,x=M.length>0&&M[0].isRenderPass===!0;const U=u.width,R=u.height;for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(U,R)}},this.begin=function(C,U){if(y||C.toneMapping===Sa&&M.length===0)return!1;if(E=U,U!==null){const R=U.width,L=U.height;(u.width!==R||u.height!==L)&&this.setSize(R,L)}return x===!1&&C.setRenderTarget(u),T=C.toneMapping,C.toneMapping=Sa,!0},this.hasRenderPass=function(){return x},this.end=function(C,U){C.toneMapping=T,y=!0;let R=u,L=c;for(let z=0;z<M.length;z++){const O=M[z];if(O.enabled!==!1&&(O.render(C,L,R,U),O.needsSwap!==!1)){const G=R;R=L,L=G}}if(g!==C.outputColorSpace||v!==C.toneMapping){g=C.outputColorSpace,v=C.toneMapping,p.defines={},Ae.getTransfer(g)===Ie&&(p.defines.SRGB_TRANSFER="");const z=dC[v];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(E),C.render(d,_),E=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),c.dispose(),f.dispose(),p.dispose()}}const aM=new Qn,Vm=new Su(1,1),rM=new ky,sM=new B1,oM=new Qy,uS=[],cS=[],fS=new Float32Array(16),hS=new Float32Array(9),dS=new Float32Array(4);function Qo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=uS[s];if(u===void 0&&(u=new Float32Array(s),uS[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function bn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Tn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function If(o,t){let n=cS[t];n===void 0&&(n=new Int32Array(t),cS[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function mC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function _C(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2fv(this.addr,t),Tn(n,t)}}function gC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bn(n,t))return;o.uniform3fv(this.addr,t),Tn(n,t)}}function vC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4fv(this.addr,t),Tn(n,t)}}function xC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;dS.set(a),o.uniformMatrix2fv(this.addr,!1,dS),Tn(n,a)}}function SC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;hS.set(a),o.uniformMatrix3fv(this.addr,!1,hS),Tn(n,a)}}function yC(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(n,t)}else{if(bn(n,a))return;fS.set(a),o.uniformMatrix4fv(this.addr,!1,fS),Tn(n,a)}}function MC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function EC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2iv(this.addr,t),Tn(n,t)}}function bC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;o.uniform3iv(this.addr,t),Tn(n,t)}}function TC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4iv(this.addr,t),Tn(n,t)}}function AC(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function RC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;o.uniform2uiv(this.addr,t),Tn(n,t)}}function CC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;o.uniform3uiv(this.addr,t),Tn(n,t)}}function wC(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;o.uniform4uiv(this.addr,t),Tn(n,t)}}function DC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?(Vm.compareFunction=n.isReversedDepthBuffer()?g_:__,u=Vm):u=aM,n.setTexture2D(t||u,s)}function UC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||sM,s)}function LC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||oM,s)}function NC(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||rM,s)}function OC(o){switch(o){case 5126:return mC;case 35664:return _C;case 35665:return gC;case 35666:return vC;case 35674:return xC;case 35675:return SC;case 35676:return yC;case 5124:case 35670:return MC;case 35667:case 35671:return EC;case 35668:case 35672:return bC;case 35669:case 35673:return TC;case 5125:return AC;case 36294:return RC;case 36295:return CC;case 36296:return wC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return LC;case 36289:case 36303:case 36311:case 36292:return NC}}function PC(o,t){o.uniform1fv(this.addr,t)}function zC(o,t){const n=Qo(t,this.size,2);o.uniform2fv(this.addr,n)}function FC(o,t){const n=Qo(t,this.size,3);o.uniform3fv(this.addr,n)}function BC(o,t){const n=Qo(t,this.size,4);o.uniform4fv(this.addr,n)}function IC(o,t){const n=Qo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function HC(o,t){const n=Qo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function GC(o,t){const n=Qo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function VC(o,t){o.uniform1iv(this.addr,t)}function kC(o,t){o.uniform2iv(this.addr,t)}function XC(o,t){o.uniform3iv(this.addr,t)}function WC(o,t){o.uniform4iv(this.addr,t)}function qC(o,t){o.uniform1uiv(this.addr,t)}function YC(o,t){o.uniform2uiv(this.addr,t)}function jC(o,t){o.uniform3uiv(this.addr,t)}function ZC(o,t){o.uniform4uiv(this.addr,t)}function KC(o,t,n){const a=this.cache,s=t.length,u=If(n,s);bn(a,u)||(o.uniform1iv(this.addr,u),Tn(a,u));let c;this.type===o.SAMPLER_2D_SHADOW?c=Vm:c=aM;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||c,u[f])}function QC(o,t,n){const a=this.cache,s=t.length,u=If(n,s);bn(a,u)||(o.uniform1iv(this.addr,u),Tn(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||sM,u[c])}function JC(o,t,n){const a=this.cache,s=t.length,u=If(n,s);bn(a,u)||(o.uniform1iv(this.addr,u),Tn(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||oM,u[c])}function $C(o,t,n){const a=this.cache,s=t.length,u=If(n,s);bn(a,u)||(o.uniform1iv(this.addr,u),Tn(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||rM,u[c])}function t3(o){switch(o){case 5126:return PC;case 35664:return zC;case 35665:return FC;case 35666:return BC;case 35674:return IC;case 35675:return HC;case 35676:return GC;case 5124:case 35670:return VC;case 35667:case 35671:return kC;case 35668:case 35672:return XC;case 35669:case 35673:return WC;case 5125:return qC;case 36294:return YC;case 36295:return jC;case 36296:return ZC;case 35678:case 36198:case 36298:case 36306:case 35682:return KC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return $C}}class e3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=OC(n.type)}}class n3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=t3(n.type)}}class i3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const Np=/(\w+)(\])?(\[|\.)?/g;function pS(o,t){o.seq.push(t),o.map[t.id]=t}function a3(o,t,n){const a=o.name,s=a.length;for(Np.lastIndex=0;;){const u=Np.exec(a),c=Np.lastIndex;let f=u[1];const p=u[2]==="]",d=u[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){pS(n,d===void 0?new e3(f,o,t):new n3(f,o,t));break}else{let g=n.map[f];g===void 0&&(g=new i3(f),pS(n,g)),n=g}}}class gf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);a3(f,p,this)}const s=[],u=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):u.push(c);s.length>0&&(this.seq=s.concat(u))}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function mS(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const r3=37297;let s3=0;function o3(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const _S=new ce;function l3(o){Ae._getMatrix(_S,Ae.workingColorSpace,o);const t=`mat3( ${_S.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Rf:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return ne("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gS(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+o3(o.getShaderSource(t),f)}else return u}function u3(o,t){const n=l3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const c3={[Ry]:"Linear",[Cy]:"Reinhard",[wy]:"Cineon",[Dy]:"ACESFilmic",[Ly]:"AgX",[Ny]:"Neutral",[Uy]:"Custom"};function f3(o,t){const n=c3[t];return n===void 0?(ne("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lf=new ut;function h3(){Ae.getLuminanceCoefficients(lf);const o=lf.x.toFixed(4),t=lf.y.toFixed(4),n=lf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(su).join(`
`)}function p3(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function m3(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function su(o){return o!==""}function vS(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _3=/^[ \t]*#include +<([\w\d./]+)>/gm;function km(o){return o.replace(_3,v3)}const g3=new Map;function v3(o,t){let n=fe[t];if(n===void 0){const a=g3.get(t);if(a!==void 0)n=fe[a],ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return km(n)}const x3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SS(o){return o.replace(x3,S3)}function S3(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function yS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const y3={[hf]:"SHADOWMAP_TYPE_PCF",[au]:"SHADOWMAP_TYPE_VSM"};function M3(o){return y3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E3={[Ls]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE",[zf]:"ENVMAP_TYPE_CUBE_UV"};function b3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":E3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const T3={[qo]:"ENVMAP_MODE_REFRACTION"};function A3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":T3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R3={[Ay]:"ENVMAP_BLENDING_MULTIPLY",[v1]:"ENVMAP_BLENDING_MIX",[x1]:"ENVMAP_BLENDING_ADD"};function C3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":R3[o.combine]||"ENVMAP_BLENDING_NONE"}function w3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function D3(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=M3(n),d=b3(n),_=A3(n),g=C3(n),v=w3(n),y=d3(n),T=p3(u),E=s.createProgram();let M,x,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(su).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(su).join(`
`),x.length>0&&(x+=`
`)):(M=[yS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(su).join(`
`),x=[yS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sa?"#define TONE_MAPPING":"",n.toneMapping!==Sa?fe.tonemapping_pars_fragment:"",n.toneMapping!==Sa?f3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,u3("linearToOutputTexel",n.outputColorSpace),h3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(su).join(`
`)),c=km(c),c=vS(c,n),c=xS(c,n),f=km(f),f=vS(f,n),f=xS(f,n),c=SS(c),f=SS(f),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===Lx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Lx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=C+M+c,R=C+x+f,L=mS(s,s.VERTEX_SHADER,U),z=mS(s,s.FRAGMENT_SHADER,R);s.attachShader(E,L),s.attachShader(E,z),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(V){if(o.debug.checkShaderErrors){const Z=s.getProgramInfoLog(E)||"",K=s.getShaderInfoLog(L)||"",rt=s.getShaderInfoLog(z)||"",lt=Z.trim(),F=K.trim(),H=rt.trim();let J=!0,St=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,L,z);else{const xt=gS(s,L,"vertex"),B=gS(s,z,"fragment");we("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+xt+`
`+B)}else lt!==""?ne("WebGLProgram: Program Info Log:",lt):(F===""||H==="")&&(St=!1);St&&(V.diagnostics={runnable:J,programLog:lt,vertexShader:{log:F,prefix:M},fragmentShader:{log:H,prefix:x}})}s.deleteShader(L),s.deleteShader(z),G=new gf(s,E),A=m3(s,E)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(E,r3)),N},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=s3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=z,this}let U3=0;class L3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new N3(t),n.set(t,a)),a}}class N3{constructor(t){this.id=U3++,this.code=t,this.usedTimes=0}}function O3(o,t,n,a,s,u,c){const f=new Wy,p=new L3,d=new Set,_=[],g=new Map,v=s.logarithmicDepthBuffer;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function M(A,N,V,Z,K){const rt=Z.fog,lt=K.geometry,F=A.isMeshStandardMaterial?Z.environment:null,H=(A.isMeshStandardMaterial?n:t).get(A.envMap||F),J=H&&H.mapping===zf?H.image.height:null,St=T[A.type];A.precision!==null&&(y=s.getMaxPrecision(A.precision),y!==A.precision&&ne("WebGLProgram.getParameters:",A.precision,"not supported, using",y,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,B=xt!==void 0?xt.length:0;let tt=0;lt.morphAttributes.position!==void 0&&(tt=1),lt.morphAttributes.normal!==void 0&&(tt=2),lt.morphAttributes.color!==void 0&&(tt=3);let _t,Mt,Dt,it;if(St){const Te=_a[St];_t=Te.vertexShader,Mt=Te.fragmentShader}else _t=A.vertexShader,Mt=A.fragmentShader,p.update(A),Dt=p.getVertexShaderID(A),it=p.getFragmentShaderID(A);const dt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),Vt=K.isInstancedMesh===!0,Ht=K.isBatchedMesh===!0,he=!!A.map,Ke=!!A.matcap,pe=!!H,de=!!A.aoMap,Ee=!!A.lightMap,ie=!!A.bumpMap,Qe=!!A.normalMap,X=!!A.displacementMap,ke=!!A.emissiveMap,xe=!!A.metalnessMap,be=!!A.roughnessMap,Wt=A.anisotropy>0,P=A.clearcoat>0,S=A.dispersion>0,I=A.iridescence>0,Q=A.sheen>0,ht=A.transmission>0,at=Wt&&!!A.anisotropyMap,Pt=P&&!!A.clearcoatMap,Rt=P&&!!A.clearcoatNormalMap,Gt=P&&!!A.clearcoatRoughnessMap,Qt=I&&!!A.iridescenceMap,Et=I&&!!A.iridescenceThicknessMap,bt=Q&&!!A.sheenColorMap,Bt=Q&&!!A.sheenRoughnessMap,zt=!!A.specularMap,wt=!!A.specularColorMap,le=!!A.specularIntensityMap,q=ht&&!!A.transmissionMap,Lt=ht&&!!A.thicknessMap,Tt=!!A.gradientMap,Ft=!!A.alphaMap,yt=A.alphaTest>0,vt=!!A.alphaHash,Ct=!!A.extensions;let ee=Sa;A.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ee=o.toneMapping);const Pe={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:_t,fragmentShader:Mt,defines:A.defines,customVertexShaderID:Dt,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:y,batching:Ht,batchingColor:Ht&&K._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&K.instanceColor!==null,instancingMorph:Vt&&K.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:jo,alphaToCoverage:!!A.alphaToCoverage,map:he,matcap:Ke,envMap:pe,envMapMode:pe&&H.mapping,envMapCubeUVHeight:J,aoMap:de,lightMap:Ee,bumpMap:ie,normalMap:Qe,displacementMap:X,emissiveMap:ke,normalMapObjectSpace:Qe&&A.normalMapType===E1,normalMapTangentSpace:Qe&&A.normalMapType===M1,metalnessMap:xe,roughnessMap:be,anisotropy:Wt,anisotropyMap:at,clearcoat:P,clearcoatMap:Pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Gt,dispersion:S,iridescence:I,iridescenceMap:Qt,iridescenceThicknessMap:Et,sheen:Q,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:wt,specularIntensityMap:le,transmission:ht,transmissionMap:q,thicknessMap:Lt,gradientMap:Tt,opaque:A.transparent===!1&&A.blending===Fo&&A.alphaToCoverage===!1,alphaMap:Ft,alphaTest:yt,alphaHash:vt,combine:A.combine,mapUv:he&&E(A.map.channel),aoMapUv:de&&E(A.aoMap.channel),lightMapUv:Ee&&E(A.lightMap.channel),bumpMapUv:ie&&E(A.bumpMap.channel),normalMapUv:Qe&&E(A.normalMap.channel),displacementMapUv:X&&E(A.displacementMap.channel),emissiveMapUv:ke&&E(A.emissiveMap.channel),metalnessMapUv:xe&&E(A.metalnessMap.channel),roughnessMapUv:be&&E(A.roughnessMap.channel),anisotropyMapUv:at&&E(A.anisotropyMap.channel),clearcoatMapUv:Pt&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Gt&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qt&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&E(A.sheenRoughnessMap.channel),specularMapUv:zt&&E(A.specularMap.channel),specularColorMapUv:wt&&E(A.specularColorMap.channel),specularIntensityMapUv:le&&E(A.specularIntensityMap.channel),transmissionMapUv:q&&E(A.transmissionMap.channel),thicknessMapUv:Lt&&E(A.thicknessMap.channel),alphaMapUv:Ft&&E(A.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Qe||Wt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!lt.attributes.uv&&(he||Ft),fog:!!rt,useFog:A.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:K.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:tt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:he&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===Ie,decodeVideoTextureEmissive:ke&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===Ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Ka,flipSided:A.side===ui,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ct&&A.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&A.extensions.multiDraw===!0||Ht)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pe.vertexUv1s=d.has(1),Pe.vertexUv2s=d.has(2),Pe.vertexUv3s=d.has(3),d.clear(),Pe}function x(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const V in A.defines)N.push(V),N.push(A.defines[V]);return A.isRawShaderMaterial===!1&&(C(N,A),U(N,A),N.push(o.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function C(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function U(A,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),A.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),A.push(f.mask)}function R(A){const N=T[A.type];let V;if(N){const Z=_a[N];V=Q1.clone(Z.uniforms)}else V=A.uniforms;return V}function L(A,N){let V=g.get(N);return V!==void 0?++V.usedTimes:(V=new D3(o,N,A,u),_.push(V),g.set(N,V)),V}function z(A){if(--A.usedTimes===0){const N=_.indexOf(A);_[N]=_[_.length-1],_.pop(),g.delete(A.cacheKey),A.destroy()}}function O(A){p.remove(A)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:R,acquireProgram:L,releaseProgram:z,releaseShaderCache:O,programs:_,dispose:G}}function P3(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function u(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:u}}function z3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function MS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ES(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g,v,y,T,E,M){let x=o[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:E,group:M},o[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=E,x.group=M),t++,x}function f(g,v,y,T,E,M){const x=c(g,v,y,T,E,M);y.transmission>0?a.push(x):y.transparent===!0?s.push(x):n.push(x)}function p(g,v,y,T,E,M){const x=c(g,v,y,T,E,M);y.transmission>0?a.unshift(x):y.transparent===!0?s.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||z3),a.length>1&&a.sort(v||MS),s.length>1&&s.sort(v||MS)}function _(){for(let g=t,v=o.length;g<v;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:f,unshift:p,finish:_,sort:d}}function F3(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new ES,o.set(a,[c])):s>=u.length?(c=new ES,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function B3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ut,color:new Ne};break;case"SpotLight":n={position:new ut,direction:new ut,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ut,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ut,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return o[t.id]=n,n}}}function I3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let H3=0;function G3(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function V3(o){const t=new B3,n=I3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ut);const s=new ut,u=new dn,c=new dn;function f(d){let _=0,g=0,v=0;for(let A=0;A<9;A++)a.probe[A].set(0,0,0);let y=0,T=0,E=0,M=0,x=0,C=0,U=0,R=0,L=0,z=0,O=0;d.sort(G3);for(let A=0,N=d.length;A<N;A++){const V=d[A],Z=V.color,K=V.intensity,rt=V.distance;let lt=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Yo?lt=V.shadow.map.texture:lt=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Z.r*K,g+=Z.g*K,v+=Z.b*K;else if(V.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(V.sh.coefficients[F],K);O++}else if(V.isDirectionalLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.directionalShadow[y]=J,a.directionalShadowMap[y]=lt,a.directionalShadowMatrix[y]=V.shadow.matrix,C++}a.directional[y]=F,y++}else if(V.isSpotLight){const F=t.get(V);F.position.setFromMatrixPosition(V.matrixWorld),F.color.copy(Z).multiplyScalar(K),F.distance=rt,F.coneCos=Math.cos(V.angle),F.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),F.decay=V.decay,a.spot[E]=F;const H=V.shadow;if(V.map&&(a.spotLightMap[L]=V.map,L++,H.updateMatrices(V),V.castShadow&&z++),a.spotLightMatrix[E]=H.matrix,V.castShadow){const J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,a.spotShadow[E]=J,a.spotShadowMap[E]=lt,R++}E++}else if(V.isRectAreaLight){const F=t.get(V);F.color.copy(Z).multiplyScalar(K),F.halfWidth.set(V.width*.5,0,0),F.halfHeight.set(0,V.height*.5,0),a.rectArea[M]=F,M++}else if(V.isPointLight){const F=t.get(V);if(F.color.copy(V.color).multiplyScalar(V.intensity),F.distance=V.distance,F.decay=V.decay,V.castShadow){const H=V.shadow,J=n.get(V);J.shadowIntensity=H.intensity,J.shadowBias=H.bias,J.shadowNormalBias=H.normalBias,J.shadowRadius=H.radius,J.shadowMapSize=H.mapSize,J.shadowCameraNear=H.camera.near,J.shadowCameraFar=H.camera.far,a.pointShadow[T]=J,a.pointShadowMap[T]=lt,a.pointShadowMatrix[T]=V.shadow.matrix,U++}a.point[T]=F,T++}else if(V.isHemisphereLight){const F=t.get(V);F.skyColor.copy(V.color).multiplyScalar(K),F.groundColor.copy(V.groundColor).multiplyScalar(K),a.hemi[x]=F,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const G=a.hash;(G.directionalLength!==y||G.pointLength!==T||G.spotLength!==E||G.rectAreaLength!==M||G.hemiLength!==x||G.numDirectionalShadows!==C||G.numPointShadows!==U||G.numSpotShadows!==R||G.numSpotMaps!==L||G.numLightProbes!==O)&&(a.directional.length=y,a.spot.length=E,a.rectArea.length=M,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=R+L-z,a.spotLightMap.length=L,a.numSpotLightShadowsWithMaps=z,a.numLightProbes=O,G.directionalLength=y,G.pointLength=T,G.spotLength=E,G.rectAreaLength=M,G.hemiLength=x,G.numDirectionalShadows=C,G.numPointShadows=U,G.numSpotShadows=R,G.numSpotMaps=L,G.numLightProbes=O,a.version=H3++)}function p(d,_){let g=0,v=0,y=0,T=0,E=0;const M=_.matrixWorldInverse;for(let x=0,C=d.length;x<C;x++){const U=d[x];if(U.isDirectionalLight){const R=a.directional[g];R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(M),g++}else if(U.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(M),y++}else if(U.isRectAreaLight){const R=a.rectArea[T];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),c.identity(),u.copy(U.matrixWorld),u.premultiply(M),c.extractRotation(u),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const R=a.point[v];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(M),v++}else if(U.isHemisphereLight){const R=a.hemi[E];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(M),E++}}}return{setup:f,setupView:p,state:a}}function bS(o){const t=new V3(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function k3(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new bS(o),t.set(s,[f])):u>=c.length?(f=new bS(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const X3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q3=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],Y3=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],TS=new dn,tu=new ut,Op=new ut;function j3(o,t,n){let a=new tM;const s=new se,u=new se,c=new on,f=new uA,p=new cA,d={},_=n.maxTextureSize,g={[Wr]:ui,[ui]:Wr,[Ka]:Ka},v=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:X3,fragmentShader:W3}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new la;T.setAttribute("position",new sa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new qi(T,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let x=this.type;this.render=function(z,O,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===$T&&(ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=hf);const A=o.getRenderTarget(),N=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Qa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=x!==this.type;K&&O.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(lt=>lt.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,lt=z.length;rt<lt;rt++){const F=z[rt],H=F.shadow;if(H===void 0){ne("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const J=H.getFrameExtents();if(s.multiply(J),u.copy(H.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/J.x),s.x=u.x*J.x,H.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/J.y),s.y=u.y*J.y,H.mapSize.y=u.y)),H.map===null||K===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===au){if(F.isPointLight){ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ra(s.x,s.y,{format:Yo,type:Ea,minFilter:yn,magFilter:yn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new Su(s.x,s.y,aa),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=er,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn}else{F.isPointLight?(H.map=new Jy(s.x),H.map.depthTexture=new lA(s.x,Ma)):(H.map=new ra(s.x,s.y),H.map.depthTexture=new Su(s.x,s.y,Ma)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=er;const xt=o.state.buffers.depth.getReversed();this.type===hf?(H.map.depthTexture.compareFunction=xt?g_:__,H.map.depthTexture.minFilter=yn,H.map.depthTexture.magFilter=yn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn)}H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<St;xt++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xt),o.clear();else{xt===0&&(o.setRenderTarget(H.map),o.clear());const B=H.getViewport(xt);c.set(u.x*B.x,u.y*B.y,u.x*B.z,u.y*B.w),Z.viewport(c)}if(F.isPointLight){const B=H.camera,tt=H.matrix,_t=F.distance||B.far;_t!==B.far&&(B.far=_t,B.updateProjectionMatrix()),tu.setFromMatrixPosition(F.matrixWorld),B.position.copy(tu),Op.copy(B.position),Op.add(q3[xt]),B.up.copy(Y3[xt]),B.lookAt(Op),B.updateMatrixWorld(),tt.makeTranslation(-tu.x,-tu.y,-tu.z),TS.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),H._frustum.setFromProjectionMatrix(TS,B.coordinateSystem,B.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),R(O,G,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===au&&C(H,G),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(A,N,V)};function C(z,O){const G=t.update(E);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ra(s.x,s.y,{format:Yo,type:Ea})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(O,null,G,v,E,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(O,null,G,y,E,null)}function U(z,O,G,A){let N=null;const V=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)N=V;else if(N=G.isPointLight===!0?p:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=N.uuid,K=O.uuid;let rt=d[Z];rt===void 0&&(rt={},d[Z]=rt);let lt=rt[K];lt===void 0&&(lt=N.clone(),rt[K]=lt,O.addEventListener("dispose",L)),N=lt}if(N.visible=O.visible,N.wireframe=O.wireframe,A===au?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:g[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,G.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const Z=o.properties.get(N);Z.light=G}return N}function R(z,O,G,A,N){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&N===au)&&(!z.frustumCulled||a.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const K=t.update(z),rt=z.material;if(Array.isArray(rt)){const lt=K.groups;for(let F=0,H=lt.length;F<H;F++){const J=lt[F],St=rt[J.materialIndex];if(St&&St.visible){const xt=U(z,St,A,N);z.onBeforeShadow(o,z,O,G,K,xt,J),o.renderBufferDirect(G,null,K,xt,z,J),z.onAfterShadow(o,z,O,G,K,xt,J)}}}else if(rt.visible){const lt=U(z,rt,A,N);z.onBeforeShadow(o,z,O,G,K,lt,null),o.renderBufferDirect(G,null,K,lt,z,null),z.onAfterShadow(o,z,O,G,K,lt,null)}}const Z=z.children;for(let K=0,rt=Z.length;K<rt;K++)R(Z[K],O,G,A,N)}function L(z){z.target.removeEventListener("dispose",L);for(const G in d){const A=d[G],N=z.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}const Z3={[Jp]:$p,[tm]:im,[em]:am,[Wo]:nm,[$p]:Jp,[im]:tm,[am]:em,[nm]:Wo};function K3(o,t){function n(){let q=!1;const Lt=new on;let Tt=null;const Ft=new on(0,0,0,0);return{setMask:function(yt){Tt!==yt&&!q&&(o.colorMask(yt,yt,yt,yt),Tt=yt)},setLocked:function(yt){q=yt},setClear:function(yt,vt,Ct,ee,Pe){Pe===!0&&(yt*=ee,vt*=ee,Ct*=ee),Lt.set(yt,vt,Ct,ee),Ft.equals(Lt)===!1&&(o.clearColor(yt,vt,Ct,ee),Ft.copy(Lt))},reset:function(){q=!1,Tt=null,Ft.set(-1,0,0,0)}}}function a(){let q=!1,Lt=!1,Tt=null,Ft=null,yt=null;return{setReversed:function(vt){if(Lt!==vt){const Ct=t.get("EXT_clip_control");vt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const ee=yt;yt=null,this.setClear(ee)}},getReversed:function(){return Lt},setTest:function(vt){vt?dt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(vt){Tt!==vt&&!q&&(o.depthMask(vt),Tt=vt)},setFunc:function(vt){if(Lt&&(vt=Z3[vt]),Ft!==vt){switch(vt){case Jp:o.depthFunc(o.NEVER);break;case $p:o.depthFunc(o.ALWAYS);break;case tm:o.depthFunc(o.LESS);break;case Wo:o.depthFunc(o.LEQUAL);break;case em:o.depthFunc(o.EQUAL);break;case nm:o.depthFunc(o.GEQUAL);break;case im:o.depthFunc(o.GREATER);break;case am:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=vt}},setLocked:function(vt){q=vt},setClear:function(vt){yt!==vt&&(Lt&&(vt=1-vt),o.clearDepth(vt),yt=vt)},reset:function(){q=!1,Tt=null,Ft=null,yt=null,Lt=!1}}}function s(){let q=!1,Lt=null,Tt=null,Ft=null,yt=null,vt=null,Ct=null,ee=null,Pe=null;return{setTest:function(Te){q||(Te?dt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!q&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,Vn,Yi){(Tt!==Te||Ft!==Vn||yt!==Yi)&&(o.stencilFunc(Te,Vn,Yi),Tt=Te,Ft=Vn,yt=Yi)},setOp:function(Te,Vn,Yi){(vt!==Te||Ct!==Vn||ee!==Yi)&&(o.stencilOp(Te,Vn,Yi),vt=Te,Ct=Vn,ee=Yi)},setLocked:function(Te){q=Te},setClear:function(Te){Pe!==Te&&(o.clearStencil(Te),Pe=Te)},reset:function(){q=!1,Lt=null,Tt=null,Ft=null,yt=null,vt=null,Ct=null,ee=null,Pe=null}}}const u=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,y=[],T=null,E=!1,M=null,x=null,C=null,U=null,R=null,L=null,z=null,O=new Ne(0,0,0),G=0,A=!1,N=null,V=null,Z=null,K=null,rt=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=H>=1):J.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=H>=2);let St=null,xt={};const B=o.getParameter(o.SCISSOR_BOX),tt=o.getParameter(o.VIEWPORT),_t=new on().fromArray(B),Mt=new on().fromArray(tt);function Dt(q,Lt,Tt,Ft){const yt=new Uint8Array(4),vt=o.createTexture();o.bindTexture(q,vt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ct=0;Ct<Tt;Ct++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Lt+Ct,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return vt}const it={};it[o.TEXTURE_2D]=Dt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),dt(o.DEPTH_TEST),c.setFunc(Wo),ie(!1),Qe(Rx),dt(o.CULL_FACE),de(Qa);function dt(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function At(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Vt(q,Lt){return g[q]!==Lt?(o.bindFramebuffer(q,Lt),g[q]=Lt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ht(q,Lt){let Tt=y,Ft=!1;if(q){Tt=v.get(Lt),Tt===void 0&&(Tt=[],v.set(Lt,Tt));const yt=q.textures;if(Tt.length!==yt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Ct=yt.length;vt<Ct;vt++)Tt[vt]=o.COLOR_ATTACHMENT0+vt;Tt.length=yt.length,Ft=!0}}else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Tt)}function he(q){return T!==q?(o.useProgram(q),T=q,!0):!1}const Ke={[ys]:o.FUNC_ADD,[e1]:o.FUNC_SUBTRACT,[n1]:o.FUNC_REVERSE_SUBTRACT};Ke[i1]=o.MIN,Ke[a1]=o.MAX;const pe={[r1]:o.ZERO,[s1]:o.ONE,[o1]:o.SRC_COLOR,[Kp]:o.SRC_ALPHA,[d1]:o.SRC_ALPHA_SATURATE,[f1]:o.DST_COLOR,[u1]:o.DST_ALPHA,[l1]:o.ONE_MINUS_SRC_COLOR,[Qp]:o.ONE_MINUS_SRC_ALPHA,[h1]:o.ONE_MINUS_DST_COLOR,[c1]:o.ONE_MINUS_DST_ALPHA,[p1]:o.CONSTANT_COLOR,[m1]:o.ONE_MINUS_CONSTANT_COLOR,[_1]:o.CONSTANT_ALPHA,[g1]:o.ONE_MINUS_CONSTANT_ALPHA};function de(q,Lt,Tt,Ft,yt,vt,Ct,ee,Pe,Te){if(q===Qa){E===!0&&(At(o.BLEND),E=!1);return}if(E===!1&&(dt(o.BLEND),E=!0),q!==t1){if(q!==M||Te!==A){if((x!==ys||R!==ys)&&(o.blendEquation(o.FUNC_ADD),x=ys,R=ys),Te)switch(q){case Fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zp:o.blendFunc(o.ONE,o.ONE);break;case Cx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case wx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:we("WebGLState: Invalid blending: ",q);break}else switch(q){case Fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Cx:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wx:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",q);break}C=null,U=null,L=null,z=null,O.set(0,0,0),G=0,M=q,A=Te}return}yt=yt||Lt,vt=vt||Tt,Ct=Ct||Ft,(Lt!==x||yt!==R)&&(o.blendEquationSeparate(Ke[Lt],Ke[yt]),x=Lt,R=yt),(Tt!==C||Ft!==U||vt!==L||Ct!==z)&&(o.blendFuncSeparate(pe[Tt],pe[Ft],pe[vt],pe[Ct]),C=Tt,U=Ft,L=vt,z=Ct),(ee.equals(O)===!1||Pe!==G)&&(o.blendColor(ee.r,ee.g,ee.b,Pe),O.copy(ee),G=Pe),M=q,A=!1}function Ee(q,Lt){q.side===Ka?At(o.CULL_FACE):dt(o.CULL_FACE);let Tt=q.side===ui;Lt&&(Tt=!Tt),ie(Tt),q.blending===Fo&&q.transparent===!1?de(Qa):de(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),u.setMask(q.colorWrite);const Ft=q.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),ke(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(q){N!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),N=q)}function Qe(q){q!==QT?(dt(o.CULL_FACE),q!==V&&(q===Rx?o.cullFace(o.BACK):q===JT?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),V=q}function X(q){q!==Z&&(F&&o.lineWidth(q),Z=q)}function ke(q,Lt,Tt){q?(dt(o.POLYGON_OFFSET_FILL),(K!==Lt||rt!==Tt)&&(o.polygonOffset(Lt,Tt),K=Lt,rt=Tt)):At(o.POLYGON_OFFSET_FILL)}function xe(q){q?dt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function be(q){q===void 0&&(q=o.TEXTURE0+lt-1),St!==q&&(o.activeTexture(q),St=q)}function Wt(q,Lt,Tt){Tt===void 0&&(St===null?Tt=o.TEXTURE0+lt-1:Tt=St);let Ft=xt[Tt];Ft===void 0&&(Ft={type:void 0,texture:void 0},xt[Tt]=Ft),(Ft.type!==q||Ft.texture!==Lt)&&(St!==Tt&&(o.activeTexture(Tt),St=Tt),o.bindTexture(q,Lt||it[q]),Ft.type=q,Ft.texture=Lt)}function P(){const q=xt[St];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function S(){try{o.compressedTexImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function I(){try{o.compressedTexImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function Q(){try{o.texSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function ht(){try{o.texSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function at(){try{o.compressedTexSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Pt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function Rt(){try{o.texStorage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Gt(){try{o.texStorage3D(...arguments)}catch(q){we("WebGLState:",q)}}function Qt(){try{o.texImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Et(){try{o.texImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function bt(q){_t.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_t.copy(q))}function Bt(q){Mt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Mt.copy(q))}function zt(q,Lt){let Tt=d.get(Lt);Tt===void 0&&(Tt=new WeakMap,d.set(Lt,Tt));let Ft=Tt.get(q);Ft===void 0&&(Ft=o.getUniformBlockIndex(Lt,q.name),Tt.set(q,Ft))}function wt(q,Lt){const Ft=d.get(Lt).get(q);p.get(Lt)!==Ft&&(o.uniformBlockBinding(Lt,Ft,q.__bindingPointIndex),p.set(Lt,Ft))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},St=null,xt={},g={},v=new WeakMap,y=[],T=null,E=!1,M=null,x=null,C=null,U=null,R=null,L=null,z=null,O=new Ne(0,0,0),G=0,A=!1,N=null,V=null,Z=null,K=null,rt=null,_t.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:dt,disable:At,bindFramebuffer:Vt,drawBuffers:Ht,useProgram:he,setBlending:de,setMaterial:Ee,setFlipSided:ie,setCullFace:Qe,setLineWidth:X,setPolygonOffset:ke,setScissorTest:xe,activeTexture:be,bindTexture:Wt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:I,texImage2D:Qt,texImage3D:Et,updateUBOMapping:zt,uniformBlockBinding:wt,texStorage2D:Rt,texStorage3D:Gt,texSubImage2D:Q,texSubImage3D:ht,compressedTexSubImage2D:at,compressedTexSubImage3D:Pt,scissor:bt,viewport:Bt,reset:le}}function Q3(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new se,_=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,S){return y?new OffscreenCanvas(P,S):wf("canvas")}function E(P,S,I){let Q=1;const ht=Wt(P);if((ht.width>I||ht.height>I)&&(Q=I/Math.max(ht.width,ht.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const at=Math.floor(Q*ht.width),Pt=Math.floor(Q*ht.height);g===void 0&&(g=T(at,Pt));const Rt=S?T(at,Pt):g;return Rt.width=at,Rt.height=Pt,Rt.getContext("2d").drawImage(P,0,0,at,Pt),ne("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+at+"x"+Pt+")."),Rt}else return"data"in P&&ne("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function M(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(P,S,I,Q,ht=!1){if(P!==null){if(o[P]!==void 0)return o[P];ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let at=S;if(S===o.RED&&(I===o.FLOAT&&(at=o.R32F),I===o.HALF_FLOAT&&(at=o.R16F),I===o.UNSIGNED_BYTE&&(at=o.R8)),S===o.RED_INTEGER&&(I===o.UNSIGNED_BYTE&&(at=o.R8UI),I===o.UNSIGNED_SHORT&&(at=o.R16UI),I===o.UNSIGNED_INT&&(at=o.R32UI),I===o.BYTE&&(at=o.R8I),I===o.SHORT&&(at=o.R16I),I===o.INT&&(at=o.R32I)),S===o.RG&&(I===o.FLOAT&&(at=o.RG32F),I===o.HALF_FLOAT&&(at=o.RG16F),I===o.UNSIGNED_BYTE&&(at=o.RG8)),S===o.RG_INTEGER&&(I===o.UNSIGNED_BYTE&&(at=o.RG8UI),I===o.UNSIGNED_SHORT&&(at=o.RG16UI),I===o.UNSIGNED_INT&&(at=o.RG32UI),I===o.BYTE&&(at=o.RG8I),I===o.SHORT&&(at=o.RG16I),I===o.INT&&(at=o.RG32I)),S===o.RGB_INTEGER&&(I===o.UNSIGNED_BYTE&&(at=o.RGB8UI),I===o.UNSIGNED_SHORT&&(at=o.RGB16UI),I===o.UNSIGNED_INT&&(at=o.RGB32UI),I===o.BYTE&&(at=o.RGB8I),I===o.SHORT&&(at=o.RGB16I),I===o.INT&&(at=o.RGB32I)),S===o.RGBA_INTEGER&&(I===o.UNSIGNED_BYTE&&(at=o.RGBA8UI),I===o.UNSIGNED_SHORT&&(at=o.RGBA16UI),I===o.UNSIGNED_INT&&(at=o.RGBA32UI),I===o.BYTE&&(at=o.RGBA8I),I===o.SHORT&&(at=o.RGBA16I),I===o.INT&&(at=o.RGBA32I)),S===o.RGB&&(I===o.UNSIGNED_INT_5_9_9_9_REV&&(at=o.RGB9_E5),I===o.UNSIGNED_INT_10F_11F_11F_REV&&(at=o.R11F_G11F_B10F)),S===o.RGBA){const Pt=ht?Rf:Ae.getTransfer(Q);I===o.FLOAT&&(at=o.RGBA32F),I===o.HALF_FLOAT&&(at=o.RGBA16F),I===o.UNSIGNED_BYTE&&(at=Pt===Ie?o.SRGB8_ALPHA8:o.RGBA8),I===o.UNSIGNED_SHORT_4_4_4_4&&(at=o.RGBA4),I===o.UNSIGNED_SHORT_5_5_5_1&&(at=o.RGB5_A1)}return(at===o.R16F||at===o.R32F||at===o.RG16F||at===o.RG32F||at===o.RGBA16F||at===o.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function R(P,S){let I;return P?S===null||S===Ma||S===vu?I=o.DEPTH24_STENCIL8:S===aa?I=o.DEPTH32F_STENCIL8:S===gu&&(I=o.DEPTH24_STENCIL8,ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ma||S===vu?I=o.DEPTH_COMPONENT24:S===aa?I=o.DEPTH_COMPONENT32F:S===gu&&(I=o.DEPTH_COMPONENT16),I}function L(P,S){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Hn&&P.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function z(P){const S=P.target;S.removeEventListener("dispose",z),G(S),S.isVideoTexture&&_.delete(S)}function O(P){const S=P.target;S.removeEventListener("dispose",O),N(S)}function G(P){const S=a.get(P);if(S.__webglInit===void 0)return;const I=P.source,Q=v.get(I);if(Q){const ht=Q[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&A(P),Object.keys(Q).length===0&&v.delete(I)}a.remove(P)}function A(P){const S=a.get(P);o.deleteTexture(S.__webglTexture);const I=P.source,Q=v.get(I);delete Q[S.__cacheKey],c.memory.textures--}function N(P){const S=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ht=0;ht<S.__webglFramebuffer[Q].length;ht++)o.deleteFramebuffer(S.__webglFramebuffer[Q][ht]);else o.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)o.deleteFramebuffer(S.__webglFramebuffer[Q]);else o.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&o.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&o.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&o.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&o.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const I=P.textures;for(let Q=0,ht=I.length;Q<ht;Q++){const at=a.get(I[Q]);at.__webglTexture&&(o.deleteTexture(at.__webglTexture),c.memory.textures--),a.remove(I[Q])}a.remove(P)}let V=0;function Z(){V=0}function K(){const P=V;return P>=s.maxTextures&&ne("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),V+=1,P}function rt(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function lt(P,S){const I=a.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&I.__version!==P.version){const Q=P.image;if(Q===null)ne("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ne("WebGLRenderer: Texture marked for update but image is incomplete");else{it(I,P,S);return}}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,I.__webglTexture,o.TEXTURE0+S)}function F(P,S){const I=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){it(I,P,S);return}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,I.__webglTexture,o.TEXTURE0+S)}function H(P,S){const I=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){it(I,P,S);return}n.bindTexture(o.TEXTURE_3D,I.__webglTexture,o.TEXTURE0+S)}function J(P,S){const I=a.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&I.__version!==P.version){dt(I,P,S);return}n.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+S)}const St={[om]:o.REPEAT,[Ti]:o.CLAMP_TO_EDGE,[lm]:o.MIRRORED_REPEAT},xt={[Hn]:o.NEAREST,[S1]:o.NEAREST_MIPMAP_NEAREST,[Ic]:o.NEAREST_MIPMAP_LINEAR,[yn]:o.LINEAR,[ip]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},B={[b1]:o.NEVER,[w1]:o.ALWAYS,[T1]:o.LESS,[__]:o.LEQUAL,[A1]:o.EQUAL,[g_]:o.GEQUAL,[R1]:o.GREATER,[C1]:o.NOTEQUAL};function tt(P,S){if(S.type===aa&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===yn||S.magFilter===ip||S.magFilter===Ic||S.magFilter===bs||S.minFilter===yn||S.minFilter===ip||S.minFilter===Ic||S.minFilter===bs)&&ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,St[S.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,St[S.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,St[S.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,xt[S.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,xt[S.minFilter]),S.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,B[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Hn||S.minFilter!==Ic&&S.minFilter!==bs||S.type===aa&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||a.get(S).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");o.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),a.get(S).__currentAnisotropy=S.anisotropy}}}function _t(P,S){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",z));const Q=S.source;let ht=v.get(Q);ht===void 0&&(ht={},v.set(Q,ht));const at=rt(S);if(at!==P.__cacheKey){ht[at]===void 0&&(ht[at]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,I=!0),ht[at].usedTimes++;const Pt=ht[P.__cacheKey];Pt!==void 0&&(ht[P.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(S)),P.__cacheKey=at,P.__webglTexture=ht[at].texture}return I}function Mt(P,S,I){return Math.floor(Math.floor(P/I)/S)}function Dt(P,S,I,Q){const at=P.updateRanges;if(at.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,S.width,S.height,I,Q,S.data);else{at.sort((Et,bt)=>Et.start-bt.start);let Pt=0;for(let Et=1;Et<at.length;Et++){const bt=at[Pt],Bt=at[Et],zt=bt.start+bt.count,wt=Mt(Bt.start,S.width,4),le=Mt(bt.start,S.width,4);Bt.start<=zt+1&&wt===le&&Mt(Bt.start+Bt.count-1,S.width,4)===wt?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++Pt,at[Pt]=Bt)}at.length=Pt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Gt=o.getParameter(o.UNPACK_SKIP_PIXELS),Qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,S.width);for(let Et=0,bt=at.length;Et<bt;Et++){const Bt=at[Et],zt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),le=zt%S.width,q=Math.floor(zt/S.width),Lt=wt,Tt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),n.texSubImage2D(o.TEXTURE_2D,0,le,q,Lt,Tt,I,Q,S.data)}P.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Gt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Qt)}}function it(P,S,I){let Q=o.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=o.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=o.TEXTURE_3D);const ht=_t(P,S),at=S.source;n.bindTexture(Q,P.__webglTexture,o.TEXTURE0+I);const Pt=a.get(at);if(at.version!==Pt.__version||ht===!0){n.activeTexture(o.TEXTURE0+I);const Rt=Ae.getPrimaries(Ae.workingColorSpace),Gt=S.colorSpace===Pr?null:Ae.getPrimaries(S.colorSpace),Qt=S.colorSpace===Pr||Rt===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let Et=E(S.image,!1,s.maxTextureSize);Et=be(S,Et);const bt=u.convert(S.format,S.colorSpace),Bt=u.convert(S.type);let zt=U(S.internalFormat,bt,Bt,S.colorSpace,S.isVideoTexture);tt(Q,S);let wt;const le=S.mipmaps,q=S.isVideoTexture!==!0,Lt=Pt.__version===void 0||ht===!0,Tt=at.dataReady,Ft=L(S,Et);if(S.isDepthTexture)zt=R(S.format===Ts,S.type),Lt&&(q?n.texStorage2D(o.TEXTURE_2D,1,zt,Et.width,Et.height):n.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Bt,null));else if(S.isDataTexture)if(le.length>0){q&&Lt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],q?Tt&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Bt,wt.data):n.texImage2D(o.TEXTURE_2D,yt,zt,wt.width,wt.height,0,bt,Bt,wt.data);S.generateMipmaps=!1}else q?(Lt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,Et.width,Et.height),Tt&&Dt(S,Et,bt,Bt)):n.texImage2D(o.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Bt,Et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){q&&Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,le[0].width,le[0].height,Et.depth);for(let yt=0,vt=le.length;yt<vt;yt++)if(wt=le[yt],S.format!==Wi)if(bt!==null)if(q){if(Tt)if(S.layerUpdates.size>0){const Ct=nS(wt.width,wt.height,S.format,S.type);for(const ee of S.layerUpdates){const Pe=wt.data.subarray(ee*Ct/wt.data.BYTES_PER_ELEMENT,(ee+1)*Ct/wt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ee,wt.width,wt.height,1,bt,Pe)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,wt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,wt.width,wt.height,Et.depth,0,wt.data,0,0);else ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Tt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,wt.width,wt.height,Et.depth,bt,Bt,wt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,wt.width,wt.height,Et.depth,0,bt,Bt,wt.data)}else{q&&Lt&&n.texStorage2D(o.TEXTURE_2D,Ft,zt,le[0].width,le[0].height);for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],S.format!==Wi?bt!==null?q?Tt&&n.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,wt.data):n.compressedTexImage2D(o.TEXTURE_2D,yt,zt,wt.width,wt.height,0,wt.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Tt&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt.width,wt.height,bt,Bt,wt.data):n.texImage2D(o.TEXTURE_2D,yt,zt,wt.width,wt.height,0,bt,Bt,wt.data)}else if(S.isDataArrayTexture)if(q){if(Lt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,zt,Et.width,Et.height,Et.depth),Tt)if(S.layerUpdates.size>0){const yt=nS(Et.width,Et.height,S.format,S.type);for(const vt of S.layerUpdates){const Ct=Et.data.subarray(vt*yt/Et.data.BYTES_PER_ELEMENT,(vt+1)*yt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,bt,Bt,Ct)}S.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(S.isData3DTexture)q?(Lt&&n.texStorage3D(o.TEXTURE_3D,Ft,zt,Et.width,Et.height,Et.depth),Tt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)):n.texImage3D(o.TEXTURE_3D,0,zt,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(S.isFramebufferTexture){if(Lt)if(q)n.texStorage2D(o.TEXTURE_2D,Ft,zt,Et.width,Et.height);else{let yt=Et.width,vt=Et.height;for(let Ct=0;Ct<Ft;Ct++)n.texImage2D(o.TEXTURE_2D,Ct,zt,yt,vt,0,bt,Bt,null),yt>>=1,vt>>=1}}else if(le.length>0){if(q&&Lt){const yt=Wt(le[0]);n.texStorage2D(o.TEXTURE_2D,Ft,zt,yt.width,yt.height)}for(let yt=0,vt=le.length;yt<vt;yt++)wt=le[yt],q?Tt&&n.texSubImage2D(o.TEXTURE_2D,yt,0,0,bt,Bt,wt):n.texImage2D(o.TEXTURE_2D,yt,zt,bt,Bt,wt);S.generateMipmaps=!1}else if(q){if(Lt){const yt=Wt(Et);n.texStorage2D(o.TEXTURE_2D,Ft,zt,yt.width,yt.height)}Tt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Bt,Et)}else n.texImage2D(o.TEXTURE_2D,0,zt,bt,Bt,Et);M(S)&&x(Q),Pt.__version=at.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function dt(P,S,I){if(S.image.length!==6)return;const Q=_t(P,S),ht=S.source;n.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+I);const at=a.get(ht);if(ht.version!==at.__version||Q===!0){n.activeTexture(o.TEXTURE0+I);const Pt=Ae.getPrimaries(Ae.workingColorSpace),Rt=S.colorSpace===Pr?null:Ae.getPrimaries(S.colorSpace),Gt=S.colorSpace===Pr||Pt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,S.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,S.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,Et=S.image[0]&&S.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!Qt&&!Et?bt[vt]=E(S.image[vt],!0,s.maxCubemapSize):bt[vt]=Et?S.image[vt].image:S.image[vt],bt[vt]=be(S,bt[vt]);const Bt=bt[0],zt=u.convert(S.format,S.colorSpace),wt=u.convert(S.type),le=U(S.internalFormat,zt,wt,S.colorSpace),q=S.isVideoTexture!==!0,Lt=at.__version===void 0||Q===!0,Tt=ht.dataReady;let Ft=L(S,Bt);tt(o.TEXTURE_CUBE_MAP,S);let yt;if(Qt){q&&Lt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,Bt.width,Bt.height);for(let vt=0;vt<6;vt++){yt=bt[vt].mipmaps;for(let Ct=0;Ct<yt.length;Ct++){const ee=yt[Ct];S.format!==Wi?zt!==null?q?Tt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ee.width,ee.height,zt,ee.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,le,ee.width,ee.height,0,ee.data):ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,ee.width,ee.height,zt,wt,ee.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,le,ee.width,ee.height,0,zt,wt,ee.data)}}}else{if(yt=S.mipmaps,q&&Lt){yt.length>0&&Ft++;const vt=Wt(bt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){q?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,zt,wt,bt[vt].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,bt[vt].width,bt[vt].height,0,zt,wt,bt[vt].data);for(let Ct=0;Ct<yt.length;Ct++){const Pe=yt[Ct].image[vt].image;q?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,Pe.width,Pe.height,zt,wt,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,le,Pe.width,Pe.height,0,zt,wt,Pe.data)}}else{q?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,zt,wt,bt[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,zt,wt,bt[vt]);for(let Ct=0;Ct<yt.length;Ct++){const ee=yt[Ct];q?Tt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,zt,wt,ee.image[vt]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,le,zt,wt,ee.image[vt])}}}M(S)&&x(o.TEXTURE_CUBE_MAP),at.__version=ht.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function At(P,S,I,Q,ht,at){const Pt=u.convert(I.format,I.colorSpace),Rt=u.convert(I.type),Gt=U(I.internalFormat,Pt,Rt,I.colorSpace),Qt=a.get(S),Et=a.get(I);if(Et.__renderTarget=S,!Qt.__hasExternalTextures){const bt=Math.max(1,S.width>>at),Bt=Math.max(1,S.height>>at);ht===o.TEXTURE_3D||ht===o.TEXTURE_2D_ARRAY?n.texImage3D(ht,at,Gt,bt,Bt,S.depth,0,Pt,Rt,null):n.texImage2D(ht,at,Gt,bt,Bt,0,Pt,Rt,null)}n.bindFramebuffer(o.FRAMEBUFFER,P),ke(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Q,ht,Et.__webglTexture,0,X(S)):(ht===o.TEXTURE_2D||ht>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Q,ht,Et.__webglTexture,at),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Vt(P,S,I){if(o.bindRenderbuffer(o.RENDERBUFFER,P),S.depthBuffer){const Q=S.depthTexture,ht=Q&&Q.isDepthTexture?Q.type:null,at=R(S.stencilBuffer,ht),Pt=S.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ke(S)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(S),at,S.width,S.height):I?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(S),at,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,at,S.width,S.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Pt,o.RENDERBUFFER,P)}else{const Q=S.textures;for(let ht=0;ht<Q.length;ht++){const at=Q[ht],Pt=u.convert(at.format,at.colorSpace),Rt=u.convert(at.type),Gt=U(at.internalFormat,Pt,Rt,at.colorSpace);ke(S)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(S),Gt,S.width,S.height):I?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(S),Gt,S.width,S.height):o.renderbufferStorage(o.RENDERBUFFER,Gt,S.width,S.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ht(P,S,I){const Q=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(S.depthTexture);if(ht.__renderTarget=S,(!ht.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,S.depthTexture.addEventListener("dispose",z)),ht.__webglTexture===void 0){ht.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),tt(o.TEXTURE_CUBE_MAP,S.depthTexture);const Qt=u.convert(S.depthTexture.format),Et=u.convert(S.depthTexture.type);let bt;S.depthTexture.format===er?bt=o.DEPTH_COMPONENT24:S.depthTexture.format===Ts&&(bt=o.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,bt,S.width,S.height,0,Qt,Et,null)}}else lt(S.depthTexture,0);const at=ht.__webglTexture,Pt=X(S),Rt=Q?o.TEXTURE_CUBE_MAP_POSITIVE_X+I:o.TEXTURE_2D,Gt=S.depthTexture.format===Ts?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(S.depthTexture.format===er)ke(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Gt,Rt,at,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,Gt,Rt,at,0);else if(S.depthTexture.format===Ts)ke(S)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Gt,Rt,at,0,Pt):o.framebufferTexture2D(o.FRAMEBUFFER,Gt,Rt,at,0);else throw new Error("Unknown depthTexture format")}function he(P){const S=a.get(P),I=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const Q=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Q){const ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Q.removeEventListener("dispose",ht)};Q.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=Q}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(I)for(let Q=0;Q<6;Q++)Ht(S.__webglFramebuffer[Q],P,Q);else{const Q=P.texture.mipmaps;Q&&Q.length>0?Ht(S.__webglFramebuffer[0],P,0):Ht(S.__webglFramebuffer,P,0)}else if(I){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]===void 0)S.__webglDepthbuffer[Q]=o.createRenderbuffer(),Vt(S.__webglDepthbuffer[Q],P,!1);else{const ht=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer[Q];o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,at)}}else{const Q=P.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=o.createRenderbuffer(),Vt(S.__webglDepthbuffer,P,!1);else{const ht=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,at=S.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,at),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,at)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(P,S,I){const Q=a.get(P);S!==void 0&&At(Q.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),I!==void 0&&he(P)}function pe(P){const S=P.texture,I=a.get(P),Q=a.get(S);P.addEventListener("dispose",O);const ht=P.textures,at=P.isWebGLCubeRenderTarget===!0,Pt=ht.length>1;if(Pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=S.version,c.memory.textures++),at){I.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer[Rt]=[];for(let Gt=0;Gt<S.mipmaps.length;Gt++)I.__webglFramebuffer[Rt][Gt]=o.createFramebuffer()}else I.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){I.__webglFramebuffer=[];for(let Rt=0;Rt<S.mipmaps.length;Rt++)I.__webglFramebuffer[Rt]=o.createFramebuffer()}else I.__webglFramebuffer=o.createFramebuffer();if(Pt)for(let Rt=0,Gt=ht.length;Rt<Gt;Rt++){const Qt=a.get(ht[Rt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&ke(P)===!1){I.__webglMultisampledFramebuffer=o.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let Rt=0;Rt<ht.length;Rt++){const Gt=ht[Rt];I.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,I.__webglColorRenderbuffer[Rt]);const Qt=u.convert(Gt.format,Gt.colorSpace),Et=u.convert(Gt.type),bt=U(Gt.internalFormat,Qt,Et,Gt.colorSpace,P.isXRRenderTarget===!0),Bt=X(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,bt,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,I.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=o.createRenderbuffer(),Vt(I.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(at){n.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture),tt(o.TEXTURE_CUBE_MAP,S);for(let Rt=0;Rt<6;Rt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Gt=0;Gt<S.mipmaps.length;Gt++)At(I.__webglFramebuffer[Rt][Gt],P,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Gt);else At(I.__webglFramebuffer[Rt],P,S,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(S)&&x(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let Rt=0,Gt=ht.length;Rt<Gt;Rt++){const Qt=ht[Rt],Et=a.get(Qt);let bt=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(bt,Et.__webglTexture),tt(bt,Qt),At(I.__webglFramebuffer,P,Qt,o.COLOR_ATTACHMENT0+Rt,bt,0),M(Qt)&&x(bt)}n.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Q.__webglTexture),tt(Rt,S),S.mipmaps&&S.mipmaps.length>0)for(let Gt=0;Gt<S.mipmaps.length;Gt++)At(I.__webglFramebuffer[Gt],P,S,o.COLOR_ATTACHMENT0,Rt,Gt);else At(I.__webglFramebuffer,P,S,o.COLOR_ATTACHMENT0,Rt,0);M(S)&&x(Rt),n.unbindTexture()}P.depthBuffer&&he(P)}function de(P){const S=P.textures;for(let I=0,Q=S.length;I<Q;I++){const ht=S[I];if(M(ht)){const at=C(P),Pt=a.get(ht).__webglTexture;n.bindTexture(at,Pt),x(at),n.unbindTexture()}}}const Ee=[],ie=[];function Qe(P){if(P.samples>0){if(ke(P)===!1){const S=P.textures,I=P.width,Q=P.height;let ht=o.COLOR_BUFFER_BIT;const at=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Pt=a.get(P),Rt=S.length>1;if(Rt)for(let Qt=0;Qt<S.length;Qt++)n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Gt=P.texture.mipmaps;Gt&&Gt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Qt=0;Qt<S.length;Qt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Qt]);const Et=a.get(S[Qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,I,Q,0,0,I,Q,ht,o.NEAREST),p===!0&&(Ee.length=0,ie.length=0,Ee.push(o.COLOR_ATTACHMENT0+Qt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ee.push(at),ie.push(at),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ee))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Qt=0;Qt<S.length;Qt++){n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.RENDERBUFFER,Pt.__webglColorRenderbuffer[Qt]);const Et=a.get(S[Qt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Pt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Qt,o.TEXTURE_2D,Et,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const S=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[S])}}}function X(P){return Math.min(s.maxSamples,P.samples)}function ke(P){const S=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(P){const S=c.render.frame;_.get(P)!==S&&(_.set(P,S),P.update())}function be(P,S){const I=P.colorSpace,Q=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==jo&&I!==Pr&&(Ae.getTransfer(I)===Ie?(Q!==Wi||ht!==Vi)&&ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",I)),S}function Wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=K,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=J,this.rebindTextures=Ke,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=At,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function J3(o,t){function n(a,s=Pr){let u;const c=Ae.getTransfer(s);if(a===Vi)return o.UNSIGNED_BYTE;if(a===f_)return o.UNSIGNED_SHORT_4_4_4_4;if(a===h_)return o.UNSIGNED_SHORT_5_5_5_1;if(a===Fy)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===By)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===Py)return o.BYTE;if(a===zy)return o.SHORT;if(a===gu)return o.UNSIGNED_SHORT;if(a===c_)return o.INT;if(a===Ma)return o.UNSIGNED_INT;if(a===aa)return o.FLOAT;if(a===Ea)return o.HALF_FLOAT;if(a===Iy)return o.ALPHA;if(a===Hy)return o.RGB;if(a===Wi)return o.RGBA;if(a===er)return o.DEPTH_COMPONENT;if(a===Ts)return o.DEPTH_STENCIL;if(a===Gy)return o.RED;if(a===d_)return o.RED_INTEGER;if(a===Yo)return o.RG;if(a===p_)return o.RG_INTEGER;if(a===m_)return o.RGBA_INTEGER;if(a===df||a===pf||a===mf||a===_f)if(c===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===df)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_f)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===df)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_f)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===um||a===cm||a===fm||a===hm)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===um)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cm)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fm)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===hm)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===dm||a===pm||a===mm||a===_m||a===gm||a===vm||a===xm)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===dm||a===pm)return c===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===mm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===_m)return u.COMPRESSED_R11_EAC;if(a===gm)return u.COMPRESSED_SIGNED_R11_EAC;if(a===vm)return u.COMPRESSED_RG11_EAC;if(a===xm)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Sm||a===ym||a===Mm||a===Em||a===bm||a===Tm||a===Am||a===Rm||a===Cm||a===wm||a===Dm||a===Um||a===Lm||a===Nm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Sm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ym)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Mm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Em)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===bm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Am)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Rm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Cm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===wm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Dm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Um)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Lm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Nm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Om||a===Pm||a===zm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===Om)return c===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Pm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===zm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Fm||a===Bm||a===Im||a===Hm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===Fm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===Bm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Im)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Hm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===vu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const $3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new eM(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ba({vertexShader:$3,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new Us(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nw extends Ko{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,y=null,T=null;const E=typeof XRWebGLBinding<"u",M=new ew,x={},C=n.getContextAttributes();let U=null,R=null;const L=[],z=[],O=new se;let G=null;const A=new na;A.viewport=new on;const N=new na;N.viewport=new on;const V=[A,N],Z=new fA;let K=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let dt=L[it];return dt===void 0&&(dt=new Ap,L[it]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(it){let dt=L[it];return dt===void 0&&(dt=new Ap,L[it]=dt),dt.getGripSpace()},this.getHand=function(it){let dt=L[it];return dt===void 0&&(dt=new Ap,L[it]=dt),dt.getHandSpace()};function lt(it){const dt=z.indexOf(it.inputSource);if(dt===-1)return;const At=L[dt];At!==void 0&&(At.update(it.inputSource,it.frame,d||c),At.dispatchEvent({type:it.type,data:it.inputSource}))}function F(){s.removeEventListener("select",lt),s.removeEventListener("selectstart",lt),s.removeEventListener("selectend",lt),s.removeEventListener("squeeze",lt),s.removeEventListener("squeezestart",lt),s.removeEventListener("squeezeend",lt),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let it=0;it<L.length;it++){const dt=z[it];dt!==null&&(z[it]=null,L[it].disconnect(dt))}K=null,rt=null,M.reset();for(const it in x)delete x[it];t.setRenderTarget(U),y=null,v=null,g=null,s=null,R=null,Dt.stop(),a.isPresenting=!1,t.setPixelRatio(G),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){u=it,a.isPresenting===!0&&ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,a.isPresenting===!0&&ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(it){d=it},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(s,n)),g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",lt),s.addEventListener("selectstart",lt),s.addEventListener("selectend",lt),s.addEventListener("squeeze",lt),s.addEventListener("squeezestart",lt),s.addEventListener("squeezeend",lt),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),C.xrCompatible!==!0&&await n.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Vt=null,Ht=null;C.depth&&(Ht=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=C.stencil?Ts:er,Vt=C.stencil?vu:Ma);const he={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:u};g=this.getBinding(),v=g.createProjectionLayer(he),s.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),R=new ra(v.textureWidth,v.textureHeight,{format:Wi,type:Vi,depthTexture:new Su(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(s,n,At),s.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ra(y.framebufferWidth,y.framebufferHeight,{format:Wi,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Dt.setContext(s),Dt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(it){for(let dt=0;dt<it.removed.length;dt++){const At=it.removed[dt],Vt=z.indexOf(At);Vt>=0&&(z[Vt]=null,L[Vt].disconnect(At))}for(let dt=0;dt<it.added.length;dt++){const At=it.added[dt];let Vt=z.indexOf(At);if(Vt===-1){for(let he=0;he<L.length;he++)if(he>=z.length){z.push(At),Vt=he;break}else if(z[he]===null){z[he]=At,Vt=he;break}if(Vt===-1)break}const Ht=L[Vt];Ht&&Ht.connect(At)}}const J=new ut,St=new ut;function xt(it,dt,At){J.setFromMatrixPosition(dt.matrixWorld),St.setFromMatrixPosition(At.matrixWorld);const Vt=J.distanceTo(St),Ht=dt.projectionMatrix.elements,he=At.projectionMatrix.elements,Ke=Ht[14]/(Ht[10]-1),pe=Ht[14]/(Ht[10]+1),de=(Ht[9]+1)/Ht[5],Ee=(Ht[9]-1)/Ht[5],ie=(Ht[8]-1)/Ht[0],Qe=(he[8]+1)/he[0],X=Ke*ie,ke=Ke*Qe,xe=Vt/(-ie+Qe),be=xe*-ie;if(dt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(be),it.translateZ(xe),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Ht[10]===-1)it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Wt=Ke+xe,P=pe+xe,S=X-be,I=ke+(Vt-be),Q=de*pe/P*Wt,ht=Ee*pe/P*Wt;it.projectionMatrix.makePerspective(S,I,Q,ht,Wt,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function B(it,dt){dt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(dt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let dt=it.near,At=it.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Z.near=N.near=A.near=dt,Z.far=N.far=A.far=At,(K!==Z.near||rt!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),K=Z.near,rt=Z.far),Z.layers.mask=it.layers.mask|6,A.layers.mask=Z.layers.mask&3,N.layers.mask=Z.layers.mask&5;const Vt=it.parent,Ht=Z.cameras;B(Z,Vt);for(let he=0;he<Ht.length;he++)B(Ht[he],Vt);Ht.length===2?xt(Z,A,N):Z.projectionMatrix.copy(A.projectionMatrix),tt(it,Z,Vt)};function tt(it,dt,At){At===null?it.matrix.copy(dt.matrixWorld):(it.matrix.copy(At.matrixWorld),it.matrix.invert(),it.matrix.multiply(dt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(dt.projectionMatrix),it.projectionMatrixInverse.copy(dt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Gm*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(it){p=it,v!==null&&(v.fixedFoveation=it),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(it){return x[it]};let _t=null;function Mt(it,dt){if(_=dt.getViewerPose(d||c),T=dt,_!==null){const At=_.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let Vt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Vt=!0);for(let pe=0;pe<At.length;pe++){const de=At[pe];let Ee=null;if(y!==null)Ee=y.getViewport(de);else{const Qe=g.getViewSubImage(v,de);Ee=Qe.viewport,pe===0&&(t.setRenderTargetTextures(R,Qe.colorTexture,Qe.depthStencilTexture),t.setRenderTarget(R))}let ie=V[pe];ie===void 0&&(ie=new na,ie.layers.enable(pe),ie.viewport=new on,V[pe]=ie),ie.matrix.fromArray(de.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(de.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(Z.matrix.copy(ie.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Vt===!0&&Z.cameras.push(ie)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){g=a.getBinding();const pe=g.getDepthInformation(At[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,s.renderState)}if(Ht&&Ht.includes("camera-access")&&E){t.state.unbindTexture(),g=a.getBinding();for(let pe=0;pe<At.length;pe++){const de=At[pe].camera;if(de){let Ee=x[de];Ee||(Ee=new eM,x[de]=Ee);const ie=g.getCameraImage(de);Ee.sourceTexture=ie}}}}for(let At=0;At<L.length;At++){const Vt=z[At],Ht=L[At];Vt!==null&&Ht!==void 0&&Ht.update(Vt,dt,d||c)}_t&&_t(it,dt),dt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:dt}),T=null}const Dt=new iM;Dt.setAnimationLoop(Mt),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const vs=new nr,iw=new dn;function aw(o,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function a(M,x){x.color.getRGB(M.fogColor.value,Ky(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,C,U,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),g(M,x)):x.isMeshPhongMaterial?(u(M,x),_(M,x)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&y(M,x,R)):x.isMeshMatcapMaterial?(u(M,x),T(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),E(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&f(M,x)):x.isPointsMaterial?p(M,x,C,U):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ui&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ui&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const C=t.get(x),U=C.envMap,R=C.envMapRotation;U&&(M.envMap.value=U,vs.copy(R),vs.x*=-1,vs.y*=-1,vs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(iw.makeRotationFromEuler(vs)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function f(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,C,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*C,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function y(M,x,C){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ui&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,x){x.matcap&&(M.matcap.value=x.matcap)}function E(M,x){const C=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function rw(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,U){const R=U.program;a.uniformBlockBinding(C,R)}function d(C,U){let R=s[C.id];R===void 0&&(T(C),R=_(C),s[C.id]=R,C.addEventListener("dispose",M));const L=U.program;a.updateUBOMapping(C,L);const z=t.render.frame;u[C.id]!==z&&(v(C),u[C.id]=z)}function _(C){const U=g();C.__bindingPointIndex=U;const R=o.createBuffer(),L=C.__size,z=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,R),o.bufferData(o.UNIFORM_BUFFER,L,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,R),R}function g(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const U=s[C.id],R=C.uniforms,L=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let z=0,O=R.length;z<O;z++){const G=Array.isArray(R[z])?R[z]:[R[z]];for(let A=0,N=G.length;A<N;A++){const V=G[A];if(y(V,z,A,L)===!0){const Z=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let rt=0;for(let lt=0;lt<K.length;lt++){const F=K[lt],H=E(F);typeof F=="number"||typeof F=="boolean"?(V.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,Z+rt,V.__data)):F.isMatrix3?(V.__data[0]=F.elements[0],V.__data[1]=F.elements[1],V.__data[2]=F.elements[2],V.__data[3]=0,V.__data[4]=F.elements[3],V.__data[5]=F.elements[4],V.__data[6]=F.elements[5],V.__data[7]=0,V.__data[8]=F.elements[6],V.__data[9]=F.elements[7],V.__data[10]=F.elements[8],V.__data[11]=0):(F.toArray(V.__data,rt),rt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,U,R,L){const z=C.value,O=U+"_"+R;if(L[O]===void 0)return typeof z=="number"||typeof z=="boolean"?L[O]=z:L[O]=z.clone(),!0;{const G=L[O];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return L[O]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function T(C){const U=C.uniforms;let R=0;const L=16;for(let O=0,G=U.length;O<G;O++){const A=Array.isArray(U[O])?U[O]:[U[O]];for(let N=0,V=A.length;N<V;N++){const Z=A[N],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let rt=0,lt=K.length;rt<lt;rt++){const F=K[rt],H=E(F),J=R%L,St=J%H.boundary,xt=J+St;R+=St,xt!==0&&L-xt<H.storage&&(R+=L-xt),Z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=R,R+=H.storage}}}const z=R%L;return z>0&&(R+=L-z),C.__size=R,C.__cache={},this}function E(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ne("WebGLRenderer: Unsupported uniform value type.",C),U}function M(C){const U=C.target;U.removeEventListener("dispose",M);const R=c.indexOf(U.__bindingPointIndex);c.splice(R,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete u[U.id]}function x(){for(const C in s)o.deleteBuffer(s[C]);c=[],s={},u={}}return{bind:p,update:d,dispose:x}}const sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pa=null;function ow(){return pa===null&&(pa=new $y(sw,16,16,Yo,Ea),pa.name="DFG_LUT",pa.minFilter=yn,pa.magFilter=yn,pa.wrapS=Ti,pa.wrapT=Ti,pa.generateMipmaps=!1,pa.needsUpdate=!0),pa}class lw{constructor(t={}){const{canvas:n=D1(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=Vi}=t;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=c;const E=y,M=new Set([m_,p_,d_]),x=new Set([Vi,Ma,gu,vu,f_,h_]),C=new Uint32Array(4),U=new Int32Array(4);let R=null,L=null;const z=[],O=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let N=!1;this._outputColorSpace=Gi;let V=0,Z=0,K=null,rt=-1,lt=null;const F=new on,H=new on;let J=null;const St=new Ne(0);let xt=0,B=n.width,tt=n.height,_t=1,Mt=null,Dt=null;const it=new on(0,0,B,tt),dt=new on(0,0,B,tt);let At=!1;const Vt=new tM;let Ht=!1,he=!1;const Ke=new dn,pe=new ut,de=new on,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Qe(){return K===null?_t:1}let X=a;function ke(D,Y){return n.getContext(D,Y)}try{const D={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${u_}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Te,!1),X===null){const Y="webgl2";if(X=ke(Y,D),X===null)throw ke(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw we("WebGLRenderer: "+D.message),D}let xe,be,Wt,P,S,I,Q,ht,at,Pt,Rt,Gt,Qt,Et,bt,Bt,zt,wt,le,q,Lt,Tt,Ft,yt;function vt(){xe=new oC(X),xe.init(),Tt=new J3(X,xe),be=new J2(X,xe,t,Tt),Wt=new K3(X,xe),be.reversedDepthBuffer&&v&&Wt.buffers.depth.setReversed(!0),P=new cC(X),S=new P3,I=new Q3(X,xe,Wt,S,be,Tt,P),Q=new tC(A),ht=new sC(A),at=new pA(X),Ft=new K2(X,at),Pt=new lC(X,at,P,Ft),Rt=new hC(X,Pt,at,P),le=new fC(X,be,I),Bt=new $2(S),Gt=new O3(A,Q,ht,xe,be,Ft,Bt),Qt=new aw(A,S),Et=new F3,bt=new k3(xe),wt=new Z2(A,Q,ht,Wt,Rt,T,p),zt=new j3(A,Rt,be),yt=new rw(X,P,be,Wt),q=new Q2(X,xe,P),Lt=new uC(X,xe,P),P.programs=Gt.programs,A.capabilities=be,A.extensions=xe,A.properties=S,A.renderLists=Et,A.shadowMap=zt,A.state=Wt,A.info=P}vt(),E!==Vi&&(G=new pC(E,n.width,n.height,s,u));const Ct=new nw(A,X);this.xr=Ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=xe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=xe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(D){D!==void 0&&(_t=D,this.setSize(B,tt,!1))},this.getSize=function(D){return D.set(B,tt)},this.setSize=function(D,Y,ct=!0){if(Ct.isPresenting){ne("WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,tt=Y,n.width=Math.floor(D*_t),n.height=Math.floor(Y*_t),ct===!0&&(n.style.width=D+"px",n.style.height=Y+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(B*_t,tt*_t).floor()},this.setDrawingBufferSize=function(D,Y,ct){B=D,tt=Y,_t=ct,n.width=Math.floor(D*ct),n.height=Math.floor(Y*ct),this.setViewport(0,0,D,Y)},this.setEffects=function(D){if(E===Vi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let Y=0;Y<D.length;Y++)if(D[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(F)},this.getViewport=function(D){return D.copy(it)},this.setViewport=function(D,Y,ct,st){D.isVector4?it.set(D.x,D.y,D.z,D.w):it.set(D,Y,ct,st),Wt.viewport(F.copy(it).multiplyScalar(_t).round())},this.getScissor=function(D){return D.copy(dt)},this.setScissor=function(D,Y,ct,st){D.isVector4?dt.set(D.x,D.y,D.z,D.w):dt.set(D,Y,ct,st),Wt.scissor(H.copy(dt).multiplyScalar(_t).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(D){Wt.setScissorTest(At=D)},this.setOpaqueSort=function(D){Mt=D},this.setTransparentSort=function(D){Dt=D},this.getClearColor=function(D){return D.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(D=!0,Y=!0,ct=!0){let st=0;if(D){let $=!1;if(K!==null){const Ut=K.texture.format;$=M.has(Ut)}if($){const Ut=K.texture.type,It=x.has(Ut),Nt=wt.getClearColor(),kt=wt.getClearAlpha(),qt=Nt.r,Jt=Nt.g,Yt=Nt.b;It?(C[0]=qt,C[1]=Jt,C[2]=Yt,C[3]=kt,X.clearBufferuiv(X.COLOR,0,C)):(U[0]=qt,U[1]=Jt,U[2]=Yt,U[3]=kt,X.clearBufferiv(X.COLOR,0,U))}else st|=X.COLOR_BUFFER_BIT}Y&&(st|=X.DEPTH_BUFFER_BIT),ct&&(st|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),wt.dispose(),Et.dispose(),bt.dispose(),S.dispose(),Q.dispose(),ht.dispose(),Rt.dispose(),Ft.dispose(),yt.dispose(),Gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Ps),Ct.removeEventListener("sessionend",tl),ua.stop()};function ee(D){D.preventDefault(),Ox("WebGLRenderer: Context Lost."),N=!0}function Pe(){Ox("WebGLRenderer: Context Restored."),N=!1;const D=P.autoReset,Y=zt.enabled,ct=zt.autoUpdate,st=zt.needsUpdate,$=zt.type;vt(),P.autoReset=D,zt.enabled=Y,zt.autoUpdate=ct,zt.needsUpdate=st,zt.type=$}function Te(D){we("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Vn(D){const Y=D.target;Y.removeEventListener("dispose",Vn),Yi(Y)}function Yi(D){Ru(D),S.remove(D)}function Ru(D){const Y=S.get(D).programs;Y!==void 0&&(Y.forEach(function(ct){Gt.releaseProgram(ct)}),D.isShaderMaterial&&Gt.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,ct,st,$,Ut){Y===null&&(Y=Ee);const It=$.isMesh&&$.matrixWorld.determinant()<0,Nt=Yr(D,Y,ct,st,$);Wt.setMaterial(st,It);let kt=ct.index,qt=1;if(st.wireframe===!0){if(kt=Pt.getWireframeAttribute(ct),kt===void 0)return;qt=2}const Jt=ct.drawRange,Yt=ct.attributes.position;let $t=Jt.start*qt,De=(Jt.start+Jt.count)*qt;Ut!==null&&($t=Math.max($t,Ut.start*qt),De=Math.min(De,(Ut.start+Ut.count)*qt)),kt!==null?($t=Math.max($t,0),De=Math.min(De,kt.count)):Yt!=null&&($t=Math.max($t,0),De=Math.min(De,Yt.count));const Je=De-$t;if(Je<0||Je===1/0)return;Ft.setup($,st,Nt,ct,kt);let Ye,Oe=q;if(kt!==null&&(Ye=at.get(kt),Oe=Lt,Oe.setIndex(Ye)),$.isMesh)st.wireframe===!0?(Wt.setLineWidth(st.wireframeLinewidth*Qe()),Oe.setMode(X.LINES)):Oe.setMode(X.TRIANGLES);else if($.isLine){let Zt=st.linewidth;Zt===void 0&&(Zt=1),Wt.setLineWidth(Zt*Qe()),$.isLineSegments?Oe.setMode(X.LINES):$.isLineLoop?Oe.setMode(X.LINE_LOOP):Oe.setMode(X.LINE_STRIP)}else $.isPoints?Oe.setMode(X.POINTS):$.isSprite&&Oe.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)xu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Zt=$._multiDrawStarts,Ue=$._multiDrawCounts,ae=$._multiDrawCount,Un=kt?at.get(kt).bytesPerElement:1,Ta=S.get(st).currentProgram.getUniforms();for(let Ln=0;Ln<ae;Ln++)Ta.setValue(X,"_gl_DrawID",Ln),Oe.render(Zt[Ln]/Un,Ue[Ln])}else if($.isInstancedMesh)Oe.renderInstances($t,Je,$.count);else if(ct.isInstancedBufferGeometry){const Zt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Ue=Math.min(ct.instanceCount,Zt);Oe.renderInstances($t,Je,Ue)}else Oe.render($t,Je)};function Jo(D,Y,ct){D.transparent===!0&&D.side===Ka&&D.forceSinglePass===!1?(D.side=ui,D.needsUpdate=!0,Fs(D,Y,ct),D.side=Wr,D.needsUpdate=!0,Fs(D,Y,ct),D.side=Ka):Fs(D,Y,ct)}this.compile=function(D,Y,ct=null){ct===null&&(ct=D),L=bt.get(ct),L.init(Y),O.push(L),ct.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),D!==ct&&D.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(L.pushLight($),$.castShadow&&L.pushShadow($))}),L.setupLights();const st=new Set;return D.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Nt=Ut[It];Jo(Nt,ct,$),st.add(Nt)}else Jo(Ut,ct,$),st.add(Ut)}),L=O.pop(),st},this.compileAsync=function(D,Y,ct=null){const st=this.compile(D,Y,ct);return new Promise($=>{function Ut(){if(st.forEach(function(It){S.get(It).currentProgram.isReady()&&st.delete(It)}),st.size===0){$(D);return}setTimeout(Ut,10)}xe.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Os=null;function $o(D){Os&&Os(D)}function Ps(){ua.stop()}function tl(){ua.start()}const ua=new iM;ua.setAnimationLoop($o),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(D){Os=D,Ct.setAnimationLoop(D),D===null?ua.stop():ua.start()},Ct.addEventListener("sessionstart",Ps),Ct.addEventListener("sessionend",tl),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ct=Ct.enabled===!0&&Ct.isPresenting===!0,st=G!==null&&(K===null||ct)&&G.begin(A,K);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Y),Y=Ct.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,Y,K),L=bt.get(D,O.length),L.init(Y),O.push(L),Ke.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Vt.setFromProjectionMatrix(Ke,xa,Y.reversedDepth),he=this.localClippingEnabled,Ht=Bt.init(this.clippingPlanes,he),R=Et.get(D,z.length),R.init(),z.push(R),Ct.enabled===!0&&Ct.isPresenting===!0){const It=A.xr.getDepthSensingMesh();It!==null&&wi(It,Y,-1/0,A.sortObjects)}wi(D,Y,0,A.sortObjects),R.finish(),A.sortObjects===!0&&R.sort(Mt,Dt),ie=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ie&&wt.addToRenderList(R,D),this.info.render.frame++,Ht===!0&&Bt.beginShadows();const $=L.state.shadowsArray;if(zt.render($,D,Y),Ht===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&G.hasRenderPass())===!1){const It=R.opaque,Nt=R.transmissive;if(L.setupLights(),Y.isArrayCamera){const kt=Y.cameras;if(Nt.length>0)for(let qt=0,Jt=kt.length;qt<Jt;qt++){const Yt=kt[qt];Dn(It,Nt,D,Yt)}ie&&wt.render(D);for(let qt=0,Jt=kt.length;qt<Jt;qt++){const Yt=kt[qt];pn(R,D,Yt,Yt.viewport)}}else Nt.length>0&&Dn(It,Nt,D,Y),ie&&wt.render(D),pn(R,D,Y)}K!==null&&Z===0&&(I.updateMultisampleRenderTarget(K),I.updateRenderTargetMipmap(K)),st&&G.end(A),D.isScene===!0&&D.onAfterRender(A,D,Y),Ft.resetDefaultState(),rt=-1,lt=null,O.pop(),O.length>0?(L=O[O.length-1],Ht===!0&&Bt.setGlobalState(A.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?R=z[z.length-1]:R=null};function wi(D,Y,ct,st){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)L.pushLight(D),D.castShadow&&L.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Vt.intersectsSprite(D)){st&&de.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ke);const It=Rt.update(D),Nt=D.material;Nt.visible&&R.push(D,It,Nt,ct,de.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Vt.intersectsObject(D))){const It=Rt.update(D),Nt=D.material;if(st&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),de.copy(D.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(D.matrixWorld).applyMatrix4(Ke)),Array.isArray(Nt)){const kt=It.groups;for(let qt=0,Jt=kt.length;qt<Jt;qt++){const Yt=kt[qt],$t=Nt[Yt.materialIndex];$t&&$t.visible&&R.push(D,It,$t,ct,de.z,Yt)}}else Nt.visible&&R.push(D,It,Nt,ct,de.z,null)}}const Ut=D.children;for(let It=0,Nt=Ut.length;It<Nt;It++)wi(Ut[It],Y,ct,st)}function pn(D,Y,ct,st){const{opaque:$,transmissive:Ut,transparent:It}=D;L.setupLightsView(ct),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,ct),st&&Wt.viewport(F.copy(st)),$.length>0&&ji($,Y,ct),Ut.length>0&&ji(Ut,Y,ct),It.length>0&&ji(It,Y,ct),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Dn(D,Y,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[st.id]===void 0){const $t=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[st.id]=new ra(1,1,{generateMipmaps:!0,type:$t?Ea:Vi,minFilter:bs,samples:be.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Ut=L.state.transmissionRenderTarget[st.id],It=st.viewport||F;Ut.setSize(It.z*A.transmissionResolutionScale,It.w*A.transmissionResolutionScale);const Nt=A.getRenderTarget(),kt=A.getActiveCubeFace(),qt=A.getActiveMipmapLevel();A.setRenderTarget(Ut),A.getClearColor(St),xt=A.getClearAlpha(),xt<1&&A.setClearColor(16777215,.5),A.clear(),ie&&wt.render(ct);const Jt=A.toneMapping;A.toneMapping=Sa;const Yt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),L.setupLightsView(st),Ht===!0&&Bt.setGlobalState(A.clippingPlanes,st),ji(D,ct,st),I.updateMultisampleRenderTarget(Ut),I.updateRenderTargetMipmap(Ut),xe.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Je=Y.length;De<Je;De++){const Ye=Y[De],{object:Oe,geometry:Zt,material:Ue,group:ae}=Ye;if(Ue.side===Ka&&Oe.layers.test(st.layers)){const Un=Ue.side;Ue.side=ui,Ue.needsUpdate=!0,zs(Oe,ct,st,Zt,Ue,ae),Ue.side=Un,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(I.updateMultisampleRenderTarget(Ut),I.updateRenderTargetMipmap(Ut))}A.setRenderTarget(Nt,kt,qt),A.setClearColor(St,xt),Yt!==void 0&&(st.viewport=Yt),A.toneMapping=Jt}function ji(D,Y,ct){const st=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Ut=D.length;$<Ut;$++){const It=D[$],{object:Nt,geometry:kt,group:qt}=It;let Jt=It.material;Jt.allowOverride===!0&&st!==null&&(Jt=st),Nt.layers.test(ct.layers)&&zs(Nt,Y,ct,kt,Jt,qt)}}function zs(D,Y,ct,st,$,Ut){D.onBeforeRender(A,Y,ct,st,$,Ut),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(A,Y,ct,st,D,Ut),$.transparent===!0&&$.side===Ka&&$.forceSinglePass===!1?($.side=ui,$.needsUpdate=!0,A.renderBufferDirect(ct,Y,st,$,D,Ut),$.side=Wr,$.needsUpdate=!0,A.renderBufferDirect(ct,Y,st,$,D,Ut),$.side=Ka):A.renderBufferDirect(ct,Y,st,$,D,Ut),D.onAfterRender(A,Y,ct,st,$,Ut)}function Fs(D,Y,ct){Y.isScene!==!0&&(Y=Ee);const st=S.get(D),$=L.state.lights,Ut=L.state.shadowsArray,It=$.state.version,Nt=Gt.getParameters(D,$.state,Ut,Y,ct),kt=Gt.getProgramCacheKey(Nt);let qt=st.programs;st.environment=D.isMeshStandardMaterial?Y.environment:null,st.fog=Y.fog,st.envMap=(D.isMeshStandardMaterial?ht:Q).get(D.envMap||st.environment),st.envMapRotation=st.environment!==null&&D.envMap===null?Y.environmentRotation:D.envMapRotation,qt===void 0&&(D.addEventListener("dispose",Vn),qt=new Map,st.programs=qt);let Jt=qt.get(kt);if(Jt!==void 0){if(st.currentProgram===Jt&&st.lightsStateVersion===It)return el(D,Nt),Jt}else Nt.uniforms=Gt.getUniforms(D),D.onBeforeCompile(Nt,A),Jt=Gt.acquireProgram(Nt,kt),qt.set(kt,Jt),st.uniforms=Nt.uniforms;const Yt=st.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Yt.clippingPlanes=Bt.uniform),el(D,Nt),st.needsLights=ir(D),st.lightsStateVersion=It,st.needsLights&&(Yt.ambientLightColor.value=$.state.ambient,Yt.lightProbe.value=$.state.probe,Yt.directionalLights.value=$.state.directional,Yt.directionalLightShadows.value=$.state.directionalShadow,Yt.spotLights.value=$.state.spot,Yt.spotLightShadows.value=$.state.spotShadow,Yt.rectAreaLights.value=$.state.rectArea,Yt.ltc_1.value=$.state.rectAreaLTC1,Yt.ltc_2.value=$.state.rectAreaLTC2,Yt.pointLights.value=$.state.point,Yt.pointLightShadows.value=$.state.pointShadow,Yt.hemisphereLights.value=$.state.hemi,Yt.directionalShadowMap.value=$.state.directionalShadowMap,Yt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Yt.spotShadowMap.value=$.state.spotShadowMap,Yt.spotLightMatrix.value=$.state.spotLightMatrix,Yt.spotLightMap.value=$.state.spotLightMap,Yt.pointShadowMap.value=$.state.pointShadowMap,Yt.pointShadowMatrix.value=$.state.pointShadowMatrix),st.currentProgram=Jt,st.uniformsList=null,Jt}function Cu(D){if(D.uniformsList===null){const Y=D.currentProgram.getUniforms();D.uniformsList=gf.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function el(D,Y){const ct=S.get(D);ct.outputColorSpace=Y.outputColorSpace,ct.batching=Y.batching,ct.batchingColor=Y.batchingColor,ct.instancing=Y.instancing,ct.instancingColor=Y.instancingColor,ct.instancingMorph=Y.instancingMorph,ct.skinning=Y.skinning,ct.morphTargets=Y.morphTargets,ct.morphNormals=Y.morphNormals,ct.morphColors=Y.morphColors,ct.morphTargetsCount=Y.morphTargetsCount,ct.numClippingPlanes=Y.numClippingPlanes,ct.numIntersection=Y.numClipIntersection,ct.vertexAlphas=Y.vertexAlphas,ct.vertexTangents=Y.vertexTangents,ct.toneMapping=Y.toneMapping}function Yr(D,Y,ct,st,$){Y.isScene!==!0&&(Y=Ee),I.resetTextureUnits();const Ut=Y.fog,It=st.isMeshStandardMaterial?Y.environment:null,Nt=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:jo,kt=(st.isMeshStandardMaterial?ht:Q).get(st.envMap||It),qt=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,Jt=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Yt=!!ct.morphAttributes.position,$t=!!ct.morphAttributes.normal,De=!!ct.morphAttributes.color;let Je=Sa;st.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Je=A.toneMapping);const Ye=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Oe=Ye!==void 0?Ye.length:0,Zt=S.get(st),Ue=L.state.lights;if(Ht===!0&&(he===!0||D!==lt)){const On=D===lt&&st.id===rt;Bt.setState(st,D,On)}let ae=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Nt||$.isBatchedMesh&&Zt.batching===!1||!$.isBatchedMesh&&Zt.batching===!0||$.isBatchedMesh&&Zt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Zt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Zt.instancing===!1||!$.isInstancedMesh&&Zt.instancing===!0||$.isSkinnedMesh&&Zt.skinning===!1||!$.isSkinnedMesh&&Zt.skinning===!0||$.isInstancedMesh&&Zt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Zt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Zt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Zt.instancingMorph===!1&&$.morphTexture!==null||Zt.envMap!==kt||st.fog===!0&&Zt.fog!==Ut||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Bt.numPlanes||Zt.numIntersection!==Bt.numIntersection)||Zt.vertexAlphas!==qt||Zt.vertexTangents!==Jt||Zt.morphTargets!==Yt||Zt.morphNormals!==$t||Zt.morphColors!==De||Zt.toneMapping!==Je||Zt.morphTargetsCount!==Oe)&&(ae=!0):(ae=!0,Zt.__version=st.version);let Un=Zt.currentProgram;ae===!0&&(Un=Fs(st,Y,$));let Ta=!1,Ln=!1,Di=!1;const ze=Un.getUniforms(),Nn=Zt.uniforms;if(Wt.useProgram(Un.program)&&(Ta=!0,Ln=!0,Di=!0),st.id!==rt&&(rt=st.id,Ln=!0),Ta||lt!==D){Wt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ze.setValue(X,"projectionMatrix",D.projectionMatrix),ze.setValue(X,"viewMatrix",D.matrixWorldInverse);const Pn=ze.map.cameraPosition;Pn!==void 0&&Pn.setValue(X,pe.setFromMatrixPosition(D.matrixWorld)),be.logarithmicDepthBuffer&&ze.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),lt!==D&&(lt=D,Ln=!0,Di=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(X,"directionalShadowMap",Ue.state.directionalShadowMap,I),Ue.state.spotShadowMap.length>0&&ze.setValue(X,"spotShadowMap",Ue.state.spotShadowMap,I),Ue.state.pointShadowMap.length>0&&ze.setValue(X,"pointShadowMap",Ue.state.pointShadowMap,I)),$.isSkinnedMesh){ze.setOptional(X,$,"bindMatrix"),ze.setOptional(X,$,"bindMatrixInverse");const On=$.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),ze.setValue(X,"boneTexture",On.boneTexture,I))}$.isBatchedMesh&&(ze.setOptional(X,$,"batchingTexture"),ze.setValue(X,"batchingTexture",$._matricesTexture,I),ze.setOptional(X,$,"batchingIdTexture"),ze.setValue(X,"batchingIdTexture",$._indirectTexture,I),ze.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&ze.setValue(X,"batchingColorTexture",$._colorsTexture,I));const Mn=ct.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&le.update($,ct,Un),(Ln||Zt.receiveShadow!==$.receiveShadow)&&(Zt.receiveShadow=$.receiveShadow,ze.setValue(X,"receiveShadow",$.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Nn.envMap.value=kt,Nn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Y.environment!==null&&(Nn.envMapIntensity.value=Y.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=ow()),Ln&&(ze.setValue(X,"toneMappingExposure",A.toneMappingExposure),Zt.needsLights&&nl(Nn,Di),Ut&&st.fog===!0&&Qt.refreshFogUniforms(Nn,Ut),Qt.refreshMaterialUniforms(Nn,st,_t,tt,L.state.transmissionRenderTarget[D.id]),gf.upload(X,Cu(Zt),Nn,I)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(gf.upload(X,Cu(Zt),Nn,I),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(X,"center",$.center),ze.setValue(X,"modelViewMatrix",$.modelViewMatrix),ze.setValue(X,"normalMatrix",$.normalMatrix),ze.setValue(X,"modelMatrix",$.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const On=st.uniformsGroups;for(let Pn=0,Bs=On.length;Pn<Bs;Pn++){const Zi=On[Pn];yt.update(Zi,Un),yt.bind(Zi,Un)}}return Un}function nl(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function ir(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(D,Y,ct){const st=S.get(D);st.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),S.get(D.texture).__webglTexture=Y,S.get(D.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,Y){const ct=S.get(D);ct.__webglFramebuffer=Y,ct.__useDefaultFramebuffer=Y===void 0};const ar=X.createFramebuffer();this.setRenderTarget=function(D,Y=0,ct=0){K=D,V=Y,Z=ct;let st=null,$=!1,Ut=!1;if(D){const Nt=S.get(D);if(Nt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(X.FRAMEBUFFER,Nt.__webglFramebuffer),F.copy(D.viewport),H.copy(D.scissor),J=D.scissorTest,Wt.viewport(F),Wt.scissor(H),Wt.setScissorTest(J),rt=-1;return}else if(Nt.__webglFramebuffer===void 0)I.setupRenderTarget(D);else if(Nt.__hasExternalTextures)I.rebindTextures(D,S.get(D.texture).__webglTexture,S.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Jt=D.depthTexture;if(Nt.__boundDepthTexture!==Jt){if(Jt!==null&&S.has(Jt)&&(D.width!==Jt.image.width||D.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(D)}}const kt=D.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Ut=!0);const qt=S.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qt[Y])?st=qt[Y][ct]:st=qt[Y],$=!0):D.samples>0&&I.useMultisampledRTT(D)===!1?st=S.get(D).__webglMultisampledFramebuffer:Array.isArray(qt)?st=qt[ct]:st=qt,F.copy(D.viewport),H.copy(D.scissor),J=D.scissorTest}else F.copy(it).multiplyScalar(_t).floor(),H.copy(dt).multiplyScalar(_t).floor(),J=At;if(ct!==0&&(st=ar),Wt.bindFramebuffer(X.FRAMEBUFFER,st)&&Wt.drawBuffers(D,st),Wt.viewport(F),Wt.scissor(H),Wt.setScissorTest(J),$){const Nt=S.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Nt.__webglTexture,ct)}else if(Ut){const Nt=Y;for(let kt=0;kt<D.textures.length;kt++){const qt=S.get(D.textures[kt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+kt,qt.__webglTexture,ct,Nt)}}else if(D!==null&&ct!==0){const Nt=S.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nt.__webglTexture,ct)}rt=-1},this.readRenderTargetPixels=function(D,Y,ct,st,$,Ut,It,Nt=0){if(!(D&&D.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt){Wt.bindFramebuffer(X.FRAMEBUFFER,kt);try{const qt=D.textures[Nt],Jt=qt.format,Yt=qt.type;if(!be.textureFormatReadable(Jt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable(Yt)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-st&&ct>=0&&ct<=D.height-$&&(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(Y,ct,st,$,Tt.convert(Jt),Tt.convert(Yt),Ut))}finally{const qt=K!==null?S.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(X.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(D,Y,ct,st,$,Ut,It,Nt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=S.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&It!==void 0&&(kt=kt[It]),kt)if(Y>=0&&Y<=D.width-st&&ct>=0&&ct<=D.height-$){Wt.bindFramebuffer(X.FRAMEBUFFER,kt);const qt=D.textures[Nt],Jt=qt.format,Yt=qt.type;if(!be.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.bufferData(X.PIXEL_PACK_BUFFER,Ut.byteLength,X.STREAM_READ),D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Nt),X.readPixels(Y,ct,st,$,Tt.convert(Jt),Tt.convert(Yt),0);const De=K!==null?S.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(X.FRAMEBUFFER,De);const Je=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await U1(X,Je,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,$t),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ut),X.deleteBuffer($t),X.deleteSync(Je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,Y=null,ct=0){const st=Math.pow(2,-ct),$=Math.floor(D.image.width*st),Ut=Math.floor(D.image.height*st),It=Y!==null?Y.x:0,Nt=Y!==null?Y.y:0;I.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,ct,0,0,It,Nt,$,Ut),Wt.unbindTexture()};const jr=X.createFramebuffer(),rr=X.createFramebuffer();this.copyTextureToTexture=function(D,Y,ct=null,st=null,$=0,Ut=null){Ut===null&&($!==0?(xu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=$,$=0):Ut=0);let It,Nt,kt,qt,Jt,Yt,$t,De,Je;const Ye=D.isCompressedTexture?D.mipmaps[Ut]:D.image;if(ct!==null)It=ct.max.x-ct.min.x,Nt=ct.max.y-ct.min.y,kt=ct.isBox3?ct.max.z-ct.min.z:1,qt=ct.min.x,Jt=ct.min.y,Yt=ct.isBox3?ct.min.z:0;else{const Mn=Math.pow(2,-$);It=Math.floor(Ye.width*Mn),Nt=Math.floor(Ye.height*Mn),D.isDataArrayTexture?kt=Ye.depth:D.isData3DTexture?kt=Math.floor(Ye.depth*Mn):kt=1,qt=0,Jt=0,Yt=0}st!==null?($t=st.x,De=st.y,Je=st.z):($t=0,De=0,Je=0);const Oe=Tt.convert(Y.format),Zt=Tt.convert(Y.type);let Ue;Y.isData3DTexture?(I.setTexture3D(Y,0),Ue=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Ue=X.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Ue=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);const ae=X.getParameter(X.UNPACK_ROW_LENGTH),Un=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ta=X.getParameter(X.UNPACK_SKIP_PIXELS),Ln=X.getParameter(X.UNPACK_SKIP_ROWS),Di=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ye.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ye.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,qt),X.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Yt);const ze=D.isDataArrayTexture||D.isData3DTexture,Nn=Y.isDataArrayTexture||Y.isData3DTexture;if(D.isDepthTexture){const Mn=S.get(D),On=S.get(Y),Pn=S.get(Mn.__renderTarget),Bs=S.get(On.__renderTarget);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Zi=0;Zi<kt;Zi++)ze&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,S.get(D).__webglTexture,$,Yt+Zi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,S.get(Y).__webglTexture,Ut,Je+Zi)),X.blitFramebuffer(qt,Jt,It,Nt,$t,De,It,Nt,X.DEPTH_BUFFER_BIT,X.NEAREST);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if($!==0||D.isRenderTargetTexture||S.has(D)){const Mn=S.get(D),On=S.get(Y);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,jr),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,rr);for(let Pn=0;Pn<kt;Pn++)ze?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Mn.__webglTexture,$,Yt+Pn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Mn.__webglTexture,$),Nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,On.__webglTexture,Ut,Je+Pn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,On.__webglTexture,Ut),$!==0?X.blitFramebuffer(qt,Jt,It,Nt,$t,De,It,Nt,X.COLOR_BUFFER_BIT,X.NEAREST):Nn?X.copyTexSubImage3D(Ue,Ut,$t,De,Je+Pn,qt,Jt,It,Nt):X.copyTexSubImage2D(Ue,Ut,$t,De,qt,Jt,It,Nt);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Nn?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(Ue,Ut,$t,De,Je,It,Nt,kt,Oe,Zt,Ye.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(Ue,Ut,$t,De,Je,It,Nt,kt,Oe,Ye.data):X.texSubImage3D(Ue,Ut,$t,De,Je,It,Nt,kt,Oe,Zt,Ye):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ut,$t,De,It,Nt,Oe,Zt,Ye.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ut,$t,De,Ye.width,Ye.height,Oe,Ye.data):X.texSubImage2D(X.TEXTURE_2D,Ut,$t,De,It,Nt,Oe,Zt,Ye);X.pixelStorei(X.UNPACK_ROW_LENGTH,ae),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Un),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ta),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ln),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Di),Ut===0&&Y.generateMipmaps&&X.generateMipmap(Ue),Wt.unbindTexture()},this.initRenderTarget=function(D){S.get(D).__webglFramebuffer===void 0&&I.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Wt.unbindTexture()},this.resetState=function(){V=0,Z=0,K=null,Wt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}function uw({mouseForce:o=20,cursorSize:t=100,isViscous:n=!1,viscous:a=30,iterationsViscous:s=32,iterationsPoisson:u=32,dt:c=.014,BFECC:f=!0,resolution:p=.5,isBounce:d=!1,colors:_=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:v="",autoDemo:y=!0,autoSpeed:T=.5,autoIntensity:E=2.2,takeoverDuration:M=.25,autoResumeDelay:x=1e3,autoRampDuration:C=.6}){const U=Cn.useRef(null),R=Cn.useRef(null),L=Cn.useRef(null),z=Cn.useRef(null),O=Cn.useRef(null),G=Cn.useRef(!0),A=Cn.useRef(null);return Cn.useEffect(()=>{if(!U.current)return;function N(P){let S;Array.isArray(P)&&P.length>0?P.length===1?S=[P[0],P[0]]:S=P:S=["#ffffff","#ffffff"];const I=S.length,Q=new Uint8Array(I*4);for(let at=0;at<I;at++){const Pt=new Ne(S[at]);Q[at*4+0]=Math.round(Pt.r*255),Q[at*4+1]=Math.round(Pt.g*255),Q[at*4+2]=Math.round(Pt.b*255),Q[at*4+3]=255}const ht=new $y(Q,I,1,Wi);return ht.magFilter=yn,ht.minFilter=yn,ht.wrapS=Ti,ht.wrapT=Ti,ht.generateMipmaps=!1,ht.needsUpdate=!0,ht}const V=N(_),Z=new on(0,0,0,0);class K{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(S){this.container=S,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new lw({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Ne(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new hA,this.clock.start()}resize(){if(!this.container)return;const S=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(S.width)),this.height=Math.max(1,Math.floor(S.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const rt=new K;class lt{constructor(){this.mouseMoved=!1,this.coords=new se,this.coords_old=new se,this.diff=new se,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new se,this.takeoverTo=new se,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(S){this.container=S,this.docTarget=S.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(S,I){if(!this.container)return!1;const Q=this.container.getBoundingClientRect();return Q.width===0||Q.height===0?!1:S>=Q.left&&S<=Q.right&&I>=Q.top&&I<=Q.bottom}updateHoverState(S,I){return this.isHoverInside=this.isPointInside(S,I),this.isHoverInside}setCoords(S,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Q=this.container.getBoundingClientRect();if(Q.width===0||Q.height===0)return;const ht=(S-Q.left)/Q.width,at=(I-Q.top)/Q.height;this.coords.set(ht*2-1,-(at*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(S,I){this.coords.set(S,I),this.mouseMoved=!0}onDocumentMouseMove(S){if(this.updateHoverState(S.clientX,S.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const Q=(S.clientX-I.left)/I.width,ht=(S.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Q*2-1,-(ht*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(S.clientX,S.clientY),this.hasUserControl=!0}}onDocumentTouchStart(S){if(S.touches.length!==1)return;const I=S.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(S){if(S.touches.length!==1)return;const I=S.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const S=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(S>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=S*S*(3-2*S);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const F=new lt;class H{constructor(S,I,Q){this.mouse=S,this.manager=I,this.enabled=Q.enabled,this.speed=Q.speed,this.resumeDelay=Q.resumeDelay||3e3,this.rampDurationMs=(Q.rampDuration||0)*1e3,this.active=!1,this.current=new se(0,0),this.target=new se,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new se,this.pickNewTarget()}pickNewTarget(){const S=Math.random;this.target.set((S()*2-1)*(1-this.margin),(S()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const S=performance.now();if(S-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=S,this.activationTime=S),!this.active)return;this.mouse.isAutoActive=!0;let Q=(S-this.lastTime)/1e3;this.lastTime=S,Q>.2&&(Q=.016);const ht=this._tmpDir.subVectors(this.target,this.current),at=ht.length();if(at<.01){this.pickNewTarget();return}ht.normalize();let Pt=1;if(this.rampDurationMs>0){const Qt=Math.min(1,(S-this.activationTime)/this.rampDurationMs);Pt=Qt*Qt*(3-2*Qt)}const Rt=this.speed*Q*Pt,Gt=Math.min(Rt,at);this.current.addScaledVector(ht,Gt),this.mouse.setNormalized(this.current.x,this.current.y)}}const J=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,St=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,xt=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,B=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,tt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,_t=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Mt=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Dt=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,it=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,dt=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class At{constructor(S){this.props=S||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Qx,this.camera=new Df,this.uniforms&&(this.material=new ru(this.props.material),this.geometry=new Us(2,2),this.plane=new qi(this.geometry,this.material),this.scene.add(this.plane))}update(){rt.renderer.setRenderTarget(this.props.output||null),rt.renderer.render(this.scene,this.camera),rt.renderer.setRenderTarget(null)}}class Vt extends At{constructor(S){super({material:{vertexShader:J,fragmentShader:B,uniforms:{boundarySpace:{value:S.cellScale},px:{value:S.cellScale},fboSize:{value:S.fboSize},velocity:{value:S.src.texture},dt:{value:S.dt},isBFECC:{value:!0}}},output:S.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const S=new la,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);S.setAttribute("position",new sa(I,3));const Q=new ru({vertexShader:St,fragmentShader:B,uniforms:this.uniforms});this.line=new oA(S,Q),this.scene.add(this.line)}update({dt:S,isBounce:I,BFECC:Q}){this.uniforms.dt.value=S,this.line.visible=I,this.uniforms.isBFECC.value=Q,super.update()}}class Ht extends At{constructor(S){super({output:S.dst}),this.init(S)}init(S){super.init();const I=new Us(1,1),Q=new ru({vertexShader:xt,fragmentShader:Mt,blending:Zp,depthWrite:!1,uniforms:{px:{value:S.cellScale},force:{value:new se(0,0)},center:{value:new se(0,0)},scale:{value:new se(S.cursor_size,S.cursor_size)}}});this.mouse=new qi(I,Q),this.scene.add(this.mouse)}update(S){const I=F.diff.x/2*S.mouse_force,Q=F.diff.y/2*S.mouse_force,ht=S.cursor_size*S.cellScale.x,at=S.cursor_size*S.cellScale.y,Pt=Math.min(Math.max(F.coords.x,-1+ht+S.cellScale.x*2),1-ht-S.cellScale.x*2),Rt=Math.min(Math.max(F.coords.y,-1+at+S.cellScale.y*2),1-at-S.cellScale.y*2),Gt=this.mouse.material.uniforms;Gt.force.value.set(I,Q),Gt.center.value.set(Pt,Rt),Gt.scale.value.set(S.cursor_size,S.cursor_size),super.update()}}class he extends At{constructor(S){super({material:{vertexShader:J,fragmentShader:dt,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},velocity_new:{value:S.dst_.texture},v:{value:S.viscous},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({viscous:S,iterations:I,dt:Q}){let ht,at;this.uniforms.v.value=S;for(let Pt=0;Pt<I;Pt++)Pt%2===0?(ht=this.props.output0,at=this.props.output1):(ht=this.props.output1,at=this.props.output0),this.uniforms.velocity_new.value=ht.texture,this.props.output=at,this.uniforms.dt.value=Q,super.update();return at}}class Ke extends At{constructor(S){super({material:{vertexShader:J,fragmentShader:_t,uniforms:{boundarySpace:{value:S.boundarySpace},velocity:{value:S.src.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S}){this.uniforms.velocity.value=S.texture,super.update()}}class pe extends At{constructor(S){super({material:{vertexShader:J,fragmentShader:Dt,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.dst_.texture},divergence:{value:S.src.texture},px:{value:S.cellScale}}},output:S.dst,output0:S.dst_,output1:S.dst}),this.init()}update({iterations:S}){let I,Q;for(let ht=0;ht<S;ht++)ht%2===0?(I=this.props.output0,Q=this.props.output1):(I=this.props.output1,Q=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=Q,super.update();return Q}}class de extends At{constructor(S){super({material:{vertexShader:J,fragmentShader:it,uniforms:{boundarySpace:{value:S.boundarySpace},pressure:{value:S.src_p.texture},velocity:{value:S.src_v.texture},px:{value:S.cellScale},dt:{value:S.dt}}},output:S.dst}),this.init()}update({vel:S,pressure:I}){this.uniforms.velocity.value=S.texture,this.uniforms.pressure.value=I.texture,super.update()}}class Ee{constructor(S){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...S},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new se,this.cellScale=new se,this.boundarySpace=new se,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ea:aa}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:yn,magFilter:yn,wrapS:Ti,wrapT:Ti};for(let Q in this.fbos)this.fbos[Q]=new ra(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new Vt({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new Ht({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new he({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Ke({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new pe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new de({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const S=Math.max(1,Math.round(this.options.resolution*rt.width)),I=Math.max(1,Math.round(this.options.resolution*rt.height)),Q=1/S,ht=1/I;this.cellScale.set(Q,ht),this.fboSize.set(S,I)}resize(){this.calcSize();for(let S in this.fbos)this.fbos[S].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let S=this.fbos.vel_1;this.options.isViscous&&(S=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:S});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:S,pressure:I})}}class ie{constructor(){this.init()}init(){this.simulation=new Ee,this.scene=new Qx,this.camera=new Df,this.output=new qi(new Us(2,2),new ru({vertexShader:J,fragmentShader:tt,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new se},palette:{value:V},bgColor:{value:Z}}})),this.scene.add(this.output)}addScene(S){this.scene.add(S)}resize(){this.simulation.resize()}render(){rt.renderer.setRenderTarget(null),rt.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Qe{constructor(S){this.props=S,rt.init(S.$wrapper),F.init(S.$wrapper),F.autoIntensity=S.autoIntensity,F.takeoverDuration=S.takeoverDuration,this.lastUserInteraction=performance.now(),F.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new H(F,this,{enabled:S.autoDemo,speed:S.autoSpeed,resumeDelay:S.autoResumeDelay,rampDuration:S.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():G.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(rt.renderer.domElement),this.output=new ie}resize(){rt.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),F.update(),rt.update(),this.output.update()}loop(){this.running&&(this.render(),z.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),F.dispose(),rt.renderer){const S=rt.renderer.domElement;S&&S.parentNode&&S.parentNode.removeChild(S),rt.renderer.dispose()}}catch{}}}const X=U.current;X.style.position=X.style.position||"relative",X.style.overflow=X.style.overflow||"hidden";const ke=new Qe({$wrapper:X,autoDemo:y,autoSpeed:T,autoIntensity:E,takeoverDuration:M,autoResumeDelay:x,autoRampDuration:C});R.current=ke,(()=>{if(!R.current)return;const P=R.current.output?.simulation;if(!P)return;const S=P.options.resolution;Object.assign(P.options,{mouse_force:o,cursor_size:t,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:u,dt:c,BFECC:f,resolution:p,isBounce:d}),p!==S&&P.resize()})(),ke.start();const be=new IntersectionObserver(P=>{const S=P[0],I=S.isIntersecting&&S.intersectionRatio>0;G.current=I,R.current&&(I&&!document.hidden?R.current.start():R.current.pause())},{threshold:[0,.01,.1]});be.observe(X),O.current=be;const Wt=new ResizeObserver(()=>{R.current&&(A.current&&cancelAnimationFrame(A.current),A.current=requestAnimationFrame(()=>{R.current&&R.current.resize()}))});return Wt.observe(X),L.current=Wt,()=>{if(z.current&&cancelAnimationFrame(z.current),L.current)try{L.current.disconnect()}catch{}if(O.current)try{O.current.disconnect()}catch{}R.current&&R.current.dispose(),R.current=null}},[f,t,c,d,n,u,s,o,p,a,_,y,T,E,M,x,C]),Cn.useEffect(()=>{const N=R.current;if(!N)return;const V=N.output?.simulation;if(!V)return;const Z=V.options.resolution;Object.assign(V.options,{mouse_force:o,cursor_size:t,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:u,dt:c,BFECC:f,resolution:p,isBounce:d}),N.autoDriver&&(N.autoDriver.enabled=y,N.autoDriver.speed=T,N.autoDriver.resumeDelay=x,N.autoDriver.rampDurationMs=C*1e3,N.autoDriver.mouse&&(N.autoDriver.mouse.autoIntensity=E,N.autoDriver.mouse.takeoverDuration=M)),p!==Z&&V.resize()},[o,t,n,a,s,u,c,f,p,d,y,T,E,M,x,C]),fn.jsx("div",{ref:U,className:`liquid-ether-container ${v||""}`,style:g})}function cw(){return fn.jsx("header",{children:fn.jsx("h1",{children:"Marco's Portfolio"})})}const fw=()=>{const o=[{label:"About Me",bgColor:"#0D0716",textColor:"#fff",links:[{label:"Current Work at NASA",ariaLabel:"Current Work at NASA"},{label:"Mini Bio",ariaLabel:"Mini Bio"},{label:"Resumé",ariaLabel:"Resumé"},{label:"Contact Information",ariaLabel:"Contact Information"}]},{label:"Projects",bgColor:"#170D27",textColor:"#fff",links:[{label:"Top Featured Project",ariaLabel:"Top Featured Project"},{label:"Coding",ariaLabel:"Featured Projects"},{label:"Research",ariaLabel:"Project Case Studies"},{label:"Composition",ariaLabel:"Project Case Studies"},{label:"3D Modeling Files",ariaLabel:"Project Case Studies"}]},{label:"Hobbies & Interests",bgColor:"#271E37",textColor:"#fff",links:[{label:"Recipes",ariaLabel:"Recipes"}]}];return fn.jsxs("div",{style:{width:"100%",height:800,position:"relative"},children:[fn.jsx(cw,{style:{zIndex:0}}),fn.jsx(uw,{colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:10,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#5227FF",color1:"#0000ff",color2:"#0080c0"}),fn.jsx(KT,{items:o,baseColor:"#fff",menuColor:"#000",buttonBgColor:"#111",buttonTextColor:"#fff",ease:"circ.out",theme:"dark"})]})};Mb.createRoot(document.getElementById("root")).render(fn.jsx(Cn.StrictMode,{children:fn.jsx(fw,{})}));
