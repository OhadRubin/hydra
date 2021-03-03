(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{227:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(8),o=(r(0),r(268)),i={id:"fbcode",title:"Hydra at fbcode"},c={unversionedId:"fb/fbcode",id:"fb/fbcode",isDocsHomePage:!1,title:"Hydra at fbcode",description:"Differences in fbcode",source:"@site/docs/fb/fbcode.md",slug:"/fb/fbcode",permalink:"/docs/next/fb/fbcode",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/fb/fbcode.md",version:"current",lastUpdatedBy:"Toshihiko Yanase",lastUpdatedAt:1614794515},b=[{value:"Differences in fbcode",id:"differences-in-fbcode",children:[{value:"Open source plugins",id:"open-source-plugins",children:[]},{value:"Facebook specified plugins",id:"facebook-specified-plugins",children:[]}]}],l={toc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"differences-in-fbcode"},"Differences in fbcode"),Object(o.b)("h3",{id:"open-source-plugins"},"Open source plugins"),Object(o.b)("h4",{id:"supported"},"Supported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"hydra_ax_sweeper"),Object(o.b)("li",{parentName:"ul"},"hydra_colorlog"),Object(o.b)("li",{parentName:"ul"},"hydra_nevergrad_sweeper")),Object(o.b)("h4",{id:"unsupported"},"Unsupported:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"joblib launcher: Joblib's Loki backend does not work correctly when executed from a par file.")),Object(o.b)("h3",{id:"facebook-specified-plugins"},"Facebook specified plugins"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"fbcode_defaults : Changes configuration defaults to be appropriate for fbcode (e.g: Output directories are in ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode/outputs")," and ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode/multirun"),")"),Object(o.b)("li",{parentName:"ul"},"configerator_config_source: See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/fb/fbcode-configerator-config-source"}),"doc"),"  for more information.")),Object(o.b)("h4",{id:"targets"},"TARGETS"),Object(o.b)("p",null,"Hydra includes buck TARGETS you can use in fbcode. In general, if there is TARGET there are two options:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"You can depend on the TARGETS to use Hydra or a plugin."),Object(o.b)("li",{parentName:"ol"},"The TARGETS contains a runnable example.")),Object(o.b)("p",null,"targets are under ",Object(o.b)("inlineCode",{parentName:"p"},"github/facebookresearch/hydra"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browsedir/master/fbcode/github/facebookresearch/hydra"}),":",Object(o.b)("inlineCode",{parentName:"a"},"hydra"))," : Primary target to use in most cases. Includes ",Object(o.b)("inlineCode",{parentName:"li"},"hydra_oss")," and the ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode_defaults"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},":hydra_oss")," : Vanilla Hydra without any Facebook specific targets."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browsedir/master/fbcode/github/facebookresearch/hydra/plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"plugins")),": Plugins that have a TARGETS file are runnable in fbcode."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browsedir/master/fbcode/github/facebookresearch/hydra/examples"}),Object(o.b)("inlineCode",{parentName:"a"},"examples")),": Examples that have a TARGETS file are runnable in ",Object(o.b)("inlineCode",{parentName:"li"},"fbcode"),". All tutorials (in ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browsedir/master/fbcode/github/facebookresearch/hydra/examples"}),Object(o.b)("inlineCode",{parentName:"a"},"examples/tutorials")),") are supported. An example TARGET file can be found ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.internalfb.com/intern/diffusion/FBS/browsedir/master/fbcode/github/facebookresearch/hydra/examples/tutorials/basic/your_first_hydra_app/5_composition"}),"here"),".")))}u.isMDXComponent=!0},268:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,f=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);