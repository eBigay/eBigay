import{e as B,a as F,s as u,R as c}from"./index.bc57bac7.js";const O=B(F("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function v(e,a){if(a.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+a.length+" present")}function w(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(t){return typeof t}:w=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function l(e){v(1,arguments);var a=Object.prototype.toString.call(e);return e instanceof Date||w(e)==="object"&&a==="[object Date]"?new Date(e.getTime()):typeof e=="number"||a==="[object Number]"?new Date(e):((typeof e=="string"||a==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}var X={};function A(){return X}function N(e){var a=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return a.setUTCFullYear(e.getFullYear()),e.getTime()-a.getTime()}function M(e,a){v(2,arguments);var t=l(e),n=l(a),i=t.getTime()-n.getTime();return i<0?-1:i>0?1:i}function L(e,a){v(2,arguments);var t=l(e),n=l(a),i=t.getFullYear()-n.getFullYear(),o=t.getMonth()-n.getMonth();return i*12+o}function _(e,a){return v(2,arguments),l(e).getTime()-l(a).getTime()}var T={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(a){return a<0?Math.ceil(a):Math.floor(a)}},j="trunc";function R(e){return e?T[e]:T[j]}function E(e){v(1,arguments);var a=l(e);return a.setHours(23,59,59,999),a}function Y(e){v(1,arguments);var a=l(e),t=a.getMonth();return a.setFullYear(a.getFullYear(),t+1,0),a.setHours(23,59,59,999),a}function V(e){v(1,arguments);var a=l(e);return E(a).getTime()===Y(a).getTime()}function q(e,a){v(2,arguments);var t=l(e),n=l(a),i=M(t,n),o=Math.abs(L(t,n)),r;if(o<1)r=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-i*o);var d=M(t,n)===-i;V(l(e))&&o===1&&M(e,n)===1&&(d=!1),r=i*(o-Number(d))}return r===0?0:r}function H(e,a,t){v(2,arguments);var n=_(e,a)/1e3;return R(t==null?void 0:t.roundingMethod)(n)}var J={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},U=function(a,t,n){var i,o=J[a];return typeof o=="string"?i=o:t===1?i=o.one:i=o.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};const Q=U;function D(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,n=e.formats[t]||e.formats[e.defaultWidth];return n}}var G={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},K={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Z={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ee={date:D({formats:G,defaultWidth:"full"}),time:D({formats:K,defaultWidth:"full"}),dateTime:D({formats:Z,defaultWidth:"full"})};const te=ee;var ae={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ne=function(a,t,n,i){return ae[a]};const re=ne;function b(e){return function(a,t){var n=t!=null&&t.context?String(t.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=t!=null&&t.width?String(t.width):o;i=e.formattingValues[r]||e.formattingValues[o]}else{var d=e.defaultWidth,s=t!=null&&t.width?String(t.width):e.defaultWidth;i=e.values[s]||e.values[d]}var f=e.argumentCallback?e.argumentCallback(a):a;return i[f]}}var ie={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},oe={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},se={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ue={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},le={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},de={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},me=function(a,t){var n=Number(a),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},fe={ordinalNumber:me,era:b({values:ie,defaultWidth:"wide"}),quarter:b({values:oe,defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:b({values:se,defaultWidth:"wide"}),day:b({values:ue,defaultWidth:"wide"}),dayPeriod:b({values:le,defaultWidth:"wide",formattingValues:de,defaultFormattingWidth:"wide"})};const ce=fe;function y(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=a.match(i);if(!o)return null;var r=o[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?ve(d,function(h){return h.test(r)}):he(d,function(h){return h.test(r)}),f;f=e.valueCallback?e.valueCallback(s):s,f=t.valueCallback?t.valueCallback(f):f;var g=a.slice(r.length);return{value:f,rest:g}}}function he(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function ve(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function ge(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var i=n[0],o=a.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];r=t.valueCallback?t.valueCallback(r):r;var d=a.slice(i.length);return{value:r,rest:d}}}var pe=/^(\d+)(th|st|nd|rd)?/i,be=/\d+/i,ye={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},we={any:[/^b/i,/^(a|c)/i]},Me={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Se={any:[/1/i,/2/i,/3/i,/4/i]},De={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Pe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},xe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ne={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Te={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},We={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ke={ordinalNumber:ge({matchPattern:pe,parsePattern:be,valueCallback:function(a){return parseInt(a,10)}}),era:y({matchPatterns:ye,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any"}),quarter:y({matchPatterns:Me,defaultMatchWidth:"wide",parsePatterns:Se,defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:y({matchPatterns:De,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any"}),day:y({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:Te,defaultMatchWidth:"any",parsePatterns:We,defaultParseWidth:"any"})};const Ce=ke;var ze={code:"en-US",formatDistance:Q,formatLong:te,formatRelative:re,localize:ce,match:Ce,options:{weekStartsOn:0,firstWeekContainsDate:1}};const $e=ze;function k(e,a){if(e==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e}function Ie(e){return k({},e)}var W=1440,Be=2520,P=43200,Fe=86400;function Xe(e,a,t){var n,i;v(2,arguments);var o=A(),r=(n=(i=t==null?void 0:t.locale)!==null&&i!==void 0?i:o.locale)!==null&&n!==void 0?n:$e;if(!r.formatDistance)throw new RangeError("locale must contain formatDistance property");var d=M(e,a);if(isNaN(d))throw new RangeError("Invalid time value");var s=k(Ie(t),{addSuffix:Boolean(t==null?void 0:t.addSuffix),comparison:d}),f,g;d>0?(f=l(a),g=l(e)):(f=l(e),g=l(a));var h=H(g,f),C=(N(g)-N(f))/1e3,m=Math.round((h-C)/60),p;if(m<2)return t!=null&&t.includeSeconds?h<5?r.formatDistance("lessThanXSeconds",5,s):h<10?r.formatDistance("lessThanXSeconds",10,s):h<20?r.formatDistance("lessThanXSeconds",20,s):h<40?r.formatDistance("halfAMinute",0,s):h<60?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",1,s):m===0?r.formatDistance("lessThanXMinutes",1,s):r.formatDistance("xMinutes",m,s);if(m<45)return r.formatDistance("xMinutes",m,s);if(m<90)return r.formatDistance("aboutXHours",1,s);if(m<W){var z=Math.round(m/60);return r.formatDistance("aboutXHours",z,s)}else{if(m<Be)return r.formatDistance("xDays",1,s);if(m<P){var $=Math.round(m/W);return r.formatDistance("xDays",$,s)}else if(m<Fe)return p=Math.round(m/P),r.formatDistance("aboutXMonths",p,s)}if(p=q(g,f),p<12){var I=Math.round(m/P);return r.formatDistance("xMonths",I,s)}else{var x=p%12,S=Math.floor(p/12);return x<3?r.formatDistance("aboutXYears",S,s):x<9?r.formatDistance("overXYears",S,s):r.formatDistance("almostXYears",S+1,s)}}const Ae=u.div.attrs({className:"PopUp"})`
  display: ${({isItemDetailsOpen:e})=>e?"flex":"none"};
  background-color: #f4f5f7;
  border-radius: 20px;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80vw;
  z-index: 100;
  ${c.mobileBreakpoint`
    top: 50%;
    width: 93vw;
  height: 93vh;
`}
`,Le=u.div.attrs({className:"ItemDetailsContainer"})`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 40px;
  padding: 70px 60px;
  word-break: break-all;
  ${c.laptopBreakpoint`
  padding: 2rem 1.5rem;
`}
  ${c.mobileBreakpoint`
 padding: 3rem 1.5rem 2rem;
 flex-direction: column;
 gap: 3rem;
`}
`,_e=u.img`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  ${c.mobileBreakpoint`
  width: 80vw;
  `}
`,je=u.div.attrs({className:"ItemDetailsSection"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  ${c.tabletBreakpoint`
  button {
    font-size: ${({theme:e})=>e.fontSizes.fsM};
    height: 3rem;
  }
`}
  ${c.mobileBreakpoint`
  max-width: 100%;
  gap: 20px;
  button {
    font-size: ${({theme:e})=>e.fontSizes.fsS};
    height: 4rem;
    margin: 0 auto ;
  }
  `}
`,Re=u.p.attrs({className:"DetailsDescription"})`
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  font-size: ${({theme:e})=>e.fontSizes.fsM};
  word-break: break-word;
`,Ee=u.div.attrs({className:"PhoneNumberContainer"})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`,Ye=u.a.attrs({className:"PhoneNumber"})`
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsL};
  text-decoration: none;
  ${c.mobileBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsM};
  `}
`,Ve=u.img.attrs({className:"PhoneImage"})`
  width: 23px;
  height: 23px;
  ${c.mobileBreakpoint`
  width: 20px;
  height: 20px;
`}
`,qe=u.div.attrs({className:"CreatedByContainer"})`
  display: flex;
  gap: 15px;
`,He=u.div.attrs({className:"CreatedByWrapper"})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  ${c.mobileBreakpoint`
  gap: 0;
`}
`,Je=u.h3.attrs({className:"CreatedByName"})`
  font-size: ${({theme:e})=>e.fontSizes.l};
  font-weight: 600;
  line-height: 1;
`,Ue=u.div.attrs({className:"ImgsWrapper"})`
  display: flex;
  gap: 37px;
  align-items: center;
  justify-content: center;
  ${c.mobileBreakpoint`
  .swiper-lazy-preloader {
    margin-top:  0;
  }
  `}
`,Qe=u.img`
  width: 100%;
  height: 8rem;
  border-radius: 20px;
  object-fit: cover;
`,Ge=u.h1.attrs({className:"DetailsName"})`
  font-weight: 600;
  font-size: ${({theme:e})=>e.fontSizes.fsXXL};
  ${c.mobileBreakpoint`
  font-size: ${({theme:e})=>e.fontSizes.fsXL};
  `}
`,Ke=u(O)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  transform: scale(1.5);
  cursor: pointer;
  z-index: 10;
  &:hover {
    color: ${({theme:e})=>e.colors.clr3};
    transition: 0.4s ease;
  }
`,Ze=u.h3.attrs({className:"CreatedByLocation"})`
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsS};
  font-weight: 400;
`,et=u.h3.attrs({className:"CreatedByTime"})`
  color: ${({theme:e})=>e.colors.clr3};
  font-size: ${({theme:e})=>e.fontSizes.fsXs};
  font-weight: 600;
`;u.img.attrs({className:"LocationFlag"})``;const tt=u.div.attrs({className:"ImagesListWrapper"})`
  height: 8rem;
  ${c.mobileBreakpoint`
    margin-top:  1rem;    
  `}
`;export{et as C,Ge as D,Ue as I,_e as M,Ae as P,Qe as S,Le as a,je as b,qe as c,He as d,Je as e,Xe as f,Ze as g,Re as h,Ee as i,Ve as j,Ye as k,tt as l,Ke as m};
