module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    u: () => p,
    g: () => f
  });
  var n = i(17301),
    o = i(97295),
    s = i(61329),
    r = i(10291),
    a = i(24314),
    l = i(3860);
  class c {
    constructor(e, t, i) {
      ((this._range = e), (this._charBeforeSelection = t), (this._charAfterSelection = i));
    }
    getEditOperations(e, t) {
      (t.addTrackedEditOperation(new a.e(this._range.startLineNumber, this._range.startColumn, this._range.startLineNumber, this._range.startColumn), this._charBeforeSelection), t.addTrackedEditOperation(new a.e(this._range.endLineNumber, this._range.endColumn, this._range.endLineNumber, this._range.endColumn), this._charAfterSelection));
    }
    computeCursorState(e, t) {
      let i = t.getInverseEditOperations(),
        n = i[0].range,
        o = i[1].range;
      return new l.Y(n.endLineNumber, n.endColumn, o.endLineNumber, o.endColumn - this._charAfterSelection.length);
    }
  }
  var d = i(33181),
    h = i(59410),
    u = i(97354),
    g = i(83831);
  class p {
    static indent(e, t, i) {
      if (null === t || null === i) return [];
      let n = [];
      for (let t = 0, o = i.length; t < o; t++) n[t] = new r.U(i[t], {
        isUnshift: !1,
        tabSize: e.tabSize,
        indentSize: e.indentSize,
        insertSpaces: e.insertSpaces,
        useTabStops: e.useTabStops,
        autoIndent: e.autoIndent
      });
      return n;
    }
    static outdent(e, t, i) {
      let n = [];
      for (let t = 0, o = i.length; t < o; t++) n[t] = new r.U(i[t], {
        isUnshift: !0,
        tabSize: e.tabSize,
        indentSize: e.indentSize,
        insertSpaces: e.insertSpaces,
        useTabStops: e.useTabStops,
        autoIndent: e.autoIndent
      });
      return n;
    }
    static shiftIndent(e, t, i) {
      return ((i = i || 1), r.U.shiftIndent(t, t.length + i, e.tabSize, e.indentSize, e.insertSpaces));
    }
    static unshiftIndent(e, t, i) {
      return ((i = i || 1), r.U.unshiftIndent(t, t.length + i, e.tabSize, e.indentSize, e.insertSpaces));
    }
    static _distributedPaste(e, t, i, n) {
      let o = [];
      for (let e = 0, t = i.length; e < t; e++) o[e] = new s.T4(i[e], n[e]);
      return new d.Tp(0, o, {
        shouldPushStackElementBefore: !0,
        shouldPushStackElementAfter: !0
      });
    }
    static _simplePaste(e, t, i, n, o) {
      let r = [];
      for (let e = 0, t = i.length; e < t; e++) {
        const t = i[e];
        let l = t.getPosition();
        if ((o && !t.isEmpty() && (o = !1), o && n.indexOf("\n") !== n.length - 1 && (o = !1), o)) {
          let i = new a.e(l.lineNumber, 1, l.lineNumber, 1);
          r[e] = new s.hP(i, n, t, !0);
        } else r[e] = new s.T4(t, n);
      }
      return new d.Tp(0, r, {
        shouldPushStackElementBefore: !0,
        shouldPushStackElementAfter: !0
      });
    }
    static _distributePasteToCursors(e, t, i, n, s) {
      if (n) return null;
      if (1 === t.length) return null;
      if (s && s.length === t.length) return s;
      if ("spread" === e.multiCursorPaste) {
        (10 === i.charCodeAt(i.length - 1) && (i = i.substr(0, i.length - 1)), 13 === i.charCodeAt(i.length - 1) && (i = i.substr(0, i.length - 1)));
        let e = o.uq(i);
        if (e.length === t.length) return e;
      }
      return null;
    }
    static paste(e, t, i, n, o, s) {
      const r = this._distributePasteToCursors(e, i, n, o, s);
      return r ? ((i = i.sort(a.e.compareRangesUsingStarts)), this._distributedPaste(e, t, i, r)) : this._simplePaste(e, t, i, n, o);
    }
    static _goodIndentForLine(e, t, i) {
      let n = null,
        s = "";
      const r = g.zu.getInheritIndentForLine(e.autoIndent, t, i, !1);
      if (r) ((n = r.action), (s = r.indentation));else if (i > 1) {
        let n;
        for (n = i - 1; n >= 1; n--) {
          const e = t.getLineContent(n);
          if (o.ow(e) >= 0) break;
        }
        if (n < 1) return null;
        const r = t.getLineMaxColumn(n),
          l = g.zu.getEnterAction(e.autoIndent, t, new a.e(n, r, n, r));
        l && (s = l.indentation + l.appendText);
      }
      return (n && (n === u.wU.Indent && (s = p.shiftIndent(e, s)), n === u.wU.Outdent && (s = p.unshiftIndent(e, s)), (s = e.normalizeIndentation(s))), s || null);
    }
    static _replaceJumpToNextIndent(e, t, i, n) {
      let o = "",
        r = i.getStartPosition();
      if (e.insertSpaces) {
        let i = d.io.visibleColumnFromColumn2(e, t, r),
          n = e.indentSize,
          s = n - (i % n);
        for (let e = 0; e < s; e++) o += " ";
      } else o = "\t";
      return new s.T4(i, o, n);
    }
    static tab(e, t, i) {
      let n = [];
      for (let o = 0, l = i.length; o < l; o++) {
        const l = i[o];
        if (l.isEmpty()) {
          let i = t.getLineContent(l.startLineNumber);
          if (/^\s*$/.test(i) && t.isCheapToTokenize(l.startLineNumber)) {
            let r = this._goodIndentForLine(e, t, l.startLineNumber);
            r = r || "\t";
            let c = e.normalizeIndentation(r);
            if (!i.startsWith(c)) {
              n[o] = new s.T4(new a.e(l.startLineNumber, 1, l.startLineNumber, i.length + 1), c, !0);
              continue;
            }
          }
          n[o] = this._replaceJumpToNextIndent(e, t, l, !0);
        } else {
          if (l.startLineNumber === l.endLineNumber) {
            let i = t.getLineMaxColumn(l.startLineNumber);
            if (1 !== l.startColumn || l.endColumn !== i) {
              n[o] = this._replaceJumpToNextIndent(e, t, l, !1);
              continue;
            }
          }
          n[o] = new r.U(l, {
            isUnshift: !1,
            tabSize: e.tabSize,
            indentSize: e.indentSize,
            insertSpaces: e.insertSpaces,
            useTabStops: e.useTabStops,
            autoIndent: e.autoIndent
          });
        }
      }
      return n;
    }
    static compositionType(e, t, i, n, o, s, r, a) {
      const l = n.map(e => this._compositionType(i, e, o, s, r, a));
      return new d.Tp(4, l, {
        shouldPushStackElementBefore: v(e, 4),
        shouldPushStackElementAfter: !1
      });
    }
    static _compositionType(e, t, i, n, o, r) {
      if (!t.isEmpty()) return null;
      const l = t.getPosition(),
        c = Math.max(1, l.column - n),
        d = Math.min(e.getLineMaxColumn(l.lineNumber), l.column + o),
        h = new a.e(l.lineNumber, c, l.lineNumber, d);
      return e.getValueInRange(h) === i && 0 === r ? null : new s.Uo(h, i, 0, r);
    }
    static _typeCommand(e, t, i) {
      return i ? new s.Sj(e, t, !0) : new s.T4(e, t, !0);
    }
    static _enter(e, t, i, n) {
      if (0 === e.autoIndent) return p._typeCommand(n, "\n", i);
      if (!t.isCheapToTokenize(n.getStartPosition().lineNumber) || 1 === e.autoIndent) {
        let s = t.getLineContent(n.startLineNumber),
          r = o.V8(s).substring(0, n.startColumn - 1);
        return p._typeCommand(n, "\n" + e.normalizeIndentation(r), i);
      }
      const r = g.zu.getEnterAction(e.autoIndent, t, n);
      if (r) {
        if (r.indentAction === u.wU.None) return p._typeCommand(n, "\n" + e.normalizeIndentation(r.indentation + r.appendText), i);
        if (r.indentAction === u.wU.Indent) return p._typeCommand(n, "\n" + e.normalizeIndentation(r.indentation + r.appendText), i);
        if (r.indentAction === u.wU.IndentOutdent) {
          const t = e.normalizeIndentation(r.indentation),
            o = e.normalizeIndentation(r.indentation + r.appendText),
            a = "\n" + o + "\n" + t;
          return i ? new s.Sj(n, a, !0) : new s.Uo(n, a, -1, o.length - t.length, !0);
        }
        if (r.indentAction === u.wU.Outdent) {
          const t = p.unshiftIndent(e, r.indentation);
          return p._typeCommand(n, "\n" + e.normalizeIndentation(t + r.appendText), i);
        }
      }
      const a = t.getLineContent(n.startLineNumber),
        l = o.V8(a).substring(0, n.startColumn - 1);
      if (e.autoIndent >= 4) {
        const r = g.zu.getIndentForEnter(e.autoIndent, t, n, {
          unshiftIndent: t => p.unshiftIndent(e, t),
          shiftIndent: t => p.shiftIndent(e, t),
          normalizeIndentation: t => e.normalizeIndentation(t)
        });
        if (r) {
          let a = d.io.visibleColumnFromColumn2(e, t, n.getEndPosition());
          const l = n.endColumn,
            c = t.getLineContent(n.endLineNumber),
            h = o.LC(c);
          if (((n = h >= 0 ? n.setEndPosition(n.endLineNumber, Math.max(n.endColumn, h + 1)) : n.setEndPosition(n.endLineNumber, t.getLineMaxColumn(n.endLineNumber))), i)) return new s.Sj(n, "\n" + e.normalizeIndentation(r.afterEnter), !0);
          {
            let t = 0;
            return (l <= h + 1 && (e.insertSpaces || (a = Math.ceil(a / e.indentSize)), (t = Math.min(a + 1 - e.normalizeIndentation(r.afterEnter).length - 1, 0))), new s.Uo(n, "\n" + e.normalizeIndentation(r.afterEnter), 0, t, !0));
          }
        }
      }
      return p._typeCommand(n, "\n" + e.normalizeIndentation(l), i);
    }
    static _isAutoIndentType(e, t, i) {
      if (e.autoIndent < 4) return !1;
      for (let e = 0, n = i.length; e < n; e++) if (!t.isCheapToTokenize(i[e].getEndPosition().lineNumber)) return !1;
      return !0;
    }
    static _runAutoIndentType(e, t, i, n) {
      const o = g.zu.getIndentationAtPosition(t, i.startLineNumber, i.startColumn),
        s = g.zu.getIndentActionForType(e.autoIndent, t, i, n, {
          shiftIndent: t => p.shiftIndent(e, t),
          unshiftIndent: t => p.unshiftIndent(e, t)
        });
      if (null === s) return null;
      if (s !== e.normalizeIndentation(o)) {
        const o = t.getLineFirstNonWhitespaceColumn(i.startLineNumber);
        return 0 === o ? p._typeCommand(new a.e(i.startLineNumber, 1, i.endLineNumber, i.endColumn), e.normalizeIndentation(s) + n, !1) : p._typeCommand(new a.e(i.startLineNumber, 1, i.endLineNumber, i.endColumn), e.normalizeIndentation(s) + t.getLineContent(i.startLineNumber).substring(o - 1, i.startColumn - 1) + n, !1);
      }
      return null;
    }
    static _isAutoClosingOvertype(e, t, i, n, o) {
      if ("never" === e.autoClosingOvertype) return !1;
      if (!e.autoClosingPairs.autoClosingPairsCloseSingleChar.has(o)) return !1;
      for (let s = 0, r = i.length; s < r; s++) {
        const r = i[s];
        if (!r.isEmpty()) return !1;
        const a = r.getPosition(),
          l = t.getLineContent(a.lineNumber);
        if (l.charAt(a.column - 1) !== o) return !1;
        const c = (0, d.LN)(o);
        if (92 === (a.column > 2 ? l.charCodeAt(a.column - 2) : 0) && c) return !1;
        if ("auto" === e.autoClosingOvertype) {
          let e = !1;
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            if (a.lineNumber === i.startLineNumber && a.column === i.startColumn) {
              e = !0;
              break;
            }
          }
          if (!e) return !1;
        }
      }
      return !0;
    }
    static _runAutoClosingOvertype(e, t, i, n, o) {
      let r = [];
      for (let e = 0, t = n.length; e < t; e++) {
        const t = n[e].getPosition(),
          i = new a.e(t.lineNumber, t.column, t.lineNumber, t.column + 1);
        r[e] = new s.T4(i, o);
      }
      return new d.Tp(4, r, {
        shouldPushStackElementBefore: v(e, 4),
        shouldPushStackElementAfter: !1
      });
    }
    static _isBeforeClosingBrace(e, t) {
      const i = t.charAt(0),
        n = e.autoClosingPairs.autoClosingPairsOpenByStart.get(i) || [],
        o = e.autoClosingPairs.autoClosingPairsCloseByStart.get(i) || [],
        s = n.some(e => t.startsWith(e.open)),
        r = o.some(e => t.startsWith(e.close));
      return !s && r;
    }
    static _findAutoClosingPairOpen(e, t, i, n) {
      const o = e.autoClosingPairs.autoClosingPairsOpenByEnd.get(n);
      if (!o) return null;
      let s = null;
      for (const e of o) if (null === s || e.open.length > s.open.length) {
        let o = !0;
        for (const s of i) {
          if (t.getValueInRange(new a.e(s.lineNumber, s.column - e.open.length + 1, s.lineNumber, s.column)) + n !== e.open) {
            o = !1;
            break;
          }
        }
        o && (s = e);
      }
      return s;
    }
    static _findSubAutoClosingPairClose(e, t) {
      if (t.open.length <= 1) return "";
      const i = t.close.charAt(t.close.length - 1),
        n = e.autoClosingPairs.autoClosingPairsCloseByEnd.get(i) || [];
      let o = null;
      for (const e of n) e.open !== t.open && t.open.includes(e.open) && t.close.endsWith(e.close) && (!o || e.open.length > o.open.length) && (o = e);
      return o ? o.close : "";
    }
    static _getAutoClosingPairClose(e, t, i, o, s) {
      const r = (0, d.LN)(o),
        a = r ? e.autoClosingQuotes : e.autoClosingBrackets;
      if ("never" === a) return null;
      const l = this._findAutoClosingPairOpen(e, t, i.map(e => e.getPosition()), o);
      if (!l) return null;
      const c = this._findSubAutoClosingPairClose(e, l);
      let u = !0;
      const f = r ? e.shouldAutoCloseBefore.quote : e.shouldAutoCloseBefore.bracket;
      for (let r = 0, d = i.length; r < d; r++) {
        const d = i[r];
        if (!d.isEmpty()) return null;
        const m = d.getPosition(),
          v = t.getLineContent(m.lineNumber),
          _ = v.substring(m.column - 1);
        if ((_.startsWith(c) || (u = !1), v.length > m.column - 1)) {
          const t = v.charAt(m.column - 1);
          if (!p._isBeforeClosingBrace(e, _) && !f(t)) return null;
        }
        if (!t.isCheapToTokenize(m.lineNumber)) return null;
        if (1 === l.open.length && ("'" === o || '"' === o) && "always" !== a) {
          const t = (0, h.u)(e.wordSeparators);
          if (s && m.column > 1 && 0 === t.get(v.charCodeAt(m.column - 2))) return null;
          if (!s && m.column > 2 && 0 === t.get(v.charCodeAt(m.column - 3))) return null;
        }
        t.forceTokenization(m.lineNumber);
        const b = t.getLineTokens(m.lineNumber);
        let w = !1;
        try {
          w = g.zu.shouldAutoClosePair(l, b, s ? m.column : m.column - 1);
        } catch (e) {
          (0, n.dL)(e);
        }
        if (!w) return null;
      }
      return u ? l.close.substring(0, l.close.length - c.length) : l.close;
    }
    static _runAutoClosingOpenCharType(e, t, i, n, o, s, r) {
      let a = [];
      for (let e = 0, t = n.length; e < t; e++) {
        const t = n[e];
        a[e] = new f(t, o, s, r);
      }
      return new d.Tp(4, a, {
        shouldPushStackElementBefore: !0,
        shouldPushStackElementAfter: !1
      });
    }
    static _shouldSurroundChar(e, t) {
      return (0, d.LN)(t) ? "quotes" === e.autoSurround || "languageDefined" === e.autoSurround : "brackets" === e.autoSurround || "languageDefined" === e.autoSurround;
    }
    static _isSurroundSelectionType(e, t, i, n) {
      if (!p._shouldSurroundChar(e, n) || !e.surroundingPairs.hasOwnProperty(n)) return !1;
      const o = (0, d.LN)(n);
      for (let e = 0, n = i.length; e < n; e++) {
        const n = i[e];
        if (n.isEmpty()) return !1;
        let s = !0;
        for (let e = n.startLineNumber; e <= n.endLineNumber; e++) {
          const i = t.getLineContent(e),
            o = e === n.startLineNumber ? n.startColumn - 1 : 0,
            r = e === n.endLineNumber ? n.endColumn - 1 : i.length,
            a = i.substring(o, r);
          if (/[^ \t]/.test(a)) {
            s = !1;
            break;
          }
        }
        if (s) return !1;
        if (o && n.startLineNumber === n.endLineNumber && n.startColumn + 1 === n.endColumn) {
          const e = t.getValueInRange(n);
          if ((0, d.LN)(e)) return !1;
        }
      }
      return !0;
    }
    static _runSurroundSelectionType(e, t, i, n, o) {
      let s = [];
      for (let e = 0, i = n.length; e < i; e++) {
        const i = n[e],
          r = t.surroundingPairs[o];
        s[e] = new c(i, o, r);
      }
      return new d.Tp(0, s, {
        shouldPushStackElementBefore: !0,
        shouldPushStackElementAfter: !0
      });
    }
    static _isTypeInterceptorElectricChar(e, t, i) {
      return !(1 !== i.length || !t.isCheapToTokenize(i[0].getEndPosition().lineNumber));
    }
    static _typeInterceptorElectricChar(e, t, i, r, l) {
      if (!t.electricChars.hasOwnProperty(l) || !r.isEmpty()) return null;
      let c = r.getPosition();
      i.forceTokenization(c.lineNumber);
      let h,
        u = i.getLineTokens(c.lineNumber);
      try {
        h = g.zu.onElectricCharacter(l, u, c.column);
      } catch (e) {
        return ((0, n.dL)(e), null);
      }
      if (!h) return null;
      if (h.matchOpenBracket) {
        let n = (u.getLineContent() + l).lastIndexOf(h.matchOpenBracket) + 1,
          r = i.findMatchingBracketUp(h.matchOpenBracket, {
            lineNumber: c.lineNumber,
            column: n
          });
        if (r) {
          if (r.startLineNumber === c.lineNumber) return null;
          let n = i.getLineContent(r.startLineNumber),
            h = o.V8(n),
            u = t.normalizeIndentation(h),
            g = i.getLineContent(c.lineNumber),
            p = i.getLineFirstNonWhitespaceColumn(c.lineNumber) || c.column,
            f = u + g.substring(p - 1, c.column - 1) + l,
            v = new a.e(c.lineNumber, 1, c.lineNumber, c.column);
          const _ = new s.T4(v, f);
          return new d.Tp(m(f, e), [_], {
            shouldPushStackElementBefore: !1,
            shouldPushStackElementAfter: !0
          });
        }
      }
      return null;
    }
    static compositionEndWithInterceptors(e, t, i, n, o, r) {
      if (!n || l.Y.selectionsArrEqual(n, o)) return null;
      let c = null;
      for (const e of o) {
        if (!e.isEmpty()) return null;
        const t = e.getPosition(),
          n = i.getValueInRange(new a.e(t.lineNumber, t.column - 1, t.lineNumber, t.column));
        if (null === c) c = n;else if (c !== n) return null;
      }
      if (!c) return null;
      if (this._isAutoClosingOvertype(t, i, o, r, c)) {
        const e = o.map(e => new s.T4(new a.e(e.positionLineNumber, e.positionColumn, e.positionLineNumber, e.positionColumn + 1), "", !1));
        return new d.Tp(4, e, {
          shouldPushStackElementBefore: !0,
          shouldPushStackElementAfter: !1
        });
      }
      const h = this._getAutoClosingPairClose(t, i, o, c, !1);
      return null !== h ? this._runAutoClosingOpenCharType(e, t, i, o, c, !1, h) : null;
    }
    static typeWithInterceptors(e, t, i, n, o, r, a) {
      if (!e && "\n" === a) {
        let e = [];
        for (let t = 0, s = o.length; t < s; t++) e[t] = p._enter(i, n, !1, o[t]);
        return new d.Tp(4, e, {
          shouldPushStackElementBefore: !0,
          shouldPushStackElementAfter: !1
        });
      }
      if (!e && this._isAutoIndentType(i, n, o)) {
        let e = [],
          t = !1;
        for (let s = 0, r = o.length; s < r; s++) if (((e[s] = this._runAutoIndentType(i, n, o[s], a)), !e[s])) {
          t = !0;
          break;
        }
        if (!t) return new d.Tp(4, e, {
          shouldPushStackElementBefore: !0,
          shouldPushStackElementAfter: !1
        });
      }
      if (!e && this._isAutoClosingOvertype(i, n, o, r, a)) return this._runAutoClosingOvertype(t, i, n, o, a);
      if (!e) {
        const e = this._getAutoClosingPairClose(i, n, o, a, !0);
        if (e) return this._runAutoClosingOpenCharType(t, i, n, o, a, !0, e);
      }
      if (this._isSurroundSelectionType(i, n, o, a)) return this._runSurroundSelectionType(t, i, n, o, a);
      if (!e && this._isTypeInterceptorElectricChar(i, n, o)) {
        const e = this._typeInterceptorElectricChar(t, i, n, o[0], a);
        if (e) return e;
      }
      let l = [];
      for (let e = 0, t = o.length; e < t; e++) l[e] = new s.T4(o[e], a);
      const c = m(a, t);
      return new d.Tp(c, l, {
        shouldPushStackElementBefore: v(t, c),
        shouldPushStackElementAfter: !1
      });
    }
    static typeWithoutInterceptors(e, t, i, n, o) {
      let r = [];
      for (let e = 0, t = n.length; e < t; e++) r[e] = new s.T4(n[e], o);
      const a = m(o, e);
      return new d.Tp(a, r, {
        shouldPushStackElementBefore: v(e, a),
        shouldPushStackElementAfter: !1
      });
    }
    static lineInsertBefore(e, t, i) {
      if (null === t || null === i) return [];
      let n = [];
      for (let o = 0, r = i.length; o < r; o++) {
        let r = i[o].positionLineNumber;
        if (1 === r) n[o] = new s.Sj(new a.e(1, 1, 1, 1), "\n");else {
          r--;
          let i = t.getLineMaxColumn(r);
          n[o] = this._enter(e, t, !1, new a.e(r, i, r, i));
        }
      }
      return n;
    }
    static lineInsertAfter(e, t, i) {
      if (null === t || null === i) return [];
      let n = [];
      for (let o = 0, s = i.length; o < s; o++) {
        const s = i[o].positionLineNumber;
        let r = t.getLineMaxColumn(s);
        n[o] = this._enter(e, t, !1, new a.e(s, r, s, r));
      }
      return n;
    }
    static lineBreakInsert(e, t, i) {
      let n = [];
      for (let o = 0, s = i.length; o < s; o++) n[o] = this._enter(e, t, !0, i[o]);
      return n;
    }
  }
  class f extends s.Uo {
    constructor(e, t, i, n) {
      (super(e, (i ? t : "") + n, 0, -n.length), (this._openCharacter = t), (this._closeCharacter = n), (this.closeCharacterRange = null), (this.enclosingRange = null));
    }
    computeCursorState(e, t) {
      let i = t.getInverseEditOperations()[0].range;
      return ((this.closeCharacterRange = new a.e(i.startLineNumber, i.endColumn - this._closeCharacter.length, i.endLineNumber, i.endColumn)), (this.enclosingRange = new a.e(i.startLineNumber, i.endColumn - this._openCharacter.length - this._closeCharacter.length, i.endLineNumber, i.endColumn)), super.computeCursorState(e, t));
    }
  }
  function m(e, t) {
    return " " === e ? (5 === t || 6 === t ? 6 : 5) : 4;
  }
  function v(e, t) {
    return !(!b(e) || b(t)) || (5 !== e && _(e) !== _(t));
  }
  function _(e) {
    return 6 === e || 5 === e ? "space" : e;
  }
  function b(e) {
    return 4 === e || 5 === e || 6 === e;
  }
};