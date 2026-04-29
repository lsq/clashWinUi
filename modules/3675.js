module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    l: () => o
  });
  var n = i(33181);
  class o {
    static whitespaceVisibleColumn(e, t, i) {
      const o = e.length;
      let s = 0,
        r = -1,
        a = -1;
      for (let l = 0; l < o; l++) {
        if (l === t) return [r, a, s];
        s % i == 0 && ((r = l), (a = s));
        switch (e.charCodeAt(l)) {
          case 32:
            s += 1;
            break;
          case 9:
            s = n.io.nextRenderTabStop(s, i);
            break;
          default:
            return [-1, -1, -1];
        }
      }
      return t === o ? [r, a, s] : [-1, -1, -1];
    }
    static atomicPosition(e, t, i, s) {
      const r = e.length,
        [a, l, c] = o.whitespaceVisibleColumn(e, t, i);
      if (-1 === c) return -1;
      let d;
      switch (s) {
        case 0:
          d = !0;
          break;
        case 1:
          d = !1;
          break;
        case 2:
          if (c % i == 0) return t;
          d = c % i <= i / 2;
      }
      if (d) {
        if (-1 === a) return -1;
        let t = l;
        for (let o = a; o < r; ++o) {
          if (t === l + i) return a;
          switch (e.charCodeAt(o)) {
            case 32:
              t += 1;
              break;
            case 9:
              t = n.io.nextRenderTabStop(t, i);
              break;
            default:
              return -1;
          }
        }
        return t === l + i ? a : -1;
      }
      const h = n.io.nextRenderTabStop(c, i);
      let u = c;
      for (let o = t; o < r; o++) {
        if (u === h) return o;
        switch (e.charCodeAt(o)) {
          case 32:
            u += 1;
            break;
          case 9:
            u = n.io.nextRenderTabStop(u, i);
            break;
          default:
            return -1;
        }
      }
      return u === h ? r : -1;
    }
  }
};