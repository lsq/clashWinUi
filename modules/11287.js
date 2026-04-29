module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => h
  });
  var n = i(59713),
    o = i.n(n),
    s = i(24793),
    r = i.n(s),
    a = i(23321);
  function l(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(i), !0).forEach(function (t) {
        o()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const d = {
    name: "Navigator",
    props: {
      list: {
        type: Array,
        required: !0
      },
      index: {
        type: Number,
        default: -1
      },
      width: {
        type: String,
        default: "100"
      },
      errorIndexes: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    data: function () {
      return {
        currentHoverIndex: -1
      };
    },
    watch: {
      index: r().debounce(function (e) {
        if (this.isClosed && e > -1) {
          var t = this.$refs.list,
            i = this.$refs.items;
          t && i && i.length > e && (t.scrollTop = i[e].offsetTop);
        }
      }, 500)
    },
    computed: c(c({}, (0, a.mapState)({})), {}, {
      isClosed: function () {
        return -1 === this.currentHoverIndex;
      },
      listStyle: function () {
        var e = this.width || "100";
        return this.isClosed ? {
          opacity: 0.5,
          alignItems: "center",
          width: "20px",
          backgroundColor: "transparent"
        } : {
          opacity: 1,
          width: "".concat(e, "px"),
          right: "-10px",
          transform: "translateX(-10px)",
          borderLeftWidth: "1px"
        };
      }
    }),
    methods: {
      handleHover: function (e) {
        this.currentHoverIndex = e;
      },
      itemClass: function (e) {
        return this.errorIndexes.includes(e) ? ["item-error"] : this.currentHoverIndex === e ? ["item-hover"] : e === this.index ? ["item-selected"] : void 0;
      }
    },
    updated: function () {}
  };
  i(82779);
  const h = (0, i(51900).Z)(d, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      ref: "list",
      staticClass: "main-proxy-navigator",
      style: e.listStyle,
      on: {
        mouseleave: function (t) {
          e.currentHoverIndex = -1;
        }
      }
    }, e._l(e.list, function (i, n) {
      return t("div", {
        key: i,
        ref: "items",
        refInFor: !0,
        staticClass: "clickable item",
        class: e.itemClass(n),
        on: {
          mouseover: function (t) {
            return e.handleHover(n);
          },
          click: function (t) {
            return e.$emit("select", n);
          }
        }
      }, [e._v("\n    " + e._s(e.isClosed ? e.$removeEmoji(i).trim()[0] : i) + "\n  ")]);
    }), 0);
  }, [], !1, null, "298f5540", null).exports;
};