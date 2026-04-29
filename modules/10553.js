module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    o: () => c,
    t: () => n
  });
  var n,
    o = i(65321),
    s = i(9488),
    r = i(49898),
    a = i(5976),
    l = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    };
  !(function (e) {
    ((e.Tap = "-monaco-gesturetap"), (e.Change = "-monaco-gesturechange"), (e.Start = "-monaco-gesturestart"), (e.End = "-monaco-gesturesend"), (e.Contextmenu = "-monaco-gesturecontextmenu"));
  })(n || (n = {}));
  class c extends a.JT {
    constructor() {
      (super(), (this.dispatched = !1), (this.activeTouches = {}), (this.handle = null), (this.targets = []), (this.ignoreTargets = []), (this._lastSetTapCountTime = 0), this._register(o.nm(document, "touchstart", e => this.onTouchStart(e), {
        passive: !1
      })), this._register(o.nm(document, "touchend", e => this.onTouchEnd(e))), this._register(o.nm(document, "touchmove", e => this.onTouchMove(e), {
        passive: !1
      })));
    }
    static addTarget(e) {
      return c.isTouchDevice() ? (c.INSTANCE || (c.INSTANCE = new c()), c.INSTANCE.targets.push(e), {
        dispose: () => {
          c.INSTANCE.targets = c.INSTANCE.targets.filter(t => t !== e);
        }
      }) : a.JT.None;
    }
    static ignoreTarget(e) {
      return c.isTouchDevice() ? (c.INSTANCE || (c.INSTANCE = new c()), c.INSTANCE.ignoreTargets.push(e), {
        dispose: () => {
          c.INSTANCE.ignoreTargets = c.INSTANCE.ignoreTargets.filter(t => t !== e);
        }
      }) : a.JT.None;
    }
    static isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    dispose() {
      (this.handle && (this.handle.dispose(), (this.handle = null)), super.dispose());
    }
    onTouchStart(e) {
      let t = Date.now();
      this.handle && (this.handle.dispose(), (this.handle = null));
      for (let i = 0, o = e.targetTouches.length; i < o; i++) {
        let o = e.targetTouches.item(i);
        this.activeTouches[o.identifier] = {
          id: o.identifier,
          initialTarget: o.target,
          initialTimeStamp: t,
          initialPageX: o.pageX,
          initialPageY: o.pageY,
          rollingTimestamps: [t],
          rollingPageX: [o.pageX],
          rollingPageY: [o.pageY]
        };
        let s = this.newGestureEvent(n.Start, o.target);
        ((s.pageX = o.pageX), (s.pageY = o.pageY), this.dispatchEvent(s));
      }
      this.dispatched && (e.preventDefault(), e.stopPropagation(), (this.dispatched = !1));
    }
    onTouchEnd(e) {
      let t = Date.now(),
        i = Object.keys(this.activeTouches).length;
      for (let o = 0, r = e.changedTouches.length; o < r; o++) {
        let r = e.changedTouches.item(o);
        if (!this.activeTouches.hasOwnProperty(String(r.identifier))) {
          console.warn("move of an UNKNOWN touch", r);
          continue;
        }
        let a = this.activeTouches[r.identifier],
          l = Date.now() - a.initialTimeStamp;
        if (l < c.HOLD_DELAY && Math.abs(a.initialPageX - s.Gb(a.rollingPageX)) < 30 && Math.abs(a.initialPageY - s.Gb(a.rollingPageY)) < 30) {
          let e = this.newGestureEvent(n.Tap, a.initialTarget);
          ((e.pageX = s.Gb(a.rollingPageX)), (e.pageY = s.Gb(a.rollingPageY)), this.dispatchEvent(e));
        } else if (l >= c.HOLD_DELAY && Math.abs(a.initialPageX - s.Gb(a.rollingPageX)) < 30 && Math.abs(a.initialPageY - s.Gb(a.rollingPageY)) < 30) {
          let e = this.newGestureEvent(n.Contextmenu, a.initialTarget);
          ((e.pageX = s.Gb(a.rollingPageX)), (e.pageY = s.Gb(a.rollingPageY)), this.dispatchEvent(e));
        } else if (1 === i) {
          let e = s.Gb(a.rollingPageX),
            i = s.Gb(a.rollingPageY),
            n = s.Gb(a.rollingTimestamps) - a.rollingTimestamps[0],
            o = e - a.rollingPageX[0],
            r = i - a.rollingPageY[0];
          const l = this.targets.filter(e => a.initialTarget instanceof Node && e.contains(a.initialTarget));
          this.inertia(l, t, Math.abs(o) / n, o > 0 ? 1 : -1, e, Math.abs(r) / n, r > 0 ? 1 : -1, i);
        }
        (this.dispatchEvent(this.newGestureEvent(n.End, a.initialTarget)), delete this.activeTouches[r.identifier]);
      }
      this.dispatched && (e.preventDefault(), e.stopPropagation(), (this.dispatched = !1));
    }
    newGestureEvent(e, t) {
      let i = document.createEvent("CustomEvent");
      return (i.initEvent(e, !1, !0), (i.initialTarget = t), (i.tapCount = 0), i);
    }
    dispatchEvent(e) {
      if (e.type === n.Tap) {
        const t = new Date().getTime();
        let i = 0;
        ((i = t - this._lastSetTapCountTime > c.CLEAR_TAP_COUNT_TIME ? 1 : 2), (this._lastSetTapCountTime = t), (e.tapCount = i));
      } else (e.type !== n.Change && e.type !== n.Contextmenu) || (this._lastSetTapCountTime = 0);
      for (let t = 0; t < this.ignoreTargets.length; t++) if (e.initialTarget instanceof Node && this.ignoreTargets[t].contains(e.initialTarget)) return;
      this.targets.forEach(t => {
        e.initialTarget instanceof Node && t.contains(e.initialTarget) && (t.dispatchEvent(e), (this.dispatched = !0));
      });
    }
    inertia(e, t, i, s, r, a, l, d) {
      this.handle = o.jL(() => {
        let o = Date.now(),
          h = o - t,
          u = 0,
          g = 0,
          p = !0;
        ((i += c.SCROLL_FRICTION * h), (a += c.SCROLL_FRICTION * h), i > 0 && ((p = !1), (u = s * i * h)), a > 0 && ((p = !1), (g = l * a * h)));
        let f = this.newGestureEvent(n.Change);
        ((f.translationX = u), (f.translationY = g), e.forEach(e => e.dispatchEvent(f)), p || this.inertia(e, o, i, s, r + u, a, l, d + g));
      });
    }
    onTouchMove(e) {
      let t = Date.now();
      for (let i = 0, o = e.changedTouches.length; i < o; i++) {
        let o = e.changedTouches.item(i);
        if (!this.activeTouches.hasOwnProperty(String(o.identifier))) {
          console.warn("end of an UNKNOWN touch", o);
          continue;
        }
        let r = this.activeTouches[o.identifier],
          a = this.newGestureEvent(n.Change, r.initialTarget);
        ((a.translationX = o.pageX - s.Gb(r.rollingPageX)), (a.translationY = o.pageY - s.Gb(r.rollingPageY)), (a.pageX = o.pageX), (a.pageY = o.pageY), this.dispatchEvent(a), r.rollingPageX.length > 3 && (r.rollingPageX.shift(), r.rollingPageY.shift(), r.rollingTimestamps.shift()), r.rollingPageX.push(o.pageX), r.rollingPageY.push(o.pageY), r.rollingTimestamps.push(t));
      }
      this.dispatched && (e.preventDefault(), e.stopPropagation(), (this.dispatched = !1));
    }
  }
  ((c.SCROLL_FRICTION = -0.005), (c.HOLD_DELAY = 700), (c.CLEAR_TAP_COUNT_TIME = 400), l([r.H], c, "isTouchDevice", null));
};