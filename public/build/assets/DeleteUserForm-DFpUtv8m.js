import{f as g,o as f,p as v,W as $,_ as C,$ as B,x as D,c as V,a as n,w as r,K as p,b as s,s as y,L as w,n as h,g as S,a0 as E,V as _,T as U,e as x,M as T,u as d,a1 as A}from"./app-Cq_0W1p7.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as N,a as W}from"./InputLabel-Dq1ROb7n.js";import{_ as K}from"./TextInput-CvbzrO_9.js";const L={},O={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"};function P(t,l){return f(),g("button",O,[v(t.$slots,"default")])}const b=M(L,[["render",P]]),z={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},F={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:l}){const o=t,a=l;$(()=>o.show,()=>{o.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const u=()=>{o.closeable&&a("close")},i=m=>{m.key==="Escape"&&o.show&&u()};C(()=>document.addEventListener("keydown",i)),B(()=>{document.removeEventListener("keydown",i),document.body.style.overflow=null});const c=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[o.maxWidth]);return(m,e)=>(f(),V(E,{to:"body"},[n(y,{"leave-active-class":"duration-200"},{default:r(()=>[p(s("div",z,[n(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[p(s("div",{class:"fixed inset-0 transform transition-all",onClick:u},e[0]||(e[0]=[s("div",{class:"absolute inset-0 bg-gray-500 opacity-75"},null,-1)]),512),[[w,t.show]])]),_:1}),n(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:r(()=>[p(s("div",{class:h(["mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",c.value])},[t.show?v(m.$slots,"default",{key:0}):S("",!0)],2),[[w,t.show]])]),_:3})],512),[[w,t.show]])]),_:3})]))}},I=["type"],j={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(t){return(l,o)=>(f(),g("button",{type:t.type,class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},[v(l.$slots,"default")],8,I))}},q={class:"space-y-6"},G={class:"p-6"},H={class:"mt-6"},J={class:"mt-6 flex justify-end"},Z={__name:"DeleteUserForm",setup(t){const l=_(!1),o=_(null),a=U({password:""}),u=()=>{l.value=!0,A(()=>o.value.focus())},i=()=>{a.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>c(),onError:()=>o.value.focus(),onFinish:()=>a.reset()})},c=()=>{l.value=!1,a.reset()};return(m,e)=>(f(),g("section",q,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900"},"Delete Account"),s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1)),n(b,{onClick:u},{default:r(()=>e[1]||(e[1]=[x("Delete Account")])),_:1}),n(F,{show:l.value,onClose:c},{default:r(()=>[s("div",G,[e[4]||(e[4]=s("h2",{class:"text-lg font-medium text-gray-900"}," Are you sure you want to delete your account? ",-1)),e[5]||(e[5]=s("p",{class:"mt-1 text-sm text-gray-600"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1)),s("div",H,[n(N,{for:"password",value:"Password",class:"sr-only"}),n(K,{id:"password",ref_key:"passwordInput",ref:o,modelValue:d(a).password,"onUpdate:modelValue":e[0]||(e[0]=k=>d(a).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(i,["enter"])},null,8,["modelValue"]),n(W,{message:d(a).errors.password,class:"mt-2"},null,8,["message"])]),s("div",J,[n(j,{onClick:c},{default:r(()=>e[2]||(e[2]=[x(" Cancel ")])),_:1}),n(b,{class:h(["ms-3",{"opacity-25":d(a).processing}]),disabled:d(a).processing,onClick:i},{default:r(()=>e[3]||(e[3]=[x(" Delete Account ")])),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{Z as default};
