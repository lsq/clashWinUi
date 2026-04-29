module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    c_: () => S,
    zu: () => I,
    UU: () => k
  });
  var n = i(4669),
    o = i(5976),
    s = i(97295),
    r = i(97461),
    a = i(97354),
    l = i(40764);
  class c {
    constructor(e) {
      if ((e.autoClosingPairs ? (this._autoClosingPairs = e.autoClosingPairs.map(e => new a.V6(e))) : e.brackets ? (this._autoClosingPairs = e.brackets.map(e => new a.V6({
        open: e[0],
        close: e[1]
      }))) : (this._autoClosingPairs = []), e.colorizedBracketPairs ? (this._colorizedBracketPairs = d(e.colorizedBracketPairs.map(e => [e[0], e[1]]))) : e.brackets ? (this._colorizedBracketPairs = d(e.brackets.map(e => [e[0], e[1]]).filter(e => !("<" === e[0] && ">" === e[1])))) : (this._colorizedBracketPairs = []), e.__electricCharacterSupport && e.__electricCharacterSupport.docComment)) {
        const t = e.__electricCharacterSupport.docComment;
        this._autoClosingPairs.push(new a.V6({
          open: t.open,
          close: t.close || ""
        }));
      }
      ((this._autoCloseBefore = "string" == typeof e.autoCloseBefore ? e.autoCloseBefore : c.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED), (this._surroundingPairs = e.surroundingPairs || this._autoClosingPairs));
    }
    getAutoClosingPairs() {
      return this._autoClosingPairs;
    }
    getAutoCloseBeforeSet() {
      return this._autoCloseBefore;
    }
    static shouldAutoClosePair(e, t, i) {
      if (0 === t.getTokenCount()) return !0;
      const n = t.findTokenIndexAtOffset(i - 2),
        o = t.getStandardTokenType(n);
      return e.isOK(o);
    }
    getSurroundingPairs() {
      return this._surroundingPairs;
    }
    getColorizedBrackets() {
      return this._colorizedBracketPairs;
    }
  }
  function d(e) {
    return e.filter(([e, t]) => "" !== e && "" !== t);
  }
  c.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED = ";:.,=}])> \n\t";
  var h = i(34227);
  class u {
    constructor(e) {
      this._richEditBrackets = e;
    }
    getElectricCharacters() {
      let e = [];
      if (this._richEditBrackets) for (const t of this._richEditBrackets.brackets) for (const i of t.close) {
        const t = i.charAt(i.length - 1);
        e.push(t);
      }
      return ((e = e.filter((e, t, i) => i.indexOf(e) === t)), e);
    }
    onElectricCharacter(e, t, i) {
      if (!this._richEditBrackets || 0 === this._richEditBrackets.brackets.length) return null;
      const n = t.findTokenIndexAtOffset(i - 1);
      if ((0, l.Bu)(t.getStandardTokenType(n))) return null;
      const o = this._richEditBrackets.reversedRegex,
        s = t.getLineContent().substring(0, i - 1) + e,
        r = h.Vr.findPrevBracketInRange(o, 1, s, 0, s.length);
      if (!r) return null;
      const a = s.substring(r.startColumn - 1, r.endColumn - 1).toLowerCase();
      if (this._richEditBrackets.textIsOpenBracket[a]) return null;
      const c = t.getActualLineContentBefore(r.startColumn - 1);
      return /^\s*$/.test(c) ? {
        matchOpenBracket: a
      } : null;
    }
  }
  function g(e) {
    return (e.global && (e.lastIndex = 0), !0);
  }
  class p {
    constructor(e) {
      this._indentationRules = e;
    }
    shouldIncrease(e) {
      return !!(this._indentationRules && this._indentationRules.increaseIndentPattern && g(this._indentationRules.increaseIndentPattern) && this._indentationRules.increaseIndentPattern.test(e));
    }
    shouldDecrease(e) {
      return !!(this._indentationRules && this._indentationRules.decreaseIndentPattern && g(this._indentationRules.decreaseIndentPattern) && this._indentationRules.decreaseIndentPattern.test(e));
    }
    shouldIndentNextLine(e) {
      return !!(this._indentationRules && this._indentationRules.indentNextLinePattern && g(this._indentationRules.indentNextLinePattern) && this._indentationRules.indentNextLinePattern.test(e));
    }
    shouldIgnore(e) {
      return !!(this._indentationRules && this._indentationRules.unIndentedLinePattern && g(this._indentationRules.unIndentedLinePattern) && this._indentationRules.unIndentedLinePattern.test(e));
    }
    getIndentMetadata(e) {
      let t = 0;
      return (this.shouldIncrease(e) && (t += 1), this.shouldDecrease(e) && (t += 2), this.shouldIndentNextLine(e) && (t += 4), this.shouldIgnore(e) && (t += 8), t);
    }
  }
  var f = i(17301);
  class m {
    constructor(e) {
      (((e = e || {}).brackets = e.brackets || [["(", ")"], ["{", "}"], ["[", "]"]]), (this._brackets = []), e.brackets.forEach(e => {
        const t = m._createOpenBracketRegExp(e[0]),
          i = m._createCloseBracketRegExp(e[1]);
        t && i && this._brackets.push({
          open: e[0],
          openRegExp: t,
          close: e[1],
          closeRegExp: i
        });
      }), (this._regExpRules = e.onEnterRules || []));
    }
    onEnter(e, t, i, n) {
      if (e >= 3) for (let e = 0, o = this._regExpRules.length; e < o; e++) {
        let o = this._regExpRules[e];
        if ([{
          reg: o.beforeText,
          text: i
        }, {
          reg: o.afterText,
          text: n
        }, {
          reg: o.previousLineText,
          text: t
        }].every(e => !e.reg || ((e.reg.lastIndex = 0), e.reg.test(e.text)))) return o.action;
      }
      if (e >= 2 && i.length > 0 && n.length > 0) for (let e = 0, t = this._brackets.length; e < t; e++) {
        let t = this._brackets[e];
        if (t.openRegExp.test(i) && t.closeRegExp.test(n)) return {
          indentAction: a.wU.IndentOutdent
        };
      }
      if (e >= 2 && i.length > 0) for (let e = 0, t = this._brackets.length; e < t; e++) {
        if (this._brackets[e].openRegExp.test(i)) return {
          indentAction: a.wU.Indent
        };
      }
      return null;
    }
    static _createOpenBracketRegExp(e) {
      let t = s.ec(e);
      return (/\B/.test(t.charAt(0)) || (t = "\\b" + t), (t += "\\s*$"), m._safeRegExp(t));
    }
    static _createCloseBracketRegExp(e) {
      let t = s.ec(e);
      return (/\B/.test(t.charAt(t.length - 1)) || (t += "\\b"), (t = "^\\s*" + t), m._safeRegExp(t));
    }
    static _safeRegExp(e) {
      try {
        return new RegExp(e);
      } catch (e) {
        return ((0, f.dL)(e), null);
      }
    }
  }
  var v = i(72065),
    _ = i(33108),
    b = i(71531),
    w = i(65026),
    y = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    C = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class x {
    constructor(e) {
      this.languageId = e;
    }
    affects(e) {
      return !this.languageId || this.languageId === e;
    }
  }
  const S = (0, v.yh)("languageConfigurationService");
  let k = class extends o.JT {
    constructor(e, t) {
      (super(), (this.configurationService = e), (this.modeService = t), (this.onDidChangeEmitter = this._register(new n.Q5())), (this.onDidChange = this.onDidChangeEmitter.event), (this.configurations = new Map()));
      const i = new Set(Object.values(L));
      (this._register(this.configurationService.onDidChangeConfiguration(e => {
        const t = e.change.keys.some(e => i.has(e)),
          n = e.change.overrides.filter(([e, t]) => t.some(e => i.has(e))).map(([e]) => this.modeService.validateLanguageId(e));
        if (t) (this.configurations.clear(), this.onDidChangeEmitter.fire(new x(void 0)));else for (const e of n) e && (this.configurations.delete(e), this.onDidChangeEmitter.fire(new x(e)));
      })), this._register(I.onDidChange(e => {
        (this.configurations.delete(e.languageId), this.onDidChangeEmitter.fire(new x(e.languageId)));
      })));
    }
    getLanguageConfiguration(e) {
      let t = this.configurations.get(e);
      return (t || ((t = (function (e, t, i) {
        let n = I.getLanguageConfiguration(e);
        if (!n) {
          const t = i.validateLanguageId(e);
          if (!t) throw new Error("Unexpected languageId");
          n = new A(t, {});
        }
        const o = (function (e, t) {
            const i = t.getValue(L.brackets, {
                overrideIdentifier: e
              }),
              n = t.getValue(L.colorizedBracketPairs, {
                overrideIdentifier: e
              });
            return {
              brackets: N(i),
              colorizedBracketPairs: N(n)
            };
          })(n.languageId, t),
          s = T([n.underlyingConfig, o]);
        return new A(n.languageId, s);
      })(e, this.configurationService, this.modeService)), this.configurations.set(e, t)), t);
    }
  };
  k = y([C(0, _.Ui), C(1, b.h)], k);
  const L = {
    brackets: "editor.language.brackets",
    colorizedBracketPairs: "editor.language.colorizedBracketPairs"
  };
  function N(e) {
    if (Array.isArray(e)) return e.map(e => {
      if (Array.isArray(e) && 2 === e.length) return [e[0], e[1]];
    }).filter(e => !!e);
  }
  class D {
    constructor(e) {
      this.languageId = e;
    }
  }
  const I = new (class {
    constructor() {
      ((this._entries = new Map()), (this._onDidChange = new n.Q5()), (this.onDidChange = this._onDidChange.event));
    }
    register(e, t, i = 0) {
      let n = this._entries.get(e);
      n || ((n = new E(e)), this._entries.set(e, n));
      const s = n.register(t, i);
      return (this._onDidChange.fire(new D(e)), (0, o.OF)(() => {
        (s.dispose(), this._onDidChange.fire(new D(e)));
      }));
    }
    getLanguageConfiguration(e) {
      let t = this._entries.get(e);
      return (null == t ? void 0 : t.getResolvedConfiguration()) || null;
    }
    getIndentationRules(e) {
      const t = this.getLanguageConfiguration(e);
      return (t && t.indentationRules) || null;
    }
    _getElectricCharacterSupport(e) {
      let t = this.getLanguageConfiguration(e);
      return (t && t.electricCharacter) || null;
    }
    getElectricCharacters(e) {
      let t = this._getElectricCharacterSupport(e);
      return t ? t.getElectricCharacters() : [];
    }
    onElectricCharacter(e, t, i) {
      let n = (0, l.wH)(t, i - 1),
        o = this._getElectricCharacterSupport(n.languageId);
      return o ? o.onElectricCharacter(e, n, i - n.firstCharOffset) : null;
    }
    getComments(e) {
      let t = this.getLanguageConfiguration(e);
      return (t && t.comments) || null;
    }
    _getCharacterPairSupport(e) {
      let t = this.getLanguageConfiguration(e);
      return (t && t.characterPair) || null;
    }
    getAutoClosingPairs(e) {
      const t = this._getCharacterPairSupport(e);
      return new a.c$(t ? t.getAutoClosingPairs() : []);
    }
    getAutoCloseBeforeSet(e) {
      let t = this._getCharacterPairSupport(e);
      return t ? t.getAutoCloseBeforeSet() : c.DEFAULT_AUTOCLOSE_BEFORE_LANGUAGE_DEFINED;
    }
    getSurroundingPairs(e) {
      let t = this._getCharacterPairSupport(e);
      return t ? t.getSurroundingPairs() : [];
    }
    shouldAutoClosePair(e, t, i) {
      const n = (0, l.wH)(t, i - 1);
      return c.shouldAutoClosePair(e, n, i - n.firstCharOffset);
    }
    getWordDefinition(e) {
      let t = this.getLanguageConfiguration(e);
      return t ? (0, r.eq)(t.wordDefinition || null) : (0, r.eq)(null);
    }
    getFoldingRules(e) {
      let t = this.getLanguageConfiguration(e);
      return t ? t.foldingRules : {};
    }
    getIndentRulesSupport(e) {
      let t = this.getLanguageConfiguration(e);
      return (t && t.indentRulesSupport) || null;
    }
    getPrecedingValidLine(e, t, i) {
      let n = e.getLanguageIdAtPosition(t, 0);
      if (t > 1) {
        let o,
          s = -1;
        for (o = t - 1; o >= 1; o--) {
          if (e.getLanguageIdAtPosition(o, 0) !== n) return s;
          let t = e.getLineContent(o);
          if (!i.shouldIgnore(t) && !/^\s+$/.test(t) && "" !== t) return o;
          s = o;
        }
      }
      return -1;
    }
    getInheritIndentForLine(e, t, i, n = !0) {
      if (e < 4) return null;
      const o = this.getIndentRulesSupport(t.getLanguageId());
      if (!o) return null;
      if (i <= 1) return {
        indentation: "",
        action: null
      };
      const r = this.getPrecedingValidLine(t, i, o);
      if (r < 0) return null;
      if (r < 1) return {
        indentation: "",
        action: null
      };
      const l = t.getLineContent(r);
      if (o.shouldIncrease(l) || o.shouldIndentNextLine(l)) return {
        indentation: s.V8(l),
        action: a.wU.Indent,
        line: r
      };
      if (o.shouldDecrease(l)) return {
        indentation: s.V8(l),
        action: null,
        line: r
      };
      {
        if (1 === r) return {
          indentation: s.V8(t.getLineContent(r)),
          action: null,
          line: r
        };
        const e = r - 1,
          i = o.getIndentMetadata(t.getLineContent(e));
        if (!(3 & i) && 4 & i) {
          let i = 0;
          for (let n = e - 1; n > 0; n--) if (!o.shouldIndentNextLine(t.getLineContent(n))) {
            i = n;
            break;
          }
          return {
            indentation: s.V8(t.getLineContent(i + 1)),
            action: null,
            line: i + 1
          };
        }
        if (n) return {
          indentation: s.V8(t.getLineContent(r)),
          action: null,
          line: r
        };
        for (let e = r; e > 0; e--) {
          const i = t.getLineContent(e);
          if (o.shouldIncrease(i)) return {
            indentation: s.V8(i),
            action: a.wU.Indent,
            line: e
          };
          if (o.shouldIndentNextLine(i)) {
            let i = 0;
            for (let n = e - 1; n > 0; n--) if (!o.shouldIndentNextLine(t.getLineContent(e))) {
              i = n;
              break;
            }
            return {
              indentation: s.V8(t.getLineContent(i + 1)),
              action: null,
              line: i + 1
            };
          }
          if (o.shouldDecrease(i)) return {
            indentation: s.V8(i),
            action: null,
            line: e
          };
        }
        return {
          indentation: s.V8(t.getLineContent(1)),
          action: null,
          line: 1
        };
      }
    }
    getGoodIndentForLine(e, t, i, n, o) {
      if (e < 4) return null;
      const r = this.getLanguageConfiguration(i);
      if (!r) return null;
      const l = this.getIndentRulesSupport(i);
      if (!l) return null;
      const c = this.getInheritIndentForLine(e, t, n),
        d = t.getLineContent(n);
      if (c) {
        const i = c.line;
        if (void 0 !== i) {
          const n = r.onEnter(e, "", t.getLineContent(i), "");
          if (n) {
            let e = s.V8(t.getLineContent(i));
            return (n.removeText && (e = e.substring(0, e.length - n.removeText)), n.indentAction === a.wU.Indent || n.indentAction === a.wU.IndentOutdent ? (e = o.shiftIndent(e)) : n.indentAction === a.wU.Outdent && (e = o.unshiftIndent(e)), l.shouldDecrease(d) && (e = o.unshiftIndent(e)), n.appendText && (e += n.appendText), s.V8(e));
          }
        }
        return l.shouldDecrease(d) ? c.action === a.wU.Indent ? c.indentation : o.unshiftIndent(c.indentation) : c.action === a.wU.Indent ? o.shiftIndent(c.indentation) : c.indentation;
      }
      return null;
    }
    getIndentForEnter(e, t, i, n) {
      if (e < 4) return null;
      t.forceTokenization(i.startLineNumber);
      const o = t.getLineTokens(i.startLineNumber),
        r = (0, l.wH)(o, i.startColumn - 1),
        c = r.getLineContent();
      let d,
        h,
        u = !1;
      if ((r.firstCharOffset > 0 && o.getLanguageId(0) !== r.languageId ? ((u = !0), (d = c.substr(0, i.startColumn - 1 - r.firstCharOffset))) : (d = o.getLineContent().substring(0, i.startColumn - 1)), i.isEmpty())) h = c.substr(i.startColumn - 1 - r.firstCharOffset);else {
        h = this.getScopedLineTokens(t, i.endLineNumber, i.endColumn).getLineContent().substr(i.endColumn - 1 - r.firstCharOffset);
      }
      const g = this.getIndentRulesSupport(r.languageId);
      if (!g) return null;
      const p = d,
        f = s.V8(d),
        m = {
          getLineTokens: e => t.getLineTokens(e),
          getLanguageId: () => t.getLanguageId(),
          getLanguageIdAtPosition: (e, i) => t.getLanguageIdAtPosition(e, i),
          getLineContent: e => e === i.startLineNumber ? p : t.getLineContent(e)
        },
        v = s.V8(o.getLineContent()),
        _ = this.getInheritIndentForLine(e, m, i.startLineNumber + 1);
      if (!_) {
        const e = u ? v : f;
        return {
          beforeEnter: e,
          afterEnter: e
        };
      }
      let b = u ? v : _.indentation;
      return (_.action === a.wU.Indent && (b = n.shiftIndent(b)), g.shouldDecrease(h) && (b = n.unshiftIndent(b)), {
        beforeEnter: u ? v : f,
        afterEnter: b
      });
    }
    getIndentActionForType(e, t, i, n, o) {
      if (e < 4) return null;
      const s = this.getScopedLineTokens(t, i.startLineNumber, i.startColumn);
      if (s.firstCharOffset) return null;
      const r = this.getIndentRulesSupport(s.languageId);
      if (!r) return null;
      const l = s.getLineContent(),
        c = l.substr(0, i.startColumn - 1 - s.firstCharOffset);
      let d;
      if (i.isEmpty()) d = l.substr(i.startColumn - 1 - s.firstCharOffset);else {
        d = this.getScopedLineTokens(t, i.endLineNumber, i.endColumn).getLineContent().substr(i.endColumn - 1 - s.firstCharOffset);
      }
      if (!r.shouldDecrease(c + d) && r.shouldDecrease(c + n + d)) {
        const n = this.getInheritIndentForLine(e, t, i.startLineNumber, !1);
        if (!n) return null;
        let s = n.indentation;
        return (n.action !== a.wU.Indent && (s = o.unshiftIndent(s)), s);
      }
      return null;
    }
    getIndentMetadata(e, t) {
      const i = this.getIndentRulesSupport(e.getLanguageId());
      return i ? t < 1 || t > e.getLineCount() ? null : i.getIndentMetadata(e.getLineContent(t)) : null;
    }
    getEnterAction(e, t, i) {
      const n = this.getScopedLineTokens(t, i.startLineNumber, i.startColumn),
        o = this.getLanguageConfiguration(n.languageId);
      if (!o) return null;
      const s = n.getLineContent(),
        r = s.substr(0, i.startColumn - 1 - n.firstCharOffset);
      let l;
      if (i.isEmpty()) l = s.substr(i.startColumn - 1 - n.firstCharOffset);else {
        l = this.getScopedLineTokens(t, i.endLineNumber, i.endColumn).getLineContent().substr(i.endColumn - 1 - n.firstCharOffset);
      }
      let c = "";
      if (i.startLineNumber > 1 && 0 === n.firstCharOffset) {
        const e = this.getScopedLineTokens(t, i.startLineNumber - 1);
        e.languageId === n.languageId && (c = e.getLineContent());
      }
      const d = o.onEnter(e, c, r, l);
      if (!d) return null;
      const h = d.indentAction;
      let u = d.appendText;
      const g = d.removeText || 0;
      u ? h === a.wU.Indent && (u = "\t" + u) : (u = h === a.wU.Indent || h === a.wU.IndentOutdent ? "\t" : "");
      let p = this.getIndentationAtPosition(t, i.startLineNumber, i.startColumn);
      return (g && (p = p.substring(0, p.length - g)), {
        indentAction: h,
        appendText: u,
        removeText: g,
        indentation: p
      });
    }
    getIndentationAtPosition(e, t, i) {
      const n = e.getLineContent(t);
      let o = s.V8(n);
      return (o.length > i - 1 && (o = o.substring(0, i - 1)), o);
    }
    getScopedLineTokens(e, t, i) {
      e.forceTokenization(t);
      const n = e.getLineTokens(t),
        o = void 0 === i ? e.getLineMaxColumn(t) - 1 : i - 1;
      return (0, l.wH)(n, o);
    }
  })();
  class E {
    constructor(e) {
      ((this.languageId = e), (this._resolved = null), (this._entries = []), (this._order = 0), (this._resolved = null));
    }
    register(e, t) {
      const i = new M(e, t, ++this._order);
      return (this._entries.push(i), (this._resolved = null), (0, o.OF)(() => {
        for (let e = 0; e < this._entries.length; e++) if (this._entries[e] === i) {
          (this._entries.splice(e, 1), (this._resolved = null));
          break;
        }
      }));
    }
    getResolvedConfiguration() {
      if (!this._resolved) {
        const e = this._resolve();
        e && (this._resolved = new A(this.languageId, e));
      }
      return this._resolved;
    }
    _resolve() {
      return 0 === this._entries.length ? null : (this._entries.sort(M.cmp), T(this._entries.map(e => e.configuration)));
    }
  }
  function T(e) {
    let t = {
      comments: void 0,
      brackets: void 0,
      wordPattern: void 0,
      indentationRules: void 0,
      onEnterRules: void 0,
      autoClosingPairs: void 0,
      surroundingPairs: void 0,
      autoCloseBefore: void 0,
      folding: void 0,
      colorizedBracketPairs: void 0,
      __electricCharacterSupport: void 0
    };
    for (const i of e) t = {
      comments: i.comments || t.comments,
      brackets: i.brackets || t.brackets,
      wordPattern: i.wordPattern || t.wordPattern,
      indentationRules: i.indentationRules || t.indentationRules,
      onEnterRules: i.onEnterRules || t.onEnterRules,
      autoClosingPairs: i.autoClosingPairs || t.autoClosingPairs,
      surroundingPairs: i.surroundingPairs || t.surroundingPairs,
      autoCloseBefore: i.autoCloseBefore || t.autoCloseBefore,
      folding: i.folding || t.folding,
      colorizedBracketPairs: i.colorizedBracketPairs || t.colorizedBracketPairs,
      __electricCharacterSupport: i.__electricCharacterSupport || t.__electricCharacterSupport
    };
    return t;
  }
  class M {
    constructor(e, t, i) {
      ((this.configuration = e), (this.priority = t), (this.order = i));
    }
    static cmp(e, t) {
      return e.priority === t.priority ? e.order - t.order : e.priority - t.priority;
    }
  }
  class A {
    constructor(e, t) {
      ((this.languageId = e), (this.underlyingConfig = t), (this._brackets = null), (this._electricCharacter = null), (this._onEnterSupport = this.underlyingConfig.brackets || this.underlyingConfig.indentationRules || this.underlyingConfig.onEnterRules ? new m(this.underlyingConfig) : null), (this.comments = A._handleComments(this.underlyingConfig)), (this.characterPair = new c(this.underlyingConfig)), (this.wordDefinition = this.underlyingConfig.wordPattern || r.Af), (this.indentationRules = this.underlyingConfig.indentationRules), this.underlyingConfig.indentationRules ? (this.indentRulesSupport = new p(this.underlyingConfig.indentationRules)) : (this.indentRulesSupport = null), (this.foldingRules = this.underlyingConfig.folding || {}));
    }
    getWordDefinition() {
      return (0, r.eq)(this.wordDefinition);
    }
    get brackets() {
      return (!this._brackets && this.underlyingConfig.brackets && (this._brackets = new h.EA(this.languageId, this.underlyingConfig.brackets)), this._brackets);
    }
    get electricCharacter() {
      return (this._electricCharacter || (this._electricCharacter = new u(this.brackets)), this._electricCharacter);
    }
    onEnter(e, t, i, n) {
      return this._onEnterSupport ? this._onEnterSupport.onEnter(e, t, i, n) : null;
    }
    static _handleComments(e) {
      let t = e.comments;
      if (!t) return null;
      let i = {};
      if ((t.lineComment && (i.lineCommentToken = t.lineComment), t.blockComment)) {
        let [e, n] = t.blockComment;
        ((i.blockCommentStartToken = e), (i.blockCommentEndToken = n));
      }
      return i;
    }
  }
  (0, w.z)(S, k);
};