module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    N: () => n,
    P: () => d
  });
  var n,
    o = i(98401),
    s = i(33181),
    r = i(88784),
    a = i(5795),
    l = i(50187),
    c = i(24314);
  class d {
    static addCursorDown(e, t, i) {
      let n = [],
        o = 0;
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        ((n[o++] = new s.Vi(l.modelState, l.viewState)), (n[o++] = i ? s.Vi.fromModelState(r.o.translateDown(e.cursorConfig, e.model, l.modelState)) : s.Vi.fromViewState(r.o.translateDown(e.cursorConfig, e, l.viewState))));
      }
      return n;
    }
    static addCursorUp(e, t, i) {
      let n = [],
        o = 0;
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        ((n[o++] = new s.Vi(l.modelState, l.viewState)), (n[o++] = i ? s.Vi.fromModelState(r.o.translateUp(e.cursorConfig, e.model, l.modelState)) : s.Vi.fromViewState(r.o.translateUp(e.cursorConfig, e, l.viewState))));
      }
      return n;
    }
    static moveToBeginningOfLine(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o];
        n[o] = this._moveToLineStart(e, s, i);
      }
      return n;
    }
    static _moveToLineStart(e, t, i) {
      const n = t.viewState.position.column,
        o = n === t.modelState.position.column,
        s = t.viewState.position.lineNumber,
        r = e.getLineFirstNonWhitespaceColumn(s);
      return o || n === r ? this._moveToLineStartByModel(e, t, i) : this._moveToLineStartByView(e, t, i);
    }
    static _moveToLineStartByView(e, t, i) {
      return s.Vi.fromViewState(r.o.moveToBeginningOfLine(e.cursorConfig, e, t.viewState, i));
    }
    static _moveToLineStartByModel(e, t, i) {
      return s.Vi.fromModelState(r.o.moveToBeginningOfLine(e.cursorConfig, e.model, t.modelState, i));
    }
    static moveToEndOfLine(e, t, i, n) {
      let o = [];
      for (let s = 0, r = t.length; s < r; s++) {
        const r = t[s];
        o[s] = this._moveToLineEnd(e, r, i, n);
      }
      return o;
    }
    static _moveToLineEnd(e, t, i, n) {
      const o = t.viewState.position,
        s = e.getLineMaxColumn(o.lineNumber),
        r = o.column === s,
        a = t.modelState.position,
        l = e.model.getLineMaxColumn(a.lineNumber),
        c = s - o.column == l - a.column;
      return r || c ? this._moveToLineEndByModel(e, t, i, n) : this._moveToLineEndByView(e, t, i, n);
    }
    static _moveToLineEndByView(e, t, i, n) {
      return s.Vi.fromViewState(r.o.moveToEndOfLine(e.cursorConfig, e, t.viewState, i, n));
    }
    static _moveToLineEndByModel(e, t, i, n) {
      return s.Vi.fromModelState(r.o.moveToEndOfLine(e.cursorConfig, e.model, t.modelState, i, n));
    }
    static expandLineSelection(e, t) {
      let i = [];
      for (let n = 0, o = t.length; n < o; n++) {
        const o = t[n],
          r = o.modelState.selection.startLineNumber,
          a = e.model.getLineCount();
        let d,
          h = o.modelState.selection.endLineNumber;
        (h === a ? (d = e.model.getLineMaxColumn(a)) : (h++, (d = 1)), (i[n] = s.Vi.fromModelState(new s.rS(new c.e(r, 1, r, 1), 0, new l.L(h, d), 0))));
      }
      return i;
    }
    static moveToBeginningOfBuffer(e, t, i) {
      let n = [];
      for (let o = 0, a = t.length; o < a; o++) {
        const a = t[o];
        n[o] = s.Vi.fromModelState(r.o.moveToBeginningOfBuffer(e.cursorConfig, e.model, a.modelState, i));
      }
      return n;
    }
    static moveToEndOfBuffer(e, t, i) {
      let n = [];
      for (let o = 0, a = t.length; o < a; o++) {
        const a = t[o];
        n[o] = s.Vi.fromModelState(r.o.moveToEndOfBuffer(e.cursorConfig, e.model, a.modelState, i));
      }
      return n;
    }
    static selectAll(e, t) {
      const i = e.model.getLineCount(),
        n = e.model.getLineMaxColumn(i);
      return s.Vi.fromModelState(new s.rS(new c.e(1, 1, 1, 1), 0, new l.L(i, n), 0));
    }
    static line(e, t, i, n, o) {
      const r = e.model.validatePosition(n),
        a = o ? e.coordinatesConverter.validateViewPosition(new l.L(o.lineNumber, o.column), r) : e.coordinatesConverter.convertModelPositionToViewPosition(r);
      if (!i || !t.modelState.hasSelection()) {
        const t = e.model.getLineCount();
        let i = r.lineNumber + 1,
          n = 1;
        return (i > t && ((i = t), (n = e.model.getLineMaxColumn(i))), s.Vi.fromModelState(new s.rS(new c.e(r.lineNumber, 1, i, n), 0, new l.L(i, n), 0)));
      }
      const d = t.modelState.selectionStart.getStartPosition().lineNumber;
      if (r.lineNumber < d) return s.Vi.fromViewState(t.viewState.move(t.modelState.hasSelection(), a.lineNumber, 1, 0));
      if (r.lineNumber > d) {
        const i = e.getLineCount();
        let n = a.lineNumber + 1,
          o = 1;
        return (n > i && ((n = i), (o = e.getLineMaxColumn(n))), s.Vi.fromViewState(t.viewState.move(t.modelState.hasSelection(), n, o, 0)));
      }
      {
        const e = t.modelState.selectionStart.getEndPosition();
        return s.Vi.fromModelState(t.modelState.move(t.modelState.hasSelection(), e.lineNumber, e.column, 0));
      }
    }
    static word(e, t, i, n) {
      const o = e.model.validatePosition(n);
      return s.Vi.fromModelState(a.w.word(e.cursorConfig, e.model, t.modelState, i, o));
    }
    static cancelSelection(e, t) {
      if (!t.modelState.hasSelection()) return new s.Vi(t.modelState, t.viewState);
      const i = t.viewState.position.lineNumber,
        n = t.viewState.position.column;
      return s.Vi.fromViewState(new s.rS(new c.e(i, n, i, n), 0, new l.L(i, n), 0));
    }
    static moveTo(e, t, i, n, o) {
      const r = e.model.validatePosition(n),
        a = o ? e.coordinatesConverter.validateViewPosition(new l.L(o.lineNumber, o.column), r) : e.coordinatesConverter.convertModelPositionToViewPosition(r);
      return s.Vi.fromViewState(t.viewState.move(i, a.lineNumber, a.column, 0));
    }
    static simpleMove(e, t, i, n, o, a) {
      switch (i) {
        case 0:
          return 4 === a ? this._moveHalfLineLeft(e, t, n) : this._moveLeft(e, t, n, o);
        case 1:
          return 4 === a ? this._moveHalfLineRight(e, t, n) : this._moveRight(e, t, n, o);
        case 2:
          return 2 === a ? this._moveUpByViewLines(e, t, n, o) : this._moveUpByModelLines(e, t, n, o);
        case 3:
          return 2 === a ? this._moveDownByViewLines(e, t, n, o) : this._moveDownByModelLines(e, t, n, o);
        case 4:
          return 2 === a ? t.map(t => s.Vi.fromViewState(r.o.moveToPrevBlankLine(e.cursorConfig, e, t.viewState, n))) : t.map(t => s.Vi.fromModelState(r.o.moveToPrevBlankLine(e.cursorConfig, e.model, t.modelState, n)));
        case 5:
          return 2 === a ? t.map(t => s.Vi.fromViewState(r.o.moveToNextBlankLine(e.cursorConfig, e, t.viewState, n))) : t.map(t => s.Vi.fromModelState(r.o.moveToNextBlankLine(e.cursorConfig, e.model, t.modelState, n)));
        case 6:
          return this._moveToViewMinColumn(e, t, n);
        case 7:
          return this._moveToViewFirstNonWhitespaceColumn(e, t, n);
        case 8:
          return this._moveToViewCenterColumn(e, t, n);
        case 9:
          return this._moveToViewMaxColumn(e, t, n);
        case 10:
          return this._moveToViewLastNonWhitespaceColumn(e, t, n);
        default:
          return null;
      }
    }
    static viewportMove(e, t, i, n, o) {
      const s = e.getCompletelyVisibleViewRange(),
        r = e.coordinatesConverter.convertViewRangeToModelRange(s);
      switch (i) {
        case 11:
          {
            const i = this._firstLineNumberInRange(e.model, r, o),
              s = e.model.getLineFirstNonWhitespaceColumn(i);
            return [this._moveToModelPosition(e, t[0], n, i, s)];
          }
        case 13:
          {
            const i = this._lastLineNumberInRange(e.model, r, o),
              s = e.model.getLineFirstNonWhitespaceColumn(i);
            return [this._moveToModelPosition(e, t[0], n, i, s)];
          }
        case 12:
          {
            const i = Math.round((r.startLineNumber + r.endLineNumber) / 2),
              o = e.model.getLineFirstNonWhitespaceColumn(i);
            return [this._moveToModelPosition(e, t[0], n, i, o)];
          }
        case 14:
          {
            let i = [];
            for (let o = 0, r = t.length; o < r; o++) {
              const r = t[o];
              i[o] = this.findPositionInViewportIfOutside(e, r, s, n);
            }
            return i;
          }
        default:
          return null;
      }
    }
    static findPositionInViewportIfOutside(e, t, i, n) {
      let o = t.viewState.position.lineNumber;
      if (i.startLineNumber <= o && o <= i.endLineNumber - 1) return new s.Vi(t.modelState, t.viewState);
      {
        let a;
        a = o > i.endLineNumber - 1 ? i.endLineNumber - 1 : o < i.startLineNumber ? i.startLineNumber : o;
        const l = r.o.vertical(e.cursorConfig, e, o, t.viewState.position.column, t.viewState.leftoverVisibleColumns, a, !1);
        return s.Vi.fromViewState(t.viewState.move(n, l.lineNumber, l.column, l.leftoverVisibleColumns));
      }
    }
    static _firstLineNumberInRange(e, t, i) {
      let n = t.startLineNumber;
      return (t.startColumn !== e.getLineMinColumn(n) && n++, Math.min(t.endLineNumber, n + i - 1));
    }
    static _lastLineNumberInRange(e, t, i) {
      let n = t.startLineNumber;
      return (t.startColumn !== e.getLineMinColumn(n) && n++, Math.max(n, t.endLineNumber - i + 1));
    }
    static _moveLeft(e, t, i, n) {
      return t.map(t => s.Vi.fromViewState(r.o.moveLeft(e.cursorConfig, e, t.viewState, i, n)));
    }
    static _moveHalfLineLeft(e, t, i) {
      let n = [];
      for (let o = 0, a = t.length; o < a; o++) {
        const a = t[o],
          l = a.viewState.position.lineNumber,
          c = Math.round(e.getLineContent(l).length / 2);
        n[o] = s.Vi.fromViewState(r.o.moveLeft(e.cursorConfig, e, a.viewState, i, c));
      }
      return n;
    }
    static _moveRight(e, t, i, n) {
      return t.map(t => s.Vi.fromViewState(r.o.moveRight(e.cursorConfig, e, t.viewState, i, n)));
    }
    static _moveHalfLineRight(e, t, i) {
      let n = [];
      for (let o = 0, a = t.length; o < a; o++) {
        const a = t[o],
          l = a.viewState.position.lineNumber,
          c = Math.round(e.getLineContent(l).length / 2);
        n[o] = s.Vi.fromViewState(r.o.moveRight(e.cursorConfig, e, a.viewState, i, c));
      }
      return n;
    }
    static _moveDownByViewLines(e, t, i, n) {
      let o = [];
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        o[a] = s.Vi.fromViewState(r.o.moveDown(e.cursorConfig, e, l.viewState, i, n));
      }
      return o;
    }
    static _moveDownByModelLines(e, t, i, n) {
      let o = [];
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        o[a] = s.Vi.fromModelState(r.o.moveDown(e.cursorConfig, e.model, l.modelState, i, n));
      }
      return o;
    }
    static _moveUpByViewLines(e, t, i, n) {
      let o = [];
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        o[a] = s.Vi.fromViewState(r.o.moveUp(e.cursorConfig, e, l.viewState, i, n));
      }
      return o;
    }
    static _moveUpByModelLines(e, t, i, n) {
      let o = [];
      for (let a = 0, l = t.length; a < l; a++) {
        const l = t[a];
        o[a] = s.Vi.fromModelState(r.o.moveUp(e.cursorConfig, e.model, l.modelState, i, n));
      }
      return o;
    }
    static _moveToViewPosition(e, t, i, n, o) {
      return s.Vi.fromViewState(t.viewState.move(i, n, o, 0));
    }
    static _moveToModelPosition(e, t, i, n, o) {
      return s.Vi.fromModelState(t.modelState.move(i, n, o, 0));
    }
    static _moveToViewMinColumn(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = s.viewState.position.lineNumber,
          a = e.getLineMinColumn(r);
        n[o] = this._moveToViewPosition(e, s, i, r, a);
      }
      return n;
    }
    static _moveToViewFirstNonWhitespaceColumn(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = s.viewState.position.lineNumber,
          a = e.getLineFirstNonWhitespaceColumn(r);
        n[o] = this._moveToViewPosition(e, s, i, r, a);
      }
      return n;
    }
    static _moveToViewCenterColumn(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = s.viewState.position.lineNumber,
          a = Math.round((e.getLineMaxColumn(r) + e.getLineMinColumn(r)) / 2);
        n[o] = this._moveToViewPosition(e, s, i, r, a);
      }
      return n;
    }
    static _moveToViewMaxColumn(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = s.viewState.position.lineNumber,
          a = e.getLineMaxColumn(r);
        n[o] = this._moveToViewPosition(e, s, i, r, a);
      }
      return n;
    }
    static _moveToViewLastNonWhitespaceColumn(e, t, i) {
      let n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = s.viewState.position.lineNumber,
          a = e.getLineLastNonWhitespaceColumn(r);
        n[o] = this._moveToViewPosition(e, s, i, r, a);
      }
      return n;
    }
  }
  !(function (e) {
    ((e.description = {
      description: "Move cursor to a logical position in the view",
      args: [{
        name: "Cursor move argument object",
        description: "Property-value pairs that can be passed through this argument:\n\t\t\t\t\t* 'to': A mandatory logical position value providing where to move the cursor.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'left', 'right', 'up', 'down', 'prevBlankLine', 'nextBlankLine',\n\t\t\t\t\t\t'wrappedLineStart', 'wrappedLineEnd', 'wrappedLineColumnCenter'\n\t\t\t\t\t\t'wrappedLineFirstNonWhitespaceCharacter', 'wrappedLineLastNonWhitespaceCharacter'\n\t\t\t\t\t\t'viewPortTop', 'viewPortCenter', 'viewPortBottom', 'viewPortIfOutside'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'by': Unit to move. Default is computed based on 'to' value.\n\t\t\t\t\t\t```\n\t\t\t\t\t\t'line', 'wrappedLine', 'character', 'halfLine'\n\t\t\t\t\t\t```\n\t\t\t\t\t* 'value': Number of units to move. Default is '1'.\n\t\t\t\t\t* 'select': If 'true' makes the selection. Default is 'false'.\n\t\t\t\t",
        constraint: function (e) {
          if (!o.Kn(e)) return !1;
          let t = e;
          return (!!o.HD(t.to) && !(!o.o8(t.select) && !o.jn(t.select)) && !(!o.o8(t.by) && !o.HD(t.by)) && !(!o.o8(t.value) && !o.hj(t.value)));
        },
        schema: {
          type: "object",
          required: ["to"],
          properties: {
            to: {
              type: "string",
              enum: ["left", "right", "up", "down", "prevBlankLine", "nextBlankLine", "wrappedLineStart", "wrappedLineEnd", "wrappedLineColumnCenter", "wrappedLineFirstNonWhitespaceCharacter", "wrappedLineLastNonWhitespaceCharacter", "viewPortTop", "viewPortCenter", "viewPortBottom", "viewPortIfOutside"]
            },
            by: {
              type: "string",
              enum: ["line", "wrappedLine", "character", "halfLine"]
            },
            value: {
              type: "number",
              default: 1
            },
            select: {
              type: "boolean",
              default: !1
            }
          }
        }
      }]
    }), (e.RawDirection = {
      Left: "left",
      Right: "right",
      Up: "up",
      Down: "down",
      PrevBlankLine: "prevBlankLine",
      NextBlankLine: "nextBlankLine",
      WrappedLineStart: "wrappedLineStart",
      WrappedLineFirstNonWhitespaceCharacter: "wrappedLineFirstNonWhitespaceCharacter",
      WrappedLineColumnCenter: "wrappedLineColumnCenter",
      WrappedLineEnd: "wrappedLineEnd",
      WrappedLineLastNonWhitespaceCharacter: "wrappedLineLastNonWhitespaceCharacter",
      ViewPortTop: "viewPortTop",
      ViewPortCenter: "viewPortCenter",
      ViewPortBottom: "viewPortBottom",
      ViewPortIfOutside: "viewPortIfOutside"
    }), (e.RawUnit = {
      Line: "line",
      WrappedLine: "wrappedLine",
      Character: "character",
      HalfLine: "halfLine"
    }), (e.parse = function (t) {
      if (!t.to) return null;
      let i;
      switch (t.to) {
        case e.RawDirection.Left:
          i = 0;
          break;
        case e.RawDirection.Right:
          i = 1;
          break;
        case e.RawDirection.Up:
          i = 2;
          break;
        case e.RawDirection.Down:
          i = 3;
          break;
        case e.RawDirection.PrevBlankLine:
          i = 4;
          break;
        case e.RawDirection.NextBlankLine:
          i = 5;
          break;
        case e.RawDirection.WrappedLineStart:
          i = 6;
          break;
        case e.RawDirection.WrappedLineFirstNonWhitespaceCharacter:
          i = 7;
          break;
        case e.RawDirection.WrappedLineColumnCenter:
          i = 8;
          break;
        case e.RawDirection.WrappedLineEnd:
          i = 9;
          break;
        case e.RawDirection.WrappedLineLastNonWhitespaceCharacter:
          i = 10;
          break;
        case e.RawDirection.ViewPortTop:
          i = 11;
          break;
        case e.RawDirection.ViewPortBottom:
          i = 13;
          break;
        case e.RawDirection.ViewPortCenter:
          i = 12;
          break;
        case e.RawDirection.ViewPortIfOutside:
          i = 14;
          break;
        default:
          return null;
      }
      let n = 0;
      switch (t.by) {
        case e.RawUnit.Line:
          n = 1;
          break;
        case e.RawUnit.WrappedLine:
          n = 2;
          break;
        case e.RawUnit.Character:
          n = 3;
          break;
        case e.RawUnit.HalfLine:
          n = 4;
      }
      return {
        direction: i,
        unit: n,
        select: !!t.select,
        value: t.value || 1
      };
    }));
  })(n || (n = {}));
};