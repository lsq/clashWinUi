module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    A: () => a,
    T: () => s
  });
  var n = i(4669);
  const o = Object.freeze(function (e, t) {
    const i = setTimeout(e.bind(t), 0);
    return {
      dispose() {
        clearTimeout(i);
      }
    };
  });
  var s;
  !(function (e) {
    ((e.isCancellationToken = function (t) {
      return (t === e.None || t === e.Cancelled || t instanceof r || (!(!t || "object" != typeof t) && "boolean" == typeof t.isCancellationRequested && "function" == typeof t.onCancellationRequested));
    }), (e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: n.ju.None
    })), (e.Cancelled = Object.freeze({
      isCancellationRequested: !0,
      onCancellationRequested: o
    })));
  })(s || (s = {}));
  class r {
    constructor() {
      ((this._isCancelled = !1), (this._emitter = null));
    }
    cancel() {
      this._isCancelled || ((this._isCancelled = !0), this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }
    get isCancellationRequested() {
      return this._isCancelled;
    }
    get onCancellationRequested() {
      return this._isCancelled ? o : (this._emitter || (this._emitter = new n.Q5()), this._emitter.event);
    }
    dispose() {
      this._emitter && (this._emitter.dispose(), (this._emitter = null));
    }
  }
  class a {
    constructor(e) {
      ((this._token = void 0), (this._parentListener = void 0), (this._parentListener = e && e.onCancellationRequested(this.cancel, this)));
    }
    get token() {
      return (this._token || (this._token = new r()), this._token);
    }
    cancel() {
      this._token ? this._token instanceof r && this._token.cancel() : (this._token = s.Cancelled);
    }
    dispose(e = !1) {
      (e && this.cancel(), this._parentListener && this._parentListener.dispose(), this._token ? this._token instanceof r && this._token.dispose() : (this._token = s.None));
    }
  }
};