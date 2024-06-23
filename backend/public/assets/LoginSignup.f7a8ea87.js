import{s as a,M as m,R as o,g as P,o as $,r as x,a as t,j as r,L as v,p as k,P as y,F,A as M,d as R,b as q,u as C}from"./index.bc57bac7.js";import{c as L,a as s,F as B,b as w,U as j}from"./UploadWidget.23f988fd.js";import{C as E,L as A}from"./Calling.0e3ec791.js";import"./lodash.bc129b5f.js";const T=L().shape({email:s().email("Not a valid email").max(255).required("Required Field"),password:s().min(6,"Too Short").matches(/[a-z]/,"Must contain at least 1 lowercase letter").matches(/[A-Z]/,"Must contain at least 1 uppercase letter").matches(/[0-9]/,"Must contain at least 1 number").required("Required Field")}),N=a.form.attrs({className:"LoginInputContainer"})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({theme:e})=>e.fontSizes.fsL};
  margin: ${({LoginPage:e})=>e?"15rem auto 0":"10rem auto 0"};
  .Password {
    margin-bottom: ${({LoginPage:e})=>e?"1rem":"1.7rem"};
  }
  ${m.wideBreakpoint`
  justify-content: flex-start;
  `}

  ${o.wideBreakpoint`
margin: ${({LoginPage:e})=>e?"15rem auto 10rem":"10rem auto 10rem"};
  `}

  ${o.laptopBreakpoint`
      padding: 0 1rem;
        button {
          width: 90%;
        }
`}
  ${o.tabletBreakpoint`
    margin: ${({LoginPage:e})=>e?"12rem auto 3rem":"10rem auto 3rem"};
  button {
          width: 100%;
        }
`}
  ${o.mobileBreakpoint`
      width: 100%;
  button {
    width: 90%;
  }
`}

  .logo {
    margin-bottom: 2rem;
  }
`,D=a.h3.attrs({className:"UserImageName"})`
  width: 100%;
  text-align: center;
  font-weight: 500;
  margin: 0.5rem 0;
  font-size: ${({theme:e})=>e.fontSizes.fsM};
  color: ${({theme:e})=>e.colors.clr9};
  ${o.mobileBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  top: 180px;
  `}
`,V=a.div.attrs({className:"SignUpImageContainer"})`
  width: max-content;
  position: relative;
  margin-bottom: 2rem;
  cursor: pointer;
`,H=a.img.attrs({className:"SignUpImage"})`
  position: absolute;
  bottom: 0;
  right: 0;
`,O=a.div.attrs({className:"MiddleFlex"})`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  a {
    font-weight: 500;
    color: ${({theme:e})=>e.colors.clr10};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  ${o.laptopBreakpoint`
  justify-content: space-around;
  width: 420px;
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  `}
  ${o.tabletBreakpoint`
  justify-content: space-between;
  `}

  ${o.mobileBreakpoint`
  width: 90%;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.fsSm};
`}
`,W=a.label.attrs({className:"RememberMeLabel"})`
  display: flex;
  align-items: center;
  gap: 2rem;
  ${o.mobileBreakpoint`
    display: flex;
    gap: 1.5rem;
`}
`,Z=a.input.attrs({className:"RememberMeInput"})`
  position: relative;
  cursor: pointer;
  width: 0px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: -4px;
    left: 0;
    border: 2px solid #555;
    border-radius: 6px;
    background-color: transparent;
    transition: all 0.2s ease;
  }
  &:checked:before {
    border: 2px solid ${({theme:e})=>e.colors.clr2};
    background-color: black;
  }
  &:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(40deg);
    -ms-transform: rotate(40deg);
    transform: rotate(40deg);
    position: absolute;
    top: 1px;
    left: 8px;
  }
`,X=a.p.attrs({className:"PrivacyPolicy"})`
  width: 500px;
  text-align: center;
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  margin-bottom: 12px;
  a {
    color: ${({theme:e})=>e.colors.clr10};
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  ${o.laptopBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  width: 420px;
  a {
    display: block;
  }
`}
  ${o.tabletBreakpoint`
  text-align: center;
`}
  ${o.mobileBreakpoint`
  width: 85%;
  text-align: center;
  font-size: ${({theme:e})=>e.fontSizes.fsSm};
`}
`;a.div.attrs({className:"ErrorMessageContainer"})`
  position: relative;
  height: 5rem;
`;a.h3.attrs({className:"ErrorMessage"})`
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsXl};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: max-content;
  ${o.laptopBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsL};
`}
`;const U="/assets/Lock.604d8d48.svg",z="/assets/Hide.43fa1ff9.svg",I="/assets/Message.004074a3.svg",_=()=>{const{persistState:e,setPersistState:c}=P(),{login:p}=$(),{mutate:g}=p,h={email:"",password:""},u=n=>{const S={email:n.email,password:n.password};g(S)},f=()=>{c(n=>!n)};return x.exports.useEffect(()=>{console.log("persistState",e,typeof e),localStorage.setItem("persist",e)},[e]),t(B,{initialValues:h,onSubmit:u,validationSchema:T,children:({handleSubmit:n})=>r(N,{onSubmit:n,children:[t(v,{noNavigate:!0}),t(w,{control:"input",image:I,type:"email",placeholder:"Email",name:"email"}),t(w,{control:"input",image:U,type:"password",otherImage:z,placeholder:"Password",name:"password"}),r(O,{children:[r(W,{htmlFor:"checkbox",children:[t(Z,{type:"checkbox",id:"checkbox",checked:e,onChange:f})," ","Remember me"]}),t(k,{to:"forgotPassword",children:"Forgot password?"})]}),t(y,{width:"500px",height:"70px",fontSize:"l",type:"submit",children:"Log in"})]})})},G=L().shape({username:s().min(4,"Too Short").required("Required Field"),email:s().email("Not a valid email").max(255).required("Required Field"),password:s().min(6,"Too Short").matches(/[a-z]/,"Must contain at least 1 lowercase letter").matches(/[A-Z]/,"Must contain at least 1 uppercase letter").matches(/[0-9]/,"Must contain at least 1 number").required("Required Field"),phoneNumber:s().min(10,"Too Short").required("Required Field"),location:s().required("Required Field")}),J="/assets/Profile.bb08be34.svg",K="/assets/Discovery.b7373d5f.svg",Q=[{image:J,type:"text",placeholder:"Username",name:"username"},{image:I,type:"email",placeholder:"Email",name:"email"},{image:U,otherImage:z,type:"password",placeholder:"Password",name:"password"},{image:E,type:"tel",placeholder:"Phone Number",name:"phoneNumber"},{image:A,otherImage:K,type:"text",placeholder:"Location",name:"location"}],Y="/assets/SignUpPlus.1bd14c19.svg",ee=()=>{const[e,c]=x.exports.useState(),[p,g]=x.exports.useState(""),{signup:h}=$(),{mutate:u}=h,f=()=>e?e.length>25?`${e.slice(0,25)}...`:e:"";function n(l,i,b){var d;if(l){g(l),b.close({quiet:!0});return}c((d=i==null?void 0:i.info)==null?void 0:d.secure_url)}return t(B,{initialValues:{username:"",email:"",password:"",phoneNumber:"",location:""},onSubmit:l=>{const i={...l,imageUrl:e};u(i)},validationSchema:G,children:({handleSubmit:l})=>t(N,{onSubmit:l,children:r(F,{children:[t(v,{noNavigate:!0}),t(V,{children:t(j,{onUpload:n,children:({open:i})=>{function b(d){d.preventDefault(),i()}return r("div",{onClick:b,children:[t(M,{src:e,sx:{width:120,height:120}}),t(H,{src:Y,alt:"new profile"})]})}})}),t(D,{children:f()}),Q.map(i=>t(w,{control:"input",image:i.image,otherImage:i.otherImage,type:i.type,placeholder:i.placeholder,name:i.name},i.placeholder)),r(X,{children:["By signing up you agree to our"," ",t(k,{to:"privacyPolicy",children:"Privacy Policy"})]}),t(y,{width:"500px",height:"70px",fontSize:"l",type:"submit",children:"Sign up"}),p!==""&&t("h2",{children:p})]})})})},te="/assets/LoginRegisterEmojis.91c29794.svg",oe="/assets/LoginRegisterEmojis2.789d1469.svg",ae=a(R).attrs({className:"LoginSignupPage"})`
  position: relative;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
  min-height: 100vh;
  ${o.tabletBreakpoint`
  flex-direction: column;
  justify-content: space-between;
  `}
  ${m.wideBreakpoint`
  height: 1150px;
  `}
`,ie=a.img.attrs({className:"LoginImage"})`
  display: inline;
  width: 50%;
  object-fit: cover;
  ${o.tabletBreakpoint`
  width: 0;
  `}
`,ne=a.div.attrs({className:"LogInSignUpRedirect"})`
  position: absolute;
  bottom: 2%;
  right: 0%;
  left: 50%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${o.tabletBreakpoint`
  position: relative;
  left: 0;
  padding-bottom: 1rem;
  width: 500px;
  `}
  ${o.mobileBreakpoint`
  width: 85%;
  `}
`,re=a.p.attrs({className:"LogInSignUpBold"})`
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  color: ${({theme:e})=>e.colors.clr2};
  cursor: pointer;
`,se=a.p.attrs({className:"LogInSignUpParagraph"})`
  color: ${({theme:e})=>e.colors.clr3};
`;a.div.attrs({className:"FormLoadingContainer"})`
  position: relative;
  height: 7rem;
  ${m.laptopBreakpoint`
  padding-bottom:4rem;
  `};
`;a(q).attrs({className:"FormLoading"})`
  position: absolute;
  top: 0;
  ${m.wideBreakpoint`
  top:-40px;
  `};
  ${o.laptopBreakpoint`
  top:-40px;
  top: ${({signupPage:e})=>e?"-20px":"-40px"}
  `};
`;a.p.attrs({className:"FormLoadingLabel"})`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 60%);
  width: max-content;
  color: ${({theme:e})=>e.colors.clr1};
  font-size: ${({theme:e})=>e.fontSizes.fsM};
  font-weight: 500;
  ${m.wideBreakpoint`
  top: 30px;
  `};
`;const de=({type:e})=>{const c=C();return r(ae,{children:[t(ie,{src:e==="login"?te:oe,alt:"Background"}),e==="login"?t(_,{}):t(ee,{}),r(ne,{children:[t(se,{children:e==="login"?"Don't have an account?":"Already have an account?"}),t(re,{onClick:()=>{c(e==="login"?"../SignUp":"../Login"),window.scroll({top:0,behavior:"smooth"})},children:e==="login"?"Sign Up":"Log in"})]})]})};export{de as default};
