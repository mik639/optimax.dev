(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(e,t,a){"use strict";a(184)("fixed",function(e){return function(){return e(this,"tt","","")}})},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(167),o=a.n(r),s=a(188),c=a.n(s);t.a=function(e){var t,a,n=e.color,r=void 0===n?"blue":n,s=e.onClick,l=void 0===s?function(){}:s,p=e.children,m=e.isDisabled,d=void 0!==m&&m,f=e.className,u=void 0===f?"":f,h=e.type,g=void 0===h?"button":h,b=e.isShadow,v=void 0!==b&&b,E=e.size,M=void 0===E?"small":E,w=e.href,N=void 0===w?"":w,y=c.a[r];return N?i.a.createElement("a",{className:o()(c.a.btn,y,c.a[M],u,(a={},a[c.a.shadow]=v,a)),onClick:l,href:N},p):i.a.createElement("button",{disabled:d,type:g,onClick:l,className:o()(c.a.btn,y,c.a[M],u,(t={},t[c.a.shadow]=v,t))},p)}},175:function(e,t,a){"use strict";var n=a(8),i=a.n(n),r=a(0),o=a.n(r),s=(a(166),a(167)),c=a.n(s),l=a(174),p=a(172),m=a(173),d=a(169),f=(a(168),a(165),a(185)),u=a(189),h=a.n(u),g=function(e){var t,a,n=e.isOpen,i=e.isFixed,r=Object(p.a)(),s=r.menuLinks,l=r.contact,m=i?["black"]:["white","black"];return o.a.createElement("div",{className:c()(h.a.wrap,(t={},t[h.a.open]=n,t),(a={},a[h.a.fixed]=i,a))},o.a.createElement("nav",{className:h.a.list},s&&s.map(function(e){return e&&e.name?e.link?o.a.createElement(f.a,{key:e.name,color:m,name:e.name,icon:String(e.icon),link:e.link}):o.a.createElement(f.a,{key:e.name,color:m,name:e.name,icon:String(e.icon)}):null}),o.a.createElement(d.a,{className:h.a.btn,size:"big",href:"mailto:"+(l?l.email:"")},o.a.createElement("span",{className:h.a.btnText},"Apply"))))};g.defaultProps={isFixed:!1,isOpen:!1};var b=g,v=a(190),E=a.n(v),M=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1},t.closeMenu=function(){var e=t.state.isOpen,a=window.innerWidth||0;0!==a&&a<1024&&e&&t.setState({isOpen:!1})},t.changeVisibilityMenu=function(){t.setState(function(e){return{isOpen:!e.isOpen}})},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.closeMenu)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.closeMenu)},a.render=function(){var e,t,a,n=this.state.isOpen,i=this.props.isBlack;return o.a.createElement("div",{className:c()(E.a.wrap,(e={},e[E.a.white]=!i,e),(t={},t[E.a.black]=i,t))},o.a.createElement("div",{role:"button",tabIndex:0,className:c()(E.a.wrapHamburger,(a={},a[E.a.open]=n,a)),onClick:this.changeVisibilityMenu,onKeyDown:this.changeVisibilityMenu},o.a.createElement("div",{className:E.a.inner})),o.a.createElement(b,{isOpen:n}),n&&o.a.createElement("div",{className:E.a.overlay}))},t}(r.Component),w=a(191),N=a.n(w),y=function(e){var t,a=e.isFixed,n=Object(p.a)().contact;return o.a.createElement("div",{className:c()((t={},t[N.a.fixed]=a,t))},o.a.createElement("div",{className:N.a.wrap},o.a.createElement("div",{className:N.a.leftBox},o.a.createElement(l.a,{to:"/",className:N.a.wrapLogo},o.a.createElement(m.a,{name:"optimax"})),o.a.createElement(b,{isFixed:a})),o.a.createElement("div",{className:N.a.rightBox},o.a.createElement("div",{className:N.a.wrapLanguage},o.a.createElement(m.a,{name:"language"})),o.a.createElement(d.a,{className:N.a.btn,color:a?"blue":"white",href:"mailto:"+(n?n.email:"")},o.a.createElement("span",{className:N.a.btnText},"Apply"))),o.a.createElement(M,{isBlack:a})))},S=a(192),x=a.n(S),k=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={topRect:0,isFixed:!1},t.wrapRef=o.a.createRef(),t.calcHeight=function(){var e=t.wrapRef.current;t.setState({topRect:e?e.getBoundingClientRect().top+window.pageYOffset:0},t.onSticky)},t.onSticky=function(){var e=t.state.topRect,a=t.props,n=a.topOffset,i=a.isFixed,r=window.pageYOffset,o=e+n;r<=o?(t.setState({isFixed:!1}),i(!1)):r>=o&&(t.setState({isFixed:!0}),i(!0))},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.onSticky)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.onSticky)},a.render=function(){var e,t=this.props.children,a=this.state.isFixed;return o.a.createElement("div",{className:c()(x.a.wrap,(e={},e[x.a.fixed]=a,e)),ref:this.wrapRef},t)},t}(r.Component);k.defaultProps={topOffset:0};var F=k,j=a(193),O=a.n(j),B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isFixed:!1},t.isFixed=function(e){t.setState({isFixed:e})},t}return i()(t,e),t.prototype.render=function(){var e=this.state.isFixed;return this.props.isHome?o.a.createElement(F,{isFixed:this.isFixed},o.a.createElement(y,{isFixed:e})):o.a.createElement("div",{className:O.a.wrap},o.a.createElement("div",{className:O.a.sticky},o.a.createElement(y,{isFixed:!0})))},t}(r.Component);B.defaultProps={isHome:!1};t.a=B},176:function(e,t,a){"use strict";a(165);var n=a(0),i=a.n(n),r=a(178),o=a.n(r),s=a(179),c=a.n(s),l=a(180),p=a.n(l),m=a(181),d=a.n(m),f=a(199),u=a.n(f),h={glassesusa:o.a,ottica:c.a,uvp:p.a,job:d.a};t.a=function(e){var t=e.name,a=e.children,n=e.img||h[t];return void 0===n?(console.error("Requested icon does not exist",t),null):i.a.createElement("div",{className:u.a.wrap},i.a.createElement("div",{className:u.a.inner},a&&i.a.createElement("div",{className:u.a.content},a),i.a.createElement("div",{className:u.a.wrapImg},i.a.createElement("img",{className:u.a.img,src:n,alt:""}))))}},178:function(e,t,a){e.exports=a.p+"static/glassesusaD-df87da52bd1aac9956ef0bb205d92854.jpg"},179:function(e,t,a){e.exports=a.p+"static/otticaD-db12817567b79be72a8656a8a56d46b4.jpg"},180:function(e,t,a){e.exports=a.p+"static/uvpD-9bcdf3f21886040ca3103b6c6f65abc3.jpg"},181:function(e,t,a){e.exports=a.p+"static/job-3b2255e609e68a0b82c2cb7d9e303f4f.jpg"},198:function(e,t,a){"use strict";var n=function(){return null};n.defaultProps={lang:"en",meta:[],keywords:[]},t.a=n},249:function(e,t,a){"use strict";a(96);var n=a(0),i=a.n(n),r=a(167),o=a.n(r),s=a(345),c=a.n(s),l=function(e){var t=e.tags,a=e.size,r=void 0===a?"small":a;if(!t||t&&0===t.length)return null;var s=r&&c.a[r]?c.a[r]:"",l=""===t?[]:t.split(",");return i.a.createElement(n.Fragment,null,l.map(function(e){return i.a.createElement("span",{className:o()(c.a.tag,s),key:e},"#",e)}))};l.defaultProps={size:"small"},t.a=l},271:function(e,t,a){"use strict";var n=a(347);t.a=function(){return n.data.allMarkdownRemark.edges}},347:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом…",id:"c0f0e894-c8a2-5359-abef-917d28743261",frontmatter:{title:"Nintendo унизила Sony на консольном рынке",path:"/blog/article1",image:"http://mmorpg.su/crop/1200/530/media/publication/fa/b1/fab150b05ad746cdaafe0da82124ad9d.jpg",author:"Name 1",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом девайсе – Nintendo Switch Lite – ходили давно. И теперь компания",tags:"CSS,HTML"},html:"<p>А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом девайсе – Nintendo Switch Lite – ходили давно. И теперь компания просто их подтвердила. Как мы и предполагали, консоль будет полностью портативной. То есть подключить ее к телевизору или док-станции вы не сможете. Устройство получит экран размером в 5.5 дюймов, а также популярный элемент управления – крестовину, которой нет у обычной Switch. А вот функции HD-вибрации у Nintendo Switch Lite не будет. Зато в компании планируют продлить срок работки девайса без подзарядки примерно на час. И обещают порадовать геймеров не слишком высокой ценой – в районе 13 тысяч рублей. Планируется, что на новой консоли можно будет запустить большинство игр, в которых поддерживается портативный режим на Switch. В любом случае, если у Nintendo все получится, она просто унизит Sony. Ведь Sony недавно заявляла, что у портативных консолей нет будущего. И если запуск Switch Lite окажется успешным, Nintendo просто утрет нос конкуренту. А вот чем закончится вся эта история, узнаете прямо вот тут.</p>"}},{node:{excerpt:"Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su. Оно называется…",id:"3bb2ea4a-d302-5947-b8c1-d1973ee65549",frontmatter:{title:"Крутой шутер про войну с американцами стал бесплатным",path:"/blog/article3",image:"http://mmorpg.su/crop/1200/530/media/publication/7e/86/7e86ee1c273947789f7bde826ffc93ec.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su.",tags:"CSS"},html:"<p>Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su. Оно называется Green Army Men и превратило брутальных героев игрушечных солдатиков. Но самое интересное, что разработчики решили отпраздновать релиз DLC. И сделали это самым приятным для геймеров способом, устроив неделю бесплатного доступа. Так что до 16 июля погонять в Rising Storm 2: Vietnam можно на халяву. Для этого надо всего лишь зайти в Steam и скачать клиент. Судя по отзывам геймеров, шутер действительно заслуживает внимания. Многие пишут, что разработчикам удалось отлично передать дух войны вьетнамцев с американцами. И что геймплей получился ураганным и реалистичным. Хотя некоторым игрокам в Rising Storm 2: Vietnam не нравится баланс. Впрочем, в реальной Вьетнамской войне его тоже не было, но американцы все равно проиграли. В общем, качайте, играйте и не забывайте заглядывать сюда, чтобы узнать о других интересных акциях.</p>"}},{node:{excerpt:"Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG немало…",id:"b20d282e-3ff3-587e-bf51-b61ab2e1e8b0",frontmatter:{title:"Фанаты Neverwinter готовятся бунтовать",path:"/blog/article5",image:"http://mmorpg.su/crop/1200/530/media/publication/53/71/53716c613fde4f4da5a075bf534bbdfc.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG",tags:"CSS,JS"},html:"<p>Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG немало нового контента. В том числе еще одну играбельную расу – гит. Сюжет будущего DLC расскажет о том, как эти существа подняли бунт против иллитидов и начали войну с ними. Впрочем, нас ждут не только обычные приключения, но и рейд на десятерых с очень крутым боссом. Само собой, без новых карт в Neverwinter тоже не обойдется. Некоторые из них весьма необычные, например, загадочная база гит внутри астероида. Кроме того, студия Cryptic обещает переделать часть старых локаций и добавит кампанию «Сказки» с подземельями из прошлого. А для любителей PvP команда разработчиков подготовит новую карту. Релиз дополнения «Восстание» на ПК запланирован на 13 августа, а на консолях оно появится чуть позже. И не забывайте заглядывать на наш сайт, чтобы узнать, что еще творится в Neverwinter и других онлайн-играх.</p>"}},{node:{excerpt:"По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76. Как сказал глава студии Hello…",id:"65b10d70-4c5a-5f5b-af2c-9d778aa0f82c",frontmatter:{title:"Авторам Anthem и Fallout 76 предложили заткнуться",path:"/blog/article4",image:"http://mmorpg.su/crop/1200/530/media/publication/b9/f3/b9f30f9805f84fbe9d24e2e5098b68d5.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76",tags:"CSS"},html:"<p>По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76. Как сказал глава студии Hello Games, Шон Мюррей, если игра проваливается, то разработчикам лучше всего заткнуться. Впрочем, Шон не хотел обидеть коллег, а просто делился с ними своим опытом. Ведь когда No Man’s Sky только вышла, коммьюнити было в ярости. Потому что разработчики не выполнили многие обещания, и геймеры массово требовали вернуть деньги. Но студия не сдалась – она сжала зубы и молча переделывала игру. Причем в это время разработчики вообще не общались с прессой, чтобы не давать новых обещаний. И даже три месяца не разговаривали с коммьюнити, пока не сделали какие-то новые фишки. В итоге No Man’s Sky изменилась до неузнаваемости. В Steam у нее сейчас 88% положительных недавних обзоров. А фанаты даже поставили напротив окон студии билборд с благодарностями. Поэтому Мюррей и советует авторам Anthem и Fallout 76 не врать про крутость своих игр, а спокойно дорабатывать их. Пока из провальных MMO не получатся настоящие хиты. А вот как на это отреагируют коллеги Шона, можно будет узнать по ссылке.</p>"}},{node:{excerpt:"Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру, где бегают мультяшные…",id:"348dabec-1566-5fa2-877c-c53f0c89d71b",frontmatter:{title:"Стример Fortnite в прямом эфире надругался над женой и поплатился",path:"/blog/article6",image:"http://mmorpg.su/crop/1200/530/media/publication/b1/ec/b1ecec6998bc4b58b30bee083dd34f5a.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру",tags:"JS"},html:"<p>Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру, где бегают мультяшные персонажи, машут киркой, строят дома, убивают друг друга, танцуя после этого довольно странные танцы, сообщает известный портал mmorpg.su. Но особенное подозрение вызывают те, кто организовывают прямые эфиры по Fortnite на Twitch. Достаточно посмотреть на самого известного стримера Fortnite Ninja, чтобы понять, что у парня не все дома. Сразу видно, что он болен какой-то психологической болезнью, ведь нормальный русский человек никогда в жизни не станет красить волосы в зеленый цвет, а также нести какую-то чушь в прямом эфире, играя в мультяшную игру. Впрочем, есть еще одно объяснение. Ведь Ninja это американец, а не русский человек. А так как Америка постепенно, но верно, катится в пропасть, то и люди там психически не все здоровые. В США даже президент вызывает вопросы у психологов, что уж говорить о простых геймерах. Это, кстати, еще раз подтверждает то, что хорошо жить в России, где живут нормальные геймеры, хорошие люди, которые не рисуют себе зеленые волосы. А вот пришла новость о том, что еще один стример Fortnite Люк Мандей, известный под ником MrDeadMoth, творил в прямом эфире ужасные вещи. Играя, заметим, в Fortnite. Этот похожий на рыжего гея австралиец избивал свою жену, а однажды даже надругался над ней в прямом эфире. Дело было так: геймер стримил Fortnite, когда жена позвала его ужинать. Он ее послал куда подальше, а она стала настаивать. Взбешенный стример набросился на жену, стал буквально избивать ее. Зрители не видели этого ужаса в кадре, так как стример закрыл камеру, но слышали вопли жены, удары и стоны. Кто-то вызвал полицию, которая и забрала Люка Мандея. Теперь же на суде он признал свою вину, однако отметил, что колотить жену начал только после того, как она стала кидать в него различные предметы. Но, кажется, это заявление уже Люку не поможет, его упекут надолго. Радует, что с российскими геймерами таких историй не случается. Что не удивительно, ведь мы живем в действительно прекрасной России, где править умный президент Путин, умело создающий правильную, здоровую и комфортную атмосферу во всей стране. А в США пусть дальше волосы красят и жен колотят.</p>"}},{node:{excerpt:"Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский…",id:"aa1a5ae4-bf92-5c26-9c92-c119f662f10b",frontmatter:{title:"Геймерам неожиданно показали Mass Effect 4",path:"/blog/article7",image:"http://mmorpg.su/crop/1200/530/media/publication/31/39/31399c31898e476b813398dc0b34af64.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare",tags:"JS"},html:"<p>Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский портал mmorpg.su. Однако успех у геймеров нашли только Mass Effect, Mass Effect 2 и Mass Effect 3. Причем уже Mass Effect 3 довольно сильно расстроила геймеров, так как там был странный сюжет, непонятный финал, унылая графика. После этого геймеры ждали выхода Mass Effect 4, но вместо этого BioWare сделал Mass Effect: Andromeda, которая ввергла геймеров в шок. В этой игре было плохо всё. Несуразный сюжет, никчемная графика, совершенно убогая боевая система, а весь геймплей заставлял рыдать всех. После этого BioWare уже даже не упоминала Mass Effect 4, хотя все геймеры с нетерпением ждали новой части Mass Effect. И вот когда казалось, что надежда уже потеряна, а Mass Effect 4 можно не ждать, геймерам вдруг продемонстрировали долгожданную Mass Effect 4. К сожалению, сделали это не BioWare, и даже не Electronic Arts. Новую игру показали народные умельцы, которые создали очень крутую модификацию для Mass Effect: Andromeda, которая добавляет в игру вид от первого лица. И это именно то, что так ждали геймеры, ведь после установки этого мода игра действительно становится той Mass Effect 4, которую ждал каждый геймер и фанат игр от BioWare. Авторы мода проделали действительно титаническую работу, ведь вид от первого лица позволяет взглянуть на старую игру по-новому. Настолько, что складывается ощущение, что играешь в Mass Effect 4. Мир выглядит совершенно по-иному, сюжет играет новыми красками, а боевая система обретает невиданную ранее глубину. Мы напомним, что сюжет в играх BioWare всегда на первом месте, а благодаря автору модификации, все сюжетные моменты можно видеть прямо из глаз героя, что сильно меняет игру, добавляет погружения, а известные события становится совершенно другими. Конечно, боевая система также получилась очень увлекательная. Унылая беготня со стрельбой ушли на всегда, а сражения теперь радуют, в мир реально погружаешься. Нет сомнения, что все геймеры, наконец, получили ту самую Mass Effect 4, которую так долго ждали, да еще и бесплатно.</p>"}},{node:{excerpt:"Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский…",id:"d6541898-9f8d-5569-b71c-2ab1f026b989",frontmatter:{title:"Геймерам неожиданно показали Mass Effect 4",path:"/blog/article8",image:"http://mmorpg.su/crop/1200/530/media/publication/31/39/31399c31898e476b813398dc0b34af64.jpg",author:"http://mmorpg.su",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare",tags:"JS"},html:"<p>Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский портал mmorpg.su. Однако успех у геймеров нашли только Mass Effect, Mass Effect 2 и Mass Effect 3. Причем уже Mass Effect 3 довольно сильно расстроила геймеров, так как там был странный сюжет, непонятный финал, унылая графика. После этого геймеры ждали выхода Mass Effect 4, но вместо этого BioWare сделал Mass Effect: Andromeda, которая ввергла геймеров в шок. В этой игре было плохо всё. Несуразный сюжет, никчемная графика, совершенно убогая боевая система, а весь геймплей заставлял рыдать всех. После этого BioWare уже даже не упоминала Mass Effect 4, хотя все геймеры с нетерпением ждали новой части Mass Effect. И вот когда казалось, что надежда уже потеряна, а Mass Effect 4 можно не ждать, геймерам вдруг продемонстрировали долгожданную Mass Effect 4. К сожалению, сделали это не BioWare, и даже не Electronic Arts. Новую игру показали народные умельцы, которые создали очень крутую модификацию для Mass Effect: Andromeda, которая добавляет в игру вид от первого лица. И это именно то, что так ждали геймеры, ведь после установки этого мода игра действительно становится той Mass Effect 4, которую ждал каждый геймер и фанат игр от BioWare. Авторы мода проделали действительно титаническую работу, ведь вид от первого лица позволяет взглянуть на старую игру по-новому. Настолько, что складывается ощущение, что играешь в Mass Effect 4. Мир выглядит совершенно по-иному, сюжет играет новыми красками, а боевая система обретает невиданную ранее глубину. Мы напомним, что сюжет в играх BioWare всегда на первом месте, а благодаря автору модификации, все сюжетные моменты можно видеть прямо из глаз героя, что сильно меняет игру, добавляет погружения, а известные события становится совершенно другими. Конечно, боевая система также получилась очень увлекательная. Унылая беготня со стрельбой ушли на всегда, а сражения теперь радуют, в мир реально погружаешься. Нет сомнения, что все геймеры, наконец, получили ту самую Mass Effect 4, которую так долго ждали, да еще и бесплатно.</p>"}},{node:{excerpt:"1. Save Up to 70% Off RetailLeading online stores cut out the middleman so you pay less.Если вы хотите жить в стране с нормальными людьми…",id:"824fe23c-b2f7-5111-b748-f6e4681ed47c",frontmatter:{title:"Объявили новых супергероев Marvel и взбесили зрителей",path:"/blog/article2",image:"http://mmorpg.su/crop/1200/530/media/publication/5c/cf/5ccf2799f23d4ee4831d3d4d666a6ca5.jpg",author:"Gal Galov",avatar:"http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg",shortDescription:"Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su.",tags:"CSS"},html:'<h2>1. Save Up to 70% Off Retail</h2>\n<h3>Leading online stores cut out the middleman so you pay less.</h3>\n<p>Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su. Сегодня мир игр и кино захвачен меньшинствами разной степени бешенства. </p>\n<p><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="alt text" title="Logo Title Text 1"></p>\n<p>С одной стороны лезут феминистки, с другой наседают геи, откуда-то лезут лесбиянки и негры. Все они считают, что обязаны быть представлены в каждом произведении. Поэтому можете забыть счастливое время, когда супергерои были нормальные. В новом цикле фильмом по комиксам <a href="https://www.google.com">Marvel</a> Marvel будут добавлены различные новые персонажи, а главное место отведут супергероям геям. Об этом открыто заявляет глава Marvel Кевин Файги. По его словам, все герои Marvel должны быть нетрадиционной сексуальной ориентации. Ему вторить и исполнитель роли Человека-Паука в фильме Человек-Паук Возвращение домой Том Холланд. По словам этого гееподобного парня, он не против того, чтобы Человек-Паук в новых фильмах стал глиномесом. Мол, мир не такой простой, как обычный белый парень. Поэтому гей Человек-Паук очень хорошо впишется в перезапуск фильмов Marvel. Хотя при этом Том Холланд говорит, что не в курсе того, точно ли сделают Человека-паука геем в будущем, но не исключает такого варианта. По словам актера, он знает многое о будущем вселенной Marvel, будут добавлены многочисленные новые герои, и точно известно, что они будут представлять различные меньшинства. Наверняка будет боевая феминистка, хороший негр, гей Человек-Паук, а также прочие представители зоопарка. Что важно, эти новые герои не очень-то и нужны публике. Их добавляют именно потому, что меньшинства, будучи в меньшинстве, создают столько шума и поднимают такую вонь, что создателям игр и фильмов не остается ничего иного, как напихать представителей в своих произведения, лишь бы меньшинства не затаскали по судам. Однако, нормальным людям смотреть подобный срам в кино уже даже будет как-то не то, что стыдно, а даже просто неприятно.</p>\n<p><a href="https://www.google.com">I\'m an inline-style link</a></p>\n<blockquote>\n<p>“Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote.”</p>\n</blockquote>\n<ol>\n<li>First ordered list item</li>\n<li>Another item\n⋅⋅* Unordered sub-list. </li>\n<li>Actual numbers don\'t matter, just that it\'s a number\n⋅⋅1. Ordered sub-list</li>\n<li>And another item.</li>\n</ol>\n<p>⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we\'ll use three here to also align the raw Markdown).</p>\n<p>⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p>\n<ul>\n<li>Unordered list can use asterisks</li>\n<li>Or minuses</li>\n<li>Or pluses</li>\n</ul>\n<p>Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su. Сегодня мир игр и кино захвачен меньшинствами разной степени бешенства. С одной стороны лезут феминистки, с другой наседают геи, откуда-то лезут лесбиянки и негры. Все они считают, что обязаны быть представлены в каждом произведении. Поэтому можете забыть счастливое время, когда супергерои были нормальные. В новом цикле фильмом по комиксам Marvel будут добавлены различные новые персонажи, а главное место отведут супергероям геям. Об этом открыто заявляет глава Marvel Кевин Файги. По его словам, все герои Marvel должны быть нетрадиционной сексуальной ориентации. Ему вторить и исполнитель роли Человека-Паука в фильме Человек-Паук Возвращение домой Том Холланд. По словам этого гееподобного парня, он не против того, чтобы Человек-Паук в новых фильмах стал глиномесом. Мол, мир не такой простой, как обычный белый парень. Поэтому гей Человек-Паук очень хорошо впишется в перезапуск фильмов Marvel. Хотя при этом Том Холланд говорит, что не в курсе того, точно ли сделают Человека-паука геем в будущем, но не исключает такого варианта. По словам актера, он знает многое о будущем вселенной Marvel, будут добавлены многочисленные новые герои, и точно известно, что они будут представлять различные меньшинства. Наверняка будет боевая феминистка, хороший негр, гей Человек-Паук, а также прочие представители зоопарка. Что важно, эти новые герои не очень-то и нужны публике. Их добавляют именно потому, что меньшинства, будучи в меньшинстве, создают столько шума и поднимают такую вонь, что создателям игр и фильмов не остается ничего иного, как напихать представителей в своих произведения, лишь бы меньшинства не затаскали по судам. Однако, нормальным людям смотреть подобный срам в кино уже даже будет как-то не то, что стыдно, а даже просто неприятно.</p>'}}]}}}}}]);
//# sourceMappingURL=3-f957360f0c9241364ed4.js.map