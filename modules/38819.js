module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Ao: () => c,
    Eq: () => M,
    Fb: () => d,
    K8: () => P,
    i6: () => T,
    uy: () => E
  });
  var n = i(1432),
    o = i(97295),
    s = i(72065);
  let r = n.WE || "";
  const a = new Map();
  (a.set("false", !1), a.set("true", !0), a.set("isMac", n.dz), a.set("isLinux", n.IJ), a.set("isWindows", n.ED), a.set("isWeb", n.$L), a.set("isMacNative", n.dz && !n.$L), a.set("isEdge", r.indexOf("Edg/") >= 0), a.set("isFirefox", r.indexOf("Firefox") >= 0), a.set("isChrome", r.indexOf("Chrome") >= 0), a.set("isSafari", r.indexOf("Safari") >= 0));
  const l = Object.prototype.hasOwnProperty;
  class c {
    static has(e) {
      return p.create(e);
    }
    static equals(e, t) {
      return f.create(e, t);
    }
    static regex(e, t) {
      return k.create(e, t);
    }
    static not(e) {
      return b.create(e);
    }
    static and(...e) {
      return D.create(e, null);
    }
    static or(...e) {
      return I.create(e, null, !0);
    }
    static deserialize(e, t = !1) {
      if (e) return this._deserializeOrExpression(e, t);
    }
    static _deserializeOrExpression(e, t) {
      let i = e.split("||");
      return I.create(i.map(e => this._deserializeAndExpression(e, t)), null, !0);
    }
    static _deserializeAndExpression(e, t) {
      let i = e.split("&&");
      return D.create(i.map(e => this._deserializeOne(e, t)), null);
    }
    static _deserializeOne(e, t) {
      if ((e = e.trim()).indexOf("!=") >= 0) {
        let i = e.split("!=");
        return _.create(i[0].trim(), this._deserializeValue(i[1], t));
      }
      if (e.indexOf("==") >= 0) {
        let i = e.split("==");
        return f.create(i[0].trim(), this._deserializeValue(i[1], t));
      }
      if (e.indexOf("=~") >= 0) {
        let i = e.split("=~");
        return k.create(i[0].trim(), this._deserializeRegexValue(i[1], t));
      }
      if (e.indexOf(" in ") >= 0) {
        let t = e.split(" in ");
        return m.create(t[0].trim(), t[1].trim());
      }
      if (/^[^<=>]+>=[^<=>]+$/.test(e)) {
        const t = e.split(">=");
        return C.create(t[0].trim(), t[1].trim());
      }
      if (/^[^<=>]+>[^<=>]+$/.test(e)) {
        const t = e.split(">");
        return y.create(t[0].trim(), t[1].trim());
      }
      if (/^[^<=>]+<=[^<=>]+$/.test(e)) {
        const t = e.split("<=");
        return S.create(t[0].trim(), t[1].trim());
      }
      if (/^[^<=>]+<[^<=>]+$/.test(e)) {
        const t = e.split("<");
        return x.create(t[0].trim(), t[1].trim());
      }
      return /^\!\s*/.test(e) ? b.create(e.substr(1).trim()) : p.create(e);
    }
    static _deserializeValue(e, t) {
      if ("true" === (e = e.trim())) return !0;
      if ("false" === e) return !1;
      let i = /^'([^']*)'$/.exec(e);
      return i ? i[1].trim() : e;
    }
    static _deserializeRegexValue(e, t) {
      if ((0, o.m5)(e)) {
        if (t) throw new Error("missing regexp-value for =~-expression");
        return (console.warn("missing regexp-value for =~-expression"), null);
      }
      let i = e.indexOf("/"),
        n = e.lastIndexOf("/");
      if (i === n || i < 0) {
        if (t) throw new Error(`bad regexp-value '${e}', missing /-enclosure`);
        return (console.warn(`bad regexp-value '${e}', missing /-enclosure`), null);
      }
      let s = e.slice(i + 1, n),
        r = "i" === e[n + 1] ? "i" : "";
      try {
        return new RegExp(s, r);
      } catch (i) {
        if (t) throw new Error(`bad regexp-value '${e}', parse error: ${i}`);
        return (console.warn(`bad regexp-value '${e}', parse error: ${i}`), null);
      }
    }
  }
  function d(e, t) {
    const i = e ? e.substituteConstants() : void 0,
      n = t ? t.substituteConstants() : void 0;
    return (!i && !n) || (!(!i || !n) && i.equals(n));
  }
  function h(e, t) {
    return e.cmp(t);
  }
  class u {
    constructor() {
      this.type = 0;
    }
    cmp(e) {
      return this.type - e.type;
    }
    equals(e) {
      return e.type === this.type;
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return !1;
    }
    serialize() {
      return "false";
    }
    keys() {
      return [];
    }
    negate() {
      return g.INSTANCE;
    }
  }
  u.INSTANCE = new u();
  class g {
    constructor() {
      this.type = 1;
    }
    cmp(e) {
      return this.type - e.type;
    }
    equals(e) {
      return e.type === this.type;
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return !0;
    }
    serialize() {
      return "true";
    }
    keys() {
      return [];
    }
    negate() {
      return u.INSTANCE;
    }
  }
  g.INSTANCE = new g();
  class p {
    constructor(e, t) {
      ((this.key = e), (this.negated = t), (this.type = 2));
    }
    static create(e, t = null) {
      const i = a.get(e);
      return "boolean" == typeof i ? i ? g.INSTANCE : u.INSTANCE : new p(e, t);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : A(this.key, e.key);
    }
    equals(e) {
      return e.type === this.type && this.key === e.key;
    }
    substituteConstants() {
      const e = a.get(this.key);
      return "boolean" == typeof e ? (e ? g.INSTANCE : u.INSTANCE) : this;
    }
    evaluate(e) {
      return !!e.getValue(this.key);
    }
    serialize() {
      return this.key;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = b.create(this.key, this)), this.negated);
    }
  }
  class f {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 4));
    }
    static create(e, t, i = null) {
      if ("boolean" == typeof t) return t ? p.create(e, i) : b.create(e, i);
      const n = a.get(e);
      if ("boolean" == typeof n) {
        return t === (n ? "true" : "false") ? g.INSTANCE : u.INSTANCE;
      }
      return new f(e, t, i);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      const e = a.get(this.key);
      if ("boolean" == typeof e) {
        const t = e ? "true" : "false";
        return this.value === t ? g.INSTANCE : u.INSTANCE;
      }
      return this;
    }
    evaluate(e) {
      return e.getValue(this.key) == this.value;
    }
    serialize() {
      return `${this.key} == '${this.value}'`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = _.create(this.key, this.value, this)), this.negated);
    }
  }
  class m {
    constructor(e, t) {
      ((this.key = e), (this.valueKey = t), (this.type = 10), (this.negated = null));
    }
    static create(e, t) {
      return new m(e, t);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.valueKey, e.key, e.valueKey);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.valueKey === e.valueKey);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      const t = e.getValue(this.valueKey),
        i = e.getValue(this.key);
      return Array.isArray(t) ? t.indexOf(i) >= 0 : "string" == typeof i && "object" == typeof t && null !== t && l.call(t, i);
    }
    serialize() {
      return `${this.key} in '${this.valueKey}'`;
    }
    keys() {
      return [this.key, this.valueKey];
    }
    negate() {
      return (this.negated || (this.negated = v.create(this)), this.negated);
    }
  }
  class v {
    constructor(e) {
      ((this._actual = e), (this.type = 11));
    }
    static create(e) {
      return new v(e);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : this._actual.cmp(e._actual);
    }
    equals(e) {
      return e.type === this.type && this._actual.equals(e._actual);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return !this._actual.evaluate(e);
    }
    serialize() {
      throw new Error("Method not implemented.");
    }
    keys() {
      return this._actual.keys();
    }
    negate() {
      return this._actual;
    }
  }
  class _ {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 5));
    }
    static create(e, t, i = null) {
      if ("boolean" == typeof t) return t ? b.create(e, i) : p.create(e, i);
      const n = a.get(e);
      if ("boolean" == typeof n) {
        return t === (n ? "true" : "false") ? u.INSTANCE : g.INSTANCE;
      }
      return new _(e, t, i);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      const e = a.get(this.key);
      if ("boolean" == typeof e) {
        const t = e ? "true" : "false";
        return this.value === t ? u.INSTANCE : g.INSTANCE;
      }
      return this;
    }
    evaluate(e) {
      return e.getValue(this.key) != this.value;
    }
    serialize() {
      return `${this.key} != '${this.value}'`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = f.create(this.key, this.value, this)), this.negated);
    }
  }
  class b {
    constructor(e, t) {
      ((this.key = e), (this.negated = t), (this.type = 3));
    }
    static create(e, t = null) {
      const i = a.get(e);
      return "boolean" == typeof i ? i ? u.INSTANCE : g.INSTANCE : new b(e, t);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : A(this.key, e.key);
    }
    equals(e) {
      return e.type === this.type && this.key === e.key;
    }
    substituteConstants() {
      const e = a.get(this.key);
      return "boolean" == typeof e ? (e ? u.INSTANCE : g.INSTANCE) : this;
    }
    evaluate(e) {
      return !e.getValue(this.key);
    }
    serialize() {
      return `!${this.key}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = p.create(this.key, this)), this.negated);
    }
  }
  function w(e, t) {
    if ("string" == typeof e) {
      const t = parseFloat(e);
      isNaN(t) || (e = t);
    }
    return "string" == typeof e || "number" == typeof e ? t(e) : u.INSTANCE;
  }
  class y {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 12));
    }
    static create(e, t, i = null) {
      return w(t, t => new y(e, t, i));
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return ("string" != typeof this.value && parseFloat(e.getValue(this.key)) > this.value);
    }
    serialize() {
      return `${this.key} > ${this.value}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = S.create(this.key, this.value, this)), this.negated);
    }
  }
  class C {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 13));
    }
    static create(e, t, i = null) {
      return w(t, t => new C(e, t, i));
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return ("string" != typeof this.value && parseFloat(e.getValue(this.key)) >= this.value);
    }
    serialize() {
      return `${this.key} >= ${this.value}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = x.create(this.key, this.value, this)), this.negated);
    }
  }
  class x {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 14));
    }
    static create(e, t, i = null) {
      return w(t, t => new x(e, t, i));
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return ("string" != typeof this.value && parseFloat(e.getValue(this.key)) < this.value);
    }
    serialize() {
      return `${this.key} < ${this.value}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = C.create(this.key, this.value, this)), this.negated);
    }
  }
  class S {
    constructor(e, t, i) {
      ((this.key = e), (this.value = t), (this.negated = i), (this.type = 15));
    }
    static create(e, t, i = null) {
      return w(t, t => new S(e, t, i));
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : O(this.key, this.value, e.key, e.value);
    }
    equals(e) {
      return (e.type === this.type && this.key === e.key && this.value === e.value);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return ("string" != typeof this.value && parseFloat(e.getValue(this.key)) <= this.value);
    }
    serialize() {
      return `${this.key} <= ${this.value}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = y.create(this.key, this.value, this)), this.negated);
    }
  }
  class k {
    constructor(e, t) {
      ((this.key = e), (this.regexp = t), (this.type = 7), (this.negated = null));
    }
    static create(e, t) {
      return new k(e, t);
    }
    cmp(e) {
      if (e.type !== this.type) return this.type - e.type;
      if (this.key < e.key) return -1;
      if (this.key > e.key) return 1;
      const t = this.regexp ? this.regexp.source : "",
        i = e.regexp ? e.regexp.source : "";
      return t < i ? -1 : t > i ? 1 : 0;
    }
    equals(e) {
      if (e.type === this.type) {
        const t = this.regexp ? this.regexp.source : "",
          i = e.regexp ? e.regexp.source : "";
        return this.key === e.key && t === i;
      }
      return !1;
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      let t = e.getValue(this.key);
      return !!this.regexp && this.regexp.test(t);
    }
    serialize() {
      const e = this.regexp ? `/${this.regexp.source}/${this.regexp.ignoreCase ? "i" : ""}` : "/invalid/";
      return `${this.key} =~ ${e}`;
    }
    keys() {
      return [this.key];
    }
    negate() {
      return (this.negated || (this.negated = L.create(this)), this.negated);
    }
  }
  class L {
    constructor(e) {
      ((this._actual = e), (this.type = 8));
    }
    static create(e) {
      return new L(e);
    }
    cmp(e) {
      return e.type !== this.type ? this.type - e.type : this._actual.cmp(e._actual);
    }
    equals(e) {
      return e.type === this.type && this._actual.equals(e._actual);
    }
    substituteConstants() {
      return this;
    }
    evaluate(e) {
      return !this._actual.evaluate(e);
    }
    serialize() {
      throw new Error("Method not implemented.");
    }
    keys() {
      return this._actual.keys();
    }
    negate() {
      return this._actual;
    }
  }
  function N(e) {
    let t = null;
    for (let i = 0, n = e.length; i < n; i++) {
      const n = e[i].substituteConstants();
      if (e[i] !== n && null === t) {
        t = [];
        for (let n = 0; n < i; n++) t[n] = e[n];
      }
      null !== t && (t[i] = n);
    }
    return null === t ? e : t;
  }
  class D {
    constructor(e, t) {
      ((this.expr = e), (this.negated = t), (this.type = 6));
    }
    static create(e, t) {
      return D._normalizeArr(e, t);
    }
    cmp(e) {
      if (e.type !== this.type) return this.type - e.type;
      if (this.expr.length < e.expr.length) return -1;
      if (this.expr.length > e.expr.length) return 1;
      for (let t = 0, i = this.expr.length; t < i; t++) {
        const i = h(this.expr[t], e.expr[t]);
        if (0 !== i) return i;
      }
      return 0;
    }
    equals(e) {
      if (e.type === this.type) {
        if (this.expr.length !== e.expr.length) return !1;
        for (let t = 0, i = this.expr.length; t < i; t++) if (!this.expr[t].equals(e.expr[t])) return !1;
        return !0;
      }
      return !1;
    }
    substituteConstants() {
      const e = N(this.expr);
      return e === this.expr ? this : D.create(e, this.negated);
    }
    evaluate(e) {
      for (let t = 0, i = this.expr.length; t < i; t++) if (!this.expr[t].evaluate(e)) return !1;
      return !0;
    }
    static _normalizeArr(e, t) {
      const i = [];
      let n = !1;
      for (const t of e) if (t) if (1 !== t.type) {
        if (0 === t.type) return u.INSTANCE;
        6 !== t.type ? i.push(t) : i.push(...t.expr);
      } else n = !0;
      if (0 === i.length && n) return g.INSTANCE;
      if (0 !== i.length) {
        if (1 === i.length) return i[0];
        i.sort(h);
        for (let e = 1; e < i.length; e++) i[e - 1].equals(i[e]) && (i.splice(e, 1), e--);
        if (1 === i.length) return i[0];
        for (; i.length > 1;) {
          const e = i[i.length - 1];
          if (9 !== e.type) break;
          i.pop();
          const t = i.pop(),
            n = 0 === i.length,
            o = I.create(e.expr.map(e => D.create([e, t], null)), null, n);
          o && (i.push(o), i.sort(h));
        }
        return 1 === i.length ? i[0] : new D(i, t);
      }
    }
    serialize() {
      return this.expr.map(e => e.serialize()).join(" && ");
    }
    keys() {
      const e = [];
      for (let t of this.expr) e.push(...t.keys());
      return e;
    }
    negate() {
      if (!this.negated) {
        const e = [];
        for (let t of this.expr) e.push(t.negate());
        this.negated = I.create(e, this, !0);
      }
      return this.negated;
    }
  }
  class I {
    constructor(e, t) {
      ((this.expr = e), (this.negated = t), (this.type = 9));
    }
    static create(e, t, i) {
      return I._normalizeArr(e, t, i);
    }
    cmp(e) {
      if (e.type !== this.type) return this.type - e.type;
      if (this.expr.length < e.expr.length) return -1;
      if (this.expr.length > e.expr.length) return 1;
      for (let t = 0, i = this.expr.length; t < i; t++) {
        const i = h(this.expr[t], e.expr[t]);
        if (0 !== i) return i;
      }
      return 0;
    }
    equals(e) {
      if (e.type === this.type) {
        if (this.expr.length !== e.expr.length) return !1;
        for (let t = 0, i = this.expr.length; t < i; t++) if (!this.expr[t].equals(e.expr[t])) return !1;
        return !0;
      }
      return !1;
    }
    substituteConstants() {
      const e = N(this.expr);
      return e === this.expr ? this : I.create(e, this.negated, !1);
    }
    evaluate(e) {
      for (let t = 0, i = this.expr.length; t < i; t++) if (this.expr[t].evaluate(e)) return !0;
      return !1;
    }
    static _normalizeArr(e, t, i) {
      let n = [],
        o = !1;
      if (e) {
        for (let t = 0, i = e.length; t < i; t++) {
          const i = e[t];
          if (i) if (0 !== i.type) {
            if (1 === i.type) return g.INSTANCE;
            9 !== i.type ? n.push(i) : (n = n.concat(i.expr));
          } else o = !0;
        }
        if (0 === n.length && o) return u.INSTANCE;
        n.sort(h);
      }
      if (0 !== n.length) {
        if (1 === n.length) return n[0];
        for (let e = 1; e < n.length; e++) n[e - 1].equals(n[e]) && (n.splice(e, 1), e--);
        if (1 === n.length) return n[0];
        if (i) {
          for (let e = 0; e < n.length; e++) for (let t = e + 1; t < n.length; t++) P(n[e], n[t]) && (n.splice(t, 1), t--);
          if (1 === n.length) return n[0];
        }
        return new I(n, t);
      }
    }
    serialize() {
      return this.expr.map(e => e.serialize()).join(" || ");
    }
    keys() {
      const e = [];
      for (let t of this.expr) e.push(...t.keys());
      return e;
    }
    negate() {
      if (!this.negated) {
        let e = [];
        for (let t of this.expr) e.push(t.negate());
        for (; e.length > 1;) {
          const t = e.shift(),
            i = e.shift(),
            n = [];
          for (const e of R(t)) for (const t of R(i)) n.push(D.create([e, t], null));
          const o = 0 === e.length;
          e.unshift(I.create(n, null, o));
        }
        this.negated = e[0];
      }
      return this.negated;
    }
  }
  class E extends p {
    constructor(e, t, i) {
      (super(e, null), (this._defaultValue = t), "object" == typeof i ? E._info.push(Object.assign(Object.assign({}, i), {
        key: e
      })) : !0 !== i && E._info.push({
        key: e,
        description: i,
        type: null != t ? typeof t : void 0
      }));
    }
    static all() {
      return E._info.values();
    }
    bindTo(e) {
      return e.createKey(this.key, this._defaultValue);
    }
    getValue(e) {
      return e.getContextKeyValue(this.key);
    }
    toNegated() {
      return this.negate();
    }
    isEqualTo(e) {
      return f.create(this.key, e);
    }
  }
  E._info = [];
  const T = (0, s.yh)("contextKeyService"),
    M = "setContext";
  function A(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function O(e, t, i, n) {
    return e < i ? -1 : e > i ? 1 : t < n ? -1 : t > n ? 1 : 0;
  }
  function P(e, t) {
    if (6 === t.type && 9 !== e.type && 6 !== e.type) for (const i of t.expr) if (e.equals(i)) return !0;
    const i = R(e.negate()).concat(R(t));
    i.sort(h);
    for (let e = 0; e < i.length; e++) {
      const t = i[e].negate();
      for (let n = e + 1; n < i.length; n++) {
        const e = i[n];
        if (t.equals(e)) return !0;
      }
    }
    return !1;
  }
  function R(e) {
    return 9 === e.type ? e.expr : [e];
  }
};