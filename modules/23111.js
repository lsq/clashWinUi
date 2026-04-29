module.exports = (e, t, i) => {
  "use strict";

  i.r(t);
  var n = i(16830),
    o = i(82334),
    s = i(63580);
  class r extends n.R6 {
    constructor() {
      super({
        id: "editor.action.fontZoomIn",
        label: s.N("EditorFontZoomIn.label", "Editor Font Zoom In"),
        alias: "Editor Font Zoom In",
        precondition: void 0
      });
    }
    run(e, t) {
      o.C.setZoomLevel(o.C.getZoomLevel() + 1);
    }
  }
  class a extends n.R6 {
    constructor() {
      super({
        id: "editor.action.fontZoomOut",
        label: s.N("EditorFontZoomOut.label", "Editor Font Zoom Out"),
        alias: "Editor Font Zoom Out",
        precondition: void 0
      });
    }
    run(e, t) {
      o.C.setZoomLevel(o.C.getZoomLevel() - 1);
    }
  }
  class l extends n.R6 {
    constructor() {
      super({
        id: "editor.action.fontZoomReset",
        label: s.N("EditorFontZoomReset.label", "Editor Font Zoom Reset"),
        alias: "Editor Font Zoom Reset",
        precondition: void 0
      });
    }
    run(e, t) {
      o.C.setZoomLevel(0);
    }
  }
  ((0, n.Qr)(r), (0, n.Qr)(a), (0, n.Qr)(l));
};