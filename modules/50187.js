module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    L: () => n
  });
  class n {
    constructor(e, t) {
      ((this.lineNumber = e), (this.column = t));
    }
    with(e = this.lineNumber, t = this.column) {
      return e === this.lineNumber && t === this.column ? this : new n(e, t);
    }
    delta(e = 0, t = 0) {
      return this.with(this.lineNumber + e, this.column + t);
    }
    equals(e) {
      return n.equals(this, e);
    }
    static equals(e, t) {
      return ((!e && !t) || (!!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column));
    }
    isBefore(e) {
      return n.isBefore(this, e);
    }
    static isBefore(e, t) {
      return (e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column < t.column));
    }
    isBeforeOrEqual(e) {
      return n.isBeforeOrEqual(this, e);
    }
    static isBeforeOrEqual(e, t) {
      return (e.lineNumber < t.lineNumber || (!(t.lineNumber < e.lineNumber) && e.column <= t.column));
    }
    static compare(e, t) {
      let i = 0 | e.lineNumber,
        n = 0 | t.lineNumber;
      if (i === n) {
        return (0 | e.column) - (0 | t.column);
      }
      return i - n;
    }
    clone() {
      return new n(this.lineNumber, this.column);
    }
    toString() {
      return "(" + this.lineNumber + "," + this.column + ")";
    }
    static lift(e) {
      return new n(e.lineNumber, e.column);
    }
    static isIPosition(e) {
      return (e && "number" == typeof e.lineNumber && "number" == typeof e.column);
    }
  }
};