module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    C: () => a,
    F: () => l
  });
  var n = i(97295),
    o = i(78411),
    s = i(28111);
  const r = {
    getInitialState: () => s.nO,
    tokenize2: (e, t, i, n) => (0, s.mh)(0, e, i, n)
  };
  function a(e, t, i = r) {
    return (function (e, t, i) {
      let s = '<div class="monaco-tokenized-source">';
      const r = n.uq(e);
      let a = i.getInitialState();
      for (let e = 0, l = r.length; e < l; e++) {
        const l = r[e];
        e > 0 && (s += "<br/>");
        const c = i.tokenize2(l, !0, a, 0);
        o.A.convertToEndOffset(c.tokens, l.length);
        const d = new o.A(c.tokens, l, t).inflate();
        let h = 0;
        for (let e = 0, t = d.getCount(); e < t; e++) {
          const t = d.getClassName(e),
            i = d.getEndOffset(e);
          ((s += `<span class="${t}">${n.YU(l.substring(h, i))}</span>`), (h = i));
        }
        a = c.endState;
      }
      return ((s += "</div>"), s);
    })(e, t, i || r);
  }
  function l(e, t, i, n, o, s, r) {
    let a = "<div>",
      l = n,
      c = 0,
      d = !0;
    for (let h = 0, u = t.getCount(); h < u; h++) {
      const u = t.getEndOffset(h);
      if (u <= n) continue;
      let g = "";
      for (; l < u && l < o; l++) {
        const t = e.charCodeAt(l);
        switch (t) {
          case 9:
            let e = s - ((l + c) % s);
            for (c += e - 1; e > 0;) (r && d ? ((g += "&#160;"), (d = !1)) : ((g += " "), (d = !0)), e--);
            break;
          case 60:
            ((g += "&lt;"), (d = !1));
            break;
          case 62:
            ((g += "&gt;"), (d = !1));
            break;
          case 38:
            ((g += "&amp;"), (d = !1));
            break;
          case 0:
            ((g += "&#00;"), (d = !1));
            break;
          case 65279:
          case 8232:
          case 8233:
          case 133:
            ((g += "�"), (d = !1));
            break;
          case 13:
            ((g += "&#8203"), (d = !1));
            break;
          case 32:
            r && d ? ((g += "&#160;"), (d = !1)) : ((g += " "), (d = !0));
            break;
          default:
            ((g += String.fromCharCode(t)), (d = !1));
        }
      }
      if (((a += `<span style="${t.getInlineStyle(h, i)}">${g}</span>`), u > o || l >= o)) break;
    }
    return ((a += "</div>"), a);
  }
};