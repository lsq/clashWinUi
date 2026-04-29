const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  function n(e, t) {
    const i = Math.pow(10, t);
    return Math.round(e * i) / i;
  }
  i.d(t, {
    Il: () => a,
    VS: () => o,
    tx: () => r
  });
  class o {
    constructor(e, t, i, o = 1) {
      ((this._rgbaBrand = void 0), (this.r = 0 | Math.min(255, Math.max(0, e))), (this.g = 0 | Math.min(255, Math.max(0, t))), (this.b = 0 | Math.min(255, Math.max(0, i))), (this.a = n(Math.max(Math.min(1, o), 0), 3)));
    }
    static equals(e, t) {
      return e.r === t.r && e.g === t.g && e.b === t.b && e.a === t.a;
    }
  }
  class s {
    constructor(e, t, i, o) {
      ((this._hslaBrand = void 0), (this.h = 0 | Math.max(Math.min(360, e), 0)), (this.s = n(Math.max(Math.min(1, t), 0), 3)), (this.l = n(Math.max(Math.min(1, i), 0), 3)), (this.a = n(Math.max(Math.min(1, o), 0), 3)));
    }
    static equals(e, t) {
      return e.h === t.h && e.s === t.s && e.l === t.l && e.a === t.a;
    }
    static fromRGBA(e) {
      const t = e.r / 255,
        i = e.g / 255,
        n = e.b / 255,
        o = e.a,
        r = Math.max(t, i, n),
        a = Math.min(t, i, n);
      let l = 0,
        c = 0;
      const d = (a + r) / 2,
        h = r - a;
      if (h > 0) {
        switch (((c = Math.min(d <= 0.5 ? h / (2 * d) : h / (2 - 2 * d), 1)), r)) {
          case t:
            l = (i - n) / h + (i < n ? 6 : 0);
            break;
          case i:
            l = (n - t) / h + 2;
            break;
          case n:
            l = (t - i) / h + 4;
        }
        ((l *= 60), (l = Math.round(l)));
      }
      return new s(l, c, d, o);
    }
    static _hue2rgb(e, t, i) {
      return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * (t - e) * i : i < 0.5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e);
    }
    static toRGBA(e) {
      const t = e.h / 360,
        {
          s: i,
          l: n,
          a: r
        } = e;
      let a, l, c;
      if (0 === i) a = l = c = n;else {
        const e = n < 0.5 ? n * (1 + i) : n + i - n * i,
          o = 2 * n - e;
        ((a = s._hue2rgb(o, e, t + 1 / 3)), (l = s._hue2rgb(o, e, t)), (c = s._hue2rgb(o, e, t - 1 / 3)));
      }
      return new o(Math.round(255 * a), Math.round(255 * l), Math.round(255 * c), r);
    }
  }
  class r {
    constructor(e, t, i, o) {
      ((this._hsvaBrand = void 0), (this.h = 0 | Math.max(Math.min(360, e), 0)), (this.s = n(Math.max(Math.min(1, t), 0), 3)), (this.v = n(Math.max(Math.min(1, i), 0), 3)), (this.a = n(Math.max(Math.min(1, o), 0), 3)));
    }
    static equals(e, t) {
      return e.h === t.h && e.s === t.s && e.v === t.v && e.a === t.a;
    }
    static fromRGBA(e) {
      const t = e.r / 255,
        i = e.g / 255,
        n = e.b / 255,
        o = Math.max(t, i, n),
        s = o - Math.min(t, i, n),
        a = 0 === o ? 0 : s / o;
      let l;
      return ((l = 0 === s ? 0 : o === t ? ((((i - n) / s) % 6) + 6) % 6 : o === i ? (n - t) / s + 2 : (t - i) / s + 4), new r(Math.round(60 * l), a, o, e.a));
    }
    static toRGBA(e) {
      const {
          h: t,
          s: i,
          v: n,
          a: s
        } = e,
        r = n * i,
        a = r * (1 - Math.abs(((t / 60) % 2) - 1)),
        l = n - r;
      let [c, d, h] = [0, 0, 0];
      return (t < 60 ? ((c = r), (d = a)) : t < 120 ? ((c = a), (d = r)) : t < 180 ? ((d = r), (h = a)) : t < 240 ? ((d = a), (h = r)) : t < 300 ? ((c = a), (h = r)) : t <= 360 && ((c = r), (h = a)), (c = Math.round(255 * (c + l))), (d = Math.round(255 * (d + l))), (h = Math.round(255 * (h + l))), new o(c, d, h, s));
    }
  }
  const Lg = new Language(modifyState.language);
  class a {
    constructor(e) {
      if (!e) throw new Error(Lg.colorNeedValue());
      if (e instanceof o) this.rgba = e;else if (e instanceof s) ((this._hsla = e), (this.rgba = s.toRGBA(e)));else {
        if (!(e instanceof r)) throw new Error(Lg.invalidColorArgument());
        ((this._hsva = e), (this.rgba = r.toRGBA(e)));
      }
    }
    static fromHex(e) {
      return a.Format.CSS.parseHex(e) || a.red;
    }
    get hsla() {
      return this._hsla ? this._hsla : s.fromRGBA(this.rgba);
    }
    get hsva() {
      return this._hsva ? this._hsva : r.fromRGBA(this.rgba);
    }
    equals(e) {
      return (!!e && o.equals(this.rgba, e.rgba) && s.equals(this.hsla, e.hsla) && r.equals(this.hsva, e.hsva));
    }
    getRelativeLuminance() {
      return n(0.2126 * a._relativeLuminanceForComponent(this.rgba.r) + 0.7152 * a._relativeLuminanceForComponent(this.rgba.g) + 0.0722 * a._relativeLuminanceForComponent(this.rgba.b), 4);
    }
    static _relativeLuminanceForComponent(e) {
      const t = e / 255;
      return t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    }
    isLighter() {
      return ((299 * this.rgba.r + 587 * this.rgba.g + 114 * this.rgba.b) / 1e3 >= 128);
    }
    isLighterThan(e) {
      return this.getRelativeLuminance() > e.getRelativeLuminance();
    }
    isDarkerThan(e) {
      return this.getRelativeLuminance() < e.getRelativeLuminance();
    }
    lighten(e) {
      return new a(new s(this.hsla.h, this.hsla.s, this.hsla.l + this.hsla.l * e, this.hsla.a));
    }
    darken(e) {
      return new a(new s(this.hsla.h, this.hsla.s, this.hsla.l - this.hsla.l * e, this.hsla.a));
    }
    transparent(e) {
      const {
        r: t,
        g: i,
        b: n,
        a: s
      } = this.rgba;
      return new a(new o(t, i, n, s * e));
    }
    isTransparent() {
      return 0 === this.rgba.a;
    }
    isOpaque() {
      return 1 === this.rgba.a;
    }
    opposite() {
      return new a(new o(255 - this.rgba.r, 255 - this.rgba.g, 255 - this.rgba.b, this.rgba.a));
    }
    toString() {
      return (this._toString || (this._toString = a.Format.CSS.format(this)), this._toString);
    }
    static getLighterColor(e, t, i) {
      if (e.isLighterThan(t)) return e;
      i = i || 0.5;
      const n = e.getRelativeLuminance(),
        o = t.getRelativeLuminance();
      return ((i = (i * (o - n)) / o), e.lighten(i));
    }
    static getDarkerColor(e, t, i) {
      if (e.isDarkerThan(t)) return e;
      i = i || 0.5;
      const n = e.getRelativeLuminance();
      return ((i = (i * (n - t.getRelativeLuminance())) / n), e.darken(i));
    }
  }
  ((a.white = new a(new o(255, 255, 255, 1))), (a.black = new a(new o(0, 0, 0, 1))), (a.red = new a(new o(255, 0, 0, 1))), (a.blue = new a(new o(0, 0, 255, 1))), (a.cyan = new a(new o(0, 255, 255, 1))), (a.lightgrey = new a(new o(211, 211, 211, 1))), (a.transparent = new a(new o(0, 0, 0, 0))), (function (e) {
    let t;
    !(function (t) {
      let i;
      !(function (t) {
        function i(e) {
          const t = e.toString(16);
          return 2 !== t.length ? "0" + t : t;
        }
        function n(e) {
          switch (e) {
            case 48:
              return 0;
            case 49:
              return 1;
            case 50:
              return 2;
            case 51:
              return 3;
            case 52:
              return 4;
            case 53:
              return 5;
            case 54:
              return 6;
            case 55:
              return 7;
            case 56:
              return 8;
            case 57:
              return 9;
            case 97:
            case 65:
              return 10;
            case 98:
            case 66:
              return 11;
            case 99:
            case 67:
              return 12;
            case 100:
            case 68:
              return 13;
            case 101:
            case 69:
              return 14;
            case 102:
            case 70:
              return 15;
          }
          return 0;
        }
        ((t.formatRGB = function (t) {
          return 1 === t.rgba.a ? `rgb(${t.rgba.r}, ${t.rgba.g}, ${t.rgba.b})` : e.Format.CSS.formatRGBA(t);
        }), (t.formatRGBA = function (e) {
          return `rgba(${e.rgba.r}, ${e.rgba.g}, ${e.rgba.b}, ${+e.rgba.a.toFixed(2)})`;
        }), (t.formatHSL = function (t) {
          return 1 === t.hsla.a ? `hsl(${t.hsla.h}, ${(100 * t.hsla.s).toFixed(2)}%, ${(100 * t.hsla.l).toFixed(2)}%)` : e.Format.CSS.formatHSLA(t);
        }), (t.formatHSLA = function (e) {
          return `hsla(${e.hsla.h}, ${(100 * e.hsla.s).toFixed(2)}%, ${(100 * e.hsla.l).toFixed(2)}%, ${e.hsla.a.toFixed(2)})`;
        }), (t.formatHex = function (e) {
          return `#${i(e.rgba.r)}${i(e.rgba.g)}${i(e.rgba.b)}`;
        }), (t.formatHexA = function (t, n = !1) {
          return n && 1 === t.rgba.a ? e.Format.CSS.formatHex(t) : `#${i(t.rgba.r)}${i(t.rgba.g)}${i(t.rgba.b)}${i(Math.round(255 * t.rgba.a))}`;
        }), (t.format = function (t) {
          return t.isOpaque() ? e.Format.CSS.formatHex(t) : e.Format.CSS.formatRGBA(t);
        }), (t.parseHex = function (t) {
          const i = t.length;
          if (0 === i) return null;
          if (35 !== t.charCodeAt(0)) return null;
          if (7 === i) {
            const i = 16 * n(t.charCodeAt(1)) + n(t.charCodeAt(2)),
              s = 16 * n(t.charCodeAt(3)) + n(t.charCodeAt(4)),
              r = 16 * n(t.charCodeAt(5)) + n(t.charCodeAt(6));
            return new e(new o(i, s, r, 1));
          }
          if (9 === i) {
            const i = 16 * n(t.charCodeAt(1)) + n(t.charCodeAt(2)),
              s = 16 * n(t.charCodeAt(3)) + n(t.charCodeAt(4)),
              r = 16 * n(t.charCodeAt(5)) + n(t.charCodeAt(6)),
              a = 16 * n(t.charCodeAt(7)) + n(t.charCodeAt(8));
            return new e(new o(i, s, r, a / 255));
          }
          if (4 === i) {
            const i = n(t.charCodeAt(1)),
              s = n(t.charCodeAt(2)),
              r = n(t.charCodeAt(3));
            return new e(new o(16 * i + i, 16 * s + s, 16 * r + r));
          }
          if (5 === i) {
            const i = n(t.charCodeAt(1)),
              s = n(t.charCodeAt(2)),
              r = n(t.charCodeAt(3)),
              a = n(t.charCodeAt(4));
            return new e(new o(16 * i + i, 16 * s + s, 16 * r + r, (16 * a + a) / 255));
          }
          return null;
        }));
      })((i = t.CSS || (t.CSS = {})));
    })((t = e.Format || (e.Format = {})));
  })(a || (a = {})));
};