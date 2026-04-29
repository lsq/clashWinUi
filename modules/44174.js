module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    WE: () => zt,
    qx: () => Qt,
    yO: () => Ht
  });
  var n = i(17301),
    o = i(4669),
    s = i(5976),
    r = i(97295),
    a = i(70666),
    l = i(64141),
    c = i(50187),
    d = i(24314),
    h = i(3860),
    u = i(84973),
    g = i(95215);
  class p {
    constructor() {
      ((this.spacesDiff = 0), (this.looksLikeAlignment = !1));
    }
  }
  function f(e, t, i, n, o) {
    let s;
    for (o.spacesDiff = 0, o.looksLikeAlignment = !1, s = 0; s < t && s < n; s++) {
      if (e.charCodeAt(s) !== i.charCodeAt(s)) break;
    }
    let r = 0,
      a = 0;
    for (let i = s; i < t; i++) {
      32 === e.charCodeAt(i) ? r++ : a++;
    }
    let l = 0,
      c = 0;
    for (let e = s; e < n; e++) {
      32 === i.charCodeAt(e) ? l++ : c++;
    }
    if (r > 0 && a > 0) return;
    if (l > 0 && c > 0) return;
    let d = Math.abs(a - c),
      h = Math.abs(r - l);
    if (0 === d) return ((o.spacesDiff = h), void (h > 0 && 0 <= l - 1 && l - 1 < e.length && l < i.length && 32 !== i.charCodeAt(l) && 32 === e.charCodeAt(l - 1) && 44 === e.charCodeAt(e.length - 1) && (o.looksLikeAlignment = !0)));
    h % d != 0 || (o.spacesDiff = h / d);
  }
  function m(e, t, i) {
    const n = Math.min(e.getLineCount(), 1e4);
    let o = 0,
      s = 0,
      r = "",
      a = 0;
    const l = [2, 4, 6, 8, 3, 5, 7];
    let c = [0, 0, 0, 0, 0, 0, 0, 0, 0],
      d = new p();
    for (let l = 1; l <= n; l++) {
      let n = e.getLineLength(l),
        h = e.getLineContent(l);
      const u = n <= 65536;
      let g = !1,
        p = 0,
        m = 0,
        v = 0;
      for (let t = 0, i = n; t < i; t++) {
        let i = u ? h.charCodeAt(t) : e.getLineCharCode(l, t);
        if (9 === i) v++;else {
          if (32 !== i) {
            ((g = !0), (p = t));
            break;
          }
          m++;
        }
      }
      if (!g) continue;
      if ((v > 0 ? o++ : m > 1 && s++, f(r, a, h, p, d), d.looksLikeAlignment && (!i || t !== d.spacesDiff))) continue;
      let _ = d.spacesDiff;
      (_ <= 8 && c[_]++, (r = h), (a = p));
    }
    let h = i;
    o !== s && (h = o < s);
    let u = t;
    if (h) {
      let e = h ? 0 : 0.1 * n;
      (l.forEach(t => {
        let i = c[t];
        i > e && ((e = i), (u = t));
      }), 4 === u && c[4] > 0 && c[2] > 0 && c[2] >= c[4] / 2 && (u = 2));
    }
    return {
      insertSpaces: h,
      tabSize: u
    };
  }
  function v(e) {
    return (1 & e.metadata) >>> 0;
  }
  function _(e, t) {
    e.metadata = (254 & e.metadata) | (t << 0);
  }
  function b(e) {
    return (2 & e.metadata) >>> 1 == 1;
  }
  function w(e, t) {
    e.metadata = (253 & e.metadata) | ((t ? 1 : 0) << 1);
  }
  function y(e) {
    return (4 & e.metadata) >>> 2 == 1;
  }
  function C(e, t) {
    e.metadata = (251 & e.metadata) | ((t ? 1 : 0) << 2);
  }
  function x(e, t) {
    e.metadata = (231 & e.metadata) | (t << 3);
  }
  function S(e, t) {
    e.metadata = (223 & e.metadata) | ((t ? 1 : 0) << 5);
  }
  class k {
    constructor(e, t, i) {
      ((this.metadata = 0), (this.parent = this), (this.left = this), (this.right = this), _(this, 1), (this.start = t), (this.end = i), (this.delta = 0), (this.maxEnd = i), (this.id = e), (this.ownerId = 0), (this.options = null), C(this, !1), x(this, 1), S(this, !1), (this.cachedVersionId = 0), (this.cachedAbsoluteStart = t), (this.cachedAbsoluteEnd = i), (this.range = null), w(this, !1));
    }
    reset(e, t, i, n) {
      ((this.start = t), (this.end = i), (this.maxEnd = i), (this.cachedVersionId = e), (this.cachedAbsoluteStart = t), (this.cachedAbsoluteEnd = i), (this.range = n));
    }
    setOptions(e) {
      this.options = e;
      let t = this.options.className;
      (C(this, "squiggly-error" === t || "squiggly-warning" === t || "squiggly-info" === t), x(this, this.options.stickiness), S(this, this.options.collapseOnReplaceEdit));
    }
    setCachedOffsets(e, t, i) {
      (this.cachedVersionId !== i && (this.range = null), (this.cachedVersionId = i), (this.cachedAbsoluteStart = e), (this.cachedAbsoluteEnd = t));
    }
    detach() {
      ((this.parent = null), (this.left = null), (this.right = null));
    }
  }
  const L = new k(null, 0, 0);
  ((L.parent = L), (L.left = L), (L.right = L), _(L, 0));
  class N {
    constructor() {
      ((this.root = L), (this.requestNormalizeDelta = !1));
    }
    intervalSearch(e, t, i, n, o) {
      return this.root === L ? [] : (function (e, t, i, n, o, s) {
        let r = e.root,
          a = 0,
          l = 0,
          c = 0,
          d = 0,
          h = [],
          u = 0;
        for (; r !== L;) if (b(r)) (w(r.left, !1), w(r.right, !1), r === r.parent.right && (a -= r.parent.delta), (r = r.parent));else {
          if (!b(r.left)) {
            if (((l = a + r.maxEnd), l < t)) {
              w(r, !0);
              continue;
            }
            if (r.left !== L) {
              r = r.left;
              continue;
            }
          }
          if (((c = a + r.start), c > i)) w(r, !0);else {
            if (((d = a + r.end), d >= t)) {
              r.setCachedOffsets(c, d, s);
              let e = !0;
              (n && r.ownerId && r.ownerId !== n && (e = !1), o && y(r) && (e = !1), e && (h[u++] = r));
            }
            (w(r, !0), r.right === L || b(r.right) || ((a += r.delta), (r = r.right)));
          }
        }
        return (w(e.root, !1), h);
      })(this, e, t, i, n, o);
    }
    search(e, t, i) {
      return this.root === L ? [] : (function (e, t, i, n) {
        let o = e.root,
          s = 0,
          r = 0,
          a = 0,
          l = [],
          c = 0;
        for (; o !== L;) {
          if (b(o)) {
            (w(o.left, !1), w(o.right, !1), o === o.parent.right && (s -= o.parent.delta), (o = o.parent));
            continue;
          }
          if (o.left !== L && !b(o.left)) {
            o = o.left;
            continue;
          }
          ((r = s + o.start), (a = s + o.end), o.setCachedOffsets(r, a, n));
          let e = !0;
          (t && o.ownerId && o.ownerId !== t && (e = !1), i && y(o) && (e = !1), e && (l[c++] = o), w(o, !0), o.right === L || b(o.right) || ((s += o.delta), (o = o.right)));
        }
        return (w(e.root, !1), l);
      })(this, e, t, i);
    }
    collectNodesFromOwner(e) {
      return (function (e, t) {
        let i = e.root,
          n = [],
          o = 0;
        for (; i !== L;) b(i) ? (w(i.left, !1), w(i.right, !1), (i = i.parent)) : i.left === L || b(i.left) ? (i.ownerId === t && (n[o++] = i), w(i, !0), i.right === L || b(i.right) || (i = i.right)) : (i = i.left);
        return (w(e.root, !1), n);
      })(this, e);
    }
    collectNodesPostOrder() {
      return (function (e) {
        let t = e.root,
          i = [],
          n = 0;
        for (; t !== L;) b(t) ? (w(t.left, !1), w(t.right, !1), (t = t.parent)) : t.left === L || b(t.left) ? t.right === L || b(t.right) ? ((i[n++] = t), w(t, !0)) : (t = t.right) : (t = t.left);
        return (w(e.root, !1), i);
      })(this);
    }
    insert(e) {
      (E(this, e), this._normalizeDeltaIfNecessary());
    }
    delete(e) {
      (T(this, e), this._normalizeDeltaIfNecessary());
    }
    resolveNode(e, t) {
      const i = e;
      let n = 0;
      for (; e !== this.root;) (e === e.parent.right && (n += e.parent.delta), (e = e.parent));
      const o = i.start + n,
        s = i.end + n;
      i.setCachedOffsets(o, s, t);
    }
    acceptReplace(e, t, i, n) {
      const o = (function (e, t, i) {
        let n = e.root,
          o = 0,
          s = 0,
          r = 0,
          a = 0,
          l = [],
          c = 0;
        for (; n !== L;) if (b(n)) (w(n.left, !1), w(n.right, !1), n === n.parent.right && (o -= n.parent.delta), (n = n.parent));else {
          if (!b(n.left)) {
            if (((s = o + n.maxEnd), s < t)) {
              w(n, !0);
              continue;
            }
            if (n.left !== L) {
              n = n.left;
              continue;
            }
          }
          ((r = o + n.start), r > i ? w(n, !0) : ((a = o + n.end), a >= t && (n.setCachedOffsets(r, a, 0), (l[c++] = n)), w(n, !0), n.right === L || b(n.right) || ((o += n.delta), (n = n.right))));
        }
        return (w(e.root, !1), l);
      })(this, e, e + t);
      for (let e = 0, t = o.length; e < t; e++) {
        T(this, o[e]);
      }
      (this._normalizeDeltaIfNecessary(), (function (e, t, i, n) {
        let o = e.root,
          s = 0,
          r = 0,
          a = 0;
        const l = n - (i - t);
        for (; o !== L;) if (b(o)) (w(o.left, !1), w(o.right, !1), o === o.parent.right && (s -= o.parent.delta), R(o), (o = o.parent));else {
          if (!b(o.left)) {
            if (((r = s + o.maxEnd), r < t)) {
              w(o, !0);
              continue;
            }
            if (o.left !== L) {
              o = o.left;
              continue;
            }
          }
          ((a = s + o.start), a > i ? ((o.start += l), (o.end += l), (o.delta += l), (o.delta < -1073741824 || o.delta > 1073741824) && (e.requestNormalizeDelta = !0), w(o, !0)) : (w(o, !0), o.right === L || b(o.right) || ((s += o.delta), (o = o.right))));
        }
        w(e.root, !1);
      })(this, e, e + t, i), this._normalizeDeltaIfNecessary());
      for (let s = 0, r = o.length; s < r; s++) {
        const r = o[s];
        ((r.start = r.cachedAbsoluteStart), (r.end = r.cachedAbsoluteEnd), I(r, e, e + t, i, n), (r.maxEnd = r.end), E(this, r));
      }
      this._normalizeDeltaIfNecessary();
    }
    _normalizeDeltaIfNecessary() {
      this.requestNormalizeDelta && ((this.requestNormalizeDelta = !1), (function (e) {
        let t = e.root,
          i = 0;
        for (; t !== L;) t.left === L || b(t.left) ? t.right === L || b(t.right) ? ((t.start = i + t.start), (t.end = i + t.end), (t.delta = 0), R(t), w(t, !0), w(t.left, !1), w(t.right, !1), t === t.parent.right && (i -= t.parent.delta), (t = t.parent)) : ((i += t.delta), (t = t.right)) : (t = t.left);
        w(e.root, !1);
      })(this));
    }
  }
  function D(e, t, i, n) {
    return e < i || (!(e > i) && 1 !== n && (2 === n || t));
  }
  function I(e, t, i, n, o) {
    const s = (function (e) {
        return (24 & e.metadata) >>> 3;
      })(e),
      r = 0 === s || 2 === s,
      a = 1 === s || 2 === s,
      l = i - t,
      c = n,
      d = Math.min(l, c),
      h = e.start;
    let u = !1;
    const g = e.end;
    let p = !1;
    t <= h && g <= i && (function (e) {
      return (32 & e.metadata) >>> 5 == 1;
    })(e) && ((e.start = t), (u = !0), (e.end = t), (p = !0));
    {
      const e = o ? 1 : l > 0 ? 2 : 0;
      (!u && D(h, r, t, e) && (u = !0), !p && D(g, a, t, e) && (p = !0));
    }
    if (d > 0 && !o) {
      const e = l > c ? 2 : 0;
      (!u && D(h, r, t + d, e) && (u = !0), !p && D(g, a, t + d, e) && (p = !0));
    }
    {
      const n = o ? 1 : 0;
      (!u && D(h, r, i, n) && ((e.start = t + c), (u = !0)), !p && D(g, a, i, n) && ((e.end = t + c), (p = !0)));
    }
    const f = c - l;
    (u || (e.start = Math.max(0, h + f)), p || (e.end = Math.max(0, g + f)), e.start > e.end && (e.end = e.start));
  }
  function E(e, t) {
    if (e.root === L) return ((t.parent = L), (t.left = L), (t.right = L), _(t, 0), (e.root = t), e.root);
    (!(function (e, t) {
      let i = 0,
        n = e.root;
      const o = t.start,
        s = t.end;
      for (;;) {
        if (B(o, s, n.start + i, n.end + i) < 0) {
          if (n.left === L) {
            ((t.start -= i), (t.end -= i), (t.maxEnd -= i), (n.left = t));
            break;
          }
          n = n.left;
        } else {
          if (n.right === L) {
            ((t.start -= i + n.delta), (t.end -= i + n.delta), (t.maxEnd -= i + n.delta), (n.right = t));
            break;
          }
          ((i += n.delta), (n = n.right));
        }
      }
      ((t.parent = n), (t.left = L), (t.right = L), _(t, 1));
    })(e, t), F(t.parent));
    let i = t;
    for (; i !== e.root && 1 === v(i.parent);) if (i.parent === i.parent.parent.left) {
      const t = i.parent.parent.right;
      1 === v(t) ? (_(i.parent, 0), _(t, 0), _(i.parent.parent, 1), (i = i.parent.parent)) : (i === i.parent.right && ((i = i.parent), A(e, i)), _(i.parent, 0), _(i.parent.parent, 1), O(e, i.parent.parent));
    } else {
      const t = i.parent.parent.left;
      1 === v(t) ? (_(i.parent, 0), _(t, 0), _(i.parent.parent, 1), (i = i.parent.parent)) : (i === i.parent.left && ((i = i.parent), O(e, i)), _(i.parent, 0), _(i.parent.parent, 1), A(e, i.parent.parent));
    }
    return (_(e.root, 0), t);
  }
  function T(e, t) {
    let i, n;
    if ((t.left === L ? ((i = t.right), (n = t), (i.delta += t.delta), (i.delta < -1073741824 || i.delta > 1073741824) && (e.requestNormalizeDelta = !0), (i.start += t.delta), (i.end += t.delta)) : t.right === L ? ((i = t.left), (n = t)) : ((n = (function (e) {
      for (; e.left !== L;) e = e.left;
      return e;
    })(t.right)), (i = n.right), (i.start += n.delta), (i.end += n.delta), (i.delta += n.delta), (i.delta < -1073741824 || i.delta > 1073741824) && (e.requestNormalizeDelta = !0), (n.start += t.delta), (n.end += t.delta), (n.delta = t.delta), (n.delta < -1073741824 || n.delta > 1073741824) && (e.requestNormalizeDelta = !0)), n === e.root)) return ((e.root = i), _(i, 0), t.detach(), M(), R(i), void (e.root.parent = L));
    let o,
      s = 1 === v(n);
    if ((n === n.parent.left ? (n.parent.left = i) : (n.parent.right = i), n === t ? (i.parent = n.parent) : (n.parent === t ? (i.parent = n) : (i.parent = n.parent), (n.left = t.left), (n.right = t.right), (n.parent = t.parent), _(n, v(t)), t === e.root ? (e.root = n) : t === t.parent.left ? (t.parent.left = n) : (t.parent.right = n), n.left !== L && (n.left.parent = n), n.right !== L && (n.right.parent = n)), t.detach(), s)) return (F(i.parent), n !== t && (F(n), F(n.parent)), void M());
    for (F(i), F(i.parent), n !== t && (F(n), F(n.parent)); i !== e.root && 0 === v(i);) i === i.parent.left ? ((o = i.parent.right), 1 === v(o) && (_(o, 0), _(i.parent, 1), A(e, i.parent), (o = i.parent.right)), 0 === v(o.left) && 0 === v(o.right) ? (_(o, 1), (i = i.parent)) : (0 === v(o.right) && (_(o.left, 0), _(o, 1), O(e, o), (o = i.parent.right)), _(o, v(i.parent)), _(i.parent, 0), _(o.right, 0), A(e, i.parent), (i = e.root))) : ((o = i.parent.left), 1 === v(o) && (_(o, 0), _(i.parent, 1), O(e, i.parent), (o = i.parent.left)), 0 === v(o.left) && 0 === v(o.right) ? (_(o, 1), (i = i.parent)) : (0 === v(o.left) && (_(o.right, 0), _(o, 1), A(e, o), (o = i.parent.left)), _(o, v(i.parent)), _(i.parent, 0), _(o.left, 0), O(e, i.parent), (i = e.root)));
    (_(i, 0), M());
  }
  function M() {
    ((L.parent = L), (L.delta = 0), (L.start = 0), (L.end = 0));
  }
  function A(e, t) {
    const i = t.right;
    ((i.delta += t.delta), (i.delta < -1073741824 || i.delta > 1073741824) && (e.requestNormalizeDelta = !0), (i.start += t.delta), (i.end += t.delta), (t.right = i.left), i.left !== L && (i.left.parent = t), (i.parent = t.parent), t.parent === L ? (e.root = i) : t === t.parent.left ? (t.parent.left = i) : (t.parent.right = i), (i.left = t), (t.parent = i), R(t), R(i));
  }
  function O(e, t) {
    const i = t.left;
    ((t.delta -= i.delta), (t.delta < -1073741824 || t.delta > 1073741824) && (e.requestNormalizeDelta = !0), (t.start -= i.delta), (t.end -= i.delta), (t.left = i.right), i.right !== L && (i.right.parent = t), (i.parent = t.parent), t.parent === L ? (e.root = i) : t === t.parent.right ? (t.parent.right = i) : (t.parent.left = i), (i.right = t), (t.parent = i), R(t), R(i));
  }
  function P(e) {
    let t = e.end;
    if (e.left !== L) {
      const i = e.left.maxEnd;
      i > t && (t = i);
    }
    if (e.right !== L) {
      const i = e.right.maxEnd + e.delta;
      i > t && (t = i);
    }
    return t;
  }
  function R(e) {
    e.maxEnd = P(e);
  }
  function F(e) {
    for (; e !== L;) {
      const t = P(e);
      if (e.maxEnd === t) return;
      ((e.maxEnd = t), (e = e.parent));
    }
  }
  function B(e, t, i, n) {
    return e === i ? t - n : e - i;
  }
  class V {
    constructor(e, t) {
      ((this.piece = e), (this.color = t), (this.size_left = 0), (this.lf_left = 0), (this.parent = this), (this.left = this), (this.right = this));
    }
    next() {
      if (this.right !== W) return H(this.right);
      let e = this;
      for (; e.parent !== W && e.parent.left !== e;) e = e.parent;
      return e.parent === W ? W : e.parent;
    }
    prev() {
      if (this.left !== W) return z(this.left);
      let e = this;
      for (; e.parent !== W && e.parent.right !== e;) e = e.parent;
      return e.parent === W ? W : e.parent;
    }
    detach() {
      ((this.parent = null), (this.left = null), (this.right = null));
    }
  }
  const W = new V(null, 0);
  function H(e) {
    for (; e.left !== W;) e = e.left;
    return e;
  }
  function z(e) {
    for (; e.right !== W;) e = e.right;
    return e;
  }
  function j(e) {
    return e === W ? 0 : e.size_left + e.piece.length + j(e.right);
  }
  function U(e) {
    return e === W ? 0 : e.lf_left + e.piece.lineFeedCnt + U(e.right);
  }
  function $() {
    W.parent = W;
  }
  function K(e, t) {
    let i = t.right;
    ((i.size_left += t.size_left + (t.piece ? t.piece.length : 0)), (i.lf_left += t.lf_left + (t.piece ? t.piece.lineFeedCnt : 0)), (t.right = i.left), i.left !== W && (i.left.parent = t), (i.parent = t.parent), t.parent === W ? (e.root = i) : t.parent.left === t ? (t.parent.left = i) : (t.parent.right = i), (i.left = t), (t.parent = i));
  }
  function q(e, t) {
    let i = t.left;
    ((t.left = i.right), i.right !== W && (i.right.parent = t), (i.parent = t.parent), (t.size_left -= i.size_left + (i.piece ? i.piece.length : 0)), (t.lf_left -= i.lf_left + (i.piece ? i.piece.lineFeedCnt : 0)), t.parent === W ? (e.root = i) : t === t.parent.right ? (t.parent.right = i) : (t.parent.left = i), (i.right = t), (t.parent = i));
  }
  function Z(e, t) {
    let i, n;
    if ((t.left === W ? ((n = t), (i = n.right)) : t.right === W ? ((n = t), (i = n.left)) : ((n = H(t.right)), (i = n.right)), n === e.root)) return ((e.root = i), (i.color = 0), t.detach(), $(), void (e.root.parent = W));
    let o,
      s = 1 === n.color;
    if ((n === n.parent.left ? (n.parent.left = i) : (n.parent.right = i), n === t ? ((i.parent = n.parent), Q(e, i)) : (n.parent === t ? (i.parent = n) : (i.parent = n.parent), Q(e, i), (n.left = t.left), (n.right = t.right), (n.parent = t.parent), (n.color = t.color), t === e.root ? (e.root = n) : t === t.parent.left ? (t.parent.left = n) : (t.parent.right = n), n.left !== W && (n.left.parent = n), n.right !== W && (n.right.parent = n), (n.size_left = t.size_left), (n.lf_left = t.lf_left), Q(e, n)), t.detach(), i.parent.left === i)) {
      let t = j(i),
        n = U(i);
      if (t !== i.parent.size_left || n !== i.parent.lf_left) {
        let o = t - i.parent.size_left,
          s = n - i.parent.lf_left;
        ((i.parent.size_left = t), (i.parent.lf_left = n), Y(e, i.parent, o, s));
      }
    }
    if ((Q(e, i.parent), s)) $();else {
      for (; i !== e.root && 0 === i.color;) i === i.parent.left ? ((o = i.parent.right), 1 === o.color && ((o.color = 0), (i.parent.color = 1), K(e, i.parent), (o = i.parent.right)), 0 === o.left.color && 0 === o.right.color ? ((o.color = 1), (i = i.parent)) : (0 === o.right.color && ((o.left.color = 0), (o.color = 1), q(e, o), (o = i.parent.right)), (o.color = i.parent.color), (i.parent.color = 0), (o.right.color = 0), K(e, i.parent), (i = e.root))) : ((o = i.parent.left), 1 === o.color && ((o.color = 0), (i.parent.color = 1), q(e, i.parent), (o = i.parent.left)), 0 === o.left.color && 0 === o.right.color ? ((o.color = 1), (i = i.parent)) : (0 === o.left.color && ((o.right.color = 0), (o.color = 1), K(e, o), (o = i.parent.left)), (o.color = i.parent.color), (i.parent.color = 0), (o.left.color = 0), q(e, i.parent), (i = e.root)));
      ((i.color = 0), $());
    }
  }
  function G(e, t) {
    for (Q(e, t); t !== e.root && 1 === t.parent.color;) if (t.parent === t.parent.parent.left) {
      const i = t.parent.parent.right;
      1 === i.color ? ((t.parent.color = 0), (i.color = 0), (t.parent.parent.color = 1), (t = t.parent.parent)) : (t === t.parent.right && K(e, (t = t.parent)), (t.parent.color = 0), (t.parent.parent.color = 1), q(e, t.parent.parent));
    } else {
      const i = t.parent.parent.left;
      1 === i.color ? ((t.parent.color = 0), (i.color = 0), (t.parent.parent.color = 1), (t = t.parent.parent)) : (t === t.parent.left && q(e, (t = t.parent)), (t.parent.color = 0), (t.parent.parent.color = 1), K(e, t.parent.parent));
    }
    e.root.color = 0;
  }
  function Y(e, t, i, n) {
    for (; t !== e.root && t !== W;) (t.parent.left === t && ((t.parent.size_left += i), (t.parent.lf_left += n)), (t = t.parent));
  }
  function Q(e, t) {
    let i = 0,
      n = 0;
    if (t !== e.root) {
      for (; t !== e.root && t === t.parent.right;) t = t.parent;
      if (t !== e.root) for (i = j((t = t.parent).left) - t.size_left, n = U(t.left) - t.lf_left, t.size_left += i, t.lf_left += n; t !== e.root && (0 !== i || 0 !== n);) (t.parent.left === t && ((t.parent.size_left += i), (t.parent.lf_left += n)), (t = t.parent));
    }
  }
  ((W.parent = W), (W.left = W), (W.right = W), (W.color = 0));
  var X = i(77277);
  const J = 65535;
  function ee(e) {
    let t;
    return ((t = e[e.length - 1] < 65536 ? new Uint16Array(e.length) : new Uint32Array(e.length)), t.set(e, 0), t);
  }
  class te {
    constructor(e, t, i, n, o) {
      ((this.lineStarts = e), (this.cr = t), (this.lf = i), (this.crlf = n), (this.isBasicASCII = o));
    }
  }
  function ie(e, t = !0) {
    let i = [0],
      n = 1;
    for (let t = 0, o = e.length; t < o; t++) {
      const s = e.charCodeAt(t);
      13 === s ? t + 1 < o && 10 === e.charCodeAt(t + 1) ? ((i[n++] = t + 2), t++) : (i[n++] = t + 1) : 10 === s && (i[n++] = t + 1);
    }
    return t ? ee(i) : i;
  }
  class ne {
    constructor(e, t, i, n, o) {
      ((this.bufferIndex = e), (this.start = t), (this.end = i), (this.lineFeedCnt = n), (this.length = o));
    }
  }
  class oe {
    constructor(e, t) {
      ((this.buffer = e), (this.lineStarts = t));
    }
  }
  class se {
    constructor(e, t) {
      ((this._pieces = []), (this._tree = e), (this._BOM = t), (this._index = 0), e.root !== W && e.iterate(e.root, e => (e !== W && this._pieces.push(e.piece), !0)));
    }
    read() {
      return 0 === this._pieces.length ? 0 === this._index ? (this._index++, this._BOM) : null : this._index > this._pieces.length - 1 ? null : 0 === this._index ? this._BOM + this._tree.getPieceContent(this._pieces[this._index++]) : this._tree.getPieceContent(this._pieces[this._index++]);
    }
  }
  class re {
    constructor(e) {
      ((this._limit = e), (this._cache = []));
    }
    get(e) {
      for (let t = this._cache.length - 1; t >= 0; t--) {
        let i = this._cache[t];
        if (i.nodeStartOffset <= e && i.nodeStartOffset + i.node.piece.length >= e) return i;
      }
      return null;
    }
    get2(e) {
      for (let t = this._cache.length - 1; t >= 0; t--) {
        let i = this._cache[t];
        if (i.nodeStartLineNumber && i.nodeStartLineNumber < e && i.nodeStartLineNumber + i.node.piece.lineFeedCnt >= e) return i;
      }
      return null;
    }
    set(e) {
      (this._cache.length >= this._limit && this._cache.shift(), this._cache.push(e));
    }
    validate(e) {
      let t = !1,
        i = this._cache;
      for (let n = 0; n < i.length; n++) {
        let o = i[n];
        (null === o.node.parent || o.nodeStartOffset >= e) && ((i[n] = null), (t = !0));
      }
      if (t) {
        let e = [];
        for (const t of i) null !== t && e.push(t);
        this._cache = e;
      }
    }
  }
  class ae {
    constructor(e, t, i) {
      this.create(e, t, i);
    }
    create(e, t, i) {
      ((this._buffers = [new oe("", [0])]), (this._lastChangeBufferPos = {
        line: 0,
        column: 0
      }), (this.root = W), (this._lineCnt = 1), (this._length = 0), (this._EOL = t), (this._EOLLength = t.length), (this._EOLNormalized = i));
      let n = null;
      for (let t = 0, i = e.length; t < i; t++) if (e[t].buffer.length > 0) {
        e[t].lineStarts || (e[t].lineStarts = ie(e[t].buffer));
        let i = new ne(t + 1, {
          line: 0,
          column: 0
        }, {
          line: e[t].lineStarts.length - 1,
          column: e[t].buffer.length - e[t].lineStarts[e[t].lineStarts.length - 1]
        }, e[t].lineStarts.length - 1, e[t].buffer.length);
        (this._buffers.push(e[t]), (n = this.rbInsertRight(n, i)));
      }
      ((this._searchCache = new re(1)), (this._lastVisitedLine = {
        lineNumber: 0,
        value: ""
      }), this.computeBufferMetadata());
    }
    normalizeEOL(e) {
      let t = 65535 - Math.floor(21845),
        i = 2 * t,
        n = "",
        o = 0,
        s = [];
      if ((this.iterate(this.root, r => {
        let a = this.getNodeContent(r),
          l = a.length;
        if (o <= t || o + l < i) return ((n += a), (o += l), !0);
        let c = n.replace(/\r\n|\r|\n/g, e);
        return (s.push(new oe(c, ie(c))), (n = a), (o = l), !0);
      }), o > 0)) {
        let t = n.replace(/\r\n|\r|\n/g, e);
        s.push(new oe(t, ie(t)));
      }
      this.create(s, e, !0);
    }
    getEOL() {
      return this._EOL;
    }
    setEOL(e) {
      ((this._EOL = e), (this._EOLLength = this._EOL.length), this.normalizeEOL(e));
    }
    createSnapshot(e) {
      return new se(this, e);
    }
    getOffsetAt(e, t) {
      let i = 0,
        n = this.root;
      for (; n !== W;) if (n.left !== W && n.lf_left + 1 >= e) n = n.left;else {
        if (n.lf_left + n.piece.lineFeedCnt + 1 >= e) {
          return ((i += n.size_left), i + (this.getAccumulatedValue(n, e - n.lf_left - 2) + t - 1));
        }
        ((e -= n.lf_left + n.piece.lineFeedCnt), (i += n.size_left + n.piece.length), (n = n.right));
      }
      return i;
    }
    getPositionAt(e) {
      ((e = Math.floor(e)), (e = Math.max(0, e)));
      let t = this.root,
        i = 0,
        n = e;
      for (; t !== W;) if (0 !== t.size_left && t.size_left >= e) t = t.left;else {
        if (t.size_left + t.piece.length >= e) {
          let o = this.getIndexOf(t, e - t.size_left);
          if (((i += t.lf_left + o.index), 0 === o.index)) {
            let e = n - this.getOffsetAt(i + 1, 1);
            return new c.L(i + 1, e + 1);
          }
          return new c.L(i + 1, o.remainder + 1);
        }
        if (((e -= t.size_left + t.piece.length), (i += t.lf_left + t.piece.lineFeedCnt), t.right === W)) {
          let t = n - e - this.getOffsetAt(i + 1, 1);
          return new c.L(i + 1, t + 1);
        }
        t = t.right;
      }
      return new c.L(1, 1);
    }
    getValueInRange(e, t) {
      if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return "";
      let i = this.nodeAt2(e.startLineNumber, e.startColumn),
        n = this.nodeAt2(e.endLineNumber, e.endColumn),
        o = this.getValueInRange2(i, n);
      return t ? t === this._EOL && this._EOLNormalized && t === this.getEOL() && this._EOLNormalized ? o : o.replace(/\r\n|\r|\n/g, t) : o;
    }
    getValueInRange2(e, t) {
      if (e.node === t.node) {
        let i = e.node,
          n = this._buffers[i.piece.bufferIndex].buffer,
          o = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
        return n.substring(o + e.remainder, o + t.remainder);
      }
      let i = e.node,
        n = this._buffers[i.piece.bufferIndex].buffer,
        o = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start),
        s = n.substring(o + e.remainder, o + i.piece.length);
      for (i = i.next(); i !== W;) {
        let e = this._buffers[i.piece.bufferIndex].buffer,
          n = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
        if (i === t.node) {
          s += e.substring(n, n + t.remainder);
          break;
        }
        ((s += e.substr(n, i.piece.length)), (i = i.next()));
      }
      return s;
    }
    getLinesContent() {
      let e = [],
        t = 0,
        i = "",
        n = !1;
      return (this.iterate(this.root, o => {
        if (o === W) return !0;
        const s = o.piece;
        let r = s.length;
        if (0 === r) return !0;
        const a = this._buffers[s.bufferIndex].buffer,
          l = this._buffers[s.bufferIndex].lineStarts,
          c = s.start.line,
          d = s.end.line;
        let h = l[c] + s.start.column;
        if (n && (10 === a.charCodeAt(h) && (h++, r--), (e[t++] = i), (i = ""), (n = !1), 0 === r)) return !0;
        if (c === d) return (this._EOLNormalized || 13 !== a.charCodeAt(h + r - 1) ? (i += a.substr(h, r)) : ((n = !0), (i += a.substr(h, r - 1))), !0);
        ((i += this._EOLNormalized ? a.substring(h, Math.max(h, l[c + 1] - this._EOLLength)) : a.substring(h, l[c + 1]).replace(/(\r\n|\r|\n)$/, "")), (e[t++] = i));
        for (let n = c + 1; n < d; n++) ((i = this._EOLNormalized ? a.substring(l[n], l[n + 1] - this._EOLLength) : a.substring(l[n], l[n + 1]).replace(/(\r\n|\r|\n)$/, "")), (e[t++] = i));
        return (this._EOLNormalized || 13 !== a.charCodeAt(l[d] + s.end.column - 1) ? (i = a.substr(l[d], s.end.column)) : ((n = !0), 0 === s.end.column ? t-- : (i = a.substr(l[d], s.end.column - 1))), !0);
      }), n && ((e[t++] = i), (i = "")), (e[t++] = i), e);
    }
    getLength() {
      return this._length;
    }
    getLineCount() {
      return this._lineCnt;
    }
    getLineContent(e) {
      return (this._lastVisitedLine.lineNumber === e || ((this._lastVisitedLine.lineNumber = e), e === this._lineCnt ? (this._lastVisitedLine.value = this.getLineRawContent(e)) : this._EOLNormalized ? (this._lastVisitedLine.value = this.getLineRawContent(e, this._EOLLength)) : (this._lastVisitedLine.value = this.getLineRawContent(e).replace(/(\r\n|\r|\n)$/, ""))), this._lastVisitedLine.value);
    }
    _getCharCode(e) {
      if (e.remainder === e.node.piece.length) {
        let t = e.node.next();
        if (!t) return 0;
        let i = this._buffers[t.piece.bufferIndex],
          n = this.offsetInBuffer(t.piece.bufferIndex, t.piece.start);
        return i.buffer.charCodeAt(n);
      }
      {
        let t = this._buffers[e.node.piece.bufferIndex],
          i = this.offsetInBuffer(e.node.piece.bufferIndex, e.node.piece.start) + e.remainder;
        return t.buffer.charCodeAt(i);
      }
    }
    getLineCharCode(e, t) {
      let i = this.nodeAt2(e, t + 1);
      return this._getCharCode(i);
    }
    getLineLength(e) {
      if (e === this.getLineCount()) {
        let t = this.getOffsetAt(e, 1);
        return this.getLength() - t;
      }
      return (this.getOffsetAt(e + 1, 1) - this.getOffsetAt(e, 1) - this._EOLLength);
    }
    findMatchesInNode(e, t, i, n, o, s, r, a, l, c, h) {
      let u,
        g,
        p,
        f = this._buffers[e.piece.bufferIndex],
        m = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start),
        v = this.offsetInBuffer(e.piece.bufferIndex, o),
        _ = this.offsetInBuffer(e.piece.bufferIndex, s),
        b = {
          line: 0,
          column: 0
        };
      t._wordSeparators ? ((g = f.buffer.substring(v, _)), (p = e => e + v), t.reset(0)) : ((g = f.buffer), (p = e => e), t.reset(v));
      do {
        if (((u = t.next(g)), u)) {
          if (p(u.index) >= _) return c;
          this.positionInBuffer(e, p(u.index) - m, b);
          let t = this.getLineFeedCnt(e.piece.bufferIndex, o, b),
            s = b.line === o.line ? b.column - o.column + n : b.column + 1,
            r = s + u[0].length;
          if (((h[c++] = (0, X.iE)(new d.e(i + t, s, i + t, r), u, a)), p(u.index) + u[0].length >= _)) return c;
          if (c >= l) return c;
        }
      } while (u);
      return c;
    }
    findMatchesLineByLine(e, t, i, n) {
      const o = [];
      let s = 0;
      const r = new X.sz(t.wordSeparators, t.regex);
      let a = this.nodeAt2(e.startLineNumber, e.startColumn);
      if (null === a) return [];
      let l = this.nodeAt2(e.endLineNumber, e.endColumn);
      if (null === l) return [];
      let c = this.positionInBuffer(a.node, a.remainder),
        d = this.positionInBuffer(l.node, l.remainder);
      if (a.node === l.node) return (this.findMatchesInNode(a.node, r, e.startLineNumber, e.startColumn, c, d, t, i, n, s, o), o);
      let h = e.startLineNumber,
        u = a.node;
      for (; u !== l.node;) {
        let l = this.getLineFeedCnt(u.piece.bufferIndex, c, u.piece.end);
        if (l >= 1) {
          let a = this._buffers[u.piece.bufferIndex].lineStarts,
            d = this.offsetInBuffer(u.piece.bufferIndex, u.piece.start),
            g = a[c.line + l],
            p = h === e.startLineNumber ? e.startColumn : 1;
          if (((s = this.findMatchesInNode(u, r, h, p, c, this.positionInBuffer(u, g - d), t, i, n, s, o)), s >= n)) return o;
          h += l;
        }
        let d = h === e.startLineNumber ? e.startColumn - 1 : 0;
        if (h === e.endLineNumber) {
          const a = this.getLineContent(h).substring(d, e.endColumn - 1);
          return ((s = this._findMatchesInLine(t, r, a, e.endLineNumber, d, s, o, i, n)), o);
        }
        if (((s = this._findMatchesInLine(t, r, this.getLineContent(h).substr(d), h, d, s, o, i, n)), s >= n)) return o;
        (h++, (a = this.nodeAt2(h, 1)), (u = a.node), (c = this.positionInBuffer(a.node, a.remainder)));
      }
      if (h === e.endLineNumber) {
        let a = h === e.startLineNumber ? e.startColumn - 1 : 0;
        const l = this.getLineContent(h).substring(a, e.endColumn - 1);
        return ((s = this._findMatchesInLine(t, r, l, e.endLineNumber, a, s, o, i, n)), o);
      }
      let g = h === e.startLineNumber ? e.startColumn : 1;
      return ((s = this.findMatchesInNode(l.node, r, h, g, c, d, t, i, n, s, o)), o);
    }
    _findMatchesInLine(e, t, i, n, o, s, r, a, l) {
      const c = e.wordSeparators;
      if (!a && e.simpleSearch) {
        const t = e.simpleSearch,
          a = t.length,
          h = i.length;
        let g = -a;
        for (; -1 !== (g = i.indexOf(t, g + a));) if ((!c || (0, X.cM)(c, i, h, g, a)) && ((r[s++] = new u.tk(new d.e(n, g + 1 + o, n, g + 1 + a + o), null)), s >= l)) return s;
        return s;
      }
      let h;
      t.reset(0);
      do {
        if (((h = t.next(i)), h && ((r[s++] = (0, X.iE)(new d.e(n, h.index + 1 + o, n, h.index + 1 + h[0].length + o), h, a)), s >= l))) return s;
      } while (h);
      return s;
    }
    insert(e, t, i = !1) {
      if (((this._EOLNormalized = this._EOLNormalized && i), (this._lastVisitedLine.lineNumber = 0), (this._lastVisitedLine.value = ""), this.root !== W)) {
        let {
            node: i,
            remainder: n,
            nodeStartOffset: o
          } = this.nodeAt(e),
          s = i.piece,
          r = s.bufferIndex,
          a = this.positionInBuffer(i, n);
        if (0 === i.piece.bufferIndex && s.end.line === this._lastChangeBufferPos.line && s.end.column === this._lastChangeBufferPos.column && o + s.length === e && t.length < J) return (this.appendToNode(i, t), void this.computeBufferMetadata());
        if (o === e) (this.insertContentToNodeLeft(t, i), this._searchCache.validate(e));else if (o + i.piece.length > e) {
          let e = [],
            o = new ne(s.bufferIndex, a, s.end, this.getLineFeedCnt(s.bufferIndex, a, s.end), this.offsetInBuffer(r, s.end) - this.offsetInBuffer(r, a));
          if (this.shouldCheckCRLF() && this.endWithCR(t)) {
            if (10 === this.nodeCharCodeAt(i, n)) {
              let e = {
                line: o.start.line + 1,
                column: 0
              };
              ((o = new ne(o.bufferIndex, e, o.end, this.getLineFeedCnt(o.bufferIndex, e, o.end), o.length - 1)), (t += "\n"));
            }
          }
          if (this.shouldCheckCRLF() && this.startWithLF(t)) {
            if (13 === this.nodeCharCodeAt(i, n - 1)) {
              let o = this.positionInBuffer(i, n - 1);
              (this.deleteNodeTail(i, o), (t = "\r" + t), 0 === i.piece.length && e.push(i));
            } else this.deleteNodeTail(i, a);
          } else this.deleteNodeTail(i, a);
          let l = this.createNewPieces(t);
          o.length > 0 && this.rbInsertRight(i, o);
          let c = i;
          for (let e = 0; e < l.length; e++) c = this.rbInsertRight(c, l[e]);
          this.deleteNodes(e);
        } else this.insertContentToNodeRight(t, i);
      } else {
        let e = this.createNewPieces(t),
          i = this.rbInsertLeft(null, e[0]);
        for (let t = 1; t < e.length; t++) i = this.rbInsertRight(i, e[t]);
      }
      this.computeBufferMetadata();
    }
    delete(e, t) {
      if (((this._lastVisitedLine.lineNumber = 0), (this._lastVisitedLine.value = ""), t <= 0 || this.root === W)) return;
      let i = this.nodeAt(e),
        n = this.nodeAt(e + t),
        o = i.node,
        s = n.node;
      if (o === s) {
        let s = this.positionInBuffer(o, i.remainder),
          r = this.positionInBuffer(o, n.remainder);
        if (i.nodeStartOffset === e) {
          if (t === o.piece.length) {
            let e = o.next();
            return (Z(this, o), this.validateCRLFWithPrevNode(e), void this.computeBufferMetadata());
          }
          return (this.deleteNodeHead(o, r), this._searchCache.validate(e), this.validateCRLFWithPrevNode(o), void this.computeBufferMetadata());
        }
        return i.nodeStartOffset + o.piece.length === e + t ? (this.deleteNodeTail(o, s), this.validateCRLFWithNextNode(o), void this.computeBufferMetadata()) : (this.shrinkNode(o, s, r), void this.computeBufferMetadata());
      }
      let r = [],
        a = this.positionInBuffer(o, i.remainder);
      (this.deleteNodeTail(o, a), this._searchCache.validate(e), 0 === o.piece.length && r.push(o));
      let l = this.positionInBuffer(s, n.remainder);
      (this.deleteNodeHead(s, l), 0 === s.piece.length && r.push(s));
      for (let e = o.next(); e !== W && e !== s; e = e.next()) r.push(e);
      let c = 0 === o.piece.length ? o.prev() : o;
      (this.deleteNodes(r), this.validateCRLFWithNextNode(c), this.computeBufferMetadata());
    }
    insertContentToNodeLeft(e, t) {
      let i = [];
      if (this.shouldCheckCRLF() && this.endWithCR(e) && this.startWithLF(t)) {
        let n = t.piece,
          o = {
            line: n.start.line + 1,
            column: 0
          },
          s = new ne(n.bufferIndex, o, n.end, this.getLineFeedCnt(n.bufferIndex, o, n.end), n.length - 1);
        ((t.piece = s), (e += "\n"), Y(this, t, -1, -1), 0 === t.piece.length && i.push(t));
      }
      let n = this.createNewPieces(e),
        o = this.rbInsertLeft(t, n[n.length - 1]);
      for (let e = n.length - 2; e >= 0; e--) o = this.rbInsertLeft(o, n[e]);
      (this.validateCRLFWithPrevNode(o), this.deleteNodes(i));
    }
    insertContentToNodeRight(e, t) {
      this.adjustCarriageReturnFromNext(e, t) && (e += "\n");
      let i = this.createNewPieces(e),
        n = this.rbInsertRight(t, i[0]),
        o = n;
      for (let e = 1; e < i.length; e++) o = this.rbInsertRight(o, i[e]);
      this.validateCRLFWithPrevNode(n);
    }
    positionInBuffer(e, t, i) {
      let n = e.piece,
        o = e.piece.bufferIndex,
        s = this._buffers[o].lineStarts,
        r = s[n.start.line] + n.start.column + t,
        a = n.start.line,
        l = n.end.line,
        c = 0,
        d = 0,
        h = 0;
      for (; a <= l && ((c = (a + (l - a) / 2) | 0), (h = s[c]), c !== l);) if (((d = s[c + 1]), r < h)) l = c - 1;else {
        if (!(r >= d)) break;
        a = c + 1;
      }
      return i ? ((i.line = c), (i.column = r - h), null) : {
        line: c,
        column: r - h
      };
    }
    getLineFeedCnt(e, t, i) {
      if (0 === i.column) return i.line - t.line;
      let n = this._buffers[e].lineStarts;
      if (i.line === n.length - 1) return i.line - t.line;
      let o = n[i.line + 1],
        s = n[i.line] + i.column;
      if (o > s + 1) return i.line - t.line;
      let r = s - 1;
      return 13 === this._buffers[e].buffer.charCodeAt(r) ? i.line - t.line + 1 : i.line - t.line;
    }
    offsetInBuffer(e, t) {
      return this._buffers[e].lineStarts[t.line] + t.column;
    }
    deleteNodes(e) {
      for (let t = 0; t < e.length; t++) Z(this, e[t]);
    }
    createNewPieces(e) {
      if (e.length > J) {
        let t = [];
        for (; e.length > J;) {
          const i = e.charCodeAt(65534);
          let n;
          13 === i || (i >= 55296 && i <= 56319) ? ((n = e.substring(0, 65534)), (e = e.substring(65534))) : ((n = e.substring(0, J)), (e = e.substring(J)));
          let o = ie(n);
          (t.push(new ne(this._buffers.length, {
            line: 0,
            column: 0
          }, {
            line: o.length - 1,
            column: n.length - o[o.length - 1]
          }, o.length - 1, n.length)), this._buffers.push(new oe(n, o)));
        }
        let i = ie(e);
        return (t.push(new ne(this._buffers.length, {
          line: 0,
          column: 0
        }, {
          line: i.length - 1,
          column: e.length - i[i.length - 1]
        }, i.length - 1, e.length)), this._buffers.push(new oe(e, i)), t);
      }
      let t = this._buffers[0].buffer.length;
      const i = ie(e, !1);
      let n = this._lastChangeBufferPos;
      if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === t && 0 !== t && this.startWithLF(e) && this.endWithCR(this._buffers[0].buffer)) {
        ((this._lastChangeBufferPos = {
          line: this._lastChangeBufferPos.line,
          column: this._lastChangeBufferPos.column + 1
        }), (n = this._lastChangeBufferPos));
        for (let e = 0; e < i.length; e++) i[e] += t + 1;
        ((this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(i.slice(1))), (this._buffers[0].buffer += "_" + e), (t += 1));
      } else {
        if (0 !== t) for (let e = 0; e < i.length; e++) i[e] += t;
        ((this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(i.slice(1))), (this._buffers[0].buffer += e));
      }
      const o = this._buffers[0].buffer.length;
      let s = this._buffers[0].lineStarts.length - 1,
        r = {
          line: s,
          column: o - this._buffers[0].lineStarts[s]
        },
        a = new ne(0, n, r, this.getLineFeedCnt(0, n, r), o - t);
      return ((this._lastChangeBufferPos = r), [a]);
    }
    getLineRawContent(e, t = 0) {
      let i = this.root,
        n = "",
        o = this._searchCache.get2(e);
      if (o) {
        i = o.node;
        let s = this.getAccumulatedValue(i, e - o.nodeStartLineNumber - 1),
          r = this._buffers[i.piece.bufferIndex].buffer,
          a = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
        if (o.nodeStartLineNumber + i.piece.lineFeedCnt !== e) {
          let n = this.getAccumulatedValue(i, e - o.nodeStartLineNumber);
          return r.substring(a + s, a + n - t);
        }
        n = r.substring(a + s, a + i.piece.length);
      } else {
        let o = 0;
        const s = e;
        for (; i !== W;) if (i.left !== W && i.lf_left >= e - 1) i = i.left;else {
          if (i.lf_left + i.piece.lineFeedCnt > e - 1) {
            let n = this.getAccumulatedValue(i, e - i.lf_left - 2),
              r = this.getAccumulatedValue(i, e - i.lf_left - 1),
              a = this._buffers[i.piece.bufferIndex].buffer,
              l = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
            return ((o += i.size_left), this._searchCache.set({
              node: i,
              nodeStartOffset: o,
              nodeStartLineNumber: s - (e - 1 - i.lf_left)
            }), a.substring(l + n, l + r - t));
          }
          if (i.lf_left + i.piece.lineFeedCnt === e - 1) {
            let t = this.getAccumulatedValue(i, e - i.lf_left - 2),
              o = this._buffers[i.piece.bufferIndex].buffer,
              s = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
            n = o.substring(s + t, s + i.piece.length);
            break;
          }
          ((e -= i.lf_left + i.piece.lineFeedCnt), (o += i.size_left + i.piece.length), (i = i.right));
        }
      }
      for (i = i.next(); i !== W;) {
        let e = this._buffers[i.piece.bufferIndex].buffer;
        if (i.piece.lineFeedCnt > 0) {
          let o = this.getAccumulatedValue(i, 0),
            s = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
          return ((n += e.substring(s, s + o - t)), n);
        }
        {
          let t = this.offsetInBuffer(i.piece.bufferIndex, i.piece.start);
          n += e.substr(t, i.piece.length);
        }
        i = i.next();
      }
      return n;
    }
    computeBufferMetadata() {
      let e = this.root,
        t = 1,
        i = 0;
      for (; e !== W;) ((t += e.lf_left + e.piece.lineFeedCnt), (i += e.size_left + e.piece.length), (e = e.right));
      ((this._lineCnt = t), (this._length = i), this._searchCache.validate(this._length));
    }
    getIndexOf(e, t) {
      let i = e.piece,
        n = this.positionInBuffer(e, t),
        o = n.line - i.start.line;
      if (this.offsetInBuffer(i.bufferIndex, i.end) - this.offsetInBuffer(i.bufferIndex, i.start) === t) {
        let t = this.getLineFeedCnt(e.piece.bufferIndex, i.start, n);
        if (t !== o) return {
          index: t,
          remainder: 0
        };
      }
      return {
        index: o,
        remainder: n.column
      };
    }
    getAccumulatedValue(e, t) {
      if (t < 0) return 0;
      let i = e.piece,
        n = this._buffers[i.bufferIndex].lineStarts,
        o = i.start.line + t + 1;
      return o > i.end.line ? n[i.end.line] + i.end.column - n[i.start.line] - i.start.column : n[o] - n[i.start.line] - i.start.column;
    }
    deleteNodeTail(e, t) {
      const i = e.piece,
        n = i.lineFeedCnt,
        o = this.offsetInBuffer(i.bufferIndex, i.end),
        s = t,
        r = this.offsetInBuffer(i.bufferIndex, s),
        a = this.getLineFeedCnt(i.bufferIndex, i.start, s),
        l = a - n,
        c = r - o,
        d = i.length + c;
      ((e.piece = new ne(i.bufferIndex, i.start, s, a, d)), Y(this, e, c, l));
    }
    deleteNodeHead(e, t) {
      const i = e.piece,
        n = i.lineFeedCnt,
        o = this.offsetInBuffer(i.bufferIndex, i.start),
        s = t,
        r = this.getLineFeedCnt(i.bufferIndex, s, i.end),
        a = r - n,
        l = o - this.offsetInBuffer(i.bufferIndex, s),
        c = i.length + l;
      ((e.piece = new ne(i.bufferIndex, s, i.end, r, c)), Y(this, e, l, a));
    }
    shrinkNode(e, t, i) {
      const n = e.piece,
        o = n.start,
        s = n.end,
        r = n.length,
        a = n.lineFeedCnt,
        l = t,
        c = this.getLineFeedCnt(n.bufferIndex, n.start, l),
        d = this.offsetInBuffer(n.bufferIndex, t) - this.offsetInBuffer(n.bufferIndex, o);
      ((e.piece = new ne(n.bufferIndex, n.start, l, c, d)), Y(this, e, d - r, c - a));
      let h = new ne(n.bufferIndex, i, s, this.getLineFeedCnt(n.bufferIndex, i, s), this.offsetInBuffer(n.bufferIndex, s) - this.offsetInBuffer(n.bufferIndex, i)),
        u = this.rbInsertRight(e, h);
      this.validateCRLFWithPrevNode(u);
    }
    appendToNode(e, t) {
      this.adjustCarriageReturnFromNext(t, e) && (t += "\n");
      const i = this.shouldCheckCRLF() && this.startWithLF(t) && this.endWithCR(e),
        n = this._buffers[0].buffer.length;
      this._buffers[0].buffer += t;
      const o = ie(t, !1);
      for (let e = 0; e < o.length; e++) o[e] += n;
      if (i) {
        let e = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
        (this._buffers[0].lineStarts.pop(), (this._lastChangeBufferPos = {
          line: this._lastChangeBufferPos.line - 1,
          column: n - e
        }));
      }
      this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(o.slice(1));
      const s = this._buffers[0].lineStarts.length - 1,
        r = {
          line: s,
          column: this._buffers[0].buffer.length - this._buffers[0].lineStarts[s]
        },
        a = e.piece.length + t.length,
        l = e.piece.lineFeedCnt,
        c = this.getLineFeedCnt(0, e.piece.start, r),
        d = c - l;
      ((e.piece = new ne(e.piece.bufferIndex, e.piece.start, r, c, a)), (this._lastChangeBufferPos = r), Y(this, e, t.length, d));
    }
    nodeAt(e) {
      let t = this.root,
        i = this._searchCache.get(e);
      if (i) return {
        node: i.node,
        nodeStartOffset: i.nodeStartOffset,
        remainder: e - i.nodeStartOffset
      };
      let n = 0;
      for (; t !== W;) if (t.size_left > e) t = t.left;else {
        if (t.size_left + t.piece.length >= e) {
          n += t.size_left;
          let i = {
            node: t,
            remainder: e - t.size_left,
            nodeStartOffset: n
          };
          return (this._searchCache.set(i), i);
        }
        ((e -= t.size_left + t.piece.length), (n += t.size_left + t.piece.length), (t = t.right));
      }
      return null;
    }
    nodeAt2(e, t) {
      let i = this.root,
        n = 0;
      for (; i !== W;) if (i.left !== W && i.lf_left >= e - 1) i = i.left;else {
        if (i.lf_left + i.piece.lineFeedCnt > e - 1) {
          let o = this.getAccumulatedValue(i, e - i.lf_left - 2),
            s = this.getAccumulatedValue(i, e - i.lf_left - 1);
          return ((n += i.size_left), {
            node: i,
            remainder: Math.min(o + t - 1, s),
            nodeStartOffset: n
          });
        }
        if (i.lf_left + i.piece.lineFeedCnt === e - 1) {
          let o = this.getAccumulatedValue(i, e - i.lf_left - 2);
          if (o + t - 1 <= i.piece.length) return {
            node: i,
            remainder: o + t - 1,
            nodeStartOffset: n
          };
          t -= i.piece.length - o;
          break;
        }
        ((e -= i.lf_left + i.piece.lineFeedCnt), (n += i.size_left + i.piece.length), (i = i.right));
      }
      for (i = i.next(); i !== W;) {
        if (i.piece.lineFeedCnt > 0) {
          let e = this.getAccumulatedValue(i, 0),
            n = this.offsetOfNode(i);
          return {
            node: i,
            remainder: Math.min(t - 1, e),
            nodeStartOffset: n
          };
        }
        if (i.piece.length >= t - 1) {
          return {
            node: i,
            remainder: t - 1,
            nodeStartOffset: this.offsetOfNode(i)
          };
        }
        ((t -= i.piece.length), (i = i.next()));
      }
      return null;
    }
    nodeCharCodeAt(e, t) {
      if (e.piece.lineFeedCnt < 1) return -1;
      let i = this._buffers[e.piece.bufferIndex],
        n = this.offsetInBuffer(e.piece.bufferIndex, e.piece.start) + t;
      return i.buffer.charCodeAt(n);
    }
    offsetOfNode(e) {
      if (!e) return 0;
      let t = e.size_left;
      for (; e !== this.root;) (e.parent.right === e && (t += e.parent.size_left + e.parent.piece.length), (e = e.parent));
      return t;
    }
    shouldCheckCRLF() {
      return !(this._EOLNormalized && "\n" === this._EOL);
    }
    startWithLF(e) {
      if ("string" == typeof e) return 10 === e.charCodeAt(0);
      if (e === W || 0 === e.piece.lineFeedCnt) return !1;
      let t = e.piece,
        i = this._buffers[t.bufferIndex].lineStarts,
        n = t.start.line,
        o = i[n] + t.start.column;
      return (n !== i.length - 1 && !(i[n + 1] > o + 1) && 10 === this._buffers[t.bufferIndex].buffer.charCodeAt(o));
    }
    endWithCR(e) {
      return "string" == typeof e ? 13 === e.charCodeAt(e.length - 1) : e !== W && 0 !== e.piece.lineFeedCnt && 13 === this.nodeCharCodeAt(e, e.piece.length - 1);
    }
    validateCRLFWithPrevNode(e) {
      if (this.shouldCheckCRLF() && this.startWithLF(e)) {
        let t = e.prev();
        this.endWithCR(t) && this.fixCRLF(t, e);
      }
    }
    validateCRLFWithNextNode(e) {
      if (this.shouldCheckCRLF() && this.endWithCR(e)) {
        let t = e.next();
        this.startWithLF(t) && this.fixCRLF(e, t);
      }
    }
    fixCRLF(e, t) {
      let i,
        n = [],
        o = this._buffers[e.piece.bufferIndex].lineStarts;
      i = 0 === e.piece.end.column ? {
        line: e.piece.end.line - 1,
        column: o[e.piece.end.line] - o[e.piece.end.line - 1] - 1
      } : {
        line: e.piece.end.line,
        column: e.piece.end.column - 1
      };
      const s = e.piece.length - 1,
        r = e.piece.lineFeedCnt - 1;
      ((e.piece = new ne(e.piece.bufferIndex, e.piece.start, i, r, s)), Y(this, e, -1, -1), 0 === e.piece.length && n.push(e));
      let a = {
        line: t.piece.start.line + 1,
        column: 0
      };
      const l = t.piece.length - 1,
        c = this.getLineFeedCnt(t.piece.bufferIndex, a, t.piece.end);
      ((t.piece = new ne(t.piece.bufferIndex, a, t.piece.end, c, l)), Y(this, t, -1, -1), 0 === t.piece.length && n.push(t));
      let d = this.createNewPieces("\r\n");
      this.rbInsertRight(e, d[0]);
      for (let e = 0; e < n.length; e++) Z(this, n[e]);
    }
    adjustCarriageReturnFromNext(e, t) {
      if (this.shouldCheckCRLF() && this.endWithCR(e)) {
        let i = t.next();
        if (this.startWithLF(i)) {
          if (((e += "\n"), 1 === i.piece.length)) Z(this, i);else {
            const e = i.piece,
              t = {
                line: e.start.line + 1,
                column: 0
              },
              n = e.length - 1,
              o = this.getLineFeedCnt(e.bufferIndex, t, e.end);
            ((i.piece = new ne(e.bufferIndex, t, e.end, o, n)), Y(this, i, -1, -1));
          }
          return !0;
        }
      }
      return !1;
    }
    iterate(e, t) {
      if (e === W) return t(W);
      let i = this.iterate(e.left, t);
      return i ? t(e) && this.iterate(e.right, t) : i;
    }
    getNodeContent(e) {
      if (e === W) return "";
      let t,
        i = this._buffers[e.piece.bufferIndex],
        n = e.piece,
        o = this.offsetInBuffer(n.bufferIndex, n.start),
        s = this.offsetInBuffer(n.bufferIndex, n.end);
      return ((t = i.buffer.substring(o, s)), t);
    }
    getPieceContent(e) {
      let t = this._buffers[e.bufferIndex],
        i = this.offsetInBuffer(e.bufferIndex, e.start),
        n = this.offsetInBuffer(e.bufferIndex, e.end);
      return t.buffer.substring(i, n);
    }
    rbInsertRight(e, t) {
      let i = new V(t, 1);
      if (((i.left = W), (i.right = W), (i.parent = W), (i.size_left = 0), (i.lf_left = 0), this.root === W)) ((this.root = i), (i.color = 0));else if (e.right === W) ((e.right = i), (i.parent = e));else {
        let t = H(e.right);
        ((t.left = i), (i.parent = t));
      }
      return (G(this, i), i);
    }
    rbInsertLeft(e, t) {
      let i = new V(t, 1);
      if (((i.left = W), (i.right = W), (i.parent = W), (i.size_left = 0), (i.lf_left = 0), this.root === W)) ((this.root = i), (i.color = 0));else if (e.left === W) ((e.left = i), (i.parent = e));else {
        let t = z(e.left);
        ((t.right = i), (i.parent = t));
      }
      return (G(this, i), i);
    }
  }
  var le = i(58409),
    ce = i(60962);
  class de extends s.JT {
    constructor(e, t, i, n, s, r, a) {
      (super(), (this._onDidChangeContent = this._register(new o.Q5())), (this._BOM = t), (this._mightContainNonBasicASCII = !r), (this._mightContainRTL = n), (this._mightContainUnusualLineTerminators = s), (this._pieceTree = new ae(e, i, a)));
    }
    mightContainRTL() {
      return this._mightContainRTL;
    }
    mightContainUnusualLineTerminators() {
      return this._mightContainUnusualLineTerminators;
    }
    resetMightContainUnusualLineTerminators() {
      this._mightContainUnusualLineTerminators = !1;
    }
    mightContainNonBasicASCII() {
      return this._mightContainNonBasicASCII;
    }
    getBOM() {
      return this._BOM;
    }
    getEOL() {
      return this._pieceTree.getEOL();
    }
    createSnapshot(e) {
      return this._pieceTree.createSnapshot(e ? this._BOM : "");
    }
    getOffsetAt(e, t) {
      return this._pieceTree.getOffsetAt(e, t);
    }
    getPositionAt(e) {
      return this._pieceTree.getPositionAt(e);
    }
    getRangeAt(e, t) {
      let i = e + t;
      const n = this.getPositionAt(e),
        o = this.getPositionAt(i);
      return new d.e(n.lineNumber, n.column, o.lineNumber, o.column);
    }
    getValueInRange(e, t = 0) {
      if (e.isEmpty()) return "";
      const i = this._getEndOfLine(t);
      return this._pieceTree.getValueInRange(e, i);
    }
    getValueLengthInRange(e, t = 0) {
      if (e.isEmpty()) return 0;
      if (e.startLineNumber === e.endLineNumber) return e.endColumn - e.startColumn;
      let i = this.getOffsetAt(e.startLineNumber, e.startColumn);
      return this.getOffsetAt(e.endLineNumber, e.endColumn) - i;
    }
    getCharacterCountInRange(e, t = 0) {
      if (this._mightContainNonBasicASCII) {
        let i = 0;
        const n = e.startLineNumber,
          o = e.endLineNumber;
        for (let t = n; t <= o; t++) {
          const s = this.getLineContent(t),
            a = t === n ? e.startColumn - 1 : 0,
            l = t === o ? e.endColumn - 1 : s.length;
          for (let e = a; e < l; e++) r.ZG(s.charCodeAt(e)) ? ((i += 1), (e += 1)) : (i += 1);
        }
        return ((i += this._getEndOfLine(t).length * (o - n)), i);
      }
      return this.getValueLengthInRange(e, t);
    }
    getLength() {
      return this._pieceTree.getLength();
    }
    getLineCount() {
      return this._pieceTree.getLineCount();
    }
    getLinesContent() {
      return this._pieceTree.getLinesContent();
    }
    getLineContent(e) {
      return this._pieceTree.getLineContent(e);
    }
    getLineCharCode(e, t) {
      return this._pieceTree.getLineCharCode(e, t);
    }
    getLineLength(e) {
      return this._pieceTree.getLineLength(e);
    }
    getLineFirstNonWhitespaceColumn(e) {
      const t = r.LC(this.getLineContent(e));
      return -1 === t ? 0 : t + 1;
    }
    getLineLastNonWhitespaceColumn(e) {
      const t = r.ow(this.getLineContent(e));
      return -1 === t ? 0 : t + 2;
    }
    _getEndOfLine(e) {
      switch (e) {
        case 1:
          return "\n";
        case 2:
          return "\r\n";
        case 0:
          return this.getEOL();
        default:
          throw new Error("Unknown EOL preference");
      }
    }
    setEOL(e) {
      this._pieceTree.setEOL(e);
    }
    applyEdits(e, t, i) {
      let n = this._mightContainRTL,
        o = this._mightContainUnusualLineTerminators,
        s = this._mightContainNonBasicASCII,
        a = !0,
        l = [];
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        a && i._isTracked && (a = !1);
        let c = i.range;
        if (i.text) {
          let e = !0;
          (s || ((e = !r.$i(i.text)), (s = e)), !n && e && (n = r.Ut(i.text)), !o && e && (o = r.ab(i.text)));
        }
        let d = "",
          h = 0,
          u = 0,
          g = 0;
        if (i.text) {
          let e;
          [h, u, g, e] = (0, le.QZ)(i.text);
          const t = this.getEOL();
          d = 0 === e || e === ("\r\n" === t ? 2 : 1) ? i.text : i.text.replace(/\r\n|\r|\n/g, t);
        }
        l[t] = {
          sortIndex: t,
          identifier: i.identifier || null,
          range: c,
          rangeOffset: this.getOffsetAt(c.startLineNumber, c.startColumn),
          rangeLength: this.getValueLengthInRange(c),
          text: d,
          eolCount: h,
          firstLineLength: u,
          lastLineLength: g,
          forceMoveMarkers: Boolean(i.forceMoveMarkers),
          isAutoWhitespaceEdit: i.isAutoWhitespaceEdit || !1
        };
      }
      l.sort(de._sortOpsAscending);
      let c = !1;
      for (let e = 0, t = l.length - 1; e < t; e++) {
        let t = l[e].range.getEndPosition(),
          i = l[e + 1].range.getStartPosition();
        if (i.isBeforeOrEqual(t)) {
          if (i.isBefore(t)) throw new Error("Overlapping ranges are not allowed!");
          c = !0;
        }
      }
      a && (l = this._reduceOperations(l));
      let d = i || t ? de._getInverseEditRanges(l) : [],
        h = [];
      if (t) for (let e = 0; e < l.length; e++) {
        let t = l[e],
          i = d[e];
        if (t.isAutoWhitespaceEdit && t.range.isEmpty()) for (let e = i.startLineNumber; e <= i.endLineNumber; e++) {
          let n = "";
          (e === i.startLineNumber && ((n = this.getLineContent(t.range.startLineNumber)), -1 !== r.LC(n))) || h.push({
            lineNumber: e,
            oldContent: n
          });
        }
      }
      let g = null;
      if (i) {
        let e = 0;
        g = [];
        for (let t = 0; t < l.length; t++) {
          const i = l[t],
            n = d[t],
            o = this.getValueInRange(i.range),
            s = i.rangeOffset + e;
          ((e += i.text.length - o.length), (g[t] = {
            sortIndex: i.sortIndex,
            identifier: i.identifier,
            range: n,
            text: o,
            textChange: new ce.q(i.rangeOffset, o, s, i.text)
          }));
        }
        c || g.sort((e, t) => e.sortIndex - t.sortIndex);
      }
      ((this._mightContainRTL = n), (this._mightContainUnusualLineTerminators = o), (this._mightContainNonBasicASCII = s));
      const p = this._doApplyEdits(l);
      let f = null;
      if (t && h.length > 0) {
        (h.sort((e, t) => t.lineNumber - e.lineNumber), (f = []));
        for (let e = 0, t = h.length; e < t; e++) {
          let t = h[e].lineNumber;
          if (e > 0 && h[e - 1].lineNumber === t) continue;
          let i = h[e].oldContent,
            n = this.getLineContent(t);
          0 !== n.length && n !== i && -1 === r.LC(n) && f.push(t);
        }
      }
      return (this._onDidChangeContent.fire(), new u.je(g, p, f));
    }
    _reduceOperations(e) {
      return e.length < 1e3 ? e : [this._toSingleEditOperation(e)];
    }
    _toSingleEditOperation(e) {
      let t = !1;
      const i = e[0].range,
        n = e[e.length - 1].range,
        o = new d.e(i.startLineNumber, i.startColumn, n.endLineNumber, n.endColumn);
      let s = i.startLineNumber,
        r = i.startColumn;
      const a = [];
      for (let i = 0, n = e.length; i < n; i++) {
        const n = e[i],
          o = n.range;
        ((t = t || n.forceMoveMarkers), a.push(this.getValueInRange(new d.e(s, r, o.startLineNumber, o.startColumn))), n.text.length > 0 && a.push(n.text), (s = o.endLineNumber), (r = o.endColumn));
      }
      const l = a.join(""),
        [c, h, u] = (0, le.QZ)(l);
      return {
        sortIndex: 0,
        identifier: e[0].identifier,
        range: o,
        rangeOffset: this.getOffsetAt(o.startLineNumber, o.startColumn),
        rangeLength: this.getValueLengthInRange(o, 0),
        text: l,
        eolCount: c,
        firstLineLength: h,
        lastLineLength: u,
        forceMoveMarkers: t,
        isAutoWhitespaceEdit: !1
      };
    }
    _doApplyEdits(e) {
      e.sort(de._sortOpsDescending);
      let t = [];
      for (let i = 0; i < e.length; i++) {
        let n = e[i];
        const o = n.range.startLineNumber,
          s = n.range.startColumn,
          r = n.range.endLineNumber,
          a = n.range.endColumn;
        if (o === r && s === a && 0 === n.text.length) continue;
        n.text ? (this._pieceTree.delete(n.rangeOffset, n.rangeLength), this._pieceTree.insert(n.rangeOffset, n.text, !0)) : this._pieceTree.delete(n.rangeOffset, n.rangeLength);
        const l = new d.e(o, s, r, a);
        t.push({
          range: l,
          rangeLength: n.rangeLength,
          text: n.text,
          rangeOffset: n.rangeOffset,
          forceMoveMarkers: n.forceMoveMarkers
        });
      }
      return t;
    }
    findMatchesLineByLine(e, t, i, n) {
      return this._pieceTree.findMatchesLineByLine(e, t, i, n);
    }
    static _getInverseEditRanges(e) {
      let t = [],
        i = 0,
        n = 0,
        o = null;
      for (let s = 0, r = e.length; s < r; s++) {
        let r,
          a,
          l,
          c = e[s];
        if ((o ? o.range.endLineNumber === c.range.startLineNumber ? ((r = i), (a = n + (c.range.startColumn - o.range.endColumn))) : ((r = i + (c.range.startLineNumber - o.range.endLineNumber)), (a = c.range.startColumn)) : ((r = c.range.startLineNumber), (a = c.range.startColumn)), c.text.length > 0)) {
          const e = c.eolCount + 1;
          l = 1 === e ? new d.e(r, a, r, a + c.firstLineLength) : new d.e(r, a, r + e - 1, c.lastLineLength + 1);
        } else l = new d.e(r, a, r, a);
        ((i = l.endLineNumber), (n = l.endColumn), t.push(l), (o = c));
      }
      return t;
    }
    static _sortOpsAscending(e, t) {
      let i = d.e.compareRangesUsingEnds(e.range, t.range);
      return 0 === i ? e.sortIndex - t.sortIndex : i;
    }
    static _sortOpsDescending(e, t) {
      let i = d.e.compareRangesUsingEnds(e.range, t.range);
      return 0 === i ? t.sortIndex - e.sortIndex : -i;
    }
  }
  class he {
    constructor(e, t, i, n, o, s, r, a, l) {
      ((this._chunks = e), (this._bom = t), (this._cr = i), (this._lf = n), (this._crlf = o), (this._containsRTL = s), (this._containsUnusualLineTerminators = r), (this._isBasicASCII = a), (this._normalizeEOL = l));
    }
    _getEOL(e) {
      const t = this._cr + this._lf + this._crlf,
        i = this._cr + this._crlf;
      return 0 === t ? (1 === e ? "\n" : "\r\n") : i > t / 2 ? "\r\n" : "\n";
    }
    create(e) {
      const t = this._getEOL(e);
      let i = this._chunks;
      if (this._normalizeEOL && (("\r\n" === t && (this._cr > 0 || this._lf > 0)) || ("\n" === t && (this._cr > 0 || this._crlf > 0)))) for (let e = 0, n = i.length; e < n; e++) {
        let n = i[e].buffer.replace(/\r\n|\r|\n/g, t),
          o = ie(n);
        i[e] = new oe(n, o);
      }
      const n = new de(i, this._bom, t, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
      return {
        textBuffer: n,
        disposable: n
      };
    }
  }
  class ue {
    constructor() {
      ((this.chunks = []), (this.BOM = ""), (this._hasPreviousChar = !1), (this._previousChar = 0), (this._tmpLineStarts = []), (this.cr = 0), (this.lf = 0), (this.crlf = 0), (this.containsRTL = !1), (this.containsUnusualLineTerminators = !1), (this.isBasicASCII = !0));
    }
    acceptChunk(e) {
      if (0 === e.length) return;
      0 === this.chunks.length && r.uS(e) && ((this.BOM = r.c1), (e = e.substr(1)));
      const t = e.charCodeAt(e.length - 1);
      13 === t || (t >= 55296 && t <= 56319) ? (this._acceptChunk1(e.substr(0, e.length - 1), !1), (this._hasPreviousChar = !0), (this._previousChar = t)) : (this._acceptChunk1(e, !1), (this._hasPreviousChar = !1), (this._previousChar = t));
    }
    _acceptChunk1(e, t) {
      (t || 0 !== e.length) && (this._hasPreviousChar ? this._acceptChunk2(String.fromCharCode(this._previousChar) + e) : this._acceptChunk2(e));
    }
    _acceptChunk2(e) {
      const t = (function (e, t) {
        ((e.length = 0), (e[0] = 0));
        let i = 1,
          n = 0,
          o = 0,
          s = 0,
          r = !0;
        for (let a = 0, l = t.length; a < l; a++) {
          const c = t.charCodeAt(a);
          13 === c ? a + 1 < l && 10 === t.charCodeAt(a + 1) ? (s++, (e[i++] = a + 2), a++) : (n++, (e[i++] = a + 1)) : 10 === c ? (o++, (e[i++] = a + 1)) : r && 9 !== c && (c < 32 || c > 126) && (r = !1);
        }
        const a = new te(ee(e), n, o, s, r);
        return ((e.length = 0), a);
      })(this._tmpLineStarts, e);
      (this.chunks.push(new oe(e, t.lineStarts)), (this.cr += t.cr), (this.lf += t.lf), (this.crlf += t.crlf), this.isBasicASCII && (this.isBasicASCII = t.isBasicASCII), this.isBasicASCII || this.containsRTL || (this.containsRTL = r.Ut(e)), this.isBasicASCII || this.containsUnusualLineTerminators || (this.containsUnusualLineTerminators = r.ab(e)));
    }
    finish(e = !0) {
      return (this._finish(), new he(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, e));
    }
    _finish() {
      if ((0 === this.chunks.length && this._acceptChunk1("", !0), this._hasPreviousChar)) {
        this._hasPreviousChar = !1;
        let e = this.chunks[this.chunks.length - 1];
        e.buffer += String.fromCharCode(this._previousChar);
        let t = ie(e.buffer);
        ((e.lineStarts = t), 13 === this._previousChar && this.cr++);
      }
    }
  }
  var ge = i(83256),
    pe = i(9488),
    fe = i(78411),
    me = i(44101),
    ve = i(28111),
    _e = i(84013),
    be = i(1432);
  class we {
    constructor() {
      ((this._beginState = []), (this._valid = []), (this._len = 0), (this._invalidLineStartIndex = 0));
    }
    _reset(e) {
      ((this._beginState = []), (this._valid = []), (this._len = 0), (this._invalidLineStartIndex = 0), e && this._setBeginState(0, e));
    }
    flush(e) {
      this._reset(e);
    }
    get invalidLineStartIndex() {
      return this._invalidLineStartIndex;
    }
    _invalidateLine(e) {
      (e < this._len && (this._valid[e] = !1), e < this._invalidLineStartIndex && (this._invalidLineStartIndex = e));
    }
    _isValid(e) {
      return e < this._len && this._valid[e];
    }
    getBeginState(e) {
      return e < this._len ? this._beginState[e] : null;
    }
    _ensureLine(e) {
      for (; e >= this._len;) ((this._beginState[this._len] = null), (this._valid[this._len] = !1), this._len++);
    }
    _deleteLines(e, t) {
      0 !== t && (e + t > this._len && (t = this._len - e), this._beginState.splice(e, t), this._valid.splice(e, t), (this._len -= t));
    }
    _insertLines(e, t) {
      if (0 === t) return;
      const i = [],
        n = [];
      for (let e = 0; e < t; e++) ((i[e] = null), (n[e] = !1));
      ((this._beginState = pe.Zv(this._beginState, e, i)), (this._valid = pe.Zv(this._valid, e, n)), (this._len += t));
    }
    _setValid(e, t) {
      (this._ensureLine(e), (this._valid[e] = t));
    }
    _setBeginState(e, t) {
      (this._ensureLine(e), (this._beginState[e] = t));
    }
    setEndState(e, t, i) {
      if ((this._setValid(t, !0), (this._invalidLineStartIndex = t + 1), t === e - 1)) return;
      const n = this.getBeginState(t + 1);
      if (null === n || !i.equals(n)) return (this._setBeginState(t + 1, i), void this._invalidateLine(t + 1));
      let o = t + 1;
      for (; o < e && this._isValid(o);) o++;
      this._invalidLineStartIndex = o;
    }
    setFakeTokens(e) {
      this._setValid(e, !1);
    }
    applyEdits(e, t) {
      const i = e.endLineNumber - e.startLineNumber,
        n = t;
      for (let t = Math.min(i, n); t >= 0; t--) this._invalidateLine(e.startLineNumber + t - 1);
      (this._acceptDeleteRange(e), this._acceptInsertText(new c.L(e.startLineNumber, e.startColumn), t));
    }
    _acceptDeleteRange(e) {
      e.startLineNumber - 1 >= this._len || this._deleteLines(e.startLineNumber, e.endLineNumber - e.startLineNumber);
    }
    _acceptInsertText(e, t) {
      e.lineNumber - 1 >= this._len || this._insertLines(e.lineNumber, t);
    }
  }
  class ye extends s.JT {
    constructor(e, t) {
      (super(), (this._textModel = e), (this._languageIdCodec = t), (this._isDisposed = !1), (this._tokenizationStateStore = new we()), (this._tokenizationSupport = null), this._register(me.RW.onDidChange(e => {
        const t = this._textModel.getLanguageId();
        -1 !== e.changedLanguages.indexOf(t) && (this._resetTokenizationState(), this._textModel.clearTokens());
      })), this._register(this._textModel.onDidChangeContentFast(e => {
        if (e.isFlush) this._resetTokenizationState();else {
          for (let t = 0, i = e.changes.length; t < i; t++) {
            const i = e.changes[t],
              [n] = (0, le.QZ)(i.text);
            this._tokenizationStateStore.applyEdits(i.range, n);
          }
          this._beginBackgroundTokenization();
        }
      })), this._register(this._textModel.onDidChangeAttached(() => {
        this._beginBackgroundTokenization();
      })), this._register(this._textModel.onDidChangeLanguage(() => {
        (this._resetTokenizationState(), this._textModel.clearTokens());
      })), this._resetTokenizationState());
    }
    dispose() {
      ((this._isDisposed = !0), super.dispose());
    }
    _resetTokenizationState() {
      const [e, t] = (function (e) {
        const t = e.getLanguageId();
        let i = e.isTooLargeForTokenization() ? null : me.RW.get(t),
          o = null;
        if (i) try {
          o = i.getInitialState();
        } catch (e) {
          ((0, n.dL)(e), (i = null));
        }
        return [i, o];
      })(this._textModel);
      ((this._tokenizationSupport = e), this._tokenizationStateStore.flush(t), this._beginBackgroundTokenization());
    }
    _beginBackgroundTokenization() {
      this._textModel.isAttachedToEditor() && this._hasLinesToTokenize() && be.xS(() => {
        this._isDisposed || this._revalidateTokensNow();
      });
    }
    _revalidateTokensNow() {
      const e = this._textModel.getLineCount(),
        t = new le.DA(),
        i = _e.G.create(!1);
      let n = -1;
      for (; this._hasLinesToTokenize() && !(i.elapsed() > 1) && ((n = this._tokenizeOneInvalidLine(t)), !(n >= e)););
      (this._beginBackgroundTokenization(), this._textModel.setTokens(t.tokens, !this._hasLinesToTokenize()));
    }
    tokenizeViewport(e, t) {
      const i = new le.DA();
      (this._tokenizeViewport(i, e, t), this._textModel.setTokens(i.tokens, !this._hasLinesToTokenize()));
    }
    reset() {
      (this._resetTokenizationState(), this._textModel.clearTokens());
    }
    forceTokenization(e) {
      const t = new le.DA();
      (this._updateTokensUntilLine(t, e), this._textModel.setTokens(t.tokens, !this._hasLinesToTokenize()));
    }
    isCheapToTokenize(e) {
      if (!this._tokenizationSupport) return !0;
      const t = this._tokenizationStateStore.invalidLineStartIndex + 1;
      return !(e > t) && (e < t || this._textModel.getLineLength(e) < 2048);
    }
    _hasLinesToTokenize() {
      return (!!this._tokenizationSupport && this._tokenizationStateStore.invalidLineStartIndex < this._textModel.getLineCount());
    }
    _tokenizeOneInvalidLine(e) {
      if (!this._hasLinesToTokenize()) return this._textModel.getLineCount() + 1;
      const t = this._tokenizationStateStore.invalidLineStartIndex + 1;
      return (this._updateTokensUntilLine(e, t), t);
    }
    _updateTokensUntilLine(e, t) {
      if (!this._tokenizationSupport) return;
      const i = this._textModel.getLanguageId(),
        n = this._textModel.getLineCount(),
        o = t - 1;
      for (let t = this._tokenizationStateStore.invalidLineStartIndex; t <= o; t++) {
        const o = this._textModel.getLineContent(t + 1),
          s = this._tokenizationStateStore.getBeginState(t),
          r = Ce(this._languageIdCodec, i, this._tokenizationSupport, o, !0, s);
        (e.add(t + 1, r.tokens), this._tokenizationStateStore.setEndState(n, t, r.endState), (t = this._tokenizationStateStore.invalidLineStartIndex - 1));
      }
    }
    _tokenizeViewport(e, t, i) {
      if (!this._tokenizationSupport) return;
      if (i <= this._tokenizationStateStore.invalidLineStartIndex) return;
      if (t <= this._tokenizationStateStore.invalidLineStartIndex) return void this._updateTokensUntilLine(e, i);
      let n = this._textModel.getLineFirstNonWhitespaceColumn(t);
      const o = [];
      let s = null;
      for (let e = t - 1; n > 1 && e >= 1; e--) {
        const t = this._textModel.getLineFirstNonWhitespaceColumn(e);
        if (0 !== t && t < n) {
          if (((s = this._tokenizationStateStore.getBeginState(e - 1)), s)) break;
          (o.push(this._textModel.getLineContent(e)), (n = t));
        }
      }
      s || (s = this._tokenizationSupport.getInitialState());
      const r = this._textModel.getLanguageId();
      let a = s;
      for (let e = o.length - 1; e >= 0; e--) {
        a = Ce(this._languageIdCodec, r, this._tokenizationSupport, o[e], !1, a).endState;
      }
      for (let n = t; n <= i; n++) {
        const t = this._textModel.getLineContent(n),
          i = Ce(this._languageIdCodec, r, this._tokenizationSupport, t, !0, a);
        (e.add(n, i.tokens), this._tokenizationStateStore.setFakeTokens(n - 1), (a = i.endState));
      }
    }
  }
  function Ce(e, t, i, o, s, r) {
    let a = null;
    if (i) try {
      a = i.tokenize2(o, s, r.clone(), 0);
    } catch (e) {
      (0, n.dL)(e);
    }
    return (a || (a = (0, ve.mh)(e.encodeLanguageId(t), o, r, 0)), fe.A.convertToEndOffset(a.tokens, o.length), a);
  }
  var xe = i(97461),
    Se = i(83831),
    ke = i(40764),
    Le = i(34227),
    Ne = i(41264),
    De = i(64862);
  class Ie {
    constructor(e, t, i) {
      ((this.range = e), (this.nestingLevel = t), (this.isInvalid = i));
    }
  }
  class Ee {
    constructor(e, t, i, n) {
      ((this.range = e), (this.openingBracketRange = t), (this.closingBracketRange = i), (this.nestingLevel = n));
    }
  }
  class Te extends Ee {
    constructor(e, t, i, n, o) {
      (super(e, t, i, n), (this.minVisibleColumnIndentation = o));
    }
  }
  class Me {
    constructor(e, t) {
      ((this.lineCount = e), (this.columnCount = t));
    }
    toString() {
      return `${this.lineCount},${this.columnCount}`;
    }
  }
  const Ae = Math.pow(2, 26);
  function Oe(e, t) {
    return e * Ae + t;
  }
  function Pe(e) {
    const t = e,
      i = Math.floor(t / Ae);
    return new Me(i, t - i * Ae);
  }
  function Re(e, t) {
    return t < Ae ? e + t : e - (e % Ae) + t;
  }
  function Fe(e, t) {
    return e < t;
  }
  function Be(e, t) {
    return e <= t;
  }
  function Ve(e, t) {
    return e >= t;
  }
  function We(e) {
    return Oe(e.lineNumber - 1, e.column - 1);
  }
  function He(e, t) {
    const i = e,
      n = Math.floor(i / Ae),
      o = i - n * Ae,
      s = t,
      r = Math.floor(s / Ae),
      a = s - r * Ae;
    return new d.e(n + 1, o + 1, r + 1, a + 1);
  }
  class ze {
    constructor(e, t, i) {
      ((this.startOffset = e), (this.endOffset = t), (this.newLength = i));
    }
  }
  class je {
    constructor(e, t) {
      ((this.documentLength = t), (this.nextEditIdx = 0), (this.deltaOldToNewLineCount = 0), (this.deltaOldToNewColumnCount = 0), (this.deltaLineIdxInOld = -1), (this.edits = e.map(e => Ue.from(e))));
    }
    getOffsetBeforeChange(e) {
      return (this.adjustNextEdit(e), this.translateCurToOld(e));
    }
    getDistanceToNextChange(e) {
      this.adjustNextEdit(e);
      const t = this.edits[this.nextEditIdx];
      return (function (e, t) {
        const i = e,
          n = t;
        if (n - i <= 0) return 0;
        const o = Math.floor(i / Ae),
          s = Math.floor(n / Ae),
          r = n - s * Ae;
        if (o === s) return Oe(0, r - (i - o * Ae));
        return Oe(s - o, r);
      })(e, t ? this.translateOldToCur(t.offsetObj) : this.documentLength);
    }
    translateOldToCur(e) {
      return e.lineCount === this.deltaLineIdxInOld ? Oe(e.lineCount + this.deltaOldToNewLineCount, e.columnCount + this.deltaOldToNewColumnCount) : Oe(e.lineCount + this.deltaOldToNewLineCount, e.columnCount);
    }
    translateCurToOld(e) {
      const t = Pe(e);
      return t.lineCount - this.deltaOldToNewLineCount === this.deltaLineIdxInOld ? Oe(t.lineCount - this.deltaOldToNewLineCount, t.columnCount - this.deltaOldToNewColumnCount) : Oe(t.lineCount - this.deltaOldToNewLineCount, t.columnCount);
    }
    adjustNextEdit(e) {
      for (; this.nextEditIdx < this.edits.length;) {
        const t = this.edits[this.nextEditIdx],
          i = this.translateOldToCur(t.endOffsetAfterObj);
        if (!Be(i, e)) break;
        {
          this.nextEditIdx++;
          const e = Pe(i),
            n = Pe(this.translateOldToCur(t.endOffsetBeforeObj)),
            o = e.lineCount - n.lineCount;
          this.deltaOldToNewLineCount += o;
          const s = this.deltaLineIdxInOld === t.endOffsetBeforeObj.lineCount ? this.deltaOldToNewColumnCount : 0,
            r = e.columnCount - n.columnCount;
          ((this.deltaOldToNewColumnCount = s + r), (this.deltaLineIdxInOld = t.endOffsetBeforeObj.lineCount));
        }
      }
    }
  }
  class Ue {
    constructor(e, t, i) {
      ((this.endOffsetBeforeObj = Pe(t)), (this.endOffsetAfterObj = Pe(Re(e, i))), (this.offsetObj = Pe(e)));
    }
    static from(e) {
      return new Ue(e.startOffset, e.endOffset, e.newLength);
    }
  }
  var $e = i(47707);
  const Ke = new Array();
  class qe {
    constructor(e, t) {
      ((this.items = e), (this.additionalItems = t));
    }
    static create(e, t) {
      if (e <= 128 && 0 === t.length) {
        let i = qe.cache[e];
        return (i || ((i = new qe(e, t)), (qe.cache[e] = i)), i);
      }
      return new qe(e, t);
    }
    static getEmpty() {
      return this.empty;
    }
    add(e, t) {
      const i = t.getKey(e);
      let n = i >> 5;
      if (0 === n) {
        const e = (1 << i) | this.items;
        return e === this.items ? this : qe.create(e, this.additionalItems);
      }
      n--;
      const o = this.additionalItems.slice(0);
      for (; o.length < n;) o.push(0);
      return ((o[n] |= 1 << (31 & i)), qe.create(this.items, o));
    }
    merge(e) {
      const t = this.items | e.items;
      if (this.additionalItems === Ke && e.additionalItems === Ke) return t === this.items ? this : t === e.items ? e : qe.create(t, Ke);
      const i = new Array();
      for (let t = 0; t < Math.max(this.additionalItems.length, e.additionalItems.length); t++) {
        const n = this.additionalItems[t] || 0,
          o = e.additionalItems[t] || 0;
        i.push(n | o);
      }
      return qe.create(t, i);
    }
    intersects(e) {
      if (0 != (this.items & e.items)) return !0;
      for (let t = 0; t < Math.min(this.additionalItems.length, e.additionalItems.length); t++) if (0 != (this.additionalItems[t] & e.additionalItems[t])) return !0;
      return !1;
    }
  }
  ((qe.cache = new Array(129)), (qe.empty = qe.create(0, Ke)));
  const Ze = {
    getKey: e => e
  };
  class Ge {
    constructor() {
      this.items = new Map();
    }
    getKey(e) {
      let t = this.items.get(e);
      return (void 0 === t && ((t = this.items.size), this.items.set(e, t)), t);
    }
  }
  class Ye {
    constructor(e) {
      this._length = e;
    }
    get length() {
      return this._length;
    }
  }
  class Qe extends Ye {
    constructor(e, t, i, n, o) {
      (super(e), (this.openingBracket = t), (this.child = i), (this.closingBracket = n), (this.missingOpeningBracketIds = o));
    }
    static create(e, t, i) {
      let n = e.length;
      return (t && (n = Re(n, t.length)), i && (n = Re(n, i.length)), new Qe(n, e, t, i, t ? t.missingOpeningBracketIds : qe.getEmpty()));
    }
    get kind() {
      return 2;
    }
    get listHeight() {
      return 0;
    }
    get childrenLength() {
      return 3;
    }
    getChild(e) {
      switch (e) {
        case 0:
          return this.openingBracket;
        case 1:
          return this.child;
        case 2:
          return this.closingBracket;
      }
      throw new Error("Invalid child index");
    }
    get children() {
      const e = new Array();
      return (e.push(this.openingBracket), this.child && e.push(this.child), this.closingBracket && e.push(this.closingBracket), e);
    }
    canBeReused(e) {
      return (null !== this.closingBracket && !e.intersects(this.missingOpeningBracketIds));
    }
    deepClone() {
      return new Qe(this.length, this.openingBracket.deepClone(), this.child && this.child.deepClone(), this.closingBracket && this.closingBracket.deepClone(), this.missingOpeningBracketIds);
    }
    computeMinIndentation(e, t) {
      return this.child ? this.child.computeMinIndentation(Re(e, this.openingBracket.length), t) : Number.MAX_SAFE_INTEGER;
    }
  }
  class Xe extends Ye {
    constructor(e, t, i) {
      (super(e), (this.listHeight = t), (this._missingOpeningBracketIds = i), (this.cachedMinIndentation = -1));
    }
    static create23(e, t, i, n = !1) {
      let o = e.length,
        s = e.missingOpeningBracketIds;
      if (e.listHeight !== t.listHeight) throw new Error("Invalid list heights");
      if (((o = Re(o, t.length)), (s = s.merge(t.missingOpeningBracketIds)), i)) {
        if (e.listHeight !== i.listHeight) throw new Error("Invalid list heights");
        ((o = Re(o, i.length)), (s = s.merge(i.missingOpeningBracketIds)));
      }
      return n ? new et(o, e.listHeight + 1, e, t, i, s) : new Je(o, e.listHeight + 1, e, t, i, s);
    }
    static getEmpty() {
      return new it(0, 0, [], qe.getEmpty());
    }
    get kind() {
      return 4;
    }
    get missingOpeningBracketIds() {
      return this._missingOpeningBracketIds;
    }
    throwIfImmutable() {}
    makeLastElementMutable() {
      this.throwIfImmutable();
      const e = this.childrenLength;
      if (0 === e) return;
      const t = this.getChild(e - 1),
        i = 4 === t.kind ? t.toMutable() : t;
      return (t !== i && this.setChild(e - 1, i), i);
    }
    makeFirstElementMutable() {
      this.throwIfImmutable();
      if (0 === this.childrenLength) return;
      const e = this.getChild(0),
        t = 4 === e.kind ? e.toMutable() : e;
      return (e !== t && this.setChild(0, t), t);
    }
    canBeReused(e) {
      if (e.intersects(this.missingOpeningBracketIds)) return !1;
      let t,
        i = this;
      for (; 4 === i.kind && (t = i.childrenLength) > 0;) i = i.getChild(t - 1);
      return i.canBeReused(e);
    }
    handleChildrenChanged() {
      this.throwIfImmutable();
      const e = this.childrenLength;
      let t = this.getChild(0).length,
        i = this.getChild(0).missingOpeningBracketIds;
      for (let n = 1; n < e; n++) {
        const e = this.getChild(n);
        ((t = Re(t, e.length)), (i = i.merge(e.missingOpeningBracketIds)));
      }
      ((this._length = t), (this._missingOpeningBracketIds = i), (this.cachedMinIndentation = -1));
    }
    computeMinIndentation(e, t) {
      if (-1 !== this.cachedMinIndentation) return this.cachedMinIndentation;
      let i = Number.MAX_SAFE_INTEGER,
        n = e;
      for (let e = 0; e < this.childrenLength; e++) {
        const o = this.getChild(e);
        o && ((i = Math.min(i, o.computeMinIndentation(n, t))), (n = Re(n, o.length)));
      }
      return ((this.cachedMinIndentation = i), i);
    }
  }
  class Je extends Xe {
    constructor(e, t, i, n, o, s) {
      (super(e, t, s), (this._item1 = i), (this._item2 = n), (this._item3 = o));
    }
    get childrenLength() {
      return null !== this._item3 ? 3 : 2;
    }
    getChild(e) {
      switch (e) {
        case 0:
          return this._item1;
        case 1:
          return this._item2;
        case 2:
          return this._item3;
      }
      throw new Error("Invalid child index");
    }
    setChild(e, t) {
      switch (e) {
        case 0:
          return void (this._item1 = t);
        case 1:
          return void (this._item2 = t);
        case 2:
          return void (this._item3 = t);
      }
      throw new Error("Invalid child index");
    }
    get children() {
      return this._item3 ? [this._item1, this._item2, this._item3] : [this._item1, this._item2];
    }
    get item1() {
      return this._item1;
    }
    get item2() {
      return this._item2;
    }
    get item3() {
      return this._item3;
    }
    deepClone() {
      return new Je(this.length, this.listHeight, this._item1.deepClone(), this._item2.deepClone(), this._item3 ? this._item3.deepClone() : null, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(e) {
      if (this._item3) throw new Error("Cannot append to a full (2,3) tree node");
      (this.throwIfImmutable(), (this._item3 = e), this.handleChildrenChanged());
    }
    unappendChild() {
      if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
      this.throwIfImmutable();
      const e = this._item3;
      return ((this._item3 = null), this.handleChildrenChanged(), e);
    }
    prependChildOfSameHeight(e) {
      if (this._item3) throw new Error("Cannot prepend to a full (2,3) tree node");
      (this.throwIfImmutable(), (this._item3 = this._item2), (this._item2 = this._item1), (this._item1 = e), this.handleChildrenChanged());
    }
    unprependChild() {
      if (!this._item3) throw new Error("Cannot remove from a non-full (2,3) tree node");
      this.throwIfImmutable();
      const e = this._item1;
      return ((this._item1 = this._item2), (this._item2 = this._item3), (this._item3 = null), this.handleChildrenChanged(), e);
    }
    toMutable() {
      return this;
    }
  }
  class et extends Je {
    toMutable() {
      return new Je(this.length, this.listHeight, this.item1, this.item2, this.item3, this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
      throw new Error("this instance is immutable");
    }
  }
  class tt extends Xe {
    constructor(e, t, i, n) {
      (super(e, t, n), (this._children = i));
    }
    get childrenLength() {
      return this._children.length;
    }
    getChild(e) {
      return this._children[e];
    }
    setChild(e, t) {
      this._children[e] = t;
    }
    get children() {
      return this._children;
    }
    deepClone() {
      const e = new Array(this._children.length);
      for (let t = 0; t < this._children.length; t++) e[t] = this._children[t].deepClone();
      return new tt(this.length, this.listHeight, e, this.missingOpeningBracketIds);
    }
    appendChildOfSameHeight(e) {
      (this.throwIfImmutable(), this._children.push(e), this.handleChildrenChanged());
    }
    unappendChild() {
      this.throwIfImmutable();
      const e = this._children.pop();
      return (this.handleChildrenChanged(), e);
    }
    prependChildOfSameHeight(e) {
      (this.throwIfImmutable(), this._children.unshift(e), this.handleChildrenChanged());
    }
    unprependChild() {
      this.throwIfImmutable();
      const e = this._children.shift();
      return (this.handleChildrenChanged(), e);
    }
    toMutable() {
      return this;
    }
  }
  class it extends tt {
    toMutable() {
      return new tt(this.length, this.listHeight, [...this.children], this.missingOpeningBracketIds);
    }
    throwIfImmutable() {
      throw new Error("this instance is immutable");
    }
  }
  const nt = [];
  class ot extends Ye {
    get listHeight() {
      return 0;
    }
    get childrenLength() {
      return 0;
    }
    getChild(e) {
      return null;
    }
    get children() {
      return nt;
    }
    deepClone() {
      return this;
    }
  }
  class st extends ot {
    get kind() {
      return 0;
    }
    get missingOpeningBracketIds() {
      return qe.getEmpty();
    }
    canBeReused(e) {
      return !0;
    }
    computeMinIndentation(e, t) {
      const i = Pe(e),
        n = (0 === i.columnCount ? i.lineCount : i.lineCount + 1) + 1,
        o = ((s = Re(e, this.length)), Math.floor(s / Ae) + 1);
      var s;
      let r = Number.MAX_SAFE_INTEGER;
      for (let e = n; e <= o; e++) {
        const i = t.getLineFirstNonWhitespaceColumn(e),
          n = t.getLineContent(e);
        if (0 === i) continue;
        const o = $e.i.visibleColumnFromColumn(n, i, t.getOptions().tabSize);
        r = Math.min(r, o);
      }
      return r;
    }
  }
  class rt extends ot {
    constructor(e) {
      super(e);
    }
    static create(e) {
      const t = e,
        i = rt.cacheByLength.get(t);
      if (i) return i;
      const n = new rt(e);
      return (rt.cacheByLength.set(t, n), n);
    }
    get kind() {
      return 1;
    }
    get missingOpeningBracketIds() {
      return qe.getEmpty();
    }
    canBeReused(e) {
      return !1;
    }
    computeMinIndentation(e, t) {
      return Number.MAX_SAFE_INTEGER;
    }
  }
  rt.cacheByLength = new Map();
  class at extends ot {
    constructor(e, t) {
      (super(t), (this.missingOpeningBracketIds = e));
    }
    get kind() {
      return 3;
    }
    canBeReused(e) {
      return !e.intersects(this.missingOpeningBracketIds);
    }
    computeMinIndentation(e, t) {
      return Number.MAX_SAFE_INTEGER;
    }
  }
  class lt {
    constructor(e, t, i, n, o) {
      ((this.length = e), (this.kind = t), (this.bracketId = i), (this.bracketIds = n), (this.astNode = o));
    }
  }
  class ct {
    constructor(e, t) {
      ((this.textModel = e), (this.bracketTokens = t), (this.reader = new dt(this.textModel, this.bracketTokens)), (this._offset = 0), (this.didPeek = !1), (this.peeked = null), (this.textBufferLineCount = e.getLineCount()), (this.textBufferLastLineLength = e.getLineLength(this.textBufferLineCount)));
    }
    get offset() {
      return this._offset;
    }
    get length() {
      return Oe(this.textBufferLineCount, this.textBufferLastLineLength);
    }
    skip(e) {
      ((this.didPeek = !1), (this._offset = Re(this._offset, e)));
      const t = Pe(this._offset);
      this.reader.setPosition(t.lineCount, t.columnCount);
    }
    read() {
      let e;
      return (this.peeked ? ((this.didPeek = !1), (e = this.peeked)) : (e = this.reader.read()), e && (this._offset = Re(this._offset, e.length)), e);
    }
    peek() {
      return (this.didPeek || ((this.peeked = this.reader.read()), (this.didPeek = !0)), this.peeked);
    }
  }
  class dt {
    constructor(e, t) {
      ((this.textModel = e), (this.bracketTokens = t), (this.lineIdx = 0), (this.line = null), (this.lineCharOffset = 0), (this.lineTokens = null), (this.lineTokenOffset = 0), (this.peekedToken = null), (this.textBufferLineCount = e.getLineCount()), (this.textBufferLastLineLength = e.getLineLength(this.textBufferLineCount)));
    }
    setPosition(e, t) {
      (e === this.lineIdx ? ((this.lineCharOffset = t), (this.lineTokenOffset = 0 === this.lineCharOffset ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset))) : ((this.lineIdx = e), (this.lineCharOffset = t), (this.line = null)), (this.peekedToken = null));
    }
    read() {
      if (this.peekedToken) {
        const e = this.peekedToken;
        return ((this.peekedToken = null), (this.lineCharOffset += e.length), e);
      }
      if (this.lineIdx > this.textBufferLineCount - 1 || (this.lineIdx === this.textBufferLineCount - 1 && this.lineCharOffset >= this.textBufferLastLineLength)) return null;
      null === this.line && ((this.lineTokens = this.textModel.getLineTokens(this.lineIdx + 1)), (this.line = this.lineTokens.getLineContent()), (this.lineTokenOffset = 0 === this.lineCharOffset ? 0 : this.lineTokens.findTokenIndexAtOffset(this.lineCharOffset)));
      const e = this.lineIdx,
        t = this.lineCharOffset;
      let i = 0;
      for (;;) {
        const n = this.lineTokens,
          o = n.getCount();
        let s = null;
        if (this.lineTokenOffset < o) {
          const r = n.getMetadata(this.lineTokenOffset);
          for (; this.lineTokenOffset + 1 < o && r === n.getMetadata(this.lineTokenOffset + 1);) this.lineTokenOffset++;
          const a = 0 === me.NX.getTokenType(r),
            l = n.getEndOffset(this.lineTokenOffset);
          if (a && l !== this.lineCharOffset) {
            const e = n.getLanguageId(this.lineTokenOffset),
              t = this.line.substring(this.lineCharOffset, l),
              i = this.bracketTokens.getSingleLanguageBracketTokens(e),
              o = i.regExpGlobal;
            if (o) {
              o.lastIndex = 0;
              const e = o.exec(t);
              e && ((s = i.getToken(e[0])), s && (this.lineCharOffset += e.index));
            }
          }
          if (((i += l - this.lineCharOffset), s)) {
            if (e !== this.lineIdx || t !== this.lineCharOffset) {
              this.peekedToken = s;
              break;
            }
            return ((this.lineCharOffset += s.length), s);
          }
          (this.lineTokenOffset++, (this.lineCharOffset = l));
        } else {
          if (this.lineIdx === this.textBufferLineCount - 1) break;
          if ((this.lineIdx++, (this.lineTokens = this.textModel.getLineTokens(this.lineIdx + 1)), (this.lineTokenOffset = 0), (this.line = this.lineTokens.getLineContent()), (this.lineCharOffset = 0), (i += 33), i > 1e3)) break;
        }
        if (i > 1500) break;
      }
      const n = ((o = e), (s = t), (r = this.lineIdx), (a = this.lineCharOffset), o !== r ? Oe(r - o, a) : Oe(0, a - s));
      var o, s, r, a;
      return new lt(n, 0, -1, qe.getEmpty(), new st(n));
    }
  }
  class ht {
    constructor(e, t) {
      ((this.text = e), (this._offset = 0), (this.idx = 0));
      const i = t.getRegExpStr() ? new RegExp(t.getRegExpStr() + "|\n", "g") : null,
        n = [];
      let o,
        s = 0,
        r = 0,
        a = 0,
        l = 0;
      const c = new Array();
      for (let e = 0; e < 60; e++) c.push(new lt(Oe(0, e), 0, -1, qe.getEmpty(), new st(Oe(0, e))));
      const d = new Array();
      for (let e = 0; e < 60; e++) d.push(new lt(Oe(1, e), 0, -1, qe.getEmpty(), new st(Oe(1, e))));
      if (i) for (i.lastIndex = 0; null !== (o = i.exec(e));) {
        const e = o.index,
          i = o[0];
        if ("\n" === i) (s++, (r = e + 1));else {
          if (a !== e) {
            let t;
            if (l === s) {
              const i = e - a;
              if (i < c.length) t = c[i];else {
                const e = Oe(0, i);
                t = new lt(e, 0, -1, qe.getEmpty(), new st(e));
              }
            } else {
              const i = s - l,
                n = e - r;
              if (1 === i && n < d.length) t = d[n];else {
                const e = Oe(i, n);
                t = new lt(e, 0, -1, qe.getEmpty(), new st(e));
              }
            }
            n.push(t);
          }
          (n.push(t.getToken(i)), (a = e + i.length), (l = s));
        }
      }
      const h = e.length;
      if (a !== h) {
        const e = l === s ? Oe(0, h - a) : Oe(s - l, h - r);
        n.push(new lt(e, 0, -1, qe.getEmpty(), new st(e)));
      }
      ((this.length = Oe(s, h - r)), (this.tokens = n));
    }
    get offset() {
      return this._offset;
    }
    read() {
      return this.tokens[this.idx++] || null;
    }
    peek() {
      return this.tokens[this.idx] || null;
    }
    skip(e) {
      throw new n.B8();
    }
  }
  class ut {
    constructor(e) {
      ((this.map = e), (this.hasRegExp = !1), (this._regExpGlobal = null));
    }
    static createFromLanguage(e, t) {
      function i(e, i) {
        return t.getKey(`${e}:::${i}`);
      }
      const n = e.characterPair.getColorizedBrackets(),
        o = new Map(),
        s = new Set();
      for (const [t, r] of n) {
        s.add(t);
        let n = o.get(r);
        const a = i(e.languageId, t);
        (n || ((n = {
          openingBrackets: qe.getEmpty(),
          first: a
        }), o.set(r, n)), (n.openingBrackets = n.openingBrackets.add(a, Ze)));
      }
      const r = new Map();
      for (const [e, t] of o) {
        const i = Oe(0, e.length);
        r.set(e, new lt(i, 2, t.first, t.openingBrackets, rt.create(i)));
      }
      for (const t of s) {
        const n = Oe(0, t.length),
          o = i(e.languageId, t);
        r.set(t, new lt(n, 1, o, qe.getEmpty().add(o, Ze), rt.create(n)));
      }
      return new ut(r);
    }
    getRegExpStr() {
      if (this.isEmpty) return null;
      {
        const e = [...this.map.keys()];
        return (e.sort(), e.reverse(), e.map(e => (function (e) {
          const t = (0, r.ec)(e);
          return /^[\w ]+$/.test(e) ? `\\b${t}\\b` : t;
        })(e)).join("|"));
      }
    }
    get regExpGlobal() {
      if (!this.hasRegExp) {
        const e = this.getRegExpStr();
        ((this._regExpGlobal = e ? new RegExp(e, "g") : null), (this.hasRegExp = !0));
      }
      return this._regExpGlobal;
    }
    getToken(e) {
      return this.map.get(e);
    }
    get isEmpty() {
      return 0 === this.map.size;
    }
  }
  class gt {
    constructor(e, t) {
      ((this.denseKeyProvider = e), (this.getLanguageConfiguration = t), (this.languageIdToBracketTokens = new Map()));
    }
    didLanguageChange(e) {
      const t = this.languageIdToBracketTokens.get(e);
      if (!t) return !1;
      const i = ut.createFromLanguage(this.getLanguageConfiguration(e), this.denseKeyProvider).getRegExpStr();
      return t.getRegExpStr() !== i;
    }
    getSingleLanguageBracketTokens(e) {
      let t = this.languageIdToBracketTokens.get(e);
      return (t || ((t = ut.createFromLanguage(this.getLanguageConfiguration(e), this.denseKeyProvider)), this.languageIdToBracketTokens.set(e, t)), t);
    }
  }
  function pt(e, t = !1) {
    if (0 === e.length) return null;
    if (1 === e.length) return e[0];
    let i = e.length;
    for (; i > 3;) {
      const n = i >> 1;
      for (let o = 0; o < n; o++) {
        const n = o << 1;
        e[o] = Xe.create23(e[n], e[n + 1], n + 3 === i ? e[n + 2] : null, t);
      }
      i = n;
    }
    return Xe.create23(e[0], e[1], i >= 3 ? e[2] : null, t);
  }
  function ft(e, t) {
    return Math.abs(e.listHeight - t.listHeight);
  }
  function mt(e, t) {
    return e.listHeight === t.listHeight ? Xe.create23(e, t, null, !1) : e.listHeight > t.listHeight ? (function (e, t) {
      let i = (e = e.toMutable());
      const n = new Array();
      let o;
      for (;;) {
        if (t.listHeight === i.listHeight) {
          o = t;
          break;
        }
        if (4 !== i.kind) throw new Error("unexpected");
        (n.push(i), (i = i.makeLastElementMutable()));
      }
      for (let e = n.length - 1; e >= 0; e--) {
        const t = n[e];
        o ? t.childrenLength >= 3 ? (o = Xe.create23(t.unappendChild(), o, null, !1)) : (t.appendChildOfSameHeight(o), (o = void 0)) : t.handleChildrenChanged();
      }
      return o ? Xe.create23(e, o, null, !1) : e;
    })(e, t) : (function (e, t) {
      let i = (e = e.toMutable());
      const n = new Array();
      for (; t.listHeight !== i.listHeight;) {
        if (4 !== i.kind) throw new Error("unexpected");
        (n.push(i), (i = i.makeFirstElementMutable()));
      }
      let o = t;
      for (let e = n.length - 1; e >= 0; e--) {
        const t = n[e];
        o ? t.childrenLength >= 3 ? (o = Xe.create23(o, t.unprependChild(), null, !1)) : (t.prependChildOfSameHeight(o), (o = void 0)) : t.handleChildrenChanged();
      }
      return o ? Xe.create23(o, e, null, !1) : e;
    })(t, e);
  }
  class vt {
    constructor(e) {
      ((this.lastOffset = 0), (this.nextNodes = [e]), (this.offsets = [0]), (this.idxs = []));
    }
    readLongestNodeAt(e, t) {
      if (Fe(e, this.lastOffset)) throw new Error("Invalid offset");
      for (this.lastOffset = e;;) {
        const i = bt(this.nextNodes);
        if (!i) return;
        const n = bt(this.offsets);
        if (Fe(e, n)) return;
        if (Fe(n, e)) {
          if (Re(n, i.length) <= e) this.nextNodeAfterCurrent();else {
            const e = _t(i);
            -1 !== e ? (this.nextNodes.push(i.getChild(e)), this.offsets.push(n), this.idxs.push(e)) : this.nextNodeAfterCurrent();
          }
        } else {
          if (t(i)) return (this.nextNodeAfterCurrent(), i);
          {
            const e = _t(i);
            if (-1 === e) return void this.nextNodeAfterCurrent();
            (this.nextNodes.push(i.getChild(e)), this.offsets.push(n), this.idxs.push(e));
          }
        }
      }
    }
    nextNodeAfterCurrent() {
      for (;;) {
        const e = bt(this.offsets),
          t = bt(this.nextNodes);
        if ((this.nextNodes.pop(), this.offsets.pop(), 0 === this.idxs.length)) break;
        const i = bt(this.nextNodes),
          n = _t(i, this.idxs[this.idxs.length - 1]);
        if (-1 !== n) {
          (this.nextNodes.push(i.getChild(n)), this.offsets.push(Re(e, t.length)), (this.idxs[this.idxs.length - 1] = n));
          break;
        }
        this.idxs.pop();
      }
    }
  }
  function _t(e, t = -1) {
    for (;;) {
      if (++t >= e.childrenLength) return -1;
      if (e.getChild(t)) return t;
    }
  }
  function bt(e) {
    return e.length > 0 ? e[e.length - 1] : void 0;
  }
  function wt(e, t, i, n) {
    return new yt(e, t, i, n).parseDocument();
  }
  class yt {
    constructor(e, t, i, n) {
      if (((this.tokenizer = e), (this.createImmutableLists = n), (this._itemsConstructed = 0), (this._itemsFromCache = 0), i && n)) throw new Error("Not supported");
      ((this.oldNodeReader = i ? new vt(i) : void 0), (this.positionMapper = new je(t, e.length)));
    }
    parseDocument() {
      ((this._itemsConstructed = 0), (this._itemsFromCache = 0));
      let e = this.parseList(qe.getEmpty());
      return (e || (e = Xe.getEmpty()), e);
    }
    parseList(e) {
      const t = new Array();
      for (;;) {
        const i = this.tokenizer.peek();
        if (!i || (2 === i.kind && i.bracketIds.intersects(e))) break;
        const n = this.parseChild(e);
        (4 === n.kind && 0 === n.childrenLength) || t.push(n);
      }
      const i = this.oldNodeReader ? (function (e) {
        if (0 === e.length) return null;
        if (1 === e.length) return e[0];
        let t = 0;
        function i() {
          if (t >= e.length) return null;
          const i = t,
            n = e[i].listHeight;
          for (t++; t < e.length && e[t].listHeight === n;) t++;
          return t - i >= 2 ? pt(0 === i && t === e.length ? e : e.slice(i, t), !1) : e[i];
        }
        let n = i(),
          o = i();
        if (!o) return n;
        for (let e = i(); e; e = i()) ft(n, o) <= ft(o, e) ? ((n = mt(n, o)), (o = e)) : (o = mt(o, e));
        return mt(n, o);
      })(t) : pt(t, this.createImmutableLists);
      return i;
    }
    parseChild(e) {
      if (this.oldNodeReader) {
        const t = this.positionMapper.getDistanceToNextChange(this.tokenizer.offset);
        if (0 !== t) {
          const i = this.oldNodeReader.readLongestNodeAt(this.positionMapper.getOffsetBeforeChange(this.tokenizer.offset), i => {
            if (!Fe(i.length, t)) return !1;
            return i.canBeReused(e);
          });
          if (i) return (this._itemsFromCache++, this.tokenizer.skip(i.length), i);
        }
      }
      this._itemsConstructed++;
      const t = this.tokenizer.read();
      switch (t.kind) {
        case 2:
          return new at(t.bracketIds, t.length);
        case 0:
          return t.astNode;
        case 1:
          const i = e.merge(t.bracketIds),
            n = this.parseList(i),
            o = this.tokenizer.peek();
          return o && 2 === o.kind && (o.bracketId === t.bracketId || o.bracketIds.intersects(t.bracketIds)) ? (this.tokenizer.read(), Qe.create(t.astNode, n, o.astNode)) : Qe.create(t.astNode, n, null);
        default:
          throw new Error("unexpected");
      }
    }
  }
  class Ct extends s.JT {
    constructor(e, t) {
      (super(), (this.textModel = e), (this.languageConfigurationService = t), (this.cache = this._register(new s.XK())), (this.onDidChangeEmitter = new o.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.bracketsRequested = !1), this._register(e.onDidChangeOptions(e => {
        (this.cache.clear(), this.updateCache());
      })), this._register(e.onDidChangeLanguage(e => {
        (this.cache.clear(), this.updateCache());
      })), this._register(this.languageConfigurationService.onDidChange(e => {
        var t;
        (e.languageId && !(null === (t = this.cache.value) || void 0 === t ? void 0 : t.object.didLanguageChange(e.languageId))) || (this.cache.clear(), this.updateCache());
      })));
    }
    get isDocumentSupported() {
      return this.textModel.getValueLength() <= 5e6;
    }
    updateCache() {
      if (this.bracketsRequested && this.isDocumentSupported) {
        if (!this.cache.value) {
          const i = new s.SL();
          ((this.cache.value = ((e = i.add(new xt(this.textModel, e => this.languageConfigurationService.getLanguageConfiguration(e)))), (t = i), {
            object: e,
            dispose: () => (null == t ? void 0 : t.dispose())
          })), i.add(this.cache.value.object.onDidChange(e => this.onDidChangeEmitter.fire(e))), this.onDidChangeEmitter.fire());
        }
      } else (this.cache.clear(), this.onDidChangeEmitter.fire());
      var e, t;
    }
    handleContentChanged(e) {
      var t;
      null === (t = this.cache.value) || void 0 === t || t.object.handleContentChanged(e);
    }
    getBracketPairsInRange(e) {
      var t;
      return ((this.bracketsRequested = !0), this.updateCache(), (null === (t = this.cache.value) || void 0 === t ? void 0 : t.object.getBracketPairsInRange(e, !1)) || []);
    }
    getBracketPairsInRangeWithMinIndentation(e) {
      var t;
      return ((this.bracketsRequested = !0), this.updateCache(), (null === (t = this.cache.value) || void 0 === t ? void 0 : t.object.getBracketPairsInRange(e, !0)) || []);
    }
    getBracketsInRange(e) {
      var t;
      return ((this.bracketsRequested = !0), this.updateCache(), (null === (t = this.cache.value) || void 0 === t ? void 0 : t.object.getBracketsInRange(e)) || []);
    }
  }
  class xt extends s.JT {
    constructor(e, t) {
      if ((super(), (this.textModel = e), (this.getLanguageConfiguration = t), (this.didChangeEmitter = new o.Q5()), (this.denseKeyProvider = new Ge()), (this.brackets = new gt(this.denseKeyProvider, this.getLanguageConfiguration)), (this.onDidChange = this.didChangeEmitter.event), this._register(e.onBackgroundTokenizationStateChanged(() => {
        if (2 === e.backgroundTokenizationState) {
          const e = void 0 === this.initialAstWithoutTokens;
          ((this.initialAstWithoutTokens = void 0), e || this.didChangeEmitter.fire());
        }
      })), this._register(e.onDidChangeTokens(({
        ranges: e
      }) => {
        const t = e.map(e => new ze(Oe(e.fromLineNumber - 1, 0), Oe(e.toLineNumber, 0), Oe(e.toLineNumber - e.fromLineNumber + 1, 0)));
        ((this.astWithTokens = this.parseDocumentFromTextBuffer(t, this.astWithTokens, !1)), this.initialAstWithoutTokens || this.didChangeEmitter.fire());
      })), 0 === e.backgroundTokenizationState)) {
        const e = this.brackets.getSingleLanguageBracketTokens(this.textModel.getLanguageId()),
          t = new ht(this.textModel.getValue(), e);
        ((this.initialAstWithoutTokens = wt(t, [], void 0, !0)), (this.astWithTokens = this.initialAstWithoutTokens));
      } else 2 === e.backgroundTokenizationState ? ((this.initialAstWithoutTokens = void 0), (this.astWithTokens = this.parseDocumentFromTextBuffer([], void 0, !1))) : 1 === e.backgroundTokenizationState && ((this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer([], void 0, !0)), (this.astWithTokens = this.initialAstWithoutTokens));
    }
    didLanguageChange(e) {
      return this.brackets.didLanguageChange(e);
    }
    handleContentChanged(e) {
      const t = e.changes.map(e => {
        const t = d.e.lift(e.range);
        return new ze(We(t.getStartPosition()), We(t.getEndPosition()), (function (e) {
          const t = (0, r.uq)(e);
          return Oe(t.length - 1, t[t.length - 1].length);
        })(e.text));
      }).reverse();
      ((this.astWithTokens = this.parseDocumentFromTextBuffer(t, this.astWithTokens, !1)), this.initialAstWithoutTokens && (this.initialAstWithoutTokens = this.parseDocumentFromTextBuffer(t, this.initialAstWithoutTokens, !1)));
    }
    parseDocumentFromTextBuffer(e, t, i) {
      const n = t;
      return wt(new ct(this.textModel, this.brackets), e, n, i);
    }
    getBracketsInRange(e) {
      const t = Oe(e.startLineNumber - 1, e.startColumn - 1),
        i = Oe(e.endLineNumber - 1, e.endColumn - 1),
        n = new Array(),
        o = this.initialAstWithoutTokens || this.astWithTokens;
      return (St(o, 0, o.length, t, i, n), n);
    }
    getBracketPairsInRange(e, t) {
      const i = new Array(),
        n = We(e.getStartPosition()),
        o = We(e.getEndPosition()),
        s = this.initialAstWithoutTokens || this.astWithTokens,
        r = new kt(i, t, this.textModel);
      return (Lt(s, 0, s.length, n, o, r), i);
    }
  }
  function St(e, t, i, n, o, s, r = 0) {
    if (1 === e.kind) {
      const e = He(t, i);
      s.push(new Ie(e, r - 1, !1));
    } else if (3 === e.kind) {
      const e = He(t, i);
      s.push(new Ie(e, r - 1, !0));
    } else if (4 === e.kind) for (const a of e.children) ((i = Re(t, a.length)), Be(t, o) && Ve(i, n) && St(a, t, i, n, o, s, r), (t = i));else if (2 === e.kind) {
      r++;
      {
        const a = e.openingBracket;
        ((i = Re(t, a.length)), Be(t, o) && Ve(i, n) && St(a, t, i, n, o, s, r), (t = i));
      }
      if (e.child) {
        const a = e.child;
        ((i = Re(t, a.length)), Be(t, o) && Ve(i, n) && St(a, t, i, n, o, s, r), (t = i));
      }
      if (e.closingBracket) {
        const a = e.closingBracket;
        ((i = Re(t, a.length)), Be(t, o) && Ve(i, n) && St(a, t, i, n, o, s, r), (t = i));
      }
    }
  }
  class kt {
    constructor(e, t, i) {
      ((this.result = e), (this.includeMinIndentation = t), (this.textModel = i));
    }
  }
  function Lt(e, t, i, n, o, s, r = 0) {
    var a;
    if (2 === e.kind) {
      const n = Re(t, e.openingBracket.length);
      let o = -1;
      (s.includeMinIndentation && (o = e.computeMinIndentation(t, s.textModel)), s.result.push(new Te(He(t, i), He(t, n), e.closingBracket ? He(Re(n, (null === (a = e.child) || void 0 === a ? void 0 : a.length) || 0), i) : void 0, r, o)), r++);
    }
    let l = t;
    for (const t of e.children) {
      const e = l;
      ((l = Re(l, t.length)), Be(e, o) && Be(n, l) && Lt(t, e, l, n, o, s, r));
    }
  }
  var Nt = i(27869),
    Dt = i(97781);
  class It extends s.JT {
    constructor(e) {
      (super(), (this.textModel = e), (this.colorProvider = new Et()), (this.onDidChangeEmitter = new o.Q5()), (this.onDidChange = this.onDidChangeEmitter.event), (this.colorizationOptions = e.getOptions().bracketPairColorizationOptions), this._register(e.onDidChangeOptions(t => {
        this.colorizationOptions = e.getOptions().bracketPairColorizationOptions;
      })), this._register(e.bracketPairs.onDidChange(e => {
        this.onDidChangeEmitter.fire();
      })));
    }
    getDecorationsInRange(e, t, i) {
      if (void 0 === t) return [];
      if (!this.colorizationOptions.enabled) return [];
      const n = new Array(),
        o = this.textModel.bracketPairs.getBracketsInRange(e);
      for (const e of o) n.push({
        id: `bracket${e.range.toString()}-${e.nestingLevel}`,
        options: {
          description: "BracketPairColorization",
          inlineClassName: this.colorProvider.getInlineClassName(e)
        },
        ownerId: 0,
        range: e.range
      });
      return n;
    }
    getAllDecorations(e, t) {
      return void 0 === e ? [] : this.colorizationOptions.enabled ? this.getDecorationsInRange(new d.e(1, 1, this.textModel.getLineCount(), 1), e, t) : [];
    }
  }
  class Et {
    constructor() {
      this.unexpectedClosingBracketClassName = "unexpected-closing-bracket";
    }
    getInlineClassName(e) {
      return e.isInvalid ? this.unexpectedClosingBracketClassName : this.getInlineClassNameOfLevel(e.nestingLevel);
    }
    getInlineClassNameOfLevel(e) {
      return "bracket-highlighting-" + (e % 30);
    }
  }
  (0, Dt.Ic)((e, t) => {
    const i = [Nt.zJ, Nt.Vs, Nt.CE, Nt.UP, Nt.r0, Nt.m1],
      n = new Et();
    t.addRule(`.monaco-editor .${n.unexpectedClosingBracketClassName} { color: ${e.getColor(Nt.ts)}; }`);
    let o = i.map(t => e.getColor(t)).filter(e => !!e).filter(e => !e.isTransparent());
    for (let e = 0; e < 30; e++) {
      const i = o[e % o.length];
      t.addRule(`.monaco-editor .${n.getInlineClassNameOfLevel(e)} { color: ${i}; }`);
    }
  });
  var Tt = i(71531),
    Mt = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    At = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  function Ot(e) {
    const t = new ue();
    return (t.acceptChunk(e), t.finish());
  }
  function Pt(e, t) {
    return ("string" == typeof e ? Ot(e) : e).create(t);
  }
  let Rt = 0;
  class Ft {
    constructor(e) {
      ((this._source = e), (this._eos = !1));
    }
    read() {
      if (this._eos) return null;
      let e = [],
        t = 0,
        i = 0;
      for (;;) {
        let n = this._source.read();
        if (null === n) return ((this._eos = !0), 0 === t ? null : e.join(""));
        if ((n.length > 0 && ((e[t++] = n), (i += n.length)), i >= 65536)) return e.join("");
      }
    }
  }
  const Bt = () => {
    throw new Error("Invalid change accessor");
  };
  class Vt {
    constructor() {
      this._searchCanceledBrand = void 0;
    }
  }
  function Wt(e) {
    return e instanceof Vt ? null : e;
  }
  Vt.INSTANCE = new Vt();
  let Ht = class e extends s.JT {
    constructor(t, i, n, s = null, l, c, h) {
      (super(), (this._undoRedoService = l), (this._modeService = c), (this._languageConfigurationService = h), (this._onWillDispose = this._register(new o.Q5())), (this.onWillDispose = this._onWillDispose.event), (this._onDidChangeDecorations = this._register(new ei(e => this.handleBeforeFireDecorationsChangedEvent(e)))), (this.onDidChangeDecorations = this._onDidChangeDecorations.event), (this._onDidChangeLanguage = this._register(new o.Q5())), (this.onDidChangeLanguage = this._onDidChangeLanguage.event), (this._onDidChangeLanguageConfiguration = this._register(new o.Q5())), (this.onDidChangeLanguageConfiguration = this._onDidChangeLanguageConfiguration.event), (this._onDidChangeTokens = this._register(new o.Q5())), (this.onDidChangeTokens = this._onDidChangeTokens.event), (this._onDidChangeOptions = this._register(new o.Q5())), (this.onDidChangeOptions = this._onDidChangeOptions.event), (this._onDidChangeAttached = this._register(new o.Q5())), (this.onDidChangeAttached = this._onDidChangeAttached.event), (this._onDidChangeContentOrInjectedText = this._register(new o.Q5())), (this.onDidChangeContentOrInjectedText = this._onDidChangeContentOrInjectedText.event), (this._eventEmitter = this._register(new ti())), (this._backgroundTokenizationState = 0), (this._onBackgroundTokenizationStateChanged = this._register(new o.Q5())), (this.onBackgroundTokenizationStateChanged = this._onBackgroundTokenizationStateChanged.event), this._register(this._eventEmitter.fastEvent(e => {
        this._onDidChangeContentOrInjectedText.fire(e.rawContentChangedEvent);
      })), Rt++, (this.id = "$model" + Rt), (this.isForSimpleWidget = i.isForSimpleWidget), (this._associatedResource = null == s ? a.o.parse("inmemory://model/" + Rt) : s), (this._attachedEditorCount = 0));
      const {
        textBuffer: u,
        disposable: p
      } = Pt(t, i.defaultEOL);
      ((this._buffer = u), (this._bufferDisposable = p), (this._options = e.resolveOptions(this._buffer, i)));
      const f = this._buffer.getLineCount(),
        m = this._buffer.getValueLengthInRange(new d.e(1, 1, f, this._buffer.getLineLength(f) + 1), 0);
      (i.largeFileOptimizations ? (this._isTooLargeForTokenization = m > e.LARGE_FILE_SIZE_THRESHOLD || f > e.LARGE_FILE_LINE_COUNT_THRESHOLD) : (this._isTooLargeForTokenization = !1), (this._isTooLargeForSyncing = m > e.MODEL_SYNC_LIMIT), (this._versionId = 1), (this._alternativeVersionId = 1), (this._initialUndoRedoSnapshot = null), (this._isDisposed = !1), (this._isDisposing = !1), (this._languageId = n || ve.TG), (this._languageRegistryListener = this._languageConfigurationService.onDidChange(e => {
        e.affects(this._languageId) && this._onDidChangeLanguageConfiguration.fire({});
      })), (this._instanceId = r.PJ(Rt)), (this._lastDecorationId = 0), (this._decorations = Object.create(null)), (this._decorationsTree = new $t()), (this._commandManager = new g.NL(this, this._undoRedoService)), (this._isUndoing = !1), (this._isRedoing = !1), (this._trimAutoWhitespaceLines = null), (this._tokens = new le.Rl(this._modeService.languageIdCodec)), (this._tokens2 = new le.cx(this._modeService.languageIdCodec)), (this._tokenization = new ye(this, this._modeService.languageIdCodec)), (this._bracketPairColorizer = this._register(new Ct(this, this._languageConfigurationService))), (this._decorationProvider = this._register(new It(this))), this._register(this._decorationProvider.onDidChange(() => {
        (this._onDidChangeDecorations.beginDeferredEmit(), this._onDidChangeDecorations.fire(), this._onDidChangeDecorations.endDeferredEmit());
      })));
    }
    static resolveOptions(e, t) {
      if (t.detectIndentation) {
        const i = m(e, t.tabSize, t.insertSpaces);
        return new u.dJ({
          tabSize: i.tabSize,
          indentSize: i.tabSize,
          insertSpaces: i.insertSpaces,
          trimAutoWhitespace: t.trimAutoWhitespace,
          defaultEOL: t.defaultEOL,
          bracketPairColorizationOptions: t.bracketPairColorizationOptions
        });
      }
      return new u.dJ({
        tabSize: t.tabSize,
        indentSize: t.indentSize,
        insertSpaces: t.insertSpaces,
        trimAutoWhitespace: t.trimAutoWhitespace,
        defaultEOL: t.defaultEOL,
        bracketPairColorizationOptions: t.bracketPairColorizationOptions
      });
    }
    onDidChangeContentFast(e) {
      return this._eventEmitter.fastEvent(t => e(t.contentChangedEvent));
    }
    onDidChangeContent(e) {
      return this._eventEmitter.slowEvent(t => e(t.contentChangedEvent));
    }
    get bracketPairs() {
      return this._bracketPairColorizer;
    }
    get backgroundTokenizationState() {
      return this._backgroundTokenizationState;
    }
    handleTokenizationProgress(e) {
      if (2 === this._backgroundTokenizationState) return;
      const t = e ? 2 : 1;
      this._backgroundTokenizationState !== t && ((this._backgroundTokenizationState = t), this._onBackgroundTokenizationStateChanged.fire());
    }
    dispose() {
      ((this._isDisposing = !0), this._onWillDispose.fire(), this._languageRegistryListener.dispose(), this._tokenization.dispose(), (this._isDisposed = !0), super.dispose(), this._bufferDisposable.dispose(), (this._isDisposing = !1));
      const e = new de([], "", "\n", !1, !1, !0, !0);
      (e.dispose(), (this._buffer = e));
    }
    _assertNotDisposed() {
      if (this._isDisposed) throw new Error("Model is disposed!");
    }
    _emitContentChangedEvent(e, t) {
      (this._bracketPairColorizer.handleContentChanged(t), this._isDisposing || this._eventEmitter.fire(new ge.fV(e, t)));
    }
    setValue(e) {
      if ((this._assertNotDisposed(), null === e)) return;
      const {
        textBuffer: t,
        disposable: i
      } = Pt(e, this._options.defaultEOL);
      this._setValueFromTextBuffer(t, i);
    }
    _createContentChanged2(e, t, i, n, o, s, r) {
      return {
        changes: [{
          range: e,
          rangeOffset: t,
          rangeLength: i,
          text: n
        }],
        eol: this._buffer.getEOL(),
        versionId: this.getVersionId(),
        isUndoing: o,
        isRedoing: s,
        isFlush: r
      };
    }
    _setValueFromTextBuffer(e, t) {
      this._assertNotDisposed();
      const i = this.getFullModelRange(),
        n = this.getValueLengthInRange(i),
        o = this.getLineCount(),
        s = this.getLineMaxColumn(o);
      ((this._buffer = e), this._bufferDisposable.dispose(), (this._bufferDisposable = t), this._increaseVersionId(), this._tokens.flush(), this._tokens2.flush(), (this._decorations = Object.create(null)), (this._decorationsTree = new $t()), this._commandManager.clear(), (this._trimAutoWhitespaceLines = null), this._emitContentChangedEvent(new ge.dQ([new ge.Jx()], this._versionId, !1, !1), this._createContentChanged2(new d.e(1, 1, o, s), 0, n, this.getValue(), !1, !1, !0)));
    }
    setEOL(e) {
      this._assertNotDisposed();
      const t = 1 === e ? "\r\n" : "\n";
      if (this._buffer.getEOL() === t) return;
      const i = this.getFullModelRange(),
        n = this.getValueLengthInRange(i),
        o = this.getLineCount(),
        s = this.getLineMaxColumn(o);
      (this._onBeforeEOLChange(), this._buffer.setEOL(t), this._increaseVersionId(), this._onAfterEOLChange(), this._emitContentChangedEvent(new ge.dQ([new ge.CZ()], this._versionId, !1, !1), this._createContentChanged2(new d.e(1, 1, o, s), 0, n, this.getValue(), !1, !1, !1)));
    }
    _onBeforeEOLChange() {
      this._decorationsTree.ensureAllNodesHaveRanges(this);
    }
    _onAfterEOLChange() {
      const e = this.getVersionId(),
        t = this._decorationsTree.collectNodesPostOrder();
      for (let i = 0, n = t.length; i < n; i++) {
        const n = t[i],
          o = n.range,
          s = n.cachedAbsoluteStart - n.start,
          r = this._buffer.getOffsetAt(o.startLineNumber, o.startColumn),
          a = this._buffer.getOffsetAt(o.endLineNumber, o.endColumn);
        ((n.cachedAbsoluteStart = r), (n.cachedAbsoluteEnd = a), (n.cachedVersionId = e), (n.start = r - s), (n.end = a - s), R(n));
      }
    }
    onBeforeAttached() {
      (this._attachedEditorCount++, 1 === this._attachedEditorCount && this._onDidChangeAttached.fire(void 0));
    }
    onBeforeDetached() {
      (this._attachedEditorCount--, 0 === this._attachedEditorCount && this._onDidChangeAttached.fire(void 0));
    }
    isAttachedToEditor() {
      return this._attachedEditorCount > 0;
    }
    getAttachedEditorCount() {
      return this._attachedEditorCount;
    }
    isTooLargeForSyncing() {
      return this._isTooLargeForSyncing;
    }
    isTooLargeForTokenization() {
      return this._isTooLargeForTokenization;
    }
    isDisposed() {
      return this._isDisposed;
    }
    isDominatedByLongLines() {
      if ((this._assertNotDisposed(), this.isTooLargeForTokenization())) return !1;
      let e = 0,
        t = 0;
      const i = this._buffer.getLineCount();
      for (let n = 1; n <= i; n++) {
        const i = this._buffer.getLineLength(n);
        i >= 1e4 ? (t += i) : (e += i);
      }
      return t > e;
    }
    get uri() {
      return this._associatedResource;
    }
    getOptions() {
      return (this._assertNotDisposed(), this._options);
    }
    getFormattingOptions() {
      return {
        tabSize: this._options.indentSize,
        insertSpaces: this._options.insertSpaces
      };
    }
    updateOptions(e) {
      this._assertNotDisposed();
      let t = void 0 !== e.tabSize ? e.tabSize : this._options.tabSize,
        i = void 0 !== e.indentSize ? e.indentSize : this._options.indentSize,
        n = void 0 !== e.insertSpaces ? e.insertSpaces : this._options.insertSpaces,
        o = void 0 !== e.trimAutoWhitespace ? e.trimAutoWhitespace : this._options.trimAutoWhitespace,
        s = void 0 !== e.bracketColorizationOptions ? e.bracketColorizationOptions : this._options.bracketPairColorizationOptions,
        r = new u.dJ({
          tabSize: t,
          indentSize: i,
          insertSpaces: n,
          defaultEOL: this._options.defaultEOL,
          trimAutoWhitespace: o,
          bracketPairColorizationOptions: s
        });
      if (this._options.equals(r)) return;
      let a = this._options.createChangeEvent(r);
      ((this._options = r), this._onDidChangeOptions.fire(a));
    }
    detectIndentation(e, t) {
      this._assertNotDisposed();
      let i = m(this._buffer, t, e);
      this.updateOptions({
        insertSpaces: i.insertSpaces,
        tabSize: i.tabSize,
        indentSize: i.tabSize
      });
    }
    static _normalizeIndentationFromWhitespace(e, t, i) {
      let n = 0;
      for (let i = 0; i < e.length; i++) "\t" === e.charAt(i) ? (n += t) : n++;
      let o = "";
      if (!i) {
        let e = Math.floor(n / t);
        n %= t;
        for (let t = 0; t < e; t++) o += "\t";
      }
      for (let e = 0; e < n; e++) o += " ";
      return o;
    }
    static normalizeIndentation(t, i, n) {
      let o = r.LC(t);
      return (-1 === o && (o = t.length), e._normalizeIndentationFromWhitespace(t.substring(0, o), i, n) + t.substring(o));
    }
    normalizeIndentation(t) {
      return (this._assertNotDisposed(), e.normalizeIndentation(t, this._options.indentSize, this._options.insertSpaces));
    }
    getVersionId() {
      return (this._assertNotDisposed(), this._versionId);
    }
    mightContainRTL() {
      return this._buffer.mightContainRTL();
    }
    mightContainUnusualLineTerminators() {
      return this._buffer.mightContainUnusualLineTerminators();
    }
    removeUnusualLineTerminators(e = null) {
      const t = this.findMatches(r.Qe.source, !1, !0, !1, null, !1, 1073741824);
      (this._buffer.resetMightContainUnusualLineTerminators(), this.pushEditOperations(e, t.map(e => ({
        range: e.range,
        text: null
      })), () => null));
    }
    mightContainNonBasicASCII() {
      return this._buffer.mightContainNonBasicASCII();
    }
    getAlternativeVersionId() {
      return (this._assertNotDisposed(), this._alternativeVersionId);
    }
    getInitialUndoRedoSnapshot() {
      return (this._assertNotDisposed(), this._initialUndoRedoSnapshot);
    }
    getOffsetAt(e) {
      this._assertNotDisposed();
      let t = this._validatePosition(e.lineNumber, e.column, 0);
      return this._buffer.getOffsetAt(t.lineNumber, t.column);
    }
    getPositionAt(e) {
      this._assertNotDisposed();
      let t = Math.min(this._buffer.getLength(), Math.max(0, e));
      return this._buffer.getPositionAt(t);
    }
    _increaseVersionId() {
      ((this._versionId = this._versionId + 1), (this._alternativeVersionId = this._versionId));
    }
    _overwriteVersionId(e) {
      this._versionId = e;
    }
    _overwriteAlternativeVersionId(e) {
      this._alternativeVersionId = e;
    }
    _overwriteInitialUndoRedoSnapshot(e) {
      this._initialUndoRedoSnapshot = e;
    }
    getValue(e, t = !1) {
      this._assertNotDisposed();
      const i = this.getFullModelRange(),
        n = this.getValueInRange(i, e);
      return t ? this._buffer.getBOM() + n : n;
    }
    createSnapshot(e = !1) {
      return new Ft(this._buffer.createSnapshot(e));
    }
    getValueLength(e, t = !1) {
      this._assertNotDisposed();
      const i = this.getFullModelRange(),
        n = this.getValueLengthInRange(i, e);
      return t ? this._buffer.getBOM().length + n : n;
    }
    getValueInRange(e, t = 0) {
      return (this._assertNotDisposed(), this._buffer.getValueInRange(this.validateRange(e), t));
    }
    getValueLengthInRange(e, t = 0) {
      return (this._assertNotDisposed(), this._buffer.getValueLengthInRange(this.validateRange(e), t));
    }
    getCharacterCountInRange(e, t = 0) {
      return (this._assertNotDisposed(), this._buffer.getCharacterCountInRange(this.validateRange(e), t));
    }
    getLineCount() {
      return (this._assertNotDisposed(), this._buffer.getLineCount());
    }
    getLineContent(e) {
      if ((this._assertNotDisposed(), e < 1 || e > this.getLineCount())) throw new Error("Illegal value for lineNumber");
      return this._buffer.getLineContent(e);
    }
    getLineLength(e) {
      if ((this._assertNotDisposed(), e < 1 || e > this.getLineCount())) throw new Error("Illegal value for lineNumber");
      return this._buffer.getLineLength(e);
    }
    getLinesContent() {
      return (this._assertNotDisposed(), this._buffer.getLinesContent());
    }
    getEOL() {
      return (this._assertNotDisposed(), this._buffer.getEOL());
    }
    getEndOfLineSequence() {
      return (this._assertNotDisposed(), "\n" === this._buffer.getEOL() ? 0 : 1);
    }
    getLineMinColumn(e) {
      return (this._assertNotDisposed(), 1);
    }
    getLineMaxColumn(e) {
      if ((this._assertNotDisposed(), e < 1 || e > this.getLineCount())) throw new Error("Illegal value for lineNumber");
      return this._buffer.getLineLength(e) + 1;
    }
    getLineFirstNonWhitespaceColumn(e) {
      if ((this._assertNotDisposed(), e < 1 || e > this.getLineCount())) throw new Error("Illegal value for lineNumber");
      return this._buffer.getLineFirstNonWhitespaceColumn(e);
    }
    getLineLastNonWhitespaceColumn(e) {
      if ((this._assertNotDisposed(), e < 1 || e > this.getLineCount())) throw new Error("Illegal value for lineNumber");
      return this._buffer.getLineLastNonWhitespaceColumn(e);
    }
    _validateRangeRelaxedNoAllocations(e) {
      const t = this._buffer.getLineCount(),
        i = e.startLineNumber,
        n = e.startColumn;
      let o = Math.floor("number" != typeof i || isNaN(i) ? 1 : i),
        s = Math.floor("number" != typeof n || isNaN(n) ? 1 : n);
      if (o < 1) ((o = 1), (s = 1));else if (o > t) ((o = t), (s = this.getLineMaxColumn(o)));else if (s <= 1) s = 1;else {
        const e = this.getLineMaxColumn(o);
        s >= e && (s = e);
      }
      const r = e.endLineNumber,
        a = e.endColumn;
      let l = Math.floor("number" != typeof r || isNaN(r) ? 1 : r),
        c = Math.floor("number" != typeof a || isNaN(a) ? 1 : a);
      if (l < 1) ((l = 1), (c = 1));else if (l > t) ((l = t), (c = this.getLineMaxColumn(l)));else if (c <= 1) c = 1;else {
        const e = this.getLineMaxColumn(l);
        c >= e && (c = e);
      }
      return i === o && n === s && r === l && a === c && e instanceof d.e && !(e instanceof h.Y) ? e : new d.e(o, s, l, c);
    }
    _isValidPosition(e, t, i) {
      if ("number" != typeof e || "number" != typeof t) return !1;
      if (isNaN(e) || isNaN(t)) return !1;
      if (e < 1 || t < 1) return !1;
      if ((0 | e) !== e || (0 | t) !== t) return !1;
      if (e > this._buffer.getLineCount()) return !1;
      if (1 === t) return !0;
      if (t > this.getLineMaxColumn(e)) return !1;
      if (1 === i) {
        const i = this._buffer.getLineCharCode(e, t - 2);
        if (r.ZG(i)) return !1;
      }
      return !0;
    }
    _validatePosition(e, t, i) {
      const n = Math.floor("number" != typeof e || isNaN(e) ? 1 : e),
        o = Math.floor("number" != typeof t || isNaN(t) ? 1 : t),
        s = this._buffer.getLineCount();
      if (n < 1) return new c.L(1, 1);
      if (n > s) return new c.L(s, this.getLineMaxColumn(s));
      if (o <= 1) return new c.L(n, 1);
      const a = this.getLineMaxColumn(n);
      if (o >= a) return new c.L(n, a);
      if (1 === i) {
        const e = this._buffer.getLineCharCode(n, o - 2);
        if (r.ZG(e)) return new c.L(n, o - 1);
      }
      return new c.L(n, o);
    }
    validatePosition(e) {
      return (this._assertNotDisposed(), e instanceof c.L && this._isValidPosition(e.lineNumber, e.column, 1) ? e : this._validatePosition(e.lineNumber, e.column, 1));
    }
    _isValidRange(e, t) {
      const i = e.startLineNumber,
        n = e.startColumn,
        o = e.endLineNumber,
        s = e.endColumn;
      if (!this._isValidPosition(i, n, 0)) return !1;
      if (!this._isValidPosition(o, s, 0)) return !1;
      if (1 === t) {
        const e = n > 1 ? this._buffer.getLineCharCode(i, n - 2) : 0,
          t = s > 1 && s <= this._buffer.getLineLength(o) ? this._buffer.getLineCharCode(o, s - 2) : 0,
          a = r.ZG(e),
          l = r.ZG(t);
        return !a && !l;
      }
      return !0;
    }
    validateRange(e) {
      if ((this._assertNotDisposed(), e instanceof d.e && !(e instanceof h.Y) && this._isValidRange(e, 1))) return e;
      const t = this._validatePosition(e.startLineNumber, e.startColumn, 0),
        i = this._validatePosition(e.endLineNumber, e.endColumn, 0),
        n = t.lineNumber,
        o = t.column,
        s = i.lineNumber,
        a = i.column;
      {
        const e = o > 1 ? this._buffer.getLineCharCode(n, o - 2) : 0,
          t = a > 1 && a <= this._buffer.getLineLength(s) ? this._buffer.getLineCharCode(s, a - 2) : 0,
          i = r.ZG(e),
          l = r.ZG(t);
        return i || l ? n === s && o === a ? new d.e(n, o - 1, s, a - 1) : i && l ? new d.e(n, o - 1, s, a + 1) : i ? new d.e(n, o - 1, s, a) : new d.e(n, o, s, a + 1) : new d.e(n, o, s, a);
      }
    }
    modifyPosition(e, t) {
      this._assertNotDisposed();
      let i = this.getOffsetAt(e) + t;
      return this.getPositionAt(Math.min(this._buffer.getLength(), Math.max(0, i)));
    }
    getFullModelRange() {
      this._assertNotDisposed();
      const e = this.getLineCount();
      return new d.e(1, 1, e, this.getLineMaxColumn(e));
    }
    findMatchesLineByLine(e, t, i, n) {
      return this._buffer.findMatchesLineByLine(e, t, i, n);
    }
    findMatches(e, t, i, n, o, s, r = 999) {
      this._assertNotDisposed();
      let a = null;
      (null !== t && (Array.isArray(t) || (t = [t]), t.every(e => d.e.isIRange(e)) && (a = t.map(e => this.validateRange(e)))), null === a && (a = [this.getFullModelRange()]), (a = a.sort((e, t) => e.startLineNumber - t.startLineNumber || e.startColumn - t.startColumn)));
      const l = [];
      let c;
      if ((l.push(a.reduce((e, t) => d.e.areIntersecting(e, t) ? e.plusRange(t) : (l.push(e), t))), !i && e.indexOf("\n") < 0)) {
        const t = new X.bc(e, i, n, o).parseSearchRequest();
        if (!t) return [];
        c = e => this.findMatchesLineByLine(e, t, s, r);
      } else c = t => X.pM.findMatches(this, new X.bc(e, i, n, o), t, s, r);
      return l.map(c).reduce((e, t) => e.concat(t), []);
    }
    findNextMatch(e, t, i, n, o, s) {
      this._assertNotDisposed();
      const r = this.validatePosition(t);
      if (!i && e.indexOf("\n") < 0) {
        const t = new X.bc(e, i, n, o).parseSearchRequest();
        if (!t) return null;
        const a = this.getLineCount();
        let l = new d.e(r.lineNumber, r.column, a, this.getLineMaxColumn(a)),
          c = this.findMatchesLineByLine(l, t, s, 1);
        return (X.pM.findNextMatch(this, new X.bc(e, i, n, o), r, s), c.length > 0 ? c[0] : ((l = new d.e(1, 1, r.lineNumber, this.getLineMaxColumn(r.lineNumber))), (c = this.findMatchesLineByLine(l, t, s, 1)), c.length > 0 ? c[0] : null));
      }
      return X.pM.findNextMatch(this, new X.bc(e, i, n, o), r, s);
    }
    findPreviousMatch(e, t, i, n, o, s) {
      this._assertNotDisposed();
      const r = this.validatePosition(t);
      return X.pM.findPreviousMatch(this, new X.bc(e, i, n, o), r, s);
    }
    pushStackElement() {
      this._commandManager.pushStackElement();
    }
    popStackElement() {
      this._commandManager.popStackElement();
    }
    pushEOL(e) {
      if (("\n" === this.getEOL() ? 0 : 1) !== e) try {
        (this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), null === this._initialUndoRedoSnapshot && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEOL(e));
      } finally {
        (this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit());
      }
    }
    _validateEditOperation(e) {
      return e instanceof u.Qi ? e : new u.Qi(e.identifier || null, this.validateRange(e.range), e.text, e.forceMoveMarkers || !1, e.isAutoWhitespaceEdit || !1, e._isTracked || !1);
    }
    _validateEditOperations(e) {
      const t = [];
      for (let i = 0, n = e.length; i < n; i++) t[i] = this._validateEditOperation(e[i]);
      return t;
    }
    pushEditOperations(e, t, i) {
      try {
        return (this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), this._pushEditOperations(e, this._validateEditOperations(t), i));
      } finally {
        (this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit());
      }
    }
    _pushEditOperations(e, t, i) {
      if (this._options.trimAutoWhitespace && this._trimAutoWhitespaceLines) {
        let i = t.map(e => ({
            range: this.validateRange(e.range),
            text: e.text
          })),
          n = !0;
        if (e) for (let t = 0, o = e.length; t < o; t++) {
          let o = e[t],
            s = !1;
          for (let e = 0, t = i.length; e < t; e++) {
            let t = i[e].range,
              n = t.startLineNumber > o.endLineNumber,
              r = o.startLineNumber > t.endLineNumber;
            if (!n && !r) {
              s = !0;
              break;
            }
          }
          if (!s) {
            n = !1;
            break;
          }
        }
        if (n) for (let e = 0, n = this._trimAutoWhitespaceLines.length; e < n; e++) {
          let n = this._trimAutoWhitespaceLines[e],
            o = this.getLineMaxColumn(n),
            s = !0;
          for (let e = 0, t = i.length; e < t; e++) {
            let t = i[e].range,
              r = i[e].text;
            if (!(n < t.startLineNumber || n > t.endLineNumber) && !((n === t.startLineNumber && t.startColumn === o && t.isEmpty() && r && r.length > 0 && "\n" === r.charAt(0)) || (n === t.startLineNumber && 1 === t.startColumn && t.isEmpty() && r && r.length > 0 && "\n" === r.charAt(r.length - 1)))) {
              s = !1;
              break;
            }
          }
          if (s) {
            const e = new d.e(n, 1, n, o);
            t.push(new u.Qi(null, e, null, !1, !1, !1));
          }
        }
        this._trimAutoWhitespaceLines = null;
      }
      return (null === this._initialUndoRedoSnapshot && (this._initialUndoRedoSnapshot = this._undoRedoService.createSnapshot(this.uri)), this._commandManager.pushEditOperation(e, t, i));
    }
    _applyUndo(e, t, i, n) {
      const o = e.map(e => {
        const t = this.getPositionAt(e.newPosition),
          i = this.getPositionAt(e.newEnd);
        return {
          range: new d.e(t.lineNumber, t.column, i.lineNumber, i.column),
          text: e.oldText
        };
      });
      this._applyUndoRedoEdits(o, t, !0, !1, i, n);
    }
    _applyRedo(e, t, i, n) {
      const o = e.map(e => {
        const t = this.getPositionAt(e.oldPosition),
          i = this.getPositionAt(e.oldEnd);
        return {
          range: new d.e(t.lineNumber, t.column, i.lineNumber, i.column),
          text: e.newText
        };
      });
      this._applyUndoRedoEdits(o, t, !1, !0, i, n);
    }
    _applyUndoRedoEdits(e, t, i, n, o, s) {
      try {
        (this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit(), (this._isUndoing = i), (this._isRedoing = n), this.applyEdits(e, !1), this.setEOL(t), this._overwriteAlternativeVersionId(o));
      } finally {
        ((this._isUndoing = !1), (this._isRedoing = !1), this._eventEmitter.endDeferredEmit(s), this._onDidChangeDecorations.endDeferredEmit());
      }
    }
    applyEdits(e, t = !1) {
      try {
        (this._onDidChangeDecorations.beginDeferredEmit(), this._eventEmitter.beginDeferredEmit());
        const i = this._validateEditOperations(e);
        return this._doApplyEdits(i, t);
      } finally {
        (this._eventEmitter.endDeferredEmit(), this._onDidChangeDecorations.endDeferredEmit());
      }
    }
    _doApplyEdits(e, t) {
      const i = this._buffer.getLineCount(),
        n = this._buffer.applyEdits(e, this._options.trimAutoWhitespace, t),
        o = this._buffer.getLineCount(),
        s = n.changes;
      if (((this._trimAutoWhitespaceLines = n.trimAutoWhitespaceLineNumbers), 0 !== s.length)) {
        for (let e = 0, t = s.length; e < t; e++) {
          const t = s[e],
            [i, n, o] = (0, le.QZ)(t.text);
          (this._tokens.acceptEdit(t.range, i, n), this._tokens2.acceptEdit(t.range, i, n, o, t.text.length > 0 ? t.text.charCodeAt(0) : 0), this._decorationsTree.acceptReplace(t.rangeOffset, t.rangeLength, t.text.length, t.forceMoveMarkers));
        }
        let e = [];
        this._increaseVersionId();
        let t = i;
        for (let i = 0, n = s.length; i < n; i++) {
          const n = s[i],
            [r] = (0, le.QZ)(n.text);
          this._onDidChangeDecorations.fire();
          const a = n.range.startLineNumber,
            l = n.range.endLineNumber,
            d = l - a,
            h = r,
            u = Math.min(d, h),
            g = h - d,
            p = o - t - g + a,
            f = p,
            m = p + h,
            v = this._decorationsTree.getInjectedTextInInterval(this, this.getOffsetAt(new c.L(f, 1)), this.getOffsetAt(new c.L(m, this.getLineMaxColumn(m))), 0),
            _ = ge.gk.fromDecorations(v),
            b = new pe.H9(_);
          for (let t = u; t >= 0; t--) {
            const i = a + t,
              n = p + t;
            b.takeFromEndWhile(e => e.lineNumber > n);
            const o = b.takeFromEndWhile(e => e.lineNumber === n);
            e.push(new ge.rU(i, this.getLineContent(n), o));
          }
          if (u < d) {
            const t = a + u;
            e.push(new ge.lN(t + 1, l));
          }
          if (u < h) {
            const i = new pe.H9(_),
              n = a + u,
              s = h - u,
              r = o - t - s + n + 1;
            let l = [],
              c = [];
            for (let e = 0; e < s; e++) {
              let t = r + e;
              ((c[e] = this.getLineContent(t)), i.takeWhile(e => e.lineNumber < t), (l[e] = i.takeWhile(e => e.lineNumber === t)));
            }
            e.push(new ge.Tx(n + 1, a + h, c, l));
          }
          t += g;
        }
        this._emitContentChangedEvent(new ge.dQ(e, this.getVersionId(), this._isUndoing, this._isRedoing), {
          changes: s,
          eol: this._buffer.getEOL(),
          versionId: this.getVersionId(),
          isUndoing: this._isUndoing,
          isRedoing: this._isRedoing,
          isFlush: !1
        });
      }
      return null === n.reverseEdits ? void 0 : n.reverseEdits;
    }
    undo() {
      return this._undoRedoService.undo(this.uri);
    }
    canUndo() {
      return this._undoRedoService.canUndo(this.uri);
    }
    redo() {
      return this._undoRedoService.redo(this.uri);
    }
    canRedo() {
      return this._undoRedoService.canRedo(this.uri);
    }
    handleBeforeFireDecorationsChangedEvent(e) {
      if (null === e || 0 === e.size) return;
      const t = [...e].map(e => new ge.rU(e, this.getLineContent(e), this._getInjectedTextInLine(e)));
      this._onDidChangeContentOrInjectedText.fire(new ge.D8(t));
    }
    changeDecorations(e, t = 0) {
      this._assertNotDisposed();
      try {
        return (this._onDidChangeDecorations.beginDeferredEmit(), this._changeDecorations(t, e));
      } finally {
        this._onDidChangeDecorations.endDeferredEmit();
      }
    }
    _changeDecorations(e, t) {
      let i = {
          addDecoration: (t, i) => this._deltaDecorationsImpl(e, [], [{
            range: t,
            options: i
          }])[0],
          changeDecoration: (e, t) => {
            this._changeDecorationImpl(e, t);
          },
          changeDecorationOptions: (e, t) => {
            this._changeDecorationOptionsImpl(e, Jt(t));
          },
          removeDecoration: t => {
            this._deltaDecorationsImpl(e, [t], []);
          },
          deltaDecorations: (t, i) => 0 === t.length && 0 === i.length ? [] : this._deltaDecorationsImpl(e, t, i)
        },
        o = null;
      try {
        o = t(i);
      } catch (e) {
        (0, n.dL)(e);
      }
      return ((i.addDecoration = Bt), (i.changeDecoration = Bt), (i.changeDecorationOptions = Bt), (i.removeDecoration = Bt), (i.deltaDecorations = Bt), o);
    }
    deltaDecorations(e, t, i = 0) {
      if ((this._assertNotDisposed(), e || (e = []), 0 === e.length && 0 === t.length)) return [];
      try {
        return (this._onDidChangeDecorations.beginDeferredEmit(), this._deltaDecorationsImpl(i, e, t));
      } finally {
        this._onDidChangeDecorations.endDeferredEmit();
      }
    }
    _getTrackedRange(e) {
      return this.getDecorationRange(e);
    }
    _setTrackedRange(e, t, i) {
      const n = e ? this._decorations[e] : null;
      if (!n) return t ? this._deltaDecorationsImpl(0, [], [{
        range: t,
        options: Xt[i]
      }])[0] : null;
      if (!t) return (this._decorationsTree.delete(n), delete this._decorations[n.id], null);
      const o = this._validateRangeRelaxedNoAllocations(t),
        s = this._buffer.getOffsetAt(o.startLineNumber, o.startColumn),
        r = this._buffer.getOffsetAt(o.endLineNumber, o.endColumn);
      return (this._decorationsTree.delete(n), n.reset(this.getVersionId(), s, r, o), n.setOptions(Xt[i]), this._decorationsTree.insert(n), n.id);
    }
    removeAllDecorationsWithOwnerId(e) {
      if (this._isDisposed) return;
      const t = this._decorationsTree.collectNodesFromOwner(e);
      for (let e = 0, i = t.length; e < i; e++) {
        const i = t[e];
        (this._decorationsTree.delete(i), delete this._decorations[i.id]);
      }
    }
    getDecorationOptions(e) {
      const t = this._decorations[e];
      return t ? t.options : null;
    }
    getDecorationRange(e) {
      const t = this._decorations[e];
      return t ? this._decorationsTree.getNodeRange(this, t) : null;
    }
    getLineDecorations(e, t = 0, i = !1) {
      return e < 1 || e > this.getLineCount() ? [] : this.getLinesDecorations(e, e, t, i);
    }
    getLinesDecorations(e, t, i = 0, n = !1) {
      let o = this.getLineCount(),
        s = Math.min(o, Math.max(1, e)),
        r = Math.min(o, Math.max(1, t)),
        a = this.getLineMaxColumn(r);
      const l = new d.e(s, 1, r, a),
        c = this._getDecorationsInRange(l, i, n);
      return (c.push(...this._decorationProvider.getDecorationsInRange(l, i, n)), c);
    }
    getDecorationsInRange(e, t = 0, i = !1) {
      let n = this.validateRange(e);
      const o = this._getDecorationsInRange(n, t, i);
      return (o.push(...this._decorationProvider.getDecorationsInRange(n, t, i)), o);
    }
    getOverviewRulerDecorations(e = 0, t = !1) {
      return this._decorationsTree.getAll(this, e, t, !0);
    }
    getInjectedTextDecorations(e = 0) {
      return this._decorationsTree.getAllInjectedText(this, e);
    }
    _getInjectedTextInLine(e) {
      const t = this._buffer.getOffsetAt(e, 1),
        i = t + this._buffer.getLineLength(e),
        n = this._decorationsTree.getInjectedTextInInterval(this, t, i, 0);
      return ge.gk.fromDecorations(n).filter(t => t.lineNumber === e);
    }
    getAllDecorations(e = 0, t = !1) {
      let i = this._decorationsTree.getAll(this, e, t, !1);
      return ((i = i.concat(this._decorationProvider.getAllDecorations(e, t))), i);
    }
    _getDecorationsInRange(e, t, i) {
      const n = this._buffer.getOffsetAt(e.startLineNumber, e.startColumn),
        o = this._buffer.getOffsetAt(e.endLineNumber, e.endColumn);
      return this._decorationsTree.getAllInInterval(this, n, o, t, i);
    }
    getRangeAt(e, t) {
      return this._buffer.getRangeAt(e, t - e);
    }
    _changeDecorationImpl(e, t) {
      const i = this._decorations[e];
      if (!i) return;
      if (i.options.after) {
        const t = this.getDecorationRange(e);
        this._onDidChangeDecorations.recordLineAffectedByInjectedText(t.endLineNumber);
      }
      if (i.options.before) {
        const t = this.getDecorationRange(e);
        this._onDidChangeDecorations.recordLineAffectedByInjectedText(t.startLineNumber);
      }
      const n = this._validateRangeRelaxedNoAllocations(t),
        o = this._buffer.getOffsetAt(n.startLineNumber, n.startColumn),
        s = this._buffer.getOffsetAt(n.endLineNumber, n.endColumn);
      (this._decorationsTree.delete(i), i.reset(this.getVersionId(), o, s, n), this._decorationsTree.insert(i), this._onDidChangeDecorations.checkAffectedAndFire(i.options), i.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(n.endLineNumber), i.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(n.startLineNumber));
    }
    _changeDecorationOptionsImpl(e, t) {
      const i = this._decorations[e];
      if (!i) return;
      const n = !(!i.options.overviewRuler || !i.options.overviewRuler.color),
        o = !(!t.overviewRuler || !t.overviewRuler.color);
      if ((this._onDidChangeDecorations.checkAffectedAndFire(i.options), this._onDidChangeDecorations.checkAffectedAndFire(t), i.options.after || t.after)) {
        const e = this._decorationsTree.getNodeRange(this, i);
        this._onDidChangeDecorations.recordLineAffectedByInjectedText(e.endLineNumber);
      }
      if (i.options.before || t.before) {
        const e = this._decorationsTree.getNodeRange(this, i);
        this._onDidChangeDecorations.recordLineAffectedByInjectedText(e.startLineNumber);
      }
      n !== o ? (this._decorationsTree.delete(i), i.setOptions(t), this._decorationsTree.insert(i)) : i.setOptions(t);
    }
    _deltaDecorationsImpl(e, t, i) {
      const n = this.getVersionId(),
        o = t.length;
      let s = 0;
      const r = i.length;
      let a = 0,
        l = new Array(r);
      for (; s < o || a < r;) {
        let c = null;
        if (s < o) {
          do {
            c = this._decorations[t[s++]];
          } while (!c && s < o);
          if (c) {
            if (c.options.after) {
              const e = this._decorationsTree.getNodeRange(this, c);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(e.endLineNumber);
            }
            if (c.options.before) {
              const e = this._decorationsTree.getNodeRange(this, c);
              this._onDidChangeDecorations.recordLineAffectedByInjectedText(e.startLineNumber);
            }
            (this._decorationsTree.delete(c), this._onDidChangeDecorations.checkAffectedAndFire(c.options));
          }
        }
        if (a < r) {
          if (!c) {
            const e = ++this._lastDecorationId,
              t = `${this._instanceId};${e}`;
            ((c = new k(t, 0, 0)), (this._decorations[t] = c));
          }
          const t = i[a],
            o = this._validateRangeRelaxedNoAllocations(t.range),
            s = Jt(t.options),
            r = this._buffer.getOffsetAt(o.startLineNumber, o.startColumn),
            d = this._buffer.getOffsetAt(o.endLineNumber, o.endColumn);
          ((c.ownerId = e), c.reset(n, r, d, o), c.setOptions(s), c.options.after && this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.endLineNumber), c.options.before && this._onDidChangeDecorations.recordLineAffectedByInjectedText(o.startLineNumber), this._onDidChangeDecorations.checkAffectedAndFire(s), this._decorationsTree.insert(c), (l[a] = c.id), a++);
        } else c && delete this._decorations[c.id];
      }
      return l;
    }
    setTokens(e, t = !1) {
      if (0 !== e.length) {
        let t = [];
        for (let i = 0, n = e.length; i < n; i++) {
          const n = e[i];
          let o = 0,
            s = 0,
            r = !1;
          for (let e = 0, t = n.tokens.length; e < t; e++) {
            const t = n.startLineNumber + e;
            if (r) (this._tokens.setTokens(this._languageId, t - 1, this._buffer.getLineLength(t), n.tokens[e], !1), (s = t));else {
              this._tokens.setTokens(this._languageId, t - 1, this._buffer.getLineLength(t), n.tokens[e], !0) && ((r = !0), (o = t), (s = t));
            }
          }
          r && t.push({
            fromLineNumber: o,
            toLineNumber: s
          });
        }
        t.length > 0 && this._emitModelTokensChangedEvent({
          tokenizationSupportChanged: !1,
          semanticTokensApplied: !1,
          ranges: t
        });
      }
      this.handleTokenizationProgress(t);
    }
    setSemanticTokens(e, t) {
      (this._tokens2.set(e, t), this._emitModelTokensChangedEvent({
        tokenizationSupportChanged: !1,
        semanticTokensApplied: null !== e,
        ranges: [{
          fromLineNumber: 1,
          toLineNumber: this.getLineCount()
        }]
      }));
    }
    hasCompleteSemanticTokens() {
      return this._tokens2.isComplete();
    }
    hasSomeSemanticTokens() {
      return !this._tokens2.isEmpty();
    }
    setPartialSemanticTokens(e, t) {
      if (this.hasCompleteSemanticTokens()) return;
      const i = this._tokens2.setPartial(e, t);
      this._emitModelTokensChangedEvent({
        tokenizationSupportChanged: !1,
        semanticTokensApplied: !0,
        ranges: [{
          fromLineNumber: i.startLineNumber,
          toLineNumber: i.endLineNumber
        }]
      });
    }
    tokenizeViewport(e, t) {
      ((e = Math.max(1, e)), (t = Math.min(this._buffer.getLineCount(), t)), this._tokenization.tokenizeViewport(e, t));
    }
    clearTokens() {
      (this._tokens.flush(), this._emitModelTokensChangedEvent({
        tokenizationSupportChanged: !0,
        semanticTokensApplied: !1,
        ranges: [{
          fromLineNumber: 1,
          toLineNumber: this._buffer.getLineCount()
        }]
      }));
    }
    _emitModelTokensChangedEvent(e) {
      this._isDisposing || this._onDidChangeTokens.fire(e);
    }
    resetTokenization() {
      this._tokenization.reset();
    }
    forceTokenization(e) {
      if (e < 1 || e > this.getLineCount()) throw new Error("Illegal value for lineNumber");
      this._tokenization.forceTokenization(e);
    }
    isCheapToTokenize(e) {
      return this._tokenization.isCheapToTokenize(e);
    }
    tokenizeIfCheap(e) {
      this.isCheapToTokenize(e) && this.forceTokenization(e);
    }
    getLineTokens(e) {
      if (e < 1 || e > this.getLineCount()) throw new Error("Illegal value for lineNumber");
      return this._getLineTokens(e);
    }
    _getLineTokens(e) {
      const t = this.getLineContent(e),
        i = this._tokens.getTokens(this._languageId, e - 1, t);
      return this._tokens2.addSemanticTokens(e, i);
    }
    getLanguageId() {
      return this._languageId;
    }
    setMode(e) {
      if (this._languageId === e) return;
      let t = {
        oldLanguage: this._languageId,
        newLanguage: e
      };
      ((this._languageId = e), this._onDidChangeLanguage.fire(t), this._onDidChangeLanguageConfiguration.fire({}));
    }
    getLanguageIdAtPosition(e, t) {
      const i = this.validatePosition(new c.L(e, t)),
        n = this.getLineTokens(i.lineNumber);
      return n.getLanguageId(n.findTokenIndexAtOffset(i.column - 1));
    }
    getLanguageConfiguration(e) {
      return this._languageConfigurationService.getLanguageConfiguration(e);
    }
    getWordAtPosition(t) {
      this._assertNotDisposed();
      const i = this.validatePosition(t),
        n = this.getLineContent(i.lineNumber),
        o = this._getLineTokens(i.lineNumber),
        s = o.findTokenIndexAtOffset(i.column - 1),
        [r, a] = e._findLanguageBoundaries(o, s),
        l = (0, xe.t2)(i.column, this.getLanguageConfiguration(o.getLanguageId(s)).getWordDefinition(), n.substring(r, a), r);
      if (l && l.startColumn <= t.column && t.column <= l.endColumn) return l;
      if (s > 0 && r === i.column - 1) {
        const [r, a] = e._findLanguageBoundaries(o, s - 1),
          l = (0, xe.t2)(i.column, this.getLanguageConfiguration(o.getLanguageId(s - 1)).getWordDefinition(), n.substring(r, a), r);
        if (l && l.startColumn <= t.column && t.column <= l.endColumn) return l;
      }
      return null;
    }
    static _findLanguageBoundaries(e, t) {
      const i = e.getLanguageId(t);
      let n = 0;
      for (let o = t; o >= 0 && e.getLanguageId(o) === i; o--) n = e.getStartOffset(o);
      let o = e.getLineContent().length;
      for (let n = t, s = e.getCount(); n < s && e.getLanguageId(n) === i; n++) o = e.getEndOffset(n);
      return [n, o];
    }
    getWordUntilPosition(e) {
      const t = this.getWordAtPosition(e);
      return t ? {
        word: t.word.substr(0, e.column - t.startColumn),
        startColumn: t.startColumn,
        endColumn: e.column
      } : {
        word: "",
        startColumn: e.column,
        endColumn: e.column
      };
    }
    findMatchingBracketUp(e, t) {
      let i = e.toLowerCase(),
        n = this.validatePosition(t),
        o = this._getLineTokens(n.lineNumber),
        s = o.getLanguageId(o.findTokenIndexAtOffset(n.column - 1)),
        r = this.getLanguageConfiguration(s).brackets;
      if (!r) return null;
      let a = r.textIsBracket[i];
      return a ? Wt(this._findMatchingBracketUp(a, n, null)) : null;
    }
    matchBracket(e) {
      return this._matchBracket(this.validatePosition(e));
    }
    _establishBracketSearchOffsets(e, t, i, n) {
      const o = t.getCount(),
        s = t.getLanguageId(n);
      let r = Math.max(0, e.column - 1 - i.maxBracketLength);
      for (let e = n - 1; e >= 0; e--) {
        const i = t.getEndOffset(e);
        if (i <= r) break;
        if ((0, ke.Bu)(t.getStandardTokenType(e)) || t.getLanguageId(e) !== s) {
          r = i;
          break;
        }
      }
      let a = Math.min(t.getLineContent().length, e.column - 1 + i.maxBracketLength);
      for (let e = n + 1; e < o; e++) {
        const i = t.getStartOffset(e);
        if (i >= a) break;
        if ((0, ke.Bu)(t.getStandardTokenType(e)) || t.getLanguageId(e) !== s) {
          a = i;
          break;
        }
      }
      return {
        searchStartOffset: r,
        searchEndOffset: a
      };
    }
    _matchBracket(e) {
      const t = e.lineNumber,
        i = this._getLineTokens(t),
        n = this._buffer.getLineContent(t),
        o = i.findTokenIndexAtOffset(e.column - 1);
      if (o < 0) return null;
      const s = this.getLanguageConfiguration(i.getLanguageId(o)).brackets;
      if (s && !(0, ke.Bu)(i.getStandardTokenType(o))) {
        let {
            searchStartOffset: r,
            searchEndOffset: a
          } = this._establishBracketSearchOffsets(e, i, s, o),
          l = null;
        for (;;) {
          const i = Le.Vr.findNextBracketInRange(s.forwardRegex, t, n, r, a);
          if (!i) break;
          if (i.startColumn <= e.column && e.column <= i.endColumn) {
            const e = n.substring(i.startColumn - 1, i.endColumn - 1).toLowerCase(),
              t = this._matchFoundBracket(i, s.textIsBracket[e], s.textIsOpenBracket[e], null);
            if (t) {
              if (t instanceof Vt) return null;
              l = t;
            }
          }
          r = i.endColumn - 1;
        }
        if (l) return l;
      }
      if (o > 0 && i.getStartOffset(o) === e.column - 1) {
        const s = o - 1,
          r = this.getLanguageConfiguration(i.getLanguageId(s)).brackets;
        if (r && !(0, ke.Bu)(i.getStandardTokenType(s))) {
          let {
            searchStartOffset: o,
            searchEndOffset: a
          } = this._establishBracketSearchOffsets(e, i, r, s);
          const l = Le.Vr.findPrevBracketInRange(r.reversedRegex, t, n, o, a);
          if (l && l.startColumn <= e.column && e.column <= l.endColumn) {
            const e = n.substring(l.startColumn - 1, l.endColumn - 1).toLowerCase(),
              t = this._matchFoundBracket(l, r.textIsBracket[e], r.textIsOpenBracket[e], null);
            if (t) return t instanceof Vt ? null : t;
          }
        }
      }
      return null;
    }
    _matchFoundBracket(e, t, i, n) {
      if (!t) return null;
      const o = i ? this._findMatchingBracketDown(t, e.getEndPosition(), n) : this._findMatchingBracketUp(t, e.getStartPosition(), n);
      return o ? (o instanceof Vt ? o : [e, o]) : null;
    }
    _findMatchingBracketUp(e, t, i) {
      const n = e.languageId,
        o = e.reversedRegex;
      let s = -1,
        r = 0;
      const a = (t, n, a, l) => {
        for (;;) {
          if (i && ++r % 100 == 0 && !i()) return Vt.INSTANCE;
          const c = Le.Vr.findPrevBracketInRange(o, t, n, a, l);
          if (!c) break;
          const d = n.substring(c.startColumn - 1, c.endColumn - 1).toLowerCase();
          if ((e.isOpen(d) ? s++ : e.isClose(d) && s--, 0 === s)) return c;
          l = c.startColumn - 1;
        }
        return null;
      };
      for (let e = t.lineNumber; e >= 1; e--) {
        const i = this._getLineTokens(e),
          o = i.getCount(),
          s = this._buffer.getLineContent(e);
        let r = o - 1,
          l = s.length,
          c = s.length;
        e === t.lineNumber && ((r = i.findTokenIndexAtOffset(t.column - 1)), (l = t.column - 1), (c = t.column - 1));
        let d = !0;
        for (; r >= 0; r--) {
          const t = i.getLanguageId(r) === n && !(0, ke.Bu)(i.getStandardTokenType(r));
          if (t) d ? (l = i.getStartOffset(r)) : ((l = i.getStartOffset(r)), (c = i.getEndOffset(r)));else if (d && l !== c) {
            const t = a(e, s, l, c);
            if (t) return t;
          }
          d = t;
        }
        if (d && l !== c) {
          const t = a(e, s, l, c);
          if (t) return t;
        }
      }
      return null;
    }
    _findMatchingBracketDown(e, t, i) {
      const n = e.languageId,
        o = e.forwardRegex;
      let s = 1,
        r = 0;
      const a = (t, n, a, l) => {
          for (;;) {
            if (i && ++r % 100 == 0 && !i()) return Vt.INSTANCE;
            const c = Le.Vr.findNextBracketInRange(o, t, n, a, l);
            if (!c) break;
            const d = n.substring(c.startColumn - 1, c.endColumn - 1).toLowerCase();
            if ((e.isOpen(d) ? s++ : e.isClose(d) && s--, 0 === s)) return c;
            a = c.endColumn - 1;
          }
          return null;
        },
        l = this.getLineCount();
      for (let e = t.lineNumber; e <= l; e++) {
        const i = this._getLineTokens(e),
          o = i.getCount(),
          s = this._buffer.getLineContent(e);
        let r = 0,
          l = 0,
          c = 0;
        e === t.lineNumber && ((r = i.findTokenIndexAtOffset(t.column - 1)), (l = t.column - 1), (c = t.column - 1));
        let d = !0;
        for (; r < o; r++) {
          const t = i.getLanguageId(r) === n && !(0, ke.Bu)(i.getStandardTokenType(r));
          if (t) (d || (l = i.getStartOffset(r)), (c = i.getEndOffset(r)));else if (d && l !== c) {
            const t = a(e, s, l, c);
            if (t) return t;
          }
          d = t;
        }
        if (d && l !== c) {
          const t = a(e, s, l, c);
          if (t) return t;
        }
      }
      return null;
    }
    findPrevBracket(e) {
      const t = this.validatePosition(e);
      let i = null,
        n = null;
      for (let e = t.lineNumber; e >= 1; e--) {
        const o = this._getLineTokens(e),
          s = o.getCount(),
          r = this._buffer.getLineContent(e);
        let a = s - 1,
          l = r.length,
          c = r.length;
        if (e === t.lineNumber) {
          ((a = o.findTokenIndexAtOffset(t.column - 1)), (l = t.column - 1), (c = t.column - 1));
          const e = o.getLanguageId(a);
          i !== e && ((i = e), (n = this.getLanguageConfiguration(i).brackets));
        }
        let d = !0;
        for (; a >= 0; a--) {
          const t = o.getLanguageId(a);
          if (i !== t) {
            if (n && d && l !== c) {
              const t = Le.Vr.findPrevBracketInRange(n.reversedRegex, e, r, l, c);
              if (t) return this._toFoundBracket(n, t);
              d = !1;
            }
            ((i = t), (n = this.getLanguageConfiguration(i).brackets));
          }
          const s = !!n && !(0, ke.Bu)(o.getStandardTokenType(a));
          if (s) d ? (l = o.getStartOffset(a)) : ((l = o.getStartOffset(a)), (c = o.getEndOffset(a)));else if (n && d && l !== c) {
            const t = Le.Vr.findPrevBracketInRange(n.reversedRegex, e, r, l, c);
            if (t) return this._toFoundBracket(n, t);
          }
          d = s;
        }
        if (n && d && l !== c) {
          const t = Le.Vr.findPrevBracketInRange(n.reversedRegex, e, r, l, c);
          if (t) return this._toFoundBracket(n, t);
        }
      }
      return null;
    }
    findNextBracket(e) {
      const t = this.validatePosition(e),
        i = this.getLineCount();
      let n = null,
        o = null;
      for (let e = t.lineNumber; e <= i; e++) {
        const i = this._getLineTokens(e),
          s = i.getCount(),
          r = this._buffer.getLineContent(e);
        let a = 0,
          l = 0,
          c = 0;
        if (e === t.lineNumber) {
          ((a = i.findTokenIndexAtOffset(t.column - 1)), (l = t.column - 1), (c = t.column - 1));
          const e = i.getLanguageId(a);
          n !== e && ((n = e), (o = this.getLanguageConfiguration(n).brackets));
        }
        let d = !0;
        for (; a < s; a++) {
          const t = i.getLanguageId(a);
          if (n !== t) {
            if (o && d && l !== c) {
              const t = Le.Vr.findNextBracketInRange(o.forwardRegex, e, r, l, c);
              if (t) return this._toFoundBracket(o, t);
              d = !1;
            }
            ((n = t), (o = this.getLanguageConfiguration(n).brackets));
          }
          const s = !!o && !(0, ke.Bu)(i.getStandardTokenType(a));
          if (s) (d || (l = i.getStartOffset(a)), (c = i.getEndOffset(a)));else if (o && d && l !== c) {
            const t = Le.Vr.findNextBracketInRange(o.forwardRegex, e, r, l, c);
            if (t) return this._toFoundBracket(o, t);
          }
          d = s;
        }
        if (o && d && l !== c) {
          const t = Le.Vr.findNextBracketInRange(o.forwardRegex, e, r, l, c);
          if (t) return this._toFoundBracket(o, t);
        }
      }
      return null;
    }
    findEnclosingBrackets(e, t) {
      let i;
      if (void 0 === t) i = null;else {
        const e = Date.now();
        i = () => Date.now() - e <= t;
      }
      const n = this.validatePosition(e),
        o = this.getLineCount(),
        s = new Map();
      let r = [];
      const a = (e, t) => {
        if (!s.has(e)) {
          let i = [];
          for (let e = 0, n = t ? t.brackets.length : 0; e < n; e++) i[e] = 0;
          s.set(e, i);
        }
        r = s.get(e);
      };
      let l = 0;
      const c = (e, t, n, o, s) => {
        for (;;) {
          if (i && ++l % 100 == 0 && !i()) return Vt.INSTANCE;
          const a = Le.Vr.findNextBracketInRange(e.forwardRegex, t, n, o, s);
          if (!a) break;
          const c = n.substring(a.startColumn - 1, a.endColumn - 1).toLowerCase(),
            d = e.textIsBracket[c];
          if (d && (d.isOpen(c) ? r[d.index]++ : d.isClose(c) && r[d.index]--, -1 === r[d.index])) return this._matchFoundBracket(a, d, !1, i);
          o = a.endColumn - 1;
        }
        return null;
      };
      let d = null,
        h = null;
      for (let e = n.lineNumber; e <= o; e++) {
        const t = this._getLineTokens(e),
          i = t.getCount(),
          o = this._buffer.getLineContent(e);
        let s = 0,
          r = 0,
          l = 0;
        if (e === n.lineNumber) {
          ((s = t.findTokenIndexAtOffset(n.column - 1)), (r = n.column - 1), (l = n.column - 1));
          const e = t.getLanguageId(s);
          d !== e && ((d = e), (h = this.getLanguageConfiguration(d).brackets), a(d, h));
        }
        let u = !0;
        for (; s < i; s++) {
          const i = t.getLanguageId(s);
          if (d !== i) {
            if (h && u && r !== l) {
              const t = c(h, e, o, r, l);
              if (t) return Wt(t);
              u = !1;
            }
            ((d = i), (h = this.getLanguageConfiguration(d).brackets), a(d, h));
          }
          const n = !!h && !(0, ke.Bu)(t.getStandardTokenType(s));
          if (n) (u || (r = t.getStartOffset(s)), (l = t.getEndOffset(s)));else if (h && u && r !== l) {
            const t = c(h, e, o, r, l);
            if (t) return Wt(t);
          }
          u = n;
        }
        if (h && u && r !== l) {
          const t = c(h, e, o, r, l);
          if (t) return Wt(t);
        }
      }
      return null;
    }
    _toFoundBracket(e, t) {
      if (!t) return null;
      let i = this.getValueInRange(t);
      i = i.toLowerCase();
      let n = e.textIsBracket[i];
      return n ? {
        range: t,
        open: n.open,
        close: n.close,
        isOpen: e.textIsOpenBracket[i]
      } : null;
    }
    static computeIndentLevel(e, t) {
      let i = 0,
        n = 0,
        o = e.length;
      for (; n < o;) {
        let o = e.charCodeAt(n);
        if (32 === o) i++;else {
          if (9 !== o) break;
          i = i - (i % t) + t;
        }
        n++;
      }
      return n === o ? -1 : i;
    }
    _computeIndentLevel(t) {
      return e.computeIndentLevel(this._buffer.getLineContent(t + 1), this._options.tabSize);
    }
    getActiveIndentGuide(e, t, i) {
      this._assertNotDisposed();
      const n = this.getLineCount();
      if (e < 1 || e > n) throw new Error("Illegal value for lineNumber");
      const o = this.getLanguageConfiguration(this._languageId).foldingRules,
        s = Boolean(o && o.offSide);
      let r = -2,
        a = -1,
        l = -2,
        c = -1;
      const d = e => {
        if (-1 !== r && (-2 === r || r > e - 1)) {
          ((r = -1), (a = -1));
          for (let t = e - 2; t >= 0; t--) {
            let e = this._computeIndentLevel(t);
            if (e >= 0) {
              ((r = t), (a = e));
              break;
            }
          }
        }
        if (-2 === l) {
          ((l = -1), (c = -1));
          for (let t = e; t < n; t++) {
            let e = this._computeIndentLevel(t);
            if (e >= 0) {
              ((l = t), (c = e));
              break;
            }
          }
        }
      };
      let h = -2,
        u = -1,
        g = -2,
        p = -1;
      const f = e => {
        if (-2 === h) {
          ((h = -1), (u = -1));
          for (let t = e - 2; t >= 0; t--) {
            let e = this._computeIndentLevel(t);
            if (e >= 0) {
              ((h = t), (u = e));
              break;
            }
          }
        }
        if (-1 !== g && (-2 === g || g < e - 1)) {
          ((g = -1), (p = -1));
          for (let t = e; t < n; t++) {
            let e = this._computeIndentLevel(t);
            if (e >= 0) {
              ((g = t), (p = e));
              break;
            }
          }
        }
      };
      let m = 0,
        v = !0,
        _ = 0,
        b = !0,
        w = 0,
        y = 0;
      for (let o = 0; v || b; o++) {
        const r = e - o,
          g = e + o;
        (o > 1 && (r < 1 || r < t) && (v = !1), o > 1 && (g > n || g > i) && (b = !1), o > 5e4 && ((v = !1), (b = !1)));
        let C = -1;
        if (v) {
          const e = this._computeIndentLevel(r - 1);
          e >= 0 ? ((l = r - 1), (c = e), (C = Math.ceil(e / this._options.indentSize))) : (d(r), (C = this._getIndentLevelForWhitespaceLine(s, a, c)));
        }
        let x = -1;
        if (b) {
          const e = this._computeIndentLevel(g - 1);
          e >= 0 ? ((h = g - 1), (u = e), (x = Math.ceil(e / this._options.indentSize))) : (f(g), (x = this._getIndentLevelForWhitespaceLine(s, u, p)));
        }
        if (0 !== o) {
          if (1 === o) {
            if (g <= n && x >= 0 && y + 1 === x) {
              ((v = !1), (m = g), (_ = g), (w = x));
              continue;
            }
            if (r >= 1 && C >= 0 && C - 1 === y) {
              ((b = !1), (m = r), (_ = r), (w = C));
              continue;
            }
            if (((m = e), (_ = e), (w = y), 0 === w)) return {
              startLineNumber: m,
              endLineNumber: _,
              indent: w
            };
          }
          (v && (C >= w ? (m = r) : (v = !1)), b && (x >= w ? (_ = g) : (b = !1)));
        } else y = C;
      }
      return {
        startLineNumber: m,
        endLineNumber: _,
        indent: w
      };
    }
    getLinesBracketGuides(e, t, i, n) {
      var o, s, a, l, c;
      const h = [],
        g = this._bracketPairColorizer.getBracketPairsInRangeWithMinIndentation(new d.e(e, 1, t, this.getLineMaxColumn(t)));
      let p;
      if (i && g.length > 0) {
        const n = e <= i.lineNumber && i.lineNumber <= t ? g.filter(e => e.range.containsPosition(i)) : this._bracketPairColorizer.getBracketPairsInRange(d.e.fromPositions(i));
        p = null === (o = (0, pe.dF)(n, e => e.range.startLineNumber !== e.range.endLineNumber)) || void 0 === o ? void 0 : o.range;
      }
      const f = new pe.H9(g),
        m = new Array(),
        v = new Array(),
        _ = new zt();
      for (let i = e; i <= t; i++) {
        let e = new Array();
        (v.length > 0 && ((e = e.concat(v)), (v.length = 0)), h.push(e));
        for (const e of f.takeWhile(e => e.openingBracketRange.startLineNumber <= i) || []) {
          if (e.range.startLineNumber === e.range.endLineNumber) continue;
          const t = Math.min(this.getVisibleColumnFromPosition(e.openingBracketRange.getStartPosition()), this.getVisibleColumnFromPosition(null !== (a = null === (s = e.closingBracketRange) || void 0 === s ? void 0 : s.getStartPosition()) && void 0 !== a ? a : e.range.getEndPosition()), e.minVisibleColumnIndentation + 1);
          let i = !1;
          if (e.closingBracketRange) {
            r.LC(this.getLineContent(e.closingBracketRange.startLineNumber)) < e.closingBracketRange.startColumn - 1 && (i = !0);
          }
          const n = e.openingBracketRange.getStartPosition(),
            o = null !== (c = null === (l = e.closingBracketRange) || void 0 === l ? void 0 : l.getStartPosition()) && void 0 !== c ? c : e.range.getEndPosition();
          void 0 === e.closingBracketRange ? (m[e.nestingLevel] = null) : (m[e.nestingLevel] = {
            nestingLevel: e.nestingLevel,
            guideVisibleColumn: t,
            start: n,
            visibleStartColumn: this.getVisibleColumnFromPosition(n),
            end: o,
            visibleEndColumn: this.getVisibleColumnFromPosition(o),
            bracketPair: e,
            renderHorizontalEndLineAtTheBottom: i
          });
        }
        for (const t of m) {
          if (!t) continue;
          const o = p && t.bracketPair.range.equalsRange(p),
            s = _.getInlineClassNameOfLevel(t.nestingLevel) + (n.highlightActive && o ? " " + _.activeClassName : "");
          ((o && n.horizontalGuides !== u.s6.Disabled) || (n.includeInactive && n.horizontalGuides === u.s6.Enabled)) && (t.start.lineNumber === i && t.guideVisibleColumn < t.visibleStartColumn && e.push(new u.UO(t.guideVisibleColumn, s, new u.vW(!1, t.start.column))), t.end.lineNumber === i + 1 && t.guideVisibleColumn < t.visibleEndColumn && v.push(new u.UO(t.guideVisibleColumn, s, new u.vW(!t.renderHorizontalEndLineAtTheBottom, t.end.column))));
        }
        let t = Number.MAX_SAFE_INTEGER;
        for (let o = m.length - 1; o >= 0; o--) {
          const s = m[o];
          if (!s) continue;
          const r = n.highlightActive && p && s.bracketPair.range.equalsRange(p),
            a = _.getInlineClassNameOfLevel(s.nestingLevel) + (r ? " " + _.activeClassName : "");
          ((r || n.includeInactive) && s.renderHorizontalEndLineAtTheBottom && s.end.lineNumber === i + 1 && v.push(new u.UO(s.guideVisibleColumn, a, null)), s.end.lineNumber <= i || s.start.lineNumber >= i || (s.guideVisibleColumn >= t && !r) || ((t = s.guideVisibleColumn), (r || n.includeInactive) && e.push(new u.UO(s.guideVisibleColumn, a, null))));
        }
        e.sort((e, t) => e.visibleColumn - t.visibleColumn);
      }
      return h;
    }
    getVisibleColumnFromPosition(e) {
      return ($e.i.visibleColumnFromColumn(this.getLineContent(e.lineNumber), e.column, this._options.tabSize) + 1);
    }
    getLinesIndentGuides(e, t) {
      this._assertNotDisposed();
      const i = this.getLineCount();
      if (e < 1 || e > i) throw new Error("Illegal value for startLineNumber");
      if (t < 1 || t > i) throw new Error("Illegal value for endLineNumber");
      const n = this.getLanguageConfiguration(this._languageId).foldingRules,
        o = Boolean(n && n.offSide);
      let s = new Array(t - e + 1),
        r = -2,
        a = -1,
        l = -2,
        c = -1;
      for (let n = e; n <= t; n++) {
        let t = n - e;
        const d = this._computeIndentLevel(n - 1);
        if (d >= 0) ((r = n - 1), (a = d), (s[t] = Math.ceil(d / this._options.indentSize)));else {
          if (-2 === r) {
            ((r = -1), (a = -1));
            for (let e = n - 2; e >= 0; e--) {
              let t = this._computeIndentLevel(e);
              if (t >= 0) {
                ((r = e), (a = t));
                break;
              }
            }
          }
          if (-1 !== l && (-2 === l || l < n - 1)) {
            ((l = -1), (c = -1));
            for (let e = n; e < i; e++) {
              let t = this._computeIndentLevel(e);
              if (t >= 0) {
                ((l = e), (c = t));
                break;
              }
            }
          }
          s[t] = this._getIndentLevelForWhitespaceLine(o, a, c);
        }
      }
      return s;
    }
    _getIndentLevelForWhitespaceLine(e, t, i) {
      return -1 === t || -1 === i ? 0 : t < i ? 1 + Math.floor(t / this._options.indentSize) : t === i || e ? Math.ceil(i / this._options.indentSize) : 1 + Math.floor(i / this._options.indentSize);
    }
    normalizePosition(e, t) {
      return e;
    }
    getLineIndentColumn(e) {
      return ((function (e) {
        let t = 0;
        for (const i of e) {
          if (" " !== i && "\t" !== i) break;
          t++;
        }
        return t;
      })(this.getLineContent(e)) + 1);
    }
  };
  ((Ht.MODEL_SYNC_LIMIT = 52428800), (Ht.LARGE_FILE_SIZE_THRESHOLD = 20971520), (Ht.LARGE_FILE_LINE_COUNT_THRESHOLD = 3e5), (Ht.DEFAULT_CREATION_OPTIONS = {
    isForSimpleWidget: !1,
    tabSize: l.DB.tabSize,
    indentSize: l.DB.indentSize,
    insertSpaces: l.DB.insertSpaces,
    detectIndentation: !1,
    defaultEOL: 1,
    trimAutoWhitespace: l.DB.trimAutoWhitespace,
    largeFileOptimizations: l.DB.largeFileOptimizations,
    bracketPairColorizationOptions: l.DB.bracketPairColorizationOptions
  }), (Ht = Mt([At(4, De.tJ), At(5, Tt.h), At(6, Se.c_)], Ht)));
  class zt {
    constructor() {
      this.activeClassName = "indent-active";
    }
    getInlineClassNameOfLevel(e) {
      return "bracket-indent-guide lvl-" + (e % 30);
    }
  }
  function jt(e) {
    return !(!e.options.overviewRuler || !e.options.overviewRuler.color);
  }
  function Ut(e) {
    return !!e.options.after || !!e.options.before;
  }
  class $t {
    constructor() {
      ((this._decorationsTree0 = new N()), (this._decorationsTree1 = new N()), (this._injectedTextDecorationsTree = new N()));
    }
    ensureAllNodesHaveRanges(e) {
      this.getAll(e, 0, !1, !1);
    }
    _ensureNodesHaveRanges(e, t) {
      for (const i of t) null === i.range && (i.range = e.getRangeAt(i.cachedAbsoluteStart, i.cachedAbsoluteEnd));
      return t;
    }
    getAllInInterval(e, t, i, n, o) {
      const s = e.getVersionId(),
        r = this._intervalSearch(t, i, n, o, s);
      return this._ensureNodesHaveRanges(e, r);
    }
    _intervalSearch(e, t, i, n, o) {
      const s = this._decorationsTree0.intervalSearch(e, t, i, n, o),
        r = this._decorationsTree1.intervalSearch(e, t, i, n, o),
        a = this._injectedTextDecorationsTree.intervalSearch(e, t, i, n, o);
      return s.concat(r).concat(a);
    }
    getInjectedTextInInterval(e, t, i, n) {
      const o = e.getVersionId(),
        s = this._injectedTextDecorationsTree.intervalSearch(t, i, n, !1, o);
      return this._ensureNodesHaveRanges(e, s).filter(e => e.options.showIfCollapsed || !e.range.isEmpty());
    }
    getAllInjectedText(e, t) {
      const i = e.getVersionId(),
        n = this._injectedTextDecorationsTree.search(t, !1, i);
      return this._ensureNodesHaveRanges(e, n).filter(e => e.options.showIfCollapsed || !e.range.isEmpty());
    }
    getAll(e, t, i, n) {
      const o = e.getVersionId(),
        s = this._search(t, i, n, o);
      return this._ensureNodesHaveRanges(e, s);
    }
    _search(e, t, i, n) {
      if (i) return this._decorationsTree1.search(e, t, n);
      {
        const i = this._decorationsTree0.search(e, t, n),
          o = this._decorationsTree1.search(e, t, n),
          s = this._injectedTextDecorationsTree.search(e, t, n);
        return i.concat(o).concat(s);
      }
    }
    collectNodesFromOwner(e) {
      const t = this._decorationsTree0.collectNodesFromOwner(e),
        i = this._decorationsTree1.collectNodesFromOwner(e),
        n = this._injectedTextDecorationsTree.collectNodesFromOwner(e);
      return t.concat(i).concat(n);
    }
    collectNodesPostOrder() {
      const e = this._decorationsTree0.collectNodesPostOrder(),
        t = this._decorationsTree1.collectNodesPostOrder(),
        i = this._injectedTextDecorationsTree.collectNodesPostOrder();
      return e.concat(t).concat(i);
    }
    insert(e) {
      Ut(e) ? this._injectedTextDecorationsTree.insert(e) : jt(e) ? this._decorationsTree1.insert(e) : this._decorationsTree0.insert(e);
    }
    delete(e) {
      Ut(e) ? this._injectedTextDecorationsTree.delete(e) : jt(e) ? this._decorationsTree1.delete(e) : this._decorationsTree0.delete(e);
    }
    getNodeRange(e, t) {
      const i = e.getVersionId();
      return (t.cachedVersionId !== i && this._resolveNode(t, i), null === t.range && (t.range = e.getRangeAt(t.cachedAbsoluteStart, t.cachedAbsoluteEnd)), t.range);
    }
    _resolveNode(e, t) {
      Ut(e) ? this._injectedTextDecorationsTree.resolveNode(e, t) : jt(e) ? this._decorationsTree1.resolveNode(e, t) : this._decorationsTree0.resolveNode(e, t);
    }
    acceptReplace(e, t, i, n) {
      (this._decorationsTree0.acceptReplace(e, t, i, n), this._decorationsTree1.acceptReplace(e, t, i, n), this._injectedTextDecorationsTree.acceptReplace(e, t, i, n));
    }
  }
  function Kt(e) {
    return e.replace(/[^a-z0-9\-_]/gi, " ");
  }
  class qt {
    constructor(e) {
      ((this.color = e.color || ""), (this.darkColor = e.darkColor || ""));
    }
  }
  class Zt extends qt {
    constructor(e) {
      (super(e), (this._resolvedColor = null), (this.position = "number" == typeof e.position ? e.position : u.sh.Center));
    }
    getColor(e) {
      return (this._resolvedColor || ("light" !== e.type && this.darkColor ? (this._resolvedColor = this._resolveColor(this.darkColor, e)) : (this._resolvedColor = this._resolveColor(this.color, e))), this._resolvedColor);
    }
    invalidateCachedColor() {
      this._resolvedColor = null;
    }
    _resolveColor(e, t) {
      if ("string" == typeof e) return e;
      let i = e ? t.getColor(e.id) : null;
      return i ? i.toString() : "";
    }
  }
  class Gt extends qt {
    constructor(e) {
      (super(e), (this.position = e.position));
    }
    getColor(e) {
      return (this._resolvedColor || ("light" !== e.type && this.darkColor ? (this._resolvedColor = this._resolveColor(this.darkColor, e)) : (this._resolvedColor = this._resolveColor(this.color, e))), this._resolvedColor);
    }
    invalidateCachedColor() {
      this._resolvedColor = void 0;
    }
    _resolveColor(e, t) {
      return "string" == typeof e ? Ne.Il.fromHex(e) : t.getColor(e.id);
    }
  }
  class Yt {
    constructor(e) {
      ((this.content = e.content || ""), (this.inlineClassName = e.inlineClassName || null), (this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || !1));
    }
    static from(e) {
      return e instanceof Yt ? e : new Yt(e);
    }
  }
  class Qt {
    constructor(e) {
      ((this.description = e.description), (this.stickiness = e.stickiness || 0), (this.zIndex = e.zIndex || 0), (this.className = e.className ? Kt(e.className) : null), (this.hoverMessage = e.hoverMessage || null), (this.glyphMarginHoverMessage = e.glyphMarginHoverMessage || null), (this.isWholeLine = e.isWholeLine || !1), (this.showIfCollapsed = e.showIfCollapsed || !1), (this.collapseOnReplaceEdit = e.collapseOnReplaceEdit || !1), (this.overviewRuler = e.overviewRuler ? new Zt(e.overviewRuler) : null), (this.minimap = e.minimap ? new Gt(e.minimap) : null), (this.glyphMarginClassName = e.glyphMarginClassName ? Kt(e.glyphMarginClassName) : null), (this.linesDecorationsClassName = e.linesDecorationsClassName ? Kt(e.linesDecorationsClassName) : null), (this.firstLineDecorationClassName = e.firstLineDecorationClassName ? Kt(e.firstLineDecorationClassName) : null), (this.marginClassName = e.marginClassName ? Kt(e.marginClassName) : null), (this.inlineClassName = e.inlineClassName ? Kt(e.inlineClassName) : null), (this.inlineClassNameAffectsLetterSpacing = e.inlineClassNameAffectsLetterSpacing || !1), (this.beforeContentClassName = e.beforeContentClassName ? Kt(e.beforeContentClassName) : null), (this.afterContentClassName = e.afterContentClassName ? Kt(e.afterContentClassName) : null), (this.after = e.after ? Yt.from(e.after) : null), (this.before = e.before ? Yt.from(e.before) : null));
    }
    static register(e) {
      return new Qt(e);
    }
    static createDynamic(e) {
      return new Qt(e);
    }
  }
  Qt.EMPTY = Qt.register({
    description: "empty"
  });
  const Xt = [Qt.register({
    description: "tracked-range-always-grows-when-typing-at-edges",
    stickiness: 0
  }), Qt.register({
    description: "tracked-range-never-grows-when-typing-at-edges",
    stickiness: 1
  }), Qt.register({
    description: "tracked-range-grows-only-when-typing-before",
    stickiness: 2
  }), Qt.register({
    description: "tracked-range-grows-only-when-typing-after",
    stickiness: 3
  })];
  function Jt(e) {
    return e instanceof Qt ? e : Qt.createDynamic(e);
  }
  class ei extends s.JT {
    constructor(e) {
      (super(), (this.handleBeforeFire = e), (this._actual = this._register(new o.Q5())), (this.event = this._actual.event), (this._affectedInjectedTextLines = null), (this._deferredCnt = 0), (this._shouldFire = !1), (this._affectsMinimap = !1), (this._affectsOverviewRuler = !1));
    }
    beginDeferredEmit() {
      this._deferredCnt++;
    }
    endDeferredEmit() {
      var e;
      if ((this._deferredCnt--, 0 === this._deferredCnt)) {
        if (this._shouldFire) {
          this.handleBeforeFire(this._affectedInjectedTextLines);
          const e = {
            affectsMinimap: this._affectsMinimap,
            affectsOverviewRuler: this._affectsOverviewRuler
          };
          ((this._shouldFire = !1), (this._affectsMinimap = !1), (this._affectsOverviewRuler = !1), this._actual.fire(e));
        }
        (null === (e = this._affectedInjectedTextLines) || void 0 === e || e.clear(), (this._affectedInjectedTextLines = null));
      }
    }
    recordLineAffectedByInjectedText(e) {
      (this._affectedInjectedTextLines || (this._affectedInjectedTextLines = new Set()), this._affectedInjectedTextLines.add(e));
    }
    checkAffectedAndFire(e) {
      (this._affectsMinimap || (this._affectsMinimap = !(!e.minimap || !e.minimap.position)), this._affectsOverviewRuler || (this._affectsOverviewRuler = !(!e.overviewRuler || !e.overviewRuler.color)), (this._shouldFire = !0));
    }
    fire() {
      ((this._affectsMinimap = !0), (this._affectsOverviewRuler = !0), (this._shouldFire = !0));
    }
  }
  class ti extends s.JT {
    constructor() {
      (super(), (this._fastEmitter = this._register(new o.Q5())), (this.fastEvent = this._fastEmitter.event), (this._slowEmitter = this._register(new o.Q5())), (this.slowEvent = this._slowEmitter.event), (this._deferredCnt = 0), (this._deferredEvent = null));
    }
    beginDeferredEmit() {
      this._deferredCnt++;
    }
    endDeferredEmit(e = null) {
      if ((this._deferredCnt--, 0 === this._deferredCnt && null !== this._deferredEvent)) {
        this._deferredEvent.rawContentChangedEvent.resultingSelection = e;
        const t = this._deferredEvent;
        ((this._deferredEvent = null), this._fastEmitter.fire(t), this._slowEmitter.fire(t));
      }
    }
    fire(e) {
      this._deferredCnt > 0 ? this._deferredEvent ? (this._deferredEvent = this._deferredEvent.merge(e)) : (this._deferredEvent = e) : (this._fastEmitter.fire(e), this._slowEmitter.fire(e));
    }
  }
};