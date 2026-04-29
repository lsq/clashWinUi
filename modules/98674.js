module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    H0: () => o,
    ZL: () => n,
    lT: () => l
  });
  var n,
    o,
    s = i(14603),
    r = i(63580),
    a = i(72065);
  (!(function (e) {
    ((e[(e.Hint = 1)] = "Hint"), (e[(e.Info = 2)] = "Info"), (e[(e.Warning = 4)] = "Warning"), (e[(e.Error = 8)] = "错误"));
  })(n || (n = {})), (function (e) {
    e.compare = function (e, t) {
      return t - e;
    };
    const t = Object.create(null);
    ((t[e.Error] = (0, r.N)("sev.error", "错误")), (t[e.Warning] = (0, r.N)("sev.warning", "Warning")), (t[e.Info] = (0, r.N)("sev.info", "Info")), (e.toString = function (e) {
      return t[e] || "";
    }), (e.fromSeverity = function (t) {
      switch (t) {
        case s.Z.Error:
          return e.Error;
        case s.Z.Warning:
          return e.Warning;
        case s.Z.Info:
          return e.Info;
        case s.Z.Ignore:
          return e.Hint;
      }
    }), (e.toSeverity = function (t) {
      switch (t) {
        case e.Error:
          return s.Z.Error;
        case e.Warning:
          return s.Z.Warning;
        case e.Info:
          return s.Z.Info;
        case e.Hint:
          return s.Z.Ignore;
      }
    }));
  })(n || (n = {})), (function (e) {
    const t = "";
    function i(e, i) {
      let o = [t];
      return (e.source ? o.push(e.source.replace("¦", "\\¦")) : o.push(t), e.code ? "string" == typeof e.code ? o.push(e.code.replace("¦", "\\¦")) : o.push(e.code.value.replace("¦", "\\¦")) : o.push(t), void 0 !== e.severity && null !== e.severity ? o.push(n.toString(e.severity)) : o.push(t), e.message && i ? o.push(e.message.replace("¦", "\\¦")) : o.push(t), void 0 !== e.startLineNumber && null !== e.startLineNumber ? o.push(e.startLineNumber.toString()) : o.push(t), void 0 !== e.startColumn && null !== e.startColumn ? o.push(e.startColumn.toString()) : o.push(t), void 0 !== e.endLineNumber && null !== e.endLineNumber ? o.push(e.endLineNumber.toString()) : o.push(t), void 0 !== e.endColumn && null !== e.endColumn ? o.push(e.endColumn.toString()) : o.push(t), o.push(t), o.join("¦"));
    }
    ((e.makeKey = function (e) {
      return i(e, !0);
    }), (e.makeKeyOptionalMessage = i));
  })(o || (o = {})));
  const l = (0, a.yh)("markerService");
};