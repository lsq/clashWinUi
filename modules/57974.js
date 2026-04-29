module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => c,
    e: () => l
  });
  var n = i(65321),
    o = i(70262),
    s = i(23938),
    r = i(5976),
    a = i(1432);
  function l(e, t) {
    let i = new s.n(t);
    return (i.preventDefault(), {
      leftButton: i.leftButton,
      buttons: i.buttons,
      posx: i.posx,
      posy: i.posy
    });
  }
  class c {
    constructor() {
      ((this._hooks = new r.SL()), (this._mouseMoveEventMerger = null), (this._mouseMoveCallback = null), (this._onStopCallback = null));
    }
    dispose() {
      (this.stopMonitoring(!1), this._hooks.dispose());
    }
    stopMonitoring(e, t) {
      if (!this.isMonitoring()) return;
      (this._hooks.clear(), (this._mouseMoveEventMerger = null), (this._mouseMoveCallback = null));
      const i = this._onStopCallback;
      ((this._onStopCallback = null), e && i && i(t));
    }
    isMonitoring() {
      return !!this._mouseMoveEventMerger;
    }
    startMonitoring(e, t, i, r, l) {
      if (this.isMonitoring()) return;
      ((this._mouseMoveEventMerger = i), (this._mouseMoveCallback = r), (this._onStopCallback = l));
      const c = o.E.getSameOriginWindowChain(),
        d = a.gn ? "pointermove" : "mousemove",
        h = c.map(e => e.window.document),
        u = n.Ay(e);
      u && h.unshift(u);
      for (const e of h) (this._hooks.add(n.Y_(e, d, e => {
        e.buttons === t ? this._mouseMoveCallback(e) : this.stopMonitoring(!0);
      }, (e, t) => this._mouseMoveEventMerger(e, t))), this._hooks.add(n.nm(e, "mouseup", e => this.stopMonitoring(!0))));
      if (o.E.hasDifferentOriginAncestor()) {
        let e = c[c.length - 1];
        (this._hooks.add(n.nm(e.window.document, "mouseout", e => {
          "html" === new s.n(e).target.tagName.toLowerCase() && this.stopMonitoring(!0);
        })), this._hooks.add(n.nm(e.window.document, "mouseover", e => {
          "html" === new s.n(e).target.tagName.toLowerCase() && this.stopMonitoring(!0);
        })), this._hooks.add(n.nm(e.window.document.body, "mouseleave", e => {
          this.stopMonitoring(!0);
        })));
      }
    }
  }
};