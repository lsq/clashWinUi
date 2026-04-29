module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Lv: () => l,
    Vm: () => a,
    Yj: () => p,
    xv: () => s
  });
  class n {
    constructor() {
      ((this.value = ""), (this.pos = 0));
    }
    static isDigitCharacter(e) {
      return e >= 48 && e <= 57;
    }
    static isVariableCharacter(e) {
      return 95 === e || (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
    }
    text(e) {
      ((this.value = e), (this.pos = 0));
    }
    tokenText(e) {
      return this.value.substr(e.pos, e.len);
    }
    next() {
      if (this.pos >= this.value.length) return {
        type: 14,
        pos: this.pos,
        len: 0
      };
      let e,
        t = this.pos,
        i = 0,
        o = this.value.charCodeAt(t);
      if (((e = n._table[o]), "number" == typeof e)) return ((this.pos += 1), {
        type: e,
        pos: t,
        len: 1
      });
      if (n.isDigitCharacter(o)) {
        e = 8;
        do {
          ((i += 1), (o = this.value.charCodeAt(t + i)));
        } while (n.isDigitCharacter(o));
        return ((this.pos += i), {
          type: e,
          pos: t,
          len: i
        });
      }
      if (n.isVariableCharacter(o)) {
        e = 9;
        do {
          o = this.value.charCodeAt(t + ++i);
        } while (n.isVariableCharacter(o) || n.isDigitCharacter(o));
        return ((this.pos += i), {
          type: e,
          pos: t,
          len: i
        });
      }
      e = 10;
      do {
        ((i += 1), (o = this.value.charCodeAt(t + i)));
      } while (!isNaN(o) && void 0 === n._table[o] && !n.isDigitCharacter(o) && !n.isVariableCharacter(o));
      return ((this.pos += i), {
        type: e,
        pos: t,
        len: i
      });
    }
  }
  n._table = {
    36: 0,
    58: 1,
    44: 2,
    123: 3,
    125: 4,
    92: 5,
    47: 6,
    124: 7,
    43: 11,
    45: 12,
    63: 13
  };
  class o {
    constructor() {
      this._children = [];
    }
    appendChild(e) {
      return (e instanceof s && this._children[this._children.length - 1] instanceof s ? (this._children[this._children.length - 1].value += e.value) : ((e.parent = this), this._children.push(e)), this);
    }
    replace(e, t) {
      const {
          parent: i
        } = e,
        n = i.children.indexOf(e),
        o = i.children.slice(0);
      (o.splice(n, 1, ...t), (i._children = o), (function e(t, i) {
        for (const n of t) ((n.parent = i), e(n.children, n));
      })(t, i));
    }
    get children() {
      return this._children;
    }
    get snippet() {
      let e = this;
      for (;;) {
        if (!e) return;
        if (e instanceof g) return e;
        e = e.parent;
      }
    }
    toString() {
      return this.children.reduce((e, t) => e + t.toString(), "");
    }
    len() {
      return 0;
    }
  }
  class s extends o {
    constructor(e) {
      (super(), (this.value = e));
    }
    toString() {
      return this.value;
    }
    len() {
      return this.value.length;
    }
    clone() {
      return new s(this.value);
    }
  }
  class r extends o {}
  class a extends r {
    constructor(e) {
      (super(), (this.index = e));
    }
    static compareByIndex(e, t) {
      return e.index === t.index ? 0 : e.isFinalTabstop ? 1 : t.isFinalTabstop || e.index < t.index ? -1 : e.index > t.index ? 1 : 0;
    }
    get isFinalTabstop() {
      return 0 === this.index;
    }
    get choice() {
      return 1 === this._children.length && this._children[0] instanceof l ? this._children[0] : void 0;
    }
    clone() {
      let e = new a(this.index);
      return (this.transform && (e.transform = this.transform.clone()), (e._children = this.children.map(e => e.clone())), e);
    }
  }
  class l extends o {
    constructor() {
      (super(...arguments), (this.options = []));
    }
    appendChild(e) {
      return (e instanceof s && ((e.parent = this), this.options.push(e)), this);
    }
    toString() {
      return this.options[0].value;
    }
    len() {
      return this.options[0].len();
    }
    clone() {
      let e = new l();
      return (this.options.forEach(e.appendChild, e), e);
    }
  }
  class c extends o {
    constructor() {
      (super(...arguments), (this.regexp = new RegExp("")));
    }
    resolve(e) {
      const t = this;
      let i = !1,
        n = e.replace(this.regexp, function () {
          return ((i = !0), t._replace(Array.prototype.slice.call(arguments, 0, -2)));
        });
      return (!i && this._children.some(e => e instanceof d && Boolean(e.elseValue)) && (n = this._replace([])), n);
    }
    _replace(e) {
      let t = "";
      for (const i of this._children) if (i instanceof d) {
        let n = e[i.index] || "";
        ((n = i.resolve(n)), (t += n));
      } else t += i.toString();
      return t;
    }
    toString() {
      return "";
    }
    clone() {
      let e = new c();
      return ((e.regexp = new RegExp(this.regexp.source, (this.regexp.ignoreCase ? "i" : "") + (this.regexp.global ? "g" : ""))), (e._children = this.children.map(e => e.clone())), e);
    }
  }
  class d extends o {
    constructor(e, t, i, n) {
      (super(), (this.index = e), (this.shorthandName = t), (this.ifValue = i), (this.elseValue = n));
    }
    resolve(e) {
      return "upcase" === this.shorthandName ? e ? e.toLocaleUpperCase() : "" : "downcase" === this.shorthandName ? e ? e.toLocaleLowerCase() : "" : "capitalize" === this.shorthandName ? e ? e[0].toLocaleUpperCase() + e.substr(1) : "" : "pascalcase" === this.shorthandName ? e ? this._toPascalCase(e) : "" : "camelcase" === this.shorthandName ? e ? this._toCamelCase(e) : "" : Boolean(e) && "string" == typeof this.ifValue ? this.ifValue : Boolean(e) || "string" != typeof this.elseValue ? e || "" : this.elseValue;
    }
    _toPascalCase(e) {
      const t = e.match(/[a-z0-9]+/gi);
      return t ? t.map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join("") : e;
    }
    _toCamelCase(e) {
      const t = e.match(/[a-z0-9]+/gi);
      return t ? t.map((e, t) => 0 === t ? e.toLowerCase() : e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()).join("") : e;
    }
    clone() {
      return new d(this.index, this.shorthandName, this.ifValue, this.elseValue);
    }
  }
  class h extends r {
    constructor(e) {
      (super(), (this.name = e));
    }
    resolve(e) {
      let t = e.resolve(this);
      return (this.transform && (t = this.transform.resolve(t || "")), void 0 !== t && ((this._children = [new s(t)]), !0));
    }
    clone() {
      const e = new h(this.name);
      return (this.transform && (e.transform = this.transform.clone()), (e._children = this.children.map(e => e.clone())), e);
    }
  }
  function u(e, t) {
    const i = [...e];
    for (; i.length > 0;) {
      const e = i.shift();
      if (!t(e)) break;
      i.unshift(...e.children);
    }
  }
  class g extends o {
    get placeholderInfo() {
      if (!this._placeholders) {
        let e,
          t = [];
        (this.walk(function (i) {
          return (i instanceof a && (t.push(i), (e = !e || e.index < i.index ? i : e)), !0);
        }), (this._placeholders = {
          all: t,
          last: e
        }));
      }
      return this._placeholders;
    }
    get placeholders() {
      const {
        all: e
      } = this.placeholderInfo;
      return e;
    }
    offset(e) {
      let t = 0,
        i = !1;
      return (this.walk(n => (n === e ? ((i = !0), !1) : ((t += n.len()), !0))), i ? t : -1);
    }
    fullLen(e) {
      let t = 0;
      return (u([e], e => ((t += e.len()), !0)), t);
    }
    enclosingPlaceholders(e) {
      let t = [],
        {
          parent: i
        } = e;
      for (; i;) (i instanceof a && t.push(i), (i = i.parent));
      return t;
    }
    resolveVariables(e) {
      return (this.walk(t => (t instanceof h && t.resolve(e) && (this._placeholders = void 0), !0)), this);
    }
    appendChild(e) {
      return ((this._placeholders = void 0), super.appendChild(e));
    }
    replace(e, t) {
      return ((this._placeholders = void 0), super.replace(e, t));
    }
    clone() {
      let e = new g();
      return ((this._children = this.children.map(e => e.clone())), e);
    }
    walk(e) {
      u(this.children, e);
    }
  }
  class p {
    constructor() {
      ((this._scanner = new n()), (this._token = {
        type: 14,
        pos: 0,
        len: 0
      }));
    }
    static escape(e) {
      return e.replace(/\$|}|\\/g, "\\$&");
    }
    static guessNeedsClipboard(e) {
      return /\${?CLIPBOARD/.test(e);
    }
    parse(e, t, i) {
      (this._scanner.text(e), (this._token = this._scanner.next()));
      const n = new g();
      for (; this._parse(n););
      const o = new Map(),
        s = [];
      let r = 0;
      n.walk(e => (e instanceof a && ((r += 1), e.isFinalTabstop ? o.set(0, void 0) : !o.has(e.index) && e.children.length > 0 ? o.set(e.index, e.children) : s.push(e)), !0));
      for (const e of s) {
        const t = o.get(e.index);
        if (t) {
          const i = new a(e.index);
          i.transform = e.transform;
          for (const e of t) i.appendChild(e.clone());
          n.replace(e, [i]);
        }
      }
      return (i || (i = r > 0 && t), !o.has(0) && i && n.appendChild(new a(0)), n);
    }
    _accept(e, t) {
      if (void 0 === e || this._token.type === e) {
        let e = !t || this._scanner.tokenText(this._token);
        return ((this._token = this._scanner.next()), e);
      }
      return !1;
    }
    _backTo(e) {
      return ((this._scanner.pos = e.pos + e.len), (this._token = e), !1);
    }
    _until(e) {
      const t = this._token;
      for (; this._token.type !== e;) {
        if (14 === this._token.type) return !1;
        if (5 === this._token.type) {
          const e = this._scanner.next();
          if (0 !== e.type && 4 !== e.type && 5 !== e.type) return !1;
        }
        this._token = this._scanner.next();
      }
      const i = this._scanner.value.substring(t.pos, this._token.pos).replace(/\\(\$|}|\\)/g, "$1");
      return ((this._token = this._scanner.next()), i);
    }
    _parse(e) {
      return (this._parseEscaped(e) || this._parseTabstopOrVariableName(e) || this._parseComplexPlaceholder(e) || this._parseComplexVariable(e) || this._parseAnything(e));
    }
    _parseEscaped(e) {
      let t;
      return (!!(t = this._accept(5, !0)) && ((t = this._accept(0, !0) || this._accept(4, !0) || this._accept(5, !0) || t), e.appendChild(new s(t)), !0));
    }
    _parseTabstopOrVariableName(e) {
      let t;
      const i = this._token;
      return this._accept(0) && (t = this._accept(9, !0) || this._accept(8, !0)) ? (e.appendChild(/^\d+$/.test(t) ? new a(Number(t)) : new h(t)), !0) : this._backTo(i);
    }
    _parseComplexPlaceholder(e) {
      let t;
      const i = this._token;
      if (!(this._accept(0) && this._accept(3) && (t = this._accept(8, !0)))) return this._backTo(i);
      const n = new a(Number(t));
      if (this._accept(1)) for (;;) {
        if (this._accept(4)) return (e.appendChild(n), !0);
        if (!this._parse(n)) return (e.appendChild(new s("${" + t + ":")), n.children.forEach(e.appendChild, e), !0);
      } else {
        if (!(n.index > 0 && this._accept(7))) return this._accept(6) ? this._parseTransform(n) ? (e.appendChild(n), !0) : (this._backTo(i), !1) : this._accept(4) ? (e.appendChild(n), !0) : this._backTo(i);
        {
          const t = new l();
          for (;;) {
            if (this._parseChoiceElement(t)) {
              if (this._accept(2)) continue;
              if (this._accept(7) && (n.appendChild(t), this._accept(4))) return (e.appendChild(n), !0);
            }
            return (this._backTo(i), !1);
          }
        }
      }
    }
    _parseChoiceElement(e) {
      const t = this._token,
        i = [];
      for (; 2 !== this._token.type && 7 !== this._token.type;) {
        let e;
        if (((e = (e = this._accept(5, !0)) ? this._accept(2, !0) || this._accept(7, !0) || this._accept(5, !0) || e : this._accept(void 0, !0)), !e)) return (this._backTo(t), !1);
        i.push(e);
      }
      return 0 === i.length ? (this._backTo(t), !1) : (e.appendChild(new s(i.join(""))), !0);
    }
    _parseComplexVariable(e) {
      let t;
      const i = this._token;
      if (!(this._accept(0) && this._accept(3) && (t = this._accept(9, !0)))) return this._backTo(i);
      const n = new h(t);
      if (!this._accept(1)) return this._accept(6) ? this._parseTransform(n) ? (e.appendChild(n), !0) : (this._backTo(i), !1) : this._accept(4) ? (e.appendChild(n), !0) : this._backTo(i);
      for (;;) {
        if (this._accept(4)) return (e.appendChild(n), !0);
        if (!this._parse(n)) return (e.appendChild(new s("${" + t + ":")), n.children.forEach(e.appendChild, e), !0);
      }
    }
    _parseTransform(e) {
      let t = new c(),
        i = "",
        n = "";
      for (; !this._accept(6);) {
        let e;
        if ((e = this._accept(5, !0))) ((e = this._accept(6, !0) || e), (i += e));else {
          if (14 === this._token.type) return !1;
          i += this._accept(void 0, !0);
        }
      }
      for (; !this._accept(6);) {
        let e;
        if ((e = this._accept(5, !0))) ((e = this._accept(5, !0) || this._accept(6, !0) || e), t.appendChild(new s(e)));else if (!this._parseFormatString(t) && !this._parseAnything(t)) return !1;
      }
      for (; !this._accept(4);) {
        if (14 === this._token.type) return !1;
        n += this._accept(void 0, !0);
      }
      try {
        t.regexp = new RegExp(i, n);
      } catch (e) {
        return !1;
      }
      return ((e.transform = t), !0);
    }
    _parseFormatString(e) {
      const t = this._token;
      if (!this._accept(0)) return !1;
      let i = !1;
      this._accept(3) && (i = !0);
      let n = this._accept(8, !0);
      if (!n) return (this._backTo(t), !1);
      if (!i) return (e.appendChild(new d(Number(n))), !0);
      if (this._accept(4)) return (e.appendChild(new d(Number(n))), !0);
      if (!this._accept(1)) return (this._backTo(t), !1);
      if (this._accept(6)) {
        let i = this._accept(9, !0);
        return i && this._accept(4) ? (e.appendChild(new d(Number(n), i)), !0) : (this._backTo(t), !1);
      }
      if (this._accept(11)) {
        let t = this._until(4);
        if (t) return (e.appendChild(new d(Number(n), void 0, t, void 0)), !0);
      } else if (this._accept(12)) {
        let t = this._until(4);
        if (t) return (e.appendChild(new d(Number(n), void 0, void 0, t)), !0);
      } else if (this._accept(13)) {
        let t = this._until(1);
        if (t) {
          let i = this._until(4);
          if (i) return (e.appendChild(new d(Number(n), void 0, t, i)), !0);
        }
      } else {
        let t = this._until(4);
        if (t) return (e.appendChild(new d(Number(n), void 0, void 0, t)), !0);
      }
      return (this._backTo(t), !1);
    }
    _parseAnything(e) {
      return (14 !== this._token.type && (e.appendChild(new s(this._scanner.tokenText(this._token))), this._accept(void 0), !0));
    }
  }
};