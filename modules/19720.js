module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    ToggleTabFocusModeAction: () => a
  }));
  var n = i(85152),
    o = i(16830),
    s = i(56345),
    r = i(63580);
  class a extends o.R6 {
    constructor() {
      super({
        id: a.ID,
        label: r.N({
          key: "toggle.tabMovesFocus",
          comment: ["Turn on/off use of tab key for moving focus around VS Code"]
        }, "Toggle Tab Key Moves Focus"),
        alias: "Toggle Tab Key Moves Focus",
        precondition: void 0,
        kbOpts: {
          kbExpr: null,
          primary: 2091,
          mac: {
            primary: 1323
          },
          weight: 100
        }
      });
    }
    run(e, t) {
      const i = !s.nG.getTabFocusMode();
      (s.nG.setTabFocusMode(i), i ? (0, n.Z9)(r.N("toggle.tabMovesFocus.on", "Pressing Tab will now move focus to the next focusable element")) : (0, n.Z9)(r.N("toggle.tabMovesFocus.off", "Pressing Tab will now insert the tab character")));
    }
  }
  ((a.ID = "editor.action.toggleTabFocusMode"), (0, o.Qr)(a));
};