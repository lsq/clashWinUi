module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    q: () => r
  });
  var n = i(65321),
    o = i(56811),
    s = i(36248);
  class r {
    constructor(e, t) {
      ((this.supportIcons = t), (this.text = ""), (this.title = ""), (this.highlights = []), (this.didEverRender = !1), (this.domNode = document.createElement("span")), (this.domNode.className = "monaco-highlighted-label"), e.appendChild(this.domNode));
    }
    get element() {
      return this.domNode;
    }
    set(e, t = [], i = "", n) {
      (e || (e = ""), n && (e = r.escapeNewLines(e, t)), (this.didEverRender && this.text === e && this.title === i && s.fS(this.highlights, t)) || ((this.text = e), (this.title = i), (this.highlights = t), this.render()));
    }
    render() {
      const e = [];
      let t = 0;
      for (const i of this.highlights) {
        if (i.end === i.start) continue;
        if (t < i.start) {
          const s = this.text.substring(t, i.start);
          (e.push(n.$("span", void 0, ...(this.supportIcons ? (0, o.T)(s) : [s]))), (t = i.end));
        }
        const s = this.text.substring(i.start, i.end),
          r = n.$("span.highlight", void 0, ...(this.supportIcons ? (0, o.T)(s) : [s]));
        (i.extraClasses && r.classList.add(i.extraClasses), e.push(r), (t = i.end));
      }
      if (t < this.text.length) {
        const i = this.text.substring(t);
        e.push(n.$("span", void 0, ...(this.supportIcons ? (0, o.T)(i) : [i])));
      }
      (n.mc(this.domNode, ...e), this.title ? (this.domNode.title = this.title) : this.domNode.removeAttribute("title"), (this.didEverRender = !0));
    }
    static escapeNewLines(e, t) {
      let i = 0,
        n = 0;
      return e.replace(/\r\n|\r|\n/g, (e, o) => {
        ((n = "\r\n" === e ? -1 : 0), (o += i));
        for (const e of t) e.end <= o || (e.start >= o && (e.start += n), e.end >= o && (e.end += n));
        return ((i += n), "⏎");
      });
    }
  }
};