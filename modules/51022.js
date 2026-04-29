module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Arrows */\n.monaco-scrollable-element > .scrollbar > .scra {\n\tcursor: pointer;\n\tfont-size: 11px !important;\n}\n\n.monaco-scrollable-element > .visible {\n\topacity: 1;\n\n\t/* Background rule added for IE9 - to allow clicks on dom node */\n\tbackground:rgba(0,0,0,0);\n\n\ttransition: opacity 100ms linear;\n}\n.monaco-scrollable-element > .invisible {\n\topacity: 0;\n\tpointer-events: none;\n}\n.monaco-scrollable-element > .invisible.fade {\n\ttransition: opacity 800ms linear;\n}\n\n/* Scrollable Content Inset Shadow */\n.monaco-scrollable-element > .shadow {\n\tposition: absolute;\n\tdisplay: none;\n}\n.monaco-scrollable-element > .shadow.top {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 3px;\n\theight: 3px;\n\twidth: 100%;\n}\n.monaco-scrollable-element > .shadow.left {\n\tdisplay: block;\n\ttop: 3px;\n\tleft: 0;\n\theight: 100%;\n\twidth: 3px;\n}\n.monaco-scrollable-element > .shadow.top-left-corner {\n\tdisplay: block;\n\ttop: 0;\n\tleft: 0;\n\theight: 3px;\n\twidth: 3px;\n}\n", ""]);
  const a = r;
};