module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => s
  });
  var n,
    o = i(97295);
  (!(function (e) {
    ((e[(e.Ignore = 0)] = "Ignore"), (e[(e.Info = 1)] = "Info"), (e[(e.Warning = 2)] = "Warning"), (e[(e.Error = 3)] = "错误"));
  })(n || (n = {})), (function (e) {
    const t = "error",
      i = "warning",
      n = "info";
    ((e.fromValue = function (s) {
      return s ? o.qq(t, s) ? e.Error : o.qq(i, s) || o.qq("warn", s) ? e.Warning : o.qq(n, s) ? e.Info : e.Ignore : e.Ignore;
    }), (e.toString = function (o) {
      switch (o) {
        case e.Error:
          return t;
        case e.Warning:
          return i;
        case e.Info:
          return n;
        default:
          return "ignore";
      }
    }));
  })(n || (n = {})));
  const s = n;
};