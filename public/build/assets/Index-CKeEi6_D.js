import{s as U}from"./index-DXD7U8ZK.js";import{l as F,s as L,a as P}from"./loadToast-CTDn_seI.js";import{s as A,a as E}from"./index-jcdTHmgU.js";import{b as K,s as R}from"./index-CZtCi0PK.js";import{V as x,T as z,N as G,W as J,X as $,c as W,o as n,w as r,b as d,a as s,K as k,L as w,e as v,t as g,f as m,g as X,I as Y,J as q}from"./app-Cq_0W1p7.js";import{_ as H}from"./AppLayout-8s0-wKKt.js";import M from"./Create-D22a_kJL.js";import Q from"./Edit-DuefbPuD.js";import{p as Z}from"./lodash-CkzWJA0n.js";import"./index-njMZyE4e.js";import"./index-D3FpkwxF.js";import"./index-Bwa4bLzk.js";import"./index-DkbD6T2c.js";import"./index-B2-9oGzY.js";import"./index-DJKwCWcD.js";import"./index-CeojN2GL.js";import"./index-Cv1wiMas.js";import"./index-SYNUfPc1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-C8KQmatC.js";const ee={class:"card"},te={class:"flex justify-end"},oe=["onClick"],se=["onClick"],re={key:2},le={class:"flex items-center gap-4"},ie={key:0},ae={class:"grid grid-cols-2 sm:grid-cols-3"},Se={__name:"Index",props:{title:String,filters:Object,permissions:Object,roles:Object,perPage:Number},setup(p){const{_:N,debounce:O,pickBy:S}=Z,i=p;F();const u=x(!1),b=x(!1),y=z({}),o=G({params:{search:i.filters.search,field:i.filters.field,order:i.filters.order,createOpen:!1,editOpen:!1},role:null}),D=()=>{var l;u.value=!1,y.delete(route("role.destroy",(l=o.role)==null?void 0:l.id),{preserveScroll:!0,onSuccess:()=>{y.reset()},onError:()=>null,onFinish:()=>null})},V=l=>{$.get(route("role.index"),{page:l.page+1},{preserveState:!0})};return J(()=>N.cloneDeep(o.params),O(()=>{let l=S(o.params);$.get(route("role.index"),l,{replace:!0,preserveState:!0,preserveScroll:!0})},150)),(l,e)=>{const c=K,B=E,I=R,j=A,a=P,T=L,h=U;return n(),W(H,null,{default:r(()=>{var C;return[d("div",ee,[s(M,{show:o.createOpen,onClose:e[0]||(e[0]=t=>o.createOpen=!1),title:i.title,permissions:i.permissions},null,8,["show","title","permissions"]),s(Q,{show:o.editOpen,onClose:e[1]||(e[1]=t=>o.editOpen=!1),role:o.role,title:i.title,permissions:i.permissions},null,8,["show","role","title","permissions"]),k(s(c,{label:"Create",onClick:e[2]||(e[2]=t=>o.createOpen=!0),icon:"pi pi-plus"},null,512),[[w,l.can(["create role"])]]),s(T,{lazy:"",value:p.roles.data,paginator:"",rows:p.roles.per_page,totalRecords:p.roles.total,first:(p.roles.current_page-1)*p.roles.per_page,onPage:V,tableStyle:"min-width: 50rem"},{header:r(()=>[d("div",te,[s(j,null,{default:r(()=>[s(B,null,{default:r(()=>e[7]||(e[7]=[d("i",{class:"pi pi-search"},null,-1)])),_:1}),s(I,{modelValue:o.params.search,"onUpdate:modelValue":e[3]||(e[3]=t=>o.params.search=t),placeholder:"Keyword Search"},null,8,["modelValue"])]),_:1})])]),empty:r(()=>e[8]||(e[8]=[v(" No data found. ")])),loading:r(()=>e[9]||(e[9]=[v(" Loading data. Please wait. ")])),default:r(()=>[s(a,{header:"No"},{body:r(t=>[v(g(t.index+1),1)]),_:1}),s(a,{field:"name",header:"Name"}),s(a,{field:"guard_name",header:"Guard"}),s(a,{header:"Permission"},{body:r(t=>[t.data.permissions.length==i.permissions.length?(n(),m("div",{key:0,onClick:f=>(b.value=!0,o.role=t.data),class:"whitespace-nowrap cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"}," All Permission ",8,oe)):t.data.permissions.length>0?(n(),m("div",{key:1,onClick:f=>(b.value=!0,o.role=t.data),class:"whitespace-nowrap cursor-pointer text-blue-600 dark:text-blue-400 font-bold underline"},g(t.data.permissions.length)+" Permission ",9,se)):(n(),m("div",re,g(t.data.permissions.length)+" Permission ",1))]),_:1}),s(a,{field:"created_at",header:"Created"}),s(a,{field:"updated_at",header:"Updated"}),s(a,{exportable:!1,style:{"min-width":"12rem"}},{body:r(t=>[k(s(c,{icon:"pi pi-pencil",outlined:"",rounded:"",class:"mr-2",onClick:f=>(o.editOpen=!0,o.role=t.data)},null,8,["onClick"]),[[w,l.can(["update role"])]]),k(s(c,{icon:"pi pi-trash",outlined:"",rounded:"",severity:"danger",onClick:f=>{u.value=!0,o.role=t.data}},null,8,["onClick"]),[[w,l.can(["delete role"])]])]),_:1})]),_:1},8,["value","rows","totalRecords","first"]),s(h,{visible:u.value,"onUpdate:visible":e[5]||(e[5]=t=>u.value=t),style:{width:"450px"},header:"Confirm",modal:!0},{footer:r(()=>[s(c,{label:"No",icon:"pi pi-times",text:"",onClick:e[4]||(e[4]=t=>u.value=!1)}),s(c,{label:"Yes",icon:"pi pi-check",onClick:D})]),default:r(()=>[d("div",le,[e[12]||(e[12]=d("i",{class:"pi pi-exclamation-triangle !text-3xl"},null,-1)),o.role?(n(),m("span",ie,[e[10]||(e[10]=v("Are you sure you want to delete ")),d("b",null,g(o.role.name),1),e[11]||(e[11]=v("?"))])):X("",!0)])]),_:1},8,["visible"]),s(h,{visible:b.value,"onUpdate:visible":e[6]||(e[6]=t=>b.value=t),modal:"",header:"Permission "+((C=o.role)==null?void 0:C.name),style:{width:"50rem"}},{default:r(()=>{var t;return[d("div",ae,[(n(!0),m(Y,null,q((t=o.role)==null?void 0:t.permissions,(f,_)=>(n(),m("div",{key:_,class:"flex justify-between w-full px-4 py-2"},g(++_+". "+f.name),1))),128))])]}),_:1},8,["visible","header"])])]}),_:1})}}};export{Se as default};
