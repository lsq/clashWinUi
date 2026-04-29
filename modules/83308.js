module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    E: () => d,
    R: () => h
  });
  var n = i(71050),
    o = i(17301),
    s = i(70666),
    r = i(24314),
    a = i(44101),
    l = i(51200),
    c = i(94565);
  function d(e, t) {
    const i = [],
      n = a.OH.ordered(e).reverse().map(n => Promise.resolve(n.provideDocumentColors(e, t)).then(e => {
        if (Array.isArray(e)) for (let t of e) i.push({
          colorInfo: t,
          provider: n
        });
      }));
    return Promise.all(n).then(() => i);
  }
  function h(e, t, i, n) {
    return Promise.resolve(i.provideColorPresentations(e, t, n));
  }
  (c.P.registerCommand("_executeDocumentColorProvider", function (e, ...t) {
    const [i] = t;
    if (!(i instanceof s.o)) throw (0, o.b1)();
    const r = e.get(l.q).getModel(i);
    if (!r) throw (0, o.b1)();
    const c = [],
      d = a.OH.ordered(r).reverse().map(e => Promise.resolve(e.provideDocumentColors(r, n.T.None)).then(e => {
        if (Array.isArray(e)) for (let t of e) c.push({
          range: t.range,
          color: [t.color.red, t.color.green, t.color.blue, t.color.alpha]
        });
      }));
    return Promise.all(d).then(() => c);
  }), c.P.registerCommand("_executeColorPresentationProvider", function (e, ...t) {
    const [i, c] = t,
      {
        uri: d,
        range: h
      } = c;
    if (!(d instanceof s.o && Array.isArray(i) && 4 === i.length && r.e.isIRange(h))) throw (0, o.b1)();
    const [u, g, p, f] = i,
      m = e.get(l.q).getModel(d);
    if (!m) throw (0, o.b1)();
    const v = {
        range: h,
        color: {
          red: u,
          green: g,
          blue: p,
          alpha: f
        }
      },
      _ = [],
      b = a.OH.ordered(m).reverse().map(e => Promise.resolve(e.provideColorPresentations(m, v, n.T.None)).then(e => {
        Array.isArray(e) && _.push(...e);
      }));
    return Promise.all(b).then(() => _);
  }));
};