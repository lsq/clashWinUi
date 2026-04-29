module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    BO: () => s,
    IY: () => o,
    az: () => r
  });
  var n = i(65321);
  function o(e, t = {}) {
    const i = r(t);
    return ((i.textContent = e), i);
  }
  function s(e, t = {}) {
    const i = r(t);
    return (l(i, (function (e, t) {
      const i = {
        type: 1,
        children: []
      };
      let n = 0,
        o = i;
      const s = [],
        r = new a(e);
      for (; !r.eos();) {
        let e = r.next();
        const i = "\\" === e && 0 !== d(r.peek(), t);
        if ((i && (e = r.next()), !i && c(e, t) && e === r.peek())) {
          (r.advance(), 2 === o.type && (o = s.pop()));
          const i = d(e, t);
          if (o.type === i || (5 === o.type && 6 === i)) o = s.pop();else {
            const e = {
              type: i,
              children: []
            };
            (5 === i && ((e.index = n), n++), o.children.push(e), s.push(o), (o = e));
          }
        } else if ("\n" === e) (2 === o.type && (o = s.pop()), o.children.push({
          type: 8
        }));else if (2 !== o.type) {
          const t = {
            type: 2,
            content: e
          };
          (o.children.push(t), s.push(o), (o = t));
        } else o.content += e;
      }
      2 === o.type && (o = s.pop());
      s.length;
      return i;
    })(e, !!t.renderCodeSegments), t.actionHandler, t.renderCodeSegments), i);
  }
  function r(e) {
    const t = e.inline ? "span" : "div",
      i = document.createElement(t);
    return (e.className && (i.className = e.className), i);
  }
  class a {
    constructor(e) {
      ((this.source = e), (this.index = 0));
    }
    eos() {
      return this.index >= this.source.length;
    }
    next() {
      const e = this.peek();
      return (this.advance(), e);
    }
    peek() {
      return this.source[this.index];
    }
    advance() {
      this.index++;
    }
  }
  function l(e, t, i, o) {
    let s;
    if (2 === t.type) s = document.createTextNode(t.content || "");else if (3 === t.type) s = document.createElement("b");else if (4 === t.type) s = document.createElement("i");else if (7 === t.type && o) s = document.createElement("code");else if (5 === t.type && i) {
      const e = document.createElement("a");
      ((e.href = "#"), i.disposables.add(n.mu(e, "click", e => {
        i.callback(String(t.index), e);
      })), (s = e));
    } else 8 === t.type ? (s = document.createElement("br")) : 1 === t.type && (s = e);
    (s && e !== s && e.appendChild(s), s && Array.isArray(t.children) && t.children.forEach(e => {
      l(s, e, i, o);
    }));
  }
  function c(e, t) {
    return 0 !== d(e, t);
  }
  function d(e, t) {
    switch (e) {
      case "*":
        return 3;
      case "_":
        return 4;
      case "[":
        return 5;
      case "]":
        return 6;
      case "`":
        return t ? 7 : 0;
      default:
        return 0;
    }
  }
};