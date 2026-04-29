module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CursorWordPartLeft: () => u,
    CursorWordPartLeftSelect: () => g,
    CursorWordPartRight: () => f,
    CursorWordPartRightSelect: () => m,
    DeleteWordPartLeft: () => c,
    DeleteWordPartRight: () => d,
    WordPartLeftCommand: () => h,
    WordPartRightCommand: () => p
  }));
  var n = i(16830),
    o = i(5795),
    s = i(24314),
    r = i(29102),
    a = i(99453),
    l = i(94565);
  class c extends a.DeleteWordCommand {
    constructor() {
      super({
        whitespaceHeuristics: !0,
        wordNavigationType: 0,
        id: "deleteWordPartLeft",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 769
          },
          weight: 100
        }
      });
    }
    _delete(e, t) {
      let i = o.L.deleteWordPartLeft(e);
      return i || new s.e(1, 1, 1, 1);
    }
  }
  class d extends a.DeleteWordCommand {
    constructor() {
      super({
        whitespaceHeuristics: !0,
        wordNavigationType: 2,
        id: "deleteWordPartRight",
        precondition: r.u.writable,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 788
          },
          weight: 100
        }
      });
    }
    _delete(e, t) {
      let i = o.L.deleteWordPartRight(e);
      if (i) return i;
      const n = e.model.getLineCount(),
        r = e.model.getLineMaxColumn(n);
      return new s.e(n, r, n, r);
    }
  }
  class h extends a.MoveWordCommand {
    _move(e, t, i, n) {
      return o.L.moveWordPartLeft(e, t, i);
    }
  }
  class u extends h {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 0,
        id: "cursorWordPartLeft",
        precondition: void 0,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 783
          },
          weight: 100
        }
      });
    }
  }
  l.P.registerCommandAlias("cursorWordPartStartLeft", "cursorWordPartLeft");
  class g extends h {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 0,
        id: "cursorWordPartLeftSelect",
        precondition: void 0,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 1807
          },
          weight: 100
        }
      });
    }
  }
  l.P.registerCommandAlias("cursorWordPartStartLeftSelect", "cursorWordPartLeftSelect");
  class p extends a.MoveWordCommand {
    _move(e, t, i, n) {
      return o.L.moveWordPartRight(e, t, i);
    }
  }
  class f extends p {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 2,
        id: "cursorWordPartRight",
        precondition: void 0,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 785
          },
          weight: 100
        }
      });
    }
  }
  class m extends p {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 2,
        id: "cursorWordPartRightSelect",
        precondition: void 0,
        kbOpts: {
          kbExpr: r.u.textInputFocus,
          primary: 0,
          mac: {
            primary: 1809
          },
          weight: 100
        }
      });
    }
  }
  ((0, n.fK)(new c()), (0, n.fK)(new d()), (0, n.fK)(new u()), (0, n.fK)(new g()), (0, n.fK)(new f()), (0, n.fK)(new m()));
};