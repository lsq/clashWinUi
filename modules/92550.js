module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Kp: () => o,
    k: () => a
  });
  var n = i(97295);
  class o {
    constructor(e, t, i, n) {
      ((this.startColumn = e), (this.endColumn = t), (this.className = i), (this.type = n), (this._lineDecorationBrand = void 0));
    }
    static _equals(e, t) {
      return (e.startColumn === t.startColumn && e.endColumn === t.endColumn && e.className === t.className && e.type === t.type);
    }
    static equalsArr(e, t) {
      const i = e.length;
      if (i !== t.length) return !1;
      for (let n = 0; n < i; n++) if (!o._equals(e[n], t[n])) return !1;
      return !0;
    }
    static extractWrapped(e, t, i) {
      if (0 === e.length) return e;
      const n = t + 1,
        s = i + 1,
        r = i - t,
        a = [];
      let l = 0;
      for (const t of e) t.endColumn <= n || t.startColumn >= s || (a[l++] = new o(Math.max(1, t.startColumn - n + 1), Math.min(r + 1, t.endColumn - n + 1), t.className, t.type));
      return a;
    }
    static filter(e, t, i, n) {
      if (0 === e.length) return [];
      let s = [],
        r = 0;
      for (let a = 0, l = e.length; a < l; a++) {
        const l = e[a],
          c = l.range;
        if (c.endLineNumber < t || c.startLineNumber > t) continue;
        if (c.isEmpty() && (0 === l.type || 3 === l.type)) continue;
        const d = c.startLineNumber === t ? c.startColumn : i,
          h = c.endLineNumber === t ? c.endColumn : n;
        s[r++] = new o(d, h, l.inlineClassName, l.type);
      }
      return s;
    }
    static _typeCompare(e, t) {
      const i = [2, 0, 1, 3];
      return i[e] - i[t];
    }
    static compare(e, t) {
      if (e.startColumn !== t.startColumn) return e.startColumn - t.startColumn;
      if (e.endColumn !== t.endColumn) return e.endColumn - t.endColumn;
      const i = o._typeCompare(e.type, t.type);
      return 0 !== i ? i : e.className !== t.className ? e.className < t.className ? -1 : 1 : 0;
    }
  }
  class s {
    constructor(e, t, i, n) {
      ((this.startOffset = e), (this.endOffset = t), (this.className = i), (this.metadata = n));
    }
  }
  class r {
    constructor() {
      ((this.stopOffsets = []), (this.classNames = []), (this.metadata = []), (this.count = 0));
    }
    static _metadata(e) {
      let t = 0;
      for (let i = 0, n = e.length; i < n; i++) t |= e[i];
      return t;
    }
    consumeLowerThan(e, t, i) {
      for (; this.count > 0 && this.stopOffsets[0] < e;) {
        let e = 0;
        for (; e + 1 < this.count && this.stopOffsets[e] === this.stopOffsets[e + 1];) e++;
        (i.push(new s(t, this.stopOffsets[e], this.classNames.join(" "), r._metadata(this.metadata))), (t = this.stopOffsets[e] + 1), this.stopOffsets.splice(0, e + 1), this.classNames.splice(0, e + 1), this.metadata.splice(0, e + 1), (this.count -= e + 1));
      }
      return (this.count > 0 && t < e && (i.push(new s(t, e - 1, this.classNames.join(" "), r._metadata(this.metadata))), (t = e)), t);
    }
    insert(e, t, i) {
      if (0 === this.count || this.stopOffsets[this.count - 1] <= e) (this.stopOffsets.push(e), this.classNames.push(t), this.metadata.push(i));else for (let n = 0; n < this.count; n++) if (this.stopOffsets[n] >= e) {
        (this.stopOffsets.splice(n, 0, e), this.classNames.splice(n, 0, t), this.metadata.splice(n, 0, i));
        break;
      }
      this.count++;
    }
  }
  class a {
    static normalize(e, t) {
      if (0 === t.length) return [];
      let i = [];
      const o = new r();
      let s = 0;
      for (let r = 0, a = t.length; r < a; r++) {
        const a = t[r];
        let l = a.startColumn,
          c = a.endColumn;
        const d = a.className,
          h = 1 === a.type ? 2 : 2 === a.type ? 4 : 0;
        if (l > 1) {
          const t = e.charCodeAt(l - 2);
          n.ZG(t) && l--;
        }
        if (c > 1) {
          const t = e.charCodeAt(c - 2);
          n.ZG(t) && c--;
        }
        const u = l - 1,
          g = c - 2;
        ((s = o.consumeLowerThan(u, s, i)), 0 === o.count && (s = u), o.insert(g, d, h));
      }
      return (o.consumeLowerThan(1073741824, s, i), i);
    }
  }
};