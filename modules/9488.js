module.exports = (e, t, i) => {
  "use strict";

  function n(e, t = 0) {
    return e[e.length - (1 + t)];
  }
  function o(e) {
    if (0 === e.length) throw new Error("Invalid tail call");
    return [e.slice(0, e.length - 1), e[e.length - 1]];
  }
  function s(e, t, i = (e, t) => e === t) {
    if (e === t) return !0;
    if (!e || !t) return !1;
    if (e.length !== t.length) return !1;
    for (let n = 0, o = e.length; n < o; n++) if (!i(e[n], t[n])) return !1;
    return !0;
  }
  function r(e, t, i) {
    let n = 0,
      o = e.length - 1;
    for (; n <= o;) {
      const s = ((n + o) / 2) | 0,
        r = i(e[s], t);
      if (r < 0) n = s + 1;else {
        if (!(r > 0)) return s;
        o = s - 1;
      }
    }
    return -(n + 1);
  }
  function a(e, t) {
    let i = 0,
      n = e.length;
    if (0 === n) return 0;
    for (; i < n;) {
      const o = Math.floor((i + n) / 2);
      t(e[o]) ? (n = o) : (i = o + 1);
    }
    return i;
  }
  function l(e, t, i) {
    if ((e |= 0) >= t.length) throw new TypeError("invalid index");
    let n = t[Math.floor(t.length * Math.random())],
      o = [],
      s = [],
      r = [];
    for (let e of t) {
      const t = i(e, n);
      t < 0 ? o.push(e) : t > 0 ? s.push(e) : r.push(e);
    }
    return e < o.length ? l(e, o, i) : e < o.length + r.length ? r[0] : l(e - (o.length + r.length), s, i);
  }
  function c(e, t) {
    const i = [];
    let n;
    for (const o of e.slice(0).sort(t)) n && 0 === t(n[0], o) ? n.push(o) : ((n = [o]), i.push(n));
    return i;
  }
  function d(e) {
    return e.filter(e => !!e);
  }
  function h(e) {
    return !Array.isArray(e) || 0 === e.length;
  }
  function u(e) {
    return Array.isArray(e) && e.length > 0;
  }
  function g(e, t = e => e) {
    const i = new Set();
    return e.filter(e => {
      const n = t(e);
      return !i.has(n) && (i.add(n), !0);
    });
  }
  function p(e, t) {
    const i = (function (e, t) {
      for (let i = e.length - 1; i >= 0; i--) {
        if (t(e[i])) return i;
      }
      return -1;
    })(e, t);
    if (-1 !== i) return e[i];
  }
  function f(e, t) {
    return e.length > 0 ? e[0] : t;
  }
  function m(e) {
    return [].concat(...e);
  }
  function v(e, t) {
    let i = "number" == typeof t ? e : 0;
    "number" == typeof t ? (i = e) : ((i = 0), (t = e));
    const n = [];
    if (i <= t) for (let e = i; e < t; e++) n.push(e);else for (let e = i; e > t; e--) n.push(e);
    return n;
  }
  function _(e, t, i) {
    const n = e.slice(0, t),
      o = e.slice(t);
    return n.concat(i, o);
  }
  function b(e, t) {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), e.unshift(t));
  }
  function w(e, t) {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), e.push(t));
  }
  function y(e) {
    return Array.isArray(e) ? e : [e];
  }
  function C(e, t, i, n) {
    const o = x(e, t),
      s = e.splice(o, i);
    return ((function (e, t, i) {
      const n = x(e, t),
        o = e.length,
        s = i.length;
      e.length = o + s;
      for (let t = o - 1; t >= n; t--) e[t + s] = e[t];
      for (let t = 0; t < s; t++) e[t + n] = i[t];
    })(e, o, n), s);
  }
  function x(e, t) {
    return t < 0 ? Math.max(t + e.length, 0) : Math.min(t, e.length);
  }
  i.d(t, {
    EB: () => g,
    Gb: () => n,
    H9: () => S,
    HW: () => l,
    JH: () => o,
    Of: () => u,
    XY: () => h,
    Xh: () => f,
    Zv: () => _,
    _2: () => y,
    al: () => w,
    dF: () => p,
    db: () => C,
    fS: () => s,
    kX: () => d,
    lG: () => a,
    ry: () => r,
    vM: () => c,
    w6: () => v,
    xH: () => m,
    zI: () => b
  });
  class S {
    constructor(e) {
      ((this.items = e), (this.firstIdx = 0), (this.lastIdx = this.items.length - 1));
    }
    takeWhile(e) {
      let t = this.firstIdx;
      for (; t < this.items.length && e(this.items[t]);) t++;
      const i = t === this.firstIdx ? null : this.items.slice(this.firstIdx, t);
      return ((this.firstIdx = t), i);
    }
    takeFromEndWhile(e) {
      let t = this.lastIdx;
      for (; t >= 0 && e(this.items[t]);) t--;
      const i = t === this.lastIdx ? null : this.items.slice(t + 1, this.lastIdx + 1);
      return ((this.lastIdx = t), i);
    }
    peek() {
      return this.items[this.firstIdx];
    }
  }
};