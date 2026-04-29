module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EY: () => o,
    Tj: () => s
  });
  class n {
    constructor(e, t, i) {
      ((this._colorZoneBrand = void 0), (this.from = 0 | e), (this.to = 0 | t), (this.colorId = 0 | i));
    }
    static compare(e, t) {
      return e.colorId === t.colorId ? e.from === t.from ? e.to - t.to : e.from - t.from : e.colorId - t.colorId;
    }
  }
  class o {
    constructor(e, t, i) {
      ((this._overviewRulerZoneBrand = void 0), (this.startLineNumber = e), (this.endLineNumber = t), (this.color = i), (this._colorZone = null));
    }
    static compare(e, t) {
      return e.color === t.color ? e.startLineNumber === t.startLineNumber ? e.endLineNumber - t.endLineNumber : e.startLineNumber - t.startLineNumber : e.color < t.color ? -1 : 1;
    }
    setColorZone(e) {
      this._colorZone = e;
    }
    getColorZones() {
      return this._colorZone;
    }
  }
  class s {
    constructor(e) {
      ((this._getVerticalOffsetForLine = e), (this._zones = []), (this._colorZonesInvalid = !1), (this._lineHeight = 0), (this._domWidth = 0), (this._domHeight = 0), (this._outerHeight = 0), (this._pixelRatio = 1), (this._lastAssignedId = 0), (this._color2Id = Object.create(null)), (this._id2Color = []));
    }
    getId2Color() {
      return this._id2Color;
    }
    setZones(e) {
      ((this._zones = e), this._zones.sort(o.compare));
    }
    setLineHeight(e) {
      return (this._lineHeight !== e && ((this._lineHeight = e), (this._colorZonesInvalid = !0), !0));
    }
    setPixelRatio(e) {
      ((this._pixelRatio = e), (this._colorZonesInvalid = !0));
    }
    getDOMWidth() {
      return this._domWidth;
    }
    getCanvasWidth() {
      return this._domWidth * this._pixelRatio;
    }
    setDOMWidth(e) {
      return (this._domWidth !== e && ((this._domWidth = e), (this._colorZonesInvalid = !0), !0));
    }
    getDOMHeight() {
      return this._domHeight;
    }
    getCanvasHeight() {
      return this._domHeight * this._pixelRatio;
    }
    setDOMHeight(e) {
      return (this._domHeight !== e && ((this._domHeight = e), (this._colorZonesInvalid = !0), !0));
    }
    getOuterHeight() {
      return this._outerHeight;
    }
    setOuterHeight(e) {
      return (this._outerHeight !== e && ((this._outerHeight = e), (this._colorZonesInvalid = !0), !0));
    }
    resolveColorZones() {
      const e = this._colorZonesInvalid,
        t = Math.floor(this._lineHeight),
        i = Math.floor(this.getCanvasHeight()),
        o = i / Math.floor(this._outerHeight),
        s = Math.floor((4 * this._pixelRatio) / 2);
      let r = [];
      for (let a = 0, l = this._zones.length; a < l; a++) {
        const l = this._zones[a];
        if (!e) {
          const e = l.getColorZones();
          if (e) {
            r.push(e);
            continue;
          }
        }
        const c = Math.floor(o * this._getVerticalOffsetForLine(l.startLineNumber)),
          d = Math.floor(o * (this._getVerticalOffsetForLine(l.endLineNumber) + t));
        let h = Math.floor((c + d) / 2),
          u = d - h;
        (u < s && (u = s), h - u < 0 && (h = u), h + u > i && (h = i - u));
        const g = l.color;
        let p = this._color2Id[g];
        p || ((p = ++this._lastAssignedId), (this._color2Id[g] = p), (this._id2Color[p] = g));
        const f = new n(h - u, h + u, p);
        (l.setColorZone(f), r.push(f));
      }
      return ((this._colorZonesInvalid = !1), r.sort(n.compare), r);
    }
  }
};