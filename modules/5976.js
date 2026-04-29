module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    B9: () => u,
    F8: () => g,
    JT: () => m,
    Jz: () => _,
    OF: () => p,
    SL: () => f,
    Wf: () => h,
    XK: () => v,
    dk: () => c
  });
  var n = i(88289),
    o = i(53725);
  let s = null;
  function r(e) {
    return (null == s || s.trackDisposable(e), e);
  }
  function a(e) {
    null == s || s.markAsDisposed(e);
  }
  function l(e, t) {
    null == s || s.setParent(e, t);
  }
  function c(e) {
    return (null == s || s.markAsSingleton(e), e);
  }
  class d extends Error {
    constructor(e) {
      (super(`Encountered errors while disposing of store. Errors: [${e.join(", ")}]`), (this.errors = e));
    }
  }
  function h(e) {
    return "function" == typeof e.dispose && 0 === e.dispose.length;
  }
  function u(e) {
    if (o.$.is(e)) {
      let t = [];
      for (const i of e) if (i) try {
        i.dispose();
      } catch (e) {
        t.push(e);
      }
      if (1 === t.length) throw t[0];
      if (t.length > 1) throw new d(t);
      return Array.isArray(e) ? [] : e;
    }
    if (e) return (e.dispose(), e);
  }
  function g(...e) {
    const t = p(() => u(e));
    return ((function (e, t) {
      if (s) for (const i of e) s.setParent(i, t);
    })(e, t), t);
  }
  function p(e) {
    const t = r({
      dispose: (0, n.I)(() => {
        (a(t), e());
      })
    });
    return t;
  }
  class f {
    constructor() {
      ((this._toDispose = new Set()), (this._isDisposed = !1), r(this));
    }
    dispose() {
      this._isDisposed || (a(this), (this._isDisposed = !0), this.clear());
    }
    clear() {
      try {
        u(this._toDispose.values());
      } finally {
        this._toDispose.clear();
      }
    }
    add(e) {
      if (!e) return e;
      if (e === this) throw new Error("Cannot register a disposable on itself!");
      return (l(e, this), this._isDisposed ? f.DISABLE_DISPOSED_WARNING || console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack) : this._toDispose.add(e), e);
    }
  }
  f.DISABLE_DISPOSED_WARNING = !1;
  class m {
    constructor() {
      ((this._store = new f()), r(this), l(this._store, this));
    }
    dispose() {
      (a(this), this._store.dispose());
    }
    _register(e) {
      if (e === this) throw new Error("Cannot register a disposable on itself!");
      return this._store.add(e);
    }
  }
  m.None = Object.freeze({
    dispose() {}
  });
  class v {
    constructor() {
      ((this._isDisposed = !1), r(this));
    }
    get value() {
      return this._isDisposed ? void 0 : this._value;
    }
    set value(e) {
      var t;
      this._isDisposed || e === this._value || (null === (t = this._value) || void 0 === t || t.dispose(), e && l(e, this), (this._value = e));
    }
    clear() {
      this.value = void 0;
    }
    dispose() {
      var e;
      ((this._isDisposed = !0), a(this), null === (e = this._value) || void 0 === e || e.dispose(), (this._value = void 0));
    }
    clearAndLeak() {
      const e = this._value;
      return ((this._value = void 0), e && l(e, null), e);
    }
  }
  class _ {
    constructor(e) {
      this.object = e;
    }
    dispose() {}
  }
};