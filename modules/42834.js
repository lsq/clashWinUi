module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    CursorRedo: () => h,
    CursorUndo: () => d,
    CursorUndoRedoController: () => c
  }));
  var n = i(5976),
    o = i(16830),
    s = i(29102),
    r = i(63580);
  class a {
    constructor(e) {
      this.selections = e;
    }
    equals(e) {
      const t = this.selections.length;
      if (t !== e.selections.length) return !1;
      for (let i = 0; i < t; i++) if (!this.selections[i].equalsSelection(e.selections[i])) return !1;
      return !0;
    }
  }
  class l {
    constructor(e, t, i) {
      ((this.cursorState = e), (this.scrollTop = t), (this.scrollLeft = i));
    }
  }
  class c extends n.JT {
    constructor(e) {
      (super(), (this._editor = e), (this._isCursorUndoRedo = !1), (this._undoStack = []), (this._redoStack = []), this._register(e.onDidChangeModel(e => {
        ((this._undoStack = []), (this._redoStack = []));
      })), this._register(e.onDidChangeModelContent(e => {
        ((this._undoStack = []), (this._redoStack = []));
      })), this._register(e.onDidChangeCursorSelection(t => {
        if (this._isCursorUndoRedo) return;
        if (!t.oldSelections) return;
        if (t.oldModelVersionId !== t.modelVersionId) return;
        const i = new a(t.oldSelections);
        (this._undoStack.length > 0 && this._undoStack[this._undoStack.length - 1].cursorState.equals(i)) || (this._undoStack.push(new l(i, e.getScrollTop(), e.getScrollLeft())), (this._redoStack = []), this._undoStack.length > 50 && this._undoStack.shift());
      })));
    }
    static get(e) {
      return e.getContribution(c.ID);
    }
    cursorUndo() {
      this._editor.hasModel() && 0 !== this._undoStack.length && (this._redoStack.push(new l(new a(this._editor.getSelections()), this._editor.getScrollTop(), this._editor.getScrollLeft())), this._applyState(this._undoStack.pop()));
    }
    cursorRedo() {
      this._editor.hasModel() && 0 !== this._redoStack.length && (this._undoStack.push(new l(new a(this._editor.getSelections()), this._editor.getScrollTop(), this._editor.getScrollLeft())), this._applyState(this._redoStack.pop()));
    }
    _applyState(e) {
      ((this._isCursorUndoRedo = !0), this._editor.setSelections(e.cursorState.selections), this._editor.setScrollPosition({
        scrollTop: e.scrollTop,
        scrollLeft: e.scrollLeft
      }), (this._isCursorUndoRedo = !1));
    }
  }
  c.ID = "editor.contrib.cursorUndoRedoController";
  class d extends o.R6 {
    constructor() {
      super({
        id: "cursorUndo",
        label: r.N("cursor.undo", "Cursor Undo"),
        alias: "Cursor Undo",
        precondition: void 0,
        kbOpts: {
          kbExpr: s.u.textInputFocus,
          primary: 2099,
          weight: 100
        }
      });
    }
    run(e, t, i) {
      c.get(t).cursorUndo();
    }
  }
  class h extends o.R6 {
    constructor() {
      super({
        id: "cursorRedo",
        label: r.N("cursor.redo", "Cursor Redo"),
        alias: "Cursor Redo",
        precondition: void 0
      });
    }
    run(e, t, i) {
      c.get(t).cursorRedo();
    }
  }
  ((0, o._K)(c.ID, c), (0, o.Qr)(d), (0, o.Qr)(h));
};