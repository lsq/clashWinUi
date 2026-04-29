module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    DA: () => h,
    OU: () => u,
    QZ: () => l,
    Rl: () => _,
    Wz: () => p,
    cx: () => v
  });
  var n = i(9488),
    o = i(78411),
    s = i(50187),
    r = i(24314),
    a = i(44101);
  function l(e) {
    let t = 0,
      i = 0,
      n = 0,
      o = 0;
    for (let s = 0, r = e.length; s < r; s++) {
      const a = e.charCodeAt(s);
      13 === a ? (0 === t && (i = s), t++, s + 1 < r && 10 === e.charCodeAt(s + 1) ? ((o |= 2), s++) : (o |= 3), (n = s + 1)) : 10 === a && ((o |= 1), 0 === t && (i = s), t++, (n = s + 1));
    }
    return (0 === t && (i = e.length), [t, i, e.length - n, o]);
  }
  function c(e) {
    return (16384 | (e << 0) | (2 << 23)) >>> 0;
  }
  const d = new Uint32Array(0).buffer;
  class h {
    constructor() {
      this.tokens = [];
    }
    add(e, t) {
      if (this.tokens.length > 0) {
        const i = this.tokens[this.tokens.length - 1];
        if (i.startLineNumber + i.tokens.length - 1 + 1 === e) return void i.tokens.push(t);
      }
      this.tokens.push(new f(e, [t]));
    }
  }
  class u {
    constructor(e) {
      ((this._tokens = e), (this._tokenCount = e.length / 4));
    }
    toString(e) {
      let t = [];
      for (let i = 0; i < this._tokenCount; i++) t.push(`(${this._getDeltaLine(i) + e},${this._getStartCharacter(i)}-${this._getEndCharacter(i)})`);
      return `[${t.join(",")}]`;
    }
    getMaxDeltaLine() {
      const e = this._getTokenCount();
      return 0 === e ? -1 : this._getDeltaLine(e - 1);
    }
    getRange() {
      const e = this._getTokenCount();
      if (0 === e) return null;
      const t = this._getStartCharacter(0),
        i = this._getDeltaLine(e - 1),
        n = this._getEndCharacter(e - 1);
      return new r.e(0, t + 1, i, n + 1);
    }
    _getTokenCount() {
      return this._tokenCount;
    }
    _getDeltaLine(e) {
      return this._tokens[4 * e];
    }
    _getStartCharacter(e) {
      return this._tokens[4 * e + 1];
    }
    _getEndCharacter(e) {
      return this._tokens[4 * e + 2];
    }
    isEmpty() {
      return 0 === this._getTokenCount();
    }
    getLineTokens(e) {
      let t = 0,
        i = this._getTokenCount() - 1;
      for (; t < i;) {
        const n = t + Math.floor((i - t) / 2),
          o = this._getDeltaLine(n);
        if (o < e) t = n + 1;else {
          if (!(o > e)) {
            let o = n;
            for (; o > t && this._getDeltaLine(o - 1) === e;) o--;
            let s = n;
            for (; s < i && this._getDeltaLine(s + 1) === e;) s++;
            return new g(this._tokens.subarray(4 * o, 4 * s + 4));
          }
          i = n - 1;
        }
      }
      return this._getDeltaLine(t) === e ? new g(this._tokens.subarray(4 * t, 4 * t + 4)) : null;
    }
    clear() {
      this._tokenCount = 0;
    }
    removeTokens(e, t, i, n) {
      const o = this._tokens,
        s = this._tokenCount;
      let r = 0,
        a = !1,
        l = 0;
      for (let c = 0; c < s; c++) {
        const s = 4 * c,
          d = o[s],
          h = o[s + 1],
          u = o[s + 2],
          g = o[s + 3];
        if ((d > e || (d === e && u >= t)) && (d < i || (d === i && h <= n))) a = !0;else {
          if ((0 === r && (l = d), a)) {
            const e = 4 * r;
            ((o[e] = d - l), (o[e + 1] = h), (o[e + 2] = u), (o[e + 3] = g));
          }
          r++;
        }
      }
      return ((this._tokenCount = r), l);
    }
    split(e, t, i, n) {
      const o = this._tokens,
        s = this._tokenCount;
      let r = [],
        a = [],
        l = r,
        c = 0,
        d = 0;
      for (let r = 0; r < s; r++) {
        const s = 4 * r,
          h = o[s],
          u = o[s + 1],
          g = o[s + 2],
          p = o[s + 3];
        if (h > e || (h === e && g >= t)) {
          if (h < i || (h === i && u <= n)) continue;
          l !== a && ((l = a), (c = 0), (d = h));
        }
        ((l[c++] = h - d), (l[c++] = u), (l[c++] = g), (l[c++] = p));
      }
      return [new u(new Uint32Array(r)), new u(new Uint32Array(a)), d];
    }
    acceptDeleteRange(e, t, i, n, o) {
      const s = this._tokens,
        r = this._tokenCount,
        a = n - t;
      let l = 0,
        c = !1;
      for (let d = 0; d < r; d++) {
        const h = 4 * d;
        let u = s[h],
          g = s[h + 1],
          p = s[h + 2];
        const f = s[h + 3];
        if (u < t || (u === t && p <= i)) {
          l++;
          continue;
        }
        if (u === t && g < i) u === n && p > o ? (p -= o - i) : (p = i);else if (u === t && g === i) {
          if (!(u === n && p > o)) {
            c = !0;
            continue;
          }
          p -= o - i;
        } else if (u < n || (u === n && g < o)) {
          if (!(u === n && p > o)) {
            c = !0;
            continue;
          }
          u === t ? ((g = i), (p = g + (p - o))) : ((g = 0), (p = g + (p - o)));
        } else if (u > n) {
          if (0 === a && !c) {
            l = r;
            break;
          }
          u -= a;
        } else {
          if (!(u === n && g >= o)) throw new Error("Not possible!");
          (e && 0 === u && ((g += e), (p += e)), (u -= a), (g -= o - i), (p -= o - i));
        }
        const m = 4 * l;
        ((s[m] = u), (s[m + 1] = g), (s[m + 2] = p), (s[m + 3] = f), l++);
      }
      this._tokenCount = l;
    }
    acceptInsertText(e, t, i, n, o, s) {
      const r = 0 === i && 1 === n && ((s >= 48 && s <= 57) || (s >= 65 && s <= 90) || (s >= 97 && s <= 122)),
        a = this._tokens,
        l = this._tokenCount;
      for (let s = 0; s < l; s++) {
        const l = 4 * s;
        let c = a[l],
          d = a[l + 1],
          h = a[l + 2];
        if (!(c < e || (c === e && h < t))) {
          if (c === e && h === t) {
            if (!r) continue;
            h += 1;
          } else if (c === e && d < t && t < h) 0 === i ? (h += n) : (h = t);else {
            if (c === e && d === t && r) continue;
            if (c === e) {
              if (((c += i), 0 === i)) ((d += n), (h += n));else {
                const e = h - d;
                ((d = o + (d - t)), (h = d + e));
              }
            } else c += i;
          }
          ((a[l] = c), (a[l + 1] = d), (a[l + 2] = h));
        }
      }
    }
  }
  class g {
    constructor(e) {
      this._tokens = e;
    }
    getCount() {
      return this._tokens.length / 4;
    }
    getStartCharacter(e) {
      return this._tokens[4 * e + 1];
    }
    getEndCharacter(e) {
      return this._tokens[4 * e + 2];
    }
    getMetadata(e) {
      return this._tokens[4 * e + 3];
    }
  }
  class p {
    constructor(e, t) {
      ((this.startLineNumber = e), (this.tokens = t), (this.endLineNumber = this.startLineNumber + this.tokens.getMaxDeltaLine()));
    }
    toString() {
      return this.tokens.toString(this.startLineNumber);
    }
    _updateEndLineNumber() {
      this.endLineNumber = this.startLineNumber + this.tokens.getMaxDeltaLine();
    }
    isEmpty() {
      return this.tokens.isEmpty();
    }
    getLineTokens(e) {
      return this.startLineNumber <= e && e <= this.endLineNumber ? this.tokens.getLineTokens(e - this.startLineNumber) : null;
    }
    getRange() {
      const e = this.tokens.getRange();
      return e ? new r.e(this.startLineNumber + e.startLineNumber, e.startColumn, this.startLineNumber + e.endLineNumber, e.endColumn) : e;
    }
    removeTokens(e) {
      const t = e.startLineNumber - this.startLineNumber,
        i = e.endLineNumber - this.startLineNumber;
      ((this.startLineNumber += this.tokens.removeTokens(t, e.startColumn - 1, i, e.endColumn - 1)), this._updateEndLineNumber());
    }
    split(e) {
      const t = e.startLineNumber - this.startLineNumber,
        i = e.endLineNumber - this.startLineNumber,
        [n, o, s] = this.tokens.split(t, e.startColumn - 1, i, e.endColumn - 1);
      return [new p(this.startLineNumber, n), new p(this.startLineNumber + s, o)];
    }
    applyEdit(e, t) {
      const [i, n, o] = l(t);
      this.acceptEdit(e, i, n, o, t.length > 0 ? t.charCodeAt(0) : 0);
    }
    acceptEdit(e, t, i, n, o) {
      (this._acceptDeleteRange(e), this._acceptInsertText(new s.L(e.startLineNumber, e.startColumn), t, i, n, o), this._updateEndLineNumber());
    }
    _acceptDeleteRange(e) {
      if (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn) return;
      const t = e.startLineNumber - this.startLineNumber,
        i = e.endLineNumber - this.startLineNumber;
      if (i < 0) {
        const e = i - t;
        return void (this.startLineNumber -= e);
      }
      const n = this.tokens.getMaxDeltaLine();
      if (!(t >= n + 1)) {
        if (t < 0 && i >= n + 1) return ((this.startLineNumber = 0), void this.tokens.clear());
        if (t < 0) {
          const n = -t;
          ((this.startLineNumber -= n), this.tokens.acceptDeleteRange(e.startColumn - 1, 0, 0, i, e.endColumn - 1));
        } else this.tokens.acceptDeleteRange(0, t, e.startColumn - 1, i, e.endColumn - 1);
      }
    }
    _acceptInsertText(e, t, i, n, o) {
      if (0 === t && 0 === i) return;
      const s = e.lineNumber - this.startLineNumber;
      if (s < 0) return void (this.startLineNumber += t);
      s >= this.tokens.getMaxDeltaLine() + 1 || this.tokens.acceptInsertText(s, e.column - 1, t, i, n, o);
    }
  }
  class f {
    constructor(e, t) {
      ((this.startLineNumber = e), (this.tokens = t));
    }
  }
  function m(e) {
    return e instanceof Uint32Array ? e : new Uint32Array(e);
  }
  class v {
    constructor(e) {
      ((this._pieces = []), (this._isComplete = !1), (this._languageIdCodec = e));
    }
    flush() {
      ((this._pieces = []), (this._isComplete = !1));
    }
    isEmpty() {
      return 0 === this._pieces.length;
    }
    set(e, t) {
      ((this._pieces = e || []), (this._isComplete = t));
    }
    setPartial(e, t) {
      let i = e;
      if (t.length > 0) {
        const n = t[0].getRange(),
          o = t[t.length - 1].getRange();
        if (!n || !o) return e;
        i = e.plusRange(n).plusRange(o);
      }
      let o = null;
      for (let e = 0, t = this._pieces.length; e < t; e++) {
        const n = this._pieces[e];
        if (n.endLineNumber < i.startLineNumber) continue;
        if (n.startLineNumber > i.endLineNumber) {
          o = o || {
            index: e
          };
          break;
        }
        if ((n.removeTokens(i), n.isEmpty())) {
          (this._pieces.splice(e, 1), e--, t--);
          continue;
        }
        if (n.endLineNumber < i.startLineNumber) continue;
        if (n.startLineNumber > i.endLineNumber) {
          o = o || {
            index: e
          };
          continue;
        }
        const [s, r] = n.split(i);
        s.isEmpty() ? (o = o || {
          index: e
        }) : r.isEmpty() || (this._pieces.splice(e, 1, s, r), e++, t++, (o = o || {
          index: e
        }));
      }
      return ((o = o || {
        index: this._pieces.length
      }), t.length > 0 && (this._pieces = n.Zv(this._pieces, o.index, t)), i);
    }
    isComplete() {
      return this._isComplete;
    }
    addSemanticTokens(e, t) {
      const i = this._pieces;
      if (0 === i.length) return t;
      const n = i[v._findFirstPieceWithLine(i, e)].getLineTokens(e);
      if (!n) return t;
      const s = t.getCount(),
        r = n.getCount();
      let a = 0,
        l = [],
        c = 0,
        d = 0;
      const h = (e, t) => {
        e !== d && ((d = e), (l[c++] = e), (l[c++] = t));
      };
      for (let e = 0; e < r; e++) {
        const i = n.getStartCharacter(e),
          o = n.getEndCharacter(e),
          r = n.getMetadata(e),
          l = ((1 & r ? 2048 : 0) | (2 & r ? 4096 : 0) | (4 & r ? 8192 : 0) | (8 & r ? 8372224 : 0) | (16 & r ? 4286578688 : 0)) >>> 0,
          c = ~l >>> 0;
        for (; a < s && t.getEndOffset(a) <= i;) (h(t.getEndOffset(a), t.getMetadata(a)), a++);
        for (a < s && t.getStartOffset(a) < i && h(i, t.getMetadata(a)); a < s && t.getEndOffset(a) < o;) (h(t.getEndOffset(a), (t.getMetadata(a) & c) | (r & l)), a++);
        if (a < s) (h(o, (t.getMetadata(a) & c) | (r & l)), t.getEndOffset(a) === o && a++);else {
          const e = Math.min(Math.max(0, a - 1), s - 1);
          h(o, (t.getMetadata(e) & c) | (r & l));
        }
      }
      for (; a < s;) (h(t.getEndOffset(a), t.getMetadata(a)), a++);
      return new o.A(new Uint32Array(l), t.getLineContent(), this._languageIdCodec);
    }
    static _findFirstPieceWithLine(e, t) {
      let i = 0,
        n = e.length - 1;
      for (; i < n;) {
        let o = i + Math.floor((n - i) / 2);
        if (e[o].endLineNumber < t) i = o + 1;else {
          if (!(e[o].startLineNumber > t)) {
            for (; o > i && e[o - 1].startLineNumber <= t && t <= e[o - 1].endLineNumber;) o--;
            return o;
          }
          n = o - 1;
        }
      }
      return i;
    }
    acceptEdit(e, t, i, n, o) {
      for (const s of this._pieces) s.acceptEdit(e, t, i, n, o);
    }
  }
  class _ {
    constructor(e) {
      ((this._lineTokens = []), (this._len = 0), (this._languageIdCodec = e));
    }
    flush() {
      ((this._lineTokens = []), (this._len = 0));
    }
    getTokens(e, t, i) {
      let n = null;
      if ((t < this._len && (n = this._lineTokens[t]), null !== n && n !== d)) return new o.A(m(n), i, this._languageIdCodec);
      const s = new Uint32Array(2);
      return ((s[0] = i.length), (s[1] = c(this._languageIdCodec.encodeLanguageId(e))), new o.A(s, i, this._languageIdCodec));
    }
    static _massageTokens(e, t, i) {
      const n = i ? m(i) : null;
      if (0 === t) {
        let t = !1;
        if ((n && n.length > 1 && (t = a.NX.getLanguageId(n[1]) !== e), !t)) return d;
      }
      if (!n || 0 === n.length) {
        const i = new Uint32Array(2);
        return ((i[0] = t), (i[1] = c(e)), i.buffer);
      }
      return ((n[n.length - 2] = t), 0 === n.byteOffset && n.byteLength === n.buffer.byteLength ? n.buffer : n);
    }
    _ensureLine(e) {
      for (; e >= this._len;) ((this._lineTokens[this._len] = null), this._len++);
    }
    _deleteLines(e, t) {
      0 !== t && (e + t > this._len && (t = this._len - e), this._lineTokens.splice(e, t), (this._len -= t));
    }
    _insertLines(e, t) {
      if (0 === t) return;
      let i = [];
      for (let e = 0; e < t; e++) i[e] = null;
      ((this._lineTokens = n.Zv(this._lineTokens, e, i)), (this._len += t));
    }
    setTokens(e, t, i, n, o) {
      const s = _._massageTokens(this._languageIdCodec.encodeLanguageId(e), i, n);
      this._ensureLine(t);
      const r = this._lineTokens[t];
      return ((this._lineTokens[t] = s), !!o && !_._equals(r, s));
    }
    static _equals(e, t) {
      if (!e || !t) return !e && !t;
      const i = m(e),
        n = m(t);
      if (i.length !== n.length) return !1;
      for (let e = 0, t = i.length; e < t; e++) if (i[e] !== n[e]) return !1;
      return !0;
    }
    acceptEdit(e, t, i) {
      (this._acceptDeleteRange(e), this._acceptInsertText(new s.L(e.startLineNumber, e.startColumn), t, i));
    }
    _acceptDeleteRange(e) {
      const t = e.startLineNumber - 1;
      if (t >= this._len) return;
      if (e.startLineNumber === e.endLineNumber) {
        if (e.startColumn === e.endColumn) return;
        return void (this._lineTokens[t] = _._delete(this._lineTokens[t], e.startColumn - 1, e.endColumn - 1));
      }
      this._lineTokens[t] = _._deleteEnding(this._lineTokens[t], e.startColumn - 1);
      const i = e.endLineNumber - 1;
      let n = null;
      (i < this._len && (n = _._deleteBeginning(this._lineTokens[i], e.endColumn - 1)), (this._lineTokens[t] = _._append(this._lineTokens[t], n)), this._deleteLines(e.startLineNumber, e.endLineNumber - e.startLineNumber));
    }
    _acceptInsertText(e, t, i) {
      if (0 === t && 0 === i) return;
      const n = e.lineNumber - 1;
      n >= this._len || (0 !== t ? ((this._lineTokens[n] = _._deleteEnding(this._lineTokens[n], e.column - 1)), (this._lineTokens[n] = _._insert(this._lineTokens[n], e.column - 1, i)), this._insertLines(e.lineNumber, t)) : (this._lineTokens[n] = _._insert(this._lineTokens[n], e.column - 1, i)));
    }
    static _deleteBeginning(e, t) {
      return null === e || e === d ? e : _._delete(e, 0, t);
    }
    static _deleteEnding(e, t) {
      if (null === e || e === d) return e;
      const i = m(e),
        n = i[i.length - 2];
      return _._delete(e, t, n);
    }
    static _delete(e, t, i) {
      if (null === e || e === d || t === i) return e;
      const n = m(e),
        s = n.length >>> 1;
      if (0 === t && n[n.length - 2] === i) return d;
      const r = o.A.findIndexInTokensArray(n, t),
        a = r > 0 ? n[(r - 1) << 1] : 0;
      if (i < n[r << 1]) {
        const o = i - t;
        for (let e = r; e < s; e++) n[e << 1] -= o;
        return e;
      }
      let l, c;
      a !== t ? ((n[r << 1] = t), (l = (r + 1) << 1), (c = t)) : ((l = r << 1), (c = a));
      const h = i - t;
      for (let e = r + 1; e < s; e++) {
        const t = n[e << 1] - h;
        t > c && ((n[l++] = t), (n[l++] = n[1 + (e << 1)]), (c = t));
      }
      if (l === n.length) return e;
      let u = new Uint32Array(l);
      return (u.set(n.subarray(0, l), 0), u.buffer);
    }
    static _append(e, t) {
      if (t === d) return e;
      if (e === d) return t;
      if (null === e) return e;
      if (null === t) return null;
      const i = m(e),
        n = m(t),
        o = n.length >>> 1;
      let s = new Uint32Array(i.length + n.length);
      s.set(i, 0);
      let r = i.length;
      const a = i[i.length - 2];
      for (let e = 0; e < o; e++) ((s[r++] = n[e << 1] + a), (s[r++] = n[1 + (e << 1)]));
      return s.buffer;
    }
    static _insert(e, t, i) {
      if (null === e || e === d) return e;
      const n = m(e),
        s = n.length >>> 1;
      let r = o.A.findIndexInTokensArray(n, t);
      if (r > 0) {
        n[(r - 1) << 1] === t && r--;
      }
      for (let e = r; e < s; e++) n[e << 1] += i;
      return e;
    }
  }
};