module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    WK: () => M,
    wD: () => V,
    aV: () => q,
    sx: () => B,
    cK: () => I,
    hD: () => E,
    wn: () => R,
    Zo: () => P
  });
  var n = i(65321),
    o = i(4850),
    s = i(59069),
    r = i(10553),
    a = i(85152);
  class l {
    constructor(e) {
      this.spliceables = e;
    }
    splice(e, t, i) {
      this.spliceables.forEach(n => n.splice(e, t, i));
    }
  }
  var c = i(9488),
    d = i(15393),
    h = i(41264),
    u = i(49898),
    g = i(4669),
    p = i(75392),
    f = i(5976),
    m = i(59870),
    v = i(36248),
    _ = i(1432),
    b = i(98401);
  i(60408);
  class w extends Error {
    constructor(e, t) {
      super(`ListError [${e}] ${t}`);
    }
  }
  var y,
    C = i(25707),
    x = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    S = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  class k {
    constructor(e) {
      ((this.trait = e), (this.renderedElements = []));
    }
    get templateId() {
      return `template:${this.trait.trait}`;
    }
    renderTemplate(e) {
      return e;
    }
    renderElement(e, t, i) {
      const n = this.renderedElements.findIndex(e => e.templateData === i);
      if (n >= 0) {
        const e = this.renderedElements[n];
        (this.trait.unrender(i), (e.index = t));
      } else {
        const e = {
          index: t,
          templateData: i
        };
        this.renderedElements.push(e);
      }
      this.trait.renderIndex(t, i);
    }
    splice(e, t, i) {
      const n = [];
      for (const o of this.renderedElements) o.index < e ? n.push(o) : o.index >= e + t && n.push({
        index: o.index + i - t,
        templateData: o.templateData
      });
      this.renderedElements = n;
    }
    renderIndexes(e) {
      for (const {
        index: t,
        templateData: i
      } of this.renderedElements) e.indexOf(t) > -1 && this.trait.renderIndex(t, i);
    }
    disposeTemplate(e) {
      const t = this.renderedElements.findIndex(t => t.templateData === e);
      t < 0 || this.renderedElements.splice(t, 1);
    }
  }
  class L {
    constructor(e) {
      ((this._trait = e), (this.length = 0), (this.indexes = []), (this.sortedIndexes = []), (this._onChange = new g.Q5()), (this.onChange = this._onChange.event));
    }
    get trait() {
      return this._trait;
    }
    get renderer() {
      return new k(this);
    }
    splice(e, t, i) {
      var n;
      t = Math.max(0, Math.min(t, this.length - e));
      const o = i.length - t,
        s = e + t,
        r = [...this.sortedIndexes.filter(t => t < e), ...i.map((t, i) => (t ? i + e : -1)).filter(e => -1 !== e), ...this.sortedIndexes.filter(e => e >= s).map(e => e + o)],
        a = this.length + o;
      if (this.sortedIndexes.length > 0 && 0 === r.length && a > 0) {
        const t = null !== (n = this.sortedIndexes.find(t => t >= e)) && void 0 !== n ? n : a - 1;
        r.push(Math.min(t, a - 1));
      }
      (this.renderer.splice(e, t, i.length), this._set(r, r), (this.length = a));
    }
    renderIndex(e, t) {
      t.classList.toggle(this._trait, this.contains(e));
    }
    unrender(e) {
      e.classList.remove(this._trait);
    }
    set(e, t) {
      return this._set(e, [...e].sort(j), t);
    }
    _set(e, t, i) {
      const n = this.indexes,
        o = this.sortedIndexes;
      ((this.indexes = e), (this.sortedIndexes = t));
      const s = z(o, e);
      return (this.renderer.renderIndexes(s), this._onChange.fire({
        indexes: e,
        browserEvent: i
      }), n);
    }
    get() {
      return this.indexes;
    }
    contains(e) {
      return (0, c.ry)(this.sortedIndexes, e, j) >= 0;
    }
    dispose() {
      (0, f.B9)(this._onChange);
    }
  }
  x([u.H], L.prototype, "renderer", null);
  class N extends L {
    constructor(e) {
      (super("selected"), (this.setAriaSelected = e));
    }
    renderIndex(e, t) {
      (super.renderIndex(e, t), this.setAriaSelected && (this.contains(e) ? t.setAttribute("aria-selected", "true") : t.setAttribute("aria-selected", "false")));
    }
  }
  class D {
    constructor(e, t, i) {
      ((this.trait = e), (this.view = t), (this.identityProvider = i));
    }
    splice(e, t, i) {
      if (!this.identityProvider) return this.trait.splice(e, t, i.map(() => !1));
      const n = this.trait.get().map(e => this.identityProvider.getId(this.view.element(e)).toString()),
        o = i.map(e => n.indexOf(this.identityProvider.getId(e).toString()) > -1);
      this.trait.splice(e, t, o);
    }
  }
  function I(e) {
    return "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
  }
  function E(e) {
    return (!!e.classList.contains("monaco-editor") || (!e.classList.contains("monaco-list") && !!e.parentElement && E(e.parentElement)));
  }
  class T {
    constructor(e, t, i) {
      ((this.list = e), (this.view = t), (this.disposables = new f.SL()), (this.multipleSelectionDisposables = new f.SL()), this.onKeyDown.filter(e => 3 === e.keyCode).on(this.onEnter, this, this.disposables), this.onKeyDown.filter(e => 16 === e.keyCode).on(this.onUpArrow, this, this.disposables), this.onKeyDown.filter(e => 18 === e.keyCode).on(this.onDownArrow, this, this.disposables), this.onKeyDown.filter(e => 11 === e.keyCode).on(this.onPageUpArrow, this, this.disposables), this.onKeyDown.filter(e => 12 === e.keyCode).on(this.onPageDownArrow, this, this.disposables), this.onKeyDown.filter(e => 9 === e.keyCode).on(this.onEscape, this, this.disposables), !1 !== i.multipleSelectionSupport && this.onKeyDown.filter(e => (_.dz ? e.metaKey : e.ctrlKey) && 31 === e.keyCode).on(this.onCtrlA, this, this.multipleSelectionDisposables));
    }
    get onKeyDown() {
      return g.ju.chain(this.disposables.add(new o.Y(this.view.domNode, "keydown")).event).filter(e => !I(e.target)).map(e => new s.y(e));
    }
    updateOptions(e) {
      void 0 !== e.multipleSelectionSupport && (this.multipleSelectionDisposables.clear(), e.multipleSelectionSupport && this.onKeyDown.filter(e => (_.dz ? e.metaKey : e.ctrlKey) && 31 === e.keyCode).on(this.onCtrlA, this, this.multipleSelectionDisposables));
    }
    onEnter(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.setSelection(this.list.getFocus(), e.browserEvent));
    }
    onUpArrow(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.focusPrevious(1, !1, e.browserEvent));
      const t = this.list.getFocus()[0];
      (this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus());
    }
    onDownArrow(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.focusNext(1, !1, e.browserEvent));
      const t = this.list.getFocus()[0];
      (this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus());
    }
    onPageUpArrow(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.focusPreviousPage(e.browserEvent));
      const t = this.list.getFocus()[0];
      (this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus());
    }
    onPageDownArrow(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.focusNextPage(e.browserEvent));
      const t = this.list.getFocus()[0];
      (this.list.setAnchor(t), this.list.reveal(t), this.view.domNode.focus());
    }
    onCtrlA(e) {
      (e.preventDefault(), e.stopPropagation(), this.list.setSelection((0, c.w6)(this.list.length), e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus());
    }
    onEscape(e) {
      this.list.getSelection().length && (e.preventDefault(), e.stopPropagation(), this.list.setSelection([], e.browserEvent), this.list.setAnchor(void 0), this.view.domNode.focus());
    }
    dispose() {
      (this.disposables.dispose(), this.multipleSelectionDisposables.dispose());
    }
  }
  (x([u.H], T.prototype, "onKeyDown", null), (function (e) {
    ((e[(e.Idle = 0)] = "Idle"), (e[(e.Typing = 1)] = "Typing"));
  })(y || (y = {})));
  const M = new (class {
    mightProducePrintableCharacter(e) {
      return (!(e.ctrlKey || e.metaKey || e.altKey) && ((e.keyCode >= 31 && e.keyCode <= 56) || (e.keyCode >= 21 && e.keyCode <= 30) || (e.keyCode >= 93 && e.keyCode <= 102) || (e.keyCode >= 80 && e.keyCode <= 90)));
    }
  })();
  class A {
    constructor(e, t, i, n) {
      ((this.list = e), (this.view = t), (this.keyboardNavigationLabelProvider = i), (this.delegate = n), (this.enabled = !1), (this.state = y.Idle), (this.automaticKeyboardNavigation = !0), (this.triggered = !1), (this.previouslyFocused = -1), (this.enabledDisposables = new f.SL()), (this.disposables = new f.SL()), this.updateOptions(e.options));
    }
    updateOptions(e) {
      (void 0 === e.enableKeyboardNavigation || !!e.enableKeyboardNavigation ? this.enable() : this.disable(), void 0 !== e.automaticKeyboardNavigation && (this.automaticKeyboardNavigation = e.automaticKeyboardNavigation));
    }
    enable() {
      if (this.enabled) return;
      const e = g.ju.chain(this.enabledDisposables.add(new o.Y(this.view.domNode, "keydown")).event).filter(e => !I(e.target)).filter(() => this.automaticKeyboardNavigation || this.triggered).map(e => new s.y(e)).filter(e => this.delegate.mightProducePrintableCharacter(e)).forEach(e => {
          (e.stopPropagation(), e.preventDefault());
        }).map(e => e.browserEvent.key).event,
        t = g.ju.debounce(e, () => null, 800);
      (g.ju.reduce(g.ju.any(e, t), (e, t) => null === t ? null : (e || "") + t)(this.onInput, this, this.enabledDisposables), t(this.onClear, this, this.enabledDisposables), (this.enabled = !0), (this.triggered = !1));
    }
    disable() {
      this.enabled && (this.enabledDisposables.clear(), (this.enabled = !1), (this.triggered = !1));
    }
    onClear() {
      var e;
      const t = this.list.getFocus();
      if (t.length > 0 && t[0] === this.previouslyFocused) {
        const i = null === (e = this.list.options.accessibilityProvider) || void 0 === e ? void 0 : e.getAriaLabel(this.list.element(t[0]));
        i && (0, a.Z9)(i);
      }
      this.previouslyFocused = -1;
    }
    onInput(e) {
      if (!e) return ((this.state = y.Idle), void (this.triggered = !1));
      const t = this.list.getFocus(),
        i = t.length > 0 ? t[0] : 0,
        n = this.state === y.Idle ? 1 : 0;
      this.state = y.Typing;
      for (let t = 0; t < this.list.length; t++) {
        const o = (i + t + n) % this.list.length,
          s = this.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(this.view.element(o)),
          r = s && s.toString();
        if (void 0 === r || (0, p.Ji)(e, r)) return ((this.previouslyFocused = i), this.list.setFocus([o]), void this.list.reveal(o));
      }
    }
    dispose() {
      (this.disable(), this.enabledDisposables.dispose(), this.disposables.dispose());
    }
  }
  class O {
    constructor(e, t) {
      ((this.list = e), (this.view = t), (this.disposables = new f.SL()));
      g.ju.chain(this.disposables.add(new o.Y(t.domNode, "keydown")).event).filter(e => !I(e.target)).map(e => new s.y(e)).filter(e => !(2 !== e.keyCode || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)).on(this.onTab, this, this.disposables);
    }
    onTab(e) {
      if (e.target !== this.view.domNode) return;
      const t = this.list.getFocus();
      if (0 === t.length) return;
      const i = this.view.domElement(t[0]);
      if (!i) return;
      const n = i.querySelector("[tabIndex]");
      if (!(n && n instanceof HTMLElement && -1 !== n.tabIndex)) return;
      const o = window.getComputedStyle(n);
      "hidden" !== o.visibility && "none" !== o.display && (e.preventDefault(), e.stopPropagation(), n.focus());
    }
    dispose() {
      this.disposables.dispose();
    }
  }
  function P(e) {
    return _.dz ? e.browserEvent.metaKey : e.browserEvent.ctrlKey;
  }
  function R(e) {
    return e.browserEvent.shiftKey;
  }
  const F = {
    isSelectionSingleChangeEvent: P,
    isSelectionRangeChangeEvent: R
  };
  class B {
    constructor(e) {
      ((this.list = e), (this.disposables = new f.SL()), (this._onPointer = new g.Q5()), (this.onPointer = this._onPointer.event), !1 !== e.options.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || F), (this.mouseSupport = void 0 === e.options.mouseSupport || !!e.options.mouseSupport), this.mouseSupport && (e.onMouseDown(this.onMouseDown, this, this.disposables), e.onContextMenu(this.onContextMenu, this, this.disposables), e.onMouseDblClick(this.onDoubleClick, this, this.disposables), e.onTouchStart(this.onMouseDown, this, this.disposables), this.disposables.add(r.o.addTarget(e.getHTMLElement()))), g.ju.any(e.onMouseClick, e.onMouseMiddleClick, e.onTap)(this.onViewPointer, this, this.disposables));
    }
    updateOptions(e) {
      void 0 !== e.multipleSelectionSupport && ((this.multipleSelectionController = void 0), e.multipleSelectionSupport && (this.multipleSelectionController = this.list.options.multipleSelectionController || F));
    }
    isSelectionSingleChangeEvent(e) {
      return (!!this.multipleSelectionController && this.multipleSelectionController.isSelectionSingleChangeEvent(e));
    }
    isSelectionRangeChangeEvent(e) {
      return (!!this.multipleSelectionController && this.multipleSelectionController.isSelectionRangeChangeEvent(e));
    }
    isSelectionChangeEvent(e) {
      return (this.isSelectionSingleChangeEvent(e) || this.isSelectionRangeChangeEvent(e));
    }
    onMouseDown(e) {
      E(e.browserEvent.target) || (document.activeElement !== e.browserEvent.target && this.list.domFocus());
    }
    onContextMenu(e) {
      if (E(e.browserEvent.target)) return;
      const t = void 0 === e.index ? [] : [e.index];
      this.list.setFocus(t, e.browserEvent);
    }
    onViewPointer(e) {
      if (!this.mouseSupport) return;
      if (I(e.browserEvent.target) || E(e.browserEvent.target)) return;
      const t = e.index;
      return void 0 === t ? (this.list.setFocus([], e.browserEvent), this.list.setSelection([], e.browserEvent), void this.list.setAnchor(void 0)) : this.isSelectionRangeChangeEvent(e) || this.isSelectionChangeEvent(e) ? this.changeSelection(e) : (this.list.setFocus([t], e.browserEvent), this.list.setAnchor(t), ((i = e.browserEvent) instanceof MouseEvent && 2 === i.button) || this.list.setSelection([t], e.browserEvent), void this._onPointer.fire(e));
      var i;
    }
    onDoubleClick(e) {
      if (I(e.browserEvent.target) || E(e.browserEvent.target)) return;
      if (this.isSelectionChangeEvent(e)) return;
      const t = this.list.getFocus();
      this.list.setSelection(t, e.browserEvent);
    }
    changeSelection(e) {
      const t = e.index;
      let i = this.list.getAnchor();
      if (this.isSelectionRangeChangeEvent(e)) {
        if (void 0 === i) {
          const e = this.list.getFocus()[0];
          ((i = null != e ? e : t), this.list.setAnchor(i));
        }
        const n = Math.min(i, t),
          o = Math.max(i, t),
          s = (0, c.w6)(n, o + 1),
          r = this.list.getSelection(),
          a = (function (e, t) {
            const i = e.indexOf(t);
            if (-1 === i) return [];
            const n = [];
            let o = i - 1;
            for (; o >= 0 && e[o] === t - (i - o);) n.push(e[o--]);
            (n.reverse(), (o = i));
            for (; o < e.length && e[o] === t + (o - i);) n.push(e[o++]);
            return n;
          })(z(r, [i]), i);
        if (0 === a.length) return;
        const l = z(s, (function (e, t) {
          const i = [];
          let n = 0,
            o = 0;
          for (; n < e.length || o < t.length;) if (n >= e.length) i.push(t[o++]);else if (o >= t.length) i.push(e[n++]);else {
            if (e[n] === t[o]) {
              (n++, o++);
              continue;
            }
            e[n] < t[o] ? i.push(e[n++]) : o++;
          }
          return i;
        })(r, a));
        (this.list.setSelection(l, e.browserEvent), this.list.setFocus([t], e.browserEvent));
      } else if (this.isSelectionSingleChangeEvent(e)) {
        const i = this.list.getSelection(),
          n = i.filter(e => e !== t);
        (this.list.setFocus([t]), this.list.setAnchor(t), i.length === n.length ? this.list.setSelection([...n, t], e.browserEvent) : this.list.setSelection(n, e.browserEvent));
      }
    }
    dispose() {
      this.disposables.dispose();
    }
  }
  class V {
    constructor(e, t) {
      ((this.styleElement = e), (this.selectorSuffix = t));
    }
    style(e) {
      const t = this.selectorSuffix && `.${this.selectorSuffix}`,
        i = [];
      (e.listBackground && (e.listBackground.isOpaque() ? i.push(`.monaco-list${t} .monaco-list-rows { background: ${e.listBackground}; }`) : _.dz || console.warn(`List with id '${this.selectorSuffix}' was styled with a non-opaque background color. This will break sub-pixel antialiasing.`)), e.listFocusBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.focused { background-color: ${e.listFocusBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.focused:hover { background-color: ${e.listFocusBackground}; }`)), e.listFocusForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), e.listActiveSelectionBackground && (i.push(`.monaco-list${t}:focus .monaco-list-row.selected { background-color: ${e.listActiveSelectionBackground}; }`), i.push(`.monaco-list${t}:focus .monaco-list-row.selected:hover { background-color: ${e.listActiveSelectionBackground}; }`)), e.listActiveSelectionForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected { color: ${e.listActiveSelectionForeground}; }`), e.listActiveSelectionIconForeground && i.push(`.monaco-list${t}:focus .monaco-list-row.selected .codicon { color: ${e.listActiveSelectionIconForeground}; }`), e.listFocusAndSelectionBackground && i.push(`\n\t\t\t\t.monaco-drag-image,\n\t\t\t\t.monaco-list${t}:focus .monaco-list-row.selected.focused { background-color: ${e.listFocusAndSelectionBackground}; }\n\t\t\t`), e.listFocusAndSelectionForeground && i.push(`\n\t\t\t\t.monaco-drag-image,\n\t\t\t\t.monaco-list${t}:focus .monaco-list-row.selected.focused { color: ${e.listFocusAndSelectionForeground}; }\n\t\t\t`), e.listInactiveFocusForeground && (i.push(`.monaco-list${t} .monaco-list-row.focused { color:  ${e.listInactiveFocusForeground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { color:  ${e.listInactiveFocusForeground}; }`)), e.listInactiveSelectionIconForeground && i.push(`.monaco-list${t} .monaco-list-row.focused .codicon { color:  ${e.listInactiveSelectionIconForeground}; }`), e.listInactiveFocusBackground && (i.push(`.monaco-list${t} .monaco-list-row.focused { background-color:  ${e.listInactiveFocusBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.focused:hover { background-color:  ${e.listInactiveFocusBackground}; }`)), e.listInactiveSelectionBackground && (i.push(`.monaco-list${t} .monaco-list-row.selected { background-color:  ${e.listInactiveSelectionBackground}; }`), i.push(`.monaco-list${t} .monaco-list-row.selected:hover { background-color:  ${e.listInactiveSelectionBackground}; }`)), e.listInactiveSelectionForeground && i.push(`.monaco-list${t} .monaco-list-row.selected { color: ${e.listInactiveSelectionForeground}; }`), e.listHoverBackground && i.push(`.monaco-list${t}:not(.drop-target) .monaco-list-row:hover:not(.selected):not(.focused) { background-color: ${e.listHoverBackground}; }`), e.listHoverForeground && i.push(`.monaco-list${t} .monaco-list-row:hover:not(.selected):not(.focused) { color:  ${e.listHoverForeground}; }`), e.listSelectionOutline && i.push(`.monaco-list${t} .monaco-list-row.selected { outline: 1px dotted ${e.listSelectionOutline}; outline-offset: -1px; }`), e.listFocusOutline && i.push(`\n\t\t\t\t.monaco-drag-image,\n\t\t\t\t.monaco-list${t}:focus .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }\n\t\t\t`), e.listInactiveFocusOutline && i.push(`.monaco-list${t} .monaco-list-row.focused { outline: 1px dotted ${e.listInactiveFocusOutline}; outline-offset: -1px; }`), e.listHoverOutline && i.push(`.monaco-list${t} .monaco-list-row:hover { outline: 1px dashed ${e.listHoverOutline}; outline-offset: -1px; }`), e.listDropBackground && i.push(`\n\t\t\t\t.monaco-list${t}.drop-target,\n\t\t\t\t.monaco-list${t} .monaco-list-rows.drop-target,\n\t\t\t\t.monaco-list${t} .monaco-list-row.drop-target { background-color: ${e.listDropBackground} !important; color: inherit !important; }\n\t\t\t`), e.listFilterWidgetBackground && i.push(`.monaco-list-type-filter { background-color: ${e.listFilterWidgetBackground} }`), e.listFilterWidgetOutline && i.push(`.monaco-list-type-filter { border: 1px solid ${e.listFilterWidgetOutline}; }`), e.listFilterWidgetNoMatchesOutline && i.push(`.monaco-list-type-filter.no-matches { border: 1px solid ${e.listFilterWidgetNoMatchesOutline}; }`), e.listMatchesShadow && i.push(`.monaco-list-type-filter { box-shadow: 1px 1px 1px ${e.listMatchesShadow}; }`), e.tableColumnsBorder && i.push(`\n\t\t\t\t.monaco-table:hover > .monaco-split-view2,\n\t\t\t\t.monaco-table:hover > .monaco-split-view2 .monaco-sash.vertical::before {\n\t\t\t\t\tborder-color: ${e.tableColumnsBorder};\n\t\t\t}`), (this.styleElement.textContent = i.join("\n")));
    }
  }
  const W = {
      listFocusBackground: h.Il.fromHex("#7FB0D0"),
      listActiveSelectionBackground: h.Il.fromHex("#0E639C"),
      listActiveSelectionForeground: h.Il.fromHex("#FFFFFF"),
      listActiveSelectionIconForeground: h.Il.fromHex("#FFFFFF"),
      listFocusAndSelectionBackground: h.Il.fromHex("#094771"),
      listFocusAndSelectionForeground: h.Il.fromHex("#FFFFFF"),
      listInactiveSelectionBackground: h.Il.fromHex("#3F3F46"),
      listInactiveSelectionIconForeground: h.Il.fromHex("#FFFFFF"),
      listHoverBackground: h.Il.fromHex("#2A2D2E"),
      listDropBackground: h.Il.fromHex("#383B3D"),
      treeIndentGuidesStroke: h.Il.fromHex("#a9a9a9"),
      tableColumnsBorder: h.Il.fromHex("#cccccc").transparent(0.2)
    },
    H = {
      keyboardSupport: !0,
      mouseSupport: !0,
      multipleSelectionSupport: !0,
      dnd: {
        getDragURI: () => null,
        onDragStart() {},
        onDragOver: () => !1,
        drop() {}
      }
    };
  function z(e, t) {
    const i = [];
    let n = 0,
      o = 0;
    for (; n < e.length || o < t.length;) if (n >= e.length) i.push(t[o++]);else if (o >= t.length) i.push(e[n++]);else {
      if (e[n] === t[o]) {
        (i.push(e[n]), n++, o++);
        continue;
      }
      e[n] < t[o] ? i.push(e[n++]) : i.push(t[o++]);
    }
    return i;
  }
  const j = (e, t) => e - t;
  class U {
    constructor(e, t) {
      ((this._templateId = e), (this.renderers = t));
    }
    get templateId() {
      return this._templateId;
    }
    renderTemplate(e) {
      return this.renderers.map(t => t.renderTemplate(e));
    }
    renderElement(e, t, i, n) {
      let o = 0;
      for (const s of this.renderers) s.renderElement(e, t, i[o++], n);
    }
    disposeElement(e, t, i, n) {
      let o = 0;
      for (const s of this.renderers) (s.disposeElement && s.disposeElement(e, t, i[o], n), (o += 1));
    }
    disposeTemplate(e) {
      let t = 0;
      for (const i of this.renderers) i.disposeTemplate(e[t++]);
    }
  }
  class $ {
    constructor(e) {
      ((this.accessibilityProvider = e), (this.templateId = "a18n"));
    }
    renderTemplate(e) {
      return e;
    }
    renderElement(e, t, i) {
      const n = this.accessibilityProvider.getAriaLabel(e);
      n ? i.setAttribute("aria-label", n) : i.removeAttribute("aria-label");
      const o = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
      "number" == typeof o ? i.setAttribute("aria-level", `${o}`) : i.removeAttribute("aria-level");
    }
    disposeTemplate(e) {}
  }
  class K {
    constructor(e, t) {
      ((this.list = e), (this.dnd = t));
    }
    getDragElements(e) {
      const t = this.list.getSelectedElements();
      return t.indexOf(e) > -1 ? t : [e];
    }
    getDragURI(e) {
      return this.dnd.getDragURI(e);
    }
    getDragLabel(e, t) {
      if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e, t);
    }
    onDragStart(e, t) {
      this.dnd.onDragStart && this.dnd.onDragStart(e, t);
    }
    onDragOver(e, t, i, n) {
      return this.dnd.onDragOver(e, t, i, n);
    }
    onDragLeave(e, t, i, n) {
      var o, s;
      null === (s = (o = this.dnd).onDragLeave) || void 0 === s || s.call(o, e, t, i, n);
    }
    onDragEnd(e) {
      this.dnd.onDragEnd && this.dnd.onDragEnd(e);
    }
    drop(e, t, i, n) {
      this.dnd.drop(e, t, i, n);
    }
  }
  class q {
    constructor(e, t, i, o, s = H) {
      var r;
      ((this.user = e), (this._options = s), (this.focus = new L("focused")), (this.anchor = new L("anchor")), (this.eventBufferer = new g.E7()), (this._ariaLabel = ""), (this.disposables = new f.SL()), (this._onDidDispose = new g.Q5()), (this.onDidDispose = this._onDidDispose.event));
      const a = this._options.accessibilityProvider && this._options.accessibilityProvider.getWidgetRole ? null === (r = this._options.accessibilityProvider) || void 0 === r ? void 0 : r.getWidgetRole() : "list";
      ((this.selection = new N("listbox" !== a)), (0, v.jB)(s, W, !1));
      const c = [this.focus.renderer, this.selection.renderer];
      ((this.accessibilityProvider = s.accessibilityProvider), this.accessibilityProvider && (c.push(new $(this.accessibilityProvider)), this.accessibilityProvider.onDidChangeActiveDescendant && this.accessibilityProvider.onDidChangeActiveDescendant(this.onDidChangeActiveDescendant, this, this.disposables)), (o = o.map(e => new U(e.templateId, [...c, e]))));
      const d = Object.assign(Object.assign({}, s), {
        dnd: s.dnd && new K(this, s.dnd)
      });
      if (((this.view = new C.Bv(t, i, o, d)), this.view.domNode.setAttribute("role", a), s.styleController)) this.styleController = s.styleController(this.view.domId);else {
        const e = (0, n.dS)(this.view.domNode);
        this.styleController = new V(e, this.view.domId);
      }
      if (((this.spliceable = new l([new D(this.focus, this.view, s.identityProvider), new D(this.selection, this.view, s.identityProvider), new D(this.anchor, this.view, s.identityProvider), this.view])), this.disposables.add(this.focus), this.disposables.add(this.selection), this.disposables.add(this.anchor), this.disposables.add(this.view), this.disposables.add(this._onDidDispose), this.disposables.add(new O(this, this.view)), ("boolean" != typeof s.keyboardSupport || s.keyboardSupport) && ((this.keyboardController = new T(this, this.view, s)), this.disposables.add(this.keyboardController)), s.keyboardNavigationLabelProvider)) {
        const e = s.keyboardNavigationDelegate || M;
        ((this.typeLabelController = new A(this, this.view, s.keyboardNavigationLabelProvider, e)), this.disposables.add(this.typeLabelController));
      }
      ((this.mouseController = this.createMouseController(s)), this.disposables.add(this.mouseController), this.onDidChangeFocus(this._onFocusChange, this, this.disposables), this.onDidChangeSelection(this._onSelectionChange, this, this.disposables), this.accessibilityProvider && (this.ariaLabel = this.accessibilityProvider.getWidgetAriaLabel()), !1 !== this._options.multipleSelectionSupport && this.view.domNode.setAttribute("aria-multiselectable", "true"));
    }
    get onDidChangeFocus() {
      return g.ju.map(this.eventBufferer.wrapEvent(this.focus.onChange), e => this.toListEvent(e));
    }
    get onDidChangeSelection() {
      return g.ju.map(this.eventBufferer.wrapEvent(this.selection.onChange), e => this.toListEvent(e));
    }
    get domId() {
      return this.view.domId;
    }
    get onMouseClick() {
      return this.view.onMouseClick;
    }
    get onMouseDblClick() {
      return this.view.onMouseDblClick;
    }
    get onMouseMiddleClick() {
      return this.view.onMouseMiddleClick;
    }
    get onPointer() {
      return this.mouseController.onPointer;
    }
    get onMouseDown() {
      return this.view.onMouseDown;
    }
    get onTouchStart() {
      return this.view.onTouchStart;
    }
    get onTap() {
      return this.view.onTap;
    }
    get onContextMenu() {
      let e = !1;
      const t = g.ju.chain(this.disposables.add(new o.Y(this.view.domNode, "keydown")).event).map(e => new s.y(e)).filter(t => (e = 58 === t.keyCode || (t.shiftKey && 68 === t.keyCode))).map(o.p).filter(() => !1).event,
        i = g.ju.chain(this.disposables.add(new o.Y(this.view.domNode, "keyup")).event).forEach(() => (e = !1)).map(e => new s.y(e)).filter(e => 58 === e.keyCode || (e.shiftKey && 68 === e.keyCode)).map(o.p).map(({
          browserEvent: e
        }) => {
          const t = this.getFocus(),
            i = t.length ? t[0] : void 0;
          return {
            index: i,
            element: void 0 !== i ? this.view.element(i) : void 0,
            anchor: void 0 !== i ? this.view.domElement(i) : this.view.domNode,
            browserEvent: e
          };
        }).event,
        n = g.ju.chain(this.view.onContextMenu).filter(t => !e).map(({
          element: e,
          index: t,
          browserEvent: i
        }) => ({
          element: e,
          index: t,
          anchor: {
            x: i.pageX + 1,
            y: i.pageY
          },
          browserEvent: i
        })).event;
      return g.ju.any(t, i, n);
    }
    get onKeyDown() {
      return this.disposables.add(new o.Y(this.view.domNode, "keydown")).event;
    }
    get onDidFocus() {
      return g.ju.signal(this.disposables.add(new o.Y(this.view.domNode, "focus", !0)).event);
    }
    createMouseController(e) {
      return new B(this);
    }
    updateOptions(e = {}) {
      var t;
      ((this._options = Object.assign(Object.assign({}, this._options), e)), this.typeLabelController && this.typeLabelController.updateOptions(this._options), void 0 !== this._options.multipleSelectionController && (this._options.multipleSelectionSupport ? this.view.domNode.setAttribute("aria-multiselectable", "true") : this.view.domNode.removeAttribute("aria-multiselectable")), this.mouseController.updateOptions(e), null === (t = this.keyboardController) || void 0 === t || t.updateOptions(e), this.view.updateOptions(e));
    }
    get options() {
      return this._options;
    }
    splice(e, t, i = []) {
      if (e < 0 || e > this.view.length) throw new w(this.user, `Invalid start index: ${e}`);
      if (t < 0) throw new w(this.user, `Invalid delete count: ${t}`);
      (0 === t && 0 === i.length) || this.eventBufferer.bufferEvents(() => this.spliceable.splice(e, t, i));
    }
    rerender() {
      this.view.rerender();
    }
    element(e) {
      return this.view.element(e);
    }
    get length() {
      return this.view.length;
    }
    get contentHeight() {
      return this.view.contentHeight;
    }
    get scrollTop() {
      return this.view.getScrollTop();
    }
    set scrollTop(e) {
      this.view.setScrollTop(e);
    }
    get ariaLabel() {
      return this._ariaLabel;
    }
    set ariaLabel(e) {
      ((this._ariaLabel = e), this.view.domNode.setAttribute("aria-label", e));
    }
    domFocus() {
      this.view.domNode.focus({
        preventScroll: !0
      });
    }
    layout(e, t) {
      this.view.layout(e, t);
    }
    setSelection(e, t) {
      for (const t of e) if (t < 0 || t >= this.length) throw new w(this.user, `Invalid index ${t}`);
      this.selection.set(e, t);
    }
    getSelection() {
      return this.selection.get();
    }
    getSelectedElements() {
      return this.getSelection().map(e => this.view.element(e));
    }
    setAnchor(e) {
      if (void 0 !== e) {
        if (e < 0 || e >= this.length) throw new w(this.user, `Invalid index ${e}`);
        this.anchor.set([e]);
      } else this.anchor.set([]);
    }
    getAnchor() {
      return (0, c.Xh)(this.anchor.get(), void 0);
    }
    getAnchorElement() {
      const e = this.getAnchor();
      return void 0 === e ? void 0 : this.element(e);
    }
    setFocus(e, t) {
      for (const t of e) if (t < 0 || t >= this.length) throw new w(this.user, `Invalid index ${t}`);
      this.focus.set(e, t);
    }
    focusNext(e = 1, t = !1, i, n) {
      if (0 === this.length) return;
      const o = this.focus.get(),
        s = this.findNextIndex(o.length > 0 ? o[0] + e : 0, t, n);
      s > -1 && this.setFocus([s], i);
    }
    focusPrevious(e = 1, t = !1, i, n) {
      if (0 === this.length) return;
      const o = this.focus.get(),
        s = this.findPreviousIndex(o.length > 0 ? o[0] - e : 0, t, n);
      s > -1 && this.setFocus([s], i);
    }
    focusNextPage(e, t) {
      return S(this, void 0, void 0, function* () {
        let i = this.view.indexAt(this.view.getScrollTop() + this.view.renderHeight);
        i = 0 === i ? 0 : i - 1;
        const n = this.view.element(i),
          o = this.getFocusedElements()[0];
        if (o !== n) {
          const n = this.findPreviousIndex(i, !1, t);
          n > -1 && o !== this.view.element(n) ? this.setFocus([n], e) : this.setFocus([i], e);
        } else {
          const n = this.view.getScrollTop();
          (this.view.setScrollTop(n + this.view.renderHeight - this.view.elementHeight(i)), this.view.getScrollTop() !== n && (this.setFocus([]), yield (0, d.Vs)(0), yield this.focusNextPage(e, t)));
        }
      });
    }
    focusPreviousPage(e, t) {
      return S(this, void 0, void 0, function* () {
        let i;
        const n = this.view.getScrollTop();
        i = 0 === n ? this.view.indexAt(n) : this.view.indexAfter(n - 1);
        const o = this.view.element(i),
          s = this.getFocusedElements()[0];
        if (s !== o) {
          const n = this.findNextIndex(i, !1, t);
          n > -1 && s !== this.view.element(n) ? this.setFocus([n], e) : this.setFocus([i], e);
        } else {
          const i = n;
          (this.view.setScrollTop(n - this.view.renderHeight), this.view.getScrollTop() !== i && (this.setFocus([]), yield (0, d.Vs)(0), yield this.focusPreviousPage(e, t)));
        }
      });
    }
    focusLast(e, t) {
      if (0 === this.length) return;
      const i = this.findPreviousIndex(this.length - 1, !1, t);
      i > -1 && this.setFocus([i], e);
    }
    focusFirst(e, t) {
      this.focusNth(0, e, t);
    }
    focusNth(e, t, i) {
      if (0 === this.length) return;
      const n = this.findNextIndex(e, !1, i);
      n > -1 && this.setFocus([n], t);
    }
    findNextIndex(e, t = !1, i) {
      for (let n = 0; n < this.length; n++) {
        if (e >= this.length && !t) return -1;
        if (((e %= this.length), !i || i(this.element(e)))) return e;
        e++;
      }
      return -1;
    }
    findPreviousIndex(e, t = !1, i) {
      for (let n = 0; n < this.length; n++) {
        if (e < 0 && !t) return -1;
        if (((e = (this.length + (e % this.length)) % this.length), !i || i(this.element(e)))) return e;
        e--;
      }
      return -1;
    }
    getFocus() {
      return this.focus.get();
    }
    getFocusedElements() {
      return this.getFocus().map(e => this.view.element(e));
    }
    reveal(e, t) {
      if (e < 0 || e >= this.length) throw new w(this.user, `Invalid index ${e}`);
      const i = this.view.getScrollTop(),
        n = this.view.elementTop(e),
        o = this.view.elementHeight(e);
      if ((0, b.hj)(t)) {
        const e = o - this.view.renderHeight;
        this.view.setScrollTop(e * (0, m.u)(t, 0, 1) + n);
      } else {
        const e = n + o,
          t = i + this.view.renderHeight;
        (n < i && e >= t) || (n < i || (e >= t && o >= this.view.renderHeight) ? this.view.setScrollTop(n) : e >= t && this.view.setScrollTop(e - this.view.renderHeight));
      }
    }
    getRelativeTop(e) {
      if (e < 0 || e >= this.length) throw new w(this.user, `Invalid index ${e}`);
      const t = this.view.getScrollTop(),
        i = this.view.elementTop(e),
        n = this.view.elementHeight(e);
      if (i < t || i + n > t + this.view.renderHeight) return null;
      const o = n - this.view.renderHeight;
      return Math.abs((t - i) / o);
    }
    getHTMLElement() {
      return this.view.domNode;
    }
    style(e) {
      this.styleController.style(e);
    }
    toListEvent({
      indexes: e,
      browserEvent: t
    }) {
      return {
        indexes: e,
        elements: e.map(e => this.view.element(e)),
        browserEvent: t
      };
    }
    _onFocusChange() {
      const e = this.focus.get();
      (this.view.domNode.classList.toggle("element-focused", e.length > 0), this.onDidChangeActiveDescendant());
    }
    onDidChangeActiveDescendant() {
      var e;
      const t = this.focus.get();
      if (t.length > 0) {
        let i;
        ((null === (e = this.accessibilityProvider) || void 0 === e ? void 0 : e.getActiveDescendantId) && (i = this.accessibilityProvider.getActiveDescendantId(this.view.element(t[0]))), this.view.domNode.setAttribute("aria-activedescendant", i || this.view.getElementDomId(t[0])));
      } else this.view.domNode.removeAttribute("aria-activedescendant");
    }
    _onSelectionChange() {
      const e = this.selection.get();
      (this.view.domNode.classList.toggle("selection-none", 0 === e.length), this.view.domNode.classList.toggle("selection-single", 1 === e.length), this.view.domNode.classList.toggle("selection-multiple", e.length > 1));
    }
    dispose() {
      (this._onDidDispose.fire(), this.disposables.dispose(), this._onDidDispose.dispose());
    }
  }
  (x([u.H], q.prototype, "onDidChangeFocus", null), x([u.H], q.prototype, "onDidChangeSelection", null), x([u.H], q.prototype, "onContextMenu", null), x([u.H], q.prototype, "onKeyDown", null), x([u.H], q.prototype, "onDidFocus", null));
};