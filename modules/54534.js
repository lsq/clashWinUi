module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    I: () => o
  });
  var n = i(5976);
  class o extends n.JT {
    constructor(e, t, i) {
      (super(), (this.referenceDomElement = e), (this.changeCallback = i), (this.width = -1), (this.height = -1), (this.resizeObserver = null), (this.measureReferenceDomElementToken = -1), this.measureReferenceDomElement(!1, t));
    }
    dispose() {
      (this.stopObserving(), super.dispose());
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    startObserving() {
      "undefined" != typeof ResizeObserver ? !this.resizeObserver && this.referenceDomElement && ((this.resizeObserver = new ResizeObserver(e => {
        e && e[0] && e[0].contentRect ? this.observe({
          width: e[0].contentRect.width,
          height: e[0].contentRect.height
        }) : this.observe();
      })), this.resizeObserver.observe(this.referenceDomElement)) : -1 === this.measureReferenceDomElementToken && (this.measureReferenceDomElementToken = setInterval(() => this.observe(), 100));
    }
    stopObserving() {
      (this.resizeObserver && (this.resizeObserver.disconnect(), (this.resizeObserver = null)), -1 !== this.measureReferenceDomElementToken && (clearInterval(this.measureReferenceDomElementToken), (this.measureReferenceDomElementToken = -1)));
    }
    observe(e) {
      this.measureReferenceDomElement(!0, e);
    }
    measureReferenceDomElement(e, t) {
      let i = 0,
        n = 0;
      (t ? ((i = t.width), (n = t.height)) : this.referenceDomElement && ((i = this.referenceDomElement.clientWidth), (n = this.referenceDomElement.clientHeight)), (i = Math.max(5, i)), (n = Math.max(5, n)), (this.width === i && this.height === n) || ((this.width = i), (this.height = n), e && this.changeCallback()));
    }
  }
};