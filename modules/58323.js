const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Z: () => S
  });
  var n = i(48926),
    o = i.n(n),
    s = i(59713),
    r = i.n(s),
    a = i(87757),
    l = i.n(a),
    c = i(24883),
    d = i(81518),
    h = i(54387),
    u = i.n(h),
    g = Symbol(),
    p = Symbol(),
    f = Symbol();
  const m = {
    props: ["src", "clickalbe"],
    data: function () {
      return {
        status: g
      };
    },
    computed: {
      isDefault: function () {
        return this.status === g;
      },
      isLoaded: function () {
        return this.status === p;
      },
      isFailed: function () {
        return this.status === f;
      }
    },
    methods: {
      imgLoaded: function () {
        this.status = p;
      },
      imgFailed: function () {
        this.status = f;
      }
    }
  };
  i(56656);
  var v = i(51900);
  const _ = (0, v.Z)(m, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      attrs: {
        id: "lazy-image-view clickable"
      }
    }, [t("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isDefault,
        expression: "isDefault"
      }],
      staticClass: "placeholder ad-img twinkling"
    }, [t("div", [e._v(Lg.imageIsOnWay())])]), e._v(" "), t("img", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isLoaded,
        expression: "isLoaded"
      }],
      staticClass: "ad-img clickable",
      attrs: {
        src: e.src
      },
      on: {
        load: e.imgLoaded,
        error: e.imgFailed,
        click: function (t) {
          return e.$emit("click");
        }
      }
    }), e._v(" "), t("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: e.isFailed,
        expression: "isFailed"
      }],
      staticClass: "ad-img error-img clickable",
      on: {
        click: function (t) {
          return e.$emit("click");
        }
      }
    }, [t("div", [e._v(Lg.imageFailedLoad())])])]);
  }, [], !1, null, "34599eb0", null).exports;
  var b = i(72574),
    w = i(23321),
    y = i(72298);
  function C(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  const x = {
    props: [],
    components: {
      LazyImageView: _,
      EscCapture: b.Z
    },
    data: function () {
      return {
        adImages: [],
        isShowDisclaimerStatement: false,
        isShowAds: false
      };
    },
    computed: (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? C(Object(i), !0).forEach(function (t) {
          r()(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }
      return e;
    })({}, (0, w.mapState)({})),
    methods: {
      select: function (e) {
        y.shell.openExternal(["https://t.me/Rules_lhie1", "https://t.me/Fndroids", "https://github.com/Z-Siqi/Clash-for-Windows_Chinese-Attached", "https://github.com/Dreamacro/clash", "https://github.com/yichengchen/clashX", "https://web.archive.org/web/20230304232259/docs.cfw.lbyczf.com/", "https://fndroid.github.io/clash-config-builder/", "https://github.com/tiagonmas/Windows-Loopback-Exemption-Manager", "https://github.com/Noisyfox/sysproxy", "https://github.com/eycorsican/go-tun2socks", "https://dev.maxmind.com/geoip/geoip2/geolite2/", "https://github.com/twitter/twemoji", "https://github.com/Jigsaw-Code/outline-client", "https://github.com/microsoft/terminal/", "https://www.wintun.net/", "https://github.com/winsw/winsw", "https://apps.apple.com/us/app-bundle/quantumult-x-upgrade/id1482985563", "https://github.com/Kr328/clash-premium-installer", "https://github.com/microsoft/monaco-editor", "https://fonts.google.com/icons"][e]);
      },
      adClick: function (e) {
        y.shell.openExternal(this.adImages[e].click);
      }
    },
    beforeRouteEnter: function (e, t, i) {
      var n;
      i(((n = o()(l().mark(function e(t) {
        var i, n, o, s, r;
        return l().wrap(function (e) {
          for (;;) switch ((e.prev = e.next)) {
            case 0:
              return ((t.adImages = c.Z.get(d.Z.AD_IMAGES) || []), (e.next = 3), u().get(modifyState.adImages + new Date().getTime()));
            case 3:
              ((i = e.sent), (n = i.status), (o = i.data), 200 === n && (s = o.feedback) && ((r = s), c.Z.put(d.Z.AD_IMAGES, r), (t.adImages = r)));
            case 6:
            case "end":
              return e.stop();
          }
        }, e);
      }))), function (e) {
        return n.apply(this, arguments);
      }));
    }
  };
  (i(19743), i(71131), i(72890));
  const S = (0, v.Z)(x, function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "relative w-full h-full",
      attrs: {
        id: "main-about-view"
      }
    }, [e._m(0), e._v(" "), t("div", {
      staticClass: "section"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.relevance())]), e._v(" "), t("div", {
      staticClass: "chat-list gap-[20px]"
    }, [t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(2);
        }
      }
    }, [e._v("\n          Github\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(5);
        }
      }
    }, [e._v("\n          " + Lg.docs() + "\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          e.isShowDisclaimerStatement = !0;
        }
      }
    }, [e._v("\n          " + Lg.disclaimerStatement() + "\n        ")])])]), e._v(" "), t("div", {
      staticClass: "section"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.credits())]), e._v(" "), t("div", {
      staticClass: "flex flex-wrap gap-x-[20px]"
    }, [t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(3);
        }
      }
    }, [e._v("\n          Clash\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(4);
        }
      }
    }, [e._v("\n          ClashX\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(16);
        }
      }
    }, [e._v("\n          Quantumult(X)\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(10);
        }
      }
    }, [e._v("\n          GeoLite2\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(11);
        }
      }
    }, [e._v("\n          twemoji\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(7);
        }
      }
    }, [e._v("\n          EnableLoopback\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(8);
        }
      }
    }, [e._v("\n          sysproxy\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(9);
        }
      }
    }, [e._v("\n          go-tun2socks\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(12);
        }
      }
    }, [e._v("\n          outline-client\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(13);
        }
      }
    }, [e._v("\n          terminal\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(14);
        }
      }
    }, [e._v("\n          Wintun\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(15);
        }
      }
    }, [e._v("\n          winsw\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(17);
        }
      }
    }, [e._v("\n          clash-premium-installer\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(18);
        }
      }
    }, [e._v("\n          monaco-editor\n        ")]), e._v(" "), t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          return e.select(19);
        }
      }
    }, [e._v("\n          Material Icons\n        ")])])]), e._v(" "), t("div", {
      staticClass: "title"
    }, [e._v(Lg.other())]), e._v(" "), t("div", {
      staticClass: "section ad-section"
    }, [t("div", {
      staticClass: "text-[color:var(--feedback-link-c)] cursor-pointer",
      on: {
        click: function (t) {
          e.isShowAds = !0;
        }
      }
    }, [e._v(Lg.advertisementOriginal())]), e._v(" ")
    /*t("div", {staticClass: "ad-img-list"}, e._l(e.adImages, (function(i, n) {return t("div", {
                key: n,
                staticClass: "ad-img"
            }, [t("lazy-image-view", {attrs: {clickalbe: i.click,src: i.img},on: {click: function(t) {return e.adClick(n)}}
            })], 1)
        })), 0)*/]), e._v(" "), t("div", {
      staticClass: "absolute mt-[1000px]"
    }, [e._v("\n      " + e._s(decodeURIComponent("%E7%8B%AC%E7%AB%8B%E6%80%9D%E8%80%83%EF%BC%8C%E6%98%8E%E8%BE%A8%E6%98%AF%E9%9D%9E%E3%80%82")) + "\n    ")]), e._v(" "), e.isShowAds ? t("EscCapture", {
      staticClass: "w-full h-full absolute bg-[color:var(--mask-c)] top-0 left-0",
      on: {
        mousedown: function (t) {
          if (t.target !== t.currentTarget) return null;
          e.isShowAds = !1;
        },
        esc: function (t) {
          e.isShowAds = !1;
        }
      }
    }, [t("pre", {
      staticClass: "left-1/2 top-1/2 w-3/5 break-words whitespace-pre-wrap text-sm absolute bg-[color:var(--bgc)] px-4 py-3 h-4/5 scrolly -translate-x-1/2 -translate-y-1/2 rounded-md shadow-2xl font-sans select-text"
    }, [t("div", {
      staticClass: "section ad-section"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.advertisementOriginal())]), e._v(" "), t("div", {
      staticClass: "ad-img-list"
    }, e._l(e.adImages, function (i, n) {
      return t("div", {
        key: n,
        staticClass: "ad-img"
      }, [t("lazy-image-view", {
        attrs: {
          clickalbe: i.click,
          src: i.img
        },
        on: {
          click: function (t) {
            return e.adClick(n);
          }
        }
      })], 1);
    }), 0)])], e._v(" "))]) : e._e(), e._v(" "), t("div", {
      staticClass: "absolute mt-[1000px]"
    }, [e._v("\n      " + e._s(decodeURIComponent("%E7%8B%AC%E7%AB%8B%E6%80%9D%E8%80%83%EF%BC%8C%E6%98%8E%E8%BE%A8%E6%98%AF%E9%9D%9E%E3%80%82")) + "\n    ")]), e._v(" "), e.isShowDisclaimerStatement ? t("EscCapture", {
      staticClass: "w-full h-full absolute bg-[color:var(--mask-c)] top-0 left-0",
      on: {
        mousedown: function (t) {
          if (t.target !== t.currentTarget) return null;
          e.isShowDisclaimerStatement = !1;
        },
        esc: function (t) {
          e.isShowDisclaimerStatement = !1;
        }
      }
    }, [t("pre", {
      staticClass: "left-1/2 top-1/2 w-3/5 break-words whitespace-pre-wrap text-sm absolute bg-[color:var(--bgc)] px-4 py-3 h-4/5 scrolly -translate-x-1/2 -translate-y-1/2 rounded-md shadow-2xl font-sans select-text"
    }, [e._v(Lg.disclaimerStatementDescribe())])]) : e._e()], 1);
  }, [function () {
    var e = this,
      t = e._self._c;
    const Lg = new Language(modifyState.language);
    return t("div", {
      staticClass: "section"
    }, [t("div", {
      staticClass: "title"
    }, [e._v(Lg.developer())]), e._v(" "), t("div", {
      staticClass: "content"
    }, [e._v("404 Frror")])]);
  }], !1, null, "4a737543", null).exports;
};