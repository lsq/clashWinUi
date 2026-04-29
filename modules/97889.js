const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => L
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(319),
    r = i.n(s),
    a = i(63038),
    l = i.n(a),
    c = i(59713),
    d = i.n(c),
    h = i(87757),
    u = i.n(h),
    g = i(11442),
    p = i(58583),
    f = i(23321),
    m = i(13338),
    v = i(83566),
    _ = i(8369),
    b = i(72574),
    w = i(11287),
    y = i(51792);
  (i(81518), i(24883), i(72298));
  function C(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(i), !0).forEach(function (t) {
        d()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const S = {
      name: "CodeView",
      props: [],
      components: {
        Hint: m.Z,
        EscCapture: b.Z,
        Navigator: w.Z
      },
      data: function () {
        return {
          editor: null,
          isShow: !1,
          resolve: null,
          reject: null,
          language: "",
          code: "",
          originCode: "",
          error: null,
          readOnly: !1,
          fontSize: 13,
          isSelecting: !1
        };
      },
      watch: {
        isShow: function (e) {
          e || (this.editor && this.editor.dispose(), (this.editor = null));
        }
      },
      computed: x(x(x({}, (0, f.mapState)({})), (0, f.mapGetters)(["theme"])), {}, {
        saveHint: function () {
          const Lg = new Language(modifyState.language);
          return (0, v.V5)() ? "Command+S" : Lg.save() + "(Ctrl+S)";
        },
        topKeys: function () {
          return this.code.split("\n").reduce(function (e, t, i) {
            var n = t.match(/^(?!\s|-)(.+):(\s|$)/) || [],
              o = l()(n, 2),
              s = (o[0], o[1]);
            return s ? [].concat(r()(e), [{
              key: s,
              index: i
            }]) : e;
          }, []);
        },
        topKeyNames: function () {
          return this.topKeys.map(function (e) {
            return e.key;
          });
        }
      }),
      methods: {
        show: function (e) {
          const Lg = new Language(modifyState.language);
          var t = this,
            i = e.code,
            n = e.language,
            o = void 0 === n ? "yaml" : n,
            s = e.readOnly,
            r = void 0 !== s && s,
            a = e.fontSize,
            l = void 0 === a ? 13 : a;
          return ((this.isShow = !0), (this.language = o), (this.readOnly = r), (this.error = ""), (this.code = i), (this.originCode = i), (this.fontSize = l || 13), this.$nextTick(function () {
            ((t.editor = p.editor.create(t.$refs.editor, {
              value: i,
              language: o,
              theme: "vs-dark",
              fontFamily: "Consolas, Monaco, Lucida Console, Liberation Mono,\n        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
              fontSize: t.fontSize,
              automaticLayout: !0,
              readOnly: r,
              minimap: {
                enabled: !1
              },
              contextmenu: !1,
              scrollbar: {
                verticalScrollbarSize: 12,
                horizontalScrollbarSize: 12
              },
              quickSuggestions: {
                other: !0,
                strings: !0
              },
              smoothScrolling: !0
            })), t.editor.onDidChangeModelContent(function () {
              t.code = t.editor.getValue();
            }), t.editor.addAction({
              id: "save",
              label: Lg.save(),
              run: function () {
                t.save();
              },
              keybindings: [p.KeyMod.CtrlCmd | p.KeyCode.KeyS]
            }), t.editor.setSelection(new p.Selection(1, 1, 1, 1)), t.editor.setScrollTop((0, y.b)((0, _.Ll)(t.code))), t.editor.onDidChangeCursorSelection(function () {
              t.isSelecting = !t.editor.getSelection().isEmpty();
            }), (t.editor.getContribution("editor.linkDetector").openerService._defaultExternalOpener.openExternal = _.fl), t.editor.focus());
          }), new Promise(function (e, i) {
            ((t.resolve = e), (t.reject = i));
          }));
        },
        handleSaveClick: function () {
          this.save();
        },
        handleAbortClick: function () {
          var e = this;
          const Lg = new Language(modifyState.language);
          return o()(u().mark(function t() {
            var i, n;
            return u().wrap(function (t) {
              for (;;) switch ((t.prev = t.next)) {
                case 0:
                  if (e.code === e.originCode) {
                    t.next = 9;
                    break;
                  }
                  return ((t.next = 3), (0, _.vC)({
                    type: "warning",
                    message: Lg.askSaveChange(),
                    buttons: [Lg.save(), Lg.dontSave(), Lg.cancel()]
                  }));
                case 3:
                  ((i = t.sent), 0 === (n = i.response) && e.save(), 1 === n && e.cancel(), (t.next = 10));
                  break;
                case 9:
                  e.cancel();
                case 10:
                case "end":
                  return t.stop();
              }
            }, t);
          }))();
        },
        saveScrollTop: function () {
          (0, y.F)((0, _.Ll)(this.code), this.editor.getScrollTop());
        },
        save: function () {
          if (this.resolve) try {
            ("yaml" === this.language && g.parse(this.code, {
              prettyErrors: !0,
              strict: !1
            }), this.resolve({
              code: this.code
            }), this.saveScrollTop(), (this.isShow = !1));
          } catch (e) {
            this.error = "Error: ".concat(e.message);
          }
        },
        cancel: function () {
          (this.reject(), this.saveScrollTop(), (this.isShow = !1));
        },
        handleNavigate: function (e) {
          var t = this.topKeys[e].index;
          this.editor.setScrollPosition({
            scrollTop: this.editor.getTopForLineNumber(t + 1)
          }, 0);
        }
      },
      mounted: function () {},
      beforeDestroy: function () {}
    },
    k = S;
  (i(14902), i(32225));
  const L = (0, i(51900).Z)(k, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return e.isShow ? t("EscCapture", {
      staticClass: "main-code-view line-numbers bg-[color:var(--mask-c)]",
      on: {
        esc: e.handleAbortClick,
        mousedown: function (t) {
          return t.target !== t.currentTarget ? null : e.handleAbortClick.apply(null, arguments);
        }
      }
    }, [t("div", {
      staticClass: "card"
    }, [t("div", {
      ref: "editor",
      staticClass: "editor"
    }), e._v(" "), e.isSelecting ? e._e() : t("navigator", {
      staticClass: "navigator",
      attrs: {
        list: e.topKeyNames
      },
      on: {
        select: e.handleNavigate
      }
    }), e._v(" "), e.error ? t("div", {
      staticClass: "error"
    }, [t("div", [e._v(e._s(e.error))]), e._v(" "), t("div", {
      staticClass: "clickable",
      on: {
        click: function (t) {
          e.error = "";
        }
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("close")])])]) : e._e(), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("Hint", {
      staticClass: "abort-btn clickable",
      attrs: {
        hint: Lg.quit()
      },
      on: {
        click: e.handleAbortClick
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("close")])]), e._v(" "), e.readOnly ? e._e() : t("Hint", {
      staticClass: "save-btn clickable",
      attrs: {
        hint: e.saveHint
      },
      on: {
        click: e.handleSaveClick
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("save")])])], 1)], 1)]) : e._e();
  }, [], !1, null, "35f836ea", null).exports;
};