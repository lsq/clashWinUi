module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(16830),
    o = i(29102),
    s = i(24314),
    r = i(3860);
  class a {
    constructor(e, t) {
      ((this._selection = e), (this._isMovingLeft = t));
    }
    getEditOperations(e, t) {
      if (this._selection.startLineNumber !== this._selection.endLineNumber || this._selection.isEmpty()) return;
      const i = this._selection.startLineNumber,
        n = this._selection.startColumn,
        o = this._selection.endColumn;
      if ((!this._isMovingLeft || 1 !== n) && (this._isMovingLeft || o !== e.getLineMaxColumn(i))) if (this._isMovingLeft) {
        const r = new s.e(i, n - 1, i, n),
          a = e.getValueInRange(r);
        (t.addEditOperation(r, null), t.addEditOperation(new s.e(i, o, i, o), a));
      } else {
        const r = new s.e(i, o, i, o + 1),
          a = e.getValueInRange(r);
        (t.addEditOperation(r, null), t.addEditOperation(new s.e(i, n, i, n), a));
      }
    }
    computeCursorState(e, t) {
      return this._isMovingLeft ? new r.Y(this._selection.startLineNumber, this._selection.startColumn - 1, this._selection.endLineNumber, this._selection.endColumn - 1) : new r.Y(this._selection.startLineNumber, this._selection.startColumn + 1, this._selection.endLineNumber, this._selection.endColumn + 1);
    }
  }
  var l = i(63580);
  class c extends n.R6 {
    constructor(e, t) {
      (super(t), (this.left = e));
    }
    run(e, t) {
      if (!t.hasModel()) return;
      let i = [],
        n = t.getSelections();
      for (const e of n) i.push(new a(e, this.left));
      (t.pushUndoStop(), t.executeCommands(this.id, i), t.pushUndoStop());
    }
  }
  ((0, n.Qr)(class extends c {
    constructor() {
      super(!0, {
        id: "editor.action.moveCarretLeftAction",
        label: l.N("caret.moveLeft", "Move Selected Text Left"),
        alias: "Move Selected Text Left",
        precondition: o.u.writable
      });
    }
  }), (0, n.Qr)(class extends c {
    constructor() {
      super(!1, {
        id: "editor.action.moveCarretRightAction",
        label: l.N("caret.moveRight", "Move Selected Text Right"),
        alias: "Move Selected Text Right",
        precondition: o.u.writable
      });
    }
  }));
};