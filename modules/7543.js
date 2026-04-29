module.exports = (e, t, i) => {
  "use strict";

  (i.r(t), i.d(t, {
    default: () => a
  }));
  var n = i(8081),
    o = i.n(n),
    s = i(23645),
    r = i.n(s)()(o());
  r.push([e.id, "/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.codicon-wrench-subaction {\n\topacity: 0.5;\n}\n\n@keyframes codicon-spin {\n\t100% {\n\t\ttransform:rotate(360deg);\n\t}\n}\n\n.codicon-sync.codicon-modifier-spin,\n.codicon-loading.codicon-modifier-spin,\n.codicon-gear.codicon-modifier-spin,\n.codicon-notebook-state-executing.codicon-modifier-spin {\n\t/* Use steps to throttle FPS to reduce CPU usage */\n\tanimation: codicon-spin 1.5s steps(30) infinite;\n}\n\n.codicon-modifier-disabled {\n\topacity: 0.4;\n}\n\n/* custom speed & easing for loading icon */\n.codicon-loading,\n.codicon-tree-item-loading::before {\n\tanimation-duration: 1s !important;\n\tanimation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;\n}\n", ""]);
  const a = r;
};