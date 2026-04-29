module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* START cover the case that slider is visible on mouseover */\n.monaco-editor .minimap.slider-mouseover .minimap-slider {\n\topacity: 0;\n\ttransition: opacity 100ms linear;\n}\n.monaco-editor .minimap.slider-mouseover:hover .minimap-slider {\n\topacity: 1;\n}\n.monaco-editor .minimap.slider-mouseover .minimap-slider.active {\n\topacity: 1;\n}\n/* END cover the case that slider is visible on mouseover */\n\n.monaco-editor .minimap-shadow-hidden {\n\tposition: absolute;\n\twidth: 0;\n}\n.monaco-editor .minimap-shadow-visible {\n\tposition: absolute;\n\tleft: -6px;\n\twidth: 6px;\n}\n.monaco-editor.no-minimap-shadow .minimap-shadow-visible {\n\tposition: absolute;\n\tleft: -1px;\n\twidth: 1px;\n}\n", ""]);
  const a = r;
};