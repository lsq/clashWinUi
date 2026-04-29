module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => u
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s),
    a = i(61667),
    l = i.n(a),
    c = new URL(i(94748), i.b),
    d = r()(o()),
    h = l()(c);
  d.push([e.id, `/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.colorpicker-widget {\n\theight: 190px;\n\t-moz-user-select: none;\n\t     user-select: none;\n\t-webkit-user-select: none;\n\t-ms-user-select: none;\n}\n\n.monaco-editor .colorpicker-hover:focus {\n\toutline: none;\n}\n\n\n/* Header */\n\n.colorpicker-header {\n\tdisplay: flex;\n\theight: 24px;\n\tposition: relative;\n\tbackground: url(${h});\n\tbackground-size: 9px 9px;\n\t-ms-interpolation-mode: nearest-neighbor;\n\t    image-rendering: pixelated;\n}\n\n.colorpicker-header .picked-color {\n\twidth: 216px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tline-height: 24px;\n\tcursor: pointer;\n\tcolor: white;\n\tflex: 1;\n}\n\n.colorpicker-header .picked-color .codicon {\n\tcolor: inherit;\n\tfont-size: 14px;\n\tposition: absolute;\n\tleft: 8px;\n}\n\n.colorpicker-header .picked-color.light {\n\tcolor: black;\n}\n\n.colorpicker-header .original-color {\n\twidth: 74px;\n\tz-index: inherit;\n\tcursor: pointer;\n}\n\n\n/* Body */\n\n.colorpicker-body {\n\tdisplay: flex;\n\tpadding: 8px;\n\tposition: relative;\n}\n\n.colorpicker-body .saturation-wrap {\n\toverflow: hidden;\n\theight: 150px;\n\tposition: relative;\n\tmin-width: 220px;\n\tflex: 1;\n}\n\n.colorpicker-body .saturation-box {\n\theight: 150px;\n\tposition: absolute;\n}\n\n.colorpicker-body .saturation-selection {\n\twidth: 9px;\n\theight: 9px;\n\tmargin: -5px 0 0 -5px;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-radius: 100%;\n\tbox-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);\n\tposition: absolute;\n}\n\n.colorpicker-body .strip {\n\twidth: 25px;\n\theight: 150px;\n}\n\n.colorpicker-body .hue-strip {\n\tposition: relative;\n\tmargin-left: 8px;\n\tcursor: grab;\n\tbackground: linear-gradient(to bottom, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);\n}\n\n.colorpicker-body .opacity-strip {\n\tposition: relative;\n\tmargin-left: 8px;\n\tcursor: grab;\n\tbackground: url(${h});\n\tbackground-size: 9px 9px;\n\t-ms-interpolation-mode: nearest-neighbor;\n\t    image-rendering: pixelated;\n}\n\n.colorpicker-body .strip.grabbing {\n\tcursor: grabbing;\n}\n\n.colorpicker-body .slider {\n\tposition: absolute;\n\ttop: 0;\n\tleft: -2px;\n\twidth: calc(100% + 4px);\n\theight: 4px;\n\tbox-sizing: border-box;\n\tborder: 1px solid rgba(255, 255, 255, 0.71);\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0.85);\n}\n\n.colorpicker-body .strip .overlay {\n\theight: 150px;\n\tpointer-events: none;\n}\n`, ""]);
  const u = d;
};