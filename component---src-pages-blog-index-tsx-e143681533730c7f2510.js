;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    164(e, a, t) {
      t.r(a)
      const i = t(0)
      const n = t.n(i)
      const r = t(193)
      const s = t(175)
      const o = t(176)
      const c = t(184)
      const A = t(255)
      const l = t(256)
      const p = t(359)
      const m = t.n(p)
      const f = function() {
        const e = Object(l.a)()
        return n.a.createElement(
          'div',
          { className: m.a.wrap },
          e.map(function(e) {
            return n.a.createElement(A.a, { key: e.node.frontmatter.path, item: e.node.frontmatter })
          })
        )
      }
      a.default = function() {
        return n.a.createElement(
          c.a,
          null,
          n.a.createElement(r.a, { title: 'Blog' }),
          n.a.createElement(s.a, null),
          n.a.createElement(o.a, { name: 'job' }),
          n.a.createElement(f, null)
        )
      }
    },
    171(e, a, t) {
      t(39)
      const i = t(95)
      const n = t.n(i)
      const r = t(8)
      const s = t.n(r)
      const o = t(0)
      const c = t.n(o)
      const A = t(166)
      const l = t.n(A)
      const p = t(185)
      const m = t.n(p)
      const f = (function(e) {
        function a() {
          return e.apply(this, arguments) || this
        }
        return (
          s()(a, e),
          (a.prototype.render = function() {
            let e
            let a
            const t = this.props
            const i = t.color
            const r = t.onClick
            const s = t.children
            const o = t.isDisabled
            const A = t.className
            const p = t.type
            const f = t.isShadow
            const d = t.href
            const g = n()(t, ['color', 'onClick', 'children', 'isDisabled', 'className', 'type', 'isShadow', 'href'])
            const u = m.a[i]
            return d
              ? c.a.createElement(
                  'a',
                  Object.assign({ className: l()(m.a.btn, u, A, ((a = {}), (a[m.a.shadow] = f), a)), onClick: r, href: d }, g),
                  s
                )
              : c.a.createElement(
                  'button',
                  Object.assign({ disabled: o, onClick: r, type: p, className: l()(m.a.btn, u, A, ((e = {}), (e[m.a.shadow] = f), e)) }, g),
                  s
                )
          }),
          a
        )
      })(o.Component)
      ;(f.defaultProps = { color: 'blue', type: 'button', className: '', isDisabled: !1, isShadow: !1, href: '' }), (a.a = f)
    },
    175(e, a, t) {
      const i = t(8)
      const n = t.n(i)
      const r = t(0)
      const s = t.n(r)
      const o = (t(169), t(166))
      const c = t.n(o)
      const A = t(174)
      const l = t(172)
      const p = t(173)
      const m = t(171)
      const f = (t(165), t(170), t(182))
      const d = t(186)
      const g = t.n(d)
      const u = function(e) {
        let a
        let t
        const i = e.isOpen
        const n = e.isFixed
        const r = Object(l.a)()
        const o = r.menuLinks
        const A = r.contact
        const p = n ? ['black'] : ['white', 'black']
        return s.a.createElement(
          'div',
          { className: c()(g.a.wrap, ((a = {}), (a[g.a.open] = i), a), ((t = {}), (t[g.a.fixed] = n), t)) },
          s.a.createElement(
            'nav',
            { className: g.a.list },
            o.map(function(e) {
              return e.link
                ? s.a.createElement(f.a, { key: e.name, color: p, name: e.name, icon: e.icon, link: e.link })
                : s.a.createElement(f.a, { key: e.name, color: p, name: e.name, icon: e.icon })
            }),
            s.a.createElement(
              m.a,
              { className: g.a.btn, href: `mailto:${A.email}` },
              s.a.createElement('span', { className: g.a.btnText }, 'Apply')
            )
          )
        )
      }
      const h = t(187)
      const E = t.n(h)
      const C = (function(e) {
        function a() {
          for (var a, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
          return (
            ((a = e.call.apply(e, [this].concat(i)) || this).state = { isOpen: !1 }),
            (a.changeVisibilityMenu = function() {
              a.setState({ isOpen: !a.state.isOpen })
            }),
            a
          )
        }
        return (
          n()(a, e),
          (a.prototype.render = function() {
            let e
            let a
            let t
            const i = this.state.isOpen
            const n = this.props.isBlack
            return s.a.createElement(
              'div',
              { className: c()(E.a.wrap, ((e = {}), (e[E.a.white] = !n), e), ((a = {}), (a[E.a.black] = n), a)) },
              s.a.createElement(
                'div',
                { className: c()(E.a.wrapHamburger, ((t = {}), (t[E.a.open] = i), t)), onClick: this.changeVisibilityMenu },
                s.a.createElement('div', { className: E.a.inner })
              ),
              s.a.createElement(u, { isOpen: i })
            )
          }),
          a
        )
      })(r.Component)
      const b = t(188)
      const v = t.n(b)
      const w = function(e) {
        let a
        const t = e.isFixed
        const i = Object(l.a)().contact
        return s.a.createElement(
          'div',
          { className: c()(v.a.container, ((a = {}), (a[v.a.fixed] = t), a)) },
          s.a.createElement(
            'div',
            { className: v.a.wrap },
            s.a.createElement(
              'div',
              { className: v.a.leftBox },
              s.a.createElement(A.a, { to: '/', className: v.a.wrapLogo }, s.a.createElement(p.a, { name: 'optimax' })),
              s.a.createElement(u, { isFixed: t })
            ),
            s.a.createElement(
              'div',
              { className: v.a.rightBox },
              s.a.createElement('div', { className: v.a.wrapLanguage }, s.a.createElement(p.a, { name: 'language' })),
              s.a.createElement(
                m.a,
                { className: v.a.btn, color: t ? 'blue' : 'white', href: `mailto:${i.email}` },
                s.a.createElement('span', { className: v.a.btnText }, 'Apply')
              )
            ),
            s.a.createElement(C, { isBlack: t })
          )
        )
      }
      const M = t(189)
      const B = t.n(M)
      const Q = (function(e) {
        function a() {
          for (var a, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
          return (
            ((a = e.call.apply(e, [this].concat(i)) || this).state = { topRect: 0, isFixed: !1 }),
            (a.calcHeight = function() {
              a.setState({ topRect: a.wrapRef.current.getBoundingClientRect().top + window.pageYOffset }, a.onSticky())
            }),
            (a.onSticky = function() {
              const e = window.pageYOffset
              const t = a.state.topRect + a.props.topOffset
              e <= t ? (a.setState({ isFixed: !1 }), a.props.isFixed(!1)) : e >= t && (a.setState({ isFixed: !0 }), a.props.isFixed(!0))
            }),
            (a.wrapRef = s.a.createRef()),
            a
          )
        }
        n()(a, e)
        const t = a.prototype
        return (
          (t.componentDidMount = function() {
            window.addEventListener('scroll', this.onSticky)
          }),
          (t.componentWillUnmount = function() {
            window.removeEventListener('scroll', this.onSticky)
          }),
          (t.render = function() {
            let e
            const a = this.props.children
            const t = this.state.isFixed
            return s.a.createElement('div', { className: c()(B.a.wrap, ((e = {}), (e[B.a.fixed] = t), e)), ref: this.wrapRef }, a)
          }),
          a
        )
      })(r.Component)
      Q.defaultProps = {
        topOffset: 0,
        isFixed() {
          return !1
        }
      }
      const N = Q
      const I = t(190)
      const O = t.n(I)
      const F = (function(e) {
        function a() {
          for (var a, t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n]
          return (
            ((a = e.call.apply(e, [this].concat(i)) || this).state = { isFixed: !1 }),
            (a.isFixed = function(e) {
              a.setState({ isFixed: e })
            }),
            a
          )
        }
        return (
          n()(a, e),
          (a.prototype.render = function() {
            const e = this.state.isFixed
            return this.props.isHome
              ? s.a.createElement(N, { isFixed: this.isFixed }, s.a.createElement(w, { isFixed: e }))
              : s.a.createElement(
                  'div',
                  { className: O.a.wrap },
                  s.a.createElement('div', { className: O.a.sticky }, s.a.createElement(w, { isFixed: !0 }))
                )
          }),
          a
        )
      })(r.Component)
      F.defaultProps = { isHome: !1 }
      a.a = F
    },
    176(e, a, t) {
      t(165)
      const i = t(0)
      const n = t.n(i)
      const r = t(177)
      const s = t.n(r)
      const o = t(178)
      const c = t.n(o)
      const A = t(179)
      const l = t.n(A)
      const p = t(180)
      const m = t.n(p)
      const f = t(195)
      const d = t.n(f)
      const g = { glassesusa: s.a, ottica: c.a, uvp: l.a, job: m.a }
      a.a = function(e) {
        const a = e.name
        const t = e.children
        const i = e.img
        const r = i || g[a]
        return void 0 === r
          ? (console.error('Requested icon does not exist', a), null)
          : n.a.createElement(
              'div',
              { className: d.a.wrap },
              n.a.createElement(
                'div',
                { className: d.a.inner },
                t && n.a.createElement('div', { className: d.a.content }, t),
                n.a.createElement('div', { className: d.a.wrapImg }, n.a.createElement('img', { className: d.a.img, src: r, alt: '' }))
              )
            )
      }
    },
    177(e, a, t) {
      e.exports = `${t.p}static/glassesusaD-df87da52bd1aac9956ef0bb205d92854.jpg`
    },
    178(e, a, t) {
      e.exports = `${t.p}static/otticaD-db12817567b79be72a8656a8a56d46b4.jpg`
    },
    179(e, a, t) {
      e.exports = `${t.p}static/uvpD-9bcdf3f21886040ca3103b6c6f65abc3.jpg`
    },
    180(e, a, t) {
      e.exports = `${t.p}static/job-3b2255e609e68a0b82c2cb7d9e303f4f.jpg`
    },
    193(e, a, t) {
      const i = t(0)
      const n = t.n(i)
      const r = t(222)
      const s = t.n(r)
      const o = t(194)
      const c = t.n(o)
      const A = t(172)
      const l = function(e) {
        const a = Object(A.a)()
        const t = e.title || a.title
        return n.a.createElement(s.a, {
          htmlAttributes: { lang: 'en' },
          title: t,
          titleTemplate: `%s - ${a.title}`,
          link: [{ rel: 'shortcut icon', type: 'image/png', href: `${c.a}` }]
        })
      }
      ;(l.defaultProps = { lang: 'en', meta: [], keywords: [] }), (a.a = l)
    },
    194(e, a) {
      e.exports =
        'data:image/png;base64,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'
    },
    234(e, a, t) {
      t(97)
      const i = t(0)
      const n = t.n(i)
      const r = t(166)
      const s = t.n(r)
      const o = t(283)
      const c = t.n(o)
      const A = function(e) {
        const a = e.tags
        const t = e.size
        return a.split(',').map(function(e) {
          return n.a.createElement('span', { className: s()(c.a.tag, c.a[t]), key: e }, '#', e)
        })
      }
      ;(A.defaultProps = { size: 'small' }), (a.a = A)
    },
    255(e, a, t) {
      const i = t(0)
      const n = t.n(i)
      const r = t(174)
      const s = t(234)
      const o = t(284)
      const c = t.n(o)
      a.a = function(e) {
        const a = e.item
        const t = a.path
        const i = a.title
        const o = a.image
        const A = a.author
        const l = a.tags
        const p = a.avatar
        const m = a.shortDescription
        return n.a.createElement(
          r.a,
          { to: t, className: c.a.wrap },
          n.a.createElement('div', { className: c.a.wrapImg }, n.a.createElement('img', { className: c.a.img, src: o, alt: i })),
          n.a.createElement('span', { className: c.a.title }, i),
          n.a.createElement(
            'div',
            { className: c.a.wrapAuthor },
            n.a.createElement('img', { className: c.a.avatar, src: p, alt: '' }),
            n.a.createElement('span', { className: c.a.author }, A)
          ),
          n.a.createElement('p', { className: c.a.text }, m),
          n.a.createElement(s.a, { tags: l })
        )
      }
    },
    256(e, a, t) {
      const i = t(257)
      a.a = function() {
        return i.data.allMarkdownRemark.edges
      }
    },
    257(e) {
      e.exports = {
        data: {
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  excerpt:
                    'А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом…',
                  id: 'c0f0e894-c8a2-5359-abef-917d28743261',
                  frontmatter: {
                    title: 'Nintendo унизила Sony на консольном рынке',
                    path: '/blog/article1',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/fa/b1/fab150b05ad746cdaafe0da82124ad9d.jpg',
                    author: 'Name 1',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом девайсе – Nintendo Switch Lite – ходили давно. И теперь компания',
                    tags: 'CSS,HTML'
                  },
                  html:
                    '<p>А теперь – офлайновая новость. Компания Nintendo внезапно анонсировала новую консоль. Впрочем, по словам издания mmorpg.su, слухи о новом девайсе – Nintendo Switch Lite – ходили давно. И теперь компания просто их подтвердила. Как мы и предполагали, консоль будет полностью портативной. То есть подключить ее к телевизору или док-станции вы не сможете. Устройство получит экран размером в 5.5 дюймов, а также популярный элемент управления – крестовину, которой нет у обычной Switch. А вот функции HD-вибрации у Nintendo Switch Lite не будет. Зато в компании планируют продлить срок работки девайса без подзарядки примерно на час. И обещают порадовать геймеров не слишком высокой ценой – в районе 13 тысяч рублей. Планируется, что на новой консоли можно будет запустить большинство игр, в которых поддерживается портативный режим на Switch. В любом случае, если у Nintendo все получится, она просто унизит Sony. Ведь Sony недавно заявляла, что у портативных консолей нет будущего. И если запуск Switch Lite окажется успешным, Nintendo просто утрет нос конкуренту. А вот чем закончится вся эта история, узнаете прямо вот тут.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su. Оно называется…',
                  id: '3bb2ea4a-d302-5947-b8c1-d1973ee65549',
                  frontmatter: {
                    title: 'Крутой шутер про войну с американцами стал бесплатным',
                    path: '/blog/article3',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/7e/86/7e86ee1c273947789f7bde826ffc93ec.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su.',
                    tags: 'CSS'
                  },
                  html:
                    '<p>Вчера для сетевого шутера Rising Storm 2: Vietnam вышло новое дополнение, о чем уже рассказывал популярный сайт mmorpg.su. Оно называется Green Army Men и превратило брутальных героев игрушечных солдатиков. Но самое интересное, что разработчики решили отпраздновать релиз DLC. И сделали это самым приятным для геймеров способом, устроив неделю бесплатного доступа. Так что до 16 июля погонять в Rising Storm 2: Vietnam можно на халяву. Для этого надо всего лишь зайти в Steam и скачать клиент. Судя по отзывам геймеров, шутер действительно заслуживает внимания. Многие пишут, что разработчикам удалось отлично передать дух войны вьетнамцев с американцами. И что геймплей получился ураганным и реалистичным. Хотя некоторым игрокам в Rising Storm 2: Vietnam не нравится баланс. Впрочем, в реальной Вьетнамской войне его тоже не было, но американцы все равно проиграли. В общем, качайте, играйте и не забывайте заглядывать сюда, чтобы узнать о других интересных акциях.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76. Как сказал глава студии Hello…',
                  id: '65b10d70-4c5a-5f5b-af2c-9d778aa0f82c',
                  frontmatter: {
                    title: 'Авторам Anthem и Fallout 76 предложили заткнуться',
                    path: '/blog/article4',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/b9/f3/b9f30f9805f84fbe9d24e2e5098b68d5.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76',
                    tags: 'CSS'
                  },
                  html:
                    '<p>По словам известного сайта mmorpg.su, авторы No Man’s Sky дали ценный совет разработчикам Anthem и Fallout 76. Как сказал глава студии Hello Games, Шон Мюррей, если игра проваливается, то разработчикам лучше всего заткнуться. Впрочем, Шон не хотел обидеть коллег, а просто делился с ними своим опытом. Ведь когда No Man’s Sky только вышла, коммьюнити было в ярости. Потому что разработчики не выполнили многие обещания, и геймеры массово требовали вернуть деньги. Но студия не сдалась – она сжала зубы и молча переделывала игру. Причем в это время разработчики вообще не общались с прессой, чтобы не давать новых обещаний. И даже три месяца не разговаривали с коммьюнити, пока не сделали какие-то новые фишки. В итоге No Man’s Sky изменилась до неузнаваемости. В Steam у нее сейчас 88% положительных недавних обзоров. А фанаты даже поставили напротив окон студии билборд с благодарностями. Поэтому Мюррей и советует авторам Anthem и Fallout 76 не врать про крутость своих игр, а спокойно дорабатывать их. Пока из провальных MMO не получатся настоящие хиты. А вот как на это отреагируют коллеги Шона, можно будет узнать по ссылке.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG немало…',
                  id: 'b20d282e-3ff3-587e-bf51-b61ab2e1e8b0',
                  frontmatter: {
                    title: 'Фанаты Neverwinter готовятся бунтовать',
                    path: '/blog/article5',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/53/71/53716c613fde4f4da5a075bf534bbdfc.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG',
                    tags: 'CSS,JS'
                  },
                  html:
                    '<p>Создатели Neverwinter рассказали порталу mmorpg.su про следующее дополнение к игре. Оно называется «Восстание» и добавит в эту MMORPG немало нового контента. В том числе еще одну играбельную расу – гит. Сюжет будущего DLC расскажет о том, как эти существа подняли бунт против иллитидов и начали войну с ними. Впрочем, нас ждут не только обычные приключения, но и рейд на десятерых с очень крутым боссом. Само собой, без новых карт в Neverwinter тоже не обойдется. Некоторые из них весьма необычные, например, загадочная база гит внутри астероида. Кроме того, студия Cryptic обещает переделать часть старых локаций и добавит кампанию «Сказки» с подземельями из прошлого. А для любителей PvP команда разработчиков подготовит новую карту. Релиз дополнения «Восстание» на ПК запланирован на 13 августа, а на консолях оно появится чуть позже. И не забывайте заглядывать на наш сайт, чтобы узнать, что еще творится в Neverwinter и других онлайн-играх.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру, где бегают мультяшные…',
                  id: '348dabec-1566-5fa2-877c-c53f0c89d71b',
                  frontmatter: {
                    title: 'Стример Fortnite в прямом эфире надругался над женой и поплатился',
                    path: '/blog/article6',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/b1/ec/b1ecec6998bc4b58b30bee083dd34f5a.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру',
                    tags: 'JS'
                  },
                  html:
                    '<p>Игроки в Fortnite по своей сути достаточно больные люди, потому что нормальные геймеры не станут играть в игру, где бегают мультяшные персонажи, машут киркой, строят дома, убивают друг друга, танцуя после этого довольно странные танцы, сообщает известный портал mmorpg.su. Но особенное подозрение вызывают те, кто организовывают прямые эфиры по Fortnite на Twitch. Достаточно посмотреть на самого известного стримера Fortnite Ninja, чтобы понять, что у парня не все дома. Сразу видно, что он болен какой-то психологической болезнью, ведь нормальный русский человек никогда в жизни не станет красить волосы в зеленый цвет, а также нести какую-то чушь в прямом эфире, играя в мультяшную игру. Впрочем, есть еще одно объяснение. Ведь Ninja это американец, а не русский человек. А так как Америка постепенно, но верно, катится в пропасть, то и люди там психически не все здоровые. В США даже президент вызывает вопросы у психологов, что уж говорить о простых геймерах. Это, кстати, еще раз подтверждает то, что хорошо жить в России, где живут нормальные геймеры, хорошие люди, которые не рисуют себе зеленые волосы. А вот пришла новость о том, что еще один стример Fortnite Люк Мандей, известный под ником MrDeadMoth, творил в прямом эфире ужасные вещи. Играя, заметим, в Fortnite. Этот похожий на рыжего гея австралиец избивал свою жену, а однажды даже надругался над ней в прямом эфире. Дело было так: геймер стримил Fortnite, когда жена позвала его ужинать. Он ее послал куда подальше, а она стала настаивать. Взбешенный стример набросился на жену, стал буквально избивать ее. Зрители не видели этого ужаса в кадре, так как стример закрыл камеру, но слышали вопли жены, удары и стоны. Кто-то вызвал полицию, которая и забрала Люка Мандея. Теперь же на суде он признал свою вину, однако отметил, что колотить жену начал только после того, как она стала кидать в него различные предметы. Но, кажется, это заявление уже Люку не поможет, его упекут надолго. Радует, что с российскими геймерами таких историй не случается. Что не удивительно, ведь мы живем в действительно прекрасной России, где править умный президент Путин, умело создающий правильную, здоровую и комфортную атмосферу во всей стране. А в США пусть дальше волосы красят и жен колотят.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский…',
                  id: 'aa1a5ae4-bf92-5c26-9c92-c119f662f10b',
                  frontmatter: {
                    title: 'Геймерам неожиданно показали Mass Effect 4',
                    path: '/blog/article7',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/31/39/31399c31898e476b813398dc0b34af64.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare',
                    tags: 'JS'
                  },
                  html:
                    '<p>Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский портал mmorpg.su. Однако успех у геймеров нашли только Mass Effect, Mass Effect 2 и Mass Effect 3. Причем уже Mass Effect 3 довольно сильно расстроила геймеров, так как там был странный сюжет, непонятный финал, унылая графика. После этого геймеры ждали выхода Mass Effect 4, но вместо этого BioWare сделал Mass Effect: Andromeda, которая ввергла геймеров в шок. В этой игре было плохо всё. Несуразный сюжет, никчемная графика, совершенно убогая боевая система, а весь геймплей заставлял рыдать всех. После этого BioWare уже даже не упоминала Mass Effect 4, хотя все геймеры с нетерпением ждали новой части Mass Effect. И вот когда казалось, что надежда уже потеряна, а Mass Effect 4 можно не ждать, геймерам вдруг продемонстрировали долгожданную Mass Effect 4. К сожалению, сделали это не BioWare, и даже не Electronic Arts. Новую игру показали народные умельцы, которые создали очень крутую модификацию для Mass Effect: Andromeda, которая добавляет в игру вид от первого лица. И это именно то, что так ждали геймеры, ведь после установки этого мода игра действительно становится той Mass Effect 4, которую ждал каждый геймер и фанат игр от BioWare. Авторы мода проделали действительно титаническую работу, ведь вид от первого лица позволяет взглянуть на старую игру по-новому. Настолько, что складывается ощущение, что играешь в Mass Effect 4. Мир выглядит совершенно по-иному, сюжет играет новыми красками, а боевая система обретает невиданную ранее глубину. Мы напомним, что сюжет в играх BioWare всегда на первом месте, а благодаря автору модификации, все сюжетные моменты можно видеть прямо из глаз героя, что сильно меняет игру, добавляет погружения, а известные события становится совершенно другими. Конечно, боевая система также получилась очень увлекательная. Унылая беготня со стрельбой ушли на всегда, а сражения теперь радуют, в мир реально погружаешься. Нет сомнения, что все геймеры, наконец, получили ту самую Mass Effect 4, которую так долго ждали, да еще и бесплатно.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    'Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский…',
                  id: 'd6541898-9f8d-5569-b71c-2ab1f026b989',
                  frontmatter: {
                    title: 'Геймерам неожиданно показали Mass Effect 4',
                    path: '/blog/article8',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/31/39/31399c31898e476b813398dc0b34af64.jpg',
                    author: 'http://mmorpg.su',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare',
                    tags: 'JS'
                  },
                  html:
                    '<p>Один из лучших ролевых сериалов последних лет, конечно, Mass Effect от некогда великой компании BioWare, сообщает популярный российский портал mmorpg.su. Однако успех у геймеров нашли только Mass Effect, Mass Effect 2 и Mass Effect 3. Причем уже Mass Effect 3 довольно сильно расстроила геймеров, так как там был странный сюжет, непонятный финал, унылая графика. После этого геймеры ждали выхода Mass Effect 4, но вместо этого BioWare сделал Mass Effect: Andromeda, которая ввергла геймеров в шок. В этой игре было плохо всё. Несуразный сюжет, никчемная графика, совершенно убогая боевая система, а весь геймплей заставлял рыдать всех. После этого BioWare уже даже не упоминала Mass Effect 4, хотя все геймеры с нетерпением ждали новой части Mass Effect. И вот когда казалось, что надежда уже потеряна, а Mass Effect 4 можно не ждать, геймерам вдруг продемонстрировали долгожданную Mass Effect 4. К сожалению, сделали это не BioWare, и даже не Electronic Arts. Новую игру показали народные умельцы, которые создали очень крутую модификацию для Mass Effect: Andromeda, которая добавляет в игру вид от первого лица. И это именно то, что так ждали геймеры, ведь после установки этого мода игра действительно становится той Mass Effect 4, которую ждал каждый геймер и фанат игр от BioWare. Авторы мода проделали действительно титаническую работу, ведь вид от первого лица позволяет взглянуть на старую игру по-новому. Настолько, что складывается ощущение, что играешь в Mass Effect 4. Мир выглядит совершенно по-иному, сюжет играет новыми красками, а боевая система обретает невиданную ранее глубину. Мы напомним, что сюжет в играх BioWare всегда на первом месте, а благодаря автору модификации, все сюжетные моменты можно видеть прямо из глаз героя, что сильно меняет игру, добавляет погружения, а известные события становится совершенно другими. Конечно, боевая система также получилась очень увлекательная. Унылая беготня со стрельбой ушли на всегда, а сражения теперь радуют, в мир реально погружаешься. Нет сомнения, что все геймеры, наконец, получили ту самую Mass Effect 4, которую так долго ждали, да еще и бесплатно.</p>'
                }
              },
              {
                node: {
                  excerpt:
                    '1. Save Up to 70% Off RetailLeading online stores cut out the middleman so you pay less.Если вы хотите жить в стране с нормальными людьми…',
                  id: '824fe23c-b2f7-5111-b748-f6e4681ed47c',
                  frontmatter: {
                    title: 'Объявили новых супергероев Marvel и взбесили зрителей',
                    path: '/blog/article2',
                    image: 'http://mmorpg.su/crop/1200/530/media/publication/5c/cf/5ccf2799f23d4ee4831d3d4d666a6ca5.jpg',
                    author: 'Gal Galov',
                    avatar: 'http://mmorpg.su/crop/1200/530/media/publication/ab/c4/abc4f0e523294c938d8dfd8dcaf83320.jpg',
                    shortDescription:
                      'Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su.',
                    tags: 'CSS'
                  },
                  html:
                    '<h2>1. Save Up to 70% Off Retail</h2>\n<h3>Leading online stores cut out the middleman so you pay less.</h3>\n<p>Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su. Сегодня мир игр и кино захвачен меньшинствами разной степени бешенства. </p>\n<p><img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="alt text" title="Logo Title Text 1"></p>\n<p>С одной стороны лезут феминистки, с другой наседают геи, откуда-то лезут лесбиянки и негры. Все они считают, что обязаны быть представлены в каждом произведении. Поэтому можете забыть счастливое время, когда супергерои были нормальные. В новом цикле фильмом по комиксам <a href="https://www.google.com">Marvel</a> Marvel будут добавлены различные новые персонажи, а главное место отведут супергероям геям. Об этом открыто заявляет глава Marvel Кевин Файги. По его словам, все герои Marvel должны быть нетрадиционной сексуальной ориентации. Ему вторить и исполнитель роли Человека-Паука в фильме Человек-Паук Возвращение домой Том Холланд. По словам этого гееподобного парня, он не против того, чтобы Человек-Паук в новых фильмах стал глиномесом. Мол, мир не такой простой, как обычный белый парень. Поэтому гей Человек-Паук очень хорошо впишется в перезапуск фильмов Marvel. Хотя при этом Том Холланд говорит, что не в курсе того, точно ли сделают Человека-паука геем в будущем, но не исключает такого варианта. По словам актера, он знает многое о будущем вселенной Marvel, будут добавлены многочисленные новые герои, и точно известно, что они будут представлять различные меньшинства. Наверняка будет боевая феминистка, хороший негр, гей Человек-Паук, а также прочие представители зоопарка. Что важно, эти новые герои не очень-то и нужны публике. Их добавляют именно потому, что меньшинства, будучи в меньшинстве, создают столько шума и поднимают такую вонь, что создателям игр и фильмов не остается ничего иного, как напихать представителей в своих произведения, лишь бы меньшинства не затаскали по судам. Однако, нормальным людям смотреть подобный срам в кино уже даже будет как-то не то, что стыдно, а даже просто неприятно.</p>\n<p><a href="https://www.google.com">I\'m an inline-style link</a></p>\n<blockquote>\n<p>“Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote.”</p>\n</blockquote>\n<ol>\n<li>First ordered list item</li>\n<li>Another item\n⋅⋅* Unordered sub-list. </li>\n<li>Actual numbers don\'t matter, just that it\'s a number\n⋅⋅1. Ordered sub-list</li>\n<li>And another item.</li>\n</ol>\n<p>⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we\'ll use three here to also align the raw Markdown).</p>\n<p>⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅\n⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅\n⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)</p>\n<ul>\n<li>Unordered list can use asterisks</li>\n<li>Or minuses</li>\n<li>Or pluses</li>\n</ul>\n<p>Если вы хотите жить в стране с нормальными людьми, которые ориентированы на нормальные отношения между мужчиной и женщиной, то вам срочно нужно переезжать в Россию. Или же, если вы уже живете в России, благодарить бога за то, что он дал вам такую возможность. Ведь западный мир стремительно катится в пропасть, сообщает правильно ориентированный портал mmorpg.su. Сегодня мир игр и кино захвачен меньшинствами разной степени бешенства. С одной стороны лезут феминистки, с другой наседают геи, откуда-то лезут лесбиянки и негры. Все они считают, что обязаны быть представлены в каждом произведении. Поэтому можете забыть счастливое время, когда супергерои были нормальные. В новом цикле фильмом по комиксам Marvel будут добавлены различные новые персонажи, а главное место отведут супергероям геям. Об этом открыто заявляет глава Marvel Кевин Файги. По его словам, все герои Marvel должны быть нетрадиционной сексуальной ориентации. Ему вторить и исполнитель роли Человека-Паука в фильме Человек-Паук Возвращение домой Том Холланд. По словам этого гееподобного парня, он не против того, чтобы Человек-Паук в новых фильмах стал глиномесом. Мол, мир не такой простой, как обычный белый парень. Поэтому гей Человек-Паук очень хорошо впишется в перезапуск фильмов Marvel. Хотя при этом Том Холланд говорит, что не в курсе того, точно ли сделают Человека-паука геем в будущем, но не исключает такого варианта. По словам актера, он знает многое о будущем вселенной Marvel, будут добавлены многочисленные новые герои, и точно известно, что они будут представлять различные меньшинства. Наверняка будет боевая феминистка, хороший негр, гей Человек-Паук, а также прочие представители зоопарка. Что важно, эти новые герои не очень-то и нужны публике. Их добавляют именно потому, что меньшинства, будучи в меньшинстве, создают столько шума и поднимают такую вонь, что создателям игр и фильмов не остается ничего иного, как напихать представителей в своих произведения, лишь бы меньшинства не затаскали по судам. Однако, нормальным людям смотреть подобный срам в кино уже даже будет как-то не то, что стыдно, а даже просто неприятно.</p>'
                }
              }
            ]
          }
        }
      }
    }
  }
])
// # sourceMappingURL=component---src-pages-blog-index-tsx-e143681533730c7f2510.js.map