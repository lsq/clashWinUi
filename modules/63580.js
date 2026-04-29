module.exports = (e, t, i) => {
  "use strict";

  function n(e, t, ...i) {
    return (function (e, t) {
      let i;
      return ((i = 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function (e, i) {
        const n = i[0];
        return void 0 !== t[n] ? t[n] : e;
      })), i);
    })(t, i);
  }
  i.d(t, {
    N: () => n
  });
};