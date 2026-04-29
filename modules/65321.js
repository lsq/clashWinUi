module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $: () => pe,
    $Z: () => fe,
    Ay: () => Z,
    Ce: () => ce,
    Cp: () => me,
    D6: () => M,
    DI: () => B,
    Dx: () => T,
    FK: () => W,
    Fx: () => U,
    Gw: () => b,
    H$: () => ve,
    If: () => H,
    Lo: () => w,
    OO: () => q,
    PO: () => g,
    R3: () => le,
    RE: () => x,
    Re: () => te,
    Ro: () => O,
    Uh: () => _e,
    Uw: () => p,
    V3: () => be,
    Y_: () => E,
    _0: () => se,
    _h: () => Ce,
    _q: () => xe,
    dS: () => Y,
    dp: () => R,
    fk: () => J,
    go: () => ae,
    i: () => F,
    jL: () => k,
    j_: () => C,
    jg: () => j,
    jt: () => we,
    lI: () => S,
    mc: () => de,
    mu: () => _,
    nm: () => m,
    qV: () => y,
    tw: () => ie,
    uB: () => Se,
    uN: () => ee,
    uU: () => $,
    vL: () => oe,
    vY: () => G,
    w: () => V,
    wY: () => ye,
    wn: () => z,
    xQ: () => P,
    zB: () => ne
  });
  var n = i(16268),
    o = i(10161),
    s = i(59069),
    r = i(23938),
    a = i(15393),
    l = i(17301),
    c = i(4669),
    d = i(5976),
    h = i(66663),
    u = i(1432);
  function g(e) {
    for (; e.firstChild;) e.firstChild.remove();
  }
  function p(e) {
    var t;
    return (null !== (t = null == e ? void 0 : e.isConnected) && void 0 !== t && t);
  }
  class f {
    constructor(e, t, i, n) {
      ((this._node = e), (this._type = t), (this._handler = i), (this._options = n || !1), this._node.addEventListener(this._type, this._handler, this._options));
    }
    dispose() {
      this._handler && (this._node.removeEventListener(this._type, this._handler, this._options), (this._node = null), (this._handler = null));
    }
  }
  function m(e, t, i, n) {
    return new f(e, t, i, n);
  }
  function v(e) {
    return function (t) {
      return e(new r.n(t));
    };
  }
  let _ = function (e, t, i, n) {
      let o = i;
      return ("click" === t || "mousedown" === t ? (o = v(i)) : ("keydown" !== t && "keypress" !== t && "keyup" !== t) || (o = (function (e) {
        return function (t) {
          return e(new s.y(t));
        };
      })(i)), m(e, t, o, n));
    },
    b = function (e, t, i) {
      return w(e, v(t), i);
    };
  function w(e, t, i) {
    return m(e, u.gn && o.D.pointerEvents ? ie.POINTER_DOWN : ie.MOUSE_DOWN, t, i);
  }
  function y(e, t, i) {
    return m(e, u.gn && o.D.pointerEvents ? ie.POINTER_UP : ie.MOUSE_UP, t, i);
  }
  function C(e, t) {
    return m(e, "mouseout", i => {
      let n = i.relatedTarget;
      for (; n && n !== e;) n = n.parentNode;
      n !== e && t(i);
    });
  }
  function x(e, t) {
    return m(e, "pointerout", i => {
      let n = i.relatedTarget;
      for (; n && n !== e;) n = n.parentNode;
      n !== e && t(i);
    });
  }
  let S,
    k,
    L = null;
  class N {
    constructor(e, t = 0) {
      ((this._runner = e), (this.priority = t), (this._canceled = !1));
    }
    dispose() {
      this._canceled = !0;
    }
    execute() {
      if (!this._canceled) try {
        this._runner();
      } catch (e) {
        (0, l.dL)(e);
      }
    }
    static sort(e, t) {
      return t.priority - e.priority;
    }
  }
  !(function () {
    let e = [],
      t = null,
      i = !1,
      n = !1,
      o = () => {
        for (i = !1, t = e, e = [], n = !0; t.length > 0;) {
          (t.sort(N.sort), t.shift().execute());
        }
        n = !1;
      };
    ((k = (t, n = 0) => {
      let s = new N(t, n);
      return (e.push(s), i || ((i = !0), (function (e) {
        if (!L) {
          const e = e => setTimeout(() => e(new Date().getTime()), 0);
          L = self.requestAnimationFrame || self.msRequestAnimationFrame || self.webkitRequestAnimationFrame || self.mozRequestAnimationFrame || self.oRequestAnimationFrame || e;
        }
        L.call(self, e);
      })(o)), s);
    }), (S = (e, i) => {
      if (n) {
        let n = new N(e, i);
        return (t.push(n), n);
      }
      return k(e, i);
    }));
  })();
  const D = function (e, t) {
    return t;
  };
  class I extends d.JT {
    constructor(e, t, i, n = D, o = 8) {
      super();
      let s = null,
        r = 0,
        l = this._register(new a._F()),
        c = () => {
          ((r = new Date().getTime()), i(s), (s = null));
        };
      this._register(m(e, t, e => {
        s = n(s, e);
        let t = new Date().getTime() - r;
        t >= o ? (l.cancel(), c()) : l.setIfNotSet(c, o - t);
      }));
    }
  }
  function E(e, t, i, n, o) {
    return new I(e, t, i, n, o);
  }
  function T(e) {
    return document.defaultView.getComputedStyle(e, null);
  }
  function M(e) {
    if (e !== document.body) return new O(e.clientWidth, e.clientHeight);
    if (u.gn && window.visualViewport) return new O(window.visualViewport.width, window.visualViewport.height);
    if (window.innerWidth && window.innerHeight) return new O(window.innerWidth, window.innerHeight);
    if (document.body && document.body.clientWidth && document.body.clientHeight) return new O(document.body.clientWidth, document.body.clientHeight);
    if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) return new O(document.documentElement.clientWidth, document.documentElement.clientHeight);
    throw new Error("Unable to figure out browser width and height");
  }
  class A {
    static convertToPixels(e, t) {
      return parseFloat(t) || 0;
    }
    static getDimension(e, t, i) {
      let n = T(e),
        o = "0";
      return (n && (o = n.getPropertyValue ? n.getPropertyValue(t) : n.getAttribute(i)), A.convertToPixels(e, o));
    }
    static getBorderLeftWidth(e) {
      return A.getDimension(e, "border-left-width", "borderLeftWidth");
    }
    static getBorderRightWidth(e) {
      return A.getDimension(e, "border-right-width", "borderRightWidth");
    }
    static getBorderTopWidth(e) {
      return A.getDimension(e, "border-top-width", "borderTopWidth");
    }
    static getBorderBottomWidth(e) {
      return A.getDimension(e, "border-bottom-width", "borderBottomWidth");
    }
    static getPaddingLeft(e) {
      return A.getDimension(e, "padding-left", "paddingLeft");
    }
    static getPaddingRight(e) {
      return A.getDimension(e, "padding-right", "paddingRight");
    }
    static getPaddingTop(e) {
      return A.getDimension(e, "padding-top", "paddingTop");
    }
    static getPaddingBottom(e) {
      return A.getDimension(e, "padding-bottom", "paddingBottom");
    }
    static getMarginLeft(e) {
      return A.getDimension(e, "margin-left", "marginLeft");
    }
    static getMarginTop(e) {
      return A.getDimension(e, "margin-top", "marginTop");
    }
    static getMarginRight(e) {
      return A.getDimension(e, "margin-right", "marginRight");
    }
    static getMarginBottom(e) {
      return A.getDimension(e, "margin-bottom", "marginBottom");
    }
  }
  class O {
    constructor(e, t) {
      ((this.width = e), (this.height = t));
    }
    with(e = this.width, t = this.height) {
      return e !== this.width || t !== this.height ? new O(e, t) : this;
    }
    static is(e) {
      return ("object" == typeof e && "number" == typeof e.height && "number" == typeof e.width);
    }
    static lift(e) {
      return e instanceof O ? e : new O(e.width, e.height);
    }
    static equals(e, t) {
      return (e === t || (!(!e || !t) && e.width === t.width && e.height === t.height));
    }
  }
  function P(e) {
    let t = e.offsetParent,
      i = e.offsetTop,
      n = e.offsetLeft;
    for (; null !== (e = e.parentNode) && e !== document.body && e !== document.documentElement;) {
      i -= e.scrollTop;
      const o = K(e) ? null : T(e);
      (o && (n -= "rtl" !== o.direction ? e.scrollLeft : -e.scrollLeft), e === t && ((n += A.getBorderLeftWidth(e)), (i += A.getBorderTopWidth(e)), (i += e.offsetTop), (n += e.offsetLeft), (t = e.offsetParent)));
    }
    return {
      left: n,
      top: i
    };
  }
  function R(e, t, i) {
    ("number" == typeof t && (e.style.width = `${t}px`), "number" == typeof i && (e.style.height = `${i}px`));
  }
  function F(e) {
    let t = e.getBoundingClientRect();
    return {
      left: t.left + B.scrollX,
      top: t.top + B.scrollY,
      width: t.width,
      height: t.height
    };
  }
  const B = new (class {
    get scrollX() {
      return "number" == typeof window.scrollX ? window.scrollX : document.body.scrollLeft + document.documentElement.scrollLeft;
    }
    get scrollY() {
      return "number" == typeof window.scrollY ? window.scrollY : document.body.scrollTop + document.documentElement.scrollTop;
    }
  })();
  function V(e) {
    let t = A.getMarginLeft(e) + A.getMarginRight(e);
    return e.offsetWidth + t;
  }
  function W(e) {
    let t = A.getBorderLeftWidth(e) + A.getBorderRightWidth(e),
      i = A.getPaddingLeft(e) + A.getPaddingRight(e);
    return e.offsetWidth - t - i;
  }
  function H(e) {
    let t = A.getBorderTopWidth(e) + A.getBorderBottomWidth(e),
      i = A.getPaddingTop(e) + A.getPaddingBottom(e);
    return e.offsetHeight - t - i;
  }
  function z(e) {
    let t = A.getMarginTop(e) + A.getMarginBottom(e);
    return e.offsetHeight + t;
  }
  function j(e, t) {
    for (; e;) {
      if (e === t) return !0;
      e = e.parentNode;
    }
    return !1;
  }
  function U(e, t, i) {
    for (; e && e.nodeType === e.ELEMENT_NODE;) {
      if (e.classList.contains(t)) return e;
      if (i) if ("string" == typeof i) {
        if (e.classList.contains(i)) return null;
      } else if (e === i) return null;
      e = e.parentNode;
    }
    return null;
  }
  function $(e, t, i) {
    return !!U(e, t, i);
  }
  function K(e) {
    return e && !!e.host && !!e.mode;
  }
  function q(e) {
    return !!Z(e);
  }
  function Z(e) {
    for (; e.parentNode;) {
      if (e === document.body) return null;
      e = e.parentNode;
    }
    return K(e) ? e : null;
  }
  function G() {
    let e = document.activeElement;
    for (; null == e ? void 0 : e.shadowRoot;) e = e.shadowRoot.activeElement;
    return e;
  }
  function Y(e = document.getElementsByTagName("head")[0]) {
    let t = document.createElement("style");
    return ((t.type = "text/css"), (t.media = "screen"), e.appendChild(t), t);
  }
  let Q = null;
  function X() {
    return (Q || (Q = Y()), Q);
  }
  function J(e, t, i = X()) {
    i && t && i.sheet.insertRule(e + "{" + t + "}", 0);
  }
  function ee(e, t = X()) {
    if (!t) return;
    let i = (function (e) {
        var t, i;
        return (null === (t = null == e ? void 0 : e.sheet) || void 0 === t ? void 0 : t.rules) ? e.sheet.rules : (null === (i = null == e ? void 0 : e.sheet) || void 0 === i ? void 0 : i.cssRules) ? e.sheet.cssRules : [];
      })(t),
      n = [];
    for (let t = 0; t < i.length; t++) {
      -1 !== i[t].selectorText.indexOf(e) && n.push(t);
    }
    for (let e = n.length - 1; e >= 0; e--) t.sheet.deleteRule(n[e]);
  }
  function te(e) {
    return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName;
  }
  const ie = {
      CLICK: "click",
      AUXCLICK: "auxclick",
      DBLCLICK: "dblclick",
      MOUSE_UP: "mouseup",
      MOUSE_DOWN: "mousedown",
      MOUSE_OVER: "mouseover",
      MOUSE_MOVE: "mousemove",
      MOUSE_OUT: "mouseout",
      MOUSE_ENTER: "mouseenter",
      MOUSE_LEAVE: "mouseleave",
      MOUSE_WHEEL: "wheel",
      POINTER_UP: "pointerup",
      POINTER_DOWN: "pointerdown",
      POINTER_MOVE: "pointermove",
      CONTEXT_MENU: "contextmenu",
      WHEEL: "wheel",
      KEY_DOWN: "keydown",
      KEY_PRESS: "keypress",
      KEY_UP: "keyup",
      LOAD: "load",
      BEFORE_UNLOAD: "beforeunload",
      UNLOAD: "unload",
      ABORT: "abort",
      ERROR: "error",
      RESIZE: "resize",
      SCROLL: "scroll",
      FULLSCREEN_CHANGE: "fullscreenchange",
      WK_FULLSCREEN_CHANGE: "webkitfullscreenchange",
      SELECT: "select",
      CHANGE: "change",
      SUBMIT: "submit",
      RESET: "reset",
      FOCUS: "focus",
      FOCUS_IN: "focusin",
      FOCUS_OUT: "focusout",
      BLUR: "blur",
      INPUT: "input",
      STORAGE: "storage",
      DRAG_START: "dragstart",
      DRAG: "drag",
      DRAG_ENTER: "dragenter",
      DRAG_LEAVE: "dragleave",
      DRAG_OVER: "dragover",
      DROP: "drop",
      DRAG_END: "dragend",
      ANIMATION_START: n.Pf ? "webkitAnimationStart" : "animationstart",
      ANIMATION_END: n.Pf ? "webkitAnimationEnd" : "animationend",
      ANIMATION_ITERATION: n.Pf ? "webkitAnimationIteration" : "animationiteration"
    },
    ne = {
      stop: function (e, t) {
        (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t && (e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0)));
      }
    };
  function oe(e) {
    let t = [];
    for (let i = 0; e && e.nodeType === e.ELEMENT_NODE; i++) ((t[i] = e.scrollTop), (e = e.parentNode));
    return t;
  }
  function se(e, t) {
    for (let i = 0; e && e.nodeType === e.ELEMENT_NODE; i++) (e.scrollTop !== t[i] && (e.scrollTop = t[i]), (e = e.parentNode));
  }
  class re extends d.JT {
    constructor(e) {
      (super(), (this._onDidFocus = this._register(new c.Q5())), (this.onDidFocus = this._onDidFocus.event), (this._onDidBlur = this._register(new c.Q5())), (this.onDidBlur = this._onDidBlur.event));
      let t = j(document.activeElement, e),
        i = !1;
      const n = () => {
          ((i = !1), t || ((t = !0), this._onDidFocus.fire()));
        },
        o = () => {
          t && ((i = !0), window.setTimeout(() => {
            i && ((i = !1), (t = !1), this._onDidBlur.fire());
          }, 0));
        };
      ((this._refreshStateHandler = () => {
        j(document.activeElement, e) !== t && (t ? o() : n());
      }), this._register(m(e, ie.FOCUS, n, !0)), this._register(m(e, ie.BLUR, o, !0)));
    }
  }
  function ae(e) {
    return new re(e);
  }
  function le(e, ...t) {
    if ((e.append(...t), 1 === t.length && "string" != typeof t[0])) return t[0];
  }
  function ce(e, t) {
    return (e.insertBefore(t, e.firstChild), t);
  }
  function de(e, ...t) {
    ((e.innerText = ""), le(e, ...t));
  }
  const he = /([\w\-]+)?(#([\w\-]+))?((\.([\w\-]+))*)/;
  var ue;
  function ge(e, t, i, ...n) {
    let o = he.exec(t);
    if (!o) throw new Error("Bad use of emmet");
    i = Object.assign({}, i || {});
    let s,
      r = o[1] || "div";
    return ((s = e !== ue.HTML ? document.createElementNS(e, r) : document.createElement(r)), o[3] && (s.id = o[3]), o[4] && (s.className = o[4].replace(/\./g, " ").trim()), Object.keys(i).forEach(e => {
      const t = i[e];
      void 0 !== t && (/^on\w+$/.test(e) ? (s[e] = t) : "selected" === e ? t && s.setAttribute(e, "true") : s.setAttribute(e, t));
    }), s.append(...n), s);
  }
  function pe(e, t, ...i) {
    return ge(ue.HTML, e, t, ...i);
  }
  function fe(...e) {
    for (let t of e) ((t.style.display = ""), t.removeAttribute("aria-hidden"));
  }
  function me(...e) {
    for (let t of e) ((t.style.display = "none"), t.setAttribute("aria-hidden", "true"));
  }
  function ve(e) {
    return Array.prototype.slice.call(document.getElementsByTagName(e), 0);
  }
  function _e(e) {
    const t = window.devicePixelRatio * e;
    return Math.max(1, Math.floor(t)) / window.devicePixelRatio;
  }
  function be(e) {
    window.open(e, "_blank", "noopener");
  }
  function we(e) {
    const t = () => {
      (e(), (i = k(t)));
    };
    let i = k(t);
    return (0, d.OF)(() => i.dispose());
  }
  function ye(e) {
    return e ? `url('${h.Gi.asBrowserUri(e).toString(!0).replace(/'/g, "%27")}')` : "url('')";
  }
  function Ce(e) {
    return `'${e.replace(/'/g, "%27")}'`;
  }
  (!(function (e) {
    ((e.HTML = "https://www.w3.org/1999/xhtml"), (e.SVG = "https://www.w3.org/2000/svg"));
  })(ue || (ue = {})), (pe.SVG = function (e, t, ...i) {
    return ge(ue.SVG, e, t, ...i);
  }), h.WX.setPreferredWebSchema(/^https:/.test(window.location.href) ? "https" : "http"));
  class xe extends c.Q5 {
    constructor() {
      (super(), (this._subscriptions = new d.SL()), (this._keyStatus = {
        altKey: !1,
        shiftKey: !1,
        ctrlKey: !1,
        metaKey: !1
      }), this._subscriptions.add(m(window, "keydown", e => {
        if (e.defaultPrevented) return;
        const t = new s.y(e);
        if (6 !== t.keyCode || !e.repeat) {
          if (e.altKey && !this._keyStatus.altKey) this._keyStatus.lastKeyPressed = "alt";else if (e.ctrlKey && !this._keyStatus.ctrlKey) this._keyStatus.lastKeyPressed = "ctrl";else if (e.metaKey && !this._keyStatus.metaKey) this._keyStatus.lastKeyPressed = "meta";else if (e.shiftKey && !this._keyStatus.shiftKey) this._keyStatus.lastKeyPressed = "shift";else {
            if (6 === t.keyCode) return;
            this._keyStatus.lastKeyPressed = void 0;
          }
          ((this._keyStatus.altKey = e.altKey), (this._keyStatus.ctrlKey = e.ctrlKey), (this._keyStatus.metaKey = e.metaKey), (this._keyStatus.shiftKey = e.shiftKey), this._keyStatus.lastKeyPressed && ((this._keyStatus.event = e), this.fire(this._keyStatus)));
        }
      }, !0)), this._subscriptions.add(m(window, "keyup", e => {
        e.defaultPrevented || (!e.altKey && this._keyStatus.altKey ? (this._keyStatus.lastKeyReleased = "alt") : !e.ctrlKey && this._keyStatus.ctrlKey ? (this._keyStatus.lastKeyReleased = "ctrl") : !e.metaKey && this._keyStatus.metaKey ? (this._keyStatus.lastKeyReleased = "meta") : !e.shiftKey && this._keyStatus.shiftKey ? (this._keyStatus.lastKeyReleased = "shift") : (this._keyStatus.lastKeyReleased = void 0), this._keyStatus.lastKeyPressed !== this._keyStatus.lastKeyReleased && (this._keyStatus.lastKeyPressed = void 0), (this._keyStatus.altKey = e.altKey), (this._keyStatus.ctrlKey = e.ctrlKey), (this._keyStatus.metaKey = e.metaKey), (this._keyStatus.shiftKey = e.shiftKey), this._keyStatus.lastKeyReleased && ((this._keyStatus.event = e), this.fire(this._keyStatus)));
      }, !0)), this._subscriptions.add(m(document.body, "mousedown", () => {
        this._keyStatus.lastKeyPressed = void 0;
      }, !0)), this._subscriptions.add(m(document.body, "mouseup", () => {
        this._keyStatus.lastKeyPressed = void 0;
      }, !0)), this._subscriptions.add(m(document.body, "mousemove", e => {
        e.buttons && (this._keyStatus.lastKeyPressed = void 0);
      }, !0)), this._subscriptions.add(m(window, "blur", () => {
        this.resetKeyStatus();
      })));
    }
    get keyStatus() {
      return this._keyStatus;
    }
    resetKeyStatus() {
      (this.doResetKeyStatus(), this.fire(this._keyStatus));
    }
    doResetKeyStatus() {
      this._keyStatus = {
        altKey: !1,
        shiftKey: !1,
        ctrlKey: !1,
        metaKey: !1
      };
    }
    static getInstance() {
      return (xe.instance || (xe.instance = new xe()), xe.instance);
    }
    dispose() {
      (super.dispose(), this._subscriptions.dispose());
    }
  }
  function Se(e, t) {
    const i = window.matchMedia(e);
    "function" == typeof i.addEventListener ? i.addEventListener("change", t) : i.addListener(t);
  }
};