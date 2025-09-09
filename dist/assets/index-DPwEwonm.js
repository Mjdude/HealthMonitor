import{r as b,b as Ur,a as Q}from"./react-DMBppH6t.js";import{d as y,u as _r,L as Je,R as Wr,a as zt,f as Kr,B as Gr,o as Yr}from"./vendor-DDyza0nF.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var ns={exports:{}},oe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qr=b,Xr=Symbol.for("react.element"),Zr=Symbol.for("react.fragment"),Jr=Object.prototype.hasOwnProperty,Qr=qr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,to={key:!0,ref:!0,__self:!0,__source:!0};function is(t,e,n){var i,s={},o=null,r=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(r=e.ref);for(i in e)Jr.call(e,i)&&!to.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:Xr,type:t,key:o,ref:r,props:s,_owner:Qr.current}}oe.Fragment=Zr;oe.jsx=is;oe.jsxs=is;ns.exports=oe;var h=ns.exports,Le={},Bn=Ur;Le.createRoot=Bn.createRoot,Le.hydrateRoot=Bn.hydrateRoot;const Qe=b.createContext({});function tn(t){const e=b.useRef(null);return e.current===null&&(e.current=t()),e.current}const ae=b.createContext(null),en=b.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class eo extends b.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function no({children:t,isPresent:e}){const n=b.useId(),i=b.useRef(null),s=b.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=b.useContext(en);return b.useInsertionEffect(()=>{const{width:r,height:a,top:l,left:c}=s.current;if(e||!i.current||!r||!a)return;i.current.dataset.motionPopId=n;const u=document.createElement("style");return o&&(u.nonce=o),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${r}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),h.jsx(eo,{isPresent:e,childRef:i,sizeRef:s,children:b.cloneElement(t,{ref:i})})}const io=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:o,mode:r})=>{const a=tn(so),l=b.useId(),c=b.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),u=b.useMemo(()=>({id:l,initial:e,isPresent:n,custom:s,onExitComplete:c,register:d=>(a.set(d,!1),()=>a.delete(d))}),o?[Math.random(),c]:[n,c]);return b.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),b.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),r==="popLayout"&&(t=h.jsx(no,{isPresent:n,children:t})),h.jsx(ae.Provider,{value:u,children:t})};function so(){return new Map}function ss(t=!0){const e=b.useContext(ae);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:s}=e,o=b.useId();b.useEffect(()=>{t&&s(o)},[t]);const r=b.useCallback(()=>t&&i&&i(o),[o,i,t]);return!n&&i?[!1,r]:[!0]}const Ht=t=>t.key||"";function On(t){const e=[];return b.Children.forEach(t,n=>{b.isValidElement(n)&&e.push(n)}),e}const nn=typeof window<"u",rs=nn?b.useLayoutEffect:b.useEffect,ro=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:o="sync",propagate:r=!1})=>{const[a,l]=ss(r),c=b.useMemo(()=>On(t),[t]),u=r&&!a?[]:c.map(Ht),d=b.useRef(!0),f=b.useRef(c),m=tn(()=>new Map),[p,g]=b.useState(c),[x,v]=b.useState(c);rs(()=>{d.current=!1,f.current=c;for(let C=0;C<x.length;C++){const w=Ht(x[C]);u.includes(w)?m.delete(w):m.get(w)!==!0&&m.set(w,!1)}},[x,u.length,u.join("-")]);const T=[];if(c!==p){let C=[...c];for(let w=0;w<x.length;w++){const A=x[w],k=Ht(A);u.includes(k)||(C.splice(w,0,A),T.push(A))}o==="wait"&&T.length&&(C=T),v(On(C)),g(c);return}const{forceRender:P}=b.useContext(Qe);return h.jsx(h.Fragment,{children:x.map(C=>{const w=Ht(C),A=r&&!a?!1:c===x||u.includes(w),k=()=>{if(m.has(w))m.set(w,!0);else return;let j=!0;m.forEach(L=>{L||(j=!1)}),j&&(P==null||P(),v(f.current),r&&(l==null||l()),i&&i())};return h.jsx(io,{isPresent:A,initial:!d.current||n?void 0:!1,custom:A?void 0:e,presenceAffectsLayout:s,mode:o,onExitComplete:A?void 0:k,children:C},w)})})},z=t=>t;let os=z;function sn(t){let e;return()=>(e===void 0&&(e=t()),e)}const gt=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},q=t=>t*1e3,X=t=>t/1e3,oo={useManualTiming:!1};function ao(t){let e=new Set,n=new Set,i=!1,s=!1;const o=new WeakSet;let r={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),t()),c(r)}const l={schedule:(c,u=!1,d=!1)=>{const m=d&&i?e:n;return u&&o.add(c),m.has(c)||m.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(r=c,i){s=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,s&&(s=!1,l.process(c))}};return l}const Nt=["read","resolveKeyframes","update","preRender","render","postRender"],lo=40;function as(t,e){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,r=Nt.reduce((v,T)=>(v[T]=ao(o),v),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:f}=r,m=()=>{const v=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(v-s.timestamp,lo),1),s.timestamp=v,s.isProcessing=!0,a.process(s),l.process(s),c.process(s),u.process(s),d.process(s),f.process(s),s.isProcessing=!1,n&&e&&(i=!1,t(m))},p=()=>{n=!0,i=!0,s.isProcessing||t(m)};return{schedule:Nt.reduce((v,T)=>{const P=r[T];return v[T]=(C,w=!1,A=!1)=>(n||p(),P.schedule(C,w,A)),v},{}),cancel:v=>{for(let T=0;T<Nt.length;T++)r[Nt[T]].cancel(v)},state:s,steps:r}}const{schedule:V,cancel:tt,state:F,steps:pe}=as(typeof requestAnimationFrame<"u"?requestAnimationFrame:z,!0),ls=b.createContext({strict:!1}),$n={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yt={};for(const t in $n)yt[t]={isEnabled:e=>$n[t].some(n=>!!e[n])};function co(t){for(const e in t)yt[e]={...yt[e],...t[e]}}const uo=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Xt(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||uo.has(t)}let cs=t=>!Xt(t);function ho(t){t&&(cs=e=>e.startsWith("on")?!Xt(e):t(e))}try{ho(require("@emotion/is-prop-valid").default)}catch{}function fo(t,e,n){const i={};for(const s in t)s==="values"&&typeof t.values=="object"||(cs(s)||n===!0&&Xt(s)||!e&&!Xt(s)||t.draggable&&s.startsWith("onDrag"))&&(i[s]=t[s]);return i}function mo(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,s)=>s==="create"?t:(e.has(s)||e.set(s,t(s)),e.get(s))})}const le=b.createContext({});function Mt(t){return typeof t=="string"||Array.isArray(t)}function ce(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const rn=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],on=["initial",...rn];function ue(t){return ce(t.animate)||on.some(e=>Mt(t[e]))}function us(t){return!!(ue(t)||t.variants)}function po(t,e){if(ue(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Mt(n)?n:void 0,animate:Mt(i)?i:void 0}}return t.inherit!==!1?e:{}}function go(t){const{initial:e,animate:n}=po(t,b.useContext(le));return b.useMemo(()=>({initial:e,animate:n}),[In(e),In(n)])}function In(t){return Array.isArray(t)?t.join(" "):t}const yo=Symbol.for("motionComponentSymbol");function ht(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function vo(t,e,n){return b.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):ht(n)&&(n.current=i))},[e])}const an=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xo="framerAppearId",hs="data-"+an(xo),{schedule:ln}=as(queueMicrotask,!1),ds=b.createContext({});function bo(t,e,n,i,s){var o,r;const{visualElement:a}=b.useContext(le),l=b.useContext(ls),c=b.useContext(ae),u=b.useContext(en).reducedMotion,d=b.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const f=d.current,m=b.useContext(ds);f&&!f.projection&&s&&(f.type==="html"||f.type==="svg")&&wo(d.current,n,s,m);const p=b.useRef(!1);b.useInsertionEffect(()=>{f&&p.current&&f.update(n,c)});const g=n[hs],x=b.useRef(!!g&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,g))&&((r=window.MotionHasOptimisedAnimation)===null||r===void 0?void 0:r.call(window,g)));return rs(()=>{f&&(p.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),ln.render(f.render),x.current&&f.animationState&&f.animationState.animateChanges())}),b.useEffect(()=>{f&&(!x.current&&f.animationState&&f.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,g)}),x.current=!1))}),f}function wo(t,e,n,i){const{layoutId:s,layout:o,drag:r,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:fs(t.parent)),t.projection.setOptions({layoutId:s,layout:o,alwaysMeasureLayout:!!r||a&&ht(a),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function fs(t){if(t)return t.options.allowProjection!==!1?t.projection:fs(t.parent)}function To({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:s}){var o,r;t&&co(t);function a(c,u){let d;const f={...b.useContext(en),...c,layoutId:Po(c)},{isStatic:m}=f,p=go(c),g=i(c,m);if(!m&&nn){So();const x=jo(f);d=x.MeasureLayout,p.visualElement=bo(s,g,f,e,x.ProjectionNode)}return h.jsxs(le.Provider,{value:p,children:[d&&p.visualElement?h.jsx(d,{visualElement:p.visualElement,...f}):null,n(s,c,vo(g,p.visualElement,u),g,m,p.visualElement)]})}a.displayName=`motion.${typeof s=="string"?s:`create(${(r=(o=s.displayName)!==null&&o!==void 0?o:s.name)!==null&&r!==void 0?r:""})`}`;const l=b.forwardRef(a);return l[yo]=s,l}function Po({layoutId:t}){const e=b.useContext(Qe).id;return e&&t!==void 0?e+"-"+t:t}function So(t,e){b.useContext(ls).strict}function jo(t){const{drag:e,layout:n}=yt;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const Co=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cn(t){return typeof t!="string"||t.includes("-")?!1:!!(Co.indexOf(t)>-1||/[A-Z]/u.test(t))}function zn(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function un(t,e,n,i){if(typeof e=="function"){const[s,o]=zn(i);e=e(n!==void 0?n:t.custom,s,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,o]=zn(i);e=e(n!==void 0?n:t.custom,s,o)}return e}const Be=t=>Array.isArray(t),Ao=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Vo=t=>Be(t)?t[t.length-1]||0:t,O=t=>!!(t&&t.getVelocity);function Gt(t){const e=O(t)?t.get():t;return Ao(e)?e.toValue():e}function Mo({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,s,o){const r={latestValues:Do(i,s,o,t),renderState:e()};return n&&(r.onMount=a=>n({props:i,current:a,...r}),r.onUpdate=a=>n(a)),r}const ms=t=>(e,n)=>{const i=b.useContext(le),s=b.useContext(ae),o=()=>Mo(t,e,i,s);return n?o():tn(o)};function Do(t,e,n,i){const s={},o=i(t,{});for(const f in o)s[f]=Gt(o[f]);let{initial:r,animate:a}=t;const l=ue(t),c=us(t);e&&c&&!l&&t.inherit!==!1&&(r===void 0&&(r=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||r===!1;const d=u?a:r;if(d&&typeof d!="boolean"&&!ce(d)){const f=Array.isArray(d)?d:[d];for(let m=0;m<f.length;m++){const p=un(t,f[m]);if(p){const{transitionEnd:g,transition:x,...v}=p;for(const T in v){let P=v[T];if(Array.isArray(P)){const C=u?P.length-1:0;P=P[C]}P!==null&&(s[T]=P)}for(const T in g)s[T]=g[T]}}}return s}const xt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ct=new Set(xt),ps=t=>e=>typeof e=="string"&&e.startsWith(t),gs=ps("--"),ko=ps("var(--"),hn=t=>ko(t)?Ro.test(t.split("/*")[0].trim()):!1,Ro=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ys=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Z=(t,e,n)=>n>e?e:n<t?t:n,bt={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Dt={...bt,transform:t=>Z(0,1,t)},Ut={...bt,default:1},Bt=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),J=Bt("deg"),K=Bt("%"),S=Bt("px"),Eo=Bt("vh"),Fo=Bt("vw"),Hn={...K,parse:t=>K.parse(t)/100,transform:t=>K.transform(t*100)},Lo={borderWidth:S,borderTopWidth:S,borderRightWidth:S,borderBottomWidth:S,borderLeftWidth:S,borderRadius:S,radius:S,borderTopLeftRadius:S,borderTopRightRadius:S,borderBottomRightRadius:S,borderBottomLeftRadius:S,width:S,maxWidth:S,height:S,maxHeight:S,top:S,right:S,bottom:S,left:S,padding:S,paddingTop:S,paddingRight:S,paddingBottom:S,paddingLeft:S,margin:S,marginTop:S,marginRight:S,marginBottom:S,marginLeft:S,backgroundPositionX:S,backgroundPositionY:S},Bo={rotate:J,rotateX:J,rotateY:J,rotateZ:J,scale:Ut,scaleX:Ut,scaleY:Ut,scaleZ:Ut,skew:J,skewX:J,skewY:J,distance:S,translateX:S,translateY:S,translateZ:S,x:S,y:S,z:S,perspective:S,transformPerspective:S,opacity:Dt,originX:Hn,originY:Hn,originZ:S},Nn={...bt,transform:Math.round},dn={...Lo,...Bo,zIndex:Nn,size:S,fillOpacity:Dt,strokeOpacity:Dt,numOctaves:Nn},Oo={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$o=xt.length;function Io(t,e,n){let i="",s=!0;for(let o=0;o<$o;o++){const r=xt[o],a=t[r];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(r.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=ys(a,dn[r]);if(!l){s=!1;const u=Oo[r]||r;i+=`${u}(${c}) `}n&&(e[r]=c)}}return i=i.trim(),n?i=n(e,s?"":i):s&&(i="none"),i}function fn(t,e,n){const{style:i,vars:s,transformOrigin:o}=t;let r=!1,a=!1;for(const l in e){const c=e[l];if(ct.has(l)){r=!0;continue}else if(gs(l)){s[l]=c;continue}else{const u=ys(c,dn[l]);l.startsWith("origin")?(a=!0,o[l]=u):i[l]=u}}if(e.transform||(r||n?i.transform=Io(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=o;i.transformOrigin=`${l} ${c} ${u}`}}const zo={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ho={offset:"strokeDashoffset",array:"strokeDasharray"};function No(t,e,n=1,i=0,s=!0){t.pathLength=1;const o=s?zo:Ho;t[o.offset]=S.transform(-i);const r=S.transform(e),a=S.transform(n);t[o.array]=`${r} ${a}`}function Un(t,e,n){return typeof t=="string"?t:S.transform(e+n*t)}function Uo(t,e,n){const i=Un(e,t.x,t.width),s=Un(n,t.y,t.height);return`${i} ${s}`}function mn(t,{attrX:e,attrY:n,attrScale:i,originX:s,originY:o,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(fn(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:m,dimensions:p}=t;f.transform&&(p&&(m.transform=f.transform),delete f.transform),p&&(s!==void 0||o!==void 0||m.transform)&&(m.transformOrigin=Uo(p,s!==void 0?s:.5,o!==void 0?o:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&No(f,r,a,l,!1)}const pn=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),vs=()=>({...pn(),attrs:{}}),gn=t=>typeof t=="string"&&t.toLowerCase()==="svg";function xs(t,{style:e,vars:n},i,s){Object.assign(t.style,e,s&&s.getProjectionStyles(i));for(const o in n)t.style.setProperty(o,n[o])}const bs=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ws(t,e,n,i){xs(t,e,void 0,i);for(const s in e.attrs)t.setAttribute(bs.has(s)?s:an(s),e.attrs[s])}const Zt={};function _o(t){Object.assign(Zt,t)}function Ts(t,{layout:e,layoutId:n}){return ct.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Zt[t]||t==="opacity")}function yn(t,e,n){var i;const{style:s}=t,o={};for(const r in s)(O(s[r])||e.style&&O(e.style[r])||Ts(r,t)||((i=n==null?void 0:n.getValue(r))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(o[r]=s[r]);return o}function Ps(t,e,n){const i=yn(t,e,n);for(const s in t)if(O(t[s])||O(e[s])){const o=xt.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[o]=t[s]}return i}function Wo(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const _n=["x","y","width","height","cx","cy","r"],Ko={useVisualState:ms({scrapeMotionValuesFromProps:Ps,createRenderState:vs,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:s})=>{if(!n)return;let o=!!t.drag;if(!o){for(const a in s)if(ct.has(a)){o=!0;break}}if(!o)return;let r=!e;if(e)for(let a=0;a<_n.length;a++){const l=_n[a];t[l]!==e[l]&&(r=!0)}r&&V.read(()=>{Wo(n,i),V.render(()=>{mn(i,s,gn(n.tagName),t.transformTemplate),ws(n,i)})})}})},Go={useVisualState:ms({scrapeMotionValuesFromProps:yn,createRenderState:pn})};function Ss(t,e,n){for(const i in e)!O(e[i])&&!Ts(i,n)&&(t[i]=e[i])}function Yo({transformTemplate:t},e){return b.useMemo(()=>{const n=pn();return fn(n,e,t),Object.assign({},n.vars,n.style)},[e])}function qo(t,e){const n=t.style||{},i={};return Ss(i,n,t),Object.assign(i,Yo(t,e)),i}function Xo(t,e){const n={},i=qo(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function Zo(t,e,n,i){const s=b.useMemo(()=>{const o=vs();return mn(o,e,gn(i),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};Ss(o,t.style,t),s.style={...o,...s.style}}return s}function Jo(t=!1){return(n,i,s,{latestValues:o},r)=>{const l=(cn(n)?Zo:Xo)(i,o,r,n),c=fo(i,typeof n=="string",t),u=n!==b.Fragment?{...c,...l,ref:s}:{},{children:d}=i,f=b.useMemo(()=>O(d)?d.get():d,[d]);return b.createElement(n,{...u,children:f})}}function Qo(t,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const r={...cn(i)?Ko:Go,preloadedFeatures:t,useRender:Jo(s),createVisualElement:e,Component:i};return To(r)}}function js(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function he(t,e,n){const i=t.getProps();return un(i,e,n!==void 0?n:i.custom,t)}const ta=sn(()=>window.ScrollTimeline!==void 0);class ea{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(s=>{if(ta()&&s.attachTimeline)return s.attachTimeline(e);if(typeof n=="function")return n(s)});return()=>{i.forEach((s,o)=>{s&&s(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class na extends ea{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function vn(t,e){return t?t[e]||t.default||t:void 0}const Oe=2e4;function Cs(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Oe;)e+=n,i=t.next(e);return e>=Oe?1/0:e}function xn(t){return typeof t=="function"}function Wn(t,e){t.timeline=e,t.onfinish=null}const bn=t=>Array.isArray(t)&&typeof t[0]=="number",ia={linearEasing:void 0};function sa(t,e){const n=sn(t);return()=>{var i;return(i=ia[e])!==null&&i!==void 0?i:n()}}const Jt=sa(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),As=(t,e,n=10)=>{let i="";const s=Math.max(Math.round(e/n),2);for(let o=0;o<s;o++)i+=t(gt(0,s-1,o))+", ";return`linear(${i.substring(0,i.length-2)})`};function Vs(t){return!!(typeof t=="function"&&Jt()||!t||typeof t=="string"&&(t in $e||Jt())||bn(t)||Array.isArray(t)&&t.every(Vs))}const Tt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,$e={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Tt([0,.65,.55,1]),circOut:Tt([.55,0,1,.45]),backIn:Tt([.31,.01,.66,-.59]),backOut:Tt([.33,1.53,.69,.99])};function Ms(t,e){if(t)return typeof t=="function"&&Jt()?As(t,e):bn(t)?Tt(t):Array.isArray(t)?t.map(n=>Ms(n,e)||$e.easeOut):$e[t]}const W={x:!1,y:!1};function Ds(){return W.x||W.y}function ra(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let s=document;const o=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t)}function ks(t,e){const n=ra(t),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[n,s,()=>i.abort()]}function Kn(t){return e=>{e.pointerType==="touch"||Ds()||t(e)}}function oa(t,e,n={}){const[i,s,o]=ks(t,n),r=Kn(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=Kn(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,s)});return i.forEach(a=>{a.addEventListener("pointerenter",r,s)}),o}const Rs=(t,e)=>e?t===e?!0:Rs(t,e.parentElement):!1,wn=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,aa=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function la(t){return aa.has(t.tagName)||t.tabIndex!==-1}const Pt=new WeakSet;function Gn(t){return e=>{e.key==="Enter"&&t(e)}}function ge(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ca=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Gn(()=>{if(Pt.has(n))return;ge(n,"down");const s=Gn(()=>{ge(n,"up")}),o=()=>ge(n,"cancel");n.addEventListener("keyup",s,e),n.addEventListener("blur",o,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Yn(t){return wn(t)&&!Ds()}function ua(t,e,n={}){const[i,s,o]=ks(t,n),r=a=>{const l=a.currentTarget;if(!Yn(a)||Pt.has(l))return;Pt.add(l);const c=e(a),u=(m,p)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Yn(m)||!Pt.has(l))&&(Pt.delete(l),typeof c=="function"&&c(m,{success:p}))},d=m=>{u(m,n.useGlobalTarget||Rs(l,m.target))},f=m=>{u(m,!1)};window.addEventListener("pointerup",d,s),window.addEventListener("pointercancel",f,s)};return i.forEach(a=>{!la(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",r,s),a.addEventListener("focus",c=>ca(c,s),s)}),o}function ha(t){return t==="x"||t==="y"?W[t]?null:(W[t]=!0,()=>{W[t]=!1}):W.x||W.y?null:(W.x=W.y=!0,()=>{W.x=W.y=!1})}const Es=new Set(["width","height","top","left","right","bottom",...xt]);let Yt;function da(){Yt=void 0}const G={now:()=>(Yt===void 0&&G.set(F.isProcessing||oo.useManualTiming?F.timestamp:performance.now()),Yt),set:t=>{Yt=t,queueMicrotask(da)}};function Tn(t,e){t.indexOf(e)===-1&&t.push(e)}function Pn(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Sn{constructor(){this.subscriptions=[]}add(e){return Tn(this.subscriptions,e),()=>Pn(this.subscriptions,e)}notify(e,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,i);else for(let o=0;o<s;o++){const r=this.subscriptions[o];r&&r(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Fs(t,e){return e?t*(1e3/e):0}const qn=30,fa=t=>!isNaN(parseFloat(t));class ma{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const o=G.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=G.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fa(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Sn);const i=this.events[e].add(n);return e==="change"?()=>{i(),V.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=G.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qn)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,qn);return Fs(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function kt(t,e){return new ma(t,e)}function pa(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,kt(n))}function ga(t,e){const n=he(t,e);let{transitionEnd:i={},transition:s={},...o}=n||{};o={...o,...i};for(const r in o){const a=Vo(o[r]);pa(t,r,a)}}function ya(t){return!!(O(t)&&t.add)}function Ie(t,e){const n=t.getValue("willChange");if(ya(n))return n.add(e)}function Ls(t){return t.props[hs]}const Bs=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,va=1e-7,xa=12;function ba(t,e,n,i,s){let o,r,a=0;do r=e+(n-e)/2,o=Bs(r,i,s)-t,o>0?n=r:e=r;while(Math.abs(o)>va&&++a<xa);return r}function Ot(t,e,n,i){if(t===e&&n===i)return z;const s=o=>ba(o,0,1,t,n);return o=>o===0||o===1?o:Bs(s(o),e,i)}const Os=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,$s=t=>e=>1-t(1-e),Is=Ot(.33,1.53,.69,.99),jn=$s(Is),zs=Os(jn),Hs=t=>(t*=2)<1?.5*jn(t):.5*(2-Math.pow(2,-10*(t-1))),Cn=t=>1-Math.sin(Math.acos(t)),Ns=$s(Cn),Us=Os(Cn),_s=t=>/^0[^.\s]+$/u.test(t);function wa(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_s(t):!0}const jt=t=>Math.round(t*1e5)/1e5,An=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ta(t){return t==null}const Pa=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Vn=(t,e)=>n=>!!(typeof n=="string"&&Pa.test(n)&&n.startsWith(t)||e&&!Ta(n)&&Object.prototype.hasOwnProperty.call(n,e)),Ws=(t,e,n)=>i=>{if(typeof i!="string")return i;const[s,o,r,a]=i.match(An);return{[t]:parseFloat(s),[e]:parseFloat(o),[n]:parseFloat(r),alpha:a!==void 0?parseFloat(a):1}},Sa=t=>Z(0,255,t),ye={...bt,transform:t=>Math.round(Sa(t))},ot={test:Vn("rgb","red"),parse:Ws("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+ye.transform(t)+", "+ye.transform(e)+", "+ye.transform(n)+", "+jt(Dt.transform(i))+")"};function ja(t){let e="",n="",i="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const ze={test:Vn("#"),parse:ja,transform:ot.transform},dt={test:Vn("hsl","hue"),parse:Ws("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+K.transform(jt(e))+", "+K.transform(jt(n))+", "+jt(Dt.transform(i))+")"},B={test:t=>ot.test(t)||ze.test(t)||dt.test(t),parse:t=>ot.test(t)?ot.parse(t):dt.test(t)?dt.parse(t):ze.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ot.transform(t):dt.transform(t)},Ca=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Aa(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(An))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(Ca))===null||n===void 0?void 0:n.length)||0)>0}const Ks="number",Gs="color",Va="var",Ma="var(",Xn="${}",Da=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Rt(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},s=[];let o=0;const a=e.replace(Da,l=>(B.test(l)?(i.color.push(o),s.push(Gs),n.push(B.parse(l))):l.startsWith(Ma)?(i.var.push(o),s.push(Va),n.push(l)):(i.number.push(o),s.push(Ks),n.push(parseFloat(l))),++o,Xn)).split(Xn);return{values:n,split:a,indexes:i,types:s}}function Ys(t){return Rt(t).values}function qs(t){const{split:e,types:n}=Rt(t),i=e.length;return s=>{let o="";for(let r=0;r<i;r++)if(o+=e[r],s[r]!==void 0){const a=n[r];a===Ks?o+=jt(s[r]):a===Gs?o+=B.transform(s[r]):o+=s[r]}return o}}const ka=t=>typeof t=="number"?0:t;function Ra(t){const e=Ys(t);return qs(t)(e.map(ka))}const et={test:Aa,parse:Ys,createTransformer:qs,getAnimatableNone:Ra},Ea=new Set(["brightness","contrast","saturate","opacity"]);function Fa(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(An)||[];if(!i)return t;const s=n.replace(i,"");let o=Ea.has(e)?1:0;return i!==n&&(o*=100),e+"("+o+s+")"}const La=/\b([a-z-]*)\(.*?\)/gu,He={...et,getAnimatableNone:t=>{const e=t.match(La);return e?e.map(Fa).join(" "):t}},Ba={...dn,color:B,backgroundColor:B,outlineColor:B,fill:B,stroke:B,borderColor:B,borderTopColor:B,borderRightColor:B,borderBottomColor:B,borderLeftColor:B,filter:He,WebkitFilter:He},Mn=t=>Ba[t];function Xs(t,e){let n=Mn(t);return n!==He&&(n=et),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Oa=new Set(["auto","none","0"]);function $a(t,e,n){let i=0,s;for(;i<t.length&&!s;){const o=t[i];typeof o=="string"&&!Oa.has(o)&&Rt(o).values.length&&(s=t[i]),i++}if(s&&n)for(const o of e)t[o]=Xs(n,s)}const Zn=t=>t===bt||t===S,Jn=(t,e)=>parseFloat(t.split(", ")[e]),Qn=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return Jn(s[1],e);{const o=i.match(/^matrix\((.+)\)$/u);return o?Jn(o[1],t):0}},Ia=new Set(["x","y","z"]),za=xt.filter(t=>!Ia.has(t));function Ha(t){const e=[];return za.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const vt={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Qn(4,13),y:Qn(5,14)};vt.translateX=vt.x;vt.translateY=vt.y;const at=new Set;let Ne=!1,Ue=!1;function Zs(){if(Ue){const t=Array.from(at).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const s=Ha(i);s.length&&(n.set(i,s),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=n.get(i);s&&s.forEach(([o,r])=>{var a;(a=i.getValue(o))===null||a===void 0||a.set(r)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ue=!1,Ne=!1,at.forEach(t=>t.complete()),at.clear()}function Js(){at.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ue=!0)})}function Na(){Js(),Zs()}class Dn{constructor(e,n,i,s,o,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=s,this.element=o,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(at.add(this),Ne||(Ne=!0,V.read(Js),V.resolveKeyframes(Zs))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:s}=this;for(let o=0;o<e.length;o++)if(e[o]===null)if(o===0){const r=s==null?void 0:s.get(),a=e[e.length-1];if(r!==void 0)e[0]=r;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),s&&r===void 0&&s.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),at.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,at.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Qs=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Ua=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function _a(t){const e=Ua.exec(t);if(!e)return[,];const[,n,i,s]=e;return[`--${n??i}`,s]}function tr(t,e,n=1){const[i,s]=_a(t);if(!i)return;const o=window.getComputedStyle(e).getPropertyValue(i);if(o){const r=o.trim();return Qs(r)?parseFloat(r):r}return hn(s)?tr(s,e,n+1):s}const er=t=>e=>e.test(t),Wa={test:t=>t==="auto",parse:t=>t},nr=[bt,S,K,J,Fo,Eo,Wa],ti=t=>nr.find(er(t));class ir extends Dn{constructor(e,n,i,s,o){super(e,n,i,s,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),hn(c))){const u=tr(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Es.has(i)||e.length!==2)return;const[s,o]=e,r=ti(s),a=ti(o);if(r!==a)if(Zn(r)&&Zn(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let s=0;s<e.length;s++)wa(e[s])&&i.push(s);i.length&&$a(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=vt[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const o=n.getValue(i);o&&o.jump(this.measuredOrigin,!1);const r=s.length-1,a=s[r];s[r]=vt[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ei=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(et.test(t)||t==="0")&&!t.startsWith("url("));function Ka(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function Ga(t,e,n,i){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],r=ei(s,e),a=ei(o,e);return!r||!a?!1:Ka(t)||(n==="spring"||xn(n))&&i}const Ya=t=>t!==null;function de(t,{repeat:e,repeatType:n="loop"},i){const s=t.filter(Ya),o=e&&n!=="loop"&&e%2===1?0:s.length-1;return!o||i===void 0?s[o]:i}const qa=40;class sr{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:r="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=G.now(),this.options={autoplay:e,delay:n,type:i,repeat:s,repeatDelay:o,repeatType:r,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>qa?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Na(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=G.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:o,delay:r,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!Ga(e,i,s,o))if(r)this.options.duration=0;else{l&&l(de(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const M=(t,e,n)=>t+(e-t)*n;function ve(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Xa({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let s=0,o=0,r=0;if(!e)s=o=r=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=ve(l,a,t+1/3),o=ve(l,a,t),r=ve(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(o*255),blue:Math.round(r*255),alpha:i}}function Qt(t,e){return n=>n>0?e:t}const xe=(t,e,n)=>{const i=t*t,s=n*(e*e-i)+i;return s<0?0:Math.sqrt(s)},Za=[ze,ot,dt],Ja=t=>Za.find(e=>e.test(t));function ni(t){const e=Ja(t);if(!e)return!1;let n=e.parse(t);return e===dt&&(n=Xa(n)),n}const ii=(t,e)=>{const n=ni(t),i=ni(e);if(!n||!i)return Qt(t,e);const s={...n};return o=>(s.red=xe(n.red,i.red,o),s.green=xe(n.green,i.green,o),s.blue=xe(n.blue,i.blue,o),s.alpha=M(n.alpha,i.alpha,o),ot.transform(s))},Qa=(t,e)=>n=>e(t(n)),$t=(...t)=>t.reduce(Qa),_e=new Set(["none","hidden"]);function tl(t,e){return _e.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function el(t,e){return n=>M(t,e,n)}function kn(t){return typeof t=="number"?el:typeof t=="string"?hn(t)?Qt:B.test(t)?ii:sl:Array.isArray(t)?rr:typeof t=="object"?B.test(t)?ii:nl:Qt}function rr(t,e){const n=[...t],i=n.length,s=t.map((o,r)=>kn(o)(o,e[r]));return o=>{for(let r=0;r<i;r++)n[r]=s[r](o);return n}}function nl(t,e){const n={...t,...e},i={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(i[s]=kn(t[s])(t[s],e[s]));return s=>{for(const o in i)n[o]=i[o](s);return n}}function il(t,e){var n;const i=[],s={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const r=e.types[o],a=t.indexes[r][s[r]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[o]=l,s[r]++}return i}const sl=(t,e)=>{const n=et.createTransformer(e),i=Rt(t),s=Rt(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?_e.has(t)&&!s.values.length||_e.has(e)&&!i.values.length?tl(t,e):$t(rr(il(i,s),s.values),n):Qt(t,e)};function or(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?M(t,e,n):kn(t)(t,e)}const rl=5;function ar(t,e,n){const i=Math.max(e-rl,0);return Fs(n-t(i),e-i)}const D={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},be=.001;function ol({duration:t=D.duration,bounce:e=D.bounce,velocity:n=D.velocity,mass:i=D.mass}){let s,o,r=1-e;r=Z(D.minDamping,D.maxDamping,r),t=Z(D.minDuration,D.maxDuration,X(t)),r<1?(s=c=>{const u=c*r,d=u*t,f=u-n,m=We(c,r),p=Math.exp(-d);return be-f/m*p},o=c=>{const d=c*r*t,f=d*n+n,m=Math.pow(r,2)*Math.pow(c,2)*t,p=Math.exp(-d),g=We(Math.pow(c,2),r);return(-s(c)+be>0?-1:1)*((f-m)*p)/g}):(s=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-be+u*d},o=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=ll(s,o,a);if(t=q(t),isNaN(l))return{stiffness:D.stiffness,damping:D.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:r*2*Math.sqrt(i*c),duration:t}}}const al=12;function ll(t,e,n){let i=n;for(let s=1;s<al;s++)i=i-t(i)/e(i);return i}function We(t,e){return t*Math.sqrt(1-e*e)}const cl=["duration","bounce"],ul=["stiffness","damping","mass"];function si(t,e){return e.some(n=>t[n]!==void 0)}function hl(t){let e={velocity:D.velocity,stiffness:D.stiffness,damping:D.damping,mass:D.mass,isResolvedFromDuration:!1,...t};if(!si(t,ul)&&si(t,cl))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),s=i*i,o=2*Z(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:D.mass,stiffness:s,damping:o}}else{const n=ol(t);e={...e,...n,mass:D.mass},e.isResolvedFromDuration=!0}return e}function lr(t=D.visualDuration,e=D.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:s}=n;const o=n.keyframes[0],r=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:m}=hl({...n,velocity:-X(n.velocity||0)}),p=f||0,g=c/(2*Math.sqrt(l*u)),x=r-o,v=X(Math.sqrt(l/u)),T=Math.abs(x)<5;i||(i=T?D.restSpeed.granular:D.restSpeed.default),s||(s=T?D.restDelta.granular:D.restDelta.default);let P;if(g<1){const w=We(v,g);P=A=>{const k=Math.exp(-g*v*A);return r-k*((p+g*v*x)/w*Math.sin(w*A)+x*Math.cos(w*A))}}else if(g===1)P=w=>r-Math.exp(-v*w)*(x+(p+v*x)*w);else{const w=v*Math.sqrt(g*g-1);P=A=>{const k=Math.exp(-g*v*A),j=Math.min(w*A,300);return r-k*((p+g*v*x)*Math.sinh(j)+w*x*Math.cosh(j))/w}}const C={calculatedDuration:m&&d||null,next:w=>{const A=P(w);if(m)a.done=w>=d;else{let k=0;g<1&&(k=w===0?q(p):ar(P,w,A));const j=Math.abs(k)<=i,L=Math.abs(r-A)<=s;a.done=j&&L}return a.value=a.done?r:A,a},toString:()=>{const w=Math.min(Cs(C),Oe),A=As(k=>C.next(w*k).value,w,30);return w+"ms "+A}};return C}function ri({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:r,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},m=j=>a!==void 0&&j<a||l!==void 0&&j>l,p=j=>a===void 0?l:l===void 0||Math.abs(a-j)<Math.abs(l-j)?a:l;let g=n*e;const x=d+g,v=r===void 0?x:r(x);v!==x&&(g=v-d);const T=j=>-g*Math.exp(-j/i),P=j=>v+T(j),C=j=>{const L=T(j),N=P(j);f.done=Math.abs(L)<=c,f.value=f.done?v:N};let w,A;const k=j=>{m(f.value)&&(w=j,A=lr({keyframes:[f.value,p(f.value)],velocity:ar(P,j,f.value),damping:s,stiffness:o,restDelta:c,restSpeed:u}))};return k(0),{calculatedDuration:null,next:j=>{let L=!1;return!A&&w===void 0&&(L=!0,C(j),k(j)),w!==void 0&&j>=w?A.next(j-w):(!L&&C(j),f)}}}const dl=Ot(.42,0,1,1),fl=Ot(0,0,.58,1),cr=Ot(.42,0,.58,1),ml=t=>Array.isArray(t)&&typeof t[0]!="number",pl={linear:z,easeIn:dl,easeInOut:cr,easeOut:fl,circIn:Cn,circInOut:Us,circOut:Ns,backIn:jn,backInOut:zs,backOut:Is,anticipate:Hs},oi=t=>{if(bn(t)){os(t.length===4);const[e,n,i,s]=t;return Ot(e,n,i,s)}else if(typeof t=="string")return pl[t];return t};function gl(t,e,n){const i=[],s=n||or,o=t.length-1;for(let r=0;r<o;r++){let a=s(t[r],t[r+1]);if(e){const l=Array.isArray(e)?e[r]||z:e;a=$t(l,a)}i.push(a)}return i}function yl(t,e,{clamp:n=!0,ease:i,mixer:s}={}){const o=t.length;if(os(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const r=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=gl(e,i,s),l=a.length,c=u=>{if(r&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=gt(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Z(t[0],t[o-1],u)):c}function vl(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=gt(0,e,i);t.push(M(n,1,s))}}function xl(t){const e=[0];return vl(e,t.length-1),e}function bl(t,e){return t.map(n=>n*e)}function wl(t,e){return t.map(()=>e||cr).splice(0,t.length-1)}function te({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const s=ml(i)?i.map(oi):oi(i),o={done:!1,value:e[0]},r=bl(n&&n.length===e.length?n:xl(e),t),a=yl(r,e,{ease:Array.isArray(s)?s:wl(e,s)});return{calculatedDuration:t,next:l=>(o.value=a(l),o.done=l>=t,o)}}const Tl=t=>{const e=({timestamp:n})=>t(n);return{start:()=>V.update(e,!0),stop:()=>tt(e),now:()=>F.isProcessing?F.timestamp:G.now()}},Pl={decay:ri,inertia:ri,tween:te,keyframes:te,spring:lr},Sl=t=>t/100;class Rn extends sr{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:s,keyframes:o}=this.options,r=(s==null?void 0:s.KeyframeResolver)||Dn,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new r(o,a,n,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o,velocity:r=0}=this.options,a=xn(n)?n:Pl[n]||te;let l,c;a!==te&&typeof e[0]!="number"&&(l=$t(Sl,or(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});o==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-r})),u.calculatedDuration===null&&(u.calculatedDuration=Cs(u));const{calculatedDuration:d}=u,f=d+s,m=f*(i+1)-s;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:m}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:j}=this.options;return{done:!0,value:j[j.length-1]}}const{finalKeyframe:s,generator:o,mirroredGenerator:r,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return o.next(0);const{delay:f,repeat:m,repeatType:p,repeatDelay:g,onUpdate:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const v=this.currentTime-f*(this.speed>=0?1:-1),T=this.speed>=0?v<0:v>u;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let P=this.currentTime,C=o;if(m){const j=Math.min(this.currentTime,u)/d;let L=Math.floor(j),N=j%1;!N&&j>=1&&(N=1),N===1&&L--,L=Math.min(L,m+1),!!(L%2)&&(p==="reverse"?(N=1-N,g&&(N-=g/d)):p==="mirror"&&(C=r)),P=Z(0,1,N)*d}const w=T?{done:!1,value:l[0]}:C.next(P);a&&(w.value=a(w.value));let{done:A}=w;!T&&c!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return k&&s!==void 0&&(w.value=de(l,this.options,s)),x&&x(w.value),k&&this.finish(),w}get duration(){const{resolved:e}=this;return e?X(e.calculatedDuration):0}get time(){return X(this.currentTime)}set time(e){e=q(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=X(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=Tl,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),n&&n();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const jl=new Set(["opacity","clipPath","filter","transform"]);function Cl(t,e,n,{delay:i=0,duration:s=300,repeat:o=0,repeatType:r="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Ms(a,s);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:r==="reverse"?"alternate":"normal"})}const Al=sn(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ee=10,Vl=2e4;function Ml(t){return xn(t.type)||t.type==="spring"||!Vs(t.ease)}function Dl(t,e){const n=new Rn({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const s=[];let o=0;for(;!i.done&&o<Vl;)i=n.sample(o),s.push(i.value),o+=ee;return{times:void 0,keyframes:s,duration:o-ee,ease:"linear"}}const ur={anticipate:Hs,backInOut:zs,circInOut:Us};function kl(t){return t in ur}class ai extends sr{constructor(e){super(e);const{name:n,motionValue:i,element:s,keyframes:o}=this.options;this.resolver=new ir(o,(r,a)=>this.onKeyframesResolved(r,a),n,i,s),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:s,ease:o,type:r,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof o=="string"&&Jt()&&kl(o)&&(o=ur[o]),Ml(this.options)){const{onComplete:d,onUpdate:f,motionValue:m,element:p,...g}=this.options,x=Dl(e,g);e=x.keyframes,e.length===1&&(e[1]=e[0]),i=x.duration,s=x.times,o=x.ease,r="keyframes"}const u=Cl(a.owner.current,l,e,{...this.options,duration:i,times:s,ease:o});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(Wn(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(de(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:s,type:r,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return X(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return X(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=q(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return z;const{animation:i}=n;Wn(i,e)}return z}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:s,type:o,ease:r,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:f,...m}=this.options,p=new Rn({...m,keyframes:i,duration:s,type:o,ease:r,times:a,isGenerator:!0}),g=q(this.time);c.setWithVelocity(p.sample(g-ee).value,p.sample(g).value,ee)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:s,repeatType:o,damping:r,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return Al()&&i&&jl.has(i)&&!l&&!c&&!s&&o!=="mirror"&&r!==0&&a!=="inertia"}}const Rl={type:"spring",stiffness:500,damping:25,restSpeed:10},El=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Fl={type:"keyframes",duration:.8},Ll={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Bl=(t,{keyframes:e})=>e.length>2?Fl:ct.has(t)?t.startsWith("scale")?El(e[1]):Rl:Ll;function Ol({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:o,repeatType:r,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const En=(t,e,n,i={},s,o)=>r=>{const a=vn(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-q(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{r(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:o?void 0:s};Ol(a)||(u={...u,...Bl(t,u)}),u.duration&&(u.duration=q(u.duration)),u.repeatDelay&&(u.repeatDelay=q(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!o&&e.get()!==void 0){const f=de(u.keyframes,a);if(f!==void 0)return V.update(()=>{u.onUpdate(f),u.onComplete()}),new na([])}return!o&&ai.supports(u)?new ai(u):new Rn(u)};function $l({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function hr(t,e,{delay:n=0,transitionOverride:i,type:s}={}){var o;let{transition:r=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(r=i);const c=[],u=s&&t.animationState&&t.animationState.getState()[s];for(const d in l){const f=t.getValue(d,(o=t.latestValues[d])!==null&&o!==void 0?o:null),m=l[d];if(m===void 0||u&&$l(u,d))continue;const p={delay:n,...vn(r||{},d)};let g=!1;if(window.MotionHandoffAnimation){const v=Ls(t);if(v){const T=window.MotionHandoffAnimation(v,d,V);T!==null&&(p.startTime=T,g=!0)}}Ie(t,d),f.start(En(d,f,m,t.shouldReduceMotion&&Es.has(d)?{type:!1}:p,t,g));const x=f.animation;x&&c.push(x)}return a&&Promise.all(c).then(()=>{V.update(()=>{a&&ga(t,a)})}),c}function Ke(t,e,n={}){var i;const s=he(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(o=n.transitionOverride);const r=s?()=>Promise.all(hr(t,s,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=o;return Il(t,e,u+c,d,f,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,u]=l==="beforeChildren"?[r,a]:[a,r];return c().then(()=>u())}else return Promise.all([r(),a(n.delay)])}function Il(t,e,n=0,i=0,s=1,o){const r=[],a=(t.variantChildren.size-1)*i,l=s===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(zl).forEach((c,u)=>{c.notify("AnimationStart",e),r.push(Ke(c,e,{...o,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(r)}function zl(t,e){return t.sortNodePosition(e)}function Hl(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(o=>Ke(t,o,n));i=Promise.all(s)}else if(typeof e=="string")i=Ke(t,e,n);else{const s=typeof e=="function"?he(t,e,n.custom):e;i=Promise.all(hr(t,s,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const Nl=on.length;function dr(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?dr(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Nl;n++){const i=on[n],s=t.props[i];(Mt(s)||s===!1)&&(e[i]=s)}return e}const Ul=[...rn].reverse(),_l=rn.length;function Wl(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Hl(t,n,i)))}function Kl(t){let e=Wl(t),n=li(),i=!0;const s=l=>(c,u)=>{var d;const f=he(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:m,transitionEnd:p,...g}=f;c={...c,...g,...p}}return c};function o(l){e=l(t)}function r(l){const{props:c}=t,u=dr(t.parent)||{},d=[],f=new Set;let m={},p=1/0;for(let x=0;x<_l;x++){const v=Ul[x],T=n[v],P=c[v]!==void 0?c[v]:u[v],C=Mt(P),w=v===l?T.isActive:null;w===!1&&(p=x);let A=P===u[v]&&P!==c[v]&&C;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),T.protectedKeys={...m},!T.isActive&&w===null||!P&&!T.prevProp||ce(P)||typeof P=="boolean")continue;const k=Gl(T.prevProp,P);let j=k||v===l&&T.isActive&&!A&&C||x>p&&C,L=!1;const N=Array.isArray(P)?P:[P];let ut=N.reduce(s(v),{});w===!1&&(ut={});const{prevResolvedValues:Fn={}}=T,Nr={...Fn,...ut},Ln=$=>{j=!0,f.has($)&&(L=!0,f.delete($)),T.needsAnimating[$]=!0;const Y=t.getValue($);Y&&(Y.liveStyle=!1)};for(const $ in Nr){const Y=ut[$],fe=Fn[$];if(m.hasOwnProperty($))continue;let me=!1;Be(Y)&&Be(fe)?me=!js(Y,fe):me=Y!==fe,me?Y!=null?Ln($):f.add($):Y!==void 0&&f.has($)?Ln($):T.protectedKeys[$]=!0}T.prevProp=P,T.prevResolvedValues=ut,T.isActive&&(m={...m,...ut}),i&&t.blockInitialAnimation&&(j=!1),j&&(!(A&&k)||L)&&d.push(...N.map($=>({animation:$,options:{type:v}})))}if(f.size){const x={};f.forEach(v=>{const T=t.getBaseTarget(v),P=t.getValue(v);P&&(P.liveStyle=!0),x[v]=T??null}),d.push({animation:x})}let g=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(f=>{var m;return(m=f.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const d=r(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:r,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=li(),i=!0}}}function Gl(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!js(e,t):!1}function it(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function li(){return{animate:it(!0),whileInView:it(),whileHover:it(),whileTap:it(),whileDrag:it(),whileFocus:it(),exit:it()}}class nt{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Yl extends nt{constructor(e){super(e),e.animationState||(e.animationState=Kl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ce(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let ql=0;class Xl extends nt{constructor(){super(...arguments),this.id=ql++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Zl={animation:{Feature:Yl},exit:{Feature:Xl}};function Et(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function It(t){return{point:{x:t.pageX,y:t.pageY}}}const Jl=t=>e=>wn(e)&&t(e,It(e));function Ct(t,e,n,i){return Et(t,e,Jl(n),i)}const ci=(t,e)=>Math.abs(t-e);function Ql(t,e){const n=ci(t.x,e.x),i=ci(t.y,e.y);return Math.sqrt(n**2+i**2)}class fr{constructor(e,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Te(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,m=Ql(d.offset,{x:0,y:0})>=3;if(!f&&!m)return;const{point:p}=d,{timestamp:g}=F;this.history.push({...p,timestamp:g});const{onStart:x,onMove:v}=this.handlers;f||(x&&x(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=we(f,this.transformPagePoint),V.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:m,onSessionEnd:p,resumeAnimation:g}=this.handlers;if(this.dragSnapToOrigin&&g&&g(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Te(d.type==="pointercancel"?this.lastMoveEventInfo:we(f,this.transformPagePoint),this.history);this.startEvent&&m&&m(d,x),p&&p(d,x)},!wn(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const r=It(e),a=we(r,this.transformPagePoint),{point:l}=a,{timestamp:c}=F;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Te(a,this.history)),this.removeListeners=$t(Ct(this.contextWindow,"pointermove",this.handlePointerMove),Ct(this.contextWindow,"pointerup",this.handlePointerUp),Ct(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),tt(this.updatePoint)}}function we(t,e){return e?{point:e(t.point)}:t}function ui(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Te({point:t},e){return{point:t,delta:ui(t,mr(e)),offset:ui(t,tc(e)),velocity:ec(e,.1)}}function tc(t){return t[0]}function mr(t){return t[t.length-1]}function ec(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const s=mr(t);for(;n>=0&&(i=t[n],!(s.timestamp-i.timestamp>q(e)));)n--;if(!i)return{x:0,y:0};const o=X(s.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const r={x:(s.x-i.x)/o,y:(s.y-i.y)/o};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}const pr=1e-4,nc=1-pr,ic=1+pr,gr=.01,sc=0-gr,rc=0+gr;function H(t){return t.max-t.min}function oc(t,e,n){return Math.abs(t-e)<=n}function hi(t,e,n,i=.5){t.origin=i,t.originPoint=M(e.min,e.max,t.origin),t.scale=H(n)/H(e),t.translate=M(n.min,n.max,t.origin)-t.originPoint,(t.scale>=nc&&t.scale<=ic||isNaN(t.scale))&&(t.scale=1),(t.translate>=sc&&t.translate<=rc||isNaN(t.translate))&&(t.translate=0)}function At(t,e,n,i){hi(t.x,e.x,n.x,i?i.originX:void 0),hi(t.y,e.y,n.y,i?i.originY:void 0)}function di(t,e,n){t.min=n.min+e.min,t.max=t.min+H(e)}function ac(t,e,n){di(t.x,e.x,n.x),di(t.y,e.y,n.y)}function fi(t,e,n){t.min=e.min-n.min,t.max=t.min+H(e)}function Vt(t,e,n){fi(t.x,e.x,n.x),fi(t.y,e.y,n.y)}function lc(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?M(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?M(n,t,i.max):Math.min(t,n)),t}function mi(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function cc(t,{top:e,left:n,bottom:i,right:s}){return{x:mi(t.x,n,s),y:mi(t.y,e,i)}}function pi(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function uc(t,e){return{x:pi(t.x,e.x),y:pi(t.y,e.y)}}function hc(t,e){let n=.5;const i=H(t),s=H(e);return s>i?n=gt(e.min,e.max-i,t.min):i>s&&(n=gt(t.min,t.max-s,e.min)),Z(0,1,n)}function dc(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ge=.35;function fc(t=Ge){return t===!1?t=0:t===!0&&(t=Ge),{x:gi(t,"left","right"),y:gi(t,"top","bottom")}}function gi(t,e,n){return{min:yi(t,e),max:yi(t,n)}}function yi(t,e){return typeof t=="number"?t:t[e]||0}const vi=()=>({translate:0,scale:1,origin:0,originPoint:0}),ft=()=>({x:vi(),y:vi()}),xi=()=>({min:0,max:0}),R=()=>({x:xi(),y:xi()});function _(t){return[t("x"),t("y")]}function yr({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function mc({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function pc(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Pe(t){return t===void 0||t===1}function Ye({scale:t,scaleX:e,scaleY:n}){return!Pe(t)||!Pe(e)||!Pe(n)}function st(t){return Ye(t)||vr(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function vr(t){return bi(t.x)||bi(t.y)}function bi(t){return t&&t!=="0%"}function ne(t,e,n){const i=t-n,s=e*i;return n+s}function wi(t,e,n,i,s){return s!==void 0&&(t=ne(t,s,i)),ne(t,n,i)+e}function qe(t,e=0,n=1,i,s){t.min=wi(t.min,e,n,i,s),t.max=wi(t.max,e,n,i,s)}function xr(t,{x:e,y:n}){qe(t.x,e.translate,e.scale,e.originPoint),qe(t.y,n.translate,n.scale,n.originPoint)}const Ti=.999999999999,Pi=1.0000000000001;function gc(t,e,n,i=!1){const s=n.length;if(!s)return;e.x=e.y=1;let o,r;for(let a=0;a<s;a++){o=n[a],r=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&pt(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,xr(t,r)),i&&st(o.latestValues)&&pt(t,o.latestValues))}e.x<Pi&&e.x>Ti&&(e.x=1),e.y<Pi&&e.y>Ti&&(e.y=1)}function mt(t,e){t.min=t.min+e,t.max=t.max+e}function Si(t,e,n,i,s=.5){const o=M(t.min,t.max,s);qe(t,e,n,o,i)}function pt(t,e){Si(t.x,e.x,e.scaleX,e.scale,e.originX),Si(t.y,e.y,e.scaleY,e.scale,e.originY)}function br(t,e){return yr(pc(t.getBoundingClientRect(),e))}function yc(t,e,n){const i=br(t,n),{scroll:s}=e;return s&&(mt(i.x,s.offset.x),mt(i.y,s.offset.y)),i}const wr=({current:t})=>t?t.ownerDocument.defaultView:null,vc=new WeakMap;class xc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=R(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(It(u).point)},o=(u,d)=>{const{drag:f,dragPropagation:m,onDragStart:p}=this.getProps();if(f&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ha(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_(x=>{let v=this.getAxisMotionValue(x).get()||0;if(K.test(v)){const{projection:T}=this.visualElement;if(T&&T.layout){const P=T.layout.layoutBox[x];P&&(v=H(P)*(parseFloat(v)/100))}}this.originPoint[x]=v}),p&&V.postRender(()=>p(u,d)),Ie(this.visualElement,"transform");const{animationState:g}=this.visualElement;g&&g.setActive("whileDrag",!0)},r=(u,d)=>{const{dragPropagation:f,dragDirectionLock:m,onDirectionLock:p,onDrag:g}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:x}=d;if(m&&this.currentDirection===null){this.currentDirection=bc(x),this.currentDirection!==null&&p&&p(this.currentDirection);return}this.updateAxis("x",d.point,x),this.updateAxis("y",d.point,x),this.visualElement.render(),g&&g(u,d)},a=(u,d)=>this.stop(u,d),l=()=>_(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new fr(e,{onSessionStart:s,onStart:o,onMove:r,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:wr(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:o}=this.getProps();o&&V.postRender(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:s}=this.getProps();if(!i||!_t(e,s,this.currentDirection))return;const o=this.getAxisMotionValue(e);let r=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(r=lc(r,this.constraints[e],this.elastic[e])),o.set(r)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;n&&ht(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=cc(s.layoutBox,n):this.constraints=!1,this.elastic=fc(i),o!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&_(r=>{this.constraints!==!1&&this.getAxisMotionValue(r)&&(this.constraints[r]=dc(s.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!ht(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const o=yc(i,s.root,this.visualElement.getTransformPagePoint());let r=uc(s.layout.layoutBox,o);if(n){const a=n(mc(r));this.hasMutatedConstraints=!!a,a&&(r=yr(a))}return r}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:o,dragSnapToOrigin:r,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=_(u=>{if(!_t(u,n,this.currentDirection))return;let d=l&&l[u]||{};r&&(d={min:0,max:0});const f=s?200:1e6,m=s?40:1e7,p={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,p)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ie(this.visualElement,e),i.start(En(e,i,0,n,this.visualElement,!1))}stopAnimation(){_(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){_(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){_(n=>{const{drag:i}=this.getProps();if(!_t(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,o=this.getAxisMotionValue(n);if(s&&s.layout){const{min:r,max:a}=s.layout.layoutBox[n];o.set(e[n]-M(r,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ht(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};_(r=>{const a=this.getAxisMotionValue(r);if(a&&this.constraints!==!1){const l=a.get();s[r]=hc({min:l,max:l},this.constraints[r])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),_(r=>{if(!_t(r,e,null))return;const a=this.getAxisMotionValue(r),{min:l,max:c}=this.constraints[r];a.set(M(l,c,s[r]))})}addListeners(){if(!this.visualElement.current)return;vc.set(this.visualElement,this);const e=this.visualElement.current,n=Ct(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();ht(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,o=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),V.read(i);const r=Et(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(_(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{r(),n(),o(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:o=!1,dragElastic:r=Ge,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:o,dragElastic:r,dragMomentum:a}}}function _t(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function bc(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class wc extends nt{constructor(e){super(e),this.removeGroupControls=z,this.removeListeners=z,this.controls=new xc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||z}unmount(){this.removeGroupControls(),this.removeListeners()}}const ji=t=>(e,n)=>{t&&V.postRender(()=>t(e,n))};class Tc extends nt{constructor(){super(...arguments),this.removePointerDownListener=z}onPointerDown(e){this.session=new fr(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wr(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ji(e),onStart:ji(n),onMove:i,onEnd:(o,r)=>{delete this.session,s&&V.postRender(()=>s(o,r))}}}mount(){this.removePointerDownListener=Ct(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const qt={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ci(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wt={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(S.test(t))t=parseFloat(t);else return t;const n=Ci(t,e.target.x),i=Ci(t,e.target.y);return`${n}% ${i}%`}},Pc={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,s=et.parse(t);if(s.length>5)return i;const o=et.createTransformer(t),r=typeof s[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;s[0+r]/=a,s[1+r]/=l;const c=M(a,l,.5);return typeof s[2+r]=="number"&&(s[2+r]/=c),typeof s[3+r]=="number"&&(s[3+r]/=c),o(s)}};class Sc extends b.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:o}=e;_o(jc),o&&(n.group&&n.group.add(o),i&&i.register&&s&&i.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),qt.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:s,isPresent:o}=this.props,r=i.projection;return r&&(r.isPresent=o,s||e.layoutDependency!==n||n===void 0?r.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?r.promote():r.relegate()||V.postRender(()=>{const a=r.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ln.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Tr(t){const[e,n]=ss(),i=b.useContext(Qe);return h.jsx(Sc,{...t,layoutGroup:i,switchLayoutGroup:b.useContext(ds),isPresent:e,safeToRemove:n})}const jc={borderRadius:{...wt,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wt,borderTopRightRadius:wt,borderBottomLeftRadius:wt,borderBottomRightRadius:wt,boxShadow:Pc};function Cc(t,e,n){const i=O(t)?t:kt(t);return i.start(En("",i,e,n)),i.animation}function Ac(t){return t instanceof SVGElement&&t.tagName!=="svg"}const Vc=(t,e)=>t.depth-e.depth;class Mc{constructor(){this.children=[],this.isDirty=!1}add(e){Tn(this.children,e),this.isDirty=!0}remove(e){Pn(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Vc),this.isDirty=!1,this.children.forEach(e)}}function Dc(t,e){const n=G.now(),i=({timestamp:s})=>{const o=s-n;o>=e&&(tt(i),t(o-e))};return V.read(i,!0),()=>tt(i)}const Pr=["TopLeft","TopRight","BottomLeft","BottomRight"],kc=Pr.length,Ai=t=>typeof t=="string"?parseFloat(t):t,Vi=t=>typeof t=="number"||S.test(t);function Rc(t,e,n,i,s,o){s?(t.opacity=M(0,n.opacity!==void 0?n.opacity:1,Ec(i)),t.opacityExit=M(e.opacity!==void 0?e.opacity:1,0,Fc(i))):o&&(t.opacity=M(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let r=0;r<kc;r++){const a=`border${Pr[r]}Radius`;let l=Mi(e,a),c=Mi(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Vi(l)===Vi(c)?(t[a]=Math.max(M(Ai(l),Ai(c),i),0),(K.test(c)||K.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=M(e.rotate||0,n.rotate||0,i))}function Mi(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Ec=Sr(0,.5,Ns),Fc=Sr(.5,.95,z);function Sr(t,e,n){return i=>i<t?0:i>e?1:n(gt(t,e,i))}function Di(t,e){t.min=e.min,t.max=e.max}function U(t,e){Di(t.x,e.x),Di(t.y,e.y)}function ki(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Ri(t,e,n,i,s){return t-=e,t=ne(t,1/n,i),s!==void 0&&(t=ne(t,1/s,i)),t}function Lc(t,e=0,n=1,i=.5,s,o=t,r=t){if(K.test(e)&&(e=parseFloat(e),e=M(r.min,r.max,e/100)-r.min),typeof e!="number")return;let a=M(o.min,o.max,i);t===o&&(a-=e),t.min=Ri(t.min,e,n,a,s),t.max=Ri(t.max,e,n,a,s)}function Ei(t,e,[n,i,s],o,r){Lc(t,e[n],e[i],e[s],e.scale,o,r)}const Bc=["x","scaleX","originX"],Oc=["y","scaleY","originY"];function Fi(t,e,n,i){Ei(t.x,e,Bc,n?n.x:void 0,i?i.x:void 0),Ei(t.y,e,Oc,n?n.y:void 0,i?i.y:void 0)}function Li(t){return t.translate===0&&t.scale===1}function jr(t){return Li(t.x)&&Li(t.y)}function Bi(t,e){return t.min===e.min&&t.max===e.max}function $c(t,e){return Bi(t.x,e.x)&&Bi(t.y,e.y)}function Oi(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Cr(t,e){return Oi(t.x,e.x)&&Oi(t.y,e.y)}function $i(t){return H(t.x)/H(t.y)}function Ii(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Ic{constructor(){this.members=[]}add(e){Tn(this.members,e),e.scheduleRender()}remove(e){if(Pn(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const o=this.members[s];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function zc(t,e,n){let i="";const s=t.x.translate/e.x,o=t.y.translate/e.y,r=(n==null?void 0:n.z)||0;if((s||o||r)&&(i=`translate3d(${s}px, ${o}px, ${r}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:m,skewY:p}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),m&&(i+=`skewX(${m}deg) `),p&&(i+=`skewY(${p}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const rt={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},St=typeof window<"u"&&window.MotionDebug!==void 0,Se=["","X","Y","Z"],Hc={visibility:"hidden"},zi=1e3;let Nc=0;function je(t,e,n,i){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Ar(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Ls(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",V,!(s||o))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Ar(i)}function Vr({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(r={},a=e==null?void 0:e()){this.id=Nc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,St&&(rt.totalNodes=rt.resolvedTargetDeltas=rt.recalculatedProjection=0),this.nodes.forEach(Wc),this.nodes.forEach(Xc),this.nodes.forEach(Zc),this.nodes.forEach(Kc),St&&window.MotionDebug.record(rt)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=r,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Mc)}addEventListener(r,a){return this.eventHandlers.has(r)||this.eventHandlers.set(r,new Sn),this.eventHandlers.get(r).add(a)}notifyListeners(r,...a){const l=this.eventHandlers.get(r);l&&l.notify(...a)}hasListeners(r){return this.eventHandlers.has(r)}mount(r,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Ac(r),this.instance=r;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(r),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(r,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=Dc(f,250),qt.hasAnimatedSinceResize&&(qt.hasAnimatedSinceResize=!1,this.nodes.forEach(Ni))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:m,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||nu,{onLayoutAnimationStart:x,onLayoutAnimationComplete:v}=u.getProps(),T=!this.targetLayout||!Cr(this.targetLayout,p)||m,P=!f&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||f&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,P);const C={...vn(g,"layout"),onPlay:x,onComplete:v};(u.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else f||Ni(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const r=this.getStack();r&&r.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jc),this.animationId++)}getTransformTemplate(){const{visualElement:r}=this.options;return r&&r.getProps().transformTemplate}willUpdate(r=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Ar(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),r&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hi);return}this.isUpdating||this.nodes.forEach(Yc),this.isUpdating=!1,this.nodes.forEach(qc),this.nodes.forEach(Uc),this.nodes.forEach(_c),this.clearAllSnapshots();const a=G.now();F.delta=Z(0,1e3/60,a-F.timestamp),F.timestamp=a,F.isProcessing=!0,pe.update.process(F),pe.preRender.process(F),pe.render.process(F),F.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ln.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Gc),this.sharedNodes.forEach(Qc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,V.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){V.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const r=this.layout;this.layout=this.measure(!1),this.layoutCorrected=R(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,r?r.layoutBox:void 0)}updateScroll(r="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===r&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:r,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!s)return;const r=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!jr(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;r&&(a||st(this.latestValues)||u)&&(s(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(r=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return r&&(l=this.removeTransform(l)),iu(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var r;const{visualElement:a}=this.options;if(!a)return R();const l=a.measureViewportBox();if(!(((r=this.scroll)===null||r===void 0?void 0:r.wasRoot)||this.path.some(su))){const{scroll:u}=this.root;u&&(mt(l.x,u.offset.x),mt(l.y,u.offset.y))}return l}removeElementScroll(r){var a;const l=R();if(U(l,r),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&U(l,r),mt(l.x,d.offset.x),mt(l.y,d.offset.y))}return l}applyTransform(r,a=!1){const l=R();U(l,r);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&pt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),st(u.latestValues)&&pt(l,u.latestValues)}return st(this.latestValues)&&pt(l,this.latestValues),l}removeTransform(r){const a=R();U(a,r);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!st(c.latestValues))continue;Ye(c.latestValues)&&c.updateSnapshot();const u=R(),d=c.measurePageBox();U(u,d),Fi(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return st(this.latestValues)&&Fi(a,this.latestValues),a}setTargetDelta(r){this.targetDelta=r,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(r){this.options={...this.options,...r,crossfade:r.crossfade!==void 0?r.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==F.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(r=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(r||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=F.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=R(),this.relativeTargetOrigin=R(),Vt(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),U(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=R(),this.targetWithTransforms=R()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ac(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):U(this.target,this.layout.layoutBox),xr(this.target,this.targetDelta)):U(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=R(),this.relativeTargetOrigin=R(),Vt(this.relativeTargetOrigin,this.target,m.target),U(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}St&&rt.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ye(this.parent.latestValues)||vr(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var r;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((r=this.parent)===null||r===void 0)&&r.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===F.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;U(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,m=this.treeScale.y;gc(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=R());const{target:p}=a;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ki(this.prevProjectionDelta.x,this.projectionDelta.x),ki(this.prevProjectionDelta.y,this.projectionDelta.y)),At(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==m||!Ii(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ii(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p)),St&&rt.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(r=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),r){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ft(),this.projectionDelta=ft(),this.projectionDeltaWithTransform=ft()}setAnimationOrigin(r,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=ft();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=R(),m=l?l.source:void 0,p=this.layout?this.layout.source:void 0,g=m!==p,x=this.getStack(),v=!x||x.members.length<=1,T=!!(g&&!v&&this.options.crossfade===!0&&!this.path.some(eu));this.animationProgress=0;let P;this.mixTargetDelta=C=>{const w=C/1e3;Ui(d.x,r.x,w),Ui(d.y,r.y,w),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tu(this.relativeTarget,this.relativeTargetOrigin,f,w),P&&$c(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=R()),U(P,this.relativeTarget)),g&&(this.animationValues=u,Rc(u,c,this.latestValues,w,T,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(r){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=V.update(()=>{qt.hasAnimatedSinceResize=!0,this.currentAnimation=Cc(0,zi,{...r,onUpdate:a=>{this.mixTargetDelta(a),r.onUpdate&&r.onUpdate(a)},onComplete:()=>{r.onComplete&&r.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const r=this.getStack();r&&r.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zi),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const r=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=r;if(!(!a||!l||!c)){if(this!==r&&this.layout&&c&&Mr(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||R();const d=H(this.layout.layoutBox.x);l.x.min=r.target.x.min,l.x.max=l.x.min+d;const f=H(this.layout.layoutBox.y);l.y.min=r.target.y.min,l.y.max=l.y.min+f}U(a,l),pt(a,u),At(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(r,a){this.sharedNodes.has(r)||this.sharedNodes.set(r,new Ic),this.sharedNodes.get(r).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const r=this.getStack();return r?r.lead===this:!0}getLead(){var r;const{layoutId:a}=this.options;return a?((r=this.getStack())===null||r===void 0?void 0:r.lead)||this:this}getPrevLead(){var r;const{layoutId:a}=this.options;return a?(r=this.getStack())===null||r===void 0?void 0:r.prevLead:void 0}getStack(){const{layoutId:r}=this.options;if(r)return this.root.sharedNodes.get(r)}promote({needsReset:r,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),r&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const r=this.getStack();return r?r.relegate(this):!1}resetSkewAndRotation(){const{visualElement:r}=this.options;if(!r)return;let a=!1;const{latestValues:l}=r;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&je("z",r,c,this.animationValues);for(let u=0;u<Se.length;u++)je(`rotate${Se[u]}`,r,c,this.animationValues),je(`skew${Se[u]}`,r,c,this.animationValues);r.render();for(const u in c)r.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);r.scheduleRender()}getProjectionStyles(r){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Hc;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Gt(r==null?void 0:r.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const g={};return this.options.layoutId&&(g.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,g.pointerEvents=Gt(r==null?void 0:r.pointerEvents)||""),this.hasProjected&&!st(this.latestValues)&&(g.transform=u?u({},""):"none",this.hasProjected=!1),g}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=zc(this.projectionDeltaWithTransform,this.treeScale,f),u&&(c.transform=u(f,c.transform));const{x:m,y:p}=this.projectionDelta;c.transformOrigin=`${m.origin*100}% ${p.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in Zt){if(f[g]===void 0)continue;const{correct:x,applyTo:v}=Zt[g],T=c.transform==="none"?f[g]:x(f[g],d);if(v){const P=v.length;for(let C=0;C<P;C++)c[v[C]]=T}else c[g]=T}return this.options.layoutId&&(c.pointerEvents=d===this?Gt(r==null?void 0:r.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(r=>{var a;return(a=r.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Hi),this.root.sharedNodes.clear()}}}function Uc(t){t.updateLayout()}function _c(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=t.layout,{animationType:o}=t.options,r=n.source!==t.layout.source;o==="size"?_(d=>{const f=r?n.measuredBox[d]:n.layoutBox[d],m=H(f);f.min=i[d].min,f.max=f.min+m}):Mr(o,n.layoutBox,i)&&_(d=>{const f=r?n.measuredBox[d]:n.layoutBox[d],m=H(i[d]);f.max=f.min+m,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+m)});const a=ft();At(a,i,n.layoutBox);const l=ft();r?At(l,t.applyTransform(s,!0),n.measuredBox):At(l,i,n.layoutBox);const c=!jr(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:m}=d;if(f&&m){const p=R();Vt(p,n.layoutBox,f.layoutBox);const g=R();Vt(g,i,m.layoutBox),Cr(p,g)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=p,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function Wc(t){St&&rt.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Kc(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Gc(t){t.clearSnapshot()}function Hi(t){t.clearMeasurements()}function Yc(t){t.isLayoutDirty=!1}function qc(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ni(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Xc(t){t.resolveTargetDelta()}function Zc(t){t.calcProjection()}function Jc(t){t.resetSkewAndRotation()}function Qc(t){t.removeLeadSnapshot()}function Ui(t,e,n){t.translate=M(e.translate,0,n),t.scale=M(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _i(t,e,n,i){t.min=M(e.min,n.min,i),t.max=M(e.max,n.max,i)}function tu(t,e,n,i){_i(t.x,e.x,n.x,i),_i(t.y,e.y,n.y,i)}function eu(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nu={duration:.45,ease:[.4,0,.1,1]},Wi=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Ki=Wi("applewebkit/")&&!Wi("chrome/")?Math.round:z;function Gi(t){t.min=Ki(t.min),t.max=Ki(t.max)}function iu(t){Gi(t.x),Gi(t.y)}function Mr(t,e,n){return t==="position"||t==="preserve-aspect"&&!oc($i(e),$i(n),.2)}function su(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const ru=Vr({attachResizeListener:(t,e)=>Et(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ce={current:void 0},Dr=Vr({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Ce.current){const t=new ru({});t.mount(window),t.setOptions({layoutScroll:!0}),Ce.current=t}return Ce.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ou={pan:{Feature:Tc},drag:{Feature:wc,ProjectionNode:Dr,MeasureLayout:Tr}};function Yi(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,o=i[s];o&&V.postRender(()=>o(e,It(e)))}class au extends nt{mount(){const{current:e}=this.node;e&&(this.unmount=oa(e,n=>(Yi(this.node,n,"Start"),i=>Yi(this.node,i,"End"))))}unmount(){}}class lu extends nt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$t(Et(this.node.current,"focus",()=>this.onFocus()),Et(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qi(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),o=i[s];o&&V.postRender(()=>o(e,It(e)))}class cu extends nt{mount(){const{current:e}=this.node;e&&(this.unmount=ua(e,n=>(qi(this.node,n,"Start"),(i,{success:s})=>qi(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xe=new WeakMap,Ae=new WeakMap,uu=t=>{const e=Xe.get(t.target);e&&e(t)},hu=t=>{t.forEach(uu)};function du({root:t,...e}){const n=t||document;Ae.has(n)||Ae.set(n,{});const i=Ae.get(n),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver(hu,{root:t,...e})),i[s]}function fu(t,e,n){const i=du(e);return Xe.set(t,n),i.observe(t),()=>{Xe.delete(t),i.unobserve(t)}}const mu={some:0,all:1};class pu extends nt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:o}=e,r={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:mu[s]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),f=c?u:d;f&&f(l)};return fu(this.node.current,r,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(gu(e,n))&&this.startObserver()}unmount(){}}function gu({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const yu={inView:{Feature:pu},tap:{Feature:cu},focus:{Feature:lu},hover:{Feature:au}},vu={layout:{ProjectionNode:Dr,MeasureLayout:Tr}},Ze={current:null},kr={current:!1};function xu(){if(kr.current=!0,!!nn)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ze.current=t.matches;t.addListener(e),e()}else Ze.current=!1}const bu=[...nr,B,et],wu=t=>bu.find(er(t)),Xi=new WeakMap;function Tu(t,e,n){for(const i in e){const s=e[i],o=n[i];if(O(s))t.addValue(i,s);else if(O(o))t.addValue(i,kt(s,{owner:t}));else if(o!==s)if(t.hasValue(i)){const r=t.getValue(i);r.liveStyle===!0?r.jump(s):r.hasAnimated||r.set(s)}else{const r=t.getStaticValue(i);t.addValue(i,kt(r!==void 0?r:s,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Zi=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Pu{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:o,visualState:r},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Dn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=G.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,V.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=r;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=ue(n),this.isVariantNode=us(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in f){const p=f[m];l[m]!==void 0&&O(p)&&p.set(l[m],!1)}}mount(e){this.current=e,Xi.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),kr.current||xu(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ze.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Xi.delete(this.current),this.projection&&this.projection.unmount(),tt(this.notifyUpdate),tt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ct.has(e),s=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&V.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{s(),o(),r&&r(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yt){const n=yt[e];if(!n)continue;const{isEnabled:i,Feature:s}=n;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):R()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Zi.length;i++){const s=Zi[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const o="on"+s,r=e[o];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=Tu(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=kt(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(Qs(s)||_s(s))?s=parseFloat(s):!wu(s)&&et.test(n)&&(s=Xs(e,n)),this.setBaseTarget(e,O(s)?s.get():s)),O(s)?s.get():s}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const r=un(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);r&&(s=r[e])}if(i&&s!==void 0)return s;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!O(o)?o:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Sn),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Rr extends Pu{constructor(){super(...arguments),this.KeyframeResolver=ir}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;O(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Su(t){return window.getComputedStyle(t)}class ju extends Rr{constructor(){super(...arguments),this.type="html",this.renderInstance=xs}readValueFromInstance(e,n){if(ct.has(n)){const i=Mn(n);return i&&i.default||0}else{const i=Su(e),s=(gs(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return br(e,n)}build(e,n,i){fn(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return yn(e,n,i)}}class Cu extends Rr{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=R}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ct.has(n)){const i=Mn(n);return i&&i.default||0}return n=bs.has(n)?n:an(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Ps(e,n,i)}build(e,n,i){mn(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,s){ws(e,n,i,s)}mount(e){this.isSVGTag=gn(e.tagName),super.mount(e)}}const Au=(t,e)=>cn(t)?new Cu(e):new ju(e,{allowProjection:t!==b.Fragment}),Vu=Qo({...Zl,...yu,...ou,...vu},Au),I=mo(Vu);var Er={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ji=Q.createContext&&Q.createContext(Er),Mu=["attr","size","title"];function Du(t,e){if(t==null)return{};var n=ku(t,e),i,s;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)i=o[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function ku(t,e){if(t==null)return{};var n={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;n[i]=t[i]}return n}function ie(){return ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ie.apply(this,arguments)}function Qi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function se(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Qi(Object(n),!0).forEach(function(i){Ru(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ru(t,e,n){return e=Eu(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Eu(t){var e=Fu(t,"string");return typeof e=="symbol"?e:e+""}function Fu(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fr(t){return t&&t.map((e,n)=>Q.createElement(e.tag,se({key:n},e.attr),Fr(e.child)))}function E(t){return e=>Q.createElement(Lu,ie({attr:se({},t.attr)},e),Fr(t.child))}function Lu(t){var e=n=>{var{attr:i,size:s,title:o}=t,r=Du(t,Mu),a=s||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Q.createElement("svg",ie({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,r,{className:l,style:se(se({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Q.createElement("title",null,o),t.children)};return Ji!==void 0?Q.createElement(Ji.Consumer,null,n=>e(n)):e(Er)}function Lr(t){return E({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function Br(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function Or(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function Bu(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function Ou(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function $r(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"},child:[]}]})(t)}function lt(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"},child:[]}]})(t)}function Ir(t){return E({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"},child:[]}]})(t)}function $u(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(t)}function Iu(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(t)}function re(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(t)}function zu(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"},child:[]}]})(t)}function Hu(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(t)}function Ft(t){return E({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"},child:[]}]})(t)}function Nu(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function zr(t){return E({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function Uu(t){return E({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function Hr(t){return E({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"},child:[]}]})(t)}function _u(t){return E({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(t)}const Wu=y.nav`
  background-color: ${({theme:t,scrolled:e})=>e?"rgba(255, 255, 255, 0.95)":"transparent"};
  box-shadow: ${({scrolled:t})=>t?"0 2px 10px rgba(0, 0, 0, 0.1)":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
`,Ku=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    padding: 0 1.5rem;
  }
`,Gu=y(Je)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.primary.main};
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
  }
`,Yu=y.ul`
  display: flex;
  list-style: none;
  align-items: center;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: ${({isOpen:t})=>t?"0":"-100%"};
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1001;
  }
`,ts=y.li`
  margin: 0 1rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    margin: 1rem 0;
  }
`,qu=y(Je)`
  color: ${({theme:t,$isActive:e})=>e?t.colors.primary.main:t.colors.text.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({$isActive:t})=>t?"100%":"0"};
    height: 2px;
    background-color: ${({theme:t})=>t.colors.primary.main};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({theme:t})=>t.colors.primary.main};
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 1.2rem;
    padding: 0.8rem 0;
  }
`,Xu=y.button`
  display: none;
  background: none;
  border: none;
  color: ${({theme:t})=>t.colors.primary.main};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: block;
  }
`,Zu=y.div`
  display: ${({isOpen:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,Ju=()=>{const[t,e]=b.useState(!1),[n,i]=b.useState(!1),s=_r(),o=()=>{e(!t)},r=()=>{e(!1)};b.useEffect(()=>{const l=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]);const a=[{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/technology",label:"Technology"},{to:"/team",label:"Our Team"}];return h.jsxs(h.Fragment,{children:[h.jsx(Wu,{scrolled:n||t,children:h.jsxs(Ku,{children:[h.jsxs(Gu,{to:"/",children:[h.jsx(re,{})," HealthMonitor"]}),h.jsx(Xu,{onClick:o,children:t?h.jsx(Uu,{}):h.jsx(Ou,{})}),h.jsxs(Yu,{isOpen:t,children:[a.map(l=>h.jsx(ts,{children:h.jsx(qu,{to:l.to,$isActive:s.pathname===l.to,onClick:r,children:l.label})},l.to)),h.jsx(ts,{children:h.jsx(I.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:h.jsx(Je,{to:"/contact",className:"btn btn-primary",style:{padding:"0.5rem 1.5rem",borderRadius:"6px",backgroundColor:"#2D8BBA",color:"white",textDecoration:"none",fontWeight:"600",display:"inline-block",marginLeft:"1rem"},onClick:r,children:"Contact Us"})})})]})]})}),h.jsx(Zu,{isOpen:t,onClick:r})]})},Qu=y.footer`
  background-color: ${({theme:t})=>t.colors.primary.dark};
  color: white;
  padding: 3rem 0;
  margin-top: auto;
`,th=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Ve=y.div`
  h3 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${({theme:t})=>t.colors.primary.main};
      
      @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,eh=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    display: inline-block;
    
    &:hover {
      color: white;
      transform: translateX(5px);
    }
  }
`,nh=y.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    justify-content: center;
  }
  
  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({theme:t})=>t.colors.primary.main};
      transform: translateY(-3px);
    }
  }
`,ih=y.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  
  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,sh=()=>h.jsxs(Qu,{children:[h.jsxs(th,{children:[h.jsxs(Ve,{children:[h.jsx("h3",{children:"HealthMonitor"}),h.jsx("p",{children:"Revolutionizing healthcare with IoT technology for better patient monitoring and improved healthcare outcomes."}),h.jsxs(nh,{children:[h.jsx("a",{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:h.jsx(Lr,{})}),h.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:h.jsx(Or,{})}),h.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:h.jsx(Br,{})})]})]}),h.jsxs(Ve,{children:[h.jsx("h3",{children:"Quick Links"}),h.jsxs(eh,{children:[h.jsx("li",{children:h.jsx("a",{href:"/",children:"Home"})}),h.jsx("li",{children:h.jsx("a",{href:"/about",children:"About Us"})}),h.jsx("li",{children:h.jsx("a",{href:"/technology",children:"Technology"})}),h.jsx("li",{children:h.jsx("a",{href:"/team",children:"Our Team"})}),h.jsx("li",{children:h.jsx("a",{href:"/contact",children:"Contact"})})]})]}),h.jsxs(Ve,{children:[h.jsx("h3",{children:"Contact Us"}),h.jsxs("p",{children:["123 Healthcare St.",h.jsx("br",{}),"Medical District, City 10001",h.jsx("br",{}),"Email: info@healthmonitor.com",h.jsx("br",{}),"Phone: (123) 456-7890"]})]})]}),h.jsxs(ih,{children:["© ",new Date().getFullYear()," HealthMonitor. All rights reserved. Made with ",h.jsx(Iu,{style:{color:"#ff6b6b",margin:"0 4px"}})," by HealthMonitor Team"]})]}),rh=y.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    padding: 6rem 0 4rem;
  }
`,oh=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`,ah=y.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.lg}) {
    padding-right: 0;
    margin-bottom: 3rem;
  }
`,lh=y.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${({theme:t})=>t.colors.primary.dark};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: ${({theme:t})=>t.colors.primary.main};
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 2.5rem;
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.sm}) {
    font-size: 2rem;
  }
`,ch=y.p`
  font-size: 1.25rem;
  color: ${({theme:t})=>t.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 1.1rem;
    margin: 0 auto 2.5rem;
  }
`,uh=y.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    justify-content: center;
    flex-wrap: wrap;
  }
`,es=y(I.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &.primary {
    background-color: ${({theme:t})=>t.colors.primary.main};
    color: white;
    
    &:hover {
      background-color: ${({theme:t})=>t.colors.primary.dark};
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background-color: white;
    color: ${({theme:t})=>t.colors.primary.main};
    border: 2px solid ${({theme:t})=>t.colors.primary.main};
    
    &:hover {
      background-color: ${({theme:t})=>`${t.colors.primary.light}20`};
      transform: translateY(-2px);
    }
  }
  
  svg {
    margin-right: 0.5rem;
  }
`,hh=y.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.sm}) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`,Me=y.div`
  display: flex;
  align-items: center;
  
  svg {
    font-size: 2rem;
    color: ${({theme:t})=>t.colors.primary.main};
    margin-right: 1rem;
  }
`,De=y.div``,ke=y.div`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.primary.dark};
  line-height: 1.2;
`,Re=y.div`
  font-size: 0.9rem;
  color: ${({theme:t})=>t.colors.text.secondary};
`,dh=y.div`
  flex: 1;
  position: relative;
  
  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.lg}) {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`,fh=y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`,Wt=y.div`
  position: absolute;
  color: ${({theme:t})=>t.colors.primary.light};
  opacity: 0.3;
  font-size: 5rem;
  
  &:nth-child(1) {
    top: 10%;
    left: 5%;
    animation: float 15s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 10%;
    animation: float 20s ease-in-out infinite reverse;
  }
  
  &:nth-child(3) {
    bottom: 15%;
    left: 15%;
    animation: float 18s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
  }
`,mh=()=>h.jsxs(rh,{id:"home",children:[h.jsxs(fh,{children:[h.jsx(Wt,{children:h.jsx(re,{})}),h.jsx(Wt,{children:h.jsx(lt,{})}),h.jsx(Wt,{children:h.jsx(Ft,{})}),h.jsx(Wt,{children:h.jsx(Ir,{})})]}),h.jsxs(oh,{children:[h.jsx(ah,{children:h.jsxs(I.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[h.jsxs(lh,{children:["Revolutionizing ",h.jsx("span",{children:"Healthcare"})," with IoT Technology"]}),h.jsx(ch,{children:"Monitor vital signs in real-time, predict health issues before they occur, and provide better care with our advanced health monitoring platform."}),h.jsxs(uh,{children:[h.jsxs(es,{href:"#demo",className:"primary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsx(lt,{})," View Demo"]}),h.jsxs(es,{href:"#contact",className:"secondary",whileHover:{scale:1.05},whileTap:{scale:.95},children:[h.jsx(Hr,{})," Contact Us"]})]}),h.jsxs(hh,{children:[h.jsxs(Me,{children:[h.jsx(re,{}),h.jsxs(De,{children:[h.jsx(ke,{children:"24/7"}),h.jsx(Re,{children:"Real-time Monitoring"})]})]}),h.jsxs(Me,{children:[h.jsx(lt,{}),h.jsxs(De,{children:[h.jsx(ke,{children:"99.9%"}),h.jsx(Re,{children:"System Uptime"})]})]}),h.jsxs(Me,{children:[h.jsx(Ft,{}),h.jsxs(De,{children:[h.jsx(ke,{children:"10K+"}),h.jsx(Re,{children:"Active Users"})]})]})]})]})}),h.jsx(I.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2},children:h.jsx(dh,{children:h.jsx("img",{src:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",alt:"Healthcare Monitoring Dashboard"})})})]})]}),ph=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 1.5rem;
  }
`,gh=y(I.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`,yh=y.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: ${({theme:t,color:e})=>`${e}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: ${({color:t})=>t};
  font-size: 1.5rem;
`,vh=y.h3`
  font-size: 1.5rem;
  color: ${({theme:t})=>t.colors.primary.dark};
  margin-bottom: 1rem;
`,xh=y.p`
  color: ${({theme:t})=>t.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,bh=y.a`
  color: ${({theme:t})=>t.colors.primary.main};
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({theme:t})=>t.colors.primary.dark};
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`,wh=[{icon:h.jsx(re,{}),title:"Real-time Monitoring",description:"Continuously track vital signs including heart rate, blood pressure, oxygen levels, and more with our advanced IoT sensors.",color:"#E53E3E",link:"#",linkText:"Learn more"},{icon:h.jsx(lt,{}),title:"Advanced Analytics",description:"Get detailed insights and trends with our AI-powered analytics dashboard that helps identify potential health issues early.",color:"#3182CE",link:"#",linkText:"View analytics"},{icon:h.jsx($r,{}),title:"Smart Alerts",description:"Receive instant notifications for any abnormal readings or potential health concerns, ensuring timely intervention.",color:"#D69E2E",link:"#",linkText:"Configure alerts"},{icon:h.jsx(Ft,{}),title:"Mobile Access",description:"Monitor your health data anytime, anywhere with our user-friendly mobile application for iOS and Android.",color:"#805AD5",link:"#",linkText:"Download app"},{icon:h.jsx(zr,{}),title:"Secure & Private",description:"Your health data is encrypted and protected with enterprise-grade security measures and HIPAA compliance.",color:"#38A169",link:"#",linkText:"Security details"},{icon:h.jsx($u,{}),title:"Data History",description:"Access your complete health history with detailed reports and export options for sharing with healthcare providers.",color:"#4C51BF",link:"#",linkText:"View history"}],Th=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.2}}},e={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}}};return h.jsx(ph,{as:I.div,variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:wh.map((n,i)=>h.jsxs(gh,{as:I.div,variants:e,whileHover:{scale:1.03},children:[h.jsx(yh,{color:n.color,children:n.icon}),h.jsx(vh,{children:n.title}),h.jsx(xh,{children:n.description}),h.jsxs(bh,{href:n.link,children:[n.linkText," ",h.jsx("span",{children:"→"})]})]},i))})},Ph=y.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 2rem;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: calc(50% - 2px);
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, 
      ${({theme:t})=>t.colors.primary.main}, 
      ${({theme:t})=>t.colors.secondary.main}
    );
    border-radius: 2px;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      left: 40px;
    }
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    padding: 0 1.5rem 0 0;
  }
`,Lt=y(I.div)`
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  width: 100%;
  max-width: 1000px;
  
  &:nth-child(odd) {
    flex-direction: row;
    text-align: right;
    justify-content: flex-start;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      flex-direction: row;
      text-align: left;
      justify-content: flex-start;
    }
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: left;
    justify-content: flex-end;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    margin-bottom: 3rem;
  }
`,Sh=y.div`
  flex: 0 1 50%;
  padding: 0 4rem;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    padding-left: 0;
  }
  
  &:nth-child(even) {
    padding-right: 0;
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    flex: 1;
    padding: 0 0 0 6rem !important;
  }
  
  ${Lt}:nth-child(odd) & {
    margin-left: auto;
  }
  
  ${Lt}:nth-child(even) & {
    margin-right: auto;
  }
`,jh=y.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  border: 4px solid ${({theme:t})=>t.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${({theme:t})=>t.colors.primary.main};
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin: 0 2rem;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
    margin-right: 1rem;
  }
`,Ch=y.h3`
  font-size: 1.5rem;
  color: ${({theme:t})=>t.colors.primary.dark};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: ${({theme:t})=>t.colors.primary.main};
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 1.25rem;
  }
`,Ah=y.p`
  color: ${({theme:t})=>t.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`,Vh=y.div`
  position: absolute;
  top: 50%;
  width: 40px;
  height: 4px;
  background: linear-gradient(
    to right,
    ${({theme:t})=>t.colors.primary.main},
    ${({theme:t})=>t.colors.secondary.main}
  );
  transform: translateY(-50%);
  
  ${Lt}:nth-child(odd) & {
    right: -20px;
    left: auto;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      right: auto;
      left: 105px;
      top: 100%;
      width: 4px;
      height: 30px;
      transform: none;
    }
  }
  
  ${Lt}:nth-child(even) & {
    left: -20px;
    right: auto;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      left: 35px;
      right: auto;
      top: 100%;
      width: 4px;
      height: 30px;
      transform: none;
    }
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    display: none;
  }
`,Mh=[{number:1,icon:h.jsx(Hr,{}),title:"Consultation & Setup",description:"Schedule a consultation with our healthcare professionals to assess your needs. We'll help you set up the monitoring devices and connect them to your account."},{number:2,icon:h.jsx(Ft,{}),title:"Connect Devices",description:"Pair your wearable devices with our mobile app. Our platform supports a wide range of health monitoring devices for comprehensive tracking."},{number:3,icon:h.jsx(lt,{}),title:"Real-time Monitoring",description:"Your health data is continuously monitored and analyzed. Our AI system detects patterns and provides actionable insights about your health status."},{number:4,icon:h.jsx($r,{}),title:"Get Alerts & Reports",description:"Receive instant notifications for any concerning health metrics. Access detailed reports and share them with your healthcare provider."}],Dh=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3,delayChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return h.jsx(Ph,{as:I.div,variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:Mh.map((n,i)=>h.jsxs(Lt,{as:I.div,variants:e,whileHover:{scale:1.02},children:[h.jsx(jh,{children:n.number}),h.jsxs(Sh,{children:[h.jsxs(Ch,{children:[n.icon,n.title]}),h.jsx(Ah,{children:n.description})]}),h.jsx(Vh,{})]},i))})},kh=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`,Rh=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,Eh=y(I.div)`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 4rem;
    color: ${({theme:t})=>`${t.colors.primary.light}30`};
    font-family: serif;
    line-height: 1;
  }
  
  .quote {
    color: ${({theme:t})=>t.colors.text.secondary};
    font-style: italic;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }
  
  .author {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
    border: 3px solid ${({theme:t})=>t.colors.primary.light};
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .author-info {
    h4 {
      color: ${({theme:t})=>t.colors.primary.dark};
      margin: 0 0 0.25rem;
    }
    
    p {
      color: ${({theme:t})=>t.colors.text.secondary};
      margin: 0;
      font-size: 0.9rem;
    }
  }
`,Fh=[{id:1,quote:"HealthMonitor has transformed how we monitor our patients with chronic conditions. The real-time alerts have helped us intervene early on multiple occasions.",author:"Dr. James Wilson",role:"Cardiologist, City Medical Center",avatar:"https://randomuser.me/api/portraits/men/32.jpg"},{id:2,quote:"As someone with diabetes, having my vitals monitored 24/7 gives me peace of mind. The app is intuitive and the support team is incredibly responsive.",author:"Maria Garcia",role:"Patient",avatar:"https://randomuser.me/api/portraits/women/44.jpg"},{id:3,quote:"The analytics dashboard provides insights we've never had before. It's helping us identify trends and improve patient outcomes across our network.",author:"Dr. Sarah Johnson",role:"Chief Medical Officer, HealthPlus",avatar:"https://randomuser.me/api/portraits/women/63.jpg"}],Lh={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},Bh={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}},Oh=()=>h.jsx(kh,{children:h.jsx(I.div,{variants:Lh,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:h.jsx(Rh,{children:Fh.map(t=>h.jsxs(Eh,{variants:Bh,whileHover:{y:-5},children:[h.jsx(Nu,{style:{color:"#e2e8f0",fontSize:"2rem",marginBottom:"1rem"}}),h.jsx("p",{className:"quote",children:t.quote}),h.jsxs("div",{className:"author",children:[h.jsx("div",{className:"author-avatar",children:h.jsx("img",{src:t.avatar,alt:t.author})}),h.jsxs("div",{className:"author-info",children:[h.jsx("h4",{children:t.author}),h.jsx("p",{children:t.role})]})]})]},t.id))})})}),$h=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, ${({theme:t})=>t.colors.primary.main}, ${({theme:t})=>t.colors.secondary.main});
  border-radius: 16px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`,Ih=y.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`,zh=y.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 2rem;
  }
`,Hh=y.p`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 1.1rem;
  }
`,Nh=y.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,Uh=y(I.a)`
  display: inline-flex;
  align-items: center;
  background: white;
  color: ${({theme:t})=>t.colors.primary.main};
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`,_h=y(I.a)`
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`,Wh=()=>h.jsx($h,{children:h.jsxs(Ih,{children:[h.jsx(zh,{children:"Ready to transform healthcare monitoring?"}),h.jsx(Hh,{children:"Join thousands of healthcare providers and patients who trust our platform for reliable, real-time health monitoring and actionable insights."}),h.jsxs(Nh,{children:[h.jsxs(Uh,{href:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:["Get Started",h.jsx(Bu,{})]}),h.jsx(_h,{href:"/demo",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Request Demo"})]})]})}),Kh=y.div`
  display: flex;
  flex-direction: column;
`,Kt=y.section`
  padding: 6rem 0;
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    padding: 4rem 0;
  }
`,Ee=y.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${({theme:t})=>t.colors.primary.dark};
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, 
      ${({theme:t})=>t.colors.primary.main}, 
      ${({theme:t})=>t.colors.secondary.main}
    );
    border-radius: 2px;
  }
  
  @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,Gh=()=>h.jsxs(Kh,{children:[h.jsx(mh,{}),h.jsxs(Kt,{id:"features",children:[h.jsx(Ee,{children:"Key Features"}),h.jsx(Th,{})]}),h.jsxs(Kt,{id:"how-it-works",style:{backgroundColor:"#f8fafc"},children:[h.jsx(Ee,{children:"How It Works"}),h.jsx(Dh,{})]}),h.jsxs(Kt,{id:"testimonials",children:[h.jsx(Ee,{children:"What Our Users Say"}),h.jsx(Oh,{})]}),h.jsx(Kt,{id:"cta",style:{padding:"4rem 0"},children:h.jsx(Wh,{})})]}),Yh=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,qh=y.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,Xh=y.section`
  margin: 5rem 0;
  
  h2 {
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 2rem;
    text-align: center;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`,Zh=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`,Fe=y.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${({theme:t})=>t.colors.primary.main};
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 1rem;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    line-height: 1.6;
  }
`,Jh=()=>h.jsxs(Yh,{children:[h.jsxs(qh,{children:[h.jsx("h1",{children:"About HealthMonitor"}),h.jsx("p",{children:"We are revolutionizing healthcare through innovative IoT technology, providing real-time monitoring solutions that improve patient outcomes and transform the way healthcare is delivered."})]}),h.jsxs(Xh,{children:[h.jsx("h2",{children:"Our Mission"}),h.jsx("p",{children:"Our mission is to make healthcare more accessible, efficient, and effective through cutting-edge technology. We believe in empowering both patients and healthcare providers with the tools they need for better health management."})]}),h.jsxs(Zh,{children:[h.jsxs(Fe,{children:[h.jsx(zu,{}),h.jsx("h3",{children:"50+"}),h.jsx("p",{children:"Healthcare Partners"})]}),h.jsxs(Fe,{children:[h.jsx(_u,{}),h.jsx("h3",{children:"10,000+"}),h.jsx("p",{children:"Active Users"})]}),h.jsxs(Fe,{children:[h.jsx(lt,{}),h.jsx("h3",{children:"99.9%"}),h.jsx("p",{children:"System Uptime"})]})]})]}),Qh=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,td=y.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,ed=y.section`
  margin: 4rem 0;
`,nd=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,id=y.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${({theme:t})=>`${t.colors.primary.light}20`};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${({theme:t})=>t.colors.primary.main};
    font-size: 1.5rem;
  }
  
  h3 {
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,sd=y.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0;
  
  li {
    margin-bottom: 0.75rem;
    color: ${({theme:t})=>t.colors.text.secondary};
    display: flex;
    align-items: flex-start;
    
    &::before {
      content: '✓';
      color: ${({theme:t})=>t.colors.primary.main};
      font-weight: bold;
      margin-right: 0.75rem;
    }
  }
`,rd=[{icon:h.jsx(Hu,{}),title:"Wearable Sensors",description:"Advanced IoT sensors that continuously monitor vital signs with medical-grade accuracy.",features:["Heart rate monitoring","Blood oxygen levels","Body temperature","Activity tracking","Sleep analysis"]},{icon:h.jsx(Ft,{}),title:"Mobile Application",description:"User-friendly mobile app for real-time health data visualization and alerts.",features:["Real-time monitoring","Health insights","Medication reminders","Emergency alerts","Health reports"]},{icon:h.jsx(Ir,{}),title:"Cloud Platform",description:"Secure cloud infrastructure for data storage and processing.",features:["HIPAA compliant","Unlimited data storage","Data encryption","Automatic backups","Scalable infrastructure"]},{icon:h.jsx(zr,{}),title:"Security",description:"Enterprise-grade security to protect sensitive health data.",features:["End-to-end encryption","Two-factor authentication","Regular security audits","Data anonymization","Compliance with regulations"]},{icon:h.jsx(lt,{}),title:"Analytics",description:"AI-powered analytics for predictive healthcare insights.",features:["Health trend analysis","Anomaly detection","Predictive modeling","Custom reports","Health score"]}],od=()=>h.jsxs(Qh,{children:[h.jsxs(td,{children:[h.jsx("h1",{children:"Our Technology"}),h.jsx("p",{children:"We combine cutting-edge IoT technology with advanced data analytics to deliver comprehensive health monitoring solutions that are both powerful and easy to use."})]}),h.jsx(ed,{children:h.jsx(nd,{children:rd.map((t,e)=>h.jsxs(id,{children:[h.jsx("div",{className:"icon",children:t.icon}),h.jsx("h3",{children:t.title}),h.jsx("p",{children:t.description}),h.jsx(sd,{children:t.features.map((n,i)=>h.jsx("li",{children:n},i))})]},e))})})]}),ad=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,ld=y.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 3rem;
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    font-size: 1.25rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`,cd=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,ud=y.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,hd=y.div`
  width: 100%;
  height: 300px;
  background: ${({theme:t})=>t.colors.background.light};
  background-image: url(${t=>t.imageUrl||"https://via.placeholder.com/400x400?text=Team+Member"});
  background-size: cover;
  background-position: center;
`,dd=y.div`
  padding: 1.5rem;
  text-align: center;
  
  h3 {
    color: ${({theme:t})=>t.colors.primary.dark};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
  
  .position {
    color: ${({theme:t})=>t.colors.primary.main};
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
  
  p {
    color: ${({theme:t})=>t.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,fd=y.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  a {
    color: ${({theme:t})=>t.colors.text.secondary};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    
    &:hover {
      background: ${({theme:t})=>t.colors.primary.light};
      color: white;
      transform: translateY(-3px);
    }
  }
`,md=[{name:"Meghana Gs",position:"Chief Medical Officer",bio:"Board-certified physician with 15+ years of experience in cardiology and digital health solutions.",image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",social:{linkedin:"#",twitter:"#"}},{name:"Swetha",position:"Chief Technology Officer",bio:"Technology leader with expertise in IoT and AI, previously led engineering teams at major tech companies.",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",social:{linkedin:"#",github:"#"}},{name:"Prem Sai",position:"Head of Product",bio:"Product strategist with a passion for creating user-centered healthcare solutions.",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",social:{linkedin:"#",twitter:"#"}}],pd=()=>h.jsxs(ad,{children:[h.jsxs(ld,{children:[h.jsx("h1",{children:"Our Team"}),h.jsx("p",{children:"Meet the passionate team behind HealthMonitor, dedicated to transforming healthcare through innovative technology and exceptional expertise."})]}),h.jsx(cd,{children:md.map((t,e)=>h.jsxs(ud,{children:[h.jsx(hd,{imageUrl:t.image}),h.jsxs(dd,{children:[h.jsx("h3",{children:t.name}),h.jsx("span",{className:"position",children:t.position}),h.jsx("p",{children:t.bio}),h.jsxs(fd,{children:[t.social.linkedin&&h.jsx("a",{href:t.social.linkedin,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Br,{})}),t.social.twitter&&h.jsx("a",{href:t.social.twitter,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Or,{})}),t.social.github&&h.jsx("a",{href:t.social.github,target:"_blank",rel:"noopener noreferrer",children:h.jsx(Lr,{})})]})]})]},e))})]}),gd=y.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,yd=y(I.main)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;function vd(){return h.jsxs(gd,{children:[h.jsx(Ju,{}),h.jsx(ro,{mode:"wait",children:h.jsx(yd,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:h.jsxs(Wr,{children:[h.jsx(zt,{path:"/",element:h.jsx(Gh,{})}),h.jsx(zt,{path:"/about",element:h.jsx(Jh,{})}),h.jsx(zt,{path:"/technology",element:h.jsx(od,{})}),h.jsx(zt,{path:"/team",element:h.jsx(pd,{})})]})})}),h.jsx(sh,{})]})}const xd=Kr`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${({theme:t})=>t.typography.fontFamily};
    color: ${({theme:t})=>t.colors.text.primary};
    background-color: ${({theme:t})=>t.colors.background.default};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.2;
  }
  
  h1 {
    font-size: ${({theme:t})=>t.typography.h1.fontSize};
    font-weight: ${({theme:t})=>t.typography.h1.fontWeight};
  }
  
  h2 {
    font-size: ${({theme:t})=>t.typography.h2.fontSize};
    font-weight: ${({theme:t})=>t.typography.h2.fontWeight};
  }
  
  h3 {
    font-size: ${({theme:t})=>t.typography.h3.fontSize};
    font-weight: ${({theme:t})=>t.typography.h3.fontWeight};
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({theme:t})=>t.colors.primary.main};
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({theme:t})=>t.colors.primary.dark};
    }
  }
  
  button, .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
  
  .btn-primary {
    background-color: ${({theme:t})=>t.colors.primary.main};
    color: white;
    
    &:hover {
      background-color: ${({theme:t})=>t.colors.primary.dark};
    }
  }
  
  .btn-outline {
    background-color: transparent;
    border: 2px solid ${({theme:t})=>t.colors.primary.main};
    color: ${({theme:t})=>t.colors.primary.main};
    
    &:hover {
      background-color: ${({theme:t})=>t.colors.primary.light}20;
    }
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: ${({theme:t})=>t.breakpoints.md}) {
      padding: 3rem 0;
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`,bd={colors:{primary:{main:"#2D8BBA",light:"#5DABD3",dark:"#1A5F8B",contrastText:"#FFFFFF"},secondary:{main:"#4A90E2",light:"#7AB3F0",dark:"#2E5C9E",contrastText:"#FFFFFF"},success:{main:"#2ECC71",light:"#5CDE8C",dark:"#1F9D55",contrastText:"#FFFFFF"},background:{default:"#F8F9FA",paper:"#FFFFFF",light:"#F1F5F9"},text:{primary:"#1E293B",secondary:"#64748B",disabled:"#94A3B8"}},typography:{fontFamily:'"Inter", "Segoe UI", sans-serif',h1:{fontSize:"3rem",fontWeight:700,lineHeight:1.2},h2:{fontSize:"2.25rem",fontWeight:600,lineHeight:1.3},h3:{fontSize:"1.75rem",fontWeight:600,lineHeight:1.4},body1:{fontSize:"1rem",lineHeight:1.6},button:{fontWeight:600,textTransform:"none"}},spacing:t=>`${t*8}px`,shadows:["none","0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)","0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)","0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)","0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"],breakpoints:{xs:"0px",sm:"600px",md:"900px",lg:"1200px",xl:"1536px"}};Le.createRoot(document.getElementById("root")).render(h.jsx(Q.StrictMode,{children:h.jsx(Gr,{children:h.jsxs(Yr,{theme:bd,children:[h.jsx(xd,{}),h.jsx(vd,{})]})})}));
//# sourceMappingURL=index-DPwEwonm.js.map
