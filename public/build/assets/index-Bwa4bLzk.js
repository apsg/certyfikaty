import{B as y,aL as E,ag as _,ar as b,aS as S,aT as F,a7 as g}from"./app-Cq_0W1p7.js";import{B as O}from"./index-njMZyE4e.js";var j=y.extend({name:"focustrap-directive"}),P=O.extend({style:j});function m(o){"@babel/helpers - typeof";return m=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(o)}function h(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})),t.push.apply(t,r)}return t}function $(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?h(Object(t),!0).forEach(function(r){T(o,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))})}return o}function T(o,e,t){return(e=w(e))in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function w(o){var e=x(o,"string");return m(e)=="symbol"?e:e+""}function x(o,e){if(m(o)!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var r=t.call(o,e);if(m(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}var I=P.extend("focustrap",{mounted:function(e,t){var r=t.value||{},n=r.disabled;n||(this.createHiddenFocusableElements(e,t),this.bind(e,t),this.autoElementFocus(e,t)),e.setAttribute("data-pd-focustrap",!0),this.$el=e},updated:function(e,t){var r=t.value||{},n=r.disabled;n&&this.unbind(e)},unmounted:function(e){this.unbind(e)},methods:{getComputedSelector:function(e){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(e??"")},bind:function(e,t){var r=this,n=t.value||{},s=n.onFocusIn,i=n.onFocusOut;e.$_pfocustrap_mutationobserver=new MutationObserver(function(u){u.forEach(function(l){if(l.type==="childList"&&!e.contains(document.activeElement)){var f=function(a){var c=F(a)?F(a,r.getComputedSelector(e.$_pfocustrap_focusableselector))?a:b(e,r.getComputedSelector(e.$_pfocustrap_focusableselector)):b(a);return g(c)?c:a.nextSibling&&f(a.nextSibling)};_(f(l.nextSibling))}})}),e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_mutationobserver.observe(e,{childList:!0}),e.$_pfocustrap_focusinlistener=function(u){return s&&s(u)},e.$_pfocustrap_focusoutlistener=function(u){return i&&i(u)},e.addEventListener("focusin",e.$_pfocustrap_focusinlistener),e.addEventListener("focusout",e.$_pfocustrap_focusoutlistener)},unbind:function(e){e.$_pfocustrap_mutationobserver&&e.$_pfocustrap_mutationobserver.disconnect(),e.$_pfocustrap_focusinlistener&&e.removeEventListener("focusin",e.$_pfocustrap_focusinlistener)&&(e.$_pfocustrap_focusinlistener=null),e.$_pfocustrap_focusoutlistener&&e.removeEventListener("focusout",e.$_pfocustrap_focusoutlistener)&&(e.$_pfocustrap_focusoutlistener=null)},autoFocus:function(e){this.autoElementFocus(this.$el,{value:$($({},e),{},{autoFocus:!0})})},autoElementFocus:function(e,t){var r=t.value||{},n=r.autoFocusSelector,s=n===void 0?"":n,i=r.firstFocusableSelector,u=i===void 0?"":i,l=r.autoFocus,f=l===void 0?!1:l,p=b(e,"[autofocus]".concat(this.getComputedSelector(s)));f&&!p&&(p=b(e,this.getComputedSelector(u))),_(p)},onFirstHiddenElementFocus:function(e){var t,r=e.currentTarget,n=e.relatedTarget,s=n===r.$_pfocustrap_lasthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(n))?b(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_lasthiddenfocusableelement;_(s)},onLastHiddenElementFocus:function(e){var t,r=e.currentTarget,n=e.relatedTarget,s=n===r.$_pfocustrap_firsthiddenfocusableelement||!((t=this.$el)!==null&&t!==void 0&&t.contains(n))?E(r.parentElement,this.getComputedSelector(r.$_pfocustrap_focusableselector)):r.$_pfocustrap_firsthiddenfocusableelement;_(s)},createHiddenFocusableElements:function(e,t){var r=this,n=t.value||{},s=n.tabIndex,i=s===void 0?0:s,u=n.firstFocusableSelector,l=u===void 0?"":u,f=n.lastFocusableSelector,p=f===void 0?"":f,a=function(v){return S("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:i,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:v==null?void 0:v.bind(r)})},c=a(this.onFirstHiddenElementFocus),d=a(this.onLastHiddenElementFocus);c.$_pfocustrap_lasthiddenfocusableelement=d,c.$_pfocustrap_focusableselector=l,c.setAttribute("data-pc-section","firstfocusableelement"),d.$_pfocustrap_firsthiddenfocusableelement=c,d.$_pfocustrap_focusableselector=p,d.setAttribute("data-pc-section","lastfocusableelement"),e.prepend(c),e.append(d)}}});export{I as F};
