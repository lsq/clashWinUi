module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => p
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s),
    a = i(61667),
    l = i.n(a),
    c = new URL(i(4768), i.b),
    d = new URL(i(35555), i.b),
    h = r()(o()),
    u = l()(c),
    g = l()(d);
  h.push([e.id, `/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-mouse-cursor-text {\n\tcursor: text;\n}\n\n/* The following selector looks a bit funny, but that is needed to cover all the workbench and the editor!! */\n.vs-dark .mac .monaco-mouse-cursor-text, .hc-black .mac .monaco-mouse-cursor-text,\n.vs-dark.mac .monaco-mouse-cursor-text, .hc-black.mac .monaco-mouse-cursor-text {\n\tcursor: -webkit-image-set(url(${u}) 1x, url(${g}) 2x) 5 8, text;\n}\n`, ""]);
  const p = h;
};