const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => f
  }));
  var n = i(48926),
    o = i.n(n),
    s = i(87757),
    r = i.n(s),
    a = i(58583),
    l = i(72574),
    c = i(13338),
    d = i(83566),
    h = i(8369),
    u = (i(72298), i(81518)),
    g = i(24883);
  const p = {
    components: {
      Hint: c.Z,
      EscCapture: l.Z
    },
    name: "DiffView",
    props: {},
    data: function () {
      return {
        isShow: !1,
        editor: null,
        resolve: null,
        reject: null,
        changeModel: null,
        baseModel: null,
        originalChangeCode: "",
        renderSideBySide: !1
      };
    },
    watch: {
      isShow: function (e) {
        e || (this.editor && this.editor.dispose(), (this.editor = null));
      },
      renderSideBySide: function (e) {
        (this.editor && this.editor.updateOptions({
          renderSideBySide: e
        }), g.Z.put(u.Z.IS_DIFF_EIDTOR_SEPARATED, e));
      }
    },
    computed: {
      saveHint: function () {
        const Lg = new Language(modifyState.language);
        return (0, d.V5)() ? "Command+S" : Lg.save() + "(Ctrl+S)";
      }
    },
    methods: {
      show: function (e) {
        var t = this,
          i = e.base,
          n = e.change;
        const Lg = new Language(modifyState.language);
        return ((this.isShow = !0), (this.renderSideBySide = g.Z.get(u.Z.IS_DIFF_EIDTOR_SEPARATED)), (this.originalChangeCode = n), (this.baseModel = a.editor.createModel(i, "yaml")), (this.changeModel = a.editor.createModel(n, "yaml")), this.$nextTick(function () {
          ((t.editor = a.editor.createDiffEditor(t.$refs.editor, {
            language: "yaml",
            theme: "vs-dark",
            fontFamily: "Consolas, Monaco, Lucida Console, Liberation Mono,\n        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
            fontSize: 12,
            automaticLayout: !0,
            renderSideBySide: t.renderSideBySide,
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
            }
          })), t.editor.addAction({
            id: "save",
            label: Lg.save(),
            run: t.handleSave,
            keybindings: [a.KeyMod.CtrlCmd | a.KeyCode.KeyS]
          }), t.editor.setModel({
            original: t.baseModel,
            modified: t.changeModel
          }), (t.editor.getModifiedEditor().getContribution("editor.linkDetector").openerService._defaultExternalOpener.openExternal = h.fl));
        }), new Promise(function (e, i) {
          ((t.resolve = e), (t.reject = i));
        }));
      },
      handleCancel: function () {
        var e = this;
        const Lg = new Language(modifyState.language);
        return o()(r().mark(function t() {
          var i, n;
          return r().wrap(function (t) {
            for (;;) switch ((t.prev = t.next)) {
              case 0:
                if (e.changeModel.getValue() === e.originalChangeCode) {
                  t.next = 9;
                  break;
                }
                return ((t.next = 3), (0, h.vC)({
                  type: "warning",
                  message: Lg.askSaveChange(),
                  buttons: [Lg.save(), Lg.dontSave(), Lg.cancel()]
                }));
              case 3:
                ((i = t.sent), 0 === (n = i.response) && e.handleSave(), 1 === n && (e.reject(), (e.isShow = !1)), (t.next = 11));
                break;
              case 9:
                (e.reject(), (e.isShow = !1));
              case 11:
              case "end":
                return t.stop();
            }
          }, t);
        }))();
      },
      handleSave: function () {
        (this.resolve(this.changeModel.getValue()), (this.isShow = !1));
      },
      handleChangeStyle: function () {
        this.renderSideBySide = !this.renderSideBySide;
      }
    },
    mounted: function () {}
  };
  i(43356);
  const Lg = new Language(modifyState.language);
  const f = (0, i(51900).Z)(p, function () {
    var e = this,
      t = e._self._c;
    return e.isShow ? t("esc-capture", {
      staticClass: "main-diff-view bg-[color:var(--mask-c)]",
      on: {
        esc: e.handleCancel,
        mousedown: function (t) {
          return t.target !== t.currentTarget ? null : e.handleCancel.apply(null, arguments);
        }
      }
    }, [t("div", {
      staticClass: "card"
    }, [t("div", {
      ref: "editor",
      staticClass: "editor"
    }), e._v(" "), t("div", {
      staticClass: "btns"
    }, [t("Hint", {
      staticClass: "change-btn-off clickable",
      class: {
        "change-btn-on": e.renderSideBySide
      },
      attrs: {
        hint: "并排模式"
      },
      on: {
        click: e.handleChangeStyle
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("compare")])]), e._v(" "), t("Hint", {
      staticClass: "abort-btn clickable",
      attrs: {
        hint: Lg.quit() + "(ESC)"
      },
      on: {
        click: e.handleCancel
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("close")])]), e._v(" "), t("Hint", {
      staticClass: "save-btn clickable",
      attrs: {
        hint: e.saveHint
      },
      on: {
        click: e.handleSave
      }
    }, [t("span", {
      staticClass: "icon text-[20px] text-white"
    }, [e._v("save")])])], 1)])]) : e._e();
  }, [], !1, null, "c878e8f6", null).exports;
};