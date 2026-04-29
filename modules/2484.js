module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Hs: () => d,
    a$: () => r
  });
  class n {
    constructor(e, t, i, n) {
      ((this.originalStart = e), (this.originalLength = t), (this.modifiedStart = i), (this.modifiedLength = n));
    }
    getOriginalEnd() {
      return this.originalStart + this.originalLength;
    }
    getModifiedEnd() {
      return this.modifiedStart + this.modifiedLength;
    }
  }
  var o = i(89954);
  class s {
    constructor(e) {
      this.source = e;
    }
    getElements() {
      const e = this.source,
        t = new Int32Array(e.length);
      for (let i = 0, n = e.length; i < n; i++) t[i] = e.charCodeAt(i);
      return t;
    }
  }
  function r(e, t, i) {
    return new d(new s(e), new s(t)).ComputeDiff(i).changes;
  }
  class a {
    static Assert(e, t) {
      if (!e) throw new Error(t);
    }
  }
  class l {
    static Copy(e, t, i, n, o) {
      for (let s = 0; s < o; s++) i[n + s] = e[t + s];
    }
    static Copy2(e, t, i, n, o) {
      for (let s = 0; s < o; s++) i[n + s] = e[t + s];
    }
  }
  class c {
    constructor() {
      ((this.m_changes = []), (this.m_originalStart = 1073741824), (this.m_modifiedStart = 1073741824), (this.m_originalCount = 0), (this.m_modifiedCount = 0));
    }
    MarkNextChange() {
      ((this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new n(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), (this.m_originalCount = 0), (this.m_modifiedCount = 0), (this.m_originalStart = 1073741824), (this.m_modifiedStart = 1073741824));
    }
    AddOriginalElement(e, t) {
      ((this.m_originalStart = Math.min(this.m_originalStart, e)), (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)), this.m_originalCount++);
    }
    AddModifiedElement(e, t) {
      ((this.m_originalStart = Math.min(this.m_originalStart, e)), (this.m_modifiedStart = Math.min(this.m_modifiedStart, t)), this.m_modifiedCount++);
    }
    getChanges() {
      return ((this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes);
    }
    getReverseChanges() {
      return ((this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes);
    }
  }
  class d {
    constructor(e, t, i = null) {
      ((this.ContinueProcessingPredicate = i), (this._originalSequence = e), (this._modifiedSequence = t));
      const [n, o, s] = d._getElements(e),
        [r, a, l] = d._getElements(t);
      ((this._hasStrings = s && l), (this._originalStringElements = n), (this._originalElementsOrHash = o), (this._modifiedStringElements = r), (this._modifiedElementsOrHash = a), (this.m_forwardHistory = []), (this.m_reverseHistory = []));
    }
    static _isStringArray(e) {
      return e.length > 0 && "string" == typeof e[0];
    }
    static _getElements(e) {
      const t = e.getElements();
      if (d._isStringArray(t)) {
        const e = new Int32Array(t.length);
        for (let i = 0, n = t.length; i < n; i++) e[i] = (0, o.Cv)(t[i], 0);
        return [t, e, !0];
      }
      return t instanceof Int32Array ? [[], t, !1] : [[], new Int32Array(t), !1];
    }
    ElementsAreEqual(e, t) {
      return (this._originalElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._modifiedStringElements[t]));
    }
    ElementsAreStrictEqual(e, t) {
      if (!this.ElementsAreEqual(e, t)) return !1;
      return (d._getStrictElement(this._originalSequence, e) === d._getStrictElement(this._modifiedSequence, t));
    }
    static _getStrictElement(e, t) {
      return "function" == typeof e.getStrictElement ? e.getStrictElement(t) : null;
    }
    OriginalElementsAreEqual(e, t) {
      return (this._originalElementsOrHash[e] === this._originalElementsOrHash[t] && (!this._hasStrings || this._originalStringElements[e] === this._originalStringElements[t]));
    }
    ModifiedElementsAreEqual(e, t) {
      return (this._modifiedElementsOrHash[e] === this._modifiedElementsOrHash[t] && (!this._hasStrings || this._modifiedStringElements[e] === this._modifiedStringElements[t]));
    }
    ComputeDiff(e) {
      return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, e);
    }
    _ComputeDiff(e, t, i, n, o) {
      const s = [!1];
      let r = this.ComputeDiffRecursive(e, t, i, n, s);
      return (o && (r = this.PrettifyChanges(r)), {
        quitEarly: s[0],
        changes: r
      });
    }
    ComputeDiffRecursive(e, t, i, o, s) {
      for (s[0] = !1; e <= t && i <= o && this.ElementsAreEqual(e, i);) (e++, i++);
      for (; t >= e && o >= i && this.ElementsAreEqual(t, o);) (t--, o--);
      if (e > t || i > o) {
        let s;
        return (i <= o ? (a.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), (s = [new n(e, 0, i, o - i + 1)])) : e <= t ? (a.Assert(i === o + 1, "modifiedStart should only be one more than modifiedEnd"), (s = [new n(e, t - e + 1, i, 0)])) : (a.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), a.Assert(i === o + 1, "modifiedStart should only be one more than modifiedEnd"), (s = [])), s);
      }
      const r = [0],
        l = [0],
        c = this.ComputeRecursionPoint(e, t, i, o, r, l, s),
        d = r[0],
        h = l[0];
      if (null !== c) return c;
      if (!s[0]) {
        const r = this.ComputeDiffRecursive(e, d, i, h, s);
        let a = [];
        return ((a = s[0] ? [new n(d + 1, t - (d + 1) + 1, h + 1, o - (h + 1) + 1)] : this.ComputeDiffRecursive(d + 1, t, h + 1, o, s)), this.ConcatenateChanges(r, a));
      }
      return [new n(e, t - e + 1, i, o - i + 1)];
    }
    WALKTRACE(e, t, i, o, s, r, a, l, d, h, u, g, p, f, m, v, _, b) {
      let w = null,
        y = null,
        C = new c(),
        x = t,
        S = i,
        k = p[0] - v[0] - o,
        L = -1073741824,
        N = this.m_forwardHistory.length - 1;
      do {
        const t = k + e;
        (t === x || (t < S && d[t - 1] < d[t + 1]) ? ((f = (u = d[t + 1]) - k - o), u < L && C.MarkNextChange(), (L = u), C.AddModifiedElement(u + 1, f), (k = t + 1 - e)) : ((f = (u = d[t - 1] + 1) - k - o), u < L && C.MarkNextChange(), (L = u - 1), C.AddOriginalElement(u, f + 1), (k = t - 1 - e)), N >= 0 && ((e = (d = this.m_forwardHistory[N])[0]), (x = 1), (S = d.length - 1)));
      } while (--N >= -1);
      if (((w = C.getReverseChanges()), b[0])) {
        let e = p[0] + 1,
          t = v[0] + 1;
        if (null !== w && w.length > 0) {
          const i = w[w.length - 1];
          ((e = Math.max(e, i.getOriginalEnd())), (t = Math.max(t, i.getModifiedEnd())));
        }
        y = [new n(e, g - e + 1, t, m - t + 1)];
      } else {
        ((C = new c()), (x = r), (S = a), (k = p[0] - v[0] - l), (L = 1073741824), (N = _ ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2));
        do {
          const e = k + s;
          (e === x || (e < S && h[e - 1] >= h[e + 1]) ? ((f = (u = h[e + 1] - 1) - k - l), u > L && C.MarkNextChange(), (L = u + 1), C.AddOriginalElement(u + 1, f + 1), (k = e + 1 - s)) : ((f = (u = h[e - 1]) - k - l), u > L && C.MarkNextChange(), (L = u), C.AddModifiedElement(u + 1, f + 1), (k = e - 1 - s)), N >= 0 && ((s = (h = this.m_reverseHistory[N])[0]), (x = 1), (S = h.length - 1)));
        } while (--N >= -1);
        y = C.getChanges();
      }
      return this.ConcatenateChanges(w, y);
    }
    ComputeRecursionPoint(e, t, i, o, s, r, a) {
      let c = 0,
        d = 0,
        h = 0,
        u = 0,
        g = 0,
        p = 0;
      (e--, i--, (s[0] = 0), (r[0] = 0), (this.m_forwardHistory = []), (this.m_reverseHistory = []));
      const f = t - e + (o - i),
        m = f + 1,
        v = new Int32Array(m),
        _ = new Int32Array(m),
        b = o - i,
        w = t - e,
        y = e - i,
        C = t - o,
        x = (w - b) % 2 == 0;
      ((v[b] = e), (_[w] = t), (a[0] = !1));
      for (let S = 1; S <= f / 2 + 1; S++) {
        let f = 0,
          k = 0;
        ((h = this.ClipDiagonalBound(b - S, S, b, m)), (u = this.ClipDiagonalBound(b + S, S, b, m)));
        for (let e = h; e <= u; e += 2) {
          ((c = e === h || (e < u && v[e - 1] < v[e + 1]) ? v[e + 1] : v[e - 1] + 1), (d = c - (e - b) - y));
          const i = c;
          for (; c < t && d < o && this.ElementsAreEqual(c + 1, d + 1);) (c++, d++);
          if (((v[e] = c), c + d > f + k && ((f = c), (k = d)), !x && Math.abs(e - w) <= S - 1 && c >= _[e])) return ((s[0] = c), (r[0] = d), i <= _[e] && S <= 1448 ? this.WALKTRACE(b, h, u, y, w, g, p, C, v, _, c, t, s, d, o, r, x, a) : null);
        }
        const L = (f - e + (k - i) - S) / 2;
        if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(f, L)) return ((a[0] = !0), (s[0] = f), (r[0] = k), L > 0 && S <= 1448 ? this.WALKTRACE(b, h, u, y, w, g, p, C, v, _, c, t, s, d, o, r, x, a) : (e++, i++, [new n(e, t - e + 1, i, o - i + 1)]));
        ((g = this.ClipDiagonalBound(w - S, S, w, m)), (p = this.ClipDiagonalBound(w + S, S, w, m)));
        for (let n = g; n <= p; n += 2) {
          ((c = n === g || (n < p && _[n - 1] >= _[n + 1]) ? _[n + 1] - 1 : _[n - 1]), (d = c - (n - w) - C));
          const l = c;
          for (; c > e && d > i && this.ElementsAreEqual(c, d);) (c--, d--);
          if (((_[n] = c), x && Math.abs(n - b) <= S && c <= v[n])) return ((s[0] = c), (r[0] = d), l >= v[n] && S <= 1448 ? this.WALKTRACE(b, h, u, y, w, g, p, C, v, _, c, t, s, d, o, r, x, a) : null);
        }
        if (S <= 1447) {
          let e = new Int32Array(u - h + 2);
          ((e[0] = b - h + 1), l.Copy2(v, h, e, 1, u - h + 1), this.m_forwardHistory.push(e), (e = new Int32Array(p - g + 2)), (e[0] = w - g + 1), l.Copy2(_, g, e, 1, p - g + 1), this.m_reverseHistory.push(e));
        }
      }
      return this.WALKTRACE(b, h, u, y, w, g, p, C, v, _, c, t, s, d, o, r, x, a);
    }
    PrettifyChanges(e) {
      for (let t = 0; t < e.length; t++) {
        const i = e[t],
          n = t < e.length - 1 ? e[t + 1].originalStart : this._originalElementsOrHash.length,
          o = t < e.length - 1 ? e[t + 1].modifiedStart : this._modifiedElementsOrHash.length,
          s = i.originalLength > 0,
          r = i.modifiedLength > 0;
        for (; i.originalStart + i.originalLength < n && i.modifiedStart + i.modifiedLength < o && (!s || this.OriginalElementsAreEqual(i.originalStart, i.originalStart + i.originalLength)) && (!r || this.ModifiedElementsAreEqual(i.modifiedStart, i.modifiedStart + i.modifiedLength));) {
          const e = this.ElementsAreStrictEqual(i.originalStart, i.modifiedStart);
          if (this.ElementsAreStrictEqual(i.originalStart + i.originalLength, i.modifiedStart + i.modifiedLength) && !e) break;
          (i.originalStart++, i.modifiedStart++);
        }
        let a = [null];
        t < e.length - 1 && this.ChangesOverlap(e[t], e[t + 1], a) && ((e[t] = a[0]), e.splice(t + 1, 1), t--);
      }
      for (let t = e.length - 1; t >= 0; t--) {
        const i = e[t];
        let n = 0,
          o = 0;
        if (t > 0) {
          const i = e[t - 1];
          ((n = i.originalStart + i.originalLength), (o = i.modifiedStart + i.modifiedLength));
        }
        const s = i.originalLength > 0,
          r = i.modifiedLength > 0;
        let a = 0,
          l = this._boundaryScore(i.originalStart, i.originalLength, i.modifiedStart, i.modifiedLength);
        for (let e = 1;; e++) {
          const t = i.originalStart - e,
            c = i.modifiedStart - e;
          if (t < n || c < o) break;
          if (s && !this.OriginalElementsAreEqual(t, t + i.originalLength)) break;
          if (r && !this.ModifiedElementsAreEqual(c, c + i.modifiedLength)) break;
          const d = (t === n && c === o ? 5 : 0) + this._boundaryScore(t, i.originalLength, c, i.modifiedLength);
          d > l && ((l = d), (a = e));
        }
        ((i.originalStart -= a), (i.modifiedStart -= a));
        const c = [null];
        t > 0 && this.ChangesOverlap(e[t - 1], e[t], c) && ((e[t - 1] = c[0]), e.splice(t, 1), t++);
      }
      if (this._hasStrings) for (let t = 1, i = e.length; t < i; t++) {
        const i = e[t - 1],
          n = e[t],
          o = n.originalStart - i.originalStart - i.originalLength,
          s = i.originalStart,
          r = n.originalStart + n.originalLength,
          a = r - s,
          l = i.modifiedStart,
          c = n.modifiedStart + n.modifiedLength,
          d = c - l;
        if (o < 5 && a < 20 && d < 20) {
          const e = this._findBetterContiguousSequence(s, a, l, d, o);
          if (e) {
            const [t, s] = e;
            (t === i.originalStart + i.originalLength && s === i.modifiedStart + i.modifiedLength) || ((i.originalLength = t - i.originalStart), (i.modifiedLength = s - i.modifiedStart), (n.originalStart = t + o), (n.modifiedStart = s + o), (n.originalLength = r - n.originalStart), (n.modifiedLength = c - n.modifiedStart));
          }
        }
      }
      return e;
    }
    _findBetterContiguousSequence(e, t, i, n, o) {
      if (t < o || n < o) return null;
      const s = e + t - o + 1,
        r = i + n - o + 1;
      let a = 0,
        l = 0,
        c = 0;
      for (let t = e; t < s; t++) for (let e = i; e < r; e++) {
        const i = this._contiguousSequenceScore(t, e, o);
        i > 0 && i > a && ((a = i), (l = t), (c = e));
      }
      return a > 0 ? [l, c] : null;
    }
    _contiguousSequenceScore(e, t, i) {
      let n = 0;
      for (let o = 0; o < i; o++) {
        if (!this.ElementsAreEqual(e + o, t + o)) return 0;
        n += this._originalStringElements[e + o].length;
      }
      return n;
    }
    _OriginalIsBoundary(e) {
      return (e <= 0 || e >= this._originalElementsOrHash.length - 1 || (this._hasStrings && /^\s*$/.test(this._originalStringElements[e])));
    }
    _OriginalRegionIsBoundary(e, t) {
      if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
      if (t > 0) {
        const i = e + t;
        if (this._OriginalIsBoundary(i - 1) || this._OriginalIsBoundary(i)) return !0;
      }
      return !1;
    }
    _ModifiedIsBoundary(e) {
      return (e <= 0 || e >= this._modifiedElementsOrHash.length - 1 || (this._hasStrings && /^\s*$/.test(this._modifiedStringElements[e])));
    }
    _ModifiedRegionIsBoundary(e, t) {
      if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
      if (t > 0) {
        const i = e + t;
        if (this._ModifiedIsBoundary(i - 1) || this._ModifiedIsBoundary(i)) return !0;
      }
      return !1;
    }
    _boundaryScore(e, t, i, n) {
      return ((this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(i, n) ? 1 : 0));
    }
    ConcatenateChanges(e, t) {
      let i = [];
      if (0 === e.length || 0 === t.length) return t.length > 0 ? t : e;
      if (this.ChangesOverlap(e[e.length - 1], t[0], i)) {
        const n = new Array(e.length + t.length - 1);
        return (l.Copy(e, 0, n, 0, e.length - 1), (n[e.length - 1] = i[0]), l.Copy(t, 1, n, e.length, t.length - 1), n);
      }
      {
        const i = new Array(e.length + t.length);
        return (l.Copy(e, 0, i, 0, e.length), l.Copy(t, 0, i, e.length, t.length), i);
      }
    }
    ChangesOverlap(e, t, i) {
      if ((a.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), a.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart)) {
        const o = e.originalStart;
        let s = e.originalLength;
        const r = e.modifiedStart;
        let a = e.modifiedLength;
        return (e.originalStart + e.originalLength >= t.originalStart && (s = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (a = t.modifiedStart + t.modifiedLength - e.modifiedStart), (i[0] = new n(o, s, r, a)), !0);
      }
      return ((i[0] = null), !1);
    }
    ClipDiagonalBound(e, t, i, n) {
      if (e >= 0 && e < n) return e;
      const o = t % 2 == 0;
      if (e < 0) {
        return o === (i % 2 == 0) ? 0 : 1;
      }
      return o === ((n - i - 1) % 2 == 0) ? n - 1 : n - 2;
    }
  }
};