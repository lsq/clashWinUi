module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    X: () => d
  });
  var n = i(88289),
    o = i(5976),
    s = i(98401),
    r = i(65520),
    a = i(84973),
    l = i(27869),
    c = i(97781);
  class d {
    constructor(e) {
      ((this.options = e), (this.rangeHighlightDecorationId = void 0));
    }
    provide(e, t) {
      var i;
      const n = new o.SL();
      ((e.canAcceptInBackground = !!(null === (i = this.options) || void 0 === i ? void 0 : i.canAcceptInBackground)), (e.matchOnLabel = e.matchOnDescription = e.matchOnDetail = e.sortByLabel = !1));
      const s = n.add(new o.XK());
      return ((s.value = this.doProvide(e, t)), n.add(this.onDidActiveTextEditorControlChange(() => {
        ((s.value = void 0), (s.value = this.doProvide(e, t)));
      })), n);
    }
    doProvide(e, t) {
      const i = new o.SL(),
        a = this.activeTextEditorControl;
      if (a && this.canProvideWithTextEditor(a)) {
        const l = {
            editor: a
          },
          c = (0, r.Pi)(a);
        if (c) {
          let e = (0, s.f6)(a.saveViewState());
          (i.add(c.onDidChangeCursorPosition(() => {
            e = (0, s.f6)(a.saveViewState());
          })), (l.restoreViewState = () => {
            e && a === this.activeTextEditorControl && a.restoreViewState(e);
          }), i.add((0, n.I)(t.onCancellationRequested)(() => {
            var e;
            return null === (e = l.restoreViewState) || void 0 === e ? void 0 : e.call(l);
          })));
        }
        (i.add((0, o.OF)(() => this.clearDecorations(a))), i.add(this.provideWithTextEditor(l, e, t)));
      } else i.add(this.provideWithoutTextEditor(e, t));
      return i;
    }
    canProvideWithTextEditor(e) {
      return !0;
    }
    gotoLocation({
      editor: e
    }, t) {
      (e.setSelection(t.range), e.revealRangeInCenter(t.range, 0), t.preserveFocus || e.focus());
    }
    getModel(e) {
      var t;
      return (0, r.QI)(e) ? null === (t = e.getModel()) || void 0 === t ? void 0 : t.modified : e.getModel();
    }
    addDecorations(e, t) {
      e.changeDecorations(e => {
        const i = [];
        this.rangeHighlightDecorationId && (i.push(this.rangeHighlightDecorationId.overviewRulerDecorationId), i.push(this.rangeHighlightDecorationId.rangeHighlightId), (this.rangeHighlightDecorationId = void 0));
        const n = [{
            range: t,
            options: {
              description: "quick-access-range-highlight",
              className: "rangeHighlight",
              isWholeLine: !0
            }
          }, {
            range: t,
            options: {
              description: "quick-access-range-highlight-overview",
              overviewRuler: {
                color: (0, c.EN)(l.m9),
                position: a.sh.Full
              }
            }
          }],
          [o, s] = e.deltaDecorations(i, n);
        this.rangeHighlightDecorationId = {
          rangeHighlightId: o,
          overviewRulerDecorationId: s
        };
      });
    }
    clearDecorations(e) {
      const t = this.rangeHighlightDecorationId;
      t && (e.changeDecorations(e => {
        e.deltaDecorations([t.overviewRulerDecorationId, t.rangeHighlightId], []);
      }), (this.rangeHighlightDecorationId = void 0));
    }
  }
};