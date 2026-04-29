const { Language, language } = require('../language');
const modifyState = require('../modifyState');
module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    rF: () => G
  });
  var n = i(48926),
    o = i.n(n),
    s = i(63038),
    r = i.n(s),
    a = i(59713),
    l = i.n(a),
    c = i(87757),
    d = i.n(c),
    h = i(59273),
    u = i(54387),
    g = i.n(u),
    p = i(57147),
    f = i.n(p),
    m = i(71017),
    v = i.n(m),
    _ = i(96206),
    b = i(11442),
    w = i.n(b),
    y = i(24793),
    C = i.n(y),
    x = i(319),
    S = i.n(x),
    k = i(50008),
    L = i.n(k),
    N = i(24793),
    D = Symbol(),
    I = Symbol(),
    E = Symbol(),
    T = function (e, t) {
      var i = (function (e) {
        var t = [],
          i = D,
          n = "",
          o = !1,
          s = "";
        e: for (var r = 0; r < e.length; r++) {
          var a = e[r];
          if ("-" === a && r === e.length - 1) {
            ((i = E), t.push(s));
            break e;
          }
          if ("(" !== a) {
            if (")" !== a) {
              if (o) s += a;else switch (a) {
                case ".":
                  (t.push(s), (s = ""));
                  break;
                case "+":
                  i = I;
                case "=":
                  (t.push(s), (n = e.slice(r + 1)));
                  break e;
                default:
                  s += a;
              }
            } else o = !1;
          } else o = !0;
        }
        return {
          path: t,
          opertation: i,
          value: n
        };
      })(t);
      !(function (e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : D,
          o = e.proxies,
          s = void 0 === o ? [] : o,
          r = e["proxy-groups"],
          a = void 0 === r ? [] : r,
          l = t.slice(0, -1),
          c = t[t.length - 1],
          d = i;
        try {
          d = JSON.parse(i);
        } catch (e) {}
        var h = N.reduce(l, function (e, i, n) {
            var o = e[i];
            if (void 0 !== o) return o;
            if (Array.isArray(e)) {
              var s = e.find(function (e) {
                return e.name === i;
              });
              if (s) return s;
            }
            if (t.length > n + 1) {
              var r = t[n + 1];
              parseInt(r) >= 0 ? (e[i] = []) : (e[i] = {});
            } else e[i] = {};
            return e[i];
          }, e),
          u = Array.isArray(h),
          g = (function (e) {
            if (/^\[\](shuffledProxyNames|proxyNames|groupNames)\|?(.+)?$/.test(e)) {
              var t = RegExp.$1,
                i = RegExp.$2 || "",
                n = [];
              return ("proxyNames" === t && (n = s), "groupNames" === t && (n = a), "shuffledProxyNames" === t && (n = N.shuffle(s)), n.map(function (e) {
                return e.name;
              }).filter(function (e) {
                return new RegExp(i).test(e);
              }));
            }
            return null;
          })(d);
        switch (n) {
          case D:
            if (g) h[c] = g;else {
              var p = L()(h[c]);
              h[c] = "number" === p ? 1 * d : "boolean" === p ? "boolean" == typeof d ? d : "true" === d : d;
            }
            break;
          case I:
            u ? h.splice.apply(h, [c, 0].concat(S()(g || [d]))) : (h[c] = g || d);
            break;
          case E:
            u ? parseInt(c) > -1 ? h.splice(c, 1) : h.splice(h.findIndex(function (e) {
              return e.name === c;
            }), 1) : delete h[c];
        }
      })(e, i.path, i.value, i.opertation);
    },
    M = i(8369);
  const A = require("node-diff3"),
    O = require("content-disposition");
  var P = i(71893),
    R = i.n(P);
  const F = require("hpagent");
  function B(e, t) {
    var i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!i) {
      if (Array.isArray(e) || (i = (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return V(e, t);
        var i = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === i && e.constructor && (i = e.constructor.name);
        if ("Map" === i || "Set" === i) return Array.from(e);
        if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return V(e, t);
      })(e)) || (t && e && "number" == typeof e.length)) {
        i && (e = i);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var s,
      r = !0,
      a = !1;
    return {
      s: function () {
        i = i.call(e);
      },
      n: function () {
        var e = i.next();
        return ((r = e.done), e);
      },
      e: function (e) {
        ((a = !0), (s = e));
      },
      f: function () {
        try {
          r || null == i.return || i.return();
        } finally {
          if (a) throw s;
        }
      }
    };
  }
  function V(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
    return n;
  }
  function W(e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n));
    }
    return i;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? W(Object(i), !0).forEach(function (t) {
        l()(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : W(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }
    return e;
  }
  var z,
    j,
    U = i(75110),
    $ = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = h.Z.state.app.settings.headersText,
        o = {};
      if (n) try {
        var s = w().parse(n).headers;
        o = void 0 === s ? {} : s;
      } catch (e) {}
      return (0, u.get)(e, H(H({
        validateStatus: function () {
          return !0;
        }
      }, t), {}, {
        headers: H(H({
          pragma: "no-cache"
        }, i), o),
        responseType: "text",
        transformResponse: [function (e) {
          return e;
        }]
      }));
    },
    K = function (e) {
      var t,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = h.Z.state.app.settings.headersText,
        s = {};
      if (o) try {
        var r = w().parse(o).headers;
        s = void 0 === r ? {} : r;
      } catch (e) {}
      var a = h.Z.state.app.confData,
        l = a["mixed-port"],
        c = a.authentication,
        d = void 0 === c ? [] : c,
        u = R()(e, {
          agent: new F.HttpsProxyAgent({
            proxy: "http://".concat(d.length > 0 ? d[0] + "@" : "", "127.0.0.1:").concat(l)
          }),
          headers: H(H({
            pragma: "no-cache"
          }, n), s)
        });
      return (null === (t = i.cancelToken) || void 0 === t || t.promise.then(function (e) {
        u.cancel(e);
      }), u);
    },
    q = function (e) {
      var t = {};
      return (/upload=(.+?)(;|$)/.test(e) && (t.upload = parseInt(RegExp.$1.trim())), /download=(.+?)(;|$)/.test(e) && (t.download = parseInt(RegExp.$1.trim())), /total=(.+?)(;|$)/.test(e) && (t.total = parseInt(RegExp.$1.trim())), /expire=(.+?)(;|$)/.test(e) && (t.expire = parseInt(RegExp.$1.trim())), t);
    },
    Z = function (e) {
      try {
        return e.split("\n").reduce(function (e, t) {
          var i = t.split(":"),
            n = r()(i, 2),
            o = n[0],
            s = n[1];
          return ((e[o.trim()] = s.trim()), e);
        }, {});
      } catch (e) {
        return {};
      }
    },
    G = ((z = o()(d().mark(function e(t) {
      const Lg = new Language(modifyState.language);
      var i, n, o, s, r, a, l, c, u, g, p, m, _, b, w, y, C, x, S, k, L, N, D, I, E, T, M, P, R, F, B, V, W, z, j, U, G, Q, X, J, ee, te, ie, ne, oe, se, re, ae, le, ce;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            if (((i = t.url), (n = t.cancelToken), (o = void 0 === n ? null : n), (s = t.headersString), (r = void 0 === s ? "" : s), (e.prev = 1), (a = h.Z.state.app.settings.updateProfileThroughClashProxy), (l = void 0), (c = void 0), (u = {}), void 0 === a || !a)) {
              e.next = 18;
              break;
            }
            return ((e.next = 9), K(i, {
              cancelToken: o
            }, Z(r)));
          case 9:
            ((g = e.sent), (p = g.body), (m = g.statusCode), (_ = g.headers), (l = p), (c = m), (u = _), (e.next = 27));
            break;
          case 18:
            return ((e.next = 20), $(i, {
              cancelToken: o
            }, Z(r)));
          case 20:
            ((b = e.sent), (w = b.data), (y = b.status), (C = b.headers), (l = w), (c = y), (u = C));
          case 27:
            ((x = "config.yaml"), (S = new Date().getTime() + ".yml"));
            try {
              x = v().basename(i);
            } catch (e) {
              console.error(e.stack);
            }
            (/([^\/]*?)(?:$|\?)/.test(i) && (x = decodeURIComponent(RegExp.$1.trim())), (L = (k = u)["profile-update-interval"]), (N = void 0 === L ? 0 : L), (D = k["profile-web-page-url"]), (I = void 0 === D ? "" : D), (E = k["content-disposition"]), (T = k["subscription-userinfo"]), (M = void 0 === T ? "" : T));
            try {
              (F = null === (P = (0, O.parse)(E)) || void 0 === P || null === (R = P.parameters) || void 0 === R ? void 0 : R.filename) && (x = F);
            } catch (e) {}
            if (((B = parseInt(N) || 0), (V = h.Z.state.app.profilesPath), (W = v().join(V, S)), (z = -1), 200 !== c)) {
              e.next = 63;
              break;
            }
            return ((e.next = 40), Y(i, l, !0));
          case 40:
            if (((j = e.sent), (U = h.Z.state.app.profiles.files), (Q = (G = void 0 === U ? [] : U).findIndex(function (e) {
              return e.url === i;
            })) > -1 ? ((X = G[Q]), (J = H({}, X)), (ee = J.time), (W = v().join(V, ee)), h.Z.commit("CHANGE_PROFILE", {
              index: Q,
              profile: H(H({}, X), {}, {
                subInfo: q(M || j),
                homeWeb: I
              })
            }), (z = Q)) : ((te = {
              time: S,
              name: x,
              url: i,
              selected: [],
              interval: B,
              subInfo: q(M || j),
              homeWeb: I
            }), h.Z.commit("APPEND_PROFILE", {
              profile: te
            }), (z = G.length)), (ne = W.slice(0, -4) + ".base.yml"), (oe = W.slice(0, -4) + ".change.yml"), !f().existsSync(ne) || !f().existsSync(oe))) {
              e.next = 59;
              break;
            }
            if (((se = f().readFileSync(ne).toString()), (re = f().readFileSync(oe).toString()), !/<{7}[\S\s]+?={7}[\S\s]+?>{7}/.test(re))) {
              e.next = 51;
              break;
            }
            return e.abrupt("return", {
              success: !1,
              message: Lg.diffChangeContainConflict()
            });
          case 51:
            if (((ae = (0, A.merge)(re, se, j, {
              stringSeparator: /\n|\r\n/
            })), (le = ae.conflict), (ce = ae.result), f().writeFileSync(ne, j), f().writeFileSync(oe, ce.join("\n")), !le)) {
              e.next = 58;
              break;
            }
            return e.abrupt("return", {
              success: !1,
              message: Lg.failMergeProfile()
            });
          case 58:
            ie = ce.join("\n");
          case 59:
            return (f().writeFileSync(W, ie || j), e.abrupt("return", {
              success: !0,
              targetIndex: z
            }));
          case 63:
            return e.abrupt("return", {
              success: !1,
              message: Lg.downloadProfile() + "(".concat(i, ") " + Lg.failedErrorHTTP() + "(").concat(c, ")")
            });
          case 64:
            e.next = 72;
            break;
          case 66:
            if (((e.prev = 66), (e.t0 = e.catch(1)), console.error(e.t0), !e.t0.message)) {
              e.next = 72;
              break;
            }
            return e.abrupt("return", {
              success: !1,
              message: Lg.downloadProfile() + "(".concat(i, ") " + Lg.failedWithError()).concat(e.t0.message)
            });
          case 72:
            return e.abrupt("return", {
              success: !1,
              message: Lg.unknowErr()
            });
          case 73:
          case "end":
            return e.stop();
        }
      }, e, null, [[1, 66]]);
    }))), function (e) {
      return z.apply(this, arguments);
    }),
    Y = ((j = o()(d().mark(function e(t, n) {
      var o,
        s,
        r,
        a,
        l,
        c,
        u,
        p,
        m,
        v,
        b,
        y,
        C,
        x,
        S,
        k,
        L,
        N,
        D,
        I,
        E,
        T,
        A,
        O,
        P,
        R,
        F,
        V,
        W,
        z,
        j = arguments;
      return d().wrap(function (e) {
        for (;;) switch ((e.prev = e.next)) {
          case 0:
            return ((o = j.length > 2 && void 0 !== j[2] && j[2]), (e.prev = 1), (r = h.Z.state.app.profiles.files), (a = null !== (s = (void 0 === r ? [] : r).find(function (e) {
              return e.url === t;
            })) && void 0 !== s ? s : {
              url: t
            }), (e.t0 = _.Console), (e.t1 = f()), (e.next = 8), h.Z.dispatch("getParserLogPath"));
          case 8:
            if (((e.t2 = e.sent), (e.t3 = e.t1.createWriteStream.call(e.t1, e.t2)), (l = new e.t0(e.t3)), (c = {
              axios: i(54387),
              yaml: i(11442),
              homeDir: h.Z.state.app.clashPath,
              console: o ? l : console,
              notify: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                  i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                (0, M.c0)(e, t, i);
              }
            }), (u = h.Z.state.app.settings.profileParsersText), (p = []), u)) try {
              ((m = w().parse(u)), (v = m.parsers), (p = (void 0 === v ? [] : v) || []));
            } catch (e) {}
            ((b = p.filter(function (e) {
              var i = e.url,
                n = e.reg;
              return i ? i === t : n ? new RegExp(n).test(t) : void 0;
            })), (y = n), (C = B(b)), (e.prev = 18), C.s());
          case 20:
            if ((x = C.n()).done) {
              e.next = 58;
              break;
            }
            if (((S = x.value), (k = S.code), (L = S.file), (N = S.yaml), (D = S.remote), !k)) {
              e.next = 28;
              break;
            }
            return ((I = U("'use strict';\n".concat(k))), (e.next = 27), I.parse(y, c, a));
          case 27:
            y = e.sent;
          case 28:
            if (!L) {
              e.next = 40;
              break;
            }
            if (((E = f().readFileSync(L, "utf-8")), !/\.ya?ml$/.test(L))) {
              e.next = 35;
              break;
            }
            ((T = w().parse(E)), (y = Q(y, T)), (e.next = 40));
            break;
          case 35:
            if (!/\.js$/.test(L)) {
              e.next = 40;
              break;
            }
            return ((A = U("'use strict';\n".concat(E), L)), (e.next = 39), A.parse(y, c, a));
          case 39:
            y = e.sent;
          case 40:
            if ((N && (y = Q(y, N)), !D)) {
              e.next = 56;
              break;
            }
            if (((O = D.url), (P = D.cache), (R = void 0 !== P && P), O)) {
              e.next = 45;
              break;
            }
            throw new Error("Remote parser url is required");
          case 45:
            return ((e.next = 47), g().get(O, {
              headers: {
                "cache-control": R ? "max-age=3600" : "no-cache"
              }
            }));
          case 47:
            if (((F = e.sent), (V = F.data), 200 === (W = F.status))) {
              e.next = 52;
              break;
            }
            throw new Error("Remote parser download failed with status: ".concat(W));
          case 52:
            return ((z = U("'use strict';\n".concat(V))), (e.next = 55), z.parse(y, c, a));
          case 55:
            y = e.sent;
          case 56:
            e.next = 20;
            break;
          case 58:
            e.next = 63;
            break;
          case 60:
            ((e.prev = 60), (e.t4 = e.catch(18)), C.e(e.t4));
          case 63:
            return ((e.prev = 63), C.f(), e.finish(63));
          case 66:
            return e.abrupt("return", y);
          case 69:
            throw ((e.prev = 69), (e.t5 = e.catch(1)), H(H({}, e.t5), {}, {
              message: "[Parser Error] " + e.t5.message
            }));
          case 72:
          case "end":
            return e.stop();
        }
      }, e, null, [[1, 69], [18, 60, 63, 66]]);
    }))), function (e, t) {
      return j.apply(this, arguments);
    }),
    Q = function (e, t) {
      var i = {},
        n = t["append-rules"],
        o = void 0 === n ? [] : n,
        s = t["prepend-rules"],
        r = void 0 === s ? [] : s,
        a = t["append-proxies"],
        l = void 0 === a ? [] : a,
        c = t["prepend-proxies"],
        d = void 0 === c ? [] : c,
        h = t["append-proxy-groups"],
        u = void 0 === h ? [] : h,
        g = t["prepend-proxy-groups"],
        p = void 0 === g ? [] : g,
        f = t["mix-proxy-providers"],
        m = void 0 === f ? {} : f,
        v = t["mix-rule-providers"],
        _ = void 0 === v ? {} : v,
        b = t["mix-object"],
        y = void 0 === b ? {} : b,
        x = t.commands,
        S = void 0 === x ? [] : x,
        k = t["key-orders"],
        L = void 0 === k ? [] : k,
        N = w().parse(e),
        D = C().cloneDeep(N),
        I = N.rules,
        E = void 0 === I ? [] : I,
        M = N.proxies,
        A = void 0 === M ? [] : M,
        O = N["proxy-groups"],
        P = void 0 === O ? [] : O,
        R = N["proxy-providers"],
        F = void 0 === R ? {} : R,
        V = N["rule-providers"],
        W = void 0 === V ? {} : V;
      ((r || o) && (D.rules = r.concat(null != E ? E : []).concat(o)), (d || l) && (D.proxies = d.concat(null != A ? A : []).concat(l)), (p || u) && (D["proxy-groups"] = p.concat(null != P ? P : []).concat(u)), m && (D["proxy-providers"] = H(H({}, F), m)), _ && (D["rule-providers"] = H(H({}, W), _)));
      var z,
        j = B(S);
      try {
        for (j.s(); !(z = j.n()).done;) {
          var U = z.value;
          T(D, U);
        }
      } catch (e) {
        j.e(e);
      } finally {
        j.f();
      }
      return (L.length > 0 && (i.sortMapEntries = function (e, t) {
        var i = e.key,
          n = t.key,
          o = L.findIndex(function (e) {
            return e === i.value;
          }),
          s = L.findIndex(function (e) {
            return e === n.value;
          });
        return (-1 === o ? 1 / 0 : o) - (-1 === s ? 1 / 0 : s);
      }), w().stringify(H(H({}, D), y), i));
    };
};