import{r as s,s as o,R as a,M as l,d as z,j as d,a as t,n as E,c as H,l as O,b as w,F as R,P as j,S as q}from"./index.bc57bac7.js";import{l as A}from"./lodash.bc129b5f.js";import{C as M}from"./CategoriesToFilter.905f7908.js";import{L as X,I as W,F as D,a as Q}from"./ItemDetails.7375d5fc.js";import{T as B}from"./enums.8e4ede7c.js";import"./ItemDetails.styled.7726f1d4.js";import"./Calling.0e3ec791.js";function _({enabled:e=!0,onIntersect:n,root:i,dependencies:x,rootMargin:p="0px",target:c,threshold:h=.1}){s.exports.useEffect(()=>{if(!e)return;const g=new IntersectionObserver(y=>y.forEach(f=>f.isIntersecting&&n()),{root:i&&i.current,rootMargin:p,threshold:h}),m=c&&c.current;!m||g.observe(m)},[e,...x,c.current])}const G=o.h1.attrs({className:"StyledSearchHeader"})`
  font-weight: 600;
  font-size: 40px;
  line-height: 70px;
  text-align: center;
  padding: 0 5rem;
  margin: 4rem auto 1.5rem;
  width: 1400px;
  ${a.narrowBreakpoint`
  padding: 0;
  width: 90%;
  font-size:  32px;
  line-height: 50px;
  `}

  ${a.laptopBreakpoint`
  margin: 3rem auto 1.5rem;
`}

  ${a.mobileBreakpoint`
  margin-top: 2rem;
  font-size:  ${({theme:e})=>e.fontSizes.fsXL};
line-height: 30px;
  `}
`,J=o.h1.attrs({className:"StyledSearchSubHeader"})`
  font-weight: 500;
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  line-height: 167.2%;
  text-align: center;
  ${a.mobileBreakpoint`
  width: 90%;
  margin: 0 auto;
  font-size:  ${({theme:e})=>e.fontSizes.fsL};
  line-height: 30px;
  `}
`,K=o.h1.attrs({className:"LeonhardCulmann"})`
  font-size: 20px;
  line-height: 167.2%;
  text-align: center;
  color: ${({theme:e})=>e.colors.clr3};
  margin: 1rem 0 2rem;
  ${a.mobileBreakpoint`
  font-size:  ${({theme:e})=>e.fontSizes.fsM};
  line-height: 30px;
  `}
`,U=o.section`
  display: flex;
  gap: 3rem;
  padding: 3rem 5rem 3rem;
  .listContainer {
    padding: 0;
  }
  ${a.narrowBreakpoint`
  gap: 2rem;
  padding: 3rem 3rem 3rem;
  `}

  ${a.mobileBreakpoint`
  padding: 3rem 2rem 3rem;
  `}

  ${l.wideBreakpoint`
  padding: 3rem 15rem 3rem;
`}
  ${l.superWideBreakpoint`
  padding: 3rem 25rem 3rem;
`}
`,V=o.h2`
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`,Y=o(z).attrs({className:"CategoriesContainer"})`
  width: 300px;
  border: 1px solid ${({theme:e})=>e.colors.clr3light};
  border-radius: 10px;
  padding: 2rem 0 0;
  margin: 0;
  ${a.laptopBreakpoint`
   padding: 0;
   width: 100%;
   border: unset;
  `}
`,Z=o.h1`
  padding-left: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  cursor: default;
`,ee=o.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${({theme:e})=>e.colors.clr6};
  }

  ${l.laptopBreakpoint`
  :last-child {
    border-radius: 0 0 10px 10px;
  }  
  `}
`,te=o.div`
  a {
    /* The actual component is the 'Link' from react-router-dom */
    text-decoration: none;
    font-size: ${({theme:e})=>e.fontSizes.fsL};
    font-weight: 500;
    color: ${({theme:e})=>e.colors.clr2};
  }
`,re="/assets/ArrowRight.8033169b.svg",oe=({category:e,onSetFilter:n})=>d(ee,{onClick:()=>{n("category",e.toLocaleLowerCase()),window.scroll({top:0,behavior:"smooth"})},children:[t(te,{children:e}),t("img",{src:re,alt:"Right Arrow"})]}),ne=({categories:e,onSetFilter:n})=>d(Y,{children:[t(Z,{children:"Categories"}),e.map(i=>t(oe,{onSetFilter:n,category:i.category},i.id))]}),ae=o.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0 2rem;
  ${l.mobileBreakpoint`
  padding: 2rem 0 0 5rem;

  `}
  ${l.laptopBreakpoint`
display:none;
`}
`,ie=({children:e})=>t(ae,{children:e}),se=o.aside`
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  ${a.laptopBreakpoint`
    position: fixed;
    overflow-y:auto;
    top: 0;
    left: 0;
    padding-top: 3rem;
    width: 40%;
    z-index: 50;
    background-color: ${({theme:e})=>e.colors.clr4};
    transform: translate(${({isLeftContainerOpen:e})=>e?"0":"-100%"});
    transition: transform 0.5s ease-in-out;
  `}
  ${a.mobileBreakpoint`
    width: 70%;
    `}
    ${l.laptopBreakpoint`
    padding-right: 27px;
    `}
`,ce=({children:e,isLeftContainerOpen:n})=>t(se,{isLeftContainerOpen:n,children:e}),ue=()=>{const[e,n]=E(),[i,x]=s.exports.useState({queryText:"",category:e.get("category")||"",page:0,sortBy:"createdAt",sortOrder:"desc",limit:3}),[p,c]=s.exports.useState(!1),[h,g]=s.exports.useState(!1),m=s.exports.useRef(null),{useInfiniteQueryAllItems:y}=H(),{data:f,isSuccess:v,hasNextPage:b,fetchNextPage:I,isFetchingNextPage:S,isLoading:$,isError:P,error:T}=y(i);s.exports.useEffect(()=>{g(!0);const r=setTimeout(()=>{g(!1)},900);return()=>clearTimeout(r)},[e]);const k=s.exports.useCallback((r,u)=>{const C={...i,[r]:u};if(r==="category"){c(!1),C.queryText="";const N={category:C.category};n(N)}x(C)},[i,n]);s.exports.useEffect(()=>{var r;k("queryText",(r=e.get("q"))!=null?r:"")},[e]);const F=A.exports.debounce(I,500);_({target:m,onIntersect:F,enabled:b&&!S,dependencies:[h,$,S]});const L=()=>{c(r=>!r)};return O(p),h?t(w,{pos:"center"}):d(R,{children:[t(ie,{children:t(j,{fontSize:"s",width:"fit-content",height:"50px",onClick:L,children:"Categories"})}),d(z,{children:[t(G,{children:B.SearchPageHeader}),t(J,{children:B.SearchPageSubHeader}),t(K,{children:"Leonhard Culmann's"})]}),d(U,{children:[t(ce,{isLeftContainerOpen:p,children:t(ne,{categories:M,onSetFilter:k})}),d(X,{children:[v&&f.pages&&f.pages.map(r=>r.map(u=>t(W,{item:u},u._id))),$&&t(w,{pos:"center"}),P&&t(D,{children:T})]})]}),t("div",{ref:m,children:!S&&!b?t(V,{children:"No Results Left..."}):t(w,{size:"small"})}),t(Q,{}),t(q,{styleMode:"darken",handleClick:L,isLeftContainerOpen:p})]})};export{ue as default};
