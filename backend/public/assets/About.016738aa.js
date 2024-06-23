import{s as i,M as t,R as n,u as p,r as l,a as o,d as c,j as s}from"./index.bc57bac7.js";import{T as d}from"./enums.8e4ede7c.js";const m="/assets/Vector74.694b697a.svg",f="/assets/AboutUs.d79fe5a1.svg",x=i.div`
  padding: 1rem 5rem;
  ${t.wideBreakpoint`
  padding: 0 15rem;
  `}
  ${t.superWideBreakpoint`
  padding: 0 25rem;
  `}
  ${n.mobileBreakpoint`
  padding: 0 1.2rem;
  `}
`,h=i.div.attrs({className:"BackLinkContainer"})`
  cursor: pointer;
`,g=i.p`
  display: inline;
  position: absolute;
  width: 36px;
  height: 21px;
  left: 100.41px;
  top: 158.29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.62);
  ${t.wideBreakpoint`
  left: 275px;
  font-size: 18px;
  `}
  ${t.superWideBreakpoint`
    left: 440px;
  `}
  ${n.mobileBreakpoint`
    left: 45px;
    top: 145px;
  `}
`,u=i.img`
  position: absolute;
  left: ${({hover:e})=>e?"70px":"80px"};
  top: 166px;
  transition: 0.2s ease;
  ${t.wideBreakpoint`
  left: ${({hover:e})=>e?"230px":"240px"};
  `};
  ${t.superWideBreakpoint`
  left: ${({hover:e})=>e?"390px":"400px"};
  `}
  ${n.mobileBreakpoint`
    left: ${({hover:e})=>e?"15px":"20px"};
    top: 150px;
  `};
`,k=i.h1`
  width: 137px;
  height: 70px;
  margin: 165px auto 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 70px;
  display: flex;
  align-items: flex-end;
  text-align: center;
`,b=i.img`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
  ${t.wideBreakpoint`
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  `}
  ${n.mobileBreakpoint`
  width: 100vw;
  height: 25vh;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 70px;
  opacity: 0.3;
  z-index: -5;
  margin: 0 auto 2rem ;
`}
`,B=i.p`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  line-height: 167.2%;
  color: ${({theme:e})=>e.colors.clr3};
  ${n.mobileBreakpoint`
  line-height: 160%;
  margin: 3.5rem auto 2rem;
  font-size: ${({theme:e})=>e.fontSizes.fsM};
`}
`,w=()=>{const e=p(),[r,a]=l.exports.useState(!1);return o(c,{children:s(x,{children:[s(h,{onClick:()=>e(-1),onMouseOver:()=>a(!0),onMouseLeave:()=>a(!1),children:[o(u,{src:m,alt:"",hover:r}),o(g,{children:"Back"})]}),o(k,{children:"About Us"}),o(b,{className:"aboutUsImage",src:f,alt:""}),o(B,{className:"aboutUsDescription",children:d.AboutText})]})})};export{w as default};
