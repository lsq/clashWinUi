module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    ModesHoverController: () => Ue
  }));
  var n = i(22258),
    o = i(5976),
    s = i(16830),
    r = i(24314),
    a = i(29102),
    l = i(71531),
    c = i(10365),
    d = i(65321),
    h = i(9802);
  i(17535);
  const u = d.$;
  class g extends o.JT {
    constructor() {
      (super(), (this.containerDomNode = document.createElement("div")), (this.containerDomNode.className = "monaco-hover"), (this.containerDomNode.tabIndex = 0), this.containerDomNode.setAttribute("role", "tooltip"), (this.contentsDomNode = document.createElement("div")), (this.contentsDomNode.className = "monaco-hover-content"), (this._scrollbar = this._register(new h.s$(this.contentsDomNode, {
        consumeMouseWheelIfScrollbarIsNeeded: !0
      }))), this.containerDomNode.appendChild(this._scrollbar.getDomNode()));
    }
    onContentsChanged() {
      this._scrollbar.scanDomNode();
    }
  }
  class p extends o.JT {
    constructor(e, t, i) {
      (super(), (this.actionContainer = d.R3(e, u("div.action-container"))), (this.action = d.R3(this.actionContainer, u("a.action"))), this.action.setAttribute("href", "#"), this.action.setAttribute("role", "button"), t.iconClass && d.R3(this.action, u(`span.icon.${t.iconClass}`)));
      ((d.R3(this.action, u("span")).textContent = i ? `${t.label} (${i})` : t.label), this._register(d.nm(this.actionContainer, d.tw.MOUSE_DOWN, e => {
        (e.stopPropagation(), e.preventDefault(), t.run(this.actionContainer));
      })), this.setEnabled(!0));
    }
    static render(e, t, i) {
      return new p(e, t, i);
    }
    setEnabled(e) {
      e ? (this.actionContainer.classList.remove("disabled"), this.actionContainer.removeAttribute("aria-disabled")) : (this.actionContainer.classList.add("disabled"), this.actionContainer.setAttribute("aria-disabled", "true"));
    }
  }
  var f = i(93794),
    m = i(9488),
    v = i(50187),
    _ = i(44174),
    b = i(44101),
    w = i(71050),
    y = i(41264),
    C = i(83308),
    x = i(64494),
    S = i(4669);
  class k {
    constructor(e, t, i) {
      ((this.presentationIndex = i), (this._onColorFlushed = new S.Q5()), (this.onColorFlushed = this._onColorFlushed.event), (this._onDidChangeColor = new S.Q5()), (this.onDidChangeColor = this._onDidChangeColor.event), (this._onDidChangePresentation = new S.Q5()), (this.onDidChangePresentation = this._onDidChangePresentation.event), (this.originalColor = e), (this._color = e), (this._colorPresentations = t));
    }
    get color() {
      return this._color;
    }
    set color(e) {
      this._color.equals(e) || ((this._color = e), this._onDidChangeColor.fire(e));
    }
    get presentation() {
      return this.colorPresentations[this.presentationIndex];
    }
    get colorPresentations() {
      return this._colorPresentations;
    }
    set colorPresentations(e) {
      ((this._colorPresentations = e), this.presentationIndex > e.length - 1 && (this.presentationIndex = 0), this._onDidChangePresentation.fire(this.presentation));
    }
    selectNextColorPresentation() {
      ((this.presentationIndex = (this.presentationIndex + 1) % this.colorPresentations.length), this.flushColor(), this._onDidChangePresentation.fire(this.presentation));
    }
    guessColorPresentation(e, t) {
      for (let e = 0; e < this.colorPresentations.length; e++) if (t.toLowerCase() === this.colorPresentations[e].label) {
        ((this.presentationIndex = e), this._onDidChangePresentation.fire(this.presentation));
        break;
      }
    }
    flushColor() {
      this._onColorFlushed.fire(this._color);
    }
  }
  var L = i(16268),
    N = i(57974),
    D = (i(85290), i(63580)),
    I = i(73910),
    E = i(97781);
  const T = d.$;
  class M extends o.JT {
    constructor(e, t, i) {
      (super(), (this.model = t), (this.domNode = T(".colorpicker-header")), d.R3(e, this.domNode), (this.pickedColorNode = d.R3(this.domNode, T(".picked-color"))));
      const n = (0, D.N)("clickToToggleColorOptions", "Click to toggle color options (rgb/hsl/hex)");
      this.pickedColorNode.setAttribute("title", n);
      const o = d.R3(this.domNode, T(".original-color"));
      ((o.style.backgroundColor = y.Il.Format.CSS.format(this.model.originalColor) || ""), (this.backgroundColor = i.getColorTheme().getColor(I.yJ) || y.Il.white), this._register((0, E.Ic)((e, t) => {
        this.backgroundColor = e.getColor(I.yJ) || y.Il.white;
      })), this._register(d.nm(this.pickedColorNode, d.tw.CLICK, () => this.model.selectNextColorPresentation())), this._register(d.nm(o, d.tw.CLICK, () => {
        ((this.model.color = this.model.originalColor), this.model.flushColor());
      })), this._register(t.onDidChangeColor(this.onDidChangeColor, this)), this._register(t.onDidChangePresentation(this.onDidChangePresentation, this)), (this.pickedColorNode.style.backgroundColor = y.Il.Format.CSS.format(t.color) || ""), this.pickedColorNode.classList.toggle("light", t.color.rgba.a < 0.5 ? this.backgroundColor.isLighter() : t.color.isLighter()));
    }
    onDidChangeColor(e) {
      ((this.pickedColorNode.style.backgroundColor = y.Il.Format.CSS.format(e) || ""), this.pickedColorNode.classList.toggle("light", e.rgba.a < 0.5 ? this.backgroundColor.isLighter() : e.isLighter()), this.onDidChangePresentation());
    }
    onDidChangePresentation() {
      ((this.pickedColorNode.textContent = this.model.presentation ? this.model.presentation.label : ""), this.pickedColorNode.prepend(T(".codicon.codicon-color-mode")));
    }
  }
  class A extends o.JT {
    constructor(e, t, i) {
      (super(), (this.model = t), (this.pixelRatio = i), (this.domNode = T(".colorpicker-body")), d.R3(e, this.domNode), (this.saturationBox = new O(this.domNode, this.model, this.pixelRatio)), this._register(this.saturationBox), this._register(this.saturationBox.onDidChange(this.onDidSaturationValueChange, this)), this._register(this.saturationBox.onColorFlushed(this.flushColor, this)), (this.opacityStrip = new R(this.domNode, this.model)), this._register(this.opacityStrip), this._register(this.opacityStrip.onDidChange(this.onDidOpacityChange, this)), this._register(this.opacityStrip.onColorFlushed(this.flushColor, this)), (this.hueStrip = new F(this.domNode, this.model)), this._register(this.hueStrip), this._register(this.hueStrip.onDidChange(this.onDidHueChange, this)), this._register(this.hueStrip.onColorFlushed(this.flushColor, this)));
    }
    flushColor() {
      this.model.flushColor();
    }
    onDidSaturationValueChange({
      s: e,
      v: t
    }) {
      const i = this.model.color.hsva;
      this.model.color = new y.Il(new y.tx(i.h, e, t, i.a));
    }
    onDidOpacityChange(e) {
      const t = this.model.color.hsva;
      this.model.color = new y.Il(new y.tx(t.h, t.s, t.v, e));
    }
    onDidHueChange(e) {
      const t = this.model.color.hsva,
        i = 360 * (1 - e);
      this.model.color = new y.Il(new y.tx(360 === i ? 0 : i, t.s, t.v, t.a));
    }
    layout() {
      (this.saturationBox.layout(), this.opacityStrip.layout(), this.hueStrip.layout());
    }
  }
  class O extends o.JT {
    constructor(e, t, i) {
      (super(), (this.model = t), (this.pixelRatio = i), (this._onDidChange = new S.Q5()), (this.onDidChange = this._onDidChange.event), (this._onColorFlushed = new S.Q5()), (this.onColorFlushed = this._onColorFlushed.event), (this.domNode = T(".saturation-wrap")), d.R3(e, this.domNode), (this.canvas = document.createElement("canvas")), (this.canvas.className = "saturation-box"), d.R3(this.domNode, this.canvas), (this.selection = T(".saturation-selection")), d.R3(this.domNode, this.selection), this.layout(), this._register(d.Lo(this.domNode, e => this.onMouseDown(e))), this._register(this.model.onDidChangeColor(this.onDidChangeColor, this)), (this.monitor = null));
    }
    onMouseDown(e) {
      this.monitor = this._register(new N.Z());
      const t = d.i(this.domNode);
      (e.target !== this.selection && this.onDidChangePosition(e.offsetX, e.offsetY), this.monitor.startMonitoring(e.target, e.buttons, N.e, e => this.onDidChangePosition(e.posx - t.left, e.posy - t.top), () => null));
      const i = d.qV(document, () => {
        (this._onColorFlushed.fire(), i.dispose(), this.monitor && (this.monitor.stopMonitoring(!0), (this.monitor = null)));
      }, !0);
    }
    onDidChangePosition(e, t) {
      const i = Math.max(0, Math.min(1, e / this.width)),
        n = Math.max(0, Math.min(1, 1 - t / this.height));
      (this.paintSelection(i, n), this._onDidChange.fire({
        s: i,
        v: n
      }));
    }
    layout() {
      ((this.width = this.domNode.offsetWidth), (this.height = this.domNode.offsetHeight), (this.canvas.width = this.width * this.pixelRatio), (this.canvas.height = this.height * this.pixelRatio), this.paint());
      const e = this.model.color.hsva;
      this.paintSelection(e.s, e.v);
    }
    paint() {
      const e = this.model.color.hsva,
        t = new y.Il(new y.tx(e.h, 1, 1, 1)),
        i = this.canvas.getContext("2d"),
        n = i.createLinearGradient(0, 0, this.canvas.width, 0);
      (n.addColorStop(0, "rgba(255, 255, 255, 1)"), n.addColorStop(0.5, "rgba(255, 255, 255, 0.5)"), n.addColorStop(1, "rgba(255, 255, 255, 0)"));
      const o = i.createLinearGradient(0, 0, 0, this.canvas.height);
      (o.addColorStop(0, "rgba(0, 0, 0, 0)"), o.addColorStop(1, "rgba(0, 0, 0, 1)"), i.rect(0, 0, this.canvas.width, this.canvas.height), (i.fillStyle = y.Il.Format.CSS.format(t)), i.fill(), (i.fillStyle = n), i.fill(), (i.fillStyle = o), i.fill());
    }
    paintSelection(e, t) {
      ((this.selection.style.left = e * this.width + "px"), (this.selection.style.top = this.height - t * this.height + "px"));
    }
    onDidChangeColor() {
      (this.monitor && this.monitor.isMonitoring()) || this.paint();
    }
  }
  class P extends o.JT {
    constructor(e, t) {
      (super(), (this.model = t), (this._onDidChange = new S.Q5()), (this.onDidChange = this._onDidChange.event), (this._onColorFlushed = new S.Q5()), (this.onColorFlushed = this._onColorFlushed.event), (this.domNode = d.R3(e, T(".strip"))), (this.overlay = d.R3(this.domNode, T(".overlay"))), (this.slider = d.R3(this.domNode, T(".slider"))), (this.slider.style.top = "0px"), this._register(d.Lo(this.domNode, e => this.onMouseDown(e))), this.layout());
    }
    layout() {
      this.height = this.domNode.offsetHeight - this.slider.offsetHeight;
      const e = this.getValue(this.model.color);
      this.updateSliderPosition(e);
    }
    onMouseDown(e) {
      const t = this._register(new N.Z()),
        i = d.i(this.domNode);
      (this.domNode.classList.add("grabbing"), e.target !== this.slider && this.onDidChangeTop(e.offsetY), t.startMonitoring(e.target, e.buttons, N.e, e => this.onDidChangeTop(e.posy - i.top), () => null));
      const n = d.qV(document, () => {
        (this._onColorFlushed.fire(), n.dispose(), t.stopMonitoring(!0), this.domNode.classList.remove("grabbing"));
      }, !0);
    }
    onDidChangeTop(e) {
      const t = Math.max(0, Math.min(1, 1 - e / this.height));
      (this.updateSliderPosition(t), this._onDidChange.fire(t));
    }
    updateSliderPosition(e) {
      this.slider.style.top = (1 - e) * this.height + "px";
    }
  }
  class R extends P {
    constructor(e, t) {
      (super(e, t), this.domNode.classList.add("opacity-strip"), this._register(t.onDidChangeColor(this.onDidChangeColor, this)), this.onDidChangeColor(this.model.color));
    }
    onDidChangeColor(e) {
      const {
          r: t,
          g: i,
          b: n
        } = e.rgba,
        o = new y.Il(new y.VS(t, i, n, 1)),
        s = new y.Il(new y.VS(t, i, n, 0));
      this.overlay.style.background = `linear-gradient(to bottom, ${o} 0%, ${s} 100%)`;
    }
    getValue(e) {
      return e.hsva.a;
    }
  }
  class F extends P {
    constructor(e, t) {
      (super(e, t), this.domNode.classList.add("hue-strip"));
    }
    getValue(e) {
      return 1 - e.hsva.h / 360;
    }
  }
  class B extends f.$ {
    constructor(e, t, i, n) {
      (super(), (this.model = t), (this.pixelRatio = i), this._register((0, L.fX)(() => this.layout())));
      const o = T(".colorpicker-widget");
      e.appendChild(o);
      const s = new M(o, this.model, n);
      ((this.body = new A(o, this.model, this.pixelRatio)), this._register(s), this._register(this.body));
    }
    layout() {
      this.body.layout();
    }
  }
  var V = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    W = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    H = function (e, t, i, n) {
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
  class z {
    constructor(e, t, i, n) {
      ((this.owner = e), (this.range = t), (this.model = i), (this.provider = n), (this.forceShowAtRange = !0));
    }
    isValidForHoverAnchor(e) {
      return (1 === e.type && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn);
    }
  }
  let j = class {
    constructor(e, t, i) {
      ((this._editor = e), (this._hover = t), (this._themeService = i));
    }
    computeSync(e, t) {
      return [];
    }
    computeAsync(e, t, i) {
      return H(this, void 0, void 0, function* () {
        if (!this._editor.hasModel()) return [];
        const e = x.i.get(this._editor);
        for (const i of t) {
          if ("color-detector-color" !== i.options.description) continue;
          const t = e.getColorData(i.range.getStartPosition());
          if (t) {
            return [yield this._createColorHover(this._editor.getModel(), t.colorInfo, t.provider)];
          }
        }
        return [];
      });
    }
    _createColorHover(e, t, i) {
      return H(this, void 0, void 0, function* () {
        const n = e.getValueInRange(t.range),
          {
            red: o,
            green: s,
            blue: a,
            alpha: l
          } = t.color,
          c = new y.VS(Math.round(255 * o), Math.round(255 * s), Math.round(255 * a), l),
          d = new y.Il(c),
          h = yield (0, C.R)(e, t, i, w.T.None),
          u = new k(d, [], 0);
        return ((u.colorPresentations = h || []), u.guessColorPresentation(d, n), new z(this, r.e.lift(t.range), u, i));
      });
    }
    renderHoverParts(e, t, i) {
      if (0 === e.length || !this._editor.hasModel()) return o.JT.None;
      const n = new o.SL(),
        s = e[0],
        a = this._editor.getModel(),
        l = s.model,
        c = n.add(new B(t, l, this._editor.getOption(127), this._themeService));
      let d = new r.e(s.range.startLineNumber, s.range.startColumn, s.range.endLineNumber, s.range.endColumn);
      const h = () => {
          let e, t;
          if (l.presentation.textEdit) {
            ((e = [l.presentation.textEdit]), (t = new r.e(l.presentation.textEdit.range.startLineNumber, l.presentation.textEdit.range.startColumn, l.presentation.textEdit.range.endLineNumber, l.presentation.textEdit.range.endColumn)));
            const i = this._editor.getModel()._setTrackedRange(null, t, 3);
            (this._editor.pushUndoStop(), this._editor.executeEdits("colorpicker", e), (t = this._editor.getModel()._getTrackedRange(i) || t));
          } else ((e = [{
            identifier: null,
            range: d,
            text: l.presentation.label,
            forceMoveMarkers: !1
          }]), (t = d.setEndPosition(d.endLineNumber, d.startColumn + l.presentation.label.length)), this._editor.pushUndoStop(), this._editor.executeEdits("colorpicker", e));
          (l.presentation.additionalTextEdits && ((e = [...l.presentation.additionalTextEdits]), this._editor.executeEdits("colorpicker", e), this._hover.hide()), this._editor.pushUndoStop(), (d = t));
        },
        u = e => (0, C.R)(a, {
          range: d,
          color: {
            red: e.rgba.r / 255,
            green: e.rgba.g / 255,
            blue: e.rgba.b / 255,
            alpha: e.rgba.a
          }
        }, s.provider, w.T.None).then(e => {
          l.colorPresentations = e || [];
        });
      return (n.add(l.onColorFlushed(e => {
        u(e).then(h);
      })), n.add(l.onDidChangeColor(u)), this._hover.setColorPicker(c), n);
    }
  };
  j = V([W(2, E.XE)], j);
  var U = i(15393),
    $ = i(17301);
  class K {
    constructor(e, t, i, n, o) {
      ((this._computer = e), (this._state = 0), (this._hoverTime = o), (this._firstWaitScheduler = new U.pY(() => this._triggerAsyncComputation(), 0)), (this._secondWaitScheduler = new U.pY(() => this._triggerSyncComputation(), 0)), (this._loadingMessageScheduler = new U.pY(() => this._showLoadingMessage(), 0)), (this._asyncComputationPromise = null), (this._asyncComputationPromiseDone = !1), (this._completeCallback = t), (this._errorCallback = i), (this._progressCallback = n));
    }
    setHoverTime(e) {
      this._hoverTime = e;
    }
    _firstWaitTime() {
      return this._hoverTime / 2;
    }
    _secondWaitTime() {
      return this._hoverTime / 2;
    }
    _loadingMessageTime() {
      return 3 * this._hoverTime;
    }
    _triggerAsyncComputation() {
      ((this._state = 2), this._secondWaitScheduler.schedule(this._secondWaitTime()), this._computer.computeAsync ? ((this._asyncComputationPromiseDone = !1), (this._asyncComputationPromise = (0, U.PG)(e => this._computer.computeAsync(e))), this._asyncComputationPromise.then(e => {
        ((this._asyncComputationPromiseDone = !0), this._withAsyncResult(e));
      }, e => this._onError(e))) : (this._asyncComputationPromiseDone = !0));
    }
    _triggerSyncComputation() {
      (this._computer.computeSync && this._computer.onResult(this._computer.computeSync(), !0), this._asyncComputationPromiseDone ? ((this._state = 0), this._onComplete(this._computer.getResult())) : ((this._state = 3), this._onProgress(this._computer.getResult())));
    }
    _showLoadingMessage() {
      3 === this._state && this._onProgress(this._computer.getResultWithLoadingMessage());
    }
    _withAsyncResult(e) {
      (e && this._computer.onResult(e, !1), 3 === this._state && ((this._state = 0), this._onComplete(this._computer.getResult())));
    }
    _onComplete(e) {
      this._completeCallback(e);
    }
    _onError(e) {
      this._errorCallback ? this._errorCallback(e) : (0, $.dL)(e);
    }
    _onProgress(e) {
      this._progressCallback(e);
    }
    start(e) {
      if (0 === e) 0 === this._state && ((this._state = 1), this._firstWaitScheduler.schedule(this._firstWaitTime()), this._loadingMessageScheduler.schedule(this._loadingMessageTime()));else switch (this._state) {
        case 0:
          (this._triggerAsyncComputation(), this._secondWaitScheduler.cancel(), this._triggerSyncComputation());
          break;
        case 2:
          (this._secondWaitScheduler.cancel(), this._triggerSyncComputation());
      }
    }
    cancel() {
      (this._loadingMessageScheduler.cancel(), 1 === this._state && this._firstWaitScheduler.cancel(), 2 === this._state && (this._secondWaitScheduler.cancel(), this._asyncComputationPromise && (this._asyncComputationPromise.cancel(), (this._asyncComputationPromise = null))), 3 === this._state && this._asyncComputationPromise && (this._asyncComputationPromise.cancel(), (this._asyncComputationPromise = null)), (this._state = 0));
    }
  }
  class q {
    constructor(e, t) {
      ((this.priority = e), (this.range = t), (this.type = 1));
    }
    equals(e) {
      return 1 === e.type && this.range.equalsRange(e.range);
    }
    canAdoptVisibleHover(e, t) {
      return 1 === e.type && t.lineNumber === this.range.startLineNumber;
    }
  }
  class Z {
    constructor(e, t, i) {
      ((this.priority = e), (this.owner = t), (this.range = i), (this.type = 2));
    }
    equals(e) {
      return 2 === e.type && this.owner === e.owner;
    }
    canAdoptVisibleHover(e, t) {
      return 2 === e.type && this.owner === e.owner;
    }
  }
  var G = i(59365),
    Y = i(43256);
  function Q(e, t, i) {
    const n = b.xp.ordered(e).map(n => Promise.resolve(n.provideHover(e, t, i)).then(e => e && (function (e) {
      const t = void 0 !== e.range,
        i = void 0 !== e.contents && e.contents && e.contents.length > 0;
      return t && i;
    })(e) ? e : void 0, e => {
      (0, $.Cp)(e);
    }));
    return Promise.all(n).then(m.kX);
  }
  (0, s.sb)("_executeHoverProvider", (e, t) => Q(e, t, w.T.None));
  var X = i(33108),
    J = i(50988),
    ee = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    te = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    ie = function (e, t, i, n) {
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
  const ne = d.$;
  class oe {
    constructor(e, t, i) {
      ((this.owner = e), (this.range = t), (this.contents = i));
    }
    isValidForHoverAnchor(e) {
      return (1 === e.type && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn);
    }
  }
  let se = class {
    constructor(e, t, i, n, o) {
      ((this._editor = e), (this._hover = t), (this._modeService = i), (this._openerService = n), (this._configurationService = o));
    }
    createLoadingMessage(e) {
      return new oe(this, e.range, [new G.W5().appendText(D.N("modesContentHover.loading", "正在加载..."))]);
    }
    computeSync(e, t) {
      if (!this._editor.hasModel() || 1 !== e.type) return [];
      const i = this._editor.getModel(),
        n = e.range.startLineNumber,
        o = i.getLineMaxColumn(n),
        s = [];
      for (const i of t) {
        const t = i.range.startLineNumber === n ? i.range.startColumn : 1,
          a = i.range.endLineNumber === n ? i.range.endColumn : o,
          l = i.options.hoverMessage;
        if (!l || (0, G.CP)(l)) continue;
        const c = new r.e(e.range.startLineNumber, t, e.range.startLineNumber, a);
        s.push(new oe(this, c, (0, m._2)(l)));
      }
      const a = i.getLineLength(n),
        l = i.getLanguageIdAtPosition(e.range.startLineNumber, e.range.startColumn),
        c = this._configurationService.getValue("editor.maxTokenizationLineLength", {
          overrideIdentifier: l
        });
      return ("number" == typeof c && a >= c && s.push(new oe(this, e.range, [{
        value: D.N("too many characters", "Tokenization is skipped for long lines for performance reasons. This can be configured via `editor.maxTokenizationLineLength`.")
      }])), s);
    }
    computeAsync(e, t, i) {
      return ie(this, void 0, void 0, function* () {
        if (!this._editor.hasModel() || 1 !== e.type) return Promise.resolve([]);
        const t = this._editor.getModel();
        if (!b.xp.has(t)) return Promise.resolve([]);
        const n = yield Q(t, new v.L(e.range.startLineNumber, e.range.startColumn), i),
          o = [];
        for (const t of n) {
          if ((0, G.CP)(t.contents)) continue;
          const i = t.range ? r.e.lift(t.range) : e.range;
          o.push(new oe(this, i, t.contents));
        }
        return o;
      });
    }
    renderHoverParts(e, t, i) {
      const n = new o.SL();
      for (const i of e) for (const e of i.contents) {
        if ((0, G.CP)(e)) continue;
        const i = ne("div.hover-row.markdown-hover"),
          o = d.R3(i, ne("div.hover-contents")),
          s = n.add(new Y.$({
            editor: this._editor
          }, this._modeService, this._openerService));
        n.add(s.onDidRenderAsync(() => {
          ((o.className = "hover-contents code-hover-contents"), this._hover.onContentsChanged());
        }));
        const r = n.add(s.render(e));
        (o.appendChild(r.element), t.appendChild(i));
      }
      return n;
    }
  };
  se = ee([te(2, l.h), te(3, J.v4), te(4, X.Ui)], se);
  var re = i(95935),
    ae = i(26479),
    le = i(31907),
    ce = i(23674),
    de = i(89532),
    he = i(42698),
    ue = i(98674),
    ge = i(90535),
    pe = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    fe = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  const me = d.$;
  class ve {
    constructor(e, t, i) {
      ((this.owner = e), (this.range = t), (this.marker = i));
    }
    isValidForHoverAnchor(e) {
      return (1 === e.type && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn);
    }
  }
  const _e = {
    type: 1,
    filter: {
      include: de.yN.QuickFix
    }
  };
  let be = class {
    constructor(e, t, i, n) {
      ((this._editor = e), (this._hover = t), (this._markerDecorationsService = i), (this._openerService = n), (this.recentMarkerCodeActionsInfo = void 0));
    }
    computeSync(e, t) {
      if (!this._editor.hasModel() || 1 !== e.type) return [];
      const i = this._editor.getModel(),
        n = e.range.startLineNumber,
        o = i.getLineMaxColumn(n),
        s = [];
      for (const a of t) {
        const t = a.range.startLineNumber === n ? a.range.startColumn : 1,
          l = a.range.endLineNumber === n ? a.range.endColumn : o,
          c = this._markerDecorationsService.getMarker(i.uri, a);
        if (!c) continue;
        const d = new r.e(e.range.startLineNumber, t, e.range.startLineNumber, l);
        s.push(new ve(this, d, c));
      }
      return s;
    }
    renderHoverParts(e, t, i) {
      if (!e.length) return o.JT.None;
      const n = new o.SL();
      e.forEach(e => t.appendChild(this.renderMarkerHover(e, n)));
      const s = 1 === e.length ? e[0] : e.sort((e, t) => ue.ZL.compare(e.marker.severity, t.marker.severity))[0];
      return (this.renderMarkerStatusbar(s, i, n), n);
    }
    renderMarkerHover(e, t) {
      const i = me("div.hover-row"),
        n = d.R3(i, me("div.marker.hover-contents")),
        {
          source: o,
          message: s,
          code: r,
          relatedInformation: a
        } = e.marker;
      this._editor.applyFontInfo(n);
      const l = d.R3(n, me("span"));
      if (((l.style.whiteSpace = "pre-wrap"), (l.innerText = s), o || r)) if (r && "string" != typeof r) {
        const e = me("span");
        if (o) {
          d.R3(e, me("span")).innerText = o;
        }
        const i = d.R3(e, me("a.code-link"));
        (i.setAttribute("href", r.target.toString()), t.add(d.nm(i, "click", e => {
          (this._openerService.open(r.target, {
            allowCommands: !0
          }), e.preventDefault(), e.stopPropagation());
        })));
        d.R3(i, me("span")).innerText = r.value;
        const s = d.R3(n, e);
        ((s.style.opacity = "0.6"), (s.style.paddingLeft = "6px"));
      } else {
        const e = d.R3(n, me("span"));
        ((e.style.opacity = "0.6"), (e.style.paddingLeft = "6px"), (e.innerText = o && r ? `${o}(${r})` : o || `(${r})`));
      }
      if ((0, m.Of)(a)) for (const {
        message: e,
        resource: i,
        startLineNumber: o,
        startColumn: s
      } of a) {
        const r = d.R3(n, me("div"));
        r.style.marginTop = "8px";
        const a = d.R3(r, me("a"));
        ((a.innerText = `${(0, re.EZ)(i)}(${o}, ${s}): `), (a.style.cursor = "pointer"), t.add(d.nm(a, "click", e => {
          (e.stopPropagation(), e.preventDefault(), this._openerService && this._openerService.open(i, {
            fromUserGesture: !0,
            editorOptions: {
              selection: {
                startLineNumber: o,
                startColumn: s
              }
            }
          }).catch($.dL));
        })));
        const l = d.R3(r, me("span"));
        ((l.innerText = e), this._editor.applyFontInfo(l));
      }
      return i;
    }
    renderMarkerStatusbar(e, t, i) {
      if (((e.marker.severity !== ue.ZL.Error && e.marker.severity !== ue.ZL.Warning && e.marker.severity !== ue.ZL.Info) || t.addAction({
        label: D.N("view problem", "View Problem"),
        commandId: he.NextMarkerAction.ID,
        run: () => {
          (this._hover.hide(), he.MarkerController.get(this._editor).showAtMarker(e.marker), this._editor.focus());
        }
      }), !this._editor.getOption(80))) {
        const n = t.append(me("div"));
        this.recentMarkerCodeActionsInfo && (ue.H0.makeKey(this.recentMarkerCodeActionsInfo.marker) === ue.H0.makeKey(e.marker) ? this.recentMarkerCodeActionsInfo.hasCodeActions || (n.textContent = D.N("noQuickFixes", "No quick fixes available")) : (this.recentMarkerCodeActionsInfo = void 0));
        const s = this.recentMarkerCodeActionsInfo && !this.recentMarkerCodeActionsInfo.hasCodeActions ? o.JT.None : i.add((0, U.Vg)(() => (n.textContent = D.N("checkingForQuickFixes", "Checking for quick fixes...")), 200));
        n.textContent || (n.textContent = String.fromCharCode(160));
        const r = this.getCodeActions(e.marker);
        (i.add((0, o.OF)(() => r.cancel())), r.then(r => {
          if ((s.dispose(), (this.recentMarkerCodeActionsInfo = {
            marker: e.marker,
            hasCodeActions: r.validActions.length > 0
          }), !this.recentMarkerCodeActionsInfo.hasCodeActions)) return (r.dispose(), void (n.textContent = D.N("noQuickFixes", "No quick fixes available")));
          n.style.display = "none";
          let a = !1;
          (i.add((0, o.OF)(() => {
            a || r.dispose();
          })), t.addAction({
            label: D.N("quick fixes", "Quick Fix..."),
            commandId: ce.E7.Id,
            run: e => {
              a = !0;
              const t = ce.pY.get(this._editor),
                i = d.i(e);
              (this._hover.hide(), t.showCodeActions(_e, r, {
                x: i.left + 6,
                y: i.top + i.height + 6
              }));
            }
          }));
        }, $.dL));
      }
    }
    getCodeActions(e) {
      return (0, U.PG)(t => (0, le.aI)(this._editor.getModel(), new r.e(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn), _e, ge.E.None, t));
    }
  };
  ((be = pe([fe(2, ae.i), fe(3, J.v4)], be)), (0, E.Ic)((e, t) => {
    const i = e.getColor(I.ur);
    i && t.addRule(`.monaco-hover .hover-contents a.code-link span { color: ${i}; }`);
    const n = e.getColor(I.sg);
    n && t.addRule(`.monaco-hover .hover-contents a.code-link span:hover { color: ${n}; }`);
  }));
  var we = i(43818),
    ye = i(31106),
    Ce = i(84144),
    xe = i(94565),
    Se = i(38819),
    ke = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Le = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  class Ne {
    constructor(e, t, i) {
      ((this.owner = e), (this.range = t), (this.controller = i));
    }
    isValidForHoverAnchor(e) {
      return (1 === e.type && this.range.startColumn <= e.range.startColumn && this.range.endColumn >= e.range.endColumn);
    }
    hasMultipleSuggestions() {
      return this.controller.hasMultipleInlineCompletions();
    }
  }
  let De = class {
    constructor(e, t, i, n, o, s, r, a) {
      ((this._editor = e), (this._hover = t), (this._commandService = i), (this._menuService = n), (this._contextKeyService = o), (this._modeService = s), (this._openerService = r), (this.accessibilityService = a));
    }
    suggestHoverAnchor(e) {
      const t = we.GhostTextController.get(this._editor);
      if (!t) return null;
      if (8 === e.target.type) {
        const i = e.target.detail;
        if (t.shouldShowHoverAtViewZone(i.viewZoneId)) return new Z(1e3, this, r.e.fromPositions(i.positionBefore || i.position, i.positionBefore || i.position));
      }
      if (7 === e.target.type && e.target.range && t.shouldShowHoverAt(e.target.range)) return new Z(1e3, this, e.target.range);
      if (6 === e.target.type && e.target.range && e.target.detail) {
        if (e.target.detail.mightBeForeignElement && t.shouldShowHoverAt(e.target.range)) return new Z(1e3, this, e.target.range);
      }
      return null;
    }
    computeSync(e, t) {
      const i = we.GhostTextController.get(this._editor);
      return i && i.shouldShowHoverAt(e.range) ? [new Ne(this, e.range, i)] : [];
    }
    renderHoverParts(e, t, i) {
      const n = new o.SL(),
        s = e[0];
      this.accessibilityService.isScreenReaderOptimized() && this.renderScreenReaderText(s, t, n);
      const r = n.add(this._menuService.createMenu(Ce.eH.InlineCompletionsActions, this._contextKeyService)),
        a = i.addAction({
          label: D.N("showNextInlineSuggestion", "Next"),
          commandId: we.ShowNextInlineSuggestionAction.ID,
          run: () => this._commandService.executeCommand(we.ShowNextInlineSuggestionAction.ID)
        }),
        l = i.addAction({
          label: D.N("showPreviousInlineSuggestion", "Previous"),
          commandId: we.ShowPreviousInlineSuggestionAction.ID,
          run: () => this._commandService.executeCommand(we.ShowPreviousInlineSuggestionAction.ID)
        });
      i.addAction({
        label: D.N("acceptInlineSuggestion", "Accept"),
        commandId: we.commitInlineSuggestionAction.id,
        run: () => this._commandService.executeCommand(we.commitInlineSuggestionAction.id)
      });
      const c = [a, l];
      for (const e of c) e.setEnabled(!1);
      s.hasMultipleSuggestions().then(e => {
        for (const t of c) t.setEnabled(e);
      });
      for (const [e, t] of r.getActions()) for (const e of t) e instanceof Ce.U8 && i.addAction({
        label: e.label,
        commandId: e.item.id,
        run: () => this._commandService.executeCommand(e.item.id)
      });
      return n;
    }
    renderScreenReaderText(e, t, i) {
      var n, o;
      const s = d.$,
        r = s("div.hover-row.markdown-hover"),
        a = d.R3(r, s("div.hover-contents")),
        l = i.add(new Y.$({
          editor: this._editor
        }, this._modeService, this._openerService)),
        c = e => {
          i.add(l.onDidRenderAsync(() => {
            ((a.className = "hover-contents code-hover-contents"), this._hover.onContentsChanged());
          }));
          const t = D.N("inlineSuggestionFollows", "Suggestion:"),
            n = i.add(l.render(new G.W5().appendText(t).appendCodeblock("text", e)));
          a.replaceChildren(n.element);
        },
        h = null === (o = null === (n = e.controller.activeModel) || void 0 === n ? void 0 : n.inlineCompletionsModel) || void 0 === o ? void 0 : o.ghostText;
      if (h) {
        const e = this._editor.getModel().getLineContent(h.lineNumber);
        c(h.renderForScreenReader(e));
      }
      t.appendChild(r);
    }
  };
  De = ke([Le(2, xe.H), Le(3, Ce.co), Le(4, Se.i6), Le(5, l.h), Le(6, J.v4), Le(7, ye.F)], De);
  var Ie = i(72065),
    Ee = i(91847),
    Te = i(79599),
    Me = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    Ae = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    Oe = function (e, t, i, n) {
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
  const Pe = d.$;
  let Re = class extends o.JT {
    constructor(e) {
      (super(), (this._keybindingService = e), (this._hasContent = !1), (this.hoverElement = Pe("div.hover-row.status-bar")), (this.actionsElement = d.R3(this.hoverElement, Pe("div.actions"))));
    }
    get hasContent() {
      return this._hasContent;
    }
    addAction(e) {
      const t = this._keybindingService.lookupKeybinding(e.commandId),
        i = t ? t.getLabel() : null;
      return ((this._hasContent = !0), this._register(p.render(this.actionsElement, e, i)));
    }
    append(e) {
      const t = d.R3(this.actionsElement, e);
      return ((this._hasContent = !0), t);
    }
  };
  Re = Me([Ae(0, Ee.d)], Re);
  class Fe {
    constructor(e, t) {
      ((this._participants = t), (this._editor = e), (this._result = []), (this._anchor = null));
    }
    setAnchor(e) {
      ((this._anchor = e), (this._result = []));
    }
    clearResult() {
      this._result = [];
    }
    static _getLineDecorations(e, t) {
      if (1 !== t.type) return [];
      const i = e.getModel(),
        n = t.range.startLineNumber,
        o = i.getLineMaxColumn(n);
      return e.getLineDecorations(n).filter(e => {
        if (e.options.isWholeLine) return !0;
        const i = e.range.startLineNumber === n ? e.range.startColumn : 1,
          s = e.range.endLineNumber === n ? e.range.endColumn : o;
        return !(i > t.range.startColumn || t.range.endColumn > s);
      });
    }
    computeAsync(e) {
      return Oe(this, void 0, void 0, function* () {
        const t = this._anchor;
        if (!this._editor.hasModel() || !t) return Promise.resolve([]);
        const i = Fe._getLineDecorations(this._editor, t),
          n = yield Promise.all(this._participants.map(n => this._computeAsync(n, i, t, e)));
        return (0, m.xH)(n);
      });
    }
    _computeAsync(e, t, i, n) {
      return Oe(this, void 0, void 0, function* () {
        return e.computeAsync ? e.computeAsync(i, t, n) : [];
      });
    }
    computeSync() {
      if (!this._editor.hasModel() || !this._anchor) return [];
      const e = Fe._getLineDecorations(this._editor, this._anchor);
      let t = [];
      for (const i of this._participants) t = t.concat(i.computeSync(this._anchor, e));
      return (0, m.kX)(t);
    }
    onResult(e, t) {
      this._result = t ? e.concat(this._result) : this._result.concat(e);
    }
    getResult() {
      return this._result.slice(0);
    }
    getResultWithLoadingMessage() {
      if (this._anchor) for (const e of this._participants) if (e.createLoadingMessage) {
        const t = e.createLoadingMessage(this._anchor);
        if (t) return this._result.slice(0).concat([t]);
      }
      return this._result.slice(0);
    }
  }
  let Be = class e extends f.$ {
    constructor(e, t, i, n, o) {
      (super(), (this._hoverVisibleKey = t), (this._keybindingService = n), (this._contextKeyService = o), (this.allowEditorOverflow = !0), (this._participants = [i.createInstance(j, e, this), i.createInstance(se, e, this), i.createInstance(De, e, this), i.createInstance(be, e, this)]), (this._editor = e), (this._isVisible = !1), (this._stoleFocus = !1), (this._renderDisposable = null), (this._hover = this._register(new g())), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this.onkeydown(this._hover.containerDomNode, e => {
        e.equals(9) && this.hide();
      }), this._register(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(43) && this._updateFont();
      })), this._editor.onDidLayoutChange(() => this.layout()), this.layout(), this._editor.addContentWidget(this), (this._showAtPosition = null), (this._showAtRange = null), (this._stoleFocus = !1), (this._messages = []), (this._lastAnchor = null), (this._computer = new Fe(this._editor, this._participants)), (this._highlightDecorations = []), (this._isChangingDecorations = !1), (this._shouldFocus = !1), (this._colorPicker = null), (this._preferAbove = this._editor.getOption(52).above), (this._hoverOperation = new K(this._computer, e => this._withResult(e, !0), null, e => this._withResult(e, !1), this._editor.getOption(52).delay)), this._register(d.mu(this.getDomNode(), d.tw.FOCUS, () => {
        this._colorPicker && this.getDomNode().classList.add("colorpicker-hover");
      })), this._register(d.mu(this.getDomNode(), d.tw.BLUR, () => {
        this.getDomNode().classList.remove("colorpicker-hover");
      })), this._register(e.onDidChangeConfiguration(() => {
        (this._hoverOperation.setHoverTime(this._editor.getOption(52).delay), (this._preferAbove = this._editor.getOption(52).above));
      })), this._register(b.RW.onDidChange(() => {
        this._isVisible && this._lastAnchor && this._messages.length > 0 && ((this._hover.contentsDomNode.textContent = ""), this._renderMessages(this._lastAnchor, this._messages));
      })));
    }
    dispose() {
      (this._hoverOperation.cancel(), this._editor.removeContentWidget(this), super.dispose());
    }
    getId() {
      return e.ID;
    }
    getDomNode() {
      return this._hover.containerDomNode;
    }
    _shouldShowAt(e) {
      const t = e.target.type;
      if (6 === t) return !0;
      if (7 === t) {
        const t = this._editor.getOption(43).typicalHalfwidthCharacterWidth / 2,
          i = e.target.detail;
        if (i && !i.isAfterLines && "number" == typeof i.horizontalDistanceToText && i.horizontalDistanceToText < t) return !0;
      }
      return !1;
    }
    maybeShowAt(e) {
      var t;
      const i = [];
      for (const t of this._participants) if ("function" == typeof t.suggestHoverAnchor) {
        const n = t.suggestHoverAnchor(e);
        n && i.push(n);
      }
      if (this._shouldShowAt(e) && e.target.range) {
        const n = [...((null === (t = e.target.element) || void 0 === t ? void 0 : t.classList.values()) || [])].find(e => e.startsWith("ced-colorBox")) && e.target.range.endColumn - e.target.range.startColumn == 1 ? new r.e(e.target.range.startLineNumber, e.target.range.startColumn + 1, e.target.range.endLineNumber, e.target.range.endColumn + 1) : e.target.range;
        i.push(new q(0, n));
      }
      return (0 !== i.length && (i.sort((e, t) => t.priority - e.priority), this._startShowingAt(i[0], 0, !1), !0));
    }
    _showAt(e, t, i) {
      ((this._showAtPosition = e), (this._showAtRange = t), this._hoverVisibleKey.set(!0), (this._isVisible = !0), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this._editor.layoutContentWidget(this), this._editor.render(), (this._stoleFocus = i), i && this._hover.containerDomNode.focus());
    }
    getPosition() {
      if (this._isVisible) {
        let e = this._preferAbove;
        return (!e && this._contextKeyService.getContextKeyValue(Te._y.Visible.key) && (e = !0), {
          position: this._showAtPosition,
          range: this._showAtRange,
          preference: e ? [1, 2] : [2, 1]
        });
      }
      return null;
    }
    _updateFont() {
      Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach(e => this._editor.applyFontInfo(e));
    }
    _updateContents(e) {
      ((this._hover.contentsDomNode.textContent = ""), this._hover.contentsDomNode.appendChild(e), this._updateFont(), this._editor.layoutContentWidget(this), this._hover.onContentsChanged());
    }
    layout() {
      const e = Math.max(this._editor.getLayoutInfo().height / 4, 250),
        {
          fontSize: t,
          lineHeight: i
        } = this._editor.getOption(43);
      ((this._hover.contentsDomNode.style.fontSize = `${t}px`), (this._hover.contentsDomNode.style.lineHeight = "" + i / t), (this._hover.contentsDomNode.style.maxHeight = `${e}px`), (this._hover.contentsDomNode.style.maxWidth = `${Math.max(0.66 * this._editor.getLayoutInfo().width, 500)}px`));
    }
    onModelDecorationsChanged() {
      this._isChangingDecorations || (this._isVisible && (this._hoverOperation.cancel(), this._computer.clearResult(), this._colorPicker || this._hoverOperation.start(0)));
    }
    startShowingAtRange(e, t, i) {
      this._startShowingAt(new q(0, e), t, i);
    }
    _startShowingAt(e, t, i) {
      if (!this._lastAnchor || !this._lastAnchor.equals(e)) {
        if ((this._hoverOperation.cancel(), this._isVisible)) if (this._showAtPosition && this._lastAnchor && e.canAdoptVisibleHover(this._lastAnchor, this._showAtPosition)) {
          const t = this._messages.filter(t => t.isValidForHoverAnchor(e));
          if (0 === t.length) this.hide();else {
            if (t.length === this._messages.length) return;
            this._renderMessages(e, t);
          }
        } else this.hide();
        ((this._lastAnchor = e), this._computer.setAnchor(e), (this._shouldFocus = i), this._hoverOperation.start(t));
      }
    }
    hide() {
      ((this._lastAnchor = null), this._hoverOperation.cancel(), this._isVisible && (setTimeout(() => {
        this._isVisible || this._hoverVisibleKey.set(!1);
      }, 0), (this._isVisible = !1), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), this._editor.layoutContentWidget(this), this._stoleFocus && this._editor.focus()), (this._isChangingDecorations = !0), (this._highlightDecorations = this._editor.deltaDecorations(this._highlightDecorations, [])), (this._isChangingDecorations = !1), this._renderDisposable && (this._renderDisposable.dispose(), (this._renderDisposable = null)), (this._colorPicker = null));
    }
    isColorPickerVisible() {
      return !!this._colorPicker;
    }
    setColorPicker(e) {
      this._colorPicker = e;
    }
    onContentsChanged() {
      this._hover.onContentsChanged();
    }
    _withResult(e, t) {
      ((this._messages = e), this._lastAnchor && this._messages.length > 0 ? this._renderMessages(this._lastAnchor, this._messages) : t && this.hide());
    }
    _renderMessages(t, i) {
      (this._renderDisposable && (this._renderDisposable.dispose(), (this._renderDisposable = null)), (this._colorPicker = null));
      let n = 1073741824,
        s = i[0].range,
        a = null,
        l = document.createDocumentFragment();
      const c = new o.SL(),
        d = new Map();
      for (const e of i) {
        ((n = Math.min(n, e.range.startColumn)), (s = r.e.plusRange(s, e.range)), e.forceShowAtRange && (a = e.range), d.has(e.owner) || d.set(e.owner, []));
        d.get(e.owner).push(e);
      }
      const h = c.add(new Re(this._keybindingService));
      for (const [e, t] of d) c.add(e.renderHoverParts(t, l, h));
      (h.hasContent && l.appendChild(h.hoverElement), (this._renderDisposable = c), l.hasChildNodes() && (a ? this._showAt(a.getStartPosition(), a, this._shouldFocus) : this._showAt(new v.L(t.range.startLineNumber, n), s, this._shouldFocus), this._updateContents(l)), this._colorPicker && this._colorPicker.layout(), (this._isChangingDecorations = !0), (this._highlightDecorations = this._editor.deltaDecorations(this._highlightDecorations, s ? [{
        range: s,
        options: e._DECORATION_OPTIONS
      }] : [])), (this._isChangingDecorations = !1));
    }
  };
  ((Be.ID = "editor.contrib.modesContentHoverWidget"), (Be._DECORATION_OPTIONS = _.qx.register({
    description: "content-hover-highlight",
    className: "hoverHighlight"
  })), (Be = Me([Ae(2, Ie.TG), Ae(3, Ee.d), Ae(4, Se.i6)], Be)));
  const Ve = d.$;
  class We {
    constructor(e) {
      ((this._editor = e), (this._lineNumber = -1), (this._result = []));
    }
    setLineNumber(e) {
      ((this._lineNumber = e), (this._result = []));
    }
    clearResult() {
      this._result = [];
    }
    computeSync() {
      const e = e => ({
          value: e
        }),
        t = this._editor.getLineDecorations(this._lineNumber),
        i = [];
      if (!t) return i;
      for (const n of t) {
        if (!n.options.glyphMarginClassName) continue;
        const t = n.options.glyphMarginHoverMessage;
        t && !(0, G.CP)(t) && i.push(...(0, m._2)(t).map(e));
      }
      return i;
    }
    onResult(e, t) {
      this._result = this._result.concat(e);
    }
    getResult() {
      return this._result;
    }
    getResultWithLoadingMessage() {
      return this.getResult();
    }
  }
  class He extends f.$ {
    constructor(e, t, i = J.SW) {
      (super(), (this._renderDisposeables = this._register(new o.SL())), (this._editor = e), (this._isVisible = !1), (this._messages = []), (this._lastLineNumber = -1), (this._hover = this._register(new g())), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible), (this._markdownRenderer = this._register(new Y.$({
        editor: this._editor
      }, t, i))), (this._computer = new We(this._editor)), (this._hoverOperation = new K(this._computer, e => this._withResult(e), void 0, e => this._withResult(e), 300)), this._register(this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(43) && this._updateFont();
      })), this._editor.addOverlayWidget(this));
    }
    dispose() {
      (this._hoverOperation.cancel(), this._editor.removeOverlayWidget(this), super.dispose());
    }
    getId() {
      return He.ID;
    }
    getDomNode() {
      return this._hover.containerDomNode;
    }
    getPosition() {
      return null;
    }
    _showAt(e) {
      this._isVisible || ((this._isVisible = !0), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible));
      const t = this._editor.getLayoutInfo(),
        i = this._editor.getTopForLineNumber(e),
        n = this._editor.getScrollTop(),
        o = this._editor.getOption(58),
        s = i - n - (this._hover.containerDomNode.clientHeight - o) / 2;
      ((this._hover.containerDomNode.style.left = `${t.glyphMarginLeft + t.glyphMarginWidth}px`), (this._hover.containerDomNode.style.top = `${Math.max(Math.round(s), 0)}px`));
    }
    _updateFont() {
      Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach(e => this._editor.applyFontInfo(e));
    }
    _updateContents(e) {
      ((this._hover.contentsDomNode.textContent = ""), this._hover.contentsDomNode.appendChild(e), this._updateFont());
    }
    onModelDecorationsChanged() {
      this._isVisible && (this._hoverOperation.cancel(), this._computer.clearResult(), this._hoverOperation.start(0));
    }
    startShowingAt(e) {
      this._lastLineNumber !== e && (this._hoverOperation.cancel(), this.hide(), (this._lastLineNumber = e), this._computer.setLineNumber(e), this._hoverOperation.start(0));
    }
    hide() {
      ((this._lastLineNumber = -1), this._hoverOperation.cancel(), this._isVisible && ((this._isVisible = !1), this._hover.containerDomNode.classList.toggle("hidden", !this._isVisible)));
    }
    _withResult(e) {
      ((this._messages = e), this._messages.length > 0 ? this._renderMessages(this._lastLineNumber, this._messages) : this.hide());
    }
    _renderMessages(e, t) {
      this._renderDisposeables.clear();
      const i = document.createDocumentFragment();
      for (const e of t) {
        const t = Ve("div.hover-row.markdown-hover"),
          n = d.R3(t, Ve("div.hover-contents")),
          o = this._renderDisposeables.add(this._markdownRenderer.render(e.value));
        (n.appendChild(o.element), i.appendChild(t));
      }
      (this._updateContents(i), this._showAt(e));
    }
  }
  He.ID = "editor.contrib.modesGlyphHoverWidget";
  var ze = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    je = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    };
  let Ue = class e {
    constructor(e, t, i, n, s) {
      ((this._editor = e), (this._instantiationService = t), (this._openerService = i), (this._modeService = n), (this._toUnhook = new o.SL()), (this._isMouseDown = !1), (this._hoverClicked = !1), (this._contentWidget = null), (this._glyphWidget = null), this._hookEvents(), (this._didChangeConfigurationHandler = this._editor.onDidChangeConfiguration(e => {
        e.hasChanged(52) && (this._unhookEvents(), this._hookEvents());
      })), (this._hoverVisibleKey = a.u.hoverVisible.bindTo(s)));
    }
    static get(t) {
      return t.getContribution(e.ID);
    }
    _hookEvents() {
      const e = () => this._hideWidgets(),
        t = this._editor.getOption(52);
      ((this._isHoverEnabled = t.enabled), (this._isHoverSticky = t.sticky), this._isHoverEnabled ? (this._toUnhook.add(this._editor.onMouseDown(e => this._onEditorMouseDown(e))), this._toUnhook.add(this._editor.onMouseUp(e => this._onEditorMouseUp(e))), this._toUnhook.add(this._editor.onMouseMove(e => this._onEditorMouseMove(e))), this._toUnhook.add(this._editor.onKeyDown(e => this._onKeyDown(e))), this._toUnhook.add(this._editor.onDidChangeModelDecorations(() => this._onModelDecorationsChanged()))) : (this._toUnhook.add(this._editor.onMouseMove(e => this._onEditorMouseMove(e))), this._toUnhook.add(this._editor.onKeyDown(e => this._onKeyDown(e)))), this._toUnhook.add(this._editor.onMouseLeave(e)), this._toUnhook.add(this._editor.onDidChangeModel(e)), this._toUnhook.add(this._editor.onDidScrollChange(e => this._onEditorScrollChanged(e))));
    }
    _unhookEvents() {
      this._toUnhook.clear();
    }
    _onModelDecorationsChanged() {
      var e, t;
      (null === (e = this._contentWidget) || void 0 === e || e.onModelDecorationsChanged(), null === (t = this._glyphWidget) || void 0 === t || t.onModelDecorationsChanged());
    }
    _onEditorScrollChanged(e) {
      (e.scrollTopChanged || e.scrollLeftChanged) && this._hideWidgets();
    }
    _onEditorMouseDown(e) {
      this._isMouseDown = !0;
      const t = e.target.type;
      9 !== t || e.target.detail !== Be.ID ? (12 === t && e.target.detail === He.ID) || (12 !== t && e.target.detail !== He.ID && (this._hoverClicked = !1), this._hideWidgets()) : (this._hoverClicked = !0);
    }
    _onEditorMouseUp(e) {
      this._isMouseDown = !1;
    }
    _onEditorMouseMove(e) {
      var t, i, n, o, s;
      let r = e.target.type;
      if (this._isMouseDown && this._hoverClicked) return;
      if (this._isHoverSticky && 9 === r && e.target.detail === Be.ID) return;
      if (this._isHoverSticky && !(null === (i = null === (t = e.event.browserEvent.view) || void 0 === t ? void 0 : t.getSelection()) || void 0 === i ? void 0 : i.isCollapsed)) return;
      if (!this._isHoverSticky && 9 === r && e.target.detail === Be.ID && (null === (n = this._contentWidget) || void 0 === n ? void 0 : n.isColorPickerVisible())) return;
      if (this._isHoverSticky && 12 === r && e.target.detail === He.ID) return;
      if (!this._isHoverEnabled) return void this._hideWidgets();
      if (!this._getOrCreateContentWidget().maybeShowAt(e)) return 2 === r && e.target.position ? (null === (s = this._contentWidget) || void 0 === s || s.hide(), this._glyphWidget || (this._glyphWidget = new He(this._editor, this._modeService, this._openerService)), void this._glyphWidget.startShowingAt(e.target.position.lineNumber)) : void this._hideWidgets();
      null === (o = this._glyphWidget) || void 0 === o || o.hide();
    }
    _onKeyDown(e) {
      5 !== e.keyCode && 6 !== e.keyCode && 57 !== e.keyCode && 4 !== e.keyCode && this._hideWidgets();
    }
    _hideWidgets() {
      var e, t, i;
      (this._isMouseDown && this._hoverClicked && (null === (e = this._contentWidget) || void 0 === e ? void 0 : e.isColorPickerVisible())) || ((this._hoverClicked = !1), null === (t = this._glyphWidget) || void 0 === t || t.hide(), null === (i = this._contentWidget) || void 0 === i || i.hide());
    }
    _getOrCreateContentWidget() {
      return (this._contentWidget || (this._contentWidget = this._instantiationService.createInstance(Be, this._editor, this._hoverVisibleKey)), this._contentWidget);
    }
    isColorPickerVisible() {
      var e;
      return ((null === (e = this._contentWidget) || void 0 === e ? void 0 : e.isColorPickerVisible()) || !1);
    }
    showContentHover(e, t, i) {
      this._getOrCreateContentWidget().startShowingAtRange(e, t, i);
    }
    dispose() {
      var e, t;
      (this._unhookEvents(), this._toUnhook.dispose(), this._didChangeConfigurationHandler.dispose(), null === (e = this._glyphWidget) || void 0 === e || e.dispose(), null === (t = this._contentWidget) || void 0 === t || t.dispose());
    }
  };
  ((Ue.ID = "editor.contrib.hover"), (Ue = ze([je(1, Ie.TG), je(2, J.v4), je(3, l.h), je(4, Se.i6)], Ue)));
  class $e extends s.R6 {
    constructor() {
      super({
        id: "editor.action.showHover",
        label: D.N({
          key: "showHover",
          comment: ["Label for action that will trigger the showing of a hover in the editor.", "This allows for users to show the hover without using the mouse."]
        }, "Show Hover"),
        alias: "Show Hover",
        precondition: void 0,
        kbOpts: {
          kbExpr: a.u.editorTextFocus,
          primary: (0, n.gx)(2089, 2087),
          weight: 100
        }
      });
    }
    run(e, t) {
      if (!t.hasModel()) return;
      let i = Ue.get(t);
      if (!i) return;
      const n = t.getPosition(),
        o = new r.e(n.lineNumber, n.column, n.lineNumber, n.column),
        s = 2 === t.getOption(2);
      i.showContentHover(o, 1, s);
    }
  }
  class Ke extends s.R6 {
    constructor() {
      super({
        id: "editor.action.showDefinitionPreviewHover",
        label: D.N({
          key: "showDefinitionPreviewHover",
          comment: ["Label for action that will trigger the showing of definition preview hover in the editor.", "This allows for users to show the definition preview hover without using the mouse."]
        }, "Show Definition Preview Hover"),
        alias: "Show Definition Preview Hover",
        precondition: void 0
      });
    }
    run(e, t) {
      let i = Ue.get(t);
      if (!i) return;
      const n = t.getPosition();
      if (!n) return;
      const o = new r.e(n.lineNumber, n.column, n.lineNumber, n.column);
      c.GotoDefinitionAtPositionEditorContribution.get(t).startFindDefinitionFromCursor(n).then(() => {
        i.showContentHover(o, 1, !0);
      });
    }
  }
  ((0, s._K)(Ue.ID, Ue), (0, s.Qr)($e), (0, s.Qr)(Ke), (0, E.Ic)((e, t) => {
    const i = e.getColor(I.pt);
    i && t.addRule(`.monaco-editor .hoverHighlight { background-color: ${i}; }`);
    const n = e.getColor(I.yJ);
    n && t.addRule(`.monaco-editor .monaco-hover { background-color: ${n}; }`);
    const o = e.getColor(I.CN);
    o && (t.addRule(`.monaco-editor .monaco-hover { border: 1px solid ${o}; }`), t.addRule(`.monaco-editor .monaco-hover .hover-row:not(:first-child):not(:empty) { border-top: 1px solid ${o.transparent(0.5)}; }`), t.addRule(`.monaco-editor .monaco-hover hr { border-top: 1px solid ${o.transparent(0.5)}; }`), t.addRule(`.monaco-editor .monaco-hover hr { border-bottom: 0px solid ${o.transparent(0.5)}; }`));
    const s = e.getColor(I.ur);
    s && t.addRule(`.monaco-editor .monaco-hover a { color: ${s}; }`);
    const r = e.getColor(I.sg);
    r && t.addRule(`.monaco-editor .monaco-hover a:hover { color: ${r}; }`);
    const a = e.getColor(I.Sb);
    a && t.addRule(`.monaco-editor .monaco-hover { color: ${a}; }`);
    const l = e.getColor(I.Lo);
    l && t.addRule(`.monaco-editor .monaco-hover .hover-row .actions { background-color: ${l}; }`);
    const c = e.getColor(I.Sw);
    c && t.addRule(`.monaco-editor .monaco-hover code { background-color: ${c}; }`);
  }));
};