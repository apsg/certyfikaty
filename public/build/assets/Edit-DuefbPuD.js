import{s as w}from"./index-DXD7U8ZK.js";import{s as C,b as B}from"./index-CZtCi0PK.js";import{s as N}from"./index-SYNUfPc1.js";import{N as U,T as j,Y as E,c as I,o as a,w as $,b as o,d as A,a as m,f as d,g as _,u as r,t as u,I as D,J as F}from"./app-Cq_0W1p7.js";import"./index-njMZyE4e.js";import"./index-D3FpkwxF.js";import"./index-Bwa4bLzk.js";import"./index-CeojN2GL.js";const O={class:"flex flex-col gap-4"},T={class:"flex flex-col gap-2"},J={key:0,class:"text-red-500"},L={class:"flex flex-col"},M={class:"flex justify-start items-center space-x-2 mt-2"},P={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},Y=["for"],q={key:0,class:"text-red-500"},z={class:"flex justify-end gap-2"},ee={__name:"Edit",props:{show:Boolean,title:String,role:Object,permissions:Object},emits:["close"],setup(b,{emit:h}){const t=b,n=U({multipleSelect:!1}),f=h,s=j({name:"",permissions:[]}),x=()=>{var i;s.put(route("role.update",(i=t.role)==null?void 0:i.id),{preserveScroll:!0,onSuccess:()=>{f("close"),s.reset()},onError:()=>null,onFinish:()=>null})};E(()=>{var i,e,p;t.show&&(s.errors={},s.name=(i=t.role)==null?void 0:i.name,s.permissions=(e=t.role.permissions)==null?void 0:e.map(c=>c.id)),t.permissions.length==((p=t.role)==null?void 0:p.permissions.length)?n.multipleSelect=!0:n.multipleSelect=!1});const v=i=>{i.target.checked===!1?s.permissions=[]:(s.permissions=[],t.permissions.forEach(e=>{s.permissions.push(e.id)}))},y=()=>{t.permissions.length==s.permissions.length?n.multipleSelect=!0:n.multipleSelect=!1};return(i,e)=>{const p=C,c=N,g=B,k=w;return a(),I(k,{visible:t.show,"onUpdate:visible":e[4]||(e[4]=l=>t.show=l),position:"center",modal:"",header:"Update "+t.title,style:{width:"50rem"},closable:!1},{default:$(()=>[o("form",{onSubmit:A(x,["prevent"])},[o("div",O,[o("div",T,[e[5]||(e[5]=o("label",{for:"name"},"Name",-1)),m(p,{id:"name",modelValue:r(s).name,"onUpdate:modelValue":e[0]||(e[0]=l=>r(s).name=l),class:"flex-auto",autocomplete:"off",placeholder:"Name"},null,8,["modelValue"]),r(s).errors.name?(a(),d("small",J,u(r(s).errors.name),1)):_("",!0)]),o("div",L,[e[7]||(e[7]=o("label",{for:"permissions"},"Permissions",-1)),o("div",M,[m(c,{modelValue:n.multipleSelect,"onUpdate:modelValue":e[1]||(e[1]=l=>n.multipleSelect=l),onChange:v,inputId:"check_all",binary:!0},null,8,["modelValue"]),e[6]||(e[6]=o("label",{for:"check_all",class:"ml-2"}," Check All ",-1))]),o("div",P,[(a(!0),d(D,null,F(t.permissions,(l,S)=>(a(),d("div",{class:"flex items-center justify-start space-x-2",key:S},[m(c,{modelValue:r(s).permissions,"onUpdate:modelValue":e[2]||(e[2]=V=>r(s).permissions=V),onChange:y,inputId:"permission_"+l.id,value:l.id},null,8,["modelValue","inputId","value"]),o("label",{for:"permission_"+l.id,class:"ml-2"},u(l.name),9,Y)]))),128))]),r(s).errors.permissions?(a(),d("small",q,u(r(s).errors.permissions),1)):_("",!0)]),o("div",z,[m(g,{type:"button",label:"Cancel",severity:"secondary",onClick:e[3]||(e[3]=l=>f("close"))}),m(g,{type:"submit",label:"Update"})])])],32)]),_:1},8,["visible","header"])}}};export{ee as default};
