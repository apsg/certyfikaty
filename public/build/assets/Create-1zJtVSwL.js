import{s as _}from"./index-DB4iiIX_.js";import{s as v}from"./index-C0KEOSw4.js";import{s as x}from"./index-DYCBEag_.js";import{T as b,Y as h,f as w,o as m,h as y,a as t,k as g,e as l,c as k,d as B,u as a,t as S}from"./app-C-BKs9t3.js";import"./index-BgSp-7Xz.js";import"./index-KHA0_16n.js";import"./index-CE5RrYAo.js";import"./index-DbRY7USD.js";const V={class:"flex flex-col gap-4"},C={class:"flex flex-col gap-2"},N={key:0,class:"text-red-500"},E={class:"flex justify-end gap-2"},Y={__name:"Create",props:{show:Boolean,title:String},emits:["close"],setup(c,{emit:p}){const s=c,n=p,o=b({name:""}),d=()=>{o.post(route("permission.store"),{preserveScroll:!0,onSuccess:()=>{n("close"),o.reset()},onError:()=>null,onFinish:()=>null})};return h(()=>{s.show&&(o.errors={})}),($,e)=>{const f=x,i=v,u=_;return m(),w(u,{visible:s.show,"onUpdate:visible":e[2]||(e[2]=r=>s.show=r),position:"center",modal:"",header:"Add "+s.title,style:{width:"30rem"},closable:!1},{default:y(()=>[t("form",{onSubmit:g(d,["prevent"])},[t("div",V,[t("div",C,[e[3]||(e[3]=t("label",{for:"name"},"Name",-1)),l(f,{id:"name",modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(o).name=r),class:"flex-auto",autocomplete:"off",placeholder:"Name"},null,8,["modelValue"]),a(o).errors.name?(m(),k("small",N,S(a(o).errors.name),1)):B("",!0)]),t("div",E,[l(i,{type:"button",label:"Cancel",severity:"secondary",onClick:e[1]||(e[1]=r=>n("close"))}),l(i,{type:"submit",label:"Save"})])])],32)]),_:1},8,["visible","header"])}}};export{Y as default};
