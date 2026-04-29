module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(16830),
    o = i(12095),
    s = i(20913);
  class r extends n.R6 {
    constructor() {
      (super({
        id: "editor.action.toggleHighContrast",
        label: s.xi.toggleHighContrast,
        alias: "Toggle High Contrast Theme",
        precondition: void 0
      }), (this._originalThemeName = null));
    }
    run(e, t) {
      const i = e.get(o.Z);
      this._originalThemeName ? (i.setTheme(this._originalThemeName), (this._originalThemeName = null)) : ((this._originalThemeName = i.getColorTheme().themeName), i.setTheme("hc-black"));
    }
  }
  (0, n.Qr)(r);
};