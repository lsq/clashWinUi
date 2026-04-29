module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    CM: () => r,
    JL: () => a,
    dT: () => c,
    fK: () => s,
    lA: () => l
  });
  var n = i(4669);
  const o = new (class {
      constructor() {
        ((this._icons = new Map()), (this._onDidRegister = new n.Q5()));
      }
      add(e) {
        const t = this._icons.get(e.id);
        t ? e.description ? (t.description = e.description) : console.error(`Duplicate registration of codicon ${e.id}`) : (this._icons.set(e.id, e), this._onDidRegister.fire(e));
      }
      get(e) {
        return this._icons.get(e);
      }
      get all() {
        return this._icons.values();
      }
      get onDidRegister() {
        return this._onDidRegister.event;
      }
    })(),
    s = o;
  function r(e, t) {
    return new l(e, t);
  }
  function a(e) {
    return e ? e.replace(/\$\((.*?)\)/g, (e, t) => ` ${t} `).trim() : "";
  }
  class l {
    constructor(e, t, i) {
      ((this.id = e), (this.definition = t), (this.description = i), o.add(this));
    }
    get classNames() {
      return "codicon codicon-" + this.id;
    }
    get classNamesArray() {
      return ["codicon", "codicon-" + this.id];
    }
    get cssSelector() {
      return ".codicon.codicon-" + this.id;
    }
  }
  var c;
  (!(function (e) {
    ((e.iconNameSegment = "[A-Za-z0-9]+"), (e.iconNameExpression = "[A-Za-z0-9\\-]+"), (e.iconModifierExpression = "~[A-Za-z]+"));
    const t = new RegExp(`^(${e.iconNameExpression})(${e.iconModifierExpression})?$`);
    function i(e) {
      if (e instanceof l) return ["codicon", "codicon-" + e.id];
      const n = t.exec(e.id);
      if (!n) return i(l.error);
      let [, o, s] = n;
      const r = ["codicon", "codicon-" + o];
      return (s && r.push("codicon-modifier-" + s.substr(1)), r);
    }
    ((e.asClassNameArray = i), (e.asClassName = function (e) {
      return i(e).join(" ");
    }), (e.asCSSSelector = function (e) {
      return "." + i(e).join(".");
    }));
  })(c || (c = {})), (function (e) {
    ((e.add = new e("add", {
      fontCharacter: "\\ea60"
    })), (e.plus = new e("plus", e.add.definition)), (e.gistNew = new e("gist-new", e.add.definition)), (e.repoCreate = new e("repo-create", e.add.definition)), (e.lightbulb = new e("lightbulb", {
      fontCharacter: "\\ea61"
    })), (e.lightBulb = new e("light-bulb", {
      fontCharacter: "\\ea61"
    })), (e.repo = new e("repo", {
      fontCharacter: "\\ea62"
    })), (e.repoDelete = new e("repo-delete", {
      fontCharacter: "\\ea62"
    })), (e.gistFork = new e("gist-fork", {
      fontCharacter: "\\ea63"
    })), (e.repoForked = new e("repo-forked", {
      fontCharacter: "\\ea63"
    })), (e.gitPullRequest = new e("git-pull-request", {
      fontCharacter: "\\ea64"
    })), (e.gitPullRequestAbandoned = new e("git-pull-request-abandoned", {
      fontCharacter: "\\ea64"
    })), (e.recordKeys = new e("record-keys", {
      fontCharacter: "\\ea65"
    })), (e.keyboard = new e("keyboard", {
      fontCharacter: "\\ea65"
    })), (e.tag = new e("tag", {
      fontCharacter: "\\ea66"
    })), (e.tagAdd = new e("tag-add", {
      fontCharacter: "\\ea66"
    })), (e.tagRemove = new e("tag-remove", {
      fontCharacter: "\\ea66"
    })), (e.person = new e("person", {
      fontCharacter: "\\ea67"
    })), (e.personFollow = new e("person-follow", {
      fontCharacter: "\\ea67"
    })), (e.personOutline = new e("person-outline", {
      fontCharacter: "\\ea67"
    })), (e.personFilled = new e("person-filled", {
      fontCharacter: "\\ea67"
    })), (e.gitBranch = new e("git-branch", {
      fontCharacter: "\\ea68"
    })), (e.gitBranchCreate = new e("git-branch-create", {
      fontCharacter: "\\ea68"
    })), (e.gitBranchDelete = new e("git-branch-delete", {
      fontCharacter: "\\ea68"
    })), (e.sourceControl = new e("source-control", {
      fontCharacter: "\\ea68"
    })), (e.mirror = new e("mirror", {
      fontCharacter: "\\ea69"
    })), (e.mirrorPublic = new e("mirror-public", {
      fontCharacter: "\\ea69"
    })), (e.star = new e("star", {
      fontCharacter: "\\ea6a"
    })), (e.starAdd = new e("star-add", {
      fontCharacter: "\\ea6a"
    })), (e.starDelete = new e("star-delete", {
      fontCharacter: "\\ea6a"
    })), (e.starEmpty = new e("star-empty", {
      fontCharacter: "\\ea6a"
    })), (e.comment = new e("comment", {
      fontCharacter: "\\ea6b"
    })), (e.commentAdd = new e("comment-add", {
      fontCharacter: "\\ea6b"
    })), (e.alert = new e("alert", {
      fontCharacter: "\\ea6c"
    })), (e.warning = new e("warning", {
      fontCharacter: "\\ea6c"
    })), (e.search = new e("search", {
      fontCharacter: "\\ea6d"
    })), (e.searchSave = new e("search-save", {
      fontCharacter: "\\ea6d"
    })), (e.logOut = new e("log-out", {
      fontCharacter: "\\ea6e"
    })), (e.signOut = new e("sign-out", {
      fontCharacter: "\\ea6e"
    })), (e.logIn = new e("log-in", {
      fontCharacter: "\\ea6f"
    })), (e.signIn = new e("sign-in", {
      fontCharacter: "\\ea6f"
    })), (e.eye = new e("eye", {
      fontCharacter: "\\ea70"
    })), (e.eyeUnwatch = new e("eye-unwatch", {
      fontCharacter: "\\ea70"
    })), (e.eyeWatch = new e("eye-watch", {
      fontCharacter: "\\ea70"
    })), (e.circleFilled = new e("circle-filled", {
      fontCharacter: "\\ea71"
    })), (e.primitiveDot = new e("primitive-dot", {
      fontCharacter: "\\ea71"
    })), (e.closeDirty = new e("close-dirty", {
      fontCharacter: "\\ea71"
    })), (e.debugBreakpoint = new e("debug-breakpoint", {
      fontCharacter: "\\ea71"
    })), (e.debugBreakpointDisabled = new e("debug-breakpoint-disabled", {
      fontCharacter: "\\ea71"
    })), (e.debugHint = new e("debug-hint", {
      fontCharacter: "\\ea71"
    })), (e.primitiveSquare = new e("primitive-square", {
      fontCharacter: "\\ea72"
    })), (e.edit = new e("edit", {
      fontCharacter: "\\ea73"
    })), (e.pencil = new e("pencil", {
      fontCharacter: "\\ea73"
    })), (e.info = new e("info", {
      fontCharacter: "\\ea74"
    })), (e.issueOpened = new e("issue-opened", {
      fontCharacter: "\\ea74"
    })), (e.gistPrivate = new e("gist-private", {
      fontCharacter: "\\ea75"
    })), (e.gitForkPrivate = new e("git-fork-private", {
      fontCharacter: "\\ea75"
    })), (e.lock = new e("lock", {
      fontCharacter: "\\ea75"
    })), (e.mirrorPrivate = new e("mirror-private", {
      fontCharacter: "\\ea75"
    })), (e.close = new e("close", {
      fontCharacter: "\\ea76"
    })), (e.removeClose = new e("remove-close", {
      fontCharacter: "\\ea76"
    })), (e.x = new e("x", {
      fontCharacter: "\\ea76"
    })), (e.repoSync = new e("repo-sync", {
      fontCharacter: "\\ea77"
    })), (e.sync = new e("sync", {
      fontCharacter: "\\ea77"
    })), (e.clone = new e("clone", {
      fontCharacter: "\\ea78"
    })), (e.desktopDownload = new e("desktop-download", {
      fontCharacter: "\\ea78"
    })), (e.beaker = new e("beaker", {
      fontCharacter: "\\ea79"
    })), (e.microscope = new e("microscope", {
      fontCharacter: "\\ea79"
    })), (e.vm = new e("vm", {
      fontCharacter: "\\ea7a"
    })), (e.deviceDesktop = new e("device-desktop", {
      fontCharacter: "\\ea7a"
    })), (e.file = new e("file", {
      fontCharacter: "\\ea7b"
    })), (e.fileText = new e("file-text", {
      fontCharacter: "\\ea7b"
    })), (e.more = new e("more", {
      fontCharacter: "\\ea7c"
    })), (e.ellipsis = new e("ellipsis", {
      fontCharacter: "\\ea7c"
    })), (e.kebabHorizontal = new e("kebab-horizontal", {
      fontCharacter: "\\ea7c"
    })), (e.mailReply = new e("mail-reply", {
      fontCharacter: "\\ea7d"
    })), (e.reply = new e("reply", {
      fontCharacter: "\\ea7d"
    })), (e.organization = new e("organization", {
      fontCharacter: "\\ea7e"
    })), (e.organizationFilled = new e("organization-filled", {
      fontCharacter: "\\ea7e"
    })), (e.organizationOutline = new e("organization-outline", {
      fontCharacter: "\\ea7e"
    })), (e.newFile = new e("new-file", {
      fontCharacter: "\\ea7f"
    })), (e.fileAdd = new e("file-add", {
      fontCharacter: "\\ea7f"
    })), (e.newFolder = new e("new-folder", {
      fontCharacter: "\\ea80"
    })), (e.fileDirectoryCreate = new e("file-directory-create", {
      fontCharacter: "\\ea80"
    })), (e.trash = new e("trash", {
      fontCharacter: "\\ea81"
    })), (e.trashcan = new e("trashcan", {
      fontCharacter: "\\ea81"
    })), (e.history = new e("history", {
      fontCharacter: "\\ea82"
    })), (e.clock = new e("clock", {
      fontCharacter: "\\ea82"
    })), (e.folder = new e("folder", {
      fontCharacter: "\\ea83"
    })), (e.fileDirectory = new e("file-directory", {
      fontCharacter: "\\ea83"
    })), (e.symbolFolder = new e("symbol-folder", {
      fontCharacter: "\\ea83"
    })), (e.logoGithub = new e("logo-github", {
      fontCharacter: "\\ea84"
    })), (e.markGithub = new e("mark-github", {
      fontCharacter: "\\ea84"
    })), (e.github = new e("github", {
      fontCharacter: "\\ea84"
    })), (e.terminal = new e("terminal", {
      fontCharacter: "\\ea85"
    })), (e.console = new e("console", {
      fontCharacter: "\\ea85"
    })), (e.repl = new e("repl", {
      fontCharacter: "\\ea85"
    })), (e.zap = new e("zap", {
      fontCharacter: "\\ea86"
    })), (e.symbolEvent = new e("symbol-event", {
      fontCharacter: "\\ea86"
    })), (e.error = new e("error", {
      fontCharacter: "\\ea87"
    })), (e.stop = new e("stop", {
      fontCharacter: "\\ea87"
    })), (e.variable = new e("variable", {
      fontCharacter: "\\ea88"
    })), (e.symbolVariable = new e("symbol-variable", {
      fontCharacter: "\\ea88"
    })), (e.array = new e("array", {
      fontCharacter: "\\ea8a"
    })), (e.symbolArray = new e("symbol-array", {
      fontCharacter: "\\ea8a"
    })), (e.symbolModule = new e("symbol-module", {
      fontCharacter: "\\ea8b"
    })), (e.symbolPackage = new e("symbol-package", {
      fontCharacter: "\\ea8b"
    })), (e.symbolNamespace = new e("symbol-namespace", {
      fontCharacter: "\\ea8b"
    })), (e.symbolObject = new e("symbol-object", {
      fontCharacter: "\\ea8b"
    })), (e.symbolMethod = new e("symbol-method", {
      fontCharacter: "\\ea8c"
    })), (e.symbolFunction = new e("symbol-function", {
      fontCharacter: "\\ea8c"
    })), (e.symbolConstructor = new e("symbol-constructor", {
      fontCharacter: "\\ea8c"
    })), (e.symbolBoolean = new e("symbol-boolean", {
      fontCharacter: "\\ea8f"
    })), (e.symbolNull = new e("symbol-null", {
      fontCharacter: "\\ea8f"
    })), (e.symbolNumeric = new e("symbol-numeric", {
      fontCharacter: "\\ea90"
    })), (e.symbolNumber = new e("symbol-number", {
      fontCharacter: "\\ea90"
    })), (e.symbolStructure = new e("symbol-structure", {
      fontCharacter: "\\ea91"
    })), (e.symbolStruct = new e("symbol-struct", {
      fontCharacter: "\\ea91"
    })), (e.symbolParameter = new e("symbol-parameter", {
      fontCharacter: "\\ea92"
    })), (e.symbolTypeParameter = new e("symbol-type-parameter", {
      fontCharacter: "\\ea92"
    })), (e.symbolKey = new e("symbol-key", {
      fontCharacter: "\\ea93"
    })), (e.symbolText = new e("symbol-text", {
      fontCharacter: "\\ea93"
    })), (e.symbolReference = new e("symbol-reference", {
      fontCharacter: "\\ea94"
    })), (e.goToFile = new e("go-to-file", {
      fontCharacter: "\\ea94"
    })), (e.symbolEnum = new e("symbol-enum", {
      fontCharacter: "\\ea95"
    })), (e.symbolValue = new e("symbol-value", {
      fontCharacter: "\\ea95"
    })), (e.symbolRuler = new e("symbol-ruler", {
      fontCharacter: "\\ea96"
    })), (e.symbolUnit = new e("symbol-unit", {
      fontCharacter: "\\ea96"
    })), (e.activateBreakpoints = new e("activate-breakpoints", {
      fontCharacter: "\\ea97"
    })), (e.archive = new e("archive", {
      fontCharacter: "\\ea98"
    })), (e.arrowBoth = new e("arrow-both", {
      fontCharacter: "\\ea99"
    })), (e.arrowDown = new e("arrow-down", {
      fontCharacter: "\\ea9a"
    })), (e.arrowLeft = new e("arrow-left", {
      fontCharacter: "\\ea9b"
    })), (e.arrowRight = new e("arrow-right", {
      fontCharacter: "\\ea9c"
    })), (e.arrowSmallDown = new e("arrow-small-down", {
      fontCharacter: "\\ea9d"
    })), (e.arrowSmallLeft = new e("arrow-small-left", {
      fontCharacter: "\\ea9e"
    })), (e.arrowSmallRight = new e("arrow-small-right", {
      fontCharacter: "\\ea9f"
    })), (e.arrowSmallUp = new e("arrow-small-up", {
      fontCharacter: "\\eaa0"
    })), (e.arrowUp = new e("arrow-up", {
      fontCharacter: "\\eaa1"
    })), (e.bell = new e("bell", {
      fontCharacter: "\\eaa2"
    })), (e.bold = new e("bold", {
      fontCharacter: "\\eaa3"
    })), (e.book = new e("book", {
      fontCharacter: "\\eaa4"
    })), (e.bookmark = new e("bookmark", {
      fontCharacter: "\\eaa5"
    })), (e.debugBreakpointConditionalUnverified = new e("debug-breakpoint-conditional-unverified", {
      fontCharacter: "\\eaa6"
    })), (e.debugBreakpointConditional = new e("debug-breakpoint-conditional", {
      fontCharacter: "\\eaa7"
    })), (e.debugBreakpointConditionalDisabled = new e("debug-breakpoint-conditional-disabled", {
      fontCharacter: "\\eaa7"
    })), (e.debugBreakpointDataUnverified = new e("debug-breakpoint-data-unverified", {
      fontCharacter: "\\eaa8"
    })), (e.debugBreakpointData = new e("debug-breakpoint-data", {
      fontCharacter: "\\eaa9"
    })), (e.debugBreakpointDataDisabled = new e("debug-breakpoint-data-disabled", {
      fontCharacter: "\\eaa9"
    })), (e.debugBreakpointLogUnverified = new e("debug-breakpoint-log-unverified", {
      fontCharacter: "\\eaaa"
    })), (e.debugBreakpointLog = new e("debug-breakpoint-log", {
      fontCharacter: "\\eaab"
    })), (e.debugBreakpointLogDisabled = new e("debug-breakpoint-log-disabled", {
      fontCharacter: "\\eaab"
    })), (e.briefcase = new e("briefcase", {
      fontCharacter: "\\eaac"
    })), (e.broadcast = new e("broadcast", {
      fontCharacter: "\\eaad"
    })), (e.browser = new e("browser", {
      fontCharacter: "\\eaae"
    })), (e.bug = new e("bug", {
      fontCharacter: "\\eaaf"
    })), (e.calendar = new e("calendar", {
      fontCharacter: "\\eab0"
    })), (e.caseSensitive = new e("case-sensitive", {
      fontCharacter: "\\eab1"
    })), (e.check = new e("check", {
      fontCharacter: "\\eab2"
    })), (e.checklist = new e("checklist", {
      fontCharacter: "\\eab3"
    })), (e.chevronDown = new e("chevron-down", {
      fontCharacter: "\\eab4"
    })), (e.dropDownButton = new e("drop-down-button", e.chevronDown.definition)), (e.chevronLeft = new e("chevron-left", {
      fontCharacter: "\\eab5"
    })), (e.chevronRight = new e("chevron-right", {
      fontCharacter: "\\eab6"
    })), (e.chevronUp = new e("chevron-up", {
      fontCharacter: "\\eab7"
    })), (e.chromeClose = new e("chrome-close", {
      fontCharacter: "\\eab8"
    })), (e.chromeMaximize = new e("chrome-maximize", {
      fontCharacter: "\\eab9"
    })), (e.chromeMinimize = new e("chrome-minimize", {
      fontCharacter: "\\eaba"
    })), (e.chromeRestore = new e("chrome-restore", {
      fontCharacter: "\\eabb"
    })), (e.circleOutline = new e("circle-outline", {
      fontCharacter: "\\eabc"
    })), (e.debugBreakpointUnverified = new e("debug-breakpoint-unverified", {
      fontCharacter: "\\eabc"
    })), (e.circleSlash = new e("circle-slash", {
      fontCharacter: "\\eabd"
    })), (e.circuitBoard = new e("circuit-board", {
      fontCharacter: "\\eabe"
    })), (e.clearAll = new e("clear-all", {
      fontCharacter: "\\eabf"
    })), (e.clippy = new e("clippy", {
      fontCharacter: "\\eac0"
    })), (e.closeAll = new e("close-all", {
      fontCharacter: "\\eac1"
    })), (e.cloudDownload = new e("cloud-download", {
      fontCharacter: "\\eac2"
    })), (e.cloudUpload = new e("cloud-upload", {
      fontCharacter: "\\eac3"
    })), (e.code = new e("code", {
      fontCharacter: "\\eac4"
    })), (e.collapseAll = new e("collapse-all", {
      fontCharacter: "\\eac5"
    })), (e.colorMode = new e("color-mode", {
      fontCharacter: "\\eac6"
    })), (e.commentDiscussion = new e("comment-discussion", {
      fontCharacter: "\\eac7"
    })), (e.compareChanges = new e("compare-changes", {
      fontCharacter: "\\eafd"
    })), (e.creditCard = new e("credit-card", {
      fontCharacter: "\\eac9"
    })), (e.dash = new e("dash", {
      fontCharacter: "\\eacc"
    })), (e.dashboard = new e("dashboard", {
      fontCharacter: "\\eacd"
    })), (e.database = new e("database", {
      fontCharacter: "\\eace"
    })), (e.debugContinue = new e("debug-continue", {
      fontCharacter: "\\eacf"
    })), (e.debugDisconnect = new e("debug-disconnect", {
      fontCharacter: "\\ead0"
    })), (e.debugPause = new e("debug-pause", {
      fontCharacter: "\\ead1"
    })), (e.debugRestart = new e("debug-restart", {
      fontCharacter: "\\ead2"
    })), (e.debugStart = new e("debug-start", {
      fontCharacter: "\\ead3"
    })), (e.debugStepInto = new e("debug-step-into", {
      fontCharacter: "\\ead4"
    })), (e.debugStepOut = new e("debug-step-out", {
      fontCharacter: "\\ead5"
    })), (e.debugStepOver = new e("debug-step-over", {
      fontCharacter: "\\ead6"
    })), (e.debugStop = new e("debug-stop", {
      fontCharacter: "\\ead7"
    })), (e.debug = new e("debug", {
      fontCharacter: "\\ead8"
    })), (e.deviceCameraVideo = new e("device-camera-video", {
      fontCharacter: "\\ead9"
    })), (e.deviceCamera = new e("device-camera", {
      fontCharacter: "\\eada"
    })), (e.deviceMobile = new e("device-mobile", {
      fontCharacter: "\\eadb"
    })), (e.diffAdded = new e("diff-added", {
      fontCharacter: "\\eadc"
    })), (e.diffIgnored = new e("diff-ignored", {
      fontCharacter: "\\eadd"
    })), (e.diffModified = new e("diff-modified", {
      fontCharacter: "\\eade"
    })), (e.diffRemoved = new e("diff-removed", {
      fontCharacter: "\\eadf"
    })), (e.diffRenamed = new e("diff-renamed", {
      fontCharacter: "\\eae0"
    })), (e.diff = new e("diff", {
      fontCharacter: "\\eae1"
    })), (e.discard = new e("discard", {
      fontCharacter: "\\eae2"
    })), (e.editorLayout = new e("editor-layout", {
      fontCharacter: "\\eae3"
    })), (e.emptyWindow = new e("empty-window", {
      fontCharacter: "\\eae4"
    })), (e.exclude = new e("exclude", {
      fontCharacter: "\\eae5"
    })), (e.extensions = new e("extensions", {
      fontCharacter: "\\eae6"
    })), (e.eyeClosed = new e("eye-closed", {
      fontCharacter: "\\eae7"
    })), (e.fileBinary = new e("file-binary", {
      fontCharacter: "\\eae8"
    })), (e.fileCode = new e("file-code", {
      fontCharacter: "\\eae9"
    })), (e.fileMedia = new e("file-media", {
      fontCharacter: "\\eaea"
    })), (e.filePdf = new e("file-pdf", {
      fontCharacter: "\\eaeb"
    })), (e.fileSubmodule = new e("file-submodule", {
      fontCharacter: "\\eaec"
    })), (e.fileSymlinkDirectory = new e("file-symlink-directory", {
      fontCharacter: "\\eaed"
    })), (e.fileSymlinkFile = new e("file-symlink-file", {
      fontCharacter: "\\eaee"
    })), (e.fileZip = new e("file-zip", {
      fontCharacter: "\\eaef"
    })), (e.files = new e("files", {
      fontCharacter: "\\eaf0"
    })), (e.filter = new e("filter", {
      fontCharacter: "\\eaf1"
    })), (e.flame = new e("flame", {
      fontCharacter: "\\eaf2"
    })), (e.foldDown = new e("fold-down", {
      fontCharacter: "\\eaf3"
    })), (e.foldUp = new e("fold-up", {
      fontCharacter: "\\eaf4"
    })), (e.fold = new e("fold", {
      fontCharacter: "\\eaf5"
    })), (e.folderActive = new e("folder-active", {
      fontCharacter: "\\eaf6"
    })), (e.folderOpened = new e("folder-opened", {
      fontCharacter: "\\eaf7"
    })), (e.gear = new e("gear", {
      fontCharacter: "\\eaf8"
    })), (e.gift = new e("gift", {
      fontCharacter: "\\eaf9"
    })), (e.gistSecret = new e("gist-secret", {
      fontCharacter: "\\eafa"
    })), (e.gist = new e("gist", {
      fontCharacter: "\\eafb"
    })), (e.gitCommit = new e("git-commit", {
      fontCharacter: "\\eafc"
    })), (e.gitCompare = new e("git-compare", {
      fontCharacter: "\\eafd"
    })), (e.gitMerge = new e("git-merge", {
      fontCharacter: "\\eafe"
    })), (e.githubAction = new e("github-action", {
      fontCharacter: "\\eaff"
    })), (e.githubAlt = new e("github-alt", {
      fontCharacter: "\\eb00"
    })), (e.globe = new e("globe", {
      fontCharacter: "\\eb01"
    })), (e.grabber = new e("grabber", {
      fontCharacter: "\\eb02"
    })), (e.graph = new e("graph", {
      fontCharacter: "\\eb03"
    })), (e.gripper = new e("gripper", {
      fontCharacter: "\\eb04"
    })), (e.heart = new e("heart", {
      fontCharacter: "\\eb05"
    })), (e.home = new e("home", {
      fontCharacter: "\\eb06"
    })), (e.horizontalRule = new e("horizontal-rule", {
      fontCharacter: "\\eb07"
    })), (e.hubot = new e("hubot", {
      fontCharacter: "\\eb08"
    })), (e.inbox = new e("inbox", {
      fontCharacter: "\\eb09"
    })), (e.issueClosed = new e("issue-closed", {
      fontCharacter: "\\eba4"
    })), (e.issueReopened = new e("issue-reopened", {
      fontCharacter: "\\eb0b"
    })), (e.issues = new e("issues", {
      fontCharacter: "\\eb0c"
    })), (e.italic = new e("italic", {
      fontCharacter: "\\eb0d"
    })), (e.jersey = new e("jersey", {
      fontCharacter: "\\eb0e"
    })), (e.json = new e("json", {
      fontCharacter: "\\eb0f"
    })), (e.kebabVertical = new e("kebab-vertical", {
      fontCharacter: "\\eb10"
    })), (e.key = new e("key", {
      fontCharacter: "\\eb11"
    })), (e.law = new e("law", {
      fontCharacter: "\\eb12"
    })), (e.lightbulbAutofix = new e("lightbulb-autofix", {
      fontCharacter: "\\eb13"
    })), (e.linkExternal = new e("link-external", {
      fontCharacter: "\\eb14"
    })), (e.link = new e("link", {
      fontCharacter: "\\eb15"
    })), (e.listOrdered = new e("list-ordered", {
      fontCharacter: "\\eb16"
    })), (e.listUnordered = new e("list-unordered", {
      fontCharacter: "\\eb17"
    })), (e.liveShare = new e("live-share", {
      fontCharacter: "\\eb18"
    })), (e.loading = new e("loading", {
      fontCharacter: "\\eb19"
    })), (e.location = new e("location", {
      fontCharacter: "\\eb1a"
    })), (e.mailRead = new e("mail-read", {
      fontCharacter: "\\eb1b"
    })), (e.mail = new e("mail", {
      fontCharacter: "\\eb1c"
    })), (e.markdown = new e("markdown", {
      fontCharacter: "\\eb1d"
    })), (e.megaphone = new e("megaphone", {
      fontCharacter: "\\eb1e"
    })), (e.mention = new e("mention", {
      fontCharacter: "\\eb1f"
    })), (e.milestone = new e("milestone", {
      fontCharacter: "\\eb20"
    })), (e.mortarBoard = new e("mortar-board", {
      fontCharacter: "\\eb21"
    })), (e.move = new e("move", {
      fontCharacter: "\\eb22"
    })), (e.multipleWindows = new e("multiple-windows", {
      fontCharacter: "\\eb23"
    })), (e.mute = new e("mute", {
      fontCharacter: "\\eb24"
    })), (e.noNewline = new e("no-newline", {
      fontCharacter: "\\eb25"
    })), (e.note = new e("note", {
      fontCharacter: "\\eb26"
    })), (e.octoface = new e("octoface", {
      fontCharacter: "\\eb27"
    })), (e.openPreview = new e("open-preview", {
      fontCharacter: "\\eb28"
    })), (e.package_ = new e("package", {
      fontCharacter: "\\eb29"
    })), (e.paintcan = new e("paintcan", {
      fontCharacter: "\\eb2a"
    })), (e.pin = new e("pin", {
      fontCharacter: "\\eb2b"
    })), (e.play = new e("play", {
      fontCharacter: "\\eb2c"
    })), (e.run = new e("run", {
      fontCharacter: "\\eb2c"
    })), (e.plug = new e("plug", {
      fontCharacter: "\\eb2d"
    })), (e.preserveCase = new e("preserve-case", {
      fontCharacter: "\\eb2e"
    })), (e.preview = new e("preview", {
      fontCharacter: "\\eb2f"
    })), (e.project = new e("project", {
      fontCharacter: "\\eb30"
    })), (e.pulse = new e("pulse", {
      fontCharacter: "\\eb31"
    })), (e.question = new e("question", {
      fontCharacter: "\\eb32"
    })), (e.quote = new e("quote", {
      fontCharacter: "\\eb33"
    })), (e.radioTower = new e("radio-tower", {
      fontCharacter: "\\eb34"
    })), (e.reactions = new e("reactions", {
      fontCharacter: "\\eb35"
    })), (e.references = new e("references", {
      fontCharacter: "\\eb36"
    })), (e.refresh = new e("refresh", {
      fontCharacter: "\\eb37"
    })), (e.regex = new e("regex", {
      fontCharacter: "\\eb38"
    })), (e.remoteExplorer = new e("remote-explorer", {
      fontCharacter: "\\eb39"
    })), (e.remote = new e("remote", {
      fontCharacter: "\\eb3a"
    })), (e.remove = new e("remove", {
      fontCharacter: "\\eb3b"
    })), (e.replaceAll = new e("replace-all", {
      fontCharacter: "\\eb3c"
    })), (e.replace = new e("replace", {
      fontCharacter: "\\eb3d"
    })), (e.repoClone = new e("repo-clone", {
      fontCharacter: "\\eb3e"
    })), (e.repoForcePush = new e("repo-force-push", {
      fontCharacter: "\\eb3f"
    })), (e.repoPull = new e("repo-pull", {
      fontCharacter: "\\eb40"
    })), (e.repoPush = new e("repo-push", {
      fontCharacter: "\\eb41"
    })), (e.report = new e("report", {
      fontCharacter: "\\eb42"
    })), (e.requestChanges = new e("request-changes", {
      fontCharacter: "\\eb43"
    })), (e.rocket = new e("rocket", {
      fontCharacter: "\\eb44"
    })), (e.rootFolderOpened = new e("root-folder-opened", {
      fontCharacter: "\\eb45"
    })), (e.rootFolder = new e("root-folder", {
      fontCharacter: "\\eb46"
    })), (e.rss = new e("rss", {
      fontCharacter: "\\eb47"
    })), (e.ruby = new e("ruby", {
      fontCharacter: "\\eb48"
    })), (e.saveAll = new e("save-all", {
      fontCharacter: "\\eb49"
    })), (e.saveAs = new e("save-as", {
      fontCharacter: "\\eb4a"
    })), (e.save = new e("save", {
      fontCharacter: "\\eb4b"
    })), (e.screenFull = new e("screen-full", {
      fontCharacter: "\\eb4c"
    })), (e.screenNormal = new e("screen-normal", {
      fontCharacter: "\\eb4d"
    })), (e.searchStop = new e("search-stop", {
      fontCharacter: "\\eb4e"
    })), (e.server = new e("server", {
      fontCharacter: "\\eb50"
    })), (e.settingsGear = new e("settings-gear", {
      fontCharacter: "\\eb51"
    })), (e.settings = new e("settings", {
      fontCharacter: "\\eb52"
    })), (e.shield = new e("shield", {
      fontCharacter: "\\eb53"
    })), (e.smiley = new e("smiley", {
      fontCharacter: "\\eb54"
    })), (e.sortPrecedence = new e("sort-precedence", {
      fontCharacter: "\\eb55"
    })), (e.splitHorizontal = new e("split-horizontal", {
      fontCharacter: "\\eb56"
    })), (e.splitVertical = new e("split-vertical", {
      fontCharacter: "\\eb57"
    })), (e.squirrel = new e("squirrel", {
      fontCharacter: "\\eb58"
    })), (e.starFull = new e("star-full", {
      fontCharacter: "\\eb59"
    })), (e.starHalf = new e("star-half", {
      fontCharacter: "\\eb5a"
    })), (e.symbolClass = new e("symbol-class", {
      fontCharacter: "\\eb5b"
    })), (e.symbolColor = new e("symbol-color", {
      fontCharacter: "\\eb5c"
    })), (e.symbolConstant = new e("symbol-constant", {
      fontCharacter: "\\eb5d"
    })), (e.symbolEnumMember = new e("symbol-enum-member", {
      fontCharacter: "\\eb5e"
    })), (e.symbolField = new e("symbol-field", {
      fontCharacter: "\\eb5f"
    })), (e.symbolFile = new e("symbol-file", {
      fontCharacter: "\\eb60"
    })), (e.symbolInterface = new e("symbol-interface", {
      fontCharacter: "\\eb61"
    })), (e.symbolKeyword = new e("symbol-keyword", {
      fontCharacter: "\\eb62"
    })), (e.symbolMisc = new e("symbol-misc", {
      fontCharacter: "\\eb63"
    })), (e.symbolOperator = new e("symbol-operator", {
      fontCharacter: "\\eb64"
    })), (e.symbolProperty = new e("symbol-property", {
      fontCharacter: "\\eb65"
    })), (e.wrench = new e("wrench", {
      fontCharacter: "\\eb65"
    })), (e.wrenchSubaction = new e("wrench-subaction", {
      fontCharacter: "\\eb65"
    })), (e.symbolSnippet = new e("symbol-snippet", {
      fontCharacter: "\\eb66"
    })), (e.tasklist = new e("tasklist", {
      fontCharacter: "\\eb67"
    })), (e.telescope = new e("telescope", {
      fontCharacter: "\\eb68"
    })), (e.textSize = new e("text-size", {
      fontCharacter: "\\eb69"
    })), (e.threeBars = new e("three-bars", {
      fontCharacter: "\\eb6a"
    })), (e.thumbsdown = new e("thumbsdown", {
      fontCharacter: "\\eb6b"
    })), (e.thumbsup = new e("thumbsup", {
      fontCharacter: "\\eb6c"
    })), (e.tools = new e("tools", {
      fontCharacter: "\\eb6d"
    })), (e.triangleDown = new e("triangle-down", {
      fontCharacter: "\\eb6e"
    })), (e.triangleLeft = new e("triangle-left", {
      fontCharacter: "\\eb6f"
    })), (e.triangleRight = new e("triangle-right", {
      fontCharacter: "\\eb70"
    })), (e.triangleUp = new e("triangle-up", {
      fontCharacter: "\\eb71"
    })), (e.twitter = new e("twitter", {
      fontCharacter: "\\eb72"
    })), (e.unfold = new e("unfold", {
      fontCharacter: "\\eb73"
    })), (e.unlock = new e("unlock", {
      fontCharacter: "\\eb74"
    })), (e.unmute = new e("unmute", {
      fontCharacter: "\\eb75"
    })), (e.unverified = new e("unverified", {
      fontCharacter: "\\eb76"
    })), (e.verified = new e("verified", {
      fontCharacter: "\\eb77"
    })), (e.versions = new e("versions", {
      fontCharacter: "\\eb78"
    })), (e.vmActive = new e("vm-active", {
      fontCharacter: "\\eb79"
    })), (e.vmOutline = new e("vm-outline", {
      fontCharacter: "\\eb7a"
    })), (e.vmRunning = new e("vm-running", {
      fontCharacter: "\\eb7b"
    })), (e.watch = new e("watch", {
      fontCharacter: "\\eb7c"
    })), (e.whitespace = new e("whitespace", {
      fontCharacter: "\\eb7d"
    })), (e.wholeWord = new e("whole-word", {
      fontCharacter: "\\eb7e"
    })), (e.window = new e("window", {
      fontCharacter: "\\eb7f"
    })), (e.wordWrap = new e("word-wrap", {
      fontCharacter: "\\eb80"
    })), (e.zoomIn = new e("zoom-in", {
      fontCharacter: "\\eb81"
    })), (e.zoomOut = new e("zoom-out", {
      fontCharacter: "\\eb82"
    })), (e.listFilter = new e("list-filter", {
      fontCharacter: "\\eb83"
    })), (e.listFlat = new e("list-flat", {
      fontCharacter: "\\eb84"
    })), (e.listSelection = new e("list-selection", {
      fontCharacter: "\\eb85"
    })), (e.selection = new e("selection", {
      fontCharacter: "\\eb85"
    })), (e.listTree = new e("list-tree", {
      fontCharacter: "\\eb86"
    })), (e.debugBreakpointFunctionUnverified = new e("debug-breakpoint-function-unverified", {
      fontCharacter: "\\eb87"
    })), (e.debugBreakpointFunction = new e("debug-breakpoint-function", {
      fontCharacter: "\\eb88"
    })), (e.debugBreakpointFunctionDisabled = new e("debug-breakpoint-function-disabled", {
      fontCharacter: "\\eb88"
    })), (e.debugStackframeActive = new e("debug-stackframe-active", {
      fontCharacter: "\\eb89"
    })), (e.debugStackframeDot = new e("debug-stackframe-dot", {
      fontCharacter: "\\eb8a"
    })), (e.debugStackframe = new e("debug-stackframe", {
      fontCharacter: "\\eb8b"
    })), (e.debugStackframeFocused = new e("debug-stackframe-focused", {
      fontCharacter: "\\eb8b"
    })), (e.debugBreakpointUnsupported = new e("debug-breakpoint-unsupported", {
      fontCharacter: "\\eb8c"
    })), (e.symbolString = new e("symbol-string", {
      fontCharacter: "\\eb8d"
    })), (e.debugReverseContinue = new e("debug-reverse-continue", {
      fontCharacter: "\\eb8e"
    })), (e.debugStepBack = new e("debug-step-back", {
      fontCharacter: "\\eb8f"
    })), (e.debugRestartFrame = new e("debug-restart-frame", {
      fontCharacter: "\\eb90"
    })), (e.callIncoming = new e("call-incoming", {
      fontCharacter: "\\eb92"
    })), (e.callOutgoing = new e("call-outgoing", {
      fontCharacter: "\\eb93"
    })), (e.menu = new e("menu", {
      fontCharacter: "\\eb94"
    })), (e.expandAll = new e("expand-all", {
      fontCharacter: "\\eb95"
    })), (e.feedback = new e("feedback", {
      fontCharacter: "\\eb96"
    })), (e.groupByRefType = new e("group-by-ref-type", {
      fontCharacter: "\\eb97"
    })), (e.ungroupByRefType = new e("ungroup-by-ref-type", {
      fontCharacter: "\\eb98"
    })), (e.account = new e("account", {
      fontCharacter: "\\eb99"
    })), (e.bellDot = new e("bell-dot", {
      fontCharacter: "\\eb9a"
    })), (e.debugConsole = new e("debug-console", {
      fontCharacter: "\\eb9b"
    })), (e.library = new e("library", {
      fontCharacter: "\\eb9c"
    })), (e.output = new e("output", {
      fontCharacter: "\\eb9d"
    })), (e.runAll = new e("run-all", {
      fontCharacter: "\\eb9e"
    })), (e.syncIgnored = new e("sync-ignored", {
      fontCharacter: "\\eb9f"
    })), (e.pinned = new e("pinned", {
      fontCharacter: "\\eba0"
    })), (e.githubInverted = new e("github-inverted", {
      fontCharacter: "\\eba1"
    })), (e.debugAlt = new e("debug-alt", {
      fontCharacter: "\\eb91"
    })), (e.serverProcess = new e("server-process", {
      fontCharacter: "\\eba2"
    })), (e.serverEnvironment = new e("server-environment", {
      fontCharacter: "\\eba3"
    })), (e.pass = new e("pass", {
      fontCharacter: "\\eba4"
    })), (e.stopCircle = new e("stop-circle", {
      fontCharacter: "\\eba5"
    })), (e.playCircle = new e("play-circle", {
      fontCharacter: "\\eba6"
    })), (e.record = new e("record", {
      fontCharacter: "\\eba7"
    })), (e.debugAltSmall = new e("debug-alt-small", {
      fontCharacter: "\\eba8"
    })), (e.vmConnect = new e("vm-connect", {
      fontCharacter: "\\eba9"
    })), (e.cloud = new e("cloud", {
      fontCharacter: "\\ebaa"
    })), (e.merge = new e("merge", {
      fontCharacter: "\\ebab"
    })), (e.exportIcon = new e("export", {
      fontCharacter: "\\ebac"
    })), (e.graphLeft = new e("graph-left", {
      fontCharacter: "\\ebad"
    })), (e.magnet = new e("magnet", {
      fontCharacter: "\\ebae"
    })), (e.notebook = new e("notebook", {
      fontCharacter: "\\ebaf"
    })), (e.redo = new e("redo", {
      fontCharacter: "\\ebb0"
    })), (e.checkAll = new e("check-all", {
      fontCharacter: "\\ebb1"
    })), (e.pinnedDirty = new e("pinned-dirty", {
      fontCharacter: "\\ebb2"
    })), (e.passFilled = new e("pass-filled", {
      fontCharacter: "\\ebb3"
    })), (e.circleLargeFilled = new e("circle-large-filled", {
      fontCharacter: "\\ebb4"
    })), (e.circleLargeOutline = new e("circle-large-outline", {
      fontCharacter: "\\ebb5"
    })), (e.combine = new e("combine", {
      fontCharacter: "\\ebb6"
    })), (e.gather = new e("gather", {
      fontCharacter: "\\ebb6"
    })), (e.table = new e("table", {
      fontCharacter: "\\ebb7"
    })), (e.variableGroup = new e("variable-group", {
      fontCharacter: "\\ebb8"
    })), (e.typeHierarchy = new e("type-hierarchy", {
      fontCharacter: "\\ebb9"
    })), (e.typeHierarchySub = new e("type-hierarchy-sub", {
      fontCharacter: "\\ebba"
    })), (e.typeHierarchySuper = new e("type-hierarchy-super", {
      fontCharacter: "\\ebbb"
    })), (e.gitPullRequestCreate = new e("git-pull-request-create", {
      fontCharacter: "\\ebbc"
    })), (e.runAbove = new e("run-above", {
      fontCharacter: "\\ebbd"
    })), (e.runBelow = new e("run-below", {
      fontCharacter: "\\ebbe"
    })), (e.notebookTemplate = new e("notebook-template", {
      fontCharacter: "\\ebbf"
    })), (e.debugRerun = new e("debug-rerun", {
      fontCharacter: "\\ebc0"
    })), (e.workspaceTrusted = new e("workspace-trusted", {
      fontCharacter: "\\ebc1"
    })), (e.workspaceUntrusted = new e("workspace-untrusted", {
      fontCharacter: "\\ebc2"
    })), (e.workspaceUnspecified = new e("workspace-unspecified", {
      fontCharacter: "\\ebc3"
    })), (e.terminalCmd = new e("terminal-cmd", {
      fontCharacter: "\\ebc4"
    })), (e.terminalDebian = new e("terminal-debian", {
      fontCharacter: "\\ebc5"
    })), (e.terminalLinux = new e("terminal-linux", {
      fontCharacter: "\\ebc6"
    })), (e.terminalPowershell = new e("terminal-powershell", {
      fontCharacter: "\\ebc7"
    })), (e.terminalTmux = new e("terminal-tmux", {
      fontCharacter: "\\ebc8"
    })), (e.terminalUbuntu = new e("terminal-ubuntu", {
      fontCharacter: "\\ebc9"
    })), (e.terminalBash = new e("terminal-bash", {
      fontCharacter: "\\ebca"
    })), (e.arrowSwap = new e("arrow-swap", {
      fontCharacter: "\\ebcb"
    })), (e.copy = new e("copy", {
      fontCharacter: "\\ebcc"
    })), (e.personAdd = new e("person-add", {
      fontCharacter: "\\ebcd"
    })), (e.filterFilled = new e("filter-filled", {
      fontCharacter: "\\ebce"
    })), (e.wand = new e("wand", {
      fontCharacter: "\\ebcf"
    })), (e.debugLineByLine = new e("debug-line-by-line", {
      fontCharacter: "\\ebd0"
    })), (e.inspect = new e("inspect", {
      fontCharacter: "\\ebd1"
    })), (e.layers = new e("layers", {
      fontCharacter: "\\ebd2"
    })), (e.layersDot = new e("layers-dot", {
      fontCharacter: "\\ebd3"
    })), (e.layersActive = new e("layers-active", {
      fontCharacter: "\\ebd4"
    })), (e.compass = new e("compass", {
      fontCharacter: "\\ebd5"
    })), (e.compassDot = new e("compass-dot", {
      fontCharacter: "\\ebd6"
    })), (e.compassActive = new e("compass-active", {
      fontCharacter: "\\ebd7"
    })), (e.azure = new e("azure", {
      fontCharacter: "\\ebd8"
    })), (e.issueDraft = new e("issue-draft", {
      fontCharacter: "\\ebd9"
    })), (e.gitPullRequestClosed = new e("git-pull-request-closed", {
      fontCharacter: "\\ebda"
    })), (e.gitPullRequestDraft = new e("git-pull-request-draft", {
      fontCharacter: "\\ebdb"
    })), (e.debugAll = new e("debug-all", {
      fontCharacter: "\\ebdc"
    })), (e.debugCoverage = new e("debug-coverage", {
      fontCharacter: "\\ebdd"
    })), (e.runErrors = new e("run-errors", {
      fontCharacter: "\\ebde"
    })), (e.folderLibrary = new e("folder-library", {
      fontCharacter: "\\ebdf"
    })), (e.debugContinueSmall = new e("debug-continue-small", {
      fontCharacter: "\\ebe0"
    })), (e.beakerStop = new e("beaker-stop", {
      fontCharacter: "\\ebe1"
    })), (e.graphLine = new e("graph-line", {
      fontCharacter: "\\ebe2"
    })), (e.graphScatter = new e("graph-scatter", {
      fontCharacter: "\\ebe3"
    })), (e.pieChart = new e("pie-chart", {
      fontCharacter: "\\ebe4"
    })), (e.bracket = new e("bracket", e.json.definition)), (e.bracketDot = new e("bracket-dot", {
      fontCharacter: "\\ebe5"
    })), (e.bracketError = new e("bracket-error", {
      fontCharacter: "\\ebe6"
    })), (e.lockSmall = new e("lock-small", {
      fontCharacter: "\\ebe7"
    })), (e.azureDevops = new e("azure-devops", {
      fontCharacter: "\\ebe8"
    })), (e.verifiedFilled = new e("verified-filled", {
      fontCharacter: "\\ebe9"
    })));
  })(l || (l = {})));
};