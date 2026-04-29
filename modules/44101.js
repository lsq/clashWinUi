const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    H9: () => O,
    He: () => M,
    OH: () => V,
    KZ: () => y,
    RN: () => I,
    Ct: () => D,
    Az: () => P,
    MY: () => p,
    vH: () => L,
    vN: () => R,
    K7: () => j,
    wT: () => z,
    vJ: () => k,
    AD: () => _,
    aC: () => H,
    xp: () => S,
    vI: () => E,
    gl: () => m,
    mX: () => A,
    bw: () => u,
    zu: () => C,
    pM: () => B,
    id: () => N,
    ln: () => F,
    FL: () => b,
    G0: () => w,
    AC: () => W,
    nD: () => x,
    WW: () => g,
    uZ: () => f,
    NX: () => c,
    RW: () => U,
    tA: () => T,
    jr: () => h,
    Sy: () => d,
    vx: () => v
  });
  var n = i(70666),
    o = i(24314),
    s = i(21036),
    r = i(4669),
    a = i(5976);
  var l = i(73046);
  class c {
    static getLanguageId(e) {
      return (255 & e) >>> 0;
    }
    static getTokenType(e) {
      return (1792 & e) >>> 8;
    }
    static getFontStyle(e) {
      return (14336 & e) >>> 11;
    }
    static getForeground(e) {
      return (8372224 & e) >>> 14;
    }
    static getBackground(e) {
      return (4286578688 & e) >>> 23;
    }
    static getClassNameFromMetadata(e) {
      let t = "mtk" + this.getForeground(e),
        i = this.getFontStyle(e);
      return (1 & i && (t += " mtki"), 2 & i && (t += " mtkb"), 4 & i && (t += " mtku"), t);
    }
    static getInlineStyleFromMetadata(e, t) {
      const i = this.getForeground(e),
        n = this.getFontStyle(e);
      let o = `color: ${t[i]};`;
      return (1 & n && (o += "font-style: italic;"), 2 & n && (o += "font-weight: bold;"), 4 & n && (o += "text-decoration: underline;"), o);
    }
  }
  const d = (function () {
    let e = Object.create(null);
    return ((e[0] = "symbol-method"), (e[1] = "symbol-function"), (e[2] = "symbol-constructor"), (e[3] = "symbol-field"), (e[4] = "symbol-variable"), (e[5] = "symbol-class"), (e[6] = "symbol-struct"), (e[7] = "symbol-interface"), (e[8] = "symbol-module"), (e[9] = "symbol-property"), (e[10] = "symbol-event"), (e[11] = "symbol-operator"), (e[12] = "symbol-unit"), (e[13] = "symbol-value"), (e[14] = "symbol-constant"), (e[15] = "symbol-enum"), (e[16] = "symbol-enum-member"), (e[17] = "symbol-keyword"), (e[27] = "symbol-snippet"), (e[18] = "symbol-text"), (e[19] = "symbol-color"), (e[20] = "symbol-file"), (e[21] = "symbol-reference"), (e[22] = "symbol-customcolor"), (e[23] = "symbol-folder"), (e[24] = "symbol-type-parameter"), (e[25] = "account"), (e[26] = "issues"), function (t) {
      const i = e[t];
      let n = i && l.fK.get(i);
      return (n || (console.info("No codicon found for CompletionItemKind " + t), (n = l.lA.symbolProperty)), n.classNames);
    });
  })();
  let h = (function () {
    let e = Object.create(null);
    return ((e.method = 0), (e.function = 1), (e.constructor = 2), (e.field = 3), (e.variable = 4), (e.class = 5), (e.struct = 6), (e.interface = 7), (e.module = 8), (e.property = 9), (e.event = 10), (e.operator = 11), (e.unit = 12), (e.value = 13), (e.constant = 14), (e.enum = 15), (e["enum-member"] = 16), (e.enumMember = 16), (e.keyword = 17), (e.snippet = 27), (e.text = 18), (e.color = 19), (e.file = 20), (e.reference = 21), (e.customcolor = 22), (e.folder = 23), (e["type-parameter"] = 24), (e.typeParameter = 24), (e.account = 25), (e.issue = 26), function (t, i) {
      let n = e[t];
      return (void 0 !== n || i || (n = 9), n);
    });
  })();
  var u, g, p, f, m;
  const Lg = new Language(modifyState.language);
  function v(e) {
    return (e && n.o.isUri(e.uri) && o.e.isIRange(e.range) && (o.e.isIRange(e.originSelectionRange) || o.e.isIRange(e.targetSelectionRange)));
  }
  (!(function (e) {
    ((e[(e.Automatic = 0)] = "Automatic"), (e[(e.Explicit = 1)] = "Explicit"));
  })(u || (u = {})), (function (e) {
    ((e[(e.Invoke = 1)] = "Invoke"), (e[(e.TriggerCharacter = 2)] = "TriggerCharacter"), (e[(e.ContentChange = 3)] = "ContentChange"));
  })(g || (g = {})), (function (e) {
    ((e[(e.Text = 0)] = Lg.text()), (e[(e.Read = 1)] = "Read"), (e[(e.Write = 2)] = "Write"));
  })(p || (p = {})), (function (e) {
    const t = new Map();
    (t.set("file", 0), t.set("module", 1), t.set("namespace", 2), t.set("package", 3), t.set("class", 4), t.set("method", 5), t.set("property", 6), t.set("field", 7), t.set("constructor", 8), t.set("enum", 9), t.set("interface", 10), t.set("function", 11), t.set("variable", 12), t.set("constant", 13), t.set("string", 14), t.set("number", 15), t.set("boolean", 16), t.set("array", 17), t.set("object", 18), t.set("key", 19), t.set("null", 20), t.set("enum-member", 21), t.set("struct", 22), t.set("event", 23), t.set("operator", 24), t.set("type-parameter", 25));
    const i = new Map();
    (i.set(0, "file"), i.set(1, "module"), i.set(2, "namespace"), i.set(3, "package"), i.set(4, "class"), i.set(5, "method"), i.set(6, "property"), i.set(7, "field"), i.set(8, "constructor"), i.set(9, "enum"), i.set(10, "interface"), i.set(11, "function"), i.set(12, "variable"), i.set(13, "constant"), i.set(14, "string"), i.set(15, "number"), i.set(16, "boolean"), i.set(17, "array"), i.set(18, "object"), i.set(19, "key"), i.set(20, "null"), i.set(21, "enum-member"), i.set(22, "struct"), i.set(23, "event"), i.set(24, "operator"), i.set(25, "type-parameter"), (e.fromString = function (e) {
      return t.get(e);
    }), (e.toString = function (e) {
      return i.get(e);
    }), (e.toCssClassName = function (e, t) {
      const n = i.get(e);
      let o = n && l.fK.get("symbol-" + n);
      return (o || (console.info("No codicon found for SymbolKind " + e), (o = l.lA.symbolProperty)), `${t ? "inline" : "block"} ${o.classNames}`);
    }));
  })(f || (f = {})));
  class _ {
    constructor(e) {
      this.value = e;
    }
  }
  ((_.Comment = new _("comment")), (_.Imports = new _("imports")), (_.Region = new _("region")), (function (e) {
    ((e[(e.Other = 0)] = "Other"), (e[(e.Type = 1)] = Lg.type()), (e[(e.Parameter = 2)] = "Parameter"));
  })(m || (m = {})));
  const b = new s.c(),
    w = new s.c(),
    y = new s.c(),
    C = new s.c(),
    x = new s.c(),
    S = new s.c(),
    k = new s.c(),
    L = new s.c(),
    N = new s.c(),
    D = new s.c(),
    I = new s.c(),
    E = new s.c(),
    T = new s.c(),
    M = new s.c(),
    A = new s.c(),
    O = new s.c(),
    P = new s.c(),
    R = new s.c(),
    F = new s.c(),
    B = new s.c(),
    V = new s.c(),
    W = new s.c(),
    H = new s.c(),
    z = new s.c(),
    j = new s.c(),
    U = new (class {
      constructor() {
        ((this._map = new Map()), (this._promises = new Map()), (this._onDidChange = new r.Q5()), (this.onDidChange = this._onDidChange.event), (this._colorMap = null));
      }
      fire(e) {
        this._onDidChange.fire({
          changedLanguages: e,
          changedColorMap: !1
        });
      }
      register(e, t) {
        return (this._map.set(e, t), this.fire([e]), (0, a.OF)(() => {
          this._map.get(e) === t && (this._map.delete(e), this.fire([e]));
        }));
      }
      registerPromise(e, t) {
        let i = null,
          n = !1;
        return (this._promises.set(e, t.then(t => {
          (this._promises.delete(e), !n && t && (i = this.register(e, t)));
        })), (0, a.OF)(() => {
          ((n = !0), i && i.dispose());
        }));
      }
      getPromise(e) {
        const t = this.get(e);
        if (t) return Promise.resolve(t);
        const i = this._promises.get(e);
        return i ? i.then(t => this.get(e)) : null;
      }
      get(e) {
        return this._map.get(e) || null;
      }
      setColorMap(e) {
        ((this._colorMap = e), this._onDidChange.fire({
          changedLanguages: Array.from(this._map.keys()),
          changedColorMap: !0
        }));
      }
      getColorMap() {
        return this._colorMap;
      }
      getDefaultBackground() {
        return this._colorMap && this._colorMap.length > 2 ? this._colorMap[2] : null;
      }
    })();
};