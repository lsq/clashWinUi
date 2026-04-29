module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    D0: () => h,
    E7: () => u,
    K3: () => d,
    Q5: () => c,
    ZD: () => g,
    ju: () => n
  });
  var n,
    o = i(17301),
    s = i(5976),
    r = i(91741),
    a = i(84013);
  !(function (e) {
    function t(e) {
      return (t, i = null, n) => {
        let o,
          s = !1;
        return ((o = e(e => {
          if (!s) return (o ? o.dispose() : (s = !0), t.call(i, e));
        }, null, n)), s && o.dispose(), o);
      };
    }
    function i(e, t) {
      return a((i, n = null, o) => e(e => i.call(n, t(e)), null, o));
    }
    function n(e, t) {
      return a((i, n = null, o) => e(e => {
        (t(e), i.call(n, e));
      }, null, o));
    }
    function o(e, t) {
      return a((i, n = null, o) => e(e => t(e) && i.call(n, e), null, o));
    }
    function r(e, t, n) {
      let o = n;
      return i(e, e => ((o = t(o, e)), o));
    }
    function a(e) {
      let t;
      const i = new c({
        onFirstListenerAdd() {
          t = e(i.fire, i);
        },
        onLastListenerRemove() {
          t.dispose();
        }
      });
      return i.event;
    }
    function l(e, t, i = 100, n = !1, o) {
      let s,
        r,
        a,
        l = 0;
      const d = new c({
        leakWarningThreshold: o,
        onFirstListenerAdd() {
          s = e(e => {
            (l++, (r = t(r, e)), n && !a && (d.fire(r), (r = void 0)), clearTimeout(a), (a = setTimeout(() => {
              const e = r;
              ((r = void 0), (a = void 0), (!n || l > 1) && d.fire(e), (l = 0));
            }, i)));
          });
        },
        onLastListenerRemove() {
          s.dispose();
        }
      });
      return d.event;
    }
    function d(e, t = (e, t) => e === t) {
      let i,
        n = !0;
      return o(e, e => {
        const o = n || !t(e, i);
        return ((n = !1), (i = e), o);
      });
    }
    ((e.None = () => s.JT.None), (e.once = t), (e.map = i), (e.forEach = n), (e.filter = o), (e.signal = function (e) {
      return e;
    }), (e.any = function (...e) {
      return (t, i = null, n) => (0, s.F8)(...e.map(e => e(e => t.call(i, e), null, n)));
    }), (e.reduce = r), (e.debounce = l), (e.latch = d), (e.split = function (t, i) {
      return [e.filter(t, i), e.filter(t, e => !i(e))];
    }), (e.buffer = function (e, t = !1, i = []) {
      let n = i.slice(),
        o = e(e => {
          n ? n.push(e) : r.fire(e);
        });
      const s = () => {
          (n && n.forEach(e => r.fire(e)), (n = null));
        },
        r = new c({
          onFirstListenerAdd() {
            o || (o = e(e => r.fire(e)));
          },
          onFirstListenerDidAdd() {
            n && (t ? setTimeout(s) : s());
          },
          onLastListenerRemove() {
            (o && o.dispose(), (o = null));
          }
        });
      return r.event;
    }));
    class h {
      constructor(e) {
        this.event = e;
      }
      map(e) {
        return new h(i(this.event, e));
      }
      forEach(e) {
        return new h(n(this.event, e));
      }
      filter(e) {
        return new h(o(this.event, e));
      }
      reduce(e, t) {
        return new h(r(this.event, e, t));
      }
      latch() {
        return new h(d(this.event));
      }
      debounce(e, t = 100, i = !1, n) {
        return new h(l(this.event, e, t, i, n));
      }
      on(e, t, i) {
        return this.event(e, t, i);
      }
      once(e, i, n) {
        return t(this.event)(e, i, n);
      }
    }
    ((e.chain = function (e) {
      return new h(e);
    }), (e.fromNodeEventEmitter = function (e, t, i = e => e) {
      const n = (...e) => o.fire(i(...e)),
        o = new c({
          onFirstListenerAdd: () => e.on(t, n),
          onLastListenerRemove: () => e.removeListener(t, n)
        });
      return o.event;
    }), (e.fromDOMEventEmitter = function (e, t, i = e => e) {
      const n = (...e) => o.fire(i(...e)),
        o = new c({
          onFirstListenerAdd: () => e.addEventListener(t, n),
          onLastListenerRemove: () => e.removeEventListener(t, n)
        });
      return o.event;
    }), (e.toPromise = function (e) {
      return new Promise(i => t(e)(i));
    }));
  })(n || (n = {}));
  class l {
    constructor(e) {
      ((this._listenerCount = 0), (this._invocationCount = 0), (this._elapsedOverall = 0), (this._name = `${e}_${l._idPool++}`));
    }
    start(e) {
      ((this._stopWatch = new a.G(!0)), (this._listenerCount = e));
    }
    stop() {
      if (this._stopWatch) {
        const e = this._stopWatch.elapsed();
        ((this._elapsedOverall += e), (this._invocationCount += 1), console.info(`did FIRE ${this._name}: elapsed_ms: ${e.toFixed(5)}, listener: ${this._listenerCount} (elapsed_overall: ${this._elapsedOverall.toFixed(2)}, invocations: ${this._invocationCount})`), (this._stopWatch = void 0));
      }
    }
  }
  l._idPool = 0;
  class c {
    constructor(e) {
      var t;
      ((this._disposed = !1), (this._options = e), (this._leakageMon = void 0), (this._perfMon = (null === (t = this._options) || void 0 === t ? void 0 : t._profName) ? new l(this._options._profName) : void 0));
    }
    get event() {
      return (this._event || (this._event = (e, t, i) => {
        var n;
        this._listeners || (this._listeners = new r.S());
        const o = this._listeners.isEmpty();
        o && this._options && this._options.onFirstListenerAdd && this._options.onFirstListenerAdd(this);
        const a = this._listeners.push(t ? [e, t] : e);
        (o && this._options && this._options.onFirstListenerDidAdd && this._options.onFirstListenerDidAdd(this), this._options && this._options.onListenerDidAdd && this._options.onListenerDidAdd(this, e, t));
        const l = null === (n = this._leakageMon) || void 0 === n ? void 0 : n.check(this._listeners.size),
          c = (0, s.OF)(() => {
            if ((l && l(), !this._disposed && (a(), this._options && this._options.onLastListenerRemove))) {
              (this._listeners && !this._listeners.isEmpty()) || this._options.onLastListenerRemove(this);
            }
          });
        return (i instanceof s.SL ? i.add(c) : Array.isArray(i) && i.push(c), c);
      }), this._event);
    }
    fire(e) {
      var t, i;
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = new r.S());
        for (let t of this._listeners) this._deliveryQueue.push([t, e]);
        for (null === (t = this._perfMon) || void 0 === t || t.start(this._deliveryQueue.size); this._deliveryQueue.size > 0;) {
          const [e, t] = this._deliveryQueue.shift();
          try {
            "function" == typeof e ? e.call(void 0, t) : e[0].call(e[1], t);
          } catch (e) {
            (0, o.dL)(e);
          }
        }
        null === (i = this._perfMon) || void 0 === i || i.stop();
      }
    }
    dispose() {
      var e, t, i, n, o;
      this._disposed || ((this._disposed = !0), null === (e = this._listeners) || void 0 === e || e.clear(), null === (t = this._deliveryQueue) || void 0 === t || t.clear(), null === (n = null === (i = this._options) || void 0 === i ? void 0 : i.onLastListenerRemove) || void 0 === n || n.call(i), null === (o = this._leakageMon) || void 0 === o || o.dispose());
    }
  }
  class d extends c {
    constructor(e) {
      (super(e), (this._isPaused = 0), (this._eventQueue = new r.S()), (this._mergeFn = null == e ? void 0 : e.merge));
    }
    pause() {
      this._isPaused++;
    }
    resume() {
      if (0 !== this._isPaused && 0 == --this._isPaused) if (this._mergeFn) {
        const e = Array.from(this._eventQueue);
        (this._eventQueue.clear(), super.fire(this._mergeFn(e)));
      } else for (; !this._isPaused && 0 !== this._eventQueue.size;) super.fire(this._eventQueue.shift());
    }
    fire(e) {
      this._listeners && (0 !== this._isPaused ? this._eventQueue.push(e) : super.fire(e));
    }
  }
  class h extends d {
    constructor(e) {
      var t;
      (super(e), (this._delay = null !== (t = e.delay) && void 0 !== t ? t : 100));
    }
    fire(e) {
      (this._handle || (this.pause(), (this._handle = setTimeout(() => {
        ((this._handle = void 0), this.resume());
      }, this._delay))), super.fire(e));
    }
  }
  class u {
    constructor() {
      this.buffers = [];
    }
    wrapEvent(e) {
      return (t, i, n) => e(e => {
        const n = this.buffers[this.buffers.length - 1];
        n ? n.push(() => t.call(i, e)) : t.call(i, e);
      }, void 0, n);
    }
    bufferEvents(e) {
      const t = [];
      this.buffers.push(t);
      const i = e();
      return (this.buffers.pop(), t.forEach(e => e()), i);
    }
  }
  class g {
    constructor() {
      ((this.listening = !1), (this.inputEvent = n.None), (this.inputEventListener = s.JT.None), (this.emitter = new c({
        onFirstListenerDidAdd: () => {
          ((this.listening = !0), (this.inputEventListener = this.inputEvent(this.emitter.fire, this.emitter)));
        },
        onLastListenerRemove: () => {
          ((this.listening = !1), this.inputEventListener.dispose());
        }
      })), (this.event = this.emitter.event));
    }
    set input(e) {
      ((this.inputEvent = e), this.listening && (this.inputEventListener.dispose(), (this.inputEventListener = e(this.emitter.fire, this.emitter))));
    }
    dispose() {
      (this.inputEventListener.dispose(), this.emitter.dispose());
    }
  }
};