(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{160:function(e,t,a){"use strict";a.r(t);a(168),a(165);var n=a(376),i=a(0),s=a.n(i),o=a(175),r=a(176),c=a(183),l=a(210),m=a(211),p=a(212);t.default=function(){var e=n.data.allMarkdownRemark.edges[0].node,t=e.html,a=e.frontmatter,i=a.name,u=a.link;return s.a.createElement(c.a,null,s.a.createElement(o.a,null),s.a.createElement(r.a,{name:i}),s.a.createElement(m.a,null,s.a.createElement(l.a,{link:u,name:i}),s.a.createElement(p.a,{html:t,name:i})))}},166:function(e,t,a){"use strict";a(184)("fixed",function(e){return function(){return e(this,"tt","","")}})},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(167),o=a.n(s),r=a(188),c=a.n(r);t.a=function(e){var t,a,n=e.color,s=void 0===n?"blue":n,r=e.onClick,l=void 0===r?function(){}:r,m=e.children,p=e.isDisabled,u=void 0!==p&&p,d=e.className,f=void 0===d?"":d,v=e.type,h=void 0===v?"button":v,b=e.isShadow,w=void 0!==b&&b,g=e.size,E=void 0===g?"small":g,y=e.href,x=void 0===y?"":y,k=c.a[s];return x?i.a.createElement("a",{className:o()(c.a.btn,k,c.a[E],f,(a={},a[c.a.shadow]=w,a)),onClick:l,href:x},m):i.a.createElement("button",{disabled:u,type:h,onClick:l,className:o()(c.a.btn,k,c.a[E],f,(t={},t[c.a.shadow]=w,t))},m)}},175:function(e,t,a){"use strict";var n=a(8),i=a.n(n),s=a(0),o=a.n(s),r=(a(166),a(167)),c=a.n(r),l=a(174),m=a(172),p=a(173),u=a(169),d=(a(168),a(165),a(185)),f=a(189),v=a.n(f),h=function(e){var t,a,n=e.isOpen,i=e.isFixed,s=Object(m.a)(),r=s.menuLinks,l=s.contact,p=i?["black"]:["white","black"];return o.a.createElement("div",{className:c()(v.a.wrap,(t={},t[v.a.open]=n,t),(a={},a[v.a.fixed]=i,a))},o.a.createElement("nav",{className:v.a.list},r&&r.map(function(e){return e&&e.name?e.link?o.a.createElement(d.a,{key:e.name,color:p,name:e.name,icon:String(e.icon),link:e.link}):o.a.createElement(d.a,{key:e.name,color:p,name:e.name,icon:String(e.icon)}):null}),o.a.createElement(u.a,{className:v.a.btn,href:"mailto:"+(l?l.email:"")},o.a.createElement("span",{className:v.a.btnText},"Apply"))))};h.defaultProps={isFixed:!1,isOpen:!1};var b=h,w=a(190),g=a.n(w),E=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.closeMenu=function(){var e=t.state.isOpen,a=window.innerWidth||0;0!==a&&a<1024&&e&&t.setState({isOpen:!1})},t.changeVisibilityMenu=function(){t.setState(function(e){return{isOpen:!e.isOpen}})},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.closeMenu)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.closeMenu)},a.render=function(){var e,t,a,n=this.state.isOpen,i=this.props.isBlack;return o.a.createElement("div",{className:c()(g.a.wrap,(e={},e[g.a.white]=!i,e),(t={},t[g.a.black]=i,t))},o.a.createElement("div",{role:"button",tabIndex:0,className:c()(g.a.wrapHamburger,(a={},a[g.a.open]=n,a)),onClick:this.changeVisibilityMenu,onKeyDown:this.changeVisibilityMenu},o.a.createElement("div",{className:g.a.inner})),o.a.createElement(b,{isOpen:n}))},t}(s.Component),y=a(191),x=a.n(y),k=function(e){var t,a=e.isFixed,n=Object(m.a)().contact;return o.a.createElement("div",{className:c()((t={},t[x.a.fixed]=a,t))},o.a.createElement("div",{className:x.a.wrap},o.a.createElement("div",{className:x.a.leftBox},o.a.createElement(l.a,{to:"/",className:x.a.wrapLogo},o.a.createElement(p.a,{name:"optimax"})),o.a.createElement(b,{isFixed:a})),o.a.createElement("div",{className:x.a.rightBox},o.a.createElement("div",{className:x.a.wrapLanguage},o.a.createElement(p.a,{name:"language"})),o.a.createElement(u.a,{className:x.a.btn,color:a?"blue":"white",href:"mailto:"+(n?n.email:"")},o.a.createElement("span",{className:x.a.btnText},"Apply"))),o.a.createElement(E,{isBlack:a})))},N=a(192),F=a.n(N),R=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={topRect:0,isFixed:!1},t.wrapRef=o.a.createRef(),t.calcHeight=function(){var e=t.wrapRef.current;t.setState({topRect:e?e.getBoundingClientRect().top+window.pageYOffset:0},t.onSticky)},t.onSticky=function(){var e=t.state.topRect,a=t.props,n=a.topOffset,i=a.isFixed,s=window.pageYOffset,o=e+n;s<=o?(t.setState({isFixed:!1}),i(!1)):s>=o&&(t.setState({isFixed:!0}),i(!0))},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.onSticky)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onSticky)},a.render=function(){var e,t=this.props.children,a=this.state.isFixed;return o.a.createElement("div",{className:c()(F.a.wrap,(e={},e[F.a.fixed]=a,e)),ref:this.wrapRef},t)},t}(s.Component);R.defaultProps={topOffset:0};var O=R,S=a(193),B=a.n(S),M=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isFixed:!1},t.isFixed=function(e){t.setState({isFixed:e})},t}return i()(t,e),t.prototype.render=function(){var e=this.state.isFixed;return this.props.isHome?o.a.createElement(O,{isFixed:this.isFixed},o.a.createElement(k,{isFixed:e})):o.a.createElement("div",{className:B.a.wrap},o.a.createElement("div",{className:B.a.sticky},o.a.createElement(k,{isFixed:!0})))},t}(s.Component);M.defaultProps={isHome:!1};t.a=M},176:function(e,t,a){"use strict";a(165);var n=a(0),i=a.n(n),s=a(178),o=a.n(s),r=a(179),c=a.n(r),l=a(180),m=a.n(l),p=a(181),u=a.n(p),d=a(199),f=a.n(d),v={glassesusa:o.a,ottica:c.a,uvp:m.a,job:u.a};t.a=function(e){var t=e.name,a=e.children,n=e.img||v[t];return void 0===n?(console.error("Requested icon does not exist",t),null):i.a.createElement("div",{className:f.a.wrap},i.a.createElement("div",{className:f.a.inner},a&&i.a.createElement("div",{className:f.a.content},a),i.a.createElement("div",{className:f.a.wrapImg},i.a.createElement("img",{className:f.a.img,src:n,alt:""}))))}},178:function(e,t,a){e.exports=a.p+"static/glassesusaD-df87da52bd1aac9956ef0bb205d92854.jpg"},179:function(e,t,a){e.exports=a.p+"static/otticaD-db12817567b79be72a8656a8a56d46b4.jpg"},180:function(e,t,a){e.exports=a.p+"static/uvpD-9bcdf3f21886040ca3103b6c6f65abc3.jpg"},181:function(e,t,a){e.exports=a.p+"static/job-3b2255e609e68a0b82c2cb7d9e303f4f.jpg"},210:function(e,t,a){"use strict";a(165),a(168);var n=a(0),i=a.n(n),s=a(173),o=a(250),r=a.n(o);t.a=function(e){var t=e.link,a=e.name;return i.a.createElement("div",{className:r.a.wrap},i.a.createElement("div",{className:r.a.wrapLogo},i.a.createElement(s.a,{name:a})),i.a.createElement("a",{className:r.a.link,href:t,title:a},"View Website >"))}},211:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(251),o=a.n(s);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:o.a.wrap},t)}},212:function(e,t,a){"use strict";a(165);var n=a(0),i=a.n(n),s=a(252),o=a.n(s),r=a(213),c=a.n(r),l=a(214),m=a.n(l),p=a(215),u=a.n(p),d=a(216),f=a.n(d),v=a(217),h=a.n(v),b=a(218),w=a.n(b),g={glassesusaBottom:c.a,glassesusaRight:m.a,otticaBottom:u.a,otticaRight:f.a,uvpBottom:h.a,uvpRight:w.a};t.a=function(e){var t=e.html,a=e.name;return i.a.createElement("div",null,i.a.createElement("div",{className:o.a.wrapContent},i.a.createElement("div",{className:o.a.content,dangerouslySetInnerHTML:{__html:t}}),i.a.createElement("img",{className:o.a.img,src:g[a+"Right"],alt:a})),i.a.createElement("img",{className:o.a.notebook,src:g[a+"Bottom"],alt:""}))}},213:function(e,t,a){e.exports=a.p+"static/glassesusaBottom-4fc4631f25a5292250eb66d66167fce5.png"},214:function(e,t,a){e.exports=a.p+"static/glassesusaRight-2580645eab710090f68e1ff331f1d276.png"},215:function(e,t,a){e.exports=a.p+"static/otticaBottom-f9ea3b140e148cb78f48a99430be7ac8.png"},216:function(e,t,a){e.exports=a.p+"static/otticaRight-222aa7f9799ff43b15b4de20c3befb00.png"},217:function(e,t,a){e.exports=a.p+"static/uvpBottom-6435d7e958d9004eb5cfd645aa908aaa.png"},218:function(e,t,a){e.exports=a.p+"static/uvpRight-8c738fcd9ff07d6d59fd4b0421b6a71d.png"},376:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"Founded in 2016, United Vision Plan seeks to\nrevolutionize the vision benefit plan industry by providing\ncompanies with the most affordable…",id:"81530c58-b558-5847-81fe-e84b7e6140f1",frontmatter:{name:"uvp",link:"https://www.uvp.com/"},html:"<p>Founded in 2016, United Vision Plan seeks to\nrevolutionize the vision benefit plan industry by providing\ncompanies with the most affordable vision plans for their\nemployees. UVP brings a fresh and clear digital approach to\nan industry rife with fine print and unexpected, out-of-pocket\nexpenses. The company offers employees the opportunity\nto claim their eyewear from the comfort of their keyboard,\nensuring that their eyewear is always up to date\nand accurate.</p>\n<blockquote>\n<p>Vision benefit plans for the new economy.</p>\n</blockquote>\n<p>The company addresses the workforce by providing\nemployees with high quality prescription eyewear from\na variety of over 4000 frames, setting it apart from most\nother companies in terms of variety, quality and cost.</p>"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-uvp-index-tsx-75cab2fa3d7c6e44224e.js.map