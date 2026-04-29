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
    components: {},
    name: "ToastView",
    props: [],
    data: function () {
      return {
        isShow: !1,
        content: "",
        hint: "",
        timeoutID: null
      };
    },
    computed: a(a({}, (0, s.mapState)({})), (0, s.mapGetters)(["theme"])),
    methods: {
      show: function (e) {
        var t = this,
          i = e.content,
          n = e.hint,
          o = e.timeout,
          s = void 0 === o ? 3e3 : o;
        i && ((this.isShow = !0), (this.content = i), (this.hint = n), this.timeoutID && (clearTimeout(this.timeoutID), (this.timeoutID = null)), (this.timeoutID = setTimeout(function () {
          t.isShow = !1;
        }, s)));
      }
    }
  };
  const c = (0, i(51900).Z)(l, function () {
    var e = this,
      t = e._self._c;
    return e.isShow ? t("div", {
      staticClass: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[350px] bg-black text-white rounded-2xl font-normal px-4 py-2 shadow-xl fade"
    }, [t("div", {
      staticClass: "text-base"
    }, [e._v(e._s(e.content))]), e._v(" "), e.hint ? t("div", {
      staticClass: "text-xs"
    }, [e._v(e._s(e.hint))]) : e._e()]) : e._e();
  }, [], !1, null, null, null).exports;
};