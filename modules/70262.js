module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    E: () => r
  });
  let n = !1,
    o = null;
  function s(e) {
    if (!e.parent || e.parent === e) return null;
    try {
      let t = e.location,
        i = e.parent.location;
      if ("null" !== t.origin && "null" !== i.origin && t.origin !== i.origin) return ((n = !0), null);
    } catch (e) {
      return ((n = !0), null);
    }
    return e.parent;
  }
  class r {
    static getSameOriginWindowChain() {
      if (!o) {
        o = [];
        let e,
          t = window;
        do {
          ((e = s(t)), e ? o.push({
            window: t,
            iframeElement: t.frameElement || null
          }) : o.push({
            window: t,
            iframeElement: null
          }), (t = e));
        } while (t);
      }
      return o.slice(0);
    }
    static hasDifferentOriginAncestor() {
      return (o || this.getSameOriginWindowChain(), n);
    }
    static getPositionOfChildWindowRelativeToAncestorWindow(e, t) {
      if (!t || e === t) return {
        top: 0,
        left: 0
      };
      let i = 0,
        n = 0,
        o = this.getSameOriginWindowChain();
      for (const e of o) {
        if (((i += e.window.scrollY), (n += e.window.scrollX), e.window === t)) break;
        if (!e.iframeElement) break;
        let o = e.iframeElement.getBoundingClientRect();
        ((i += o.top), (n += o.left));
      }
      return {
        top: i,
        left: n
      };
    }
  }
};