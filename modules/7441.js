module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    DragAndDropController: () => u
  }));
  var n = i(5976),
    o = i(1432),
    s = (i(22115), i(16830)),
    r = i(50187),
    a = i(24314),
    l = i(3860),
    c = i(44174);
  class d {
    constructor(e, t, i) {
      ((this.selection = e), (this.targetPosition = t), (this.copy = i), (this.targetSelection = null));
    }
    getEditOperations(e, t) {
      let i = e.getValueInRange(this.selection);
      (this.copy || t.addEditOperation(this.selection, null), t.addEditOperation(new a.e(this.targetPosition.lineNumber, this.targetPosition.column, this.targetPosition.lineNumber, this.targetPosition.column), i), !this.selection.containsPosition(this.targetPosition) || (this.copy && (this.selection.getEndPosition().equals(this.targetPosition) || this.selection.getStartPosition().equals(this.targetPosition))) ? this.copy ? (this.targetSelection = new l.Y(this.targetPosition.lineNumber, this.targetPosition.column, this.selection.endLineNumber - this.selection.startLineNumber + this.targetPosition.lineNumber, this.selection.startLineNumber === this.selection.endLineNumber ? this.targetPosition.column + this.selection.endColumn - this.selection.startColumn : this.selection.endColumn)) : this.targetPosition.lineNumber > this.selection.endLineNumber ? (this.targetSelection = new l.Y(this.targetPosition.lineNumber - this.selection.endLineNumber + this.selection.startLineNumber, this.targetPosition.column, this.targetPosition.lineNumber, this.selection.startLineNumber === this.selection.endLineNumber ? this.targetPosition.column + this.selection.endColumn - this.selection.startColumn : this.selection.endColumn)) : this.targetPosition.lineNumber < this.selection.endLineNumber ? (this.targetSelection = new l.Y(this.targetPosition.lineNumber, this.targetPosition.column, this.targetPosition.lineNumber + this.selection.endLineNumber - this.selection.startLineNumber, this.selection.startLineNumber === this.selection.endLineNumber ? this.targetPosition.column + this.selection.endColumn - this.selection.startColumn : this.selection.endColumn)) : this.selection.endColumn <= this.targetPosition.column ? (this.targetSelection = new l.Y(this.targetPosition.lineNumber - this.selection.endLineNumber + this.selection.startLineNumber, (this.selection.startLineNumber, this.selection.endLineNumber, this.targetPosition.column - this.selection.endColumn + this.selection.startColumn), this.targetPosition.lineNumber, this.selection.startLineNumber === this.selection.endLineNumber ? this.targetPosition.column : this.selection.endColumn)) : (this.targetSelection = new l.Y(this.targetPosition.lineNumber - this.selection.endLineNumber + this.selection.startLineNumber, this.targetPosition.column, this.targetPosition.lineNumber, this.targetPosition.column + this.selection.endColumn - this.selection.startColumn)) : (this.targetSelection = this.selection));
    }
    computeCursorState(e, t) {
      return this.targetSelection;
    }
  }
  function h(e) {
    return o.dz ? e.altKey : e.ctrlKey;
  }
  class u extends n.JT {
    constructor(e) {
      (super(), (this._editor = e), this._register(this._editor.onMouseDown(e => this._onEditorMouseDown(e))), this._register(this._editor.onMouseUp(e => this._onEditorMouseUp(e))), this._register(this._editor.onMouseDrag(e => this._onEditorMouseDrag(e))), this._register(this._editor.onMouseDrop(e => this._onEditorMouseDrop(e))), this._register(this._editor.onMouseDropCanceled(() => this._onEditorMouseDropCanceled())), this._register(this._editor.onKeyDown(e => this.onEditorKeyDown(e))), this._register(this._editor.onKeyUp(e => this.onEditorKeyUp(e))), this._register(this._editor.onDidBlurEditorWidget(() => this.onEditorBlur())), this._register(this._editor.onDidBlurEditorText(() => this.onEditorBlur())), (this._dndDecorationIds = []), (this._mouseDown = !1), (this._modifierPressed = !1), (this._dragSelection = null));
    }
    onEditorBlur() {
      (this._removeDecoration(), (this._dragSelection = null), (this._mouseDown = !1), (this._modifierPressed = !1));
    }
    onEditorKeyDown(e) {
      this._editor.getOption(31) && !this._editor.getOption(18) && (h(e) && (this._modifierPressed = !0), this._mouseDown && h(e) && this._editor.updateOptions({
        mouseStyle: "copy"
      }));
    }
    onEditorKeyUp(e) {
      this._editor.getOption(31) && !this._editor.getOption(18) && (h(e) && (this._modifierPressed = !1), this._mouseDown && e.keyCode === u.TRIGGER_KEY_VALUE && this._editor.updateOptions({
        mouseStyle: "default"
      }));
    }
    _onEditorMouseDown(e) {
      this._mouseDown = !0;
    }
    _onEditorMouseUp(e) {
      ((this._mouseDown = !1), this._editor.updateOptions({
        mouseStyle: "text"
      }));
    }
    _onEditorMouseDrag(e) {
      let t = e.target;
      if (null === this._dragSelection) {
        let e = (this._editor.getSelections() || []).filter(e => t.position && e.containsPosition(t.position));
        if (1 !== e.length) return;
        this._dragSelection = e[0];
      }
      (h(e.event) ? this._editor.updateOptions({
        mouseStyle: "copy"
      }) : this._editor.updateOptions({
        mouseStyle: "default"
      }), t.position && (this._dragSelection.containsPosition(t.position) ? this._removeDecoration() : this.showAt(t.position)));
    }
    _onEditorMouseDropCanceled() {
      (this._editor.updateOptions({
        mouseStyle: "text"
      }), this._removeDecoration(), (this._dragSelection = null), (this._mouseDown = !1));
    }
    _onEditorMouseDrop(e) {
      if (e.target && (this._hitContent(e.target) || this._hitMargin(e.target)) && e.target.position) {
        let t = new r.L(e.target.position.lineNumber, e.target.position.column);
        if (null === this._dragSelection) {
          let i = null;
          if (e.event.shiftKey) {
            let e = this._editor.getSelection();
            if (e) {
              const {
                selectionStartLineNumber: n,
                selectionStartColumn: o
              } = e;
              i = [new l.Y(n, o, t.lineNumber, t.column)];
            }
          } else i = (this._editor.getSelections() || []).map(e => e.containsPosition(t) ? new l.Y(t.lineNumber, t.column, t.lineNumber, t.column) : e);
          this._editor.setSelections(i || [], "mouse", 3);
        } else (!this._dragSelection.containsPosition(t) || ((h(e.event) || this._modifierPressed) && (this._dragSelection.getEndPosition().equals(t) || this._dragSelection.getStartPosition().equals(t)))) && (this._editor.pushUndoStop(), this._editor.executeCommand(u.ID, new d(this._dragSelection, t, h(e.event) || this._modifierPressed)), this._editor.pushUndoStop());
      }
      (this._editor.updateOptions({
        mouseStyle: "text"
      }), this._removeDecoration(), (this._dragSelection = null), (this._mouseDown = !1));
    }
    showAt(e) {
      let t = [{
        range: new a.e(e.lineNumber, e.column, e.lineNumber, e.column),
        options: u._DECORATION_OPTIONS
      }];
      ((this._dndDecorationIds = this._editor.deltaDecorations(this._dndDecorationIds, t)), this._editor.revealPosition(e, 1));
    }
    _removeDecoration() {
      this._dndDecorationIds = this._editor.deltaDecorations(this._dndDecorationIds, []);
    }
    _hitContent(e) {
      return 6 === e.type || 7 === e.type;
    }
    _hitMargin(e) {
      return 2 === e.type || 3 === e.type || 4 === e.type;
    }
    dispose() {
      (this._removeDecoration(), (this._dragSelection = null), (this._mouseDown = !1), (this._modifierPressed = !1), super.dispose());
    }
  }
  ((u.ID = "editor.contrib.dragAndDrop"), (u.TRIGGER_KEY_VALUE = o.dz ? 6 : 5), (u._DECORATION_OPTIONS = c.qx.register({
    description: "dnd-target",
    className: "dnd-target"
  })), (0, s._K)(u.ID, u));
};