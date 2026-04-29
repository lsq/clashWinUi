module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => f
  }));
  var n = i(59713),
    o = i.n(n),
    s = i(23321),
    r = (i(72298), i(72574));
  const a = {
    name: "CheckBox",
    model: {
      prop: "checked",
      event: "change"
    },
    props: {
      checked: {
        type: Boolean,
        default: !1
      },
      size: {
        type: Number,
        default: 20
      }
    },
    data: function () {
      return {};
    }
  };
  i(61745);
  var l = i(51900);
  const c = (0, l.Z)(a, function () {
    var e = this,
      t = e._self._c;
    return t("div", {
      staticClass: "main-check-box",
      on: {
        click: function (t) {
          return e.$emit("change", !e.checked);
        }
      }
    }, [[t("span", {
      staticClass: "icon text-[color:var(--fgc)] text-[20px]"
    }, [e._v("check_box" + e._s(e.checked ? "" : "_outline_blank"))])], e._v(" "), t("div", {
      staticClass: "slot"
    }, [e._t("default")], 2)], 2);
  }, [], !1, null, "1c767bad", null).exports;
  var d = i(17285),
    h = i(8369);
  function u(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(i), !0).forEach(function (t) {
        o()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  const p = {
    components: {
      EscCapture: r.Z,
      CheckBox: c,
      SelectView: d.Z
    },
    name: "SelectPlugin",
    props: [],
    data: function () {
      return {
        isShow: !1,
        title: "",
        message: "",
        html: "",
        items: [],
        resolve: null,
        reject: null,
        checkList: [],
        itemStyles: [],
        reactions: null,
        reactionClick: function () {},
        subSelectItems: [],
        subSelectIndex: 0,
        subSelectTitle: "",
        isLastDifferent: !1
      };
    },
    computed: g(g({}, (0, s.mapGetters)(["theme"])), {}, {
      reactionList: function () {
        var e = this,
          t = ["👍", "😄", "🎉", "❤️", "🚀", "👀"];
        return ["+1", "laugh", "hooray", "heart", "rocket", "eyes"].reduce(function (i, n, o) {
          return (e.reactions[n] && i.push({
            key: t[o],
            value: e.reactions[n]
          }), i);
        }, []);
      }
    }),
    methods: {
      show: function (e) {
        var t = this,
          i = e.items,
          n = void 0 === i ? [] : i,
          o = e.title,
          s = void 0 === o ? "Select" : o,
          r = e.message,
          a = void 0 === r ? "" : r,
          l = e.checkList,
          c = void 0 === l ? [] : l,
          d = e.itemStyles,
          h = void 0 === d ? [] : d,
          u = e.html,
          g = void 0 === u ? "" : u,
          p = e.reactions,
          f = void 0 === p ? null : p,
          m = e.reactionClick,
          v = void 0 === m ? function () {} : m,
          _ = e.subSelectItems,
          b = void 0 === _ ? [] : _,
          w = e.subSelectTitle,
          y = void 0 === w ? "" : w,
          C = e.isLastDifferent;
        return ((this.isShow = !0), (this.title = s), (this.items = n), (this.message = a), (this.checkList = c), (this.itemStyles = h), (this.html = g), (this.reactions = f), (this.reactionClick = v), (this.subSelectItems = b), (this.subSelectTitle = y), (this.isLastDifferent = void 0 === C ? "Cancel" === n[n.length - 1] : C), new Promise(function (e, i) {
          ((t.resolve = e), (t.reject = i));
        }));
      },
      handleCancel: function () {
        ((this.isShow = !1), this.reject());
      },
      handleDone: function () {
        ((this.isShow = !1), this.resolve({}));
      },
      handleItemSelect: function (e) {
        var t;
        ((this.isShow = !1), this.subSelectItems.length > 0 ? this.resolve([e, this.subSelectIndex]) : (null === (t = this.checkList) || void 0 === t ? void 0 : t.length) > 0 ? this.resolve([e, this.checkList]) : this.resolve([e]));
      },
      handleHTMLClick: function (e) {
        if ("A" === e.target.tagName) {
          e.preventDefault();
          var t = e.target.getAttribute("href");
          t && (0, h.fl)(t);
        }
      }
    }
  };
  i(42719);
  const f = (0, l.Z)(p, function () {
    var e = this,
      t = e._self._c;
    return e.isShow ? t("EscCapture", {
      staticClass: "main-select-view-plugin bg-[color:var(--mask-c)]",
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
    }, [e._v(e._s(e.title))]), e._v(" "), e.message ? t("div", {
      staticClass: "content-message"
    }, e._l(e.message.split("\n"), function (i) {
      return t("p", {
        key: i
      }, [e._v("\n          " + e._s(i) + "\n        ")]);
    }), 0) : t("div", {
      staticClass: "html-list",
      domProps: {
        innerHTML: e._s(e.html)
      },
      on: {
        click: e.handleHTMLClick
      }
    }), e._v(" "), e.reactions ? t("div", {
      staticClass: "flex gap-3 mb-[10px]",
      on: {
        click: e.reactionClick
      }
    }, e._l(e.reactionList, function (i) {
      return t("div", {
        key: i.key,
        staticClass: "flex justify-center items-center gap-1 border-[1px] rounded-lg border-[color:var(--bc)] px-2"
      }, [t("div", [e._v(e._s(i.key))]), e._v(" "), t("div", {
        staticClass: "text-sm font-normal"
      }, [e._v(e._s(i.value))])]);
    }), 0) : e._e(), e._v(" "), e.checkList && e.checkList.length > 0 ? t("div", {
      staticClass: "check-list"
    }, e._l(e.checkList, function (i) {
      return t("div", {
        key: i,
        staticClass: "check-item"
      }, [t("check-box", {
        model: {
          value: i.value,
          callback: function (t) {
            e.$set(i, "value", t);
          },
          expression: "item.value"
        }
      }, [e._v(e._s(i.key))])], 1);
    }), 0) : e._e(), e._v(" "), e.subSelectItems.length > 0 ? t("div", {
      staticClass: "mb-[10px] flex items-center gap-2"
    }, [t("div", [e._v(e._s(e.subSelectTitle))]), e._v(" "), t("SelectView", {
      attrs: {
        items: e.subSelectItems
      },
      model: {
        value: e.subSelectIndex,
        callback: function (t) {
          e.subSelectIndex = t;
        },
        expression: "subSelectIndex"
      }
    })], 1) : e._e(), e._v(" "), t("div", {
      staticClass: "btns"
    }, e._l(e.items, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "btn",
        class: {
          "last-btn": e.isLastDifferent && n === e.items.length - 1
        },
        style: e.itemStyles[n],
        on: {
          click: function (t) {
            return e.handleItemSelect(n);
          }
        }
      }, [i ? t("span", [e._v(e._s(i))]) : e._e()]);
    }), 0)])])]) : e._e();
  }, [], !1, null, "0826c2c0", null).exports;
};