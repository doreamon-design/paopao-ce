import{_ as z}from"./post-item.vue_vue_type_style_index_0_lang-8a5b4cf2.js";import{_ as B}from"./post-skeleton-a319fe06.js";import{_ as F}from"./main-nav.vue_vue_type_style_index_0_lang-b750d9b8.js";import{u as P}from"./vuex-d28e9067.js";import{b as R,u as $}from"./vue-router-88cc84d1.js";import{K as b,_ as I}from"./index-ddd65805.js";import{d as K,r as a,j as L,c as e,L as n,$ as m,Y as M,O as u,o as t,F as N,a2 as S,K as V}from"./@vue-ca177dbe.js";import{F as j,G as q,I as E,H as G}from"./naive-ui-2035804c.js";import"./content-13239b6c.js";import"./@vicons-a45d17e4.js";import"./nonesir-video-db921567.js";import"./formatTime-000dbebb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-ca358197.js";import"./toggle-selection-93f4ad84.js";import"./vooks-2c48c2b5.js";import"./evtd-b614532e.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-973e5707.js";import"./@css-render-480a363d.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const H={key:0,class:"skeleton-wrap"},O={key:1},T={key:0,class:"empty-wrap"},U={key:0,class:"pagination-wrap"},Y=K({__name:"Collection",setup(A){const d=P(),g=R();$();const s=a(!1),p=a([]),_=a(+g.query.p||1),i=a(20),r=a(0),l=()=>{s.value=!0,b({page:_.value,page_size:i.value}).then(o=>{s.value=!1,p.value=o.list,r.value=Math.ceil(o.pager.total_rows/i.value),window.scrollTo(0,0)}).catch(o=>{s.value=!1})},v=o=>{_.value=o,l()};return L(()=>{l()}),(o,D)=>{const f=F,h=B,k=E,y=z,w=G,C=j,x=q;return t(),e("div",null,[n(f,{title:"收藏"}),n(C,{class:"main-content-wrap",bordered:""},{default:m(()=>[s.value?(t(),e("div",H,[n(h,{num:i.value},null,8,["num"])])):(t(),e("div",O,[p.value.length===0?(t(),e("div",T,[n(k,{size:"large",description:"暂无数据"})])):u("",!0),(t(!0),e(N,null,S(p.value,c=>(t(),V(w,{key:c.id},{default:m(()=>[n(y,{post:c},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),r.value>0?(t(),e("div",U,[n(x,{page:_.value,"onUpdate:page":v,"page-slot":M(d).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):u("",!0)])}}});const Bt=I(Y,[["__scopeId","data-v-1e709369"]]);export{Bt as default};
