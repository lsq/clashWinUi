module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    y: () => c
  });
  var n = i(16268),
    o = i(22258),
    s = i(8313),
    r = i(1432);
  const a = r.dz ? 256 : 2048,
    l = r.dz ? 2048 : 256;
  class c {
    constructor(e) {
      this._standardKeyboardEventBrand = !0;
      let t = e;
      ((this.browserEvent = t), (this.target = t.target), (this.ctrlKey = t.ctrlKey), (this.shiftKey = t.shiftKey), (this.altKey = t.altKey), (this.metaKey = t.metaKey), (this.keyCode = (function (e) {
        if (e.charCode) {
          let t = String.fromCharCode(e.charCode).toUpperCase();
          return o.kL.fromString(t);
        }
        const t = e.keyCode;
        if (3 === t) return 7;
        if (n.vU) {
          if (59 === t) return 80;
          if (107 === t) return 81;
          if (109 === t) return 83;
          if (r.dz && 224 === t) return 57;
        } else if (n.Pf) {
          if (91 === t) return 57;
          if (r.dz && 93 === t) return 57;
          if (!r.dz && 92 === t) return 57;
        }
        return o.H_[t] || 0;
      })(t)), (this.code = t.code), (this.ctrlKey = this.ctrlKey || 5 === this.keyCode), (this.altKey = this.altKey || 6 === this.keyCode), (this.shiftKey = this.shiftKey || 4 === this.keyCode), (this.metaKey = this.metaKey || 57 === this.keyCode), (this._asKeybinding = this._computeKeybinding()), (this._asRuntimeKeybinding = this._computeRuntimeKeybinding()));
    }
    preventDefault() {
      this.browserEvent && this.browserEvent.preventDefault && this.browserEvent.preventDefault();
    }
    stopPropagation() {
      this.browserEvent && this.browserEvent.stopPropagation && this.browserEvent.stopPropagation();
    }
    toKeybinding() {
      return this._asRuntimeKeybinding;
    }
    equals(e) {
      return this._asKeybinding === e;
    }
    _computeKeybinding() {
      let e = 0;
      5 !== this.keyCode && 4 !== this.keyCode && 6 !== this.keyCode && 57 !== this.keyCode && (e = this.keyCode);
      let t = 0;
      return (this.ctrlKey && (t |= a), this.altKey && (t |= 512), this.shiftKey && (t |= 1024), this.metaKey && (t |= l), (t |= e), t);
    }
    _computeRuntimeKeybinding() {
      let e = 0;
      return (5 !== this.keyCode && 4 !== this.keyCode && 6 !== this.keyCode && 57 !== this.keyCode && (e = this.keyCode), new s.QC(this.ctrlKey, this.shiftKey, this.altKey, this.metaKey, e));
    }
  }
};