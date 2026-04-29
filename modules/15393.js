module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    J8: () => a,
    PG: () => l,
    Ps: () => f,
    To: () => b,
    Ue: () => w,
    Vg: () => p,
    Vs: () => g,
    _F: () => m,
    eP: () => c,
    jT: () => y,
    pY: () => _,
    rH: () => u,
    vp: () => h,
    zh: () => v
  });
  var n = i(71050),
    o = i(17301),
    s = i(5976),
    r = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  function a(e) {
    return !!e && "function" == typeof e.then;
  }
  function l(e) {
    const t = new n.A(),
      i = e(t.token),
      s = new Promise((e, n) => {
        const s = t.token.onCancellationRequested(() => {
          (s.dispose(), t.dispose(), n((0, o.F0)()));
        });
        Promise.resolve(i).then(i => {
          (s.dispose(), t.dispose(), e(i));
        }, e => {
          (s.dispose(), t.dispose(), n(e));
        });
      });
    return new (class {
      cancel() {
        t.cancel();
      }
      then(e, t) {
        return s.then(e, t);
      }
      catch(e) {
        return this.then(void 0, e);
      }
      finally(e) {
        return s.finally(e);
      }
    })();
  }
  function c(e, t, i) {
    return Promise.race([e, new Promise(e => t.onCancellationRequested(() => e(i)))]);
  }
  class d {
    constructor() {
      ((this.activePromise = null), (this.queuedPromise = null), (this.queuedPromiseFactory = null));
    }
    queue(e) {
      if (this.activePromise) {
        if (((this.queuedPromiseFactory = e), !this.queuedPromise)) {
          const e = () => {
            this.queuedPromise = null;
            const e = this.queue(this.queuedPromiseFactory);
            return ((this.queuedPromiseFactory = null), e);
          };
          this.queuedPromise = new Promise(t => {
            this.activePromise.then(e, e).then(t);
          });
        }
        return new Promise((e, t) => {
          this.queuedPromise.then(e, t);
        });
      }
      return ((this.activePromise = e()), new Promise((e, t) => {
        this.activePromise.then(t => {
          ((this.activePromise = null), e(t));
        }, e => {
          ((this.activePromise = null), t(e));
        });
      }));
    }
  }
  class h {
    constructor(e) {
      ((this.defaultDelay = e), (this.timeout = null), (this.completionPromise = null), (this.doResolve = null), (this.doReject = null), (this.task = null));
    }
    trigger(e, t = this.defaultDelay) {
      return ((this.task = e), this.cancelTimeout(), this.completionPromise || (this.completionPromise = new Promise((e, t) => {
        ((this.doResolve = e), (this.doReject = t));
      }).then(() => {
        if (((this.completionPromise = null), (this.doResolve = null), this.task)) {
          const e = this.task;
          return ((this.task = null), e());
        }
      })), (this.timeout = setTimeout(() => {
        ((this.timeout = null), this.doResolve && this.doResolve(null));
      }, t)), this.completionPromise);
    }
    isTriggered() {
      return null !== this.timeout;
    }
    cancel() {
      (this.cancelTimeout(), this.completionPromise && (this.doReject && this.doReject((0, o.F0)()), (this.completionPromise = null)));
    }
    cancelTimeout() {
      null !== this.timeout && (clearTimeout(this.timeout), (this.timeout = null));
    }
    dispose() {
      this.cancel();
    }
  }
  class u {
    constructor(e) {
      ((this.delayer = new h(e)), (this.throttler = new d()));
    }
    trigger(e, t) {
      return this.delayer.trigger(() => this.throttler.queue(e), t);
    }
    dispose() {
      this.delayer.dispose();
    }
  }
  function g(e, t) {
    return t ? new Promise((i, n) => {
      const s = setTimeout(() => {
          (r.dispose(), i());
        }, e),
        r = t.onCancellationRequested(() => {
          (clearTimeout(s), r.dispose(), n((0, o.F0)()));
        });
    }) : l(t => g(e, t));
  }
  function p(e, t = 0) {
    const i = setTimeout(e, t);
    return (0, s.OF)(() => clearTimeout(i));
  }
  function f(e, t = e => !!e, i = null) {
    let n = 0;
    const o = e.length,
      s = () => {
        if (n >= o) return Promise.resolve(i);
        const r = e[n++];
        return Promise.resolve(r()).then(e => t(e) ? Promise.resolve(e) : s());
      };
    return s();
  }
  class m {
    constructor(e, t) {
      ((this._token = -1), "function" == typeof e && "number" == typeof t && this.setIfNotSet(e, t));
    }
    dispose() {
      this.cancel();
    }
    cancel() {
      -1 !== this._token && (clearTimeout(this._token), (this._token = -1));
    }
    cancelAndSet(e, t) {
      (this.cancel(), (this._token = setTimeout(() => {
        ((this._token = -1), e());
      }, t)));
    }
    setIfNotSet(e, t) {
      -1 === this._token && (this._token = setTimeout(() => {
        ((this._token = -1), e());
      }, t));
    }
  }
  class v {
    constructor() {
      this._token = -1;
    }
    dispose() {
      this.cancel();
    }
    cancel() {
      -1 !== this._token && (clearInterval(this._token), (this._token = -1));
    }
    cancelAndSet(e, t) {
      (this.cancel(), (this._token = setInterval(() => {
        e();
      }, t)));
    }
  }
  class _ {
    constructor(e, t) {
      ((this.timeoutToken = -1), (this.runner = e), (this.timeout = t), (this.timeoutHandler = this.onTimeout.bind(this)));
    }
    dispose() {
      (this.cancel(), (this.runner = null));
    }
    cancel() {
      this.isScheduled() && (clearTimeout(this.timeoutToken), (this.timeoutToken = -1));
    }
    schedule(e = this.timeout) {
      (this.cancel(), (this.timeoutToken = setTimeout(this.timeoutHandler, e)));
    }
    get delay() {
      return this.timeout;
    }
    set delay(e) {
      this.timeout = e;
    }
    isScheduled() {
      return -1 !== this.timeoutToken;
    }
    onTimeout() {
      ((this.timeoutToken = -1), this.runner && this.doRun());
    }
    doRun() {
      this.runner && this.runner();
    }
  }
  let b;
  b = "function" != typeof requestIdleCallback || "function" != typeof cancelIdleCallback ? e => {
    const t = setTimeout(() => {
      const t = Date.now() + 15;
      e(Object.freeze({
        didTimeout: !0,
        timeRemaining: () => Math.max(0, t - Date.now())
      }));
    });
    let i = !1;
    return {
      dispose() {
        i || ((i = !0), clearTimeout(t));
      }
    };
  } : (e, t) => {
    const i = requestIdleCallback(e, "number" == typeof t ? {
      timeout: t
    } : void 0);
    let n = !1;
    return {
      dispose() {
        n || ((n = !0), cancelIdleCallback(i));
      }
    };
  };
  class w {
    constructor(e) {
      ((this._didRun = !1), (this._executor = () => {
        try {
          this._value = e();
        } catch (e) {
          this._error = e;
        } finally {
          this._didRun = !0;
        }
      }), (this._handle = b(() => this._executor())));
    }
    dispose() {
      this._handle.dispose();
    }
    get value() {
      if ((this._didRun || (this._handle.dispose(), this._executor()), this._error)) throw this._error;
      return this._value;
    }
    get isInitialized() {
      return this._didRun;
    }
  }
  var y;
  !(function (e) {
    ((e.settled = function (e) {
      return r(this, void 0, void 0, function* () {
        let t;
        const i = yield Promise.all(e.map(e => e.then(e => e, e => {
          t || (t = e);
        })));
        if (void 0 !== t) throw t;
        return i;
      });
    }), (e.withAsyncBody = function (e) {
      return new Promise((t, i) => r(this, void 0, void 0, function* () {
        try {
          yield e(t, i);
        } catch (e) {
          i(e);
        }
      }));
    }));
  })(y || (y = {}));
};