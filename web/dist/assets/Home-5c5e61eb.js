import{_ as Ue}from"./whisper-a4b81d0e.js";import{_ as Te,a as Ve}from"./post-item.vue_vue_type_style_index_0_lang-d54eb310.js";import{_ as Ee}from"./post-skeleton-f8428500.js";import{d as _e,H as l,c as ce,b as ge,e as c,f as y,bf as U,j as A,k as a,w as i,q as O,Y as k,y as ve,A as Y,x as ee,F as pe,u as de,E as Ne}from"./@vue-a481fc63.js";import{u as fe}from"./vuex-44de225f.js";import{l as me}from"./lodash-e0b37ac3.js";import{g as xe,a as Re,c as qe,b as Ge,d as Oe,e as Pe,_ as Fe}from"./index-c7635d00.js";import{p as Le}from"./content-34f8522f.js";import{V as B,P as H}from"./IEnum-5453a777.js";import{I as Ye,V as Se,A as Me,d as Ke,E as We}from"./@vicons-7a4ef312.js";import{o as he,v as je,j as Qe,e as He,w as Ze,x as Je,y as Xe,z as $e,A as et,B as tt,C as at,a as we,D as st,E as ot,F as nt,G as lt,l as it,H as rt,I as ut,k as ct}from"./naive-ui-d8de3dda.js";import{_ as pt}from"./main-nav.vue_vue_type_style_index_0_lang-f1df2083.js";import{b as dt,u as vt}from"./vue-router-e5a2430e.js";import{W as mt}from"./v3-infinite-loading-2c58ec2f.js";import{S as _t}from"./@opentiny-d73a2d67.js";import"./copy-to-clipboard-4ef7d3eb.js";import"./@babel-725317a4.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";import"./moment-2ab8298d.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-39372edb.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./paopao-video-player-2fe58954.js";import"./vue-1e3b54ec.js";import"./xss-a5544f63.js";import"./cssfilter-af71ba68.js";const gt=Z=>{const F=new FileReader,b=r=>["application/zip","application/x-zip","application/octet-stream","application/x-zip-compressed"].includes(r),T=()=>{const r=new Uint8Array(F.result).subarray(0,4);let V="";for(let g=0;g<r.length;g++)V+=r[g].toString(16);switch(V){case"504b0304":case"504b0506":case"504b0708":return b("application/zip");case"504b030414":return b("application/x-zip-compressed");case"504b0508":return b("application/x-zip");case"504b5370":return b("application/octet-stream");default:return!1}};return new Promise((r,V)=>{F.onloadend=()=>{const g=Z.type;r(g===""||g==="application/octet-stream"?T():b(g))},F.readAsArrayBuffer(Z.slice(0,4))})},ft={key:0,class:"compose-wrap"},ht={class:"compose-line"},wt={class:"compose-user"},yt={class:"compose-line compose-options"},kt={class:"attachment"},At={class:"submit-wrap"},bt={class:"attachment-list-wrap"},Ct={key:0,class:"attachment-price-wrap"},zt=A("span",null," 附件价格￥",-1),It={key:0,class:"eye-wrap"},Dt={key:1,class:"link-wrap"},Bt={key:1,class:"compose-wrap"},Ut=A("div",{class:"login-wrap"},[A("span",{class:"login-banner"}," 登录后，精彩更多")],-1),Tt={key:0,class:"login-only-wrap"},Vt={key:1,class:"login-wrap"},Et=_e({__name:"compose",emits:["post-success"],setup(Z,{emit:F}){const b=fe(),T=l([]),r=l(!1),V=l(!1),g=l(!1),P=l(!1),f=l(""),R=l([]),E=l(),N=l(0),m=l("public/image"),I=l([]),p=l([]),h=l([]),C=l([]),D=l(B.PUBLIC),q=l(B.PUBLIC),K="true".toLowerCase()==="true",L=+"400",J=l("true".toLowerCase()==="true"),X=l("true".toLowerCase()==="true"),te=l("true".toLowerCase()==="true"),S=l("false".toLowerCase()==="true"),ae=l("true".toLowerCase()==="true"),W="/v1/attachment",G=ce(()=>"Bearer "+localStorage.getItem("PAOPAO_TOKEN")),$=ce(()=>{let e=[{value:B.PUBLIC,label:"公开"},{value:B.PRIVATE,label:"私密"},{value:B.Following,label:"关注可见"}];return K&&e.push({value:B.FRIEND,label:"好友可见"}),e}),se=()=>{g.value=!g.value,g.value&&P.value&&(P.value=!1)},j=()=>{P.value=!P.value,P.value&&g.value&&(g.value=!1)},oe=me.debounce(e=>{xe({k:e}).then(t=>{let n=[];t.suggest.map(o=>{n.push({label:o,value:o})}),T.value=n,r.value=!1}).catch(t=>{r.value=!1})},200),u=me.debounce(e=>{Re({k:e}).then(t=>{let n=[];t.suggest.map(o=>{n.push({label:o,value:o})}),T.value=n,r.value=!1}).catch(t=>{r.value=!1})},200),v=(e,t)=>{r.value||(r.value=!0,t==="@"?oe(e):u(e))},x=e=>{e.length>L?f.value=e.substring(0,L):f.value=e},w=e=>{m.value=e},z=e=>{for(let d=0;d<e.length;d++){var t=e[d].name,n=t.split(".").slice(0,-1).join("."),o=t.split(".").pop();n.length>30&&(e[d].name=n.substring(0,18)+"..."+n.substring(n.length-9)+"."+o)}I.value=e},ne=async e=>{var t,n,o,d,s;return m.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((t=e.file.file)==null?void 0:t.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):m.value==="image"&&((n=e.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):m.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=e.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):m.value==="public/video"&&((d=e.file.file)==null?void 0:d.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):m.value==="attachment"&&!await gt(e.file.file)?(window.$message.warning("附件仅允许 zip 格式"),!1):m.value==="attachment"&&((s=e.file.file)==null?void 0:s.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},le=({file:e,event:t})=>{var n;try{let o=JSON.parse((n=t.target)==null?void 0:n.response);o.code===0&&(m.value==="public/image"&&p.value.push({id:e.id,content:o.data.content}),m.value==="public/video"&&h.value.push({id:e.id,content:o.data.content}),m.value==="attachment"&&C.value.push({id:e.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},ie=({file:e,event:t})=>{var n;try{let o=JSON.parse((n=t.target)==null?void 0:n.response);if(o.code!==0){let d=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(s=>{d+=":"+s}),window.$message.error(d)}}catch{window.$message.error("上传失败")}},re=({file:e})=>{let t=p.value.findIndex(n=>n.id===e.id);t>-1&&p.value.splice(t,1),t=h.value.findIndex(n=>n.id===e.id),t>-1&&h.value.splice(t,1),t=C.value.findIndex(n=>n.id===e.id),t>-1&&C.value.splice(t,1)},ue=()=>{if(f.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:e,users:t}=Le(f.value);const n=[];let o=100;n.push({content:f.value,type:H.TEXT,sort:o}),p.value.map(s=>{o++,n.push({content:s.content,type:H.IMAGEURL,sort:o})}),h.value.map(s=>{o++,n.push({content:s.content,type:H.VIDEOURL,sort:o})}),C.value.map(s=>{o++,n.push({content:s.content,type:H.ATTACHMENT,sort:o})}),R.value.length>0&&R.value.map(s=>{o++,n.push({content:s,type:H.LINKURL,sort:o})}),V.value=!0;let d=D.value;d==B.Following&&(d=B.PUBLIC),qe({contents:n,tags:Array.from(new Set(e)),users:Array.from(new Set(t)),attachment_price:+N.value*100,visibility:d}).then(s=>{var M;window.$message.success("发布成功"),V.value=!1,F("post-success",s),g.value=!1,P.value=!1,(M=E.value)==null||M.clear(),I.value=[],f.value="",R.value=[],p.value=[],h.value=[],C.value=[],D.value=q.value}).catch(s=>{V.value=!1})},Q=e=>{b.commit("triggerAuth",!0),b.commit("triggerAuthKey",e)};return ge(()=>{const e="friend".toLowerCase();K&&e==="friend"?q.value=B.FRIEND:e==="following"?q.value=B.Following:e==="public"?q.value=B.PUBLIC:q.value=B.PRIVATE,D.value=q.value}),(e,t)=>{const n=he,o=je,d=Qe,s=He,M=Ze,ye=Je,ke=Xe,Ae=$e,be=et,Ce=tt,ze=at,Ie=we,De=st,Be=ot;return c(),y("div",null,[U(b).state.userInfo.id>0?(c(),y("div",ft,[A("div",ht,[A("div",wt,[a(n,{round:"",size:30,src:U(b).state.userInfo.avatar},null,8,["src"])]),a(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:r.value,value:f.value,prefix:["@","#"],options:T.value,onSearch:v,"onUpdate:value":x,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),a(Ce,{ref_key:"uploadRef",ref:E,abstract:"","list-type":"image",multiple:!0,max:9,action:W,headers:{Authorization:G.value},data:{type:m.value},"file-list":I.value,onBeforeUpload:ne,onFinish:le,onError:ie,onRemove:re,"onUpdate:fileList":z},{default:i(()=>[A("div",yt,[A("div",kt,[a(M,{abstract:""},{default:i(({handleClick:_})=>[a(s,{disabled:I.value.length>0&&m.value==="public/video"||I.value.length===9,onClick:()=>{w("public/image"),_()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[a(d,{size:"20",color:"var(--primary-color)"},{default:i(()=>[a(U(Ye))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),X.value?(c(),O(M,{key:0,abstract:""},{default:i(({handleClick:_})=>[a(s,{disabled:I.value.length>0&&m.value!=="public/video"||I.value.length===9,onClick:()=>{w("public/video"),_()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[a(d,{size:"20",color:"var(--primary-color)"},{default:i(()=>[a(U(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):k("",!0),te.value?(c(),O(M,{key:1,abstract:""},{default:i(({handleClick:_})=>[a(s,{disabled:I.value.length>0&&m.value==="public/video"||I.value.length===9,onClick:()=>{w("attachment"),_()},quaternary:"",circle:"",type:"primary"},{icon:i(()=>[a(d,{size:"20",color:"var(--primary-color)"},{default:i(()=>[a(U(Me))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):k("",!0),a(s,{quaternary:"",circle:"",type:"primary",onClick:ve(se,["stop"])},{icon:i(()=>[a(d,{size:"20",color:"var(--primary-color)"},{default:i(()=>[a(U(Ke))]),_:1})]),_:1},8,["onClick"]),ae.value?(c(),O(s,{key:2,quaternary:"",circle:"",type:"primary",onClick:ve(j,["stop"])},{icon:i(()=>[a(d,{size:"20",color:"var(--primary-color)"},{default:i(()=>[a(U(We))]),_:1})]),_:1},8,["onClick"])):k("",!0)]),A("div",At,[a(ke,{trigger:"hover",placement:"bottom"},{trigger:i(()=>[a(ye,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:f.value.length/U(L)*100},null,8,["percentage"])]),default:i(()=>[Y(" "+ee(f.value.length)+" / "+ee(U(L)),1)]),_:1}),a(s,{loading:V.value,onClick:ue,type:"primary",secondary:"",round:""},{default:i(()=>[Y(" 发布 ")]),_:1},8,["loading"])])]),A("div",bt,[a(Ae),C.value.length>0?(c(),y("div",Ct,[S.value?(c(),O(be,{key:0,value:N.value,"onUpdate:value":t[0]||(t[0]=_=>N.value=_),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:i(()=>[zt]),_:1},8,["value"])):k("",!0)])):k("",!0)])]),_:1},8,["headers","data","file-list"]),P.value?(c(),y("div",It,[a(De,{value:D.value,"onUpdate:value":t[1]||(t[1]=_=>D.value=_),name:"radiogroup"},{default:i(()=>[a(Ie,null,{default:i(()=>[(c(!0),y(pe,null,de($.value,_=>(c(),O(ze,{key:_.value,value:_.value,label:_.label},null,8,["value","label"]))),128))]),_:1})]),_:1},8,["value"])])):k("",!0),g.value?(c(),y("div",Dt,[a(Be,{value:R.value,"onUpdate:value":t[2]||(t[2]=_=>R.value=_),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":i(()=>[Y(" 创建链接 ")]),_:1},8,["value"])])):k("",!0)])):(c(),y("div",Bt,[Ut,J.value?k("",!0):(c(),y("div",Tt,[a(s,{strong:"",secondary:"",round:"",type:"primary",onClick:t[3]||(t[3]=_=>Q("signin"))},{default:i(()=>[Y(" 登录 ")]),_:1})])),J.value?(c(),y("div",Vt,[a(s,{strong:"",secondary:"",round:"",type:"primary",onClick:t[4]||(t[4]=_=>Q("signin"))},{default:i(()=>[Y(" 登录 ")]),_:1}),a(s,{strong:"",secondary:"",round:"",type:"info",onClick:t[5]||(t[5]=_=>Q("signup"))},{default:i(()=>[Y(" 注册 ")]),_:1})])):k("",!0)]))])}}});const Nt="data:image/png;base64,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",xt="/assets/discover-tweets-ab101944.jpeg",Rt="/assets/following-tweets-e36b4410.jpeg",qt={class:"slide-bar-item"},Gt={class:"slide-bar-item-title slide-bar-user-link"},Ot={key:1,class:"skeleton-wrap"},Pt={key:0,class:"empty-wrap"},Ft={key:1},Lt={key:2},Yt={class:"load-more-wrap"},St={class:"load-more-spinner"},Mt=_e({__name:"Home",setup(Z){const F="true".toLowerCase()==="true",b="true".toLowerCase()==="true",T=fe(),r=dt(),V=vt(),g=l(9),P=l(8),f=l([{title:"最新动态",style:1,username:"",avatar:Nt,show:!0},{title:"热门推荐",style:2,username:"",avatar:xt,show:!1},{title:"正在关注",style:3,username:"",avatar:Rt,show:!1},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0},{title:"",style:1,username:"",avatar:"",show:!0}]),R=l("泡泡广场"),E=l(!1),N=l(!1),m=l(1),I=l(""),p=l([]),h=l(1),C=l(20),D=l(0),q=l(!1),K=l({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,is_following:!1,created_on:0,follows:0,followings:0,status:1}),L=u=>{K.value=u,q.value=!0},J=()=>{q.value=!1},X=()=>{R.value="泡泡广场",r.query&&r.query.q&&(r.query.t&&r.query.t==="tag"?R.value="#"+decodeURIComponent(r.query.q):R.value="搜索: "+decodeURIComponent(r.query.q))},te=ce(()=>F&&b&&T.state.desktopModelShow&&T.state.userInfo.id>0),S=()=>{E.value=!1,N.value=!1,p.value=[],h.value=1,D.value=0},ae=(u,v)=>{switch(S(),m.value=u.style,r.query.q&&(r.query.q=null,X()),u.style){case 1:G();break;case 2:G();break;case 3:r.query.q=null,G();break;case 21:I.value=u.username,$();break}f.value[v].show=!1},W=()=>{f.value=f.value.slice(0,3),!(!F||!b||T.state.userInfo.id===0)&&Ge({page:1,page_size:50}).then(u=>{var v=0;const x=u.list||[];let w=[];for(;v<x.length;v++){let z=x[v];w.push({title:z.nickname,style:21,username:z.username,avatar:z.avatar,show:!1})}w.length>0&&(f.value=f.value.concat(w))}).catch(u=>{console.log(u)})},G=()=>{E.value=!0,Oe({query:r.query.q?decodeURIComponent(r.query.q):null,type:r.query.t,page:h.value,page_size:C.value}).then(u=>{E.value=!1,u.list.length===0&&(N.value=!0),h.value>1?p.value=p.value.concat(u.list):(p.value=u.list,window.scrollTo(0,0)),D.value=Math.ceil(u.pager.total_rows/C.value)}).catch(u=>{E.value=!1,h.value>1&&h.value--})},$=()=>{E.value=!0,Pe({username:I.value,style:"post",page:h.value,page_size:C.value}).then(u=>{E.value=!1,u.list.length===0&&(N.value=!0),h.value>1?p.value=p.value.concat(u.list):(p.value=u.list||[],window.scrollTo(0,0)),D.value=Math.ceil(u.pager.total_rows/C.value)}).catch(u=>{p.value=[],h.value>1&&h.value--,E.value=!1})},se=u=>{if(m.value!=1){V.push({name:"post",query:{id:u.id}});return}let v=[],x=p.value.length;x==C.value&&x--;for(var w=0;w<x;w++){let z=p.value[w];if(!z.is_top)break;v.push(z)}for(v.push(u);w<x;w++)v.push(p.value[w]);p.value=v},j=()=>{switch(m.value){case 1:G();break;case 2:G();break;case 3:G();break;case 21:r.query.q?G():$();break}},oe=()=>{h.value<D.value||D.value==0?(N.value=!1,h.value++,j()):N.value=!0};return ge(()=>{S(),W(),G()}),Ne(()=>({path:r.path,query:r.query,refresh:T.state.refresh}),(u,v)=>{if(X(),u.refresh!==v.refresh){S(),setTimeout(()=>{W(),j()},0);return}v.path!=="/post"&&u.path==="/"&&(S(),setTimeout(()=>{W(),j()},0))}),(u,v)=>{const x=pt,w=Et,z=lt,ne=he,le=it,ie=rt,re=Ee,ue=ut,Q=Te,e=Ve,t=Ue,n=nt,o=ct,d=we;return c(),y("div",null,[a(x,{title:R.value},null,8,["title"]),a(n,{class:"main-content-wrap",bordered:""},{default:i(()=>[a(z,null,{default:i(()=>[a(w,{onPostSuccess:se})]),_:1}),te.value?(c(),O(z,{key:0},{default:i(()=>[a(U(_t),{modelValue:f.value,"onUpdate:modelValue":v[0]||(v[0]=s=>f.value=s),"wheel-blocks":P.value,"init-blocks":g.value,onClick:ae,tag:"div","sub-tag":"div"},{default:i(s=>[A("div",qt,[a(le,{value:"1",offset:[-4,48],dot:"",show:s.slotData.show},{default:i(()=>[a(ne,{round:"",size:48,src:s.slotData.avatar,class:"slide-bar-item-avatar"},null,8,["src"])]),_:2},1032,["show"]),A("div",Gt,[a(ie,{"line-clamp":2},{default:i(()=>[Y(ee(s.slotData.title),1)]),_:2},1024)])])]),_:1},8,["modelValue","wheel-blocks","init-blocks"])]),_:1})):k("",!0),E.value&&p.value.length===0?(c(),y("div",Ot,[a(re,{num:C.value},null,8,["num"])])):k("",!0),A("div",null,[p.value.length===0?(c(),y("div",Pt,[a(ue,{size:"large",description:"暂无数据"})])):k("",!0),U(T).state.desktopModelShow?(c(),y("div",Ft,[(c(!0),y(pe,null,de(p.value,s=>(c(),O(z,{key:s.id},{default:i(()=>[a(Q,{post:s,onSendWhisper:L},null,8,["post"])]),_:2},1024))),128))])):(c(),y("div",Lt,[(c(!0),y(pe,null,de(p.value,s=>(c(),O(z,{key:s.id},{default:i(()=>[a(e,{post:s,onSendWhisper:L},null,8,["post"])]),_:2},1024))),128))]))]),a(t,{show:q.value,user:K.value,onSuccess:J},null,8,["show","user"])]),_:1}),D.value>0?(c(),O(d,{key:0,justify:"center"},{default:i(()=>[a(U(mt),{class:"load-more",slots:{complete:"没有更多泡泡了",error:"加载出错"},onInfinite:v[1]||(v[1]=s=>oe())},{spinner:i(()=>[A("div",Yt,[N.value?k("",!0):(c(),O(o,{key:0,size:14})),A("span",St,ee(N.value?"没有更多泡泡了":"加载更多"),1)])]),_:1})]),_:1})):k("",!0)])}}});const Ua=Fe(Mt,[["__scopeId","data-v-1066affe"]]);export{Ua as default};
