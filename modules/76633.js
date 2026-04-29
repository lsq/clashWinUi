module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Rm: () => r
  });
  var n = i(4669),
    o = i(5976);
  class s {
    constructor(e, t, i, n, o, s) {
      ((this._scrollStateBrand = void 0), (e |= 0), (t |= 0), (i |= 0), (n |= 0), (o |= 0), (s |= 0), (this.rawScrollLeft = i), (this.rawScrollTop = s), e < 0 && (e = 0), i + e > t && (i = t - e), i < 0 && (i = 0), n < 0 && (n = 0), s + n > o && (s = o - n), s < 0 && (s = 0), (this.width = e), (this.scrollWidth = t), (this.scrollLeft = i), (this.height = n), (this.scrollHeight = o), (this.scrollTop = s));
    }
    equals(e) {
      return (this.rawScrollLeft === e.rawScrollLeft && this.rawScrollTop === e.rawScrollTop && this.width === e.width && this.scrollWidth === e.scrollWidth && this.scrollLeft === e.scrollLeft && this.height === e.height && this.scrollHeight === e.scrollHeight && this.scrollTop === e.scrollTop);
    }
    withScrollDimensions(e, t) {
      return new s(void 0 !== e.width ? e.width : this.width, void 0 !== e.scrollWidth ? e.scrollWidth : this.scrollWidth, t ? this.rawScrollLeft : this.scrollLeft, void 0 !== e.height ? e.height : this.height, void 0 !== e.scrollHeight ? e.scrollHeight : this.scrollHeight, t ? this.rawScrollTop : this.scrollTop);
    }
    withScrollPosition(e) {
      return new s(this.width, this.scrollWidth, void 0 !== e.scrollLeft ? e.scrollLeft : this.rawScrollLeft, this.height, this.scrollHeight, void 0 !== e.scrollTop ? e.scrollTop : this.rawScrollTop);
    }
    createScrollEvent(e, t) {
      const i = this.width !== e.width,
        n = this.scrollWidth !== e.scrollWidth,
        o = this.scrollLeft !== e.scrollLeft,
        s = this.height !== e.height,
        r = this.scrollHeight !== e.scrollHeight,
        a = this.scrollTop !== e.scrollTop;
      return {
        inSmoothScrolling: t,
        oldWidth: e.width,
        oldScrollWidth: e.scrollWidth,
        oldScrollLeft: e.scrollLeft,
        width: this.width,
        scrollWidth: this.scrollWidth,
        scrollLeft: this.scrollLeft,
        oldHeight: e.height,
        oldScrollHeight: e.scrollHeight,
        oldScrollTop: e.scrollTop,
        height: this.height,
        scrollHeight: this.scrollHeight,
        scrollTop: this.scrollTop,
        widthChanged: i,
        scrollWidthChanged: n,
        scrollLeftChanged: o,
        heightChanged: s,
        scrollHeightChanged: r,
        scrollTopChanged: a
      };
    }
  }
  class r extends o.JT {
    constructor(e, t) {
      (super(), (this._scrollableBrand = void 0), (this._onScroll = this._register(new n.Q5())), (this.onScroll = this._onScroll.event), (this._smoothScrollDuration = e), (this._scheduleAtNextAnimationFrame = t), (this._state = new s(0, 0, 0, 0, 0, 0)), (this._smoothScrolling = null));
    }
    dispose() {
      (this._smoothScrolling && (this._smoothScrolling.dispose(), (this._smoothScrolling = null)), super.dispose());
    }
    setSmoothScrollDuration(e) {
      this._smoothScrollDuration = e;
    }
    validateScrollPosition(e) {
      return this._state.withScrollPosition(e);
    }
    getScrollDimensions() {
      return this._state;
    }
    setScrollDimensions(e, t) {
      const i = this._state.withScrollDimensions(e, t);
      (this._setState(i, Boolean(this._smoothScrolling)), this._smoothScrolling && this._smoothScrolling.acceptScrollDimensions(this._state));
    }
    getFutureScrollPosition() {
      return this._smoothScrolling ? this._smoothScrolling.to : this._state;
    }
    getCurrentScrollPosition() {
      return this._state;
    }
    setScrollPositionNow(e) {
      const t = this._state.withScrollPosition(e);
      (this._smoothScrolling && (this._smoothScrolling.dispose(), (this._smoothScrolling = null)), this._setState(t, !1));
    }
    setScrollPositionSmooth(e, t) {
      if (0 === this._smoothScrollDuration) return this.setScrollPositionNow(e);
      if (this._smoothScrolling) {
        e = {
          scrollLeft: void 0 === e.scrollLeft ? this._smoothScrolling.to.scrollLeft : e.scrollLeft,
          scrollTop: void 0 === e.scrollTop ? this._smoothScrolling.to.scrollTop : e.scrollTop
        };
        const i = this._state.withScrollPosition(e);
        if (this._smoothScrolling.to.scrollLeft === i.scrollLeft && this._smoothScrolling.to.scrollTop === i.scrollTop) return;
        let n;
        ((n = t ? new c(this._smoothScrolling.from, i, this._smoothScrolling.startTime, this._smoothScrolling.duration) : this._smoothScrolling.combine(this._state, i, this._smoothScrollDuration)), this._smoothScrolling.dispose(), (this._smoothScrolling = n));
      } else {
        const t = this._state.withScrollPosition(e);
        this._smoothScrolling = c.start(this._state, t, this._smoothScrollDuration);
      }
      this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
        this._smoothScrolling && ((this._smoothScrolling.animationFrameDisposable = null), this._performSmoothScrolling());
      });
    }
    _performSmoothScrolling() {
      if (!this._smoothScrolling) return;
      const e = this._smoothScrolling.tick(),
        t = this._state.withScrollPosition(e);
      return (this._setState(t, !0), this._smoothScrolling ? e.isDone ? (this._smoothScrolling.dispose(), void (this._smoothScrolling = null)) : void (this._smoothScrolling.animationFrameDisposable = this._scheduleAtNextAnimationFrame(() => {
        this._smoothScrolling && ((this._smoothScrolling.animationFrameDisposable = null), this._performSmoothScrolling());
      })) : void 0);
    }
    _setState(e, t) {
      const i = this._state;
      i.equals(e) || ((this._state = e), this._onScroll.fire(this._state.createScrollEvent(i, t)));
    }
  }
  class a {
    constructor(e, t, i) {
      ((this.scrollLeft = e), (this.scrollTop = t), (this.isDone = i));
    }
  }
  function l(e, t) {
    const i = t - e;
    return function (t) {
      return (e + i * (1 - (function (e) {
        return Math.pow(e, 3);
      })(1 - t)));
    };
  }
  class c {
    constructor(e, t, i, n) {
      ((this.from = e), (this.to = t), (this.duration = n), (this.startTime = i), (this.animationFrameDisposable = null), this._initAnimations());
    }
    _initAnimations() {
      ((this.scrollLeft = this._initAnimation(this.from.scrollLeft, this.to.scrollLeft, this.to.width)), (this.scrollTop = this._initAnimation(this.from.scrollTop, this.to.scrollTop, this.to.height)));
    }
    _initAnimation(e, t, i) {
      if (Math.abs(e - t) > 2.5 * i) {
        let r, a;
        return (e < t ? ((r = e + 0.75 * i), (a = t - 0.75 * i)) : ((r = e - 0.75 * i), (a = t + 0.75 * i)), (n = l(e, r)), (o = l(a, t)), (s = 0.33), function (e) {
          return e < s ? n(e / s) : o((e - s) / (1 - s));
        });
      }
      var n, o, s;
      return l(e, t);
    }
    dispose() {
      null !== this.animationFrameDisposable && (this.animationFrameDisposable.dispose(), (this.animationFrameDisposable = null));
    }
    acceptScrollDimensions(e) {
      ((this.to = e.withScrollPosition(this.to)), this._initAnimations());
    }
    tick() {
      return this._tick(Date.now());
    }
    _tick(e) {
      const t = (e - this.startTime) / this.duration;
      if (t < 1) {
        const e = this.scrollLeft(t),
          i = this.scrollTop(t);
        return new a(e, i, !1);
      }
      return new a(this.to.scrollLeft, this.to.scrollTop, !0);
    }
    combine(e, t, i) {
      return c.start(e, t, i);
    }
    static start(e, t, i) {
      i += 10;
      const n = Date.now() - 10;
      return new c(e, t, n, i);
    }
  }
};