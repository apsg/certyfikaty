import{s as v}from"./index-IFHNxgh8.js";import{s as y}from"./index-TVyWaqdp.js";import{s as g}from"./index-DXNJ0CYh.js";import{s as k}from"./index-Bh5uLi11.js";import{T as U,a8 as S,f as h,o as d,h as B,a as l,k as C,e as i,c as m,d as p,u as s,t as u}from"./app-YXQVei18.js";import"./index-CPOj9AjG.js";import"./index-CYBUZu1P.js";import"./index-DPcKkDJ7.js";import"./index-DbaXUhC2.js";import"./index-beM1XagX.js";import"./index-DVt7-_AM.js";import"./index-DhJ-OLgp.js";const E={class:"flex flex-col gap-4"},N={class:"flex flex-col gap-2"},P={key:0,class:"text-red-500"},$={class:"flex flex-col gap-2"},j={key:0,class:"text-red-500"},D={class:"flex flex-col gap-2"},O={key:0,class:"text-red-500"},T={class:"flex flex-col gap-2"},F={key:0,class:"text-red-500"},I={class:"flex flex-col gap-2"},L={key:0,class:"text-red-500"},M={class:"flex justify-end gap-2"},Z={__name:"Edit",props:{show:Boolean,title:String,user:Object,roles:Object},emits:["close"],setup(x,{emit:_}){const r=x,c=_,o=U({name:"",email:"",password:"",password_confirmation:"",role:""}),V=()=>{var n;o.put(route("user.update",(n=r.user)==null?void 0:n.id),{preserveScroll:!0,onSuccess:()=>{c("close"),o.reset()},onError:()=>null,onFinish:()=>null})};return S(()=>{var n,e,a,f;r.show&&(o.errors={},o.name=(n=r.user)==null?void 0:n.name,o.email=(e=r.user)==null?void 0:e.email,o.role=((a=r.user)==null?void 0:a.roles)==0?"":(f=r.user)==null?void 0:f.roles[0].name)}),(n,e)=>{const a=k,f=g,w=y,b=v;return d(),h(b,{visible:r.show,"onUpdate:visible":e[6]||(e[6]=t=>r.show=t),position:"top",modal:"",header:"Update "+r.title,style:{width:"30rem"},closable:!1},{default:B(()=>[l("form",{onSubmit:C(V,["prevent"])},[l("div",E,[l("div",N,[e[7]||(e[7]=l("label",{for:"name"},"Name",-1)),i(a,{id:"name",modelValue:s(o).name,"onUpdate:modelValue":e[0]||(e[0]=t=>s(o).name=t),class:"flex-auto",autocomplete:"off",placeholder:"Name"},null,8,["modelValue"]),s(o).errors.name?(d(),m("small",P,u(s(o).errors.name),1)):p("",!0)]),l("div",$,[e[8]||(e[8]=l("label",{for:"email"},"Email",-1)),i(a,{id:"email",modelValue:s(o).email,"onUpdate:modelValue":e[1]||(e[1]=t=>s(o).email=t),class:"flex-auto",autocomplete:"off",placeholder:"Email"},null,8,["modelValue"]),s(o).errors.email?(d(),m("small",j,u(s(o).errors.email),1)):p("",!0)]),l("div",D,[e[9]||(e[9]=l("label",{for:"password"},"Password",-1)),i(a,{id:"password",modelValue:s(o).password,"onUpdate:modelValue":e[2]||(e[2]=t=>s(o).password=t),type:"password",placeholder:"Password"},null,8,["modelValue"]),s(o).errors.password?(d(),m("small",O,u(s(o).errors.password),1)):p("",!0)]),l("div",T,[e[10]||(e[10]=l("label",{for:"password_confirmation"},"Confirmation Password",-1)),i(a,{id:"password_confirmation",modelValue:s(o).password_confirmation,"onUpdate:modelValue":e[3]||(e[3]=t=>s(o).password_confirmation=t),type:"password",placeholder:"Confirmation Password"},null,8,["modelValue"]),s(o).errors.password_confirmation?(d(),m("small",F,u(s(o).errors.password_confirmation),1)):p("",!0)]),l("div",I,[e[11]||(e[11]=l("label",{for:"role"},"Role",-1)),i(f,{modelValue:s(o).role,"onUpdate:modelValue":e[4]||(e[4]=t=>s(o).role=t),options:r.roles,optionValue:"code",optionLabel:"name",placeholder:"Select"},null,8,["modelValue","options"]),s(o).errors.role?(d(),m("small",L,u(s(o).errors.role),1)):p("",!0)]),l("div",M,[i(w,{type:"button",label:"Cancel",severity:"secondary",onClick:e[5]||(e[5]=t=>c("close"))}),i(w,{type:"submit",label:"Update"})])])],32)]),_:1},8,["visible","header"])}}};export{Z as default};
