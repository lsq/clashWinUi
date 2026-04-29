module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    al: () => r,
    ee: () => l,
    un: () => a
  });
  var n = i(97295),
    o = i(50187),
    s = i(24314);
  const r = !1;
  class a {
    constructor(e, t, i, n, o) {
      ((this.value = e), (this.selectionStart = t), (this.selectionEnd = i), (this.selectionStartPosition = n), (this.selectionEndPosition = o));
    }
    toString() {
      return ("[ <" + this.value + ">, selectionStart: " + this.selectionStart + ", selectionEnd: " + this.selectionEnd + "]");
    }
    static readFromTextArea(e) {
      return new a(e.getValue(), e.getSelectionStart(), e.getSelectionEnd(), null, null);
    }
    collapseSelection() {
      return new a(this.value, this.value.length, this.value.length, null, null);
    }
    writeToTextArea(e, t, i) {
      (r && console.log("writeToTextArea " + e + ": " + this.toString()), t.setValue(e, this.value), i && t.setSelectionRange(e, this.selectionStart, this.selectionEnd));
    }
    deduceEditorPosition(e) {
      if (e <= this.selectionStart) {
        const t = this.value.substring(e, this.selectionStart);
        return this._finishDeduceEditorPosition(this.selectionStartPosition, t, -1);
      }
      if (e >= this.selectionEnd) {
        const t = this.value.substring(this.selectionEnd, e);
        return this._finishDeduceEditorPosition(this.selectionEndPosition, t, 1);
      }
      const t = this.value.substring(this.selectionStart, e);
      if (-1 === t.indexOf(String.fromCharCode(8230))) return this._finishDeduceEditorPosition(this.selectionStartPosition, t, 1);
      const i = this.value.substring(e, this.selectionEnd);
      return this._finishDeduceEditorPosition(this.selectionEndPosition, i, -1);
    }
    _finishDeduceEditorPosition(e, t, i) {
      let n = 0,
        o = -1;
      for (; -1 !== (o = t.indexOf("\n", o + 1));) n++;
      return [e, i * t.length, n];
    }
    static selectedText(e) {
      return new a(e, 0, e.length, null, null);
    }
    static deduceInput(e, t, i) {
      if (!e) return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
      r && (console.log("------------------------deduceInput"), console.log("PREVIOUS STATE: " + e.toString()), console.log("CURRENT STATE: " + t.toString()));
      let o = e.value,
        s = e.selectionStart,
        a = e.selectionEnd,
        l = t.value,
        c = t.selectionStart,
        d = t.selectionEnd;
      const h = o.substring(a),
        u = l.substring(d),
        g = n.P1(h, u);
      ((l = l.substring(0, l.length - g)), (o = o.substring(0, o.length - g)));
      const p = o.substring(0, s),
        f = l.substring(0, c),
        m = n.Mh(p, f);
      if (((l = l.substring(m)), (o = o.substring(m)), (c -= m), (s -= m), (d -= m), (a -= m), r && (console.log("AFTER DIFFING PREVIOUS STATE: <" + o + ">, selectionStart: " + s + ", selectionEnd: " + a), console.log("AFTER DIFFING CURRENT STATE: <" + l + ">, selectionStart: " + c + ", selectionEnd: " + d)), i && c === d && o.length > 0)) {
        let e = null;
        if ((c === l.length ? l.startsWith(o) && (e = l.substring(o.length)) : l.endsWith(o) && (e = l.substring(0, l.length - o.length)), null !== e && e.length > 0 && (/\uFE0F/.test(e) || n.RP(e)))) return {
          text: e,
          replacePrevCharCnt: 0,
          replaceNextCharCnt: 0,
          positionDelta: 0
        };
      }
      if (c === d) {
        if (o === l && 0 === s && a === o.length && c === l.length && -1 === l.indexOf("\n") && n.xe(l)) return {
          text: "",
          replacePrevCharCnt: 0,
          replaceNextCharCnt: 0,
          positionDelta: 0
        };
        const e = p.length - m;
        return (r && console.log("REMOVE PREVIOUS: " + (p.length - m) + " chars"), {
          text: l,
          replacePrevCharCnt: e,
          replaceNextCharCnt: 0,
          positionDelta: 0
        });
      }
      return {
        text: l,
        replacePrevCharCnt: a - s,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
    }
    static deduceAndroidCompositionInput(e, t) {
      if (!e) return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: 0
      };
      if ((r && (console.log("------------------------deduceAndroidCompositionInput"), console.log("PREVIOUS STATE: " + e.toString()), console.log("CURRENT STATE: " + t.toString())), e.value === t.value)) return {
        text: "",
        replacePrevCharCnt: 0,
        replaceNextCharCnt: 0,
        positionDelta: t.selectionEnd - e.selectionEnd
      };
      const i = Math.min(n.Mh(e.value, t.value), e.selectionEnd),
        o = Math.min(n.P1(e.value, t.value), e.value.length - e.selectionEnd),
        s = e.value.substring(i, e.value.length - o),
        a = t.value.substring(i, t.value.length - o),
        l = e.selectionStart - i,
        c = e.selectionEnd - i,
        d = t.selectionStart - i,
        h = t.selectionEnd - i;
      return (r && (console.log("AFTER DIFFING PREVIOUS STATE: <" + s + ">, selectionStart: " + l + ", selectionEnd: " + c), console.log("AFTER DIFFING CURRENT STATE: <" + a + ">, selectionStart: " + d + ", selectionEnd: " + h)), {
        text: a,
        replacePrevCharCnt: c,
        replaceNextCharCnt: s.length - c,
        positionDelta: h - a.length
      });
    }
  }
  a.EMPTY = new a("", 0, 0, null, null);
  class l {
    static _getPageOfLine(e, t) {
      return Math.floor((e - 1) / t);
    }
    static _getRangeForPage(e, t) {
      const i = e * t,
        n = i + 1,
        o = i + t;
      return new s.e(n, 1, o + 1, 1);
    }
    static fromEditorSelection(e, t, i, n, r) {
      const c = l._getPageOfLine(i.startLineNumber, n),
        d = l._getRangeForPage(c, n),
        h = l._getPageOfLine(i.endLineNumber, n),
        u = l._getRangeForPage(h, n),
        g = d.intersectRanges(new s.e(1, 1, i.startLineNumber, i.startColumn));
      let p = t.getValueInRange(g, 1);
      const f = t.getLineCount(),
        m = t.getLineMaxColumn(f),
        v = u.intersectRanges(new s.e(i.endLineNumber, i.endColumn, f, m));
      let _,
        b = t.getValueInRange(v, 1);
      if (c === h || c + 1 === h) _ = t.getValueInRange(i, 1);else {
        const e = d.intersectRanges(i),
          n = u.intersectRanges(i);
        _ = t.getValueInRange(e, 1) + String.fromCharCode(8230) + t.getValueInRange(n, 1);
      }
      if (r) {
        const e = 500;
        (p.length > e && (p = p.substring(p.length - e, p.length)), b.length > e && (b = b.substring(0, e)), _.length > 2 * e && (_ = _.substring(0, e) + String.fromCharCode(8230) + _.substring(_.length - e, _.length)));
      }
      return new a(p + _ + b, p.length, p.length + _.length, new o.L(i.startLineNumber, i.startColumn), new o.L(i.endLineNumber, i.endColumn));
    }
  }
};