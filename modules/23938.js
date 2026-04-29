module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    n: () => r,
    q: () => a
  });
  var n = i(16268),
    o = i(70262),
    s = i(1432);
  class r {
    constructor(e) {
      ((this.timestamp = Date.now()), (this.browserEvent = e), (this.leftButton = 0 === e.button), (this.middleButton = 1 === e.button), (this.rightButton = 2 === e.button), (this.buttons = e.buttons), (this.target = e.target), (this.detail = e.detail || 1), "dblclick" === e.type && (this.detail = 2), (this.ctrlKey = e.ctrlKey), (this.shiftKey = e.shiftKey), (this.altKey = e.altKey), (this.metaKey = e.metaKey), "number" == typeof e.pageX ? ((this.posx = e.pageX), (this.posy = e.pageY)) : ((this.posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft), (this.posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop)));
      let t = o.E.getPositionOfChildWindowRelativeToAncestorWindow(self, e.view);
      ((this.posx -= t.left), (this.posy -= t.top));
    }
    preventDefault() {
      this.browserEvent.preventDefault();
    }
    stopPropagation() {
      this.browserEvent.stopPropagation();
    }
  }
  class a {
    constructor(e, t = 0, i = 0) {
      if (((this.browserEvent = e || null), (this.target = e ? e.target || e.targetNode || e.srcElement : null), (this.deltaY = i), (this.deltaX = t), e)) {
        let t = e,
          i = e;
        if (void 0 !== t.wheelDeltaY) this.deltaY = t.wheelDeltaY / 120;else if (void 0 !== i.VERTICAL_AXIS && i.axis === i.VERTICAL_AXIS) this.deltaY = -i.detail / 3;else if ("wheel" === e.type) {
          const t = e;
          t.deltaMode === t.DOM_DELTA_LINE ? n.vU && !s.dz ? (this.deltaY = -e.deltaY / 3) : (this.deltaY = -e.deltaY) : (this.deltaY = -e.deltaY / 40);
        }
        if (void 0 !== t.wheelDeltaX) n.G6 && s.ED ? (this.deltaX = -t.wheelDeltaX / 120) : (this.deltaX = t.wheelDeltaX / 120);else if (void 0 !== i.HORIZONTAL_AXIS && i.axis === i.HORIZONTAL_AXIS) this.deltaX = -e.detail / 3;else if ("wheel" === e.type) {
          const t = e;
          t.deltaMode === t.DOM_DELTA_LINE ? n.vU && !s.dz ? (this.deltaX = -e.deltaX / 3) : (this.deltaX = -e.deltaX) : (this.deltaX = -e.deltaX / 40);
        }
        0 === this.deltaY && 0 === this.deltaX && e.wheelDelta && (this.deltaY = e.wheelDelta / 120);
      }
    }
    preventDefault() {
      this.browserEvent && this.browserEvent.preventDefault();
    }
    stopPropagation() {
      this.browserEvent && this.browserEvent.stopPropagation();
    }
  }
};