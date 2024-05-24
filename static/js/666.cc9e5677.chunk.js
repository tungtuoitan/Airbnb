"use strict";(self.webpackChunkairbnb=self.webpackChunkairbnb||[]).push([[666],{1666:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(9456),l=t(8030),o=t(2452),s=t(6198),i=t(579);function c(){var e=(0,r.wA)(),n=(0,r.d4)((function(e){return e.dateItemSlice.firstDate})),t=(0,r.d4)((function(e){return e.dateItemSlice.lastDate})),c=0===n.length||0===t.length?"Add Dates":"".concat(s.A.dateInString[n[0]-1],".").concat(s.A.monthShortNames[n[1]]," - ").concat(s.A.dateInString[t[0]-1],".").concat(s.A.monthShortNames[t[1]]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.A,{content:"When",value:c,handleOnClick:function(){e((0,o.xq)())}})})}var a=t(1860);function u(){var e=(0,r.wA)();return(0,i.jsx)("button",{className:" font-base color222 underline font-bold h-full ",onClick:function(){e((0,a.kZ)())},children:"Reset"})}function d(){var e=(0,r.wA)();return(0,i.jsx)("button",{className:"  bg-222 px-6 h-12 rounded-lg  flex justify-center \r items-center",children:(0,i.jsx)("span",{className:"  flex justify-center items-center gap-c10",onClick:function(){e((0,o.ph)())},children:(0,i.jsx)("span",{className:"text-white font-bold ",children:"Next"})})})}function f(){return(0,i.jsxs)("div",{className:"BOTTOM_BAR     absolute left-0 bottom-0 w-full  \r border-top-05px border-solid border-gray-200 px-6\r py-c12 flex justify-between items-center",children:[(0,i.jsx)(u,{}),(0,i.jsx)(d,{})]})}function x(){return(0,i.jsx)("div",{className:"font-size22 color222 font-bold text-left mb-c2",children:"When's your trip?"})}var h=t(7686),p=t(5515);function m(){return(0,i.jsxs)("div",{className:"WHEN_YOUR-TRIP  relative overflow-hidden \r w-full bg-white px-6 pt-6 pb-c72 rounded-3xl box-shadow-whereto",children:[(0,i.jsx)(x,{}),(0,i.jsx)(h.A,{}),(0,i.jsx)(p.A,{}),(0,i.jsx)(f,{})]})}function j(){return!0===(0,r.d4)((function(e){return e.root.isWhenYourTripOpen}))?(0,i.jsx)(m,{}):(0,i.jsx)(c,{})}var b=t(5016),w=t(5043),v=t(4832);function g(){var e=(0,r.wA)(),n=(0,r.d4)((function(e){return e.root.isTypingSearchPopUpOpen})),t=(0,v.m)(),l=(0,w.useRef)(null);return(0,w.useEffect)((function(){l.current.focus()}),[n]),(0,i.jsx)("input",{className:"INPUT      w-full h-full pr-c20 pl-12 text-light \r placeholder:text-sm text-sm focus:outline-0\r placeholder:text-gray-600 font-medium rounded-3xl bg-grayf7 ",placeholder:"Search destinations",ref:l,onChange:function(n){!function(n){e((0,o.bS)(n.target.value)),t(n.target.value)}(n)}})}function N(){return(0,i.jsx)("span",{className:"absolute  y-center left-c20 color222  ",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",role:"presentation",focusable:"false",style:{display:"block",fill:"none",height:"16px",width:"16px",stroke:"currentcolor",strokeWidth:"4",overflow:"visible"},children:(0,i.jsx)("path",{fill:"none",d:"M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"})})})}function y(){var e=(0,r.d4)((function(e){return e.root.isTypingSearchPopUpOpen}));return(0,i.jsxs)("div",{className:"w-screen h-calc-u2 bg-white fixed bottom-0 left-0 zmax3 \n        rounded-2xl box-shadow-u5 rounded-4xl px-6 pt-10\n        ".concat(!0===e?"":"hidden"),children:[(0,i.jsxs)("div",{className:"INPUT_CONTAINER      h-c60 rounded-xl  bg-grayf7 \r relative mb-6",children:[(0,i.jsx)(N,{}),(0,i.jsx)(g,{})]}),(0,i.jsx)(b.A,{})]})}function A(){var e=(0,r.d4)((function(e){return e.root.placeholderOnSearchInput})),n=(0,r.wA)();return(0,i.jsx)("input",{className:"INPUT      w-full h-full pr-c20 pl-12 text-light  focus:outline-0\n        font-medium rounded-3xl text-sm      \n        placeholder:text-sm   \n        ".concat("Search destinations"===e?"placeholder:text-gray-600":"c-placeholder-u4"),placeholder:e,onChange:function(e){!function(e){n(whereToInputChange(e.target.value))}(e)}})}function k(){return(0,i.jsx)("span",{className:" absolute  y-center left-c20 color222  ",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",role:"presentation",focusable:"false",style:{display:"block",fill:"none",height:"16px",width:"16px",stroke:"currentcolor",strokeWidth:"4",overflow:"visible"},children:(0,i.jsx)("path",{fill:"none",d:"M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"})})})}function T(){var e=(0,r.wA)();return(0,i.jsxs)("div",{className:"INPUT_CONTAINER     border-1 border-gray-300 h-c60 rounded-xl  \r relative",onClick:function(){e((0,o.Aw)())},children:[(0,i.jsx)(k,{}),(0,i.jsx)(A,{})]})}function O(){return(0,i.jsx)("div",{className:"font-size22 color222 font-bold text-left mb-c12",children:"Where to?"})}var S=t(7881),C=t(4224);function I(){return(0,i.jsx)(i.Fragment,{children:S.A.map((function(e,n){return(0,i.jsx)(C.A,{imgSrc:e.imgSrc,name:e.name},e.id)}))})}function R(){return(0,i.jsx)("div",{className:"DESTINATIONS_CONTAINER  ",children:(0,i.jsxs)("div",{className:"CONTAINERR    relative left--24 w-plus48 scrollable-element  \r pt-c20 pb-c4 ml-6  px-8  overflow-auto  x-mandatory\r inline-flex gap-c20  ",children:[(0,i.jsx)(I,{}),(0,i.jsx)("div",{className:"opacity-0 border1 w-10 ml--u4",children:"."})]})})}function W(){return(0,i.jsx)("div",{className:"w-6 h-full bg-white  absolute right-0 z100"})}function U(){var e=(0,r.wA)(),n=(0,r.d4)((function(e){return e.root.where}));return(0,r.d4)((function(e){return e.root.isWhereToOpen}))?(0,i.jsxs)("div",{className:"WHERE_TO  relative overflow-hidden w-full bg-white p-6 rounded-3xl box-shadow-whereto",children:[(0,i.jsx)(O,{}),(0,i.jsx)(W,{}),(0,i.jsx)(T,{}),(0,i.jsx)(R,{}),(0,i.jsx)(y,{})]}):(0,i.jsx)(l.A,{content:"Where",value:n,handleOnClick:function(){e((0,o.kl)())}})}var z=t(9169);function B(){var e="  bg-fb px-c12 pt-c11  h-calc-133 overflow-y-scroll   overscroll-contain w-full     ",n="flex justify-between items-center  flex flex-col gap-c12 pb-c16";return(0,i.jsx)("div",{className:e,children:(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)(U,{}),(0,i.jsx)(j,{}),(0,i.jsx)(z.A,{})]})})}var P=t(8596);function E(){var e=(0,r.wA)();return(0,i.jsx)("button",{className:" font-base color222 underline font-bold h-full ",onClick:function(){e((0,o.Fi)()),e((0,P.U)()),e((0,a.kZ)())},children:"Clear all"})}var _=t(5475),M=function(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",role:"presentation",focusable:"false",style:{display:"block",height:"16px",width:"16px",fill:"white"},children:(0,i.jsx)("path",{d:"M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"})})};function D(){return(0,i.jsxs)("div",{className:"flex  justify-center items-center gap-c10",children:[(0,i.jsx)("div",{className:"mt-c2",children:(0,i.jsx)(M,{})}),(0,i.jsx)("span",{className:"text-white font-bold ",children:"Search"})]})}var F=t(1341),Z=t(5110),q=t(6259),V=t(9765);function H(){var e=(0,r.wA)(),n=(0,r.d4)((function(e){return e.bodySlice.nTimesShuffle}));return(0,i.jsx)(_.N_,{to:"/",className:" main-gradient w-32 h-12 rounded-lg border1 flex justify-center \r items-center",onClick:function(){e((0,F.uA)()),e((0,o.ZV)()),e((0,Z.D)(999)),e((0,q.AS)()),e((0,V.O6)()),window.scrollTo(0,0),1===n&&alert("V\xec data m\u1eabu c\xf3 h\u1ea1n n\xean k\u1ebft qu\u1ea3 t\xecm ki\u1ebfm s\u1ebd kh\xf4ng kh\u1edbp, mong qu\xfd kh\xe1ch th\xf4ng c\u1ea3m.")},children:(0,i.jsx)(D,{})})}function Y(){return(0,i.jsxs)("div",{className:"BOTTOM_BAR   absolute bottom-0 w-full   bg-gray-80 \r border-top-05px border-solid border-gray-200\r px-6 py-c12 flex justify-between items-center",children:[(0,i.jsx)(E,{}),(0,i.jsx)(H,{})]})}function L(){return(0,i.jsx)("div",{className:"  flex items-center gap-4 font-base font-bold color222",children:(0,i.jsx)("div",{className:" pb-c2 mainrope-700 font-size22 text-gray-500",children:"Find airbnb place"})})}function G(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",role:"presentation",focusable:"false",style:{display:"block",fill:"none",height:"12px",width:"12px",stroke:"currentcolor",strokeWidth:"5.33333",overflow:"visible"},children:(0,i.jsx)("path",{d:"m6 6 20 20M26 6 6 26"})})}function J(){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32","aria-hidden":"true",role:"presentation",focusable:"false",style:{display:"block",fill:"none",height:"12px",width:"12px",stroke:"currentcolor",strokeWidth:"5.33333",overflow:"visible"},children:(0,i.jsx)("g",{fill:"none",children:(0,i.jsx)("path",{d:"M4 16h26M15 28 3.7 16.7a1 1 0 0 1 0-1.4L15 4"})})})}function K(){var e=(0,r.wA)(),n=(0,r.d4)((function(e){return e.root.isTypingSearchPopUpOpen}));return(0,i.jsxs)("div",{className:"TOP_BAR      w-full h-c60 \r flex justify-center items-center relative pt-c25 pb-c11 pl-c12",children:[(0,i.jsx)("button",{className:"ICON     w-8 h-8 rounded-full border-1 border-solid border-gray-400\r flex justify-center items-center absolute left-c20",onClick:function(){e(!1===n?(0,o.ZV)():(0,o.Ud)())},children:!0===n?(0,i.jsx)(J,{}):(0,i.jsx)(G,{})}),(0,i.jsx)(L,{})]})}function Q(){var e=(0,r.d4)((function(e){return e.root.isSearchPopUpOpen}));return(0,i.jsxs)("div",{className:"7:hidden   w-full h-screen bg-f7 zmax2 overflow-hidden transition-u2x\n    overscroll-contain   "+(e?" top-0 fixed transition-u2":" opacity fixed  hiddenx hp1 "),children:[(0,i.jsx)(K,{}),(0,i.jsx)(B,{}),(0,i.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=666.cc9e5677.chunk.js.map