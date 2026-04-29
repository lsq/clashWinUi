module.exports = e => {
  function t(e, t, i, n, o, s, r) {
    try {
      var a = e[s](r),
        l = a.value;
    } catch (e) {
      return void i(e);
    }
    a.done ? t(l) : Promise.resolve(l).then(n, o);
  }
  ((e.exports = function (e) {
    return function () {
      var i = this,
        n = arguments;
      return new Promise(function (o, s) {
        var r = e.apply(i, n);
        function a(e) {
          t(r, o, s, a, l, "next", e);
        }
        function l(e) {
          t(r, o, s, a, l, "throw", e);
        }
        a(void 0);
      });
    };
  }), (e.exports.default = e.exports), (e.exports.__esModule = !0));
};