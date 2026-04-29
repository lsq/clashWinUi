module.exports = (e, t, i) => {
  var n = {
    "./service_darwin": 44224,
    "./service_darwin.js": 44224,
    "./service_linux": 33130,
    "./service_linux.js": 33130,
    "./service_win32": 34668,
    "./service_win32.js": 34668
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
  }), (o.resolve = s), (e.exports = o), (o.id = 63878));
};