module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CursorWordAccessibilityLeft: () => N,
    CursorWordAccessibilityLeftSelect: () => D,
    CursorWordAccessibilityRight: () => P,
    CursorWordAccessibilityRightSelect: () => R,
    CursorWordEndLeft: () => C,
    CursorWordEndLeftSelect: () => k,
    CursorWordEndRight: () => E,
    CursorWordEndRightSelect: () => A,
    CursorWordLeft: () => x,
    CursorWordLeftSelect: () => L,
    CursorWordRight: () => T,
    CursorWordRightSelect: () => O,
    CursorWordStartLeft: () => y,
    CursorWordStartLeftSelect: () => S,
    CursorWordStartRight: () => I,
    CursorWordStartRightSelect: () => M,
    DeleteInsideWord: () => K,
    DeleteWordCommand: () => F,
    DeleteWordEndLeft: () => H,
    DeleteWordEndRight: () => U,
    DeleteWordLeft: () => z,
    DeleteWordLeftCommand: () => B,
    DeleteWordRight: () => $,
    DeleteWordRightCommand: () => V,
    DeleteWordStartLeft: () => W,
    DeleteWordStartRight: () => j,
    MoveWordCommand: () => _,
    WordLeftCommand: () => b,
    WordRightCommand: () => w
  }));
  var n = i(16830),
    o = i(61329),
    s = i(64141),
    r = i(33181),
    a = i(5795),
    l = i(59410),
    c = i(50187),
    d = i(24314),
    h = i(3860),
    u = i(29102),
    g = i(83831),
    p = i(63580),
    f = i(31106),
    m = i(38819),
    v = i(39282);
  class _ extends n._l {
    constructor(e) {
      (super(e), (this._inSelectionMode = e.inSelectionMode), (this._wordNavigationType = e.wordNavigationType));
    }
    runEditorCommand(e, t, i) {
      if (!t.hasModel()) return;
      const n = (0, l.u)(t.getOption(115)),
        o = t.getModel(),
        s = t.getSelections().map(e => {
          const t = new c.L(e.positionLineNumber, e.positionColumn),
            i = this._move(n, o, t, this._wordNavigationType);
          return this._moveTo(e, i, this._inSelectionMode);
        });
      if ((o.pushStackElement(), t._getViewModel().setCursorStates("moveWordCommand", 3, s.map(e => r.Vi.fromModelSelection(e))), 1 === s.length)) {
        const e = new c.L(s[0].positionLineNumber, s[0].positionColumn);
        t.revealPosition(e, 0);
      }
    }
    _moveTo(e, t, i) {
      return i ? new h.Y(e.selectionStartLineNumber, e.selectionStartColumn, t.lineNumber, t.column) : new h.Y(t.lineNumber, t.column, t.lineNumber, t.column);
    }
  }
  class b extends _ {
    _move(e, t, i, n) {
      return a.w.moveWordLeft(e, t, i, n);
    }
  }
  class w extends _ {
    _move(e, t, i, n) {
      return a.w.moveWordRight(e, t, i, n);
    }
  }
  class y extends b {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 0,
        id: "cursorWordStartLeft",
        precondition: void 0
      });
    }
  }
  class C extends b {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 2,
        id: "cursorWordEndLeft",
        precondition: void 0
      });
    }
  }
  class x extends b {
    constructor() {
      var e;
      super({
        inSelectionMode: !1,
        wordNavigationType: 1,
        id: "cursorWordLeft",
        precondition: void 0,
        kbOpts: {
          kbExpr: m.Ao.and(u.u.textInputFocus, null === (e = m.Ao.and(f.U, v.c)) || void 0 === e ? void 0 : e.negate()),
          primary: 2063,
          mac: {
            primary: 527
          },
          weight: 100
        }
      });
    }
  }
  class S extends b {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 0,
        id: "cursorWordStartLeftSelect",
        precondition: void 0
      });
    }
  }
  class k extends b {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 2,
        id: "cursorWordEndLeftSelect",
        precondition: void 0
      });
    }
  }
  class L extends b {
    constructor() {
      var e;
      super({
        inSelectionMode: !0,
        wordNavigationType: 1,
        id: "cursorWordLeftSelect",
        precondition: void 0,
        kbOpts: {
          kbExpr: m.Ao.and(u.u.textInputFocus, null === (e = m.Ao.and(f.U, v.c)) || void 0 === e ? void 0 : e.negate()),
          primary: 3087,
          mac: {
            primary: 1551
          },
          weight: 100
        }
      });
    }
  }
  class N extends b {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 3,
        id: "cursorWordAccessibilityLeft",
        precondition: void 0
      });
    }
    _move(e, t, i, n) {
      return super._move((0, l.u)(s.BH.wordSeparators.defaultValue), t, i, n);
    }
  }
  class D extends b {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 3,
        id: "cursorWordAccessibilityLeftSelect",
        precondition: void 0
      });
    }
    _move(e, t, i, n) {
      return super._move((0, l.u)(s.BH.wordSeparators.defaultValue), t, i, n);
    }
  }
  class I extends w {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 0,
        id: "cursorWordStartRight",
        precondition: void 0
      });
    }
  }
  class E extends w {
    constructor() {
      var e;
      super({
        inSelectionMode: !1,
        wordNavigationType: 2,
        id: "cursorWordEndRight",
        precondition: void 0,
        kbOpts: {
          kbExpr: m.Ao.and(u.u.textInputFocus, null === (e = m.Ao.and(f.U, v.c)) || void 0 === e ? void 0 : e.negate()),
          primary: 2065,
          mac: {
            primary: 529
          },
          weight: 100
        }
      });
    }
  }
  class T extends w {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 2,
        id: "cursorWordRight",
        precondition: void 0
      });
    }
  }
  class M extends w {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 0,
        id: "cursorWordStartRightSelect",
        precondition: void 0
      });
    }
  }
  class A extends w {
    constructor() {
      var e;
      super({
        inSelectionMode: !0,
        wordNavigationType: 2,
        id: "cursorWordEndRightSelect",
        precondition: void 0,
        kbOpts: {
          kbExpr: m.Ao.and(u.u.textInputFocus, null === (e = m.Ao.and(f.U, v.c)) || void 0 === e ? void 0 : e.negate()),
          primary: 3089,
          mac: {
            primary: 1553
          },
          weight: 100
        }
      });
    }
  }
  class O extends w {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 2,
        id: "cursorWordRightSelect",
        precondition: void 0
      });
    }
  }
  class P extends w {
    constructor() {
      super({
        inSelectionMode: !1,
        wordNavigationType: 3,
        id: "cursorWordAccessibilityRight",
        precondition: void 0
      });
    }
    _move(e, t, i, n) {
      return super._move((0, l.u)(s.BH.wordSeparators.defaultValue), t, i, n);
    }
  }
  class R extends w {
    constructor() {
      super({
        inSelectionMode: !0,
        wordNavigationType: 3,
        id: "cursorWordAccessibilityRightSelect",
        precondition: void 0
      });
    }
    _move(e, t, i, n) {
      return super._move((0, l.u)(s.BH.wordSeparators.defaultValue), t, i, n);
    }
  }
  class F extends n._l {
    constructor(e) {
      (super(e), (this._whitespaceHeuristics = e.whitespaceHeuristics), (this._wordNavigationType = e.wordNavigationType));
    }
    runEditorCommand(e, t, i) {
      if (!t.hasModel()) return;
      const n = (0, l.u)(t.getOption(115)),
        s = t.getModel(),
        r = t.getSelections(),
        a = t.getOption(5),
        c = t.getOption(8),
        d = g.zu.getAutoClosingPairs(s.getLanguageId()),
        h = t._getViewModel(),
        u = r.map(e => {
          const i = this._delete({
            wordSeparators: n,
            model: s,
            selection: e,
            whitespaceHeuristics: this._whitespaceHeuristics,
            autoClosingDelete: t.getOption(6),
            autoClosingBrackets: a,
            autoClosingQuotes: c,
            autoClosingPairs: d,
            autoClosedCharacters: h.getCursorAutoClosedCharacters()
          }, this._wordNavigationType);
          return new o.T4(i, "");
        });
      (t.pushUndoStop(), t.executeCommands(this.id, u), t.pushUndoStop());
    }
  }
  class B extends F {
    _delete(e, t) {
      let i = a.w.deleteWordLeft(e, t);
      return i || new d.e(1, 1, 1, 1);
    }
  }
  class V extends F {
    _delete(e, t) {
      let i = a.w.deleteWordRight(e, t);
      if (i) return i;
      const n = e.model.getLineCount(),
        o = e.model.getLineMaxColumn(n);
      return new d.e(n, o, n, o);
    }
  }
  class W extends B {
    constructor() {
      super({
        whitespaceHeuristics: !1,
        wordNavigationType: 0,
        id: "deleteWordStartLeft",
        precondition: u.u.writable
      });
    }
  }
  class H extends B {
    constructor() {
      super({
        whitespaceHeuristics: !1,
        wordNavigationType: 2,
        id: "deleteWordEndLeft",
        precondition: u.u.writable
      });
    }
  }
  class z extends B {
    constructor() {
      super({
        whitespaceHeuristics: !0,
        wordNavigationType: 0,
        id: "deleteWordLeft",
        precondition: u.u.writable,
        kbOpts: {
          kbExpr: u.u.textInputFocus,
          primary: 2049,
          mac: {
            primary: 513
          },
          weight: 100
        }
      });
    }
  }
  class j extends V {
    constructor() {
      super({
        whitespaceHeuristics: !1,
        wordNavigationType: 0,
        id: "deleteWordStartRight",
        precondition: u.u.writable
      });
    }
  }
  class U extends V {
    constructor() {
      super({
        whitespaceHeuristics: !1,
        wordNavigationType: 2,
        id: "deleteWordEndRight",
        precondition: u.u.writable
      });
    }
  }
  class $ extends V {
    constructor() {
      super({
        whitespaceHeuristics: !0,
        wordNavigationType: 2,
        id: "deleteWordRight",
        precondition: u.u.writable,
        kbOpts: {
          kbExpr: u.u.textInputFocus,
          primary: 2068,
          mac: {
            primary: 532
          },
          weight: 100
        }
      });
    }
  }
  class K extends n.R6 {
    constructor() {
      super({
        id: "deleteInsideWord",
        precondition: u.u.writable,
        label: p.N("deleteInsideWord", "Delete Word"),
        alias: "Delete Word"
      });
    }
    run(e, t, i) {
      if (!t.hasModel()) return;
      const n = (0, l.u)(t.getOption(115)),
        s = t.getModel(),
        r = t.getSelections().map(e => {
          const t = a.w.deleteInsideWord(n, s, e);
          return new o.T4(t, "");
        });
      (t.pushUndoStop(), t.executeCommands(this.id, r), t.pushUndoStop());
    }
  }
  ((0, n.fK)(new y()), (0, n.fK)(new C()), (0, n.fK)(new x()), (0, n.fK)(new S()), (0, n.fK)(new k()), (0, n.fK)(new L()), (0, n.fK)(new I()), (0, n.fK)(new E()), (0, n.fK)(new T()), (0, n.fK)(new M()), (0, n.fK)(new A()), (0, n.fK)(new O()), (0, n.fK)(new N()), (0, n.fK)(new D()), (0, n.fK)(new P()), (0, n.fK)(new R()), (0, n.fK)(new W()), (0, n.fK)(new H()), (0, n.fK)(new z()), (0, n.fK)(new j()), (0, n.fK)(new U()), (0, n.fK)(new $()), (0, n.Qr)(K));
};