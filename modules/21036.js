module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    c: () => g,
    Y: () => m
  });
  var n = i(4669),
    o = i(89954),
    s = i(5976),
    r = i(43702),
    a = i(59870),
    l = i(14118),
    c = i(88721);
  function d(e, t, i, n) {
    if (Array.isArray(e)) {
      let o = 0;
      for (const s of e) {
        const e = d(s, t, i, n);
        if (10 === e) return e;
        e > o && (o = e);
      }
      return o;
    }
    if ("string" == typeof e) return n ? ("*" === e ? 5 : e === i ? 10 : 0) : 0;
    if (e) {
      const {
        language: o,
        pattern: s,
        scheme: r,
        hasAccessToAllModels: a
      } = e;
      if (!n && !a) return 0;
      let d = 0;
      if (r) if (r === t.scheme) d = 10;else {
        if ("*" !== r) return 0;
        d = 5;
      }
      if (o) if (o === i) d = 10;else {
        if ("*" !== o) return 0;
        d = Math.max(d, 5);
      }
      if (s) {
        let e;
        if (((e = "string" == typeof s ? s : Object.assign(Object.assign({}, s), {
          base: (0, c.Fv)(s.base)
        })), e !== t.fsPath && !(0, l.EQ)(e, t.fsPath))) return 0;
        d = 10;
      }
      return d;
    }
    return 0;
  }
  var h = i(51200);
  function u(e) {
    return ("string" != typeof e && (Array.isArray(e) ? e.every(u) : !!e.exclusive));
  }
  class g {
    constructor() {
      ((this._clock = 0), (this._entries = []), (this._onDidChange = new n.Q5()));
    }
    get onDidChange() {
      return this._onDidChange.event;
    }
    register(e, t) {
      let i = {
        selector: e,
        provider: t,
        _score: -1,
        _time: this._clock++
      };
      return (this._entries.push(i), (this._lastCandidate = void 0), this._onDidChange.fire(this._entries.length), (0, s.OF)(() => {
        if (i) {
          let e = this._entries.indexOf(i);
          e >= 0 && (this._entries.splice(e, 1), (this._lastCandidate = void 0), this._onDidChange.fire(this._entries.length), (i = void 0));
        }
      }));
    }
    has(e) {
      return this.all(e).length > 0;
    }
    all(e) {
      if (!e) return [];
      this._updateScores(e);
      const t = [];
      for (let e of this._entries) e._score > 0 && t.push(e.provider);
      return t;
    }
    ordered(e) {
      const t = [];
      return (this._orderedForEach(e, e => t.push(e.provider)), t);
    }
    orderedGroups(e) {
      const t = [];
      let i, n;
      return (this._orderedForEach(e, e => {
        i && n === e._score ? i.push(e.provider) : ((n = e._score), (i = [e.provider]), t.push(i));
      }), t);
    }
    _orderedForEach(e, t) {
      if (e) {
        this._updateScores(e);
        for (const e of this._entries) e._score > 0 && t(e);
      }
    }
    _updateScores(e) {
      let t = {
        uri: e.uri.toString(),
        language: e.getLanguageId()
      };
      if (!this._lastCandidate || this._lastCandidate.language !== t.language || this._lastCandidate.uri !== t.uri) {
        this._lastCandidate = t;
        for (let t of this._entries) if (((t._score = d(t.selector, e.uri, e.getLanguageId(), (0, h.p)(e))), u(t.selector) && t._score > 0)) {
          for (let e of this._entries) e._score = 0;
          t._score = 1e3;
          break;
        }
        this._entries.sort(g._compareByScoreAndTime);
      }
    }
    static _compareByScoreAndTime(e, t) {
      return e._score < t._score ? 1 : e._score > t._score ? -1 : e._time < t._time ? 1 : e._time > t._time ? -1 : 0;
    }
  }
  const p = new WeakMap();
  let f = 0;
  class m {
    constructor(e, t, i = Number.MAX_SAFE_INTEGER) {
      ((this._registry = e), (this.min = t), (this.max = i), (this._cache = new r.z6(50, 0.7)));
    }
    _key(e) {
      return (e.id + this._registry.all(e).reduce((e, t) => (0, o.SP)((function (e) {
        let t = p.get(e);
        return (void 0 === t && ((t = ++f), p.set(e, t)), t);
      })(t), e), 0));
    }
    _clamp(e) {
      return void 0 === e ? this.min : Math.min(this.max, Math.max(this.min, Math.floor(1.3 * e)));
    }
    get(e) {
      const t = this._key(e),
        i = this._cache.get(t);
      return this._clamp(null == i ? void 0 : i.value);
    }
    update(e, t) {
      const i = this._key(e);
      let n = this._cache.get(i);
      return (n || ((n = new a.n()), this._cache.set(i, n)), n.update(t), this.get(e));
    }
  }
};