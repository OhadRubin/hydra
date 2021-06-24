(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1080],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,u=m["".concat(s,".").concat(d)]||m[d]||g[d]||l;return t?n.createElement(u,i(i({ref:a},p),{},{components:t})):n.createElement(u,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5776:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(2122),r=t(9756),l=(t(7294),t(3905)),i=["components"],o={id:"overriding_packages",title:"Packages"},s=void 0,c={unversionedId:"advanced/overriding_packages",id:"advanced/overriding_packages",isDocsHomePage:!1,title:"Packages",description:"The package determines where the content of each input config is placed in the output config.",source:"@site/docs/advanced/overriding_packages.md",sourceDirName:"advanced",slug:"/advanced/overriding_packages",permalink:"/docs/next/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/overriding_packages.md",version:"current",lastUpdatedBy:"nukopy",lastUpdatedAt:1624550328,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"overriding_packages",title:"Packages"},sidebar:"docs",previous:{title:"The Defaults List",permalink:"/docs/next/advanced/defaults_list"},next:{title:"Overview",permalink:"/docs/next/advanced/instantiate_objects/overview"}},p=[{value:"An example using only default packages",id:"an-example-using-only-default-packages",children:[]},{value:"Overriding packages using the Defaults List",id:"overriding-packages-using-the-defaults-list",children:[]},{value:"Overriding the package via the package directive",id:"overriding-the-package-via-the-package-directive",children:[]},{value:"Using a config group more than once",id:"using-a-config-group-more-than-once",children:[]}],g={toc:p};function m(e){var a=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The package determines where the content of each input config is placed in the output config.\nThe default package of an input config is derived from its Config Group. e.g. The default package of ",(0,l.kt)("inlineCode",{parentName:"p"},"server/db/mysql.yaml")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"server.db"),"."),(0,l.kt)("p",null,"The default package can be overridden ",(0,l.kt)("a",{parentName:"p",href:"#overriding-packages-using-the-defaults-list"},"in the Defaults List"),"\nor via a ",(0,l.kt)("a",{parentName:"p",href:"#overriding-the-package-via-the-package-directive"},"Package Directive")," at the top of the config file.\nChanging the package of a config can be useful when using a config from another library, or when using the same\nconfig group twice in the same app."),(0,l.kt)("p",null,"The priority for determining the final package for a config is as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The package specified in the Defaults List (relative to the package of the including config)"),(0,l.kt)("li",{parentName:"ol"},"The package specified in the Package Directive (absolute)"),(0,l.kt)("li",{parentName:"ol"},"The default package")),(0,l.kt)("p",null,"We will use the following configs in the examples below:"),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\ndebug: false\n\n\n\n"))),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml"',title:'"server/apache.yaml"'},"defaults:\n  - db: mysql\n\nname: apache\n\n\n\n"))),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/mysql.yaml"',title:'"server/db/mysql.yaml"'},"name: mysql\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/sqlite.yaml"',title:'"server/db/sqlite.yaml"'},"name: sqlite\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory structure"',title:'"Config',directory:!0,'structure"':!0},"\u251c\u2500\u2500 server\n\u2502   \u251c\u2500\u2500 db\n\u2502   \u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2502   \u2514\u2500\u2500 sqlite.yaml\n\u2502   \u2514\u2500\u2500 apache.yaml\n\u2514\u2500\u2500 config.yaml\n")),(0,l.kt)("h3",{id:"an-example-using-only-default-packages"},"An example using only default packages"),(0,l.kt)("p",null,"The default package of ",(0,l.kt)("em",{parentName:"p"},"config.yaml")," is the global package, of ",(0,l.kt)("em",{parentName:"p"},"server/apache.yaml")," is ",(0,l.kt)("em",{parentName:"p"},"server")," and of ",(0,l.kt)("em",{parentName:"p"},"server/db/mysql.yaml")," is ",(0,l.kt)("em",{parentName:"p"},"server.db"),". "),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {1-2}',title:'"$',python:!0,'my_app.py"':!0,"{1-2}":!0},"server:\n  db:\n    name: mysql\n  name: apache\ndebug: false\n")))),(0,l.kt)("h3",{id:"overriding-packages-using-the-defaults-list"},"Overriding packages using the Defaults List"),(0,l.kt)("p",null,"By default, packages specified in the Defaults List are relative to the package of containing config.\nAs a consequence, overriding a package relocates the entire subtree. "),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - server/apache@admin\n\ndebug: false\n\n"))),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {2}',title:'"server/apache.yaml"',"{2}":!0},"defaults:\n - db@backup: mysql\n\nname: apache\n\n"))),(0,l.kt)("div",{className:"col col--4"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output config" {1-4}',title:'"Output','config"':!0,"{1-4}":!0},"admin:\n  backup:\n    name: mysql\n  name: apache\ndebug: false\n")))),(0,l.kt)("p",null,"Note that content of ",(0,l.kt)("em",{parentName:"p"},"server/apache.yaml")," is relocated to ",(0,l.kt)("em",{parentName:"p"},"admin"),"\nand the content of ",(0,l.kt)("em",{parentName:"p"},"server/db/mysql.yaml")," to ",(0,l.kt)("em",{parentName:"p"},"admin.backup"),"."),(0,l.kt)("h4",{id:"default-list-package-keywords"},"Default List package keywords"),(0,l.kt)("p",null,"We will use this example, replacing ",(0,l.kt)("em",{parentName:"p"},"<@PACKAGE>")," to demonstrate different cases:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config_group/config.yaml"',title:'"config_group/config.yaml"'},"defaults:\n  - /server/db<@PACKAGE>: mysql\n")),(0,l.kt)("p",null,"Without a package override, the resulting package is ",(0,l.kt)("inlineCode",{parentName:"p"},"config_group.server.db"),".",(0,l.kt)("br",{parentName:"p"}),"\n","With the ",(0,l.kt)("strong",{parentName:"p"},"@","_","here","_")," keyword, The resulting package is the same as the containing config (",(0,l.kt)("inlineCode",{parentName:"p"},"config_group"),"). "),(0,l.kt)("h5",{id:"absolute-keywords"},"Absolute keywords:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"@","_","group","_"),": ","_","group","_"," is the absolute default package of the config (",(0,l.kt)("inlineCode",{parentName:"li"},"server.db"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"@","_","global","_"),": The global package. Anything following ","_","global","_"," is absolute.",(0,l.kt)("br",{parentName:"li"}),"e.g. ",(0,l.kt)("strong",{parentName:"li"},"@","_","global","_",".foo")," becomes ",(0,l.kt)("inlineCode",{parentName:"li"},"foo"),".")),(0,l.kt)("h3",{id:"overriding-the-package-via-the-package-directive"},"Overriding the package via the package directive"),(0,l.kt)("p",null,"The @package directive changes the package of a config file. The package specified by a @package directive is always absolute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/db/mysql.yaml" {1}',title:'"server/db/mysql.yaml"',"{1}":!0},"# @package foo.bar\nname: mysql\n")),(0,l.kt)("p",null,"To change the package to the global (empty) package, use the keyword ",(0,l.kt)("inlineCode",{parentName:"p"},"_global_"),"."),(0,l.kt)("h3",{id:"using-a-config-group-more-than-once"},"Using a config group more than once"),(0,l.kt)("p",null,"The following example adds the ",(0,l.kt)("inlineCode",{parentName:"p"},"server/db/mysql")," config in the packages ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"dst"),"."),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - server/db@src: mysql\n - server/db@dst: mysql\n\n"))),(0,l.kt)("div",{className:"col  col--6"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"src:\n  name: mysql\ndst:\n  name: mysql\n")))),(0,l.kt)("p",null,"When overriding config groups with a non-default package, the package must be used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py server/db@src=sqlite"',title:'"$',python:!0,"my_app.py":!0,"server/db@src":'sqlite"'},"src:\n  name: sqlite\ndst:\n  name: mysql\n")))}m.isMDXComponent=!0}}]);