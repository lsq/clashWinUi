const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => c
  }));
  var n = i(59713),
    o = i.n(n),
    s = i(23321);
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
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? r(Object(i), !0).forEach(function (t) {
        o()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const l = {
    components: {
      EscCapture: i(72574).Z
    },
    name: "AlertView",
    props: [],
    data: function () {
      return {
        isShow: !1,
        content: "",
        title: "错误",
        isShowErrorBtn: !1,
        resolve: null,
        reject: null
      };
    },
    computed: a(a({}, (0, s.mapState)({})), (0, s.mapGetters)(["theme"])),
    methods: {
      show: function (e) {
        var t = this,
          i = e.title,
          n = void 0 === i ? "错误" : i,
          o = e.content,
          s = void 0 === o ? "" : o,
          r = e.isShowErrorBtn,
          a = void 0 !== r && r;
        return ((this.isShow = !0), (this.title = n), (this.content = s), (this.isShowErrorBtn = a), new Promise(function (e, i) {
          ((t.resolve = e), (t.reject = i));
        }));
      },
      handleKeyDown: function (e) {
        13 === e.keyCode && this.handleDone();
      },
      handleCancel: function () {
        ((this.isShow = !1), this.reject());
      },
      handleDone: function () {
        ((this.isShow = !1), this.resolve({}));
      }
    }
  };
  i(92732);
  const c = (0, i(51900).Z)(l, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return e.isShow ? t("EscCapture", {
      staticClass: "main-alert-view-plugin bg-[color:var(--mask-c)]",
      class: ["theme-".concat(e.theme)],
      on: {
        esc: e.handleCancel,
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
    }, [e._v(e._s(e.title))]), e._v(" "), t("div", {
      staticClass: "content-content"
    }, [e._v(e._s(e.content))]), e._v(" "), t("div", {
      staticClass: "card-btns"
    }, [e.isShowErrorBtn ? t("div", {
      staticClass: "btn btn-cancel",
      on: {
        click: e.handleCancel
      }
    }, [e._v("\n          " + Lg.cancel() + "\n        ")]) : e._e(), e._v(" "), t("div", {
      staticClass: "btn btn-ok",
      on: {
        click: e.handleDone
      }
    }, [e._v(Lg.ok())])])])])]) : e._e();
  }, [], !1, null, "12619986", null).exports;
};