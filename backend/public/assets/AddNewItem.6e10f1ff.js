import{s as r,R as c,M as k,c as F,g as A,r as f,j as m,a as t,P as y,F as N,an as v}from"./index.bc57bac7.js";import{c as $,a as p,d as B,F as U,b as o,U as R}from"./UploadWidget.23f988fd.js";import{C as j}from"./CategoriesToFilter.905f7908.js";import"./lodash.bc129b5f.js";const z=r.div`
  margin-top: 50px;
  ${c.wideBreakpoint`
    padding: 0 5rem;
    `}
  ${c.laptopBreakpoint`
    padding: 0 5rem;
    `}
  ${c.mobileBreakpoint`
       padding: 0 2rem;
      `}
  ${k.wideBreakpoint`
  padding: 0 15rem;
  `}
`,D=r.h1`
  font-size: ${({theme:a})=>a.fontSizes.fsXL};
  font-weight: 400;
  color: ${({theme:a})=>a.colors.clr3};
  padding-bottom: 2rem;
`,O=r.div`
  position: relative;
`,T=r.img`
  max-height: 4rem;
`,W=r.div`
  position: relative;
  display: flex;
  gap: 0.6rem;
  padding: 1rem 0;
  flex-wrap: wrap;
`,E=r.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  top: 0;
  right: 100%;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #676767;
`,M=r.form.attrs({className:"add-new-form"})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`,P=$().shape({itemName:p().required("Required Field"),description:p().required("Required Field").max(200,"max 200 chars"),qty:B().required("Required Field"),category:p().required("Required Field")}),G=()=>{const a={itemName:"",description:"",qty:1,location:"israel",category:"electronics"},{add:x}=F(),{mutate:w}=x,{auth:{user:u}}=A(),[d,s]=f.exports.useState([]),[h,I]=f.exports.useState(""),b=j.map(e=>({key:e.id,value:e.category}));function S(e,i,n){if(e){I(e),n.close({quiet:!0});return}i.event==="success"&&s(l=>{var g;return[...l,(g=i==null?void 0:i.info)==null?void 0:g.secure_url]})}const q=e=>{s(i=>i.filter(n=>n!==e))},C=e=>{if(!u)return;const i={...e,images:d,createdAt:Date.now(),createdBy:u._id};w(i)};return m(z,{children:[t(D,{children:"Add new Item:"}),t(U,{initialValues:a,onSubmit:(e,{resetForm:i})=>{C(e),s(()=>[]),i({})},validationSchema:P,children:({handleSubmit:e})=>m(M,{onSubmit:e,children:[t(o,{control:"input",type:"text",placeholder:"item name",name:"itemName"}),t(o,{control:"textArea",label:"Description",name:"description"}),t(o,{control:"select",label:"category:",name:"select",options:b}),t(o,{control:"select",label:"quantity:",name:"select",options:[1,2,3,4,5,6,7,8]}),t(R,{onUpload:S,children:({open:i})=>{function n(l){l.preventDefault(),i()}return t(y,{onClick:n,children:"Upload Images"})}}),t(y,{width:"120px",fontSize:"l",type:"submit",children:"Add Item"}),h!==""&&t("h2",{children:h})]})}),t(W,{children:d&&t(N,{children:d.map(e=>m(O,{children:[t(T,{src:e}),t(E,{onClick:()=>q(e),children:t(v,{fontSize:"small"})})]},e))})})]})};export{G as default};
