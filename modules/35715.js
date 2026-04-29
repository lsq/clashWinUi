module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Fz: () => v,
    Nl: () => m,
    RA: () => f,
    pd: () => n
  });
  var n,
    o = i(16268),
    s = i(65321),
    r = i(15393),
    a = i(4669),
    l = i(5976),
    c = i(81170),
    d = i(1432),
    h = i(97295),
    u = i(15887),
    g = i(50187),
    p = i(3860);
  !(function (e) {
    e.Tap = "-monaco-textarea-synthetic-tap";
  })(n || (n = {}));
  const f = {
    forceCopyWithSyntaxHighlighting: !1
  };
  class m {
    constructor() {
      this._lastState = null;
    }
    set(e, t) {
      this._lastState = {
        lastCopiedValue: e,
        data: t
      };
    }
    get(e) {
      return this._lastState && this._lastState.lastCopiedValue === e ? this._lastState.data : ((this._lastState = null), null);
    }
  }
  m.INSTANCE = new m();
  class v extends l.JT {
    constructor(e, t) {
      (super(), (this.textArea = t), (this._onFocus = this._register(new a.Q5())), (this.onFocus = this._onFocus.event), (this._onBlur = this._register(new a.Q5())), (this.onBlur = this._onBlur.event), (this._onKeyDown = this._register(new a.Q5())), (this.onKeyDown = this._onKeyDown.event), (this._onKeyUp = this._register(new a.Q5())), (this.onKeyUp = this._onKeyUp.event), (this._onCut = this._register(new a.Q5())), (this.onCut = this._onCut.event), (this._onPaste = this._register(new a.Q5())), (this.onPaste = this._onPaste.event), (this._onType = this._register(new a.Q5())), (this.onType = this._onType.event), (this._onCompositionStart = this._register(new a.Q5())), (this.onCompositionStart = this._onCompositionStart.event), (this._onCompositionUpdate = this._register(new a.Q5())), (this.onCompositionUpdate = this._onCompositionUpdate.event), (this._onCompositionEnd = this._register(new a.Q5())), (this.onCompositionEnd = this._onCompositionEnd.event), (this._onSelectionChangeRequest = this._register(new a.Q5())), (this.onSelectionChangeRequest = this._onSelectionChangeRequest.event), (this._host = e), (this._textArea = this._register(new b(t))), (this._asyncTriggerCut = this._register(new r.pY(() => this._onCut.fire(), 0))), (this._asyncFocusGainWriteScreenReaderContent = this._register(new r.pY(() => this.writeScreenReaderContent("asyncFocusGain"), 0))), (this._textAreaState = u.un.EMPTY), (this._selectionChangeListener = null), this.writeScreenReaderContent("ctor"), (this._hasFocus = !1), (this._isDoingComposition = !1), (this._nextCommand = 0));
      let i = null;
      (this._register(s.mu(t.domNode, "keydown", e => {
        ((109 === e.keyCode || (this._isDoingComposition && 1 === e.keyCode)) && e.stopPropagation(), e.equals(9) && e.preventDefault(), (i = e), this._onKeyDown.fire(e));
      })), this._register(s.mu(t.domNode, "keyup", e => {
        this._onKeyUp.fire(e);
      })), this._register(s.nm(t.domNode, "compositionstart", e => {
        if ((u.al && console.log("[compositionstart]", e), !this._isDoingComposition)) {
          if (((this._isDoingComposition = !0), d.dz && this._textAreaState.selectionStart === this._textAreaState.selectionEnd && this._textAreaState.selectionStart > 0 && this._textAreaState.value.substr(this._textAreaState.selectionStart - 1, 1) === e.data)) {
            if ((i && i.equals(109) && ("ArrowRight" === i.code || "ArrowLeft" === i.code)) || o.vU) return (u.al && console.log("[compositionstart] Handling long press case on macOS + arrow key or Firefox", e), (this._textAreaState = new u.un(this._textAreaState.value, this._textAreaState.selectionStart - 1, this._textAreaState.selectionEnd, this._textAreaState.selectionStartPosition ? new g.L(this._textAreaState.selectionStartPosition.lineNumber, this._textAreaState.selectionStartPosition.column - 1) : null, this._textAreaState.selectionEndPosition)), void this._onCompositionStart.fire({
              revealDeltaColumns: -1
            }));
          }
          o.Dt ? this._onCompositionStart.fire({
            revealDeltaColumns: -this._textAreaState.selectionStart
          }) : (this._setAndWriteTextAreaState("compositionstart", u.un.EMPTY), this._onCompositionStart.fire({
            revealDeltaColumns: 0
          }));
        }
      })));
      const l = e => {
          const t = this._textAreaState,
            i = u.un.readFromTextArea(this._textArea);
          return [i, u.un.deduceInput(t, i, e)];
        },
        c = () => {
          const e = this._textAreaState,
            t = u.un.readFromTextArea(this._textArea);
          return [t, u.un.deduceAndroidCompositionInput(e, t)];
        },
        p = e => {
          const t = this._textAreaState,
            i = u.un.selectedText(e);
          return [i, {
            text: i.value,
            replacePrevCharCnt: t.selectionEnd - t.selectionStart,
            replaceNextCharCnt: 0,
            positionDelta: 0
          }];
        };
      (this._register(s.nm(t.domNode, "compositionupdate", e => {
        if ((u.al && console.log("[compositionupdate]", e), o.Dt)) {
          const [t, i] = c();
          return ((this._textAreaState = t), this._onType.fire(i), void this._onCompositionUpdate.fire(e));
        }
        const [t, i] = p(e.data || "");
        ((this._textAreaState = t), this._onType.fire(i), this._onCompositionUpdate.fire(e));
      })), this._register(s.nm(t.domNode, "compositionend", e => {
        if ((u.al && console.log("[compositionend]", e), !this._isDoingComposition)) return;
        if (((this._isDoingComposition = !1), o.Dt)) {
          const [e, t] = c();
          return ((this._textAreaState = e), this._onType.fire(t), void this._onCompositionEnd.fire());
        }
        const [t, i] = p(e.data || "");
        ((this._textAreaState = t), this._onType.fire(i), (o.i7 || o.vU) && (this._textAreaState = u.un.readFromTextArea(this._textArea)), this._onCompositionEnd.fire());
      })), this._register(s.nm(t.domNode, "input", () => {
        if ((this._textArea.setIgnoreSelectionChangeTime("received input event"), this._isDoingComposition)) return;
        const [e, t] = l(d.dz);
        (0 === t.replacePrevCharCnt && 1 === t.text.length && h.ZG(t.text.charCodeAt(0))) || ((this._textAreaState = e), 0 === this._nextCommand ? ("" === t.text && 0 === t.replacePrevCharCnt) || this._onType.fire(t) : (("" === t.text && 0 === t.replacePrevCharCnt) || this._firePaste(t.text, null), (this._nextCommand = 0)));
      })), this._register(s.nm(t.domNode, "cut", e => {
        (this._textArea.setIgnoreSelectionChangeTime("received cut event"), this._ensureClipboardGetsEditorSelection(e), this._asyncTriggerCut.schedule());
      })), this._register(s.nm(t.domNode, "copy", e => {
        this._ensureClipboardGetsEditorSelection(e);
      })), this._register(s.nm(t.domNode, "paste", e => {
        if ((this._textArea.setIgnoreSelectionChangeTime("received paste event"), _.canUseTextData(e))) {
          const [t, i] = _.getTextData(e);
          "" !== t && this._firePaste(t, i);
        } else (this._textArea.getSelectionStart() !== this._textArea.getSelectionEnd() && this._setAndWriteTextAreaState("paste", u.un.EMPTY), (this._nextCommand = 1));
      })), this._register(s.nm(t.domNode, "focus", () => {
        const e = this._hasFocus;
        (this._setHasFocus(!0), o.G6 && !e && this._hasFocus && this._asyncFocusGainWriteScreenReaderContent.schedule());
      })), this._register(s.nm(t.domNode, "blur", () => {
        (this._isDoingComposition && ((this._isDoingComposition = !1), this.writeScreenReaderContent("blurWithoutCompositionEnd"), this._onCompositionEnd.fire()), this._setHasFocus(!1));
      })), this._register(s.nm(t.domNode, n.Tap, () => {
        o.Dt && this._isDoingComposition && ((this._isDoingComposition = !1), this.writeScreenReaderContent("tapWithoutCompositionEnd"), this._onCompositionEnd.fire());
      })));
    }
    _installSelectionChangeListener() {
      let e = 0;
      return s.nm(document, "selectionchange", t => {
        if (!this._hasFocus) return;
        if (this._isDoingComposition) return;
        if (!o.i7) return;
        const i = Date.now(),
          n = i - e;
        if (((e = i), n < 5)) return;
        const s = i - this._textArea.getIgnoreSelectionChangeTime();
        if ((this._textArea.resetSelectionChangeTime(), s < 100)) return;
        if (!this._textAreaState.selectionStartPosition || !this._textAreaState.selectionEndPosition) return;
        const r = this._textArea.getValue();
        if (this._textAreaState.value !== r) return;
        const a = this._textArea.getSelectionStart(),
          l = this._textArea.getSelectionEnd();
        if (this._textAreaState.selectionStart === a && this._textAreaState.selectionEnd === l) return;
        const c = this._textAreaState.deduceEditorPosition(a),
          d = this._host.deduceModelPosition(c[0], c[1], c[2]),
          h = this._textAreaState.deduceEditorPosition(l),
          u = this._host.deduceModelPosition(h[0], h[1], h[2]),
          g = new p.Y(d.lineNumber, d.column, u.lineNumber, u.column);
        this._onSelectionChangeRequest.fire(g);
      });
    }
    dispose() {
      (super.dispose(), this._selectionChangeListener && (this._selectionChangeListener.dispose(), (this._selectionChangeListener = null)));
    }
    focusTextArea() {
      (this._setHasFocus(!0), this.refreshFocusState());
    }
    isFocused() {
      return this._hasFocus;
    }
    refreshFocusState() {
      const e = s.Ay(this.textArea.domNode);
      e ? this._setHasFocus(e.activeElement === this.textArea.domNode) : s.Uw(this.textArea.domNode) ? this._setHasFocus(document.activeElement === this.textArea.domNode) : this._setHasFocus(!1);
    }
    _setHasFocus(e) {
      this._hasFocus !== e && ((this._hasFocus = e), this._selectionChangeListener && (this._selectionChangeListener.dispose(), (this._selectionChangeListener = null)), this._hasFocus && (this._selectionChangeListener = this._installSelectionChangeListener()), this._hasFocus && this.writeScreenReaderContent("focusgain"), this._hasFocus ? this._onFocus.fire() : this._onBlur.fire());
    }
    _setAndWriteTextAreaState(e, t) {
      (this._hasFocus || (t = t.collapseSelection()), t.writeToTextArea(e, this._textArea, this._hasFocus), (this._textAreaState = t));
    }
    writeScreenReaderContent(e) {
      this._isDoingComposition || this._setAndWriteTextAreaState(e, this._host.getScreenReaderContent(this._textAreaState));
    }
    _ensureClipboardGetsEditorSelection(e) {
      const t = this._host.getDataToCopy(_.canUseTextData(e)),
        i = {
          version: 1,
          isFromEmptySelection: t.isFromEmptySelection,
          multicursorText: t.multicursorText,
          mode: t.mode
        };
      (m.INSTANCE.set(o.vU ? t.text.replace(/\r\n/g, "\n") : t.text, i), _.canUseTextData(e) ? _.setTextData(e, t.text, t.html, i) : this._setAndWriteTextAreaState("copy or cut", u.un.selectedText(t.text)));
    }
    _firePaste(e, t) {
      (t || (t = m.INSTANCE.get(e)), this._onPaste.fire({
        text: e,
        metadata: t
      }));
    }
  }
  class _ {
    static canUseTextData(e) {
      return !!e.clipboardData;
    }
    static getTextData(e) {
      if (e.clipboardData) {
        e.preventDefault();
        const t = e.clipboardData.getData(c.vW.text);
        let i = null;
        const n = e.clipboardData.getData("vscode-editor-data");
        if ("string" == typeof n) try {
          ((i = JSON.parse(n)), 1 !== i.version && (i = null));
        } catch (e) {}
        return [t, i];
      }
      throw new Error("ClipboardEventUtils.getTextData: Cannot use text data!");
    }
    static setTextData(e, t, i, n) {
      if (e.clipboardData) return (e.clipboardData.setData(c.vW.text, t), "string" == typeof i && e.clipboardData.setData("text/html", i), e.clipboardData.setData("vscode-editor-data", JSON.stringify(n)), void e.preventDefault());
      throw new Error("ClipboardEventUtils.setTextData: Cannot use text data!");
    }
  }
  class b extends l.JT {
    constructor(e) {
      (super(), (this._actual = e), (this._ignoreSelectionChangeTime = 0));
    }
    setIgnoreSelectionChangeTime(e) {
      this._ignoreSelectionChangeTime = Date.now();
    }
    getIgnoreSelectionChangeTime() {
      return this._ignoreSelectionChangeTime;
    }
    resetSelectionChangeTime() {
      this._ignoreSelectionChangeTime = 0;
    }
    getValue() {
      return this._actual.domNode.value;
    }
    setValue(e, t) {
      const i = this._actual.domNode;
      i.value !== t && (this.setIgnoreSelectionChangeTime("setValue"), (i.value = t));
    }
    getSelectionStart() {
      return "backward" === this._actual.domNode.selectionDirection ? this._actual.domNode.selectionEnd : this._actual.domNode.selectionStart;
    }
    getSelectionEnd() {
      return "backward" === this._actual.domNode.selectionDirection ? this._actual.domNode.selectionStart : this._actual.domNode.selectionEnd;
    }
    setSelectionRange(e, t, i) {
      const n = this._actual.domNode;
      let r = null;
      const a = s.Ay(n);
      r = a ? a.activeElement : document.activeElement;
      const l = r === n,
        c = n.selectionStart,
        d = n.selectionEnd;
      if (l && c === t && d === i) o.vU && window.parent !== window && n.focus();else {
        if (l) return (this.setIgnoreSelectionChangeTime("setSelectionRange"), n.setSelectionRange(t, i), void (o.vU && window.parent !== window && n.focus()));
        try {
          const e = s.vL(n);
          (this.setIgnoreSelectionChangeTime("setSelectionRange"), n.focus(), n.setSelectionRange(t, i), s._0(n, e));
        } catch (e) {}
      }
    }
  }
};