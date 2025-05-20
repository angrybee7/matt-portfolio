const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
      (m.f = [
        "assets/performance-metrics-BwBoEVeK.js",
        "assets/animations-xibHvm8h.js",
        "assets/vendor-DzhIbF5s.js",
      ]),
  ) => i.map((i) => d[i]);
  import { j as e, m as t, A as n, u as r } from "./animations-xibHvm8h.js";
  import {
    a,
    b as l,
    r as i,
    c as o,
    R as s,
    O as u,
  } from "./vendor-DzhIbF5s.js";
  !(function () {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
      for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        t(e);
      new MutationObserver((e) => {
        for (const n of e)
          if ("childList" === n.type)
            for (const e of n.addedNodes)
              "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
      }).observe(document, { childList: !0, subtree: !0 });
    }
    function t(e) {
      if (e.ep) return;
      e.ep = !0;
      const t = (function (e) {
        const t = {};
        return (
          e.integrity && (t.integrity = e.integrity),
          e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
          "use-credentials" === e.crossOrigin
            ? (t.credentials = "include")
            : "anonymous" === e.crossOrigin
              ? (t.credentials = "omit")
              : (t.credentials = "same-origin"),
          t
        );
      })(e);
      fetch(e.href, t);
    }
  })();
  var c,
    d,
    f,
    p,
    m = { exports: {} },
    h = {},
    g = { exports: {} },
    y = {};
  function v() {
    return (
      d ||
        ((d = 1),
        (g.exports =
          (c ||
            ((c = 1),
            (function (e) {
              function t(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                  var r = (n - 1) >>> 1,
                    l = e[r];
                  if (!(0 < a(l, t))) break e;
                  (e[r] = t), (e[n] = l), (n = r);
                }
              }
              function n(e) {
                return 0 === e.length ? null : e[0];
              }
              function r(e) {
                if (0 === e.length) return null;
                var t = e[0],
                  n = e.pop();
                if (n !== t) {
                  e[0] = n;
                  e: for (var r = 0, l = e.length, i = l >>> 1; r < i; ) {
                    var o = 2 * (r + 1) - 1,
                      s = e[o],
                      u = o + 1,
                      c = e[u];
                    if (0 > a(s, n))
                      u < l && 0 > a(c, s)
                        ? ((e[r] = c), (e[u] = n), (r = u))
                        : ((e[r] = s), (e[o] = n), (r = o));
                    else {
                      if (!(u < l && 0 > a(c, n))) break e;
                      (e[r] = c), (e[u] = n), (r = u);
                    }
                  }
                }
                return t;
              }
              function a(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
              }
              if (
                ((e.unstable_now = void 0),
                "object" == typeof performance &&
                  "function" == typeof performance.now)
              ) {
                var l = performance;
                e.unstable_now = function () {
                  return l.now();
                };
              } else {
                var i = Date,
                  o = i.now();
                e.unstable_now = function () {
                  return i.now() - o;
                };
              }
              var s = [],
                u = [],
                c = 1,
                d = null,
                f = 3,
                p = !1,
                m = !1,
                h = !1,
                g = !1,
                y = "function" == typeof setTimeout ? setTimeout : null,
                v = "function" == typeof clearTimeout ? clearTimeout : null,
                b = "undefined" != typeof setImmediate ? setImmediate : null;
              function x(e) {
                for (var a = n(u); null !== a; ) {
                  if (null === a.callback) r(u);
                  else {
                    if (!(a.startTime <= e)) break;
                    r(u), (a.sortIndex = a.expirationTime), t(s, a);
                  }
                  a = n(u);
                }
              }
              function w(e) {
                if (((h = !1), x(e), !m))
                  if (null !== n(s)) (m = !0), S || ((S = !0), k());
                  else {
                    var t = n(u);
                    null !== t && T(w, t.startTime - e);
                  }
              }
              var k,
                S = !1,
                N = -1,
                j = 5,
                E = -1;
              function C() {
                return !(!g && e.unstable_now() - E < j);
              }
              function z() {
                if (((g = !1), S)) {
                  var t = e.unstable_now();
                  E = t;
                  var a = !0;
                  try {
                    e: {
                      (m = !1), h && ((h = !1), v(N), (N = -1)), (p = !0);
                      var l = f;
                      try {
                        t: {
                          for (
                            x(t), d = n(s);
                            null !== d && !(d.expirationTime > t && C());
  
                          ) {
                            var i = d.callback;
                            if ("function" == typeof i) {
                              (d.callback = null), (f = d.priorityLevel);
                              var o = i(d.expirationTime <= t);
                              if (
                                ((t = e.unstable_now()), "function" == typeof o)
                              ) {
                                (d.callback = o), x(t), (a = !0);
                                break t;
                              }
                              d === n(s) && r(s), x(t);
                            } else r(s);
                            d = n(s);
                          }
                          if (null !== d) a = !0;
                          else {
                            var c = n(u);
                            null !== c && T(w, c.startTime - t), (a = !1);
                          }
                        }
                        break e;
                      } finally {
                        (d = null), (f = l), (p = !1);
                      }
                      a = void 0;
                    }
                  } finally {
                    a ? k() : (S = !1);
                  }
                }
              }
              if ("function" == typeof b)
                k = function () {
                  b(z);
                };
              else if ("undefined" != typeof MessageChannel) {
                var P = new MessageChannel(),
                  L = P.port2;
                (P.port1.onmessage = z),
                  (k = function () {
                    L.postMessage(null);
                  });
              } else
                k = function () {
                  y(z, 0);
                };
              function T(t, n) {
                N = y(function () {
                  t(e.unstable_now());
                }, n);
              }
              (e.unstable_IdlePriority = 5),
                (e.unstable_ImmediatePriority = 1),
                (e.unstable_LowPriority = 4),
                (e.unstable_NormalPriority = 3),
                (e.unstable_Profiling = null),
                (e.unstable_UserBlockingPriority = 2),
                (e.unstable_cancelCallback = function (e) {
                  e.callback = null;
                }),
                (e.unstable_forceFrameRate = function (e) {
                  0 > e || 125 < e || (j = 0 < e ? Math.floor(1e3 / e) : 5);
                }),
                (e.unstable_getCurrentPriorityLevel = function () {
                  return f;
                }),
                (e.unstable_next = function (e) {
                  switch (f) {
                    case 1:
                    case 2:
                    case 3:
                      var t = 3;
                      break;
                    default:
                      t = f;
                  }
                  var n = f;
                  f = t;
                  try {
                    return e();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_requestPaint = function () {
                  g = !0;
                }),
                (e.unstable_runWithPriority = function (e, t) {
                  switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break;
                    default:
                      e = 3;
                  }
                  var n = f;
                  f = e;
                  try {
                    return t();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_scheduleCallback = function (r, a, l) {
                  var i = e.unstable_now();
                  switch (
                    ((l =
                      "object" == typeof l &&
                      null !== l &&
                      "number" == typeof (l = l.delay) &&
                      0 < l
                        ? i + l
                        : i),
                    r)
                  ) {
                    case 1:
                      var o = -1;
                      break;
                    case 2:
                      o = 250;
                      break;
                    case 5:
                      o = 1073741823;
                      break;
                    case 4:
                      o = 1e4;
                      break;
                    default:
                      o = 5e3;
                  }
                  return (
                    (r = {
                      id: c++,
                      callback: a,
                      priorityLevel: r,
                      startTime: l,
                      expirationTime: (o = l + o),
                      sortIndex: -1,
                    }),
                    l > i
                      ? ((r.sortIndex = l),
                        t(u, r),
                        null === n(s) &&
                          r === n(u) &&
                          (h ? (v(N), (N = -1)) : (h = !0), T(w, l - i)))
                      : ((r.sortIndex = o),
                        t(s, r),
                        m || p || ((m = !0), S || ((S = !0), k()))),
                    r
                  );
                }),
                (e.unstable_shouldYield = C),
                (e.unstable_wrapCallback = function (e) {
                  var t = f;
                  return function () {
                    var n = f;
                    f = t;
                    try {
                      return e.apply(this, arguments);
                    } finally {
                      f = n;
                    }
                  };
                });
            })(y)),
          y))),
      g.exports
    );
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function b() {
    if (f) return h;
    f = 1;
    var e = v(),
      t = a(),
      n = l();
    function r(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function i(e) {
      return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function s(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function u(e) {
      if (o(e) !== e) throw Error(r(188));
    }
    function c(e) {
      var t = e.tag;
      if (5 === t || 26 === t || 27 === t || 6 === t) return e;
      for (e = e.child; null !== e; ) {
        if (null !== (t = c(e))) return t;
        e = e.sibling;
      }
      return null;
    }
    var d = Object.assign,
      p = Symbol.for("react.element"),
      m = Symbol.for("react.transitional.element"),
      g = Symbol.for("react.portal"),
      y = Symbol.for("react.fragment"),
      b = Symbol.for("react.strict_mode"),
      x = Symbol.for("react.profiler"),
      w = Symbol.for("react.provider"),
      k = Symbol.for("react.consumer"),
      S = Symbol.for("react.context"),
      N = Symbol.for("react.forward_ref"),
      j = Symbol.for("react.suspense"),
      E = Symbol.for("react.suspense_list"),
      C = Symbol.for("react.memo"),
      z = Symbol.for("react.lazy"),
      P = Symbol.for("react.activity"),
      L = Symbol.for("react.memo_cache_sentinel"),
      T = Symbol.iterator;
    function M(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (T && e[T]) || e["@@iterator"])
          ? e
          : null;
    }
    var _ = Symbol.for("react.client.reference");
    function F(e) {
      if (null == e) return null;
      if ("function" == typeof e)
        return e.$$typeof === _ ? null : e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case y:
          return "Fragment";
        case x:
          return "Profiler";
        case b:
          return "StrictMode";
        case j:
          return "Suspense";
        case E:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case g:
            return "Portal";
          case S:
            return (e.displayName || "Context") + ".Provider";
          case k:
            return (e._context.displayName || "Context") + ".Consumer";
          case N:
            var t = e.render;
            return (
              (e = e.displayName) ||
                (e =
                  "" !== (e = t.displayName || t.name || "")
                    ? "ForwardRef(" + e + ")"
                    : "ForwardRef"),
              e
            );
          case C:
            return null !== (t = e.displayName || null) ? t : F(e.type) || "Memo";
          case z:
            (t = e._payload), (e = e._init);
            try {
              return F(e(t));
            } catch (n) {}
        }
      return null;
    }
    var A = Array.isArray,
      O = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      I = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = { pending: !1, data: null, method: null, action: null },
      R = [],
      $ = -1;
    function U(e) {
      return { current: e };
    }
    function q(e) {
      0 > $ || ((e.current = R[$]), (R[$] = null), $--);
    }
    function H(e, t) {
      $++, (R[$] = e.current), (e.current = t);
    }
    var B = U(null),
      V = U(null),
      W = U(null),
      Q = U(null);
    function Y(e, t) {
      switch ((H(W, t), H(V, e), H(B, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? id(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) e = od((t = id(t)), e);
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      q(B), H(B, e);
    }
    function X() {
      q(B), q(V), q(W);
    }
    function G(e) {
      null !== e.memoizedState && H(Q, e);
      var t = B.current,
        n = od(t, e.type);
      t !== n && (H(V, e), H(B, n));
    }
    function K(e) {
      V.current === e && (q(B), q(V)),
        Q.current === e && (q(Q), (Gd._currentValue = D));
    }
    var Z = Object.prototype.hasOwnProperty,
      J = e.unstable_scheduleCallback,
      ee = e.unstable_cancelCallback,
      te = e.unstable_shouldYield,
      ne = e.unstable_requestPaint,
      re = e.unstable_now,
      ae = e.unstable_getCurrentPriorityLevel,
      le = e.unstable_ImmediatePriority,
      ie = e.unstable_UserBlockingPriority,
      oe = e.unstable_NormalPriority,
      se = e.unstable_LowPriority,
      ue = e.unstable_IdlePriority,
      ce = e.log,
      de = e.unstable_setDisableYieldValue,
      fe = null,
      pe = null;
    function me(e) {
      if (
        ("function" == typeof ce && de(e),
        pe && "function" == typeof pe.setStrictMode)
      )
        try {
          pe.setStrictMode(fe, e);
        } catch (t) {}
    }
    var he = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === (e >>>= 0) ? 32 : (31 - ((ge(e) / ye) | 0)) | 0;
          },
      ge = Math.log,
      ye = Math.LN2;
    var ve = 256,
      be = 4194304;
    function xe(e) {
      var t = 42 & e;
      if (0 !== t) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194048 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return 62914560 & e;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function we(e, t, n) {
      var r = e.pendingLanes;
      if (0 === r) return 0;
      var a = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes;
      e = e.warmLanes;
      var o = 134217727 & r;
      return (
        0 !== o
          ? 0 !== (r = o & ~l)
            ? (a = xe(r))
            : 0 !== (i &= o)
              ? (a = xe(i))
              : n || (0 !== (n = o & ~e) && (a = xe(n)))
          : 0 !== (o = r & ~l)
            ? (a = xe(o))
            : 0 !== i
              ? (a = xe(i))
              : n || (0 !== (n = r & ~e) && (a = xe(n))),
        0 === a
          ? 0
          : 0 !== t &&
              t !== a &&
              !(t & l) &&
              ((l = a & -a) >= (n = t & -t) || (32 === l && 4194048 & n))
            ? t
            : a
      );
    }
    function ke(e, t) {
      return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
    }
    function Se(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        default:
          return -1;
      }
    }
    function Ne() {
      var e = ve;
      return !(4194048 & (ve <<= 1)) && (ve = 256), e;
    }
    function je() {
      var e = be;
      return !(62914560 & (be <<= 1)) && (be = 4194304), e;
    }
    function Ee(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ce(e, t) {
      (e.pendingLanes |= t),
        268435456 !== t &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function ze(e, t, n) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var r = 31 - he(t);
      (e.entangledLanes |= t),
        (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194090 & n));
    }
    function Pe(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - he(n),
          a = 1 << r;
        (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
      }
    }
    function Le(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Te(e) {
      return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
    }
    function Me() {
      var e = I.p;
      return 0 !== e ? e : void 0 === (e = window.event) ? 32 : ff(e.type);
    }
    var _e = Math.random().toString(36).slice(2),
      Fe = "__reactFiber$" + _e,
      Ae = "__reactProps$" + _e,
      Oe = "__reactContainer$" + _e,
      Ie = "__reactEvents$" + _e,
      De = "__reactListeners$" + _e,
      Re = "__reactHandles$" + _e,
      $e = "__reactResources$" + _e,
      Ue = "__reactMarker$" + _e;
    function qe(e) {
      delete e[Fe], delete e[Ae], delete e[Ie], delete e[De], delete e[Re];
    }
    function He(e) {
      var t = e[Fe];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[Oe] || n[Fe])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = wd(e); null !== e; ) {
              if ((n = e[Fe])) return n;
              e = wd(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function Be(e) {
      if ((e = e[Fe] || e[Oe])) {
        var t = e.tag;
        if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t)
          return e;
      }
      return null;
    }
    function Ve(e) {
      var t = e.tag;
      if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
      throw Error(r(33));
    }
    function We(e) {
      var t = e[$e];
      return (
        t ||
          (t = e[$e] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function Qe(e) {
      e[Ue] = !0;
    }
    var Ye = new Set(),
      Xe = {};
    function Ge(e, t) {
      Ke(e, t), Ke(e + "Capture", t);
    }
    function Ke(e, t) {
      for (Xe[e] = t, e = 0; e < t.length; e++) Ye.add(t[e]);
    }
    var Ze,
      Je,
      et = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      tt = {},
      nt = {};
    function rt(e, t, n) {
      if (
        ((a = t),
        Z.call(nt, a) ||
          (!Z.call(tt, a) && (et.test(a) ? (nt[a] = !0) : ((tt[a] = !0), 0))))
      )
        if (null === n) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
              return void e.removeAttribute(t);
            case "boolean":
              var r = t.toLowerCase().slice(0, 5);
              if ("data-" !== r && "aria-" !== r)
                return void e.removeAttribute(t);
          }
          e.setAttribute(t, "" + n);
        }
      var a;
    }
    function at(e, t, n) {
      if (null === n) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return void e.removeAttribute(t);
        }
        e.setAttribute(t, "" + n);
      }
    }
    function lt(e, t, n, r) {
      if (null === r) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return void e.removeAttribute(n);
        }
        e.setAttributeNS(t, n, "" + r);
      }
    }
    function it(e) {
      if (void 0 === Ze)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          (Ze = (t && t[1]) || ""),
            (Je =
              -1 < n.stack.indexOf("\n    at")
                ? " (<anonymous>)"
                : -1 < n.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : "");
        }
      return "\n" + Ze + e + Je;
    }
    var ot = !1;
    function st(e, t) {
      if (!e || ot) return "";
      ot = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (a) {
                    var r = a;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (l) {
                    r = l;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (i) {
                  r = i;
                }
                (n = e()) &&
                  "function" == typeof n.catch &&
                  n.catch(function () {});
              }
            } catch (o) {
              if (o && r && "string" == typeof o.stack) return [o.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          r.DetermineComponentFrameRoot,
          "name",
        );
        a &&
          a.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var l = r.DetermineComponentFrameRoot(),
          i = l[0],
          o = l[1];
        if (i && o) {
          var s = i.split("\n"),
            u = o.split("\n");
          for (
            a = r = 0;
            r < s.length && !s[r].includes("DetermineComponentFrameRoot");
  
          )
            r++;
          for (; a < u.length && !u[a].includes("DetermineComponentFrameRoot"); )
            a++;
          if (r === s.length || a === u.length)
            for (
              r = s.length - 1, a = u.length - 1;
              1 <= r && 0 <= a && s[r] !== u[a];
  
            )
              a--;
          for (; 1 <= r && 0 <= a; r--, a--)
            if (s[r] !== u[a]) {
              if (1 !== r || 1 !== a)
                do {
                  if ((r--, 0 > --a || s[r] !== u[a])) {
                    var c = "\n" + s[r].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        c.includes("<anonymous>") &&
                        (c = c.replace("<anonymous>", e.displayName)),
                      c
                    );
                  }
                } while (1 <= r && 0 <= a);
              break;
            }
        }
      } finally {
        (ot = !1), (Error.prepareStackTrace = n);
      }
      return (n = e ? e.displayName || e.name : "") ? it(n) : "";
    }
    function ut(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return it(e.type);
        case 16:
          return it("Lazy");
        case 13:
          return it("Suspense");
        case 19:
          return it("SuspenseList");
        case 0:
        case 15:
          return st(e.type, !1);
        case 11:
          return st(e.type.render, !1);
        case 1:
          return st(e.type, !0);
        case 31:
          return it("Activity");
        default:
          return "";
      }
    }
    function ct(e) {
      try {
        var t = "";
        do {
          (t += ut(e)), (e = e.return);
        } while (e);
        return t;
      } catch (n) {
        return "\nError generating stack: " + n.message + "\n" + n.stack;
      }
    }
    function dt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ft(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function pt(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = ft(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var a = n.get,
              l = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return a.call(this);
                },
                set: function (e) {
                  (r = "" + e), l.call(this, e);
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[t];
                },
              }
            );
          }
        })(e));
    }
    function mt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = ft(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ht(e) {
      if (
        void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var gt = /[\n"\\]/g;
    function yt(e) {
      return e.replace(gt, function (e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function vt(e, t, n, r, a, l, i, o) {
      (e.name = ""),
        null != i &&
        "function" != typeof i &&
        "symbol" != typeof i &&
        "boolean" != typeof i
          ? (e.type = i)
          : e.removeAttribute("type"),
        null != t
          ? "number" === i
            ? ((0 === t && "" === e.value) || e.value != t) &&
              (e.value = "" + dt(t))
            : e.value !== "" + dt(t) && (e.value = "" + dt(t))
          : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
        null != t
          ? xt(e, i, dt(t))
          : null != n
            ? xt(e, i, dt(n))
            : null != r && e.removeAttribute("value"),
        null == a && null != l && (e.defaultChecked = !!l),
        null != a &&
          (e.checked = a && "function" != typeof a && "symbol" != typeof a),
        null != o &&
        "function" != typeof o &&
        "symbol" != typeof o &&
        "boolean" != typeof o
          ? (e.name = "" + dt(o))
          : e.removeAttribute("name");
    }
    function bt(e, t, n, r, a, l, i, o) {
      if (
        (null != l &&
          "function" != typeof l &&
          "symbol" != typeof l &&
          "boolean" != typeof l &&
          (e.type = l),
        null != t || null != n)
      ) {
        if (("submit" === l || "reset" === l) && null == t) return;
        (n = null != n ? "" + dt(n) : ""),
          (t = null != t ? "" + dt(t) : n),
          o || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (r =
        "function" != typeof (r = null != r ? r : a) &&
        "symbol" != typeof r &&
        !!r),
        (e.checked = o ? e.checked : !!r),
        (e.defaultChecked = !!r),
        null != i &&
          "function" != typeof i &&
          "symbol" != typeof i &&
          "boolean" != typeof i &&
          (e.name = i);
    }
    function xt(e, t, n) {
      ("number" === t && ht(e.ownerDocument) === e) ||
        e.defaultValue === "" + n ||
        (e.defaultValue = "" + n);
    }
    function wt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
        for (n = 0; n < e.length; n++)
          (a = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== a && (e[n].selected = a),
            a && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + dt(n), t = null, a = 0; a < e.length; a++) {
          if (e[a].value === n)
            return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
          null !== t || e[a].disabled || (t = e[a]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function kt(e, t, n) {
      null == t || ((t = "" + dt(t)) !== e.value && (e.value = t), null != n)
        ? (e.defaultValue = null != n ? "" + dt(n) : "")
        : e.defaultValue !== t && (e.defaultValue = t);
    }
    function St(e, t, n, a) {
      if (null == t) {
        if (null != a) {
          if (null != n) throw Error(r(92));
          if (A(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          n = a;
        }
        null == n && (n = ""), (t = n);
      }
      (n = dt(t)),
        (e.defaultValue = n),
        (a = e.textContent) === n && "" !== a && null !== a && (e.value = a);
    }
    function Nt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    var jt = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function Et(e, t, n) {
      var r = 0 === t.indexOf("--");
      null == n || "boolean" == typeof n || "" === n
        ? r
          ? e.setProperty(t, "")
          : "float" === t
            ? (e.cssFloat = "")
            : (e[t] = "")
        : r
          ? e.setProperty(t, n)
          : "number" != typeof n || 0 === n || jt.has(t)
            ? "float" === t
              ? (e.cssFloat = n)
              : (e[t] = ("" + n).trim())
            : (e[t] = n + "px");
    }
    function Ct(e, t, n) {
      if (null != t && "object" != typeof t) throw Error(r(62));
      if (((e = e.style), null != n)) {
        for (var a in n)
          !n.hasOwnProperty(a) ||
            (null != t && t.hasOwnProperty(a)) ||
            (0 === a.indexOf("--")
              ? e.setProperty(a, "")
              : "float" === a
                ? (e.cssFloat = "")
                : (e[a] = ""));
        for (var l in t)
          (a = t[l]), t.hasOwnProperty(l) && n[l] !== a && Et(e, l, a);
      } else for (var i in t) t.hasOwnProperty(i) && Et(e, i, t[i]);
    }
    function zt(e) {
      if (-1 === e.indexOf("-")) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Pt = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      Lt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Tt(e) {
      return Lt.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    var Mt = null;
    function _t(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Ft = null,
      At = null;
    function Ot(e) {
      var t = Be(e);
      if (t && (e = t.stateNode)) {
        var n = e[Ae] || null;
        e: switch (((e = t.stateNode), t.type)) {
          case "input":
            if (
              (vt(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              "radio" === n.type && null != t)
            ) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  'input[name="' + yt("" + t) + '"][type="radio"]',
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var a = n[t];
                if (a !== e && a.form === e.form) {
                  var l = a[Ae] || null;
                  if (!l) throw Error(r(90));
                  vt(
                    a,
                    l.value,
                    l.defaultValue,
                    l.defaultValue,
                    l.checked,
                    l.defaultChecked,
                    l.type,
                    l.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) (a = n[t]).form === e.form && mt(a);
            }
            break e;
          case "textarea":
            kt(e, n.value, n.defaultValue);
            break e;
          case "select":
            null != (t = n.value) && wt(e, !!n.multiple, t, !1);
        }
      }
    }
    var It = !1;
    function Dt(e, t, n) {
      if (It) return e(t, n);
      It = !0;
      try {
        return e(t);
      } finally {
        if (
          ((It = !1),
          (null !== Ft || null !== At) &&
            (Hu(), Ft && ((t = Ft), (e = At), (At = Ft = null), Ot(t), e)))
        )
          for (t = 0; t < e.length; t++) Ot(e[t]);
      }
    }
    function Rt(e, t) {
      var n = e.stateNode;
      if (null === n) return null;
      var a = n[Ae] || null;
      if (null === a) return null;
      n = a[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) ||
            (a = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !a);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(r(231, t, typeof n));
      return n;
    }
    var $t = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      Ut = !1;
    if ($t)
      try {
        var qt = {};
        Object.defineProperty(qt, "passive", {
          get: function () {
            Ut = !0;
          },
        }),
          window.addEventListener("test", qt, qt),
          window.removeEventListener("test", qt, qt);
      } catch (Of) {
        Ut = !1;
      }
    var Ht = null,
      Bt = null,
      Vt = null;
    function Wt() {
      if (Vt) return Vt;
      var e,
        t,
        n = Bt,
        r = n.length,
        a = "value" in Ht ? Ht.value : Ht.textContent,
        l = a.length;
      for (e = 0; e < r && n[e] === a[e]; e++);
      var i = r - e;
      for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
      return (Vt = a.slice(e, 1 < t ? 1 - t : void 0));
    }
    function Qt(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function Yt() {
      return !0;
    }
    function Xt() {
      return !1;
    }
    function Gt(e) {
      function t(t, n, r, a, l) {
        for (var i in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = a),
        (this.target = l),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
        return (
          (this.isDefaultPrevented = (
            null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
          )
            ? Yt
            : Xt),
          (this.isPropagationStopped = Xt),
          this
        );
      }
      return (
        d(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = Yt));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = Yt));
          },
          persist: function () {},
          isPersistent: Yt,
        }),
        t
      );
    }
    var Kt,
      Zt,
      Jt,
      en = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      tn = Gt(en),
      nn = d({}, en, { view: 0, detail: 0 }),
      rn = Gt(nn),
      an = d({}, nn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: gn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== Jt &&
                (Jt && "mousemove" === e.type
                  ? ((Kt = e.screenX - Jt.screenX), (Zt = e.screenY - Jt.screenY))
                  : (Zt = Kt = 0),
                (Jt = e)),
              Kt);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Zt;
        },
      }),
      ln = Gt(an),
      on = Gt(d({}, an, { dataTransfer: 0 })),
      sn = Gt(d({}, nn, { relatedTarget: 0 })),
      un = Gt(d({}, en, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      cn = Gt(
        d({}, en, {
          clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      dn = Gt(d({}, en, { data: 0 })),
      fn = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      pn = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      mn = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function hn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : !!(e = mn[e]) && !!t[e];
    }
    function gn() {
      return hn;
    }
    var yn = Gt(
        d({}, nn, {
          key: function (e) {
            if (e.key) {
              var t = fn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = Qt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
                ? pn[e.keyCode] || "Unidentified"
                : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: gn,
          charCode: function (e) {
            return "keypress" === e.type ? Qt(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? Qt(e)
              : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
          },
        }),
      ),
      vn = Gt(
        d({}, an, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      bn = Gt(
        d({}, nn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: gn,
        }),
      ),
      xn = Gt(d({}, en, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      wn = Gt(
        d({}, an, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      kn = Gt(d({}, en, { newState: 0, oldState: 0 })),
      Sn = [9, 13, 27, 32],
      Nn = $t && "CompositionEvent" in window,
      jn = null;
    $t && "documentMode" in document && (jn = document.documentMode);
    var En = $t && "TextEvent" in window && !jn,
      Cn = $t && (!Nn || (jn && 8 < jn && 11 >= jn)),
      zn = String.fromCharCode(32),
      Pn = !1;
    function Ln(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== Sn.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Tn(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Mn = !1;
    var _n = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Fn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!_n[e.type] : "textarea" === t;
    }
    function An(e, t, n, r) {
      Ft ? (At ? At.push(r) : (At = [r])) : (Ft = r),
        0 < (t = Wc(t, "onChange")).length &&
          ((n = new tn("onChange", "change", null, n, r)),
          e.push({ event: n, listeners: t }));
    }
    var On = null,
      In = null;
    function Dn(e) {
      Dc(e, 0);
    }
    function Rn(e) {
      if (mt(Ve(e))) return e;
    }
    function $n(e, t) {
      if ("change" === e) return t;
    }
    var Un = !1;
    if ($t) {
      var qn;
      if ($t) {
        var Hn = "oninput" in document;
        if (!Hn) {
          var Bn = document.createElement("div");
          Bn.setAttribute("oninput", "return;"),
            (Hn = "function" == typeof Bn.oninput);
        }
        qn = Hn;
      } else qn = !1;
      Un = qn && (!document.documentMode || 9 < document.documentMode);
    }
    function Vn() {
      On && (On.detachEvent("onpropertychange", Wn), (In = On = null));
    }
    function Wn(e) {
      if ("value" === e.propertyName && Rn(In)) {
        var t = [];
        An(t, In, e, _t(e)), Dt(Dn, t);
      }
    }
    function Qn(e, t, n) {
      "focusin" === e
        ? (Vn(), (In = n), (On = t).attachEvent("onpropertychange", Wn))
        : "focusout" === e && Vn();
    }
    function Yn(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return Rn(In);
    }
    function Xn(e, t) {
      if ("click" === e) return Rn(t);
    }
    function Gn(e, t) {
      if ("input" === e || "change" === e) return Rn(t);
    }
    var Kn =
      "function" == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
          };
    function Zn(e, t) {
      if (Kn(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var a = n[r];
        if (!Z.call(t, a) || !Kn(e[a], t[a])) return !1;
      }
      return !0;
    }
    function Jn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function er(e, t) {
      var n,
        r = Jn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Jn(r);
      }
    }
    function tr(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          ((!e || 3 !== e.nodeType) &&
            (t && 3 === t.nodeType
              ? tr(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
      );
    }
    function nr(e) {
      for (
        var t = ht(
          (e =
            null != e &&
            null != e.ownerDocument &&
            null != e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView
              : window).document,
        );
        t instanceof e.HTMLIFrameElement;
  
      ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (r) {
          n = !1;
        }
        if (!n) break;
        t = ht((e = t.contentWindow).document);
      }
      return t;
    }
    function rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var ar = $t && "documentMode" in document && 11 >= document.documentMode,
      lr = null,
      ir = null,
      or = null,
      sr = !1;
    function ur(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
      sr ||
        null == lr ||
        lr !== ht(r) ||
        ("selectionStart" in (r = lr) && rr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (or && Zn(or, r)) ||
          ((or = r),
          0 < (r = Wc(ir, "onSelect")).length &&
            ((t = new tn("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = lr))));
    }
    function cr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var dr = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionrun: cr("Transition", "TransitionRun"),
        transitionstart: cr("Transition", "TransitionStart"),
        transitioncancel: cr("Transition", "TransitionCancel"),
        transitionend: cr("Transition", "TransitionEnd"),
      },
      fr = {},
      pr = {};
    function mr(e) {
      if (fr[e]) return fr[e];
      if (!dr[e]) return e;
      var t,
        n = dr[e];
      for (t in n) if (n.hasOwnProperty(t) && t in pr) return (fr[e] = n[t]);
      return e;
    }
    $t &&
      ((pr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete dr.animationend.animation,
        delete dr.animationiteration.animation,
        delete dr.animationstart.animation),
      "TransitionEvent" in window || delete dr.transitionend.transition);
    var hr = mr("animationend"),
      gr = mr("animationiteration"),
      yr = mr("animationstart"),
      vr = mr("transitionrun"),
      br = mr("transitionstart"),
      xr = mr("transitioncancel"),
      wr = mr("transitionend"),
      kr = new Map(),
      Sr =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function Nr(e, t) {
      kr.set(e, t), Ge(t, [e]);
    }
    Sr.push("scrollEnd");
    var jr = new WeakMap();
    function Er(e, t) {
      if ("object" == typeof e && null !== e) {
        var n = jr.get(e);
        return void 0 !== n
          ? n
          : ((t = { value: e, source: t, stack: ct(t) }), jr.set(e, t), t);
      }
      return { value: e, source: t, stack: ct(t) };
    }
    var Cr = [],
      zr = 0,
      Pr = 0;
    function Lr() {
      for (var e = zr, t = (Pr = zr = 0); t < e; ) {
        var n = Cr[t];
        Cr[t++] = null;
        var r = Cr[t];
        Cr[t++] = null;
        var a = Cr[t];
        Cr[t++] = null;
        var l = Cr[t];
        if (((Cr[t++] = null), null !== r && null !== a)) {
          var i = r.pending;
          null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (r.pending = a);
        }
        0 !== l && Fr(n, a, l);
      }
    }
    function Tr(e, t, n, r) {
      (Cr[zr++] = e),
        (Cr[zr++] = t),
        (Cr[zr++] = n),
        (Cr[zr++] = r),
        (Pr |= r),
        (e.lanes |= r),
        null !== (e = e.alternate) && (e.lanes |= r);
    }
    function Mr(e, t, n, r) {
      return Tr(e, t, n, r), Ar(e);
    }
    function _r(e, t) {
      return Tr(e, null, null, t), Ar(e);
    }
    function Fr(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      null !== r && (r.lanes |= n);
      for (var a = !1, l = e.return; null !== l; )
        (l.childLanes |= n),
          null !== (r = l.alternate) && (r.childLanes |= n),
          22 === l.tag &&
            (null === (e = l.stateNode) || 1 & e._visibility || (a = !0)),
          (e = l),
          (l = l.return);
      return 3 === e.tag
        ? ((l = e.stateNode),
          a &&
            null !== t &&
            ((a = 31 - he(n)),
            null === (r = (e = l.hiddenUpdates)[a]) ? (e[a] = [t]) : r.push(t),
            (t.lane = 536870912 | n)),
          l)
        : null;
    }
    function Ar(e) {
      if (50 < Fu) throw ((Fu = 0), (Au = null), Error(r(185)));
      for (var t = e.return; null !== t; ) t = (e = t).return;
      return 3 === e.tag ? e.stateNode : null;
    }
    var Or = {};
    function Ir(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Dr(e, t, n, r) {
      return new Ir(e, t, n, r);
    }
    function Rr(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function $r(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Dr(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 65011712 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function Ur(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        null === n
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function qr(e, t, n, a, l, i) {
      var o = 0;
      if (((a = e), "function" == typeof e)) Rr(e) && (o = 1);
      else if ("string" == typeof e)
        o = (function (e, t, n) {
          if (1 === n || null != t.itemProp) return !1;
          switch (e) {
            case "meta":
            case "title":
              return !0;
            case "style":
              if (
                "string" != typeof t.precedence ||
                "string" != typeof t.href ||
                "" === t.href
              )
                break;
              return !0;
            case "link":
              if (
                "string" != typeof t.rel ||
                "string" != typeof t.href ||
                "" === t.href ||
                t.onLoad ||
                t.onError
              )
                break;
              return (
                "stylesheet" !== t.rel ||
                ((e = t.disabled), "string" == typeof t.precedence && null == e)
              );
            case "script":
              if (
                t.async &&
                "function" != typeof t.async &&
                "symbol" != typeof t.async &&
                !t.onLoad &&
                !t.onError &&
                t.src &&
                "string" == typeof t.src
              )
                return !0;
          }
          return !1;
        })(e, n, B.current)
          ? 26
          : "html" === e || "head" === e || "body" === e
            ? 27
            : 5;
      else
        e: switch (e) {
          case P:
            return ((e = Dr(31, n, t, l)).elementType = P), (e.lanes = i), e;
          case y:
            return Hr(n.children, l, i, t);
          case b:
            (o = 8), (l |= 24);
            break;
          case x:
            return ((e = Dr(12, n, t, 2 | l)).elementType = x), (e.lanes = i), e;
          case j:
            return ((e = Dr(13, n, t, l)).elementType = j), (e.lanes = i), e;
          case E:
            return ((e = Dr(19, n, t, l)).elementType = E), (e.lanes = i), e;
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case w:
                case S:
                  o = 10;
                  break e;
                case k:
                  o = 9;
                  break e;
                case N:
                  o = 11;
                  break e;
                case C:
                  o = 14;
                  break e;
                case z:
                  (o = 16), (a = null);
                  break e;
              }
            (o = 29),
              (n = Error(r(130, null === e ? "null" : typeof e, ""))),
              (a = null);
        }
      return (
        ((t = Dr(o, n, t, l)).elementType = e), (t.type = a), (t.lanes = i), t
      );
    }
    function Hr(e, t, n, r) {
      return ((e = Dr(7, e, r, t)).lanes = n), e;
    }
    function Br(e, t, n) {
      return ((e = Dr(6, e, null, t)).lanes = n), e;
    }
    function Vr(e, t, n) {
      return (
        ((t = Dr(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Wr = [],
      Qr = 0,
      Yr = null,
      Xr = 0,
      Gr = [],
      Kr = 0,
      Zr = null,
      Jr = 1,
      ea = "";
    function ta(e, t) {
      (Wr[Qr++] = Xr), (Wr[Qr++] = Yr), (Yr = e), (Xr = t);
    }
    function na(e, t, n) {
      (Gr[Kr++] = Jr), (Gr[Kr++] = ea), (Gr[Kr++] = Zr), (Zr = e);
      var r = Jr;
      e = ea;
      var a = 32 - he(r) - 1;
      (r &= ~(1 << a)), (n += 1);
      var l = 32 - he(t) + a;
      if (30 < l) {
        var i = a - (a % 5);
        (l = (r & ((1 << i) - 1)).toString(32)),
          (r >>= i),
          (a -= i),
          (Jr = (1 << (32 - he(t) + a)) | (n << a) | r),
          (ea = l + e);
      } else (Jr = (1 << l) | (n << a) | r), (ea = e);
    }
    function ra(e) {
      null !== e.return && (ta(e, 1), na(e, 1, 0));
    }
    function aa(e) {
      for (; e === Yr; )
        (Yr = Wr[--Qr]), (Wr[Qr] = null), (Xr = Wr[--Qr]), (Wr[Qr] = null);
      for (; e === Zr; )
        (Zr = Gr[--Kr]),
          (Gr[Kr] = null),
          (ea = Gr[--Kr]),
          (Gr[Kr] = null),
          (Jr = Gr[--Kr]),
          (Gr[Kr] = null);
    }
    var la = null,
      ia = null,
      oa = !1,
      sa = null,
      ua = !1,
      ca = Error(r(519));
    function da(e) {
      throw (ya(Er(Error(r(418, "")), e)), ca);
    }
    function fa(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[Fe] = e), (t[Ae] = r), n)) {
        case "dialog":
          Rc("cancel", t), Rc("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rc("load", t);
          break;
        case "video":
        case "audio":
          for (n = 0; n < Oc.length; n++) Rc(Oc[n], t);
          break;
        case "source":
          Rc("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Rc("error", t), Rc("load", t);
          break;
        case "details":
          Rc("toggle", t);
          break;
        case "input":
          Rc("invalid", t),
            bt(
              t,
              r.value,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
              !0,
            ),
            pt(t);
          break;
        case "select":
          Rc("invalid", t);
          break;
        case "textarea":
          Rc("invalid", t), St(t, r.value, r.defaultValue, r.children), pt(t);
      }
      ("string" != typeof (n = r.children) &&
        "number" != typeof n &&
        "bigint" != typeof n) ||
      t.textContent === "" + n ||
      !0 === r.suppressHydrationWarning ||
      Zc(t.textContent, n)
        ? (null != r.popover && (Rc("beforetoggle", t), Rc("toggle", t)),
          null != r.onScroll && Rc("scroll", t),
          null != r.onScrollEnd && Rc("scrollend", t),
          null != r.onClick && (t.onclick = Jc),
          (t = !0))
        : (t = !1),
        t || da(e);
    }
    function pa(e) {
      for (la = e.return; la; )
        switch (la.tag) {
          case 5:
          case 13:
            return void (ua = !1);
          case 27:
          case 3:
            return void (ua = !0);
          default:
            la = la.return;
        }
    }
    function ma(e) {
      if (e !== la) return !1;
      if (!oa) return pa(e), (oa = !0), !1;
      var t,
        n = e.tag;
      if (
        ((t = 3 !== n && 27 !== n) &&
          ((t = 5 === n) &&
            (t =
              !("form" !== (t = e.type) && "button" !== t) ||
              sd(e.type, e.memoizedProps)),
          (t = !t)),
        t && ia && da(e),
        pa(e),
        13 === n)
      ) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(r(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (8 === e.nodeType)
              if ("/$" === (t = e.data)) {
                if (0 === n) {
                  ia = bd(e.nextSibling);
                  break e;
                }
                n--;
              } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
            e = e.nextSibling;
          }
          ia = null;
        }
      } else
        27 === n
          ? ((n = ia), hd(e.type) ? ((e = xd), (xd = null), (ia = e)) : (ia = n))
          : (ia = la ? bd(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ha() {
      (ia = la = null), (oa = !1);
    }
    function ga() {
      var e = sa;
      return (
        null !== e &&
          (null === wu ? (wu = e) : wu.push.apply(wu, e), (sa = null)),
        e
      );
    }
    function ya(e) {
      null === sa ? (sa = [e]) : sa.push(e);
    }
    var va = U(null),
      ba = null,
      xa = null;
    function wa(e, t, n) {
      H(va, t._currentValue), (t._currentValue = n);
    }
    function ka(e) {
      (e._currentValue = va.current), q(va);
    }
    function Sa(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Na(e, t, n, a) {
      var l = e.child;
      for (null !== l && (l.return = e); null !== l; ) {
        var i = l.dependencies;
        if (null !== i) {
          var o = l.child;
          i = i.firstContext;
          e: for (; null !== i; ) {
            var s = i;
            i = l;
            for (var u = 0; u < t.length; u++)
              if (s.context === t[u]) {
                (i.lanes |= n),
                  null !== (s = i.alternate) && (s.lanes |= n),
                  Sa(i.return, n, e),
                  a || (o = null);
                break e;
              }
            i = s.next;
          }
        } else if (18 === l.tag) {
          if (null === (o = l.return)) throw Error(r(341));
          (o.lanes |= n),
            null !== (i = o.alternate) && (i.lanes |= n),
            Sa(o, n, e),
            (o = null);
        } else o = l.child;
        if (null !== o) o.return = l;
        else
          for (o = l; null !== o; ) {
            if (o === e) {
              o = null;
              break;
            }
            if (null !== (l = o.sibling)) {
              (l.return = o.return), (o = l);
              break;
            }
            o = o.return;
          }
        l = o;
      }
    }
    function ja(e, t, n, a) {
      e = null;
      for (var l = t, i = !1; null !== l; ) {
        if (!i)
          if (524288 & l.flags) i = !0;
          else if (262144 & l.flags) break;
        if (10 === l.tag) {
          var o = l.alternate;
          if (null === o) throw Error(r(387));
          if (null !== (o = o.memoizedProps)) {
            var s = l.type;
            Kn(l.pendingProps.value, o.value) ||
              (null !== e ? e.push(s) : (e = [s]));
          }
        } else if (l === Q.current) {
          if (null === (o = l.alternate)) throw Error(r(387));
          o.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
            (null !== e ? e.push(Gd) : (e = [Gd]));
        }
        l = l.return;
      }
      null !== e && Na(t, e, n, a), (t.flags |= 262144);
    }
    function Ea(e) {
      for (e = e.firstContext; null !== e; ) {
        if (!Kn(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Ca(e) {
      (ba = e),
        (xa = null),
        null !== (e = e.dependencies) && (e.firstContext = null);
    }
    function za(e) {
      return La(ba, e);
    }
    function Pa(e, t) {
      return null === ba && Ca(e), La(e, t);
    }
    function La(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), null === xa)) {
        if (null === e) throw Error(r(308));
        (xa = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else xa = xa.next = t;
      return n;
    }
    var Ta =
        "undefined" != typeof AbortController
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  });
              };
            },
      Ma = e.unstable_scheduleCallback,
      _a = e.unstable_NormalPriority,
      Fa = {
        $$typeof: S,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function Aa() {
      return { controller: new Ta(), data: new Map(), refCount: 0 };
    }
    function Oa(e) {
      e.refCount--,
        0 === e.refCount &&
          Ma(_a, function () {
            e.controller.abort();
          });
    }
    var Ia = null,
      Da = 0,
      Ra = 0,
      $a = null;
    function Ua() {
      if (0 == --Da && null !== Ia) {
        null !== $a && ($a.status = "fulfilled");
        var e = Ia;
        (Ia = null), (Ra = 0), ($a = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    var qa = O.S;
    O.S = function (e, t) {
      "object" == typeof t &&
        null !== t &&
        "function" == typeof t.then &&
        (function (e, t) {
          if (null === Ia) {
            var n = (Ia = []);
            (Da = 0),
              (Ra = Tc()),
              ($a = {
                status: "pending",
                value: void 0,
                then: function (e) {
                  n.push(e);
                },
              });
          }
          Da++, t.then(Ua, Ua);
        })(0, t),
        null !== qa && qa(e, t);
    };
    var Ha = U(null);
    function Ba() {
      var e = Ha.current;
      return null !== e ? e : lu.pooledCache;
    }
    function Va(e, t) {
      H(Ha, null === t ? Ha.current : t.pool);
    }
    function Wa() {
      var e = Ba();
      return null === e ? null : { parent: Fa._currentValue, pool: e };
    }
    var Qa = Error(r(460)),
      Ya = Error(r(474)),
      Xa = Error(r(542)),
      Ga = { then: function () {} };
    function Ka(e) {
      return "fulfilled" === (e = e.status) || "rejected" === e;
    }
    function Za() {}
    function Ja(e, t, n) {
      switch (
        (void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(Za, Za), (t = n)),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw (nl((e = t.reason)), e);
        default:
          if ("string" == typeof t.status) t.then(Za, Za);
          else {
            if (null !== (e = lu) && 100 < e.shellSuspendCounter)
              throw Error(r(482));
            ((e = t).status = "pending"),
              e.then(
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    (n.status = "fulfilled"), (n.value = e);
                  }
                },
                function (e) {
                  if ("pending" === t.status) {
                    var n = t;
                    (n.status = "rejected"), (n.reason = e);
                  }
                },
              );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (nl((e = t.reason)), e);
          }
          throw ((el = t), Qa);
      }
    }
    var el = null;
    function tl() {
      if (null === el) throw Error(r(459));
      var e = el;
      return (el = null), e;
    }
    function nl(e) {
      if (e === Qa || e === Xa) throw Error(r(483));
    }
    var rl = !1;
    function al(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function ll(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function il(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function ol(e, t, n) {
      var r = e.updateQueue;
      if (null === r) return null;
      if (((r = r.shared), 2 & au)) {
        var a = r.pending;
        return (
          null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
          (r.pending = t),
          (t = Ar(e)),
          Fr(e, null, n),
          t
        );
      }
      return Tr(e, r, t, n), Ar(e);
    }
    function sl(e, t, n) {
      if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n);
      }
    }
    function ul(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (null !== r && n === (r = r.updateQueue)) {
        var a = null,
          l = null;
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var i = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null,
            };
            null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
          } while (null !== n);
          null === l ? (a = l = t) : (l = l.next = t);
        } else a = l = t;
        return (
          (n = {
            baseState: r.baseState,
            firstBaseUpdate: a,
            lastBaseUpdate: l,
            shared: r.shared,
            callbacks: r.callbacks,
          }),
          void (e.updateQueue = n)
        );
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
    }
    var cl = !1;
    function dl() {
      if (cl) {
        if (null !== $a) throw $a;
      }
    }
    function fl(e, t, n, r) {
      cl = !1;
      var a = e.updateQueue;
      rl = !1;
      var l = a.firstBaseUpdate,
        i = a.lastBaseUpdate,
        o = a.shared.pending;
      if (null !== o) {
        a.shared.pending = null;
        var s = o,
          u = s.next;
        (s.next = null), null === i ? (l = u) : (i.next = u), (i = s);
        var c = e.alternate;
        null !== c &&
          (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
          (null === o ? (c.firstBaseUpdate = u) : (o.next = u),
          (c.lastBaseUpdate = s));
      }
      if (null !== l) {
        var f = a.baseState;
        for (i = 0, c = u = s = null, o = l; ; ) {
          var p = -536870913 & o.lane,
            m = p !== o.lane;
          if (m ? (ou & p) === p : (r & p) === p) {
            0 !== p && p === Ra && (cl = !0),
              null !== c &&
                (c = c.next =
                  {
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: null,
                    next: null,
                  });
            e: {
              var h = e,
                g = o;
              p = t;
              var y = n;
              switch (g.tag) {
                case 1:
                  if ("function" == typeof (h = g.payload)) {
                    f = h.call(y, f, p);
                    break e;
                  }
                  f = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (p =
                      "function" == typeof (h = g.payload) ? h.call(y, f, p) : h)
                  )
                    break e;
                  f = d({}, f, p);
                  break e;
                case 2:
                  rl = !0;
              }
            }
            null !== (p = o.callback) &&
              ((e.flags |= 64),
              m && (e.flags |= 8192),
              null === (m = a.callbacks) ? (a.callbacks = [p]) : m.push(p));
          } else
            (m = {
              lane: p,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            }),
              null === c ? ((u = c = m), (s = f)) : (c = c.next = m),
              (i |= p);
          if (null === (o = o.next)) {
            if (null === (o = a.shared.pending)) break;
            (o = (m = o).next),
              (m.next = null),
              (a.lastBaseUpdate = m),
              (a.shared.pending = null);
          }
        }
        null === c && (s = f),
          (a.baseState = s),
          (a.firstBaseUpdate = u),
          (a.lastBaseUpdate = c),
          null === l && (a.shared.lanes = 0),
          (hu |= i),
          (e.lanes = i),
          (e.memoizedState = f);
      }
    }
    function pl(e, t) {
      if ("function" != typeof e) throw Error(r(191, e));
      e.call(t);
    }
    function ml(e, t) {
      var n = e.callbacks;
      if (null !== n)
        for (e.callbacks = null, e = 0; e < n.length; e++) pl(n[e], t);
    }
    var hl = U(null),
      gl = U(0);
    function yl(e, t) {
      H(gl, (e = pu)), H(hl, t), (pu = e | t.baseLanes);
    }
    function vl() {
      H(gl, pu), H(hl, hl.current);
    }
    function bl() {
      (pu = gl.current), q(hl), q(gl);
    }
    var xl = 0,
      wl = null,
      kl = null,
      Sl = null,
      Nl = !1,
      jl = !1,
      El = !1,
      Cl = 0,
      zl = 0,
      Pl = null,
      Ll = 0;
    function Tl() {
      throw Error(r(321));
    }
    function Ml(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Kn(e[n], t[n])) return !1;
      return !0;
    }
    function _l(e, t, n, r, a, l) {
      return (
        (xl = l),
        (wl = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (O.H = null === e || null === e.memoizedState ? Qi : Yi),
        (El = !1),
        (l = n(r, a)),
        (El = !1),
        jl && (l = Al(t, n, r, a)),
        Fl(e),
        l
      );
    }
    function Fl(e) {
      O.H = Wi;
      var t = null !== kl && null !== kl.next;
      if (((xl = 0), (Sl = kl = wl = null), (Nl = !1), (zl = 0), (Pl = null), t))
        throw Error(r(300));
      null === e || Po || (null !== (e = e.dependencies) && Ea(e) && (Po = !0));
    }
    function Al(e, t, n, a) {
      wl = e;
      var l = 0;
      do {
        if ((jl && (Pl = null), (zl = 0), (jl = !1), 25 <= l))
          throw Error(r(301));
        if (((l += 1), (Sl = kl = null), null != e.updateQueue)) {
          var i = e.updateQueue;
          (i.lastEffect = null),
            (i.events = null),
            (i.stores = null),
            null != i.memoCache && (i.memoCache.index = 0);
        }
        (O.H = Xi), (i = t(n, a));
      } while (jl);
      return i;
    }
    function Ol() {
      var e = O.H,
        t = e.useState()[0];
      return (
        (t = "function" == typeof t.then ? ql(t) : t),
        (e = e.useState()[0]),
        (null !== kl ? kl.memoizedState : null) !== e && (wl.flags |= 1024),
        t
      );
    }
    function Il() {
      var e = 0 !== Cl;
      return (Cl = 0), e;
    }
    function Dl(e, t, n) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
    }
    function Rl(e) {
      if (Nl) {
        for (e = e.memoizedState; null !== e; ) {
          var t = e.queue;
          null !== t && (t.pending = null), (e = e.next);
        }
        Nl = !1;
      }
      (xl = 0), (Sl = kl = wl = null), (jl = !1), (zl = Cl = 0), (Pl = null);
    }
    function $l() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === Sl ? (wl.memoizedState = Sl = e) : (Sl = Sl.next = e), Sl;
    }
    function Ul() {
      if (null === kl) {
        var e = wl.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = kl.next;
      var t = null === Sl ? wl.memoizedState : Sl.next;
      if (null !== t) (Sl = t), (kl = e);
      else {
        if (null === e) {
          if (null === wl.alternate) throw Error(r(467));
          throw Error(r(310));
        }
        (e = {
          memoizedState: (kl = e).memoizedState,
          baseState: kl.baseState,
          baseQueue: kl.baseQueue,
          queue: kl.queue,
          next: null,
        }),
          null === Sl ? (wl.memoizedState = Sl = e) : (Sl = Sl.next = e);
      }
      return Sl;
    }
    function ql(e) {
      var t = zl;
      return (
        (zl += 1),
        null === Pl && (Pl = []),
        (e = Ja(Pl, e, t)),
        (t = wl),
        null === (null === Sl ? t.memoizedState : Sl.next) &&
          ((t = t.alternate),
          (O.H = null === t || null === t.memoizedState ? Qi : Yi)),
        e
      );
    }
    function Hl(e) {
      if (null !== e && "object" == typeof e) {
        if ("function" == typeof e.then) return ql(e);
        if (e.$$typeof === S) return za(e);
      }
      throw Error(r(438, String(e)));
    }
    function Bl(e) {
      var t = null,
        n = wl.updateQueue;
      if ((null !== n && (t = n.memoCache), null == t)) {
        var r = wl.alternate;
        null !== r &&
          null !== (r = r.updateQueue) &&
          null != (r = r.memoCache) &&
          (t = {
            data: r.data.map(function (e) {
              return e.slice();
            }),
            index: 0,
          });
      }
      if (
        (null == t && (t = { data: [], index: 0 }),
        null === n &&
          ((n = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
          }),
          (wl.updateQueue = n)),
        (n.memoCache = t),
        void 0 === (n = t.data[t.index]))
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = L;
      return t.index++, n;
    }
    function Vl(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function Wl(e) {
      return Ql(Ul(), kl, e);
    }
    function Ql(e, t, n) {
      var a = e.queue;
      if (null === a) throw Error(r(311));
      a.lastRenderedReducer = n;
      var l = e.baseQueue,
        i = a.pending;
      if (null !== i) {
        if (null !== l) {
          var o = l.next;
          (l.next = i.next), (i.next = o);
        }
        (t.baseQueue = l = i), (a.pending = null);
      }
      if (((i = e.baseState), null === l)) e.memoizedState = i;
      else {
        var s = (o = null),
          u = null,
          c = (t = l.next),
          d = !1;
        do {
          var f = -536870913 & c.lane;
          if (f !== c.lane ? (ou & f) === f : (xl & f) === f) {
            var p = c.revertLane;
            if (0 === p)
              null !== u &&
                (u = u.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                f === Ra && (d = !0);
            else {
              if ((xl & p) === p) {
                (c = c.next), p === Ra && (d = !0);
                continue;
              }
              (f = {
                lane: 0,
                revertLane: c.revertLane,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                null === u ? ((s = u = f), (o = i)) : (u = u.next = f),
                (wl.lanes |= p),
                (hu |= p);
            }
            (f = c.action),
              El && n(i, f),
              (i = c.hasEagerState ? c.eagerState : n(i, f));
          } else
            (p = {
              lane: f,
              revertLane: c.revertLane,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
              null === u ? ((s = u = p), (o = i)) : (u = u.next = p),
              (wl.lanes |= f),
              (hu |= f);
          c = c.next;
        } while (null !== c && c !== t);
        if (
          (null === u ? (o = i) : (u.next = s),
          !Kn(i, e.memoizedState) && ((Po = !0), d && null !== (n = $a)))
        )
          throw n;
        (e.memoizedState = i),
          (e.baseState = o),
          (e.baseQueue = u),
          (a.lastRenderedState = i);
      }
      return null === l && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function Yl(e) {
      var t = Ul(),
        n = t.queue;
      if (null === n) throw Error(r(311));
      n.lastRenderedReducer = e;
      var a = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
      if (null !== l) {
        n.pending = null;
        var o = (l = l.next);
        do {
          (i = e(i, o.action)), (o = o.next);
        } while (o !== l);
        Kn(i, t.memoizedState) || (Po = !0),
          (t.memoizedState = i),
          null === t.baseQueue && (t.baseState = i),
          (n.lastRenderedState = i);
      }
      return [i, a];
    }
    function Xl(e, t, n) {
      var a = wl,
        l = Ul(),
        i = oa;
      if (i) {
        if (void 0 === n) throw Error(r(407));
        n = n();
      } else n = t();
      var o = !Kn((kl || l).memoizedState, n);
      if (
        (o && ((l.memoizedState = n), (Po = !0)),
        (l = l.queue),
        vi(2048, 8, Zl.bind(null, a, l, e), [e]),
        l.getSnapshot !== t || o || (null !== Sl && 1 & Sl.memoizedState.tag))
      ) {
        if (
          ((a.flags |= 2048),
          hi(
            9,
            { destroy: void 0, resource: void 0 },
            Kl.bind(null, a, l, n, t),
            null,
          ),
          null === lu)
        )
          throw Error(r(349));
        i || 124 & xl || Gl(a, t, n);
      }
      return n;
    }
    function Gl(e, t, n) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = wl.updateQueue)
          ? ((t = {
              lastEffect: null,
              events: null,
              stores: null,
              memoCache: null,
            }),
            (wl.updateQueue = t),
            (t.stores = [e]))
          : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e);
    }
    function Kl(e, t, n, r) {
      (t.value = n), (t.getSnapshot = r), Jl(t) && ei(e);
    }
    function Zl(e, t, n) {
      return n(function () {
        Jl(t) && ei(e);
      });
    }
    function Jl(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Kn(e, n);
      } catch (r) {
        return !0;
      }
    }
    function ei(e) {
      var t = _r(e, 2);
      null !== t && Du(t, e, 2);
    }
    function ti(e) {
      var t = $l();
      if ("function" == typeof e) {
        var n = e;
        if (((e = n()), El)) {
          me(!0);
          try {
            n();
          } finally {
            me(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vl,
          lastRenderedState: e,
        }),
        t
      );
    }
    function ni(e, t, n, r) {
      return (e.baseState = n), Ql(e, kl, "function" == typeof r ? r : Vl);
    }
    function ri(e, t, n, a, l) {
      if (Hi(e)) throw Error(r(485));
      if (null !== (e = t.action)) {
        var i = {
          payload: l,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            i.listeners.push(e);
          },
        };
        null !== O.T ? n(!0) : (i.isTransition = !1),
          a(i),
          null === (n = t.pending)
            ? ((i.next = t.pending = i), ai(t, i))
            : ((i.next = n.next), (t.pending = n.next = i));
      }
    }
    function ai(e, t) {
      var n = t.action,
        r = t.payload,
        a = e.state;
      if (t.isTransition) {
        var l = O.T,
          i = {};
        O.T = i;
        try {
          var o = n(a, r),
            s = O.S;
          null !== s && s(i, o), li(e, t, o);
        } catch (u) {
          oi(e, t, u);
        } finally {
          O.T = l;
        }
      } else
        try {
          li(e, t, (l = n(a, r)));
        } catch (c) {
          oi(e, t, c);
        }
    }
    function li(e, t, n) {
      null !== n && "object" == typeof n && "function" == typeof n.then
        ? n.then(
            function (n) {
              ii(e, t, n);
            },
            function (n) {
              return oi(e, t, n);
            },
          )
        : ii(e, t, n);
    }
    function ii(e, t, n) {
      (t.status = "fulfilled"),
        (t.value = n),
        si(t),
        (e.state = n),
        null !== (t = e.pending) &&
          ((n = t.next) === t
            ? (e.pending = null)
            : ((n = n.next), (t.next = n), ai(e, n)));
    }
    function oi(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), null !== r)) {
        r = r.next;
        do {
          (t.status = "rejected"), (t.reason = n), si(t), (t = t.next);
        } while (t !== r);
      }
      e.action = null;
    }
    function si(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ui(e, t) {
      return t;
    }
    function ci(e, t) {
      if (oa) {
        var n = lu.formState;
        if (null !== n) {
          e: {
            var r = wl;
            if (oa) {
              if (ia) {
                t: {
                  for (var a = ia, l = ua; 8 !== a.nodeType; ) {
                    if (!l) {
                      a = null;
                      break t;
                    }
                    if (null === (a = bd(a.nextSibling))) {
                      a = null;
                      break t;
                    }
                  }
                  a = "F!" === (l = a.data) || "F" === l ? a : null;
                }
                if (a) {
                  (ia = bd(a.nextSibling)), (r = "F!" === a.data);
                  break e;
                }
              }
              da(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        ((n = $l()).memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ui,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = $i.bind(null, wl, r)),
        (r.dispatch = n),
        (r = ti(!1)),
        (l = qi.bind(null, wl, !1, r.queue)),
        (a = { state: t, dispatch: null, action: e, pending: null }),
        ((r = $l()).queue = a),
        (n = ri.bind(null, wl, a, l, n)),
        (a.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function di(e) {
      return fi(Ul(), kl, e);
    }
    function fi(e, t, n) {
      if (
        ((t = Ql(e, t, ui)[0]),
        (e = Wl(Vl)[0]),
        "object" == typeof t && null !== t && "function" == typeof t.then)
      )
        try {
          var r = ql(t);
        } catch (i) {
          if (i === Qa) throw Xa;
          throw i;
        }
      else r = t;
      var a = (t = Ul()).queue,
        l = a.dispatch;
      return (
        n !== t.memoizedState &&
          ((wl.flags |= 2048),
          hi(
            9,
            { destroy: void 0, resource: void 0 },
            pi.bind(null, a, n),
            null,
          )),
        [r, l, e]
      );
    }
    function pi(e, t) {
      e.action = t;
    }
    function mi(e) {
      var t = Ul(),
        n = kl;
      if (null !== n) return fi(t, n, e);
      Ul(), (t = t.memoizedState);
      var r = (n = Ul()).queue.dispatch;
      return (n.memoizedState = e), [t, r, !1];
    }
    function hi(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        null === (t = wl.updateQueue) &&
          ((t = {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
          }),
          (wl.updateQueue = t)),
        null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function gi() {
      return Ul().memoizedState;
    }
    function yi(e, t, n, r) {
      var a = $l();
      (r = void 0 === r ? null : r),
        (wl.flags |= e),
        (a.memoizedState = hi(
          1 | t,
          { destroy: void 0, resource: void 0 },
          n,
          r,
        ));
    }
    function vi(e, t, n, r) {
      var a = Ul();
      r = void 0 === r ? null : r;
      var l = a.memoizedState.inst;
      null !== kl && null !== r && Ml(r, kl.memoizedState.deps)
        ? (a.memoizedState = hi(t, l, n, r))
        : ((wl.flags |= e), (a.memoizedState = hi(1 | t, l, n, r)));
    }
    function bi(e, t) {
      yi(8390656, 8, e, t);
    }
    function xi(e, t) {
      vi(2048, 8, e, t);
    }
    function wi(e, t) {
      return vi(4, 2, e, t);
    }
    function ki(e, t) {
      return vi(4, 4, e, t);
    }
    function Si(e, t) {
      if ("function" == typeof t) {
        e = e();
        var n = t(e);
        return function () {
          "function" == typeof n ? n() : t(null);
        };
      }
      if (null != t)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function Ni(e, t, n) {
      (n = null != n ? n.concat([e]) : null), vi(4, 4, Si.bind(null, t, e), n);
    }
    function ji() {}
    function Ei(e, t) {
      var n = Ul();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== t && Ml(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ci(e, t) {
      var n = Ul();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      if (null !== t && Ml(t, r[1])) return r[0];
      if (((r = e()), El)) {
        me(!0);
        try {
          e();
        } finally {
          me(!1);
        }
      }
      return (n.memoizedState = [r, t]), r;
    }
    function zi(e, t, n) {
      return void 0 === n || 1073741824 & xl
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Iu()), (wl.lanes |= e), (hu |= e), n);
    }
    function Pi(e, t, n, r) {
      return Kn(n, t)
        ? n
        : null !== hl.current
          ? ((e = zi(e, n, r)), Kn(e, t) || (Po = !0), e)
          : 42 & xl
            ? ((e = Iu()), (wl.lanes |= e), (hu |= e), t)
            : ((Po = !0), (e.memoizedState = n));
    }
    function Li(e, t, n, r, a) {
      var l = I.p;
      I.p = 0 !== l && 8 > l ? l : 8;
      var i,
        o,
        s,
        u = O.T,
        c = {};
      (O.T = c), qi(e, !1, t, n);
      try {
        var d = a(),
          f = O.S;
        if (
          (null !== f && f(c, d),
          null !== d && "object" == typeof d && "function" == typeof d.then)
        )
          Ui(
            e,
            t,
            ((i = r),
            (o = []),
            (s = {
              status: "pending",
              value: null,
              reason: null,
              then: function (e) {
                o.push(e);
              },
            }),
            d.then(
              function () {
                (s.status = "fulfilled"), (s.value = i);
                for (var e = 0; e < o.length; e++) (0, o[e])(i);
              },
              function (e) {
                for (
                  s.status = "rejected", s.reason = e, e = 0;
                  e < o.length;
                  e++
                )
                  (0, o[e])(void 0);
              },
            ),
            s),
            Ou(),
          );
        else Ui(e, t, r, Ou());
      } catch (p) {
        Ui(e, t, { then: function () {}, status: "rejected", reason: p }, Ou());
      } finally {
        (I.p = l), (O.T = u);
      }
    }
    function Ti() {}
    function Mi(e, t, n, a) {
      if (5 !== e.tag) throw Error(r(476));
      var l = _i(e).queue;
      Li(
        e,
        l,
        t,
        D,
        null === n
          ? Ti
          : function () {
              return Fi(e), n(a);
            },
      );
    }
    function _i(e) {
      var t = e.memoizedState;
      if (null !== t) return t;
      var n = {};
      return (
        ((t = {
          memoizedState: D,
          baseState: D,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vl,
            lastRenderedState: D,
          },
          next: null,
        }).next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vl,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        null !== (e = e.alternate) && (e.memoizedState = t),
        t
      );
    }
    function Fi(e) {
      Ui(e, _i(e).next.queue, {}, Ou());
    }
    function Ai() {
      return za(Gd);
    }
    function Oi() {
      return Ul().memoizedState;
    }
    function Ii() {
      return Ul().memoizedState;
    }
    function Di(e) {
      for (var t = e.return; null !== t; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Ou(),
              r = ol(t, (e = il(n)), n);
            return (
              null !== r && (Du(r, t, n), sl(r, t, n)),
              (t = { cache: Aa() }),
              void (e.payload = t)
            );
        }
        t = t.return;
      }
    }
    function Ri(e, t, n) {
      var r = Ou();
      (n = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Hi(e)
          ? Bi(t, n)
          : null !== (n = Mr(e, t, n, r)) && (Du(n, e, r), Vi(n, t, r));
    }
    function $i(e, t, n) {
      Ui(e, t, n, Ou());
    }
    function Ui(e, t, n, r) {
      var a = {
        lane: r,
        revertLane: 0,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Hi(e)) Bi(t, a);
      else {
        var l = e.alternate;
        if (
          0 === e.lanes &&
          (null === l || 0 === l.lanes) &&
          null !== (l = t.lastRenderedReducer)
        )
          try {
            var i = t.lastRenderedState,
              o = l(i, n);
            if (((a.hasEagerState = !0), (a.eagerState = o), Kn(o, i)))
              return Tr(e, t, a, 0), null === lu && Lr(), !1;
          } catch (s) {}
        if (null !== (n = Mr(e, t, a, r))) return Du(n, e, r), Vi(n, t, r), !0;
      }
      return !1;
    }
    function qi(e, t, n, a) {
      if (
        ((a = {
          lane: 2,
          revertLane: Tc(),
          action: a,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Hi(e))
      ) {
        if (t) throw Error(r(479));
      } else null !== (t = Mr(e, n, a, 2)) && Du(t, e, 2);
    }
    function Hi(e) {
      var t = e.alternate;
      return e === wl || (null !== t && t === wl);
    }
    function Bi(e, t) {
      jl = Nl = !0;
      var n = e.pending;
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
    function Vi(e, t, n) {
      if (4194048 & n) {
        var r = t.lanes;
        (n |= r &= e.pendingLanes), (t.lanes = n), Pe(e, n);
      }
    }
    var Wi = {
        readContext: za,
        use: Hl,
        useCallback: Tl,
        useContext: Tl,
        useEffect: Tl,
        useImperativeHandle: Tl,
        useLayoutEffect: Tl,
        useInsertionEffect: Tl,
        useMemo: Tl,
        useReducer: Tl,
        useRef: Tl,
        useState: Tl,
        useDebugValue: Tl,
        useDeferredValue: Tl,
        useTransition: Tl,
        useSyncExternalStore: Tl,
        useId: Tl,
        useHostTransitionStatus: Tl,
        useFormState: Tl,
        useActionState: Tl,
        useOptimistic: Tl,
        useMemoCache: Tl,
        useCacheRefresh: Tl,
      },
      Qi = {
        readContext: za,
        use: Hl,
        useCallback: function (e, t) {
          return ($l().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: za,
        useEffect: bi,
        useImperativeHandle: function (e, t, n) {
          (n = null != n ? n.concat([e]) : null),
            yi(4194308, 4, Si.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return yi(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          yi(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = $l();
          t = void 0 === t ? null : t;
          var r = e();
          if (El) {
            me(!0);
            try {
              e();
            } finally {
              me(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = $l();
          if (void 0 !== n) {
            var a = n(t);
            if (El) {
              me(!0);
              try {
                n(t);
              } finally {
                me(!1);
              }
            }
          } else a = t;
          return (
            (r.memoizedState = r.baseState = a),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: a,
            }),
            (r.queue = e),
            (e = e.dispatch = Ri.bind(null, wl, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), ($l().memoizedState = e);
        },
        useState: function (e) {
          var t = (e = ti(e)).queue,
            n = $i.bind(null, wl, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: ji,
        useDeferredValue: function (e, t) {
          return zi($l(), e, t);
        },
        useTransition: function () {
          var e = ti(!1);
          return (
            (e = Li.bind(null, wl, e.queue, !0, !1)),
            ($l().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, n) {
          var a = wl,
            l = $l();
          if (oa) {
            if (void 0 === n) throw Error(r(407));
            n = n();
          } else {
            if (((n = t()), null === lu)) throw Error(r(349));
            124 & ou || Gl(a, t, n);
          }
          l.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return (
            (l.queue = i),
            bi(Zl.bind(null, a, i, e), [e]),
            (a.flags |= 2048),
            hi(
              9,
              { destroy: void 0, resource: void 0 },
              Kl.bind(null, a, i, n, t),
              null,
            ),
            n
          );
        },
        useId: function () {
          var e = $l(),
            t = lu.identifierPrefix;
          if (oa) {
            var n = ea;
            (t =
              "«" +
              t +
              "R" +
              (n = (Jr & ~(1 << (32 - he(Jr) - 1))).toString(32) + n)),
              0 < (n = Cl++) && (t += "H" + n.toString(32)),
              (t += "»");
          } else t = "«" + t + "r" + (n = Ll++).toString(32) + "»";
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ai,
        useFormState: ci,
        useActionState: ci,
        useOptimistic: function (e) {
          var t = $l();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = n),
            (t = qi.bind(null, wl, !0, n)),
            (n.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Bl,
        useCacheRefresh: function () {
          return ($l().memoizedState = Di.bind(null, wl));
        },
      },
      Yi = {
        readContext: za,
        use: Hl,
        useCallback: Ei,
        useContext: za,
        useEffect: xi,
        useImperativeHandle: Ni,
        useInsertionEffect: wi,
        useLayoutEffect: ki,
        useMemo: Ci,
        useReducer: Wl,
        useRef: gi,
        useState: function () {
          return Wl(Vl);
        },
        useDebugValue: ji,
        useDeferredValue: function (e, t) {
          return Pi(Ul(), kl.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Wl(Vl)[0],
            t = Ul().memoizedState;
          return ["boolean" == typeof e ? e : ql(e), t];
        },
        useSyncExternalStore: Xl,
        useId: Oi,
        useHostTransitionStatus: Ai,
        useFormState: di,
        useActionState: di,
        useOptimistic: function (e, t) {
          return ni(Ul(), 0, e, t);
        },
        useMemoCache: Bl,
        useCacheRefresh: Ii,
      },
      Xi = {
        readContext: za,
        use: Hl,
        useCallback: Ei,
        useContext: za,
        useEffect: xi,
        useImperativeHandle: Ni,
        useInsertionEffect: wi,
        useLayoutEffect: ki,
        useMemo: Ci,
        useReducer: Yl,
        useRef: gi,
        useState: function () {
          return Yl(Vl);
        },
        useDebugValue: ji,
        useDeferredValue: function (e, t) {
          var n = Ul();
          return null === kl ? zi(n, e, t) : Pi(n, kl.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Yl(Vl)[0],
            t = Ul().memoizedState;
          return ["boolean" == typeof e ? e : ql(e), t];
        },
        useSyncExternalStore: Xl,
        useId: Oi,
        useHostTransitionStatus: Ai,
        useFormState: mi,
        useActionState: mi,
        useOptimistic: function (e, t) {
          var n = Ul();
          return null !== kl
            ? ni(n, 0, e, t)
            : ((n.baseState = e), [e, n.queue.dispatch]);
        },
        useMemoCache: Bl,
        useCacheRefresh: Ii,
      },
      Gi = null,
      Ki = 0;
    function Zi(e) {
      var t = Ki;
      return (Ki += 1), null === Gi && (Gi = []), Ja(Gi, e, t);
    }
    function Ji(e, t) {
      (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
    }
    function eo(e, t) {
      if (t.$$typeof === p) throw Error(r(525));
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            "[object Object]" === e
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ))
      );
    }
    function to(e) {
      return (0, e._init)(e._payload);
    }
    function no(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function a(e) {
        for (var t = new Map(); null !== e; )
          null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
        return t;
      }
      function l(e, t) {
        return ((e = $r(e, t)).index = 0), (e.sibling = null), e;
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.flags |= 67108866), n)
                : r
              : ((t.flags |= 67108866), n)
            : ((t.flags |= 1048576), n)
        );
      }
      function o(t) {
        return e && null === t.alternate && (t.flags |= 67108866), t;
      }
      function s(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Br(n, e.mode, r)).return = e), t)
          : (((t = l(t, n)).return = e), t);
      }
      function u(e, t, n, r) {
        var a = n.type;
        return a === y
          ? d(e, t, n.props.children, r, n.key)
          : null !== t &&
              (t.elementType === a ||
                ("object" == typeof a &&
                  null !== a &&
                  a.$$typeof === z &&
                  to(a) === t.type))
            ? (Ji((t = l(t, n.props)), n), (t.return = e), t)
            : (Ji((t = qr(n.type, n.key, n.props, null, e.mode, r)), n),
              (t.return = e),
              t);
      }
      function c(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Vr(n, e.mode, r)).return = e), t)
          : (((t = l(t, n.children || [])).return = e), t);
      }
      function d(e, t, n, r, a) {
        return null === t || 7 !== t.tag
          ? (((t = Hr(n, e.mode, r, a)).return = e), t)
          : (((t = l(t, n)).return = e), t);
      }
      function f(e, t, n) {
        if (
          ("string" == typeof t && "" !== t) ||
          "number" == typeof t ||
          "bigint" == typeof t
        )
          return ((t = Br("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case m:
              return (
                Ji((n = qr(t.type, t.key, t.props, null, e.mode, n)), t),
                (n.return = e),
                n
              );
            case g:
              return ((t = Vr(t, e.mode, n)).return = e), t;
            case z:
              return f(e, (t = (0, t._init)(t._payload)), n);
          }
          if (A(t) || M(t)) return ((t = Hr(t, e.mode, n, null)).return = e), t;
          if ("function" == typeof t.then) return f(e, Zi(t), n);
          if (t.$$typeof === S) return f(e, Pa(e, t), n);
          eo(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var a = null !== t ? t.key : null;
        if (
          ("string" == typeof n && "" !== n) ||
          "number" == typeof n ||
          "bigint" == typeof n
        )
          return null !== a ? null : s(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case m:
              return n.key === a ? u(e, t, n, r) : null;
            case g:
              return n.key === a ? c(e, t, n, r) : null;
            case z:
              return p(e, t, (n = (a = n._init)(n._payload)), r);
          }
          if (A(n) || M(n)) return null !== a ? null : d(e, t, n, r, null);
          if ("function" == typeof n.then) return p(e, t, Zi(n), r);
          if (n.$$typeof === S) return p(e, t, Pa(e, n), r);
          eo(e, n);
        }
        return null;
      }
      function h(e, t, n, r, a) {
        if (
          ("string" == typeof r && "" !== r) ||
          "number" == typeof r ||
          "bigint" == typeof r
        )
          return s(t, (e = e.get(n) || null), "" + r, a);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case m:
              return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
            case g:
              return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
            case z:
              return h(e, t, n, (r = (0, r._init)(r._payload)), a);
          }
          if (A(r) || M(r)) return d(t, (e = e.get(n) || null), r, a, null);
          if ("function" == typeof r.then) return h(e, t, n, Zi(r), a);
          if (r.$$typeof === S) return h(e, t, n, Pa(t, r), a);
          eo(t, r);
        }
        return null;
      }
      function v(s, u, c, d) {
        if (
          ("object" == typeof c &&
            null !== c &&
            c.type === y &&
            null === c.key &&
            (c = c.props.children),
          "object" == typeof c && null !== c)
        ) {
          switch (c.$$typeof) {
            case m:
              e: {
                for (var b = c.key; null !== u; ) {
                  if (u.key === b) {
                    if ((b = c.type) === y) {
                      if (7 === u.tag) {
                        n(s, u.sibling),
                          ((d = l(u, c.props.children)).return = s),
                          (s = d);
                        break e;
                      }
                    } else if (
                      u.elementType === b ||
                      ("object" == typeof b &&
                        null !== b &&
                        b.$$typeof === z &&
                        to(b) === u.type)
                    ) {
                      n(s, u.sibling),
                        Ji((d = l(u, c.props)), c),
                        (d.return = s),
                        (s = d);
                      break e;
                    }
                    n(s, u);
                    break;
                  }
                  t(s, u), (u = u.sibling);
                }
                c.type === y
                  ? (((d = Hr(c.props.children, s.mode, d, c.key)).return = s),
                    (s = d))
                  : (Ji((d = qr(c.type, c.key, c.props, null, s.mode, d)), c),
                    (d.return = s),
                    (s = d));
              }
              return o(s);
            case g:
              e: {
                for (b = c.key; null !== u; ) {
                  if (u.key === b) {
                    if (
                      4 === u.tag &&
                      u.stateNode.containerInfo === c.containerInfo &&
                      u.stateNode.implementation === c.implementation
                    ) {
                      n(s, u.sibling),
                        ((d = l(u, c.children || [])).return = s),
                        (s = d);
                      break e;
                    }
                    n(s, u);
                    break;
                  }
                  t(s, u), (u = u.sibling);
                }
                ((d = Vr(c, s.mode, d)).return = s), (s = d);
              }
              return o(s);
            case z:
              return v(s, u, (c = (b = c._init)(c._payload)), d);
          }
          if (A(c))
            return (function (r, l, o, s) {
              for (
                var u = null, c = null, d = l, m = (l = 0), g = null;
                null !== d && m < o.length;
                m++
              ) {
                d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
                var y = p(r, d, o[m], s);
                if (null === y) {
                  null === d && (d = g);
                  break;
                }
                e && d && null === y.alternate && t(r, d),
                  (l = i(y, l, m)),
                  null === c ? (u = y) : (c.sibling = y),
                  (c = y),
                  (d = g);
              }
              if (m === o.length) return n(r, d), oa && ta(r, m), u;
              if (null === d) {
                for (; m < o.length; m++)
                  null !== (d = f(r, o[m], s)) &&
                    ((l = i(d, l, m)),
                    null === c ? (u = d) : (c.sibling = d),
                    (c = d));
                return oa && ta(r, m), u;
              }
              for (d = a(d); m < o.length; m++)
                null !== (g = h(d, r, m, o[m], s)) &&
                  (e &&
                    null !== g.alternate &&
                    d.delete(null === g.key ? m : g.key),
                  (l = i(g, l, m)),
                  null === c ? (u = g) : (c.sibling = g),
                  (c = g));
              return (
                e &&
                  d.forEach(function (e) {
                    return t(r, e);
                  }),
                oa && ta(r, m),
                u
              );
            })(s, u, c, d);
          if (M(c)) {
            if ("function" != typeof (b = M(c))) throw Error(r(150));
            return (function (l, o, s, u) {
              if (null == s) throw Error(r(151));
              for (
                var c = null,
                  d = null,
                  m = o,
                  g = (o = 0),
                  y = null,
                  v = s.next();
                null !== m && !v.done;
                g++, v = s.next()
              ) {
                m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
                var b = p(l, m, v.value, u);
                if (null === b) {
                  null === m && (m = y);
                  break;
                }
                e && m && null === b.alternate && t(l, m),
                  (o = i(b, o, g)),
                  null === d ? (c = b) : (d.sibling = b),
                  (d = b),
                  (m = y);
              }
              if (v.done) return n(l, m), oa && ta(l, g), c;
              if (null === m) {
                for (; !v.done; g++, v = s.next())
                  null !== (v = f(l, v.value, u)) &&
                    ((o = i(v, o, g)),
                    null === d ? (c = v) : (d.sibling = v),
                    (d = v));
                return oa && ta(l, g), c;
              }
              for (m = a(m); !v.done; g++, v = s.next())
                null !== (v = h(m, l, g, v.value, u)) &&
                  (e &&
                    null !== v.alternate &&
                    m.delete(null === v.key ? g : v.key),
                  (o = i(v, o, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return (
                e &&
                  m.forEach(function (e) {
                    return t(l, e);
                  }),
                oa && ta(l, g),
                c
              );
            })(s, u, (c = b.call(c)), d);
          }
          if ("function" == typeof c.then) return v(s, u, Zi(c), d);
          if (c.$$typeof === S) return v(s, u, Pa(s, c), d);
          eo(s, c);
        }
        return ("string" == typeof c && "" !== c) ||
          "number" == typeof c ||
          "bigint" == typeof c
          ? ((c = "" + c),
            null !== u && 6 === u.tag
              ? (n(s, u.sibling), ((d = l(u, c)).return = s), (s = d))
              : (n(s, u), ((d = Br(c, s.mode, d)).return = s), (s = d)),
            o(s))
          : n(s, u);
      }
      return function (e, t, n, r) {
        try {
          Ki = 0;
          var a = v(e, t, n, r);
          return (Gi = null), a;
        } catch (i) {
          if (i === Qa || i === Xa) throw i;
          var l = Dr(29, i, null, e.mode);
          return (l.lanes = r), (l.return = e), l;
        }
      };
    }
    var ro = no(!0),
      ao = no(!1),
      lo = U(null),
      io = null;
    function oo(e) {
      var t = e.alternate;
      H(fo, 1 & fo.current),
        H(lo, e),
        null === io &&
          (null === t || null !== hl.current || null !== t.memoizedState) &&
          (io = e);
    }
    function so(e) {
      if (22 === e.tag) {
        if ((H(fo, fo.current), H(lo, e), null === io)) {
          var t = e.alternate;
          null !== t && null !== t.memoizedState && (io = e);
        }
      } else uo();
    }
    function uo() {
      H(fo, fo.current), H(lo, lo.current);
    }
    function co(e) {
      q(lo), io === e && (io = null), q(fo);
    }
    var fo = U(0);
    function po(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || "$?" === n.data || vd(n))
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (128 & t.flags) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function mo(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : d({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n);
    }
    var ho = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ou(),
          a = il(r);
        (a.payload = t),
          null != n && (a.callback = n),
          null !== (t = ol(e, a, r)) && (Du(t, e, r), sl(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ou(),
          a = il(r);
        (a.tag = 1),
          (a.payload = t),
          null != n && (a.callback = n),
          null !== (t = ol(e, a, r)) && (Du(t, e, r), sl(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ou(),
          r = il(n);
        (r.tag = 2),
          null != t && (r.callback = t),
          null !== (t = ol(e, r, n)) && (Du(t, e, n), sl(t, e, n));
      },
    };
    function go(e, t, n, r, a, l, i) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, l, i)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !Zn(n, r) ||
            !Zn(a, l);
    }
    function yo(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ho.enqueueReplaceState(t, t.state, null);
    }
    function vo(e, t) {
      var n = t;
      if ("ref" in t) for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var a in (n === t && (n = d({}, n)), e))
          void 0 === n[a] && (n[a] = e[a]);
      return n;
    }
    var bo =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            if (
              "object" == typeof window &&
              "function" == typeof window.ErrorEvent
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  "object" == typeof e &&
                  null !== e &&
                  "string" == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              "object" == typeof process &&
              "function" == typeof process.emit
            )
              return void process.emit("uncaughtException", e);
          };
    function xo(e) {
      bo(e);
    }
    function wo(e) {}
    function ko(e) {
      bo(e);
    }
    function So(e, t) {
      try {
        (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    function No(e, t, n) {
      try {
        (0, e.onCaughtError)(n.value, {
          componentStack: n.stack,
          errorBoundary: 1 === t.tag ? t.stateNode : null,
        });
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    function jo(e, t, n) {
      return (
        ((n = il(n)).tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          So(e, t);
        }),
        n
      );
    }
    function Eo(e) {
      return ((e = il(e)).tag = 3), e;
    }
    function Co(e, t, n, r) {
      var a = n.type.getDerivedStateFromError;
      if ("function" == typeof a) {
        var l = r.value;
        (e.payload = function () {
          return a(l);
        }),
          (e.callback = function () {
            No(t, n, r);
          });
      }
      var i = n.stateNode;
      null !== i &&
        "function" == typeof i.componentDidCatch &&
        (e.callback = function () {
          No(t, n, r),
            "function" != typeof a &&
              (null === Eu ? (Eu = new Set([this])) : Eu.add(this));
          var e = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: null !== e ? e : "",
          });
        });
    }
    var zo = Error(r(461)),
      Po = !1;
    function Lo(e, t, n, r) {
      t.child = null === e ? ao(t, null, n, r) : ro(t, e.child, n, r);
    }
    function To(e, t, n, r, a) {
      n = n.render;
      var l = t.ref;
      if ("ref" in r) {
        var i = {};
        for (var o in r) "ref" !== o && (i[o] = r[o]);
      } else i = r;
      return (
        Ca(t),
        (r = _l(e, t, n, i, l, a)),
        (o = Il()),
        null === e || Po
          ? (oa && o && ra(t), (t.flags |= 1), Lo(e, t, r, a), t.child)
          : (Dl(e, t, a), Ko(e, t, a))
      );
    }
    function Mo(e, t, n, r, a) {
      if (null === e) {
        var l = n.type;
        return "function" != typeof l ||
          Rr(l) ||
          void 0 !== l.defaultProps ||
          null !== n.compare
          ? (((e = qr(n.type, null, r, t, t.mode, a)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = l), _o(e, t, l, r, a));
      }
      if (((l = e.child), !Zo(e, a))) {
        var i = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Zn)(i, r) && e.ref === t.ref)
          return Ko(e, t, a);
      }
      return (
        (t.flags |= 1),
        ((e = $r(l, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function _o(e, t, n, r, a) {
      if (null !== e) {
        var l = e.memoizedProps;
        if (Zn(l, r) && e.ref === t.ref) {
          if (((Po = !1), (t.pendingProps = r = l), !Zo(e, a)))
            return (t.lanes = e.lanes), Ko(e, t, a);
          131072 & e.flags && (Po = !0);
        }
      }
      return Io(e, t, n, r, a);
    }
    function Fo(e, t, n) {
      var r = t.pendingProps,
        a = r.children,
        l = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode) {
        if (128 & t.flags) {
          if (((r = null !== l ? l.baseLanes | n : n), null !== e)) {
            for (a = t.child = e.child, l = 0; null !== a; )
              (l = l | a.lanes | a.childLanes), (a = a.sibling);
            t.childLanes = l & ~r;
          } else (t.childLanes = 0), (t.child = null);
          return Ao(e, t, r, n);
        }
        if (!(536870912 & n))
          return (
            (t.lanes = t.childLanes = 536870912),
            Ao(e, t, null !== l ? l.baseLanes | n : n, n)
          );
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          null !== e && Va(0, null !== l ? l.cachePool : null),
          null !== l ? yl(t, l) : vl(),
          so(t);
      } else
        null !== l
          ? (Va(0, l.cachePool), yl(t, l), uo(), (t.memoizedState = null))
          : (null !== e && Va(0, null), vl(), uo());
      return Lo(e, t, a, n), t.child;
    }
    function Ao(e, t, n, r) {
      var a = Ba();
      return (
        (a = null === a ? null : { parent: Fa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        null !== e && Va(0, null),
        vl(),
        so(t),
        null !== e && ja(e, t, r, !0),
        null
      );
    }
    function Oo(e, t) {
      var n = t.ref;
      if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
      else {
        if ("function" != typeof n && "object" != typeof n) throw Error(r(284));
        (null !== e && e.ref === n) || (t.flags |= 4194816);
      }
    }
    function Io(e, t, n, r, a) {
      return (
        Ca(t),
        (n = _l(e, t, n, r, void 0, a)),
        (r = Il()),
        null === e || Po
          ? (oa && r && ra(t), (t.flags |= 1), Lo(e, t, n, a), t.child)
          : (Dl(e, t, a), Ko(e, t, a))
      );
    }
    function Do(e, t, n, r, a, l) {
      return (
        Ca(t),
        (t.updateQueue = null),
        (n = Al(t, r, n, a)),
        Fl(e),
        (r = Il()),
        null === e || Po
          ? (oa && r && ra(t), (t.flags |= 1), Lo(e, t, n, l), t.child)
          : (Dl(e, t, l), Ko(e, t, l))
      );
    }
    function Ro(e, t, n, r, a) {
      if ((Ca(t), null === t.stateNode)) {
        var l = Or,
          i = n.contextType;
        "object" == typeof i && null !== i && (l = za(i)),
          (l = new n(r, l)),
          (t.memoizedState =
            null !== l.state && void 0 !== l.state ? l.state : null),
          (l.updater = ho),
          (t.stateNode = l),
          (l._reactInternals = t),
          ((l = t.stateNode).props = r),
          (l.state = t.memoizedState),
          (l.refs = {}),
          al(t),
          (i = n.contextType),
          (l.context = "object" == typeof i && null !== i ? za(i) : Or),
          (l.state = t.memoizedState),
          "function" == typeof (i = n.getDerivedStateFromProps) &&
            (mo(t, n, i, r), (l.state = t.memoizedState)),
          "function" == typeof n.getDerivedStateFromProps ||
            "function" == typeof l.getSnapshotBeforeUpdate ||
            ("function" != typeof l.UNSAFE_componentWillMount &&
              "function" != typeof l.componentWillMount) ||
            ((i = l.state),
            "function" == typeof l.componentWillMount && l.componentWillMount(),
            "function" == typeof l.UNSAFE_componentWillMount &&
              l.UNSAFE_componentWillMount(),
            i !== l.state && ho.enqueueReplaceState(l, l.state, null),
            fl(t, r, l, a),
            dl(),
            (l.state = t.memoizedState)),
          "function" == typeof l.componentDidMount && (t.flags |= 4194308),
          (r = !0);
      } else if (null === e) {
        l = t.stateNode;
        var o = t.memoizedProps,
          s = vo(n, o);
        l.props = s;
        var u = l.context,
          c = n.contextType;
        (i = Or), "object" == typeof c && null !== c && (i = za(c));
        var d = n.getDerivedStateFromProps;
        (c =
          "function" == typeof d ||
          "function" == typeof l.getSnapshotBeforeUpdate),
          (o = t.pendingProps !== o),
          c ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((o || u !== i) && yo(t, l, r, i)),
          (rl = !1);
        var f = t.memoizedState;
        (l.state = f),
          fl(t, r, l, a),
          dl(),
          (u = t.memoizedState),
          o || f !== u || rl
            ? ("function" == typeof d && (mo(t, n, d, r), (u = t.memoizedState)),
              (s = rl || go(t, n, s, r, f, u, i))
                ? (c ||
                    ("function" != typeof l.UNSAFE_componentWillMount &&
                      "function" != typeof l.componentWillMount) ||
                    ("function" == typeof l.componentWillMount &&
                      l.componentWillMount(),
                    "function" == typeof l.UNSAFE_componentWillMount &&
                      l.UNSAFE_componentWillMount()),
                  "function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308))
                : ("function" == typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (l.props = r),
              (l.state = u),
              (l.context = i),
              (r = s))
            : ("function" == typeof l.componentDidMount && (t.flags |= 4194308),
              (r = !1));
      } else {
        (l = t.stateNode),
          ll(e, t),
          (c = vo(n, (i = t.memoizedProps))),
          (l.props = c),
          (d = t.pendingProps),
          (f = l.context),
          (u = n.contextType),
          (s = Or),
          "object" == typeof u && null !== u && (s = za(u)),
          (u =
            "function" == typeof (o = n.getDerivedStateFromProps) ||
            "function" == typeof l.getSnapshotBeforeUpdate) ||
            ("function" != typeof l.UNSAFE_componentWillReceiveProps &&
              "function" != typeof l.componentWillReceiveProps) ||
            ((i !== d || f !== s) && yo(t, l, r, s)),
          (rl = !1),
          (f = t.memoizedState),
          (l.state = f),
          fl(t, r, l, a),
          dl();
        var p = t.memoizedState;
        i !== d ||
        f !== p ||
        rl ||
        (null !== e && null !== e.dependencies && Ea(e.dependencies))
          ? ("function" == typeof o && (mo(t, n, o, r), (p = t.memoizedState)),
            (c =
              rl ||
              go(t, n, c, r, f, p, s) ||
              (null !== e && null !== e.dependencies && Ea(e.dependencies)))
              ? (u ||
                  ("function" != typeof l.UNSAFE_componentWillUpdate &&
                    "function" != typeof l.componentWillUpdate) ||
                  ("function" == typeof l.componentWillUpdate &&
                    l.componentWillUpdate(r, p, s),
                  "function" == typeof l.UNSAFE_componentWillUpdate &&
                    l.UNSAFE_componentWillUpdate(r, p, s)),
                "function" == typeof l.componentDidUpdate && (t.flags |= 4),
                "function" == typeof l.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ("function" != typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (l.props = r),
            (l.state = p),
            (l.context = s),
            (r = c))
          : ("function" != typeof l.componentDidUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            "function" != typeof l.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (l = r),
        Oo(e, t),
        (r = !!(128 & t.flags)),
        l || r
          ? ((l = t.stateNode),
            (n =
              r && "function" != typeof n.getDerivedStateFromError
                ? null
                : l.render()),
            (t.flags |= 1),
            null !== e && r
              ? ((t.child = ro(t, e.child, null, a)),
                (t.child = ro(t, null, n, a)))
              : Lo(e, t, n, a),
            (t.memoizedState = l.state),
            (e = t.child))
          : (e = Ko(e, t, a)),
        e
      );
    }
    function $o(e, t, n, r) {
      return ha(), (t.flags |= 256), Lo(e, t, n, r), t.child;
    }
    var Uo = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function qo(e) {
      return { baseLanes: e, cachePool: Wa() };
    }
    function Ho(e, t, n) {
      return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= vu), e;
    }
    function Bo(e, t, n) {
      var a,
        l = t.pendingProps,
        i = !1,
        o = !!(128 & t.flags);
      if (
        ((a = o) ||
          (a = (null === e || null !== e.memoizedState) && !!(2 & fo.current)),
        a && ((i = !0), (t.flags &= -129)),
        (a = !!(32 & t.flags)),
        (t.flags &= -33),
        null === e)
      ) {
        if (oa) {
          if ((i ? oo(t) : uo(), oa)) {
            var s,
              u = ia;
            if ((s = u)) {
              e: {
                for (s = u, u = ua; 8 !== s.nodeType; ) {
                  if (!u) {
                    u = null;
                    break e;
                  }
                  if (null === (s = bd(s.nextSibling))) {
                    u = null;
                    break e;
                  }
                }
                u = s;
              }
              null !== u
                ? ((t.memoizedState = {
                    dehydrated: u,
                    treeContext: null !== Zr ? { id: Jr, overflow: ea } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  ((s = Dr(18, null, null, 0)).stateNode = u),
                  (s.return = t),
                  (t.child = s),
                  (la = t),
                  (ia = null),
                  (s = !0))
                : (s = !1);
            }
            s || da(t);
          }
          if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
            return vd(u) ? (t.lanes = 32) : (t.lanes = 536870912), null;
          co(t);
        }
        return (
          (u = l.children),
          (l = l.fallback),
          i
            ? (uo(),
              (u = Wo({ mode: "hidden", children: u }, (i = t.mode))),
              (l = Hr(l, i, n, null)),
              (u.return = t),
              (l.return = t),
              (u.sibling = l),
              (t.child = u),
              ((i = t.child).memoizedState = qo(n)),
              (i.childLanes = Ho(e, a, n)),
              (t.memoizedState = Uo),
              l)
            : (oo(t), Vo(t, u))
        );
      }
      if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
        if (o)
          256 & t.flags
            ? (oo(t), (t.flags &= -257), (t = Qo(e, t, n)))
            : null !== t.memoizedState
              ? (uo(), (t.child = e.child), (t.flags |= 128), (t = null))
              : (uo(),
                (i = l.fallback),
                (u = t.mode),
                (l = Wo({ mode: "visible", children: l.children }, u)),
                ((i = Hr(i, u, n, null)).flags |= 2),
                (l.return = t),
                (i.return = t),
                (l.sibling = i),
                (t.child = l),
                ro(t, e.child, null, n),
                ((l = t.child).memoizedState = qo(n)),
                (l.childLanes = Ho(e, a, n)),
                (t.memoizedState = Uo),
                (t = i));
        else if ((oo(t), vd(u))) {
          if ((a = u.nextSibling && u.nextSibling.dataset)) var c = a.dgst;
          (a = c),
            ((l = Error(r(419))).stack = ""),
            (l.digest = a),
            ya({ value: l, source: null, stack: null }),
            (t = Qo(e, t, n));
        } else if ((Po || ja(e, t, n, !1), (a = !!(n & e.childLanes)), Po || a)) {
          if (
            null !== (a = lu) &&
            0 !==
              (l =
                (l = 42 & (l = n & -n) ? 1 : Le(l)) & (a.suspendedLanes | n)
                  ? 0
                  : l) &&
            l !== s.retryLane
          )
            throw ((s.retryLane = l), _r(e, l), Du(a, e, l), zo);
          "$?" === u.data || Xu(), (t = Qo(e, t, n));
        } else
          "$?" === u.data
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = s.treeContext),
              (ia = bd(u.nextSibling)),
              (la = t),
              (oa = !0),
              (sa = null),
              (ua = !1),
              null !== e &&
                ((Gr[Kr++] = Jr),
                (Gr[Kr++] = ea),
                (Gr[Kr++] = Zr),
                (Jr = e.id),
                (ea = e.overflow),
                (Zr = t)),
              ((t = Vo(t, l.children)).flags |= 4096));
        return t;
      }
      return i
        ? (uo(),
          (i = l.fallback),
          (u = t.mode),
          (c = (s = e.child).sibling),
          ((l = $r(s, { mode: "hidden", children: l.children })).subtreeFlags =
            65011712 & s.subtreeFlags),
          null !== c ? (i = $r(c, i)) : ((i = Hr(i, u, n, null)).flags |= 2),
          (i.return = t),
          (l.return = t),
          (l.sibling = i),
          (t.child = l),
          (l = i),
          (i = t.child),
          null === (u = e.child.memoizedState)
            ? (u = qo(n))
            : (null !== (s = u.cachePool)
                ? ((c = Fa._currentValue),
                  (s = s.parent !== c ? { parent: c, pool: c } : s))
                : (s = Wa()),
              (u = { baseLanes: u.baseLanes | n, cachePool: s })),
          (i.memoizedState = u),
          (i.childLanes = Ho(e, a, n)),
          (t.memoizedState = Uo),
          l)
        : (oo(t),
          (e = (n = e.child).sibling),
          ((n = $r(n, { mode: "visible", children: l.children })).return = t),
          (n.sibling = null),
          null !== e &&
            (null === (a = t.deletions)
              ? ((t.deletions = [e]), (t.flags |= 16))
              : a.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Vo(e, t) {
      return (
        ((t = Wo({ mode: "visible", children: t }, e.mode)).return = e),
        (e.child = t)
      );
    }
    function Wo(e, t) {
      return (
        ((e = Dr(22, e, null, t)).lanes = 0),
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        e
      );
    }
    function Qo(e, t, n) {
      return (
        ro(t, e.child, null, n),
        ((e = Vo(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Yo(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      null !== r && (r.lanes |= t), Sa(e.return, t, n);
    }
    function Xo(e, t, n, r, a) {
      var l = e.memoizedState;
      null === l
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: a,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = a));
    }
    function Go(e, t, n) {
      var r = t.pendingProps,
        a = r.revealOrder,
        l = r.tail;
      if ((Lo(e, t, r.children, n), 2 & (r = fo.current)))
        (r = (1 & r) | 2), (t.flags |= 128);
      else {
        if (null !== e && 128 & e.flags)
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Yo(e, n, t);
            else if (19 === e.tag) Yo(e, n, t);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      switch ((H(fo, r), a)) {
        case "forwards":
          for (n = t.child, a = null; null !== n; )
            null !== (e = n.alternate) && null === po(e) && (a = n),
              (n = n.sibling);
          null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            Xo(t, !1, a, n, l);
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a; ) {
            if (null !== (e = a.alternate) && null === po(e)) {
              t.child = a;
              break;
            }
            (e = a.sibling), (a.sibling = n), (n = a), (a = e);
          }
          Xo(t, !0, n, null, l);
          break;
        case "together":
          Xo(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ko(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (hu |= t.lanes),
        !(n & t.childLanes))
      ) {
        if (null === e) return null;
        if ((ja(e, t, n, !1), !(n & t.childLanes))) return null;
      }
      if (null !== e && t.child !== e.child) throw Error(r(153));
      if (null !== t.child) {
        for (
          n = $r((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;
  
        )
          (e = e.sibling), ((n = n.sibling = $r(e, e.pendingProps)).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function Zo(e, t) {
      return !!(e.lanes & t) || !(null === (e = e.dependencies) || !Ea(e));
    }
    function Jo(e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps) Po = !0;
        else {
          if (!(Zo(e, n) || 128 & t.flags))
            return (
              (Po = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    Y(t, t.stateNode.containerInfo),
                      wa(0, Fa, e.memoizedState.cache),
                      ha();
                    break;
                  case 27:
                  case 5:
                    G(t);
                    break;
                  case 4:
                    Y(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    wa(0, t.type, t.memoizedProps.value);
                    break;
                  case 13:
                    var r = t.memoizedState;
                    if (null !== r)
                      return null !== r.dehydrated
                        ? (oo(t), (t.flags |= 128), null)
                        : n & t.child.childLanes
                          ? Bo(e, t, n)
                          : (oo(t),
                            null !== (e = Ko(e, t, n)) ? e.sibling : null);
                    oo(t);
                    break;
                  case 19:
                    var a = !!(128 & e.flags);
                    if (
                      ((r = !!(n & t.childLanes)) ||
                        (ja(e, t, n, !1), (r = !!(n & t.childLanes))),
                      a)
                    ) {
                      if (r) return Go(e, t, n);
                      t.flags |= 128;
                    }
                    if (
                      (null !== (a = t.memoizedState) &&
                        ((a.rendering = null),
                        (a.tail = null),
                        (a.lastEffect = null)),
                      H(fo, fo.current),
                      r)
                    )
                      break;
                    return null;
                  case 22:
                  case 23:
                    return (t.lanes = 0), Fo(e, t, n);
                  case 24:
                    wa(0, Fa, e.memoizedState.cache);
                }
                return Ko(e, t, n);
              })(e, t, n)
            );
          Po = !!(131072 & e.flags);
        }
      else (Po = !1), oa && 1048576 & t.flags && na(t, Xr, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            e = t.pendingProps;
            var a = t.elementType,
              l = a._init;
            if (((a = l(a._payload)), (t.type = a), "function" != typeof a)) {
              if (null != a) {
                if ((l = a.$$typeof) === N) {
                  (t.tag = 11), (t = To(null, t, a, e, n));
                  break e;
                }
                if (l === C) {
                  (t.tag = 14), (t = Mo(null, t, a, e, n));
                  break e;
                }
              }
              throw ((t = F(a) || a), Error(r(306, t, "")));
            }
            Rr(a)
              ? ((e = vo(a, e)), (t.tag = 1), (t = Ro(null, t, a, e, n)))
              : ((t.tag = 0), (t = Io(null, t, a, e, n)));
          }
          return t;
        case 0:
          return Io(e, t, t.type, t.pendingProps, n);
        case 1:
          return Ro(e, t, (a = t.type), (l = vo(a, t.pendingProps)), n);
        case 3:
          e: {
            if ((Y(t, t.stateNode.containerInfo), null === e))
              throw Error(r(387));
            a = t.pendingProps;
            var i = t.memoizedState;
            (l = i.element), ll(e, t), fl(t, a, null, n);
            var o = t.memoizedState;
            if (
              ((a = o.cache),
              wa(0, Fa, a),
              a !== i.cache && Na(t, [Fa], n, !0),
              dl(),
              (a = o.element),
              i.isDehydrated)
            ) {
              if (
                ((i = { element: a, isDehydrated: !1, cache: o.cache }),
                (t.updateQueue.baseState = i),
                (t.memoizedState = i),
                256 & t.flags)
              ) {
                t = $o(e, t, a, n);
                break e;
              }
              if (a !== l) {
                ya((l = Er(Error(r(424)), t))), (t = $o(e, t, a, n));
                break e;
              }
              if (9 === (e = t.stateNode.containerInfo).nodeType) e = e.body;
              else e = "HTML" === e.nodeName ? e.ownerDocument.body : e;
              for (
                ia = bd(e.firstChild),
                  la = t,
                  oa = !0,
                  sa = null,
                  ua = !0,
                  n = ao(t, null, a, n),
                  t.child = n;
                n;
  
              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
            } else {
              if ((ha(), a === l)) {
                t = Ko(e, t, n);
                break e;
              }
              Lo(e, t, a, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            Oo(e, t),
            null === e
              ? (n = Ld(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : oa ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  ((a = ld(W.current).createElement(n))[Fe] = t),
                  (a[Ae] = e),
                  nd(a, n, e),
                  Qe(a),
                  (t.stateNode = a))
              : (t.memoizedState = Ld(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            G(t),
            null === e &&
              oa &&
              ((a = t.stateNode = kd(t.type, t.pendingProps, W.current)),
              (la = t),
              (ua = !0),
              (l = ia),
              hd(t.type) ? ((xd = l), (ia = bd(a.firstChild))) : (ia = l)),
            Lo(e, t, t.pendingProps.children, n),
            Oo(e, t),
            null === e && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            null === e &&
              oa &&
              ((l = a = ia) &&
                (null !==
                (a = (function (e, t, n, r) {
                  for (; 1 === e.nodeType; ) {
                    var a = n;
                    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                      if (!r && ("INPUT" !== e.nodeName || "hidden" !== e.type))
                        break;
                    } else if (r) {
                      if (!e[Ue])
                        switch (t) {
                          case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                          case "link":
                            if (
                              "stylesheet" === (l = e.getAttribute("rel")) &&
                              e.hasAttribute("data-precedence")
                            )
                              break;
                            if (
                              l !== a.rel ||
                              e.getAttribute("href") !==
                                (null == a.href || "" === a.href
                                  ? null
                                  : a.href) ||
                              e.getAttribute("crossorigin") !==
                                (null == a.crossOrigin ? null : a.crossOrigin) ||
                              e.getAttribute("title") !==
                                (null == a.title ? null : a.title)
                            )
                              break;
                            return e;
                          case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                          case "script":
                            if (
                              ((l = e.getAttribute("src")) !==
                                (null == a.src ? null : a.src) ||
                                e.getAttribute("type") !==
                                  (null == a.type ? null : a.type) ||
                                e.getAttribute("crossorigin") !==
                                  (null == a.crossOrigin
                                    ? null
                                    : a.crossOrigin)) &&
                              l &&
                              e.hasAttribute("async") &&
                              !e.hasAttribute("itemprop")
                            )
                              break;
                            return e;
                          default:
                            return e;
                        }
                    } else {
                      if ("input" !== t || "hidden" !== e.type) return e;
                      var l = null == a.name ? null : "" + a.name;
                      if ("hidden" === a.type && e.getAttribute("name") === l)
                        return e;
                    }
                    if (null === (e = bd(e.nextSibling))) break;
                  }
                  return null;
                })(a, t.type, t.pendingProps, ua))
                  ? ((t.stateNode = a),
                    (la = t),
                    (ia = bd(a.firstChild)),
                    (ua = !1),
                    (l = !0))
                  : (l = !1)),
              l || da(t)),
            G(t),
            (l = t.type),
            (i = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (a = i.children),
            sd(l, i) ? (a = null) : null !== o && sd(l, o) && (t.flags |= 32),
            null !== t.memoizedState &&
              ((l = _l(e, t, Ol, null, null, n)), (Gd._currentValue = l)),
            Oo(e, t),
            Lo(e, t, a, n),
            t.child
          );
        case 6:
          return (
            null === e &&
              oa &&
              ((e = n = ia) &&
                (null !==
                (n = (function (e, t, n) {
                  if ("" === t) return null;
                  for (; 3 !== e.nodeType; ) {
                    if (
                      (1 !== e.nodeType ||
                        "INPUT" !== e.nodeName ||
                        "hidden" !== e.type) &&
                      !n
                    )
                      return null;
                    if (null === (e = bd(e.nextSibling))) return null;
                  }
                  return e;
                })(n, t.pendingProps, ua))
                  ? ((t.stateNode = n), (la = t), (ia = null), (e = !0))
                  : (e = !1)),
              e || da(t)),
            null
          );
        case 13:
          return Bo(e, t, n);
        case 4:
          return (
            Y(t, t.stateNode.containerInfo),
            (a = t.pendingProps),
            null === e ? (t.child = ro(t, null, a, n)) : Lo(e, t, a, n),
            t.child
          );
        case 11:
          return To(e, t, t.type, t.pendingProps, n);
        case 7:
          return Lo(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Lo(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return (
            (a = t.pendingProps),
            wa(0, t.type, a.value),
            Lo(e, t, a.children, n),
            t.child
          );
        case 9:
          return (
            (l = t.type._context),
            (a = t.pendingProps.children),
            Ca(t),
            (a = a((l = za(l)))),
            (t.flags |= 1),
            Lo(e, t, a, n),
            t.child
          );
        case 14:
          return Mo(e, t, t.type, t.pendingProps, n);
        case 15:
          return _o(e, t, t.type, t.pendingProps, n);
        case 19:
          return Go(e, t, n);
        case 31:
          return (
            (a = t.pendingProps),
            (n = t.mode),
            (a = { mode: a.mode, children: a.children }),
            null === e
              ? (((n = Wo(a, n)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n))
              : (((n = $r(e.child, a)).ref = t.ref),
                (t.child = n),
                (n.return = t),
                (t = n)),
            t
          );
        case 22:
          return Fo(e, t, n);
        case 24:
          return (
            Ca(t),
            (a = za(Fa)),
            null === e
              ? (null === (l = Ba()) &&
                  ((l = lu),
                  (i = Aa()),
                  (l.pooledCache = i),
                  i.refCount++,
                  null !== i && (l.pooledCacheLanes |= n),
                  (l = i)),
                (t.memoizedState = { parent: a, cache: l }),
                al(t),
                wa(0, Fa, l))
              : (!!(e.lanes & n) && (ll(e, t), fl(t, null, null, n), dl()),
                (l = e.memoizedState),
                (i = t.memoizedState),
                l.parent !== a
                  ? ((l = { parent: a, cache: a }),
                    (t.memoizedState = l),
                    0 === t.lanes &&
                      (t.memoizedState = t.updateQueue.baseState = l),
                    wa(0, Fa, a))
                  : ((a = i.cache),
                    wa(0, Fa, a),
                    a !== l.cache && Na(t, [Fa], n, !0))),
            Lo(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function es(e) {
      e.flags |= 4;
    }
    function ts(e, t) {
      if ("stylesheet" !== t.type || 4 & t.state.loading) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Hd(t))) {
        if (
          null !== (t = lo.current) &&
          ((4194048 & ou) === ou
            ? null !== io
            : ((62914560 & ou) !== ou && !(536870912 & ou)) || t !== io)
        )
          throw ((el = Ga), Ya);
        e.flags |= 8192;
      }
    }
    function ns(e, t) {
      null !== t && (e.flags |= 4),
        16384 & e.flags &&
          ((t = 22 !== e.tag ? je() : 536870912), (e.lanes |= t), (bu |= t));
    }
    function rs(e, t) {
      if (!oa)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling);
            null === n ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling);
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function as(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= 65011712 & a.subtreeFlags),
            (r |= 65011712 & a.flags),
            (a.return = e),
            (a = a.sibling);
      else
        for (a = e.child; null !== a; )
          (n |= a.lanes | a.childLanes),
            (r |= a.subtreeFlags),
            (r |= a.flags),
            (a.return = e),
            (a = a.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = n), t;
    }
    function ls(e, t, n) {
      var a = t.pendingProps;
      switch ((aa(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
        case 1:
          return as(t), null;
        case 3:
          return (
            (n = t.stateNode),
            (a = null),
            null !== e && (a = e.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            ka(Fa),
            X(),
            n.pendingContext &&
              ((n.context = n.pendingContext), (n.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (ma(t)
                ? es(t)
                : null === e ||
                  (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                  ((t.flags |= 1024), ga())),
            as(t),
            null
          );
        case 26:
          return (
            (n = t.memoizedState),
            null === e
              ? (es(t),
                null !== n ? (as(t), ts(t, n)) : (as(t), (t.flags &= -16777217)))
              : n
                ? n !== e.memoizedState
                  ? (es(t), as(t), ts(t, n))
                  : (as(t), (t.flags &= -16777217))
                : (e.memoizedProps !== a && es(t), as(t), (t.flags &= -16777217)),
            null
          );
        case 27:
          K(t), (n = W.current);
          var l = t.type;
          if (null !== e && null != t.stateNode) e.memoizedProps !== a && es(t);
          else {
            if (!a) {
              if (null === t.stateNode) throw Error(r(166));
              return as(t), null;
            }
            (e = B.current),
              ma(t) ? fa(t) : ((e = kd(l, a, n)), (t.stateNode = e), es(t));
          }
          return as(t), null;
        case 5:
          if ((K(t), (n = t.type), null !== e && null != t.stateNode))
            e.memoizedProps !== a && es(t);
          else {
            if (!a) {
              if (null === t.stateNode) throw Error(r(166));
              return as(t), null;
            }
            if (((e = B.current), ma(t))) fa(t);
            else {
              switch (((l = ld(W.current)), e)) {
                case 1:
                  e = l.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  e = l.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                default:
                  switch (n) {
                    case "svg":
                      e = l.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      e = l.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        n,
                      );
                      break;
                    case "script":
                      ((e = l.createElement("div")).innerHTML =
                        "<script><\/script>"),
                        (e = e.removeChild(e.firstChild));
                      break;
                    case "select":
                      (e =
                        "string" == typeof a.is
                          ? l.createElement("select", { is: a.is })
                          : l.createElement("select")),
                        a.multiple
                          ? (e.multiple = !0)
                          : a.size && (e.size = a.size);
                      break;
                    default:
                      e =
                        "string" == typeof a.is
                          ? l.createElement(n, { is: a.is })
                          : l.createElement(n);
                  }
              }
              (e[Fe] = t), (e[Ae] = a);
              e: for (l = t.child; null !== l; ) {
                if (5 === l.tag || 6 === l.tag) e.appendChild(l.stateNode);
                else if (4 !== l.tag && 27 !== l.tag && null !== l.child) {
                  (l.child.return = l), (l = l.child);
                  continue;
                }
                if (l === t) break e;
                for (; null === l.sibling; ) {
                  if (null === l.return || l.return === t) break e;
                  l = l.return;
                }
                (l.sibling.return = l.return), (l = l.sibling);
              }
              t.stateNode = e;
              e: switch ((nd(e, n, a), n)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!a.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && es(t);
            }
          }
          return as(t), (t.flags &= -16777217), null;
        case 6:
          if (e && null != t.stateNode) e.memoizedProps !== a && es(t);
          else {
            if ("string" != typeof a && null === t.stateNode) throw Error(r(166));
            if (((e = W.current), ma(t))) {
              if (
                ((e = t.stateNode),
                (n = t.memoizedProps),
                (a = null),
                null !== (l = la))
              )
                switch (l.tag) {
                  case 27:
                  case 5:
                    a = l.memoizedProps;
                }
              (e[Fe] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (null !== a && !0 === a.suppressHydrationWarning) ||
                  Zc(e.nodeValue, n)
                )) || da(t);
            } else ((e = ld(e).createTextNode(a))[Fe] = t), (t.stateNode = e);
          }
          return as(t), null;
        case 13:
          if (
            ((a = t.memoizedState),
            null === e ||
              (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (((l = ma(t)), null !== a && null !== a.dehydrated)) {
              if (null === e) {
                if (!l) throw Error(r(318));
                if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null))
                  throw Error(r(317));
                l[Fe] = t;
              } else
                ha(),
                  !(128 & t.flags) && (t.memoizedState = null),
                  (t.flags |= 4);
              as(t), (l = !1);
            } else
              (l = ga()),
                null !== e &&
                  null !== e.memoizedState &&
                  (e.memoizedState.hydrationErrors = l),
                (l = !0);
            if (!l) return 256 & t.flags ? (co(t), t) : (co(t), null);
          }
          if ((co(t), 128 & t.flags)) return (t.lanes = n), t;
          if (
            ((n = null !== a), (e = null !== e && null !== e.memoizedState), n)
          ) {
            (l = null),
              null !== (a = t.child).alternate &&
                null !== a.alternate.memoizedState &&
                null !== a.alternate.memoizedState.cachePool &&
                (l = a.alternate.memoizedState.cachePool.pool);
            var i = null;
            null !== a.memoizedState &&
              null !== a.memoizedState.cachePool &&
              (i = a.memoizedState.cachePool.pool),
              i !== l && (a.flags |= 2048);
          }
          return (
            n !== e && n && (t.child.flags |= 8192),
            ns(t, t.updateQueue),
            as(t),
            null
          );
        case 4:
          return X(), null === e && qc(t.stateNode.containerInfo), as(t), null;
        case 10:
          return ka(t.type), as(t), null;
        case 19:
          if ((q(fo), null === (l = t.memoizedState))) return as(t), null;
          if (((a = !!(128 & t.flags)), null === (i = l.rendering)))
            if (a) rs(l, !1);
            else {
              if (0 !== mu || (null !== e && 128 & e.flags))
                for (e = t.child; null !== e; ) {
                  if (null !== (i = po(e))) {
                    for (
                      t.flags |= 128,
                        rs(l, !1),
                        e = i.updateQueue,
                        t.updateQueue = e,
                        ns(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      null !== n;
  
                    )
                      Ur(n, e), (n = n.sibling);
                    return H(fo, (1 & fo.current) | 2), t.child;
                  }
                  e = e.sibling;
                }
              null !== l.tail &&
                re() > Nu &&
                ((t.flags |= 128), (a = !0), rs(l, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (null !== (e = po(i))) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  ns(t, e),
                  rs(l, !0),
                  null === l.tail &&
                    "hidden" === l.tailMode &&
                    !i.alternate &&
                    !oa)
                )
                  return as(t), null;
              } else
                2 * re() - l.renderingStartTime > Nu &&
                  536870912 !== n &&
                  ((t.flags |= 128), (a = !0), rs(l, !1), (t.lanes = 4194304));
            l.isBackwards
              ? ((i.sibling = t.child), (t.child = i))
              : (null !== (e = l.last) ? (e.sibling = i) : (t.child = i),
                (l.last = i));
          }
          return null !== l.tail
            ? ((t = l.tail),
              (l.rendering = t),
              (l.tail = t.sibling),
              (l.renderingStartTime = re()),
              (t.sibling = null),
              (e = fo.current),
              H(fo, a ? (1 & e) | 2 : 1 & e),
              t)
            : (as(t), null);
        case 22:
        case 23:
          return (
            co(t),
            bl(),
            (a = null !== t.memoizedState),
            null !== e
              ? (null !== e.memoizedState) !== a && (t.flags |= 8192)
              : a && (t.flags |= 8192),
            a
              ? !!(536870912 & n) &&
                !(128 & t.flags) &&
                (as(t), 6 & t.subtreeFlags && (t.flags |= 8192))
              : as(t),
            null !== (n = t.updateQueue) && ns(t, n.retryQueue),
            (n = null),
            null !== e &&
              null !== e.memoizedState &&
              null !== e.memoizedState.cachePool &&
              (n = e.memoizedState.cachePool.pool),
            (a = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (a = t.memoizedState.cachePool.pool),
            a !== n && (t.flags |= 2048),
            null !== e && q(Ha),
            null
          );
        case 24:
          return (
            (n = null),
            null !== e && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            ka(Fa),
            as(t),
            null
          );
        case 25:
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function is(e, t) {
      switch ((aa(t), t.tag)) {
        case 1:
          return 65536 & (e = t.flags)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null;
        case 3:
          return (
            ka(Fa),
            X(),
            65536 & (e = t.flags) && !(128 & e)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null
          );
        case 26:
        case 27:
        case 5:
          return K(t), null;
        case 13:
          if ((co(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
            if (null === t.alternate) throw Error(r(340));
            ha();
          }
          return 65536 & (e = t.flags)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null;
        case 19:
          return q(fo), null;
        case 4:
          return X(), null;
        case 10:
          return ka(t.type), null;
        case 22:
        case 23:
          return (
            co(t),
            bl(),
            null !== e && q(Ha),
            65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
          );
        case 24:
          return ka(Fa), null;
        default:
          return null;
      }
    }
    function os(e, t) {
      switch ((aa(t), t.tag)) {
        case 3:
          ka(Fa), X();
          break;
        case 26:
        case 27:
        case 5:
          K(t);
          break;
        case 4:
          X();
          break;
        case 13:
          co(t);
          break;
        case 19:
          q(fo);
          break;
        case 10:
          ka(t.type);
          break;
        case 22:
        case 23:
          co(t), bl(), null !== e && q(Ha);
          break;
        case 24:
          ka(Fa);
      }
    }
    function ss(e, t) {
      try {
        var n = t.updateQueue,
          r = null !== n ? n.lastEffect : null;
        if (null !== r) {
          var a = r.next;
          n = a;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var l = n.create,
                i = n.inst;
              (r = l()), (i.destroy = r);
            }
            n = n.next;
          } while (n !== a);
        }
      } catch (o) {
        fc(t, t.return, o);
      }
    }
    function us(e, t, n) {
      try {
        var r = t.updateQueue,
          a = null !== r ? r.lastEffect : null;
        if (null !== a) {
          var l = a.next;
          r = l;
          do {
            if ((r.tag & e) === e) {
              var i = r.inst,
                o = i.destroy;
              if (void 0 !== o) {
                (i.destroy = void 0), (a = t);
                var s = n,
                  u = o;
                try {
                  u();
                } catch (c) {
                  fc(a, s, c);
                }
              }
            }
            r = r.next;
          } while (r !== l);
        }
      } catch (c) {
        fc(t, t.return, c);
      }
    }
    function cs(e) {
      var t = e.updateQueue;
      if (null !== t) {
        var n = e.stateNode;
        try {
          ml(t, n);
        } catch (r) {
          fc(e, e.return, r);
        }
      }
    }
    function ds(e, t, n) {
      (n.props = vo(e.type, e.memoizedProps)), (n.state = e.memoizedState);
      try {
        n.componentWillUnmount();
      } catch (r) {
        fc(e, t, r);
      }
    }
    function fs(e, t) {
      try {
        var n = e.ref;
        if (null !== n) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (a) {
        fc(e, t, a);
      }
    }
    function ps(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (null !== n)
        if ("function" == typeof r)
          try {
            r();
          } catch (a) {
            fc(e, t, a);
          } finally {
            (e.refCleanup = null),
              null != (e = e.alternate) && (e.refCleanup = null);
          }
        else if ("function" == typeof n)
          try {
            n(null);
          } catch (l) {
            fc(e, t, l);
          }
        else n.current = null;
    }
    function ms(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            n.autoFocus && r.focus();
            break e;
          case "img":
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (a) {
        fc(e, e.return, a);
      }
    }
    function hs(e, t, n) {
      try {
        var a = e.stateNode;
        !(function (e, t, n, a) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "input":
              var l = null,
                i = null,
                o = null,
                s = null,
                u = null,
                c = null,
                d = null;
              for (m in n) {
                var f = n[m];
                if (n.hasOwnProperty(m) && null != f)
                  switch (m) {
                    case "checked":
                    case "value":
                      break;
                    case "defaultValue":
                      u = f;
                    default:
                      a.hasOwnProperty(m) || ed(e, t, m, null, a, f);
                  }
              }
              for (var p in a) {
                var m = a[p];
                if (((f = n[p]), a.hasOwnProperty(p) && (null != m || null != f)))
                  switch (p) {
                    case "type":
                      i = m;
                      break;
                    case "name":
                      l = m;
                      break;
                    case "checked":
                      c = m;
                      break;
                    case "defaultChecked":
                      d = m;
                      break;
                    case "value":
                      o = m;
                      break;
                    case "defaultValue":
                      s = m;
                      break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != m) throw Error(r(137, t));
                      break;
                    default:
                      m !== f && ed(e, t, p, m, a, f);
                  }
              }
              return void vt(e, o, s, u, c, d, i, l);
            case "select":
              for (i in ((m = o = s = p = null), n))
                if (((u = n[i]), n.hasOwnProperty(i) && null != u))
                  switch (i) {
                    case "value":
                      break;
                    case "multiple":
                      m = u;
                    default:
                      a.hasOwnProperty(i) || ed(e, t, i, null, a, u);
                  }
              for (l in a)
                if (
                  ((i = a[l]),
                  (u = n[l]),
                  a.hasOwnProperty(l) && (null != i || null != u))
                )
                  switch (l) {
                    case "value":
                      p = i;
                      break;
                    case "defaultValue":
                      s = i;
                      break;
                    case "multiple":
                      o = i;
                    default:
                      i !== u && ed(e, t, l, i, a, u);
                  }
              return (
                (t = s),
                (n = o),
                (a = m),
                void (null != p
                  ? wt(e, !!n, p, !1)
                  : !!a != !!n &&
                    (null != t ? wt(e, !!n, t, !0) : wt(e, !!n, n ? [] : "", !1)))
              );
            case "textarea":
              for (s in ((m = p = null), n))
                if (
                  ((l = n[s]),
                  n.hasOwnProperty(s) && null != l && !a.hasOwnProperty(s))
                )
                  switch (s) {
                    case "value":
                    case "children":
                      break;
                    default:
                      ed(e, t, s, null, a, l);
                  }
              for (o in a)
                if (
                  ((l = a[o]),
                  (i = n[o]),
                  a.hasOwnProperty(o) && (null != l || null != i))
                )
                  switch (o) {
                    case "value":
                      p = l;
                      break;
                    case "defaultValue":
                      m = l;
                      break;
                    case "children":
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != l) throw Error(r(91));
                      break;
                    default:
                      l !== i && ed(e, t, o, l, a, i);
                  }
              return void kt(e, p, m);
            case "option":
              for (var h in n)
                if (
                  ((p = n[h]),
                  n.hasOwnProperty(h) && null != p && !a.hasOwnProperty(h))
                )
                  if ("selected" === h) e.selected = !1;
                  else ed(e, t, h, null, a, p);
              for (u in a)
                if (
                  ((p = a[u]),
                  (m = n[u]),
                  a.hasOwnProperty(u) && p !== m && (null != p || null != m))
                )
                  if ("selected" === u)
                    e.selected =
                      p && "function" != typeof p && "symbol" != typeof p;
                  else ed(e, t, u, p, a, m);
              return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
              for (var g in n)
                (p = n[g]),
                  n.hasOwnProperty(g) &&
                    null != p &&
                    !a.hasOwnProperty(g) &&
                    ed(e, t, g, null, a, p);
              for (c in a)
                if (
                  ((p = a[c]),
                  (m = n[c]),
                  a.hasOwnProperty(c) && p !== m && (null != p || null != m))
                )
                  switch (c) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      if (null != p) throw Error(r(137, t));
                      break;
                    default:
                      ed(e, t, c, p, a, m);
                  }
              return;
            default:
              if (zt(t)) {
                for (var y in n)
                  (p = n[y]),
                    n.hasOwnProperty(y) &&
                      void 0 !== p &&
                      !a.hasOwnProperty(y) &&
                      td(e, t, y, void 0, a, p);
                for (d in a)
                  (p = a[d]),
                    (m = n[d]),
                    !a.hasOwnProperty(d) ||
                      p === m ||
                      (void 0 === p && void 0 === m) ||
                      td(e, t, d, p, a, m);
                return;
              }
          }
          for (var v in n)
            (p = n[v]),
              n.hasOwnProperty(v) &&
                null != p &&
                !a.hasOwnProperty(v) &&
                ed(e, t, v, null, a, p);
          for (f in a)
            (p = a[f]),
              (m = n[f]),
              !a.hasOwnProperty(f) ||
                p === m ||
                (null == p && null == m) ||
                ed(e, t, f, p, a, m);
        })(a, e.type, n, t),
          (a[Ae] = t);
      } catch (l) {
        fc(e, e.return, l);
      }
    }
    function gs(e) {
      return (
        5 === e.tag ||
        3 === e.tag ||
        26 === e.tag ||
        (27 === e.tag && hd(e.type)) ||
        4 === e.tag
      );
    }
    function ys(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || gs(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
  
        ) {
          if (27 === e.tag && hd(e.type)) continue e;
          if (2 & e.flags) continue e;
          if (null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function vs(e, t, n) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode),
          t
            ? (9 === n.nodeType
                ? n.body
                : "HTML" === n.nodeName
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t =
                9 === n.nodeType
                  ? n.body
                  : "HTML" === n.nodeName
                    ? n.ownerDocument.body
                    : n).appendChild(e),
              null != (n = n._reactRootContainer) ||
                null !== t.onclick ||
                (t.onclick = Jc));
      else if (
        4 !== r &&
        (27 === r && hd(e.type) && ((n = e.stateNode), (t = null)),
        null !== (e = e.child))
      )
        for (vs(e, t, n), e = e.sibling; null !== e; )
          vs(e, t, n), (e = e.sibling);
    }
    function bs(e, t, n) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
      else if (
        4 !== r &&
        (27 === r && hd(e.type) && (n = e.stateNode), null !== (e = e.child))
      )
        for (bs(e, t, n), e = e.sibling; null !== e; )
          bs(e, t, n), (e = e.sibling);
    }
    function xs(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, a = t.attributes; a.length; )
          t.removeAttributeNode(a[0]);
        nd(t, r, n), (t[Fe] = e), (t[Ae] = n);
      } catch (l) {
        fc(e, e.return, l);
      }
    }
    var ws = !1,
      ks = !1,
      Ss = !1,
      Ns = "function" == typeof WeakSet ? WeakSet : Set,
      js = null;
    function Es(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Rs(e, n), 4 & r && ss(5, n);
          break;
        case 1:
          if ((Rs(e, n), 4 & r))
            if (((e = n.stateNode), null === t))
              try {
                e.componentDidMount();
              } catch (i) {
                fc(n, n.return, i);
              }
            else {
              var a = vo(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (o) {
                fc(n, n.return, o);
              }
            }
          64 & r && cs(n), 512 & r && fs(n, n.return);
          break;
        case 3:
          if ((Rs(e, n), 64 & r && null !== (e = n.updateQueue))) {
            if (((t = null), null !== n.child))
              switch (n.child.tag) {
                case 27:
                case 5:
                case 1:
                  t = n.child.stateNode;
              }
            try {
              ml(e, t);
            } catch (i) {
              fc(n, n.return, i);
            }
          }
          break;
        case 27:
          null === t && 4 & r && xs(n);
        case 26:
        case 5:
          Rs(e, n), null === t && 4 & r && ms(n), 512 & r && fs(n, n.return);
          break;
        case 12:
          Rs(e, n);
          break;
        case 13:
          Rs(e, n),
            4 & r && Ms(e, n),
            64 & r &&
              null !== (e = n.memoizedState) &&
              null !== (e = e.dehydrated) &&
              (function (e, t) {
                var n = e.ownerDocument;
                if ("$?" !== e.data || "complete" === n.readyState) t();
                else {
                  var r = function () {
                    t(), n.removeEventListener("DOMContentLoaded", r);
                  };
                  n.addEventListener("DOMContentLoaded", r), (e._reactRetry = r);
                }
              })(e, (n = gc.bind(null, n)));
          break;
        case 22:
          if (!(r = null !== n.memoizedState || ws)) {
            (t = (null !== t && null !== t.memoizedState) || ks), (a = ws);
            var l = ks;
            (ws = r),
              (ks = t) && !l ? Us(e, n, !!(8772 & n.subtreeFlags)) : Rs(e, n),
              (ws = a),
              (ks = l);
          }
          break;
        case 30:
          break;
        default:
          Rs(e, n);
      }
    }
    function Cs(e) {
      var t = e.alternate;
      null !== t && ((e.alternate = null), Cs(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag && null !== (t = e.stateNode) && qe(t),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var zs = null,
      Ps = !1;
    function Ls(e, t, n) {
      for (n = n.child; null !== n; ) Ts(e, t, n), (n = n.sibling);
    }
    function Ts(e, t, n) {
      if (pe && "function" == typeof pe.onCommitFiberUnmount)
        try {
          pe.onCommitFiberUnmount(fe, n);
        } catch (l) {}
      switch (n.tag) {
        case 26:
          ks || ps(n, t),
            Ls(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
          break;
        case 27:
          ks || ps(n, t);
          var r = zs,
            a = Ps;
          hd(n.type) && ((zs = n.stateNode), (Ps = !1)),
            Ls(e, t, n),
            Sd(n.stateNode),
            (zs = r),
            (Ps = a);
          break;
        case 5:
          ks || ps(n, t);
        case 6:
          if (
            ((r = zs),
            (a = Ps),
            (zs = null),
            Ls(e, t, n),
            (Ps = a),
            null !== (zs = r))
          )
            if (Ps)
              try {
                (9 === zs.nodeType
                  ? zs.body
                  : "HTML" === zs.nodeName
                    ? zs.ownerDocument.body
                    : zs
                ).removeChild(n.stateNode);
              } catch (i) {
                fc(n, t, i);
              }
            else
              try {
                zs.removeChild(n.stateNode);
              } catch (i) {
                fc(n, t, i);
              }
          break;
        case 18:
          null !== zs &&
            (Ps
              ? (gd(
                  9 === (e = zs).nodeType
                    ? e.body
                    : "HTML" === e.nodeName
                      ? e.ownerDocument.body
                      : e,
                  n.stateNode,
                ),
                Lf(e))
              : gd(zs, n.stateNode));
          break;
        case 4:
          (r = zs),
            (a = Ps),
            (zs = n.stateNode.containerInfo),
            (Ps = !0),
            Ls(e, t, n),
            (zs = r),
            (Ps = a);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ks || us(2, n, t), ks || us(4, n, t), Ls(e, t, n);
          break;
        case 1:
          ks ||
            (ps(n, t),
            "function" == typeof (r = n.stateNode).componentWillUnmount &&
              ds(n, t, r)),
            Ls(e, t, n);
          break;
        case 21:
          Ls(e, t, n);
          break;
        case 22:
          (ks = (r = ks) || null !== n.memoizedState), Ls(e, t, n), (ks = r);
          break;
        default:
          Ls(e, t, n);
      }
    }
    function Ms(e, t) {
      if (
        null === t.memoizedState &&
        null !== (e = t.alternate) &&
        null !== (e = e.memoizedState) &&
        null !== (e = e.dehydrated)
      )
        try {
          Lf(e);
        } catch (n) {
          fc(t, t.return, n);
        }
    }
    function _s(e, t) {
      var n = (function (e) {
        switch (e.tag) {
          case 13:
          case 19:
            var t = e.stateNode;
            return null === t && (t = e.stateNode = new Ns()), t;
          case 22:
            return (
              null === (t = (e = e.stateNode)._retryCache) &&
                (t = e._retryCache = new Ns()),
              t
            );
          default:
            throw Error(r(435, e.tag));
        }
      })(e);
      t.forEach(function (t) {
        var r = yc.bind(null, e, t);
        n.has(t) || (n.add(t), t.then(r, r));
      });
    }
    function Fs(e, t) {
      var n = t.deletions;
      if (null !== n)
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            i = e,
            o = t,
            s = o;
          e: for (; null !== s; ) {
            switch (s.tag) {
              case 27:
                if (hd(s.type)) {
                  (zs = s.stateNode), (Ps = !1);
                  break e;
                }
                break;
              case 5:
                (zs = s.stateNode), (Ps = !1);
                break e;
              case 3:
              case 4:
                (zs = s.stateNode.containerInfo), (Ps = !0);
                break e;
            }
            s = s.return;
          }
          if (null === zs) throw Error(r(160));
          Ts(i, o, l),
            (zs = null),
            (Ps = !1),
            null !== (i = l.alternate) && (i.return = null),
            (l.return = null);
        }
      if (13878 & t.subtreeFlags)
        for (t = t.child; null !== t; ) Os(t, e), (t = t.sibling);
    }
    var As = null;
    function Os(e, t) {
      var n = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Fs(t, e),
            Is(e),
            4 & a && (us(3, e, e.return), ss(3, e), us(5, e, e.return));
          break;
        case 1:
          Fs(t, e),
            Is(e),
            512 & a && (ks || null === n || ps(n, n.return)),
            64 & a &&
              ws &&
              null !== (e = e.updateQueue) &&
              null !== (a = e.callbacks) &&
              ((n = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = null === n ? a : n.concat(a)));
          break;
        case 26:
          var l = As;
          if (
            (Fs(t, e),
            Is(e),
            512 & a && (ks || null === n || ps(n, n.return)),
            4 & a)
          ) {
            var i = null !== n ? n.memoizedState : null;
            if (((a = e.memoizedState), null === n))
              if (null === a)
                if (null === e.stateNode) {
                  e: {
                    (a = e.type),
                      (n = e.memoizedProps),
                      (l = l.ownerDocument || l);
                    t: switch (a) {
                      case "title":
                        (!(i = l.getElementsByTagName("title")[0]) ||
                          i[Ue] ||
                          i[Fe] ||
                          "http://www.w3.org/2000/svg" === i.namespaceURI ||
                          i.hasAttribute("itemprop")) &&
                          ((i = l.createElement(a)),
                          l.head.insertBefore(
                            i,
                            l.querySelector("head > title"),
                          )),
                          nd(i, a, n),
                          (i[Fe] = e),
                          Qe(i),
                          (a = i);
                        break e;
                      case "link":
                        var o = Ud("link", "href", l).get(a + (n.href || ""));
                        if (o)
                          for (var s = 0; s < o.length; s++)
                            if (
                              (i = o[s]).getAttribute("href") ===
                                (null == n.href || "" === n.href
                                  ? null
                                  : n.href) &&
                              i.getAttribute("rel") ===
                                (null == n.rel ? null : n.rel) &&
                              i.getAttribute("title") ===
                                (null == n.title ? null : n.title) &&
                              i.getAttribute("crossorigin") ===
                                (null == n.crossOrigin ? null : n.crossOrigin)
                            ) {
                              o.splice(s, 1);
                              break t;
                            }
                        nd((i = l.createElement(a)), a, n), l.head.appendChild(i);
                        break;
                      case "meta":
                        if (
                          (o = Ud("meta", "content", l).get(
                            a + (n.content || ""),
                          ))
                        )
                          for (s = 0; s < o.length; s++)
                            if (
                              (i = o[s]).getAttribute("content") ===
                                (null == n.content ? null : "" + n.content) &&
                              i.getAttribute("name") ===
                                (null == n.name ? null : n.name) &&
                              i.getAttribute("property") ===
                                (null == n.property ? null : n.property) &&
                              i.getAttribute("http-equiv") ===
                                (null == n.httpEquiv ? null : n.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (null == n.charSet ? null : n.charSet)
                            ) {
                              o.splice(s, 1);
                              break t;
                            }
                        nd((i = l.createElement(a)), a, n), l.head.appendChild(i);
                        break;
                      default:
                        throw Error(r(468, a));
                    }
                    (i[Fe] = e), Qe(i), (a = i);
                  }
                  e.stateNode = a;
                } else qd(l, e.type, e.stateNode);
              else e.stateNode = Od(l, a, e.memoizedProps);
            else
              i !== a
                ? (null === i
                    ? null !== n.stateNode &&
                      (n = n.stateNode).parentNode.removeChild(n)
                    : i.count--,
                  null === a
                    ? qd(l, e.type, e.stateNode)
                    : Od(l, a, e.memoizedProps))
                : null === a &&
                  null !== e.stateNode &&
                  hs(e, e.memoizedProps, n.memoizedProps);
          }
          break;
        case 27:
          Fs(t, e),
            Is(e),
            512 & a && (ks || null === n || ps(n, n.return)),
            null !== n && 4 & a && hs(e, e.memoizedProps, n.memoizedProps);
          break;
        case 5:
          if (
            (Fs(t, e),
            Is(e),
            512 & a && (ks || null === n || ps(n, n.return)),
            32 & e.flags)
          ) {
            l = e.stateNode;
            try {
              Nt(l, "");
            } catch (m) {
              fc(e, e.return, m);
            }
          }
          4 & a &&
            null != e.stateNode &&
            hs(e, (l = e.memoizedProps), null !== n ? n.memoizedProps : l),
            1024 & a && (Ss = !0);
          break;
        case 6:
          if ((Fs(t, e), Is(e), 4 & a)) {
            if (null === e.stateNode) throw Error(r(162));
            (a = e.memoizedProps), (n = e.stateNode);
            try {
              n.nodeValue = a;
            } catch (m) {
              fc(e, e.return, m);
            }
          }
          break;
        case 3:
          if (
            (($d = null),
            (l = As),
            (As = Ed(t.containerInfo)),
            Fs(t, e),
            (As = l),
            Is(e),
            4 & a && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              Lf(t.containerInfo);
            } catch (m) {
              fc(e, e.return, m);
            }
          Ss && ((Ss = !1), Ds(e));
          break;
        case 4:
          (a = As),
            (As = Ed(e.stateNode.containerInfo)),
            Fs(t, e),
            Is(e),
            (As = a);
          break;
        case 12:
        default:
          Fs(t, e), Is(e);
          break;
        case 13:
          Fs(t, e),
            Is(e),
            8192 & e.child.flags &&
              (null !== e.memoizedState) !=
                (null !== n && null !== n.memoizedState) &&
              (Su = re()),
            4 & a &&
              null !== (a = e.updateQueue) &&
              ((e.updateQueue = null), _s(e, a));
          break;
        case 22:
          l = null !== e.memoizedState;
          var u = null !== n && null !== n.memoizedState,
            c = ws,
            d = ks;
          if (
            ((ws = c || l),
            (ks = d || u),
            Fs(t, e),
            (ks = d),
            (ws = c),
            Is(e),
            8192 & a)
          )
            e: for (
              t = e.stateNode,
                t._visibility = l ? -2 & t._visibility : 1 | t._visibility,
                l && (null === n || u || ws || ks || $s(e)),
                n = null,
                t = e;
              ;
  
            ) {
              if (5 === t.tag || 26 === t.tag) {
                if (null === n) {
                  u = n = t;
                  try {
                    if (((i = u.stateNode), l))
                      "function" == typeof (o = i.style).setProperty
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none");
                    else {
                      s = u.stateNode;
                      var f = u.memoizedProps.style,
                        p =
                          null != f && f.hasOwnProperty("display")
                            ? f.display
                            : null;
                      s.style.display =
                        null == p || "boolean" == typeof p ? "" : ("" + p).trim();
                    }
                  } catch (m) {
                    fc(u, u.return, m);
                  }
                }
              } else if (6 === t.tag) {
                if (null === n) {
                  u = t;
                  try {
                    u.stateNode.nodeValue = l ? "" : u.memoizedProps;
                  } catch (m) {
                    fc(u, u.return, m);
                  }
                }
              } else if (
                ((22 !== t.tag && 23 !== t.tag) ||
                  null === t.memoizedState ||
                  t === e) &&
                null !== t.child
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break e;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) break e;
                n === t && (n = null), (t = t.return);
              }
              n === t && (n = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          4 & a &&
            null !== (a = e.updateQueue) &&
            null !== (n = a.retryQueue) &&
            ((a.retryQueue = null), _s(e, n));
          break;
        case 19:
          Fs(t, e),
            Is(e),
            4 & a &&
              null !== (a = e.updateQueue) &&
              ((e.updateQueue = null), _s(e, a));
        case 30:
        case 21:
      }
    }
    function Is(e) {
      var t = e.flags;
      if (2 & t) {
        try {
          for (var n, a = e.return; null !== a; ) {
            if (gs(a)) {
              n = a;
              break;
            }
            a = a.return;
          }
          if (null == n) throw Error(r(160));
          switch (n.tag) {
            case 27:
              var l = n.stateNode;
              bs(e, ys(e), l);
              break;
            case 5:
              var i = n.stateNode;
              32 & n.flags && (Nt(i, ""), (n.flags &= -33)), bs(e, ys(e), i);
              break;
            case 3:
            case 4:
              var o = n.stateNode.containerInfo;
              vs(e, ys(e), o);
              break;
            default:
              throw Error(r(161));
          }
        } catch (s) {
          fc(e, e.return, s);
        }
        e.flags &= -3;
      }
      4096 & t && (e.flags &= -4097);
    }
    function Ds(e) {
      if (1024 & e.subtreeFlags)
        for (e = e.child; null !== e; ) {
          var t = e;
          Ds(t),
            5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function Rs(e, t) {
      if (8772 & t.subtreeFlags)
        for (t = t.child; null !== t; ) Es(e, t.alternate, t), (t = t.sibling);
    }
    function $s(e) {
      for (e = e.child; null !== e; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            us(4, t, t.return), $s(t);
            break;
          case 1:
            ps(t, t.return);
            var n = t.stateNode;
            "function" == typeof n.componentWillUnmount && ds(t, t.return, n),
              $s(t);
            break;
          case 27:
            Sd(t.stateNode);
          case 26:
          case 5:
            ps(t, t.return), $s(t);
            break;
          case 22:
            null === t.memoizedState && $s(t);
            break;
          default:
            $s(t);
        }
        e = e.sibling;
      }
    }
    function Us(e, t, n) {
      for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
        var r = t.alternate,
          a = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Us(a, l, n), ss(4, l);
            break;
          case 1:
            if (
              (Us(a, l, n),
              "function" == typeof (a = (r = l).stateNode).componentDidMount)
            )
              try {
                a.componentDidMount();
              } catch (u) {
                fc(r, r.return, u);
              }
            if (null !== (a = (r = l).updateQueue)) {
              var o = r.stateNode;
              try {
                var s = a.shared.hiddenCallbacks;
                if (null !== s)
                  for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++)
                    pl(s[a], o);
              } catch (u) {
                fc(r, r.return, u);
              }
            }
            n && 64 & i && cs(l), fs(l, l.return);
            break;
          case 27:
            xs(l);
          case 26:
          case 5:
            Us(a, l, n), n && null === r && 4 & i && ms(l), fs(l, l.return);
            break;
          case 12:
            Us(a, l, n);
            break;
          case 13:
            Us(a, l, n), n && 4 & i && Ms(a, l);
            break;
          case 22:
            null === l.memoizedState && Us(a, l, n), fs(l, l.return);
            break;
          case 30:
            break;
          default:
            Us(a, l, n);
        }
        t = t.sibling;
      }
    }
    function qs(e, t) {
      var n = null;
      null !== e &&
        null !== e.memoizedState &&
        null !== e.memoizedState.cachePool &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        null !== t.memoizedState &&
          null !== t.memoizedState.cachePool &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (null != e && e.refCount++, null != n && Oa(n));
    }
    function Hs(e, t) {
      (e = null),
        null !== t.alternate && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && Oa(e));
    }
    function Bs(e, t, n, r) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) Vs(e, t, n, r), (t = t.sibling);
    }
    function Vs(e, t, n, r) {
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Bs(e, t, n, r), 2048 & a && ss(9, t);
          break;
        case 1:
        case 13:
        default:
          Bs(e, t, n, r);
          break;
        case 3:
          Bs(e, t, n, r),
            2048 & a &&
              ((e = null),
              null !== t.alternate && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache) !== e &&
                (t.refCount++, null != e && Oa(e)));
          break;
        case 12:
          if (2048 & a) {
            Bs(e, t, n, r), (e = t.stateNode);
            try {
              var l = t.memoizedProps,
                i = l.id,
                o = l.onPostCommit;
              "function" == typeof o &&
                o(
                  i,
                  null === t.alternate ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (s) {
              fc(t, t.return, s);
            }
          } else Bs(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          (l = t.stateNode),
            (i = t.alternate),
            null !== t.memoizedState
              ? 2 & l._visibility
                ? Bs(e, t, n, r)
                : Qs(e, t)
              : 2 & l._visibility
                ? Bs(e, t, n, r)
                : ((l._visibility |= 2),
                  Ws(e, t, n, r, !!(10256 & t.subtreeFlags))),
            2048 & a && qs(i, t);
          break;
        case 24:
          Bs(e, t, n, r), 2048 & a && Hs(t.alternate, t);
      }
    }
    function Ws(e, t, n, r, a) {
      for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
        var l = e,
          i = t,
          o = n,
          s = r,
          u = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ws(l, i, o, s, a), ss(8, i);
            break;
          case 23:
            break;
          case 22:
            var c = i.stateNode;
            null !== i.memoizedState
              ? 2 & c._visibility
                ? Ws(l, i, o, s, a)
                : Qs(l, i)
              : ((c._visibility |= 2), Ws(l, i, o, s, a)),
              a && 2048 & u && qs(i.alternate, i);
            break;
          case 24:
            Ws(l, i, o, s, a), a && 2048 & u && Hs(i.alternate, i);
            break;
          default:
            Ws(l, i, o, s, a);
        }
        t = t.sibling;
      }
    }
    function Qs(e, t) {
      if (10256 & t.subtreeFlags)
        for (t = t.child; null !== t; ) {
          var n = e,
            r = t,
            a = r.flags;
          switch (r.tag) {
            case 22:
              Qs(n, r), 2048 & a && qs(r.alternate, r);
              break;
            case 24:
              Qs(n, r), 2048 & a && Hs(r.alternate, r);
              break;
            default:
              Qs(n, r);
          }
          t = t.sibling;
        }
    }
    var Ys = 8192;
    function Xs(e) {
      if (e.subtreeFlags & Ys)
        for (e = e.child; null !== e; ) Gs(e), (e = e.sibling);
    }
    function Gs(e) {
      switch (e.tag) {
        case 26:
          Xs(e),
            e.flags & Ys &&
              null !== e.memoizedState &&
              (function (e, t, n) {
                if (null === Bd) throw Error(r(475));
                var a = Bd;
                if (
                  !(
                    "stylesheet" !== t.type ||
                    ("string" == typeof n.media &&
                      !1 === matchMedia(n.media).matches) ||
                    4 & t.state.loading
                  )
                ) {
                  if (null === t.instance) {
                    var l = Td(n.href),
                      i = e.querySelector(Md(l));
                    if (i)
                      return (
                        null !== (e = i._p) &&
                          "object" == typeof e &&
                          "function" == typeof e.then &&
                          (a.count++, (a = Wd.bind(a)), e.then(a, a)),
                        (t.state.loading |= 4),
                        (t.instance = i),
                        void Qe(i)
                      );
                    (i = e.ownerDocument || e),
                      (n = _d(n)),
                      (l = Nd.get(l)) && Dd(n, l),
                      Qe((i = i.createElement("link")));
                    var o = i;
                    (o._p = new Promise(function (e, t) {
                      (o.onload = e), (o.onerror = t);
                    })),
                      nd(i, "link", n),
                      (t.instance = i);
                  }
                  null === a.stylesheets && (a.stylesheets = new Map()),
                    a.stylesheets.set(t, e),
                    (e = t.state.preload) &&
                      !(3 & t.state.loading) &&
                      (a.count++,
                      (t = Wd.bind(a)),
                      e.addEventListener("load", t),
                      e.addEventListener("error", t));
                }
              })(As, e.memoizedState, e.memoizedProps);
          break;
        case 5:
        default:
          Xs(e);
          break;
        case 3:
        case 4:
          var t = As;
          (As = Ed(e.stateNode.containerInfo)), Xs(e), (As = t);
          break;
        case 22:
          null === e.memoizedState &&
            (null !== (t = e.alternate) && null !== t.memoizedState
              ? ((t = Ys), (Ys = 16777216), Xs(e), (Ys = t))
              : Xs(e));
      }
    }
    function Ks(e) {
      var t = e.alternate;
      if (null !== t && null !== (e = t.child)) {
        t.child = null;
        do {
          (t = e.sibling), (e.sibling = null), (e = t);
        } while (null !== e);
      }
    }
    function Zs(e) {
      var t = e.deletions;
      if (16 & e.flags) {
        if (null !== t)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (js = r), tu(r, e);
          }
        Ks(e);
      }
      if (10256 & e.subtreeFlags)
        for (e = e.child; null !== e; ) Js(e), (e = e.sibling);
    }
    function Js(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Zs(e), 2048 & e.flags && us(9, e, e.return);
          break;
        case 3:
        case 12:
        default:
          Zs(e);
          break;
        case 22:
          var t = e.stateNode;
          null !== e.memoizedState &&
          2 & t._visibility &&
          (null === e.return || 13 !== e.return.tag)
            ? ((t._visibility &= -3), eu(e))
            : Zs(e);
      }
    }
    function eu(e) {
      var t = e.deletions;
      if (16 & e.flags) {
        if (null !== t)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (js = r), tu(r, e);
          }
        Ks(e);
      }
      for (e = e.child; null !== e; ) {
        switch ((t = e).tag) {
          case 0:
          case 11:
          case 15:
            us(8, t, t.return), eu(t);
            break;
          case 22:
            2 & (n = t.stateNode)._visibility && ((n._visibility &= -3), eu(t));
            break;
          default:
            eu(t);
        }
        e = e.sibling;
      }
    }
    function tu(e, t) {
      for (; null !== js; ) {
        var n = js;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            us(8, n, t);
            break;
          case 23:
          case 22:
            if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
              var r = n.memoizedState.cachePool.pool;
              null != r && r.refCount++;
            }
            break;
          case 24:
            Oa(n.memoizedState.cache);
        }
        if (null !== (r = n.child)) (r.return = n), (js = r);
        else
          e: for (n = e; null !== js; ) {
            var a = (r = js).sibling,
              l = r.return;
            if ((Cs(r), r === n)) {
              js = null;
              break e;
            }
            if (null !== a) {
              (a.return = l), (js = a);
              break e;
            }
            js = l;
          }
      }
    }
    var nu = {
        getCacheForType: function (e) {
          var t = za(Fa),
            n = t.data.get(e);
          return void 0 === n && ((n = e()), t.data.set(e, n)), n;
        },
      },
      ru = "function" == typeof WeakMap ? WeakMap : Map,
      au = 0,
      lu = null,
      iu = null,
      ou = 0,
      su = 0,
      uu = null,
      cu = !1,
      du = !1,
      fu = !1,
      pu = 0,
      mu = 0,
      hu = 0,
      gu = 0,
      yu = 0,
      vu = 0,
      bu = 0,
      xu = null,
      wu = null,
      ku = !1,
      Su = 0,
      Nu = 1 / 0,
      ju = null,
      Eu = null,
      Cu = 0,
      zu = null,
      Pu = null,
      Lu = 0,
      Tu = 0,
      Mu = null,
      _u = null,
      Fu = 0,
      Au = null;
    function Ou() {
      if (2 & au && 0 !== ou) return ou & -ou;
      if (null !== O.T) {
        return 0 !== Ra ? Ra : Tc();
      }
      return Me();
    }
    function Iu() {
      0 === vu && (vu = 536870912 & ou && !oa ? 536870912 : Ne());
      var e = lo.current;
      return null !== e && (e.flags |= 32), vu;
    }
    function Du(e, t, n) {
      ((e !== lu || (2 !== su && 9 !== su)) && null === e.cancelPendingCommit) ||
        (Vu(e, 0), qu(e, ou, vu, !1)),
        Ce(e, n),
        (2 & au && e === lu) ||
          (e === lu && (!(2 & au) && (gu |= n), 4 === mu && qu(e, ou, vu, !1)),
          Nc(e));
    }
    function Ru(e, t, n) {
      if (6 & au) throw Error(r(327));
      for (
        var a = (!n && !(124 & t) && !(t & e.expiredLanes)) || ke(e, t),
          l = a
            ? (function (e, t) {
                var n = au;
                au |= 2;
                var a = Qu(),
                  l = Yu();
                lu !== e || ou !== t
                  ? ((ju = null), (Nu = re() + 500), Vu(e, t))
                  : (du = ke(e, t));
                e: for (;;)
                  try {
                    if (0 !== su && null !== iu) {
                      t = iu;
                      var i = uu;
                      t: switch (su) {
                        case 1:
                          (su = 0), (uu = null), tc(e, t, i, 1);
                          break;
                        case 2:
                        case 9:
                          if (Ka(i)) {
                            (su = 0), (uu = null), ec(t);
                            break;
                          }
                          (t = function () {
                            (2 !== su && 9 !== su) || lu !== e || (su = 7), Nc(e);
                          }),
                            i.then(t, t);
                          break e;
                        case 3:
                          su = 7;
                          break e;
                        case 4:
                          su = 5;
                          break e;
                        case 7:
                          Ka(i)
                            ? ((su = 0), (uu = null), ec(t))
                            : ((su = 0), (uu = null), tc(e, t, i, 7));
                          break;
                        case 5:
                          var o = null;
                          switch (iu.tag) {
                            case 26:
                              o = iu.memoizedState;
                            case 5:
                            case 27:
                              var s = iu;
                              if (!o || Hd(o)) {
                                (su = 0), (uu = null);
                                var u = s.sibling;
                                if (null !== u) iu = u;
                                else {
                                  var c = s.return;
                                  null !== c ? ((iu = c), nc(c)) : (iu = null);
                                }
                                break t;
                              }
                          }
                          (su = 0), (uu = null), tc(e, t, i, 5);
                          break;
                        case 6:
                          (su = 0), (uu = null), tc(e, t, i, 6);
                          break;
                        case 8:
                          Bu(), (mu = 6);
                          break e;
                        default:
                          throw Error(r(462));
                      }
                    }
                    Zu();
                    break;
                  } catch (d) {
                    Wu(e, d);
                  }
                return (
                  (xa = ba = null),
                  (O.H = a),
                  (O.A = l),
                  (au = n),
                  null !== iu ? 0 : ((lu = null), (ou = 0), Lr(), mu)
                );
              })(e, t)
            : Gu(e, t, !0),
          i = a;
        ;
  
      ) {
        if (0 === l) {
          du && !a && qu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), !i || Uu(n))) {
          if (2 === l) {
            if (((i = t), e.errorRecoveryDisabledLanes & i)) var o = 0;
            else
              o =
                0 !== (o = -536870913 & e.pendingLanes)
                  ? o
                  : 536870912 & o
                    ? 536870912
                    : 0;
            if (0 !== o) {
              t = o;
              e: {
                var s = e;
                l = xu;
                var u = s.current.memoizedState.isDehydrated;
                if ((u && (Vu(s, o).flags |= 256), 2 !== (o = Gu(s, o, !1)))) {
                  if (fu && !u) {
                    (s.errorRecoveryDisabledLanes |= i), (gu |= i), (l = 4);
                    break e;
                  }
                  (i = wu),
                    (wu = l),
                    null !== i && (null === wu ? (wu = i) : wu.push.apply(wu, i));
                }
                l = o;
              }
              if (((i = !1), 2 !== l)) continue;
            }
          }
          if (1 === l) {
            Vu(e, 0), qu(e, t, 0, !0);
            break;
          }
          e: {
            switch (((a = e), (i = l))) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((4194048 & t) !== t) break;
              case 6:
                qu(a, t, vu, !cu);
                break e;
              case 2:
                wu = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((62914560 & t) === t && 10 < (l = Su + 300 - re())) {
              if ((qu(a, t, vu, !cu), 0 !== we(a, 0, !0))) break e;
              a.timeoutHandle = cd(
                $u.bind(null, a, n, wu, ju, ku, t, vu, gu, bu, cu, i, 2, -0, 0),
                l,
              );
            } else $u(a, n, wu, ju, ku, t, vu, gu, bu, cu, i, 0, -0, 0);
          }
          break;
        }
        (l = Gu(e, t, !1)), (i = !1);
      }
      Nc(e);
    }
    function $u(e, t, n, a, l, i, o, s, u, c, d, f, p, m) {
      if (
        ((e.timeoutHandle = -1),
        (8192 & (f = t.subtreeFlags) || !(16785408 & ~f)) &&
          ((Bd = { stylesheets: null, count: 0, unsuspend: Vd }),
          Gs(t),
          null !==
            (f = (function () {
              if (null === Bd) throw Error(r(475));
              var e = Bd;
              return (
                e.stylesheets && 0 === e.count && Yd(e, e.stylesheets),
                0 < e.count
                  ? function (t) {
                      var n = setTimeout(function () {
                        if (
                          (e.stylesheets && Yd(e, e.stylesheets), e.unsuspend)
                        ) {
                          var t = e.unsuspend;
                          (e.unsuspend = null), t();
                        }
                      }, 6e4);
                      return (
                        (e.unsuspend = t),
                        function () {
                          (e.unsuspend = null), clearTimeout(n);
                        }
                      );
                    }
                  : null
              );
            })())))
      )
        return (
          (e.cancelPendingCommit = f(
            ac.bind(null, e, t, i, n, a, l, o, s, u, d, 1, p, m),
          )),
          void qu(e, i, o, !c)
        );
      ac(e, t, i, n, a, l, o, s, u);
    }
    function Uu(e) {
      for (var t = e; ; ) {
        var n = t.tag;
        if (
          (0 === n || 11 === n || 15 === n) &&
          16384 & t.flags &&
          null !== (n = t.updateQueue) &&
          null !== (n = n.stores)
        )
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              l = a.getSnapshot;
            a = a.value;
            try {
              if (!Kn(l(), a)) return !1;
            } catch (i) {
              return !1;
            }
          }
        if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
          (n.return = t), (t = n);
        else {
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function qu(e, t, n, r) {
      (t &= ~yu),
        (t &= ~gu),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes);
      for (var a = t; 0 < a; ) {
        var l = 31 - he(a),
          i = 1 << l;
        (r[l] = -1), (a &= ~i);
      }
      0 !== n && ze(e, n, t);
    }
    function Hu() {
      return !!(6 & au) || (jc(0), !1);
    }
    function Bu() {
      if (null !== iu) {
        if (0 === su) var e = iu.return;
        else (xa = ba = null), Rl((e = iu)), (Gi = null), (Ki = 0), (e = iu);
        for (; null !== e; ) os(e.alternate, e), (e = e.return);
        iu = null;
      }
    }
    function Vu(e, t) {
      var n = e.timeoutHandle;
      -1 !== n && ((e.timeoutHandle = -1), dd(n)),
        null !== (n = e.cancelPendingCommit) &&
          ((e.cancelPendingCommit = null), n()),
        Bu(),
        (lu = e),
        (iu = n = $r(e.current, null)),
        (ou = t),
        (su = 0),
        (uu = null),
        (cu = !1),
        (du = ke(e, t)),
        (fu = !1),
        (bu = vu = yu = gu = hu = mu = 0),
        (wu = xu = null),
        (ku = !1),
        8 & t && (t |= 32 & t);
      var r = e.entangledLanes;
      if (0 !== r)
        for (e = e.entanglements, r &= t; 0 < r; ) {
          var a = 31 - he(r),
            l = 1 << a;
          (t |= e[a]), (r &= ~l);
        }
      return (pu = t), Lr(), n;
    }
    function Wu(e, t) {
      (wl = null),
        (O.H = Wi),
        t === Qa || t === Xa
          ? ((t = tl()), (su = 3))
          : t === Ya
            ? ((t = tl()), (su = 4))
            : (su =
                t === zo
                  ? 8
                  : null !== t &&
                      "object" == typeof t &&
                      "function" == typeof t.then
                    ? 6
                    : 1),
        (uu = t),
        null === iu && ((mu = 1), So(e, Er(t, e.current)));
    }
    function Qu() {
      var e = O.H;
      return (O.H = Wi), null === e ? Wi : e;
    }
    function Yu() {
      var e = O.A;
      return (O.A = nu), e;
    }
    function Xu() {
      (mu = 4),
        cu || ((4194048 & ou) !== ou && null !== lo.current) || (du = !0),
        (!(134217727 & hu) && !(134217727 & gu)) ||
          null === lu ||
          qu(lu, ou, vu, !1);
    }
    function Gu(e, t, n) {
      var r = au;
      au |= 2;
      var a = Qu(),
        l = Yu();
      (lu === e && ou === t) || ((ju = null), Vu(e, t)), (t = !1);
      var i = mu;
      e: for (;;)
        try {
          if (0 !== su && null !== iu) {
            var o = iu,
              s = uu;
            switch (su) {
              case 8:
                Bu(), (i = 6);
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                null === lo.current && (t = !0);
                var u = su;
                if (((su = 0), (uu = null), tc(e, o, s, u), n && du)) {
                  i = 0;
                  break e;
                }
                break;
              default:
                (u = su), (su = 0), (uu = null), tc(e, o, s, u);
            }
          }
          Ku(), (i = mu);
          break;
        } catch (c) {
          Wu(e, c);
        }
      return (
        t && e.shellSuspendCounter++,
        (xa = ba = null),
        (au = r),
        (O.H = a),
        (O.A = l),
        null === iu && ((lu = null), (ou = 0), Lr()),
        i
      );
    }
    function Ku() {
      for (; null !== iu; ) Ju(iu);
    }
    function Zu() {
      for (; null !== iu && !te(); ) Ju(iu);
    }
    function Ju(e) {
      var t = Jo(e.alternate, e, pu);
      (e.memoizedProps = e.pendingProps), null === t ? nc(e) : (iu = t);
    }
    function ec(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Do(n, t, t.pendingProps, t.type, void 0, ou);
          break;
        case 11:
          t = Do(n, t, t.pendingProps, t.type.render, t.ref, ou);
          break;
        case 5:
          Rl(t);
        default:
          os(n, t), (t = Jo(n, (t = iu = Ur(t, pu)), pu));
      }
      (e.memoizedProps = e.pendingProps), null === t ? nc(e) : (iu = t);
    }
    function tc(e, t, n, a) {
      (xa = ba = null), Rl(t), (Gi = null), (Ki = 0);
      var l = t.return;
      try {
        if (
          (function (e, t, n, a, l) {
            if (
              ((n.flags |= 32768),
              null !== a && "object" == typeof a && "function" == typeof a.then)
            ) {
              if (
                (null !== (t = n.alternate) && ja(t, n, l, !0),
                null !== (n = lo.current))
              ) {
                switch (n.tag) {
                  case 13:
                    return (
                      null === io
                        ? Xu()
                        : null === n.alternate && 0 === mu && (mu = 3),
                      (n.flags &= -257),
                      (n.flags |= 65536),
                      (n.lanes = l),
                      a === Ga
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? (n.updateQueue = new Set([a]))
                            : t.add(a),
                          pc(e, a, l)),
                      !1
                    );
                  case 22:
                    return (
                      (n.flags |= 65536),
                      a === Ga
                        ? (n.flags |= 16384)
                        : (null === (t = n.updateQueue)
                            ? ((t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([a]),
                              }),
                              (n.updateQueue = t))
                            : null === (n = t.retryQueue)
                              ? (t.retryQueue = new Set([a]))
                              : n.add(a),
                          pc(e, a, l)),
                      !1
                    );
                }
                throw Error(r(435, n.tag));
              }
              return pc(e, a, l), Xu(), !1;
            }
            if (oa)
              return (
                null !== (t = lo.current)
                  ? (!(65536 & t.flags) && (t.flags |= 256),
                    (t.flags |= 65536),
                    (t.lanes = l),
                    a !== ca && ya(Er((e = Error(r(422), { cause: a })), n)))
                  : (a !== ca && ya(Er((t = Error(r(423), { cause: a })), n)),
                    ((e = e.current.alternate).flags |= 65536),
                    (l &= -l),
                    (e.lanes |= l),
                    (a = Er(a, n)),
                    ul(e, (l = jo(e.stateNode, a, l))),
                    4 !== mu && (mu = 2)),
                !1
              );
            var i = Error(r(520), { cause: a });
            if (
              ((i = Er(i, n)),
              null === xu ? (xu = [i]) : xu.push(i),
              4 !== mu && (mu = 2),
              null === t)
            )
              return !0;
            (a = Er(a, n)), (n = t);
            do {
              switch (n.tag) {
                case 3:
                  return (
                    (n.flags |= 65536),
                    (e = l & -l),
                    (n.lanes |= e),
                    ul(n, (e = jo(n.stateNode, a, e))),
                    !1
                  );
                case 1:
                  if (
                    ((t = n.type),
                    (i = n.stateNode),
                    !(
                      128 & n.flags ||
                      ("function" != typeof t.getDerivedStateFromError &&
                        (null === i ||
                          "function" != typeof i.componentDidCatch ||
                          (null !== Eu && Eu.has(i))))
                    ))
                  )
                    return (
                      (n.flags |= 65536),
                      (l &= -l),
                      (n.lanes |= l),
                      Co((l = Eo(l)), e, n, a),
                      ul(n, l),
                      !1
                    );
              }
              n = n.return;
            } while (null !== n);
            return !1;
          })(e, l, t, n, ou)
        )
          return (mu = 1), So(e, Er(n, e.current)), void (iu = null);
      } catch (i) {
        if (null !== l) throw ((iu = l), i);
        return (mu = 1), So(e, Er(n, e.current)), void (iu = null);
      }
      32768 & t.flags
        ? (oa || 1 === a
            ? (e = !0)
            : du || 536870912 & ou
              ? (e = !1)
              : ((cu = e = !0),
                (2 === a || 9 === a || 3 === a || 6 === a) &&
                  null !== (a = lo.current) &&
                  13 === a.tag &&
                  (a.flags |= 16384)),
          rc(t, e))
        : nc(t);
    }
    function nc(e) {
      var t = e;
      do {
        if (32768 & t.flags) return void rc(t, cu);
        e = t.return;
        var n = ls(t.alternate, t, pu);
        if (null !== n) return void (iu = n);
        if (null !== (t = t.sibling)) return void (iu = t);
        iu = t = e;
      } while (null !== t);
      0 === mu && (mu = 5);
    }
    function rc(e, t) {
      do {
        var n = is(e.alternate, e);
        if (null !== n) return (n.flags &= 32767), void (iu = n);
        if (
          (null !== (n = e.return) &&
            ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && null !== (e = e.sibling))
        )
          return void (iu = e);
        iu = e = n;
      } while (null !== e);
      (mu = 6), (iu = null);
    }
    function ac(e, t, n, a, l, i, o, s, u) {
      e.cancelPendingCommit = null;
      do {
        uc();
      } while (0 !== Cu);
      if (6 & au) throw Error(r(327));
      if (null !== t) {
        if (t === e.current) throw Error(r(177));
        if (
          ((i = t.lanes | t.childLanes),
          (function (e, t, n, r, a, l) {
            var i = e.pendingLanes;
            (e.pendingLanes = n),
              (e.suspendedLanes = 0),
              (e.pingedLanes = 0),
              (e.warmLanes = 0),
              (e.expiredLanes &= n),
              (e.entangledLanes &= n),
              (e.errorRecoveryDisabledLanes &= n),
              (e.shellSuspendCounter = 0);
            var o = e.entanglements,
              s = e.expirationTimes,
              u = e.hiddenUpdates;
            for (n = i & ~n; 0 < n; ) {
              var c = 31 - he(n),
                d = 1 << c;
              (o[c] = 0), (s[c] = -1);
              var f = u[c];
              if (null !== f)
                for (u[c] = null, c = 0; c < f.length; c++) {
                  var p = f[c];
                  null !== p && (p.lane &= -536870913);
                }
              n &= ~d;
            }
            0 !== r && ze(e, r, 0),
              0 !== l &&
                0 === a &&
                0 !== e.tag &&
                (e.suspendedLanes |= l & ~(i & ~t));
          })(e, n, (i |= Pr), o, s, u),
          e === lu && ((iu = lu = null), (ou = 0)),
          (Pu = t),
          (zu = e),
          (Lu = n),
          (Tu = i),
          (Mu = l),
          (_u = a),
          10256 & t.subtreeFlags || 10256 & t.flags
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              J(oe, function () {
                return cc(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (a = !!(13878 & t.flags)),
          13878 & t.subtreeFlags || a)
        ) {
          (a = O.T), (O.T = null), (l = I.p), (I.p = 2), (o = au), (au |= 4);
          try {
            !(function (e, t) {
              if (((e = e.containerInfo), (rd = af), rr((e = nr(e))))) {
                if ("selectionStart" in e)
                  var n = { start: e.selectionStart, end: e.selectionEnd };
                else
                  e: {
                    var a =
                      (n = ((n = e.ownerDocument) && n.defaultView) || window)
                        .getSelection && n.getSelection();
                    if (a && 0 !== a.rangeCount) {
                      n = a.anchorNode;
                      var l = a.anchorOffset,
                        i = a.focusNode;
                      a = a.focusOffset;
                      try {
                        n.nodeType, i.nodeType;
                      } catch (g) {
                        n = null;
                        break e;
                      }
                      var o = 0,
                        s = -1,
                        u = -1,
                        c = 0,
                        d = 0,
                        f = e,
                        p = null;
                      t: for (;;) {
                        for (
                          var m;
                          f !== n || (0 !== l && 3 !== f.nodeType) || (s = o + l),
                            f !== i ||
                              (0 !== a && 3 !== f.nodeType) ||
                              (u = o + a),
                            3 === f.nodeType && (o += f.nodeValue.length),
                            null !== (m = f.firstChild);
  
                        )
                          (p = f), (f = m);
                        for (;;) {
                          if (f === e) break t;
                          if (
                            (p === n && ++c === l && (s = o),
                            p === i && ++d === a && (u = o),
                            null !== (m = f.nextSibling))
                          )
                            break;
                          p = (f = p).parentNode;
                        }
                        f = m;
                      }
                      n = -1 === s || -1 === u ? null : { start: s, end: u };
                    } else n = null;
                  }
                n = n || { start: 0, end: 0 };
              } else n = null;
              for (
                ad = { focusedElem: e, selectionRange: n }, af = !1, js = t;
                null !== js;
  
              )
                if (((e = (t = js).child), 1024 & t.subtreeFlags && null !== e))
                  (e.return = t), (js = e);
                else
                  for (; null !== js; ) {
                    switch (((i = (t = js).alternate), (e = t.flags), t.tag)) {
                      case 0:
                      case 11:
                      case 15:
                      case 5:
                      case 26:
                      case 27:
                      case 6:
                      case 4:
                      case 17:
                        break;
                      case 1:
                        if (1024 & e && null !== i) {
                          (e = void 0),
                            (n = t),
                            (l = i.memoizedProps),
                            (i = i.memoizedState),
                            (a = n.stateNode);
                          try {
                            var h = vo(n.type, l, (n.elementType, n.type));
                            (e = a.getSnapshotBeforeUpdate(h, i)),
                              (a.__reactInternalSnapshotBeforeUpdate = e);
                          } catch (y) {
                            fc(n, n.return, y);
                          }
                        }
                        break;
                      case 3:
                        if (1024 & e)
                          if (
                            9 === (n = (e = t.stateNode.containerInfo).nodeType)
                          )
                            yd(e);
                          else if (1 === n)
                            switch (e.nodeName) {
                              case "HEAD":
                              case "HTML":
                              case "BODY":
                                yd(e);
                                break;
                              default:
                                e.textContent = "";
                            }
                        break;
                      default:
                        if (1024 & e) throw Error(r(163));
                    }
                    if (null !== (e = t.sibling)) {
                      (e.return = t.return), (js = e);
                      break;
                    }
                    js = t.return;
                  }
            })(e, t);
          } finally {
            (au = o), (I.p = l), (O.T = a);
          }
        }
        (Cu = 1), lc(), ic(), oc();
      }
    }
    function lc() {
      if (1 === Cu) {
        Cu = 0;
        var e = zu,
          t = Pu,
          n = !!(13878 & t.flags);
        if (13878 & t.subtreeFlags || n) {
          (n = O.T), (O.T = null);
          var r = I.p;
          I.p = 2;
          var a = au;
          au |= 4;
          try {
            Os(t, e);
            var l = ad,
              i = nr(e.containerInfo),
              o = l.focusedElem,
              s = l.selectionRange;
            if (
              i !== o &&
              o &&
              o.ownerDocument &&
              tr(o.ownerDocument.documentElement, o)
            ) {
              if (null !== s && rr(o)) {
                var u = s.start,
                  c = s.end;
                if ((void 0 === c && (c = u), "selectionStart" in o))
                  (o.selectionStart = u),
                    (o.selectionEnd = Math.min(c, o.value.length));
                else {
                  var d = o.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = o.textContent.length,
                      h = Math.min(s.start, m),
                      g = void 0 === s.end ? h : Math.min(s.end, m);
                    !p.extend && h > g && ((i = g), (g = h), (h = i));
                    var y = er(o, h),
                      v = er(o, g);
                    if (
                      y &&
                      v &&
                      (1 !== p.rangeCount ||
                        p.anchorNode !== y.node ||
                        p.anchorOffset !== y.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var b = d.createRange();
                      b.setStart(y.node, y.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(b), p.extend(v.node, v.offset))
                          : (b.setEnd(v.node, v.offset), p.addRange(b));
                    }
                  }
                }
              }
              for (d = [], p = o; (p = p.parentNode); )
                1 === p.nodeType &&
                  d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (
                "function" == typeof o.focus && o.focus(), o = 0;
                o < d.length;
                o++
              ) {
                var x = d[o];
                (x.element.scrollLeft = x.left), (x.element.scrollTop = x.top);
              }
            }
            (af = !!rd), (ad = rd = null);
          } finally {
            (au = a), (I.p = r), (O.T = n);
          }
        }
        (e.current = t), (Cu = 2);
      }
    }
    function ic() {
      if (2 === Cu) {
        Cu = 0;
        var e = zu,
          t = Pu,
          n = !!(8772 & t.flags);
        if (8772 & t.subtreeFlags || n) {
          (n = O.T), (O.T = null);
          var r = I.p;
          I.p = 2;
          var a = au;
          au |= 4;
          try {
            Es(e, t.alternate, t);
          } finally {
            (au = a), (I.p = r), (O.T = n);
          }
        }
        Cu = 3;
      }
    }
    function oc() {
      if (4 === Cu || 3 === Cu) {
        (Cu = 0), ne();
        var e = zu,
          t = Pu,
          n = Lu,
          r = _u;
        10256 & t.subtreeFlags || 10256 & t.flags
          ? (Cu = 5)
          : ((Cu = 0), (Pu = zu = null), sc(e, e.pendingLanes));
        var a = e.pendingLanes;
        if (
          (0 === a && (Eu = null),
          Te(n),
          (t = t.stateNode),
          pe && "function" == typeof pe.onCommitFiberRoot)
        )
          try {
            pe.onCommitFiberRoot(fe, t, void 0, !(128 & ~t.current.flags));
          } catch (s) {}
        if (null !== r) {
          (t = O.T), (a = I.p), (I.p = 2), (O.T = null);
          try {
            for (var l = e.onRecoverableError, i = 0; i < r.length; i++) {
              var o = r[i];
              l(o.value, { componentStack: o.stack });
            }
          } finally {
            (O.T = t), (I.p = a);
          }
        }
        3 & Lu && uc(),
          Nc(e),
          (a = e.pendingLanes),
          4194090 & n && 42 & a
            ? e === Au
              ? Fu++
              : ((Fu = 0), (Au = e))
            : (Fu = 0),
          jc(0);
      }
    }
    function sc(e, t) {
      0 == (e.pooledCacheLanes &= t) &&
        null != (t = e.pooledCache) &&
        ((e.pooledCache = null), Oa(t));
    }
    function uc(e) {
      return lc(), ic(), oc(), cc();
    }
    function cc() {
      if (5 !== Cu) return !1;
      var e = zu,
        t = Tu;
      Tu = 0;
      var n = Te(Lu),
        a = O.T,
        l = I.p;
      try {
        (I.p = 32 > n ? 32 : n), (O.T = null), (n = Mu), (Mu = null);
        var i = zu,
          o = Lu;
        if (((Cu = 0), (Pu = zu = null), (Lu = 0), 6 & au)) throw Error(r(331));
        var s = au;
        if (
          ((au |= 4),
          Js(i.current),
          Vs(i, i.current, o, n),
          (au = s),
          jc(0, !1),
          pe && "function" == typeof pe.onPostCommitFiberRoot)
        )
          try {
            pe.onPostCommitFiberRoot(fe, i);
          } catch (u) {}
        return !0;
      } finally {
        (I.p = l), (O.T = a), sc(e, t);
      }
    }
    function dc(e, t, n) {
      (t = Er(n, t)),
        null !== (e = ol(e, (t = jo(e.stateNode, t, 2)), 2)) && (Ce(e, 2), Nc(e));
    }
    function fc(e, t, n) {
      if (3 === e.tag) dc(e, e, n);
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            dc(t, e, n);
            break;
          }
          if (1 === t.tag) {
            var r = t.stateNode;
            if (
              "function" == typeof t.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === Eu || !Eu.has(r)))
            ) {
              (e = Er(n, e)),
                null !== (r = ol(t, (n = Eo(2)), 2)) &&
                  (Co(n, r, t, e), Ce(r, 2), Nc(r));
              break;
            }
          }
          t = t.return;
        }
    }
    function pc(e, t, n) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new ru();
        var a = new Set();
        r.set(t, a);
      } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
      a.has(n) ||
        ((fu = !0), a.add(n), (e = mc.bind(null, e, t, n)), t.then(e, e));
    }
    function mc(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        lu === e &&
          (ou & n) === n &&
          (4 === mu || (3 === mu && (62914560 & ou) === ou && 300 > re() - Su)
            ? !(2 & au) && Vu(e, 0)
            : (yu |= n),
          bu === ou && (bu = 0)),
        Nc(e);
    }
    function hc(e, t) {
      0 === t && (t = je()), null !== (e = _r(e, t)) && (Ce(e, t), Nc(e));
    }
    function gc(e) {
      var t = e.memoizedState,
        n = 0;
      null !== t && (n = t.retryLane), hc(e, n);
    }
    function yc(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var a = e.stateNode,
            l = e.memoizedState;
          null !== l && (n = l.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(r(314));
      }
      null !== a && a.delete(t), hc(e, n);
    }
    var vc = null,
      bc = null,
      xc = !1,
      wc = !1,
      kc = !1,
      Sc = 0;
    function Nc(e) {
      e !== bc &&
        null === e.next &&
        (null === bc ? (vc = bc = e) : (bc = bc.next = e)),
        (wc = !0),
        xc ||
          ((xc = !0),
          pd(function () {
            6 & au ? J(le, Ec) : Cc();
          }));
    }
    function jc(e, t) {
      if (!kc && wc) {
        kc = !0;
        do {
          for (var n = !1, r = vc; null !== r; ) {
            if (0 !== e) {
              var a = r.pendingLanes;
              if (0 === a) var l = 0;
              else {
                var i = r.suspendedLanes,
                  o = r.pingedLanes;
                (l = (1 << (31 - he(42 | e) + 1)) - 1),
                  (l =
                    201326741 & (l &= a & ~(i & ~o))
                      ? (201326741 & l) | 1
                      : l
                        ? 2 | l
                        : 0);
              }
              0 !== l && ((n = !0), Lc(r, l));
            } else
              (l = ou),
                !(
                  3 &
                  (l = we(
                    r,
                    r === lu ? l : 0,
                    null !== r.cancelPendingCommit || -1 !== r.timeoutHandle,
                  ))
                ) ||
                  ke(r, l) ||
                  ((n = !0), Lc(r, l));
            r = r.next;
          }
        } while (n);
        kc = !1;
      }
    }
    function Ec() {
      Cc();
    }
    function Cc() {
      wc = xc = !1;
      var e = 0;
      0 !== Sc &&
        ((function () {
          var e = window.event;
          if (e && "popstate" === e.type) return e !== ud && ((ud = e), !0);
          return (ud = null), !1;
        })() && (e = Sc),
        (Sc = 0));
      for (var t = re(), n = null, r = vc; null !== r; ) {
        var a = r.next,
          l = zc(r, t);
        0 === l
          ? ((r.next = null),
            null === n ? (vc = a) : (n.next = a),
            null === a && (bc = n))
          : ((n = r), (0 !== e || 3 & l) && (wc = !0)),
          (r = a);
      }
      jc(e);
    }
    function zc(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          l = -62914561 & e.pendingLanes;
        0 < l;
  
      ) {
        var i = 31 - he(l),
          o = 1 << i,
          s = a[i];
        -1 === s
          ? (o & n && !(o & r)) || (a[i] = Se(o, t))
          : s <= t && (e.expiredLanes |= o),
          (l &= ~o);
      }
      if (
        ((n = ou),
        (n = we(
          e,
          e === (t = lu) ? n : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
        )),
        (r = e.callbackNode),
        0 === n ||
          (e === t && (2 === su || 9 === su)) ||
          null !== e.cancelPendingCommit)
      )
        return (
          null !== r && null !== r && ee(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if (!(3 & n) || ke(e, n)) {
        if ((t = n & -n) === e.callbackPriority) return t;
        switch ((null !== r && ee(r), Te(n))) {
          case 2:
          case 8:
            n = ie;
            break;
          case 32:
          default:
            n = oe;
            break;
          case 268435456:
            n = ue;
        }
        return (
          (r = Pc.bind(null, e)),
          (n = J(n, r)),
          (e.callbackPriority = t),
          (e.callbackNode = n),
          t
        );
      }
      return (
        null !== r && null !== r && ee(r),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function Pc(e, t) {
      if (0 !== Cu && 5 !== Cu)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var n = e.callbackNode;
      if (uc() && e.callbackNode !== n) return null;
      var r = ou;
      return 0 ===
        (r = we(
          e,
          e === lu ? r : 0,
          null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
        ))
        ? null
        : (Ru(e, r, t),
          zc(e, re()),
          null != e.callbackNode && e.callbackNode === n
            ? Pc.bind(null, e)
            : null);
    }
    function Lc(e, t) {
      if (uc()) return null;
      Ru(e, t, !0);
    }
    function Tc() {
      return 0 === Sc && (Sc = Ne()), Sc;
    }
    function Mc(e) {
      return null == e || "symbol" == typeof e || "boolean" == typeof e
        ? null
        : "function" == typeof e
          ? e
          : Tt("" + e);
    }
    function _c(e, t) {
      var n = t.ownerDocument.createElement("input");
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    for (var Fc = 0; Fc < Sr.length; Fc++) {
      var Ac = Sr[Fc];
      Nr(Ac.toLowerCase(), "on" + (Ac[0].toUpperCase() + Ac.slice(1)));
    }
    Nr(hr, "onAnimationEnd"),
      Nr(gr, "onAnimationIteration"),
      Nr(yr, "onAnimationStart"),
      Nr("dblclick", "onDoubleClick"),
      Nr("focusin", "onFocus"),
      Nr("focusout", "onBlur"),
      Nr(vr, "onTransitionRun"),
      Nr(br, "onTransitionStart"),
      Nr(xr, "onTransitionCancel"),
      Nr(wr, "onTransitionEnd"),
      Ke("onMouseEnter", ["mouseout", "mouseover"]),
      Ke("onMouseLeave", ["mouseout", "mouseover"]),
      Ke("onPointerEnter", ["pointerout", "pointerover"]),
      Ke("onPointerLeave", ["pointerout", "pointerover"]),
      Ge(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      Ge(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      Ge("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      Ge(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      Ge(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      Ge(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
      );
    var Oc =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      Ic = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(Oc),
      );
    function Dc(e, t) {
      t = !!(4 & t);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          a = r.event;
        r = r.listeners;
        e: {
          var l = void 0;
          if (t)
            for (var i = r.length - 1; 0 <= i; i--) {
              var o = r[i],
                s = o.instance,
                u = o.currentTarget;
              if (((o = o.listener), s !== l && a.isPropagationStopped()))
                break e;
              (l = o), (a.currentTarget = u);
              try {
                l(a);
              } catch (c) {
                bo(c);
              }
              (a.currentTarget = null), (l = s);
            }
          else
            for (i = 0; i < r.length; i++) {
              if (
                ((s = (o = r[i]).instance),
                (u = o.currentTarget),
                (o = o.listener),
                s !== l && a.isPropagationStopped())
              )
                break e;
              (l = o), (a.currentTarget = u);
              try {
                l(a);
              } catch (c) {
                bo(c);
              }
              (a.currentTarget = null), (l = s);
            }
        }
      }
    }
    function Rc(e, t) {
      var n = t[Ie];
      void 0 === n && (n = t[Ie] = new Set());
      var r = e + "__bubble";
      n.has(r) || (Hc(t, e, 2, !1), n.add(r));
    }
    function $c(e, t, n) {
      var r = 0;
      t && (r |= 4), Hc(n, e, r, t);
    }
    var Uc = "_reactListening" + Math.random().toString(36).slice(2);
    function qc(e) {
      if (!e[Uc]) {
        (e[Uc] = !0),
          Ye.forEach(function (t) {
            "selectionchange" !== t && (Ic.has(t) || $c(t, !1, e), $c(t, !0, e));
          });
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[Uc] || ((t[Uc] = !0), $c("selectionchange", !1, t));
      }
    }
    function Hc(e, t, n, r) {
      switch (ff(t)) {
        case 2:
          var a = lf;
          break;
        case 8:
          a = of;
          break;
        default:
          a = sf;
      }
      (n = a.bind(null, t, n, e)),
        (a = void 0),
        !Ut ||
          ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
          (a = !0),
        r
          ? void 0 !== a
            ? e.addEventListener(t, n, { capture: !0, passive: a })
            : e.addEventListener(t, n, !0)
          : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
    }
    function Bc(e, t, n, r, a) {
      var l = r;
      if (!(1 & t || 2 & t || null === r))
        e: for (;;) {
          if (null === r) return;
          var i = r.tag;
          if (3 === i || 4 === i) {
            var s = r.stateNode.containerInfo;
            if (s === a) break;
            if (4 === i)
              for (i = r.return; null !== i; ) {
                var u = i.tag;
                if ((3 === u || 4 === u) && i.stateNode.containerInfo === a)
                  return;
                i = i.return;
              }
            for (; null !== s; ) {
              if (null === (i = He(s))) return;
              if (5 === (u = i.tag) || 6 === u || 26 === u || 27 === u) {
                r = l = i;
                continue e;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      Dt(function () {
        var r = l,
          a = _t(n),
          i = [];
        e: {
          var s = kr.get(e);
          if (void 0 !== s) {
            var u = tn,
              c = e;
            switch (e) {
              case "keypress":
                if (0 === Qt(n)) break e;
              case "keydown":
              case "keyup":
                u = yn;
                break;
              case "focusin":
                (c = "focus"), (u = sn);
                break;
              case "focusout":
                (c = "blur"), (u = sn);
                break;
              case "beforeblur":
              case "afterblur":
                u = sn;
                break;
              case "click":
                if (2 === n.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = ln;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = on;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = bn;
                break;
              case hr:
              case gr:
              case yr:
                u = un;
                break;
              case wr:
                u = xn;
                break;
              case "scroll":
              case "scrollend":
                u = rn;
                break;
              case "wheel":
                u = wn;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = cn;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = vn;
                break;
              case "toggle":
              case "beforetoggle":
                u = kn;
            }
            var d = !!(4 & t),
              f = !d && ("scroll" === e || "scrollend" === e),
              p = d ? (null !== s ? s + "Capture" : null) : s;
            d = [];
            for (var m, h = r; null !== h; ) {
              var g = h;
              if (
                ((m = g.stateNode),
                (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                  null === m ||
                  null === p ||
                  (null != (g = Rt(h, p)) && d.push(Vc(h, g, m))),
                f)
              )
                break;
              h = h.return;
            }
            0 < d.length &&
              ((s = new u(s, c, null, n, a)), i.push({ event: s, listeners: d }));
          }
        }
        if (!(7 & t)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(s = "mouseover" === e || "pointerover" === e) ||
              n === Mt ||
              !(c = n.relatedTarget || n.fromElement) ||
              (!He(c) && !c[Oe])) &&
              (u || s) &&
              ((s =
                a.window === a
                  ? a
                  : (s = a.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              u
                ? ((u = r),
                  null !==
                    (c = (c = n.relatedTarget || n.toElement) ? He(c) : null) &&
                    ((f = o(c)),
                    (d = c.tag),
                    c !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                    (c = null))
                : ((u = null), (c = r)),
              u !== c))
          ) {
            if (
              ((d = ln),
              (g = "onMouseLeave"),
              (p = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((d = vn),
                (g = "onPointerLeave"),
                (p = "onPointerEnter"),
                (h = "pointer")),
              (f = null == u ? s : Ve(u)),
              (m = null == c ? s : Ve(c)),
              ((s = new d(g, h + "leave", u, n, a)).target = f),
              (s.relatedTarget = m),
              (g = null),
              He(a) === r &&
                (((d = new d(p, h + "enter", c, n, a)).target = m),
                (d.relatedTarget = f),
                (g = d)),
              (f = g),
              u && c)
            )
              e: {
                for (p = c, h = 0, m = d = u; m; m = Qc(m)) h++;
                for (m = 0, g = p; g; g = Qc(g)) m++;
                for (; 0 < h - m; ) (d = Qc(d)), h--;
                for (; 0 < m - h; ) (p = Qc(p)), m--;
                for (; h--; ) {
                  if (d === p || (null !== p && d === p.alternate)) break e;
                  (d = Qc(d)), (p = Qc(p));
                }
                d = null;
              }
            else d = null;
            null !== u && Yc(i, s, u, d, !1),
              null !== c && null !== f && Yc(i, f, c, d, !0);
          }
          if (
            "select" ===
              (u =
                (s = r ? Ve(r) : window).nodeName && s.nodeName.toLowerCase()) ||
            ("input" === u && "file" === s.type)
          )
            var y = $n;
          else if (Fn(s))
            if (Un) y = Gn;
            else {
              y = Yn;
              var v = Qn;
            }
          else
            !(u = s.nodeName) ||
            "input" !== u.toLowerCase() ||
            ("checkbox" !== s.type && "radio" !== s.type)
              ? r && zt(r.elementType) && (y = $n)
              : (y = Xn);
          switch (
            (y && (y = y(e, r))
              ? An(i, y, n, a)
              : (v && v(e, s, r),
                "focusout" === e &&
                  r &&
                  "number" === s.type &&
                  null != r.memoizedProps.value &&
                  xt(s, "number", s.value)),
            (v = r ? Ve(r) : window),
            e)
          ) {
            case "focusin":
              (Fn(v) || "true" === v.contentEditable) &&
                ((lr = v), (ir = r), (or = null));
              break;
            case "focusout":
              or = ir = lr = null;
              break;
            case "mousedown":
              sr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (sr = !1), ur(i, n, a);
              break;
            case "selectionchange":
              if (ar) break;
            case "keydown":
            case "keyup":
              ur(i, n, a);
          }
          var b;
          if (Nn)
            e: {
              switch (e) {
                case "compositionstart":
                  var x = "onCompositionStart";
                  break e;
                case "compositionend":
                  x = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  x = "onCompositionUpdate";
                  break e;
              }
              x = void 0;
            }
          else
            Mn
              ? Ln(e, n) && (x = "onCompositionEnd")
              : "keydown" === e &&
                229 === n.keyCode &&
                (x = "onCompositionStart");
          x &&
            (Cn &&
              "ko" !== n.locale &&
              (Mn || "onCompositionStart" !== x
                ? "onCompositionEnd" === x && Mn && (b = Wt())
                : ((Bt = "value" in (Ht = a) ? Ht.value : Ht.textContent),
                  (Mn = !0))),
            0 < (v = Wc(r, x)).length &&
              ((x = new dn(x, e, null, n, a)),
              i.push({ event: x, listeners: v }),
              b ? (x.data = b) : null !== (b = Tn(n)) && (x.data = b))),
            (b = En
              ? (function (e, t) {
                  switch (e) {
                    case "compositionend":
                      return Tn(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((Pn = !0), zn);
                    case "textInput":
                      return (e = t.data) === zn && Pn ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function (e, t) {
                  if (Mn)
                    return "compositionend" === e || (!Nn && Ln(e, t))
                      ? ((e = Wt()), (Vt = Bt = Ht = null), (Mn = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Cn && "ko" !== t.locale ? null : t.data;
                  }
                })(e, n)) &&
              0 < (x = Wc(r, "onBeforeInput")).length &&
              ((v = new dn("onBeforeInput", "beforeinput", null, n, a)),
              i.push({ event: v, listeners: x }),
              (v.data = b)),
            (function (e, t, n, r, a) {
              if ("submit" === t && n && n.stateNode === a) {
                var l = Mc((a[Ae] || null).action),
                  i = r.submitter;
                i &&
                  null !==
                    (t = (t = i[Ae] || null)
                      ? Mc(t.formAction)
                      : i.getAttribute("formAction")) &&
                  ((l = t), (i = null));
                var o = new tn("action", "action", null, r, a);
                e.push({
                  event: o,
                  listeners: [
                    {
                      instance: null,
                      listener: function () {
                        if (r.defaultPrevented) {
                          if (0 !== Sc) {
                            var e = i ? _c(a, i) : new FormData(a);
                            Mi(
                              n,
                              {
                                pending: !0,
                                data: e,
                                method: a.method,
                                action: l,
                              },
                              null,
                              e,
                            );
                          }
                        } else
                          "function" == typeof l &&
                            (o.preventDefault(),
                            (e = i ? _c(a, i) : new FormData(a)),
                            Mi(
                              n,
                              {
                                pending: !0,
                                data: e,
                                method: a.method,
                                action: l,
                              },
                              l,
                              e,
                            ));
                      },
                      currentTarget: a,
                    },
                  ],
                });
              }
            })(i, e, r, n, a);
        }
        Dc(i, t);
      });
    }
    function Vc(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Wc(e, t) {
      for (var n = t + "Capture", r = []; null !== e; ) {
        var a = e,
          l = a.stateNode;
        if (
          ((5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
            null === l ||
            (null != (a = Rt(e, n)) && r.unshift(Vc(e, a, l)),
            null != (a = Rt(e, t)) && r.push(Vc(e, a, l))),
          3 === e.tag)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Qc(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag && 27 !== e.tag);
      return e || null;
    }
    function Yc(e, t, n, r, a) {
      for (var l = t._reactName, i = []; null !== n && n !== r; ) {
        var o = n,
          s = o.alternate,
          u = o.stateNode;
        if (((o = o.tag), null !== s && s === r)) break;
        (5 !== o && 26 !== o && 27 !== o) ||
          null === u ||
          ((s = u),
          a
            ? null != (u = Rt(n, l)) && i.unshift(Vc(n, u, s))
            : a || (null != (u = Rt(n, l)) && i.push(Vc(n, u, s)))),
          (n = n.return);
      }
      0 !== i.length && e.push({ event: t, listeners: i });
    }
    var Xc = /\r\n?/g,
      Gc = /\u0000|\uFFFD/g;
    function Kc(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(Xc, "\n")
        .replace(Gc, "");
    }
    function Zc(e, t) {
      return (t = Kc(t)), Kc(e) === t;
    }
    function Jc() {}
    function ed(e, t, n, a, l, i) {
      switch (n) {
        case "children":
          "string" == typeof a
            ? "body" === t || ("textarea" === t && "" === a) || Nt(e, a)
            : ("number" == typeof a || "bigint" == typeof a) &&
              "body" !== t &&
              Nt(e, "" + a);
          break;
        case "className":
          at(e, "class", a);
          break;
        case "tabIndex":
          at(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          at(e, n, a);
          break;
        case "style":
          Ct(e, a, i);
          break;
        case "data":
          if ("object" !== t) {
            at(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if ("" === a && ("a" !== t || "href" !== n)) {
            e.removeAttribute(n);
            break;
          }
          if (
            null == a ||
            "function" == typeof a ||
            "symbol" == typeof a ||
            "boolean" == typeof a
          ) {
            e.removeAttribute(n);
            break;
          }
          (a = Tt("" + a)), e.setAttribute(n, a);
          break;
        case "action":
        case "formAction":
          if ("function" == typeof a) {
            e.setAttribute(
              n,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          }
          if (
            ("function" == typeof i &&
              ("formAction" === n
                ? ("input" !== t && ed(e, t, "name", l.name, l, null),
                  ed(e, t, "formEncType", l.formEncType, l, null),
                  ed(e, t, "formMethod", l.formMethod, l, null),
                  ed(e, t, "formTarget", l.formTarget, l, null))
                : (ed(e, t, "encType", l.encType, l, null),
                  ed(e, t, "method", l.method, l, null),
                  ed(e, t, "target", l.target, l, null))),
            null == a || "symbol" == typeof a || "boolean" == typeof a)
          ) {
            e.removeAttribute(n);
            break;
          }
          (a = Tt("" + a)), e.setAttribute(n, a);
          break;
        case "onClick":
          null != a && (e.onclick = Jc);
          break;
        case "onScroll":
          null != a && Rc("scroll", e);
          break;
        case "onScrollEnd":
          null != a && Rc("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (null != a) {
            if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
            if (null != (n = a.__html)) {
              if (null != l.children) throw Error(r(60));
              e.innerHTML = n;
            }
          }
          break;
        case "multiple":
          e.multiple = a && "function" != typeof a && "symbol" != typeof a;
          break;
        case "muted":
          e.muted = a && "function" != typeof a && "symbol" != typeof a;
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            null == a ||
            "function" == typeof a ||
            "boolean" == typeof a ||
            "symbol" == typeof a
          ) {
            e.removeAttribute("xlink:href");
            break;
          }
          (n = Tt("" + a)),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          null != a && "function" != typeof a && "symbol" != typeof a
            ? e.setAttribute(n, "" + a)
            : e.removeAttribute(n);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && "function" != typeof a && "symbol" != typeof a
            ? e.setAttribute(n, "")
            : e.removeAttribute(n);
          break;
        case "capture":
        case "download":
          !0 === a
            ? e.setAttribute(n, "")
            : !1 !== a &&
                null != a &&
                "function" != typeof a &&
                "symbol" != typeof a
              ? e.setAttribute(n, a)
              : e.removeAttribute(n);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          null != a &&
          "function" != typeof a &&
          "symbol" != typeof a &&
          !isNaN(a) &&
          1 <= a
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
          break;
        case "rowSpan":
        case "start":
          null == a || "function" == typeof a || "symbol" == typeof a || isNaN(a)
            ? e.removeAttribute(n)
            : e.setAttribute(n, a);
          break;
        case "popover":
          Rc("beforetoggle", e), Rc("toggle", e), rt(e, "popover", a);
          break;
        case "xlinkActuate":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          lt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          lt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          lt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          lt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          rt(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < n.length) ||
            ("o" !== n[0] && "O" !== n[0]) ||
            ("n" !== n[1] && "N" !== n[1])) &&
            rt(e, (n = Pt.get(n) || n), a);
      }
    }
    function td(e, t, n, a, l, i) {
      switch (n) {
        case "style":
          Ct(e, a, i);
          break;
        case "dangerouslySetInnerHTML":
          if (null != a) {
            if ("object" != typeof a || !("__html" in a)) throw Error(r(61));
            if (null != (n = a.__html)) {
              if (null != l.children) throw Error(r(60));
              e.innerHTML = n;
            }
          }
          break;
        case "children":
          "string" == typeof a
            ? Nt(e, a)
            : ("number" == typeof a || "bigint" == typeof a) && Nt(e, "" + a);
          break;
        case "onScroll":
          null != a && Rc("scroll", e);
          break;
        case "onScrollEnd":
          null != a && Rc("scrollend", e);
          break;
        case "onClick":
          null != a && (e.onclick = Jc);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
        case "innerText":
        case "textContent":
          break;
        default:
          Xe.hasOwnProperty(n) ||
            ("o" !== n[0] ||
            "n" !== n[1] ||
            ((l = n.endsWith("Capture")),
            (t = n.slice(2, l ? n.length - 7 : void 0)),
            "function" ==
              typeof (i = null != (i = e[Ae] || null) ? i[n] : null) &&
              e.removeEventListener(t, i, l),
            "function" != typeof a)
              ? n in e
                ? (e[n] = a)
                : !0 === a
                  ? e.setAttribute(n, "")
                  : rt(e, n, a)
              : ("function" != typeof i &&
                  null !== i &&
                  (n in e
                    ? (e[n] = null)
                    : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, l)));
      }
    }
    function nd(e, t, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Rc("error", e), Rc("load", e);
          var a,
            l = !1,
            i = !1;
          for (a in n)
            if (n.hasOwnProperty(a)) {
              var o = n[a];
              if (null != o)
                switch (a) {
                  case "src":
                    l = !0;
                    break;
                  case "srcSet":
                    i = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(r(137, t));
                  default:
                    ed(e, t, a, o, n, null);
                }
            }
          return (
            i && ed(e, t, "srcSet", n.srcSet, n, null),
            void (l && ed(e, t, "src", n.src, n, null))
          );
        case "input":
          Rc("invalid", e);
          var s = (a = o = i = null),
            u = null,
            c = null;
          for (l in n)
            if (n.hasOwnProperty(l)) {
              var d = n[l];
              if (null != d)
                switch (l) {
                  case "name":
                    i = d;
                    break;
                  case "type":
                    o = d;
                    break;
                  case "checked":
                    u = d;
                    break;
                  case "defaultChecked":
                    c = d;
                    break;
                  case "value":
                    a = d;
                    break;
                  case "defaultValue":
                    s = d;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (null != d) throw Error(r(137, t));
                    break;
                  default:
                    ed(e, t, l, d, n, null);
                }
            }
          return bt(e, a, s, u, c, o, i, !1), void pt(e);
        case "select":
          for (i in (Rc("invalid", e), (l = o = a = null), n))
            if (n.hasOwnProperty(i) && null != (s = n[i]))
              switch (i) {
                case "value":
                  a = s;
                  break;
                case "defaultValue":
                  o = s;
                  break;
                case "multiple":
                  l = s;
                default:
                  ed(e, t, i, s, n, null);
              }
          return (
            (t = a),
            (n = o),
            (e.multiple = !!l),
            void (null != t ? wt(e, !!l, t, !1) : null != n && wt(e, !!l, n, !0))
          );
        case "textarea":
          for (o in (Rc("invalid", e), (a = i = l = null), n))
            if (n.hasOwnProperty(o) && null != (s = n[o]))
              switch (o) {
                case "value":
                  l = s;
                  break;
                case "defaultValue":
                  i = s;
                  break;
                case "children":
                  a = s;
                  break;
                case "dangerouslySetInnerHTML":
                  if (null != s) throw Error(r(91));
                  break;
                default:
                  ed(e, t, o, s, n, null);
              }
          return St(e, l, i, a), void pt(e);
        case "option":
          for (u in n)
            if (n.hasOwnProperty(u) && null != (l = n[u]))
              if ("selected" === u)
                e.selected = l && "function" != typeof l && "symbol" != typeof l;
              else ed(e, t, u, l, n, null);
          return;
        case "dialog":
          Rc("beforetoggle", e), Rc("toggle", e), Rc("cancel", e), Rc("close", e);
          break;
        case "iframe":
        case "object":
          Rc("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Oc.length; l++) Rc(Oc[l], e);
          break;
        case "image":
          Rc("error", e), Rc("load", e);
          break;
        case "details":
          Rc("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Rc("error", e), Rc("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (c in n)
            if (n.hasOwnProperty(c) && null != (l = n[c]))
              switch (c) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  ed(e, t, c, l, n, null);
              }
          return;
        default:
          if (zt(t)) {
            for (d in n)
              n.hasOwnProperty(d) &&
                void 0 !== (l = n[d]) &&
                td(e, t, d, l, n, void 0);
            return;
          }
      }
      for (s in n)
        n.hasOwnProperty(s) && null != (l = n[s]) && ed(e, t, s, l, n, null);
    }
    var rd = null,
      ad = null;
    function ld(e) {
      return 9 === e.nodeType ? e : e.ownerDocument;
    }
    function id(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function od(e, t) {
      if (0 === e)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return 1 === e && "foreignObject" === t ? 0 : e;
    }
    function sd(e, t) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        "bigint" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var ud = null;
    var cd = "function" == typeof setTimeout ? setTimeout : void 0,
      dd = "function" == typeof clearTimeout ? clearTimeout : void 0,
      fd = "function" == typeof Promise ? Promise : void 0,
      pd =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== fd
            ? function (e) {
                return fd.resolve(null).then(e).catch(md);
              }
            : cd;
    function md(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function hd(e) {
      return "head" === e;
    }
    function gd(e, t) {
      var n = t,
        r = 0,
        a = 0;
      do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && 8 === l.nodeType))
          if ("/$" === (n = l.data)) {
            if (0 < r && 8 > r) {
              n = r;
              var i = e.ownerDocument;
              if ((1 & n && Sd(i.documentElement), 2 & n && Sd(i.body), 4 & n))
                for (Sd((n = i.head)), i = n.firstChild; i; ) {
                  var o = i.nextSibling,
                    s = i.nodeName;
                  i[Ue] ||
                    "SCRIPT" === s ||
                    "STYLE" === s ||
                    ("LINK" === s && "stylesheet" === i.rel.toLowerCase()) ||
                    n.removeChild(i),
                    (i = o);
                }
            }
            if (0 === a) return e.removeChild(l), void Lf(t);
            a--;
          } else
            "$" === n || "$?" === n || "$!" === n
              ? a++
              : (r = n.charCodeAt(0) - 48);
        else r = 0;
        n = l;
      } while (n);
      Lf(t);
    }
    function yd(e) {
      var t = e.firstChild;
      for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            yd(n), qe(n);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if ("stylesheet" === n.rel.toLowerCase()) continue;
        }
        e.removeChild(n);
      }
    }
    function vd(e) {
      return (
        "$!" === e.data ||
        ("$?" === e.data && "complete" === e.ownerDocument.readyState)
      );
    }
    function bd(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
          if (
            "$" === (t = e.data) ||
            "$!" === t ||
            "$?" === t ||
            "F!" === t ||
            "F" === t
          )
            break;
          if ("/$" === t) return null;
        }
      }
      return e;
    }
    var xd = null;
    function wd(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function kd(e, t, n) {
      switch (((t = ld(n)), e)) {
        case "html":
          if (!(e = t.documentElement)) throw Error(r(452));
          return e;
        case "head":
          if (!(e = t.head)) throw Error(r(453));
          return e;
        case "body":
          if (!(e = t.body)) throw Error(r(454));
          return e;
        default:
          throw Error(r(451));
      }
    }
    function Sd(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      qe(e);
    }
    var Nd = new Map(),
      jd = new Set();
    function Ed(e) {
      return "function" == typeof e.getRootNode
        ? e.getRootNode()
        : 9 === e.nodeType
          ? e
          : e.ownerDocument;
    }
    var Cd = I.d;
    I.d = {
      f: function () {
        var e = Cd.f(),
          t = Hu();
        return e || t;
      },
      r: function (e) {
        var t = Be(e);
        null !== t && 5 === t.tag && "form" === t.type ? Fi(t) : Cd.r(e);
      },
      D: function (e) {
        Cd.D(e), Pd("dns-prefetch", e, null);
      },
      C: function (e, t) {
        Cd.C(e, t), Pd("preconnect", e, t);
      },
      L: function (e, t, n) {
        Cd.L(e, t, n);
        var r = zd;
        if (r && e && t) {
          var a = 'link[rel="preload"][as="' + yt(t) + '"]';
          "image" === t && n && n.imageSrcSet
            ? ((a += '[imagesrcset="' + yt(n.imageSrcSet) + '"]'),
              "string" == typeof n.imageSizes &&
                (a += '[imagesizes="' + yt(n.imageSizes) + '"]'))
            : (a += '[href="' + yt(e) + '"]');
          var l = a;
          switch (t) {
            case "style":
              l = Td(e);
              break;
            case "script":
              l = Fd(e);
          }
          Nd.has(l) ||
            ((e = d(
              {
                rel: "preload",
                href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                as: t,
              },
              n,
            )),
            Nd.set(l, e),
            null !== r.querySelector(a) ||
              ("style" === t && r.querySelector(Md(l))) ||
              ("script" === t && r.querySelector(Ad(l))) ||
              (nd((t = r.createElement("link")), "link", e),
              Qe(t),
              r.head.appendChild(t)));
        }
      },
      m: function (e, t) {
        Cd.m(e, t);
        var n = zd;
        if (n && e) {
          var r = t && "string" == typeof t.as ? t.as : "script",
            a =
              'link[rel="modulepreload"][as="' +
              yt(r) +
              '"][href="' +
              yt(e) +
              '"]',
            l = a;
          switch (r) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              l = Fd(e);
          }
          if (
            !Nd.has(l) &&
            ((e = d({ rel: "modulepreload", href: e }, t)),
            Nd.set(l, e),
            null === n.querySelector(a))
          ) {
            switch (r) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (n.querySelector(Ad(l))) return;
            }
            nd((r = n.createElement("link")), "link", e),
              Qe(r),
              n.head.appendChild(r);
          }
        }
      },
      X: function (e, t) {
        Cd.X(e, t);
        var n = zd;
        if (n && e) {
          var r = We(n).hoistableScripts,
            a = Fd(e),
            l = r.get(a);
          l ||
            ((l = n.querySelector(Ad(a))) ||
              ((e = d({ src: e, async: !0 }, t)),
              (t = Nd.get(a)) && Rd(e, t),
              Qe((l = n.createElement("script"))),
              nd(l, "link", e),
              n.head.appendChild(l)),
            (l = { type: "script", instance: l, count: 1, state: null }),
            r.set(a, l));
        }
      },
      S: function (e, t, n) {
        Cd.S(e, t, n);
        var r = zd;
        if (r && e) {
          var a = We(r).hoistableStyles,
            l = Td(e);
          t = t || "default";
          var i = a.get(l);
          if (!i) {
            var o = { loading: 0, preload: null };
            if ((i = r.querySelector(Md(l)))) o.loading = 5;
            else {
              (e = d({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
                (n = Nd.get(l)) && Dd(e, n);
              var s = (i = r.createElement("link"));
              Qe(s),
                nd(s, "link", e),
                (s._p = new Promise(function (e, t) {
                  (s.onload = e), (s.onerror = t);
                })),
                s.addEventListener("load", function () {
                  o.loading |= 1;
                }),
                s.addEventListener("error", function () {
                  o.loading |= 2;
                }),
                (o.loading |= 4),
                Id(i, t, r);
            }
            (i = { type: "stylesheet", instance: i, count: 1, state: o }),
              a.set(l, i);
          }
        }
      },
      M: function (e, t) {
        Cd.M(e, t);
        var n = zd;
        if (n && e) {
          var r = We(n).hoistableScripts,
            a = Fd(e),
            l = r.get(a);
          l ||
            ((l = n.querySelector(Ad(a))) ||
              ((e = d({ src: e, async: !0, type: "module" }, t)),
              (t = Nd.get(a)) && Rd(e, t),
              Qe((l = n.createElement("script"))),
              nd(l, "link", e),
              n.head.appendChild(l)),
            (l = { type: "script", instance: l, count: 1, state: null }),
            r.set(a, l));
        }
      },
    };
    var zd = "undefined" == typeof document ? null : document;
    function Pd(e, t, n) {
      var r = zd;
      if (r && "string" == typeof t && t) {
        var a = yt(t);
        (a = 'link[rel="' + e + '"][href="' + a + '"]'),
          "string" == typeof n && (a += '[crossorigin="' + n + '"]'),
          jd.has(a) ||
            (jd.add(a),
            (e = { rel: e, crossOrigin: n, href: t }),
            null === r.querySelector(a) &&
              (nd((t = r.createElement("link")), "link", e),
              Qe(t),
              r.head.appendChild(t)));
      }
    }
    function Ld(e, t, n, a) {
      var l,
        i,
        o,
        s,
        u = (u = W.current) ? Ed(u) : null;
      if (!u) throw Error(r(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return "string" == typeof n.precedence && "string" == typeof n.href
            ? ((t = Td(n.href)),
              (a = (n = We(u).hoistableStyles).get(t)) ||
                ((a = { type: "style", instance: null, count: 0, state: null }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            "stylesheet" === n.rel &&
            "string" == typeof n.href &&
            "string" == typeof n.precedence
          ) {
            e = Td(n.href);
            var c = We(u).hoistableStyles,
              d = c.get(e);
            if (
              (d ||
                ((u = u.ownerDocument || u),
                (d = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                c.set(e, d),
                (c = u.querySelector(Md(e))) &&
                  !c._p &&
                  ((d.instance = c), (d.state.loading = 5)),
                Nd.has(e) ||
                  ((n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  Nd.set(e, n),
                  c ||
                    ((l = u),
                    (i = e),
                    (o = n),
                    (s = d.state),
                    l.querySelector('link[rel="preload"][as="style"][' + i + "]")
                      ? (s.loading = 1)
                      : ((i = l.createElement("link")),
                        (s.preload = i),
                        i.addEventListener("load", function () {
                          return (s.loading |= 1);
                        }),
                        i.addEventListener("error", function () {
                          return (s.loading |= 2);
                        }),
                        nd(i, "link", o),
                        Qe(i),
                        l.head.appendChild(i))))),
              t && null === a)
            )
              throw Error(r(528, ""));
            return d;
          }
          if (t && null !== a) throw Error(r(529, ""));
          return null;
        case "script":
          return (
            (t = n.async),
            "string" == typeof (n = n.src) &&
            t &&
            "function" != typeof t &&
            "symbol" != typeof t
              ? ((t = Fd(n)),
                (a = (n = We(u).hoistableScripts).get(t)) ||
                  ((a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  n.set(t, a)),
                a)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(r(444, e));
      }
    }
    function Td(e) {
      return 'href="' + yt(e) + '"';
    }
    function Md(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function _d(e) {
      return d({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Fd(e) {
      return '[src="' + yt(e) + '"]';
    }
    function Ad(e) {
      return "script[async]" + e;
    }
    function Od(e, t, n) {
      if ((t.count++, null === t.instance))
        switch (t.type) {
          case "style":
            var a = e.querySelector('style[data-href~="' + yt(n.href) + '"]');
            if (a) return (t.instance = a), Qe(a), a;
            var l = d({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              Qe((a = (e.ownerDocument || e).createElement("style"))),
              nd(a, "style", l),
              Id(a, n.precedence, e),
              (t.instance = a)
            );
          case "stylesheet":
            l = Td(n.href);
            var i = e.querySelector(Md(l));
            if (i) return (t.state.loading |= 4), (t.instance = i), Qe(i), i;
            (a = _d(n)),
              (l = Nd.get(l)) && Dd(a, l),
              Qe((i = (e.ownerDocument || e).createElement("link")));
            var o = i;
            return (
              (o._p = new Promise(function (e, t) {
                (o.onload = e), (o.onerror = t);
              })),
              nd(i, "link", a),
              (t.state.loading |= 4),
              Id(i, n.precedence, e),
              (t.instance = i)
            );
          case "script":
            return (
              (i = Fd(n.src)),
              (l = e.querySelector(Ad(i)))
                ? ((t.instance = l), Qe(l), l)
                : ((a = n),
                  (l = Nd.get(i)) && Rd((a = d({}, n)), l),
                  Qe((l = (e = e.ownerDocument || e).createElement("script"))),
                  nd(l, "link", a),
                  e.head.appendChild(l),
                  (t.instance = l))
            );
          case "void":
            return null;
          default:
            throw Error(r(443, t.type));
        }
      else
        "stylesheet" === t.type &&
          !(4 & t.state.loading) &&
          ((a = t.instance), (t.state.loading |= 4), Id(a, n.precedence, e));
      return t.instance;
    }
    function Id(e, t, n) {
      for (
        var r = n.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          a = r.length ? r[r.length - 1] : null,
          l = a,
          i = 0;
        i < r.length;
        i++
      ) {
        var o = r[i];
        if (o.dataset.precedence === t) l = o;
        else if (l !== a) break;
      }
      l
        ? l.parentNode.insertBefore(e, l.nextSibling)
        : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
    }
    function Dd(e, t) {
      null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.title && (e.title = t.title);
    }
    function Rd(e, t) {
      null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
        null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
        null == e.integrity && (e.integrity = t.integrity);
    }
    var $d = null;
    function Ud(e, t, n) {
      if (null === $d) {
        var r = new Map(),
          a = ($d = new Map());
        a.set(n, r);
      } else (r = (a = $d).get(n)) || ((r = new Map()), a.set(n, r));
      if (r.has(e)) return r;
      for (
        r.set(e, null), n = n.getElementsByTagName(e), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a];
        if (
          !(
            l[Ue] ||
            l[Fe] ||
            ("link" === e && "stylesheet" === l.getAttribute("rel"))
          ) &&
          "http://www.w3.org/2000/svg" !== l.namespaceURI
        ) {
          var i = l.getAttribute(t) || "";
          i = e + i;
          var o = r.get(i);
          o ? o.push(l) : r.set(i, [l]);
        }
      }
      return r;
    }
    function qd(e, t, n) {
      (e = e.ownerDocument || e).head.insertBefore(
        n,
        "title" === t ? e.querySelector("head > title") : null,
      );
    }
    function Hd(e) {
      return !!("stylesheet" !== e.type || 3 & e.state.loading);
    }
    var Bd = null;
    function Vd() {}
    function Wd() {
      if ((this.count--, 0 === this.count))
        if (this.stylesheets) Yd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
    }
    var Qd = null;
    function Yd(e, t) {
      (e.stylesheets = null),
        null !== e.unsuspend &&
          (e.count++,
          (Qd = new Map()),
          t.forEach(Xd, e),
          (Qd = null),
          Wd.call(e));
    }
    function Xd(e, t) {
      if (!(4 & t.state.loading)) {
        var n = Qd.get(e);
        if (n) var r = n.get(null);
        else {
          (n = new Map()), Qd.set(e, n);
          for (
            var a = e.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              l = 0;
            l < a.length;
            l++
          ) {
            var i = a[l];
            ("LINK" !== i.nodeName && "not all" === i.getAttribute("media")) ||
              (n.set(i.dataset.precedence, i), (r = i));
          }
          r && n.set(null, r);
        }
        (i = (a = t.instance).getAttribute("data-precedence")),
          (l = n.get(i) || r) === r && n.set(null, a),
          n.set(i, a),
          this.count++,
          (r = Wd.bind(this)),
          a.addEventListener("load", r),
          a.addEventListener("error", r),
          l
            ? l.parentNode.insertBefore(a, l.nextSibling)
            : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
          (t.state.loading |= 4);
      }
    }
    var Gd = {
      $$typeof: S,
      Provider: null,
      Consumer: null,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
    };
    function Kd(e, t, n, r, a, l, i, o) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ee(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ee(0)),
        (this.hiddenUpdates = Ee(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = a),
        (this.onCaughtError = l),
        (this.onRecoverableError = i),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = o),
        (this.incompleteTransitions = new Map());
    }
    function Zd(e, t, n, r, a, l, i, o, s, u, c, d) {
      return (
        (e = new Kd(e, t, n, i, o, s, u, d)),
        (t = 1),
        !0 === l && (t |= 24),
        (l = Dr(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (t = Aa()).refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (l.memoizedState = { element: r, isDehydrated: n, cache: t }),
        al(l),
        e
      );
    }
    function Jd(e) {
      return e ? (e = Or) : Or;
    }
    function ef(e, t, n, r, a, l) {
      (a = Jd(a)),
        null === r.context ? (r.context = a) : (r.pendingContext = a),
        ((r = il(t)).payload = { element: n }),
        null !== (l = void 0 === l ? null : l) && (r.callback = l),
        null !== (n = ol(e, r, t)) && (Du(n, 0, t), sl(n, e, t));
    }
    function tf(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t;
      }
    }
    function nf(e, t) {
      tf(e, t), (e = e.alternate) && tf(e, t);
    }
    function rf(e) {
      if (13 === e.tag) {
        var t = _r(e, 67108864);
        null !== t && Du(t, 0, 67108864), nf(e, 67108864);
      }
    }
    var af = !0;
    function lf(e, t, n, r) {
      var a = O.T;
      O.T = null;
      var l = I.p;
      try {
        (I.p = 2), sf(e, t, n, r);
      } finally {
        (I.p = l), (O.T = a);
      }
    }
    function of(e, t, n, r) {
      var a = O.T;
      O.T = null;
      var l = I.p;
      try {
        (I.p = 8), sf(e, t, n, r);
      } finally {
        (I.p = l), (O.T = a);
      }
    }
    function sf(e, t, n, r) {
      if (af) {
        var a = uf(r);
        if (null === a) Bc(e, t, r, cf, n), wf(e, r);
        else if (
          (function (e, t, n, r, a) {
            switch (t) {
              case "focusin":
                return (mf = kf(mf, e, t, n, r, a)), !0;
              case "dragenter":
                return (hf = kf(hf, e, t, n, r, a)), !0;
              case "mouseover":
                return (gf = kf(gf, e, t, n, r, a)), !0;
              case "pointerover":
                var l = a.pointerId;
                return yf.set(l, kf(yf.get(l) || null, e, t, n, r, a)), !0;
              case "gotpointercapture":
                return (
                  (l = a.pointerId),
                  vf.set(l, kf(vf.get(l) || null, e, t, n, r, a)),
                  !0
                );
            }
            return !1;
          })(a, e, t, n, r)
        )
          r.stopPropagation();
        else if ((wf(e, r), 4 & t && -1 < xf.indexOf(e))) {
          for (; null !== a; ) {
            var l = Be(a);
            if (null !== l)
              switch (l.tag) {
                case 3:
                  if ((l = l.stateNode).current.memoizedState.isDehydrated) {
                    var i = xe(l.pendingLanes);
                    if (0 !== i) {
                      var o = l;
                      for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                        var s = 1 << (31 - he(i));
                        (o.entanglements[1] |= s), (i &= ~s);
                      }
                      Nc(l), !(6 & au) && ((Nu = re() + 500), jc(0));
                    }
                  }
                  break;
                case 13:
                  null !== (o = _r(l, 2)) && Du(o, 0, 2), Hu(), nf(l, 2);
              }
            if ((null === (l = uf(r)) && Bc(e, t, r, cf, n), l === a)) break;
            a = l;
          }
          null !== a && r.stopPropagation();
        } else Bc(e, t, r, null, n);
      }
    }
    function uf(e) {
      return df((e = _t(e)));
    }
    var cf = null;
    function df(e) {
      if (((cf = null), null !== (e = He(e)))) {
        var t = o(e);
        if (null === t) e = null;
        else {
          var n = t.tag;
          if (13 === n) {
            if (null !== (e = s(t))) return e;
            e = null;
          } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (cf = e), null;
    }
    function ff(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (ae()) {
            case le:
              return 2;
            case ie:
              return 8;
            case oe:
            case se:
              return 32;
            case ue:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var pf = !1,
      mf = null,
      hf = null,
      gf = null,
      yf = new Map(),
      vf = new Map(),
      bf = [],
      xf =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function wf(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mf = null;
          break;
        case "dragenter":
        case "dragleave":
          hf = null;
          break;
        case "mouseover":
        case "mouseout":
          gf = null;
          break;
        case "pointerover":
        case "pointerout":
          yf.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          vf.delete(t.pointerId);
      }
    }
    function kf(e, t, n, r, a, l) {
      return null === e || e.nativeEvent !== l
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: l,
            targetContainers: [a],
          }),
          null !== t && null !== (t = Be(t)) && rf(t),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          null !== a && -1 === t.indexOf(a) && t.push(a),
          e);
    }
    function Sf(e) {
      var t = He(e.target);
      if (null !== t) {
        var n = o(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = s(n)))
              return (
                (e.blockedOn = t),
                void (function (e, t) {
                  var n = I.p;
                  try {
                    return (I.p = e), t();
                  } finally {
                    I.p = n;
                  }
                })(e.priority, function () {
                  if (13 === n.tag) {
                    var e = Ou();
                    e = Le(e);
                    var t = _r(n, e);
                    null !== t && Du(t, 0, e), nf(n, e);
                  }
                })
              );
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Nf(e) {
      if (null !== e.blockedOn) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = uf(e.nativeEvent);
        if (null !== n)
          return null !== (t = Be(n)) && rf(t), (e.blockedOn = n), !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        (Mt = r), n.target.dispatchEvent(r), (Mt = null), t.shift();
      }
      return !0;
    }
    function jf(e, t, n) {
      Nf(e) && n.delete(t);
    }
    function Ef() {
      (pf = !1),
        null !== mf && Nf(mf) && (mf = null),
        null !== hf && Nf(hf) && (hf = null),
        null !== gf && Nf(gf) && (gf = null),
        yf.forEach(jf),
        vf.forEach(jf);
    }
    function Cf(t, n) {
      t.blockedOn === n &&
        ((t.blockedOn = null),
        pf ||
          ((pf = !0),
          e.unstable_scheduleCallback(e.unstable_NormalPriority, Ef)));
    }
    var zf = null;
    function Pf(t) {
      zf !== t &&
        ((zf = t),
        e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
          zf === t && (zf = null);
          for (var e = 0; e < t.length; e += 3) {
            var n = t[e],
              r = t[e + 1],
              a = t[e + 2];
            if ("function" != typeof r) {
              if (null === df(r || n)) continue;
              break;
            }
            var l = Be(n);
            null !== l &&
              (t.splice(e, 3),
              (e -= 3),
              Mi(l, { pending: !0, data: a, method: n.method, action: r }, r, a));
          }
        }));
    }
    function Lf(e) {
      function t(t) {
        return Cf(t, e);
      }
      null !== mf && Cf(mf, e),
        null !== hf && Cf(hf, e),
        null !== gf && Cf(gf, e),
        yf.forEach(t),
        vf.forEach(t);
      for (var n = 0; n < bf.length; n++) {
        var r = bf[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < bf.length && null === (n = bf[0]).blockedOn; )
        Sf(n), null === n.blockedOn && bf.shift();
      if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
        for (r = 0; r < n.length; r += 3) {
          var a = n[r],
            l = n[r + 1],
            i = a[Ae] || null;
          if ("function" == typeof l) i || Pf(n);
          else if (i) {
            var o = null;
            if (l && l.hasAttribute("formAction")) {
              if (((a = l), (i = l[Ae] || null))) o = i.formAction;
              else if (null !== df(a)) continue;
            } else o = i.action;
            "function" == typeof o ? (n[r + 1] = o) : (n.splice(r, 3), (r -= 3)),
              Pf(n);
          }
        }
    }
    function Tf(e) {
      this._internalRoot = e;
    }
    function Mf(e) {
      this._internalRoot = e;
    }
    (Mf.prototype.render = Tf.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (null === t) throw Error(r(409));
        ef(t.current, Ou(), e, t, null, null);
      }),
      (Mf.prototype.unmount = Tf.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ef(e.current, 2, null, e, null, null), Hu(), (t[Oe] = null);
          }
        }),
      (Mf.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = Me();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < bf.length && 0 !== t && t < bf[n].priority; n++);
          bf.splice(n, 0, e), 0 === n && Sf(e);
        }
      });
    var _f = t.version;
    if ("19.1.0" !== _f) throw Error(r(527, _f, "19.1.0"));
    I.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(r(188));
        throw ((e = Object.keys(e).join(",")), Error(r(268, e)));
      }
      return (
        (e = (function (e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = o(e))) throw Error(r(188));
            return t !== e ? null : e;
          }
          for (var n = e, a = t; ; ) {
            var l = n.return;
            if (null === l) break;
            var i = l.alternate;
            if (null === i) {
              if (null !== (a = l.return)) {
                n = a;
                continue;
              }
              break;
            }
            if (l.child === i.child) {
              for (i = l.child; i; ) {
                if (i === n) return u(l), e;
                if (i === a) return u(l), t;
                i = i.sibling;
              }
              throw Error(r(188));
            }
            if (n.return !== a.return) (n = l), (a = i);
            else {
              for (var s = !1, c = l.child; c; ) {
                if (c === n) {
                  (s = !0), (n = l), (a = i);
                  break;
                }
                if (c === a) {
                  (s = !0), (a = l), (n = i);
                  break;
                }
                c = c.sibling;
              }
              if (!s) {
                for (c = i.child; c; ) {
                  if (c === n) {
                    (s = !0), (n = i), (a = l);
                    break;
                  }
                  if (c === a) {
                    (s = !0), (a = i), (n = l);
                    break;
                  }
                  c = c.sibling;
                }
                if (!s) throw Error(r(189));
              }
            }
            if (n.alternate !== a) throw Error(r(190));
          }
          if (3 !== n.tag) throw Error(r(188));
          return n.stateNode.current === n ? e : t;
        })(t)),
        (e = null === (e = null !== e ? c(e) : null) ? null : e.stateNode)
      );
    };
    var Ff = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.1.0",
    };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var Af = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Af.isDisabled && Af.supportsFiber)
        try {
          (fe = Af.inject(Ff)), (pe = Af);
        } catch (If) {}
    }
    return (
      (h.createRoot = function (e, t) {
        if (!i(e)) throw Error(r(299));
        var n = !1,
          a = "",
          l = xo,
          o = wo,
          s = ko;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (l = t.onUncaughtError),
            void 0 !== t.onCaughtError && (o = t.onCaughtError),
            void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks &&
              t.unstable_transitionCallbacks),
          (t = Zd(e, 1, !1, null, 0, n, a, l, o, s, 0, null)),
          (e[Oe] = t.current),
          qc(e),
          new Tf(t)
        );
      }),
      (h.hydrateRoot = function (e, t, n) {
        if (!i(e)) throw Error(r(299));
        var a = !1,
          l = "",
          o = xo,
          s = wo,
          u = ko,
          c = null;
        return (
          null != n &&
            (!0 === n.unstable_strictMode && (a = !0),
            void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
            void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
            void 0 !== n.onCaughtError && (s = n.onCaughtError),
            void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
            void 0 !== n.unstable_transitionCallbacks &&
              n.unstable_transitionCallbacks,
            void 0 !== n.formState && (c = n.formState)),
          ((t = Zd(e, 1, !0, t, 0, a, l, o, s, u, 0, c)).context = Jd(null)),
          (n = t.current),
          ((l = il((a = Le((a = Ou()))))).callback = null),
          ol(n, l, a),
          (n = a),
          (t.current.lanes = n),
          Ce(t, n),
          Nc(t),
          (e[Oe] = t.current),
          qc(e),
          new Mf(t)
        );
      }),
      (h.version = "19.1.0"),
      h
    );
  }
  var x =
    (p ||
      ((p = 1),
      (function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {}
      })(),
      (m.exports = b())),
    m.exports);
  const w = () =>
      e.jsxs("div", {
        className:
          "fixed inset-0 flex flex-col items-center justify-center z-50 bg-white",
        children: [
          e.jsx(t.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6 },
            className: "mb-8",
            children: e.jsxs("h1", {
              className: "text-2xl md:text-3xl font-bold",
              children: [
                e.jsx("span", { children: "Matt" }),
                e.jsx("span", { className: "text-gray-400", children: ".dev" }),
              ],
            }),
          }),
          e.jsx(t.div, {
            className: "flex space-x-3",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.5, delay: 0.3 },
            children: [0, 1, 2].map((n) =>
              e.jsx(
                t.div,
                {
                  className: "w-3 h-3 bg-black rounded-full",
                  animate: {
                    y: ["0%", "-100%", "0%"],
                    opacity: [1, 0.5, 1],
                    scale: [1, 0.8, 1],
                  },
                  transition: {
                    duration: 1.2,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 0.15 * n,
                  },
                },
                n,
              ),
            ),
          }),
          e.jsx(t.p, {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 0.7, y: 0 },
            transition: { duration: 0.6, delay: 0.6 },
            className: "mt-6 text-sm text-gray-500",
            children: "Loading experience...",
          }),
        ],
      }),
    k = () => {
      const t = i.useRef(null),
        n = i.useRef(null),
        r = i.useRef(!1),
        a = i.useRef(!1),
        l = i.useRef(!1),
        o = i.useRef(null),
        s = i.useRef(null),
        u = i.useRef({ x: 0, y: 0 }),
        c = i.useRef({ x: 0, y: 0 });
      return (
        i.useEffect(() => {
          const e = t.current,
            i = n.current;
          if (!e || !i) return;
          const d = (e) => {
              c.current = { x: e.clientX, y: e.clientY };
            },
            f = (t) => {
              const n = t.target,
                a = null !== n.closest("footer");
              a !== l.current &&
                ((l.current = a),
                a
                  ? (e.classList.add("cursor-over-footer"),
                    i.classList.add("cursor-over-footer"))
                  : (e.classList.remove("cursor-over-footer"),
                    i.classList.remove("cursor-over-footer")));
              n.matches('a, button, [role="button"], .cursor-pointer') ||
              n.closest('a, button, [role="button"], .cursor-pointer')
                ? r.current ||
                  ((r.current = !0),
                  e.classList.add("cursor-dot--hover"),
                  i.classList.add("cursor-ring--hover"))
                : r.current &&
                  ((r.current = !1),
                  e.classList.remove("cursor-dot--hover"),
                  i.classList.remove("cursor-ring--hover"));
            },
            p = () => {
              (a.current = !0),
                e.classList.add("cursor-dot--clicked"),
                i.classList.add("cursor-ring--clicked");
            },
            m = () => {
              (a.current = !1),
                e.classList.remove("cursor-dot--clicked"),
                i.classList.remove("cursor-ring--clicked");
            },
            h = () => {
              (e.style.opacity = "0"), (i.style.opacity = "0");
            },
            g = () => {
              (e.style.opacity = "1"), (i.style.opacity = "1");
            },
            y = (t) => {
              if (void 0 !== s.current) {
                const t = 0.15;
                (u.current.x += (c.current.x - u.current.x) * t),
                  (u.current.y += (c.current.y - u.current.y) * t),
                  (e.style.transform = `translate3d(${u.current.x - 4}px, ${u.current.y - 4}px, 0)`),
                  (i.style.transform = `translate3d(${u.current.x - 16}px, ${u.current.y - 16}px, 0)`);
              }
              (s.current = t), (o.current = requestAnimationFrame(y));
            };
          return (
            (o.current = requestAnimationFrame(y)),
            document.addEventListener("mousemove", d, { passive: !0 }),
            document.addEventListener("mousemove", f, { passive: !0 }),
            document.addEventListener("mousedown", p, { passive: !0 }),
            document.addEventListener("mouseup", m, { passive: !0 }),
            document.addEventListener("mouseenter", g, { passive: !0 }),
            document.addEventListener("mouseleave", h, { passive: !0 }),
            () => {
              cancelAnimationFrame(o.current),
                document.removeEventListener("mousemove", d),
                document.removeEventListener("mousemove", f),
                document.removeEventListener("mousedown", p),
                document.removeEventListener("mouseup", m),
                document.removeEventListener("mouseenter", g),
                document.removeEventListener("mouseleave", h);
            }
          );
        }, []),
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("div", { ref: t, className: "cursor-dot" }),
            e.jsx("div", { ref: n, className: "cursor-ring" }),
          ],
        })
      );
    },
    S = (e) => {
      const t = ((e) =>
        e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        ))(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    N = (...e) =>
      e
        .filter((e, t, n) => Boolean(e) && "" !== e.trim() && n.indexOf(e) === t)
        .join(" ")
        .trim();
  /**
   * @license lucide-react v0.488.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ var j = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  /**
   * @license lucide-react v0.488.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ const E = i.forwardRef(
      (
        {
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: r,
          className: a = "",
          children: l,
          iconNode: o,
          ...s
        },
        u,
      ) =>
        i.createElement(
          "svg",
          {
            ref: u,
            ...j,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? (24 * Number(n)) / Number(t) : n,
            className: N("lucide", a),
            ...s,
          },
          [
            ...o.map(([e, t]) => i.createElement(e, t)),
            ...(Array.isArray(l) ? l : [l]),
          ],
        ),
    ),
    C = (e, t) => {
      const n = i.forwardRef(({ className: n, ...r }, a) => {
        return i.createElement(E, {
          ref: a,
          iconNode: t,
          className: N(
            `lucide-${((l = S(e)), l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase())}`,
            `lucide-${e}`,
            n,
          ),
          ...r,
        });
        var l;
      });
      return (n.displayName = S(e)), n;
    },
    z = C("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]),
    P = C("arrow-up-right", [
      ["path", { d: "M7 7h10v10", key: "1tivn9" }],
      ["path", { d: "M7 17 17 7", key: "1vkiza" }],
    ]),
    L = C("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]),
    T = C("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
    M = C("chevron-right", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]),
    _ = C("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
    F = C("circle-alert", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
      ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
    ]),
    A = C("circle-check-big", [
      ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
      ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
    ]),
    O = C("circle-x", [
      ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
      ["path", { d: "m9 9 6 6", key: "z0biqf" }],
    ]),
    I = C("cloud-off", [
      ["path", { d: "m2 2 20 20", key: "1ooewy" }],
      [
        "path",
        {
          d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
          key: "yfwify",
        },
      ],
      [
        "path",
        {
          d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
          key: "jlfiyv",
        },
      ],
    ]),
    D = C("code", [
      ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
      ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
    ]),
    R = C("download", [
      ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
      ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
      ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
    ]),
    $ = C("external-link", [
      ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
      ["path", { d: "M10 14 21 3", key: "gplh6r" }],
      [
        "path",
        {
          d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
          key: "a6xqqp",
        },
      ],
    ]),
    U = C("github", [
      [
        "path",
        {
          d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
          key: "tonef",
        },
      ],
      ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
    ]),

    TT = C("telegram", [
        [
          "path",
          {
            d: "M22 2 15 22 11 13 2 9z",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            key: "line1"
          }
        ],
        [
          "path",
          {
            d: "M22 2 11 13",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            key: "line2"
          }
        ]
      ]),
      WW = C("whatsapp", [
        [
          "path",
          {
            d: "M16.7 13.3c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a7.9 7.9 0 0 1-2.3-2.8c-.2-.4 0-.5.1-.7.1-.1.2-.3.3-.4s.1-.3 0-.5-.7-1.7-.9-2.3c-.2-.6-.4-.5-.7-.5s-.4 0-.5 0-.5 0-.8.4a3.4 3.4 0 0 0-1 2.4c0 1.4.6 2.8 1.8 4.2 1.2 1.5 2.9 2.4 4.5 2.7a5.4 5.4 0 0 0 2.4 0c.6-.2 1.8-.7 2.1-1.3s.3-1.2.3-1.3-.2-.2-.4-.3z",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            key: "line1"
          }
        ],
        [
          "path",
          {
            d: "M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2z",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            key: "line2"
          }
        ]
      ]),


    q = C("layers", [
      [
        "path",
        {
          d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
          key: "zw3jo",
        },
      ],
      [
        "path",
        {
          d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
          key: "1wduqc",
        },
      ],
      [
        "path",
        {
          d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
          key: "kqbvx6",
        },
      ],
    ]),
    H = C("linkedin", [
      [
        "path",
        {
          d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
          key: "c2jq9f",
        },
      ],
      ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
      ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
    ]),
    B = C("loader-circle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]),
    V = C("mail", [
      [
        "rect",
        { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
      ],
      ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
    ]),
    W = C("map-pin", [
      [
        "path",
        {
          d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
          key: "1r0f0z",
        },
      ],
      ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
    ]),
    Q = C("menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]),
    Y = C("send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]),
    X = C("tag", [
      [
        "path",
        {
          d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
          key: "vktsd0",
        },
      ],
      [
        "circle",
        { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
      ],
    ]),
    G = C("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    K = ({
      className: t = "",
      quantity: n = 40,
      staticity: r = 50,
      ease: a = 50,
      color: l = "#000000",
    }) => {
      const o = i.useRef(null),
        s = i.useRef(null),
        u = i.useRef(null),
        c = i.useRef([]),
        d = i.useRef({ x: 0, y: 0 }),
        f = i.useRef({ x: 0, y: 0 }),
        p = i.useRef({ x: 0, y: 0 }),
        m = i.useRef(!1),
        h = () => {
          s.current &&
            o.current &&
            u.current &&
            ((c.current = []),
            (o.current.width = s.current.offsetWidth),
            (o.current.height = s.current.offsetHeight),
            g());
        },
        g = () => {
          if (!o.current) return;
          const e = o.current.width,
            t = o.current.height;
          for (let r = 0; r < n; r++) {
            const n = 1.5 * Math.random() + 1;
            c.current.push({
              x: Math.random() * e,
              y: Math.random() * t,
              translateX: 0,
              translateY: 0,
              size: n,
              alpha: 0,
              targetAlpha: parseFloat((0.6 * Math.random() + 0.1).toFixed(1)),
              dx: 0.2 * (Math.random() - 0.5),
              dy: 0.2 * (Math.random() - 0.5),
              magnetism: 0.1 + 4 * Math.random(),
            });
          }
        },
        y = (e) => {
          if (!o.current) return !1;
          const t = o.current.width,
            n = o.current.height;
          return e.x < 5
            ? "left"
            : e.x > t - 5
              ? "right"
              : e.y < 5
                ? "top"
                : e.y > n - 5 && "bottom";
        },
        v = (e, t, n, r, a) => {
          const l = r + ((e - t) * (a - r)) / (n - t);
          return l > 0 ? l : 0;
        },
        b = () => {
          const e = { ...d.current };
          (f.current.x = e.x),
            (f.current.y = e.y),
            u.current.clearRect(0, 0, o.current.width, o.current.height);
          const t = r;
          for (let n = 0; n < c.current.length; n++) {
            const e = c.current[n],
              r = y(e);
            if (
              (!1 !== r &&
                ((e.dx = "right" === r || "left" === r ? -e.dx : e.dx),
                (e.dy = "top" === r || "bottom" === r ? -e.dy : e.dy)),
              f.current.x &&
                f.current.y &&
                m.current &&
                p.current.x &&
                p.current.y)
            ) {
              const n = v(
                Math.sqrt(
                  Math.pow(f.current.x - e.x, 2) + Math.pow(f.current.y - e.y, 2),
                ),
                0,
                300,
                0,
                1,
              );
              (e.translateX = (f.current.x - e.x) * n * t * e.magnetism * 0.01),
                (e.translateY = (f.current.y - e.y) * n * t * e.magnetism * 0.01),
                n < 0.01 && ((e.translateX = 0), (e.translateY = 0));
            } else
              (e.translateX += 0.1 * (0 - e.translateX)),
                (e.translateY += 0.1 * (0 - e.translateY));
            const i = e.translateX * a * 0.01,
              o = e.translateY * a * 0.01;
            (e.x += e.dx + i),
              (e.y += e.dy + o),
              (e.alpha += 0.07 * (e.targetAlpha - e.alpha)),
              u.current.beginPath(),
              u.current.arc(e.x, e.y, e.size, 0, 2 * Math.PI),
              (u.current.fillStyle = `rgba(${parseInt(l.slice(1, 3), 16)}, ${parseInt(l.slice(3, 5), 16)}, ${parseInt(l.slice(5, 7), 16)}, ${e.alpha})`),
              u.current.fill();
          }
          (p.current.x = e.x),
            (p.current.y = e.y),
            window.requestAnimationFrame(b);
        };
      return (
        i.useEffect(() => {
          if (o.current)
            return (
              (u.current = o.current.getContext("2d")),
              h(),
              b(),
              window.addEventListener("resize", h),
              () => {
                window.removeEventListener("resize", h);
              }
            );
        }, []),
        i.useEffect(() => {
          const e = (e) => {
              var t;
              const n =
                  null == (t = o.current) ? void 0 : t.getBoundingClientRect(),
                r = e.clientX - n.left,
                a = e.clientY - n.top;
              (d.current = { x: r, y: a }), (m.current = !0);
            },
            t = () => {
              m.current = !0;
            },
            n = () => {
              (m.current = !1), (d.current = { x: 0, y: 0 });
            };
          if (s.current)
            return (
              s.current.addEventListener("mousemove", e),
              s.current.addEventListener("mouseenter", t),
              s.current.addEventListener("mouseleave", n),
              () => {
                var r, a, l;
                null == (r = s.current) || r.removeEventListener("mousemove", e),
                  null == (a = s.current) ||
                    a.removeEventListener("mouseenter", t),
                  null == (l = s.current) ||
                    l.removeEventListener("mouseleave", n);
              }
            );
        }, []),
        e.jsx("div", {
          ref: s,
          className: `absolute inset-0 ${t}`,
          children: e.jsx("canvas", {
            ref: o,
            className: "absolute inset-0 w-full h-full",
          }),
        })
      );
    },
    Z = ({
      text: n,
      className: r = "",
      once: a = !1,
      delay: l = 0,
      duration: i = 0.05,
    }) => {
      const o = n.split(" "),
        s = {
          hidden: { opacity: 0 },
          visible: (e = 1) => ({
            opacity: 1,
            transition: { staggerChildren: i, delayChildren: l * e },
          }),
        },
        u = {
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 100 },
          },
          hidden: {
            opacity: 0,
            y: 20,
            transition: { type: "spring", damping: 12, stiffness: 100 },
          },
        };
      return e.jsx(t.div, {
        className: `${r}`,
        variants: s,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: a },
        children: o.map((n, r) =>
          e.jsx(
            t.span,
            { className: "inline-block mr-2 mb-2", variants: u, children: n },
            r,
          ),
        ),
      });
    };
  /**
   * @license lucide-react v0.488.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */ function J() {
    return e.jsxs("section", {
      id: "home",
      className: "pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden",
      children: [
        e.jsx(K, {
          quantity: 30,
          staticity: 20,
          ease: 50,
          color: "#000000",
          className: "opacity-70 z-0",
        }),
        e.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: e.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx(t.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6 },
                    className: "mb-6",
                    children: e.jsx("span", {
                      className:
                        "text-sm font-medium tracking-wider bg-black text-white px-4 py-1.5 rounded-full",
                      children: "SOFTWARE ENGINEER",
                    }),
                  }),
                  e.jsx(Z, {
                    text: "Building digital experiences that make an impact",
                    className:
                      "text-5xl md:text-7xl font-bold tracking-tight mb-6",
                    once: !0,
                    duration: 0.08,
                  }),
                  e.jsx(t.p, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    className: "text-gray-600 text-lg md:text-xl mb-10 max-w-lg",
                    children:
                      "I am a dedicated Software Engineer specializing in full-stack application development like website, mobile apps, decentralized apps with AI-enhanced solutions.",
                  }),
                  e.jsxs(t.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.6, delay: 0.3 },
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      e.jsxs(t.a, {
                        href: "#projects",
                        whileHover: { scale: 1.03 },
                        whileTap: { scale: 0.98 },
                        className:
                          "px-8 py-4 bg-black text-white rounded-full font-medium flex items-center justify-center gap-2 group shadow-sm hover:shadow-md transition-shadow",
                        children: [
                          "View my work",
                          e.jsx(t.span, {
                            initial: { x: 0 },
                            animate: { x: 3 },
                            transition: {
                              repeat: 1 / 0,
                              repeatType: "reverse",
                              duration: 0.6,
                            },
                            children: e.jsx(z, { size: 18 }),
                          }),
                        ],
                      }),
                      e.jsxs(t.button, {
                        onClick: () => {
                          const e =
                            "https://drive.google.com/file/d/16ZOynmeuNQoGtg5zegTn9qvJFrwsQNSK/view".replace(
                              "/edit?usp=sharing",
                              "/export?format=pdf",
                            );
                          window.open(e, "_blank");
                        },
                        whileHover: {
                          scale: 1.03,
                          backgroundColor: "#000000",
                          color: "#ffffff",
                        },
                        whileTap: { scale: 0.98 },
                        transition: { duration: 0.3 },
                        className:
                          "px-8 py-4 border-2 border-black text-black rounded-full font-medium flex items-center justify-center gap-2 hover:gap-3 transition-all",
                        children: ["Download Resume", e.jsx(R, { size: 18 })],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(t.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.4,
                },
                className:
                  "relative aspect-square rounded-3xl overflow-hidden shadow-lg",
                children: [
                  e.jsx("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent z-10",
                  }),
                  e.jsx(t.div, {
                    initial: { scale: 1.2 },
                    animate: { scale: 1 },
                    transition: { duration: 1.5, ease: "easeOut" },
                    className: "w-full h-full",
                    children: e.jsx("img", {
                      src: "https://i.postimg.cc/T1D06s40/hero1.jpg",
                      alt: "Matt",
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  e.jsx("div", {
                    className:
                      "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20",
                    children: e.jsxs(t.div, {
                      initial: { y: 30, opacity: 0 },
                      animate: { y: 0, opacity: 1 },
                      transition: { delay: 0.7, duration: 0.5 },
                      children: [
                        e.jsx("span", {
                          className:
                            "text-white/90 text-sm uppercase tracking-wider font-medium",
                          children: "Available for work",
                        }),
                        e.jsx("h3", {
                          className: "text-white text-xl font-semibold",
                          children: "Let's collaborate on your next project",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "mt-24 md:mt-32 overflow-hidden border-t border-b border-gray-200 py-6 relative z-10",
          children: e.jsx("div", {
            className: "overflow-hidden relative w-full",
            children: e.jsx(t.div, {
              className: "flex gap-8 whitespace-nowrap",
              animate: { x: [0, "-50%"] },
              transition: {
                x: {
                  duration: 20,
                  repeat: 1 / 0,
                  ease: "linear",
                  repeatType: "loop",
                },
              },
              children: [
                "JavaScript",
                "React",
                "Node.js",
                "AI Engineering",
                "UI/UX Design",
                "TypeScript",
                "Next.js",
                "Product Design",
                "HTML",
                "CSS",
                "Bootstrap",
                "MUI",
                "Angular.js",
                "Express.js",
                "PHP/Laravel",
                "Python/Django",
                "Postman",
                "Solidity",
                "Rust",
                "Web3.js/Ether.js",
                "Wagmi",
                "Hardhat",
                "Truffle",
                "Dapps",
                "Defi/Dex",
                "Crypto wallet",
                "My SQL",
                "MongoDB",
                "Fiebase",
                "React Native",
                "Flutter",
                "Dart",
                "Figma",
                "Hostinger",
                "Webflow",
                "Three.js",
                "FastAPI",
                "GraphQL",
                "Prisma",
                "Langchain",
                "AI chat bot",
                "Trading bot",
                "Docker",
                "Nginx",
                "WebSocket.io",
              ].map((t, n) =>
                e.jsxs(
                  "span",
                  {
                    className: "text-lg font-medium whitespace-nowrap",
                    children: [
                      t,
                      " ",
                      e.jsx("span", {
                        className: "text-gray-300 mx-2",
                        children: "•",
                      }),
                    ],
                  },
                  n,
                ),
              ),
            }),
          }),
        }),
      ],
    });
  }
  const ee = ({
    children: n,
    className: r = "",
    containerClassName: a = "",
    gridSize: l = 40,
    blur: o = 10,
    speed: s = 1,
    animate: u = !0,
    hue: c = 0,
  }) => {
    const d = i.useRef(null),
      f = () => {
        const e = Math.floor(document.body.clientWidth / l),
          t = Math.floor(document.body.clientHeight / l);
        return Array.from({ length: e * t }).map((t, n) => ({
          id: n,
          column: n % e,
          row: Math.floor(n / e),
          opacity: 0.5 * Math.random(),
          delay: Math.random() * s,
        }));
      },
      p = i.useRef(f());
    return (
      i.useEffect(() => {
        const e = () => {
          p.current = f();
        };
        return (
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, [l]),
      e.jsxs("div", {
        className: `relative overflow-hidden ${a}`,
        ref: d,
        children: [
          u &&
            e.jsx("div", {
              className: "absolute inset-0 filter blur-[10px] opacity-10",
              style: { filter: `blur(${o}px)` },
              children: p.current.map(
                ({ id: n, column: r, row: a, opacity: i, delay: o }) =>
                  e.jsx(
                    t.div,
                    {
                      className: "absolute bg-black",
                      style: {
                        width: l,
                        height: l,
                        left: r * l,
                        top: a * l,
                        opacity: 0,
                      },
                      animate: { opacity: [0, i, 0] },
                      transition: {
                        duration: 10 * Math.random() + 5 * s,
                        delay: o,
                        repeat: 1 / 0,
                        repeatType: "reverse",
                      },
                    },
                    n,
                  ),
              ),
            }),
          e.jsx("div", { className: r, children: n }),
        ],
      })
    );
  };
  function te() {
    const n = {
      hidden: { opacity: 0, y: 20 },
      visible: (e) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 * e, duration: 0.5 },
      }),
    };
    return e.jsxs("section", {
      id: "about",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        e.jsx(ee, {
          gridSize: 60,
          blur: 30,
          speed: 0.5,
          containerClassName: "absolute inset-0 z-0",
        }),
        e.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            e.jsxs("div", {
              className: "mb-16 md:mb-24",
              children: [
                e.jsx(t.span, {
                  className: "block mb-3 text-sm font-medium tracking-wider",
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.4 },
                  children: "ABOUT ME",
                }),
                e.jsx(Z, {
                  text: "My background",
                  className: "text-3xl md:text-5xl font-bold",
                  once: !0,
                  delay: 0.1,
                }),
              ],
            }),
            e.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16",
              children: [
                e.jsx("div", {
                  className: "pr-0 md:pr-6",
                  children: e.jsxs(t.div, {
                    className: "space-y-6",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5 },
                    children: [
                      e.jsx("p", {
                        className: "text-xl leading-relaxed",
                        children:
                          "I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences and solutions.",
                      }),
                      e.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "With a strong background in both development and design, I bring a unique perspective to every project I work on. I believe in creating solutions that not only look great but also solve real problems for users.",
                      }),
                      e.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "My journey in tech started with UI design, which naturally evolved into frontend & backend development, endpoint development/integration such as blockchain, AI and eventually full-stack skills. Today, I specialize in building modern  applications/API with a focus on performance, accessibility, and user experience.",
                      }),
                      e.jsx("div", {
                        className: "pt-6",
                        children: e.jsxs(t.a, {
                          href: "#projects",
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.98 },
                          className:
                            "text-black font-medium flex items-center gap-2 group relative overflow-hidden",
                          children: [
                            e.jsx(t.span, {
                              className:
                                "inline-block w-8 h-[2px] bg-black group-hover:w-12 transition-all duration-300 relative z-10",
                            }),
                            e.jsx("span", {
                              className: "relative z-10",
                              children: "See my work",
                            }),
                            e.jsx(t.span, {
                              className:
                                "absolute bottom-0 left-0 h-[2px] bg-black",
                              initial: { width: 0 },
                              whileHover: { width: "100%" },
                              transition: { duration: 0.3, delay: 0.1 },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  children: e.jsxs(t.div, {
                    className:
                      "bg-white rounded-3xl p-8 md:p-10 shadow-sm backdrop-blur-sm relative z-10",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: 0.2 },
                    children: [
                      e.jsx("h3", {
                        className: "text-xl font-semibold mb-8",
                        children: "Skills & Expertise",
                      }),
                      e.jsx("div", {
                        className: "space-y-8",
                        children: [
                          {
                            category: "Web",
                            items: [
                              "HTML",
                              "CSS",
                              "JavaScript",
                              "React",
                              "Node.js",
                              "TypeScript",
                              "Next.js",
                              "Django",
                              "Laravel",
                              "Angular.js",
                              "Three.js",
                              "Websocket.io",
                            ],
                          },
                          {
                            category: "Mobile",
                            items: ["React Native", "Flutter"],
                          },
                          {
                            category: "Blockchain",
                            items: [
                              "Solidity",
                              "Rust",
                              "Web3.js/Ether.js",
                              "Wagmi",
                              "Rainbow",
                            ],
                          },
                          {
                            category: "Design",
                            items: [
                              "UI/UX",
                              "Figma",
                              "Adobe Suite",
                              "Prototyping",
                            ],
                          },
                          {
                            category: "Tools",
                            items: ["Git", "AWS", "Firebase", "Docker", "Vercel"],
                          },
                        ].map((r, a) =>
                          e.jsxs(
                            "div",
                            {
                              children: [
                                e.jsx("h4", {
                                  className:
                                    "text-sm uppercase tracking-wider text-gray-500 mb-3",
                                  children: r.category,
                                }),
                                e.jsx("div", {
                                  className: "flex flex-wrap gap-3",
                                  children: r.items.map((r, a) =>
                                    e.jsx(
                                      t.span,
                                      {
                                        custom: a,
                                        variants: n,
                                        initial: "hidden",
                                        whileInView: "visible",
                                        viewport: { once: !0 },
                                        className:
                                          "px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm hover:bg-black hover:text-white hover:border-black transition-colors duration-300 cursor-default",
                                        children: r,
                                      },
                                      a,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            a,
                          ),
                        ),
                      }),
                      e.jsx(t.div, {
                        className:
                          "absolute -top-4 -right-4 w-20 h-20 bg-yellow-300 rounded-full mix-blend-multiply blur-xl",
                        animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] },
                        transition: {
                          duration: 4,
                          repeat: 1 / 0,
                          repeatType: "reverse",
                        },
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const ne = ({ projects: r }) => {
      const [a, l] = i.useState(0),
        [o, s] = i.useState(null),
        [u, c] = i.useState("all"),
        [d, f] = i.useState(null),
        [p, m] = i.useState(!1),
        [h, g] = i.useState(6),
        [y, v] = i.useState(0),
        b = i.useRef(null),
        x = ["all", "web", "mobile","blockchain", "ai", "figma design"],
        w = r.filter((e) => "all" === u || e.category.toLowerCase() === u);
      i.useEffect(() => {
        const e = () => {
          window.scrollY > 500 ? m(!0) : m(!1);
        };
        return (
          window.addEventListener("scroll", e),
          () => window.removeEventListener("scroll", e)
        );
      }, []),
        i.useEffect(() => {
          g(6);
        }, [u]);
      const k = w.slice(0, h);
      return e.jsxs("div", {
        className: "w-full py-8",
        ref: b,
        children: [
          e.jsx("div", {
            className: "max-w-7xl mx-auto px-4 mb-10",
            children: e.jsxs("div", {
              className:
                "flex flex-col md:flex-row gap-4 justify-between items-start",
              children: [
                e.jsx("h2", { className: "text-3xl font-bold text-left" }),
                e.jsx("div", {
                  className:
                    "bg-white/80 backdrop-blur-sm rounded-full p-1 flex items-center shadow-md overflow-x-auto max-w-full scrollbar-hide",
                  children: e.jsx("div", {
                    className: "flex px-2 py-1 min-w-max",
                    children: x.map((n) =>
                      e.jsxs(
                        t.button,
                        {
                          onClick: () => c(n),
                          className:
                            "relative whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all " +
                            (u === n
                              ? "text-white"
                              : "text-gray-700 hover:text-gray-900"),
                          whileHover: { scale: 1.03 },
                          whileTap: { scale: 0.98 },
                          children: [
                            u === n &&
                              e.jsx(t.span, {
                                className:
                                  "absolute inset-0 rounded-full bg-black",
                                layoutId: "activeCategoryBg",
                                transition: {
                                  type: "spring",
                                  bounce: 0.2,
                                  duration: 0.6,
                                },
                              }),
                            e.jsx("span", {
                              className: "relative z-10 capitalize",
                              children: n,
                            }),
                          ],
                        },
                        n,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
          e.jsxs("div", {
            className: "px-4 max-w-7xl mx-auto",
            children: [
              w.length > 0
                ? e.jsx(n, {
                    mode: "wait",
                    children: e.jsx(
                      t.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: {
                          duration: 0.4,
                          staggerChildren: 0.1,
                          when: "beforeChildren",
                        },
                        className:
                          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",
                        children: k.map((t, n) =>
                          e.jsx(
                            re,
                            {
                              project: t,
                              index: n,
                              setSelectedProject: f,
                              hoverIndex: o,
                              setHoverIndex: s,
                            },
                            t.id || t.title,
                          ),
                        ),
                      },
                      u,
                    ),
                  })
                : e.jsxs(t.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "text-center py-20",
                    children: [
                      e.jsx("h3", {
                        className: "text-2xl font-bold text-gray-700",
                        children: "No projects found",
                      }),
                      e.jsx("p", {
                        className: "text-gray-500 mt-2",
                        children: "Try adjusting your filter criteria",
                      }),
                      e.jsx("button", {
                        onClick: () => {
                          c("all");
                        },
                        className:
                          "mt-4 bg-black text-white px-5 py-2 rounded-full text-sm font-medium",
                        children: "Reset filters",
                      }),
                    ],
                  }),
              w.length > h &&
                e.jsx(t.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  className: "flex justify-center mt-12",
                  children: e.jsxs("button", {
                    onClick: () => {
                      g((e) => e + 6);
                    },
                    className:
                      "bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 shadow-sm transition-all duration-300 hover:shadow",
                    children: [
                      "Load more projects",
                      // e.jsx(ChevronDown, { size: 18 }),
                    ],
                  }),
                }),
            ],
          }),
          p &&
            e.jsx(t.button, {
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.8 },
              className:
                "fixed bottom-8 right-8 bg-black text-white p-3 rounded-full shadow-lg z-40",
              onClick: () => {
                window.scrollTo({
                  top: b.current.offsetTop - 100,
                  behavior: "smooth",
                });
              },
              "aria-label": "Scroll to top",
              children: e.jsx(_, { size: 20 }),
            }),
          d && e.jsx(ae, { project: d, onClose: () => f(null) }),
        ],
      });
    },
    re = ({
      project: n,
      index: a,
      setSelectedProject: l,
      hoverIndex: o,
      setHoverIndex: s,
    }) => {
      const u = i.useRef(null),
        c = r(u, { once: !0, margin: "-100px" });
      return e.jsxs(
        t.div,
        {
          ref: u,
          layout: !0,
          className:
            "group relative flex flex-col bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer",
          initial: { opacity: 0, y: 30 },
          animate: c
            ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 * a } }
            : {},
          whileHover: { y: -5 },
          onMouseEnter: () => s(a),
          onMouseLeave: () => s(null),
          onClick: () => l(n),
          children: [
            e.jsxs("div", {
              className: "relative aspect-video w-full overflow-hidden",
              children: [
                e.jsx("img", {
                  src: n.image,
                  alt: n.title,
                  className:
                    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                  loading: "lazy",
                }),
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity",
                }),
                e.jsx(t.div, {
                  className:
                    "absolute inset-0 flex flex-col justify-end p-5 text-white",
                  initial: { opacity: 0 },
                  animate: { opacity: o === a ? 1 : 0 },
                  transition: { duration: 0.3 },
                  children: e.jsxs("div", {
                    className:
                      "backdrop-blur-sm bg-black/30 rounded-lg p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300",
                    children: [
                      e.jsx("h3", {
                        className: "text-lg font-bold mb-2",
                        children: n.title,
                      }),
                      e.jsx("p", {
                        className: "text-sm text-white/90 line-clamp-2 mb-3",
                        children: n.description,
                      }),
                      e.jsxs(t.div, {
                        className: "flex gap-2",
                        initial: { opacity: 0, y: 10 },
                        animate: {
                          opacity: o === a ? 1 : 0,
                          y: o === a ? 0 : 10,
                        },
                        transition: { duration: 0.3, delay: 0.1 },
                        children: [
                          e.jsxs("a", {
                            href: n.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "bg-white text-black text-xs font-medium px-3 py-2 rounded-md flex items-center gap-1.5 hover:bg-gray-100 transition-colors",
                            onClick: (e) => e.stopPropagation(),
                            children: [e.jsx($, { size: 14 }), " Visit"],
                          }),
                          n.github &&
                            e.jsxs("a", {
                              href: n.github,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-md flex items-center gap-1.5 hover:bg-white/30 transition-colors",
                              onClick: (e) => e.stopPropagation(),
                              children: [e.jsx(D, { size: 14 }), " Code"],
                            }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsx("div", {
                  className: "absolute top-4 left-4 z-10",
                  children: e.jsx("span", {
                    className:
                      "text-xs font-medium px-2 py-1 rounded-full bg-white/90 text-black shadow-sm",
                    children: n.category,
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "p-5 flex-grow flex flex-col",
              children: [
                e.jsxs("div", {
                  className: "mb-auto",
                  children: [
                    e.jsx("h3", {
                      className:
                        "text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors",
                      children: n.title,
                    }),
                    e.jsx("p", {
                      className: "text-sm text-gray-600 line-clamp-2 mb-4",
                      children: n.description,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-3",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-1.5 mb-2 text-gray-700",
                      children: [
                        e.jsx(q, { size: 16, className: "opacity-70" }),
                        e.jsx("span", {
                          className: "text-xs font-semibold",
                          children: "Tech Stack",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex flex-wrap gap-2",
                      children: [
                        n.tags
                          .slice(0, 4)
                          .map((t, n) =>
                            e.jsxs(
                              "span",
                              {
                                className:
                                  "bg-gray-100 px-2.5 py-1 rounded-full text-xs text-gray-700 flex items-center gap-1",
                                children: [
                                  e.jsx(X, { size: 10, strokeWidth: 3 }),
                                  t,
                                ],
                              },
                              n,
                            ),
                          ),
                        n.tags.length > 4 &&
                          e.jsxs("span", {
                            className:
                              "bg-gray-100 px-2.5 py-1 rounded-full text-xs text-gray-700",
                            children: ["+", n.tags.length - 4],
                          }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mt-5 pt-4 border-t border-gray-100 flex justify-between items-center",
                  children: [
                    e.jsxs("a", {
                      href: n.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-sm font-medium text-blue-600 flex items-center gap-1 hover:underline",
                      onClick: (e) => e.stopPropagation(),
                      children: ["View Project ", e.jsx(P, { size: 14 })],
                    }),
                    n.featured &&
                      e.jsx("span", {
                        className:
                          "text-xs bg-amber-100 text-amber-700 rounded-full px-2.5 py-0.5 font-medium",
                        children: "Featured",
                      }),
                  ],
                }),
              ],
            }),
          ],
        },
        n.id || n.title,
      );
    },
    ae = ({ project: r, onClose: a }) => {
      var l;
      const [o, s] = i.useState(0),
        u = r.gallery || [r.image];
      return e.jsx(n, {
        children: e.jsx(t.div, {
          className:
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: a,
          children: e.jsx(t.div, {
            className:
              "relative bg-white dark:bg-zinc-900 w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl",
            initial: { scale: 0.9, y: 20 },
            animate: { scale: 1, y: 0 },
            exit: { scale: 0.9, y: 20 },
            transition: { type: "spring", damping: 25 },
            onClick: (e) => e.stopPropagation(),
            children: e.jsxs("div", {
              className:
                "overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700",
              children: [
                e.jsxs("div", {
                  className: "relative h-64 md:h-80 overflow-hidden",
                  children: [
                    u.length > 1 &&
                      e.jsxs(e.Fragment, {
                        children: [
                          e.jsx("button", {
                            onClick: () => {
                              s((e) => (e - 1 + u.length) % u.length);
                            },
                            className:
                              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors",
                            "aria-label": "Previous image",
                            children: e.jsx(ChevronLeft, {
                              size: 20,
                              className: "text-white",
                            }),
                          }),
                          e.jsx("button", {
                            onClick: () => {
                              s((e) => (e + 1) % u.length);
                            },
                            className:
                              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors",
                            "aria-label": "Next image",
                            children: e.jsx(M, {
                              size: 20,
                              className: "text-white",
                            }),
                          }),
                        ],
                      }),
                    e.jsx(n, {
                      mode: "wait",
                      children: e.jsx(
                        t.img,
                        {
                          src: u[o],
                          alt: `${r.title} - Image ${o + 1}`,
                          className: "w-full h-full object-cover",
                          initial: { opacity: 0 },
                          animate: { opacity: 1 },
                          exit: { opacity: 0 },
                          transition: { duration: 0.3 },
                          loading: "lazy",
                        },
                        o,
                      ),
                    }),
                    e.jsx("div", {
                      className:
                        "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/60",
                    }),
                    u.length > 1 &&
                      e.jsx("div", {
                        className:
                          "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
                        children: u.map((t, n) =>
                          e.jsx(
                            "button",
                            {
                              onClick: () => s(n),
                              className:
                                "w-2 h-2 rounded-full " +
                                (n === o ? "bg-white" : "bg-white/40"),
                              "aria-label": `Go to image ${n + 1}`,
                            },
                            n,
                          ),
                        ),
                      }),
                    e.jsx("button", {
                      onClick: a,
                      className:
                        "absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors",
                      "aria-label": "Close modal",
                      children: e.jsx(G, { size: 18, className: "text-white" }),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "p-6 md:p-8",
                  children: [
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
                      children: [
                        e.jsx("h2", {
                          className:
                            "text-3xl font-bold text-zinc-900 dark:text-white",
                          children: r.title,
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            e.jsxs("a", {
                              href: r.link,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center gap-1.5 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors",
                              children: [e.jsx($, { size: 16 }), " Visit Site"],
                            }),
                            r.github &&
                              e.jsxs("a", {
                                href: r.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center gap-1.5 bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors",
                                children: [e.jsx(D, { size: 16 }), " View Code"],
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className:
                        "prose prose-zinc dark:prose-invert max-w-none mb-8",
                      children: r.fullDescription
                        ? e.jsx("div", {
                            dangerouslySetInnerHTML: {
                              __html: r.fullDescription,
                            },
                          })
                        : e.jsx("p", { children: r.description }),
                    }),
                    e.jsxs("div", {
                      className: "mb-8",
                      children: [
                        e.jsx("h3", {
                          className:
                            "text-xl font-bold mb-4 text-zinc-900 dark:text-white",
                          children: "Tech Stack",
                        }),
                        e.jsx("div", {
                          className: "flex flex-wrap gap-2",
                          children:
                            null == (l = r.tags)
                              ? void 0
                              : l.map((t) =>
                                  e.jsx(
                                    "span",
                                    {
                                      className:
                                        "px-3 py-1.5 text-sm font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200",
                                      children: t,
                                    },
                                    t,
                                  ),
                                ),
                        }),
                      ],
                    }),
                    r.features &&
                      r.features.length > 0 &&
                      e.jsxs("div", {
                        className: "mb-8",
                        children: [
                          e.jsx("h3", {
                            className:
                              "text-xl font-bold mb-4 text-zinc-900 dark:text-white",
                            children: "Key Features",
                          }),
                          e.jsx("ul", {
                            className:
                              "list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300",
                            children: r.features.map((t, n) =>
                              e.jsx("li", { children: t }, n),
                            ),
                          }),
                        ],
                      }),
                    r.completedDate &&
                      e.jsxs("div", {
                        className: "text-sm text-zinc-500 dark:text-zinc-400",
                        children: ["Completed: ", r.completedDate],
                      }),
                  ],
                }),
              ],
            }),
          }),
        }),
      });
    };
  function le() {
    return e.jsx("section", {
      id: "projects",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: e.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
        children: [
          e.jsxs("div", {
            className: "mb-16 md:mb-12 text-left",
            children: [
              e.jsx(t.span, {
                className: "block mb-3 text-sm font-medium tracking-wider",
                initial: { opacity: 0, y: 10 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.4 },
                children: "PROJECTS",
              }),
              e.jsx(Z, {
                text: "Selected work",
                className: "text-3xl md:text-5xl font-bold",
                once: !0,
                delay: 0.1,
              }),
            ],
          }),
          e.jsx(ne, {
            projects: [
              {
                title: "Forking Pump.fun (Solana, EVM)",
                description: "Another pumpfun(https://pump.fun) built by me. Built frontend/backend for spl token create, market create. Built smart contract for bonding curve, make pool on raydium.",
                image:
                  "https://i.postimg.cc/j55WrrB0/pumpfun.png",
                github: "https://github.com/mattdev071/my-pumpfun-frontend",
                link: "https://app.ape.lol/",
                category: "blockchain",
                tags: ["React.js", "TailwindCSS", "Anchor", "Rust", "Web3.js", "Solidity"],
                featured: !0,
              },
              {
                title: "Next Ventures",
                description: "Developed a platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance.",
                image:
                  "https://i.postimg.cc/YSdxBycm/next-venture.png",
                link: "https://ab-next-venture.vercel.app/",
                github: "https://github.com/mattdev071/Next-Venture-App",
                category: "web",
                tags: ["Next.js", "React", "Node.js", "MongoDB", "Sanity cms", "Auth.js", "TailwindCSS", "markdown", "GROQ", "Sentry"],
                featured: !0,
              },
              {
                title: "Minerva wallet",
                description: "Joined and contributed to wallet development.",
                image:
                  "https://i.postimg.cc/9XKC69ZJ/wallet.png",
                link: "https://minerva.digital/",
                category: "mobile",
                tags: ["Javascript", "Flutter", "Bootstrap", "Google Analytics", "SEO", "Nginx", "Ethereum"],
                featured: !0,
              },
              {
                title: "Goalpost",
                description: "Led the development process of a poker platform & fixed issues in the codebase.",
                image:
                  "https://i.postimg.cc/853gV8Jj/pocker.jpg",
                link: "https://goalpost.gg/",
                category: "blockchain",
                tags: ["Typescript", "React", "Socket.io", "Node", "Web3", "Solana"],
                featured: !0,
              },
              {
                title: "BMI-Calculator",
                description: "A web application to calculate BMI. It uses the BMI formula to calculate the BMI.",
                image:
                  "https://i.postimg.cc/fThZ98Fd/calculator-bmi.png",
                github: "https://github.com/mattdev071/calculator-bmi",
                link: "",
                category: "mobile",
                tags: ["Flutter", "Dart", "Firebase"],
                featured: !0,
              },
              {
                title: "StarForge",
                description: "An AI SaaS landing page showcasing modern UI/UX excellence. With sleek design and smooth animations, it delivers an engaging user experience and serves as an inspiring reference for developers and designers.",
                image:
                  "https://i.postimg.cc/Bb6kG1wJ/starforge.png",
                link: "https://ai-saas-landing-starter.vercel.app/",
                github: "https://github.com/mattdev071/saas-ai-landing-starter",
                category: "web",
                tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "react-just-parallax", "vercel"],
                featured: !0,
              },
              {
                title: "Vacasa",
                description: "Created a user-friendly platform for searching vacations.",
                image:
                  "https://i.postimg.cc/zXTvp76n/vacation.png",
                link: "https://www.vacasa.com/",
                category: "web",
                tags: ["Python", "React", "HTML5", "Django", "Sass"],
                featured: !0,
              },
              {
                title: "Discord Token Swap Bot Using Jito",
                description: "A professional-grade Discord bot for Solana token swaps, leveraging Jito Bundles. This bot seamlessly integrates with platforms like Raydium, Pump.fun, and Meteora, while utilizing the Dextools API and Jupiter v6 Swap API for efficient and reliable token swap operations.",
                image:
                  "https://i.postimg.cc/j5fr6DGS/discord-bot.webp",
                github: "https://github.com/mattdev071/swapbot-sol-discord",
                link: "https://github.com/mattdev071/swapbot-sol-discord",
                category: "blockchain",
                tags: ["Node.js", "TypeScript", "Discord.js", "Solana/Web3", "DexTool API", "Jupiter V6 Swap API", "Jito Bundle"],
                featured: !0,
              },
              {
                title: "FLux Lura",
                description: "a free online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with ease and elevate your content instantly!",
                image:
                  "https://i.postimg.cc/KY8HTTxB/flux-lura.png",
                link: "https://synergyinstitutes.com",
                github: "https://github.com/mattdev071/Lura-Flux",
                category: "web",
                tags: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion", "Shadcn", "FFmpeg"],
                featured: !1,
              },
              
              {
                title: "PVR-APP",
                description: "A mobile application to book movie tickets. It has stripe payment gateway for online transactions. It also has a QR code scanner to scan the ticket.",
                image:
                  "https://i.postimg.cc/TPvrMMHw/pvr.png",
                github: "https://github.com/mattdev071/PVRApp-ReactNative",
                link: "",
                category: "mobile",
                tags: ["React-Native", "Express", "Firebase", "Stripe"],
                featured: !0,
              },
              {
                title: "Gahigi - AI Career Coach",
                description: "Meet Gahigi, your personal AI career coach. Designed to help young professionals in Rwanda, Gahigi offers personalized guidance and practical tools to kick-start your career. Whether you're preparing for interviews, building essential skills, or exploring the job market, Gahigi is your virtual mentor. Powered by AI, Gahigi provides tailored career advice, skill-building exercises, and interview simulations to boost your confidence and employability.",
                image:
                  "https://i.postimg.cc/0Nrd0d3G/gahigi.png",
                github: "https://github.com/mattdev071/gahig-mono",
                link: "https://github.com/mattdev071/gahig-mono",
                category: "ai",
                tags: ["Next.js", "NestJS", "MUI", "LLaMA", "Mixtral AI", "Prompt Engineering", "GROQ API"],
                featured: !0,
              },
              {
                title: "WhatsApp AI Chatbot Flow Builder",
                description: "The WhatsApp AI Chatbot Flow Builder lets businesses automate chat flows using a drag-and-drop UI. It supports editable questions, dynamic responses, and Twilio integration. Clean UI, easy setup, and smooth automation.",
                image:
                  "https://i.postimg.cc/TPXWNztc/whatsappai.png",
                github: "https://github.com/mattdev071/whatsapp-chatbot-ai",
                link: "https://github.com/mattdev071/whatsapp-chatbot-ai",
                category: "AI",
                tags: ["Javascript", "React.js", "React Flow", "Node.js", "Express.js", "MongoDB", "Twillo API", "Open API", "Ngrok", "WhatsApp Business API"],
                featured: !0,
              },
              {
                title: "MOVIE RECOMMENDATION SYSTEM",
                description: "A content-based movie recommendation system using movie names, actors, and genres, leveraging Kaggle datasets and the TMDB API for up-to-date movie data.",
                image:
                  "https://i.postimg.cc/Hn5SrdGR/movieflex.png",
                github: "https://github.com/mattdev071/movie-flex",
                link: "https://drive.google.com/file/d/1S1ib67oxXUzjfSjvPDZrygFUfGZGsQB5/view?usp=sharing",
                category: "web",
                tags: ["Python", "Flask", "Skicit-learn", "Pandas", "Jinja"],
                featured: !0,
              },
              
              {
                title: "Guardian Angel",
                description: "An innovative Android application designed to enhance the well-being and safety of users by monitoring and providing personalized suggestions for various aspects of their daily lives.",
                image:
                  "https://i.postimg.cc/mkkvqrr0/guadian.jpg",
                github: "https://github.com/mattdev071/guardian-kotlin",
                link: "https://github.com/mattdev071/guardian-kotlin",
                category: "mobile",
                tags: ["Kotlin", "roomsdb", "python", "MongoDB", "Heroku"],
                featured: !0,
              },
              
              {
                title: "Omni DeFi",
                description: "OmniDefi is a cutting-edge decentralized finance platform where users can provide liquidity, participate in pools, swap tokens via AMM, stake assets to earn rewards, lend money, and access detailed analytics, all in one seamless experience. Explore the future of DeFi with AstraDeFi.",
                image:
                  "https://i.postimg.cc/BvXvbCZR/astra.png",
                github: "https://github.com/mattdev071/AstraDefi-frontend",
                link: "https://astradefi.netlify.app/",
                category: "blockchain",
                tags: ["Next.js", "Postgresql", "AMM", "Rust", "Web3.js", "Solidity","Graphql", "TailwindCSS"],
                featured: !0,
              },
              {
                title: "My Sample Design",
                description: "",
                image:
                  "https://i.postimg.cc/PrVn6vkM/desiner.jpg",
                link: "https://www.figma.com/design/w8X89uQEu2ZWgruEKxRFqe/My-Previous-Working?node-id=0-1&p=f&t=1GRUHEK51WPWXliz-0",
                category: "figma design",
                tags: ["figma"],
                featured: !0,
              },
            ],
          }),
          // e.jsx(t.div, {
          //   className: "mt-8 text-center",
          //   initial: { opacity: 0, y: 20 },
          //   whileInView: { opacity: 1, y: 0 },
          //   viewport: { once: !0 },
          //   transition: { duration: 0.5, delay: 0.3 },
          //   children: e.jsx(t.a, {
          //     href: "/projects",
          //     whileHover: {
          //       scale: 1.05,
          //       backgroundColor: "#000000",
          //       color: "#ffffff",
          //     },
          //     whileTap: { scale: 0.95 },
          //     transition: { duration: 0.3 },
          //     className:
          //       "inline-block px-8 py-3 border-2 border-black text-black font-medium rounded-full transition-colors",
          //     children: "View all projects",
          //   }),
          // }),
        ],
      }),
    });
  }
  const ie = "https://portfolio-d10i.onrender.com";
  function oe() {
    const [r, a] = i.useState({ name: "", email: "", message: "" }),
      [l, s] = i.useState(!1),
      [u, c] = i.useState(!1),
      [d, f] = i.useState(!1),
      [p, m] = i.useState(null),
      [h, g] = i.useState("unknown"),
      [y, v] = i.useState(0),
      b = i.useCallback(
        async (e = 2) => {
          if ("online" === h && Date.now() - y < 6e4) return;
          g("unknown"), v(Date.now());
          const t = new AbortController(),
            n = setTimeout(() => t.abort(), 8e3);
          try {
            const e = await fetch(`${ie}/health`, {
              method: "GET",
              cache: "no-store",
              signal: t.signal,
            });
            clearTimeout(n), e.ok ? g("online") : g("offline");
          } catch (r) {
            e > 0
              ? setTimeout(() => {
                  b(e - 1);
                }, 3e3)
              : g("offline");
          }
        },
        [h, y],
      );
    i.useEffect(() => {
      b();
    }, [b]);
    const x = (e) => {
        a({ ...r, [e.target.name]: e.target.value });
      },
      w = (e) => {
        m(e);
      },
      k = () => {
        m(null);
      },
      S = (t) => {
        s(!1),
          f(!0),
          o.custom(() =>
            e.jsxs("div", {
              className:
                "flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 rounded-lg",
              children: [
                e.jsx(O, { className: "text-red-500", size: 18 }),
                e.jsx("p", { children: t }),
              ],
            }),
          );
      },
      N = (e) =>
        `\n    w-full px-4 py-3 border rounded-lg transition-all\n    ${p === e ? "border-black ring-1 ring-black" : "border-gray-200"} \n    focus:ring-black focus:border-black\n  `;
    return e.jsxs("section", {
      id: "contact",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        e.jsx(K, {
          quantity: 30,
          staticity: 30,
          ease: 40,
          color: "#000000",
          className: "opacity-40 z-0",
        }),
        e.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: e.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center",
            children: [
              e.jsxs(t.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6 },
                children: [
                  e.jsx(t.span, {
                    className: "block mb-3 text-sm font-medium tracking-wider",
                    initial: { opacity: 0, y: 10 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.4 },
                    children: "GET IN TOUCH",
                  }),
                  e.jsx(Z, {
                    text: "Let's work together",
                    className: "text-3xl md:text-5xl font-bold mb-6",
                    once: !0,
                    delay: 0.1,
                  }),
                  e.jsx(t.p, {
                    className: "text-gray-600 mb-8 md:text-lg md:pr-8",
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6, delay: 0.2 },
                    children:
                      "I'm currently available for freelance work and collaborations. If you have a project you'd like to discuss, please get in touch!",
                  }),
                  e.jsxs("div", {
                    className: "space-y-6",
                    children: [
                      e.jsxs(t.div, {
                        className: "flex items-start gap-4",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { duration: 0.6, delay: 0.3 },
                        children: [
                          e.jsx(t.div, {
                            className: "bg-white p-3 rounded-full shadow-sm",
                            whileHover: {
                              scale: 1.1,
                              backgroundColor: "#000",
                              color: "#fff",
                            },
                            transition: { duration: 0.2 },
                            children: e.jsx(V, { className: "w-5 h-5" }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "font-medium mb-1",
                                children: "Email",
                              }),
                              e.jsxs("a", {
                                href: "mailto:mattdev071@gmail.com",
                                className:
                                  "text-gray-600 hover:text-black transition-colors relative group",
                                children: [
                                  "mattdev071@gmail.com",
                                  e.jsx(t.span, {
                                    className:
                                      "absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300",
                                    whileHover: { width: "100%" },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs(t.div, {
                        className: "flex items-start gap-4",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { once: !0 },
                        transition: { duration: 0.6, delay: 0.4 },
                        children: [
                          e.jsx(t.div, {
                            className: "bg-white p-3 rounded-full shadow-sm",
                            whileHover: {
                              scale: 1.1,
                              backgroundColor: "#000",
                              color: "#fff",
                            },
                            transition: { duration: 0.2 },
                            children: e.jsx(W, { className: "w-5 h-5" }),
                          }),
                          e.jsxs("div", {
                            children: [
                              e.jsx("h3", {
                                className: "font-medium mb-1",
                                children: "Location",
                              }),
                              e.jsx("p", {
                                className: "text-gray-600",
                                children: "207 N Gilbert Rd, Gilbert, AZ 85234, United States",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(t.div, {
                    className:
                      "absolute -bottom-20 -left-20 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-20",
                    animate: { scale: [1, 1.2, 1] },
                    transition: {
                      duration: 8,
                      repeat: 1 / 0,
                      repeatType: "reverse",
                    },
                  }),
                ],
              }),
              e.jsxs(t.div, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                transition: { duration: 0.6, delay: 0.2 },
                className:
                  "bg-white rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden min-h-[450px]",
                children: [
                  e.jsx(n, {
                    mode: "wait",
                    children: u
                      ? e.jsxs(
                          t.div,
                          {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -20 },
                            transition: { duration: 0.5 },
                            className:
                              "absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8",
                            children: [
                              e.jsx(t.div, {
                                initial: { scale: 0 },
                                animate: { scale: [0, 1.2, 1] },
                                transition: {
                                  duration: 0.8,
                                  times: [0, 0.6, 1],
                                  ease: "easeInOut",
                                },
                                className:
                                  "flex items-center justify-center mb-8",
                                children: e.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    e.jsx(t.div, {
                                      className:
                                        "w-20 h-20 rounded-full bg-green-100 flex items-center justify-center",
                                      children: e.jsx(A, {
                                        className: "w-10 h-10 text-green-600",
                                      }),
                                    }),
                                    e.jsx(t.div, {
                                      initial: { scale: 0, opacity: 0 },
                                      animate: {
                                        scale: [0, 1.5, 1],
                                        opacity: [0, 0.8, 0],
                                      },
                                      transition: {
                                        duration: 1.5,
                                        delay: 0.2,
                                        repeat: 2,
                                        repeatDelay: 1,
                                      },
                                      className:
                                        "absolute inset-0 rounded-full border-4 border-green-400",
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs(t.div, {
                                className: "text-center w-full max-w-sm px-4",
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { duration: 0.3, delay: 0.5 },
                                children: [
                                  e.jsx("h3", {
                                    className: "text-2xl font-bold mb-3",
                                    children: "Message Sent!",
                                  }),
                                  e.jsx("p", {
                                    className: "text-gray-600 mb-8 text-base",
                                    children:
                                      "Thanks for reaching out. I'll get back to you soon.",
                                  }),
                                  e.jsx(t.button, {
                                    onClick: () => {
                                      a({ name: "", email: "", message: "" }),
                                        c(!1),
                                        f(!1);
                                    },
                                    whileHover: { scale: 1.05 },
                                    whileTap: { scale: 0.95 },
                                    className:
                                      "px-6 py-3 bg-black text-white rounded-lg font-medium",
                                    children: "Send another message",
                                  }),
                                ],
                              }),
                              e.jsx(n, {
                                children: [...Array(10)].map((n, r) =>
                                  e.jsx(
                                    t.div,
                                    {
                                      initial: {
                                        x: 0,
                                        y: 0,
                                        opacity: 0,
                                        scale: 0,
                                      },
                                      animate: {
                                        x: 200 * (Math.random() - 0.5),
                                        y: 200 * (Math.random() - 0.5),
                                        opacity: [0, 1, 0],
                                        scale: [0, 1, 0.5, 0],
                                      },
                                      transition: {
                                        duration: 1.5 + Math.random(),
                                        delay: 0.2 + 0.1 * r,
                                        ease: "easeOut",
                                      },
                                      className:
                                        "absolute top-1/2 left-1/2 w-3 h-3 rounded-full",
                                      style: {
                                        backgroundColor:
                                          r % 3 == 0
                                            ? "#10B981"
                                            : r % 2 == 0
                                              ? "#000000"
                                              : "#FBBF24",
                                        zIndex: 20,
                                      },
                                    },
                                    `particle-${r}`,
                                  ),
                                ),
                              }),
                            ],
                          },
                          "success",
                        )
                      : e.jsxs(
                          t.form,
                          {
                            onSubmit: async (t) => {
                              t.preventDefault(),
                                s(!0),
                                f(!1),
                                "offline" === h
                                  ? o.custom((t) =>
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-3 bg-yellow-50 border border-yellow-200 px-4 py-3 rounded-lg",
                                        children: [
                                          e.jsx(B, {
                                            className:
                                              "text-yellow-500 animate-spin",
                                            size: 18,
                                          }),
                                          e.jsx("p", {
                                            children:
                                              "Server might be warming up. Your message will still be sent. Please wait...",
                                          }),
                                        ],
                                      }),
                                    )
                                  : "unknown" === h &&
                                    o.custom((t) =>
                                      e.jsxs("div", {
                                        className:
                                          "flex items-center gap-3 bg-blue-50 border border-blue-200 px-4 py-3 rounded-lg",
                                        children: [
                                          e.jsx(B, {
                                            className:
                                              "text-blue-500 animate-spin",
                                            size: 18,
                                          }),
                                          e.jsx("p", {
                                            children:
                                              "Server status unknown. We'll try to send your message anyway...",
                                          }),
                                        ],
                                      }),
                                    );
                              try {
                                const t = new AbortController(),
                                  n = setTimeout(() => {
                                    t.abort(),
                                      S(
                                        "Request timed out. The server might be starting up. Please try again in a minute.",
                                      );
                                  }, 2e4),
                                  a = await fetch(`${ie}/send-email`, {
                                    method: "POST",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      email: r.email,
                                      message: r.message,
                                      name: r.name,
                                    }),
                                    signal: t.signal,
                                  });
                                clearTimeout(n);
                                const l = await a.json();
                                s(!1),
                                  a.ok && "Email sent successfully" === l.message
                                    ? (c(!0),
                                      g("online"),
                                      o.custom((t) =>
                                        e.jsxs("div", {
                                          className:
                                            "flex items-center gap-3 bg-green-50 border border-green-200 px-4 py-3 rounded-lg",
                                          children: [
                                            e.jsx(A, {
                                              className: "text-green-500",
                                              size: 18,
                                            }),
                                            e.jsx("p", {
                                              children:
                                                "Message sent successfully!",
                                            }),
                                          ],
                                        }),
                                      ))
                                    : S(
                                        "Server returned an error: " +
                                          (l.error || "Unknown error"),
                                      );
                              } catch (n) {
                                "AbortError" === n.name ||
                                  S("Failed to send message: " + n.message);
                              }
                            },
                            className: "space-y-6",
                            initial: { opacity: 1 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    htmlFor: "name",
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Name",
                                  }),
                                  e.jsx(t.div, {
                                    whileFocus: { scale: 1.01 },
                                    transition: { duration: 0.2 },
                                    children: e.jsx("input", {
                                      type: "text",
                                      id: "name",
                                      name: "name",
                                      value: r.name,
                                      onChange: x,
                                      onFocus: () => w("name"),
                                      onBlur: k,
                                      placeholder: "Your name",
                                      required: !0,
                                      className: N("name"),
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    htmlFor: "email",
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Email",
                                  }),
                                  e.jsx(t.div, {
                                    whileFocus: { scale: 1.01 },
                                    transition: { duration: 0.2 },
                                    children: e.jsx("input", {
                                      type: "email",
                                      id: "email",
                                      name: "email",
                                      value: r.email,
                                      onChange: x,
                                      onFocus: () => w("email"),
                                      onBlur: k,
                                      placeholder: "your@email.com",
                                      required: !0,
                                      className: N("email"),
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                children: [
                                  e.jsx("label", {
                                    htmlFor: "message",
                                    className:
                                      "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Message",
                                  }),
                                  e.jsx(t.div, {
                                    whileFocus: { scale: 1.01 },
                                    transition: { duration: 0.2 },
                                    children: e.jsx("textarea", {
                                      id: "message",
                                      name: "message",
                                      value: r.message,
                                      onChange: x,
                                      onFocus: () => w("message"),
                                      onBlur: k,
                                      placeholder:
                                        "Tell me about your project...",
                                      required: !0,
                                      rows: 5,
                                      className: `${N("message")} resize-none`,
                                    }),
                                  }),
                                ],
                              }),
                              "offline" === h &&
                                e.jsxs("div", {
                                  className:
                                    "text-sm text-yellow-600 flex items-center gap-2",
                                  children: [
                                    e.jsx(B, {
                                      className: "animate-spin",
                                      size: 14,
                                    }),
                                    e.jsx("span", {
                                      children:
                                        "Server is warming up. Submission may take a little longer.",
                                    }),
                                  ],
                                }),
                              e.jsx(t.button, {
                                type: "submit",
                                disabled: l,
                                whileHover: {
                                  scale: 1.02,
                                  backgroundColor: "#111",
                                },
                                whileTap: { scale: 0.98 },
                                className:
                                  "w-full py-4 px-6 bg-black text-white rounded-lg font-medium flex items-center justify-center gap-2 " +
                                  (l ? "opacity-70" : ""),
                                children: l
                                  ? e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(B, {
                                          size: 18,
                                          className: "animate-spin",
                                        }),
                                        e.jsx("span", { children: "Sending..." }),
                                      ],
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx("span", {
                                          children: "Send message",
                                        }),
                                        e.jsx(t.div, {
                                          animate: { x: [0, 5, 0] },
                                          transition: {
                                            duration: 1.5,
                                            repeat: 1 / 0,
                                            repeatType: "loop",
                                            ease: "easeInOut",
                                            repeatDelay: 1,
                                          },
                                          children: e.jsx(Y, { size: 18 }),
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          },
                          "form",
                        ),
                  }),
                  e.jsx("div", {
                    className:
                      "absolute -right-12 -bottom-12 w-24 h-24 grid grid-cols-3 gap-2 opacity-10",
                    children: [...Array(9)].map((n, r) =>
                      e.jsx(
                        t.div,
                        {
                          className: "w-2 h-2 rounded-full bg-black",
                          initial: { opacity: 0.3 },
                          animate: { opacity: [0.3, 0.8, 0.3] },
                          transition: {
                            duration: 3,
                            delay: 0.2 * r,
                            repeat: 1 / 0,
                            repeatType: "reverse",
                          },
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  const se = [
    {
      question: "How do I contact you for inquiries or collaborations?",
      answer:
        "You can directly drop me a message through the contact form on this website or simply email me at mattdev071@gmail.com. I typically respond within 24-48 hours.",
    },
    {
      question: "What services do you offer as a freelancer?",
      answer:
        "I specialize in web design, frontend and backend development, UI/UX design, mobile app development, Dapps, AI enhanced solutions and SEO optimization. My goal is to deliver tailored solutions that help you achieve your business objectives.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "The timeline depends on the project's complexity. A simple portfolio or landing page may take 3-5 days, while a more complex application could take 2-3 months. I'll provide a detailed timeline after discussing your requirements.",
    },
    {
      question: "What is your approach to freelancing projects?",
      answer:
        "I follow a structured process: understanding your needs, researching your industry, creating wireframes and prototypes, iterating based on feedback, and delivering a polished product. Collaboration and transparency are key throughout the journey.",
    },
    {
      question: "Do you provide post-project support?",
      answer:
        "Absolutely! I offer maintenance and support services to ensure your website or application stays updated, secure, and performs optimally. Let's discuss a plan that works for you.",
    },
  ];
  function ue() {
    const [r, a] = i.useState(null),
      [l, o] = i.useState(null);
    return e.jsxs("section", {
      id: "faq",
      className: "py-24 md:py-32 relative overflow-hidden",
      children: [
        e.jsx(t.div, {
          className:
            "absolute top-40 right-10 w-64 h-64 rounded-full bg-gray-100 opacity-60 mix-blend-multiply blur-3xl",
          animate: { x: [0, 30, 0], y: [0, -30, 0] },
          transition: { duration: 20, repeat: 1 / 0, repeatType: "reverse" },
        }),
        e.jsx(t.div, {
          className:
            "absolute bottom-40 left-10 w-72 h-72 rounded-full bg-yellow-100 opacity-60 mix-blend-multiply blur-3xl",
          animate: { x: [0, -20, 0], y: [0, 20, 0] },
          transition: { duration: 15, repeat: 1 / 0, repeatType: "reverse" },
        }),
        e.jsxs("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            e.jsxs("div", {
              className: "text-center mb-16",
              children: [
                e.jsx(t.span, {
                  className: "block mb-3 text-sm font-medium tracking-wider",
                  initial: { opacity: 0, y: 10 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.4 },
                  children: "QUESTIONS & ANSWERS",
                }),
                e.jsx(Z, {
                  text: "Frequently Asked Questions",
                  className: "text-3xl md:text-5xl font-bold",
                  once: !0,
                  delay: 0.1,
                }),
              ],
            }),
            e.jsx("div", {
              className: "space-y-4",
              children: se.map((i, s) =>
                e.jsxs(
                  t.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.5, delay: 0.1 * s },
                    className: "border-b border-gray-200 last:border-b-0",
                    onMouseEnter: () => o(s),
                    onMouseLeave: () => o(null),
                    children: [
                      e.jsxs("button", {
                        onClick: () =>
                          ((e) => {
                            a(r === e ? null : e);
                          })(s),
                        className:
                          "w-full text-left py-6 focus:outline-none relative",
                        "aria-expanded": r === s,
                        children: [
                          e.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              e.jsx(t.h3, {
                                className:
                                  "text-xl font-medium transition-colors " +
                                  (l === s ? "text-black" : "text-gray-700"),
                                animate: { x: l === s ? 4 : 0 },
                                transition: { duration: 0.2 },
                                children: i.question,
                              }),
                              e.jsx(t.div, {
                                animate: {
                                  rotate: r === s ? 180 : 0,
                                  backgroundColor:
                                    l === s ? "#000000" : "#f3f4f6",
                                  color: l === s ? "#ffffff" : "#6b7280",
                                },
                                transition: { duration: 0.3 },
                                className: "flex-shrink-0 ml-2 p-1 rounded-full",
                                children: e.jsx(T, { className: "w-5 h-5" }),
                              }),
                            ],
                          }),
                          e.jsx(t.span, {
                            className:
                              "absolute bottom-0 left-0 h-[2px] bg-black",
                            initial: { width: "0%" },
                            animate: {
                              width: l === s && r !== s ? "100%" : "0%",
                            },
                            transition: { duration: 0.3 },
                          }),
                        ],
                      }),
                      e.jsx(n, {
                        initial: !1,
                        children:
                          r === s &&
                          e.jsx(t.div, {
                            initial: { height: 0, opacity: 0 },
                            animate: { height: "auto", opacity: 1 },
                            exit: { height: 0, opacity: 0 },
                            transition: { duration: 0.3 },
                            className: "overflow-hidden",
                            children: e.jsx(t.p, {
                              className: "pb-6 text-gray-600",
                              initial: { y: -20, opacity: 0 },
                              animate: { y: 0, opacity: 1 },
                              transition: { duration: 0.3, delay: 0.1 },
                              children: i.answer,
                            }),
                          }),
                      }),
                    ],
                  },
                  s,
                ),
              ),
            }),
            e.jsxs(t.div, {
              className: "mt-16 text-center",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { duration: 0.5, delay: 0.3 },
              children: [
                e.jsx("p", {
                  className: "mb-6 text-gray-600",
                  children:
                    "Still have questions? Feel free to reach out directly.",
                }),
                e.jsx(t.a, {
                  href: "#contact",
                  className:
                    "inline-block px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors",
                  whileHover: {
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  },
                  whileTap: { scale: 0.98 },
                  children: "Contact me",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const ce = {};
  function de() {
    const [n, r] = i.useState("checking"),
      [a, l] = i.useState(!1),
      [o, s] = i.useState(null);
    i.useEffect(() => {
      u();
      const e = setInterval(u, 6e4);
      return () => clearInterval(e);
    }, []);
    const u = async (e = 2) => {
        try {
          r("checking");
          const t = new AbortController(),
            n = setTimeout(() => {
              t.abort(),
                r("unknown"),
                s(new Date().toLocaleTimeString()),
                e > 0 && setTimeout(() => u(e - 1), 5e3);
            }, 8e3),
            a = await fetch("https://portfolio-d10i.onrender.com/health", {
              method: "GET",
              signal: t.signal,
              cache: "no-store",
            });
          clearTimeout(n),
            a.ok ? r("online") : r("offline"),
            s(new Date().toLocaleTimeString());
        } catch (t) {
          "AbortError" === t.name ||
            (r("offline"), s(new Date().toLocaleTimeString()));
        }
      },
      c = () => {
        switch (n) {
          case "online":
            return "#10B981";
          case "offline":
            return "#EF4444";
          case "unknown":
            return "#3B82F6";
          default:
            return "#F59E0B";
        }
      };
    return e.jsx(t.div, {
      className: "inline-flex items-center gap-2 cursor-pointer",
      onHoverStart: () => l(!0),
      onHoverEnd: () => l(!1),
      onClick: u,
      title: `Last checked: ${o || "Not checked yet"}`,
      children: e.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          e.jsx(t.div, {
            className: `relative w-1.5 h-1.5 rounded-full ${(() => {
              switch (n) {
                case "online":
                  return "bg-green-500";
                case "offline":
                  return "bg-red-500";
                case "unknown":
                  return "bg-blue-500";
                default:
                  return "bg-yellow-500";
              }
            })()} shadow-lg`,
            style: { boxShadow: `0 0 5px 2px ${c()}` },
            animate: {
              boxShadow: [
                `0 0 5px 2px ${c()}`,
                `0 0 10px 4px ${c()}`,
                `0 0 5px 2px ${c()}`,
              ],
            },
            transition: { duration: 2, repeat: 1 / 0, repeatType: "reverse" },
            children:
              ("online" === n || "unknown" === n) &&
              e.jsx(t.div, {
                className: "absolute inset-0 rounded-full",
                style: { backgroundColor: c() },
                animate: { opacity: [0.7, 0.2, 0.7], scale: [1, 1.8, 1] },
                transition: { duration: 2, repeat: 1 / 0, repeatType: "reverse" },
              }),
          }),
          e.jsx(t.span, {
            className: "text-xs",
            animate: { opacity: a ? 1 : 0.7 },
            children: a
              ? e.jsxs("span", {
                  className: "flex items-center gap-1",
                  children: [
                    (() => {
                      switch (n) {
                        case "online":
                          return e.jsx(L, { size: 14 });
                        case "offline":
                          return e.jsx(F, { size: 14 });
                        case "unknown":
                          return e.jsx(I, { size: 14 });
                        default:
                          return e.jsx(B, {
                            size: 14,
                            className: "animate-spin",
                          });
                      }
                    })(),
                    e.jsx("span", {
                      children: (() => {
                        switch (n) {
                          case "online":
                            return "All systems operational";
                          case "offline":
                            return "System disruption";
                          case "unknown":
                            return "Server may be warming up";
                          default:
                            return "Checking status...";
                        }
                      })(),
                    }),
                  ],
                })
              : "System status",
          }),
        ],
      }),
    });
  }
  const fe = ({ className: t = "", variant: n = "default" }) => {
    const [r, a] = i.useState({
      lighthouse: null,
      security: "A+",
      uptime: "99.9%",
      loading: !0,
    });
    return (
      i.useEffect(() => {
        const e = setTimeout(() => {
          a({ lighthouse: 98, security: "A+", uptime: "99.9%", loading: !1 });
        }, 1e3);
        return () => clearTimeout(e);
      }, []),
      r.loading
        ? e.jsx("div", {
            className: `inline-flex items-center ${t}`,
            children: e.jsx("span", {
              className: "text-xs opacity-60",
              children: "Loading metrics...",
            }),
          })
        : "minimal" === n
          ? e.jsxs("div", {
              className: `inline-flex items-center gap-2 ${t}`,
              children: [
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("span", {
                      className: "h-2 w-2 rounded-full bg-green-400",
                    }),
                    e.jsxs("span", {
                      className: "text-xs",
                      children: ["Performance: ", r.lighthouse],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [
                    e.jsx("span", {
                      className: "h-2 w-2 rounded-full bg-green-400",
                    }),
                    e.jsxs("span", {
                      className: "text-xs",
                      children: ["Security: ", r.security],
                    }),
                  ],
                }),
              ],
            })
          : e.jsx("div", {
              className: `rounded-md border border-gray-700 p-2 ${t}`,
              children: e.jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx("span", {
                        className: "h-2 w-2 rounded-full bg-green-400",
                      }),
                      e.jsxs("span", {
                        className: "text-xs",
                        children: ["Performance: ", r.lighthouse],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx("span", {
                        className: "h-2 w-2 rounded-full bg-green-400",
                      }),
                      e.jsxs("span", {
                        className: "text-xs",
                        children: ["Security: ", r.security],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                      e.jsx("span", {
                        className: "h-2 w-2 rounded-full bg-green-400",
                      }),
                      e.jsxs("span", {
                        className: "text-xs",
                        children: ["Uptime: ", r.uptime],
                      }),
                    ],
                  }),
                ],
              }),
            })
    );
  };
  function pe() {
    const n = [

        // {
        //   name: "LinkedIn",
        //   url: "https://www.linkedin.com/in/dhruv-sathe-100b9428b",
        //   icon: e.jsx(H, { className: "w-5 h-5" }),
        // },
        {
          name: "GitHub",
          url: "https://github.com/mattdev071",
          icon: e.jsx(U, { className: "w-5 h-5" }),
        },
        {
            name: "tg",
            url: "https://t.me/mattdev071",
            icon: e.jsx(TT, { className: "w-5 h-5" }),
        },
        {
            name: "WA",
            url: "+12292819085",
            icon: e.jsx(WW, { className: "w-5 h-5" }),
        },
      ],
      r = new Date().getFullYear();
    return e.jsx("footer", {
      className: "bg-black text-white py-16 md:py-24 relative overflow-hidden",
      children: e.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          e.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsxs("h2", {
                    className: "text-2xl font-bold mb-6",
                    children: [
                      "Matt",
                      e.jsx("span", {
                        className: "text-gray-400",
                        children: ".dev",
                      }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "text-gray-400 mb-6 max-w-xs",
                    children:
                      "Building digital products, brands, and experiences that people love.",
                  }),
                  e.jsx("div", {
                    className: "flex space-x-4",
                    children: n.map((n, r) =>
                      e.jsx(
                        t.a,
                        {
                          href: n.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors",
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.9 },
                          children: n.icon,
                        },
                        n.name,
                      ),
                    ),
                  }),
                  e.jsx("div", {
                    className: "mt-6 pt-4 border-t border-gray-800",
                    children: e.jsx(de, {}),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("h3", {
                    className: "text-lg font-semibold mb-6",
                    children: "Navigation",
                  }),
                  e.jsx("ul", {
                    className: "space-y-3",
                    children: [
                      { name: "Home", href: "#home" },
                      { name: "Projects", href: "#projects" },
                      { name: "About", href: "#about" },
                      { name: "Contact", href: "#contact" },
                      { name: "FAQs", href: "#faq" },
                    ].map((t) =>
                      e.jsx(
                        "li",
                        {
                          children: e.jsx("a", {
                            href: t.href,
                            className:
                              "text-gray-400 hover:text-white transition-colors",
                            children: t.name,
                          }),
                        },
                        t.name,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "lg:col-span-2 relative",
                children: e.jsxs("div", {
                  className:
                    "glassmorphism-card p-8 rounded-2xl relative z-10 overflow-hidden",
                  children: [
                    e.jsx("div", {
                      className:
                        "absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl",
                    }),
                    e.jsx("div", {
                      className:
                        "absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl",
                    }),
                    e.jsx("h3", {
                      className: "text-xl font-semibold mb-6",
                      children: "Let's talk",
                    }),
                    e.jsx("p", {
                      className: "text-gray-300 mb-6",
                      children:
                        "Have a project in mind? Let's create something amazing together.",
                    }),
                    e.jsxs("a", {
                      href: "mailto:mattdev071@gmail.com",
                      className:
                        "inline-flex items-center gap-2 font-medium group mb-8",
                      children: [
                        "mattdev071@gmail.com",
                        e.jsx("span", {
                          className:
                            "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
                          children: e.jsx(P, { size: 16 }),
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "mt-6",
                      children: e.jsx("button", {
                        onClick: () => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        },
                        className:
                          "bg-white/10 border border-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors",
                        children: "Back to top",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            className:
              "border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center",
            children: [
              e.jsxs("div", {
                className: "text-gray-500 text-sm mb-4 md:mb-0",
                children: [
                  e.jsxs("p", {
                    children: ["© ", r, " mattdev071. All rights reserved."],
                  }),
                  e.jsx("div", {
                    className: "mt-2 text-xs",
                    children: e.jsx(fe, { className: "text-gray-400" }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "text-gray-500 text-sm",
                children: "Made by mattdev",
              }),
            ],
          }),
        ],
      }),
    });
  }
  i.lazy(() =>
    (function (e, t) {
      let n = Promise.resolve();
      if (t && t.length > 0) {
        document.getElementsByTagName("link");
        const e = document.querySelector("meta[property=csp-nonce]"),
          r =
            (null == e ? void 0 : e.nonce) ||
            (null == e ? void 0 : e.getAttribute("nonce"));
        n = Promise.allSettled(
          t.map((e) => {
            if (
              (e = (function (e) {
                return "/" + e;
              })(e)) in ce
            )
              return;
            ce[e] = !0;
            const t = e.endsWith(".css"),
              n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`)) return;
            const a = document.createElement("link");
            return (
              (a.rel = t ? "stylesheet" : "modulepreload"),
              t || (a.as = "script"),
              (a.crossOrigin = ""),
              (a.href = e),
              r && a.setAttribute("nonce", r),
              document.head.appendChild(a),
              t
                ? new Promise((t, n) => {
                    a.addEventListener("load", t),
                      a.addEventListener("error", () =>
                        n(new Error(`Unable to preload CSS for ${e}`)),
                      );
                  })
                : void 0
            );
          }),
        );
      }
      function r(e) {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      }
      return n.then((t) => {
        for (const e of t || []) "rejected" === e.status && r(e.reason);
        return e().catch(r);
      });
    })(
      () => import("./performance-metrics-BwBoEVeK.js"),
      __vite__mapDeps([0, 1, 2]),
    ).then((e) => ({ default: e.PerformanceMetrics })),
  );
  const me = ({
    className: t = "",
    eyeSize: n = 22,
    eyeGap: r = 12,
    eyeColor: a = "#ffffff",
    pupilColor: l = "#000000",
    pupilSize: o = 0.5,
    borderWidth: s = 2,
    borderColor: u = "#000000",
  }) => {
    const [c, d] = i.useState({ x: 0, y: 0 }),
      f = i.useRef(null);
    i.useEffect(() => {
      const e = (e) => {
        if (!f.current) return;
        const t = f.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2;
        d({ x: e.clientX - n, y: e.clientY - r });
      };
      return (
        window.addEventListener("mousemove", e),
        () => {
          window.removeEventListener("mousemove", e);
        }
      );
    }, []);
    const p = ((e, t) => {
      const r = (n * (1 - o)) / 2,
        a = Math.atan2(t, e),
        l = Math.min(Math.sqrt(e * e + t * t), r);
      return { x: Math.cos(a) * l, y: Math.sin(a) * l };
    })(c.x, c.y);
    return e.jsxs("div", {
      ref: f,
      className: `flex items-center gap-${r / 4} ${t}`,
      children: [
        e.jsx("div", {
          className: "relative rounded-full",
          style: {
            width: n,
            height: n,
            backgroundColor: a,
            border: `${s}px solid ${u}`,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          },
          children: e.jsx("div", {
            className: "absolute rounded-full",
            style: {
              width: n * o,
              height: n * o,
              backgroundColor: l,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translate(${p.x}px, ${p.y}px)`,
            },
          }),
        }),
        e.jsx("div", {
          className: "relative rounded-full",
          style: {
            width: n,
            height: n,
            backgroundColor: a,
            border: `${s}px solid ${u}`,
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          },
          children: e.jsx("div", {
            className: "absolute rounded-full",
            style: {
              width: n * o,
              height: n * o,
              backgroundColor: l,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) translate(${p.x}px, ${p.y}px)`,
            },
          }),
        }),
      ],
    });
  };
  function he({ isMobile: r }) {
    const [a, l] = i.useState(!1),
      [o, s] = i.useState(!1),
      [u, c] = i.useState("home"),
      [d, f] = i.useState("undefined" != typeof window ? window.innerWidth : 0),
      p = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "FAQ", href: "#faq" },
      ];
    i.useEffect(() => {
      const e = () => {
          s(window.scrollY > 20);
          const e = p
            .map((e) => e.href.substring(1))
            .find((e) => {
              const t = document.getElementById(e);
              if (t) {
                const e = t.getBoundingClientRect();
                return e.top <= 100 && e.bottom > 100;
              }
              return !1;
            });
          e && c(e);
        },
        t = () => {
          f(window.innerWidth);
        };
      return (
        window.addEventListener("scroll", e),
        window.addEventListener("resize", t),
        () => {
          window.removeEventListener("scroll", e),
            window.removeEventListener("resize", t);
        }
      );
    }, []);
    return e.jsxs(t.header, {
      className:
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 " +
        (o ? "py-3" : "py-5"),
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5, type: "spring", stiffness: 100, damping: 20 },
      children: [
        e.jsx("div", {
          className: "max-w-7xl mx-auto px-6 relative",
          children: e.jsx("div", {
            className: `rounded-full backdrop-blur-md px-5 py-3 transition-all duration-500 border border-white/5\n            ${o ? "bg-white/25 shadow-lg" : "bg-white/10"}\n          `,
            children: e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs(t.a, {
                  href: "#home",
                  className: "text-xl md:text-2xl font-bold relative z-10 group",
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  children: [
                    e.jsx("span", {
                      className:
                        "bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent",
                      children: "Matt",
                    }),
                    e.jsx("span", {
                      className: "text-gray-500",
                      children: ".dev",
                    }),
                    e.jsx(t.span, {
                      className:
                        "absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500",
                      initial: { width: 0 },
                      whileHover: { width: "100%" },
                      transition: { duration: 0.2 },
                    }),
                  ],
                }),
                !(d < 640 || d < 768 || (d < 1024 && p.length > 3) || r) &&
                  e.jsx("div", {
                    className: "hidden md:block lg:block",
                    children: e.jsx("div", {
                      className: `px-3 py-2 rounded-full ${o ? "bg-white/30" : "bg-white/20"} transition-colors duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`,
                      children: e.jsx(me, {
                        eyeSize: d > 1280 ? 18 : d > 1024 ? 16 : 14,
                        eyeGap: 6,
                        eyeColor: "#ffffff",
                        pupilColor: "#000000",
                        pupilSize: 0.5,
                        className: "mx-auto",
                      }),
                    }),
                  }),
                r
                  ? e.jsx(t.button, {
                      onClick: () => l(!a),
                      className: `p-2 rounded-full ${o ? "bg-black/10" : "bg-white/10"} backdrop-blur-lg`,
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      "aria-label": "Toggle menu",
                      children: a
                        ? e.jsx(G, { size: 22 })
                        : e.jsx(Q, { size: 22 }),
                    })
                  : e.jsx("nav", {
                      className: "relative z-20",
                      children: e.jsxs("ul", {
                        className: "flex items-center gap-1",
                        children: [
                          p.map((n) =>
                            e.jsx(
                              "li",
                              {
                                children: e.jsxs(t.a, {
                                  href: n.href,
                                  className: `relative px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center\n                          ${u === n.href.substring(1) ? "text-white" : "text-gray-700 hover:text-black"}\n                        `,
                                  whileHover: { scale: 1.05 },
                                  whileTap: { scale: 0.95 },
                                  onClick: n.onClick,
                                  children: [
                                    u === n.href.substring(1) &&
                                      e.jsx(t.span, {
                                        className:
                                          "absolute inset-0 bg-black rounded-full -z-10",
                                        layoutId: "navbar-active-pill",
                                        transition: {
                                          type: "spring",
                                          stiffness: 300,
                                          damping: 30,
                                        },
                                      }),
                                    n.name,
                                    n.icon,
                                  ],
                                }),
                              },
                              n.name,
                            ),
                          ),
                          e.jsxs(t.a, {
                            href: "#contact",
                            className:
                              "ml-3 bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow-md flex items-center gap-1 hover:gap-2 transition-all",
                            whileHover: {
                              scale: 1.05,
                              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                            },
                            whileTap: { scale: 0.98 },
                            children: ["Let's talk", e.jsx(M, { size: 14 })],
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          }),
        }),
        e.jsx(n, {
          children:
            r &&
            a &&
            e.jsx(t.div, {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 },
              transition: { duration: 0.3 },
              className:
                "fixed inset-x-0 top-[80px] mx-4 rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl border border-white/10 z-40 overflow-hidden",
              children: e.jsx(t.nav, {
                className: "p-6",
                initial: { height: 0 },
                animate: { height: "auto" },
                exit: { height: 0 },
                transition: { duration: 0.3 },
                children: e.jsxs("ul", {
                  className: "space-y-3",
                  children: [
                    p.map((n, r) =>
                      e.jsx(
                        t.li,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: {
                            opacity: 1,
                            y: 0,
                            transition: { delay: 0.05 * r },
                          },
                          exit: { opacity: 0, y: -10 },
                          children: e.jsxs("a", {
                            href: n.href,
                            className:
                              "block py-3 px-4 rounded-xl text-lg font-medium transition-colors " +
                              (u === n.href.substring(1)
                                ? "bg-black text-white"
                                : "hover:bg-black/5"),
                            onClick: () => {
                              l(!1), n.onClick && n.onClick();
                            },
                            children: [n.name, n.icon],
                          }),
                        },
                        n.name,
                      ),
                    ),
                    e.jsx(t.li, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0, transition: { delay: 0.25 } },
                      children: e.jsx("a", {
                        href: "#contact",
                        className:
                          "block py-3 px-4 rounded-xl text-lg font-medium bg-black text-white mt-4 text-center",
                        onClick: () => l(!1),
                        children: "Let's talk",
                      }),
                    }),
                  ],
                }),
              }),
            }),
        }),
      ],
    });
  }
  const ge = ({
      className: n = "",
      intensity: r = "medium",
      colorScheme: a = "default",
      blur: l = "medium",
    }) => {
      const o = i.useRef(null),
        s = { low: 40, medium: 25, high: 12 },
        u = {
          none: "blur-none",
          low: "blur-lg",
          medium: "blur-2xl",
          high: "blur-3xl",
        },
        c = {
          default: ["#6366f1", "#8b5cf6", "#ec4899", "#10b981"],
          blue: ["#60a5fa", "#3b82f6", "#1e40af", "#0ea5e9"],
          purple: ["#8b5cf6", "#a855f7", "#7e22ce", "#d946ef"],
          sunset: ["#f97316", "#fb923c", "#f43f5e", "#fbbf24"],
          neon: ["#22d3ee", "#10b981", "#4ade80", "#a855f7"],
        },
        d = c[a] || c.default,
        f = s[r] || s.medium,
        p = u[l] || u.medium,
        m = (() => {
          const e = "high" === r ? 6 : "medium" === r ? 4 : 3;
          return Array.from({ length: e }).map((e, t) => ({
            id: t,
            size: 300 * Math.random() + 300,
            initialX: 100 * Math.random(),
            initialY: 100 * Math.random(),
            color: d[t % d.length],
          }));
        })();
      return e.jsxs("div", {
        className: `absolute inset-0 overflow-hidden ${n}`,
        ref: o,
        children: [
          e.jsx("div", {
            className:
              "absolute inset-0 bg-gradient-to-br from-white/40 to-white/60 opacity-80",
          }),
          m.map((n) =>
            e.jsx(
              t.div,
              {
                className: `absolute rounded-full ${p} mix-blend-multiply`,
                style: {
                  width: n.size,
                  height: n.size,
                  backgroundColor: n.color,
                  opacity: 0.35,
                  left: `${n.initialX}%`,
                  top: `${n.initialY}%`,
                  zIndex: 0,
                },
                animate: {
                  x: [
                    0,
                    (Math.random() > 0.5 ? 150 : -150) * ("high" === r ? 2 : 1.5),
                    0,
                  ],
                  y: [
                    0,
                    (Math.random() > 0.5 ? 150 : -150) * ("high" === r ? 2 : 1.5),
                    0,
                  ],
                  scale: [1, "high" === r ? 1.2 : 1.1, 1],
                },
                transition: {
                  repeat: 1 / 0,
                  duration: f,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              },
              n.id,
            ),
          ),
          e.jsx("div", {
            className:
              "absolute inset-0 bg-repeat opacity-[0.04] pointer-events-none",
            style: {
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='%23000000'/%3E%3C/svg%3E\")",
              backgroundSize: "200px 200px",
            },
          }),
        ],
      });
    },
    ye = ({
      variant: n = "default",
      className: r = "",
      intensity: a = "medium",
      baseColor: l = "#6366f1",
      accentColor: i = "#8b5cf6",
      tertiaryColor: o = "#ec4899",
    }) => {
      const u = {
          low: { shapes: 7, speed: 1.2 },
          medium: { shapes: 12, speed: 0.8 },
          high: { shapes: 18, speed: 0.5 },
        },
        { shapes: c, speed: d } = u[a] || u.medium,
        f = Array.from({ length: c }).map((e, t) => ({
          id: t,
          size: 250 * Math.random() + 100,
          xPos: 100 * Math.random(),
          yPos: 100 * Math.random(),
          delay: 5 * Math.random(),
        })),
        p = () =>
          e.jsx("div", {
            className: `absolute inset-0 overflow-hidden ${r}`,
            children: f.map((n) =>
              e.jsx(
                t.div,
                {
                  className: "absolute rounded-full blur-3xl mix-blend-multiply",
                  style: {
                    width: n.size,
                    height: n.size,
                    left: `${n.xPos}%`,
                    top: `${n.yPos}%`,
                    backgroundColor: [l, i, o][n.id % 3],
                    opacity: 0.25,
                  },
                  animate: {
                    x: [0, 50 * (Math.random() > 0.5 ? 1 : -1), 0],
                    y: [0, 50 * (Math.random() > 0.5 ? 1 : -1), 0],
                    scale: [1, 1.15, 1],
                  },
                  transition: {
                    repeat: 1 / 0,
                    duration: d * (5 + (n.id % 3)),
                    delay: n.delay,
                    ease: "easeInOut",
                    repeatType: "reverse",
                  },
                },
                n.id,
              ),
            ),
          }),
        m = () =>
          e.jsx("div", {
            className: `absolute inset-0 overflow-hidden ${r}`,
            children: f.map((n) => {
              let r;
              switch (n.id % 3) {
                case 0:
                  r = e.jsx(t.div, {
                    className: "absolute opacity-15",
                    style: { left: `${n.xPos}%`, top: `${n.yPos}%` },
                    animate: { rotate: [0, 360], scale: [0.7, 1.2, 0.7] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 16 * d,
                      delay: n.delay,
                      ease: "linear",
                    },
                    children: e.jsx("div", {
                      style: {
                        width: 0,
                        height: 0,
                        borderLeft: 0.5 * n.size + "px solid transparent",
                        borderRight: 0.5 * n.size + "px solid transparent",
                        borderBottom: `${0.8 * n.size}px solid ${l}`,
                      },
                    }),
                  });
                  break;
                case 1:
                  r = e.jsx(t.div, {
                    className: "absolute opacity-15",
                    style: {
                      width: 0.8 * n.size,
                      height: 0.8 * n.size,
                      left: `${n.xPos}%`,
                      top: `${n.yPos}%`,
                      backgroundColor: i,
                    },
                    animate: {
                      rotate: [0, 90, 180, 270, 360],
                      scale: [0.7, 1.2, 0.7],
                    },
                    transition: {
                      repeat: 1 / 0,
                      duration: 20 * d,
                      delay: n.delay,
                      ease: "easeInOut",
                    },
                  });
                  break;
                case 2:
                  r = e.jsx(t.div, {
                    className: "absolute rounded-full opacity-15",
                    style: {
                      width: n.size,
                      height: n.size,
                      left: `${n.xPos}%`,
                      top: `${n.yPos}%`,
                      backgroundColor: o,
                    },
                    animate: { scale: [1, 1.3, 1], opacity: [0.1, 0.18, 0.1] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 12 * d,
                      delay: n.delay,
                      ease: "easeInOut",
                    },
                  });
              }
              return e.jsx(s.Fragment, { children: r }, n.id);
            }),
          }),
        h = () => {
          const n = "high" === a ? 24 : "medium" === a ? 18 : 12,
            s = Array.from({ length: n * n });
          return e.jsx("div", {
            className: `absolute inset-0 overflow-hidden ${r}`,
            children: e.jsx("div", {
              className: "absolute inset-0 grid",
              style: {
                gridTemplateColumns: `repeat(${n}, 1fr)`,
                gridTemplateRows: `repeat(${n}, 1fr)`,
              },
              children: s.map((r, a) => {
                const s = Math.floor(a / n),
                  u = a % n,
                  c = 0.03 * (s + u);
                return e.jsx(
                  t.div,
                  {
                    className: "flex items-center justify-center",
                    initial: { opacity: 0 },
                    animate: { opacity: [0.12, 0.35, 0.12], scale: [1, 1.3, 1] },
                    transition: {
                      repeat: 1 / 0,
                      duration: 4 * d,
                      delay: c,
                      ease: "easeInOut",
                    },
                    children: e.jsx("div", {
                      className: "rounded-full",
                      style: {
                        backgroundColor:
                          (s + u) % 3 == 0 ? l : (s + u) % 3 == 1 ? i : o,
                        width: "5px",
                        height: "5px",
                        opacity: 0.4,
                      },
                    }),
                  },
                  a,
                );
              }),
            }),
          });
        },
        g = () =>
          e.jsxs("div", {
            className: `absolute inset-0 overflow-hidden ${r}`,
            children: [
              f
                .slice(0, 5)
                .map((n) =>
                  e.jsx(
                    t.div,
                    {
                      className:
                        "absolute rounded-full blur-3xl mix-blend-multiply",
                      style: {
                        width: 1.8 * n.size,
                        height: 1.8 * n.size,
                        left: `${n.xPos}%`,
                        top: `${n.yPos}%`,
                        backgroundColor: [l, i, o][n.id % 3],
                        opacity: 0.15,
                      },
                      animate: {
                        x: [0, 60 * (Math.random() > 0.5 ? 1 : -1), 0],
                        y: [0, 60 * (Math.random() > 0.5 ? 1 : -1), 0],
                      },
                      transition: {
                        repeat: 1 / 0,
                        duration: d * (16 + (n.id % 5)),
                        delay: n.delay,
                        ease: "easeInOut",
                        repeatType: "reverse",
                      },
                    },
                    n.id,
                  ),
                ),
              f.slice(5).map((n) => {
                let r;
                switch (n.id % 3) {
                  case 0:
                    r = e.jsx(t.div, {
                      className:
                        "absolute border-2 border-opacity-30 rounded-lg opacity-30",
                      style: {
                        width: 0.35 * n.size,
                        height: 0.35 * n.size,
                        left: `${n.xPos}%`,
                        top: `${n.yPos}%`,
                        borderColor: l,
                        transform: `rotate(${45 * n.id}deg)`,
                      },
                      animate: {
                        y: [0, -30, 0],
                        rotate: [0, 120],
                        opacity: [0.15, 0.3, 0.15],
                      },
                      transition: {
                        repeat: 1 / 0,
                        duration: 8 * d,
                        delay: n.delay,
                        ease: "easeInOut",
                      },
                    });
                    break;
                  case 1:
                    r = e.jsx(t.div, {
                      className: "absolute rounded-full opacity-30",
                      style: {
                        width: 0.25 * n.size,
                        height: 0.25 * n.size,
                        left: `${n.xPos}%`,
                        top: `${n.yPos}%`,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        borderColor: i,
                        borderRadius: "50%",
                      },
                      animate: { y: [0, 40, 0], scale: [1, 1.2, 1] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 12 * d,
                        delay: n.delay,
                        ease: "easeInOut",
                      },
                    });
                    break;
                  case 2:
                    const a = 0.06 * n.size;
                    r = e.jsx(t.div, {
                      className: "absolute opacity-30",
                      style: {
                        width: a,
                        height: a,
                        borderRadius: "50%",
                        left: `${n.xPos}%`,
                        top: `${n.yPos}%`,
                        backgroundColor: o,
                      },
                      animate: { y: [0, 70, 0], opacity: [0.25, 0.6, 0.25] },
                      transition: {
                        repeat: 1 / 0,
                        duration: 16 * d,
                        delay: n.delay,
                        ease: "easeInOut",
                      },
                    });
                }
                return e.jsx(s.Fragment, { children: r }, n.id);
              }),
            ],
          });
      return (() => {
        switch (n) {
          case "blob":
            return e.jsx(p, {});
          case "geometric":
            return e.jsx(m, {});
          case "grid":
            return e.jsx(h, {});
          default:
            return e.jsx(g, {});
        }
      })();
    },
    ve = ({
      className: n = "",
      cellSize: r = 40,
      color: a = "#000",
      opacity: l = 0.07,
      animationSpeed: o = 10,
      variant: s = "wave",
      hoverEffect: u = !0,
    }) => {
      const [c, d] = i.useState({ width: 0, height: 0 }),
        [f, p] = i.useState({ x: 0, y: 0 }),
        [m, h] = i.useState(!1);
      i.useEffect(() => {
        const e = () => {
          d({ width: window.innerWidth, height: window.innerHeight });
        };
        return (
          e(),
          window.addEventListener("resize", e),
          () => window.removeEventListener("resize", e)
        );
      }, []);
      const g = Math.ceil(c.height / r),
        y = Math.ceil(c.width / r),
        v = [];
      for (let e = 0; e < g; e++)
        for (let t = 0; t < y; t++) v.push({ row: e, col: t });
      return e.jsx("div", {
        className: `absolute inset-0 overflow-hidden pointer-events-none ${n}`,
        onMouseMove: (e) => {
          if (!u) return;
          const { clientX: t, clientY: n } = e;
          p({ x: t, y: n }), h(!0);
        },
        onMouseLeave: () => {
          h(!1);
        },
        children: e.jsx("div", {
          className: "relative w-full h-full",
          children: v.map(({ row: n, col: i }, d) => {
            const p = i * r,
              h = n * r;
            let g = {},
              y = {};
            const v =
              u && m
                ? Math.sqrt(
                    Math.pow(p - f.x + r / 2, 2) + Math.pow(h - f.y + r / 2, 2),
                  )
                : 0;
            switch (s) {
              case "wave":
                (g = { opacity: [0.5 * l, l, 0.5 * l] }),
                  (y = {
                    duration: o,
                    repeat: 1 / 0,
                    delay: (0.05 * (n + i)) % 1,
                    ease: "easeInOut",
                  });
                break;
              case "pulse":
                const e = 2 * Math.abs(Math.sin(n * i));
                (g = { scale: [1, 1.2, 1], opacity: [0.5 * l, l, 0.5 * l] }),
                  (y = {
                    duration: o,
                    repeat: 1 / 0,
                    delay: e,
                    ease: "easeInOut",
                  });
                break;
              case "random":
                const t = 5 * Math.random(),
                  r = 5 + Math.random() * o;
                (g = { opacity: [0.3 * l, l, 0.3 * l] }),
                  (y = {
                    duration: r,
                    repeat: 1 / 0,
                    delay: t,
                    ease: "easeInOut",
                  });
                break;
              case "ripple":
                if (u && m) {
                  const e = Math.sqrt(
                    Math.pow(c.width, 2) + Math.pow(c.height, 2),
                  );
                  (g = {
                    scale: [1, 1.5, 1],
                    opacity: [0.5 * l, 1.5 * l, 0.5 * l],
                  }),
                    (y = {
                      duration: o / 3,
                      repeat: 0,
                      delay: (v / e) * (o / 10),
                      ease: "easeOut",
                    });
                } else (g = { opacity: 0.5 * l }), (y = { duration: 0.5 });
                break;
              default:
                (g = { opacity: l }), (y = { duration: 0.5 });
            }
            if (u && m && "ripple" !== s) {
              const e = 300;
              if (v < e) {
                const t = 1 - v / e;
                g = { ...g, scale: 1 + 0.5 * t, opacity: l + t * l * 2 };
              }
            }
            return e.jsx(
              t.div,
              {
                className: "absolute border-r border-b",
                style: {
                  left: p,
                  top: h,
                  width: r,
                  height: r,
                  borderColor: a,
                  backgroundColor: "transparent",
                },
                initial: { opacity: 0.5 * l },
                animate: g,
                transition: y,
              },
              d,
            );
          }),
        }),
      });
    };
  function be() {
    const [t, n] = i.useState(!0),
      [r, a] = i.useState(!1);
    return (
      i.useEffect(() => {
        a(window.innerWidth < 768);
        const e = () => {
          a(window.innerWidth < 768);
        };
        return (
          "undefined" != typeof window &&
            (window.addEventListener("resize", e),
            setTimeout(() => {
              n(!1);
            }, 2e3)),
          () => {
            "undefined" != typeof window &&
              window.removeEventListener("resize", e);
          }
        );
      }, []),
      t
        ? e.jsx(w, {})
        : e.jsxs("div", {
            className: "relative overflow-hidden",
            children: [
              e.jsx("div", {
                className: "fixed inset-0 z-[-3]",
                style: { pointerEvents: "none" },
                children: e.jsx(ge, {
                  colorScheme: "blue",
                  intensity: "high",
                  blur: "medium",
                  className: "opacity-50",
                }),
              }),
              e.jsx("div", {
                className: "fixed inset-0 z-[-2]",
                style: { pointerEvents: "none" },
                children: e.jsx(ye, {
                  variant: "mixed",
                  intensity: "high",
                  baseColor: "#6366f1",
                  accentColor: "#8b5cf6",
                  tertiaryColor: "#10b981",
                  className: "opacity-40",
                }),
              }),
              e.jsx("div", {
                className: "fixed inset-0 z-[-1]",
                style: { pointerEvents: "none" },
                children: e.jsx(ve, {
                  variant: "wave",
                  cellSize: 50,
                  opacity: 0.07,
                  color: "#000000",
                  animationSpeed: 15,
                  className: "opacity-80",
                }),
              }),
              e.jsx(he, { isMobile: r }),
              e.jsxs("main", {
                children: [
                  e.jsx("section", {
                    id: "home",
                    className: "relative",
                    children: e.jsx(J, {}),
                  }),
                  e.jsx("section", {
                    id: "about",
                    className: "relative",
                    children: e.jsx(te, {}),
                  }),
                  e.jsx("section", {
                    id: "projects",
                    className: "relative",
                    children: e.jsx(le, {}),
                  }),
                  e.jsx("section", {
                    id: "faq",
                    className: "relative",
                    children: e.jsx(ue, {}),
                  }),
                  e.jsx("section", {
                    id: "contact",
                    className: "relative",
                    children: e.jsx(oe, {}),
                  }),
                ],
              }),
              e.jsx(pe, {}),
            ],
          })
    );
  }
  const xe = ["/src/assets/Dhruv-Avatar.png", "/src/assets/avatar.png"];
  function we() {
    const [r, a] = i.useState(!0),
      [l, o] = i.useState(!1);
    return (
      i.useEffect(() => {
        o(!0),
          ((e) => {
            try {
              if ("undefined" == typeof window || !document) return;
              if (!Array.isArray(e)) return;
              e.forEach((e) => {
                try {
                  if (!e) return;
                  const t = document.createElement("link");
                  (t.rel = "preload"),
                    (t.as = "image"),
                    (t.href = e),
                    document.head.appendChild(t);
                } catch (t) {}
              });
            } catch (t) {}
          })(xe),
          document.body.classList.add("custom-cursor-active");
        const e = setTimeout(() => {
          a(!1);
        }, 1e3);
        return () => {
          clearTimeout(e), document.body.classList.remove("custom-cursor-active");
        };
      }, []),
      l
        ? e.jsxs(e.Fragment, {
            children: [
              l && e.jsx(k, {}),
              e.jsx(n, {
                mode: "wait",
                children: r
                  ? e.jsx(
                      t.div,
                      {
                        initial: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.3 },
                        children: e.jsx(w, {}),
                      },
                      "loader",
                    )
                  : e.jsxs(
                      t.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 0.5 },
                        className: "bg-transparent",
                        children: [
                          e.jsx(u, {
                            position: "top-right",
                            reverseOrder: !1,
                            toastOptions: {
                              duration: 5e3,
                              style: {
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                fontWeight: 500,
                              },
                            },
                          }),
                          e.jsx(be, {}),
                        ],
                      },
                      "content",
                    ),
              }),
            ],
          })
        : null
    );
  }
  const ke = () =>
      e.jsx("div", {
        className: "fixed inset-0 flex items-center justify-center bg-white",
        children: e.jsx("div", {
          className:
            "h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-black",
        }),
      }),
    Se = () => {
      try {
        if ("undefined" == typeof window || !document) return;
        [
          { href: "/src/fonts/Gilroy-Regular.ttf", type: "font/ttf" },
          { href: "/src/fonts/Gilroy-Medium.ttf", type: "font/ttf" },
          { href: "/src/fonts/Gilroy-Bold.ttf", type: "font/ttf" },
        ].forEach(({ href: e, type: t }) => {
          try {
            const n = document.createElement("link");
            (n.rel = "preload"),
              (n.as = "font"),
              (n.href = e),
              (n.type = t),
              (n.crossOrigin = "anonymous"),
              document.head.appendChild(n);
          } catch (n) {}
        });
      } catch (e) {}
    };
  "undefined" != typeof window && window.addEventListener("load", Se);
  try {
    const t = document.getElementById("root");
    if (t) {
      x.createRoot(t).render(
        e.jsx(i.StrictMode, {
          children: e.jsx(i.Suspense, {
            fallback: e.jsx(ke, {}),
            children: e.jsx(we, {}),
          }),
        }),
      );
    } else;
  } catch (je) {
    const e = document.getElementById("root");
    e &&
      (e.innerHTML =
        '\n      <div style="padding: 20px; text-align: center;">\n        <h2>Something went wrong</h2>\n        <p>The application couldn\'t load properly. Please try refreshing the page.</p>\n        <button onclick="window.location.reload()" style="padding: 8px 16px; background: #4a4a4a; color: white; border: none; border-radius: 4px; cursor: pointer;">\n          Refresh Page\n        </button>\n      </div>\n    ');
  }
  try {
    (Ne = console.log) &&
      Ne instanceof Function &&
      "undefined" != typeof window &&
      window.performance &&
      setTimeout(() => {
        const e = {},
          t = window.performance.getEntriesByType("navigation")[0];
        if (t) {
          e.TTFB = { name: "TTFB", value: t.responseStart };
          const n = window.performance
            .getEntriesByType("paint")
            .find((e) => "first-contentful-paint" === e.name);
          n && (e.FCP = { name: "FCP", value: n.startTime });
        }
        if (
          (Object.values(e).forEach((e) => {
            Ne(e);
          }),
          "PerformanceObserver" in window)
        ) {
          try {
            new PerformanceObserver((e) => {
              const t = e.getEntries(),
                n = t[t.length - 1];
              n && Ne({ name: "LCP", value: n.startTime });
            }).observe({ type: "largest-contentful-paint", buffered: !0 });
          } catch (n) {}
          try {
            new PerformanceObserver((e) => {
              const t = e.getEntries()[0];
              t && Ne({ name: "FID", value: t.processingStart - t.startTime });
            }).observe({ type: "first-input", buffered: !0 });
          } catch (n) {}
          try {
            let e = 0;
            new PerformanceObserver((t) => {
              for (const n of t.getEntries()) n.hadRecentInput || (e += n.value);
              Ne({ name: "CLS", value: e });
            }).observe({ type: "layout-shift", buffered: !0 });
          } catch (n) {}
        }
      }, 3e3);
  } catch (Ee) {}
  var Ne;
  "serviceWorker" in navigator &&
    window.addEventListener("load", () => {
      setTimeout(() => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((e) => {})
          .catch((e) => {});
      }, 2e3);
    });
  
