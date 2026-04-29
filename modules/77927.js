const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    p: () => b,
    W: () => _
  });
  var n = i(65321),
    o = i(4850),
    s = i(48764),
    r = i(90317),
    a = i(85152),
    l = i(9802),
    c = i(93794),
    d = i(41264),
    h = i(4669);
  class u {
    constructor(e, t = 0, i = e.length, n = t - 1) {
      ((this.items = e), (this.start = t), (this.end = i), (this.index = n));
    }
    current() {
      return this.index === this.start - 1 || this.index === this.end ? null : this.items[this.index];
    }
    next() {
      return ((this.index = Math.min(this.index + 1, this.end)), this.current());
    }
    previous() {
      return ((this.index = Math.max(this.index - 1, this.start - 1)), this.current());
    }
    first() {
      return ((this.index = this.start), this.current());
    }
    last() {
      return ((this.index = this.end - 1), this.current());
    }
  }
  class g {
    constructor(e = [], t = 10) {
      (this._initialize(e), (this._limit = t), this._onChange());
    }
    getHistory() {
      return this._elements;
    }
    add(e) {
      (this._history.delete(e), this._history.add(e), this._onChange());
    }
    next() {
      return this._currentPosition() !== this._elements.length - 1 ? this._navigator.next() : null;
    }
    previous() {
      return 0 !== this._currentPosition() ? this._navigator.previous() : null;
    }
    current() {
      return this._navigator.current();
    }
    first() {
      return this._navigator.first();
    }
    last() {
      return this._navigator.last();
    }
    has(e) {
      return this._history.has(e);
    }
    _onChange() {
      this._reduceToLimit();
      const e = this._elements;
      this._navigator = new u(e, 0, e.length, e.length);
    }
    _reduceToLimit() {
      const e = this._elements;
      e.length > this._limit && this._initialize(e.slice(e.length - this._limit));
    }
    _currentPosition() {
      const e = this._navigator.current();
      return e ? this._elements.indexOf(e) : -1;
    }
    _initialize(e) {
      this._history = new Set();
      for (const t of e) this._history.add(t);
    }
    get _elements() {
      const e = [];
      return (this._history.forEach(t => e.push(t)), e);
    }
  }
  var p = i(36248),
    f = (i(58946), i(63580));
  const m = n.$,
    v = {
      inputBackground: d.Il.fromHex("#3C3C3C"),
      inputForeground: d.Il.fromHex("#CCCCCC"),
      inputValidationInfoBorder: d.Il.fromHex("#55AAFF"),
      inputValidationInfoBackground: d.Il.fromHex("#063B49"),
      inputValidationWarningBorder: d.Il.fromHex("#B89500"),
      inputValidationWarningBackground: d.Il.fromHex("#352A05"),
      inputValidationErrorBorder: d.Il.fromHex("#BE1100"),
      inputValidationErrorBackground: d.Il.fromHex("#5A1D1D")
    };
  class _ extends c.$ {
    constructor(e, t, i) {
      var s;
      (super(), (this.state = "idle"), (this.maxHeight = Number.POSITIVE_INFINITY), (this._onDidChange = this._register(new h.Q5())), (this.onDidChange = this._onDidChange.event), (this._onDidHeightChange = this._register(new h.Q5())), (this.onDidHeightChange = this._onDidHeightChange.event), (this.contextViewProvider = t), (this.options = i || Object.create(null)), (0, p.jB)(this.options, v, !1), (this.message = null), (this.placeholder = this.options.placeholder || ""), (this.tooltip = null !== (s = this.options.tooltip) && void 0 !== s ? s : this.placeholder || ""), (this.ariaLabel = this.options.ariaLabel || ""), (this.inputBackground = this.options.inputBackground), (this.inputForeground = this.options.inputForeground), (this.inputBorder = this.options.inputBorder), (this.inputValidationInfoBorder = this.options.inputValidationInfoBorder), (this.inputValidationInfoBackground = this.options.inputValidationInfoBackground), (this.inputValidationInfoForeground = this.options.inputValidationInfoForeground), (this.inputValidationWarningBorder = this.options.inputValidationWarningBorder), (this.inputValidationWarningBackground = this.options.inputValidationWarningBackground), (this.inputValidationWarningForeground = this.options.inputValidationWarningForeground), (this.inputValidationErrorBorder = this.options.inputValidationErrorBorder), (this.inputValidationErrorBackground = this.options.inputValidationErrorBackground), (this.inputValidationErrorForeground = this.options.inputValidationErrorForeground), this.options.validationOptions && (this.validation = this.options.validationOptions.validation), (this.element = n.R3(e, m(".monaco-inputbox.idle"))));
      let a = this.options.flexibleHeight ? "textarea" : "input",
        c = n.R3(this.element, m(".ibwrapper"));
      if (((this.input = n.R3(c, m(a + ".input.empty"))), this.input.setAttribute("autocorrect", "off"), this.input.setAttribute("autocapitalize", "off"), this.input.setAttribute("spellcheck", "false"), this.onfocus(this.input, () => this.element.classList.add("synthetic-focus")), this.onblur(this.input, () => this.element.classList.remove("synthetic-focus")), this.options.flexibleHeight)) {
        ((this.maxHeight = "number" == typeof this.options.flexibleMaxHeight ? this.options.flexibleMaxHeight : Number.POSITIVE_INFINITY), (this.mirror = n.R3(c, m("div.mirror"))), (this.mirror.innerText = " "), (this.scrollableElement = new l.NB(this.element, {
          vertical: 1
        })), this.options.flexibleWidth && (this.input.setAttribute("wrap", "off"), (this.mirror.style.whiteSpace = "pre"), (this.mirror.style.wordWrap = "initial")), n.R3(e, this.scrollableElement.getDomNode()), this._register(this.scrollableElement), this._register(this.scrollableElement.onScroll(e => (this.input.scrollTop = e.scrollTop))));
        const t = this._register(new o.Y(document, "selectionchange")),
          i = h.ju.filter(t.event, () => {
            const e = document.getSelection();
            return (null == e ? void 0 : e.anchorNode) === c;
          });
        (this._register(i(this.updateScrollDimensions, this)), this._register(this.onDidHeightChange(this.updateScrollDimensions, this)));
      } else ((this.input.type = this.options.type || "text"), this.input.setAttribute("wrap", "off"));
      (this.ariaLabel && this.input.setAttribute("aria-label", this.ariaLabel), this.placeholder && !this.options.showPlaceholderOnFocus && this.setPlaceHolder(this.placeholder), this.tooltip && this.setTooltip(this.tooltip), this.oninput(this.input, () => this.onValueChange()), this.onblur(this.input, () => this.onBlur()), this.onfocus(this.input, () => this.onFocus()), this.ignoreGesture(this.input), setTimeout(() => this.updateMirror(), 0), this.options.actions && ((this.actionbar = this._register(new r.o(this.element))), this.actionbar.push(this.options.actions, {
        icon: !0,
        label: !1
      })), this.applyStyles());
    }
    onBlur() {
      (this._hideMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", ""));
    }
    onFocus() {
      (this._showMessage(), this.options.showPlaceholderOnFocus && this.input.setAttribute("placeholder", this.placeholder || ""));
    }
    setPlaceHolder(e) {
      ((this.placeholder = e), this.input.setAttribute("placeholder", e));
    }
    setTooltip(e) {
      ((this.tooltip = e), (this.input.title = e));
    }
    setAriaLabel(e) {
      ((this.ariaLabel = e), e ? this.input.setAttribute("aria-label", this.ariaLabel) : this.input.removeAttribute("aria-label"));
    }
    getAriaLabel() {
      return this.ariaLabel;
    }
    get inputElement() {
      return this.input;
    }
    get value() {
      return this.input.value;
    }
    set value(e) {
      this.input.value !== e && ((this.input.value = e), this.onValueChange());
    }
    get height() {
      return "number" == typeof this.cachedHeight ? this.cachedHeight : n.wn(this.element);
    }
    focus() {
      this.input.focus();
    }
    blur() {
      this.input.blur();
    }
    hasFocus() {
      return document.activeElement === this.input;
    }
    select(e = null) {
      (this.input.select(), e && (this.input.setSelectionRange(e.start, e.end), e.end === this.input.value.length && (this.input.scrollLeft = this.input.scrollWidth)));
    }
    isSelectionAtEnd() {
      return (this.input.selectionEnd === this.input.value.length && this.input.selectionStart === this.input.selectionEnd);
    }
    enable() {
      this.input.removeAttribute("disabled");
    }
    disable() {
      (this.blur(), (this.input.disabled = !0), this._hideMessage());
    }
    get width() {
      return n.w(this.input);
    }
    set width(e) {
      if (this.options.flexibleHeight && this.options.flexibleWidth) {
        let t = 0;
        if (this.mirror) {
          t = (parseFloat(this.mirror.style.paddingLeft || "") || 0) + (parseFloat(this.mirror.style.paddingRight || "") || 0);
        }
        this.input.style.width = e - t + "px";
      } else this.input.style.width = e + "px";
      this.mirror && (this.mirror.style.width = e + "px");
    }
    set paddingRight(e) {
      (this.options.flexibleHeight && this.options.flexibleWidth ? (this.input.style.width = `calc(100% - ${e}px)`) : (this.input.style.paddingRight = e + "px"), this.mirror && (this.mirror.style.paddingRight = e + "px"));
    }
    updateScrollDimensions() {
      if ("number" != typeof this.cachedContentHeight || "number" != typeof this.cachedHeight || !this.scrollableElement) return;
      const e = this.cachedContentHeight,
        t = this.cachedHeight,
        i = this.input.scrollTop;
      (this.scrollableElement.setScrollDimensions({
        scrollHeight: e,
        height: t
      }), this.scrollableElement.setScrollPosition({
        scrollTop: i
      }));
    }
    showMessage(e, t) {
      ((this.message = e), this.element.classList.remove("idle"), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add(this.classForType(e.type)));
      const i = this.stylesForType(this.message.type);
      ((this.element.style.border = i.border ? `1px solid ${i.border}` : ""), (this.hasFocus() || t) && this._showMessage());
    }
    hideMessage() {
      ((this.message = null), this.element.classList.remove("info"), this.element.classList.remove("warning"), this.element.classList.remove("error"), this.element.classList.add("idle"), this._hideMessage(), this.applyStyles());
    }
    validate() {
      let e = null;
      return (this.validation && ((e = this.validation(this.value)), e ? (this.inputElement.setAttribute("aria-invalid", "true"), this.showMessage(e)) : this.inputElement.hasAttribute("aria-invalid") && (this.inputElement.removeAttribute("aria-invalid"), this.hideMessage())), null == e ? void 0 : e.type);
    }
    stylesForType(e) {
      switch (e) {
        case 1:
          return {
            border: this.inputValidationInfoBorder,
            background: this.inputValidationInfoBackground,
            foreground: this.inputValidationInfoForeground
          };
        case 2:
          return {
            border: this.inputValidationWarningBorder,
            background: this.inputValidationWarningBackground,
            foreground: this.inputValidationWarningForeground
          };
        default:
          return {
            border: this.inputValidationErrorBorder,
            background: this.inputValidationErrorBackground,
            foreground: this.inputValidationErrorForeground
          };
      }
    }
    classForType(e) {
      switch (e) {
        case 1:
          return "info";
        case 2:
          return "warning";
        default:
          return "error";
      }
    }
    _showMessage() {
      if (!this.contextViewProvider || !this.message) return;
      let e,
        t,
        i = () => (e.style.width = n.w(this.element) + "px");
      (this.contextViewProvider.showContextView({
        getAnchor: () => this.element,
        anchorAlignment: 1,
        render: t => {
          if (!this.message) return null;
          ((e = n.R3(t, m(".monaco-inputbox-container"))), i());
          const o = {
              inline: !0,
              className: "monaco-inputbox-message"
            },
            r = this.message.formatContent ? (0, s.BO)(this.message.content, o) : (0, s.IY)(this.message.content, o);
          r.classList.add(this.classForType(this.message.type));
          const a = this.stylesForType(this.message.type);
          return ((r.style.backgroundColor = a.background ? a.background.toString() : ""), (r.style.color = a.foreground ? a.foreground.toString() : ""), (r.style.border = a.border ? `1px solid ${a.border}` : ""), n.R3(e, r), null);
        },
        onHide: () => {
          this.state = "closed";
        },
        layout: i
      }), (t = 3 === this.message.type ? f.N("alertErrorMessage", "Error: {0}", this.message.content) : 2 === this.message.type ? f.N("alertWarningMessage", "Warning: {0}", this.message.content) : f.N("alertInfoMessage", "Info: {0}", this.message.content)), a.Z9(t), (this.state = "open"));
    }
    _hideMessage() {
      this.contextViewProvider && ("open" === this.state && this.contextViewProvider.hideContextView(), (this.state = "idle"));
    }
    onValueChange() {
      (this._onDidChange.fire(this.value), this.validate(), this.updateMirror(), this.input.classList.toggle("empty", !this.value), "open" === this.state && this.contextViewProvider && this.contextViewProvider.layout());
    }
    updateMirror() {
      if (!this.mirror) return;
      const e = this.value,
        t = 10 === e.charCodeAt(e.length - 1) ? " " : "";
      ((e + t).replace(/\u000c/g, "") ? (this.mirror.textContent = e + t) : (this.mirror.innerText = " "), this.layout());
    }
    style(e) {
      ((this.inputBackground = e.inputBackground), (this.inputForeground = e.inputForeground), (this.inputBorder = e.inputBorder), (this.inputValidationInfoBackground = e.inputValidationInfoBackground), (this.inputValidationInfoForeground = e.inputValidationInfoForeground), (this.inputValidationInfoBorder = e.inputValidationInfoBorder), (this.inputValidationWarningBackground = e.inputValidationWarningBackground), (this.inputValidationWarningForeground = e.inputValidationWarningForeground), (this.inputValidationWarningBorder = e.inputValidationWarningBorder), (this.inputValidationErrorBackground = e.inputValidationErrorBackground), (this.inputValidationErrorForeground = e.inputValidationErrorForeground), (this.inputValidationErrorBorder = e.inputValidationErrorBorder), this.applyStyles());
    }
    applyStyles() {
      const e = this.inputBackground ? this.inputBackground.toString() : "",
        t = this.inputForeground ? this.inputForeground.toString() : "",
        i = this.inputBorder ? this.inputBorder.toString() : "";
      ((this.element.style.backgroundColor = e), (this.element.style.color = t), (this.input.style.backgroundColor = "inherit"), (this.input.style.color = t), (this.element.style.borderWidth = i ? "1px" : ""), (this.element.style.borderStyle = i ? "solid" : ""), (this.element.style.borderColor = i));
    }
    layout() {
      if (!this.mirror) return;
      const e = this.cachedContentHeight;
      ((this.cachedContentHeight = n.wn(this.mirror)), e !== this.cachedContentHeight && ((this.cachedHeight = Math.min(this.cachedContentHeight, this.maxHeight)), (this.input.style.height = this.cachedHeight + "px"), this._onDidHeightChange.fire(this.cachedContentHeight)));
    }
    insertAtCursor(e) {
      const t = this.inputElement,
        i = t.selectionStart,
        n = t.selectionEnd,
        o = t.value;
      null !== i && null !== n && ((this.value = o.substr(0, i) + e + o.substr(n)), t.setSelectionRange(i + 1, i + 1), this.layout());
    }
    dispose() {
      (this._hideMessage(), (this.message = null), this.actionbar && this.actionbar.dispose(), super.dispose());
    }
  }
  const Lg = new Language(modifyState.language);
  class b extends _ {
    constructor(e, t, i) {
      const n = f.N({
          key: "history.inputbox.hint",
          comment: [Lg.textWillDescribe()]
        }, Lg.forHistory()),
        o = ` or ⇅ ${n}`,
        s = ` (⇅ ${n})`;
      (super(e, t, i), (this.history = new g(i.history, 100)));
      const r = () => {
        if (i.showHistoryHint && i.showHistoryHint() && !this.placeholder.endsWith(o) && !this.placeholder.endsWith(s) && this.history.getHistory().length) {
          const e = this.placeholder.endsWith(")") ? o : s,
            t = this.placeholder + e;
          i.showPlaceholderOnFocus && document.activeElement !== this.input ? (this.placeholder = t) : this.setPlaceHolder(t);
        }
      };
      ((this.observer = new MutationObserver((e, t) => {
        e.forEach(e => {
          e.target.textContent || r();
        });
      })), this.observer.observe(this.input, {
        attributeFilter: ["class"]
      }), this.onfocus(this.input, () => r()), this.onblur(this.input, () => {
        const e = e => {
          if (this.placeholder.endsWith(e)) {
            const t = this.placeholder.slice(0, this.placeholder.length - e.length);
            return (i.showPlaceholderOnFocus ? (this.placeholder = t) : this.setPlaceHolder(t), !0);
          }
          return !1;
        };
        e(s) || e(o);
      }));
    }
    dispose() {
      (super.dispose(), this.observer && (this.observer.disconnect(), (this.observer = void 0)));
    }
    addToHistory() {
      this.value && this.value !== this.getCurrentValue() && this.history.add(this.value);
    }
    showNextValue() {
      this.history.has(this.value) || this.addToHistory();
      let e = this.getNextValue();
      (e && (e = e === this.value ? this.getNextValue() : e), e && ((this.value = e), a.i7(this.value)));
    }
    showPreviousValue() {
      this.history.has(this.value) || this.addToHistory();
      let e = this.getPreviousValue();
      (e && (e = e === this.value ? this.getPreviousValue() : e), e && ((this.value = e), a.i7(this.value)));
    }
    getCurrentValue() {
      let e = this.history.current();
      return (e || ((e = this.history.last()), this.history.next()), e);
    }
    getPreviousValue() {
      return this.history.previous() || this.history.first();
    }
    getNextValue() {
      return this.history.next() || this.history.last();
    }
  }
};