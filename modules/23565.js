module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.monaco-editor .monaco-editor-overlaymessage {\n\tpadding-bottom: 8px;\n\tz-index: 10000;\n}\n\n.monaco-editor .monaco-editor-overlaymessage.below {\n\tpadding-bottom: 0;\n\tpadding-top: 8px;\n\tz-index: 10000;\n}\n\n@keyframes fadeIn {\n\tfrom { opacity: 0; }\n\tto { opacity: 1; }\n}\n.monaco-editor .monaco-editor-overlaymessage.fadeIn {\n\tanimation: fadeIn 150ms ease-out;\n}\n\n@keyframes fadeOut {\n\tfrom { opacity: 1; }\n\tto { opacity: 0; }\n}\n.monaco-editor .monaco-editor-overlaymessage.fadeOut {\n\tanimation: fadeOut 100ms ease-out;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .message {\n\tpadding: 1px 4px;\n}\n\n.monaco-editor .monaco-editor-overlaymessage .anchor {\n\twidth: 0 !important;\n\theight: 0 !important;\n\tborder-color: transparent;\n\tborder-style: solid;\n\tz-index: 1000;\n\tborder-width: 8px;\n\tposition: absolute;\n}\n\n.monaco-editor .monaco-editor-overlaymessage:not(.below) .anchor.top,\n.monaco-editor .monaco-editor-overlaymessage.below .anchor.below {\n\tdisplay: none;\n}\n\n.monaco-editor .monaco-editor-overlaymessage.below .anchor.top {\n\tdisplay: inherit;\n\ttop: -8px;\n}\n", ""]);
  const a = r;
};