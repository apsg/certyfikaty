import{s as _}from"./index-DXD7U8ZK.js";import{s as b,b as v}from"./index-CZtCi0PK.js";import{T as x,Y as h,c as w,o as m,w as y,b as t,d as g,a as l,f as B,g as S,u as a,t as V}from"./app-Cq_0W1p7.js";import"./index-njMZyE4e.js";import"./index-D3FpkwxF.js";import"./index-Bwa4bLzk.js";const k={class:"flex flex-col gap-4"},C={class:"flex flex-col gap-2"},N={key:0,class:"text-red-500"},E={class:"flex justify-end gap-2"},I={__name:"Create",props:{show:Boolean,title:String},emits:["close"],setup(c,{emit:p}){const s=c,n=p,o=x({name:""}),d=()=>{o.post(route("permission.store"),{preserveScroll:!0,onSuccess:()=>{n("close"),o.reset()},onError:()=>null,onFinish:()=>null})};return h(()=>{s.show&&(o.errors={})}),($,e)=>{const f=b,i=v,u=_;return m(),w(u,{visible:s.show,"onUpdate:visible":e[2]||(e[2]=r=>s.show=r),position:"center",modal:"",header:"Add "+s.title,style:{width:"30rem"},closable:!1},{default:y(()=>[t("form",{onSubmit:g(d,["prevent"])},[t("div",k,[t("div",C,[e[3]||(e[3]=t("label",{for:"name"},"Name",-1)),l(f,{id:"name",modelValue:a(o).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(o).name=r),class:"flex-auto",autocomplete:"off",placeholder:"Name"},null,8,["modelValue"]),a(o).errors.name?(m(),B("small",N,V(a(o).errors.name),1)):S("",!0)]),t("div",E,[l(i,{type:"button",label:"Cancel",severity:"secondary",onClick:e[1]||(e[1]=r=>n("close"))}),l(i,{type:"submit",label:"Save"})])])],32)]),_:1},8,["visible","header"])}}};export{I as default};
