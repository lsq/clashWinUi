module.exports = (e, t, i) => {
  "use strict";

  function n(e, t) {
    for (var i = [], n = {}, o = 0; o < t.length; o++) {
      var s = t[o],
        r = s[0],
        a = {
          id: e + ":" + o,
          css: s[1],
          media: s[2],
          sourceMap: s[3]
        };
      n[r] ? n[r].parts.push(a) : i.push((n[r] = {
        id: r,
        parts: [a]
      }));
    }
    return i;
  }
  i.d(t, {
    Z: () => p
  });
  var o = "undefined" != typeof document;
  if ("undefined" != typeof DEBUG && DEBUG && !o) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
  var s = {},
    r = o && (document.head || document.getElementsByTagName("head")[0]),
    a = null,
    l = 0,
    c = !1,
    d = function () {},
    h = null,
    u = "data-vue-ssr-id",
    g = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
  function p(e, t, i, o) {
    ((c = i), (h = o || {}));
    var r = n(e, t);
    return (f(r), function (t) {
      for (var i = [], o = 0; o < r.length; o++) {
        var a = r[o];
        ((l = s[a.id]).refs--, i.push(l));
      }
      t ? f((r = n(e, t))) : (r = []);
      for (o = 0; o < i.length; o++) {
        var l;
        if (0 === (l = i[o]).refs) {
          for (var c = 0; c < l.parts.length; c++) l.parts[c]();
          delete s[l.id];
        }
      }
    });
  }
  function f(e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t],
        n = s[i.id];
      if (n) {
        n.refs++;
        for (var o = 0; o < n.parts.length; o++) n.parts[o](i.parts[o]);
        for (; o < i.parts.length; o++) n.parts.push(v(i.parts[o]));
        n.parts.length > i.parts.length && (n.parts.length = i.parts.length);
      } else {
        var r = [];
        for (o = 0; o < i.parts.length; o++) r.push(v(i.parts[o]));
        s[i.id] = {
          id: i.id,
          refs: 1,
          parts: r
        };
      }
    }
  }
  function m() {
    var e = document.createElement("style");
    return ((e.type = "text/css"), r.appendChild(e), e);
  }
  function v(e) {
    var t,
      i,
      n = document.querySelector("style[" + u + '~="' + e.id + '"]');
    if (n) {
      if (c) return d;
      n.parentNode.removeChild(n);
    }
    if (g) {
      var o = l++;
      ((n = a || (a = m())), (t = w.bind(null, n, o, !1)), (i = w.bind(null, n, o, !0)));
    } else ((n = m()), (t = y.bind(null, n)), (i = function () {
      n.parentNode.removeChild(n);
    }));
    return (t(e), function (n) {
      if (n) {
        if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
        t((e = n));
      } else i();
    });
  }
  var _,
    b = ((_ = []), function (e, t) {
      return ((_[e] = t), _.filter(Boolean).join("\n"));
    });
  function w(e, t, i, n) {
    var o = i ? "" : n.css;
    if (e.styleSheet) e.styleSheet.cssText = b(t, o);else {
      var s = document.createTextNode(o),
        r = e.childNodes;
      (r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(s, r[t]) : e.appendChild(s));
    }
  }
  function y(e, t) {
    var i = t.css,
      n = t.media,
      o = t.sourceMap;
    if ((n && e.setAttribute("media", n), h.ssrId && e.setAttribute(u, t.id), o && ((i += "\n/*# sourceURL=" + o.sources[0] + " */"), (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */")), e.styleSheet)) e.styleSheet.cssText = i;else {
      for (; e.firstChild;) e.removeChild(e.firstChild);
      e.appendChild(document.createTextNode(i));
    }
  }
};