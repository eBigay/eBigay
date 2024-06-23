import{s as o,R as r,M as c,u as m,j as i,a as t,P as p,L as x,V as u,b as y,c as w,F as h,d as $}from"./index.bc57bac7.js";import{T as d}from"./enums.8e4ede7c.js";import{L as g,F as v,I as C,R as B,a as b}from"./ItemDetails.7375d5fc.js";import"./ItemDetails.styled.7726f1d4.js";import"./Calling.0e3ec791.js";import"./lodash.bc129b5f.js";const k="/assets/womenCategory.f27b5bb8.svg",z="/assets/menCategory.ffd083ed.svg",S="/assets/fornitureCategory.4eb5292c.svg",F="/assets/variousItemsCategory.3755c04e.svg",H=[{id:1,img:k,title:"Women",description:"Clothes, Shoes, Bags, Jewelry, Accessories",navUrl:"/search?category=women+clothes"},{id:2,img:z,title:"Man",description:"Clothes, Shoes, Bags, Jewelry, Accessories",navUrl:"/search?category=men+clothes"},{id:3,img:S,title:"Furniture",description:"Clothes, Shoes, Bags, Jewelry, Accessories",navUrl:"/search?category=furniture"},{id:4,img:F,title:"Various items",description:"Clothes, Shoes, Bags, Jewelry, Accessories",navUrl:"/search?category=various+items"}],I=o.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-top: 72px;
  margin-bottom: 100px;
  gap: 27px;
  ${r.narrowBreakpoint`
   grid-template-columns: repeat(2, minmax(230px, 1fr));
  `}
  ${r.mobileBreakpoint`
   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
   padding: 0 2rem
  `}
  ${c.narrowBreakpoint`
   grid-template-columns: repeat(4, minmax(230px, 1fr));
  `}
  ${c.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${c.superWideBreakpoint`
  padding: 0 25rem;
  `}
`,A=o.div`
  height: 400px;
  max-height: 100%;
  position: relative;
  button {
    margin: 0 0 20px 20px;
    min-height: 34px;
  }
`,L=o.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,j=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: ${({theme:e})=>e.colors.clr5};
`,R=o.h1`
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.clr4};
  margin: 0 0 0 20px;
`,M=o.p`
  color: ${({theme:e})=>e.colors.clr4};
  font-size: ${({theme:e})=>e.fontSizes.fsXs};
  font-weight: 400;
  margin: 8px 0 11px 20px;
`,T=({title:e,description:s,imageUrl:n,navUrl:a})=>{const l=m();return i(A,{children:[t(L,{src:n,alt:s}),i(j,{children:[t(R,{children:e}),t(M,{children:s}),t(p,{width:"115px",height:"34",fontSize:"xs",onClick:()=>{l(a),window.scroll({top:0,behavior:"smooth"})},children:"Explore More"})]})]})},U=()=>t(I,{children:H.map(e=>t(T,{navUrl:e.navUrl,title:e.title,description:e.description,imageUrl:e.img},e.id))}),W=o.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.footer};
  gap: 1.9rem;
  width: 100%;
  padding: 50px 80px;
  margin-top: 96px;
  ${r.mobileBreakpoint`
  padding: 2rem;
  `}
`,E=o.div`
  font-size: ${({theme:e})=>e.fontSizes.fsL};
  font-weight: 400;
  text-align: center;
  max-width: 50rem;
  ${r.mobileBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsM};
  `}
`,J=o.div`
  width: 100%;
  border-top: 1px solid rgba(215, 215, 215, 1);
`,X=o.div`
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  color: ${({theme:e})=>e.colors.clr3};
  ${r.mobileBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsSm};
  `}
`,D=()=>i(W,{children:[t(x,{}),t(E,{children:d.FooterText}),t(J,{}),t(X,{children:d.CopyRights})]}),P="/assets/HeroImg.d0a83d60.png",V=o.div`
  display: flex;
  padding-left: 80px;
  padding-right: 36px;
  margin-top: 51px;
  ${c.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${c.superWideBreakpoint`
  padding: 0 25rem;
  `}
  ${r.laptopBreakpoint`
  padding: 0 5rem;
  `}
  ${r.mobileBreakpoint`
   padding: 0 2rem
  `}
`,N=o.div`
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  ${r.laptopBreakpoint`
  text-align:center;
  align-items:center;
  `}
`,q=o.h2`
  font-size: ${({theme:e})=>e.fontSizes.fsXxl};
  font-weight: 600;
  color: ${({theme:e})=>e.colors.clr2};
  line-height: 70px;
  width: 510px;
  ${r.laptopBreakpoint`
  width: 100%;
  `}
  ${r.mobileBreakpoint`
  font-size: 2.3rem;
  line-height: 40px;
  `}
`,G=o.h3`
  max-width: 480px;
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  font-weight: 400;
  color: ${({theme:e})=>e.colors.clr3};
  line-height: 40.13px;
  ${r.mobileBreakpoint`
  // font-size: 2.3rem;
  line-height: 35px;
  `}
`,O=o.img`
  min-width: 450px;
  max-height: 526px;
  ${r.laptopBreakpoint`
    display: none; 
  `}
`,Q=o.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  ${r.laptopBreakpoint`
  justify-content: center;
  `}
`,_=()=>{const e=m();return i(V,{children:[i(N,{children:[t(q,{children:d.HeroHeader}),t(G,{children:d.HeroSubHeader}),i(Q,{children:[t(p,{width:"161px",height:"50px",fontSize:"s",onClick:()=>{e("/search"),window.scroll({top:0,behavior:"smooth"})},children:"Explore More"}),i(p,{width:"161px",height:"50px",fontSize:"s",onClick:()=>{e("/addNew"),window.scroll({top:0,behavior:"smooth"})},children:["Give a Product ",t(u,{fontSize:"medium"})]})]})]}),t(O,{src:P,alt:""})]})},K=({isLoading:e,isError:s,error:n,items:a})=>e?t(g,{children:t(y,{})}):s?t(v,{children:n.message}):t(g,{children:Array.isArray(a)&&a.map(l=>t(C,{item:l},l._id))}),Y=()=>{const{useInfiniteQueryAllItems:e}=w(),s={queryText:"",category:"",page:0,sortBy:"createdAt",sortOrder:"desc",limit:12},{data:n,isLoading:a,isError:l,error:f}=e(s);return i(h,{children:[t(B,{children:"Recently Added"}),t(K,{isLoading:a,isError:l,error:f,items:(n==null?void 0:n.pages[0])||[]})]})},ne=()=>i(h,{children:[t(b,{}),i($,{children:[t(_,{}),t(U,{}),t(Y,{}),t(D,{})]})]});export{ne as default};
