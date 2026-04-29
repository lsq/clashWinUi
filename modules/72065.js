module.exports = (e, t, i) => {
  "use strict";

  var n;
  (i.d(t, {
    I8: () => n,
    TG: () => o,
    jt: () => a,
    yh: () => r
  }), (function (e) {
    ((e.serviceIds = new Map()), (e.DI_TARGET = "$di$target"), (e.DI_DEPENDENCIES = "$di$dependencies"), (e.getServiceDependencies = function (t) {
      return t[e.DI_DEPENDENCIES] || [];
    }));
  })(n || (n = {})));
  const o = r("instantiationService");
  function s(e, t, i, o) {
    t[n.DI_TARGET] === t ? t[n.DI_DEPENDENCIES].push({
      id: e,
      index: i,
      optional: o
    }) : ((t[n.DI_DEPENDENCIES] = [{
      id: e,
      index: i,
      optional: o
    }]), (t[n.DI_TARGET] = t));
  }
  function r(e) {
    if (n.serviceIds.has(e)) return n.serviceIds.get(e);
    const t = function (e, i, n) {
      if (3 !== arguments.length) throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
      s(t, e, n, !1);
    };
    return ((t.toString = () => e), n.serviceIds.set(e, t), t);
  }
  function a(e) {
    return function (t, i, n) {
      if (3 !== arguments.length) throw new Error("@optional-decorator can only be used to decorate a parameter");
      s(e, t, n, !0);
    };
  }
};