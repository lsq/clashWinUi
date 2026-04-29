module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CL: () => z,
    EW: () => j,
    Ji: () => r,
    KZ: () => w,
    Oh: () => L,
    ir: () => a,
    jB: () => N,
    l7: () => $,
    mB: () => D,
    or: () => s
  });
  var n = i(43702),
    o = i(97295);
  function s(...e) {
    return function (t, i) {
      for (let n = 0, o = e.length; n < o; n++) {
        const o = e[n](t, i);
        if (o) return o;
      }
      return null;
    };
  }
  const r = function (e, t, i) {
    if (!i || i.length < t.length) return null;
    let n;
    n = e ? o.ok(i, t) : 0 === i.indexOf(t);
    if (!n) return null;
    return t.length > 0 ? [{
      start: 0,
      end: t.length
    }] : [];
  }.bind(void 0, !0);
  function a(e, t) {
    const i = t.toLowerCase().indexOf(e.toLowerCase());
    return -1 === i ? null : [{
      start: i,
      end: i + e.length
    }];
  }
  function l(e, t, i, n) {
    if (i === e.length) return [];
    if (n === t.length) return null;
    if (e[i] === t[n]) {
      let o = null;
      return (o = l(e, t, i + 1, n + 1)) ? m({
        start: n,
        end: n + 1
      }, o) : null;
    }
    return l(e, t, i, n + 1);
  }
  function c(e) {
    return 97 <= e && e <= 122;
  }
  function d(e) {
    return 65 <= e && e <= 90;
  }
  function h(e) {
    return 48 <= e && e <= 57;
  }
  function u(e) {
    return 32 === e || 9 === e || 10 === e || 13 === e;
  }
  const g = new Set();
  function p(e) {
    return u(e) || g.has(e);
  }
  function f(e) {
    return c(e) || d(e) || h(e);
  }
  function m(e, t) {
    return (0 === t.length ? (t = [e]) : e.end === t[0].start ? (t[0].start = e.start) : t.unshift(e), t);
  }
  function v(e, t) {
    for (let i = t; i < e.length; i++) {
      const t = e.charCodeAt(i);
      if (d(t) || h(t) || (i > 0 && !f(e.charCodeAt(i - 1)))) return i;
    }
    return e.length;
  }
  function _(e, t, i, n) {
    if (i === e.length) return [];
    if (n === t.length) return null;
    if (e[i] !== t[n].toLowerCase()) return null;
    {
      let o = null,
        s = n + 1;
      for (o = _(e, t, i + 1, n + 1); !o && (s = v(t, s)) < t.length;) ((o = _(e, t, i + 1, s)), s++);
      return null === o ? null : m({
        start: n,
        end: n + 1
      }, o);
    }
  }
  function b(e, t) {
    if (!t) return null;
    if (0 === (t = t.trim()).length) return null;
    if (!(function (e) {
      let t = 0,
        i = 0,
        n = 0,
        o = 0;
      for (let s = 0; s < e.length; s++) ((n = e.charCodeAt(s)), d(n) && t++, c(n) && i++, u(n) && o++);
      return (0 !== t && 0 !== i) || 0 !== o ? t <= 5 : e.length <= 30;
    })(e)) return null;
    if (t.length > 60) return null;
    const i = (function (e) {
      let t = 0,
        i = 0,
        n = 0,
        o = 0,
        s = 0;
      for (let r = 0; r < e.length; r++) ((s = e.charCodeAt(r)), d(s) && t++, c(s) && i++, f(s) && n++, h(s) && o++);
      return {
        upperPercent: t / e.length,
        lowerPercent: i / e.length,
        alphaPercent: n / e.length,
        numericPercent: o / e.length
      };
    })(t);
    if (!(function (e) {
      const {
        upperPercent: t,
        lowerPercent: i,
        alphaPercent: n,
        numericPercent: o
      } = e;
      return i > 0.2 && t < 0.8 && n > 0.6 && o < 0.2;
    })(i)) {
      if (!(function (e) {
        const {
          upperPercent: t,
          lowerPercent: i
        } = e;
        return 0 === i && t > 0.6;
      })(i)) return null;
      t = t.toLowerCase();
    }
    let n = null,
      o = 0;
    for (e = e.toLowerCase(); o < t.length && null === (n = _(e, t, 0, o));) o = v(t, o + 1);
    return n;
  }
  function w(e, t, i = !1) {
    if (!t || 0 === t.length) return null;
    let n = null,
      o = 0;
    for (e = e.toLowerCase(), t = t.toLowerCase(); o < t.length && null === (n = y(e, t, 0, o, i));) o = C(t, o + 1);
    return n;
  }
  function y(e, t, i, n, o) {
    if (i === e.length) return [];
    if (n === t.length) return null;
    if (((s = e.charCodeAt(i)), (r = t.charCodeAt(n)), s === r || (p(s) && p(r)))) {
      let s = null,
        r = n + 1;
      if (((s = y(e, t, i + 1, n + 1, o)), !o)) for (; !s && (r = C(t, r)) < t.length;) ((s = y(e, t, i + 1, r, o)), r++);
      return null === s ? null : m({
        start: n,
        end: n + 1
      }, s);
    }
    return null;
    var s, r;
  }
  function C(e, t) {
    for (let i = t; i < e.length; i++) if (p(e.charCodeAt(i)) || (i > 0 && p(e.charCodeAt(i - 1)))) return i;
    return e.length;
  }
  "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?".split("").forEach(e => g.add(e.charCodeAt(0)));
  const x = s(r, b, a),
    S = s(r, b, function (e, t) {
      return l(e.toLowerCase(), t.toLowerCase(), 0, 0);
    }),
    k = new n.z6(1e4);
  function L(e, t, i = !1) {
    if ("string" != typeof e || "string" != typeof t) return null;
    let n = k.get(e);
    n || ((n = new RegExp(o.un(e), "i")), k.set(e, n));
    const s = n.exec(t);
    return s ? [{
      start: s.index,
      end: s.index + s[0].length
    }] : i ? S(e, t) : x(e, t);
  }
  function N(e, t, i, n, o, s) {
    const r = Math.min(13, e.length);
    for (; i < r; i++) {
      const r = j(e, t, i, n, o, s, !1);
      if (r) return r;
    }
    return [0, s];
  }
  function D(e) {
    if (void 0 === e) return [];
    const t = [],
      i = e[1];
    for (let n = e.length - 1; n > 1; n--) {
      const o = e[n] + i,
        s = t[t.length - 1];
      s && s.end === o ? (s.end = o + 1) : t.push({
        start: o,
        end: o + 1
      });
    }
    return t;
  }
  const I = 128;
  function E() {
    const e = [],
      t = [];
    for (let e = 0; e <= I; e++) t[e] = 0;
    for (let i = 0; i <= I; i++) e.push(t.slice(0));
    return e;
  }
  function T(e) {
    const t = [];
    for (let i = 0; i <= e; i++) t[i] = 0;
    return t;
  }
  const M = T(2 * I),
    A = T(2 * I),
    O = E(),
    P = E(),
    R = E(),
    F = !1;
  function B(e, t, i, n, o) {
    function s(e, t, i = " ") {
      for (; e.length < t;) e = i + e;
      return e;
    }
    let r = ` |   |${n.split("").map(e => s(e, 3)).join("|")}\n`;
    for (let n = 0; n <= i; n++) ((r += 0 === n ? " |" : `${t[n - 1]}|`), (r += e[n].slice(0, o + 1).map(e => s(e.toString(), 3)).join("|") + "\n"));
    return r;
  }
  function V(e, t) {
    if (t < 0 || t >= e.length) return !1;
    const i = e.codePointAt(t);
    switch (i) {
      case 95:
      case 45:
      case 46:
      case 32:
      case 47:
      case 92:
      case 39:
      case 34:
      case 58:
      case 36:
      case 60:
      case 40:
      case 91:
        return !0;
      case void 0:
        return !1;
      default:
        return !!o.C8(i);
    }
  }
  function W(e, t) {
    if (t < 0 || t >= e.length) return !1;
    switch (e.charCodeAt(t)) {
      case 32:
      case 9:
        return !0;
      default:
        return !1;
    }
  }
  function H(e, t, i) {
    return t[e] !== i[e];
  }
  var z;
  function j(e, t, i, n, o, s, r) {
    const a = e.length > I ? I : e.length,
      l = n.length > I ? I : n.length;
    if (i >= a || s >= l || a - i > l - s) return;
    if (!(function (e, t, i, n, o, s, r = !1) {
      for (; t < i && o < s;) (e[t] === n[o] && (r && (M[t] = o), (t += 1)), (o += 1));
      return t === i;
    })(t, i, a, o, s, l, !0)) return;
    !(function (e, t, i, n, o, s) {
      let r = e - 1,
        a = t - 1;
      for (; r >= i && a >= n;) (o[r] === s[a] && ((A[r] = a), r--), a--);
    })(a, l, i, s, t, o);
    let c = 1,
      d = 1,
      h = i,
      u = s;
    const g = [!1];
    for (c = 1, h = i; h < a; c++, h++) {
      const r = M[h],
        p = A[h],
        f = h + 1 < a ? A[h + 1] : l;
      for (d = r - s + 1, u = r; u < f; d++, u++) {
        let a = Number.MIN_SAFE_INTEGER,
          f = !1;
        u <= p && (a = U(e, t, h, i, n, o, u, l, s, 0 === O[c - 1][d - 1], g));
        let m = 0;
        a !== Number.MAX_SAFE_INTEGER && ((f = !0), (m = a + P[c - 1][d - 1]));
        const v = u > r,
          _ = v ? P[c][d - 1] + (O[c][d - 1] > 0 ? -5 : 0) : 0,
          b = u > r + 1 && O[c][d - 1] > 0,
          w = b ? P[c][d - 2] + (O[c][d - 2] > 0 ? -5 : 0) : 0;
        if (b && (!v || w >= _) && (!f || w >= m)) ((P[c][d] = w), (R[c][d] = 3), (O[c][d] = 0));else if (v && (!f || _ >= m)) ((P[c][d] = _), (R[c][d] = 2), (O[c][d] = 0));else {
          if (!f) throw new Error("not possible");
          ((P[c][d] = m), (R[c][d] = 1), (O[c][d] = O[c - 1][d - 1] + 1));
        }
      }
    }
    if ((F && (function (e, t, i, n) {
      ((e = e.substr(t)), (i = i.substr(n)), console.log(B(P, e, e.length, i, i.length)), console.log(B(R, e, e.length, i, i.length)), console.log(B(O, e, e.length, i, i.length)));
    })(e, i, n, s), !g[0] && !r)) return;
    (c--, d--);
    const p = [P[c][d], s];
    let f = 0,
      m = 0;
    for (; c >= 1;) {
      let e = d;
      do {
        const t = R[c][e];
        if (3 === t) e -= 2;else {
          if (2 !== t) break;
          e -= 1;
        }
      } while (e >= 1);
      (f > 1 && t[i + c - 1] === o[s + d - 1] && !H(e + s - 1, n, o) && f + 1 > O[c][e] && (e = d), e === d ? f++ : (f = 1), m || (m = e), c--, (d = e - 1), p.push(d));
    }
    l === a && (p[0] += 2);
    const v = m - a;
    return ((p[0] -= v), p);
  }
  function U(e, t, i, n, o, s, r, a, l, c, d) {
    if (t[i] !== s[r]) return Number.MIN_SAFE_INTEGER;
    let h = 1,
      u = !1;
    return (r === i - n ? (h = e[i] === o[r] ? 7 : 5) : !H(r, o, s) || (0 !== r && H(r - 1, o, s)) ? !V(s, r) || (0 !== r && V(s, r - 1)) ? (V(s, r - 1) || W(s, r - 1)) && ((h = 5), (u = !0)) : (h = 5) : ((h = e[i] === o[r] ? 7 : 5), (u = !0)), h > 1 && i === n && (d[0] = !0), u || (u = H(r, o, s) || V(s, r - 1) || W(s, r - 1)), i === n ? r > l && (h -= u ? 3 : 5) : (h += c ? (u ? 2 : 0) : u ? 0 : 1), r + 1 === a && (h -= u ? 3 : 5), h);
  }
  function $(e, t, i, n, o, s, r) {
    return (function (e, t, i, n, o, s, r, a) {
      let l = j(e, t, i, n, o, s, a);
      if (l && !r) return l;
      if (e.length >= 3) {
        const t = Math.min(7, e.length - 1);
        for (let r = i + 1; r < t; r++) {
          const t = K(e, r);
          if (t) {
            const e = j(t, t.toLowerCase(), i, n, o, s, a);
            e && ((e[0] -= 3), (!l || e[0] > l[0]) && (l = e));
          }
        }
      }
      return l;
    })(e, t, i, n, o, s, !0, r);
  }
  function K(e, t) {
    if (t + 1 >= e.length) return;
    const i = e[t],
      n = e[t + 1];
    return i !== n ? e.slice(0, t) + n + i + e.slice(t + 2) : void 0;
  }
  !(function (e) {
    ((e.Default = [-100, 0]), (e.isDefault = function (e) {
      return !e || (2 === e.length && -100 === e[0] && 0 === e[1]);
    }));
  })(z || (z = {}));
};