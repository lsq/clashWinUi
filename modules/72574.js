module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => o
  });
  const n = {
    name: "EscCapture",
    methods: {
      handleKeyDown: function (e) {
        ((e.metaKey || e.ctrlKey) && 87 === e.keyCode && this.$emit("esc"), 27 === e.keyCode && this.$emit("esc"));
      }
    },
    mounted: function () {
      this.$el.focus && this.$el.focus();
    }
  };
  const o = (0, i(51900).Z)(n, function () {
    var e = this;
    return (0, e._self._c)("div", e._g({
      staticClass: "no-esc",
      attrs: {
        tabindex: "0"
      },
      on: {
        keydown: e.handleKeyDown
      }
    }, e.$listeners), [e._t("default")], 2);
  }, [], !1, null, "3ccabdf6", null).exports;
};