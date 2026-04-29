module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    X4: () => r,
    jC: () => a,
    xo: () => s
  });
  var n = i(63580);
  class o {
    constructor(e, t, i = t) {
      ((this.modifierLabels = [null]), (this.modifierLabels[2] = e), (this.modifierLabels[1] = t), (this.modifierLabels[3] = i));
    }
    toLabel(e, t, i) {
      if (0 === t.length) return null;
      const n = [];
      for (let o = 0, s = t.length; o < s; o++) {
        const s = t[o],
          r = i(s);
        if (null === r) return null;
        n[o] = l(s, r, this.modifierLabels[e]);
      }
      return n.join(" ");
    }
  }
  const s = new o({
      ctrlKey: "⌃",
      shiftKey: "⇧",
      altKey: "⌥",
      metaKey: "⌘",
      separator: ""
    }, {
      ctrlKey: n.N({
        key: "ctrlKey",
        comment: ["This is the short form for the Control key on the keyboard"]
      }, "Ctrl"),
      shiftKey: n.N({
        key: "shiftKey",
        comment: ["This is the short form for the Shift key on the keyboard"]
      }, "Shift"),
      altKey: n.N({
        key: "altKey",
        comment: ["This is the short form for the Alt key on the keyboard"]
      }, "Alt"),
      metaKey: n.N({
        key: "windowsKey",
        comment: ["This is the short form for the Windows key on the keyboard"]
      }, "Windows"),
      separator: "+"
    }, {
      ctrlKey: n.N({
        key: "ctrlKey",
        comment: ["This is the short form for the Control key on the keyboard"]
      }, "Ctrl"),
      shiftKey: n.N({
        key: "shiftKey",
        comment: ["This is the short form for the Shift key on the keyboard"]
      }, "Shift"),
      altKey: n.N({
        key: "altKey",
        comment: ["This is the short form for the Alt key on the keyboard"]
      }, "Alt"),
      metaKey: n.N({
        key: "superKey",
        comment: ["This is the short form for the Super key on the keyboard"]
      }, "Super"),
      separator: "+"
    }),
    r = new o({
      ctrlKey: n.N({
        key: "ctrlKey.long",
        comment: ["This is the long form for the Control key on the keyboard"]
      }, "Control"),
      shiftKey: n.N({
        key: "shiftKey.long",
        comment: ["This is the long form for the Shift key on the keyboard"]
      }, "Shift"),
      altKey: n.N({
        key: "altKey.long",
        comment: ["This is the long form for the Alt key on the keyboard"]
      }, "Alt"),
      metaKey: n.N({
        key: "cmdKey.long",
        comment: ["This is the long form for the Command key on the keyboard"]
      }, "Command"),
      separator: "+"
    }, {
      ctrlKey: n.N({
        key: "ctrlKey.long",
        comment: ["This is the long form for the Control key on the keyboard"]
      }, "Control"),
      shiftKey: n.N({
        key: "shiftKey.long",
        comment: ["This is the long form for the Shift key on the keyboard"]
      }, "Shift"),
      altKey: n.N({
        key: "altKey.long",
        comment: ["This is the long form for the Alt key on the keyboard"]
      }, "Alt"),
      metaKey: n.N({
        key: "windowsKey.long",
        comment: ["This is the long form for the Windows key on the keyboard"]
      }, "Windows"),
      separator: "+"
    }, {
      ctrlKey: n.N({
        key: "ctrlKey.long",
        comment: ["This is the long form for the Control key on the keyboard"]
      }, "Control"),
      shiftKey: n.N({
        key: "shiftKey.long",
        comment: ["This is the long form for the Shift key on the keyboard"]
      }, "Shift"),
      altKey: n.N({
        key: "altKey.long",
        comment: ["This is the long form for the Alt key on the keyboard"]
      }, "Alt"),
      metaKey: n.N({
        key: "superKey.long",
        comment: ["This is the long form for the Super key on the keyboard"]
      }, "Super"),
      separator: "+"
    }),
    a = new o({
      ctrlKey: "Ctrl",
      shiftKey: "Shift",
      altKey: "Alt",
      metaKey: "Cmd",
      separator: "+"
    }, {
      ctrlKey: "Ctrl",
      shiftKey: "Shift",
      altKey: "Alt",
      metaKey: "Super",
      separator: "+"
    });
  function l(e, t, i) {
    if (null === t) return "";
    const n = [];
    return (e.ctrlKey && n.push(i.ctrlKey), e.shiftKey && n.push(i.shiftKey), e.altKey && n.push(i.altKey), e.metaKey && n.push(i.metaKey), "" !== t && n.push(t), n.join(i.separator));
  }
};