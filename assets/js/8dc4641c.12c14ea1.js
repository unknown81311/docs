"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[53],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,f=l["".concat(i,".").concat(d)]||l[d]||u[d]||s;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const s={title:"Mods"},a=void 0,c={unversionedId:"sm/docs/imhex-patterns/mods",id:"sm/docs/imhex-patterns/mods",title:"Mods",description:"",source:"@site/docs/sm/docs/imhex-patterns/mods.md",sourceDirName:"sm/docs/imhex-patterns",slug:"/sm/docs/imhex-patterns/mods",permalink:"/docs/sm/docs/imhex-patterns/mods",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sm/docs/imhex-patterns/mods.md",tags:[],version:"current",frontMatter:{title:"Mods"},sidebar:"smSidebar",previous:{title:"Generic",permalink:"/docs/sm/docs/imhex-patterns/genericdata"},next:{title:"Player",permalink:"/docs/sm/docs/imhex-patterns/playerdata"}},i={},p=[],m={toc:p},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"struct UGCItem {\n    be u64 fileId;\n    u128 localId;\n};\n\nstruct Mods {\n    be u32 count;\n    UGCItem items[count];\n};\n\nMods mods @ 0x00;\n")))}u.isMDXComponent=!0}}]);