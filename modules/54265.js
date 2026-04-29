module.exports = (e, t, i) => {
  var n = {
    "./app.js": 23726,
    "./index.js": 11068
  };
  function o(e) {
    var t = s(e);
    return i(t);
  }
  function s(e) {
    if (!i.o(n, e)) {
      var t = new Error("Cannot find module '" + e + "'");
      throw ((t.code = "MODULE_NOT_FOUND"), t);
    }
    return n[e];
  }
  ((o.keys = function () {
    return Object.keys(n);
  }), (o.resolve = s), (e.exports = o), (o.id = 54265));
};