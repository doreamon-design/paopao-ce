import{W as b,_ as k}from"./index-c7635d00.js";import{R as B,H as C,S as N,b as R,e as U,i as V}from"./naive-ui-d8de3dda.js";import{d as W,H as p,e as $,q as z,w as s,j as a,k as n,A as _,x as i}from"./@vue-a481fc63.js";const H={class:"whisper-wrap"},S={class:"whisper-line"},j={class:"whisper-line send-wrap"},q=W({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(r,{emit:u}){const d=r,o=p(""),t=p(!1),c=()=>{u("success")},m=()=>{t.value=!0,b({user_id:d.user.id,content:o.value}).then(e=>{window.$message.success("发送成功"),t.value=!1,o.value="",c()}).catch(e=>{t.value=!1})};return(e,l)=>{const h=B,w=C,f=N,v=R,g=U,y=V;return $(),z(y,{show:e.show,"onUpdate:show":c,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:s(()=>[a("div",H,[n(f,{"show-icon":!1},{default:s(()=>[_(" 即将发送私信给: "),n(w,{style:{"max-width":"100%"}},{default:s(()=>[n(h,{type:"success"},{default:s(()=>[_(i(e.user.nickname)+"@"+i(e.user.username),1)]),_:1})]),_:1})]),_:1}),a("div",S,[n(v,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:o.value,"onUpdate:value":l[0]||(l[0]=x=>o.value=x),maxlength:"200","show-count":""},null,8,["value"])]),a("div",j,[n(g,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:m},{default:s(()=>[_(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const M=k(q,[["__scopeId","data-v-0cbfe47c"]]);export{M as _};
