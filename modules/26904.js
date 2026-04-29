module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Uy: () => g,
    vm: () => m,
    fk: () => p
  });
  var n,
    o = i(4669),
    s = i(5976),
    r = i(98401),
    a = i(15393),
    l = function (e, t, i, n) {
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
  !(function (e) {
    ((e[(e.None = 0)] = "None"), (e[(e.Initialized = 1)] = "Initialized"), (e[(e.Closed = 2)] = "Closed"));
  })(n || (n = {}));
  class c extends s.JT {
    constructor(e, t = Object.create(null)) {
      (super(), (this.database = e), (this.options = t), (this._onDidChangeStorage = this._register(new o.Q5())), (this.onDidChangeStorage = this._onDidChangeStorage.event), (this.state = n.None), (this.cache = new Map()), (this.flushDelayer = new a.rH(c.DEFAULT_FLUSH_DELAY)), (this.pendingDeletes = new Set()), (this.pendingInserts = new Map()), (this.whenFlushedCallbacks = []), this.registerListeners());
    }
    registerListeners() {
      this._register(this.database.onDidChangeItemsExternal(e => this.onDidChangeItemsExternal(e)));
    }
    onDidChangeItemsExternal(e) {
      var t, i;
      (null === (t = e.changed) || void 0 === t || t.forEach((e, t) => this.accept(t, e)), null === (i = e.deleted) || void 0 === i || i.forEach(e => this.accept(e, void 0)));
    }
    accept(e, t) {
      if (this.state === n.Closed) return;
      let i = !1;
      if ((0, r.Jp)(t)) i = this.cache.delete(e);else {
        this.cache.get(e) !== t && (this.cache.set(e, t), (i = !0));
      }
      i && this._onDidChangeStorage.fire(e);
    }
    get(e, t) {
      const i = this.cache.get(e);
      return (0, r.Jp)(i) ? t : i;
    }
    getBoolean(e, t) {
      const i = this.get(e);
      return (0, r.Jp)(i) ? t : "true" === i;
    }
    getNumber(e, t) {
      const i = this.get(e);
      return (0, r.Jp)(i) ? t : parseInt(i, 10);
    }
    set(e, t) {
      return l(this, void 0, void 0, function* () {
        if (this.state === n.Closed) return;
        if ((0, r.Jp)(t)) return this.delete(e);
        const i = String(t);
        return this.cache.get(e) !== i ? (this.cache.set(e, i), this.pendingInserts.set(e, i), this.pendingDeletes.delete(e), this._onDidChangeStorage.fire(e), this.flushDelayer.trigger(() => this.flushPending())) : void 0;
      });
    }
    delete(e) {
      return l(this, void 0, void 0, function* () {
        if (this.state === n.Closed) return;
        return this.cache.delete(e) ? (this.pendingDeletes.has(e) || this.pendingDeletes.add(e), this.pendingInserts.delete(e), this._onDidChangeStorage.fire(e), this.flushDelayer.trigger(() => this.flushPending())) : void 0;
      });
    }
    get hasPending() {
      return this.pendingInserts.size > 0 || this.pendingDeletes.size > 0;
    }
    flushPending() {
      return l(this, void 0, void 0, function* () {
        if (!this.hasPending) return;
        const e = {
          insert: this.pendingInserts,
          delete: this.pendingDeletes
        };
        return ((this.pendingDeletes = new Set()), (this.pendingInserts = new Map()), this.database.updateItems(e).finally(() => {
          var e;
          if (!this.hasPending) for (; this.whenFlushedCallbacks.length;) null === (e = this.whenFlushedCallbacks.pop()) || void 0 === e || e();
        }));
      });
    }
    dispose() {
      (this.flushDelayer.dispose(), super.dispose());
    }
  }
  c.DEFAULT_FLUSH_DELAY = 100;
  class d {
    constructor() {
      ((this.onDidChangeItemsExternal = o.ju.None), (this.items = new Map()));
    }
    updateItems(e) {
      return l(this, void 0, void 0, function* () {
        (e.insert && e.insert.forEach((e, t) => this.items.set(t, e)), e.delete && e.delete.forEach(e => this.items.delete(e)));
      });
    }
  }
  var h = i(72065);
  const u = "__$__targetStorageMarker",
    g = (0, h.yh)("storageService");
  var p;
  !(function (e) {
    ((e[(e.NONE = 0)] = "NONE"), (e[(e.SHUTDOWN = 1)] = "SHUTDOWN"));
  })(p || (p = {}));
  class f extends s.JT {
    constructor(e = {
      flushInterval: f.DEFAULT_FLUSH_INTERVAL
    }) {
      (super(), (this.options = e), (this._onDidChangeValue = this._register(new o.K3())), (this._onDidChangeTarget = this._register(new o.K3())), (this._onWillSaveState = this._register(new o.Q5())), (this.onWillSaveState = this._onWillSaveState.event), (this._workspaceKeyTargets = void 0), (this._globalKeyTargets = void 0));
    }
    emitDidChangeValue(e, t) {
      t === u ? (0 === e ? (this._globalKeyTargets = void 0) : 1 === e && (this._workspaceKeyTargets = void 0), this._onDidChangeTarget.fire({
        scope: e
      })) : this._onDidChangeValue.fire({
        scope: e,
        key: t,
        target: this.getKeyTargets(e)[t]
      });
    }
    get(e, t, i) {
      var n;
      return null === (n = this.getStorage(t)) || void 0 === n ? void 0 : n.get(e, i);
    }
    getBoolean(e, t, i) {
      var n;
      return null === (n = this.getStorage(t)) || void 0 === n ? void 0 : n.getBoolean(e, i);
    }
    getNumber(e, t, i) {
      var n;
      return null === (n = this.getStorage(t)) || void 0 === n ? void 0 : n.getNumber(e, i);
    }
    store(e, t, i, n) {
      (0, r.Jp)(t) ? this.remove(e, i) : this.withPausedEmitters(() => {
        var o;
        (this.updateKeyTarget(e, i, n), null === (o = this.getStorage(i)) || void 0 === o || o.set(e, t));
      });
    }
    remove(e, t) {
      this.withPausedEmitters(() => {
        var i;
        (this.updateKeyTarget(e, t, void 0), null === (i = this.getStorage(t)) || void 0 === i || i.delete(e));
      });
    }
    withPausedEmitters(e) {
      (this._onDidChangeValue.pause(), this._onDidChangeTarget.pause());
      try {
        e();
      } finally {
        (this._onDidChangeValue.resume(), this._onDidChangeTarget.resume());
      }
    }
    updateKeyTarget(e, t, i) {
      var n, o;
      const s = this.getKeyTargets(t);
      "number" == typeof i ? s[e] !== i && ((s[e] = i), null === (n = this.getStorage(t)) || void 0 === n || n.set(u, JSON.stringify(s))) : "number" == typeof s[e] && (delete s[e], null === (o = this.getStorage(t)) || void 0 === o || o.set(u, JSON.stringify(s)));
    }
    get workspaceKeyTargets() {
      return (this._workspaceKeyTargets || (this._workspaceKeyTargets = this.loadKeyTargets(1)), this._workspaceKeyTargets);
    }
    get globalKeyTargets() {
      return (this._globalKeyTargets || (this._globalKeyTargets = this.loadKeyTargets(0)), this._globalKeyTargets);
    }
    getKeyTargets(e) {
      return 0 === e ? this.globalKeyTargets : this.workspaceKeyTargets;
    }
    loadKeyTargets(e) {
      const t = this.get(u, e);
      if (t) try {
        return JSON.parse(t);
      } catch (e) {}
      return Object.create(null);
    }
  }
  f.DEFAULT_FLUSH_INTERVAL = 6e4;
  class m extends f {
    constructor() {
      (super(), (this.globalStorage = this._register(new c(new d()))), (this.workspaceStorage = this._register(new c(new d()))), this._register(this.workspaceStorage.onDidChangeStorage(e => this.emitDidChangeValue(1, e))), this._register(this.globalStorage.onDidChangeStorage(e => this.emitDidChangeValue(0, e))));
    }
    getStorage(e) {
      return 0 === e ? this.globalStorage : this.workspaceStorage;
    }
  }
};