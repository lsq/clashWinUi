module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    g: () => m
  });
  var n = i(65321),
    o = i(34650),
    s = i(15393),
    r = i(71050),
    a = i(59365),
    l = i(5976),
    c = i(98401),
    d = i(63580),
    h = function (e, t, i, n) {
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
  class u {
    constructor(e, t, i) {
      ((this.hoverDelegate = e), (this.target = t), (this.fadeInAnimation = i));
    }
    update(e, t) {
      var i;
      return h(this, void 0, void 0, function* () {
        if ((this._cancellationTokenSource && (this._cancellationTokenSource.dispose(!0), (this._cancellationTokenSource = void 0)), this.isDisposed)) return;
        let n;
        if (void 0 === e || (0, c.HD)(e) || e instanceof HTMLElement) n = e;else if ((0, c.mf)(e.markdown)) {
          (this._hoverWidget || this.show((0, d.N)("iconLabel.loading", "正在加载..."), t), (this._cancellationTokenSource = new r.A()));
          const i = this._cancellationTokenSource.token;
          if (((n = yield e.markdown(i)), this.isDisposed || i.isCancellationRequested)) return;
        } else n = null !== (i = e.markdown) && void 0 !== i ? i : e.markdownNotSupportedFallback;
        this.show(n, t);
      });
    }
    show(e, t) {
      const i = this._hoverWidget;
      if (this.hasContent(e)) {
        const n = {
          content: e,
          target: this.target,
          showPointer: "element" === this.hoverDelegate.placement,
          hoverPosition: 2,
          skipFadeInAnimation: !this.fadeInAnimation || !!i
        };
        this._hoverWidget = this.hoverDelegate.showHover(n, t);
      }
      null == i || i.dispose();
    }
    hasContent(e) {
      return !!e && (!(0, a.Fr)(e) || !!e.value);
    }
    get isDisposed() {
      var e;
      return null === (e = this._hoverWidget) || void 0 === e ? void 0 : e.isDisposed;
    }
    dispose() {
      var e, t;
      (null === (e = this._hoverWidget) || void 0 === e || e.dispose(), null === (t = this._cancellationTokenSource) || void 0 === t || t.dispose(!0), (this._cancellationTokenSource = void 0));
    }
  }
  var g = i(36248),
    p = i(61134);
  i(24997);
  class f {
    constructor(e) {
      this._element = e;
    }
    get element() {
      return this._element;
    }
    set textContent(e) {
      this.disposed || e === this._textContent || ((this._textContent = e), (this._element.textContent = e));
    }
    set className(e) {
      this.disposed || e === this._className || ((this._className = e), (this._element.className = e));
    }
    set empty(e) {
      this.disposed || e === this._empty || ((this._empty = e), (this._element.style.marginLeft = e ? "0" : ""));
    }
    dispose() {
      this.disposed = !0;
    }
  }
  class m extends l.JT {
    constructor(e, t) {
      (super(), (this.customHovers = new Map()), (this.domNode = this._register(new f(n.R3(e, n.$(".monaco-icon-label"))))), (this.labelContainer = n.R3(this.domNode.element, n.$(".monaco-icon-label-container"))));
      const i = n.R3(this.labelContainer, n.$("span.monaco-icon-name-container"));
      ((this.descriptionContainer = this._register(new f(n.R3(this.labelContainer, n.$("span.monaco-icon-description-container"))))), (null == t ? void 0 : t.supportHighlights) || (null == t ? void 0 : t.supportIcons) ? (this.nameNode = new _(i, !!t.supportIcons)) : (this.nameNode = new v(i)), (null == t ? void 0 : t.supportDescriptionHighlights) ? (this.descriptionNodeFactory = () => new o.q(n.R3(this.descriptionContainer.element, n.$("span.label-description")), !!t.supportIcons)) : (this.descriptionNodeFactory = () => this._register(new f(n.R3(this.descriptionContainer.element, n.$("span.label-description"))))), (this.hoverDelegate = null == t ? void 0 : t.hoverDelegate));
    }
    get element() {
      return this.domNode.element;
    }
    setLabel(e, t, i) {
      const n = ["monaco-icon-label"];
      (i && (i.extraClasses && n.push(...i.extraClasses), i.italic && n.push("italic"), i.strikethrough && n.push("strikethrough")), (this.domNode.className = n.join(" ")), this.setupHover((null == i ? void 0 : i.descriptionTitle) ? this.labelContainer : this.element, null == i ? void 0 : i.title), this.nameNode.setLabel(e, i), (t || this.descriptionNode) && (this.descriptionNode || (this.descriptionNode = this.descriptionNodeFactory()), this.descriptionNode instanceof o.q ? (this.descriptionNode.set(t || "", i ? i.descriptionMatches : void 0), this.setupHover(this.descriptionNode.element, null == i ? void 0 : i.descriptionTitle)) : ((this.descriptionNode.textContent = t || ""), this.setupHover(this.descriptionNode.element, (null == i ? void 0 : i.descriptionTitle) || ""), (this.descriptionNode.empty = !t))));
    }
    setupHover(e, t) {
      const i = this.customHovers.get(e);
      if ((i && (i.dispose(), this.customHovers.delete(e)), t)) {
        if (this.hoverDelegate) {
          const i = (function (e, t, i) {
            let o, r;
            const a = (t, i) => {
                var n;
                (t && (null == r || r.dispose(), (r = void 0)), i && (null == o || o.dispose(), (o = void 0)), null === (n = e.onDidHideHover) || void 0 === n || n.call(e));
              },
              c = (n, o, a) => new s._F(() => h(this, void 0, void 0, function* () {
                (r && !r.isDisposed) || ((r = new u(e, a || t, n > 0)), yield r.update(i, o));
              }), n),
              d = n.nm(t, n.tw.MOUSE_OVER, () => {
                if (o) return;
                const i = new l.SL();
                (i.add(n.nm(t, n.tw.MOUSE_LEAVE, e => a(!1, e.fromElement === t), !0)), i.add(n.nm(t, n.tw.MOUSE_DOWN, () => a(!0, !0), !0)));
                const s = {
                  targetElements: [t],
                  dispose: () => {}
                };
                if (void 0 === e.placement || "mouse" === e.placement) {
                  const e = e => (s.x = e.x + 10);
                  i.add(n.nm(t, n.tw.MOUSE_MOVE, e, !0));
                }
                (i.add(c(e.delay, !1, s)), (o = i));
              }, !0);
            return {
              show: e => {
                (a(!1, !0), c(0, e));
              },
              hide: () => {
                a(!0, !0);
              },
              update: e => h(this, void 0, void 0, function* () {
                ((i = e), yield null == r ? void 0 : r.update(i));
              }),
              dispose: () => {
                (d.dispose(), a(!0, !0));
              }
            };
          })(this.hoverDelegate, e, t);
          i && this.customHovers.set(e, i);
        } else !(function (e, t) {
          (0, c.HD)(t) ? (e.title = t) : (null == t ? void 0 : t.markdownNotSupportedFallback) ? (e.title = t.markdownNotSupportedFallback) : e.removeAttribute("title");
        })(e, t);
      } else e.removeAttribute("title");
    }
    dispose() {
      super.dispose();
      for (const e of this.customHovers.values()) e.dispose();
      this.customHovers.clear();
    }
  }
  class v {
    constructor(e) {
      ((this.container = e), (this.label = void 0), (this.singleLabel = void 0));
    }
    setLabel(e, t) {
      if (this.label !== e || !(0, g.fS)(this.options, t)) if (((this.label = e), (this.options = t), "string" == typeof e)) (this.singleLabel || ((this.container.innerText = ""), this.container.classList.remove("multiple"), (this.singleLabel = n.R3(this.container, n.$("a.label-name", {
        id: null == t ? void 0 : t.domId
      })))), (this.singleLabel.textContent = e));else {
        ((this.container.innerText = ""), this.container.classList.add("multiple"), (this.singleLabel = void 0));
        for (let i = 0; i < e.length; i++) {
          const o = e[i],
            s = (null == t ? void 0 : t.domId) && `${null == t ? void 0 : t.domId}_${i}`;
          (n.R3(this.container, n.$("a.label-name", {
            id: s,
            "data-icon-label-count": e.length,
            "data-icon-label-index": i,
            role: "treeitem"
          }, o)), i < e.length - 1 && n.R3(this.container, n.$("span.label-separator", void 0, (null == t ? void 0 : t.separator) || "/")));
        }
      }
    }
  }
  class _ {
    constructor(e, t) {
      ((this.container = e), (this.supportIcons = t), (this.label = void 0), (this.singleLabel = void 0));
    }
    setLabel(e, t) {
      if (this.label !== e || !(0, g.fS)(this.options, t)) if (((this.label = e), (this.options = t), "string" == typeof e)) (this.singleLabel || ((this.container.innerText = ""), this.container.classList.remove("multiple"), (this.singleLabel = new o.q(n.R3(this.container, n.$("a.label-name", {
        id: null == t ? void 0 : t.domId
      })), this.supportIcons))), this.singleLabel.set(e, null == t ? void 0 : t.matches, void 0, null == t ? void 0 : t.labelEscapeNewLines));else {
        ((this.container.innerText = ""), this.container.classList.add("multiple"), (this.singleLabel = void 0));
        const i = (null == t ? void 0 : t.separator) || "/",
          s = (function (e, t, i) {
            if (!i) return;
            let n = 0;
            return e.map(e => {
              const o = {
                  start: n,
                  end: n + e.length
                },
                s = i.map(e => p.e.intersect(o, e)).filter(e => !p.e.isEmpty(e)).map(({
                  start: e,
                  end: t
                }) => ({
                  start: e - n,
                  end: t - n
                }));
              return ((n = o.end + t.length), s);
            });
          })(e, i, null == t ? void 0 : t.matches);
        for (let r = 0; r < e.length; r++) {
          const a = e[r],
            l = s ? s[r] : void 0,
            c = (null == t ? void 0 : t.domId) && `${null == t ? void 0 : t.domId}_${r}`,
            d = n.$("a.label-name", {
              id: c,
              "data-icon-label-count": e.length,
              "data-icon-label-index": r,
              role: "treeitem"
            });
          (new o.q(n.R3(this.container, d), this.supportIcons).set(a, l, void 0, null == t ? void 0 : t.labelEscapeNewLines), r < e.length - 1 && n.R3(d, n.$("span.label-separator", void 0, i)));
        }
      }
    }
  }
};