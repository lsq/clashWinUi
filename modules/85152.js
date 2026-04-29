module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z9: () => u,
    i7: () => g,
    wW: () => h
  });
  var n = i(65321),
    o = i(1432);
  i(56130);
  const s = 2e4;
  let r, a, l, c, d;
  function h(e) {
    ((r = document.createElement("div")), (r.className = "monaco-aria-container"));
    const t = () => {
      const e = document.createElement("div");
      return ((e.className = "monaco-alert"), e.setAttribute("role", "alert"), e.setAttribute("aria-atomic", "true"), r.appendChild(e), e);
    };
    ((a = t()), (l = t()));
    const i = () => {
      const e = document.createElement("div");
      return ((e.className = "monaco-status"), e.setAttribute("role", "complementary"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), r.appendChild(e), e);
    };
    ((c = i()), (d = i()), e.appendChild(r));
  }
  function u(e) {
    r && (a.textContent !== e ? (n.PO(l), p(a, e)) : (n.PO(a), p(l, e)));
  }
  function g(e) {
    r && (o.dz ? u(e) : c.textContent !== e ? (n.PO(d), p(c, e)) : (n.PO(c), p(d, e)));
  }
  function p(e, t) {
    (n.PO(e), t.length > s && (t = t.substr(0, s)), (e.textContent = t), (e.style.visibility = "hidden"), (e.style.visibility = "visible"));
  }
};