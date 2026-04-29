module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    B8: () => u,
    Cp: () => s,
    F0: () => c,
    L6: () => h,
    VV: () => l,
    b1: () => d,
    dL: () => o,
    ri: () => r
  });
  const n = new (class {
    constructor() {
      ((this.listeners = []), (this.unexpectedErrorHandler = function (e) {
        setTimeout(() => {
          if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
          throw e;
        }, 0);
      }));
    }
    emit(e) {
      this.listeners.forEach(t => {
        t(e);
      });
    }
    onUnexpectedError(e) {
      (this.unexpectedErrorHandler(e), this.emit(e));
    }
    onUnexpectedExternalError(e) {
      this.unexpectedErrorHandler(e);
    }
  })();
  function o(e) {
    l(e) || n.onUnexpectedError(e);
  }
  function s(e) {
    l(e) || n.onUnexpectedExternalError(e);
  }
  function r(e) {
    if (e instanceof Error) {
      let {
        name: t,
        message: i
      } = e;
      return {
        $isError: !0,
        name: t,
        message: i,
        stack: e.stacktrace || e.stack
      };
    }
    return e;
  }
  const a = "Canceled";
  function l(e) {
    return e instanceof Error && e.name === a && e.message === a;
  }
  function c() {
    const e = new Error(a);
    return ((e.name = e.message), e);
  }
  function d(e) {
    return e ? new Error(`Illegal argument: ${e}`) : new Error("Illegal argument");
  }
  function h(e) {
    return e ? new Error(`Illegal state: ${e}`) : new Error("Illegal state");
  }
  class u extends Error {
    constructor(e) {
      (super("NotSupported"), e && (this.message = e));
    }
  }
};