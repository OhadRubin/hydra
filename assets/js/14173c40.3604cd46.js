(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8318],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4018:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={id:"hydra-command-line-flags",title:"Hydra's command line flags"},c=void 0,s={unversionedId:"advanced/hydra-command-line-flags",id:"advanced/hydra-command-line-flags",isDocsHomePage:!1,title:"Hydra's command line flags",description:"Hydra is using the command line for two things:",source:"@site/docs/advanced/hydra-command-line-flags.md",sourceDirName:"advanced",slug:"/advanced/hydra-command-line-flags",permalink:"/docs/next/advanced/hydra-command-line-flags",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/hydra-command-line-flags.md",version:"current",lastUpdatedBy:"nukopy",lastUpdatedAt:1624550328,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"hydra-command-line-flags",title:"Hydra's command line flags"},sidebar:"docs",previous:{title:"Terminology",permalink:"/docs/next/advanced/terminology"},next:{title:"Basic Override syntax",permalink:"/docs/next/advanced/override_grammar/basic"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Hydra is using the command line for two things:"),(0,i.kt)("p",null,"Hydra is using the command line for two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Controlling Hydra"),(0,i.kt)("li",{parentName:"ul"},"Configuring your application (See ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/advanced/override_grammar/basic"},"Override Grammar"),")")),(0,i.kt)("p",null,"Arguments prefixed by - or -- control Hydra; the rest are used to configure the application."),(0,i.kt)("p",null,"Information about Hydra:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--hydra-help"),": Shows Hydra specific flags"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--version"),": Show Hydra's version and exit")),(0,i.kt)("p",null,"Information provided by the Hydra app:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--help,-h"),": Shows the application's help. This can be ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/configure_hydra/app_help"},"customized"),".")),(0,i.kt)("p",null,"Debugging assistance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--cfg,-c"),": Show config instead of running. Takes as parameter one of ",(0,i.kt)("inlineCode",{parentName:"li"},"job"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"hydra")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"all"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--resolve"),": Used in conjunction with the ",(0,i.kt)("inlineCode",{parentName:"li"},"--cfg")," flag; resolve interpolations in the config before printing it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--package,-p"),": Used in conjunction with --cfg to select a specific config package to show."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--info,-i"),": Print Hydra information. This includes installed plugins, Config Search Path, Defaults List, generated config and more.")),(0,i.kt)("p",null,"Running Hydra applications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--run,-r"),": Run is the default mode and is not normally needed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--multirun,-m"),": Run multiple jobs with the configured launcher and sweeper. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/multi-run"},"Multi-run"),".",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-path,-cp"),": Overrides the config_path specified in hydra.main(). The config_path is relative to the Python file declaring @hydra.main()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-name,-cn"),": Overrides the config_name specified in hydra.main()"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--config-dir,-cd"),": Adds an additional config directory to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/advanced/search_path"},"config search path"),".",(0,i.kt)("br",{parentName:"li"}),"This is useful for installed apps that want to allow their users to provide additional configs.")),(0,i.kt)("p",null,"Misc:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"--shell-completion,-sc"),": Install or Uninstall ",(0,i.kt)("a",{parentName:"li",href:"/docs/next/tutorials/basic/running_your_app/tab_completion"},"shell tab completion"),".")))}u.isMDXComponent=!0}}]);