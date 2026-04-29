module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  i(7587);
  var n = i(65321),
    o = i(41264),
    s = i(5976),
    r = i(16830),
    a = i(44101),
    l = i(28111),
    c = i(71531),
    d = i(12095),
    h = i(73910),
    u = i(97781),
    g = i(20913),
    p = i(92321),
    f = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    m = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let v = class e extends s.JT {
    constructor(e, t, i) {
      (super(), (this._editor = e), (this._modeService = i), (this._widget = null), this._register(this._editor.onDidChangeModel(e => this.stop())), this._register(this._editor.onDidChangeModelLanguage(e => this.stop())), this._register(a.RW.onDidChange(e => this.stop())), this._register(this._editor.onKeyUp(e => 9 === e.keyCode && this.stop())));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    dispose() {
      (this.stop(), super.dispose());
    }
    launch() {
      this._widget || (this._editor.hasModel() && (this._widget = new b(this._editor, this._modeService)));
    }
    stop() {
      this._widget && (this._widget.dispose(), (this._widget = null));
    }
  };
  ((v.ID = "editor.contrib.inspectTokens"), (v = f([m(1, d.Z), m(2, c.h)], v)));
  class _ extends r.R6 {
    constructor() {
      super({
        id: "editor.action.inspectTokens",
        label: g.ug.inspectTokensAction,
        alias: "Developer: Inspect Tokens",
        precondition: void 0
      });
    }
    run(e, t) {
      let i = v.get(t);
      i && i.launch();
    }
  }
  class b extends s.JT {
    constructor(e, t) {
      (super(), (this.allowEditorOverflow = !0), (this._editor = e), (this._modeService = t), (this._model = this._editor.getModel()), (this._domNode = document.createElement("div")), (this._domNode.className = "tokens-inspect-widget"), (this._tokenizationSupport = (function (e, t) {
        const i = a.RW.get(t);
        if (i) return i;
        const n = e.encodeLanguageId(t);
        return {
          getInitialState: () => l.nO,
          tokenize: (e, i, n, o) => (0, l.Ri)(t, e, n, o),
          tokenize2: (e, t, i, o) => (0, l.mh)(n, e, i, o)
        };
      })(this._modeService.languageIdCodec, this._model.getLanguageId())), this._compute(this._editor.getPosition()), this._register(this._editor.onDidChangeCursorPosition(e => this._compute(this._editor.getPosition()))), this._editor.addContentWidget(this));
    }
    dispose() {
      (this._editor.removeContentWidget(this), super.dispose());
    }
    getId() {
      return b._ID;
    }
    _compute(e) {
      let t = this._getTokensAtLine(e.lineNumber),
        i = 0;
      for (let n = t.tokens1.length - 1; n >= 0; n--) {
        let o = t.tokens1[n];
        if (e.column - 1 >= o.offset) {
          i = n;
          break;
        }
      }
      let s = 0;
      for (let i = t.tokens2.length >>> 1; i >= 0; i--) if (e.column - 1 >= t.tokens2[i << 1]) {
        s = i;
        break;
      }
      let r = this._model.getLineContent(e.lineNumber),
        a = "";
      if (i < t.tokens1.length) {
        let e = t.tokens1[i].offset,
          n = i + 1 < t.tokens1.length ? t.tokens1[i + 1].offset : r.length;
        a = r.substring(e, n);
      }
      ((0, n.mc)(this._domNode, (0, n.$)("h2.tm-token", void 0, (function (e) {
        let t = "";
        for (let i = 0, n = e.length; i < n; i++) {
          let n = e.charCodeAt(i);
          switch (n) {
            case 9:
              t += "→";
              break;
            case 32:
              t += "·";
              break;
            default:
              t += String.fromCharCode(n);
          }
        }
        return t;
      })(a), (0, n.$)("span.tm-token-length", void 0, `${a.length} ${1 === a.length ? "char" : "chars"}`))), (0, n.R3)(this._domNode, (0, n.$)("hr.tokens-inspect-separator", {
        style: "clear:both"
      })));
      const l = 1 + (s << 1) < t.tokens2.length ? this._decodeMetadata(t.tokens2[1 + (s << 1)]) : null;
      ((0, n.R3)(this._domNode, (0, n.$)("table.tm-metadata-table", void 0, (0, n.$)("tbody", void 0, (0, n.$)("tr", void 0, (0, n.$)("td.tm-metadata-key", void 0, "language"), (0, n.$)("td.tm-metadata-value", void 0, `${l ? l.languageId : "-?-"}`)), (0, n.$)("tr", void 0, (0, n.$)("td.tm-metadata-key", void 0, "token type"), (0, n.$)("td.tm-metadata-value", void 0, `${l ? this._tokenTypeToString(l.tokenType) : "-?-"}`)), (0, n.$)("tr", void 0, (0, n.$)("td.tm-metadata-key", void 0, "font style"), (0, n.$)("td.tm-metadata-value", void 0, `${l ? this._fontStyleToString(l.fontStyle) : "-?-"}`)), (0, n.$)("tr", void 0, (0, n.$)("td.tm-metadata-key", void 0, "foreground"), (0, n.$)("td.tm-metadata-value", void 0, `${l ? o.Il.Format.CSS.formatHex(l.foreground) : "-?-"}`)), (0, n.$)("tr", void 0, (0, n.$)("td.tm-metadata-key", void 0, "background"), (0, n.$)("td.tm-metadata-value", void 0, `${l ? o.Il.Format.CSS.formatHex(l.background) : "-?-"}`))))), (0, n.R3)(this._domNode, (0, n.$)("hr.tokens-inspect-separator")), i < t.tokens1.length && (0, n.R3)(this._domNode, (0, n.$)("span.tm-token-type", void 0, t.tokens1[i].type)), this._editor.layoutContentWidget(this));
    }
    _decodeMetadata(e) {
      let t = a.RW.getColorMap(),
        i = a.NX.getLanguageId(e),
        n = a.NX.getTokenType(e),
        o = a.NX.getFontStyle(e),
        s = a.NX.getForeground(e),
        r = a.NX.getBackground(e);
      return {
        languageId: this._modeService.languageIdCodec.decodeLanguageId(i),
        tokenType: n,
        fontStyle: o,
        foreground: t[s],
        background: t[r]
      };
    }
    _tokenTypeToString(e) {
      switch (e) {
        case 0:
          return "Other";
        case 1:
          return "Comment";
        case 2:
          return "String";
        case 4:
          return "RegEx";
        default:
          return "??";
      }
    }
    _fontStyleToString(e) {
      let t = "";
      return (1 & e && (t += "italic "), 2 & e && (t += "bold "), 4 & e && (t += "underline "), 0 === t.length && (t = "---"), t);
    }
    _getTokensAtLine(e) {
      let t = this._getStateBeforeLine(e),
        i = this._tokenizationSupport.tokenize(this._model.getLineContent(e), !0, t, 0),
        n = this._tokenizationSupport.tokenize2(this._model.getLineContent(e), !0, t, 0);
      return {
        startState: t,
        tokens1: i.tokens,
        tokens2: n.tokens,
        endState: i.endState
      };
    }
    _getStateBeforeLine(e) {
      let t = this._tokenizationSupport.getInitialState();
      for (let i = 1; i < e; i++) {
        t = this._tokenizationSupport.tokenize(this._model.getLineContent(i), !0, t, 0).endState;
      }
      return t;
    }
    getDomNode() {
      return this._domNode;
    }
    getPosition() {
      return {
        position: this._editor.getPosition(),
        preference: [2, 1]
      };
    }
  }
  ((b._ID = "editor.contrib.inspectTokensWidget"), (0, r._K)(v.ID, v), (0, r.Qr)(_), (0, u.Ic)((e, t) => {
    const i = e.getColor(h.CN);
    if (i) {
      let n = e.type === p.e.HIGH_CONTRAST ? 2 : 1;
      (t.addRule(`.monaco-editor .tokens-inspect-widget { border: ${n}px solid ${i}; }`), t.addRule(`.monaco-editor .tokens-inspect-widget .tokens-inspect-separator { background-color: ${i}; }`));
    }
    const n = e.getColor(h.yJ);
    n && t.addRule(`.monaco-editor .tokens-inspect-widget { background-color: ${n}; }`);
    const o = e.getColor(h.Sb);
    o && t.addRule(`.monaco-editor .tokens-inspect-widget { color: ${o}; }`);
  }));
};