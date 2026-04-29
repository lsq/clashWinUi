module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    V: () => m,
    P: () => p
  });
  var n = i(16268),
    o = i(4669),
    s = i(5976),
    r = i(1432),
    a = i(64141);
  class l {
    constructor(e, t) {
      ((this.chr = e), (this.type = t), (this.width = 0));
    }
    fulfill(e) {
      this.width = e;
    }
  }
  class c {
    constructor(e, t) {
      ((this._bareFontInfo = e), (this._requests = t), (this._container = null), (this._testElements = null));
    }
    read() {
      (this._createDomElements(), document.body.appendChild(this._container), this._readFromDomElements(), document.body.removeChild(this._container), (this._container = null), (this._testElements = null));
    }
    _createDomElements() {
      const e = this._bareFontInfo.getMassagedFontFamily(n.G6 ? a.hL.fontFamily : null),
        t = document.createElement("div");
      ((t.style.position = "absolute"), (t.style.top = "-50000px"), (t.style.width = "50000px"));
      const i = document.createElement("div");
      ((i.style.fontFamily = e), (i.style.fontWeight = this._bareFontInfo.fontWeight), (i.style.fontSize = this._bareFontInfo.fontSize + "px"), (i.style.fontFeatureSettings = this._bareFontInfo.fontFeatureSettings), (i.style.lineHeight = this._bareFontInfo.lineHeight + "px"), (i.style.letterSpacing = this._bareFontInfo.letterSpacing + "px"), t.appendChild(i));
      const o = document.createElement("div");
      ((o.style.fontFamily = e), (o.style.fontWeight = "bold"), (o.style.fontSize = this._bareFontInfo.fontSize + "px"), (o.style.fontFeatureSettings = this._bareFontInfo.fontFeatureSettings), (o.style.lineHeight = this._bareFontInfo.lineHeight + "px"), (o.style.letterSpacing = this._bareFontInfo.letterSpacing + "px"), t.appendChild(o));
      const s = document.createElement("div");
      ((s.style.fontFamily = e), (s.style.fontWeight = this._bareFontInfo.fontWeight), (s.style.fontSize = this._bareFontInfo.fontSize + "px"), (s.style.fontFeatureSettings = this._bareFontInfo.fontFeatureSettings), (s.style.lineHeight = this._bareFontInfo.lineHeight + "px"), (s.style.letterSpacing = this._bareFontInfo.letterSpacing + "px"), (s.style.fontStyle = "italic"), t.appendChild(s));
      const r = [];
      for (const e of this._requests) {
        let t;
        (0 === e.type && (t = i), 2 === e.type && (t = o), 1 === e.type && (t = s), t.appendChild(document.createElement("br")));
        const n = document.createElement("span");
        (c._render(n, e), t.appendChild(n), r.push(n));
      }
      ((this._container = t), (this._testElements = r));
    }
    static _render(e, t) {
      if (" " === t.chr) {
        let t = " ";
        for (let e = 0; e < 8; e++) t += t;
        e.innerText = t;
      } else {
        let i = t.chr;
        for (let e = 0; e < 8; e++) i += i;
        e.textContent = i;
      }
    }
    _readFromDomElements() {
      for (let e = 0, t = this._requests.length; e < t; e++) {
        const t = this._requests[e],
          i = this._testElements[e];
        t.fulfill(i.offsetWidth / 256);
      }
    }
  }
  var d = i(54534),
    h = i(56345),
    u = i(27374);
  class g {
    constructor() {
      ((this._keys = Object.create(null)), (this._values = Object.create(null)));
    }
    has(e) {
      const t = e.getId();
      return !!this._values[t];
    }
    get(e) {
      const t = e.getId();
      return this._values[t];
    }
    put(e, t) {
      const i = e.getId();
      ((this._keys[i] = e), (this._values[i] = t));
    }
    remove(e) {
      const t = e.getId();
      (delete this._keys[t], delete this._values[t]);
    }
    getValues() {
      return Object.keys(this._keys).map(e => this._values[e]);
    }
  }
  function p() {
    f.INSTANCE.clearCache();
  }
  class f extends s.JT {
    constructor() {
      (super(), (this._onDidChange = this._register(new o.Q5())), (this.onDidChange = this._onDidChange.event), (this._cache = new g()), (this._evictUntrustedReadingsTimeout = -1));
    }
    dispose() {
      (-1 !== this._evictUntrustedReadingsTimeout && (clearTimeout(this._evictUntrustedReadingsTimeout), (this._evictUntrustedReadingsTimeout = -1)), super.dispose());
    }
    clearCache() {
      ((this._cache = new g()), this._onDidChange.fire());
    }
    _writeToCache(e, t) {
      (this._cache.put(e, t), t.isTrusted || -1 !== this._evictUntrustedReadingsTimeout || (this._evictUntrustedReadingsTimeout = setTimeout(() => {
        ((this._evictUntrustedReadingsTimeout = -1), this._evictUntrustedReadings());
      }, 5e3)));
    }
    _evictUntrustedReadings() {
      const e = this._cache.getValues();
      let t = !1;
      for (const i of e) i.isTrusted || ((t = !0), this._cache.remove(i));
      t && this._onDidChange.fire();
    }
    readConfiguration(e) {
      if (!this._cache.has(e)) {
        let t = f._actualReadConfiguration(e);
        ((t.typicalHalfwidthCharacterWidth <= 2 || t.typicalFullwidthCharacterWidth <= 2 || t.spaceWidth <= 2 || t.maxDigitWidth <= 2) && (t = new u.pR({
          zoomLevel: n.px(),
          pixelRatio: n.mX(),
          fontFamily: t.fontFamily,
          fontWeight: t.fontWeight,
          fontSize: t.fontSize,
          fontFeatureSettings: t.fontFeatureSettings,
          lineHeight: t.lineHeight,
          letterSpacing: t.letterSpacing,
          isMonospace: t.isMonospace,
          typicalHalfwidthCharacterWidth: Math.max(t.typicalHalfwidthCharacterWidth, 5),
          typicalFullwidthCharacterWidth: Math.max(t.typicalFullwidthCharacterWidth, 5),
          canUseHalfwidthRightwardsArrow: t.canUseHalfwidthRightwardsArrow,
          spaceWidth: Math.max(t.spaceWidth, 5),
          middotWidth: Math.max(t.middotWidth, 5),
          wsmiddotWidth: Math.max(t.wsmiddotWidth, 5),
          maxDigitWidth: Math.max(t.maxDigitWidth, 5)
        }, !1)), this._writeToCache(e, t));
      }
      return this._cache.get(e);
    }
    static createRequest(e, t, i, n) {
      const o = new l(e, t);
      return (i.push(o), n && n.push(o), o);
    }
    static _actualReadConfiguration(e) {
      const t = [],
        i = [],
        o = this.createRequest("n", 0, t, i),
        s = this.createRequest("ｍ", 0, t, null),
        r = this.createRequest(" ", 0, t, i),
        l = this.createRequest("0", 0, t, i),
        d = this.createRequest("1", 0, t, i),
        h = this.createRequest("2", 0, t, i),
        g = this.createRequest("3", 0, t, i),
        p = this.createRequest("4", 0, t, i),
        f = this.createRequest("5", 0, t, i),
        m = this.createRequest("6", 0, t, i),
        v = this.createRequest("7", 0, t, i),
        _ = this.createRequest("8", 0, t, i),
        b = this.createRequest("9", 0, t, i),
        w = this.createRequest("→", 0, t, i),
        y = this.createRequest("￫", 0, t, null),
        C = this.createRequest("·", 0, t, i),
        x = this.createRequest(String.fromCharCode(11825), 0, t, null),
        S = "|/-_ilm%";
      for (let e = 0, n = 8; e < n; e++) (this.createRequest(S.charAt(e), 0, t, i), this.createRequest(S.charAt(e), 1, t, i), this.createRequest(S.charAt(e), 2, t, i));
      !(function (e, t) {
        new c(e, t).read();
      })(e, t);
      const k = Math.max(l.width, d.width, h.width, g.width, p.width, f.width, m.width, v.width, _.width, b.width);
      let L = e.fontFeatureSettings === a.n0.OFF;
      const N = i[0].width;
      for (let e = 1, t = i.length; L && e < t; e++) {
        const t = N - i[e].width;
        if (t < -0.001 || t > 0.001) {
          L = !1;
          break;
        }
      }
      let D = !0;
      (L && y.width !== N && (D = !1), y.width > w.width && (D = !1));
      const I = n.WP() > 2e3;
      return new u.pR({
        zoomLevel: n.px(),
        pixelRatio: n.mX(),
        fontFamily: e.fontFamily,
        fontWeight: e.fontWeight,
        fontSize: e.fontSize,
        fontFeatureSettings: e.fontFeatureSettings,
        lineHeight: e.lineHeight,
        letterSpacing: e.letterSpacing,
        isMonospace: L,
        typicalHalfwidthCharacterWidth: o.width,
        typicalFullwidthCharacterWidth: s.width,
        canUseHalfwidthRightwardsArrow: D,
        spaceWidth: r.width,
        middotWidth: C.width,
        wsmiddotWidth: x.width,
        maxDigitWidth: k
      }, I);
    }
  }
  f.INSTANCE = new f();
  class m extends h.fv {
    constructor(e, t, i = null, o) {
      (super(e, t), (this.accessibilityService = o), (this._elementSizeObserver = this._register(new d.I(i, t.dimension, () => this._recomputeOptions()))), this._register(f.INSTANCE.onDidChange(() => this._recomputeOptions())), this._validatedOptions.get(10) && this._elementSizeObserver.startObserving(), this._register(n.fX(e => this._recomputeOptions())), this._register(this.accessibilityService.onDidChangeScreenReaderOptimized(() => this._recomputeOptions())), this._recomputeOptions());
    }
    static applyFontInfoSlow(e, t) {
      ((e.style.fontFamily = t.getMassagedFontFamily(n.G6 ? a.hL.fontFamily : null)), (e.style.fontWeight = t.fontWeight), (e.style.fontSize = t.fontSize + "px"), (e.style.fontFeatureSettings = t.fontFeatureSettings), (e.style.lineHeight = t.lineHeight + "px"), (e.style.letterSpacing = t.letterSpacing + "px"));
    }
    static applyFontInfo(e, t) {
      (e.setFontFamily(t.getMassagedFontFamily(n.G6 ? a.hL.fontFamily : null)), e.setFontWeight(t.fontWeight), e.setFontSize(t.fontSize), e.setFontFeatureSettings(t.fontFeatureSettings), e.setLineHeight(t.lineHeight), e.setLetterSpacing(t.letterSpacing));
    }
    observeReferenceElement(e) {
      this._elementSizeObserver.observe(e);
    }
    updatePixelRatio() {
      this._recomputeOptions();
    }
    static _getExtraEditorClassName() {
      let e = "";
      return (n.G6 || n.MG || (e += "no-user-select "), n.G6 && (e += "no-minimap-shadow "), r.dz && (e += "mac "), e);
    }
    _getEnvConfiguration() {
      return {
        extraEditorClassName: m._getExtraEditorClassName(),
        outerWidth: this._elementSizeObserver.getWidth(),
        outerHeight: this._elementSizeObserver.getHeight(),
        emptySelectionClipboard: n.Pf || n.vU,
        pixelRatio: n.mX(),
        zoomLevel: n.px(),
        accessibilitySupport: this.accessibilityService.isScreenReaderOptimized() ? 2 : this.accessibilityService.getAccessibilitySupport()
      };
    }
    readConfiguration(e) {
      return f.INSTANCE.readConfiguration(e);
    }
  }
};