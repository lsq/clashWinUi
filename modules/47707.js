module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    i: () => o
  });
  var n = i(97295);
  class o {
    static visibleColumnFromColumn(e, t, i) {
      const s = e.length,
        r = t - 1 < s ? t - 1 : s;
      let a = 0,
        l = 0;
      for (; l < r;) {
        const t = n.ZH(e, r, l);
        if (((l += t >= 65536 ? 2 : 1), 9 === t)) a = o.nextRenderTabStop(a, i);else {
          let i = n.S6(t);
          for (; l < r;) {
            const t = n.ZH(e, r, l),
              o = n.S6(t);
            if (n.fi(i, o)) break;
            ((l += t >= 65536 ? 2 : 1), (i = o));
          }
          n.K7(t) || n.C8(t) ? (a += 2) : (a += 1);
        }
      }
      return a;
    }
    static visibleColumnsByColumns(e, t) {
      const i = e.length;
      let s = new Array();
      s.push(-1);
      let r = 0,
        a = 0;
      for (; a < i;) {
        const l = n.ZH(e, i, a);
        if (((a += l >= 65536 ? 2 : 1), s.push(r), l >= 65536 && s.push(r), 9 === l)) r = o.nextRenderTabStop(r, t);else {
          let t = n.S6(l);
          for (; a < i;) {
            const o = n.ZH(e, i, a),
              c = n.S6(o);
            if (n.fi(t, c)) break;
            ((a += o >= 65536 ? 2 : 1), s.push(r), l >= 65536 && s.push(r), (t = c));
          }
          n.K7(l) || n.C8(l) ? (r += 2) : (r += 1);
        }
      }
      return (s.push(r), s);
    }
    static visibleColumnFromColumn2(e, t, i) {
      return this.visibleColumnFromColumn(t.getLineContent(i.lineNumber), i.column, e.tabSize);
    }
    static columnFromVisibleColumn(e, t, i) {
      if (t <= 0) return 1;
      const s = e.length;
      let r = 0,
        a = 1,
        l = 0;
      for (; l < s;) {
        const c = n.ZH(e, s, l);
        let d;
        if (((l += c >= 65536 ? 2 : 1), 9 === c)) d = o.nextRenderTabStop(r, i);else {
          let t = n.S6(c);
          for (; l < s;) {
            const i = n.ZH(e, s, l),
              o = n.S6(i);
            if (n.fi(t, o)) break;
            ((l += i >= 65536 ? 2 : 1), (t = o));
          }
          d = n.K7(c) || n.C8(c) ? r + 2 : r + 1;
        }
        const h = l + 1;
        if (d >= t) {
          return d - t < t - r ? h : a;
        }
        ((r = d), (a = h));
      }
      return s + 1;
    }
    static columnFromVisibleColumn2(e, t, i, n) {
      let o = this.columnFromVisibleColumn(t.getLineContent(i), n, e.tabSize),
        s = t.getLineMinColumn(i);
      if (o < s) return s;
      let r = t.getLineMaxColumn(i);
      return o > r ? r : o;
    }
    static nextRenderTabStop(e, t) {
      return e + t - (e % t);
    }
    static nextIndentTabStop(e, t) {
      return e + t - (e % t);
    }
    static prevRenderTabStop(e, t) {
      return Math.max(0, e - 1 - ((e - 1) % t));
    }
    static prevIndentTabStop(e, t) {
      return Math.max(0, e - 1 - ((e - 1) % t));
    }
  }
};