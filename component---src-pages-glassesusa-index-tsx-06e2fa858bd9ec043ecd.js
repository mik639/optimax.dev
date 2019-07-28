;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    157(e, a, t) {
      t.r(a)
      t(170), t(165)
      const n = t(360)
      const s = t(0)
      const i = t.n(s)
      const r = t(175)
      const c = t(176)
      const o = t(184)
      const l = t(213)
      const m = t(214)
      const p = t(215)
      a.default = function() {
        const e = n.data.allMarkdownRemark.edges[0].node
        const a = e.html
        const t = e.frontmatter
        const s = t.name
        const d = t.link
        return i.a.createElement(
          o.a,
          null,
          i.a.createElement(r.a, null),
          i.a.createElement(c.a, { name: s }),
          i.a.createElement(m.a, null, i.a.createElement(l.a, { link: d, name: s }), i.a.createElement(p.a, { html: a, name: s }))
        )
      }
    },
    169(e, a, t) {
      t(200)('fixed', function(e) {
        return function() {
          return e(this, 'tt', '', '')
        }
      })
    },
    171(e, a, t) {
      t(39)
      const n = t(95)
      const s = t.n(n)
      const i = t(8)
      const r = t.n(i)
      const c = t(0)
      const o = t.n(c)
      const l = t(166)
      const m = t.n(l)
      const p = t(185)
      const d = t.n(p)
      const u = (function(e) {
        function a() {
          return e.apply(this, arguments) || this
        }
        return (
          r()(a, e),
          (a.prototype.render = function() {
            let e
            let a
            const t = this.props
            const n = t.color
            const i = t.onClick
            const r = t.children
            const c = t.isDisabled
            const l = t.className
            const p = t.type
            const u = t.isShadow
            const f = t.href
            const h = s()(t, ['color', 'onClick', 'children', 'isDisabled', 'className', 'type', 'isShadow', 'href'])
            const b = d.a[n]
            return f
              ? o.a.createElement(
                  'a',
                  Object.assign({ className: m()(d.a.btn, b, l, ((a = {}), (a[d.a.shadow] = u), a)), onClick: i, href: f }, h),
                  r
                )
              : o.a.createElement(
                  'button',
                  Object.assign({ disabled: c, onClick: i, type: p, className: m()(d.a.btn, b, l, ((e = {}), (e[d.a.shadow] = u), e)) }, h),
                  r
                )
          }),
          a
        )
      })(c.Component)
      ;(u.defaultProps = { color: 'blue', type: 'button', className: '', isDisabled: !1, isShadow: !1, href: '' }), (a.a = u)
    },
    175(e, a, t) {
      const n = t(8)
      const s = t.n(n)
      const i = t(0)
      const r = t.n(i)
      const c = (t(169), t(166))
      const o = t.n(c)
      const l = t(174)
      const m = t(172)
      const p = t(173)
      const d = t(171)
      const u = (t(165), t(170), t(182))
      const f = t(186)
      const h = t.n(f)
      const b = function(e) {
        let a
        let t
        const n = e.isOpen
        const s = e.isFixed
        const i = Object(m.a)()
        const c = i.menuLinks
        const l = i.contact
        const p = s ? ['black'] : ['white', 'black']
        return r.a.createElement(
          'div',
          { className: o()(h.a.wrap, ((a = {}), (a[h.a.open] = n), a), ((t = {}), (t[h.a.fixed] = s), t)) },
          r.a.createElement(
            'nav',
            { className: h.a.list },
            c.map(function(e) {
              return e.link
                ? r.a.createElement(u.a, { key: e.name, color: p, name: e.name, icon: e.icon, link: e.link })
                : r.a.createElement(u.a, { key: e.name, color: p, name: e.name, icon: e.icon })
            }),
            r.a.createElement(
              d.a,
              { className: h.a.btn, href: `mailto:${l.email}` },
              r.a.createElement('span', { className: h.a.btnText }, 'Apply')
            )
          )
        )
      }
      const g = t(187)
      const v = t.n(g)
      const w = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = { isOpen: !1 }),
            (a.changeVisibilityMenu = function() {
              a.setState({ isOpen: !a.state.isOpen })
            }),
            a
          )
        }
        return (
          s()(a, e),
          (a.prototype.render = function() {
            let e
            let a
            let t
            const n = this.state.isOpen
            const s = this.props.isBlack
            return r.a.createElement(
              'div',
              { className: o()(v.a.wrap, ((e = {}), (e[v.a.white] = !s), e), ((a = {}), (a[v.a.black] = s), a)) },
              r.a.createElement(
                'div',
                { className: o()(v.a.wrapHamburger, ((t = {}), (t[v.a.open] = n), t)), onClick: this.changeVisibilityMenu },
                r.a.createElement('div', { className: v.a.inner })
              ),
              r.a.createElement(b, { isOpen: n })
            )
          }),
          a
        )
      })(i.Component)
      const E = t(188)
      const y = t.n(E)
      const x = function(e) {
        let a
        const t = e.isFixed
        const n = Object(m.a)().contact
        return r.a.createElement(
          'div',
          { className: o()(y.a.container, ((a = {}), (a[y.a.fixed] = t), a)) },
          r.a.createElement(
            'div',
            { className: y.a.wrap },
            r.a.createElement(
              'div',
              { className: y.a.leftBox },
              r.a.createElement(l.a, { to: '/', className: y.a.wrapLogo }, r.a.createElement(p.a, { name: 'optimax' })),
              r.a.createElement(b, { isFixed: t })
            ),
            r.a.createElement(
              'div',
              { className: y.a.rightBox },
              r.a.createElement('div', { className: y.a.wrapLanguage }, r.a.createElement(p.a, { name: 'language' })),
              r.a.createElement(
                d.a,
                { className: y.a.btn, color: t ? 'blue' : 'white', href: `mailto:${n.email}` },
                r.a.createElement('span', { className: y.a.btnText }, 'Apply')
              )
            ),
            r.a.createElement(w, { isBlack: t })
          )
        )
      }
      const k = t(189)
      const N = t.n(k)
      const F = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = { topRect: 0, isFixed: !1 }),
            (a.calcHeight = function() {
              a.setState({ topRect: a.wrapRef.current.getBoundingClientRect().top + window.pageYOffset }, a.onSticky())
            }),
            (a.onSticky = function() {
              const e = window.pageYOffset
              const t = a.state.topRect + a.props.topOffset
              e <= t ? (a.setState({ isFixed: !1 }), a.props.isFixed(!1)) : e >= t && (a.setState({ isFixed: !0 }), a.props.isFixed(!0))
            }),
            (a.wrapRef = r.a.createRef()),
            a
          )
        }
        s()(a, e)
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
            return r.a.createElement('div', { className: o()(N.a.wrap, ((e = {}), (e[N.a.fixed] = t), e)), ref: this.wrapRef }, a)
          }),
          a
        )
      })(i.Component)
      F.defaultProps = {
        topOffset: 0,
        isFixed() {
          return !1
        }
      }
      const R = F
      const S = t(190)
      const O = t.n(S)
      const B = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), s = 0; s < t; s++) n[s] = arguments[s]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = { isFixed: !1 }),
            (a.isFixed = function(e) {
              a.setState({ isFixed: e })
            }),
            a
          )
        }
        return (
          s()(a, e),
          (a.prototype.render = function() {
            const e = this.state.isFixed
            return this.props.isHome
              ? r.a.createElement(R, { isFixed: this.isFixed }, r.a.createElement(x, { isFixed: e }))
              : r.a.createElement(
                  'div',
                  { className: O.a.wrap },
                  r.a.createElement('div', { className: O.a.sticky }, r.a.createElement(x, { isFixed: !0 }))
                )
          }),
          a
        )
      })(i.Component)
      B.defaultProps = { isHome: !1 }
      a.a = B
    },
    176(e, a, t) {
      t(165)
      const n = t(0)
      const s = t.n(n)
      const i = t(177)
      const r = t.n(i)
      const c = t(178)
      const o = t.n(c)
      const l = t(179)
      const m = t.n(l)
      const p = t(180)
      const d = t.n(p)
      const u = t(195)
      const f = t.n(u)
      const h = { glassesusa: r.a, ottica: o.a, uvp: m.a, job: d.a }
      a.a = function(e) {
        const a = e.name
        const t = e.children
        const n = e.img
        const i = n || h[a]
        return void 0 === i
          ? (console.error('Requested icon does not exist', a), null)
          : s.a.createElement(
              'div',
              { className: f.a.wrap },
              s.a.createElement(
                'div',
                { className: f.a.inner },
                t && s.a.createElement('div', { className: f.a.content }, t),
                s.a.createElement('div', { className: f.a.wrapImg }, s.a.createElement('img', { className: f.a.img, src: i, alt: '' }))
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
    213(e, a, t) {
      t(165), t(170)
      const n = t(0)
      const s = t.n(n)
      const i = t(173)
      const r = t(258)
      const c = t.n(r)
      a.a = function(e) {
        const a = e.link
        const t = e.name
        return s.a.createElement(
          'div',
          { className: c.a.wrap },
          s.a.createElement('div', { className: c.a.wrapLogo }, s.a.createElement(i.a, { name: t })),
          s.a.createElement('a', { className: c.a.link, href: a, title: t }, 'View Website >')
        )
      }
    },
    214(e, a, t) {
      const n = t(0)
      const s = t.n(n)
      const i = t(259)
      const r = t.n(i)
      a.a = function(e) {
        const a = e.children
        return s.a.createElement('div', { className: r.a.wrap }, a)
      }
    },
    215(e, a, t) {
      t(165)
      const n = t(0)
      const s = t.n(n)
      const i = t(260)
      const r = t.n(i)
      const c = t(216)
      const o = t.n(c)
      const l = t(217)
      const m = t.n(l)
      const p = t(218)
      const d = t.n(p)
      const u = t(219)
      const f = t.n(u)
      const h = t(220)
      const b = t.n(h)
      const g = t(221)
      const v = t.n(g)
      const w = { glassesusaBottom: o.a, glassesusaRight: m.a, otticaBottom: d.a, otticaRight: f.a, uvpBottom: b.a, uvpRight: v.a }
      a.a = function(e) {
        const a = e.html
        const t = e.name
        return (
          console.log(t),
          s.a.createElement(
            'div',
            { className: r.a.wrap },
            s.a.createElement(
              'div',
              { className: r.a.wrapContent },
              s.a.createElement('div', { className: r.a.content, dangerouslySetInnerHTML: { __html: a } }),
              s.a.createElement('img', { className: r.a.img, src: w[`${t}Right`], alt: t })
            ),
            s.a.createElement('img', { className: r.a.notebook, src: w[`${t}Bottom`], alt: '' })
          )
        )
      }
    },
    216(e, a, t) {
      e.exports = `${t.p}static/glassesusaBottom-4fc4631f25a5292250eb66d66167fce5.png`
    },
    217(e, a, t) {
      e.exports = `${t.p}static/glassesusaRight-2580645eab710090f68e1ff331f1d276.png`
    },
    218(e, a, t) {
      e.exports = `${t.p}static/otticaBottom-f9ea3b140e148cb78f48a99430be7ac8.png`
    },
    219(e, a, t) {
      e.exports = `${t.p}static/otticaRight-222aa7f9799ff43b15b4de20c3befb00.png`
    },
    220(e, a, t) {
      e.exports = `${t.p}static/uvpBottom-6435d7e958d9004eb5cfd645aa908aaa.png`
    },
    221(e, a, t) {
      e.exports = `${t.p}static/uvpRight-8c738fcd9ff07d6d59fd4b0421b6a71d.png`
    },
    360(e) {
      e.exports = {
        data: {
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  excerpt:
                    'Founded in 2008 and named a top 500\nonline retailer in the U.S. for four years in a row by\n"Internet Retailer", GlassesUSA brings affordable…',
                  id: '0e1f665f-fe23-5fec-a4f2-59ba82d6faa9',
                  frontmatter: { name: 'glassesusa', link: 'https://www.glassesusa.com/' },
                  html:
                    '<p>Founded in 2008 and named a top 500\nonline retailer in the U.S. for four years in a row by\n"Internet Retailer", GlassesUSA brings affordable and\nstylish eyewear to the American mass market. Powered by\nour exceptional in-house customer service department, the\ncompany is consistently ranked high by the leading review\nsites in both response time and customer satisfaction.</p>\n<blockquote>\n<p>The smart way to shop for glasses.</p>\n</blockquote>\n<p>The company\'s website sells thousands of glasses\ndaily and sees millions of monthly visitors, in addition to\nhaving a high rate of returning customers. We offer an\nunmatched variety of over 4000 frames at any given time,\nincluding many brand names such as Ray-Ban, Oakley,\nCalvin Klein, DVF and Tom Ford, alongside our own house\nbrands such as Muse, Ottoto, Amelia E and Revel.</p>'
                }
              }
            ]
          }
        }
      }
    }
  }
])
// # sourceMappingURL=component---src-pages-glassesusa-index-tsx-06e2fa858bd9ec043ecd.js.map
