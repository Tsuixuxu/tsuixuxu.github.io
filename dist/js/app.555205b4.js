(function(e){function t(t){for(var i,a,o=t[0],g=t[1],p=t[2],c=0,u=[];c<o.length;c++)a=o[c],s[a]&&u.push(s[a][0]),s[a]=0;for(i in g)Object.prototype.hasOwnProperty.call(g,i)&&(e[i]=g[i]);l&&l(t);while(u.length)u.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(i=!1)}i&&(r.splice(t--,1),e=g(g.s=n[0]))}return e}var i={},a={app:0},s={app:0},r=[];function o(e){return g.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1ea4dc7a"}[e]+".js"}function g(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,g),n.l=!0,n.exports}g.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"8b3f36f2"}[e]+".css",s=g.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var p=r[o],c=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(c===i||c===s))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){p=u[o],c=p.getAttribute("data-href");if(c===i||c===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var i=t&&t.target&&t.target.src||s,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.request=i,delete a[e],l.parentNode.removeChild(l),n(r)},l.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(l)}).then(function(){a[e]=0}));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise(function(t,n){i=s[e]=[t,n]});t.push(i[2]=r);var p,c=document.createElement("script");c.charset="utf-8",c.timeout=120,g.nc&&c.setAttribute("nonce",g.nc),c.src=o(e),p=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}s[e]=void 0}};var u=setTimeout(function(){p({type:"timeout",target:c})},12e4);c.onerror=c.onload=p,document.head.appendChild(c)}return Promise.all(t)},g.m=e,g.c=i,g.d=function(e,t,n){g.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},g.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},g.t=function(e,t){if(1&t&&(e=g(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(g.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)g.d(n,i,function(t){return e[t]}.bind(null,i));return n},g.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return g.d(t,"a",t),t},g.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},g.p="",g.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=t,p=p.slice();for(var u=0;u<p.length;u++)t(p[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"204b":function(e,t,n){},"3c87":function(e,t,n){"use strict";var i=n("d567"),a=n.n(i);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("5c07"),n("53da"),n("2556"),n("d0f8");var i=n("2418"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("div",{staticClass:"main-content"},[n("router-view")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-navbar"},[n("router-link",{staticClass:"link",attrs:{to:"/"}},[n("div",{staticClass:"logo blog-font-bold"},[e._v("TSUI.")])]),n("div",{staticClass:"link-item link-work",class:{active:"works"!==e.route}},[n("div",{staticClass:"route-wrap"},[n("router-link",{staticClass:"link",class:{"blog-font-bold":"works"===e.route},attrs:{to:"/works"},nativeOn:{click:function(t){return e.changeRoute()}}},[e._v("WORKS")])],1),n("div",{staticClass:"work-children",class:{show:"works"===e.route}},e._l(e.types,function(t){return n("div",{key:t.tag,staticClass:"child",class:{active:e.active===t.tag},on:{click:function(n){return e.selectChid(t.tag)}}},[e._v("\n        "+e._s(t.name)+"\n      ")])}),0)]),n("div",{staticClass:"link-item"},[n("router-link",{staticClass:"link",class:{"blog-font-bold":"about"===e.route},attrs:{to:"/about"},on:{click:function(t){return e.changeRoute()}}},[e._v("ABOUT")])],1)],1)},o=[],g=(n("3a23"),[{name:"项目",tag:"project"},{name:"海报",tag:"poster"},{name:"包装",tag:"package"},{name:"logo",tag:"logo"},{name:"UI",tag:"UI"}]),p={data:function(){return{types:[].concat(g),active:"",route:""}},watch:{$route:function(e){this.route=e.name,this.active=e.query.tag,scrollTo(0,0)}},methods:{changeRoute:function(){this.active=""},selectChid:function(e){this.active=e,this.$router.push({name:"works",query:{tag:e}})}},mounted:function(){this.route=this.$route.name;var e=this.$route.query.tag;this.active=e||""}},c=p,u=(n("b9ab"),n("17cc")),l=Object(u["a"])(c,r,o,!1,null,"b1465c3c",null),m=l.exports,d={components:{Navbar:m}},j=d,h=(n("7c55"),Object(u["a"])(j,a,s,!1,null,null,null)),f=h.exports,v=n("081a"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"works"},[e.articles.length?n("div",{staticClass:"content-wrap"},e._l(e.articles,function(e){return n("work-item",{key:e.id,attrs:{work:e}})}),1):n("div",{staticClass:"no-data"},[e._v("\n    暂无数据\n  ")]),n("div",{staticClass:"copyright"},[e._v("Copyright © Tsui. All rights reserved.")])])},y=[],_=(n("e0c1"),n("93fe"),n("b09e")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"work-item"},[n("div",{staticClass:"content-wrapper",on:{click:e.goDetail}},[n("div",{staticClass:"img-wrapper"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.work.banner||e.work.imgs[0]||"",expression:"work.banner || work.imgs[0] || ''"}],staticClass:"img",attrs:{alt:""}})]),n("div",{staticClass:"title"},[e._v("\n      "+e._s(e.work.title)+"\n    ")])]),n("div",{staticClass:"tag-wrap"},e._l(e.work.tag,function(t,i){return n("span",{key:t,staticClass:"tag",on:{click:function(n){return e.selectTag(t)}}},[e._v("\n      "+e._s(t)+"\n      "),i!==e.work.tag.length-1?[e._v("\n        ,\n      ")]:e._e()],2)}),0)])},k=[],C=(n("612f"),n("b5aa"),n("2c46")),E={props:{work:{default:function(){},type:Object}},data:function(){return{timer:""}},methods:{selectTag:function(e){this.$router.push({name:"works",query:{tag:e}})},goDetail:function(){this.$router.push({name:"article",query:{id:this.work.id}})},createWarning:function(){var e=Object(C["a"])(regeneratorRuntime.mark(function e(t){var n,i,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".protect-text");case 2:n=e.sent,n&&document.body.removeChild(n),i=t.x,a=t.y,s=document.createElement("div"),s.innerText="版权保护，请勿保存下载",s.classList="protect-text",s.style.left=i+"px",s.style.top=a+"px",document.body.append(s),this.clearTimer();case 13:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),clearTimer:function(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=document.querySelector(".protect-text");e&&document.body.removeChild(e)},2e3)}},mounted:function(){var e=this;this.$nextTick(function(){var t=document.querySelectorAll(".img");t.forEach(function(t){t.oncontextmenu=function(t){return t.preventDefault(),e.createWarning(t),!1}}),document.body.onclick=function(){var e=document.querySelector(".protect-text");e&&document.body.removeChild(e)}})}},T=E,x=(n("9073"),n("a665"),Object(u["a"])(T,w,k,!1,null,"1bd9d2c0",null)),A=x.exports,R=n("a205"),Y={name:"works",components:{WorkItem:A},data:function(){return{articles:Object(_["a"])(R["a"]),tag:""}},watch:{$route:function(e){this.tag=e.query.tag,this.chooseType(this.tag)}},methods:{chooseType:function(e){if(e){var t=R["a"].filter(function(t){return t.tag.includes(e)});this.$set(this.$data,"articles",t)}else this.$set(this.$data,"articles",R["a"])}},mounted:function(){this.route=this.$route.name;var e=this.$route.query.tag;this.chooseType(e)}},$=Y,O=(n("7173"),Object(u["a"])($,b,y,!1,null,"45865bf5",null)),q=O.exports;i["a"].use(v["a"]);var S=new v["a"]({mode:"hash",base:"",routes:[{path:"/",redirect:"works"},{path:"/works",name:"works",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/article",name:"article",component:function(){return n.e("about").then(n.bind(null,"f12e"))}}]}),z=(n("6227"),n("aae9")),N=n.n(z);i["a"].use(N.a),i["a"].use(N.a,{preLoad:1.3,loading:n("cf1c"),attempt:3}),i["a"].config.productionTip=!1,new i["a"]({router:S,render:function(e){return e(f)}}).$mount("#app")},"5c5e":function(e,t,n){"use strict";var i=n("7dad"),a=n.n(i);a.a},6227:function(e,t,n){},"68b7":function(e,t,n){},"6e56":function(e,t,n){},7173:function(e,t,n){"use strict";var i=n("68b7"),a=n.n(i);a.a},"79a1":function(e,t,n){},"7c55":function(e,t,n){"use strict";var i=n("79a1"),a=n.n(i);a.a},"7dad":function(e,t,n){},9073:function(e,t,n){"use strict";var i=n("204b"),a=n.n(i);a.a},"9c50":function(e,t,n){},a021:function(e,t,n){"use strict";var i=n("b30b"),a=n.n(i);a.a},a205:function(e,t,n){"use strict";n("5c07"),n("53da"),n("2556"),n("d0f8");var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-client"},[n("p",{staticClass:"bottom"},[e._v("设计之初提出三个设计思路。")]),n("p",[e._v("一是——团圆。")]),n("p",[e._v("中秋自古有阖家团圆之意。")]),n("p",[e._v("以公司三条业务线和公司部门为主题，做创意插画：")]),n("p",[e._v("\n    将主题串联成中秋购买月饼的小故事：生产、包装、制作、销售、购买、寄送。\n  ")]),n("p",{staticClass:"bottom"},[e._v("\n    表达公司陪你一起过中秋的团圆氛围，设计出符合企业价值和中秋主题的月饼礼盒。\n  ")]),n("p",[e._v("二是——程序员。")]),n("p",[e._v("作为一家互联网云通讯公司，少不了程序员的元素，")]),n("p",{staticClass:"bottom"},[e._v("取程序员写“代码”时的常用符号为元素，体现在礼盒设计中。")]),n("p",[e._v("最后——趣味。")]),n("p",[e._v("每盒月饼中都附上了贺卡，手写贺词。")]),n("p",[e._v("贺卡中央的圆形兔子纸片可以取下转动，取儿时玩物“留影盘”的概念，")]),n("p",{staticClass:"bottom"},[e._v("\n    转动纸片可以看到正反面叠影在一起的动态情景，增加互动性和趣味性。\n  ")]),n("p",{staticClass:"bottom2"},[e._v("此致：但愿人长久，千里共婵娟。")])])}],s=(n("a021"),n("17cc")),r={},o=Object(s["a"])(r,i,a,!1,null,"25487776",null),g=o.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-client"},[n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("调研")]),n("div",[n("p",[e._v("我主要负责logo、VI的视觉整体呈现，活动策划")]),n("p",[e._v("线上线下宣传物料，配合室内设计师完成相关餐厅物料")]),n("p",[e._v("越南 博物馆 批发市场 奥巴⻢ 下乡 粉制作 ⼴告⽚")]),n("p",[e._v("与室内设计师沟通 从电影获得灵感 绘制logo草图及VI⽅向")])])]),n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("问题")]),n("div",[n("p",[e._v("越南与中国的相似度————深度挖掘特⾊")]),n("p",[e._v("餐厅⾯积⼩，视觉做点缀呈现————⻛格简约")]),n("p",[e._v("logo辨识度不⾼————修改增加记忆点")])])]),n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("思考")]),n("div",[n("p",[e._v("\n        餐厅营业后，我还在店⾥体验了⼏天，设计源于⽣活，在检验视觉效果的同时\n      ")]),n("p",[e._v("更直观的了解餐厅的运作和什么样的设计才是客户的消费者真正需要的")]),n("p",[e._v("\n        经过我们的努⼒餐厅顾客络绎不绝，⽇流⽔量达到2万元，⾼于同级竞争品牌\n      ")])])])])}],u=(n("cb3d"),{}),l=Object(s["a"])(u,p,c,!1,null,"176f01e0",null),m=l.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-client"},[n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("调研")]),n("div",[n("p",[e._v("对⽔果基地的实地考察，⽔果市场的调研，体验甲⽅⼯⼚的运⾏机制")]),n("p",[e._v("\n        相关⽔果品牌的了解与对⽐，得出最可⾏的操作运⾏机制，以及视觉形象⽅向\n      ")])])]),n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("问题")]),n("div",[n("p",[e._v("logo配⾊选择多样————对⽐后选定两暖两冷为配⾊")]),n("p",[e._v("logo细节的组成不够协调————尝试多种组合形式")]),n("p",[e._v("果汁瓶外形的多种可能————实物购买⽐较，与甲⽅沟通")])])]),n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("呈现")]),n("div",[n("p",[e._v("这个项⽬我作为主设计负责品牌命名、品牌⽂化、logo及VI的视觉设计")]),n("p",[e._v("产品包装、线上推⼴、线下宣传物料")])])]),n("div",{staticClass:"row"},[n("p",{staticClass:"label"},[e._v("思考")]),n("div",[n("p",[e._v("\n        在项⽬进⾏的每⼀步，我们都与甲⽅进⾏沟通，双⽅时常在⼀起进⾏讨论和创意\n      ")]),n("p",[e._v("及时的沟通促使项⽬更快更⾼效的进⾏下去")])])])])}],h=(n("5c5e"),{}),f=Object(s["a"])(h,d,j,!1,null,"3113767c",null),v=f.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-client"},[n("p",{staticClass:"row"},[e._v("\n    中国汉字博大精深，在我国传统文化中起着至关重要的作用。但人们在使用这些汉字的同时，却逐渐缺少对汉字本身的\n    理解，这是一种文化的盲从与缺失。不同的剧本，不同的场地，汉字的涵义也不同，有了语言的传达才有更丰富的意义。\n  ")]),n("p",{staticClass:"row"},[e._v("\n    另一方面随时代的发展，如今许多新新词汇的出现给中国汉字文化注入了新鲜血液，增加了文字的更多可能性。老子的\n    《道德经》中曾说“道生一，一生二，二生三，三生万物，万物负阴而抱阳，冲气以为和”。所谓一，是指天地万物形成之\n    前的一种混沌未分的状态。由一生二，即产生天地或阴阳。天地阴阳交合而生三，然后产生万物。这样，道便成为万物所\n    由生的本体或本原，世界上万事万物都是由道产生的。同时这十个汉字看似简单，却异常丰富，涵盖了大大小小的中国传\n    统文化知识。在今天人们对这十个汉字的理解也是丰富多彩，褒贬不一，值得深究。\n  ")]),n("p",{staticClass:"row"},[e._v("\n    我提取汉字中“一二三四五六七八九十”十个字，分别选择现代新新词汇中含此十个汉字的词汇，深入研究文字的历史，\n    造字原理，文字特征，认真体会现在的涵义，充分发挥想象力，以书籍为载体，用自己的方式表现对中文的理解。实现传\n    统文化与现代文化的融合与突破。希望人们能够更多的关注中文以及它们背后那些有趣的故事，在阅读的同时获得一份乐\n    趣。如：\n  ")]),n("pre",[e._v("          一               一哥\n\n          二               二货\n\n          三               小三\n\n          四               四爷\n\n          五               战五渣\n\n          六               六神\n\n          七               神七\n\n          八               八婆\n\n          九               九块九\n          \n          十               十动拒然  \n  ")]),n("p",{staticClass:"row"},[e._v("\n    助书籍的呈现方式，我将《一二三四五六七八九十》分为古、今两册。古册以蓝色为主调，阐述汉语词汇的本义，今册\n    以红色为主调，阐述流行于今天的新新词汇。使用红蓝对比色来表达古今中文语义之间的激烈碰撞。在编排上，以简洁明\n    了为主，突出主题。书籍可以很好的记录“一二三四五六七八九十”的创作过程，以静态的形式详细呈现出来，又能够将\n    一些设计理念综合运用于书籍的整体设计中。同时书籍又是一种很好的传播媒介，可以得到更多人的关注。\n  ")]),n("p",{staticClass:"row"},[e._v("\n    今天的文字表现已经趋向图形化，使文字不仅仅具有“读”的功效，更有着“看”的功能，我做的这种尝试是对传统文化\n    的传承，对现代文化的创新。通过对这些词汇的理解与提取，结合图形，表达我对此的理解。\n  ")])])}],_=(n("af16"),{}),w=Object(s["a"])(_,b,y,!1,null,"e2abd06c",null),k=w.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"article-client"},[n("p",{staticClass:"bottom"},[e._v("\n    完整版请点击链接 >>>\n    "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/myWkhG0JZfLh1vU4WjF6bg",target:"_blank"}},[e._v("微信漫画")])])])}],T=(n("3c87"),{}),x=Object(s["a"])(T,C,E,!1,null,"ec35e52e",null),A=x.exports,R="imgs/logo/logo1/logo1_1.jpg",Y="imgs/logo/logo1/logo1_2.jpg",$="imgs/logo/logo1/banner.png",O="imgs/logo/logo2/logo2.jpg",q="imgs/logo/logo2/banner.png",S="imgs/package/calendar2018/1.jpg",z="imgs/package/calendar2018/2.png",N="imgs/package/calendar2018/3.png",I="imgs/package/calendar2018/banner.png",P="imgs/package/mid-autumn/1.jpg",D="imgs/package/mid-autumn/2.jpg",U="imgs/package/mid-autumn/3.jpg",M="imgs/package/mid-autumn/4.jpg",W="imgs/package/mid-autumn/5.jpg",B="imgs/package/mid-autumn/6.jpg",L="imgs/package/mid-autumn/7.png",J="imgs/package/mid-autumn/8.jpg",V="imgs/package/mid-autumn/9.jpg",H="imgs/package/mid-autumn/banner.png",F="imgs/package/new-year/1.jpeg",G="imgs/package/new-year/2.jpg",K="imgs/package/new-year/3.jpg",Z="imgs/package/new-year/4.jpg",Q="imgs/package/new-year/5.jpg",X="imgs/package/new-year/6.jpg",ee="imgs/package/new-year/7.png",te="imgs/package/new-year/banner.png",ne="imgs/poster/1024.png",ie="imgs/poster/1212/1212.png",ae="imgs/poster/1212/banner.png",se="imgs/poster/dianxin.jpg",re="imgs/poster/duanwu/duanwu.jpg",oe="imgs/poster/duanwu/banner.png",ge="imgs/poster/huojin/huojin.jpg",pe="imgs/poster/huojin/banner.png",ce="imgs/poster/winter/winter.png",ue="imgs/poster/winter/banner.png",le="imgs/poster/51/1.png",me="imgs/poster/51/2.jpg",de="imgs/poster/51/3.jpg",je="imgs/poster/51/banner.png",he="imgs/poster/0101/1.png",fe="imgs/poster/0101/2.png",ve="imgs/poster/0101/3.png",be="imgs/poster/0101/banner.png",ye="imgs/poster/1111/1.png",_e="imgs/poster/1111/2.png",we="imgs/poster/1111/3.png",ke="imgs/poster/1111/banner.png",Ce="imgs/poster/new-year/1.jpg",Ee="imgs/poster/new-year/2.jpg",Te="imgs/poster/new-year/3.jpg",xe="imgs/poster/new-year/4.jpg",Ae="imgs/poster/new-year/5.jpg",Re="imgs/poster/new-year/6.jpg",Ye="imgs/poster/new-year/7.jpg",$e="imgs/poster/new-year/8.jpg",Oe="imgs/poster/new-year/9.jpg",qe="imgs/poster/new-year/10.jpg",Se="imgs/poster/new-year/11.jpg",ze="imgs/poster/new-year/12.jpg",Ne="imgs/poster/new-year/13.jpg",Ie="imgs/poster/new-year/14.jpg",Pe="imgs/poster/new-year/banner.png",De="imgs/poster/pages/1.jpg",Ue="imgs/poster/pages/2.png",Me="imgs/poster/pages/banner.png",We="imgs/poster/school/1.jpg",Be="imgs/poster/school/2.jpg",Le="imgs/poster/terminal/1.png",Je="imgs/poster/terminal/2.png",Ve="imgs/poster/terminal/3.png",He="imgs/poster/terminal/banner.png",Fe="imgs/poster/terminal/banner2.png",Ge="imgs/poster/terminal/banner3.png",Ke="imgs/poster/pinpai.png",Ze="imgs/poster/faxianshanghai/faxianshanghai.jpg",Qe="imgs/poster/faxianshanghai/banner.png",Xe="imgs/poster/315/1.png",et="imgs/poster/315/2.png",tt="imgs/poster/315/3.png",nt="imgs/poster/315/banner.png",it="imgs/poster/7th/7th.png",at="imgs/poster/7th/banner.png",st="imgs/poster/bainian/bainian.png",rt="imgs/poster/bainian/banner.png",ot="imgs/poster/cartoon/banner.png",gt="imgs/poster/cartoon/img1.png",pt="imgs/poster/cartoon/img2.png",ct="imgs/poster/cartoon/img4.png",ut="imgs/project/fenyuexigong/1.png",lt="imgs/project/fenyuexigong/2.png",mt="imgs/project/fenyuexigong/3.png",dt="imgs/project/fenyuexigong/4.png",jt="imgs/project/fenyuexigong/5.jpg",ht="imgs/project/fenyuexigong/6.png",ft="imgs/project/fenyuexigong/banner.png",vt="imgs/project/guoweixianjing/pinpai-29.png",bt="imgs/project/guoweixianjing/pinpai-30.png",yt="imgs/project/guoweixianjing/pinpai-31.png",_t="imgs/project/guoweixianjing/post-13.png",wt="imgs/project/guoweixianjing/banner.png",kt="imgs/project/malasong/1.jpg",Ct="imgs/project/malasong/2.jpg",Et="imgs/project/malasong/3.jpg",Tt="imgs/project/malasong/4.jpg",xt="imgs/project/malasong/5.jpg",At="imgs/project/malasong/6.png",Rt="imgs/project/malasong/7.png",Yt="imgs/project/malasong/8.png",$t="imgs/project/malasong/9.png",Ot="imgs/project/malasong/10.png",qt="imgs/project/malasong/banner.png",St="imgs/project/qunfangzhengyan/1.png",zt="imgs/project/qunfangzhengyan/2.png",Nt="imgs/project/qunfangzhengyan/3.png",It="imgs/project/qunfangzhengyan/4.png",Pt="imgs/project/qunfangzhengyan/5.png",Dt="imgs/project/qunfangzhengyan/6.png",Ut="imgs/project/qunfangzhengyan/banner.png",Mt="imgs/project/sajiao/1.png",Wt="imgs/project/sajiao/2.png",Bt="imgs/project/sajiao/3.png",Lt="imgs/project/sajiao/4.png",Jt="imgs/project/sajiao/banner.png",Vt="imgs/project/shejishiwusuo/1.png",Ht="imgs/project/shejishiwusuo/2.png",Ft="imgs/project/shejishiwusuo/3.png",Gt="imgs/project/shejishiwusuo/banner.png",Kt="imgs/project/tanshe/1.png",Zt="imgs/project/tanshe/2.png",Qt="imgs/project/tanshe/3.png",Xt="imgs/project/tanshe/4.png",en="imgs/project/tanshe/5.png",tn="imgs/project/tanshe/6.png",nn="imgs/project/tanshe/banner.png",an="imgs/project/yaoyao/1.png",sn="imgs/project/yaoyao/2.png",rn="imgs/project/yaoyao/3.png",on="imgs/project/yaoyao/4.png",gn="imgs/project/yaoyao/banner.png",pn="imgs/project/12345678/1.jpg",cn="imgs/project/12345678/2.jpg",un="imgs/project/12345678/3.png",ln="imgs/project/12345678/banner.png",mn="imgs/project/zhenanminju/zhenanminju.jpg",dn="imgs/project/zhenanminju/banner.png",jn="imgs/project/yunpianjishuri/1.jpg",hn="imgs/project/yunpianjishuri/2.jpg",fn="imgs/project/yunpianjishuri/3.jpg",vn="imgs/project/yunpianjishuri/4.jpg",bn="imgs/project/yunpianjishuri/5.jpg",yn="imgs/project/yunpianjishuri/6.png",_n="imgs/project/yunpianjishuri/7.png",wn="imgs/project/yunpianjishuri/8.png",kn="imgs/project/yunpianjishuri/9.png",Cn="imgs/project/yunpianjishuri/banner.png",En="imgs/project/shuihuozhongguo/1.jpg",Tn="imgs/project/shuihuozhongguo/2.jpg",xn="imgs/project/shuihuozhongguo/3.jpg",An="imgs/project/shuihuozhongguo/4.jpg",Rn="imgs/project/shuihuozhongguo/5.jpg",Yn="imgs/project/shuihuozhongguo/banner.png",$n="imgs/ui/DCSHOES/1.png",On="imgs/ui/DCSHOES/banner.png",qn="imgs/ui/yunnuandongri/1.png",Sn="imgs/ui/yunnuandongri/2.jpg",zn="imgs/ui/yunnuandongri/3.png",Nn="imgs/ui/yunnuandongri/4.png",In="imgs/ui/yunnuandongri/5.png",Pn="imgs/ui/yunnuandongri/6.png",Dn="imgs/ui/yunnuandongri/7.gif",Un="imgs/ui/yunnuandongri/8.gif",Mn="imgs/ui/yunnuandongri/banner.png",Wn=[{id:1,title:"粉越⻄贡",designer:"Tsui.",date:"YEAR 2018",client:m,banner:ft,isNode:!0,imgs:[ut,lt,mt,dt,jt,ht],tag:["project","logo","package"]},{id:2,title:"中秋礼盒",designer:"Tsui.",date:"YEAR 2018",banner:H,client:g,isNode:!0,imgs:[P,D,U,M,W,B,L,J,V],tag:["package","project"]},{id:3,title:"年终盘点(SIMBOSS)",designer:"Tsui.",date:"YEAR 2019",banner:He,imgs:[Le],tag:["poster","project"]},{id:4,title:"企朋七周年",designer:"Tsui.",date:"YEAR 2019",client:"C4D的新尝试",banner:at,imgs:[it],tag:["poster"]},{id:5,title:"稿事计划",designer:"Tsui.",date:"YEAR 2018",banner:Me,imgs:[Ue,De],tag:["poster"]},{id:6,title:"奔跑吧，程序员",designer:"Tsui.",date:"YEAR 2018",banner:qt,imgs:[At,Rt,Yt,$t,Ot,kt,Ct,Et,Tt,xt],tag:["project","logo"]},{id:7,title:"福猪图",designer:"Tsui.",date:"YEAR 2019",banner:rt,imgs:[st],tag:["poster"]},{id:8,title:"年历",designer:"Tsui.",date:"YEAR 2018",banner:I,imgs:[z,N,S],tag:["package"]},{id:9,title:"果味仙境",designer:"Tsui.",date:"YEAR 2018",client:v,isNode:!0,banner:wt,imgs:[vt,bt,yt,_t],tag:["project","logo","package"]},{id:10,title:"撒椒",designer:"Tsui.",date:"YEAR 2018",banner:Jt,imgs:[Mt,Wt,Bt,Lt],tag:["project","logo","package"]}],Bn=[{id:11,title:"新年拜年",designer:"Tsui.",date:"YEAR 2019",banner:Pe,noMargin:!0,imgs:[Ce,Ee,Te,xe,Ae,Re,Ye,$e,Oe,qe,Se,ze,Ne,Ie],tag:["poster"]},{id:12,title:"双⼗⼀",designer:"Tsui.",date:"YEAR 2019",banner:ke,imgs:[ye,_e,we],tag:["poster"]},{id:13,title:"微信漫画",designer:"Tsui.",date:"YEAR 2019",bottom:A,bottomisNode:!0,banner:ot,imgs:[gt,pt,ct],tag:["poster"]},{id:14,title:"云暖冬⽇",designer:"Tsui.",date:"YEAR 2018",banner:Mn,imgs:[qn,Sn,zn,Nn,In,Pn,Dn,Un],tag:["UI","project"]},{id:15,title:"设计⻝物所",designer:"Tsui.",date:"YEAR 2018",client:"负责公众号的整体视觉形象设计及运营",banner:Gt,imgs:[Vt,Ht,Ft],tag:["project","logo"]},{id:16,title:"年礼贺卡",designer:"Tsui.",date:"YEAR 2019",banner:te,imgs:[F,G,K,Z,Q,X,ee],tag:["package"]},{id:17,title:"姚姚",designer:"Tsui.",date:"YEAR 2018",banner:gn,imgs:[an,sn,rn,on],tag:["project","logo","package"]},{id:18,title:"双十二",designer:"Tsui.",date:"YEAR 2018",banner:ae,imgs:[ie],tag:["poster"]},{id:19,title:"双旦",designer:"Tsui.",date:"YEAR 2018",banner:be,imgs:[he,fe,ve],tag:["poster"]},{id:20,title:"云片技术开放日",designer:"Tsui.",date:"YEAR 2018",client:"公司主办的技术分享沙龙，每年会在全国多地举办,\n负责分享会主视觉设计、活动推⼴及活动物料设计，同时负责会议现场摄影及推⼴视频制作等⼯作",imgs:[yn,_n,wn,kn,jn,hn,fn,vn,bn],banner:Cn,tag:["project","logo"]},{id:21,title:"冬至",designer:"Tsui.",date:"YEAR 2018",banner:ue,imgs:[ce],tag:["poster"]}],Ln=[{id:22,title:"放粽618",designer:"Tsui.",date:"YEAR 2018",banner:oe,imgs:[re],tag:["poster"]},{id:23,title:"315",designer:"Tsui.",date:"YEAR 2018",banner:nt,imgs:[Xe,et,tt],tag:["poster"]},{id:24,title:"炭舍",designer:"Tsui.",date:"YEAR 2018",banner:nn,imgs:[Kt,Zt,Qt,Xt,en,tn],tag:["project","logo","package"]},{id:25,title:"年终盘点(云片)",designer:"Tsui.",date:"YEAR 2019",banner:Fe,imgs:[Je],tag:["poster","project"]},{id:26,title:"年终盘点(维客)",designer:"Tsui.",date:"YEAR 2019",banner:Ge,imgs:[Ve],tag:["poster","project"]},{id:27,title:"五一",designer:"Tsui.",date:"YEAR 2018",banner:je,imgs:[le,me,de],tag:["poster"]},{id:28,title:"霍⾦逝世",designer:"Tsui.",date:"YEAR 2018",imgs:[ge],banner:pe,tag:["poster"]},{id:29,title:"校招",designer:"Tsui.",date:"YEAR 2019",imgs:[We,Be],tag:["poster"]},{id:30,title:"⽹易考拉",designer:"Tsui.",date:"YEAR 2019",imgs:[Ke],tag:["poster"]},{id:31,title:"群芳蒸宴",designer:"Tsui.",date:"YEAR 2018",banner:Ut,imgs:[St,zt,Nt,It,Pt,Dt],tag:["project","logo","package"]}],Jn=[{id:32,title:"1024",designer:"Tsui.",date:"YEAR 2018",imgs:[ne],tag:["poster"]},{id:33,title:"发现亚洲",designer:"Tsui.",date:"YEAR 2019",banner:Qe,imgs:[Ze],tag:["poster"]},{id:34,title:"世界电信日",designer:"Tsui.",date:"YEAR 2018",imgs:[se],tag:["poster"]},{id:35,title:"12345678910",designer:"Tsui.",date:"YEAR 2018",client:k,isNode:!0,banner:ln,imgs:[cn,pn,un],tag:["project","logo"]},{id:36,title:"浙南⼭区古⺠居",designer:"Tsui.",date:"YEAR 2018",banner:dn,imgs:[mn],tag:["project","logo"]},{id:37,title:"水祸中国",designer:"Tsui.",date:"YEAR 2018",imgs:[En,Tn,xn,An,Rn],banner:Yn,tag:["project"]},{id:38,title:"恩施土家族自治州建州30周年",designer:"Tsui.",date:"YEAR 2017",banner:$,imgs:[R,Y],tag:["logo"]},{id:39,title:"中国丝绸博物馆",designer:"Tsui.",date:"YEAR 2017",banner:q,imgs:[O],tag:["logo"]},{id:40,title:"DC shoes",designer:"Tsui.",date:"YEAR 2018",banner:On,imgs:[$n],tag:["UI"]}],Vn=[].concat(Wn,Bn,Ln,Jn);t["a"]=Vn},a665:function(e,t,n){"use strict";var i=n("eea1"),a=n.n(i);a.a},a743:function(e,t,n){},af16:function(e,t,n){"use strict";var i=n("9c50"),a=n.n(i);a.a},b30b:function(e,t,n){},b9ab:function(e,t,n){"use strict";var i=n("6e56"),a=n.n(i);a.a},cb3d:function(e,t,n){"use strict";var i=n("a743"),a=n.n(i);a.a},cf1c:function(e,t,n){e.exports=n.p+"img/loading.56c4c670.gif"},d567:function(e,t,n){},eea1:function(e,t,n){}});
//# sourceMappingURL=app.555205b4.js.map