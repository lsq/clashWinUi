module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    ColorContribution: () => a
  }));
  var n = i(5976),
    o = i(16830),
    s = i(24314),
    r = (i(64494), i(67247));
  class a extends n.JT {
    constructor(e) {
      (super(), (this._editor = e), this._register(e.onMouseDown(e => this.onMouseDown(e))));
    }
    dispose() {
      super.dispose();
    }
    onMouseDown(e) {
      var t;
      if (6 !== e.target.type) return;
      if (![...((null === (t = e.target.element) || void 0 === t ? void 0 : t.classList.values()) || [])].find(e => e.startsWith("ced-colorBox"))) return;
      if (!e.target.range) return;
      const i = this._editor.getContribution(r.ModesHoverController.ID);
      if (!i.isColorPickerVisible()) {
        const t = new s.e(e.target.range.startLineNumber, e.target.range.startColumn + 1, e.target.range.endLineNumber, e.target.range.endColumn + 1);
        i.showContentHover(t, 0, !1);
      }
    }
  }
  ((a.ID = "editor.contrib.colorContribution"), (0, o._K)(a.ID, a));
};