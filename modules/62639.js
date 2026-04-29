module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => a
  });
  var n = i(59713),
    o = i.n(n);
  function s(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const r = {
    props: ["on"],
    model: {
      prop: "on",
      event: "change"
    },
    data: function () {
      return {};
    },
    watch: {},
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(i), !0).forEach(function (t) {
          o()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, i(23321).mapState)({})),
    methods: {
      handleClick: function (e) {
        this.$emit("change", !this.on);
      }
    },
    mounted: function () {}
  };
  i(60920);
  const a = (0, i(51900).Z)(r, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main",
      on: {
        click: e.handleClick
      }
    }, [t("transition", {
      attrs: {
        name: "move-right"
      }
    }, [e.on ? e._e() : t("div", {
      staticClass: "text"
    }, [t("div", {
      staticClass: "base tint-right"
    }), e._v(" "), t("div", {
      staticClass: "base text-font text-off"
    })])]), e._v(" "), t("transition", {
      attrs: {
        name: "move-left"
      }
    }, [e.on ? t("div", {
      staticClass: "text"
    }, [t("div", {
      staticClass: "base text-font text-on"
    }), e._v(" "), t("div", {
      staticClass: "base tint-left"
    })]) : e._e()])], 1);
  }, [], !1, null, "37d0be30", null).exports;
};