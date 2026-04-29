module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CL: () => o,
    Pi: () => r,
    QI: () => s
  });
  var n = i(96518);
  function o(e) {
    return (!(!e || "function" != typeof e.getEditorType) && e.getEditorType() === n.g.ICodeEditor);
  }
  function s(e) {
    return (!(!e || "function" != typeof e.getEditorType) && e.getEditorType() === n.g.IDiffEditor);
  }
  function r(e) {
    return o(e) ? e : s(e) ? e.getModifiedEditor() : null;
  }
};