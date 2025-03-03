import{s as k}from"./index-DkbD6T2c.js";import{b as U,s as G}from"./index-CZtCi0PK.js";import{_ as B}from"./AppLayout-8s0-wKKt.js";import{B as y,f as V,o as c,p as x,m as I,N as h,O as N,c as A,w as l,b as f,e as a,a as o,u as t}from"./app-Cq_0W1p7.js";import{p as j}from"./lodash-CkzWJA0n.js";import{b as z}from"./index-njMZyE4e.js";import"./index-CeojN2GL.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-C8KQmatC.js";var E=function(v){var i=v.dt;return`
.p-inputgroup,
.p-inputgroup .p-iconfield,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(i("inputgroup.addon.padding"),`;
    background: `).concat(i("inputgroup.addon.background"),`;
    color: `).concat(i("inputgroup.addon.color"),`;
    border-block-start: 1px solid `).concat(i("inputgroup.addon.border.color"),`;
    border-block-end: 1px solid `).concat(i("inputgroup.addon.border.color"),`;
    min-width: `).concat(i("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid `).concat(i("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid `).concat(i("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iconfield > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-iconfield:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: `).concat(i("inputgroup.addon.border.radius"),`;
    border-end-start-radius: `).concat(i("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: `).concat(i("inputgroup.addon.border.radius"),`;
    border-end-end-radius: `).concat(i("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
    border-inline-start: 0;
}
`)},F={root:"p-inputgroup"},L=y.extend({name:"inputgroup",theme:E,classes:F}),S={name:"BaseInputGroup",extends:z,style:L,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},_={name:"InputGroup",extends:S,inheritAttrs:!1};function C(s,v,i,w,u,p){return c(),V("div",I({class:s.cx("root")},s.ptmi("root")),[x(s.$slots,"default")],16)}_.render=C;var O={root:"p-inputgroupaddon"},D=y.extend({name:"inputgroupaddon",classes:O}),P={name:"BaseInputGroupAddon",extends:z,style:D,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},r={name:"InputGroupAddon",extends:P,inheritAttrs:!1};function T(s,v,i,w,u,p){return c(),V("div",I({class:s.cx("root")},s.ptmi("root")),[x(s.$slots,"default")],16)}r.render=T;const q={class:"card"},H={class:"font-semibold text-xl mb-3"},J=["href"],K={class:"grid grid-cols-12 gap-2"},M={class:"pt-3"},Q=["href"],en={__name:"Edit",props:{layout:Object},setup(s){const{_:v,debounce:i,pickBy:w}=j,u=s,p=h({name:{value:u.layout.name,error:null},date_position_top:{value:u.layout.date_position_top,error:null},date_position_left:{value:u.layout.date_position_left,error:null},date_font_size:{value:u.layout.date_font_size,error:null},name_position_top:{value:u.layout.name_position_top,error:null},name_position_left:{value:u.layout.name_position_left,error:null},name_font_size:{value:u.layout.name_font_size,error:null},title_position_top:{value:u.layout.title_position_top,error:null},title_position_left:{value:u.layout.title_position_left,error:null},title_font_size:{value:u.layout.title_font_size,error:null},number_position_top:{value:u.layout.number_position_top,error:null},number_position_left:{value:u.layout.number_position_left,error:null},number_font_size:{value:u.layout.number_font_size,error:null}}),$=b=>{let n={};return Object.keys(b).forEach(g=>{n[g]=b[g].value}),n},d=i(()=>{N.post(route("admin.layouts.update",u.layout.id),$(p)).then(b=>{console.log(b)})},500);return(b,n)=>{const g=U,m=k;return c(),A(B,null,{default:l(()=>[f("div",q,[f("div",H,[f("a",{href:b.route("admin.layouts.index")},[o(g,{icon:"pi pi-chevron-left",outlined:"",rounded:"",class:"mr-2"})],8,J),n[13]||(n[13]=a(" Edycja szablonu certyfikatu "))]),f("div",K,[n[30]||(n[30]=f("label",{class:"flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"},"Nazwa:",-1)),o(t(G),{class:"col-span-12 md:col-span-11",modelValue:p.name.value,"onUpdate:modelValue":n[0]||(n[0]=e=>p.name.value=e),placeholder:"Nazwa",onChange:t(d)},null,8,["modelValue","onChange"]),n[31]||(n[31]=f("label",null,"Data:",-1)),o(t(_),{class:"col-span-12"},{default:l(()=>[o(t(r),null,{default:l(()=>n[14]||(n[14]=[a("Góra:")])),_:1}),o(m,{onInput:t(d),modelValue:p.date_position_top.value,"onUpdate:modelValue":n[1]||(n[1]=e=>p.date_position_top.value=e),placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[15]||(n[15]=[a("Lewo:")])),_:1}),o(m,{"allow-empty":"",onInput:t(d),modelValue:p.date_position_left.value,"onUpdate:modelValue":n[2]||(n[2]=e=>p.date_position_left.value=e),placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[16]||(n[16]=[a("Font:")])),_:1}),o(m,{onInput:t(d),modelValue:p.date_font_size.value,"onUpdate:modelValue":n[3]||(n[3]=e=>p.date_font_size.value=e),placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[17]||(n[17]=[a("px")])),_:1})]),_:1}),n[32]||(n[32]=f("label",null,"Tytuł:",-1)),o(t(_),{class:"col-span-12"},{default:l(()=>[o(t(r),null,{default:l(()=>n[18]||(n[18]=[a("Góra:")])),_:1}),o(m,{onInput:t(d),modelValue:p.title_position_top.value,"onUpdate:modelValue":n[4]||(n[4]=e=>p.title_position_top.value=e),placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[19]||(n[19]=[a("Lewo:")])),_:1}),o(m,{"allow-empty":"",onInput:t(d),modelValue:p.title_position_left.value,"onUpdate:modelValue":n[5]||(n[5]=e=>p.title_position_left.value=e),placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[20]||(n[20]=[a("Font:")])),_:1}),o(m,{onInput:t(d),modelValue:p.title_font_size.value,"onUpdate:modelValue":n[6]||(n[6]=e=>p.title_font_size.value=e),placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[21]||(n[21]=[a("px")])),_:1})]),_:1}),n[33]||(n[33]=f("label",{class:"col-span-12"},"Imię i nazwisko:",-1)),o(t(_),{class:"col-span-12"},{default:l(()=>[o(t(r),null,{default:l(()=>n[22]||(n[22]=[a("Góra:")])),_:1}),o(m,{onInput:t(d),modelValue:p.name_position_top.value,"onUpdate:modelValue":n[7]||(n[7]=e=>p.name_position_top.value=e),placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[23]||(n[23]=[a("Lewo:")])),_:1}),o(m,{"allow-empty":"",onInput:t(d),modelValue:p.name_position_left.value,"onUpdate:modelValue":n[8]||(n[8]=e=>p.name_position_left.value=e),placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[24]||(n[24]=[a("Font:")])),_:1}),o(m,{onInput:t(d),modelValue:p.name_font_size.value,"onUpdate:modelValue":n[9]||(n[9]=e=>p.name_font_size.value=e),placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[25]||(n[25]=[a("px")])),_:1})]),_:1}),n[34]||(n[34]=f("label",null,"Numer:",-1)),o(t(_),{class:"col-span-12"},{default:l(()=>[o(t(r),null,{default:l(()=>n[26]||(n[26]=[a("Góra:")])),_:1}),o(m,{onInput:t(d),modelValue:p.number_position_top.value,"onUpdate:modelValue":n[10]||(n[10]=e=>p.number_position_top.value=e),placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[27]||(n[27]=[a("Lewo:")])),_:1}),o(m,{"allow-empty":"",onInput:t(d),modelValue:p.number_position_left.value,"onUpdate:modelValue":n[11]||(n[11]=e=>p.number_position_left.value=e),placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[28]||(n[28]=[a("Font:")])),_:1}),o(m,{onInput:t(d),modelValue:p.number_font_size.value,"onUpdate:modelValue":n[12]||(n[12]=e=>p.number_font_size.value=e),placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onInput","modelValue"]),o(t(r),null,{default:l(()=>n[29]||(n[29]=[a("px")])),_:1})]),_:1})]),f("div",M,[f("a",{href:b.route("admin.layouts.test",u.layout.id)},[o(g,{icon:"pi pi-eye",label:"Podgląd",class:"p-button-rounded p-button-success p-button-outlined"})],8,Q)])])]),_:1})}}};export{en as default};
