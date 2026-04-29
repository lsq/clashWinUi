module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    l: () => R
  });
  var n = i(9488),
    o = i(5976),
    s = i(97295),
    r = (i(27124), i(69386)),
    a = i(24314),
    l = i(3860),
    c = i(44174),
    d = i(44349),
    h = i(73910),
    u = i(97781),
    g = i(40382),
    p = i(63472),
    f = i(68843),
    m = i(88721),
    v = i(95935);
  const _ = new Uint8Array(16),
    b = [];
  for (let e = 0; e < 256; e++) b.push(e.toString(16).padStart(2, "0"));
  let w;
  w = "object" == typeof crypto && "function" == typeof crypto.getRandomValues ? crypto.getRandomValues.bind(crypto) : function (e) {
    for (let t = 0; t < e.length; t++) e[t] = Math.floor(256 * Math.random());
    return e;
  };
  var y = i(83831),
    C = i(63580),
    x = i(70666);
  const S = "code-workspace";
  function k(e) {
    const t = e;
    return "string" == typeof (null == t ? void 0 : t.id) && x.o.isUri(t.uri);
  }
  class L {
    constructor(e) {
      this._delegates = e;
    }
    resolve(e) {
      for (const t of this._delegates) {
        let i = t.resolve(e);
        if (void 0 !== i) return i;
      }
    }
  }
  class N {
    constructor(e, t, i, n) {
      ((this._model = e), (this._selection = t), (this._selectionIdx = i), (this._overtypingCapturer = n));
    }
    resolve(e) {
      const {
        name: t
      } = e;
      if ("SELECTION" === t || "TM_SELECTED_TEXT" === t) {
        let t = this._model.getValueInRange(this._selection) || void 0,
          i = this._selection.startLineNumber !== this._selection.endLineNumber;
        if (!t && this._overtypingCapturer) {
          const e = this._overtypingCapturer.getLastOvertypedInfo(this._selectionIdx);
          e && ((t = e.value), (i = e.multiline));
        }
        if (t && i && e.snippet) {
          const i = this._model.getLineContent(this._selection.startLineNumber),
            n = (0, s.V8)(i, 0, this._selection.startColumn - 1);
          let o = n;
          e.snippet.walk(t => t !== e && (t instanceof p.xv && (o = (0, s.V8)((0, s.uq)(t.value).pop())), !0));
          const r = (0, s.Mh)(o, n);
          t = t.replace(/(\r\n|\r|\n)(.*)/g, (e, t, i) => `${t}${o.substr(r)}${i}`);
        }
        return t;
      }
      if ("TM_CURRENT_LINE" === t) return this._model.getLineContent(this._selection.positionLineNumber);
      if ("TM_CURRENT_WORD" === t) {
        const e = this._model.getWordAtPosition({
          lineNumber: this._selection.positionLineNumber,
          column: this._selection.positionColumn
        });
        return (e && e.word) || void 0;
      }
      return "TM_LINE_INDEX" === t ? String(this._selection.positionLineNumber - 1) : "TM_LINE_NUMBER" === t ? String(this._selection.positionLineNumber) : void 0;
    }
  }
  class D {
    constructor(e, t) {
      ((this._labelService = e), (this._model = t));
    }
    resolve(e) {
      const {
        name: t
      } = e;
      if ("TM_FILENAME" === t) return m.EZ(this._model.uri.fsPath);
      if ("TM_FILENAME_BASE" === t) {
        const e = m.EZ(this._model.uri.fsPath),
          t = e.lastIndexOf(".");
        return t <= 0 ? e : e.slice(0, t);
      }
      return "TM_DIRECTORY" === t ? "." === m.XX(this._model.uri.fsPath) ? "" : this._labelService.getUriLabel((0, v.XX)(this._model.uri)) : "TM_FILEPATH" === t ? this._labelService.getUriLabel(this._model.uri) : "RELATIVE_FILEPATH" === t ? this._labelService.getUriLabel(this._model.uri, {
        relative: !0,
        noPrefix: !0
      }) : void 0;
    }
  }
  class I {
    constructor(e, t, i, n) {
      ((this._readClipboardText = e), (this._selectionIdx = t), (this._selectionCount = i), (this._spread = n));
    }
    resolve(e) {
      if ("CLIPBOARD" !== e.name) return;
      const t = this._readClipboardText();
      if (t) {
        if (this._spread) {
          const e = t.split(/\r\n|\n|\r/).filter(e => !(0, s.m5)(e));
          if (e.length === this._selectionCount) return e[this._selectionIdx];
        }
        return t;
      }
    }
  }
  class E {
    constructor(e, t) {
      ((this._model = e), (this._selection = t));
    }
    resolve(e) {
      const {
          name: t
        } = e,
        i = this._model.getLanguageIdAtPosition(this._selection.selectionStartLineNumber, this._selection.selectionStartColumn),
        n = y.zu.getComments(i);
      if (n) return "LINE_COMMENT" === t ? n.lineCommentToken || void 0 : "BLOCK_COMMENT_START" === t ? n.blockCommentStartToken || void 0 : ("BLOCK_COMMENT_END" === t && n.blockCommentEndToken) || void 0;
    }
  }
  class T {
    constructor() {
      this._date = new Date();
    }
    resolve(e) {
      const {
        name: t
      } = e;
      return "CURRENT_YEAR" === t ? String(this._date.getFullYear()) : "CURRENT_YEAR_SHORT" === t ? String(this._date.getFullYear()).slice(-2) : "CURRENT_MONTH" === t ? String(this._date.getMonth().valueOf() + 1).padStart(2, "0") : "CURRENT_DATE" === t ? String(this._date.getDate().valueOf()).padStart(2, "0") : "CURRENT_HOUR" === t ? String(this._date.getHours().valueOf()).padStart(2, "0") : "CURRENT_MINUTE" === t ? String(this._date.getMinutes().valueOf()).padStart(2, "0") : "CURRENT_SECOND" === t ? String(this._date.getSeconds().valueOf()).padStart(2, "0") : "CURRENT_DAY_NAME" === t ? T.dayNames[this._date.getDay()] : "CURRENT_DAY_NAME_SHORT" === t ? T.dayNamesShort[this._date.getDay()] : "CURRENT_MONTH_NAME" === t ? T.monthNames[this._date.getMonth()] : "CURRENT_MONTH_NAME_SHORT" === t ? T.monthNamesShort[this._date.getMonth()] : "CURRENT_SECONDS_UNIX" === t ? String(Math.floor(this._date.getTime() / 1e3)) : void 0;
    }
  }
  ((T.dayNames = [C.N("Sunday", "Sunday"), C.N("Monday", "Monday"), C.N("Tuesday", "Tuesday"), C.N("Wednesday", "Wednesday"), C.N("Thursday", "Thursday"), C.N("Friday", "Friday"), C.N("Saturday", "Saturday")]), (T.dayNamesShort = [C.N("SundayShort", "Sun"), C.N("MondayShort", "Mon"), C.N("TuesdayShort", "Tue"), C.N("WednesdayShort", "Wed"), C.N("ThursdayShort", "Thu"), C.N("FridayShort", "Fri"), C.N("SaturdayShort", "Sat")]), (T.monthNames = [C.N("January", "January"), C.N("February", "February"), C.N("March", "March"), C.N("April", "April"), C.N("May", "May"), C.N("June", "June"), C.N("July", "July"), C.N("August", "August"), C.N("September", "September"), C.N("October", "October"), C.N("November", "November"), C.N("December", "December")]), (T.monthNamesShort = [C.N("JanuaryShort", "Jan"), C.N("FebruaryShort", "Feb"), C.N("MarchShort", "Mar"), C.N("AprilShort", "Apr"), C.N("MayShort", "May"), C.N("JuneShort", "Jun"), C.N("JulyShort", "Jul"), C.N("AugustShort", "Aug"), C.N("SeptemberShort", "Sep"), C.N("OctoberShort", "Oct"), C.N("NovemberShort", "Nov"), C.N("DecemberShort", "Dec")]));
  class M {
    constructor(e) {
      this._workspaceService = e;
    }
    resolve(e) {
      if (!this._workspaceService) return;
      const t = (function (e) {
        return e.configuration ? {
          id: e.id,
          configPath: e.configuration
        } : 1 === e.folders.length ? {
          id: e.id,
          uri: e.folders[0].uri
        } : void 0;
      })(this._workspaceService.getWorkspace());
      return t ? "WORKSPACE_NAME" === e.name ? this._resolveWorkspaceName(t) : "WORKSPACE_FOLDER" === e.name ? this._resoveWorkspacePath(t) : void 0 : void 0;
    }
    _resolveWorkspaceName(e) {
      if (k(e)) return m.EZ(e.uri.path);
      let t = m.EZ(e.configPath.path);
      return (t.endsWith(S) && (t = t.substr(0, t.length - 14 - 1)), t);
    }
    _resoveWorkspacePath(e) {
      if (k(e)) return (0, f.D)(e.uri.fsPath);
      let t = m.EZ(e.configPath.path),
        i = e.configPath.fsPath;
      return (i.endsWith(t) && (i = i.substr(0, i.length - t.length - 1)), i ? (0, f.D)(i) : "/");
    }
  }
  class A {
    resolve(e) {
      const {
        name: t
      } = e;
      return "RANDOM" === t ? Math.random().toString().slice(-6) : "RANDOM_HEX" === t ? Math.random().toString(16).slice(-6) : "UUID" === t ? (function () {
        (w(_), (_[6] = (15 & _[6]) | 64), (_[8] = (63 & _[8]) | 128));
        let e = 0,
          t = "";
        return ((t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), (t += "-"), (t += b[_[e++]]), (t += b[_[e++]]), (t += "-"), (t += b[_[e++]]), (t += b[_[e++]]), (t += "-"), (t += b[_[e++]]), (t += b[_[e++]]), (t += "-"), (t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), (t += b[_[e++]]), t);
      })() : void 0;
    }
  }
  (0, u.Ic)((e, t) => {
    function i(t) {
      const i = e.getColor(t);
      return i ? i.toString() : "transparent";
    }
    (t.addRule(`.monaco-editor .snippet-placeholder { background-color: ${i(h.u2)}; outline-color: ${i(h.Pk)}; }`), t.addRule(`.monaco-editor .finish-snippet-placeholder { background-color: ${i(h.I1)}; outline-color: ${i(h.U6)}; }`));
  });
  class O {
    constructor(e, t, i, o) {
      ((this._editor = e), (this._snippet = t), (this._offset = i), (this._snippetLineLeadingWhitespace = o), (this._nestingLevel = 1), (this._placeholderGroups = (0, n.vM)(t.placeholders, p.Vm.compareByIndex)), (this._placeholderGroupsIdx = -1));
    }
    dispose() {
      (this._placeholderDecorations && this._editor.deltaDecorations([...this._placeholderDecorations.values()], []), (this._placeholderGroups.length = 0));
    }
    _initDecorations() {
      if (this._placeholderDecorations) return;
      this._placeholderDecorations = new Map();
      const e = this._editor.getModel();
      this._editor.changeDecorations(t => {
        for (const i of this._snippet.placeholders) {
          const n = this._snippet.offset(i),
            o = this._snippet.fullLen(i),
            s = a.e.fromPositions(e.getPositionAt(this._offset + n), e.getPositionAt(this._offset + n + o)),
            r = i.isFinalTabstop ? O._decor.inactiveFinal : O._decor.inactive,
            l = t.addDecoration(s, r);
          this._placeholderDecorations.set(i, l);
        }
      });
    }
    move(e) {
      if (!this._editor.hasModel()) return [];
      if ((this._initDecorations(), this._placeholderGroupsIdx >= 0)) {
        let e = [];
        for (const t of this._placeholderGroups[this._placeholderGroupsIdx]) if (t.transform) {
          const i = this._placeholderDecorations.get(t),
            n = this._editor.getModel().getDecorationRange(i),
            o = this._editor.getModel().getValueInRange(n),
            s = t.transform.resolve(o).split(/\r\n|\r|\n/);
          for (let e = 1; e < s.length; e++) s[e] = this._editor.getModel().normalizeIndentation(this._snippetLineLeadingWhitespace + s[e]);
          e.push(r.h.replace(n, s.join(this._editor.getModel().getEOL())));
        }
        e.length > 0 && this._editor.executeEdits("snippet.placeholderTransform", e);
      }
      let t = !1;
      !0 === e && this._placeholderGroupsIdx < this._placeholderGroups.length - 1 ? ((this._placeholderGroupsIdx += 1), (t = !0)) : !1 === e && this._placeholderGroupsIdx > 0 && ((this._placeholderGroupsIdx -= 1), (t = !0));
      const i = this._editor.getModel().changeDecorations(e => {
        const i = new Set(),
          n = [];
        for (const o of this._placeholderGroups[this._placeholderGroupsIdx]) {
          const s = this._placeholderDecorations.get(o),
            r = this._editor.getModel().getDecorationRange(s);
          (n.push(new l.Y(r.startLineNumber, r.startColumn, r.endLineNumber, r.endColumn)), (t = t && this._hasPlaceholderBeenCollapsed(o)), e.changeDecorationOptions(s, o.isFinalTabstop ? O._decor.activeFinal : O._decor.active), i.add(o));
          for (const t of this._snippet.enclosingPlaceholders(o)) {
            const n = this._placeholderDecorations.get(t);
            (e.changeDecorationOptions(n, t.isFinalTabstop ? O._decor.activeFinal : O._decor.active), i.add(t));
          }
        }
        for (const [t, n] of this._placeholderDecorations) i.has(t) || e.changeDecorationOptions(n, t.isFinalTabstop ? O._decor.inactiveFinal : O._decor.inactive);
        return n;
      });
      return t ? this.move(e) : null != i ? i : [];
    }
    _hasPlaceholderBeenCollapsed(e) {
      let t = e;
      for (; t;) {
        if (t instanceof p.Vm) {
          const e = this._placeholderDecorations.get(t);
          if (this._editor.getModel().getDecorationRange(e).isEmpty() && t.toString().length > 0) return !0;
        }
        t = t.parent;
      }
      return !1;
    }
    get isAtFirstPlaceholder() {
      return (this._placeholderGroupsIdx <= 0 || 0 === this._placeholderGroups.length);
    }
    get isAtLastPlaceholder() {
      return (this._placeholderGroupsIdx === this._placeholderGroups.length - 1);
    }
    get hasPlaceholder() {
      return this._snippet.placeholders.length > 0;
    }
    computePossibleSelections() {
      const e = new Map();
      for (const t of this._placeholderGroups) {
        let i;
        for (const n of t) {
          if (n.isFinalTabstop) break;
          i || ((i = []), e.set(n.index, i));
          const t = this._placeholderDecorations.get(n),
            o = this._editor.getModel().getDecorationRange(t);
          if (!o) {
            e.delete(n.index);
            break;
          }
          i.push(o);
        }
      }
      return e;
    }
    get choice() {
      return this._placeholderGroups[this._placeholderGroupsIdx][0].choice;
    }
    merge(e) {
      const t = this._editor.getModel();
      ((this._nestingLevel *= 10), this._editor.changeDecorations(i => {
        for (const n of this._placeholderGroups[this._placeholderGroupsIdx]) {
          const o = e.shift();
          console.assert(!o._placeholderDecorations);
          const s = o._snippet.placeholderInfo.last.index;
          for (const e of o._snippet.placeholderInfo.all) e.isFinalTabstop ? (e.index = n.index + (s + 1) / this._nestingLevel) : (e.index = n.index + e.index / this._nestingLevel);
          this._snippet.replace(n, o._snippet.children);
          const r = this._placeholderDecorations.get(n);
          (i.removeDecoration(r), this._placeholderDecorations.delete(n));
          for (const e of o._snippet.placeholders) {
            const n = o._snippet.offset(e),
              s = o._snippet.fullLen(e),
              r = a.e.fromPositions(t.getPositionAt(o._offset + n), t.getPositionAt(o._offset + n + s)),
              l = i.addDecoration(r, O._decor.inactive);
            this._placeholderDecorations.set(e, l);
          }
        }
        this._placeholderGroups = (0, n.vM)(this._snippet.placeholders, p.Vm.compareByIndex);
      }));
    }
  }
  O._decor = {
    active: c.qx.register({
      description: "snippet-placeholder-1",
      stickiness: 0,
      className: "snippet-placeholder"
    }),
    inactive: c.qx.register({
      description: "snippet-placeholder-2",
      stickiness: 1,
      className: "snippet-placeholder"
    }),
    activeFinal: c.qx.register({
      description: "snippet-placeholder-3",
      stickiness: 1,
      className: "finish-snippet-placeholder"
    }),
    inactiveFinal: c.qx.register({
      description: "snippet-placeholder-4",
      stickiness: 1,
      className: "finish-snippet-placeholder"
    })
  };
  const P = {
    overwriteBefore: 0,
    overwriteAfter: 0,
    adjustWhitespace: !0,
    clipboardText: void 0,
    overtypingCapturer: void 0
  };
  class R {
    constructor(e, t, i = P) {
      ((this._templateMerges = []), (this._snippets = []), (this._editor = e), (this._template = t), (this._options = i));
    }
    static adjustWhitespace(e, t, i, n, o) {
      const r = e.getLineContent(t.lineNumber),
        a = (0, s.V8)(r, 0, t.column - 1);
      let l;
      return (i.walk(t => {
        if (!(t instanceof p.xv) || t.parent instanceof p.Lv) return !0;
        const o = t.value.split(/\r\n|\r|\n/);
        if (n) {
          const n = i.offset(t);
          if (0 === n) o[0] = e.normalizeIndentation(o[0]);else {
            l = null != l ? l : i.toString();
            let t = l.charCodeAt(n - 1);
            (10 !== t && 13 !== t) || (o[0] = e.normalizeIndentation(a + o[0]));
          }
          for (let t = 1; t < o.length; t++) o[t] = e.normalizeIndentation(a + o[t]);
        }
        const s = o.join(e.getEOL());
        return (s !== t.value && (t.parent.replace(t, [new p.xv(s)]), (l = void 0)), !0);
      }), a);
    }
    static adjustSelection(e, t, i, n) {
      if (0 !== i || 0 !== n) {
        const {
            positionLineNumber: o,
            positionColumn: s
          } = t,
          r = s - i,
          a = s + n,
          c = e.validateRange({
            startLineNumber: o,
            startColumn: r,
            endLineNumber: o,
            endColumn: a
          });
        t = l.Y.createWithDirection(c.startLineNumber, c.startColumn, c.endLineNumber, c.endColumn, t.getDirection());
      }
      return t;
    }
    static createEditsAndSnippets(e, t, i, n, o, s, l, c) {
      const h = [],
        u = [];
      if (!e.hasModel()) return {
        edits: h,
        snippets: u
      };
      const f = e.getModel(),
        m = e.invokeWithinContext(e => e.get(g.ec)),
        v = e.invokeWithinContext(e => new D(e.get(d.e), f)),
        _ = () => l;
      let b = 0,
        w = f.getValueInRange(R.adjustSelection(f, e.getSelection(), i, 0)),
        y = f.getValueInRange(R.adjustSelection(f, e.getSelection(), 0, n)),
        C = f.getLineFirstNonWhitespaceColumn(e.getSelection().positionLineNumber);
      const x = e.getSelections().map((e, t) => ({
        selection: e,
        idx: t
      })).sort((e, t) => a.e.compareRangesUsingStarts(e.selection, t.selection));
      for (const {
        selection: a,
        idx: l
      } of x) {
        let d = R.adjustSelection(f, a, i, 0),
          g = R.adjustSelection(f, a, 0, n);
        (w !== f.getValueInRange(d) && (d = a), y !== f.getValueInRange(g) && (g = a));
        const S = a.setStartPosition(d.startLineNumber, d.startColumn).setEndPosition(g.endLineNumber, g.endColumn),
          k = new p.Yj().parse(t, !0, o),
          D = S.getStartPosition(),
          P = R.adjustWhitespace(f, D, k, s || (l > 0 && C !== f.getLineFirstNonWhitespaceColumn(a.positionLineNumber)), !0);
        k.resolveVariables(new L([v, new I(_, l, x.length, "spread" === e.getOption(70)), new N(f, a, l, c), new E(f, a), new T(), new M(m), new A()]));
        const F = f.getOffsetAt(D) + b;
        ((b += k.toString().length - f.getValueLengthInRange(S)), (h[l] = r.h.replace(S, k.toString())), (h[l].identifier = {
          major: l,
          minor: 0
        }), (u[l] = new O(e, k, F, P)));
      }
      return {
        edits: h,
        snippets: u
      };
    }
    dispose() {
      (0, o.B9)(this._snippets);
    }
    _logInfo() {
      return `template="${this._template}", merged_templates="${this._templateMerges.join(" -> ")}"`;
    }
    insert() {
      if (!this._editor.hasModel()) return;
      const {
        edits: e,
        snippets: t
      } = R.createEditsAndSnippets(this._editor, this._template, this._options.overwriteBefore, this._options.overwriteAfter, !1, this._options.adjustWhitespace, this._options.clipboardText, this._options.overtypingCapturer);
      ((this._snippets = t), this._editor.executeEdits("snippet", e, e => this._snippets[0].hasPlaceholder ? this._move(!0) : e.filter(e => !!e.identifier).map(e => l.Y.fromPositions(e.range.getEndPosition()))), this._editor.revealRange(this._editor.getSelections()[0]));
    }
    merge(e, t = P) {
      if (!this._editor.hasModel()) return;
      this._templateMerges.push([this._snippets[0]._nestingLevel, this._snippets[0]._placeholderGroupsIdx, e]);
      const {
        edits: i,
        snippets: n
      } = R.createEditsAndSnippets(this._editor, e, t.overwriteBefore, t.overwriteAfter, !0, t.adjustWhitespace, t.clipboardText, t.overtypingCapturer);
      this._editor.executeEdits("snippet", i, e => {
        for (const e of this._snippets) e.merge(n);
        return (console.assert(0 === n.length), this._snippets[0].hasPlaceholder ? this._move(void 0) : e.filter(e => !!e.identifier).map(e => l.Y.fromPositions(e.range.getEndPosition())));
      });
    }
    next() {
      const e = this._move(!0);
      (this._editor.setSelections(e), this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition()));
    }
    prev() {
      const e = this._move(!1);
      (this._editor.setSelections(e), this._editor.revealPositionInCenterIfOutsideViewport(e[0].getPosition()));
    }
    _move(e) {
      const t = [];
      for (const i of this._snippets) {
        const n = i.move(e);
        t.push(...n);
      }
      return t;
    }
    get isAtFirstPlaceholder() {
      return this._snippets[0].isAtFirstPlaceholder;
    }
    get isAtLastPlaceholder() {
      return this._snippets[0].isAtLastPlaceholder;
    }
    get hasPlaceholder() {
      return this._snippets[0].hasPlaceholder;
    }
    get choice() {
      return this._snippets[0].choice;
    }
    isSelectionWithinPlaceholders() {
      if (!this.hasPlaceholder) return !1;
      const e = this._editor.getSelections();
      if (e.length < this._snippets.length) return !1;
      let t = new Map();
      for (const i of this._snippets) {
        const n = i.computePossibleSelections();
        if (0 === t.size) for (const [i, o] of n) {
          o.sort(a.e.compareRangesUsingStarts);
          for (const n of e) if (o[0].containsRange(n)) {
            t.set(i, []);
            break;
          }
        }
        if (0 === t.size) return !1;
        t.forEach((e, t) => {
          e.push(...n.get(t));
        });
      }
      e.sort(a.e.compareRangesUsingStarts);
      for (let [i, n] of t) if (n.length === e.length) {
        n.sort(a.e.compareRangesUsingStarts);
        for (let o = 0; o < n.length; o++) n[o].containsRange(e[o]) || t.delete(i);
      } else t.delete(i);
      return t.size > 0;
    }
  }
};