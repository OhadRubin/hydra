"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return l},T:function(){return s}});var i=n(7462),r=n(7294),o=n(6742),a=n(2263),c=n(907);function l(e){return r.createElement(o.Z,(0,i.Z)({},e,{to:(t=e.to,l=(0,c.zu)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==l?void 0:l.name)?n:"current"]+t),target:"_blank"}));var t,n,l}function s(e){var t,n=null!=(t=e.text)?t:"Example";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},8429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(3899),c=["components"],l={id:"unit_testing",title:"Hydra in Unit Tests"},s=void 0,p={unversionedId:"advanced/unit_testing",id:"advanced/unit_testing",isDocsHomePage:!1,title:"Hydra in Unit Tests",description:"Use initialize(), initializeconfigmodule() or initializeconfigdir() in conjunction with compose()",source:"@site/docs/advanced/unit_testing.md",sourceDirName:"advanced",slug:"/advanced/unit_testing",permalink:"/docs/next/advanced/unit_testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/unit_testing.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1635816556,formattedLastUpdatedAt:"11/2/2021",frontMatter:{id:"unit_testing",title:"Hydra in Unit Tests"},sidebar:"docs",previous:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/next/advanced/jupyter_notebooks"},next:{title:"Introduction",permalink:"/docs/next/experimental/intro"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize_config_module()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"initialize_config_dir()")," in conjunction with ",(0,o.kt)("inlineCode",{parentName:"p"},"compose()"),"\nto compose configs inside your unit tests.",(0,o.kt)("br",{parentName:"p"}),"\n","Be sure to read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/advanced/compose_api"},"Compose API documentation"),"."),(0,o.kt)("p",null,"The Hydra example application contains an ",(0,o.kt)(a.Z,{to:"examples/advanced/hydra_app_example/tests/test_example.py",mdxType:"GithubLink"},"example test"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Testing example with initialize()"',title:'"Testing',example:!0,with:!0,'initialize()"':!0},'from hydra import initialize, compose\n# 1. initialize will add config_path the config search path within the context\n# 2. The module with your configs should be importable. \n#    it needs to have a __init__.py (can be empty).\n# 3. THe config path is relative to the file calling initialize (this file)\ndef test_with_initialize() -> None:\n    with initialize(config_path="../hydra_app/conf"):\n        # config is relative to a module\n        cfg = compose(config_name="config", overrides=["app.user=test_user"])\n        assert cfg == {\n            "app": {"user": "test_user", "num1": 10, "num2": 20},\n            "db": {"host": "localhost", "port": 3306},\n        }\n')))}m.isMDXComponent=!0}}]);