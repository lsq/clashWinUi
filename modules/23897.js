module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Q: () => s
  });
  var n = i(53060),
    o = i(70666);
  function s(e) {
    let t = JSON.parse(e);
    return ((t = r(t)), t);
  }
  function r(e, t = 0) {
    if (!e || t > 200) return e;
    if ("object" == typeof e) {
      switch (e.$mid) {
        case 1:
          return o.o.revive(e);
        case 2:
          return new RegExp(e.source, e.flags);
      }
      if (e instanceof n.KN || e instanceof Uint8Array) return e;
      if (Array.isArray(e)) for (let i = 0; i < e.length; ++i) e[i] = r(e[i], t + 1);else for (const i in e) Object.hasOwnProperty.call(e, i) && (e[i] = r(e[i], t + 1));
    }
    return e;
  }
};