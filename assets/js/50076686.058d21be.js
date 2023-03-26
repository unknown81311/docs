"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Character"},o=void 0,c={unversionedId:"networking/packets/character",id:"networking/packets/character",title:"Character",description:"Contains all information about a character.",source:"@site/docs/networking/packets/09-character.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/character",permalink:"/docs/networking/packets/character",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/09-character.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Character"},sidebar:"networkingSidebar",previous:{title:"Unknown",permalink:"/docs/networking/packets/unknown"},next:{title:"Player Movement",permalink:"/docs/networking/packets/1E-player-movement"}},l={},s=[{value:"Structure",id:"structure",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contains all information about a character."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Handshaking"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Bi-directional")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//------------------------------------------------\n//--- 010 Editor v12.0 Binary Template\n//\n//      File: SM_Packet_9\n//   Authors: ColdMeekly\n//   Version: 1.0.0\n//   Purpose: Yes\n//  Category: \n// File Mask: \n//  ID Bytes: 09 FA 7F\n//   History: \n//------------------------------------------------\n\ntypedef struct {\n    byte data[16];\n} uuid;\n\ntypedef struct {\n  \n  byte id;\n  char magic[2];\n  byte Hair; // A3 = leftmost hair, A7 = rightmost hair\n  byte name_len;\n  char name[name_len]; // TODO: Check how name affects packet\n  char magic_char[4];\n  // Check if magic is 00 00 00 02\n  byte is_male;\n  byte num_uuids;\n  uuid uuids[num_uuids];\n  BigEndian();\n  uint32 skin_id; // 0-4\n  LittleEndian();\n  char magic2[11];\n} SMPacket9 <optimize=false>;\n\n\nFSeek(0);\n")))}m.isMDXComponent=!0}}]);