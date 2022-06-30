"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,f=d["".concat(c,".").concat(s)]||d[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"v1.1.9",description:"Changelog for myBot v1.1.9",slug:"/v1.1.9",authors:[{name:"ethan.#4188",title:"myBot Founder",image_url:"/img/gfx/ethan.png"}]},i=void 0,l={permalink:"/changelog/v1.1.9",source:"@site/changelog/2022-06-14-v1.1.9.md",title:"v1.1.9",description:"Changelog for myBot v1.1.9",date:"2022-06-14T00:00:00.000Z",formattedDate:"June 14, 2022",tags:[],truncated:!1,authors:[{name:"ethan.#4188",title:"myBot Founder",image_url:"/img/gfx/ethan.png",imageURL:"/img/gfx/ethan.png"}],frontMatter:{title:"v1.1.9",description:"Changelog for myBot v1.1.9",slug:"/v1.1.9",authors:[{name:"ethan.#4188",title:"myBot Founder",image_url:"/img/gfx/ethan.png",imageURL:"/img/gfx/ethan.png"}]},prevItem:{title:"v1.2.0",permalink:"/changelog/v1.2.0"},nextItem:{title:"v1.1.8",permalink:"/changelog/v1.1.8"}},c={authorsImageUrls:[void 0]},p=[{value:"Added",id:"added",level:3},{value:"Fixed",id:"fixed",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/invites")," command",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your bot can only track invites from the moment it was added to your server."),(0,a.kt)("li",{parentName:"ul"},"Your bot must have the ",(0,a.kt)("inlineCode",{parentName:"li"},"MANAGE_SERVER")," permission in order to track and display invites.")))),(0,a.kt)("h3",{id:"fixed"},"Fixed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"/dm")," command now properly takes line-breaks with ",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"))))}m.isMDXComponent=!0}}]);