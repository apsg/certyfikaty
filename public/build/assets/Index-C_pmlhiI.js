import{l as c,s as m,a as u}from"./loadToast-CTDn_seI.js";import{b as f}from"./index-CZtCi0PK.js";import{_}from"./AppLayout-8s0-wKKt.js";import{c as b,o as h,w as e,b as a,a as t,e as d,t as y}from"./app-Cq_0W1p7.js";import"./index-njMZyE4e.js";import"./index-D3FpkwxF.js";import"./index-jcdTHmgU.js";import"./index-CeojN2GL.js";import"./index-B2-9oGzY.js";import"./index-Cv1wiMas.js";import"./index-DkbD6T2c.js";import"./index-DJKwCWcD.js";import"./index-SYNUfPc1.js";import"./index-Bwa4bLzk.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-C8KQmatC.js";const w={class:"card"},N=["href"],g=["href"],x=["href"],F={__name:"Index",props:{title:String,certificates:Array},setup(p){return c(),(s,o)=>{const n=f,i=u,l=m;return h(),b(_,null,{default:e(()=>[a("div",w,[a("a",{href:s.route("admin.certificates.create")},[t(n,{icon:"pi pi-plus",label:"Dodaj certyfikat"})],8,N),t(l,{value:p.certificates,tableStyle:"min-width: 50rem"},{header:e(()=>o[0]||(o[0]=[a("div",{class:"flex justify-end"},null,-1)])),empty:e(()=>o[1]||(o[1]=[d(" No data found.")])),loading:e(()=>o[2]||(o[2]=[d(" Loading data. Please wait.")])),default:e(()=>[t(i,{header:"No"},{body:e(r=>[d(y(r.index+1),1)]),_:1}),t(i,{field:"title",header:"Nazwa"}),t(i,{field:"created_at",header:"Dodany"}),t(i,{exportable:!1,style:{"min-width":"12rem"}},{body:e(r=>[a("a",{href:s.route("admin.certificates.edit",r.data.id)},[t(n,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success p-button-outlined"})],8,g),a("a",{href:s.route("admin.certificates.destroy",r.data.id)},[t(n,{icon:"pi pi-trash",class:"p-button-rounded p-button-danger p-button-outlined"})],8,x)]),_:1})]),_:1},8,["value"])])]),_:1})}}};export{F as default};
