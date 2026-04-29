module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Gi: () => l,
    WX: () => r,
    lg: () => n
  });
  var n,
    o = i(1432),
    s = i(70666);
  !(function (e) {
    ((e.inMemory = "inmemory"), (e.vscode = "vscode"), (e.internal = "private"), (e.walkThrough = "walkThrough"), (e.walkThroughSnippet = "walkThroughSnippet"), (e.http = "http"), (e.https = "https"), (e.file = "file"), (e.mailto = "mailto"), (e.untitled = "untitled"), (e.data = "data"), (e.command = "command"), (e.vscodeRemote = "vscode-remote"), (e.vscodeRemoteResource = "vscode-remote-resource"), (e.userData = "vscode-userdata"), (e.vscodeCustomEditor = "vscode-custom-editor"), (e.vscodeNotebook = "vscode-notebook"), (e.vscodeNotebookCell = "vscode-notebook-cell"), (e.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata"), (e.vscodeNotebookCellOutput = "vscode-notebook-cell-output"), (e.vscodeInteractive = "vscode-interactive"), (e.vscodeInteractiveInput = "vscode-interactive-input"), (e.vscodeSettings = "vscode-settings"), (e.vscodeWorkspaceTrust = "vscode-workspace-trust"), (e.vscodeTerminal = "vscode-terminal"), (e.webviewPanel = "webview-panel"), (e.vscodeWebview = "vscode-webview"), (e.extension = "extension"), (e.vscodeFileResource = "vscode-file"), (e.tmp = "tmp"));
  })(n || (n = {}));
  const r = new (class {
    constructor() {
      ((this._hosts = Object.create(null)), (this._ports = Object.create(null)), (this._connectionTokens = Object.create(null)), (this._preferredWebSchema = "http"), (this._delegate = null));
    }
    setPreferredWebSchema(e) {
      this._preferredWebSchema = e;
    }
    rewrite(e) {
      if (this._delegate) return this._delegate(e);
      const t = e.authority;
      let i = this._hosts[t];
      i && -1 !== i.indexOf(":") && (i = `[${i}]`);
      const r = this._ports[t],
        a = this._connectionTokens[t];
      let l = `path=${encodeURIComponent(e.path)}`;
      return ("string" == typeof a && (l += `&tkn=${encodeURIComponent(a)}`), s.o.from({
        scheme: o.$L ? this._preferredWebSchema : n.vscodeRemoteResource,
        authority: `${i}:${r}`,
        path: "/vscode-remote-resource",
        query: l
      }));
    }
  })();
  class a {
    asBrowserUri(e, t) {
      const i = this.toUri(e, t);
      return i.scheme === n.vscodeRemote ? r.rewrite(i) : i.scheme === n.file && (o.tY || ("function" == typeof o.li.importScripts && o.li.origin === `${n.vscodeFileResource}://${a.FALLBACK_AUTHORITY}`)) ? i.with({
        scheme: n.vscodeFileResource,
        authority: i.authority || a.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      }) : i;
    }
    toUri(e, t) {
      return s.o.isUri(e) ? e : s.o.parse(t.toUrl(e));
    }
  }
  a.FALLBACK_AUTHORITY = "vscode-app";
  const l = new a();
};