module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    xC: () => N,
    Zg: () => k,
    x$: () => D,
    Qq: () => E,
    Qs: () => M
  });
  var n = i(85152),
    o = i(9488),
    s = i(71050),
    r = i(17301),
    a = i(53725),
    l = i(91741),
    c = i(98401),
    d = i(70666),
    h = i(39925),
    u = i(65520),
    g = i(50187),
    p = i(24314),
    f = i(3860),
    m = i(44101),
    v = i(90469),
    _ = i(88216),
    b = i(69939),
    w = i(63580),
    y = i(94565);
  class C {
    constructor(e) {
      ((this.value = e), (this._lower = e.toLowerCase()));
    }
    static toKey(e) {
      return "string" == typeof e ? e.toLowerCase() : e._lower;
    }
  }
  var x = i(72065),
    S = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  function k(e) {
    if (!(e = e.filter(e => e.range)).length) return;
    let {
      range: t
    } = e[0];
    for (let i = 1; i < e.length; i++) t = p.e.plusRange(t, e[i].range);
    const {
      startLineNumber: i,
      endLineNumber: o
    } = t;
    i === o ? 1 === e.length ? (0, n.Z9)(w.N("hint11", "Made 1 formatting edit on line {0}", i)) : (0, n.Z9)(w.N("hintn1", "Made {0} formatting edits on line {1}", e.length, i)) : 1 === e.length ? (0, n.Z9)(w.N("hint1n", "Made 1 formatting edit between lines {0} and {1}", i, o)) : (0, n.Z9)(w.N("hintnn", "Made {0} formatting edits between lines {1} and {2}", e.length, i, o));
  }
  function L(e) {
    const t = [],
      i = new Set(),
      n = m.Az.ordered(e);
    for (const e of n) (t.push(e), e.extensionId && i.add(C.toKey(e.extensionId)));
    const o = m.vN.ordered(e);
    for (const e of o) {
      if (e.extensionId) {
        if (i.has(C.toKey(e.extensionId))) continue;
        i.add(C.toKey(e.extensionId));
      }
      t.push({
        displayName: e.displayName,
        extensionId: e.extensionId,
        provideDocumentFormattingEdits: (t, i, n) => e.provideDocumentRangeFormattingEdits(t, t.getFullModelRange(), i, n)
      });
    }
    return t;
  }
  class N {
    static setFormatterSelector(e) {
      return {
        dispose: N._selectors.unshift(e)
      };
    }
    static select(e, t, i) {
      return S(this, void 0, void 0, function* () {
        if (0 === e.length) return;
        const n = a.$.first(N._selectors);
        return n ? yield n(e, t, i) : void 0;
      });
    }
  }
  function D(e, t, i, n, o, s) {
    return S(this, void 0, void 0, function* () {
      const r = e.get(x.TG),
        a = (0, u.CL)(t) ? t.getModel() : t,
        l = m.vN.ordered(a),
        c = yield N.select(l, a, n);
      c && (o.report(c), yield r.invokeFunction(I, c, t, i, s));
    });
  }
  function I(e, t, i, n, s) {
    return S(this, void 0, void 0, function* () {
      const r = e.get(v.p);
      let a, l;
      (0, u.CL)(i) ? ((a = i.getModel()), (l = new h.Dl(i, 5, void 0, s))) : ((a = i), (l = new h.YQ(i, s)));
      let c = [],
        d = 0;
      for (let e of (0, o._2)(n).sort(p.e.compareRangesUsingStarts)) d > 0 && p.e.areIntersectingOrTouching(c[d - 1], e) ? (c[d - 1] = p.e.fromPositions(c[d - 1].getStartPosition(), e.getEndPosition())) : (d = c.push(e));
      const g = e => S(this, void 0, void 0, function* () {
          return ((yield t.provideDocumentRangeFormattingEdits(a, e, a.getFormattingOptions(), l.token)) || []);
        }),
        m = (e, t) => {
          if (!e.length || !t.length) return !1;
          const i = e.reduce((e, t) => p.e.plusRange(e, t.range), e[0].range);
          if (!t.some(e => p.e.intersectRanges(i, e.range))) return !1;
          for (let i of e) for (let e of t) if (p.e.intersectRanges(i.range, e.range)) return !0;
          return !1;
        },
        _ = [],
        w = [];
      try {
        for (let e of c) {
          if (l.token.isCancellationRequested) return !0;
          w.push(yield g(e));
        }
        for (let e = 0; e < c.length; ++e) for (let t = e + 1; t < c.length; ++t) {
          if (l.token.isCancellationRequested) return !0;
          if (m(w[e], w[t])) {
            const i = p.e.plusRange(c[e], c[t]),
              n = yield g(i);
            (c.splice(t, 1), c.splice(e, 1), c.push(i), w.splice(t, 1), w.splice(e, 1), w.push(n), (e = 0), (t = 0));
          }
        }
        for (let e of w) {
          if (l.token.isCancellationRequested) return !0;
          const t = yield r.computeMoreMinimalEdits(a.uri, e);
          t && _.push(...t);
        }
      } finally {
        l.dispose();
      }
      if (0 === _.length) return !1;
      if ((0, u.CL)(i)) (b.V.execute(i, _, !0), k(_), i.revealPositionInCenterIfOutsideViewport(i.getPosition(), 1));else {
        const [{
            range: e
          }] = _,
          t = new f.Y(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn);
        a.pushEditOperations([t], _.map(e => ({
          text: e.text,
          range: p.e.lift(e.range),
          forceMoveMarkers: !0
        })), e => {
          for (const {
            range: i
          } of e) if (p.e.areIntersectingOrTouching(i, t)) return [new f.Y(i.startLineNumber, i.startColumn, i.endLineNumber, i.endColumn)];
          return null;
        });
      }
      return !0;
    });
  }
  function E(e, t, i, n, o) {
    return S(this, void 0, void 0, function* () {
      const s = e.get(x.TG),
        r = (0, u.CL)(t) ? t.getModel() : t,
        a = L(r),
        l = yield N.select(a, r, i);
      l && (n.report(l), yield s.invokeFunction(T, l, t, i, o));
    });
  }
  function T(e, t, i, n, o) {
    return S(this, void 0, void 0, function* () {
      const s = e.get(v.p);
      let r, a, l;
      (0, u.CL)(i) ? ((r = i.getModel()), (a = new h.Dl(i, 5, void 0, o))) : ((r = i), (a = new h.YQ(i, o)));
      try {
        const e = yield t.provideDocumentFormattingEdits(r, r.getFormattingOptions(), a.token);
        if (((l = yield s.computeMoreMinimalEdits(r.uri, e)), a.token.isCancellationRequested)) return !0;
      } finally {
        a.dispose();
      }
      if (!l || 0 === l.length) return !1;
      if ((0, u.CL)(i)) (b.V.execute(i, l, 2 !== n), 2 !== n && (k(l), i.revealPositionInCenterIfOutsideViewport(i.getPosition(), 1)));else {
        const [{
            range: e
          }] = l,
          t = new f.Y(e.startLineNumber, e.startColumn, e.endLineNumber, e.endColumn);
        r.pushEditOperations([t], l.map(e => ({
          text: e.text,
          range: p.e.lift(e.range),
          forceMoveMarkers: !0
        })), e => {
          for (const {
            range: i
          } of e) if (p.e.areIntersectingOrTouching(i, t)) return [new f.Y(i.startLineNumber, i.startColumn, i.endLineNumber, i.endColumn)];
          return null;
        });
      }
      return !0;
    });
  }
  function M(e, t, i, n, o) {
    const a = m.ln.ordered(t);
    return 0 === a.length || a[0].autoFormatTriggerCharacters.indexOf(n) < 0 ? Promise.resolve(void 0) : Promise.resolve(a[0].provideOnTypeFormattingEdits(t, i, n, o, s.T.None)).catch(r.Cp).then(i => e.computeMoreMinimalEdits(t.uri, i));
  }
  ((N._selectors = new l.S()), y.P.registerCommand("_executeFormatRangeProvider", function (e, ...t) {
    return S(this, void 0, void 0, function* () {
      const [i, n, a] = t;
      ((0, c.p_)(d.o.isUri(i)), (0, c.p_)(p.e.isIRange(n)));
      const l = e.get(_.S),
        h = e.get(v.p),
        u = yield l.createModelReference(i);
      try {
        return (function (e, t, i, n, s) {
          return S(this, void 0, void 0, function* () {
            const a = m.vN.ordered(t);
            for (const l of a) {
              let a = yield Promise.resolve(l.provideDocumentRangeFormattingEdits(t, i, n, s)).catch(r.Cp);
              if ((0, o.Of)(a)) return yield e.computeMoreMinimalEdits(t.uri, a);
            }
          });
        })(h, u.object.textEditorModel, p.e.lift(n), a, s.T.None);
      } finally {
        u.dispose();
      }
    });
  }), y.P.registerCommand("_executeFormatDocumentProvider", function (e, ...t) {
    return S(this, void 0, void 0, function* () {
      const [i, n] = t;
      (0, c.p_)(d.o.isUri(i));
      const a = e.get(_.S),
        l = e.get(v.p),
        h = yield a.createModelReference(i);
      try {
        return (function (e, t, i, n) {
          return S(this, void 0, void 0, function* () {
            const s = L(t);
            for (const a of s) {
              let s = yield Promise.resolve(a.provideDocumentFormattingEdits(t, i, n)).catch(r.Cp);
              if ((0, o.Of)(s)) return yield e.computeMoreMinimalEdits(t.uri, s);
            }
          });
        })(l, h.object.textEditorModel, n, s.T.None);
      } finally {
        h.dispose();
      }
    });
  }), y.P.registerCommand("_executeFormatOnTypeProvider", function (e, ...t) {
    return S(this, void 0, void 0, function* () {
      const [i, n, o, s] = t;
      ((0, c.p_)(d.o.isUri(i)), (0, c.p_)(g.L.isIPosition(n)), (0, c.p_)("string" == typeof o));
      const r = e.get(_.S),
        a = e.get(v.p),
        l = yield r.createModelReference(i);
      try {
        return M(a, l.object.textEditorModel, g.L.lift(n), o, s);
      } finally {
        l.dispose();
      }
    });
  }));
};