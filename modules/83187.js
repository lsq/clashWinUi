module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), (0, i(25552).H)({
    id: "python",
    extensions: [".py", ".rpy", ".pyw", ".cpy", ".gyp", ".gypi"],
    aliases: ["Python", "py"],
    firstLine: "^#!/.*\\bpython[0-9.-]*\\b",
    loader: function () {
      return i.e(287).then(i.bind(i, 37287));
    }
  }));
};