module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Y: () => s
  });
  var n = i(50187),
    o = i(24314);
  class s extends o.e {
    constructor(e, t, i, n) {
      (super(e, t, i, n), (this.selectionStartLineNumber = e), (this.selectionStartColumn = t), (this.positionLineNumber = i), (this.positionColumn = n));
    }
    toString() {
      return ("[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]");
    }
    equalsSelection(e) {
      return s.selectionsEqual(this, e);
    }
    static selectionsEqual(e, t) {
      return (e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn);
    }
    getDirection() {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? 0 : 1;
    }
    setEndPosition(e, t) {
      return 0 === this.getDirection() ? new s(this.startLineNumber, this.startColumn, e, t) : new s(e, t, this.startLineNumber, this.startColumn);
    }
    getPosition() {
      return new n.L(this.positionLineNumber, this.positionColumn);
    }
    setStartPosition(e, t) {
      return 0 === this.getDirection() ? new s(e, t, this.endLineNumber, this.endColumn) : new s(this.endLineNumber, this.endColumn, e, t);
    }
    static fromPositions(e, t = e) {
      return new s(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    static liftSelection(e) {
      return new s(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    }
    static selectionsArrEqual(e, t) {
      if ((e && !t) || (!e && t)) return !1;
      if (!e && !t) return !0;
      if (e.length !== t.length) return !1;
      for (let i = 0, n = e.length; i < n; i++) if (!this.selectionsEqual(e[i], t[i])) return !1;
      return !0;
    }
    static isISelection(e) {
      return (e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn);
    }
    static createWithDirection(e, t, i, n, o) {
      return 0 === o ? new s(e, t, i, n) : new s(i, n, e, t);
    }
  }
};