module.exports = (e, t, i) => {
  "use strict";

  function n(e, t) {
    if (!e) throw new Error(t ? `Assertion failed (${t})` : "Assertion Failed");
  }
  i.d(t, {
    ok: () => n
  });
};