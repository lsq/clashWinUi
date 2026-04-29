module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    D: () => c,
    p: () => l
  });
  var n = i(15527),
    o = i(66663),
    s = i(1432),
    r = i(95935),
    a = i(70666);
  function l(e) {
    if (!e) return;
    "string" == typeof e && (e = a.o.file(e));
    const t = (0, r.EZ)(e) || (e.scheme === o.lg.file ? e.fsPath : e.path);
    return s.ED && (0, n.vY)(t) ? c(t) : t;
  }
  function c(e) {
    return (0, n.oP)(e) ? e.charAt(0).toUpperCase() + e.slice(1) : e;
  }
};