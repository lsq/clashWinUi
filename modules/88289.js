module.exports = (e, t, i) => {
  "use strict";

  function n(e) {
    const t = this;
    let i,
      n = !1;
    return function () {
      return (n || ((n = !0), (i = e.apply(t, arguments))), i);
    };
  }
  i.d(t, {
    I: () => n
  });
};