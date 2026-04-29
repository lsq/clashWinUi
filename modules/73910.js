const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $D: () => At,
    $d: () => gt,
    A2: () => Y,
    AB: () => q,
    AS: () => pt,
    AW: () => we,
    BO: () => ei,
    C3: () => O,
    CA: () => Yt,
    CN: () => Re,
    Cd: () => It,
    Cz: () => qe,
    D0: () => ce,
    D1: () => he,
    DE: () => Et,
    Du: () => se,
    E3: () => Ot,
    EP: () => T,
    ES: () => Se,
    Ei: () => Te,
    F3: () => ht,
    Fm: () => Ht,
    Fu: () => $e,
    GO: () => z,
    Gj: () => Kt,
    Gw: () => ft,
    HC: () => je,
    Hf: () => de,
    Hz: () => Tt,
    I1: () => Vt,
    IP: () => d,
    IY: () => Ut,
    Id: () => p,
    It: () => Gt,
    Iv: () => qt,
    Jp: () => Jt,
    K1: () => ye,
    KT: () => jt,
    LL: () => Je,
    L_: () => et,
    Lo: () => Fe,
    M6: () => st,
    MU: () => De,
    NO: () => le,
    NP: () => Lt,
    Ng: () => ue,
    OL: () => ti,
    OZ: () => F,
    Oo: () => nt,
    P4: () => Ye,
    P6: () => u,
    PR: () => L,
    PX: () => mt,
    Pk: () => Bt,
    Pp: () => We,
    Pv: () => D,
    R8: () => m,
    RV: () => M,
    Rz: () => ke,
    S: () => Ct,
    SP: () => zt,
    SU: () => A,
    Sb: () => Pe,
    Sn: () => ai,
    Sw: () => y,
    T8: () => oe,
    Tn: () => rt,
    U6: () => Wt,
    Un: () => xt,
    VV: () => Ve,
    Vq: () => Dt,
    XE: () => N,
    XL: () => Qe,
    XZ: () => f,
    Xy: () => Qt,
    YI: () => E,
    ZG: () => Pt,
    Zn: () => oi,
    _2: () => it,
    _Y: () => Be,
    _b: () => tt,
    _l: () => I,
    _t: () => R,
    _w: () => $,
    b6: () => X,
    b7: () => H,
    bK: () => ze,
    br: () => Xt,
    c6: () => ne,
    cb: () => Nt,
    cv: () => ae,
    dC: () => ot,
    dR: () => g,
    dt: () => k,
    et: () => K,
    fE: () => re,
    fe: () => ie,
    g8: () => j,
    g_: () => Le,
    gk: () => Me,
    gp: () => J,
    hE: () => Ce,
    hX: () => He,
    j5: () => W,
    jU: () => Ie,
    jb: () => Mt,
    kJ: () => me,
    kV: () => Zt,
    ke: () => Ze,
    kv: () => ct,
    kw: () => si,
    lR: () => v,
    lU: () => Rt,
    lW: () => be,
    lX: () => Q,
    lo: () => fe,
    mH: () => Xe,
    mV: () => ut,
    ny: () => Ne,
    oQ: () => _e,
    oS: () => yt,
    op: () => ve,
    ov: () => $t,
    p: () => P,
    pW: () => te,
    ph: () => Ue,
    pn: () => Ee,
    pt: () => Ae,
    qe: () => U,
    rg: () => at,
    rh: () => C,
    s$: () => dt,
    sE: () => x,
    sK: () => Ke,
    sg: () => w,
    tZ: () => pe,
    u2: () => Ft,
    uo: () => ee,
    ur: () => b,
    ux: () => St,
    vG: () => wt,
    xL: () => _,
    yJ: () => Oe,
    yb: () => xe,
    yn: () => Z,
    yp: () => Ge,
    yt: () => lt,
    zJ: () => S,
    zK: () => ge,
    zR: () => G
  });
  var n = i(15393),
    o = i(41264),
    s = i(4669),
    r = i(98401),
    a = i(63580),
    l = i(81294),
    c = i(89872);
  const d = {
    ColorContribution: "base.contributions.colors"
  };
  const h = new (class {
    constructor() {
      ((this._onDidChangeSchema = new s.Q5()), (this.onDidChangeSchema = this._onDidChangeSchema.event), (this.colorSchema = {
        type: "object",
        properties: {}
      }), (this.colorReferenceSchema = {
        type: "string",
        enum: [],
        enumDescriptions: []
      }), (this.colorsById = {}));
    }
    registerColor(e, t, i, n = !1, o) {
      let s = {
        id: e,
        description: i,
        defaults: t,
        needsTransparency: n,
        deprecationMessage: o
      };
      this.colorsById[e] = s;
      let r = {
        type: "string",
        description: i,
        format: "color-hex",
        defaultSnippets: [{
          body: "${1:#ff0000}"
        }]
      };
      return (o && (r.deprecationMessage = o), (this.colorSchema.properties[e] = r), this.colorReferenceSchema.enum.push(e), this.colorReferenceSchema.enumDescriptions.push(i), this._onDidChangeSchema.fire(), e);
    }
    resolveDefaultColor(e, t) {
      const i = this.colorsById[e];
      if (i && i.defaults) {
        return ai(i.defaults[t.type], t);
      }
    }
    getColorSchema() {
      return this.colorSchema;
    }
    toString() {
      return Object.keys(this.colorsById).sort((e, t) => {
        let i = -1 === e.indexOf(".") ? 0 : 1,
          n = -1 === t.indexOf(".") ? 0 : 1;
        return i !== n ? i - n : e.localeCompare(t);
      }).map(e => `- \`${e}\`: ${this.colorsById[e].description}`).join("\n");
    }
  })();
  function u(e, t, i, n, o) {
    return h.registerColor(e, t, i, n, o);
  }
  c.B.add(d.ColorContribution, h);
  const Lg = new Language(modifyState.language);
  const g = u("foreground", {
      dark: "#CCCCCC",
      light: "#616161",
      hc: "#FFFFFF"
    }, a.N("foreground", Lg.overallColorSettings())),
    p = u("errorForeground", {
      dark: "#F48771",
      light: "#A1260D",
      hc: "#F48771"
    }, a.N("errorForeground", Lg.overallColorSettingsErr())),
    f = u("icon.foreground", {
      dark: "#C5C5C5",
      light: "#424242",
      hc: "#FFFFFF"
    }, a.N("iconForeground", "The default color for icons in the workbench.")),
    m = u("focusBorder", {
      dark: "#007FD4",
      light: "#0090F1",
      hc: "#F38518"
    }, a.N("focusBorder", "Overall border color for focused elements. This color is only used if not overridden by a component.")),
    v = u("contrastBorder", {
      light: null,
      dark: null,
      hc: "#6FC3DF"
    }, a.N("contrastBorder", "An extra border around elements to separate them from others for greater contrast.")),
    _ = u("contrastActiveBorder", {
      light: null,
      dark: null,
      hc: m
    }, a.N("activeContrastBorder", "An extra border around active elements to separate them from others for greater contrast.")),
    b = u("textLink.foreground", {
      light: "#006AB1",
      dark: "#3794FF",
      hc: "#3794FF"
    }, a.N("textLinkForeground", "Foreground color for links in text.")),
    w = u("textLink.activeForeground", {
      light: "#006AB1",
      dark: "#3794FF",
      hc: "#3794FF"
    }, a.N("textLinkActiveForeground", "Foreground color for links in text when clicked on and on mouse hover.")),
    y = u("textCodeBlock.background", {
      light: "#dcdcdc66",
      dark: "#0a0a0a66",
      hc: o.Il.black
    }, a.N("textCodeBlockBackground", "Background color for code blocks in text.")),
    C = u("widget.shadow", {
      dark: oi(o.Il.black, 0.36),
      light: oi(o.Il.black, 0.16),
      hc: null
    }, a.N("widgetShadow", "Shadow color of widgets such as find/replace inside the editor.")),
    x = u("input.background", {
      dark: "#3C3C3C",
      light: o.Il.white,
      hc: o.Il.black
    }, a.N("inputBoxBackground", "Input box background.")),
    S = u("input.foreground", {
      dark: g,
      light: g,
      hc: g
    }, a.N("inputBoxForeground", "Input box foreground.")),
    k = u("input.border", {
      dark: null,
      light: null,
      hc: v
    }, a.N("inputBoxBorder", "Input box border.")),
    L = u("inputOption.activeBorder", {
      dark: "#007ACC00",
      light: "#007ACC00",
      hc: v
    }, a.N("inputBoxActiveOptionBorder", "Border color of activated options in input fields.")),
    N = u("inputOption.activeBackground", {
      dark: oi(m, 0.4),
      light: oi(m, 0.2),
      hc: o.Il.transparent
    }, a.N("inputOption.activeBackground", "Background color of activated options in input fields.")),
    D = u("inputOption.activeForeground", {
      dark: o.Il.white,
      light: o.Il.black,
      hc: null
    }, a.N("inputOption.activeForeground", "Foreground color of activated options in input fields.")),
    I = u("inputValidation.infoBackground", {
      dark: "#063B49",
      light: "#D6ECF2",
      hc: o.Il.black
    }, a.N("inputValidationInfoBackground", "Input validation background color for information severity.")),
    E = u("inputValidation.infoForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("inputValidationInfoForeground", "Input validation foreground color for information severity.")),
    T = u("inputValidation.infoBorder", {
      dark: "#007acc",
      light: "#007acc",
      hc: v
    }, a.N("inputValidationInfoBorder", "Input validation border color for information severity.")),
    M = u("inputValidation.warningBackground", {
      dark: "#352A05",
      light: "#F6F5D2",
      hc: o.Il.black
    }, a.N("inputValidationWarningBackground", "Input validation background color for warning severity.")),
    A = u("inputValidation.warningForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("inputValidationWarningForeground", "Input validation foreground color for warning severity.")),
    O = u("inputValidation.warningBorder", {
      dark: "#B89500",
      light: "#B89500",
      hc: v
    }, a.N("inputValidationWarningBorder", "Input validation border color for warning severity.")),
    P = u("inputValidation.errorBackground", {
      dark: "#5A1D1D",
      light: "#F2DEDE",
      hc: o.Il.black
    }, a.N("inputValidationErrorBackground", "Input validation background color for error severity.")),
    R = u("inputValidation.errorForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("inputValidationErrorForeground", "Input validation foreground color for error severity.")),
    F = u("inputValidation.errorBorder", {
      dark: "#BE1100",
      light: "#BE1100",
      hc: v
    }, a.N("inputValidationErrorBorder", "Input validation border color for error severity.")),
    B = u("dropdown.background", {
      dark: "#3C3C3C",
      light: o.Il.white,
      hc: o.Il.black
    }, a.N("dropdownBackground", "Dropdown background.")),
    V = u("dropdown.foreground", {
      dark: "#F0F0F0",
      light: null,
      hc: o.Il.white
    }, a.N("dropdownForeground", "Dropdown foreground.")),
    W = u("button.foreground", {
      dark: o.Il.white,
      light: o.Il.white,
      hc: o.Il.white
    }, a.N("buttonForeground", "Button foreground color.")),
    H = u("button.background", {
      dark: "#0E639C",
      light: "#007ACC",
      hc: null
    }, a.N("buttonBackground", "Button background color.")),
    z = u("button.hoverBackground", {
      dark: ni(H, 0.2),
      light: ii(H, 0.2),
      hc: null
    }, a.N("buttonHoverBackground", "Button background color when hovering.")),
    j = u("badge.background", {
      dark: "#4D4D4D",
      light: "#C4C4C4",
      hc: o.Il.black
    }, a.N("badgeBackground", "Badge background color. Badges are small information labels, e.g. for search results count.")),
    U = u("badge.foreground", {
      dark: o.Il.white,
      light: "#333",
      hc: o.Il.white
    }, a.N("badgeForeground", "Badge foreground color. Badges are small information labels, e.g. for search results count.")),
    $ = u("scrollbar.shadow", {
      dark: "#000000",
      light: "#DDDDDD",
      hc: null
    }, a.N("scrollbarShadow", "Scrollbar shadow to indicate that the view is scrolled.")),
    K = u("scrollbarSlider.background", {
      dark: o.Il.fromHex("#797979").transparent(0.4),
      light: o.Il.fromHex("#646464").transparent(0.4),
      hc: oi(v, 0.6)
    }, a.N("scrollbarSliderBackground", "Scrollbar slider background color.")),
    q = u("scrollbarSlider.hoverBackground", {
      dark: o.Il.fromHex("#646464").transparent(0.7),
      light: o.Il.fromHex("#646464").transparent(0.7),
      hc: oi(v, 0.8)
    }, a.N("scrollbarSliderHoverBackground", "Scrollbar slider background color when hovering.")),
    Z = u("scrollbarSlider.activeBackground", {
      dark: o.Il.fromHex("#BFBFBF").transparent(0.4),
      light: o.Il.fromHex("#000000").transparent(0.6),
      hc: v
    }, a.N("scrollbarSliderActiveBackground", "Scrollbar slider background color when clicked on.")),
    G = u("progressBar.background", {
      dark: o.Il.fromHex("#0E70C0"),
      light: o.Il.fromHex("#0E70C0"),
      hc: v
    }, a.N("progressBarBackground", "Background color of the progress bar that can show for long running operations.")),
    Y = u("editorError.background", {
      dark: null,
      light: null,
      hc: null
    }, a.N("editorError.background", "Background color of error text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0),
    Q = u("editorError.foreground", {
      dark: "#F14C4C",
      light: "#E51400",
      hc: null
    }, a.N("editorError.foreground", "Foreground color of error squigglies in the editor.")),
    X = u("editorError.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#E47777").transparent(0.8)
    }, a.N("errorBorder", "Border color of error boxes in the editor.")),
    J = u("editorWarning.background", {
      dark: null,
      light: null,
      hc: null
    }, a.N("editorWarning.background", "Background color of warning text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0),
    ee = u("editorWarning.foreground", {
      dark: "#CCA700",
      light: "#BF8803",
      hc: null
    }, a.N("editorWarning.foreground", "Foreground color of warning squigglies in the editor.")),
    te = u("editorWarning.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#FFCC00").transparent(0.8)
    }, a.N("warningBorder", "Border color of warning boxes in the editor.")),
    ie = u("editorInfo.background", {
      dark: null,
      light: null,
      hc: null
    }, a.N("editorInfo.background", "Background color of info text in the editor. The color must not be opaque so as not to hide underlying decorations."), !0),
    ne = u("editorInfo.foreground", {
      dark: "#3794FF",
      light: "#1a85ff",
      hc: "#3794FF"
    }, a.N("editorInfo.foreground", "Foreground color of info squigglies in the editor.")),
    oe = u("editorInfo.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#3794FF").transparent(0.8)
    }, a.N("infoBorder", "Border color of info boxes in the editor.")),
    se = u("editorHint.foreground", {
      dark: o.Il.fromHex("#eeeeee").transparent(0.7),
      light: "#6c6c6c",
      hc: null
    }, a.N("editorHint.foreground", "Foreground color of hint squigglies in the editor.")),
    re = u("editorHint.border", {
      dark: null,
      light: null,
      hc: o.Il.fromHex("#eeeeee").transparent(0.8)
    }, a.N("hintBorder", "Border color of hint boxes in the editor.")),
    ae = u("editor.background", {
      light: "#fffffe",
      dark: "#1E1E1E",
      hc: o.Il.black
    }, a.N("editorBackground", "Editor background color.")),
    le = u("editor.foreground", {
      light: "#333333",
      dark: "#BBBBBB",
      hc: o.Il.white
    }, a.N("editorForeground", "Editor default foreground color.")),
    ce = u("editorWidget.background", {
      dark: "#252526",
      light: "#F3F3F3",
      hc: "#0C141F"
    }, a.N("editorWidgetBackground", "Background color of editor widgets, such as find/replace.")),
    de = u("editorWidget.foreground", {
      dark: g,
      light: g,
      hc: g
    }, a.N("editorWidgetForeground", "Foreground color of editor widgets, such as find/replace.")),
    he = u("editorWidget.border", {
      dark: "#454545",
      light: "#C8C8C8",
      hc: v
    }, a.N("editorWidgetBorder", "Border color of editor widgets. The color is only used if the widget chooses to have a border and if the color is not overridden by a widget.")),
    ue = u("editorWidget.resizeBorder", {
      light: null,
      dark: null,
      hc: null
    }, a.N("editorWidgetResizeBorder", "Border color of the resize bar of editor widgets. The color is only used if the widget chooses to have a resize border and if the color is not overridden by a widget.")),
    ge = u("quickInput.background", {
      dark: ce,
      light: ce,
      hc: ce
    }, a.N("pickerBackground", "Quick picker background color. The quick picker widget is the container for pickers like the command palette.")),
    pe = u("quickInput.foreground", {
      dark: de,
      light: de,
      hc: de
    }, a.N("pickerForeground", "Quick picker foreground color. The quick picker widget is the container for pickers like the command palette.")),
    fe = u("quickInputTitle.background", {
      dark: new o.Il(new o.VS(255, 255, 255, 0.105)),
      light: new o.Il(new o.VS(0, 0, 0, 0.06)),
      hc: "#000000"
    }, a.N("pickerTitleBackground", "Quick picker title background color. The quick picker widget is the container for pickers like the command palette.")),
    me = u("pickerGroup.foreground", {
      dark: "#3794FF",
      light: "#0066BF",
      hc: o.Il.white
    }, a.N("pickerGroupForeground", "Quick picker color for grouping labels.")),
    ve = u("pickerGroup.border", {
      dark: "#3F3F46",
      light: "#CCCEDB",
      hc: o.Il.white
    }, a.N("pickerGroupBorder", "Quick picker color for grouping borders.")),
    _e = u("keybindingLabel.background", {
      dark: new o.Il(new o.VS(128, 128, 128, 0.17)),
      light: new o.Il(new o.VS(221, 221, 221, 0.4)),
      hc: o.Il.transparent
    }, a.N("keybindingLabelBackground", "Keybinding label background color. The keybinding label is used to represent a keyboard shortcut.")),
    be = u("keybindingLabel.foreground", {
      dark: o.Il.fromHex("#CCCCCC"),
      light: o.Il.fromHex("#555555"),
      hc: o.Il.white
    }, a.N("keybindingLabelForeground", "Keybinding label foreground color. The keybinding label is used to represent a keyboard shortcut.")),
    we = u("keybindingLabel.border", {
      dark: new o.Il(new o.VS(51, 51, 51, 0.6)),
      light: new o.Il(new o.VS(204, 204, 204, 0.4)),
      hc: new o.Il(new o.VS(111, 195, 223))
    }, a.N("keybindingLabelBorder", "Keybinding label border color. The keybinding label is used to represent a keyboard shortcut.")),
    ye = u("keybindingLabel.bottomBorder", {
      dark: new o.Il(new o.VS(68, 68, 68, 0.6)),
      light: new o.Il(new o.VS(187, 187, 187, 0.4)),
      hc: new o.Il(new o.VS(111, 195, 223))
    }, a.N("keybindingLabelBottomBorder", "Keybinding label border bottom color. The keybinding label is used to represent a keyboard shortcut.")),
    Ce = u("editor.selectionBackground", {
      light: "#ADD6FF",
      dark: "#264F78",
      hc: "#f3f518"
    }, a.N("editorSelectionBackground", "Color of the editor selection.")),
    xe = u("editor.selectionForeground", {
      light: null,
      dark: null,
      hc: "#000000"
    }, a.N("editorSelectionForeground", "Color of the selected text for high contrast.")),
    Se = u("editor.inactiveSelectionBackground", {
      light: oi(Ce, 0.5),
      dark: oi(Ce, 0.5),
      hc: oi(Ce, 0.5)
    }, a.N("editorInactiveSelection", "Color of the selection in an inactive editor. The color must not be opaque so as not to hide underlying decorations."), !0),
    ke = u("editor.selectionHighlightBackground", {
      light: ri(Ce, ae, 0.3, 0.6),
      dark: ri(Ce, ae, 0.3, 0.6),
      hc: null
    }, a.N("editorSelectionHighlight", "Color for regions with the same content as the selection. The color must not be opaque so as not to hide underlying decorations."), !0),
    Le = u("editor.selectionHighlightBorder", {
      light: null,
      dark: null,
      hc: _
    }, a.N("editorSelectionHighlightBorder", "Border color for regions with the same content as the selection.")),
    Ne = u("editor.findMatchBackground", {
      light: "#A8AC94",
      dark: "#515C6A",
      hc: null
    }, a.N("editorFindMatch", "Color of the current search match.")),
    De = u("editor.findMatchHighlightBackground", {
      light: "#EA5C0055",
      dark: "#EA5C0055",
      hc: null
    }, a.N("findMatchHighlight", "Color of the other search matches. The color must not be opaque so as not to hide underlying decorations."), !0),
    Ie = u("editor.findRangeHighlightBackground", {
      dark: "#3a3d4166",
      light: "#b4b4b44d",
      hc: null
    }, a.N("findRangeHighlight", "Color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), !0),
    Ee = u("editor.findMatchBorder", {
      light: null,
      dark: null,
      hc: _
    }, a.N("editorFindMatchBorder", "Border color of the current search match.")),
    Te = u("editor.findMatchHighlightBorder", {
      light: null,
      dark: null,
      hc: _
    }, a.N("findMatchHighlightBorder", "Border color of the other search matches.")),
    Me = u("editor.findRangeHighlightBorder", {
      dark: null,
      light: null,
      hc: oi(_, 0.4)
    }, a.N("findRangeHighlightBorder", "Border color of the range limiting the search. The color must not be opaque so as not to hide underlying decorations."), !0),
    Ae = u("editor.hoverHighlightBackground", {
      light: "#ADD6FF26",
      dark: "#264f7840",
      hc: "#ADD6FF26"
    }, a.N("hoverHighlight", "Highlight below the word for which a hover is shown. The color must not be opaque so as not to hide underlying decorations."), !0),
    Oe = u("editorHoverWidget.background", {
      light: ce,
      dark: ce,
      hc: ce
    }, a.N("hoverBackground", "Background color of the editor hover.")),
    Pe = u("editorHoverWidget.foreground", {
      light: de,
      dark: de,
      hc: de
    }, a.N("hoverForeground", "Foreground color of the editor hover.")),
    Re = u("editorHoverWidget.border", {
      light: he,
      dark: he,
      hc: he
    }, a.N("hoverBorder", "Border color of the editor hover.")),
    Fe = u("editorHoverWidget.statusBarBackground", {
      dark: ni(Oe, 0.2),
      light: ii(Oe, 0.05),
      hc: ce
    }, a.N("statusBarBackground", "Background color of the editor hover status bar.")),
    Be = u("editorLink.activeForeground", {
      dark: "#4E94CE",
      light: o.Il.blue,
      hc: o.Il.cyan
    }, a.N("activeLinkForeground", "Color of active links.")),
    Ve = u("editorInlayHint.foreground", {
      dark: oi(U, 0.8),
      light: oi(U, 0.8),
      hc: U
    }, a.N("editorInlayHintForeground", "Foreground color of inline hints")),
    We = u("editorInlayHint.background", {
      dark: oi(j, 0.6),
      light: oi(j, 0.3),
      hc: j
    }, a.N("editorInlayHintBackground", "Background color of inline hints")),
    He = u("editorInlayHint.typeForeground", {
      dark: Ve,
      light: Ve,
      hc: Ve
    }, a.N("editorInlayHintForegroundTypes", "Foreground color of inline hints for types")),
    ze = u("editorInlayHint.typeBackground", {
      dark: We,
      light: We,
      hc: We
    }, a.N("editorInlayHintBackgroundTypes", "Background color of inline hints for types")),
    je = u("editorInlayHint.parameterForeground", {
      dark: Ve,
      light: Ve,
      hc: Ve
    }, a.N("editorInlayHintForegroundParameter", "Foreground color of inline hints for parameters")),
    Ue = u("editorInlayHint.parameterBackground", {
      dark: We,
      light: We,
      hc: We
    }, a.N("editorInlayHintBackgroundParameter", "Background color of inline hints for parameters")),
    $e = u("editorLightBulb.foreground", {
      dark: "#FFCC00",
      light: "#DDB100",
      hc: "#FFCC00"
    }, a.N("editorLightBulbForeground", "The color used for the lightbulb actions icon.")),
    Ke = u("editorLightBulbAutoFix.foreground", {
      dark: "#75BEFF",
      light: "#007ACC",
      hc: "#75BEFF"
    }, a.N("editorLightBulbAutoFixForeground", "The color used for the lightbulb auto fix actions icon.")),
    qe = new o.Il(new o.VS(155, 185, 85, 0.2)),
    Ze = new o.Il(new o.VS(255, 0, 0, 0.2)),
    Ge = u("diffEditor.insertedTextBackground", {
      dark: qe,
      light: qe,
      hc: null
    }, a.N("diffEditorInserted", "Background color for text that got inserted. The color must not be opaque so as not to hide underlying decorations."), !0),
    Ye = u("diffEditor.removedTextBackground", {
      dark: Ze,
      light: Ze,
      hc: null
    }, a.N("diffEditorRemoved", "Background color for text that got removed. The color must not be opaque so as not to hide underlying decorations."), !0),
    Qe = u("diffEditor.insertedTextBorder", {
      dark: null,
      light: null,
      hc: "#33ff2eff"
    }, a.N("diffEditorInsertedOutline", "Outline color for the text that got inserted.")),
    Xe = u("diffEditor.removedTextBorder", {
      dark: null,
      light: null,
      hc: "#FF008F"
    }, a.N("diffEditorRemovedOutline", "Outline color for text that got removed.")),
    Je = u("diffEditor.border", {
      dark: null,
      light: null,
      hc: v
    }, a.N("diffEditorBorder", "Border color between the two text editors.")),
    et = u("diffEditor.diagonalFill", {
      dark: "#cccccc33",
      light: "#22222233",
      hc: null
    }, a.N("diffDiagonalFill", "Color of the diff editor's diagonal fill. The diagonal fill is used in side-by-side diff views.")),
    tt = u("list.focusBackground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listFocusBackground", "List/Tree background color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    it = u("list.focusForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listFocusForeground", "List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    nt = u("list.focusOutline", {
      dark: m,
      light: m,
      hc: _
    }, a.N("listFocusOutline", "List/Tree outline color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    ot = u("list.activeSelectionBackground", {
      dark: "#094771",
      light: "#0060C0",
      hc: null
    }, a.N("listActiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    st = u("list.activeSelectionForeground", {
      dark: o.Il.white,
      light: o.Il.white,
      hc: null
    }, a.N("listActiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    rt = u("list.activeSelectionIconForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listActiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.")),
    at = u("list.inactiveSelectionBackground", {
      dark: "#37373D",
      light: "#E4E6F1",
      hc: null
    }, a.N("listInactiveSelectionBackground", "List/Tree background color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")),
    lt = u("list.inactiveSelectionForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listInactiveSelectionForeground", "List/Tree foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")),
    ct = u("list.inactiveSelectionIconForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listInactiveSelectionIconForeground", "List/Tree icon foreground color for the selected item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")),
    dt = u("list.inactiveFocusBackground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listInactiveFocusBackground", "List/Tree background color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")),
    ht = u("list.inactiveFocusOutline", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listInactiveFocusOutline", "List/Tree outline color for the focused item when the list/tree is inactive. An active list/tree has keyboard focus, an inactive does not.")),
    ut = u("list.hoverBackground", {
      dark: "#2A2D2E",
      light: "#F0F0F0",
      hc: null
    }, a.N("listHoverBackground", "List/Tree background when hovering over items using the mouse.")),
    gt = u("list.hoverForeground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("listHoverForeground", "List/Tree foreground when hovering over items using the mouse.")),
    pt = u("list.dropBackground", {
      dark: "#062F4A",
      light: "#D6EBFF",
      hc: null
    }, a.N("listDropBackground", "List/Tree drag and drop background when moving items around using the mouse.")),
    ft = u("list.highlightForeground", {
      dark: "#18A3FF",
      light: "#0066BF",
      hc: m
    }, a.N("highlight", "List/Tree foreground color of the match highlights when searching inside the list/tree.")),
    mt = u("list.focusHighlightForeground", {
      dark: ft,
      light: ((vt = ot), (_t = ft), (bt = "#9DDDFF"), {
        op: 5,
        if: vt,
        then: _t,
        else: bt
      }),
      hc: ft
    }, a.N("listFocusHighlightForeground", "List/Tree foreground color of the match highlights on actively focused items when searching inside the list/tree."));
  var vt, _t, bt;
  const wt = u("listFilterWidget.background", {
      light: "#efc1ad",
      dark: "#653723",
      hc: o.Il.black
    }, a.N("listFilterWidgetBackground", "Background color of the type filter widget in lists and trees.")),
    yt = u("listFilterWidget.outline", {
      dark: o.Il.transparent,
      light: o.Il.transparent,
      hc: "#f38518"
    }, a.N("listFilterWidgetOutline", "Outline color of the type filter widget in lists and trees.")),
    Ct = u("listFilterWidget.noMatchesOutline", {
      dark: "#BE1100",
      light: "#BE1100",
      hc: v
    }, a.N("listFilterWidgetNoMatchesOutline", "Outline color of the type filter widget in lists and trees, when there are no matches.")),
    xt = u("tree.indentGuidesStroke", {
      dark: "#585858",
      light: "#a9a9a9",
      hc: "#a9a9a9"
    }, a.N("treeIndentGuidesStroke", "Tree stroke color for the indentation guides.")),
    St = u("tree.tableColumnsBorder", {
      dark: "#CCCCCC20",
      light: "#61616120",
      hc: null
    }, a.N("treeIndentGuidesStroke", "Tree stroke color for the indentation guides.")),
    kt = u("quickInput.list.focusBackground", {
      dark: null,
      light: null,
      hc: null
    }, "", void 0, a.N("quickInput.list.focusBackground deprecation", "Please use quickInputList.focusBackground instead")),
    Lt = u("quickInputList.focusForeground", {
      dark: st,
      light: st,
      hc: st
    }, a.N("quickInput.listFocusForeground", "Quick picker foreground color for the focused item.")),
    Nt = u("quickInputList.focusIconForeground", {
      dark: rt,
      light: rt,
      hc: rt
    }, a.N("quickInput.listFocusIconForeground", "Quick picker icon foreground color for the focused item.")),
    Dt = u("quickInputList.focusBackground", {
      dark: si(kt, ot),
      light: si(kt, ot),
      hc: null
    }, a.N("quickInput.listFocusBackground", "Quick picker background color for the focused item.")),
    It = u("menu.border", {
      dark: null,
      light: null,
      hc: v
    }, a.N("menuBorder", "Border color of menus.")),
    Et = u("menu.foreground", {
      dark: V,
      light: g,
      hc: V
    }, a.N("menuForeground", "Foreground color of menu items.")),
    Tt = u("menu.background", {
      dark: B,
      light: B,
      hc: B
    }, a.N("menuBackground", "Background color of menu items.")),
    Mt = u("menu.selectionForeground", {
      dark: st,
      light: st,
      hc: st
    }, a.N("menuSelectionForeground", "Foreground color of the selected menu item in menus.")),
    At = u("menu.selectionBackground", {
      dark: ot,
      light: ot,
      hc: ot
    }, a.N("menuSelectionBackground", "Background color of the selected menu item in menus.")),
    Ot = u("menu.selectionBorder", {
      dark: null,
      light: null,
      hc: _
    }, a.N("menuSelectionBorder", "Border color of the selected menu item in menus.")),
    Pt = u("menu.separatorBackground", {
      dark: "#BBBBBB",
      light: "#888888",
      hc: v
    }, a.N("menuSeparatorBackground", "Color of a separator menu item in menus.")),
    Rt = u("toolbar.hoverBackground", {
      dark: "#5a5d5e50",
      light: "#b8b8b850",
      hc: null
    }, a.N("toolbarHoverBackground", "Toolbar background when hovering over actions using the mouse")),
    Ft = u("editor.snippetTabstopHighlightBackground", {
      dark: new o.Il(new o.VS(124, 124, 124, 0.3)),
      light: new o.Il(new o.VS(10, 50, 100, 0.2)),
      hc: new o.Il(new o.VS(124, 124, 124, 0.3))
    }, a.N("snippetTabstopHighlightBackground", "Highlight background color of a snippet tabstop.")),
    Bt = u("editor.snippetTabstopHighlightBorder", {
      dark: null,
      light: null,
      hc: null
    }, a.N("snippetTabstopHighlightBorder", "Highlight border color of a snippet tabstop.")),
    Vt = u("editor.snippetFinalTabstopHighlightBackground", {
      dark: null,
      light: null,
      hc: null
    }, a.N("snippetFinalTabstopHighlightBackground", "Highlight background color of the final tabstop of a snippet.")),
    Wt = u("editor.snippetFinalTabstopHighlightBorder", {
      dark: "#525252",
      light: new o.Il(new o.VS(10, 50, 100, 0.5)),
      hc: "#525252"
    }, a.N("snippetFinalTabstopHighlightBorder", "Highlight border color of the final tabstop of a snippet.")),
    Ht = u("editorOverviewRuler.findMatchForeground", {
      dark: "#d186167e",
      light: "#d186167e",
      hc: "#AB5A00"
    }, a.N("overviewRulerFindMatchForeground", "Overview ruler marker color for find matches. The color must not be opaque so as not to hide underlying decorations."), !0),
    zt = u("editorOverviewRuler.selectionHighlightForeground", {
      dark: "#A0A0A0CC",
      light: "#A0A0A0CC",
      hc: "#A0A0A0CC"
    }, a.N("overviewRulerSelectionHighlightForeground", "Overview ruler marker color for selection highlights. The color must not be opaque so as not to hide underlying decorations."), !0),
    jt = u("minimap.findMatchHighlight", {
      light: "#d18616",
      dark: "#d18616",
      hc: "#AB5A00"
    }, a.N("minimapFindMatchHighlight", "Minimap marker color for find matches."), !0),
    Ut = u("minimap.selectionOccurrenceHighlight", {
      light: "#c9c9c9",
      dark: "#676767",
      hc: "#ffffff"
    }, a.N("minimapSelectionOccurrenceHighlight", "Minimap marker color for repeating editor selections."), !0),
    $t = u("minimap.selectionHighlight", {
      light: "#ADD6FF",
      dark: "#264F78",
      hc: "#ffffff"
    }, a.N("minimapSelectionHighlight", "Minimap marker color for the editor selection."), !0),
    Kt = u("minimap.errorHighlight", {
      dark: new o.Il(new o.VS(255, 18, 18, 0.7)),
      light: new o.Il(new o.VS(255, 18, 18, 0.7)),
      hc: new o.Il(new o.VS(255, 50, 50, 1))
    }, a.N("minimapError", "Minimap marker color for errors.")),
    qt = u("minimap.warningHighlight", {
      dark: ee,
      light: ee,
      hc: te
    }, a.N("overviewRuleWarning", "Minimap marker color for warnings.")),
    Zt = u("minimap.background", {
      dark: null,
      light: null,
      hc: null
    }, a.N("minimapBackground", "Minimap background color.")),
    Gt = u("minimap.foregroundOpacity", {
      dark: o.Il.fromHex("#000f"),
      light: o.Il.fromHex("#000f"),
      hc: o.Il.fromHex("#000f")
    }, a.N("minimapForegroundOpacity", 'Opacity of foreground elements rendered in the minimap. For example, "#000000c0" will render the elements with 75% opacity.')),
    Yt = u("minimapSlider.background", {
      light: oi(K, 0.5),
      dark: oi(K, 0.5),
      hc: oi(K, 0.5)
    }, a.N("minimapSliderBackground", "Minimap slider background color.")),
    Qt = u("minimapSlider.hoverBackground", {
      light: oi(q, 0.5),
      dark: oi(q, 0.5),
      hc: oi(q, 0.5)
    }, a.N("minimapSliderHoverBackground", "Minimap slider background color when hovering.")),
    Xt = u("minimapSlider.activeBackground", {
      light: oi(Z, 0.5),
      dark: oi(Z, 0.5),
      hc: oi(Z, 0.5)
    }, a.N("minimapSliderActiveBackground", "Minimap slider background color when clicked on.")),
    Jt = u("problemsErrorIcon.foreground", {
      dark: Q,
      light: Q,
      hc: Q
    }, a.N("problemsErrorIconForeground", "The color used for the problems error icon.")),
    ei = u("problemsWarningIcon.foreground", {
      dark: ee,
      light: ee,
      hc: ee
    }, a.N("problemsWarningIconForeground", "The color used for the problems warning icon.")),
    ti = u("problemsInfoIcon.foreground", {
      dark: ne,
      light: ne,
      hc: ne
    }, a.N("problemsInfoIconForeground", "The color used for the problems info icon."));
  function ii(e, t) {
    return {
      op: 0,
      value: e,
      factor: t
    };
  }
  function ni(e, t) {
    return {
      op: 1,
      value: e,
      factor: t
    };
  }
  function oi(e, t) {
    return {
      op: 2,
      value: e,
      factor: t
    };
  }
  function si(...e) {
    return {
      op: 3,
      values: e
    };
  }
  function ri(e, t, i, n) {
    return {
      op: 4,
      value: e,
      background: t,
      factor: i,
      transparency: n
    };
  }
  function ai(e, t) {
    if (null !== e) return "string" == typeof e ? "#" === e[0] ? o.Il.fromHex(e) : t.getColor(e) : e instanceof o.Il ? e : "object" == typeof e ? (function (e, t) {
      var i, n, s;
      switch (e.op) {
        case 0:
          return null === (i = ai(e.value, t)) || void 0 === i ? void 0 : i.darken(e.factor);
        case 1:
          return null === (n = ai(e.value, t)) || void 0 === n ? void 0 : n.lighten(e.factor);
        case 2:
          return null === (s = ai(e.value, t)) || void 0 === s ? void 0 : s.transparent(e.factor);
        case 3:
          for (const i of e.values) {
            const e = ai(i, t);
            if (e) return e;
          }
          return;
        case 5:
          return ai(t.defines(e.if) ? e.then : e.else, t);
        case 4:
          const a = ai(e.value, t);
          if (!a) return;
          const l = ai(e.background, t);
          return l ? a.isDarkerThan(l) ? o.Il.getLighterColor(a, l, e.factor).transparent(e.transparency) : o.Il.getDarkerColor(a, l, e.factor).transparent(e.transparency) : a.transparent(e.factor * e.transparency);
        default:
          throw (0, r.vE)(e);
      }
    })(e, t) : void 0;
  }
  const li = "vscode://schemas/workbench-colors";
  let ci = c.B.as(l.I.JSONContribution);
  ci.registerSchema(li, h.getColorSchema());
  const di = new n.pY(() => ci.notifySchemaChanged(li), 200);
  h.onDidChangeSchema(() => {
    di.isScheduled() || di.schedule();
  });
};