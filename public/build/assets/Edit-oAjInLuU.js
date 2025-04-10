import{s as k}from"./index-DWfN4sef.js";import{s as G}from"./index-D83T4aAw.js";import{_ as I}from"./AppLayout-BTAujB0I.js";import{s as B}from"./index-DcLRr1F8.js";import{B as V,c as y,o as c,y as x,m as z,g as h,i as j,f as N,h as p,a as f,j as a,e as n,u as t}from"./app-eWoWM0QS.js";import{p as A}from"./lodash-CSZeLXE4.js";import{a as U}from"./index-DKmkAHrk.js";import"./index-DEagBk4a.js";import"./index-B28dTLHb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DropdownLink-BT2mdL4O.js";var E=function(v){var i=v.dt;return`
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
`)},F={root:"p-inputgroup"},L=V.extend({name:"inputgroup",theme:E,classes:F}),S={name:"BaseInputGroup",extends:U,style:L,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},_={name:"InputGroup",extends:S,inheritAttrs:!1};function C(s,v,i,w,u,e){return c(),y("div",z({class:s.cx("root")},s.ptmi("root")),[x(s.$slots,"default")],16)}_.render=C;var P={root:"p-inputgroupaddon"},D=V.extend({name:"inputgroupaddon",classes:P}),O={name:"BaseInputGroupAddon",extends:U,style:D,provide:function(){return{$pcInputGroupAddon:this,$parentInstance:this}}},r={name:"InputGroupAddon",extends:O,inheritAttrs:!1};function T(s,v,i,w,u,e){return c(),y("div",z({class:s.cx("root")},s.ptmi("root")),[x(s.$slots,"default")],16)}r.render=T;const q={class:"card"},H={class:"font-semibold text-xl mb-3"},J=["href"],K={class:"grid grid-cols-12 gap-2"},M={class:"pt-3"},Q=["href"],uo={__name:"Edit",props:{layout:Object},setup(s){const{_:v,debounce:i,pickBy:w}=A,u=s,e=h({name:{value:u.layout.name,error:null},date_position_top:{value:u.layout.date_position_top,error:null},date_position_left:{value:u.layout.date_position_left,error:null},date_font_size:{value:u.layout.date_font_size,error:null},name_position_top:{value:u.layout.name_position_top,error:null},name_position_left:{value:u.layout.name_position_left,error:null},name_font_size:{value:u.layout.name_font_size,error:null},title_position_top:{value:u.layout.title_position_top,error:null},title_position_left:{value:u.layout.title_position_left,error:null},title_font_size:{value:u.layout.title_font_size,error:null},number_position_top:{value:u.layout.number_position_top,error:null},number_position_left:{value:u.layout.number_position_left,error:null},number_font_size:{value:u.layout.number_font_size,error:null}}),$=b=>{let o={};return Object.keys(b).forEach(g=>{o[g]=b[g].value}),o},d=i(()=>{j.post(route("admin.layouts.update",u.layout.id),$(e)).then(b=>{console.log(b)})},500);return(b,o)=>{const g=G,m=k;return c(),N(I,null,{default:p(()=>[f("div",q,[f("div",H,[f("a",{href:b.route("admin.layouts.index")},[n(g,{icon:"pi pi-chevron-left",outlined:"",rounded:"",class:"mr-2"})],8,J),o[13]||(o[13]=a(" Edycja szablonu certyfikatu "))]),f("div",K,[o[30]||(o[30]=f("label",{class:"flex items-center col-span-12 mb-2 md:col-span-1 md:mb-0"},"Nazwa:",-1)),n(t(B),{class:"col-span-12 md:col-span-11",modelValue:e.name.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.name.value=l),placeholder:"Nazwa",onChange:t(d)},null,8,["modelValue","onChange"]),o[31]||(o[31]=f("p",{class:"col-span-12 mt-5"},"Podaj wartości w mm określające pozycję elementu od lewego górnego rogu strony:",-1)),o[32]||(o[32]=f("label",null,"Data:",-1)),n(t(_),{class:"col-span-12"},{default:p(()=>[n(t(r),null,{default:p(()=>o[14]||(o[14]=[a("Góra:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[1]||(o[1]=l=>e.date_position_top.value=l)],modelValue:e.date_position_top.value,placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[15]||(o[15]=[a("Lewo:")])),_:1}),n(m,{"allow-empty":"","onUpdate:modelValue":[t(d),o[2]||(o[2]=l=>e.date_position_left.value=l)],modelValue:e.date_position_left.value,placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[16]||(o[16]=[a("Font:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[3]||(o[3]=l=>e.date_font_size.value=l)],modelValue:e.date_font_size.value,placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[17]||(o[17]=[a("px")])),_:1})]),_:1}),o[33]||(o[33]=f("label",null,"Tytuł:",-1)),n(t(_),{class:"col-span-12"},{default:p(()=>[n(t(r),null,{default:p(()=>o[18]||(o[18]=[a("Góra:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[4]||(o[4]=l=>e.title_position_top.value=l)],modelValue:e.title_position_top.value,placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[19]||(o[19]=[a("Lewo:")])),_:1}),n(m,{"allow-empty":"","onUpdate:modelValue":[t(d),o[5]||(o[5]=l=>e.title_position_left.value=l)],modelValue:e.title_position_left.value,placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[20]||(o[20]=[a("Font:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[6]||(o[6]=l=>e.title_font_size.value=l)],modelValue:e.title_font_size.value,placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[21]||(o[21]=[a("px")])),_:1})]),_:1}),o[34]||(o[34]=f("label",{class:"col-span-12"},"Imię i nazwisko:",-1)),n(t(_),{class:"col-span-12"},{default:p(()=>[n(t(r),null,{default:p(()=>o[22]||(o[22]=[a("Góra:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[7]||(o[7]=l=>e.name_position_top.value=l)],modelValue:e.name_position_top.value,placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[23]||(o[23]=[a("Lewo:")])),_:1}),n(m,{"allow-empty":"","onUpdate:modelValue":[t(d),o[8]||(o[8]=l=>e.name_position_left.value=l)],modelValue:e.name_position_left.value,placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[24]||(o[24]=[a("Font:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[9]||(o[9]=l=>e.name_font_size.value=l)],modelValue:e.name_font_size.value,placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[25]||(o[25]=[a("px")])),_:1})]),_:1}),o[35]||(o[35]=f("label",null,"Numer:",-1)),n(t(_),{class:"col-span-12"},{default:p(()=>[n(t(r),null,{default:p(()=>o[26]||(o[26]=[a("Góra:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[10]||(o[10]=l=>e.number_position_top.value=l)],modelValue:e.number_position_top.value,placeholder:"góra","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[27]||(o[27]=[a("Lewo:")])),_:1}),n(m,{"allow-empty":"","onUpdate:modelValue":[t(d),o[11]||(o[11]=l=>e.number_position_left.value=l)],modelValue:e.number_position_left.value,placeholder:"(zostaw puste żeby wyśrodkować)","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[28]||(o[28]=[a("Font:")])),_:1}),n(m,{"onUpdate:modelValue":[t(d),o[12]||(o[12]=l=>e.number_font_size.value=l)],modelValue:e.number_font_size.value,placeholder:"font","show-buttons":"",min:0,max:1e3},null,8,["onUpdate:modelValue","modelValue"]),n(t(r),null,{default:p(()=>o[29]||(o[29]=[a("px")])),_:1})]),_:1})]),f("div",M,[f("a",{href:b.route("admin.layouts.test",u.layout.id)},[n(g,{icon:"pi pi-eye",label:"Podgląd",class:"p-button-rounded p-button-success p-button-outlined"})],8,Q)])])]),_:1})}}};export{uo as default};
