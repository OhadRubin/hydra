"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8718],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,h=m["".concat(d,".").concat(p)]||m[p]||s[p]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},858:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"job",sidebar_label:"Job Configuration",hide_title:!0},d=void 0,u={unversionedId:"configure_hydra/job",id:"version-1.0/configure_hydra/job",isDocsHomePage:!1,title:"job",description:"Job configuration",source:"@site/versioned_docs/version-1.0/configure_hydra/job.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/job",permalink:"/docs/1.0/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/configure_hydra/job.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1635816556,formattedLastUpdatedAt:"11/2/2021",frontMatter:{id:"job",sidebar_label:"Job Configuration",hide_title:!0},sidebar:"version-1.0/docs",previous:{title:"Introduction",permalink:"/docs/1.0/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/1.0/configure_hydra/logging"}},c=[{value:"Job configuration",id:"job-configuration",children:[]},{value:"Documentation",id:"documentation",children:[{value:"hydra.job.name",id:"hydrajobname",children:[]},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[]},{value:"hydra.job.id",id:"hydrajobid",children:[]},{value:"hydra.job.num",id:"hydrajobnum",children:[]},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[]},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[]},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[]}]}],s={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"job-configuration"},"Job configuration"),(0,o.kt)("p",null,"The job configuration resides in ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe structure definition is below, the latest definition ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/hydra/conf/__init__.py"},"in the code"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand definition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("h3",{id:"hydrajobname"},"hydra.job.name"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/job_name"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,o.kt)("p",null,"The job name is used by different things in Hydra, such as the log file name (",(0,o.kt)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (file: ",(0,o.kt)("inlineCode",{parentName:"p"},"train.py")," -> name: ",(0,o.kt)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line or your config file. "),(0,o.kt)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),(0,o.kt)("p",null,"This field is populated automatically using your command line arguments and is typically being used as a part of your\noutput directory pattern.\nFor example, the command line arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python foo.py a=10 b=20\n")),(0,o.kt)("p",null,"Would result in ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job.override_dirname")," getting the value a=10,b=20.\nWhen used with the output directory override, it can automatically generate directories that represent the\ncommand line arguments used in your run.   "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}\n")),(0,o.kt)("p",null,"The generation of override_dirname can be controlled by ",(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job.config.override_dirname"),".\nIn particular, the separator char ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," and the item separator char ",(0,o.kt)("inlineCode",{parentName:"p"},",")," can be modified, and in addition some command line\noverride keys can be automatically excluded from the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"override_dirname"),".\nAn example of a case where the exclude is useful is a random seed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    dir: output/${hydra.job.override_dirname}/seed=${seed}\n  job:\n    config:\n      override_dirname:\n        exclude_keys:\n          - seed\n")),(0,o.kt)("p",null,"With this configuration, running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ python foo.py a=10 b=20 seed=999\n")),(0,o.kt)("p",null,"Would result in a directory like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"output/a=10,b=20/seed=999\n")),(0,o.kt)("p",null,"Allowing you to more easily group identical runs with different random seeds together."),(0,o.kt)("h3",{id:"hydrajobid"},"hydra.job.id"),(0,o.kt)("p",null,"The job ID is populated by active Hydra launcher. For the basic launcher, the job ID is just a serial job number, but\nfor other systems this could be the SLURM job ID or the AWS Instance ID."),(0,o.kt)("h3",{id:"hydrajobnum"},"hydra.job.num"),(0,o.kt)("p",null,"Serial job number within this current sweep run. (0 to n-1)"),(0,o.kt)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),(0,o.kt)("p",null,"The config name used by the job, this is populated automatically to match the config name in @hydra.main()"),(0,o.kt)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),(0,o.kt)("p",null,"A Dict","[str, str]"," that is used to set the environment variables of the running job.\nSome common use cases are to set environment variables that are effecting underlying libraries, for example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),(0,o.kt)("p",null,"Disables multithreading in Intel IPP and MKL."),(0,o.kt)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",(0,o.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"Torch Distributed")," run to match the job number\nin the sweep. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),(0,o.kt)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),(0,o.kt)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}m.isMDXComponent=!0}}]);