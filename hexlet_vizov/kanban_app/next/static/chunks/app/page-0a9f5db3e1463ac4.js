(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5568:(e,t,r)=>{Promise.resolve().then(r.bind(r,8369))},8369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(5155),a=r(3391),i=r(743),d=r(2115),n=r(4802);function l(e){let{id:t,title:r}=e,{attributes:a,listeners:d,setNodeRef:n,transform:l}=(0,i.PM)({id:t}),o={transform:l?"translate3d(".concat(l.x,"px, ").concat(l.y,"px, 0)"):void 0,marginBottom:"0.5rem",padding:"0.5rem 1rem",border:"1px solid #9c93e5",borderRadius:"8px",background:"#fff",color:"#3e3e3e",cursor:"grab"};return(0,s.jsx)("div",{className:"card",ref:n,style:o,...d,...a,children:r})}function o(e){let{id:t,title:r,documents:a}=e,{setNodeRef:d}=(0,i.zM)({id:t});return(0,s.jsxs)("div",{ref:d,style:{flex:1,padding:"1rem",border:"1px solid #ccc",borderRadius:"4px"},children:[(0,s.jsx)("h3",{children:r}),a.map(e=>(0,s.jsx)(l,{id:e.id,title:e.title},e.id))]})}let c=["in-progress","under-review","completed"];function p(){let e=(0,a.d4)(e=>e.documents),t=(0,a.wA)(),[r,l]=(0,d.useState)("");return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"newDocContainer",style:{display:"flex",gap:"1rem",marginBottom:"1rem"},children:[(0,s.jsx)("input",{className:"newDoc",type:"text",value:r,onChange:e=>l(e.target.value),placeholder:"Название нового документа"}),(0,s.jsx)("button",{className:"addDoc",onClick:()=>{r.trim()&&(t((0,n.tI)({title:r})),l(""))},children:"Добавить документ"})]}),(0,s.jsx)(i.Mp,{onDragEnd:e=>{let{active:r,over:s}=e;s&&r.id!==s.id&&t((0,n.pf)({id:r.id,status:s.id}))},children:(0,s.jsx)("div",{style:{display:"flex",gap:"1rem"},children:c.map(t=>(0,s.jsx)(o,{id:t,title:"in-progress"===t?"В работе":"under-review"===t?"На проверке":"Завершено",documents:e.filter(e=>e.status===t)},t))})})]})}function u(){return(0,s.jsx)(p,{})}r(8334)},4802:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>l,pf:()=>n,tI:()=>d});var s=r(8943),a=r(7354);let i=(0,s.Z0)({name:"documents",initialState:[{id:"1",title:"Документ 1",status:"in-progress"},{id:"2",title:"Документ 2",status:"in-progress"},{id:"3",title:"Документ 3",status:"under-review"}],reducers:{addDocument:(e,t)=>{e.push({id:(0,a.Ak)(),title:t.payload.title,status:"in-progress"})},updateDocumentStatus:(e,t)=>{let{id:r,status:s}=t.payload,a=e.find(e=>e.id===r);a&&(a.status=s)}}}),{addDocument:d,updateDocumentStatus:n}=i.actions,l=i.reducer},8334:e=>{e.exports={page:"page_page__ZU32B",main:"page_main__GlU4n",ctas:"page_ctas__g5wGe",primary:"page_primary__V8M9Y",secondary:"page_secondary__lm_PT",footer:"page_footer__sHKi3",logo:"page_logo__7fc9l"}}},e=>{var t=t=>e(e.s=t);e.O(0,[397,978,743,441,517,358],()=>t(5568)),_N_E=e.O()}]);