const modifyState = require("./modifyState");
(() => {
  const i = require("./new-modules-source.js");
  var e,
    t,
    n = {};

  function o(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var s = (n[e] = {
      id: e,
      loaded: !1,
      exports: {},
    });
    return (i[e](s, s.exports, o), (s.loaded = !0), s.exports);
  }
  ((o.m = i),
    (o.amdO = {}),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (
        o.d(t, {
          a: t,
        }),
        t
      );
    }),
    (o.d = (e, t) => {
      for (var i in t)
        o.o(t, i) &&
          !o.o(e, i) &&
          Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i],
          });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, i) => (o.f[i](e, t), t), []))),
    (o.u = (e) => e + ".js"),
    (o.miniCssF = (e) => {}),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.hmd = (e) => (
      (e = Object.create(e)).children || (e.children = []),
      Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
          throw new Error(
            "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
              e.id,
          );
        },
      }),
      e
    )),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "clash_win:"),
    (o.l = (i, n, s, r) => {
      if (e[i]) e[i].push(n);
      else {
        var a, l;
        if (void 0 !== s)
          for (
            var c = document.getElementsByTagName("script"), d = 0;
            d < c.length;
            d++
          ) {
            var h = c[d];
            if (
              h.getAttribute("src") == i ||
              h.getAttribute("data-webpack") == t + s
            ) {
              a = h;
              break;
            }
          }
        (a ||
          ((l = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          o.nc && a.setAttribute("nonce", o.nc),
          a.setAttribute("data-webpack", t + s),
          (a.src = i)),
          (e[i] = [n]));
        var u = (t, n) => {
            ((a.onerror = a.onload = null), clearTimeout(g));
            var o = e[i];
            if (
              (delete e[i],
              a.parentNode && a.parentNode.removeChild(a),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          g = setTimeout(
            u.bind(null, void 0, {
              type: "timeout",
              target: a,
            }),
            12e4,
          );
        ((a.onerror = u.bind(null, a.onerror)),
          (a.onload = u.bind(null, a.onload)),
          l && document.head.appendChild(a));
      }
    }),
    (o.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0,
        }));
    }),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var t = o.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var i = t.getElementsByTagName("script");
        if (i.length) for (var n = i.length - 1; n > -1 && !e; ) e = i[n--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e));
    })(),
    (() => {
      o.b = document.baseURI || self.location.href;
      var e = {
        401: 0,
      };
      o.f.j = (t, i) => {
        var n = o.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) i.push(n[2]);
          else {
            var s = new Promise((i, o) => (n = e[t] = [i, o]));
            i.push((n[2] = s));
            var r = o.p + o.u(t),
              a = new Error();
            o.l(
              r,
              (i) => {
                if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var s = i && ("load" === i.type ? "missing" : i.type),
                    r = i && i.target && i.target.src;
                  ((a.message =
                    "正在加载 chunk " + t + " failed.\n(" + s + ": " + r + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = s),
                    (a.request = r),
                    n[1](a));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, i) => {
          var n,
            s,
            [r, a, l] = i,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (n in a) o.o(a, n) && (o.m[n] = a[n]);
            if (l) l(o);
          }
          for (t && t(i); c < r.length; c++)
            ((s = r[c]), o.o(e, s) && e[s] && e[s][0](), (e[s] = 0));
        },
        i = (global.webpackChunkclash_win = global.webpackChunkclash_win || []);
      (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
    })());
  var s = {};
  ((() => {
    "use strict";
    o.r(s);
    var e = {};
    (o.r(e),
      o.d(e, {
        install: () => y,
      }));
    var t = {};
    (o.r(t),
      o.d(t, {
        install: () => A,
      }));
    var i = {};
    (o.r(i),
      o.d(i, {
        install: () => U,
      }));
    var n = o(48926),
      r = o.n(n),
      a = o(59713),
      l = o.n(a),
      c = o(87757),
      d = o.n(c),
      h = o(70538),
      u = (o(30547), o(72298)),
      g = o(83566);
    const p = {
      name: "Clash",
      watch: {
        theme: {
          immediate: !0,
          handler: function (e) {
            document.body.className = "theme-".concat(e);
          },
        },
      },
    };
    o(21241);
    const f = (0, o(51900).Z)(
        p,
        function () {
          var e = this._self._c;
          return e(
            "div",
            {
              attrs: {
                id: "app",
              },
            },
            [e("router-view")],
            1,
          );
        },
        [],
        !1,
        null,
        null,
        null,
      ).exports,
      m = require("vue-router");
    var v = o.n(m);
    h.ZP.use(v());
    const _ = new (v())({
      routes: [
        {
          path: "/home",
          name: "landing-page",
          component: o(42016).Z,
          children: [
            {
              path: "general",
              component: o(72797).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "proxy",
              component: o(72094).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "provider",
              component: o(38585).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "log",
              component: o(11969).Z,
            },
            {
              path: "server",
              component: o(74775).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "connection",
              component: o(14196).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "router",
              component: o(28779).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "setting",
              component: o(99876).Z,
              meta: {
                keepAlive: !0,
              },
            },
            {
              path: "about",
              component: o(58323).Z,
              meta: {
                keepAlive: !0,
              },
            },
          ],
        },
        {
          path: "*",
          redirect: "/home/general",
        },
      ],
      saveScrollPosition: !0,
    });
    var b = o(59273),
      w =
        /(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;

    function y(e, t) {
      t.store;
      e.prototype.$removeEmoji = function (e) {
        return e.replace(w, "");
      };
    }
    var C = o(33182),
      x = (o(54387), o(11442)),
      S = o.n(x),
      k = o(86173),
      L = o.n(k),
      N = o(8359),
      D = o(19102),
      I = (o(8369), o(24793)),
      E = o(32081),
      Tray = o(71017),
      M = "127.0.0.1";

    function A(e, t) {
      var i,
        n = t.store;
      ((e.prototype.$setSystemProxy =
        ((i = r()(
          d().mark(function e(t) {
            var i, o, s, r, a, l, c, h, u, p, f, m, v, _, b, w, y, S, k, I;
            return d().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (L().info("set system proxy to", t),
                        (i = n.state.app.settings),
                        (o = i.bypassText),
                        (s = i.staticSystemProxyHost),
                        (r = void 0 === s ? M : s),
                        (a = []),
                        o)
                      )
                        try {
                          ((l = x.parse(o)),
                            (c = l.bypass),
                            (a = (void 0 === c ? [] : c) || []));
                        } catch (e) {}
                      else a = N.Z;
                      if (((e.prev = 5), 0 !== (h = n.getters.mixedPort))) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", !1);
                    case 9:
                      if (((u = !1), !(0, g.V5)())) {
                        e.next = 24;
                        break;
                      }
                      return (
                        (p = t
                          ? [
                              "-http",
                              "".concat(r || M, ":").concat(h),
                              "-https",
                              "".concat(r || M, ":").concat(h),
                              "-socks",
                              "".concat(r || M, ":").concat(h),
                            ]
                          : ["-stop"]),
                        (e.next = 14),
                        (0, D.p)(p)
                      );
                    case 14:
                      if (!e.sent.success) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (e.next = 19),
                        (0, D.p)(["-bypass", a.join(",")])
                      );
                    case 19:
                      e.sent.success &&
                        ((u = !0),
                        n.commit("CHANGE_STATUS", {
                          status: t ? C.r.SYSTEM_PROXY : C.r.DEFAULT,
                        }));
                    case 22:
                      e.next = 46;
                      break;
                    case 24:
                      if (!(0, g.Kr)()) {
                        e.next = 46;
                        break;
                      }
                      if (
                        ((f = n.state.app.settings),
                        (m = f.systemProxyTypeIndex),
                        (v = void 0 === m ? 0 : m),
                        (_ = f.specifyHttpProxyProtocol),
                        (b = void 0 !== _ && _),
                        (w = Tray.join(n.getters.filesPath, "win", "common")),
                        (y = ["set", "1"]),
                        !t)
                      ) {
                        e.next = 44;
                        break;
                      }
                      if (((S = r || M), 0 !== v)) {
                        e.next = 36;
                        break;
                      }
                      ((k = "".concat(S, ":").concat(h)),
                        (y = [
                          "global",
                          b
                            ? "http=http://"
                                .concat(k, ";https=http://")
                                .concat(k)
                            : k,
                        ]).push(a.join(";")),
                        (e.next = 44));
                      break;
                    case 36:
                      ((e.prev = 36),
                        (I = "http://"
                          .concat(S, ":")
                          .concat(n.state.app.innerServerPort, "/pac?t=")
                          .concat(new Date().getTime())),
                        (y = ["pac", I]),
                        (e.next = 44));
                      break;
                    case 41:
                      return (
                        (e.prev = 41),
                        (e.t0 = e.catch(36)),
                        e.abrupt("return", !1)
                      );
                    case 44:
                      0 ===
                        E.spawnSync("sysproxy.exe", y, {
                          cwd: w,
                          windowsHide: !0,
                        }).status &&
                        ((u = !0),
                        n.commit("CHANGE_STATUS", {
                          status: t ? C.r.SYSTEM_PROXY : C.r.DEFAULT,
                        }));
                    case 46:
                      return e.abrupt("return", u);
                    case 49:
                      ((e.prev = 49),
                        (e.t1 = e.catch(5)),
                        console.error(e.t1.stack));
                    case 52:
                      return e.abrupt("return", !1);
                    case 53:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [5, 49],
                [36, 41],
              ],
            );
          }),
        )),
        function (e) {
          return i.apply(this, arguments);
        })),
        (e.prototype.$getSystemProxyStatus = function () {
          var e = !1;
          if ((0, g.V5)()) {
            var t = n.state.app.clashPath,
              i = E.spawnSync("./sysproxy", ["-show"], {
                cwd: t,
                windowsHide: !0,
              }),
              o = i.error,
              s = i.output;
            if (o) return !1;
            if (s) {
              var r = s.toString();
              /socks=/.test(r) && (e = !0);
            }
            return (
              n.commit("CHANGE_STATUS", {
                status: e ? C.r.SYSTEM_PROXY : C.r.DEFAULT,
              }),
              e
            );
          }
          var a = Tray.join(n.getters.filesPath, "win", "common"),
            l = E.spawnSync("sysproxy.exe", ["query"], {
              cwd: a,
              windowsHide: !0,
            });
          return (
            l.error && (e = !1),
            0 === l.status &&
              l.stdout &&
              (e = 51 === l.stdout[0] || 53 === l.stdout[0]),
            n.commit("CHANGE_STATUS", {
              status: e ? C.r.SYSTEM_PROXY : C.r.DEFAULT,
            }),
            e
          );
        }),
        (e.prototype.$getTrayIcon = function (e) {
          const appState = n.state.app;
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "rule",
            clashPath = void 0 === appState.clashPath ? "" : appState.clashPath,
            settings = void 0 === appState.settings ? {} : appState.settings,
            iconSystemProxy = settings.iconSystemProxy,
            iconDefault = settings.iconDefault,
            useModeIcons = settings.useModeIcons;
          if (0 !== useModeIcons && useModeIcons) {
            // mode letter icons
            return Tray.join(
              __static,
              "tray",
              "win",
              ""
                .concat(
                  e || modifyState.isTun || modifyState.isMixin ? "on" : "off",
                  "_",
                )
                .concat(t, ".png"),
            );
          } else {
            let result;
            if (e || modifyState.isTun || modifyState.isMixin) {
              if (iconSystemProxy) {
                if (Tray.isAbsolute(iconSystemProxy)) {
                  // found custom icon
                  result = iconSystemProxy;
                } else {
                  // set icon not found
                  result = Tray.join(clashPath, iconSystemProxy);
                }
              } else {
                // default icon
                if (modifyState.isTun && modifyState.isMixin && e) {
                  result = Tray.join(
                    __static,
                    "tray",
                    "win",
                    "tray_orange.ico",
                  );
                } else if (modifyState.isTun && e) {
                  result = Tray.join(__static, "tray", "win", "tray_green.ico");
                } else if (modifyState.isMixin && e) {
                  result = Tray.join(
                    __static,
                    "tray",
                    "win",
                    "tray_light_blue.ico",
                  );
                } else if (modifyState.isMixin && modifyState.isTun) {
                  result = Tray.join(__static, "tray", "win", "tray_brown.ico");
                } else if (modifyState.isTun) {
                  result = Tray.join(__static, "tray", "win", "tray_pink.ico");
                } else if (modifyState.isMixin) {
                  result = Tray.join(
                    __static,
                    "tray",
                    "win",
                    "tray_purple.ico",
                  );
                } else {
                  result = Tray.join(
                    __static,
                    "tray",
                    "win",
                    "tray_reverse.ico",
                  );
                }
              }
            } else {
              if (iconDefault) {
                if (Tray.isAbsolute(iconDefault)) {
                  // found custom icon
                  result = iconDefault;
                } else {
                  // set icon not found
                  result = Tray.join(clashPath, iconDefault);
                }
              } else {
                // default icon
                result = Tray.join(__static, "tray", "win", "tray_normal.ico");
              }
            }
            return result;
          }
        }));
    }
    var O = o(319),
      P = o.n(O),
      R = o(63038),
      F = o.n(R),
      B = o(71017),
      V = o.n(B),
      W = o(57147),
      H = o.n(W);

    function z(e) {
      return j.apply(this, arguments);
    }

    function j() {
      return (j = r()(
        d().mark(function e(t) {
          var i, n, o, s, r, a, l, c;
          return d().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (!(0, g.IJ)()) {
                    e.next = 14;
                    break;
                  }
                  return (
                    (e.next = 3),
                    Promise.all(
                      [
                        ["getVersion"],
                        ["getPath", "exe"],
                        ["getPath", "home"],
                      ].map(function (e) {
                        return u.ipcRenderer.invoke.apply(
                          u.ipcRenderer,
                          ["app"].concat(P()(e)),
                        );
                      }),
                    )
                  );
                case 3:
                  ((i = e.sent),
                    (n = F()(i, 3)),
                    (o = n[0]),
                    (s = n[1]),
                    (r = n[2]),
                    (a = (0, B.join)(r, ".config", "autostart")),
                    (l = (0, B.join)(a, "cfw.desktop")),
                    (c = "[Desktop Entry]\n    Type=Application\n    Version="
                      .concat(
                        o,
                        '\n    Name=Clash for Windows\n    Comment=Clash for Windows startup script\n    Exec="',
                      )
                      .concat(
                        s,
                        '"\n    StartupNotify=false\n    Terminal=false',
                      )),
                    t
                      ? ((0, W.existsSync)(a) || (0, W.mkdirSync)(a),
                        (0, W.writeFileSync)(l, c))
                      : (0, W.existsSync)(l) && (0, W.unlinkSync)(l),
                    (e.next = 16));
                  break;
                case 14:
                  return (
                    (e.next = 16),
                    u.ipcRenderer.invoke("app", "setLoginItemSettings", {
                      openAtLogin: t,
                    })
                  );
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        }),
      )).apply(this, arguments);
    }

    function U(e) {
      e.prototype.$setAutoLaunch = z;
    }
    o(58583);

    function $(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }

    function K(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? $(Object(i), !0).forEach(function (t) {
              l()(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : $(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    var q = o(20667);
    const Z = {
      install: function (e, t) {
        var i = t.store;
        q.keys().forEach(function (t) {
          var n = t.replace(/(\.\/|\.vue)/g, ""),
            o = new (e.extend(
              K(
                K({}, q(t).default),
                {},
                {
                  store: i,
                },
              ),
            ))(),
            s = o.$mount().$el;
          (document.body.appendChild(s), (e.prototype["$".concat(n)] = o.show));
        });
      },
    };
    var G = o(23321);

    function Y(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        (t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, n));
      }
      return i;
    }

    function Q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Y(Object(i), !0).forEach(function (t) {
              l()(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : Y(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t),
                );
              });
      }
      return e;
    }
    (h.ZP.use(Z, {
      store: b.Z,
    }),
      process.env.IS_WEB || h.ZP.use(o(26400)),
      h.ZP.use(e, {
        store: b.Z,
      }),
      h.ZP.use(t, {
        store: b.Z,
      }),
      h.ZP.use(i),
      (h.ZP.config.productionTip = !1),
      h.ZP.mixin({
        data: function () {
          return {
            mixinScrollTop: 0,
          };
        },
        computed: Q(
          Q(
            Q(
              Q(
                {},
                (0, G.mapState)({
                  clashPath: function (e) {
                    return e.app.clashPath;
                  },
                }),
              ),
              {},
              {
                isWindows: function () {
                  return (0, g.Kr)();
                },
                isMacOS: function () {
                  return (0, g.V5)();
                },
                isLinux: function () {
                  return (0, g.IJ)();
                },
              },
              (0, G.mapState)({
                sts: function (e) {
                  return e.app.settings;
                },
              }),
            ),
            (0, G.mapGetters)({
              theme: "theme",
            }),
          ),
          {},
          {
            settings: function () {
              var e = this;
              if (this.sts)
                return new Proxy(I.cloneDeep(this.sts), {
                  get: function (e, t) {
                    return e[t];
                  },
                  set: function (t, i, n) {
                    return (
                      (t[i] = n),
                      e.saveSettingsObject({
                        obj: I.cloneDeep(t),
                      }),
                      !0
                    );
                  },
                });
            },
          },
        ),
        methods: Q(
          Q(
            {},
            (0, G.mapMutations)({
              saveSettingsObject: "SAVE_SETTINGS_OBJECT",
              setSettingsObject: "SET_SETTINGS_OBJECT",
            }),
          ),
          {},
          {
            reloadElectron: function () {
              return r()(
                d().mark(function e() {
                  return d().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.ipcRenderer.invoke("app", "relaunch")
                          );
                        case 2:
                          return (
                            (e.next = 4),
                            u.ipcRenderer.invoke("app", "exit", 0)
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )();
            },
            loadSettings: function () {
              let settings = {};
              try {
                // 读取 clashPath 路径下的 cfw-settings.yaml 文件
                const fs = H(); // 模糊变量名，可能是 require('fs')
                const path = V(); // 模糊变量名，可能是 require('path')
                const yaml = S(); // 模糊变量名，可能是 require('js-yaml')

                const configPath = path.join(
                  this.clashPath,
                  "cfw-settings.yaml",
                );
                const fileContent = fs.readFileSync(configPath).toString();
                settings = yaml.parse(fileContent); // YAML 转换为 JS 对象
              } catch (err) {
                // 忽略错误
              }

              // 为每个设置项提供默认值
              const showNewVersionIcon = settings.showNewVersionIcon !== false; // 默认为 true
              const hideAfterStartup = settings.hideAfterStartup === true; // 默认为 false
              const randomControllerPort =
                settings.randomControllerPort !== false; // 默认为 true
              const runTimeFormat = settings.runTimeFormat || "hh : mm : ss"; // 默认为 "hh : mm : ss"
              const trayOrders = settings.trayOrders || [
                ["icon"],
                ["status", "traffic", "text"],
              ]; // 默认托盘顺序
              const hideTrayIcon = settings.hideTrayIcon === true; // 默认为 false
              const connShowProcess = settings.connShowProcess !== false; // 默认为 true
              const showTrayProxyDelayIndicator =
                settings.showTrayProxyDelayIndicator !== false; // 默认为 true
              const checkForUpdates = settings.checkForUpdates !== false; // 默认为 true
              const disableLoadingAdsLink =
                settings.disableLoadingAdsLink !== false;

              if (settings.language != null) {
                modifyState.languageInProfile = settings.language;
              }

              // 合并默认设置并设置到应用
              const mergedSettings = {
                ...settings,
                showNewVersionIcon,
                hideAfterStartup,
                randomControllerPort,
                runTimeFormat,
                trayOrders,
                hideTrayIcon,
                connShowProcess,
                showTrayProxyDelayIndicator,
                checkForUpdates,
                disableLoadingAdsLink,
              };

              this.setSettingsObject({ obj: mergedSettings });
            },
          },
        ),
        beforeRouteEnter: function (e, t, i) {
          i(function (e) {
            var t = e.$refs["mixin-scroll-content"];
            if (t) {
              var i = "$el" in t ? t.$el : t;
              ((i.style.scrollBehavior = "auto"),
                setTimeout(function () {
                  i.style.scrollBehavior = "smooth";
                }, 1),
                e.$nextTick(function () {
                  i.scrollTop = e.mixinScrollTop;
                }));
            }
          });
        },
        beforeRouteLeave: function (e, t, i) {
          var n = this.$refs["mixin-scroll-content"];
          (n &&
            (this.mixinScrollTop = "$el" in n ? n.$el.scrollTop : n.scrollTop),
            i());
        },
      }),
      new h.ZP({
        components: {
          App: f,
        },
        router: _,
        store: b.Z,
        template: "<App/>",
      }).$mount("#app"));
  })(),
    (module.exports = s));
})();
