module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $J: () => L,
    BH: () => A,
    Bb: () => a,
    Bc: () => T,
    DB: () => E,
    LJ: () => c,
    NY: () => b,
    O7: () => g,
    Zc: () => f,
    d2: () => C,
    gk: () => k,
    hL: () => I,
    hu: () => l,
    n0: () => x,
    y0: () => r
  });
  var n = i(63580),
    o = i(1432),
    s = i(97461);
  const r = 8;
  class a {
    constructor(e) {
      this._values = e;
    }
    hasChanged(e) {
      return this._values[e];
    }
  }
  class l {
    constructor() {
      this._values = [];
    }
    _read(e) {
      return this._values[e];
    }
    get(e) {
      return this._values[e];
    }
    _write(e, t) {
      this._values[e] = t;
    }
  }
  class c {
    constructor() {
      ((this.stableMinimapLayoutInput = null), (this.stableFitMaxMinimapScale = 0), (this.stableFitRemainingWidth = 0));
    }
  }
  class d {
    constructor(e, t, i, n) {
      ((this.id = e), (this.name = t), (this.defaultValue = i), (this.schema = n));
    }
    compute(e, t, i) {
      return i;
    }
  }
  class h {
    constructor(e, t = null) {
      ((this.schema = void 0), (this.id = e), (this.name = "_never_"), (this.defaultValue = void 0), (this.deps = t));
    }
    validate(e) {
      return this.defaultValue;
    }
  }
  class u {
    constructor(e, t, i, n) {
      ((this.id = e), (this.name = t), (this.defaultValue = i), (this.schema = n));
    }
    validate(e) {
      return void 0 === e ? this.defaultValue : e;
    }
    compute(e, t, i) {
      return i;
    }
  }
  function g(e, t) {
    return void 0 === e ? t : "false" !== e && Boolean(e);
  }
  class p extends u {
    constructor(e, t, i, n = void 0) {
      (void 0 !== n && ((n.type = "boolean"), (n.default = i)), super(e, t, i, n));
    }
    validate(e) {
      return g(e, this.defaultValue);
    }
  }
  function f(e, t, i, n) {
    if (void 0 === e) return t;
    let o = parseInt(e, 10);
    return isNaN(o) ? t : ((o = Math.max(i, o)), (o = Math.min(n, o)), 0 | o);
  }
  class m extends u {
    constructor(e, t, i, n, o, s = void 0) {
      (void 0 !== s && ((s.type = "integer"), (s.default = i), (s.minimum = n), (s.maximum = o)), super(e, t, i, s), (this.minimum = n), (this.maximum = o));
    }
    static clampedInt(e, t, i, n) {
      return f(e, t, i, n);
    }
    validate(e) {
      return m.clampedInt(e, this.defaultValue, this.minimum, this.maximum);
    }
  }
  class v extends u {
    constructor(e, t, i, n, o) {
      (void 0 !== o && ((o.type = "number"), (o.default = i)), super(e, t, i, o), (this.validationFn = n));
    }
    static clamp(e, t, i) {
      return e < t ? t : e > i ? i : e;
    }
    static float(e, t) {
      if ("number" == typeof e) return e;
      if (void 0 === e) return t;
      const i = parseFloat(e);
      return isNaN(i) ? t : i;
    }
    validate(e) {
      return this.validationFn(v.float(e, this.defaultValue));
    }
  }
  class _ extends u {
    static string(e, t) {
      return "string" != typeof e ? t : e;
    }
    constructor(e, t, i, n = void 0) {
      (void 0 !== n && ((n.type = "string"), (n.default = i)), super(e, t, i, n));
    }
    validate(e) {
      return _.string(e, this.defaultValue);
    }
  }
  function b(e, t, i) {
    return "string" != typeof e || -1 === i.indexOf(e) ? t : e;
  }
  class w extends u {
    constructor(e, t, i, n, o = void 0) {
      (void 0 !== o && ((o.type = "string"), (o.enum = n), (o.default = i)), super(e, t, i, o), (this._allowedValues = n));
    }
    validate(e) {
      return b(e, this.defaultValue, this._allowedValues);
    }
  }
  class y extends d {
    constructor(e, t, i, n, o, s, r = void 0) {
      (void 0 !== r && ((r.type = "string"), (r.enum = o), (r.default = n)), super(e, t, i, r), (this._allowedValues = o), (this._convert = s));
    }
    validate(e) {
      return "string" != typeof e || -1 === this._allowedValues.indexOf(e) ? this.defaultValue : this._convert(e);
    }
  }
  var C;
  !(function (e) {
    ((e[(e.Line = 1)] = "Line"), (e[(e.Block = 2)] = "Block"), (e[(e.Underline = 3)] = "Underline"), (e[(e.LineThin = 4)] = "LineThin"), (e[(e.BlockOutline = 5)] = "BlockOutline"), (e[(e.UnderlineThin = 6)] = "UnderlineThin"));
  })(C || (C = {}));
  class x extends d {
    constructor() {
      super(44, "fontLigatures", x.OFF, {
        anyOf: [{
          type: "boolean",
          description: n.N("fontLigatures", "Enables/Disables font ligatures ('calt' and 'liga' font features). Change this to a string for fine-grained control of the 'font-feature-settings' CSS property.")
        }, {
          type: "string",
          description: n.N("fontFeatureSettings", "Explicit 'font-feature-settings' CSS property. A boolean can be passed instead if one only needs to turn on/off ligatures.")
        }],
        description: n.N("fontLigaturesGeneral", "Configures font ligatures or font features. Can be either a boolean to enable/disable ligatures or a string for the value of the CSS 'font-feature-settings' property."),
        default: !1
      });
    }
    validate(e) {
      return void 0 === e ? this.defaultValue : "string" == typeof e ? "false" === e ? x.OFF : "true" === e ? x.ON : e : Boolean(e) ? x.ON : x.OFF;
    }
  }
  ((x.OFF = '"liga" off, "calt" off'), (x.ON = '"liga" on, "calt" on'));
  class S extends d {
    constructor() {
      super(46, "fontWeight", I.fontWeight, {
        anyOf: [{
          type: "number",
          minimum: S.MINIMUM_VALUE,
          maximum: S.MAXIMUM_VALUE,
          errorMessage: n.N("fontWeightErrorMessage", 'Only "normal" and "bold" keywords or numbers between 1 and 1000 are allowed.')
        }, {
          type: "string",
          pattern: "^(normal|bold|1000|[1-9][0-9]{0,2})$"
        }, {
          enum: S.SUGGESTION_VALUES
        }],
        default: I.fontWeight,
        description: n.N("fontWeight", 'Controls the font weight. Accepts "normal" and "bold" keywords or numbers between 1 and 1000.')
      });
    }
    validate(e) {
      return "normal" === e || "bold" === e ? e : String(m.clampedInt(e, I.fontWeight, S.MINIMUM_VALUE, S.MAXIMUM_VALUE));
    }
  }
  ((S.SUGGESTION_VALUES = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]), (S.MINIMUM_VALUE = 1), (S.MAXIMUM_VALUE = 1e3));
  class k extends h {
    constructor() {
      super(129, [49, 57, 37, 64, 91, 59, 60, 93, 116, 119, 120, 121, 2]);
    }
    compute(e, t, i) {
      return k.computeLayout(t, {
        memory: e.memory,
        outerWidth: e.outerWidth,
        outerHeight: e.outerHeight,
        isDominatedByLongLines: e.isDominatedByLongLines,
        lineHeight: e.fontInfo.lineHeight,
        viewLineCount: e.viewLineCount,
        lineNumbersDigitCount: e.lineNumbersDigitCount,
        typicalHalfwidthCharacterWidth: e.fontInfo.typicalHalfwidthCharacterWidth,
        maxDigitWidth: e.fontInfo.maxDigitWidth,
        pixelRatio: e.pixelRatio
      });
    }
    static computeContainedMinimapLineCount(e) {
      const t = e.height / e.lineHeight,
        i = e.scrollBeyondLastLine ? t - 1 : 0,
        n = (e.viewLineCount + i) / (e.pixelRatio * e.height);
      return {
        typicalViewportLineCount: t,
        extraLinesBeyondLastLine: i,
        desiredRatio: n,
        minimapLineCount: Math.floor(e.viewLineCount / n)
      };
    }
    static _computeMinimapLayout(e, t) {
      const i = e.outerWidth,
        n = e.outerHeight,
        o = e.pixelRatio;
      if (!e.minimap.enabled) return {
        renderMinimap: 0,
        minimapLeft: 0,
        minimapWidth: 0,
        minimapHeightIsEditorHeight: !1,
        minimapIsSampling: !1,
        minimapScale: 1,
        minimapLineHeight: 1,
        minimapCanvasInnerWidth: 0,
        minimapCanvasInnerHeight: Math.floor(o * n),
        minimapCanvasOuterWidth: 0,
        minimapCanvasOuterHeight: n
      };
      const s = t.stableMinimapLayoutInput,
        a = s && e.outerHeight === s.outerHeight && e.lineHeight === s.lineHeight && e.typicalHalfwidthCharacterWidth === s.typicalHalfwidthCharacterWidth && e.pixelRatio === s.pixelRatio && e.scrollBeyondLastLine === s.scrollBeyondLastLine && e.minimap.enabled === s.minimap.enabled && e.minimap.side === s.minimap.side && e.minimap.size === s.minimap.size && e.minimap.showSlider === s.minimap.showSlider && e.minimap.renderCharacters === s.minimap.renderCharacters && e.minimap.maxColumn === s.minimap.maxColumn && e.minimap.scale === s.minimap.scale && e.verticalScrollbarWidth === s.verticalScrollbarWidth && e.isViewportWrapping === s.isViewportWrapping,
        l = e.lineHeight,
        c = e.typicalHalfwidthCharacterWidth,
        d = e.scrollBeyondLastLine,
        h = e.minimap.renderCharacters;
      let u = o >= 2 ? Math.round(2 * e.minimap.scale) : e.minimap.scale;
      const g = e.minimap.maxColumn,
        p = e.minimap.size,
        f = e.minimap.side,
        m = e.verticalScrollbarWidth,
        v = e.viewLineCount,
        _ = e.remainingWidth,
        b = e.isViewportWrapping,
        w = h ? 2 : 3;
      let y = Math.floor(o * n);
      const C = y / o;
      let x = !1,
        S = !1,
        L = w * u,
        N = u / o,
        D = 1;
      if ("fill" === p || "fit" === p) {
        const {
          typicalViewportLineCount: i,
          extraLinesBeyondLastLine: s,
          desiredRatio: r,
          minimapLineCount: c
        } = k.computeContainedMinimapLineCount({
          viewLineCount: v,
          scrollBeyondLastLine: d,
          height: n,
          lineHeight: l,
          pixelRatio: o
        });
        if (v / c > 1) ((x = !0), (S = !0), (u = 1), (L = 1), (N = u / o));else {
          let n = !1,
            c = u + 1;
          if ("fit" === p) {
            const e = Math.ceil((v + s) * L);
            b && a && _ <= t.stableFitRemainingWidth ? ((n = !0), (c = t.stableFitMaxMinimapScale)) : (n = e > y);
          }
          if ("fill" === p || n) {
            x = !0;
            const n = u;
            ((L = Math.min(l * o, Math.max(1, Math.floor(1 / r)))), b && a && _ <= t.stableFitRemainingWidth && (c = t.stableFitMaxMinimapScale), (u = Math.min(c, Math.max(1, Math.floor(L / w)))), u > n && (D = Math.min(2, u / n)), (N = u / o / D), (y = Math.ceil(Math.max(i, v + s) * L)), b ? ((t.stableMinimapLayoutInput = e), (t.stableFitRemainingWidth = _), (t.stableFitMaxMinimapScale = u)) : ((t.stableMinimapLayoutInput = null), (t.stableFitRemainingWidth = 0)));
          }
        }
      }
      const I = Math.floor(g * N),
        E = Math.min(I, Math.max(0, Math.floor(((_ - m - 2) * N) / (c + N))) + r);
      let T = Math.floor(o * E);
      const M = T / o;
      T = Math.floor(T * D);
      return {
        renderMinimap: h ? 1 : 2,
        minimapLeft: "left" === f ? 0 : i - E - m,
        minimapWidth: E,
        minimapHeightIsEditorHeight: x,
        minimapIsSampling: S,
        minimapScale: u,
        minimapLineHeight: L,
        minimapCanvasInnerWidth: T,
        minimapCanvasInnerHeight: y,
        minimapCanvasOuterWidth: M,
        minimapCanvasOuterHeight: C
      };
    }
    static computeLayout(e, t) {
      const i = 0 | t.outerWidth,
        n = 0 | t.outerHeight,
        o = 0 | t.lineHeight,
        s = 0 | t.lineNumbersDigitCount,
        r = t.typicalHalfwidthCharacterWidth,
        a = t.maxDigitWidth,
        l = t.pixelRatio,
        d = t.viewLineCount,
        h = e.get(121),
        u = "inherit" === h ? e.get(120) : h,
        g = "inherit" === u ? e.get(116) : u,
        p = e.get(119),
        f = e.get(2),
        v = t.isDominatedByLongLines,
        _ = e.get(49),
        b = 0 !== e.get(59).renderType,
        w = e.get(60),
        y = e.get(93),
        C = e.get(64),
        x = e.get(91),
        S = x.verticalScrollbarSize,
        L = x.verticalHasArrows,
        N = x.arrowSize,
        D = x.horizontalScrollbarSize,
        I = e.get(57),
        E = e.get(37);
      let T;
      if ("string" == typeof I && /^\d+(\.\d+)?ch$/.test(I)) {
        const e = parseFloat(I.substr(0, I.length - 2));
        T = m.clampedInt(e * r, 0, 0, 1e3);
      } else T = m.clampedInt(I, 0, 0, 1e3);
      E && (T += 16);
      let M = 0;
      if (b) {
        const e = Math.max(s, w);
        M = Math.round(e * a);
      }
      let A = 0;
      _ && (A = o);
      let O = 0,
        P = O + A,
        R = P + M,
        F = R + T;
      const B = i - A - M - T;
      let V = !1,
        W = !1,
        H = -1;
      2 !== f && ("inherit" === u && v ? ((V = !0), (W = !0)) : "on" === g || "bounded" === g ? (W = !0) : "wordWrapColumn" === g && (H = p));
      const z = k._computeMinimapLayout({
        outerWidth: i,
        outerHeight: n,
        lineHeight: o,
        typicalHalfwidthCharacterWidth: r,
        pixelRatio: l,
        scrollBeyondLastLine: y,
        minimap: C,
        verticalScrollbarWidth: S,
        viewLineCount: d,
        remainingWidth: B,
        isViewportWrapping: W
      }, t.memory || new c());
      0 !== z.renderMinimap && 0 === z.minimapLeft && ((O += z.minimapWidth), (P += z.minimapWidth), (R += z.minimapWidth), (F += z.minimapWidth));
      const j = B - z.minimapWidth,
        U = Math.max(1, Math.floor((j - S - 2) / r)),
        $ = L ? N : 0;
      return (W && ((H = Math.max(1, U)), "bounded" === g && (H = Math.min(H, p))), {
        width: i,
        height: n,
        glyphMarginLeft: O,
        glyphMarginWidth: A,
        lineNumbersLeft: P,
        lineNumbersWidth: M,
        decorationsLeft: R,
        decorationsWidth: T,
        contentLeft: F,
        contentWidth: j,
        minimap: z,
        viewportColumn: U,
        isWordWrapMinified: V,
        isViewportWrapping: W,
        wrappingColumn: H,
        verticalScrollbarWidth: S,
        horizontalScrollbarHeight: D,
        overviewRuler: {
          top: $,
          width: S,
          height: n - 2 * $,
          right: 0
        }
      });
    }
  }
  function L(e) {
    const t = e.get(86);
    return "editable" === t ? e.get(80) : "on" !== t;
  }
  function N(e, t) {
    if ("string" != typeof e) return t;
    switch (e) {
      case "hidden":
        return 2;
      case "visible":
        return 3;
      default:
        return 1;
    }
  }
  function D(e, t, i) {
    const n = i.indexOf(e);
    return -1 === n ? t : i[n];
  }
  const I = {
      fontFamily: o.dz ? "Menlo, Monaco, 'Courier New', monospace" : o.IJ ? "'Droid Sans Mono', 'monospace', monospace, 'Droid Sans Fallback'" : "Consolas, 'Courier New', monospace",
      fontWeight: "normal",
      fontSize: o.dz ? 12 : 14,
      lineHeight: 0,
      letterSpacing: 0
    },
    E = {
      tabSize: 4,
      indentSize: 4,
      insertSpaces: !0,
      detectIndentation: !0,
      trimAutoWhitespace: !0,
      largeFileOptimizations: !0,
      bracketPairColorizationOptions: {
        enabled: !1
      }
    },
    T = [];
  function M(e) {
    return ((T[e.id] = e), e);
  }
  const A = {
    acceptSuggestionOnCommitCharacter: M(new p(0, "acceptSuggestionOnCommitCharacter", !0, {
      markdownDescription: n.N("acceptSuggestionOnCommitCharacter", "Controls whether suggestions should be accepted on commit characters. For example, in JavaScript, the semi-colon (`;`) can be a commit character that accepts a suggestion and types that character.")
    })),
    acceptSuggestionOnEnter: M(new w(1, "acceptSuggestionOnEnter", "on", ["on", "smart", "off"], {
      markdownEnumDescriptions: ["", n.N("acceptSuggestionOnEnterSmart", "Only accept a suggestion with `Enter` when it makes a textual change."), ""],
      markdownDescription: n.N("acceptSuggestionOnEnter", "Controls whether suggestions should be accepted on `Enter`, in addition to `Tab`. Helps to avoid ambiguity between inserting new lines or accepting suggestions.")
    })),
    accessibilitySupport: M(new (class extends d {
      constructor() {
        super(2, "accessibilitySupport", 0, {
          type: "string",
          enum: ["auto", "on", "off"],
          enumDescriptions: [n.N("accessibilitySupport.auto", "The editor will use platform APIs to detect when a Screen Reader is attached."), n.N("accessibilitySupport.on", "The editor will be permanently optimized for usage with a Screen Reader. Word wrapping will be disabled."), n.N("accessibilitySupport.off", "The editor will never be optimized for usage with a Screen Reader.")],
          default: "auto",
          description: n.N("accessibilitySupport", "Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.")
        });
      }
      validate(e) {
        switch (e) {
          case "auto":
            return 0;
          case "off":
            return 1;
          case "on":
            return 2;
        }
        return this.defaultValue;
      }
      compute(e, t, i) {
        return 0 === i ? e.accessibilitySupport : i;
      }
    })()),
    accessibilityPageSize: M(new m(3, "accessibilityPageSize", 10, 1, 1073741824, {
      description: n.N("accessibilityPageSize", "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default.")
    })),
    ariaLabel: M(new _(4, "ariaLabel", n.N("editorViewAccessibleLabel", "Editor content"))),
    autoClosingBrackets: M(new w(5, "autoClosingBrackets", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
      enumDescriptions: ["", n.N("editor.autoClosingBrackets.languageDefined", "Use language configurations to determine when to autoclose brackets."), n.N("editor.autoClosingBrackets.beforeWhitespace", "Autoclose brackets only when the cursor is to the left of whitespace."), ""],
      description: n.N("autoClosingBrackets", "Controls whether the editor should automatically close brackets after the user adds an opening bracket.")
    })),
    autoClosingDelete: M(new w(6, "autoClosingDelete", "auto", ["always", "auto", "never"], {
      enumDescriptions: ["", n.N("editor.autoClosingDelete.auto", "Remove adjacent closing quotes or brackets only if they were automatically inserted."), ""],
      description: n.N("autoClosingDelete", "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.")
    })),
    autoClosingOvertype: M(new w(7, "autoClosingOvertype", "auto", ["always", "auto", "never"], {
      enumDescriptions: ["", n.N("editor.autoClosingOvertype.auto", "Type over closing quotes or brackets only if they were automatically inserted."), ""],
      description: n.N("autoClosingOvertype", "Controls whether the editor should type over closing quotes or brackets.")
    })),
    autoClosingQuotes: M(new w(8, "autoClosingQuotes", "languageDefined", ["always", "languageDefined", "beforeWhitespace", "never"], {
      enumDescriptions: ["", n.N("editor.autoClosingQuotes.languageDefined", "Use language configurations to determine when to autoclose quotes."), n.N("editor.autoClosingQuotes.beforeWhitespace", "Autoclose quotes only when the cursor is to the left of whitespace."), ""],
      description: n.N("autoClosingQuotes", "Controls whether the editor should automatically close quotes after the user adds an opening quote.")
    })),
    autoIndent: M(new y(9, "autoIndent", 4, "full", ["none", "keep", "brackets", "advanced", "full"], function (e) {
      switch (e) {
        case "none":
          return 0;
        case "keep":
          return 1;
        case "brackets":
          return 2;
        case "advanced":
          return 3;
        case "full":
          return 4;
      }
    }, {
      enumDescriptions: [n.N("editor.autoIndent.none", "The editor will not insert indentation automatically."), n.N("editor.autoIndent.keep", "The editor will keep the current line's indentation."), n.N("editor.autoIndent.brackets", "The editor will keep the current line's indentation and honor language defined brackets."), n.N("editor.autoIndent.advanced", "The editor will keep the current line's indentation, honor language defined brackets and invoke special onEnterRules defined by languages."), n.N("editor.autoIndent.full", "The editor will keep the current line's indentation, honor language defined brackets, invoke special onEnterRules defined by languages, and honor indentationRules defined by languages.")],
      description: n.N("autoIndent", "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.")
    })),
    automaticLayout: M(new p(10, "automaticLayout", !1)),
    autoSurround: M(new w(11, "autoSurround", "languageDefined", ["languageDefined", "quotes", "brackets", "never"], {
      enumDescriptions: [n.N("editor.autoSurround.languageDefined", "Use language configurations to determine when to automatically surround selections."), n.N("editor.autoSurround.quotes", "Surround with quotes but not brackets."), n.N("editor.autoSurround.brackets", "Surround with brackets but not quotes."), ""],
      description: n.N("autoSurround", "Controls whether the editor should automatically surround selections when typing quotes or brackets.")
    })),
    bracketPairColorization: M(new (class extends d {
      constructor() {
        const e = {
          enabled: E.bracketPairColorizationOptions.enabled
        };
        super(12, "bracketPairColorization", e, {
          "editor.bracketPairColorization.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("bracketPairColorization.enabled", "Controls whether bracket pair colorization is enabled or not. Use 'workbench.colorCustomizations' to override the bracket highlight colors.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        return {
          enabled: g(e.enabled, this.defaultValue.enabled)
        };
      }
    })()),
    bracketPairGuides: M(new (class extends d {
      constructor() {
        const e = {
          bracketPairs: !1,
          bracketPairsHorizontal: "active",
          highlightActiveBracketPair: !0,
          indentation: !0,
          highlightActiveIndentation: !0
        };
        super(13, "guides", e, {
          "editor.guides.bracketPairs": {
            type: ["boolean", "string"],
            enum: [!0, "active", !1],
            enumDescriptions: [n.N("editor.guides.bracketPairs.true", "Enables bracket pair guides."), n.N("editor.guides.bracketPairs.active", "Enables bracket pair guides only for the active bracket pair."), n.N("editor.guides.bracketPairs.false", "Disables bracket pair guides.")],
            default: e.bracketPairs,
            description: n.N("editor.guides.bracketPairs", "Controls whether bracket pair guides are enabled or not.")
          },
          "editor.guides.bracketPairsHorizontal": {
            type: ["boolean", "string"],
            enum: [!0, "active", !1],
            enumDescriptions: [n.N("editor.guides.bracketPairsHorizontal.true", "Enables horizontal guides as addition to vertical bracket pair guides."), n.N("editor.guides.bracketPairsHorizontal.active", "Enables horizontal guides only for the active bracket pair."), n.N("editor.guides.bracketPairsHorizontal.false", "Disables horizontal bracket pair guides.")],
            default: e.bracketPairsHorizontal,
            description: n.N("editor.guides.bracketPairsHorizontal", "Controls whether horizontal bracket pair guides are enabled or not.")
          },
          "editor.guides.highlightActiveBracketPair": {
            type: "boolean",
            default: e.highlightActiveBracketPair,
            description: n.N("editor.guides.highlightActiveBracketPair", "Controls whether bracket pair guides are enabled or not.")
          },
          "editor.guides.indentation": {
            type: "boolean",
            default: e.indentation,
            description: n.N("editor.guides.indentation", "Controls whether the editor should render indent guides.")
          },
          "editor.guides.highlightActiveIndentation": {
            type: "boolean",
            default: e.highlightActiveIndentation,
            description: n.N("editor.guides.highlightActiveIndentation", "Controls whether the editor should highlight the active indent guide.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          bracketPairs: D(t.bracketPairs, this.defaultValue.bracketPairs, [!0, !1, "active"]),
          bracketPairsHorizontal: D(t.bracketPairsHorizontal, this.defaultValue.bracketPairsHorizontal, [!0, !1, "active"]),
          highlightActiveBracketPair: g(t.highlightActiveBracketPair, this.defaultValue.highlightActiveBracketPair),
          indentation: g(t.indentation, this.defaultValue.indentation),
          highlightActiveIndentation: g(t.highlightActiveIndentation, this.defaultValue.highlightActiveIndentation)
        };
      }
    })()),
    stickyTabStops: M(new p(103, "stickyTabStops", !1, {
      description: n.N("stickyTabStops", "Emulate selection behavior of tab characters when using spaces for indentation. Selection will stick to tab stops.")
    })),
    codeLens: M(new p(14, "codeLens", !0, {
      description: n.N("codeLens", "Controls whether the editor shows CodeLens.")
    })),
    codeLensFontFamily: M(new _(15, "codeLensFontFamily", "", {
      description: n.N("codeLensFontFamily", "Controls the font family for CodeLens.")
    })),
    codeLensFontSize: M(new m(16, "codeLensFontSize", 0, 0, 100, {
      type: "number",
      default: 0,
      minimum: 0,
      maximum: 100,
      markdownDescription: n.N("codeLensFontSize", "Controls the font size in pixels for CodeLens. When set to `0`, the 90% of `#editor.fontSize#` is used.")
    })),
    colorDecorators: M(new p(17, "colorDecorators", !0, {
      description: n.N("colorDecorators", "Controls whether the editor should render the inline color decorators and color picker.")
    })),
    columnSelection: M(new p(18, "columnSelection", !1, {
      description: n.N("columnSelection", "Enable that the selection with the mouse and keys is doing column selection.")
    })),
    comments: M(new (class extends d {
      constructor() {
        const e = {
          insertSpace: !0,
          ignoreEmptyLines: !0
        };
        super(19, "comments", e, {
          "editor.comments.insertSpace": {
            type: "boolean",
            default: e.insertSpace,
            description: n.N("comments.insertSpace", "Controls whether a space character is inserted when commenting.")
          },
          "editor.comments.ignoreEmptyLines": {
            type: "boolean",
            default: e.ignoreEmptyLines,
            description: n.N("comments.ignoreEmptyLines", "Controls if empty lines should be ignored with toggle, add or remove actions for line comments.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          insertSpace: g(t.insertSpace, this.defaultValue.insertSpace),
          ignoreEmptyLines: g(t.ignoreEmptyLines, this.defaultValue.ignoreEmptyLines)
        };
      }
    })()),
    contextmenu: M(new p(20, "contextmenu", !0)),
    copyWithSyntaxHighlighting: M(new p(21, "copyWithSyntaxHighlighting", !0, {
      description: n.N("copyWithSyntaxHighlighting", "Controls whether syntax highlighting should be copied into the clipboard.")
    })),
    cursorBlinking: M(new y(22, "cursorBlinking", 1, "blink", ["blink", "smooth", "phase", "expand", "solid"], function (e) {
      switch (e) {
        case "blink":
          return 1;
        case "smooth":
          return 2;
        case "phase":
          return 3;
        case "expand":
          return 4;
        case "solid":
          return 5;
      }
    }, {
      description: n.N("cursorBlinking", "Control the cursor animation style.")
    })),
    cursorSmoothCaretAnimation: M(new p(23, "cursorSmoothCaretAnimation", !1, {
      description: n.N("cursorSmoothCaretAnimation", "Controls whether the smooth caret animation should be enabled.")
    })),
    cursorStyle: M(new y(24, "cursorStyle", C.Line, "line", ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"], function (e) {
      switch (e) {
        case "line":
          return C.Line;
        case "block":
          return C.Block;
        case "underline":
          return C.Underline;
        case "line-thin":
          return C.LineThin;
        case "block-outline":
          return C.BlockOutline;
        case "underline-thin":
          return C.UnderlineThin;
      }
    }, {
      description: n.N("cursorStyle", "Controls the cursor style.")
    })),
    cursorSurroundingLines: M(new m(25, "cursorSurroundingLines", 0, 0, 1073741824, {
      description: n.N("cursorSurroundingLines", "Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as 'scrollOff' or 'scrollOffset' in some other editors.")
    })),
    cursorSurroundingLinesStyle: M(new w(26, "cursorSurroundingLinesStyle", "default", ["default", "all"], {
      enumDescriptions: [n.N("cursorSurroundingLinesStyle.default", "`cursorSurroundingLines` is enforced only when triggered via the keyboard or API."), n.N("cursorSurroundingLinesStyle.all", "`cursorSurroundingLines` is enforced always.")],
      description: n.N("cursorSurroundingLinesStyle", "Controls when `cursorSurroundingLines` should be enforced.")
    })),
    cursorWidth: M(new m(27, "cursorWidth", 0, 0, 1073741824, {
      markdownDescription: n.N("cursorWidth", "Controls the width of the cursor when `#editor.cursorStyle#` is set to `line`.")
    })),
    disableLayerHinting: M(new p(28, "disableLayerHinting", !1)),
    disableMonospaceOptimizations: M(new p(29, "disableMonospaceOptimizations", !1)),
    domReadOnly: M(new p(30, "domReadOnly", !1)),
    dragAndDrop: M(new p(31, "dragAndDrop", !0, {
      description: n.N("dragAndDrop", "Controls whether the editor should allow moving selections via drag and drop.")
    })),
    emptySelectionClipboard: M(new (class extends p {
      constructor() {
        super(32, "emptySelectionClipboard", !0, {
          description: n.N("emptySelectionClipboard", "Controls whether copying without a selection copies the current line.")
        });
      }
      compute(e, t, i) {
        return i && e.emptySelectionClipboard;
      }
    })()),
    extraEditorClassName: M(new _(33, "extraEditorClassName", "")),
    fastScrollSensitivity: M(new v(34, "fastScrollSensitivity", 5, e => (e <= 0 ? 5 : e), {
      markdownDescription: n.N("fastScrollSensitivity", "Scrolling speed multiplier when pressing `Alt`.")
    })),
    find: M(new (class extends d {
      constructor() {
        const e = {
          cursorMoveOnType: !0,
          seedSearchStringFromSelection: "always",
          autoFindInSelection: "never",
          globalFindClipboard: !1,
          addExtraSpaceOnTop: !0,
          loop: !0
        };
        super(35, "find", e, {
          "editor.find.cursorMoveOnType": {
            type: "boolean",
            default: e.cursorMoveOnType,
            description: n.N("find.cursorMoveOnType", "Controls whether the cursor should jump to find matches while typing.")
          },
          "editor.find.seedSearchStringFromSelection": {
            type: "string",
            enum: ["never", "always", "selection"],
            default: e.seedSearchStringFromSelection,
            enumDescriptions: [n.N("editor.find.seedSearchStringFromSelection.never", "Never seed search string from the editor selection."), n.N("editor.find.seedSearchStringFromSelection.always", "Always seed search string from the editor selection, including word at cursor position."), n.N("editor.find.seedSearchStringFromSelection.selection", "Only seed search string from the editor selection.")],
            description: n.N("find.seedSearchStringFromSelection", "Controls whether the search string in the Find Widget is seeded from the editor selection.")
          },
          "editor.find.autoFindInSelection": {
            type: "string",
            enum: ["never", "always", "multiline"],
            default: e.autoFindInSelection,
            enumDescriptions: [n.N("editor.find.autoFindInSelection.never", "Never turn on Find in Selection automatically (default)."), n.N("editor.find.autoFindInSelection.always", "Always turn on Find in Selection automatically."), n.N("editor.find.autoFindInSelection.multiline", "Turn on Find in Selection automatically when multiple lines of content are selected.")],
            description: n.N("find.autoFindInSelection", "Controls the condition for turning on Find in Selection automatically.")
          },
          "editor.find.globalFindClipboard": {
            type: "boolean",
            default: e.globalFindClipboard,
            description: n.N("find.globalFindClipboard", "Controls whether the Find Widget should read or modify the shared find clipboard on macOS."),
            included: o.dz
          },
          "editor.find.addExtraSpaceOnTop": {
            type: "boolean",
            default: e.addExtraSpaceOnTop,
            description: n.N("find.addExtraSpaceOnTop", "Controls whether the Find Widget should add extra lines on top of the editor. When true, you can scroll beyond the first line when the Find Widget is visible.")
          },
          "editor.find.loop": {
            type: "boolean",
            default: e.loop,
            description: n.N("find.loop", "Controls whether the search automatically restarts from the beginning (or the end) when no further matches can be found.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          cursorMoveOnType: g(t.cursorMoveOnType, this.defaultValue.cursorMoveOnType),
          seedSearchStringFromSelection: "boolean" == typeof e.seedSearchStringFromSelection ? e.seedSearchStringFromSelection ? "always" : "never" : b(t.seedSearchStringFromSelection, this.defaultValue.seedSearchStringFromSelection, ["never", "always", "selection"]),
          autoFindInSelection: "boolean" == typeof e.autoFindInSelection ? e.autoFindInSelection ? "always" : "never" : b(t.autoFindInSelection, this.defaultValue.autoFindInSelection, ["never", "always", "multiline"]),
          globalFindClipboard: g(t.globalFindClipboard, this.defaultValue.globalFindClipboard),
          addExtraSpaceOnTop: g(t.addExtraSpaceOnTop, this.defaultValue.addExtraSpaceOnTop),
          loop: g(t.loop, this.defaultValue.loop)
        };
      }
    })()),
    fixedOverflowWidgets: M(new p(36, "fixedOverflowWidgets", !1)),
    folding: M(new p(37, "folding", !0, {
      description: n.N("folding", "Controls whether the editor has code folding enabled.")
    })),
    foldingStrategy: M(new w(38, "foldingStrategy", "auto", ["auto", "indentation"], {
      enumDescriptions: [n.N("foldingStrategy.auto", "Use a language-specific folding strategy if available, else the indentation-based one."), n.N("foldingStrategy.indentation", "Use the indentation-based folding strategy.")],
      description: n.N("foldingStrategy", "Controls the strategy for computing folding ranges.")
    })),
    foldingHighlight: M(new p(39, "foldingHighlight", !0, {
      description: n.N("foldingHighlight", "Controls whether the editor should highlight folded ranges.")
    })),
    foldingImportsByDefault: M(new p(40, "foldingImportsByDefault", !1, {
      description: n.N("foldingImportsByDefault", "Controls whether the editor automatically collapses import ranges.")
    })),
    unfoldOnClickAfterEndOfLine: M(new p(41, "unfoldOnClickAfterEndOfLine", !1, {
      description: n.N("unfoldOnClickAfterEndOfLine", "Controls whether clicking on the empty content after a folded line will unfold the line.")
    })),
    fontFamily: M(new _(42, "fontFamily", I.fontFamily, {
      description: n.N("fontFamily", "Controls the font family.")
    })),
    fontInfo: M(new (class extends h {
      constructor() {
        super(43);
      }
      compute(e, t, i) {
        return e.fontInfo;
      }
    })()),
    fontLigatures2: M(new x()),
    fontSize: M(new (class extends u {
      constructor() {
        super(45, "fontSize", I.fontSize, {
          type: "number",
          minimum: 6,
          maximum: 100,
          default: I.fontSize,
          description: n.N("fontSize", "Controls the font size in pixels.")
        });
      }
      validate(e) {
        let t = v.float(e, this.defaultValue);
        return 0 === t ? I.fontSize : v.clamp(t, 6, 100);
      }
      compute(e, t, i) {
        return e.fontInfo.fontSize;
      }
    })()),
    fontWeight: M(new S()),
    formatOnPaste: M(new p(47, "formatOnPaste", !1, {
      description: n.N("formatOnPaste", "Controls whether the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.")
    })),
    formatOnType: M(new p(48, "formatOnType", !1, {
      description: n.N("formatOnType", "Controls whether the editor should automatically format the line after typing.")
    })),
    glyphMargin: M(new p(49, "glyphMargin", !0, {
      description: n.N("glyphMargin", "Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.")
    })),
    gotoLocation: M(new (class extends d {
      constructor() {
        const e = {
            multiple: "peek",
            multipleDefinitions: "peek",
            multipleTypeDefinitions: "peek",
            multipleDeclarations: "peek",
            multipleImplementations: "peek",
            multipleReferences: "peek",
            alternativeDefinitionCommand: "editor.action.goToReferences",
            alternativeTypeDefinitionCommand: "editor.action.goToReferences",
            alternativeDeclarationCommand: "editor.action.goToReferences",
            alternativeImplementationCommand: "",
            alternativeReferenceCommand: ""
          },
          t = {
            type: "string",
            enum: ["peek", "gotoAndPeek", "goto"],
            default: e.multiple,
            enumDescriptions: [n.N("editor.gotoLocation.multiple.peek", "Show peek view of the results (default)"), n.N("editor.gotoLocation.multiple.gotoAndPeek", "Go to the primary result and show a peek view"), n.N("editor.gotoLocation.multiple.goto", "Go to the primary result and enable peek-less navigation to others")]
          },
          i = ["", "editor.action.referenceSearch.trigger", "editor.action.goToReferences", "editor.action.peekImplementation", "editor.action.goToImplementation", "editor.action.peekTypeDefinition", "editor.action.goToTypeDefinition", "editor.action.peekDeclaration", "editor.action.revealDeclaration", "editor.action.peekDefinition", "editor.action.revealDefinitionAside", "editor.action.revealDefinition"];
        super(50, "gotoLocation", e, {
          "editor.gotoLocation.multiple": {
            deprecationMessage: n.N("editor.gotoLocation.multiple.deprecated", "This setting is deprecated, please use separate settings like 'editor.editor.gotoLocation.multipleDefinitions' or 'editor.editor.gotoLocation.multipleImplementations' instead.")
          },
          "editor.gotoLocation.multipleDefinitions": Object.assign({
            description: n.N("editor.editor.gotoLocation.multipleDefinitions", "Controls the behavior the 'Go to Definition'-command when multiple target locations exist.")
          }, t),
          "editor.gotoLocation.multipleTypeDefinitions": Object.assign({
            description: n.N("editor.editor.gotoLocation.multipleTypeDefinitions", "Controls the behavior the 'Go to Type Definition'-command when multiple target locations exist.")
          }, t),
          "editor.gotoLocation.multipleDeclarations": Object.assign({
            description: n.N("editor.editor.gotoLocation.multipleDeclarations", "Controls the behavior the 'Go to Declaration'-command when multiple target locations exist.")
          }, t),
          "editor.gotoLocation.multipleImplementations": Object.assign({
            description: n.N("editor.editor.gotoLocation.multipleImplemenattions", "Controls the behavior the 'Go to Implementations'-command when multiple target locations exist.")
          }, t),
          "editor.gotoLocation.multipleReferences": Object.assign({
            description: n.N("editor.editor.gotoLocation.multipleReferences", "Controls the behavior the 'Go to References'-command when multiple target locations exist.")
          }, t),
          "editor.gotoLocation.alternativeDefinitionCommand": {
            type: "string",
            default: e.alternativeDefinitionCommand,
            enum: i,
            description: n.N("alternativeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Definition' is the current location.")
          },
          "editor.gotoLocation.alternativeTypeDefinitionCommand": {
            type: "string",
            default: e.alternativeTypeDefinitionCommand,
            enum: i,
            description: n.N("alternativeTypeDefinitionCommand", "Alternative command id that is being executed when the result of 'Go to Type Definition' is the current location.")
          },
          "editor.gotoLocation.alternativeDeclarationCommand": {
            type: "string",
            default: e.alternativeDeclarationCommand,
            enum: i,
            description: n.N("alternativeDeclarationCommand", "Alternative command id that is being executed when the result of 'Go to Declaration' is the current location.")
          },
          "editor.gotoLocation.alternativeImplementationCommand": {
            type: "string",
            default: e.alternativeImplementationCommand,
            enum: i,
            description: n.N("alternativeImplementationCommand", "Alternative command id that is being executed when the result of 'Go to Implementation' is the current location.")
          },
          "editor.gotoLocation.alternativeReferenceCommand": {
            type: "string",
            default: e.alternativeReferenceCommand,
            enum: i,
            description: n.N("alternativeReferenceCommand", "Alternative command id that is being executed when the result of 'Go to Reference' is the current location.")
          }
        });
      }
      validate(e) {
        var t, i, n, o, s;
        if (!e || "object" != typeof e) return this.defaultValue;
        const r = e;
        return {
          multiple: b(r.multiple, this.defaultValue.multiple, ["peek", "gotoAndPeek", "goto"]),
          multipleDefinitions: null !== (t = r.multipleDefinitions) && void 0 !== t ? t : b(r.multipleDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
          multipleTypeDefinitions: null !== (i = r.multipleTypeDefinitions) && void 0 !== i ? i : b(r.multipleTypeDefinitions, "peek", ["peek", "gotoAndPeek", "goto"]),
          multipleDeclarations: null !== (n = r.multipleDeclarations) && void 0 !== n ? n : b(r.multipleDeclarations, "peek", ["peek", "gotoAndPeek", "goto"]),
          multipleImplementations: null !== (o = r.multipleImplementations) && void 0 !== o ? o : b(r.multipleImplementations, "peek", ["peek", "gotoAndPeek", "goto"]),
          multipleReferences: null !== (s = r.multipleReferences) && void 0 !== s ? s : b(r.multipleReferences, "peek", ["peek", "gotoAndPeek", "goto"]),
          alternativeDefinitionCommand: _.string(r.alternativeDefinitionCommand, this.defaultValue.alternativeDefinitionCommand),
          alternativeTypeDefinitionCommand: _.string(r.alternativeTypeDefinitionCommand, this.defaultValue.alternativeTypeDefinitionCommand),
          alternativeDeclarationCommand: _.string(r.alternativeDeclarationCommand, this.defaultValue.alternativeDeclarationCommand),
          alternativeImplementationCommand: _.string(r.alternativeImplementationCommand, this.defaultValue.alternativeImplementationCommand),
          alternativeReferenceCommand: _.string(r.alternativeReferenceCommand, this.defaultValue.alternativeReferenceCommand)
        };
      }
    })()),
    hideCursorInOverviewRuler: M(new p(51, "hideCursorInOverviewRuler", !1, {
      description: n.N("hideCursorInOverviewRuler", "Controls whether the cursor should be hidden in the overview ruler.")
    })),
    hover: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0,
          delay: 300,
          sticky: !0,
          above: !0
        };
        super(52, "hover", e, {
          "editor.hover.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("hover.enabled", "Controls whether the hover is shown.")
          },
          "editor.hover.delay": {
            type: "number",
            default: e.delay,
            description: n.N("hover.delay", "Controls the delay in milliseconds after which the hover is shown.")
          },
          "editor.hover.sticky": {
            type: "boolean",
            default: e.sticky,
            description: n.N("hover.sticky", "Controls whether the hover should remain visible when mouse is moved over it.")
          },
          "editor.hover.above": {
            type: "boolean",
            default: e.above,
            description: n.N("hover.above", "Prefer showing hovers above the line, if there's space.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          enabled: g(t.enabled, this.defaultValue.enabled),
          delay: m.clampedInt(t.delay, this.defaultValue.delay, 0, 1e4),
          sticky: g(t.sticky, this.defaultValue.sticky),
          above: g(t.above, this.defaultValue.above)
        };
      }
    })()),
    inDiffEditor: M(new p(53, "inDiffEditor", !1)),
    letterSpacing: M(new v(55, "letterSpacing", I.letterSpacing, e => v.clamp(e, -5, 20), {
      description: n.N("letterSpacing", "Controls the letter spacing in pixels.")
    })),
    lightbulb: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0
        };
        super(56, "lightbulb", e, {
          "editor.lightbulb.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("codeActions", "Enables the code action lightbulb in the editor.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        return {
          enabled: g(e.enabled, this.defaultValue.enabled)
        };
      }
    })()),
    lineDecorationsWidth: M(new u(57, "lineDecorationsWidth", 10)),
    lineHeight: M(new (class extends v {
      constructor() {
        super(58, "lineHeight", I.lineHeight, e => v.clamp(e, 0, 150), {
          markdownDescription: n.N("lineHeight", "Controls the line height. \n - Use 0 to automatically compute the line height from the font size.\n - Values between 0 and 8 will be used as a multiplier with the font size.\n - Values greater than or equal to 8 will be used as effective values.")
        });
      }
      compute(e, t, i) {
        return e.fontInfo.lineHeight;
      }
    })()),
    lineNumbers: M(new (class extends d {
      constructor() {
        super(59, "lineNumbers", {
          renderType: 1,
          renderFn: null
        }, {
          type: "string",
          enum: ["off", "on", "relative", "interval"],
          enumDescriptions: [n.N("lineNumbers.off", "Line numbers are not rendered."), n.N("lineNumbers.on", "Line numbers are rendered as absolute number."), n.N("lineNumbers.relative", "Line numbers are rendered as distance in lines to cursor position."), n.N("lineNumbers.interval", "Line numbers are rendered every 10 lines.")],
          default: "on",
          description: n.N("lineNumbers", "Controls the display of line numbers.")
        });
      }
      validate(e) {
        let t = this.defaultValue.renderType,
          i = this.defaultValue.renderFn;
        return (void 0 !== e && ("function" == typeof e ? ((t = 4), (i = e)) : (t = "interval" === e ? 3 : "relative" === e ? 2 : "on" === e ? 1 : 0)), {
          renderType: t,
          renderFn: i
        });
      }
    })()),
    lineNumbersMinChars: M(new m(60, "lineNumbersMinChars", 5, 1, 300)),
    linkedEditing: M(new p(61, "linkedEditing", !1, {
      description: n.N("linkedEditing", "Controls whether the editor has linked editing enabled. Depending on the language, related symbols, e.g. HTML tags, are updated while editing.")
    })),
    links: M(new p(62, "links", !0, {
      description: n.N("links", "Controls whether the editor should detect links and make them clickable.")
    })),
    matchBrackets: M(new w(63, "matchBrackets", "always", ["always", "near", "never"], {
      description: n.N("matchBrackets", "Highlight matching brackets.")
    })),
    minimap: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0,
          size: "proportional",
          side: "right",
          showSlider: "mouseover",
          renderCharacters: !0,
          maxColumn: 120,
          scale: 1
        };
        super(64, "minimap", e, {
          "editor.minimap.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("minimap.enabled", "Controls whether the minimap is shown.")
          },
          "editor.minimap.size": {
            type: "string",
            enum: ["proportional", "fill", "fit"],
            enumDescriptions: [n.N("minimap.size.proportional", "The minimap has the same size as the editor contents (and might scroll)."), n.N("minimap.size.fill", "The minimap will stretch or shrink as necessary to fill the height of the editor (no scrolling)."), n.N("minimap.size.fit", "The minimap will shrink as necessary to never be larger than the editor (no scrolling).")],
            default: e.size,
            description: n.N("minimap.size", "Controls the size of the minimap.")
          },
          "editor.minimap.side": {
            type: "string",
            enum: ["left", "right"],
            default: e.side,
            description: n.N("minimap.side", "Controls the side where to render the minimap.")
          },
          "editor.minimap.showSlider": {
            type: "string",
            enum: ["always", "mouseover"],
            default: e.showSlider,
            description: n.N("minimap.showSlider", "Controls when the minimap slider is shown.")
          },
          "editor.minimap.scale": {
            type: "number",
            default: e.scale,
            minimum: 1,
            maximum: 3,
            enum: [1, 2, 3],
            description: n.N("minimap.scale", "Scale of content drawn in the minimap: 1, 2 or 3.")
          },
          "editor.minimap.renderCharacters": {
            type: "boolean",
            default: e.renderCharacters,
            description: n.N("minimap.renderCharacters", "Render the actual characters on a line as opposed to color blocks.")
          },
          "editor.minimap.maxColumn": {
            type: "number",
            default: e.maxColumn,
            description: n.N("minimap.maxColumn", "Limit the width of the minimap to render at most a certain number of columns.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          enabled: g(t.enabled, this.defaultValue.enabled),
          size: b(t.size, this.defaultValue.size, ["proportional", "fill", "fit"]),
          side: b(t.side, this.defaultValue.side, ["right", "left"]),
          showSlider: b(t.showSlider, this.defaultValue.showSlider, ["always", "mouseover"]),
          renderCharacters: g(t.renderCharacters, this.defaultValue.renderCharacters),
          scale: m.clampedInt(t.scale, 1, 1, 3),
          maxColumn: m.clampedInt(t.maxColumn, this.defaultValue.maxColumn, 1, 1e4)
        };
      }
    })()),
    mouseStyle: M(new w(65, "mouseStyle", "text", ["text", "default", "copy"])),
    mouseWheelScrollSensitivity: M(new v(66, "mouseWheelScrollSensitivity", 1, e => (0 === e ? 1 : e), {
      markdownDescription: n.N("mouseWheelScrollSensitivity", "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.")
    })),
    mouseWheelZoom: M(new p(67, "mouseWheelZoom", !1, {
      markdownDescription: n.N("mouseWheelZoom", "Zoom the font of the editor when using mouse wheel and holding `Ctrl`.")
    })),
    multiCursorMergeOverlapping: M(new p(68, "multiCursorMergeOverlapping", !0, {
      description: n.N("multiCursorMergeOverlapping", "Merge multiple cursors when they are overlapping.")
    })),
    multiCursorModifier: M(new y(69, "multiCursorModifier", "altKey", "alt", ["ctrlCmd", "alt"], function (e) {
      return "ctrlCmd" === e ? (o.dz ? "metaKey" : "ctrlKey") : "altKey";
    }, {
      markdownEnumDescriptions: [n.N("multiCursorModifier.ctrlCmd", "Maps to `Control` on Windows and Linux and to `Command` on macOS."), n.N("multiCursorModifier.alt", "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")],
      markdownDescription: n.N({
        key: "multiCursorModifier",
        comment: ["- `ctrlCmd` refers to a value the setting can take and should not be localized.", "- `Control` and `Command` refer to the modifier keys Ctrl or Cmd on the keyboard and can be localized."]
      }, "The modifier to be used to add multiple cursors with the mouse. The 前往 Definition and Open Link mouse gestures will adapt such that they do not conflict with the multicursor modifier. [Read more](https://code.visualstudio.com/docs/editor/codebasics#_multicursor-modifier).")
    })),
    multiCursorPaste: M(new w(70, "multiCursorPaste", "spread", ["spread", "full"], {
      markdownEnumDescriptions: [n.N("multiCursorPaste.spread", "Each cursor pastes a single line of the text."), n.N("multiCursorPaste.full", "Each cursor pastes the full text.")],
      markdownDescription: n.N("multiCursorPaste", "Controls pasting when the line count of the pasted text matches the cursor count.")
    })),
    occurrencesHighlight: M(new p(71, "occurrencesHighlight", !0, {
      description: n.N("occurrencesHighlight", "Controls whether the editor should highlight semantic symbol occurrences.")
    })),
    overviewRulerBorder: M(new p(72, "overviewRulerBorder", !0, {
      description: n.N("overviewRulerBorder", "Controls whether a border should be drawn around the overview ruler.")
    })),
    overviewRulerLanes: M(new m(73, "overviewRulerLanes", 3, 0, 3)),
    padding: M(new (class extends d {
      constructor() {
        super(74, "padding", {
          top: 0,
          bottom: 0
        }, {
          "editor.padding.top": {
            type: "number",
            default: 0,
            minimum: 0,
            maximum: 1e3,
            description: n.N("padding.top", "Controls the amount of space between the top edge of the editor and the first line.")
          },
          "editor.padding.bottom": {
            type: "number",
            default: 0,
            minimum: 0,
            maximum: 1e3,
            description: n.N("padding.bottom", "Controls the amount of space between the bottom edge of the editor and the last line.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          top: m.clampedInt(t.top, 0, 0, 1e3),
          bottom: m.clampedInt(t.bottom, 0, 0, 1e3)
        };
      }
    })()),
    parameterHints: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0,
          cycle: !1
        };
        super(75, "parameterHints", e, {
          "editor.parameterHints.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("parameterHints.enabled", "Enables a pop-up that shows parameter documentation and type information as you type.")
          },
          "editor.parameterHints.cycle": {
            type: "boolean",
            default: e.cycle,
            description: n.N("parameterHints.cycle", "Controls whether the parameter hints menu cycles or closes when reaching the end of the list.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          enabled: g(t.enabled, this.defaultValue.enabled),
          cycle: g(t.cycle, this.defaultValue.cycle)
        };
      }
    })()),
    peekWidgetDefaultFocus: M(new w(76, "peekWidgetDefaultFocus", "tree", ["tree", "editor"], {
      enumDescriptions: [n.N("peekWidgetDefaultFocus.tree", "Focus the tree when opening peek"), n.N("peekWidgetDefaultFocus.editor", "Focus the editor when opening peek")],
      description: n.N("peekWidgetDefaultFocus", "Controls whether to focus the inline editor or the tree in the peek widget.")
    })),
    definitionLinkOpensInPeek: M(new p(77, "definitionLinkOpensInPeek", !1, {
      description: n.N("definitionLinkOpensInPeek", "Controls whether the 前往 Definition mouse gesture always opens the peek widget.")
    })),
    quickSuggestions: M(new (class extends d {
      constructor() {
        const e = {
          other: !0,
          comments: !1,
          strings: !1
        };
        (super(78, "quickSuggestions", e, {
          anyOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              strings: {
                type: "boolean",
                default: e.strings,
                description: n.N("quickSuggestions.strings", "Enable quick suggestions inside strings.")
              },
              comments: {
                type: "boolean",
                default: e.comments,
                description: n.N("quickSuggestions.comments", "Enable quick suggestions inside comments.")
              },
              other: {
                type: "boolean",
                default: e.other,
                description: n.N("quickSuggestions.other", "Enable quick suggestions outside of strings and comments.")
              }
            }
          }],
          default: e,
          description: n.N("quickSuggestions", "Controls whether suggestions should automatically show up while typing.")
        }), (this.defaultValue = e));
      }
      validate(e) {
        if ("boolean" == typeof e) return e;
        if (e && "object" == typeof e) {
          const t = e,
            i = {
              other: g(t.other, this.defaultValue.other),
              comments: g(t.comments, this.defaultValue.comments),
              strings: g(t.strings, this.defaultValue.strings)
            };
          return (!!(i.other && i.comments && i.strings) || (!!(i.other || i.comments || i.strings) && i));
        }
        return this.defaultValue;
      }
    })()),
    quickSuggestionsDelay: M(new m(79, "quickSuggestionsDelay", 10, 0, 1073741824, {
      description: n.N("quickSuggestionsDelay", "Controls the delay in milliseconds after which quick suggestions will show up.")
    })),
    readOnly: M(new p(80, "readOnly", !1)),
    renameOnType: M(new p(81, "renameOnType", !1, {
      description: n.N("renameOnType", "Controls whether the editor auto renames on type."),
      markdownDeprecationMessage: n.N("renameOnTypeDeprecate", "Deprecated, use `editor.linkedEditing` instead.")
    })),
    renderControlCharacters: M(new p(82, "renderControlCharacters", !0, {
      description: n.N("renderControlCharacters", "Controls whether the editor should render control characters."),
      restricted: !0
    })),
    renderFinalNewline: M(new p(83, "renderFinalNewline", !0, {
      description: n.N("renderFinalNewline", "Render last line number when the file ends with a newline.")
    })),
    renderLineHighlight: M(new w(84, "renderLineHighlight", "line", ["none", "gutter", "line", "all"], {
      enumDescriptions: ["", "", "", n.N("renderLineHighlight.all", "Highlights both the gutter and the current line.")],
      description: n.N("renderLineHighlight", "Controls how the editor should render the current line highlight.")
    })),
    renderLineHighlightOnlyWhenFocus: M(new p(85, "renderLineHighlightOnlyWhenFocus", !1, {
      description: n.N("renderLineHighlightOnlyWhenFocus", "Controls if the editor should render the current line highlight only when the editor is focused.")
    })),
    renderValidationDecorations: M(new w(86, "renderValidationDecorations", "editable", ["editable", "on", "off"])),
    renderWhitespace: M(new w(87, "renderWhitespace", "selection", ["none", "boundary", "selection", "trailing", "all"], {
      enumDescriptions: ["", n.N("renderWhitespace.boundary", "Render whitespace characters except for single spaces between words."), n.N("renderWhitespace.selection", "Render whitespace characters only on selected text."), n.N("renderWhitespace.trailing", "Render only trailing whitespace characters."), ""],
      description: n.N("renderWhitespace", "Controls how the editor should render whitespace characters.")
    })),
    revealHorizontalRightPadding: M(new m(88, "revealHorizontalRightPadding", 30, 0, 1e3)),
    roundedSelection: M(new p(89, "roundedSelection", !0, {
      description: n.N("roundedSelection", "Controls whether selections should have rounded corners.")
    })),
    rulers: M(new (class extends d {
      constructor() {
        const e = [],
          t = {
            type: "number",
            description: n.N("rulers.size", "Number of monospace characters at which this editor ruler will render.")
          };
        super(90, "rulers", e, {
          type: "array",
          items: {
            anyOf: [t, {
              type: ["object"],
              properties: {
                column: t,
                color: {
                  type: "string",
                  description: n.N("rulers.color", "Color of this editor ruler."),
                  format: "color-hex"
                }
              }
            }]
          },
          default: e,
          description: n.N("rulers", "Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers. No rulers are drawn if array is empty.")
        });
      }
      validate(e) {
        if (Array.isArray(e)) {
          let t = [];
          for (let i of e) if ("number" == typeof i) t.push({
            column: m.clampedInt(i, 0, 0, 1e4),
            color: null
          });else if (i && "object" == typeof i) {
            const e = i;
            t.push({
              column: m.clampedInt(e.column, 0, 0, 1e4),
              color: e.color
            });
          }
          return (t.sort((e, t) => e.column - t.column), t);
        }
        return this.defaultValue;
      }
    })()),
    scrollbar: M(new (class extends d {
      constructor() {
        const e = {
          vertical: 1,
          horizontal: 1,
          arrowSize: 11,
          useShadows: !0,
          verticalHasArrows: !1,
          horizontalHasArrows: !1,
          horizontalScrollbarSize: 12,
          horizontalSliderSize: 12,
          verticalScrollbarSize: 14,
          verticalSliderSize: 14,
          handleMouseWheel: !0,
          alwaysConsumeMouseWheel: !0,
          scrollByPage: !1
        };
        super(91, "scrollbar", e, {
          "editor.scrollbar.vertical": {
            type: "string",
            enum: ["auto", "visible", "hidden"],
            enumDescriptions: [n.N("scrollbar.vertical.auto", "The vertical scrollbar will be visible only when necessary."), n.N("scrollbar.vertical.visible", "The vertical scrollbar will always be visible."), n.N("scrollbar.vertical.fit", "The vertical scrollbar will always be hidden.")],
            default: "auto",
            description: n.N("scrollbar.vertical", "Controls the visibility of the vertical scrollbar.")
          },
          "editor.scrollbar.horizontal": {
            type: "string",
            enum: ["auto", "visible", "hidden"],
            enumDescriptions: [n.N("scrollbar.horizontal.auto", "The horizontal scrollbar will be visible only when necessary."), n.N("scrollbar.horizontal.visible", "The horizontal scrollbar will always be visible."), n.N("scrollbar.horizontal.fit", "The horizontal scrollbar will always be hidden.")],
            default: "auto",
            description: n.N("scrollbar.horizontal", "Controls the visibility of the horizontal scrollbar.")
          },
          "editor.scrollbar.verticalScrollbarSize": {
            type: "number",
            default: e.verticalScrollbarSize,
            description: n.N("scrollbar.verticalScrollbarSize", "The width of the vertical scrollbar.")
          },
          "editor.scrollbar.horizontalScrollbarSize": {
            type: "number",
            default: e.horizontalScrollbarSize,
            description: n.N("scrollbar.horizontalScrollbarSize", "The height of the horizontal scrollbar.")
          },
          "editor.scrollbar.scrollByPage": {
            type: "boolean",
            default: e.scrollByPage,
            description: n.N("scrollbar.scrollByPage", "Controls whether clicks scroll by page or jump to click position.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e,
          i = m.clampedInt(t.horizontalScrollbarSize, this.defaultValue.horizontalScrollbarSize, 0, 1e3),
          n = m.clampedInt(t.verticalScrollbarSize, this.defaultValue.verticalScrollbarSize, 0, 1e3);
        return {
          arrowSize: m.clampedInt(t.arrowSize, this.defaultValue.arrowSize, 0, 1e3),
          vertical: N(t.vertical, this.defaultValue.vertical),
          horizontal: N(t.horizontal, this.defaultValue.horizontal),
          useShadows: g(t.useShadows, this.defaultValue.useShadows),
          verticalHasArrows: g(t.verticalHasArrows, this.defaultValue.verticalHasArrows),
          horizontalHasArrows: g(t.horizontalHasArrows, this.defaultValue.horizontalHasArrows),
          handleMouseWheel: g(t.handleMouseWheel, this.defaultValue.handleMouseWheel),
          alwaysConsumeMouseWheel: g(t.alwaysConsumeMouseWheel, this.defaultValue.alwaysConsumeMouseWheel),
          horizontalScrollbarSize: i,
          horizontalSliderSize: m.clampedInt(t.horizontalSliderSize, i, 0, 1e3),
          verticalScrollbarSize: n,
          verticalSliderSize: m.clampedInt(t.verticalSliderSize, n, 0, 1e3),
          scrollByPage: g(t.scrollByPage, this.defaultValue.scrollByPage)
        };
      }
    })()),
    scrollBeyondLastColumn: M(new m(92, "scrollBeyondLastColumn", 5, 0, 1073741824, {
      description: n.N("scrollBeyondLastColumn", "Controls the number of extra characters beyond which the editor will scroll horizontally.")
    })),
    scrollBeyondLastLine: M(new p(93, "scrollBeyondLastLine", !0, {
      description: n.N("scrollBeyondLastLine", "Controls whether the editor will scroll beyond the last line.")
    })),
    scrollPredominantAxis: M(new p(94, "scrollPredominantAxis", !0, {
      description: n.N("scrollPredominantAxis", "Scroll only along the predominant axis when scrolling both vertically and horizontally at the same time. Prevents horizontal drift when scrolling vertically on a trackpad.")
    })),
    selectionClipboard: M(new p(95, "selectionClipboard", !0, {
      description: n.N("selectionClipboard", "Controls whether the Linux primary clipboard should be supported."),
      included: o.IJ
    })),
    selectionHighlight: M(new p(96, "selectionHighlight", !0, {
      description: n.N("selectionHighlight", "Controls whether the editor should highlight matches similar to the selection.")
    })),
    selectOnLineNumbers: M(new p(97, "selectOnLineNumbers", !0)),
    showFoldingControls: M(new w(98, "showFoldingControls", "mouseover", ["always", "mouseover"], {
      enumDescriptions: [n.N("showFoldingControls.always", "Always show the folding controls."), n.N("showFoldingControls.mouseover", "Only show the folding controls when the mouse is over the gutter.")],
      description: n.N("showFoldingControls", "Controls when the folding controls on the gutter are shown.")
    })),
    showUnused: M(new p(99, "showUnused", !0, {
      description: n.N("showUnused", "Controls fading out of unused code.")
    })),
    showDeprecated: M(new p(124, "showDeprecated", !0, {
      description: n.N("showDeprecated", "Controls strikethrough deprecated variables.")
    })),
    inlayHints: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0,
          fontSize: 0,
          fontFamily: ""
        };
        super(125, "inlayHints", e, {
          "editor.inlayHints.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("inlayHints.enable", "Enables the inlay hints in the editor.")
          },
          "editor.inlayHints.fontSize": {
            type: "number",
            default: e.fontSize,
            markdownDescription: n.N("inlayHints.fontSize", "Controls font size of inlay hints in the editor. A default of 90% of `#editor.fontSize#` is used when the configured value is less than `5` or greater than the editor font size.")
          },
          "editor.inlayHints.fontFamily": {
            type: "string",
            default: e.fontFamily,
            markdownDescription: n.N("inlayHints.fontFamily", "Controls font family of inlay hints in the editor. When set to empty, the `#editor.fontFamily#` is used.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          enabled: g(t.enabled, this.defaultValue.enabled),
          fontSize: m.clampedInt(t.fontSize, this.defaultValue.fontSize, 0, 100),
          fontFamily: _.string(t.fontFamily, this.defaultValue.fontFamily)
        };
      }
    })()),
    snippetSuggestions: M(new w(100, "snippetSuggestions", "inline", ["top", "bottom", "inline", "none"], {
      enumDescriptions: [n.N("snippetSuggestions.top", "Show snippet suggestions on top of other suggestions."), n.N("snippetSuggestions.bottom", "Show snippet suggestions below other suggestions."), n.N("snippetSuggestions.inline", "Show snippets suggestions with other suggestions."), n.N("snippetSuggestions.none", "Do not show snippet suggestions.")],
      description: n.N("snippetSuggestions", "Controls whether snippets are shown with other suggestions and how they are sorted.")
    })),
    smartSelect: M(new (class extends d {
      constructor() {
        super(101, "smartSelect", {
          selectLeadingAndTrailingWhitespace: !0
        }, {
          "editor.smartSelect.selectLeadingAndTrailingWhitespace": {
            description: n.N("selectLeadingAndTrailingWhitespace", "Whether leading and trailing whitespace should always be selected."),
            default: !0,
            type: "boolean"
          }
        });
      }
      validate(e) {
        return e && "object" == typeof e ? {
          selectLeadingAndTrailingWhitespace: g(e.selectLeadingAndTrailingWhitespace, this.defaultValue.selectLeadingAndTrailingWhitespace)
        } : this.defaultValue;
      }
    })()),
    smoothScrolling: M(new p(102, "smoothScrolling", !1, {
      description: n.N("smoothScrolling", "Controls whether the editor will scroll using an animation.")
    })),
    stopRenderingLineAfter: M(new m(104, "stopRenderingLineAfter", 1e4, -1, 1073741824)),
    suggest: M(new (class extends d {
      constructor() {
        const e = {
          insertMode: "insert",
          filterGraceful: !0,
          snippetsPreventQuickSuggestions: !0,
          localityBonus: !1,
          shareSuggestSelections: !1,
          showIcons: !0,
          showStatusBar: !1,
          preview: !1,
          previewMode: "subwordSmart",
          showInlineDetails: !0,
          showMethods: !0,
          showFunctions: !0,
          showConstructors: !0,
          showDeprecated: !0,
          showFields: !0,
          showVariables: !0,
          showClasses: !0,
          showStructs: !0,
          showInterfaces: !0,
          showModules: !0,
          showProperties: !0,
          showEvents: !0,
          showOperators: !0,
          showUnits: !0,
          showValues: !0,
          showConstants: !0,
          showEnums: !0,
          showEnumMembers: !0,
          showKeywords: !0,
          showWords: !0,
          showColors: !0,
          showFiles: !0,
          showReferences: !0,
          showFolders: !0,
          showTypeParameters: !0,
          showSnippets: !0,
          showUsers: !0,
          showIssues: !0
        };
        super(105, "suggest", e, {
          "editor.suggest.insertMode": {
            type: "string",
            enum: ["insert", "replace"],
            enumDescriptions: [n.N("suggest.insertMode.insert", "Insert suggestion without overwriting text right of the cursor."), n.N("suggest.insertMode.replace", "Insert suggestion and overwrite text right of the cursor.")],
            default: e.insertMode,
            description: n.N("suggest.insertMode", "Controls whether words are overwritten when accepting completions. Note that this depends on extensions opting into this feature.")
          },
          "editor.suggest.filterGraceful": {
            type: "boolean",
            default: e.filterGraceful,
            description: n.N("suggest.filterGraceful", "Controls whether filtering and sorting suggestions accounts for small typos.")
          },
          "editor.suggest.localityBonus": {
            type: "boolean",
            default: e.localityBonus,
            description: n.N("suggest.localityBonus", "Controls whether sorting favors words that appear close to the cursor.")
          },
          "editor.suggest.shareSuggestSelections": {
            type: "boolean",
            default: e.shareSuggestSelections,
            markdownDescription: n.N("suggest.shareSuggestSelections", "Controls whether remembered suggestion selections are shared between multiple workspaces and windows (needs `#editor.suggestSelection#`).")
          },
          "editor.suggest.snippetsPreventQuickSuggestions": {
            type: "boolean",
            default: e.snippetsPreventQuickSuggestions,
            description: n.N("suggest.snippetsPreventQuickSuggestions", "Controls whether an active snippet prevents quick suggestions.")
          },
          "editor.suggest.showIcons": {
            type: "boolean",
            default: e.showIcons,
            description: n.N("suggest.showIcons", "Controls whether to show or hide icons in suggestions.")
          },
          "editor.suggest.showStatusBar": {
            type: "boolean",
            default: e.showStatusBar,
            description: n.N("suggest.showStatusBar", "Controls the visibility of the status bar at the bottom of the suggest widget.")
          },
          "editor.suggest.preview": {
            type: "boolean",
            default: e.preview,
            description: n.N("suggest.preview", "Controls whether to preview the suggestion outcome in the editor.")
          },
          "editor.suggest.showInlineDetails": {
            type: "boolean",
            default: e.showInlineDetails,
            description: n.N("suggest.showInlineDetails", "Controls whether suggest details show inline with the label or only in the details widget")
          },
          "editor.suggest.maxVisibleSuggestions": {
            type: "number",
            deprecationMessage: n.N("suggest.maxVisibleSuggestions.dep", "This setting is deprecated. The suggest widget can now be resized.")
          },
          "editor.suggest.filteredTypes": {
            type: "object",
            deprecationMessage: n.N("deprecated", "This setting is deprecated, please use separate settings like 'editor.suggest.showKeywords' or 'editor.suggest.showSnippets' instead.")
          },
          "editor.suggest.showMethods": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showMethods", "When enabled IntelliSense shows `method`-suggestions.")
          },
          "editor.suggest.showFunctions": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showFunctions", "When enabled IntelliSense shows `function`-suggestions.")
          },
          "editor.suggest.showConstructors": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showConstructors", "When enabled IntelliSense shows `constructor`-suggestions.")
          },
          "editor.suggest.showDeprecated": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showDeprecated", "When enabled IntelliSense shows `deprecated`-suggestions.")
          },
          "editor.suggest.showFields": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showFields", "When enabled IntelliSense shows `field`-suggestions.")
          },
          "editor.suggest.showVariables": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showVariables", "When enabled IntelliSense shows `variable`-suggestions.")
          },
          "editor.suggest.showClasses": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showClasss", "When enabled IntelliSense shows `class`-suggestions.")
          },
          "editor.suggest.showStructs": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showStructs", "When enabled IntelliSense shows `struct`-suggestions.")
          },
          "editor.suggest.showInterfaces": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showInterfaces", "When enabled IntelliSense shows `interface`-suggestions.")
          },
          "editor.suggest.showModules": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showModules", "When enabled IntelliSense shows `module`-suggestions.")
          },
          "editor.suggest.showProperties": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showPropertys", "When enabled IntelliSense shows `property`-suggestions.")
          },
          "editor.suggest.showEvents": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showEvents", "When enabled IntelliSense shows `event`-suggestions.")
          },
          "editor.suggest.showOperators": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showOperators", "When enabled IntelliSense shows `operator`-suggestions.")
          },
          "editor.suggest.showUnits": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showUnits", "When enabled IntelliSense shows `unit`-suggestions.")
          },
          "editor.suggest.showValues": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showValues", "When enabled IntelliSense shows `value`-suggestions.")
          },
          "editor.suggest.showConstants": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showConstants", "When enabled IntelliSense shows `constant`-suggestions.")
          },
          "editor.suggest.showEnums": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showEnums", "When enabled IntelliSense shows `enum`-suggestions.")
          },
          "editor.suggest.showEnumMembers": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showEnumMembers", "When enabled IntelliSense shows `enumMember`-suggestions.")
          },
          "editor.suggest.showKeywords": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showKeywords", "When enabled IntelliSense shows `keyword`-suggestions.")
          },
          "editor.suggest.showWords": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showTexts", "When enabled IntelliSense shows `text`-suggestions.")
          },
          "editor.suggest.showColors": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showColors", "When enabled IntelliSense shows `color`-suggestions.")
          },
          "editor.suggest.showFiles": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showFiles", "When enabled IntelliSense shows `file`-suggestions.")
          },
          "editor.suggest.showReferences": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showReferences", "When enabled IntelliSense shows `reference`-suggestions.")
          },
          "editor.suggest.showCustomcolors": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showCustomcolors", "When enabled IntelliSense shows `customcolor`-suggestions.")
          },
          "editor.suggest.showFolders": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showFolders", "When enabled IntelliSense shows `folder`-suggestions.")
          },
          "editor.suggest.showTypeParameters": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showTypeParameters", "When enabled IntelliSense shows `typeParameter`-suggestions.")
          },
          "editor.suggest.showSnippets": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showSnippets", "When enabled IntelliSense shows `snippet`-suggestions.")
          },
          "editor.suggest.showUsers": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showUsers", "When enabled IntelliSense shows `user`-suggestions.")
          },
          "editor.suggest.showIssues": {
            type: "boolean",
            default: !0,
            markdownDescription: n.N("editor.suggest.showIssues", "When enabled IntelliSense shows `issues`-suggestions.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          insertMode: b(t.insertMode, this.defaultValue.insertMode, ["insert", "replace"]),
          filterGraceful: g(t.filterGraceful, this.defaultValue.filterGraceful),
          snippetsPreventQuickSuggestions: g(t.snippetsPreventQuickSuggestions, this.defaultValue.filterGraceful),
          localityBonus: g(t.localityBonus, this.defaultValue.localityBonus),
          shareSuggestSelections: g(t.shareSuggestSelections, this.defaultValue.shareSuggestSelections),
          showIcons: g(t.showIcons, this.defaultValue.showIcons),
          showStatusBar: g(t.showStatusBar, this.defaultValue.showStatusBar),
          preview: g(t.preview, this.defaultValue.preview),
          previewMode: b(t.previewMode, this.defaultValue.previewMode, ["prefix", "subword", "subwordSmart"]),
          showInlineDetails: g(t.showInlineDetails, this.defaultValue.showInlineDetails),
          showMethods: g(t.showMethods, this.defaultValue.showMethods),
          showFunctions: g(t.showFunctions, this.defaultValue.showFunctions),
          showConstructors: g(t.showConstructors, this.defaultValue.showConstructors),
          showDeprecated: g(t.showDeprecated, this.defaultValue.showDeprecated),
          showFields: g(t.showFields, this.defaultValue.showFields),
          showVariables: g(t.showVariables, this.defaultValue.showVariables),
          showClasses: g(t.showClasses, this.defaultValue.showClasses),
          showStructs: g(t.showStructs, this.defaultValue.showStructs),
          showInterfaces: g(t.showInterfaces, this.defaultValue.showInterfaces),
          showModules: g(t.showModules, this.defaultValue.showModules),
          showProperties: g(t.showProperties, this.defaultValue.showProperties),
          showEvents: g(t.showEvents, this.defaultValue.showEvents),
          showOperators: g(t.showOperators, this.defaultValue.showOperators),
          showUnits: g(t.showUnits, this.defaultValue.showUnits),
          showValues: g(t.showValues, this.defaultValue.showValues),
          showConstants: g(t.showConstants, this.defaultValue.showConstants),
          showEnums: g(t.showEnums, this.defaultValue.showEnums),
          showEnumMembers: g(t.showEnumMembers, this.defaultValue.showEnumMembers),
          showKeywords: g(t.showKeywords, this.defaultValue.showKeywords),
          showWords: g(t.showWords, this.defaultValue.showWords),
          showColors: g(t.showColors, this.defaultValue.showColors),
          showFiles: g(t.showFiles, this.defaultValue.showFiles),
          showReferences: g(t.showReferences, this.defaultValue.showReferences),
          showFolders: g(t.showFolders, this.defaultValue.showFolders),
          showTypeParameters: g(t.showTypeParameters, this.defaultValue.showTypeParameters),
          showSnippets: g(t.showSnippets, this.defaultValue.showSnippets),
          showUsers: g(t.showUsers, this.defaultValue.showUsers),
          showIssues: g(t.showIssues, this.defaultValue.showIssues)
        };
      }
    })()),
    inlineSuggest: M(new (class extends d {
      constructor() {
        const e = {
          enabled: !0,
          mode: "subwordSmart"
        };
        super(54, "inlineSuggest", e, {
          "editor.inlineSuggest.enabled": {
            type: "boolean",
            default: e.enabled,
            description: n.N("inlineSuggest.enabled", "Controls whether to automatically show inline suggestions in the editor.")
          }
        });
      }
      validate(e) {
        if (!e || "object" != typeof e) return this.defaultValue;
        const t = e;
        return {
          enabled: g(t.enabled, this.defaultValue.enabled),
          mode: b(t.mode, this.defaultValue.mode, ["prefix", "subword", "subwordSmart"])
        };
      }
    })()),
    suggestFontSize: M(new m(106, "suggestFontSize", 0, 0, 1e3, {
      markdownDescription: n.N("suggestFontSize", "Font size for the suggest widget. When set to `0`, the value of `#editor.fontSize#` is used.")
    })),
    suggestLineHeight: M(new m(107, "suggestLineHeight", 0, 0, 1e3, {
      markdownDescription: n.N("suggestLineHeight", "Line height for the suggest widget. When set to `0`, the value of `#editor.lineHeight#` is used. The minimum value is 8.")
    })),
    suggestOnTriggerCharacters: M(new p(108, "suggestOnTriggerCharacters", !0, {
      description: n.N("suggestOnTriggerCharacters", "Controls whether suggestions should automatically show up when typing trigger characters.")
    })),
    suggestSelection: M(new w(109, "suggestSelection", "recentlyUsed", ["first", "recentlyUsed", "recentlyUsedByPrefix"], {
      markdownEnumDescriptions: [n.N("suggestSelection.first", "Always select the first suggestion."), n.N("suggestSelection.recentlyUsed", "Select recent suggestions unless further typing selects one, e.g. `console.| -> console.log` because `log` has been completed recently."), n.N("suggestSelection.recentlyUsedByPrefix", "Select suggestions based on previous prefixes that have completed those suggestions, e.g. `co -> console` and `con -> const`.")],
      description: n.N("suggestSelection", "Controls how suggestions are pre-selected when showing the suggest list.")
    })),
    tabCompletion: M(new w(110, "tabCompletion", "off", ["on", "off", "onlySnippets"], {
      enumDescriptions: [n.N("tabCompletion.on", "Tab complete will insert the best matching suggestion when pressing tab."), n.N("tabCompletion.off", "Disable tab completions."), n.N("tabCompletion.onlySnippets", "Tab complete snippets when their prefix match. Works best when 'quickSuggestions' aren't enabled.")],
      description: n.N("tabCompletion", "Enables tab completions.")
    })),
    tabIndex: M(new m(111, "tabIndex", 0, -1, 1073741824)),
    unusualLineTerminators: M(new w(112, "unusualLineTerminators", "prompt", ["auto", "off", "prompt"], {
      enumDescriptions: [n.N("unusualLineTerminators.auto", "Unusual line terminators are automatically removed."), n.N("unusualLineTerminators.off", "Unusual line terminators are ignored."), n.N("unusualLineTerminators.prompt", "Unusual line terminators prompt to be removed.")],
      description: n.N("unusualLineTerminators", "Remove unusual line terminators that might cause problems.")
    })),
    useShadowDOM: M(new p(113, "useShadowDOM", !0)),
    useTabStops: M(new p(114, "useTabStops", !0, {
      description: n.N("useTabStops", "Inserting and deleting whitespace follows tab stops.")
    })),
    wordSeparators: M(new _(115, "wordSeparators", s.vu, {
      description: n.N("wordSeparators", "Characters that will be used as word separators when doing word related navigations or operations.")
    })),
    wordWrap: M(new w(116, "wordWrap", "off", ["off", "on", "wordWrapColumn", "bounded"], {
      markdownEnumDescriptions: [n.N("wordWrap.off", "Lines will never wrap."), n.N("wordWrap.on", "Lines will wrap at the viewport width."), n.N({
        key: "wordWrap.wordWrapColumn",
        comment: ["- `editor.wordWrapColumn` refers to a different setting and should not be localized."]
      }, "Lines will wrap at `#editor.wordWrapColumn#`."), n.N({
        key: "wordWrap.bounded",
        comment: ["- viewport means the edge of the visible window size.", "- `editor.wordWrapColumn` refers to a different setting and should not be localized."]
      }, "Lines will wrap at the minimum of viewport and `#editor.wordWrapColumn#`.")],
      description: n.N({
        key: "wordWrap",
        comment: ["- 'off', 'on', 'wordWrapColumn' and 'bounded' refer to values the setting can take and should not be localized.", "- `editor.wordWrapColumn` refers to a different setting and should not be localized."]
      }, "Controls how lines should wrap.")
    })),
    wordWrapBreakAfterCharacters: M(new _(117, "wordWrapBreakAfterCharacters", " \t})]?|/&.,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣")),
    wordWrapBreakBeforeCharacters: M(new _(118, "wordWrapBreakBeforeCharacters", "([{‘“〈《「『【〔（［｛｢£¥＄￡￥+＋")),
    wordWrapColumn: M(new m(119, "wordWrapColumn", 80, 1, 1073741824, {
      markdownDescription: n.N({
        key: "wordWrapColumn",
        comment: ["- `editor.wordWrap` refers to a different setting and should not be localized.", "- 'wordWrapColumn' and 'bounded' refer to values the different setting can take and should not be localized."]
      }, "Controls the wrapping column of the editor when `#editor.wordWrap#` is `wordWrapColumn` or `bounded`.")
    })),
    wordWrapOverride1: M(new w(120, "wordWrapOverride1", "inherit", ["off", "on", "inherit"])),
    wordWrapOverride2: M(new w(121, "wordWrapOverride2", "inherit", ["off", "on", "inherit"])),
    wrappingIndent: M(new y(122, "wrappingIndent", 1, "same", ["none", "same", "indent", "deepIndent"], function (e) {
      switch (e) {
        case "none":
          return 0;
        case "same":
          return 1;
        case "indent":
          return 2;
        case "deepIndent":
          return 3;
      }
    }, {
      enumDescriptions: [n.N("wrappingIndent.none", "No indentation. Wrapped lines begin at column 1."), n.N("wrappingIndent.same", "Wrapped lines get the same indentation as the parent."), n.N("wrappingIndent.indent", "Wrapped lines get +1 indentation toward the parent."), n.N("wrappingIndent.deepIndent", "Wrapped lines get +2 indentation toward the parent.")],
      description: n.N("wrappingIndent", "Controls the indentation of wrapped lines.")
    })),
    wrappingStrategy: M(new w(123, "wrappingStrategy", "simple", ["simple", "advanced"], {
      enumDescriptions: [n.N("wrappingStrategy.simple", "Assumes that all characters are of the same width. This is a fast algorithm that works correctly for monospace fonts and certain scripts (like Latin characters) where glyphs are of equal width."), n.N("wrappingStrategy.advanced", "Delegates wrapping points computation to the browser. This is a slow algorithm, that might cause freezes for large files, but it works correctly in all cases.")],
      description: n.N("wrappingStrategy", "Controls the algorithm that computes wrapping points.")
    })),
    editorClassName: M(new (class extends h {
      constructor() {
        super(126, [65, 33]);
      }
      compute(e, t, i) {
        const n = ["monaco-editor"];
        return (t.get(33) && n.push(t.get(33)), e.extraEditorClassName && n.push(e.extraEditorClassName), "default" === t.get(65) ? n.push("mouse-default") : "copy" === t.get(65) && n.push("mouse-copy"), t.get(99) && n.push("showUnused"), t.get(124) && n.push("showDeprecated"), n.join(" "));
      }
    })()),
    pixelRatio: M(new (class extends h {
      constructor() {
        super(127);
      }
      compute(e, t, i) {
        return e.pixelRatio;
      }
    })()),
    tabFocusMode: M(new (class extends h {
      constructor() {
        super(128, [80]);
      }
      compute(e, t, i) {
        return !!t.get(80) || e.tabFocusMode;
      }
    })()),
    layoutInfo: M(new k()),
    wrappingInfo: M(new (class extends h {
      constructor() {
        super(130, [129]);
      }
      compute(e, t, i) {
        const n = t.get(129);
        return {
          isDominatedByLongLines: e.isDominatedByLongLines,
          isWordWrapMinified: n.isWordWrapMinified,
          isViewportWrapping: n.isViewportWrapping,
          wrappingColumn: n.wrappingColumn
        };
      }
    })())
  };
};