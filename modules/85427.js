module.exports = (e, t, i) => {
  "use strict";

  function n(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }
  function o(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }
  i.d(t, {
    A: () => o,
    K: () => n
  });
};