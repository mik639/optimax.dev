!(function(e) {
  function t(t) {
    for (var r, c, s = t[0], d = t[1], f = t[2], i = 0, u = []; i < s.length; i++) (c = s[i]), o[c] && u.push(o[c][0]), (o[c] = 0)
    for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r])
    for (p && p(t); u.length; ) u.shift()()
    return a.push.apply(a, f || []), n()
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
        const d = n[c]
        o[d] !== 0 && (r = !1)
      }
      r && (a.splice(t--, 1), (e = s((s.s = n[0]))))
    }
    return e
  }
  const r = {}
  const c = { 14: 0 }
  var o = { 14: 0 }
  var a = []
  function s(t) {
    if (r[t]) return r[t].exports
    const n = (r[t] = { i: t, l: !1, exports: {} })
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports
  }
  ;(s.e = function(e) {
    const t = []
    c[e]
      ? t.push(c[e])
      : c[e] !== 0 &&
        { 0: 1 }[e] &&
        t.push(
          (c[e] = new Promise(function(t, n) {
            for (
              var r = `${{
                  0: 'styles',
                  5: 'component---src-pages-404-tsx',
                  6: 'component---src-pages-blog-index-tsx',
                  7: 'component---src-pages-glassesusa-index-tsx',
                  8: 'component---src-pages-index-tsx',
                  9: 'component---src-pages-jobs-index-tsx',
                  10: 'component---src-pages-ottica-index-tsx',
                  11: 'component---src-pages-uvp-index-tsx',
                  12: 'component---src-templates-job-tsx',
                  13: 'component---src-templates-post-tsx'
                }[e] || e}.${
                  {
                    0: '5f6a4da5ca65fb9ae3e1',
                    1: '31d6cfe0d16ae931b73c',
                    2: '31d6cfe0d16ae931b73c',
                    3: '31d6cfe0d16ae931b73c',
                    5: '31d6cfe0d16ae931b73c',
                    6: '31d6cfe0d16ae931b73c',
                    7: '31d6cfe0d16ae931b73c',
                    8: '31d6cfe0d16ae931b73c',
                    9: '31d6cfe0d16ae931b73c',
                    10: '31d6cfe0d16ae931b73c',
                    11: '31d6cfe0d16ae931b73c',
                    12: '31d6cfe0d16ae931b73c',
                    13: '31d6cfe0d16ae931b73c',
                    15: '31d6cfe0d16ae931b73c'
                  }[e]
                }.css`,
                o = s.p + r,
                a = document.getElementsByTagName('link'),
                d = 0;
              d < a.length;
              d++
            ) {
              var f = (p = a[d]).getAttribute('data-href') || p.getAttribute('href')
              if (p.rel === 'stylesheet' && (f === r || f === o)) return t()
            }
            const i = document.getElementsByTagName('style')
            for (d = 0; d < i.length; d++) {
              var p
              if ((f = (p = i[d]).getAttribute('data-href')) === r || f === o) return t()
            }
            const u = document.createElement('link')
            ;(u.rel = 'stylesheet'),
              (u.type = 'text/css'),
              (u.onload = t),
              (u.onerror = function(t) {
                const r = (t && t.target && t.target.src) || o
                const a = new Error(`Loading CSS chunk ${e} failed.\n(${r})`)
                ;(a.request = r), delete c[e], u.parentNode.removeChild(u), n(a)
              }),
              (u.href = o),
              document.getElementsByTagName('head')[0].appendChild(u)
          }).then(function() {
            c[e] = 0
          }))
        )
    let n = o[e]
    if (n !== 0)
      if (n) t.push(n[2])
      else {
        const r = new Promise(function(t, r) {
          n = o[e] = [t, r]
        })
        t.push((n[2] = r))
        let a
        const d = document.createElement('script')
        ;(d.charset = 'utf-8'),
          (d.timeout = 120),
          s.nc && d.setAttribute('nonce', s.nc),
          (d.src = (function(e) {
            return `${s.p}${{
              0: 'styles',
              5: 'component---src-pages-404-tsx',
              6: 'component---src-pages-blog-index-tsx',
              7: 'component---src-pages-glassesusa-index-tsx',
              8: 'component---src-pages-index-tsx',
              9: 'component---src-pages-jobs-index-tsx',
              10: 'component---src-pages-ottica-index-tsx',
              11: 'component---src-pages-uvp-index-tsx',
              12: 'component---src-templates-job-tsx',
              13: 'component---src-templates-post-tsx'
            }[e] || e}-${
              {
                0: '8d602e20d05535c75c61',
                1: '1aad6ca5aef6d933ff93',
                2: '258233ccf87f8615e968',
                3: '329cda6b503db48968f5',
                5: '1867d6911c3eb48e1eb8',
                6: 'e143681533730c7f2510',
                7: '06e2fa858bd9ec043ecd',
                8: '05ea248d95d32db96d96',
                9: '5f0428f5dab3d606ecdf',
                10: 'ebd93026cc29876027ac',
                11: '8cd025d8350016c9861c',
                12: 'ae3f794f3ba42d99c4af',
                13: '36bd8ed8c8834b01bcc1',
                15: 'ad4df73dd6c3ca3cf4eb'
              }[e]
            }.js`
          })(e)),
          (a = function(t) {
            ;(d.onerror = d.onload = null), clearTimeout(f)
            const n = o[e]
            if (n !== 0) {
              if (n) {
                const r = t && (t.type === 'load' ? 'missing' : t.type)
                const c = t && t.target && t.target.src
                const a = new Error(`Loading chunk ${e} failed.\n(${r}: ${c})`)
                ;(a.type = r), (a.request = c), n[1](a)
              }
              o[e] = void 0
            }
          })
        var f = setTimeout(function() {
          a({ type: 'timeout', target: d })
        }, 12e4)
        ;(d.onerror = d.onload = a), document.head.appendChild(d)
      }
    return Promise.all(t)
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (s.r = function(e) {
      typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e
      if (4 & t && typeof e === 'object' && e && e.__esModule) return e
      const n = Object.create(null)
      if ((s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string'))
        for (const r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t]
            }.bind(null, r)
          )
      return n
    }),
    (s.n = function(e) {
      const t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return s.d(t, 'a', t), t
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (s.p = '/'),
    (s.oe = function(e) {
      throw (console.error(e), e)
    })
  let d = (window.webpackJsonp = window.webpackJsonp || [])
  const f = d.push.bind(d)
  ;(d.push = t), (d = d.slice())
  for (let i = 0; i < d.length; i++) t(d[i])
  var p = f
  n()
})([])
// # sourceMappingURL=webpack-runtime-d8b051eb9aba68a751a8.js.map
