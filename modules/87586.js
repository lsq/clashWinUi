module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    InlayHintsController: () => D,
    getInlayHints: () => L
  }));
  var n = i(15393),
    o = i(71050),
    s = i(17301),
    r = i(89954),
    a = i(5976),
    l = i(43702),
    c = i(98401),
    d = i(70666),
    h = i(16830),
    u = i(11640),
    g = i(64141),
    p = i(50187),
    f = i(24314),
    m = i(44101),
    v = i(21036),
    _ = i(88216),
    b = i(94565),
    w = i(73910),
    y = i(97781),
    C = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    x = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
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
  class k {
    constructor() {
      this._data = new l.Y9();
    }
    push(e, t) {
      const i = this._data.get(e.uri);
      void 0 === i ? this._data.set(e.uri, new Set([t])) : i.add(t);
    }
    pop(e, t) {
      const i = this._data.get(e.uri);
      i && (i.delete(t), 0 === i.size && this._data.delete(e.uri));
    }
    has(e, t) {
      var i;
      return Boolean(null === (i = this._data.get(e.uri)) || void 0 === i ? void 0 : i.has(t));
    }
  }
  function L(e, t, i, n) {
    return S(this, void 0, void 0, function* () {
      const o = [],
        r = m.mX.ordered(e).reverse().map(r => t.map(t => S(this, void 0, void 0, function* () {
          try {
            i.push(e, r);
            const s = yield r.provideInlayHints(e, t, n);
            (null == s ? void 0 : s.length) && o.push(s.filter(e => t.containsPosition(e.position)));
          } catch (e) {
            (0, s.Cp)(e);
          } finally {
            i.pop(e, r);
          }
        })));
      return (yield Promise.all(r.flat()), o.flat().sort((e, t) => p.L.compare(e.position, t.position)));
    });
  }
  class N {
    constructor() {
      this._entries = new l.z6(50);
    }
    get(e) {
      const t = N._key(e);
      return this._entries.get(t);
    }
    set(e, t) {
      const i = N._key(e);
      this._entries.set(i, t);
    }
    static _key(e) {
      return `${e.uri.toString()}/${e.getVersionId()}`;
    }
  }
  let D = class e {
    constructor(t, i) {
      ((this._editor = t), (this._codeEditorService = i), (this._decorationOwnerId = ++e._decorationOwnerIdPool), (this._disposables = new a.SL()), (this._sessionDisposables = new a.SL()), (this._getInlayHintsDelays = new v.Y(m.mX, 25, 500)), (this._cache = new N()), (this._decorations = new Map()), this._disposables.add(m.mX.onDidChange(() => this._update())), this._disposables.add(t.onDidChangeModel(() => this._update())), this._disposables.add(t.onDidChangeModelLanguage(() => this._update())), this._disposables.add(t.onDidChangeConfiguration(e => {
        e.hasChanged(125) && this._update();
      })), this._update());
    }
    dispose() {
      (this._sessionDisposables.dispose(), this._removeAllDecorations(), this._disposables.dispose());
    }
    _update() {
      if ((this._sessionDisposables.clear(), this._removeAllDecorations(), !this._editor.getOption(125).enabled)) return;
      const e = this._editor.getModel();
      if (!e || !m.mX.has(e)) return;
      const t = this._cache.get(e);
      t && this._updateHintsDecorators([e.getFullModelRange()], t);
      const i = new k(),
        s = new n.pY(() => S(this, void 0, void 0, function* () {
          const t = Date.now(),
            n = new o.A();
          this._sessionDisposables.add((0, a.OF)(() => n.dispose(!0)));
          const r = this._getHintsRanges(),
            l = yield L(e, r, i, n.token);
          ((s.delay = this._getInlayHintsDelays.update(e, Date.now() - t)), n.token.isCancellationRequested || (this._updateHintsDecorators(r, l), this._cache.set(e, Array.from(this._decorations.values()).map(e => e.hint))));
        }), this._getInlayHintsDelays.get(e));
      (this._sessionDisposables.add(s), this._sessionDisposables.add(this._editor.onDidChangeModelContent(() => s.schedule())), this._disposables.add(this._editor.onDidScrollChange(() => s.schedule())), s.schedule());
      const r = new a.SL();
      this._sessionDisposables.add(r);
      for (const t of m.mX.all(e)) "function" == typeof t.onDidChangeInlayHints && r.add(t.onDidChangeInlayHints(() => {
        i.has(e, t) || s.schedule();
      }));
    }
    _getHintsRanges() {
      const e = this._editor.getModel(),
        t = this._editor.getVisibleRangesPlusViewportAboveBelow(),
        i = [];
      for (const n of t.sort(f.e.compareRangesUsingStarts)) {
        const t = e.validateRange(new f.e(n.startLineNumber - 30, n.startColumn, n.endLineNumber + 30, n.endColumn));
        0 !== i.length && f.e.areIntersectingOrTouching(i[i.length - 1], t) ? (i[i.length - 1] = f.e.plusRange(i[i.length - 1], t)) : i.push(t);
      }
      return i;
    }
    _updateHintsDecorators(e, t) {
      const {
          fontSize: i,
          fontFamily: n
        } = this._getLayoutInfo(),
        o = this._editor.getModel(),
        s = [],
        a = [],
        l = "--code-editorInlayHintsFontFamily";
      this._editor.getContainerDomNode().style.setProperty(l, n);
      for (const e of t) {
        const {
            text: t,
            position: n,
            whitespaceBefore: c,
            whitespaceAfter: d
          } = e,
          h = c ? (i / 3) | 0 : 0,
          u = d ? (i / 3) | 0 : 0,
          p = {
            contentText: E(t),
            fontSize: `${i}px`,
            margin: `0px ${u}px 0px ${h}px`,
            fontFamily: `var(${l}), ${g.hL.fontFamily}`,
            padding: `1px ${0 | Math.max(1, i / 4)}px`,
            borderRadius: ((i / 4) | 0) + "px",
            verticalAlign: "middle",
            backgroundColor: (0, y.EN)(w.Pp),
            color: (0, y.EN)(w.VV)
          };
        e.kind === m.gl.Parameter ? ((p.backgroundColor = (0, y.EN)(w.ph)), (p.color = (0, y.EN)(w.HC))) : e.kind === m.gl.Type && ((p.backgroundColor = (0, y.EN)(w.bK)), (p.color = (0, y.EN)(w.hX)));
        let v = {
            beforeInjectedText: Object.assign(Object.assign({}, p), {
              affectsLetterSpacing: !0
            })
          },
          _ = f.e.fromPositions(n),
          b = o.getWordAtPosition(n),
          C = !1;
        b && (b.endColumn === n.column ? ((v.afterInjectedText = v.beforeInjectedText), (v.beforeInjectedText = void 0), (C = !0), (_ = I(b, n.lineNumber))) : b.startColumn === n.column && ((C = !0), (_ = I(b, n.lineNumber))));
        const x = "inlayHints-" + (0, r.vp)(v).toString(16);
        (this._codeEditorService.registerDecorationType("inlay-hints-controller", x, v, void 0, this._editor), s.push(x));
        if (a.push({
          range: _,
          options: Object.assign(Object.assign({}, this._codeEditorService.resolveDecorationOptions(x, !0)), {
            showIfCollapsed: !C,
            stickiness: 0
          })
        }) > 1500) break;
      }
      const c = [];
      for (const t of e) for (const {
        id: e
      } of o.getDecorationsInRange(t, this._decorationOwnerId, !0)) {
        const t = this._decorations.get(e);
        t && (c.push(e), this._codeEditorService.removeDecorationType(t.decorationTypeId), this._decorations.delete(e));
      }
      const d = o.deltaDecorations(c, a, this._decorationOwnerId);
      for (let e = 0; e < d.length; e++) this._decorations.set(d[e], {
        hint: t[e],
        decorationTypeId: s[e]
      });
    }
    _getLayoutInfo() {
      const e = this._editor.getOption(125),
        t = this._editor.getOption(45);
      let i = e.fontSize;
      (!i || i < 5 || i > t) && (i = (0.9 * t) | 0);
      return {
        fontSize: i,
        fontFamily: e.fontFamily || this._editor.getOption(42)
      };
    }
    _removeAllDecorations() {
      this._editor.deltaDecorations(Array.from(this._decorations.keys()), []);
      for (let e of this._decorations.values()) this._codeEditorService.removeDecorationType(e.decorationTypeId);
      this._decorations.clear();
    }
  };
  function I(e, t) {
    return new f.e(t, e.startColumn, t, e.endColumn);
  }
  function E(e) {
    return e.replace(/[ \t]/g, " ");
  }
  ((D.ID = "editor.contrib.InlayHints"), (D._decorationOwnerIdPool = 0), (D = C([x(1, u.$)], D)), (0, h._K)(D.ID, D), b.P.registerCommand("_executeInlayHintProvider", (e, ...t) => S(void 0, void 0, void 0, function* () {
    const [i, n] = t;
    ((0, c.p_)(d.o.isUri(i)), (0, c.p_)(f.e.isIRange(n)));
    const s = yield e.get(_.S).createModelReference(i);
    try {
      return yield L(s.object.textEditorModel, [f.e.lift(n)], new k(), o.T.None);
    } finally {
      s.dispose();
    }
  })));
};