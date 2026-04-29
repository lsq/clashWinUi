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
    name: "MenuView",
    props: [],
    components: {
      EscCapture: i(72574).Z
    },
    data: function () {
      return {
        isShow: !1,
        options: {},
        items: [],
        contentStyles: {},
        isScrollBottom: !0
      };
    },
    watch: {
      isShow: function (e) {
        var t = this;
        this.$nextTick(function () {
          if (e && t.$refs.menu && t.$refs.window.$el) {
            var i = t.$refs.menu,
              n = i.clientHeight,
              o = i.clientWidth,
              s = t.$refs.window.$el,
              r = s.clientHeight,
              a = s.clientWidth,
              l = r + 25,
              c = t.options,
              d = c.clientX,
              h = c.clientY,
              u = {};
            (h + n <= l - 10 ? (u.top = h + "px") : h - n >= 10 ? (u.top = h - n + "px") : ((u.top = h + "px"), (u.height = l - h - 10 + "px"), (t.isScrollBottom = !1)), (u.left = d + o <= a ? d + "px" : d - o + "px"), (t.contentStyles = u));
          }
        });
      }
    },
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
    })({}, (0, s.mapState)({})),
    methods: {
      show: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ((this.items = e), (this.options = t), (this.isShow = !0), (this.contentStyles = {}), (this.isScrollBottom = !0));
      },
      handleCancel: function () {
        this.isShow = !1;
      },
      handleItemSelect: function (e) {
        ((this.isShow = !1), null == e || e.click());
      },
      handleMenuScroll: function (e) {
        var t = e.target;
        this.isScrollBottom = t.scrollTop + t.clientHeight >= t.scrollHeight - 20;
      }
    }
  };
  i(54618);
  const l = (0, i(51900).Z)(a, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return e.isShow ? t("EscCapture", {
      ref: "window",
      staticClass: "main-menu-view-plugin",
      on: {
        esc: e.handleCancel,
        mousedown: e.handleCancel
      }
    }, [t("div", {
      staticClass: "card-main",
      on: {
        mousedown: function (e) {
          e.stopPropagation();
        }
      }
    }, [t("div", {
      ref: "menu",
      staticClass: "card-content",
      style: e.contentStyles,
      on: {
        scroll: e.handleMenuScroll
      }
    }, [e._l(e.items, function (i) {
      return [i.disabled ? t("div", {
        key: i.text,
        staticClass: "item-disabled"
      }, [t("div", [e._v(e._s(i.text))])]) : i.hide ? e._e() : t("div", {
        key: i.text,
        staticClass: "item clickable",
        on: {
          click: function (t) {
            return e.handleItemSelect(i);
          }
        }
      }, [t("span", {
        staticClass: "icon text-white mr-[15px] text-sm"
      }, [e._v(e._s(i.icon))]), e._v(" "), t("div", [e._v(e._s(i.text))])])];
    }), e._v(" "), e.isScrollBottom ? e._e() : t("div", {
      staticClass: "indicator bg-[#6f6f6f] text-white"
    }, [t("span", {
      staticClass: "text-xs"
    }, [e._v(Lg.scrollViewMore())]), t("span", {
      staticClass: "icon text-white"
    }, [e._v("arrow_drop_down")])])], 2)])]) : e._e();
  }, [], !1, null, "00ec68dc", null).exports;
};