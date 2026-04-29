module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Uncomment to see lines flashing when they're painted */\n/*.monaco-editor .view-lines > .view-line {\n\tbackground-color: none;\n\tanimation-name: flash-background;\n\tanimation-duration: 800ms;\n}\n@keyframes flash-background {\n\t0%   { background-color: lightgreen; }\n\t100% { background-color: none }\n}*/\n\n.mtkcontrol {\n\tcolor: rgb(255, 255, 255) !important;\n\tbackground: rgb(150, 0, 0) !important;\n}\n\n.monaco-editor.no-user-select .lines-content,\n.monaco-editor.no-user-select .view-line,\n.monaco-editor.no-user-select .view-lines {\n\t-moz-user-select: none;\n\t     user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n}\n\n.monaco-editor .view-lines {\n\twhite-space: nowrap;\n}\n\n.monaco-editor .view-line {\n\tposition: absolute;\n\twidth: 100%;\n}\n\n.monaco-editor .mtkz {\n\tdisplay: inline-block;\n}\n\n/* TODO@tokenization bootstrap fix */\n/*.monaco-editor .view-line > span > span {\n\tfloat: none;\n\tmin-height: inherit;\n\tmargin-left: inherit;\n}*/\n", ""]);
  const a = r;
};