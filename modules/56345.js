const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Pe: () => D,
    ei: () => N,
    fv: () => w,
    nG: () => p
  });
  var n = i(63580),
    o = i(4669),
    s = i(5976),
    r = i(36248),
    a = i(9488),
    l = i(64141),
    c = i(82334),
    d = i(27374),
    h = i(23193),
    u = i(89872),
    g = i(6626);
  const p = new (class {
      constructor() {
        ((this._tabFocus = !1), (this._onDidChangeTabFocus = new o.Q5()), (this.onDidChangeTabFocus = this._onDidChangeTabFocus.event));
      }
      getTabFocusMode() {
        return this._tabFocus;
      }
      setTabFocusMode(e) {
        this._tabFocus !== e && ((this._tabFocus = e), this._onDidChangeTabFocus.fire(this._tabFocus));
      }
    })(),
    f = Object.hasOwnProperty;
  class m {
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
  class v {
    constructor() {
      this._values = [];
    }
    _read(e) {
      return this._values[e];
    }
    _write(e, t) {
      this._values[e] = t;
    }
  }
  class _ {
    static readOptions(e) {
      const t = e,
        i = new v();
      for (const e of l.Bc) {
        const n = "_never_" === e.name ? void 0 : t[e.name];
        i._write(e.id, n);
      }
      return i;
    }
    static validateOptions(e) {
      const t = new l.hu();
      for (const i of l.Bc) t._write(i.id, i.validate(e._read(i.id)));
      return t;
    }
    static computeOptions(e, t) {
      const i = new m();
      for (const n of l.Bc) i._write(n.id, n.compute(t, i, e._read(n.id)));
      return i;
    }
    static _deepEquals(e, t) {
      if ("object" != typeof e || "object" != typeof t) return e === t;
      if (Array.isArray(e) || Array.isArray(t)) return !(!Array.isArray(e) || !Array.isArray(t)) && a.fS(e, t);
      for (let i in e) if (!_._deepEquals(e[i], t[i])) return !1;
      return !0;
    }
    static checkEquals(e, t) {
      const i = [];
      let n = !1;
      for (const o of l.Bc) {
        const s = !_._deepEquals(e._read(o.id), t._read(o.id));
        ((i[o.id] = s), s && (n = !0));
      }
      return n ? new l.Bb(i) : null;
    }
  }
  function b(e) {
    const t = r.I8(e);
    return ((function (e) {
      const t = e.wordWrap;
      !0 === t ? (e.wordWrap = "on") : !1 === t && (e.wordWrap = "off");
      const i = e.lineNumbers;
      (!0 === i ? (e.lineNumbers = "on") : !1 === i && (e.lineNumbers = "off"), !1 === e.autoClosingBrackets && ((e.autoClosingBrackets = "never"), (e.autoClosingQuotes = "never"), (e.autoSurround = "never")), "visible" === e.cursorBlinking && (e.cursorBlinking = "solid"));
      const n = e.renderWhitespace;
      !0 === n ? (e.renderWhitespace = "boundary") : !1 === n && (e.renderWhitespace = "none");
      const o = e.renderLineHighlight;
      !0 === o ? (e.renderLineHighlight = "line") : !1 === o && (e.renderLineHighlight = "none");
      const s = e.acceptSuggestionOnEnter;
      !0 === s ? (e.acceptSuggestionOnEnter = "on") : !1 === s && (e.acceptSuggestionOnEnter = "off");
      const r = e.tabCompletion;
      !1 === r ? (e.tabCompletion = "off") : !0 === r && (e.tabCompletion = "onlySnippets");
      const a = e.suggest;
      if (a && "object" == typeof a.filteredTypes && a.filteredTypes) {
        const e = {
          method: "showMethods",
          function: "showFunctions",
          constructor: "showConstructors",
          deprecated: "showDeprecated",
          field: "showFields",
          variable: "showVariables",
          class: "showClasses",
          struct: "showStructs",
          interface: "showInterfaces",
          module: "showModules",
          property: "showProperties",
          event: "showEvents",
          operator: "showOperators",
          unit: "showUnits",
          value: "showValues",
          constant: "showConstants",
          enum: "showEnums",
          enumMember: "showEnumMembers",
          keyword: "showKeywords",
          text: "showWords",
          color: "showColors",
          file: "showFiles",
          reference: "showReferences",
          folder: "showFolders",
          typeParameter: "showTypeParameters",
          snippet: "showSnippets"
        };
        (0, g.E)(e, e => {
          const t = a.filteredTypes[e.key];
          !1 === t && (a[e.value] = t);
        });
      }
      const l = e.hover;
      !0 === l ? (e.hover = {
        enabled: !0
      }) : !1 === l && (e.hover = {
        enabled: !1
      });
      const c = e.parameterHints;
      !0 === c ? (e.parameterHints = {
        enabled: !0
      }) : !1 === c && (e.parameterHints = {
        enabled: !1
      });
      const d = e.autoIndent;
      !0 === d ? (e.autoIndent = "full") : !1 === d && (e.autoIndent = "advanced");
      const h = e.matchBrackets;
      !0 === h ? (e.matchBrackets = "always") : !1 === h && (e.matchBrackets = "never");
      const {
        renderIndentGuides: u,
        highlightActiveIndentGuide: p
      } = e;
      (e.guides || (e.guides = {}), void 0 !== u && (e.guides.indentation = !!u), void 0 !== p && (e.guides.highlightActiveIndentation = !!p));
    })(t), t);
  }
  class w extends s.JT {
    constructor(e, t) {
      (super(), (this._onDidChange = this._register(new o.Q5())), (this.onDidChange = this._onDidChange.event), (this._onDidChangeFast = this._register(new o.Q5())), (this.onDidChangeFast = this._onDidChangeFast.event), (this.isSimpleWidget = e), (this._isDominatedByLongLines = !1), (this._computeOptionsMemory = new l.LJ()), (this._viewLineCount = 1), (this._lineNumbersDigitCount = 1), (this._rawOptions = b(t)), (this._readOptions = _.readOptions(this._rawOptions)), (this._validatedOptions = _.validateOptions(this._readOptions)), this._register(c.C.onDidChangeZoomLevel(e => this._recomputeOptions())), this._register(p.onDidChangeTabFocus(e => this._recomputeOptions())));
    }
    observeReferenceElement(e) {}
    updatePixelRatio() {}
    _recomputeOptions() {
      const e = this.options,
        t = this._computeInternalOptions();
      if (e) {
        const i = _.checkEquals(e, t);
        if (null === i) return;
        ((this.options = t), this._onDidChangeFast.fire(i), this._onDidChange.fire(i));
      } else this.options = t;
    }
    getRawOptions() {
      return this._rawOptions;
    }
    _computeInternalOptions() {
      const e = this._getEnvConfiguration(),
        t = d.E4.createFromValidatedSettings(this._validatedOptions, e.zoomLevel, e.pixelRatio, this.isSimpleWidget),
        i = {
          memory: this._computeOptionsMemory,
          outerWidth: e.outerWidth,
          outerHeight: e.outerHeight,
          fontInfo: this.readConfiguration(t),
          extraEditorClassName: e.extraEditorClassName,
          isDominatedByLongLines: this._isDominatedByLongLines,
          viewLineCount: this._viewLineCount,
          lineNumbersDigitCount: this._lineNumbersDigitCount,
          emptySelectionClipboard: e.emptySelectionClipboard,
          pixelRatio: e.pixelRatio,
          tabFocusMode: p.getTabFocusMode(),
          accessibilitySupport: e.accessibilitySupport
        };
      return _.computeOptions(this._validatedOptions, i);
    }
    static _subsetEquals(e, t) {
      for (const i in t) if (f.call(t, i)) {
        const n = t[i],
          o = e[i];
        if (o === n) continue;
        if (Array.isArray(o) && Array.isArray(n)) {
          if (!a.fS(o, n)) return !1;
          continue;
        }
        if (o && "object" == typeof o && n && "object" == typeof n) {
          if (!this._subsetEquals(o, n)) return !1;
          continue;
        }
        return !1;
      }
      return !0;
    }
    updateOptions(e) {
      if (void 0 === e) return;
      const t = b(e);
      w._subsetEquals(this._rawOptions, t) || ((this._rawOptions = r.jB(this._rawOptions, t || {})), (this._readOptions = _.readOptions(this._rawOptions)), (this._validatedOptions = _.validateOptions(this._readOptions)), this._recomputeOptions());
    }
    setIsDominatedByLongLines(e) {
      ((this._isDominatedByLongLines = e), this._recomputeOptions());
    }
    setMaxLineNumber(e) {
      const t = w._digitCount(e);
      this._lineNumbersDigitCount !== t && ((this._lineNumbersDigitCount = t), this._recomputeOptions());
    }
    setViewLineCount(e) {
      this._viewLineCount !== e && ((this._viewLineCount = e), this._recomputeOptions());
    }
    static _digitCount(e) {
      let t = 0;
      for (; e;) ((e = Math.floor(e / 10)), t++);
      return t || 1;
    }
  }
  const y = Object.freeze({
      id: "editor",
      order: 5,
      type: "object",
      title: n.N("editorConfigurationTitle", "Editor"),
      scope: 5
    }),
    C = u.B.as(h.IP.Configuration),
    x = Object.assign(Object.assign({}, y), {
      properties: {
        "editor.tabSize": {
          type: "number",
          default: l.DB.tabSize,
          minimum: 1,
          markdownDescription: n.N("tabSize", "The number of spaces a tab is equal to. This setting is overridden based on the file contents when `#editor.detectIndentation#` is on.")
        },
        "editor.insertSpaces": {
          type: "boolean",
          default: l.DB.insertSpaces,
          markdownDescription: n.N("insertSpaces", "Insert spaces when pressing `Tab`. This setting is overridden based on the file contents when `#editor.detectIndentation#` is on.")
        },
        "editor.detectIndentation": {
          type: "boolean",
          default: l.DB.detectIndentation,
          markdownDescription: n.N("detectIndentation", "Controls whether `#editor.tabSize#` and `#editor.insertSpaces#` will be automatically detected when a file is opened based on the file contents.")
        },
        "editor.trimAutoWhitespace": {
          type: "boolean",
          default: l.DB.trimAutoWhitespace,
          description: n.N("trimAutoWhitespace", "Remove trailing auto inserted whitespace.")
        },
        "editor.largeFileOptimizations": {
          type: "boolean",
          default: l.DB.largeFileOptimizations,
          description: n.N("largeFileOptimizations", "Special handling for large files to disable certain memory intensive features.")
        },
        "editor.wordBasedSuggestions": {
          type: "boolean",
          default: !0,
          description: n.N("wordBasedSuggestions", "Controls whether completions should be computed based on words in the document.")
        },
        "editor.wordBasedSuggestionsMode": {
          enum: ["currentDocument", "matchingDocuments", "allDocuments"],
          default: "matchingDocuments",
          enumDescriptions: [n.N("wordBasedSuggestionsMode.currentDocument", "Only suggest words from the active document."), n.N("wordBasedSuggestionsMode.matchingDocuments", "Suggest words from all open documents of the same language."), n.N("wordBasedSuggestionsMode.allDocuments", "Suggest words from all open documents.")],
          description: n.N("wordBasedSuggestionsMode", "Controls from which documents word based completions are computed.")
        },
        "editor.semanticHighlighting.enabled": {
          enum: [!0, !1, "configuredByTheme"],
          enumDescriptions: [n.N("semanticHighlighting.true", "Semantic highlighting enabled for all color themes."), n.N("semanticHighlighting.false", "Semantic highlighting disabled for all color themes."), n.N("semanticHighlighting.configuredByTheme", "Semantic highlighting is configured by the current color theme's `semanticHighlighting` setting.")],
          default: "configuredByTheme",
          description: n.N("semanticHighlighting.enabled", "Controls whether the semanticHighlighting is shown for the languages that support it.")
        },
        "editor.stablePeek": {
          type: "boolean",
          default: !1,
          markdownDescription: n.N("stablePeek", "Keep peek editors open even when double clicking their content or when hitting `Escape`.")
        },
        "editor.maxTokenizationLineLength": {
          type: "integer",
          default: 2e4,
          description: n.N("maxTokenizationLineLength", "Lines above this length will not be tokenized for performance reasons")
        },
        "editor.language.brackets": {
          type: "array",
          default: !1,
          description: n.N("schema.brackets", "Defines the bracket symbols that increase or decrease the indentation."),
          items: {
            type: "array",
            items: [{
              type: "string",
              description: n.N("schema.openBracket", "The opening bracket character or string sequence.")
            }, {
              type: "string",
              description: n.N("schema.closeBracket", "The closing bracket character or string sequence.")
            }]
          }
        },
        "editor.language.colorizedBracketPairs": {
          type: "array",
          default: !1,
          description: n.N("schema.colorizedBracketPairs", "Defines the bracket pairs that are colorized by their nesting level if bracket pair colorization is enabled."),
          items: {
            type: "array",
            items: [{
              type: "string",
              description: n.N("schema.openBracket", "The opening bracket character or string sequence.")
            }, {
              type: "string",
              description: n.N("schema.closeBracket", "The closing bracket character or string sequence.")
            }]
          }
        },
        "diffEditor.maxComputationTime": {
          type: "number",
          default: 5e3,
          description: n.N("maxComputationTime", new Language(modifyState.language).timeoutInTimeDiff())
        },
        "diffEditor.maxFileSize": {
          type: "number",
          default: 50,
          description: n.N("maxFileSize", new Language(modifyState.language).fileSizeInMBForDiff())
        },
        "diffEditor.renderSideBySide": {
          type: "boolean",
          default: !0,
          description: n.N("sideBySide", "控制 diff 编辑器是并排还是内联显示 diff")
        },
        "diffEditor.ignoreTrimWhitespace": {
          type: "boolean",
          default: !0,
          description: n.N("ignoreTrimWhitespace", "When enabled, the diff editor ignores changes in leading or trailing whitespace.")
        },
        "diffEditor.renderIndicators": {
          type: "boolean",
          default: !0,
          description: n.N("renderIndicators", "Controls whether the diff editor shows +/- indicators for added/removed changes.")
        },
        "diffEditor.codeLens": {
          type: "boolean",
          default: !1,
          description: n.N("codeLens", "Controls whether the editor shows CodeLens.")
        },
        "diffEditor.wordWrap": {
          type: "string",
          enum: ["off", "on", "inherit"],
          default: "inherit",
          markdownEnumDescriptions: [n.N("wordWrap.off", "Lines will never wrap."), n.N("wordWrap.on", "Lines will wrap at the viewport width."), n.N("wordWrap.inherit", "Lines will wrap according to the `#editor.wordWrap#` setting.")]
        }
      }
    });
  for (const e of l.Bc) {
    const t = e.schema;
    if (void 0 !== t) if (void 0 !== (S = t).type || void 0 !== S.anyOf) x.properties[`editor.${e.name}`] = t;else for (let e in t) f.call(t, e) && (x.properties[e] = t[e]);
  }
  var S;
  let k = null;
  function L() {
    return (null === k && ((k = Object.create(null)), Object.keys(x.properties).forEach(e => {
      k[e] = !0;
    })), k);
  }
  function N(e) {
    return L()[`editor.${e}`] || !1;
  }
  function D(e) {
    return L()[`diffEditor.${e}`] || !1;
  }
  C.registerConfiguration(x);
};