module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $: () => l
  });
  var n = i(65321),
    o = i(59069),
    s = i(23938),
    r = i(10553),
    a = i(5976);
  class l extends a.JT {
    onclick(e, t) {
      this._register(n.nm(e, n.tw.CLICK, e => t(new s.n(e))));
    }
    onmousedown(e, t) {
      this._register(n.nm(e, n.tw.MOUSE_DOWN, e => t(new s.n(e))));
    }
    onmouseover(e, t) {
      this._register(n.nm(e, n.tw.MOUSE_OVER, e => t(new s.n(e))));
    }
    onnonbubblingmouseout(e, t) {
      this._register(n.j_(e, e => t(new s.n(e))));
    }
    onkeydown(e, t) {
      this._register(n.nm(e, n.tw.KEY_DOWN, e => t(new o.y(e))));
    }
    onkeyup(e, t) {
      this._register(n.nm(e, n.tw.KEY_UP, e => t(new o.y(e))));
    }
    oninput(e, t) {
      this._register(n.nm(e, n.tw.INPUT, t));
    }
    onblur(e, t) {
      this._register(n.nm(e, n.tw.BLUR, t));
    }
    onfocus(e, t) {
      this._register(n.nm(e, n.tw.FOCUS, t));
    }
    ignoreGesture(e) {
      r.o.ignoreTarget(e);
    }
  }
};