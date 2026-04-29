module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-tl-row {\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tposition: relative;\n}\n\n.monaco-tl-indent {\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 16px;\n\tpointer-events: none;\n}\n\n.hide-arrows .monaco-tl-indent {\n\tleft: 12px;\n}\n\n.monaco-tl-indent > .indent-guide {\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\theight: 100%;\n\tborder-left: 1px solid transparent;\n\ttransition: border-color 0.1s linear;\n}\n\n.monaco-tl-twistie,\n.monaco-tl-contents {\n\theight: 100%;\n}\n\n.monaco-tl-twistie {\n\tfont-size: 10px;\n\ttext-align: right;\n\tpadding-right: 6px;\n\tflex-shrink: 0;\n\twidth: 16px;\n\tdisplay: flex !important;\n\talign-items: center;\n\tjustify-content: center;\n\ttransform: translateX(3px);\n}\n\n.monaco-tl-contents {\n\tflex: 1;\n\toverflow: hidden;\n}\n\n.monaco-tl-twistie::before {\n\tborder-radius: 20px;\n}\n\n.monaco-tl-twistie.collapsed::before {\n\ttransform: rotate(-90deg);\n}\n\n.monaco-tl-twistie.codicon-tree-item-loading::before {\n\t/* Use steps to throttle FPS to reduce CPU usage */\n\tanimation: codicon-spin 1.25s steps(30) infinite;\n}\n", ""]);
  const a = r;
};