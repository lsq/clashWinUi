module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    b: () => a,
    q: () => r
  });
  var n = i(53060),
    o = i(50072);
  function s(e) {
    return e.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
  }
  class r {
    constructor(e, t, i, n) {
      ((this.oldPosition = e), (this.oldText = t), (this.newPosition = i), (this.newText = n));
    }
    get oldLength() {
      return this.oldText.length;
    }
    get oldEnd() {
      return this.oldPosition + this.oldText.length;
    }
    get newLength() {
      return this.newText.length;
    }
    get newEnd() {
      return this.newPosition + this.newText.length;
    }
    toString() {
      return 0 === this.oldText.length ? `(insert@${this.oldPosition} "${s(this.newText)}")` : 0 === this.newText.length ? `(delete@${this.oldPosition} "${s(this.oldText)}")` : `(replace@${this.oldPosition} "${s(this.oldText)}" with "${s(this.newText)}")`;
    }
    static _writeStringSize(e) {
      return 4 + 2 * e.length;
    }
    static _writeString(e, t, i) {
      const o = t.length;
      (n.T4(e, o, i), (i += 4));
      for (let s = 0; s < o; s++) (n.oq(e, t.charCodeAt(s), i), (i += 2));
      return i;
    }
    static _readString(e, t) {
      const i = n.Ag(e, t);
      return ((t += 4), (0, o.kH)(e, t, i));
    }
    writeSize() {
      return (8 + r._writeStringSize(this.oldText) + r._writeStringSize(this.newText));
    }
    write(e, t) {
      return (n.T4(e, this.oldPosition, t), (t += 4), n.T4(e, this.newPosition, t), (t += 4), (t = r._writeString(e, this.oldText, t)), (t = r._writeString(e, this.newText, t)));
    }
    static read(e, t, i) {
      const o = n.Ag(e, t);
      t += 4;
      const s = n.Ag(e, t);
      t += 4;
      const a = r._readString(e, t);
      t += r._writeStringSize(a);
      const l = r._readString(e, t);
      return ((t += r._writeStringSize(l)), i.push(new r(o, a, s, l)), t);
    }
  }
  function a(e, t) {
    if (null === e || 0 === e.length) return t;
    return new l(e, t).compress();
  }
  class l {
    constructor(e, t) {
      ((this._prevEdits = e), (this._currEdits = t), (this._result = []), (this._resultLen = 0), (this._prevLen = this._prevEdits.length), (this._prevDeltaOffset = 0), (this._currLen = this._currEdits.length), (this._currDeltaOffset = 0));
    }
    compress() {
      let e = 0,
        t = 0,
        i = this._getPrev(e),
        n = this._getCurr(t);
      for (; e < this._prevLen || t < this._currLen;) {
        if (null === i) {
          (this._acceptCurr(n), (n = this._getCurr(++t)));
          continue;
        }
        if (null === n) {
          (this._acceptPrev(i), (i = this._getPrev(++e)));
          continue;
        }
        if (n.oldEnd <= i.newPosition) {
          (this._acceptCurr(n), (n = this._getCurr(++t)));
          continue;
        }
        if (i.newEnd <= n.oldPosition) {
          (this._acceptPrev(i), (i = this._getPrev(++e)));
          continue;
        }
        if (n.oldPosition < i.newPosition) {
          const [e, t] = l._splitCurr(n, i.newPosition - n.oldPosition);
          (this._acceptCurr(e), (n = t));
          continue;
        }
        if (i.newPosition < n.oldPosition) {
          const [e, t] = l._splitPrev(i, n.oldPosition - i.newPosition);
          (this._acceptPrev(e), (i = t));
          continue;
        }
        let o, s;
        if (n.oldEnd === i.newEnd) ((o = i), (s = n), (i = this._getPrev(++e)), (n = this._getCurr(++t)));else if (n.oldEnd < i.newEnd) {
          const [e, r] = l._splitPrev(i, n.oldLength);
          ((o = e), (s = n), (i = r), (n = this._getCurr(++t)));
        } else {
          const [t, r] = l._splitCurr(n, i.newLength);
          ((o = i), (s = t), (i = this._getPrev(++e)), (n = r));
        }
        ((this._result[this._resultLen++] = new r(o.oldPosition, o.oldText, s.newPosition, s.newText)), (this._prevDeltaOffset += o.newLength - o.oldLength), (this._currDeltaOffset += s.newLength - s.oldLength));
      }
      const o = l._merge(this._result);
      return l._removeNoOps(o);
    }
    _acceptCurr(e) {
      ((this._result[this._resultLen++] = l._rebaseCurr(this._prevDeltaOffset, e)), (this._currDeltaOffset += e.newLength - e.oldLength));
    }
    _getCurr(e) {
      return e < this._currLen ? this._currEdits[e] : null;
    }
    _acceptPrev(e) {
      ((this._result[this._resultLen++] = l._rebasePrev(this._currDeltaOffset, e)), (this._prevDeltaOffset += e.newLength - e.oldLength));
    }
    _getPrev(e) {
      return e < this._prevLen ? this._prevEdits[e] : null;
    }
    static _rebaseCurr(e, t) {
      return new r(t.oldPosition - e, t.oldText, t.newPosition, t.newText);
    }
    static _rebasePrev(e, t) {
      return new r(t.oldPosition, t.oldText, t.newPosition + e, t.newText);
    }
    static _splitPrev(e, t) {
      const i = e.newText.substr(0, t),
        n = e.newText.substr(t);
      return [new r(e.oldPosition, e.oldText, e.newPosition, i), new r(e.oldEnd, "", e.newPosition + t, n)];
    }
    static _splitCurr(e, t) {
      const i = e.oldText.substr(0, t),
        n = e.oldText.substr(t);
      return [new r(e.oldPosition, i, e.newPosition, e.newText), new r(e.oldPosition + t, n, e.newEnd, "")];
    }
    static _merge(e) {
      if (0 === e.length) return e;
      let t = [],
        i = 0,
        n = e[0];
      for (let o = 1; o < e.length; o++) {
        const s = e[o];
        n.oldEnd === s.oldPosition ? (n = new r(n.oldPosition, n.oldText + s.oldText, n.newPosition, n.newText + s.newText)) : ((t[i++] = n), (n = s));
      }
      return ((t[i++] = n), t);
    }
    static _removeNoOps(e) {
      if (0 === e.length) return e;
      let t = [],
        i = 0;
      for (let n = 0; n < e.length; n++) {
        const o = e[n];
        o.oldText !== o.newText && (t[i++] = o);
      }
      return t;
    }
  }
};