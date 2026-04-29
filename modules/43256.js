module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    $: () => Ee
  });
  var n = i(65321);
  var o = Object.hasOwnProperty,
    s = Object.setPrototypeOf,
    r = Object.isFrozen,
    a = Object.getPrototypeOf,
    l = Object.getOwnPropertyDescriptor,
    c = Object.freeze,
    d = Object.seal,
    h = Object.create,
    u = "undefined" != typeof Reflect && Reflect,
    g = u.apply,
    p = u.construct;
  (g || (g = function (e, t, i) {
    return e.apply(t, i);
  }), c || (c = function (e) {
    return e;
  }), d || (d = function (e) {
    return e;
  }), p || (p = function (e, t) {
    return new (Function.prototype.bind.apply(e, [null].concat((function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i;
      }
      return Array.from(e);
    })(t))))();
  }));
  var f,
    m = L(Array.prototype.forEach),
    v = L(Array.prototype.pop),
    _ = L(Array.prototype.push),
    b = L(String.prototype.toLowerCase),
    w = L(String.prototype.match),
    y = L(String.prototype.replace),
    C = L(String.prototype.indexOf),
    x = L(String.prototype.trim),
    S = L(RegExp.prototype.test),
    k = ((f = TypeError), function () {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      return p(f, t);
    });
  function L(e) {
    return function (t) {
      for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
      return g(e, t, n);
    };
  }
  function N(e, t) {
    s && s(e, null);
    for (var i = t.length; i--;) {
      var n = t[i];
      if ("string" == typeof n) {
        var o = b(n);
        o !== n && (r(t) || (t[i] = o), (n = o));
      }
      e[n] = !0;
    }
    return e;
  }
  function D(e) {
    var t = h(null),
      i = void 0;
    for (i in e) g(o, e, [i]) && (t[i] = e[i]);
    return t;
  }
  function I(e, t) {
    for (; null !== e;) {
      var i = l(e, t);
      if (i) {
        if (i.get) return L(i.get);
        if ("function" == typeof i.value) return L(i.value);
      }
      e = a(e);
    }
    return function (e) {
      return (console.warn("fallback value for", e), null);
    };
  }
  var E = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    T = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    M = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    A = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    O = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
    P = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    R = c(["#text"]),
    F = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
    B = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    V = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    W = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    H = d(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
    z = d(/<%[\s\S]*|[\s\S]*%>/gm),
    j = d(/^data-[\-\w.\u00B7-\uFFFF]/),
    U = d(/^aria-[\-\w]+$/),
    $ = d(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    K = d(/^(?:\w+script|data):/i),
    q = d(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
  function G(e) {
    if (Array.isArray(e)) {
      for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
      return i;
    }
    return Array.from(e);
  }
  var Y = function () {
    return "undefined" == typeof window ? null : window;
  };
  var Q = (function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y(),
      i = function (t) {
        return e(t);
      };
    if (((i.version = "2.3.1"), (i.removed = []), !t || !t.document || 9 !== t.document.nodeType)) return ((i.isSupported = !1), i);
    var n = t.document,
      o = t.document,
      s = t.DocumentFragment,
      r = t.HTMLTemplateElement,
      a = t.Node,
      l = t.Element,
      d = t.NodeFilter,
      h = t.NamedNodeMap,
      u = void 0 === h ? t.NamedNodeMap || t.MozNamedAttrMap : h,
      g = t.Text,
      p = t.Comment,
      f = t.DOMParser,
      L = t.trustedTypes,
      Q = l.prototype,
      X = I(Q, "cloneNode"),
      J = I(Q, "nextSibling"),
      ee = I(Q, "childNodes"),
      te = I(Q, "parentNode");
    if ("function" == typeof r) {
      var ie = o.createElement("template");
      ie.content && ie.content.ownerDocument && (o = ie.content.ownerDocument);
    }
    var ne = (function (e, t) {
        if ("object" !== (void 0 === e ? "undefined" : Z(e)) || "function" != typeof e.createPolicy) return null;
        var i = null,
          n = "data-tt-policy-suffix";
        t.currentScript && t.currentScript.hasAttribute(n) && (i = t.currentScript.getAttribute(n));
        var o = "dompurify" + (i ? "#" + i : "");
        try {
          return e.createPolicy(o, {
            createHTML: function (e) {
              return e;
            }
          });
        } catch (e) {
          return (console.warn("TrustedTypes policy " + o + " could not be created."), null);
        }
      })(L, n),
      oe = ne && Re ? ne.createHTML("") : "",
      se = o,
      re = se.implementation,
      ae = se.createNodeIterator,
      le = se.createDocumentFragment,
      ce = se.getElementsByTagName,
      de = n.importNode,
      he = {};
    try {
      he = D(o).documentMode ? o.documentMode : {};
    } catch (e) {}
    var ue = {};
    i.isSupported = "function" == typeof te && re && void 0 !== re.createHTMLDocument && 9 !== he;
    var ge = H,
      pe = z,
      fe = j,
      me = U,
      ve = K,
      _e = q,
      be = $,
      we = null,
      ye = N({}, [].concat(G(E), G(T), G(M), G(O), G(R))),
      Ce = null,
      xe = N({}, [].concat(G(F), G(B), G(V), G(W))),
      Se = null,
      ke = null,
      Le = !0,
      Ne = !0,
      De = !1,
      Ie = !1,
      Ee = !1,
      Te = !1,
      Me = !1,
      Ae = !1,
      Oe = !1,
      Pe = !0,
      Re = !1,
      Fe = !0,
      Be = !0,
      Ve = !1,
      We = {},
      He = null,
      ze = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
      je = null,
      Ue = N({}, ["audio", "video", "img", "source", "image", "track"]),
      $e = null,
      Ke = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
      qe = "https://www.w3.org/1998/Math/MathML",
      Ze = "https://www.w3.org/2000/svg",
      Ge = "https://www.w3.org/1999/xhtml",
      Ye = Ge,
      Qe = !1,
      Xe = null,
      Je = o.createElement("form"),
      et = function (e) {
        (Xe && Xe === e) || ((e && "object" === (void 0 === e ? "undefined" : Z(e))) || (e = {}), (e = D(e)), (we = "ALLOWED_TAGS" in e ? N({}, e.ALLOWED_TAGS) : ye), (Ce = "ALLOWED_ATTR" in e ? N({}, e.ALLOWED_ATTR) : xe), ($e = "ADD_URI_SAFE_ATTR" in e ? N(D(Ke), e.ADD_URI_SAFE_ATTR) : Ke), (je = "ADD_DATA_URI_TAGS" in e ? N(D(Ue), e.ADD_DATA_URI_TAGS) : Ue), (He = "FORBID_CONTENTS" in e ? N({}, e.FORBID_CONTENTS) : ze), (Se = "FORBID_TAGS" in e ? N({}, e.FORBID_TAGS) : {}), (ke = "FORBID_ATTR" in e ? N({}, e.FORBID_ATTR) : {}), (We = "USE_PROFILES" in e && e.USE_PROFILES), (Le = !1 !== e.ALLOW_ARIA_ATTR), (Ne = !1 !== e.ALLOW_DATA_ATTR), (De = e.ALLOW_UNKNOWN_PROTOCOLS || !1), (Ie = e.SAFE_FOR_TEMPLATES || !1), (Ee = e.WHOLE_DOCUMENT || !1), (Ae = e.RETURN_DOM || !1), (Oe = e.RETURN_DOM_FRAGMENT || !1), (Pe = !1 !== e.RETURN_DOM_IMPORT), (Re = e.RETURN_TRUSTED_TYPE || !1), (Me = e.FORCE_BODY || !1), (Fe = !1 !== e.SANITIZE_DOM), (Be = !1 !== e.KEEP_CONTENT), (Ve = e.IN_PLACE || !1), (be = e.ALLOWED_URI_REGEXP || be), (Ye = e.NAMESPACE || Ge), Ie && (Ne = !1), Oe && (Ae = !0), We && ((we = N({}, [].concat(G(R)))), (Ce = []), !0 === We.html && (N(we, E), N(Ce, F)), !0 === We.svg && (N(we, T), N(Ce, B), N(Ce, W)), !0 === We.svgFilters && (N(we, M), N(Ce, B), N(Ce, W)), !0 === We.mathMl && (N(we, O), N(Ce, V), N(Ce, W))), e.ADD_TAGS && (we === ye && (we = D(we)), N(we, e.ADD_TAGS)), e.ADD_ATTR && (Ce === xe && (Ce = D(Ce)), N(Ce, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && N($e, e.ADD_URI_SAFE_ATTR), e.FORBID_CONTENTS && (He === ze && (He = D(He)), N(He, e.FORBID_CONTENTS)), Be && (we["#text"] = !0), Ee && N(we, ["html", "head", "body"]), we.table && (N(we, ["tbody"]), delete Se.tbody), c && c(e), (Xe = e));
      },
      tt = N({}, ["mi", "mo", "mn", "ms", "mtext"]),
      it = N({}, ["foreignobject", "desc", "title", "annotation-xml"]),
      nt = N({}, T);
    (N(nt, M), N(nt, A));
    var ot = N({}, O);
    N(ot, P);
    var st = function (e) {
        _(i.removed, {
          element: e
        });
        try {
          e.parentNode.removeChild(e);
        } catch (t) {
          try {
            e.outerHTML = oe;
          } catch (t) {
            e.remove();
          }
        }
      },
      rt = function (e, t) {
        try {
          _(i.removed, {
            attribute: t.getAttributeNode(e),
            from: t
          });
        } catch (e) {
          _(i.removed, {
            attribute: null,
            from: t
          });
        }
        if ((t.removeAttribute(e), "is" === e && !Ce[e])) if (Ae || Oe) try {
          st(t);
        } catch (e) {} else try {
          t.setAttribute(e, "");
        } catch (e) {}
      },
      at = function (e) {
        var t = void 0,
          i = void 0;
        if (Me) e = "<remove></remove>" + e;else {
          var n = w(e, /^[\r\n\t ]+/);
          i = n && n[0];
        }
        var s = ne ? ne.createHTML(e) : e;
        if (Ye === Ge) try {
          t = new f().parseFromString(s, "text/html");
        } catch (e) {}
        if (!t || !t.documentElement) {
          t = re.createDocument(Ye, "template", null);
          try {
            t.documentElement.innerHTML = Qe ? "" : s;
          } catch (e) {}
        }
        var r = t.body || t.documentElement;
        return (e && i && r.insertBefore(o.createTextNode(i), r.childNodes[0] || null), Ye === Ge ? ce.call(t, Ee ? "html" : "body")[0] : Ee ? t.documentElement : r);
      },
      lt = function (e) {
        return ae.call(e.ownerDocument || e, e, d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT, null, !1);
      },
      ct = function (e) {
        return "object" === (void 0 === a ? "undefined" : Z(a)) ? e instanceof a : e && "object" === (void 0 === e ? "undefined" : Z(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
      },
      dt = function (e, t, n) {
        ue[e] && m(ue[e], function (e) {
          e.call(i, t, n, Xe);
        });
      },
      ht = function (e) {
        var t,
          n = void 0;
        if ((dt("beforeSanitizeElements", e, null), !((t = e) instanceof g || t instanceof p || ("string" == typeof t.nodeName && "string" == typeof t.textContent && "function" == typeof t.removeChild && t.attributes instanceof u && "function" == typeof t.removeAttribute && "function" == typeof t.setAttribute && "string" == typeof t.namespaceURI && "function" == typeof t.insertBefore)))) return (st(e), !0);
        if (w(e.nodeName, /[\u0080-\uFFFF]/)) return (st(e), !0);
        var o = b(e.nodeName);
        if ((dt("uponSanitizeElement", e, {
          tagName: o,
          allowedTags: we
        }), !ct(e.firstElementChild) && (!ct(e.content) || !ct(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent))) return (st(e), !0);
        if ("select" === o && S(/<template/i, e.innerHTML)) return (st(e), !0);
        if (!we[o] || Se[o]) {
          if (Be && !He[o]) {
            var s = te(e) || e.parentNode,
              r = ee(e) || e.childNodes;
            if (r && s) for (var a = r.length - 1; a >= 0; --a) s.insertBefore(X(r[a], !0), J(e));
          }
          return (st(e), !0);
        }
        return e instanceof l && !(function (e) {
          var t = te(e);
          (t && t.tagName) || (t = {
            namespaceURI: Ge,
            tagName: "template"
          });
          var i = b(e.tagName),
            n = b(t.tagName);
          if (e.namespaceURI === Ze) return t.namespaceURI === Ge ? "svg" === i : t.namespaceURI === qe ? "svg" === i && ("annotation-xml" === n || tt[n]) : Boolean(nt[i]);
          if (e.namespaceURI === qe) return t.namespaceURI === Ge ? "math" === i : t.namespaceURI === Ze ? "math" === i && it[n] : Boolean(ot[i]);
          if (e.namespaceURI === Ge) {
            if (t.namespaceURI === Ze && !it[n]) return !1;
            if (t.namespaceURI === qe && !tt[n]) return !1;
            var o = N({}, ["title", "style", "font", "a", "script"]);
            return !ot[i] && (o[i] || !nt[i]);
          }
          return !1;
        })(e) ? (st(e), !0) : ("noscript" !== o && "noembed" !== o) || !S(/<\/no(script|embed)/i, e.innerHTML) ? (Ie && 3 === e.nodeType && ((n = e.textContent), (n = y(n, ge, " ")), (n = y(n, pe, " ")), e.textContent !== n && (_(i.removed, {
          element: e.cloneNode()
        }), (e.textContent = n))), dt("afterSanitizeElements", e, null), !1) : (st(e), !0);
      },
      ut = function (e, t, i) {
        if (Fe && ("id" === t || "name" === t) && (i in o || i in Je)) return !1;
        if (Ne && !ke[t] && S(fe, t)) ;else if (Le && S(me, t)) ;else {
          if (!Ce[t] || ke[t]) return !1;
          if ($e[t]) ;else if (S(be, y(i, _e, ""))) ;else if (("src" !== t && "xlink:href" !== t && "href" !== t) || "script" === e || 0 !== C(i, "data:") || !je[e]) {
            if (De && !S(ve, y(i, _e, ""))) ;else if (i) return !1;
          } else ;
        }
        return !0;
      },
      gt = function (e) {
        var t = void 0,
          n = void 0,
          o = void 0,
          s = void 0;
        dt("beforeSanitizeAttributes", e, null);
        var r = e.attributes;
        if (r) {
          var a = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: Ce
          };
          for (s = r.length; s--;) {
            var l = (t = r[s]),
              c = l.name,
              d = l.namespaceURI;
            if (((n = x(t.value)), (o = b(c)), (a.attrName = o), (a.attrValue = n), (a.keepAttr = !0), (a.forceKeepAttr = void 0), dt("uponSanitizeAttribute", e, a), (n = a.attrValue), !a.forceKeepAttr && (rt(c, e), a.keepAttr))) if (S(/\/>/i, n)) rt(c, e);else {
              Ie && ((n = y(n, ge, " ")), (n = y(n, pe, " ")));
              var h = e.nodeName.toLowerCase();
              if (ut(h, o, n)) try {
                (d ? e.setAttributeNS(d, c, n) : e.setAttribute(c, n), v(i.removed));
              } catch (e) {}
            }
          }
          dt("afterSanitizeAttributes", e, null);
        }
      },
      pt = function e(t) {
        var i = void 0,
          n = lt(t);
        for (dt("beforeSanitizeShadowDOM", t, null); (i = n.nextNode());) (dt("uponSanitizeShadowNode", i, null), ht(i) || (i.content instanceof s && e(i.content), gt(i)));
        dt("afterSanitizeShadowDOM", t, null);
      };
    return ((i.sanitize = function (e, o) {
      var r = void 0,
        l = void 0,
        c = void 0,
        d = void 0,
        h = void 0;
      if (((Qe = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !ct(e))) {
        if ("function" != typeof e.toString) throw k("toString is not a function");
        if ("string" != typeof (e = e.toString())) throw k("dirty is not a string, aborting");
      }
      if (!i.isSupported) {
        if ("object" === Z(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
          if ("string" == typeof e) return t.toStaticHTML(e);
          if (ct(e)) return t.toStaticHTML(e.outerHTML);
        }
        return e;
      }
      if ((Te || et(o), (i.removed = []), "string" == typeof e && (Ve = !1), Ve)) ;else if (e instanceof a) (1 === (l = (r = at("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName) || "HTML" === l.nodeName ? (r = l) : r.appendChild(l);else {
        if (!Ae && !Ie && !Ee && -1 === e.indexOf("<")) return ne && Re ? ne.createHTML(e) : e;
        if (!(r = at(e))) return Ae ? null : oe;
      }
      r && Me && st(r.firstChild);
      for (var u = lt(Ve ? e : r); (c = u.nextNode());) (3 === c.nodeType && c === d) || ht(c) || (c.content instanceof s && pt(c.content), gt(c), (d = c));
      if (((d = null), Ve)) return e;
      if (Ae) {
        if (Oe) for (h = le.call(r.ownerDocument); r.firstChild;) h.appendChild(r.firstChild);else h = r;
        return (Pe && (h = de.call(n, h, !0)), h);
      }
      var g = Ee ? r.outerHTML : r.innerHTML;
      return (Ie && ((g = y(g, ge, " ")), (g = y(g, pe, " "))), ne && Re ? ne.createHTML(g) : g);
    }), (i.setConfig = function (e) {
      (et(e), (Te = !0));
    }), (i.clearConfig = function () {
      ((Xe = null), (Te = !1));
    }), (i.isValidAttribute = function (e, t, i) {
      Xe || et({});
      var n = b(e),
        o = b(t);
      return ut(n, o, i);
    }), (i.addHook = function (e, t) {
      "function" == typeof t && ((ue[e] = ue[e] || []), _(ue[e], t));
    }), (i.removeHook = function (e) {
      ue[e] && v(ue[e]);
    }), (i.removeHooks = function (e) {
      ue[e] && (ue[e] = []);
    }), (i.removeAllHooks = function () {
      ue = {};
    }), i);
  })();
  (Q.version, Q.isSupported);
  const X = Q.sanitize,
    J = (Q.setConfig, Q.clearConfig, Q.isValidAttribute, Q.addHook),
    ee = Q.removeHook;
  (Q.removeHooks, Q.removeAllHooks);
  var te = i(4850),
    ie = i(48764),
    ne = i(23938),
    oe = i(56811),
    se = i(15393),
    re = i(71050),
    ae = i(17301),
    le = i(4669),
    ce = i(59365),
    de = i(21212),
    he = i(44742),
    ue = i(5976),
    ge = i(33720),
    pe = i(23897),
    fe = i(66663),
    me = i(36248),
    ve = i(95935),
    _e = i(97295),
    be = i(70666);
  function we(e, t = {}, i = {}) {
    var o;
    const s = new ue.SL();
    let r = !1;
    const a = s.add(new re.A()),
      l = (0, ie.az)(t),
      c = function (t) {
        let i;
        try {
          i = (0, pe.Q)(decodeURIComponent(t));
        } catch (e) {}
        return i ? ((i = (0, me.rs)(i, t => e.uris && e.uris[t] ? be.o.revive(e.uris[t]) : void 0)), encodeURIComponent(JSON.stringify(i))) : t;
      },
      d = function (t, i) {
        const n = e.uris && e.uris[t];
        if (!n) return t;
        let o = be.o.revive(n);
        return i ? t.startsWith(fe.lg.data + ":") ? t : fe.Gi.asBrowserUri(o).toString(!0) : be.o.parse(t).toString() === o.toString() ? t : (o.query && (o = o.with({
          query: c(o.query)
        })), o.toString());
      };
    let h;
    const u = new Promise(e => (h = e)),
      g = new ge.Th();
    if (((g.image = (e, i, n) => {
      let o = [],
        s = [];
      if (e) {
        (({
          href: e,
          dimensions: o
        } = (0, ce.v1)(e)), (e = d(e, !0)));
        try {
          const i = be.o.parse(e);
          t.baseUrl && i.scheme === fe.lg.file && (e = (0, ve.i3)(t.baseUrl, e).toString());
        } catch (e) {}
        s.push(`src="${e}"`);
      }
      return (n && s.push(`alt="${n}"`), i && s.push(`title="${i}"`), o.length && (s = s.concat(o)), "<img " + s.join(" ") + ">");
    }), (g.link = (i, n, o) => {
      if ((i === o && (o = (0, ce.oR)(o)), (i = d(i, !1)), t.baseUrl)) {
        /^\w[\w\d+.-]*:/.test(i) || (i = (0, ve.i3)(t.baseUrl, i).toString());
      }
      return ((n = (0, ce.oR)(n)), !(i = (0, ce.oR)(i)) || i.match(/^data:|javascript:/i) || (i.match(/^command:/i) && !e.isTrusted) || i.match(/^command:(\/\/\/)?_workbench\.downloadResource/i) ? o : `<a href="#" data-href="${(i = i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"))}" title="${n || i}">${o}</a>`);
    }), (g.paragraph = e => `<p>${e}</p>`), t.codeBlockRenderer && (g.code = (e, i) => {
      const o = t.codeBlockRenderer(i, e),
        s = he.a.nextId();
      return ((0, se.eP)(Promise.all([o, u]), a.token).then(e => {
        var i;
        if (!r && e) {
          const o = l.querySelector(`div[data-code="${s}"]`);
          (o && n.mc(o, e[0]), null === (i = t.asyncRenderCallback) || void 0 === i || i.call(t));
        }
      }).catch(() => {}), `<div class="code" data-code="${s}">${(0, _e.YU)(e)}</div>`);
    }), t.actionHandler)) {
      const e = t.actionHandler.disposables.add(new te.Y(l, "click")),
        i = t.actionHandler.disposables.add(new te.Y(l, "auxclick"));
      t.actionHandler.disposables.add(le.ju.any(e.event, i.event)(e => {
        const i = new ne.n(e);
        if (!i.leftButton && !i.middleButton) return;
        let n = i.target;
        if ("A" === n.tagName || ((n = n.parentElement), n && "A" === n.tagName)) try {
          const e = n.dataset.href;
          e && t.actionHandler.callback(e, i);
        } catch (e) {
          (0, ae.dL)(e);
        } finally {
          i.preventDefault();
        }
      }));
    }
    (e.supportHtml || ((i.sanitizer = t => (e.isTrusted ? t.match(/^(<span[^>]+>)|(<\/\s*span>)$/) : void 0) ? t : ""), (i.sanitize = !0), (i.silent = !0)), (i.renderer = g));
    let p = null !== (o = e.value) && void 0 !== o ? o : "";
    (p.length > 1e5 && (p = `${p.substr(0, 1e5)}…`), e.supportThemeIcons && (p = (0, de.f$)(p)));
    let f = ge.Qc(p, i);
    if (e.supportThemeIcons) {
      f = (0, oe.T)(f).map(e => ("string" == typeof e ? e : e.outerHTML)).join("");
    }
    if (((l.innerHTML = (function (e, t) {
      const {
        config: i,
        allowedSchemes: n
      } = (function (e) {
        const t = [fe.lg.http, fe.lg.https, fe.lg.mailto, fe.lg.data, fe.lg.file, fe.lg.vscodeFileResource, fe.lg.vscodeRemote, fe.lg.vscodeRemoteResource];
        e.isTrusted && t.push(fe.lg.command);
        return {
          config: {
            ALLOWED_TAGS: ["ul", "li", "p", "b", "i", "code", "blockquote", "ol", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "em", "pre", "table", "thead", "tbody", "tr", "th", "td", "div", "del", "a", "strong", "br", "img", "span"],
            ALLOWED_ATTR: ["href", "data-href", "target", "title", "src", "alt", "class", "style", "data-code", "width", "height", "align"],
            ALLOW_UNKNOWN_PROTOCOLS: !0
          },
          allowedSchemes: t
        };
      })(e);
      J("uponSanitizeAttribute", (e, t) => {
        if ("style" !== t.attrName && "class" !== t.attrName) ;else {
          if ("SPAN" === e.tagName) {
            if ("style" === t.attrName) return void (t.keepAttr = /^(color\:#[0-9a-fA-F]+;)?(background-color\:#[0-9a-fA-F]+;)?$/.test(t.attrValue));
            if ("class" === t.attrName) return void (t.keepAttr = /^codicon codicon-[a-z\-]+( codicon-modifier-[a-z\-]+)?$/.test(t.attrValue));
          }
          t.keepAttr = !1;
        }
      });
      const o = document.createElement("a");
      J("afterSanitizeAttributes", e => {
        for (const t of ["href", "src"]) e.hasAttribute(t) && ((o.href = e.getAttribute(t)), n.includes(o.protocol.replace(/:$/, "")) || e.removeAttribute(t));
      });
      try {
        return X(t, Object.assign(Object.assign({}, i), {
          RETURN_TRUSTED_TYPE: !0
        }));
      } finally {
        (ee("uponSanitizeAttribute"), ee("afterSanitizeAttributes"));
      }
    })(e, f)), h(), t.asyncRenderCallback)) for (const e of l.getElementsByTagName("img")) {
      const i = s.add(n.nm(e, "load", () => {
        (i.dispose(), t.asyncRenderCallback());
      }));
    }
    return {
      element: l,
      dispose: () => {
        ((r = !0), a.cancel(), s.dispose());
      }
    };
  }
  var ye,
    Ce = i(50988),
    xe = i(71531),
    Se = i(55713),
    ke = i(44101),
    Le = i(89052),
    Ne = function (e, t, i, n) {
      var o,
        s = arguments.length,
        r = s < 3 ? t : null === n ? (n = Object.getOwnPropertyDescriptor(t, i)) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(t, i, r) : o(t, i)) || r);
      return (s > 3 && r && Object.defineProperty(t, i, r), r);
    },
    De = function (e, t) {
      return function (i, n) {
        t(i, n, e);
      };
    },
    Ie = function (e, t, i, n) {
      return new (i || (i = Promise))(function (o, s) {
        function r(e) {
          try {
            l(n.next(e));
          } catch (e) {
            s(e);
          }
        }
        function a(e) {
          try {
            l(n.throw(e));
          } catch (e) {
            s(e);
          }
        }
        function l(e) {
          var t;
          e.done ? o(e.value) : ((t = e.value), t instanceof i ? t : new i(function (e) {
            e(t);
          })).then(r, a);
        }
        l((n = n.apply(e, t || [])).next());
      });
    };
  let Ee = class e {
    constructor(e, t, i) {
      ((this._options = e), (this._modeService = t), (this._openerService = i), (this._onDidRenderAsync = new le.Q5()), (this.onDidRenderAsync = this._onDidRenderAsync.event));
    }
    dispose() {
      this._onDidRenderAsync.dispose();
    }
    render(e, t, i) {
      if (!e) {
        return {
          element: document.createElement("span"),
          dispose: () => {}
        };
      }
      const n = new ue.SL();
      return {
        element: n.add(we(e, Object.assign(Object.assign({}, this._getRenderOptions(e, n)), t), i)).element,
        dispose: () => n.dispose()
      };
    }
    _getRenderOptions(t, i) {
      return {
        baseUrl: this._options.baseUrl,
        codeBlockRenderer: (t, i) => Ie(this, void 0, void 0, function* () {
          var n, o, s, r;
          let a;
          (t ? (a = this._modeService.getModeIdForLanguageName(t)) : this._options.editor && (a = null === (n = this._options.editor.getModel()) || void 0 === n ? void 0 : n.getLanguageId()), a || (a = "plaintext"), this._modeService.triggerMode(a));
          const l = null !== (o = yield ke.RW.getPromise(a)) && void 0 !== o ? o : void 0,
            c = document.createElement("span");
          if (((c.innerHTML = null !== (r = null === (s = e._ttpTokenizer) || void 0 === s ? void 0 : s.createHTML(i, this._modeService.languageIdCodec, l)) && void 0 !== r ? r : (0, Se.C)(i, this._modeService.languageIdCodec, l)), this._options.editor)) {
            const e = this._options.editor.getOption(43);
            Le.V.applyFontInfoSlow(c, e);
          } else this._options.codeBlockFontFamily && (c.style.fontFamily = this._options.codeBlockFontFamily);
          return c;
        }),
        asyncRenderCallback: () => this._onDidRenderAsync.fire(),
        actionHandler: {
          callback: e => this._openerService.open(e, {
            fromUserGesture: !0,
            allowContributedOpeners: !0,
            allowCommands: t.isTrusted
          }).catch(ae.dL),
          disposables: i
        }
      };
    }
  };
  ((Ee._ttpTokenizer = null === (ye = window.trustedTypes) || void 0 === ye ? void 0 : ye.createPolicy("tokenizeToString", {
    createHTML: (e, t, i) => (0, Se.C)(e, t, i)
  })), (Ee = Ne([De(1, xe.h), De(2, Ce.v4)], Ee)));
};