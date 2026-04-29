module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => l
  });
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
    name: "SelectView",
    props: {
      items: Array,
      index: {
        type: Number,
        default: function () {
          return 0;
        }
      }
    },
    model: {
      prop: "index",
      event: "select"
    },
    data: function () {
      return {};
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
      handleItemClick: function (e) {
        this.$emit("select", e);
      },
      itemClass: function (e) {
        var t = ["item", "item-".concat(e % 2 == 0 ? "double" : "single")];
        return (e === this.index && t.push("item-selected"), 0 === e ? t.push("item-first") : e === this.items.length - 1 && t.push("item-last"), t);
      }
    }
  };
  i(67033);
  const l = (0, i(51900).Z)(a, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      class: ["main-select-view"]
    }, e._l(e.items, function (i, n) {
      return t("div", {
        key: n,
        class: e.itemClass(n),
        on: {
          click: function (t) {
            return e.handleItemClick(n);
          }
        }
      }, [e._v("\n    " + e._s(i) + "\n  ")]);
    }), 0);
  }, [], !1, null, "e458e7bc", null).exports;
};