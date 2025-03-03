import{aV as U,B as P,m as A,aW as j,aX as ie,a7 as M,aY as w,aZ as ae,a_ as oe,a$ as le,b0 as O,b1 as se,D as he,a6 as ue,b2 as ge,b3 as W,b4 as Z,F as ye,R as B,aJ as K,aI as G,h as $e,ab as _e,aa as be,S as Se,aS as Pe,p as z,c as Te,g as Oe,o as de,a0 as Ce,f as we,b as ke}from"./app-Cq_0W1p7.js";var F={};function ce(t="pui_id_"){return F.hasOwnProperty(t)||(F[t]=0),F[t]++,`${t}${F[t]}`}function je(){let t=[];const e=(o,a,l=999)=>{const u=i(o,a,l),d=u.value+(u.key===o?0:l)+1;return t.push({key:o,value:d}),d},n=o=>{t=t.filter(a=>a.value!==o)},r=(o,a)=>i(o).value,i=(o,a,l=0)=>[...t].reverse().find(u=>!0)||{key:o,value:l},s=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:s,set:(o,a,l)=>{a&&(a.style.zIndex=String(e(o,!0,l)))},clear:o=>{o&&(n(s(o)),o.style.zIndex="")},getCurrent:o=>r(o)}}var ut=je(),k={_loadedStyleNames:new Set,getLoadedStyleNames:function(){return this._loadedStyleNames},isStyleNameLoaded:function(e){return this._loadedStyleNames.has(e)},setLoadedStyleName:function(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName:function(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames:function(){this._loadedStyleNames.clear()}},X=P.extend({name:"common"});function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function Ve(t){return ve(t)||Ie(t)||fe(t)||me()}function Ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function I(t,e){return ve(t)||Le(t,e)||fe(t,e)||me()}function me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fe(t,e){if(t){if(typeof t=="string")return Y(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}function Y(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Le(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function ve(t){if(Array.isArray(t))return t}function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?J(Object(n),!0).forEach(function(r){L(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function L(t,e,n){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ae(t){var e=xe(t,"string");return x(e)=="symbol"?e:e+""}function xe(t,e){if(x(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(x(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pe={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0},dt:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){e||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))}},dt:{immediate:!0,handler:function(e){var n=this;e?(this._loadScopedThemeStyles(e),this._themeChangeListener(function(){return n._loadScopedThemeStyles(e)})):this._unloadScopedThemeStyles()}}},scopedStyleEl:void 0,rootEl:void 0,$attrSelector:void 0,beforeCreate:function(){var e,n,r,i,s,o,a,l,u,d,f,m=(e=this.pt)===null||e===void 0?void 0:e._usept,v=m?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,p=m?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=p||v)===null||i===void 0||(i=i.hooks)===null||i===void 0||(s=i.onBeforeCreate)===null||s===void 0||s.call(i);var _=(o=this.$primevueConfig)===null||o===void 0||(o=o.pt)===null||o===void 0?void 0:o._usept,b=_?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,T=_?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(u=this.$primevue)===null||u===void 0||(u=u.config)===null||u===void 0?void 0:u.pt;(d=T||b)===null||d===void 0||(d=d[this.$.type.name])===null||d===void 0||(d=d.hooks)===null||d===void 0||(f=d.onBeforeCreate)===null||f===void 0||f.call(d),this.$attrSelector=ce("pc")},created:function(){this._hook("onCreated")},beforeMount:function(){this.rootEl=he(this.$el,'[data-pc-name="'.concat(w(this.$.type.name),'"]')),this.rootEl&&(this.$attrSelector&&!this.rootEl.hasAttribute(this.$attrSelector)&&this.rootEl.setAttribute(this.$attrSelector,""),this.rootEl.$pc=g({name:this.$.type.name,attrSelector:this.$attrSelector},this.$params)),this._loadStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._unloadScopedThemeStyles(),this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_mergeProps:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return se(e)?e.apply(void 0,r):A.apply(void 0,r)},_loadStyles:function(){var e=this,n=function(){k.isStyleNameLoaded("base")||(P.loadCSS(e.$styleOptions),e._loadGlobalStyles(),k.setLoadedStyleName("base")),e._loadThemeStyles()};n(),this._themeChangeListener(n)},_loadCoreStyles:function(){var e,n;!k.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name&&(X.loadCSS(this.$styleOptions),this.$options.style&&this.$style.loadCSS(this.$styleOptions),k.setLoadedStyleName(this.$style.name))},_loadGlobalStyles:function(){var e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);M(e)&&P.load(e,g({name:"global"},this.$styleOptions))},_loadThemeStyles:function(){var e,n;if(!(this.isUnstyled||this.$theme==="none")){if(!O.isStyleNameLoaded("common")){var r,i,s=((r=this.$style)===null||r===void 0||(i=r.getCommonTheme)===null||i===void 0?void 0:i.call(r))||{},o=s.primitive,a=s.semantic,l=s.global,u=s.style;P.load(o==null?void 0:o.css,g({name:"primitive-variables"},this.$styleOptions)),P.load(a==null?void 0:a.css,g({name:"semantic-variables"},this.$styleOptions)),P.load(l==null?void 0:l.css,g({name:"global-variables"},this.$styleOptions)),P.loadTheme(g({name:"global-style"},this.$styleOptions),u),O.setLoadedStyleName("common")}if(!O.isStyleNameLoaded((e=this.$style)===null||e===void 0?void 0:e.name)&&(n=this.$style)!==null&&n!==void 0&&n.name){var d,f,m,v,p=((d=this.$style)===null||d===void 0||(f=d.getComponentTheme)===null||f===void 0?void 0:f.call(d))||{},_=p.css,b=p.style;(m=this.$style)===null||m===void 0||m.load(_,g({name:"".concat(this.$style.name,"-variables")},this.$styleOptions)),(v=this.$style)===null||v===void 0||v.loadTheme(g({name:"".concat(this.$style.name,"-style")},this.$styleOptions),b),O.setLoadedStyleName(this.$style.name)}if(!O.isStyleNameLoaded("layer-order")){var T,S,c=(T=this.$style)===null||T===void 0||(S=T.getLayerOrderThemeCSS)===null||S===void 0?void 0:S.call(T);P.load(c,g({name:"layer-order",first:!0},this.$styleOptions)),O.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(e){var n,r,i,s=((n=this.$style)===null||n===void 0||(r=n.getPresetTheme)===null||r===void 0?void 0:r.call(n,e,"[".concat(this.$attrSelector,"]")))||{},o=s.css,a=(i=this.$style)===null||i===void 0?void 0:i.load(o,g({name:"".concat(this.$attrSelector,"-").concat(this.$style.name)},this.$styleOptions));this.scopedStyleEl=a.el},_unloadScopedThemeStyles:function(){var e;(e=this.scopedStyleEl)===null||e===void 0||(e=e.value)===null||e===void 0||e.remove()},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};k.clearLoadedStyleNames(),le.on("theme:change",e)},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return oe(e,n,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,o=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$primevueConfig)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,f=d===void 0?!1:d,m=s?o?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,v=o?void 0:this._getPTSelf(n,this._getPTClassValue,r,g(g({},i),{},{global:m||{}})),p=this._getPTDatasets(r);return u||!u&&v?f?this._mergeProps(f,m,v,p):g(g(g({},m),v),p):g(g({},v),p)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return A(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",s=r==="root"&&M((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&g(g({},r==="root"&&g(g(L({},"".concat(i,"name"),w(s?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),s&&L({},"".concat(i,"extend"),w(this.$.type.name))),ae()&&L({},"".concat(this.$attrSelector),""))),{},L({},"".concat(i,"section"),w(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return j(e)||ie(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,s=function(a){var l,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=i?i(a):a,f=w(r),m=w(n.$name);return(l=u?f!==m?d==null?void 0:d[f]:void 0:d==null?void 0:d[f])!==null&&l!==void 0?l:d};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:s(e.originalValue),value:s(e.value)}:s(e,!0)},_usePT:function(e,n,r,i){var s=function(_){return n(_,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var o,a=e._usept||((o=this.$primevueConfig)===null||o===void 0?void 0:o.ptOptions)||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,f=d===void 0?!1:d,m=s(e.originalValue),v=s(e.value);return m===void 0&&v===void 0?void 0:j(v)?v:j(m)?m:u||!u&&v?f?this._mergeProps(f,m,v):g(g({},m),v):v}return s(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,g(g({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return A(this.$_attrsWithoutPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,g({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,g(g({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,e,g(g({},this.$params),r)),s=this._getOptionValue(X.inlineStyles,e,g(g({},this.$params),r));return[s,i]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return U(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$primevueConfig)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,g({},n.$params))||U(r,g({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$primevueConfig)===null||e===void 0?void 0:e.unstyled},$inProps:function(){var e,n=Object.keys(((e=this.$.vnode)===null||e===void 0?void 0:e.props)||{});return Object.fromEntries(Object.entries(this.$props).filter(function(r){var i=I(r,1),s=i[0];return n==null?void 0:n.includes(s)}))},$theme:function(){var e;return(e=this.$primevueConfig)===null||e===void 0?void 0:e.theme},$style:function(){return g(g({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$styleOptions:function(){var e;return{nonce:(e=this.$primevueConfig)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}},$primevueConfig:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs}}},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=I(e,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,n){var r=I(n,2),i=r[0],s=r[1],o=i.split(":"),a=Ve(o),l=a.slice(1);return l==null||l.reduce(function(u,d,f,m){return!u[d]&&(u[d]=f===m.length-1?s:{}),u[d]},e),e},{})},$_attrsWithoutPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=I(e,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,n){var r=I(n,2),i=r[0],s=r[1];return e[i]=s,e},{})}}},Ne=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ee=P.extend({name:"baseicon",css:Ne});function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Q(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q(Object(n),!0).forEach(function(r){De(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function De(t,e,n){return(e=Fe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Fe(t){var e=Be(t,"string");return N(e)=="symbol"?e:e+""}function Be(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(N(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ue={name:"BaseIcon",extends:pe,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:Ee,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var e=ue(this.label);return Q(Q({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:e?void 0:"img","aria-label":e?void 0:this.label,"aria-hidden":e})}}};function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}function ee(t,e){return We(t)||Re(t,e)||He(t,e)||Me()}function Me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function He(t,e){if(t){if(typeof t=="string")return te(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(t,e):void 0}}function te(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Re(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e!==0)for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function We(t){if(Array.isArray(t))return t}function ne(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(n),!0).forEach(function(r){H(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function H(t,e,n){return(e=Ze(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ze(t){var e=Ke(t,"string");return E(e)=="symbol"?e:e+""}function Ke(t,e){if(E(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(E(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var h={_getMeta:function(){return[W(arguments.length<=0?void 0:arguments[0])||arguments.length<=0?void 0:arguments[0],U(W(arguments.length<=0?void 0:arguments[0])?arguments.length<=0?void 0:arguments[0]:arguments.length<=1?void 0:arguments[1])]},_getConfig:function(e,n){var r,i,s;return(r=(e==null||(i=e.instance)===null||i===void 0?void 0:i.$primevue)||(n==null||(s=n.ctx)===null||s===void 0||(s=s.appContext)===null||s===void 0||(s=s.config)===null||s===void 0||(s=s.globalProperties)===null||s===void 0?void 0:s.$primevue))===null||r===void 0?void 0:r.config},_getOptionValue:oe,_getPTValue:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"",o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,l=function(){var S=h._getOptionValue.apply(h,arguments);return j(S)||ie(S)?{class:S}:S},u=((e=r.binding)===null||e===void 0||(e=e.value)===null||e===void 0?void 0:e.ptOptions)||((n=r.$primevueConfig)===null||n===void 0?void 0:n.ptOptions)||{},d=u.mergeSections,f=d===void 0?!0:d,m=u.mergeProps,v=m===void 0?!1:m,p=a?h._useDefaultPT(r,r.defaultPT(),l,s,o):void 0,_=h._usePT(r,h._getPT(i,r.$name),l,s,y(y({},o),{},{global:p||{}})),b=h._getPTDatasets(r,s);return f||!f&&_?v?h._mergeProps(r,v,p,_,b):y(y(y({},p),_),b):y(y({},_),b)},_getPTDatasets:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r="data-pc-";return y(y({},n==="root"&&H({},"".concat(r,"name"),w(e.$name))),{},H({},"".concat(r,"section"),w(n)))},_getPT:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,i=function(o){var a,l=r?r(o):o,u=w(n);return(a=l==null?void 0:l[u])!==null&&a!==void 0?a:l};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:i(e.originalValue),value:i(e.value)}:i(e)},_usePT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0,o=function(b){return r(b,i,s)};if(n!=null&&n.hasOwnProperty("_usept")){var a,l=n._usept||((a=e.$primevueConfig)===null||a===void 0?void 0:a.ptOptions)||{},u=l.mergeSections,d=u===void 0?!0:u,f=l.mergeProps,m=f===void 0?!1:f,v=o(n.originalValue),p=o(n.value);return v===void 0&&p===void 0?void 0:j(p)?p:j(v)?v:d||!d&&p?m?h._mergeProps(e,m,v,p):y(y({},v),p):p}return o(n)},_useDefaultPT:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,s=arguments.length>4?arguments[4]:void 0;return h._usePT(e,n,r,i,s)},_loadStyles:function(e,n,r){var i,s=h._getConfig(n,r),o={nonce:s==null||(i=s.csp)===null||i===void 0?void 0:i.nonce};h._loadCoreStyles(e.$instance,o),h._loadThemeStyles(e.$instance,o),h._loadScopedThemeStyles(e.$instance,o),h._themeChangeListener(function(){return h._loadThemeStyles(e.$instance,o)})},_loadCoreStyles:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(!k.isStyleNameLoaded((e=r.$style)===null||e===void 0?void 0:e.name)&&(n=r.$style)!==null&&n!==void 0&&n.name){var s;P.loadCSS(i),(s=r.$style)===null||s===void 0||s.loadCSS(i),k.setLoadedStyleName(r.$style.name)}},_loadThemeStyles:function(){var e,n,r,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1?arguments[1]:void 0;if(!(i!=null&&i.isUnstyled()||(i==null||(e=i.theme)===null||e===void 0?void 0:e.call(i))==="none")){if(!O.isStyleNameLoaded("common")){var o,a,l=((o=i.$style)===null||o===void 0||(a=o.getCommonTheme)===null||a===void 0?void 0:a.call(o))||{},u=l.primitive,d=l.semantic,f=l.global,m=l.style;P.load(u==null?void 0:u.css,y({name:"primitive-variables"},s)),P.load(d==null?void 0:d.css,y({name:"semantic-variables"},s)),P.load(f==null?void 0:f.css,y({name:"global-variables"},s)),P.loadTheme(y({name:"global-style"},s),m),O.setLoadedStyleName("common")}if(!O.isStyleNameLoaded((n=i.$style)===null||n===void 0?void 0:n.name)&&(r=i.$style)!==null&&r!==void 0&&r.name){var v,p,_,b,T=((v=i.$style)===null||v===void 0||(p=v.getDirectiveTheme)===null||p===void 0?void 0:p.call(v))||{},S=T.css,c=T.style;(_=i.$style)===null||_===void 0||_.load(S,y({name:"".concat(i.$style.name,"-variables")},s)),(b=i.$style)===null||b===void 0||b.loadTheme(y({name:"".concat(i.$style.name,"-style")},s),c),O.setLoadedStyleName(i.$style.name)}if(!O.isStyleNameLoaded("layer-order")){var $,C,V=($=i.$style)===null||$===void 0||(C=$.getLayerOrderThemeCSS)===null||C===void 0?void 0:C.call($);P.load(V,y({name:"layer-order",first:!0},s)),O.setLoadedStyleName("layer-order")}}},_loadScopedThemeStyles:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,r=e.preset();if(r&&e.$attrSelector){var i,s,o,a=((i=e.$style)===null||i===void 0||(s=i.getPresetTheme)===null||s===void 0?void 0:s.call(i,r,"[".concat(e.$attrSelector,"]")))||{},l=a.css,u=(o=e.$style)===null||o===void 0?void 0:o.load(l,y({name:"".concat(e.$attrSelector,"-").concat(e.$style.name)},n));e.scopedStyleEl=u.el}},_themeChangeListener:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(){};k.clearLoadedStyleNames(),le.on("theme:change",e)},_hook:function(e,n,r,i,s,o){var a,l,u="on".concat(ge(n)),d=h._getConfig(i,s),f=r==null?void 0:r.$instance,m=h._usePT(f,h._getPT(i==null||(a=i.value)===null||a===void 0?void 0:a.pt,e),h._getOptionValue,"hooks.".concat(u)),v=h._useDefaultPT(f,d==null||(l=d.pt)===null||l===void 0||(l=l.directives)===null||l===void 0?void 0:l[e],h._getOptionValue,"hooks.".concat(u)),p={el:r,binding:i,vnode:s,prevVnode:o};m==null||m(f,p),v==null||v(f,p)},_mergeProps:function(){for(var e=arguments.length>1?arguments[1]:void 0,n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return se(e)?e.apply(void 0,r):A.apply(void 0,r)},_extend:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=function(o,a,l,u,d){var f,m,v,p;a._$instances=a._$instances||{};var _=h._getConfig(l,u),b=a._$instances[e]||{},T=ue(b)?y(y({},n),n==null?void 0:n.methods):{};a._$instances[e]=y(y({},b),{},{$name:e,$host:a,$binding:l,$modifiers:l==null?void 0:l.modifiers,$value:l==null?void 0:l.value,$el:b.$el||a||void 0,$style:y({classes:void 0,inlineStyles:void 0,load:function(){},loadCSS:function(){},loadTheme:function(){}},n==null?void 0:n.style),$primevueConfig:_,$attrSelector:(f=a.$pd)===null||f===void 0||(f=f[e])===null||f===void 0?void 0:f.attrSelector,defaultPT:function(){return h._getPT(_==null?void 0:_.pt,void 0,function(c){var $;return c==null||($=c.directives)===null||$===void 0?void 0:$[e]})},isUnstyled:function(){var c,$;return((c=a.$instance)===null||c===void 0||(c=c.$binding)===null||c===void 0||(c=c.value)===null||c===void 0?void 0:c.unstyled)!==void 0?($=a.$instance)===null||$===void 0||($=$.$binding)===null||$===void 0||($=$.value)===null||$===void 0?void 0:$.unstyled:_==null?void 0:_.unstyled},theme:function(){var c;return(c=a.$instance)===null||c===void 0||(c=c.$primevueConfig)===null||c===void 0?void 0:c.theme},preset:function(){var c;return(c=a.$instance)===null||c===void 0||(c=c.$binding)===null||c===void 0||(c=c.value)===null||c===void 0?void 0:c.dt},ptm:function(){var c,$=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return h._getPTValue(a.$instance,(c=a.$instance)===null||c===void 0||(c=c.$binding)===null||c===void 0||(c=c.value)===null||c===void 0?void 0:c.pt,$,y({},C))},ptmo:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},$=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return h._getPTValue(a.$instance,c,$,C,!1)},cx:function(){var c,$,C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return(c=a.$instance)!==null&&c!==void 0&&c.isUnstyled()?void 0:h._getOptionValue(($=a.$instance)===null||$===void 0||($=$.$style)===null||$===void 0?void 0:$.classes,C,y({},V))},sx:function(){var c,$=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return C?h._getOptionValue((c=a.$instance)===null||c===void 0||(c=c.$style)===null||c===void 0?void 0:c.inlineStyles,$,y({},V)):void 0}},T),a.$instance=a._$instances[e],(m=(v=a.$instance)[o])===null||m===void 0||m.call(v,a,l,u,d),a["$".concat(e)]=a.$instance,h._hook(e,o,a,l,u,d),a.$pd||(a.$pd={}),a.$pd[e]=y(y({},(p=a.$pd)===null||p===void 0?void 0:p[e]),{},{name:e,instance:a.$instance})},i=function(o){var a,l,u,d,f,m=(a=o.$instance)===null||a===void 0?void 0:a.watch;m==null||(l=m.config)===null||l===void 0||l.call(o.$instance,(u=o.$instance)===null||u===void 0?void 0:u.$primevueConfig),Z.on("config:change",function(v){var p,_=v.newValue,b=v.oldValue;return m==null||(p=m.config)===null||p===void 0?void 0:p.call(o.$instance,_,b)}),m==null||(d=m["config.ripple"])===null||d===void 0||d.call(o.$instance,(f=o.$instance)===null||f===void 0||(f=f.$primevueConfig)===null||f===void 0?void 0:f.ripple),Z.on("config:ripple:change",function(v){var p,_=v.newValue,b=v.oldValue;return m==null||(p=m["config.ripple"])===null||p===void 0?void 0:p.call(o.$instance,_,b)})};return{created:function(o,a,l,u){o.$pd||(o.$pd={}),o.$pd[e]={name:e,attrSelector:ce("pd")},r("created",o,a,l,u)},beforeMount:function(o,a,l,u){h._loadStyles(o,a,l),r("beforeMount",o,a,l,u),i(o)},mounted:function(o,a,l,u){h._loadStyles(o,a,l),r("mounted",o,a,l,u)},beforeUpdate:function(o,a,l,u){r("beforeUpdate",o,a,l,u)},updated:function(o,a,l,u){h._loadStyles(o,a,l),r("updated",o,a,l,u)},beforeUnmount:function(o,a,l,u){r("beforeUnmount",o,a,l,u)},unmounted:function(o,a,l,u){var d;(d=o.$instance)===null||d===void 0||(d=d.scopedStyleEl)===null||d===void 0||(d=d.value)===null||d===void 0||d.remove(),r("unmounted",o,a,l,u)}}},extend:function(){var e=h._getMeta.apply(h,arguments),n=ee(e,2),r=n[0],i=n[1];return y({extend:function(){var o=h._getMeta.apply(h,arguments),a=ee(o,2),l=a[0],u=a[1];return h.extend(l,y(y(y({},i),i==null?void 0:i.methods),u))}},h._extend(r,i))}},Ge=function(e){var n=e.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},ze={root:"p-ink"},Xe=P.extend({name:"ripple-directive",theme:Ge,classes:ze}),Ye=h.extend({style:Xe});function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function Je(t){return tt(t)||et(t)||Qe(t)||qe()}function qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(t,e){if(t){if(typeof t=="string")return R(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(t,e):void 0}}function et(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function tt(t){if(Array.isArray(t))return R(t)}function R(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function re(t,e,n){return(e=nt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function nt(t){var e=rt(t,"string");return D(e)=="symbol"?e:e+""}function rt(t,e){if(D(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(D(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var dt=Ye.extend("ripple",{watch:{"config.ripple":function(e){e?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(e){this.remove(e)},timeout:void 0,methods:{bindEvents:function(e){e.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(e){e.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(e){var n=Pe("span",re(re({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));e.appendChild(n),this.$el=n},remove:function(e){var n=this.getInk(e);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(e),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(e){var n=this,r=e.currentTarget,i=this.getInk(r);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&B(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!K(i)&&!G(i)){var s=Math.max($e(r),_e(r));i.style.height=s+"px",i.style.width=s+"px"}var o=be(r),a=e.pageX-o.left+document.body.scrollTop-G(i)/2,l=e.pageY-o.top+document.body.scrollLeft-K(i)/2;i.style.top=l+"px",i.style.left=a+"px",!this.isUnstyled()&&Se(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&B(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(e){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&B(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(e){return e&&e.children?Je(e.children).find(function(n){return ye(n,"data-pc-name")==="ripple"}):void 0}}}),ct={name:"BaseEditableHolder",extends:pe,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(e){this.d_value=e},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var n,r;this.formField=((n=this.$pcForm)===null||n===void 0||(r=n.register)===null||r===void 0?void 0:r.call(n,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var n,r;this.formField=((n=this.$pcForm)===null||n===void 0||(r=n.register)===null||r===void 0?void 0:r.call(n,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,n){var r,i;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(r=(i=this.formField).onChange)===null||r===void 0||r.call(i,{originalEvent:n,value:e})}},computed:{$filled:function(){return M(this.d_value)},$invalid:function(){var e,n,r,i;return(e=(n=this.invalid)!==null&&n!==void 0?n:(r=this.$pcFormField)===null||r===void 0||(r=r.$field)===null||r===void 0?void 0:r.invalid)!==null&&e!==void 0?e:(i=this.$pcForm)===null||i===void 0||(i=i.states)===null||i===void 0||(i=i[this.$formName])===null||i===void 0?void 0:i.invalid},$formName:function(){var e;return this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formDefaultValue:function(){var e,n,r,i;return(e=(n=this.d_value)!==null&&n!==void 0?n:(r=this.$pcFormField)===null||r===void 0?void 0:r.initialValue)!==null&&e!==void 0?e:(i=this.$pcForm)===null||i===void 0||(i=i.initialValues)===null||i===void 0?void 0:i[this.$formName]},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},it={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=ae()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function at(t,e,n,r,i,s){return s.inline?z(t.$slots,"default",{key:0}):i.mounted?(de(),Te(Ce,{key:1,to:n.appendTo},[z(t.$slots,"default")],8,["to"])):Oe("",!0)}it.render=at;var ot={name:"TimesIcon",extends:Ue};function lt(t,e,n,r,i,s){return de(),we("svg",A({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),e[0]||(e[0]=[ke("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}ot.render=lt;export{h as B,dt as R,ut as Z,it as a,pe as b,ot as c,ct as d,Ue as s,ce as u};
