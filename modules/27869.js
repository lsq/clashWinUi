module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CE: () => V,
    DD: () => w,
    DS: () => K,
    Dl: () => S,
    HV: () => ee,
    Jn: () => Z,
    Kh: () => a,
    L7: () => J,
    Mm: () => l,
    N5: () => T,
    Qb: () => Y,
    Re: () => P,
    TC: () => x,
    To: () => X,
    UP: () => W,
    Vs: () => B,
    YF: () => G,
    Ym: () => v,
    Yp: () => C,
    eS: () => R,
    e_: () => L,
    f9: () => te,
    fY: () => p,
    hw: () => _,
    kp: () => D,
    lK: () => O,
    lS: () => q,
    m$: () => $,
    m1: () => z,
    m3: () => Q,
    m9: () => A,
    n0: () => g,
    oV: () => U,
    r0: () => H,
    tR: () => m,
    ts: () => j,
    x3: () => E,
    zJ: () => F,
    zk: () => y,
    zu: () => I,
    zw: () => k
  });
  var n = i(63580),
    o = i(41264),
    s = i(73910),
    r = i(97781);
  const a = (0, s.P6)("editor.lineHighlightBackground", {
      dark: null,
      light: null,
      hc: null
    }, n.N("lineHighlight", "Background color for the highlight of line at the cursor position.")),
    l = (0, s.P6)("editor.lineHighlightBorder", {
      dark: "#282828",
      light: "#eeeeee",
      hc: "#f38518"
    }, n.N("lineHighlightBorderBox", "Background color for the border around the line at the cursor position.")),
    c = (0, s.P6)("editor.rangeHighlightBackground", {
      dark: "#ffffff0b",
      light: "#fdff0033",
      hc: null
    }, n.N("rangeHighlight", "Background color of highlighted ranges, like by quick open and find features. The color must not be opaque so as not to hide underlying decorations."), !0),
    d = (0, s.P6)("editor.rangeHighlightBorder", {
      dark: null,
      light: null,
      hc: s.xL
    }, n.N("rangeHighlightBorder", "Background color of the border around highlighted ranges."), !0),
    h = (0, s.P6)("editor.symbolHighlightBackground", {
      dark: s.MU,
      light: s.MU,
      hc: null
    }, n.N("symbolHighlight", "Background color of highlighted symbol, like for go to definition or go next/previous symbol. The color must not be opaque so as not to hide underlying decorations."), !0),
    u = (0, s.P6)("editor.symbolHighlightBorder", {
      dark: null,
      light: null,
      hc: s.xL
    }, n.N("symbolHighlightBorder", "Background color of the border around highlighted symbols."), !0),
    g = (0, s.P6)("editorCursor.foreground", {
      dark: "#AEAFAD",
      light: o.Il.black,
      hc: o.Il.white
    }, n.N("caret", "Color of the editor cursor.")),
    p = (0, s.P6)("editorCursor.background", null, n.N("editorCursorBackground", "The background color of the editor cursor. Allows customizing the color of a character overlapped by a block cursor.")),
    f = (0, s.P6)("editorWhitespace.foreground", {
      dark: "#e3e4e229",
      light: "#33333333",
      hc: "#e3e4e229"
    }, n.N("editorWhitespaces", "Color of whitespace characters in the editor.")),
    m = (0, s.P6)("editorIndentGuide.background", {
      dark: f,
      light: f,
      hc: f
    }, n.N("editorIndentGuides", "Color of the editor indentation guides.")),
    v = (0, s.P6)("editorIndentGuide.activeBackground", {
      dark: f,
      light: f,
      hc: f
    }, n.N("editorActiveIndentGuide", "Color of the active editor indentation guides.")),
    _ = (0, s.P6)("editorLineNumber.foreground", {
      dark: "#858585",
      light: "#237893",
      hc: o.Il.white
    }, n.N("editorLineNumbers", "Color of editor line numbers.")),
    b = (0, s.P6)("editorActiveLineNumber.foreground", {
      dark: "#b4b4b4",
      light: "#0B216F",
      hc: s.xL
    }, n.N("editorActiveLineNumber", "Color of editor active line number"), !1, n.N("deprecatedEditorActiveLineNumber", "Id is deprecated. Use 'editorLineNumber.activeForeground' instead.")),
    w = (0, s.P6)("editorLineNumber.activeForeground", {
      dark: b,
      light: b,
      hc: b
    }, n.N("editorActiveLineNumber", "Color of editor active line number")),
    y = (0, s.P6)("editorRuler.foreground", {
      dark: "#5A5A5A",
      light: o.Il.lightgrey,
      hc: o.Il.white
    }, n.N("editorRuler", "Color of the editor rulers.")),
    C = (0, s.P6)("editorCodeLens.foreground", {
      dark: "#999999",
      light: "#919191",
      hc: "#999999"
    }, n.N("editorCodeLensForeground", "Foreground color of editor CodeLens")),
    x = (0, s.P6)("editorBracketMatch.background", {
      dark: "#0064001a",
      light: "#0064001a",
      hc: "#0064001a"
    }, n.N("editorBracketMatchBackground", "Background color behind matching brackets")),
    S = (0, s.P6)("editorBracketMatch.border", {
      dark: "#888",
      light: "#B9B9B9",
      hc: s.lR
    }, n.N("editorBracketMatchBorder", "Color for matching brackets boxes")),
    k = (0, s.P6)("editorOverviewRuler.border", {
      dark: "#7f7f7f4d",
      light: "#7f7f7f4d",
      hc: "#7f7f7f4d"
    }, n.N("editorOverviewRulerBorder", "Color of the overview ruler border.")),
    L = (0, s.P6)("editorOverviewRuler.background", null, n.N("editorOverviewRulerBackground", "Background color of the editor overview ruler. Only used when the minimap is enabled and placed on the right side of the editor.")),
    N = (0, s.P6)("editorGutter.background", {
      dark: s.cv,
      light: s.cv,
      hc: s.cv
    }, n.N("editorGutter", "Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.")),
    D = (0, s.P6)("editorUnnecessaryCode.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#fff").transparent(0.8)
    }, n.N("unnecessaryCodeBorder", "Border color of unnecessary (unused) source code in the editor.")),
    I = (0, s.P6)("editorUnnecessaryCode.opacity", {
      dark: o.Il.fromHex("#000a"),
      light: o.Il.fromHex("#0007"),
      hc: null
    }, n.N("unnecessaryCodeOpacity", "Opacity of unnecessary (unused) source code in the editor. For example, \"#000000c0\" will render the code with 75% opacity. For high contrast themes, use the  'editorUnnecessaryCode.border' theme color to underline unnecessary code instead of fading it out.")),
    E = (0, s.P6)("editorGhostText.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#fff").transparent(0.8)
    }, n.N("editorGhostTextBorder", "Border color of ghost text in the editor.")),
    T = (0, s.P6)("editorGhostText.foreground", {
      dark: o.Il.fromHex("#ffffff56"),
      light: o.Il.fromHex("#0007"),
      hc: null
    }, n.N("editorGhostTextForeground", "Foreground color of the ghost text in the editor.")),
    M = new o.Il(new o.VS(0, 122, 204, 0.6)),
    A = (0, s.P6)("editorOverviewRuler.rangeHighlightForeground", {
      dark: M,
      light: M,
      hc: M
    }, n.N("overviewRulerRangeHighlight", "Overview ruler marker color for range highlights. The color must not be opaque so as not to hide underlying decorations."), !0),
    O = (0, s.P6)("editorOverviewRuler.errorForeground", {
      dark: new o.Il(new o.VS(255, 18, 18, 0.7)),
      light: new o.Il(new o.VS(255, 18, 18, 0.7)),
      hc: new o.Il(new o.VS(255, 50, 50, 1))
    }, n.N("overviewRuleError", "Overview ruler marker color for errors.")),
    P = (0, s.P6)("editorOverviewRuler.warningForeground", {
      dark: s.uo,
      light: s.uo,
      hc: s.pW
    }, n.N("overviewRuleWarning", "Overview ruler marker color for warnings.")),
    R = (0, s.P6)("editorOverviewRuler.infoForeground", {
      dark: s.c6,
      light: s.c6,
      hc: s.T8
    }, n.N("overviewRuleInfo", "Overview ruler marker color for infos.")),
    F = (0, s.P6)("editorBracketHighlight.foreground1", {
      dark: "#FFD700",
      light: "#0431FAFF",
      hc: "#FFD700"
    }, n.N("editorBracketHighlightForeground1", "Foreground color of brackets (1). Requires enabling bracket pair colorization.")),
    B = (0, s.P6)("editorBracketHighlight.foreground2", {
      dark: "#DA70D6",
      light: "#319331FF",
      hc: "#DA70D6"
    }, n.N("editorBracketHighlightForeground2", "Foreground color of brackets (2). Requires enabling bracket pair colorization.")),
    V = (0, s.P6)("editorBracketHighlight.foreground3", {
      dark: "#179FFF",
      light: "#7B3814FF",
      hc: "#87CEFA"
    }, n.N("editorBracketHighlightForeground3", "Foreground color of brackets (3). Requires enabling bracket pair colorization.")),
    W = (0, s.P6)("editorBracketHighlight.foreground4", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketHighlightForeground4", "Foreground color of brackets (4). Requires enabling bracket pair colorization.")),
    H = (0, s.P6)("editorBracketHighlight.foreground5", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketHighlightForeground5", "Foreground color of brackets (5). Requires enabling bracket pair colorization.")),
    z = (0, s.P6)("editorBracketHighlight.foreground6", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketHighlightForeground6", "Foreground color of brackets (6). Requires enabling bracket pair colorization.")),
    j = (0, s.P6)("editorBracketHighlight.unexpectedBracket.foreground", {
      dark: new o.Il(new o.VS(255, 18, 18, 0.8)),
      light: new o.Il(new o.VS(255, 18, 18, 0.8)),
      hc: new o.Il(new o.VS(255, 50, 50, 1))
    }, n.N("editorBracketHighlightUnexpectedBracketForeground", "Foreground color of unexpected brackets.")),
    U = (0, s.P6)("editorBracketPairGuide.background1", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background1", "Background color of inactive bracket pair guides (1). Requires enabling bracket pair guides.")),
    $ = (0, s.P6)("editorBracketPairGuide.background2", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background2", "Background color of inactive bracket pair guides (2). Requires enabling bracket pair guides.")),
    K = (0, s.P6)("editorBracketPairGuide.background3", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background3", "Background color of inactive bracket pair guides (3). Requires enabling bracket pair guides.")),
    q = (0, s.P6)("editorBracketPairGuide.background4", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background4", "Background color of inactive bracket pair guides (4). Requires enabling bracket pair guides.")),
    Z = (0, s.P6)("editorBracketPairGuide.background5", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background5", "Background color of inactive bracket pair guides (5). Requires enabling bracket pair guides.")),
    G = (0, s.P6)("editorBracketPairGuide.background6", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.background6", "Background color of inactive bracket pair guides (6). Requires enabling bracket pair guides.")),
    Y = (0, s.P6)("editorBracketPairGuide.activeBackground1", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground1", "Background color of active bracket pair guides (1). Requires enabling bracket pair guides.")),
    Q = (0, s.P6)("editorBracketPairGuide.activeBackground2", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground2", "Background color of active bracket pair guides (2). Requires enabling bracket pair guides.")),
    X = (0, s.P6)("editorBracketPairGuide.activeBackground3", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground3", "Background color of active bracket pair guides (3). Requires enabling bracket pair guides.")),
    J = (0, s.P6)("editorBracketPairGuide.activeBackground4", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground4", "Background color of active bracket pair guides (4). Requires enabling bracket pair guides.")),
    ee = (0, s.P6)("editorBracketPairGuide.activeBackground5", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground5", "Background color of active bracket pair guides (5). Requires enabling bracket pair guides.")),
    te = (0, s.P6)("editorBracketPairGuide.activeBackground6", {
      dark: "#00000000",
      light: "#00000000",
      hc: "#00000000"
    }, n.N("editorBracketPairGuide.activeBackground6", "Background color of active bracket pair guides (6). Requires enabling bracket pair guides."));
  (0, r.Ic)((e, t) => {
    const i = e.getColor(s.cv);
    i && t.addRule(`.monaco-editor, .monaco-editor-background, .monaco-editor .inputarea.ime-input { background-color: ${i}; }`);
    const n = e.getColor(s.NO);
    n && t.addRule(`.monaco-editor, .monaco-editor .inputarea.ime-input { color: ${n}; }`);
    const o = e.getColor(N);
    o && t.addRule(`.monaco-editor .margin { background-color: ${o}; }`);
    const r = e.getColor(c);
    r && t.addRule(`.monaco-editor .rangeHighlight { background-color: ${r}; }`);
    const a = e.getColor(d);
    a && t.addRule(`.monaco-editor .rangeHighlight { border: 1px ${"hc" === e.type ? "dotted" : "solid"} ${a}; }`);
    const l = e.getColor(h);
    l && t.addRule(`.monaco-editor .symbolHighlight { background-color: ${l}; }`);
    const g = e.getColor(u);
    g && t.addRule(`.monaco-editor .symbolHighlight { border: 1px ${"hc" === e.type ? "dotted" : "solid"} ${g}; }`);
    const p = e.getColor(f);
    p && (t.addRule(`.monaco-editor .mtkw { color: ${p} !important; }`), t.addRule(`.monaco-editor .mtkz { color: ${p} !important; }`));
  });
};