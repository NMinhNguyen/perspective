"use strict";(self.webpackChunk_finos_perspective_docs=self.webpackChunk_finos_perspective_docs||[]).push([[510],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l().createContext({}),c=function(e){var t=l().useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return l().createElement(p.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l().createElement(l().Fragment,{},t)}},h=l().forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,h=u["".concat(o,".").concat(k)]||u[k]||s[k]||a;return n?l().createElement(h,i(i({ref:t},p),{},{components:n})):l().createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[k]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return l().createElement.apply(null,o)}return l().createElement.apply(null,n)}h.displayName="MDXCreateElement"},3658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(7462),l=(n(7294),n(3905));const a={id:"perspective-viewer-exprtk",title:"ExprTK Function Reference"},o=void 0,i={unversionedId:"obj/perspective-viewer-exprtk",id:"obj/perspective-viewer-exprtk",title:"ExprTK Function Reference",description:"ExprTK Function Reference",source:"@site/docs/obj/perspective-viewer-exprtk.md",sourceDirName:"obj",slug:"/obj/perspective-viewer-exprtk",permalink:"/docs/obj/perspective-viewer-exprtk",draft:!1,tags:[],version:"current",frontMatter:{id:"perspective-viewer-exprtk",title:"ExprTK Function Reference"},sidebar:"tutorialSidebar",previous:{title:"perspective-viewer API",permalink:"/docs/obj/perspective-viewer"},next:{title:"perspective-python API",permalink:"/docs/obj/perspective-python"}},d={},p=[{value:"ExprTK Function Reference",id:"exprtk-function-reference",level:2},{value:"<code>var</code>",id:"var",level:4},{value:"<code>abs</code>",id:"abs",level:4},{value:"<code>avg</code>",id:"avg",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>ceil</code>",id:"ceil",level:4},{value:"<code>exp</code>",id:"exp",level:4},{value:"<code>floor</code>",id:"floor",level:4},{value:"<code>frac</code>",id:"frac",level:4},{value:"<code>iclamp</code>",id:"iclamp",level:4},{value:"<code>inrange</code>",id:"inrange",level:4},{value:"<code>log</code>",id:"log",level:4},{value:"<code>log10</code>",id:"log10",level:4},{value:"<code>log1p</code>",id:"log1p",level:4},{value:"<code>log2</code>",id:"log2",level:4},{value:"<code>logn</code>",id:"logn",level:4},{value:"<code>max</code>",id:"max",level:4},{value:"<code>min</code>",id:"min",level:4},{value:"<code>mul</code>",id:"mul",level:4},{value:"<code>percent_of</code>",id:"percent_of",level:4},{value:"<code>pow</code>",id:"pow",level:4},{value:"<code>root</code>",id:"root",level:4},{value:"<code>round</code>",id:"round",level:4},{value:"<code>sgn</code>",id:"sgn",level:4},{value:"<code>sqrt</code>",id:"sqrt",level:4},{value:"<code>sum</code>",id:"sum",level:4},{value:"<code>trunc</code>",id:"trunc",level:4},{value:"<code>acos</code>",id:"acos",level:4},{value:"<code>acosh</code>",id:"acosh",level:4},{value:"<code>asin</code>",id:"asin",level:4},{value:"<code>asinh</code>",id:"asinh",level:4},{value:"<code>atan</code>",id:"atan",level:4},{value:"<code>atanh</code>",id:"atanh",level:4},{value:"<code>cos</code>",id:"cos",level:4},{value:"<code>cosh</code>",id:"cosh",level:4},{value:"<code>cot</code>",id:"cot",level:4},{value:"<code>sin</code>",id:"sin",level:4},{value:"<code>sinc</code>",id:"sinc",level:4},{value:"<code>sinh</code>",id:"sinh",level:4},{value:"<code>tan</code>",id:"tan",level:4},{value:"<code>tanh</code>",id:"tanh",level:4},{value:"<code>deg2rad</code>",id:"deg2rad",level:4},{value:"<code>deg2grad</code>",id:"deg2grad",level:4},{value:"<code>rad2deg</code>",id:"rad2deg",level:4},{value:"<code>grad2deg</code>",id:"grad2deg",level:4},{value:"<code>concat</code>",id:"concat",level:4},{value:"<code>order</code>",id:"order",level:4},{value:"<code>upper</code>",id:"upper",level:4},{value:"<code>lower</code>",id:"lower",level:4},{value:"<code>hour_of_day</code>",id:"hour_of_day",level:4},{value:"<code>month_of_year</code>",id:"month_of_year",level:4},{value:"<code>day_of_week</code>",id:"day_of_week",level:4},{value:"<code>now</code>",id:"now",level:4},{value:"<code>today</code>",id:"today",level:4},{value:"<code>is_null</code>",id:"is_null",level:4},{value:"<code>is_not_null</code>",id:"is_not_null",level:4},{value:"<code>not</code>",id:"not",level:4},{value:"<code>true</code>",id:"true",level:4},{value:"<code>false</code>",id:"false",level:4},{value:"<code>if</code>",id:"if",level:4},{value:"<code>for</code>",id:"for",level:4},{value:"<code>string</code>",id:"string",level:4},{value:"<code>integer</code>",id:"integer",level:4},{value:"<code>float</code>",id:"float",level:4},{value:"<code>date</code>",id:"date",level:4},{value:"<code>datetime</code>",id:"datetime",level:4},{value:"<code>boolean</code>",id:"boolean",level:4},{value:"<code>random</code>",id:"random",level:4},{value:"<code>match</code>",id:"match",level:4},{value:"<code>match_all</code>",id:"match_all",level:4},{value:"<code>search</code>",id:"search",level:4},{value:"<code>indexof</code>",id:"indexof",level:4},{value:"<code>substring</code>",id:"substring",level:4},{value:"<code>replace</code>",id:"replace",level:4},{value:"<code>replace_all</code>",id:"replace_all",level:4}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"exprtk-function-reference"},"ExprTK Function Reference"),(0,l.kt)("h4",{id:"var"},(0,l.kt)("inlineCode",{parentName:"h4"},"var")),(0,l.kt)("p",null,"Declare a new local variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"var ${1:x := 1}\n")),(0,l.kt)("h4",{id:"abs"},(0,l.kt)("inlineCode",{parentName:"h4"},"abs")),(0,l.kt)("p",null,"Absolute value of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"abs(${1:x})\n")),(0,l.kt)("h4",{id:"avg"},(0,l.kt)("inlineCode",{parentName:"h4"},"avg")),(0,l.kt)("p",null,"Average of all inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"avg(${1:x})\n")),(0,l.kt)("h4",{id:"bucket"},(0,l.kt)("inlineCode",{parentName:"h4"},"bucket")),(0,l.kt)("p",null,"Bucket x by y"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bucket(${1:x}, ${2:y})\n")),(0,l.kt)("h4",{id:"ceil"},(0,l.kt)("inlineCode",{parentName:"h4"},"ceil")),(0,l.kt)("p",null,"Smallest integer >= x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ceil(${1:x})\n")),(0,l.kt)("h4",{id:"exp"},(0,l.kt)("inlineCode",{parentName:"h4"},"exp")),(0,l.kt)("p",null,"Natural exponent of x (e ^ x)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"exp(${1:x})\n")),(0,l.kt)("h4",{id:"floor"},(0,l.kt)("inlineCode",{parentName:"h4"},"floor")),(0,l.kt)("p",null,"Largest integer <= x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"floor(${1:x})\n")),(0,l.kt)("h4",{id:"frac"},(0,l.kt)("inlineCode",{parentName:"h4"},"frac")),(0,l.kt)("p",null,"Fractional portion (after the decimal) of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"frac(${1:x})\n")),(0,l.kt)("h4",{id:"iclamp"},(0,l.kt)("inlineCode",{parentName:"h4"},"iclamp")),(0,l.kt)("p",null,"Inverse clamp x within a range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"iclamp(${1:x})\n")),(0,l.kt)("h4",{id:"inrange"},(0,l.kt)("inlineCode",{parentName:"h4"},"inrange")),(0,l.kt)("p",null,"Returns whether x is within a range"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"inrange(${1:x})\n")),(0,l.kt)("h4",{id:"log"},(0,l.kt)("inlineCode",{parentName:"h4"},"log")),(0,l.kt)("p",null,"Natural log of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log(${1:x})\n")),(0,l.kt)("h4",{id:"log10"},(0,l.kt)("inlineCode",{parentName:"h4"},"log10")),(0,l.kt)("p",null,"Base 10 log of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log10(${1:x})\n")),(0,l.kt)("h4",{id:"log1p"},(0,l.kt)("inlineCode",{parentName:"h4"},"log1p")),(0,l.kt)("p",null,"Natural log of 1 + x where x is very small"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log1p(${1:x})\n")),(0,l.kt)("h4",{id:"log2"},(0,l.kt)("inlineCode",{parentName:"h4"},"log2")),(0,l.kt)("p",null,"Base 2 log of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"log2(${1:x})\n")),(0,l.kt)("h4",{id:"logn"},(0,l.kt)("inlineCode",{parentName:"h4"},"logn")),(0,l.kt)("p",null,"Base N log of x where N >= 0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"logn(${1:x}, ${2:N})\n")),(0,l.kt)("h4",{id:"max"},(0,l.kt)("inlineCode",{parentName:"h4"},"max")),(0,l.kt)("p",null,"Maximum value of all inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"max(${1:x})\n")),(0,l.kt)("h4",{id:"min"},(0,l.kt)("inlineCode",{parentName:"h4"},"min")),(0,l.kt)("p",null,"Minimum value of all inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"min(${1:x})\n")),(0,l.kt)("h4",{id:"mul"},(0,l.kt)("inlineCode",{parentName:"h4"},"mul")),(0,l.kt)("p",null,"Product of all inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mul(${1:x})\n")),(0,l.kt)("h4",{id:"percent_of"},(0,l.kt)("inlineCode",{parentName:"h4"},"percent_of")),(0,l.kt)("p",null,"Percent y of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"percent_of(${1:x})\n")),(0,l.kt)("h4",{id:"pow"},(0,l.kt)("inlineCode",{parentName:"h4"},"pow")),(0,l.kt)("p",null,"x to the power of y"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pow(${1:x}, ${2:y})\n")),(0,l.kt)("h4",{id:"root"},(0,l.kt)("inlineCode",{parentName:"h4"},"root")),(0,l.kt)("p",null,"N-th root of x where N >= 0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root(${1:x}, ${2:N})\n")),(0,l.kt)("h4",{id:"round"},(0,l.kt)("inlineCode",{parentName:"h4"},"round")),(0,l.kt)("p",null,"Round x to the nearest integer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"round(${1:x})\n")),(0,l.kt)("h4",{id:"sgn"},(0,l.kt)("inlineCode",{parentName:"h4"},"sgn")),(0,l.kt)("p",null,"Sign of x: -1, 1, or 0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sgn(${1:x})\n")),(0,l.kt)("h4",{id:"sqrt"},(0,l.kt)("inlineCode",{parentName:"h4"},"sqrt")),(0,l.kt)("p",null,"Square root of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sqrt(${1:x})\n")),(0,l.kt)("h4",{id:"sum"},(0,l.kt)("inlineCode",{parentName:"h4"},"sum")),(0,l.kt)("p",null,"Sum of all inputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sum(${1:x})\n")),(0,l.kt)("h4",{id:"trunc"},(0,l.kt)("inlineCode",{parentName:"h4"},"trunc")),(0,l.kt)("p",null,"Integer portion of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"trunc(${1:x})\n")),(0,l.kt)("h4",{id:"acos"},(0,l.kt)("inlineCode",{parentName:"h4"},"acos")),(0,l.kt)("p",null,"Arc cosine of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acos(${1:x})\n")),(0,l.kt)("h4",{id:"acosh"},(0,l.kt)("inlineCode",{parentName:"h4"},"acosh")),(0,l.kt)("p",null,"Inverse hyperbolic cosine of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"acosh(${1:x})\n")),(0,l.kt)("h4",{id:"asin"},(0,l.kt)("inlineCode",{parentName:"h4"},"asin")),(0,l.kt)("p",null,"Arc sine of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"asin(${1:x})\n")),(0,l.kt)("h4",{id:"asinh"},(0,l.kt)("inlineCode",{parentName:"h4"},"asinh")),(0,l.kt)("p",null,"Inverse hyperbolic sine of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"asinh(${1:x})\n")),(0,l.kt)("h4",{id:"atan"},(0,l.kt)("inlineCode",{parentName:"h4"},"atan")),(0,l.kt)("p",null,"Arc tangent of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"atan(${1:x})\n")),(0,l.kt)("h4",{id:"atanh"},(0,l.kt)("inlineCode",{parentName:"h4"},"atanh")),(0,l.kt)("p",null,"Inverse hyperbolic tangent of x in radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"atanh(${1:x})\n")),(0,l.kt)("h4",{id:"cos"},(0,l.kt)("inlineCode",{parentName:"h4"},"cos")),(0,l.kt)("p",null,"Cosine of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cos(${1:x})\n")),(0,l.kt)("h4",{id:"cosh"},(0,l.kt)("inlineCode",{parentName:"h4"},"cosh")),(0,l.kt)("p",null,"Hyperbolic cosine of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cosh(${1:x})\n")),(0,l.kt)("h4",{id:"cot"},(0,l.kt)("inlineCode",{parentName:"h4"},"cot")),(0,l.kt)("p",null,"Cotangent of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cot(${1:x})\n")),(0,l.kt)("h4",{id:"sin"},(0,l.kt)("inlineCode",{parentName:"h4"},"sin")),(0,l.kt)("p",null,"Sine of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sin(${1:x})\n")),(0,l.kt)("h4",{id:"sinc"},(0,l.kt)("inlineCode",{parentName:"h4"},"sinc")),(0,l.kt)("p",null,"Sine cardinal of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sinc(${1:x})\n")),(0,l.kt)("h4",{id:"sinh"},(0,l.kt)("inlineCode",{parentName:"h4"},"sinh")),(0,l.kt)("p",null,"Hyperbolic sine of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sinh(${1:x})\n")),(0,l.kt)("h4",{id:"tan"},(0,l.kt)("inlineCode",{parentName:"h4"},"tan")),(0,l.kt)("p",null,"Tangent of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tan(${1:x})\n")),(0,l.kt)("h4",{id:"tanh"},(0,l.kt)("inlineCode",{parentName:"h4"},"tanh")),(0,l.kt)("p",null,"Hyperbolic tangent of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tanh(${1:x})\n")),(0,l.kt)("h4",{id:"deg2rad"},(0,l.kt)("inlineCode",{parentName:"h4"},"deg2rad")),(0,l.kt)("p",null,"Convert x from degrees to radians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deg2rad(${1:x})\n")),(0,l.kt)("h4",{id:"deg2grad"},(0,l.kt)("inlineCode",{parentName:"h4"},"deg2grad")),(0,l.kt)("p",null,"Convert x from degrees to gradians"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deg2grad(${1:x})\n")),(0,l.kt)("h4",{id:"rad2deg"},(0,l.kt)("inlineCode",{parentName:"h4"},"rad2deg")),(0,l.kt)("p",null,"Convert x from radians to degrees"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rad2deg(${1:x})\n")),(0,l.kt)("h4",{id:"grad2deg"},(0,l.kt)("inlineCode",{parentName:"h4"},"grad2deg")),(0,l.kt)("p",null,"Convert x from gradians to degrees"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"grad2deg(${1:x})\n")),(0,l.kt)("h4",{id:"concat"},(0,l.kt)("inlineCode",{parentName:"h4"},"concat")),(0,l.kt)("p",null,'Concatenate string columns and string literals, such as:\nconcat("State" \', \', "City")'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"concat(${1:x}, ${2:y})\n")),(0,l.kt)("h4",{id:"order"},(0,l.kt)("inlineCode",{parentName:"h4"},"order")),(0,l.kt)("p",null,"Generates a sort order for a string column based on the input order of the parameters, such as:\norder(\"State\", 'Texas', 'New York')"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"order(${1:input column}, ${2:value}, ...)\n")),(0,l.kt)("h4",{id:"upper"},(0,l.kt)("inlineCode",{parentName:"h4"},"upper")),(0,l.kt)("p",null,"Uppercase of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"upper(${1:x})\n")),(0,l.kt)("h4",{id:"lower"},(0,l.kt)("inlineCode",{parentName:"h4"},"lower")),(0,l.kt)("p",null,"Lowercase of x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"lower(${1:x})\n")),(0,l.kt)("h4",{id:"hour_of_day"},(0,l.kt)("inlineCode",{parentName:"h4"},"hour_of_day")),(0,l.kt)("p",null,"Return a datetime's hour of the day as a string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"hour_of_day(${1:x})\n")),(0,l.kt)("h4",{id:"month_of_year"},(0,l.kt)("inlineCode",{parentName:"h4"},"month_of_year")),(0,l.kt)("p",null,"Return a datetime's month of the year as a string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"month_of_year(${1:x})\n")),(0,l.kt)("h4",{id:"day_of_week"},(0,l.kt)("inlineCode",{parentName:"h4"},"day_of_week")),(0,l.kt)("p",null,"Return a datetime's day of week as a string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"day_of_week(${1:x})\n")),(0,l.kt)("h4",{id:"now"},(0,l.kt)("inlineCode",{parentName:"h4"},"now")),(0,l.kt)("p",null,"The current datetime in local time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"now()\n")),(0,l.kt)("h4",{id:"today"},(0,l.kt)("inlineCode",{parentName:"h4"},"today")),(0,l.kt)("p",null,"The current date in local time"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"today()\n")),(0,l.kt)("h4",{id:"is_null"},(0,l.kt)("inlineCode",{parentName:"h4"},"is_null")),(0,l.kt)("p",null,"Whether x is a null value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"is_null(${1:x})\n")),(0,l.kt)("h4",{id:"is_not_null"},(0,l.kt)("inlineCode",{parentName:"h4"},"is_not_null")),(0,l.kt)("p",null,"Whether x is not a null value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"is_not_null(${1:x})\n")),(0,l.kt)("h4",{id:"not"},(0,l.kt)("inlineCode",{parentName:"h4"},"not")),(0,l.kt)("p",null,"not x"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"not(${1:x})\n")),(0,l.kt)("h4",{id:"true"},(0,l.kt)("inlineCode",{parentName:"h4"},"true")),(0,l.kt)("p",null,"Boolean value true"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"true\n")),(0,l.kt)("h4",{id:"false"},(0,l.kt)("inlineCode",{parentName:"h4"},"false")),(0,l.kt)("p",null,"Boolean value false"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"false\n")),(0,l.kt)("h4",{id:"if"},(0,l.kt)("inlineCode",{parentName:"h4"},"if")),(0,l.kt)("p",null,'An if/else conditional, which evaluates a condition such as:\nif ("Sales" > 100) { true } else { false }'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"if (${1:condition}) {} else if (${2:condition}) {} else {}\n")),(0,l.kt)("h4",{id:"for"},(0,l.kt)("inlineCode",{parentName:"h4"},"for")),(0,l.kt)("p",null,"A for loop, which repeatedly evaluates an incrementing expression such as:\nvar x := 0; var y := 1; for (x < 10; x += 1) { y := x + y }"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"for (${1:expression}) {}\n")),(0,l.kt)("h4",{id:"string"},(0,l.kt)("inlineCode",{parentName:"h4"},"string")),(0,l.kt)("p",null,"Converts the given argument to a string"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"string(${1:x})\n")),(0,l.kt)("h4",{id:"integer"},(0,l.kt)("inlineCode",{parentName:"h4"},"integer")),(0,l.kt)("p",null,"Converts the given argument to a 32-bit integer. If the result over/under-flows, null is returned"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"integer(${1:x})\n")),(0,l.kt)("h4",{id:"float"},(0,l.kt)("inlineCode",{parentName:"h4"},"float")),(0,l.kt)("p",null,"Converts the argument to a float"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"float(${1:x})\n")),(0,l.kt)("h4",{id:"date"},(0,l.kt)("inlineCode",{parentName:"h4"},"date")),(0,l.kt)("p",null,"Given a year, month (1-12) and day, create a new date"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"date(${1:year}, ${1:month}, ${1:day})\n")),(0,l.kt)("h4",{id:"datetime"},(0,l.kt)("inlineCode",{parentName:"h4"},"datetime")),(0,l.kt)("p",null,"Given a POSIX timestamp of milliseconds since epoch, create a new datetime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"datetime(${1:timestamp})\n")),(0,l.kt)("h4",{id:"boolean"},(0,l.kt)("inlineCode",{parentName:"h4"},"boolean")),(0,l.kt)("p",null,"Converts the given argument to a boolean"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"boolean(${1:x})\n")),(0,l.kt)("h4",{id:"random"},(0,l.kt)("inlineCode",{parentName:"h4"},"random")),(0,l.kt)("p",null,"Returns a random float between 0 and 1, inclusive."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"random()\n")),(0,l.kt)("h4",{id:"match"},(0,l.kt)("inlineCode",{parentName:"h4"},"match")),(0,l.kt)("p",null,"Returns True if any part of string matches pattern, and False otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"match(${1:string}, ${2:pattern})\n")),(0,l.kt)("h4",{id:"match_all"},(0,l.kt)("inlineCode",{parentName:"h4"},"match_all")),(0,l.kt)("p",null,"Returns True if the whole string matches pattern, and False otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"match_all(${1:string}, ${2:pattern})\n")),(0,l.kt)("h4",{id:"search"},(0,l.kt)("inlineCode",{parentName:"h4"},"search")),(0,l.kt)("p",null,"Returns the substring that matches the first capturing group in pattern, or null if there are no capturing groups in the pattern or if there are no matches."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"search(${1:string}, ${2:pattern})\n")),(0,l.kt)("h4",{id:"indexof"},(0,l.kt)("inlineCode",{parentName:"h4"},"indexof")),(0,l.kt)("p",null,"Writes into index 0 and 1 of output_vector the start and end indices of the substring that matches the first capturing group in pattern."),(0,l.kt)("p",null,"Returns true if there is a match and output was written, or false if there are no capturing groups in the pattern, if there are no matches, or if the indices are invalid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"indexof(${1:string}, ${2:pattern}, ${3:output_vector})\n")),(0,l.kt)("h4",{id:"substring"},(0,l.kt)("inlineCode",{parentName:"h4"},"substring")),(0,l.kt)("p",null,"Returns a substring of string from start_idx with the given length. If length is not passed in, returns substring from start_idx to the end of the string. Returns null if the string or any indices are invalid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"substring(${1:string}, ${2:start_idx}, ${3:length})\n")),(0,l.kt)("h4",{id:"replace"},(0,l.kt)("inlineCode",{parentName:"h4"},"replace")),(0,l.kt)("p",null,"Replaces the first match of pattern in string with replacer, or return the original string if no replaces were made."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"replace(${1:string}, ${2:pattern}, ${3:replacer})\n")),(0,l.kt)("h4",{id:"replace_all"},(0,l.kt)("inlineCode",{parentName:"h4"},"replace_all")),(0,l.kt)("p",null,"Replaces all non-overlapping matches of pattern in string with replacer, or return the original string if no replaces were made."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"replace(${1:string}, ${2:pattern}, ${3:replacer})\n")))}u.isMDXComponent=!0}}]);