import{s as w}from"./index-IFHNxgh8.js";import{s as C}from"./index-TVyWaqdp.js";import{s as B}from"./index-DAT2adJ4.js";import{s as N}from"./index-Bh5uLi11.js";import{g as j,T as E,a8 as I,f as U,o as i,h as $,a as o,k as A,e as n,c as m,d as _,u as l,t as p,F,r as D}from"./app-YXQVei18.js";import"./index-CPOj9AjG.js";import"./index-CYBUZu1P.js";import"./index-DPcKkDJ7.js";import"./index-DbaXUhC2.js";import"./index-beM1XagX.js";const T={class:"flex flex-col gap-4"},L={class:"flex flex-col gap-2"},M={key:0,class:"text-red-500"},O={class:"flex flex-col"},P={class:"flex justify-start items-center space-x-2 mt-2"},q={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},z=["for"],G={key:0,class:"text-red-500"},H={class:"flex justify-end gap-2"},te={__name:"Create",props:{show:Boolean,title:String,permissions:Object},emits:["close"],setup(g,{emit:x}){const r=g,c=x,a=j({multipleSelect:!1}),s=E({name:"",guard_name:"web",permissions:[]}),h=()=>{s.post(route("role.store"),{preserveScroll:!0,onSuccess:()=>{c("close"),s.reset()},onError:()=>null,onFinish:()=>null})};I(()=>{r.show&&(s.errors={})});const v=d=>{d.target.checked===!1?s.permissions=[]:(s.permissions=[],r.permissions.forEach(e=>{s.permissions.push(e.id)}))},b=()=>{r.permissions.length==s.permissions.length?a.multipleSelect=!0:a.multipleSelect=!1};return(d,e)=>{const k=N,u=B,f=C,y=w;return i(),U(y,{visible:r.show,"onUpdate:visible":e[4]||(e[4]=t=>r.show=t),position:"center",modal:"",header:"Add "+r.title,style:{width:"50rem"},closable:!1},{default:$(()=>[o("form",{onSubmit:A(h,["prevent"])},[o("div",T,[o("div",L,[e[5]||(e[5]=o("label",{for:"name"},"Name",-1)),n(k,{id:"name",modelValue:l(s).name,"onUpdate:modelValue":e[0]||(e[0]=t=>l(s).name=t),class:"flex-auto",autocomplete:"off",placeholder:"Name"},null,8,["modelValue"]),l(s).errors.name?(i(),m("small",M,p(l(s).errors.name),1)):_("",!0)]),o("div",O,[e[7]||(e[7]=o("label",{for:"permissions"},"Permissions",-1)),o("div",P,[n(u,{modelValue:a.multipleSelect,"onUpdate:modelValue":e[1]||(e[1]=t=>a.multipleSelect=t),onChange:v,inputId:"check_all",binary:!0},null,8,["modelValue"]),e[6]||(e[6]=o("label",{for:"check_all",class:"ml-2"}," Check All ",-1))]),o("div",q,[(i(!0),m(F,null,D(r.permissions,(t,V)=>(i(),m("div",{class:"flex items-center justify-start space-x-2",key:V},[n(u,{modelValue:l(s).permissions,"onUpdate:modelValue":e[2]||(e[2]=S=>l(s).permissions=S),onChange:b,inputId:"permission_"+t.id,value:t.id},null,8,["modelValue","inputId","value"]),o("label",{for:"permission_"+t.id,class:"ml-2"},p(t.name),9,z)]))),128))]),l(s).errors.permissions?(i(),m("small",G,p(l(s).errors.permissions),1)):_("",!0)]),o("div",H,[n(f,{type:"button",label:"Cancel",severity:"secondary",onClick:e[3]||(e[3]=t=>c("close"))}),n(f,{type:"submit",label:"Save"})])])],32)]),_:1},8,["visible","header"])}}};export{te as default};
