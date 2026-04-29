module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => c
  });
  var n = i(59713),
    o = i.n(n),
    s = i(24793),
    r = i(23321);
  function a(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const l = {
    name: "simple-input",
    props: {
      value: [String, Number],
      placeholder: String,
      suffix: String,
      type: {
        type: String,
        default: function () {
          return "text";
        }
      }
    },
    model: {
      prop: "value",
      event: "change"
    },
    data: function () {
      return {
        suffixWidth: 0,
        ref: ""
      };
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(i), !0).forEach(function (t) {
          o()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, r.mapState)({})),
    methods: {
      handleTextChange: s.debounce(function (e) {
        var t = e.target,
          i = (t = void 0 === t ? {} : t).value;
        void 0 !== i && ("number" === this.type ? this.$emit("change", parseInt(i)) : this.$emit("change", i));
      }, 500)
    },
    mounted: function () {
      var e = this;
      ((this.ref = (0, s.uniqueId)("simple-input")), this.$nextTick(function () {
        e.suffixWidth = e.$refs[e.ref].clientWidth;
      }));
    }
  };
  i(60569);
  const c = (0, i(51900).Z)(l, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-simple-input"
    }, [t("input", {
      style: {
        paddingLeft: "10px",
        paddingRight: e.suffixWidth + 10 + "px"
      },
      attrs: {
        spellcheck: "false",
        type: e.type,
        placeholder: e.placeholder
      },
      domProps: {
        value: e.value
      },
      on: {
        input: e.handleTextChange
      }
    }), e._v(" "), t("div", {
      ref: e.ref,
      staticClass: "suffix"
    }, [e._v(e._s(e.suffix))])]);
  }, [], !1, null, "0f00486f", null).exports;
};