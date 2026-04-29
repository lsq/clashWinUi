module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => o
  });
  const n = {
    name: "HintView",
    props: {
      hint: {
        type: String,
        required: !0
      },
      position: {
        type: String,
        default: "top",
        validate: function (e) {
          return ["top", "bottom", "left", "right"].includes(e);
        }
      }
    },
    data: function () {
      return {
        timeoutID: null,
        isShowHint: !1
      };
    },
    computed: {},
    methods: {
      startCounting: function () {
        var e = this;
        this.timeoutID = setTimeout(function () {
          e.isShowHint = !0;
        }, 1e3);
      },
      stopCounting: function () {
        this.timeoutID && (clearTimeout(this.timeoutID), (this.timeoutID = null), (this.isShowHint = !1));
      }
    },
    updated: function () {
      var e = this;
      this.$nextTick(function () {
        try {
          var t = e.$refs.hint.getBoundingClientRect(),
            i = t.x,
            n = t.y,
            o = t.width,
            s = t.height,
            r = e.$refs["hint-text"],
            a = null == r ? void 0 : r.getBoundingClientRect(),
            l = (a.x, a.y, a.width),
            c = a.height;
          "top" === e.position ? ((r.style.top = "".concat(n - c - 5, "px")), (r.style.left = "".concat(i - l / 2 + o / 2, "px"))) : "bottom" === e.position ? ((r.style.top = "".concat(n + s + 5, "px")), (r.style.left = "".concat(i - l / 2 + o / 2, "px"))) : "left" === e.position ? ((r.style.top = "".concat(n - c / 2 + s / 2, "px")), (r.style.left = "".concat(i - l - 5, "px"))) : "right" === e.position && ((r.style.top = "".concat(n - c / 2 + s / 2, "px")), (r.style.left = "".concat(i + o + 5, "px")));
        } catch (e) {}
      });
    }
  };
  i(13096);
  const o = (0, i(51900).Z)(n, function () {
    var e = this,
      t = e._self._c;
    return t("div", e._g({
      ref: "hint",
      staticClass: "main-hint-view flex flex-col justify-center items-center w-[18px] h-[18px]",
      on: {
        mouseenter: e.startCounting,
        mouseleave: e.stopCounting
      }
    }, e.$listeners), [e.isShowHint ? t("span", {
      ref: "hint-text",
      staticClass: "hint"
    }, [e._v(e._s(e.hint))]) : e._e(), e._v(" "), e._t("default")], 2);
  }, [], !1, null, "6e240a95", null).exports;
};