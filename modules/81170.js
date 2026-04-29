module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    G8: () => p,
    bS: () => g,
    sA: () => u,
    vW: () => n
  });
  var n,
    o = i(14118),
    s = i(66663),
    r = i(88721),
    a = i(95935),
    l = i(97295);
  !(function (e) {
    ((e.text = "text/plain"), (e.binary = "application/octet-stream"), (e.unknown = "application/unknown"), (e.markdown = "text/markdown"), (e.latex = "text/latex"));
  })(n || (n = {}));
  let c = [],
    d = [],
    h = [];
  function u(e, t = !1) {
    const i = (function (e) {
      return {
        id: e.id,
        mime: e.mime,
        filename: e.filename,
        extension: e.extension,
        filepattern: e.filepattern,
        firstline: e.firstline,
        userConfigured: e.userConfigured,
        filenameLowercase: e.filename ? e.filename.toLowerCase() : void 0,
        extensionLowercase: e.extension ? e.extension.toLowerCase() : void 0,
        filepatternLowercase: e.filepattern ? (0, o.Qc)(e.filepattern.toLowerCase()) : void 0,
        filepatternOnPath: !!e.filepattern && e.filepattern.indexOf(r.KR.sep) >= 0
      };
    })(e);
    (c.push(i), i.userConfigured ? h.push(i) : d.push(i), t && !i.userConfigured && c.forEach(e => {
      e.mime === i.mime || e.userConfigured || (i.extension && e.extension === i.extension && console.warn(`Overwriting extension <<${i.extension}>> to now point to mime <<${i.mime}>>`), i.filename && e.filename === i.filename && console.warn(`Overwriting filename <<${i.filename}>> to now point to mime <<${i.mime}>>`), i.filepattern && e.filepattern === i.filepattern && console.warn(`Overwriting filepattern <<${i.filepattern}>> to now point to mime <<${i.mime}>>`), i.firstline && e.firstline === i.firstline && console.warn(`Overwriting firstline <<${i.firstline}>> to now point to mime <<${i.mime}>>`));
    }));
  }
  function g(e) {
    e ? ((c = c.filter(e => !e.userConfigured)), (h = [])) : ((c = []), (d = []), (h = []));
  }
  function p(e, t) {
    let i;
    if (e) switch (e.scheme) {
      case s.lg.file:
        i = e.fsPath;
        break;
      case s.lg.data:
        i = a.Vb.parseMetaData(e).get(a.Vb.META_DATA_LABEL);
        break;
      default:
        i = e.path;
    }
    if (!i) return [n.unknown];
    i = i.toLowerCase();
    const o = (0, r.EZ)(i),
      u = f(i, o, h);
    if (u) return [u, n.text];
    const g = f(i, o, d);
    if (g) return [g, n.text];
    if (t) {
      const e = (function (e) {
        (0, l.uS)(e) && (e = e.substr(1));
        if (e.length > 0) for (let t = c.length - 1; t >= 0; t--) {
          const i = c[t];
          if (!i.firstline) continue;
          const n = e.match(i.firstline);
          if (n && n.length > 0) return i.mime;
        }
        return null;
      })(t);
      if (e) return [e, n.text];
    }
    return [n.unknown];
  }
  function f(e, t, i) {
    var n;
    let o = null,
      s = null,
      r = null;
    for (let a = i.length - 1; a >= 0; a--) {
      const l = i[a];
      if (t === l.filenameLowercase) {
        o = l;
        break;
      }
      if (l.filepattern && (!s || l.filepattern.length > s.filepattern.length)) {
        const i = l.filepatternOnPath ? e : t;
        (null === (n = l.filepatternLowercase) || void 0 === n ? void 0 : n.call(l, i)) && (s = l);
      }
      l.extension && (!r || l.extension.length > r.extension.length) && t.endsWith(l.extensionLowercase) && (r = l);
    }
    return o ? o.mime : s ? s.mime : r ? r.mime : null;
  }
};