module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => n
  });
  const n = {
    put: function (e, t) {
      window.localStorage.setItem(e, JSON.stringify(t));
    },
    get: function (e) {
      var t = window.localStorage.getItem(e);
      if ("" !== t) try {
        return JSON.parse(t);
      } catch (t) {
        console.error("get [".concat(e, "] from cache failed with error:"), t);
      }
    }
  };
};