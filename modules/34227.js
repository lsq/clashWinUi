module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    EA: () => a,
    Vr: () => p
  });
  var n = i(97295),
    o = i(50072),
    s = i(24314);
  class r {
    constructor(e, t, i, n, o, s) {
      ((this._richEditBracketBrand = void 0), (this.languageId = e), (this.index = t), (this.open = i), (this.close = n), (this.forwardRegex = o), (this.reversedRegex = s), (this._openSet = r._toSet(this.open)), (this._closeSet = r._toSet(this.close)));
    }
    isOpen(e) {
      return this._openSet.has(e);
    }
    isClose(e) {
      return this._closeSet.has(e);
    }
    static _toSet(e) {
      const t = new Set();
      for (const i of e) t.add(i);
      return t;
    }
  }
  class a {
    constructor(e, t) {
      this._richEditBracketsBrand = void 0;
      const i = (function (e) {
        const t = e.length;
        e = e.map(e => [e[0].toLowerCase(), e[1].toLowerCase()]);
        const i = [];
        for (let e = 0; e < t; e++) i[e] = e;
        const n = (e, t) => {
            const [i, n] = e,
              [o, s] = t;
            return i === o || i === s || n === o || n === s;
          },
          o = (e, n) => {
            const o = Math.min(e, n),
              s = Math.max(e, n);
            for (let e = 0; e < t; e++) i[e] === s && (i[e] = o);
          };
        for (let s = 0; s < t; s++) {
          const r = e[s];
          for (let a = s + 1; a < t; a++) n(r, e[a]) && o(i[s], i[a]);
        }
        const s = [];
        for (let n = 0; n < t; n++) {
          let o = [],
            r = [];
          for (let s = 0; s < t; s++) if (i[s] === n) {
            const [t, i] = e[s];
            (o.push(t), r.push(i));
          }
          o.length > 0 && s.push({
            open: o,
            close: r
          });
        }
        return s;
      })(t);
      ((this.brackets = i.map((t, n) => new r(e, n, t.open, t.close, (function (e, t, i, n) {
        let o = [];
        ((o = o.concat(e)), (o = o.concat(t)));
        for (let e = 0, t = o.length; e < t; e++) l(o[e], i, n, o);
        return ((o = d(o)), o.sort(c), o.reverse(), u(o));
      })(t.open, t.close, i, n), (function (e, t, i, n) {
        let o = [];
        ((o = o.concat(e)), (o = o.concat(t)));
        for (let e = 0, t = o.length; e < t; e++) l(o[e], i, n, o);
        return ((o = d(o)), o.sort(c), o.reverse(), u(o.map(g)));
      })(t.open, t.close, i, n)))), (this.forwardRegex = (function (e) {
        let t = [];
        for (const i of e) {
          for (const e of i.open) t.push(e);
          for (const e of i.close) t.push(e);
        }
        return ((t = d(t)), u(t));
      })(this.brackets)), (this.reversedRegex = (function (e) {
        let t = [];
        for (const i of e) {
          for (const e of i.open) t.push(e);
          for (const e of i.close) t.push(e);
        }
        return ((t = d(t)), u(t.map(g)));
      })(this.brackets)), (this.textIsBracket = {}), (this.textIsOpenBracket = {}), (this.maxBracketLength = 0));
      for (const e of this.brackets) {
        for (const t of e.open) ((this.textIsBracket[t] = e), (this.textIsOpenBracket[t] = !0), (this.maxBracketLength = Math.max(this.maxBracketLength, t.length)));
        for (const t of e.close) ((this.textIsBracket[t] = e), (this.textIsOpenBracket[t] = !1), (this.maxBracketLength = Math.max(this.maxBracketLength, t.length)));
      }
    }
  }
  function l(e, t, i, n) {
    for (let o = 0, s = t.length; o < s; o++) {
      if (o === i) continue;
      const s = t[o];
      for (const t of s.open) t.indexOf(e) >= 0 && n.push(t);
      for (const t of s.close) t.indexOf(e) >= 0 && n.push(t);
    }
  }
  function c(e, t) {
    return e.length - t.length;
  }
  function d(e) {
    if (e.length <= 1) return e;
    const t = [],
      i = new Set();
    for (const n of e) i.has(n) || (t.push(n), i.add(n));
    return t;
  }
  function h(e) {
    const t = /^[\w ]+$/.test(e);
    return ((e = n.ec(e)), t ? `\\b${e}\\b` : e);
  }
  function u(e) {
    let t = `(${e.map(h).join(")|(")})`;
    return n.GF(t, !0);
  }
  const g = (function () {
    let e = null,
      t = null;
    return function (i) {
      return (e !== i && ((e = i), (t = (function (e) {
        if (o.lZ) {
          const t = new Uint16Array(e.length);
          let i = 0;
          for (let n = e.length - 1; n >= 0; n--) t[i++] = e.charCodeAt(n);
          return o.oe().decode(t);
        }
        {
          let t = [],
            i = 0;
          for (let n = e.length - 1; n >= 0; n--) t[i++] = e.charAt(n);
          return t.join("");
        }
      })(e))), t);
    };
  })();
  class p {
    static _findPrevBracketInText(e, t, i, n) {
      let o = i.match(e);
      if (!o) return null;
      let r = i.length - (o.index || 0),
        a = o[0].length,
        l = n + r;
      return new s.e(t, l - a + 1, t, l + 1);
    }
    static findPrevBracketInRange(e, t, i, n, o) {
      const s = g(i).substring(i.length - o, i.length - n);
      return this._findPrevBracketInText(e, t, s, n);
    }
    static findNextBracketInText(e, t, i, n) {
      let o = i.match(e);
      if (!o) return null;
      let r = o.index || 0,
        a = o[0].length;
      if (0 === a) return null;
      let l = n + r;
      return new s.e(t, l + 1, t, l + 1 + a);
    }
    static findNextBracketInRange(e, t, i, n, o) {
      const s = i.substring(n, o);
      return this.findNextBracketInText(e, t, s, n);
    }
  }
};