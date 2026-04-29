const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => l
  }));
  var n = i(59713),
    o = i.n(n),
    s = i(23321);
  const Lg = new Language(modifyState.language);
  function r(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const a = {
    components: {
      EscCapture: i(72574).Z
    },
    name: "InputView",
    props: [],
    data: function () {
      return {
        data: [],
        isShow: !1,
        error: "",
        title: "",
        hint: "",
        resolve: null,
        reject: null,
        confirmText: Lg.ok()
      };
    },
    watch: {},
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(i), !0).forEach(function (t) {
          o()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, s.mapGetters)(["theme"])),
    methods: {
      show: function (e) {
        var t = this,
          i = e.data,
          n = void 0 === i ? [] : i,
          o = e.title,
          s = void 0 === o ? "" : o,
          r = e.hint,
          a = void 0 === r ? "" : r,
          l = e.confirmText,
          c = void 0 === l ? Lg.ok() : l;
        return ((this.error = ""), (this.isShow = !0), (this.data = n), (this.title = s), (this.hint = a), (this.confirmText = c), this.$nextTick(function () {
          for (var e in n) {
            var i = t.$refs["ta".concat(e)][0];
            i.style.height = i.scrollHeight + 2 + "px";
          }
        }), new Promise(function (e, i) {
          ((t.resolve = e), (t.reject = i));
        }));
      },
      handleTextareaInput: function (e) {
        var t = e.target;
        t && ((t.style.height = ""), (t.style.height = t.scrollHeight + 2 + "px"));
      },
      handleKeyDown: function (e) {},
      handleCancel: function () {
        ((this.isShow = !1), this.reject());
      },
      handleDone: function () {
        if (this.data.filter(function (e) {
          return e.required && "" === e.value;
        }).length > 0) this.error = "required key(*) must have a value";else {
          var e = this.data.find(function (e) {
            return e.hasOwnProperty("validate") && "" !== e.validate(e.value);
          });
          if (e) this.error = e.validate(e.value);else {
            this.isShow = !1;
            var t = {};
            (this.data.forEach(function (e) {
              var i = e.value;
              "" !== i && (t[e.key] = i);
            }), this.resolve(t));
          }
        }
      }
    }
  };
  i(20684);
  const l = (0, i(51900).Z)(a, function () {
    var e = this,
      t = e._self._c;
    return e.isShow ? t("EscCapture", {
      staticClass: "main-input-view-plugin bg-[color:var(--mask-c)]",
      class: ["theme-".concat(e.theme)],
      on: {
        esc: e.handleCancel,
        keydown: e.handleKeyDown,
        mousedown: e.handleCancel
      }
    }, [t("div", {
      staticClass: "card-main bg-[color:var(--bgc)] text-[color:var(--fgc)]",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      staticClass: "card-content"
    }, [t("div", {
      staticClass: "content-title"
    }, [e._v(e._s(e.title))]), e._v(" "), e.hint ? t("div", {
      staticClass: "content-hint"
    }, [e._v(e._s(e.hint))]) : e._e(), e._v(" "), t("div", {
      staticClass: "content-items"
    }, e._l(e.data, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "content-item"
      }, [t("div", {
        staticClass: "item-key"
      }, [e._v("\n            " + e._s(i.name) + "\n            "), i.required ? t("span", [e._v("*")]) : e._e()]), e._v(" "), t("textarea", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: i.value,
          expression: "item.value"
        }],
        ref: "ta".concat(n),
        refInFor: !0,
        staticClass: "border-[1px] border-[color:var(--bc)]",
        attrs: {
          type: "text",
          rows: "1",
          spellcheck: "false",
          placeholder: i.placeholder
        },
        domProps: {
          value: i.value
        },
        on: {
          input: [function (t) {
            t.target.composing || e.$set(i, "value", t.target.value);
          }, e.handleTextareaInput]
        }
      })]);
    }), 0), e._v(" "), e.error ? t("div", {
      staticClass: "error-hint"
    }, [e._v(e._s(e.error))]) : e._e(), e._v(" "), t("div", {
      staticClass: "card-btns"
    }, [t("div", {
      staticClass: "btn btn-cancel",
      on: {
        click: e.handleCancel
      }
    }, [e._v(Lg.cancel())]), e._v(" "), t("div", {
      staticClass: "btn btn-ok",
      on: {
        click: e.handleDone
      }
    }, [e._v(e._s(e.confirmText))])])])])]) : e._e();
  }, [], !1, null, "15034054", null).exports;
};