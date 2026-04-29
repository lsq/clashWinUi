module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Wi: () => l,
    Z0: () => c,
    aU: () => a,
    eZ: () => h,
    wY: () => d
  });
  var n = i(4669),
    o = i(5976),
    s = i(63580),
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
  class a extends o.JT {
    constructor(e, t = "", i = "", o = !0, s) {
      (super(), (this._onDidChange = this._register(new n.Q5())), (this.onDidChange = this._onDidChange.event), (this._enabled = !0), (this._id = e), (this._label = t), (this._cssClass = i), (this._enabled = o), (this._actionCallback = s));
    }
    get id() {
      return this._id;
    }
    get label() {
      return this._label;
    }
    set label(e) {
      this._setLabel(e);
    }
    _setLabel(e) {
      this._label !== e && ((this._label = e), this._onDidChange.fire({
        label: e
      }));
    }
    get tooltip() {
      return this._tooltip || "";
    }
    set tooltip(e) {
      this._setTooltip(e);
    }
    _setTooltip(e) {
      this._tooltip !== e && ((this._tooltip = e), this._onDidChange.fire({
        tooltip: e
      }));
    }
    get class() {
      return this._cssClass;
    }
    set class(e) {
      this._setClass(e);
    }
    _setClass(e) {
      this._cssClass !== e && ((this._cssClass = e), this._onDidChange.fire({
        class: e
      }));
    }
    get enabled() {
      return this._enabled;
    }
    set enabled(e) {
      this._setEnabled(e);
    }
    _setEnabled(e) {
      this._enabled !== e && ((this._enabled = e), this._onDidChange.fire({
        enabled: e
      }));
    }
    get checked() {
      return this._checked;
    }
    set checked(e) {
      this._setChecked(e);
    }
    _setChecked(e) {
      this._checked !== e && ((this._checked = e), this._onDidChange.fire({
        checked: e
      }));
    }
    run(e, t) {
      return r(this, void 0, void 0, function* () {
        this._actionCallback && (yield this._actionCallback(e));
      });
    }
  }
  class l extends o.JT {
    constructor() {
      (super(...arguments), (this._onBeforeRun = this._register(new n.Q5())), (this.onBeforeRun = this._onBeforeRun.event), (this._onDidRun = this._register(new n.Q5())), (this.onDidRun = this._onDidRun.event));
    }
    run(e, t) {
      return r(this, void 0, void 0, function* () {
        if (!e.enabled) return;
        let i;
        this._onBeforeRun.fire({
          action: e
        });
        try {
          yield this.runAction(e, t);
        } catch (e) {
          i = e;
        }
        this._onDidRun.fire({
          action: e,
          error: i
        });
      });
    }
    runAction(e, t) {
      return r(this, void 0, void 0, function* () {
        yield e.run(t);
      });
    }
  }
  class c extends a {
    constructor(e) {
      (super(c.ID, e, e ? "separator text" : "separator"), (this.checked = !1), (this.enabled = !1));
    }
  }
  c.ID = "vs.actions.separator";
  class d {
    constructor(e, t, i, n) {
      ((this.tooltip = ""), (this.enabled = !0), (this.checked = !1), (this.id = e), (this.label = t), (this.class = n), (this._actions = i));
    }
    get actions() {
      return this._actions;
    }
    dispose() {}
    run() {
      return r(this, void 0, void 0, function* () {});
    }
  }
  class h extends a {
    constructor() {
      super(h.ID, s.N("submenu.empty", "(empty)"), void 0, !1);
    }
  }
  h.ID = "vs.actions.empty";
};