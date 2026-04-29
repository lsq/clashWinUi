module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => c
  });
  var n = i(59713),
    o = i.n(n),
    s = (i(72298), i(23321)),
    r = i(8369);
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
    name: "info-icon",
    data: function () {
      return {
        isShowContent: !1,
        timeoutID: null,
        contentPosition: {
          top: "-1000px",
          left: "-1000px"
        }
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
    })({}, (0, s.mapState)({})),
    watch: {
      isShowContent: function (e) {
        if (e) {
          var t = this.$refs.icon.getBoundingClientRect(),
            i = this.$refs.content;
          t.y + 20 + i.offsetHeight < window.innerHeight ? (this.contentPosition = {
            top: t.y + "px",
            left: t.x + 20 + "px"
          }) : (this.contentPosition = {
            top: t.y + 20 - i.offsetHeight + "px",
            left: t.x + 20 + "px"
          });
        } else this.contentPosition = {
          top: "-1000px",
          left: "-1000px"
        };
      }
    },
    methods: {
      handleMouseEnter: function () {
        var e = this;
        this.timeoutID = setTimeout(function () {
          e.isShowContent = !0;
        }, 500);
      },
      handleMouseLeave: function () {
        ((this.isShowContent = !1), this.timeoutID && clearTimeout(this.timeoutID));
      },
      handleContentClick: function (e) {
        var t = e.target;
        if (t) {
          var i = t.href;
          i && (0, r.fl)(i);
        }
      }
    },
    mounted: function () {}
  };
  i(55230);
  const c = (0, i(51900).Z)(l, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "info-icon-main",
      on: {
        mouseenter: e.handleMouseEnter,
        mouseleave: e.handleMouseLeave
      }
    }, [t("div", {
      ref: "content",
      staticClass: "content",
      style: e.contentPosition,
      on: {
        click: e.handleContentClick
      }
    }, [e._t("default")], 2), e._v(" "), t("span", {
      ref: "icon",
      staticClass: "icon pr-1 text-base text-[color:var(--general-settings-icon-c)] opacity-70"
    }, [e._v("info")])]);
  }, [], !1, null, "d4bbbea2", null).exports;
};