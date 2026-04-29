module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    OY: () => s,
    Sj: () => r,
    T4: () => o,
    Uo: () => a,
    hP: () => l
  });
  var n = i(3860);
  class o {
    constructor(e, t, i = !1) {
      ((this._range = e), (this._text = t), (this.insertsAutoWhitespace = i));
    }
    getEditOperations(e, t) {
      t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
      let i = t.getInverseEditOperations()[0].range;
      return new n.Y(i.endLineNumber, i.endColumn, i.endLineNumber, i.endColumn);
    }
  }
  class s {
    constructor(e, t) {
      ((this._range = e), (this._text = t));
    }
    getEditOperations(e, t) {
      t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
      const i = t.getInverseEditOperations()[0].range;
      return new n.Y(i.startLineNumber, i.startColumn, i.endLineNumber, i.endColumn);
    }
  }
  class r {
    constructor(e, t, i = !1) {
      ((this._range = e), (this._text = t), (this.insertsAutoWhitespace = i));
    }
    getEditOperations(e, t) {
      t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
      let i = t.getInverseEditOperations()[0].range;
      return new n.Y(i.startLineNumber, i.startColumn, i.startLineNumber, i.startColumn);
    }
  }
  class a {
    constructor(e, t, i, n, o = !1) {
      ((this._range = e), (this._text = t), (this._columnDeltaOffset = n), (this._lineNumberDeltaOffset = i), (this.insertsAutoWhitespace = o));
    }
    getEditOperations(e, t) {
      t.addTrackedEditOperation(this._range, this._text);
    }
    computeCursorState(e, t) {
      let i = t.getInverseEditOperations()[0].range;
      return new n.Y(i.endLineNumber + this._lineNumberDeltaOffset, i.endColumn + this._columnDeltaOffset, i.endLineNumber + this._lineNumberDeltaOffset, i.endColumn + this._columnDeltaOffset);
    }
  }
  class l {
    constructor(e, t, i, n = !1) {
      ((this._range = e), (this._text = t), (this._initialSelection = i), (this._forceMoveMarkers = n), (this._selectionId = null));
    }
    getEditOperations(e, t) {
      (t.addTrackedEditOperation(this._range, this._text, this._forceMoveMarkers), (this._selectionId = t.trackSelection(this._initialSelection)));
    }
    computeCursorState(e, t) {
      return t.getTrackedSelection(this._selectionId);
    }
  }
};