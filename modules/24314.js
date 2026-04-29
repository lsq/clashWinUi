module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    e: () => o
  });
  var n = i(50187);
  class o {
    constructor(e, t, i, n) {
      e > i || (e === i && t > n) ? ((this.startLineNumber = i), (this.startColumn = n), (this.endLineNumber = e), (this.endColumn = t)) : ((this.startLineNumber = e), (this.startColumn = t), (this.endLineNumber = i), (this.endColumn = n));
    }
    isEmpty() {
      return o.isEmpty(this);
    }
    static isEmpty(e) {
      return (e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn);
    }
    containsPosition(e) {
      return o.containsPosition(this, e);
    }
    static containsPosition(e, t) {
      return (!(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && !(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn));
    }
    containsRange(e) {
      return o.containsRange(this, e);
    }
    static containsRange(e, t) {
      return (!(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn));
    }
    strictContainsRange(e) {
      return o.strictContainsRange(this, e);
    }
    static strictContainsRange(e, t) {
      return (!(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && !(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && !(t.startLineNumber === e.startLineNumber && t.startColumn <= e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn >= e.endColumn));
    }
    plusRange(e) {
      return o.plusRange(this, e);
    }
    static plusRange(e, t) {
      let i, n, s, r;
      return (t.startLineNumber < e.startLineNumber ? ((i = t.startLineNumber), (n = t.startColumn)) : t.startLineNumber === e.startLineNumber ? ((i = t.startLineNumber), (n = Math.min(t.startColumn, e.startColumn))) : ((i = e.startLineNumber), (n = e.startColumn)), t.endLineNumber > e.endLineNumber ? ((s = t.endLineNumber), (r = t.endColumn)) : t.endLineNumber === e.endLineNumber ? ((s = t.endLineNumber), (r = Math.max(t.endColumn, e.endColumn))) : ((s = e.endLineNumber), (r = e.endColumn)), new o(i, n, s, r));
    }
    intersectRanges(e) {
      return o.intersectRanges(this, e);
    }
    static intersectRanges(e, t) {
      let i = e.startLineNumber,
        n = e.startColumn,
        s = e.endLineNumber,
        r = e.endColumn,
        a = t.startLineNumber,
        l = t.startColumn,
        c = t.endLineNumber,
        d = t.endColumn;
      return (i < a ? ((i = a), (n = l)) : i === a && (n = Math.max(n, l)), s > c ? ((s = c), (r = d)) : s === c && (r = Math.min(r, d)), i > s || (i === s && n > r) ? null : new o(i, n, s, r));
    }
    equalsRange(e) {
      return o.equalsRange(this, e);
    }
    static equalsRange(e, t) {
      return (!!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn);
    }
    getEndPosition() {
      return o.getEndPosition(this);
    }
    static getEndPosition(e) {
      return new n.L(e.endLineNumber, e.endColumn);
    }
    getStartPosition() {
      return o.getStartPosition(this);
    }
    static getStartPosition(e) {
      return new n.L(e.startLineNumber, e.startColumn);
    }
    toString() {
      return ("[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]");
    }
    setEndPosition(e, t) {
      return new o(this.startLineNumber, this.startColumn, e, t);
    }
    setStartPosition(e, t) {
      return new o(e, t, this.endLineNumber, this.endColumn);
    }
    collapseToStart() {
      return o.collapseToStart(this);
    }
    static collapseToStart(e) {
      return new o(e.startLineNumber, e.startColumn, e.startLineNumber, e.startColumn);
    }
    static fromPositions(e, t = e) {
      return new o(e.lineNumber, e.column, t.lineNumber, t.column);
    }
    static lift(e) {
      return e ? new o(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn) : null;
    }
    static isIRange(e) {
      return (e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn);
    }
    static areIntersectingOrTouching(e, t) {
      return (!(e.endLineNumber < t.startLineNumber || (e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn)) && !(t.endLineNumber < e.startLineNumber || (t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn)));
    }
    static areIntersecting(e, t) {
      return (!(e.endLineNumber < t.startLineNumber || (e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn)) && !(t.endLineNumber < e.startLineNumber || (t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn)));
    }
    static compareRangesUsingStarts(e, t) {
      if (e && t) {
        const i = 0 | e.startLineNumber,
          n = 0 | t.startLineNumber;
        if (i === n) {
          const i = 0 | e.startColumn,
            n = 0 | t.startColumn;
          if (i === n) {
            const i = 0 | e.endLineNumber,
              n = 0 | t.endLineNumber;
            if (i === n) {
              return (0 | e.endColumn) - (0 | t.endColumn);
            }
            return i - n;
          }
          return i - n;
        }
        return i - n;
      }
      return (e ? 1 : 0) - (t ? 1 : 0);
    }
    static compareRangesUsingEnds(e, t) {
      return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }
    static spansMultipleLines(e) {
      return e.endLineNumber > e.startLineNumber;
    }
  }
};