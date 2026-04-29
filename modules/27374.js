module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    E4: () => r,
    pR: () => a
  });
  var n = i(1432),
    o = i(82334);
  const s = n.dz ? 1.5 : 1.35;
  class r {
    constructor(e) {
      ((this._bareFontInfoBrand = void 0), (this.zoomLevel = e.zoomLevel), (this.pixelRatio = e.pixelRatio), (this.fontFamily = String(e.fontFamily)), (this.fontWeight = String(e.fontWeight)), (this.fontSize = e.fontSize), (this.fontFeatureSettings = e.fontFeatureSettings), (this.lineHeight = 0 | e.lineHeight), (this.letterSpacing = e.letterSpacing));
    }
    static createFromValidatedSettings(e, t, i, n) {
      const o = e.get(42),
        s = e.get(46),
        a = e.get(45),
        l = e.get(44),
        c = e.get(58),
        d = e.get(55);
      return r._create(o, s, a, l, c, d, t, i, n);
    }
    static _create(e, t, i, n, a, l, c, d, h) {
      (0 === a ? (a = s * i) : a < 8 && (a *= i), (a = Math.round(a)) < 8 && (a = 8));
      const u = 1 + (h ? 0 : 0.1 * o.C.getZoomLevel());
      return new r({
        zoomLevel: c,
        pixelRatio: d,
        fontFamily: e,
        fontWeight: t,
        fontSize: (i *= u),
        fontFeatureSettings: n,
        lineHeight: (a *= u),
        letterSpacing: l
      });
    }
    getId() {
      return (this.zoomLevel + "-" + this.pixelRatio + "-" + this.fontFamily + "-" + this.fontWeight + "-" + this.fontSize + "-" + this.fontFeatureSettings + "-" + this.lineHeight + "-" + this.letterSpacing);
    }
    getMassagedFontFamily(e) {
      const t = r._wrapInQuotes(this.fontFamily);
      return e && this.fontFamily !== e ? `${t}, ${e}` : t;
    }
    static _wrapInQuotes(e) {
      return /[,"']/.test(e) ? e : /[+ ]/.test(e) ? `"${e}"` : e;
    }
  }
  class a extends r {
    constructor(e, t) {
      (super(e), (this._editorStylingBrand = void 0), (this.version = 1), (this.isTrusted = t), (this.isMonospace = e.isMonospace), (this.typicalHalfwidthCharacterWidth = e.typicalHalfwidthCharacterWidth), (this.typicalFullwidthCharacterWidth = e.typicalFullwidthCharacterWidth), (this.canUseHalfwidthRightwardsArrow = e.canUseHalfwidthRightwardsArrow), (this.spaceWidth = e.spaceWidth), (this.middotWidth = e.middotWidth), (this.wsmiddotWidth = e.wsmiddotWidth), (this.maxDigitWidth = e.maxDigitWidth));
    }
    equals(e) {
      return (this.fontFamily === e.fontFamily && this.fontWeight === e.fontWeight && this.fontSize === e.fontSize && this.fontFeatureSettings === e.fontFeatureSettings && this.lineHeight === e.lineHeight && this.letterSpacing === e.letterSpacing && this.typicalHalfwidthCharacterWidth === e.typicalHalfwidthCharacterWidth && this.typicalFullwidthCharacterWidth === e.typicalFullwidthCharacterWidth && this.canUseHalfwidthRightwardsArrow === e.canUseHalfwidthRightwardsArrow && this.spaceWidth === e.spaceWidth && this.middotWidth === e.middotWidth && this.wsmiddotWidth === e.wsmiddotWidth && this.maxDigitWidth === e.maxDigitWidth);
    }
  }
};