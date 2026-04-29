module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    o: () => u,
    q: () => _
  });
  var n = i(88721),
    o = i(1432);
  const s = /^\w[\w\d+.-]*$/,
    r = /^\//,
    a = /^\/\//;
  function l(e, t) {
    if (!e.scheme && t) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
    if (e.scheme && !s.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (e.path) if (e.authority) {
      if (!r.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
    } else if (a.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
  }
  const c = "",
    d = "/",
    h = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
  class u {
    constructor(e, t, i, n, o, s = !1) {
      "object" == typeof e ? ((this.scheme = e.scheme || c), (this.authority = e.authority || c), (this.path = e.path || c), (this.query = e.query || c), (this.fragment = e.fragment || c)) : ((this.scheme = (function (e, t) {
        return e || t ? e : "file";
      })(e, s)), (this.authority = t || c), (this.path = (function (e, t) {
        switch (e) {
          case "https":
          case "http":
          case "file":
            t ? t[0] !== d && (t = d + t) : (t = d);
        }
        return t;
      })(this.scheme, i || c)), (this.query = n || c), (this.fragment = o || c), l(this, s));
    }
    static isUri(e) {
      return (e instanceof u || (!!e && "string" == typeof e.authority && "string" == typeof e.fragment && "string" == typeof e.path && "string" == typeof e.query && "string" == typeof e.scheme && "string" == typeof e.fsPath && "function" == typeof e.with && "function" == typeof e.toString));
    }
    get fsPath() {
      return _(this, !1);
    }
    with(e) {
      if (!e) return this;
      let {
        scheme: t,
        authority: i,
        path: n,
        query: o,
        fragment: s
      } = e;
      return (void 0 === t ? (t = this.scheme) : null === t && (t = c), void 0 === i ? (i = this.authority) : null === i && (i = c), void 0 === n ? (n = this.path) : null === n && (n = c), void 0 === o ? (o = this.query) : null === o && (o = c), void 0 === s ? (s = this.fragment) : null === s && (s = c), t === this.scheme && i === this.authority && n === this.path && o === this.query && s === this.fragment ? this : new p(t, i, n, o, s));
    }
    static parse(e, t = !1) {
      const i = h.exec(e);
      return i ? new p(i[2] || c, C(i[4] || c), C(i[5] || c), C(i[7] || c), C(i[9] || c), t) : new p(c, c, c, c, c);
    }
    static file(e) {
      let t = c;
      if ((o.ED && (e = e.replace(/\\/g, d)), e[0] === d && e[1] === d)) {
        const i = e.indexOf(d, 2);
        -1 === i ? ((t = e.substring(2)), (e = d)) : ((t = e.substring(2, i)), (e = e.substring(i) || d));
      }
      return new p("file", t, e, c, c);
    }
    static from(e) {
      const t = new p(e.scheme, e.authority, e.path, e.query, e.fragment);
      return (l(t, !0), t);
    }
    static joinPath(e, ...t) {
      if (!e.path) throw new Error("[UriError]: cannot call joinPath on URI without path");
      let i;
      return ((i = o.ED && "file" === e.scheme ? u.file(n.Ku.join(_(e, !0), ...t)).path : n.KR.join(e.path, ...t)), e.with({
        path: i
      }));
    }
    toString(e = !1) {
      return b(this, e);
    }
    toJSON() {
      return this;
    }
    static revive(e) {
      if (e) {
        if (e instanceof u) return e;
        {
          const t = new p(e);
          return ((t._formatted = e.external), (t._fsPath = e._sep === g ? e.fsPath : null), t);
        }
      }
      return e;
    }
  }
  const g = o.ED ? 1 : void 0;
  class p extends u {
    constructor() {
      (super(...arguments), (this._formatted = null), (this._fsPath = null));
    }
    get fsPath() {
      return (this._fsPath || (this._fsPath = _(this, !1)), this._fsPath);
    }
    toString(e = !1) {
      return e ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted);
    }
    toJSON() {
      const e = {
        $mid: 1
      };
      return (this._fsPath && ((e.fsPath = this._fsPath), (e._sep = g)), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e);
    }
  }
  const f = {
    58: "%3A",
    47: "%2F",
    63: "%3F",
    35: "%23",
    91: "%5B",
    93: "%5D",
    64: "%40",
    33: "%21",
    36: "%24",
    38: "%26",
    39: "%27",
    40: "%28",
    41: "%29",
    42: "%2A",
    43: "%2B",
    44: "%2C",
    59: "%3B",
    61: "%3D",
    32: "%20"
  };
  function m(e, t) {
    let i,
      n = -1;
    for (let o = 0; o < e.length; o++) {
      const s = e.charCodeAt(o);
      if ((s >= 97 && s <= 122) || (s >= 65 && s <= 90) || (s >= 48 && s <= 57) || 45 === s || 46 === s || 95 === s || 126 === s || (t && 47 === s)) (-1 !== n && ((i += encodeURIComponent(e.substring(n, o))), (n = -1)), void 0 !== i && (i += e.charAt(o)));else {
        void 0 === i && (i = e.substr(0, o));
        const t = f[s];
        void 0 !== t ? (-1 !== n && ((i += encodeURIComponent(e.substring(n, o))), (n = -1)), (i += t)) : -1 === n && (n = o);
      }
    }
    return (-1 !== n && (i += encodeURIComponent(e.substring(n))), void 0 !== i ? i : e);
  }
  function v(e) {
    let t;
    for (let i = 0; i < e.length; i++) {
      const n = e.charCodeAt(i);
      35 === n || 63 === n ? (void 0 === t && (t = e.substr(0, i)), (t += f[n])) : void 0 !== t && (t += e[i]);
    }
    return void 0 !== t ? t : e;
  }
  function _(e, t) {
    let i;
    return ((i = e.authority && e.path.length > 1 && "file" === e.scheme ? `//${e.authority}${e.path}` : 47 === e.path.charCodeAt(0) && ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) || (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) && 58 === e.path.charCodeAt(2) ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path), o.ED && (i = i.replace(/\//g, "\\")), i);
  }
  function b(e, t) {
    const i = t ? v : m;
    let n = "",
      {
        scheme: o,
        authority: s,
        path: r,
        query: a,
        fragment: l
      } = e;
    if ((o && ((n += o), (n += ":")), (s || "file" === o) && ((n += d), (n += d)), s)) {
      let e = s.indexOf("@");
      if (-1 !== e) {
        const t = s.substr(0, e);
        ((s = s.substr(e + 1)), (e = t.indexOf(":")), -1 === e ? (n += i(t, !1)) : ((n += i(t.substr(0, e), !1)), (n += ":"), (n += i(t.substr(e + 1), !1))), (n += "@"));
      }
      ((s = s.toLowerCase()), (e = s.indexOf(":")), -1 === e ? (n += i(s, !1)) : ((n += i(s.substr(0, e), !1)), (n += s.substr(e))));
    }
    if (r) {
      if (r.length >= 3 && 47 === r.charCodeAt(0) && 58 === r.charCodeAt(2)) {
        const e = r.charCodeAt(1);
        e >= 65 && e <= 90 && (r = `/${String.fromCharCode(e + 32)}:${r.substr(3)}`);
      } else if (r.length >= 2 && 58 === r.charCodeAt(1)) {
        const e = r.charCodeAt(0);
        e >= 65 && e <= 90 && (r = `${String.fromCharCode(e + 32)}:${r.substr(2)}`);
      }
      n += i(r, !0);
    }
    return (a && ((n += "?"), (n += i(a, !1))), l && ((n += "#"), (n += t ? l : m(l, !1))), n);
  }
  function w(e) {
    try {
      return decodeURIComponent(e);
    } catch (t) {
      return e.length > 3 ? e.substr(0, 3) + w(e.substr(3)) : e;
    }
  }
  const y = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function C(e) {
    return e.match(y) ? e.replace(y, e => w(e)) : e;
  }
};