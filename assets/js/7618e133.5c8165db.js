"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5538],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,r({},t,{components:n}))}},m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),c=i,f=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return p}});var a=n(87462),i=n(67294),r=n(39960),o=n(52263),l=n(80907);function s(e){return i.createElement(r.default,(0,a.Z)({},e,{to:(t=e.to,s=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function p(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},21578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(93899),l=["components"],s={id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},p=void 0,d={unversionedId:"advanced/instantiate_objects/overview",id:"advanced/instantiate_objects/overview",title:"Instantiating objects with Hydra",description:"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.",source:"@site/docs/advanced/instantiate_objects/overview.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/overview",permalink:"/docs/next/advanced/instantiate_objects/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/instantiate_objects/overview.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1648840349,formattedLastUpdatedAt:"4/1/2022",frontMatter:{id:"overview",title:"Instantiating objects with Hydra",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Packages",permalink:"/docs/next/advanced/overriding_packages"},next:{title:"Config files example",permalink:"/docs/next/advanced/instantiate_objects/config_files"}},m=[{value:"Simple usage",id:"simple-usage",children:[],level:3},{value:"Recursive instantiation",id:"recursive-instantiation",children:[],level:3},{value:"Disable recursive instantiation",id:"disable-recursive-instantiation",children:[],level:3},{value:"Parameter conversion strategies",id:"parameter-conversion-strategies",children:[],level:3},{value:"Partial Instantiation",id:"partial-instantiation",children:[],level:3}],c={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,r.mdx)("p",null,"One of the best ways to drive different behavior in an application is to instantiate different implementations of an interface.\nThe code using the instantiated object only knows the interface which remains constant, but the behavior\nis determined by the actual object instance."),(0,r.mdx)("p",null,"Hydra provides ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra.utils.instantiate()")," (and its alias ",(0,r.mdx)("inlineCode",{parentName:"p"},"hydra.utils.call()"),") for instantiating objects and calling functions. Prefer ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate")," for creating objects and ",(0,r.mdx)("inlineCode",{parentName:"p"},"call")," for invoking functions."),(0,r.mdx)("p",null,"Call/instantiate supports:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Constructing an object by calling the ",(0,r.mdx)("inlineCode",{parentName:"li"},"__init__")," method"),(0,r.mdx)("li",{parentName:"ul"},"Calling functions, static functions, class methods and other callable global objects")),(0,r.mdx)("details",null,(0,r.mdx)("summary",null,"Instantiate API (Expand for details)"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def instantiate(config: Any, *args: Any, **kwargs: Any) -> Any:\n    """\n    :param config: An config object describing what to call and what params to use.\n                   In addition to the parameters, the config must contain:\n                   _target_ : target class or callable name (str)\n                   And may contain:\n                   _args_: List-like of positional arguments to pass to the target\n                   _recursive_: Construct nested objects as well (bool).\n                                True by default.\n                                may be overridden via a _recursive_ key in\n                                the kwargs\n                   _convert_: Conversion strategy\n                        none    : Passed objects are DictConfig and ListConfig, default\n                        partial : Passed objects are converted to dict and list, with\n                                  the exception of Structured Configs (and their fields).\n                        all     : Passed objects are dicts, lists and primitives without\n                                  a trace of OmegaConf containers\n                   _partial_: If True, return functools.partial wrapped method or object\n                              False by default. Configure per target.\n    :param args: Optional positional parameters pass-through\n    :param kwargs: Optional named parameters to override\n                   parameters in the config object. Parameters not present\n                   in the config objects are being passed as is to the target.\n                   IMPORTANT: dataclasses instances in kwargs are interpreted as config\n                              and cannot be used as passthrough\n    :return: if _target_ is a class name: the instantiated object\n             if _target_ is a callable: the return value of the call\n    """\n\n# Alias for instantiate\ncall = instantiate\n'))),(0,r.mdx)("br",null),(0,r.mdx)("p",null,"The config passed to these functions must have a key called ",(0,r.mdx)("inlineCode",{parentName:"p"},"_target_"),", with the value of a fully qualified class name, class method, static method or callable.\nFor convenience, ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," config results in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"None")," object."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Named arguments")," : Config fields (except reserved fields like ",(0,r.mdx)("inlineCode",{parentName:"p"},"_target_"),") are passed as named arguments to the target.\nNamed arguments in the config can be overridden by passing named argument with the same name in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Positional arguments")," : The config may contain a ",(0,r.mdx)("inlineCode",{parentName:"p"},"_args_")," field representing positional arguments to pass to the target.\nThe positional arguments can be overridden together by passing positional arguments in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate()")," call-site."),(0,r.mdx)("h3",{id:"simple-usage"},"Simple usage"),(0,r.mdx)("p",null,"Your application might have an Optimizer class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example class"',title:'"Example','class"':!0},"class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n")),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"optimizer:\n  _target_: my_app.Optimizer\n  algo: SGD\n  lr: 0.01\n\n\n\n\n"))),(0,r.mdx)("div",{className:"col col--6"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},"opt = instantiate(cfg.optimizer)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.01)\n\n# override parameters on the call-site\nopt = instantiate(cfg.optimizer, lr=0.2)\nprint(opt)\n# Optimizer(algo=SGD,lr=0.2)\n")))),(0,r.mdx)("h3",{id:"recursive-instantiation"},"Recursive instantiation"),(0,r.mdx)("p",null,"Let's add a Dataset and a Trainer class. The trainer holds a Dataset and an Optimizer instances."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Additional classes"',title:'"Additional','classes"':!0},"class Dataset:\n    name: str\n    path: str\n\n    def __init__(self, name: str, path: str) -> None:\n        self.name = name\n        self.path = path\n\n\nclass Trainer:\n    def __init__(self, optimizer: Optimizer, dataset: Dataset) -> None:\n        self.optimizer = optimizer\n        self.dataset = dataset\n")),(0,r.mdx)("p",null,"With the following config, you can instantiate the whole thing with a single call:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Example config"',title:'"Example','config"':!0},"trainer:\n  _target_: my_app.Trainer\n  optimizer:\n    _target_: my_app.Optimizer\n    algo: SGD\n    lr: 0.01\n  dataset:\n    _target_: my_app.Dataset\n    name: Imagenet\n    path: /datasets/imagenet\n")),(0,r.mdx)("p",null,"Hydra will instantiate nested objects recursively by default."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"trainer = instantiate(cfg.trainer)\nprint(trainer)\n# Trainer(\n#  optimizer=Optimizer(algo=SGD,lr=0.01),\n#  dataset=Dataset(name=Imagenet, path=/datasets/imagenet)\n# )\n")),(0,r.mdx)("p",null,"You can override parameters for nested objects:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'trainer = instantiate(\n    cfg.trainer,\n    optimizer={"lr": 0.3},\n    dataset={"name": "cifar10", "path": "/datasets/cifar10"},\n)\nprint(trainer)\n# Trainer(\n#   optimizer=Optimizer(algo=SGD,lr=0.3),\n#   dataset=Dataset(name=cifar10, path=/datasets/cifar10)\n# )\n')),(0,r.mdx)("p",null,"Similarly, positional arguments of nested objects can be overridden:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'obj = instantiate(\n    cfg.object,\n    # pass 1 and 2 as positional arguments to the target object\n    1, 2,  \n    # pass 3 and 4 as positional arguments to a nested child object\n    child={"_args_": [3, 4]},\n)\n')),(0,r.mdx)("h3",{id:"disable-recursive-instantiation"},"Disable recursive instantiation"),(0,r.mdx)("p",null,"You can disable recursive instantiation by setting ",(0,r.mdx)("inlineCode",{parentName:"p"},"_recursive_")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"False")," in the config node or in the call-site\nIn that case the Trainer object will receive an OmegaConf DictConfig for nested dataset and optimizer instead of the instantiated objects."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"optimizer = instantiate(cfg.trainer, _recursive_=False)\nprint(optimizer)\n")),(0,r.mdx)("p",null,"Output:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"Trainer(\n  optimizer={\n    '_target_': 'my_app.Optimizer', 'algo': 'SGD', 'lr': 0.01\n  },\n  dataset={\n    '_target_': 'my_app.Dataset', 'name': 'Imagenet', 'path': '/datasets/imagenet'\n  }\n)\n")),(0,r.mdx)("h3",{id:"parameter-conversion-strategies"},"Parameter conversion strategies"),(0,r.mdx)("p",null,"By default, the parameters passed to the target are either primitives (int, float, bool etc) or",(0,r.mdx)("br",{parentName:"p"}),"\n","OmegaConf containers (DictConfig, ListConfig).\nOmegaConf containers have many advantages over primitive dicts and lists but in some cases\nit's desired to pass a real dicts and lists (for example, for performance reasons)."),(0,r.mdx)("p",null,"You can change the parameter conversion strategy using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"_convert_")," parameter (in your config or the call-site).\nSupported values are:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"none")," : Default behavior, Use OmegaConf containers"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"partial")," : Convert OmegaConf containers to dict and list, except Structured Configs."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"all")," : Convert everything to primitive containers")),(0,r.mdx)("p",null,"Note that the conversion strategy applies to all the parameters passed to the target."),(0,r.mdx)("h3",{id:"partial-instantiation"},"Partial Instantiation"),(0,r.mdx)("p",null,"Sometimes you may not set all parameters needed to instantiate an object from the configuration, in this case you can set\n",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_")," to be ",(0,r.mdx)("inlineCode",{parentName:"p"},"True")," to get a ",(0,r.mdx)("inlineCode",{parentName:"p"},"functools.partial")," wrapped object or method, then complete initializing the object in\nthe application code. Here is an example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Example classes"',title:'"Example','classes"':!0},'class Optimizer:\n    algo: str\n    lr: float\n\n    def __init__(self, algo: str, lr: float) -> None:\n        self.algo = algo\n        self.lr = lr\n\n    def __repr__(self) -> str:\n        return f"Optimizer(algo={self.algo},lr={self.lr})"\n\n\nclass Model:\n    def __init__(self, optim_partial: Any, lr: float):\n        super().__init__()\n        self.optim = optim_partial(lr=lr)\n        self.lr = lr\n\n    def __repr__(self) -> str:\n        return f"Model(Optimizer={self.optim},lr={self.lr})"\n')),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--5"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Config"',title:'"Config"'},"model:\n  _target_: my_app.Model\n  optim_partial:\n    _partial_: true\n    _target_: my_app.Optimizer\n    algo: SGD\n  lr: 0.01\n"))),(0,r.mdx)("div",{className:"col col--7"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Instantiation"',title:'"Instantiation"'},'model = instantiate(cfg.model)\nprint(model)\n# "Model(Optimizer=Optimizer(algo=SGD,lr=0.01),lr=0.01)\n')))),(0,r.mdx)("p",null,"If you are repeatedly instantiating the same config,\nusing ",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_=True")," may provide a significant speedup as compared with regular (non-partial) instantiation."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"factory = instantiate(config, _partial_=True)\nobj = factory()\n")),(0,r.mdx)("p",null,"In the above example, repeatedly calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"factory")," would be faster than repeatedly calling ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate(config)"),".\nA caveat of this approach is that the same keyword arguments would be re-used in each call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"factory"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'class Foo:\n    ...\n\nclass Bar:\n    def __init__(self, foo):\n        self.foo = foo\n\nbar_conf = {\n    "_target_": "__main__.Bar",\n    "foo": {"_target_": "__main__.Foo"},\n}\n\nbar_factory = instantiate(bar_conf, _partial_=True)\nbar1 = bar_factory()\nbar2 = bar_factory()\n\nassert bar1 is not bar2\nassert bar1.foo is bar2.foo  # the `Foo` instance is re-used here\n')),(0,r.mdx)("p",null,"This does not apply if ",(0,r.mdx)("inlineCode",{parentName:"p"},"_partial_=False"),",\nin which case a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"Foo")," instance would be created with each call to ",(0,r.mdx)("inlineCode",{parentName:"p"},"instantiate"),"."))}u.isMDXComponent=!0}}]);