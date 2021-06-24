(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9973],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},c=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,c=p(n,["components","mdxType","originalType","parentName"]),g=l(t),d=o,f=g["".concat(u,".").concat(d)]||g[d]||s[d]||i;return t?r.createElement(f,a(a({ref:e},c),{},{components:t})):r.createElement(f,a({ref:e},c))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=g;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=n,p.mdxType="string"==typeof n?n:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4208:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return g}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],p={id:"debugging",title:"Debugging",sidebar_label:"Debugging"},u=void 0,l={unversionedId:"tutorials/basic/running_your_app/debugging",id:"version-1.0/tutorials/basic/running_your_app/debugging",isDocsHomePage:!1,title:"Debugging",description:"Hydra provides a few options to improve debuggability.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/5_debugging.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/debugging",permalink:"/docs/1.0/tutorials/basic/running_your_app/debugging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/5_debugging.md",version:"1.0",lastUpdatedBy:"nukopy",lastUpdatedAt:1624550328,formattedLastUpdatedAt:"6/24/2021",sidebarPosition:5,frontMatter:{id:"debugging",title:"Debugging",sidebar_label:"Debugging"},sidebar:"version-1.0/docs",previous:{title:"Logging",permalink:"/docs/1.0/tutorials/basic/running_your_app/logging"},next:{title:"Tab completion",permalink:"/docs/1.0/tutorials/basic/running_your_app/tab_completion"}},c=[{value:"Printing the configuration",id:"printing-the-configuration",children:[]},{value:"Info",id:"info",children:[]}],s={toc:c};function g(n){var e=n.components,t=(0,o.Z)(n,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra provides a few options to improve debuggability."),(0,i.kt)("h3",{id:"printing-the-configuration"},"Printing the configuration"),(0,i.kt)("p",null,"Print the config for your app without running your function by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"--cfg")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," to the command line."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--cfg")," option takes one argument indicating which part of the config to print:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"job")," : Your config"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hydra")," : Hydra's config"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"all")," : The full config, which is a union of ",(0,i.kt)("inlineCode",{parentName:"li"},"job")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# A normal run:\n$ python my_app.py\nMySQL connecting to localhost with user=root and password=1234\n\n# just show the config without running your function:\n$ python my_app.py --cfg job\ndb:\n  host: localhost\n  user: root\n  password: 1234\n")),(0,i.kt)("p",null,"The printed config includes any modifications done via the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"$ python my_app.py db.host=10.0.0.1 --cfg job\ndb:\n  host: 10.0.0.1\n  user: root\n  password: 1234\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"--package")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-p")," to select a a specific config package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"python my_app.py --cfg hydra --package hydra.job\n# @package hydra.job\nname: my_app\nconfig_name: config\n...\n")),(0,i.kt)("h3",{id:"info"},"Info"),(0,i.kt)("p",null,"Hydra can print information about your plugins, config search path, composition trace and more using the",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"--info")," flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --info\n")),(0,i.kt)("p",null,"Subset of output (Complete ",(0,i.kt)("a",{parentName:"p",href:"http://paste.ubuntu.com/p/JWh2cKgGtD/"},"example"),")"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"Config search path\n...\nProfiling information\n...\nComposition trace\n...\nConfig\n...\n")))}g.isMDXComponent=!0}}]);