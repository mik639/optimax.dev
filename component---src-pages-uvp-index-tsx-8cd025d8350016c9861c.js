;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    160(e, a, t) {
      t.r(a)
      t(170), t(165)
      const n = t(383)
      const i = t(0)
      const s = t.n(i)
      const r = t(175)
      const o = t(176)
      const c = t(184)
      const l = t(213)
      const m = t(214)
      const p = t(215)
      a.default = function() {
        const e = n.data.allMarkdownRemark.edges[0].node
        const a = e.html
        const t = e.frontmatter
        const i = t.name
        const u = t.link
        return s.a.createElement(
          c.a,
          null,
          s.a.createElement(r.a, null),
          s.a.createElement(o.a, { name: i }),
          s.a.createElement(m.a, null, s.a.createElement(l.a, { link: u, name: i }), s.a.createElement(p.a, { html: a, name: i }))
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
      const i = t.n(n)
      const s = t(8)
      const r = t.n(s)
      const o = t(0)
      const c = t.n(o)
      const l = t(166)
      const m = t.n(l)
      const p = t(185)
      const u = t.n(p)
      const d = (function(e) {
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
            const s = t.onClick
            const r = t.children
            const o = t.isDisabled
            const l = t.className
            const p = t.type
            const d = t.isShadow
            const f = t.href
            const h = i()(t, ['color', 'onClick', 'children', 'isDisabled', 'className', 'type', 'isShadow', 'href'])
            const v = u.a[n]
            return f
              ? c.a.createElement(
                  'a',
                  Object.assign({ className: m()(u.a.btn, v, l, ((a = {}), (a[u.a.shadow] = d), a)), onClick: s, href: f }, h),
                  r
                )
              : c.a.createElement(
                  'button',
                  Object.assign({ disabled: o, onClick: s, type: p, className: m()(u.a.btn, v, l, ((e = {}), (e[u.a.shadow] = d), e)) }, h),
                  r
                )
          }),
          a
        )
      })(o.Component)
      ;(d.defaultProps = { color: 'blue', type: 'button', className: '', isDisabled: !1, isShadow: !1, href: '' }), (a.a = d)
    },
    175(e, a, t) {
      const n = t(8)
      const i = t.n(n)
      const s = t(0)
      const r = t.n(s)
      const o = (t(169), t(166))
      const c = t.n(o)
      const l = t(174)
      const m = t(172)
      const p = t(173)
      const u = t(171)
      const d = (t(165), t(170), t(182))
      const f = t(186)
      const h = t.n(f)
      const v = function(e) {
        let a
        let t
        const n = e.isOpen
        const i = e.isFixed
        const s = Object(m.a)()
        const o = s.menuLinks
        const l = s.contact
        const p = i ? ['black'] : ['white', 'black']
        return r.a.createElement(
          'div',
          { className: c()(h.a.wrap, ((a = {}), (a[h.a.open] = n), a), ((t = {}), (t[h.a.fixed] = i), t)) },
          r.a.createElement(
            'nav',
            { className: h.a.list },
            o.map(function(e) {
              return e.link
                ? r.a.createElement(d.a, { key: e.name, color: p, name: e.name, icon: e.icon, link: e.link })
                : r.a.createElement(d.a, { key: e.name, color: p, name: e.name, icon: e.icon })
            }),
            r.a.createElement(
              u.a,
              { className: h.a.btn, href: `mailto:${l.email}` },
              r.a.createElement('span', { className: h.a.btnText }, 'Apply')
            )
          )
        )
      }
      const b = t(187)
      const g = t.n(b)
      const w = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = { isOpen: !1 }),
            (a.changeVisibilityMenu = function() {
              a.setState({ isOpen: !a.state.isOpen })
            }),
            a
          )
        }
        return (
          i()(a, e),
          (a.prototype.render = function() {
            let e
            let a
            let t
            const n = this.state.isOpen
            const i = this.props.isBlack
            return r.a.createElement(
              'div',
              { className: c()(g.a.wrap, ((e = {}), (e[g.a.white] = !i), e), ((a = {}), (a[g.a.black] = i), a)) },
              r.a.createElement(
                'div',
                { className: c()(g.a.wrapHamburger, ((t = {}), (t[g.a.open] = n), t)), onClick: this.changeVisibilityMenu },
                r.a.createElement('div', { className: g.a.inner })
              ),
              r.a.createElement(v, { isOpen: n })
            )
          }),
          a
        )
      })(s.Component)
      const E = t(188)
      const y = t.n(E)
      const x = function(e) {
        let a
        const t = e.isFixed
        const n = Object(m.a)().contact
        return r.a.createElement(
          'div',
          { className: c()(y.a.container, ((a = {}), (a[y.a.fixed] = t), a)) },
          r.a.createElement(
            'div',
            { className: y.a.wrap },
            r.a.createElement(
              'div',
              { className: y.a.leftBox },
              r.a.createElement(l.a, { to: '/', className: y.a.wrapLogo }, r.a.createElement(p.a, { name: 'optimax' })),
              r.a.createElement(v, { isFixed: t })
            ),
            r.a.createElement(
              'div',
              { className: y.a.rightBox },
              r.a.createElement('div', { className: y.a.wrapLanguage }, r.a.createElement(p.a, { name: 'language' })),
              r.a.createElement(
                u.a,
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
          for (var a, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
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
        i()(a, e)
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
            return r.a.createElement('div', { className: c()(N.a.wrap, ((e = {}), (e[N.a.fixed] = t), e)), ref: this.wrapRef }, a)
          }),
          a
        )
      })(s.Component)
      F.defaultProps = {
        topOffset: 0,
        isFixed() {
          return !1
        }
      }
      const R = F
      const O = t(190)
      const S = t.n(O)
      const B = (function(e) {
        function a() {
          for (var a, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
          return (
            ((a = e.call.apply(e, [this].concat(n)) || this).state = { isFixed: !1 }),
            (a.isFixed = function(e) {
              a.setState({ isFixed: e })
            }),
            a
          )
        }
        return (
          i()(a, e),
          (a.prototype.render = function() {
            const e = this.state.isFixed
            return this.props.isHome
              ? r.a.createElement(R, { isFixed: this.isFixed }, r.a.createElement(x, { isFixed: e }))
              : r.a.createElement(
                  'div',
                  { className: S.a.wrap },
                  r.a.createElement('div', { className: S.a.sticky }, r.a.createElement(x, { isFixed: !0 }))
                )
          }),
          a
        )
      })(s.Component)
      B.defaultProps = { isHome: !1 }
      a.a = B
    },
    176(e, a, t) {
      t(165)
      const n = t(0)
      const i = t.n(n)
      const s = t(177)
      const r = t.n(s)
      const o = t(178)
      const c = t.n(o)
      const l = t(179)
      const m = t.n(l)
      const p = t(180)
      const u = t.n(p)
      const d = t(195)
      const f = t.n(d)
      const h = { glassesusa: r.a, ottica: c.a, uvp: m.a, job: u.a }
      a.a = function(e) {
        const a = e.name
        const t = e.children
        const n = e.img
        const s = n || h[a]
        return void 0 === s
          ? (console.error('Requested icon does not exist', a), null)
          : i.a.createElement(
              'div',
              { className: f.a.wrap },
              i.a.createElement(
                'div',
                { className: f.a.inner },
                t && i.a.createElement('div', { className: f.a.content }, t),
                i.a.createElement('div', { className: f.a.wrapImg }, i.a.createElement('img', { className: f.a.img, src: s, alt: '' }))
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
      const i = t.n(n)
      const s = t(173)
      const r = t(258)
      const o = t.n(r)
      a.a = function(e) {
        const a = e.link
        const t = e.name
        return i.a.createElement(
          'div',
          { className: o.a.wrap },
          i.a.createElement('div', { className: o.a.wrapLogo }, i.a.createElement(s.a, { name: t })),
          i.a.createElement('a', { className: o.a.link, href: a, title: t }, 'View Website >')
        )
      }
    },
    214(e, a, t) {
      const n = t(0)
      const i = t.n(n)
      const s = t(259)
      const r = t.n(s)
      a.a = function(e) {
        const a = e.children
        return i.a.createElement('div', { className: r.a.wrap }, a)
      }
    },
    215(e, a, t) {
      t(165)
      const n = t(0)
      const i = t.n(n)
      const s = t(260)
      const r = t.n(s)
      const o = t(216)
      const c = t.n(o)
      const l = t(217)
      const m = t.n(l)
      const p = t(218)
      const u = t.n(p)
      const d = t(219)
      const f = t.n(d)
      const h = t(220)
      const v = t.n(h)
      const b = t(221)
      const g = t.n(b)
      const w = { glassesusaBottom: c.a, glassesusaRight: m.a, otticaBottom: u.a, otticaRight: f.a, uvpBottom: v.a, uvpRight: g.a }
      a.a = function(e) {
        const a = e.html
        const t = e.name
        return (
          console.log(t),
          i.a.createElement(
            'div',
            { className: r.a.wrap },
            i.a.createElement(
              'div',
              { className: r.a.wrapContent },
              i.a.createElement('div', { className: r.a.content, dangerouslySetInnerHTML: { __html: a } }),
              i.a.createElement('img', { className: r.a.img, src: w[`${t}Right`], alt: t })
            ),
            i.a.createElement('img', { className: r.a.notebook, src: w[`${t}Bottom`], alt: '' })
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
    383(e) {
      e.exports = {
        data: {
          allMarkdownRemark: {
            edges: [
              {
                node: {
                  excerpt:
                    'Founded in 2016, United Vision Plan seeks to\nrevolutionize the vision benefit plan industry by providing\ncompanies with the most affordable…',
                  id: '81530c58-b558-5847-81fe-e84b7e6140f1',
                  frontmatter: { name: 'uvp', link: 'https://www.uvp.com/' },
                  html:
                    '<p>Founded in 2016, United Vision Plan seeks to\nrevolutionize the vision benefit plan industry by providing\ncompanies with the most affordable vision plans for their\nemployees. UVP brings a fresh and clear digital approach to\nan industry rife with fine print and unexpected, out-of-pocket\nexpenses. The company offers employees the opportunity\nto claim their eyewear from the comfort of their keyboard,\nensuring that their eyewear is always up to date\nand accurate.</p>\n<blockquote>\n<p>Vision benefit plans for the new economy.</p>\n</blockquote>\n<p>The company addresses the workforce by providing\nemployees with high quality prescription eyewear from\na variety of over 4000 frames, setting it apart from most\nother companies in terms of variety, quality and cost.</p>'
                }
              }
            ]
          }
        }
      }
    }
  }
])
// # sourceMappingURL=component---src-pages-uvp-index-tsx-8cd025d8350016c9861c.js.map
