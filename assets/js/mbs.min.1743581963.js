function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
(window.lazySizesConfig = window.lazySizesConfig || {}),
  (window.lazySizesConfig.lazyClass = "lazy"),
  function () {
    "use strict";
    function t() {}
    function r(t) {
      {
        if (null == t) return t === E ? p : d;
        if (a && a in Object(t)) {
          var e = t,
            n = A.call(e, a),
            o = e[a];
          try {
            e[a] = E;
            var i = !0;
          } catch (e) {}
          var r = C.call(e);
          return i && (n ? (e[a] = o) : delete e[a]), r;
        }
        return C.call(t);
      }
    }
    function l(d, n, t) {
      function f(t) {
        var e = i,
          n = r;
        return (i = r = E), (c = t), (a = d.apply(n, e));
      }
      function p(t) {
        var e = t - s;
        return s === E || n <= e || e < 0 || (u && y <= t - c);
      }
      function o() {
        var t,
          e = w();
        return p(e)
          ? m(e)
          : ((l = setTimeout(
              o,
              ((t = n - ((e = e) - s)), u ? S(t, y - (e - c)) : t)
            )),
            E);
      }
      function m(t) {
        return (l = E), h && i ? f(t) : ((i = r = E), a);
      }
      function e() {
        var t = w(),
          e = p(t);
        if (((i = arguments), (r = this), (s = t), e)) {
          if (l === E) return (c = t = s), (l = setTimeout(o, n)), v ? f(t) : a;
          if (u) return (l = setTimeout(o, n)), f(s);
        }
        return l === E && (l = setTimeout(o, n)), a;
      }
      var i,
        r,
        y,
        a,
        l,
        s,
        c = 0,
        v = !1,
        u = !1,
        h = !0;
      if ("function" != typeof d) throw new TypeError(z);
      return (
        (n = b(n) || 0),
        g(t) &&
          ((v = !!t.leading),
          (u = "maxWait" in t),
          (y = u ? _(b(t.maxWait) || 0, n) : y),
          (h = "trailing" in t ? !!t.trailing : h)),
        (e.cancel = function () {
          l !== E && clearTimeout(l), (c = 0), (i = s = r = l = E);
        }),
        (e.flush = function () {
          return l === E ? a : m(w());
        }),
        e
      );
    }
    function g(t) {
      var e = _typeof(t);
      return null != t && ("object" == e || "function" == e);
    }
    function s(t) {
      return null != t && "object" == _typeof(t);
    }
    function c(t) {
      return "symbol" == _typeof(t) || (s(t) && r(t) == f);
    }
    function b(t) {
      if ("number" == typeof t) return t;
      if (c(t)) return u;
      if (
        "string" !=
        typeof (t = g(t)
          ? g((e = "function" == typeof t.valueOf ? t.valueOf() : t))
            ? e + ""
            : e
          : t)
      )
        return 0 === t ? t : +t;
      t = t.replace(m, "");
      var e = v.test(t);
      return e || h.test(t) ? L(t.slice(2), e ? 2 : 8) : y.test(t) ? u : +t;
    }
    function w() {
      return o.Date.now();
    }
    var E,
      z = "Expected a function",
      u = NaN,
      d = "[object Null]",
      f = "[object Symbol]",
      p = "[object Undefined]",
      m = /^\s+|\s+$/g,
      y = /^[-+]0x[0-9a-f]+$/i,
      v = /^0b[01]+$/i,
      h = /^0o[0-7]+$/i,
      L = parseInt,
      e =
        "object" ==
          ("undefined" == typeof global ? "undefined" : _typeof(global)) &&
        global &&
        global.Object === Object &&
        global,
      n =
        "object" ==
          ("undefined" == typeof self ? "undefined" : _typeof(self)) &&
        self &&
        self.Object === Object &&
        self,
      o = e || n || Function("return this")(),
      e =
        "object" ==
          ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
        exports &&
        !exports.nodeType &&
        exports,
      n =
        e &&
        "object" ==
          ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
        module &&
        !module.nodeType &&
        module,
      i = Object.prototype,
      A = i.hasOwnProperty,
      C = i.toString,
      i = o.Symbol,
      a = i ? i.toStringTag : E,
      _ = Math.max,
      S = Math.min;
    (t.debounce = l),
      (t.throttle = function (t, e, n) {
        var o = !0,
          i = !0;
        if ("function" != typeof t) throw new TypeError(z);
        return (
          g(n) &&
            ((o = "leading" in n ? !!n.leading : o),
            (i = "trailing" in n ? !!n.trailing : i)),
          l(t, e, { leading: o, maxWait: e, trailing: i })
        );
      }),
      (t.isObject = g),
      (t.isObjectLike = s),
      (t.isSymbol = c),
      (t.now = w),
      (t.toNumber = b),
      (t.VERSION = "4.17.5"),
      "function" == typeof define &&
      "object" == _typeof(define.amd) &&
      define.amd
        ? ((o._ = t),
          define(function () {
            return t;
          }))
        : n
        ? (((n.exports = t)._ = t), (e._ = t))
        : (o._ = t);
  }.call(this),
  (function (t) {
    var e = (function (o, f, r) {
      "use strict";
      var p,
        m,
        n,
        i = {
          lazyClass: "lazyload",
          loadedClass: "lazyloaded",
          loadingClass: "lazyloading",
          preloadClass: "lazypreload",
          errorClass: "lazyerror",
          autosizesClass: "lazyautosizes",
          fastLoadedClass: "ls-is-cached",
          iframeLoadMode: 0,
          srcAttr: "data-src",
          srcsetAttr: "data-srcset",
          sizesAttr: "data-sizes",
          minSize: 40,
          customMedia: {},
          init: !0,
          expFactor: 1.5,
          hFac: 0.8,
          loadMode: 2,
          loadHidden: !0,
          ricTimeout: 0,
          throttleDelay: 125,
        };
      for (n in ((m = o.lazySizesConfig || o.lazysizesConfig || {}), i))
        n in m || (m[n] = i[n]);
      if (!f || !f.getElementsByClassName)
        return { init: function () {}, cfg: m, noSupport: !0 };
      function d(t, e) {
        dt(t, e) ||
          t.setAttribute("class", (t[h]("class") || "").trim() + " " + e);
      }
      function g(t, e) {
        (e = dt(t, e)) &&
          t.setAttribute("class", (t[h]("class") || "").replace(e, " "));
      }
      function b(e, n, t) {
        var o = t ? it : "removeEventListener";
        t && b(e, n),
          st.forEach(function (t) {
            e[o](t, n);
          });
      }
      function w(t, e) {
        var n;
        !ot && (n = o.picturefill || m.pf)
          ? (e && e.src && !t[h]("srcset") && t.setAttribute("srcset", e.src),
            n({ reevaluate: !0, elements: [t] }))
          : e && e.src && (t.src = e.src);
      }
      function a(n, t) {
        return t
          ? function () {
              yt(n);
            }
          : function () {
              var t = this,
                e = arguments;
              yt(function () {
                n.apply(t, e);
              });
            };
      }
      function l(t) {
        function e() {
          var t = r.now() - o;
          t < 99 ? u(e, 99 - t) : (at || i)(i);
        }
        var n,
          o,
          i = function () {
            (n = null), t();
          };
        return function () {
          (o = r.now()), (n = n || u(e, 99));
        };
      }
      function s() {
        !s.i && f.getElementsByClassName && ((s.i = !0), ht._(), vt._());
      }
      var c,
        E,
        z,
        L,
        A,
        C,
        _,
        S,
        T,
        x,
        O,
        M,
        B,
        N,
        j,
        I,
        q,
        H,
        Y,
        F,
        X,
        P,
        R,
        W,
        D,
        y,
        v,
        k,
        e,
        V,
        $,
        U,
        J,
        G,
        K,
        Q,
        Z,
        tt,
        et,
        nt = f.documentElement,
        ot = o.HTMLPictureElement,
        it = "addEventListener",
        h = "getAttribute",
        t = o[it].bind(o),
        u = o.setTimeout,
        rt = o.requestAnimationFrame || u,
        at = o.requestIdleCallback,
        lt = /^picture$/i,
        st = ["load", "error", "lazyincluded", "_lazyloaded"],
        ct = {},
        ut = Array.prototype.forEach,
        dt = function (t, e) {
          return (
            ct[e] || (ct[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
            ct[e].test(t[h]("class") || "") && ct[e]
          );
        },
        ft = function (t, e, n, o, i) {
          var r = f.createEvent("Event");
          return (
            ((n = n || {}).instance = p),
            r.initEvent(e, !o, !i),
            (r.detail = n),
            t.dispatchEvent(r),
            r
          );
        },
        pt = function (t, e) {
          return (getComputedStyle(t, null) || {})[e];
        },
        mt = function (t, e, n) {
          for (
            n = n || t.offsetWidth;
            n < m.minSize && e && !t._lazysizesWidth;

          )
            (n = e.offsetWidth), (e = e.parentNode);
          return n;
        },
        yt = ((tt = []), (et = Z = []), (St._lsFlush = _t), St),
        vt =
          ((P = /^img$/i),
          (R = /^iframe$/i),
          (W = "onscroll" in o && !/(gle|ing)bot/.test(navigator.userAgent)),
          (v = -1),
          (k = function (t) {
            return (
              (j = null == j ? "hidden" == pt(f.body, "visibility") : j) ||
              !(
                "hidden" == pt(t.parentNode, "visibility") &&
                "hidden" == pt(t, "visibility")
              )
            );
          }),
          (I = wt),
          (H = y = D = 0),
          (Y = m.throttleDelay),
          (F = m.ricTimeout),
          (X =
            at && 49 < F
              ? function () {
                  at(Et, { timeout: F }),
                    F !== m.ricTimeout && (F = m.ricTimeout);
                }
              : a(function () {
                  u(Et);
                }, !0)),
          (V = a(zt)),
          ($ = function (t) {
            V({ target: t.target });
          }),
          (U = a(function (e, t, n, o, i) {
            var r, a, l, s, c;
            (a = ft(e, "lazybeforeunveil", t)).defaultPrevented ||
              (o && (n ? d(e, m.autosizesClass) : e.setAttribute("sizes", o)),
              (n = e[h](m.srcsetAttr)),
              (o = e[h](m.srcAttr)),
              i && (r = (s = e.parentNode) && lt.test(s.nodeName || "")),
              (l = t.firesLoad || ("src" in e && (n || o || r))),
              (a = { target: e }),
              d(e, m.loadingClass),
              l && (clearTimeout(C), (C = u(bt, 2500)), b(e, $, !0)),
              r && ut.call(s.getElementsByTagName("source"), Lt),
              n
                ? e.setAttribute("srcset", n)
                : o &&
                  !r &&
                  (R.test(e.nodeName)
                    ? ((t = o),
                      0 ==
                      (c =
                        (s = e).getAttribute("data-load-mode") ||
                        m.iframeLoadMode)
                        ? s.contentWindow.location.replace(t)
                        : 1 == c && (s.src = t))
                    : (e.src = o)),
              i && (n || r) && w(e, { src: o })),
              e._lazyRace && delete e._lazyRace,
              g(e, m.lazyClass),
              yt(function () {
                var t = e.complete && 1 < e.naturalWidth;
                (l && !t) ||
                  (t && d(e, m.fastLoadedClass),
                  zt(a),
                  (e._lazyCache = !0),
                  u(function () {
                    "_lazyCache" in e && delete e._lazyCache;
                  }, 9)),
                  "lazy" == e.loading && y--;
              }, !0);
          })),
          (G = l(function () {
            (m.loadMode = 3), e();
          })),
          {
            _: function () {
              (S = r.now()),
                (p.elements = f.getElementsByClassName(m.lazyClass)),
                (L = f.getElementsByClassName(
                  m.lazyClass + " " + m.preloadClass
                )),
                t("scroll", e, !0),
                t("resize", e, !0),
                t("pageshow", function (t) {
                  var e;
                  !t.persisted ||
                    ((e = f.querySelectorAll("." + m.loadingClass)).length &&
                      e.forEach &&
                      rt(function () {
                        e.forEach(function (t) {
                          t.complete && J(t);
                        });
                      }));
                }),
                o.MutationObserver
                  ? new MutationObserver(e).observe(nt, {
                      childList: !0,
                      subtree: !0,
                      attributes: !0,
                    })
                  : (nt[it]("DOMNodeInserted", e, !0),
                    nt[it]("DOMAttrModified", e, !0),
                    setInterval(e, 999)),
                t("hashchange", e, !0),
                [
                  "focus",
                  "mouseover",
                  "click",
                  "load",
                  "transitionend",
                  "animationend",
                ].forEach(function (t) {
                  f[it](t, e, !0);
                }),
                /d$|^c/.test(f.readyState)
                  ? Ct()
                  : (t("load", Ct), f[it]("DOMContentLoaded", e), u(Ct, 2e4)),
                p.elements.length ? (wt(), yt._lsFlush()) : e();
            },
            checkElems: (e = function (t) {
              var e;
              (t = !0 === t) && (F = 33),
                q ||
                  ((q = !0),
                  (e = Y - (r.now() - H)) < 0 && (e = 0),
                  t || e < 9 ? X() : u(X, e));
            }),
            unveil: (J = function (t) {
              var e, n, o, i;
              t._lazyRace ||
                (((!(i =
                  "auto" ==
                  (o =
                    (n = P.test(t.nodeName)) &&
                    (t[h](m.sizesAttr) || t[h]("sizes")))) &&
                  A) ||
                  !n ||
                  (!t[h]("src") && !t.srcset) ||
                  t.complete ||
                  dt(t, m.errorClass) ||
                  !dt(t, m.lazyClass)) &&
                  ((e = ft(t, "lazyunveilread").detail),
                  i && ht.updateElem(t, !0, t.offsetWidth),
                  (t._lazyRace = !0),
                  y++,
                  U(t, e, i, o, n)));
            }),
            _aLSL: At,
          }),
        ht =
          ((E = a(function (t, e, n, o) {
            var i, r, a;
            if (
              ((t._lazysizesWidth = o),
              t.setAttribute("sizes", (o += "px")),
              lt.test(e.nodeName || ""))
            )
              for (
                r = 0, a = (i = e.getElementsByTagName("source")).length;
                r < a;
                r++
              )
                i[r].setAttribute("sizes", o);
            n.detail.dataAttr || w(t, n.detail);
          })),
          {
            _: function () {
              (c = f.getElementsByClassName(m.autosizesClass)), t("resize", z);
            },
            checkElems: (z = l(function () {
              var t,
                e = c.length;
              if (e) for (t = 0; t < e; t++) gt(c[t]);
            })),
            updateElem: gt,
          });
      function gt(t, e, n) {
        var o = t.parentNode;
        o &&
          ((n = mt(t, o, n)),
          (e = ft(t, "lazybeforesizes", { width: n, dataAttr: !!e }))
            .defaultPrevented ||
            ((n = e.detail.width) && n !== t._lazysizesWidth && E(t, o, e, n)));
      }
      function bt(t) {
        y--, (t && !(y < 0) && t.target) || (y = 0);
      }
      function wt() {
        var u,
          t,
          e,
          n,
          o,
          i,
          r,
          d,
          a,
          l,
          s,
          c = p.elements;
        if ((_ = m.loadMode) && y < 8 && (u = c.length)) {
          for (t = 0, v++; t < u; t++)
            if (c[t] && !c[t]._lazyRace)
              if (!W || (p.prematureUnveil && p.prematureUnveil(c[t]))) J(c[t]);
              else if (
                (((r = c[t][h]("data-expand")) && (o = +r)) || (o = D),
                a ||
                  ((a =
                    !m.expand || m.expand < 1
                      ? 500 < nt.clientHeight && 500 < nt.clientWidth
                        ? 500
                        : 370
                      : m.expand),
                  (l = (p._defEx = a) * m.expFactor),
                  (s = m.hFac),
                  (j = null),
                  D < l && y < 1 && 2 < v && 2 < _ && !f.hidden
                    ? ((D = l), (v = 0))
                    : (D = 1 < _ && 1 < v && y < 6 ? a : 0)),
                d !== o &&
                  ((T = innerWidth + o * s),
                  (x = innerHeight + o),
                  (i = -1 * o),
                  (d = o)),
                (l = c[t].getBoundingClientRect()),
                (N = l.bottom) >= i &&
                  (O = l.top) <= x &&
                  (B = l.right) >= i * s &&
                  (M = l.left) <= T &&
                  (N || B || M || O) &&
                  (m.loadHidden || k(c[t])) &&
                  ((A && y < 3 && !r && (_ < 3 || v < 4)) ||
                    (function (t, e) {
                      var n,
                        o = t,
                        i = k(t);
                      for (
                        O -= e, N += e, M -= e, B += e;
                        i && (o = o.offsetParent) && o != f.body && o != nt;

                      )
                        (i = 0 < (pt(o, "opacity") || 1)) &&
                          "visible" != pt(o, "overflow") &&
                          ((n = o.getBoundingClientRect()),
                          (i =
                            B > n.left &&
                            M < n.right &&
                            N > n.top - 1 &&
                            O < n.bottom + 1));
                      return i;
                    })(c[t], o)))
              ) {
                if ((J(c[t]), (n = !0), 9 < y)) break;
              } else
                !n &&
                  A &&
                  !e &&
                  y < 4 &&
                  v < 4 &&
                  2 < _ &&
                  (L[0] || m.preloadAfterLoad) &&
                  (L[0] ||
                    (!r &&
                      (N || B || M || O || "auto" != c[t][h](m.sizesAttr)))) &&
                  (e = L[0] || c[t]);
          e && !n && J(e);
        }
      }
      function Et() {
        (q = !1), (H = r.now()), I();
      }
      function zt(t) {
        var e = t.target;
        e._lazyCache
          ? delete e._lazyCache
          : (bt(t),
            d(e, m.loadedClass),
            g(e, m.loadingClass),
            b(e, $),
            ft(e, "lazyloaded"));
      }
      function Lt(t) {
        var e,
          n = t[h](m.srcsetAttr);
        (e = m.customMedia[t[h]("data-media") || t[h]("media")]) &&
          t.setAttribute("media", e),
          n && t.setAttribute("srcset", n);
      }
      function At() {
        3 == m.loadMode && (m.loadMode = 2), G();
      }
      function Ct() {
        A ||
          (r.now() - S < 999
            ? u(Ct, 999)
            : ((A = !0), (m.loadMode = 3), e(), t("scroll", At, !0)));
      }
      function _t() {
        var t = et;
        for (et = Z.length ? tt : Z, Q = !(K = !0); t.length; ) t.shift()();
        K = !1;
      }
      function St(t, e) {
        K && !e
          ? t.apply(this, arguments)
          : (et.push(t), Q || ((Q = !0), (f.hidden ? u : rt)(_t)));
      }
      return (
        u(function () {
          m.init && s();
        }),
        (p = {
          cfg: m,
          autoSizer: ht,
          loader: vt,
          init: s,
          uP: w,
          aC: d,
          rC: g,
          hC: dt,
          fire: ft,
          gW: mt,
          rAF: yt,
        })
      );
    })(t, t.document, Date);
    (t.lazySizes = e),
      "object" ==
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
        module.exports &&
        (module.exports = e);
  })("undefined" != typeof window ? window : {}),
  (function (t, e) {
    function n() {
      e(t.lazySizes), t.removeEventListener("lazyunveilread", n, !0);
    }
    (e = e.bind(null, t, t.document)),
      "object" ==
        ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
      module.exports
        ? e(require("lazysizes"))
        : "function" == typeof define && define.amd
        ? define(["lazysizes"], e)
        : t.lazySizes
        ? n()
        : t.addEventListener("lazyunveilread", n, !0);
  })(window, function (t, r, a) {
    "use strict";
    var l,
      s,
      c = {};
    function u(t, e, n) {
      var o, i;
      c[t] ||
        ((o = r.createElement(e ? "link" : "script")),
        (i = r.getElementsByTagName("script")[0]),
        e
          ? ((o.rel = "stylesheet"), (o.href = t))
          : ((o.onload = function () {
              (o.onerror = null), (o.onload = null), n();
            }),
            (o.onerror = o.onload),
            (o.src = t)),
        (c[t] = !0),
        (c[o.src || o.href] = !0),
        i.parentNode.insertBefore(o, i));
    }
    r.addEventListener &&
      ((l = function (t, e) {
        var n = r.createElement("img");
        (n.onload = function () {
          (n.onload = null), (n.onerror = null), (n = null), e();
        }),
          (n.onerror = n.onload),
          (n.src = t),
          n && n.complete && n.onload && n.onload();
      }),
      addEventListener(
        "lazybeforeunveil",
        function (t) {
          var e, n, o;
          if (t.detail.instance == a && !t.defaultPrevented) {
            var i = t.target;
            if (
              ("none" == i.preload &&
                (i.preload = i.getAttribute("data-preload") || "auto"),
              null != i.getAttribute("data-autoplay"))
            )
              if (i.getAttribute("data-expand") && !i.autoplay)
                try {
                  i.play();
                } catch (t) {}
              else
                requestAnimationFrame(function () {
                  i.setAttribute("data-expand", "-10"),
                    a.aC(i, a.cfg.lazyClass);
                });
            (e = i.getAttribute("data-link")) && u(e, !0),
              (e = i.getAttribute("data-script")) &&
                ((t.detail.firesLoad = !0),
                u(e, null, function () {
                  (t.detail.firesLoad = !1),
                    a.fire(i, "_lazyloaded", {}, !0, !0);
                })),
              (e = i.getAttribute("data-require")) &&
                (a.cfg.requireJs ? a.cfg.requireJs([e]) : u(e)),
              (n = i.getAttribute("data-bg")) &&
                ((t.detail.firesLoad = !0),
                l(n, function () {
                  (i.style.backgroundImage =
                    "url(" + (s.test(n) ? JSON.stringify(n) : n) + ")"),
                    (t.detail.firesLoad = !1),
                    a.fire(i, "_lazyloaded", {}, !0, !0);
                })),
              (o = i.getAttribute("data-poster")) &&
                ((t.detail.firesLoad = !0),
                l(o, function () {
                  (i.poster = o),
                    (t.detail.firesLoad = !1),
                    a.fire(i, "_lazyloaded", {}, !0, !0);
                }));
          }
        },
        !(s = /\(|\)|\s|'/)
      ));
  }),
  (function () {
    "use strict";
    function t() {
      var t,
        e,
        o,
        l,
        s,
        n,
        c = window,
        u = document;
      function d(t, e) {
        (this.scrollLeft = t), (this.scrollTop = e);
      }
      function i(t) {
        if (
          null === t ||
          "object" != _typeof(t) ||
          void 0 === t.behavior ||
          "auto" === t.behavior ||
          "instant" === t.behavior
        )
          return !0;
        if ("object" == _typeof(t) && "smooth" === t.behavior) return !1;
        throw new TypeError(
          "behavior member of ScrollOptions " +
            t.behavior +
            " is not a valid value for enumeration ScrollBehavior."
        );
      }
      function a(t, e) {
        return "Y" === e
          ? t.clientHeight + n < t.scrollHeight
          : "X" === e
          ? t.clientWidth + n < t.scrollWidth
          : void 0;
      }
      function f(t, e) {
        t = c.getComputedStyle(t, null)["overflow" + e];
        return "auto" === t || "scroll" === t;
      }
      function p(t) {
        var e = (s() - t.startTime) / o,
          e = (e = 1 < e ? 1 : e),
          e = 0.5 * (1 - Math.cos(Math.PI * e)),
          n = t.startX + (t.x - t.startX) * e,
          e = t.startY + (t.y - t.startY) * e;
        t.method.call(t.scrollable, n, e),
          (n === t.x && e === t.y) || c.requestAnimationFrame(p.bind(c, t));
      }
      function r(t, e, n) {
        var o,
          i,
          r,
          a = s(),
          t =
            t === u.body
              ? ((i = (o = c).scrollX || c.pageXOffset),
                (r = c.scrollY || c.pageYOffset),
                l.scroll)
              : ((i = (o = t).scrollLeft), (r = t.scrollTop), d);
        p({
          scrollable: o,
          method: t,
          startTime: a,
          startX: i,
          startY: r,
          x: e,
          y: n,
        });
      }
      ("scrollBehavior" in u.documentElement.style &&
        !0 !== c.__forceSmoothScrollPolyfill__) ||
        ((e = c.HTMLElement || c.Element),
        (o = 468),
        (l = {
          scroll: c.scroll || c.scrollTo,
          scrollBy: c.scrollBy,
          elementScroll: e.prototype.scroll || d,
          scrollIntoView: e.prototype.scrollIntoView,
        }),
        (s =
          c.performance && c.performance.now
            ? c.performance.now.bind(c.performance)
            : Date.now),
        (t = c.navigator.userAgent),
        (n = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
          ? 1
          : 0),
        (c.scroll = c.scrollTo =
          function () {
            void 0 !== arguments[0] &&
              (!0 !== i(arguments[0])
                ? r.call(
                    c,
                    u.body,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : c.scrollX || c.pageXOffset,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : c.scrollY || c.pageYOffset
                  )
                : l.scroll.call(
                    c,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" != _typeof(arguments[0])
                      ? arguments[0]
                      : c.scrollX || c.pageXOffset,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : c.scrollY || c.pageYOffset
                  ));
          }),
        (c.scrollBy = function () {
          void 0 !== arguments[0] &&
            (i(arguments[0])
              ? l.scrollBy.call(
                  c,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != _typeof(arguments[0])
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : r.call(
                  c,
                  u.body,
                  ~~arguments[0].left + (c.scrollX || c.pageXOffset),
                  ~~arguments[0].top + (c.scrollY || c.pageYOffset)
                ));
        }),
        (e.prototype.scroll = e.prototype.scrollTo =
          function () {
            if (void 0 !== arguments[0])
              if (!0 !== i(arguments[0])) {
                var t = arguments[0].left,
                  e = arguments[0].top;
                r.call(
                  this,
                  this,
                  void 0 === t ? this.scrollLeft : ~~t,
                  void 0 === e ? this.scrollTop : ~~e
                );
              } else {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                  throw new SyntaxError("Value could not be converted");
                l.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : "object" != _typeof(arguments[0])
                    ? ~~arguments[0]
                    : this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : void 0 !== arguments[1]
                    ? ~~arguments[1]
                    : this.scrollTop
                );
              }
          }),
        (e.prototype.scrollBy = function () {
          void 0 !== arguments[0] &&
            (!0 !== i(arguments[0])
              ? this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                })
              : l.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                ));
        }),
        (e.prototype.scrollIntoView = function () {
          var t, e, n;
          !0 !== i(arguments[0])
            ? ((e = (t = (function (t) {
                for (
                  ;
                  t !== u.body &&
                  !1 ===
                    ((e = a((n = t), "Y") && f(n, "Y")),
                    (n = a(n, "X") && f(n, "X")),
                    e || n);

                )
                  t = t.parentNode || t.host;
                var e, n;
                return t;
              })(this)).getBoundingClientRect()),
              (n = this.getBoundingClientRect()),
              t !== u.body
                ? (r.call(
                    this,
                    t,
                    t.scrollLeft + n.left - e.left,
                    t.scrollTop + n.top - e.top
                  ),
                  "fixed" !== c.getComputedStyle(t).position &&
                    c.scrollBy({
                      left: e.left,
                      top: e.top,
                      behavior: "smooth",
                    }))
                : c.scrollBy({ left: n.left, top: n.top, behavior: "smooth" }))
            : l.scrollIntoView.call(
                this,
                void 0 === arguments[0] || arguments[0]
              );
        }));
    }
    "object" ==
      ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
    "undefined" != typeof module
      ? (module.exports = { polyfill: t })
      : t();
  })(),
  (function (t, i) {
    "use strict";
    "function" != typeof t.CustomEvent &&
      ((t.CustomEvent = function (t, e) {
        e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
        var n = i.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }),
      (t.CustomEvent.prototype = t.Event.prototype)),
      i.addEventListener(
        "touchstart",
        function (t) {
          "true" !== t.target.getAttribute("data-swipe-ignore") &&
            ((u = t.target),
            (c = Date.now()),
            (r = t.touches[0].clientX),
            (a = t.touches[0].clientY),
            (s = l = 0));
        },
        !1
      ),
      i.addEventListener(
        "touchmove",
        function (t) {
          var e;
          r &&
            a &&
            ((e = t.touches[0].clientX),
            (t = t.touches[0].clientY),
            (l = r - e),
            (s = a - t));
        },
        !1
      ),
      i.addEventListener(
        "touchend",
        function (t) {
          var e, n, o, i;
          u === t.target &&
            ((i = parseInt(d(u, "data-swipe-threshold", "20"), 10)),
            (e = parseInt(d(u, "data-swipe-timeout", "500"), 10)),
            (n = Date.now() - c),
            (o = ""),
            (t = t.changedTouches || t.touches || []),
            Math.abs(l) > Math.abs(s)
              ? Math.abs(l) > i &&
                n < e &&
                (o = 0 < l ? "swiped-left" : "swiped-right")
              : Math.abs(s) > i &&
                n < e &&
                (o = 0 < s ? "swiped-up" : "swiped-down"),
            "" !== o &&
              ((i = {
                dir: o.replace(/swiped-/, ""),
                touchType: (t[0] || {}).touchType || "direct",
                xStart: parseInt(r, 10),
                xEnd: parseInt((t[0] || {}).clientX || -1, 10),
                yStart: parseInt(a, 10),
                yEnd: parseInt((t[0] || {}).clientY || -1, 10),
              }),
              u.dispatchEvent(
                new CustomEvent("swiped", {
                  bubbles: !0,
                  cancelable: !0,
                  detail: i,
                })
              ),
              u.dispatchEvent(
                new CustomEvent(o, { bubbles: !0, cancelable: !0, detail: i })
              )),
            (c = a = r = null));
        },
        !1
      );
    var r = null,
      a = null,
      l = null,
      s = null,
      c = null,
      u = null;
    function d(t, e, n) {
      for (; t && t !== i.documentElement; ) {
        var o = t.getAttribute(e);
        if (o) return o;
        t = t.parentNode;
      }
      return n;
    }
  })(window, document);
var MBS = (function () {
  console.log("Marcus Barnett Studio by Aloof.Studio");
  var n = window.matchMedia("(orientation: portrait)"),
    u = "IntersectionObserver" in window,
    o =
      ("ontouchstart" in window ||
        0 < navigator.maxTouchPoints ||
        navigator.msMaxTouchPoints,
      document.documentElement),
    t = document.body,
    d = document.querySelector("main"),
    f =
      (t.querySelector("section:last-of-type"),
      "index" === t.getAttribute("id")),
    p = {
      init: function () {
        var t = _.throttle(I.updateBrowserHeight, 250),
          e = _.throttle(I.scroll, 250);
        window.addEventListener("load", function (t) {
          m();
        }),
          window.addEventListener("scroll", e, { passive: !0 }),
          window.addEventListener("resize", t);
        try {
          n.addEventListener("change", function (t) {
            i.orientation.setOrientation(t);
          });
        } catch (t) {
          n.addListener(i.orientation.setOrientation);
        }
        i.orientation.setOrientation(n);
      },
      load: m,
    };
  function m() {
    o.classList.add("loaded");
  }
  var y,
    v,
    h,
    g,
    i = {
      init: function () {
        g.setOrientation(n);
      },
      setRootVars: (h = function (t) {
        o.style.cssText = "--vh:".concat(t, "px;");
      }),
      updateBrowserHeight: b,
      vh: function () {
        return y;
      },
      orientation: (g = {
        currentOrientation: function () {
          return v;
        },
        setOrientation: function (t) {
          t = t.matches ? "portrait" : "landscape";
          w((v = t)), b();
        },
      }),
    };
  function b(t) {
    var e = window.innerHeight;
    e !== y && (h((y = e)), "function" == typeof t && requestAnimationFrame(t));
  }
  function w(t) {
    o.classList.remove("landscape", "portrait"), o.classList.add(t);
  }
  (e = document.getElementById("menu_panel")),
    (r = document.getElementById("menu_button")),
    (E = "MENU"),
    (z = "CLOSE"),
    (a = document.getElementById("newsletter_trigger")),
    (L = document.getElementById("newsletter_form")),
    (l = !1),
    (s = function () {
      t.classList.remove("menu_open"), (r.innerHTML = E), (l = !1);
    }),
    (C = function () {
      a.classList.remove("hidden"), L.classList.add("hidden");
    });
  var e,
    r,
    E,
    z,
    a,
    L,
    l,
    A,
    s,
    C,
    S = {
      init: function () {
        x(), null !== a && O();
      },
      $menu: e,
      isopen: function () {
        return l;
      },
      toggle: (A = function () {
        (!1 === l ? T : s)();
      }),
    };
  function T() {
    t.classList.add("menu_open"), (r.innerHTML = z), (l = !0);
  }
  function x() {
    r.addEventListener("click", function (t) {
      t.preventDefault(), A(), C();
    }),
      e.addEventListener("swiped-down", function (t) {
        s();
      }),
      e.addEventListener("swiped-up", function (t) {
        s();
      });
  }
  function O() {
    a.addEventListener("click", function (t) {
      t.preventDefault(),
        this.classList.add("hidden"),
        L.classList.remove("hidden");
    });
  }
  M = document.querySelector(".slideshow");
  var M,
    B,
    N,
    c,
    j = {
      init: function () {
        0 !== M.length &&
          M.querySelectorAll("li").forEach(function (t, e) {
            t.addEventListener("animationend", function (t) {
              return M.appendChild(t.target);
            });
          });
      },
    },
    I =
      ((c = 0),
      {
        rootVh: function () {
          return B;
        },
        cachedYPos: function () {
          return c;
        },
        yPos: q,
        position: F,
        scroll: function () {
          var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 250,
            e = 1 < arguments.length ? arguments[1] : void 0,
            n = q(),
            o = n < c ? "up" : "down";
          (c = n),
            0 < t
              ? (clearTimeout(N),
                (N = setTimeout(function () {
                  (c = n),
                    requestAnimationFrame(function () {
                      X(F(), o);
                    });
                }, t)))
              : requestAnimationFrame(function () {
                  X(F(), o);
                }),
            "function" == typeof e && requestAnimationFrame(e);
        },
        updateBrowserHeight: function () {
          var t = Y();
          t !== B && ((B = t), i.setRootVars(B));
        },
        docH: H,
        winH: Y,
      });
  function q() {
    return (
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop
    );
  }
  function H() {
    return d.clientHeight;
  }
  function Y() {
    return window.innerHeight;
  }
  function F() {
    var t = "middle";
    return 0 === c ? (t = "top") : c > H() - Y() - 100 && (t = "bottom"), t;
  }
  function X(t, e) {
    var n = o.classList;
    (n.contains(t) && n.contains(e)) ||
      (n.remove("top", "middle", "bottom", "up", "down"), n.add(t, e));
  }
  P = document.getElementById("down");
  var P,
    R = {
      init: function () {
        P &&
          P.addEventListener("click", function (t) {
            t.preventDefault(), d.classList.add("manual"), W("resolved");
          });
      },
      nextModule: W,
    };
  function W(t) {
    var e = (
        2 < (e = document.getElementsByClassName("in-view")).length
          ? e[1]
          : e[0]
      ).nextElementSibling,
      n =
        I.yPos() +
        e.getBoundingClientRect().top +
        e.getBoundingClientRect().height / 2 -
        window.innerHeight / 2;
    requestAnimationFrame(function () {
      window.scroll({ top: n, left: 0, behavior: "smooth" });
    }),
      "function" == typeof t && requestAnimationFrame(t);
  }
  (k = d.querySelectorAll("section[data-module-num]")),
    (V = Array.from(k)),
    (U = { rootMargin: "-25% 0px -25% 0px" }),
    (J = "in-view");
  var D,
    k,
    V,
    $,
    U,
    J,
    G = {
      init: function () {
        K(),
          V.forEach(function (t) {
            var e = new (t.classList.contains("film") ? Z : Q)(t);
            e.init(), $.push(e), D.observe(t);
          });
      },
      slides: ($ = []),
      slideCount: function () {
        return $.length;
      },
    };
  function K() {
    return (D = new IntersectionObserver(function (t, e) {
      t.forEach(function (t) {
        var e = t.target,
          n =
            null !== (n = e.getAttribute("data-module-num")) &&
            void 0 !== n &&
            n,
          n = $[n - 1];
        t.isIntersecting
          ? (e.classList.add(J),
            n.playable && "autoplay" == n.playstyle && n.play())
          : (e.classList.remove(J), n.playable && n.pause());
      });
    }, U));
  }
  function Q(t) {
    var e = t,
      n = e.getAttribute("data-module-num");
    return {
      init: function () {},
      elem: e,
      type: "static",
      playable: !1,
      index: n,
      content:
        null !== (e = t.getElementsByTagName("IMG")[0]) && void 0 !== e ? e : t,
    };
  }
  function Z(t) {
    function e() {
      n.addEventListener("canplaythrough", function (t) {
        l = !0;
      }),
        n.addEventListener("ended", function (t) {
          s();
        }),
        i.addEventListener("click", function (t) {
          console.log("play", a), (a ? s : c)();
        });
    }
    t.getAttribute("data-module-num");
    var n = t.getElementsByTagName("VIDEO")[0],
      o = n.classList.contains("playstyle-od") ? "ondemand" : "autoplay",
      i = n.parentNode,
      r = !0,
      a = !1,
      l = !1,
      s = function () {
        r || ((a = !(r = !0)), n.pause(), i.classList.remove("playing"));
      },
      c = function (t) {
        var e;
        !n.paused ||
          (void 0 !== (e = n.play()) &&
            e
              .then(function (t) {
                (a = !(r = !1)), i.classList.add("playing");
              })
              .catch(function (t) {
                (a = !(r = !0)), i.classList.remove("playing");
              })),
          "function" == typeof t && t();
      };
    return {
      init: function () {
        e();
      },
      type: "film",
      playstyle: o,
      playable: !0,
      elem: t,
      film: n,
      loaded: function () {
        return l;
      },
      play: c,
      pause: s,
      isPlaying: function () {
        return a;
      },
      isPaused: function () {
        return r;
      },
      content: n,
    };
  }
  tt = document.querySelectorAll(".obfs")[0];
  var tt,
    et = {
      deObfuscate: function () {
        if (void 0 !== (e = tt) && null != e) {
          for (
            var t,
              e,
              n = e,
              o = "",
              i = n.getAttribute("data-text"),
              r = n.getAttribute("data-coded"),
              a = n.getAttribute("data-key"),
              l = r.length,
              s = 0;
            s < r.length;
            s++
          )
            -1 == a.indexOf(r.charAt(s))
              ? (o += t = r.charAt(s))
              : ((t = (a.indexOf(r.charAt(s)) - l + a.length) % a.length),
                (o += a.charAt(t)));
          (e =
            "<a href='mailto:" + o + "'>" + (i = null != i ? i : o) + "</a>"),
            (n.innerHTML = e);
        }
      },
    };
  return {
    init: function () {
      o.classList.add("js"),
        o.classList.remove("no-js"),
        i.init(),
        S.init(),
        f && j.init(),
        u && (p.init(), G.init(), R.init()),
        et.deObfuscate();
    },
    menu: S,
  };
})();
"loading" !== document.readyState
  ? MBS.init()
  : window.addEventListener("DOMContentLoaded", MBS.init);

// JSDOM
document.querySelector(".mbs img").addEventListener("mouseenter", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 0.3s ease";
});

document.querySelector(".mbs img").addEventListener("mouseleave", function () {
  this.style.transform = "scale(1)";
});

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

setInterval(nextSlide, 3000);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft")
    showSlide((currentSlide - 1 + slides.length) % slides.length);
});

window.addEventListener("scroll", () => {
  parallaxImages.forEach((img) => {
    const speed = 0.5;
    const yPos = -window.scrollY * speed;
    img.style.transform = `translateY(${yPos}px)`;
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    const nextBtn = document.querySelector("#next");
    if (nextBtn) nextBtn.click();
  }
  if (e.key === "ArrowLeft") {
    const prevBtn = document.querySelector("#previous");
    if (prevBtn) prevBtn.click();
  }
});

const menuBtn = document.querySelector("#menu_button");
menuBtn.addEventListener("mouseenter", () => {
  menuBtn.style.transform = "rotate(360deg)";
  menuBtn.style.transition = "transform 0.3s ease";
});

menuBtn.addEventListener("mouseleave", () => {
  menuBtn.style.transform = "rotate(0)";
});
