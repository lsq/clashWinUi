module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    yN: () => h
  });
  var n = i(4669),
    o = i(5976),
    s = i(1432);
  function r(e, t) {
    return !!e[t];
  }
  class a {
    constructor(e, t) {
      ((this.target = e.target), (this.hasTriggerModifier = r(e.event, t.triggerModifier)), (this.hasSideBySideModifier = r(e.event, t.triggerSideBySideModifier)), (this.isNoneOrSingleMouseDown = e.event.detail <= 1));
    }
  }
  class l {
    constructor(e, t) {
      ((this.keyCodeIsTriggerKey = e.keyCode === t.triggerKey), (this.keyCodeIsSideBySideKey = e.keyCode === t.triggerSideBySideKey), (this.hasTriggerModifier = r(e, t.triggerModifier)));
    }
  }
  class c {
    constructor(e, t, i, n) {
      ((this.triggerKey = e), (this.triggerModifier = t), (this.triggerSideBySideKey = i), (this.triggerSideBySideModifier = n));
    }
    equals(e) {
      return (this.triggerKey === e.triggerKey && this.triggerModifier === e.triggerModifier && this.triggerSideBySideKey === e.triggerSideBySideKey && this.triggerSideBySideModifier === e.triggerSideBySideModifier);
    }
  }
  function d(e) {
    return "altKey" === e ? s.dz ? new c(57, "metaKey", 6, "altKey") : new c(5, "ctrlKey", 6, "altKey") : s.dz ? new c(6, "altKey", 57, "metaKey") : new c(6, "altKey", 5, "ctrlKey");
  }
  class h extends o.JT {
    constructor(e) {
      (super(), (this._onMouseMoveOrRelevantKeyDown = this._register(new n.Q5())), (this.onMouseMoveOrRelevantKeyDown = this._onMouseMoveOrRelevantKeyDown.event), (this._onExecute = this._register(new n.Q5())), (this.onExecute = this._onExecute.event), (this._onCancel = this._register(new n.Q5())), (this.onCancel = this._onCancel.event), (this._editor = e), (this._opts = d(this._editor.getOption(69))), (this._lastMouseMoveEvent = null), (this._hasTriggerKeyOnMouseDown = !1), (this._lineNumberOnMouseDown = 0), this._register(this._editor.onDidChangeConfiguration(e => {
        if (e.hasChanged(69)) {
          const e = d(this._editor.getOption(69));
          if (this._opts.equals(e)) return;
          ((this._opts = e), (this._lastMouseMoveEvent = null), (this._hasTriggerKeyOnMouseDown = !1), (this._lineNumberOnMouseDown = 0), this._onCancel.fire());
        }
      })), this._register(this._editor.onMouseMove(e => this._onEditorMouseMove(new a(e, this._opts)))), this._register(this._editor.onMouseDown(e => this._onEditorMouseDown(new a(e, this._opts)))), this._register(this._editor.onMouseUp(e => this._onEditorMouseUp(new a(e, this._opts)))), this._register(this._editor.onKeyDown(e => this._onEditorKeyDown(new l(e, this._opts)))), this._register(this._editor.onKeyUp(e => this._onEditorKeyUp(new l(e, this._opts)))), this._register(this._editor.onMouseDrag(() => this._resetHandler())), this._register(this._editor.onDidChangeCursorSelection(e => this._onDidChangeCursorSelection(e))), this._register(this._editor.onDidChangeModel(e => this._resetHandler())), this._register(this._editor.onDidChangeModelContent(() => this._resetHandler())), this._register(this._editor.onDidScrollChange(e => {
        (e.scrollTopChanged || e.scrollLeftChanged) && this._resetHandler();
      })));
    }
    _onDidChangeCursorSelection(e) {
      e.selection && e.selection.startColumn !== e.selection.endColumn && this._resetHandler();
    }
    _onEditorMouseMove(e) {
      ((this._lastMouseMoveEvent = e), this._onMouseMoveOrRelevantKeyDown.fire([e, null]));
    }
    _onEditorMouseDown(e) {
      ((this._hasTriggerKeyOnMouseDown = e.hasTriggerModifier), (this._lineNumberOnMouseDown = e.target.position ? e.target.position.lineNumber : 0));
    }
    _onEditorMouseUp(e) {
      const t = e.target.position ? e.target.position.lineNumber : 0;
      this._hasTriggerKeyOnMouseDown && this._lineNumberOnMouseDown && this._lineNumberOnMouseDown === t && this._onExecute.fire(e);
    }
    _onEditorKeyDown(e) {
      this._lastMouseMoveEvent && (e.keyCodeIsTriggerKey || (e.keyCodeIsSideBySideKey && e.hasTriggerModifier)) ? this._onMouseMoveOrRelevantKeyDown.fire([this._lastMouseMoveEvent, e]) : e.hasTriggerModifier && this._onCancel.fire();
    }
    _onEditorKeyUp(e) {
      e.keyCodeIsTriggerKey && this._onCancel.fire();
    }
    _resetHandler() {
      ((this._lastMouseMoveEvent = null), (this._hasTriggerKeyOnMouseDown = !1), this._onCancel.fire());
    }
  }
};